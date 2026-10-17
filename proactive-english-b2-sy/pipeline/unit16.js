// Proactive English B2 · Syria Edition · Book 2 · Unit 16 — Student's Book
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

out.push(h1('Unit 16  Judging Against Criteria'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Units 13 to 15 were written from in front of the desk. ⚠ **This unit is written from behind it.** **You are the person with the list, and the list is going to decide something about somebody.**',
  '**16.1** writes three criteria that **can each be failed** — which is 13.7 from the other side.   **16.2** **weights** them in public, before anything is assessed.   **16.3** assesses one thing and **shows the working**.   **16.4** writes a verdict that can be **appealed**, and says how.   **16.5** says **which criterion you would drop**, and why.   **16.6** writes the whole assessment: criteria, weights, working, verdict, appeal.   **16.7** mediates between an assessor and the person assessed.',
  '**Exam practice in 16.7:** B2 First **Reading and Use of English Part 4** (key-word transformations), **Writing Part 2** (a review) and **Listening Part 4** (multiple choice).',
  '⚠ **Bring one set of criteria** — **one you have been assessed against, or one you have written.** **A mark scheme, a tender specification, an appraisal form, a job description, a grant form.** **Anything with a list on it that somebody passed or failed.** **16.1 runs on it and the first thing you will do is count how many of its lines can be failed.**',
  '**And one warning about this unit, which is unlike the others.** ⚠ **Everything here makes your own work harder to do and easier to defend.** **A criterion that can be failed can be failed by somebody you wanted to pass** — **and that is not a flaw in the method; it is the method.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 16.1 =====================
out.push(pb());
out.push(h2('16.1  Three things that can be failed'));
out.push(p('**Function:** writing three criteria that can each be failed   ·   **Grammar:** the testable criterion, and the one that cannot be failed beside it   ·   **Pronunciation:** reading a criterion aloud as the person being judged by it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take the criteria you brought. ⚠ **Count the lines, and then count the lines a candidate could read and know they had failed.** **Say both numbers to your partner.** Your teacher writes the pairs on the board. **In most rooms the second number is about half the first.**'));
out.push(board('We are looking for a strong candidate with good attention to detail.', 'Three of the last five quarterly returns submitted complete and on the published date.'));
out.push(p('**b**  Which can be failed? **1** _Excellent communication skills._  **2** _Three of the last five returns complete and on time._  **3** _A commitment to quality._  **4** _At least two record systems used in the last three years._  **5** _A flexible approach._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the test for a criterion is, and what does she say an unfailable criterion really is?   **A** whether it is fair; it is a politeness   **B** **whether the person being judged could read it and know they had failed** — and an unfailable criterion is **a reserve power**, kept so that a decision can be made without the real reason being written down   **C** whether it is measurable in numbers; it is a legal protection'));
out.push(p('**b**  Listen again. **1** What three words does Mrs Nasser say she was given, and how long did they take to understand?   **2** What does Mr Barghouti say he does with the unfailable lines?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  Could you fail it?', [
  ['Ms Huda', 'Mrs Nasser. The criteria you were assessed against, and the one that cost you a year.'],
  ['Hiba', '_Range demonstrated._ ⚠ **Three words on an observation form, November of my first year.** **I spent a year not knowing what I had failed.**'],
  ['Ms Huda', '**Say what you did with the year.**'],
  ['Hiba', 'I taught differently every time I was watched, in case it was the thing I was not doing. ⚠ **About forty lessons, none of them the lesson I would have taught**, and at the end of it nobody could tell me whether any of them had range in it.'],
  ['Ms Huda', '**Which is the cost of an unfailable criterion and it is not borne by the assessor.** ⚠ **The test is one question: could the person being judged read this and know whether they had failed?**'],
  ['Omar', 'Could you have?'],
  ['Hiba', '**No. And neither could the assessor**, which I did not understand until much later. ⚠ **She was not withholding it. There was nothing to withhold.**'],
  ['Adnan', 'I write these. ⚠ **About half the lines on any page I have drafted cannot be failed**, and I can tell you exactly what they are for.'],
  ['Ms Huda', '**Tell the room, Mr Barghouti, because it is the finding of this cycle.**'],
  ['Adnan', '⚠ **They are a reserve power.** **If a panel has decided against somebody for a reason it would rather not write down, it reaches for the line that cannot be failed** — **and the line is on the page precisely so that it can be reached for.** **I have watched that twice and done it once.**'],
  ['Dima', 'And the honest version of the same need?'],
  ['Adnan', '**Write the real reason as a criterion before you need it.** ⚠ **If what you actually care about is whether somebody finishes things, write _three of the last five returns complete and on the published date_** — **which can be failed, by me as well as by them.**'],
  ['Rim', 'That is the part people do not like.'],
  ['Ms Huda', '**That is the whole of it.** ⚠ **A criterion that can be failed can be failed by somebody you wanted to pass**, and the discipline is to publish it anyway. **A list you can escape from is not a list; it is a decision you have not taken yet.**'],
  ['Bassel', 'How many should there be?'],
  ['Ms Huda', '**Three, in most things.** ⚠ **Three criteria that can be failed will do more work than eleven that cannot**, and eleven is what most pages have. **If you have eleven, nine of them are decoration and two are doing the deciding** — **and nobody has said which two.**'],
  ['Mazen', 'And how do you check your own?'],
  ['Ms Huda', '🔊 **Read each one aloud as the person being judged by it.** ⚠ **Not as the author.** _Three of the last five, complete and on the published date._ **In the candidate\'s voice that is a thing you can go and count tonight.** **_A commitment to quality_ in the candidate\'s voice is a silence.**'],
]));
out.push(sp());
out.push(box('Language box – criteria that can be failed', [
  '**The test, and it is one question.** ⚠ **Could the person being judged read this and know whether they had failed?** **If not, it is not a criterion.**',
  '**What an unfailable criterion actually is.** ⚠ **A reserve power.** **If a panel has decided against somebody for a reason it would rather not write down, it reaches for the line that cannot be failed** — **and the line is on the page precisely so that it can be reached for.**',
  '**The cost is not borne by the assessor.** ⚠ **Mrs Nasser taught about forty lessons she would not otherwise have taught, over a year, against three words nobody could define** — **and the assessor was not withholding anything, because there was nothing to withhold.**',
  '**The honest version of the same need.** ⚠ **Write the real reason as a criterion before you need it.** **If what you care about is whether somebody finishes things, write _three of the last five returns complete and on the published date_** — **which can be failed, by you as well as by them.**',
  '⚠ **And that is the hard part: a criterion that can be failed can be failed by somebody you wanted to pass.** **The discipline is to publish it anyway.** **A list you can escape from is not a list; it is a decision you have not taken yet.**',
  '**Three, in most things.** ⚠ **Three criteria that can be failed will do more work than eleven that cannot.** **If a page has eleven, nine are decoration and two are deciding** — **and nobody has said which two.**',
  '**The shapes.** _Three of the last five ______, complete and on ______._ _At least two ______ used in the last three years._ _No more than ______ in any ______._ ⚠ **And the ones to delete:** _a commitment to_ · _a flexible approach_ · _excellent ______ skills_ · _a strong_ ______.',
  '**Pronunciation.** 🔊 **Track 16.2** **Read each criterion aloud as the person being judged by it, not as its author.** ⚠ **In the candidate\'s voice a real criterion is a thing they can go and count tonight**; an unfailable one is a silence. **The difference is audible and takes four seconds a line.**',
  '**One more thing, and it is what makes the whole unit worth the trouble.** ⚠ **A failable criterion binds the assessor as well as the candidate.** **Once _three of the last five returns, complete and on the published date_ is on the page, an assessor who wants to refuse somebody who has met it has to say something else out loud** — **and saying it out loud is the entire protection.** **An unfailable line protects nobody and is mistaken for protecting everybody.**',
  '**Practise:** Write the criterion so that it can be failed. **1** about finishing things  **2** about accuracy  **3** about working with others  **4** one you would fail yourself  **5** one that cannot be failed, and the honest version beside it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the line from the card. B says **failable or not**, and if not, **writes the honest version of what it is probably trying to measure.** ⚠ **Two rows on each card can be failed already** and B must say so without changing them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', '**Failable: yes / no.** _(if no)_ **What it is probably after:** __________. **Honest version:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_Excellent communication skills._', '_A commitment to quality._'],
  ['_⚠ Three of the last five returns complete and on the published date._', '_⚠ At least two record systems used in the last three years._'],
  ['_A flexible approach to changing priorities._', '_Demonstrated ability to work under pressure._'],
  ['_⚠ No more than two rejected consignments in a quarter._', '_⚠ Four site visits a month, with a written note on each._'],
  ['_Range demonstrated._', '_A proactive attitude._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each line, failable or not, and the honest version. ⚠ **The four rows marked ⚠ can be failed as they stand** — **and every one of them has a number in it**, which is not a coincidence and is not a rule either. **A criterion can be failable without a number** _(_at least two systems used_)_ **but it cannot be failable without a thing a third person could check.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own page and **mark every line that cannot be failed.** ⚠ Then write the honest version of **three** of them. **Do not write more than three**: the exercise is choosing, and a page with eleven honest criteria has the same fault as one with eleven decorative ones.'));
out.push(p('**b**  Swap. Your partner reads your three aloud **as the person being judged**, and says which of the three they could go and count tonight. ⚠ **Then the hard question: would any of your three fail somebody you would want to appoint?** **If none would, they are not deciding anything.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba gave the criterion that cost her a year: range demonstrated — three words on an observation form in November of her first year, and she spent a year not knowing what she had failed. What she did with the year was teach differently every time she was watched, in case it was the thing she was not doing: about forty lessons, none of them the lesson she would have taught, and at the end of it nobody could tell her whether any of them had range in it. Which is the cost of an unfailable criterion, and it is not borne by the assessor. The test is one question: could the person being judged read this and know whether they had failed? Omar asked whether she could have, and she said no — and neither could the assessor, which she did not understand until much later. The assessor was not withholding anything, because there was nothing to withhold. Adnan, who writes these, said about half the lines on any page he has drafted cannot be failed, and he can say exactly what they are for: they are a reserve power. If a panel has decided against somebody for a reason it would rather not write down, it reaches for the line that cannot be failed, and the line is on the page precisely so that it can be reached for — he has watched that twice and done it once. Dima asked about the honest version of the same need, and it is to write the real reason as a criterion before you need it: if what you care about is whether somebody finishes things, write three of the last five returns complete and on the published date, which can be failed by the assessor as well as by them. Rim said that is the part people do not like, and that is the whole of it: a criterion that can be failed can be failed by somebody you wanted to pass, and the discipline is to publish it anyway. A list you can escape from is not a list; it is a decision you have not taken yet. Bassel asked how many there should be, and three, in most things — three criteria that can be failed will do more work than eleven that cannot, and eleven is what most pages have. If you have eleven, nine are decoration and two are deciding. And Mazen asked how you check your own, and you read each one aloud as the person being judged by it, not as the author: in the candidate\'s voice a real criterion is a thing they can go and count tonight, and a commitment to quality in the candidate\'s voice is a silence._'));
out.push(p('**Listener task:** write your partner\'s three criteria and whether any of them would fail somebody they wanted to appoint.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Hiba writes about her own three words. Answer the questions.'));
out.push(model([
  '**RANGE DEMONSTRATED** · H. Nasser · 6 March · _written for the person who assesses my first-year staff_',
  '**I was given three words on a form in November of my first year and I did not understand them until the following December.** ⚠ **This is not a complaint about the assessor.** **I now believe she could not have explained them either, and that is a worse problem and a fixable one.**',
  '**What I did with the year.** **I taught differently every time I was watched.** ⚠ **About forty lessons**, none of them the lesson I would have taught, **each one aimed at a different guess about what _range_ might mean**: more activities, longer activities, three skills in forty minutes, two levels of task, a text and a recording. **Nobody ever said which guess was right, because there was no right guess to name.**',
  '**What it cost, and I shall put it in hours because that is the only honest unit.** ⚠ **About sixty hours of preparation on the guesses**, and — much worse — **a first year in which I was not teaching my own lessons.** **The students in that year got forty experiments and I got no information.**',
  '**What I now think the form was trying to measure.** **Whether a new teacher can do more than one thing.** ⚠ **Which is a reasonable thing to care about and can be written down: _at least three different task types used across four observed lessons, with the aim of each stated in the plan._** **That can be failed. It can be failed by me.**',
  '**Why nobody writes that version.** Because it commits the assessor. ⚠ **If I produce four plans with three task types and the aims stated, the assessor has to pass me on that criterion whether or not they think I am any good** — **and _range demonstrated_ keeps the decision where it was: with the assessor, undisclosed, and unarguable.**',
  '**And what I shall put on my own forms from September.** **Three lines, each one countable, each one published to the person before the first observation.** ⚠ **And one sentence at the bottom that I wish had been on mine: _if you have met all three and I am still not recommending you, I shall tell you what the fourth thing is and write it down._** **That sentence is the whole of what I needed in November and did not get.**',
]));
out.push(item('1', 'What did she do during the year, and what did it cost in hours?'));
out.push(item('2', 'What does she now think the form was trying to measure, and how would she write it?'));
out.push(item('3', 'Why does she say nobody writes that version, and what will she put at the bottom of her own forms?'));
out.push(writers([
  'A page about a criterion you could not meet: **what you were given and how long it took to understand** → **what you did in the meantime** → **the cost, in hours** → **what the criterion was probably trying to measure** → **the failable version of it** → **why nobody writes that version** → **and what you will put on your own.**',
  '⚠ **Protect the assessor in the second sentence.** _I now believe she could not have explained them either._ **A page that treats an unfailable criterion as unkindness has diagnosed the wrong thing**, and the fix it proposes will not work.',
  '**Put the cost in hours, and add the part that is not hours.** _About sixty hours on the guesses, and a first year in which I was not teaching my own lessons._ ⚠ **The second cost is the real one and it has no unit**, which is exactly why it must come after a figure that does.',
  '**Say why the honest version is not written, in terms of what it commits.** _If I produce four plans with three task types, the assessor has to pass me whether or not they think I am any good._ ⚠ **That is the mechanism, and it explains the practice without anybody being accused of anything.**',
  '⚠ And **end on your own page and not on theirs.** **A page that only criticises is a complaint**; one that prints the three lines it will use is an argument. **Include the sentence you needed and did not get.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a criterion you could not meet (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **I was given ______________ and I did not understand ______________ until ______________.** ⚠ **This is not a complaint about ______________.**   **What I did in the meantime.** ______________. ⚠ **About ______________**, none of them ______________.   **What it cost.** ⚠ **About ______ hours of ______________**, and — much worse — ______________.   **What I now think it was trying to measure.** ______________. ⚠ **Which can be written down: _"______________."_** **That can be failed. It can be failed by me.**   **Why nobody writes that version.** ⚠ **Because it commits ______________.** ______________.   **And what I shall put on my own.** ______________. ⚠ **And one sentence I wish had been on mine: _"______________."_**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The assessor protected in the second sentence',
  'The cost in hours, with the cost that has no unit after it',
  'The failable version written out, and failable by you',
  'Your own page, with the sentence you needed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the failable version they wrote**, and the room says whether they could go and count it tonight.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the assessor protected, the cost in hours, the failable version, and your own page at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the assessor protected, the cost in hours with the costless one after it, a failable version that could fail you, and your own page at the end.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your three criteria aloud as the person being judged by them, not as their author.** ⚠ The room says which of the three they could go and count tonight. **A criterion that produces a silence in the candidate\'s voice is not a criterion**, however reasonable it sounds in the assessor\'s. Then the sentence the cycle ends on, which is Mrs Nasser\'s: **there was nothing to withhold.**'));
out.push(hw('Write the page (80+ words). ⚠ Then take the page you brought and **count the two numbers again, out loud**: how many lines, and how many a candidate could fail. **Write the fraction at the top of it.** **16.2 weights the criteria**, and a weighting can only be put on something that can be failed. ⚠ **And bring the fraction to the next lesson.** **In most rooms it is about half**, and the half that cannot be failed is not evenly spread: **it clusters at the top of the page, where the lines about character are**, and the failable ones are further down where somebody has had to be specific.'));

// ===================== 16.2 =====================
out.push(pb());
out.push(h2('16.2  Weighting, in public'));
out.push(p('**Function:** weighting the criteria in public, before you assess anything   ·   **Grammar:** the weighting sentence, published first   ·   **Pronunciation:** the weights read as a decision already taken'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take your three criteria from 16.1. ⚠ **Say which of the three would decide it if a candidate were strong on two and weak on one.** **Your partner asks the same question with the weak one changed.** **Most people find they have one criterion that decides everything and two that have never decided anything.**'));
out.push(board('We will look at all three in the round.', 'The returns count for half. The systems and the visits count for a quarter each.'));
out.push(p('**b**  Which is a weighting? **1** _All three will be taken into account._  **2** _The returns count for half; the other two for a quarter each._  **3** _We attach particular importance to accuracy._  **4** _Criterion one is a threshold: fail it and the other two are not read._  **5** _We will consider the candidate as a whole._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say an unpublished weighting becomes, and what are the two kinds of weight?   **A** a secret; the two kinds are high and low   **B** **it becomes whatever the assessor felt on the day** — and the two kinds are **a proportion** and **a threshold**, which behave completely differently   **C** it becomes unnecessary; the two kinds are formal and informal'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say happened on the panel where the weighting was not published?   **2** What does Ms Huda say about a threshold?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  Half, a quarter, a quarter', [
  ['Ms Huda', 'Three criteria, all of them failable. Mrs Khoury — what happens if you stop there?'],
  ['Dima', 'They are not equal and nobody has said so. ⚠ **On the panel in October we had four criteria and we spent fifty minutes discovering, out loud, that one of them was worth more to us than the other three put together.**'],
  ['Ms Huda', '**Discovering it while assessing.**'],
  ['Dima', '**While assessing, and with the candidates in front of us.** ⚠ **Which means the weighting was decided by whoever argued best in the room at half past three**, and I was one of the two who argued.'],
  ['Ms Huda', '⚠ **An unpublished weighting is not absent. It becomes whatever the assessor felt on the day** — **and it will be felt differently on a Monday and on a Thursday by the same person.**'],
  ['Adnan', 'And the fix is one sentence.'],
  ['Ms Huda', '**One sentence, written before anything is assessed and given to the people being assessed.** _The returns count for half; the systems and the visits count for a quarter each._ ⚠ **Twenty words, and it cannot be argued with at half past three because it is already published.**'],
  ['Rim', 'Why give it to the candidates? That is the part my office would resist.'],
  ['Ms Huda', '**Because a weighting they do not know converts their effort into a lottery.** ⚠ **A candidate who spends three weeks on the quarter and four hours on the half has not been outplayed; they have been misdirected by a page you wrote.**'],
  ['Hiba', 'That is exactly my forty lessons.'],
  ['Ms Huda', '**That is exactly your forty lessons, and the weighting is the half of it 16.1 did not solve.**'],
  ['Bassel', 'Are all weights proportions?'],
  ['Ms Huda', '**No, and this is the distinction to carry out of the cycle.** ⚠ **There are two kinds. A proportion** — _half, a quarter, a quarter_ — **where strength in one can compensate for weakness in another.** **And a threshold** — _fail this and the others are not read_ — **where nothing compensates.**'],
  ['Omar', 'How do you know which you want?'],
  ['Ms Huda', '**Ask whether brilliance elsewhere would make you accept failure here.** ⚠ **If the honest answer is no, it is a threshold and must be published as one.** **A threshold disguised as a proportion is the cruellest page in this unit** — **it invites a candidate to compensate for something that cannot be compensated for.**'],
  ['Hiba', 'And if you genuinely think all three are equal?'],
  ['Ms Huda', '**Then write the thirds and publish them.** ⚠ **_All three count for a third_ is a weighting and it can be argued with.** **_All three will be taken into account_ is not one** — **and the difference is that the first can be shown to have been applied and the second cannot.**'],
  ['Mazen', 'And saying the weights out loud?'],
  ['Ms Huda', '🔊 **As a decision already taken, flat, with no hedging round it.** ⚠ _The returns count for half._ **Not _we would probably say the returns are the most important._** **A weight said tentatively is an invitation to reopen it**, and somebody always will — **usually at half past three.**'],
]));
out.push(sp());
out.push(box('Language box – weighting in public', [
  '⚠ **An unpublished weighting is not absent.** **It becomes whatever the assessor felt on the day** — **and it will be felt differently on a Monday and on a Thursday by the same person.**',
  '**The fix is one sentence, written before anything is assessed.** _The returns count for half; the systems and the visits count for a quarter each._ ⚠ **Twenty words, and it cannot be argued with at half past three because it is already published.**',
  '**Why it is given to the people being assessed.** ⚠ **A weighting they do not know converts their effort into a lottery.** **A candidate who spends three weeks on the quarter and four hours on the half has not been outplayed** — **they have been misdirected by a page you wrote.**',
  '**Two kinds of weight, and they behave completely differently.** **A proportion** — _half, a quarter, a quarter_ — **where strength in one can compensate for weakness in another.** ⚠ **A threshold** — _fail this and the others are not read_ — **where nothing compensates.**',
  '**How to tell which you want.** ⚠ **Ask whether brilliance elsewhere would make you accept failure here.** **If the honest answer is no, it is a threshold and must be published as one.**',
  '⚠ **A threshold disguised as a proportion is the cruellest page in this unit.** **It invites a candidate to compensate for something that cannot be compensated for**, and they will spend their effort doing it.',
  '**The shapes.** _X counts for half; Y and Z for a quarter each._ _X is a threshold: fail it and the others are not read._ _Nothing in Y or Z can make up for failing X._ ⚠ **And the ones that weigh nothing:** _all three will be taken into account_ · _we attach particular importance to_ · _in the round_.',
  '**Pronunciation.** 🔊 **Track 16.4** **Say the weights as a decision already taken, flat, with nothing hedging them.** ⚠ _The returns count for half._ **Not _we would probably say the returns are the most important_** — **a weight said tentatively is an invitation to reopen it**, and somebody always will.',
  '**And equal weights are a decision too, not a refusal to make one.** ⚠ **_All three count for a third_ is a published weighting** and it can be argued with. **_All three will be taken into account_ is not** — **and the difference is that the first can be shown to have been applied and the second cannot.** **If you genuinely think they are equal, write the thirds.**',
  '**Practise:** Publish the weighting in one sentence. **1** three proportions  **2** one threshold and two proportions  **3** a threshold you had been calling a proportion  **4** one said tentatively, so that you hear it  **5** one where the weights are equal, and say why that is a decision too',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the three criteria from the card. B publishes **the weighting in one sentence**, and says for each weight whether it is **a proportion or a threshold.** ⚠ **Two rows on each card contain something that is really a threshold and is written as a proportion**, and B must say so. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(three criteria)_ __________ / __________ / __________.'],
  ['B', '**__________ counts for __________; __________ and __________ for __________ each.** **Thresholds:** __________.'],
]));
out.push(table(['Card A – three criteria', 'Card B – three criteria'], [
  ['_Returns on time / two systems used / four visits a month._', '_Seal check passed / paperwork complete / delivery on date._'],
  ['_⚠ Safety certificate held / price / delivery time._', '_⚠ Qualification registered / years of service / two referees._'],
  ['_Three task types / aims stated / plans submitted._', '_Figures checked / sources named / published on the first._'],
  ['_⚠ Insurance in force / references / interview score._', '_⚠ Batch numbers recorded / price per unit / packaging._'],
  ['_Returns complete / returns on time / returns legible._', '_Attendance / written work / the oral test._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each weighting, and which weights are thresholds. ⚠ **The four rows marked ⚠ each contain one criterion that is really a threshold** — a safety certificate, a registered qualification, insurance in force, recorded batch numbers — **and none of them can be compensated for by anything.** **A pair that weighted a safety certificate at forty per cent has written the cruellest page in the unit**, and the test catches it in one question.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the weighting for your own three, **in one sentence**, and mark any threshold. ⚠ **Then apply the test to each: would brilliance elsewhere make you accept failure here?** **If the answer is no anywhere, that criterion is not a proportion whatever number you have written beside it.**'));
out.push(p('**b**  Swap. Your partner reads your weighting **tentatively** — _we would probably say…_ — and then **flat.** ⚠ Then they say which version they would try to argue with at half past three.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Three criteria, all failable, and Dima said that if you stop there they are not equal and nobody has said so. On the panel in October they had four criteria and spent fifty minutes discovering, out loud, that one was worth more to them than the other three put together — discovering it while assessing, with the candidates in front of them, which means the weighting was decided by whoever argued best in the room at half past three, and she was one of the two who argued. An unpublished weighting is not absent: it becomes whatever the assessor felt on the day, and it will be felt differently on a Monday and on a Thursday by the same person. Adnan said the fix is one sentence, written before anything is assessed and given to the people being assessed: the returns count for half, the systems and the visits for a quarter each. Twenty words, and it cannot be argued with at half past three because it is already published. Rim asked why give it to the candidates, which her office would resist, and because a weighting they do not know converts their effort into a lottery: a candidate who spends three weeks on the quarter and four hours on the half has not been outplayed, they have been misdirected by a page you wrote. Hiba said that is exactly her forty lessons, and it is, and the weighting is the half of it that 16.1 did not solve. Bassel asked whether all weights are proportions, and no — there are two kinds, a proportion where strength in one compensates for weakness in another, and a threshold where nothing compensates. Omar asked how you know which you want, and you ask whether brilliance elsewhere would make you accept failure here: if the honest answer is no, it is a threshold and must be published as one. A threshold disguised as a proportion is the cruellest page in the unit, because it invites a candidate to compensate for something that cannot be compensated for. And Mazen asked about saying the weights out loud, which is done as a decision already taken, flat, with no hedging round it — the returns count for half, and not we would probably say the returns are the most important. A weight said tentatively is an invitation to reopen it, and somebody always will, usually at half past three._'));
out.push(p('**Listener task:** write your partner\'s weighting and which of their criteria is really a threshold.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Dima writes after the October panel. Answer the questions.'));
out.push(model([
  '**FIFTY MINUTES IN OCTOBER** · D. Khoury · 13 March · _for the three of us, before the spring round_',
  '**We spent fifty minutes of the October panel discovering what our own criteria were worth.** ⚠ **We did it out loud, in front of nothing but each other, with the candidates\' papers on the table** — **and what we decided in those fifty minutes decided the appointment.**',
  '**What we had published.** **Four criteria, all of them failable.** ⚠ **That part was right and it was more than we had done the year before.** **What we had not published was that one of the four mattered more to us than the other three put together.**',
  '**When we found out.** At about half past three, **with two candidates who scored differently on the same total.** ⚠ **One was strong on three and weak on the fourth; one was the other way round.** **The arithmetic made them equal and nobody in the room believed they were.**',
  '**What we did, which was honest and too late.** We said out loud which one we would appoint and then worked out what weighting would produce that result. ⚠ **That is not corrupt and it is not defensible either.** **It is a weighting decided by two people at half past three on a Thursday**, and if the same two had been tired, or if the other two had argued harder, it would have come out differently.',
  '**What it cost the candidate who was not appointed.** ⚠ **She had spent, by her own account, about three weeks on the criterion we weighted at a quarter and an afternoon on the one we weighted at a half.** **She had not been outplayed. She had been misdirected by a page I wrote.**',
  '**What we shall publish before the spring round.** **One sentence, in the advertisement.** _The handover record counts for half; the three others count for a sixth each._ ⚠ **And one threshold, published as a threshold:** _without a current certificate the rest is not read._',
  '**And the thing I expect to be uncomfortable.** ⚠ **The spring round will produce a candidate who wins on the arithmetic and whom one of us does not want.** **We shall have to appoint them, or change the weighting in public before the next round and say why.** **Those are the only two honest things and both of them are harder than October was.**',
]));
out.push(item('1', 'What had they published, and what had they not?'));
out.push(item('2', 'What did they do at half past three, and why does she say it is not defensible?'));
out.push(item('3', 'What will they publish before the spring round, and what does she expect to be uncomfortable?'));
out.push(writers([
  'A page about a weighting discovered too late: **what you spent and when** → **what you had published** → **what you had not** → **when you found out** → **what you did, named honestly** → **what it cost the person who lost** → **what you will publish next time** → **and what you expect to be uncomfortable.**',
  '⚠ **Name your own act exactly.** _We said out loud which one we would appoint and then worked out what weighting would produce that result._ **Then price it in one line:** _that is not corrupt and it is not defensible either._ **A page that softens this has nothing to offer the three people it is written for.**',
  '**Give the cost from the loser\'s side, in their units.** _Three weeks on the criterion we weighted at a quarter and an afternoon on the one we weighted at a half._ ⚠ **And add the sentence that makes it yours:** _she had not been outplayed; she had been misdirected by a page I wrote._',
  '**Print the new weighting as a sentence, not as a promise.** ⚠ **_We shall weight more carefully_ commits to nothing; _the handover record counts for half_ does.**',
  '⚠ And **end on the discomfort, because the practice is only credible if its cost is stated.** _The spring round will produce a candidate who wins on the arithmetic and whom one of us does not want._ **Then the two honest options, and the admission that both are harder than what you did before.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a weighting found too late (80 words or more).'));
out.push(p('**______ MINUTES IN ______________** · ______________ · ______________   **We spent ______________ discovering ______________.** ⚠ ______________.   **What we had published.** ______________. ⚠ **What we had not published was ______________.**   **When we found out.** At ______________, **with ______________.** ⚠ ______________.   **What we did, which was honest and too late.** ______________. ⚠ **That is not ______________ and it is not ______________ either.**   **What it cost the person who lost.** ⚠ ______________. **They had not been ______________. They had been ______________.**   **What we shall publish.** _"______________."_ ⚠ **And one threshold: _"______________."_**   **And what I expect to be uncomfortable.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your own act named exactly, and priced in one line',
  'The cost from the loser\'s side, in their units',
  'The new weighting printed as a sentence, not promised',
  'The discomfort stated, with the two honest options',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their published weighting**, and the room says which criterion it would spend three weeks on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: your own act named, the cost from the other side, the weighting printed, and the discomfort at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: your own act named and priced, the cost in the loser\'s units, the weighting printed as a sentence, and the discomfort stated.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your weighting twice — tentatively and then flat — and let the room say which one it would argue with.** ⚠ **A weight said tentatively is an invitation**, and the room will take it every time. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **she had not been outplayed; she had been misdirected by a page I wrote.**'));
out.push(hw('Write the page (80+ words). ⚠ Then put the test to each of your own three: **would brilliance elsewhere make you accept failure here?** **Write _proportion_ or _threshold_ beside each one.** **16.3 assesses something against them and shows the working** — **which is where a published weighting starts doing the work it was published for.** ⚠ **And bring one thing you have assessed, or been assessed on, where the outcome surprised you.** **A surprise is almost always a weighting nobody had written down**, and 16.3 is where the room finds out which one.'));

// ===================== 16.3 =====================
out.push(pb());
out.push(h2('16.3  Showing the working'));
out.push(p('**Function:** assessing one thing against the criteria and showing the working   ·   **Grammar:** the working as part of the verdict   ·   **Pronunciation:** the evidence read before the judgement, not after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A gives a verdict on something at work in one sentence. ⚠ **B asks: what did you look at?** **Then: and what did you look at that pointed the other way?** **The second question is the cycle and almost nobody has an answer to it.**'));
out.push(board('On the whole I was not convinced by it.', 'Criterion two: three of the five returns were complete. Pass. Criterion three: two visits in March, four required. Fail.'));
out.push(p('**b**  Which shows working? **1** _It was below the standard required._  **2** _Criterion two: three of five complete — pass. Criterion three: two visits of four — fail._  **3** _I formed an unfavourable impression._  **4** _On balance the submission did not persuade me._  **5** _Criterion one: certificate current to August — pass, and this is a threshold._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the working is for, and what must it contain that assessors leave out?   **A** it is for the file; it must contain the score   **B** **it is for the person assessed, so that they can tell whether the verdict follows from the evidence** — and it must contain **the evidence that pointed the other way**   **C** it is for the assessor\'s memory; it must contain the date'));
out.push(p('**b**  Listen again. **1** What does Mr Barghouti say happens when the working is written afterwards?   **2** What does Ms Huda say about the evidence that points the other way?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  What did you look at', [
  ['Ms Huda', 'Mr Darwish. A verdict on something at work, one sentence.'],
  ['Omar', 'The Homs handover sheets are not being kept properly.'],
  ['Ms Huda', '**What did you look at?**'],
  ['Omar', 'Four sheets from March. ⚠ **Two were incomplete.**'],
  ['Ms Huda', '**And what did you look at that pointed the other way?**'],
  ['Omar', '_(a pause)_ ⚠ **Nothing. I stopped at the two.**'],
  ['Ms Huda', '**Which is honest and is the commonest shape of a wrong verdict.** ⚠ **You looked until you had enough and then stopped** — **and so does everybody, which is why the working has to be written as you go and not afterwards.**'],
  ['Adnan', 'Written afterwards it is not working at all. ⚠ **It is a justification**, and I can tell the difference in about four lines: **a justification mentions only what supports the verdict, and real working mentions something that did not.**'],
  ['Ms Huda', '**Say what you do.**'],
  ['Adnan', '**Three columns on one sheet: the criterion, what I looked at, and the verdict on that criterion.** ⚠ **I fill the middle column before the third**, and on about one assessment in five the third column comes out differently from what I expected when I started.'],
  ['Dima', 'One in five is a lot.'],
  ['Adnan', '⚠ **It is, and it is the whole argument for the method.** **One assessment in five is a person whose life was going to be decided by the order in which I happened to read things.**'],
  ['Hiba', 'And the evidence that points the other way?'],
  ['Ms Huda', '**It goes in, named, and it does not change the verdict.** ⚠ _Two of the four March sheets were incomplete; the two complete ones were the two with the most entries._ **That sentence costs you nothing and it is the one the person assessed will believe you on.**'],
  ['Rim', 'Why would it cost nothing? It weakens the case.'],
  ['Ms Huda', '**It weakens the rhetoric and it strengthens the verdict.** ⚠ **A verdict that mentions nothing against itself reads as a case; one that mentions something against itself reads as a finding** — **and only one of the two survives being appealed.**'],
  ['Bassel', 'And if what points the other way is strong enough to change it?'],
  ['Ms Huda', '**Then it changes it, and that is the system working rather than failing.** ⚠ **The one assessment in five is not an error rate; it is the method doing what it is for.**'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **The evidence first and the judgement after it, in that order, every time.** ⚠ _Two of the four were incomplete — fail._ **Not _fail; two of the four were incomplete._** **The second order makes the evidence sound like support for a decision already taken**, which is exactly what you are trying not to be doing.'],
]));
out.push(sp());
out.push(box('Language box – showing the working', [
  '**Who the working is for.** ⚠ **The person assessed, so that they can tell whether the verdict follows from the evidence.** **Not the file and not your memory** — **and that changes what goes in it.**',
  '**Written afterwards it is not working; it is a justification.** ⚠ **The difference is visible in four lines: a justification mentions only what supports the verdict, and real working mentions something that did not.**',
  '**Mr Barghouti\'s method: three columns on one sheet.** **The criterion · what I looked at · the verdict on that criterion.** ⚠ **The middle column is filled before the third**, and on **about one assessment in five** the third comes out differently from what he expected at the start.',
  '⚠ **One in five is not an error rate; it is the method doing what it is for.** **It is one person in five whose life was going to be decided by the order in which somebody happened to read things.**',
  '**The evidence that points the other way goes in, named, and usually does not change the verdict.** _Two of the four March sheets were incomplete; the two complete ones were the two with the most entries._ ⚠ **That sentence costs you nothing and it is the one the person assessed will believe you on.**',
  '**Why it costs nothing.** ⚠ **It weakens the rhetoric and strengthens the verdict.** **A verdict that mentions nothing against itself reads as a case; one that mentions something against itself reads as a finding** — **and only one of the two survives being appealed.**',
  '**The shapes.** _Criterion two: three of five complete — **pass**._ _Criterion three: two visits of four required — **fail**._ _Against this: ______, which I have weighed and which does not change the verdict._ ⚠ **And the ones with no working in them:** _on balance_ · _I formed the impression_ · _below the standard required_.',
  '**Pronunciation.** 🔊 **Track 16.6** **The evidence first and the judgement after it, in that order, every time.** ⚠ _Two of the four were incomplete — fail._ **Not _fail; two of the four were incomplete_**, which makes the evidence sound like support for a decision already taken.',
  '**Where the evidence came from belongs in the working, and it is eleven words.** ⚠ _From our own goods-in book and not from the tenderer\'s figures._ **A reader who cannot tell whose figures you used cannot check anything** — **and in a dispute it is the first thing anybody asks.** **Name the source for every criterion, even when it is obvious to you.**',
  '**Practise:** Evidence first, then the verdict on that criterion. **1** a pass  **2** a fail  **3** a threshold failed  **4** one with evidence pointing the other way, named  **5** one where the evidence changes the verdict you expected',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criterion and the evidence from the card. B gives **the working: what was looked at, then the verdict on that criterion**, and names anything pointing the other way. ⚠ **Two rows on each card contain evidence that points both ways**, and B must give both before the verdict. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(criterion)_ __________. _(what there is)_ __________.'],
  ['B', '**Looked at:** __________. **Verdict:** __________. **Against this:** __________, **which does not change it.**'],
]));
out.push(table(['Card A – criterion and evidence', 'Card B – criterion and evidence'], [
  ['_Four visits a month / two in March, five in April._', '_Returns on the published date / three of five on time._'],
  ['_⚠ Two systems in three years / one system, used daily for six._', '_⚠ No more than two rejections a quarter / three, two of them the same batch._'],
  ['_Certificate current / expired in January._', '_Aims stated in the plan / stated in three of four._'],
  ['_⚠ Figures checked / all checked, one checked against the wrong source._', '_⚠ Published on the first / published on the first, in the wrong section._'],
  ['_Batch numbers recorded / recorded on eleven of fifteen._', '_Sources named / named, but two of them are the same source._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the working and the verdict for each, with anything pointing the other way. ⚠ **The four rows marked ⚠ point both ways and all four are genuinely hard.** **One system used daily for six years fails a two-systems criterion and is better evidence of competence than two systems used twice** — **and the criterion still fails it.** **That is the discipline, and 16.5 is where it is answered.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Assess something real against your own three criteria, **in three columns**: criterion, what you looked at, verdict. ⚠ **Fill the middle column completely before you write anything in the third.**'));
out.push(p('**b**  Swap. Your partner reads your three columns and says whether the verdict follows. ⚠ Then the question that catches most people: **did any of your three verdicts come out differently from what you expected when you started?** **If none did, you may have filled the third column first without noticing.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar gave a verdict in one sentence: the Homs handover sheets are not being kept properly. Asked what he had looked at, he said four sheets from March, two of them incomplete; asked what he had looked at that pointed the other way, he said nothing — he had stopped at the two. Which is honest and is the commonest shape of a wrong verdict: you look until you have enough and then stop, and so does everybody, which is why the working has to be written as you go and not afterwards. Adnan said that written afterwards it is not working at all but a justification, and he can tell the difference in about four lines — a justification mentions only what supports the verdict, and real working mentions something that did not. His method is three columns on one sheet: the criterion, what he looked at, and the verdict on that criterion, with the middle column filled before the third. On about one assessment in five the third column comes out differently from what he expected when he started. Dima said one in five is a lot, and it is, and it is the whole argument for the method: one assessment in five is a person whose life was going to be decided by the order in which he happened to read things. Hiba asked about the evidence that points the other way, and it goes in, named, and it does not change the verdict — two of the four March sheets were incomplete, and the two complete ones were the two with the most entries. That sentence costs nothing and is the one the person assessed will believe you on. Rim asked why it costs nothing when it weakens the case, and it weakens the rhetoric and strengthens the verdict: a verdict that mentions nothing against itself reads as a case, and one that mentions something against itself reads as a finding, and only one of the two survives being appealed. Bassel asked what happens if what points the other way is strong enough to change it, and then it changes it, and that is the system working rather than failing — the one assessment in five is not an error rate but the method doing what it is for. And Mazen asked about reading it out: the evidence first and the judgement after it, in that order, every time, because the second order makes the evidence sound like support for a decision already taken._'));
out.push(p('**Listener task:** write whether any of your partner\'s three verdicts came out differently from what they expected.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the assessment Adnan writes, with its working. Answer the questions.'));
out.push(model([
  '**TENDER 14/03 · ASSESSMENT AGAINST PUBLISHED CRITERIA** · A. Barghouti · 20 March',
  '**Published weighting, in the invitation of 2 February: the delivery record counts for half; price and references for a quarter each. The insurance certificate is a threshold.**',
  '**Threshold — insurance.** **Looked at:** the certificate supplied, valid to 30 November. ⚠ **Pass.** **Read before anything else, as published.**',
  '**Delivery record _(half)_.** **Looked at:** the eleven deliveries made to this directorate between April and February, from our own goods-in book and not from the tenderer\'s figures. **Nine on the agreed date; two late, by four and by nine days.** ⚠ **Pass.** **Against this: both late deliveries were in the same fortnight in October**, which I have weighed and which does not change the verdict — **the criterion is the record and not the explanation.**',
  '**Price _(a quarter)_.** **Looked at:** the unit price against the three other tenders. **Second of four, about nine per cent above the lowest.** ⚠ **Pass.**',
  '**References _(a quarter)_.** **Looked at:** two references supplied, both from the same directorate, one of them from the officer who signed the tenderer\'s last contract with us. ⚠ **Fail.** **The criterion asks for two independent references and these are not independent.** **Against this: the references themselves are detailed and specific**, which is not what the criterion asks about.',
  '**Verdict.** **Three of four passed, including the threshold, with a quarter failed.** ⚠ **On the published weighting this is seventy-five per cent and above the line.** **Recommended, subject to one independent reference being supplied before signature.**',
  '**And one thing I expected to find and did not.** ⚠ **I had expected the price to be the weak point, because it was last time.** **It is the references, and I would not have looked at them properly if the three columns had not made me.** **I filled the middle column for references before I had formed any view at all**, which is the only reason this assessment says what it says. ⚠ **And one note for the file about the method rather than the tender.** **This is the eleventh assessment I have done in three columns.** **On two of the eleven the verdict came out differently from the one I expected when I started**, and both of those two were tenders I had already decided about in the first ten minutes. **I had decided about this one too.**',
]));
out.push(item('1', 'What does he look at for the delivery record, and whose figures does he not use?'));
out.push(item('2', 'Why do the references fail, and what does he name that points the other way?'));
out.push(item('3', 'What had he expected to be the weak point, and what does he say about the three columns?'));
out.push(writers([
  'An assessment with its working: **the published weighting, quoted** → **the threshold first** → **each criterion: what you looked at, then the verdict** → **anything pointing the other way, named and weighed** → **the verdict against the published weighting** → **and one thing you expected and did not find.**',
  '⚠ **Say where the evidence came from, not only what it was.** _From our own goods-in book and not from the tenderer\'s figures._ **A reader who cannot tell whose figures you used cannot check anything**, and the sentence costs eleven words.',
  '**Put the threshold first and say that you did.** ⚠ **Read before anything else, as published.** **A threshold assessed third has not been treated as a threshold**, whatever the page says.',
  '**Name what points the other way and say why it does not move the verdict.** _The references are detailed and specific, which is not what the criterion asks about._ ⚠ **That last clause is the work**: **the evidence is good and it is answering a different question.**',
  '⚠ And **end on what you expected and did not find.** _I had expected the price to be the weak point._ **It is the single strongest evidence that the working was done before the verdict**, and it is the only part of the page a reader cannot imagine you writing backwards.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the assessment with its working (80 words or more).'));
out.push(p('**______________ · ASSESSMENT AGAINST PUBLISHED CRITERIA** · ______________ · ______________   **Published weighting, in ______________: ______________.**   **Threshold — ______________.** **Looked at:** ______________. ⚠ **Pass / Fail.** **Read before anything else, as published.**   **______________ _(______)_.** **Looked at:** ______________, **from ______________ and not from ______________.** ⚠ **Verdict.** **Against this: ______________**, which I have weighed and which does not change it.   **______________ _(______)_.** **Looked at:** ______________. **Verdict.**   **Verdict.** ⚠ **______ of ______ passed, including the threshold.** **On the published weighting this is ______________.**   **And one thing I expected and did not find.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The published weighting quoted, and the threshold read first',
  'Where each piece of evidence came from, not only what it was',
  'Something pointing the other way, named and weighed',
  'One thing you expected and did not find',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _against this_ sentence**, and the room says whether it is real evidence or a courtesy.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full assessment (180 words or more), to the shape in the writer\'s box: the weighting quoted, the threshold first, the sources named, the counter-evidence weighed, and the surprise at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the published weighting quoted, the threshold read first, the source of each piece of evidence, and one thing expected and not found.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one criterion aloud twice: evidence then verdict, and verdict then evidence.** ⚠ The room says which one sounds like a finding and which like a case. **Nobody chooses the second**, and the two versions contain identical words in a different order. Then the sentence the cycle ends on, which is Mr Barghouti\'s: **one assessment in five is a person whose life was going to be decided by the order in which I happened to read things.**'));
out.push(hw('Write the assessment (80+ words). ⚠ Then do the thing the cycle exists for: **take the last judgement you made about somebody\'s work and write the middle column for it now** — **what did you actually look at?** **If the column is short, the verdict was formed before the evidence was.** **16.4 writes a verdict that can be appealed**, which is only possible if the working is on the page.'));

// ===================== 16.4 =====================
out.push(pb());
out.push(h2('16.4  A verdict that can be appealed'));
out.push(p('**Function:** writing a verdict that can be appealed, and saying how   ·   **Grammar:** the appeal route, inside the verdict itself   ·   **Pronunciation:** the appeal route read at the same weight as the verdict'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A gives a verdict. ⚠ **B asks one question: if I think you are wrong, what do I do?** **Say the answer in one sentence.** **In most pairs the answer is _write to me_, which is not a route** — **it is the same person, with no new evidence, and nothing said about what would change it.**'));
out.push(board('If you are unhappy with the decision you may of course write to me.', 'If you can produce one independent reference before 4 April, criterion four is reassessed by Mr Saqqal, and nothing else is reopened.'));
out.push(p('**b**  Which is an appeal route? **1** _You may write to me if you wish._  **2** _One independent reference by 4 April; criterion four is then reassessed by Mr Saqqal._  **3** _The decision is final._  **4** _If you believe the evidence was misread, say which criterion and send the document; it goes to the deputy within ten days._  **5** _I am always happy to discuss it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Ms Huda say an appeal route must contain, and what does she say about _the decision is final_?   **A** a form, a fee and a deadline; _final_ is normal   **B** **what would change it, who would look at it, and by when** — and **_the decision is final_ is a sentence about the assessor\'s wishes rather than about the system**   **C** an apology, a reason and a date; _final_ should always be used'));
out.push(p('**b**  Listen again. **1** What does Mrs Shaaban say she got instead of a route?   **2** What does Ms Huda say an appeal route does for the assessor?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  If I think you are wrong', [
  ['Ms Huda', 'Mrs Shaaban. The consignment refusal you appealed against two years ago. What were you told?'],
  ['Rim', '_If you are unhappy with the decision you may of course write to me._ ⚠ **Which I did. To the same person. Who said the same thing in more words.**'],
  ['Ms Huda', '**That is not an appeal route and it is worth saying why precisely.** ⚠ **Three things are missing: what would change it, who would look at it, and by when.**'],
  ['Omar', 'The third one seems the smallest.'],
  ['Ms Huda', '**The third one is the one that makes the other two real.** ⚠ **An appeal with no date is an invitation to a correspondence**, which is 15.5 from the other side — **and the person who refused you is the person deciding how long it goes on.**'],
  ['Adnan', 'And the first is the one nobody writes.'],
  ['Adnan', '⚠ **_What would change it._** **I had drafted appeal paragraphs for nineteen years before anybody made me put that in.** **It is the only one that costs the assessor anything** — **because once it is written, the thing it names will change the decision, whatever I think on the day.**'],
  ['Dima', 'And if they produce it?'],
  ['Adnan', '**Then I reassess and I may have to reverse myself.** ⚠ **That is what it is for.** **An appeal route that cannot produce a different answer is a complaints procedure.**'],
  ['Ms Huda', '**And this is the part that surprises people: it is good for the assessor.** ⚠ **A verdict with an appeal route in it is read as a decision; one without is read as a refusal to be questioned** — **and the second gets argued with for longer, by people who have no idea what to send.**'],
  ['Hiba', 'Mine had nothing. ⚠ **So I argued with it in my head for a year and sent nothing**, because I did not know what would have counted.'],
  ['Ms Huda', '**Which is the real cost and it is invisible to the assessor.** **The appeals that never arrive are not agreement.**'],
  ['Bassel', 'Who should look at it? There is often nobody else.'],
  ['Ms Huda', '**Then name somebody and say what they will do.** ⚠ **Even _I shall reassess that criterion against the document and record the reassessment on the file_ is a route**, because it names an act. **What is not a route is a person being willing to talk.**'],
  ['Jad', 'And _the decision is final_?'],
  ['Ms Huda', '⚠ **It is almost always a sentence about the assessor\'s wishes rather than about the system.** **Very few decisions genuinely are final**, and writing it when it is not is the one thing on this page that can be checked and found untrue — **usually by somebody who has read the regulations more recently than the person signing.**'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **At the same weight as the verdict, in the same paragraph, in the same voice.** ⚠ **An appeal route read quickly, at the end, in a smaller voice, tells the listener what you think of it** — **and that is the version most people have heard, which is why most people do not appeal.**'],
]));
out.push(sp());
out.push(box('Language box – the appeal route', [
  '**Three things, and the first is the one nobody writes.** ⚠ **1 What would change it.** **2 Who would look at it.** **3 By when.**',
  '⚠ **_What would change it_ is the only one that costs the assessor anything** — **because once it is written, the thing it names will change the decision, whatever the assessor thinks on the day.** **An appeal route that cannot produce a different answer is a complaints procedure.**',
  '**And the date is what makes the other two real.** ⚠ **An appeal with no date is an invitation to a correspondence** — **which is 15.5 from the other side, with the person who refused you deciding how long it goes on.**',
  '**It is good for the assessor, which surprises people.** ⚠ **A verdict with an appeal route in it is read as a decision; one without is read as a refusal to be questioned** — **and the second gets argued with for longer, by people who have no idea what to send.**',
  '**The cost of having none is invisible to the assessor.** ⚠ **Mrs Nasser argued with hers in her head for a year and sent nothing**, because she did not know what would have counted. **The appeals that never arrive are not agreement.**',
  '**If there is genuinely nobody else, name an act rather than a person\'s willingness.** ⚠ _I shall reassess that criterion against the document and record the reassessment on the file_ **is a route.** **_I am always happy to discuss it_ is not.**',
  '⚠ **_The decision is final_ is almost always a sentence about the assessor\'s wishes rather than about the system.** **Very few decisions genuinely are** — **and it is the one thing on the page that can be checked and found untrue.**',
  '**Pronunciation.** 🔊 **Track 16.8** **At the same weight as the verdict, in the same paragraph, in the same voice.** ⚠ **An appeal route read quickly, at the end, in a smaller voice, tells the listener what you think of it** — **and that is the version most people have heard, which is why most people do not appeal.**',
  '**And one thing to say when nothing could change it, because silence is read as something worse.** ⚠ _Nothing you could have produced would have changed this one, and here is why._ **It is a hard sentence and it is kinder than the alternative** — **which is a person spending six weeks assembling documents against a decision that was never open to documents.**',
  '**Practise:** Three things, in one sentence. **1** a document that would change it  **2** a recount that would change it  **3** a route where you are the only assessor  **4** one with no date, and the repair  **5** _the decision is final_, and whether it is true',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the verdict from the card. B writes **the appeal route in one sentence: what would change it, who would look at it, by when.** ⚠ **Two rows on each card are verdicts where nothing could change the outcome**, and B must say so and name what the person can do instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the verdict)_ __________.'],
  ['B', '**If __________ by __________, criterion ______ is reassessed by __________.** **Nothing else is reopened.**'],
]));
out.push(table(['Card A – the verdict', 'Card B – the verdict'], [
  ['_Failed on references: not independent._', '_Failed on visits: two of four required._'],
  ['_⚠ Failed on the insurance threshold: certificate expired._', '_⚠ Failed on the registration threshold: not registered._'],
  ['_Failed on returns: three of five on time._', '_Failed on aims: stated in three plans of four._'],
  ['_⚠ Not appointed; the post has been withdrawn._', '_⚠ Refused; the budget line no longer exists._'],
  ['_Failed on batch numbers: eleven of fifteen recorded._', '_Failed on sources: two of three independent._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three parts of each route. ⚠ **The four rows marked ⚠ cannot be appealed into a different outcome** — **two are thresholds that were genuinely not met and two are decisions about something that no longer exists.** **And the honest answer is not silence: say that nothing would change it, why, and what they can do instead.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the appeal route for the assessment you made in 16.3. ⚠ **Three parts, one sentence.** **Then test it honestly: if they produced the thing you have named, would you reverse yourself?** **If not, you have named the wrong thing.**'));
out.push(p('**b**  Swap. Your partner reads your verdict and route **in two voices** — the route at full weight, then the route hurried and quiet at the end. ⚠ They say which version they would act on.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim was asked what she was told when she appealed a consignment refusal two years ago: if you are unhappy with the decision you may of course write to me — which she did, to the same person, who said the same thing in more words. That is not an appeal route and it is worth saying why precisely: three things are missing, which are what would change it, who would look at it, and by when. Omar said the third seems the smallest, and the third is the one that makes the other two real — an appeal with no date is an invitation to a correspondence, which is 15.5 from the other side, with the person who refused you deciding how long it goes on. Adnan said the first is the one nobody writes: what would change it. He had drafted appeal paragraphs for nineteen years before anybody made him put that in, and it is the only one that costs the assessor anything, because once it is written the thing it names will change the decision whatever he thinks on the day. Dima asked what happens if they produce it, and then he reassesses and may have to reverse himself, which is what it is for: an appeal route that cannot produce a different answer is a complaints procedure. And the part that surprises people is that it is good for the assessor — a verdict with an appeal route in it is read as a decision, and one without is read as a refusal to be questioned, and the second gets argued with for longer by people who have no idea what to send. Hiba said hers had nothing, so she argued with it in her head for a year and sent nothing, because she did not know what would have counted. Which is the real cost and it is invisible to the assessor: the appeals that never arrive are not agreement. Bassel asked who should look at it when there is often nobody else, and then you name somebody and say what they will do — even I shall reassess that criterion against the document and record the reassessment on the file is a route, because it names an act, and what is not a route is a person being willing to talk. Jad asked about the decision is final, which is almost always a sentence about the assessor\'s wishes rather than about the system: very few decisions genuinely are final, and writing it when it is not is the one thing on the page that can be checked and found untrue._'));
out.push(p('**Listener task:** write your partner\'s appeal route and whether they would reverse themselves if it were used.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the verdict Adnan sends, with its appeal route. Answer the questions.'));
out.push(model([
  '**TENDER 14/03 · DECISION** · A. Barghouti · 24 March · _to the tenderer_',
  '**Your tender is recommended, subject to one condition set out below.** **It was assessed against the four criteria published in the invitation of 2 February, with the weighting published in the same document.**',
  '**Where it passed.** **The insurance threshold** _(certificate valid to 30 November)_. **The delivery record** _(nine of eleven deliveries on the agreed date, from our goods-in book)_. **Price** _(second of four, about nine per cent above the lowest)_.',
  '**Where it failed.** **References.** ⚠ **The criterion asks for two independent references.** **Both of yours are from this directorate and one is from the officer who signed your last contract with us.** **The references themselves are detailed and I have read them; the criterion is about independence and not about quality.**',
  '**The condition, and what would change it.** ⚠ **If one reference from outside this directorate reaches me by 4 April, criterion four is reassessed against that reference and the recommendation becomes unconditional.** **Nothing else is reopened.**',
  '**If you think I have misread something rather than that I want more paper.** ⚠ **Say which criterion and send the document that shows it.** **It goes to Mr Saqqal, who did not assess this tender, and you will have his answer within ten days.** **He may reverse any of the four, including the ones you passed.**',
  '**What I shall not do, so that you are not waiting for it.** **I shall not reweight the criteria for this tender.** ⚠ **The weighting was published on 2 February and three other tenderers worked to it** — **and a weighting changed after the tenders are in is a different competition held in private.**',
  '**And one thing that is not an appeal and may be more useful.** ⚠ **The next round opens in September with the same four criteria.** **If the independence point is difficult for you, it will be difficult again** — **and I would rather tell you that in March than have you find it out in October.** ⚠ **One directorate in this city does not count a reference as dependent if the officer has not signed a contract with you in the last three years**, which is a different rule and not ours. **I mention it because you may have met it and concluded that ours is the same.** **It is not, and the criterion says so in the invitation.**',
]));
out.push(item('1', 'What does he say about the quality of the references, and why does it not help?'));
out.push(item('2', 'What are the two different routes, and who looks at each?'));
out.push(item('3', 'What does he say he will not do, and why?'));
out.push(writers([
  'A verdict with an appeal route: **the decision in the first line** → **where it passed, briefly** → **where it failed, with the evidence** → **the condition and what would change it, with a date** → **the route for a misreading, with a different person and a deadline** → **what you will not do** → **and anything useful that is not an appeal.**',
  '⚠ **Separate the two routes, because they are different things.** **_Produce this document and the criterion is reassessed_ is a condition.** **_Tell me I have misread it and somebody else will look_ is an appeal.** **A page that offers only the first has not offered an appeal at all.**',
  '**Name the person who will look, and say that they did not assess it.** _Mr Saqqal, who did not assess this tender._ ⚠ **Six words, and they are the difference between a review and the same person reading their own page again.**',
  '**Say what you will not do and why.** _I shall not reweight the criteria; three other tenderers worked to the published weighting._ ⚠ **It saves the reader a month of asking for the one thing that cannot be given**, and the reason protects them as well as you.',
  '⚠ And **add the thing that is not an appeal.** _The next round opens in September with the same four criteria._ **A verdict that tells somebody what will still be true in six months has given them something no appeal could.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the verdict with its appeal route (80 words or more).'));
out.push(p('**______________ · DECISION** · ______________ · _to _______________   **______________, subject to ______________.** **Assessed against the ______ criteria published in ______________.**   **Where it passed.** ______________.   **Where it failed.** ⚠ **______________.** ______________. **The ______________ themselves are ______________; the criterion is about ______________.**   **The condition, and what would change it.** ⚠ **If ______________ reaches me by ______________, criterion ______ is reassessed.** **Nothing else is reopened.**   **If you think I have misread something.** ⚠ **Say which criterion and send ______________.** **It goes to ______________, who did not assess this, and you will have an answer within ______________.**   **What I shall not do.** ______________, **because ______________.**   **And one thing that is not an appeal.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The condition and the appeal kept separate',
  'A named person who did not assess it, and a deadline',
  'What you will not do, with its reason',
  'Something useful that is not an appeal',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _what would change it_ sentence**, and the room says whether producing that thing would really reverse the verdict.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full verdict (180 words or more), to the shape in the writer\'s box: the condition and the appeal separated, a named reviewer with a deadline, what you will not do, and the thing that is not an appeal.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the condition and the appeal separated, a named reviewer who did not assess it, what you will not do with its reason, and the thing that is not an appeal.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the verdict and the route twice: the route at full weight, then hurried and quiet at the end.** ⚠ The room says which version it would act on. **Nobody acts on the second**, and that is the version almost everybody has received. Then the sentence the cycle ends on, which is Ms Huda\'s: **the appeals that never arrive are not agreement.**'));
out.push(hw('Write the verdict (80+ words). ⚠ Then take **the last decision you communicated to somebody** and write its three parts: **what would change it, who would look at it, by when.** **If the first is blank, the decision was not appealable and you did not say so.** **16.5 asks which of your own criteria you would drop**, which is the only cycle in this unit that is about your instrument rather than about somebody else\'s work.'));

// ===================== 16.5 =====================
out.push(pb());
out.push(h2('16.5  The one you would drop'));
out.push(p('**Function:** saying which criterion you would drop, and why   ·   **Grammar:** self-critique of your own instrument   ·   **Pronunciation:** the admission said once, without the defence attached'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take your three criteria. ⚠ **Say which one has never changed an outcome.** **If all three have, say which one you are least sure of.** **Your partner asks what it is actually measuring** — **not what it says, but what it measures.**'));
out.push(board('All three criteria are important and we keep them under review.', 'Criterion three has never failed anybody. It measures whether somebody writes things down neatly.'));
out.push(p('**b**  Which is a real self-critique? **1** _We keep the criteria under review._  **2** _Criterion three has never failed anybody in four rounds._  **3** _No system is perfect._  **4** _Criterion two measures whether somebody has worked somewhere large, which is not what it says._  **5** _We are always open to improving our processes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two tests does Ms Huda give for a criterion that should be dropped, and what does she say about saying so in public?   **A** cost and complexity; say it privately   **B** **one that has never changed an outcome, and one that measures something other than what it says** — and **saying so in public is what makes the other two believable**   **C** age and unpopularity; never say it'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say about the criterion that never fails anybody?   **2** What does Ms Huda say about the second test?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  Which one would you drop', [
  ['Ms Huda', 'Three criteria. Which one has never changed an outcome? Mrs Khoury.'],
  ['Dima', 'The third. ⚠ **Four rounds, about thirty candidates, and it has never failed anybody and never been the reason anybody was appointed.**'],
  ['Ms Huda', '**Then it is not a criterion; it is a courtesy.** ⚠ **A line that cannot change an outcome does not assess anything** — **it tells candidates to spend effort on something that will not be weighed.**'],
  ['Omar', 'Is that not just a low bar?'],
  ['Dima', '**It is a bar everybody steps over, which is the same thing.** ⚠ **And it costs them: three of the thirty wrote at length about it**, because it was on the page and they assumed it mattered.'],
  ['Ms Huda', '**And the second test is harder and more important.** ⚠ **Does the criterion measure what it says it measures?** **Mr Tahhan, yours.**'],
  ['Bassel', 'Criterion two asks for experience of two or more machines. ⚠ **What it actually measures is whether somebody has worked somewhere with two machines** — **which is a fact about their employer and not about them.**'],
  ['Ms Huda', '**That is the second test and it is the one that catches the criteria people are proudest of.** ⚠ **A criterion that measures the circumstances somebody has been in rather than anything they have done is a filter with somebody else\'s hand on it.**'],
  ['Rim', 'Mine does that. Years of service.'],
  ['Ms Huda', '**Almost all of them do, and the honest ones are rewritten rather than defended.** ⚠ _Two machine types operated, by you, with the dates_ **measures the same intention and can be met by somebody from a one-machine works who went and learned the other.**'],
  ['Adnan', 'And saying it in public?'],
  ['Ms Huda', '**That is the cycle.** ⚠ **A set of criteria that names its own weakest line is believed on the other two.** **One that defends all three is believed on none** — **because every reader knows that three out of three is not a thing anybody achieves.**'],
  ['Hiba', 'And it is the sentence I would have wanted in November.'],
  ['Ms Huda', '**It is exactly the sentence you would have wanted**, and it is cheaper to write than any of the others.'],
  ['Jad', 'How do you say it without undermining the whole page?'],
  ['Ms Huda', '🔊 **Once, and without the defence attached.** ⚠ _Criterion three has never failed anybody in four rounds and I am reviewing it before September._ **Not _criterion three has never failed anybody, although of course it still serves a useful purpose in signalling our expectations._** **The second half is the defence, and it takes the admission back.**'],
  ['Mazen', 'So the admission has to cost something.'],
  ['Ms Huda', '**It has to cost something or it is not an admission.** ⚠ **And the cost here is small and real: you have told thirty candidates that three weeks of their effort went somewhere that did not count.**'],
]));
out.push(sp());
out.push(box('Language box – the one you would drop', [
  '**Two tests, and the second is the harder.** ⚠ **1 Has it ever changed an outcome?** **2 Does it measure what it says it measures?**',
  '**A line that cannot change an outcome does not assess anything.** ⚠ **It tells candidates to spend effort on something that will not be weighed** — **and some of them will: three of thirty wrote at length about Mrs Khoury\'s third criterion because it was on the page.**',
  '**The second test catches the criteria people are proudest of.** ⚠ _Experience of two or more machines_ **measures whether somebody has worked somewhere with two machines**, which is a fact about their employer. **A criterion that measures the circumstances somebody has been in rather than anything they have done is a filter with somebody else\'s hand on it.**',
  '**And the repair is a rewrite, not a defence.** ⚠ _Two machine types operated, by you, with the dates_ **measures the same intention** and **can be met by somebody from a one-machine works who went and learned the other.**',
  '**Why it is said in public.** ⚠ **A set of criteria that names its own weakest line is believed on the other two.** **One that defends all three is believed on none** — **because every reader knows that three out of three is not a thing anybody achieves.**',
  '**The admission has to cost something or it is not one.** ⚠ **The cost here is small and real: you have told thirty candidates that three weeks of their effort went somewhere that did not count.**',
  '**The shapes.** _Criterion ______ has never failed anybody in ______ rounds._ _Criterion ______ measures ______, which is not what it says._ _I am rewriting it before ______._ ⚠ **And the ones that admit nothing:** _we keep the criteria under review_ · _no system is perfect_ · _always open to improving our processes_.',
  '**Pronunciation.** 🔊 **Track 16.10** **Once, and without the defence attached.** ⚠ _…although of course it still serves a useful purpose in signalling our expectations_ **is the defence, and it takes the admission back.** **A room can hear the moment it arrives**, usually on the word _although_.',
  '**And one criterion you should keep even though it almost never fires.** ⚠ **A threshold that has failed one person in thirty is not idle; it is a threshold doing its job rarely, which is what thresholds do.** **The first test** — _has it changed an outcome?_ — **asks whether it ever has, not whether it often does.** **Apply it to a threshold over four rounds and not over one.**',
  '**Practise:** Name the weakest criterion and say why, with no defence after it. **1** one that has never changed an outcome  **2** one that measures something else  **3** one you are rewriting, with the new wording  **4** one with the defence attached, so that you hear it  **5** one you are keeping, and why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criterion and its history from the card. B applies **both tests** and says whether to drop it, rewrite it or keep it. ⚠ **Two rows on each card should be kept** — they have changed outcomes and they measure what they say — **and B must resist dropping them.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(criterion, and its history)_ __________.'],
  ['B', '**Changed an outcome:** yes / no. **Measures what it says:** yes / no. **Verdict:** drop / rewrite / keep. _(if rewrite)_ __________.'],
]));
out.push(table(['Card A – criterion and history', 'Card B – criterion and history'], [
  ['_A commitment to quality / never failed anybody, four rounds._', '_Two or more machines / fails people from one-machine works._'],
  ['_⚠ Returns on the published date / failed two of thirty._', '_⚠ Certificate current / failed one, and that one mattered._'],
  ['_Five years\' service / fails nobody under thirty-five._', '_A degree-level qualification / measures who could afford one._'],
  ['_⚠ Four site visits a month / changed the outcome twice._', '_⚠ Batch numbers recorded / failed three in two quarters._'],
  ['_Experience of a large organisation / never defined _large_._', '_Fluent English / nobody has said what fluent is._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both tests and the verdict for each line. ⚠ **The four rows marked ⚠ should be kept and the room will want to drop one of them** — usually _certificate current_, **because it has only failed one person.** **It failed the one person it was there for**, and a threshold that fires once in thirty is not an idle criterion: **it is a criterion doing its job rarely, which is what thresholds do.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Apply both tests to your own three and write the verdict on each. ⚠ **Then write, in one sentence, the admission you would publish** — **with no defence after it.**'));
out.push(p('**b**  Swap and perform. Your partner reads your admission and then **adds _although of course_ and a defence of their own invention.** ⚠ You both say at which word the admission stopped being one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima named her third criterion: four rounds, about thirty candidates, and it has never failed anybody and never been the reason anybody was appointed. Then it is not a criterion but a courtesy — a line that cannot change an outcome does not assess anything, and it tells candidates to spend effort on something that will not be weighed. Omar asked whether that is not just a low bar, and it is a bar everybody steps over, which is the same thing; and it costs them, because three of the thirty wrote at length about it, since it was on the page and they assumed it mattered. The second test is harder and more important: does the criterion measure what it says it measures? Bassel gave his — criterion two asks for experience of two or more machines, and what it actually measures is whether somebody has worked somewhere with two machines, which is a fact about their employer and not about them. That is the test that catches the criteria people are proudest of: a criterion that measures the circumstances somebody has been in rather than anything they have done is a filter with somebody else\'s hand on it. Rim said hers does that, with years of service, and almost all of them do, and the honest ones are rewritten rather than defended — two machine types operated, by you, with the dates, measures the same intention and can be met by somebody from a one-machine works who went and learned the other. Adnan asked about saying it in public, and that is the cycle: a set of criteria that names its own weakest line is believed on the other two. One that defends all three is believed on none, because every reader knows that three out of three is not a thing anybody achieves. Hiba said it is the sentence she would have wanted in November, and it is exactly that, and it is cheaper to write than any of the others. Jad asked how you say it without undermining the whole page, and once, and without the defence attached: criterion three has never failed anybody in four rounds and I am reviewing it before September — not although of course it still serves a useful purpose in signalling our expectations, because the second half is the defence and it takes the admission back. And Mazen said so the admission has to cost something, and it has to cost something or it is not an admission._'));
out.push(p('**Listener task:** write your partner\'s admission and the word at which it stopped being one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Bassel writes about his own two-machine criterion. Answer the questions.'));
out.push(model([
  '**THE CRITERION THAT WAS ABOUT SOMEBODY ELSE** · B. Tahhan · 27 March · _for the next time we take somebody on_',
  '**We have asked for experience of two or more machines in every advertisement since 2019 and I wrote the line myself.** ⚠ **It does not measure what I thought it measured and I can show that with one appointment.**',
  '**What I thought it measured.** Whether somebody can move between machines without being retrained from the beginning. ⚠ **A real thing, worth paying for, and the reason I wrote the line.**',
  '**What it actually measures.** **Whether somebody has worked somewhere that had two machines.** ⚠ **Which is a fact about their last employer.** **Of the nine applicants in 2023, four failed that line, and three of the four had worked at one-machine works for eleven, nine and six years.**',
  '**The one who proved it to me.** **We took a man in 2021 who met the line** — two machines at a works in Homs — **and he had operated the second one twice in three years.** ⚠ **He met the criterion and could not do the thing the criterion was for.** **Meanwhile I had turned away somebody who had gone on a course at his own expense to learn a machine his works did not have**, because the line asked for experience and not for the course.',
  '**What it costs me, which is the part I had not counted.** ⚠ **Four of nine applicants is nearly half.** **In a town where most works have one machine, I have been advertising to the few places that have two** — **and the people most likely to have gone and learned something on their own are precisely the ones the line turns away.**',
  '**The rewrite.** ⚠ _Two machine types operated, by you, with the dates and the approximate hours._ **It can be met by somebody from a one-machine works who went and learned the other.** **It can be failed by the man we appointed in 2021.** **And it costs an applicant four lines to answer.**',
  '**And the thing I shall put in the next advertisement, which I have never seen in anybody\'s.** ⚠ _This criterion replaced an older one that asked for experience of two machines. We changed it because that line measured where you had worked rather than what you had done._ **Two sentences, and they tell an applicant that the page was written by somebody who has thought about it.**',
]));
out.push(item('1', 'What did he think the criterion measured, and what does it actually measure?'));
out.push(item('2', 'What happened with the man appointed in 2021, and who was turned away?'));
out.push(item('3', 'What is the rewrite, and what will he put in the next advertisement?'));
out.push(writers([
  'A note about a criterion that measures the wrong thing: **that you wrote it yourself, in the first line** → **what you thought it measured** → **what it actually measures** → **the case that proved it** → **what it costs, in a fraction** → **the rewrite, in full** → **and what you will tell the people it is applied to.**',
  '⚠ **Own it in the first sentence.** _I wrote the line myself._ **A note about somebody else\'s bad criterion is an opinion; a note about your own is evidence**, and it is the only version the colleague reading it can use.',
  '**Give the case both ways.** _He met the criterion and could not do the thing the criterion was for. Meanwhile I turned away somebody who had gone and learned it at his own expense._ ⚠ **One false pass and one false fail is a complete demonstration**, and either alone is an anecdote.',
  '**Put the cost in a fraction and then in a population.** _Four of nine. In a town where most works have one machine, I have been advertising to the few places that have two._ ⚠ **The second sentence is what turns a fraction into a consequence.**',
  '⚠ And **write the rewrite out in full, with its failure cases.** **It must be possible to say who it would now fail** — _the man we appointed in 2021_ — **because a rewrite that fails nobody has the fault the page is about.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a criterion that measures the wrong thing (80 words or more).'));
out.push(p('**THE CRITERION THAT WAS ABOUT ______________** · ______________ · ______________   **We have asked for ______________ since ______ and I wrote the line myself.** ⚠ ______________.   **What I thought it measured.** ______________.   **What it actually measures.** ⚠ **______________.** **Of the ______ applicants, ______ failed that line, and ______ of them ______________.**   **The one who proved it to me.** ______________. ⚠ **He met the criterion and could not ______________.** **Meanwhile I turned away ______________.**   **What it costs.** ⚠ **______ of ______ is nearly ______________.** ______________.   **The rewrite.** ⚠ _"______________."_ **It can be met by ______________. It can be failed by ______________.**   **And what I shall put in the next ______________.** ⚠ _"______________."_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'That you wrote it yourself, in the first line',
  'One false pass and one false fail',
  'The cost as a fraction and then as a consequence',
  'The rewrite in full, with somebody it would now fail',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their rewrite**, and the room says who it would now fail.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: owned in the first line, a false pass and a false fail, the cost as a fraction and a consequence, and the rewrite with its failure case.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: owned in the first line, one false pass and one false fail, the cost as a fraction and a consequence, and a rewrite that fails somebody.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your admission, then let the room attach _although of course_ and a defence.** ⚠ **Everybody can hear the word at which the admission stopped being one**, and it is nearly always _although_. Then the sentence the cycle ends on, which is Mr Tahhan\'s: **the people most likely to have gone and learned something on their own are precisely the ones the line turns away.**'));
out.push(hw('Write the note (80+ words). ⚠ Then do the arithmetic the cycle depends on: **go back through the last four times you used your criteria and count how many times each one changed an outcome.** **A criterion with a zero beside it is a courtesy.** **16.6 writes the whole assessment** — **criteria, weights, working, verdict and appeal, on one page.**'));

// ===================== 16.6 =====================
out.push(h2('16.6  The whole assessment'));
out.push(p('**Function:** writing the assessment — criteria, weights, working, verdict, appeal   ·   **Grammar:** the five parts, in that order, on one page   ·   **Pronunciation:** reading the page aloud as the person it is about'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five parts of an assessment, in order.** ⚠ Then say **which of the five is missing from the last one you wrote or received.** **It is the appeal in about half of cases and the weighting in most of the rest.**'));
out.push(board('Thank you for your submission, which we have considered carefully.', 'Criteria published 2 February. Weighting published with them. Working below. Verdict. Appeal route and date.'));
out.push(p('**b**  Which order is right? **1** _verdict · criteria · working · weights · appeal_  **2** _criteria · weights · working · verdict · appeal_  **3** _criteria · working · verdict · weights · appeal_  **4** _weights · criteria · verdict · working · appeal_  **5** _criteria · weights · verdict · working · appeal_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say must be true of the first two parts, and what does she say about the length of the whole thing?   **A** they must be agreed internally; the whole thing runs to several pages   **B** **they must have been published before anything was assessed** — and the whole thing is **one page**, because the parts a reader cannot find are the parts that are not used   **C** they must be approved by a committee; length does not matter'));
out.push(p('**b**  Listen again. **1** What does Mrs Nasser say about reading the page as the person it is about?   **2** What does Ms Huda say the working does to the length?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  Five parts, one page', [
  ['Ms Huda', 'Five parts. Mr Barghouti, in order.'],
  ['Adnan', 'Criteria. Weights. Working. Verdict. ⚠ **Appeal.** **And the first two were published before anything was looked at.**'],
  ['Ms Huda', '**Which is the sentence the whole page rests on and it goes in the first line.** ⚠ _Assessed against the four criteria published in the invitation of 2 February, with the weighting published in the same document._ **Twenty words, and everything after it is checkable.**'],
  ['Rim', 'And if they were not published?'],
  ['Ms Huda', '**Then you have an assessment and not a defensible one, and the honest thing is to say so.** ⚠ _The weighting was not published and was agreed by the panel before the papers were read._ **That sentence costs you something and it is true**, which is more than the alternative.'],
  ['Omar', 'How long is the whole thing?'],
  ['Ms Huda', '**One page.** ⚠ **The parts a reader cannot find are the parts that are not used** — **and an appeal route on the fourth page of a document is a route nobody takes.**'],
  ['Dima', 'But the working is the long part.'],
  ['Ms Huda', '**The working is the long part and it is shorter than people expect.** ⚠ **_Nine of eleven on the agreed date, from our goods-in book_ is twelve words and it is complete working.** **What makes assessments long is the prose round the working** — _we were impressed by_, _it was felt that_ — **and none of it is evidence.**'],
  ['Hiba', 'May I say the thing about reading it?'],
  ['Ms Huda', '**Please.**'],
  ['Hiba', '⚠ **Read the page aloud as the person it is about.** **I have been that person and I can tell you what it is like to read one in your own voice: you look for yourself in it and you find a verdict.** **Reading it as them, you find out whether there is anything they could have done.**'],
  ['Ms Huda', '**And that is the test for the whole page in one question.** ⚠ **Is there anything on it the person could have done differently?** **If there is nothing, the page has told them they are the wrong kind of person**, which is not what any of the five parts was for.'],
  ['Bassel', 'Even when the answer is genuinely no?'],
  ['Ms Huda', '**Then say that, which is 16.4.** ⚠ **_Nothing you could have produced would have changed this one, and here is why_ is a hard sentence and it is kinder than silence** — **because the silence is read as _something, but we are not saying what_.**'],
  ['Rim', 'Why that order and not another? It feels like a convention.'],
  ['Ms Huda', '**It is not a convention; each part is unreadable without the one before it.** ⚠ **A verdict with no working above it is an assertion.** **Working with no weights above it cannot be added up.** **Weights with no criteria above them weigh nothing.** **And an appeal route above the verdict invites somebody to appeal against something they have not read yet.**'],
  ['Mazen', 'And the order? Does the verdict really go fourth?'],
  ['Ms Huda', '🔊 **Fourth, after the working, every time.** ⚠ **A verdict read before the working is a decision looking for support, and the reader hears that** — **the same words in the other order are a finding.** **It is 16.3 applied to the whole page instead of to one criterion.**'],
]));
out.push(sp());
out.push(box('Language box – the whole assessment', [
  '**Five parts, in this order, on one page.** **1 Criteria.** **2 Weights.** **3 Working.** **4 Verdict.** ⚠ **5 Appeal.**',
  '**The first line says that the first two were published before anything was looked at.** ⚠ _Assessed against the four criteria published in the invitation of 2 February, with the weighting published in the same document._ **Twenty words, and everything after it is checkable.**',
  '**And if they were not published, say so.** ⚠ _The weighting was not published and was agreed by the panel before the papers were read._ **That sentence costs you something and it is true.**',
  '**One page.** ⚠ **The parts a reader cannot find are the parts that are not used** — **an appeal route on the fourth page is a route nobody takes.**',
  '**The working is shorter than people expect.** ⚠ _Nine of eleven on the agreed date, from our goods-in book_ **is twelve words and is complete working.** **What makes assessments long is the prose round it** — _we were impressed by_, _it was felt that_ — **and none of it is evidence.**',
  '**The test for the whole page, in one question.** ⚠ **Is there anything on it the person could have done differently?** **If there is nothing, the page has told them they are the wrong kind of person**, which is not what any of the five parts was for.',
  '**And when the honest answer is no, say it.** ⚠ _Nothing you could have produced would have changed this one, and here is why._ **It is kinder than silence**, because silence is read as _something, but we are not saying what_.',
  '**Pronunciation.** 🔊 **Track 16.12** **Read the page aloud as the person it is about, not as its author.** ⚠ **In your own voice you find a verdict; in theirs you find out whether there was anything they could have done.** **Mrs Nasser has been that person and the instruction is hers.**',
  '**And the order of the five is not a convention; each part is unreadable without the one before it.** ⚠ **A verdict with no working above it is an assertion. Working with no weights above it cannot be added up. Weights with no criteria above them weigh nothing.** **And an appeal route above the verdict is an invitation to appeal against something the reader has not yet read.**',
  '**Practise:** The five parts, one page. **1** where the weighting was published  **2** where it was not, said so  **3** working in twelve words  **4** a page where nothing could have been done, said plainly  **5** the verdict placed before the working, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an opening line from the card. B says **which of the five parts it is, whether it is in the right place, and what must come before it.** ⚠ **Two rows on each card are prose pretending to be working.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', 'Part ______. **Right place / not.** **Before it:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_Assessed against the four criteria published on 2 February._', '_The delivery record counts for half; price and references a quarter each._'],
  ['_⚠ We were impressed by the general standard of the submission._', '_⚠ It was felt that the references did not entirely meet the requirement._'],
  ['_Nine of eleven on the agreed date, from our goods-in book._', '_Three of four plans stated the aim — fail._'],
  ['_⚠ On balance the tender did not quite persuade us._', '_⚠ The panel gave careful consideration to all four criteria._'],
  ['_If one independent reference reaches me by 4 April, criterion four is reassessed._', '_Recommended, subject to the condition below._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are prose pretending to be working**, and each has the same fault: **a verb of feeling or impression with no object a third person could check.** _We were impressed. It was felt. On balance. Careful consideration._ **None of them says what was looked at.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Lay out your five parts, **one line each**, and count the words. ⚠ **Then strike out every verb of feeling or impression** and see what is left. **In most first attempts the working survives and about a third of the rest goes.**'));
out.push(p('**b**  Swap. **Your partner reads your page aloud as the person it is about.** ⚠ Then they answer the one question: **is there anything on it you could have done differently?**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan gave the five parts in order — criteria, weights, working, verdict, appeal — and said the first two were published before anything was looked at, which is the sentence the whole page rests on and goes in the first line: assessed against the four criteria published in the invitation of 2 February, with the weighting published in the same document. Twenty words, and everything after it is checkable. Rim asked what happens if they were not published, and then you have an assessment and not a defensible one, and the honest thing is to say so — the weighting was not published and was agreed by the panel before the papers were read. That sentence costs you something and it is true, which is more than the alternative. Omar asked how long the whole thing is, and one page: the parts a reader cannot find are the parts that are not used, and an appeal route on the fourth page is a route nobody takes. Dima said the working is the long part, and it is the long part and it is shorter than people expect — nine of eleven on the agreed date, from our goods-in book, is twelve words and is complete working. What makes assessments long is the prose round the working, and none of it is evidence. Hiba then gave the instruction about reading it: read the page aloud as the person it is about, because in your own voice you look for yourself in it and find a verdict, and in theirs you find out whether there is anything they could have done. Which is the test for the whole page in one question: is there anything on it the person could have done differently? If there is nothing, the page has told them they are the wrong kind of person, which is not what any of the five parts was for. Bassel asked what happens when the answer is genuinely no, and then you say that, which is 16.4 — nothing you could have produced would have changed this one, and here is why, which is a hard sentence and is kinder than silence, because the silence is read as something, but we are not saying what. And Mazen asked whether the verdict really goes fourth, and fourth, after the working, every time._'));
out.push(p('**Listener task:** write the answer your partner gave to the one question about your own page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the assessment Hiba writes under her own new form. Answer the questions.'));
out.push(model([
  '**FIRST-YEAR OBSERVATION · F. ZEIN · ASSESSMENT** · H. Nasser · 3 April',
  '**Assessed against the three criteria given to Miss Zein on 2 September, with the weighting given in the same note.** **Criterion one is a threshold.**',
  '**Weighting, as published.** _Planning counts for half; task range and the register of instructions for a quarter each. Without a lesson plan submitted before each observed lesson, the rest is not assessed._',
  '**Threshold — plans submitted.** **Looked at:** four plans for four observed lessons, all submitted the day before. ⚠ **Pass.**',
  '**Planning _(half)_.** **Looked at:** the four plans against what happened in the four lessons. **In three of the four, the stated aim is what the lesson did.** **In the fourth — 14 March — the plan says _review of the past perfect_ and the lesson spent thirty-one minutes on vocabulary.** ⚠ **Pass.** **Against this: the thirty-one minutes were the better part of that lesson**, which I have weighed and which does not change the verdict — **the criterion is whether the plan predicts the lesson.**',
  '**Task range _(a quarter)_.** **Looked at:** the task types across the four lessons, counted from the plans and checked against my notes. **Three types: reading, pairwork, drill.** ⚠ **Pass**, at the stated minimum of three.',
  '**Register of instructions _(a quarter)_.** **Looked at:** the instruction language in the two lessons I have transcripts of. **Eleven instructions; seven in the imperative, four as questions to the whole class.** ⚠ **Fail.** **The criterion asks that every instruction be given once and in the imperative.** **Against this: the four questions were all in the first eight minutes of the first lesson and none in the second**, which is a direction of travel and is not what the criterion measures.',
  '**Verdict.** **Threshold passed; three-quarters passed; one quarter failed.** ⚠ **Recommended for the second year.**',
  '**Appeal, and what would change it.** ⚠ **If you send me the transcript of 21 March by 17 April, I shall count the instructions in it and reassess criterion three against three lessons rather than two.** **It goes to nobody else; I shall record the reassessment on the file either way.** **And if you think I have misread the plans, say which lesson and send the plan — that goes to Mrs Sweidan, who did not observe you.**',
  '**And the criterion I am least sure of.** ⚠ **Task range.** **It has passed everybody I have assessed under this form, which is four people, and I am rewriting it before September.** **You were told three types and you gave three types, so it has not cost you anything** — **but you should know which line on your page was not doing any work.**',
]));
out.push(item('1', 'What happened on 14 March, and why does it not change the verdict?'));
out.push(item('2', 'What are the two appeal routes, and who looks at each?'));
out.push(item('3', 'Which criterion is she least sure of, and what does she tell Miss Zein about it?'));
out.push(writers([
  'One page, five parts: **the first line saying what was published and when** → **the weighting, quoted** → **the threshold** → **each criterion: looked at, verdict, and what points the other way** → **the verdict against the weighting** → **the appeal, with what would change it and a date** → **and the criterion you are least sure of.**',
  '⚠ **Quote the weighting rather than summarising it.** **A summarised weighting cannot be checked against the document it came from**, and the whole page depends on that check being available.',
  '**Name the evidence source for each criterion.** _From the plans and checked against my notes. The two lessons I have transcripts of._ ⚠ **The last one also admits a limit** — **two lessons and not four** — **which is why the appeal route can offer a third.**',
  '**Let the counter-evidence be genuinely good.** _The thirty-one minutes were the better part of that lesson._ ⚠ **A page whose counter-evidence is trivial has not conceded anything**, and the reader will see that faster than you can write it.',
  '⚠ And **put 16.5 inside the page.** _It has passed everybody I have assessed under this form, which is four people, and I am rewriting it before September._ **Naming your weakest line to the person you have just assessed is the sentence that makes the other three believable.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-page assessment (80 words or more).'));
out.push(p('**______________ · ASSESSMENT** · ______________ · ______________   **Assessed against the ______ criteria given on ______________, with the weighting given in the same ______________.**   **Weighting, as published.** _"______________."_   **Threshold — ______________.** **Looked at:** ______________. ⚠ **Pass / Fail.**   **______________ _(______)_.** **Looked at:** ______________, **from ______________.** **Verdict.** ⚠ **Against this: ______________**, which does not change it.   **______________ _(______)_.** **Looked at:** ______________. **Verdict.**   **Verdict.** ______________.   **Appeal, and what would change it.** ⚠ **If ______________ by ______________, I shall ______________.** **If you think I have misread ______________, it goes to ______________.**   **And the criterion I am least sure of.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The first line: what was published, and when',
  'The evidence source named for each criterion, with any limit admitted',
  'Counter-evidence that is genuinely good',
  'The criterion you are least sure of, inside the page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their last paragraph** — the criterion they are least sure of — and the room says whether it would trust the other criteria more or less for having read it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full assessment (180 words or more), to the shape in the writer\'s box: published first, sources named, counter-evidence that is good, the appeal with a date, and your weakest line at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: what was published and when, the evidence source for each criterion, counter-evidence that is genuinely good, and your weakest line named inside the page.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Your partner reads your page aloud as the person it is about.** ⚠ Then the one question: **is there anything on it that person could have done differently?** Then the sentence the cycle ends on, which is Mrs Nasser\'s: **in your own voice you find a verdict; in theirs you find out whether there was anything they could have done.**'));
out.push(hw('Write the assessment (80+ words). ⚠ Then do the strike-out: **go through it and cross out every verb of feeling or impression** — _impressed_, _felt_, _on balance_, _considered carefully_ — **and read what is left.** **If the page still works, those words were doing nothing; if it collapses, there was no working in it.** **16.7 puts you between an assessor and the person assessed**, which is where this unit has been heading since 16.1.'));

// ===================== 16.7 =====================
out.push(h2('16.7  Review & Mediate: The assessor and the assessed'));
out.push(p('**Function:** mediating between an assessor and the person assessed   ·   **Recycling:** Unit 16   ·   **Exam practice:** B2 First Reading and Use of English Part 4 · Writing Part 2 (a review) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The returns counts for half and the visits for a quarter.  **2** A criterion what cannot be failed is a reserve power.  **3** She was assessed again three criteria published in September.  **4** The verdict is appealing within ten days.  **5** His objective in the marking was not in question.  **6** The panel moderation the marks before publishing them.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the assessment, and what each side says about it.'));
out.push(box(null, [
  '**ONE ASSESSMENT, TWO ACCOUNTS** _(an assessor and a candidate, four months apart)_',
  '**The page.** _"Assessed against three criteria published on 2 September. Criterion one — plans submitted: pass. Criterion two — planning: pass. Criterion three — register of instructions: fail, eleven instructions, four given as questions to the whole class. Recommended for the second year."_',
  '**The assessor.** _"It is the clearest page I have written. Every criterion was published, the working is on it, there is an appeal route with a date, and I named my own weakest criterion at the bottom."_',
  '**The candidate.** _"I have been recommended and I have been failed on something, and I cannot tell which of those is the real message. Nobody has ever failed me on anything and been pleased with me at the same time."_',
  '⚠ **Both accounts are accurate and neither of them is about the page.**',
  '**And the thing the page does not say.** **What a fail on a quarter means when the verdict is a recommendation** — **whether it is a note for next year, a condition, or a mark against her.**',
  '**The question for the cycle.** _What does a mixed verdict actually tell the person it is about?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the page is missing, and what is the one sentence that would supply it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  What a mixed verdict means', [
  ['Ms Huda', 'A page that does everything this unit has taught, and a candidate who cannot read it. Mrs Nasser — is the page wrong?'],
  ['Hiba', 'No. ⚠ **I wrote it and I would write it again**, and she is right as well, which is the part I did not expect.'],
  ['Ms Huda', '**Then do the mediation, and it is three moves.** One: **separate what the page says from what the page is for.** Two: ⚠ **find the question the page does not answer.** Three: **say whether it can be answered at all.**'],
  ['Dima', 'What does it say?'],
  ['Hiba', '**That three criteria were applied and one was failed, and that the overall verdict is a recommendation.** ⚠ **Every word of that is accurate and the arithmetic is published.**'],
  ['Ms Huda', '**And the question it does not answer?**'],
  ['Rim', '⚠ **What the fail means for her.** **Is it a note for September, a condition on the recommendation, or something that will be read by somebody else in two years?**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **A page can satisfy every criterion in this unit and still leave the person unable to act**, because the five parts tell them how the verdict was reached and not what to do about it.'],
  ['Adnan', 'That is a real gap and I have it on every page I write.'],
  ['Ms Huda', '**And the sentence that closes it is one line.** ⚠ _The failed criterion is a note for your second year; it is not a condition and it does not go beyond this file._ **Or the opposite, if the opposite is true.**'],
  ['Bassel', 'And if the assessor does not know?'],
  ['Ms Huda', '**Then that is the answer and it must be given.** ⚠ _I do not know whether anybody else reads this file and I shall find out and tell you by Thursday._ **An assessor who does not know what their own page does is common and the not-knowing is not the fault** — **leaving the candidate to guess is.**'],
  ['Omar', 'What does the mediator actually do here? Neither of them is wrong.'],
  ['Ms Huda', '⚠ **Name the question and hand it to the person who can answer it.** **That is the whole job.** **The mediator does not answer it, because the mediator does not know what the file is for either** — **and a comforting guess here produces exactly the harm 15.7 was about.**'],
  ['Dima', 'How many different things could that fail actually mean?'],
  ['Ms Huda', '**Three, and the candidate cannot tell them apart.** ⚠ **A note for next year. A condition on the verdict. A record somebody else reads in two years.** **Three different futures, and the page says none of them** — **so she assumes the worst of the three**, which is free to prevent and expensive to leave.'],
  ['Jad', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, and do not let either of them sound reasonable at the other\'s expense.** ⚠ **The assessor\'s account is a description of a page and the candidate\'s is a description of a feeling** — **and the second is harder to read aloud without sounding like a complaint.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the assessor and the assessed', [
  '**The three moves.** **1** **Separate what the page says from what the page is for.** ⚠ **2** **Find the question the page does not answer.** **3** **Say whether it can be answered at all.**',
  '⚠ **The finding, and it is new: a page can satisfy every criterion in this unit and still leave the person unable to act.** **The five parts tell them how the verdict was reached and not what to do about it.**',
  '**The question that is almost always missing from a mixed verdict.** ⚠ **What does the failed part mean?** **Is it a note for next year, a condition on the verdict, or something another reader will see in two years?** **Those are three different pieces of news and the page says none of them.**',
  '**The sentence that closes it is one line.** ⚠ _The failed criterion is a note for your second year; it is not a condition and it does not go beyond this file._ **Or the opposite, if the opposite is true.**',
  '**And if the assessor does not know, that is the answer and it must be given.** ⚠ _I do not know whether anybody else reads this file and I shall find out and tell you by Thursday._ **Not knowing what your own page does is common and is not the fault** — **leaving the candidate to guess is.**',
  '**What the mediator does.** ⚠ **Names the question and hands it to the person who can answer it.** **That is the whole job.** **The mediator does not answer it**, because the mediator does not know what the file is for either — **and a comforting guess here produces exactly the harm of 15.7.**',
  '**Pronunciation.** 🔊 **Track 16.14** **The two accounts one after the other, at the same speed, and neither reasonable at the other\'s expense.** ⚠ **The assessor\'s is a description of a page and the candidate\'s is a description of a feeling** — **and the second is harder to read without sounding like a complaint.** **Read it as a report.**',
  '**And the three pieces of news a mixed verdict might be carrying, which the reader cannot tell apart.** ⚠ **A note for next year. A condition on the verdict. A record another reader will see in two years.** **Those are three different futures and the page says none of them** — **so the candidate assumes the worst of the three, which is free to prevent and expensive to leave.**',
  '**One warning, and it is this unit\'s version of the standing one.** ⚠ **Do not improve the page.** **It is a good page and the temptation is to redraft it in the room**, which answers nothing: **the gap is not in the drafting and the assessor has done everything this unit teaches.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an assessment and two accounts of it, and does **not** show them. A reads the page, then both accounts. B makes the three moves: **what it says, the question it does not answer, and whether that question can be answered.** ⚠ **In one of the two pairs the page genuinely is defective** — a criterion was not published — **and B must say so rather than looking for a missing question.** Change roles with the other pair.'));
out.push(table(['Pair A – the observation', 'Pair B – the tender'], [
  ['_Three criteria published; one failed; recommended._', '_Four criteria; one failed; not recommended._'],
  ['_Assessor: "every part of it is published and checkable."_', '_⚠ Assessor: "the fourth criterion was agreed by the panel in the room."_'],
  ['_Candidate: "I am recommended and I am failed, and I cannot read it."_', '_Tenderer: "I was not told about the fourth."_'],
  ['_⚠ Missing question: what the fail means for her._', '_⚠ Not a missing question: an unpublished criterion._'],
  ['_⚠ Answerable, by the assessor, in one line._', '_⚠ The page is defective and the remedy is a reassessment._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a missing-question case**: **a criterion that was agreed in the room and never published is not a gap in communication, it is an assessment against a rule the candidate could not have known.** **A page that is hard to read and a page that is unfair need different remedies.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last assessment you wrote or received** and do the three moves on it in writing. ⚠ **Write the question it does not answer.** Then the question the cycle ends on: **who can answer it, and have they been asked?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the page does not say:  _A page that does everything the unit has taught, and a candidate who cannot read it. Asked whether the page is wrong, Hiba said no — she wrote it and would write it again, and the candidate is right as well, which is the part she did not expect. So the mediation, which is three moves: separate what the page says from what the page is for; find the question the page does not answer; and say whether it can be answered at all. What it says is that three criteria were applied and one was failed, and that the overall verdict is a recommendation — every word accurate and the arithmetic published. The question it does not answer, Rim said, is what the fail means for her: whether it is a note for September, a condition on the recommendation, or something that will be read by somebody else in two years. Which is the finding of the cycle and it is new: a page can satisfy every criterion in this unit and still leave the person unable to act, because the five parts tell them how the verdict was reached and not what to do about it. Adnan said that is a real gap and he has it on every page he writes. The sentence that closes it is one line: the failed criterion is a note for your second year, it is not a condition and it does not go beyond this file — or the opposite, if the opposite is true. And Bassel asked what happens if the assessor does not know, and then that is the answer and it must be given: I do not know whether anybody else reads this file and I shall find out and tell you by Thursday. An assessor who does not know what their own page does is common, and the not-knowing is not the fault — leaving the candidate to guess is. Omar asked what the mediator actually does here when neither of them is wrong, and the mediator names the question and hands it to the person who can answer it, which is the whole job. The mediator does not answer it, because the mediator does not know what the file is for either, and a comforting guess here produces exactly the harm that 15.7 was about._'));
out.push(p('**Listener task:** write the question your own last assessment does not answer, and who can answer it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 4)', 7));
out.push(p('For questions **1–6**, complete the second sentence so that it means the same as the first. **Use the word given and between two and five words, including the word given. Do not change the word given.**'));
out.push(box(null, [
  '**1**  Nobody has ever been rejected on that line.   **TURNED**   Nobody ______________________ on that line.',
  '**2**  The weighting was not published before the papers were read.   **PRIOR**   The weighting was not published ______________________ the papers.',
  '**3**  It is not possible to appeal against a threshold that was genuinely not met.   **NO**   There ______________________ appealing against a threshold that was genuinely not met.',
  '**4**  She only understood the three words a year later.   **UNTIL**   It ______________________ a year later that she understood the three words.',
  '**5**  Brilliance elsewhere would not make me accept failure here.   **MATTER**   ______________________ good the rest was, I would not accept failure here.',
  '**6**  The criterion has never changed an outcome.   **DIFFERENCE**   The criterion ______________________ to any outcome.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an assessor and a candidate (80 words or more).'));
out.push(p('**ONE ASSESSMENT, TWO ACCOUNTS** · ______________   **The page.** _"______________"_   **The assessor.** _"______________"_   **The candidate.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the page says.** ______________. ⚠ **Every word of it ______________.**   **The question it does not answer.** ⚠ ______________.   **Can it be answered?** ______________, **by ______________, in ______________.**   **And what I am not doing.** ⚠ **Improving the page**, and **answering the question myself.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the page says, separated from what it is for',
  'The question it does not answer, in one sentence',
  'Who can answer it — and that it is not you',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a review)', 10));
out.push(box(null, [
  '⚠ **The review, and the shape is 8.6: the verdict with its reader in the first line, one decisive detail with a figure, the weakness in its strongest form, and no introduction.** **What Unit 16 adds is that the thing reviewed is an instrument** — **a form, a scheme, a procedure** — **so the reader it is for is the person who has to use it.**',
  'An English-language magazine for people who manage others has asked for reviews of **a form, a procedure or a system you have had to use at work.**',
  'Write your **review** in **180–220 words**, saying **who it works for, who it does not, what decided your verdict, and what is wrong with it.**',
  '⚠ **All four requirements, or the content mark goes.** **And no introduction**: _in this review I shall examine…_ **is eight words telling the editor about instructions the editor wrote.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The delivery record ___ for half of the total.   a) count   b) counts   c) counting',
  '2  A criterion ___ cannot be failed is a reserve power.   a) which   b) who   c) what',
  '3  She was assessed ___ three criteria published in September.   a) again   b) against   c) about',
  '4  The verdict is ___ within ten days to somebody who did not assess it.   a) appealing   b) appealed   c) appealable',
  '5  His ___ in marking the four papers was not in question.   a) objective   b) objectively   c) objectivity',
  '6  The panel ___ the marks before publishing them, so that the two assessors agreed.   a) moderate   b) moderated   c) moderating',
  '7  Two of the nine applicants were ___ out by a line about their last employer.   a) screened   b) screening   c) screen',
  '8  The ___ of the criteria across the four rounds is what makes them worth anything.   a) consistent   b) consistently   c) consistency',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 16.15** You will hear an interview with a woman who assesses first-year teachers. For questions **1–7**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  What does she say was wrong with the form she was assessed on?   **A** it was too long   **B** nobody could say what one of its lines meant   **C** it was applied inconsistently',
  '**2**  What does she say the year cost her?   **A** about sixty hours and a year of not teaching her own lessons   **B** a promotion   **C** the respect of her assessor',
  '**3**  Why does she publish the weighting before the first observation?   **A** it is a regulation   **B** otherwise effort goes to the wrong criterion   **C** her colleagues asked her to',
  '**4**  What does she say about the criterion she is least sure of?   **A** she has removed it   **B** it has passed everybody and she is rewriting it   **C** it is the most important of the three',
  '**5**  What happened on 14 March?   **A** the plan and the lesson did not match   **B** the plan was not submitted   **C** the lesson was cancelled',
  '**6**  What does she say about reading an assessment aloud?   **A** it should be read to the candidate   **B** read as the person it is about, you find out whether anything could have been done   **C** it saves time',
  '**7**  What does she say is still missing from her own pages?   **A** the working   **B** what a failed criterion means for the person afterwards   **C** the appeal route',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Interviewer', 'You were assessed yourself, in your first year. What was on the form?'],
  ['Hiba', 'Three words. _Range demonstrated._ And the thing I understand now and did not then is that nobody could have told me what they meant — not because she was withholding it, but because there was nothing to withhold. The line could not be failed and it could not be passed either.'],
  ['Interviewer', 'What did that year cost?'],
  ['Hiba', 'About sixty hours of preparation on guesses, which I can count. And a first year in which I was not teaching my own lessons, which I cannot. Forty experiments, and the students got the experiments.'],
  ['Interviewer', 'And now you assess. What did you change first?'],
  ['Hiba', 'I publish the weighting with the criteria, before the first observation. Half for planning, a quarter each for the other two. The reason is simple: if people do not know what counts, they put the effort where it does not. Mine went to the quarter for a year.'],
  ['Interviewer', 'Do you ever doubt your own criteria?'],
  ['Hiba', 'One of them. Task range has passed everybody I have assessed under this form, which is four people, and a line that has never failed anybody is not assessing anything. I am rewriting it before September and I tell the person I am assessing that, in the assessment.'],
  ['Interviewer', 'Does that not undermine the whole page?'],
  ['Hiba', 'It is the opposite. A page that names its own weakest line is believed on the others. A page that defends all three is believed on none, because nobody gets three out of three.'],
  ['Interviewer', 'Tell me about a difficult case.'],
  ['Hiba', 'The fourteenth of March. The plan said review of the past perfect and the lesson spent thirty-one minutes on vocabulary — and those thirty-one minutes were the best part of the lesson. It still failed the test for that criterion, because the criterion is whether the plan predicts the lesson. I wrote the good part into the assessment and it did not change the verdict.'],
  ['Interviewer', 'Any habit you would pass on?'],
  ['Hiba', 'Read the page aloud as the person it is about. In your own voice you are looking for yourself in it and you find a verdict. In theirs, you find out whether there is anything they could actually have done.'],
  ['Interviewer', 'And is anything still missing?'],
  ['Hiba', 'One thing, and I only saw it last month. The page tells them how I reached the verdict. It does not tell them what the failed criterion means afterwards — whether it is a note for next year or something somebody reads in two years. That is one line and I had never written it.'],
]));
out.push(p('**C  Writing.** Write the review (180–220 words): the verdict with its reader, one decisive detail with a figure, the weakness in its strongest form, and no introduction.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write three criteria that can each be failed, and spot one that cannot',
  '☐ publish a weighting in one sentence, before anything is assessed',
  '☐ tell a proportion from a threshold, and say which I want',
  '☐ fill the middle column before the third, and show the working',
  '☐ name the evidence that points the other way, and weigh it',
  '☐ write an appeal route with what would change it, who, and by when',
  '☐ say which of my own criteria I would drop, with no defence after it',
  '☐ find the question a page does not answer, and hand it to whoever can',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _mark down · mark up · let through · screen out · sift through · rule on · measure up · count against · pass over · weed out · bear on · take into account_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 16.7 draws on this)_: _evaluate → **evaluation** · moderate → **moderation** · appeal → **appealable** · objective → **objectivity** · consistent → **consistency** · transparent → **transparency** · discriminate → **discrimination** · standard → **standardise** · rank → **ranking**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
