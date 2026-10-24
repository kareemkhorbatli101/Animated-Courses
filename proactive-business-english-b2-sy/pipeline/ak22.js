// Proactive Business English B2 · Syria Edition · Book 2 · Unit 22 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
// ⚠ Double-quoted, always — see the note at the head of ak18.js.
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 22  Reviews, and the Document That Must Not Agree'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 22 is the unit in which the firm writes about people rather than about clauses, and it is the only unit in either book whose documents could do real harm if written badly.** **Teach it with that in mind.**',
  '⚠ **The six things taught.** ⚠ **Work rather than the person (22.1) · the instance under the judgement (22.2) · the strength nobody has named (22.3) · a criticism once, with a remedy (22.4) · answering an assessment (22.5) · reviewing work you could not do (22.6).**',
  '⚠ **The test in 22.1 is the one to give a class in the first ten minutes and it settles most arguments:** ⚠ **does this sentence describe a document, a conversation or a decision** — **or a person?** **A person cannot be acted on by Monday morning.**',
  '⚠ **And the counter-intuitive half of it must be insisted on: the work version is MORE damning and not less.** ⚠ *Over-confident* **is an opinion somebody can decide is unjust;** *one number with no range and no source* **is a thing on a page with a date, and nobody argues with a page.**',
  '⚠ **22.2 produces the only measurable improvement in the unit.** ⚠ **Count before you choose the word: one is an instance, two a coincidence, three a pattern** — **and *sometimes* is what people write when they have one and feel they have more.** **In the story it withdraws three assessments out of eleven, at twenty minutes each.**',
  '⚠ **22.3 is the half of a review nobody writes properly, and the reason is that praise feels safe and therefore gets written vaguely.** ⚠ **Four years of *excellent* is four years of nothing** — **and the person still does not know which of the things they do is the valuable one.**',
  '⚠ **22.7 is the hardest mediation in the strand and it is not about honesty.** ⚠ **It is about which of two documents a firm falsifies when it cannot bear the tension between them**, **and the answer is always the one about the person rather than the one about the decision, because that one is easier to soften.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2, a report, 120 to 140 words, 20 marks**; **the exam practice is Reading Part 5, error correction, twelve lines, the third time in the level.**',
], C.grey, C.navy));

// ===================== 22.1 =====================
out.push(h2('22.1  Work, not the person'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the sentence to be remembered word for word, often from years ago, and expect nobody to have acted on it** — **which is the finding of the cycle arriving in its first two minutes.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names two documents, says what each did, and identifies the practice to keep.** **The first is a conclusion with the evidence removed.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Read the sentence and ask whether it describes a document, a conversation or a decision** — **or a person.**  2 ⚠ **Because the person either rejects it as unfair or tries to change everything at once, including the things they do well, and both are worse than saying nothing.**'));
out.push(p('⚠ **Run the test on the learners\' own sentences before explaining it.** ⚠ **The diagnostic question is the practical one:** *what do they do with that on Monday morning?* — **and *be less confident* answers itself.**'));
out.push(p('⚠ **Insist on the paired form, because it is stronger than either half alone.** ⚠ **What the worse document did and what the better one did, side by side, by the same writer four months apart** — **it names the practice to keep as well as the one to drop, and the person can see both in their own work.**'));
out.push(p('⚠ **And where there is only one instance, the six words go in the sentence.** ⚠ *One instance, and I have only one.* **It stops a single event being read as a pattern, which is 22.2 arriving early and is the fault that most damages a review when it is challenged.**'));
out.push(p('**Language box – Practise (sample):**  _1 **Person:** he is disorganised. **Work:** the March and June stock counts were submitted without the variance sheet; the April one had it attached and was the only one accounts did not query._  _2 **Person:** she is not a team player. **Work:** I have one instance, the handover of 4 May, and I have only one._  _3 **Person:** he lacks attention to detail. **Work:** three of the eleven delivery notes in May had the wrong carrier code; the other eight were correct and the three were all on the same day._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', '"One number with no range" is a technicality. "Over-confident" is the real problem.'],
  ['B', 'Which of the two could he decide was unfair?'],
  ['A', '…Over-confident.'],
  ['B', 'And which is a thing on a page with a date on it?'],
  ['A', 'The number.'],
  ['B', 'So which one survives him disagreeing with it?'],
  ['A', 'The number. But it sounds so much milder.'],
  ['B', 'To you. To him it is the one he cannot argue with.'],
  ['A', 'And over-confident he can simply reject.'],
  ['B', 'And will. And then nothing has been said at all.']
]));
out.push(note("This objection comes up in every class and the answer is not about tone, it is about survivability. The personal judgement is an opinion and can be dismissed; the work judgement is a page with a date and cannot. Make the learner say which of the two survives disagreement, because they always get it right and the conclusion follows on its own. The last line is the one to keep: the rejected judgement means nothing has been said at all, which is a worse outcome than the mild-sounding alternative."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One personal judgement rewritten as a work judgement with a document and a date, plus the better document of theirs beside it.** ⚠ **The second half is the part learners omit** — **and without it the rewrite is a criticism rather than a review.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two assessments', [
  '⚠ **1  As I would say it:** **he is disorganised.** ⚠ **Person or work?** **Person.** ⚠ **The work version:** **the March and June stock counts were submitted without the variance sheet.** ⚠ **A better document of his:** **the April count, which had it attached and was the only one accounts did not query.**',
  '⚠ **2  As I would say it:** **she is defensive about the schedule.** ⚠ **Person or work?** **Person** — **and when I look for the work underneath it I find one conversation on 4 May.** ⚠ **The work version:** ⚠ **I do not have one.** **I have one conversation, I was not in it, and I am not going to write it down at all.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I would want to say he is disorganised. That describes a person. The work version is that the March and June counts came without the variance sheet. And the better one of his is April, which had it attached and was the only one accounts did not query._'));
out.push(note("The second sample reaches the right answer and it is not the one the cycle advertises: sometimes the honest outcome of applying the test is that there is nothing to write. One conversation the writer was not party to is not a work judgement and cannot be made into one by rewriting. Praise that outcome when it appears, because learners expect the exercise to convert every impression into a usable sentence, and the useful discovery is that about a fifth of them cannot be converted and should be dropped."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Every assessment names a document, a conversation or a decision, with a date, and each is something he could begin doing differently on Monday.** ⚠ **Where there is only one instance it says so.**'));
out.push(p('**2** ⚠ **That he is over-confident** — **her first draft, four words doing the work of two rows of the table.** ⚠ **It was true, unanswerable, and unusable, and it was replaced by the December row, which says the same thing about a document.**'));
out.push(p('**3** ⚠ **That she wrote the December objection and was the person appointed in April** — **so the page is written by the person who beat him.** ⚠ **And she says the method is not a courtesy: it is the only way the page is worth anything to anybody in two years.**'));
out.push(p('⚠ **The *not a courtesy* line is the one to lift out.** ⚠ **Learners read the whole technique as politeness and it is not** — **it is what makes a document survive being read by a third party who knows the author had an interest.**'));
out.push(p('⚠ **And notice the carrier row.** ⚠ *One instance, and I have only one. It is here because the carrier mentioned it to Abu Yasser and not because I was in the room.* **Second-hand evidence declared as second-hand is usable; the same evidence undeclared is the thing that destroys a review the moment it is challenged.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (127 words)', [
  '**ANNUAL REVIEW: M. DIB, YEAR TO 30 JUNE. PAGE 1: THE WORK. R. Haddad, 12 July.**',
  '⚠ **A note on how this page is written. There is nothing in it about Mustafa. Every assessment names a document or a conversation, with a date, and every one is something he could begin differently on Monday.**',
  table(['The work', 'What it did', 'The practice'], [
    ['**the March and June stock counts**', '⚠ **submitted without the variance sheet**', '⚠ **accounts queried both; a count without its variance sheet costs Nadia a day each time**'],
    ['**the April stock count**', '⚠ **variance sheet attached, with the three largest differences annotated**', '⚠ **this is the practice to keep, and it is the same man two months earlier**'],
    ['**the carrier conversation, 14 March**', '⚠ **a decision given before the question was finished**', '⚠ **one instance, and I have only one. It is here because the carrier mentioned it and not because I was present.**'],
  ], [2, 2.8, 4.2]),
  '⚠ **What I have NOT written. That he is disorganised, which was my first draft and which he could have done nothing with on Monday.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **Any sentence describing a person.** ⚠ **A work judgement with no date.** ⚠ **A single instance not marked as single.** ⚠ **Second-hand evidence not declared as second-hand.** ⚠ **And a missing *what I have not written*, which is where the first draft goes on the record.**'));
out.push(p('⚠ **The cost clause.** ⚠ *Taking out the carrier row means I have nothing on his manner at all, and I think there is something there.* **That is a real cost and the right answer is still to take it out** — **and naming the cost is how a reviewer stops themselves putting it back next year.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *practice* column only.** ⚠ **The class says of each whether the person could begin on it on Monday morning.** **A practice column containing an adjective has failed.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (223 words)', [
  '⚠ **In 2019 I was told that I did not have enough presence with customers, and I have thought about that sentence probably two hundred times.**',
  '**I did not know what to do with it. I tried speaking more in meetings for about a month, which made things worse, and then I stopped trying and simply minded about it instead.**',
  '⚠ **What I think he meant, and he may not have known himself, is one specific thing.** **When a customer raised a price objection I used to go away and write them a letter, and he wanted me to answer it in the room.**',
  '⚠ **If he had said that, I could have started on Monday.** **I would have found it hard and I would have known what it was.**',
  '⚠ **Instead I got a judgement about myself that I could not test, could not answer and could not act on, and which I have now carried for eight years.** ⚠ **It is the only sentence from any review I remember, and it is the one that changed nothing.**',
  '⚠ **The thing I notice now is that he was not being unkind.** **He was being brief about something he had not worked out** — **and the work version would have taken him longer to write and would have cost me one uncomfortable Monday instead of eight years.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *document, or person?*** **Apply it to the sentence the writer was given, not to the writer\'s account of it.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many could the writer act on what they were told? Usually none** — **and in most cases the sentence is remembered word for word years later.** ⚠ **A personal judgement is the only kind that is both unactionable and unforgettable, which is the whole argument of the cycle and the class will supply the evidence for it themselves.**'));
out.push(note("Read that sample aloud and then say nothing for a moment, because almost everybody in the room has one. The last paragraph is also exactly right and should not be improved: the reviewer was not unkind, he was brief about something he had not worked out. The work version takes longer to write and that is the whole of why it does not get written. Eight years against one uncomfortable Monday is the ratio to leave the class with."));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  The instance under the judgement'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the exercise and the answer is usually one** — **and the judgement will usually have been phrased as though it were three.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **Three dates and three sizes.** **The first says *often* and could rest on anything.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **She finds one** — **the Tarabishi account in February** — **and the review says *sometimes*.**  2 ⚠ *Count before you choose the word. One is an instance, two is a coincidence, three is a pattern* — **and *sometimes* is the word people use when they have one and feel they have more.**'));
out.push(p('⚠ **The forbidden words are a list and should be given as one.** ⚠ *Sometimes · tends to · often · has a habit of.* **Each of them is a pattern word, and a class can search a draft for all four in a minute.**'));
out.push(p('⚠ **The second half of the finding is the one that persuades, and it is about usefulness rather than fairness.** ⚠ **Lina could not answer *sometimes slow to escalate* and could answer *the fourth day on 11 February* in one sentence** — **and her answer was better than the assessment.**'));
out.push(p('⚠ **Sizes as well as dates on anything called a pattern.** ⚠ *Two, four and three days.* **Three dates show it happens; three sizes say whether it is getting worse** — **and in the story they show it is not, which is a finding the writer did not have before counting.**'));
out.push(p('⚠ **And expect the instance to produce a reason nobody had asked for.** ⚠ *I was waiting for the delivery note, because escalating without it loses the day anyway.* **It may be wrong. It is a reason** — **and the review is better for containing it than it was for containing the assessment.**'));
out.push(p('**Language box – Practise (sample):**  _1 **I would say:** he is often late with the counts. **I have:** two, March and June. **So:** on two occasions, 6 March by three days and 4 June by two._  _2 **I would say:** she tends to escalate too slowly. **I have:** one. **So:** on 11 February the query was escalated on the fourth day, and no adverb at all._  _3 **I would say:** his notes are hard to follow. **I have:** none that I can date. **So:** nothing, and the assessment is withdrawn._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I know it is a pattern. I see it every month.'],
  ['B', 'Give me the dates.'],
  ['A', 'February, for certain. And… I would have said April.'],
  ['B', 'Would have said?'],
  ['A', 'I am not sure about April.'],
  ['B', 'So you have one certain and one uncertain. What may you write?'],
  ['A', 'The February one, with the date, and no *sometimes*.'],
  ['B', 'And your impression of a pattern?'],
  ['A', 'Is evidence about me and not about her.'],
  ['B', 'Which you can tell her, in a conversation. Not in a document.']
]));
out.push(note("A's would have said is the moment the cycle turns and it happens reliably once dates are demanded. The distinction B draws at the end is the one worth teaching separately: an impression of a pattern is evidence about the observer, and it can perfectly well be said in a conversation — I have a sense that this happens more than twice and I cannot evidence it — but it cannot go in a document, because a document is read later by somebody who cannot ask. That distinction keeps the honest half of the impression alive without putting it on a file."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One judgement rewritten to match its count, and which of the forbidden words the learner would have used.** ⚠ **Insist on naming the word** — **it is how they catch it next time.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — three judgements', [
  '⚠ **1  The judgement:** **often late with the stock counts.** ⚠ **Instances:** **TWO.** ⚠ **Dates and sizes:** **6 March by three days, 4 June by two.** ⚠ **Rewritten:** **on two occasions, 6 March and 4 June, by three days and two.**',
  '⚠ **2  The judgement:** **tends to escalate too slowly.** ⚠ **Instances:** **ONE.** ⚠ **Dates and sizes:** **11 February, the fourth day against a standard of two.** ⚠ **Rewritten:** **the February query was escalated on the fourth day** — **and no adverb of frequency anywhere.**',
  '⚠ **3  The judgement:** **his handover notes are hard to follow.** ⚠ **Instances:** ⚠ **NONE that I can date.** ⚠ **Rewritten:** ⚠ **withdrawn.** **I have an impression from a conversation with Nadia in about April, and when I looked at the notes they are indexed and dated.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I would have said he is often late with the counts. I have two instances: 6 March by three days and 4 June by two. So the sentence becomes "on two occasions, by three days and two". And I have not asked him why on either date._'));
out.push(note("Entry 3 is the one to spend time on, because withdrawal is the outcome learners least expect and most need. The impression came from somebody else's remark months earlier; the documents, when looked at, contradict it. Twenty minutes of looking prevents a sentence that would otherwise sit in a file for the rest of a career. Ask the class to pick their least-evidenced judgement and go and look at the documents before the next session; about a third come back having withdrawn something."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **It was withdrawn.** ⚠ **The writer went to look for instances, found twenty-two letters and none of them abrupt, and one from a supplier thanking Lina for the clearest schedule he had received.** ⚠ **Underneath it was one telephone call in 2026 that the writer was not party to.**'));
out.push(p('**2** ⚠ **First, that the fourth day was a judgement and not a delay, and may be a wrong judgement.** ⚠ **Second, and this is not about Lina, that nobody has ever told her the standard is two days** — **and it is in no document in the office, so the assessment was partly an assessment of a standard the firm never issued.**'));
out.push(p('**3** ⚠ **Because three dates show that it happens and three sizes say whether it is getting worse.** ⚠ *Two, four and three: the sizes do not grow, so this is a steady two-to-four days and not a deterioration.*'));
out.push(p('⚠ **The instance-count column in capitals is the mechanism and it should be copied.** ⚠ **ONE · THREE · NONE.** **It is the only column that disciplines the writer, and a page carrying it cannot contain *sometimes* without the contradiction being visible on the same line.**'));
out.push(p('⚠ **And the withdrawn row is the most valuable thing on the page.** ⚠ **Twenty minutes of looking.** **Without it, a sentence resting on a second-hand telephone call from 2026 would have been in a file for the rest of somebody\'s career** — **and no review process anywhere catches that fault, because nothing in a process requires anybody to go and look.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (133 words)', [
  '**ANNUAL REVIEW: M. DIB. PAGE 2: THE EVIDENCE, AND WHAT I COUNTED. R. Haddad, 13 July. Second draft; the first had two patterns and I could evidence one.**',
  table(['The assessment', 'Instances', 'The dates and sizes'], [
    ['**the stock counts**', '**TWO**', '⚠ **6 March by three days, 4 June by two.** ⚠ **My first draft said *often late* and I have two** — **which is a coincidence and not a pattern, and the sentence now says two.**'],
    ['⚠ **the variance sheets**', '**THREE** — **a pattern**', '⚠ **missing in March, June and September.** **The sizes are not applicable here, but the trend is: three in nine months, and none since September.**'],
    ['⚠ **handover notes**', '⚠ **NONE** — **withdrawn**', '⚠ **I went to look. His notes are indexed and dated and the last three are better than mine. What was underneath this was a remark Nadia made in April that I have been carrying ever since.**'],
  ], [1.8, 1.8, 5.4]),
  '⚠ **His answer on the variance sheets, taken down on 13 July at his request.** *"The three were the months Nadia was away. I did not know she was the one who used the sheet. Nobody has told me what it is for."*',
  '⚠ **What that changes. The pattern is real and it is not about carelessness; it is about nobody having told him what the sheet is for, which is mine to fix and not his.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A forbidden word against a count of one or two.** ⚠ **Dates with no sizes where sizes exist.** ⚠ **A withdrawn assessment with no account of what was underneath it.** ⚠ **A missing quoted answer.** ⚠ **And a missing *what that changes about the firm*, which is the half of the page nobody writes.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the instance counts only.** ⚠ **The class checks each against the wording of its assessment.** *Sometimes* **against ONE fails; *a pattern* against TWO fails; and NONE with the assessment still standing fails hardest.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (227 words)', [
  '⚠ **I have believed for about three years that one of my drivers is careless with paperwork, and this week I went and counted.**',
  '**Eleven delivery notes in May. Three had the wrong carrier code. Eight were correct.**',
  '⚠ **Then I looked at the three and they were all on the same day, the 14th, which was the day we changed carriers mid-morning and nobody told him.**',
  '⚠ **So what I have is not three instances of carelessness.** **It is one instance of a change nobody communicated, which produced three wrong codes in four hours.**',
  '⚠ **I have also found where my impression came from, and this is the part I would rather not write.** **In 2024 he put a wrong code on a note for a customer who complained to me directly, loudly, in front of two other people.** ⚠ **One event, three years ago, with an audience** — **and I have been carrying it as a general assessment of the man ever since.**',
  '⚠ **If I had written his review last month as I would have written it, it would have said he is careless with paperwork.** **He would have rejected it, correctly, and he would have been right and I would have thought he was being defensive.**',
  '⚠ **Twenty minutes of counting.** **And the thing I am going to do differently is not about reviews at all** — **it is that I am going to be suspicious of any judgement of mine that I can trace to one loud afternoon.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *how many instances, honestly?*** **And the follow-up that produces the best answers: where did the impression come from?**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the impression rest on a single event the writer was not present at, or an event with an audience? Usually one or two of three** — **and the audience version is the more dangerous, because the embarrassment attaches to the observer and gets remembered as a property of the observed.**'));
out.push(note("That piece is the strongest thing in this key and the mechanism it uncovers is worth naming in its own right. One loud afternoon with witnesses, three years ago, became a standing assessment of a man — and the counting both disproves the assessment and explains where it came from. The learner's closing resolution is better than anything the cycle asks for: be suspicious of any judgement you can trace to one loud afternoon. Give the class that sentence and ask which of their own judgements it applies to."));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  The strength nobody has named'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the revealing one: most learners say they would not believe it, which is what four years of vague praise does.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names the thing, the year it started, the fact that nobody asked, and the decision taken on it.** **The first is four years of nothing in nine words.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The thing itself, specifically; what it is worth, with a figure or a consequence; and whether anybody has ever told them.**  2 ⚠ **Because praise feels safe, so it gets written vaguely** — **and a vague compliment is the one thing in a review that costs nothing and buys nothing.**'));
out.push(p('⚠ **The third part is the one that does the work and it is an admission.** ⚠ *Nobody has ever told you that, including me.* **It is the sentence the person repeats at home, and it is believed precisely because it costs the writer something.**'));
out.push(p('⚠ **A named strength tells somebody which of the things they do is the valuable one.** ⚠ **They usually do not know** — **and most people are proudest of something else**, **which is why *excellent* has never landed.**'));
out.push(p('⚠ **And teach the risk rather than avoiding it.** ⚠ **Once somebody knows a thing they do is valuable, they may ask to be paid for it or ask who will do it when they are gone** — ⚠ **and both are questions the firm ought to be asked.** **Withholding the information to avoid the question is choosing not to be asked something you should be asked.**'));
out.push(p('**Language box – Practise (sample):**  _**The person: our fitter.**_ ⚠ _**The thing:** he has kept a one-line note of every machine failure since 2021, in the back of his diary. Nobody asked him to._ ⚠ _**What it is worth:** it is the only downtime record we have, and the 420,000 figure in this year\'s forklift paper came out of it._ ⚠ _**Has anybody told him:** no. Not in six years, and not me._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The strengths half writes itself. She is excellent, and I say so.'],
  ['B', 'How many times has she been told she is excellent?'],
  ['A', 'In four years? Four. Maybe five.'],
  ['B', 'And what changed?'],
  ['A', 'Nothing.'],
  ['B', 'Does she know which of the things she does is the valuable one?'],
  ['A', '…I doubt it. She would probably say the counter work.'],
  ['B', 'And is it?'],
  ['A', 'No. It is the tally, and the tally is in nobody\'s job description.'],
  ['B', 'Then that is the only piece of information the section could carry, and it is not in it.']
]));
out.push(note("The question that lands is B's fourth: does she know which of the things she does is the valuable one? Learners almost always say no, and then volunteer that the person would guess wrong. That is the whole case for the cycle, made by the learner in two exchanges. Note also what it implies about the previous four years of praise — it was accurate, warm, and carried no information at all, which is why it changed nothing and why the person discounts the fifth instance of it."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One named strength in three parts, and what question the person might ask once they know.** ⚠ **Then whether the firm should be asked it** — **and the answer is almost always yes, which is why the question is not a reason to withhold the information.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two people', [
  '⚠ **1  The fitter.** ⚠ **The thing:** **a one-line note of every machine failure since 2021, in the back of his diary, that nobody asked for.** ⚠ **What it is worth:** **the only downtime record the firm has; the 420,000 in the forklift paper came out of it.** ⚠ **Has anybody told him:** **no, in six years, and not me.**',
  '⚠ **2  The counter supervisor.** ⚠ **The thing:** **she telephones customers whose order has slipped before they telephone us. Nobody asked her to and it is not in the schedule.** ⚠ **What it is worth:** ⚠ **I cannot put a figure on it and I am going to say so.** **What I can say is that we have had two written complaints in three years and the two firms we compete with on the Hama road have a reputation for not calling.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _He has kept a one-line note of every machine failure since 2021. Nobody asked him to. It is the only downtime record we have and the 420,000 figure in the forklift paper came out of it. And nobody has ever told him, including me._'));
out.push(note("The second entry does the honest thing with a strength that cannot be costed: it says so, and then gives a consequence instead of a figure. Two written complaints in three years against competitors with a reputation for not calling is a consequence a reader can weigh. Teach that as the fallback — a figure if you have one, a consequence if you do not, and never a description dressed as either. A description is what excellent is."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The February Homs decision was taken on her figures, and the capital committed on that decision is 1.1 million.** ⚠ *Your notebook is the evidence base for the largest decision this firm has taken in six years.*'));
out.push(p('**2** ⚠ **That both of them said she was an asset to the counter and neither mentioned the tally.** ⚠ *I have read them* — **ten minutes, and it tells the person exactly how long the firm has been failing to notice.**'));
out.push(p('**3** ⚠ **Because it is the only part of the document containing something she did not already know** — ⚠ *and a review whose most informative paragraph is on page three is a review that is read in the wrong order.* **The usual form puts objectives first and strengths third.**'));
out.push(p('⚠ **The third item on the page is the move to teach separately.** ⚠ **The dependency is named, owned by the firm, and explicitly not the person\'s problem** — *it is mine, and I am telling you so that you know the firm knows.* **That sentence is what stops a named strength becoming a quiet obligation, which is the one way this page can do harm.**'));
out.push(p('⚠ **And reading the previous reviews is a ten-minute act with a large return.** ⚠ **It proves the page is not routine, it dates the firm\'s failure precisely, and it is the only way to write *including the two reviews before this one* honestly.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (130 words)', [
  '**ANNUAL REVIEW: A. SAMMAN, FITTER. PAGE 1: WHAT YOU DO THAT THIS FIRM DEPENDS ON. R. Haddad, 14 July.**',
  '⚠ **1  The failure note. You have kept a one-line note of every machine failure in the back of your diary since 2021. Nobody asked you to and it is in no job description.**',
  '⚠ **What it is worth. It is the only record of downtime this firm has. The 420,000 figure in this year\'s forklift paper came out of your diary, and the paper would not have been written without it.**',
  '⚠ **Whether anybody has told you. No. Not in six years, not in either of your two previous reviews, which I have read, and not by me.**',
  '⚠ **2  One thing I am recording because it is a risk and not a compliment. If you left, the record would stop and in two years nobody would know it had existed. That is in my own notes as a dependency on one person. It is not your problem to solve.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A strength that is actually a duty** — **if somebody asked them to do it, it belongs in the objectives section.** ⚠ **A description where a figure or a consequence was available.** ⚠ **A missing *has anybody told you*.** ⚠ **And a named dependency with no owner, which turns a compliment into an obligation.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *what it is worth* paragraph only.** ⚠ **The class says of each whether it gives a figure the thing enabled, a consequence, or a description.** **A description fails, however warm.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (224 words)', [
  '⚠ **I write the week\'s hire schedule by hand on a Thursday and nobody has mentioned it in nine years.**',
  '**It takes me about forty minutes. The system produces one, which is wrong about twice a month because it does not know which of our drivers will not go to two particular customers.**',
  '⚠ **Nobody asked me to do it.** **I started in 2018 after a week when we sent the wrong driver to the Jableh account twice, and I have done it every Thursday since.**',
  '⚠ **What it is worth: I think it is the reason we still have the Jableh account, which is about 600,000 a year, and I have never said that out loud because it sounds like a large claim for forty minutes of handwriting.**',
  '⚠ **Has anybody told me it matters?** **No. Twice somebody has asked me why I do not just use the system.**',
  '⚠ **And the part that has occurred to me writing this is that if I were away for a month, nobody would know to do it.** ⚠ **They would use the system, it would be wrong twice, and the second time would probably be Jableh** — **because Jableh is the account the system gets wrong.**',
  '⚠ **I am going to write the two drivers and the two customers on a card and give it to the office, which takes four minutes and which I have not done in nine years.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is there a figure here, or a description?*** **And where the writer calls their own claim large, mark that** — **it is almost always a sign that the thing has never been assessed by anybody.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many is the thing in a job description? Usually none** — **and in at least one the firm has been relying on it for years without knowing.** ⚠ **Ask what each writer is going to do about it, because the honest answer is usually a four-minute card that nobody has written.**'));
out.push(note("Two things in that piece. The reluctance in the fourth paragraph — never saying it out loud because it sounds like a large claim for forty minutes of handwriting — is exactly why named strengths have to come from the reviewer rather than from the person, and why the section matters. And the last paragraph is 20.3 arriving unprompted: the writer identifies a single-person dependency, works out what would fail and in what order, and proposes a four-minute remedy they have not done in nine years. That is the cycle paying for itself inside one piece of free writing."));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  Once, precisely, with a remedy'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the finding: the first time rarely worked, and the later times achieved a relationship rather than a change.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **A count, an instruction and a date, and the remedy is a thing the person has already done.** **The first could be agreed with on a Tuesday and forgotten by Thursday.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What happened, with the count; what to do instead, as an instruction; and when it starts.**  2 ⚠ **That the only remedies anybody carries out are the ones that start on Monday** — **a remedy requiring a new skill starts in three months, and one that applies something they did in May starts immediately.**'));
out.push(p('⚠ **The three-stage decay should be given as a sequence and remembered.** ⚠ **The first time is a correction. The second is a reminder. The third converts a correction into a grievance** — **after which the person is managing the reviewer rather than the work, and the criticism is unusable for ever.**'));
out.push(p('⚠ **Nour\'s two corridor mentions are the diagnosis.** ⚠ **No count, no instruction, no date** — **so both were preferences, and a preference can be agreed with and not done, which is exactly what a reasonable person does with one.**'));
out.push(p('⚠ **Draw the remedy from the person\'s own better work wherever possible.** ⚠ *You did this in May.* **It makes the instruction unarguable, removes any suggestion that they cannot, and turns Monday into a real date rather than an aspiration.**'));
out.push(p('⚠ **And teach the self-incriminating paragraph, because it is what prevents the grievance.** ⚠ *I raised this twice with no count and no date. Those were preferences and you agreed with both, which was the correct response.* **It concedes that the first two failures were the writer\'s** — **and the instruction that follows is then accepted rather than resisted.**'));
out.push(p('**Language box – Practise (sample):**  _**The criticism:** the variance sheet._ ⚠ _**The count:** missing in March, June and September; attached in April and the other five._ ⚠ _**The instruction:** from Monday, no stock count is submitted without the variance sheet._ ⚠ _**From their own work:** the April one had it attached with the three largest differences annotated, which is better than the standard I am asking for._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The remedy is that he needs training in how to write a variance sheet.'],
  ['B', 'When would that training be?'],
  ['A', 'September, probably. There is a course.'],
  ['B', 'And when is his next stock count?'],
  ['A', 'Friday.'],
  ['B', 'So your remedy misses four counts. Has he ever produced a good variance sheet?'],
  ['A', '…April. With the three largest differences annotated.'],
  ['B', 'Which is better than what you are asking for.'],
  ['A', 'So the remedy is "do what you did in April".'],
  ['B', 'And it starts on Friday rather than in September.']
]));
out.push(note("The arithmetic is what decides this, not the principle: a September remedy misses four stock counts, and the learner can see that in one exchange. Then the better question arrives — has he ever done it well? — and the answer is almost always yes, which converts a training need into an instruction. Where the answer is genuinely no, the honest conclusion is that the criticism belongs in a development conversation rather than in a review, and should be said rather than written."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One criticism in three parts, and the place in the person\'s own work where they have already done it.** ⚠ **Where there is no such place, say so** — **and then ask whether the item belongs in a review at all.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two repeated criticisms', [
  '⚠ **1  As said:** *try to remember the variance sheet.* ⚠ **Times said:** **three, in conversation.** ⚠ **The count:** **missing in March, June and September.** ⚠ **The instruction:** **from Monday, no count is submitted without it** — **and you did it in April, with the three largest differences annotated.**',
  '⚠ **2  As said:** *be a bit quicker on the carrier calls.* ⚠ **Times said:** **twice.** ⚠ **The count:** ⚠ **I have none.** **I cannot name a single call that was slow.** ⚠ **The instruction:** ⚠ **none, and the item comes out.** **What I actually have is an impression from a period when I was waiting on something unrelated, and it is not his.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I have said three times that he should remember the variance sheet. There was no count and no date in it. The count is March, June and September. So the instruction is: from Monday, no count without it — which he did in April._'));
out.push(note("Entry 2 is the outcome to reward: a criticism said twice, with no instances behind it, traced to an impression formed while the writer was waiting on something else. It comes out. Learners expect this cycle to improve their criticisms and about a quarter of the time it deletes them, which is a better result. And note the diagnostic in the first entry: three mentions and no count means three preferences, so nothing has yet been said once."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ *I could write six and he would carry out none of them* — **and the two chosen are the two where the remedy is something he has already done in his own work this year.**'));
out.push(p('**2** ⚠ **That she raised the first point twice, in March and in June, with no count, no instruction and no date.** ⚠ *Those were preferences and you agreed with both of them, which was the correct response to a preference* — **and the two earlier times were her fault and not his.**'));
out.push(p('**3** ⚠ **Two matters of manner, because she has one instance of each; one remedy needing a fortnight\'s training, which starts in three months and is therefore not a remedy; and one she has decided is her own preference rather than a standard** — ⚠ *I like a summary table and you do not use one, and I have been unable to say what it costs anybody that you do not.*'));
out.push(p('⚠ **That last omission is the most valuable thing on the page and it is the hardest to write.** ⚠ **A page that distinguishes the writer\'s standards from the writer\'s tastes is a page whose standards will be obeyed** — **and almost nobody writing a review has ever tried to sort their own list that way.**'));
out.push(p('⚠ **And the test for a taste is a question, not an instinct:** ⚠ *what does it cost anybody that they do not do it?* **If the answer is nothing, it is a preference** — **and it may still be said in a conversation, where a preference is a perfectly legitimate thing to express.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (129 words)', [
  '**ANNUAL REVIEW: M. DIB. PAGE 3: TWO THINGS TO DO DIFFERENTLY, EACH SAID ONCE. R. Haddad, 14 July.**',
  '⚠ **A note before them. There are two and not five. I could write five and he would carry out none.**',
  '⚠ **1  The variance sheet. Missing from the March, June and September counts; attached in April and in five others. From Monday: no stock count is submitted without it. You did this in April, with the three largest differences annotated, which is better than the standard I am asking for.**',
  '⚠ **And against myself: I raised this three times in conversation with no count and no date. Those were preferences and you agreed with all three, which was the correct response.**',
  '⚠ **2  The carrier code on 14 May. Three notes carried the old code. From Monday: when a carrier changes mid-day, the codes for that day are checked before the notes go. You cannot be expected to know a change nobody told you about, so this instruction is as much mine as yours.**',
  '⚠ **What is NOT here. One matter of manner, where I have one instance. One remedy that needs a course. And the summary table, which I like and you do not use, and I cannot say what it costs anybody.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **More than three items.** ⚠ **A remedy requiring a skill the person does not have.** ⚠ **A missing against-myself paragraph where the thing has been raised before.** ⚠ **An omissions list with no preference in it** — **almost every reviewer has at least one, and a page without one has not been sorted.**'));
out.push(p('⚠ **One thing to reward in the sample above.** ⚠ *You cannot be expected to know a change nobody told you about, so this instruction is as much mine as yours.* **A shared instruction is still an instruction**, **and it is the honest form where the firm contributed to the fault.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the omissions only.** ⚠ **The class listens for one item the writer has identified as their own taste.** **Where there is none, send the page back** — **not because the writer is wrong, but because the sorting has not been attempted.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (226 words)', [
  '⚠ **I have told the same person four times in two years to copy me on supplier correspondence, and this week I worked out why it has never happened.**',
  '**It has never happened because I have never once said when, or which correspondence, or what I would do with it.**',
  '⚠ **All four times I said some version of "keep me in the loop on the supplier side".** **He agreed all four times, warmly, and I believe he meant it** — **and then nothing changed, because there was nothing to change.**',
  '⚠ **The fourth time I was annoyed, and he could tell, and the conversation was about my annoyance rather than about correspondence.** ⚠ **That is the third-time effect arriving at the fourth attempt, and after it he was careful with me for about a month.**',
  '⚠ **Written once, it would be: of the fourteen supplier letters this year I was copied on two. From Monday, I am copied on anything that changes a price, a term or a date — not on arrangements, deliveries or queries. I will read them within two days and will not reply to the supplier without telling you first.**',
  '⚠ **That is forty-eight words and it is the first version of this that could be carried out.** ⚠ **And the last clause is the one I had never thought to include** — **which is probably half the reason he kept me out of it, because he did not know what I would do once I was in.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *could this start on Monday?*** **And the second: does the instruction say what the reviewer will do with the result, which is the clause almost nobody includes.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the repeated criticism lack a date? Usually all three.** ⚠ **Then ask what the third or fourth repetition achieved** — **and the honest answer, as in the sample, is that it made the subject the relationship and bought a month of carefulness.**'));
out.push(note("The last paragraph of that sample finds something the cycle does not teach and it is worth adding to the three parts: say what you will do with the result. Half the reason the colleague kept the writer out of the correspondence was not knowing what would happen once they were in. An instruction that specifies the reviewer's own behaviour as well as the other person's is a different proposition, and it costs one clause. Give the class that as a fourth part to try."));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  Answering an assessment you think is wrong'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the bleak one: almost nobody answered in writing, so the assessment is now the only document and the disagreement exists nowhere.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It accepts, gives dates, and asks for the instance.** **The first is a position rather than an answer and can be filed without reply.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Accept the part that is right; give the dates for the part that is not; ask for the instance behind anything you cannot place; and say what you want to happen to the document.**  2 ⚠ **Because an answer that begins by disputing is read as a defence and everything after it is discounted** — **including the part where you are right, which is the part you needed.**'));
out.push(p('⚠ **The acceptance must be the biggest true part and not the smallest, and this is the half learners get wrong.** ⚠ **A small acceptance and a large dispute is visible in four seconds** — **and the arithmetic of what you accept is itself a statement about how reliable the rest of your answer is.**'));
out.push(p('⚠ **Dates with no adjective.** ⚠ *With you on 11 March; decided on the 22nd.* **Not *it then sat on your desk*, which is the same fact with a complaint wrapped round it** — **and the complaint is what gets answered instead of the fact.**'));
out.push(p('⚠ **Ask for the instance rather than denying the judgement.** ⚠ **A request for evidence is unanswerable except by evidence**, **and 22.2 says what happens when somebody actually goes to look: about a third of the time there is nothing there.**'));
out.push(p('⚠ **And ask for the answer to be KEPT, not for the review to be changed.** ⚠ **People almost never change a review**, **and two documents side by side are a record where one amended under pressure is a resentment** — **which is worth more to the writer in two years than the amendment would have been.**'));
out.push(p('**Language box – Practise (sample):**  _**The assessment:** that I was slow on the three March decisions._ ⚠ _**I accept:** two of the three, with the dates as given, and on one of them I was waiting to feel certain rather than waiting for anything._ ⚠ _**The dates:** the settlement paper was with you on 11 March; the decision was taken on 22 March._ ⚠ _**I ask for:** the instance behind the briefing point, which I cannot place._ ⚠ _**And I ask:** that this is kept with the review._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I accept none of it. The whole assessment is unfair.'],
  ['B', 'Was any part of it true?'],
  ['A', '…Two of the three delays were mine.'],
  ['B', 'Two of three is most of it.'],
  ['A', 'But the third one is the one that matters.'],
  ['B', 'And if your answer opens by disputing, where does the third one get read?'],
  ['A', 'As a defence.'],
  ['B', 'With the two you were going to concede anyway unmentioned.'],
  ['A', 'So accepting the two is how the third gets read at all.'],
  ['B', 'It is the only way. And it costs you nothing you were not going to lose.']
]));
out.push(note("The closing exchange is the argument and it is tactical rather than moral: accepting the two is how the third gets read at all, and it costs nothing the writer was not going to lose anyway. Learners resist opening with an acceptance because it feels like surrendering the position, and the answer is that the position does not exist until somebody reads the third paragraph. Make them say the proportion out loud — two of three — because the proportion is what makes the concession unavoidable."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The four moves, and whether the acceptance is the larger or the smaller true part.** ⚠ **Then what the proportion tells a reader** — **because a reader who sees a small acceptance and a large dispute discounts the dispute without reading it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two disputed assessments', [
  '⚠ **1  The assessment:** **slow on the three March decisions.** ⚠ **I accept:** **two of the three, and on one I was waiting to feel certain rather than waiting for anything** — **which is worse than the review says.** ⚠ **The dates for the rest:** **with you on 11 March, decided on 22 March.** ⚠ **I ask:** **that the sentence says two of three, and that this answer is kept with the review.**',
  '⚠ **2  The assessment:** **that my handover to the depot was incomplete.** ⚠ **I accept:** ⚠ **nothing, and I have checked.** **I handed over on 3 and 17 June and both are in the diary with the points covered.** ⚠ **So the answer is one paragraph asking for the date of the occasion, and I will answer it if there is one** — **and I am not going to write anything else, because an answer that argues at length against a judgement with no instance behind it ends up looking like the stronger claim.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The assessment said I was slow on three March decisions. I accept two of three, which is the larger part, and on one of them the reason was worse than the review says. On the third: with you on 11 March, decided on the 22nd. I ask that the sentence says two of three and that this answer is kept._'));
out.push(note("Entry 2 handles the case the Language box does not: an assessment with nothing true in it. The learner's judgement is right — one paragraph asking for the date, and nothing else — and the reason given is the important part: a long argument against a judgement with no instance behind it ends up looking like the stronger claim. Brevity is the correct response to an unevidenced charge, and learners instinctively do the opposite."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Two of the three delays, with the dates as given.** ⚠ **And she adds:** *on the disclosure one I was waiting to feel certain rather than waiting for anything, which is the honest account and is worse than the review says.*'));
out.push(p('**2** ⚠ **The date of the occasion on which her briefing of Lina was incomplete.** ⚠ **She offers her own record: briefings on 3 and 17 March, both in her diary with the points covered** — **and *if there was a third occasion I have no record of it.*'));
out.push(p('**3** ⚠ **The paragraph about her December objection to the reopening, which she thinks is harsher than the facts warrant** — ⚠ **and she declines to argue because she was the person who benefited from the decision it led to.**'));
out.push(p('⚠ **Paragraph 4 is the move worth teaching separately: an omission added for the FILE and not as praise.** ⚠ *In two years the question will be who found it, and the only document that answers it at present is Bassel\'s paper.* **Naming the future question is what distinguishes the request from vanity** — **and it is 18.6 arriving inside a personnel document.**'));
out.push(p('⚠ **And paragraph 5 is why the whole answer will be granted.** ⚠ **A writer who declines to contest the one paragraph where they would look self-serving has made every other request in the document easy to agree to** — **and the reason given is the strongest available, because it concedes an interest rather than denying one.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (134 words)', [
  '**ANSWER TO MY ANNUAL REVIEW OF 10 JULY. M. Dib to R. Haddad, 16 July. I ask that this is kept with the review.**',
  '⚠ **1  What I accept, and it is the larger part. The variance sheet was missing from the March, June and September counts. The dates are right. I also did not ask anybody what the sheet was for, in three years, which the review does not mention and which is worse.**',
  '⚠ **2  The carrier codes, with dates and nothing else. The carrier changed at about eleven on 14 May. I was told on the 16th. The three notes were written between eleven and three on the 14th.**',
  '⚠ **3  One assessment I cannot place. The review says my yard notes are sometimes unclear. I cannot identify an occasion, and the word is *sometimes*. I ask for the dates, and if there are any I will answer them.**',
  '⚠ **4  What I ask. That this is kept with the review. That the carrier sentence says I was told on the 16th. And that nothing else is changed.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A dispute before an acceptance.** ⚠ **An acceptance that is the smaller true part.** ⚠ **An adjective in the dates paragraph.** ⚠ **A denial where a request for the instance was available.** ⚠ **And a request to change the whole document**, **which is the request that gets the whole answer refused.**'));
out.push(p('⚠ **One thing to reward.** ⚠ *I also did not ask anybody what the sheet was for, in three years, which the review does not mention and which is worse.* **A writer who adds a charge the review missed has made the rest of the answer very difficult to discount.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the acceptance paragraph only.** ⚠ **The class says of each whether it is the larger true part, and whether anything in it is worse than the assessment said.** **The second is rare and it is what makes an answer land.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (228 words)', [
  '⚠ **In 2021 a review of mine said that I had "not demonstrated readiness for additional responsibility", and I said nothing at all.**',
  '**I was angry for about three weeks and then I stopped thinking about it, and I did not apply for the supervisor\'s post that came up in the November.**',
  '⚠ **What I would write now is four paragraphs.** **I accept that I had turned down the two site visits in the spring, which were the obvious opportunities and which I turned down because of my mother\'s illness and did not say so.** ⚠ **That is the larger part and it is more against me than the review knew, because the review did not know the reason and could not have.**',
  '⚠ **On the rest: I ran the stock count alone in July and the year-end in September, and both are in the file.** **I am not asking for a view about them; I am asking for them to be mentioned.**',
  '⚠ **And one thing I cannot place at all: the review says I was reluctant to deputise. I cannot identify an occasion and I would ask for one.**',
  '⚠ **The thing I understand now is that the document is still in my file and my silence is not.** ⚠ **Somebody reading it in 2021 and somebody reading it today sees the same sentence and no reply** — **and the reply would have taken me forty minutes on a Thursday evening.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is the acceptance the larger part?*** **And where the writer did not answer at the time, ask what exists in the file now** — **which is the assessment and nothing else.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many was there a written answer at the time? Usually none** — **and in those cases the assessment is now the only document, which is the whole argument for writing one even where nothing is likely to change.**'));
out.push(note("The last two lines of that sample are the cycle's argument and they are more persuasive than anything in the Language box: the document is still in the file and the silence is not, and the reply would have taken forty minutes on a Thursday evening. The piece also shows the acceptance move working at full strength — the learner concedes a reason the review could not have known, which is more against them than the assessment was, and that concession is what would have made the rest of the answer unanswerable."));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  Reviewing somebody better than you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one that produces discomfort: most learners have assessed work they could not do, and knew it at the time.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It states the limit and then gives an outcome the writer can actually see.** **The first is a grade issued by somebody who could not check one.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Outcomes, timeliness, and what the person does when they do not know something.**  2 ⚠ **Because she knows you cannot** — **so *to a high standard* tells her that her reviewer will sign off work they have not understood, which is the most useful information in the document and will not be used in the reviewer\'s favour.**'));
out.push(p('⚠ **The third assessable thing is the one to make the centre of the page.** ⚠ *She came with a question twice and had narrowed it to two possibilities both times.* **It is the most revealing thing about anybody doing technical work, it is visible to a non-specialist, and almost no review mentions it.**'));
out.push(p('⚠ **Get the technical part assessed and say in the document that you did.** ⚠ *I asked N. Sayegh, who said ___.* **Nadia has not seen that sentence in a review in sixteen years and says it ought to be in all of them** — **it costs the reviewer nothing and tells the reader how much weight each judgement carries.**'));
out.push(p('⚠ **And state the limit without apology.** ⚠ **Not *I am of course no expert, but*, which invites the reader to discount the whole page.** *I am not in a position to assess X; what I can assess is Y* — **two clauses, and the second is longer than the first.**'));
out.push(p('**Language box – Practise (sample):**  _**The work: our bookkeeper\'s VAT work.**_ ⚠ _**The limit:** I am not in a position to assess it and could not check a return._ ⚠ _**Outcomes:** no query from the authority in four years, and one voluntary disclosure in 2024 that she identified herself._ ⚠ _**Timeliness:** sixteen of sixteen filed before the deadline._ ⚠ _**When she does not know:** she comes with the regulation printed and the two readings marked._ ⚠ _**Who I would ask:** our accountant, and I would say in the document that I asked him._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'If I write that I cannot assess it, I undermine myself as her reviewer.'],
  ['B', 'Does she know you cannot assess it?'],
  ['A', '…Yes. Obviously.'],
  ['B', 'So what does "to a high standard" tell her?'],
  ['A', 'That I will sign off work I have not understood.'],
  ['B', 'Is that useful to her?'],
  ['A', 'Extremely. And not in my favour.'],
  ['B', 'So the admission does not create the weakness.'],
  ['A', 'It stops it being a secret.'],
  ['B', 'Which is all it does. The weakness was already hers to use.']
]));
out.push(note("The closing line settles the objection and should be said in exactly those terms: the admission does not create the weakness, it stops it being a secret. Learners imagine they are choosing between appearing competent and being honest, and they are not — the person being reviewed already knows, and the only question is whether the document says so. Note too what the admission buys: everything else on the page is now read as something the reviewer genuinely can judge, which raises the weight of the other four paragraphs."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The limit and the three assessable things for one person, and the name of who could assess the technical part.** ⚠ **Then draft the sentence saying you asked them** — **which is the sentence almost nobody has ever seen in a review.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two people', [
  '⚠ **1  The bookkeeper, VAT work.** ⚠ **Cannot assess:** **the technical correctness; I could not check a return.** ⚠ **Can assess:** **no authority query in four years; one voluntary disclosure she found herself; sixteen of sixteen filed early; and she brings questions with the regulation printed and two readings marked.** ⚠ **Would ask:** **our accountant.**',
  '⚠ **2  The fitter, diagnosis.** ⚠ **Cannot assess:** **whether his diagnosis is right; I could not tell a bearing from a seal.** ⚠ **Can assess:** ⚠ **and here the outcome measure is awkward** — **failures fell from eleven to four after we replaced two machines, which is the machines and not him, and I am going to say that rather than claim it for him.** ⚠ **What I can claim is that he has never been called back to the same fault twice.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I am not in a position to assess the technical correctness of the VAT work. What I can assess is no authority query in four years, sixteen of sixteen filed early, and that when she does not know she arrives with the regulation printed and two readings marked. And I would ask our accountant, and say in the document that I asked him._'));
out.push(note("The second entry refuses a flattering outcome measure and that is the right instinct: failures fell because two machines were replaced, which is a capital decision and not the fitter's work, and the learner says so rather than claiming it. Then they find the measure that is actually his — never called back to the same fault twice — which is better evidence and could only be found by thinking about what the person controls. Teach that as the test for an outcome: is this something they did, or something that happened near them?"));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That both called it *to a high standard* and were written by people who also could not check one.** ⚠ **It is a criticism of the form rather than of the predecessors, and it explains why this page looks different.**'));
out.push(p('**2** ⚠ **Outcomes: the June reconciliation found a 410,000 difference that 2025 and 2026 did not.** ⚠ **Timeliness: eleven of twelve on or before the fifth.** ⚠ **And what she does when she does not know** — **which the writer says she is best placed to judge, because it is the only part of the work she actually sees.**'));
out.push(p('**3** ⚠ **That the workings are not kept, so a third party cannot follow a reconciliation without asking her.** ⚠ **It came from Mr Sayegh, in his own words, initialled** — **and the remedy is that from Monday the workings are kept.**'));
out.push(p('⚠ **Two details in the borrowed assessment are worth copying.** ⚠ **The reviewer chose the three reconciliations AT RANDOM and says so** — **otherwise the judgement is of three the subject chose** — **and the words are quoted and initialled rather than paraphrased.**'));
out.push(p('⚠ **And the remedy is attached to the borrowed criticism immediately, with what it is not.** ⚠ *Not a technical change and not an implied doubt about the work.* **A criticism relayed from a third party is the easiest kind to misread**, **and it is Unit 18 arriving in a personnel file: a document that cannot be followed without its author has a retirement date on it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (132 words)', [
  '**ANNUAL REVIEW: S. HALABI, BOOKKEEPER. PAGE 3: THE VAT WORK, WHICH I CANNOT ASSESS. R. Haddad, 15 July.**',
  '⚠ **The limit, stated first. I am not in a position to assess the technical correctness of your VAT work. I could not check a return, and you know that. Your two previous reviews called it *excellent* and were written by me, and I could not check one then either.**',
  '**Outcomes. No query from the authority in four years. One voluntary disclosure, in 2024, which you identified and raised before anybody asked.**',
  '**Timeliness. Sixteen of sixteen filed before the deadline.**',
  '⚠ **What you do when you do not know something. You come with the regulation printed and the two possible readings marked. That is the part I am best placed to judge, because it is the only part of this work I see.**',
  '⚠ **Who assessed the technical quality. I asked our accountant on 11 July to look at three returns chosen at random by me. His words, initialled: "Correct throughout. The one thing I would change is that the partial-exemption calculation is done on paper and not kept."**',
  '⚠ **And the remedy. From Monday, the calculation is kept with the return. It is not a doubt about the work.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A limit wrapped in an apology.** ⚠ **A grade issued on work the writer could not check.** ⚠ **Samples chosen by the subject, or chosen by the reviewer and not said to be.** ⚠ **A third-party judgement paraphrased rather than quoted.** ⚠ **And a borrowed criticism with no remedy and no *what it is not*.**'));
out.push(p('⚠ **One thing to reward in the sample above.** ⚠ *Your two previous reviews called it excellent and were written by me, and I could not check one then either.* **A reviewer who names their own earlier reviews as part of the problem has made the new method credible in one sentence** — **and it costs them more than anything else on the page.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the limit sentence only.** ⚠ **The class listens for an apology.** *Of course I am no expert, but* **fails; so does any version with *obviously* or *admittedly* in it.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (225 words)', [
  '⚠ **Every review I have had for nine years has graded my welding, and not one of the people who wrote them could weld.**',
  '**They were all perfectly reasonable men. The gradings were all good. And I have never once believed a word of them.**',
  '⚠ **What I would have believed: that nothing I welded has come back, in nine years, which they could have established in an afternoon from the job cards.** ⚠ **Or that when I am not sure about a joint I stop and ask, which they have all seen me do and none of them has mentioned.**',
  '⚠ **What the gradings actually told me was that my reviewer would sign a judgement he could not make.** **I have used that twice** — ⚠ **once to get a method change through that I knew was right and could not have defended if anybody had understood it, and once to stop a change I did not want.** **Neither was dishonest and both were easy.**',
  '⚠ **And the one I would have respected is the one I have never had: a man saying he could not assess the welds and had asked Abu Samir to look at three of mine, picked by himself.** ⚠ **Abu Samir would have found the thing I do wrong, which is that I do not grind back far enough on repairs, and nobody has ever told me, in nine years, because nobody who looked at my work could see it.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *was the reviewer\'s limit stated anywhere?*** **And the harder follow-up: what did the writer conclude about the reviewer\'s other judgements?**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many had the reviewer stated their limit? Usually none.** ⚠ **Then ask what each writer concluded about the rest of the document** — **because that is the cost the cycle is about and it is paid across the whole page, not just the paragraph that was invented.**'));
out.push(note("That piece is the single best argument in the unit and it should be read in full. The learner has used their reviewer's inability twice, by name, and says that neither occasion was dishonest and both were easy. Then the last paragraph delivers what the whole cycle is for: nine years and nobody has told him the thing he does wrong, because nobody who looked at his work could see it. A reviewer who stated a limit and asked somebody competent would have given him that in one afternoon. The cost of the invented grade is not embarrassment; it is nine years of a correctable fault."));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: the document that must not agree'));
out.push(stage('1', 'Get ready – Unit 22 quiz'));
out.push(table(['', 'The answer'], [
  ['**22.1**', '⚠ **Does it describe a document, a conversation or a decision** — **or a person?** **A person cannot be acted on by Monday.**'],
  ['**22.2**', '⚠ **Only with three instances or more.** **One is an instance, two a coincidence, three a pattern.**'],
  ['**22.3**', '⚠ **The thing specifically · what it is worth, with a figure or a consequence · and whether anybody has said so, including you.**'],
  ['**22.4**', '⚠ **A correction · a reminder · a grievance.** **After the third, the subject is the relationship.**'],
  ['**22.5**', '⚠ **Accept the larger true part · dates for the rest · ask for the instance · say what you want done with the answer.**'],
  ['**22.6**', '⚠ **Outcomes · timeliness · what they do when they do not know something.**'],
], [1, 7]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **She has written a third draft that is slightly smaller** — **the sentence about section 5 removed and the May paper softened** — **and what stops her is bringing it to Nadia instead of filing it.**  2 ⚠ **Three documents: the review as first written, the April minute unchanged, and a third paragraph signed by both saying the two answer different questions and neither disproves the other.** ⚠ **Mr Sayegh has to sign a sentence saying his own April decision is not disproved by a review that contradicts it.**'));
out.push(p('⚠ **The sentence to teach learners to recognise in themselves is Nour\'s:** ⚠ *my third draft is slightly smaller.* **It is the only warning anybody gets** — **nobody sets out to write a dishonest document, and it arrives as a third draft, by softening, and the writer can usually name the two sentences they removed.**'));
out.push(p('⚠ **And the right response to noticing it is procedural rather than moral.** ⚠ **Take the softened draft to somebody instead of filing it.** **That is what Nour does, and Mr Sayegh says afterwards that it is the reason he did not ask her to make the cut he had been intending to ask for.**'));
out.push(p('⚠ **Two documents answering different questions are allowed to be in tension, and consistency between them is a coincidence rather than a virtue.** ⚠ *What did he do this year* **and** *who should hold the post* **are different questions** — **and manufacturing agreement means falsifying whichever is easier to soften, which is always the one about the person.**'));
out.push(p('⚠ **But the tension needs its own paragraph, because a reader in a year will see it and conclude somebody was wrong.** ⚠ **The third document does not reconcile them. It says that they do not reconcile** — **and it is the only one of the three that has to be written deliberately.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The five steps, with a sample run.**'));
out.push(table(['B asks', 'A answers (sample)'], [
  ['**Is your later draft smaller? Which sentences came out?**', '⚠ **Yes. The one saying her disclosure found 410,000, and the one saying the previous two years missed it.**'],
  ['**Why did they come out? What were you making it agree with?**', '⚠ **With the fact that she is on the lower of our two pay bands and I am not going to be able to move her this year.**'],
  ['**What question does your document answer?**', '⚠ **What did she do in the year to 30 June.**'],
  ['**What question does the other one answer?**', '⚠ **What the firm can afford in a year when it has committed 1.1 million.**'],
  ['**Then who signs the paragraph saying they are not supposed to agree?**', '⚠ **I do, and the owner does, and the paragraph says the pay decision was about the year and not about the work.**'],
], [3.4, 5.6]));
out.push(note("Use a pay example rather than an appointment one when running this with a class, because it is the version everybody has. The softening is identical in shape — two true sentences removed so that a review does not embarrass a decision about money — and the resolution is identical too: the review says what she did, the pay note says what the firm could afford, and a third paragraph says that the second is not a judgement of the first. Ask who in the room has written a smaller third draft for exactly that reason."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **A document the learner has softened, the sentence that came out, the two questions, and who signs the third paragraph.** ⚠ **The last is the one that bites** — **because the signatory is almost always the person who took the decision, not the person who wrote the document.**'));
out.push(stage('4', 'Your turn'));
out.push(sample('Sample — two pairs in tension', [
  '⚠ **1  Document A:** **the review, answering what she did this year.** ⚠ **Document B:** **the pay note, answering what the firm could afford after committing 1.1 million.** ⚠ **Which got softened:** **the review, twice.** ⚠ **Who signs the third paragraph:** **me and the owner.**',
  '⚠ **2  Document A:** **the incident report on the 14 May carrier codes, answering what happened.** ⚠ **Document B:** **the depot supervisor\'s review, answering what he did this year.** ⚠ **Which got softened:** ⚠ **the incident report** — **because naming the carrier change as uncommunicated meant naming who had not communicated it, which was me.** ⚠ **Who signs the third paragraph:** **I do, alone, and it is shorter than the two documents together.**',
]));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The mediation, in full.** ⚠ **The resolution is three documents and not a compromise, and the cost falls on the person who took the decision.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Nour**', '⚠ **the honest review reads as a criticism of the April decision, and she has already written the softened version**', '⚠ **the third draft, and a file that agrees with itself** — **and she adds to the review that she was the person appointed instead, which all three drafts had omitted**'],
  ['**Nadia**', '⚠ **a document made smaller to agree with another is the only dishonest document a careful person writes**', '**nothing**'],
  ['**Mr Sayegh**', '⚠ **a reader in a year will see the tension and conclude somebody was wrong**', '⚠ **the appearance of a decision nothing contradicts** — **he signs a paragraph saying his own April decision is not disproved by a review that contradicts it**'],
], [1.1, 4.2, 4.7]));
out.push(p('**Report (sample):**  _Everybody is right. Nour is right that the honest review embarrasses April. Nadia is right that the softened draft is the dishonest document. Mr Sayegh is right that a reader will conclude somebody was wrong. So the file holds the review as first written, the April minute unchanged, and a third paragraph signed by both — and Nour gives up the third draft while Mr Sayegh gives up a decision nothing contradicts._'));
out.push(p('⚠ **And the sentence that cost the most, which is Mr Sayegh\'s:** *"Which is a more uncomfortable thing to sign than the review was to write."* ⚠ **Mark it as the only point in either book where the person who took a decision signs a document letting a true record stand against it** — **and the unit is about which of the two a firm falsifies when it cannot bear the tension.**'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)'));
out.push(table(['Line', '1', '2', '3', '4', '5', '6'], [['Answer', 'CORRECT', 'CORRECT', 'BEEN', 'TO', 'CORRECT', 'CORRECT']], [1, 1.4, 1.4, 1, 1, 1.4, 1.4]));
out.push(table(['Line', '7', '8', '9', '10', '11', '12'], [['Answer', 'CORRECT', 'FOR', 'CORRECT', 'MORE', 'CORRECT', 'BE']], [1, 1.4, 1, 1.4, 1, 1.4, 1]));
out.push(p('**3 BEEN** — *you have written them*; **the perfect active takes no *been*.**  **4 TO** — *should come first*; ***come to first* is not a structure.**  **8 FOR** — *this is not a problem*; ***not for a problem* has nothing for *for* to attach to.**  **10 MORE** — *smaller* **is already comparative.**  **12 BE** — *I will say so*; **the modal takes a bare infinitive.**'));
out.push(p('⚠ **The pattern in this text is the same family as Unit 20\'s and it is the family Part 5 mostly tests:** ⚠ **an auxiliary or a small function word inserted where the structure does not take one** — ***been*, *to*, *for*, *be*** — **plus one doubled comparative.** **Between them those two faults account for most of what this part ever asks.**'));
out.push(p('⚠ **Line 10 is the easiest and line 8 is the hardest, and candidates often reverse that.** ⚠ *More smaller* **is audible to anybody.** *This is not for a problem* **passes the ear almost completely, because *not for* is a real sequence in other structures** — **and the only way to catch it is to ask what *for* is attached to and find that the answer is nothing.**'));
out.push(p('⚠ **And the standing instruction holds: every one of the twelve lines makes sense, including the five with errors.** ⚠ **A candidate reading for meaning marks all twelve CORRECT** — **so read for structure, which is a different act and has to be taught as one.**'));
out.push(stage('6', 'Write with help – Writing Part 2 sample'));
out.push(sample('Sample answer (131 words)', [
  '**REPORT: THE ANNUAL REVIEWS, 2027**',
  '**To:** **the owner**   **From:** **R. Haddad**   **Date:** **20 July**',
  '**What the reviews now contain.** **Every assessment names a document or a conversation, with a date. The previous form named qualities, and a quality cannot be acted on.**',
  '**What changed, and by how much.** **Of eleven assessments across four reviews, three were withdrawn when I looked for the instances and found none. Two others were rewritten from a pattern to a single dated instance. Each withdrawal took about twenty minutes to establish.**',
  '**Recommendation.** **I recommend that the form carry an instance-count column against every assessment, in capitals, from the 2028 cycle. This is a change to the form and not to anybody\'s habits, and it would have caught all three withdrawals before they were written rather than after.**',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '⚠ **a contrast with the old form, not a description of the new one**'],
  ['**2**', '⚠ **a count** — *three of eleven*, **and no mark for *several* or *a number of***'],
  ['**2**', '**a second measurable fact: the rewrites, or the twenty minutes**'],
  ['**2**', '⚠ **a recommendation that changes the FORM, with a date**'],
  ['**1**', '⚠ **and a clause saying what it would have caught**, **which is what makes it checkable'],
  ['**1**', '120 to 140 words, with the count written at the end'],
], [1, 5]));
out.push(p('⚠ **The count is the mark that decides this paper and candidates replace it with *several*.** ⚠ *Three of eleven* **is the whole report in three words**, **and a process report without a number is an opinion about a process** — **which is exactly what the unit says about a review without an instance.**'));
out.push(p('⚠ **And do not accept *that reviewers be more rigorous* as a recommendation.** ⚠ **It is 13.3\'s clause that obliges nobody**, **and the examination rewards the checkable version for precisely the reason the unit does: somebody can do it, on a date, and anybody can see whether they have.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A description of the new form where a contrast was asked for.** ⚠ *Several* **or *a number of* in place of a count.** ⚠ **A recommendation addressed to people\'s habits.** ⚠ **A missing date on the recommendation.** ⚠ **And a word count outside 120 to 140.**'));
out.push(stage('7', 'Write freely'));
out.push(p('⚠ **Mark the two questions and the softening.** ⚠ **The commonest honest answer is the second sample\'s: the document that got softened was the one about the firm\'s own conduct rather than the one about the person** — **which is the opposite of the story\'s and is worth saying so, because it shows the fault is about who is embarrassed rather than about who is junior.**'));
out.push(pb());
out.push(stage('✓', 'Marking the unit check', 15));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'c', 'a', 'b', 'c', 'a', 'b', 'a', 'c']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one each. ⚠ **three of eleven, all withdrawn because she looked for the instances and there were none, at twenty minutes each (1) · both said she was an asset to the counter and neither mentioned the tally, which the February decision was taken on (1) · not to reconcile the review with the April minute but to say that they are not supposed to reconcile, because a reader in a year would decide somebody was wrong (1) · he nearly asked her to take out the sentence about section 5** — ⚠ **not to protect the April decision but to protect himself from having to sign the third paragraph, and he did not ask because she brought him the softened draft instead of filing it (2) · the escalation standard, which is in no document and which she has now written (1).**',
  '**C  Reading — 5 marks:** ⚠ **it was withdrawn (1)** · **underneath it was one telephone call in 2026 the writer was not party to (2)** · ⚠ **that nobody had ever told Lina the standard is two days, and it is in no document, so the assessment was partly of a standard the firm never issued (2).**',
  '**D  Writing — 6 marks:** **the work version, with a document (1)** · **and a date (1)** · ⚠ **the instance count (2)** · ⚠ **a remedy that could begin on Monday (2)** — **and no mark for a remedy that needs training.**',
  '**Total 25.** ⚠ **The profile to expect: A high, B split, C high, D split.** ⚠ **B loses the fourth gap, which is worth two marks and asks for Mr Sayegh\'s reason rather than his action** — **candidates write *he nearly asked her to cut it* and omit *to protect himself from signing the third paragraph*, which is the whole point of the admission.** ⚠ **And D loses the Monday mark in about half of papers**, **where the remedy is a disposition rather than an instruction** — **the same fault as Unit 20\'s fourth part, reproduced under examination conditions two units later.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five faults to watch. First, the sentence that describes a person. Give the test in the first ten minutes — does this describe a document, a conversation or a decision, or a person — and make the diagnostic practical: what do they do with that on Monday morning? Then insist on the counter-intuitive half, because learners will not believe it unaided: the work version is more damning, not less, because an opinion can be dismissed and a page with a date cannot. Ask which of the two survives the person disagreeing with it; they always get it right and the conclusion follows. Second, the pattern word over a single instance. Give the forbidden list — sometimes, tends to, often, has a habit of — and make them count before choosing. Expect would have said to appear the moment dates are demanded, and expect about a third of assessments to shrink or vanish. Teach the distinction B draws: an impression of a pattern is evidence about the observer and may be said in a conversation, but it cannot go in a document, because a document is read later by somebody who cannot ask. And where an assessment is withdrawn, make them write down what was underneath it, because it is usually one loud afternoon with witnesses, three years ago. Third, the vague strength. This is the half nobody writes properly and the reason is that praise feels safe. The question that lands is whether the person knows which of the things they do is the valuable one; learners say no and then volunteer that the person would guess wrong, which is the whole case. Insist on a figure, or a consequence where no figure exists, and never a description. And teach the risk rather than avoiding it: once somebody knows a thing is valuable they may ask to be paid for it or ask who does it when they are gone, and both are questions the firm should be asked. Fourth, the repeated criticism and the remedy that starts in three months. The three-stage decay is worth memorising — correction, reminder, grievance — and the diagnosis is always the same: the earlier attempts had no count, no instruction and no date, so they were preferences, and a reasonable person agrees with a preference and does nothing. Draw the remedy from the person's own better work; the arithmetic of a September course against a Friday stock count settles it without argument. And insist on the omissions list with at least one item the reviewer has identified as their own taste, because the test for a taste is a question rather than an instinct: what does it cost anybody that they do not do it? Fifth, the graded work the reviewer could not do. The objection is always that the admission undermines the reviewer, and the answer is that the person already knows, so the admission does not create the weakness, it stops it being a secret. The three remaining assessables are outcomes, timeliness, and what the person does when they do not know something — and the third is the most revealing and the least used. Get the technical part assessed by somebody competent, choose the samples yourself at random, say so, and quote them initialled. Two notes on 22.7. Teach learners to recognise the one warning they get, which is noticing that a later draft is smaller, and teach the response as procedural: take it to somebody rather than file it. In the story that is the only reason the cut was never demanded. And run the practice on a pay example rather than an appointment, because every class has one — two true sentences removed so that a review does not embarrass a decision about money — and the resolution is identical. Finally, make sure the class sees where the cost falls. The third paragraph is signed by the person who took the decision, not the person who wrote the document, and that is why this is a mediation and not a procedure."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 22 · Answer Key');
module.exports = out;
