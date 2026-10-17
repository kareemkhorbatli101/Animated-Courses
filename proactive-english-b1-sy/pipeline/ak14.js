// Proactive English B1 · Syria Edition · Book 2 · Unit 14 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 14  Predictions and Probability — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The prediction board is a physical object and it has to exist.** One sheet of paper on the wall from 14.1 until June, one prediction per student, each with a test date, a reason and a name. It is read again in **18.7** and **23.7**. If you do not put it up, three cycles of Book 2 lose their evidence and the class learns the forms without ever finding out what it is wrong about.',
  '**The organising idea:** a number about the future is worth exactly what is written underneath it. 14.1 asks for a date and a reason, 14.3 for a likelihood and a range, 14.6 for the assumptions, and 14.7 reads somebody else\'s number cold. The sentence the unit is built on is Ms Huda\'s in 14.6: **a forecast is a number with its assumptions written under it; a target is a number with nothing under it.**',
  '**The hardest thing in the unit is not grammar.** It is 14.3 and 14.6: putting a figure on your own certainty and then writing down what would make you wrong. Expect resistance, and expect the best work in the book from two or three students who have never been asked to do it.',
  '**What you need in the room.** For 14.1, the prediction each student brought that turned out wrong. For 14.6 and 14.7, a real forecast each — a budget, a projection, a schedule of works, a published figure. A class that arrives empty gets an hour of invented examples, which is the one thing this unit cannot be taught with.',
], C.lblue, C.navy));

// ===================== 14.1 =====================
out.push(pb());
out.push(h2('14.1  The prediction board'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The follow-up question — _what would you have had to know, in order to get it right?_ — sorts the eleven wrong predictions into two piles in about four minutes: the ones that needed a fact that existed somewhere, and the ones that needed a fact nobody had. Both piles are useful and the first is bigger than the class expects.'));
out.push(A('**b** **1** prediction   **2** intention   **3** prediction   **4** arrangement   **5** prediction'));
out.push(A('The three predictions are all about **other people\'s behaviour**, which is what predictions at work almost always are, and none of them has a date in it yet. That is the gap the cycle fills.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – predictions, each with a date and a name.'));
out.push(A('**b** **1** She predicts that by the end of October the committee will extend the trial to all night staff and will **not** accept that the blocks are the cause — and she cannot predict whether the second trolley stays, because it belongs to a different office.   **2** Because a prediction with no date cannot be tested, which makes it an opinion — and the course already has a unit for opinions, which was Unit 12.'));
out.push(NOTE('The three rules are the cycle. _It has to be about something you will find out · it has to have a date · nobody takes anything down._ The third is the one students object to and it is the one that matters: a board you can edit is a board that proves you were right. Say at the start that **you** will not take yours down either, and put one up — Ms Huda\'s is on the model page and it is deliberately a prediction about the class being wrong.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _They will refuse by the end of the month, because they have refused the same request twice since February and nothing has changed in between._',
  '**2** _Nobody will read it before the meeting on the fourth, because the agenda went out on Tuesday and the papers go out on the day._',
  '**3** _The road will be closed again before the end of November, because it has been closed in November in three of the last four years and the south side has not been resurfaced._',
  '**4** _It will not be finished by the twentieth, because the paper has not arrived and the last three deliveries were nine, sixteen and twenty-three days late._',
  '**5** _Somebody will ask about the trolley in the first ten minutes, because two of the four read the limits page in June and one of them asked for the trolley herself._',
]));
out.push(A('Every answer has the three parts, and in four of the five the reason is a **pattern with a count in it**. That is the standard to hold: _because they have refused twice since February_ can be checked afterwards, and _because they are like that_ cannot.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** They will refuse.',
  '**B:** I predict they will refuse by the end of October, because they have refused two requests for equipment since February and both refusals came in the last week of the month.',
  '**A:** What will you not know by then?',
  '**B:** Whether they refused it or whether nobody put it on the agenda, and those are completely different things.',
  '**A:** Would you sign it?',
  '**B:** Yes, with that second sentence attached to it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark each reason _pattern_ or _judgement_. Both are legitimate; the point to make is that a pattern prediction can be **audited in February** and a judgement prediction cannot, which is why a board full of patterns teaches the class something and a board full of judgements teaches it nothing.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _M. Hariri · test date 30 September. At least twelve of my fifteen handsets came from one batch. Reason: all fifteen were bought from two shops inside three months and both shops take their stock from the same distributor. What I will not know by then: whether the batch was bad when it left the manufacturer or was stored badly in Damascus — the delivery notes will not tell me that._',
  '**b** _I would bet against the second half of my partner\'s prediction, not the first. He says the meeting will happen and nothing will be decided. The meeting will happen. But a department that has been given a date in writing usually produces one line of minutes, and one line of minutes is a decision._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda put a sheet on the wall that will be there until June. Everybody writes one prediction on it — what they think will happen, the date it can be tested, and their name — with three rules: it must be about something you will find out, it must have a date, and nobody takes anything down. Omar asked why the name, and she said an unsigned prediction is a conversation and a signed one is a record. Rasha predicted that by the end of October the committee will extend the trial to all night staff and will not say the blocks are the cause, and that the second half is the important half: extending costs them nothing and agreeing a cause costs them an argument with whoever wrote the old rota, because a committee will nearly always do the thing that commits it to the least. What she cannot predict is the trolley, which belongs to another office, so that goes on the sheet too. Umm Kinan predicted that the meeting on the twenty-seventh will happen, because she has a date in writing, and that nothing will be decided at it — an honest prediction, she said, because a department cannot change a directorate\'s scheme, so the most it can produce is a letter, and if it produces a letter with a date in it she will have got more than she predicted and would rather be surprised upwards. Mazen predicted that at least twelve of his fifteen handsets are from one batch and that he will know by the end of the month, because he is going to the two shops on Friday for the delivery notes; and if it is nine out of fifteen it is the model and not the batch, which is a bigger problem. Tareq predicted the Harasta road will be closed again before the end of November, and said he is not guessing: three of the last four Novembers, and the south side has not been resurfaced. Ms Huda said every one of the five has a date and a reason, and two of them say what the speaker will not know — and a prediction with no date is an opinion that cannot be tested.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They will to extend it. → ✓ _will_ + bare infinitive.   ✗ It will be closed, I think so. → ✓ one marker of doubt.   ✗ I will see them on the fifteenth. _(arranged)_ → ✓ I am seeing them (13.1).   ✗ a prediction with no date → ✓ a date you will reach.   ✗ _people will not change_ → ✓ predict something you can find out.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It must be about something the class will find out; it must have a date; nobody takes anything down. The name is there because an unsigned prediction is a conversation and a signed one is a record.'));
out.push(A('**2** Rasha — whether the second trolley stays, which belongs to a different office. Tareq\'s entry gives its reason and no blind half, and Nour\'s and Jad\'s give _what would make me wrong_ instead, which is the same device from the other side.'));
out.push(A('**3** That eight of the eleven will be **right about the event and wrong about the reason** — because that is what happened on her own sheet for the last six years.'));
out.push(A('Ms Huda\'s own entry is the most important line on the board and the reason the device works: the teacher is inside the experiment and her prediction is about the class being wrong in a particular way. In February, when the sheet is read in 18.7, her line is the one that will be tested hardest — and in two years of running this, she has been right about it twice and wrong once.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**COUNTER 2, SHAALAN · THE PREDICTION BOARD** · September · M. Hariri',
  '**1 · test date 30 September.** At least twelve of the fifteen handsets came from one batch, and the two shops will not have the delivery notes filed by date. _Reason:_ both take stock from the same distributor; neither has ever been asked for a note before. _What I will not know by then:_ whether the glue failed in the factory or in a room with a window.',
  '**2 · test date 31 October.** Issam Haddad will answer my second letter within a fortnight. _Reason:_ he answered the first one in four days and he asked me a question, and a man who asks a question wants the answer. _What would make me wrong:_ if the question came from somebody above him.',
  '**3 · test date 31 December.** The shop will have had at least three more of the same model back by the end of the year. _Reason:_ fifteen in seven months is about two a month, and the units sold in March are now out of guarantee, so people will pay. _What would surprise me upwards:_ none at all, which would mean the batch has worked itself through.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**WARD 4 NIGHTS · THE PREDICTION BOARD** · R. Barakat · September, to be read in February',
  '**1 · test date 31 October.** The committee will extend the three-night blocks to all night staff and will not accept that the blocks are the cause. _Reason:_ extending costs nothing; a cause costs an argument with whoever wrote the old rota. _What I will not know:_ whether the second trolley stays — different office, and it was lent.',
  '**2 · test date 30 November.** Sister Nasr will still be filling in her own sheet after her trial ends. _Reason:_ she asked for the sheet herself and she corrected my report by one night before I sent it, and people who correct a date are people who have read the page. _What would make me wrong:_ if she is moved to days in November, which has been mentioned once.',
  '**3 · test date 1 March.** There will be one error on a fourth or fifth night between now and March, and it will be used to say the trial has failed. _Reason:_ there is always one; nine months produced seven. _What would surprise me upwards:_ nobody using it that way.',
  '**4 · test date 1 June.** Nobody will have asked the day staff to count anything. _Reason:_ nobody has asked in nine years and the figures that exist are mine.',
  '**The one I most want to be wrong about** is the third, and the reason I have written it down is that if I am right, I would rather it were on a wall in September than a surprise in March.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The strongest one is the third, because you have predicted the thing that will be used against you and dated it, and I have never seen anybody do that. I would change the fourth: \'nobody will have asked the day staff to count anything\' has no date you will reach — June is the date, but you will not find out on a particular day, you will simply notice in June that it has not happened. And my question is what you will do in March if the third one comes true, because the prediction is written as though the error will happen to somebody else."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts on the top of the sheet: how many predictions have dates the class will actually reach, and how many have a pattern with a count under them rather than a judgement. Then say what happens next: the sheet is read in **18.7** and again in **23.7**, and the question both times is what **kind** of thing this room is wrong about — which is 12.6\'s question, asked about the future instead of the past.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the second one to Hani at counter 3 — that Issam Haddad will answer within a fortnight. He said he would not have written it down, because if the man does not answer I will have been wrong in public at a counter where I work. I said that is the point of writing it down, and he said then write his name on it too, because he thinks the letter will be answered and he has not said so to anybody. So there are now two names on it, and one of them is a man who has never in two years told me he agreed with me about anything.']));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  It may be the afternoon run'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The honest answer to the question is that _may_, _might_ and _could_ are interchangeable for almost all purposes, and saying so saves the class twenty minutes of invented distinctions. Careful writers keep _could_ for the outside chance; nobody will misunderstand any of the three. The cycle is not about choosing between them.'));
out.push(A('**b** **1** flat   **2** hedged   **3** hedged   **4** hedged (negative)   **5** flat — and it is a **ruling out**, which is 9.2 and not a hedge at all'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – a delay in the laboratory: why four samples from Monday afternoon came back a day later than two from Monday morning.'));
out.push(A('**b** **1** The afternoon run (the three o\'clock loading), the new tubes and their rack, and the porters\' afternoon round. She thinks it is the afternoon run, because it explains a whole day exactly and the other two would not.   **2** The customer or the ward hears a **cause**: Nour says they are told at TechCare to say the number first — _there are three things this can be_ — so that whatever comes next is one of three and not an answer.'));
out.push(NOTE('The cycle turns on one sentence of Yara\'s: _he heard a cause._ She used _may_ correctly, in the sense the class has been taught, and the doctor walked away and told his ward that the laboratory loses the afternoon samples. The remedy is not better grammar; it is **the number, said first**, plus a ranking and an admission. Three extra seconds of speech, and the difference is a ward that believes the laboratory against a ward that does not.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _There are three things it may be. It may be the loading time, it might be the new tubes, or it could be the porters\' round. I think it is the first, and I have not checked the third._',
  '**2** _There are three things it may be: the adhesive, the way the two shops store stock, or the way the units are carried. I think it is the first, and the second is the one the supplier will say, and nobody has measured either._',
  '**3** _There are two things it may be. The post may have been empty, or the note may have gone to a person who had left. I think it is the first, because the post was empty from March, and I have not looked at the second at all._',
  '**4** _There are three things it may be: one trolley instead of two, the length of the blocks, or who is on with whom. I think it is the first two together, and the third has never been counted._',
  '**5** _There are two things it may be. He may not have had the authority to answer, or the letter may never have reached him. I think it is the first, and I could settle the second with one telephone call that I have not made._',
]));
out.push(A('The shape is the same five times — **number · the possibilities · the ranking · the unchecked one** — and it is worth drilling until it is automatic, because it is said standing up, in forty seconds, to somebody who wants an answer.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Why did my four samples come back a day late?',
  '**B:** There are three things it may be. It may be the afternoon loading, because anything after half past two waits for the next morning. It might be the new tubes on your ward, which need a different rack. Or it could be the porters\' round. I think it is the first, and I have not checked the third.',
  '**A:** So what I will tell my ward is: there are three possible reasons, the laboratory thinks it is the three o\'clock loading, and one of them has not been looked at yet.',
  '**B:** That is exactly right, and I would add: and they are checking it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The only sentence that leaves the room is the one A says they will repeat, and in a first run three or four of the eight are a single cause B never claimed. Read those four aloud. Nobody in the room meant to mislead anybody; the hedge simply arrived without a number in front of it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Why has this handset come back twice? There are three things it may be: the adhesive, the way it is carried in a pocket with keys, or my own repair. I think it is the first, and the third is the one I have to say out loud, because I did the first repair and I have not opened it again since._',
  '**b** _How my answer changed in the repeating: she said "he thinks it is the glue", and I had said the glue was one of three and that one of the three was me._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara was asked on Tuesday by a doctor from ward six, standing at the bench, why his four samples from Monday afternoon came back a day later than the two from Monday morning — and she thinks she answered it badly. She does not know why, and that is the point: there are three things it may be. It may be the afternoon run, because the three o\'clock loading means anything arriving after half past two waits; it might be the sample tubes, since his ward has had the new ones since August and they need a different rack; or it could be the porters, because the afternoon round comes through the second corridor and she has twice found a bag left on the shelf by the lift. What she said was "it may be the afternoon run" — and he thanked her and went away and has told his ward that the laboratory loses the afternoon samples, which is not what she said and is what he heard. She said he heard a cause: she has learnt in this room what may does, but he was a doctor at a bench for forty seconds who wanted an answer. Nour said the same happens at TechCare every week and that they are told to say the number — there are three things this can be, and the commonest is the cable. The customer still hears the cable, but they have been told there are three, so when it is not the cable they are not surprised. Say the number first, before any of the three, and then whatever comes next is one of three and not an answer. Ms Huda asked Yara which of the three she thinks it is: the afternoon run, probably, because it explains the time exactly — but she has not looked at the porters\' round, could do it in twenty minutes, and has been meaning to since August. So the sentence to say to him is: there are three things it may be, I think it is the first, and I have not checked the third.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It may to be the run. → ✓ _may_ + bare infinitive.   ✗ Maybe it is the tubes. _(in writing)_ → ✓ _it may be_ · _one possibility is_.   ✗ It may not be the tubes / it cannot be the tubes used as the same thing → ✓ possibly not, against ruled out.   ✗ a hedge with no number in front of it → ✓ say the number first.   ✗ It is possible that it may be… → ✓ one marker of doubt.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the rack problem costs about two hours, not a day — so on its own it cannot explain what the doctor saw.'));
out.push(A('**2** The porters\' afternoon round, and it would take twenty minutes to check.'));
out.push(A('**3** Two weeks of writing the time on the bag when it reaches the bench — one line in a book they already keep. She has started the two weeks herself, from Monday, and will put the times on the bench whatever they say.'));
out.push(A('The sentence that makes this note professional rather than defensive is the sizing: _that costs about two hours, not a day._ A possibility with arithmetic attached cannot be repeated as a cause, because the arithmetic travels with it. The second is the bolded admission — _I have not checked this one, and it would take twenty minutes_ — which is embarrassing, and is the reason a ward will believe the rest of the page.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHY A REPAIRED HANDSET MAY COME BACK A SECOND TIME** · a note for the counter · M. Hariri · September',
  'A customer asked me this on Saturday and I gave him one answer out of three.',
  '**There are three things it may be.** Not one.',
  '**One — the adhesive on that model.** Fifteen units of the NX-220 since September, all separating at the lower left corner, all with an uneven glue line under a lamp. This explains a unit that comes back at the same corner, and for that reason I think it is the commonest of the three.',
  '**Two — how it is carried.** A handset in a pocket with keys takes a push at the corner twenty times a day. That would explain a scratch and an edge lifting over months, not a separation six weeks after a repair, so on its own it does not explain what he brought in.',
  '**Three — my own repair.** I re-bond with the same adhesive the factory used and I clamp for twenty minutes, and I have never timed whether twenty is enough. **I have not checked this one, and I could check it by clamping the next five for forty and seeing whether any of them comes back.**',
  '**What I think, and what I would not say to a customer.** I think it is the first. I would not say that to a customer as a cause, because if it is sometimes the third then a customer who believes the first will blame the manufacturer for my work.',
  '**What would settle it.** The next five, clamped for forty minutes, with the dates written down. Six weeks, and it costs nothing but twenty extra minutes five times.',
  '**And what I have done about it.** I started on Monday. Two done.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**WHY AN AFTERNOON SAMPLE MAY COME BACK A DAY LATER** · a note for the bench and for ward six · Y. Mansour',
  'A doctor asked me this at the bench last week and I gave him one answer out of three, and he has repeated it to his ward as a cause. This is the whole answer, for anybody who is asked it when I am not here.',
  '**There are three things it may be.** Not one.',
  '**One — the afternoon run.** The analyser is loaded at three, so anything reaching the bench after half past two waits for the next morning: eighteen hours slower than a sample that arrived at eleven. This explains a whole day exactly, and I think it is the commonest of the three.',
  '**Two — the tubes.** Ward six has had the new tubes since August; they need a different rack, and if the rack is in use the machine rejects the first read. That costs about two hours, not a day, so on its own it does not explain what the doctor saw.',
  '**Three — the porters\' afternoon round.** It comes through the second corridor and twice this summer I have found a bag of samples on the shelf by the lift. **I have not checked this one, and it would take twenty minutes.**',
  '**What I think, and what I would not say to a ward.** I think it is the first, most of the time. I would not say it as a cause, because if it is sometimes the third then a ward that believes the first will keep sending at twenty past two and blaming us, and the fault will be in a corridor where nobody is looking.',
  '**What would settle it.** Two weeks of writing the time on the bag when it reaches the bench — one line in a book we already keep.',
  '**And what I have done.** I started the two weeks myself on Monday.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The line that makes this note trustworthy is the bold one, because you have written down the thing you have not done and put a time on it. I would move \'what I think\' higher: a doctor at a bench will read two paragraphs and then stop, and your ranking is in the fifth. And my question is who else can load the analyser at four, because the whole of possibility one is a three o\'clock deadline that nobody outside the laboratory has ever been told about."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect the hours and add them up on the board. The total across a class of eleven is usually under a working day, and every one of those unchecked possibilities has been unchecked for months. That is the cheapest finding in the book and it needs no comment from you beyond the number.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I checked the one I had never checked. I waited by the lift on three afternoons and on the second one there was a bag on the shelf at ten past three, with four samples in it, and nobody had taken it up. So it is not one of three things, it is at least two of them, and the twenty minutes I had been putting off since August was twenty minutes. The porter said he leaves bags there when the laboratory door is shut at three, which it is, because that is when we load.']));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  How likely is it?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the writing-before-speaking matters: everybody puts a figure on paper before anybody says one out loud, or the first number spoken becomes everybody\'s number. The spread is the point — in a first run a single prediction gets figures from three to nine, and the class is looking at the same words.'));
out.push(A('**b** Most likely to least: **a** _bound to_ (9–10) · **e** _may well_ (7–8) · **c** _likely to_ (7) · **b** _a slight chance_ (1–2) · **d** _unlikely to_ (2). Accept **b** and **d** in either order and make the class argue it; the useful discovery is that the bottom two are not distinguishable in practice and the top three are.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – how likely her projection is.'));
out.push(A('**b** **1** Seven out of ten, standing on three things: forty-one visits timed; the complaint log, where 31 of 44 in August said "late"; and the north-district engineer who has been booking replacements at an hour for a year with the lowest lateness figures in the company.   **2** That it looks like a measurement when it is a judgement with three facts holding it up — so it needs a range.'));
out.push(NOTE('Two sentences from this dialogue are worth keeping for the rest of the course. _It is a seven I can write down and an eight I cannot_ — a figure lowered because the strongest supporting fact cannot be published, which is an honest thing almost nobody does. And _a seven pretending to be a ten_, which is what _I think it will fall by a third_ was. The grammar in this cycle is twenty minutes; the habit is the unit.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _It is likely to be extended, seven out of ten, probably to all nights rather than to half of them; and there is a real chance that it is extended without any statement about the cause at all._',
  '**2** _It is likely to be closed, eight out of ten, probably for between four and ten days; there is a chance that the resurfacing is brought forward instead, which would be the first time in four years._',
  '**3** _It is likely that twelve or more of the fifteen are from one batch, six out of ten; there is a real chance that the delivery notes have no batch numbers on them at all, in which case I will not know._',
  '**4** _Nothing is likely to be decided, seven out of ten; there is a chance of one line of minutes, and one line of minutes is a decision._',
  '**5** _I am unlikely to telephone anybody in English, three out of ten that I will — and the three is higher than the nought I would have given it in April._',
]));
out.push(A('Item 3 carries the most useful move in the cycle: a likelihood that includes the possibility that **the question cannot be answered at all**. _There is a real chance that the notes have no batch numbers, in which case I will not know._ Students forecast outcomes and forget to forecast the measurement failing.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The complaints will fall by a third.',
  '**B:** Seven out of ten. It stands on forty-one timed visits, on 31 of 44 August complaints saying "late", and on one engineer who has been doing it for a year. It is likely to fall, probably by between a quarter and a half.',
  '**A:** And the other three out of ten?',
  '**B:** There is a real chance that the desk puts a fifth visit in the gap, in which case nothing moves — and a smaller chance that the complaints are not mostly about time, because I have not read thirteen of the forty-four.',
  '**A:** What would move your number up by two?',
  '**B:** Reading those thirteen. It would take an afternoon and it is the only thing on the list I can do myself.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight numbers, and under each one the facts. Mark them _counts_ or _impressions_. The point is that nothing in the **wording** distinguishes a seven built on three counts from a seven built on three impressions — and that is why the facts have to be written underneath, which is 14.6.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Mine is six out of ten, not the eight I wrote on the wall. It stands on two counts and one impression: fifteen units in seven months and two shops with the same distributor are counts, and "both shops store badly" is an impression, because I have been in one of the two rooms once._',
  '**b** _My partner\'s eight is a measurement presented as a judgement, which is the rarer mistake and the better one: she has timed sixty requests and written "I think it takes about thirty hours", when what she has is a mean of thirty-one with a range._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Nour how likely her projection is, out of ten, and she said seven. Jad said that is very high for something nobody has tried, and she agreed and gave what it stands on: forty-one visits timed from doorbell to signature; the complaint log, where the reason was "late" on thirty-one of forty-four in August; and the engineer in the north district who has been booking his own replacements at sixty minutes for about a year and has the lowest lateness figures in the company. Jad pointed out that the third was not on the wall, and she said it is the strongest of the three and she left it out because he is not supposed to be doing it. Omar said so her seven is really an eight with a man\'s job inside it, and she said it is a seven she can write down and an eight she cannot. The other three out of ten are two things: the complaints may not be mostly about time, because thirty-one of forty-four say "late" and she has not read the other thirteen; and the desk may book the sixty and put a fifth visit in the gap, in which case the day is the same length and nothing moves. Rasha said they will do that; Nour said they are likely to do that, and if they do, her projection is wrong for a reason that has nothing to do with her numbers. Jad said then say so on the wall, because a number with no range round it looks like a measurement and hers is a judgement with three facts holding it up. So she restated it: likely to fall, probably by between a quarter and a half, and a real chance of no change at all if a fifth visit goes into the gap — and the version she had been using on Tuesday was "I think it will fall by a third", which is a seven pretending to be a ten.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It will likely fall. → ✓ _it is likely to fall_ · _it will probably fall_.   ✗ It is likely fall. → ✓ likely **to** fall.   ✗ There is a chance to happen. → ✓ _a chance that it will happen_ · _a chance of it happening_.   ✗ It is possible that it may happen. → ✓ one marker.   ✗ a single figure for a forecast → ✓ a range.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A fall of between a quarter and a half, at seven out of ten.'));
out.push(A('**2** The north-district engineer who books replacements at an hour and has the lowest lateness figures — and she calls it hearsay because it is not hers to publish: he is not supposed to be doing it.'));
out.push(A('**3** That no fifth visit goes into the gap. Without that condition the month is not worth running, because the day would be the same length and nothing would move.'));
out.push(NOTE('The condition paragraph is the most practical thing in the cycle and it is the thing that wrecks real trials in real workplaces: the change is made and something else is changed in the same week, and then nothing can be concluded. One line — _and that last condition is the whole experiment, so if it cannot be held then the month is not worth running_ — prevents it, and a class that writes that line once will write it for the rest of their working lives.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**IF THE PATHOLOGY FORM SAID 36 HOURS** · a projection · Y. Mansour',
  '**What I am projecting.** That if the request form says 36 hours for routine and 4 for urgent for one month, the telephone calls to the bench asking where results are are **likely to fall by between a third and two-thirds**. I would put it at six out of ten.',
  '**The things it stand on.** **1** Sixty routine requests logged at the bench between June and August: mean 31 hours, range 22 to 51. **2** About nine calls a day, which I have counted on eleven days, and seven of those nine ask for a result that is not yet due under the real figure. **3** Nobody has ever told a ward what the real figure is.',
  '**The other four out of ten.** The calls may not be about the form at all: a doctor who needs a result in four hours will telephone whatever the form says, and about two of the nine are that. And the office may change the form and not tell the wards, in which case nothing moves — **this is the likelier of the two**.',
  '**What would make me wrong in a way I would not mind.** If the calls fall to nothing, it was never about time at all, and the real problem is that nobody knows who to ask.',
  '**What I am asking for.** One month, the form changed, nothing else — and the wards told, which is the whole experiment.',
  '**How it will be judged.** The calls, counted at the bench by whoever is on, for October against August. Not by me alone.',
]));
out.push(S('Stage 7 · Write freely (sample, 170 words)'));
out.push(SAMPLE([
  '**IF REPLACEMENTS WERE BOOKED AT SIXTY MINUTES** · a projection · N. Sabbagh · September',
  '**What I am projecting.** That if replacement visits are booked at 60 minutes instead of 90 for one month, the lateness complaints for that month are **likely to fall by between a quarter and a half**. Seven out of ten.',
  '**The three things it stands on.** **1** Forty-one visits timed from the doorbell to the signature between March and August: a replacement takes a mean of 55 minutes, range 38 to 80. **2** The complaint log gives a reason, and in August 31 of 44 said "late". **3** One engineer in the north district has been booking his own replacements at an hour for about a year and has the lowest lateness figures in the company — the strongest of the three facts, and not mine to publish, so take it as hearsay unless he says otherwise.',
  '**The other three out of ten.** The complaints may not be mostly about time: 31 of 44 say "late" and I have not read the remaining 13. And the desk may book the hour and then put a fifth visit into the gap, which makes the day the same length — **the likelier of the two, four out of ten on its own**.',
  '**What would make me wrong in a way I would not mind.** If complaints fall by more than half, it was never the booking: it was the travel time, which is 25 to 40 minutes inside a district and 45 to an hour between them against the 20 the desk allows.',
  '**What I am asking for.** One month, nothing else changed, and no fifth visit in the gap — and that last condition is the whole experiment.',
  '**How it will be judged.** The complaint log, by reason, for October against August, counted at the desk and not by me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The best thing on the page is that you lowered your own number because of the fact you cannot publish, and then said so — I would have written eight and hoped nobody asked. I would change the hearsay sentence: you are protecting a man by naming his district, and his district has one engineer. And my question is what you will do in November if the month is run and a fifth visit goes in anyway, because your own four out of ten says that is the likeliest outcome and your page has no answer for it."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Hands for measurement and hands for judgement, and then the real count: how many judgements are **presented as** measurements? Most of them, and not out of vanity — a single figure is shorter than a range, and shorter is what everybody writes. The fix is one word: _between_.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I showed it to Rania at the desk. She argued with the range, not the seven: she said a quarter to a half is useless to her because she has to tell her manager one number, and if I give her two she will give him the lower one and I will be blamed for the difference. So we agreed on a sentence for her to use — "between a quarter and a half, and we will know on the thirty-first" — and she wrote it down. The number she argued with was the one I thought was the careful part.']));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  Where the adverb goes'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask the second question each time — _did the meaning change, or only the sound?_ — because with the negative it changes and with the positive it does not, and the class should discover which is which rather than be told.'));
out.push(A('**b** **1** _They will **probably** extend it._   **2** _They **probably** will not say why._   **3** _It is **probably** the afternoon run._   **4** _It **probably** is not the tubes._   **5** _She has **probably** read the other thirteen._'));
out.push(A('Items 2 and 4 are the whole grammar point: **the adverb jumps in front of the negative.** Items 1, 3 and 5 are the ordinary positions — after _will_, after _is_, before a full verb.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – that it changes what a sentence means: he wrote _will not probably be resurfaced_ and the depot read it as _definitely not_.'));
out.push(A('**b** **1** With a positive verb the adverb goes after _will_; with a negative it goes before _will not_ — the adverb jumps in front of the negative.   **2** That she has stopped using it in writing altogether, because in her own pages it always turns out to be a seven out of ten: the word that belonged there was _clearly_ (what you can see) or _almost certainly_ (what you think), and _definitely_ should be written only by somebody who has measured something.'));
out.push(NOTE('Mazen\'s line is the one to put on the board for the rest of Book 2: **half the adverbs I use are standing where a number should be.** It converts a grammar cycle into an editing habit, and it is the sentence that makes the Lesson B rewriting task obvious rather than pedantic. Lubna\'s refusal of _definitely_ is the same discipline from the other side, and both students arrived at it from their own pages.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _It will probably be closed._ → _It has been closed in three of the last four Novembers._',
  '**2** _They probably will not answer._ → _They have not answered two of my last three letters._',
  '**3** _It is definitely the render._ → _It is clearly a different sand: coarser to the eye and to the hand, and untested._',
  '**4** _She has certainly read them._ → _She quoted the third one back to me on Tuesday._',
  '**5** _It possibly is not the rack._ → _The rack costs two hours and the delay was a day._',
]));
out.push(A('Five adverbs out, five pieces of evidence in — and in every case the evidence already existed before the sentence was written. That is the finding to draw out in 7R, and it is the same finding as 13.5 and 13.6: the useful thing was already in a book, a drawer or a count.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** It will be closed before November. (probably)',
  '**B:** With the adverb: it will probably be closed before November.',
  '**B:** Without it: it has been closed in three of the last four Novembers and the south side has not been resurfaced.',
  '**A:** Which would you send?',
  '**B:** The second, to the depot, because the first one is an opinion and the second one is a reason to do something in October.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Six or seven of the eight evidence versions are better. The two that are not are the sentences where **no number exists** — and that is exactly where an adverb belongs, which is the second half of the cycle and the reason it is not an instruction to delete every adverb.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Three from my Unit 7 page. "The seal is definitely splitting" — I had looked at it with a torch, so: clearly, and the torch is the evidence. "They will probably not replace it" — right place, and it stays, because I have no pattern to put there. "The round is definitely late more often with one trolley" — I have the number: twenty-six nights out of thirty-one._',
  '**b** _My partner\'s unmeasured "definitely": "the second door was definitely welded before 2011", from a file that starts in 2011. That is not evidence of when it was welded; it is evidence of when the file starts._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq wrote to the depot on Tuesday and got an answer about the wrong thing, and he thinks it was one word in the wrong place. What he meant was: the south side will probably not be resurfaced before the winter, so the road will probably be closed again in November. What he sent was "the south side will not probably be resurfaced" — and the man who answered asked whether he had heard that the resurfacing had been cancelled, because he read "not probably" as "definitely not". Jad gave the rule: with a positive verb the adverb goes after will, and with a negative it goes before will not; with is and are it goes after, and with is not it goes before. Nour said so the adverb jumps in front of the negative, and Jad said that is the whole rule — in speech people say the other one and are understood, and in writing it is read exactly. Then Lubna said she has stopped using "definitely" in writing altogether, because in her own pages it always turns out to be a seven out of ten: she had written that the render is definitely a different sand and she had not had it tested, she had looked at it. The word that belonged there was "clearly", which is about what you can see, or "almost certainly", which is about what you think — and definitely is a word students use to sound sure, and only people who have measured something should write it. Mazen said he wrote "definitely one batch" on the wall and crossed it out before pinning it up, and wrote "at least twelve of the fifteen" instead, which is a number and needs no adverb — and that half the adverbs he uses are standing where a number should be.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They will not probably answer. → ✓ They probably will not answer.   ✗ He answered probably. → ✓ He probably answered.   ✗ Probably they will extend it. _(in writing)_ → ✓ keep it inside the verb phrase.   ✗ /defɪˈnaɪtli/ → ✓ /ˈdefnətli/.   ✗ an adverb where a number exists → ✓ the number.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Two became evidence (_clearly, coarser to the eye and to the hand_), two became numbers (_4 to 5 °C_, _three afternoons in July_), one became a year out of a file (_in 2009_), and one became an honest limit (_so far as I can see, which is not the same as knowing_).'));
out.push(A('**2** Sixty-one words instead of thirty-four — and it is worth paying in a survey report, because every sentence in the second version can be checked by somebody standing in the building and not one sentence in the first version can.'));
out.push(A('**3** Because there is no number available: the drawing is incomplete and the only way to know is to open a floor, which nobody will do for a student\'s report. _An adverb is the right word when the evidence genuinely does not exist, and the wrong word when it exists and you have not gone and got it._'));
out.push(A('The last paragraph of the model is what stops this cycle becoming a rule about forbidden words. Keep one adverb, defend it, and give the reason — and the reason is always about **where the evidence is**, not about style. A page that replaces all six is a page that has obeyed a rule; a page that replaces five and defends the sixth is a page that has thought.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR SENTENCES, TWO VERSIONS** · T. Ayoub · from the depot letters, rewritten',
  '**Before.** The south side will probably not be resurfaced before the winter. The road will definitely be closed again. The check sheets are probably not being read. Nobody at the office has certainly looked at the nine dates.',
  '**After.** The south side **will probably not** be resurfaced before the winter — right place this time, and the adverb stays, because I have no date from anybody and nobody at the directorate will give me one. The road **has been closed in three of the last four Novembers**, for between four and ten days each time. The check sheets **are collected from the office window and filed unread**: I have asked twice what happens to them and been told twice that they go in the box. And of the nine dates I sent, **one has been quoted back to me** — the twelfth of May — which is evidence that somebody read at least one line.',
  '**What changed.** Three adverbs out of four gone: one became a pattern with a count, one became what I was told twice, and one became a single quoted date. One stayed.',
  '**What it cost.** Ninety-one words instead of forty-two.',
  '**And the one adverb I kept.** _Will probably not be resurfaced_ — because the evidence does not exist anywhere I can reach, and an adverb is the honest word for that.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**FOUR SENTENCES, TWO VERSIONS** · L. Sweidan · from the survey report, rewritten in September',
  '**Before.** The render on the 1974 extension is definitely a different sand. The four floors are probably all as built. The partitions were definitely put in later. The south rooms are definitely hotter in summer and the windows have probably never been replaced.',
  '**After.** The render on the 1974 extension is **clearly** a different sand: coarser to the eye and to the hand, weathered separately, and I have not had it tested. The four floors are as built **so far as I can see from the 1962 drawing and the door widths**, which is not the same as knowing. The partitions were put in **in 2009** — the year is in the conversion file. The south rooms run **4 to 5 °C hotter** than the north side on the three afternoons I measured in July, and the windows **have no putty line and no paint under the sill**, which is what an unreplaced window looks like after sixty years.',
  '**What changed.** Four _definitely_s and two _probably_s have gone: two became evidence, two became numbers, one became a year out of a file, and one became an honest limit.',
  '**What it cost.** Sixty-one words instead of thirty-four — worth paying in a report, because every sentence in the second version can be checked by somebody standing in the building.',
  '**And the one adverb I kept.** _The four floors are probably all as built_, because there is no number available and the only way to know is to open a floor.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The line I would steal is \'what an unreplaced window looks like after sixty years\', because it gives me a way of seeing it myself instead of trusting you. I would cut \'coarser to the eye and to the hand\' to one of the two — the hand is the one that matters and it is the one nobody else will have done. And my question is whether the three July afternoons were all the same weather, because if they were, your 4 to 5 degrees is one measurement taken three times."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Both numbers, and then the question that ends the cycle: of the adverbs replaced by numbers, how many of those numbers already existed somewhere before today? Almost all of them. Mazen\'s sentence, proved by the room\'s own pages.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['One page of handover notes, five adverbs. Two in the wrong place — "the family will not probably come before nine", twice, which I have been writing for years. Two replaced by numbers I had in the book in front of me: "the round is probably late on fifth nights" became "late on twenty-six of thirty-one nights in July". One kept: "she will probably be moved to days in November", because one person mentioned it once and there is nothing else to put there.']));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  By the end of October'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Read the dates off the board rather than inventing them: the thirtieth of September, the twenty-seventh of October, the thirty-first of October, the thirtieth of November. Two answers per date — what will be known, and what will still not be — and the second one is where the thinking is.'));
out.push(A('**b** **1** by   **2** until   **3** By   **4** until   **5** until'));
out.push(A('The test to give the class, in one line: **if the sentence is about something being complete, it is _by_; if it is about something going on, it is _until_.** Items 4 and 5 are the two that catch students, because both have a feeling of a deadline in them and both are about waiting.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** The second ministry order: twelve thousand sixty-four-page booklets, and the form asks for the date by which the work will be completed. What he will not know by either date is whether the ministry\'s own office approves the proof inside the five working days the conditions allow — the first order took eleven.'));
out.push(A('**b** **1** _By_ is a deadline — finished on or before. _Until_ is a duration — the work or the waiting goes on up to that point and it says nothing about being finished.   **2** That _finished_ on that form means printed, folded, trimmed, boxed and **off the premises** — and the premises includes the yard, so three of the eight days he was late in June were twelve thousand booklets standing in the yard while he thought the clock had stopped.'));
out.push(NOTE('This cycle closes the definitions thread from 11.7 and 12.3 with the cheapest possible lesson: the eight days in a file with his name on them are **three days of not knowing what the word _finished_ meant** plus five days of a late delivery. The definition was on the page before the conditions the whole time. Say it once and let it sit; the class has watched this man read that page twice and it is the third time it has cost or saved him something.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I will have the delivery notes by Friday, if both shops have them filed; by the end of the month if one of them has to go through a box. By then I still will not know the batch numbers, because the notes may not carry them._',
  '**2** _Nothing can be decided until the examinations are over, which is the tenth; and nothing will be minuted until the twenty-seventh. By then I still will not know who writes the letter._',
  '**3** _The complaints figure will be in by the fifth of November, because the desk closes the month on the last working day. By then I will not know whether a fifth visit went into the gap._',
  '**4** _We cannot book the month until the desk agrees the two numbers, and we will not know that until Rania has spoken to her manager, which is Thursday._',
  '**5** _I will know whether it is a batch by the thirtieth, if the notes have numbers on them — and if they do not, I will not know by any date at all and I will have to ask the manufacturer._',
]));
out.push(A('Item 5 is the one to mark: **a date you may never reach.** _If they do not, I will not know by any date at all_ is a more honest sentence than any deadline, and it is the one students will not write unless they are asked for it by name.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I will have the delivery notes…',
  '**B:** …by Friday, if both shops keep them by date. By then I still will not know whether the notes carry batch numbers at all.',
  '**A:** What is the date the date of?',
  '**B:** Of having the notes in my hand, which means photographs of them on my telephone and not a promise from a shopkeeper that he will look.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight dates, and next to each what the date is the date **of**. Three or four will turn out to mean something different from what the listener assumed — _ready_ against _off the premises_, _released_ against _reported_, _notes in my hand_ against _notes promised_ — and every one of those gaps is somebody\'s eight days.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I told the ward manager the September report would be with her by the twelfth. It was, and the date was the date of my sending it — not of her reading it, which was the fourteenth, and not of the committee seeing it, which was the fifteenth at ten. If she had been late reading it, my date would still have been kept and the meeting would still have had a paper nobody had read._',
  '**b** _What my partner\'s date would mean to somebody reading it in a file in a year: "repair completed 14 October" would mean the unit worked on the fourteenth, and what it means is that he finished it on the fourteenth and the customer collected it on the twenty-second, untested, which is the date that matters if it comes back._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel has a second ministry order and they want a date — not a price, a date: twelve thousand copies of a sixty-four-page booklet, and the form asks for the date by which the work will be completed. He has written nothing in the box yet, which is why he brought it. In April he would have written the earliest date he could imagine, because that is how you get the order; now he knows what the line costs, because the first order had the same box, he wrote the fourteenth of June, they finished on the twenty-second, and the eight days are in a file with his name on them for ever. The honest date is: by the twentieth of November he will have twelve thousand booklets, if the paper arrives in the first week of October — and the paper is the whole thing, because it comes through an agent and the last three orders came between nine and twenty-three days late. Jad said then he cannot give a date at all, and Bassel said he can give two: by the twentieth of November if the paper comes by the seventh of October, and by the fifth of December if it comes as late as last time — and that is what he will write in the box, in both halves, even though nobody has ever written two dates in it. Then the grammar: by and not until. By the twentieth means finished on or before it; until the twentieth means the work goes on and then stops and tells you nothing about whether it is finished. And the word finished: he said twelve thousand booklets, not finished, because finished on that form means printed, folded, trimmed, boxed and out of the premises — and the premises includes the yard. Three of those eight days were the booklets standing in the yard, finished, and him thinking the clock had stopped. So a date needs a definition behind it, and the definition is on the page before the conditions.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will know until Friday. → ✓ by Friday.   ✗ We cannot start by October. → ✓ until October.   ✗ After two weeks I will know. _(from now)_ → ✓ in two weeks\' time.   ✗ Until the end of October we will know. → ✓ by the end of October.   ✗ a date with no definition → ✓ say what the date is the date of.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Twelve thousand copies, sixty-four pages, printed, folded, trimmed, boxed and **off the premises** — including the yard, under definition 3. He spells it out because on the first order he dated it as _finished_ and three of the eight late days were boxes standing in the yard.'));
out.push(A('**2** The machines (both serviced in August; the older one has run a sixty-four-page job twice this year), the folding, and the people (the same three men since 2019, one of them now named in writing to authorise work). He includes it because the last form made everything look like a risk.'));
out.push(A('**3** Whether the ministry\'s own office will approve the proof inside the five working days the conditions allow — the first order took eleven. He has not put it in the box because it is not his to promise, and he asks for one line confirming who signs the proof and in how many days.'));
out.push(A('Two moves in this model are worth copying into any trade. **The dependency with its own record** — _the last three orders arrived 9, 16 and 23 days late_ — which turns a condition from an excuse written in advance into a reason. And **what is not a risk**, which is the paragraph nobody writes: a page listing only dangers reads as a man covering himself, and the same page with three things declared safe reads as a man who knows his shop.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WARD 4 · THE SEPTEMBER REPORT · WHEN IT WILL BE WITH YOU** · R. Barakat',
  '**In the box:** _With you by 12 September if the August sheet is returned from the equipment office by the 8th. By 19 September if it comes later than that._',
  '**What I am putting a date on.** The report in your hand, read or unread — not the committee seeing it, which is the fifteenth, and not anybody agreeing anything.',
  '**What the date depends on.** One thing: the August trolley figures, which are on a sheet the equipment office took away on the twenty-ninth. I have asked for it twice and been told once that it is "with the office".',
  '**What is not a risk.** The night figures are not a risk: they are in my own book and they are complete to the thirty-first. The typing is not a risk. Sister Nasr\'s sheet is not a risk; she gave me a copy on the ninth and corrected one date on it herself.',
  '**What I will not know by either date.** Whether the trolley stays. That is a different office and nothing I write will settle it by September.',
  '**Why two dates and not one.** Because one date is a promise about an office I have asked twice and heard from once. If I write the twelfth and the sheet comes on the fifteenth, the report is late and the reason is in a drawer.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**MINISTRY ORDER 2026/2 · DATE BY WHICH THE WORK WILL BE COMPLETED** · B. Tahhan, Dar al-Kutub Press',
  '**In the box:** _By 20 November 2026 if paper is received by 7 October. By 5 December 2026 if paper is received after 20 October. See attached page._',
  '**What I am putting a date on.** Twelve thousand copies, sixty-four pages, printed, folded, trimmed, boxed and **off the premises** — which, under definition 3, includes the yard. The first order I dated as "finished", and three of the eight days I was late were twelve thousand booklets standing in the yard while I thought the clock had stopped.',
  '**What the date depends on.** One thing: the paper. It comes through an agent and the last three orders arrived 9, 16 and 23 days after the date I was given. If it is here by the seventh of October, the twentieth of November is nine out of ten; if it comes on the twenty-third, the fifth of December is six.',
  '**What is not a risk.** Both machines were serviced in August and the older one has run a sixty-four-page job twice this year. The folding is not a risk. The people are not a risk: the same three men have done every ministry job since 2019.',
  '**What I will not know by either date.** Whether your office approves the proof inside the five working days the conditions allow. The first order took eleven. That is not mine to promise, so I am asking for one line confirming who signs the proof and in how many days.',
  '**Why two dates and not one.** Because one date is a promise about somebody else\'s delivery lorry.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Putting the yard in the first paragraph is the whole letter, because it is the only sentence that tells the ministry you have read their own definitions page, and it is worth more than the two dates. I would cut \'see attached page\' from the box and put the two dates and nothing else, because a box with a cross-reference in it looks like a man asking for an argument. And my question is what you will do if they send the form back and insist on one date, because somebody in that office may have a rule about boxes with two answers in them."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect the days and total them on the board. In a class of eleven adults the total is usually between thirty and sixty days of lateness that belonged to somebody else\'s delivery, and every one of them was promised with a single date. One extra line of writing is the whole remedy, and the room has just added up what not writing it has cost.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the two-date version to the man who is waiting for the September figures. He read it and said: "so the twelfth is only true if the equipment office sends the sheet", and I said yes, and he said he would ring them himself, and he did it while I was standing there. I have been waiting three weeks for that sheet and what produced it was writing down that my date depended on it. He also asked for the second date to be the nineteenth and not the twentieth, because the committee papers go out on the nineteenth, which is a thing I did not know and which would have made the second date useless.']));

// ===================== 14.6 =====================
out.push(pb());
out.push(h2('14.6  A forecast with its assumptions under it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and it needs the real documents on the table. In most of them there are no assumptions written down at all, so the useful question is the second one: _what must the writer have assumed?_ Expect the class to reconstruct three or four assumptions for a one-line figure, and expect at least one student to find that their own employer\'s forecast cannot be reconstructed at all.'));
out.push(A('**b** Forecasts: **2** and **4** — both have a range or a condition, and both can be tested. Wishes: **1** (a single figure with nothing under it) and **3** (_we expect improvement_, which cannot be wrong).'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Omar\'s own company\'s: one sentence in a nine-page document — _service revenue is expected to grow by eighteen per cent in 2026_ — with no assumptions under it.'));
out.push(A('**b** **1** That both large contracts renew (a third of service revenue between them), that all four engineers stay (two were lost in eighteen months), and that the January price rise happens (discussed twice, not decided).   **2** A forecast is a number with its assumptions written under it, so that a reader can see which to doubt; a target is a number with nothing under it, whose purpose is to make people try harder. Both are legitimate documents and they are not the same one.'));
out.push(NOTE('This is the sentence the unit exists to deliver and it is worth the whole lesson: **a forecast is a number with its assumptions under it; a target is a number with nothing under it.** Add Omar\'s two observations, which are his and not the teacher\'s: a round number is usually a hope and an odd number is usually arithmetic; and _he is not a dishonest man, he is a man with a number_. Most bad forecasting in workplaces is not deceit, it is an absent habit.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Between four and eighteen per cent. 1 Both large contracts renew (6/10). 2 Four engineers stay (6/10). 3 The January rise happens (5/10). If the May contract goes: twelve. If an engineer goes too: four._',
  '**2** _By 20 November or 5 December. 1 Paper by 7 October (4/10). 2 Proof approved in five working days (5/10). 3 Both machines run (9/10). If the proof takes eleven days again: 12 December. If the paper comes in November: no date I can give._',
  '**3** _A fall of between a quarter and a half. 1 The complaints are mostly about time (7/10). 2 No fifth visit in the gap (4/10). 3 The month is not a holiday month (9/10). If a fifth visit goes in: no change. If the complaints are not about time: no change and I was wrong about the cause._',
  '**4** _Sheets 1–3 finished by June. 1 Access to the yard continues (7/10). 2 The university releases the 1974 file (3/10). 3 Nobody asks for a condition survey as well (8/10). If the file does not come: three sheets with two blanks instead of one._',
  '**5** _Extended to all nights from November. 1 The trolley stays (4/10). 2 Two people keep counting (7/10). 3 No error on a fourth night before then (6/10). If there is one error: extended for one more quarter only. If the trolley goes: no extension and no figures either._',
]));
out.push(A('Each answer carries the three parts — the number with a range, numbered assumptions with likelihoods, alternative numbers — and in each one the lowest likelihood is attached to the thing **outside the writer\'s control**. Point that out: it is the single most reliable pattern in forecasting and the class discovers it five times in one exercise.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Revenue will grow by eighteen per cent.',
  '**B:** Between four and eighteen, if: one, both large contracts renew — six out of ten; two, we keep four engineers — six; three, the January price rise happens — five.',
  '**B:** If the May contract goes: twelve per cent. If an engineer goes as well: four.',
  '**A:** Which assumption would I doubt first?',
  '**B:** The engineers, and so would I, because two went in eighteen months and both went to companies paying about a fifth more — and that is the one nobody in the building can fix this year.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In six or seven of the eight the whole class doubts the same assumption, and in every case it is the one that depends on **somebody outside the room** — a supplier, an office, a committee, a labour market. That is the most useful single thing to know about forecasting and it comes out of the room\'s own answers in four minutes.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Mine is the ward induction sheet: "the round takes approximately fifty minutes". There are no assumptions and I can only reconstruct one — that there are two trolleys, which there have not been since February. It is a target wearing a forecast\'s clothes and it is read by every new nurse on her first night._',
  '**b** _What my partner\'s document would have needed to be useful in March: a date, a name and one line saying which of its numbers is the one to watch. It has eleven numbers and no hierarchy, so in March nobody will know which one was the point._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar brought a forecast from his own company: one line in nine pages — service revenue is expected to grow by eighteen per cent in 2026 — written by the commercial manager in August for the owner. Nour said eighteen is a strange number, and Omar said that is the first thing he noticed after a year in this room: a round number is usually a hope and an odd number is usually arithmetic, so there is arithmetic somewhere and it is not on the page. He worked out the three things it must assume: that the two large contracts both renew, because between them they are a third of service revenue; that all four engineers stay, and two were lost in eighteen months; and that the January price rise happens, which has been discussed and not decided. Lubna said so the eighteen per cent is really "if two contracts renew and nobody leaves and we raise the price", and Omar said yes — and if any one of the three fails the number is wrong, and nobody reading the nine pages can see that, because the assumptions are in the manager\'s head. Rasha asked whether he is hiding them; Omar said no — he has probably never written them down and nobody has asked him to: he is not a dishonest man, he is a man with a number. Then Ms Huda gave the distinction: a forecast is a number with its assumptions written under it so that somebody else can see which to doubt, and a target is a number with nothing under it, to make people try harder. Both are legitimate and they are not the same document, and most of the trouble in offices comes from one being read as the other. Omar said the owner is reading a target as a forecast, and Ms Huda said that in March, when one contract does not renew, somebody will be asked why the forecast was wrong — and the honest answer will be that it was never a forecast.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It is expected to grow. _(by whom?)_ → ✓ _I expect_, and say what on.   ✗ We hope to achieve eighteen per cent. _(in a forecast)_ → ✓ label it a target.   ✗ a single figure → ✓ a range.   ✗ an assumption with no likelihood → ✓ a number out of ten and the fact behind it.   ✗ a forecast nobody will check → ✓ name the test and the judge.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Between four and eighteen per cent, with eighteen only if all three assumptions hold; his own figure is nine to twelve.'));
out.push(A('**2** Assumption 2 — keeping four engineers — because two were lost in the last eighteen months to companies paying about a fifth more.'));
out.push(A('**3** It is not a criticism of the August document; a target is a reasonable thing for a commercial manager to write. It is a criticism of **reading** it as a forecast, and the person doing that is the owner — because nobody has ever given him the page underneath.'));
out.push(A('The refusal in the middle of this page is what makes the rest of it credible: _I have not put a figure on that because I do not have the costings and should not invent them._ One refusal buys every other number on the page. And the last paragraph is the 12.2 move — correct the reading, not the colleague — which is why a page like this gets used instead of filed.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE WARD INDUCTION SHEET · "APPROXIMATELY FIFTY MINUTES"** · a forecast and not a target · R. Barakat',
  'The induction sheet contains one sentence about the round: _the round takes approximately fifty minutes._ This page says what that number is standing on, because every new nurse reads it on her first night and concludes that she is slow.',
  '**The number, with a range.** With two trolleys, **58 to 71 minutes**, mean 63, from five timings. With one trolley, **75 to 95**, from four. My own figure for a first-night nurse is **ninety at least**.',
  '**Assumption 1 — two trolleys.** The fifty assumes two, and there have been two for four weeks since February. **Nine out of ten that this is the main gap.**',
  '**Assumption 2 — a full bay list.** The fifty assumes the five bays are open. Four open bays is forty-five minutes and it is in the figures as a fast night. **Eight out of ten.**',
  '**Assumption 3 — nobody new.** A nurse in her first fortnight takes about half as long again, which I know from being one and from watching two. **Six out of ten, because I have not timed anybody but myself.**',
  '**What is not an assumption.** The drug cupboard, the charts and the signatures: none of them has changed since the sheet was written.',
  '**How this will be judged, and by whom.** Five timings by the next new nurse, in her own hand, in her first fortnight — and if her figures are nearer fifty than ninety, this page is wrong and I will write that on it.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**SERVICE REVENUE, 2026 · A FORECAST AND NOT A TARGET** · O. Darwish · September',
  'The August document contains one sentence about next year: _service revenue is expected to grow by eighteen per cent in 2026._ This page says what that number is standing on, because in March somebody will ask.',
  '**The number, with a range.** Between **four and eighteen per cent**, and eighteen only if all three assumptions below hold. My own figure is **nine to twelve**.',
  '**Assumption 1 — both large contracts renew.** A third of service revenue between them; one renews in February, the other in May. **Seven out of ten** for February — four years and nothing has gone wrong — and **five out of ten** for May, because in July they asked two questions about price that they had never asked before.',
  '**Assumption 2 — we keep four engineers.** We lost two in eighteen months, both to companies paying about a fifth more. **Six out of ten**, and the one I would doubt first if I were the owner.',
  '**Assumption 3 — the January price rise happens.** Discussed twice, not decided; the last rise was 2024. **Five out of ten.**',
  '**The alternative numbers.** If the May contract goes: **twelve per cent**. If an engineer goes as well: **four per cent**. If both the May contract and two engineers go, revenue falls and I have not put a figure on it, because I do not have the costings and should not invent them.',
  '**How this will be judged.** The monthly service revenue figure the accounts office produces anyway, against the same month last year, not by me — and the first month that matters is March.',
  '**And what this page is not.** Not a criticism of the August document: a target is a reasonable thing to write. It is a criticism of reading it as a forecast.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The strongest line is the refusal — you will not put a figure on the worst case because you have not got the costings — and it is the line that makes me believe the other six numbers. I would change the last paragraph: \'not a criticism of the August document\' is generous and the next sentence takes it back, so either cut the generosity or cut the sting. And my question is whether the owner has ever been shown a page like this, because if he has not, the most useful thing you could do is show him this one before March and not after it."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts, and in two years of running this cycle the first one has never been more than two out of eleven: documents the class brought in that had their assumptions written down. The second count — how many of the numbers were round — is usually most of them. Those two numbers together are the argument for the whole unit, and they come from the room\'s own employers.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the page to the commercial manager, not to the owner, which is what Ms Huda said she would have done. He read it twice and said one thing I did not expect: "the May contract is a four, not a five." He has a reason he has not told anybody — they have asked for a meeting in October that they have never asked for before — and so the first thing my page did was get the number lowered by the man who wrote it. He also said he had never been asked what the eighteen was made of, in four years of writing it.']));

// ===================== 14.7 =====================
out.push(pb());
out.push(h2('14.7  Review & Mediate: How far to trust a forecast'));
out.push(S('Stage 1 · Unit 14 quiz – corrections'));
out.push(A('**1** It is **likely to** fall by a third. / It will **probably** fall.   **2** They **probably will not** answer.   **3** It may **be** the afternoon run.   **4** There is a chance **that it will happen**. / a chance **of its happening**.   **5** I will know **by** Friday.   **6** It **may** be the tubes. / It **is possible that** it is the tubes.'));
out.push(A('Items **1** and **2** are the two that survive into Unit 24 if they are not named here: ⚠ _will likely_ is American and is marked wrong in a Preliminary script, and ⚠ _will not probably_ is read as _definitely not_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** The assumption the committee will act on is **assumption 1, the second trolley** — nine out of ten that it matters and four out of ten that it stays, which is an equipment office with a lent trolley and the only line on the page that somebody could fix on Thursday. The number that will be quoted back wrongly is the **nil**: errors are forecast to stay at nil, and in four months there will be one, because there is always one.'));
out.push(NOTE('Jad\'s rule is the single most transferable thing in Unit 14 and it belongs on the board: **any forecast of _nothing_ should be written as a rate, because nobody can be right about nothing and somebody will test it against one.** _Fewer than one in ninety_ survives the month that _nil_ does not. Nour\'s observation is the other half: Rasha has put a nine out of ten in front of four people and asked for nothing, and _she has left them to pick it up_.'));
out.push(S('Language box – reading a forecast'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Five moves: find the **judgement number**; find the assumption with the **highest likelihood and the lowest control**; ask what is **not asked for**; find the number that will be **quoted back wrongly** (round, single, or a nothing); and read the **not-a-claim** sentence, which is what the rest of the page should be checked against.'));
out.push(A('The habit worth drilling is the second one. A reader can act on _nine out of ten that it matters, four out of ten that it stays_ in one letter; they cannot act on the argument the writer is making. Most forecasts bury their own actionable line in an assumption, because the writer is arguing for something else.'));
out.push(S('Stage 3 · Practise (sample – Forecast A, a printing works)'));
out.push(SAMPLE([
  'Two dates, twelve thousand booklets, eight out of ten. The eight is his own number and it is high, so he believes the arithmetic — and he has given two dates rather than one, which tells me he has been late before and has been made to feel it.',
  'What it stands on: paper by the seventh of October, four out of ten, and the last three deliveries were nine, sixteen and twenty-three days late. Proof approved in five working days, five out of ten, and last time it took eleven. Both machines, nine out of ten, serviced in August.',
  'The line I would act on is the **proof**. His paper is somebody else\'s lorry and nobody in my office can move it; the proof is signed by my own office and it took eleven days last time, which is six days of his schedule sitting on a desk belonging to us.',
  'What is not asked for: who signs the proof and in how many days. He has written that he will not know it by either date and he has not asked anybody to tell him, which means the one thing I could fix in five minutes is the one thing not requested.',
  'The number that will be quoted back wrongly is **November**. Somebody in my office will say "he said November", and the sentence says the twentieth of November **if** the paper comes by the seventh of October.',
  '**Our two decisions, in two minutes.** First: send him one line naming the proof-signer and the five working days, today, because it costs nothing and it is the only thing on the page that belongs to us. Second: we did not agree. I would ask him to confirm the paper date in writing when it arrives; my partner would leave it, because he says a man who has written two dates in a box has already told us everything he knows.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Collect the pairs\' two decisions. In almost every run the first decision is to **supply the thing the forecast did not ask for** — the proof-signer\'s name, the two weeks of times. That is the finding of the cycle: the most useful thing in a forecast is usually the request that is missing from it, and the person who can see that is always the reader and never the writer.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own carried forecast, explained without being shown. The three questions are the assessment: _how sure is the writer, in their own words?_, _which line could I act on this week?_, _what will you be blamed for in March?_ The third is the one that produces the best answers, because it makes the student read the document as the person whose name is on it.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Nour and Jad read Rasha\'s forecast as two people who were not in the meeting. The first thing Jad saw was the seven out of ten — the first number on the page with a judgement in it, and the one he believes, because nobody writes seven when they want you to say yes: if she had wanted the trial she would have written nine. What Nour saw was assumption one, and she would act on it before anything else: nine out of ten that the trolley matters and four out of ten that it stays is not a nursing question at all, it is an equipment office with a lent trolley, and it is the only line on the page somebody could fix on Thursday. If she were the committee she would write to the equipment office and ask for the trolley permanently, because it costs nothing and it is the one thing with a nine against it. Jad pointed out that Rasha has not asked for that anywhere on either page, and Nour said that is the only thing she would criticise: she has put a nine out of ten on the floor in front of them and left them to pick it up. Then the number that will be quoted back wrongly: the nil. Errors at nil is in the forecast as something she expects to stay at nil, and in four months somebody will say she said there would be no errors — and there will be one, because there is always one. Nour said she should have given it a range and you cannot give a range below zero, and Jad said she should have written it as a rate: nil in three months is nil out of about ninety nights, and the sentence that survives March is "fewer than one in ninety". His rule was that any forecast of nothing should be written as a rate, because nobody can be right about nothing. And the sentence Nour would have expected a senior person to take out of a committee paper is the one Rasha kept in — a thing nobody counted is not a thing anybody got wrong — which protects a woman who is not in the room and does not know it is there, and is the only sentence on the page that is about a person. So I decided to go back to my own page and turn my nil into a rate.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 2'));
out.push(A('**1** E   **2** A   **3** D   **4** B   **5** C   _(not needed: F, G, H)_'));
out.push(A('_Notes:_ each person has one need and one page answers it: **1** a single figure with no assumptions, so _ask for the arithmetic_; **2** a deadline that depends on somebody else\'s lorry, so _two dates and the condition between them_; **3** a stated standard everybody knows is wrong, so _the schedule nobody owns_; **4** a possibility repeated as a cause, so _say the number first_; **5** a forecast of nothing, so _never forecast nothing_. The three unused pages are all real techniques from this course — the itinerary, reporting verbs, the limits page — and none of them answers any of the five, which is how Part 2 is built: the distractors are plausible and wrong, not silly and wrong.'));
out.push(NOTE('Reading Part 2 is five people and eight short texts, and candidates lose marks by matching on a **shared word** rather than on the need. Two habits: underline the **need** in each person — not the topic, the need, which is usually in the last clause — and when two texts look possible, go back to the person and find the detail that only one of them covers. Teach them to do the people first and the texts second, which is the opposite of what most candidates do.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The report came out on the twelfth and the number in it is a fall in lateness to between a quarter and a half of nights, with errors staying at nil.',
  '**How sure the writer is, in her own words.** Seven out of ten — which tells you she is trying to be right rather than asking for something, because nobody writes seven when they want a yes.',
  '**What it rests on.** A second trolley on the ward (nine out of ten that it matters, four out of ten that it stays) · the blocks themselves (six out of ten, and she says she cannot separate them from the trolley) · the counting continuing, which depends on two nurses (seven out of ten).',
  '**The line you could act on this week** is the trolley, because it has a nine against it and it is not a nursing question at all: it is an equipment office with a lent trolley.',
  '**What is not asked for.** The trolley. She has put a nine out of ten in front of four people without a request attached to it, and the committee will have to see it for themselves.',
  '**The number that will be quoted back wrongly** is the nil, because there will be one error before March and the one error will become the whole conversation. It should have been written as a rate: fewer than one in ninety nights.',
  '**And what the page does not claim.** That the fourteen years before this one were anybody\'s fault — nobody counted, and a thing nobody counted is not a thing anybody got wrong.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2 (sample, 158 words)'));
out.push(A('Out of 15, at Book 2 length — **140 words or more**. The **article** must answer all three parts of the notice, and the third is the one that scores: whether the writer was wrong about the **event** or about the **reason**. The **story** must begin with the given sentence word for word; copy it out before planning.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 158 words)**',
  '**Right about the thing, wrong about why**',
  'In April I predicted that the committee would give me a three-night trial, and in June they did. I was right, and I was right for the wrong reason, and the difference has cost me four months of thinking I understood them.',
  'My reason was that the evidence was good: seven errors, every one on a fourth or fifth night, nine months of record. What actually happened, I think, is that a trial cost them nothing and a decision about the cause would have cost them an argument with whoever wrote the old rota. The chair said so in the meeting, in eleven words, and I wrote it down and did not understand it until September.',
  'So the event was right and the reason was wrong, and the reason is the part you plan with. Because I believed it was the evidence, I spent the summer making the evidence better. If I had believed what the chair actually said, I would have spent the summer finding out who wrote the old rota.',
  'If you keep predictions, write the reason underneath. In six months the reason is the thing you will have been wrong about.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 149 words)**',
  'Nobody writes seven out of ten when they want you to say yes.',
  'There were four of us round the table and the paper had been in front of us since the Friday. The man on my left had read it twice; I could see the pencil marks.',
  'He said that the seven was the only number on the page he trusted, and that if she had wanted the trial she would have written nine, and that the nine she **had** written was about a trolley belonging to another office.',
  'Then he said the thing that decided it: that she had put a nine out of ten in front of us and had not asked us for anything at all.',
  'So we wrote the letter ourselves, for a trolley nobody had requested, and the trial went on. Afterwards I asked her why she had not asked, and she looked at me for a moment and said that she had not thought it was hers to ask for.',
]));
out.push(S('Unit 14 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** b   **4** c   **5** b   **6** b   **7** b   **8** a'));
out.push(A('_Notes:_ **1** _likely to_ + verb. **2** the adverb jumps in front of the negative. **3** one of three things, so a hedge — not _must_ (9.1) and not _cannot_ (9.2). **4** _a chance **that**_. **5** a deadline, so _by_. **6** the waiting goes on, so _until_. **7** _clearly_ is what you can see; _definitely_ would need a test. **8** _in two weeks\' time_.'));
out.push(S('Unit 14 check  ·  B  Listening (Part 2, matching) – Track 14.15'));
out.push(A('**1** E   **2** F   **3** C   **4** D   **5** H   ·   Not needed: **A**, **B**, **G**'));
out.push(A('Speakers **1** and **5** are the pair to replay. Speaker 1 is about assumptions existing only in one person\'s head, not about the number having no range (**A**) — he never mentions a range. Speaker 5 is the inversion the part always contains: everything she says is correct and acted on by nobody, which is **H**, and candidates choose **B** because she mentions another office.'));
out.push(NOTE('Listening Part 2 at B1 is five speakers and eight options, and the three unused options are built out of the speakers\' own vocabulary. Two habits: read all eight options in the pause and mark the **two words** that make each one different from its neighbours; and when a speaker seems to fit two options, choose the one that matches **what they say went wrong**, not what they talk about. Part 2 always contains one option that inverts a speaker.'));
out.push(S('Unit 14 check  ·  C  Writing (sample, 163 words)'));
out.push(SAMPLE([
  '**COUNTER 2 · REPAIRS OF THE NX-220, OCTOBER TO MARCH** · a forecast and not a target · M. Hariri',
  '**The number, with a range.** Between **ten and twenty** more of the same model back at this counter with the same fault by the end of March. My own figure is **twelve to fifteen**.',
  '**Assumption 1 — the batch is still in the shops.** Fifteen came back in seven months from units sold January to March; the two shops were still selling that model in August. **Seven out of ten.**',
  '**Assumption 2 — people pay for a repair now that the guarantee has run out.** The March units left guarantee in September, and of the four customers I have asked, three said they would pay. **Five out of ten, and it is three people, not a count.**',
  '**Assumption 3 — I am still the counter they come back to.** Two of the fifteen were second repairs. **Eight out of ten.**',
  '**The alternative numbers.** If the shops stopped selling that model in the spring: **six to eight**. If Al-Nahla replaces units free: fewer than five, and I would not see them at all.',
  '**What is not an assumption.** My own repair. I re-bond with the factory adhesive and clamp for twenty minutes, and the two second repairs are in the figures above, not excluded from them.',
  '**Judged by.** The fault book, by model and fault, for October to March against the same months last year — and the book is open to anybody who asks.',
]));
out.push(S('I can… (Unit 14)'));
out.push(A('Self-assessment; no answers. The three that matter are the sixth, the seventh and the eighth: writing a forecast with its assumptions under it, telling a forecast from a target, and finding the number in somebody else\'s forecast that will be quoted back wrongly. A class that ticks the first five and not those three has learnt the modal verbs and missed the unit.'));
out.push(box('Looking ahead to Unit 15', [
  'Unit 14 was about what has not happened yet. **Unit 15** is about what did not happen and could have: _should have done · would have happened · if I had known · I wish · if only_ — the third conditional, the mixed conditional lightly, and the apology that names the thing.',
  '**15.4 and 15.6 are the two hardest writing tasks in Book 2.** The apology that names the thing, and the honest report of something that went wrong written by the person it went wrong for. Both are built on the third conditional and both are ruined by it in a first draft, because a page of _I would have_ is a page of excuses. The cure is in the cycle: the third conditional belongs in the paragraph about **what you now know**, and not in the paragraph about what happened.',
  '**Two threads land in Unit 15.** Sister Nasr\'s fourteen years are read in **15.2** as the one thing in the book that a third conditional can be used honestly about — _if somebody had counted, she would have known_ — and **15.4** is Bassel\'s written apology to the three men for the rule he invented in May, which he has already made verbally in 11.7 and which 15.4 asks him to put on paper.',
  '**The Unit 14 NEXT box asks for one thing** the student would do differently, with the date it happened — one event, one day, not a career. A class that brings regrets about decades has an hour of generalities; a class that brings one Tuesday has the best lesson in the book.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 14 · Answer Key');
