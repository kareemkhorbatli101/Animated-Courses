// Proactive Business English B2 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a written assessment of a year\'s work · a review of work rather than of a person · what you saw · what you concluded · to describe before you judge · a judgement with an instance under it · an instance with a date · a pattern across three instances · a single instance presented as a pattern · the thing they do well that nobody has said · a strength nobody has named · to say it once and precisely · a criticism repeated until it stops working · a criticism with a remedy attached · a remedy the person can begin on Monday · an assessment you think is wrong · to answer an assessment in writing · to accept the part that is right · to dispute the part that is not, with an instance · to ask for the instance behind a judgement · a judgement with no instance behind it · to review somebody better at it than you · what you are not qualified to assess · to say so in the document · a rating that has to agree with a decision · a document made to agree with another · two documents answering different questions · a record that is allowed to be in tension · to separate the work from the appointment · a consolation written into a review · the sentence they will remember for a year · a review they could show to anybody';
const COLLOC = 'to name a strength · to date an instance · to attach a remedy · to answer an assessment · to dispute a judgement · to ask for the instance · to separate work from appointment · to rate against a standard';
const BACK_AT_B2 = 'an appraisal · a performance note · a rating scale';

out.push(h1('Unit 22  Reviews, and the Document That Must Not Agree'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**22.1**  write about work rather than about a person, and notice the difference',
  '**22.2**  put an instance with a date under every judgement you make',
  '**22.3**  name a strength nobody has ever told the person about',
  '**22.4**  make a criticism once, precisely, with a remedy they can begin on Monday',
  '**22.5**  answer an assessment you think is wrong, accepting the part that is right',
  '**22.6**  review somebody who is better at part of the job than you are',
  '**22.7**  Review & Mediate: the appraisal that must not be made to agree with the appointment',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ July, and four reviews on one desk', [
  '⚠ **Nour Mansour took the office manager\'s post on 1 July and inherited four annual reviews due by the end of the month.** **She has never written one.**',
  '⚠ **One of them is Bassel Nassif\'s.** **His year contains a paper in December that was wrong about the threshold, a paper in May that produced the option the firm actually took, and an appointment in April that he did not get.** ⚠ **Nour wrote the December objection and was the person appointed instead.**',
  '⚠ **One is Lina Barakat\'s, who is better at one part of the job than Nour is.** **One is Hala Mourad\'s, whose walk-in tally is the most valuable piece of data in the firm and is in no job description.** **And one is Nour\'s own, which Mr Sayegh will write and which she will have to answer.**',
  '⚠ **The hardest thing in this unit is not honesty, and classes assume it is.** ⚠ **It is that an honest appraisal of Bassel\'s year reads as a criticism of the April decision** — **and the temptation is to write a slightly smaller appraisal so that the two documents agree.** **That is the one thing this unit forbids.**',
], C.lyellow, C.orange));

// ======================= CYCLE 22.1 =======================
out.push(pb());
out.push(h2('22.1  Work, not the person'));
out.push(p('**Function:** writing about what was done   ·   **Grammar:** _the December paper did X; he is not Y_   ·   **Pronunciation:** a judgement about a document'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you have been told about yourself at work that you could not act on. ⚠ Then say what the person might have meant.'));
out.push(p('**b**  Which is about work? _Bassel is over-confident · the December paper gave one threshold and no range, and the May paper gave three quotations and a range; the second is the habit to keep_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say is wrong with Nour\'s first draft?   **A** nothing   **B** every judgement in it is about a person and none of them can be acted on   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What is the test he gives her? **2** Why does he say a judgement about a person is unanswerable?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  "He cannot do anything with over-confident"', [
  ['Mr Sayegh', 'Your draft on Bassel. Read me the first assessment.'],
  ['Nour', '"Tends to be over-confident in his projections."'],
  ['Mr Sayegh', '⚠ **What is he supposed to do with that on Monday morning?**'],
  ['Nour', 'Be less confident.'],
  ['Mr Sayegh', '⚠ **Which is not a thing anybody can do, and he will either reject it or try to be less confident about everything, including the things he is right about.** ⚠ **Both are worse than saying nothing.**'],
  ['Nour', 'So what do I write?'],
  ['Mr Sayegh', '⚠ **The work.** ⚠ **What did the December paper do that the May paper did not?**'],
  ['Nour', 'December gave one threshold. One number, no range, no source. May gave three quotations and said which one he was using.'],
  ['Mr Sayegh', '⚠ **That is an assessment.** ⚠ **It names a practice, it is checkable, and he can do it on Monday** — **and notice that it is the same observation as *over-confident* with the person taken out of it.**'],
  ['Nour', 'It is also less damning.'],
  ['Mr Sayegh', '⚠ **It is more damning, because he cannot argue with it.** ⚠ *Over-confident* **is an opinion he can decide is unfair.** *One number with no range* **is a thing on a page with a date on it.**'],
  ['Nour', 'What is the test?'],
  ['Mr Sayegh', '⚠ **Read the sentence and ask whether it describes a document, a conversation or a decision.** ⚠ **If it describes a person, you have written the conclusion and left out the evidence** — **and you have written the only kind of sentence that gets remembered for a year and acted on never.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A person, and the work**',
  table(['', 'About the person', 'About the work'], [
    ['**the projection**', '⚠ *tends to be over-confident*', '⚠ *the December paper gave one threshold with no range and no source; the May paper gave three quotations and named the one in use*'],
    ['**the writing**', '*not a natural writer*', '⚠ *three of the four papers put the recommendation on the last page; the fourth put it on the first and was the one that was acted on*'],
    ['**the manner**', '*can be abrupt with suppliers*', '⚠ *in the call of 14 March he gave the carrier a decision before the carrier had finished the question* — **one instance, and I have only one**'],
    ['⚠ **the test**', '⚠ **does the sentence describe a person?**', '⚠ **then you have written the conclusion and left out the evidence** — **and that is the sentence remembered for a year and acted on never**'],
  ], [1.4, 2.6, 5]),
  '⚠ **The test is one question: does this sentence describe a document, a conversation or a decision** — **or a person?** ⚠ **A person cannot be acted on by Monday morning.**',
  '⚠ **A judgement about a person is unanswerable, which sounds like a strength and is a weakness.** ⚠ **The reader either rejects it as unfair or tries to change everything at once, including what they do well** — **and both outcomes are worse than silence.**',
  '⚠ **And the work version is MORE damning, not less.** ⚠ *Over-confident* **is an opinion somebody can decide is unjust.** *One number with no range and no source* **is a thing on a page with a date** — **and nobody argues with a page.**',
  '⚠ **Where you have only one instance, say so in the sentence.** ⚠ *One instance, and I have only one.* **It stops a single event being read as a pattern, which is the fault 22.2 is about** — **and it costs six words.**',
  '⚠ **The paired form is the strongest.** ⚠ **What the worse document did and what the better one did, side by side** — **because it names the practice to keep as well as the one to drop, and the person can see both in their own work.**',
  '**Practise:** Take three things you would say about somebody\'s work. Apply the test. Rewrite any that describe a person.',
  '**Useful phrases:**  what do they do with that on Monday?  ·  does this describe a document or a person?  ·  one number, no range, no source  ·  one instance, and I have only one  ·  the practice to keep',
  '**Pronunciation – a judgement about a document.** 🔊 **Track 22.2** Listen twice. ⚠ **The first says *the December paper gave one threshold with no range* evenly, as a description.** ⚠ **The second stresses *one*.** **Even, it is an observation about a paper; stressed, it is an accusation about a man, and the test has been failed by the voice rather than by the words.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers an assessment; B applies the test.'));
out.push(dlg(null, [
  ['A', 'I would say that they __________.'],
  ['B', '⚠ **Does that describe a document, a conversation, a decision, or a person?**'],
  ['A', '__________.'],
  ['B', '⚠ **What could they do about it on Monday morning?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what did the work actually do? Give me the document and the date.**'],
  ['A', '__________.'],
  ['B', '⚠ **And is there a better one of theirs to put beside it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write both, and the second one is the practice to keep.**'],
]));
out.push(table(['Role card 1 — but it is true about him', 'Role card 2 — the work version is too mild'], [[
  '⚠ **A insists the personal judgement is accurate and that softening it is dishonest.** ⚠ **B agrees it may be accurate and asks what the person does with it on Monday.** ⚠ **B\'s point: an accurate judgement nobody can act on is worse than silence, because it gets remembered and changes nothing** — **and the work version says the same thing in a form that can be used.**',
  '⚠ **A thinks *one threshold with no range* reads as a technicality next to *over-confident*.** ⚠ **B asks which of the two the person could argue was unfair.** ⚠ **B\'s point: the personal version is an opinion and can be dismissed; the work version is a page with a date on it and cannot** — **so the mild-sounding one is the one that lands.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** rewrite one personal judgement as a work judgement, with a document and a date. ⚠ Then add the better document of theirs beside it.'));
out.push(PHRASE_CARD(['document or person?', 'what do they do on Monday?', 'which document, which date?', 'a better one beside it', 'the practice to keep']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you would say about somebody\'s work.'));
out.push(table(['As you would say it', 'Person or work?', 'The work version, with a date', 'A better document of theirs'], [['', '', '', ''], ['', '', '', '']], [2.2, 1.6, 2.8, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would want to say _______. That describes a _______. The work version is _______, on _______. And the better one of theirs is _______, which is the practice to keep._'));
out.push(p('**Listener task:** count how many of the originals described a person. ⚠ Then ask, of the rewritten ones, how many could be started on Monday morning.'));
out.push(p('**Board clinic:** your teacher writes four assessments on the board — find the one that describes a person, and the one whose work version has no date in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ANNUAL REVIEW: B. NASSIF, YEAR TO 30 JUNE. PAGE 1: THE WORK. N. Mansour, 18 July.**',
  '⚠ **A note on how this page is written, because it will read strangely to anybody expecting the usual form.** **There is nothing in it about Bassel.** ⚠ **Every assessment names a document, a conversation or a decision, with a date, and every one of them is a thing he could begin doing differently on Monday.** **Where I have only one instance I have said so.**',
  table(['The work', 'What it did', 'The practice'], [
    ['**the December Homs paper**', '⚠ **gave one walk-in threshold, a hundred and fifty, with no range and no source**', '⚠ **a single figure with no range invites the reader to supply one.** **The count came in at a hundred and ninety-six.**'],
    ['**the May capital paper**', '⚠ **gave three fit-out quotations, named the one in use, and said what changed at each end of the range**', '⚠ **this is the practice to keep, and it is the same writer four months later**'],
    ['**section 5 of the May paper**', '⚠ **stated the case for the option he recommended against, with a figure in its own terms and a point nobody had raised**', '⚠ **the fourth option the firm took was found in that section.** **I found it, and it was not there to be found before he rewrote it.**'],
    ['**the call to the carrier, 14 March**', '⚠ **gave a decision before the question was finished**', '⚠ **one instance, and I have only one.** **It is here because the carrier mentioned it to Abu Yasser and not because I was in the room.**'],
  ], [1.9, 3.1, 4]),
  '⚠ **What I have deliberately NOT written on this page.** **I have not written that he is over-confident, which was my first draft and which was four words doing the work of two rows of this table.** ⚠ **It was true, it was unanswerable, and he could not have done anything with it on Monday** — **so it has been replaced by the December row, which says the same thing about a document.**',
  '⚠ **And one thing I want on the record about my own position.** **I wrote the objection to the December paper and I was the person appointed in April.** ⚠ **So this page is written by the person who beat him, and every judgement on it names a document a third party can read** — **which is not a courtesy to him. It is the only way the page is worth anything to anybody in two years.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is every assessment on the page constructed, and what is said where there is only one instance?'));
out.push(item('2', 'What has the writer not written, and what replaced it?'));
out.push(item('3', 'What does the writer record about her own position, and why does she say it is not a courtesy?'));
out.push(box('Writer\'s box', [
  '**The work page of a review — five parts:** ⚠ **a note saying there is nothing about the person in it** → ⚠ **three columns: the work · what it did · the practice** → ⚠ **a better document of theirs beside a worse one** → ⚠ **one instance marked as one instance, with how you know** → ⚠ **and your own position in relation to them.**',
  '⚠ **Open by saying what the page does not contain.** ⚠ *There is nothing in it about Bassel.* **A reader expecting the usual form will otherwise read the absence as evasion rather than as method.**',
  '⚠ **Name the document and the date in every row.** ⚠ *The December Homs paper · the call of 14 March.* **An assessment with no document behind it is an opinion**, **and a review made of opinions is a review the person argues with rather than acts on.**',
  '⚠ **Put the better document beside the worse one, and say it is the same writer.** ⚠ *This is the practice to keep, and it is the same writer four months later.* **It names what to do as well as what not to do, and it makes the criticism survivable** — **which is not kindness, it is what makes it get used.**',
  '⚠ **Mark a single instance as single, and say how you know.** ⚠ *One instance, and I have only one. It is here because the carrier mentioned it to Abu Yasser and not because I was in the room.* **Second-hand evidence declared as second-hand is usable; the same evidence undeclared is the thing that destroys a review when it is challenged.**',
  '⚠ **And disclose your own position.** ⚠ *This page is written by the person who beat him.* **Then say why the method follows from it** — *every judgement names a document a third party can read* — **and say plainly that it is not a courtesy but the only thing that makes the page worth anything in two years.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the work page of a review (**80 words or more**). Use the frame.'));
out.push(p('**ANNUAL REVIEW: ______________. PAGE 1: THE WORK. ______________, ______________.**   ⚠ **A note on how this page is written. There is nothing in it about ______________. Every assessment names ______________, with a date, and every one is something they could begin differently on Monday.**   **The work** | **What it did** | ⚠ **The practice**   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **this is the practice to keep**   **______________** | ⚠ **______________** | ⚠ **one instance, and I have only one. It is here because ______________.**   ⚠ **What I have NOT written. I have not written that they are ______________, which was my first draft** — **it was ______________ and they could not have done anything with it on Monday.**   ⚠ **One thing about my own position. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Nothing anywhere describing the person', ''],
  ['A document or a conversation, with a date, in every row', ''],
  ['A better document of theirs beside a worse one', ''],
  ['Single instances marked, with how the writer knows', ''],
  ['The writer\'s own position in relation to them', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *practice* column. ⚠ The class says of each whether the person could begin on it on Monday morning.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you were told about yourself at work (**200 to 240 words**). Say what was said, what you did with it, what the work version would have been, and whether anybody could have acted on the original.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _document, or person?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the writer act on what they were told? ⚠ **Usually none** — **and in most cases the sentence was remembered word for word years later, which is the finding: a personal judgement is the only kind that is both unactionable and unforgettable.**'));
out.push(box('Homework', ['Write your final text. Then take one assessment you would make of somebody and write the work version, with a document, a date, and a better document of theirs beside it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.2 =======================
out.push(pb());
out.push(h2('22.2  The instance under the judgement'));
out.push(p('**Function:** evidencing an assessment   ·   **Grammar:** _three instances: on X, on Y and on Z_   ·   **Pronunciation:** a pattern stated as a count'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a judgement you have made about somebody\'s work this month. ⚠ Then say how many instances you could produce if asked.'));
out.push(p('**b**  Which is a pattern? _she is often late with the schedule · the schedule was late on 4 March, 2 April and 6 May, by two, four and three days_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina ask Nour for?   **A** nothing   **B** the instance behind a judgement in her own review   **C** a better rating'));
out.push(p('**b**  Listen again. **1** What happens when Nour looks for the instances? **2** What rule does Nour take from it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  "How many times?"', [
  ['Lina', 'My review says I am sometimes slow to escalate. May I ask what that is based on?'],
  ['Nour', 'The Tarabishi account in February.'],
  ['Lina', 'And?'],
  ['Nour', '(pause) ⚠ **And nothing else. It is one instance.**'],
  ['Lina', '⚠ **The word in the review is *sometimes*.**'],
  ['Nour', '⚠ **Which means more than once, and I have one.** ⚠ **I have written a pattern and I have an instance.**'],
  ['Lina', 'Then what happens to the sentence?'],
  ['Nour', '⚠ **It becomes the instance, with the date, and the word *sometimes* comes out.** ⚠ *On 11 February the Tarabishi query was escalated on the fourth day; our standard is the second.* **That is what I actually know.**'],
  ['Lina', 'And it is a smaller sentence.'],
  ['Nour', '⚠ **It is a true one, and you can answer it, which you could not answer the other.** **What was the fourth day about?**'],
  ['Lina', '⚠ **I was waiting for the delivery note, because escalating without it means Nadia has to telephone me for it and we lose a day anyway.** ⚠ **Which may be wrong, but it is a reason, and nobody asked me for it.**'],
  ['Nour', '⚠ **And now it is in the review as your answer, which is worth more than my assessment was.** ⚠ **The rule I am taking from this: count before you choose the word.** **One is an instance, two is a coincidence, three is a pattern** — **and *sometimes* is the word people use when they have one and feel they have more.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Count before you choose the word**',
  table(['', 'You have', 'You may write'], [
    ['**one**', '⚠ **one instance**', '⚠ *on 11 February the query was escalated on the fourth day; our standard is the second* — **and no adverb of frequency at all**'],
    ['**two**', '**two instances**', '⚠ *on two occasions, 11 February and 3 April* — **and say that it is two**'],
    ['⚠ **three or more**', '⚠ **a pattern**', '⚠ *on 4 March, 2 April and 6 May, by two, four and three days* — **the dates and the sizes**'],
    ['⚠ **the forbidden word**', '⚠ *sometimes* · *tends to* · *often*', '⚠ **these are the words people use when they have one instance and feel they have more**'],
  ], [1.6, 2.4, 5]),
  '⚠ **One is an instance, two is a coincidence, three is a pattern.** ⚠ **And *sometimes* is what somebody writes when they have one and feel they have more** — **which is honest in feeling and false on paper.**',
  '⚠ **A single instance with a date can be answered; a pattern asserted cannot.** ⚠ **Lina could not answer *sometimes slow to escalate* and could answer *the fourth day on 11 February* in one sentence** — **and the answer was better than the assessment.**',
  '⚠ **Give the sizes as well as the dates where you have a pattern.** ⚠ *By two, four and three days.* **Three dates show it happened; three sizes show whether it is getting worse, which is a different and more useful finding.**',
  '⚠ **Expect the instance to produce a reason you did not know.** ⚠ *I was waiting for the delivery note, because escalating without it loses a day anyway.* **That reason may be wrong, and it is a reason, and nobody had asked** — **and the review is better for containing it than it was for containing your assessment.**',
  '⚠ **So count first, then choose the word.** ⚠ **The counting takes four minutes and it changes about a third of the sentences in any review** — **which is the cheapest improvement available to anybody writing one.**',
  '**Practise:** Take three judgements of yours. Count the instances you could produce. Rewrite each to match the count.',
  '**Useful phrases:**  how many times?  ·  I have written a pattern and I have an instance  ·  count before you choose the word  ·  one, a coincidence, a pattern  ·  nobody asked me for the reason',
  '**Pronunciation – a pattern as a count.** 🔊 **Track 22.4** Listen twice. ⚠ **The first says *on 4 March, 2 April and 6 May* as three equal items.** ⚠ **The second slows on the third.** **Equal, it is a count; slowed, the third date becomes the real complaint and the other two are decoration.** Say it four times, equally.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a judgement; B counts.'));
out.push(dlg(null, [
  ['A', 'I would say that they are __________.'],
  ['B', '⚠ **How many times?**'],
  ['A', '__________.'],
  ['B', '⚠ **Give me the dates.**'],
  ['A', '__________.'],
  ['B', '⚠ **And the sizes, if it is a pattern.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now rewrite the sentence to match the count, with no *sometimes* in it.**'],
  ['A', '__________.'],
  ['B', '⚠ **And have you asked them why, on any of those dates?**'],
]));
out.push(table(['Role card 1 — I know it is a pattern', 'Role card 2 — the dates are not the point'], [[
  '⚠ **A is certain the behaviour is habitual but can produce one date.** ⚠ **B accepts that the impression may be right and asks what may be written.** ⚠ **B\'s point: the impression is evidence about the writer and the instance is evidence about the work** — **and *sometimes* with one instance is a sentence that collapses the first time it is questioned, taking the rest of the review with it.**',
  '⚠ **A says the specific dates reduce a real problem to an administrative detail.** ⚠ **B asks what the person can answer.** ⚠ **B\'s point: the dates are precisely what produces the answer** — **Lina had a reason for the fourth day and nobody had asked her, and the reason was worth more than the assessment that prompted it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one judgement rewritten to match its count. ⚠ Then say which of the three forbidden words you would have used, and what you actually had.'));
out.push(PHRASE_CARD(['how many times?', 'the dates', 'and the sizes', 'match the count', 'have you asked why?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** judgements you would make.'));
out.push(table(['The judgement', 'How many instances?', 'The dates, and the sizes', 'Rewritten to match'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 1.6, 2.4, 2.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would have said _______. I have _______ instance(s): _______. So the sentence becomes _______. And I have _______ asked them why._'));
out.push(p('**Listener task:** count how many judgements shrank when the instances were counted. ⚠ Then ask how many of the writers had ever asked the person for the reason, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four assessments on the board — find the one that says *sometimes* with one instance, and the one whose three dates have no sizes. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ANNUAL REVIEW: L. BARAKAT, YEAR TO 30 JUNE. PAGE 2: THE EVIDENCE, AND WHAT I COUNTED. N. Mansour, 19 July. Second draft; the first contained three patterns and I could evidence one.**',
  table(['The assessment', 'Instances', 'The dates and sizes'], [
    ['⚠ **escalation timing**', '⚠ **ONE**', '⚠ **11 February: the Tarabishi query escalated on the fourth day against a standard of two.** ⚠ **My first draft said *sometimes slow to escalate* and I had this one instance.** **Her answer is at the foot of this page and it is better than my assessment was.**'],
    ['**the monthly schedule**', '**THREE** — **a pattern**', '**late on 4 March by two days, 2 April by four, 6 May by three.** ⚠ **The sizes do not grow, which matters: this is a steady two-to-four days and not a deterioration.**'],
    ['**supplier correspondence**', '⚠ **NONE** — **and the assessment is withdrawn**', '⚠ **My first draft said her supplier letters *can be abrupt*. I went to look for instances and found twenty-two letters, none of them abrupt, and one from a supplier thanking her for the clearest schedule he had received from us.** ⚠ **I was remembering one telephone call in 2026 that I was not party to.**'],
  ], [1.8, 1.8, 5.4]),
  '⚠ **L. Barakat\'s answer on the escalation, taken down on 19 July and included at her request.** *"I waited for the delivery note because escalating without it means accounts telephone me for it and we lose the day anyway. That may be the wrong call. Nobody has told me the standard is two days, and I have been doing it this way for two years."*',
  '⚠ **What that answer changes.** **Two things, and the second is not about her.** ⚠ **First, the fourth day was a judgement and not a delay, and it may be a wrong judgement.** ⚠ **Second, nobody has ever told her the standard is two days, and I have checked: it is in no document in this office.** **So the assessment I wrote is partly an assessment of a standard we have never issued.**',
  '⚠ **And the row I would most like a successor to notice is the third one.** **I withdrew an assessment because I went looking for instances and there were none.** ⚠ **Twenty minutes of looking.** **If I had not looked, that sentence would have been in her file for the rest of her career, and the thing underneath it was a telephone call in 2026 that somebody described to me.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happened to the third assessment, and what was underneath it?'));
out.push(item('2', 'What two things does Lina\'s answer change, and which is not about her?'));
out.push(item('3', 'Why do the sizes in the second row matter?'));
out.push(box('Writer\'s box', [
  '**The evidence page — five parts:** ⚠ **an instance count in capitals against every assessment** → ⚠ **dates AND sizes for anything called a pattern** → ⚠ **any assessment withdrawn, with what was underneath it** → ⚠ **the person\'s own answer, quoted** → ⚠ **and anything the answer reveals about the firm rather than the person.**',
  '⚠ **Put the count in capitals in its own column.** ⚠ **ONE · THREE · NONE.** **It is the column that disciplines the writer, and a page with it cannot contain *sometimes* without the contradiction being visible.**',
  '⚠ **Give sizes as well as dates, and read them.** ⚠ *Two, four and three days. The sizes do not grow, which matters: this is a steady two-to-four and not a deterioration.* **Three dates show that it happens; three sizes say whether it is getting worse, and the second is the finding.**',
  '⚠ **Record a withdrawn assessment and what was underneath it.** ⚠ *I was remembering one telephone call in 2026 that I was not party to.* **It is the single most valuable row on the page** — **and it is only there because somebody spent twenty minutes looking for instances that did not exist.**',
  '⚠ **Quote the person\'s own answer, at their request, in full.** ⚠ *Nobody has told me the standard is two days.* **An answer in the subject\'s words is not a concession; it is evidence, and in this case it is better evidence than the assessment it answers.**',
  '⚠ **And separate what the answer says about the firm.** ⚠ *The standard is in no document in this office, so my assessment is partly an assessment of a standard we have never issued.* **That sentence belongs in the review, not in a private note** — **because the person being reviewed is the one being charged for it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an evidence page for a review (**80 words or more**). Use the frame.'));
out.push(p('**ANNUAL REVIEW: ______________. PAGE 2: THE EVIDENCE, AND WHAT I COUNTED. ______________, ______________.**   **The assessment** | ⚠ **Instances** | **The dates and sizes**   **______________** | ⚠ **ONE** | ⚠ **______________. My first draft said ______________ and I had this one instance.**   **______________** | ⚠ **______________ — a pattern** | **______________.** ⚠ **The sizes ______________, which matters.**   **______________** | ⚠ **NONE — and the assessment is withdrawn** | ⚠ **I went to look for instances and found ______________. What was underneath it was ______________.**   ⚠ **Their answer, taken down on ______________ and included at their request. "______________."**   ⚠ **What that answer changes. First, ______________. Second, and this is not about them, ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An instance count in capitals on every assessment', ''],
  ['Sizes as well as dates on anything called a pattern', ''],
  ['Any withdrawn assessment, with what was underneath it', ''],
  ['The person\'s own answer, quoted', ''],
  ['What the answer reveals about the firm', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their instance counts. ⚠ The class says of each whether the wording of the assessment matches the count, and *sometimes* against ONE fails.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a judgement of yours you would have to withdraw (**200 to 240 words**). Say what you believed, how many instances you could actually produce, what was underneath the impression, and how long it would have stayed in somebody\'s file.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how many instances, honestly?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the impression rest on a single event the writer was not present at? ⚠ **Usually one of three** — **and in that one the event was described by somebody else, which is the fault that no review process anywhere catches.**'));
out.push(box('Homework', ['Write your final text. Then take three judgements of yours about somebody\'s work, count the instances for each, and rewrite all three to match the count (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.3 =======================
out.push(pb());
out.push(h2('22.3  The strength nobody has named'));
out.push(p('**Function:** naming something the person does not know they do   ·   **Grammar:** _you may not know that X; it is worth Y_   ·   **Pronunciation:** praise given as information'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you are good at at work that nobody has ever mentioned. ⚠ Then say whether you would believe it if somebody did.'));
out.push(p('**b**  Which is usable? _Hala is excellent and a real asset to the counter · Hala has kept a weekly walk-in tally since 2024 that nobody asked for; it is the only count of walk-in trade this firm has ever had, and the Homs decision in February was taken on it_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about the strengths half of most reviews?   **A** nothing   **B** it is the half nobody writes properly, because praise feels safe and therefore gets written vaguely   **C** it should be shorter'));
out.push(p('**b**  Listen again. **1** What are the three parts of a named strength? **2** Why does she say vague praise is worse than none?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  "Nobody has ever told her it was valuable"', [
  ['Nour', 'Hala\'s review. The strengths section says she is excellent and a real asset to the counter.'],
  ['Nadia', '⚠ **Which she has been told four times in four years, by four people, and it has never meant anything to her.**'],
  ['Nour', 'It is true, though.'],
  ['Nadia', '⚠ **It is true and it is not information.** ⚠ **The strengths half is the half nobody writes properly** — **because praise feels safe, so it gets written vaguely, and a vague compliment is the one thing in a review that costs nothing and buys nothing.**'],
  ['Nour', 'So what are the parts?'],
  ['Nadia', '⚠ **Three.** ⚠ **The thing itself, specifically.** ⚠ **What it is worth, with a figure or a consequence.** ⚠ **And whether anybody has ever told her** — **because if nobody has, that is the sentence she will remember.**'],
  ['Nour', 'Give me it for Hala.'],
  ['Nadia', '⚠ **She has kept a weekly walk-in tally since 2024 that nobody asked her to keep. It is the only count of walk-in trade this firm has ever had, and the February Homs decision was taken on it.** ⚠ **And nobody has ever told her that, including me.**'],
  ['Nour', 'That is three sentences.'],
  ['Nadia', '⚠ **It is three sentences and it is worth more to her than four years of *excellent*.** ⚠ **And notice what it does that praise does not: it tells her which of the things she does is the valuable one** — **and she does not know, because nobody has ever distinguished between them.**'],
  ['Nour', 'Is there a risk in it?'],
  ['Nadia', '⚠ **One, and it is real.** ⚠ **Once she knows the tally is worth something, she may ask to be paid for it, or ask who will keep it when she is not here** — **and both of those questions are ones this firm ought to be asked and has not been.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A named strength — three parts**',
  table(['', 'The part', 'Here'], [
    ['**1 the thing itself**', '⚠ **specifically, with a date if it has one**', '⚠ *you have kept a weekly walk-in tally since 2024 that nobody asked you to keep*'],
    ['⚠ **2 what it is worth**', '⚠ **a figure or a consequence**', '⚠ *it is the only count of walk-in trade this firm has ever had, and the February Homs decision was taken on it*'],
    ['⚠ **3 whether anybody has said so**', '⚠ **and this is the sentence they remember**', '⚠ *nobody has ever told you that, including me*'],
  ], [2.3, 2.9, 3.8]),
  '⚠ **The strengths half is the half nobody writes properly, and the reason is that praise feels safe.** ⚠ **So it gets written vaguely** — **and a vague compliment is the one thing in a review that costs nothing and buys nothing.**',
  '⚠ **A named strength tells the person which of the things they do is the valuable one.** ⚠ **They usually do not know**, **because nobody has ever distinguished between them** — **and most people are proudest of something else.**',
  '⚠ **Say whether anybody has told them, including yourself.** ⚠ *Nobody has ever told you that, including me.* **It is the sentence they will repeat at home, and it costs the writer an admission** — **which is why it is believed.**',
  '⚠ **And there is a real risk, which is worth naming rather than avoiding.** ⚠ **Once somebody knows a thing they do is valuable, they may ask to be paid for it, or ask who will do it when they are gone** — **and both are questions the firm ought to be asked and has not been.**',
  '⚠ **Four years of *excellent* is four years of nothing.** ⚠ **Three sentences with a date, a consequence and an admission in them is the most valuable paragraph in any review** — **and it takes about ten minutes to find, because you have to go and look at what they actually do.**',
  '**Practise:** Take somebody you work with. Write the three parts for one thing they do. Then say whether anybody has ever told them.',
  '**Useful phrases:**  true, and not information  ·  praise feels safe, so it gets written vaguely  ·  what it is worth  ·  nobody has told you, including me  ·  which of the things you do is the valuable one',
  '**Pronunciation – praise as information.** 🔊 **Track 22.6** Listen twice. ⚠ **The first says *the February Homs decision was taken on it* flatly, as a fact.** ⚠ **The second warms and slows.** **Flat, it is information she can use; warmed, it is a compliment, and she will discount it the way she discounted the other four.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers praise; B builds the three parts.'));
out.push(dlg(null, [
  ['A', 'They are very good at __________.'],
  ['B', '⚠ **What specifically do they do? With a date if it has one.**'],
  ['A', '__________.'],
  ['B', '⚠ **What is it worth? Give me a figure or a consequence.**'],
  ['A', '__________.'],
  ['B', '⚠ **Has anybody ever told them?**'],
  ['A', '__________.'],
  ['B', '⚠ **Including you?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say so, and that is the sentence they will remember.**'],
]));
out.push(table(['Role card 1 — praise is the easy half', 'Role card 2 — if I say it, she will ask to be paid'], [[
  '⚠ **A treats the strengths section as the part that writes itself.** ⚠ **B asks how many times the person has been told they are excellent and what it changed.** ⚠ **B\'s point: four years of *excellent* is four years of nothing, and the person still does not know which of the things they do is the valuable one** — **which is the only piece of information the section could have carried.**',
  '⚠ **A hesitates to name the tally because of what it may lead to.** ⚠ **B agrees it may, and asks whether the questions are legitimate.** ⚠ **B\'s point: they are** — **who keeps it when she is gone is 20.3\'s question and the firm has never been asked it** — **so withholding the information to avoid the question is choosing not to be asked something you should be asked.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one named strength in all three parts. ⚠ Then say what question the person might ask once they know, and whether the firm should be asked it.'));
out.push(PHRASE_CARD(['what specifically?', 'what is it worth?', 'has anybody said so?', 'including you?', 'what will they ask now?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** people you work with.'));
out.push(table(['The person', 'The thing, specifically', 'What it is worth', 'Has anybody told them?'], [['', '', '', ''], ['', '', '', '']], [1.6, 2.6, 2.6, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They have _______ since _______. It is worth _______, and _______ was decided on it. And _______ has ever told them, including me._'));
out.push(p('**Listener task:** count how many of the named strengths nobody had ever mentioned. ⚠ Then ask how many are in anybody\'s job description, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four strengths sections on the board — find the one that praises without naming anything, and the one with a thing and no value attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ANNUAL REVIEW: H. MOURAD, YEAR TO 30 JUNE. PAGE 1: WHAT YOU DO THAT THIS FIRM DEPENDS ON. N. Mansour, 20 July.**',
  '⚠ **1  The walk-in tally.** **You have kept a weekly count of customers who come in without an order since 2024. Nobody asked you to. It is in a notebook and it is the only count of walk-in trade this company has ever had.**',
  '⚠ **What it is worth.** **The February decision to reopen Homs was taken on your figures, scaled: the count of a hundred and ninety-six a week against thresholds of two hundred and twenty and a hundred and fifty.** **The capital committed on that decision is 1.1 million.** ⚠ **Your notebook is the evidence base for the largest decision this firm has taken in six years.**',
  '⚠ **Whether anybody has told you.** **No. Nobody has, in three years, including me, and including the two reviews before this one, both of which said you were an asset to the counter.** ⚠ **I have read them.**',
  '⚠ **2  Baghdad Street, which opened on 8 June, started counting because they saw you doing it.** **That is a practice spreading without anybody managing it, which is the only way a practice ever spreads in a firm this size, and you are the author of it.**',
  '⚠ **3  And one thing I am recording because it is a risk rather than a compliment.** **If you left, the tally would stop, and in two years nobody would know it had ever been done.** ⚠ **That is in my handover note as a dependency on one person, and it is not your problem to solve** — **it is mine, and I am telling you so that you know the firm knows.**',
  '⚠ **A note on why this page is first and the rest of the review is behind it.** **The usual form puts objectives first and strengths third.** ⚠ **I have put this first because it is the only part of the document that contains something you did not already know** — **and a review whose most informative paragraph is on page three is a review that is read in the wrong order.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the tally worth, in the writer\'s account of it?'));
out.push(item('2', 'What does the writer say about the two previous reviews, and what has she done?'));
out.push(item('3', 'Why is this page first, and what does the writer say about the usual form?'));
out.push(box('Writer\'s box', [
  '**The named-strengths page — five parts:** ⚠ **the thing, with the year it started and the fact that nobody asked** → ⚠ **what it is worth, with the figure it supported** → ⚠ **whether anybody has said so, including you and including previous reviews** → ⚠ **anything the strength has caused elsewhere** → ⚠ **and any risk it creates, named as the firm\'s problem and not theirs.**',
  '⚠ **Say that nobody asked them to.** ⚠ *You have kept it since 2024. Nobody asked you to.* **It is the clause that distinguishes a strength from a duty** — **and a duty well performed belongs in the objectives section, not here.**',
  '⚠ **Attach the biggest figure the thing has supported.** ⚠ *The capital committed on that decision is 1.1 million.* **Not what the activity costs** — **what it enabled.** **A notebook that is the evidence base for a 1.1-million decision is a different object from a notebook.**',
  '⚠ **Read the previous reviews and say what they said.** ⚠ *Both of which said you were an asset to the counter. I have read them.* **It takes ten minutes, it proves the page is not routine, and it tells the person exactly how long the firm has been failing to notice.**',
  '⚠ **Name what the strength has caused elsewhere.** ⚠ *Baghdad Street started counting because they saw you doing it.* **A practice spreading without management is the only way a practice spreads in a small firm**, **and the person is rarely aware they authored it.**',
  '⚠ **And where the strength creates a dependency, say so and own it.** ⚠ *It is not your problem to solve — it is mine, and I am telling you so that you know the firm knows.* **That sentence is what stops a named strength becoming a quiet obligation**, **which is the one way this page can do harm.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a named-strengths page for somebody you work with (**80 words or more**). Use the frame.'));
out.push(p('**ANNUAL REVIEW: ______________. PAGE 1: WHAT YOU DO THAT THIS FIRM DEPENDS ON. ______________, ______________.**   ⚠ **1  ______________. You have ______________ since ______________. Nobody asked you to.**   ⚠ **What it is worth. ______________. The figure attached to it is ______________.**   ⚠ **Whether anybody has told you. ______________, including me, and including ______________, which said ______________. I have read them.**   ⚠ **2  ______________ because they saw you doing it.**   ⚠ **3  One thing I am recording because it is a risk rather than a compliment. If you left, ______________. That is not your problem to solve — it is ______________, and I am telling you so that you know the firm knows.**   ⚠ **A note on why this page is first. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Nobody asked you to*, or the thing is a duty and belongs elsewhere', ''],
  ['The biggest figure the thing enabled', ''],
  ['Whether anybody has said so, including previous reviews', ''],
  ['What the strength caused elsewhere', ''],
  ['Any dependency named, and owned by the firm', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what it is worth* paragraph. ⚠ The class says of each whether it gives a figure the thing enabled rather than a description of the thing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you do at work that nobody has mentioned (**200 to 240 words**). Say what it is, when you started, whether anybody asked you to, what it has been worth, and what would happen to it if you left.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a figure here, or a description?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the thing in a job description? ⚠ **Usually none** — **and in at least one the firm has been taking a decision on it for years without knowing where the figures came from, which is 22.3 and 20.3 being the same page seen from two sides.**'));
out.push(box('Homework', ['Write your final text. Then write a named strength for one colleague, in all three parts, and give it to them (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.4 =======================
out.push(pb());
out.push(h2('22.4  Once, precisely, with a remedy'));
out.push(p('**Function:** making a criticism that can be acted on   ·   **Grammar:** _X happened; from Monday, do Y instead_   ·   **Pronunciation:** a criticism said once'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a criticism you have made more than twice to the same person. ⚠ Then say whether it worked the first time, and what the later times achieved.'));
out.push(p('**b**  Which can be acted on? _he needs to improve his written communication · from Monday, the recommendation goes on the first page of every paper; three of your four this year had it on the last_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about repeating a criticism?   **A** nothing   **B** the second time is a reminder and the third converts a correction into a grievance   **C** it is necessary'));
out.push(p('**b**  Listen again. **1** What are the three parts of an actionable criticism? **2** What does he say about a remedy that begins on Monday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  "The third time, it stops being about the work"', [
  ['Nour', 'I have raised the recommendation-on-the-last-page thing with Bassel twice.'],
  ['Mr Sayegh', '⚠ **Then do not raise it a third time in the review.**'],
  ['Nour', 'But it has not changed.'],
  ['Mr Sayegh', '⚠ **Which means the first two did not work, and the third will not either.** ⚠ **The first time is a correction. The second is a reminder. The third converts a correction into a grievance** — **and after that he is managing you rather than the paper.**'],
  ['Nour', 'So I write nothing?'],
  ['Mr Sayegh', '⚠ **You write it once, properly, which you have not yet done.** ⚠ **Three parts. What happened, with the count. What to do instead, as an instruction. And when it starts.**'],
  ['Nour', 'What was wrong with how I raised it?'],
  ['Mr Sayegh', '⚠ **You said *try to put the recommendation earlier*, twice, in a corridor.** ⚠ **There was no count, no instruction and no date** — **so it was a preference, and a preference can be agreed with and not done, which is exactly what happened.**'],
  ['Nour', 'And properly?'],
  ['Mr Sayegh', '⚠ *Three of your four papers this year put the recommendation on the last page; the fourth put it on the first and was the one that was acted on. From Monday, the recommendation goes on page one of every paper, in the same words as at the foot.* ⚠ **A count, an instruction, a date.**'],
  ['Nour', 'The last clause is from Unit 21.'],
  ['Mr Sayegh', '⚠ **It is, and that is the other half of a remedy: it has to be a thing he already knows how to do.** ⚠ **A remedy that requires a new skill starts in three months. A remedy that applies something he did in May starts on Monday** — **and the only remedies anybody ever carries out are the ones that start on Monday.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A criticism that can be acted on — three parts, said once**',
  table(['', 'The part', 'Here'], [
    ['**1 what happened**', '⚠ **with the count, from 22.2**', '⚠ *three of your four papers put the recommendation on the last page; the fourth put it on the first and was acted on*'],
    ['⚠ **2 what to do instead**', '⚠ **an instruction, not a preference**', '⚠ *the recommendation goes on page one of every paper, in the same words as at the foot*'],
    ['⚠ **3 when it starts**', '⚠ **a date, and it should be Monday**', '⚠ *from Monday* — **not *in future*, which is no date at all**'],
  ], [2.1, 3.1, 3.8]),
  '⚠ **Once.** ⚠ **The first time is a correction; the second is a reminder; the third converts a correction into a grievance** — **and after the third the person is managing you rather than the work.**',
  '⚠ **A preference can be agreed with and not done, and that is what happens to it.** ⚠ *Try to put the recommendation earlier* **was said twice in a corridor with no count, no instruction and no date** — **and was agreed with twice.**',
  '⚠ **The remedy must be a thing they already know how to do.** ⚠ **A remedy requiring a new skill starts in three months; one that applies something they did in May starts on Monday** — **and the only remedies anybody carries out are the ones that start on Monday.**',
  '⚠ **Use their own better work as the remedy wherever you can.** ⚠ *The fourth put it on the first and was the one that was acted on.* **It makes the instruction unarguable and it removes the suggestion that they cannot do it** — **because they demonstrably can.**',
  '⚠ **And if you have said it twice already, say so.** ⚠ *I have raised this twice, in conversation, without a count or a date, and that is why it is here properly rather than for a third time.* **It takes the grievance out before it forms**, **because it concedes that the first two attempts were the writer\'s fault.**',
  '**Practise:** Take a criticism you have repeated. Write it once, in three parts, with the remedy drawn from their own better work.',
  '**Useful phrases:**  once, properly  ·  a correction, a reminder, a grievance  ·  a preference can be agreed with and not done  ·  from Monday  ·  you did it in May',
  '**Pronunciation – a criticism said once.** 🔊 **Track 22.8** Listen twice. ⚠ **The first says *from Monday, the recommendation goes on page one* as an instruction, level and brief.** ⚠ **The second adds warmth and a rising tail.** **Level, it is an instruction; warmed and risen, it is a request, and a request is a preference again.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a repeated criticism; B rebuilds it.'));
out.push(dlg(null, [
  ['A', 'I keep telling them to __________.'],
  ['B', '⚠ **How many times?**'],
  ['A', '__________.'],
  ['B', '⚠ **Did it have a count, an instruction and a date in it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it was a preference. Give me the count.**'],
  ['A', '__________.'],
  ['B', '⚠ **And the instruction, starting Monday. Can they already do it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Where have they done it before? Use that.**'],
]));
out.push(table(['Role card 1 — I have to raise it again', 'Role card 2 — the remedy needs training'], [[
  '⚠ **A insists on a third mention because nothing has changed.** ⚠ **B agrees nothing has changed and asks what the first two consisted of.** ⚠ **B\'s point: two preferences were agreed with and not done, so the third will be too** — **and the third is the one that turns the subject from the work to the relationship, after which the criticism is unusable for ever.**',
  '⚠ **A proposes a remedy that requires a course.** ⚠ **B asks when it would start and when the person would next write a paper.** ⚠ **B\'s point: a remedy needing a new skill starts in three months and is therefore not a remedy** — **and in this case the person did the right thing in May, so the remedy is *do what you did in May*, which starts on Monday.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one criticism in three parts. ⚠ Then point at the place in the person\'s own work where they have already done the right thing.'));
out.push(PHRASE_CARD(['how many times?', 'count, instruction, date?', 'then it was a preference', 'from Monday', 'where have they done it before?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** criticisms you have repeated.'));
out.push(table(['The criticism, as said', 'Times said', 'The count', 'The instruction, from Monday, drawn from their own work'], [['', '', '', ''], ['', '', '', '']], [2.2, 1.2, 2.2, 3.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have said _______ times that they should _______. There was no _______ in it. The count is _______. So the instruction is: from Monday, _______ — which they did in _______._'));
out.push(p('**Listener task:** count how many of the repeated criticisms had a date in them. ⚠ Then ask how many of the remedies could begin on Monday, and send back any that need a course.'));
out.push(p('**Board clinic:** your teacher writes four criticisms on the board — find the one that is a preference, and the one whose remedy requires a skill the person does not have. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ANNUAL REVIEW: B. NASSIF. PAGE 3: TWO THINGS TO DO DIFFERENTLY, EACH SAID ONCE. N. Mansour, 18 July.**',
  '⚠ **A note before the two.** **There are two and not six.** ⚠ **I could write six and he would carry out none of them, and the two I have chosen are the two where the remedy is something he has already done in his own work this year.**',
  '⚠ **1  The recommendation on the first page.** **Three of your four papers this year put the recommendation on the last page. The fourth put it on the first, and it is the one that was acted on.** ⚠ **From Monday: the recommendation goes on page one of every paper, in the same words as at the foot.** ⚠ **You did this in May, so this is not a new practice but the May practice applied to the other three kinds of paper.**',
  '⚠ **And something I am recording against myself.** **I raised this twice in conversation, in March and in June, with no count, no instruction and no date.** ⚠ **Those were preferences and you agreed with both of them, which was the correct response to a preference.** **This is the first time it has been put properly, and the two earlier times were my fault and not yours.**',
  '⚠ **2  A single figure with no range.** **The December paper gave one threshold, a hundred and fifty, with no range and no source. The May paper gave three quotations, named the one in use, and said what changed at each end.** ⚠ **From Monday: no figure that carries a decision goes into a paper of yours without a range and a source.** **Again, this is the May practice and not a new one.**',
  '⚠ **What is NOT on this page, and why.** **Four other things.** ⚠ **Two of them are matters of manner, which I am not going to put in a document because I have one instance of each and 22.2 says what that means.** **One is a remedy that would need a fortnight\'s training, which starts in three months and is therefore not a remedy.** ⚠ **And one I have decided is my preference rather than a standard** — **I like a summary table and you do not use one, and I have been unable to say what it costs anybody that you do not.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are there two and not six?'));
out.push(item('2', 'What does the writer record against herself, and what does she say about his response?'));
out.push(item('3', 'What four things are not on the page, and why is each excluded?'));
out.push(box('Writer\'s box', [
  '**The things-to-do-differently page — five parts:** ⚠ **a note saying how many and why that many** → ⚠ **count, instruction, date for each** → ⚠ **the remedy drawn from their own better work** → ⚠ **anything you raised badly before, recorded against yourself** → ⚠ **and what is NOT on the page, with a reason for each omission.**',
  '⚠ **Two, not six, and say why.** ⚠ *I could write six and he would carry out none of them.* **A page with six instructions is a page with none** — **and choosing two is a judgement the reader can see you making, which makes both of them weightier.**',
  '⚠ **Draw the remedy from their own work and say so.** ⚠ *You did this in May, so this is not a new practice but the May practice applied to the other three kinds of paper.* **It removes the suggestion that they cannot, because they demonstrably can, and it makes Monday a real start date.**',
  '⚠ **Record your own earlier failures to raise it.** ⚠ *Those were preferences and you agreed with both of them, which was the correct response to a preference.* **It takes the grievance out before it forms, and it costs the writer something** — **which is why the instruction that follows is accepted.**',
  '⚠ **And list the omissions with a reason each.** ⚠ **One instance only; a remedy that needs training; and a preference the writer cannot cost.** **The last is the hardest and the most valuable:** *I like a summary table and you do not use one, and I have been unable to say what it costs anybody that you do not.*',
  '⚠ **That last admission is what makes the other two instructions credible.** ⚠ **A page that distinguishes the writer\'s standards from the writer\'s tastes is a page whose standards will be obeyed** — **and almost nobody writing a review has ever tried to sort their own list that way.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a things-to-do-differently page (**80 words or more**). Use the frame.'));
out.push(p('**ANNUAL REVIEW: ______________. PAGE ______________: ______________ THINGS TO DO DIFFERENTLY, EACH SAID ONCE. ______________, ______________.**   ⚠ **A note before them. There are ______________ and not ______________. I could write ______________ and they would carry out none.**   ⚠ **1  ______________. ______________ of your ______________ this year ______________.** ⚠ **From Monday: ______________.** ⚠ **You did this in ______________, so this is not a new practice.**   ⚠ **And something I am recording against myself. I raised this ______________ times with no count, no instruction and no date. Those were preferences and you agreed with them, which was the correct response.**   ⚠ **What is NOT on this page. ______________, because I have one instance. ______________, because the remedy needs training. And ______________, because I have decided it is my preference rather than a standard** — **I have been unable to say what it costs anybody.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two or three items, with a reason for the number', ''],
  ['A count, an instruction and a date on each', ''],
  ['The remedy drawn from the person\'s own better work', ''],
  ['Any earlier badly raised version, recorded against the writer', ''],
  ['Omissions listed, including one the writer cannot cost', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their omissions. ⚠ The class listens for one the writer has identified as their own preference rather than a standard, and a page without one has probably not been sorted.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a criticism you have made more than twice (**200 to 240 words**). Say what you said, what it lacked, what the person did with it, and how you would say it once.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could this start on Monday?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the repeated criticism lack a date? ⚠ **Usually all three** — **and ask what the third repetition achieved, because the honest answer is that it made the subject the relationship rather than the work.**'));
out.push(box('Homework', ['Write your final text. Then take one repeated criticism of yours and write it once, in three parts, with the remedy drawn from the person\'s own better work (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.5 =======================
out.push(pb());
out.push(h2('22.5  Answering an assessment you think is wrong'));
out.push(p('**Function:** replying to a review in writing   ·   **Grammar:** _I accept X; on Y I ask for the instance_   ·   **Pronunciation:** a disagreement without heat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an assessment of your work you thought was wrong. ⚠ Then say whether you answered it, and where that answer is now.'));
out.push(p('**b**  Which is an answer? _I completely disagree with this review · I accept the point about the two late schedules and the dates are right. On the escalation point I ask for the instances, because I can find one and the sentence says *sometimes*_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia advise Nour to do with her own review?   **A** accept it   **B** answer it in writing, accepting the part that is right first   **C** complain'));
out.push(p('**b**  Listen again. **1** What are the four moves? **2** Why does she say the acceptance has to come first and has to be real?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  "Accept the true part first, and mean it"', [
  ['Nour', 'Mr Sayegh\'s review of me says I was slow to take the arbitration decisions in March.'],
  ['Nadia', 'Were you?'],
  ['Nour', '⚠ **On two of them, yes. On the settlement paper, no** — **I had it on his desk in four days and it sat there for eleven.**'],
  ['Nadia', '⚠ **Then answer it, in writing, and in that order.** ⚠ **Four moves. Accept the part that is right. Give the dates for the part that is not. Ask for the instance behind anything you cannot place. And say what you want to happen to the document.**'],
  ['Nour', 'Why does the acceptance come first?'],
  ['Nadia', '⚠ **Because an answer that begins by disputing is read as a defence, and everything in it afterwards is discounted** — **including the part where you are right, which is the part you actually need.**'],
  ['Nour', 'And it has to be the real thing?'],
  ['Nadia', '⚠ **It has to be the real thing and it has to be the biggest true part, not the smallest.** ⚠ **If you accept a detail and dispute the substance, he will see what you have done in four seconds, and he will be right to.** **You were slow on two of three. Accept two of three.**'],
  ['Nour', 'And the eleven days on his desk?'],
  ['Nadia', '⚠ **Dates, with no adjective.** ⚠ *The settlement paper was with you on 11 March and the decision was taken on the 22nd.* **Do not write *it then sat on your desk*, which is the same fact with a complaint wrapped round it** — **and the complaint is the thing he will answer instead of the fact.**'],
  ['Nour', 'And what do I want to happen to it?'],
  ['Nadia', '⚠ **Say it, because otherwise nothing does.** ⚠ *I ask that this answer is kept with the review.* **Not that the review is changed** — **people almost never change them, and an answer kept alongside is worth more in two years than an amendment agreed under pressure.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Answering an assessment — four moves, in this order**',
  table(['', 'The move', 'The words'], [
    ['⚠ **1 accept**', '⚠ **the biggest true part, not the smallest**', '⚠ *I accept that I was slow on two of the three, and the dates in the review are right*'],
    ['**2 the dates**', '**for the part that is wrong, with no adjective**', '⚠ *the settlement paper was with you on 11 March and the decision was taken on the 22nd*'],
    ['⚠ **3 ask for the instance**', '⚠ **for anything you cannot place**', '⚠ *on the supplier point I cannot identify the occasion, and I ask for it*'],
    ['⚠ **4 what you want**', '⚠ **or nothing happens**', '⚠ *I ask that this answer is kept with the review* — **not that the review is changed**'],
  ], [2.1, 3.1, 3.8]),
  '⚠ **Accept first, and accept the biggest true part.** ⚠ **An answer that begins by disputing is read as a defence and everything after it is discounted** — **including the part where you are right, which is the part you needed.**',
  '⚠ **A small acceptance and a large dispute is visible in four seconds.** ⚠ **If you were slow on two of three, accept two of three** — **and the arithmetic of what you accept is itself a statement about how reliable the rest of your answer is.**',
  '⚠ **Dates with no adjective.** ⚠ *With you on 11 March; decided on the 22nd.* **Not *it then sat on your desk*, which is the same fact with a complaint round it** — **and the complaint is what gets answered instead of the fact.**',
  '⚠ **Ask for the instance rather than denying the judgement.** ⚠ *I cannot identify the occasion, and I ask for it.* **A request for evidence is unanswerable except by evidence**, **and 22.2 says what usually happens when somebody goes to look.**',
  '⚠ **And ask for the answer to be KEPT, not for the review to be changed.** ⚠ **People almost never change a review**, **and an answer kept alongside is worth more in two years than an amendment agreed under pressure** — **because the two documents together are the record, and one document agreed reluctantly is not.**',
  '**Practise:** Take an assessment you disputed. Write the four moves in order, and make the acceptance the biggest true part.',
  '**Useful phrases:**  I accept that  ·  the dates in the review are right  ·  with you on the 11th; decided on the 22nd  ·  I cannot identify the occasion and I ask for it  ·  I ask that this answer is kept with the review',
  '**Pronunciation – disagreement without heat.** 🔊 **Track 22.10** Listen twice. ⚠ **The first says *the settlement paper was with you on 11 March and the decision was taken on the 22nd* at an even pace.** ⚠ **The second stresses *you*.** **Even, it is two dates; stressed, it is an accusation, and the eleven days stop being the subject.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a disputed assessment; B works the four moves.'));
out.push(dlg(null, [
  ['A', 'My review says __________ and it is wrong.'],
  ['B', '⚠ **Which part of it is right?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that the biggest true part, or the smallest?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the dates for the part that is wrong. No adjectives.**'],
  ['A', '__________.'],
  ['B', '⚠ **Is there anything you cannot place at all?**'],
  ['A', '__________.'],
  ['B', '⚠ **Ask for the instance. And what do you want to happen to this answer?**'],
]));
out.push(table(['Role card 1 — I accept none of it', 'Role card 2 — I want the review changed'], [[
  '⚠ **A disputes the whole assessment and will not concede anything.** ⚠ **B asks about the two of three that were in fact slow.** ⚠ **B\'s point: an answer with no acceptance in it is read as a defence and discounted entirely** — **so the parts where A is right, which are the parts A needs, go down with the rest.**',
  '⚠ **A wants the document amended and nothing less.** ⚠ **B asks how often that happens and what an amendment agreed under pressure is worth.** ⚠ **B\'s point: an answer kept alongside is two documents and a record; an amendment extracted is one document and a resentment** — **and in two years the first is worth considerably more to A than the second.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four moves for one disputed assessment. ⚠ Then say whether the acceptance is the biggest true part, and what the arithmetic of it tells a reader.'));
out.push(PHRASE_CARD(['which part is right?', 'biggest or smallest?', 'dates, no adjectives', 'ask for the instance', 'kept with the review']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** assessments you have disputed, at work or at school.'));
out.push(table(['The assessment', 'What you accept', 'The dates for the rest', 'What you ask for'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2.6, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The assessment said _______. I accept _______, which is the larger part. On the rest: _______ on _______ and _______ on _______. I cannot place _______ and I ask for it. And I ask that this answer is _______._'));
out.push(p('**Listener task:** count how many acceptances were the biggest true part rather than a detail. ⚠ Then ask how many of the writers ever answered in writing at the time, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four answers on the board — find the one that accepts a detail and disputes the substance, and the one with an adjective doing the work of a date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the answer, and answer the questions.'));
out.push(box(null, [
  '**ANSWER TO MY ANNUAL REVIEW OF 15 JULY. N. Mansour to N. Sayegh, 22 July. I ask that this is kept with the review.**',
  '⚠ **1  What I accept, and it is the larger part.** **The review says I was slow to take the arbitration decisions in March. On two of the three I was.** **The disclosure decision sat with me for nine days and the witness-statement decision for six, and in both cases the delay was mine and the dates in the review are right.** ⚠ **On the disclosure one I was waiting to feel certain rather than waiting for anything, which is the honest account and is worse than the review says.**',
  '⚠ **2  The third decision, with dates and nothing else.** **The settlement paper was with you on 11 March. The decision was taken on 22 March.** **Those eleven days are not mine and the review attributes them to me.** ⚠ **I am not asking for a view about them; I am asking for the sentence to say two of three rather than three.**',
  '⚠ **3  One assessment I cannot place, and I ask for the instance.** **The review says my briefing of Lina on the Beirut bundle was incomplete.** ⚠ **I cannot identify the occasion.** **I briefed her on 3 and 17 March and both are in my diary with the points covered, and if there was a third occasion I have no record of it.** ⚠ **I ask for the date, and if there is one I will answer it.**',
  '⚠ **4  And one thing the review does not contain, which I am adding rather than disputing.** **There is nothing in it about the fourth option on the Homs paper.** ⚠ **I found it, and it was found by reading Bassel\'s section 5, and the firm committed 45,000 on the strength of it.** **I am not asking for that to be added as praise.** ⚠ **I am asking for it to be in the file, because in two years the question will be who found it, and the only document that answers it at present is Bassel\'s paper, which says it was me.**',
  '⚠ **5  What I ask.** **That this answer is kept with the review.** **That the sentence on March says two of three.** ⚠ **And that nothing else in the review is changed** — **including the paragraph about my December objection to the reopening, which I think is harsher than the facts warrant and which I am not going to argue about, because I was the person who benefited from the decision it led to.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer accept, and what does she add that is worse than the review says?'));
out.push(item('2', 'What does paragraph 3 ask for, and what evidence does the writer offer?'));
out.push(item('3', 'What does paragraph 5 decline to argue about, and on what ground?'));
out.push(box('Writer\'s box', [
  '**An answer to a review — five parts:** ⚠ **what you accept, the larger part, first** → ⚠ **the disputed part as dates only** → ⚠ **a request for the instance behind anything you cannot place** → ⚠ **anything the review omits that belongs in the file** → ⚠ **and what you ask, including what you are NOT asking for.**',
  '⚠ **Accept the larger part and add anything that is worse than the review says.** ⚠ *I was waiting to feel certain rather than waiting for anything, which is worse than the review says.* **That clause is the most expensive in the document and it is what makes paragraph 2 believed.**',
  '⚠ **Put the dispute as dates and then say what you want from it.** ⚠ *With you on 11 March; decided on 22 March. I am not asking for a view about them; I am asking for the sentence to say two of three.* **The second sentence stops the dates being read as a counter-charge.**',
  '⚠ **Ask for the instance and show your own record.** ⚠ *I briefed her on 3 and 17 March and both are in my diary with the points covered. I ask for the date, and if there is one I will answer it.* **The last clause is what makes it a request rather than a denial.**',
  '⚠ **Add an omission for the FILE and not as praise.** ⚠ *I am not asking for it to be added as praise. I am asking for it to be in the file, because in two years the question will be who found it.* **Naming the future question is what distinguishes the request from vanity** — **and this is 18.6 arriving inside a personnel document.**',
  '⚠ **And say what you are not asking to be changed, with the reason.** ⚠ *The paragraph about my December objection, which I think is harsher than the facts warrant and which I am not going to argue about, because I was the person who benefited from the decision it led to.* **A writer who declines to contest the one paragraph where they would look self-serving has made every other request in the document easy to grant.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an answer to an assessment (**80 words or more**). Use the frame.'));
out.push(p('**ANSWER TO MY ______________ OF ______________. ______________ to ______________, ______________. I ask that this is kept with the ______________.**   ⚠ **1  What I accept, and it is the larger part. ______________.** ⚠ **______________, which is the honest account and is worse than the review says.**   ⚠ **2  ______________, with dates and nothing else. ______________ on ______________. ______________ on ______________.** ⚠ **I am not asking for a view about them; I am asking for ______________.**   ⚠ **3  One assessment I cannot place. ______________. I cannot identify the occasion. ______________. I ask for the date, and if there is one I will answer it.**   ⚠ **4  One thing the review does not contain. ______________. I am not asking for it as praise; I am asking for it to be in the file, because ______________.**   ⚠ **5  What I ask. ______________. And that nothing else is changed, including ______________, which I am not going to argue about because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The acceptance first, and the larger part', ''],
  ['Something added that is worse than the review says', ''],
  ['The dispute as dates, with no adjective', ''],
  ['A request for an instance, with the writer\'s own record', ''],
  ['Something the writer declines to contest, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their acceptance paragraph. ⚠ The class says of each whether it is the larger or the smaller true part, and whether anything in it is worse than the assessment said.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an assessment of you that was wrong (**200 to 240 words**). Say what it said, what was right in it, what the dates were, whether you answered it, and where that answer is now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the acceptance the larger part?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was there a written answer at the time? ⚠ **Usually none** — **and in those cases the assessment is now the only document, which is the whole argument for writing one even where nothing is likely to change.**'));
out.push(box('Homework', ['Write your final text. Then take one assessment you disputed and write the four moves in order, with the acceptance as the larger part (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.6 =======================
out.push(pb());
out.push(h2('22.6  Reviewing somebody better than you'));
out.push(p('**Function:** assessing work you could not do   ·   **Grammar:** _I am not in a position to assess X; what I can assess is Y_   ·   **Pronunciation:** a limit stated without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say part of somebody\'s job you could not do yourself. ⚠ Then say whether you have ever assessed them on it.'));
out.push(p('**b**  Which is honest? _her reconciliation work is to a high standard · I am not in a position to assess the quality of her reconciliations and I have said so; what I can assess is that the June one found a 410,000 error that two previous years did not_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour decide to write about Lina\'s reconciliation work?   **A** that it is excellent   **B** that she is not in a position to assess it, and what she can assess instead   **C** nothing'));
out.push(p('**b**  Listen again. **1** What three things does Nadia say you can still assess? **2** Why does she say pretending to assess it is worse than admitting you cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  "You cannot grade what you cannot do"', [
  ['Nour', 'Lina\'s reconciliations. I have written that they are to a high standard.'],
  ['Nadia', '⚠ **How do you know?**'],
  ['Nour', '…Because nothing has gone wrong.'],
  ['Nadia', '⚠ **Which is not the same thing, and you could not check one if you wanted to.** ⚠ **I could. You could not, and she knows that.**'],
  ['Nour', 'Then what do I write? I cannot leave half her job out of her review.'],
  ['Nadia', '⚠ **You write that you are not in a position to assess the technical quality, and then you assess the three things you ARE in a position to assess.**'],
  ['Nour', 'Which are?'],
  ['Nadia', '⚠ **Outcomes. The June reconciliation found a 410,000 error that the two previous years did not.** ⚠ **Timeliness. Eleven of twelve on or before the fifth.** ⚠ **And what happens when she does not know something** — **she came to me twice this year with a question and both times she had already narrowed it to two possibilities, which is the thing I would actually want in a reconciler and which you can see without being one.**'],
  ['Nour', 'And I get somebody else to assess the quality.'],
  ['Nadia', '⚠ **You ask me, and you say in the document that you asked me and what I said.** ⚠ **Which is a sentence I have never seen in a review in sixteen years, and it ought to be in all of them.**'],
  ['Nour', 'Why is pretending worse than admitting?'],
  ['Nadia', '⚠ **Because she knows you cannot.** ⚠ *To a high standard* **tells her that her reviewer will sign off work they have not understood, which is the single most useful piece of information she will get from this document** — **and she will use it, and not in your favour.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reviewing work you could not do**',
  table(['', 'The move', 'Here'], [
    ['⚠ **1 say what you cannot assess**', '⚠ **plainly, with no apology**', '⚠ *I am not in a position to assess the technical quality of the reconciliations*'],
    ['**2 outcomes**', '**what the work produced**', '⚠ *the June reconciliation found a 410,000 error that two previous years did not*'],
    ['**3 timeliness**', '**counted**', '⚠ *eleven of twelve on or before the fifth*'],
    ['⚠ **4 what happens when they do not know**', '⚠ **the thing anybody can see**', '⚠ *came with a question twice and had narrowed it to two possibilities both times*'],
    ['⚠ **5 who did assess it, and what they said**', '⚠ **named, in the document**', '⚠ *I asked N. Sayegh, who said ___* — **a sentence almost no review contains**'],
  ], [2.4, 2.6, 4]),
  '⚠ **You cannot grade what you cannot do, and the person knows that.** ⚠ *To a high standard* **tells them that their reviewer will sign off work they have not understood** — **which is the most useful information in the document and will not be used in the reviewer\'s favour.**',
  '⚠ **Three things remain assessable without the skill: outcomes, timeliness, and what the person does when they do not know something.** ⚠ **The third is the most revealing and the least used** — **narrowing a question to two possibilities before asking is visible to anybody.**',
  '⚠ **Get the technical part assessed by somebody who can, and say in the document that you did.** ⚠ *I asked N. Sayegh, who said ___.* **It is a sentence almost no review contains and it ought to be in all of them** — **it costs the reviewer nothing and it tells the reader exactly how much weight each judgement carries.**',
  '⚠ **State the limit without apology.** ⚠ **Not *I am of course no expert, but*** — **which invites the reader to discount the whole page.** *I am not in a position to assess X; what I can assess is Y.* **Two clauses, no apology, and the second is longer than the first.**',
  '⚠ **And notice what this cycle costs.** ⚠ **A reviewer who admits a limit in writing has given the person something to use** — **and it is the right thing to give them, because the alternative is a document whose confident parts cannot be distinguished from its invented ones.**',
  '**Practise:** Take part of somebody\'s job you could not do. Write the limit, then the three assessable things, then who you would ask.',
  '**Useful phrases:**  how do you know?  ·  I am not in a position to assess  ·  what I can assess is  ·  what they do when they do not know  ·  I asked X, who said',
  '**Pronunciation – a limit without apology.** 🔊 **Track 22.12** Listen twice. ⚠ **The first says *I am not in a position to assess the technical quality* level and brief, and moves straight on.** ⚠ **The second slows and softens it.** **Level, it is a fact about the reviewer; softened, it is an apology, and the reader discounts everything after it.** Say it four times, level, and keep going.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has graded work they could not do; B rebuilds it.'));
out.push(dlg(null, [
  ['A', 'I have written that their __________ is to a high standard.'],
  ['B', '⚠ **How do you know?**'],
  ['A', '__________.'],
  ['B', '⚠ **Could you check one if you wanted to?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say so. And what outcomes can you see?**'],
  ['A', '__________.'],
  ['B', '⚠ **What about what they do when they do not know something?**'],
  ['A', '__________.'],
  ['B', '⚠ **And who could assess the technical part? Say in the document that you asked them.**'],
]));
out.push(table(['Role card 1 — it would undermine me', 'Role card 2 — nothing has gone wrong, so it is fine'], [[
  '⚠ **A believes admitting a limit weakens their authority as a reviewer.** ⚠ **B points out that the person already knows and asks what *to a high standard* tells them.** ⚠ **B\'s point: it tells them their reviewer signs off work they do not understand, which is the most useful thing in the document and will be used** — **so the admission does not create the weakness, it only stops it being a secret.**',
  '⚠ **A treats the absence of problems as evidence of quality.** ⚠ **B distinguishes the two and asks how long a bad reconciliation would take to surface.** ⚠ **B\'s point: *nothing has gone wrong* is an outcome and a useful one, and it is not a judgement of technical quality** — **so write it as an outcome, which is true, rather than as a grade, which is invented.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the limit and the three assessable things for one person. ⚠ Then name who you would ask, and draft the sentence saying that you asked them.'));
out.push(PHRASE_CARD(['how do you know?', 'could you check one?', 'outcomes', 'timeliness', 'what do they do when they do not know?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** people whose work you could not do.'));
out.push(table(['The person and the work', 'What you cannot assess', 'Outcomes and timeliness you can', 'Who you would ask'], [['', '', '', ''], ['', '', '', '']], [2, 2, 3, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am not in a position to assess _______. What I can assess is _______, and _______ of _______ on time. When they do not know something they _______. And I would ask _______, and say so in the document._'));
out.push(p('**Listener task:** count how many had previously graded work they could not do. ⚠ Then ask how many reviews any of them have ever seen containing the sentence *I asked X, who said*.'));
out.push(p('**Board clinic:** your teacher writes four assessments on the board — find the one that grades work the writer could not do, and the one whose limit is wrapped in an apology. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ANNUAL REVIEW: L. BARAKAT. PAGE 3: THE RECONCILIATION WORK, WHICH I CANNOT ASSESS. N. Mansour, 19 July.**',
  '⚠ **The limit, stated first.** **I am not in a position to assess the technical quality of your reconciliation work. I could not check one, and you know that.** ⚠ **So nothing on this page is a judgement of the technical work, and the previous two reviews, which both called it *to a high standard*, were written by people who also could not check one.**',
  '⚠ **What I can assess. Three things, all of which anybody in this office can see.**',
  '**Outcomes.** **The June reconciliation identified a 410,000 difference in the second-bank account that the 2025 and 2026 reconciliations did not. Whatever the technical standard of the work is, that is what it produced, and the two previous years produced the opposite.**',
  '**Timeliness.** **Eleven of twelve on or before the fifth. The twelfth was the February one, on the ninth, and the reason is at page 2 and is Nadia\'s rather than yours.**',
  '⚠ **What you do when you do not know something.** **You came with a question twice this year, in March and in September, and on both occasions you had narrowed it to two possibilities before you came.** ⚠ **That is the thing I would most want in somebody doing this work and it is the thing I am best placed to judge, because it is the only part of it I actually see.**',
  '⚠ **Who assessed the technical quality, and what they said.** **I asked N. Sayegh on 17 July to look at three of your reconciliations chosen at random by me.** ⚠ **His words, written down and initialled by him: "The method is sound and the second-bank treatment is better than mine was. The one weakness is that the workings are not kept, so a third party cannot follow them without asking her."**',
  '⚠ **And that last clause is the only criticism on this page, so I am putting the remedy with it.** ⚠ **From Monday, the workings are kept with each reconciliation.** **It is not a technical change and it is not an implied doubt about the work** — ⚠ **it is Unit 18, which is that a document which cannot be followed without its author is a document with a retirement date on it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer say about the two previous reviews?'));
out.push(item('2', 'What are the three things she can assess, and which does she say she is best placed to judge?'));
out.push(item('3', 'What is the one criticism on the page, where did it come from, and what is the remedy?'));
out.push(box('Writer\'s box', [
  '**The page about work you cannot assess — five parts:** ⚠ **the limit first, with *and you know that*** → ⚠ **outcomes, timeliness, and what they do when they do not know** → ⚠ **who assessed the technical part, named, with their words initialled** → ⚠ **any criticism that comes out of that, with a remedy** → ⚠ **and what the previous reviews claimed.**',
  '⚠ **State the limit first and add *and you know that*.** ⚠ **It concedes the thing the person has been aware of for years and removes it as a weapon** — **and it takes four words.**',
  '⚠ **Say what the previous reviews claimed.** ⚠ *Both called it to a high standard, and were written by people who also could not check one.* **It is the sentence that explains why this page looks different, and it is a criticism of the form rather than of the predecessors.**',
  '⚠ **Make the third assessable thing the centre of the page.** ⚠ *You had narrowed it to two possibilities before you came.* **It is the most revealing thing about anybody doing technical work and it is visible to a non-specialist** — *the only part of it I actually see*, **which is the honest reason it is there.**',
  '⚠ **Get the technical judgement, name who gave it, and quote them initialled.** ⚠ *His words, written down and initialled by him.* **And choose the samples yourself, at random, and say so** — **otherwise the assessment is of three reconciliations the subject chose.**',
  '⚠ **And attach the remedy to the borrowed criticism immediately.** ⚠ *From Monday, the workings are kept with each reconciliation.* **Then say what it is not:** *not a technical change and not an implied doubt about the work* — **because a criticism relayed from a third party is the easiest kind to misread.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page about work you cannot assess (**80 words or more**). Use the frame.'));
out.push(p('**ANNUAL REVIEW: ______________. PAGE ______________: ______________, WHICH I CANNOT ASSESS. ______________, ______________.**   ⚠ **The limit, stated first. I am not in a position to assess ______________. I could not ______________, and you know that.** ⚠ **The previous reviews said ______________, and were written by people who also could not.**   **Outcomes. ______________.**   **Timeliness. ______________ of ______________.**   ⚠ **What you do when you do not know something. ______________.** ⚠ **That is the thing I am best placed to judge, because it is the only part of it I actually see.**   ⚠ **Who assessed the technical quality. I asked ______________ on ______________ to look at ______________ chosen at random by me. Their words, initialled: "______________."**   ⚠ **And the one criticism in that, with its remedy. From Monday, ______________. It is not ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The limit first, with no apology, and *you know that*', ''],
  ['Outcomes and timeliness, counted', ''],
  ['What they do when they do not know something', ''],
  ['A named third-party assessment, quoted and initialled', ''],
  ['Samples chosen by the reviewer, and said to be', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their limit sentence. ⚠ The class says of each whether there is an apology in it, and any *of course I am no expert, but* fails.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about being assessed by somebody who could not do your job (**200 to 240 words**). Say what they wrote, whether they knew they could not, what you did with the document, and what you would have preferred it to say.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the reviewer\'s limit stated anywhere?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the reviewer stated their limit? ⚠ **Usually none** — **and ask what each writer concluded about their reviewer\'s other judgements, because that is the cost the cycle is about and it is paid on the whole document.**'));
out.push(box('Homework', ['Write your final text. Then take one part of a colleague\'s job you could not do and write the limit, the three assessable things, and who you would ask (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 22.7 =======================
out.push(pb());
out.push(h2('22.7  Review & Mediate: the document that must not agree'));
out.push(p('⚠ **This is the tenth unit of this book, and the one in which the firm\'s own decisions get written down about people rather than about clauses.** ⚠ **Everything Units 13 to 21 produced is now somebody\'s year, and the question is whether a true document is allowed to embarrass a decision.**'));
out.push(p('**Function:** letting two documents disagree   ·   **Grammar:** _X answers one question and Y answers another_   ·   **Pronunciation:** a tension stated as a fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**22.1**  What is the test on a sentence in a review?', ''],
  ['**22.2**  When may you write *sometimes*?', ''],
  ['**22.3**  What are the three parts of a named strength?', ''],
  ['**22.4**  What do the first, second and third repetitions of a criticism do?', ''],
  ['**22.5**  What are the four moves in answering an assessment?', ''],
  ['**22.6**  What three things can you assess in work you could not do?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with Bassel\'s review?   **A** it is unfair   **B** an honest version of it reads as a criticism of the April decision   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What does Nour nearly do, and what stops her? **2** What is the resolution, and what does Mr Sayegh have to accept?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  "Then the two documents disagree"', [
  ['Nour', 'Bassel\'s review is the best of the four and I have written it three times.'],
  ['Nadia', 'What is wrong with it?'],
  ['Nour', '⚠ **Nothing is wrong with it. That is the problem.** ⚠ **It says he wrote the best paper in the firm this year and that the option we took was found in it, and anybody reading it in a year will ask why he was not appointed in April.**'],
  ['Nadia', 'And your third draft?'],
  ['Nour', '(pause) ⚠ **My third draft is slightly smaller.** ⚠ **I took out the sentence about section 5 and softened the one about the May paper, and I did it so that the review and the April minute would not contradict each other.**'],
  ['Nadia', '⚠ **Then your third draft is the only dishonest document in this building.**'],
  ['Nour', 'I know. That is why I have brought it to you rather than filing it.'],
  ['Mr Sayegh', 'Let me say the obvious thing. If his review says what you first wrote, my April decision looks wrong on paper.'],
  ['Nour', '⚠ **It does. And I still think it was right, and I am the person it benefited.**'],
  ['Mr Sayegh', 'Explain to me why both of those can be true.'],
  ['Nour', '⚠ **Because they answer different questions.** ⚠ **The review answers *what did he do this year*, and the answer is: the best paper in the firm.** ⚠ **The April minute answers *who should hold the post in May 2027*, and the answer was me, because I was carrying an arbitration to an award and he had never run a dispute.** **Neither answer makes the other wrong.**'],
  ['Nadia', '⚠ **And a reader in a year will see two documents in tension and conclude that somebody made a mistake.**'],
  ['Nour', '⚠ **Then I write the third document, which is one paragraph, and it says what the two of them are each for.** ⚠ **Not to reconcile them** — **to say that they are not supposed to reconcile.**'],
  ['Mr Sayegh', '⚠ **And I have to sign that, which means signing a sentence saying my April decision is not disproved by a review that contradicts it.** ⚠ **Which is a more uncomfortable thing to sign than the review was to write.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two documents, two questions, one tension**',
  table(['', 'The document', 'The question it answers'], [
    ['**the review**', '⚠ *the best paper in the firm this year, and the option we took was found in it*', '⚠ **what did he do in the year to 30 June?**'],
    ['**the April minute**', '⚠ *N. Mansour, because she was carrying the arbitration and he had never run a dispute*', '⚠ **who should hold the post from May 2027?**'],
    ['⚠ **the third document**', '⚠ **one paragraph, signed by both**', '⚠ **why these two are not supposed to reconcile** — **and it is the only one of the three that has to be written deliberately**'],
  ], [1.7, 4.1, 3.2]),
  '⚠ **A document made smaller so that it agrees with another document is the only kind of dishonest document a careful person writes.** ⚠ **Nobody sets out to write one** — **it arrives as a third draft, by softening, and the writer can usually name the two sentences they removed.**',
  '⚠ **Two documents answering different questions are allowed to be in tension.** ⚠ *What did he do this year* **and** *who should hold the post* **are different questions, and neither answer makes the other wrong.**',
  '⚠ **But a reader in a year will see the tension and conclude that somebody made a mistake** — ⚠ **so the tension needs its own paragraph, saying what each document is for.** **Not reconciling them: saying that they do not reconcile.**',
  '⚠ **And the third document costs the person who took the decision, not the person who wrote the review.** ⚠ **Mr Sayegh signs a sentence saying his April decision is not disproved by a review that contradicts it** — **which is harder than writing the review was, and is the reason this is a mediation rather than a procedure.**',
  '⚠ **The sentence to recognise in yourself:** ⚠ *my third draft is slightly smaller.* **It is the only warning you get, and the useful response is to take the third draft to somebody rather than to file it.**',
  '**Useful phrases:**  nothing is wrong with it, and that is the problem  ·  slightly smaller  ·  they answer different questions  ·  neither answer makes the other wrong  ·  not to reconcile them, to say that they do not',
  '**Pronunciation – a tension stated as a fact.** 🔊 **Track 22.14** Listen twice. ⚠ **The first says *neither answer makes the other wrong* flatly, as a statement about documents.** ⚠ **The second rises slightly at the end.** **Flat, it is the finding; risen, it is a hope that somebody will agree, and the room starts negotiating instead of recording.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has softened a document; B works the five steps. ⚠ **In order.**'));
out.push(table(['B asks', 'A answers'], [
  ['⚠ **Is your later draft smaller than your first? Which sentences came out?**', '______________'],
  ['⚠ **Why did they come out? What other document were you making it agree with?**', '______________'],
  ['⚠ **What question does your document answer?**', '______________'],
  ['⚠ **What question does the other one answer?**', '______________'],
  ['⚠ **Then who signs the paragraph saying they are not supposed to agree?**', '______________'],
], [4.4, 4.6]));
out.push(table(['Role card 1 — the file should be consistent', 'Role card 2 — I will just leave both out'], [[
  '⚠ **A argues that two documents in a personnel file ought not to contradict each other.** ⚠ **B asks what each one is answering.** ⚠ **B\'s point: consistency between answers to different questions is not a virtue, it is a coincidence** — **and manufacturing it means falsifying whichever document is easier to soften, which is always the one about the person rather than the one about the decision.**',
  '⚠ **A proposes removing the two strong sentences AND the April reasoning, so neither document says anything.** ⚠ **B asks what a reader in a year then has.** ⚠ **B\'s point: two uninformative documents are worse than two in tension** — **because the tension at least contains the truth, and the reader who finds nothing concludes something and nobody can correct them.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** name a document you have softened and the sentence that came out. ⚠ Then write the two questions, and say who would have to sign the third paragraph.'));
out.push(PHRASE_CARD(['is the later draft smaller?', 'which sentences came out?', 'what question does each answer?', 'they are not supposed to agree', 'who signs that?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** pairs of documents at your work that are in tension, or should be.'));
out.push(table(['Document A, and its question', 'Document B, and its question', 'Which one got softened', 'Who would sign the third paragraph'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.4, 2, 2.2]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** Nour has written a true review and a softened one. Nadia will not accept the softened one. Mr Sayegh\'s April decision is the thing the true one embarrasses.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What goes in the file'], [[
  '⚠ **Nour:** **the honest review reads as a criticism of the April decision, and she has already written the softened version** — **which she brought to somebody instead of filing.**  ⚠ **Nadia:** **a document made smaller to agree with another is the only dishonest document a careful person writes, and this one has a name and a date.**  ⚠ **Mr Sayegh:** **a reader in a year will see two documents in tension and conclude somebody was wrong.**',
  '⚠ **Nour:** **the third draft, and the comfort of a file that agrees with itself.** **She also records, in the review, that she was the person appointed instead** — **which she had left out of all three drafts.**  ⚠ **Mr Sayegh:** **the appearance of a decision that nothing contradicts.** ⚠ **He signs a paragraph saying his own April decision is not disproved by a review that contradicts it, which is harder than anything Nour had to write.**  ⚠ **Nadia:** **nothing.**',
  '⚠ **Three documents.** ⚠ **The review, as first written, including the sentence about section 5 and the fourth option.** ⚠ **The April minute, unchanged.** ⚠ **And a third paragraph, signed by N. Sayegh and N. Mansour, 23 July:** *The review answers what B. Nassif did in the year to 30 June. The minute of 24 April answers who should hold the office manager\'s post from 1 May 2027. These are different questions and the answers are in tension. Neither disproves the other. Anybody reading both should read this paragraph as well, and should not conclude from the tension that either document was wrong when it was written.*',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Everybody is right. _______ is right that _______. _______ is right that _______. _______ is right that _______. So the file holds _______, _______ and _______ — and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence that cost the most, which is Mr Sayegh\'s:** *"Which is a more uncomfortable thing to sign than the review was to write."* ⚠ **Mark it, because it is the only point in either book where the person who took a decision has to sign a document that lets a true record stand against it** — **and the whole unit is about which of the two a firm falsifies when it cannot bear the tension.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)', 10));
out.push(p('⚠ **This unit is Part 5: error correction, twelve lines. It is the third time in the level.** ⚠ **In some lines there is one extra word which is GRAMMATICALLY WRONG. Some lines are correct.** **For a correct line write **CORRECT**. For an incorrect line write the extra word. Write in **CAPITAL LETTERS**.'));
out.push(box(null, [
  '**To: N. Mansour   From: N. Sayegh   24 July   The four reviews**',
  '**1**  Thank you for your note of 20 July. I have read the three reviews   ______________',
  '**2**  and I have two comments, of which the second is the one that   ______________',
  '**3**  matters. The first is that you have been written them in the wrong   ______________',
  '**4**  order: the strengths page should come to first in all three, and it   ______________',
  '**5**  does so in only two of them. The second comment is about Nassif.   ______________',
  '**6**  His review is the best of the three and it does not agree with the   ______________',
  '**7**  decision we took in April, and I want to say clearly that this is not   ______________',
  '**8**  for a problem. Two documents answering different questions are   ______________',
  '**9**  allowed to disagree. What is not allowed is to make one of them   ______________',
  '**10**  more smaller so that it fits the other. If anybody asks me in a year   ______________',
  '**11**  why he was not appointed, the answer is in the April minute and   ______________',
  '**12**  not in his review, and I will be say so. Keep both as they are.   ______________',
]));
out.push(p('⚠ **Reminder:** the extra word must be **grammatically wrong**, not merely unnecessary. **A word you could delete without breaking the grammar is not the answer.**'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Three content points, all three present.** ⚠ **This is the fifth Part 2 of Book 2, after Units 14, 16, 18 and 21.**',
  '⚠ **For a report on a review process, three headings.** ⚠ *What the reviews now contain · What changed, and why · Recommendation.* **Three headings at 130 words, and the marker finds all three content points immediately.**',
  '⚠ **The first heading takes a contrast with the old form.** ⚠ *Every assessment now names a document and a date. The previous form named qualities.* **Fifteen words, and the whole change is in them.**',
  '⚠ **The second heading needs a number, because a process report without one is an opinion about a process.** ⚠ *Of eleven assessments across four reviews, three were withdrawn when I looked for instances and found none.* **A count, and it is the most persuasive sentence available on this subject.**',
  '⚠ **And the recommendation must be a change to the FORM rather than an exhortation.** ⚠ *That the form carry an instance-count column.* **Not *that reviewers be more rigorous*, which is 13.3\'s clause that obliges nobody** — **and the examination rewards the checkable version in exactly the same way the unit does.**',
  '⚠ **Part 5 tip, for the error correction above.** ⚠ **All five extra words in that text are an auxiliary or a comparative inserted where the structure does not take one** — ***been* in a perfect active, *to* before *first*, *for* before a noun complement, *more* before a comparative, *be* before a bare verb.** ⚠ **Four of the five are words the ear accepts completely**, **so read for the structure: find the verb, then ask what each small word is attached to.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Your company has changed how it writes annual reviews. Your manager has asked for a report (**120 to 140 words**) saying **what the reviews now contain**, **what changed and by how much**, and **one recommendation that changes the form rather than people\'s habits**.'));
out.push(p('**REPORT: ______________**   **To:** ______________   **From:** ______________   **Date:** ______________   ⚠ **What the reviews now contain.** **Every assessment names ______________. The previous form named ______________.**   ⚠ **What changed, and by how much.** **Of ______________ assessments across ______________ reviews, ______________ were ______________ when I looked for instances.**   ⚠ **Recommendation.** **I recommend that the form ______________, from ______________.** ⚠ **This is a change to the form and not to anybody\'s habits.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings carrying the three content points', ''],
  ['A contrast with the old form, not a description', ''],
  ['A count, not an impression', ''],
  ['A recommendation that changes the form, with a date', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about two documents at your work that are in tension (**200 to 240 words**). Say what each answers, which one has been softened to fit the other, and what a third paragraph would have to say.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one document of yours whose later draft was smaller than its first, and write down which sentences came out and what you were making it agree with (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Every assessment names a document, ___ a date.   a) by   b) on   c) with',
  '2  I am not in a position ___ assess the technical quality.   a) to   b) for   c) of',
  '3  One is an instance, two is a coincidence, three is ___ pattern.   a) the   b) a   c) one',
  '4  The remedy begins ___ Monday.   a) in   b) at   c) on',
  '5  Nobody has told you that, ___ me.   a) including   b) included   c) include',
  '6  Three ___ your four papers put it on the last page.   a) from   b) of   c) in',
  '7  I ask that this answer ___ kept with the review.   a) is   b) will   c) has',
  '8  Two documents answering different questions are allowed ___ disagree.   a) for   b) of   c) to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 22.15** Listen to the conversation on 25 July. Complete the note.   How many assessments Nour withdrew, and why: ______   What she says about Hala\'s two previous reviews: ______   What the third paragraph is for: ______   What Mr Sayegh says he nearly asked her to do: ______   What Lina asked for that nobody had ever asked for: ______   The one change Nour is making to the form: ______'));
out.push(p('**C  Reading.** Read the evidence page at 22.2 again. Say what happened to the third assessment, what was underneath it, and what Lina\'s answer revealed about the firm rather than about her.'));
out.push(p('**D  Writing.** Take one judgement you would make about somebody\'s work. Write the work version with a document and a date, the instance count, and a remedy that could begin on Monday (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['Nadia', 'Four reviews. What did you actually learn?'],
  ['Nour', '⚠ **That I withdrew three assessments out of eleven**, ⚠ **and all three for the same reason: I went to look for the instances and there were none.** **Twenty minutes each.**'],
  ['Nadia', 'And Hala\'s?'],
  ['Nour', '⚠ **Her two previous reviews both said she was an asset to the counter.** ⚠ **Neither mentioned the tally, which the February decision was taken on.** **Three years, two reviews, and the most valuable thing anybody in this office does was not in either of them.**'],
  ['Nadia', 'And the third paragraph on Bassel?'],
  ['Nour', '⚠ **It is not there to reconcile the review with the April minute. It is there to say that they are not supposed to reconcile** — **because a reader in a year will see the tension and decide somebody was wrong, and the paragraph is the only thing that stops them.**'],
  ['Mr Sayegh', '⚠ **I should say what I nearly did.** ⚠ **On the Tuesday I nearly asked you to take out the sentence about section 5.** **Not to protect the April decision** — **to protect myself from having to sign the third paragraph.** ⚠ **I did not ask, and the reason I did not is that you brought me the softened draft instead of filing it.**'],
  ['Nadia', 'And Lina?'],
  ['Nour', '⚠ **Lina asked me what the escalation standard was, and it is in no document in this office.** ⚠ **She has been doing it her own way for two years and nobody has ever told her there was a standard, because there is not one.** **I have written it this week. Two days.**'],
  ['Nadia', 'And the form?'],
  ['Nour', '⚠ **One change. An instance-count column, in capitals, against every assessment.** ⚠ **It is the only thing on the page that disciplines the writer, and it would have caught all three of the ones I withdrew before I wrote them rather than after.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**22.1** write about a document, a conversation or a decision rather than about a person',
  '**22.2** count your instances before you choose the word, and withdraw what you cannot evidence',
  '**22.3** name a strength specifically, with what it is worth and whether anybody has said so',
  '**22.4** make a criticism once, with a count, an instruction, a date and a remedy from their own work',
  '**22.5** answer an assessment by accepting the larger true part first and asking for the instance',
  '**22.6** review work you could not do, by stating the limit and naming who assessed it',
  '**22.7** let two documents answering different questions stand in tension, with a paragraph saying why',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three come from B1 Unit 22, and all three were forms there rather than documents.** ⚠ **An appraisal at B1 was a meeting with a form to fill in.** **Here it is four documents, three withdrawn assessments and a paragraph that somebody has to sign against their own decision.**',
  '⚠ **A performance note at B1 recorded that something had been said.** ⚠ **Here it records how many times, on what dates, and by how much** — **because *sometimes* with one instance is the sentence that collapses the first time it is questioned.**',
  '⚠ **And a rating scale at B1 was the thing you placed somebody on.** ⚠ **Here it is the thing that cannot be used at all for work you could not do yourself** — **and the honest replacement is a limit, three outcomes, and a named person who could assess what you could not.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
module.exports = out;
