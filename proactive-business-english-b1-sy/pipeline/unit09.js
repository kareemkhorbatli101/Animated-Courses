// Proactive Business English B1 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'deduction · inference from damage · consistent with · inconsistent with · a working theory · the likeliest explanation · to rule out · to rule in · diagnostic · symptom · a batch fault · one-off defect · systematic error · random error · margin of error · plus or minus · order of magnitude · ballpark · firm figure · provisional figure · subject to revision · confidence · degree of certainty · definitely · probably · possibly · conceivably · unverified · pending inspection · on inspection';
const BACK_AT_B1 = 'total · piece · minimum';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 9  Deduction, Doubt and the Honest Estimate'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  read damage and say what can only have caused it',
  '**9.2**  offer a possible cause without committing to it',
  '**9.3**  rule something out, and say what rules it out',
  '**9.4**  do the one-minute check before you telephone anybody',
  '**9.5**  use *definitely*, *probably* and *possibly* — and know what each costs',
  '**9.6**  describe what is in front of you so that somebody else can see it',
  '**9.7**  Review & Mediate: what do you think happened to this pallet?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The unit in one sentence: say how sure you are, and be right about how sure you are', [
  'Unit 7 taught you to separate what you saw from what you inferred. This unit is about **the inference itself** — how strong it is, what would overturn it, and how to say so in a document that somebody will act on.',
  '⚠ **The two cycles that matter most are 9.4 and 9.5**, and neither is grammar. **9.4** is a habit: one minute of looking before you telephone anybody, which turns out to answer about half of all questions and is almost never done. **9.5** is the cost of a word: *definitely* is cheap to write and expensive to be wrong about, and the whole cycle is a table of what each of the three words costs when it fails.',
  '**And one piece of plain advice for the whole unit.** The most useful sentence in a diagnosis is not a conclusion. It is ⚠ **_what would change my mind is…_** — and a learner who leaves this unit able to write that sentence has gained more than the grammar.',
], C.lyellow, C.orange));

// ======================= CYCLE 9.1 =======================
out.push(pb());
out.push(h2('9.1  It can only have been a forklift'));
out.push(p('**Function:** reading physical evidence   ·   **Grammar:** *must have been · can only have been*   ·   **Pronunciation:** _must\'ve_ and _can only\'ve_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of damage you have seen at your work. What could you tell from looking at it?'));
out.push(p('**b**  Which is a deduction and which is a guess? _Somebody must have dropped it. · It must have been lifted from one side, because the base is split and the top is not._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about the damaged pallet?   **A** a customer damaged it   **B** it was lifted wrongly, and he can say so from the marks   **C** he does not know'));
out.push(p('**b**  Listen again. **1** What two things does he point at? **2** What does he refuse to say, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  "You can see it from the marks"', [
  ['Nour', 'The pallet that came back from Mr Haffar. What happened to it?'],
  ['Abu Yasser', 'It was lifted from one side. You can see it from two things. The base boards are split across the middle and the top ones are not, so the weight was all on the centre. And there are two tine marks about forty centimetres apart on the underside, and ours are ninety.'],
  ['Nour', 'So it must have been a forklift with narrow tines.'],
  ['Abu Yasser', 'It can only have been a forklift with narrow tines, which is a stronger thing to say and is also true. A pallet truck would not split the base like that and a hand truck leaves no tine marks at all.'],
  ['Nour', 'And whose forklift?'],
  ['Abu Yasser', 'That I do not know and I am not going to guess. Narrow tines are common. ⚠ Half the yards in Mezzeh have a small forklift and so does the market.'],
  ['Nour', 'It was on our lorry for two hours.'],
  ['Abu Yasser', 'It was, and nobody lifted it on the lorry, and if you want to say so in writing the reason is that it was strapped and the straps were still on when it came back. **That is worth more than my opinion about forklifts.**'],
  ['Nour', 'So: lifted by a narrow-tine forklift, not on our vehicle, and we cannot say by whom.'],
  ['Abu Yasser', 'And one more thing, which is the useful one. ⚠ **It was lifted after it was wrapped**, because the wrap is torn at the tine marks and not anywhere else. So it was not damaged in our warehouse before loading.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Deduction from evidence — and the limit of it**',
  table(['Form', 'Strength', 'Example'], [
    ['**must have been** + past participle', 'the likeliest by far', 'It **must have been** lifted from one side.'],
    ['⚠ **can only have been**', 'nothing else fits', 'It **can only have been** a narrow-tine forklift.'],
    ['**is consistent with**', 'fits, but other things fit too', 'The split **is consistent with** a centre lift.'],
    ['**because** + the mark', '⚠ always attached', '…**because** the base is split and the top is not.'],
    ['⚠ **that I do not know**', 'the edge of the deduction', 'Whose forklift I do not know and will not guess.'],
  ], [2.1, 1.3, 2.3]),
  '⚠ **Every deduction carries the mark it rests on.** *It must have been lifted from one side* is an opinion; *…because the base boards are split across the middle and the top ones are not* is a deduction, and a reader can check it.',
  '⚠ **_Can only have been_ is stronger than _must have been_** and should be used when you can say what else has been excluded: *a pallet truck would not split the base and a hand truck leaves no tine marks*.',
  '⚠ **Stop where the evidence stops.** *Whose forklift I do not know and I am not going to guess.* The deduction about the **machine** is strong and the inference about the **person** is worthless, and they are one sentence apart.',
  '⚠ **Look for the fact that settles the sequence.** *It was lifted after it was wrapped, because the wrap is torn at the tine marks and not anywhere else.* ⚠ A detail that fixes the **order** of events is worth more than three that describe them.',
  '⚠ **_Must have been_**, not ~~must be~~, for the past. And ~~must have been happened~~ is the error to drop.',
  '**Practise:** Make the deduction and name the mark it rests on. 1 a split pallet 2 a dented carton 3 a torn wrap 4 a wet box 5 a bent shelf',
  '**Useful phrases:**  It must have been…  ·  It can only have been…, because…  ·  That is consistent with…  ·  Whose, I do not know.  ·  It happened after…, because…',
  '**Pronunciation – _must\'ve_ and _can only\'ve_.** 🔊 **Track 9.2** Listen: _it **must\'ve** been lifted // it can **only\'ve** been a forklift_. The *have* almost disappears and the participle carries the stress. ⚠ Learners often write *must of* because of this; the sound is right and the spelling is not. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks what happened; B deduces from marks and stops where the evidence stops. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. What happened to it?'],
  ['B', 'It was __________. You can see it from two things. __________, so __________. And __________.'],
  ['A', 'So it must have been __________.'],
  ['B', 'It can only have been __________, because __________ would not __________ and __________ leaves __________.'],
  ['A', 'And who?'],
  ['B', 'That I do not know and I am not going to guess.'],
  ['A', 'It was __________ for __________.'],
  ['B', '⚠ And the useful one: it happened after __________, because __________.'],
]));
out.push(table(['Role card 1 — a wet carton', 'Role card 2 — a bent shelf'], [[
  'Damp on three sides and not the base; the top is marked and the base is dry. Deduction: it was rained on from above, not stood in water — so it was outside, not in a flooded store. Whose yard, unknown. The sequence fact: the label is unmarked, so it was labelled after it dried.',
  'A shelf bowed in the centre and not at the ends. Deduction: it carried a point load in the middle, not an even one — so not overloading, but something heavy put down in one place. Who, unknown. The sequence fact: the paint is scraped in a line, so the thing was dragged on, not lifted on.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the deduction for the class – **without the book**.'));
out.push(p('**Listener task:** write the deduction, the two marks, and the sentence where the speaker stops. ⚠ Then write the sequence fact — the detail that fixes the order of events.'));
out.push(PHRASE_CARD(['It must have been…', 'It can only have been…', 'because the base is split…', 'consistent with…', 'Whose, I do not know.', 'it happened after…, because…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** pieces of damage you have seen. For each: the deduction, the marks, where you stop, and any sequence fact.'));
out.push(table(['What was damaged', 'The deduction', 'The marks it rests on', 'Where I stop'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.4, 1.9, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It can only have been _______, because _______ and _______. Who or whose, I do not know._'));
out.push(p('**Listener task:** count the deductions that stopped at the machine and the ones that went on to a person. ⚠ Then ask which of the second kind could be shown.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it must of been lifted_ and _it must have been happened in the yard_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the inspection note, and answer the questions.'));
out.push(box(null, [
  '**PALLET RETURNED FROM MR HAFFAR — inspection. 24 November, 9.10, in the yard, before anything was moved.**',
  '**What is on it.** Two base boards split across the centre, top boards sound. Two tine marks on the underside, 40 cm apart (ours are 90). The stretch wrap is torn at both tine marks and nowhere else. The straps are still fitted and both are intact. Forty-six cartons of forty-eight are sound; two are crushed on the lower corner on the side where the base is split.',
  '**What that means.** The pallet **can only have been** lifted by a narrow-tine machine from one side, which split the base under a centre load. It **must have been** lifted **after** wrapping, because the wrap is torn at the tines and nowhere else. And it was **not** lifted while on our vehicle, because the straps were fitted when it came back and both are intact.',
  '**What it does not mean.** ⚠ **We cannot say whose machine it was.** Narrow-tine forklifts are common; there is one in the market and at least two in the yards on that street. The damage tells us the **kind** of machine and nothing about the owner, and I am not going to narrow it by elimination because I have not been to look at anybody\'s forklift.',
  '⚠ **What would change this.** If Mr Haffar tells us the pallet was unloaded by hand, then either he is mistaken or somebody lifted it afterwards, and the second is more likely than the first — in which case the damage happened on his premises after delivery and the two crushed cartons are still ours to credit, because we do not sell him a pallet, we sell him cartons.',
  '**And the figure, which is small.** Two cartons at 23,000 is 46,000. I am raising the credit today without waiting for any of the above, because ⚠ **the credit is not in dispute and only the cause is**, and holding a 46,000 credit for a week to establish a cause nobody can establish is not a defensible use of anybody\'s time.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What three things does the writer deduce, and what mark supports each?'));
out.push(item('2', 'What does the writer refuse to narrow by elimination, and why?'));
out.push(item('3', 'Why is the credit being raised before the cause is settled?'));
out.push(box('Writer\'s box', [
  '**An inspection note — six parts:** when and where you looked, **before anything was moved** → **what is on it** (measurements, counts, no conclusions) → **what that means** → ⚠ **what it does not mean** → ⚠ **what would change this** → the figure, and what you are doing now.',
  '**Separate what is on it from what it means, completely.** The first paragraph has no deductions in it and the second has no new observations. A reader can then disagree with your reasoning while accepting your facts.',
  '**Give measurements, not adjectives.** *Two tine marks 40 cm apart (ours are 90)* does the work that *narrow tine marks* cannot.',
  '⚠ **Write _what it does not mean_ as its own paragraph.** *The damage tells us the kind of machine and nothing about the owner.* Without it, every reader will complete the inference themselves and attribute the completion to you.',
  '⚠ **Add _what would change this_.** *If Mr Haffar tells us it was unloaded by hand, then…* ⚠ A diagnosis with its own overturning condition stated is the strongest form there is, and almost nobody writes it.',
  '⚠ **Settle the small money now.** *The credit is not in dispute and only the cause is.* Holding a small credit to establish a cause is a common and indefensible habit, and saying so is part of the note.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an inspection note for something damaged at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — inspection. ______________, ______________, before anything was moved.**   **What is on it.** ______________. ______________ measuring ______________. ______________ of ______________ are sound.   **What that means.** It **can only have been** ______________, because ______________. It **must have been** ______________ **after** ______________, because ______________.   ⚠ **What it does not mean.** We cannot say ______________. ______________ tells us ______________ and nothing about ______________.   ⚠ **What would change this.** If ______________, then ______________.   **And the figure.** ______________. I am ______________ today, because the ______________ is not in dispute and only ______________ is.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says add *what would change this*. Yours has no overturning condition — what would you have to be told to abandon the deduction?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the first paragraph contain any conclusion?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['When and where, before anything was moved', ''],
  ['Observations and deductions in separate paragraphs', ''],
  ['Measurements rather than adjectives', ''],
  ['*What it does not mean* and *what would change this*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what would change this*. The class says which deduction is the easiest to overturn — and that is the one to trust most, because the writer has told you how.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about damage at your work where everybody assumed they knew who was responsible (**100 to 140 words**). Say what the marks actually showed, what was assumed, and whether anybody ever checked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the marks actually showed_   ✓ _must have been / can only have been, with the mark attached?_   ? _who made the assumption, and what was it based on?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the assumption based on who had been near it? ⚠ Nearly all — proximity is the evidence people actually use, and it is not evidence at all.'));
out.push(box('Homework', ['Write your final text. Then look at one damaged thing at your work, write the two marks it rests on and where your deduction stops (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.2 =======================
out.push(pb());
out.push(h2('9.2  A batch fault, or one bad pallet'));
out.push(p('**Function:** offering a possible cause   ·   **Grammar:** *might be · may have been · it is possible that*   ·   **Pronunciation:** the hedge that is heard as precision'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Something has gone wrong twice. How would you find out whether it is one fault or a pattern?'));
out.push(p('**b**  Which is more useful to a supplier? _Your wrap is faulty. · It may be a batch fault; we have two rolls from the same batch number and one from another, and the other is fine._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour tell Ms Shamsi?   **A** that the wrap is faulty   **B** that it may be a batch fault and what she has checked   **C** that she wants a refund'));
out.push(p('**b**  Listen again. **1** What has Nour already checked before telephoning? **2** What does Ms Shamsi say about the way the call was made?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  "It may be the batch"', [
  ['Nour', 'Two rolls of wrap have torn at the core. It may be a batch fault and I am not saying it is.'],
  ['Ms Shamsi', 'What have you looked at?'],
  ['Nour', 'Four rolls. The two that tore are batch 8814 and the two that are fine are 8790 and 8803. So it is **possible** that 8814 is bad and it is also possible that two rolls out of a hundred tore for no reason.'],
  ['Ms Shamsi', 'How many of 8814 have you got?'],
  ['Nour', 'Nine. Seven unopened.'],
  ['Ms Shamsi', 'Then open one and pull it by hand at the core. If it tears, it is the batch. If it does not, use the seven and tell me if another goes.'],
  ['Nour', 'And if it is the batch?'],
  ['Ms Shamsi', 'Then I have about four hundred rolls of it and you have told me on a Tuesday rather than in January. ⚠ I would rather have this telephone call than a polite one in six weeks.'],
  ['Nour', 'I nearly did not make it. Two rolls out of a hundred is not much.'],
  ['Ms Shamsi', 'Two rolls is nothing. **A batch number is everything.** ⚠ You did not telephone me about two rolls; you telephoned me about a number that appears on four hundred rolls, and the difference between those two calls is the only reason this one is useful.'],
  ['Nour', 'I will open one this afternoon and tell you either way.'],
  ['Ms Shamsi', 'Either way. ⚠ **Most people only come back when it is bad news, so a no is worth as much to me as a yes.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Offering a possible cause — and the test that would settle it**',
  table(['Form', 'Example'], [
    ['**It may be / might be** + noun', '**It may be** a batch fault.'],
    ['**may have been** + participle', 'The roll **may have been** damaged in transit.'],
    ['**It is possible that…**, **and it is also possible that…**', '⚠ **both** possibilities, stated'],
    ['**and I am not saying it is**', 'the disclaimer that earns the hedge'],
    ['⚠ **the test**', 'Open one and pull it at the core.'],
  ], [2.4, 3]),
  '⚠ **State both possibilities.** *It is possible that 8814 is bad and it is also possible that two rolls out of a hundred tore for no reason.* Offering one possibility is an accusation with a hedge on it; offering two is a question.',
  '⚠ **Bring the number, not the quantity.** *Two rolls is nothing. A batch number is everything.* ⚠ Two faulty items is a complaint; a batch number that appears on four hundred items is information the other side urgently wants.',
  '⚠ **Name the test that would settle it, and offer to do it.** *Open one and pull it at the core.* A possible cause with a one-afternoon test attached gets resolved; one without becomes a dispute.',
  '⚠ **Report back either way.** *Most people only come back when it is bad news, so a no is worth as much to me as a yes.* ⚠ The call that says *I checked and it was fine* is the one that makes the next call believed.',
  '⚠ *May* and *might* are interchangeable here. **Do not use *must*** for a possibility — it claims the deduction of 9.1 without the marks.',
  '**Practise:** Offer the possible cause, both possibilities and the test. 1 two torn rolls 2 three short deliveries from one haulier 3 two customers\' invoices wrong in the same week 4 a machine that stops on hot days 5 a supplier late twice running',
  '**Useful phrases:**  It may be…, and I am not saying it is.  ·  It is possible that…, and it is also possible that…  ·  The test would be…  ·  I will tell you either way.',
  '**Pronunciation – the hedge heard as precision.** 🔊 **Track 9.4** Listen: _it **may** be a batch fault // and I am **not** saying it is_. ⚠ Both the hedge and the disclaimer carry a stress. A mumbled *may* sounds evasive; a stressed one sounds careful. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a possible fault with both possibilities; B asks what has been checked and names the test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. It may be __________ and I am not saying it is.'],
  ['B', 'What have you looked at?'],
  ['A', '__________. The __________ that __________ are __________ and the __________ that are fine are __________. So it is possible that __________ and it is also possible that __________.'],
  ['B', 'How many of __________ have you got?'],
  ['A', '__________.'],
  ['B', 'Then __________. If __________, it is __________. If not, __________.'],
  ['A', 'And if it is?'],
  ['B', 'Then __________. ⚠ I would rather have this call than a polite one in six weeks.'],
]));
out.push(table(['Role card 1 — three short deliveries', 'Role card 2 — the hot-day machine'], [[
  'Three short deliveries in a month, all from one haulier and all on the Aleppo route. Possible: the haulier. Also possible: the Aleppo loading dock, which is shared and where loads stand. The test: send one load with a sealed count sheet and have it opened at the gate.',
  'The small press stops about once a week and always in the afternoon. Possible: heat. Also possible: the afternoon is when the long runs happen. The test: run a long job in the morning for a week. ⚠ Nobody has done it because the press is "known" to be heat-sensitive.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write both possibilities and the test. ⚠ Then say which possibility the speaker would rather be true, and whether it showed.'));
out.push(PHRASE_CARD(['It may be…, and I am not saying it is.', 'It is possible that… and also that…', 'The test would be…', 'I will tell you either way.', 'two rolls is nothing', 'a batch number is everything']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things that have gone wrong more than once. For each: two possibilities and the test that would settle it.'));
out.push(table(['What happened, twice or more', 'Possibility A', 'Possibility B', 'The test'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It may be _______, and it is also possible that _______. The test is _______, and it takes _______._'));
out.push(p('**Listener task:** count the tests that would take less than an hour. ⚠ Most of them — and count how many have been done.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it must be a batch fault_ where there is no evidence and _it may to be the batch_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To Ms Dima Shamsi, Aleppo. 25 November. Two torn rolls — and the result of the test.**',
  'Dear Ms Shamsi,',
  '**What I telephoned about.** Two rolls torn at the core, both batch 8814; two rolls from 8790 and 8803 sound. I said it **might** be a batch fault and that I was not saying it was.',
  '**The test, and the result.** I opened one unused roll of 8814 and pulled it at the core as you suggested. **It did not tear.** I then opened a second, because one was not much, and that did not tear either.',
  '**So what I now think, and how sure I am.** ⚠ **Probably not a batch fault.** Two rolls out of nine from 8814 have failed and two others from the same batch have passed a deliberate test; that is more consistent with two bad rolls than with four hundred. I would put it no higher than *probably* because I have tested two of seven and not seven of seven.',
  '**One thing that has changed my mind about something else.** Both torn rolls were on the top of the stack by the yard door. Both sound ones were in the middle. ⚠ **It may be us** — sunlight on the top of that stack from about two o\'clock, which I had not thought of until I was looking for a pattern that was not the batch. I have moved the stack and I will know in a month.',
  '**And what I am not asking for.** Nothing. No credit and no replacement: two rolls is 76,000 and I am not going to send you a claim for 76,000 and a theory about your batch numbers in the same letter. ⚠ **If the sunlight explains it, the 76,000 was ours.**',
  'Yours sincerely, **Nour Mansour**, Administration Coordinator',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was the test, and what did it show?'));
out.push(item('2', 'Why does the writer say *probably* rather than *certainly* not a batch fault?'));
out.push(item('3', 'What new possibility emerged, and how?'));
out.push(box('Writer\'s box', [
  '**A letter reporting back on a possible cause — six parts:** what you reported → **the test and the result** → ⚠ **what you now think, and how sure** → ⚠ **what has changed your mind about something else** → what you are not asking for.',
  '**Report a negative result in the same tone as a positive one.** *It did not tear. I then opened a second, because one was not much.* ⚠ Reporting back when the answer is *nothing* is what makes the next report credible.',
  '**Say why your confidence stops where it does.** *I would put it no higher than probably because I have tested two of seven and not seven of seven.* The arithmetic of the confidence, in one clause.',
  '⚠ **Report the possibility that it is you.** *It may be us — sunlight on the top of that stack.* ⚠ And say how you found it: *I had not thought of it until I was looking for a pattern that was not the batch.* Looking for one explanation is how the other one gets found.',
  '⚠ **Do not mix a claim and a theory in one letter.** *I am not going to send you a claim for 76,000 and a theory about your batch numbers in the same letter.* Either would weaken the other.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter reporting back on a possible cause (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________.**   **What I reported.** ______________. I said it might be ______________ and that I was not saying it was.   **The test, and the result.** I ______________. **It ______________.** I then ______________, because ______________.   **What I now think, and how sure.** ⚠ **Probably ______________.** ______________ is more consistent with ______________ than with ______________. I would put it no higher than *probably* because ______________.   ⚠ **One thing that has changed my mind about something else.** ______________. **It may be us** — ______________, which I had not thought of until ______________.   **And what I am not asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say why your confidence stops where it does. Yours says *probably* — what is the arithmetic behind it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **has the writer looked for the explanation that is their own fault?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The test and its result, reported either way', ''],
  ['How sure, with the arithmetic of the confidence', ''],
  ['The possibility that it is us', ''],
  ['A claim and a theory kept out of the same letter', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *it may be us*. The class says which was found by looking for something else — it usually is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fault at your work that was blamed on a supplier and was not theirs (**100 to 140 words**). Say what was assumed, what it turned out to be, and how long it took to find.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what it turned out to be_   ✓ _may / might used for possibility, not must?_   ? _was the supplier ever told it was not them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the supplier told afterwards? ⚠ Usually none — which is the cost nobody counts, because the supplier remembers being blamed and not being cleared.'));
out.push(box('Homework', ['Write your final text. Then take one recurring fault, write both possibilities and do the test if it takes under an hour (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.3 =======================
out.push(pb());
out.push(h2('9.3  That cannot be the total'));
out.push(p('**Function:** ruling something out   ·   **Grammar:** *can\'t be · couldn\'t have been · that would mean*   ·   **Pronunciation:** the stress that makes a challenge polite'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a figure you have seen that was obviously wrong. How did you know?'));
out.push(p('**b**  Which is the useful objection? _That figure looks wrong. · That cannot be the total, because it is less than the two items I can see on the front page._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the figure?   **A** it is too high   **B** it is smaller than two of its own components   **C** it is in the wrong currency'));
out.push(p('**b**  Listen again. **1** What does Nadia say about the way Nour phrased the objection? **2** What turns out to be the cause?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  "That cannot be the total"', [
  ['Nour', 'Nadia — that cannot be the total on the Shamsi statement.'],
  ['Nadia', 'Why not?'],
  ['Nour', 'Because it is 1.4 million and there are two invoices on the front page at 900,000 and 700,000. The total cannot be less than the sum of two of its own lines.'],
  ['Nadia', 'No, it cannot. Good.'],
  ['Nour', 'I nearly wrote *the total looks wrong*.'],
  ['Nadia', 'Which I would have checked and found to be right, because it is right — the arithmetic on this statement is correct. ⚠ What is wrong is that one of those two invoices is not ours; it is 700,000 for a customer called Mansour, and I have been looking at my own surname on somebody else\'s invoice for about four minutes without seeing it.'],
  ['Nour', 'So the total is right and the statement is wrong.'],
  ['Nadia', 'The total is right and the statement contains an invoice that belongs to somebody else. ⚠ Which I would not have found from *the total looks wrong*, because I would have added it up, found it correct and stopped.'],
  ['Nour', 'The objection found a different thing from the one I thought I was objecting to.'],
  ['Nadia', 'It usually does. ⚠ **A specific objection gets investigated and a vague one gets checked** — and checking means adding it up again, which confirms whatever the document already says.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Ruling something out**',
  table(['Form', 'Example'], [
    ['**That can\'t be** + noun', '**That cannot be** the total.'],
    ['⚠ **because** + what makes it impossible', '…**because** it is less than two of its own lines.'],
    ['**couldn\'t have been** + participle', 'It **couldn\'t have been** signed on the 14th; he was in Aleppo.'],
    ['**That would mean…**', '**That would mean** we delivered before we loaded.'],
    ['⚠ what to drop', '*that looks wrong* · *I am not sure about that figure*'],
  ], [2.2, 3.1]),
  '⚠ **Name what makes it impossible, not that it looks wrong.** *The total cannot be less than the sum of two of its own lines* is a fact about arithmetic. *That looks wrong* is a feeling, and it will be **checked** rather than investigated.',
  '⚠ **Checking confirms the document.** Somebody asked to check a total will add it up, find it correct and stop — so a vague objection reliably produces a false clearance. ⚠ **A specific objection gets investigated; a vague one gets checked.**',
  '⚠ **Expect the objection to find a different thing from the one you aimed at.** Here the arithmetic was right and an invoice belonged to another customer. That is the normal outcome and it is the argument for being specific.',
  '⚠ **_That would mean…_** is the gentlest form of all: *that would mean we delivered before we loaded* lets the other person reach the impossibility themselves.',
  '⚠ *Cannot* for present impossibility; *couldn\'t have* for the past. ~~It must not be the total~~ means something else entirely.',
  '**Practise:** Rule each out and say what makes it impossible. 1 a total less than its parts 2 a signature dated when the signer was away 3 a delivery note timed before the load 4 a stock figure higher than the space 5 a payment before the invoice',
  '**Useful phrases:**  That cannot be…, because…  ·  It couldn\'t have been…  ·  That would mean…  ·  which is not possible  ·  not *that looks wrong*',
  '**Pronunciation – a challenge made polite by stress.** 🔊 **Track 9.6** Listen: _that **cannot** be the total // because it is **less** than two of its own lines_. ⚠ The stress goes on the logic and not on *that*; a stressed *that* sounds like an accusation about the person who wrote it. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A objects specifically; B investigates and finds something else. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'That cannot be __________.'],
  ['B', 'Why not?'],
  ['A', 'Because __________. __________ cannot be __________.'],
  ['B', 'No, it cannot. Good.'],
  ['A', 'I nearly wrote *__________ looks wrong*.'],
  ['B', 'Which I would have checked and found to be right. ⚠ What is actually wrong is __________.'],
  ['A', 'So the objection found a different thing from the one I was making.'],
  ['B', 'It usually does. ⚠ A specific objection gets investigated and a vague one gets checked.'],
]));
out.push(table(['Role card 1 — the delivery note', 'Role card 2 — the stock figure'], [[
  'A note timed 7.20 for a load the gate sheet shows leaving at 10.30. A objects: it cannot have been delivered before it left. What B finds: the note is pre-printed with the scheduled time, as every note has been for two years, so no delivery note in the building records an actual time.',
  'A stock figure of 1,400 cartons in a room that holds about 900. A objects: it cannot be in that room. What B finds: 500 of them are in the yard container and have been counted in the room figure since June, so the room and the container have never been separable.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the objection, what made it impossible, and what was actually found. ⚠ The third is never the second.'));
out.push(PHRASE_CARD(['That cannot be…, because…', 'It couldn\'t have been…', 'That would mean…', 'which is not possible', 'not "that looks wrong"', 'specific gets investigated']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** figures or documents you doubt. For each: what you can rule out, and what makes it impossible.'));
out.push(table(['The figure or document', 'What cannot be true', 'What makes it impossible'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.6, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _That cannot be _______, because _______. Which is not possible, so either _______ or _______._'));
out.push(p('**Listener task:** count how many of the room\'s objections would have been phrased as *that looks wrong*. ⚠ Then say what checking would have produced in each case.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it must not be the total_ and _it cannot have been sign on the 14th_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the query, and answer the questions.'));
out.push(box(null, [
  '**STATEMENT QUERY — Shamsi account, November. To Nadia Sayegh. 26 November.**',
  '**What cannot be true.** The closing balance is 1,430,000. The front page lists invoice 2214 at 900,000 and invoice 2219 at 700,000. **A closing balance cannot be less than the sum of two of its own invoices unless something has been credited, and no credit appears.** That is arithmetic and not an opinion.',
  '**Three things that would each explain it, and the one that is true.** It could be that a credit is missing from the page; it could be that one of the two invoices is not ours; or it could be that the balance is brought forward from a different date. ⚠ **It is the second.** Invoice 2219 is addressed to *Mansour Hardware, Jaramana* and we are *Sham Trading*; the invoice is for 700,000 of something we do not buy.',
  '⚠ **What this is not.** It is not an arithmetic error — the statement adds up correctly on its own figures, and that is why nobody has found it in two months. **Anybody asked to check this statement would have added it up, found it right, and said so.** The error is a line that belongs to somebody else, and adding up cannot find that.',
  '**What I have not done.** I have not telephoned Ms Shamsi and I have not deducted the 700,000 from anything. ⚠ **This may be a straightforward mis-filing and it may be that Mansour Hardware has had two months of statements with our invoices on them**, and the second possibility is hers to look at and not ours.',
  '⚠ **And one thing about us, not about her.** We have paid this statement twice: in October at 2,100,000 and in September at 1,800,000, both against the total on the page. If an invoice that is not ours has been on this account since September, **we may have paid 700,000 of somebody else\'s invoices and I do not yet know whether we have.** That is today\'s work and it is ours.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What makes the closing balance impossible, and why is it not an arithmetic error?'));
out.push(item('2', 'What would anybody asked to "check" this statement have done?'));
out.push(item('3', 'What does the last paragraph say the writer does not yet know?'));
out.push(box('Writer\'s box', [
  '**A query that rules something out — five parts:** ⚠ **what cannot be true, with the arithmetic** → the possible explanations and **which is true** → ⚠ **what this is not** → what you have not done → ⚠ **the part that is about you.**',
  '**Say *that is arithmetic and not an opinion*.** It is the sentence that stops the query being filed with the opinions.',
  '⚠ **Say what the error is not.** *It is not an arithmetic error — the statement adds up correctly, and that is why nobody has found it in two months.* ⚠ Then say what checking would have produced: *anybody asked to check this would have added it up, found it right, and said so.* That is the cycle\'s whole argument, in a real document.',
  '**List what you have not done.** *I have not telephoned her and I have not deducted anything.* It keeps the next step with the person who should take it.',
  '⚠ **End with the part that is about you.** *We may have paid 700,000 of somebody else\'s invoices and I do not yet know whether we have.* A query that only examines the other party is half a query, and the half about you is nearly always the expensive half.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a query that rules something out (**50 words or more**). Use the frame.'));
out.push(p('**______________ QUERY — ______________.**   **What cannot be true.** ______________. **______________ cannot be ______________ unless ______________, and ______________.** That is arithmetic and not an opinion.   **Three things that would explain it, and the one that is true.** It could be ______________; it could be ______________; or it could be ______________. ⚠ **It is the ______________.** ______________.   ⚠ **What this is not.** It is not ______________. Anybody asked to check this would have ______________, found it ______________, and said so.   **What I have not done.** ______________.   ⚠ **And one thing about us.** ______________. I do not yet know ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says end with the part that is about you. Yours examines only the other party — what might this have cost us while nobody noticed?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would adding it up again have found this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What cannot be true, with the arithmetic stated', ''],
  ['The explanations, and which is true', ''],
  ['*What this is not*, and what checking would have produced', ''],
  ['The part that is about us', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last paragraph. The class says which writer has found something expensive about their own side.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work that has been checked repeatedly and is wrong (**100 to 140 words**). Say what is wrong with it, why checking does not find it, and who would have to look differently.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _why checking does not find it_   ✓ _cannot be / couldn\'t have been used correctly?_   ? _who would have to look differently, and at what?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the document internally consistent and still wrong? ⚠ All of them, usually — because a document that contradicted itself would have been found years ago.'));
out.push(box('Homework', ['Write your final text. Then take one figure you doubt and write what cannot be true about it, with the arithmetic (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.4 =======================
out.push(pb());
out.push(h2('9.4  The one-minute check'));
out.push(p('**Function:** checking before you ask   ·   **Grammar:** reporting what you checked   ·   **Pronunciation:** the opening sentence of a call you have prepared'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last thing you telephoned somebody about. What could you have checked first?'));
out.push(p('**b**  Which call would you rather receive? _Has the Shamsi delivery come? · I have looked at the gate sheet and the stock card and neither shows it. Has it come?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala do before she telephones Nour?   **A** nothing   **B** three checks, which answer the question   **C** asks Abu Yasser'));
out.push(p('**b**  Listen again. **1** What were the three checks and what did they show? **2** What does Nour say about the call she did not receive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  "Before I telephoned you"', [
  ['Hala', 'Nour — the Tarabishi order. Before I telephoned you I looked at three things.'],
  ['Nour', 'Go on.'],
  ['Hala', 'The order book, which shows it taken on the 22nd for forty. The picking list, which shows forty. And the gate sheet, which shows thirty-eight out and a note of two held back.'],
  ['Nour', 'So the question is why two were held back.'],
  ['Hala', 'That is not my question any more, because the note says *two damaged, replaced from the next delivery* in Abu Yasser\'s hand. So the order is complete and the invoice is for forty and he has thirty-eight.'],
  ['Nour', 'Which means the invoice is wrong.'],
  ['Hala', 'The invoice is right if the two are going out on Thursday and wrong if they are not. That is the only thing I cannot see, and it is the only thing I am telephoning about.'],
  ['Nour', 'They are going out on Thursday. I booked them yesterday.'],
  ['Hala', 'Then there is nothing to do and I will note it on the order.'],
  ['Nour', 'Hala — how long did the three checks take?'],
  ['Hala', 'About a minute.'],
  ['Nour', '⚠ Last month you would have telephoned me and I would have looked at the same three things, except that I would have done it after the call rather than before it, and it would have taken me four minutes and a walk to the warehouse. **The minute is the whole difference and it is yours rather than mine.**'],
  ['Hala', 'It also means I asked you one question instead of four.'],
  ['Nour', '⚠ Which is the part that matters. **Three of those four questions had answers in this building and only one of them needed me.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The one-minute check — and reporting it**',
  table(['Move', 'Example'], [
    ['**Before I telephoned you I looked at…**', '…the order book, the picking list and the gate sheet.'],
    ['each one, with what it showed', 'The order book shows forty; the gate sheet shows thirty-eight.'],
    ['⚠ **the one thing you cannot see**', 'Whether the two are going out on Thursday.'],
    ['⚠ **one question, not four**', 'That is the only thing I am telephoning about.'],
    ['**and I will note it**', 'Then there is nothing to do and I will note it on the order.'],
  ], [2.5, 3]),
  '⚠ **Three documents and one minute answer about three of every four questions.** The three are usually: where it was recorded, where it was actioned, and where it left — in this book, the order book, the picking list and the gate sheet.',
  '⚠ **Then ask one question, not four.** The value is not only your minute: the other person would have looked at the same three documents **after** the call instead of before it, and it would have cost them four minutes and a walk.',
  '⚠ **Say what you looked at and what each showed.** It lets the other person correct your reading of a document rather than answer a question you need not have asked.',
  '⚠ **Name the one thing you cannot see.** It is the question. Everything else was available to you.',
  '**Practise:** Do the one-minute check and ask one question. 1 a missing delivery 2 an invoice query 3 an unpaid supplier 4 a stock difference 5 a customer complaint',
  '**Useful phrases:**  Before I telephoned you I looked at…  ·  which shows…  ·  the only thing I cannot see is…  ·  that is the only thing I am telephoning about  ·  I will note it.',
  '**Pronunciation – the opening of a prepared call.** 🔊 **Track 9.8** Listen: _before I telephoned you // I looked at three things_. ⚠ The number comes first and the list follows. A prepared call announces its own shape in the first six words. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has done the one-minute check; B answers the one question. Then swap.'));
out.push(dlg(null, [
  ['A', '__________. Before I telephoned you I looked at three things.'],
  ['B', 'Go on.'],
  ['A', '__________, which shows __________. __________, which shows __________. And __________, which shows __________.'],
  ['B', 'So the question is __________.'],
  ['A', 'That is not my question any more, because __________. The only thing I cannot see is __________, and it is the only thing I am telephoning about.'],
  ['B', '__________.'],
  ['A', 'Then there is nothing to do and I will note it.'],
]));
out.push(table(['Role card 1 — an unpaid supplier', 'Role card 2 — a stock difference'], [[
  'Three checks: the purchase ledger (invoice entered 2 October), the payment run list (not on either October run), the bank statement (no payment). The one thing not visible: whether it was deliberately held. It was — the delivery was short and nobody noted it on the ledger.',
  'Three checks: the stock card (1,400), the count sheet (900), the yard container note (500). The arithmetic reconciles. The one thing not visible: whether the container stock is saleable, since it has been there since June and the container is unheated.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the three checks and the one question. ⚠ Then write the three questions that were **not** asked because the checks answered them.'));
out.push(PHRASE_CARD(['Before I telephoned you…', 'which shows…', 'the only thing I cannot see', 'one question, not four', 'I will note it.', 'about a minute']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** questions you would normally telephone somebody about. Do the one-minute check on paper first.'));
out.push(table(['The question I was going to ask', 'Check 1', 'Check 2', 'Check 3', 'What I now need to ask'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.4, 1, 1, 1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I was going to ask _______. I looked at _______, _______ and _______, and now I only need to ask _______._'));
out.push(p('**Listener task:** count how many of the room\'s questions disappeared entirely. ⚠ Usually about half, and that figure is the cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _before I telephoned to you_ and _I looked three things_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE ONE-MINUTE CHECK — a note for the counter and the warehouse. 27 November.**',
  '**What this is.** Three documents, in this order, before you telephone anybody about an order. It takes about a minute and in about three cases out of four it answers the question.',
  '**1 · The order book.** What was ordered, when, and by whom. ⚠ **Most "missing" orders are orders that were never written down**, and this is the only document that can show that.',
  '**2 · The picking list.** What was picked against the order, and the time it was printed. If the list differs from the order, the question is about the list and nobody needs to look in the warehouse.',
  '**3 · The gate sheet.** What left, when, and signed by whom — including any note of goods held back. Abu Yasser writes those notes and they answer about a third of all queries on their own.',
  '**Then ask yourself the one question: what can I not see from these three?** That is the question to telephone about, and it is usually a decision rather than a fact — *is it going on Thursday*, *has it been credited*, *do we hold the price*.',
  '⚠ **Why this is written down at all.** Not because anybody is lazy. The three documents live in three places: the order book is at the counter, the picking list is in the office tray and the gate sheet is in the warehouse. **Doing the check means walking about forty metres, and telephoning means walking none** — so the check is the slower thing to start and the faster thing to finish, which is the worst possible shape for a habit and is why it has to be written down.',
  '⚠ **And one honest warning.** The check will sometimes tell you that the answer is in a document and the document is wrong. **That is not a failure of the check** — it is the only way anybody ever finds out that a document is wrong, and it has happened twice this month.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the order book show that no other document can?'));
out.push(item('2', 'Why does the note say the habit has to be written down?'));
out.push(item('3', 'What honest warning does the note end with?'));
out.push(box('Writer\'s box', [
  '**A procedure for a habit — four parts:** what it is and how long it takes → the documents **numbered, in order, with what each uniquely shows** → ⚠ **the one question to ask yourself at the end** → ⚠ **why it has to be written down at all.**',
  '**Say what each document uniquely shows.** *Most "missing" orders are orders that were never written down, and this is the only document that can show that.* Three documents with overlapping descriptions will not be used in order.',
  '⚠ **Explain why the habit is hard, in physical terms.** *Doing the check means walking about forty metres, and telephoning means walking none.* ⚠ A habit that is slower to start and faster to finish is the worst shape there is, and naming that is more useful than urging anybody to be thorough.',
  '**Make the last step a question rather than an action.** *What can I not see from these three?*',
  '⚠ **Warn that the check will sometimes expose a wrong document, and say that is the point.** *It is the only way anybody ever finds out that a document is wrong, and it has happened twice this month.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-minute check for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**THE ONE-MINUTE CHECK — ______________.**   **What this is.** ______________ documents, in this order, before you ______________. It takes about ______________ and in about ______________ cases out of ______________ it answers the question.   **1 ·** ______________. ⚠ **Most ______________ are ______________**, and this is the only document that can show that.   **2 ·** ______________. If ______________, the question is about ______________.   **3 ·** ______________. ______________ answers about ______________ of all queries on its own.   **Then ask: what can I not see from these?** It is usually ______________ rather than a fact.   ⚠ **Why this is written down.** Not because anybody is lazy. ______________, so the check is ______________ to start and ______________ to finish.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says explain why the habit is hard in physical terms. Yours says people should be more careful — what does the check actually cost somebody in walking or minutes?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a new person do this on their first morning?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The documents numbered, in order', ''],
  ['What each one uniquely shows', ''],
  ['A question, not an action, as the last step', ''],
  ['Why the habit is hard, in physical terms', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *why the habit is hard*. The class says which obstacle is real and which is about willingness — and the first kind can be fixed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a question you asked somebody that you could have answered yourself (**100 to 140 words**). Say what you asked, where the answer was, and what stopped you looking.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _where the answer was_   ✓ _what they checked, reported with what each showed?_   ? _what actually stopped them looking — distance, habit, or not knowing the document existed?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the writer not know the document existed? ⚠ Usually one — and that one is not a habit problem at all, which is worth separating out.'));
out.push(box('Homework', ['Write your final text. Then do the one-minute check before the next three things you would have telephoned about, and write down how many questions disappeared (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.5 =======================
out.push(pb());
out.push(h2('9.5  Definitely, probably, possibly'));
out.push(p('**Function:** stating your degree of certainty   ·   **Grammar:** adverbs of certainty; *I am fairly sure · I would be surprised if*   ·   **Pronunciation:** the adverb that carries the whole sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing about next week you are certain of, one you think probable, and one that is possible. What makes the difference?'));
out.push(p('**b**  What does each promise? _The load will definitely be there by Thursday. · It will probably be there by Thursday. · It could possibly be there by Thursday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar ask Nour to do with her three words?   **A** replace them with figures   **B** say what each one would cost if it turned out wrong   **C** remove them'));
out.push(p('**b**  Listen again. **1** What does he say *definitely* costs? **2** Which of the three does he say is most often misused?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  "What does each of those cost if you are wrong?"', [
  ['Nour', 'The wrap will definitely arrive on Thursday, the credit will probably be settled this week, and the auditor\'s list will possibly be finished by Friday.'],
  ['Mr Attar', 'Take those three words and tell me what each one costs if it turns out wrong.'],
  ['Nour', '*Definitely* — if the wrap does not come on Thursday, the Ghouta run goes out without it and four customers get an apology, and the next time I say *definitely* nobody believes it.'],
  ['Mr Attar', 'The second part is the expensive one. And the credit?'],
  ['Nour', '*Probably* — if it is not settled, nothing happens, because *probably* has already told whoever is reading it to plan for both.'],
  ['Mr Attar', 'So *probably* is almost free, and *definitely* costs you the word itself. And *possibly*?'],
  ['Nour', '*Possibly* costs nothing at all if it is wrong, which is why it is the one I use when I have not looked.'],
  ['Mr Attar', 'There it is. ⚠ **_Possibly_ is the most misused word in business writing**, because it is free. It is doing honest work when you have looked and genuinely do not know, and it is doing dishonest work when it means *I have not looked*.'],
  ['Nour', 'And nobody can tell which from the outside.'],
  ['Mr Attar', 'Nobody — which is exactly why the discipline has to be yours. ⚠ The repair is one clause: *possibly, and what I have not checked is the carrier\'s schedule*. **A hedge with its reason attached cannot be used to hide behind.**'],
  ['Nour', 'And *definitely*?'],
  ['Mr Attar', 'Spend it about four times a year. ⚠ **It is the only one of the three that is worth anything, and it is only worth anything because of the occasions on which you did not use it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three adverbs, and what each costs when it fails**',
  table(['Word', 'What it claims', '⚠ What it costs if wrong'], [
    ['**definitely**', 'you have checked and it is arranged', '⚠ **the word itself** — nobody believes the next one'],
    ['**probably**', 'more likely than not; plan for both', 'almost nothing — it told them to plan for both'],
    ['**possibly**', 'you have looked and do not know', '⚠ nothing — which is why it is misused'],
    ['**I would be surprised if…**', '*probably*, with your judgement behind it', 'a little of your judgement'],
    ['⚠ **the repair for a hedge**', '*possibly, and what I have not checked is…*'],
  ], [1.5, 2.2, 2.5]),
  '⚠ **_Definitely_ is the only one of the three worth anything, and it is only worth anything because of the occasions on which you did not use it.** Spend it about four times a year.',
  '⚠ **_Possibly_ is the most misused word in business writing because it is free.** It does honest work when you have looked and genuinely do not know, and dishonest work when it means *I have not looked* — ⚠ **and nobody can tell which from the outside.**',
  '⚠ **The repair is one clause: *possibly, and what I have not checked is…*** A hedge with its reason attached cannot be hidden behind, and it also tells the reader what to go and do.',
  '⚠ **_Probably_ is nearly free and does real work**, because it instructs the reader to plan for both outcomes. It is the right default for most of what anybody writes.',
  '**Practise:** Choose the adverb, then say what it would cost if wrong. 1 a delivery date 2 a credit being settled 3 a machine lasting the winter 4 a customer returning 5 a figure you have added once',
  '**Useful phrases:**  definitely  ·  probably  ·  possibly, and what I have not checked is…  ·  I would be surprised if…  ·  I have looked and I do not know.',
  '**Pronunciation – the adverb carrying the sentence.** 🔊 **Track 9.10** Listen: _it will **definitely** be there // it will **probably** be there // **possibly**, and I have not checked the schedule_. ⚠ The adverb takes the main stress, because it is the information. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes three predictions with three adverbs; B asks what each would cost if wrong. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ will definitely __________, __________ will probably __________, and __________ will possibly __________.'],
  ['B', 'What does each of those cost if it turns out wrong?'],
  ['A', '*Definitely* — if __________, then __________, and __________.'],
  ['B', 'The second part is the expensive one. And the second?'],
  ['A', '*Probably* — if not, nothing happens, because __________.'],
  ['B', 'And *possibly*?'],
  ['A', 'Costs nothing, which is why __________.'],
  ['B', '⚠ Then repair it: *possibly, and what I have not checked is __________*.'],
]));
out.push(table(['Role card 1 — three predictions', 'Role card 2 — the free _possibly_'], [[
  'The van will definitely be back on Monday (the garage has said so in writing). The credit will probably clear this week. The auditor will possibly want the yard notes. ⚠ Only the first has been checked, and it is the only *definitely*.',
  'A has written *the goods will possibly arrive before Thursday* about a consignment he has not asked about at all. B must get him to say the true version: *I have not telephoned the carrier.* ⚠ The hedge was hiding an uncompleted task and not an uncertainty.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write each adverb with its cost. ⚠ Then find the *possibly* that means *I have not looked*, and write the repair clause.'));
out.push(PHRASE_CARD(['definitely', 'probably', 'possibly, and I have not checked…', 'I would be surprised if…', 'what does it cost if wrong?', 'spend "definitely" four times a year']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you have said or written this month with one of these words. For each: the word, what it cost or would have cost, and the word you should have used.'));
out.push(table(['What I said', 'The word I used', 'What it would cost if wrong', 'The word I should have used'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 0.9, 1.8, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said _______ would definitely _______. If it had not, _______ — and the real word was _______._'));
out.push(p('**Listener task:** count the room\'s *definitely*s for one month. ⚠ Four a year is the figure in the Language box; most people use four a week.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it will definitely to arrive_ and _possibly it will maybe arrive_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the estimate, and answer the questions.'));
out.push(box(null, [
  '**THE AUDITOR\'S LIST — where each item stands. To Z. Attar, 28 November.**',
  '**Definitely done, and you can test any of these today.** The nine procedures are written and on the wall. The authority matrix is signed and dated 1 November. The credit list is printed on Fridays and the last four are initialled. ⚠ **Three items, and I have used the word once in this document.**',
  '**Probably done by Friday.** The gate sheet date box is printed and in use, but I have not checked that it is being completed on the Baghdad Street site — I will look on Thursday. The controls history is written and needs one date I am waiting for from Abu Yasser, who is on holiday until Wednesday.',
  '**Possibly, and here is exactly what I have not checked.** The fourth store room count. ⚠ *Possibly by the year end* — **and what I have not checked is whether the shelves can be reconciled to the August paper count at all**, because the shelves have been moved since. If they cannot, it is not a week\'s work, it is a full recount, and I will know on Thursday when I have spent an hour in there.',
  '**And one item I am taking off the list rather than hedging.** The insurance schedule. ⚠ **I said "possibly" about this three weeks ago and what I meant was that I had not looked at it**, and three weeks later I still have not. It is not a *possibly*; it is an uncompleted task of mine, and the honest entry is: **not started, nobody else is waiting on me for it, and it will be done by the 10th.**',
  '**Why this page is laid out by certainty and not by subject.** Because the three groups need three different things from you. The first needs nothing. The second needs you not to ask again until Friday. ⚠ **And the third needs you to know that I may be about to tell you something worse than what is on the page** — which is better coming now than on Thursday afternoon.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many *definitely* items are there, and what does the writer say about the word?'));
out.push(item('2', 'What is taken off the list rather than hedged, and what is said about the earlier *possibly*?'));
out.push(item('3', 'Why is the page laid out by certainty rather than by subject?'));
out.push(box('Writer\'s box', [
  '**A status page laid out by certainty — four groups:** **definitely done, testable today** → **probably by a date, with what is outstanding** → ⚠ **possibly, and exactly what has not been checked** → ⚠ **the item taken off the list rather than hedged.**',
  '**Count your own *definitely*s in the document and say the number.** *Three items, and I have used the word once in this document.* It is the quickest way to make the word mean something.',
  '⚠ **Attach the unchecked thing to every *possibly*.** *What I have not checked is whether the shelves can be reconciled at all.* ⚠ And say what would follow if the answer is bad: *it is not a week\'s work, it is a full recount.*',
  '⚠ **Convert a dishonest hedge into an uncompleted task, and name it as yours.** *I said "possibly" three weeks ago and what I meant was that I had not looked.* ⚠ *Not started, nobody is waiting on me, and it will be done by the 10th* is a stronger entry than any hedge.',
  '⚠ **Say why the layout is by certainty.** *The three groups need three different things from you.* A reader who knows which group an item is in knows whether to ask again.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a status page laid out by certainty (**50 words or more**). Use the frame.'));
out.push(p('**______________ — where each item stands.**   **Definitely done, and you can test these today.** ______________. ______________. ⚠ ______________ items, and I have used the word once.   **Probably done by ______________.** ______________, but I have not ______________. ______________ needs ______________.   **Possibly, and here is what I have not checked.** ______________. ⚠ What I have not checked is ______________. If ______________, then it is not ______________, it is ______________.   ⚠ **And one item I am taking off the list rather than hedging.** ______________. I said *possibly* ______________ ago and what I meant was ______________. **Not started, and it will be done by ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says attach the unchecked thing to every *possibly*. Your second *possibly* has none — what exactly have you not looked at?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is any *possibly* on this page hiding an uncompleted task?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Definitely* items testable today, and the word counted', ''],
  ['*Probably* items with a date and what is outstanding', ''],
  ['Every *possibly* with the unchecked thing named', ''],
  ['One item converted from a hedge into an uncompleted task', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their converted item. The class says which hedge had been hiding a task the longest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody told you something was definite and it was not (**100 to 140 words**). Say what you did because you believed it, what it cost, and whether you believe that person now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they did because they believed it_   ✓ _definitely / probably / possibly used with their real weights?_   ? _do they believe that person now, and about what?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many does the writer still not believe that person? ⚠ Most — and usually about everything, not only about the thing that failed, which is the real price of the word.'));
out.push(box('Homework', ['Write your final text. Then find one *possibly* you have written and either check the thing or convert it into an uncompleted task with a date (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.6 =======================
out.push(pb());
out.push(h2('9.6  A photograph, in words'));
out.push(p('**Function:** describing what is in front of you   ·   **Grammar:** the written observation; position, measurement, sequence   ·   **Pronunciation:** a description read aloud at dictation speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe something on the table in front of you so that somebody in another room could draw it. What do they need?'));
out.push(p('**b**  Which could be drawn? _The carton is badly damaged. · The carton is crushed on one lower corner, about 10 cm in from each edge, and the top is sound._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour need a written description?   **A** the photograph is bad   **B** she has to describe it to somebody who cannot come and see it   **C** she likes writing'));
out.push(p('**b**  Listen again. **1** What three things does Mr Attar say every description needs? **2** What does he say about the word *damaged*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  "Write it so I could draw it"', [
  ['Nour', 'I have photographed the pallet but the insurer wants it described in the report as well.'],
  ['Mr Attar', 'Then write it so that I could draw it without the photograph. Three things in every line: **where**, **how big**, and **what it is next to**.'],
  ['Nour', 'The base boards are split.'],
  ['Mr Attar', 'Which boards, how long is the split, and where does it start?'],
  ['Nour', 'Two of the five base boards, the middle two, split across the width, about forty centimetres each, starting at the centre and running towards the near edge.'],
  ['Mr Attar', 'Now I can draw it. And the word you have not used is the useful one.'],
  ['Nour', '*Damaged*?'],
  ['Mr Attar', 'You have not used it, which is why the sentence works. ⚠ *Damaged* is a conclusion wearing the clothes of a description: it tells me you have decided something and not what you can see. **Split, crushed, torn, bent, soaked — those I can draw. Damaged I cannot.**'],
  ['Nour', 'And what is sound? Do I say that?'],
  ['Mr Attar', '⚠ Always. *The top boards are sound* is as much a fact as the split, and in six months it will be the sentence that matters, because somebody will claim the whole pallet.'],
  ['Nour', 'The two cartons on the split side are crushed on their lower corners.'],
  ['Mr Attar', 'Which corners, and how far up?'],
  ['Nour', 'The corner nearest the split, about ten centimetres up on both.'],
  ['Mr Attar', '⚠ **About ten centimetres on both.** That *both* is doing more work than anything else in your description, because two identical marks are a mechanism and one is an accident.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The written observation — where, how big, next to what**',
  table(['Element', 'Example'], [
    ['**where**', 'the **middle two** of the five base boards'],
    ['**how big**', 'about **40 cm** each'],
    ['**what it is next to**', 'starting at the centre, running towards the near edge'],
    ['⚠ **the state of the sound parts**', 'The top boards **are sound**.'],
    ['⚠ **the repeated mark**', 'about 10 cm up on **both**'],
  ], [2, 3.2]),
  '⚠ **Use verbs you can draw: split, crushed, torn, bent, soaked.** ⚠ *Damaged* is a conclusion wearing the clothes of a description — it reports a decision rather than an observation, and nobody can draw it.',
  '⚠ **Record what is sound.** *The top boards are sound* is as much a fact as the split, and in six months it is the sentence that matters, because somebody will claim the whole thing.',
  '⚠ **Say when a mark is repeated.** *About 10 cm up on both.* ⚠ **Two identical marks are a mechanism and one is an accident**, so *both* is often the most valuable word in a description.',
  '⚠ **Three things in every line: where, how big, and what it is next to.** A description without position cannot be drawn and a description without measurement cannot be compared with the next one.',
  '**Practise:** Describe each so that somebody could draw it. 1 a split pallet 2 a crushed carton 3 a torn wrap 4 a bent shelf 5 a water mark',
  '**Useful phrases:**  the middle two of five  ·  about 40 cm  ·  starting at … and running towards …  ·  the top boards are sound  ·  on both',
  '**Pronunciation – dictation speed.** 🔊 **Track 9.12** Listen to a description read slowly enough to write down, with a pause at each comma. ⚠ A description is the one kind of business English that is read aloud to be copied, and it should be written to be read that way. Repeat two lines.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A describes an object; B draws it and asks only for what is missing. Use the skeleton, then the cards.'));
out.push(dlg(null, [
  ['A', 'It is __________. __________ is __________ about __________.'],
  ['B', 'Where does it start?'],
  ['A', 'At __________, running towards __________.'],
  ['B', 'And what is sound?'],
  ['A', '__________ and __________ are sound.'],
  ['B', 'Is the mark on one or on both?'],
  ['A', '⚠ On both, about __________ up.'],
  ['B', 'Now I can draw it.'],
]));
out.push(table(['Pair 1 — for A to describe', 'Pair 2 — for B to describe'], [[
  'A carton crushed on one lower corner, about 10 cm up, with a 15 cm tear in the wrap over that corner and nowhere else; the top and three sides sound; the label intact and unmarked.',
  'A shelf bowed about 3 cm in the centre over a span of 120 cm, with a 40 cm scrape along the top surface running from the near end towards the middle; the ends and the uprights sound.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs do the back-to-back description for the class – **without the book**. The class draws.'));
out.push(p('**Listener task:** compare three drawings. ⚠ Where they differ, find the sentence in the description that allowed two readings — it is always a missing position or a missing measurement.'));
out.push(PHRASE_CARD(['the middle two of five', 'about 40 cm', 'running towards…', 'the top boards are sound', 'on both', 'not "damaged"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe **three** real things at your work so that somebody could draw them. Include what is sound.'));
out.push(table(['The thing', 'Where', 'How big', 'What is sound'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.8, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read one description to the class and have them draw it. Then show them the thing, or a photograph of it.'));
out.push(p('**Listener task:** how many drawings were right? ⚠ Where they were wrong, the fault is in the description, not in the drawing — and finding which word did it is the exercise.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the carton is damaged in the corner_ and _the split is in the middle of the near board approximately_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the description, and answer the questions.'));
out.push(box(null, [
  '**PALLET 2219 — written description for the insurer. 28 November. Written in the yard at 9.10 on 24 November, before anything was moved; photographs 1–6 attached and taken at the same time.**',
  '**The pallet.** Standard four-way, five base boards and five top boards. **The middle two base boards are split across the width**, about 40 cm each, each split starting within about 5 cm of the centre line and running towards the same long edge. **The outer three base boards and all five top boards are sound.** The two blocks under the split boards are intact.',
  '**The underside.** Two parallel marks on the underside of the base boards, about 8 cm wide each and **40 cm apart centre to centre**, running the full width. Our own forklift tines are 90 cm apart and 10 cm wide (measured on the machine, 24 November).',
  '**The wrap.** Standard clear stretch wrap, four turns. **Torn at each of the two marks and nowhere else**; each tear about 12 cm and in line with the mark beneath it. The top sheet is unmarked. **No tear at the corners or at the strap lines.**',
  '**The straps.** Two polyester straps, both fitted, both tensioned, neither cut nor stretched. Buckles at the near long side, about 30 cm from each end.',
  '**The cartons.** Forty-eight, in four layers of twelve. **Forty-six are sound.** Two are crushed at the lower outer corner on the split side, about 10 cm up on both, each crush about 8 cm across. No other carton is marked at any corner.',
  '⚠ **What is not here.** No water marking on any surface. No oil, no scuffing on the sides, no label damage; all forty-eight labels are legible and none is torn. **The pallet was dry throughout when examined.** ⚠ I am recording the absences because an insurer reading only the damage cannot tell whether I looked for anything else.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many separate measurements are in this description?'));
out.push(item('2', 'What does the description record about the parts that are not damaged?'));
out.push(item('3', 'Why does the writer record the absences?'));
out.push(box('Writer\'s box', [
  '**A written description for somebody who cannot come and look — by part, not by severity:** the thing itself → each surface in turn → ⚠ **what is sound, in every paragraph** → ⚠ **what is not there.**',
  '**Head it with when and where you looked and what else was taken at the same time.** *Written in the yard at 9.10 on 24 November, before anything was moved; photographs 1–6 attached and taken at the same time.*',
  '**Measure your own equipment too.** *Our own forklift tines are 90 cm apart and 10 cm wide (measured on the machine, 24 November).* A comparison is only a comparison if both numbers were measured.',
  '⚠ **Say what is sound in every paragraph, not once at the end.** *Forty-six are sound. No other carton is marked at any corner.* ⚠ It is the half of the description that pays, six months later, when somebody claims the whole load.',
  '⚠ **Record the absences and say why.** *No water marking. No oil, no scuffing, no label damage.* ⚠ *An insurer reading only the damage cannot tell whether I looked for anything else* — which is the sentence that makes the whole document worth more than the photographs.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a description for somebody who cannot come and look (**50 words or more**). Use the frame.'));
out.push(p('**______________ — written description. Written at ______________ on ______________, before anything was moved.**   **The thing.** ______________. **______________ is/are ______________** about ______________, starting ______________ and running ______________. **______________ are sound.**   **______________.** ______________ marks, about ______________ and ______________ apart. Our own ______________ is ______________ (measured ______________).   **______________.** ______________ at ______________ **and nowhere else**.   **______________.** ______________ of ______________ are sound. ______________ are ______________ on both.   ⚠ **What is not here.** No ______________. No ______________. I am recording the absences because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what is sound in every paragraph. Your third paragraph describes only the tear — what was undamaged on that surface?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Draw your partner\'s description without looking at the thing. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['When and where, and what else was taken at the time', ''],
  ['Where, how big, and next to what, in every line', ''],
  ['What is sound, in every paragraph', ''],
  ['The absences, with the reason for recording them', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what is not here*. The class says which absence would matter most in six months.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a description of something at your work that has worn out slowly (**100 to 140 words**). Describe it so that somebody could draw it, say what is still sound, and say what it looked like when it was new.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what is still sound_   ✓ _verbs you can draw, and no "damaged"?_   ? _what measurement is missing?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ How many contain a measurement of anything? Usually one — and slow wear is exactly the case where measurements matter, because nobody can remember what it was like last year.'));
out.push(box('Homework', ['Write your final text. Then describe one thing at your work in writing and have somebody draw it from your description (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review & Mediate: what do you think happened to this pallet?'));
out.push(p('**Function:** giving a diagnosis to somebody who will act on it   ·   **Review:** deduction · possibility · ruling out · the one-minute check · degrees of certainty · the written observation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What must every deduction carry with it?',
  '**2** What two things do you offer when you report a possible cause?',
  '**3** Why does a vague objection get checked rather than investigated?',
  '**4** What are the three documents in the one-minute check, and what is the last step?',
  '**5** What does *possibly* cost if it is wrong — and why is that a problem?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Haffar want to know?   **A** whether he will be credited   **B** whether the damage was his man\'s fault   **C** the price of a new pallet'));
out.push(p('**b**  Listen again. **1** What does Nour tell him she can and cannot say? **2** What does he tell her that changes the diagnosis?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  "So was it us?"', [
  ['Mr Haffar', 'The pallet. Was it my man with the forklift or was it yours?'],
  ['Nour', 'I can tell you three things and the third is the one you want. It was lifted by a machine with tines about forty centimetres apart; ours are ninety. It was lifted after it was wrapped, because the wrap is torn at the tine marks and nowhere else. And it was not lifted on our lorry, because the straps were on when it came back and both were intact.'],
  ['Mr Haffar', 'So it was us.'],
  ['Nour', 'It was a narrow-tine machine after wrapping and not on our vehicle. **Whose machine, I cannot say and I am not going to.** There is one in the market and at least two on your street.'],
  ['Mr Haffar', 'Mine is forty.'],
  ['Nour', 'So is the market\'s.'],
  ['Mr Haffar', 'You could have said it was mine and I would probably have accepted it.'],
  ['Nour', 'I know, and the credit is going out either way, so there would have been nothing in it for me.'],
  ['Mr Haffar', 'There is one thing. It did not come off my lorry at my gate. ⚠ It went to the market first because the driver had another drop, and it was lifted off and on again there — I did not know that until I asked him this morning, and I asked him because you had said *after wrapping*.'],
  ['Nour', 'Then that is the forklift, probably, and neither of us owns it.'],
  ['Mr Haffar', 'Probably. ⚠ And I would not have gone and asked him at all if you had told me it was my man, because I would have paid it and been annoyed with him for a month.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – giving a diagnosis to somebody who will act on it**',
  table(['To be useful', 'To stop short', 'To be corrected'], [
    ['I can tell you three things.', 'Whose machine I cannot say.', 'It went to the market first.'],
    ['It was lifted **after** wrapping.', 'There is one in the market.', 'I asked him because you said *after wrapping*.'],
  ], [2, 2, 2.2]),
  '⚠ **Give the number first and then the findings.** *I can tell you three things and the third is the one you want.*',
  '⚠ **Stop at the machine and refuse the owner, out loud.** *Whose machine, I cannot say and I am not going to.* ⚠ And say the credit is going out either way, so that the refusal cannot be read as a negotiating position.',
  '⚠ **The finding that gets you corrected is the sequence fact.** *After wrapping* is what sent Mr Haffar to ask his driver. A diagnosis that named his man would have produced a payment, a month of unfairness, and no information at all.',
  '⚠ **Expect the correction to come from the person with access you do not have.** Only he could ask his own driver, and only the sequence fact made him want to.',
  '**Practise:** Give a diagnosis in three findings, refuse the attribution out loud, and name the sequence fact.',
  '**Useful phrases:**  I can tell you three things.  ·  it was lifted after…  ·  whose, I cannot say  ·  the credit is going out either way  ·  then that is probably…',
  '**Pronunciation – reading findings to somebody who is waiting to be blamed.** 🔊 **Track 9.14** Listen to the three findings read evenly, with a pause between each. ⚠ A findings list read quickly sounds like a case being built; read evenly, with pauses, it sounds like facts being handed over. Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a diagnosis in three findings; B is the person who may be blamed. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Three findings about a wet consignment: damp on the top and sides and not the base; the label applied after drying; the outer wrap intact. A must refuse to say whose yard it stood in. ⚠ B knows something A does not: the load was transhipped at a depot and stood there for a night.',
  'Three findings about a short delivery: the gate count agrees with the order; the customer\'s own goods-in sheet shows two fewer; the seal number on the sheet differs from the one on the gate sheet. ⚠ A must stop at the seal and refuse to name anybody.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three findings and the refusal. ⚠ Then write what the other person contributed, and say why only they could.'));
out.push(PHRASE_CARD(['I can tell you three things.', 'lifted after wrapping', 'whose, I cannot say', 'either way', 'then that is probably…', 'what can you see that I cannot?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a diagnosis. Give it to **two** people who might be blamed by it, and collect what each contributes.'));
out.push(table(['Who I told', 'My three findings', 'Where I stopped', 'What they contributed'], [['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the diagnosis gained by stopping short. This is the **ninth** unit of this book, and the finding is the one the unit has been building to: **an attribution you cannot prove buys you a payment and costs you the information, because the person who would have gone and asked stops asking the moment you blame them.**'));
out.push(p('_I could have said _______ and they would probably have accepted it. Instead I stopped at _______, and they came back with _______, which only they could have found._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _consistent with · to rule out · margin of error · provisional figure · pending inspection · on inspection._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 4)', 10));
out.push(p('⚠ **This unit practises Part 4 again, at Unit 9 difficulty: a text whose statements turn on degrees of certainty.** Choose **A** if it is right, **B** if it is wrong, or **C** if the text does not say.'));
out.push(box(null, [
  '**Extract from the inspection note of 24 November.**',
  '_The pallet can only have been lifted by a narrow-tine machine from one side. It must have been lifted after wrapping, because the wrap is torn at the tine marks and nowhere else. It was not lifted while on our vehicle: the straps were fitted when it came back and both were intact._',
  '_We cannot say whose machine it was. Narrow-tine forklifts are common; there is one in the market and at least two in the yards on that street. I am not going to narrow it by elimination because I have not been to look at anybody\'s machine._',
  '_Two cartons of forty-eight are crushed, at 23,000 each. The credit is being raised today without waiting for the cause, because the credit is not in dispute and only the cause is._',
], 'FFFFFF', C.navy));
out.push(p('**1**  The writer is certain about the kind of machine.   **A** Right   **B** Wrong   **C** Doesn\'t say', { indent: 200, after: 50 }));
out.push(p('**2**  The writer has inspected the forklifts on that street.   **A** Right   **B** Wrong   **C** Doesn\'t say', { indent: 200, after: 50 }));
out.push(p('**3**  The damage happened before the pallet was wrapped.   **A** Right   **B** Wrong   **C** Doesn\'t say', { indent: 200, after: 50 }));
out.push(p('**4**  The customer has asked for a credit.   **A** Right   **B** Wrong   **C** Doesn\'t say', { indent: 200, after: 50 }));
out.push(p('**5**  The credit depends on establishing the cause.   **A** Right   **B** Wrong   **C** Doesn\'t say', { indent: 200, after: 50 }));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: giving a colleague a diagnosis they will act on.',
  'The shape: **what you can say** · ⚠ **what you cannot** · **what would change it**.',
  '⚠ **In forty words, *what would change it* is the clause that must survive.** A diagnosis without it reads as settled and will be acted on as though it were.',
  '⚠ No reasoning and no evidence in forty words — just the finding, the limit, and the overturning condition.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Something at your work has gone wrong and a colleague must act on your diagnosis. Write them a note (**35 to 45 words**). Say **what you can say**, ⚠ **what you cannot**, and **what would change it**.'));
out.push(p('______________, on ______________: I can say ______________, because ______________. I cannot say ______________. What would change this is ______________ — if that happens, tell me before you ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the writer can say, with the evidence in a clause', ''],
  ['What the writer cannot say', ''],
  ['What would change it', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a full inspection and diagnosis for something at your work (**100 to 140 words**): the description with measurements, what is sound, the deduction with its marks, what it does not mean, the degree of certainty, and what would change your mind.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then give a diagnosis to somebody it might blame, stop short of the attribution, and write down what they contribute (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  It ___ lifted from one side — the base is split and the top is not.   a) must be   b) must have been   c) must of been',
  '2  It ___ a narrow-tine machine; nothing else leaves those marks.   a) can only have been   b) can only be   c) must not have been',
  '3  It ___ a batch fault, and I am not saying it is.   a) must be   b) may be   c) cannot be',
  '4  That ___ the total, because it is less than two of its own lines.   a) must not be   b) may not be   c) cannot be',
  '5  It ___ signed on the 14th; he was in Aleppo all week.   a) couldn\'t have been   b) mustn\'t have been   c) can\'t be',
  '6  The wrap is torn at the tines and nowhere else, so it was lifted ___ wrapping.   a) before   b) after   c) during',
  '7  ___ , and what I have not checked is the carrier\'s schedule.   a) Definitely   b) Probably   c) Possibly',
  '8  Which word should be spent about four times a year?   a) possibly   b) probably   c) definitely',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 9.15** Listen to the diagnosis. Complete the note.   Finding 1: ______   Finding 2: ______   Finding 3: ______   What the speaker will not say: ______   What the other person adds: ______'));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['Nour', 'I can tell you three things. It was lifted by a machine with tines about forty centimetres apart, and ours are ninety.'],
  ['Nour', 'It was lifted after it was wrapped, because the wrap is torn at the tine marks and nowhere else.'],
  ['Nour', 'And it was not lifted on our lorry, because the straps were fitted when it came back and both were intact.'],
  ['Nour', 'Whose machine it was, I cannot say and I am not going to. There is one in the market and at least two on your street. And the credit is going out either way.'],
  ['Mr Haffar', 'There is one thing. It went to the market first, because the driver had another drop, and it was lifted off and on again there. I only asked him because you said "after wrapping".'],
]));
out.push(p('**C  Writing.** Describe one damaged thing at your work (**50 words or more**) with two measurements, what is sound, your deduction with the mark it rests on, and what would change your mind.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ deduce from marks, and carry the mark in the sentence',
  '☐ offer two possibilities and name the test that would settle it',
  '☐ rule something out by saying what makes it impossible',
  '☐ do the one-minute check and ask one question instead of four',
  '☐ use *definitely*, *probably* and *possibly* knowing what each costs if wrong',
  '☐ describe something so that somebody else could draw it, including what is sound',
  '☐ give a diagnosis, stop short of the attribution, and invite the correction',
  '☐ write an inspection note, a report-back letter, a query and a status page by certainty',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
