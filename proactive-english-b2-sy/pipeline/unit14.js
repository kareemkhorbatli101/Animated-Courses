// Proactive English B2 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 14  Negotiating a Difference of Interest'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'This unit is about the disagreements **in which nobody is being unreasonable.** Book 1 taught you to mediate between two people who were both right about different things. ⚠ **This unit is about being one of the two**, which is harder, because you cannot stand outside it.',
  '**14.1** tells a **difference of interest** from a **misunderstanding** — and only one of the two is negotiable.   **14.2** states what you want, what you will trade, and what you will not.   **14.3** makes a conditional offer at range.   **14.4** writes down your own best alternative, **for yourself, before the meeting.**   **14.5** closes — or says plainly that you are not closing today.   **14.6** writes the two-page note: interests, trades, limits, alternative.   **14.7** mediates a negotiation in which both sides are right.',
  '**Exam practice in 14.7:** B2 First **Reading and Use of English Part 7** (multiple matching), **Writing Part 2** (a report) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring one live disagreement at work in which both sides are behaving reasonably.** **Not a grievance, and not a case where somebody is in the wrong** — those are easier and they teach nothing here. **If you cannot find one, bring the nearest thing and 14.1 will tell you which it is**, because about half of what people bring to this unit turns out to be a misunderstanding.',
  '**And one warning about 14.4.** It is the only page in this book **written for yourself and shown to nobody** — not to your partner, not to the class, not to your teacher. ⚠ **A best alternative that somebody else has read is not a best alternative; it is a negotiating position.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 14.1 =====================
out.push(pb());
out.push(h2('14.1  Two diagnoses'));
out.push(p('**Function:** telling a difference of interest from a misunderstanding   ·   **Grammar:** the two diagnoses, and why only one of them is negotiable   ·   **Pronunciation:** the flat statement of a difference, without the apology in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Describe the disagreement you brought in **three sentences**: what you want, what they want, and why you think they want it. ⚠ **Your partner asks one question only: _would it go away if each of you knew everything the other knows?_** **If yes, it is a misunderstanding.**'));
out.push(board('They just do not understand what we need.', 'They need the order out in six days and we need two days for a second pass. Both of those are true.'));
out.push(p('**b**  Which of these is a difference of interest? **1** _They think the machine is faster than it is._  **2** _They need it in six days; a second pass takes two days._  **3** _They were never sent the revised sheet._  **4** _We want the exclusion written down and they want the page short._  **5** _Nobody told them the old address was closed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the two diagnoses, and which one does Ms Huda say the room keeps reaching for?   **A** a misunderstanding and a difference of interest — and the room reaches for **misunderstanding**, because it is the comfortable one   **B** a mistake and a lie; the room reaches for the lie   **C** a clash of personalities and a clash of systems'));
out.push(p('**b**  Listen again. **1** What does Mr Tahhan say he spent four months doing?   **2** What does Ms Huda say is the cost of the wrong diagnosis?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  Which of the two is it', [
  ['Ms Huda', 'Mr Tahhan, the disagreement you brought. Three sentences.'],
  ['Bassel', 'They want the order out in six days. We need two days of that for a second pass on the colour. I think they want six days because their own customer has a date.'],
  ['Ms Huda', '**And would it go away if each of you knew everything the other knows?**'],
  ['Bassel', '_(a pause)_ **No.** ⚠ **They already know about the second pass. I already know about their date.** **We both know everything and we still want different things.**'],
  ['Ms Huda', '**Then it is a difference of interest and it is negotiable.** ⚠ **And I want the room to notice what he had to do to get there, because it took him four months.**'],
  ['Bassel', 'I spent four months explaining the second pass. ⚠ **Four months of better and better explanations of a thing they understood perfectly well from the first week.**'],
  ['Omar', 'Why would anybody do that for four months?'],
  ['Bassel', '**Because it is the comfortable diagnosis.** If it is a misunderstanding, then I am right and they will see it. ⚠ **If it is a difference of interest, then they are not wrong and I have to give something up.**'],
  ['Ms Huda', '**That is the sentence of the cycle and I shall not improve on it.** ⚠ **The room reaches for _misunderstanding_ because misunderstanding is the diagnosis in which nobody has to lose anything.**'],
  ['Dima', 'And the cost of getting it wrong?'],
  ['Ms Huda', '**Four months, in his case, and the figure is not unusual.** ⚠ **A misunderstanding is treated with information and a difference of interest is treated with a trade** — **and information given to somebody who already has it is not neutral. It reads as an accusation that they have not been listening.**'],
  ['Rim', 'So the explaining made it worse.'],
  ['Ms Huda', '**The explaining made it worse, and he was being scrupulous the whole time.** ⚠ **That is the expensive thing about this mistake: it is made by careful people, repeatedly, in good faith.**'],
  ['Adnan', 'And the test is only the one question?'],
  ['Ms Huda', '**One question, and it has to be asked honestly.** _Would it go away if each of us knew everything the other knows?_ ⚠ **Most people answer it with _yes, if they really understood_** — **and _really_ is the word that gives it away.** **It means they understand and do not agree.**'],
  ['Jad', 'What if it is both?'],
  ['Ms Huda', '**It often is, and then you clear the misunderstanding first and find out how much is left.** ⚠ **In most cases the misunderstanding is about a fifth of it** — **and a person who clears the fifth and then stops has done the easy part and called it finished.**'],
  ['Mazen', 'And how do you say _this is a difference of interest_ without it sounding like a declaration of war?'],
  ['Ms Huda', '🔊 **Flat, and with nothing in front of it.** _You need it in six days and we need two of those for the second pass. Both of those are true._ ⚠ **The apology is what makes it a complaint** — _I am afraid that unfortunately we may have a bit of a problem here_ — **and the flat version is the one that opens a negotiation rather than a dispute.**'],
]));
out.push(sp());
out.push(box('Language box – the two diagnoses', [
  '**Two diagnoses and only one of them is negotiable.** **A misunderstanding** is treated with **information**. ⚠ **A difference of interest** is treated with **a trade.** **Nothing else works on either**, and the whole of this unit depends on telling them apart in the first week rather than the fourth month.',
  '**The test, and it is one question honestly asked.** ⚠ **_Would it go away if each of us knew everything the other knows?_** **If yes, it is a misunderstanding. If no, it is a difference of interest.**',
  '⚠ **And the word that gives away a wrong answer is _really_.** _Yes, if they really understood._ **It means they understand and do not agree**, which is the other diagnosis wearing the first one\'s coat.',
  '**Why the room always reaches for _misunderstanding_, and it is not stupidity.** ⚠ **It is the diagnosis in which nobody has to lose anything.** **If it is a misunderstanding, I am right and they will come to see it. If it is a difference of interest, they are not wrong and I have to give something up.**',
  '**The cost of the wrong diagnosis, which is why this is cycle one.** ⚠ **Information given to somebody who already has it is not neutral.** **It reads as an accusation that they have not been listening** — **so four months of better and better explanations make the position worse, and the person doing it is being scrupulous the whole time.**',
  '**When it is both — and it often is.** ⚠ **Clear the misunderstanding first and then find out how much is left.** **In most cases the misunderstanding is about a fifth of it**, and **a person who clears the fifth and stops has done the easy part and called it finished.**',
  '**The shapes.** _You need X and we need Y. Both of those are true._ _We both know everything and we still want different things._ _That part is a misunderstanding and I can clear it; the rest is not._ ⚠ **And the one to avoid:** _if you understood what this involves…_ — **which is the four months in nine words.**',
  '**Pronunciation.** 🔊 **Track 14.2** **Flat, with nothing in front of it.** ⚠ **The apology is what turns a difference into a complaint** — _I am afraid that unfortunately we may have a bit of a problem_ — **and the flat version is the one that opens a negotiation rather than a dispute.**',
  '**One more thing to watch, because it is how the wrong diagnosis survives contact with evidence.** ⚠ **A difference of interest produces polite, shortening replies**, and a careful person reads shortening replies as impatience with the explanation **and writes a longer one.** **The reply getting shorter is the signal that the diagnosis is wrong**, not the signal to try harder.',
  '**Practise:** State the disagreement and give the diagnosis. **1** a clear difference of interest  **2** a clear misunderstanding  **3** one that is both  **4** one where the other side says _if you really understood_  **5** one stated flat, with nothing in front of it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the disagreement from the card. B asks the one question and gives the diagnosis — **misunderstanding, difference of interest, or both.** ⚠ **Two rows on each card are _both_, and B must say which part is which.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the disagreement)_ __________.'],
  ['B', 'Would it go away if each of you knew everything the other knows?'],
  ['A', '__________.'],
  ['B', 'Then it is **a misunderstanding / a difference of interest / both** — and the part that is ______ is ______.'],
]));
out.push(table(['Card A – the disagreement', 'Card B – the disagreement'], [
  ['_They want six days; a second pass takes two._', '_They want the page short; we want the exclusion written down._'],
  ['_They were never sent the revised sheet._', '_Nobody told them the old address was closed._'],
  ['_⚠ They think the machine is faster, and they need it Tuesday._', '_⚠ They have the wrong figure, and they would still refuse with the right one._'],
  ['_They want the stamp moved; we want the desk clear._', '_They want weekly reports; we want to be left alone to do the work._'],
  ['_⚠ They have not read the clause, and they object to what it does._', '_⚠ They misremember the date, and the date is not why they are refusing._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the diagnosis for each of the ten, and for the four marked ⚠ which part is which. ⚠ **The finding is in those four: in every one of them the misunderstanding is the smaller half**, and clearing it leaves the whole disagreement standing. **A pair that cleared the misunderstanding and declared the matter settled has done in five minutes what Mr Tahhan did in four months.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own disagreement in three sentences, ask yourself the one question **in writing**, and write the answer. ⚠ **If you write _yes, if they really understood_, cross out _really_ and read the sentence again.** It now says something different and the something is the diagnosis.'));
out.push(p('**b**  Swap. Your partner gives the diagnosis from your three sentences alone and says which word told them. ⚠ Then both of you say the difference **flat**, with nothing in front of it, and count the words you had wanted to put in front.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel gave his disagreement in three sentences: they want the order out in six days, his works needs two of those days for a second pass on the colour, and he thinks they want six days because their own customer has a date. Asked whether it would go away if each of them knew everything the other knows, he said no — they already know about the second pass and he already knows about their date, so they both know everything and still want different things. Then it is a difference of interest and it is negotiable, and the room should notice what he had to do to get there, because it took him four months. He spent four months explaining the second pass: four months of better and better explanations of a thing they had understood perfectly well from the first week. Omar asked why anybody would do that for four months, and because it is the comfortable diagnosis — if it is a misunderstanding then he is right and they will see it, and if it is a difference of interest then they are not wrong and he has to give something up. The room reaches for misunderstanding because misunderstanding is the diagnosis in which nobody has to lose anything. Dima asked about the cost of getting it wrong, and four months in his case, which is not unusual: a misunderstanding is treated with information and a difference of interest is treated with a trade, and information given to somebody who already has it is not neutral — it reads as an accusation that they have not been listening. Rim said so the explaining made it worse, and it did, and he was being scrupulous the whole time, which is the expensive thing about this mistake: it is made by careful people, repeatedly, in good faith. Adnan asked whether the test is only the one question, and it is, and it has to be asked honestly — most people answer it with yes, if they really understood, and really is the word that gives it away, because it means they understand and do not agree. Jad asked what happens if it is both, and it often is, and then you clear the misunderstanding first and find out how much is left — in most cases the misunderstanding is about a fifth of it, and a person who clears the fifth and then stops has done the easy part and called it finished. And Mazen asked how you say this is a difference of interest without its sounding like a declaration of war: flat, and with nothing in front of it. The apology is what makes it a complaint, and the flat version opens a negotiation rather than a dispute._'));
out.push(p('**Listener task:** write your partner\'s diagnosis and the word that told you.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Bassel writes about his four months. Answer the questions.'));
out.push(model([
  '**FOUR MONTHS OF EXPLAINING** · B. Tahhan · 6 November',
  '**Between June and October I sent the same client four explanations of why a second colour takes two days.** ⚠ **Each one was better than the last and every one of them made the position worse.** **This is why.**',
  '**What I believed I was doing.** Clearing a misunderstanding. **I believed they thought a second pass was a machine setting**, and that once they saw the brush bench and the drying time they would agree. **The fourth version had a diagram in it.**',
  '**What was actually true, and they told me in June.** ⚠ **They understood the second pass from the first week.** Their production manager had worked in a press. **What they have is a customer with a date**, and the date is not negotiable at their end **because they signed for it before they came to us.**',
  '**So the four explanations were not information.** ⚠ **An explanation sent to somebody who already understands says one thing: _you have not been listening._** I sent that message four times, in increasingly careful English, **and the replies got shorter each time** — which I read as impatience with the schedule and now read as something else entirely.',
  '**What the one question would have cost in June.** **About forty seconds.** _Would this go away if each of us knew everything the other knows?_ ⚠ **The answer was no in June and it is no now**, and the four months bought nothing except a worse relationship with a client of nineteen years.',
  '**What I did instead, in the end, and it took one letter.** I named both interests in one sentence — **they need six days, we need two of them for the colour, and both of those are true** — and then I offered something: ⚠ **the second colour on a split delivery, half on the sixth day and half on the eighth, at no extra charge for the second run.** **They took it in two days.**',
  '**And the thing I shall not do again.** ⚠ **I shall not improve an explanation.** **A second attempt at an explanation is reasonable. A fourth is a diagnosis that has never been checked** — **and the check is one question and forty seconds.** **I have written the question on the inside cover of the order book**, where I shall see it before I write anything to a client I am already arguing with. **It has stopped one letter since November**, which is not a figure anybody will be impressed by, **but the letter it stopped was the fifth version of a thing they understood in June.**',
]));
out.push(item('1', 'What did he believe he was doing, and what was actually true?'));
out.push(item('2', 'What does he say an explanation sent to somebody who already understands actually says?'));
out.push(item('3', 'What did he do in the end, and what will he not do again?'));
out.push(writers([
  'A page about a wrong diagnosis: **what you sent and how many times** → **what you believed you were doing** → **what was actually true, and when they told you** → **what the repeated explanation actually said** → **what the one question would have cost** → **what you did in the end** → **and the rule you take from it.**',
  '⚠ **Count the explanations in the first line.** _Four explanations between June and October, each better than the last, and every one of them made the position worse._ **The count is the argument**; a page that says _I kept explaining_ has not shown anything.',
  '**Give the other side a reason that is good.** _They have a customer with a date, and the date is not negotiable at their end because they signed for it before they came to us._ ⚠ **A difference of interest is only a difference of interest if the other interest is real**, and a page that cannot state theirs has not finished the diagnosis.',
  '**Name what the repetition communicated.** _An explanation sent to somebody who already understands says: you have not been listening._ ⚠ **That sentence is the page.** **It turns a wasted four months into a mechanism somebody else can avoid.**',
  '⚠ And **end on a rule small enough to keep.** _I shall not improve an explanation._ **A second attempt is reasonable; a fourth is a diagnosis that has never been checked** — **and the check is one question and forty seconds.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a wrong diagnosis (80 words or more).'));
out.push(p('**______ MONTHS OF EXPLAINING** · ______________ · ______________   **Between ______ and ______ I sent ______________ ______ explanations of ______________.** ⚠ **Each one was ______________ and every one of them ______________.**   **What I believed I was doing.** ______________.   **What was actually true, and they told me in ______.** ⚠ ______________. **What they have is ______________**, and ______________.   **So the explanations were not information.** ⚠ **An explanation sent to somebody who already understands says one thing: _______________._**   **What the one question would have cost.** **About ______________.** ⚠ **The answer was ______ then and it is ______ now.**   **What I did in the end.** ______________. ⚠ **They took it in ______________.**   **And the rule.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The explanations counted in the first line',
  'The other side\'s interest stated, and stated as a real one',
  'What the repetition actually communicated',
  'A rule small enough to keep',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their rule**, and the room says whether it is small enough to be kept on a Tuesday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the count first, the other interest stated fairly, what the repetition said, and the rule at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the explanations counted, the other interest stated as real, what the repetition communicated, and a rule small enough to keep.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your difference flat, with nothing in front of it, and have the room count the words you wanted to put in front.** ⚠ **Most people want between six and fourteen**, and saying it without them is physically uncomfortable the first time. Then the sentence the cycle ends on, which is Mr Tahhan\'s: **a fourth explanation is a diagnosis that has never been checked.**'));
out.push(hw('Write the page (80+ words). ⚠ Then take the disagreement you brought and **write the other side\'s interest in one sentence, as they would write it** — **not as you would describe it.** **If you cannot, you have not got the diagnosis yet.** ⚠ **And one test on what you write: would they sign it?** **If the sentence contains the words _they think_ or _they assume_, you have written your account of their interest and not theirs** — **and an interest you can only state in the third person is one you have not accepted is real.** **14.2 is what you will trade and what you will not**, and it cannot be written until the other interest is on paper.'));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  Want, trade, refuse'));
out.push(p('**Function:** stating what you want, what you will trade, and what you will not   ·   **Grammar:** _in return for_ · _I am not able to trade_   ·   **Pronunciation:** the refusal said once, at the same volume as the rest'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. For the disagreement you brought, say three things in this order: **what you want, what you would trade for it, and what you will not trade at all.** ⚠ **Your partner counts how long each takes.** **The third is usually the shortest and should be**, and in about half the room the second does not exist.'));
out.push(board('We could probably be flexible about most of it.', 'We can give you the eighth day in return for the second colour being signed off by Tuesday. We cannot give you the colour check.'));
out.push(p('**b**  Which sentence names a trade? **1** _We would be happy to discuss any of it._  **2** _We can move the delivery in return for the sign-off coming forward._  **3** _We are quite flexible._  **4** _I am not able to trade the second pass; everything else is open._  **5** _Let us see what we can do._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about the list of things you will not trade, and what happens when it is long?   **A** it should be long, to show strength   **B** **it should be one or two items and it should be written before the meeting** — **a long list is not strength, it is a failure to decide**   **C** it should be secret'));
out.push(p('**b**  Listen again. **1** What does Mrs Shaaban say happened when her list had six things on it?   **2** What does Ms Huda say about _flexible_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  In return for', [
  ['Ms Huda', 'Mrs Shaaban. What you want, what you will trade, what you will not.'],
  ['Rim', 'I want the refusal code on every slip. I will trade the weekly summary — they can have it monthly. ⚠ **And I will not trade the seal check at the gate.**'],
  ['Ms Huda', '**Three sentences and the third is seven words, which is right.** ⚠ **Now the room should know what the third one used to look like.**'],
  ['Rim', 'Six items. I went into a meeting last year with six things I would not trade.'],
  ['Omar', 'What happened?'],
  ['Rim', '⚠ **They traded nothing, because there was nothing left to trade with.** **I had made the whole thing non-negotiable and then wondered why nobody would negotiate.**'],
  ['Ms Huda', '**Which is the finding and it is counter-intuitive.** ⚠ **A long list of things you will not trade is not strength; it is a failure to decide.** **Two items is a position. Six is a refusal to be in the room.**'],
  ['Dima', 'How do you get from six to two?'],
  ['Ms Huda', '**Ask of each one: _what actually happens if I give this up?_** ⚠ **Write the consequence, not the feeling.** **Four of Mrs Shaaban\'s six had consequences she could live with and she had never written them down.**'],
  ['Rim', 'Three of them I could not name a consequence for at all.'],
  ['Ms Huda', '**Then they were preferences dressed as limits**, and that is the commonest thing on these lists. ⚠ **A limit you cannot cost is a preference**, and preferences are tradeable — **which is excellent news, because it is what you have to trade with.**'],
  ['Bassel', 'And the trade itself? How do you say it?'],
  ['Ms Huda', '**_In return for_, and both halves in one sentence.** _We can move the delivery to the eighth **in return for** the colour being signed off on Tuesday._ ⚠ **One sentence, because two sentences invite them to accept the first half and discuss the second.**'],
  ['Adnan', 'That happens constantly in my office.'],
  ['Ms Huda', '**It is the commonest way a concession is lost** — **you give the thing, and the thing you wanted for it becomes a separate conversation that never happens.** ⚠ **Tie them in one sentence with _in return for_ and the tie survives the meeting.**'],
  ['Jad', 'And the refusal? How do you say _no_ without it being a wall?'],
  ['Ms Huda', '🔊 **Once, at the same volume as everything else, and with no adjectives.** _I am not able to trade the seal check._ ⚠ **A refusal that is repeated gets louder each time whether you raise your voice or not**, and a refusal with an adjective in it — _absolutely_, _simply_ — **invites the other side to test whether the adjective is true.**'],
  ['Mazen', 'And the word _flexible_, which everybody uses?'],
  ['Ms Huda', '⚠ **Delete it.** **_We are quite flexible_ names nothing, trades nothing and commits you to everything.** **It is the sentence Mrs Sweidan paid ninety thousand a month for in 13.5**, in a different room, **and it does the same work here.**'],
]));
out.push(sp());
out.push(box('Language box – want, trade, refuse', [
  '**Three sentences, in this order, and the third is the shortest.** **1 What you want.** **2 What you will trade for it.** ⚠ **3 What you will not trade at all** — **one or two items, written before the meeting.**',
  '⚠ **A long list of things you will not trade is not strength; it is a failure to decide.** **Two items is a position. Six is a refusal to be in the room** — **and the other side will trade nothing, because there is nothing left to trade with.**',
  '**How to get from six to two.** ⚠ **Ask of each: _what actually happens if I give this up?_** **Write the consequence, not the feeling.** **A limit you cannot cost is a preference** — **and that is excellent news, because preferences are what you have to trade with.**',
  '**The trade goes in one sentence, with _in return for_.** _We can move the delivery to the eighth **in return for** the colour being signed off on Tuesday._ ⚠ **Two sentences invite them to accept the first half and discuss the second**, and that is the commonest way a concession is lost: **you give the thing, and the thing you wanted for it becomes a separate conversation that never happens.**',
  '**The refusal: once, at the same volume, with no adjectives.** _I am not able to trade the seal check._ ⚠ **A repeated refusal gets louder each time whether you raise your voice or not**, and **an adjective — _absolutely_, _simply_ — invites the other side to test whether it is true.**',
  '⚠ **Delete _flexible_.** **_We are quite flexible_ names nothing, trades nothing and commits you to everything.** It is 13.5\'s sentence in a different room, **and it costs the same.**',
  '**The shapes.** _We want X._ _We can do Y **in return for** Z._ _**I am not able to trade** W._ _Everything else is open._ ⚠ **And the four words that end a negotiation before it starts:** _we are quite flexible_.',
  '**Pronunciation.** 🔊 **Track 14.4** **The refusal said once, at the same volume as the rest of the sentence.** ⚠ **A refusal delivered more quietly reads as regret and invites a second attempt; one delivered more loudly reads as a position taken against somebody.** **The same volume is the only one that reads as a fact.**',
  '**And one sentence to have ready for the other side\'s long list, because they will have one too.** ⚠ _Which of those would you most need to keep?_ **It is not a trick and it does not sound like one: it invites them to do the sorting you have already done** — **and in about half of cases the answer names one item, which tells you that the other five were a list and not a position.**',
  '**Practise:** Want, trade, refuse — the third in under ten words. **1** about a date  **2** about a figure  **3** about a document  **4** one where the refusal is a preference, and say so  **5** one with _in return for_ in a single sentence',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the position from the card. B states **want, trade, refuse** in three sentences, with the trade in one sentence using _in return for_. ⚠ **Two rows on each card list four or more refusals**, and B must cost each one and reduce the list. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the position)_ __________.'],
  ['B', 'We want __________. We can __________ **in return for** __________. **I am not able to trade** __________.'],
]));
out.push(table(['Card A – the position', 'Card B – the position'], [
  ['_Six days; a second pass takes two._', '_A monthly report instead of weekly._'],
  ['_⚠ Refuses: the colour check, the delivery date, the price, the paper, the proof._', '_⚠ Refuses: the format, the deadline, the circulation list, the sign-off._'],
  ['_The refusal code on every slip._', '_The exclusion clause written down._'],
  ['_⚠ Refuses: the seal check, the gate count, the form, the wording, the file._', '_⚠ Refuses: the wording, the length, the date, the signatory._'],
  ['_Two sites instead of four._', '_The handover sheet reconciled quarterly._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three sentences for each, and for the four marked ⚠ the costed list and what it came down to. ⚠ **In every one of the four, at least two items have no consequence that can be named** — **those are preferences dressed as limits.** **The reduced list is usually two and never more than three**, and the room should hear how much the speaker now has to trade with.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own three sentences. ⚠ **Then take every item on your refusal list and write the consequence of giving it up — the consequence, not the feeling.** **Any item with no consequence you can write down goes onto the trade list**, and you will not like this.'));
out.push(p('**b**  Swap. Your partner reads only your refusal list and asks _what happens if you give this up?_ for each item. ⚠ **They are not allowed to accept _it would not be right_** as an answer.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim gave the three: she wants the refusal code on every slip, she will trade the weekly summary for a monthly one, and she will not trade the seal check at the gate. Three sentences and the third is seven words, which is right — and the room should know what the third one used to look like. Six items. She went into a meeting last year with six things she would not trade, and they traded nothing, because there was nothing left to trade with: she had made the whole thing non-negotiable and then wondered why nobody would negotiate. Which is the finding and it is counter-intuitive — a long list of things you will not trade is not strength, it is a failure to decide. Two items is a position; six is a refusal to be in the room. Dima asked how you get from six to two, and you ask of each one what actually happens if you give it up, and write the consequence and not the feeling: four of Rim\'s six had consequences she could live with and she had never written them down. Rim said three of them she could not name a consequence for at all, and then they were preferences dressed as limits, which is the commonest thing on these lists — a limit you cannot cost is a preference, and preferences are tradeable, which is excellent news because it is what you have to trade with. Bassel asked how you say the trade itself, and in return for, with both halves in one sentence: we can move the delivery to the eighth in return for the colour being signed off on Tuesday. One sentence, because two sentences invite them to accept the first half and discuss the second. Adnan said that happens constantly in his office, and it is the commonest way a concession is lost: you give the thing, and the thing you wanted for it becomes a separate conversation that never happens — so tie them in one sentence with in return for and the tie survives the meeting. Jad asked how you say no without its being a wall, and once, at the same volume as everything else, and with no adjectives. A refusal that is repeated gets louder each time whether you raise your voice or not, and an adjective in it invites the other side to test whether the adjective is true. And Mazen asked about the word flexible, which everybody uses, and the instruction is to delete it: we are quite flexible names nothing, trades nothing and commits you to everything._'));
out.push(p('**Listener task:** write the one item your partner moved from the refusal list to the trade list.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rim writes about the meeting with six refusals. Answer the questions.'));
out.push(model([
  '**SIX THINGS I WOULD NOT TRADE** · R. Shaaban · 13 November · _for the file, and for whoever does this next_',
  '**I went into the January meeting with six things I would not trade and I came out with nothing at all.** ⚠ **I want to write down why, because at the time I thought I had been firm.**',
  '**The six.** The seal check. The gate count. The wording of the refusal form. The three-character code. The file copy. ⚠ **And the review date, which I added in the car.**',
  '**What I believed about the list.** That it was a position. **A list of six things you will not give up looks, from the inside, exactly like a strong hand** — and I had a reason for every one of them, **which I could have given if anybody had asked.**',
  '**Nobody asked.** ⚠ **Their side read the six, said that they would need to think about it, and the meeting was over in twenty-two minutes.** **I had left them nothing to offer me and nothing to ask for.** **A negotiation needs two things that can move and I had brought none.**',
  '**What I found when I costed them, three weeks later and much too late.** ⚠ **Three of the six had no consequence I could write down.** The file copy, the wording, the review date — **I wanted them, and I could not say what would happen if I did not have them.** **Those were preferences, and I had been calling them limits for a month.**',
  '**Two had consequences I could live with.** The gate count could go monthly; the code could be two characters instead of three. ⚠ **Both of those are real currency and I had locked them in a safe.**',
  '**And one was a genuine limit, with a consequence I can state in nine words: _without the seal check we cannot say what left here._** ⚠ **That is the whole of my position and it was one-sixth of what I took into the room.**',
  '**What I would do differently, and it takes an hour at a table.** **Cost every item before the meeting, in writing, with the consequence beside it.** ⚠ **Anything with no consequence goes on the trade list** — **and you will not want to move it, which is exactly how you know it is a preference.** **I did this before the April meeting and went in with two.** ⚠ **The meeting ran for an hour and ten minutes**, against twenty-two in January, **and the difference is not that I had become reasonable: it is that there were four things on the table that could move.** **A negotiation is a conversation about movement, and in January I had brought a wall and expected it to be treated as an opening position.**',
]));
out.push(item('1', 'What happened in the January meeting, and how long did it last?'));
out.push(item('2', 'What did she find when she costed the six items?'));
out.push(item('3', 'What is her genuine limit, and what proportion of her original list was it?'));
out.push(writers([
  'A note about a position that was too wide: **what you took in and what you came out with** → **the list** → **what you believed about it** → **what the other side did** → **what the costing found** → **the real limit, with its consequence** → **and the practice you now follow.**',
  '⚠ **Open on the arithmetic.** _Six things I would not trade, and I came out with nothing at all._ **The sentence that follows must defend your past self** — _at the time I thought I had been firm_ — **because a note that mocks its own author will not be believed by anybody who has done the same thing.**',
  '**Say what the other side actually did, in minutes.** _They read the six and the meeting was over in twenty-two minutes._ ⚠ **The duration is the finding**, and a reader can see the arithmetic without being told.',
  '**Sort the list in public and name the three kinds.** _Three preferences, two real currency, one genuine limit._ ⚠ **And state the limit with its consequence in one sentence**, **because a limit without a consequence is the thing you have just spent the page diagnosing.**',
  '⚠ And **give the practice with its cost.** _An hour at a table, in writing, with the consequence beside each item._ **Then the sentence that makes it usable:** _anything with no consequence goes on the trade list, and you will not want to move it, which is exactly how you know it is a preference._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a position that was too wide (80 words or more).'));
out.push(p('**______ THINGS I WOULD NOT TRADE** · ______________ · ______________   **I went into ______________ with ______ things I would not trade and I came out with ______________.** ⚠ **At the time I thought ______________.**   **The ______.** ______________. ⚠ **And ______________, which I added ______________.**   **What I believed about the list.** ______________.   **Nobody asked.** ⚠ ______________, **and the meeting was over in ______________.** **A negotiation needs ______________ and I had brought ______________.**   **What I found when I costed them.** ⚠ **______ had no consequence I could write down**: ______________. **Those were ______________.**   **______ had consequences I could live with:** ______________. ⚠ **Real currency, locked in a safe.**   **And ______ was a genuine limit:** _"______________."_ ⚠ **One-______ of what I took into the room.**   **What I would do differently.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The arithmetic in the first line, and the past self defended',
  'What the other side did, in minutes',
  'The list sorted into preferences, currency and limits',
  'The real limit stated with its consequence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their genuine limit and its consequence**, and the room says whether the consequence is a consequence or a feeling.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the arithmetic first, the other side in minutes, the list sorted into three kinds, and the practice with its cost.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the arithmetic in the first line, the other side in minutes, the list sorted into three kinds, and the limit with its consequence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your refusal list aloud and then read it again with the preferences taken out.** ⚠ The room hears both and says which version it would rather negotiate against — **and the answer is always the shorter one**, which is the opposite of what the list was for. Then the sentence the cycle ends on, which is Mrs Shaaban\'s: **I had left them nothing to offer me and nothing to ask for.**'));
out.push(hw('Write the note (80+ words). ⚠ Then cost your own refusal list at a table, in writing, **with the consequence beside each item and nothing else in the column.** **Count how many have none.** ⚠ **Then do the harder half: put the two that survive in order**, because in a long meeting you will be asked to give up one of them and the order decides which. **A person who has not ordered their own two limits will decide the question at minute forty, tired, in front of the people it matters to.** **14.3 makes the offer conditional** — **which is what you do with the items that moved.**'));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  The offer at range'));
out.push(p('**Function:** making a conditional offer at range   ·   **Grammar:** _were we to_ · _subject to_ · _provided that_ _(B1 21.2, raised)_   ·   **Pronunciation:** the conditional said without the retreat audible in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Make the same offer three times at three distances: **flat** _(we will do X)_, **conditional** _(we would do X if Y)_ and **exploratory** _(were we to do X, would Y follow?)_. ⚠ **Your partner says which of the three commits you least** — and then which of the three they would actually answer.'));
out.push(board('We could maybe look at moving the date, possibly.', 'Were we to move the delivery to the eighth, would the colour be signed off on Tuesday?'));
out.push(p('**b**  Which of these commits you to something? **1** _Were we to move the date, would the sign-off come forward?_  **2** _We will move the date._  **3** _We could move the date, subject to the sign-off._  **4** _We might be able to look at the date._  **5** _Provided the sign-off comes forward, the date moves._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the three distances are for, and what is the one that gets misused?   **A** they are politeness levels; _were we to_ is over-formal   **B** **they are three different amounts of commitment, chosen on purpose** — and the misused one is **_were we to_**, which is for finding out and not for offering   **C** they are the same thing in different registers'));
out.push(p('**b**  Listen again. **1** What does Mr Darwish say happened when he used _were we to_ as an offer?   **2** What does Ms Huda say about _subject to_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  Were we to', [
  ['Ms Huda', 'Three distances and they are not politeness. Mr Darwish — what happened in September?'],
  ['Omar', 'I said _were we to put a second engineer on the Homs site, would you accept the weekly visit instead of twice weekly?_ ⚠ **They said yes. And then they had a second engineer and I had not agreed to give them one.**'],
  ['Ms Huda', '**Say exactly what went wrong, because it is not the grammar.**'],
  ['Omar', 'I used an exploratory form as an offer. ⚠ **_Were we to_ asks what would follow. It does not say I will do it** — **and they heard an offer because people hear offers.**'],
  ['Ms Huda', '**Which is the whole cycle.** ⚠ **_Were we to_ is for finding out what a move is worth before you make it.** **The moment the answer comes back, you have information and you have not spent anything** — **and that is the only thing it is for.**'],
  ['Dima', 'And the other side does the same to you.'],
  ['Ms Huda', '**Constantly, and the defence is one sentence.** ⚠ _Are you offering that, or asking what would follow?_ **Said flatly, with no edge in it.** **It is not a trap and it should not sound like one: half the time they have not noticed either.**'],
  ['Rim', 'What about _subject to_?'],
  ['Ms Huda', '**_Subject to_ is a real commitment with a named condition**, and the condition must be something **checkable by a third person.** ⚠ _Subject to the sign-off on Tuesday_ is a commitment. **_Subject to our requirements_ is not a commitment at all** — **it reserves the right to decide afterwards whether you meant it.**'],
  ['Adnan', 'That phrase is in about a third of what crosses my desk.'],
  ['Ms Huda', '⚠ **Then a third of what crosses your desk commits nobody to anything.** **The test is the third person: could somebody outside both of us check whether the condition was met?** **A date can be checked. A signature can be checked. _Our requirements_ cannot.**'],
  ['Bassel', 'And _provided that_?'],
  ['Ms Huda', '**The same commitment as _subject to_ and a different feel: _provided that_ puts the condition first and the commitment second.** ⚠ _Provided the sign-off comes forward, the date moves._ **Use it when you want the other side to hear the condition before they hear the gift**, which is most of the time.'],
  ['Jad', 'Is the order really worth anything?'],
  ['Ms Huda', '**It is worth about one round.** ⚠ **A reader who hears the gift first begins negotiating the condition; a reader who hears the condition first begins deciding whether to meet it.** **Same sentence, two different conversations.**'],
  ['Mazen', 'And saying them? _Were we to_ sounds very formal out loud.'],
  ['Ms Huda', '🔊 **It is formal and it should be said without apology or retreat.** ⚠ **The fault is not the formality: it is the fade.** _Were we to move the date… but obviously only if…_ **Say the conditional whole, stop at the question mark, and wait.** **A conditional that trails off has become a request for permission to have asked.**'],
]));
out.push(sp());
out.push(box('Language box – three distances', [
  '**Three forms and three amounts of commitment, chosen on purpose.** **Flat:** _we will move the date._ **Conditional:** _we can move the date, **subject to** the sign-off on Tuesday._ ⚠ **Exploratory:** _**were we to** move the date, would the sign-off come forward?_',
  '⚠ **_Were we to_ is for finding out what a move is worth before you make it.** **It does not offer anything.** **The moment the answer comes back you have information and you have spent nothing** — **and that is the only thing it is for.**',
  '**But people hear offers.** ⚠ **Used carelessly it will be taken as an offer and you will be held to it**, and the holding will be in good faith. **The defence when it is done to you is one flat sentence:** _are you offering that, or asking what would follow?_ **No edge in it — half the time they have not noticed either.**',
  '**_Subject to_ is a real commitment with a named condition, and the condition must be checkable by a third person.** ⚠ _Subject to the sign-off on Tuesday_ **is a commitment.** **_Subject to our requirements_ is not** — **it reserves the right to decide afterwards whether you meant it.**',
  '**The third-person test, which settles every one of these.** ⚠ **Could somebody outside both of us check whether the condition was met?** **A date can. A signature can. _Our requirements_ cannot.**',
  '**_Provided that_ is the same commitment with the condition first.** ⚠ **A reader who hears the gift first begins negotiating the condition; a reader who hears the condition first begins deciding whether to meet it.** **Same sentence, two conversations, and it is worth about one round.**',
  '**The shapes.** _**Were we to** X, would Y follow?_ _We can X, **subject to** Y._ _**Provided that** Y, X._ _**Are you offering that, or asking what would follow?**_ ⚠ **And the one that commits nobody:** _subject to our requirements_.',
  '**Pronunciation.** 🔊 **Track 14.6** **Say the conditional whole, stop at the question mark, and wait.** ⚠ **The fault is not the formality; it is the fade.** _Were we to move the date… but obviously only if…_ — **a conditional that trails off has become a request for permission to have asked.**',
  '**And the repair for a condition that cannot be checked, which is usually one noun.** ⚠ _Subject to our requirements_ → _subject to the specification of 3 November._ _Provided the work is of an acceptable standard_ → _provided the two samples match the signed proof._ **Name a document, a date or a person** — **and never repair it with _reasonable_, which puts two uncheckable words where there was one.**',
  '**Practise:** Choose the distance on purpose and say why. **1** finding out what a move is worth  **2** a commitment with a checkable condition  **3** the same, with the condition first  **4** spotting an exploratory used as an offer  **5** one with an uncheckable condition, and the repair',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the move from the card. B puts it at the right distance and **names the distance** — exploratory, conditional, or flat — **and says what it commits them to.** ⚠ **Two rows on each card carry a condition no third person could check**, and B must repair them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the move)_ __________.'],
  ['B', '__________. **Distance:** ______________. **Commits me to:** ______________.'],
]));
out.push(table(['Card A – the move', 'Card B – the move'], [
  ['_The delivery moves to the eighth._', '_The report goes monthly instead of weekly._'],
  ['_⚠ "…subject to our normal requirements."_', '_⚠ "…provided the work is of an acceptable standard."_'],
  ['_A second engineer on the Homs site._', '_The code shortened to two characters._'],
  ['_⚠ "…subject to management agreement."_', '_⚠ "…provided it suits both parties."_'],
  ['_The gate count monthly, with the seal check unchanged._', '_Two sites in the first quarter and four in the second._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the distance chosen for each and what it commits to. ⚠ **The four rows marked ⚠ all fail the third-person test** — _normal requirements_, _acceptable standard_, _management agreement_, _suits both parties_ — **and each repair must name a date, a person or a document.** **A pair that repaired by adding _reasonable_ has made it worse**, because now two words are uncheckable instead of one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the item that moved from your refusal list in 14.2 and write it at all three distances. ⚠ **Then say which one you would actually use on Monday, and why.** **Most people choose the conditional and should**; the exploratory is for the thing you have not decided about.'));
out.push(p('**b**  Swap. Your partner reads your exploratory version back **as though it were an offer** and accepts it. ⚠ Then you say the defence sentence — _are you offering that, or asking what would follow?_ — **and notice how hard it is to say without an edge.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar said in September: were we to put a second engineer on the Homs site, would you accept the weekly visit instead of twice weekly? They said yes — and then they had a second engineer and he had not agreed to give them one. What went wrong is not the grammar: he used an exploratory form as an offer. Were we to asks what would follow and it does not say he will do it, and they heard an offer because people hear offers. Which is the whole cycle: were we to is for finding out what a move is worth before you make it, and the moment the answer comes back you have information and you have not spent anything, and that is the only thing it is for. Dima said the other side does the same to you, constantly, and the defence is one sentence — are you offering that, or asking what would follow? Said flatly, with no edge in it, because it is not a trap and should not sound like one: half the time they have not noticed either. Rim asked about subject to, which is a real commitment with a named condition, and the condition must be checkable by a third person: subject to the sign-off on Tuesday is a commitment, and subject to our requirements is not a commitment at all, because it reserves the right to decide afterwards whether you meant it. Adnan said that phrase is in about a third of what crosses his desk, and then a third of what crosses his desk commits nobody to anything — and the test is the third person: could somebody outside both of us check whether the condition was met? A date can be checked, a signature can be checked, our requirements cannot. And Bassel asked about provided that, which carries the same commitment with the condition first: provided the sign-off comes forward, the date moves. Use it when you want the other side to hear the condition before they hear the gift, which is most of the time. Jad asked whether the order is really worth anything, and it is worth about one round — a reader who hears the gift first begins negotiating the condition, and a reader who hears the condition first begins deciding whether to meet it. Same sentence, two different conversations. And Mazen said were we to sounds very formal out loud, which it is, and it should be said without apology or retreat: the fault is not the formality but the fade. Were we to move the date, but obviously only if — say the conditional whole, stop at the question mark, and wait, because a conditional that trails off has become a request for permission to have asked._'));
out.push(p('**Listener task:** write your partner\'s three versions and the one they would use on Monday.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Omar writes about the second engineer. Answer the questions.'));
out.push(model([
  '**THE ENGINEER I DID NOT OFFER** · O. Darwish · 20 November',
  '**In September I asked a question and in October I was running a second engineer on the Homs site.** ⚠ **Nobody misled anybody. The sentence was mine and I wrote it carefully.**',
  '**What I wrote.** _Were we to put a second engineer on the Homs site, would you accept a weekly visit instead of twice weekly?_ ⚠ **I was finding out what the move was worth.** **I had not decided to make it and I had no authority to.**',
  '**What came back.** _"Yes, that would be acceptable."_ **Four days later, the revised visit schedule.** **Eight days later, a question about when the second engineer would start.**',
  '**Where it went wrong, and it is not the grammar.** ⚠ **_Were we to_ is an exploratory form and I used it as an offer** — **or rather, I used it correctly and did nothing to stop it being read as an offer**, which is the same thing at the other end. **People hear offers. A question about a hypothetical arrives in a working inbox as a proposal**, especially a question with a cost already in it.',
  '**What the sentence needed, and it is nine words.** _I am asking what this would be worth, not offering it._ ⚠ **Nine words at the end of the question, and the whole thing would have been information.**',
  '**What it cost.** **A second engineer at Homs from October**, which is about four hundred thousand a month and was not in any budget. ⚠ **And the part that is worse: I could not take it back without becoming the person who withdraws things**, and I would rather pay the four hundred thousand than be that in a relationship of five years.',
  '**And the defence, which I now use about once a fortnight.** _Are you offering that, or asking what would follow?_ ⚠ **Said flat, with no edge in it.** **Four times out of five the answer is _asking_ and they are grateful somebody said it** — **and the fifth time I have found an offer I did not know I had.** **The reason it does not cause offence is that it is a question about a sentence and not about a person**, and I have been asked it back twice, **both times correctly.** ⚠ **And the other half of the repair, which is mine to make: when I am exploring, I now say so in the sentence.** _I am asking what this would be worth, not offering it._ **It has never once been treated as a retreat**, which is what I had expected and was the reason I had left it out for five years.',
]));
out.push(item('1', 'What was he doing when he wrote the September sentence, and what did he not have?'));
out.push(item('2', 'What does he say the sentence needed, and what would that have made it?'));
out.push(item('3', 'What does he say is worse than the cost, and what defence does he now use?'));
out.push(writers([
  'A page about a question that was read as an offer: **the two dates in the first line** → **what you wrote, quoted** → **what you were doing** → **what came back, with its dates** → **where it went wrong, and that it is not the grammar** → **the words it needed, counted** → **what it cost, including the part that is worse than money** → **and the defence you now use.**',
  '⚠ **Put the two dates in the first sentence and let them do the work.** _In September I asked a question and in October I was running a second engineer._ **Then protect the other side immediately:** _nobody misled anybody._',
  '**Quote the sentence and let the reader see that it is correct.** ⚠ **The page is stronger if the English was right**, because then the lesson is not about grammar: _I used it correctly and did nothing to stop it being read as an offer, which is the same thing at the other end._',
  '**Give the repair in words and count them.** _I am asking what this would be worth, not offering it. Nine words._ ⚠ **A repair with a price makes the page usable**; a repair without one is a regret.',
  '⚠ And **name the cost that is not money.** _I could not take it back without becoming the person who withdraws things._ **That is the real figure in most negotiations**, and a page that gives only the four hundred thousand has given the cheaper half.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a question read as an offer (80 words or more).'));
out.push(p('**THE ______________ I DID NOT OFFER** · ______________ · ______________   **In ______ I ______________ and in ______ I ______________.** ⚠ **Nobody misled anybody.**   **What I wrote.** _"______________?"_ ⚠ **I was ______________.** **I had not ______________.**   **What came back.** _"______________."_ **______ days later, ______________.**   **Where it went wrong.** ⚠ **It is not the grammar.** ______________ — **and people hear offers.**   **What the sentence needed.** _"______________."_ ⚠ **______ words.**   **What it cost.** ______________. ⚠ **And the part that is worse: ______________.**   **And the defence.** _"Are you offering that, or asking what would follow?"_ ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two dates in the first line, and the other side protected',
  'The sentence quoted, and shown to be correct English',
  'The repair given in words and counted',
  'The cost that is not money',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their nine-word repair**, and the room says whether it would have stopped the reading.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the two dates first, the sentence quoted and defended, the repair counted, and the cost that is not money.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the two dates in the first line, the sentence shown to be correct, the repair counted, and the cost that is not money.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your conditional whole, stop at the question mark, and wait while the room counts to three.** ⚠ **The fade is audible and almost everybody has one**, and most people cannot hear their own until the room says the sentence back to them with the fade exaggerated. Then the sentence the cycle ends on, which is Mr Darwish\'s: **a question about a hypothetical arrives in a working inbox as a proposal.**'));
out.push(hw('Write the page (80+ words). ⚠ Then go through **the last three things you agreed to in writing** and mark every condition: **could a third person check it?** **Count the _subject to our requirements_ class.** ⚠ **Then write the repair for each one** — **a document, a date or a person** — **and notice that the repair takes about four words and makes the sentence duller.** **That is the trade this cycle is really about: an agreement is clearer by exactly the amount that it is worse to read.** **14.4 is the page nobody else reads** — **your own best alternative, before the meeting.**'));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  The page nobody sees'));
out.push(p('**Function:** writing down your own best alternative, for yourself, before the meeting   ·   **Grammar:** the alternative as a figure, not as a feeling   ·   **Pronunciation:** the one public sentence, said without the figure in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, and **without naming the disagreement**: answer one question out loud. ⚠ **_What happens if you reach no agreement at all?_** **Your partner listens for whether the answer contains a figure.** **In most pairs neither answer does**, and that is the cycle.'));
out.push(board('It would be bad. We really need this to work.', 'If we reach nothing, we print the order in one colour, lose about four hundred thousand and keep the client.'));
out.push(p('**b**  Which answer is an alternative rather than a feeling? **1** _It would be a disaster._  **2** _We would print in one colour and lose about four hundred thousand._  **3** _We cannot afford for this to fail._  **4** _I would go to the other supplier; they quoted nine per cent more in August._  **5** _We would have to think again._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Ms Huda say the alternative must be written before the meeting, and who is allowed to read it?   **A** to show the other side you have options; they may read it   **B** **because in the room you will weigh it against the pressure you are under and not against the facts** — and **nobody reads it at all**   **C** to give to your manager beforehand'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say happens to an alternative that somebody else has read?   **2** What does Ms Huda say about an alternative that is better than the deal?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  The figure you do not say', [
  ['Ms Huda', 'One question, and nobody names their disagreement. **What happens if you reach no agreement at all?**'],
  ['Mazen', 'It would be difficult.'],
  ['Ms Huda', '⚠ **That is a feeling and it is the answer this room gives.** **Say it again with a figure in it.**'],
  ['Mazen', '_(a pause)_ I would keep sending the handsets back one at a time, which has cost me about eleven days of my own time since March, and the distributor would keep replacing four in nine.'],
  ['Ms Huda', '**Eleven days and four in nine.** ⚠ **That is an alternative, and you now know something you did not know thirty seconds ago: you can live without an agreement.** **That is the whole purpose of the page.**'],
  ['Dima', 'And it has to be written before.'],
  ['Ms Huda', '**Before, and at a table.** ⚠ **In the room you will value the alternative against the pressure you are under and not against the facts** — **and the pressure in the room is always higher than the pressure in the problem.**'],
  ['Omar', 'Who reads it?'],
  ['Ms Huda', '**Nobody.** ⚠ **Not your partner, not the class, not me.**'],
  ['Dima', '⚠ **And that is not a rule about privacy; it is a rule about what the page is.** **An alternative somebody else has read is not an alternative — it is a negotiating position**, and from the moment it is read you will defend it instead of using it.'],
  ['Ms Huda', '**Which is the best formulation anybody has given to this.** ⚠ **The page is an instrument and reading it turns it into an argument.**'],
  ['Rim', 'What if the alternative is better than anything they will offer?'],
  ['Ms Huda', '**Then you have found that out at a table instead of in a corridor afterwards**, and the meeting becomes a short one. ⚠ **This happens about once in six and students never expect it** — **the page is as likely to tell you to walk as to tell you to settle.**'],
  ['Bassel', 'And do you tell them?'],
  ['Ms Huda', '⚠ **You do not tell them the figure.** **You may tell them that you have an alternative and that you have costed it, and that is usually enough** — **but a figure said out loud becomes something to beat by one unit.**'],
  ['Adnan', 'And if there genuinely is no alternative?'],
  ['Ms Huda', '**Then write _none_, and write what no agreement actually costs.** ⚠ **That is the most useful version of this page and the hardest to write**, because it tells you how much you can be pushed — **and knowing it is better than discovering it at half past four with everybody tired.**'],
  ['Jad', 'Does it change what you say in the room?'],
  ['Ms Huda', '🔊 **It changes almost nothing you say and everything you hear.** ⚠ **A person with a costed alternative listens to an offer as a comparison; a person without one listens to it as a verdict.** **Same words from the other side, two different meetings.**'],
]));
out.push(sp());
out.push(box('Language box – the page nobody sees', [
  '**One question, answered in writing, before the meeting.** ⚠ **_What happens if we reach no agreement at all?_** **The answer must contain a figure** — **_it would be difficult_ is a feeling and it is the answer every room gives first.**',
  '**Before, and at a table.** ⚠ **In the room you will value the alternative against the pressure you are under and not against the facts**, and **the pressure in the room is always higher than the pressure in the problem.**',
  '⚠ **Nobody reads it.** **Not your partner, not the class, not your teacher.** **And that is not a rule about privacy: an alternative somebody else has read is not an alternative, it is a negotiating position** — **and from the moment it is read you will defend it instead of using it.** **The page is an instrument and reading it turns it into an argument.**',
  '**It may tell you to walk, and students never expect that.** ⚠ **About once in six the alternative is better than anything the other side will offer**, and then you have found it out at a table rather than in a corridor afterwards.',
  '**What you may say about it in the room, and what you may not.** ⚠ **You may say that you have an alternative and that you have costed it.** **You may not say the figure** — **a figure said out loud becomes something to beat by one unit.**',
  '**And if there genuinely is no alternative, write _none_ — and then write what no agreement costs.** ⚠ **That is the most useful version of this page and the hardest to write**, because it tells you how far you can be pushed. **Knowing it is better than discovering it at half past four with everybody tired.**',
  '**What the page changes.** ⚠ **Almost nothing you say and everything you hear.** **A person with a costed alternative listens to an offer as a comparison; a person without one listens to it as a verdict.** **Same words from the other side, two different meetings.**',
  '**Pronunciation.** 🔊 **Track 14.8** **Say the public sentence and stop:** _we have an alternative and we have costed it._ ⚠ **The fault is not nerves; it is the helpful half-sentence that follows** — _…and it is not far off what you are offering_ — **which gives them the figure in words instead of in numbers.** **Say the eight words, and then nothing.**',
  '**The shapes, for the page.** _If we reach nothing: ______________, which costs ______________ and takes ______________._ _Alternative: **none.** No agreement costs ______________ a month._ ⚠ **And for the room:** _we have an alternative and we have costed it._ **Never the number.**',
  '**One practical note on when to write it, because students will leave it until the night before and then not do it.** ⚠ **Write it when the disagreement starts, not when the meeting is arranged.** **At the start you can still see the failure case clearly**; by the time a meeting is in the diary you have spent weeks wanting the agreement, **and wanting it changes what you are willing to write down about doing without it.**',
  '**Practise:** Answer the question with a figure in it. **1** where the alternative is worse  **2** where it is better  **3** where there is none  **4** one that takes time rather than money  **5** one said in the room without the figure',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B states the alternative **with a figure and a duration**, and then says the room version — **that an alternative exists and has been costed, without the number.** ⚠ **Two rows on each card have no alternative at all**, and B must write _none_ and cost the no-agreement instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the situation)_ __________.'],
  ['B', '**If we reach nothing:** __________, which costs __________ and takes __________.'],
  ['B', '_(in the room)_ We have an alternative and we have costed it.'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_One client of nineteen years; one disputed order._', '_One distributor; fifteen handsets a quarter._'],
  ['_⚠ One supplier of a part nobody else makes._', '_⚠ One landlord; the lease has four years to run._'],
  ['_Four sites; two could be covered from Homs._', '_A monthly report; the weekly one takes two hours._'],
  ['_⚠ The only laboratory in the governorate with the analyser._', '_⚠ One employer; one post; no other opening this year._'],
  ['_Three suppliers quoted in August, within nine per cent._', '_Two printers in the city who can do the colour._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each alternative with its figure, and the room version. ⚠ **The four rows marked ⚠ have no alternative**, and the honest answer is **_none_** with the cost of no agreement beside it. **An invented alternative is worse than none, because it will be believed by the only person it can hurt.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own page. ⚠ **It is not shown to your partner, it is not collected, and it is not read aloud.** **One question, one answer, and a figure in the answer.** **If the answer is _none_, write _none_ and then write what no agreement costs you a month.** **Fold it and put it away.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked one question with nobody naming their disagreement: what happens if you reach no agreement at all? Mazen said it would be difficult, which is a feeling and is the answer the room gives — so he said it again with a figure in it: he would keep sending the handsets back one at a time, which has cost about eleven days of his own time since March, and the distributor would keep replacing four in nine. Eleven days and four in nine is an alternative, and he now knows something he did not know thirty seconds earlier: he can live without an agreement, which is the whole purpose of the page. Dima said it has to be written before, and before and at a table — because in the room you will value the alternative against the pressure you are under and not against the facts, and the pressure in the room is always higher than the pressure in the problem. Omar asked who reads it, and nobody: not your partner, not the class, not your teacher. Dima said that is not a rule about privacy but a rule about what the page is — an alternative somebody else has read is not an alternative but a negotiating position, and from the moment it is read you will defend it instead of using it. Rim asked what happens if the alternative is better than anything they will offer, and then you have found that out at a table instead of in a corridor afterwards, and the meeting becomes a short one: it happens about once in six and students never expect it. Bassel asked whether you tell them, and you do not tell them the figure — you may tell them that you have an alternative and have costed it, and that is usually enough, but a figure said out loud becomes something to beat by one unit. Adnan asked what to do if there genuinely is no alternative, and then write none, and write what no agreement actually costs — which is the most useful version of this page and the hardest to write, because it tells you how much you can be pushed, and knowing it is better than discovering it at half past four with everybody tired. And Jad asked whether the page changes what you say in the room, and it changes almost nothing you say and everything you hear: a person with a costed alternative listens to an offer as a comparison, and a person without one listens to it as a verdict. Same words from the other side, two different meetings._'));
out.push(p('**Listener task:** nothing is written about anybody\'s page. ⚠ **Write instead the one sentence you would say in the room**, which is the only part of this cycle that is public.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes **about** the page — not the page itself. Answer the questions.'));
out.push(model([
  '**WHAT WRITING IT DOWN DID** · M. Hariri · 27 November',
  '**I have written the alternative twice now and I am not going to tell anybody what is on either sheet.** ⚠ **This is about what the writing did, which turns out to be the interesting part.**',
  '**The first time, in March, I could not finish the sentence.** I wrote _if we reach nothing, I shall_ — **and I sat there.** ⚠ **I had been in that argument for five months and I had never once asked myself what the failure case was.** **That is not unusual and I have stopped being embarrassed by it: the question is never asked because asking it feels like planning to lose.**',
  '**What I eventually wrote.** _I keep sending them back one at a time. About eleven days of my own time since March. They keep replacing four in nine._ ⚠ **Three short sentences, two figures, and it took forty minutes**, nearly all of which was the eleven days.',
  '**What changed, and it is not what I expected.** ⚠ **I did not become braver.** **I did not ask for more and I did not threaten anything.** **What changed is what I heard in the meeting.** Their first offer — **six in nine, reviewed quarterly** — **arrived as a comparison rather than as a verdict**, and I could see in about four seconds that it was better than eleven days of my own time.',
  '**So I took it, and I took it quickly**, which I would not have done in March. ⚠ **In March I would have fought for eight in nine for another month**, because without the page there was nothing to compare the six to **except my own sense of what I deserved**, which is not a figure and cannot be beaten.',
  '**The second time, in October, the page said something harder.** _Alternative: **none.**_ ⚠ **And then what no agreement costs**, which is the version I was warned about and did not believe until I wrote it. **It tells you exactly how far you can be pushed**, and I went into that meeting knowing it, **and I would rather have known it than not.**',
  '**And the one thing I shall keep doing.** ⚠ **Forty minutes at a table, with the door shut, before anything that matters.** **It is the cheapest forty minutes in this book** — **and nobody sees the paper, which is the only reason it tells the truth.** **I have tried doing it with a colleague twice and both pages came out different.** ⚠ **With somebody in the room I write the alternative I would be willing to admit to**, which is a better alternative than I have got, **and a page that flatters me is worse than no page**, because I shall believe it in the meeting. **Alone, the sheet says eleven days of my own time and four in nine, and neither of those is anything I would volunteer.**',
]));
out.push(item('1', 'What happened the first time he tried to write the page, and why does he say the question is never asked?'));
out.push(item('2', 'What changed after he wrote it, and what did not?'));
out.push(item('3', 'What did the October page say, and what does he say about it?'));
out.push(writers([
  'A page **about** the alternative, never the alternative itself: **that you have written it and will not say what is on it** → **what happened the first time you tried** → **what you eventually wrote, and how long it took** → **what changed, and what did not** → **what you did differently as a result** → **the harder version, if you have written one** → **and the practice you keep.**',
  '⚠ **Say in the first line that the content is not coming.** _I have written it twice and I am not going to tell anybody what is on either sheet._ **The refusal is part of the content**: a page that gives the figure has demonstrated the opposite of what it is arguing.',
  '**Be exact about the difficulty of starting.** _I wrote "if we reach nothing, I shall" and I sat there._ ⚠ **And give the reason without self-reproach:** _the question is never asked because asking it feels like planning to lose._',
  '**Separate what changed from what did not.** _I did not become braver. I did not ask for more. What changed is what I heard._ ⚠ **That distinction is the whole value of the cycle**, and a page that claims new courage has claimed the wrong thing.',
  '⚠ And **give the practice with its duration.** _Forty minutes at a table with the door shut._ **Then the sentence that makes it work:** _nobody sees the paper, which is the only reason it tells the truth._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about writing it (80 words or more).'));
out.push(p('**WHAT WRITING IT DOWN DID** · ______________ · ______________   **I have written the alternative ______________ and I am not going to say what is on it.** ⚠ ______________.   **The first time I could not ______________.** I wrote _"______________"_ — **and I sat there.** ⚠ **I had been in that argument for ______________ and had never once asked ______________.**   **What I eventually wrote.** ______________. ⚠ **______ sentences, ______ figures, and it took ______________.**   **What changed, and it is not what I expected.** ⚠ **I did not ______________. What changed is ______________.**   **So I ______________**, which I would not have done ______________.   **And the one thing I shall keep doing.** ⚠ ______________ — **and nobody sees the paper, which is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The refusal to give the content, in the first line',
  'The difficulty of starting, with the reason and no self-reproach',
  'What changed separated from what did not',
  'The practice with its duration',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentence about what changed**, and the room says whether it is about courage or about hearing. ⚠ **It should be about hearing.**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the refusal first, the difficulty of starting, what changed against what did not, and the practice with its duration. ⚠ **The alternative itself appears nowhere.**'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the refusal to give the content, the difficulty of starting with its reason, what changed against what did not, and the practice with its duration. ⚠ **And one extra check: does the page give away the alternative anywhere?**'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say only the public sentence: _we have an alternative and we have costed it._** ⚠ The room listens for the number — **and in a first run about a third of the class says it without noticing.** Then the sentence the cycle ends on, which is Mr Hariri\'s: **nobody sees the paper, which is the only reason it tells the truth.**'));
out.push(hw('Write the page about writing it (80+ words). ⚠ **And write the alternative itself, separately, for the live disagreement you brought** — **forty minutes, a table, a shut door, a figure.** **It is not homework that will be collected and that is the point.** ⚠ **And write the date at the top of it**, because you will want to read it again after the meeting and compare what you wrote with what you accepted. **That comparison is the only way anybody finds out whether their own alternative was honest**, and it can only be made once. **14.5 is the close**, or the plain refusal to close today.'));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  Closing, or saying that you are not'));
out.push(p('**Function:** closing — or saying plainly that you are not closing today   ·   **Grammar:** _I\'d rather not settle this now, and here is why_   ·   **Pronunciation:** the close said as a summary and not as a question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A makes an offer; B **closes it** in two sentences — **what is agreed, and what happens next, with a date.** ⚠ Then A makes a second offer and B **declines to close**, in two sentences, **without declining the offer.** **The second is much harder and the room should hear why.**'));
out.push(board('Right, well, I think we are more or less there, so…', 'So: the eighth, with the sign-off on Tuesday. I shall send that in writing this afternoon and you confirm by Thursday.'));
out.push(p('**b**  Which is a close? **1** _I think we are more or less agreed._  **2** _So: the eighth, with the sign-off on Tuesday, confirmed in writing by Thursday._  **3** _That all sounds fine._  **4** _I would rather not settle this today, because I have not seen the specification; may I come back on Monday?_  **5** _Leave it with me._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two things does Ms Huda say a close contains, and what does she say about _leave it with me_?   **A** thanks and a handshake; _leave it with me_ is polite and fine   **B** **what is agreed and what happens next with a date** — and **_leave it with me_ is not a close, because nobody can tell afterwards whether it happened**   **C** a price and a signature; _leave it with me_ is a close'));
out.push(p('**b**  Listen again. **1** What does Mr Barghouti say about agreements that are closed in a corridor?   **2** What does Ms Huda say the refusal to close must contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  So: the eighth', [
  ['Ms Huda', 'Two sentences. What is agreed, and what happens next with a date. Mrs Shaaban.'],
  ['Rim', 'So: the code on every slip from the first of the month, and the gate count goes monthly. ⚠ **I shall put that in writing this afternoon and you confirm by Thursday.**'],
  ['Ms Huda', '**That is a close and it took eleven seconds.** ⚠ **Two things only: what is agreed, and what happens next with a date.** **No thanks, no summary of the discussion, no account of how hard it was.**'],
  ['Omar', 'Most of what I have agreed this year was closed with _leave it with me._'],
  ['Ms Huda', '⚠ **_Leave it with me_ is not a close.** **It is an undertaking by one person to do an unspecified thing at an unspecified time**, and nobody can tell afterwards whether it happened. **Six weeks later there are two honest accounts of what was agreed and no way to settle between them.**'],
  ['Adnan', 'And the corridor.'],
  ['Adnan', '⚠ **Everything decided in a corridor is decided twice.** Once in the corridor, and once again six weeks later when the two people discover they agreed to different things. **I have the second conversation about four times a year** and it is always with somebody I like.'],
  ['Ms Huda', '**Which is why the close is written down the same day, by the person who closed it.** ⚠ **Not by the other side.** **Whoever writes the close decides what was agreed**, and that is not a trick; it is simply the only version anybody will have.'],
  ['Dima', 'And when you do not want to close?'],
  ['Ms Huda', '**Then you must say so, and that is the harder of the two.** ⚠ **A person who does not want to close and says nothing has closed by silence** — **and silence closes on the other side\'s terms, because they will write the note.**'],
  ['Bassel', 'What do you say?'],
  ['Ms Huda', '**Three things, and the third is the one people leave out.** _I would rather not settle this today._ **Why** — one reason. ⚠ **And when you will**, with a date. **_I need to think about it_ without a date is a close by silence wearing a different coat.**'],
  ['Jad', 'Does refusing to close offend people?'],
  ['Ms Huda', '**Far less than students expect.** ⚠ **What offends people is being pressed for a decision and then watching nothing happen.** **A stated date is a courtesy** — **and the person who gives one is the person whose dates are believed next time.**'],
  ['Mazen', 'And how do you say the close itself? Mine always comes out as a question.'],
  ['Ms Huda', '🔊 **Say it as a summary, with a falling tone, and do not look for agreement at the end of it.** ⚠ _So: the eighth, with the sign-off on Tuesday._ **A close said with a rise invites the whole thing to be reopened**, and about half of them are. **If they disagree, they will say so without being asked.**'],
]));
out.push(sp());
out.push(box('Language box – the close, and the refusal to close', [
  '**A close is two sentences and contains two things.** **What is agreed.** ⚠ **What happens next, with a date.** _So: the eighth, with the sign-off on Tuesday. I shall put that in writing this afternoon and you confirm by Thursday._ **No thanks, no summary of the discussion, no account of how hard it was.**',
  '⚠ **_Leave it with me_ is not a close.** **It is an undertaking by one person to do an unspecified thing at an unspecified time**, and nobody can tell afterwards whether it happened — **so six weeks later there are two honest accounts and no way to settle between them.**',
  '**Everything decided in a corridor is decided twice.** ⚠ **Once in the corridor, and once again six weeks later when the two people discover they agreed to different things** — **and that second conversation is always with somebody you like.**',
  '**Write the close the same day, and write it yourself.** ⚠ **Whoever writes the close decides what was agreed.** **That is not a trick: it is simply the only version anybody will have.**',
  '**The refusal to close is three things and the third is the one people leave out.** **1** _I would rather not settle this today._ **2** One reason. ⚠ **3 When you will, with a date.** **_I need to think about it_ with no date is a close by silence wearing a different coat.**',
  '⚠ **A person who does not want to close and says nothing has closed by silence** — **and silence closes on the other side\'s terms, because they will write the note.**',
  '**Refusing to close offends people far less than students expect.** ⚠ **What offends people is being pressed for a decision and then watching nothing happen.** **A stated date is a courtesy, and the person who gives one is the person whose dates are believed next time.**',
  '**Pronunciation.** 🔊 **Track 14.10** **Say the close as a summary, with a falling tone, and do not look for agreement at the end of it.** ⚠ **A close said with a rise invites the whole thing to be reopened**, and about half of them are. **If they disagree, they will say so without being asked.**',
  '**And what to do when the other side closes and you do not accept their version.** ⚠ **Say so in the room, in one sentence, before anybody stands up:** _that is not quite what I understood — may I give you my two sentences?_ **A correction made standing up costs nothing**; **the same correction made in writing the next morning is a disagreement with a document, and the document will usually be theirs.**',
  '**Practise:** Close in two sentences, or decline to close in three. **1** a simple agreement  **2** one with a condition in it  **3** a refusal to close, with a date  **4** one where the other side said _leave it with me_, and the repair  **5** a close said flat, with no rise at the end',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the end of a discussion from the card. B either **closes it in two sentences** or **declines to close in three, with a date.** ⚠ **Two rows on each card cannot honestly be closed** — something needed is missing — **and B must decline and name what is missing.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the end of the discussion)_ __________.'],
  ['B', '_(close)_ So: __________. I shall __________ and you __________ by __________.'],
  ['B', '_(or decline)_ I would rather not settle this today, because __________. May I come back to you on __________?'],
]));
out.push(table(['Card A – the end of the discussion', 'Card B – the end of the discussion'], [
  ['_The eighth, with the sign-off on Tuesday._', '_Monthly reports from the first of next month._'],
  ['_⚠ "…and we can work out the detail later."_', '_⚠ "…and the price will be about what we said."_'],
  ['_The code on every slip; the gate count monthly._', '_Two sites in the first quarter, four in the second._'],
  ['_⚠ "I shall have to check with my colleague."_', '_⚠ "…subject to the usual arrangements."_'],
  ['_A second engineer at Homs from January, weekly visits._', '_The exclusion written in, the page one line longer._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each close in two sentences, or each refusal in three with its date. ⚠ **The four rows marked ⚠ cannot be closed honestly** — _the detail later_, _about what we said_, _check with my colleague_, _the usual arrangements_ — **and in each the missing thing has a name.** **A pair that closed one of them has produced an agreement with a hole in it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the close for your own disagreement in two sentences. ⚠ **Then write the version you would actually have said last month**, and count the words. **Most people find the real version is three times longer and contains no date.**'));
out.push(p('**b**  Swap and perform. ⚠ Your partner answers the close **with a rise** and then **with a fall**, and you say which of the two you would have reopened.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim gave the close in two sentences: the code on every slip from the first of the month and the gate count monthly, and she will put that in writing this afternoon and they confirm by Thursday. That is a close and it took eleven seconds — two things only, what is agreed and what happens next with a date, and no thanks, no summary of the discussion and no account of how hard it was. Omar said most of what he has agreed this year was closed with leave it with me, and leave it with me is not a close: it is an undertaking by one person to do an unspecified thing at an unspecified time, and nobody can tell afterwards whether it happened, so six weeks later there are two honest accounts of what was agreed and no way to settle between them. Adnan said everything decided in a corridor is decided twice — once in the corridor and once again six weeks later when the two people discover they agreed to different things, and he has that second conversation about four times a year, always with somebody he likes. Which is why the close is written down the same day by the person who closed it, and not by the other side: whoever writes the close decides what was agreed, and that is not a trick but simply the only version anybody will have. Dima asked about not wanting to close, which is the harder of the two, because a person who does not want to close and says nothing has closed by silence — and silence closes on the other side\'s terms, because they will write the note. Bassel asked what you say, and three things, of which the third is the one people leave out: I would rather not settle this today, one reason, and when you will, with a date. I need to think about it without a date is a close by silence wearing a different coat. Jad asked whether refusing to close offends people, and far less than students expect: what offends people is being pressed for a decision and then watching nothing happen, so a stated date is a courtesy, and the person who gives one is the person whose dates are believed next time. And Mazen said his closes always come out as questions, and the answer is to say it as a summary, with a falling tone, and not to look for agreement at the end of it. So: the eighth, with the sign-off on Tuesday. A close said with a rise invites the whole thing to be reopened, and about half of them are — and if they disagree, they will say so without being asked._'));
out.push(p('**Listener task:** write your partner\'s close and the number of words in the version they would actually have said.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan writes about the corridor. Answer the questions.'));
out.push(model([
  '**DECIDED TWICE** · A. Barghouti · 4 December · _circulated to the four of us who were in it_',
  '**On 16 October four of us agreed something in a corridor and on 28 November we discovered that we had agreed four different things.** ⚠ **Nobody was lying and nobody had changed their mind.** **This note is so that we do not do it a fifth time.**',
  '**What I believed we had agreed.** That refusals under the new wording would go out unsigned by the originating office, **with a copy to contracts.**',
  '**What the other three believed.** That they would go out **signed**; that the copy was **optional**; and — the fourth — **that we had agreed to look at it again in the new year.** ⚠ **All four of those are things somebody said in that corridor.**',
  '**Why four honest people came out with four agreements.** Because a corridor has no close in it. ⚠ **A close is two sentences and somebody has to say them out loud while everybody is still standing there**: **what is agreed, and what happens next with a date.** **What we had instead was _right, good, we will sort that out_** — **which is four words that mean nothing and feel like a decision.**',
  '**The cost.** **Six weeks of refusals went out in two different forms from two offices.** ⚠ **Eleven of them have had to be reissued**, and the eleven are the ones a member of the public is waiting on. **That is the figure in this note and it is the only one that matters.**',
  '**What I am proposing, and it costs about twenty seconds.** ⚠ **Whoever is nearest the end of the conversation says the two sentences out loud before anybody moves**, and sends them to the others the same day. **Not minutes. Two sentences.**',
  '**And the part I expect resistance to.** **It will feel pedantic in the corridor.** ⚠ **It feels pedantic for about four seconds and it is the only four seconds in the whole business that nobody has to pay for twice** — **and I would rather be the pedant in October than the person reissuing eleven refusals in December.** **I have tried it twice since.** ⚠ **The first time two of the three said _yes, that is what we agreed_ and the third said _I thought we were looking at it again in January_** — **which is the November conversation arriving four seconds after the decision instead of six weeks after it, at a cost of nothing at all.** **The second time everybody agreed, the two sentences took eleven seconds, and nothing has come back.**',
]));
out.push(item('1', 'What did the four people believe they had agreed, and what does he say about all four versions?'));
out.push(item('2', 'What does he say a corridor has no room for, and what did they have instead?'));
out.push(item('3', 'What is he proposing, what does it cost, and what resistance does he expect?'));
out.push(writers([
  'A note about something decided twice: **the two dates and the arithmetic in the first line** → **what you believed was agreed** → **what the others believed** → **why honest people came out with different agreements** → **the cost, with a figure** → **what you are proposing, with its cost in seconds** → **and the resistance you expect.**',
  '⚠ **Protect everybody in the second sentence.** _Nobody was lying and nobody had changed their mind._ **A note of this kind is only usable if it is not an accusation**, and the four people who have to adopt the practice are the four it describes.',
  '**Set the versions out side by side and attribute none of them.** ⚠ **Naming who believed what turns the note into a judgement.**',
  '**Give the cost in the thing the reader cares about.** _Eleven refusals reissued, and the eleven are the ones a member of the public is waiting on._ ⚠ **Six weeks is an inconvenience; eleven people waiting is a reason.**',
  '⚠ And **name the resistance before anybody raises it.** _It will feel pedantic in the corridor._ **Then price it:** _it feels pedantic for about four seconds, and it is the only four seconds in the whole business that nobody has to pay for twice._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about something decided twice (80 words or more).'));
out.push(p('**DECIDED TWICE** · ______________ · ______________   **On ______________ we agreed something and on ______________ we discovered that we had agreed ______________.** ⚠ **Nobody was lying and nobody had changed their mind.**   **What I believed we had agreed.** ______________.   **What the others believed.** ______________; ______________; **and ______________.** ⚠ **All of those are things somebody said.**   **Why honest people came out with different agreements.** ⚠ ______________. **What we had instead was _"______________"_** — **which ______________.**   **The cost.** ______________. ⚠ ______________ **is the figure that matters.**   **What I am proposing.** ⚠ ______________, **which costs ______________.**   **And the resistance.** ⚠ **It will feel ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two dates and the arithmetic in the first line',
  'Everybody protected in the second sentence',
  'The versions set out and none attributed',
  'The cost in the thing the reader cares about, and the resistance named first',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the four words that felt like a decision** — _right, good, we will sort that out_ — and the room says what each of them had understood by it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the arithmetic first, everybody protected, the versions unattributed, and the resistance named before anybody raises it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the arithmetic in the first line, everybody protected, the versions unattributed, and the cost in the thing the reader cares about.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your close twice — once with a rise and once with a fall — and the room says which one it would have reopened.** ⚠ **The rise is reopened about half the time and the fall almost never**, and the two versions differ by nothing except the last syllable. Then the sentence the cycle ends on, which is Mr Barghouti\'s: **everything decided in a corridor is decided twice.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the **last thing you agreed verbally** and write its two sentences now, late: **what was agreed, and what happens next with a date.** **Send it.** **If the reply corrects you, that is the note doing its work six weeks early.** ⚠ **And count the replies that correct you over a month.** **In most people\'s first month it is between one in four and one in three**, which is the real measure of how much is being decided twice — **and it is a figure nobody has about their own work until they send the two sentences.** **14.6 is the two-page note** — **interests, trades, limits, alternative.**'));

// ===================== 14.6 =====================
out.push(h2('14.6  The two-page note'));
out.push(p('**Function:** writing the negotiator\'s own page — interests, trades, limits, alternative   ·   **Grammar:** the four sections, in that order, on one side of paper   ·   **Pronunciation:** reading your own note back aloud, which is where the missing section is heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say your four sections aloud in order — **interests, trades, limits, alternative** — **in under ninety seconds.** ⚠ **Your partner times you and says which section you spent longest on.** **It is almost always the first**, and the first is the one the other side already knows.'));
out.push(board('Let me explain the background to all this.', 'Interests: theirs, a date they signed for. Ours, two days for the colour. Trades: the split delivery.'));
out.push(p('**b**  Which of the four is missing? **1** _Interests, trades, limits — and I know what I shall do if we get nowhere._  **2** _Interests, limits, alternative._  **3** _Trades, limits, alternative._  **4** _Interests, trades, alternative._  **5** _Interests, trades, limits, alternative._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the four sections are for, and which one goes on a separate sheet?   **A** they are a report for your manager; none is separate   **B** **they are one side of paper you take in and look at twice** — and **the alternative goes on a separate sheet, because that one is not shown to anybody**   **C** they are a record written afterwards'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say she does with the page during the meeting?   **2** What does Ms Huda say about the order of the four?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  One side of paper', [
  ['Ms Huda', 'Four sections, in order, on one side of paper. Mr Tahhan, say them.'],
  ['Bassel', 'Interests — theirs first, then mine. Trades. Limits. ⚠ **And the alternative, which is on a different sheet in a different pocket.**'],
  ['Ms Huda', '**Theirs first, and that is not politeness.** ⚠ **A page that opens with your own interests is a page you have written to persuade yourself**, and you will read it in the meeting and feel justified. **A page that opens with theirs is an instrument.**'],
  ['Dima', 'I look at mine twice. Once before I go in and once if it goes badly.'],
  ['Ms Huda', '**Say what you look at the second time.**'],
  ['Dima', '⚠ **The limits.** **Not the trades — the limits.** When a meeting goes badly I start giving things away in order to keep it pleasant, **and the two lines under _limits_ are the only thing that stops me.**'],
  ['Ms Huda', '**Which is what the section is for and it should be said plainly.** ⚠ **The limits are not written for the other side and not written for the argument. They are written for the version of you that is forty minutes into a difficult room and wants it to be over.**'],
  ['Omar', 'And the order? Does it matter beyond the first one?'],
  ['Ms Huda', '**It matters once.** ⚠ **Trades before limits**, because a person who writes limits first writes too many of them. **You saw that in 14.2: six items and nothing left to trade with.** **Writing the trades first makes the limits compete for their place.**'],
  ['Rim', 'Mine went from six to two when I did it in that order.'],
  ['Ms Huda', '**And the alternative on a separate sheet, in a different pocket.** ⚠ **Not for secrecy** — **because a page you may put on the table and a page you may not should not be the same piece of paper.** **At some point you will turn your own note round to show somebody a figure.**'],
  ['Adnan', 'I have done exactly that.'],
  ['Ms Huda', '**Everybody has, and it is why the rule is physical rather than a matter of discipline.** ⚠ **Two sheets, two pockets, and the problem cannot arise.**'],
  ['Jad', 'How long should it be?'],
  ['Ms Huda', '**One side.** ⚠ **A note you cannot find a line in while somebody is talking to you is not a note; it is a document** — **and a document is something you read afterwards, which is too late.**'],
  ['Mazen', 'And reading it back?'],
  ['Ms Huda', '🔊 **Aloud, once, the night before, in order.** ⚠ **The missing section is audible and invisible: you will see four headings on the page and hear only three things.** **The one you hear nothing under is the one you have not thought about**, and it is the alternative about half the time.'],
]));
out.push(sp());
out.push(box('Language box – the negotiator\'s own page', [
  '**Four sections, in this order, on one side of paper.** **1 Interests — theirs first, then yours.** **2 Trades.** **3 Limits.** ⚠ **4 Alternative — on a separate sheet, in a different pocket.**',
  '**Theirs first, and it is not politeness.** ⚠ **A page that opens with your own interests is a page written to persuade yourself**, and you will read it in the meeting and feel justified. **A page that opens with theirs is an instrument.**',
  '**Trades before limits, and the order matters exactly once.** ⚠ **A person who writes limits first writes too many of them** — **six items and nothing left to trade with, which is 14.2.** **Writing the trades first makes the limits compete for their place.**',
  '**What the limits section is actually for.** ⚠ **Not for the other side and not for the argument.** **It is written for the version of you that is forty minutes into a difficult room and wants it to be over** — **the one that starts giving things away to keep it pleasant.**',
  '**The alternative on a separate sheet, in a different pocket, and the rule is physical rather than moral.** ⚠ **At some point you will turn your own note round to show somebody a figure.** **Two sheets and two pockets, and the problem cannot arise.**',
  '**One side of paper.** ⚠ **A note you cannot find a line in while somebody is talking to you is not a note; it is a document** — **and a document is read afterwards, which is too late.**',
  '**Read it back aloud, once, the night before, in order.** ⚠ **The missing section is audible and invisible**: **you will see four headings and hear only three things.** **The one you hear nothing under is the one you have not thought about**, and in about half of first attempts it is the alternative.',
  '**Pronunciation.** 🔊 **Track 14.12** **Read the four headings aloud with what is under them, in order, and time it.** ⚠ **Over ninety seconds means the interests section has become the background**, which is the part the other side already knows and the part you cannot resist writing.',
  '**What goes on the page and what does not, because the first draft always carries too much.** ⚠ **No history. No account of how the disagreement arose. No arguments** — **you will not read an argument in the room and you do not need one on paper.** **Four headings and what is under them, and everything that is not one of the four belongs in your head or nowhere.**',
  '**Practise:** Say the four sections in under ninety seconds. **1** with theirs first  **2** with the trades before the limits  **3** with a limit that has a consequence  **4** with the alternative named but not read out  **5** one where a section is missing, and say which',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a note from the card — **the four headings and what is under them.** B says **which section is missing or wrong, and why.** ⚠ **Two rows on each card have all four sections and a fault in the order**, which is harder to find than a missing one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the note)_ Interests: __________. Trades: __________. Limits: __________. Alternative: __________.'],
  ['B', 'Missing / wrong: ______________, **because** ______________.'],
]));
out.push(table(['Card A – the note', 'Card B – the note'], [
  ['_Interests: ours only. Trades, limits, alternative all present._', '_Interests, trades, limits. No alternative._'],
  ['_⚠ All four, but limits written before trades: seven limits._', '_⚠ All four, but the alternative is on the same sheet._'],
  ['_Interests, limits, alternative. No trades._', '_Interests: four paragraphs of background. The rest in one line each._'],
  ['_⚠ All four, theirs second: "our position is…" first._', '_⚠ All four, and a limit with no consequence beside it._'],
  ['_Trades and limits only; no interests at all._', '_All four, on two and a half sides._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the fault in each of the ten. ⚠ **The four marked ⚠ have all four sections and are still wrong** — **limits before trades, the alternative on the same sheet, your own interests first, and a limit with no consequence** — **and those four faults are invisible to a reader checking that the headings are present.** '));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own four sections, **one side of paper**, theirs first, trades before limits. ⚠ **The alternative goes on a separate sheet** and nothing on the first sheet refers to it.'));
out.push(p('**b**  Read the first sheet aloud to your partner **in ninety seconds** — **not the alternative.** ⚠ Your partner says **which heading they heard least under.** **Then they time the interests section alone**, and if it is over thirty seconds it has become the background.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel gave the four sections: interests, theirs first and then his; trades; limits; and the alternative, which is on a different sheet in a different pocket. Theirs first, and that is not politeness — a page that opens with your own interests is a page you have written to persuade yourself, and you will read it in the meeting and feel justified, whereas a page that opens with theirs is an instrument. Dima said she looks at hers twice, once before she goes in and once if it goes badly, and what she looks at the second time is the limits, not the trades: when a meeting goes badly she starts giving things away in order to keep it pleasant, and the two lines under limits are the only thing that stops her. Which is what the section is for, and it should be said plainly — the limits are not written for the other side and not written for the argument, but for the version of you that is forty minutes into a difficult room and wants it to be over. Omar asked whether the order matters beyond the first one, and it matters once: trades before limits, because a person who writes limits first writes too many of them, which the room saw in 14.2 with six items and nothing left to trade with. Writing the trades first makes the limits compete for their place, and Rim said hers went from six to two when she did it in that order. And the alternative on a separate sheet in a different pocket, not for secrecy but because a page you may put on the table and a page you may not should not be the same piece of paper. Adnan said he has done exactly that, turned his own note round to show somebody a figure, and everybody has, which is why the rule is physical rather than a matter of discipline: two sheets, two pockets, and the problem cannot arise. Jad asked how long the note should be, and one side — a note you cannot find a line in while somebody is talking to you is not a note but a document, and a document is something you read afterwards, which is too late. And Mazen asked about reading it back, which is done aloud, once, the night before, in order: the missing section is audible and invisible, because you will see four headings on the page and hear only three things, and the one you hear nothing under is the one you have not thought about._'));
out.push(p('**Listener task:** write the heading your partner was heard least under.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first sheet Dima takes into a meeting. Answer the questions.'));
out.push(model([
  '**MEETING OF 11 DECEMBER · one side** · D. Khoury · _alternative on the other sheet_',
  '**THEIR INTERESTS.** The bulletin goes to print on the twelfth of each month and **their printer charges for a second plate after four o\'clock on the eleventh.** They have had **two late changes in three months** and both cost them. ⚠ **They are not trying to control the copy; they are trying not to pay twice.**',
  '**OUR INTERESTS.** **Corrections of fact.** **Nine of the eleven changes I have asked for in a year were factual** — a figure, a name, a date — **and the two that were not are the two they remember.**',
  '**TRADES.** **1** All non-factual changes **by the ninth**, in return for factual corrections **up to four o\'clock on the eleventh.** **2** A single consolidated list from me instead of three emails — **in return for one named person at their end, so that it goes to somebody rather than to an address.**',
  '**LIMITS.** ⚠ **A factual error that is known before print is corrected before print.** **Consequence if traded away: we print a figure we know to be wrong, and the correction appears a month later beside a different figure, which is how the two get confused.** **That is one line and it is the only one.**',
  '**ALTERNATIVE.** _On the other sheet._ ⚠ **Nothing on this page refers to what is on it**, because this page may end up turned round on a table and that one may not.',
  '**And four things I have written at the bottom because I shall forget them.** ⚠ **One: they are right about the two late changes, and I should say so in the first two minutes rather than being brought to it** — **a concession made early is worth about twice one extracted at minute forty, and this one costs me nothing at all.** **Two: the second trade is the one I actually want.** **A named person is worth more than the deadline**, because a deadline has to be defended every month and a person answers the telephone — **so I must not spend all the goodwill on the first trade, which is the one I shall be tempted to push because it is easier to say.** **Three: when they say _we shall try_, that is not a trade and I must ask what it is in return for.** ⚠ **Four: if the meeting turns, I look at the limits and not at the trades**, and there is one line under limits and I shall be able to find it.',
]));
out.push(item('1', 'What does she say the other side is and is not trying to do?'));
out.push(item('2', 'What is her single limit, and what is the consequence of trading it away?'));
out.push(item('3', 'What are the two things at the bottom, and why are they there?'));
out.push(writers([
  'One side of paper, four headings: **their interests** → **your interests** → **trades, numbered, each with its _in return for_** → **limits, with the consequence of giving each one up** → **and anything you know you will forget.**',
  '⚠ **State their interest generously and then say what it is not.** _They are not trying to control the copy; they are trying not to pay twice._ **The second half is what stops you arguing against a motive they have not got**, and it is the sentence you will be glad of in minute forty.',
  '**Number the trades and put _in return for_ inside each one.** ⚠ **A trade written as two items on two lines will be split in the room** — one accepted, one discussed — **and the discussion will not happen.**',
  '**Write the consequence under each limit, not the reason.** _We print a figure we know to be wrong, and the correction appears a month later beside a different figure._ ⚠ **A limit with a consequence survives a long meeting; a limit with a principle does not.**',
  '⚠ And **write at the bottom the things you know you will forget**, including the concession you ought to make early and the trade you actually want. **Naming which trade matters most is what stops you spending the goodwill on the first one** — **and almost everybody spends it on the first one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your one side of paper (80 words or more).'));
out.push(p('**MEETING OF ______________ · one side** · ______________ · _alternative on the other sheet_   **THEIR INTERESTS.** ______________. ⚠ **They are not ______________; they are ______________.**   **OUR INTERESTS.** ______________.   **TRADES.** **1** ______________ **in return for** ______________. **2** ______________ **in return for** ______________.   **LIMITS.** ⚠ ______________. **Consequence if traded away: ______________.**   **And what I shall forget.** ⚠ **One:** ______________. **Two:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Their interests first, with what they are not trying to do',
  'Each trade in one numbered line with _in return for_ inside it',
  'A consequence under each limit, not a reason',
  'The things you know you will forget, at the bottom',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their limits section**, and the room says whether each consequence is a consequence or a principle.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full one side (180 words or more), to the shape in the writer\'s box: theirs first with what they are not after, numbered trades, consequences under the limits, and the bottom two lines. ⚠ **The alternative appears nowhere on this sheet.**'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: their interests first with what they are not after, each trade in one line with _in return for_, a consequence under each limit, and the bottom two lines.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your four headings aloud with what is under them and let a partner time it.** ⚠ **Over ninety seconds means the interests have become the background.** **And the heading nobody hears anything under is the one that has not been thought about.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **the limits are written for the version of you that is forty minutes in and wants it to be over.**'));
out.push(hw('Write the one side (80+ words) **for a real meeting you have coming.** ⚠ Then do the physical part: **two sheets, two pockets.** ⚠ **And read the first sheet aloud to nobody, in order, the night before.** **You will hear a heading with nothing under it.** **Write something under it, even if what you write is _I do not know_** — **because _I do not know_ under a heading is a question you will remember to ask, and a blank is a question you will not.** **14.7 puts you outside the negotiation again** — **mediating one in which both sides are right**, which is where Book 1 left you and where this unit has made it harder.'));

// ===================== 14.7 =====================
out.push(h2('14.7  Review & Mediate: A negotiation in which both sides are right'));
out.push(p('**Function:** mediating a negotiation in which both sides are right   ·   **Recycling:** Unit 14   ·   **Exam practice:** B2 First Reading and Use of English Part 7 · Writing Part 2 (a report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** We can move the date in return of the sign-off coming forward.  **2** Were we to moved the delivery, would the colour be signed off?  **3** Provided that the sign-off will come forward, the date moves.  **4** I am not able trading the seal check.  **5** The negotiate took four months and ended in a trade.  **6** Her reluctant to name a consequence showed it was a preference.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two positions, and the thing neither side has written down.'));
out.push(box(null, [
  '**TWO POSITIONS, BOTH REASONABLE** _(a works and a client, nineteen years)_',
  '**The works.** _"We need two days of the six for the second pass on the colour. Without it the colour on the second half of the run will not match the first half, and we have reprinted a job for that reason twice in four years."_',
  '**The client.** _"We signed for a delivery date before we came to you. Our own customer charges us for a late delivery, and we have paid that twice this year. We cannot move the date and we are not trying to be difficult about the colour."_',
  '⚠ **Both statements are true and both sides have said so to each other.**',
  '**And the thing neither has written down.** **The works has never asked what the client\'s customer actually does with the second half of the run** — **and the client has never asked what happens if the two halves are printed a fortnight apart.**',
  '**The question for the cycle.** _What is there to trade?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a mediator looks for when both sides are right, and what does she say the mediator must not do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  What is there to trade', [
  ['Ms Huda', 'Two positions, both true, both known to the other side. Mr Darwish — who should give way?'],
  ['Omar', 'Neither, as far as I can see. ⚠ **Both of them have a figure and both figures are real.**'],
  ['Ms Huda', '**Then do the mediation, and it is three moves and they are not the Book 1 three.** One: **put the two interests side by side and check that each is stated as the other side would state it.** Two: ⚠ **find the thing neither side has asked about.** Three: **name what is actually divisible.**'],
  ['Dima', 'The thing neither has asked about is in the box.'],
  ['Ms Huda', '**Say it.**'],
  ['Dima', '⚠ **Nobody has asked what the client\'s customer does with the second half of the run.** **If the second half goes to a different shop, or goes into stock, then the two halves are never seen together** — **and the entire colour argument is about a risk that does not exist.**'],
  ['Ms Huda', '**And if they are seen together?**'],
  ['Dima', 'Then the works is right and the date has to move. ⚠ **But nobody knows which it is, and they have been arguing for four months about a question neither of them has asked.**'],
  ['Ms Huda', '⚠ **Which is the finding of this cycle: when both sides are right, the thing to look for is not a compromise. It is a fact nobody has.** **A compromise splits the difference between two positions; a missing fact can dissolve one of them.**'],
  ['Bassel', 'And if the fact goes against you?'],
  ['Ms Huda', '**Then you have lost an argument you were going to lose anyway, four months earlier.** ⚠ **That is the honest version and students should hear it**: **looking for the missing fact is not a technique for winning.** **It is a technique for finding out.**'],
  ['Rim', 'What is actually divisible here?'],
  ['Ms Huda', '**The run.** ⚠ **Not the date and not the colour** — **both of those are indivisible and that is why they have been arguing about them.** **The run can be split: half on the sixth and half on the eighth**, which is what Mr Tahhan eventually offered. **A mediator who names the divisible thing has done the whole job.**'],
  ['Adnan', 'And what must a mediator not do?'],
  ['Ms Huda', '⚠ **Propose the split.** **Name what is divisible and stop.** **A mediator who proposes a settlement has become a third party with a position**, and from that moment there are three interests in the room and only two of them are legitimate.'],
  ['Jad', 'That is a fine line.'],
  ['Ms Huda', '🔊 **It is, and it is audible.** _The run is divisible and the date is not_ **is a mediation.** _So why not do half on the sixth and half on the eighth?_ ⚠ **is a proposal, and the moment it is said both sides begin negotiating with you instead of with each other.**'],
]));
out.push(sp());
out.push(box('Language box – mediating when both sides are right', [
  '**The three moves, and they are not Book 1\'s.** **1** **Put the two interests side by side and check that each is stated as the other side would state it.** ⚠ **2** **Find the thing neither side has asked about.** **3** **Name what is actually divisible.**',
  '⚠ **The finding: when both sides are right, the thing to look for is not a compromise. It is a fact nobody has.** **A compromise splits the difference between two positions; a missing fact can dissolve one of them altogether.**',
  '**And the honest version, which students should hear.** ⚠ **Looking for the missing fact is not a technique for winning.** **If the fact goes against you, you have lost an argument you were going to lose anyway — four months earlier**, which is still the better outcome.',
  '**Name what is divisible, and notice what is not.** ⚠ **The date is indivisible. The colour is indivisible. The run is divisible** — **and the two sides have spent four months arguing about the two things that cannot be split.** **A mediator who names the divisible thing has done the whole job.**',
  '⚠ **And the thing a mediator must not do: propose the split.** **Name what is divisible and stop.** **A mediator who proposes a settlement has become a third party with a position** — **and from that moment there are three interests in the room and only two of them are legitimate.**',
  '**The line is audible, and it is one sentence wide.** _The run is divisible and the date is not_ **is a mediation.** ⚠ _So why not do half on the sixth and half on the eighth?_ **is a proposal**, and from the moment it is said both sides begin negotiating with you instead of with each other.',
  '**Pronunciation.** 🔊 **Track 14.14** **State each side\'s interest in the words that side would use, and do not improve either.** ⚠ **A mediator who states one side better than the other has chosen**, and the room hears it in the length: **the side you believe gets the longer sentence.** **Count the words in both.**',
  '**And how to ask for the missing fact without either side hearing it as an attack on their position.** ⚠ **Ask it of both at once, and ask it as a fact about the world rather than about either of them:** _does anybody know what happens to the second half of the run?_ **Asked of one side it is a cross-examination. Asked of the room it is a gap**, and a gap belongs to nobody.',
  '**One warning, and it is the same warning as every mediation in this course.** ⚠ **Do not decide who is right.** **Here it is easier to break than usual, because neither side is wrong** — **which makes the temptation to be helpful almost irresistible.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has two positions and does **not** show them. A reads both. B makes the three moves: **state each interest as that side would, name the missing fact, and name what is divisible.** ⚠ **In one of the two pairs one side is not stating its real interest** — there is a reason behind the reason — and B must find it. Change roles with the other pair.'));
out.push(table(['Pair A – the works and the client', 'Pair B – the office and the depot'], [
  ['_Works: two days for the colour; reprinted twice in four years._', '_Office: weekly figures, because the committee meets weekly._'],
  ['_Client: a date signed for; charged twice this year._', '_⚠ Depot: "we have not the staff" — and the real interest is the gate count being seen._'],
  ['_Missing fact: what the customer does with the second half._', '_Missing fact: whether the committee reads the weekly figures._'],
  ['_⚠ Divisible: the run. Indivisible: the date, the colour._', '_⚠ Divisible: which figures. Indivisible: the meeting day._'],
  ['_⚠ Both sides state their real interest._', '_⚠ One side is not stating its real interest._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two interests, the missing fact and the divisible thing for each pair. ⚠ **Pair B is the one with a reason behind the reason**: _we have not the staff_ is true and is not why the depot is refusing — **it does not want its gate count read by the committee.** **An interest somebody will not state is still an interest.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the disagreement you brought and do the three moves on it in writing. ⚠ **Write the other side\'s interest in their words, then write the fact neither of you has, then write what is divisible.** Then the question the cycle ends on: **what would you have to find out for one of the two positions to disappear?** — **and whether you would rather know.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what is there to trade:  _Two positions, both true, both known to the other side. Asked who should give way, Omar said neither, as far as he could see: both of them have a figure and both figures are real. So the mediation, which is three moves and they are not the Book 1 three: put the two interests side by side and check that each is stated as the other side would state it; find the thing neither side has asked about; and name what is actually divisible. Dima said the thing neither has asked about is that nobody has asked what the client\'s customer does with the second half of the run — if the second half goes to a different shop or into stock, then the two halves are never seen together, and the entire colour argument is about a risk that does not exist. And if they are seen together, then the works is right and the date has to move; but nobody knows which it is, and they have been arguing for four months about a question neither of them has asked. Which is the finding of this cycle: when both sides are right, the thing to look for is not a compromise but a fact nobody has — a compromise splits the difference between two positions, and a missing fact can dissolve one of them. Bassel asked what happens if the fact goes against you, and then you have lost an argument you were going to lose anyway, four months earlier, which is the honest version: looking for the missing fact is not a technique for winning but a technique for finding out. Rim asked what is actually divisible, and the run — not the date and not the colour, both of which are indivisible, which is exactly why they have been arguing about them. The run can be split — half on the sixth and half on the eighth — and a mediator who names the divisible thing has done the whole job. Adnan asked what a mediator must not do, and the answer is: propose the split. Name what is divisible and stop, because a mediator who proposes a settlement has become a third party with a position, and from that moment there are three interests in the room and only two of them are legitimate. Jad said that is a fine line, and it is, and it is audible: the run is divisible and the date is not is a mediation, and so why not do half on the sixth and half on the eighth is a proposal — and the moment it is said both sides begin negotiating with you instead of with each other._'));
out.push(p('**Listener task:** write the fact neither side in your own disagreement has, and whether you would rather know it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 7)', 7));
out.push(p('You are going to read four accounts of a disagreement at work. For questions **1–6**, choose from the people **A–D**. The people may be chosen more than once.'));
out.push(box(null, [
  '**FOUR PEOPLE ON A DISAGREEMENT THAT LASTED**',
  '**A**  Four months, and every one of my letters was better than the last. I added a diagram in the third. What I could not see at the time — and it is obvious written down — is that they had understood the thing from the first week; their production manager had worked in a press. So each explanation said one thing only, which was that they had not been listening, and the replies got shorter, which I read as impatience. The question that would have told me costs forty seconds and I never asked it: would this go away if each of us knew everything the other knows? The answer was no in June and it is no now, and the four months bought nothing except a worse relationship with a client of nineteen years.',
  '**B**  I went in with six things I would not trade and came out with nothing at all. From the inside a list of six looks exactly like a strong hand, and I had a reason for every one of them. Nobody asked for the reasons. They read the six, said they would need to think about it, and we were done in twenty-two minutes. When I costed them three weeks later, three of the six had no consequence I could write down — I wanted them, and I could not say what would happen without them. Two were things I could live without and had locked away, and one was a real limit. One of six.',
  '**C**  The sentence was mine and it was correct English. I asked what a move would be worth before deciding to make it, which is what that form is for. They answered yes, and eight days later asked when the second engineer would start. Nobody misled anybody: people hear offers, and a question about a hypothetical arrives in a working inbox as a proposal. Nine words would have stopped it. What I mind is not the four hundred thousand a month; it is that I could not withdraw it without becoming the person who withdraws things, and in a relationship of five years I would rather pay.',
  '**D**  We agreed it standing up, in October, and in November we found that four of us had agreed four different things. All four versions were things somebody actually said. Nobody was lying. What we did not have was anybody saying the two sentences out loud before we moved — what is agreed, and what happens next with a date. Eleven refusals had to be reissued and the eleven are the ones a member of the public is waiting on. It will feel pedantic for about four seconds, and those are the only four seconds nobody has to pay for twice.',
  '',
  '**Which person…**',
  '**1**  says that the English they used was not what caused the problem?   _______',
  '**2**  describes repeatedly supplying information the other side already had?   _______',
  '**3**  says that a position they thought was strong left the other side nothing to offer?   _______',
  '**4**  mentions a cost that falls on people outside the organisation?   _______',
  '**5**  says they would accept a financial loss rather than damage how they are seen?   _______',
  '**6**  describes discovering, too late, that most of what they were defending had no stated consequence?   _______',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two positions that are both right (80 words or more).'));
out.push(p('**TWO POSITIONS, BOTH REASONABLE** · ______________   **The first side, in their words.** _"______________"_   **The second side, in their words.** _"______________"_   ⚠ **Both statements are true and both sides have said so to each other.**   **The fact neither side has.** ⚠ ______________. **If ______________, then ______________; if ______________, then ______________.**   **What is indivisible.** ______________ **and** ______________.   **What is divisible.** ⚠ ______________.   **And what I am not doing.** ⚠ **Proposing the split.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each interest in that side\'s own words, and the two of similar length',
  'The fact nobody has, with both branches of what it would settle',
  'What is indivisible named before what is divisible',
  'No proposal — the divisible thing named, and then a stop',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a report)', 10));
out.push(box(null, [
  '⚠ **The report, and the shape is 6.6: the question in the first line, the options with their costs, the recommendation, and what you will do if it is refused.** **What Unit 14 adds is that the reader is one of two parties and not a neutral committee** — **so every figure must be one the other side would accept.**',
  'Your manager has asked you to report on a disagreement with a supplier or a customer that has not been settled.',
  'Write your **report**, with headings, in **180–220 words.**',
  '⚠ **Four requirements and they are the content mark: what each side needs _(in their words)_ · the fact nobody has · what is divisible · and what you recommend asking for first.** All four, or the content mark goes.',
  '**The register is a report and not a letter**: no greeting, no _I hope this finds you well_, headings throughout, **and no sentence that would embarrass you if the other side read it** — **because in about one case in five they do.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  We can move the date ___ return for the sign-off coming forward.   a) on   b) in   c) at',
  '2  ___ we to move the delivery, would the colour be signed off on Tuesday?   a) Would   b) Had   c) Were',
  '3  Provided that the sign-off ___ forward, the date moves.   a) will come   b) comes   c) would come',
  '4  I am not able ___ the seal check at the gate.   a) to trade   b) trading   c) trade',
  '5  The ___ took four months and ended in a trade neither side had thought of.   a) negotiate   b) negotiating   c) negotiation',
  '6  Her ___ to name a consequence showed that the item was a preference.   a) reluctant   b) reluctance   c) reluctantly',
  '7  Both sides came ___ against the same missing fact in the fourth month.   a) up   b) out   c) over',
  '8  The works was ___ to split the run, which neither side had proposed.   a) willing   b) willingness   c) willingly',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 14.15** You will hear a woman talking about a negotiation at a printing works. For questions **1–6**, complete the sentences with **a word or short phrase.**'));
[
  '**1**  The works needs ______________ of the six days for the second pass.',
  '**2**  The client has paid a late-delivery charge ______________ this year.',
  '**3**  The second reprint cost the works about ______________.',
  '**4**  Nobody had asked what the customer does with ______________ of the run.',
  '**5**  The thing that turned out to be divisible was ______________.',
  '**6**  The whole exchange was settled in ______________ once the question was asked.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Dima', 'It had been going on since the summer and both of them were right, which is the part people find hard to believe. I was asked to look at it in November, by which time there were eleven letters in the file and the two of them had stopped telephoning each other.'],
  ['Dima', 'Start with the works, because their position is the one that sounds like an excuse and is not. They need two of the six days for a second pass on the colour. That is not a preference and it is not a comfort margin: they have had to reprint a whole job for that reason twice in four years, and the second time it cost them about a month\'s margin, which for fourteen people and two machines is not a figure you absorb.'],
  ['Dima', 'And the client. They had signed for a delivery date before they ever came to the works, which is the detail everybody forgets, because it means the date is not theirs to move either. Their own customer charges them for a late delivery and they have paid that twice this year. Neither of those positions is unreasonable, and here is the part that makes it a difference of interest rather than a misunderstanding: each side knows the other\'s perfectly well and has done since June.'],
  ['Dima', 'So what had four months of letters actually been about? Each of them explaining, in better and better English, a thing the other had understood from the start. And what nobody had asked, in any of the eleven letters, is what the customer actually does with the second half of the run. If it goes into stock, or to a different shop, then the two halves are never seen side by side — and the whole colour argument is about a risk that does not exist.'],
  ['Dima', 'They did ask, in the end, and I am told it took one telephone call. It goes into stock. So the colour was never the problem. Four months and eleven letters for a question that neither of two careful people had thought to put, and I want to be fair to both of them: it is not a question you ask about your own trade, because you already know what the answer would be if it were your warehouse.'],
  ['Dima', 'The useful part, though, is the sorting, and it is the thing I shall take to the next one. The date was indivisible. The colour was indivisible. The run was divisible, and that is what moved in the end: half on the sixth and half on the eighth, at no extra charge for the second run. Nobody had seen it because they were both staring at the two things that cannot be cut in half.'],
  ['Dima', 'Once the question was asked the whole exchange was settled in nine days. Nine days, against four months, and the difference between the two numbers is one question nobody had thought to put. I have written that at the top of the next file.'],
]));
out.push(p('**C  Writing.** Write the report (180–220 words): what each side needs in their words, the fact nobody has, what is divisible, and what you recommend asking for first.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell a difference of interest from a misunderstanding, with one question',
  '☐ state what I want, what I will trade and what I will not, with the third the shortest',
  '☐ cost a limit, and tell a limit from a preference',
  '☐ choose between _were we to_, _subject to_ and _provided that_ on purpose',
  '☐ apply the third-person test to a condition',
  '☐ write my own best alternative, with a figure, before the meeting',
  '☐ close in two sentences, or decline to close in three with a date',
  '☐ mediate two positions that are both right, by finding the fact nobody has',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _push back · hold out on · trade away · walk away from · come up against · enter into · put to · wrap up · firm up · open up · break off · call in_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 14.7 draws on this)_: _negotiate → **negotiation** · settle → **settlement** · reserve → **reservation** · condition → **conditional** · willing → **willingness** · reluctant → **reluctance** · entitle → **entitlement** · flexible → **flexibility** · mutual → **mutually**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 14 · Student\'s Book');
