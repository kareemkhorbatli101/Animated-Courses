// Proactive English B2 · Syria Edition · Book 2 · Unit 20 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 20  Giving Bad News in Writing — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **The whole unit rests on 20.1 and the key says so three times.** **A letter with all five parts in the right order and a hedged news sentence has failed at the first line, and the other four parts will not be read.** **Teach 20.1 until the news sentence is automatic and then build on it.**',
  '**Ask the class to bring three things.** ⚠ **A bad-news letter they have received** _(20.1)_. **A refusal whose reason they did not believe** _(20.2)_. **And a refusal that offered them nothing at all** _(20.3)_.',
  '⚠ **The hardest teaching point in the unit is that news-first is kinder and not harsher**, **and no amount of asserting it will land.** **Use the arithmetic: Mr Tahhan\'s customer telephoned at eight the next morning having read one paragraph, and then had the news by telephone with no page in front of him.** **Three paragraphs of preparation did not soften the news; they produced the worst possible delivery of it.**',
  '**20.7 carries the examination papers.** **Reading and Use of English Part 6** is the gapped text, **Writing Part 2** is a letter, and **Listening Part 4** is multiple choice.',
  '⚠ **And one warning about 20.4, which is the cycle that upsets a class.** **It asks students to write what their news costs somebody, in that person\'s units, including the loss of a job.** **Say at the start that there is no softer form and that the attempts are all worse** — **and let the room test that against the sentence _we are unable to offer a continuation at this time_, which everybody has met and nobody has been comforted by.**',
], C.lblue, C.navy));

// ===================== 20.1 =====================
out.push(pb());
out.push(h2('20.1  The sentence that carries the news'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Collect the paragraph numbers and write them on the board as a list.** **In most sets of letters brought in, the news is in the third or fourth paragraph in more than half** — **and the first sentence names the file reference.** **The list is the argument for the cycle and it is made by the class in four minutes.**'));
out.push(A('**b** Carries the news: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 contains all three faults at once** — **buried, hedged and in the passive** — **and it is worth reading aloud twice and asking what has actually happened.** **The answer is that nothing can be determined from it at all.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **in the first sentence, short and with a date in it**; and **a reader who has to hunt reads everything else as an excuse, and is right to.**'));
out.push(A('**b** **1** ⚠ **Four paragraphs, with the news in the fourth** — **and the customer telephoned at eight the next morning having read the first paragraph only, believing the letter was about the price.**   **2** ⚠ **Everybody explains in the same breath** — _we cannot print it by the second, because the machines are, as you know…_ — **and an explanation inside the news sentence is what makes the news sound negotiable.**'));
out.push(NOTE('⚠ **The class will believe that news-first is harsh, and the belief has to be dismantled with the arithmetic rather than with assertion.** **The three paragraphs in front of the news did not soften it.** **They produced a telephone call at eight the next morning in which the man received the news with no page in front of him** — **which is the worst delivery available, and the letter caused it.** ⚠ **Put the two outcomes side by side on the board: _news in paragraph four → telephone at eight, no page_ against _news in sentence one → a decision taken by Tuesday_.** **Then say the general rule once:** **the kindness belongs in paragraphs two to five, which is where this unit goes.**'));
out.push(NOTE('**The date is the half of the news sentence that is dropped, and dropping it changes the meaning more than any softening does.** ⚠ _We cannot print it by 2 April_ **leaves the nineteenth open.** _We cannot print it_ **refuses everything for ever** — **and the reader will not ask what the refusal covers, because they have been refused.** ⚠ **Make the class mark every news sentence they write for a date, and accept none without one.** **The commonest version in a classroom is a true sentence with no limit in it, which a reader cannot act on and will not query.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cancellation)_ _The January print order is cancelled, with effect from 1 July._',
  '**2** _(a post not confirmed)_ _Your apprenticeship will not be confirmed in July._',
  '**3** _(a date that cannot be met)_ _We cannot print the ministry order by 2 April._',
  '**4** _(hedged, so that you hear it)_ ⚠ _We may unfortunately not be in a position to assist on this occasion_ — **and nobody can tell from it whether anything has happened.**',
  '**5** _(no date, and the repair)_ ⚠ _We cannot supply the pallets_ → _we cannot supply the pallets before 19 April._',
]));
out.push(A('⚠ Mark every item for two things only: **the word count and the date.** **Anything over fifteen words has an explanation in it**, and the repair is a full stop. Item **5** is the one that changes a student\'s own letters: **ask what their refusal is actually limited to, and about half of them will find that they have been refusing for ever by accident.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The ministry order cannot be printed by 2 April._',
  '**B** **We cannot print the ministry order by 2 April.** _(nine words)_',
  '**A** _(the ⚠ row)_ _The supplier is being taken off the list._',
  '**B** ⚠ **There is no date in that, so I must supply the limit:** _you are off the supply list for the rest of this year._ ⚠ **And if the limit is genuinely unknown, the sentence says so:** _you are off the list until the purchasing office reviews it, which it does in January._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each news sentence, its word count and its date. ⚠ **The four ⚠ rows have no date in them as they stand** — **and a refusal with no date refuses everything for ever.** **Make the pairs supply the limit:** _off the list for this quarter_, _closed until the index is rebuilt_. **A reader who is refused does not ask what the refusal covers.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**We cannot hold the June price after 20 May.**_ ⚠ _**Eight words, and the date is in it.**_ _**And the test: I covered the rest and my partner said _the price goes up after the twentieth of May_, which is what has happened.**_',
  '**b** ⚠ _**With the explanation attached:** _we cannot hold the June price after 20 May, because the paper quotation we were working to has expired and the mill has…_ **My partner said the second version sounded as though the date might move if she asked** — **and the words about the price are identical in both.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel had to tell a customer that the press could not print the ministry order by the second of April. The letter ran to four paragraphs and the news was in the fourth: the first three were the order reference, the pressure on the machines, and nineteen years of working together — all true, and all of it written before he had told the man anything. The customer telephoned at eight the next morning having read the first paragraph only, and thought the letter was about the price. So the three paragraphs did not soften the news; they hid it, and then he had it by telephone with no page in front of him, which is the worst way to receive it. Omar asked where it goes, and the first sentence: short, with a date in it, and nothing in front of it — we cannot print the ministry order by 2 April, nine words. Dima asked about the three faults, since she writes all three, and three: the news buried, the news hedged — we may unfortunately not be in a position to — and the news in the passive with nobody in it, which is it has been decided that. Rim said the third is her whole template, and it has been decided tells the reader that somebody decided and that you are not going to say who: they will spend the next fortnight finding out, and they will be entitled to. Adnan asked about the test, which is to cover everything but the first sentence and ask somebody what has happened — if they cannot say, the letter does not carry its news, and the test takes four seconds and cannot be argued with. Hiba asked whether it is not cruel with nothing in front of it, and it is the opposite: a reader who has to hunt for the news reads everything else as an excuse, and they are right, because a letter that delays the news was arranged to delay it. The kindness is in paragraphs two to five. And Mazen asked about saying it out loud: once, and then silence, because an explanation inside the news sentence is what makes the news sound negotiable.']));
out.push(A('Listener task: the partner\'s news sentence, its word count and its date. ⚠ **Collect the word counts and the dates separately.** **The counts are usually inside fifteen at the second attempt; the dates are missing in about half, even after the Language box** — **because a writer who has just been told to be short drops the date first.** **Say that: the date is not a detail, it is the half that tells the reader what is still possible.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I am writing with regard to your order._ → **✓** we cannot print it by 2 April.   **✗** _It has been decided that…_ → **✓** who decided, in the sentence.   **✗** _We may not be in a position to…_ → **✓** we cannot.   **✗** The news in paragraph four. → **✓** the first sentence.   **✗** An explanation in the same sentence. → **✓** say it and stop.   **✗** A refusal with no date. → **✓** by 2 April; the 19th is open.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The older machine has been out since 6 March, waiting for a roller from Aleppo** — **one reason, with a date in it.** **And what he refuses to give, although both are true:** _we are busy, and the ministry order is not the largest thing on the floor._ **He says in the letter that both are his problem and neither is a reason the reader should have to accept** — **two lines, and the most convincing thing on the page.**'));
out.push(A('**2** ⚠ **The first four thousand on the newer machine by 2 April, if the reader will take the order in two deliveries** — **and if the second half can wait to the nineteenth he loses nothing except one gate movement.** **The cost is named by the writer and not discovered by the reader on Friday.**'));
out.push(A('**3** ⚠ **The letter of 11 March ran to four paragraphs and put the news in the fourth; Mr Saqqal telephoned at eight the next morning having read the first and thought it was about the price.** **This one is shorter by about a third and contains one thing the other did not: a date he can still use.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**M. HARIRI · TELEPHONE REPAIRS** · 14 July · _to the distributor_',
  '**I cannot take the new range on the terms in your letter of 1 July.** ⚠ **The earliest I could take it is October, and I can hold that until the end of this month.**',
  '**Why, and it is one reason and not three.** **The terms require twelve handsets a quarter and I sold nine in the whole of last year.** ⚠ **With nine a year the twelve are three more than I can sell and I should be paying for them.**',
  '**What I am not going to say, although it is also true.** ⚠ **Your board supply has been poor since February.** **That is a separate matter and it is not a reason for this** — **the twelve is.**',
  '**What is still open.** **I will take six a quarter at the same unit price**, ⚠ **if you will carry the stock until I have sold four of the six.**',
  '**What this costs you, as far as I can see it.** ⚠ **Six instead of twelve from one shop, and there are nine shops in this street.** **I do not know what the other eight have told you and I am not going to guess at it.**',
]));
out.push(S('Stage 7 · Write freely (sample, 202 words)'));
out.push(SAMPLE([
  '**R. SHAABAN · QUALITY OFFICE** · 16 July · _to the cold-store contractor_',
  '**We are not renewing the cold-store contract after 30 September.** ⚠ **The tender for the next two years opens on 1 August and you are welcome to bid; I can tell you the criteria on the day it opens.**',
  '**Why, and it is one reason and not three.** **The contract requires the store to hold between two and six degrees and the chart shows eleven excursions above six since January.** ⚠ **Four of the eleven were longer than two hours, and the rule in clause nine is that an excursion of more than ten degrees for more than two hours requires the consignment to be held.** **Two consignments were held and one was destroyed.**',
  '**What I am not going to say, although it is also true.** ⚠ **Your man was late twice in June and the store was unattended for an afternoon in May.** **Both of those are real and neither is a reason for this** — **the eleven excursions are.**',
  '**What is still open, and it is not the contract.** **If the compressor is replaced before the tender closes on 20 August, say so in the bid and I shall put the chart in front of the committee with the replacement date on it.** ⚠ **That is not a promise about the outcome; it is a promise that the committee will see it.**',
  '**What this costs you, as far as I can see it.** ⚠ **Nine months of about four consignments a week, which on the figures in your own invoices is a little under a fifth of your year.** **I do not know what the Suwayda store pays you and I am not going to guess at it.**',
]));
out.push(A('**202 words, the news in the first sentence with its date, a usable date and an opening in the second, one reason with its clause and its figures, the true reasons refused in two lines, an alternative with a limit on what it promises, and the cost in the reader\'s own invoice figures.** ⚠ **The sentence that earns the band is _that is not a promise about the outcome; it is a promise that the committee will see it_** — **it offers exactly what the writer can deliver and nothing more**, which is the discipline the whole unit rests on.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the news in the first sentence with a date.** _"We are not renewing the cold-store contract after 30 September."_ ⚠ **Eleven words and a date.** **Mine says _I am writing about the renewal of your contract_**, which is a subject line standing where the news should be.',
  '**One thing to keep, and why it works.** _"which on the figures in your own invoices is a little under a fifth of your year"_ **The cost is in his arithmetic and not hers**, and he cannot dispute the source.',
  '**Ranking of the slip I was given.** **1** the news first with a date **2** the true reasons refused **3** the cost in their units **4** the alternative with its limit _(there, and it is the longest paragraph, which I think is one line too long)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The news sentence with an explanation attached, and then alone.** **The room says which version sounds negotiable, and it is the first** — **because an explanation inside the news is an invitation to argue with the explanation.** **Do it twice, because the first time the room hears the explanation and the second time it hears the news.** **Finish on Mr Tahhan\'s sentence:** **he telephoned at eight the next morning having read the first paragraph only.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The four-second test on the letter I brought:** I covered everything but the first sentence and my brother said _it is about your insurance_._',
  '⚠ _**It is a refusal of a claim.** **The news is in the fifth paragraph, which is the last one.**_',
  '_**And the first sentence is:** _we thank you for your letter of 2 May and for the documents enclosed with it._ ⚠ **Nineteen words, and none of them is the news.**_',
]));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  The reason, and the one you must not give'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The question that decides the cycle is the second one: if that reason were removed, would the answer have changed?** **In most cases it would not** — **which is precisely why the student did not believe it, and they will not have been able to say so until the question is put in those words.**'));
out.push(A('**b** Reasons: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 is the one the room rejects and it is correct:** **a named silence is a reason of the only kind available when the real one cannot be given.** **5 is the worst of the three wrong answers** — _as you know, our resources are not unlimited_ — **because it uses the reader\'s own knowledge against them and tells them nothing.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **if the reader removed it, would the answer change?**; and **three reasons read as none, because the reader argues with the weakest.**'));
out.push(A('**b** **1** ⚠ **Ten letters over fourteen months and four different reasons** — **and he believed the first for about six weeks and stopped reading the reasons after the third.**   **2** ⚠ **Say that, and say what kind of thing it is:** _there is a reason and I am not able to give it; it concerns a third party and not you._ **A substitute reason can be answered, and when it is, the refusal looks arbitrary.**'));
out.push(NOTE('⚠ **The arithmetic of four reasons is the content of this cycle and it should be put on the board as a chain.** **Out of warranty → model discontinued → not a manufacturing fault → with the legal office.** **Each one answers the last:** **if the model is discontinued the warranty date is beside the point, and if the fault is not theirs the legal office has nothing to consider.** ⚠ **So they were not reasons; they were whatever would close the letter.** **And the cost is the one the class should write down:** **he stopped reading the reasons after the third and now reads their letters for the date and the decision only.** **That is not recoverable by a fifth reason, however good.**'));
out.push(NOTE('**The reason you must not give is the hardest idea in the unit, because it is a true one.** ⚠ **Mr Tahhan is busy and the ministry order is not his largest job.** **If he writes either, the customer can answer it** — _then put us first_, _then take the large job second_ — **and he must refuse again or give in.** ⚠ **The move is to name them and place them:** _both of those are my problem and neither is a reason you should have to accept._ **Two lines.** **And teach the test that identifies them: a reason the reader could remove by changing their own behaviour, without the decision changing, is not the operative reason.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a fact with a date)_ _The older machine has been out since 6 March, waiting for a roller from Aleppo._',
  '**2** _(three cut to one)_ ⚠ _Pressure of work, priorities and the roller_ → _the roller, since 6 March._',
  '**3** _(the true ones refused)_ _We are busy and your order is not the largest thing on the floor; both are my problem._',
  '**4** _(cannot be given at all)_ ⚠ _There is a reason and I am not able to give it; it concerns a third party and not you._',
  '**5** _(with **as you know**, and the repair)_ ⚠ _As you know, our resources are not unlimited_ → _we have one machine until the roller arrives._',
]));
out.push(A('⚠ Item **2** is marked by asking which of the three the student kept and why: **the answer must be the one whose removal would change the decision**, and in most first attempts the student keeps the one that sounds most official. Item **4** is the item a class resists writing and the room should hear three of them aloud — **it is shorter, it cannot be answered, and it is the only honest form when the real reason is somebody else\'s business.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _No print by 2 April: pressure of work · priorities · the roller since 6 March._',
  '**B** **The roller: the older machine has been out since 6 March.** **I am not going to say that we are busy or that this is not our largest job, although both are true.**',
  '**A** _(the ⚠ row)_ _Supplier off the list: the real reason concerns another customer._',
  '**B** ⚠ **Named silence.** _There is a reason and I am not able to give it; it concerns another customer and not you._ ⚠ **And I shall not put a substitute in its place** — **because if I write _a review of our supply arrangements_ he will ask when the review ends, and I shall have to refuse him twice.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The one reason for each, and the true ones refused. ⚠ **The four ⚠ rows have no giveable reason**, and the honest form is the named silence. **A pair that invents a substitute has produced the worst letter in the unit** — **the reader answers the substitute, and the refusal then looks arbitrary.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**The one reason:** the compressor has run above six degrees eleven times since January, four of them for more than two hours._ ⚠ _**And the true ones I am refusing to give:** his man was late twice in June and the store was unattended one afternoon in May. **Both real, and if I write either he will answer it with a new timekeeping arrangement and expect the contract back.**_',
  '**b** ⚠ _**With _as you know_ in front of it, my partner said it sounded as though I expected to be argued with** — **and that is exactly what it is: four words of insurance on the one sentence that had to be believed.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen asked about the handset batch ten times over fourteen months and was given four different reasons: the batch was out of warranty, then the model was discontinued, then the fault was not a manufacturing fault, then the warranty question was with their legal office. He believed the first for about six weeks and stopped reading the reasons after the third — which is the cost, and it is not recoverable. Four reasons is worse than one because each one answered the last: if the model is discontinued the warranty does not matter, and if the fault is not theirs neither does. They were not reasons; they were whatever would close the letter. And the test is one question: if the reader removed this reason, would the answer change? If it would not, it is not the reason but a sentence put there to fill the place a reason goes. Omar asked about three reasons at once, and three read as none: a reader given three arguments with the weakest, answers it, and expects the decision to move, and when it does not, they have learned that the reasons were ornamental. Dima asked what makes a reason a reason, and a fact with a date behind it — the older machine has been out since 6 March, waiting for a roller from Aleppo, whereas pressure of work is a state and a permanent state is a refusal of everything for ever. Rim asked about the reason you must not give, and it is a true one that is not the operative one: Bassel is busy and the ministry order is not his largest job, both true, and if he writes either the customer can answer it and then he must refuse again or give in. So he named them and said they were his and not reasons the customer should have to accept, which costs two lines and is the most convincing thing on the page. Adnan asked what happens when the real reason cannot be given at all, and then you say that and say what kind of thing it is. And Mazen asked about saying it out loud: once, with no as you know in front of it.']));
out.push(A('Listener task: the partner\'s one reason and the true ones refused. ⚠ **Collect the refused ones; they are the finding.** **In most rooms they are of two kinds** — **the writer\'s own convenience** _(we are busy)_ **and an unrelated grievance** _(he was late twice)_ — **and the second kind is the dangerous one, because writing it turns a refusal into a complaint and invites an answer about timekeeping.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Owing to pressure of work._ → **✓** a fact with a date.   **✗** Three reasons. → **✓** one, and the others named as yours.   **✗** _As you know…_ → **✓** cut the four words.   **✗** A substitute for a reason you cannot give. → **✓** there is a reason and I cannot give it.   **✗** A reason the reader can fix. → **✓** would the answer change?   **✗** A different reason in each letter. → **✓** one, and the same one.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **November: out of warranty. February: the model discontinued. June: not a manufacturing fault. January: with their legal office.** **Four is worse than one because each answers the last** — **if the model is discontinued, the warranty date is beside the point; if the fault is not theirs, the legal office has nothing to consider** — **so they were not reasons but four sentences, each of which closed a letter.**'));
out.push(A('**2** ⚠ **He stopped reading their reasons after the third and now reads their letters for the date and the decision only** — **and when their man came in February about the new range he asked him nothing, because he no longer believes the answers are about the question.** **And then the widening, with a figure:** _that is one shop, and I am not the largest, and there are nine of us in this street._'));
out.push(A('**3** ⚠ _The batch is out of warranty: it was supplied on 14 March 2022 and the term is two years._ **One reason, with the date in it, in November** — **he says he would not have liked it and would not have written nine more letters.** **And what he will now tell customers: that he does not know and that he has asked four times**, **because it is true and he is not going to invent a fifth reason to pass on.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THREE ANSWERS** · T. Ayoub · 18 July · _to the depot office_',
  '**I have asked three times since March why the weighbridge ticket is needed for loads above four tonnes and I have had three different answers.** ⚠ **I am not writing to argue with the third.**',
  '**The three, in order.** **March: the ministry requires it.** **May: the gate cannot weigh.** ⚠ **July: it is in clause nine of the instruction.**',
  '**Why three is worse than one.** ⚠ **Each answers the last.** **If the gate cannot weigh, the ministry requirement is not the point; if it is in clause nine, neither of the first two is.**',
  '**What it has cost you.** ⚠ **I stopped asking in July and I now carry the ticket for every load, including the ones under four tonnes.** **That is about nine extra tickets a month for eleven drivers.**',
  '**What I would have accepted.** ⚠ _Clause nine of the instruction of 11 March requires it for loads above four tonnes laden._ **One answer, with the clause and the word _laden_ in it, in March.**',
  '**And what I shall do now.** ⚠ **I shall carry the ticket and I shall tell new drivers that it is clause nine** — **because that is the only one of the three I can show them.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**FOUR ANSWERS IN FOURTEEN MONTHS** · L. Sweidan · 20 July · _to the conservation office_',
  '**I have asked four times since last May why the wall readings are taken in March and October and not quarterly, and I have had four different answers.** ⚠ **I am not writing to argue with the fourth; I am writing to say what the four have cost.**',
  '**The four, in order.** **May: the instrument is shared with two other offices.** **August: quarterly readings are not required by the standard.** ⚠ **November: the March and October dates match the heating season.** **March: the question is with the technical committee.**',
  '**Why four is worse than one.** ⚠ **Each one answers the last.** **If the standard does not require quarterly readings, the instrument\'s diary is beside the point; if the dates match the heating season, that is a reason and not a shortage; and if the committee is considering it, none of the first three was the reason at all.**',
  '**What it has cost you.** ⚠ **I have stopped putting the question in writing and I now put _seven months_ in brackets after every movement figure in my summaries.** **Three committees have asked me what the bracket means, and I have told them that nobody has been able to tell me** — **which is true, and it is not what I would prefer to be saying about your office.**',
  '**What I would have accepted, and I want to be exact.** ⚠ _The March and October readings match the heating season; a quarterly figure would mix two different conditions._ **One reason, with the mechanism in it, in May.** **I would have put it in the summaries instead of the bracket.**',
  '**And what I shall do now, which is not a threat.** **I shall go on using your readings, because they are the only ones.** ⚠ **But I shall go on printing the interval beside them, because a reader who is told eleven millimetres and not told over how long has been given half a figure.**',
]));
out.push(A('**207 words, the latest answer explicitly not argued with, the four printed in order with their months, the chain shown cancelling itself, the cost given in her own changed behaviour and then widened to three committees, the acceptable reason written out, and a closing act that is not a threat.** ⚠ **The sentence that earns the band is _which is true, and it is not what I would prefer to be saying about your office_** — **it prices the pattern in the office\'s reputation without accusing anybody**, and it cannot be answered with a fifth reason.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the reasons shown cancelling each other.** _"if the standard does not require quarterly readings, the instrument\'s diary is beside the point"_ ⚠ **One clause of arithmetic and the whole chain falls.** **Mine says _the answers were inconsistent_**, which is a complaint and invites a letter explaining that they were not.',
  '**One thing to keep, and why it works.** _"I now put seven months in brackets after every movement figure"_ **The cost is a thing she does, not a thing she feels** — **and three committees have seen it.**',
  '**Ranking of the slip I was given.** **1** the chain cancelling itself **2** the cost in her own behaviour **3** the acceptable reason written out **4** the latest answer not argued with _(in the second sentence, and the easiest of the four)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The reason with _as you know_ in front of it, and then without.** **The room says what the first version made it feel about the reason, and the answer is always the same: that the writer expected to be argued with.** **And ask the room what it would now do about the reason, which is nothing at all.** **Finish on Mr Hariri\'s sentence:** **I stopped reading your reasons after the third.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**My last refusal said:** _we are unable to supply at present owing to current demand._**_',
  '⚠ _**Would the answer have changed if that were removed? No.** **The decision was taken because the customer owes us for April, and I did not write that.**_',
  '_**So the reason I should have written is:** _the April invoice is unpaid and I do not supply against an unpaid invoice._ ⚠ **Which he could have answered, and that is the point: he could have paid it.**_',
]));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  What is still available'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The answer is almost always _I wrote back and asked what could be done_** — **a second letter, a second wait, and a decision nobody has taken.** **Collect how long the second wait was; in most cases it is between one and three weeks, and in two or three cases no answer ever came.**'));
out.push(A('**b** Alternatives: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 is the one the room does not expect:** **there is nothing available, and it is still an alternative**, **because it carries a condition, a date and an instruction not to wait.** **The three wrong answers name no thing, no date and no price, and all three are read, correctly, as the end of the letter.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a second letter asking what can be done**; and an alternative must have **a date, a stated period it is held for, and its own cost said by the writer.**'));
out.push(A('**b** **1** ⚠ **The gate telephones the supplier\'s office before a driver is turned away** — **and eight of the nineteen refusals last year would have been settled in four minutes.**   **2** ⚠ **Say so, then name what would change it with a date, and tell them what not to wait for:** _do not wait beyond Thursday; if your date is fixed, place it elsewhere this week._'));
out.push(NOTE('⚠ **The third part of an alternative is the one that is always missing and it is the one that protects the offer: its own cost, said by the writer.** **An offer whose cost is hidden is a second piece of bad news with a delay built in** — **the reader finds the two deliveries on Friday, and then distrusts the offer and the letter, and the writer has spent a concession and bought nothing.** ⚠ **And the sentence the cycle is really for is the one nobody writes:** _do not wait beyond Thursday; if your date is fixed, place it elsewhere this week._ **A refusal that protects the reader\'s week costs the writer nothing and is remembered two years later when somebody is choosing.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(part of what was asked)_ _Four thousand by 2 April, held until Thursday, if you will take two deliveries._',
  '**2** _(the same thing later)_ _The whole order by 19 April, held until Thursday; nothing changes except the date._',
  '**3** _(nothing available)_ ⚠ _There is nothing before the 19th. If the roller arrives by the 14th I shall write the same day. Do not wait beyond Thursday._',
  '**4** _(offered tentatively)_ ⚠ _I suppose we might be able to manage the first four thousand_ — **and it is declined out of politeness.**',
  '**5** _(built into the refusal)_ _The gate telephones your office before any load is turned away._',
]));
out.push(A('⚠ Item **3** is the item to mark hardest, because it has three parts and students write one: **the statement that nothing is available, the condition with a date, and the instruction not to wait.** **The third is the one that makes it an alternative rather than a refusal repeated.** Item **5** is the cheapest form in the unit and worth collecting: **ask who has an alternative that could be built into the refusal itself**, and in most rooms two or three do.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _No print by 2 April; one machine, roller from Aleppo._',
  '**B** **The first four thousand by 2 April, held until Thursday, if you will take the order in two deliveries** — **and that costs you one extra gate movement.**',
  '**A** _(the ⚠ row)_ _Post withdrawn; the budget line has gone._',
  '**B** ⚠ **There is nothing, and I shall say so with the other two parts:** _there is no post before September. If the budget line is restored I shall write the same day. Do not hold yourself free for it._ ⚠ **And I shall not say that we shall keep your details, because we shall not look at them.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each alternative, its date, its period and its cost. ⚠ **The four ⚠ rows have nothing available**, and the pairs must give the condition and the warning. **A pair that invents an alternative has written the offer that is not one**, **and the reader would do nothing with it.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Nothing is available before the tender on 1 August.** **If the compressor is replaced before the tender closes on the twentieth, say so in the bid and the committee will see the replacement date.** ⚠ **Do not hold the September men free for us.**_',
  '**b** ⚠ _**Tentatively, my partner said she would have thanked me and gone elsewhere** — **and she said the reason: an offer that the writer is not sure of asks the reader to do the deciding twice.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Asked what a reader does with a refusal that has nothing after it, Tareq said he writes back and asks what can be done — he has done it four times and twice got no answer at all. So the refusal has produced a second letter, a second wait, and a decision nobody has taken, and one named alternative turns that into a decision made this week. Omar asked what an alternative needs, and three things: a date, a period you will hold it for, and its own cost said by you. Dima asked why the cost is said by the writer, and because an offer with its cost hidden is a second piece of bad news with a delay built in: the reader finds the two deliveries on Friday and now distrusts the offer and the letter, so you have spent a concession and bought nothing. Rim said theirs is smaller than that — the gate telephones the supplier’s office before a driver is turned away, and eight of the nineteen refusals last year would have been settled in four minutes. Which is an alternative built into a refusal rather than offered after it, and that is the cheapest form of all. Bassel asked about the offers that are not offers, and we would be happy to consider any future requirements, do not hesitate to contact us, we hope to help on another occasion: none of them names a thing, a date or a price, and all three are read, correctly, as the end of the letter. Adnan asked what happens when there is genuinely nothing, and you say so and then do two things: name what would change it, with a date, and tell them what not to wait for — do not wait beyond Thursday; if your date is fixed, place it elsewhere this week. Hiba said that second part is extraordinary, since you are telling them to go elsewhere, and you are telling them not to lose a week waiting for you, and it is the sentence a reader remembers two years later when they are choosing. And Mazen asked about saying it out loud: as an offer, at the same weight as the news, because an alternative said tentatively is heard as a consolation and a consolation is declined out of politeness.']));
out.push(A('Listener task: the partner\'s alternative with its three parts, or the condition and the warning. ⚠ **Count the ones with the third part.** **In most rooms fewer than half name their own cost**, and the omission is not meanness: **a writer who has just refused somebody is reluctant to add a condition to the one thing they are offering.** **Say that, and then say what it buys** — **a reader who is told the cost on Monday does not discover it on Friday and distrust everything.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Do not hesitate to contact us._ → **✓** four thousand by the 2nd, held until Thursday.   **✗** _Happy to consider future requirements._ → **✓** a thing, a date and a price.   **✗** An offer with its cost hidden. → **✓** two deliveries, said by you.   **✗** Nothing after the refusal. → **✓** a second letter is now coming.   **✗** No instruction not to wait. → **✓** place it elsewhere this week.   **✗** An alternative offered tentatively. → **✓** flat, as an offer.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The batch numbers in writing by Thursday noon, from the production book and not from the pallet labels, with the consignment then accepted at the June price** — **and two costs, both named: one telephone call and about twenty minutes at their end, and two days of cold-store space at hers, which she is willing to find once.**'));
out.push(A('**2** ⚠ **The consignment comes back on Friday morning and she writes on the Thursday afternoon so that they have a day to arrange the lorry** — **and:** _do not wait for a second letter from me; the Thursday note is the last one._ **Naming the last letter is the part that stops a week of waiting.**'));
out.push(A('**3** ⚠ **The gate telephoned at half past eight and the supplier\'s office said they would ring back and did not** — **and she says the arrangement only works if somebody at their end answers it.** **And what she refuses to use:** **their loads have been late three times this quarter**, **which is a separate matter and not a reason for this refusal.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**B. TAHHAN · DAR AL-KUTUB PRESS** · 22 July · _to the Suwayda customer_',
  '**The August labels cannot be printed in the week of the 11th.** ⚠ **The week of the 18th is open and I can hold it until Friday.**',
  '**Why, and it is one.** **The ministry order has the newer machine for the whole of that week, by an agreement made on 4 July.** ⚠ **It is one week and not a change of priority.**',
  '**What is available, and what it costs you.** **Half the labels in the week of the 11th on the older machine**, ⚠ **if you will accept the slightly heavier register that machine gives.** **You have had labels off it before, in February, and you said then that they were acceptable for the inner cases and not for the outer.**',
  '**And what I shall not do.** ⚠ **I shall not put the whole run on the older machine.** **It has been out once since March and a week\'s run on it is a risk to your date and not only to mine.**',
  '**If the 18th is no use.** ⚠ **Tell me by Friday and I shall give you the name of the works in Jaramana that did your 2023 labels.** **Do not wait for me to find somebody.**',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**R. SHAABAN · QUALITY OFFICE** · 24 July · _to the supplier_',
  '**The consignment of 22 July is refused.** ⚠ **Nine of the fourteen pallets carry no batch number, and the rule is clause nine of the agreement of 2022.**',
  '**What is available, and I can hold it until Thursday at noon.** ⚠ **If the numbers reach me in writing by then, from your production book and not from the pallet labels, the consignment is accepted at the July price.** **It costs you one telephone call and about twenty minutes of somebody\'s time at your end.**',
  '**And what it costs here, so that you know what you are asking for.** ⚠ **The pallets hold a rack in the cold store until Thursday, which is two days of space I have to find.** **I am willing to find it once this quarter.** **If it happens again before October I shall not be able to hold a consignment for anybody, including you.**',
  '**If the numbers cannot be produced.** ⚠ **The pallets go back to you on Friday morning and I shall write on Thursday afternoon so that you have a day to arrange the lorry.** **Do not wait for a second letter; the Thursday note is the last one.**',
  '**And one thing that is not about this consignment.** **The gate telephoned your office at half past eight on Tuesday, before the driver was turned away.** ⚠ **Your office said they would ring back and did not.** **Eight of the nineteen loads we refused last year could have been settled in four minutes by that call** — **and it only works if somebody at your end answers it.**',
  '**What I am not going to say, although it is also true.** ⚠ **Your loads have been late three times this quarter.** **That is a separate matter and it is not a reason for this refusal; the batch numbers are.**',
]));
out.push(A('**205 words, the news with its clause, the alternative with a named hour and both costs, the limit on the writer\'s willingness, the last letter named, the standing arrangement with its figure and its failure, and the available grievance refused.** ⚠ **The sentence that earns the band is _I am willing to find it once this quarter_** — **it concedes and limits in nine words**, which is Unit 6 of Book 1 doing its work inside a refusal.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the last letter named.** _"Do not wait for a second letter; the Thursday note is the last one."_ ⚠ **Named, with its day.** **Mine ends _I shall be in touch_**, which is the sentence that produced a fortnight of waiting the last time I received it.',
  '**One thing to keep, and why it works.** _"it only works if somebody at your end answers it"_ **It reports the failure of her own good arrangement without accusing anybody by name.**',
  '**Ranking of the slip I was given.** **1** the last letter named **2** her own cost with its limit **3** the alternative with its hour **4** the grievance refused _(refused, in two lines, and the easiest to copy)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The alternative tentatively, and then flat as an offer.** **The room says which it would have declined out of politeness, and it declines the first** — **which is why a hedged concession is the most wasteful sentence in a bad-news letter.** **Ask the room which of the two versions it has ever received; it is the first.** **Finish on Ms Huda\'s sentence:** **a refusal that protects the reader\'s week costs the writer nothing and is almost never written.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The refusal that offered me nothing:** the claim letter of 2 May._',
  '⚠ _**The one sentence that would have saved me a letter:** _if the receipt is in the name of the account holder, send it and the claim is reopened; if it is not, nothing will reopen it._**_',
  '_**What the missing sentence cost me:** three weeks, and the second letter was never answered. ⚠ **The receipt was in my brother\'s name, which I would have known to be fatal on the third of May.**_',
]));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  What it costs them, said by you first'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Collect the costs in days or money and then ask how many of the letters mentioned them.** **It is almost none** — **and the sentence they have instead is _we appreciate that this may be inconvenient_, which prices nothing and is read as a request for sympathy.**'));
out.push(A('**b** Names the cost: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **All three wrong answers are about the writer** — _we appreciate_, _we regret_, _we trust you will understand our position_ — **and the last is the clearest case: it asks the reader to do something for the writer in a letter that has just cost them something.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **because the reader will cost it anyway, and if the writer does it first it is a description rather than an accusation**; and the limit is **do not cost what you cannot know.**'));
out.push(A('**b** **1** ⚠ _This means you will be looking for work from 1 August_ — **a sentence he had never written before, because it sounds like cruelty on the page and is the opposite.**   **2** ⚠ **A plea for yourself.** _This will cost you two days, and we are under a great deal of pressure ourselves_ **has taken the cost back** — **the reader now has to weigh their two days against the writer\'s pressure, which is not a comparison anybody can make.**'));
out.push(NOTE('⚠ **This is the cycle that upsets a class, and the upset should be used rather than smoothed.** **There is no softer form of _you will be looking for work from the first of August_, and every attempt is worse:** **_we are unable to offer a continuation at this time_ requires the man to work out that he is unemployed in July** — **and he will do it while reading, and then read the rest of the letter as evasion.** ⚠ **The argument is not about kindness but about sequence:** **the reader will cost it anyway, in the car park, in about four seconds.** **If the writer does it first it is a description; if the reader does it first it is an accusation** — **and once they are accusing, every true thing in the letter is read as a defence.**'));
out.push(NOTE('**Two limits, and both are easy to state and hard to keep.** ⚠ **First: do not cost what you cannot know.** _I do not know what this does to your own order book._ **Nine words, and a reader who finds one invented cost stops believing the real ones.** ⚠ **Second: nothing follows the cost in the same breath** — **not a plea and not an apology.** **Everybody adds _I am sorry_ to the end of the cost sentence, and the apology in the same breath turns the cost into the writer\'s feeling about the cost.** **And there is a place rule as well: the cost never goes before the alternative**, **because a cost stated before any remedy reads as a threat, and the reader stops above the paragraph that would have helped them.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(in days)_ _This means the pallets stand for two days and the lorry comes back empty on Friday._',
  '**2** _(in money)_ _You will have to place it elsewhere, and both places that could take it will quote above us._',
  '**3** _(somebody\'s post)_ _This means you will be looking for work from 1 August._',
  '**4** _(what you cannot know)_ ⚠ _I do not know what this does to your own order book and I am not going to guess at it._',
  '**5** _(with a plea attached)_ ⚠ _…and we are under a great deal of pressure ourselves_ — **and the cost has gone.**',
]));
out.push(A('⚠ Item **3** is read aloud by its author and the room is asked what it noticed: **the usual answer is that it is shorter than they expected.** **Brevity is what makes it bearable** — **the long versions are the evasive ones.** Item **4** is marked for the refusal as well as the admission: **_I do not know_ without _and I am not going to guess_ invites the writer to guess two lines later**, and about a third of first drafts do.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The apprenticeship is not confirmed in July._',
  '**B** **This means you will be looking for work from the first of August.** **The press will give you a reference naming the make-ready figures.** **I do not know what the Qassaa works pay an improver and I am not going to guess at it.**',
  '**A** _(the ⚠ row)_ _The supplier is off the list for the year._',
  '**B** ⚠ **The cost I can name is six months of about four consignments a month, which on their own invoices is a little under a third of what they send us.** ⚠ **What I cannot know is what that is as a share of their year, and I shall say so rather than put a figure on it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each cost and its units, and what the pair said could not be known. ⚠ **The four ⚠ rows invite invention** — **a writer cannot know what a year off a list does to a supplier\'s order book** — **and the nine-word form is the whole answer.** **A pair that invents a figure has written the sentence that destroys the real ones.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**The cost:** nine months of about four consignments a week, which on their own invoices is a little under a fifth of their year._ ⚠ _**What I cannot know:** what the Suwayda store pays them. **And I have struck out _this has not been an easy decision_, which was in the same paragraph.**_',
  '**b** ⚠ _**With _I am sorry_ on the end, my partner said the sentence had become about me.** **She put it exactly: _you told me what it costs and then asked me to notice that you minded._**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel’s letter to the apprentice had to carry that the apprenticeship was not being confirmed in July, and one sentence he had never written before: this means you will be looking for work from 1 August. He had never written it because it sounds like cruelty on the page and is the opposite — the man was going to work it out in the car park in about four seconds. Which is the whole cycle: the reader will cost it anyway, and if you do it first you are describing, and if they do it first they are accusing, and once they are accusing every true thing in your letter is read as a defence. Omar asked in what units, and theirs: days, money, somebody’s work, a post they will now not have — not inconvenience, which is a word for the writer’s discomfort. Dima asked about the limit, since she could invent costs all afternoon, and do not cost what you cannot know: I do not know what this does to your own order book is honest and takes nine words, and a reader who finds one invented cost stops believing the real ones. Rim asked what must not follow it, and a plea for yourself: this will cost you two days, and we are under a great deal of pressure ourselves has taken the cost back, because the reader now has to weigh their two days against your pressure. Bassel said he nearly wrote that one — he had we are a works of fourteen people in the draft and took it out, and put the reference in instead: the press will give you a reference naming the make-ready figures, which is a fact and is worth something to him on the first of August. Hiba asked whether there is no softer form when the cost is somebody’s job, and there is none and the attempts are all worse: we are unable to offer a continuation at this time requires him to work out that he is unemployed in July, and he will do it while reading. And Mazen asked about saying it out loud: flat, and with nothing after it in the same breath.']));
out.push(A('Listener task: the partner\'s cost sentence, its units, and the thing they could not know. ⚠ **Collect the struck-out sentences.** **In most drafts there are two that ask for sympathy, and one of them is inside the cost paragraph** — _this has not been an easy decision_, _we are a small works_, _I have thought about this a great deal._ **Read six of them out without names and ask the room whose feelings each is about.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We appreciate that this may be inconvenient._ → **✓** two days, and the lorry back empty.   **✗** _We trust you will understand our position._ → **✓** nothing about your position.   **✗** A guessed figure. → **✓** I do not know, and I shall not guess.   **✗** _…and I am sorry._ → **✓** say the cost and stop.   **✗** _We are under pressure ourselves._ → **✓** strike it out.   **✗** The cost before the alternative. → **✓** after the remedy, never before.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The published criterion is all fifty-eight jobs entered in the log, and fifty-one are entered; seven are not, and six of those seven are from the fortnight in March when the man was on the second machine alone.** **And the two sentences that make it a reason rather than an accusation:** _I know why they are missing. The criterion does not have a clause for why._'));
out.push(A('**2** ⚠ **He does not know what the Qassaa works pay an improver or whether they are taking anybody** — **and he says he is not going to guess at it in a letter to him.** **A letter that costs a reader their whole future has lost the right to be believed about the part it does know, and the refusal to guess is what preserves that right.**'));
out.push(A('**3** ⚠ _I could have entered those seven jobs myself in March and I did not._ **He calls it his failure and says plainly that it is not a reason to confirm him** — **the criterion is about the man\'s log and it was published in January** — **and he has put the same sentence in the file.** **Both halves are necessary: the first is what the man is owed and the second is why the decision stands.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**R. SHAABAN · QUALITY OFFICE** · 26 July · _to the gate supervisor_',
  '**The night allowance is being withdrawn from 1 September.** ⚠ **I am telling you in July so that the two months are yours to plan with.**',
  '**The reason, and it is one.** **The allowance was agreed in 2021 for the nights the gate was single-manned, and since April there have been two men on every night shift.** ⚠ **The condition it was paid for has gone.**',
  '**What this means for you.** ⚠ **About eleven thousand pounds a month, from September.** **I do not know what that is against your other work and I am not going to guess at it.**',
  '**What is still open.** **The Saturday gate is unfilled and it pays at the same rate.** ⚠ **Say by 15 August if you want it; I can hold it until then and no longer.**',
  '**And the thing I shall put in writing about myself.** ⚠ **I knew in April that the second man made the allowance indefensible and I said nothing until July.** **That is three months of yours and it is my failure, not a reason to go on paying it.**',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**M. HARIRI · TELEPHONE REPAIRS** · 28 July · _to the boy who has been helping on Saturdays_',
  '**I cannot keep you on after the end of August.** ⚠ **I am telling you now, at the end of July, so that the month is yours and not a month of waiting to hear.**',
  '**The reason, and it is one.** **The repairs have gone from about forty a month to twenty-six since February, because the two commonest boards are no longer supplied.** ⚠ **Twenty-six repairs is one pair of hands and I have one pair.** **It is the boards and it is not your work, which has been better than mine was at nineteen.**',
  '**What this means for you.** ⚠ **You will be looking for Saturday work from the sixth of September, and that is about nine thousand pounds a month.** **I do not know what the shops in Salhiyeh are paying and I am not going to guess at it.**',
  '**What I can do, and it is small.** **I shall write to the three shops in this street that still take repairs** — ⚠ **and I shall say that you stripped and reassembled about sixty handsets with me and that you kept the parts drawer, which none of the three has anybody to do.** **I shall write this week and not in September, because September is too late to be useful.**',
  '**And one thing I shall put in writing, because you should have it from me.** ⚠ **I took you on in February knowing the board supply was failing, and I did not say so.** **That is my failure and it is not a reason to keep you on** — **but it is the reason you are hearing this in July and not in August.**',
  '**And Saturdays, because you will be in the street.** ⚠ **Come in for the tea on Saturdays if you want to; nothing about that changes.**',
]));
out.push(A('**209 words, the news first with the reason for its timing, one reason with figures and the explicit statement that it is not about the reader\'s work, the cost in his units with the guess refused, a small concrete action with a date, the writer\'s own share put in writing and denied as a reason, and the next occasion.** ⚠ **The sentence that earns the band is _September is too late to be useful_** — **it prices the writer\'s own promptness in the reader\'s terms**, which is the only kindness a letter of this kind has available.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the cost in the reader\'s units, with the guess refused.** _"about nine thousand pounds a month. I do not know what the shops in Salhiyeh are paying and I am not going to guess at it."_ ⚠ **His figure, and then the limit.** **Mine gives my own figure for what the work was worth to me**, which is the writer\'s unit and not the reader\'s.',
  '**One thing to keep, and why it works.** _"it is not your work, which has been better than mine was at nineteen"_ **It separates the decision from the person in a clause**, and it cannot be read as consolation because it is a comparison the writer loses.',
  '**Ranking of the slip I was given.** **1** the cost with the guess refused **2** the writer\'s own share denied as a reason **3** the small action with a date **4** the reason for the timing _(in the second sentence, and the shortest thing on the page)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The cost sentence with _I am sorry_ on the end, and then alone.** **The room says whose feelings the first version was about, and it is the writer\'s, every time** — **which nobody intends and everybody does.** **Then read it with the plea attached, and the room will say it had stopped believing the figure.** **Finish on Mr Tahhan\'s sentence:** **he was going to work it out in the car park in about four seconds.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The cost sentence that was not in my last letter:** _this means the two men on the Saturday gate lose about nine thousand pounds a month each from September._**_',
  '⚠ _**What the reader had to work out for himself:** all of it, including the date it starts._',
  '_**And the two sentences I have struck out of the draft:** _this has not been an easy decision_ **and** _I am sure you will appreciate the position we are in_. ⚠ **The second was in the same paragraph as the cost.**_',
]));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  Somebody you will meet again'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Collect the interval and the words.** **The interval is within a fortnight in most cases and the words were nothing** — **because the letter had been written as though the relationship were over, and neither party then knew how to reopen it.** **Two or three students will say that the next meeting was awkward for months.**'));
out.push(A('**b** Names the next occasion: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 is the one the room doubts, and it is the strongest of the two** — **it names the next occasion and tells the reader that the difficulty will recur**, **which is 16.4\'s _one thing that is not an appeal_ written into a bad-news letter.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the formal wall, and false warmth**; and the letter must contain **the next occasion dated, what will be the same, and one thing to do differently.**'));
out.push(A('**b** **1** ⚠ **There are nine shops in his street, and the distributor who gave him four reasons will be selling to all nine next year** — **and he will be asked about them.**   **2** ⚠ **Anything you will have to unsay.** _We shall certainly look at you first next time_ — **if you will not, that is a second piece of bad news with a date on it, and it will be quoted back in September.**'));
out.push(NOTE('⚠ **The arithmetic is what makes this cycle practical rather than sentimental: a letter to somebody you will meet again is read twice** — **once by them, and once by whoever asks them about you.** **Nine shops in one street; fourteen people at one press; a driver at the gate every Thursday.** ⚠ **And the two faults are opposite, which is why both are common: the formal wall and false warmth.** **Both are read as the same thing** — **that the writer does not intend to mention it again** — **and the remedy for both is the same three sentences.**'));
out.push(A('**_What will be the same_ is the part nobody writes and the part that does the work.** ⚠ **A reader who has had bad news assumes everything is now in doubt**, **and the repair is small and checkable:** _the June price stands for the rest of the quarter_ · _the top-up price is the same and so is the queue._ **Small is better than large.** **A reader who has just been refused does not believe a promise about the relationship and does believe a sentence about the price of a top-up.** ⚠ **And the test is the one to set as homework: read the letter imagining the person standing in front of you on Thursday, and strike out every sentence you would not say to their face.** **It is between one and three sentences in most drafts and they are always the warm ones.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(weekly)_ _I shall see you at the gate on Thursday; the June price stands and nothing else changes._',
  '**2** _(yearly)_ _The next round opens in September with the same four criteria._',
  '**3** _(you do not know when)_ _I do not know when we shall next be buying, and I shall write to you when we are rather than keep you on a list._',
  '**4** _(a promise you will have to unsay)_ ⚠ _We shall certainly look at you first next time_ — **and it will be quoted back to you.**',
  '**5** _(one thing, not a list)_ _Send the batch numbers from the production book, not the pallet labels._',
]));
out.push(A('⚠ Item **5** is marked on the count and on the choice: **one thing, and it must be the thing that would have changed this outcome.** **A list of five is a lecture, and a reader who has just been refused reads a lecture as a condition for being forgiven.** Item **3** is the honest form for an uncertain future and it is better than any promise: **_I shall write to you when we are_ is an undertaking; _we shall keep your details_ is a filing arrangement.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Consignment refused; the driver is back on Thursday._',
  '**B** **I shall see your driver at the gate on Thursday.** **The June price stands and so do the single orders.** **One thing for next time: the numbers from the production book.**',
  '**A** _(the ⚠ row)_ _Supplier off the list; they will tender again in September._',
  '**B** ⚠ **I shall not say that we shall look at them first.** **What I shall say is the truth:** _the September tender has the same four criteria, and the batch-number clause will be difficult for you again unless the production book is used._ ⚠ **That is worth more to them than a promise, and it cannot be quoted back at me.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The next occasion, what stays the same, and the one thing. ⚠ **The four ⚠ rows invite a promise about the next round**, **and the pairs must refuse it and give the truth instead.** **Ask the listeners which version they would quote back in September** — **and the promise is quotable and the truth is not, which is the whole of the distinction.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**I shall see you at the tender opening on 1 August.** **The single-order arrangement stands and so does the July price.** **One thing: have the compressor replacement date in the bid, with the invoice.**_ ⚠ _**And I have struck out _we have always valued our dealings with you_, which I would not say at the tender opening.**_',
  '**b** ⚠ _**As a hope, my partner said the decision had been handed to her:** _I do hope we shall still see you on the first_ **invites her to decide whether to come.** **As information it is simply when we shall next meet.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Most bad news in this city goes to somebody you will see again, and Rim’s answer was Thursday: the driver she refuses on Tuesday is at her gate on Thursday with another load. Her letter says nothing about Thursday — it ends we trust this will not affect our future relationship, which is a sentence about a thing she has not described. And there are two faults, which are opposite: the formal wall, a letter written as though the dealings are over, and false warmth, a letter written as though nothing has happened. Both are read as the same thing: that the writer does not intend to mention it again. Omar asked what should be in it, and three things: the next occasion named and dated, what will be the same, and one thing to do differently — one, not a list. Dima asked why what will be the same matters, and because a reader who has had bad news assumes everything is now in doubt: the June price stands for the rest of the quarter is eleven words and stops a fortnight of quiet anxiety you will never hear about. Mazen said there are nine shops in his street, and the distributor who gave him four reasons will be selling to all nine next year and he will be asked about them — which is the arithmetic of the cycle and is not sentimental: a letter to somebody you will meet again is read twice, once by them and once by whoever asks them about you. Bassel asked what must not be in it, and anything you will have to unsay: we shall certainly look at you first next time is, if you will not, a second piece of bad news with a date on it, and it will be quoted back to you in September. Adnan asked about the one thing to do differently, and one, chosen because it would have changed this outcome, because a list of five is a lecture and a reader who has just been refused reads a lecture as a condition for being forgiven. Hiba asked about the test, which is to read it imagining the person standing in front of you on Thursday. And Tareq asked about saying it out loud: the next-occasion sentence as information and not as reassurance.']));
out.push(A('Listener task: the partner\'s three sentences and what they struck out of the draft. ⚠ **The struck-out sentences are the finding and they are always the warm ones** — _we have always valued our dealings_, _I hope this will not affect our good relations_, _please do not take this personally._ **Read six out without names and ask the room which of them anybody would say aloud to the person\'s face.** **The answer is none, and the room will laugh, and the laugh is the point.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We trust this will not affect our future relationship._ → **✓** I shall see you on Thursday.   **✗** _We value your continued custom._ → **✓** the June price stands.   **✗** _We shall look at you first next time._ → **✓** the same four criteria.   **✗** Five things for next time. → **✓** one, the one that mattered.   **✗** The next occasion offered as a hope. → **✓** as information.   **✗** Nothing about what stays the same. → **✓** one small checkable thing.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The board that has gone is the one the distributor stopped supplying in February; he has two left and both are promised to repairs taken in before hers.** **And the placing, which is the cycle:** _that is a fact about my shelf and not about your handset_ — **with the exactness that proves it:** _if I had three, yours would be mended tomorrow._'));
out.push(A('**2** ⚠ **She comes in most Thursdays for the top-ups and nothing about that changes** — **the top-up price is the same and so is the queue.** **And then he uses the occasion:** _ask me then and not on the telephone, because I can show you the board._'));
out.push(A('**3** ⚠ **Bring a handset in the same week it starts cutting out** — **hers had been doing it since April, and in April he had four of those boards.** **And the protection:** _I am not saying that to make you feel foolish; I am saying it because it is the only thing that would have changed this._ **Without that clause the letter ends on the reader\'s mistake.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**A. BARGHOUTI · CONTRACTS** · 30 July · _to the Jaramana works_',
  '**Your tender for the August order is not successful.** ⚠ **The order goes to the Qassaa press and the next tender opens on 1 October.**',
  '**The reason, and it is one.** **The published weighting put the delivery record at half, and your record with us is six of nine on the agreed date.** ⚠ **The Qassaa press is eleven of eleven.** **Price and references were a quarter each and you were ahead on both.**',
  '**What this costs you, as far as I can see.** ⚠ **One order of about four million.** **I do not know what else you have in August and I am not going to guess at it.**',
  '**And October, because you will tender again.** ⚠ **The same four criteria and the same weighting; the delivery record is still half.** **Nothing about the price criterion changes, and you were ahead on it.**',
  '**One thing for October, and it is one.** ⚠ **Three of your three late deliveries were in the fortnight before a public holiday.** **If you will not take holiday-week dates, say so in the bid** — **a tender that declines two weeks of the year scores better than one that misses them.**',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**H. NASSER · FIRST-YEAR OBSERVATION** · 1 August · _to Miss Zein_',
  '**You are not being recommended for the second year on the present evidence.** ⚠ **The reassessment is on 20 September and I shall observe you twice before it, on the 4th and the 11th.**',
  '**The reason, and it is one.** **The published criterion is that every instruction is given once and in the imperative, and in the two lessons I have transcripts of, four of the eleven instructions were questions to the whole class.** ⚠ **Planning and task range both passed, and the planning passed well.**',
  '**What this costs you, as far as I can see.** ⚠ **Six weeks of not knowing, and the September pay point goes to the 1st of October if the reassessment passes.** **I do not know whether you had other posts in view for September and I am not going to guess at it.**',
  '**And the two observations, because you will see me in the room.** ⚠ **Nothing else about the form changes: the weighting is the same and the two criteria you have passed are not reopened.** **I shall sit at the back as before and I shall not interrupt.**',
  '**One thing for the 4th, and it is one.** ⚠ **Write the four instructions you intend to give at the top of the plan, in the imperative.** **Three of the four questions in my transcripts came at moments when you had not planned an instruction at all** — **and that is the only thing that would have changed this.**',
  '**And one thing about my own part in it.** ⚠ **I have transcripts of two lessons out of four, and I have asked you twice for the 21 March recording and not chased it.** **That is mine, and it is why the reassessment is against three lessons and not two.**',
]));
out.push(A('**206 words, the news with the reassessment date in the second sentence, one reason with its figures and the passed criteria named, the cost in weeks and in a pay point with the guess refused, the next occasion with what does not change, one thing chosen because it would have changed the outcome, and the writer\'s own share.** ⚠ **The sentence that earns the band is _three of the four questions came at moments when you had not planned an instruction at all_** — **it converts a criticism into a mechanism the reader can act on by the fourth.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: what stays the same, in small checkable things.** _"the weighting is the same and the two criteria you have passed are not reopened… I shall sit at the back as before and I shall not interrupt."_ ⚠ **Four small things, all checkable on the fourth.** **Mine says _our professional relationship is unaffected_**, which is large, unverifiable, and exactly what a reader in that position does not believe.',
  '**One thing to keep, and why it works.** _"I have asked you twice for the 21 March recording and not chased it."_ **It makes the thin evidence the writer\'s fault and not the reader\'s.**',
  '**Ranking of the slip I was given.** **1** what stays the same **2** the writer\'s own share **3** the one thing, chosen for the outcome **4** the cost with the guess refused _(there, and the pay point is the useful half)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The next-occasion sentence as a hope, and then as information.** **The room says which version left the decision with the reader, and the hope does, every time** — **which is the opposite of what the writer intended.** **And ask the room how soon it will next see the person it wrote to; the usual answer is within a fortnight.** **Finish on Mr Hariri\'s sentence:** **there are nine shops in my street and I shall be asked about them.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I read my draft imagining him in front of me and struck out two sentences.**_',
  '⚠ _**The two:** _we have always had the highest regard for your works_ **and** _I do hope you will not take this as any reflection on yourself._**_',
  '_**Both are warm and I would not say either of them at the tender opening.** ⚠ **What I would say, and have now written, is: the delivery record is half the weighting and it will be half in October.**_',
]));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The whole letter'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The missing part is the alternative in about half and the cost in most of the rest** — **and nobody has ever received a letter with the news missing, because without the news it is not a letter.** **Say that: the two parts that serve the reader are the two that go, and the part that serves the writer never does.**'));
out.push(A('**b** **2** — _news · reason · alternative · cost · next occasion._ ⚠ **5 is the near miss and about a third of any room takes it:** **the cost third, before the alternative.** **It is the one error in the unit that stops a reader mid-letter** — **a cost stated before any remedy reads as a threat, and the paragraph that would have helped is below where they stopped.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **because a cost stated before any remedy reads as a threat**; and the test is to give it to somebody who has had bad news from you before and ask **which paragraph they would have stopped at.**'));
out.push(A('**b** **1** ⚠ **He stopped at the third paragraph of the first version and did not notice that he had stopped** — **he thought he had read it.**   **2** ⚠ **One page, and a bad-news letter is the one document in this book that gets shorter the better it is** — **Mr Tahhan\'s second letter is about a third shorter than his first and contains one thing the first did not: a date the reader could still use.**'));
out.push(NOTE('⚠ **The order of parts three and four is the examinable content of this cycle and it is the only ordering rule in the book that a reader enforces physically: they stop.** **Mr Ayoub stopped at the third paragraph and did not know he had stopped.** **So the test is not _is it clear?_ but _where did you stop?_** ⚠ **And there is no part for an apology, which is deliberate and should be stated plainly.** **An apology for a decision you would take again is not true and the reader can tell.** **Apologise for a thing you did wrong** — _my letter of 11 March put this in the fourth paragraph_ — **and for nothing else.** **A class that has learned the five parts and writes an apology into each of them has produced the letter this unit was written against.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(the news)_ _You are off the supply list for the rest of this year._',
  '**2** _(the reason)_ _Fourteen consignments this year and four refused on batch numbers; the rule is three a quarter._',
  '**3** _(the alternative)_ _Single orders where there is no other supplier; there have been eleven this year._',
  '**4** _(the cost)_ _Six months of about four consignments a month, a little under a third of what you send us._',
  '**5** _(the next occasion)_ _Your driver is at the gate on Thursday with the June order; the June terms stand._',
]));
out.push(A('⚠ Mark the set as a set and not item by item: **read the five aloud in order, and then read them with three and four swapped**, and the room will hear the second version turn into a threat. **The commonest fault in a first attempt is not a missing part but a cost that has drifted upwards**, usually into the reason paragraph — **where it reads as a justification for having been harsh.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _We cannot print the order by 2 April._',
  '**B** **Part 1.** **Right place** — **first sentence.** **Before it: nothing.**',
  '**A** _(the ⚠ row)_ _We very much regret the disappointment this will cause._',
  '**B** ⚠ **That is none of the five parts.** **It is an apology for the decision, and the decision would be taken again.** ⚠ **The repair is to delete it** — **or, if there is something the writer did wrong, to name that instead:** _my letter of 11 March put this news in the fourth paragraph._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are apologies standing where a part should be**, and none of them is any of the five. **The repair is the same in all four: say what you did wrong, or say nothing.** **The last row of each card is the one legitimate apology** — **it names an act of the writer\'s and nothing else.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Five parts, 196 words.**_ ⚠ _**And the order check caught one: my cost paragraph was second, in front of the alternative.** **Moved to fourth, the letter now says what can be done before it says what it costs** — **and the two paragraphs are unchanged.**_',
  '**b** ⚠ _**She read it aloud and her eyes left the page at the end of the reason paragraph**, **which is where I had put _we are a small works_.** **She said afterwards that she had read all of it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The five parts, in order, are the news with its date, the one reason, what is still available, what it costs them, and the next occasion. The one place people go wrong is the cost before the alternative: Bassel had it that way in March and Mr Saqqal stopped reading. It fails because a cost stated before any remedy reads as a threat — the reader has been told what the news will do to them and nothing about what can be done, so they stop, and the paragraph that would have helped them is below where they stopped. Tareq said he was shown the two versions and stopped at the third paragraph of the first one, and did not notice that he had stopped: he thought he had read it. Which is the test for the whole page, in one question — give it to somebody who has had bad news from you before and ask which paragraph they would have stopped at. Not whether it is clear: where they stopped. Omar asked about the length, and one page, and a bad-news letter is the one document in this book that gets shorter the better it is: Bassel’s second letter is about a third shorter than his first and contains one thing the first did not, which is a date the reader could still use. Dima asked whether there is ever a sixth part, and one, where it applies: the true reasons you are refusing to give, which sits with the reason and costs two lines. Rim asked about an apology, for which there is no part, and that is deliberate — an apology for a decision you would take again is not true and the reader can tell, so you apologise for a thing you did wrong and for nothing else. Hiba asked what happens if the news is not your decision, and then you say whose it is in the news sentence and give their reason, not a reason of your own, and the other four parts are still yours. And Mazen asked about reading it aloud: aloud, to somebody who has had bad news from you before, watching where their eyes leave the page.']));
out.push(A('Listener task: the paragraph the partner would have stopped at, and why. ⚠ **Collect the paragraph numbers.** **The place is the end of the paragraph before the alternative in most letters** — **and where a writer has put a plea for themselves, it is the end of that sentence.** **Then one instruction: ask the reader what the alternative was, and write down whether they could say.** **About half cannot, and they are the half who reported reading the whole letter.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** The cost before the alternative. → **✓** after the remedy, never before.   **✗** _We very much regret…_ → **✓** none of the five parts.   **✗** An apology in each part. → **✓** one, for what you did.   **✗** Somebody else\'s reason adopted as yours. → **✓** given as theirs.   **✗** A letter of two pages. → **✓** shorter the better it is.   **✗** _Is it clear?_ → **✓** where did you stop?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The purchasing office\'s, taken on 1 July, reviewed in January** — **and she gives their reason as theirs:** _that is their reason and I am giving it as theirs; I am not adding one of my own._ **One sentence, and it is the difference between carrying a decision and owning it, which is 17.4 inside a letter.**'));
out.push(A('**2** ⚠ **Supply against single orders where there is no other supplier** — **and the figure that makes it an offer rather than a courtesy:** _there have been eleven such orders this year._ **An alternative with a figure is an offer; the same alternative without one is read as the end of the letter.**'));
out.push(A('**3** ⚠ **Come with the driver on Thursday and bring the production book** — **a conversation at a named time, for a named purpose, with a named document.** **It is the one thing a letter cannot do for itself, and it is the only move in the letter that might change the January decision.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**B. TAHHAN · DAR AL-KUTUB PRESS** · 2 August · _to the ministry supply office_',
  '**We are withdrawing from the September tender.** ⚠ **The withdrawal is ours and it is final for September; the January tender we shall bid for, and I shall write on 2 December to say so.**',
  '**The reason, and it is one.** **The tender requires two machines in service throughout and the older machine has been out since 6 March.** ⚠ **The roller is expected but I will not bid on an expectation.**',
  '**What is still open, and it is not the tender.** **We can take overflow work from whoever wins it, on the newer machine**, ⚠ **and we did that twice in 2023 for the works across the river.** **I shall write to the winner myself if you will tell me who it is.**',
  '**What this costs you, as far as I can see.** ⚠ **Three bidders instead of four, and we were the cheapest in 2024 by about six per cent.** **I do not know what the other three will quote and I am not going to guess at it.**',
  '**And December, because you will see this again.** ⚠ **Nothing about our prices changes and the overflow arrangement stands all year.**',
]));
out.push(S('Stage 7 · Write freely (sample, 211 words)'));
out.push(SAMPLE([
  '**N. SABBAGH · ESCALATIONS** · 4 August · _to the eleven of us_',
  '**The weekly escalation meeting ends after the meeting of 28 August.** ⚠ **The decision is mine, it takes effect from September, and I shall review it in February and write to you either way.**',
  '**The reason, and it is one.** **The meeting exists to move one figure** — **the escalations involving a promise recorded nowhere** — **and that figure was thirty-four of forty-one in 2024 and is thirty-four of forty-one now.** ⚠ **Eight afternoons a year for eleven people is about four hundred hours against an unmoved figure.** **It is the figure and not the room: three of you have attended every meeting and the discussion has been better this year than last.**',
  '**What is still open, and it is not the meeting.** **The promise field goes to Mr Kabbani on 20 August with a specification I am writing this week**, ⚠ **and there will be a single meeting in October about nothing but that.** **I shall send the specification to all eleven of you on the 18th and I shall take written comments until the 19th** — **which is two days, and it is all I have.**',
  '**What this costs you, as far as I can see.** ⚠ **Two hours a month back, and the loss of the only room in which the eleven of us are ever in one place.** **Three of you have told me that the meeting is where you find out what the others are doing, and I have no replacement for that.** **I do not know what it will cost the two new officers, who have had nothing else.**',
  '**And September, because we shall all still be here.** ⚠ **The escalation wording stands, the two-line form stands, and I am still the person to come to.** **One thing instead of the meeting: send me the promise line from any escalation you answer in writing, the same day.**',
]));
out.push(A('**211 words, the news with its date and its review date, the reason with its figures and the room explicitly exonerated, an alternative with a date and a two-day limit on comments, the cost including the one she cannot replace and the one she cannot know, and the next occasion with three small things that do not change.** ⚠ **The sentence that earns the band is _I have no replacement for that_** — **a writer who concedes that her decision destroys something she values has written the only kind of bad-news letter that survives being disagreed with.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the cost after the alternative, never before.** _"What is still open… What this costs you…"_ ⚠ **In that order, and the cost paragraph is the fourth of five.** **Mine has the cost second, because I wanted to show I knew what I was asking** — **and my reader stopped there and never reached the alternative.**',
  '**One thing to keep, and why it works.** _"it is the figure and not the room: three of you have attended every meeting"_ **It takes the reason off the people in the second clause**, and the eleven will read the rest without defending themselves.',
  '**Ranking of the slip I was given.** **1** the cost after the alternative **2** the cost she cannot replace, conceded **3** the review date in the news paragraph **4** the next occasion with small things _(three of them, and the easiest part to write)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The partner reads the letter aloud and the writer watches where the eyes leave the page.** **Then the one question: which paragraph would you have stopped at?** **They will not have known they stopped, and the place is nearly always the end of the paragraph before the alternative.** **Ask them afterwards what the alternative was.** **Finish on Mr Ayoub\'s sentence:** **I did not notice that I had stopped. I thought I had read it.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I gave it to the gate supervisor, who has had two refusals from me.**_',
  '⚠ _**He stopped at paragraph three** — **the end of the reason** — **and he could not tell me what the alternative was.**_',
  '_**And he had told me, before I asked, that he had read all of it.** ⚠ **Paragraph three is where I had put _I am sure you will understand the position_, which I have now struck out.**_',
]));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: The writer and the reader of bad news'));
out.push(S('Stage 1 · Get ready – Unit 20 quiz'));
out.push(A('**1** _The order was **cancelled** on 1 July._   **2** _His **liability** for the delay…_   **3** _We regret the **termination** of the contract._   **4** _The **announcement** was made on Tuesday._   **5** _It is a **regrettable** decision…_   **6** _The **compensation** was paid in August._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **The news-first rule serves the person who opens the envelope, and that person is not always the person who decides.** **Mr Saqqal had to take the letter to a committee that reads first paragraphs, and the first paragraph is the news** — **so the order was placed elsewhere on the Tuesday and the nineteenth of April never reached them.** **The one line that would have helped is nine words the first reader could lift:** _we can hold 19 April until Thursday_ — **placed so that it travels with the news rather than after it.**'));
out.push(NOTE('⚠ **This is the cycle where the method is right and the outcome is bad, and the finding is new: everything in Unit 20 is written for the first reader and says nothing about the second.** **A letter cannot be written for a room the writer has never seen** — **he does not know what the committee reads, how it meets, or which of its members will be there** — **and a guess costs the first reader his clarity.** ⚠ **Nor is burying the news the remedy: that undoes 20.1 and returns the first reader to a telephone call at eight in the morning.** **What the writer can supply is one liftable line, and whose decision it is to ask for one is the first reader\'s** — **he is the only person who knows what his committee reads, and he has never asked, because he has never had a letter worth lifting a line out of.** ⚠ **And the two prohibitions: do not bury the news, and do not write the letter to the committee instead of to the man.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7. ⚠ **The three moves are the examinable content, and the third is where the mediator stops: the writer cannot supply it alone.** **What a writer can add to any bad-news letter tomorrow is the line in the Language box:** _if this has to go further than you, the line to take with it is: 19 April, held until Thursday._ **Fourteen words, and it hands the second-reader problem to the one person who can solve it.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What the letter is for.** **Telling one man what has happened and what can still be done, so that he can decide this week.** **It did that; he knew by Tuesday morning.**',
  '**The reader the rule cannot see.** ⚠ **The committee, which reads first paragraphs** — **so the rule that protects the first reader destroys the case of the second.**',
  '**Can the writer supply it?** ⚠ **Not safely.** **He does not know what the committee reads or which of its members will be there, and a letter written for that room costs the first reader his clarity.**',
  '**What he can supply.** ⚠ **One liftable line:** _we can hold 19 April until Thursday_, **placed with the news.**',
  '**Whose decision is it?** ⚠ **Mr Saqqal\'s**, **and he has never asked for it, because he has never had a letter worth lifting a line out of.**',
  '**And Pair B, for contrast.** ⚠ **Not that question: the news is hedged in the first paragraph and buried in the third.** **The remedy is 20.1, today.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair. ⚠ **Pair B is not a second-reader problem:** **a letter whose news is hedged in the first paragraph has failed at the first reader**, and no line about committees will mend it. **Two different faults, two different remedies** — **a question handed to the man who knows his own committee, and a rewritten first sentence today.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The letter:** my refusal of the claim in May._',
  '_**What it is for.** **Telling the claimant that the claim is refused and what would reopen it.** **It did that.**_',
  '⚠ _**The second reader:** her brother, whose name is on the receipt, and who had to be told why a receipt in his name was fatal._',
  '_**Did anybody tell me there was one?** ⚠ **No, and I did not ask.** **She wrote back twice and the second letter was from him, which is when I found out.** **Nine words in my first letter would have saved both.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A letter that does everything the unit teaches, and the order went elsewhere. Asked whether the letter is wrong, Bassel said no — he would write it again, and Mr Saqqal is right as well, which he had not expected. Mr Saqqal’s account in his own words: I had to take it to a committee that reads first paragraphs. And Bassel’s first paragraph says they cannot print it by the second. So the mediation, in three moves: separate what the letter is for from what its reader had to do with it; find the reader the rule cannot see; and say whether the writer can supply it. The letter is for telling one man what has happened and what can still be done so that he can decide this week, and it did that — he knew by Tuesday morning. The reader it cannot see, Rim said, is the committee: they read first paragraphs, and the first paragraph is the news, so the rule that protects the first reader destroys the case of the second. Which is the finding of the cycle and it is new — the news-first rule serves the person who opens the envelope, and the person who opens the envelope is not always the person who decides. And Bassel said that if he buries the news to protect the committee he has undone 20.1, and Mr Saqqal is back to telephoning at eight in the morning. Adnan said what he can supply is one line that can be lifted — we can hold 19 April until Thursday — placed so that it travels with the news, and Mr Saqqal can put those nine words at the top of his own paper. And whose decision that is: Mr Saqqal’s, because he is the only person who knows what his committee reads, and he has never asked for it, because he has never had a letter worth lifting a line out of. Hiba asked what we must not do: two things, the second of which looks helpful — do not bury the news, and do not write the letter to the committee instead of to the man.']));
out.push(A('Listener task: the second reader of the student\'s own last bad-news letter, and whether the writer knew. ⚠ **Almost nobody knew.** **Collect who the second readers turn out to be** — **a committee, a spouse, a works manager, a landlord, somebody\'s father** — **and then one question: how could the writer have found out?** **The answer in most cases is that the first reader would have said, if asked, and nobody asks.** **That is where this cycle stops, and the mediator\'s job is to say so and not to invent a procedure.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Burying the news for the committee. → **✓** that undoes 20.1.   **✗** Writing to the committee. → **✓** write to the man who must act.   **✗** Guessing what the room reads. → **✓** you have never seen it.   **✗** _You are both right._ → **✓** both accounts are accurate, and here is the question.   **✗** Treating Pair B as a second-reader case. → **✓** a hedged first sentence needs 20.1.   **✗** Deciding for the first reader. → **✓** he knows his own committee; ask him.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 6)'));
out.push(A('**1** D   **2** E   **3** G   **4** A   **5** C   **6** B   _(not needed: **F**)_'));
out.push(A('⚠ **Part 6 is cohesion and not comprehension, and in every case one word decides it.** **1 D** — _never reached the fourth paragraph_ answers _the news is in the fourth_ and is answered by _He telephoned…_ **2 E** — _nothing in it is kinder_ follows _begins with the news_ and is answered by _What it adds is a date_. **3 G** — _must come after the remedy_ answers _not a matter of taste_ and is explained by the sentence after it. **4 A** — _no apology for the decision itself_ is answered by _He apologises instead for the letter of the eleventh_. **5 C** — _an offer whose cost is hidden_ is illustrated by the four thousand sheets. **6 B** — _he does not know_ answers _what he cannot do is know everything_ and is costed by _nine words_. ⚠ **F is topically perfect and anchored to nothing on either side**, which is exactly how the examination builds the extra option: **it mentions the relationship, which the text is about, and nothing before or after it refers to a decade.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE LETTER, TWO ACCOUNTS** · R. Shaaban · 6 August',
  '**The letter.** _"The consignment of 22 July is refused. Nine of the fourteen pallets carry no batch number… If the numbers reach me in writing by Thursday noon, the consignment is accepted at the July price… The pallets go back to you on Friday morning."_',
  '**The writer.** _"News first, one reason with its clause, an alternative with an hour on it, both costs, and the last letter named. It is the best refusal I have written."_',
  '**The reader.** _"It is the clearest refusal I have had. And the production book is at the works in Jaramana, and the man who keeps it is on leave until Monday — so Thursday noon was never available to me, and the letter could not have known that."_',
  '⚠ **Both accounts are accurate and neither is about the letter.**',
  '**What the letter is for.** **Letting one man save a consignment in two days.** ⚠ **It did that, for a man with his book in the building.**',
  '**The reader the rule cannot see.** ⚠ **The man who keeps the production book, who is not the man who reads the letter.**',
  '**Can the writer supply it?** **Not safely; she does not know where the book is kept or who keeps it.**',
  '**What she can supply.** ⚠ **One line:** _if the book is not where you are, tell me on Wednesday and I shall ask the store to hold the rack until four._',
  '**And what I am not doing.** ⚠ **Extending every deadline on the chance**, and **writing the letter to the man in Jaramana.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 2: a letter, sample 208 words)'));
out.push(SAMPLE([
  '**Dear Mr Khalil,**',
  '**The evening classes in the works will not run from October.** ⚠ **The last class is on 24 September, and the decision is reviewed in March; I shall write to you on 2 March either way.**',
  '**The reason, and it is one.** **The room we use is the pattern store, and the store is being taken back for stock from 1 October under an instruction of 20 July.** ⚠ **It is the room and not the class: eleven of the fourteen who started in January are still coming, which is better than any evening class we have run.**',
  '**What is still open, and it is not the class.** **The library in Qassaa has a room free on Wednesdays at six** ⚠ **and will let it for about a third of what the materials cost us.** **If eight of you will say by 10 September that you would come to Qassaa, I shall take the room for the autumn in my own name.** **Eight is not a bargaining figure; it is what the rent divides into.**',
  '**What this costs you, as far as I can see.** ⚠ **A bus each way on a Wednesday, and about forty minutes more of your evening.** **I do not know what that is for those of you who come from Jaramana, and I am not going to guess at it.**',
  '**And the works, because we shall all still be here.** ⚠ **The books stay in the cupboard by the time office and anybody may take them.** **The Thursday tea after the late shift goes on as it is.**',
  '**One thing, if you will.** ⚠ **Tell me by the tenth whether you are coming to Qassaa, even if the answer is no** — **because eight is the figure and I cannot count silence.**',
  '**Yours sincerely,**  **B. Tahhan**',
]));
out.push(A('**208 words, inside the 180–220 band, the news with its date and its review date in the first two sentences, one reason with the class explicitly exonerated, an alternative with a date, a figure and the arithmetic behind the figure, the cost in the reader\'s own journey with the guess refused, and the next occasion with two small things that do not change.** ⚠ **The sentence that earns the band is _I cannot count silence_** — **four words that turn a request into a reason**, and the examiner is reading for whether the letter could be sent.'));
out.push(S('Stage ✓ · Unit 20 check'));
out.push(A('**A** **1** a _(cancellation)_   **2** b _(liability)_   **3** a _(termination)_   **4** c _(announcement)_   **5** b _(regrettable)_   **6** c _(compensation)_   **7** a _(finality)_   **8** b _(redundant)_'));
out.push(A('⚠ **Item 5 is the item that separates a class:** **_a regrettable decision_ is the adjective, and a room that has just learned eight abstract nouns reaches for _regret_.** **And the sentence is built to catch it:** _it is a regrettable decision and I would take it again tomorrow_ — **which is also the unit\'s teaching about apology, so the item tests two things at once.** ⚠ **Item 8 is the pair to put beside it:** **_made redundant_ is the adjective and _redundancy_ is the thing** — **and _three posts were made redundancy_ is audibly wrong to a student who reads aloud and invisible to one who does not.**'));
out.push(A('**B  Listening** **1** A   **2** B   **3** C   **4** C   **5** C   **6** A   **7** B'));
out.push(A('⚠ **Item 3 is the one to replay.** **The question is why he will not give _pressure of work_, and two of the three options are things he says elsewhere in the interview** — **but the answer is the one he gives for this: it is a condition, it is permanent, and a permanent reason refuses everything for ever.** **Students choose A because _untrue_ is the word they expect, and he says explicitly that it is true.** ⚠ **Item 5 is the other replay:** **he names three things he had never written, and only one is the answer to _before this year_** — **the cost to the reader.** **Teach the habit of holding the question in mind rather than listening for a match.**'));
out.push(A('**C  Writing** — **marked on the four requirements and on the first sentence.** ⚠ **All four or the content mark goes**, and the commonest loss is the third: **a letter that gives the news, a reason and a cost, and says nothing about what is still available or what would change it, has told the reader to write back.** **An apology for the decision itself loses nothing by the band descriptors and loses the examiner\'s confidence that the letter could be sent.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 20 (sample)'));
out.push(SAMPLE([
  '_**Letter written, 208 words.**_',
  '_**Mediation written, and I have asked the gate supervisor the question he could have answered in May** — **where the production book is kept and who keeps it.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the five parts. **The four-second test.** **I covered the first sentence of my own last three letters and gave them to my brother, and he could say what had happened in one of the three.**_',
]));
out.push(sp());
out.push(box('After Unit 20', [
  '**Unit 21 is specifications and acceptance criteria.** ⚠ **16 wrote criteria that can be failed by people; 21 writes them for things** — **a machine, a consignment, a printed sheet, a building** — **and the arithmetic is harder, because a tolerance can be met and useless.**',
  '⚠ **The connection is 20.1 and 20.3 and should be named on the first day of 21.** **A specification is a bad-news letter written before the news**: **it says in advance what will be refused and on what evidence**, **and every hour spent on it is an hour of refusals that do not have to be written.**',
  '**And two things to carry forward.** ⚠ **22 is proposals, which is 21 turned round: asking somebody to accept your criteria rather than meeting theirs.** **And 24.6 opens the letters the class sealed in B1 24.6** — **the last reminder in this key.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 20 · Answer Key');
