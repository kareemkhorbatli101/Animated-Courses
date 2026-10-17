// Proactive English B2 · Syria Edition · Book 1 · Unit 1 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 1  What We No Longer Have to Explain — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One test runs through the whole unit and it is the only thing to keep on the board: could a reader who was not there act on this?** Not _is it true_, and not _is it clear to me_ — I wrote it, so it is clear to me. Could somebody who has not been in this room, or in this office, do something on the strength of it? Apply that test out loud to every answer in every stage and the unit teaches itself.',
  '**1.1 depends on the four new people and will not run without them.** The eight cannot find their own shared ground: nobody notices the air. If a class has no newcomers, bring one — a colleague, a spouse, the caretaker — and seat them in the room for Stage 3. A class of twelve who were all here in June has a lesson about being brief instead of a lesson about what a reader already has, which is a different and much smaller lesson.',
  '**1.2 is the cycle that reframes the whole year.** Last year the class learnt _formal_ and _informal_ as two settings. This cycle replaces them with **three dials and eight positions**, and the sentence to protect is Ms Huda\'s: _a high register is not politeness and a low one is not rudeness._ Every student who leaves 1.2 still thinking the dials are a politeness scale will write committee English in Unit 2 and believe they are being careful.',
  '⚠ **1.7 asks the class to write an essay they have not been taught, and that is deliberate.** Do not teach it, do not correct it, and do not let a student improve it. It is dated tonight and read again in **3.7**, where the point is the distance travelled. A teacher who marks the 1.7 essay destroys the only measurement Unit 3 has.',
  '**And the distinction the unit turns on**, which is Ms Huda\'s in 1.1: _shared ground is not what you have in common, it is what you can rely on without checking._',
], C.lblue, C.navy));

// ===================== 1.1 =====================
out.push(pb());
out.push(h2('1.1  Four words instead of forty'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — and this is **B2 Speaking Part 1**, run for the first time, so keep it to the exam shape: two questions, two minutes, no follow-up. The eight have one job while the four new people answer, and it is not assessment: **write down the words the speaker left out.** Collect those, not the answers.'));
out.push(A('**b** All five assume something; what matters is **what** and **how recoverable** it is.   **1** _The eleven sites_ — assumes the listener knows which eleven, and that _site_ here means a place of work with machines in it. Recoverable by asking.   **2** _I look after the computers at eleven places of work, about ninety faults a month_ — assumes almost nothing; the one soft place is what _look after_ covers.   **3** _Same as last year, only worse_ — assumes last year\'s figure, which the listener has no way of getting. **Not** recoverable.   **4** _The fourth-night problem_ — the worst of the five: a private name for a thing, which sounds like a technical term and is not. A listener cannot even formulate the question.   **5** _Nineteen of the twenty-two, as you know_ — the phrase _as you know_ does the assuming **out loud**, and the figure has no _of what_. Note which two the class finds hardest to fault: **3** and **4**, because both sound like information.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** — six words, and the four new people are the only reliable test of what the class actually shares.'));
out.push(A('**b** **1** He has never chosen a register: he inherited one, in his first eleven weeks, from a man who retired in 2011.   **2** That _obviously_ tells the reader they ought to have understood already — which is the one thing that stops a reader asking. It does not save a word; it costs a question.'));
out.push(NOTE('The sentence to put on the board is the **distinction**, and it is not the same as the word _shared_: _shared ground is not what you have in common, it is what you can rely on **without checking**._ Hiba is the proof and that is why she is in the cycle — she understood Omar\'s six words, and she should not have, because she has spent two years being told that a third of her own work is repetition. She had the thing in common. She could not have relied on it. A class that leaves 1.1 with _write for your reader_ has learnt a slogan; a class that leaves with the word **checking** has learnt the cycle.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(room)_ _The eleven sites._ → _(stranger)_ _I look after the computers at eleven different places of work for one company._',
  '**2** _(room)_ _The fourth-night problem._ → _(stranger)_ _About a third of the faults come back, because nobody writes down what fixed them the first time._',
  '**3** _(room)_ _Since the move._ → _(stranger)_ _Five years — four in the old building and one since we moved._',
  '**4** _(room)_ _Obviously the log._ → _(stranger)_ _Every fault is supposed to be written in a book. I am asked about that book perhaps forty times a month._',
  '**5** _(room)_ _Ninety._ → _(stranger)_ _About ninety faults a month across all eleven places._',
]));
out.push(A('Read item **4** out and ask what the word _obviously_ bought: nothing, and it cost the listener the question. Then make the class count, in each other\'s short versions, the **figures, dates and names** that had to be put back into the long one. That count is the finding of the whole cycle and it is usually two or three per sentence.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(as you would say it to a colleague)_ _Four of the eleven are still on the old sheet._',
  '**B** I understood **about half** of that, and the part I could not place was **which eleven, and what the old sheet is**.',
  '**A** _(in full)_ _I cover eleven places of work. Each of them records faults on a printed sheet. Four of the eleven are still using the sheet we replaced in March, which has no date field on it._',
  '**B** The piece that mattered was **the date field**. Without it I had built **a story about four places being slow to change paper**, which is not what you are telling me.',
]));
out.push(A('The pairing is fixed — one of the eight with one of the four — and it is the stage, not a seating arrangement. Where a class has formed its pairs from the eight, the listener task returns nothing, because both of them have the air.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight short versions, each with the one piece of missing information beside it. The finding, and it is counted and not asserted: in **six or seven of the eight** the missing piece is **not a technical term** — it is a **quantity, a date or a name**. Jargon is the assumption everybody expects and almost never the one that does the damage.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _(for this room)_ _Four of the eleven are still on the old sheet._ **Eight words.** _(for a stranger)_ _I look after the computers at eleven different places of work. Each of them writes faults on a printed sheet, and four of the eleven are still using the one we replaced in March, which has no date field on it._ **Forty-seven words.**',
  '**b** _My partner said_ obviously the March sheet. _Out it comes, and what has to go in is the date: in March we changed the fault sheet and added a line for the date the fault was first noticed. He said he would never have written that sentence to anybody at the depot, and that is the point — he has never written it to anybody at all._',
]));
out.push(A('**a** The count is the instruction and it is not decoration: most students produce six to nine words for the room and thirty to fifty for the stranger, and the ratio is what they remember.   **b** Also open, and the second half of **b** is the work: it is not enough to delete _obviously_ or _as you know_. Something has to go in — and what goes in is always a figure, a date or a name.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda opened with a letter. Rasha started on the first of February; the record is somebody else\'s to keep now, which is what she asked for and is stranger than she expected. She is not coming back, because the post she spent two years building a case for has taken her evenings — and Ms Huda asked the eight to notice what had happened: the best piece of work in the room last year is the reason its author is not in it. Omar said she got it on the error count, and Ms Huda said on the error count and on a report about the one explanation that damaged her own case. Then she asked Omar what he does, and he said: about a third of my year is doing a thing for the second time. Six words — and in December it took him four evenings to find that sentence. Said again to a man who had never met him it was forty-five words: eleven places of work, about ninety faults a month, most of them the same eleven faults coming back because nobody writes down what fixed them. Both true, and the first only works in that room. Ms Huda told the four new people what they are for, and said it was not a kindness: they are the only reliable test of what this class actually shares, because the eight cannot find it on their own — nobody notices the air. Hiba said she sat in the room for six weeks two years ago, had just understood Omar\'s six words and should not have — and thinks she understood them because thirty per cent of her own work is repetition. Nour said so it was not shared ground at all. And Ms Huda gave the distinction the cycle rests on: shared ground is not what you have in common, it is what you can rely on without checking. Then Adnan said what he does — a clerk in a directorate contracts office, nineteen years — and then the thing everybody was waiting for: he probably did write some of the sentences they spent last year taking apart. Tareq named the second bus notice, and Adnan said not that one, but he would have drafted the paragraph it was copied from. And then the sentence that set up 1.2: in nineteen years he has never once chosen a register — he inherited one, from a man who retired in 2011.']));
out.push(A('The listener task has one answer per student and they belong on the board: **one thing this room assumes that the four new people could not have known.** Expect the eight to offer technical terms first and to need pushing towards the dates.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('Three to write up, and all three are produced by this stage every time it is run.   **✗** _I have read it, and so I did._ → **✓** _…and so have I._ The echo repeats the **auxiliary of the first clause**, not a convenient one.   **✗** _As you know, the eleven sites._ → **✓** _I look after the computers at eleven places of work._ _As you know_ is not shared ground; it is an instruction not to ask.   **✗** _Obviously it is the log._ → **✓** _It is the fault log — the book each site is supposed to write in._ Where _obviously_ comes out, a definition goes in.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because it is written on ground only the eleven stand on, and saying so **protects** it: a reader who was not meant to have the page stops trying to decode it and asks instead. The _not an accident_ is the admission that the page has been aimed, which is the opposite of carelessness.'));
out.push(A('**2** The eleven faults, the ninety a month and the third of the year. He **attaches** it and says he has — _it is attached if you want it; I am not putting it in the body of this one_ — which is the move that lets a page be short without being thin.'));
out.push(A('**3** One thing: a date in the new line, even a guess, with the word _guess_ beside it. A guess he can **identify as a guess** is usable data; an accurate date he cannot distinguish from a guess is not. A request that accepts an imperfect answer gets answered.'));
out.push(NOTE('The line to make the class find in the model is the one nobody writes: _If you are reading this and you do not know what I am referring to, you are not one of the eleven, and you should ask me rather than guess._ **That single sentence is the entire difference between writing economically and writing carelessly**, and it is the one element of this cycle that will transfer to every page a student writes for the rest of the course. If a class produces nine half-pages in Stage 6 and only two contain that line, run Stage 6P again rather than moving on.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**THE SIX DRIVERS ON THE 06.40 · what I am doing differently** · T. Ayoub · 9 September',
  'This is a page for the six of you and nobody else, which is why it is a page and not four.',
  '**What is changing.** From Monday I am writing the actual departure time on the sheet, not the timetabled one. Nothing else about the sheet changes.',
  '**Why, in the shortest form I can manage for you.** The gap. Not the time we leave and not the time we are supposed to leave — the difference, which nobody has ever written down.',
  '**What I am not going to explain again.** The forty questions a morning. You have had that page twice; it is attached.',
  '**And the line that says I have left something out.** I have left out why the 06.40 matters, because all six of you were there in February. If you do not know what I am referring to, you are not one of the six, and you should ask me rather than guess.',
  '**What I need from you, and it is one thing.** The real time, even if it is a guess, with the word _guess_ beside it.',
  '**What I shall have by December.** About seventy gaps, which is enough to know whether it is the bus or the timetable.',
]));
out.push(S('Stage 7 · Write freely (sample, 196 words)'));
out.push(SAMPLE([
  '**THE THREE ON THE AFTERNOON RUN · what I am doing differently this month** · Y. Mansour · 10 September',
  'This is a page for the three of you on the afternoon run and nobody else, which is why it is one page. If it goes to the directorate it will not make sense, and that is deliberate.',
  '**What is changing.** From Monday the bench sheet has one more box on it: _lot number_. Six seconds. Nothing else about the run changes.',
  '**Why, in the shortest form I can manage for you.** The twenty-ninth of October. We could say what had been run and when and we could not say which lot the reagent came from, and the question we were asked was the one question we could not answer.',
  '**What I am not going to explain again.** The eighteen hours and the four telephone calls. All three of you have had that page, and two of you have had it twice. It is attached; it is not in the body of this one.',
  '**And the line that says I have left something out.** I have left out everything about the parallel run, because the three of you were there and the two who disagree with me about it have said so in writing. **If you are reading this and you do not know which run I mean, you are not one of the three, and you should ask me rather than guess.**',
  '**What I need from you, and it is one thing.** The lot number, even if you have to read it off the carton after the run, and the word _carton_ beside it so I know where it came from.',
  '**What I shall have by March.** About four hundred bench sheets with a lot number on them, which is enough to answer that question once.',
]));
out.push(A('180 words or more, same seven moves, on the student\'s own work. Mark **one** thing and it is not the prose: **is the line that admits the omission there, and is it addressed to the wrong reader?** A page that admits the omission to the right reader — _as the six of you know_ — has got the move backwards and will not survive being forwarded.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: the readership named in the first sentence.** You wrote _This is a page for the six of you and nobody else._ Found: it is there, and the words _and nobody else_ are doing the work.',
  '**Criterion: the line that admits the omission.** You wrote _I have left out why the 06.40 matters._ Found: you left out the second half — you say you have left something out but not what the wrong reader should do about it.',
  '**Criterion: one request with the tolerance in it.** You wrote _The real time, even if it is a guess._ Found: the tolerance is there, but you have not asked them to write the word _guess_, so you will not be able to tell the guesses from the times.'
]));
out.push(A('The **B2 band** is the change from last year and it is not negotiable: the criterion is named **and the line is quoted** — the line itself, not a summary of it. A slip that says _your opening is good_ is a B1 slip and should be handed back.'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts. Most pages name their readership once it has been asked for; almost none contain the omission line before today. The sentence to leave the cycle on is about the four new people: they are the only instrument in the room that can measure what the room shares.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave it to my sister-in-law, who is a dressmaker. What she could not place: _the four of you_ — she thought it meant three wards and it means three analysts; _the afternoon run_, which she took to be a journey and not a batch of tests; and _lot number_, which she said sounded like something to do with an auction. Three things, and not one of them is a medical word. My colleague on the morning bench read it in about forty seconds and asked only whether the box meant the carton or the outer. So the stranger found three gaps and the colleague found one, and the three were all names for things rather than names of things.']));
out.push(A('Two readers, and the second one is the data. What the second reader could not place is the student\'s own inventory of shared ground, collected in one evening by somebody else — which is the only way it can be collected.'));

// ===================== 1.2 =====================
out.push(pb());
out.push(h2('1.2  Three dials'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Expect ten of twelve sentences to be inherited and say so before the question is asked, because the admission is the point and embarrassment closes the stage. Nobody chooses a register fresh for every letter; the question is whether they know they have one.'));
out.push(A('**b** **1** the **verb** (_told_ → _informed_).   **2** the **length** (_he is not coming_ → _he will not be attending_) — and note the verb has barely moved.   **3** the **hedge** (_it is wrong_ → _it may not be entirely correct_).   **4** **all three** — and this is the one to stop on: there is now nobody in the sentence.   **5** the **verb and the length**, with the person removed by nominalisation, which is Unit 2 and should be named and left.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** — the verb, the length and the hedge; and there is no such thing as formal and informal.'));
out.push(A('**b** **1** From a man called Abu Wasfi, in his first eleven weeks; exact, kind, completely certain about every comma and unable to say why about any of it.   **2** Not along a politeness scale, and not along one line at all: three dials give **eight** positions, and the ones that go wrong at work are the mixed ones.'));
out.push(NOTE('The arithmetic is the cycle and it should go on the board as arithmetic: **three dials, two positions each, eight combinations.** Then the two that students assume are the only ones — all up and all down — and the six they have never been taught to see. The position Rim arrives at in the model is the one no office teaches: **verb up, hedge off.** A formal verb carrying an unhedged fact. It reads as competent and it can be answered, which is the whole of B2 register control in one sentence.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(refusal)_ _We cannot do that._ → **verb up only**: _We are unable to do that._ → **and length up**: _We are unable to accede to that request._ → **and hedge up**: _We are not in a position to accede to that request at this time._ Four words to eighteen, and the last one cannot be answered.',
  '**2** _(request)_ _Send it back._ → **verb up**: _Please return it._ → **length up**: _Please return it to the address below._',
  '**3** _(correction)_ _Your figures are wrong._ → **hedge up only**: _Your figures may not be entirely right._ → **verb up, hedge off**: _Your figures are incorrect in three places, which I have marked._',
  '**4** _(bad news)_ _Nobody has looked at it._ → **verb up, hedge off**: _It has not yet been examined._ → and note what the passive has taken out, which is Unit 2.',
  '**5** _(thank-you)_ _Thanks for sorting that._ → **verb up**: _Thank you for resolving that._ → **all three up**: _Your assistance in this matter is appreciated._ — and ask who is being thanked by the third one. Nobody.',
]));
out.push(A('Item **3** is the one to read out, because the second move is the useful one and students do not find it alone: taking the hedge **off** while the verb goes **up** is the position that reads as competence rather than as either rudeness or evasion.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _We cannot do that._',
  '**B** _(dial: the verb)_ _We are unable to do that._',
  '**A** _(dial: the length)_ _We are unable to do that within the period you have asked for._',
  '**B** That has lost **nothing** and gained **a reason a reader can argue with**. I would send the **second** one, because the first sounds like a door and the third invites a negotiation I have not been authorised to have.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight final versions with their dial positions marked, and then the count that matters: **how many of the eight would the listener actually send?** It is two or three, and almost every one of them has **the verb up and the hedge down**.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My sentence was_ "Attendance was effected and remedial action was taken." _All three dials are up: the verb is_ effected, _the sentence runs to eleven words for two facts, and there is no agent in it at all. I did not choose it. I inherited it from a man called Walid Sakkal who trained me in 2018 and who had it from the form itself._',
  '**b** _My partner moved the verb down only:_ "I attended and I fixed it." _What a reader can now do that they could not before: ask me what was wrong with it. The old version gave them nothing to ask about, which is why nobody ever asked, which is why the fault log has been useless for five years._',
]));
out.push(A('**a** _By name if you can_ is load-bearing: a student who can name the person they inherited their register from stops treating it as the way letters are. **b** Open. The test of **b** is the second half — _what a reader could now do that they could not do before_ — which rules out answers of the form _it sounds friendlier_.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Adnan said again what he had said at the end of the first cycle: in nineteen years he has never chosen a register, he inherited one, from a man called Abu Wasfi who retired in 2011. Lubna asked what he was like, and Adnan said exact, kind, and unable to say why about any of it: he asked once why they write "it has been decided" and was told that that is the form. So Ms Huda took it apart into three things that move separately: the verb, the length, the hedge. Nour said they move one at a time, and Ms Huda said that is the whole lesson: there is no formal and informal, only eight positions from three dials, and the ones that go wrong at work are the mixed ones. Then Rim brought a sentence. She refuses deliveries, about two a month, on the template she was given when she started: we regret to advise that the consignment has been found not to conform. She has sent it about ninety times, all three dials up, and what she noticed three months ago is that nobody ever argues with it — which she had been taking as evidence that it works. Jad asked whether it is not, and she said it is evidence that nobody can get hold of it: twice this year a supplier has telephoned to ask what the letter meant, and both times the answer was nine words — four pallets were eleven degrees over on arrival and I am sending them back. Had she written the nine words they would have argued, and got somewhere in March instead of June. Adnan said that is exactly his office. And Ms Huda gave the point of the dials: a high register is not politeness and a low one is not rudeness. All three up removes the person: nobody to answer and nothing to answer about. All three down puts a person in and gives them something to disagree with — which feels riskier and is how anything is settled.']));
out.push(A('Listener task: one line per student — the single clause they will change, with its two dial positions.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We regret to advise that the consignment was eleven degrees over, which may possibly not conform._ → **✓** _…was eleven degrees above the specified maximum on arrival and is accordingly being returned._ A figure with a hedge in front of it is worse than no figure: it reads as a figure the writer does not trust.   **✗** _I regret to advise you that the thing is a bit of a mess._ → **✓** either _I regret to advise you of a serious irregularity_ or _I am afraid this is a mess_ — but not one of each.   **✗** _Frankly, we are not in a position to accede to your request at this time._ → **✓** _Frankly, we cannot do it._ A stance adverb in front of an agentless sentence promises a candour the sentence then withholds.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Fifty-two words against thirty-nine. The sentence that has ever got her anywhere is the last one of the telephone version: _if you can tell me where they stood on Monday night I can tell you whether it is you or the lorry._ It is the only sentence that offers the supplier something to do.'));
out.push(A('**2** No figure and no date she could be **wrong** about. It matters because unfalsifiable is not the same as safe: _not conforming_ cannot be argued with, which means it cannot be answered, which means nothing gets fixed. _Eleven degrees_ could be wrong, and that is what makes it useful.'));
out.push(A('**3** She is changing **one clause** in the letters she signs — the figure goes in. She is **not** rewriting the template, because it is not hers and fourteen people use it. In six months she will look for **a reply she would not otherwise have had**.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**THE SITE REPORT, TWICE** · O. Darwish · 11 September',
  '**The version I have sent about two hundred times.** _"Attendance was effected and the reported fault was found to be as described, remedial action being taken."_ Seventeen words.',
  '**What I say when somebody asks what it meant.** _"I went, it was broken the way they said, I fixed it."_ Twelve words, and the sentence that has ever got me anywhere is the third clause, because it is the only one anybody can disagree with.',
  '**The dials, honestly.** The first has the verb up, the length up and no person in it. The second has all three down. And the thing I had not noticed is that the first contains **no fault and no action I could be wrong about**.',
  '**What the first version is actually for.** It is for the file, and for a manager who reads ninety of them and needs them all to look the same.',
  '**What I am going to send from Monday, and it is one dial and not three.** _"Attendance 11 September. The fault was as reported — the fan had seized — and the fan was replaced."_ Twenty-one words. Verb up, hedge off.',
  '**What I am not doing.** I am not changing the form. It is not mine; about thirty people use it.',
  '**And the thing I should put on the record about myself.** I have written _remedial action being taken_ for five years and I could not have told you who takes it.',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**THE REFUSAL NOTE, TWICE** · A. Barghouti · 11 September',
  '**The version I have sent about four hundred times.** _"We regret to inform you that your application has been unsuccessful on this occasion and we are unable to enter into further correspondence regarding the matter."_ Twenty-eight words.',
  '**What I say when somebody telephones to ask what it meant.** _"You were nine months short on the service requirement. If you apply again in July you will not be."_ Nineteen words, and the second sentence is the one that has ever got anybody anywhere.',
  '**The dials, honestly.** The first has the verb up, the length up and the hedge welded on. The second has all three down. And the thing I had not noticed until I set them side by side is that the first contains **no figure and no date I could be wrong about** — and therefore nothing anybody can act on. _Nine months short_ could be wrong. _Unsuccessful on this occasion_ cannot.',
  '**What the first version is actually for.** It is for the eleven of us who sign them, and it is for the file, and it protects us from a conversation we are not trained to have.',
  '**What I am going to send from Monday, and it is one dial and not three.** The office sentence with the figure in it: _"We regret to inform you that your application was nine months short of the service requirement and was accordingly unsuccessful."_ Verb up, length up, hedge off.',
  '**What I am not doing.** I am not rewriting the form. Eleven people use it and one of them has used it since 2014.',
  '**And the thing I should put on the record about myself.** In four hundred letters I have never once given a figure, and I have never once been asked for one in writing. I took the silence for agreement.',
]));
out.push(A('180 words or more. Mark **one** thing: are the two versions **quoted in full and counted**? A page that says _the template is too formal_ instead of printing it and counting it has replaced evidence with taste, and every later move in the page then rests on an opinion.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: both versions quoted and counted.** You wrote _"Attendance was effected…" Seventeen words._ Found: both are there with their counts, and the counts are doing the arguing for you.',
  '**Criterion: the dials named one at a time.** You wrote _The first has the verb up, the length up and no person in it._ Found: three dials in one sentence, which is the thing the cycle asks you not to do — name them separately and the reader can follow which one you are moving.',
  '**Criterion: one clause changed and not the document.** You wrote _I am not changing the form._ Found: clear, and the figure _about thirty people use it_ is what makes it read as judgement rather than timidity.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('The sentence to leave on is Rim\'s and not the teacher\'s: **"nobody argues with it" is not evidence that a letter works.** It is the only evidence most people ever collect by accident, and it points the wrong way.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Sent on 14 September, one clause changed: the figure went in where _on this occasion_ had been. Reply on 19 September, which has never happened — four lines asking whether the nine months counted the secondment. It does not, and I was able to say so in one sentence. The old version would have produced nothing, and I would have recorded that as a letter that worked.']));
out.push(A('One letter, one clause, one date — and the instruction that the student will not know for weeks is deliberate. The reply they are looking for is one they would not otherwise have had, and the absence of a reply is also data.'));

// ===================== 1.3 =====================
out.push(pb());
out.push(h2('1.3  Frankly, at the front'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Three positions on the board, and one question each: at the **front** it warns, in the **middle** it attaches to the word after it, at the **end** it comments on a sentence the reader has already finished.'));
out.push(A('**b** **1** _frankly_   **2** _admittedly_   **3** _arguably_   **4** _to be fair_   **5** _presumably_. The pair the class will confuse is **1** and **4**: _frankly_ warns about your own bluntness, _to be fair_ concedes a point to the other side. Used the wrong way round a letter reads as sarcasm, and the writer never finds out why.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — sub-editing; taking other people\'s stance adverbs out.'));
out.push(A('**b** **1** About ninety a month, mostly _arguably_, and in the copy she gets it almost never means _this can be argued for_ — it means _I would like credit for the claim and not the burden of it_.   **2** In writing they take **commas**: _frankly, …_ · _…, frankly, …_ · _…, frankly._ The medial pair is what tells a reader which word the adverb is leaning on, so the commas are grammar and not decoration.'));
out.push(NOTE('The figure to leave on the board is **four of forty-one**, and the teaching point is that Dima is not asking anybody to stop using the word. Four of the forty-one were doing the real job. The instruction is a **rate**, not abstinence — and a note that asks for a rate gets followed, where a note that asks for abstinence gets ignored and resented. Note too what Dima offers in place of the adverb: a figure, a source, or the words _in most cases_. **A hedge made of evidence cannot be taken out by a sub-editor**, which is the practical reason to prefer it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _frankly_ — _Frankly, the figures were late._ (warning) · _The figures were, frankly, late._ (blunt specifically about **late**) · _The figures were late, frankly._ (afterthought)',
  '**2** _admittedly_ — _Admittedly, we were asked twice._ (conceding before the reader raises it) · _We were, admittedly, asked twice._ (conceding only the asking)',
  '**3** _arguably_ — _Arguably the shortage is a distribution problem._ (claim without burden) → repaired: _Of the eleven pharmacies contacted, nine had been offered stock in the same week._',
  '**4** _to be fair_ — _To be fair, the sheet was changed in March._ (a point for the other side) — and not interchangeable with _frankly_.',
  '**5** _presumably_ — _Presumably nobody told the yard._ (an inference the writer is prepared to be wrong about; the only one of the five that invites correction)',
]));
out.push(A('Item **3** is the whole cycle: run the four-second test on it in front of the class. Take _arguably_ out and the sentence is too strong to print — so a hedge **was** needed, and that was the wrong one.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The figures were late._',
  '**B** _Frankly, the figures were late._ — I have just promised **that something unwelcome is coming and that I am taking responsibility for saying it**.',
  '**A** _The figures were, frankly, late._ — Now it leans on **late**, and nothing else in the sentence is being called blunt.',
  '**B** I would print the **medial** one, because the front version warns about the whole sentence and the only hard word in it is _late_.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight medial versions with the word each adverb leans on underlined; then Dima\'s test on all sixteen. Usually **nine or ten of sixteen** are exactly as printable without the adverb — and those nine are the ones where it was standing in front of the writer.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The uncomfortable true sentence:_ "Half of what I check has already been signed for." _(front)_ **Frankly, half of what I check has already been signed for.** _(middle)_ **Half of what I check has, frankly, already been signed for.** _(end)_ **Half of what I check has already been signed for, frankly.** _I would use the medial one, and to the storeman, because the only hard word in it is_ already _and the front version warns him about the whole sentence._',
  '**b** _I took the adverb out of my partner\'s best version and the sentence survived exactly. So the adverb was not hedging anything: it was standing in front of her while she said a thing she did not want to be the one to say. What she needed instead was the figure — eleven of the nineteen._',
]));
out.push(A('The second half of **b** is the stage: a student who removes _arguably_ must say what goes in — a figure, a source, or _in most cases_ — or the sentence is simply now too strong.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Dima sub-edits a bulletin for pharmacists — twelve pages a fortnight, nine contributors, none of them writers — and the thing she does most is take out stance adverbs. Mostly "arguably": about ninety a month, and she has started counting them. The reason is not that it is a bad word but that in the copy she gets it almost never means "this can be argued for"; it means "I would like credit for the claim and not the burden of it". Yara asked whether she can tell the difference, and Dima said there is a test and it takes four seconds: take the adverb out. If the sentence is now too strong to print, the writer needed a hedge and that was the wrong one — they needed a figure, or a source, or "in most cases". If the sentence is exactly as printable without it, the adverb was doing nothing except standing in front of the writer. Mazen asked about "frankly", and she said she usually leaves it, because it does a real job — but the position matters more than the word. At the front it is a warning. In the middle it attaches to the word after it, so what is blunt is specifically "late". At the end it is an afterthought and sounds like one, because the reader has already finished the sentence. Omar said so the front is strongest, and Ms Huda said the strongest and the most expensive, which is the pair of facts to hold: it frames everything after it, and if the sentence turns out to be unimportant you have spent a warning on nothing. Hiba said that is what her assessors wrote on her second observation — "position not controlled" — and she did not know what it meant for a year. Ms Huda said it meant she was putting them at the end, which everybody does, because in speech the end is where you notice that you need one. And Dima said there are none at all in the copy she gets, and there should be about one in four paragraphs: a page with no stance in it is not neutral, it just does not say who is standing where.']));
out.push(A('Listener task: one adverb each student has taken out, with the evidence that replaced it. Where a student offers no replacement, the sentence is now simply too strong, and that is the finding.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Frankly the figures were late._ → **✓** _Frankly, the figures were late._ The comma is not optional at the front.   **✗** _The figures were frankly, late._ → **✓** _The figures were, frankly, late._ Medial takes a **pair**; one comma leaves the reader unable to tell which word it leans on.   **✗** _Arguably, of the eleven pharmacies nine had been offered stock in the same week._ → **✓** the figure without the adverb. A hedge in front of evidence cancels the evidence.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Forty-one times across six issues, about seven times a page — and in **four** of the forty-one it was doing its real job.'));
out.push(A('**2** The quoted sentence wanted **the figure that was already in the writer\'s own third paragraph**: _of the eleven pharmacies contacted, nine had been offered stock in the same week._ The hedge the writer needed was made of evidence and they already had it.'));
out.push(A('**3** She admits she has never written to the nine about it in two years — she has simply been deleting it. The cost is that nine people have gone on writing the same sentence, getting clean pages back, with no way of knowing.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**TO THE FOUR CLERKS · about one word** · A. Barghouti · 12 September',
  'This is about one word and it is not a complaint. I have taken it out of your drafts for about a year without telling you, which is my fault.',
  '**The word.** _Possibly._ In the last forty files it appears thirty-one times, about once a page.',
  '**What it is supposed to mean.** That something is uncertain — and in **six** of the thirty-one that is what it was doing.',
  '**What it means in the other twenty-five.** That the writer does not want to be held to the sentence. I have done it myself in this note once and taken it out.',
  '**The test, which takes four seconds.** Take the word out. If the sentence is now too strong, you needed a date or a file number, not _possibly_.',
  '**One of them, with no name.** _"The file was possibly transferred in March."_ Out it comes: _the file was transferred in March_. What the sentence wanted was _the transfer sheet is dated 14 March and is unsigned_.',
  '**What I am asking for, and it is not that you stop.** Six of thirty-one is a reasonable rate, and I should be taking out twenty-five fewer.',
  '**And one thing that is mine to admit.** A year of silent deleting, and not one line to any of you.',
]));
out.push(S('Stage 7 · Write freely (sample, 191 words)'));
out.push(SAMPLE([
  '**TO THE SIX DRIVERS · about one phrase** · T. Ayoub · 12 September',
  'This is about one phrase and it is not a complaint. I have been taking it off the sheets for about eighteen months without telling any of you, which is my fault and not yours.',
  '**The phrase.** _As far as I could see._ In the last ninety sheets it appears sixty-two times, which is about two sheets in three.',
  '**What it is supposed to mean.** That the driver could not get a clear view and is telling me so — and in **nine** of the sixty-two that is exactly what it was doing, and those nine were useful.',
  '**What it means in the other fifty-three.** That the driver would rather not be held to the sentence. I do not say that unkindly: I have written it twice on my own sheets this year and taken both out.',
  '**The test, which takes four seconds.** Take the phrase out and read the line. If it is now too strong, you needed a hedge — but the one you needed was a **place** or a **time**, not a phrase about your eyesight.',
  '**One of them, with no name.** _"The stop was empty as far as I could see."_ Out it comes: _the stop was empty_ — which is too strong, and the driver was right to feel it. What the line wanted was _I could see the near shelter and not the far one._',
  '**What I am asking for, and it is not that you stop.** Nine of sixty-two is a reasonable rate. Where you cannot see, say which part you could not see.',
  '**And one thing that is mine to admit.** Eighteen months of quiet deleting, and not one line to any of you about it.',
]));
out.push(A('180 words or more. Mark **one** thing: **is the writer in the charge?** A note about a habit that does not include the writer reads as a correction and is answered defensively; one sentence of self-inclusion converts it into an observation the readers can act on without losing face.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: the word counted, with a rate per page.** You wrote _thirty-one times, about once a page._ Found: both figures, and the rate is what makes the count mean anything.',
  '**Criterion: yourself included in the charge.** You wrote _I have done it myself in this note once and taken it out._ Found: present, and in one sentence, which is the right length for it.',
  '**Criterion: a rate asked for rather than abstinence.** You wrote _Six of thirty-one is a reasonable rate._ Found: there — but you have not said what to put in instead, so the four clerks will simply delete and leave the sentences too strong.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Run the four-second test out loud on the sentence each student was proudest of. Most find the sentence survives — uncomfortable for ten seconds and useful for two years.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['A report I wrote in May 2024, two pages. Stance adverbs: fourteen. At the end of their sentence: eleven of the fourteen. I had not noticed one of them and I would have said there were none. The three that were not at the end are the three I now think were doing a job.']));
out.push(A('A page written **before this course**, with two figures: how many stance adverbs, and how many of them at the end. The second figure is the one that surprises people, because in speech the end is where you notice you need one.'));

// ===================== 1.4 =====================
out.push(pb());
out.push(h2('1.4  Two seconds, not the name'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Eleven questions, two seconds each, nobody naming anything. The four new people go first because they have no reason to expect the stage to be about grammar.'));
out.push(A('**b** **1** finished or not   **2** when (and whether it was in progress)   **3** how long   **4** finished or not, before another past event   **5** when, by a future date   **6** **how long**, before another past event — and this is the form the class reached for last year and could not make.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** — "range not demonstrated"; she was answering every question in the present perfect.'));
out.push(A('**b** **1** Her form did not **move** when the question moved. Not that it was wrong — that it did not change.   **2** Because no other tense in the language asks about a stretch of time **before** another past event, and the answer to it is often not a figure but a name.'));
out.push(NOTE('The three words to write on the board are **range not demonstrated**, and under them the correction most teachers need: the assessor was not listening for accuracy. Hiba\'s every sentence was correct. A listener cannot tell a person with one reliable form from a person who has not understood the question — which is why **two seconds** is the instrument and not a game. At two seconds you answer with whatever your mouth reaches for, and that is your default form. Nobody can hear their own; Hiba heard hers in a trainee. Expect to hear, in a first run, that about **half** of twenty-four answers moved, and that the half that did not sit in **one form per speaker**.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Have you done it?_ → _I have, this morning._ (finished, no time said)',
  '**2** _Were you doing it when he came in?_ → _I was — I had about four left._ (in progress, interrupted)',
  '**3** _How long have you been doing it?_ → _About two years, on and off._ (still going on)',
  '**4** _Had you done it before the meeting?_ → _I had, the night before._ (finished before a past point)',
  '**5** _How long had it been running before anybody looked?_ → _Five weeks, maybe six — you would have to ask Suheil._ (a stretch before a past event, answered with a name)',
]));
out.push(A('Item **5** is the cycle. The form buys a question nothing else in the language asks, and the honest answer to it is frequently a **name** rather than a figure — which is a better answer and nobody expects it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** How long **had the sheet been going out unsigned** before **anybody checked**?',
  '**B** About four months.',
  '**A** Moved.',
  '**A** And have you **had one back signed** since?',
  '**B** Two, last week.',
  '**A** Moved — and that is two in a row, which is unusual.',
]));
out.push(A('A is scoring **movement only** and must not comment on accuracy. The moment a pair starts correcting each other\'s tenses the stage has become a grammar exercise and stops measuring anything.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The **default form** of each of the four speakers, and then the count: of twenty-four answers, how many moved? About half. A speaker whose twelve answers are in twelve forms does not exist; a speaker whose twelve are in two forms is normal, and that is worth saying out loud to a class that has just discovered it has a default.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My default is the present perfect, and what it costs me is that I sound the same answering four different questions. The gap question I asked my partner:_ "How long had the sheet been going out unsigned before anybody checked?" _She took about a second and said_ "about four months, and it was my signature that was missing." _That moved, and the honest answer had a person in it._',
  '**b** _The question I have given her to carry away is_ "What had you been doing before the inspection started?" — _because she has no continuous form at all and that question cannot be answered without one. Mine is_ "How long will you have been doing it by June?" — _a form I have never once produced._',
]));
out.push(A('The watch is not optional: the stage measures what the mouth reaches for and three seconds is enough time to think, which defeats it.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Eleven questions, two seconds each, nobody naming anything — and Ms Huda said she takes the names off for a reason. Hiba has been assessed on exactly this: second observation, November of her first year, three words — "range not demonstrated" — which she spent a year not understanding. Jad asked what it meant, and she said she answered every question in the present perfect. Asked what she had been doing before the lesson, she said "I have prepared the materials"; asked how long, she said "I have taught for two years". It was accurate — every sentence correct, and the accuracy was the problem: she had one form that is never wrong and she used it for everything. Nour said that is her with the simple forms, and that she has no continuous form at all. Hiba said then she is ahead of where Hiba was, because she found it herself: Hiba had to be told by a woman with a clipboard who did not explain it and probably could not have. She worked it out in her second year watching a trainee: the assessor was listening for whether the form changed when the question changed. Not whether it was right. Whether it moved. And that is why the names come off: reading a map and walking a road are not the same skill, and the difference is two seconds — at two seconds you answer with whatever form your mouth reaches for. Omar said his is the past simple; Mazen said the present perfect, like Hiba\'s; Adnan said the passive, and that he does not think it is a tense. Ms Huda said it is not, and that it is the most interesting answer in the room, and it is Unit 2. Then the one form she wanted to hear: the gap question. Omar asked a site manager in January how long the machine had been doing that before anybody reported it, and the man said he would have to ask Suheil, who was on it in September — and Suheil said five weeks, maybe six. So the answer was not a figure and not a shrug: it was a name.']));
out.push(A('Adnan\'s answer — the passive, and he does not think it is a tense — is correct on both counts and is the hinge into Unit 2. Name it; do not teach it.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _How long it had been doing that before anybody reported it?_ → **✓** _How long **had it been** doing that…?_ The question has no inversion, which is what happens when a speaker assembles the form instead of reaching for it.   **✗** _How long has it been doing that before anybody reported it?_ → **✓** _had it been_. A past reference point requires the past perfect; the present perfect leaves the sentence pointing nowhere.   **✗** _I have prepared the materials_ in answer to _what had you been doing before the lesson?_ → **✓** _I had been going through the materials._ Accurate, and the wrong form — which is exactly the fault the cycle is about.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That her English was too simple. She spent four months learning the names of things and can still recite them; it did nothing, because the names were never the problem.'));
out.push(A('**2** In her second year, watching a trainee for forty minutes, she heard it and knew within four questions. She could hear it there and not in herself because you cannot hear your own default — it sounds like you.'));
out.push(A('**3** _"Answers are accurate and all in one form. Ask her a question about a stretch of time before another past event and listen to what she reaches for."_ Twenty-six words — and the box says three because nobody has that much room, which is why the page is a complaint about a **form** and not about an assessor.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**ONE LINE ON A STAFF REPORT** · R. Shaaban · 13 September · for whoever gets it next',
  'Somebody will write four words about your work and you will not understand them. This is about mine, and I can save you the year it took.',
  '**What they wrote.** _"Correspondence lacks personal authority."_ 2019, annual report, in the box with nothing else in it.',
  '**What I thought it meant.** That I was not senior enough to be believed, and I spent a year signing with my full title. It did nothing.',
  '**What it actually meant.** Every letter I sent was in the office template. Every sentence was correct. **The accuracy was the problem**: there was no person in any of them, so there was no authority to lack.',
  '**How I found out, which was not from the reviewer.** A supplier telephoned and asked who had written the letter — a thing you hear at once in somebody else and never in yourself.',
  '**What I would have wanted instead.** _"Her letters are the office\'s and not hers. Ask her to sign one sentence of her own."_ Sixteen words. Nobody has that much room, which is why the box said four.',
  '**What to do about it, and it is not studying.** Put one clause of your own in one letter a week and keep the replies. It takes a minute.',
  '**And the thing I shall say about myself.** I was the most correct writer in that office and I was marked down on the one thing correctness cannot reach.',
]));
out.push(S('Stage 7 · Write freely (sample, 198 words)'));
out.push(SAMPLE([
  '**FOUR WORDS IN A MARGIN** · D. Khoury · 13 September · for whoever is given my desk',
  'Somebody will write three or four words about your work and you will not understand them. This is about mine, and I can save you the two years it took me.',
  '**What they wrote.** _"Copy reads as yours."_ March 2023, in the margin of a proof, in pencil, with nothing else on the page.',
  '**What I thought it meant.** That my editing was heavy-handed, and I spent a year taking out less. It did nothing, because the amount was never the problem.',
  '**What it actually meant.** I had been rewriting every contributor into the same four sentence shapes. Every sentence was better than the one it replaced. **The accuracy was the problem**: nine people were going out over nine names in one voice, and a reader cannot tell nine writers in one voice from one writer pretending to be nine.',
  '**How I found out, which was not from the editor.** I read a bulletin from another office and knew within two pages that one person had been through all of it — a thing you hear at once in somebody else and never in yourself.',
  '**What I would have wanted written instead.** _"All nine contributors now sound like you. Leave one sentence of each writer\'s own shape in, even where yours is better."_ Twenty-two words. Nobody has that much room in a margin, which is why the margin said four.',
  '**What to do about it, and it is not studying.** Give somebody four proofs with the names off and ask them how many writers they can hear. It takes five minutes and you cannot do it yourself.',
  '**And the thing I shall say about myself.** I was the most careful sub-editor in that office and I was marked down on the one thing care cannot reach.',
]));
out.push(A('180 words or more. Mark **one** thing: **is the remedy four minutes long and done by somebody else?** A page that ends in a course of study has described a problem and prescribed nothing, because a remedy nobody begins is not a remedy.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: the verdict quoted exactly, with where it was written.** You wrote _"Correspondence lacks personal authority." 2019, annual report, in the box with nothing else in it._ Found: both, and the position is doing real work — a comment with nothing beside it is one there was no room for.',
  '**Criterion: the wrong reading and what it cost.** You wrote _I spent a year signing with my full title._ Found: the cost is there and it is priced in time, which is the unit that persuades.',
  '**Criterion: a remedy that takes minutes and needs one other person.** You wrote _keep the replies._ Found: the minutes are there but the other person is not — you can do this entirely alone, which means you will not find out what you cannot hear.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student says their default form once, out loud, and then stops talking about it. The thing to carry out of the cycle is that the person who finally explained Hiba\'s three words to her was a trainee doing the same thing in front of her — and that every student in the room will be that trainee for somebody this year.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Twelve questions from my brother on Thursday evening. Moved: five. Did not move: seven, and all seven were the present perfect — including the two questions that were about a stretch of time before a past event, which is the form I apparently do not have at all. He said he could hear it by about the fourth answer and could not have told me what was wrong with it.']));
out.push(A('Twelve fast questions from one other person, who says only _moved_ or _did not move_. Two figures back: how many moved, and which form the rest were in. The second figure is the useful one.'));

// ===================== 1.5 =====================
out.push(pb());
out.push(h2('1.5  The answer that sounded rehearsed'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and nobody will be able to say when they last changed a word of their formula. That is the diagnosis and not a failure; say so, or the stage turns into an apology.'));
out.push(A('**b** **1** the **verb** (voice — _accepted_ → _were accepted_, and the person has gone)   **2** the **clause type** (a _because_ clause becomes a cleft subject)   **3** the **verb** (lexical, same shape)   **4** the **clause type and the subject together** — two moves, and the sentence now says something slightly different   **5** the **subject**, replaced by a document. Ask of **5** what has been gained: a date and a file, and the loss of the speaker.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** — eleven minutes and he got the specification; in September the same question was asked again and his answer sounded rehearsed.'));
out.push(A('**b** **1** Nine drafts, fourteen months of chasing, eleven minutes in the room.   **2** It was right in January and it is still right. What changed is that it had been said about three hundred times and had stopped being a sentence.'));
out.push(NOTE('This is the cycle that contradicts the instinct a careful class has spent a year building, so give it the sentence straight: **perfect is one of the ways a sentence stops being heard.** Mazen\'s nine drafts got him the specification in January **and** killed the sentence by September, and both halves are true at once. The move is not a new answer — a man who arrives with a new answer to an old question has either been caught out or is managing somebody. The move is **one content, many sentences**, and the element most worth moving is the **clause type**, because moving it forces the speaker to look at their own content while they are saying it. Moving the verb is cheap and almost nobody notices it, including the speaker.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(the verb)_ _I accepted them because I wanted them._ → _I took them because I wanted them._ Cheapest move; nothing has been reconsidered.',
  '**2** _(the subject)_ → _The four units were accepted because they were wanted._ The person has gone, and with him the reason anybody should believe it.',
  '**3** _(the clause type)_ → _Wanting them is why I accepted them, and it is the whole reason._ The wanting is now at the front, where the speaker has to look at it.',
  '**4** _(the verb and the subject)_ → _The decision to take them was mine and it was not a technical one._ Two moves, and a different and more exposed claim.',
  '**5** _(all three)_ → _What settled it was that I wanted them._ — and then say whether you still agree with it. Most students find they do; some find they have just committed to something they did not mean, which is the point of the instruction.',
]));
out.push(A('Item **3** against item **1** is the stage: identical content, and only one of them makes the speaker think. Ask which of the five the class would be willing to say to the man in the room, and why it is not **2**.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B** Why did you do it that way?',
  '**A** _(the formula)_ _Because it was the only way to get the specification out of them._',
  '**B** _(again)_ Why did you do it that way?',
  '**A** _(one element moved: the clause type)_ _Getting the specification was the whole object, and that was the only route to it._',
  '**B** The second one sounded **chosen**, and the word I noticed was **object** — you had not used it the first time.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight formulas, eight moved versions, with the element moved marked. The finding: **six or seven of the eight moved the verb**, because it is easiest and cheapest; the two or three that moved the **clause type** are the only ones in which the speaker visibly thought about their own content.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The formula:_ "We keep it on paper because the system has no field for it." _Clause type moved:_ "Having nowhere to put it is why it is on paper." _What I noticed about my own content, which I had not noticed in seven months: the missing field is the whole claim, and I had been burying it in a_ because _clause — which is where you put a thing you have finished thinking about. I have not finished thinking about it. It is still missing._',
  '**b** _My partner\'s new version is one he still agrees with, and he said it would be considerably more uncomfortable to say to the man who asks him — because the moved version makes him the person who has not fixed it, and the old one made the system the person who had not._',
]));
out.push(A('The second asking is the stage and the pair must do it properly — the same question, in the same words, as if the first answer had not been heard.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The January meeting happened and it took eleven minutes. Mazen had written that answer nine times and chased the matter for fourteen months. The man asked the question — why did you accept four units when your letter said twice that you were not asking for a replacement — and Mazen gave the two sentences. He wrote something down, said "that is fair", gave him the specification he had asked for twice in writing and never had, and asked him back in September. Yara said so it worked, and Mazen said in January it worked and in September it did not, which is why he was telling them. Same man, same question — asked again, he thinks to see what Mazen would say — and he gave the same two sentences word for word, because they were right. And watched him stop listening in the middle of the second one. Nour asked why, and he said because it sounded rehearsed, which it was: rehearsed in January and true in January, and in September still true and no longer his. He had said it to himself about three hundred times in eight months and could not hear it any more, and neither could the other man. Ms Huda said that is the uncomfortable consequence of last year: a sentence said three hundred times stops being a sentence and becomes a formula, and a formula is heard as a position and not as an answer. She made him move one element and not three, and he moved the clause type: wanting them is why I accepted them, and it is the whole reason. Rim said that is more uncomfortable than the first version, and Mazen said it is, and the same content — "wanting them is why" puts the wanting at the front and makes him look at it, where the January version buried it in a "because" clause, where you put a thing you have finished thinking about. Adnan asked what happens if you change all three, and she said you have written a different sentence and should check that you still agree with it — the commonest way a careful person ends up committed to something they did not mean.']));
out.push(A('Listener task: one formula per student with the element they moved. Count the clause-type moves: two or three in a class of twelve, and those are the students who thought about their content rather than their wording.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Wanting them is the reason why I accepted them because I wanted them._ → **✓** _Wanting them is why I accepted them._ The cleft replaces the _because_ clause; it does not sit in front of it.   **✗** _What settled it was that the units were wanted._ → **✓** _…was that I wanted them._ A cleft with the agent taken out is the worst of both moves: emphatic and anonymous.   **✗** A third answer produced on the spot. → **✓** the same answer, one element moved. Write both on the board and ask which one a listener would trust.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Eleven minutes. It had cost nine drafts and fourteen months of chasing, and it bought the specification he had asked for twice in writing and never had.'));
out.push(A('**2** He is changing the **clause type** and nothing else; he is refusing to find a **third answer**, because there is one answer and nine drafts found it. The reason is that a new answer to an old question reads as either a man caught out or a man managing somebody.'));
out.push(A('**3** Fifteen in the fault book last December, eighteen now, because the four went into service in January and **one** of them has a line against it — and that is the one he will bring. Not the three that are fine.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**BEFORE THE SECOND MEETING · the same question, the fourth time** · N. Sabbagh · 14 September',
  '**What happened the first time.** She asked why the rota was not in the system. Four drafts, seven months, nine minutes.',
  '**What happened the second time.** She asked the same question in July. I watched her stop listening and I could not stop.',
  '**Why, and it is not that the answer was wrong.** It was right in March and it is still right. It had been said about eighty times, and in there it stopped being a sentence.',
  '**What I am changing, and it is one thing.** Not the content: the clause type. _We keep it on paper because the system has no field for it_ becomes _having nowhere to put it is why it is on paper._',
  '**What that costs me, which is why it is better.** It puts the missing field at the front, where I have to say it is still missing after seven months.',
  '**What I am not going to do.** I am not going to find a third answer.',
  '**And what I shall say before being asked.** Thirty-four of forty-one now, against nineteen of twenty-two in December.',
  '**What to admit about my own preparation.** The four drafts are why she agreed in March and why she had stopped hearing it by July.',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**BEFORE THE THIRD CONVERSATION · the same question again** · H. Nasser · 14 September',
  '**What happened the first time.** She asked why I was not using the course book. Six drafts, nine months, four minutes in a corridor.',
  '**What happened the second time.** She asked the same question in June, in front of two other people, and I gave her the same two sentences. I watched her decide she had heard them before, and she had.',
  '**Why, and it is not that the answer was wrong.** It was right in September and it is still right. It had been said about two hundred times — to myself, to my husband, once to a stranger on a bus — and somewhere in there it stopped being an answer and became a position.',
  '**What I am changing, and it is one thing.** Not the content: the clause type. _I do not use it because it assumes twelve students with the same four months behind them_ becomes _**the four months is what the book assumes**, and no two of my twelve have the same four._',
  '**What that costs me, which is why it is better.** It puts the twelve students at the front, where I have to say that I know what each of them is missing — which is a claim somebody could test, and the old version was not.',
  '**What I am not going to do.** I am not going to find a third answer. There is one answer and six drafts found it, and a woman who arrives with a new answer to an old question has either been caught out or is managing somebody.',
  '**And what I shall say before being asked.** Nine of the twelve are on the book for grammar and not for anything else, from January.',
  '**What to admit about my own preparation.** The six drafts are why she agreed in September and why she had stopped hearing it by June.',
]));
out.push(A('180 words or more. Mark **one** thing: **does the page say the answer itself was not wrong?** Without that sentence the rest of the page rewrites content that was right, and the student spends a week improving a sentence whose only fault was repetition.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: the first time in three figures.** You wrote _Four drafts, seven months, nine minutes._ Found: three figures, no adjective, and the whole preparation and its return in one line.',
  '**Criterion: one element moved and named.** You wrote _Not the content: the clause type._ Found: named, and the two versions are both printed, so a reader can check the claim.',
  '**Criterion: the cost of the new version.** You wrote _where I have to say it is still missing after seven months._ Found: the cost is real and it is the evidence — a version that costs the speaker nothing has moved nothing.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Nobody can say when they last changed a word of their formula. The sentence to leave on is the hardest thing in Unit 1 to accept after a year of being taught to write carefully, and it should be left on the board overnight.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Said to the head of department on Monday, the moved version. Follow-up question: yes — _so which four months do they have?_ She has asked me that question nothing like it in three years of the old version, and the answer took me four minutes and a list. The old version produced agreement every time and never once a question, which I had been counting as success.']));
out.push(A('The moved version said out loud to somebody who has heard the old one, and one thing written down: whether they asked a follow-up question. A follow-up is the only evidence that anything moved.'));

// ===================== 1.6 =====================
out.push(pb());
out.push(h2('1.6  Nothing over four lines'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, from memory, and the question is asked of the class and not of the writer: **if the reader stopped there, what would they know?** In about half the cases the answer is nothing.'));
out.push(A('**b** **2** survives, and it is the only one that does. **1** tells the reader a subject and no content. **3** announces that a first sentence is coming. **4** survives as information but not as a request — there is nothing for the reader to do, which is the fault students find hardest to see.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — he stops reading; her first paragraph said nothing at all.'));
out.push(A('**b** **1** Four lines of the screen, about forty words, and then he decides whether to read the rest; about half the time he does not. He has ninety a day, so it is not rudeness.   **2** In **six of nine** of the pages she had sent him since December there was nothing actionable in the first four lines, and the figure was in paragraph three in all six.'));
out.push(NOTE('The repair is **two moves and not a style**, and both must be on the board: everything in the first two sentences, and **a line across the page** with everything below it that the reader does not need in order to act. Students hear the first move as _be brief_ and the second as _delete the rest_, and both are wrong. Nothing is deleted — the context, the history and the courtesy all go below the rule. **You are reordering the page, not cutting it.** The evidence is Nour\'s two reply times: eleven days for the page whose figure was in paragraph three, nine minutes for the page with three lines and a rule — and he read all of the second one, because the first three lines meant he did not have to.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a request)_ _I need twenty minutes with whoever owns the note template, before the October release. It is one field with a date in it._',
  '**2** _(a refusal)_ _We are returning four pallets from consignment 4471: eleven degrees above the maximum on arrival. The temperature log is attached._',
  '**3** _(a figure)_ _Thirty-four of the forty-one escalation calls since September involved a promise that is in no note of ours. The case numbers are below._',
  '**4** _(a decision)_ _I have put the 06.40 back to 06.45 from Monday. Six drivers and one printed timetable are affected._',
  '**5** _(bad news)_ _The second machine cannot be repaired this month; the part is not in the country. I can give you nine of the eleven sites from Thursday._',
]));
out.push(A('Every one of the five carries a **figure and an action** inside two sentences, and none of them opens with a reference or a date. Where a student has written _further to your letter of the 14th_, count the words it cost: usually eight of their forty.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the real first four lines)_ _I am writing with reference to the escalation rota, which as you know has been under discussion since the autumn, and following our exchange in December I have been looking again at the figures._',
  '**B** I know **that you are writing to me about the rota**, and I could **do nothing at all**.',
  '**A** _(two sentences)_ _Thirty-four of the forty-one escalation calls since September involved a promise that is in no note of ours. I should like twenty minutes with whoever owns the note template._',
  '**B** Now I know **the figure and what you want**, and I could **put the twenty minutes in the diary** — and the thing you moved below the line was **the whole of December**.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each of the eight originals, what a reader who stopped at line four would have known. The count: in how many was it **nothing actionable**? Five or six of eight, and that proportion holds in every class. Note also which openings began with a **date or a reference**, which is the commonest way four lines go on administration.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My first four lines:_ "I am writing further to our conversation of last month regarding the storage of the returned stock, and with reference also to the note I sent in August, in order to set out where matters now stand." _What is in them: nothing. The figure — two hundred and ten cartons in a corridor — was in paragraph four. Do I know why I put it there? Yes. I was taught to set out the history before the ask, and I have never questioned it._',
  '**b** _My partner\'s line goes after her second sentence. The last sentence above it is_ "I should like the three shelves in the back room, or somewhere else to put them by the end of the month." _Everything from_ "as you will recall" _onwards is below the line, and none of it is deleted._',
]));
out.push(A('The first four lines must be read **as sent**, not as remembered. A student who paraphrases their own opening improves it on the way out of their mouth and the stage measures nothing.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Since December the department head writes to Nour, which is new and is what she wanted. In July his assistant told her by accident the thing that has changed how she writes: he reads four lines. Of anything. Then he decides whether to read the rest, and about half the time he does not. Omar asked four lines of what, and she said four lines of the screen, about forty words — and it is not rudeness, because he has about ninety of these a day. So she counted what was in her first four lines of everything she had sent him since December: in six of nine, nothing. "I am writing with reference to the escalation rota, which as you know has been under discussion since the autumn." That is the first four lines of the March one, and a man who stopped there would know only that she had written. Jad asked where the actual thing was: paragraph three, in all six. And she knows why: she was taught at school to set the scene before the point, which is correct for an essay and wrong for a man with ninety of these. Adnan said the directorate does the same: "further to your letter of the…" and two lines before anything happens. Ms Huda said both are describing a genre inherited from a reader who does not exist any more: the slow opening assumes a reader who has already decided to read the whole thing. Then the repair, which is two moves and not a style — everything in the first two sentences, and a line across the page with everything below it that the reader does not need in order to act. Rim asked what goes below, and the answer is the context, the history and the courtesy, none of it deleted: you are reordering the page, not cutting it. Nour said the thing she sent him in July was three lines, a rule, then half a page, and he replied in nine minutes, which has never happened: yes to the first, no to the second, the third on Thursday. Hiba said he had read all of it, and Nour said yes — because the first three lines meant he did not have to. Which is the paradox of the cycle: a page that can be stopped at line four is more likely to be finished.']));
out.push(A('Listener task: one opening per student, with the two things a reader could do on the strength of the first two sentences alone.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _There are three matters to address._ → **✓** the first matter. That sentence is an announcement that a first sentence is coming.   **✗** _Further to your letter of the 14th instant, I am writing to advise you that…_ → **✓** _Four pallets are being returned._ Eight words of administration bought nothing a reader can act on.   **✗** A page cut to four lines with the history deleted. → **✓** four lines, a rule, and the history below it. The commonest overcorrection in the whole unit, and it will appear next week.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Thirty-four of forty-one escalation calls since 1 September involved a promise in no note of theirs, and he wants twenty minutes with whoever owns the note template before the October release. A reader could **put the twenty minutes in the diary** and **pull the thirty-four case numbers**, on those two sentences alone.'));
out.push(A('**2** He is not claiming that the promises were wrong or carelessly made — thirty-one of the thirty-four were reasonable things to say on the telephone. The problem is that the template has **no field** they can go in, so they go in the free-text box or nowhere, and the free-text box is not searchable.'));
out.push(A('**3** It compares the March page, whose first four lines said only that he was writing about the rota, with this one. The two reply times are **eleven days** and **nine minutes**.'));
out.push(NOTE('The declared sets live in this cycle\'s Language box and are tested in 1.7, so they are not decoration and they are not revision: they are the unit\'s lexical syllabus and they do not recur in another unit. The **phrasal verbs** are the ones this unit has actually used — _leave out · take out · put in · get hold of · come out of · write back · reach for · take apart · catch out · pick up · work out · go up and come down_ (of a register dial). The **word-formation set** is the one Reading Part 3 tests in 1.7: _assume → assumption · explain → explanatory, unexplained · frank → frankness · admit → admission · presume → presumption · rehearse → rehearsal · conform → non-conforming · demonstrate → demonstration._ Set both as homework reading before 1.7 or the Part 3 task becomes a vocabulary test instead of a word-formation one.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**THE 06.40 · AUGUST FIGURE AND ONE REQUEST** · T. Ayoub · 2 September',
  'Of the sixty-two mornings since 1 June, **forty-one** times the 06.40 left before 06.40. I have the times and I should like one line changed on one printed timetable.',
  '_______________________________________________',
  '**How the figure arose.** I began writing the real departure time on the sheet in June, beside the timetabled one. The gap is mine, from the sheet, not the depot\'s.',
  '**What I am not claiming.** That anybody is driving badly, or that the buses are at fault. Forty-one of the forty-one were within two minutes. The problem is not the driving; it is that the printed time is wrong and between forty and seventy people a morning believe it.',
  '**Why one line and not a review.** Because the change I think is needed is one printed figure, and if I am wrong about that I would rather be told in ten minutes than write four pages first.',
  '**What I have put below this line and would have put at the top a year ago.** All of the above, and the whole of February.',
  '_Attached: the sixty-two mornings with times; the June sheet._',
]));
out.push(S('Stage 7 · Write freely (sample, 199 words)'));
out.push(SAMPLE([
  '**RETURNED STOCK · SEPTEMBER FIGURE AND ONE REQUEST** · R. Shaaban · 14 September',
  'There are **two hundred and ten** cartons of returned stock standing in the back corridor, which is the fire route. I should like the three empty shelves in the back room, or twenty minutes with whoever can tell me where else they go.',
  '_______________________________________________',
  '**How the figure arose.** I counted them on 2 September and again on 11 September: a hundred and ninety-four, then two hundred and ten. The count is mine, from the returns book, not the system\'s. The rate has not moved — about two a day both times — and I would not read anything into the difference between the two counts.',
  '**What I am not claiming.** That anybody is returning stock carelessly, or that the corridor was anybody\'s decision. A hundred and eighty of the two hundred and ten are seasonal and will go in January. The problem is not the returns; it is that the returns have no shelf, so they go where there is floor.',
  '**Why three shelves and not a review of returns.** Because the change I think is needed is three shelves, and if I am wrong about that I would rather be told in twenty minutes than write four pages first.',
  '**What I have put below this line and would have put at the top a year ago.** All of the above, and the whole of the August note.',
  '_Attached: the two counts with dates; the August note; the returns book extract for September._',
]));
out.push(A('180 words or more. Mark **one** thing: **is there a visible rule, and is everything below it genuinely optional?** A page with a line drawn in the wrong place is worse than a page with no line, because the reader now trusts the line.'));
out.push(S('Stage 7P · Respond'));
out.push(SAMPLE([
  '**Criterion: a figure and a request inside the first two sentences.** You wrote _forty-one times the 06.40 left before 06.40 … I should like one line changed._ Found: both, in forty words.',
  '**Criterion: a visible line with everything optional below it.** You wrote the rule after the second sentence. Found: it is there, but _what I am not claiming_ is above the things a reader needs and below the line — decide which it is.',
  '**Criterion: a rate as well as a count, and no trend read into two points.** You wrote _forty-one of sixty-two_. Found: the count is there and the rate is not, and you have no second period to compare it with, which you should say.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their first two sentences and stops. The test is audible and they hear it themselves: if the voice wants to carry on, the content is not in them. The paradox to leave the cycle on is that **a page that can be stopped at line four is more likely to be finished.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Sent at 09.14, reply at 09.31 — seventeen minutes, against eleven days for the August note, which said the same thing in four pages. And the reply answered the thing **above** the line: _take the three shelves, tell me on Thursday whether it is enough._ Nothing below the line was mentioned at all, which tells me the line was in the right place and that four of my five paragraphs had never needed to be read.']));
out.push(A('The page sent, and two things written down: the time to a reply, and whether the reply answered the thing **above** the line or something below it. The second is the measurement of whether the line was drawn in the right place.'));

// ===================== 1.7 =====================
out.push(pb());
out.push(h2('1.7  Review & Mediate: Eight things this room assumes'));
out.push(S('Stage 1 · Get ready – Unit 1 quiz'));
out.push(A('**1** _I have, and so has she._   **2** _Frankly, the figures were late._   **3** _The figures were, frankly, late._   **4** _How long had it been doing that before anybody reported it?_   **5** Mixed register: either _I regret to advise you of a serious irregularity_ or _I am afraid this is a mess_.   **6** _Wanting them is why I accepted them._ — the cleft replaces the _because_ clause, it does not precede it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the sheet is read, not discussed, before the recording.'));
out.push(A('**b** Lines **3, 4, 5** and **8** turn out not to be shared. And shared ground is **what a group can rely on without checking** — not what it has in common.'));
out.push(A('**c** Open; listen and read together.'));
out.push(NOTE('**Four of eight fail, and that is the ordinary rate** — say so, because a class that thinks it has done badly will write a defensive sheet in Stage 6. The four failures are of three different kinds and the class must separate them: **3 and 5 are history** (not assumptions at all — this room\'s past, which a newcomer cannot follow or act on); **4 is a fact about the group** (it describes the room, tells a newcomer nothing to do, and worse, tells them they are behind); **8 is true and unusable in week one** (it reads as a rebuke to somebody who has not yet said anything). What the four survivors have in common is the test to hand the class: **every one of them is a sentence about what to do with a sentence, and nothing in them refers to anything that happened in the room.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here sorts rather than drills, and the sorting is done in Stage 3 on two documents the class has not seen.'));
out.push(S('Stage 3 · Practise (sample – Sheet A)'));
out.push(SAMPLE([
  '_Lines that **transfer**_: **1** _Nothing is signed for that has not been counted._ **2** _If you do not know, you say so and then find out._ **6** and **7**.',
  '_Lines that are **history**_: **3** and **5** — both have a **year** in them.',
  '_A line that **describes the group**_: **4**.',
  '_True and **unusable in week one**_: **8**.',
  'Repair of line 3: _In 2019 a sheet went out unsigned for four months; here is what the counting is for._ Twenty-six words or thereabouts, dated once, below a line.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The four kinds for each sheet. On **both** sheets lines **1, 2, 6 and 7** transfer, **3 and 5** are history, **4** is a fact about the group, and **8** is true and unusable in week one — the same arithmetic from two different trades, which is why the stage runs two documents. And on both, the history lines are the ones with a **year** in them.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Eight lines for a directorate contracts office, written alone:_',
  '**1** _Nothing goes out over a signature that is not the signature of the person who checked it._ **2** _If a clause is not clear to you, it is not clear._ **3** _Keep the 2021 file._ **4** _Everybody here can quote the schedule from memory._ **5** _We do not ring the transport office._ **6** _Write the date you were asked, not the date you answered._ **7** _If you do not know, say so in writing._ **8** _Nobody is interested in how long it took you._',
  '_My partner, who works in a hospital, could act on **1, 2, 6** and **7** tomorrow — four of eight. The line with a year in it is **3**. The line that told her she was already behind was **4**. And she asked about **5**, which is not an instruction at all: it is a quarrel from 2019 that nobody has written down._',
]));
out.push(A('Eight lines, alone, in four minutes, no discussion — and the four minutes are a protection, not a constraint. A pair that confers produces a sheet that marks membership of the pair.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Eight lines, written by eight people who have been in this room for two years, read by four who have not. Adnan understood all eight as English and three as instructions he could follow tomorrow — one, four and seven. Rim had the same three and added six, which she does already and did not know had a name. Dima understood one, two, six and seven, and said two is her whole job. Hiba understood all eight and said she should not be counted, because she sat in this room for six weeks and has spent two years where four of these are on a wall in different words. So Ms Huda did the arithmetic. Lines three and five are not shared at all: they are not assumptions but this room\'s history, and a person who was not here cannot act on them — the prediction sheet being read on the first of June means nothing to somebody who has never seen it. Omar said those are the two he is proudest of, and Ms Huda said they are the two all eight are proudest of, which is why they were on the sheet, and the commonest fault in a document of this kind: the lines a group writes first mark membership, they do not transfer anything. Four and eight fail too, for different reasons. Nour said four is a fact about them and not an instruction, and Ms Huda agreed — "everybody here keeps a count of something and knows the number tonight" describes the room, tells a newcomer nothing to do, and worse, tells them they are behind. And eight, that nobody is interested in how hard you have worked, is true, is the hardest thing in two years, and is unusable on a first evening: it reads as a rebuke to somebody who has not yet said anything. So four of eight fail, which Ms Huda said is the ordinary rate. One, two, six and seven work, and what those four have in common is that every one is a sentence about what to do with a sentence: nothing in them refers to anything that happened in the room. Lubna asked why write the other four at all, and the answer is that you cannot tell which is which from inside — shared ground is what a group can rely on without checking, and the only instrument that measures it is somebody in the room who has not got it. Dima asked what to do with three and five, and Ms Huda said you do not delete them: you date them and explain them once, below a line, in about twenty-six words, and then the line stops being a password.']));
out.push(A('Listener task: one line from this room that is history, and the twenty-six words that would fix it. Expect the twenty-six to come out at forty on a first attempt; the count is the discipline.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Everybody here keeps a count of something._ → **✓** _Keep a count of one thing in your own work and bring the number._ A fact about the group rewritten as an instruction.   **✗** _The prediction sheet is read on the first of June._ → **✓** _In June 2025 this class read a sheet of its own predictions; ask about it when it comes round._ History, dated and explained once.   **✗** _Nobody is interested in how hard you have worked._ → **✓** keep it until about week six. True, and on a first evening it is a rebuke.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 3)'));
out.push(A('**1** assumptions   **2** explanatory   **3** unexplained   **4** frankness   **5** admission   **6** presumption   **7** rehearsal   **8** demonstration'));
out.push(NOTE('Two things to say about this task, because it is the first Part 3 of the course. First, **EXPLAIN appears twice** and the two answers are different — _explanatory_ and _unexplained_ — which is a standard Part 3 move and the one students fall for most. Second, four of the eight require a **prefix or a negative** or a change of part of speech rather than a simple suffix, and students who learn suffix lists will get five of eight. The remedy is the declared set in 1.6, read before the lesson: the set is not a vocabulary list but the exact material this task is built from.'));
out.push(S('Stage 6 · Write with help'));
out.push(SAMPLE([
  '**WHAT THE DEPOT ALREADY ASSUMES** · T. Ayoub · eight lines',
  '**LINES THAT TRANSFER.** **1** _Write the time the bus actually left, not the time on the sheet._ **2** _If a passenger asks something you cannot answer, say so and write the question down._ **3** _Nothing goes out of the yard without a number on it._',
  '**LINES THAT ARE HISTORY — dated and explained once.** **4** _Keep the February file._ _In February 2024 a timetable change was printed wrongly and ran for five weeks; the file is the correspondence._',
  '**A LINE THAT DESCRIBES US AND NOT THEM — rewritten as an instruction.** **5** Was: _We all know the 06.40 is the difficult one._ Now: _Ask which service is the difficult one, and ask on your first morning._',
  '**A LINE THAT IS TRUE AND NOT FOR WEEK ONE.** **6** _Nobody will thank you for the mornings._ _Keep until about week six._',
  '**AND THE TEST I USED.** _My brother-in-law_ read it, and could act on **4** of the **6**.',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 1)'));
out.push(A('⚠ **No answer, no sample and no marking.** The essay is written tonight, dated, and kept. It is read again in **3.7**, where Unit 3 has taught the form and the comparison is the lesson. A teacher who corrects it, or who lets a student improve it, removes the only measurement Unit 3 has. Collect the essays if the class is likely to lose them, and do not read them.'));
out.push(S('Stage 7R · Share'));
out.push(A('No Stage 7P in x.7. The sharing is the mediation report and the clinic; the cycle closes on the eight lines and the four that failed.'));
out.push(S('Unit 1 check · A  Grammar and vocabulary'));
out.push(A('**1** b   **2** a   **3** c   **4** b   **5** c   **6** a   **7** b   **8** a'));
out.push(A('Item **3**: the commas are already printed round the gap, so the filler is bare _frankly_. Item **6**: _read too much into_ is fixed — _from_ and _in_ do not collocate with it. Item **7** is the declared word-formation set, which is why it is in the check.'));
out.push(S('Unit 1 check · B  Listening (B2 First Listening Part 1 style)'));
out.push(A('**1** B   **2** A   **3** C   **4** B   **5** A   **6** B   **7** C   **8** A'));
out.push(A('Read the script **after** the check, not before, and read it once. Item **3** is the one classes get wrong: the man says that all three dials up together leaves nobody in the letter, not that one dial does it.'));
out.push(S('Unit 1 check · C  Writing'));
out.push(A('180 words or more, and marked on two things only: **is the figure or the request in the first two sentences, and is there a line with everything optional below it?** Nothing else in this unit is assessed.'));
out.push(S('I can… (Unit 1)'));
out.push(A('Self-assessment; no answers. The four that matter are the third, the fifth, the sixth and the eighth: naming the three dials and moving **one** of them on a sentence of the student\'s own, applying the four-second test, answering in the tense the question needs in two seconds without naming it, and putting the figure and the request in the first two sentences. A class that ticks the stance adverbs and the ellipsis and not those four has learnt two structures and will write the same first paragraph in January.'));
out.push(box('Looking ahead to Unit 2', [
  'Unit 1 was about what a reader already has. **Unit 2** is about the opposite and more dangerous skill: taking the person out of a sentence on purpose — **nominalisation** — and keeping the agent findable in the paragraph after the sentence has dropped it.',
  '⚠ **This is the one place where B2 contradicts B1, and the contradiction must be printed and not smoothed over.** Last year the class spent two whole cycles learning to put a person into every sentence — 19.1 on the agentless complaint and 23.3 on the impersonal report — with the test _put a person in front of it_. Unit 2 teaches the opposite move and the judgement that chooses between them. Taught badly it produces exactly the committee English the class spent a year dismantling, and the safeguard is the **recoverable-agent rule**: any cycle that teaches nominalisation must name the agent somewhere in the paragraph. That rule is a QA check on every unit of this book, not a suggestion.',
  '**Ask the class now for 2.1:** one page they wrote last year with the _put a person in front of it_ test in mind, **and** one official paragraph they cannot read — a circular, a clause, a notice, anything that has defeated them. 2.7 rewrites one of them for the person it is about. Mr Barghouti has offered four of his own, and a class that arrives with the first and not the second has a cycle about grammar instead of a cycle about who is hiding.',
  '**And one thing to collect and not read.** The essay written badly in 1.7, with tonight\'s date on it. Do not improve it, do not throw it away, and do not look at it until **3.7**.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 1 · Answer Key');
