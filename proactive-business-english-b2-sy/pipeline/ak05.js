// Proactive Business English B2 · Syria Edition · Book 1 · Unit 5 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 5  Policy, Not Procedure'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit writes one document across six cycles and that is new.** **Units 1 to 4 wrote a new thing each cycle; Unit 5 writes a credit policy in four sections and then reads it as the other side.** ⚠ **Tell the class at the start that 5.1 to 5.6 are one document**, **or they will treat each cycle as a separate exercise and the cumulative point — that a policy is a machine whose parts have to fit — will be lost.**',
  '⚠ **The distinction the whole unit rests on is in the first track and it is worth the first ten minutes:** ⚠ **an instruction names a case and a rule names a class.** **Every workplace in the room runs on instructions, and most learners have never been asked to write a rule at all.** ⚠ **Expect the first drafts to be instructions with policy vocabulary on them, which is the fault 5.1 exists to catch.**',
  '⚠ **The method that does the work is the invented case.** ⚠ *Walk an imaginary customer through the door.* **Nobody finds a bad definition by reading a policy** — **they find it by putting a case against it, and the case that breaks a rule in a classroom has broken it cheaply.** **Use it at 5.1, 5.2 and 5.4.**',
  '⚠ **5.6 is the cycle that separates this unit from a drafting exercise and it should not be rushed.** **Reading your own document in the voice of the person most likely to use it against you produces three or four changes, and the finding at the end of it is the one to leave with:** ⚠ **a policy with nothing in it that can be used against you imposes no obligations on you at all, and a reader knows exactly what it is.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 1 at 40 to 50 words, 10 marks** — **the third Part 1 in the book.** **The exam practice is Reading Part 2, sentence insertion: five gaps, six options, one not needed.**',
], C.grey, C.navy));

// ===================== 5.1 =====================
out.push(h2('5.1  A rule for a case nobody has met'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect a rule written for a case that has since been settled and is still being applied**, which is the commonest shape, and the second commonest is a rule that met a new case and was simply ignored.'));
out.push(p('**b**  The **first** is an instruction (it names a case); the **second** is a rule (it names a class). ⚠ **And the second catches Jaramana as well, which is the point.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Mr Ayoub already said it to the counter in January and nothing happened** — **an instruction has to be remembered by whoever is on the counter, and a rule is a thing the counter can point at.** **And a rule written for one case stops being a rule the day that case is settled.**  2 ⚠ **Invent a case nobody has met and read the rule against it.**'));
out.push(p('⚠ **The three invented cases in the track are a model and should be used again at 5.2 and 5.4.** **A customer who has gone quiet but is not overdue — the rule correctly misses him.** **A customer who pays in full on day ninety, deliberately, every time — the rule catches him every month and he is one of the four best accounts.** ⚠ **A customer who is also a supplier — the rule cannot be applied at all, because *account* means two things.** ⚠ **The third is the one that matters: a case that breaks a rule by exposing an undefined word is a 5.4 problem found in 5.1, and that is how definitions get written.**'));
out.push(p('**Language box – Practise (sample):**  _**Instruction:** *do not let the Thursday lorry leave before the Ghouta load is on.* **Rule:** ⚠ *no vehicle leaves the yard with a part-loaded run on the sheet.* **Invented cases: 1** a run cancelled by the customer after loading began — the rule catches it and should not. **2** a vehicle leaving empty for a collection — not a run, correctly missed. ⚠ **3** a run split between two vehicles, which breaks it: *the run* is on one sheet and on two lorries, and *a part-loaded run* has no meaning._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your rule is: no further goods to any account more than sixty days overdue. Here is a customer. He owes us 300,000, ninety days old. We owe him 280,000 for plating, sixty days old.'],
  ['A', 'Then he is overdue and we stop supplying him.'],
  ['B', 'He will say he is twenty thousand overdue, not three hundred.'],
  ['A', 'That is not what the ledger says.'],
  ['B', 'Which ledger? There are two entries for him, one on each side.'],
  ['A', '…So *account* means either the customer or the ledger balance.'],
  ['B', 'And which did you mean?'],
  ['A', 'The ledger balance, taken on its own.'],
  ['B', 'Then write that, because you have just decided it and nobody else will know you did.']
]));
out.push(p('⚠ **The last line is the finding to draw out.** ⚠ **An undefined word is not a gap in the policy; it is a decision that has been taken by whoever reads the policy next** — **and the person who drafted it does not know they left the decision open.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the instruction, the rule, the case that broke it and the word that meant two things. **Typical errors:** a named customer left inside a rule · a date in a rule (*this month · until the end of the year*) · ⚠ **and the content fault, which is a learner who invents three cases the rule handles comfortably.** **An invented case that does not test anything has not been invented; it has been chosen.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The instruction', 'The class', 'The rule', 'The invented case that breaks it'], [
  ['*do not supply Jaramana until they pay*', 'overdue accounts', '⚠ **_no further goods to any account more than sixty days overdue_**', '⚠ **a customer who is also a supplier — *account* means two things**'],
  ['*do not let the Thursday lorry go part-loaded*', 'part-loaded runs', '*no vehicle leaves with a part-loaded run on the sheet*', '⚠ **a run split between two vehicles — *the run* is on one sheet and two lorries**'],
  ['*Fadi is not to mark at night on his own*', 'first-time night markers', '*a marker works their first four night shifts with a second marker present*', '**a marker returning after two years away — is he first-time?**'],
  ['*the scrap in the fourth store is to be written off*', 'unsaleable stock', '*stock that cannot be sold as first quality is written off at the next count*', '⚠ **stock that can be sold as seconds — the rule writes off something saleable**'],
], [1.6, 1.1, 1.9, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The instruction was that the scrap in the fourth store is to be written off. The class is unsaleable stock. The rule is: stock that cannot be sold as first quality is written off at the next count. And it breaks on stock that can be sold as seconds — because *written off* and *cannot be sold as first quality* are not the same class, and the rule throws away something we could sell."', '⚠ **Count how many rules broke on a word that means two things: it is most of them.** ⚠ **Then ask how many of the original instructions have already met a case they were not written for**, and expect the answer to be nearly all, with nobody having changed the instruction.']));
out.push(stage('5', 'Read'));
out.push(p('**1** **The first names one customer, so the rule ends when Jaramana pays.** ⚠ **The second names a class — *similar cases* — and then declines to say what it is similar to**, **and *referred to Mr Ayoub* is not a decision.**  **2** ⚠ *Takes effect from* **and** *on or after*. ⚠ **Without them the first argument the rule meets is about an order placed in March and delivered in April** — **which is not a hard case and will happen in the first fortnight.**  **3** **The quiet customer: the rule does not catch him, correctly — a different policy.** **The day-ninety payer: the rule catches him every month and he is one of the four best accounts, which is 5.3.** ⚠ **The customer who is also a supplier: the rule cannot be applied at all until *account* is defined, which is 5.4.**'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — DRAFT 1, AND WHY IT IS WRONG. 24 March. H. Mourad.**',
  '**Draft 1.** _The Thursday lorry is not to leave until the Ghouta load is on. Any other part-loads should be referred to the yard._',
  '⚠ **Twenty-three words and both sentences are instructions.** **The first names one vehicle and one run. The second names a class and then hands it to a place rather than a person.**',
  table(['', 'Draft 1', 'What is wrong', 'Draft 2'], [
    ['**the subject**', '*the Thursday lorry*', '⚠ **one vehicle; the rule ends when the timetable changes**', '⚠ **_any vehicle_**'],
    ['**the trigger**', '*until the Ghouta load is on*', '⚠ **one run, and no measure for any other**', '⚠ **_with a run on the sheet not fully loaded_**'],
    ['**the obligation**', '*is not to leave*', '⚠ **nobody in it — who is not letting it leave?**', '**_the gateman does not release it_**'],
    ['**the escape**', '*referred to the yard*', '⚠ **a place cannot decide; and *referred* is not a decision**', '**5.3 — a named person and a record**'],
  ], [1.2, 2.2, 2.6, 2]),
  '**Draft 2.** ⚠ **_The gateman does not release a vehicle with a run on the sheet not fully loaded. This takes effect from 1 April and applies to runs sheeted on or after that date._**',
  '⚠ **The three cases I walked through the door.** **A run cancelled after loading began — caught, and should not be; that needs an exclusion.** **A vehicle leaving empty to collect — not a run, correctly missed.** ⚠ **A run split between two vehicles — breaks it completely, because *the run* is one sheet and two lorries and *not fully loaded* has no meaning.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A class in the subject, not a case', '✓ *any vehicle*'],
  ['A measure in the trigger, readable off a document', '✓ ⚠ **and it is readable off the sheet the gateman already holds, which is the best kind**'],
  ['Somebody named as doing the not-doing', '✓ the gateman'],
  ['A commencement date and *on or after*', '✓'],
  ['Three invented cases, including one the rule should miss', '✓ ⚠ **and one it catches wrongly, which the sample then sends to 5.2** — **that is the right place for it**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a measure readable off a document. The line I am marking is **_with a run on the sheet not fully loaded.__** What I found: *fully loaded* is a measure the gateman cannot read. He can see a sheet and he can see a lorry; he cannot see whether a lorry is full. Either the sheet carries a line count or the rule is a judgement at a gate in the dark."_ ⚠ **That review is correct and it is the kind 5.1 should produce: a trigger that looks like a measure and is a judgement.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their invented case that broke the rule. ⚠ **The class says which of the four parts it broke** — **subject, trigger, obligation or escape.** ⚠ **Most breaks are in the trigger, and most of those are a word that means two things**, which is the bridge to 5.4.'));
out.push(stage('7', 'Write freely – sample (227 words)'));
out.push(sample(null, [
  'We have a rule that nobody may approve their own expenses, and in 2020 it met a case it was not written for and the case won.',
  'The rule was written in about 2012 for a sales office of fourteen people, and it is a good rule. In 2020 the company had an office in Homs with two people in it, one of whom reported to the other, and the other was on maternity leave for seven months.',
  'So for seven months one man in Homs submitted his own expenses and approved them, because the only alternative was to send them to Damascus, which nobody had authorised and which would have taken three weeks a time. He wrote a note about it in the first month. The note went to the finance office and nothing came back.',
  'What was done was that he carried on and the auditors raised it the following March, in the management letter, as a control weakness. His note was not mentioned, because nobody had replied to it and it was therefore in nobody\'s file but his.',
  'The rule was not changed. What happened instead was that somebody in Damascus was named as the approver for Homs, verbally, and when that person left in 2022 nobody replaced her and the arrangement lapsed.',
  'So the rule is intact, it has been departed from for about three of the last five years, and there is no record of a single departure.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the rule changed, or only departed from? The line I copied is **_So the rule is intact, it has been departed from for about three of the last five years, and there is no record of a single departure.__** What I found: that is three findings in one sentence and the third is the worst. The rule is not the problem; the absence of 5.3 is."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three rules to have been departed from and never changed, and expect the same case to have come back in two of three.** ⚠ **Name the pattern: a rule that meets a case it cannot handle is not amended, it is quietly suspended** — **and because the suspension is unwritten, it has no end date and nobody knows whether it is still running.** **That is 5.3, and the class will meet it in two cycles.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for three imaginary cases walked through the door.** ⚠ **Mark the cases, not the rule.** **Three cases the rule handles comfortably means the learner has chosen rather than invented** — **and the test is whether any of them produced a change.** **A learner whose rule survived all three has not pushed hard enough; send them back with the customer-who-is-also-a-supplier case, which breaks almost anything.**',
], C.lblue, C.navy));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  Scope and exclusion'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The argument is almost always that the rule was written for a different kind of case** — **which is sometimes true and is exactly what an exclusion decides in advance.**'));
out.push(p('**b**  The **second** closes the argument. ⚠ **Three exclusions is not padding; it is three arguments that will not now happen at a counter.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Staff purchases · the two Baghdad Street concession stalls · goods going back out under warranty.**  2 ⚠ **For the fourth case — the one already covered by the words that somebody will argue about anyway.** *For the avoidance of doubt, a part exchange is a supply.* **The rule already said so; the sentence stops the argument.**'));
out.push(p('⚠ **The sentence to put on the board is Hala\'s and learners recognise it instantly:** ⚠ **the policy is not the one you wrote — it is the one Lina makes at twenty past four on a Thursday because a man is waiting and she has nothing to point at.** ⚠ **Every exclusion you do not write is granted by whoever is asked.**'));
out.push(p('⚠ **And the distinction at the end is the one that gets mixed up.** ⚠ **An exclusion changes what the rule covers; a *for the avoidance of doubt* changes nothing.** ⚠ **Mix them and you will exclude something you meant to catch** — **which is the commonest fault in a first policy and the subject of role card 2.**'));
out.push(p('**Language box – Practise (sample):**  _**Applies to:** every run sheeted at either yard, whether for delivery or collection. **Does not apply to:** ⚠ **(a) a vehicle going out empty to collect** — not a run · **(b) the two concession stalls\' own van** — not ours · **(c) a run cancelled by the customer after loading began** — the loss is already incurred. ⚠ **For the avoidance of doubt, a run split between two vehicles is one run and the sheet governs both.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'This does not apply to trade customers.'],
  ['B', 'Who is now outside the rule?'],
  ['A', 'The stalls. That is what I meant.'],
  ['B', 'Read your own ledger. Who is a trade customer?'],
  ['A', '…Nine of our eleven largest accounts.'],
  ['B', 'Including Jaramana?'],
  ['A', 'Including Jaramana.'],
  ['B', 'So the exclusion you wrote to cover two concession stalls has taken out the customer the whole policy exists for, and it reads like a perfectly reasonable sentence.'],
  ['A', 'Nobody would have noticed.'],
  ['B', 'Nobody would have noticed until November, which is when they noticed last time.']
]));
out.push(p('⚠ **The method in role card 2 is one question and it should be a habit: after every exclusion, name who is now outside the rule.** ⚠ **Not the class — the actual accounts, counted.** **A learner who does that finds an over-reaching exclusion in about one draft in three.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the scope, the three exclusions and the avoidance, and say which is doing the least work. **Typical errors:** an exclusion that swallows the rule · a *for the avoidance of doubt* that actually changes the scope, which is an exclusion in the wrong clothes · ⚠ **and the content fault, which is nine exclusions.** **A reader counts them, and nine reads as nine arguments lost in advance.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The rule', 'Applies to', 'Does not apply to', 'For the avoidance of doubt'], [
  ['the credit rule', 'every account on the customer ledger, both sites, however the order is placed', '⚠ **staff purchases (11 people) · the two stalls (2) · warranty replacements (about 9 a year)**', '⚠ **a part exchange is a supply**'],
  ['the part-load rule', 'every run sheeted at either yard', 'empty collection runs · the stalls\' own van · a run cancelled after loading', '⚠ **a run split between two vehicles is one run**'],
  ['the night-marking rule', 'every marker\'s first four night shifts', 'a marker returning within twelve months', '**a shift beginning before midnight is a night shift**'],
], [1.3, 1.6, 2.1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It applies to every run sheeted at either yard. It does not apply to empty collection runs, to the concession stalls\' own van, or to a run cancelled by the customer after loading began. And for the avoidance of doubt, a run split between two vehicles is one run and the sheet governs both."', '⚠ **Count the exclusions that take out more than they were meant to**, and then ask the question that lands the cycle: ⚠ **whose job is it at the moment to answer the excluded cases?** **The answer is whoever is asked**, and in every workplace in the room that is somebody with no authority and nothing to point at.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The count column** — **eleven people, two stalls, about nine warranty replacements a year.** ⚠ **It is in no policy anybody has read and it shows that the entire hole in the rule is small, in four seconds.**  **2** ⚠ *Trade customers.* **She meant the two stalls.** ⚠ **It would have taken out nine of the eleven largest accounts — the people the rule exists for — and it reads as a perfectly reasonable sentence, and nobody would have noticed until November.**  **3** ⚠ **Because Jaramana\'s November order was placed by telephone to the yard**, **and the yard is not a counter and does not have the ledger in front of it.** ⚠ **It is the scope being written wide enough to include the way the problem actually happened.**'));
out.push(stage('6', 'Write with help – sample (145 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — SCOPE. 26 March. H. Mourad. Section 1 of 4.**',
  '**1.1  This policy applies to** ⚠ **every run sheeted at either yard, whether for delivery or collection, and whether sheeted the evening before or on the morning of the run.**',
  '**1.2  This policy does not apply to:**',
  table(['', 'The exclusion', 'Why', 'How many runs'], [
    ['**(a)**', '**a vehicle going out empty to collect**', 'it is not a run; there is nothing to part-load', '⚠ **about four a week**'],
    ['**(b)**', '**the concession stalls\' own van**', 'it is not ours and is not sheeted here', '**two a week**'],
    ['**(c)**', '⚠ **a run cancelled by the customer after loading has begun**', '⚠ **the loss is already incurred and holding the vehicle adds to it**', '⚠ **three last year**'],
  ], [0.5, 2.3, 2.9, 1.3]),
  '**1.3  For the avoidance of doubt**, ⚠ **a run split between two vehicles is one run, and the sheet governs both vehicles.**',
  '⚠ **Three exclusions, one avoidance, and a count against each: about four a week, two a week, and three last year.** **The hole is six runs a week out of about forty, and a reader can see that without asking.**',
  '⚠ **The exclusion I nearly wrote and did not is *collections*.** **I meant empty collection runs.** ⚠ **_Collections_ would have taken out about a third of everything we sheet**, **including the Ghouta collections which are exactly the ones that go part-loaded.**',
  '⚠ **And 1.1 says *whether sheeted the evening before or on the morning* for one reason.** **The three worst part-loads last year were all sheeted the night before by somebody who had gone home.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count against every exclusion', '✓ and one of them is *three last year*, which is the right unit for a rare case'],
  ['A reason in the same row as each exclusion', '✓ ⚠ **and (c)\'s reason is the best: *holding the vehicle adds to it***'],
  ['Every exclusion checked for over-reach by naming who is outside', '✓ *collections* caught before issue'],
  ['The scope wide enough to include how the problem happened', '✓ sheeted the night before by somebody who had gone home'],
  ['One avoidance, and it changes nothing', '✗ ⚠ **1.3 changes something** — **if a split run is *one run*, the rule now catches a case it did not clearly catch before, so it is an exclusion\'s opposite and belongs in 1.1**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review, and it is the hardest finding in the cycle:** _"Criterion: one avoidance, and it changes nothing. The line I am marking is **_a run split between two vehicles is one run, and the sheet governs both vehicles.__** What I found: that is not an avoidance of doubt, it is a decision. Before it, a split run arguably fell outside *a run*; after it, both lorries are caught. It is scope, and it should be in 1.1 where a reader looks for scope."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their *for the avoidance of doubt*. ⚠ **The class decides whether it changes the scope.** ⚠ **About half will**, **and the remedy is always the same: move it into the scope clause, where a reader looks for what the rule covers.**'));
out.push(stage('7', 'Write freely – sample (230 words)'));
out.push(sample(null, [
  'Our overtime rule has an exclusion nobody has ever written and it was granted at a gate in about 2016 by a man who no longer works here.',
  'The rule is that overtime is approved in advance by a manager. The exclusion is that if a lorry is still being unloaded at six o\'clock, the men finish it and the hours go on the sheet. Nobody has ever approved that in advance and nobody could: the lorry arrives when it arrives.',
  'What happened in 2016, as far as I can reconstruct it, is that a shift supervisor called Rafi told two men to finish a lorry and signed their sheet himself, and the hours were paid. He did it perhaps thirty times. He left in 2018 and the practice did not.',
  'It is now simply how it works. The men know, the gate knows, the wages clerk knows, and three managers have signed those sheets without comment. Nobody has written a sentence.',
  'The difficulty is that the exclusion is right. The alternative is a part-unloaded lorry standing overnight in the yard, which has its own cost and once had a theft. What is wrong is not the practice, it is that it has no words, so it has no boundary — and last August somebody stayed until nine on a lorry that could have waited, and nobody could say whether that was inside the rule or outside it.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the exclusion ever written down? The line I copied is **_What is wrong is not the practice, it is that it has no words, so it has no boundary.__** What I found: that is the cycle in one sentence and it is better than the book\'s version. An unwritten exclusion is not loose, it is unbounded — and the August nine o\'clock is what unbounded costs."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three exclusions to have been granted at a counter or a gate by somebody with nothing to point at, and all three to have been granted the same way ever since.** ⚠ **Then draw out the sample\'s finding, which the unit implies and does not state: the problem with an unwritten exclusion is not that it is wrong but that it has no edge** — **and the first case that tests the edge cannot be decided by anybody.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for three exclusions with a count against each and a named who-is-outside after each one.** ⚠ **The who-is-outside is the piece to mark.** **A learner who writes a class — *trade customers · contractors · casual staff* — has not done it; one who writes *nine of our eleven largest accounts, including Jaramana* has.**',
], C.lblue, C.navy));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  Who may decide an exception'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect *it depends* and *whoever is around*, and expect almost nobody to have it in writing.**'));
out.push(p('**b**  The **second** can be audited. ⚠ **_Management discretion_ cannot be audited, cannot be refused and cannot be appealed, because there is no management — there are people.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because a rule everybody may set aside is a suggestion.**  2 ⚠ **He is one of the four best accounts and the rule catches him every month** — **he needs a standing exemption with a review date, or somebody stops his order in August and the firm loses a six-year account to a policy it asked for.**'));
out.push(p('⚠ **The September-to-November sequence is the most useful thing in Unit 5 and should be told as a story.** ⚠ **One order on credit in September, for a good reason — the man\'s son had died — and Mr Ayoub was right.** ⚠ **Another in October from the counter, because the counter had seen September and assumed it was the arrangement.** ⚠ **240,000 by November, and nobody had decided anything since September.** **Then the sentence: the record is what makes the second one a decision instead of a precedent.**'));
out.push(p('⚠ **And the clause nobody drafts is the deputy clause.** ⚠ *Write what happens when I am in Homs.* **The principal is away more often than anybody drafting a policy expects, and the deputy clause is the one that gets used** — **so it needs a limit (one order, one month, and tell me when I am back), not a second discretion.**'));
out.push(p('**Language box – Practise (sample):**  _⚠ **Only the yard foreman may authorise a vehicle to leave part-loaded. In his absence the gateman may do so for one run and shall tell him the next morning. Every departure is written on the run sheet with the time and initials. A departure for one run does not apply to any later run.** ⚠ **The Ghouta Monday run is exempt until 30 September, because it is loaded in two drops by arrangement with the customer.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'September: Mr Ayoub lets Jaramana have one order on credit because the man\'s son had died.'],
  ['A', 'Which was right.'],
  ['B', 'October: the counter gives them another. On what?'],
  ['A', 'On September. They had seen it and assumed it was the arrangement.'],
  ['B', 'And November?'],
  ['A', 'Two hundred and forty thousand, and nobody has decided anything since September.'],
  ['B', 'So what would the record have changed?'],
  ['A', 'The counter would have seen *one order, September, initials, date*.'],
  ['B', 'And?'],
  ['A', 'And the October release would have been a decision somebody had to take, instead of a precedent they thought they were following.']
]));
out.push(p('⚠ **The last line is the sentence to get out of the pair and it is worth waiting for.** ⚠ **The record does not stop the second exception; it stops the second exception from being automatic.** **Learners first say the record is *for the auditor*, which is the wrong answer and is what every unread policy says.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the name, the deputy and the limit, the record and its place, and the standing exception with its review date. **Typical errors:** *management discretion* · two names with no limit on either, which is two discretions · a record kept in a file the counter cannot see · ⚠ **and the content fault, which is a standing exemption with no review date.** **Without one it is not an exception, it is a second policy with one customer in it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The rule', 'Who may authorise', 'The deputy, and the limit', 'The record, and where'], [
  ['the credit rule', '**Mr Ayoub**', '⚠ **the office manager, one order, one month, reported on his return**', '**on the account in the customer ledger, date and initials**'],
  ['the part-load rule', 'the yard foreman', '⚠ **the gateman, one run, told the next morning**', '**on the run sheet, time and initials**'],
  ['the night-marking rule', 'the warehouse', '⚠ **nobody — and that is a fault; there is no deputy and he takes leave in August**', 'on the gate sheet'],
], [1.3, 1.3, 1.9, 1.9]));
out.push(p('⚠ **The third row is the finding and it is common: a rule with an exception-holder and no deputy.** ⚠ **It works until the holder takes leave, and then the exception is granted by whoever is asked** — **which is the state the policy was written to end.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Only the yard foreman may authorise a part-loaded departure. In his absence the gateman may, for one run, and tells him the next morning. The record goes on the run sheet with the time and initials. And the standing exemption is the Ghouta Monday run, which is loaded in two drops by arrangement, reviewed on 30 September."', '⚠ **Count the unwritten exception-holders, and then ask the question that produces the best material in the cycle:** ⚠ **how many exceptions at your workplace have already become rules?** **Let people name them.** **In a working class there are always three or four, and at least one is costing money.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **It prevents generosity from becoming a standing arrangement nobody chose.** **It does not prevent generosity** — **September was right and 3.4 leaves September intact.**  **2** ⚠ **Because Mr Sabbagh pays in full on day ninety every time and has for six years, so under section 2 he is sixty days overdue every month.** ⚠ **The rule is right and it catches him wrongly** — **and without 3.5 somebody stops his order in August while Mr Ayoub is in Homs, and a six-year account is lost to a policy the firm asked for.**  **3** ⚠ **So that whoever renews it has to say why.** **A standing exemption without a review date is a second policy with one customer in it**, **and in five years nobody will remember why it exists.**'));
out.push(stage('6', 'Write with help – sample (151 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — DEPARTURES. 28 March. H. Mourad. Section 3 of 4.**',
  table(['', 'The clause', 'The reason, in the margin'], [
    ['**3.1**', '⚠ **_The yard foreman may authorise a vehicle to leave part-loaded._**', '⚠ **one name. A rule everybody may set aside is a suggestion.**'],
    ['**3.2**', '⚠ **_In his absence the gateman may do so for one run, and shall tell him the next morning._**', '⚠ **he is away six weeks a year. This is the clause that gets used.**'],
    ['**3.3**', '**_Every departure is written on the run sheet with the time and the initials of the person authorising it._**', '⚠ **on the sheet, which goes back to the office that evening. A record in the foreman\'s head is not a record.**'],
    ['**3.4**', '⚠ **_A departure authorised for one run does not apply to any later run._**', '⚠ **the Thursday lorry went part-loaded eleven times last autumn on the strength of one authorisation in September.**'],
    ['**3.5**', '⚠ **_A standing exemption may be granted in writing with a review date not more than six months ahead. The Ghouta Monday run is exempt until 30 September._**', '⚠ **it is loaded in two drops by arrangement with the customer, and it is not a part-load at all**'],
  ], [0.6, 4.1, 2.8]),
  '⚠ **3.4 is the sentence this section exists for.** **One authorisation in September became eleven part-loaded Thursdays by Christmas, and nobody authorised ten of them.** **3.4 does not stop the first one; it stops the first one from being a standing arrangement.**',
  '⚠ **And 3.5 exists because the rule catches something that is not the thing it is for.** **The Ghouta Monday run has been loaded in two drops since 1 March by agreement** — ⚠ **and without 3.5 the gateman stops it one Monday in August and we break an arrangement with a customer in order to keep a rule about part-loads.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One name, and only one', '✓'],
  ['A deputy with a limit, not a second discretion', '✓ ⚠ **and the margin gives the reason: six weeks a year**'],
  ['The record, and where it lives', '✓ ⚠ **and *goes back to the office that evening* is the detail that makes it a real record**'],
  ['A no-precedent sentence', '✓ with a count behind it — eleven Thursdays'],
  ['A standing exemption with a review date, and a reason in the margin', '✓'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the record and where it lives. The line I am marking is **_Every departure is written on the run sheet with the time and the initials.__** What I found: the sheet goes to the office that evening, which is good, and the gateman at six the next morning does not have last night\'s sheet. The person who needs to see the record is the next person at the gate, and he cannot."_ ⚠ **That review finds what the unit asks for and the sample missed: a record is in the right place only if the next decision-maker can see it.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their no-precedent sentence, ⚠ **and the class asks for the count behind it** — **how many times the precedent was followed.** **A no-precedent sentence with a real number behind it is the one that survives the next revision.**'));
out.push(stage('7', 'Write freely – sample (234 words)'));
out.push(sample(null, [
  'Somebody let a customer collect without a signed delivery note in 2019 and we have not asked for one at that gate since.',
  'What happened was that a driver arrived for a customer who had collected from us for eleven years, the office was shut, and the storeman let him take the pallets and wrote the customer\'s name on the sheet himself. That was sensible. The customer is still a customer and has never disputed a delivery in his life.',
  'The second time was two months later and a different storeman, and what he was going on was the first time. He had seen the sheet with a name written in somebody else\'s hand and he assumed that was how that customer worked. Nobody told him anything. There was no record of a decision because there had been no decision — there had been a man being sensible on a Friday.',
  'It is now the arrangement. That customer collects about forty times a year and has not signed since 2019.',
  'In February a pallet went missing between his lorry and his yard and he said he had never received it, and we have no signature for any collection he has made in six years. We wrote it off. It was about nineteen thousand.',
  'The person who was being sensible on a Friday in 2019 was right. The person who copied him two months later had nothing to read.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: what was the second grantor going on? The line I copied is **_He had seen the sheet with a name written in somebody else\'s hand and he assumed that was how that customer worked.__** What I found: he was not following a precedent, he was reading a document. The first man left a record of the act and no record of the reason, and a record without a reason is a precedent with no edge."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three second exceptions to have been granted by somebody who had only seen the first, and expect two of three first grantors not to have granted the second.** ⚠ **Draw out the sample review\'s distinction, which is sharper than the unit\'s: the second person is usually not copying a decision, they are reading a document** — **so the remedy is not *tell people* but *write the reason beside the act*.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the exception-holder, the deputy, the record\'s place and the no-precedent sentence.** ⚠ **Mark the deputy clause and the record\'s place.** **A learner with no deputy has written a policy that lapses whenever one person is on leave**, **and a record in a place the next decision-maker cannot see is not a record at all.**',
], C.lblue, C.navy));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  The definition that does the work'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect *urgent*, *complete*, *delivered*, *approved* and *confirmed***, and expect the two meanings to be a sender\'s meaning and a receiver\'s meaning.'));
out.push(p('**b**  The **second**. ⚠ **The first is circular — *confirmed means confirmed*** — **and a circular definition is the commonest kind in a real policy.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The plater\'s gauge in January (told on the telephone, never acknowledged) · Jaramana\'s disputed November order · the eleven export quotations, and whether they are orders at the old price.**  2 ⚠ **It is a line a reader has to get past to reach the one that matters.**'));
out.push(p('⚠ **Bassel\'s test is the cycle and it is mechanical: name three arguments it settles, each with money in it.** ⚠ **If you cannot name three, it is not the word.** **It cuts eleven definitions to two in about four minutes, and learners can apply it to their own documents without a teacher.**'));
out.push(p('⚠ **And the honesty test at the end is the one that makes the cycle more than drafting.** ⚠ **The definition settles the plater argument *against* Sham Trading — they never sent an acknowledgement.** ⚠ *A definition that only ever helps you is a definition you have written round yourself, and the other side will read it too.* **Losing that argument in March instead of in a hearing is the definition earning its place.**'));
out.push(p('**Language box – Practise (sample):**  _**The word:** *a part-load.* **Three arguments: 1** the Thursday Ghouta run, which is two drops by arrangement and is not a part-load at all. **2** a run loaded to the tail but with one pallet left on the floor because it would not fit — part-loaded or full? ⚠ **3** a run split between two vehicles, where each lorry is full and the run is not. ⚠ **Definition: _a run is part-loaded if any item on the run sheet has not been loaded onto a vehicle allocated to that run._** **Which settles all three, and settles the second against us: the pallet on the floor makes it a part-load.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'A part-load is a run where the vehicle has spare capacity.'],
  ['B', 'Read that as the yard foreman who wants to send a lorry out.'],
  ['A', '…Every lorry has spare capacity. You can always get another pallet on.'],
  ['B', 'So the rule catches everything.'],
  ['A', 'Which means it catches nothing, because nobody can apply it.'],
  ['B', 'Now read your other version as the same man. *Any item on the run sheet not loaded onto a vehicle allocated to that run.*'],
  ['A', 'That one he can apply. He looks at the sheet and he looks at the lorry.'],
  ['B', 'And does it ever go against him?'],
  ['A', 'Yes. The pallet on the floor. He has always sent those out and now he cannot.'],
  ['B', 'Then it is a definition and not a wish.']
]));
out.push(p('⚠ **Two tests are running in that sample and both are worth naming.** ⚠ **First: can the person at the sharp end apply it from what is in front of them?** *Spare capacity* **cannot be read off anything.** ⚠ **Second: does it ever go against them?** **A definition that never costs the firm anything is a wish.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the definition and the three arguments it settles. **Typical errors:** a circular definition · a definition of a word nobody argues about · a definition the person at the sharp end cannot apply · ⚠ **and the content fault, which is a definition that goes the writer\'s way in all three arguments.** **Send those back to be read as the other side.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The word', 'What each person means', 'Three arguments it would settle', 'The definition'], [
  ['*a confirmed order*', 'the counter: a telephone call; the office: an acknowledgement', 'the plater\'s gauge · Jaramana\'s November order · the eleven quotations', '⚠ **_an order for which a written acknowledgement has been issued stating a price and a date_**'],
  ['*a part-load*', 'the yard: spare space; the office: an item left behind', 'the Ghouta two-drop run · the pallet on the floor · a split run', '⚠ **_a run where any sheeted item is not on a vehicle allocated to that run_**'],
  ['*an account*', 'the counter: the customer; the office: the ledger balance', 'the customer who is also a supplier · a customer with two trading names · a cash sale to a ledger customer', '⚠ **_the balance owed by one customer on the customer ledger, taken on its own_**'],
], [1, 1.8, 2.2, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The word is *a part-load*. The yard means spare space and the office means an item left behind. It would settle the Ghouta two-drop run, the pallet left on the floor, and a run split between two lorries. My definition is: a run where any sheeted item is not on a vehicle allocated to that run. And it costs me the pallet on the floor, which the yard has always sent out and now cannot."', '⚠ **Count the definitions that cost their writer something, and read the rest aloud as the other side.** ⚠ **A definition that cost nothing has usually been written with one argument in mind** — **the one the writer lost most recently** — **and it will not survive the second.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Row (a).** **It loses them an argument: they told the plater 0.5 on the telephone, never sent an acknowledgement, and under 2.2 there was no confirmed order** — ⚠ **so the hundred sheets at the wrong gauge are their fault and not his.**  **2** ⚠ **Procedure, not blame.** **Under 2.2 there was no confirmed order either way, so the goods went out on nothing** — ⚠ **and the question stops being who is lying and becomes why the yard releases goods without an acknowledgement, which is section 4.**  **3** ⚠ **Eleven.** *Goods · delivery · the company · the customer · a day · in writing · the ledger · an order · supply · a site · a month.* ⚠ **Not one has ever cost the company anything, and all eleven would have had to be read by everybody for ever to reach 2.2.**'));
out.push(stage('6', 'Write with help – sample (148 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — DEFINITIONS. 30 March. H. Mourad. Section 2 of 4. ⚠ One definition, and seven taken out.**',
  '**2.1  In this policy, _a run is part-loaded_ if any item shown on the run sheet has not been loaded onto a vehicle allocated to that run.**',
  table(['', 'The dispute it settles', 'Which way', 'What it cost us'], [
    ['**(a)**', '**the Ghouta Monday two-drop run**', '⚠ **in our favour: both vehicles are allocated, so nothing is unloaded and it is not a part-load**', 'nothing — but it is why 3.5 can be short'],
    ['**(b)**', '⚠ **the pallet left on the floor because it would not fit**', '⚠ **against us: the item is sheeted and not loaded, so the run is part-loaded and the lorry does not go**', '⚠ **about four runs a month that have always gone out**'],
    ['**(c)**', '**a run split between two lorries where each is full**', '**in our favour: both are allocated, so it is one full run**', 'nothing'],
  ], [0.5, 2.9, 2.9, 2]),
  '⚠ **Row (b) is the reason I believe this definition is honest.** **The yard has sent that lorry out about four times a month for years and has been right to** — **one pallet is not worth a vehicle.** ⚠ **Under 2.1 it cannot, and that is a real cost, and the answer is not to soften the definition but to write an exclusion in 1.2 for a single sheeted item.** **A definition should decide; an exclusion should forgive.**',
  '⚠ **Seven definitions came out.** *A run · a vehicle · the yard · loaded · sheeted · an item · allocated.* ⚠ **Six of them have never cost anything, and *allocated* I have left inside 2.1 instead, where it is doing work.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two definitions at most', '✓ one'],
  ['A *which way* column, with at least one against the writer', '✓ row (b)'],
  ['A reason for keeping the row that costs you something', '✓ ⚠ **and the remedy is the best thing in the sample:** *a definition should decide; an exclusion should forgive*'],
  ['A dispute turned from blame into procedure', '✗ ⚠ **none here** — **and the unit\'s own example shows what it looks like; this policy may simply not have one**'],
  ['The list of definitions taken out', '✓ ⚠ **and one is explained rather than dropped, which is better**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a reason for keeping the row that costs you something. The line I am marking is **_A definition should decide; an exclusion should forgive.__** What I found: that is a rule for the whole unit and it is not in the book. It also tells you what is wrong with most first policies — they soften the definition to get the merciful answer, and then the definition decides nothing."_ ⚠ **Read that out and put it on the wall.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the row that costs them something. ⚠ **The class says what it costs, in a figure or a frequency.** ⚠ **Anybody whose column is entirely in their own favour reads one row aloud as the other side**, **and the usual result is that one of the three turns out to be arguable both ways.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'The word is *delivered* and it cost a company I worked for about four hundred thousand over two years, in instalments nobody added up.',
  'Our terms said payment thirty days from delivery. We meant delivery to site. Our two largest customers meant delivery to their stores, which is where their own paperwork started, and in both cases the gap between the two events was about eleven days because the material went to site and was then moved.',
  'So they paid forty-one days from delivery and believed they were paying thirty. We chased them and they produced their goods-received notes and they were right on their own reading, and nobody could point at a sentence that said whose reading governed.',
  'What it cost was not interest. It was that for two years our cash forecast was wrong by eleven days on about forty per cent of our turnover, so we drew on the overdraft every month, and the overdraft cost what it cost.',
  'One sentence would have prevented it: *delivery means delivery to the address shown on the order*. Eleven words.',
  'Nobody wrote it because nobody thought it was ambiguous, which is the whole trouble with the word. Our office had used it one way for eleven years and had never once met somebody who used it the other way, and the first time we did, it was with the two customers it mattered most with.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: would the definition have helped or hurt the writer? The line I copied is **_Nobody wrote it because nobody thought it was ambiguous, which is the whole trouble with the word.__** What I found: that is why the three-arguments test works. You cannot find an ambiguous word by introspection — you find it by looking at what you have argued about and lost."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three honest definitions to go against the writer\'s own side, and expect at least one that has not been written for exactly that reason.** ⚠ **Name it plainly: a definition is not written when the writer suspects which way it will go** — **and the cost of not writing it is paid every time the word is used, by both sides, in instalments nobody adds up.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for three arguments and one sentence, with the direction of each.** ⚠ **Mark the directions.** **Three in the writer\'s favour means the sentence was written for the argument and not for the word**, **and the remedy is role card 2: read it as the person at the sharp end and ask whether it ever goes against you.**',
], C.lblue, C.navy));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Not only … but'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The half that gets forgotten is always the cheap half** — **the initial, the signature, the acknowledgement** — **and it gets forgotten because the expensive half feels like the work.**'));
out.push(p('**b**  The **first** can be half-met. ⚠ **The second cannot, because the signature belongs to the person who counted.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It does not say who signs** — **on a Thursday the man who counts is in the racks and the man who signs is at the gate with a driver waiting, and they have been different men about once a fortnight for nineteen years.**  2 ⚠ **A person.** **_Signed by the person who counted_ makes the two halves share somebody, and neither can then be done alone.**'));
out.push(p('⚠ **The structural point is in Abu Yasser\'s third speech and it is the whole cycle:** ⚠ **not two obligations — one obligation with two parts that cannot be separated.** ⚠ **And the instruction that follows it is the one to drill: write the link, not the halves.** **Everybody remembers the halves.**'));
out.push(p('⚠ **The grammar point is real and small: *until* instead of *and*.** ⚠ **_And_ lets two people do half each; _until_ makes the second thing a condition of the first.** **It is one word and it is most of what this cycle changes in a document.**'));
out.push(p('**Language box – Practise (sample, three links):**  _**1** *counted and signed* → ⚠ **_signed by the person who made the count_**.  **2** *dated and acknowledged* → ⚠ **_acknowledged by reference to the date of the note_**.  **3** *weighed and recorded* → ⚠ **_recorded on the same docket as the weight, by the weighbridge operator_** — **because a weight on one paper and a record on another is two papers nobody can match.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Notes are dated and acknowledged.'],
  ['B', 'What does the acknowledgement refer to?'],
  ['A', 'The note.'],
  ['B', 'Which note? Does it carry the note\'s date?'],
  ['A', '…No. It has its own date, which is when it was signed.'],
  ['B', 'So if there are two notes about the same job, a week apart?'],
  ['A', 'You cannot tell which one was acknowledged.'],
  ['B', 'Have you got a drawer of those?'],
  ['A', 'We have a box file of about two hundred.'],
  ['B', 'Then write the link. *Acknowledged by reference to the date of the note.* Eight words, and the box file stops growing.']
]));
out.push(p('⚠ **The drawer is the evidence and it is in every workplace.** ⚠ **Ask the pairs to estimate how many unmatched papers their own two-part obligation has produced** — **the number is always large and nobody has ever counted it, and it is the most persuasive thing available for a change of eight words.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the obligation, how two people satisfy it between them, the link, and which half gets lost. **Typical errors:** *and* where *until* is needed · a link that names a role rather than the same person (*signed by the warehouse*) · ⚠ **and the content fault, which is a *not only … but* whose second half is the easy half.** **The emphasis form is for the half people drop.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The obligation', 'How two people satisfy it between them', 'The link', 'Which half gets lost'], [
  ['*counted and signed for*', 'one counts in the racks, one signs at the gate', '⚠ **_signed by the person who made the count_**', '⚠ **the signature belonging to the counter**'],
  ['*dated and acknowledged*', 'the writer dates, the receiver acknowledges with his own date', '⚠ **_acknowledged by reference to the date of the note_**', '**the link between the two dates**'],
  ['*priced and dated*', 'the office prices, the counter dates the despatch', '**_priced and dated on the same acknowledgement_**', '**the sameness of the document**'],
  ['*checked and approved*', 'the clerk checks, the manager approves without checking', '⚠ **_approved by somebody who has seen the check, and who initials the check sheet_**', '⚠ **the seeing**'],
], [1.5, 2, 1.8, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The obligation is *checked and approved*. Two people satisfy it by the clerk checking and the manager approving without looking at the check. The link is that the approver initials the check sheet. And the half that gets lost is the seeing — not the approval, which always happens, but the looking, which takes four minutes."', '⚠ **Count the obligations with no link, and then ask the question that lands:** ⚠ **how many have produced a drawer of unmatched paper?** **Most workplaces have one and nobody has counted it.** **A learner who comes back next week with a number has the whole argument for an eight-word change.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The second thing is a condition of the first** — *not released until · not effective until* — **and the key word is *until*.** ⚠ **_And_ lets two people do half each; _until_ does not.**  **2** ⚠ **4.1.** **Looking at the ledger means a walk from the gate to the office, and on a Thursday with a driver waiting that is four minutes nobody has.** ⚠ **The honest answer is that the ledger has to be where the gate is** — **a second copy of one page, which is not a policy at all, and it is asked for in the covering note.**  **3** ⚠ **About five hundred times in nineteen years, and it is nobody\'s fault.** **The rule was written so that it could be satisfied by two people, and it has been.**'));
out.push(stage('6', 'Write with help – sample (147 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — RELEASE. 31 March. H. Mourad. Section 4 of 4. ⚠ Three obligations, each with its link.**',
  table(['', 'The obligation', 'The link', 'Which half gets lost'], [
    ['**4.1**', '⚠ **_A vehicle is not released until every item on the run sheet has been ticked by the person who loaded it._**', '⚠ **the ticking belongs to the loader**', '⚠ **the ticking. The gateman ticks the sheet because he is holding it.**'],
    ['**4.2**', '**_A departure is not effective until it is written on the run sheet with the time and initials._**', '**the record is a condition, not a note about it**', '**the record. Eleven Thursdays.**'],
    ['**4.3**', '⚠ **_A run sheet is not only signed at the gate but signed against the vehicle registration._**', '⚠ **the signature is tied to a lorry, not to a time**', '⚠ **the registration. Two lorries went out on one sheet in November and we could not say which carried what.**'],
  ], [0.6, 4, 2.4, 2.4]),
  '⚠ **The pattern is *until*, not *and*.** **A vehicle is not released until. A departure is not effective until.** ⚠ **_And_ would let the gateman tick a sheet he never loaded, which is what happens now.**',
  '⚠ **4.1 is the one that will be resented, and the objection is fair.** **The loader is on the back of a lorry and the sheet is at the gate.** ⚠ **The honest answer is a clipboard on the lorry, which costs about nothing and is not a policy** — **and I have asked for four of them in the covering note.**',
  '⚠ **And nobody has broken 4.1 in the eleven years it has existed in its old form.** **It was written so that two people could keep it, and they have, about every fortnight.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*until*, not *and*', '✓ in 4.1 and 4.2'],
  ['The link named for each obligation', '✓'],
  ['Which half gets lost, with a physical reason', '✓ ⚠ **and every one of the three reasons is physical, which is the finding**'],
  ['The resented clause admitted, with what would answer it', '✓ four clipboards'],
  ['A count of how often the fault has happened', '✓ eleven Thursdays, two lorries in November, every fortnight for eleven years'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: which half gets lost, with a physical reason. The line I am marking is **_every one of the three reasons is physical.__** What I found: then the policy is not the remedy and you have said so three times without saying it once. One sentence at the top — *all three of these failures are caused by paper being in the wrong place, and four clipboards would fix two of them* — makes the section an argument for clipboards rather than a set of rules."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their *which half gets lost* and the reason. ⚠ **The class decides whether the reason is physical.** ⚠ **If it is, wording will not fix it and the honest section says so** — **which is uncomfortable for a learner who has just drafted four clauses, and is the most useful thing in the cycle.**'));
out.push(stage('7', 'Write freely – sample (231 words)'));
out.push(sample(null, [
  'Our stock sheets have been signed by the wrong man for about six years and nobody has broken a rule.',
  'The rule is that a count is checked and signed. What happens is that two men count, a supervisor checks a sample, and the sheet is signed by whoever takes it to the office, which is usually the youngest of the three because he is the one sent on errands.',
  'All three halves happen. The counting happens properly — I have watched it. The check happens, on about one line in eight. And a signature happens. Nobody has ever failed to do any of it.',
  'What does not exist is any link between the signature and the check. The man who signs has not checked anything and does not claim to; he is carrying a sheet to an office and signing where the box is.',
  'It came to matter in 2023 when a figure was wrong by about sixty cartons and the question was who had checked that line. The signature was a nineteen-year-old\'s. He had not checked it and said so immediately, and he was right, and for about a week he was the person the question was about.',
  'The rule says *checked and signed*. Nineteen words would fix it: the sheet is signed by the person who made the check, against the lines they checked.',
  'Nobody has written the nineteen words, including me, and I have known since 2023.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: has anybody actually broken the rule? The line I copied is **_for about a week he was the person the question was about.__** What I found: that is the cost of a missing link and it is not a paperwork cost. The rule was kept perfectly by three people and the youngest of them carried it, which is Unit 2 and Unit 5 arriving at the same place."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect nobody in any of the three texts to have broken the rule, and all three rules to have been written so that two or three people could keep them between them.** ⚠ **That is the sentence to end on, because it changes who the class blames:** **the fault is in the drafting, and the people keeping the rule have been keeping it.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to test three obligations by asking whether two people could satisfy each between them.** ⚠ **Almost all of them can.** **Collect the links, and mark hardest the ones where the reason the half gets lost is physical** — **because those are the ones where the right answer is a clipboard, a second ledger page or a printed sheet, and not a better sentence.**',
], C.lblue, C.navy));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  The policy that will be quoted against you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect a customer, a supplier, an inspector or a former employee** — **and expect the clause to be one that was written to sound helpful.**'));
out.push(p('**b**  The **second**. ⚠ **It is a promise that can be kept; the first is an aim, which a reader converts to a promise and which you then break.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Section 5 — *we aim to acknowledge all orders within one working day*.**  2 ⚠ **It is a promise with no obligation and no remedy, which is the worst of both** — **a customer reads *we aim to* as *we will*, and when you do not, you have broken a promise you never made.**'));
out.push(p('⚠ **The move that makes the cycle work is the second question, not the first.** ⚠ **_Can you do it on a Thursday in August with one person in the office?_** **It converts a drafting argument into an operational fact**, and the answer is almost always no. ⚠ **Then: write three and keep it.** *A policy that promises one day and delivers three has handed the other side a document; one that promises three and delivers two has handed them nothing and you look better than you said.*'));
out.push(p('⚠ **And the clause that reads badly and stays is the heart of it.** ⚠ **A definition binds both ways: you cannot define a term for your own protection and be surprised when it protects them**, **and the obligation is the price of having the definition at all.** ⚠ **Mr Sayegh\'s closing line is the one to keep:** *nobody drafts a document expecting to be shown it in a dispute, which is the only time anybody reads one closely.*'));
out.push(p('**Language box – Practise (sample, three clauses read as the other side):**  _**1** *a run is part-loaded if any sheeted item is not on an allocated vehicle* → ⚠ **a customer says: so you knew my pallet was left and sent the lorry anyway** — **keep; it is true, and it is why 4.1 exists.**  **2** ⚠ *we aim to collect within two working days of notice* → ⚠ **read as *we will*** — **cut, and replaced with four days, which we can do in August.**  **3** *the yard foreman may authorise a departure* → **a customer says: then authorise one for me** — **keep; a customer asking the foreman is the policy working.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have *we aim to collect within two working days of notice*. Can you do it on a Thursday in August with one driver?'],
  ['A', 'No.'],
  ['B', 'With two drivers in November?'],
  ['A', 'Yes, usually.'],
  ['B', 'So the honest number is the August number.'],
  ['A', 'Four days.'],
  ['B', 'And how often do you actually do it in two?'],
  ['A', 'Most of the year. Perhaps nine months in twelve.'],
  ['B', 'Then write four and do it in two for nine months, and nobody has a document and everybody is pleased with you.'],
  ['A', 'Four reads worse on the page.'],
  ['B', 'Four reads worse to you. Two reads worse to the man holding it in August.']
]));
out.push(p('⚠ **The last exchange is the one learners resist and it should be run to the end.** ⚠ **A promise is drafted to be read by a prospective customer and is used by an aggrieved one**, **and those two readers want opposite numbers.** **The aggrieved one is the only one who will ever read it closely.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the clause, who would use it, what they would say, and the decision. **Typical errors:** cutting a clause that should be kept because it reads badly · ⚠ **and the content fault, which is a learner who cuts everything that can be used against them.** **A policy with nothing usable against it imposes no obligations at all, which is the finding at the end of the cycle.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The clause', 'Who would use it', 'What they would say with it', 'Keep, change or cut'], [
  ['*a part-load is any sheeted item not on an allocated vehicle*', 'a customer whose pallet was left', '⚠ **you knew and you sent the lorry anyway**', '⚠ **keep — it is true and it is why 4.1 exists**'],
  ['*we aim to collect within two working days*', 'any customer, in August', '⚠ **read as *we will***', '⚠ **cut; replaced with four**'],
  ['*the foreman may authorise a departure*', 'a customer refused a collection', 'then authorise one for me', '**keep — a customer asking the foreman is the policy working**'],
  ['*this does not apply to the stalls\' own van*', 'a trade customer', '⚠ **the stalls get a service we do not** — **human, not legal**', '⚠ **keep, and put the reason inside the clause**'],
], [1.8, 1.2, 2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The clause is *we aim to collect within two working days of notice*. Any customer would use it, in August, and they would read *aim* as *will*. I would cut it and write four days, which we can keep in August and beat for nine months of the year."', '⚠ **Count the *we aim to* sentences in the room — there are always several** — ⚠ **and then ask the August question of each.** **Almost none survive it.** **Then ask how many of the room would rather promise the number they can keep, and expect genuine disagreement**, which is worth ten minutes.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Row 4.2.** **Writing it means writing that the November order went out on nothing and that the fault is theirs and not Jaramana\'s** — ⚠ **they are owed 240,000 and the sentence weakens them on about 90,000 of it.** **It stays, because it is true, and because the alternative is a policy with a hole exactly where their own worst mistake was.**  **2** ⚠ **Row 1.2(b).** **A trade customer refused goods who knows the stalls are not refused has a grievance — not a legal one, a human one, which is worse** — ⚠ **and the remedy is four words of reason inside the clause, not an argument afterwards.**  **3** ⚠ **Four of the five clauses that read badly are staying**, **because a policy with nothing in it that can be used against you imposes no obligations on you at all, and a customer reading such a document knows exactly what it is.** ⚠ **It is written for whoever revises the policy in five years, so that they do not undo it.**'));
out.push(stage('6', 'Write with help – sample (150 words)'));
out.push(sample(null, [
  '**COLLECTION POLICY — READ AS THE OTHER SIDE. 1 April. H. Mourad. Nothing in this note goes out with the policy.**',
  table(['', 'The clause', 'Used against us, it says', 'Decision'], [
    ['**2.1**', '*a run is part-loaded if any sheeted item is not on an allocated vehicle*', '⚠ **you knew my pallet was left behind and you sent the lorry anyway**', '⚠ **keep. It is true, and it is why 4.1 exists.**'],
    ['**4.1**', '*a vehicle is not released until every sheeted item is ticked by the loader*', '⚠ **so on 14 November nobody ticked, and you released it** — **the sheet proves it**', '⚠ **keep, and it is true, and the customer may read it**'],
    ['**5.1**', '⚠ **_we aim to collect within two working days of notice_**', '⚠ **a promise with no obligation and no remedy, read as *we will***', '⚠ **cut; replaced with _four working days_, which we can keep in August**'],
    ['**1.2(b)**', '*this does not apply to the concession stalls\' own van*', '⚠ **the stalls get collected and I do not** — **human, not legal, which is worse**', '⚠ **keep, and add: the van is not ours and is not sheeted here**'],
  ], [0.7, 3.1, 3, 2.6]),
  '⚠ **Row 4.1 is the one I sat with.** **It means writing that on 14 November a vehicle went out with an unticked sheet and that the customer\'s missing pallet is ours.** ⚠ **It is about nineteen thousand.** **It stays, because the sheet exists and says so, and a policy that avoided the sentence would have a hole exactly where our own worst week was.**',
  '⚠ **And the general finding, for whoever revises this.** **Three of the four clauses that read badly against us are staying.** ⚠ **A policy with nothing usable against it imposes nothing on us at all.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *decision* column with keep, change and cut in it', '✓ three keeps and one cut, which is the right proportion'],
  ['A clause kept although it costs money, with the reason', '✓ about nineteen thousand'],
  ['A grievance that is human rather than legal', '✓ and labelled as such'],
  ['*We aim to* cut, and the replacement number stated', '✓ four working days'],
  ['The general finding, addressed to the next reviser', '✓ ⚠ **and it should name the date and the author, because a finding with no author is deleted first**'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the general finding addressed to the next reviser. The line I am marking is **_A policy with nothing usable against it imposes nothing on us at all.__** What I found: a true sentence with nobody\'s name on it, in a note that says nothing in it goes out with the policy. In five years this note will not be in the file and the four clauses will look like oversights. Put the finding in the policy itself, as a preamble."_ ⚠ **That is the best review in Unit 5 and it should be read out: a finding kept in a private note protects nothing.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the clause they kept although it costs them. ⚠ **The class describes what the version without it would look like to a careful reader.** ⚠ **The answer is always the same shape: a document whose silence is exactly where its author\'s worst week was** — **and a careful reader looks for that silence first.**'));
out.push(stage('7', 'Write freely – sample (233 words)'));
out.push(sample(null, [
  'A sentence in our customer charter was read aloud to me by a customer\'s solicitor in 2018 and I had written it myself in 2015.',
  'What it said was that we would respond to any complaint within five working days. I had written five because it sounded better than ten and I had not asked anybody whether we could do it. We could, about seven times in ten.',
  'The complaint in question was answered on the fourteenth day, over a holiday week, and the answer was a good one and resolved the matter. The solicitor was not interested in the answer. He read the sentence, asked when the complaint had been received, asked when it had been answered, and wrote both dates down.',
  'Nothing came of it directly. What came of it was that the charter was rewritten the following year, and the sentence now says that we acknowledge within five working days and answer as soon as we are able.',
  'Which is worse. The acknowledgement costs nothing and promises nothing, and *as soon as we are able* is an aim pretending to be an obligation, and a solicitor will enjoy it more than the old one.',
  'What we should have written is ten working days, which we have never once missed in nine years, and which would have let me say, in that room, that we had answered inside our own undertaking.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: should the clause have been changed, or kept? The line I copied is **_the charter was rewritten the following year, and the sentence now says that we acknowledge within five working days and answer as soon as we are able.__** What I found: that is the failure mode the unit does not describe. Shown a promise they broke, most firms do not write a keepable number — they write a weaker promise, and the new one is worse."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three clauses to have been an *aim* or an *endeavour*, and expect at least one to have been replaced afterwards by a weaker promise rather than a keepable one.** ⚠ **Name that failure mode explicitly** — **it is the sample\'s finding and it is the one learners will go on to commit** — **and give them the alternative in one line: write the number you have never missed.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for four clauses read aloud as the other side, with keep, change or cut against each.** ⚠ **Mark the ratio.** **Four cuts means the learner has disarmed the document**; **four keeps means they have not read it as anybody.** ⚠ **Three keeps and one cut is the shape of a real pass**, and the cut is almost always an *aim*.',
], C.lblue, C.navy));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: the policy we have never written'));
out.push(stage('1', 'Get ready – Unit 5 quiz'));
out.push(p('**1** ⚠ **An instruction names a case and a rule names a class** — **and the test is to invent a case nobody has met and read the rule against it.**  **2** ⚠ **It is granted by whoever is asked**, **usually at a counter, in the afternoon, by somebody with nothing to point at.**  **3** ⚠ **Because without the record the exception becomes the rule** — **and the record is what makes the second one a decision instead of a precedent.**  **4** ⚠ **Name three arguments it would settle, each with money in it.** **If you cannot name three, it is not the word.**  **5** ⚠ **_And_ lets two people do half each; _until_ makes the second thing a condition of the first.**  **6** ⚠ **It is a promise with no obligation and no remedy, and a reader converts it to *we will*.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **If the balance is red and it is older than the month before last, the office has to approve it** — **and she telephones, and the answer is yes or no, and she has never written it down.**  2 ⚠ **From the ledger** — **it is what the ledger makes anybody do who is standing in front of it.**'));
out.push(p('⚠ **This track is the unit\'s payoff and the first line is the one to expect in real life:** ⚠ **_I have been doing it already._** **Three weeks, four times, in her third week at the counter.** ⚠ **And *older than the month before last* is about sixty days — the rule Nour spent nine days drafting, found independently by somebody who thought she was guessing.**'));
out.push(p('⚠ **The three things the page changes are the answer to the question every learner will be asked at work — *why write it down, we already do this?*** ⚠ **She stops telephoning, because she can point at it. Her four guesses become four decisions. And she has a sentence for *you let Jaramana have it in September*.** ⚠ **None of the three is the rule.**'));
out.push(p('⚠ **And the reply that gets nothing is worth demonstrating.** ⚠ *Doing what?* **is open and gets the rule.** ⚠ *Yes, but from the first it is written down* **is a correction and gets silence** — **and the drafter never learns that the policy already exists.**'));
out.push(p('**Language box – Practise (sample):**  _"From Monday no vehicle leaves part-loaded. — ⚠ **I never let them.** — Never? — ⚠ **If there is anything on the floor I go and find the foreman.** — Since when? — ⚠ **Since the pallet went missing in February.** — ⚠ **Then you have been applying 4.1 for six weeks, and what the page changes is that you stop fetching the foreman every time and that the four times you did become four decisions.**"_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'From Monday, no vehicle leaves part-loaded.'],
  ['B', 'Right.'],
  ['A', 'Yes, but from Monday it is written down.'],
  ['B', 'Right.'],
  ['A', '…Is there something you want to say?'],
  ['B', 'No.'],
  ['A', '_(again, differently)_ What do you do at the moment if there is a pallet on the floor?'],
  ['B', 'I go and find the foreman. Every time, since February.'],
  ['A', 'Every time?'],
  ['B', 'Four times. And twice he said send it anyway, and I did, and nobody wrote anything.']
]));
out.push(p('⚠ **Pair 2 is a demonstration and should be run exactly as written, including the two *right*s.** ⚠ **The correcting reply gets nothing twice**, **and then the open question gets the rule, the frequency, the date, and the two unrecorded departures.** **The contrast is the lesson and it cannot be taught by stating it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the unwritten rule, where it came from, and the three things the page changes. **Typical errors:** a mediator who announces instead of asking · ⚠ **and the content fault, which is a mediator who says the page changes the rule.** **It does not. It changes who has to telephone whom, what a past act was, and what can be pointed at next time.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'What they are already doing', 'Where they got it', 'What the page changes'], [
  ['the counter', '⚠ **refusing release on red balances older than the month before last — four times in three weeks**', '⚠ **the ledger, and she thought she was guessing**', '⚠ **she stops telephoning · four guesses become four decisions · she has a sentence for *you let Jaramana have it in September***'],
  ['the gateman', '**fetching the foreman whenever there is a pallet on the floor, since February**', 'the February missing pallet', '⚠ **he stops fetching · the two *send it anyway* departures become records · the sheet carries the time**'],
], [1, 1.6, 1.4, 2]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('⚠ **The unwritten thing, in full:** **most of what a firm does is governed by rules nobody has written, invented independently by whoever stands in front of the evidence** — ⚠ **and those rules are usually right, and they are always undated, unattributable and defenceless, so the first person who sets a precedent against one destroys it, and the person applying it does not find out until somebody says *but you let them have it in September*.**'));
out.push(sample(null, ['"The page says sixty days overdue, no release. The person applying it already refuses red balances older than the month before last, four times in three weeks, which she got from the ledger and thought was guessing. What the page changes is that she stops telephoning, her four guesses become four decisions, and she has a sentence for September — and not the rule."', '⚠ **Two things to leave the class with.** ⚠ **First: ask what people are doing before telling them what to do**, **because the rule is usually already there and it is usually right.** ⚠ **Second, and it is the whole unit: the unwritten rule is not weak because it is wrong — it is weak because it is undated and has nobody\'s name on it**, **so it cannot survive a single precedent set against it, and the person who has been applying it correctly for three weeks will be the one who looks inconsistent.**']));
out.push(p('**The paper-and-decision word list, Unit 5\'s six:** _the scope of a policy · a saving provision · a standing exception · a commencement date · a term of art · a departure from policy_. ⚠ **Thirty items now.** **It runs to Unit 12 and is collected in the Unit 12 key.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Gap', '1', '2', '3', '4', '5', 'not needed'], [['**Answer**', '**F**', '**B**', '**D**', '**A**', '**C**', '**E**']], [0.9, 0.7, 0.7, 0.7, 0.7, 0.7, 1.1]));
out.push(p('⚠ **Why, and in Part 2 the reason is always a link forwards or backwards.**  **1 F** — ***They* refers back to *a firm that has operated for twenty years*, and *these have usually been consistent* sets up *most of what needs to be written down already exists*.**  **2 B** — **_Such drafts_ refers back to the draft that names a case, and *the firm almost always had the instruction already* is answered by *the remedy is to name the class*.**  **3 D** — **the only option about writing exclusions down, and *a long list reads as arguments lost in advance* follows *every exclusion that is not written is granted*.**  **4 A** — **_set aside_ answers *that person must be one person*, and the gap is followed by *the record matters more than the permission*.**  **5 C** — **_this reading_ refers back to reading it in the other side\'s voice, and *numbers that were never achievable* is the *we aim to* finding.**  ⚠ **E is not needed: an annual committee review fits no neighbour and nothing in the text mentions reviews or committees.**'));
out.push(p('⚠ **The marking note for Part 2, and it is the part learners under-score on.** ⚠ **Read what comes *after* the gap.** **Four of these five are decided by the sentence that follows** — *the remedy is · the record matters more · the test of a good policy is* — ⚠ **and the extra option is almost always the one that is plausible in general and connects to nothing in particular.** **E is a true sentence about policies and has no neighbour.**'));
out.push(stage('6', 'Write with help – sample exam answer (47 words)'));
out.push(sample(null, [
  '**From Monday: no release on accounts more than sixty days overdue.** The policy is on the counter — point at it. If a customer argues, take the order and tell them the office will telephone; only Mr Ayoub may authorise a release, and it must be written on the account.',
  '⚠ **Forty-seven words. Three content points: the rule as a trigger, when it starts, and what to do when somebody argues — plus the exception-holder, which is what stops every hard case coming back to the writer.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the rule is, as a trigger', '✓ sixty days overdue'],
  ['When it starts', '✓ from Monday'],
  ['What to do when somebody argues', '✓ ⚠ **and it is a positive instruction — *take the order* — not a refusal, which is why it will be followed**'],
  ['The exception-holder named', '✓ and the record'],
  ['40 to 50 words — count them', '✓ 47'],
], [3.4, 2.6]));
out.push(p('⚠ **Marking the exam task.** **Content: 3 points, all present (6).** **Organisation: the rule first (2).** **Language: a message to colleagues, imperative and plain (1).** **Accuracy (1).** ⚠ **The fault specific to this task is a message that tells people the rule and not what to do when it is resisted** — **which is the half of the message the reader actually needs, and it loses a content mark.**'));
out.push(stage('7', 'Write freely – sample (236 words)'));
out.push(sample(null, [
  'Nobody at my work will accept a drawing that is not signed by the person who measured, and there is no document anywhere that says so.',
  'It started with a man called Imad who ran the survey team until 2017. He would not take a drawing from anybody unless the measurer had signed the title block, and he was known for it, and people found it irritating and did it. He never wrote it down. I asked him once why not and he said that if it were written down somebody would find a way round it.',
  'He left eight years ago. The practice is intact. Two of the four people who now refuse unsigned drawings never met him, and one of them told me it was a company rule and that it was in the quality manual. It is not in the quality manual. I have looked twice.',
  'If you ask four people to state it they state it four ways. One says the measurer signs. One says the measurer and the checker. One says it has to be signed before it leaves the site, which is a different rule and a better one. One says it depends on the client.',
  'So we have a rule that everybody keeps, that nobody can state identically, that is attributed to a manual it is not in, and that is credited to a man who refused to write it down for a reason that has turned out to be wrong.',
]));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to ask the person closest to the evidence what rule they are applying, and to write it in their own words.** ⚠ **The *own words* matters.** **Collect them and compare: where two people at the same workplace state the rule differently, the learner has found the thing the page is for** — **and where they state it identically, the page is a formality and should be short.**',
], C.lblue, C.navy));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 5 check'));
out.push(p('**A  Language.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'b', 'c', 'b', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q4 is the unit\'s one-word grammar point and it is worth two minutes.** *Goods are not released **until** the count has been signed* — **_and_ would let two people do half each, which is the whole of 5.5.** ⚠ **Q6 is *any*, not *some* or *no***: *does not apply to **any** later order* **is the no-precedent sentence, and *some* opens the door it was written to close.** **Q8 is the third conditional, which is how a policy\'s past is described** — *had the record been made in September, the second order would have been a decision.*'));
out.push(p('**B  Listening (Track 5.15).**   **What the person has been doing:** ⚠ **not releasing goods to people who owe.**   **For how long, and how many times:** ⚠ **three weeks, four times.**   **The basis they used:** ⚠ **the ledger — if the balance is red and older than the month before last, the office has to approve it.**   **What that is in days:** ⚠ **about sixty.**   **The three things the page changes:** ⚠ **she stops telephoning, because she can point at it · her four guesses become four decisions · she has a sentence that says September does not apply to October.**   **What would have happened if she had got it wrong:** ⚠ **three weeks with nothing to point at, and nobody would have known until November — which is what happened in September.**'));
out.push(p('**C  Reading.**  ⚠ **Row (a) — the plater\'s gauge — shows the definition is honest, because it goes *against* Sham Trading: they told him 0.5 on the telephone, never issued an acknowledgement, and under 2.2 there was no confirmed order**, ⚠ **so the hundred sheets at the wrong gauge are their fault and not his.** ⚠ **Row (b) turned out to be about procedure and not blame:** **under 2.2 there was no confirmed order either way, so the goods went out on nothing at all** — **and the question stops being who is lying and becomes why the yard releases goods without an acknowledgement.**'));
out.push(p('**D  Writing – sample (98 words).**'));
out.push(sample(null, [
  '**The rule.** No vehicle is released with a sheeted item left on the floor. This takes effect from 1 April and applies to runs sheeted on or after that date.',
  '**One exclusion.** This does not apply to a run cancelled by the customer after loading has begun, because the loss is already incurred and holding the vehicle adds to it. (Three runs last year.)',
  '**Departures.** Only the yard foreman may authorise a release, and it is written on the run sheet with the time and his initials. In his absence the gateman may, for one run, and tells him next morning.',
  '⚠ **No precedent.** A release authorised for one run does not apply to any later run.',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the mark for *the three things the page changes* only if none of the three is the rule.** **A learner who writes *it makes the rule official* has not understood 5.7 and should be sent back to the track.**',
  '**C  Reading — 4 marks:** the row identified (1) · that it goes against the writer\'s own side (1) · that there was no confirmed order either way in row (b) (1) · ⚠ **that the question becomes procedural — why the yard releases without an acknowledgement (1).**',
  '**D  Writing — 7 marks:** a class and a measure, with a commencement date (2) · one exclusion with a reason (2) · an exception-holder, a deputy with a limit, and the record\'s place (2) · ⚠ **the no-precedent sentence (1)**. **No marks for *exceptions at management discretion*.**',
  '**Total 25.** ⚠ **The profile to expect: a high D, which is unusual** — **by the end of Unit 5 the four parts of a rule are mechanical and most of the class can produce them to order.** ⚠ **What the check cannot test is 5.6**, **and 5.6 is the cycle that separates a drafter from somebody whose documents survive being read by the other side.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Three faults to watch, and the remedy for each. First, the instruction in policy clothes: a learner writes "all accounts in arrears must be dealt with appropriately" and believes they have written a rule, when they have written an instruction with no case in it, which is worse than an instruction. The remedy is the four-part table in 5.1 — subject, trigger, obligation, escape — applied to their own draft, every time; a rule that fails any of the four is not a rule. Second, the exclusion that swallows the rule. It arrives in about one draft in three and it always reads reasonably, because the writer is thinking of two concession stalls and writing "trade customers". The remedy is one question after every exclusion: name who is now outside, not as a class but as counted accounts. Third, and this is the fault the unit is most likely to leave behind: a learner who finishes 5.6 having cut everything that could be used against them. That is the opposite of the lesson and it produces a document which imposes no obligations, which a careful reader recognises at once. The sentence to hold them to is the one at the end of 5.6: a policy with nothing in it that can be used against you imposes nothing on you at all. Three keeps and one cut is the shape of a real pass, and the cut is almost always "we aim to". One more thing, about 5.7. Learners will be asked at work why a thing already being done needs writing down, and the unit gives them the answer: the page does not change the rule, it changes who must telephone whom, what a past act was, and what can be pointed at next time. An unwritten rule is not weak because it is wrong — it is weak because it is undated and has nobody\'s name on it, and it cannot survive one precedent set against it.'));
out.push(sp());
out.push(p('_Unit 6 — **Three Readers, One Fact**: the same two-week delay written for the bank, the customer and the yard, and the sentence that must be identical in all three._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 5 · Answer Key');
module.exports = out;
