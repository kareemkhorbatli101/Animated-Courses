// Proactive English B2 · Syria Edition · Book 2 · Unit 14 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 14  Negotiating a Difference of Interest — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **Chase the thing the class has to bring, because this unit cannot be taught without it.** **One live disagreement at work in which both sides are behaving reasonably.** **Not a grievance.** A class that arrives with grievances will spend seven cycles establishing that somebody is in the wrong, **which is the one situation this unit does not cover.**',
  '**And expect about half of what they bring to be a misunderstanding.** ⚠ **That is not a failure of the instruction: it is the first finding of 14.1**, and a student who discovers in the first twenty minutes that four months of argument was a misdiagnosis has had the most useful lesson in the unit. **Let it happen and do not rescue anybody from it.**',
  '**One sentence belongs on the board from 14.1 and stays up for seven cycles.** ⚠ **_Information given to somebody who already has it is not neutral; it reads as an accusation that they have not been listening._** **That is why four months of better explanations make a position worse, and why the person doing it is being scrupulous the whole time.**',
  '**14.4 is unlike anything else in this course and the instruction must be kept.** ⚠ **The page is written, not shown, not collected, not read aloud, and not marked.** **An alternative somebody else has read is not an alternative; it is a negotiating position.** **What is assessed in 14.4 is the page _about_ the page**, and Stage 5 models exactly that distinction.',
  '**14.7 carries the examination papers.** **Reading and Use of English Part 7** is multiple matching, **Writing Part 2** is a report — **the shape of 6.6, with one change: the reader is one of two parties and not a neutral committee** — and **Listening Part 2** is sentence completion.',
], C.lblue, C.navy));

// ===================== 14.1 =====================
out.push(pb());
out.push(h2('14.1  Two diagnoses'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Enforce the three sentences and the single question, and do not let the partner offer advice.** The third sentence — _why I think they want it_ — **is the one students cannot do**, and the difficulty is the diagnosis arriving: **a person who cannot say why the other side wants what it wants has not got an interest, only a position.**'));
out.push(A('**b** Differences of interest: **2** and **4**. Misunderstandings: **1**, **3** and **5**. ⚠ **4 is the one to dwell on** — _we want the exclusion written down and they want the page short_ — **because both of those are good reasons and neither side is being careless.** **That is the shape of every disagreement this unit is about.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** — **a misunderstanding and a difference of interest** — and the room reaches for **misunderstanding**, because it is the comfortable one.'));
out.push(A('**b** **1** ⚠ **Four months explaining the second pass** — **four months of better and better explanations of a thing they understood perfectly well from the first week.**   **2** ⚠ **A misunderstanding is treated with information and a difference of interest is treated with a trade**, and information given to somebody who already has it **reads as an accusation that they have not been listening.**'));
out.push(NOTE('⚠ **The sentence that carries this unit is Mr Tahhan\'s and it should be written on the board in his words, not in a paraphrase: _if it is a misunderstanding, then I am right and they will see it; if it is a difference of interest, then they are not wrong and I have to give something up._** **That is why the room reaches for the comfortable diagnosis**, and it is not a failure of intelligence. **Every person in the room has done it** and most of them are doing it now about something — **which is why the class brings a live disagreement rather than a finished one.** ⚠ **Ask who has changed their diagnosis by the end of the cycle and count the hands.**'));
out.push(NOTE('**The one-word test is the most portable thing in the cycle and it is easy to miss.** ⚠ **When a student answers _yes, if they really understood_, the word _really_ is the diagnosis.** **It means they understand and do not agree**, which is the other diagnosis wearing the first one\'s coat. **Make them cross the word out and read the sentence again**: _yes, if they understood_ **is a claim about information**, and the student will usually withdraw it unprompted within four seconds. ⚠ **Do this once, in front of everybody, with a volunteer** — it is worth more than the Language box.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a clear difference of interest)_ _They need the bulletin to print on the twelfth; I need factual corrections up to the eleventh. **Both of those are true and both of us know it.**_',
  '**2** _(a clear misunderstanding)_ _They have been sending notes to the 2023 address. **Nobody told them it was closed, and it goes away the moment somebody does.**_',
  '**3** _(both)_ _They have the September figure and not the December one — that part is information. **And they would refuse with the December figure too**, which is the other part and is the larger one._',
  '**4** _(where they say _if you really understood_)_ _"If you really understood what a second pass involves…" — **they do understand; their production manager worked in a press.** **The word is doing the work of a disagreement.**_',
  '**5** _(flat, nothing in front of it)_ _You need it in six days and we need two of those for the colour. Both of those are true._',
]));
out.push(A('⚠ Mark these on **the diagnosis and not on the English.** Item **3** is the one most classes need twice: **the misunderstanding is about a fifth of it and clearing it changes nothing**, which students find hard to accept because clearing it feels like progress. Item **5** should be said aloud by four people: ⚠ **the flat version is physically uncomfortable the first time**, and the room should be told that in advance so that nobody thinks they are doing it wrong.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** They want six days; a second pass takes two.',
  '**B** Would it go away if each of you knew everything the other knows?',
  '**A** No — they know about the pass and we know about their date.',
  '**B** Then it is **a difference of interest**, and it is negotiable.',
  '**A** _(the ⚠ row)_ They think the machine is faster, and they need it Tuesday.',
  '**B** **Both.** ⚠ **The speed is a misunderstanding and clears in one sentence. The Tuesday is an interest and does not.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The diagnosis for each of the ten, and for the four marked ⚠ which part is which. ⚠ **In every one of the four the misunderstanding is the smaller half**, and clearing it leaves the whole disagreement standing. **A pair that cleared the misunderstanding and declared the matter settled has done in five minutes what Mr Tahhan did in four months** — **say that to them in those words**, because it is the only time in the unit the comparison can be made without it sounding like a rebuke.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Three sentences:** I want factual corrections up to four o\'clock on the eleventh. They want all changes in by the ninth. I think they want the ninth because their printer charges for a second plate after four o\'clock on the eleventh._ ⚠ _**In writing:** would it go away if each of us knew everything the other knows? **No.** I know about the plate charge and they know about the corrections._',
  '**b** _**Partner\'s diagnosis from the three sentences alone:** difference of interest. **The word that told them:** _charges_ — **there is money on their side of it, so it is not information.**_ ⚠ _**Flat version:** "You are charged for a second plate after four on the eleventh and I cannot sign off a figure I know to be wrong. Both of those are true." **Words I wanted in front of it: nine.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel gave his disagreement in three sentences: they want the order out in six days, his works needs two of those days for a second pass on the colour, and he thinks they want six days because their own customer has a date. Asked whether it would go away if each of them knew everything the other knows, he said no — they already know about the second pass and he already knows about their date, so they both know everything and still want different things. Then it is a difference of interest and it is negotiable, and the room should notice what he had to do to get there, because it took him four months. He spent four months explaining the second pass: four months of better and better explanations of a thing they had understood perfectly well from the first week. Omar asked why anybody would do that for four months, and because it is the comfortable diagnosis — if it is a misunderstanding then he is right and they will see it, and if it is a difference of interest then they are not wrong and he has to give something up. The room reaches for misunderstanding because misunderstanding is the diagnosis in which nobody has to lose anything. Dima asked about the cost of getting it wrong, and four months in his case, which is not unusual: a misunderstanding is treated with information and a difference of interest is treated with a trade, and information given to somebody who already has it is not neutral — it reads as an accusation that they have not been listening. Rim said so the explaining made it worse, and it did, and he was being scrupulous the whole time, which is the expensive thing about this mistake: it is made by careful people, repeatedly, in good faith. Adnan asked whether the test is only the one question, and it is, and it has to be asked honestly — most people answer it with yes, if they really understood, and really is the word that gives it away, because it means they understand and do not agree. Jad asked what happens if it is both, and it often is, and then you clear the misunderstanding first and find out how much is left — in most cases the misunderstanding is about a fifth of it, and a person who clears the fifth and then stops has done the easy part and called it finished. And Mazen asked how you say this is a difference of interest without its sounding like a declaration of war: flat, and with nothing in front of it. The apology is what makes it a complaint, and the flat version opens a negotiation rather than a dispute.']));
out.push(A('Listener task: the partner\'s diagnosis and the word that told them. ⚠ **Collect the diagnoses and count them.** **In most classes between a third and a half of what was brought turns out to be a misunderstanding or mostly one**, and that fraction should go on the board — **it is the argument for the forty seconds, and it is about the room rather than about Mr Tahhan.** **Then collect the _words I wanted in front of it_ counts**, which run between six and fourteen: **the apology is not a style; it is the thing that turns a difference into a complaint.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _They just do not understand._ → **✓** ask the one question first.   **✗** _Yes, if they really understood._ → **✓** cross out _really_ and read it again.   **✗** Clearing the misunderstanding and stopping. → **✓** then find out how much is left.   **✗** A fourth explanation. → **✓** a diagnosis that has never been checked.   **✗** _I am afraid that unfortunately…_ → **✓** flat, with nothing in front of it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He believed he was **clearing a misunderstanding** — that they thought a second pass was a machine setting. ⚠ **What was true, and they had told him in June, is that they understood it from the first week**: their production manager had worked in a press. **What they have is a customer with a date they signed for before coming to him.**'));
out.push(A('**2** ⚠ _**You have not been listening.**_ **He sent that message four times in increasingly careful English**, and the replies got shorter each time — **which he read as impatience with the schedule and now reads as something else entirely.**'));
out.push(A('**3** He named both interests in one sentence and **offered a split delivery — half on the sixth and half on the eighth, at no extra charge for the second run.** **They took it in two days.** ⚠ **And he will not improve an explanation again**: **a second attempt is reasonable, a fourth is a diagnosis that has never been checked.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE MONTHS OF EXPLAINING** · N. Sabbagh · 8 November',
  '**Between August and October I sent the release committee three explanations of why a promise needs a field of its own.** ⚠ **Each one was clearer than the last and the answer did not change.**',
  '**What I believed I was doing.** Clearing a misunderstanding — **that they thought the free-text box was searchable.**',
  '**What was actually true, and the chairman said it in August.** ⚠ **They know it is not searchable.** **What they have is a release with eleven items in it and two developer-weeks**, and my field is the twelfth item. **That is not ignorance; it is arithmetic.**',
  '**So the explanations were not information.** ⚠ **An explanation sent to somebody who already understands says one thing: _you have not been listening._**',
  '**What the one question would have cost.** **About forty seconds**, in August.',
  '**What I did in the end.** Offered to write the field specification myself and to drop my request for the summary screen. ⚠ **It went into the February release.**',
  '**And the rule.** ⚠ **Two explanations, then ask the question.**',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**FOUR MONTHS OF EXPLAINING** · B. Tahhan · 6 November',
  '**Between June and October I sent the same client four explanations of why a second colour takes two days.** ⚠ **Each one was better than the last and every one of them made the position worse.**',
  '**What I believed I was doing.** Clearing a misunderstanding. I believed they thought a second pass was a machine setting, **and that once they saw the brush bench and the drying time they would agree.** **The fourth version had a diagram in it.**',
  '**What was actually true, and they told me in June.** ⚠ **They understood the second pass from the first week** — their production manager had worked in a press. **What they have is a customer with a date, and the date is not negotiable at their end because they signed for it before they came to us.**',
  '**So the four explanations were not information.** ⚠ **An explanation sent to somebody who already understands says one thing: _you have not been listening._** **I sent that four times, and the replies got shorter each time**, which I read as impatience and now read as something else.',
  '**What the one question would have cost in June.** **About forty seconds.**',
  '**And the thing I shall not do again.** ⚠ **I shall not improve an explanation.** **A second attempt is reasonable; a fourth is a diagnosis that has never been checked.**',
]));
out.push(A('**213 words, the explanations counted in the first line, the other interest stated as real, what the repetition communicated, and a rule small enough to keep.** ⚠ **The paragraph that earns the band is the third**, because it states the client\'s interest in a form the client would sign — **they signed for the date before they came to us** — **and a page that cannot do that has diagnosed nothing.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the other interest stated as a real one.** _"They signed for it before they came to us."_ ⚠ **That is their interest in a sentence they would put their name to**, and it is the test I shall use on my own.',
  '**One thing to keep, and why it works.** _"The fourth version had a diagram in it."_ **Eight words and it is the whole of the mistake** — the care is the evidence, not the excuse.',
  '**Ranking of the slip I was given.** **1** the other interest as real **2** what the repetition communicated **3** the count in the first line _(clear, but I had it already)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Count the words people wanted in front of the flat sentence.** Between six and fourteen is the usual range and almost nobody guesses their own correctly. **Say the two versions back to back**: _I am afraid that unfortunately we may have a bit of a problem here_ against _both of those are true_ — **and ask which one the other side would answer.** **Then Mr Tahhan\'s sentence**, which is the practical conclusion: **a fourth explanation is a diagnosis that has never been checked.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Their interest, in their words:** "We are charged for a second plate if anything changes after four o\'clock on the eleventh, and it has happened twice in three months."_',
  '⚠ _**Would they sign that sentence?** **Yes.** And my first attempt would not have been signed by anybody: I had written "they do not want to be bothered with late changes", **which is my account of their interest and not theirs.**_',
]));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  Want, trade, refuse'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **the timing is the exercise.** ⚠ **In about half the room the second sentence does not exist at all** — students go straight from what they want to what they will not give up, **which is the whole fault of the cycle arriving in the first six minutes.** **Write the three timings for two or three people on the board** and the pattern is visible before anything is explained.'));
out.push(A('**b** **2** and **4** name a trade or a limit. **1**, **3** and **5** name nothing. ⚠ **3 is the one to read out** — _we are quite flexible_ — **because every student in the room has said it and believes it to be a generous opening.** **It commits you to everything and offers nothing**, and it is 13.5\'s sentence in a different room.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **one or two items, written before the meeting** — and **a long list is not strength; it is a failure to decide.**'));
out.push(A('**b** **1** ⚠ **They traded nothing, because there was nothing left to trade with.** **She had made the whole thing non-negotiable and then wondered why nobody would negotiate**, and the meeting was over in twenty-two minutes.   **2** ⚠ **Delete it.** **_We are quite flexible_ names nothing, trades nothing and commits you to everything.**'));
out.push(NOTE('⚠ **The counter-intuitive finding of this cycle is the one students will resist all week: a long list of things you will not trade is not strength.** **Two items is a position. Six is a refusal to be in the room.** Mrs Shaaban\'s twenty-two minutes is the evidence and it should be given as a figure, not as a judgement — **their side read the six, said they would need to think about it, and left.** ⚠ **A negotiation needs two things that can move**, and a person who brings none has brought a wall and expects it to be treated as an opening position. **Her April meeting ran an hour and ten with two limits**, and the difference is not reasonableness: **it is that there were four things on the table that could move.**'));
out.push(NOTE('**The costing instruction has to be enforced word for word or it does nothing.** ⚠ **Write the consequence, not the feeling.** _It would not be right_ is a feeling; _we could not say what left the depot_ is a consequence. **Three of Mrs Shaaban\'s six had no consequence she could write down at all**, and those were preferences she had been calling limits for a month. ⚠ **A limit you cannot cost is a preference** — **and that is excellent news, because preferences are precisely what you have to trade with.** **Expect real discomfort at this stage**: students do not like discovering that most of what they were defending was taste, **and the discomfort is the cycle working.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about a date)_ _We want the sign-off on Tuesday. We can move the delivery to the eighth **in return for** it. **I am not able to trade the second pass.**_',
  '**2** _(about a figure)_ _We want nine of the eleven clauses back. We can accept the two under ten thousand staying out **in return for** the other nine. **I am not able to trade the exclusion.**_',
  '**3** _(about a document)_ _We want the handover sheet reconciled. We can do it quarterly instead of monthly **in return for** one named person at each site. **I am not able to trade the named person.**_',
  '**4** _(a refusal that is a preference, said so)_ _I had the file copy on the list. **I cannot say what happens without it. It is a preference and it goes on the trade list.**_',
  '**5** _(one sentence with _in return for_)_ _We can take the report monthly **in return for** the figures arriving on the first rather than the fourth._',
]));
out.push(A('⚠ Mark these on **the third sentence first**: if it is longer than the second, the student has a list rather than a limit. Item **4** is the one to collect from everybody — **make each student name one item they moved from the refusal list to the trade list**, out loud. **It is the only public admission in the unit** and it is worth the three minutes. Item **5** is a single-sentence test: ⚠ **a trade written across two sentences will be split in the room**, one half accepted and the other half left for a discussion that never happens.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the position)_ Six days; a second pass takes two.',
  '**B** We want two of the six days for the colour. We can split the run — half on the sixth and half on the eighth — **in return for** the sign-off on Tuesday. **I am not able to trade the second pass itself.**',
  '**A** _(the ⚠ row)_ Refuses: the colour check, the delivery date, the price, the paper, the proof.',
  '**B** ⚠ **Costed: the paper and the proof have no consequence I can name — preferences.** **The price and the date can move and are currency.** **The colour check is the limit, and the consequence is that we could not say the two halves match.** **One of five.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three sentences for each, and for the four marked ⚠ the costed list and what it came down to. ⚠ **In every one of the four, at least two items have no consequence that can be named.** **The reduced list is usually two and never more than three**, and the room should hear how much the speaker now has to trade with. **Ask the four speakers how the shorter list feels**: ⚠ **it feels weaker and it is stronger**, and saying that out loud in the lesson is the only way it survives into a real meeting.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Refusal list, costed.** **Factual corrections up to four on the eleventh** — consequence: we print a figure we know to be wrong. **Keep.** **My own byline on corrections** — consequence: none I can write. **Trade.** **The correction in the same position as the error** — consequence: none I can write. **Trade.** **A named contact at the printer** — consequence: notes go to an address. **Keep, but it is a trade in disguise and I shall ask for it rather than hold it.**_',
  '**b** _**Partner asked of each: what happens if you give this up?** **Two produced nothing in four seconds.** ⚠ **They would not accept "it would not be right" and I tried it twice.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim gave the three: she wants the refusal code on every slip, she will trade the weekly summary for a monthly one, and she will not trade the seal check at the gate. Three sentences and the third is seven words, which is right — and the room should know what the third one used to look like. Six items. She went into a meeting last year with six things she would not trade, and they traded nothing, because there was nothing left to trade with: she had made the whole thing non-negotiable and then wondered why nobody would negotiate. Which is the finding and it is counter-intuitive — a long list of things you will not trade is not strength, it is a failure to decide. Two items is a position; six is a refusal to be in the room. Dima asked how you get from six to two, and you ask of each one what actually happens if you give it up, and write the consequence and not the feeling: four of Rim\'s six had consequences she could live with and she had never written them down. Rim said three of them she could not name a consequence for at all, and then they were preferences dressed as limits, which is the commonest thing on these lists — a limit you cannot cost is a preference, and preferences are tradeable, which is excellent news because it is what you have to trade with. Bassel asked how you say the trade itself, and in return for, with both halves in one sentence: we can move the delivery to the eighth in return for the colour being signed off on Tuesday. One sentence, because two sentences invite them to accept the first half and discuss the second. Adnan said that happens constantly in his office, and it is the commonest way a concession is lost: you give the thing, and the thing you wanted for it becomes a separate conversation that never happens — so tie them in one sentence with in return for and the tie survives the meeting. Jad asked how you say no without its being a wall, and once, at the same volume as everything else, and with no adjectives. A refusal that is repeated gets louder each time whether you raise your voice or not, and an adjective in it invites the other side to test whether the adjective is true. And Mazen asked about the word flexible, which everybody uses, and the instruction is to delete it: we are quite flexible names nothing, trades nothing and commits you to everything.']));
out.push(A('Listener task: the one item the partner moved from the refusal list to the trade list. ⚠ **Collect them and read eight aloud.** **The pattern is almost always the same: the items that move are the ones about recognition** — a byline, a position on the page, being asked first — **and the items that stay are about the work.** **That observation belongs to the class and not to the teacher**, so ask for it rather than giving it: **what have the moved ones got in common?**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We are quite flexible._ → **✓** name the trade.   **✗** Six things you will not trade. → **✓** two, costed.   **✗** _It would not be right._ → **✓** a consequence, not a feeling.   **✗** A trade in two sentences. → **✓** one, with _in return for_.   **✗** _I absolutely cannot trade that._ → **✓** once, same volume, no adjective.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Their side read the six, said they would need to think about it, and the meeting was over in twenty-two minutes.** **She had left them nothing to offer her and nothing to ask for.**'));
out.push(A('**2** ⚠ **Three of the six had no consequence she could write down** — the file copy, the wording, the review date — **which made them preferences she had been calling limits for a month.** **Two had consequences she could live with** _(the gate count, the code)_ **and were real currency locked in a safe.** **One was a genuine limit.**'));
out.push(A('**3** _**Without the seal check we cannot say what left here.**_ ⚠ **Nine words**, and it was **one-sixth** of what she took into the room.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FIVE THINGS I WOULD NOT TRADE** · M. Hariri · 14 November',
  '**I went into the January meeting with five things I would not trade and came out with a review in March.** ⚠ **At the time I thought I had held my ground.**',
  '**The five.** The batch numbers on every return. The eleven-day replacement. The written note. The fault book staying mine. ⚠ **And an apology, which I added on the morning.**',
  '**What I believed about the list.** That it showed I was serious.',
  '**Nobody asked.** ⚠ **They offered a review in March and I had nothing to put against it**, because everything I had was marked _not for trade_. **The meeting was forty minutes and thirty of them were about the apology.**',
  '**What I found when I costed them.** ⚠ **Two had no consequence I could write**: the apology and the fault book staying mine. **Both were about being taken seriously and neither was about handsets.**',
  '**Two were currency:** the eleven days could be fourteen; the note could be monthly.',
  '**And one was a limit:** _without the batch numbers we cannot tell one batch from another, which is the whole case._ ⚠ **One of five.**',
]));
out.push(S('Stage 7 · Write freely (sample, 216 words)'));
out.push(SAMPLE([
  '**SIX THINGS I WOULD NOT TRADE** · R. Shaaban · 13 November · _for the file_',
  '**I went into the January meeting with six things I would not trade and I came out with nothing at all.** ⚠ **At the time I thought I had been firm.**',
  '**The six.** The seal check. The gate count. The wording of the refusal form. The three-character code. The file copy. ⚠ **And the review date, which I added in the car.**',
  '**What I believed about the list.** That it was a position. **A list of six things you will not give up looks, from the inside, exactly like a strong hand**, and I had a reason for every one.',
  '**Nobody asked.** ⚠ **They read the six, said they would need to think about it, and the meeting was over in twenty-two minutes.** **A negotiation needs two things that can move and I had brought none.**',
  '**What I found when I costed them, three weeks too late.** ⚠ **Three had no consequence I could write down** — the file copy, the wording, the review date. **Those were preferences and I had called them limits for a month.** **Two were real currency and I had locked them in a safe.**',
  '**And one was a genuine limit:** _without the seal check we cannot say what left here._ ⚠ **One of six.**',
  '**What I would do differently.** **Cost every item at a table, in writing, with the consequence beside it.** ⚠ **Anything with no consequence goes on the trade list, and you will not want to move it** — **which is exactly how you know.**',
]));
out.push(A('**216 words, the arithmetic first, the other side in minutes, the list sorted into three kinds, and the practice with its cost.** ⚠ **The sentence that earns the band is the one defending her past self:** _a list of six looks, from the inside, exactly like a strong hand._ **Without it the note is a person being clever about themselves a year later**, and nobody who is currently holding six things would read past the first paragraph.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the list sorted into three kinds.** _"Three had no consequence I could write down… two were real currency… one was a genuine limit."_ ⚠ **All three named and counted.** **I had sorted mine into two kinds and lost the distinction that matters.**',
  '**One thing to keep, and why it works.** _"And the review date, which I added in the car."_ **It is the only funny line in the note and it is also the evidence**: an item added in a car has never been costed.',
  '**Ranking of the slip I was given.** **1** the other side in minutes **2** the limit with its consequence **3** the arithmetic in the first line.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Read the long list and then the short one, and put the question to the room as a choice: which of these two would you rather negotiate against?** **The answer is always the shorter one** and it is always a surprise to its owner. **Say why in one sentence** — **because the short one tells you where the other four went and what they are worth** — **then Mrs Shaaban\'s line:** **I had left them nothing to offer me and nothing to ask for.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Costed list.** 1 Factual corrections before print — **we print a figure we know to be wrong.** 2 A named contact — **notes go to an address.** 3 My byline — **none.** 4 Correction in the same position — **none.** 5 Two days\' notice of a layout change — **none I can write.**_',
  '⚠ _**Three of five have none.** **And the two that survive, in order: the factual correction first.** If I am asked in a long meeting to give up one of the two, **it is the named contact**, and I have decided that now rather than at minute forty._',
]));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  The offer at range'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second question is the one that teaches: which of the three would they actually answer?** **Almost nobody answers the flat one** — there is nothing to answer — **and almost everybody answers the exploratory**, which is precisely the danger the cycle is about. **The form that invites a reply is the form that commits you least**, and that asymmetry is the whole of 14.3.'));
out.push(A('**b** Commit you to something: **2**, **3** and **5**. ⚠ **1** commits you to nothing — **it is a question** — **and 4** commits you to nothing while sounding as though it does: _we might be able to look at the date_ **is four hedges in nine words.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **three different amounts of commitment, chosen on purpose** — and the misused one is **_were we to_**, which is **for finding out and not for offering.**'));
out.push(A('**b** **1** ⚠ **They said yes, and then they had a second engineer and he had not agreed to give them one.** **He used an exploratory form as an offer** — or rather used it correctly and did nothing to stop it being read as an offer, **which is the same thing at the other end.**   **2** ⚠ **_Subject to_ is a real commitment with a named condition**, and **the condition must be checkable by a third person.** **_Subject to our requirements_ is not a commitment at all.**'));
out.push(NOTE('⚠ **The third-person test is the transferable thing in this cycle and it settles more than the examination.** **Could somebody outside both of us check whether the condition was met?** **A date can. A signature can. A document with a date on it can. _Our requirements_, _an acceptable standard_, _management agreement_ and _if it suits both parties_ cannot** — **and each of those reserves the right to decide afterwards whether you meant it.** Mr Barghouti\'s figure is worth repeating because it is from inside a directorate: ⚠ **about a third of what crosses his desk carries a condition of that kind**, which means about a third of it commits nobody to anything.'));
out.push(A('**The repair is almost always one noun and it makes the sentence duller.** ⚠ _Subject to our requirements_ → _subject to the specification of 3 November._ _Provided the work is of an acceptable standard_ → _provided the two samples match the signed proof._ **Name a document, a date or a person** — **and never repair it with _reasonable_**, which puts two uncheckable words where there was one. **Students will reach for _reasonable_ about half the time** and the correction is quick: **ask who decides what is reasonable, and the answer is whoever is holding the money.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(finding out)_ _**Were we to** split the run, would the sign-off come forward to Tuesday?_ ⚠ **Commits me to nothing. Buys a figure.**',
  '**2** _(a commitment with a checkable condition)_ _We can split the run **subject to** the sign-off being received by four o\'clock on Tuesday._',
  '**3** _(the same, condition first)_ _**Provided that** the sign-off is in by four on Tuesday, the run is split._',
  '**4** _(an exploratory used as an offer, and the defence)_ _"Were we to put a second engineer on…"_ → _**Are you offering that, or asking what would follow?**_',
  '**5** _(an uncheckable condition and the repair)_ _Subject to our normal requirements_ → ⚠ _**subject to the specification issued on 3 November.**_',
]));
out.push(A('⚠ Mark these on **what each one commits the speaker to**, and make the student say it out loud: _this commits me to nothing_ / _this commits me to splitting the run._ **Item 4 is the defence and it must be practised flat**, because students deliver it with an edge and then conclude that it causes offence. ⚠ **It does not: it is a question about a sentence and not about a person**, and Mr Darwish has been asked it back twice, both times correctly.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the move)_ The delivery moves to the eighth.',
  '**B** _**Were we to** move the delivery to the eighth, would the colour be signed off on Tuesday?_ **Distance:** exploratory. **Commits me to:** nothing.',
  '**A** _(the ⚠ row)_ "…subject to our normal requirements."',
  '**B** ⚠ **Fails the third-person test.** **Repair:** _subject to the specification issued on 3 November._ **Distance:** conditional. **Commits me to:** the move, if that document is met.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The distance chosen for each and what it commits to. ⚠ **The four rows marked ⚠ all fail the third-person test** — _normal requirements_, _acceptable standard_, _management agreement_, _suits both parties_ — **and each repair must name a date, a person or a document.** **A pair that repaired by adding _reasonable_ has made it worse**, because two words are now uncheckable instead of one. **Ask that pair who decides.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Flat:** the correction deadline moves to four on the eleventh. **Conditional:** it moves, **subject to** all non-factual changes being in by the ninth. **Exploratory:** **were we to** put all non-factual changes in by the ninth, would four on the eleventh be possible for factual ones?_ ⚠ _**On Monday I use the conditional.** The exploratory is for the thing I have not decided about, and I have decided about this._',
  '**b** _**Partner read my exploratory back as an offer and accepted it.** **My defence:** "are you offering that, or asking what would follow?"_ ⚠ _**It came out with an edge the first time and I had to say it twice.** **The second time it was fine and nobody minded.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar said in September: were we to put a second engineer on the Homs site, would you accept the weekly visit instead of twice weekly? They said yes — and then they had a second engineer and he had not agreed to give them one. What went wrong is not the grammar: he used an exploratory form as an offer. Were we to asks what would follow and it does not say he will do it, and they heard an offer because people hear offers. Which is the whole cycle: were we to is for finding out what a move is worth before you make it, and the moment the answer comes back you have information and you have not spent anything, and that is the only thing it is for. Dima said the other side does the same to you, constantly, and the defence is one sentence — are you offering that, or asking what would follow? Said flatly, with no edge in it, because it is not a trap and should not sound like one: half the time they have not noticed either. Rim asked about subject to, which is a real commitment with a named condition, and the condition must be checkable by a third person: subject to the sign-off on Tuesday is a commitment, and subject to our requirements is not a commitment at all, because it reserves the right to decide afterwards whether you meant it. Adnan said that phrase is in about a third of what crosses his desk, and then a third of what crosses his desk commits nobody to anything — and the test is the third person: could somebody outside both of us check whether the condition was met? A date can be checked, a signature can be checked, our requirements cannot. And Bassel asked about provided that, which carries the same commitment with the condition first: provided the sign-off comes forward, the date moves. Use it when you want the other side to hear the condition before they hear the gift, which is most of the time. Jad asked whether the order is really worth anything, and it is worth about one round — a reader who hears the gift first begins negotiating the condition, and a reader who hears the condition first begins deciding whether to meet it. Same sentence, two different conversations. And Mazen said were we to sounds very formal out loud, which it is, and it should be said without apology or retreat: the fault is not the formality but the fade. Were we to move the date, but obviously only if — say the conditional whole, stop at the question mark, and wait, because a conditional that trails off has become a request for permission to have asked.']));
out.push(A('Listener task: the partner\'s three versions and the one they would use on Monday. ⚠ **Count the Mondays.** **Most of the room chooses the conditional and they are right** — the exploratory is for an undecided move and the flat form is for a decided one with nothing wanted in return. **The students who choose the exploratory for a decided move are the ones to talk to**: ⚠ **they are using it to avoid committing to a thing they have already committed to**, which is the mechanism behind Mr Darwish\'s four hundred thousand a month.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Were we to…_ as an offer. → **✓** add the nine words, or use the conditional.   **✗** _Subject to our requirements._ → **✓** a document, a date or a person.   **✗** Repairing with _reasonable_. → **✓** two uncheckable words instead of one.   **✗** The conditional trailing off. → **✓** stop at the question mark and wait.   **✗** Taking offence at the defence question. → **✓** it is about a sentence, not a person.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He was **finding out what the move was worth.** ⚠ **He had not decided to make it and he had no authority to.**'));
out.push(A('**2** _**I am asking what this would be worth, not offering it.**_ ⚠ **Nine words at the end of the question, and the whole thing would have been information.**'));
out.push(A('**3** ⚠ **That he could not take it back without becoming the person who withdraws things** — **and in a relationship of five years he would rather pay the four hundred thousand.** **The defence he now uses about once a fortnight:** _are you offering that, or asking what would follow?_ **Four times in five the answer is _asking_ and they are grateful somebody said it.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SECOND SITE I DID NOT OFFER** · R. Shaaban · 21 November',
  '**In March I asked a question and in May we were checking seals at a second gate.** ⚠ **Nobody misled anybody.**',
  '**What I wrote.** _Were we to check seals at the Harasta gate as well, would the refusal rate come down enough to be worth it?_ ⚠ **I was asking for a figure.**',
  '**What came back.** _"Yes, that would help a great deal."_ **Eleven days later, a rota with my name on it.**',
  '**Where it went wrong.** ⚠ **It is not the grammar.** **A question with a cost already inside it reads as an offer**, and mine had a gate in it.',
  '**What the sentence needed.** _"I am asking what it would be worth, not proposing it."_ ⚠ **Ten words.**',
  '**What it cost.** **Four hours a week of a seal check nobody had budgeted for.** ⚠ **And the part that is worse: I now hesitate before asking anything exploratory**, which is a worse outcome than the four hours.',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**THE ENGINEER I DID NOT OFFER** · O. Darwish · 20 November',
  '**In September I asked a question and in October I was running a second engineer on the Homs site.** ⚠ **Nobody misled anybody. The sentence was mine and I wrote it carefully.**',
  '**What I wrote.** _Were we to put a second engineer on the Homs site, would you accept a weekly visit instead of twice weekly?_ ⚠ **I was finding out what the move was worth. I had not decided to make it and I had no authority to.**',
  '**What came back.** _"Yes, that would be acceptable."_ **Four days later, the revised visit schedule. Eight days later, a question about when he would start.**',
  '**Where it went wrong, and it is not the grammar.** ⚠ **I used the form correctly and did nothing to stop it being read as an offer**, which is the same thing at the other end. **People hear offers**, and a question about a hypothetical arrives in a working inbox as a proposal.',
  '**What the sentence needed.** _I am asking what this would be worth, not offering it._ ⚠ **Nine words.**',
  '**What it cost.** About four hundred thousand a month. ⚠ **And the part that is worse: I could not take it back without becoming the person who withdraws things** — **and in five years I would rather pay.**',
]));
out.push(A('**209 words, two dates in the first line, the sentence quoted and shown to be correct, the repair counted, and the cost that is not money.** ⚠ **The page works because the English was right.** **A reader who expects a grammar lesson gets a different one: the sentence was correct and was still the wrong instrument**, and that is a distinction most students have never been offered.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the cost that is not money.** _"I could not take it back without becoming the person who withdraws things."_ ⚠ **That is the real figure and it is the one I left out of mine.** I wrote the hours and stopped.',
  '**One thing to keep, and why it works.** _"People hear offers."_ **Three words, and it explains the whole thing without blaming anybody** — which the first sentence has already promised.',
  '**Ranking of the slip I was given.** **1** the cost that is not money **2** the repair counted **3** the two dates _(effective, and the easiest of the three to copy)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The fade is the whole of this performance.** Each student says the conditional whole and stops at the question mark while the room counts three. **Almost everybody has a fade and almost nobody can hear their own**, so have the room say the sentence back with the fade exaggerated — _…but obviously only if…_ — **which is the only way it becomes audible to its owner.** **Then Mr Darwish\'s sentence:** **a question about a hypothetical arrives in a working inbox as a proposal.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The last three things I agreed in writing.** **Conditions:** "subject to the February specification" — **checkable.** "provided the samples match the signed proof" — **checkable.** "subject to the usual arrangements" — ⚠ **not checkable, and it is mine.**_',
  '_**Repair:** "subject to the arrangements set out in the note of 4 October."_ ⚠ _**Four words longer and duller, and it is the only one of the three a stranger could enforce.** That is the trade: an agreement is clearer by exactly the amount that it is worse to read._',
]));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  The page nobody sees'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **nobody names their disagreement**, which keeps the question abstract enough to be answered honestly. ⚠ **In most pairs neither answer contains a figure.** **_It would be bad_ and _we really need this to work_ are the two commonest answers** and they are the same answer. **Make the second attempt mandatory and require a number in it.**'));
out.push(A('**b** Alternatives: **2** and **4**. Feelings: **1**, **3** and **5**. ⚠ **4 is the strongest of the two** — _they quoted nine per cent more in August_ — **because it has a figure and a date**, and an alternative with a date on it is one somebody has actually looked into.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **because in the room you will weigh it against the pressure you are under and not against the facts** — and **nobody reads it at all.**'));
out.push(A('**b** **1** ⚠ **It is not an alternative; it is a negotiating position** — **and from the moment it is read you will defend it instead of using it.**   **2** ⚠ **Then you have found that out at a table instead of in a corridor afterwards**, and the meeting becomes a short one. **It happens about once in six.**'));
out.push(NOTE('⚠ **The rule that nobody reads the page is not a rule about privacy and the key must say so, because the class will treat it as modesty and break it within a cycle.** **Mrs Khoury\'s formulation is the one to use: an alternative somebody else has read is not an alternative; it is a negotiating position.** **The page is an instrument and reading it turns it into an argument.** ⚠ **Mr Hariri\'s evidence is in his Stage 7 page and it is the part to read aloud**: he tried it with a colleague twice and **both pages came out different** — **with somebody in the room he wrote the alternative he would be willing to admit to**, which is a better alternative than he has got, **and a page that flatters you is worse than no page.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(the alternative is worse)_ _If we reach nothing: we print in one colour, lose about four hundred thousand and keep the client._',
  '**2** _(it is better)_ _If we reach nothing: the Aleppo printer, who quoted nine per cent more in August and can take the whole run in one pass._ ⚠ **This meeting may be short.**',
  '**3** _(there is none)_ _Alternative: **none.** No agreement costs about eleven days of my own time a quarter and four replacements in nine._',
  '**4** _(time rather than money)_ _If we reach nothing: I keep sending them back one at a time — about eleven days of my own time since March._',
  '**5** _(in the room, without the figure)_ _We have an alternative and we have costed it._',
]));
out.push(A('⚠ Mark only items **1–4** and mark them on **whether a figure is present**, not on whether the alternative is good. Item **3** is the hardest and the most useful: **_none_, written down, with the cost of no agreement beside it** — **it tells you exactly how far you can be pushed**, and knowing that before the room is better than discovering it at half past four. Item **5** is the public sentence and the only part of the cycle anybody else hears: ⚠ **eight words, and then nothing.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the situation)_ One client of nineteen years; one disputed order.',
  '**B** **If we reach nothing:** we print the order in one colour, lose about four hundred thousand on the run and keep the client. **Takes:** six days, as now.',
  '**B** _(in the room)_ We have an alternative and we have costed it.',
  '**A** _(the ⚠ row)_ One supplier of a part nobody else makes.',
  '**B** ⚠ **Alternative: none.** **No agreement costs about two days a month in workarounds and we carry it indefinitely.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each alternative with its figure, and the room version. ⚠ **The four rows marked ⚠ have no alternative at all**, and the honest answer is **_none_** with the cost of no agreement beside it. **An invented alternative is worse than none, because it will be believed by the only person it can hurt.** ⚠ **Watch for the invention in the second half of the stage**: it arrives as _well, we could always…_, and the test is whether anybody has ever priced the _always_.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(A('⚠ **Nothing is collected and nothing is read.** **Walk the room, check that pens are moving, and do not look at any page.** The only thing to enforce is the figure: **if a student is still writing sentences without a number in them at minute six, ask the question out loud to the room again** — _what happens if you reach no agreement at all?_ — **and let them answer it on paper.**'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked one question with nobody naming their disagreement: what happens if you reach no agreement at all? Mazen said it would be difficult, which is a feeling and is the answer the room gives — so he said it again with a figure in it: he would keep sending the handsets back one at a time, which has cost about eleven days of his own time since March, and the distributor would keep replacing four in nine. Eleven days and four in nine is an alternative, and he now knows something he did not know thirty seconds earlier: he can live without an agreement, which is the whole purpose of the page. Dima said it has to be written before, and before and at a table — because in the room you will value the alternative against the pressure you are under and not against the facts, and the pressure in the room is always higher than the pressure in the problem. Omar asked who reads it, and nobody: not your partner, not the class, not your teacher. Dima said that is not a rule about privacy but a rule about what the page is — an alternative somebody else has read is not an alternative but a negotiating position, and from the moment it is read you will defend it instead of using it. Rim asked what happens if the alternative is better than anything they will offer, and then you have found that out at a table instead of in a corridor afterwards, and the meeting becomes a short one: it happens about once in six and students never expect it. Bassel asked whether you tell them, and you do not tell them the figure — you may tell them that you have an alternative and have costed it, and that is usually enough, but a figure said out loud becomes something to beat by one unit. Adnan asked what to do if there genuinely is no alternative, and then write none, and write what no agreement actually costs — which is the most useful version of this page and the hardest to write, because it tells you how much you can be pushed, and knowing it is better than discovering it at half past four with everybody tired. And Jad asked whether the page changes what you say in the room, and it changes almost nothing you say and everything you hear: a person with a costed alternative listens to an offer as a comparison, and a person without one listens to it as a verdict. Same words from the other side, two different meetings.']));
out.push(A('Listener task: nothing is written about anybody\'s page. ⚠ **Collect only the public sentence.** **Read six aloud and listen for the number**: in a first run **about a third of the class says the figure without noticing**, usually in a subordinate clause — _we have an alternative and we have costed it, and it is not far off what you are offering._ **That clause is the figure in words**, and the room should hear why it is worse than saying the number outright: **it is the number, plus an invitation to beat it by one unit, plus deniability.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It would be difficult._ → **✓** a figure.   **✗** Writing it in the room. → **✓** before, at a table.   **✗** Showing it to a colleague. → **✓** nobody reads it.   **✗** Inventing one because _none_ is uncomfortable. → **✓** write _none_ and cost the no-agreement.   **✗** _…and it is not far off what you are offering._ → **✓** eight words, then nothing.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **He wrote _if we reach nothing, I shall_ and sat there.** **He had been in the argument five months and had never once asked himself what the failure case was** — **and the question is never asked because asking it feels like planning to lose.**'));
out.push(A('**2** ⚠ **He did not become braver.** **He did not ask for more and he did not threaten anything.** **What changed is what he heard**: their first offer — six in nine, reviewed quarterly — **arrived as a comparison rather than as a verdict**, and he could see in four seconds that it beat eleven days of his own time. **So he took it quickly**, which he would not have done in March.'));
out.push(A('**3** _**Alternative: none**_, **and then what no agreement costs.** ⚠ **It tells you exactly how far you can be pushed**, and he went into that meeting knowing it — **and would rather have known it than not.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT WRITING IT DOWN DID** · L. Sweidan · 28 November',
  '**I have written it once and I am not going to say what is on it.** ⚠ **This is about what the writing did.**',
  '**The first time I could not finish the sentence.** I wrote _if the scaffold is refused, I_ — **and stopped.** ⚠ **I had been asking for it since September and had never written down what I would do if the answer stayed no.**',
  '**What I eventually wrote.** Three sentences and two figures, and it took about half an hour, **nearly all of it the second figure.**',
  '**What changed.** ⚠ **Not my nerve.** **What changed is that their offer of a quarterly inspection arrived as a comparison** and I could see what it was worth against what I had written.',
  '**So I asked for one thing more and stopped**, which I would not have done in September, **because in September I had nothing to compare anything to except how strongly I felt.**',
  '**And the practice.** ⚠ **Half an hour, a shut door, before anything that matters** — **and nobody sees the paper, which is why it says eleven weeks and not _soon_.**',
]));
out.push(S('Stage 7 · Write freely (sample, 212 words)'));
out.push(SAMPLE([
  '**WHAT WRITING IT DOWN DID** · M. Hariri · 27 November',
  '**I have written the alternative twice now and I am not going to tell anybody what is on either sheet.** ⚠ **This is about what the writing did.**',
  '**The first time, in March, I could not finish the sentence.** I wrote _if we reach nothing, I shall_ — **and I sat there.** ⚠ **I had been in that argument for five months and had never once asked myself what the failure case was.** **The question is never asked because asking it feels like planning to lose.**',
  '**What I eventually wrote.** Three short sentences, two figures, **and it took forty minutes**, nearly all of which was the eleven days.',
  '**What changed, and it is not what I expected.** ⚠ **I did not become braver. I did not ask for more and I did not threaten anything.** **What changed is what I heard in the meeting**: their offer arrived **as a comparison rather than as a verdict.**',
  '**So I took it, and took it quickly**, which I would not have done in March — **because without the page there was nothing to compare it to except my own sense of what I deserved, which is not a figure and cannot be beaten.**',
  '**And the one thing I shall keep doing.** ⚠ **Forty minutes at a table with the door shut** — **and nobody sees the paper, which is the only reason it tells the truth.**',
]));
out.push(A('**212 words, the refusal to give the content in the first line, the difficulty of starting with its reason, what changed against what did not, and the practice with its duration.** ⚠ **The paragraph that earns the band is the fourth.** **Almost every student writes that the page made them stronger**; this one says the opposite and is more convincing for it — **what changed is what he heard, and that is a claim a reader can test against the rest of the page.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: what changed separated from what did not.** _"I did not become braver. I did not ask for more… What changed is what I heard."_ ⚠ **Both halves, and the second is the surprising one.** **Mine claimed confidence and I cannot evidence it.**',
  '**One thing to keep, and why it works.** _"My own sense of what I deserved, which is not a figure and cannot be beaten."_ **It says why a feeling is useless in a negotiation without calling anybody weak.**',
  '**Ranking of the slip I was given.** **1** what changed against what did not **2** the difficulty of starting **3** the duration _(true, and the easiest to add afterwards)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Only the public sentence is said.** **Eight words and then nothing**, and the room counts four seconds. **The thing to listen for is the helpful half-sentence** — _…and it is not far off what you are offering_ — **which about a third of a first run produces.** **Then Mr Hariri\'s line**, which is the whole justification for a page nobody marks: **nobody sees the paper, which is the only reason it tells the truth.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The page about the page, 180 words, written.**_',
  '⚠ _**And the alternative itself, separately: forty minutes, the door shut, a figure, dated 27 November.** **Not collected.**_',
  '_**Why the date is at the top:** so that I can read it again after the meeting and compare what I wrote with what I accepted. **That comparison can only be made once**, and it is the only way I shall find out whether my own page was honest._',
]));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  Closing, or saying that you are not'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second half is the one to protect the time for.** **Declining to close without declining the offer is much harder than closing**, and students will collapse it into a refusal of the offer itself within two attempts. **Stop them and make them separate the two**: _I am not saying no to this; I am saying I am not settling it today._'));
out.push(A('**b** Closes: **2** and **4**. Not closes: **1**, **3** and **5**. ⚠ **5 is the one every student has used** — _leave it with me_ — **and it should be named as the commonest non-close in working English.** It is an undertaking by one person to do an unspecified thing at an unspecified time, **and nobody can tell afterwards whether it happened.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **what is agreed and what happens next with a date** — and **_leave it with me_ is not a close.**'));
out.push(A('**b** **1** ⚠ **Everything decided in a corridor is decided twice**: once in the corridor, and again six weeks later when the two people discover they agreed to different things — **and it is always with somebody he likes.**   **2** ⚠ **Three things:** _I would rather not settle this today_, **one reason**, and **when you will, with a date.** **_I need to think about it_ with no date is a close by silence wearing a different coat.**'));
out.push(NOTE('⚠ **The sentence that transfers furthest in this unit is Mr Barghouti\'s and it is worth writing up: _everything decided in a corridor is decided twice._** It is not an argument for minutes and the key should say so, **because a class told to minute everything will do it for a fortnight and then stop.** **What is proposed is two sentences said out loud before anybody moves**, and sent the same day. ⚠ **Twenty seconds.** The resistance is real and it is named in the model: **it feels pedantic for about four seconds** — **and those are the only four seconds in the business that nobody pays for twice.**'));
out.push(NOTE('**The refusal to close is the harder half and it is where the cycle earns its place.** ⚠ **A person who does not want to close and says nothing has closed by silence — and silence closes on the other side\'s terms, because they will write the note.** Students believe that declining offends; **it offends far less than they expect**, and the key gives the reason: **what offends people is being pressed for a decision and then watching nothing happen.** ⚠ **A stated date is a courtesy, and the person who gives one is the person whose dates are believed next time.** **Make every student produce a dated refusal in Stage 3**, because it is the one move in the unit nobody will practise on their own.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a simple agreement)_ _So: monthly reports from the first of next month. I shall confirm that this afternoon and you let me know by Friday if that is wrong._',
  '**2** _(with a condition)_ _So: the run splits, subject to the sign-off by four on Tuesday. I shall put that in writing today._',
  '**3** _(a refusal to close, with a date)_ _I would rather not settle this today, because I have not seen the specification. May I come back to you on Monday?_',
  '**4** _(they said _leave it with me_)_ ⚠ _Of course — may I send you the two sentences as I understood them, so that we are working from the same note?_',
  '**5** _(flat, no rise)_ _So: the eighth, with the sign-off on Tuesday._ **Full stop, and wait.**',
]));
out.push(A('⚠ Mark items **1–3** on **the date**, which is the part that disappears. **A close without a date in the second sentence is a summary, not a close**, and about half of first attempts are summaries. Item **4** is the repair for somebody else\'s non-close and it has to be said warmly: ⚠ **it is not a correction and must not sound like one** — _so that we are working from the same note_ **puts the problem on the note rather than on the person.** Item **5** is the intonation and it should be performed by four students.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the end of the discussion)_ The eighth, with the sign-off on Tuesday.',
  '**B** So: the run splits, half on the sixth and half on the eighth, with the sign-off by four on Tuesday. I shall send that this afternoon and you confirm by Thursday.',
  '**A** _(the ⚠ row)_ "…and we can work out the detail later."',
  '**B** ⚠ **I would rather not settle this today, because _the detail_ is the two days and I do not know which way it goes. May I come back to you on Monday?**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each close in two sentences, or each refusal in three with its date. ⚠ **The four rows marked ⚠ cannot be closed honestly** — _the detail later_, _about what we said_, _check with my colleague_, _the usual arrangements_ — **and in each the missing thing has a name**, which B must supply. **A pair that closed one of them has produced an agreement with a hole in it.** ⚠ **Ask that pair what they would write in the note**, and the hole appears while they are writing it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Close:** "So: factual corrections to four o\'clock on the eleventh, everything else by the ninth. I shall write that today and you tell me by Friday if I have it wrong." **Thirty-one words.**_',
  '⚠ _**What I would actually have said last month:** "Right, well, I think that is about where we are, and I will drop you a line, and obviously if anything changes just shout." **Thirty-four words, no date, nothing agreed.**_',
  '**b** _**With a rise**, my partner reopened the deadline. **With a fall**, they said yes. ⚠ **Same sentence.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim gave the close in two sentences: the code on every slip from the first of the month and the gate count monthly, and she will put that in writing this afternoon and they confirm by Thursday. That is a close and it took eleven seconds — two things only, what is agreed and what happens next with a date, and no thanks, no summary of the discussion and no account of how hard it was. Omar said most of what he has agreed this year was closed with leave it with me, and leave it with me is not a close: it is an undertaking by one person to do an unspecified thing at an unspecified time, and nobody can tell afterwards whether it happened, so six weeks later there are two honest accounts of what was agreed and no way to settle between them. Adnan said everything decided in a corridor is decided twice — once in the corridor and once again six weeks later when the two people discover they agreed to different things, and he has that second conversation about four times a year, always with somebody he likes. Which is why the close is written down the same day by the person who closed it, and not by the other side: whoever writes the close decides what was agreed, and that is not a trick but simply the only version anybody will have. Dima asked about not wanting to close, which is the harder of the two, because a person who does not want to close and says nothing has closed by silence — and silence closes on the other side\'s terms, because they will write the note. Bassel asked what you say, and three things, of which the third is the one people leave out: I would rather not settle this today, one reason, and when you will, with a date. I need to think about it without a date is a close by silence wearing a different coat. Jad asked whether refusing to close offends people, and far less than students expect: what offends people is being pressed for a decision and then watching nothing happen, so a stated date is a courtesy, and the person who gives one is the person whose dates are believed next time. And Mazen said his closes always come out as questions, and the answer is to say it as a summary, with a falling tone, and not to look for agreement at the end of it. So: the eighth, with the sign-off on Tuesday. A close said with a rise invites the whole thing to be reopened, and about half of them are — and if they disagree, they will say so without being asked.']));
out.push(A('Listener task: the partner\'s close and the word count of the version they would actually have said. ⚠ **Put the two counts side by side on the board for four or five students.** **The real versions are usually about the same length and contain no date and no agreement** — **which is the finding and nobody has to be told it.** **Then run the rise and the fall as a demonstration with one volunteer and the whole room as the other side**: about half reopen on the rise and almost nobody on the fall.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Leave it with me._ → **✓** two sentences with a date.   **✗** _I think we are more or less agreed._ → **✓** say what is agreed.   **✗** _I need to think about it._ → **✓** and a date.   **✗** Letting them write the note. → **✓** whoever writes it decides what was agreed.   **✗** A close with a rise at the end. → **✓** a falling tone, and wait.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That refusals would go out **unsigned, with a copy to contracts**; that they would go out **signed**; that the copy was **optional**; and that they had agreed **to look at it again in the new year.** ⚠ **All four are things somebody said in that corridor**, and he attributes none of them.'));
out.push(A('**2** ⚠ **A corridor has no close in it.** **What they had instead was _right, good, we will sort that out_** — **four words that mean nothing and feel like a decision.**'));
out.push(A('**3** **Whoever is nearest the end of the conversation says the two sentences out loud before anybody moves, and sends them the same day.** ⚠ **About twenty seconds, and not minutes.** **The resistance: it will feel pedantic** — **for about four seconds, and they are the only four seconds nobody has to pay for twice.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**DECIDED TWICE** · O. Darwish · 10 December · _for the three of us_',
  '**On 3 October we agreed something standing by the lift and on 21 November we found we had agreed three different things.** ⚠ **Nobody was lying and nobody had changed their mind.**',
  '**What I believed we had agreed.** That faults at the two Homs sites would be logged centrally from November.',
  '**What the others believed.** That logging would start when the new address was working; **and that we were going to pilot it at one site first.** ⚠ **All three are things somebody said by that lift.**',
  '**Why three honest people came out with three agreements.** ⚠ **Nobody said the two sentences out loud.** **What we had was _"good, let us do that"_**, which is four words that feel like a decision.',
  '**The cost.** **Seven weeks of faults logged at one site and not at the other two**, and **about ninety entries** that cannot be compared with anything.',
  '**What I am proposing.** ⚠ **Two sentences before anybody moves, sent the same day.**',
  '**And the resistance.** ⚠ **It will feel officious by a lift.** **It felt officious for four seconds on 2 December and the note came back corrected within the hour**, which is the whole argument.',
]));
out.push(S('Stage 7 · Write freely (sample, 214 words)'));
out.push(SAMPLE([
  '**DECIDED TWICE** · A. Barghouti · 4 December · _circulated to the four of us who were in it_',
  '**On 16 October four of us agreed something in a corridor and on 28 November we discovered that we had agreed four different things.** ⚠ **Nobody was lying and nobody had changed their mind.**',
  '**What I believed we had agreed.** That refusals under the new wording would go out unsigned by the originating office, with a copy to contracts.',
  '**What the other three believed.** That they would go out signed; that the copy was optional; and that we had agreed to look at it again in the new year. ⚠ **All four of those are things somebody said in that corridor.**',
  '**Why four honest people came out with four agreements.** ⚠ **Because a corridor has no close in it.** **A close is two sentences and somebody has to say them out loud while everybody is still standing there.** **What we had instead was _right, good, we will sort that out_** — **four words that mean nothing and feel like a decision.**',
  '**The cost.** Six weeks of refusals in two different forms from two offices. ⚠ **Eleven have had to be reissued, and the eleven are the ones a member of the public is waiting on.**',
  '**What I am proposing.** ⚠ **Twenty seconds: whoever is nearest the end says the two sentences before anybody moves.**',
  '**And the resistance.** **It will feel pedantic for about four seconds** — **the only four seconds nobody has to pay for twice.**',
]));
out.push(A('**214 words, the arithmetic first, everybody protected, the versions unattributed, and the resistance named before anybody can raise it.** ⚠ **The paragraph that earns the band is the cost**, because it converts an internal inconvenience into eleven people waiting — **and the four colleagues this note is written for will act on eleven people and will not act on six weeks.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the versions set out and none attributed.** _"All four of those are things somebody said in that corridor."_ ⚠ **Nobody is named and the note survives being read by all four.** **Mine named two people and I have rewritten it.**',
  '**One thing to keep, and why it works.** _"Four words that mean nothing and feel like a decision."_ **It is the diagnosis in nine words**, and every reader will recognise their own version of those four words.',
  '**Ranking of the slip I was given.** **1** the cost in people waiting **2** nobody attributed **3** the resistance named first.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The rise and the fall, same words, and the room votes.** **About half reopen on the rise and almost nobody on the fall**, and the two versions differ by one syllable. **Then put the general rule to the room as a question rather than a statement**: _if you are not going to close, what have you done?_ — **and the answer comes back from the room: closed by silence, on the other side\'s terms.** **Finish on Mr Barghouti\'s line.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The last thing I agreed verbally:** the layout change, agreed on the telephone on 1 December._',
  '_**Its two sentences, sent late on 5 December:** "So: the new layout from the January issue, with the caption style unchanged. I shall send the sample on Thursday and you tell me by Monday if that is not what we said."_',
  '⚠ _**The reply:** "the caption style was going to change as well." **Which is the note doing its work six weeks early**, and it cost me one message._',
]));

// ===================== 14.6 =====================
out.push(pb());
out.push(h2('14.6  The two-page note'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **time it visibly.** ⚠ **It is almost always the interests section that runs long**, and the interests are the part the other side already knows. **Ninety seconds for all four**, and a student at two and a half minutes has written a background note rather than an instrument.'));
out.push(A('**b** **1** is missing the **alternative** _(he says he knows what he will do, which is not the same as having written it)_. **2** is missing the **trades**. **3** is missing the **interests**. **4** is missing the **limits**. **5** is complete. ⚠ **Item 1 is the one to discuss**: **knowing what you will do is not an alternative** — **the alternative is a figure on a sheet of paper, and a known one is a feeling.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **one side of paper you take in and look at twice** — and **the alternative goes on a separate sheet, because that one is not shown to anybody.**'));
out.push(A('**b** **1** ⚠ **The limits, and not the trades.** **When a meeting goes badly she starts giving things away in order to keep it pleasant, and the two lines under _limits_ are the only thing that stops her.**   **2** ⚠ **Trades before limits**, because a person who writes limits first writes too many of them. **Writing the trades first makes the limits compete for their place.**'));
out.push(NOTE('⚠ **The order is the teaching point and it is worth more than the four headings.** **Theirs first** — **a page that opens with your own interests is one you have written to persuade yourself, and you will read it in the meeting and feel justified.** **Trades before limits** — **and Mrs Shaaban\'s six-to-two is the evidence, from two cycles earlier, so point back to it.** ⚠ **And the alternative on a separate sheet in a different pocket, with the rule stated physically rather than morally**: **at some point you will turn your own note round to show somebody a figure**, and everybody in the room has done it. **Two sheets, two pockets, and the problem cannot arise.**'));
out.push(A('**Mrs Khoury\'s answer about reading it twice is the most useful thing in the cycle and students will not arrive at it alone.** ⚠ **The limits section is not written for the other side and not written for the argument. It is written for the version of you that is forty minutes into a difficult room and wants it to be over.** **That is why it carries consequences and not reasons**: a reason persuades the other side and a consequence stops you. ⚠ **Ask the room, at the end of the cycle, which section they would read if the meeting turned** — **and if anybody says _the trades_, ask what they would be looking for.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(theirs first)_ _They are charged for a second plate after four on the eleventh and it has happened twice in three months. **They are not trying to control the copy; they are trying not to pay twice.**_',
  '**2** _(trades before limits)_ _Trades: non-factual changes by the ninth in return for factual corrections to four on the eleventh; one consolidated list in return for one named person._',
  '**3** _(a limit with a consequence)_ _A factual error known before print is corrected before print. **Consequence if traded: we print a figure we know to be wrong and the correction appears a month later beside a different figure.**_',
  '**4** _(the alternative named, not read)_ _Alternative: on the other sheet._',
  '**5** _(a section missing)_ _Interests, trades, limits — **and nothing under _alternative_**, which means I have not thought about it._',
]));
out.push(A('⚠ Mark these on **the order and the consequence.** Item **1** is the sentence students leave out and it is the one that survives minute forty: **_they are not trying to X; they are trying to Y_** — **it stops you arguing against a motive they have not got.** Item **5** is the diagnostic: ⚠ **a heading with nothing under it is the honest outcome of a first attempt**, and the instruction is to write _I do not know_ under it rather than to leave it blank. **_I do not know_ is a question you will remember to ask; a blank is one you will not.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the note)_ Interests: ours only. Trades, limits, alternative all present.',
  '**B** **Missing: their interests** — **because a page that opens with my own is written to persuade me, not to work from.**',
  '**A** _(the ⚠ row)_ All four, but limits written before trades: seven limits.',
  '**B** ⚠ **All four headings and still wrong.** **Limits written first always run long** — **seven of them, and nothing left to trade with.** **Rewrite trades first and let the limits compete.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The fault in each of the ten. ⚠ **The four marked ⚠ have all four sections and are still wrong** — **limits before trades, the alternative on the same sheet, your own interests first, and a limit with no consequence beside it.** **Those four faults are invisible to a reader who is checking that the headings are present**, which is what most of the room will be doing. **Ask any pair that passed all four what they were checking for**, and the answer teaches the stage.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _One side, theirs first, trades numbered, one limit with its consequence, and **ALTERNATIVE: on the other sheet.**_',
  '**b** _**Read aloud in eighty-four seconds.** **Partner heard least under _limits_** — one line, and I had thought that was a strength. ⚠ **They were right: I had written the limit and not its consequence**, so there was nothing to hear._',
  '_**Interests section alone: twenty-six seconds.** **Under thirty, so it has not become the background.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel gave the four sections: interests, theirs first and then his; trades; limits; and the alternative, which is on a different sheet in a different pocket. Theirs first, and that is not politeness — a page that opens with your own interests is a page you have written to persuade yourself, and you will read it in the meeting and feel justified, whereas a page that opens with theirs is an instrument. Dima said she looks at hers twice, once before she goes in and once if it goes badly, and what she looks at the second time is the limits, not the trades: when a meeting goes badly she starts giving things away in order to keep it pleasant, and the two lines under limits are the only thing that stops her. Which is what the section is for, and it should be said plainly — the limits are not written for the other side and not written for the argument, but for the version of you that is forty minutes into a difficult room and wants it to be over. Omar asked whether the order matters beyond the first one, and it matters once: trades before limits, because a person who writes limits first writes too many of them, which the room saw in 14.2 with six items and nothing left to trade with. Writing the trades first makes the limits compete for their place, and Rim said hers went from six to two when she did it in that order. And the alternative on a separate sheet in a different pocket, not for secrecy but because a page you may put on the table and a page you may not should not be the same piece of paper. Adnan said he has done exactly that, turned his own note round to show somebody a figure, and everybody has, which is why the rule is physical rather than a matter of discipline: two sheets, two pockets, and the problem cannot arise. Jad asked how long the note should be, and one side — a note you cannot find a line in while somebody is talking to you is not a note but a document, and a document is something you read afterwards, which is too late. And Mazen asked about reading it back, which is done aloud, once, the night before, in order: the missing section is audible and invisible, because you will see four headings on the page and hear only three things, and the one you hear nothing under is the one you have not thought about.']));
out.push(A('Listener task: the heading the partner was heard least under. ⚠ **Collect them and count.** **In a first run it is the alternative about half the time and the limits about a third** — **and the limits cases are usually a limit written without its consequence**, which takes four seconds to say and therefore disappears. **Time the interests sections too**: over thirty seconds and the page has become a background note, **which is the single commonest fault in this cycle and the one students defend hardest.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Your own interests first. → **✓** theirs.   **✗** Limits before trades. → **✓** trades first, so the limits compete.   **✗** The alternative on the same sheet. → **✓** two sheets, two pockets.   **✗** A limit with a reason under it. → **✓** a consequence.   **✗** Two and a half sides. → **✓** one, findable while somebody is talking.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **They are not trying to control the copy; they are trying not to pay twice** — their printer charges for a second plate after four o\'clock on the eleventh, **and it has cost them twice in three months.**'));
out.push(A('**2** _**A factual error that is known before print is corrected before print.**_ ⚠ **Consequence if traded away: we print a figure we know to be wrong, and the correction appears a month later beside a different figure, which is how the two get confused.** **One line, and the only one.**'));
out.push(A('**3** ⚠ **That they are right about the two late changes and she should say so in the first two minutes rather than being brought to it** — **a concession made early is worth about twice one extracted at minute forty** — **and that the second trade is the one she actually wants**, because a named person is worth more than a deadline. **Both are there because she knows she will forget them.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**MEETING OF 16 DECEMBER · one side** · B. Tahhan · _alternative on the other sheet_',
  '**THEIR INTERESTS.** A delivery date signed for before they came to us, **with their own customer charging them for a late delivery — paid twice this year.** ⚠ **They are not indifferent to the colour; they are not free to move the date.**',
  '**OUR INTERESTS.** **Two days of the six for the second pass.** **Two reprints in four years**, the second costing about a month\'s margin.',
  '**TRADES.** **1** A split run — half on the sixth, half on the eighth — **in return for** the sign-off by four on Tuesday. **2** No charge for the second run **in return for** a two-year colour sign-off procedure we write and they accept.',
  '**LIMITS.** ⚠ **The second pass happens.** **Consequence if traded away: the two halves do not match, we reprint at our cost, and this is the third time in five years.**',
  '**And what I shall forget.** ⚠ **One: say in the first two minutes that their date is genuinely fixed.** **Two: the second trade is the one I want.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**MEETING OF 11 DECEMBER · one side** · D. Khoury · _alternative on the other sheet_',
  '**THEIR INTERESTS.** The bulletin goes to print on the twelfth and **their printer charges for a second plate after four o\'clock on the eleventh.** **Two late changes in three months, both of which cost them.** ⚠ **They are not trying to control the copy; they are trying not to pay twice.**',
  '**OUR INTERESTS.** **Corrections of fact.** **Nine of the eleven changes I have asked for in a year were factual** — a figure, a name, a date — **and the two that were not are the two they remember.**',
  '**TRADES.** **1** All non-factual changes **by the ninth**, **in return for** factual corrections up to four on the eleventh. **2** One consolidated list from me instead of three emails, **in return for** one named person at their end.',
  '**LIMITS.** ⚠ **A factual error known before print is corrected before print.** **Consequence if traded away: we print a figure we know to be wrong, and the correction appears a month later beside a different figure.**',
  '**ALTERNATIVE.** _On the other sheet._',
  '**And what I shall forget.** ⚠ **One: they are right about the two late changes and I should say so in the first two minutes.** **Two: the second trade is the one I actually want**, so I must not spend the goodwill on the first.',
]));
out.push(A('**207 words, one side, theirs first with what they are not after, two numbered trades each carrying _in return for_, one limit with its consequence, and the bottom two lines.** ⚠ **The line that earns the band is _they are not trying to control the copy_**, because it is the only sentence on the page that will still be working at minute forty — **it is there to stop its own author arguing against a motive the other side has not got.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: a consequence under the limit, not a reason.** _"We print a figure we know to be wrong, and the correction appears a month later beside a different figure."_ ⚠ **That is a consequence.** **Mine said _because accuracy matters_, which is a reason, and I can see now that it would not have stopped me.**',
  '**One thing to keep, and why it works.** _"The two that were not are the two they remember."_ **It concedes the other side\'s case inside her own interests section**, which is where it is least comfortable and most useful.',
  '**Ranking of the slip I was given.** **1** the consequence under the limit **2** theirs first with what they are not after **3** the numbered trades _(right, and the easiest to copy)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Time it and name the silent heading.** Ninety seconds for four headings; over that and the interests have become the background. **The heading nobody hears anything under is the one that has not been thought about** — **and the instruction is to write _I do not know_ under it rather than leave it blank.** **Then Mrs Khoury\'s sentence**, which is the reason the section exists: **the limits are written for the version of you that is forty minutes in and wants it to be over.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**One side, written for the meeting on the eleventh.** **Two sheets. Two pockets.**_',
  '_**Read aloud to nobody, in order, the night before.** ⚠ **Nothing came out under _alternative_**, so I have written **_I do not know what we do if they refuse the named person_** under it._',
  '_**Which is a question I shall now ask somebody before Thursday**, and it would not have occurred to me from looking at a blank._',
]));

// ===================== 14.7 =====================
out.push(pb());
out.push(h2('14.7  Review & Mediate: A negotiation in which both sides are right'));
out.push(S('Stage 1 · Get ready – Unit 14 quiz'));
out.push(A('**1** _in return **for** the sign-off…_   **2** _**Were** we to **move** the delivery…_   **3** _Provided that the sign-off **comes** forward…_   **4** _I am not able **to trade** the seal check._   **5** _The **negotiation** took four months…_   **6** _Her **reluctance** to name a consequence…_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **A mediator looks for a fact nobody has, not for a compromise.** **A compromise splits the difference between two positions; a missing fact can dissolve one of them altogether.** **And what the mediator must not do: propose the split.** ⚠ **Name what is divisible and stop** — **a mediator who proposes a settlement has become a third party with a position, and from that moment there are three interests in the room and only two of them are legitimate.**'));
out.push(NOTE('⚠ **This is the Book 2 mediation and it is not the Book 1 one, so say that to the class explicitly.** In Book 1 the two parties were right about different things and the mediator\'s work was to mark, count and show. **Here both parties are right about the same thing and neither can be shown anything they do not know.** **What is left is a fact nobody has.** ⚠ **The honest version must be given with it**: **looking for the missing fact is not a technique for winning.** **If the fact goes against you, you have lost an argument you were going to lose anyway — four months earlier**, which is still the better outcome and is the only promise this cycle can make.'));
out.push(A('**The divisible/indivisible sort is the practical instrument and it will be underrated.** ⚠ **The date is indivisible. The colour is indivisible. The run is divisible** — **and the two sides spent four months arguing about the two things that cannot be split.** That is not stupidity: **a position is always expressed in terms of the indivisible thing**, because that is what feels at stake. **The mediator\'s question is therefore mechanical and can be asked of any dispute: what here could be done half of?** ⚠ **Ask it in Stage 4 of every mediation for the rest of the book**, and in about two cases in three something answers.'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7; the Language box carries the three moves, the two warnings and the asking question. ⚠ **The asking question is the part to rehearse**, because the whole mediation fails on it: **ask the missing fact of the room and not of one side.** _Does anybody know what happens to the second half of the run?_ **Asked of one side it is a cross-examination. Asked of the room it is a gap, and a gap belongs to nobody.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**The works, as they would state it:** _two of the six days are the second pass; we have reprinted for colour twice in four years and the second one cost about a month\'s margin._',
  '**The client, as they would state it:** _we signed for the date before we came to you and our own customer charges us for a late delivery; we have paid that twice this year._',
  '⚠ **Both true, both known to the other side.**',
  '**The fact nobody has:** ⚠ **what the customer does with the second half of the run.** **If it goes into stock or to another shop, the halves are never seen together and the colour argument is about a risk that does not exist. If they are seen together, the works is right and the date must move.**',
  '**Indivisible:** the date, the colour. **Divisible:** ⚠ **the run.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The two interests, the missing fact and the divisible thing for each pair. ⚠ **Pair B is the one with a reason behind the reason**: _we have not the staff_ is true and is not why the depot is refusing — **it does not want its gate count read by the committee.** **An interest somebody will not state is still an interest**, and a mediator who takes the stated one at face value mediates the wrong disagreement. **The test is the same as 14.1\'s, asked of the other side\'s reason:** ⚠ **would it go away if the stated obstacle were removed?** **Staff could be found; the refusal would remain.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Their interest, in their words:** "We are charged for a second plate after four on the eleventh, and it has happened twice in three months."_',
  '_**The fact neither of us has:** ⚠ **how many of my eleven changes in a year would actually have triggered the plate charge.** **I have assumed all of them and I have never counted.**_',
  '_**Divisible:** the deadline, by kind of change. **Indivisible:** the print date, the plate charge._',
  '⚠ _**What would have to be true for one position to disappear:** if two or three of the eleven would have triggered it, their objection is to a cost they have paid twice in three years rather than twice in three months. **And I would rather know** — though I notice that I wrote that sentence slowly._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Two positions, both true, both known to the other side. Asked who should give way, Omar said neither, as far as he could see: both of them have a figure and both figures are real. So the mediation, which is three moves and they are not the Book 1 three: put the two interests side by side and check that each is stated as the other side would state it; find the thing neither side has asked about; and name what is actually divisible. Dima said the thing neither has asked about is that nobody has asked what the client\'s customer does with the second half of the run — if the second half goes to a different shop or into stock, then the two halves are never seen together, and the entire colour argument is about a risk that does not exist. And if they are seen together, then the works is right and the date has to move; but nobody knows which it is, and they have been arguing for four months about a question neither of them has asked. Which is the finding of this cycle: when both sides are right, the thing to look for is not a compromise but a fact nobody has — a compromise splits the difference between two positions, and a missing fact can dissolve one of them. Bassel asked what happens if the fact goes against you, and then you have lost an argument you were going to lose anyway, four months earlier, which is the honest version: looking for the missing fact is not a technique for winning but a technique for finding out. Rim asked what is actually divisible, and the run — not the date and not the colour, both of which are indivisible, which is exactly why they have been arguing about them. The run can be split — half on the sixth and half on the eighth — and a mediator who names the divisible thing has done the whole job. Adnan asked what a mediator must not do, and the answer is: propose the split. Name what is divisible and stop, because a mediator who proposes a settlement has become a third party with a position, and from that moment there are three interests in the room and only two of them are legitimate. Jad said that is a fine line, and it is, and it is audible: the run is divisible and the date is not is a mediation, and so why not do half on the sixth and half on the eighth is a proposal — and the moment it is said both sides begin negotiating with you instead of with each other.']));
out.push(A('Listener task: the fact neither side has, and whether the student would rather know it. ⚠ **The second half of that question is the one to collect.** **Read six aloud.** **Two or three students in any class will have written something like _I would rather know, though I notice I wrote that slowly_** — **and that honesty is the best thing produced in the unit**, because the technique only works for somebody who means it. **A student who would not rather know has learned something more useful than the technique**, and should be told so.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Looking for a compromise. → **✓** look for a fact nobody has.   **✗** Asking the missing fact of one side. → **✓** ask it of the room.   **✗** Proposing the split. → **✓** name what is divisible and stop.   **✗** Stating one side better than the other. → **✓** count the words in both.   **✗** Taking the stated reason at face value. → **✓** would it go away if that obstacle were removed?'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 7)'));
out.push(A('**1 C   2 A   3 B   4 D   5 C   6 B**'));
out.push(A('⚠ **Part 7 is answered by matching the _question_ to the text and not the text to the question**, and all four accounts here are about the same subject, which is what makes it hard. **Item 1 is the one to work through**: **C is the only writer who says the English was right** — _the sentence was mine and it was correct English_ — **and A, who sent four letters, is the account students reach for because the word _explanations_ is in it.** ⚠ **Item 4** asks for a cost falling on people **outside the organisation**, which is **D** and the eleven members of the public; **C\'s four hundred thousand and B\'s twenty-two minutes are both internal.** **Teach the underline-the-question habit**: the one word that decides item 4 is _outside_.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO POSITIONS, BOTH REASONABLE** · 12 December',
  '**The first side, in their words.** _"We are charged for a second plate for anything that changes after four on the eleventh, and it has happened twice in three months."_',
  '**The second side, in their words.** _"I cannot sign off a figure I know to be wrong, and nine of my eleven changes in a year were factual."_',
  '⚠ **Both statements are true and both sides have said so to each other.**',
  '**The fact neither side has.** ⚠ **How many of the eleven changes would have triggered the plate charge.** **If it is two or three, the objection is to something that has happened twice in three years; if it is nine, the printer is right.**',
  '**What is indivisible.** The print date **and** the plate charge.',
  '**What is divisible.** ⚠ **The deadline, by kind of change.**',
  '**And what I am not doing.** ⚠ **Proposing the split.** **I have said which thing can be cut in half and I have stopped.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 2: a report, sample 211 words)'));
out.push(SAMPLE([
  '**REPORT: THE COLOUR AND THE DELIVERY DATE**',
  '**What each side needs.** The client signed for a delivery date **before** coming to us and is charged by its own customer for a late delivery; it has paid that **twice this year.** We need **two of the six days** for a second pass on the colour: we have reprinted for colour **twice in four years**, the second time at about a month\'s margin. ⚠ **Neither of those is a negotiating position. Both are documented and each side has known the other\'s since June.**',
  '**The fact nobody has.** ⚠ **We have never asked what the client\'s customer does with the second half of the run.** **If it goes into stock or to a different outlet, the two halves are never seen together and the colour risk does not arise.** **If they are displayed together, the risk is ours and the date has to move.** **One telephone call settles it.**',
  '**What can be divided.** **Not the date and not the colour** — both are all-or-nothing, **which is why four months of letters have been about them.** ⚠ **The run can be split: half on the sixth, half on the eighth.**',
  '**Recommendation.** **Ask the question first and propose nothing until it is answered.** ⚠ **If the halves are not seen together, we withdraw the colour objection in writing.** **If they are, we offer the split run at no extra charge for the second pass.**',
]));
out.push(A('**211 words, headings throughout, all four requirements, and no sentence that would embarrass the writer if the other side read it.** ⚠ **The sentence that earns the band is _if the halves are not seen together, we withdraw the colour objection in writing_** — **it names the condition under which the writer loses**, which is 9.1 arriving inside a report, **and it is what makes the rest of the recommendation credible to a reader who has heard the colour argument four times.**'));
out.push(S('Stage ✓ · Unit 14 check'));
out.push(A('**A** **1** b _(in)_   **2** c _(Were)_   **3** b _(comes)_   **4** a _(to trade)_   **5** c _(negotiation)_   **6** b _(reluctance)_   **7** a _(up)_   **8** a _(willing)_'));
out.push(A('⚠ **Item 3 is the one that separates a class**: **_provided that_ takes a present tense for a future meaning**, and about a third of any room writes _will come_. **Teach it with the other conditional conjunctions in one line** — _provided that_, _as long as_, _on condition that_, _subject to_ — **all of them present, all of them future in meaning.** **And item 7** is the phrasal verb: _come up against_, **which is in this unit\'s declared set and is tested here for that reason.**'));
out.push(A('**B  Listening** **1** two   **2** twice   **3** a month\'s margin   **4** the second half   **5** the run   **6** nine days'));
out.push(A('⚠ **Every answer here is a word, a number or a short phrase, and the commonest error is writing more than was heard** — _about a month\'s margin_ for **a month\'s margin**, _the second half of the run_ for **the second half**. **Write what you hear, in as few words as the sentence allows.** ⚠ **Item 3 will be doubted**, because the speaker says _two machines_ and _fourteen people_ in the same sentence: **the gap asks what the reprint cost, and the answer is the only figure in the sentence that is a cost.**'));
out.push(A('⚠ **One thing to say before this test and not after: items 1 and 2 both take a number and they are different numbers.** **Students who notice that _two_ and _twice_ are near-neighbours will second-guess one of them.** **Say in advance that no two gaps in this part share an answer** — **it is true of this test and it is true of the examination** — **and the class will stop arithmetic that costs marks.** **Then mark strictly on the words heard**, because that is how the examination marks and a class that is marked leniently here learns the wrong habit in the cheapest possible place.'));
out.push(S('Homework / After Unit 14 (sample)'));
out.push(SAMPLE([
  '_**Report written, 211 words, four headings.**_',
  '_**The fact nobody has, in my own disagreement:** how many of my eleven changes would have triggered the plate charge. **I have assumed eleven and counted none.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the trades and not the close. **The question — what here could be done half of?** I have asked it of three arguments since Thursday and twice something answered._',
]));
out.push(sp());
out.push(box('After Unit 14', [
  '**Unit 15 is writing to somebody who has already said no**, and it follows from this unit exactly: ⚠ **a refusal is the other side\'s position, and the question is what has changed since it was given.** **Ask the class to bring one refusal they have received and not accepted** — **with the date it was given and anything that has happened since.**',
  '⚠ **And one thing to do before 15.1, because it takes a week.** **Ask each student to find out one fact about the refusal they could not have known at the time.** **If there is none, the letter cannot be written** — **15.1 opens on exactly that, and a class that has looked and found nothing has learned the cycle\'s hardest lesson before the lesson.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 14 · Answer Key');
