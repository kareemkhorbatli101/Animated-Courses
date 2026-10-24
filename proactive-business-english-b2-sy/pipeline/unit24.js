// Proactive Business English B2 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a sealed letter · a letter to your future self · to open what you wrote · the person who wrote it · a gap you named · a gap that closed · a gap that did not close · evidence that a gap closed · a claim about yourself · a claim you can evidence · an undertaking you gave yourself · to count what you promised · the count against the count · a promise nobody checked · the exercise you never did · the reason you did not do it · a reason that is not an excuse · what you will be answerable for · an office you have not started · a responsibility written before it begins · the reader you arrange in advance · one document with one reader · to seal and date · what a certificate says about a person · what a certificate does not say · a level you have finished · a thing you can now do in writing · a thing you still cannot do · the next gap, named · to write to somebody who does not exist yet · a record of what you could not do · the first line of your own letter';
const COLLOC = 'to open a sealed letter · to evidence a closed gap · to count a promise · to name the next gap · to write to your future self · to arrange a reader · to seal and date a letter · to be answerable for an office';
const BACK_AT_B2 = 'a gap · a certificate · a target date';

out.push(h1('Unit 24  Opening the Letters'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**24.1**  open what you wrote two years ago and do what its first line tells you to do',
  '**24.2**  name a gap that closed, and produce the document that proves it',
  '**24.3**  name a gap that did not close, and say whether the exercise was ever done',
  '**24.4**  count what you undertook against what you did, and give the figure',
  '**24.5**  write what you will be answerable for before the office begins',
  '**24.6**  write and seal one letter to your C1 self, and arrange its reader',
  '**24.7**  Review & Mediate: what a certificate says and does not say about a person',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Fourteen December, and nine envelopes nobody had looked at', [
  '⚠ **At the end of B1, on 11 December 2025, every learner in that room wrote one page to the person they would be two years later, sealed it, and gave it to the teacher.** **Fourteen pages. Nobody has seen them since.**',
  '⚠ **Nour\'s first line was not a reflection.** **It was an instruction:** *Before you read the rest of this, turn it over, count the nine things on the back, and write down how many you have done.* ⚠ **She wrote that sentence because she already knew what she would do with a page of her own good intentions, which is read it sympathetically and put it away.**',
  '⚠ **The count is four of nine, and one of the five she did not do is the reason one of her two gaps is still open.** **She can now write a letter that disagrees with an auditor, and the letter exists, dated 9 June 2026, and it was right about two of three things.** ⚠ **She still cannot say in a room what she can write on a page, and the exercise that was supposed to fix it was done three times in two years.**',
  '⚠ **This unit is those fourteen envelopes, and the fourteen new ones that go in the drawer at the end of it.** ⚠ **The hardest thing in it is 24.3** — **not naming the gap that did not close, which everybody can do, but saying out loud whether the thing you promised to do about it was ever done.**',
], C.lyellow, C.orange));

// ======================= CYCLE 24.1 =======================
out.push(pb());
out.push(h2('24.1  Reading what you wrote two years ago'));
out.push(p('**Function:** reading your own old document as a document   ·   **Grammar:** _I wrote X; what I now find is Y_   ·   **Pronunciation:** reading your own sentence without defending it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you wrote about yourself more than a year ago. ⚠ Then say whether anybody, including you, ever checked it.'));
out.push(p('**b**  Which is a first line worth writing? _I hope you have grown in confidence and skill · before you read the rest of this, turn it over, count the nine things on the back, and write down how many you have done_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say about her own first line?   **A** that it was sentimental   **B** that she wrote it as an instruction because she knew she would read a page of good intentions sympathetically and put it away   **C** that she does not remember it'));
out.push(p('**b**  Listen again. **1** What three things does she say to do with an old page of your own before reacting to it? **2** Why does she say the page should be read as somebody else\'s?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  "Read it as though somebody else wrote it"', [
  ['Nadia', 'Fourteen envelopes. Yours is the one with the instruction on the front.'],
  ['Nour', '⚠ **I remember writing the instruction and I remember why.** ⚠ **I knew exactly what I would do with a page of my own good intentions two years later, which is read it kindly, feel something, and put it back.**'],
  ['Nadia', 'And the instruction stops that.'],
  ['Nour', '⚠ **It makes the first act a count instead of a feeling, and a count cannot be done kindly.**'],
  ['Nadia', 'So what do you do with it before you react to it?'],
  ['Nour', '⚠ **Three things, and in this order.** ⚠ **One: read it once through without stopping, as though somebody else wrote it** — **because the moment I start defending a sentence I have stopped reading it.** ⚠ **Two: separate the claims from the hopes. There are four claims on this page and the rest is hoping.** ⚠ **Three: do what the first line says.**'],
  ['Nadia', 'Why as somebody else\'s?'],
  ['Nour', '⚠ **Because I know what I meant, and knowing what you meant is the enemy of reading what you wrote.** ⚠ **There is a sentence here that says I will *make time for* the reading-aloud exercise.** **I know what I meant by it. A reader does not, and a reader is right** — ***make time for* is not an undertaking, it is a wish with a verb in front of it.**'],
  ['Nadia', 'And the claims?'],
  ['Nour', '⚠ **Four. That I could write a letter disagreeing with a customer. That I could not write one disagreeing with an auditor. That I could not say in a room what I could write on a page. And that nine things on the back would be done.**'],
  ['Nadia', 'Which of the four can you check?'],
  ['Nour', '⚠ **All four, and that is what two years have changed.** ⚠ **At B1 those were four opinions about myself.** **Now there is a letter of 9 June 2026, a transcript from Beirut in which I said four sentences, and a count** — **and none of the three is an opinion.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Opening your own old page: three acts, in order**',
  table(['', 'The act', 'Why'], [
    ['**1 read it straight through**', '⚠ **as though somebody else wrote it**', '⚠ **because the moment you defend a sentence you have stopped reading it** — **and you know what you meant, which is the enemy of reading what you wrote**'],
    ['**2 separate claims from hopes**', '⚠ **a claim is checkable; a hope is not**', '⚠ *I will make time for the exercise* **is a wish with a verb in front of it;** *I will read one document aloud every Thursday* **is a claim**'],
    ['⚠ **3 do what the first line says**', '⚠ **before reacting at all**', '⚠ **a count cannot be done kindly, and a page of good intentions read kindly goes back in the drawer**'],
  ], [2.3, 2.7, 4.2]),
  '⚠ **Write the first line of such a letter as an instruction and not as a greeting.** ⚠ **You are writing to somebody who will be busy, slightly embarrassed, and well disposed towards you** — **which is the worst combination of reader a document can have.**',
  '⚠ **Read it once without stopping.** ⚠ **A page read sentence by sentence becomes a negotiation with yourself**, **and the useful reading is the first one, at speed, as a stranger\'s document.**',
  '⚠ **Count the claims.** ⚠ **Most such pages contain three or four and the rest is hoping** — **and the whole value of the exercise is in the three or four, because they are the only sentences that can turn out to be wrong.**',
  '⚠ **And notice what two years changes, which is not the claims but their STATUS.** ⚠ **Four opinions about yourself become a letter with a date, a transcript, and a count** — ⚠ **and that is what a level is: not that you are better, but that what you say about yourself can now be checked.**',
  '**Practise:** Take something you wrote about yourself. Read it once at speed, then underline the claims and cross out the hopes.',
  '**Useful phrases:**  as though somebody else wrote it  ·  a wish with a verb in front of it  ·  claims and hopes  ·  do what the first line says  ·  four opinions, and now four documents',
  '**Pronunciation – reading your own sentence without defending it.** 🔊 **Track 24.2** Listen twice. ⚠ **The first reads *I will make time for the exercise* flatly, as a quotation from a document.** ⚠ **The second reads it with a small apology.** **Flat, it is evidence; apologised for, it is already being argued about, and the apology is the defence beginning.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an old page; B works the three acts.'));
out.push(dlg(null, [
  ['A', 'Two years ago I wrote that __________.'],
  ['B', '⚠ **Read it once through without stopping. Done?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now: which sentences are claims and which are hopes?**'],
  ['A', '__________.'],
  ['B', '⚠ **Take one hope. What would it have had to say to be a claim?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what does the first line tell you to do?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then do that before you tell me how you feel about the page.**'],
]));
out.push(table(['Role card 1 — I knew what I meant', 'Role card 2 — the page is embarrassing, let us not'], [[
  '⚠ **A defends *make time for* on the ground that the intention was obvious.** ⚠ **B asks who else would have to read it, and in two years\' time.** ⚠ **B\'s point: the writer\'s knowledge of their own meaning is the one thing a document cannot carry** — **and a sentence that needs its author present to be understood has already failed, which is Unit 18\'s whole argument applied to a page about yourself.**',
  '⚠ **A wants to read the page, smile at it and move on.** ⚠ **B asks what the first line says.** ⚠ **B\'s point: the writer anticipated precisely this and left an instruction to prevent it** — **so skipping the count is overruling the only person who had thought about the problem, which is the writer two years ago.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** name one sentence of your own that was a hope dressed as a claim. ⚠ Then say what it would have had to say instead, in under fifteen words.'));
out.push(PHRASE_CARD(['read it straight through', 'claim or hope?', 'what would make it a claim?', 'what does the first line say?', 'do that first']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you have written about yourself or your work.'));
out.push(table(['What I wrote', 'Claim or hope?', 'What would make it checkable', 'Did anybody ever check it'], [['', '', '', ''], ['', '', '', '']], [2.4, 1.4, 2.8, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two years ago I wrote _______. That is a _______. To be checkable it would have had to say _______. And the person who checked it was _______._'));
out.push(p('**Listener task:** count how many of the sentences were claims. ⚠ Then ask who checked each one, and expect the answer *nobody* in most cases.'));
out.push(p('**Board clinic:** your teacher writes four sentences on the board — find the two hopes and rewrite them as claims. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SEALED PAGE OF 11 DECEMBER 2025, OPENED 14 DECEMBER 2027. Transcribed by N. Mansour, with what I now find.**',
  '**The first line, as written: *Before you read the rest of this, turn it over, count the nine things on the back, and write down how many you have done.* I have done that, and the figure is at 24.4.**',
  table(['What I wrote in 2025', 'Claim or hope', 'What I now find'], [
    ['⚠ *I can write a letter that disagrees with a customer. I cannot write one that disagrees with an auditor.*', '⚠ **two claims**', '⚠ **The second is no longer true, and the document that makes it untrue is the letter of 9 June 2026 on four of the audit\'s twelve lines.** **It is at 24.2.**'],
    ['⚠ *I cannot say in a room what I can write on a page.*', '**a claim**', '⚠ **Still true, and I now know the figure: four sentences in Beirut on 7 April, in a hearing of four and a half hours.** **It is at 24.3.**'],
    ['⚠ *I will make time for the reading-aloud exercise.*', '⚠ **a hope**', '⚠ **Three times in two years.** **And the sentence is the reason** — ***make time for* has no day in it, no document in it and nobody watching, which is 23.4 arriving two years late and about myself.**'],
    ['⚠ *By the end of B2 I will be a confident writer in English.*', '⚠ **a hope, and not a usable one**', '⚠ **I do not know what would have made it true or false, and nor did I.** **It is the longest sentence on the page and the only one I cannot check at all.**'],
  ], [3.4, 1.4, 4.2]),
  '⚠ **What I did not expect.** **Reading it once through, at speed, as a stranger\'s page, took ninety seconds and was the whole exercise.** ⚠ **The second reading was already a defence** — **I caught myself explaining *make time for* to nobody, in my head, before I had got to the back of the page.**',
  '⚠ **And one sentence I want to keep as it is.** *I cannot say in a room what I can write on a page.* ⚠ **It was true in 2025, it is true now, and in 2025 I had no way of knowing whether it was true or whether I was being modest.** **Now there is a transcript. The sentence has not changed and what stands behind it has.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many claims and how many hopes are on the 2025 page, and which hope cannot be checked at all?'));
out.push(item('2', 'What does the writer say about the second reading?'));
out.push(item('3', 'Which sentence does she keep unchanged, and what has changed about it?'));
out.push(box('Writer\'s box', [
  '**The opened-page transcription — five parts:** ⚠ **the first line quoted, and whether you obeyed it** → ⚠ **a three-column table: what you wrote · claim or hope · what you now find** → ⚠ **a pointer to the cycle where each is dealt with** → ⚠ **what you did not expect** → ⚠ **and one sentence you keep unchanged.**',
  '⚠ **Quote your old sentences exactly, in italics, and do not improve them.** ⚠ *I will make time for the reading-aloud exercise.* **An old sentence tidied up is evidence destroyed** — **and the untidiness is usually the finding.**',
  '⚠ **Grade every sentence claim or hope, in its own column, before writing what you now find.** ⚠ **Doing it in that order stops the writing becoming a defence**, **because the grading is mechanical and the finding is not.**',
  '⚠ **Say where each one is dealt with.** ⚠ *It is at 24.2 · it is at 24.3 · it is at 24.4.* **A page that opens four questions and answers none of them is a page nobody will come back to** — **and the cross-references are what make this a document rather than a reflection.**',
  '⚠ **Record what you did not expect, and make it about the reading rather than about yourself.** ⚠ *The second reading was already a defence.* **That is a usable observation and it will still be usable in five years** — ***I was surprised how much I have changed* will not be.**',
  '⚠ **And keep one sentence unchanged, with the reason.** ⚠ *The sentence has not changed and what stands behind it has.* **It is the most precise thing a page like this can say**, **and it is what a level actually delivers: not a different claim about yourself, but a claim that can now be checked.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Transcribe and answer something you wrote about yourself (**80 words or more**). Use the frame.'));
out.push(p('**THE PAGE OF ______________, OPENED ______________. Transcribed by ______________, with what I now find.**   **The first line, as written: *______________*. I have / have not done that.**   **What I wrote** | **Claim or hope** | ⚠ **What I now find**   ⚠ **_______________* | ______________ | ______________**   ⚠ **_______________* | ______________ | ______________**   ⚠ **What I did not expect. ______________.**   ⚠ **And one sentence I keep as it is. *______________.* It was true then, it is true now, and what has changed is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Old sentences quoted exactly, not improved', ''],
  ['Every sentence graded claim or hope', ''],
  ['What is now found, against each', ''],
  ['Something unexpected, about the reading', ''],
  ['One sentence kept unchanged, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their quoted old sentences. ⚠ The class grades each one claim or hope, and a sentence nobody can grade is the finding.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you once wrote about yourself or your work (**200 to 240 words**). Say what it claimed, whether anybody checked it, what you now find, and what you would have had to write to make it checkable.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _claim or hope?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had anybody ever checked the claim? ⚠ **Usually none** — **and the useful second question is who could have checked it, because there is nearly always somebody and nobody ever asked them.**'));
out.push(box('Homework', ['Write your final text. Then take one page of your own from more than a year ago, read it once at speed, and grade every sentence claim or hope (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.2 =======================
out.push(pb());
out.push(h2('24.2  The gap that closed, with the document that proves it'));
out.push(p('**Function:** evidencing a claim about your own competence   ·   **Grammar:** _I can now X; the document is Y, dated Z_   ·   **Pronunciation:** a competence stated without pride'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you can do in writing now that you could not two years ago. ⚠ Then name the document.'));
out.push(p('**b**  Which is evidence? _my written English has improved a great deal · on 9 June 2026 I wrote to Mr Dallal\'s auditors disagreeing with four of their twelve amendments; two were accepted, one was accepted in part, and one I was wrong about_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does Nour evidence the gap that closed?   **A** she says she feels more confident   **B** with one letter, its date, what it disagreed with, and what happened to each of the four points, including the one she was wrong about   **C** with the B2 certificate'));
out.push(p('**b**  Listen again. **1** Why does she include the point she was wrong about? **2** What does Nadia say about the word *improved*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  "Four points, and I was wrong about one"', [
  ['Nadia', 'In 2025 you wrote that you could not write a letter disagreeing with an auditor. Can you?'],
  ['Nour', '⚠ **Yes, and the letter exists.** ⚠ **Ninth of June 2026, to Mr Dallal\'s auditors, on four of the twelve lines they had amended. Two of the four they accepted, one they accepted in part, and one I was simply wrong about** — **the term of art in line 7, which reads like nonsense and means something exact.**'],
  ['Nadia', 'Why tell me about the fourth?'],
  ['Nour', '⚠ **Because a claim about myself with no failure in it is a claim I have selected.** ⚠ **Four points and three successes is a document. Four points and four successes is an advertisement, and the reader starts wondering what the fifth point was.**'],
  ['Nadia', 'And would you say your written English has improved?'],
  ['Nour', '(pause) ⚠ **I would not put that sentence in anything.**'],
  ['Nadia', 'Why not? It is true.'],
  ['Nour', '⚠ **It is true and it is unusable.** ⚠ **Improved from what, by how much, measured by whom?** **Nobody can disagree with it, which means nobody can agree with it either** — **and a sentence nobody can disagree with is worth exactly nothing in a document, which is Unit 8 and Unit 22 saying the same thing about different subjects.**'],
  ['Nadia', 'So what do you say instead?'],
  ['Nour', '⚠ **I say what I did, to whom, on what date, and what happened.** ⚠ **And then I stop, because the reader can form their own view of whether that is improvement and their view is better than mine.**'],
  ['Nadia', 'And if the reader forms a low view of it?'],
  ['Nour', '⚠ **Then they have formed it from the facts, which is all I can offer and all I want.** ⚠ **The thing I will not do is take the facts out so that the view cannot be formed.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Evidencing a competence: four parts, and the fourth is the failure**',
  table(['', 'The part', 'Here'], [
    ['**1 what you did**', '**the act, not the quality**', '⚠ *wrote to the auditors disagreeing with four of their twelve amendments*'],
    ['**2 to whom, and when**', '**a name and a date**', '⚠ *Mr Dallal\'s auditors, 9 June 2026*'],
    ['**3 what happened**', '**the outcome, itemised**', '⚠ *two accepted, one accepted in part*'],
    ['⚠ **4 and what you got wrong**', '⚠ **one of them, named**', '⚠ *the term of art in line 7, which I was simply wrong about* — **without it the other three read as a selection**'],
  ], [2.2, 2.4, 4.4]),
  '⚠ ***Improved* is unusable, however true.** ⚠ **Improved from what, by how much, measured by whom?** **Nobody can disagree with it, which means nobody can agree with it either** — **and a sentence nobody can disagree with is worth nothing in a document.**',
  '⚠ **Say the act and not the quality.** ⚠ *I wrote to the auditors on four of twelve lines* **is an act;** *I am now able to engage confidently with professional advisers* **is a quality, and a quality is a sentence about yourself.**',
  '⚠ **Include the one you got wrong, and name it.** ⚠ **Four points and three successes is a document; four points and four successes is an advertisement** — **and the reader of an advertisement begins wondering what the fifth point was.**',
  '⚠ **Then stop, and let the reader form the view.** ⚠ *Their view of whether that is improvement is better than mine.* **The thing not to do is remove the facts so that the view cannot be formed** — **which is the temptation, and it is 22.7\'s softened third draft in a document about yourself.**',
  '⚠ **And prefer the document that exists to the document that would be flattering.** ⚠ **A real letter with a date, two acceptances and one error beats any description of a capability**, **because it can be asked for.**',
  '**Practise:** Take one thing you can do now. Give the act, the reader, the date, the outcome, and the part you got wrong.',
  '**Useful phrases:**  the letter exists  ·  improved from what, measured by whom?  ·  two accepted, one in part  ·  and one I was wrong about  ·  the reader can form their own view',
  '**Pronunciation – a competence without pride.** 🔊 **Track 24.4** Listen twice. ⚠ **The first says *two were accepted and one I was wrong about* at one level, as a list of outcomes.** ⚠ **The second drops on the last clause.** **Level, it is a record; dropped, it is an apology, and an apologised-for error invites the reader to be kind instead of to be convinced.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A claims an improvement; B asks for the four parts.'));
out.push(dlg(null, [
  ['A', 'My written English has improved a lot.'],
  ['B', '⚠ **Improved from what, and measured by whom?**'],
  ['A', '__________.'],
  ['B', '⚠ **What did you actually do? The act, not the quality.**'],
  ['A', '__________.'],
  ['B', '⚠ **To whom, and on what date?**'],
  ['A', '__________.'],
  ['B', '⚠ **What happened to it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And which part of it did you get wrong?**'],
]));
out.push(table(['Role card 1 — why spoil it with the error', 'Role card 2 — the certificate is the evidence'], [[
  '⚠ **A wants the three successes and not the fourth point.** ⚠ **B asks what a reader does with four for four.** ⚠ **B\'s point: a perfect record is read as a selected one, and the reader\'s next question is what was left out** — **so the named error is not modesty, it is the thing that makes the other three believable, which is 21.5 applied to a claim about yourself.**',
  '⚠ **A proposes to put the B2 certificate in place of the letter.** ⚠ **B asks what the certificate says the writer did.** ⚠ **B\'s point: it says somebody performed four tasks on one day under examination conditions, which is worth having and is not the same as a letter to a real auditor with a real outcome** — **and 24.7 is about exactly that difference.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** turn one *improved* sentence into the four parts. ⚠ Then say which of the four the speaker had to go and look up, and expect it to be the date.'));
out.push(PHRASE_CARD(['improved from what?', 'the act, not the quality', 'to whom, and when?', 'what happened to it?', 'which part was I wrong about?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you can do in writing now that you could not two years ago.'));
out.push(table(['What I can do', 'The document, with its date', 'What happened to it', 'The part I got wrong'], [['', '', '', ''], ['', '', '', '']], [2, 2.6, 2.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______ I could not _______. On _______ I _______, to _______. The outcome was _______. And the part I got wrong was _______._'));
out.push(p('**Listener task:** count how many reports named a document that exists. ⚠ Then ask the ones who did not whether a document exists and they did not name it, which is the commoner case.'));
out.push(p('**Board clinic:** your teacher writes four claims about competence on the board — find the two with no document behind them and supply what each would need. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE GAP THAT CLOSED. N. Mansour, 14 December 2027. One claim, one document, four outcomes.**',
  '**What I wrote on 11 December 2025: *I can write a letter that disagrees with a customer. I cannot write one that disagrees with an auditor.***',
  '⚠ **The act.** **On 9 June 2026 I wrote to Mr Dallal\'s auditors about four of the twelve lines they had amended in our note of 26 May.** **One page, four numbered points, no covering apology.**',
  table(['Point', 'What I said', 'What happened'], [
    ['**1**', '**that the figure in line 3 was agreed in writing on 20 February and is not ours to amend**', '⚠ **accepted, and the original figure restored**'],
    ['**2**', '**that the eleven words in line 5 are quoted from our letter of 28 January and cannot be paraphrased**', '**accepted**'],
    ['**3**', '**that the hedge in line 9 was negotiated clause by clause and the amendment removes a qualification, not a word**', '⚠ **accepted in part; they restored the qualification and rewrote the sentence round it, better than either version**'],
    ['⚠ **4**', '⚠ **that the phrase in line 7 was unclear and should be plain English**', '⚠ **refused, correctly.** **It is a term of art with an exact meaning and I did not know it was one.** ⚠ **Their reply explained it in two sentences and was entirely courteous, which made it worse.**'],
  ], [0.8, 4.6, 3.6]),
  '⚠ **What the fourth point taught me, which the other three did not.** **I had read all twelve lines carefully and I had not once asked whether a line I could not understand might be a line I did not know enough to understand.** ⚠ **That is a different question from *is this badly written*, and in two years I have learnt to ask it about four or five times a month.**',
  '⚠ **What I am not claiming.** **I am not claiming that my written English has improved, because I do not know how that would be measured and nor does anybody who would read this.** ⚠ **I am claiming one thing: that a letter which I could not have written in December 2025 exists, dated, with an outcome, and that it is available to anybody who wants to read it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happened to point 3, and why does the writer call the result better than either version?'));
out.push(item('2', 'What did point 4 teach her that the other three did not?'));
out.push(item('3', 'What does she say she is NOT claiming, and why?'));
out.push(box('Writer\'s box', [
  '**The gap-that-closed note — five parts:** ⚠ **the old sentence, quoted** → ⚠ **the act, with its date and its shape** → ⚠ **a table of points and outcomes, including the refusal** → ⚠ **what the refused point taught you** → ⚠ **and what you are NOT claiming.**',
  '⚠ **Quote the old sentence first and let the note answer it.** ⚠ **A note about a closed gap with no record of the gap is a note about a letter**, **and the reader has to be told what the letter is evidence OF.**',
  '⚠ **Describe the act in its shape as well as its substance.** ⚠ *One page, four numbered points, no covering apology.* **Eleven words, and a reader who writes for a living learns more from them than from a paragraph about confidence.**',
  '⚠ **Put the refusal in the table, in the same columns, with *correctly* in it.** ⚠ *Refused, correctly. It is a term of art and I did not know it was one.* **The word *correctly* is what separates a record from a grievance** — **and it costs nothing, because the three acceptances are in the rows above.**',
  '⚠ **Then say what the refusal taught you, as a question you now ask.** ⚠ *Might a line I cannot understand be a line I do not know enough to understand?* **A lesson expressed as a question you ask four or five times a month is a lesson; expressed as a resolution it is 24.1\'s hope.**',
  '⚠ **And end with what you are NOT claiming, in terms.** ⚠ *I am not claiming that my written English has improved, because I do not know how that would be measured.* **It is the sentence that makes the one claim you ARE making worth reading** — **the same instrument as 19.2\'s *we do not allege* and 23.2\'s *we are not asking*, turned on yourself.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a gap-that-closed note (**80 words or more**). Use the frame.'));
out.push(p('**THE GAP THAT CLOSED. ______________, ______________. One claim, one document, ______________ outcomes.**   **What I wrote / said in ______________: *______________.***   ⚠ **The act. On ______________ I ______________, to ______________. ______________, ______________, and no ______________.**   **Point** | **What I said** | **What happened**   **1** | **______________** | **______________**   **2** | **______________** | **______________**   ⚠ **3** | **______________** | ⚠ **refused, correctly. ______________, and I did not know ______________.**   ⚠ **What the refused point taught me. ______________. That is a different question from ______________, and I now ask it about ______________ a month.**   ⚠ **What I am not claiming. I am not claiming ______________, because ______________. I am claiming one thing: that ______________ exists, dated, with an outcome.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The old sentence quoted', ''],
  ['An act with a date, not a quality', ''],
  ['At least one refusal, with *correctly*', ''],
  ['The lesson as a question you now ask', ''],
  ['What you are NOT claiming', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their refusal row. ⚠ The class says of each whether the word *correctly* could honestly be written in it, and a refusal the writer still disputes is a different and longer document.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a thing you can do now that somebody once told you, or you once told yourself, you could not (**200 to 240 words**). Give the document, the date, the outcome, and the part you got wrong.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a document, with a date?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer name something they got wrong? ⚠ **Usually one of three** — **and the other two are more impressive and less believed, which the class can usually feel before it can say why.**'));
out.push(box('Homework', ['Write your final text. Then take one *improved* sentence of your own and rewrite it as an act, a reader, a date, an outcome and an error (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.3 =======================
out.push(pb());
out.push(h2('24.3  The gap that did not close, and whether the exercise was done'));
out.push(p('**Function:** reporting a failure of your own without an excuse   ·   **Grammar:** _I did not do X; I did it N times; the reason is Y, which is not an excuse_   ·   **Pronunciation:** an admission with no appeal in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you undertook to do regularly and did not. ⚠ Then say how many times you actually did it.'));
out.push(p('**b**  Which is the honest second answer? _I did not have time, things were very busy · I did it three times in two years; the reason is that it was the only one of the nine with no day in it and nobody to tell, and that is a reason and not an excuse_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say about the gap that did not close?   **A** that it was unrealistic   **B** that she still cannot do it, that she has the figure — four sentences in a four-and-a-half-hour hearing — and that the exercise meant to fix it was done three times in two years   **C** that it no longer matters'));
out.push(p('**b**  Listen again. **1** What is the difference she draws between a reason and an excuse? **2** Why does she say the second answer is harder than the first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  "Three times in two years"', [
  ['Nadia', 'The second claim. You cannot say in a room what you can write on a page.'],
  ['Nour', '⚠ **Still true, and now I have the figure.** ⚠ **Beirut, 7 April, four and a half hours, and I said four sentences. Ms Nahas said everything else and she said it from my own note.**'],
  ['Nadia', 'That is the first answer. What is the second?'],
  ['Nour', '(pause) ⚠ **The second answer is that undertaking six on the back of that page was to read one of my own documents aloud to somebody once a week, and I did it three times in two years.**'],
  ['Nadia', 'Three.'],
  ['Nour', '⚠ **Three. March 2026, twice, and once in the week before Beirut, which does not count because it was preparation and not practice.**'],
  ['Nadia', 'And the reason?'],
  ['Nour', '⚠ **The reason is that it was the only one of the nine with no day in it and nobody to tell.** ⚠ **Eight of the nine named a document or a date. That one said *make time for*, and I have spent two years teaching other people that a sentence like that obliges nobody** — **and I wrote it about myself and did not notice.**'],
  ['Nadia', 'Is that a reason or an excuse?'],
  ['Nour', '⚠ **It is a reason, and the test is whether it would have worked if the sentence had been written properly.** ⚠ **It would. The eight with days in them got done, four of them completely** — **so the sentence is the cause and *I was busy* is not, because I was equally busy for the other eight.**'],
  ['Nadia', 'Why is the second answer harder than the first?'],
  ['Nour', '⚠ **Because the first answer is about a limitation and the second is about me.** ⚠ **Four sentences in Beirut is a fact about my speaking.** **Three times in two years is a fact about whether I did the thing I said I would do** — **and nobody was ever going to ask, which is the whole reason the first line of that page was an instruction.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The gap that did not close: the first answer, and the second**',
  table(['', 'The answer', 'Here'], [
    ['**1 the state, with a figure**', '**what you still cannot do, measured**', '⚠ *four sentences in a four-and-a-half-hour hearing on 7 April*'],
    ['⚠ **2 the exercise**', '⚠ **whether the thing you undertook was done, and how many times**', '⚠ *three times in two years, and one of the three was preparation, not practice*'],
    ['**3 the reason**', '⚠ **the cause, not the circumstances**', '⚠ *it was the only one of the nine with no day in it and nobody to tell*'],
    ['⚠ **4 the test**', '⚠ **would the reason have held if the undertaking had been written properly?**', '⚠ **no** — **the eight with days in them got done, so the sentence is the cause and *I was busy* is not**'],
  ], [2.4, 3, 3.6]),
  '⚠ **The first answer is easy and almost everybody gives it.** ⚠ **It is about a limitation, it is often true, and it costs nothing** — ***I still find speaking difficult* is a sentence a room will accept with sympathy.**',
  '⚠ **The second answer is the one that matters: was the exercise ever done, and how many times?** ⚠ **It is a fact about you rather than about your English**, **and nobody was ever going to ask** — **which is why the instruction goes in the first line of the page.**',
  '⚠ **Give the figure, and do not round it up.** ⚠ *Three times in two years, and one of the three does not count.* **A figure with its disqualified instance is the most honest number available**, **and it is also the only one that tells you anything.**',
  '⚠ **Distinguish a reason from an excuse by a test and not by tone.** ⚠ **Would the reason have held if the undertaking had been written properly?** **If the answer is no, you have a reason; if the answer is yes, you have an excuse** — **and *I was busy* fails, because the writer was equally busy for the eight that got done.**',
  '⚠ **And notice what the reason here turns out to be.** ⚠ **The undertaking was written as a hope** — ***make time for*, with no day, no document and nobody watching** — **which is 23.4 applied to yourself two years before you were taught it.**',
  '**Practise:** Take something you undertook and did not do. Give the figure, then the reason, then run the test on the reason.',
  '**Useful phrases:**  still true, and now I have the figure  ·  three times in two years  ·  that one does not count  ·  a reason, not an excuse  ·  I was equally busy for the others',
  '**Pronunciation – an admission with no appeal in it.** 🔊 **Track 24.6** Listen twice. ⚠ **The first says *three times in two years* flatly and stops.** ⚠ **The second trails upward, waiting.** **Flat, the sentence is finished; trailing, it is asking to be told that is understandable, and somebody in the room will oblige, which ends the exercise.** Say it four times, flat, and stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a gap; B asks for the second answer.'));
out.push(dlg(null, [
  ['A', 'I still cannot __________.'],
  ['B', '⚠ **What is the figure?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the second answer. What did you undertake to do about it, and how many times did you do it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Do all of those count?**'],
  ['A', '__________.'],
  ['B', '⚠ **What is the reason? The cause, not the circumstances.**'],
  ['A', '__________.'],
  ['B', '⚠ **Would that reason have held if the undertaking had been written with a day in it?**'],
]));
out.push(table(['Role card 1 — I was busy', 'Role card 2 — the undertaking was unrealistic'], [[
  '⚠ **A offers lack of time as the reason.** ⚠ **B asks how many of the other eight undertakings were done.** ⚠ **B\'s point: four of eight completely and all eight attempted, in the same two years and the same workload** — **so being busy did not prevent eight things and cannot be the cause of the ninth, which makes it an excuse by the test rather than by anybody\'s judgement.**',
  '⚠ **A says once a week was never achievable and the undertaking was at fault.** ⚠ **B agrees that the undertaking was at fault and asks HOW.** ⚠ **B\'s point: not that the frequency was too high** — **once a month with a day and a person would have been done** — **it is that the sentence had no day, no document and nobody to tell, which is a drafting fault and not an ambition fault.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** give the second answer for one undertaking of your own, with the figure. ⚠ Then run the test on your reason, out loud, and say whether it survived.'));
out.push(PHRASE_CARD(['what is the figure?', 'how many times?', 'do they all count?', 'the cause, not the circumstances', 'would it have held with a day in it?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you undertook and did not do.'));
out.push(table(['The undertaking, as written', 'How many times, and which count', 'The reason', 'Does it survive the test'], [['', '', '', ''], ['', '', '', '']], [2.6, 2.4, 2.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I undertook to _______. I did it _______ times, of which _______ count. The reason is _______. And the test: _______ of my other undertakings got done in the same period, so the reason _______._'));
out.push(p('**Listener task:** count how many reasons survived the test. ⚠ Then ask how the surviving ones were written differently from the undertakings that got done.'));
out.push(p('**Board clinic:** your teacher writes four undertakings on the board — find the two that nobody could have been held to and say what each is missing. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE GAP THAT DID NOT CLOSE. N. Mansour, 14 December 2027. The first answer, the second answer, and the test.**',
  '**What I wrote on 11 December 2025: *I cannot say in a room what I can write on a page.***',
  '⚠ **The first answer. Still true, and I now have the figure. Beirut, 7 April 2027, a hearing of four and a half hours in which I said four sentences. Ms Nahas said everything else, from my own note of 2 April, which she had not amended.**',
  '⚠ **The second answer, which is the one this page is for. Undertaking 6 on the back of the 2025 page was to read one of my own documents aloud to somebody once a week. I did it three times in two years. Two in March 2026 and one in the week before Beirut, and the third does not count, because it was preparation for a specific hearing and not practice.**',
  table(['', 'The reason', 'Does it survive the test'], [
    ['⚠ **what I would have said**', '**I was busy, and the two years contained a branch reopening, an arbitration and a change of office manager**', '⚠ **No. Eight of the nine undertakings were attempted and four completed in the same two years and the same workload.** **Busy did not prevent eight things.**'],
    ['⚠ **what the reason actually is**', '⚠ **undertaking 6 was the only one of the nine with no day in it, no document in it and nobody to tell** — ***make time for the reading-aloud exercise***', '⚠ **Yes.** **Had it said *read one document aloud to Lina on the first Monday of each month*, it would have been done, because the eight written that way were.**'],
  ], [2.2, 4.2, 3.6]),
  '⚠ **What I find hardest to write down.** **I have spent two years teaching this office that a clause which obliges nobody is worth nothing** — **13.3, and I say it about twice a week.** ⚠ **And I wrote one about myself in December 2025 and did not recognise it when I read it back on Monday until I reached the third column of this table.**',
  '⚠ **What goes on the new page, and it is the only undertaking I am rewriting rather than replacing.** **Read one of my own documents aloud to Lina Barakat on the first Monday of each month, and she tells me on the day if I have not.** ⚠ **A day, a document, a person, and a reporting rule for silence** — **which is 23.4, and I have had the apparatus for fifteen months and had not once turned it on myself.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the third instance not count?'));
out.push(item('2', 'What is the reason that survives the test, and what is the evidence that it survives?'));
out.push(item('3', 'What does the writer find hardest to write down, and what does she do about it?'));
out.push(box('Writer\'s box', [
  '**The gap-that-did-not-close page — five parts:** ⚠ **the old sentence quoted** → ⚠ **the first answer, with a figure** → ⚠ **the second answer: the undertaking, the count, and which instances do not count** → ⚠ **a two-row table: what you would have said, and what the reason actually is, each tested** → ⚠ **and the rewritten undertaking.**',
  '⚠ **Give the first answer a figure, because without one it is a mood.** ⚠ *Four sentences in a hearing of four and a half hours.* **It is also the sentence that will be worth re-reading in two years, when the figure is different or is not.**',
  '⚠ **Make the second answer the body of the page.** ⚠ **The undertaking as written, the count, and the instances you disqualify** — **and disqualify them, because a count that includes preparation for one event is not a count of practice.**',
  '⚠ **Put the excuse in the table and test it, rather than leaving it out.** ⚠ *I was busy* **tested against** *eight of the nine were attempted in the same two years* **is more useful than a page that never mentions it** — **and every reader was going to think of it anyway.**',
  '⚠ **Name the drafting fault, not the character fault.** ⚠ *No day in it, no document in it and nobody to tell.* **It is checkable, it is fixable, and it is almost always the true cause** — **whereas a character fault cannot be acted on by Monday, which is 22.1 turned on yourself.**',
  '⚠ **And rewrite the undertaking rather than replacing it, in the four parts.** ⚠ *Read one document aloud to Lina Barakat on the first Monday of each month, and she tells me on the day if I have not.* **A day, a document, a person, a reporting rule** — **and if that is 23.4, say so, because noticing that you had the apparatus and never turned it on yourself is the finding of the cycle.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a gap-that-did-not-close page (**80 words or more**). Use the frame.'));
out.push(p('**THE GAP THAT DID NOT CLOSE. ______________, ______________. The first answer, the second answer, and the test.**   **What I wrote / said in ______________: *______________.***   ⚠ **The first answer. Still true, and the figure is ______________.**   ⚠ **The second answer. I undertook to ______________. I did it ______________ times, and ______________ of those does not count, because ______________.**   ⚠ **What I would have said** | **______________** | ⚠ **No, because ______________ of my other undertakings got done in the same period.**   ⚠ **What the reason actually is** | ⚠ **______________** | ⚠ **Yes. Had it said ______________, it would have been done.**   ⚠ **What I find hardest to write down. ______________.**   ⚠ **The rewritten undertaking. ______________, on ______________, and ______________ tells me on the day if I have not.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A figure in the first answer', ''],
  ['A count, with disqualified instances', ''],
  ['The excuse named and tested, not omitted', ''],
  ['A drafting fault, not a character fault', ''],
  ['The undertaking rewritten with a day, a person and a reporting rule', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their count. ⚠ The class asks of each whether every instance counts, and a count that survives the question unchanged is rare enough to be worth saying so.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you undertook two years ago and did not do (**200 to 240 words**). Give the count, the reason you would have given, the reason that survives the test, and how the undertaking was worded.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the reason survive the test?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the undertaking written without a day or a person? ⚠ **Usually all three** — **and the class should then look at what the writer DID do in the same period, which was nearly always the thing that had a date on it.**'));
out.push(box('Homework', ['Write your final text. Then take one undertaking of yours that was not kept, and rewrite it with a day, a document, a person and a reporting rule for silence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.4 =======================
out.push(pb());
out.push(h2('24.4  Counting what you said you would do'));
out.push(p('**Function:** auditing your own undertakings   ·   **Grammar:** _of N undertaken, M were done; my count is X and the file says Y_   ·   **Pronunciation:** a count read out without commentary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say how many things you undertook to do this year. ⚠ Then say how many you could prove you did.'));
out.push(p('**b**  Which is a count? _I did most of them, more or less · of the nine, eight were attempted and four completed; my count was four and the files support three, and the fourth is the disagreement_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happens when Nadia counts the same nine undertakings?   **A** she agrees   **B** she gets three where Nour got four, and the disagreement is about what *done* means for undertaking 2   **C** she refuses to count'));
out.push(p('**b**  Listen again. **1** Why does Nour ask somebody else to count? **2** What does Nadia say the disagreement is worth?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  "My count is four. Count it yourself"', [
  ['Nour', 'Nine undertakings. Eight attempted, four completed. My count is four.'],
  ['Nadia', 'And you want me to count it.'],
  ['Nour', '⚠ **I want you to count it from the documents, without my page in front of you.** ⚠ **Because a count of my own undertakings made by me is the least reliable count available, and the only one anybody ever does.**'],
  ['Nadia', '(reading) Three.'],
  ['Nour', 'Which one have you not allowed?'],
  ['Nadia', '⚠ **Number two. *Write a one-page note on every decision I take that costs over 100,000.*** ⚠ **There are eleven such decisions in the files for those two years and there are nine notes. You wrote nine notes and you took eleven decisions.**'],
  ['Nour', 'And I counted it as done because I wrote nine notes.'],
  ['Nadia', '⚠ **You counted the notes. The undertaking counted the decisions.** ⚠ **It is a real distinction and you would have made it instantly about anybody else\'s work** — **which is 22.2, and you withdrew three of eleven assessments in July for exactly this.**'],
  ['Nour', 'So the figure is three of nine.'],
  ['Nadia', '⚠ **The figure is three of nine, and the disagreement is worth more than the figure.** ⚠ **A count you make of yourself and a count made from the record will differ, and the gap between them is the only measurement of your own generosity to yourself that exists.**'],
  ['Nour', 'Mine is one in nine.'],
  ['Nadia', '⚠ **Which is low, and you should write that down too** — ⚠ **because next year you will want to know whether it has grown, and without this year\'s figure you will have nothing to compare it with.**'],
  ['Nour', 'And the two missing notes?'],
  ['Nadia', '⚠ **Write them now, dated now, saying they are being written now and why.** ⚠ **A note written eighteen months late and marked as late is worth having; a note written eighteen months late and dated as though it were not is the only thing on this list that would be worse than the omission.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The count against the count**',
  table(['', 'The move', 'Here'], [
    ['**1 your own count**', '**attempted and completed, separately**', '⚠ *nine undertaken, eight attempted, four completed*'],
    ['⚠ **2 somebody else\'s count**', '⚠ **from the record, without your page in front of them**', '⚠ *three* — **because the undertaking counted decisions and the writer counted notes**'],
    ['⚠ **3 the gap**', '⚠ **the measurement of your generosity to yourself**', '⚠ *one in nine, which is low, and write it down so that next year has something to compare with*'],
    ['⚠ **4 the remedy**', '⚠ **do the missing thing now, dated now, marked as late**', '⚠ **a late note marked as late is worth having; one back-dated is worse than the omission**'],
  ], [2.3, 3, 3.7]),
  '⚠ **A count of your own undertakings made by you is the least reliable count available, and the only one anybody ever does.** ⚠ **Ask somebody to count from the record instead, and do not give them your page** — **because your page contains your interpretation of the words.**',
  '⚠ **Separate attempted from completed.** ⚠ *Eight attempted, four completed* **says something** *I did most of them* **cannot**, **and the eight is the more encouraging figure of the two and the one people leave out.**',
  '⚠ **Expect the disagreement to be about what the undertaking counted.** ⚠ **The writer counted notes; the undertaking counted decisions** — **and that distinction is one anybody would make instantly about somebody else\'s work, which is why the second counter is necessary.**',
  '⚠ **Record the gap as a figure.** ⚠ *One in nine* **is the only measurement of your own generosity to yourself that exists**, **and it is worth nothing this year and a great deal next year** — **which is the argument for writing down a number whose use has not arrived yet.**',
  '⚠ **And do the missing thing now, marked as late.** ⚠ **A note written eighteen months late and dated today, saying why, is a record** — **one back-dated is a false document, and it is the only option on the list that is worse than having done nothing.**',
  '**Practise:** Count your undertakings. Then give the list to somebody else to count from the record, and name the gap.',
  '**Useful phrases:**  count it yourself  ·  attempted and completed  ·  the undertaking counted decisions  ·  the gap is one in nine  ·  dated now, and marked as late',
  '**Pronunciation – a count read out without commentary.** 🔊 **Track 24.8** Listen twice. ⚠ **The first says *three of nine* and stops.** ⚠ **The second adds *which I suppose is not bad in the circumstances*.** **The figure alone is a measurement; with the clause attached it is a case, and a reader who is handed a case stops trusting the figure.** Say it four times, and stop at the figure.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a list of undertakings; B counts.'));
out.push(dlg(null, [
  ['A', 'I undertook __________ things and I think I did __________.'],
  ['B', '⚠ **How many were attempted, and how many completed?**'],
  ['A', '__________.'],
  ['B', '⚠ **Read me undertaking __________ in the words you wrote it in.**'],
  ['A', '__________.'],
  ['B', '⚠ **What does it count? Notes, or decisions? Occasions, or months?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then by that wording, how many?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what is the gap between your figure and that one?**'],
]));
out.push(table(['Role card 1 — I know what I did', 'Role card 2 — I will date the late note properly'], [[
  '⚠ **A sees no need for a second counter, having been present for all of it.** ⚠ **B asks who counted the eleven decisions.** ⚠ **B\'s point: being present is what makes the count unreliable** — **the writer remembers writing nine notes and does not remember the two decisions that got none, because nothing happened on those days that would be memorable, which is Unit 18 in reverse.**',
  '⚠ **A proposes to write the two missing notes and date them to the decisions they describe.** ⚠ **B asks what the file then says.** ⚠ **B\'s point: that the notes were written at the time, which is false, and the falsity is discoverable from any other document of that week** — **so a back-dated note converts an omission into the one thing in this unit that could end a career, and a note dated today and marked as late costs nothing.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** give your own count and then your partner\'s count of the same list. ⚠ Then name the gap as a figure, and say which word in the undertaking the disagreement turned on.'));
out.push(PHRASE_CARD(['attempted or completed?', 'read it in your own words', 'what does it count?', 'what is the gap?', 'dated now, marked as late']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** sets of undertakings, yours or your department\'s.'));
out.push(table(['The set, and how many', 'My count', 'The count from the record', 'The gap, and the word it turned on'], [['', '', '', ''], ['', '', '', '']], [2.2, 1.4, 2.4, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I undertook _______ things. My count was _______, attempted _______ and completed _______. Counted from the record it is _______. The gap is _______, and it turned on the word _______._'));
out.push(p('**Listener task:** count how many of the gaps were in the writer\'s favour. ⚠ Then ask whether anybody\'s count from the record was HIGHER than their own, and expect one in a class, and expect it to be interesting.'));
out.push(p('**Board clinic:** your teacher writes four undertakings on the board — say for each one exactly what it counts, and find the two that could be satisfied without the thing happening. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE NINE UNDERTAKINGS OF 11 DECEMBER 2025, COUNTED TWICE. N. Mansour, 14 December 2027. My count four. The count from the record three. The gap is one in nine.**',
  table(['', 'As written in 2025', 'Mine', 'From the record'], [
    ['**1**', '**read every contract the firm signs, in full, before it is signed**', '**done**', '⚠ **done** — **seven contracts, seven file notes**'],
    ['⚠ **2**', '⚠ **write a one-page note on every decision I take that costs over 100,000**', '⚠ **done**', '⚠ **not done** — **eleven such decisions, nine notes.** **I counted the notes; the undertaking counted the decisions.**'],
    ['**3**', '**answer every letter from outside the firm within three working days**', '**done**', '**done**'],
    ['**4**', '**keep the obligations register current to the quarter**', '**done**', '**done**'],
    ['**5**', '**ask one question in every meeting I attend in Arabic and in English**', '**not done**', '**not done, and not measurable as written**'],
    ['⚠ **6**', '⚠ ***make time for the reading-aloud exercise***', '**not done**', '⚠ **three times in two years.** **See 24.3.**'],
    ['**7**', '**never sign a figure I have not seen the basis of**', '**not done**', '⚠ **two breaches, both in March 2026, both mine, both recorded by me at the time**'],
    ['**8**', '**learn what a term of art is before calling a sentence unclear**', '**not done**', '⚠ **attempted and now habitual.** **Not completed in 2026; see 24.2, point 4.**'],
    ['**9**', '**write to my C1 self in December 2027**', '**in progress**', '⚠ **being done today.** **See 24.6.**'],
  ], [0.5, 4.3, 1.1, 3.1]),
  '⚠ **The gap, and why I am recording it as a figure.** **One of nine, in my own favour, and the disagreement was about a single word.** ⚠ **It is worth nothing this year. Next December it is the only thing I will have to compare with, and a generosity of one in nine that has become three in nine is a finding** — **so the figure goes down even though it is useless today.**',
  '⚠ **The two missing notes.** **The decisions of 3 March 2026 and 18 October 2026, both over 100,000, both taken, neither written up.** ⚠ **I have written both today, dated today, each headed *written 14 December 2027, eighteen months late, because I did not do it at the time*.** **A late note marked as late is a record. A late note dated to the decision is a false document, and it is the only choice on this page that would be worse than the omission.**',
  '⚠ **And undertaking 5, which the record says is not measurable as written.** ⚠ *Ask one question in every meeting I attend* **has no record anywhere and never could have had** — **so it is not that I failed it, it is that nobody could ever have told, which puts it with undertaking 6 and makes two of the nine badly drafted rather than badly kept.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why do the two counts differ on undertaking 2?'));
out.push(item('2', 'What has the writer done about the two missing notes, and what does she say the alternative would have been?'));
out.push(item('3', 'What is wrong with undertaking 5, and which other undertaking does she put with it?'));
out.push(box('Writer\'s box', [
  '**The counted-twice page — five parts:** ⚠ **the two figures and the gap in the heading** → ⚠ **a four-column table: as written · mine · from the record · with the reason for every difference** → ⚠ **the gap recorded as a figure, with why you are recording it** → ⚠ **what you are doing now about what was not done** → ⚠ **and the undertakings that were badly drafted rather than badly kept.**',
  '⚠ **Put both figures and the gap in the heading.** ⚠ *My count four. The count from the record three. The gap is one in nine.* **A reader who has those three numbers in the first line reads the table as evidence rather than as a list.**',
  '⚠ **Quote the undertakings as written, including the bad ones, in italics.** ⚠ ***Make time for the reading-aloud exercise.*** **Tidying it conceals the finding** — **and two of these nine turn out to be drafting faults, which you cannot show if you have rewritten them.**',
  '⚠ **Give a reason in the record column for every difference, in one line.** ⚠ *I counted the notes; the undertaking counted the decisions.* **One line, and it is the most instructive sentence on the page** — **because it is a distinction the writer would have made instantly about anybody else.**',
  '⚠ **Record the gap as a figure and say openly that it is useless this year.** ⚠ *Next December it is the only thing I will have to compare with.* **Writing down a number whose use has not arrived is the habit this whole unit is about**, **and the first such number is always the one that feels pointless.**',
  '⚠ **And do the missing thing now, dated now, headed as late.** ⚠ ***Written 14 December 2027, eighteen months late, because I did not do it at the time.*** **Fifteen words, and they convert an omission into a record** — **where a back-dated note would convert it into the only unrecoverable thing in this unit.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a counted-twice page for your own undertakings (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ UNDERTAKINGS OF ______________, COUNTED TWICE. ______________, ______________. My count ______________. The count from the record ______________. The gap is ______________.**   **As written** | **Mine** | ⚠ **From the record**   ⚠ **_______________* | ______________ | ______________**   ⚠ **_______________* | ______________ | ⚠ **______________, because ______________**   ⚠ **The gap, and why I am recording it as a figure. ______________. It is worth nothing this year. Next ______________ it is the only thing I will have to compare with.**   ⚠ **What was not done, and what I am doing now. ______________, dated today, headed *written ______________, ______________ late, because ______________*.**   ⚠ **And the undertakings that were badly drafted rather than badly kept. ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both figures and the gap, in the heading', ''],
  ['Undertakings quoted as written, bad ones included', ''],
  ['A reason in one line for every difference', ''],
  ['The gap recorded as a figure, with why', ''],
  ['Anything late done now, dated now, headed as late', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their heading. ⚠ The class says of each whether the gap is in the writer\'s favour, and a heading with only one figure in it has not done the exercise.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a set of undertakings you or your department gave (**200 to 240 words**). Give your count and a count from the record, say which word the difference turned on, and say what you are doing about what was not done.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who made the second count?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was there a second count at all? ⚠ **Usually none** — **and the class should notice that the second counter is free, available in any office, and never asked.**'));
out.push(box('Homework', ['Write your final text. Then take one set of undertakings, count it, give the list to somebody else to count from the record, and write down the gap (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.5 =======================
out.push(pb());
out.push(h2('24.5  What you will be answerable for, written before it starts'));
out.push(p('**Function:** defining a responsibility you have not yet taken   ·   **Grammar:** _from X I am answerable for Y; I am not answerable for Z_   ·   **Pronunciation:** a responsibility stated without flinching'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you will be responsible for next year that you are not responsible for now. ⚠ Then say who else thinks they are responsible for it.'));
out.push(p('**b**  Which is written before it starts? _I will take on broader responsibilities in the new year · from 1 April I am answerable for the Homs branch as well as Damascus: its takings, its staffing and its certification; I am not answerable for its lease, which is Mr Sayegh\'s_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour want the new responsibility written down in December rather than in April?   **A** for her own file   **B** because a responsibility written after it starts is written to fit what has already happened, and because two people currently believe they are answerable for the Homs takings   **C** Mr Sayegh asked for it'));
out.push(p('**b**  Listen again. **1** What three things does she say such a document must contain? **2** What does Mr Sayegh add that she had not put in?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  "Written in December, not in May"', [
  ['Mr Sayegh', 'From April you have Homs as well. You want that on paper now.'],
  ['Nour', '⚠ **In December, not in May. A responsibility written down after it has started is written to fit what has already happened** — **and by May something will have happened.**'],
  ['Mr Sayegh', 'And what does it have to say?'],
  ['Nour', '⚠ **Three things.** ⚠ **One: what I am answerable for, itemised. The takings, the staffing and the certification of the Homs branch from 1 April.** ⚠ **Two: what I am NOT answerable for, itemised, which is the half nobody writes. The lease, which is yours, and the opening stock valuation, which was fixed in March before I had it.** ⚠ **Three: who else currently believes they are answerable for each item.**'],
  ['Mr Sayegh', 'And does anybody?'],
  ['Nour', '⚠ **Two people believe they are answerable for the Homs takings.** ⚠ **Bassel, because he ran the reopening and has reported them weekly since April, and me, from the first of next April** — **and neither of us has said so to the other, which is how it would have stayed until the first bad month.**'],
  ['Mr Sayegh', 'So the document is partly for Bassel.'],
  ['Nour', '⚠ **The document is mostly for Bassel, and that is why it goes to him before it goes in the file.** ⚠ **A definition of my responsibilities that he reads for the first time in a disagreement is worth less than no definition at all** — **which is 23.7, four months later and inside the firm.**'],
  ['Mr Sayegh', '⚠ **Then let me add the thing you have not put in, which is the hardest of the four.** ⚠ **What you are answerable for that you cannot control.** **The Homs takings depend on a pharmacy opposite that may or may not stay open, and on a certification programme the Directorate may change again.**'],
  ['Nour', 'And I am answerable for them anyway.'],
  ['Mr Sayegh', '⚠ **You are, and the document should say so in your own words rather than leaving it to be discovered.** ⚠ **Because the week the takings fall, the useful sentence is not an explanation** — **it is a sentence you wrote in December saying that this was foreseeable and that you accepted it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A responsibility written before it starts: four parts**',
  table(['', 'The part', 'Here'], [
    ['**1 what you are answerable for**', '**itemised, from a date**', '⚠ *the Homs takings, staffing and certification, from 1 April*'],
    ['⚠ **2 what you are NOT**', '⚠ **itemised, and this is the half nobody writes**', '⚠ *the lease, which is Mr Sayegh\'s; the opening stock valuation, fixed in March*'],
    ['⚠ **3 who else believes they are**', '⚠ **by name, per item**', '⚠ *Bassel, for the takings, since April* — **and neither had said so to the other**'],
    ['⚠ **4 what you cannot control**', '⚠ **and are answerable for anyway**', '⚠ *the pharmacy opposite; a requirement the Directorate may change* — **written in December so that it is not an explanation in September**'],
  ], [2.6, 3, 3.4]),
  '⚠ **Write it before it starts.** ⚠ **A responsibility written down after it has begun is written to fit what has already happened** — **and something always has.**',
  '⚠ **The *not answerable for* half is the one that gets left out and the one that protects everybody.** ⚠ **It is also the half that is read with relief by the person who IS answerable for those items**, **because it tells them you are not coming for them.**',
  '⚠ **Name who else believes they are answerable, per item.** ⚠ **Two people believing they own the same figure is the ordinary state of a handover**, **and it holds quietly until the first bad month, when it becomes a disagreement about history.**',
  '⚠ **Send it to those people BEFORE it goes in the file.** ⚠ **A definition of your responsibilities that a colleague reads for the first time in a disagreement is worth less than no definition at all** — **which is 23.7 moved inside the firm.**',
  '⚠ **And write down what you cannot control and are answerable for anyway.** ⚠ **The week the figure falls, the useful sentence is not an explanation** — **it is a sentence you wrote months earlier saying this was foreseeable and that you accepted it**, **and an explanation written afterwards reads as one however true it is.**',
  '**Practise:** Take a responsibility starting soon. Write all four parts, and name the person who also thinks they own it.',
  '**Useful phrases:**  in December, not in May  ·  what I am not answerable for  ·  who else believes they are  ·  before it goes in the file  ·  this was foreseeable and I accepted it',
  '**Pronunciation – a responsibility stated without flinching.** 🔊 **Track 24.10** Listen twice. ⚠ **The first says *the takings depend on a pharmacy that may close, and I am answerable for them anyway* evenly, as a term of the job.** ⚠ **The second pauses before *anyway*.** **Even, it is an acceptance; paused, it is a protest, and a protest written in December is an excuse already filed.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a new responsibility; B works the four parts.'));
out.push(dlg(null, [
  ['A', 'From __________ I will be responsible for __________.'],
  ['B', '⚠ **Itemise it. Which figures, which people, which processes?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now the other half. What are you NOT answerable for?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who else currently believes they are answerable for each item?**'],
  ['A', '__________.'],
  ['B', '⚠ **Have you told them? Before the file, not after.**'],
  ['A', '__________.'],
  ['B', '⚠ **And what will you be answerable for that you cannot control?**'],
]));
out.push(table(['Role card 1 — it will be obvious in practice', 'Role card 2 — writing the uncontrollable part looks like hedging'], [[
  '⚠ **A believes the split will become clear once the job starts.** ⚠ **B asks what happens in the first month when the Homs takings fall.** ⚠ **B\'s point: it will become clear, in a disagreement, about the past** — **and two people who each believed they owned a figure will then each be arguing a reconstruction, which is Unit 18\'s whole subject arriving as a personnel dispute.**',
  '⚠ **A thinks naming what cannot be controlled reads as an excuse prepared in advance.** ⚠ **B asks when an explanation reads as an excuse.** ⚠ **B\'s point: afterwards, always, however true** — **and a foreseeable dependency written down in December, accepted in terms, is the only version of that sentence that is not an excuse, which is 23.4\'s falsifying condition pointed at a responsibility.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** name a responsibility starting soon and the thing you are NOT answerable for. ⚠ Then name the person who also believes they own one of your items, and say whether you have told them.'));
out.push(PHRASE_CARD(['itemise it', 'what are you not answerable for?', 'who else believes they are?', 'have you told them?', 'and what cannot you control?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** responsibilities that will start, or have just started.'));
out.push(table(['Answerable for, from when', 'NOT answerable for', 'Who else believes they are', 'What I cannot control'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.2, 2.4, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _From _______ I am answerable for _______. I am not answerable for _______, which is _______\'s. _______ also believes they are answerable for _______, and I have / have not told them. And what I cannot control is _______._'));
out.push(p('**Listener task:** count how many had written the *not answerable for* half before today. ⚠ Then ask how many had told the other claimant, and expect almost nobody.'));
out.push(p('**Board clinic:** your teacher writes four responsibility statements on the board — find the two with no *not answerable for* half and supply one for each. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the document, and answer the questions.'));
out.push(box(null, [
  '**THE HOMS BRANCH FROM 1 APRIL 2028: WHAT I AM ANSWERABLE FOR. N. Mansour, 14 December 2027. To K. Sayegh and B. Nassif. To Bassel first, and to the file afterwards.**',
  table(['', 'Item', 'From', 'Who else has owned it'], [
    ['**1**', '**the Homs takings, weekly and monthly**', '**1 April 2028**', '⚠ **B. Nassif, since 1 April 2027, who has reported them weekly for a year** — **and this is the item this document exists for**'],
    ['**2**', '**the Homs staffing, including the counter rota**', '**1 April 2028**', '**B. Nassif**'],
    ['**3**', '**certification of Homs consignments under the 3 September notice**', '**immediately**', '⚠ **nobody; it was mine from the start and the Homs element was never written down separately**'],
    ['⚠ **4**', '⚠ **NOT the lease, the rent review of July 2029, or anything touching the landlord**', '**—**', '⚠ **K. Sayegh, and it stays his** — **I have no view and will not be asked for one**'],
    ['⚠ **5**', '⚠ **NOT the opening stock valuation, which was fixed on 11 March 2028 before I had the branch**', '**—**', '⚠ **B. Nassif and the auditors** — **if it is questioned, it is not mine to answer**'],
  ], [0.5, 4, 1.3, 3.2]),
  '⚠ **Why this is dated December and not April.** **A responsibility written down after it has started is written to fit what has already happened, and by April something will have happened.** ⚠ **Nothing in this document is yet true, which is the only condition in which I can write it honestly.**',
  '⚠ **Why Bassel gets it before the file does.** **Item 1 has two owners who have never said so to each other. He has reported those takings for a year and I take them on 1 April** ⚠ **and the version of this conversation that happens in the first bad month is a conversation about the past, which neither of us would win.**',
  '⚠ **What I am answerable for and cannot control, named now.** **The Homs takings depend on the pharmacy opposite, which has a lease to 2029 and a proprietor of sixty-eight; and on a certification requirement the Directorate has amended twice in eleven years and could amend again.** ⚠ **Both are foreseeable, neither is mine to decide, and I am answerable for the takings regardless.** **I accept that, in December, in writing, so that it is not an explanation in September.**',
  '⚠ **And one thing I am asking for rather than stating.** **That item 1 transfers on 1 April and not gradually.** ⚠ **A figure with two owners for a quarter is a figure with none** — **and the date matters more than which of us it is.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the document dated December, and what does the writer say is the only condition in which she can write it honestly?'));
out.push(item('2', 'Why does Bassel receive it before the file does?'));
out.push(item('3', 'What is the one thing she asks for rather than states, and what reason does she give?'));
out.push(box('Writer\'s box', [
  '**The written-before-it-starts document — five parts:** ⚠ **a numbered table: item · from when · who else has owned it** → ⚠ **the NOT-answerable items in the same table, numbered with the rest** → ⚠ **why it is dated before the start** → ⚠ **why the other claimant receives it first** → ⚠ **what you cannot control and accept anyway** → ⚠ **and one thing you ask for rather than state.**',
  '⚠ **Number the NOT items in the same sequence as the rest.** ⚠ **A separate list headed *exclusions* reads as a negotiation; items 4 and 5 in the same table read as the definition** — **and the person who owns them reads them with relief.**',
  '⚠ **Give the *who else has owned it* column, by name and by date.** ⚠ *B. Nassif, since 1 April 2027, who has reported them weekly for a year.* **It is the column that makes the document necessary**, **and without it this is a job description.**',
  '⚠ **Say why it is dated early, in one sentence that is about documents rather than about you.** ⚠ *Nothing in this document is yet true, which is the only condition in which I can write it honestly.* **It also tells a reader in five years why to trust it, which is 18.1.**',
  '⚠ **Write the uncontrollable dependencies with their particulars.** ⚠ *A pharmacy with a lease to 2029 and a proprietor of sixty-eight.* **Particulars make a dependency a fact; without them it is a hedge** — **and then accept it in terms, in the present tense, so that September has nothing to add.**',
  '⚠ **And end with one request, marked as a request.** ⚠ *That item 1 transfers on 1 April and not gradually. A figure with two owners for a quarter is a figure with none.* **One request in a document of definitions is read; three turn the document into a bid.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a written-before-it-starts document (**80 words or more**). Use the frame.'));
out.push(p('**______________ FROM ______________: WHAT I AM ANSWERABLE FOR. ______________, ______________. To ______________ first, and to the file afterwards.**   **Item** | **From** | ⚠ **Who else has owned it**   **1  ______________** | **______________** | ⚠ **______________, since ______________**   **2  ______________** | **______________** | **______________**   ⚠ **3  NOT ______________** | **—** | ⚠ **______________, and it stays theirs**   ⚠ **Why this is dated ______________ and not ______________. ______________. Nothing in this document is yet true, which is the only condition in which I can write it honestly.**   ⚠ **Why ______________ gets it before the file does. ______________.**   ⚠ **What I am answerable for and cannot control. ______________, and ______________. Both are foreseeable, neither is mine to decide, and I am answerable regardless. I accept that, in writing, now.**   ⚠ **And one thing I am asking for rather than stating. ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['NOT items numbered in the same table', ''],
  ['A *who else has owned it* column, by name and date', ''],
  ['A reason for the early date, about documents', ''],
  ['Uncontrollable dependencies with particulars, accepted in terms', ''],
  ['Exactly one request, marked as one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their NOT items. ⚠ The class says of each who will read that line with relief, and a document with nobody in that position has probably not found the real exclusions.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a responsibility that was never written down before it started (**200 to 240 words**). Say who else believed they owned it, when the disagreement came, and what a document written in advance would have settled.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who else thought they owned it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did two people believe they owned the same thing? ⚠ **Usually two of three** — **and in none of them had either person ever said so to the other, which is the ordinary state of a handover and is why this cycle exists.**'));
out.push(box('Homework', ['Write your final text. Then take one responsibility starting soon and write the four parts, including what you cannot control and accept anyway (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.6 =======================
out.push(pb());
out.push(h2('24.6  The letter to your C1 self, and the reader you arrange'));
out.push(p('**Function:** writing one document for one reader two years away   ·   **Grammar:** _by the time you read this, X; if Y, then Z_   ·   **Pronunciation:** an instruction to yourself, read as an instruction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you would want to be asked about in two years. ⚠ Then say who would have to ask it, and whether they know.'));
out.push(p('**b**  Which is a usable first line? _I hope that by now you have achieved everything you set out to do · before you read the rest of this, take the four claims on the back, and write beside each one the document that proves it or the word NONE_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour do differently in the C1 letter?   **A** nothing   **B** every claim is written as a claim with a named document or the word NONE, the undertakings have days and people, and she arranges the reader in advance rather than hoping   **C** she writes it longer'));
out.push(p('**b**  Listen again. **1** What does she say the 2025 letter got right? **2** Who is the reader she arranges, and what exactly is that person asked to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  "One reader, and she has agreed"', [
  ['Nadia', 'Fourteen new envelopes. What have you changed?'],
  ['Nour', '⚠ **Three things, and the first line is not one of them.** ⚠ **The 2025 letter got the first line right** — **an instruction rather than a greeting, and it is the only reason I did the count at all.** **I have kept it and made it harder.**'],
  ['Nadia', 'Harder how?'],
  ['Nour', '⚠ **It says: take the four claims on the back and write beside each one the document that proves it, or the word NONE.** ⚠ **NONE in capitals, because that is the answer I will want to blur.**'],
  ['Nadia', 'And the second change?'],
  ['Nour', '⚠ **Every undertaking has a day, a document and a person.** ⚠ **Nine in 2025 and two of them could not have been kept by anybody.** **Five this time, and each one could be audited by somebody who had never met me.**'],
  ['Nadia', 'Five rather than nine.'],
  ['Nour', '⚠ **As many as I have days for, and not one more** — **which I learnt in September about certification conditions and am applying in December to myself.**'],
  ['Nadia', 'And the third?'],
  ['Nour', '⚠ **The third is the one I would not have thought of two years ago. A sealed letter has no reader.** ⚠ **It goes in a drawer and it depends entirely on somebody remembering to bring the drawer** — **and if nobody does, the best letter in that envelope is a page nobody ever opens.**'],
  ['Nadia', 'So you arrange one.'],
  ['Nour', '⚠ **Lina. She has agreed, and what she has agreed is specific: on the first working day of December 2029 she asks me for the envelope and stays while I open it.** ⚠ **Not reminds me. Asks me for it, and stays** — **because being reminded of an envelope is something I can thank somebody for and postpone.**'],
  ['Nadia', 'And if she has left the firm?'],
  ['Nour', '⚠ **Then she has agreed to send one message from wherever she is, and that is in the letter too, in her handwriting, under her name.** ⚠ **It is the only line in the envelope written by somebody else, and it is the line that makes the rest of it a document rather than a hope.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The letter to your next self: four things, and the fourth is a person**',
  table(['', 'The part', 'Here'], [
    ['**1 a first line that instructs**', '**not a greeting**', '⚠ *take the four claims on the back and write beside each one the document that proves it, or the word NONE*'],
    ['**2 claims, not hopes**', '**each with a document or NONE**', '⚠ **NONE in capitals, because it is the answer the writer will want to blur**'],
    ['⚠ **3 undertakings with a day, a document and a person**', '⚠ **as many as you have days for, not one more**', '⚠ *five, where 2025 had nine and two of the nine could not have been kept by anybody*'],
    ['⚠ **4 a reader, arranged**', '⚠ **a named person with a specific act and a date**', '⚠ *on the first working day of December 2029 Lina asks me for the envelope and stays while I open it* — **in her handwriting, under her name**'],
  ], [2.9, 3, 3.1]),
  '⚠ **Keep the instruction in the first line, and make it harder than last time.** ⚠ **You are writing to somebody busy, slightly embarrassed and well disposed towards you**, **and the only defence against that reader is an instruction they can carry out before they have had a feeling.**',
  '⚠ **Make the answer you will want to avoid a single word in capitals.** ⚠ *The document that proves it, or the word NONE.* **A page that permits a paragraph where NONE belongs will receive a paragraph** — **and a paragraph in that position is always an explanation.**',
  '⚠ **Give every undertaking a day, a document and a person, and write fewer of them.** ⚠ **Five that can be audited by somebody who has never met you beats nine of which two could not have been kept** — **which is 23.4\'s *as many as you have watchers* turned on yourself.**',
  '⚠ **And arrange the reader, because a sealed letter has none.** ⚠ **It depends on somebody remembering to bring the drawer**, **and the best letter in the envelope is a page nobody opens.**',
  '⚠ **Specify the act, not the reminder.** ⚠ *She asks me for the envelope and stays while I open it.* **Being reminded of an envelope is something you can thank somebody for and postpone** — **being asked for it in front of the person who asked is not.**',
  '**Practise:** Write your first line as an instruction, then one undertaking with a day, a document and a person, then name your reader and the act they have agreed to.',
  '**Useful phrases:**  or the word NONE  ·  a day, a document and a person  ·  as many as I have days for  ·  a sealed letter has no reader  ·  she asks me for it and stays',
  '**Pronunciation – an instruction to yourself.** 🔊 **Track 24.12** Listen twice. ⚠ **The first reads *write beside each one the document that proves it, or the word NONE* as a flat instruction.** ⚠ **The second softens on *or the word NONE*.** **Flat, it is a procedure; softened, it is permission, and the reader in two years will take the permission.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is drafting the letter; B tests it.'));
out.push(dlg(null, [
  ['A', 'My first line is __________.'],
  ['B', '⚠ **Is that an instruction or a greeting?**'],
  ['A', '__________.'],
  ['B', '⚠ **Read me one claim. What proves it, or is the answer NONE?**'],
  ['A', '__________.'],
  ['B', '⚠ **Read me one undertaking. What is the day, the document and the person?**'],
  ['A', '__________.'],
  ['B', '⚠ **How many undertakings, and how many days do you have?**'],
  ['A', '__________.'],
  ['B', '⚠ **And who opens this with you? Named, and have they agreed?**'],
]));
out.push(table(['Role card 1 — a sealed letter is private', 'Role card 2 — nine undertakings shows ambition'], [[
  '⚠ **A objects that arranging a reader destroys the privacy of a letter to oneself.** ⚠ **B asks what the reader is asked to read.** ⚠ **B\'s point: nothing** — **Lina asks for the envelope and stays while it is opened, and never sees a word of it, so the privacy is intact and the only thing added is that the envelope gets opened at all.**',
  '⚠ **A wants nine or ten undertakings in the new letter as a statement of intent.** ⚠ **B asks how many of the 2025 nine were completed.** ⚠ **B\'s point: three** — **and two of the nine could not have been kept by anybody, so the nine produced three and a page the writer was embarrassed by, where five auditable ones would have produced five, and 23.4 says the number should equal the number of days you have.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** read out your first line and one undertaking. ⚠ Then name your reader, the act they have agreed to, and the date. ⚠ Then say whether you have actually asked them yet.'));
out.push(PHRASE_CARD(['instruction or greeting?', 'what proves it, or NONE?', 'day, document, person', 'how many days do you have?', 'who opens it with you?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draft the four parts of your own letter.'));
out.push(table(['My first line, as an instruction', 'One claim, and what proves it', 'One undertaking: day, document, person', 'My reader: name, act, date'], [['', '', '', '']], [2.4, 2.2, 2.4, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My first line says _______. One claim is _______, and what proves it is _______ / NONE. One undertaking is _______, on _______, with _______. And _______ has agreed to _______ on _______._'));
out.push(p('**Listener task:** count how many first lines were instructions rather than greetings. ⚠ Then count how many readers had actually been asked, as opposed to chosen.'));
out.push(p('**Board clinic:** your teacher writes four first lines on the board — find the three that are greetings and rewrite each as an instruction. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO N. MANSOUR, DECEMBER 2029. Sealed 14 December 2027. One page. One reader.**',
  '⚠ **Before you read the rest of this: take the four claims on the back, and write beside each one the document that proves it, or the word NONE. In capitals. Do that first, and do not begin by deciding how you feel about this page.**',
  '**The four claims, as at December 2027.**',
  '**1  I can read a 2,500-word regulation and say in one line what it requires of us, of whom, and from when. Proof: the note of 8 September 2027.**',
  '**2  I can write to an authority asking only for things it has the power to grant. Proof: the letter of 12 September 2027 and the answer of 21 September.**',
  '⚠ **3  I cannot say in a room what I can write on a page. Proof: Beirut, 7 April 2027, four sentences in four and a half hours.** **If this one has changed, the proof will be a date and a number and not a feeling.**',
  '⚠ **4  I am generous to myself by about one in nine when I count my own undertakings. Proof: this year\'s double count, 14 December 2027.** ⚠ **Count again. If the figure has grown, that is the most important sentence in this envelope.**',
  '**The five undertakings. Each has a day, a document and a person.**',
  '⚠ **1  Read one of my own documents aloud to L. Barakat on the first Monday of each month. She tells me on the day if I have not.**  **2  Write a one-page note on every DECISION over 100,000 — decisions, not notes — and have N. Sayegh count them in December each year.**  **3  Count my own undertakings and have somebody else count them from the record, every December.**  **4  Before 1 April 2028, send B. Nassif the Homs responsibility document and get his answer in writing.**  **5  Say in any meeting where I disagree, once, in the first ten minutes, and write the sentence down beforehand.**',
  '⚠ **And the reader. L. Barakat has agreed that on the first working day of December 2029 she will ask me for this envelope and stay in the room while I open it. If she is no longer at Sham Trading she has agreed to send one message from wherever she is. Her line is below, in her hand.**',
  '⚠ ***I have agreed to this. If I am not here I will write. L. Barakat, 14 December 2027.***',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does claim 3 say the proof will be if it has changed?'));
out.push(item('2', 'What is different about undertaking 2 compared with its 2025 version?'));
out.push(item('3', 'What exactly has the reader agreed to, and what happens if she has left the firm?'));
out.push(box('Writer\'s box', [
  '**The letter to your next self — five rules:** ⚠ **an instructing first line, with the capitalised word you will want to avoid** → ⚠ **numbered claims, each with its proof or NONE** → ⚠ **undertakings with a day, a document and a person, as few as you have days for** → ⚠ **the one claim whose change you most want to detect, with instructions for measuring it** → ⚠ **and a reader who has agreed, in their own hand.**',
  '⚠ **Number the claims and put the proof in the same line.** ⚠ *Proof: the note of 8 September 2027.* **A claim with its proof beside it can be checked in two years by somebody who was not there** — **which is the whole of 24.2 compressed into one line per claim.**',
  '⚠ **Correct the undertaking the record disallowed, in the letter, in capitals.** ⚠ *Every DECISION over 100,000 — decisions, not notes.* **The word that the double count turned on goes in capitals, because it is the one your future self will read the old way.**',
  '⚠ **Name the sentence you most want to find changed, and say how to measure it.** ⚠ *If this one has changed, the proof will be a date and a number and not a feeling.* **It is the one instruction that will be hardest to follow and the one that makes the envelope worth opening.**',
  '⚠ **Keep the undertakings to the number of days you actually have.** ⚠ **Five auditable by a stranger beats nine of which two could not have been kept** — **and a letter whose undertakings cannot be audited is a letter that will produce another count of three.**',
  '⚠ **And get the reader\'s line in their own handwriting, under their name and the date.** ⚠ ***I have agreed to this. If I am not here I will write.*** **It is the only line in the envelope not written by you**, **and it is what converts a private page into a document with a reader, a date and an obligation on somebody else.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own sealed letter (**80 words or more**). Use the frame.'));
out.push(p('**TO ______________, ______________. Sealed ______________. One page. One reader.**   ⚠ **Before you read the rest of this: ______________. In capitals. Do that first, and do not begin by deciding how you feel about this page.**   **The claims, as at ______________.**   **1  ______________. Proof: ______________ / NONE.**   **2  ______________. Proof: ______________ / NONE.**   ⚠ **3  ______________. If this one has changed, the proof will be ______________ and not a feeling.**   **The undertakings. Each has a day, a document and a person.**   ⚠ **1  ______________, on ______________, and ______________ tells me if I have not.**   ⚠ **2  ______________, and ______________ counts them in ______________ each year.**   ⚠ **And the reader. ______________ has agreed that on ______________ they will ask me for this envelope and stay while I open it. If they are no longer here they have agreed to ______________.**   ⚠ ***I have agreed to this. ______________, ______________.***'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line that instructs, with a capitalised word', ''],
  ['Every claim with a proof or NONE', ''],
  ['Every undertaking with a day, a document and a person', ''],
  ['The claim whose change matters most, with how to measure it', ''],
  ['A named reader who has agreed, in their own hand', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their reader\'s line. ⚠ The class says of each whether the act is specific enough to be refused. ⚠ **A reader who has agreed to *remind* has agreed to nothing.**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the covering page you would want found with your letter if you never opened it yourself (**200 to 240 words**). Say who should open it, what it is for, and what they should do with the four claims.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _has the reader actually agreed?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the reader been asked rather than nominated? ⚠ **Usually one of three** — **and the two who nominated somebody should be sent to ask them before the end of the lesson, because it takes a minute and it is the difference between a document and a drawer.**'));
out.push(box('Homework', ['Write your final text. Then write your own first line as an instruction, one claim with its proof or NONE, and one undertaking with a day, a document and a person (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 24.7 =======================
out.push(pb());
out.push(h2('24.7  Review & Mediate: what a certificate says and does not say'));
out.push(p('⚠ **This is the twelfth unit of this book and the last of the level, and the document at the end of it is not about Nour.** ⚠ **It is a reference for Lina Barakat, who was a trainee in B1 and sat the same examination this December** — **and the question is what a certificate is evidence of.**'));
out.push(p('**Function:** saying what a credential does and does not establish   ·   **Grammar:** _it evidences X; it does not evidence Y; what does is Z_   ·   **Pronunciation:** a reference read without warmth or coldness'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**24.1**  What are the three acts, in order, on opening your own old page?', ''],
  ['**24.2**  Why does a claim about yourself need the part you got wrong?', ''],
  ['**24.3**  What is the test that separates a reason from an excuse?', ''],
  ['**24.4**  Why is a count of your own undertakings made by you unreliable?', ''],
  ['**24.5**  Which half of a responsibility document does nobody write?', ''],
  ['**24.6**  Why does a sealed letter need a reader arranged?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the sentence Mr Sayegh wants in Lina\'s reference?   **A** nothing   **B** *fluent in written and spoken English* is untrue, will be tested in the first twenty minutes of any interview, and will take the rest of the reference down with it   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What three things does Nour say the certificate does evidence? **2** What does Lina decide, and what does she give up?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  "It is a performance on a day, not a description of a person"', [
  ['Mr Sayegh', 'Lina has her certificate. I want to write that she is fluent in written and spoken English. It will get her the interview.'],
  ['Nadia', '⚠ **It will get her the interview and lose it for her in the first twenty minutes.**'],
  ['Mr Sayegh', 'You have not heard her speak lately.'],
  ['Nadia', '⚠ **I have, and she is better than she was and she is not fluent, and she would say so herself.** ⚠ **And when the sentence fails, everything else in the reference fails with it** — **including the true things, which are the useful ones.**'],
  ['Nour', '⚠ **May I say what the certificate actually is, because I sat the same one and I have thought about this since Monday.** ⚠ **It is a performance, on a stated day, against published criteria. It is not a description of a person.**'],
  ['Mr Sayegh', 'Then what is it worth?'],
  ['Nour', '⚠ **Three things, and they are not small.** ⚠ **One: she read a long document under time pressure and found what it required of her. Two: she wrote to a word limit, twice. Three: she did both on a day she did not choose, in conditions she did not control.** ⚠ **A good many people in settled employment could not do any of the three.**'],
  ['Mr Sayegh', 'And what does it not say?'],
  ['Nour', '⚠ **That she will do it when nobody is marking. That she can do it in the documents of a trade she has not worked in.** ⚠ **And it says almost nothing about speaking, which an interview will establish in ten minutes anyway** — **so a reference that claims fluency is claiming the one thing the reader will check first and the certificate does not support.**'],
  ['Lina', 'Then say what I did. Not what I am.'],
  ['Nour', 'Three documents. Which three?'],
  ['Lina', '⚠ **The escalation standard I asked for in July and then wrote, because it did not exist. The Homs stock reconciliation of 2 November, which found 31,000. And the note of 19 September correcting my own earlier note** — **which is the one I would rather not include and is the one I would ask to see if I were them.**'],
  ['Mr Sayegh', '⚠ **And you understand that this reference is colder than the one I wanted to write, and that a cold reference may cost you an interview.**'],
  ['Lina', '⚠ **I understand it, and I would rather be asked about the November reconciliation than asked to explain the word fluent.** ⚠ **One of those conversations I can have.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What a certificate evidences, and what it does not**',
  table(['', 'The move', 'Here'], [
    ['**1 what it is**', '⚠ **a performance on a stated day against published criteria**', '⚠ **not a description of a person, and an employer who reads it as one will be disappointed**'],
    ['**2 what it evidences**', '**three real things**', '⚠ *read a long document under time pressure and found what it required · wrote to a word limit, twice · did both on a day she did not choose*'],
    ['⚠ **3 what it does not**', '⚠ **said in the reference, in the holder\'s interest**', '⚠ *that she will do it when nobody is marking · in a trade she has not worked in · and almost nothing about speaking*'],
    ['⚠ **4 what does**', '⚠ **three documents of her own, with dates**', '⚠ **including the one she would rather leave out** — **which is the one she would ask to see herself**'],
  ], [2, 3.2, 3.9]),
  '⚠ **The generous sentence is the commonest error in a reference and it is a disservice.** ⚠ ***Fluent in written and spoken English* will be tested within twenty minutes of an interview beginning**, **and when it fails the rest of the reference fails with it** — **including the true parts, which were the useful ones.**',
  '⚠ **Do not discount the certificate either.** ⚠ **Three real things, and a good many people in settled employment could do none of them** — **so the honest reference is not a modest one, it is a specific one.**',
  '⚠ **Say what it does NOT establish, in the holder\'s interest.** ⚠ **It protects them from being asked to defend a claim nobody made for them**, **and it tells the reader which questions are worth their twenty minutes.**',
  '⚠ **Then name the documents, and include the one that is awkward.** ⚠ *The note of 19 September correcting my own earlier note.* **It is the one she would ask to see if she were the reader** — **which is 24.2\'s named error and 21.5\'s opposing option, arriving in a document about a person.**',
  '⚠ **And let the person whose reference it is decide.** ⚠ *I would rather be asked about the November reconciliation than asked to explain the word fluent.* **The cost is real and it is theirs to accept** — **and the sentence they choose tells you more about them than the certificate does.**',
  '**Useful phrases:**  a performance on a day  ·  not a description of a person  ·  three real things  ·  what it does not establish  ·  one of those conversations I can have',
  '**Pronunciation – a reference without warmth or coldness.** 🔊 **Track 24.14** Listen twice. ⚠ **The first says *she wrote to a word limit, twice, on a day she did not choose* evenly, as a finding.** ⚠ **The second warms on *twice*.** **Even, it is evidence a reader weighs; warmed, it is advocacy, and a reader who detects advocacy discounts everything after it.** Say it four times, evenly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wants the generous sentence; B works the four moves. ⚠ **In order.**'));
out.push(table(['B asks', 'A answers'], [
  ['⚠ **What is the certificate, exactly? What did somebody do, and when?**', '______________'],
  ['⚠ **What does it evidence? Three things, as acts.**', '______________'],
  ['⚠ **What does it not evidence? Say it in the reference.**', '______________'],
  ['⚠ **What would evidence the thing you want to claim?**', '______________'],
  ['⚠ **And whose decision is the final wording?**', '______________'],
], [4.6, 4.4]));
out.push(table(['Role card 1 — the warm sentence is kindness', 'Role card 2 — then the certificate is worthless'], [[
  '⚠ **A believes the generous sentence is a kindness that costs nothing.** ⚠ **B asks when the reader will test it.** ⚠ **B\'s point: in the first twenty minutes, and it will fail, and it will take the three true things down with it** — **so the kindness is spent on the writer\'s comfort and charged to the candidate, which is 22.7\'s softened draft with somebody else paying.**',
  '⚠ **A swings the other way and says a certificate that proves none of this is worth nothing.** ⚠ **B asks how many people in the office could read a 2,500-word regulation in an hour and write 130 words a bank would act on.** ⚠ **B\'s point: very few, and the certificate evidences exactly that, on a stated day** — **so the honest position is neither the warm sentence nor the dismissal, but the specific list.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** name a credential you hold and say what it is evidence of, as three acts. ⚠ Then say what it does not evidence, and what would.'));
out.push(PHRASE_CARD(['what is it, exactly?', 'three things, as acts', 'what it does not establish', 'what would evidence that?', 'whose wording is it?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** credentials, yours or somebody else\'s.'));
out.push(table(['The credential', 'What it evidences, as acts', 'What it does not', 'Three documents that would'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.6, 2.2, 2.4]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** Mr Sayegh wants the warm sentence because it will get Lina the interview. Nadia will not have an untrue sentence in a reference from this firm. Lina is the person who pays for either decision.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What goes in the reference'], [[
  '⚠ **Mr Sayegh:** **a cold reference may cost her an interview, and interviews are how people get work.**  ⚠ **Nadia:** **the sentence is untrue, it will be tested in twenty minutes, and when it fails the three true things fail with it.**  ⚠ **Lina:** **she is the one who will be in the room, and the choice of which conversation to have is hers.**',
  '⚠ **Mr Sayegh:** **the warm sentence, and the comfort of having been generous** — **he signs something cooler than he wanted and says so to Lina\'s face rather than in a covering note.**  ⚠ **Nadia:** **nothing.**  ⚠ **Lina:** ⚠ **the easier route to an interview, and she includes the September note correcting her own earlier one** — **which she would rather leave out and which is the first document she would ask for if she were the reader.**',
  '⚠ **One page, 19 December.** ⚠ **What the certificate is: a performance on 11 December against published criteria.** ⚠ **What it evidences, as three acts.** ⚠ **What it does not evidence, in three lines, including that it says almost nothing about speaking.** ⚠ **And three documents of her own, named and dated** — **the escalation standard she wrote in July because none existed, the Homs reconciliation of 2 November which found 31,000, and the note of 19 September correcting her own earlier note.** ⚠ **Signed by K. Sayegh and N. Mansour, and the final wording was Lina\'s.**',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Everybody is right. _______ is right that _______. _______ is right that _______. _______ is right that _______. So the reference contains _______, _______ and _______ — and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the sentence that cost the most, which is Lina\'s:** *"I would rather be asked about the November reconciliation than asked to explain the word fluent. One of those conversations I can have."* ⚠ **Mark it, because it is the last sentence of the level and it is the only one spoken by the person the document is about** — **and it is the whole of B2 in two lines: a document is written for what a reader will do with it, and the person it describes is entitled to choose which questions they will be asked.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 4)', 10));
out.push(p('⚠ **This unit is Part 4: multiple-choice cloze, fifteen gaps, four options each. It is the fifth and last time in the level, after Units 4, 8, 13 and 19.** ⚠ **Read the whole sentence before choosing, because about a third of these turn on a word four or five words after the gap.**'));
out.push(box(null, [
  '**WHAT A CERTIFICATE EVIDENCES — from a recruitment consultancy\'s note to employers.**',
  'An employer who treats a language certificate as a description of a person will be disappointed, and the disappointment is not the candidate\'s **(1)** ______. A certificate records a performance, on a stated day, against published criteria, and it does **(2)** ______ more. What it cannot record is what the holder will do when nobody is marking, and it was never **(3)** ______ to.',
  'The useful question is therefore not how good a candidate\'s English is, which nobody can answer, **(4)** ______ what the candidate has written and what happened to it. A letter to a supplier, a report a manager acted **(5)** ______, a note that changed somebody\'s mind: three such documents, with dates, tell an employer **(6)** ______ than any grade, and all three can be asked for at interview.',
  'Nor should an employer **(7)** ______ the certificate for what it genuinely does establish. A candidate who has passed at this level has read a long document under time pressure and found what it required of them; has written to a word limit; and has done both on a day **(8)** ______ which they had no control. Those are three real things, and a good many people in settled employment could **(9)** ______ do them.',
  'The commonest error in a reference is the generous sentence. A referee who writes that a candidate is fluent in written and spoken English has **(10)** ______ the candidate a disservice, because the sentence will be tested within twenty minutes of the interview beginning, and **(11)** ______ it fails the rest of the reference fails with it. A cooler reference naming three documents survives the test **(12)** ______ the candidate does not.',
  'Finally, employers should ask what the certificate says **(13)** ______ speaking, and the honest answer in most cases is very little that an interview will not establish **(14)** ______. A candidate who writes well and speaks diffidently is a common and valuable type, and an employer who screens that type out on a certificate will fill the post **(15)** ______ somebody who does neither particularly well and interviews with confidence.',
]));
out.push(p('**1**   **A** fault   **B** blame   **C** mistake   **D** error'));
out.push(p('**2**   **A** none   **B** nothing   **C** no   **D** not'));
out.push(p('**3**   **A** wanted   **B** hoped   **C** meant   **D** asked'));
out.push(p('**4**   **A** and   **B** or   **C** than   **D** but'));
out.push(p('**5**   **A** on   **B** at   **C** in   **D** for'));
out.push(p('**6**   **A** much   **B** more   **C** far   **D** most'));
out.push(p('**7**   **A** lower   **B** reduce   **C** discount   **D** lessen'));
out.push(p('**8**   **A** on   **B** in   **C** at   **D** over'));
out.push(p('**9**   **A** hard   **B** hardly   **C** scarce   **D** little'));
out.push(p('**10**  **A** given   **B** made   **C** done   **D** paid'));
out.push(p('**11**  **A** if   **B** unless   **C** whether   **D** once'));
out.push(p('**12**  **A** even if   **B** even though   **C** as if   **D** so that'));
out.push(p('**13**  **A** of   **B** for   **C** on   **D** about'));
out.push(p('**14**  **A** besides   **B** instead   **C** anyway   **D** however'));
out.push(p('**15**  **A** by   **B** for   **C** with   **D** through'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Three content points, all three present.** ⚠ **This is the twelfth and last Part 2 of the level, after Units 2, 4, 6, 8, 10, 12, 14, 16, 18, 21 and 22.**',
  '⚠ **For a report on what training produced, three headings.** ⚠ *What can now be done, with evidence · what has not changed · recommendation.* **Three headings at 130 words, and the marker finds all three content points immediately.**',
  '⚠ **The first heading needs documents, not adjectives.** ⚠ *Four people now write to authorities asking only for what the body can grant; the letter of 12 September was answered in nine days.* **A document with a date and an outcome is the strongest evidence available in a report about people.**',
  '⚠ **The second heading must be genuinely negative, with a figure.** ⚠ *Speaking has not changed. In the Beirut hearing of 7 April, four and a half hours, our representative said four sentences.* **A report whose second heading is a softened version of the first loses the content point outright** — **and this is the commonest failure in the task.**',
  '⚠ **And the recommendation must change an arrangement rather than exhort anybody.** ⚠ *That each participant name one person who asks them for a document aloud on a stated day each month.* **Not *that staff practise speaking more*, which is 13.3\'s clause obliging nobody and 24.3\'s *make time for*** — **and the examination rewards the auditable version for the same reason the unit does.**',
  '⚠ **Part 4 tip, for the cloze above.** ⚠ **Four of these fifteen are decided by a word AFTER the gap** — **gap 4 by *what* rather than *how good*, gap 8 by *which*, gap 11 by the second clause, gap 12 by *does not*.** ⚠ **Read to the end of the sentence before choosing**, **because in this part the option that fits the first half of the sentence is the distractor roughly a third of the time.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A trade association has asked your company what two years of English training produced. Write a report (**120 to 140 words**) saying **what people can now do, with evidence**, **what has not changed, with a figure**, and **one recommendation that changes an arrangement rather than exhorting anybody**.'));
out.push(p('**REPORT: ______________**   **To:** ______________   **From:** ______________   **Date:** ______________   ⚠ **What can now be done, with evidence.** **______________. The ______________ of ______________ was ______________.**   ⚠ **What has not changed. ______________. In ______________, ______________ said ______________.**   ⚠ **Recommendation. I recommend that ______________, from ______________.** ⚠ **This changes an arrangement and not anybody\'s habits.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings carrying the three content points', ''],
  ['A document with a date and an outcome, not an adjective', ''],
  ['A genuinely negative second heading, with a figure', ''],
  ['A recommendation that changes an arrangement, with a date', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a credential you or somebody you know holds (**200 to 240 words**). Say what it is evidence of, as acts; what it is not evidence of; what a reader checks first; and which three documents you would offer instead.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one credential and write the three acts it evidences, the three things it does not, and the three documents of your own that would (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Write beside each claim the document that proves it, ___ the word NONE.   a) and   b) or   c) nor',
  '2  A sealed letter depends ___ somebody remembering to bring the drawer.   a) on   b) of   c) in',
  '3  I am answerable ___ the Homs takings from 1 April.   a) of   b) to   c) for',
  '4  I did it three times ___ two years.   a) for   b) in   c) since',
  '5  She asks me for the envelope and stays ___ I open it.   a) while   b) during   c) meanwhile',
  '6  Of the nine, four ___ completed.   a) was   b) were   c) been',
  '7  A responsibility written ___ it starts is written to fit what has already happened.   a) after   b) before   c) until',
  '8  Nothing in this document is ___ true, which is the only condition in which I can write it honestly.   a) already   b) still   c) yet',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 24.15** Listen to the conversation on 8 January. Complete the note.   Which of the three documents the forwarder asked for: ______   What they said about the September note: ______   What Mr Sayegh now says about the sentence he wanted to write: ______   What Lina asked Nour for at the end: ______   The one thing Nour has done every first Monday since December: ______   What Nour says the count will be next December: ______'));
out.push(p('**C  Reading.** Read the reference at 24.7 again. Say what it states the certificate IS, what three acts it evidences, and which of the three named documents Lina would rather have left out and why she included it.'));
out.push(p('**D  Writing.** Take one credential you hold or one thing you have been trained to do. Write what it is evidence of as acts, what it is not evidence of, and the document of your own you would offer instead (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Nadia', 'Lina had her interview. Which of the three did they ask for?'],
  ['Nour', '⚠ **The September note. The one correcting her own earlier note, which she nearly left out.**'],
  ['Nadia', 'And?'],
  ['Nour', '⚠ **The man said it was the only document he had been sent that year by anybody that corrected its own author**, ⚠ **and that he had asked for it first for exactly that reason.** **She has the post from 1 February.**'],
  ['Mr Sayegh', '⚠ **I should say the thing I have been avoiding saying for three weeks.** ⚠ **If I had written *fluent in written and spoken English*, he would have asked her about the word fluent, which was the one conversation she could not have had.** ⚠ **I would have cost her the post with a sentence I wanted to write because it would have made me feel generous.**'],
  ['Nadia', 'And would you write it again?'],
  ['Mr Sayegh', '⚠ **No. And I would not have said that in December** — **I signed the cooler version because I was outvoted, and I am saying this in January because of what the man asked for.**'],
  ['Nadia', 'And what did Lina ask you for at the end?'],
  ['Nour', '⚠ **A copy of the reference, which nobody had offered her.** ⚠ **She said she wanted the list of three acts, because she had never seen what she could do written down as things she had done** — **and that she would be writing the same page about herself in two years for whoever came next.**'],
  ['Nadia', 'And the first Mondays?'],
  ['Nour', '⚠ **Four of four since 14 December. One document read aloud to Lina on the first Monday, and she has asked me on each of the four** — **and on the second one I had not prepared anything and she asked anyway, which is the whole difference between her and a reminder.**'],
  ['Nadia', 'And the count next December?'],
  ['Nour', '⚠ **I do not know, and that is the point of having written this year\'s figure down.** ⚠ **One in nine, in my own favour. If it is three in nine next year I will have learnt something about myself that nothing else in two years has told me** — **and if it is still one, that is also a finding, and it is the first one I will have been able to make twice.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**24.1** open your own old page, read it as a stranger\'s, and grade every sentence claim or hope',
  '**24.2** evidence a closed gap with an act, a reader, a date, an outcome and the part you got wrong',
  '**24.3** report a gap that did not close, with the count, and test your reason against your other undertakings',
  '**24.4** count your undertakings, have somebody count them from the record, and record the gap as a figure',
  '**24.5** write what you are and are not answerable for before the office begins, and send it to the other claimant first',
  '**24.6** write and seal a letter whose first line instructs, whose undertakings can be audited, and whose reader has agreed',
  '**24.7** say what a credential evidences, what it does not, and which three documents do',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three come from B1 Unit 24, which is the unit you sealed the letter in, and all three were words there.** ⚠ **A gap at B1 was a thing you noticed about yourself and wrote down.** **Here it is a thing with a figure against it: four sentences in four and a half hours, and three times in two years.**',
  '⚠ **A certificate at B1 was the thing you were working towards.** ⚠ **Here it is a document whose contents you can state** — **a performance on a stated day against published criteria, evidencing three acts and not describing a person** — **and the last cycle of the level is about what it will not carry for you.**',
  '⚠ **And a target date at B1 was a date you set yourself.** ⚠ **Here it is a date somebody else holds: the first Monday of each month, with Lina asking** — **because 23.4 and 24.3 together say that a date with nobody attached to it is the one undertaking of nine that nobody could ever have been held to.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

// ======================= END OF BOOK 2, AND OF B2 =======================
out.push(sp());
out.push(h2('End of Book 2, and the end of B2'));
out.push(box('⚠ What the twenty-four units have been for', [
  '⚠ **Book 1 began on 9 January 2026 with a letter from Mr Dallal\'s office and ended on 26 June with four lines in a minute book.** ⚠ **Book 2 began in July with a contract already signed and ends on 14 December 2027 with fourteen envelopes going into a drawer and one coming out of it.** **In between: twenty-two clauses audited, forty cartons rejected on a word, a credit committee answered, an export enquiry declined in the customer\'s own interest, a file of two hundred and fourteen pages summarised to three paragraphs, an arbitration settled at eleven million, an office handed over, a branch reopened, four reviews written and three assessments withdrawn, a Ministry notice costed at four figures, and a reference that cost a signatory his favourite sentence.**',
  '⚠ **The four things the twenty-four units have in common, and they are worth saying once at the end:**',
  table(['', 'The thing', 'Where it was taught'], [
    ['**1**', '⚠ **A document is written for what a reader will DO with it, and the reader may refuse.**', '**1, 6, 15, 16, 19, 23** — **the brief, the three readers, the committee that said no, the argument you do not hold, the room where nobody is on your side, the body that can decide**'],
    ['**2**', '⚠ **A claim carries its own warrant inside the sentence, and names what it does not cover.**', '**2, 7, 9, 17, 19, 22** — **the agentless passive, the marked chain, somebody else\'s draft, the half-quoted sentence, *we do not allege*, the instance under the judgement**'],
    ['**3**', '⚠ **A figure, a date and a name are checkable; a disposition is not, and cannot be acted on by Monday.**', '**3, 4, 8, 13, 14, 20, 22, 23** — **the load-bearing fact, the numbered assumption, numbers in prose, the clause that obliges nobody, the measurable standard, the handover, the remedy, the named watcher**'],
    ['**4**', '⚠ **What outlives you is one document, and it will be read by somebody who cannot ask.**', '**12, 18, 21, 24** — **the decision taken, the document that outlives you, the option you argue against, and the envelope**'],
  ], [0.4, 4.4, 3.8]),
  '⚠ **What B2 asked for that B1 did not.** **At B1 the reader could not ask a question. At B2 the reader can ask a question and can refuse** — **and the whole level is the apparatus for writing to somebody who may say no and does not have to explain why.**',
  '⚠ **And the gap Nour named on 11 December 2025 is closed, and the letter that closes it is one page dated 9 June 2026 and it was wrong about one of its four points.** ⚠ **The second gap she named is not closed, the figure is four sentences in four and a half hours, and the exercise was done three times in two years** — **which is a more useful place to end a level than the first fact, because it is the one that says what to do next.**',
  '⚠ **C1 begins at Unit 1, with the envelope sealed on 14 December 2027 and with Lina Barakat agreeing to ask for it on the first working day of December 2029.** **Nothing in C1 is harder than Unit 19.** **The material is harder and the position is not** — ⚠ **because a reader who is against you has told you what he wants, and at C1 the reader is usually somebody who agrees with you and cannot act.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(p('_**Proactive Business English · B2 · Syria Edition.** Two books, twenty-four units, one hundred and sixty-eight cycles, seven hundred and sixty-eight lexical items and one hundred and ninety-two collocations. The level is finished. C1 continues at Unit 1._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
module.exports = out;
