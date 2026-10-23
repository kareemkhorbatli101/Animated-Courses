// Proactive Business English B1 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'options paper · recommendation · preferred option · fallback option · do-nothing option · trade-off · upside · downside · cost of delay · one-off cost · recurring cost · payback · break-even · limited trial · phased introduction · reversible · irreversible · sunk cost · opportunity cost · hypothetical · assumption · sensitivity · worst case · best case · most likely case · caveat · qualified estimate · steer · soft recommendation · firm recommendation';
const BACK_AT_B1 = 'offer · balance · spare';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 8  Options, Advice and the Second Conditional'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**8.1**  advise somebody at your own level',
  '**8.2**  describe what would happen if something changed',
  '**8.3**  choose between *would*, *might* and *could* — and know what each promises',
  '**8.4**  set the conditions under which a yes becomes a yes',
  '**8.5**  advise somebody senior without instructing them',
  '**8.6**  advise a customer you have never met',
  '**8.7**  Review & Mediate: two options, and what I would do',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The do-nothing option, and why it goes in every paper', [
  'An options paper with two options in it is a paper that has already decided. **There are always three**, because carrying on exactly as you are is always available and is sometimes right — and it has a cost, which is the only one nobody writes down.',
  '⚠ So every options paper in this unit has **three** options and the third is *change nothing*, costed. A learner who writes two has not finished, however good the two are.',
  '**And the hardest cycle is 8.5.** Advising somebody senior without instructing them is the thing most people at work get wrong in both directions: either they hedge until the advice disappears, or they issue it and it is resented. ⚠ There is a form of words that does neither, and it is in the Language box, and the whole of it is *you might want to* followed by a reason and a figure.',
], C.lyellow, C.orange));

// ======================= CYCLE 8.1 =======================
out.push(pb());
out.push(h2('8.1  If I were you'));
out.push(p('**Function:** advising a peer   ·   **Grammar:** the second conditional for advice   ·   **Pronunciation:** _If I were you_ said without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of advice a colleague gave you that you took. What made you take it?'));
out.push(p('**b**  Which would you act on? _You should write to him. · If I were you I would write to him today, because he telephones Mr Ayoub on Thursdays._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hala deciding?   **A** whether to tell Nour about a mistake   **B** whether to telephone a customer before he telephones them   **C** whether to take a day off'));
out.push(p('**b**  Listen again. **1** What two things does Nour put into her advice that make it usable? **2** What does she say she would **not** do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  "If I were you"', [
  ['Hala', 'The Tarabishi invoice is 12,000 out. In our favour.'],
  ['Nour', 'How long have you known?'],
  ['Hala', 'Since this morning. I was going to wait until he queries it, because he may not.'],
  ['Nour', 'If I were you I would telephone him today. Two reasons. He goes through his invoices on a Thursday, so you have about thirty hours; and he telephones Mr Ayoub about once a month, so if he finds it the conversation is not with you.'],
  ['Hala', 'And if I telephone and he had not noticed?'],
  ['Nour', 'Then you have told a customer you overcharged him and corrected it before he asked, which is the only version of this story that is any use to you.'],
  ['Hala', 'Would you say anything about why?'],
  ['Nour', 'I would say the figure and that it is our error and that a credit is raised. ⚠ I would not explain the price list, because the moment you explain, it sounds like a reason it might happen again.'],
  ['Hala', 'And if he asks why?'],
  ['Nour', 'Then tell him, in one sentence. ⚠ There is a difference between answering a question and volunteering a system.'],
  ['Hala', 'You are not telling me to do it.'],
  ['Nour', 'No — it is your invoice and your customer, and if you decide to wait I will not go behind you. **But you asked me what I would do, and that is what I would do, and I would do it before one o\'clock.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The second conditional for advice — and what makes advice usable**',
  table(['Form', 'Example'], [
    ['**If I were you, I would…**', '**If I were you I would** telephone him today.'],
    ['⚠ **+ because** + a reason', '…**because** he goes through his invoices on a Thursday.'],
    ['⚠ **+ a time**', '…and **I would do it before one o\'clock**.'],
    ['**I would not…**', '**I would not** explain the price list.'],
    ['⚠ leaving it theirs', 'It is your customer, and if you wait I will not go behind you.'],
  ], [2.2, 3]),
  '⚠ **Advice without a reason is an instruction in disguise.** *You should write to him* tells the other person what you want. *If I were you I would write today, because he reads his invoices on Thursday* tells them what you know, and they can act on the second without agreeing with you.',
  '⚠ **Put a time on it.** *I would do it before one o\'clock* is what turns advice into something that happens. Advice with no time attached is almost never taken on the day it is given.',
  '⚠ **Say what you would not do as well.** *I would not explain the price list* is often the more useful half, because the mistake people make under pressure is to say too much.',
  '⚠ **Leave the decision with them, out loud.** *It is your customer, and if you wait I will not go behind you.* ⚠ Then give the advice anyway. Hedging the advice and keeping the decision is the common error; the right shape is the opposite.',
  '⚠ **_If I were you_**, not ~~if I was you~~, in the written form — and *were* for all persons: *if he were*, *if we were*.',
  '**Practise:** Advise a colleague, with a reason, a time, and one thing you would not do. 1 an invoice error in your favour 2 a complaint you have not passed on 3 a supplier who has not been paid 4 a mistake a junior made 5 a customer asking for something above your limit',
  '**Useful phrases:**  If I were you I would…  ·  …because…  ·  I would do it before…  ·  I would not…  ·  It is your decision and I would not go behind you.',
  '**Pronunciation – _if I were you_ said flat.** 🔊 **Track 8.2** Listen: _if I were you I\'d telephone him today_. ⚠ *I\'d* is contracted and *were* is weak; a stressed *I* makes it a boast and a stressed *you* makes it a reproach. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a decision; B advises with a reason, a time, and one thing not to do. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. I was going to wait until __________.'],
  ['B', 'If I were you I would __________ today. Two reasons. __________, so you have about __________; and __________.'],
  ['A', 'And if __________?'],
  ['B', 'Then you have __________, which is the only version of this that is any use to you.'],
  ['A', 'Would you say anything about __________?'],
  ['B', 'I would say __________. ⚠ I would not __________, because __________.'],
  ['A', 'You are not telling me to do it.'],
  ['B', 'No. It is yours. **But you asked what I would do, and I would do it before __________.**'],
]));
out.push(table(['Role card 1 — the unpassed complaint', 'Role card 2 — the junior\'s mistake'], [[
  'A took a complaint on the telephone three weeks ago and settled it informally, and never put it in the book. The auditor is here on Thursday. Reason: the complaint book is a document he will ask for. Time: today. Not: do not reconstruct a date you cannot remember.',
  'A has found that a trainee mis-entered nine stock cards. Reason: the stock count is on Monday and the error will be found then by somebody else. Time: before the trainee goes home. ⚠ Not: do not correct them silently — the trainee learns nothing and will do it again.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the advice for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason, the time and the *I would not*. ⚠ Then say whether the adviser kept the decision or left it — the words *it is yours* must actually be said.'));
out.push(PHRASE_CARD(['If I were you I would…', 'because…', 'before one o\'clock', 'I would not…', 'It is your decision.', 'I would not go behind you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** decisions a colleague of yours faces. Write your advice with a reason, a time and one *I would not*.'));
out.push(table(['Their decision', 'If I were you I would…', 'Because', 'By when', 'I would not…'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.1, 1.3, 1.3, 0.7, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If I were _______ I would _______, because _______, and I would do it by _______. I would not _______._'));
out.push(p('**Listener task:** count the pieces of advice with no reason in them. ⚠ Then notice that those are the ones that sound most confident.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _if I was you_ and _if I were you I will telephone him_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**Hala — the Tarabishi invoice. 18 November.**',
  'You asked me what I would do, so here it is in writing and then it is yours.',
  '**I would telephone him today, before one.** Two reasons and they are both about timing rather than about honesty. He goes through his invoices on a Thursday, so you have about thirty hours in which this is your telephone call rather than his. And he speaks to Mr Ayoub about once a month, so if he finds it first there is a version of this conversation that happens without you in the room.',
  '**I would say three things and stop.** The figure — 12,000. That it is our error. That a credit note is raised and the number is on it. ⚠ **I would not explain the price list unless he asks**, because an explanation offered before it is wanted reads as a reason it will happen again.',
  '**And if he asks why, I would tell him in one sentence**, which is that the counter copy was out of date and one dated list is now printed on Fridays. One sentence, not three — ⚠ **there is a difference between answering a question and volunteering a system.**',
  '**What I would not do, and why I am saying it.** I would not wait to see whether he notices. Not because waiting is dishonest — the credit note is raised either way and he loses nothing — but because the only valuable version of this is the one where we found it, and that version has about thirty hours left in it.',
  '⚠ **It is your invoice and your customer.** If you decide to wait, I will not go behind you and I will not mention it to Mr Ayoub unless he asks me directly, in which case I will tell him the truth including that I advised otherwise.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two reasons does the writer give, and what does she say they are about?'));
out.push(item('2', 'What would she not do unless asked, and why?'));
out.push(item('3', 'What does she say she will do if Mr Ayoub asks her directly?'));
out.push(box('Writer\'s box', [
  '**A written piece of advice to a peer — five parts:** the advice **with a time** → the reasons → what you would **say**, and what you would **not** say → what you would not **do**, and why → ⚠ **the decision handed back, with what you will do if asked about it.**',
  '**Say what kind of reasons yours are.** *They are both about timing rather than about honesty.* It stops the other person hearing a moral argument where you meant a practical one.',
  '⚠ **Distinguish what you would say from what you would not say unless asked.** *I would not explain the price list unless he asks.* That distinction is the most practically useful thing in this cycle, and nobody is taught it.',
  '⚠ **Hand the decision back and state the limit of your discretion.** *If he asks me directly I will tell him the truth including that I advised otherwise.* ⚠ A promise of silence you cannot keep is worth nothing; this version is keepable and says so.',
  '**Give a reason for the thing you would not do, and make it practical.** *Not because waiting is dishonest… but because the only valuable version is the one where we found it.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write advice to a colleague about a real decision (**50 words or more**). Use the frame.'));
out.push(p('**______________ — ______________.**   You asked what I would do, so here it is and then it is yours.   **I would ______________ today, before ______________.** Two reasons and they are both about ______________. ______________, so you have about ______________. And ______________.   **I would say ______________ and stop.** ⚠ I would not ______________ unless ______________, because ______________.   **What I would not do.** I would not ______________. Not because ______________ but because ______________.   ⚠ **It is yours.** If you ______________, I will not ______________, and if ______________ asks me directly I will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says hand the decision back and state the limit of your discretion. Yours promises not to mention it at all — what will you say if you are asked directly?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader act on this today without agreeing with the writer?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*If I were you I would…* with a time on it', ''],
  ['Reasons, and what kind of reasons they are', ''],
  ['What to say, and what not to say unless asked', ''],
  ['The decision handed back, with the limit of the writer\'s discretion', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last paragraph. The class says which promise the writer could actually keep.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about advice you were given and did not take (**100 to 140 words**). Say what it was, why you did not take it, what happened, and whether the adviser ever mentioned it again.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _why they did not take it_   ✓ _second conditional used for advice, not prediction?_   ? _did the adviser give a reason at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the advice come with a reason? ⚠ Usually one of three — and in the other two the reason, had it been given, would probably have changed the decision.'));
out.push(box('Homework', ['Write your final text. Then give one piece of advice to a colleague with a reason, a time and one *I would not*, and hand the decision back in those words (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.2 =======================
out.push(pb());
out.push(h2('8.2  If we changed it'));
out.push(p('**Function:** describing a hypothetical change   ·   **Grammar:** the second conditional, hypothetical   ·   **Pronunciation:** the two halves of a conditional'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing at your work you have often thought of changing. What would happen?'));
out.push(p('**b**  Which is the question that gets answered? _Should we move the Ghouta run? · If we moved the Ghouta run to Wednesday, what would stop working?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about moving the run?   **A** it would not work   **B** it would work and it would break two other things nobody has mentioned   **C** he does not mind'));
out.push(p('**b**  Listen again. **1** What question does Nour ask that gets the useful answer? **2** What does Abu Yasser say about being asked *would it work?*'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  "What would stop working?"', [
  ['Nour', 'If we moved the Ghouta run from Tuesday and Thursday to Wednesday and Saturday, what would stop working?'],
  ['Abu Yasser', 'That is a better question than the one I was asked last year.'],
  ['Nour', 'What were you asked last year?'],
  ['Abu Yasser', 'Would it work. And I said yes, because it would, and then two things broke and everybody was surprised.'],
  ['Nour', 'So what would stop working?'],
  ['Abu Yasser', 'Two things. The Saturday counter is one man, and if the van went out on a Saturday he would be on his own with the gate as well — and that is the morning the walk-in trade comes.'],
  ['Nour', 'And the second?'],
  ['Abu Yasser', 'Ms Shamsi\'s wrap comes in on Wednesday mornings. If the van were out, nobody would be here to take it off the lorry but me, and I cannot be at the gate and on the forklift.'],
  ['Nour', 'Neither of those is in anybody\'s plan.'],
  ['Abu Yasser', 'They are in mine. Nobody asked me what would break; they asked me whether it would work. ⚠ **Would it work is a question you can answer yes to and still be right, and it tells the person asking nothing at all.**'],
  ['Nour', 'And if we moved it to Wednesday and Friday instead?'],
  ['Abu Yasser', 'Then only the wrap breaks, and the wrap could come on a Thursday if anybody asked her. ⚠ Which nobody has, in four years, because the Wednesday delivery is in the standing order and the standing order is not a thing people look at.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The hypothetical second conditional — and the question to ask**',
  table(['Form', 'Example'], [
    ['**If** + past, **would** + infinitive', '**If** we **moved** the run, the counter **would be** one man.'],
    ['**If** + **were** (formal, all persons)', '**If** the van **were** out, nobody **would be** here.'],
    ['⚠ the question that works', '**What would stop working?**'],
    ['⚠ the question that does not', '~~Would it work?~~ — answerable *yes*, and useless'],
    ['the narrowed version', '**If** we moved it to Wednesday and **Friday**, only the wrap **breaks**.'],
  ], [2.3, 3]),
  '⚠ **Ask _what would stop working?_, never _would it work?_** The second can be answered *yes*, truthfully, by somebody who can also see two things that would break — ⚠ because they were asked a different question and they answered it.',
  '⚠ **Ask the person who would have to do it.** The two things that would break in this dialogue are both in Abu Yasser\'s head and in nobody\'s plan, and he is not withholding them: nobody asked.',
  '⚠ **Then narrow the proposal and ask again.** *Wednesday and Friday* breaks one thing instead of two, and the one thing turns out to be movable. **Two rounds of the same question is the whole technique.**',
  '⚠ **_If_ + past does not mean past time.** *If we moved the run* is about next month. The past form is what marks it as hypothetical, and ~~if we would move~~ is the error to drop.',
  '**Practise:** Ask *what would stop working?* for each, then narrow it. 1 moving a delivery day 2 closing at two on Thursdays 3 one price list for both sites 4 banking twice a week instead of daily 5 a second counter assistant',
  '**Useful phrases:**  If we moved…, what would stop working?  ·  If the van were out…  ·  nobody would be here to…  ·  and if we moved it to … instead?  ·  then only … breaks',
  '**Pronunciation – the two halves.** 🔊 **Track 8.4** Listen: _if we **moved** the run to Saturday // the counter **would be** one man_. A clear break between the two halves, and the stress on the verb in each. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a change and asks what would stop working; B is the person who would have to do it. Then narrow and ask again.'));
out.push(dlg(null, [
  ['A', 'If we __________, what would stop working?'],
  ['B', 'That is a better question than the one I was asked __________.'],
  ['A', 'What were you asked?'],
  ['B', 'Whether it would work. And I said yes, because it would, and then __________ broke.'],
  ['A', 'So what would stop working?'],
  ['B', 'Two things. __________. And __________.'],
  ['A', 'Neither of those is in anybody\'s plan.'],
  ['B', 'They are in mine. ⚠ Nobody asked me what would break.'],
  ['A', 'And if we __________ instead?'],
  ['B', 'Then only __________ breaks, and __________ could __________ if anybody asked.'],
]));
out.push(table(['Role card 1 — closing at two on Thursdays', 'Role card 2 — banking twice a week'], [[
  'B works the counter. What would break: the Thursday afternoon trade customers who come after their own closing, and the bank run, which is done at 2.30. Narrowed: closing at three breaks only the bank run, and the bank run could be Wednesday.',
  'B is the accountant. What would break: the float, which would have to double, and the insurance, which covers cash on the premises only to a figure nobody has looked at since 2019. ⚠ The second is the real finding and it is in a document nobody reads.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out both rounds for the class – **without the book**.'));
out.push(p('**Listener task:** write what would break in round one and in round two. ⚠ Then say whether the second thing was in anybody\'s plan — it almost never is, and it is almost never secret.'));
out.push(PHRASE_CARD(['What would stop working?', 'If the van were out…', 'nobody would be here to…', 'and if we … instead?', 'then only … breaks', 'not "would it work?"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** changes you have thought about. Ask the person who would have to do it, then narrow and ask again.'));
out.push(table(['The change', 'Who would have to do it', 'What would stop working', 'Narrowed — what breaks then'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.1, 1.8, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If we _______, _______ would stop working, and _______ would as well. If we _______ instead, only _______ breaks._'));
out.push(p('**Listener task:** count how many of the broken things were already known to one person and to nobody else. ⚠ That number is the argument for asking the question in this cycle rather than for better planning.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _if we would move the run_ and _if the van was out nobody will be here_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**IF WE MOVED THE GHOUTA RUN — what would stop working. 19 November.**',
  '**The proposal as it was put to me.** Ghouta from Tuesday and Thursday to Wednesday and Saturday, to free the van for the new Mezzeh counter on Tuesdays.',
  '**I asked the two people who would have to do it what would stop working.** Not whether it would work. Both said it would work, which is true and is why nobody has found these before.',
  '**Abu Yasser — two things.** If the van went out on a Saturday, the counter would be one man with the gate as well, on the one morning the walk-in trade comes. And Ms Shamsi\'s wrap arrives on Wednesday mornings; if the van were out, there would be nobody but him to take it off the lorry, and he cannot be at the gate and on the forklift.',
  '**Fadi — one thing, and it is not about the van.** On a Saturday the Ghouta road is closed at the market end until about eleven, so the run would start two hours later and finish after the shops shut. ⚠ **He has known this for four years and has never been asked about a Saturday.**',
  '**The narrowed proposal.** Wednesday and **Friday**. Abu Yasser\'s counter problem goes; Fadi\'s road problem goes. Only the wrap breaks, and the wrap would move to Thursday if anybody asked Ms Shamsi — ⚠ which nobody has in four years, because the Wednesday delivery is in a standing order and a standing order is not a thing anybody looks at.',
  '⚠ **What I would do, and what I would not.** I would put Wednesday and Friday to Mr Ayoub, with one telephone call to Ms Shamsi first so that the paper says *she has agreed* rather than *she would probably agree*. **I would not put the Saturday version to him at all**, even as a rejected option, because it would be read as the serious proposal with objections attached rather than as a thing I have already tested and dropped.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did both people say when asked whether it would work?'));
out.push(item('2', 'What is Fadi\'s objection, and how long has he known it?'));
out.push(item('3', 'Why would the writer not put the Saturday version forward even as a rejected option?'));
out.push(box('Writer\'s box', [
  '**A "what would stop working" note — five parts:** the proposal as it was put → ⚠ **the question you asked, and that you did not ask *would it work?*** → each person\'s objections, **attributed** → the narrowed proposal → what you would do, and what you would not put forward.',
  '**Say that both people said it would work.** *Which is true and is why nobody has found these before.* It removes any suggestion that somebody was obstructive.',
  '**Say how long an objection has been known and never asked about.** *He has known this for four years and has never been asked about a Saturday.* The finding is about the asking, not about Fadi.',
  '⚠ **Close the last gap before you write the paper.** *One telephone call to Ms Shamsi first so that the paper says she has agreed rather than she would probably agree.* ⚠ One call turns a hypothetical into a fact and it is almost always available.',
  '⚠ **Say what you would not put forward, and why.** *It would be read as the serious proposal with objections attached.* A rejected option listed next to a live one does not read as rejected.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note for a change at your own work (**50 words or more**). Use the frame.'));
out.push(p('**IF WE ______________ — what would stop working.**   **The proposal as it was put.** ______________.   **I asked ______________ what would stop working.** Not whether it would work. ______________ said it would work, which is true and is why ______________.   **______________ — ______________ things.** If ______________, ______________ would ______________. And ______________.   **______________ — one thing.** ⚠ ______________, and ______________ has known it for ______________.   **The narrowed proposal.** ______________. Only ______________ breaks, and ______________ would ______________ if anybody asked.   ⚠ **What I would do and what I would not.** I would ______________, with ______________ first. I would not ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says close the last gap before you write the paper. Yours says the supplier would probably agree — who could you telephone today?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **did the writer ask the people who would have to do it, or work it out at a desk?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The question *what would stop working*, asked of named people', ''],
  ['Objections attributed, with how long they have been known', ''],
  ['A narrowed proposal that breaks fewer things', ''],
  ['The last gap closed, and what the writer would not put forward', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the objection nobody had ever asked about. The class says how long each had been known.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a change at your work that broke something nobody had predicted (**100 to 140 words**). Say what broke, who had known it would, and what question would have found it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _who had known it would break_   ✓ _if + past, would + infinitive throughout?_   ? _what exactly were they asked at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many had somebody known? All three, usually. ⚠ And in how many had that person been asked *would it work?* — which they answered honestly.'));
out.push(box('Homework', ['Write your final text. Then ask one person at your work what would stop working if a change you are considering went ahead. Narrow it and ask again (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.3 =======================
out.push(pb());
out.push(h2('8.3  Would, might, could'));
out.push(p('**Function:** matching the strength of a claim to the evidence   ·   **Grammar:** *would · might · could*   ·   **Pronunciation:** the three modals said without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Predict one result of a change at your work. How sure are you — and what would make you surer?'));
out.push(p('**b**  What is the difference? _It would save two hours. · It might save two hours. · It could save two hours._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia object to in Nour\'s paper?   **A** the figures   **B** that *would* is used for something that has never been tried   **C** the length'));
out.push(p('**b**  Listen again. **1** What does she say *could* means that *might* does not? **2** What does she say happens to a paper that uses *would* for everything?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  "Which of these have you measured?"', [
  ['Nadia', 'Your paper says the new list would save two hours a week, would reduce pricing errors and would free Hala for the counter. Which of those three have you measured?'],
  ['Nour', 'The two hours. I timed it for three weeks.'],
  ['Nour', 'The errors I have not measured. There have been two this year and both were the old list.'],
  ['Nadia', 'Then that is **might**. Two is not a pattern.'],
  ['Nour', 'And freeing Hala?'],
  ['Nadia', 'Is that a thing that follows from the change, or a thing somebody would then have to decide?'],
  ['Nour', 'Somebody would have to decide. The hours exist but she would not automatically be on the counter.'],
  ['Nadia', 'Then it is **could**. *Could* is what becomes possible; *might* is what may happen on its own. ⚠ They are not two strengths of the same thing — *could* is about permission and possibility and usually needs a second decision, and if you write *would* for it somebody will think it is included.'],
  ['Nour', 'So one *would*, one *might* and one *could*.'],
  ['Nadia', 'And the *would* is the one he will read, because it is the only one you have measured. ⚠ **A paper with three _woulds_ in it reads as three guesses, and then the measured one is worth no more than the other two — which is a waste of your three weeks.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three strengths, three different promises**',
  table(['Modal', 'What it promises', 'Example'], [
    ['**would**', '⚠ you have **measured** it, or it follows arithmetically', 'It **would** save two hours a week.'],
    ['**might**', 'it may happen on its own; you have not measured it', 'It **might** reduce pricing errors.'],
    ['**could**', '⚠ it becomes **possible** — and usually needs a second decision', 'Hala **could** then be on the counter.'],
    ['**is likely to**', 'stronger than *might*, weaker than *would*', 'It **is likely to** shorten the queue.'],
    ['⚠ **we do not know**', 'the honest fourth option', 'Whether it reduces errors **we do not know**.'],
  ], [1.4, 2.5, 2.3]),
  '⚠ **_Would_ means you measured it** — or that it follows by arithmetic from something you measured. If you timed it for three weeks, write *would*. If you have two instances, write *might*.',
  '⚠ **_Could_ is not a weaker _might_.** It names something that **becomes possible** and usually needs a second decision by somebody. ⚠ If you write *would* where you mean *could*, the reader will think it is included in the proposal, and will be annoyed later for a reason they cannot name.',
  '⚠ **A paper with three _woulds_ reads as three guesses** — and then the one you measured is worth no more than the other two, which wastes the measuring. **The strong word only works if the weak ones are there too.**',
  '⚠ **Say _we do not know_ where you do not know.** It is a real option and it is more persuasive than *might*, because *might* can look like a guess dressed up.',
  '**Practise:** Choose *would*, *might*, *could* or *we do not know* and say why. 1 two hours saved, timed 2 fewer errors, two instances 3 somebody freed for other work 4 a shorter queue, never measured 5 a customer staying',
  '**Useful phrases:**  It would…, and I timed it.  ·  It might…  ·  It could then be possible to…  ·  It is likely to…  ·  Whether … we do not know.',
  '**Pronunciation – the three modals flat.** 🔊 **Track 8.6** Listen: _it **would** save two hours // it **might** reduce errors // Hala **could** then be on the counter_. ⚠ None of the three is emphasised; the emphasis goes on the thing, not on the degree of confidence. Repeat three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes three claims; B asks which have been measured and sorts them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your paper says __________, __________ and __________. Which have you measured?'],
  ['A', '__________. I __________ for __________.'],
  ['B', 'And __________?'],
  ['A', 'Not measured. There have been __________ this year.'],
  ['B', 'Then that is **might**. And __________ — does it follow from the change, or would somebody have to decide?'],
  ['A', 'Somebody would have to decide.'],
  ['B', 'Then it is **could**. ⚠ And the *would* is the one he will read, because it is the only one you measured.'],
]));
out.push(table(['Role card 1 — the second van', 'Role card 2 — the staggered lunch'], [[
  'Claims: it would restore four Ghouta days (arithmetic — would); it might bring back the two customers who halved their orders (not measured — might); it could allow a Saturday run (needs a decision about staffing — could).',
  'Claims: it would mean the telephone is answered from twelve to one (follows — would); it might recover the four lost customers (we do not know, and should say so); it could allow the counter to open earlier (a second decision — could).',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the three claims with the right modal. ⚠ Then find a claim that should be *we do not know* — there is usually one hiding inside a *might*.'));
out.push(PHRASE_CARD(['It would…, and I timed it.', 'It might…', 'It could then…', 'It is likely to…', 'Whether … we do not know.', 'which have you measured?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take one change at your work and make **five** claims about it, each with the right modal and the reason for that modal.'));
out.push(table(['The claim', 'would / might / could / we do not know', 'Why that word'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.3, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your five claims. Then say which one you have actually measured and how.'));
out.push(p('**Listener task:** count the *woulds* in the room and the measurements behind them. ⚠ The two numbers are usually very different, and nobody was exaggerating on purpose.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it would to save two hours_ and _it could be possible to being on the counter_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the claims page, and answer the questions.'));
out.push(box(null, [
  '**ONE DATED PRICE LIST — what it would, might and could do. 20 November.**',
  '**What it would do.** It **would** save about two hours a week at the counter. I timed the pricing of sixty-one orders across three weeks against both systems: an average of 1 minute 50 with two lists and 55 seconds with one. Sixty-one orders a week is about two hours. ⚠ **This is the only figure in this paper that I have measured, and it is the only one I would defend at a figure.**',
  '**What it might do.** It **might** reduce pricing errors. There have been two this year that I can identify and both involved a superseded list. ⚠ **Two is not a pattern** and I am not going to describe one error a year as a trend; if the list removes both, the saving is 46,000 and about a day of my time, in a year in which we may have had unusually few.',
  '**What it could do.** It **could** free Hala for about two hours a week at the counter — but that is a second decision and not part of this proposal. The hours would exist; whether they go to the counter, to the complaints book or to nothing at all is somebody else\'s choice and I have not assumed it.',
  '**What we do not know.** Whether a single list would shorten the queue at opening. I have not measured the queue and I cannot see how to, because the queue depends on the weather and the day of the month more than on us. ⚠ **It is in this paper as a thing we do not know rather than left out**, because somebody will otherwise ask whether it was considered.',
  '⚠ **One thing against.** With one list, a wrong list is wrong everywhere, and there is no second copy to catch it. **That risk did not exist before** and I have not found a way to remove it; printing on Fridays with two initials is the best I have, and it is a procedure rather than a safeguard.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which claim is measured, and how was it measured?'));
out.push(item('2', 'Why is the *could* claim not part of the proposal?'));
out.push(item('3', 'What new risk does the last paragraph name, and what does the writer say about the fix?'));
out.push(box('Writer\'s box', [
  '**A claims page — four headings in this order:** **what it would do** (with the measurement) → **what it might do** → **what it could do** (and that it is a second decision) → **what we do not know** → ⚠ **one thing against**.',
  '**Show the measurement.** *Sixty-one orders across three weeks: 1 minute 50 against 55 seconds.* ⚠ Then say it is the only measured figure, which protects it from being averaged with the guesses.',
  '**Refuse to call two instances a trend.** *Two is not a pattern and I am not going to describe one error a year as a trend.*',
  '⚠ **Put the things you do not know in, rather than leaving them out.** *It is in this paper as a thing we do not know rather than left out, because somebody will otherwise ask whether it was considered.*',
  '⚠ **End with one thing against, and do not solve it if you cannot.** *That risk did not exist before… printing on Fridays with two initials is the best I have, and it is a procedure rather than a safeguard.* ⚠ A paper with nothing against it has not been written by somebody who wanted to know.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the claims page for a change at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what it would, might and could do.**   **What it would do.** It **would** ______________. I measured ______________ by ______________. ⚠ This is the only figure I would defend.   **What it might do.** It **might** ______________. There have been ______________, and ⚠ ______________ is not a pattern.   **What it could do.** It **could** ______________ — but that is a second decision and not part of this proposal.   **What we do not know.** Whether ______________. I have not measured it because ______________.   ⚠ **One thing against.** ______________. That risk did not exist before and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says end with one thing against. Yours has nothing against it — what is worse after this change than before it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is every *would* measured?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One *would*, with its measurement shown', ''],
  ['*Might* where there is no pattern, and the refusal to call it one', ''],
  ['*Could* marked as a second decision', ''],
  ['A *we do not know*, and one thing against', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *one thing against*. The class says which paper they would act on — and it is one with a risk in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a change that was promised to do three things and did one (**100 to 140 words**). Say what was promised, what happened, and which of the three had ever been measured.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _which promise was kept_   ✓ _would / might / could matched to the evidence?_   ? _which of the three had anybody measured beforehand?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many had anything been measured beforehand? ⚠ Usually none — and the three promises were all made with *would*, by somebody honest, which is how a measured claim loses its value.'));
out.push(box('Homework', ['Write your final text. Then take one claim you have made at work and decide whether it is a *would*, a *might*, a *could* or a *we do not know*. Measure the *would* (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.4 =======================
out.push(pb());
out.push(h2('8.4  The conditions under which yes becomes yes'));
out.push(p('**Function:** attaching conditions to an agreement   ·   **Grammar:** *unless · as long as · provided that · on condition that*   ·   **Pronunciation:** the condition read so it is heard as part of the yes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a yes you have given at work that you later wished had a condition on it. What condition?'));
out.push(p('**b**  Which is a usable yes? _Yes, but it depends on a few things. · Yes, provided the order is in by Tuesday and the quantity is not more than forty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Shamsi want?   **A** a longer price hold   **B** a standing order she can plan around   **C** payment in advance'));
out.push(p('**b**  Listen again. **1** What two conditions does Nour attach, and what is each for? **2** What does Nour say about a condition nobody will check?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  "Yes, provided two things"', [
  ['Ms Shamsi', 'I can hold the Aleppo price for three months if I know what you will take.'],
  ['Nour', 'Then the answer is yes, provided two things, and I will put both in writing because they are mine to give.'],
  ['Ms Shamsi', 'Go on.'],
  ['Nour', 'Provided the quantity is forty rolls a month and not forty-five — I can defend forty every month of the year, including August.'],
  ['Ms Shamsi', 'And the second?'],
  ['Nour', 'As long as the delivery day moves from Wednesday to Thursday. That is not about the wrap; it is about a van.'],
  ['Ms Shamsi', 'Thursday is better for me. Nobody has asked me about the day in four years.'],
  ['Nour', 'I know, and that is our fault and not yours.'],
  ['Ms Shamsi', 'Would you like a third condition? That I tell you before the price moves rather than after.'],
  ['Nour', 'You already do that, which is why this conversation is possible at all. ⚠ And I would rather not write it down, because a condition nobody will check is a condition somebody will one day point to — and the only thing it would achieve is making a four-year habit look like an obligation.'],
  ['Ms Shamsi', 'Most people would write it down.'],
  ['Nour', 'Most people write down everything they can get and then nobody reads the page. ⚠ **Two conditions I will enforce are worth more than five I will not, and you will know which kind you are reading.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Conditions on an agreement**',
  table(['Form', 'Register', 'Example'], [
    ['**provided that**', 'written, firm', 'Yes, **provided** the quantity is forty a month.'],
    ['**as long as**', 'spoken, firm', '…**as long as** the delivery day moves to Thursday.'],
    ['**on condition that**', 'formal, contractual', '…**on condition that** notice is given in writing.'],
    ['**unless**', 'the exception', 'The price holds **unless** the quantity falls below thirty.'],
    ['⚠ what to drop', '—', '*yes, but it depends on a few things*'],
  ], [1.7, 1.2, 2.8]),
  '⚠ **Two conditions you will enforce beat five you will not.** A page of conditions nobody checks is a page nobody reads, and then the two that mattered are lost in it.',
  '⚠ **Do not write down a condition nobody will check.** It achieves one thing: it turns somebody\'s four-year habit into an obligation, and one day somebody points at it.',
  '⚠ **Say what each condition is for.** *That is not about the wrap; it is about a van.* A condition with its reason attached is accepted; a condition without one is negotiated.',
  '⚠ **Give the number first.** *Yes, provided two things* — then the two. The other person stops waiting for a third.',
  '⚠ **_Unless_ takes the positive**: *unless the quantity falls below thirty*, not ~~unless the quantity does not fall~~.',
  '**Practise:** Say yes with two conditions and what each is for. 1 a price hold 2 a standing order 3 a credit term 4 a delivery day 5 a return of goods',
  '**Useful phrases:**  Yes, provided two things.  ·  provided that…  ·  as long as…  ·  unless…  ·  That is not about …; it is about …  ·  I would rather not write that down.',
  '**Pronunciation – the condition inside the yes.** 🔊 **Track 8.8** Listen: _the answer is **yes** // provided the quantity is **forty** a month_. ⚠ The *yes* keeps its own stress; a condition said as a falling afterthought sounds like a refusal. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for something; B says yes with two conditions and the reason for each, and refuses to write a third. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I can __________ if I know __________.'],
  ['B', 'Then the answer is yes, provided two things, and I will put both in writing because they are mine to give.'],
  ['A', 'Go on.'],
  ['B', 'Provided __________ — I can defend __________ every month of the year.'],
  ['A', 'And the second?'],
  ['B', 'As long as __________. That is not about __________; it is about __________.'],
  ['A', 'Would you like a third? That __________.'],
  ['B', 'You already do that. ⚠ And I would rather not write it down, because __________.'],
]));
out.push(table(['Role card 1 — a credit term', 'Role card 2 — returns'], [[
  'A customer wants thirty days. B can give it provided the order is placed on a numbered form and not by telephone, and as long as the balance is clear at the month end. The offered third condition — that he tells them about a change of address — is a thing he always does.',
  'A customer wants to return unused stock. B can agree provided it is in the original packaging and as long as it comes back inside fourteen days. ⚠ The offered third — that he telephones first — is worth refusing, because B wants him to telephone and does not want it to become a ground for refusing a return.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the agreement for the class – **without the book**.'));
out.push(p('**Listener task:** write the two conditions and what each is for. ⚠ Then write the refused third and say what writing it down would have cost.'));
out.push(PHRASE_CARD(['Yes, provided two things.', 'provided that…', 'as long as…', 'unless…', 'That is about a van, not the wrap.', 'I would rather not write that down.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you are asked for. For each: yes with two conditions, what each is for, and one condition you would refuse to write.'));
out.push(table(['What they ask', 'Condition 1, and what it is for', 'Condition 2, and what it is for', 'One I would not write'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.6, 1.6, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yes, provided _______, which is about _______, and as long as _______, which is about _______. And I would not write down _______._'));
out.push(p('**Listener task:** count the conditions in the room that nobody would ever check. ⚠ Then ask who would be the first person to point at one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _provided that the quantity will be forty_ and _unless the quantity does not fall below thirty_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To Ms Dima Shamsi, Aleppo. 21 November. The three-month price.**',
  'Dear Ms Shamsi,',
  'Yes — and **provided two things**, both of which are mine to agree and both of which are in this letter so that neither of us has to remember a telephone call.',
  '**One. Forty rolls a month, not forty-five.** Forty is a figure I can defend in every month of the year including August, when our own trade halves. Forty-five would be comfortable for nine months and would be a conversation about August, and I would rather have a number that never needs a conversation.',
  '**Two. The delivery day moves from Wednesday to Thursday.** This is not about the wrap and it is not about you: our second van is off the road and the Wednesday morning lorry and the Ghouta run want the same two men. **If the van comes back, I will tell you and the day can move back if you prefer Wednesday** — and I am putting that in writing as well, because a condition that only runs one way is not a condition, it is a term.',
  '**What is not in this letter, and why.** You offered a third condition — that you tell us before a price moves rather than after. ⚠ **You have done that for four years and I would rather not write it down.** Written down it stops being something you do and becomes something you owe, and the only use anybody would ever make of the sentence is to point at it on a day when the market has moved faster than the post. **The habit is worth more to us than the clause.**',
  '**And one thing we got wrong, which this letter corrects.** Nobody has asked you about the delivery day in four years. It was Wednesday because it was Wednesday in 2021, and Thursday suits you better, which we would have known at any point by asking.',
  'Yours sincerely, **Nour Mansour**, Administration Coordinator',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is forty preferred to forty-five?'));
out.push(item('2', 'What does the writer add to the second condition, and what reason is given?'));
out.push(item('3', 'What third condition is refused, and what is said about writing it down?'));
out.push(box('Writer\'s box', [
  '**A letter of agreement with conditions — five parts:** **yes, and the number of conditions** → each condition **with what it is for** → ⚠ **the condition that runs both ways** → ⚠ **what is not in the letter, and why** → one thing you got wrong.',
  '**Prefer the figure that never needs a conversation.** *Forty-five would be comfortable for nine months and would be a conversation about August.* ⚠ That is a real and transferable principle: a condition is only as good as its worst month.',
  '⚠ **Make a condition run both ways.** *If the van comes back I will tell you and the day can move back.* ⚠ *A condition that only runs one way is not a condition, it is a term* — and saying so is what makes the rest of the letter credible.',
  '⚠ **Say what you are leaving out and why.** *Written down it stops being something you do and becomes something you owe.* Most writers add every clause they can get; this paragraph is the one that distinguishes a letter from a land grab.',
  '**Admit the small thing you got wrong.** *Nobody has asked you about the delivery day in four years.* It costs nothing, it is nearly always available, and it is the reason the next letter gets read.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter of agreement with conditions (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________.**   Yes — and **provided ______________ things**, both of which are mine to agree.   **One. ______________.** ______________ is a figure I can defend ______________. ______________ would be a conversation about ______________.   **Two. ______________.** This is not about ______________; it is about ______________. **If ______________, I will tell you and ______________** — because a condition that only runs one way is not a condition.   ⚠ **What is not in this letter.** You offered ______________. You have done that for ______________ and I would rather not write it down, because ______________.   **And one thing we got wrong.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says make a condition run both ways. Both of yours run one way — what happens on your side if the reason for the condition goes away?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would you sign this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Yes, with the number of conditions given first', ''],
  ['Each condition with what it is for', ''],
  ['One condition that runs both ways', ''],
  ['Something deliberately left out, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what is not in this letter*. The class says which clause they were right to leave out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an agreement at your work that has a clause nobody has ever used (**100 to 140 words**). Say what it is, why it was put in, and what would happen if somebody pointed at it tomorrow.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _why the clause was put in_   ✓ _provided that / as long as / unless used correctly?_   ? _who would point at it, and what would it get them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these clauses protect anybody? ⚠ Some do and some are the residue of an argument nobody remembers — and the second kind are the ones that get used, because the first kind everybody respects.'));
out.push(box('Homework', ['Write your final text. Then say yes to something with two conditions, each with its reason, and make one of them run both ways (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.5 =======================
out.push(pb());
out.push(h2('8.5  Advice upwards'));
out.push(p('**Function:** advising somebody senior   ·   **Grammar:** *you might want to · it may be worth · one option would be*   ·   **Pronunciation:** the level tone that is neither timid nor instructing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you believe your employer should do and have not said. What has stopped you?'));
out.push(p('**b**  Which would you rather receive from somebody who works for you? _I think you should write to the bank. · You might want to write to the bank before the 30th, because the facility is reviewed then and we have three months of better figures._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour advise Mr Ayoub to do?   **A** write to the bank before the review date   **B** replace the second van   **C** take on a second counter assistant'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub say about the form of words she used? **2** What does he say people usually do instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  "You might want to"', [
  ['Nour', 'You might want to write to the bank before the 30th. Two reasons and a figure.'],
  ['Mr Ayoub', 'Go on.'],
  ['Nour', 'The facility is reviewed on the 30th, and they review on the last three months, which are the best three months since 2022 — the counter is up about a fifth and the second site is trading. If the letter arrives after the review, the next one is in April.'],
  ['Mr Ayoub', 'And the figure?'],
  ['Nour', 'The three months are 14.2 million against 11.6 for the same quarter last year. The letter is one page and I have drafted it; it is in your tray and it is not signed.'],
  ['Mr Ayoub', 'You have drafted it and not signed it and not sent it.'],
  ['Nour', 'It is your letter and your bank.'],
  ['Mr Ayoub', 'Do you know what almost everybody who has ever worked for me does with a thing like this?'],
  ['Nour', 'Tells you about it in March.'],
  ['Mr Ayoub', 'Or tells me now and leaves out the draft, so that saying yes costs me an evening. ⚠ Or writes it, signs it in my name and tells me afterwards, which has happened twice and both times I would have sent the letter and both times I was angry for a week about something else entirely.'],
  ['Nour', 'What was the something else?'],
  ['Mr Ayoub', 'Not being able to say no without a fuss. ⚠ **You might want to** is not politeness — it is the form of words that leaves me able to say no in one syllable, and because of that I have said yes to about four things this year that I would have argued with.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Advising upwards — advice that leaves a one-syllable no**',
  table(['Form', 'Example'], [
    ['**You might want to…**', '**You might want to** write to the bank before the 30th.'],
    ['**It may be worth…**', '**It may be worth** telephoning him first.'],
    ['**One option would be…**', '**One option would be** to send it unsigned.'],
    ['⚠ **+ two reasons and a figure**', '…the review is on the 30th; the quarter is 14.2 against 11.6.'],
    ['⚠ **+ the work already done**', 'I have drafted it; it is in your tray and it is not signed.'],
  ], [2.2, 3.1]),
  '⚠ **_You might want to_ is not politeness.** It is the form of words that leaves the other person able to say no **in one syllable**, without a discussion about why they are saying it. ⚠ And people who can say no cheaply say yes more often.',
  '⚠ **Do the work and do not take the decision.** *I have drafted it; it is in your tray and it is not signed.* Advice that costs the recipient an evening is advice they will postpone; advice with the evening already spent gets decided today.',
  '⚠ **Two reasons and a figure.** The reasons make it a decision and the figure makes it this week\'s decision.',
  '⚠ **Never sign in somebody\'s name and tell them afterwards**, even when they would have agreed. ⚠ What is resented is not the letter — it is losing the ability to say no without a fuss, and that resentment attaches itself to something else and lasts a week.',
  '**Practise:** Advise upwards with two reasons, a figure, and the work done. 1 a letter to the bank 2 replacing a vehicle 3 raising a limit 4 writing to a late supplier 5 a price review',
  '**Useful phrases:**  You might want to…  ·  It may be worth…  ·  One option would be…  ·  I have drafted it and it is not signed.  ·  It is your letter.',
  '**Pronunciation – the level tone.** 🔊 **Track 8.10** Listen: _you might want to write to the bank before the thirtieth_. ⚠ Level, unhurried, no rise at the end and no fall. A rise makes it a request for permission to advise; a fall makes it an instruction. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A advises upwards; B is senior and may say no. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You might want to __________ before __________. Two reasons and a figure.'],
  ['B', 'Go on.'],
  ['A', '__________, and __________. If __________, the next __________ is __________.'],
  ['B', 'And the figure?'],
  ['A', '__________ against __________. I have __________; it is in your tray and it is not signed.'],
  ['B', 'You have done it and not sent it.'],
  ['A', 'It is your __________.'],
  ['B', '⚠ Which is why I am going to say yes rather than argue about it.'],
]));
out.push(table(['Role card 1 — the second van', 'Role card 2 — B says no'], [[
  'Advise replacing the van. Reasons: Ghouta halved for four months; two customers have halved their orders. Figure: about 400,000 a month against a repair quote of 1.9 million. Work done: three quotes, in the tray.',
  'Advise writing to the late supplier. ⚠ B says no, in one syllable, and does not explain. A must accept it in one sentence without arguing and without sulking — *then I will leave it* — and that is the harder performance.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the advice for the class – **without the book**.'));
out.push(p('**Listener task:** write the two reasons, the figure and the work done. ⚠ For role card 2, write what A said after the no — it should be one sentence.'));
out.push(PHRASE_CARD(['You might want to…', 'It may be worth…', 'One option would be…', 'two reasons and a figure', 'drafted and not signed', 'It is your letter.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you believe should be done above your level. Prepare each as advice upwards.'));
out.push(table(['What they might want to do', 'Reason 1', 'Reason 2', 'The figure', 'The work I have done'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.3, 1.1, 1.1, 0.8, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Give one piece of advice upwards to the class as if to the person who decides. Then say when you will actually give it.'));
out.push(p('**Listener task:** count how many pieces of advice came with the work already done. ⚠ Then ask which of them would take an evening to say yes to.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you might want to writing to the bank_ and _it may be worth to telephone him_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**Mr Ayoub — the bank facility. 22 November. One page, and the draft is behind it.**',
  '**You might want to write to the bank before the 30th.** The facility is reviewed on the 30th and they review on the last three months. Those three months are **14.2 million against 11.6** for the same quarter last year: the counter is up about a fifth and the Baghdad Street site has traded every week since 8 June.',
  '**Why the date matters more than the figures.** If the letter arrives after the review, the next one is April, and by April the comparison is against a quarter that included the second site, so the improvement will look like half of what it is. ⚠ **The figures are as good as they are going to look for about five months.**',
  '**What I have done and what I have not.** The letter is drafted and is behind this page. It is one side, it says what the three months were and what they were against, and it asks for the facility to be restored to the 2022 level and not more. **It is not signed and I have not telephoned anybody.**',
  '**What I would do differently from the draft, if it were mine.** I would not mention the second van in it. The van is the strongest argument we have for needing the facility and the weakest thing to put in a letter asking for it, because a letter that says *we cannot afford to repair a vehicle* answers a question they have not asked. ⚠ **I have left it out of the draft and I am telling you that I have, because you may disagree and it is the only real judgement in the letter.**',
  '**And if you would rather not.** Then I would not send anything and I would not raise it again before April. ⚠ **There is nothing behind this note.** I am not building to a conversation about the van and I am not going to be disappointed; the review date is a fact and you now have it, which was the whole of my purpose.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer say the date matters more than the figures?'));
out.push(item('2', 'What has been left out of the draft, and why?'));
out.push(item('3', 'What does the last paragraph say, and what is it for?'));
out.push(box('Writer\'s box', [
  '**A note advising upwards — five parts:** ⚠ **you might want to** + the action and the date → the reasons and the figure → ⚠ **what I have done and what I have not** → the one real judgement in it, flagged → ⚠ **and if you would rather not.**',
  '**Separate the date from the figures and say which matters more.** *The figures are as good as they are going to look for about five months.* A reason to act **this week** is worth more than a reason to act.',
  '⚠ **State the limits of what you have done.** *It is not signed and I have not telephoned anybody.* The two negatives are what make the positives acceptable.',
  '⚠ **Flag the one real judgement and invite disagreement with it.** *I have left it out and I am telling you that I have, because you may disagree.* A note with one flagged judgement reads as honest; a note with none reads as a decision already taken.',
  '⚠ **End with _and if you would rather not_ — and mean it.** *There is nothing behind this note. I am not building to a conversation about the van and I am not going to be disappointed.* ⚠ That paragraph is why the next piece of advice gets read.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note advising upwards (**50 words or more**). Use the frame.'));
out.push(p('**______________ — ______________.**   **You might want to ______________ before ______________.** ______________, and ______________. ______________ against ______________.   **Why the date matters more than the figures.** If ______________, then ______________. ⚠ ______________.   **What I have done and what I have not.** ______________ is ______________. **It is not ______________ and I have not ______________.**   **The one real judgement in it.** I would ______________, because ______________. ⚠ I am telling you because you may disagree.   ⚠ **And if you would rather not.** Then I would ______________ and I would not raise it again before ______________. There is nothing behind this note.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says end with *and if you would rather not* and mean it. Yours ends by asking for a decision by Friday — what happens if the answer is no?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader say no to this in one syllable?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*You might want to* + an action and a date', ''],
  ['Two reasons and a figure', ''],
  ['What has been done **and what has not**', ''],
  ['One flagged judgement, and a real *if you would rather not*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last paragraph. The class says which one they believe.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you believe your employer should do and have not said (**100 to 140 words**). Say what it is, what has stopped you, and what the note would look like if you wrote it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what has stopped them_   ✓ _you might want to / it may be worth?_   ? _what work could they do first so that saying yes costs nothing?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What has stopped people? ⚠ Rarely fear of the answer — usually that the advice would cost the recipient an evening, and nobody wants to be the person who creates an evening.'));
out.push(box('Homework', ['Write your final text. Then write one piece of advice upwards with the work done, the draft unsigned, and a real *if you would rather not*. Decide whether to give it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.6 =======================
out.push(pb());
out.push(h2('8.6  Advice to a stranger'));
out.push(p('**Function:** advising somebody you have never met   ·   **Grammar:** the hedged recommendation   ·   **Pronunciation:** hedges that do not sound evasive'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody telephones your work for advice and you have never met them. What do you need to know before you answer?'));
out.push(p('**b**  Which is better? _You need the heavy-duty wrap. · From what you have told me the heavy-duty is probably right, but it depends on one thing I cannot see: how far the pallets travel._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the caller want?   **A** a price   **B** advice on which wrap to buy   **C** a delivery date'));
out.push(p('**b**  Listen again. **1** What does Nour say she cannot see? **2** What does she recommend doing before he buys the larger quantity?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  "From what you have told me"', [
  ['Caller', 'I need wrap for pallets of tinned goods. Which one do I want?'],
  ['Nour', 'Three questions first, if I may. How far do the pallets travel, are they double-stacked, and is anything loaded by hand at the other end?'],
  ['Caller', 'Aleppo. Not stacked. Hand-unloaded, yes.'],
  ['Nour', 'Then from what you have told me the standard 17-micron is probably right and the heavy-duty would be money you do not need to spend. Tins are heavy and stable and the load is not stacked, so the wrap is holding a shape rather than carrying a weight.'],
  ['Caller', 'The man I spoke to yesterday said heavy-duty.'],
  ['Nour', 'He may know something I do not — did he ask about stacking?'],
  ['Caller', 'He did not ask me anything.'],
  ['Nour', 'Then I would not weight his answer above mine, and I would not weight mine too heavily either, because there is one thing I cannot see and it matters: how the pallets are handled at the Aleppo end. ⚠ **If they are dragged rather than lifted, the standard will tear at the base and the heavy-duty will not, and nobody on a telephone can know that.**'],
  ['Caller', 'So what do I do?'],
  ['Nour', 'Buy four rolls of the standard, not forty. Send one load. If it arrives without tearing, the standard is right and you have saved about a third. If it tears at the base, you know something about Aleppo that nobody told you and the heavy-duty is worth it.'],
  ['Caller', 'You have just talked yourself out of a larger order.'],
  ['Nour', 'For about a fortnight. ⚠ **And if the four rolls are right, you will buy forty of something from me rather than four hundred of something from somebody else once.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The hedged recommendation — and the limited trial**',
  table(['Form', 'What it does', 'Example'], [
    ['**Three questions first, if I may.**', 'earns the right to advise', 'How far, stacked, hand-unloaded?'],
    ['**From what you have told me…**', 'marks the basis', '**From what you have told me** the standard is probably right.'],
    ['**it depends on one thing I cannot see**', 'names the gap', '…how the pallets are handled at the other end.'],
    ['⚠ **the limited trial**', 'makes the advice safe to take', 'Buy four rolls, not forty. Send one load.'],
    ['**he may know something I do not**', 'the honest treatment of other advice', 'Did he ask about stacking?'],
  ], [2.1, 1.6, 2.4]),
  '⚠ **Ask before you advise, and say how many questions.** *Three questions first, if I may* is accepted; an unannounced interrogation is not, and advice given without questions is worth what it cost.',
  '⚠ **Name the one thing you cannot see.** *How the pallets are handled at the Aleppo end.* ⚠ A recommendation with its blind spot named is stronger than one without, because the listener can go and look at exactly that.',
  '⚠ **Recommend a limited trial, not a decision.** *Four rolls, not forty.* It converts advice you cannot be sure of into advice that is safe to take, and it is the only move in this cycle that costs the adviser anything.',
  '⚠ **Treat the other adviser fairly, and test their basis.** *He may know something I do not — did he ask about stacking?* ⚠ Attacking a competitor\'s advice loses; asking what they asked wins.',
  '⚠ *Probably*, *from what you have told me* and *it depends on* are hedges that **add** information. ~~It should be all right~~ and ~~I think it will be fine~~ are hedges that subtract it, and they are what people mean by evasive.',
  '**Practise:** Advise a stranger: three questions, the basis, the blind spot, a limited trial. 1 wrap 2 a shelving load 3 a delivery day 4 a quantity 5 a payment method',
  '**Useful phrases:**  Three questions first, if I may.  ·  From what you have told me…  ·  it depends on one thing I cannot see  ·  Buy four, not forty.  ·  He may know something I do not.',
  '**Pronunciation – hedges that do not sound evasive.** 🔊 **Track 8.12** Listen: _from what you have told me // the standard is **probably** right_. ⚠ *Probably* carries a clear stress. A mumbled hedge sounds like a refusal to commit; a stressed one sounds like precision. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones for advice; B asks three questions, advises with the basis and the blind spot, and offers a limited trial. Then swap.'));
out.push(dlg(null, [
  ['A', 'I need __________. Which one do I want?'],
  ['B', 'Three questions first, if I may. __________, __________, and __________?'],
  ['A', '__________. __________. __________.'],
  ['B', 'Then from what you have told me __________ is probably right and __________ would be money you do not need to spend, because __________.'],
  ['A', 'The man I spoke to yesterday said __________.'],
  ['B', 'He may know something I do not — did he ask about __________?'],
  ['A', 'He did not ask me anything.'],
  ['B', 'Then there is one thing I cannot see and it matters: __________. ⚠ Buy __________, not __________.'],
]));
out.push(table(['Role card 1 — a shelving load', 'Role card 2 — a quantity'], [[
  'A wants shelving for a store room. B\'s three questions: what goes on it, how high, and is the floor level? The blind spot: the wall, which B cannot see and which decides whether it can be fixed back. Trial: one bay, not six.',
  'A wants to buy a year of packaging at a held price. ⚠ B should advise against it: three questions about how the trade has moved, then *buy a quarter, not a year*, because a held price is only a bargain if the market rises and A cannot know that either.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the three questions, the blind spot and the trial. ⚠ Then say what the adviser gave up by recommending the trial.'));
out.push(PHRASE_CARD(['Three questions first, if I may.', 'From what you have told me…', 'one thing I cannot see', 'Buy four, not forty.', 'He may know something I do not.', 'did he ask about…?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things strangers ask you about. Prepare each: three questions, the basis, the blind spot, the limited trial.'));
out.push(table(['What they ask', 'My three questions', 'The one thing I cannot see', 'The limited trial'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.8, 1.6, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They ask _______. I ask _______, _______ and _______. From what they tell me, _______ — but I cannot see _______, so I would say buy _______ and not _______._'));
out.push(p('**Listener task:** count how many of the room\'s limited trials cost the adviser money this month. ⚠ All of them — which is the point, and it is worth being explicit that this cycle is about a trade.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _from what you told to me_ and _it depends of one thing_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**To Mr Jamal Rifai, Aleppo. 23 November. Wrap for tinned goods — following your telephone call.**',
  'Dear Mr Rifai,',
  '**What I am recommending, and what it rests on.** From what you told me — Aleppo, not double-stacked, hand-unloaded — the standard 17-micron is probably right, and the heavy-duty would be about a third more for strength your load does not need. Tins are heavy and stable, so the wrap is holding a shape rather than carrying a weight.',
  '**The one thing I cannot see.** How the pallets are handled at the Aleppo end. If they are dragged across a floor rather than lifted, the standard will tear at the base and the heavy-duty will not. ⚠ **Nobody on a telephone can know that, including the man you spoke to on Monday and including me.** If you can find out before you order, it is worth more than either of our opinions.',
  '**What I would do about that.** **Four rolls of the standard, not forty.** Send one load to Aleppo and look at the base of the wrap when it arrives. If it is intact, the standard is right and you have saved about a third on everything you buy after that. If it has torn, you have learned something about the Aleppo end that nobody told you, and the heavy-duty is worth the money.',
  '⚠ **What this costs me, so that you can weigh my advice.** You telephoned about forty rolls and I am proposing four. I would rather you bought four of the right thing than forty of the wrong one, but you are entitled to know that my recommendation is not disinterested in the way it might look: ⚠ **a customer who finds out that the cheap one works buys from me again, and a customer sold the expensive one and never told why does not.**',
  '**Prices, both, so that you can decide without telephoning again.** Standard 17-micron: 38,000 a roll, four rolls 152,000. Heavy-duty: 51,000 a roll. ⚠ Held fourteen days from this letter whichever you choose.',
  'Yours sincerely, **Nour Mansour**, Administration Coordinator',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the letter say nobody on a telephone can know?'));
out.push(item('2', 'What does the writer say about her own interest in the advice?'));
out.push(item('3', 'Why are both prices given?'));
out.push(box('Writer\'s box', [
  '**A letter of advice to somebody you have not met — five parts:** the recommendation **and what it rests on** → ⚠ **the one thing you cannot see** → the limited trial → ⚠ **what the advice costs you** → both prices, so they can decide without telephoning again.',
  '**Repeat back what they told you.** *From what you told me — Aleppo, not double-stacked, hand-unloaded.* It shows the basis and lets them correct it in one line if you heard wrong.',
  '⚠ **Include the other adviser in your own blind spot.** *Nobody on a telephone can know that, including the man you spoke to on Monday and including me.* ⚠ It is fairer and far more persuasive than disagreeing with him.',
  '⚠ **Say what the advice costs you, and do not claim to be disinterested.** *A customer who finds out that the cheap one works buys from me again.* Claiming no interest is never believed; naming the interest is.',
  '**Give both prices.** A letter that recommends one thing and prices only that thing is a letter that wants a decision rather than a customer.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter of advice to somebody you have not met (**50 words or more**). Use the frame.'));
out.push(p('**To ______________. ______________.**   **What I am recommending, and what it rests on.** From what you told me — ______________ — ______________ is probably right, and ______________ would be ______________ for ______________ you do not need.   ⚠ **The one thing I cannot see.** ______________. If ______________, then ______________. **Nobody on a telephone can know that, including ______________ and including me.**   **What I would do about that.** ______________, not ______________. ______________ and look at ______________.   ⚠ **What this costs me.** You asked about ______________ and I am proposing ______________. ______________.   **Both prices.** ______________ and ______________. Held ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what the advice costs you. Yours says you only want what is best for the customer — what do you actually gain if they take it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader act on this without telephoning back?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The basis repeated back, so it can be corrected', ''],
  ['The one thing the writer cannot see — and the other adviser inside it', ''],
  ['A limited trial, with what to look at', ''],
  ['What the advice costs the writer, and both prices', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what this costs me*. The class says which letter they would buy from.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about advice you were given by somebody selling something (**100 to 140 words**). Say what they recommended, whether they asked you anything first, and whether it turned out to be right.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _whether they asked anything first_   ✓ _hedges that add information rather than subtract it?_   ? _did the adviser have an interest, and did they say so?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the seller ask a question first? ⚠ Usually one of three — and that one is remembered years later, by name, which is the commercial argument for the whole cycle.'));
out.push(box('Homework', ['Write your final text. Then answer one real enquiry with three questions, a named blind spot and a limited trial (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 8.7 =======================
out.push(pb());
out.push(h2('8.7  Review & Mediate: two options, and what I would do'));
out.push(p('**Function:** putting options to somebody who must decide   ·   **Review:** advice to a peer · the hypothetical · *would/might/could* · conditions · advice upwards · advice to a stranger'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What two things make advice to a peer usable?',
  '**2** What is the question to ask about a change — and the one not to ask?',
  '**3** *Would*, *might*, *could* — what does each promise?',
  '**4** Why not write down a condition nobody will check?',
  '**5** What does *you might want to* leave the other person able to do?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask for that is not in the paper?   **A** more figures   **B** the third option   **C** a decision'));
out.push(p('**b**  Listen again. **1** What is the third option, and what does he say its cost is? **2** What does he say about a paper with two options?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  "Where is the third one?"', [
  ['Nour', 'Two options on the van. Repair it at 1.9 million, or hire for three months at 600,000 a month.'],
  ['Mr Ayoub', 'Where is the third one?'],
  ['Nour', 'There are only two.'],
  ['Mr Ayoub', 'There are always three. The third is do nothing, and you have left it out because you do not want it.'],
  ['Nour', 'Doing nothing costs 400,000 a month in halved orders.'],
  ['Mr Ayoub', 'Does it? You told me in September that two customers had halved their orders. Have they halved them again since?'],
  ['Nour', '…No. It has been flat since September.'],
  ['Mr Ayoub', 'So the 400,000 happened once and has not grown. Which makes doing nothing a real option rather than a straw man, and it makes your paper better and not worse.'],
  ['Nour', 'It also makes the hire look worse, because 600,000 a month to recover 400,000 is not a saving.'],
  ['Mr Ayoub', 'Now you have a paper. ⚠ And here is why I always ask. **A paper with two options in it has already decided, and I can either agree with it or have an argument — and I have been having that argument since 1998 and I usually lose it, because the person who wrote the paper has thought about it for a week and I have had it for four minutes.**'],
  ['Nour', 'So the third option is for you.'],
  ['Mr Ayoub', 'The third option is for **you**, because with it in you found out that the hire is not worth it, and you found that out before I did. ⚠ **Without it you would have won, and we would have hired a van.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – putting options to somebody who must decide**',
  table(['The three', 'What each needs'], [
    ['**Option A** — the change', 'a cost, a date, and what it would do'],
    ['**Option B** — the other change', 'the same, and why it is not A'],
    ['⚠ **Option C — do nothing**', '⚠ **costed honestly**, not as a straw man'],
    ['**What I would do**', 'one of the three, named, with the reason'],
  ], [1.7, 4]),
  '⚠ **There are always three options and the third is do nothing.** It is always available, it is sometimes right, and it has a cost nobody writes down.',
  '⚠ **Cost the do-nothing option honestly, which usually means smaller than you first wrote.** *The 400,000 happened once and has not grown.* A straw man third option is worse than none, because the reader can see it is one.',
  '⚠ **A paper with two options has already decided**, and then the reader can only agree or argue — and the writer usually wins that argument, having had a week to the reader\'s four minutes. ⚠ **That is not a victory**, and in this dialogue the honest third option is what saves the company from the writer\'s own recommendation.',
  '⚠ **Then say what you would do.** Three options and no recommendation is not neutrality; it is handing back the work.',
  '**Practise:** Put three options with costs, cost the do-nothing honestly, and say what you would do.',
  '**Useful phrases:**  Option A… Option B… Option C is do nothing.  ·  Doing nothing costs…  ·  which has not grown since…  ·  What I would do is…  ·  and the reason is…',
  '**Pronunciation – reading three options aloud.** 🔊 **Track 8.14** Listen to three options read with equal weight and a pause between each. ⚠ A third option read faster or quieter than the first two is heard as a formality, and the whole purpose of it is lost. Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A presents two options; B asks for the third and tests its cost. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Two options on the counter telephone: an answering machine at 180,000, or a staggered lunch at no cost. ⚠ B asks for the third, and the do-nothing cost turns out to be four customers in one month and none since — which makes the staggered lunch obviously right and the machine unnecessary.',
  'Two options on the fourth store room: enter it on the system (three days of somebody\'s time) or go back to paper for all four rooms. ⚠ The do-nothing option is the real one here, and its cost is growing, which is the opposite of the dialogue and should be said.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write all three options with their costs. ⚠ Then say whether the do-nothing cost is growing or flat — it changes the answer completely and it is almost never asked.'));
out.push(PHRASE_CARD(['Option A… B… C is do nothing.', 'Doing nothing costs…', 'which has not grown since…', 'What I would do is…', 'two options has already decided', 'is it growing or flat?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a decision. Put **three** options to **two** different people and collect what each asks.'));
out.push(table(['Who I put it to', 'Their first question', 'What it changed', 'What I would now do'], [['', '', '', ''], ['', '', '', '']], [1.1, 1.4, 1.4, 1.3]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the third option changed. This is the **eighth** unit of this book, and the thing nobody writes down is the one the unit has been circling: **a paper with two options has already decided, and the person who wrote it will win the argument because they have had a week and the reader has had four minutes — so the only protection against your own recommendation is the option you did not want.**'));
out.push(p('_I had _______ and _______. The third was _______, and costing it honestly showed _______, which is the opposite of what I had assumed._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _options paper · trade-off · one-off cost · payback · reversible · opportunity cost._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 1)', 10));
out.push(p('⚠ **This unit practises Part 1 again, at Unit 8 difficulty: notices whose meaning turns on a modal or a condition.** For each question, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _The price holds fourteen days unless the quantity falls below thirty rolls._',
  '**2**  _One dated list would save about two hours a week. It might reduce errors; we have two instances and that is not a pattern._',
  '**3**  _Four rolls, not forty. If the base is intact when it arrives, the standard is right._',
  '**4**  _You might want to write before the 30th. The letter is drafted and is not signed._',
  '**5**  _Hire: 600,000 a month. Doing nothing: 400,000 once, flat since September._',
], 'FFFFFF', C.navy));
[
  '**1**   **A** Below thirty rolls the fourteen days do not apply.   **B** The price always holds fourteen days.   **C** The quantity must be thirty rolls.',
  '**2**   **A** The error reduction has been measured.   **B** The time saving has been measured and the error reduction has not.   **C** Neither has been measured.',
  '**3**   **A** Buy forty and check the first load.   **B** The standard wrap is certainly right.   **C** Buy a small quantity and decide from what arrives.',
  '**4**   **A** The writer has sent the letter.   **B** The writer wants the reader to draft a letter.   **C** The work is done and the decision is not taken.',
  '**5**   **A** Hiring is cheaper than doing nothing.   **B** Doing nothing is cheaper than hiring.   **C** The two cost the same.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: putting three options to somebody who must decide.',
  'The shape: **three options with costs** · ⚠ **the do-nothing costed honestly** · **what you would do**.',
  '⚠ **In eighty words the third option still goes in.** It is one clause — *or nothing, which costs X and has not grown* — and leaving it out to save six words is the one cut that changes the paper.',
  '⚠ End with your own recommendation. Three options and no view is not neutrality; it is handing the work back to somebody with four minutes.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A decision at your work has two obvious options. Write to the person who decides (**60 to 80 words**). Give **three options with costs**, ⚠ **cost the do-nothing honestly**, and say **what you would do**.'));
out.push(p('______________, three options on ______________. One: ______________, at ______________. Two: ______________, at ______________. Three: nothing, which costs ______________ and has ______________ since ______________. What I would do is ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, each with a cost', ''],
  ['The do-nothing costed, and whether it is growing or flat', ''],
  ['A recommendation, with a reason', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a full options paper for a real decision (**100 to 140 words**): three options with costs and dates, one measured *would*, one *might*, one *could*, the do-nothing costed honestly, one thing against your own recommendation, and what you would do.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take a decision at your work where you have two options, cost the third honestly, and see whether it changes your answer (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  If I ___ you I would telephone him today.   a) was   b) were   c) am',
  '2  If we ___ the run to Wednesday, the counter would be one man.   a) moved   b) would move   c) move',
  '3  It ___ save two hours a week — I timed it for three weeks.   a) might   b) could   c) would',
  '4  It ___ reduce errors, but there have only been two and that is not a pattern.   a) might   b) would   c) will',
  '5  Hala ___ then be on the counter, but that is a second decision.   a) would   b) could   c) must',
  '6  Yes, ___ the quantity is forty a month.   a) provided   b) unless   c) despite',
  '7  The price holds ___ the quantity falls below thirty.   a) provided   b) as long as   c) unless',
  '8  You ___ want to write to the bank before the 30th.   a) will   b) might   c) are going to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 8.15** Listen to the exchange. Complete the note.   Option A, with its cost: ______   Option B, with its cost: ______   Option C: ______   Its cost, and growing or flat: ______   What the third option changed: ______'));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Nour', 'Two options on the van. Repair it at 1.9 million, or hire for three months at 600,000 a month.'],
  ['Mr Ayoub', 'Where is the third one? There are always three. The third is do nothing.'],
  ['Nour', 'Doing nothing costs 400,000 a month in halved orders.'],
  ['Mr Ayoub', 'Have those customers halved them again since September?'],
  ['Nour', 'No. It has been flat since September. So the 400,000 happened once and has not grown — which makes the hire worse, because 600,000 a month to recover 400,000 is not a saving.'],
  ['Mr Ayoub', 'Now you have a paper. And without the third option you would have won, and we would have hired a van.'],
]));
out.push(p('**C  Writing.** Write three options for a decision at your work (**50 words or more**), with a cost on each, the do-nothing costed honestly, and what you would do.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ advise a peer with a reason, a time and one *I would not* — and hand the decision back',
  '☐ ask *what would stop working?* and then narrow the proposal and ask again',
  '☐ use *would* only for what I have measured, and *could* for what needs a second decision',
  '☐ say yes with two conditions and refuse to write down a third',
  '☐ advise upwards so that the answer can be no in one syllable',
  '☐ advise a stranger: three questions, the blind spot, a limited trial, and what it costs me',
  '☐ put three options, cost the do-nothing honestly, and say what I would do',
  '☐ write advice to a peer, a what-would-break note, a claims page and an options paper',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
