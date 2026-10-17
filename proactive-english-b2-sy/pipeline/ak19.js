// Proactive English B2 · Syria Edition · Book 2 · Unit 19 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 19  Chairing and Minuting — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **This unit is 18.3 from the other side of the table and the class should be told so on the first evening.** **18.3 asked how a meeting is written down; 19 asks how it has to be run for six honest lines to be writable at the end of it.**',
  '**Ask the class to bring four things.** ⚠ **A set of minutes** _(19.2)_. **Something that was agreed and never written down** _(19.2)_. **Something that was acted on although nobody decided it** _(19.3)_. **And the standing agenda of a meeting they attend** _(19.5)_.',
  '⚠ **Mrs Sabbagh carries the unit and the figure is hers: about four hundred hours since 2024, against a figure that has not moved.** **She is not a bad chairman and the key says so twice** — **everything she does wrong in 19.1 is what everybody does, and the room will recognise it faster than it recognises any of the remedies.**',
  '**19.7 carries the examination papers.** **Reading and Use of English Part 5** is multiple choice on a longer text, **Writing Part 1** is the compulsory essay, and **Listening Part 3** is multiple matching.',
  '⚠ **And one warning about 19.4, which is the cycle that can do harm.** **It asks the class to count who speaks and who does not.** **Keep the counting about the room and never about a named person in public** — **the page in 19.6 holds questions and not judgements, and that distinction should be made before anybody counts anything.**',
], C.lblue, C.navy));

// ===================== 19.1 =====================
out.push(pb());
out.push(h2('19.1  What the meeting is for'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Almost nobody can answer the second question, and the room should hear five failures in a row before anything is explained.** **A meeting that cannot be made unnecessary is a meeting nobody ever has to finish** — **put that on the board and leave it there for the cycle.**'));
out.push(A('**b** Purpose sentences: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the one the room defends** — _the purpose of the meeting is to discuss the escalations_ — **because it contains the word _purpose_.** **Ask what would count as having discussed them; nothing would.** **3 sounds like management and is the emptiest of the five.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **what this meeting is to decide, and what would make it unnecessary**; and the test is **to ask three people at the end what the meeting was for.**'));
out.push(A('**b** **1** ⚠ **Eight afternoons a year, eleven people, since 2024** — **about four hundred hours.** **And the figure the meeting exists to move** _(thirty-four of forty-one escalations involving a promise in no note of theirs)_ **was thirty-four at the first meeting and is thirty-four now.**   **2** ⚠ **It becomes whatever the loudest item on the agenda is** — **and the loudest item is almost never the one the meeting was called for.**'));
out.push(NOTE('⚠ **The second half of the purpose sentence is the content of this cycle and it will be resisted as self-sabotage.** **Answer the resistance with the arithmetic rather than the principle: in two years nobody has asked when the promise field is going in, and Mrs Sabbagh had mentioned it four times without it becoming an item.** ⚠ **A sentence said eight times a year will eventually produce that question, and it is the only outcome available that would give the four hundred hours back.** **_It stops being necessary when…_ is not modesty; it is the only half of a purpose sentence that can end a series of meetings.**'));
out.push(NOTE('**The test is where the cycle becomes real, and it has to be done by somebody in the room.** ⚠ **Ask three people at the end what the meeting was for.** **Mrs Sabbagh got four answers from three people.** **Set it as the homework and insist on two things: the three answers written down in their words, and no explanation given beforehand of why you are asking.** ⚠ **A student who is also a chairman will want to skip it, and that is the student who most needs it** — **the answer a chairman least enjoys is the one that tells them what their first sentence actually did.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a meeting I chair)_ _This meeting is to decide which consignments we refuse this week. It stops being necessary when the gate can read the rule itself._',
  '**2** _(one I attend)_ _This meeting is to decide the print order. It stops being necessary when the order becomes a standing one._',
  '**3** _(cannot decide the main thing today)_ ⚠ _This meeting cannot decide the budget line, because we have not got it. It is to decide what we do in the four weeks before we have._',
  '**4** _(with **to discuss** in it, and the repair)_ ⚠ _The purpose is to discuss the roster_ → _this meeting is to decide the afternoon hours for July, or to find out that we cannot._',
  '**5** _(one I believe should stop)_ _This meeting is to decide nothing. It has decided nothing in six meetings and I shall propose that it stops._',
]));
out.push(A('⚠ Item **3** is the one that saves most afternoons and is almost never said: **a chairman who names what cannot be decided in the first minute has prevented the twenty minutes that go on it anyway.** Item **5** should be collected and taken seriously — **about one student in six has a real one**, and the sentence is a legitimate proposal rather than a complaint.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The weekly escalation meeting, eleven people, two hours._',
  '**B** **This meeting is to decide which of the escalations we answer in writing, and in what form.** **It stops being necessary when the promise field is in the system.**',
  '**A** _(the ⚠ row)_ _The purchasing committee, with the budget line not yet issued._',
  '**B** ⚠ **This meeting cannot decide the February order, because the budget line has not been issued.** **It is to decide what the stores clerk does in the four weeks before it is** — ⚠ **and I shall say that before the agenda, because last time it took us twenty minutes to discover it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Both halves of each purpose sentence. ⚠ **The four ⚠ rows cannot decide their main item today** — **a figure is missing, a person is away, nobody is trained, a fact is unknown** — **and the chairman\'s job is to say so in the first nine seconds.** **A pair that lets one of those four run as though the decision were available has given away the afternoon.** **Ask the listeners what will be decided instead; there is always something.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**This meeting is to decide which of the week\'s refusals go to the supplier in writing.**_ ⚠ _**It stops being necessary when the gate can read the excursion rule without telephoning me** — **which is a one-page note and nobody has written it.**_',
  '**b** ⚠ _**As a suggestion:** _I thought it might be useful if we spent a little time on the refusals._ **My partner amended it in four seconds** — **she said _and the stacking, while we are at it_** — **and the stacking is the roster of my meeting.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour chairs a meeting, and the arithmetic came first: eight afternoons a year, eleven people, since 2024, which is about four hundred hours. The figure the meeting exists to move is that thirty-four of forty-one escalations involve a promise in no note of theirs — and it was thirty-four when they started and it is thirty-four now. So four hundred hours against an unmoved figure. Asked what she opens the meeting with, she said she says good afternoon and reads the agenda, which is the whole of the cycle: a meeting with no stated purpose becomes whatever the loudest item on the agenda is, and the loudest item is almost never the one the meeting was called for. Adnan said the purpose sentence has two halves, and two, the second being the one nobody writes — what this meeting is to decide, and what would make it unnecessary. Omar asked why the second half matters, since it sounds like a way of insulting your own meeting, and it is the only half that can end a series: it stops being necessary when the promise field is in the system. Say that eight times a year and somebody will eventually ask when the field is going in, which is the question four hundred hours have not produced. Dima asked about to discuss, which is not a purpose but a description of what people do in rooms — and to review progress is worse, because it sounds like management and nobody can say what would count as having reviewed it. Rim asked how you know whether you have said it, and you ask three people at the end what the meeting was for: if you get three answers you did not say it, and you will get three the first time, from people who have been coming for two years. Nour did that in March and got four answers from three people, because one of them gave her two. The fix is one sentence at the start, costing about nine seconds. And Mazen asked about saying it out loud: once, flatly, before anything else, and not again, because a purpose offered as a suggestion can be amended by the first person who speaks, and it always is.']));
out.push(A('Listener task: both halves of the partner\'s purpose sentence, or the honest version of the second. ⚠ **Collect the honest versions** — _I do not know what would make this meeting unnecessary_ — **and count them.** **In most rooms it is more than half**, and the number is the finding: **the class has been attending meetings that cannot end.** **Then one question to those students: who would know?**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Our regular monthly catch-up._ → **✓** this meeting is to decide…   **✗** _To discuss the escalations._ → **✓** what would count as having discussed them?   **✗** _To review progress._ → **✓** to decide one thing, named.   **✗** No second half. → **✓** it stops being necessary when…   **✗** The purpose offered as a suggestion. → **✓** flat, once, before anything else.   **✗** Running a meeting that cannot decide its item. → **✓** say so in the first minute.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Good afternoon, and the agenda.** **Which means the afternoon has gone to whichever item was loudest, and for six of the last eight that was the roster** — **and she concedes in the same breath that the roster is a real problem and is not what the meeting is for.** **Both halves of that concession matter: a note that calls the loudest item unimportant loses the people who raised it.**'));
out.push(A('**2** ⚠ _This meeting is to decide which of the forty-one escalations we answer in writing, and in what form._ **And:** _it stops being necessary when the promise field is in the system._ **The second is there because in two years nobody has asked when the field is going in** — **she has mentioned it four times and it has never been an item** — **and she reasons that the sentence said eight times will eventually produce the question.**'));
out.push(A('**3** ⚠ **It cannot decide the field, because that is not theirs; it can decide what they do in writing in the four weeks before anybody answers them.** **And at the end she will ask three of the eleven what the meeting was for** — **_if I get three answers I shall have failed at the first sentence, and I would rather know that on Thursday than in 2026._**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NINETY MINUTES A MONTH** · R. Shaaban · 4 June · _to the five of us on the gate review_',
  '**I have chaired this review every month for three years and I have never once said what it is for.** ⚠ **I shall on the fourth, and this note is so that nobody is surprised.**',
  '**The arithmetic, because we are all in it.** **Twelve meetings a year, five people, ninety minutes.** ⚠ **About ninety hours.** **And the figure this review exists to move — the number of loads turned away for paperwork — was nineteen last year and is seventeen this year.**',
  '**What I have been opening with.** **The gate book and the first refusal.** ⚠ **Which means the afternoon has gone to whichever refusal was most recent**, **and for eight of the twelve that was a load from one supplier.**',
  '**What I shall open with, in two halves.** ⚠ _This review is to decide which refusals go to the supplier in writing this month._ **And:** _it stops being necessary when the gate can read the excursion rule without telephoning me._',
  '**Why the second half is in it.** ⚠ **The one-page note that would do it has never been written and nobody has ever asked for it.**',
  '**What the fourth cannot decide.** ⚠ **It cannot change the limit, which is in the agreement.**',
  '**And one thing I shall do at the end.** ⚠ **I shall ask three of you what the review was for.**',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**EIGHTY-ONE HOURS** · J. Attar · 6 June · _to the four other moderators_',
  '**We have met every Tuesday evening for two years and none of us has ever said what the meeting is for.** ⚠ **I am going to say it next Tuesday, and I would rather you read it here first.**',
  '**The arithmetic, and I am in it as much as anybody.** **About a hundred and four Tuesdays, five of us, forty-five minutes.** ⚠ **Eighty-one hours.** **And the figure this meeting exists to move — threads closed for personal abuse — was eleven a month when we started and is ten a month now.**',
  '**What we have been opening with.** **Whatever happened at the weekend.** ⚠ **Which means the evening goes to the loudest thread**, **and for most of the last year that has been the archive argument, which is not a moderation question at all.**',
  '**What I shall open with, in two halves.** ⚠ _This meeting is to decide which rules we change this month._ **And:** _it stops being necessary when a rule change can be proposed in writing and agreed in three days without any of us giving up a Tuesday._',
  '**Why the second half is in it.** ⚠ **Because we have never once proposed a rule change in writing.** **We bring them to Tuesday instead, and about half of them do not survive being discussed by five tired people** — **which is not the same as being rejected.**',
  '**What next Tuesday cannot decide.** ⚠ **The archive charge.** **It is not ours, it has had five of our evenings, and I shall say so before the agenda.**',
  '**And one thing I shall do at the end.** ⚠ **I shall ask three of you what the meeting was for, and write down what you say.**',
]));
out.push(A('**203 words, the writer inside the arithmetic, the loudest item conceded as real and then placed, the reason for the second half given, and a public test at the end.** ⚠ **The sentence that earns the band is _about half of them do not survive being discussed by five tired people, which is not the same as being rejected_** — **it prices a meeting\'s existence rather than its agenda**, which is what the cycle is for.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: yourself inside the arithmetic.** _"and I am in it as much as anybody… eighty-one hours"_ ⚠ **Himself counted, in hours.** **Mine says _this meeting costs the section a great deal of time_**, which prices everybody but the person writing.',
  '**One thing to keep, and why it works.** _"which is not the same as being rejected"_ **Seven words, and they explain why a meeting can be the wrong place for a decision it is entitled to take.**',
  '**Ranking of the slip I was given.** **1** yourself in the arithmetic **2** the loudest item conceded **3** the reason for the second half **4** the public test _(there, and the shortest line on the page)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The purpose sentence as a suggestion, amended by the room, and then flat.** **The amendment takes about four seconds and the room enjoys making it, which is the point** — **a purpose offered as a suggestion is an invitation.** **Finish on Mrs Sabbagh\'s figure:** **four hundred hours against a figure that has not moved.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I asked three people at the end of the gate review what it was for.**_',
  '⚠ _**The three answers, in their words:** _to go through the week\'s refusals_ · _so that you know what we have turned away_ · _I have never been sure, I come because I am on the list_._',
  '_**Which is three answers, and the third is the one I shall think about.** ⚠ **He has been coming for eleven months.**_',
]));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  Getting the decision said in the room'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The question to insist on is _whose words are those?_** **In most cases the sentence was composed afterwards by the person speaking** — **and when two students were at the same meeting, they produce two different sentences, which is the cycle proved by the room in four minutes.**'));
out.push(A('**b** Gets a correction: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **All three wrong answers invite a yes, and a yes costs nothing** — **which is why they are always available and why they are always taken.** **4 is worth reading twice:** **it is the same move applied to something that was _not_ decided**, which is the half of 19.3 that this cycle sets up.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a correction and not an agreement**; and **a decision that is agreed and not formulated is carried out by whoever has the strongest memory.**'));
out.push(A('**b** **1** ⚠ **If the decision in the minute has a shape nobody in the room would have used, he composed it afterwards; if it has somebody\'s correction in it** — _at the quoted price_, **which Mr Saqqal added** — **it was said in the room.**   **2** ⚠ **The pen.** **If the person taking the minute is not writing, the chairman is going too fast or the sentence is not sayable** — **and both are the chairman\'s fault and not theirs.**'));
out.push(NOTE('⚠ **The whole cycle turns on one substitution and the class should practise it until it is automatic: stop asking for agreement and ask for a correction.** _I am going to write this: ______. Correct me._ **_Are we agreed_ invites a yes; _correct me_ invites a sentence.** ⚠ **And the evidence that it worked is not consent but alteration:** **a formulated decision carries somebody else\'s clause in it, and a decision composed afterwards is smooth.** **Smoothness in a minute is a warning** — **put that sentence on the board and apply it to the minutes the class brought, which is five minutes and lands harder than any explanation.**'));
out.push(NOTE('**The practical detail everybody skips is the speed, and it belongs to the chairman.** ⚠ **Read the formulation slowly enough to be written down, and watch the pen.** **Mrs Sabbagh has never once looked at Mr Barghouti\'s hand in two years** — **which is not carelessness; it is that a chairman at that moment is holding a sentence and watching a clock.** ⚠ **And one rule that is easy to state and hard to keep:** **do not let the correction be made to you privately afterwards.** _Say it now, so that everybody hears the version that is going in._ **A correction given in the corridor leaves ten people holding the uncorrected sentence, which is worse than no correction at all** — **because now there are two versions and only two people know it.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(with its authority)_ _I am going to write this: the January order goes to Dar al-Kutub at the quoted price, under the delegation of 2023. Correct me._',
  '**2** _(nothing decided)_ _I am going to write this: not decided, for want of the budget line, on the agenda for 5 June. Correct me._',
  '**3** _(a date somebody will correct)_ ⚠ _…placed by 20 May._ **And somebody says _the nineteenth; the twentieth is a Friday_** — **which is the correction the method exists to collect.**',
  '**4** _(**are we agreed**, so that you hear it)_ ⚠ _So we are all agreed_ — **eleven yeses, and nobody has said what to.**',
  '**5** _(offered too fast)_ ⚠ **Said at speaking speed, the minute-taker writes four words of it** — **and the four words are the ones that end up in the document.**',
]));
out.push(A('⚠ Item **3** is the one to collect: **ask for a real correction somebody made in a real meeting**, and in most cases it is a date or a name. **That is not a trivial finding** — **it is the evidence that the method collects exactly the thing that is usually wrong.** Item **5** is done aloud with the room writing: **the fast version produces four different sentences in a room of eight**, and nobody believes it until the four are read out.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _"Dar al-Kutub seems the sensible one at that price."_',
  '**B** **I am going to write this: the January order goes to Dar al-Kutub at the quoted price, under the 2023 delegation. Correct me.**',
  '**A** _(the ⚠ row)_ _"We should probably look at the February one next time."_',
  '**B** ⚠ **There is no decision in that, so the formulation says so:** _I am going to write this: not decided, the February order, on the agenda for the next meeting. Correct me._ ⚠ **And the correction I expect is the date, because _next time_ is not one.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each formulation, its authority, and whether a decision exists. ⚠ **The four ⚠ rows contain no decision** — **an intention, a wish, a reservation, a postponement** — **and each must be formulated as such, with a date.** **A pair that turns _somebody ought to find out_ into a decision has invented one** — **and nobody would be acting on it, on nobody\'s authority.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**What I wish somebody had said:** I am going to write this: from June the gate telephones the supplier before any load is turned away, and I am to be told the same day. Under Mr Kabbani\'s instruction of 4 May. Correct me._ ⚠ _**What was actually said was _we will try the telephone thing_, and the gate has been doing it for one supplier only.**_',
  '**b** ⚠ _**At speaking speed I wrote: _gate telephones supplier_.** **Slowly I wrote all of it, including _and I am to be told the same day_** — **which is the clause the whole arrangement depends on and the one I lost at speed.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The commonest thing that goes wrong in Nour’s meeting is that everybody agrees and nobody says what was agreed — it takes about four seconds and then they are on the next item. What she says at that moment is so we are all agreed, which gets a yes from eleven people who are agreeing to eleven slightly different things. And the move is to stop asking for agreement: say it back in a sentence, in the words that will go in the minute, and ask for a correction — I am going to write this, correct me. Omar asked whether that is not the same question in different words, and it is the opposite question and the room answers it differently: are we agreed invites a yes, and a yes costs nothing, while correct me invites a sentence, and somebody always has one, usually about a date. Adnan said he can tell in four lines whether a chairman did it: if the decision in the minute has a shape nobody in the room would have used, he composed it afterwards, and if it has somebody’s correction in it — at the quoted price, which Mr Saqqal added — it was said in the room. Which is the test from the other end: a formulated decision carries a fingerprint, a clause somebody put in, and one composed afterwards is smooth, and smoothness in a minute is a warning. Dima asked what goes in the sentence, and what was decided and under whose authority — the authority being the half a chairman forgets and the half anybody asks about three months later. Rim asked about the speed, which is slowly enough to be written down, watching the pen: if the person taking the minute is not writing, you are going too fast or the sentence is not sayable, and both are the chairman’s fault and not theirs. Nour said she has never once looked at Adnan’s hand. Bassel asked what happens when nothing was decided, and exactly the same form: not decided, for want of the budget line, on the agenda for 5 June, correct me. And Mazen asked about the cost of not doing it: a decision agreed and not formulated is carried out by whoever has the strongest memory, which is not the loudest voice and is often worse.']));
out.push(A('Listener task: the partner\'s formulation, and whether the two written versions match. ⚠ **They almost never match, and the part that is lost at speed is almost always a subordinate clause** — _and I am to be told the same day_, _including a December_, _by the officer who took the call_. **Say that out loud, because it is the practical finding: speed does not lose the decision, it loses the condition on the decision.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _So we are all agreed._ → **✓** I am going to write this… correct me.   **✗** _Any objections?_ → **✓** a sentence to be corrected.   **✗** A decision with no authority. → **✓** under whose delegation.   **✗** A smooth minute with no corrections in it. → **✓** whose clause is in this?   **✗** Formulating at speaking speed. → **✓** watch the pen.   **✗** The correction taken in the corridor. → **✓** say it now, so that everybody hears it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **A decision said in the room has somebody else\'s clause in it** — _at the quoted price_, **which Mr Saqqal added after the chairman read the sentence back.** **One composed afterwards is smooth, because one person wrote it and had no interruptions**, **and smoothness in a minute is a warning.**'));
out.push(A('**2** ⚠ **In 2022 a meeting agreed to extend a trial and he wrote _to all night staff_; two of the nine remember _to the night staff on the fourth night_.** **Nobody has ever established which is right** — **and the trial has been running on his version for two years.** **The cost is not an argument; it is two years of a practice nobody chose.**'));
out.push(A('**3** ⚠ **One sentence and about twelve seconds:** _I am going to write this: ______. Correct me._ **In the room, before the next item, and slowly.** **He does not need the authority said aloud if it is obvious, but he does need the date, because the date is what somebody always corrects.** **And what he will now do himself:** _I cannot write that. Can somebody give me the sentence?_ — **nine words he has never said in nineteen years, and he says why: it sounds like an accusation and it is not one.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHOSE WORDS** · D. Khoury · 8 June · _to the three chairs whose panels I sit on_',
  '**I can tell from the minute whether the decision was said out loud, and I should like to say how.** ⚠ **It is not a complaint; two of you do it most of the time.**',
  '**How I can tell.** ⚠ **A decision said in the room has a clause in it that the chairman would not have chosen.** _Including a December_ — **the morning side added that.** **A decision written afterwards reads as one person\'s sentence, because it is.**',
  '**What I do when it was not said.** **I write what I think was decided and show it to the chairman.** ⚠ **So the version that goes to eleven people is one two of us agreed in a doorway.**',
  '**What it has cost, once.** ⚠ **In October the weighting went out as _a sixth each_ and two of the panel remember _an eighth_.** **We have appointed one person on my version.**',
  '**What I am asking for.** ⚠ _I am going to write this: ______. Correct me._ **Twelve seconds, before the next item, and slowly enough for me to write it.**',
  '**And what I shall do from now on.** ⚠ **If it was not said, I shall say so at the time:** _I cannot write that; can somebody give me the sentence?_',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**THE CLAUSE I LOST** · T. Ayoub · 10 June · _to the depot office, and to whoever chairs the Tuesday_',
  '**I have taken the note at the depot meeting for four years, and I can tell from four lines whether the chairman said the decision aloud.** ⚠ **This is not a complaint: two of the three of you do it, and one of you does it every time.**',
  '**How I can tell.** ⚠ **A decision said in the room has somebody else\'s clause in it.** _Laden and not net_ — **the gate supervisor put that in, in the room, after the chairman had read the sentence back.** **A decision I wrote up afterwards is smooth, and smoothness in a note is a warning.**',
  '**What I do when it was not said.** **I write what I believe was decided and take it to the chairman the same evening.** ⚠ **Which means the version that goes to nineteen drivers is one that two of us agreed in a yard.**',
  '**What it cost, once, that I know of.** ⚠ **In 2023 the meeting agreed a tonnage and I wrote _four tonnes_.** **Two people remember _four tonnes laden_.** **Nobody has ever settled it, and drivers have been turned back on my version for two years** — **and the ones turned back are the ones who read the note carefully.**',
  '**What I am asking for, and it is twelve seconds.** ⚠ _I am going to write this: ______. Correct me._ **Before the next item, and slowly enough for me to get the subordinate clause** — **because at speaking speed I keep the decision and lose the condition on it.**',
  '**And what I shall do from now on.** ⚠ **If nobody has said it, I shall say so at the time:** _I cannot write that; can somebody give me the sentence?_ **I have not said it in four years and I know why: it sounds like an accusation.** **It is not one, and the alternative is my version of your meeting.**',
]));
out.push(A('**205 words, the chairs protected in the second sentence, the fingerprint given as a real clause in somebody else\'s English, both versions of the disputed decision printed with their consequence, and an obligation taken on himself at the end.** ⚠ **The sentence that earns the band is _the ones turned back are the ones who read the note carefully_** — **it names who pays for an unformulated decision**, and the answer is always the most conscientious reader.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: both versions printed, with their consequence.** _"I wrote four tonnes. Two people remember four tonnes laden… drivers have been turned back on my version for two years."_ ⚠ **Both, and then what followed.** **Mine prints one version and says the other was different**, which asks the reader to take my word for the dispute.',
  '**One thing to keep, and why it works.** _"at speaking speed I keep the decision and lose the condition on it"_ **It explains exactly what speed costs**, and it is a thing a chairman can act on in the next meeting.',
  '**Ranking of the slip I was given.** **1** both versions with their consequence **2** the obligation taken on yourself **3** the fingerprint as a real clause **4** the readers protected _(protected, in the second sentence, and generously)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The formulation at speaking speed and then slowly, with the room writing both times.** **Read back what the room has: the fast version produces four different sentences in a room of eight**, and the four differ in the same place — **the subordinate clause.** **Finish on Mr Barghouti\'s sentence:** **the trial has been running on my version for two years.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**My sentence from Tuesday:** _the gate telephones the supplier before any load is turned away, from June._**_',
  '⚠ _**The other person\'s:** _we are going to try telephoning first for the Qassaa loads._**_',
  '_**Which is not the same arrangement at all** — **mine covers every supplier and theirs covers one.** ⚠ **Nobody read anything back, and the gate is doing theirs.**_',
]));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  Naming what is not being decided'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The answer to the second question is almost always four words** — _we will come back to that_ — **and those four words are what was acted on.** **Collect four cases and write the four words on the board once; they will do the rest of the teaching.**'));
out.push(A('**b** Closes an open item: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 is the one the room will reject** — **it has no owner and no date for the work** — **and it is correct, because it says so.** **An honest close with no owner is a close; a close with an invented owner is worse than leaving the item, because a date now exists and nobody is working to it.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **what is not decided · what is needed before it can be · who is getting that thing, by when**; and **an item that is only _left_ is acted on by somebody.**'));
out.push(A('**b** **1** ⚠ **The stores clerk ordered the paper on the Monday, taking it from the fourth paragraph of the minutes, which records what two people said they would prefer.** **The chairman had said _we will come back to that_, at about twenty past four.**   **2** ⚠ **Say it, in the same form:** _not decided: the roster. Nobody is getting the figures, which is why this will come back unchanged in July._'));
out.push(NOTE('⚠ **The six words are the only part of this unit that nobody but a chairman can supply, and the key should say so plainly:** _nobody acts on this before 5 June._ **A minute-taker cannot write it if nobody said it**, and the most conscientious person in the room will otherwise act on the nearest paragraph. ⚠ **And the honest close with no owner is the sentence the cycle is really for.** **Nobody enjoys it, it sounds like defeat, and it is the only thing that moves a standing item:** **Mrs Sabbagh said it about the roster and Mr Hariri volunteered within a minute for something nobody had ever asked him to do.** **Tell that as an event rather than as a claim.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(needed from outside)_ _Not decided: the February order. The budget line is needed; Mr Saqqal is getting it by 1 June; on the agenda for 5 June._',
  '**2** _(somebody absent)_ _Not decided: the moderation. Mrs Sweidan returns on 12 June; she is getting the four plans by the 15th; on the agenda for 19 June._',
  '**3** _(no owner, said plainly)_ ⚠ _Not decided: the roster. Nobody is getting the figures, which is why this will come back unchanged in July._',
  '**4** _(**we will come back to that**, and the repair)_ ⚠ _We will come back to that_ → _not decided; what is needed is the stamp hours; I am writing to the ministry by Friday._',
  '**5** _(the room must be told not to act)_ _Nobody acts on this before 5 June._',
]));
out.push(A('⚠ Item **3** is marked on the consequence clause and not on the admission: **_nobody is getting the figures_ alone is a shrug; _which is why this will come back unchanged in July_ is a finding, and it is the half that produces a volunteer.** Item **5** is scored at one mark and is worth more than the other four put together in practice — **ask who in the room has ever heard it said.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The February order; the budget line has not been issued._',
  '**B** **Not decided: the February order.** **The budget line is needed; Mr Saqqal is getting it by 1 June; on the agenda for 5 June.** **Nobody acts before then.**',
  '**A** _(the ⚠ row)_ _The roster; the figures have never been collected by anybody._',
  '**B** ⚠ **Not decided: the roster.** **Nobody is getting the figures** — **which is why this will come back unchanged in July.** ⚠ **I am not inventing an owner for it, and if nobody volunteers before the next meeting I shall propose that it comes off the agenda.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three parts for each item, and the sentence to the room where there was one. ⚠ **The four ⚠ rows have no owner**, and the honest close says so with its consequence attached: _which is why this will come back unchanged._ **A pair that invents an owner has made the item worse than leaving it**, because a date now exists and nobody is working to it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Not decided: the one-page excursion note for the gate.** **It is needed before the gate can stop telephoning me; I am writing it by 20 June; on the agenda for 2 July.**_ ⚠ _**And the honest question: is there an owner, or am I inventing one?** **There is, and it is me, and I have been the owner for eleven months without having been named.**_',
  '**b** ⚠ _**Apologetically:** _I am afraid we have not managed to get to the note again._ **My partner said she would ignore that and act on the other** — **because the first is a chairman\'s feeling and the second is a date with my name on it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The chairman had said four words about the paper order — we will come back to that — at about twenty past four. The stores clerk ordered the paper on the Monday, and told Adnan afterwards that he had taken it from the fourth paragraph of the minutes, which records what two people said they would prefer. So an item that is only left is not left: somebody acts on it, and usually the person whose job is nearest to it, reading honestly. Nour said she says those four words most weeks, and everybody does, and they feel like politeness — they are an instruction to the most conscientious person in the room to work out what you meant. Omar asked what closes an item, and three parts: what is not decided, what is needed before it can be, and who is getting that thing by when. Dima said the third is the one that gets left out, and the third is what makes a closed item different from a postponement: the budget line is needed, Mr Saqqal is getting it by 1 June. Without a name and a date, on the agenda for 5 June is a promise about a meeting and not about the work. Rim asked for the sentence that stops the stores clerk, and nobody acts on this before 5 June — six words, said to the room, and the only part of this that is purely a chairman’s job, because a minute-taker cannot write it if nobody said it. Bassel asked what happens when there is no owner, since half their open items have nobody, and then you say that in the same form and the meeting hears what it has just done: not decided, the roster, nobody is getting the figures, which is why this will come back unchanged in July. Nobody enjoys that sentence and it is the most useful one in the cycle. Nour said six of her last eight meetings have had the roster on them. And that sentence, said twice, is how an item either acquires an owner or comes off the agenda. And Mazen asked about saying it out loud: as a decision, in the same voice as a decision, and not apologetically.']));
out.push(A('Listener task: the partner\'s three parts and whether the owner is real. ⚠ **About a third of any room names an owner who has never been told.** **That is not dishonesty; it is the commonest shape of an open item** — **somebody is assumed to be doing it, usually the person nearest to it, usually the person writing the close.** **The repair is one sentence to that person, and it is the homework.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _We will come back to that._ → **✓** not decided, in three parts.   **✗** _Let us leave it for now._ → **✓** what is needed, and who is getting it.   **✗** One date only. → **✓** a date for the work and a date for the meeting.   **✗** An invented owner. → **✓** nobody is getting it, and why that matters.   **✗** No instruction to the room. → **✓** nobody acts before then.   **✗** _I am afraid we have not managed to…_ → **✓** not decided, flat.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ _We will come back to that_ — **and by her own count of the minutes, at twenty-nine of the last thirty-two items that were not decided.** **The counting is the thing to praise: a chairman who says _I have often said_ has not looked.**'));
out.push(A('**2** ⚠ **In April the escalation wording went out in the form two people in the room had said they would prefer, and nobody had decided it.** **The person who sent it is the most careful person in the section and she was reading the minutes honestly** — **and the wording has been going out for nine weeks.** **The protection of that person is not politeness; the fault is in the four words.**'));
out.push(A('**3** ⚠ **She said nobody was getting the figures and that this is why it would come back unchanged in July, and the room was quiet for a moment.** **Then Mr Hariri said he would get them** — **which nobody had ever asked him to do and which he can do in an afternoon.** **Two years, six meetings, and the item moved because somebody heard it described accurately.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SIX WORDS** · A. Barghouti · 12 June · _to the purchasing committee_',
  '**On Thursday I was asked to write two items as _not decided_ and the chairman said out loud that nobody was to act on either.** ⚠ **It is the first time in nineteen years I have been able to write that line.**',
  '**What used to happen.** ⚠ **An item was left, and the nearest person acted.** **The paper was ordered in March from the fourth paragraph of a minute.**',
  '**What was said on Thursday.** ⚠ **_Not decided: the February order._ The budget line is needed; Mr Saqqal is getting it by 1 June; on the agenda for 5 June.** **_Not decided: the reject limit._ The two years of figures are needed; Mrs Shaaban is getting them by 11 June.**',
  '**And the sentence after each.** ⚠ _Nobody acts on this before the fifth._ **Six words, twice.**',
  '**What I did differently.** **I wrote them as they were said and I did not tidy them.** ⚠ **Both have a correction in them that I would not have chosen.**',
  '**And one thing I shall ask for.** ⚠ **The same six words at every item that is not decided** — **because the only reason the paper was ordered in March is that nobody said them.**',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**TWENTY-NINE OF THIRTY-TWO** · R. Shaaban · 14 June · _to the five of us on the gate review_',
  '**On the fourth I closed two items without a decision and told the room that nobody was to act on either of them.** ⚠ **One of you came to me afterwards and said you had been about to telephone the supplier.**',
  '**What I used to say.** _We will come back to that._ ⚠ **I went through two years of minutes and counted: twenty-nine of the thirty-two items that were not decided.** **It feels like politeness and it is an instruction to whoever is nearest to guess what I meant.**',
  '**What it cost once, that I know of.** ⚠ **In February a supplier was told the limit was three a consignment.** **Nobody had decided that; two of us had said we had always treated it so.** **The man who wrote to him is the most careful person on the gate and he was reading my minute honestly** — **and the supplier has been working to it for four months.**',
  '**What I said on the fourth, three parts each.** ⚠ **_Not decided: the limit._ The agreement wording is needed; I am getting it from the purchasing office by 20 June; on the agenda for 2 July.** **_Not decided: the one-page note._ Nobody is getting it** — **which is why it has been on six of our last twelve agendas.**',
  '**And the sentence after each.** ⚠ _Nobody acts on this before the second of July._ **Six words, twice, about eight seconds.**',
  '**The one I did not enjoy.** ⚠ **The note.** **I said nobody was getting it and the room was quiet, and then the gate supervisor said he would draft it if I would check it** — **which is what should have happened eleven months ago and what nobody had ever asked him for.**',
]));
out.push(A('**201 words, the habit counted rather than estimated, the person who acted protected explicitly, three closures printed with their dates, the six words priced in seconds, and the uncomfortable sentence given an outcome as an event.** ⚠ **The sentence that earns the band is _he was reading my minute honestly_** — **three words that move the fault from a careful man to the chairman**, which is the only place a remedy exists.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: your own habit counted.** _"I went through two years of minutes and counted: twenty-nine of the thirty-two."_ ⚠ **Counted, with a denominator.** **Mine says _I have said it more often than I would like_**, which is an impression and gives the reader nothing to measure against.',
  '**One thing to keep, and why it works.** _"he was reading my minute honestly"_ **It protects him and accuses the document in the same three words**, and it is the sentence I shall borrow.',
  '**Ranking of the slip I was given.** **1** the habit counted **2** the actor protected **3** the uncomfortable sentence with its outcome **4** the closures printed _(three of them, with dates, and the easiest to copy)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The closure apologetically and then flat.** **The room says which it would act on and which it would ignore** — **and the apologetic one is ignored every time, because a chairman\'s regret is not an instruction to anybody.** **Finish on Mrs Sabbagh\'s sentence:** **two years, six meetings, and the item moved because somebody heard it described accurately.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The count from my last two sets of minutes:** eleven items not decided, and nine of them closed with _we will come back to that_._',
  '⚠ _**Of the other two:** one had a date and no owner, and one had an owner who had not been told._',
  '_**So the real figure is nought out of eleven.** ⚠ **And the person who had not been told was me.**_',
]));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  Interrupting, and letting somebody finish'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Collect the two numbers from every pair and write the totals on the board: people present, and people who said nothing.** **Then the second question, which is the cycle:** **did anybody go back for them?** **The answer is nobody, in almost every case, and it is nobody\'s job but the chairman\'s.**'));
out.push(A('**b** Useful interruptions: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the one that looks polite and is not** — _sorry, can I just stop you there?_ **names no reason and gives nothing back**, **so the speaker does not know whether to resume.** **An interruption that leaves the speaker guessing has the same effect as _we know all that_ and takes longer.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a chair who never interrupts, and a chair who interrupts without saying why**; and a useful interruption **names its reason and gives the turn back.**'));
out.push(A('**b** **1** ⚠ **Two of the eleven have spoken at six of the last eight meetings; three have spoken at none of them** — **and all three are on the circulation list of everything the meeting produces.**   **2** ⚠ **Not with an open question, which is a second ordeal.** **Ask something with a fact in it:** _what did the March figures show?_ **Not _is there anything you would like to add?_**, **which is an invitation to perform and will be declined.**'));
out.push(NOTE('⚠ **The expensive thing in this cycle is invisible and the class will not believe it until a student says it: a person talked over does not resume.** **Miss Sweidan was that person four times and came back in none of them** — **and her reason is the one to read out, because it is not about feelings:** **resuming requires you to decide that what you were saying was worth the interruption, and by the time you have decided, the item has gone.** ⚠ **And then the arithmetic that makes it a chairman\'s problem rather than a courtesy: if three of eleven say nothing, the minute records the views of eight and goes out to eleven, and the three are bound by it.**'));
out.push(NOTE('**Two practical rules, and the second is the one nobody expects.** ⚠ **Go back by name** — _one moment: Mrs Sweidan had not finished_ — **because the person who was interrupted cannot say it without appearing to complain.** **Four words, and it is the chairman\'s job and nobody else\'s.** ⚠ **And draw the silent out with a fact-question and never with an open invitation.** _What did the March figures show?_ **Miss Sweidan has declined the open version twice and says why: it is a performance and she had nothing prepared** — **and then the line the cycle turns on:** _ask me what the figures showed; I always know what the figures showed._ ⚠ **One caution for the teacher: do all of this about the room and never about a named student in public.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(for a figure)_ _Let me stop you — I want the number of loads, and then you finish._',
  '**2** _(for a date)_ _Let me stop you there — when was that? And then go on._',
  '**3** _(going back for somebody)_ ⚠ _One moment: Mr Ayoub had not finished._',
  '**4** _(**we know all that**, so that you hear it)_ ⚠ _Yes, yes, we know all that_ — **and the speaker stops for the rest of the afternoon.**',
  '**5** _(drawing out, with a fact)_ _Miss Mansour, which of the two forms is quicker at the bench?_',
]));
out.push(A('⚠ Item **5** is marked on one thing: **could anybody else present have answered it?** **If they could, it is a general invitation with a name in front of it and will be answered in four words.** Item **3** is practised aloud until it is four words and nothing more — **_one moment, I think perhaps Mr Ayoub may not quite have finished what he was saying_ is an apology for interrupting the interrupter**, and the room hears that and not the name.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B** **Let me stop you — I want the number of loads turned back in May, and then you finish.**',
  '**B** **One moment: Mrs Sweidan had not finished.**',
  '**And the ⚠ rows.** ⚠ **A has begun on the figure the meeting was called to decide, and B should not interrupt at all** — **a chairman who stops that has saved a minute and lost the afternoon.**',
  '⚠ **And where A is correcting the chairman\'s own formulation, the correction is the most valuable thing said all day**, **and B\'s job is to write it down.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each interruption\'s reason, and whether the turn was given back. ⚠ **The four rows marked ⚠ should not be interrupted at all** — **a chairman who stops a correction to their own formulation, or the person who has the only copy of the figures, has saved a minute and lost the meeting.** **Ask the person who was interrupted, which is the only answer that counts.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**My two sentences.** _Let me stop you — I want the date, and then you finish._ **And:** _One moment: Mr Deeb had not finished._**_ ⚠ _**The person I expect to use the second on is Mr Deeb**, **who has been stopped at three of the last four meetings by the same two people** — **and I had noticed it each time and said nothing.**_',
  '**b** ⚠ _**Above my voice, my partner\'s version sounded like being told off, and I said so.** **At the same volume I would have carried on.** **The words were identical, and I could not have told you that before we did it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour counted who talks: two of the eleven have spoken at six of the last eight meetings, and three have spoken at none of them — and the three are on the circulation list of everything the meeting produces, one of them being the person who sends the escalation wording out. Then the two faults, which are opposite: a chair who never interrupts gives the afternoon to whoever will not stop, and a chair who interrupts without saying why teaches the room to hurry, and a hurried room produces the shortest contributions from the people who speak least. Omar asked what a useful interruption does, and two things: it names its reason and it gives the turn back — let me stop you, I want the figure, and then you finish. Eleven words, and the speaker is not being told to sit down. Dima asked about the one nobody does, which is going back for the person who was talked over: one moment, Mrs Sweidan had not finished. Four words, and it is the chairman’s job and nobody else’s, because the person who was interrupted cannot say it without appearing to complain. Lubna said she has been that person about four times and did not come back in any of them, and nobody does: a person talked over does not resume, they go quiet for the rest of the afternoon, and the room records it as agreement, which is the most expensive thing in the unit and is invisible in the minutes. Rim asked whether she should just ask the three who never speak, and not with an open question, which is a second ordeal — ask them something with a fact in it, such as what the March figures showed, and not is there anything you would like to add, which is an invitation to perform and will be declined. Adnan said the silent three are a problem for him too: he writes down what was said, so if three of eleven say nothing, the minute records the views of eight people and goes out to eleven, and the three are bound by it. Bassel asked about volume, which is normal volume, never above the speaker, because an interruption louder than the person speaking is a reprimand whatever its words. And Mazen asked how you know which you did, and you ask the person you interrupted, afterwards and in private, because they are the only reliable source.']));
out.push(A('Listener task: the partner\'s two sentences and the name they expect to use the second on. ⚠ **Almost everybody has a name**, and most of them say they had noticed and said nothing. **That is the finding and it should be said once, without reproach:** **the four words are not difficult and they are not said, because nobody has ever understood them to be part of the job.** **Then ask whether the person whose name it is knows.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Sorry, can I just stop you there?_ → **✓** I want the figure, and then you finish.   **✗** _Yes, yes, we know all that._ → **✓** name the reason.   **✗** Never interrupting. → **✓** the afternoon goes to whoever will not stop.   **✗** _Is there anything you would like to add?_ → **✓** what did the March figures show?   **✗** Interrupting above the speaker. → **✓** the same volume.   **✗** Leaving the interrupted person to resume. → **✓** four words, by name.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because resuming requires you to decide that what you were saying was worth the interruption** — **and by the time you have decided, the item has gone.** **And what it was not: she says it was not because she was offended**, **which is the sentence that stops the chairman treating it as a matter of feelings.**'));
out.push(A('**2** ⚠ **She was eleven words into the sentence about the wall when she was stopped.** **The minute records that the committee discussed the condition of the building and approved the plastering** — **and the eleven millimetres are not in it because they are not in the room, and she had them in her hand.**'));
out.push(A('**3** ⚠ **She does not want to be asked whether she has anything to add** — **she has been asked twice and declined both times, because it is a performance and she had nothing prepared.** **What she wants instead:** _ask me what the figures showed; I always know what the figures showed._ **And she takes something on herself:** **she will say the number first from now on, because a number is harder to interrupt than a clause.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THREE TIMES** · M. Hariri · 16 June · _to Mrs Shaaban, because she asked_',
  '**You asked whether I had ever been stopped at that review and whether I started again.** ⚠ **Three times, and no.**',
  '**The three.** **November, on the handset batch. February, on the codes. April, on the codes again.** ⚠ **The same person each time, and he was not being rude.**',
  '**What happened afterwards.** ⚠ **I said nothing else at any of the three.** **Not from annoyance: because by the time I had decided it was worth saying again, you had moved on.**',
  '**What it cost in April.** ⚠ **The distributor\'s codes are still not in the minute.** **I had the two code numbers in my hand and the note says the codes were discussed.**',
  '**What would have worked.** ⚠ _Mr Hariri had not finished._ **Said by you.** **If I say it, I am complaining; if you say it, it is the order of business.**',
  '**And one thing I had not expected to write.** ⚠ **Do not ask me whether I have anything to add.** **Ask me what the codes are.**',
  '**What I shall do myself.** ⚠ **I shall say the number first.**',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**FIVE TIMES, AND I NEVER CAME BACK** · B. Tahhan · 18 June · _to the chairman of the pricing meeting, because he asked_',
  '**You asked me whether I had been talked over and whether I resumed.** ⚠ **Five times in two years, and I resumed in none of them.** **I am answering in writing because in the room I would have told you it was nothing.**',
  '**The five.** **Twice on the stamp hours, twice on the make-ready figures, once on the reject run.** ⚠ **Four of the five were the same two people, and in none of the five was anybody being rude** — **I had paused, and a pause in that room is a gap.**',
  '**What happened afterwards, which you cannot see.** ⚠ **I said nothing else in four of those five meetings.** **Not because I was annoyed: because starting again means deciding in public that what you were saying mattered enough to interrupt the interruption** — **and while you are deciding, the item closes.**',
  '**What it cost in March, exactly.** ⚠ **I was about to say that fourteen of the twenty-two refusals arrived between four and half past.** **The minute records that the refusal policy was discussed and confirmed.** **The fourteen are in my own refusal book and they are not in any document of this committee** — **and the policy was confirmed without them.**',
  '**What would have worked, and it is four words.** ⚠ _Mr Tahhan had not finished._ **Said by you and not by me.** **From you it is the order of business; from me it is a man complaining about being interrupted, which is how I would have heard it myself.**',
  '**And one thing I had not expected to write.** ⚠ **Do not ask me whether I have anything to add.** **I was asked that in January and said no, with the fourteen in my pocket.** **Ask me what the refusal book shows.**',
  '**What I shall do myself.** ⚠ **I shall say the figure before the sentence from now on, because a number is harder to interrupt than a clause.**',
]));
out.push(A('**206 words, the answer in the second sentence, the interrupters exonerated twice, the cost priced as a figure absent from a document, and an obligation of his own at the end.** ⚠ **The sentence that earns the band is _I was asked that in January and said no, with the fourteen in my pocket_** — **it shows the open invitation failing, in one image**, and it is the argument for the fact-question that no explanation could make.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the cost priced as an absence from a record.** _"The fourteen are in my own refusal book and they are not in any document of this committee — and the policy was confirmed without them."_ ⚠ **An absence, named, with the decision that was taken without it.** **Mine says _I felt that my point was not heard_**, which cannot be acted on by anybody.',
  '**One thing to keep, and why it works.** _"a pause in that room is a gap"_ **Seven words that exonerate the interrupters completely and still leave the chairman something to do.**',
  '**Ranking of the slip I was given.** **1** the cost as an absence from a record **2** the interrupters exonerated **3** the obligation of your own **4** the answer before the explanation _(second sentence, and the easiest of the four)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The same interruption above the voice and then at the same volume.** **The person interrupted says which one they would have resumed after, and it is the second, from everybody** — **including the students who had just said that volume could not matter.** **Finish on Miss Sweidan\'s sentence:** **the eleven millimetres are not in the minute because they are not in the room, and I had them in my hand.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I asked the man I stopped in April whether he resumed.**_',
  '⚠ _**His words:** _no. I was not offended. I decided it was not worth the fuss and then the item had gone, and I could not remember afterwards what I had been going to say about the codes._**_',
  '_**Which is worse than I expected** — **the thing itself was lost, not just the turn.** ⚠ **I had thought he had decided not to bother.**_',
]));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  The item that keeps coming back'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The third reason is the one to collect and it is commoner than anybody expects:** **the item is not a question at all.** **Most rooms produce two or three, and in every case the real disagreement is about what something is for** — **a shift, an archive, a handover, a form.**'));
out.push(A('**b** Deals with a returning item: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 invites the laugh and the laugh is the agreement not to decide**, **which is the sentence of the cycle.** **5 is the worst of the three** — _I know, I know. Next month_ — **because it promises a seventh meeting in four words.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **nobody owns it · this meeting cannot decide it · it is not a question at all**; and the chairman must say **the count, before the item.**'));
out.push(A('**b** **1** ⚠ **A disagreement about what the section is for** — **two people think the afternoon shift exists to clear the queue and two think it exists so that somebody is in the building at four** — **and no roster will ever come out of that.**   **2** ⚠ **The minute, saying twice that fifty of the ninety minutes had gone on the car park and that it had changed nothing.** **Nobody argued; somebody just took it off.**'));
out.push(NOTE('⚠ **The laugh is the thing to teach and it will be recognised instantly.** **A room that laughs at an item has agreed, without saying so, that it is not going to be decided** — **and the twenty minutes that follow are a formality everybody can see.** **The count, said before the item, removes the laugh:** _this is the sixth time the roster has been on this agenda._ ⚠ **Then the three reasons, and the third is the one to spend the lesson on, because it cannot be fixed by any amount of discussion of the item.** **Its sentence is short and nobody says it:** _we are not disagreeing about the roster._ **That is 17.3 in a committee room** — **nobody has said what would settle it because nothing on the agenda is the thing in dispute.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(nobody owns it)_ _This is the sixth time. Either somebody takes the figures today or it comes off._',
  '**2** _(another meeting owns it)_ _This is the ninth time. The budget line is not ours; this goes to the purchasing committee and off our agenda._',
  '**3** _(not a question at all)_ ⚠ _This is the fourth time. We are not disagreeing about the hours: two of us think the shift exists to clear the queue and two think it exists so that somebody is here at four._',
  '**4** _(with the apology attached)_ ⚠ _I am sorry to say we seem to be back on the roster again_ — **and the room laughs.**',
  '**5** _(one more life)_ _It comes back once, on 10 July; if it is not decided then it comes off and the minute will say so._',
]));
out.push(A('⚠ Item **3** is marked on whether both halves of the real disagreement are stated and whether either side could sign them — **which is 17.2 inside a committee, and a student who states only the side they are not on has not done it.** Item **5** is the option nobody uses and the easiest to adopt: **an item with one more life behaves differently from an item with a standing place.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The roster; six of the last eight meetings._',
  '**B** **This is the sixth time the roster has been on this agenda.** **Nobody owns the figures.** **Either somebody takes them today or it comes off.**',
  '**A** _(the ⚠ row)_ _The afternoon shift hours; four meetings, two views of what the shift is for._',
  '**B** ⚠ **This is the fourth time, and it is not a question about hours.** **We are not disagreeing about the roster:** **two of us think the shift exists to clear the queue by six and two think it exists so that somebody is here at four.** ⚠ **Both are defensible and no arrangement of hours satisfies both, so I am taking the hours off the agenda and putting the question on it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The count, the reason and the remedy for each. ⚠ **The four rows marked ⚠ are not questions about the item at all** — **three are disagreements about what something is for, and the fourth belongs to another body.** **A pair that applies the fork to one of the three has promised a decision that cannot be reached.** **Make the listeners name the real disagreement**, beginning _we are not disagreeing about…_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**The item:** the one-page excursion note. **The count: six of the last twelve.** ⚠ **The reason: nobody owns it, and the nobody is me.** **The remedy: I am getting it by 20 June or it comes off and the gate goes on telephoning.**_',
  '**b** ⚠ _**With the apology in front of it, the room laughed.** **Flat, nobody laughed and the gate supervisor asked whether he could draft it.** **Same count, same item, nine seconds apart.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The roster has been on six of Nour’s last eight agendas, and what she says when she reaches it is the roster again, I am afraid — and everybody laughs, and then they spend twenty minutes on it. The laugh is the thing to notice: a room that laughs at an item has agreed, without saying so, that it is not going to be decided, and the twenty minutes are a formality everybody can see. Omar asked what the first thing to say is, and the count, before the item: this is the sixth time the roster has been on this agenda. Nine words, and the laugh does not come. Dima asked what comes next, and then one of three things is wrong with it, and they need different remedies: nobody owns it, or this meeting cannot decide it, or it is not a question at all. Rim asked about the third, which looks like a question about the roster and is a disagreement about what the section is for — those cannot be settled by any amount of roster discussion, and they are commoner than anybody expects, and they return for ever because nothing on the agenda is the thing in dispute. Nour said that is the roster: two of them think the afternoon shift exists to clear the queue and two think it exists so that somebody is there at four o’clock. Then the roster has been on six agendas as a proxy and no roster will ever come out of it, and the honest sentence is we are not disagreeing about the roster. Adnan asked about the first two reasons, and a fork said out loud: either somebody takes the figures today or it comes off. Bassel asked about the option nobody uses, which is to hold it over to one named date with nothing in between — it comes back once, on 26 June, and if it is not decided then it comes off and the minute will say so. Adnan said the car park came off theirs because the minute said twice that fifty of the ninety minutes had gone on it and it had changed nothing: nobody argued, somebody just took it off. Hiba asked about the honest version when an item stays for a bad reason, and you say it: it is on this agenda because taking it off would look like giving up. And Mazen asked about saying the count out loud, which is as information, with nothing apologetic round it, because an apology invites the laugh and the laugh is the agreement not to decide.']));
out.push(A('Listener task: the partner\'s count, reason and remedy, and the real disagreement where there was one. ⚠ **Collect the third-reason items and read three of them out.** **They have a family resemblance that the room will hear at once: every one is a disagreement about what something is for.** **Then one question:** **has that sentence ever been said in the meeting?** **The answer is no, which is why the item is on its sixth agenda.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _The roster again, I am afraid._ → **✓** this is the sixth time.   **✗** _We seem to keep coming back to this._ → **✓** a count and a fork.   **✗** _I know, I know. Next month._ → **✓** one more life, with a date.   **✗** Applying the fork to a values disagreement. → **✓** we are not disagreeing about the roster.   **✗** Stating only the other side\'s view. → **✓** both, either of them signable.   **✗** The count with an apology in front of it. → **✓** flat, as information.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Six agendas at about twenty minutes each: two hours** — **and in those two hours no roster has ever been proposed, amended or rejected.** **There is nothing to find in the minutes, because nothing happened.** **That is the pairing to notice: a count of hours beside an empty record.**'));
out.push(A('**2** ⚠ **Two believe the afternoon shift exists to clear the queue by six o\'clock; two believe it exists so that somebody is in the building at four, when the ministry telephones.** **Both are defensible, neither has ever been said out loud in that room, and no arrangement of hours can satisfy both.** **What she asks for is not a roster but forty minutes on one question, with nobody\'s hours on the table.**'));
out.push(A('**3** ⚠ **She has chaired all six of those meetings** — **and the reason the real disagreement has never been said in the room is that she has been treating it as a scheduling problem for two years.** **And then the sentence that makes it structural rather than an apology:** _I was treating it that way because a scheduling problem is one I know how to chair._'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE PHOTOGRAPHS ARE NOT THE ARGUMENT** · L. Sweidan · 18 June · _to the studio_',
  '**The photographs have been on six of our last seven agendas and I have worked out why.** ⚠ **We are not disagreeing about the photographs.**',
  '**The count first.** **Six meetings, about thirty minutes each: three hours.** ⚠ **And no decision about printing has ever been proposed or rejected.**',
  '**What we used to say.** _The photographs again._ ⚠ **And everybody laughed.**',
  '**What the disagreement actually is.** ⚠ **Two of us think the committee papers exist to let five people decide in twenty minutes.** **Two of us think they exist as the record of what the studio advised.** **Both are defensible, and colour photographs are necessary for the second and a waste for the first.**',
  '**So what I am asking for.** ⚠ **Thirty minutes on one question:** _what are the committee papers for?_ **If we answer it, the photographs take four minutes.**',
  '**The dates.** ⚠ **The question on 2 July, first item. The photographs come back once, on 16 July.**',
  '**And one thing about myself.** ⚠ **I have put the photographs on the agenda five of those six times.**',
]));
out.push(S('Stage 7 · Write freely (sample, 199 words)'));
out.push(SAMPLE([
  '**THE ARCHIVE CHARGE IS NOT THE ARGUMENT** · J. Attar · 20 June · _to the four other moderators_',
  '**The archive charge has been on five of our last eight Tuesdays and I have worked out why.** ⚠ **We are not disagreeing about the charge.**',
  '**The count first, because it is worse than it feels.** **Five evenings, about forty minutes each: over three hours.** ⚠ **And in those three hours no figure has ever been proposed, amended or voted on.** **There is nothing in the notes, because nothing happened.**',
  '**What we used to say when we reached it.** _The archive, I suppose._ ⚠ **And somebody groaned, and I had taken that for weariness** — **I now read it as our agreement that it was not going to be settled.**',
  '**What the disagreement actually is.** ⚠ **Two of us believe the archive exists so that anybody can read what the trade said in 2019.** **Two of us believe it exists so that the people who built it are not working for nothing.** **Both are defensible, and I hold the first and have never once said so in that room.** **No charge, at any figure, satisfies both.**',
  '**So what I am asking for is not a figure.** ⚠ **It is forty minutes on one question, with no sums on the table:** _what is the archive for?_ **If we can answer it, the charge takes ten minutes. If we cannot, it comes off our agenda, because five more Tuesdays will produce what the last five produced.**',
  '**The dates.** ⚠ **The question on 1 July, first item, forty minutes. The charge comes back once, on 15 July, and comes off if it is not settled.**',
  '**And one thing about myself.** ⚠ **I have chaired three of those five evenings and I let the sums start each time** — **because a question about a figure is one I know how to chair, and a question about what something is for is not.**',
]));
out.push(A('**199 words, the count in hours beside an empty record, both sides of the real disagreement stated so that either could sign them, the question asked for instead of the item with a consequence attached, and his own share given as a habit rather than an apology.** ⚠ **The sentence that earns the band is _I hold the first and have never once said so in that room_** — **it puts the writer inside the disagreement he is describing**, which is what makes the rest of the page credible.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: both sides signable.** _"anybody can read what the trade said in 2019"_ **and** _"the people who built it are not working for nothing."_ ⚠ **Either side would sign its own half.** **Mine gives my side in a sentence and the other in a clause**, which is 17.2 failed in a committee paper.',
  '**One thing to keep, and why it works.** _"a question about a figure is one I know how to chair, and a question about what something is for is not."_ **It explains five evenings with one habit**, and it is a habit, not a fault.',
  '**Ranking of the slip I was given.** **1** both sides signable **2** your own share as a habit **3** the count in hours with the empty record **4** the question asked for _(asked for, with dates, and the easiest to write)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The count with an apology in front of it, and then flat.** **The room laughs after the first without being asked to**, **and that is the demonstration: the apology produces the laugh and the laugh is the agreement not to decide.** **Finish on Mrs Sabbagh\'s sentence:** **I was treating it as a scheduling problem because a scheduling problem is one I know how to chair.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The arithmetic for my standing agenda:** eleven items, and the four oldest between them account for about fourteen hours this year._',
  '⚠ _**Marked 1, 2 or 3:** six are reason one _(nobody owns them)_, two are reason two, and three are reason three._',
  '_**And the three are the oldest three.** ⚠ **Which I had not expected and which explains why nothing I have tried has moved them.**_',
]));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  The chair\'s one page'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The answer is the fifth part in almost every case** — **the decision sentences, drafted before the meeting** — **and most of the room will say that preparing them would be improper.** **Let that objection stand until the dialogue answers it; it is the most useful misunderstanding in the unit.**'));
out.push(A('**b** **2** — _purpose · the one decision and what cannot be decided · the items with counts · who has not spoken · the drafted formulations._ ⚠ **4 is the near miss:** **the one decision before the purpose** — **and a page that names the decision before the purpose has told the reader what is wanted before saying what the afternoon is for.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the chair gives the page to the person taking the minutes, before the meeting**; and the test is one question to them: **is there anything here you will have to invent?**'));
out.push(A('**b** **1** ⚠ **He read it and asked one thing: who is getting the specification?** **It was not on the page, and it was the only open item that mattered** — **so the page found its own gap, the day before, in about four seconds.**   **2** ⚠ **The drafted sentence is read out as a draft, for correction, and not as a decision.** **A page whose drafted sentences all survive untouched has not been offered for correction; it has been announced.**'));
out.push(NOTE('⚠ **The fifth part is where the class will object and the answer is in two halves.** **First: the sentence is read out as a draft** — _I am going to write this… correct me_, **with a pause** — **so the draft exists for the correction to attach to, which is 19.2.** **Second, and this is the evidence:** **two of Mrs Sabbagh\'s three drafts came back changed in June and the third was changed twice.** ⚠ **A page whose sentences all survive was never offered.** **And the fourth part needs the teacher\'s caution: it holds questions and not judgements.** _Mrs Sweidan — what did the March figures show?_ **A name with a question beside it is a plan; a name on its own is a note about a person** — **and the page is read by somebody else and may be left on a table.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(purpose)_ _This review is to decide which refusals go to the supplier in writing. It stops being necessary when the gate can read the rule itself._',
  '**2** _(the one decision, and what cannot be)_ _We must produce the wording. We cannot change the limit, which is in the agreement, and I shall say so first._',
  '**3** _(an item with its count)_ _The one-page note — sixth time; nobody owns it; ten minutes and a fork._',
  '**4** _(a name with a fact-question)_ ⚠ _Mr Deeb — how many loads did the gate turn back in May?_',
  '**5** _(a formulation drafted for correction)_ _I am going to write this: from July, any load with a reading outside the range is held and I am telephoned. Correct me._',
]));
out.push(A('⚠ Item **4** is marked on exclusivity: **could anybody else in the room answer it?** **If so, it is a general invitation with a name attached.** Item **2** is marked on the second half, which is the one that saves the afternoon — **and the clause _and I shall say so first_ is what turns a note to oneself into a plan.** Item **5** must end in _correct me_: **a drafted sentence without it is an announcement with a day\'s head start.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _This meeting is to decide which escalations we answer in writing._',
  '**B** **Part 1.** **Right place** — **first line.** **Before it: nothing.**',
  '**A** _(the ⚠ row)_ _Mrs Sweidan — quiet, does not contribute._',
  '**B** ⚠ **That is not any of the five parts; it is a note about a person.** **As part four it would have to be a question only she can answer:** _Mrs Sweidan — what did the March figures show?_ ⚠ **And the first version should not be written down at all, because the page is read by the minute-taker.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are notes about people and not plans**, and none of them belongs on a page another person is going to read. **The repair is the same in all four: replace the judgement with a question that has a fact in it.** **Ask what would happen if the page were left on a table.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Five parts, 174 words.**_ ⚠ _**The strike-out: two judgements gone.** _talks too much_ **became** _Mr Deeb — how many loads in May?_, **and** _will object_ **became nothing at all, because I could not turn it into a question and that told me it was not a plan.**_',
  '**b** ⚠ _**My partner, as the minute-taker:** **yes — who is writing the one-page note?** **It is on my page as an item and not as an owner, and I am the owner, and I had not written my own name anywhere.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour gives the chair’s page to Adnan the day before — the whole page, including the sentences she expects to read back. Asked what happened the first time, he said he read it and asked her one thing: who is getting the specification? It was not on the page, and it was the only open item that mattered. So the page found its own gap, the day before, in about four seconds, and that is the test, in one question: is there anything here you will have to invent? The five parts are the purpose in two halves; the one decision this meeting must produce and what it cannot decide today; the items, with a count beside anything that has returned; who has not spoken at the last two meetings, and the question with a fact in it for each of them; and the sentences she expects to read back. Dima said the fifth would stop her, and asked whether it is not deciding the meeting in advance. It would be, if the sentence were read out as a decision — it is read out as a draft, for correction, and the draft exists so that the correction has something to attach to. Nour said two of her three drafts came back changed in June and the third was changed twice, which is the evidence that it is working: a page whose drafted sentences all survive untouched has not been offered for correction, it has been announced. Rim asked how long the page is, and one page, most of it the fifth part, because the formulations are the thing that cannot be composed at four o’clock. Bassel asked whether three names on a page does not feel like a list of the inadequate, and it is a list of the people the minute is binding without quoting, and the chairman is the only person who can see it — so keep the questions on the page and not the judgements, because a name with a question beside it is a plan and a name on its own is a note about a person. Hiba asked what happens afterwards, and the page and the corrections are the minute. And Mazen asked about reading the drafts out, which is done as drafts, with a pause long enough for somebody to speak into.']));
out.push(A('Listener task: what the partner, as minute-taker, would have had to invent. ⚠ **It is an owner or a date in almost every case**, and in about a third of them the missing owner is the chair. **Say that: a chairman writing a page about other people\'s obligations is the person likeliest to leave their own off it.** **Then one instruction for the real thing: give the page away a day early, because a gap found the day before costs nothing and the same gap found at four o\'clock costs the item.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** The one decision before the purpose. → **✓** purpose first, in two halves.   **✗** _Mr Hariri — talks too much._ → **✓** a question only he can answer.   **✗** A drafted sentence with no _correct me_. → **✓** and a pause after it.   **✗** An item with no count. → **✓** sixth time.   **✗** The page kept by the chairman. → **✓** given to whoever writes the minute.   **✗** All the drafts surviving untouched. → **✓** it was announced, not offered.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **That they cannot decide the promise field, because it is not theirs** — **and she will say it in the first minute because last time three people spent twenty minutes on it.** **The reason is what makes it an instruction rather than a disclaimer.**'));
out.push(A('**2** ⚠ _What did the March figures show?_ · _How many of the forty-one came through the gate?_ · _Which of the two forms is quicker to fill in at the bench?_ **What they have in common: each can be answered by that person and by nobody else present** — **and all three people are on the circulation list and bound by whatever is written.**'));
out.push(A('**3** ⚠ **The close for the item she expects to fail:** _not decided, what the afternoon shift is for; two views were stated and neither was withdrawn; the roster comes back once, on 10 July, and comes off if it is not decided._ **And her reason:** _I would rather draft that now than compose it at ten past six._'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**CHAIR\'S PAGE · GATE REVIEW · 2 JULY** · R. Shaaban · _given to the gate supervisor, 1 July_',
  '**Purpose.** _This review is to decide which of June\'s refusals go to the supplier in writing._ ⚠ _It stops being necessary when the gate can read the excursion rule without telephoning me._',
  '**The one decision we must produce.** **The wording of the letter, agreed well enough to send on Friday.** ⚠ **We cannot change the limit, which is in the agreement, and I shall say so before the agenda.**',
  '**The items.** **1 The June refusals _(twenty-five minutes)_.** **2 The one-page note — sixth time; nobody owns it; ten minutes and a fork.** ⚠ **3 The stacking heights — if the chart has not come, two minutes and not fifteen.**',
  '**Who has not spoken at the last two.** ⚠ **Mr Deeb** — _how many loads did you turn back in May?_ **Mr Hamwi** — _which of the two gate books is easier to fill in at night?_',
  '**The sentences I expect to read back.** ⚠ _I am going to write this: the four June refusals go to the supplier in one letter, sent on Friday by me, naming the batch numbers. Correct me._',
  '**And one for the item I expect to fail.** ⚠ _I am going to write this: not decided, the one-page note; I am getting it by 20 July or it comes off. Correct me._',
]));
out.push(S('Stage 7 · Write freely (sample, 208 words)'));
out.push(SAMPLE([
  '**CHAIR\'S PAGE · MODERATORS · 1 JULY** · J. Attar · _given to the member who takes the notes, 30 June_',
  '**Purpose, read out before anything else and not again.** _This meeting is to decide which rules we change this month._ ⚠ _It stops being necessary when a rule change can be proposed in writing and agreed in three days without anybody giving up a Tuesday._',
  '**The one decision we must produce.** **The wording of rule four, so that quotations are covered.** ⚠ **What we cannot decide tonight: the archive charge.** **It is not ours, it has had five of our evenings, and I shall say so before the agenda** — **last time it took twenty-five minutes to discover it.**',
  '**The items.** **1 Rule four _(twenty minutes)_.** **2 What is the archive for? _(forty minutes; the charge has been on five of eight agendas and this is the question underneath it)_.** ⚠ **3 The weekend threads — if the log has not been drawn off, five minutes and not twenty.**',
  '**Who has not spoken at the last two.** ⚠ **Mr Ayoub** — _how many of last month\'s closures were on quoted material?_ **Mrs Nasser** — _which of the two warning forms do new members actually read?_ **Both are on the list and both are bound by whatever we write.**',
  '**The sentences I expect to read back.** ⚠ _I am going to write this: rule four is amended from 1 July so that quoted material is judged by the rule it quotes, and I shall post the correction the same evening. Correct me._',
  '**And one for the item I expect to fail.** ⚠ _I am going to write this: not decided, what the archive is for. Two views were stated and neither was withdrawn. The charge comes back once, on 15 July, and comes off if it is not settled. Correct me._ **I would rather draft that now than compose it at half past nine.**',
]));
out.push(A('**208 words, the purpose in two halves with the instruction about reading it out, the undecidable item with its reason and its history, times and a count on the items, two fact-questions only those people could answer, and a drafted close for the expected failure.** ⚠ **The strongest line is the third item\'s conditional** — _if the log has not been drawn off, five minutes and not twenty_ — **because it is the only line on the page that saves time without deciding anything.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: fact-questions only that person could answer.** _"how many of last month\'s closures were on quoted material?"_ ⚠ **Only he keeps that count.** **Mine says _what do you think about the new form?_**, which anybody could answer and which he will answer in four words.',
  '**One thing to keep, and why it works.** _"if the log has not been drawn off, five minutes and not twenty"_ **It decides in advance how much of the afternoon an item is worth if its material is missing** — **and that is a decision nobody can take at four o\'clock.**',
  '**Ranking of the slip I was given.** **1** the fact-questions **2** the drafted close for the expected failure **3** the undecidable item with its history **4** the times and counts _(there on all three items, and the easiest part of the page)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **One drafted formulation with the pause after _correct me_, and then without it.** **The room says which it would have spoken into, and nobody speaks into the second** — **because a sentence with no pause after it has been announced, however it was worded.** **Finish on Mrs Sabbagh\'s sentence:** **I would rather draft that now than compose it at ten past six.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I gave the page to the gate supervisor the day before and asked the one question.**_',
  '⚠ _**What he said:** _you have not said who is writing the letter. If it is me I need the batch numbers by Thursday._**_',
  '_**Which is an owner and a date, found the day before, in about six seconds.** ⚠ **I had written _sent on Friday_ and not _by whom_, and I would have discovered that on Friday.**_',
]));

// ===================== 19.7 =====================
out.push(pb());
out.push(h2('19.7  Review & Mediate: The chair and the person who was not heard'));
out.push(S('Stage 1 · Get ready – Unit 19 quiz'));
out.push(A('**1** _The meeting was **adjourned** until June._   **2** _Her **proposal** was accepted…_   **3** _The **attendance** was eleven of the twelve._   **4** _They **ratified** the minute…_   **5** _The decision was **unanimous**…_   **6** _He **interrupted** her twice…_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **The chair\'s page cannot see somebody who spoke and was stopped.** **Its fourth part lists who has not spoken, and eleven words is not silence** — **so the record shows Miss Sweidan as having contributed.** **The person who can see it is whoever is writing**, **because at the moment of an interruption the chairman is holding the formulation and watching the clock** — **and that is a change to the minute-taker\'s job and his to refuse.**'));
out.push(NOTE('⚠ **This is the only cycle in the unit where the method is working and somebody is still worse off, and the finding is new: the chair\'s page protects the people who say nothing and misses the people who were interrupted.** **The second group is the dangerous one, because the record shows them as having contributed** — **in the minute Miss Sweidan is present and she spoke.** ⚠ **The honest part is why the chairman cannot fix it alone:** **at that moment she is holding a sentence and watching a clock, and the one person with nothing else to do is the one writing.** **So the question goes to Mr Barghouti, whose margin and whose afternoon it is, and he is entitled to say no** — **he says he wants to try it twice first, and the key should leave that exactly as it stands.** ⚠ **And the two prohibitions: do not improve the minute, and do not put the interrupted person on the silent list.** **The second looks kind and would make her a problem instead of a contributor.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7. ⚠ **The three moves are the examinable content and the third is where the mediator stops: the chairman cannot supply it.** **What a chairman can do tomorrow is the line in the Language box, said at the end of each item and not at the end of the meeting:** _anybody who was stopped and did not finish: say so now, and we shall hear it before the item closes._ **At the end of the meeting nobody remembers which item it was, which is why the placing matters more than the words.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What the method is for.** **Making six honest lines writable.** **It did that: every line was said out loud and two were corrected.**',
  '**The person it cannot see.** ⚠ **Somebody who spoke and was stopped.** **The fourth part catches silence, and eleven words is not silence.**',
  '**Can the chairman supply it?** ⚠ **Not reliably.** **At that moment she is holding the formulation and watching the clock** — **and the one person in the room with nothing else to do is whoever is writing.**',
  '**So whose question is it?** ⚠ **The minute-taker\'s**, **and it is his to refuse: a mark in the margin and one sentence at the end, about nine seconds.**',
  '**And Pair B, for contrast.** ⚠ **Not that question at all: the decision was never read back, so the minute is defective** — **and the remedy is a correction circulated today, not a change to anybody\'s margin.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair. ⚠ **Pair B is not a question about who the method misses:** **a decision that was never read back is a defective minute**, and no change to anybody\'s margin will mend it. **Two different faults, two different remedies** — **a question handed to the minute-taker, and a correction circulated today.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The meeting:** the gate review of 4 June._',
  '_**What the method is for.** **Four refusals in writing by Friday.** **It produced them.**_',
  '⚠ _**The person it cannot see:** Mr Hamwi, who began on the night gate book and was stopped by the supervisor, and said nothing else._',
  '_**Whose job would it be to notice?** ⚠ **The supervisor takes the note, and he is the person who interrupted him**, **which is the hardest version of this and I do not know the answer.** **I have not asked either of them.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A meeting run by everything the unit teaches, and Lubna is not in the minute. Asked whether the minute is wrong, Nour said no — it is the best minute that has come out of that room, and Lubna is right as well, which is the part she had not seen. Lubna had spoken: she said eleven words, and the page counts her as somebody who spoke. So the mediation, in three moves: separate what the page is for from what the room needed; find the person the method cannot see; and say whether the chairman can supply it. The page is for making six honest lines writable, and it did that — every line in the minute was said out loud and two of them were corrected. The person it cannot see, Dima said, is somebody who spoke and was stopped: the fourth part catches silence and nothing else, and eleven words is not silence. Which is the finding of the cycle and it is new — the chair’s page protects the people who say nothing and misses the people who were interrupted, and the second group is the dangerous one, because the record shows them as having contributed. Adnan said that in the minute she is present and she spoke, and there is nothing in any document that says she had not finished. Rim asked whether the chairman cannot watch for it, and not reliably, and this is the honest part: at the moment somebody is interrupted the chairman is holding the formulation and watching the clock, and the one person in the room with nothing else to do at that moment is whoever is writing. Adnan said that is a change to his job and not to hers, and nobody has asked him — and that is exactly where this stops: the mediator names the question and hands it to the person whose margin and whose afternoon it is. Bassel asked what it would cost him, and a mark in the margin and one sentence at the end, about nine seconds, and he said he was not saying yes in that room because he wanted to try it twice first. And Hiba asked what we must not do: two things, the second of which looks kind — do not improve the minute, and do not put Lubna on the silent list, because she is not silent and it would make her a problem instead of a contributor.']));
out.push(A('Listener task: the person the student\'s own last meeting could not see, and whose job it would be to notice. ⚠ **About half the room cannot name anybody, which is worth testing rather than accepting:** **ask them how many people were present and how many spoke.** **And the hardest cases are the ones where the minute-taker is also the person who interrupted** — **collect two of those and say plainly that the unit does not solve them.** **Naming the question accurately is the whole of what a mediator can do, and it is not nothing.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Redrafting the minute. → **✓** the minute is good; find the question.   **✗** Putting her on the silent list. → **✓** she is not silent.   **✗** _The chairman should have noticed._ → **✓** she was holding the formulation.   **✗** Deciding the minute-taker\'s margin for him. → **✓** hand it over; it is his to refuse.   **✗** Treating Pair B as a visibility question. → **✓** an unformulated decision needs a correction.   **✗** _You are both right._ → **✓** both accounts are accurate, and here is the question.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 5)'));
out.push(A('**1** A _(she measured the meeting before changing anything)_   **2** B _(an unstated purpose is itself a choice with consequences)_   **3** D _(to provoke a question two years of meetings have not produced)_   **4** C _(a measurement reported without embarrassment)_   **5** B _(she treats the objection as answerable by evidence)_   **6** A _(a draft invites correction, and hers were corrected)_'));
out.push(A('⚠ **Part 5 is six questions on one text and every one of them is answered by a specific phrase, never by the general sense of a paragraph.** **Teach the habit the paper rewards: find the words in the text that make the option true, and underline them.** **1** _began by doing arithmetic on it_. **2** _which sounds like nothing and is in fact a decision_. **3** _nobody had asked when that field was coming_. **4** _as a measurement; without embarrassment_. **5** _she pointed at the four answers rather than defending herself_. **6** _two of her three drafts came back changed_. ⚠ **Item 3 is the one most rooms lose**, because **A** _(to appear modest)_ **is what the behaviour looks like from outside** — **and the text explicitly says _her reason for including it is not modesty_, which is the kind of sentence Part 5 is built around.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE MEETING, TWO ACCOUNTS** · D. Khoury · 22 June',
  '**The minute.** _"Decided: the weighting is published with the criteria from the autumn round. (Mrs Khoury, as panel chair.) Circulated by 30 June. Not decided: whether a December is required in the trial; the morning side is getting the figures by 24 June. Thirty-one of the fifty minutes went on the photographs."_',
  '**The chairman.** _"The purpose was stated, the decision was read back and corrected once, and the open item has an owner and two dates. I have the page I wrote the day before."_',
  '**The person who was in the room.** _"I had the repeat book with me. I got four words out about the December and the item closed. The minute is accurate and the December figures are not in it."_',
  '⚠ **Both accounts are accurate and neither is about the minute.**',
  '**What the method is for.** **A publishable weighting.** ⚠ **It produced one.**',
  '**The person it cannot see.** ⚠ **Somebody who spoke four words and stopped.** **The page lists who has not spoken, and four words is not silence.**',
  '**Can the chairman supply it?** **Not at that moment; she was reading the formulation back.**',
  '**Whose question is it?** ⚠ **The person taking the minute**, **and it is hers to refuse.**',
  '**And what I am not doing.** ⚠ **Improving the minute**, and **putting him on the list of people who do not speak.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 1: the essay, sample 181 words)'));
out.push(SAMPLE([
  '**Are meetings a necessary waste of time?**',
  '**Most meetings are a waste of time and almost none of them is necessary in the form it is held in** — **which is not an argument against meeting, but against the way the hours are spent.**',
  '**What gets decided is the test, and it can be counted.** A meeting I attend has used about four hundred hours in two years, and the figure it exists to move has not moved. **Nothing was decided in those hours that could not have been decided in writing, except on the eight occasions when two people disagreed in the room and found out why.**',
  '**But the second note is the one that stops me answering yes.** A written procedure hears only from the people who write. **In my meeting three of the eleven have not spoken for a year, and the record carries the views of eight and binds all eleven** — **which is worse in writing, where nobody can see who is absent from the argument.**',
  '**My own point is about the first sentence.** A meeting with no stated purpose becomes whatever its loudest item is; one with a purpose and a stated end is a short meeting. **The waste is not the meeting; it is the nine seconds nobody spends at the start of it.**',
  '**So: not necessary, and not a waste either.** **The question is whether anybody in the room has said what it is for.**',
]));
out.push(A('**181 words, inside the 140–190 band, the question answered with its condition in the first sentence, both notes used and the second developed further than the first, a third point taken from 19.1 rather than from general observation, and a conclusion that draws a distinction.** ⚠ **The counts are what lift it:** **four hundred hours, three of eleven, eight and eleven** — **and an essay about meetings with no figure in it has described a feeling.**'));
out.push(S('Stage ✓ · Unit 19 check'));
out.push(A('**A** **1** a _(ratification)_   **2** c _(adjourned)_   **3** b _(proposal)_   **4** a _(Attendance)_   **5** c _(interrupted)_   **6** b _(unanimous)_   **7** c _(absence)_   **8** b _(deliberation)_'));
out.push(A('⚠ **Item 6 is the item that separates a class:** **_the vote was unanimous_ needs the adjective, and a room that has just learned nine abstract nouns reaches for _unanimity_.** **Read the sentence aloud with each: _the vote was unanimity_ is audibly wrong and students who read silently choose it.** **Item 7 is the same test with the opposite answer** — **_the absence of three members_ needs the noun**, **and _the absent of three members_ is the error.** ⚠ **Put 6 and 7 side by side; together they teach the distinction that eight of this unit\'s nine word-formation pairs depend on.**'));
out.push(A('**B  Listening** **1** D   **2** A   **3** G   **4** C   **5** E   _(not needed: **B**, **F**, **H**)_'));
out.push(A('⚠ **The three unused options are written to be plausible for more than one speaker.** **H** _(asked three people what the meeting was for)_ **is nearly true of Speaker 2**, who worked out what her item really was — **but she did not ask anybody anything.** **B** tempts on Speaker 2 as well, and **F** on Speaker 4, who is the person counted rather than the person counting. ⚠ **Teach the one habit the part rewards: read all eight options before the recording starts and mark the two or three that could fit nobody.** **Play it twice.**'));
out.push(A('**C  Writing** — **marked on the two given notes, the third point, the first sentence, and at least one count.** ⚠ **All four or the content and organisation marks go**, and the commonest loss is the count: **an essay about meetings that contains no figure cannot be distinguished from one written without the question.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 19 (sample)'));
out.push(SAMPLE([
  '_**Essay written, 181 words.**_',
  '_**Mediation written, and I have asked neither of them yet** — **because in my meeting the man who takes the note is the man who interrupted, and I want to think about how to put it.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the five parts of the page. **The nine seconds** — **this meeting is to decide, and it stops being necessary when.** **I have said it twice and the second time somebody asked me when the note was coming.**_',
]));
out.push(sp());
out.push(box('After Unit 19', [
  '**Unit 20 is about giving bad news in writing.** ⚠ **19 was about rooms; 20 is about the letter that follows a decision somebody will not like** — **a refusal, a cancellation, a termination, a figure withdrawn.**',
  '⚠ **The connection is 19.2 and 19.3 and it should be named on the first day of 20.** **A decision that was formulated in the room can be written in four lines; one that was never formulated has to be explained, and the explanation is where bad-news letters go wrong.** **20.1 begins with the sentence that carries the news, and the first thing it asks is whether the decision exists in words anywhere.**',
  '**And one thing to carry forward.** ⚠ **21 is specifications and acceptance criteria, which is Unit 16 applied to things rather than to people** — **and 24.6 opens the sealed letters from B1 24.6.** **Remind the class again; this is the last reminder in the key before Unit 24.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 19 · Answer Key');
