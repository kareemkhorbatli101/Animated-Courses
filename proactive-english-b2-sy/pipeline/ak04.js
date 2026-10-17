// Proactive English B2 · Syria Edition · Book 1 · Unit 4 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 4  Speculating at Range — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One question runs through the whole unit and it is the only thing to keep on the board: what am I going on?** Four words, asked out loud of every claim in every stage. A class that asks it of each other will teach itself 4.2, 4.5, 4.6 and 4.7; a class that does not will learn nine modal verbs and go on writing the same sentences.',
  '⚠ **4.3 and 4.4 must be timed from the first lesson, with a watch on the desk.** Sixty seconds is about eleven seconds longer than anybody in a B2 class has ever spoken without being interrupted, and thirty seconds with no planning time is harder still. **Neither can be fixed on the day of the examination.** If the class does only one thing in this unit, it should be the timing.',
  '**4.6 removes a table the class liked, and you should expect to be argued with.** The three columns of 23.5 worked and taught something. The reason they go is that **a reader reads down one column and never crosses**, so an inference sitting in column two is attached to nothing. At paragraph scale the rule is: the inference goes in the sentence **after** the thing it rests on.',
  '**4.7 is the first mediation in the book where neither party is wrong.** Both readings of the board say _must_, and neither is a deduction. The mediator\'s job is three things and not four: say what each is going on, put each at its honest step, and name the one thing that would settle it. **Not decide** — a mediator who decides has become a third reading.',
  '**And the sentence the unit turns on**, which is Ms Huda\'s in 4.7: _you do not inflate your evidence; you inflate your modal._',
], C.lblue, C.navy));

// ===================== 4.1 =====================
out.push(pb());
out.push(h2('4.1  Nine steps, not three'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the question on the middle one — _how fairly?_ — has no good answer, which is the point. ⚠ Ask it of three students in a row and let all three fail before writing anything on the board. A class that is given the nine steps before it has felt the want of them will treat them as vocabulary.'));
out.push(A('**b** Most sure to least: **3** _must be_ → **1** _may well be_ → **4** _could conceivably be_ → **5** _is unlikely to be_ → **2** _cannot be_. ⚠ Note that **2** is at the far end and not in the middle: _cannot_ is a deduction and therefore as strong a claim as _must_, in the opposite direction. Students put it third or fourth, because they hear it as a strong refusal rather than as a strong claim.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — nine; and three, with everything in the middle done by _I think_ and _maybe_.'));
out.push(A('**b** **1** That it means _I have seen it before and I have not checked_, which is not what the word says — and he writes it about ninety times a month, in a book other people read.   **2** The **modal**. _It may **WELL** be the fan_, never _it **MAY** be the fan_.'));
out.push(NOTE('⚠ **The finding of this cycle is not about vocabulary and a teacher who runs it as a vocabulary lesson will lose it.** The claim is that a middle hedge usually means **_I have a reason and I have not checked it_** — and the nine steps let a writer say which of three quite different things they are doing: _may well_ (I have a reason), _might_ (I am listing possibilities), _could conceivably_ (I do not believe it and I am being complete). Mazen\'s admission is the cycle: ninety _probablys_ a month, in a fault book other people read, every one of them meaning something he had never examined. Ask the class to count their own before the next lesson; the figures are always higher than anybody expects, and they come back changed.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(the cause of a fault)_ **must**: _It must be the housing — there is nothing else in there._ **may well**: _It may well be the housing: nine of the eleven were loose first._ **could conceivably**: _It could conceivably be two faults and not one._',
  '**2** _(why somebody has not replied)_ **may**: _He may not have had it; it went to a third person._ **is unlikely to**: _He is unlikely to have refused it, because he answered the other five._ **cannot**: _It cannot have reached him before the ninth — that is when it was sent._',
  '**3** _(where a missing form is)_ **might**: _It might be in the February file._ **will**: _It will be with the ones that were never scanned._ **could conceivably**: _It could conceivably have been destroyed, and I am saying so because somebody will ask._',
  '**4** _(what a figure means)_ **must**: _Thirty-four of forty-one must mean the field is missing, not that people are careless._ **may well**: _It may well be seasonal._ **will not**: _It will not come down on its own._',
  '**5** _(whether a date will be met)_ **will**: _The October release will go out._ **is unlikely to**: _The field is unlikely to be in it._ **cannot**: _It cannot be in the September one; that closed on the fourth._',
]));
out.push(A('Item **2** is the one to read out, because it has _cannot_ doing its proper job: _it cannot have reached him before the ninth — that is when it was sent_ is a deduction from a date, and students who use _cannot_ for emphasis will hear the difference. ⚠ And item **3** is worth a minute for the _could conceivably_: a form that may have been destroyed is exactly the kind of thing everybody thinks and nobody writes.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(situation)_ A fault has come back for the third time.',
  '**B** _(step: may well)_ It may well be the same fault and not three.',
  '**A** Why that step and not **must**?',
  '**B** Because I have a reason — the same housing each time — and not a deduction; I have not opened them. _(two steps below)_ It **might** be the same fault — and now I am saying it is one possibility among several instead of the one I would put money on.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight steps with their reasons. The finding: **six or seven of the eight are in the top three** — _must_, _will_, _may well_ — and almost nobody uses the bottom four. ⚠ Say why that matters in examination terms: a speaker with three steps sounds either certain or vague, and **the examiner marks the range and not the certainty**. This is the same argument as descriptor four in Unit 3, arriving in speech.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My most-used_ probably: _"the sheet was probably never sent". What it actually means: I have a reason — two of the four sites have no record of receiving one — and I have not checked the dispatch list. So the sentence should be_ "the sheet may well never have been sent", _and the reason should be in it._',
  '**b** _One step up —_ "the sheet must never have been sent" _— and the reader goes and asks the printer why. One step down —_ "the sheet might never have been sent" _— and the reader does nothing at all, because a possibility among several is not a thing anybody acts on. Which is the first time I have understood what my hedges have been doing to other people\'s afternoons._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Last year the class had three steps — sure, not sure, definitely not — and did everything in between with "I think" and "maybe". Tonight there are nine, in order: must, will, may well, may, might, could conceivably, is unlikely to, will not, cannot. Omar asked whether nine words for one thing is really necessary, and Ms Huda said they are nine positions and not the same thing. Then she asked Mazen where "probably" goes, and he said somewhere near "may well" — and near it is the trouble with it. Probably is not wrong; it is imprecise in the one place where precision is cheap, because "may well" and "might" are two steps apart and "probably" sits across both, so a reader has to guess which was meant. Mazen said he uses it about ninety times a month and it is in the fault book, and when Ms Huda asked what it means when he writes it, he said: it means I have seen it before and I have not checked — which is not what it says. Which is the finding of the cycle and is not about vocabulary: a hedge of the middle kind usually means "I have a reason and I have not checked it", and the nine steps let you say which. It may well be the fan — I have a reason. It might be the fan — I am listing possibilities. It could conceivably be the fan — I do not believe it and I am being complete. Hiba said so the bottom three are not degrees of doubt, and Ms Huda said they are degrees of distance from the claim, and that "could conceivably" is the most useful of the nine and the least used: it is how you put on the record something you do not believe. Nour said she would have said "it is possible that", and Ms Huda said that is five words for one and it puts the hedge in a clause of its own where anybody can delete it — keep the hedge inside the verb and it travels with the claim, which is Unit 2 again. And at the bottom, "will not" is a prediction and "cannot" is a deduction: he will not be there expects an absence, he cannot be there says you know something that rules it out.']));
out.push(A('Listener task: the student\'s most-used _probably_ and the step it should have been. ⚠ Collect these and read six aloud in a row. The pattern is always the same — nearly all of them are _may well_ with the reason left out — and the pattern is the teaching.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It may to be the fan._ → **✓** _it may be_ / _it is likely **to** be_. The modals take a bare infinitive and the _is …to_ forms take _to_, and this mixture is the commonest error in the cycle.   **✗** _It cannot be the batch_, meaning _I do not think it is_. → **✓** _it is unlikely to be the batch_. _Cannot_ is a deduction and claims you have ruled it out.   **✗** _It **MAY** be the fan_ with the modal stressed. → **✓** stress on the word beside it. A stressed modal implies that somebody has just denied it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the last three letters said _probably_ nine times and the reader could not have known what any of them meant — sixteen hedges across three letters, none of which said which of the nine positions he was in. Naming the steps is how a writer gets their own hedges believed again.'));
out.push(A('**2** So that nobody has to be the person who raises it later. ⚠ He does not believe the eleven are two faults; he is putting it on the record because somebody eventually will, and it is better that it is him.'));
out.push(A('**3** Somebody to open the two housings he has not opened — **forty minutes of one person\'s time**, which turns the _may well_ into a _must_ or into nothing.'));
out.push(NOTE('The structural point in this model is the one to teach from it: **the request at the end is chosen because it moves a step.** Forty minutes does not confirm Mazen\'s opinion; it **empties or completes** one named claim. ⚠ Students write requests that ask for agreement — _I should be grateful for your confirmation that…_ — and those are answered with agreement and no action. A request that would change the writer\'s own certainty is a different kind of sentence, and it is almost always smaller and cheaper than the one they were going to write.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE NINETEEN EMPTY BOXES · what I know and how sure I am** · Y. Mansour · 16 October',
  'This is about the lot-number box on the bench sheet. I have written the degree of certainty against every sentence because my August note said _probably_ four times and none of you could have known what I meant.',
  '**What must be the case.** Nineteen of the thirty-one October sheets have an empty lot box. **Must** — I have counted the thirty-one twice.',
  '**What will be the case.** November will be worse. **Will** — a prediction, from the fact that two of the three analysts have stopped filling it in altogether.',
  '**What may well be the case.** The box is being skipped because the carton is in the fridge and the sheet is on the bench. **May well** — I have a reason: both of the two who skip it work from the bench end.',
  '**What might be the case.** It is being skipped because nobody has said what it is for. **Might** — one possibility of three, no evidence.',
  '**What could conceivably be the case.** The box was never on the printed version and we have all been imagining it. **Could conceivably** — I do not believe it and somebody will ask, so it had better be me.',
  '**What is unlikely.** That it takes too long. **Unlikely** — it is six seconds; I have timed it.',
  '**And what cannot be the case.** That the box is optional. **Cannot** — the March release note says it is required, and I am saying _cannot_ and not _will not_ because that is settled.',
  '**What I am asking for.** One morning watching the bench end. That turns the _may well_ into a _must_ or empties it.',
]));
out.push(S('Stage 7 · Write freely (sample, 204 words)'));
out.push(SAMPLE([
  '**THE FOUR SITES ON THE OLD SHEET · what I know and how sure I am** · O. Darwish · 17 October',
  'This is about four of the eleven sites and nothing else. The steps are named against every sentence because I have sent three notes about this and all three said _probably_, and nobody could have known which of three quite different things I meant.',
  '**What must be the case.** Four of the eleven returned the pre-March sheet in September. **Must** — I have the eleven returns in front of me.',
  '**What will be the case.** They will go on returning it. **Will** — a prediction, and I shall be wrong if somebody sends them a pad before November.',
  '**What may well be the case.** Two of the four have never been sent the new sheet. **May well** — I have a reason: neither has a dispatch entry, and Mr Saqqal told me in September that he had never seen one.',
  '**What might be the case.** The other two prefer the old sheet. **Might** — one possibility of three, and I have not asked either of them.',
  '**What could conceivably be the case.** The new pads were sent and were thrown away at the sites, which nobody would admit and I have no way of finding out. **Could conceivably** — I do not believe it, and it is in writing so that nobody else has to raise it.',
  '**What is unlikely.** That the four seconds is the reason. **Unlikely** — the seven sites that use it take the same four seconds.',
  '**And what cannot be the case.** That all four were sent pads in March. **Cannot** — the dispatch list has seven entries, and I am saying _cannot_ because the list is the record and not my memory of it.',
  '**What I am asking for.** The dispatch list checked against the eleven names, by whoever keeps it. Ten minutes, and it turns the _may well_ into a _must_.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: a step named against every claim.** You wrote _**Must** — I have the eleven returns in front of me._ Found: named on all seven, and the evidence is in the same sentence as the name, which is better than the model does it.',
  '**Criterion: a reason on the _may well_.** You wrote _neither has a dispatch entry, and Mr Saqqal told me in September._ Found: two reasons, and they are of different kinds — a record and a person — which is worth saying, because one of them is checkable and one is not.',
  '**Criterion: one thing on the record you do not believe.** You wrote _the new pads were sent and were thrown away at the sites._ Found: and the clause _which nobody would admit and I have no way of finding out_ is what stops it reading as an accusation.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Only the _could conceivably_ sentences are read out. They are the best sentences in the room and they are all things somebody has been afraid to say. ⚠ Do not comment on them individually; hearing twelve in a row is the whole stage. Then Mazen\'s sentence, which closes the cycle: **it means I have seen it before and I have not checked — which is not what it says.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['One page sent on 2 October, 310 words. Hedges: eleven. Beside each, the step I actually meant: _may well_ six times, _might_ three times, and twice I could not decide — and in both of those two the honest answer turned out to be **could conceivably**, which is to say I did not believe what I had written and had hedged it instead of marking it. Six of the eleven were the word _probably_.']));

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  It must have been the fourth night'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the third part of the instruction is the stage: _say what you are going on — the thing in front of you that made you think it._ ⚠ Insist on a physical answer. _It stands to reason_ is not a thing in front of anybody.'));
out.push(A('**b** **1** _must have been left open_ — a deduction, so there is something: a draught, a mark, a time.   **2** _may have been told and forgotten_ — a possibility, and the one most likely to rest on nothing.   **3** _needn\'t have waited_ — **the waiting happened**; this is the item to stop on.   **4** _cannot have been checked_ — a deduction that rules it out, so there is a lock, a signature or a time.   **5** _might have been on leave_ — a possibility, and checkable in about a minute, which is worth pointing out.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — the five errors on fourth nights; and that _needn\'t have_ means the thing **was** done and did not need to be.'));
out.push(A('**b** **1** _You needn\'t have waited_ — you waited, and it was unnecessary. _You did not need to wait_ — it was unnecessary, and we are not told whether you waited.   **2** **The evidence** — _what am I going on?_'));
out.push(NOTE('⚠ **Rasha\'s second sentence is the most useful thing in this unit and it should be read out twice: _I am going on nothing at all; I have simply found it easier to believe than the alternative._** The claim it supports — that the night staff were told and forgot — is not a weak claim. It is a **guess wearing the clothes of an inference**, and it is the commonest dishonest sentence in professional writing. Note what makes it dishonest: not the hedge, which is correct, but the **absence of a label**. _May have_ is doing honest work in the Language box and dishonest work here, and the only difference is whether the evidence is named. Teach the repair as a phrase and not a principle: **what am I going on?** — four words, asked out loud, of every past claim.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a form signed by somebody who was away)_ _It cannot have been signed by him on the ninth — he was in Homs and the leave card says so._ **Going on:** the leave card.',
  '**2** _(a fault that came back)_ _They must have been using the old sheet when it was first reported._ **Going on:** the sheet in the file, which has no date field on it.',
  '**3** _(a letter nobody answered)_ _It may have gone to the third person and stopped there._ **Going on:** nothing but the fact that she has moved. I am guessing.',
  '**4** _(a figure that changed)_ _Somebody must have recounted it — the second figure is in a different hand._ **Going on:** the handwriting.',
  '**5** _(a door found open)_ _It needn\'t have been left open at all; the catch has been loose since August._ **Going on:** the catch, which I have reported twice. _(And note the form: it_ was _left open, and that was unnecessary.)_',
]));
out.push(A('Item **3** is the one to praise, because the honest answer is _nothing_ and the student has said so. ⚠ And item **5** is the one to check, because it is the only item in which _needn\'t have_ is used correctly — the door **was** left open. A student who reads item 5 as meaning the door was not left open has the form the wrong way round and will have it wrong in the test.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(situation)_ A form signed by somebody who was on leave.',
  '**B** It **cannot** have been signed by him on the ninth — I am going on the leave card, which has him away from the seventh to the twelfth.',
  '**A** Say it at a weaker step.',
  '**B** It **is unlikely to** have been signed by him — and the evidence is **the same**, which is the interesting part: I have weakened the claim and not the evidence, and the honest step is the strong one. I was weakening it to be polite.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight claims with the evidence each rests on. The count: in **three or four of the eight the honest answer is _nothing_**, and those are the ones to praise — a speaker who can say it has stopped presenting guesses as inferences. ⚠ And watch for the opposite move, which appears in every class: a student who **weakens the modal to be polite** while the evidence stays strong. That is a deduction disguised as a courtesy, and it is as inaccurate as the reverse.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The thing nobody saw: the February note. **Must** have left my desk — it is in the sent file with a date. **May** have reached her — going on nothing; she had moved by then and I do not know when. **Cannot** have been answered — going on the fact that no reply exists in any file, mine or the system\'s, and I have looked in both._',
  '**b** _My partner\'s claim with no evidence and no admission was_ "the depot must have decided not to bother", _and when I asked what she was going on she said the tone of a telephone call in July. Which is something, and it is not nothing — so the honest step is_ may well, _and the evidence is a tone of voice, which she should say._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Same nine steps moved into the past, with one extra discipline: every past speculation gets the evidence attached to it, because the form alone does not say whether you saw something or imagined it. Mrs Barakat is at the hospital and sent two sentences anyway. The first: five of the seven errors must have happened on a fourth night. Hiba said what she is going on is the count — a hundred and eighteen shifts, seven errors, and she knows the dates — so "must have" is a deduction from a record, which is the strongest past claim available. The second: the night staff may have been told about the trial and forgotten. Omar asked what she is going on there, and the answer is nothing: she wrote that she is going on nothing at all and has simply found it easier to believe than the alternative. Dima said that is honest and a bit frightening, and Ms Huda said it is the most useful sentence anybody has sent her this term — because "may have" with nothing behind it is not a weak claim but a guess wearing the clothes of an inference, and it is the commonest dishonest sentence in professional writing, including hers. The discipline is one phrase: what am I going on? Adnan asked what to do if the answer is nothing, and the answer is to say so, because the sentence then becomes much stronger: "I may be wrong about this and I am going on nothing but the look of it" is a sentence nobody can catch you out with. Then the one that is always got wrong. Asked what happened in "you needn\'t have waited", Adnan said he did not wait — and he did wait. Needn\'t have means the thing was done and did not need to be; did not need to means it was unnecessary and we do not know whether it happened. Jad said so it is a reproach, and Ms Huda said or an apology, depending on who did the waiting — "I needn\'t have written nine drafts" is Mazen about himself, and he said he has never been able to say it before tonight.']));
out.push(A('Listener task: one claim of the student\'s own where the honest answer is _nothing_. ⚠ Nobody enjoys this and everybody has one. Take them without comment, and if a student says they have none, ask what they have said twice out loud about somebody else\'s motives.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _You needn\'t waited._ → **✓** _you needn\'t **have** waited_. The _have_ is obligatory in the form and is swallowed in speech, which is why it disappears in writing.   **✗** _It must of been the fourth night._ → **✓** _must **have**_. A spelling error produced by correct pronunciation, and it will cost a mark in Writing.   **✗** _It will not have been checked_, meaning _it cannot have been_. → **✓** _cannot_. _Will not have been_ is a prediction about a future state of knowledge and is almost never what is meant.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _Five of the seven errors must have happened on a fourth consecutive night_ — because it is a **deduction from a record**: a hundred and eighteen shifts, seven errors, and the dates of all seven written down. It is the only sentence on the page that rests on something she did not have to interpret.'));
out.push(A('**2** **Nothing.** _I am going on nothing. I have found it easier to believe than the alternative, which is that nobody told them._ And she says she has said it twice out loud and is ashamed of it in writing.'));
out.push(A('**3** Twenty minutes with the rota for the other two dates — which **turns the _may well_ into a _must_ or empties it**, and is the only thing on the page that is cheap.'));
out.push(S('Stage 5 · Read — the second-hardest thing in this model'));
out.push(A('The second-hardest thing in this model is easy to miss: she adds _what I needn\'t have done_, and it is **about the two years and not about the seven errors**. She needn\'t have said the sentence about the night staff at all, because the count was already enough to ask for the trial — the sentence added nothing to the case and took something from two colleagues who were not in the room.'));
out.push(A('⚠ That is _needn\'t have_ doing the one job it can do honestly: a judgement about an action that was taken and did not need to be, made by the person who took it. Every other use of the form in the unit is about somebody else, and this is the only one that cannot be a reproach.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FEBRUARY NOTE · what I am going on** · N. Sabbagh · 17 October',
  'This is for the two of you who own the template, and every sentence has what I am going on attached to it. Where I am going on nothing, it says so.',
  '**What must have happened.** The note left my desk on 14 February. **Going on:** the sent file, with the date and the attachment.',
  '**What may well have happened.** It reached the third person and stopped there. **Going on:** she left in March, and nobody has been able to tell me what was in her tray. I have not asked the two people who shared the room with her, and I could.',
  '**What might have happened.** It was read and judged not worth answering. **Going on:** nothing either way, and it is one of three.',
  '**What could conceivably have happened.** It never left at all and the sent file is wrong. **Going on:** nothing. I do not believe it and I am writing it because it is the first thing anybody will suggest.',
  '**What I am going on nothing at all for.** That nobody read it. **I am going on nothing.** I have said it twice in meetings and it is easier to believe than the alternative, which is that it was read and the answer was no.',
  '**And what cannot have happened.** It cannot have gone to either of you — neither of your names is on it. **Going on:** the note itself, which I have in front of me.',
  '**What I am asking for.** Nothing from either of you about February. One field in October, which is a different request, and I should have separated the two eight months ago.',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**THE OPEN DOOR ON THE FOURTEENTH · what I am going on** · T. Ayoub · 18 October',
  'This is for the depot office and for the five other drivers on the first service. Every sentence has what I am going on attached to it, because the last time I wrote about this I said _probably_ three times and it was taken as an accusation.',
  '**What must have happened.** The muster-room door was open at 05.40 on the fourteenth. **Going on:** I opened the gate and it was already open, and the two drivers behind me saw it.',
  '**What may well have happened.** It was not shut at the end of the night shift. **Going on:** the catch has been loose since August and I have reported it twice; a door with that catch does not stay shut unless it is pulled.',
  '**What needn\'t have happened at all.** Any of this. **The catch needn\'t have been left eight weeks** — it was reported in August and again in September, and a catch is a ten-minute job.',
  '**What might have happened.** Somebody opened it early for the cleaners. **Going on:** nothing either way, and it is one of three.',
  '**What could conceivably have happened.** Somebody opened it deliberately. **Going on:** nothing. I do not believe it, and I am writing it down because it is the first thing that will be said in the room if this goes further.',
  '**What I am going on nothing for.** That the night shift does not shut it as a matter of habit. **I am going on nothing**, and I have said it to two people, and it is easier to believe than that the catch has been broken for eight weeks with nobody\'s name against it.',
  '**What I am asking for.** The catch. Ten minutes, and it empties every sentence above except the first.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: evidence labelled after every claim.** You wrote _**Going on:** the catch has been loose since August and I have reported it twice._ Found: labelled on all six, and in the same two words each time, so a reader can read down the labels.',
  '**Criterion: one claim named as going on nothing.** You wrote _I am going on nothing, and I have said it to two people._ Found: and the count of two is doing more than the admission — it says how far the guess has travelled.',
  '**Criterion: the request that moves a step.** You wrote _Ten minutes, and it empties every sentence above except the first._ Found: exact, and it is a better version of the move than the model, because it names how many claims it would empty.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads the claim they are going on nothing for. Nobody enjoys it; everybody has one. Then Rasha\'s sentence, which closes the cycle and is the hardest in the unit: **I have found it easier to believe than the alternative** — and the alternative was that nobody had told them.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The claim: _"the depot has decided not to bother."_ Said out loud **four** times that I can remember, twice to drivers and twice at home. What I am going on: **nothing.** There has been no decision that I know of and nobody has told me there has been. What there has been is eight weeks of silence about a catch, and I have been reading silence as a decision — which is the fault from Unit 1 and I did not recognise it in myself until I wrote the word _nothing_ down.']));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  A full minute, and what neither picture shows'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the timing is the stage. ⚠ **Have a watch on the desk from the first minute of this cycle.** The instruction says _you have spoken for about eight seconds, and the exam wants sixty_, and that figure has to be felt and not told.'));
out.push(A('**b** Belongs in a Part 2 answer: **2** and **4**. _Both of them have been filled in by somebody in a hurry_ is a speculation about both; _neither of them tells you who was there_ is move three. Does not belong: **1** _in the first picture I can see a form_ — description, eight seconds, no marks; **3** _the first one is older_ — a bare difference with nothing drawn from it; **5** _I like the second one better_ — an opinion about the photographs, which is never the question.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — your opinion; and the shape is: name both in one sentence, the one difference that matters, what neither shows, and then the question.'));
out.push(A('**b** **1** **Nineteen seconds**, and she stops because she has **described** them and there is nothing left to describe.   **2** That it costs eight seconds and tells the examiner nothing except that she can see.'));
out.push(NOTE('⚠ **The single most useful fact in this cycle is that nobody runs out of things to say in Part 2 — they run out of _minute_, having spent it on description.** Describing two photographs takes about twenty seconds and is then finished. The repair is the four moves, and the proportions matter: **8–10 seconds · 12–15 · 20–25 · 12–15.** Move three is the longest and it is where every mark in the part lives, because it is the only move that needs the grammar of this unit. Note what happened to Lubna\'s English when she stopped describing: it went up two levels in one sentence, and not because she tried harder. **The task changed from _what is here_ to _what is missing_**, and the second task cannot be done in _there is_ and _I can see_.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(both in one sentence)_ _Both of these are the same scaffold, four months apart._ · _Both of these are forms that somebody has had to fill in at a desk._ — nine and fourteen words, and the second works even for two photographs with nothing in common.',
  '**2** _(the one difference)_ _The difference that matters is the sheet._ · _The difference that matters is that one of them has been signed and the other has a space for it._',
  '**3** _(what neither shows)_ _Neither of them shows the joint._ · _Neither of them tells you how long it had been like that._ · _What you cannot see in either is who is going to be asked about it._',
  '**4** _(the question answered)_ _So to answer the question, I would say the second, because…_ — and the _because_ is obligatory.',
  '**5** _(the phrase for a picture you cannot identify)_ _I am not sure what the second one is, but whatever it is, somebody has written on it twice._',
]));
out.push(A('Item **5** is the one to drill, because it is the only insurance in the cycle. ⚠ A candidate who cannot identify an object and guesses spends twenty seconds being wrong about it; the same candidate admitting it in six words and speculating about **what somebody has done to it** loses nothing at all, because the examiner is marking the speculation and not the identification.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(0:00)_ Both of these are the same noticeboard, three weeks apart.',
  '**A** _(0:10)_ The difference that matters is that in the second one the timetable has been covered by three notices.',
  '**A** _(0:25)_ But neither of them shows the back of the sheets, which must have a date on them, because everybody dates a notice — and if the dates are there then the order they went up in has been available in the room all along.',
  '**A** _(0:45)_ So to answer the question, I would say the people put them up without deciding anything, because somebody deciding would have moved the timetable rather than covered it.',
  '**B** _(timing)_ You reached move three at **0:25** and you stopped at **0:58**.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The four move-times for each speaker. The finding, and it is the same in every class: **the speakers who ran out were the ones who reached move three after forty seconds**, and the speakers who filled the minute reached it before twenty-five. ⚠ Put both sets of times on the board side by side. It is the clearest piece of evidence in the unit and it needs no explaining.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Timed at 0:57. Moves at 0:00, 0:09, 0:22 and 0:44. I spent longest on move three, which is what I meant to do — and the reason I could is that I had decided before I started what neither of them showed. The first time I tried this I decided during move two and lost eleven seconds._',
  '**b** _My partner\'s move three was that neither photograph shows whether anybody uses the second shelf, and she used_ must have _— "the dust must have been there since the summer" — which is a deduction from the dust, so it is the right step and not one too high._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Two photographs, one question, one minute, and nobody interrupts. Lubna\'s are of the same scaffold in July and October, and her first attempt ran: in the first photograph I can see a scaffold on a building, in the second photograph I can see the same scaffold but there is a sheet over it, in the first one the weather is better. Ms Huda stopped her, and Jad said nineteen seconds — nineteen seconds of a minute, with forty-one left and nothing to say, because she had described them. Describing two photographs takes about twenty seconds and is then finished, and the examiner is not interested in what is in them because they can see them: the minute is spent on what is not in them. Omar asked what to do with the first twelve seconds, and the answer is to name both in one sentence and move — both of these are the same scaffold, four months apart. Eleven words. Then the shape, which is four moves: both of them in one sentence; the one difference that matters, not three; what neither of them shows, which is where the speculation lives and where the marks are; and the question you were asked, answered in the last fifteen seconds. Dima said what neither of them shows is a strange thing to be asked for, and Ms Huda said it is the whole of Part 2. So Lubna tried again: neither of them shows the joint — the sheet went up in August and the joint is behind it in both, and in July it was behind the boards, so in four months of photographs there is no picture of the thing the whole argument is about, and it must have been measurable on about three days in July, and nobody went up. Thirty-one seconds, with every one of the nine steps available in it. And what happened is that she stopped describing and started speculating, and the English went up two levels in one sentence — because the task changed from what is here to what is missing, and only the second needs the grammar of this unit. Hiba said it was because she had something to say, and Ms Huda said no — a candidate who describes for sixty seconds produces forty sentences of "there is" and "I can see", and the examiner marks the range they heard. And Rim said sixty seconds is a long time, which it is: about eleven seconds longer than anybody in the room has ever spoken without being interrupted, and the one thing about Part 2 that cannot be fixed on the day.']));
out.push(A('Listener task: the student\'s own move three in one sentence, and the step used in it. ⚠ Check the steps: a move three at _must_ with no deduction behind it is the fault of 4.7 arriving three cycles early, and it is worth naming when it appears.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _In the first photograph I can see…_ → **✓** _Both of these are…_ Eight seconds for nothing, and it is the hardest habit in the unit to break because it feels like starting properly.   **✗** Three differences instead of one. → **✓** one. Three differences is three move twos and no move three.   **✗** _On the other hand…_ → **✓** nothing. A second and a half to signal a contrast the speaker has usually already made.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The **joint**. In the seven photographs before August it is behind the boards and in the seven after it is behind the sheet — fourteen photographs of the thing the whole disagreement is about, and not one of them shows it.'));
out.push(A('**2** Taken the other thirteen. ⚠ _I needn\'t have taken fourteen photographs of a sheet_, and she did — because she was photographing the **scaffold**, which is what she was arguing about, and the scaffold was never the question.'));
out.push(A('**3** Somebody to go up with a camera before the fourth — **a photograph and not a measurement**. And nobody has to agree with her for it to be useful, because a photograph of the bearing will still exist in five years whichever of them turns out to be right.'));
out.push(NOTE('The last paragraph of this model is the one to read to the class twice: **nobody asks what a photograph does not contain.** She had fourteen photographs and four months, and the question that found the gap was asked of her in a classroom about two pictures that were not even the relevant ones. ⚠ That is the transferable part of the whole cycle, and it is not an examination skill: the Part 2 question — _what does neither of them show?_ — is a general-purpose instrument, and the class should be told that it works on documents, on figures and on meetings as well as on photographs.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NINE PHOTOGRAPHS OF A SHELF AND NO PICTURE OF THE BACK** · R. Shaaban · 18 October',
  'This is for the two of us who sign refusals, and it is about something I noticed while being timed in a classroom.',
  '**Both.** There are nine photographs of the returns corridor taken between June and October. All nine are of the same end, and all nine are mine.',
  '**The difference that matters.** The height. In June the cartons are two deep and in October they are four.',
  '**And what none of the nine shows.** The labels. Every photograph is taken from the door, which is the only place there is room to stand, and from the door you see the ends of the cartons and not the faces. **Nine photographs of a stack I have been arguing about for four months, and not one of them shows what is in it.**',
  '**What must have been the case.** The labels were readable in June. **Going on:** two deep is one reach, and I moved four cartons in June to count them.',
  '**What I needn\'t have done.** Taken nine. **I needn\'t have taken more than the first two**, and I took nine because each time I was asked for evidence I took another photograph from the same place.',
  '**What I cannot now do.** Photograph the faces. **Going on:** four deep and the corridor is a fire route; I am not moving them to take a picture.',
  '**What I am asking for.** Somebody to stand at the far end with a telephone for two minutes, next time the fire officer opens that door.',
  '**And where I noticed it.** Being asked what neither of two photographs showed, about two pictures of a noticeboard that have nothing to do with me.',
]));
out.push(S('Stage 7 · Write freely (sample, 199 words)'));
out.push(SAMPLE([
  '**ELEVEN SHEETS AND NO PICTURE OF THE DATE FIELD** · O. Darwish · 19 October',
  'This is for whoever prints the pads, and it is about eleven photographs I have been sending since June without noticing what they are photographs of.',
  '**Both.** There are eleven photographs of returned fault sheets, one from each site, taken between June and October. All eleven are mine and all eleven were taken on the same desk.',
  '**The difference that matters.** Four of the eleven are the pre-March sheet and seven are the new one.',
  '**And what none of the eleven shows.** The **top** of the sheet. I photograph the fault entries, because the fault entries are what I am counting, and the date field is in the top right corner — above the frame in every one of the eleven. **I have eleven photographs taken to prove that the date field is not being used, and not one of them includes it.**',
  '**What must have been the case.** I framed them that way from the first one. **Going on:** the eleven are identical in framing, to about a centimetre.',
  '**What I needn\'t have done.** Sent the last six. **I needn\'t have sent any of them after the first five**, because the first five made the same unprovable point as the last six, and I sent them because sending a photograph feels like sending evidence.',
  '**What I cannot now do.** Re-photograph the four old sheets. **Going on:** three of the four went back to the sites in September and I kept no copies.',
  '**What I am asking for.** Nothing from the printer about the photographs. One line on the dispatch list: which of the eleven sites has had a new pad, and when.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: both named in one sentence with a count.** You wrote _There are eleven photographs … All eleven are mine and all eleven were taken on the same desk._ Found: the count and the ownership, and the desk is doing extra work — it explains the framing before you name it.',
  '**Criterion: the finding stated as an absence.** You wrote _not one of them includes it._ Found: stated as an absence, and the sentence before it — _taken to prove that the date field is not being used_ — is what makes the absence funny rather than merely regrettable.',
  '**Criterion: _needn\'t have_ used correctly about yourself.** You wrote _I needn\'t have sent any of them after the first five._ Found: correct — you did send them — and the reason you give is the best line on the page.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each absence sentence is read and the room says what a reader would **do** about it. ⚠ Half the absences will be answered with _take more photographs_, which is the wrong action and tells the writer the sentence was heard as a **shortage**. Then Lubna\'s sentence, which closes the cycle: **nobody asks what a photograph does not contain** — and she had fourteen of them and four months.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Spoken to my brother, who had not seen the photographs. **0:57 in total.** I reached move three at **0:31**, which is six seconds later than I managed in class, and the reason is that he asked me what the second one was and I answered — so I lost the time to a question I should have answered in six words and then carried on. Which is the exam situation exactly, because the examiner will not ask, but my own uncertainty will.']));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  Thirty seconds, and do not summarise'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, untimed and unprepared, and then the partner reports **how much of the thirty seconds went on repeating**. ⚠ The first attempt must be unprepared or the stage demonstrates nothing: the whole finding is that the summary is automatic.'));
out.push(A('**b** Belongs: **2** and **4**. _For me it would be the second, because it can be checked afterwards_ — answer first, reason attached. _I would say the opposite, and the reason is the handover_ — a disagreement in the first second. Does not belong: **1** _as my partner said_ — a summary; **3** _I agree with everything my partner said_ — marked as an absence; **5** _that is a difficult question_ — two seconds for nothing.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — nineteen seconds; and an answer in the first sentence with a reason attached to it.'));
out.push(A('**b** **1** As **nothing at all** — not as a fault, as an **absence**.   **2** Because there is no planning time (the partner has just stopped talking) and the question is one you have not seen, about photographs that are not yours.'));
out.push(NOTE('⚠ **This is the part of the Speaking paper where marks are lost silently, and that phrase is worth giving the class exactly.** Nothing goes wrong: the English is correct, the candidate is polite, and they say almost nothing. Omar\'s first attempt is the model case — twenty-six seconds, nineteen of them a summary of something the examiner has just heard, and the answer in the last two words. The remedy is **three prepared openings**, learnt before the day: _For me it would be…_ · _I would say the opposite, and the reason is…_ · _It depends on…, and in this case…_ Each is about a second and a half and each starts the candidate in the first second. And the thing to say about the third: **_it depends_ is permitted once and only with the second half attached** — on its own it is the commonest thirty-second answer in a B2 examination and it earns nothing.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(which would be harder to keep up)_ _For me it would be the second, because a rule has to be applied by somebody and the first one did not need anybody._',
  '**2** _(which would you rather be given)_ _The first, and the reason is that it can be checked by whoever receives it without asking me anything._',
  '**3** _(which tells you more)_ _I would say the opposite of my partner: the second tells you more, because what is missing from it is specific._',
  '**4** _(which would you change first)_ _It depends on who has to read it, and in this case nobody does — so the second, and only the heading._',
  '**5** _(which would somebody else notice)_ _Neither, and that is the answer: the only person who would notice either of them is the person who filled it in._',
]));
out.push(A('Item **5** is the one to read out, because _neither_ is a permitted answer and candidates do not know it. ⚠ There is no right answer in this part, only an answer with a reason — and _neither, and that is the answer_ is a stronger opening than a reluctant choice between two things the candidate has no view about.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B** _(0:01)_ For me it would be the second, because a rule about sources has to be applied by a person and the old page did not need anybody to apply anything.',
  '**B** _(0:12)_ Four editors applying one clause is four clauses, and the one thing behind that is that the removal log records the clause number and not the reading.',
  '**B** _(0:24)_ _(stop)_',
  '**A** _(timing)_ You said something that was yours at **0:01** and you stopped at **0:24**.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each thirty seconds, the second at which the speaker said something of their own. On a first run it is between **twelve and nineteen seconds**, which means more than a third of the answer has gone on a summary. ⚠ And the second finding is the one to act on: **the speakers who disagreed with their partner all reached their own material in under three seconds**, because a disagreement cannot be prefaced with a summary.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I used_ "I would say the opposite", _and I would not have found it without having prepared it — because what I wanted to say was that my partner had it the wrong way round, and the only sentence available to me without a prepared opening was_ "well, actually", _which takes a second and sounds like a correction._',
  '**b** _My partner stopped at twenty-two seconds and then kept going for six more, and what she added was_ "so, yes, the second one" — _which is the answer she had already given at 0:01. It did not help. It told the examiner she had finished eight seconds earlier._'
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad had his minute, and Omar was given thirty seconds on the same pair with a different question: which of the two would be more difficult to keep up? His first attempt began "as Jad said", went through the old forum page and the new one and the clause about sources, agreed that Jad was right, and arrived at "the second one" in the last two words. Hiba timed it at twenty-six seconds, and nineteen of them were a summary of something the examiner had just heard. Which is the part of the Speaking paper where marks are lost silently, because nothing has gone wrong: the English was correct, the candidate was polite, and he said almost nothing. So he went again, answering in the first second — the second one, because a rule about sources has to be applied by somebody and the old page did not need anybody to apply anything; four editors applying one clause is four clauses, and keeping that up means keeping four people in agreement, which nobody has done for nine months. Twenty-three seconds, all of it his. The answer, then the reason, then one piece of evidence, and stop. Jad asked what to do about disagreeing with his partner, and Ms Huda said say so in the first second, because a disagreement is two speakers thinking and that is what the examiner is listening for — while "I agree with my partner" is marked as nothing at all, not as a fault but as an absence. Dima said thirty seconds sounds easier than sixty, and Ms Huda said it is much harder: there is no planning time, because your partner has just stopped talking, and the question is one you have not seen about pictures that are not yours. The remedy is the opening phrase, prepared in advance and used every time. And Nour asked what happens if you run out before thirty seconds, and the answer is that you will, and it is correct: twenty-three good seconds beat thirty with a summary in them — and then you stop, which is a skill, because a candidate who has finished and keeps talking takes their own marks back.']));
out.push(A('Listener task: the prepared opening the student will use, and the second at which they reached their own material. ⚠ Make each student **choose one of the three and name it**. A candidate with three openings available and no preference will spend the first second choosing between them, which is exactly the second the openings exist to save.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _As my partner said…_ → **✓** _For me it would be…_ Nineteen seconds of thirty, and the English is faultless throughout.   **✗** _It depends._ → **✓** _It depends on…, and in this case…_ The commonest thirty-second answer in the examination, and it earns nothing on its own.   **✗** Finishing at twenty-two seconds and adding eight more. → **✓** stop. A candidate who has finished and keeps talking takes their own marks back, and nobody anticipates this.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **One:** it is polite, and in a room where he is the youngest it buys him something. **Two:** it gives him time to decide what he thinks — **the honest one**, and the one he says he is ashamed of. **Three:** if the answer turns out to be wrong, the summary is the part he can stand behind.'));
out.push(A('**2** Of eleven sites, he asked six managers what they thought he had said at the August meeting; **four of the six could not tell him**, and one remembered the summary and attributed it to Mr Saqqal.'));
out.push(A('**3** Said the summary at all. ⚠ _I needn\'t have spent nineteen seconds being polite to a man who was not listening to that part_ — and he did it in every meeting for **five years**.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THIRTY SECONDS · what I have been doing in handovers for six years** · H. Nasser · 19 October',
  'This is a page about something I was shown in an English class, and it is not about English.',
  '**What I was doing.** Beginning every answer in a department meeting by restating the question. _"So the question is whether the ten days can be managed, and I think what we have to ask is…"_ Fourteen seconds, and the answer after it.',
  '**Why I was doing it, which I had never examined.** **One:** it makes sure I have understood, which is respectable and is true about one time in ten. **Two:** it gives me fourteen seconds to decide what I think — the honest one. **Three:** a restated question cannot be wrong, so the first thing I say in any meeting is always correct.',
  '**What it costs.** Of the four of us who were at the September meeting, **three** have told me since that they thought I had no view on the ten days. I had a view and I had said it, at second fifteen.',
  '**What must have been happening.** The room decides what somebody thinks in the first few seconds and does not revise it. **Going on:** three of four, and the fact that the colleague who voted against me has twice said that I agreed with her.',
  '**What I needn\'t have done.** Restated anything. **I needn\'t have spent fourteen seconds a time being careful in front of people who had already stopped listening.**',
  '**What I am going to do.** Answer first. _Ten days, no._ And then the reason.',
  '**And the thing I shall own.** The second reason is the real one. The other two are what I would have said if anybody had asked.',
]));
out.push(S('Stage 7 · Write freely (sample, 196 words)'));
out.push(SAMPLE([
  '**THIRTY SECONDS · what I have been doing in meetings for nineteen years** · A. Barghouti · 20 October',
  'This is a page about a habit I was shown in a classroom last week, and about the first twenty seconds of every answer I have given in a directorate meeting since 2006.',
  '**What I was doing.** Beginning with the file. _"If I may, the position as set out in the minute of the fourteenth, and subject to what the transport office may say, is that…"_ Twenty seconds, and the answer after it.',
  '**Why I was doing it, which I had never examined.** **One:** it is correct, and in that room correctness is a form of protection. **Two:** it gives me twenty seconds to find out whether the senior man in the room has already decided — the honest one, and the one I am least comfortable with in writing. **Three:** a sentence that only describes the file cannot be held against me.',
  '**What it costs.** In nineteen years I have been asked for my own opinion in a meeting **three times**, and all three were by the same man, who retired in 2011. I had taken that for the way such meetings are. It may well be what I trained the room to expect.',
  '**What must have been happening.** Nobody asks a man who begins with the file. **Going on:** three times in nineteen years, and the fact that two clerks junior to me are asked regularly.',
  '**What I needn\'t have done.** Begun with the minute. **I needn\'t have spent twenty seconds a time establishing that I had read the file in front of people who knew I had.**',
  '**What I am going to do.** Answer first, once, at the next meeting, and see what happens in the ten seconds after it.',
  '**And the thing I shall own.** The second reason is the real one, and I have been calling it respect for nineteen years.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: the habit quoted with a timing.** You wrote _"If I may, the position as set out in the minute of the fourteenth…" Twenty seconds._ Found: quoted in your own words and timed, and the quotation is doing the work — a reader can hear it.',
  '**Criterion: the honest reason named among three.** You wrote _the one I am least comfortable with in writing._ Found: named, and the phrasing is better than the criterion asked for, because it says why it is the honest one.',
  '**Criterion: a figure against the cost.** You wrote _asked for my own opinion three times in nineteen years._ Found: and the clause _all three by the same man, who retired in 2011_ turns a figure into a finding.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each student reads their honest reason. ⚠ They are nearly all the same reason in different words — **buying time to decide what I think, in front of people** — and the room should hear that and not be told it. Then Omar\'s sentence, which closes the cycle: **I was buying time to decide what I thought, in front of people, with a sentence that sounded like respect.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Answered first at the Thursday meeting. The question was whether the handover form could wait until January, and I said **"No, and the reason is the nineteen empty boxes"** — eleven words, at the start. What happened in the next ten seconds: the sister opposite me asked which nineteen, which has never happened, and I had the figure. What also happened is that I felt as though I had been rude for about four seconds, and nobody else appeared to notice anything at all.']));

// ===================== 4.5 =====================
out.push(pb());
out.push(h2('4.5  I may be wrong about the cause'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and about half the room will answer _nothing, and I hoped nobody would mention it again_. ⚠ Let that answer stand without comment several times. The cycle teaches a move that exists because the alternative is silence, and the class has to recognise the silence first.'));
out.push(A('**b** Keeps the point: **2** and **4**. _I may be wrong about the cause; the ninety-one are still uncounted_ — concession and retained claim. _I withdraw the explanation and not the count_ — the narrowest form of the move, and the most useful. Loses it: **1** _completely wrong, I apologise_ — the whole claim goes; **3** _perhaps we should move on_ — a withdrawal disguised as procedure, and the commonest in meetings; **5** _I never actually said that_ — not a withdrawal at all.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — the part of the claim that was right; and _I may be wrong about X_ followed by _I am not wrong about Y_.'));
out.push(A('**b** **1** She withdrew the whole letter, and **the eleven degrees went with it** — one thing wrong out of three, and she withdrew all three because she did not know how to withdraw one.   **2** **Once, early, and for the error and not for the letter** — four apologies is less apology, not more.'));
out.push(NOTE('⚠ **The order of the two halves is the whole grammar of the cycle and it is the same point as Unit 3\'s concession: concession first, retained claim second, and the stress on the second.** Reversed — _I am not wrong about the figure, though I may be wrong about the cause_ — the concession lands in a subordinate clause and **a buried concession reads as an excuse**. The second rule is just as important and less obvious: **the retained half must be narrower than the withdrawn one.** _I am not wrong about the figure_ is narrower; _I am not wrong about the rest of it_ concedes nothing and claims everything, and a reader sees through it in one reading. Expect about half the class to produce the second version on the first attempt.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cause you guessed)_ _I am sorry: they did not stand in the yard. I may be wrong about where they were warmed. I am not wrong that they arrived eleven degrees over._',
  '**2** _(a date you had second-hand)_ _I may be wrong about the ninth; I had it from the driver. I am not wrong that the sheet was unsigned when it reached me._',
  '**3** _(a name you were given)_ _I withdraw the name and not the figure. The figure is from the ledger._',
  '**4** _(a reason you inferred)_ _I may be wrong about why the four sites did not change. I am not wrong that two of them have no dispatch entry._',
  '**5** _(a figure somebody else supplied)_ _I was wrong about the eighteen; it is fifteen plus the four that went into service. I was not wrong that one of them has a line against it._',
]));
out.push(A('Item **3** is the shortest and the best: _I withdraw the name and not the figure._ Eight words, and it does the whole move. ⚠ Point out that the retained half in every one of the five is **a figure, a date or a document** — never a reason. A kept half that is itself an inference will be withdrawn next week, and the class should be told that explicitly.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the claim)_ Four pallets stood overnight and were warm. _(wrong part)_ The standing.',
  '**B** I am sorry: they did not stand at Homs. I may be wrong about **where they were warmed**. I am not wrong about **the eleven degrees on arrival**.',
  '**B** I had it from the driver, and **a gate log** is better evidence.',
  '**A** Is what is left narrower? **Yes**, because it is now about a probe reading on one date and not about your yard at all.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each withdrawal, what was given up and what was kept, with the kept half marked **narrower** or not. The count: in **three or four of the eight the kept half is not narrower** — it is the same claim with one word removed. ⚠ Those are the withdrawals a reader refuses, and the pair should be able to name the word that is doing the pretending.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The thing I was wrong about in public: I said in a meeting that the depot had refused the catch. **I may be wrong that anybody refused it. I am not wrong that it was reported in August and again in September.** I had it from the foreman, who said "they will not do it", and a report with a date on it is better evidence than a foreman\'s forecast. I have never said where I had it from, in four conversations._',
  '**b** _My partner\'s kept half is not narrower. Hers is_ "I am not wrong that the ward is understaffed", _and the original claim was that the ward is understaffed and that is why the handovers are late. The word doing the pretending is_ understaffed, _which is the whole of the original claim and not a part of it._'
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['A move nobody teaches and everybody needs: how to be wrong in public without losing the part you were right about. Rim wrote in September that four pallets had been left in the yard at Homs overnight; the supplier wrote back to say they had gone straight through, and he had the gate log, so she was wrong. What she wrote back was: I apologise unreservedly for the error and withdraw my letter. Which was the end of it — and the four pallets were still eleven degrees over, and nobody has mentioned them since. Omar said so she gave away the figure as well, and Rim said she gave away everything: she had one thing wrong out of three and withdrew all three, because she did not know how to withdraw one. Which is the cycle, and it is a very expensive habit: a total withdrawal is read as a total withdrawal, because the reader does not go back and work out which parts were still standing, and why should they? You have to say which part you are keeping, in the same breath. The shape is two halves and in this order — I may be wrong about the cause; I am not wrong about the figure — concession first, retained claim second, and the second gets the stress. Reversed, it reads as a defence, because the concession ends up in a subordinate clause, which is Unit 3 again. Mazen asked whether that is not just the concession from the essay, and Ms Huda said it is the same grammar doing a harder job, because here you are conceding something you have already said in public and been caught on — which is why the kept half has to be narrower than the first: I am not wrong about the figure, and not I am not wrong about the rest of it, which concedes nothing and claims everything. Dima asked about "sorry", and the answer is once, early, and for the error and not for the letter, because four apologies is less apology and not more. And Adnan asked what you do with the thing you got wrong: you say where you had it from. I had it from the driver; the gate log says otherwise and the gate log is better evidence than a driver. That sentence costs nothing and it is the one that stops the same error being made again, by anybody. And Nour asked what happens if the thing you were wrong about was the only interesting part, and Ms Huda said then you withdraw it and a figure is left, which is not nothing — but say that too: what is left is narrower, and it is still unanswered.']));
out.push(A('Listener task: the student\'s two halves, marked for whether the kept half is narrower. ⚠ Apply the test in the room: can the kept half be stated as **a figure, a date or a document**? If it cannot, it is an inference, and it will have to be withdrawn again.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I am not wrong about the figure, though I may be wrong about the cause._ → **✓** the two halves as two sentences, concession first. A buried concession reads as an excuse.   **✗** _I apologise unreservedly and withdraw my letter._ → **✓** one apology for the **fact**, and the kept half named. This is Rim\'s September letter and it cost seven weeks.   **✗** _I may be wrong about the cause but I am not wrong about the rest of it._ → **✓** name what is kept. _The rest of it_ concedes nothing.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the pallets did not stand in the yard — the gate log is clear, 21.40 in and 22.05 out. She had it from **the driver**, who told her on the telephone, and she believed him because he had no reason to say it.'));
out.push(A('**2** The **cause**: if they did not stand at Homs then they were warm before Homs or after it, and she does not know which. **Going on:** nothing but the two readings she has, at loading and at arrival.'));
out.push(A('**3** Because the September letter withdrew **three** things and only one of them was wrong — and the effect is that **the eleven degrees has not been mentioned by either of them for seven weeks**. She withdrew the figure by accident and the supplier was entitled to take the withdrawal at face value.'));
out.push(NOTE('The sentence in this model that is worth more than the apology is the one ranking the evidence: **a gate log is better evidence than a driver, and I did not weigh the two — I used the one that reached me first.** ⚠ That is the only part of the letter that prevents a repetition, and it is a general-purpose instrument: in almost every case of this kind the writer had both kinds of evidence available and used the one that **arrived first**, which is usually the spoken one. The telephone arrives before the paper. Teach it as a question to ask before writing anything down: **which of the things I have reached me first, and is it the best of them?**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE CATCH · one thing withdrawn and one thing not** · T. Ayoub · 20 October',
  'In September I said at the muster-room meeting that the depot had refused to repair the catch. I am writing because that was wrong and because the rest of what I said was not.',
  '**What I am sorry about.** Nobody refused anything. There is no decision on the catch, and saying there was put something in the office\'s mouth that nobody had said.',
  '**Where I had it from.** The foreman, who told me _they will not do it_. **A report with a date on it is better evidence than a forecast**, and I had two of those and used neither.',
  '**What I may still be wrong about.** Why nothing has happened. **Going on:** nothing. Eight weeks of silence, and I have been reading silence as a decision, which is the Unit 1 fault and I did not recognise it in myself.',
  '**And what I am not wrong about.** The dates. The catch was reported on 14 August and again on 9 September, both in the book, both in my hand.',
  '**Why I am writing again.** Because the thing I got wrong was the only part anybody argued with, and the two dates have not been mentioned since.',
  '**What is left, and it is narrower.** Not a claim about the office. Two entries in a book and a catch that is still loose.',
  '**What I am asking for.** Somebody to write a date against the second entry, whatever the date turns out to be.',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**THE FOUR SITES · one thing withdrawn and one thing not** · O. Darwish · 21 October',
  'In July I wrote to you that four of the eleven sites were refusing to use the new fault sheet. I withdrew the whole of that note in August after Mr Saqqal told me he had never seen one. Withdrawing the whole of it was a mistake and this is the repair.',
  '**What I am sorry about.** The word _refusing_. Two of the four had not been sent a pad, and I had no business saying that anybody had refused anything.',
  '**Where I had it from.** Myself. Nobody told me they were refusing; I inferred it from the returns, and an inference I have made in my own office is the kind of evidence that reaches me fastest and gets checked least.',
  '**What I may still be wrong about.** The other two. They may prefer the old sheet, or they may not have a pad either. **Going on:** nothing — I have not asked either of them, in four months of writing about them.',
  '**And what I am not wrong about.** The returns. Four of the eleven sites returned the pre-March sheet in September; the eleven returns are in the file and I have counted them twice.',
  '**Why I am writing again.** Because my August withdrawal took the four returns down with the word _refusing_, and the consequence is that **the thing I can prove has not been mentioned since August and the thing I guessed at was the only part that was ever discussed.**',
  '**What is left, and it is narrower.** Not a claim about anybody\'s willingness. Four sheets of the wrong kind, counted, with dates on them.',
  '**What I am asking for.** The dispatch list against the eleven names. Ten minutes, and it answers the part I guessed at without anybody having to agree with me.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: one apology, for the fact.** You wrote _The word_ refusing. Found: for one word, which is the narrowest apology on any page this term and exactly right — you have apologised for what was wrong and not for having written.',
  '**Criterion: the two kinds of evidence ranked.** You wrote _an inference I have made in my own office is the kind of evidence that reaches me fastest and gets checked least._ Found: and it is harder than the model\'s, because the source you are ranking down is yourself.',
  '**Criterion: the remaining claim named as narrower.** You wrote _Not a claim about anybody\'s willingness. Four sheets of the wrong kind, counted, with dates on them._ Found: narrower, and stated as a figure and a date rather than as a reason, which is what makes it safe to keep.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('The two halves read in order, with the stop between them, and the room marking whether the kept half is narrower. Then Rim\'s sentence, which closes the cycle: **I had one thing wrong out of three and I withdrew all three, because I did not know how to withdraw one** — and seven weeks later nobody has mentioned the figure.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['One thing withdrawn in the past twelve months: in March I told the depot that the printed timetable had been wrong since 2019, and it turned out to have been reprinted in 2021 with the same error, so the date was wrong. What went with it that should not have: **the forty-one mornings.** I withdrew the whole paragraph and the count was in it, and the count had taken me two months to make. Nobody has asked me for it since, and I have not offered it.']));

// ===================== 4.6 =====================
out.push(pb());
out.push(h2('4.6  Three columns at paragraph scale'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the finding is produced by the reading and not by the teacher: most 2.7 paragraphs turn out to have all three kinds in them and to be **written in one voice**. ⚠ Let four students sort aloud before saying anything.'));
out.push(A('**b** **1** _eleven of fifteen have returned_ — **know** (a count).   **2** _the fault is in the housing_ — **infer**.   **3** _nobody opened the other two_ — **know**, if he opened them himself, and this is worth arguing about in class.   **4** _they were warm before Homs_ — **guess**, and the one the class will call an inference.   **5** _the gate log shows 21.40_ — **know** (a document).'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — that a reader reads down one column and never crosses; and a paragraph forces the inference to touch the evidence it rests on.'));
out.push(A('**b** **1** That she has written all three kinds in one voice, in one paragraph, and that **the middle one is the whole reason she wrote it** — and it rests on a figure that is in a different paragraph.   **2** That it is a **record** and not an argument: it has not said what any of it means, so somebody else will supply the inference.'));
out.push(NOTE('⚠ **Expect to be argued with about taking the table away, and have the reason ready: a reader reads down one column and never crosses.** They find the _know_ column short and solid, believe the page, and never notice that the inference in column two is attached to nothing — because **in a table nothing is attached to anything**. The replacement rule is one sentence: **an inference goes in the same paragraph as the thing it rests on, in the sentence after it**, with a joining word — _therefore_, _from which_ — on it. And the guesses get their own paragraph, at the end, **labelled**: a guess inside an evidence paragraph is the most expensive sentence in professional writing, because it **borrows the credit of the sentence before it**.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a fault)_ **Know:** _Eleven of the fifteen have returned with the same fault since September._ **Infer, touching:** _The eleven are therefore one batch and not eleven accidents._',
  '**2** _(a figure)_ **Know:** _Thirty-four of forty-one calls involved an unrecorded promise._ **Infer:** _From which I take it that the template has nowhere to put one._',
  '**3** _(an absence)_ **Know:** _Two of the four sites have no dispatch entry._ **Infer:** _They were therefore never sent a pad, and did not refuse one._',
  '**4** _(a date)_ **Know:** _The catch was reported on 14 August and 9 September._ **Infer:** _From which it follows that eight weeks have passed with no decision recorded either way._',
  '**5** _(a signature)_ **Know:** _The leave card has him away from the seventh to the twelfth._ **Infer:** _The signature of the ninth cannot therefore be his._',
]));
out.push(A('Every one of the five has the joining word in it, and the joining word is the teachable part. ⚠ _Therefore_, _from which I take it_, _from which it follows_ — the reader is being told which sentence is the ground. A student who writes the two sentences side by side **without** a joining word has produced a table in prose: the reader must work out the relation, and a reader who has to work it out will supply their own.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The fault is in the microphone housing._',
  '**B** That is **infer**, because somebody has opened some of them and drawn a conclusion from what they found.',
  '**A** Then the sentence beside it is _in nine of the eleven the housing was loose before the fault appeared._',
  '**B** And they are **touching now**, because the second one is the count and the first one is what I take from it — and I should put _therefore_ on the first so that a reader knows which is which.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight sentences with their columns. Two findings: the **know** sentences all contain **a figure, a date or a document**, and every one of the **guess** sentences is about **what somebody else did or did not do**. ⚠ Write the second on the board: **a guess about a person is still a guess, and it is the kind that does the most damage** — which is Rasha in 4.2, Omar in 4.4 and Tareq in 4.5, all of them in the same shape.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The 2.7 paragraph rewritten: "From 1 March the depot will not accept a sheet with no time against it; the decision is minuted on 14 February. **It follows that a sheet with the real time on it is acceptable**, since the notice is about the sheet and not about the bus." The inference that had nothing to rest on was_ "the foreman was never told", _which I had put in the same paragraph and which rests on nothing in it at all._',
  '**b** _My partner\'s guess is about a person —_ "the printer has not bothered" _— and if she takes it out the paragraph loses nothing: the two dates and the count are untouched. Which is the test, and she was surprised by it._'
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Last year, in 23.5, the class sorted a page into three columns — what I know, what I infer, what I am guessing — and Ms Huda took the table away. Omar said it was the clearest thing they did, and she said it was clear and easy to cheat, and the cheating is invisible: a reader reads down one column and never crosses, so they read the know column, find it short and solid, and believe the page, while the inference in column two is attached to nothing, because in a table nothing is attached to anything. Nour said hers is attached to something, and was asked to sort her 2.7 paragraph aloud. "A field for the promise date has been requested, by me, in writing, four times since December" — know. "The absence of such a field is what loses the promises" — infer. "Nobody has read the February note" — guess. And she said she had written all three in the same voice, in one paragraph, and the middle one is the whole reason she wrote it. Asked what the middle one is attached to, she said the thirty-four of forty-one — which is in a different paragraph. Which is the finding, and why the columns go: at paragraph scale, an inference goes in the same paragraph as the thing it rests on, in the sentence after it. Not in a column and not on another page. Hiba asked about the guesses, and the answer is their own paragraph, at the end, labelled — one or two, not six — because a guess inside an evidence paragraph is the most expensive sentence in professional writing: it borrows the credit of the sentence before it. Dima asked about a paragraph that is all know, and Ms Huda said it is a record, and records are useful and are not arguments: a page of pure know has not said what any of it means, so somebody else will supply the inference, which is exactly what happened to Mr Barghouti\'s four paragraphs and to Mrs Barakat\'s seven errors for two years. Then Adnan said so every paragraph needs one of each, and Ms Huda said every evidence paragraph needs its inference beside it — and that the shape of the page is three paragraphs and not three columns. Mazen said the voice changes, and it does: the evidence flat, the inference slower, the guess quicker and lighter.']));
out.push(A('Listener task: the inference from the student\'s own paragraph that had nothing to rest on. ⚠ There will be one in almost every paragraph, and in most cases the evidence for it **exists** and is in a different paragraph or a different document — which is a far more encouraging finding than the class expects, and it should be said.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Two sentences side by side with no joining word. → **✓** _therefore_ · _from which I take it_. Without it the reader supplies the relation, and they will supply a stronger one than you intended.   **✗** A guess in the evidence paragraph, softened. → **✓** its own paragraph, labelled. _It may be that nobody read it_ is still borrowing credit from the sentence above it.   **✗** A page of pure _know_. → **✓** an inference after each piece of evidence. A record is useful and is not an argument, and somebody else will supply the meaning.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That **the absence of a field, rather than the carelessness of the people taking the calls, is what loses the promises** — and she says it is **not** that the promises were wrong or carelessly made: thirty-one of the thirty-four were reasonable things to say on the telephone.'));
out.push(A('**2** Because everything above the request is evidence for **a change of about four lines of code** — and the narrowness is what makes it grantable. ⚠ She also names the three things it is **not**: a review of the template, training for the staff, and a change to the free-text box.'));
out.push(A('**3** The **guess paragraph** — the shortest on the page. Because **naming a guess as a guess means deciding that you have been repeating it**, and she had let it into three of nine paragraphs.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE LOT BOX · what I know, what follows, and what I am guessing** · Y. Mansour · 21 October',
  '**What I know, with what I draw from each thing beside it.** Nineteen of the thirty-one October bench sheets have an empty lot box; I have counted the thirty-one twice and the nineteen are in a list. **From which I take it that the box is not being skipped occasionally but as a matter of course** — nineteen of thirty-one is not an oversight rate. Separately, the two analysts who work from the bench end account for seventeen of the nineteen. **It therefore follows that the position of the carton, and not the time the box takes, is what decides whether it is filled in** — the box takes six seconds and I have timed it.',
  '**What follows from all of it.** A second carton rack at the bench end. Not a reminder, not a change to the sheet, and not a word to either analyst.',
  '**What I am guessing at, and going on nothing for.** That nobody has told the two of them what the box is for. **I am going on nothing.** I have not asked either of them in four months of counting their sheets, and it is easier to believe than the alternative, which is that they know and have decided it does not matter.',
  '**What I had been doing wrong, in one line.** Writing the count and the guess in the same paragraph, so that the guess arrived with the authority of the count.',
  '**And the thing about the three lengths.** The evidence paragraph is the longest and took twenty minutes. The guess paragraph is four sentences and took most of an evening.',
]));
out.push(S('Stage 7 · Write freely (sample, 208 words)'));
out.push(SAMPLE([
  '**CLAUSE 4 · what I know, what follows, and what I am guessing** · J. Attar · 22 October',
  '**What I know, with what I draw from each thing beside it.** Of the two hundred and six posts removed since January, thirty-one were removed under clause 4, and nineteen of those thirty-one carried a source that an editor judged insufficient; the removal log has all fifty numbers and I have been through them twice. **It therefore follows that clause 4 is not failing to catch unsourced posts — it is being applied to posts that have a source**, which is a different problem and needs a different repair. Separately, of the four editors, Munzer has removed twenty-six of the thirty-one and Hanan two. **From which I take it that the clause is being read in at least two ways**, and not that three of the four are inattentive.',
  '**What follows from all of it.** One extra field in the removal log: which reading was applied. Not a rewrite of clause 4, not a meeting about standards, and not a change to who may remove a post.',
  '**What I am guessing at, and going on nothing for.** That Munzer and Hanan have never discussed it. **I am going on nothing.** They sit in different cities and I have never asked either of them, and it is easier to believe than the alternative, which is that they have discussed it and neither moved.',
  '**What I had been doing wrong, in one line.** Putting the figure and the guess about the two of them in the same paragraph, where the guess read like the third finding.',
  '**And the thing about the three lengths.** The evidence paragraph is twice the length of the other two together, and the guess paragraph is the one I rewrote four times.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: each inference touching its evidence.** You wrote _…and I have been through them twice. **It therefore follows that clause 4 is not failing to catch unsourced posts**…_ Found: touching, with _therefore_ on it, and the inference is a correction of the obvious reading rather than a restatement of the figure.',
  '**Criterion: the guess paragraph labelled.** You wrote _**I am going on nothing.** They sit in different cities._ Found: labelled in the heading and again inside, and the second sentence gives the reason the guess is attractive, which is what makes the label honest.',
  '**Criterion: three refusals around the one request.** You wrote _Not a rewrite of clause 4, not a meeting about standards, and not a change to who may remove a post._ Found: three, and all three are things somebody might otherwise propose — which is the point of them.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each guess paragraph read, with how long it took. ⚠ It will be the shortest paragraph and the slowest in almost every case, and the figures are the finding. Then Nour\'s sentence, which closes the cycle: **naming a guess as a guess means deciding that you have been repeating it** — and she had let one into three of nine paragraphs.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['A page sent on 4 September, twenty-two sentences. **Know: nine. Infer: six. Guess: seven.** The seven guesses are all about what other people have or have not done, which is the pattern from the listener task and I did not believe it applied to me. And six of the seven are in the same two paragraphs as the nine _know_ sentences, so anybody reading that page would have had no way of telling which was which — including me, four days later, when I was asked about one of them and could not remember whether I had checked it.']));

// ===================== 4.7 =====================
out.push(pb());
out.push(h2('4.7  Review & Mediate: A photograph for somebody who cannot see it'));
out.push(S('Stage 1 · Get ready – Unit 4 quiz'));
out.push(A('**1** _It **may be** the fan_ — modals take a bare infinitive.   **2** _You **needn\'t have** waited_ — the _have_ is obligatory in the form.   **3** _It **cannot** have been checked_ — a deduction, not a prediction.   **4** _It is **unlikely** to be the batch_ — _unlike_ is a different word.   **5** _It must **have** been the fourth night_ — _of_ is the spelling error that correct pronunciation produces.   **6** _The **inference** that nobody told them_ — the noun, from the declared word-formation set.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the two readings are read, with the warning under them, before the recording. Do not let the class take sides yet.'));
out.push(A('**b** They both say **must**, and neither is a deduction. And the mediator\'s job is three things: say what each is going on, put each at its honest step, and name the one thing that would settle it — **not** decide.'));
out.push(NOTE('⚠ **The sentence that makes this cycle work is Tareq\'s, and it should be written up: _we are both reading from the thing we are responsible for._** Neither party inflated the evidence — the corners really are curling and the notices really are at eye level. What each did was choose the modal that matched their **responsibility** rather than their **evidence**, and because responsibility feels like knowledge from the inside, the inflation is invisible to the person doing it and obvious to everybody else. Hence Ms Huda\'s summary, which is the sentence the unit turns on: **you do not inflate your evidence; you inflate your modal.** And note where the answer was: on the back of the sheets, dated, in the room the whole time, unturned by either party because both were busy reading the front from their own direction. **Look for the thing nobody has turned over before looking for new evidence.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here sorts rather than drills, and the sorting is done in Stage 3 on two pairs of readings the class has not seen.'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**Reading one** _"Three handover sheets pinned over the rota, so the rota must be out of date."_ **Going on:** the covering — which is evidence of **order** and not of **currency**. Something can be covered and still be current. **Honest step:** _may well_ — covering is a reason, so it is not _might_, but it rules nothing out, so it is not _must_.',
  '**Reading two** _"The rota is on top and dated, so the sheets must have been pinned under it."_ **Going on:** the date on the rota — which is evidence of **when the rota was printed** and not of **when the sheets were pinned**. **Honest step:** _might_ — the evidence is of a different kind than the claim needs.',
  '**What they have in common.** Both say _must_, and neither rules anything out. Both readers are reading from the thing they are responsible for: the first keeps the sheets, the second keeps the rota.',
  '**And the one thing that would settle it.** The date on the **sheets**, which everybody writes and nobody turns over.',
]));
out.push(A('⚠ On **Pair B** the arithmetic is the same from a different trade: _"two boxes open at the front, so the stock must be moving"_ is going on the open boxes, which is evidence of **access** and not of **movement** — honest step **might**. _"The dust is even, so nothing must have moved for weeks"_ is going on the dust, which **is** evidence of movement — honest step **may well**. The settling thing is the **delivery book**, which exists and which neither reader had opened.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The honest step for each of the four readings. **Pair A:** reading one _may well_, reading two _might_. **Pair B:** reading one _might_, reading two _may well_. ⚠ And on both sheets **both readings said _must_** — which is the whole point and will be missed unless it is asked for. The settling things are the date on the sheets and the delivery book, and **both already exist**.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Described in forty seconds**, with my partner not looking: a shelf in a stores corridor, four cartons deep, a strip of masking tape along the front edge with writing on it, and a gap at the left-hand end about one carton wide._',
  '_**My partner\'s reading:** the gap must mean something has been taken out recently. **Going on:** the gap — which is evidence of absence and not of recency. **Honest step:** might._',
  '_**My reading:** the tape must mean the shelf was labelled when it was set up and has not been relabelled since. **Going on:** the tape and the fact that the writing is in one hand — which is evidence of **one labelling event** and not of **when**. **Honest step:** may well._',
  '_**The one thing that would settle both:** the delivery book, which has the date of every carton in and out and which is four metres away in the office. Neither of us had thought of it, and both of us had been looking at the shelf._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Two readings of one photograph of the muster-room board, both of them using "must mean". Asked whether the depot office was lying, Tareq said no — they are reading the same board the other way up: he reads from the timetable down, because the timetable is the thing he needs, and they read from eye level up, because the notices are the thing they put there. Both of them, he said, are reading from the thing they are responsible for. Then the point of the cycle: what the two readings have in common is that they both use "must" for something that is not a deduction, because a deduction rules alternatives out and neither of these does. Tareq\'s reading is "may well" — he has the curling corners, which is a reason. The depot\'s is "might" — eye level is a reason for nothing, because everything on a board is at some height. Omar said so they are both one or two steps too high, and Ms Huda said both, and in the same direction, and that is what happens when a reading is about something you are responsible for: you do not inflate your evidence, you inflate your modal. Dima asked what the mediator is for, and the answer is not to decide: the mediator says what each reading is going on, puts both at their honest step, and then names the one thing that would settle it. So Dima mediated. Mr Ayoub is going on the curling corners, which is evidence of time and not of order, so his claim is that the three may well have gone up after the timetable. The office is going on eye level, which is evidence of nothing, so theirs is that the notices might be the things people are expected to read. And the thing that would settle it is on the back of the sheets, because everybody dates a notice. Tareq said they are dated, all three, and he has never turned one over. Which is the whole of mediation in one exchange: neither reading was wrong, neither was a deduction, and the thing that settles it had been in the room the whole time on the back of a sheet nobody had turned over — because both parties were busy reading the front of it from the direction they were responsible for.']));
out.push(A('Listener task: the one thing that would settle the partner\'s photograph, and whether it is **already in the room**. ⚠ Count how many are already available. It is usually most of them, and that count is the finding of the cycle: the class is not short of evidence, it is short of the habit of asking what would settle the question before arguing about it.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** The mediator deciding. → **✓** three moves and stop. A mediator who decides has become a third reading, and the two parties then have three things to disagree with.   **✗** Paraphrasing one reading. → **✓** quote both in their own words. Whichever party reads their own position as softened will dispute the mediation, and in practice that is both of them.   **✗** _Both of you are partly right._ → **✓** the honest step for each. _Partly right_ is not a step and settles nothing.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 2)'));
out.push(A('**1** for   **2** but   **3** with   **4** in   **5** on   **6** out   **7** that   **8** the'));
out.push(A('Two things to say about this task, because it is the first Part 2 of the course. **Every answer is a function word** — a preposition, a conjunction, an article or a relative — and never a content word; a candidate who writes _probably_ or _evidence_ in a Part 2 gap has misread the task, not the sentence. ⚠ And item **5** is the one that catches people: the gap is the second half of **going on**, a phrasal verb from this unit\'s declared set, and the candidate has to see the verb four words earlier. **Read the whole sentence before filling any gap** — Part 2 answers are frequently governed by a word that is not next to the gap.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO READINGS OF THE STORES SHELF** · R. Shaaban · 22 October',
  '**Reading one** _(the storeman)_ _"Two boxes open at the front, so the stock must be moving."_',
  '**Reading two** _(mine)_ _"The dust is even across all of them, so nothing must have moved for weeks."_',
  '**What each is going on.** The first is going on the open boxes, which is evidence of **access** and not of **movement** — somebody has opened two boxes, and nothing follows about the other fourteen. The second is going on the dust, which **is** evidence of movement, or rather of its absence.',
  '**At their honest steps.** The first is _it **might** be moving_. The second is _nothing **may well** have moved for weeks_.',
  '**What they have in common.** Both of us said _must_, and neither of us has ruled anything out. He is responsible for the stock and I am responsible for the returns, and each of us reached for the modal that matched what we are answerable for.',
  '**And the one thing that would settle it.** The delivery book — which is in the office, four metres away, and which neither of us had opened before arguing for a fortnight.',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 2: a letter or email)'));
out.push(A('⚠ **A letter or email has a named reader and a reason for writing, and both must be visible in the first two lines.** It is not an essay with a greeting on it. Mark on four things: **1** is the reader addressed and the reason given at once? **2** is the writer\'s own reading put at an **honest step** rather than at _must_? **3** is the other reading\'s evidence named and its **kind** identified? **4** is there **one** settling thing asked for?'));
out.push(A('**And one register point that decides the mark in this task.** The email in the question is slightly cross — _before I take this any further_ — and the reply must not match the temperature. ⚠ A candidate who writes back at the same heat produces an argument; a candidate who answers the question that was actually asked — _what exactly are you going on?_ — produces the task. **The question in the prompt is a gift, and about half of all candidates will not answer it.**'));
out.push(SAMPLE([
  'Dear Munzer,',
  'Thank you for asking, and I shall answer the question directly because it is the right question and I have not put it well so far.',
  '**What I am going on.** Two of the three sheets are curling at the top corner, and the timetable behind them is not. Curling is evidence of **time on a board** and nothing else — so what I can actually claim is that the three sheets **may well** have gone up after the timetable, and not that they must have. I wrote _must_ in my note of the fourteenth and I withdraw that word.',
  '**What you are going on.** That the notices are at eye level and the timetable is above them. That is evidence of **height**, and height is a fact about the board rather than about anybody\'s intention — everything on a board is at some height. **What follows from it is _might_, and not _must_**, and I do not think either of us noticed that we had both chosen the stronger word.',
  '**What I am not claiming.** That anybody decided to cover the timetable. I have no evidence of a decision and I am not going to infer one from a drawing pin.',
  '**And the one thing that would settle it.** Turn one of the sheets over. All three are dated, because everybody dates a notice, and I have never turned one over in two years of looking at that board. If the dates are later than the timetable I am right about the order and still wrong about the reason; if they are earlier, I am wrong altogether and will say so to the six drivers.',
  'Could you look before Thursday? It takes about four seconds and it settles a fortnight.',
  'Yours,',
  'Tareq Ayoub',
]));
out.push(S('Unit 4 check · A  Grammar and vocabulary'));
out.push(A('**1** b   **2** a   **3** c   **4** a   **5** b   **6** c   **7** a   **8** b'));
out.push(A('Item **2** is the _needn\'t have_ item and the stem says _you waited two hours_, which is what makes **a** the only possible answer — _mustn\'t have_ and _couldn\'t have_ are both about something that did not happen. Item **3** is the _cannot_ / _will not_ distinction: the locked door is evidence, so it is a deduction. Item **8** needs _must_ because the three dry days are a record and not a forecast.'));
out.push(S('Unit 4 check · B  Listening (B2 First Listening Part 4 style – multiple choice)'));
out.push(A('**1** B   **2** C   **3** A   **4** B   **5** C   **6** B   **7** A'));
out.push(A('⚠ Part 4 is the longest listening and the one candidates tire in, and the distractors here are built the way the examination builds them: **every wrong option is something that is true in the world but not what the speaker said.** In item 5, _one of them is lying_ and _both have inflated the evidence_ are both plausible accounts of two people disagreeing — and she says neither; she says they are reading from the direction of what they are responsible for. **Teach the habit of asking _did she say that, or do I think it?_** and read the script once afterwards so the class can hear how close the distractors sit.'));
out.push(S('Unit 4 check · C  Writing'));
out.push(A('The three-paragraph page, and marked on two things only: **is every inference in the sentence after the thing it rests on, and is the guess paragraph labelled and last?** ⚠ Nothing else in this unit is assessed. A page with a guess in the evidence paragraph has failed whatever else is right about it, because that is the one fault the cycle exists to prevent.'));
out.push(S('I can… (Unit 4)'));
out.push(A('Self-assessment; no answers. The four that matter are the third, the fifth, the sixth and the eighth: attaching **what I am going on** to a past claim, speaking for a full minute in the four moves, answering in the first second of a thirty-second turn, and putting an inference in the sentence after its evidence. ⚠ A class that ticks the nine steps and _needn\'t have_ and not those four has learnt some modal verbs and will go on writing pages in which nobody can tell a count from a guess.'));
out.push(box('Looking ahead to Unit 5', [
  'Unit 4 was about how sure you are. **Unit 5** is about **word order**: which part of a sentence a reader meets first, and what that does to what they remember.',
  '**5.2 is inversion after a negative adverbial** — _not only … but also_, _at no point_, _rarely_, _under no circumstances_. It is the first grammar in this book that looks like a trick and is not, and it is the one piece of B2 syntax that an examiner notices in a single sentence. **5.4 takes the cleft from B1 22.2 and adds the other three shapes.**',
  '⚠ **Ask the class now for two sentences each:** one of their own that **somebody quoted back to them**, and one they **expected** to be quoted and that nobody noticed. 5.5 is built on the pair, and it does not work with invented examples — the whole cycle is a comparison between what survived a summary and what did not.',
  '**And remind them about the 1.7 essay.** It is not needed until Unit 12, but a class that has lost it by Unit 5 will have lost it by Unit 12, and the Mid-Book Test after Unit 6 is the last natural moment to ask.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 4 · Answer Key');
