// Proactive English B1 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** Name the criterion before you say anything. Write your partner three sentences, each one opening with the criterion it marks against, and then what you found.';

out.push(h1('Unit 24  Looking Ahead to B2'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**24.1**  see the whole tense system on one page',
  '**24.2**  form a question in any tense',
  '**24.3**  say what will be finished by a time',
  '**24.4**  say what you can and cannot yet do in English',
  '**24.5**  set the next twelve months',
  '**24.6**  write the letter to your B2 self',
  '**24.7**  Review & Mediate: what the certificate says, and the first fortnight',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**This is the last unit of the book, and almost nothing in it is new.** 24.1 and 24.2 put what you already use on one page and make you look at it; 24.3 adds the one form the course has not taught; and 24.4 to 24.7 are about you.',
  '**24.3 is the only new grammar in the unit** — the **future perfect**, lightly: _by January I shall have written it nine times_. It is here because B2 asks for it constantly and because you have been needing it since Unit 14 and going round it.',
  '**24.4 is the honest self-assessment, and it is the opposite of the _I can…_ box.** Two lists: what you can do now, with a figure beside each item, and what you **cannot yet do**, which is the longer and more useful list and which nobody writes.',
  '**24.6 is the letter to your B2 self.** You will write it in this room, seal it in this room, and open it at the end of your B2 course. **Nobody will mark it** — it is the only piece of writing in this book that nobody else will ever read. Bring three things: your **week-one note** of 14 January, your **18.4** nine lines, and your **22.6** page. The letter is built on all three.',
  '**And bring the prediction board**, which came down in 23.7. One line on it is dated 1 June and is still open. In 24.5 you write the last prediction of the course.',
], C.lyellow, C.orange));

// ======================= 24.1 =======================
out.push(pb());
out.push(h2('24.1  The whole system on one page'));
out.push(p('**Function:** seeing the tense system as one map   ·   **Grammar:** the twelve forms you already use, in three questions   ·   **Pronunciation:** the contracted auxiliary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One true sentence each about your own work, in any tense you like. Your teacher writes only **the verb** of each on the board — _have worked_, _was doing_, _had seen_, _will be_ — and then asks the class to group them. Nobody will know what the groups are called, and everybody will group them correctly.'));
out.push(board('I had seen a bag on that shelf in June and I said nothing.', 'when? · finished or not? · how long?'));
out.push(p('**b**  Three questions, one verb. For each sentence say **when**, **finished or not**, and **how long**. **1** _I have worked here since 2019._  **2** _I was checking the sheet when he came in._  **3** _I had seen it in June._  **4** _I have been taking the night calls since March._  **5** _By January I shall have written it nine times._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which column of the map does Nour say she has been avoiding, and what does she say she used instead?   **A** the continuous forms; the simple ones, with _always_ and _usually_ added   **B** the past forms; the present   **C** the perfect forms; the future'));
out.push(p('**b**  Listen again. **1** How many of the twelve forms does Ms Huda say the class has used this year?   **2** What does Ms Huda say the map is for, and what is it not for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  Eleven of the twelve', [
  ['Ms Huda', 'One sheet, and everything you have done in two years is on it. Twelve forms. Before anybody looks at the names, I want the three questions, because the names are the least useful part.'],
  ['Nour', 'When, finished or not, and how long.'],
  ['Ms Huda', 'That is the whole map. Every form on this page is an answer to those three questions, and you have answered them correctly about four thousand times since January without being able to say what you were doing.'],
  ['Omar', 'How many of the twelve have we used?'],
  ['Ms Huda', 'Eleven. You have used eleven of the twelve this year, in this room, in writing, correctly. The twelfth is the future perfect and it is the only new grammar in this unit, and it is in 24.3.'],
  ['Nour', 'May I say something about the page? Because I have been looking at the column I avoid.'],
  ['Ms Huda', 'Say it.'],
  ['Nour', 'The continuous column. I almost never use it. I say _I answer the escalation calls_ and not _I have been answering them_; I say _I took the call_ and not _I was taking the call when_. And what I have been doing instead is putting a word in — _always_, _usually_, _at that moment_ — so the sentence carries the meaning and the verb does not.'],
  ['Jad', 'Is that wrong?'],
  ['Nour', 'It is not wrong and it is why nobody has ever corrected me. But look at what it costs. _I have been taking the night calls since March_ says the thing is unfinished and still mine. _I take the night calls_ says it is a fact about the rota. When I wrote to the department head in 22.2, I used the first one for the first time in my life, and the sentence did a job the other one cannot do.'],
  ['Ms Huda', 'And that is what a map is for. **Not to tell you what is correct** — you have been correct for a year. **To show you what you are not using**, because the form you avoid is a thing you cannot say, and you will never notice it on your own: nobody notices an absence in their own speech.'],
  ['Lubna', 'How do you find your own missing column?'],
  ['Ms Huda', 'Take a page you wrote in the last month, underline every verb, and put each one on this map. The empty squares are the answer, and they will be the same empty squares for two or three people in this room and different for everybody else.'],
  ['Omar', 'Mine will be the past perfect. I know it already, because I rewrote three sentences in 22.1 to avoid it.'],
]));
out.push(sp());
out.push(box('Language box – the whole system, in three questions', [
  '**Three questions, twelve forms. The questions are: _when?_ · _finished or not?_ · _how long?_**',
  table(['', 'simple', 'continuous', 'perfect', 'perfect continuous'], [
    ['**past**', '_I checked it._', '_I was checking it when…_', '_I had checked it before…_', '_I had been checking it for an hour._'],
    ['**present**', '_I check it._', '_I am checking it._', '_I have checked it._', '_I have been checking it since March._'],
    ['**future**', '_I will check it._', '_I will be checking it at six._', '_I will have checked it by Friday._', '_I will have been doing it for a year._'],
  ], [1.0, 1.6, 1.9, 1.9, 2.1]),
  '**Read the table by column and not by row, because the columns are the meanings.** The **simple** column is a fact. The **continuous** column is unfinished, or interrupted, or temporary. The **perfect** column connects two times — a thing before a thing. The **perfect continuous** column does both: unfinished, **and** measured.',
  '⚠ **The form you avoid is a thing you cannot say**, and you will not notice it on your own, because nobody notices an absence in their own speech. The commonest avoidance at B1 is **the continuous**, and the usual substitute is a word: _always_, _usually_, _at that moment_. The sentence then carries the meaning and the verb does not — which is correct, and weaker.',
  '**What the continuous buys you:** _I have been taking the night calls since March_ says the thing is **unfinished and still mine**. _I take the night calls_ says it is a fact about the rota. Both are true; only one of them is about a person.',
  '**Useful phrases:** when, finished or not, and how long · the names are the least useful part · I put a word in so the sentence carries the meaning and the verb does not · the empty squares are the answer.',
  '**Practise:** Say each one four ways — simple, continuous, perfect, perfect continuous.  1 check a sheet  2 take a call  3 count something  4 write a page  5 wait for an answer',
  '**Pronunciation.** 🔊 **Track 24.2** In speech the auxiliary is **contracted and unstressed**, and the stress is on the main verb: _I\'ve been **TAKing** them since March_ · _I\'d **SEEN** it in June_. A stressed auxiliary — _I **HAVE** been taking them_ — is a contradiction, and students who stress it sound as though they are arguing. Listen to eight and write the auxiliary only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says a sentence about their work in the **simple** form from the card. B says the same thing in the **continuous** and then in the **perfect continuous**, and says what each one adds. Then A says which of the three is true of them now. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I __________.'],
  ['B', 'You are __________. — That says __________.'],
  ['B', 'You have been __________ since __________. — That says __________.'],
  ['A', 'The true one about me now is __________, because __________.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_I take the night calls._', '_I check the delivery notes._'],
  ['_I count the spoiled sheets._', '_I answer the forum questions._'],
  ['_I keep the fault book._', '_I write the method sheets._'],
  ['_I drive the 05.50._', '_I train the new staff._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight perfect continuous sentences and underline the **since** or **for** in each. Then the finding: in six or seven of the eight, the date in the _since_ is a date the speaker had never said out loud before — because the simple form has no room for a date, so the date had never been needed, so nobody had ever asked for it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a page you wrote in the last month. Underline every verb and put each one on the map. Then say which squares are **empty**, and read out one sentence you would rewrite using an empty square.'));
out.push(p('**b**  Swap. Then each of you say which word your partner has been using **instead** of the missing form — _always_, _usually_, _at that moment_, _already_ — and take it out of one sentence.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda put one sheet on the board with everything from two years on it — twelve forms — and asked for the three questions before anybody looked at the names: when, finished or not, and how long. She said every form on the page is an answer to those three questions, and the class has answered them correctly about four thousand times since January without being able to say what they were doing. Omar asked how many of the twelve they have used, and the answer is eleven: eleven of the twelve this year, in this room, in writing, correctly, and the twelfth is the future perfect, which is the only new grammar in the unit. Then Nour said she had been looking at the column she avoids, which is the continuous. She says "I answer the escalation calls" and not "I have been answering them"; she says "I took the call" and not "I was taking the call when". And what she has been doing instead is putting a word in — always, usually, at that moment — so the sentence carries the meaning and the verb does not. Jad asked whether that is wrong, and Nour said it is not wrong and that is why nobody has ever corrected her, but look at what it costs: "I have been taking the night calls since March" says the thing is unfinished and still hers, while "I take the night calls" says it is a fact about the rota — and when she wrote to the department head in 22.2 she used the first one for the first time in her life and it did a job the other one cannot do. Ms Huda said that is what a map is for: not to tell you what is correct, because they have been correct for a year, but to show you what you are not using — the form you avoid is a thing you cannot say, and you will never notice it on your own, because nobody notices an absence in their own speech. Lubna asked how you find your own missing column, and the answer is to take a page you wrote last month, underline every verb and put each one on the map: the empty squares are the answer._'));
out.push(p('**Listener task:** write one empty square from this room and the word the speaker had been using instead.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour writes for herself. Answer the questions.'));
out.push(model([
  '**MY OWN MAP · the column I do not use** · N. Sabbagh · 2 January',
  '**What I did.** I took the note I sent the department head on 19 December, underlined all forty-one verbs, and put each one on the map.',
  '**Where they went.** Twenty-six in the present simple. Nine in the past simple. Four in the present perfect. Two in the future. **And none at all in any continuous form** — not one of the forty-one.',
  '**What I had been using instead.** Four words, eleven times between them: _always_, _usually_, _still_, _at the time_. _I usually answer the escalation calls_ instead of _I have been answering them since September_. The word does the work and the verb sits there.',
  '**Why it has never been corrected.** Because it is not a mistake. Nobody can mark a sentence wrong for being in the simple form, and so in eleven months nobody has told me that I have a whole column missing — and I could not have told myself, because an absence in your own speech is invisible to you.',
  '**What the column would have bought me, in one case.** The sentence I actually sent was _of the twenty-two escalation calls I have taken since 1 September, nineteen involved a promise that is not in our notes_. The version I nearly sent was _I take the escalation calls and most of them involve a promise_. The first says this is unfinished, measured and mine. The second says it is a fact about the rota.',
  '**What I am going to do about it, and it is small.** One page a month, underlined and mapped. Not a grammar book: my own page, my own verbs, and the empty squares.',
  '**And what I think I shall find.** That the past continuous is the one I shall need first, because every account of something going wrong needs _I was doing X when Y happened_, and I have been writing _at the time_ instead for a year.',
]));
out.push(item('1', 'How many verbs did she map, and where did none of them go?'));
out.push(item('2', 'Why does she say the gap has never been corrected?'));
out.push(item('3', 'What does she think she will need first, and why?'));
out.push(writers([
  'A page about your own map: **what you did** → **where the verbs went, counted** → **what you had been using instead** → **why it has never been corrected** → **what the missing form would have bought you, in one real case** → **what you are going to do, and how small it is** → **and what you think you will find**.',
  'Count the verbs and give the figures. _Twenty-six present simple, nine past simple, four present perfect, two future, none continuous._ A page about grammar with no arithmetic in it is an impression; the counts are what make the empty square undeniable.',
  'Name the **substitute**. _Always, usually, still, at the time — four words, eleven times between them._ The substitute is always a word, and finding it is how you prove the gap is a habit rather than an accident.',
  'Show what the form bought you in **one real sentence**, with both versions printed. _The first says this is unfinished, measured and mine; the second says it is a fact about the rota._ One pair of sentences is worth a page of explanation.',
  '⚠ And keep the remedy small and yours. _One page a month, underlined and mapped — not a grammar book._ A resolution to study grammar is the kind that is kept for eleven days; a resolution to underline your own verbs is kept, because it takes four minutes.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about your own map (60 words or more).'));
out.push(p('**MY OWN MAP · the column I do not use** · ______________ · ______________   **What I did.** I took ______________, underlined all ______ verbs, and put each one on the map.   **Where they went.** ______ in ______________. ______ in ______________. ______ in ______________. **And none at all in ______________.**   **What I had been using instead.** ______________ — ______ words, ______ times between them.   **Why it has never been corrected.** Because ______________.   **What the column would have bought me.** The sentence I sent was "______________". The version I nearly sent was "______________". The first says ______________.   **What I am going to do about it.** ______________. Not ______________: ______________.   **And what I think I shall find.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The verbs counted, with the figures for each square',
  'The empty square named, and the substitute word found',
  'One real pair of sentences, both printed',
  'A remedy that takes four minutes a month, not a grammar book',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their empty square and their substitute word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more): the page you mapped, the counts, the empty square, the substitute word with its frequency, one real pair of sentences, the small remedy, and what you think you will need first.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the verbs counted**, **the substitute word found**, **one real pair of sentences**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your empty square.** Then the count that matters at the end of two years: how many of us have the **same** empty square? Two or three, usually — and the rest of the room is missing something different, which is the argument against any class ever being taught grammar from the front at this level. Everybody in this room has now done the one thing a grammar book cannot do for them: found out which form they personally do not use.'));
out.push(hw('Write the page (60+ words). Then map one more page — anything you wrote this year — and say whether the empty square is the same one.'));

// ======================= 24.2 =======================
out.push(pb());
out.push(h2('24.2  A question in any tense'));
out.push(p('**Function:** forming a question in any tense   ·   **Grammar:** question formation reviewed · subject questions without _do_   ·   **Pronunciation:** the falling tone on a long question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One question each that you asked somebody this week, exactly as you asked it. Your teacher writes only the **first two words** of each on the board. Count how many begin _Do you_, _Did you_, _Is it_ or _Have you_ — it will be nine or ten of eleven.'));
out.push(board('How long had it been on the shelf before anybody saw it?', 'the question in any tense'));
out.push(p('**b**  Make a question from each. **1** _Somebody wrote the notice._ _(who?)_  **2** _He had seen it in June._ _(when?)_  **3** _They have been waiting since August._ _(how long?)_  **4** _It will be reprinted._ _(when?)_  **5** _Four people told him._ _(how many?)_  **6** _She was checking the sheet._ _(what?)_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many of Omar\'s own questions were in the present, and which question does he say he could not form at all?   **A** nearly all of them; _how long had it been like that before anybody said anything?_   **B** half; _who decides?_   **C** none; _what will happen?_'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the subject question does not take?   **2** What does Omar say a question in the past perfect gets that a present question cannot?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  Four hundred questions in one tense', [
  ['Omar', 'I did something stupid and useful. I went back through my notebook and counted the questions I have asked people at work since January. About four hundred and ten.'],
  ['Nour', 'Four hundred?'],
  ['Omar', 'Four or five a day; it is the job. And here is the thing: **almost all of them are in the present.** _Do you know where it is? Is it on the list? Have you got the sheet? Can you log in?_ About thirty are in the past simple. Four are in the future. And none at all in any perfect form except the present perfect.'],
  ['Ms Huda', 'Does that matter? You are getting answers.'],
  ['Omar', 'I am getting answers to the questions I can ask. In November I wanted to ask a site manager one thing and I could not get it out of my mouth: how long had the machine been doing that before anybody reported it?'],
  ['Jad', 'What did you ask instead?'],
  ['Omar', 'I asked: when did you report it? And he told me the date, which I already had, and the conversation ended. The question I wanted asks about **the gap** — the time between the thing starting and anybody saying anything — and that gap is the whole of my job. It is a third of my year, as I said in 22.1. And I have never once been able to ask about it.'],
  ['Ms Huda', 'Then let us take the three things that make a question in any tense. **One: the auxiliary moves in front of the subject** — _had it been_, _has she been_, _will they have_. **Two: the main verb does not change at all** — ⚠ _did you **see**_, never ~~did you saw~~, and _had it **been**_, never ~~had it was~~. **Three: if the question word _is_ the subject, there is no auxiliary and no inversion** — _**who** wrote the notice?_, not ~~who did write~~.'],
  ['Lubna', 'Three is the one everybody gets wrong.'],
  ['Ms Huda', 'Three is the one that is wrong in half of this room and has been since Unit 4, because the rule looks like an exception and it is not: _who wrote it?_ is the same shape as _Omar wrote it_, with a question word where the name was.'],
  ['Omar', 'And the mechanism questions from 22.5 need the other tenses. _Who decides?_ is present. But _what happened the last time two people disagreed?_ is past, _how long has it been like that?_ is present perfect, and _what will happen when the names go on in January?_ is future. The three I wrote on paper for Jad\'s call were all present, and the one that produced the silence was the only one that could have been.'],
  ['Ms Huda', 'Which is the sentence of the cycle. **The questions you cannot form are the things you cannot find out**, and nobody will ever tell you which questions those are.'],
]));
out.push(sp());
out.push(box('Language box – a question in any tense', [
  '**Three rules, and the third is the one that is wrong in half of every class:**',
  table(['rule', 'example', 'the error it prevents'], [
    ['**1** The auxiliary moves in front of the subject', '_**Had** it been doing that for long?_', '~~It had been doing that for long?~~'],
    ['**2** The main verb never changes', '_Did you **see** it?_ · _Had it **been** there?_', '~~Did you saw~~ · ~~had it was~~'],
    ['**3** No auxiliary when the question word is the subject', '_**Who** wrote the notice?_', '~~Who did write the notice?~~'],
  ], [1.9, 2.1, 2.1]),
  '**The twelve forms, as questions:** _Do you check it? · Are you checking it? · Have you checked it? · Have you been checking it long? · Did you check it? · Were you checking it when…? · **Had** you checked it before…? · **Had** you been checking it for long? · Will you check it? · Will you be checking it at six? · Will you **have** checked it by Friday? · How long will you **have been** doing it?_',
  '⚠ **The question that asks about a gap needs the past perfect, and nothing else will do it:** _How long **had** it been doing that **before** anybody reported it?_ The present version — _when did you report it?_ — gets a date you already have and ends the conversation. ⚠ The gap is the answer, and the gap has no name in any other tense.',
  '**The mechanism questions of 22.5, across the tenses:** _Who decides…?_ (present) · _What happened the last time…?_ (past) · _How long has it been like that?_ (present perfect) · _How long had it been like that before anybody said anything?_ (past perfect) · _What will happen when…?_ (future). ⚠ A speaker who has only the present can ask only one of those five.',
  '**And the subject question again, because it is worth two minutes:** _who wrote it?_ has exactly the shape of _Omar wrote it_, with a question word standing where the name stood. There is nothing to invert and nothing to add.',
  '**Useful phrases:** I am getting answers to the questions I can ask · I could not get it out of my mouth · he told me the date, which I already had, and the conversation ended · the gap is the whole of my job.',
  '**Practise:** Ask about each in four tenses — present, past, present perfect, past perfect.  1 a fault  2 a notice  3 a figure  4 a decision  5 a delay',
  '**Pronunciation.** 🔊 **Track 24.4** A long question **falls** at the end and the auxiliaries run together, unstressed: _howlongaditbeen **DO**ing that before anybody reported it?_ ↘ Rising at the end turns it into an accusation; stressing _had_ turns it into a challenge. Listen to six and write the question word and the tense.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the card item in the **present**. B answers. A then asks about the same thing in the **past perfect** — _how long had it been…before…?_ — and B answers that. A says which answer told them something they did not have. Swap cards.'));
out.push(dlg(null, [
  ['A', 'When did __________?'],
  ['B', '__________.'],
  ['A', 'And how long had __________ before __________?'],
  ['B', '__________.'],
  ['A', 'The second answer gave me __________, which I did not have.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['_a fault that was reported_', '_a notice that went up_'],
  ['_a figure that was corrected_', '_a bag left on a shelf_'],
  ['_a form that was returned_', '_a machine that was stopped_'],
  ['_a decision that was taken_', '_a rule that was changed_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight past perfect questions and the eight answers. Then the count: in how many did the **second** answer contain information the first did not? Seven or eight of eight, every time — because the first question asks when somebody acted and the second asks how long nobody did, and only the second one is about the system.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the question you have most wanted to ask somebody at work this year and could not form. Then form it, out loud, slowly, with help from your partner.'));
out.push(p('**b**  Swap. Then each of you turn one of your partner\'s present questions into a past perfect one, and say what the new version would find out that the old one cannot.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar did something he calls stupid and useful: he went back through his notebook and counted the questions he has asked people at work since January — about four hundred and ten, four or five a day, because it is the job. And almost all of them are in the present: do you know where it is, is it on the list, have you got the sheet, can you log in. About thirty are in the past simple, four in the future, and none at all in any perfect form except the present perfect. Ms Huda asked whether that matters, since he is getting answers, and Omar said he is getting answers to the questions he can ask. In November he wanted to ask a site manager one thing and could not get it out of his mouth: how long had the machine been doing that before anybody reported it? Jad asked what he asked instead, and it was "when did you report it?" — and the man told him the date, which he already had, and the conversation ended. The question he wanted asks about the gap, the time between the thing starting and anybody saying anything, and that gap is the whole of his job: a third of his year, as he said in 22.1, and he has never once been able to ask about it. So Ms Huda gave the three rules. The auxiliary moves in front of the subject — had it been, has she been, will they have. The main verb never changes — did you see, not did you saw; had it been, not had it was. And if the question word is the subject there is no auxiliary and no inversion: who wrote the notice, not who did write. Lubna said the third is the one everybody gets wrong, and Ms Huda said it is wrong in half the room and has been since Unit 4, because the rule looks like an exception and it is not — "who wrote it?" is the same shape as "Omar wrote it", with a question word where the name was. And Omar said the mechanism questions from 22.5 need the other tenses, because the three he wrote on paper for Jad\'s call were all present. Ms Huda said that is the sentence of the cycle: the questions you cannot form are the things you cannot find out, and nobody will ever tell you which questions those are._'));
out.push(p('**Listener task:** write one question from this room that nobody could form, and the tense it needed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar sends the site manager. Answer the questions.'));
out.push(model([
  '**THE ELEVEN FAULTS · the question I could not ask in November** · O. Darwish · 3 January',
  'In November I asked you when the machine had been reported and you told me the date, which I already had. That was my fault and not yours: I asked the wrong question because I could not form the right one. This is the right one, and it is the only thing in this note.',
  '**The question.** How long had the machine been doing that before anybody reported it?',
  '**Why the date is no use on its own.** The date tells me when somebody acted. The gap tells me how long the system did nothing, and the gap is what I am paid to shorten.',
  '**What I think the answer is, and I may be wrong.** About six weeks. I say that because the same fault appears in the log at your site in September, twice, with no action against either entry, and because two of your operators said in November that it had been "doing it for a while".',
  '**Why I am asking you and not reading the log.** The log shows me when a fault was entered, not when it started. Nothing in any document I can reach contains the gap. The only place the gap exists is in the memory of whoever first noticed it.',
  '**What I am not asking.** I am not asking who should have reported it and I am not going to put a name in anything. If the gap is six weeks the reason is that there is no line on any sheet for a thing that is not yet a fault, and that is mine to fix, not anybody\'s to answer for.',
  '**What I shall do with the answer.** Add one line to the fault sheet: _first noticed (date, approximate)_. It costs four seconds and it is the only figure I have never had.',
  '**And the thing about myself.** I have been doing this work for five years and have asked about four hundred and ten questions this year, and this is the first one I have asked about a length of time rather than about a moment.',
]));
out.push(item('1', 'Why does he say the date is no use on its own?'));
out.push(item('2', 'Why is he asking the manager rather than reading the log?'));
out.push(item('3', 'What will he do with the answer, and what does it cost?'));
out.push(writers([
  'A note asking one question: **the wrong question you asked, and that it was your fault** → **the question** → **why the obvious answer is no use** → **what you think the answer is, with _I may be wrong_** → **why you are asking a person and not a document** → **what you are not asking** → **what you will do with the answer** → **and the thing about yourself**.',
  'Say that the earlier bad question was yours. _That was my fault and not yours: I asked the wrong question because I could not form the right one._ It costs nothing and it removes the only reason a reader would be defensive.',
  'Explain why the document cannot answer it. _The log shows when a fault was entered, not when it started._ A question addressed to a person needs a reason for not being addressed to a file, or it reads as laziness.',
  '⚠ Take the blame off the answerer before you ask. _I am not asking who should have reported it and I am not going to put a name in anything._ A question about a gap sounds like a question about a failure, and it will be answered defensively unless you say that it is not.',
  '⚠ And say what the answer is **for**, in one line of action. _Add one line to the fault sheet: first noticed (date, approximate)._ A question with no use attached is answered briefly; a question with four seconds of action behind it is answered properly.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note asking the one question you could not form (60 words or more).'));
out.push(p('**______________ · the question I could not ask** · ______________   In ______________ I asked you ______________ and you told me ______________. That was my fault and not yours.   **The question.** How long had ______________ before ______________?   **Why ______________ is no use on its own.** ______________ tells me ______________. The gap tells me ______________.   **What I think the answer is, and I may be wrong.** About ______________. I say that because ______________.   **Why I am asking you and not ______________.** ______________.   **What I am not asking.** I am not asking ______________.   **What I shall do with the answer.** ______________. It costs ______________.   **And the thing about myself.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The question correctly formed — auxiliary first, main verb unchanged',
  'Why the obvious answer or the obvious document cannot do it',
  'The blame taken off the answerer, in so many words',
  'One line of action the answer is for, with its cost',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their question only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) asking the one question you have not been able to ask: the wrong question you asked instead, the right one, why the document cannot answer it, your own guess with its evidence, what you are not asking, what the answer is for, and the thing about yourself.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the question correctly formed**, **the blame taken off the answerer**, **one line of action**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your question.** Then the count: how many of the questions in this room are about **a length of time** rather than about a moment? Almost none, until today. A question about a moment gets a date that is already in a file; a question about a length of time gets the one figure that exists nowhere except in somebody\'s memory — and it is always the figure that explains the thing.'));
out.push(hw('Write the note (60+ words). Then ask your question, this week, of the person who would know — and write down the answer and whether it was a figure or a shrug.'));

// ======================= 24.3 =======================
out.push(pb());
out.push(h2('24.3  By January I shall have written it nine times'));
out.push(p('**Function:** saying what will be finished by a time   ·   **Grammar:** the future perfect — _will have done_ · _will have been doing_   ·   **Pronunciation:** the three unstressed words in the middle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One thing each that will be **finished** by a date you can name — this month, this year, by the time something else happens. Your teacher asks for the date first and the thing second, which is the order the grammar needs.'));
out.push(board('By the twentieth of January I shall have written that answer nine times.', '_by… I will have…_'));
out.push(p('**b**  Finish each with the future perfect. **1** _By June I ___ (be) in this job for ten years._  **2** _By the time she arrives I ___ (write) it twice more._  **3** _By Friday the engineer ___ (not come)._  **4** _By the end of the month I ___ (count) for thirty days._  **5** _By January we ___ (wait) since August._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the date Mazen keeps saying, and what does he say he will have done by it?   **A** the twentieth of January; written the answer nine times and been at it for fourteen months   **B** the end of February; sold the four handsets   **C** the first of June; finished the course'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say this form is in the last unit and not earlier?   **2** What does Mazen say the form does to a deadline?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  Nine times by the twentieth', [
  ['Mazen', 'The meeting with the distributor is the twentieth of January, and I have been saying a sentence to myself for a fortnight that I could not say in English until this week.'],
  ['Ms Huda', 'Say it.'],
  ['Mazen', 'By the twentieth of January I shall have written that answer nine times. And by the twentieth of January I shall have been chasing this since November of last year — fourteen months.'],
  ['Omar', 'Why could you not say it before?'],
  ['Mazen', 'Because I only had two shapes. _I have written it six times_ — true now, and it says nothing about January. Or _I will write it three more times_ — true, and it sounds like a plan nobody has to believe. What I wanted was the **total at a date in the future**, and there is one form for that and I did not have it.'],
  ['Ms Huda', 'And it is the twelfth square on the map, and it is the only new grammar in this unit. I keep it until the end for one reason: it is useless until you have something to count. A student in January can say _by June I will have studied English for a year_, and it is true and it is empty. Mazen has fifteen entries in a fault book, four handsets, a letter of the 24th of November and a meeting on the 20th of January — and now the form has work to do.'],
  ['Jad', 'What does it do that the others cannot?'],
  ['Mazen', 'It puts a deadline and a quantity in one sentence, and that changes what a deadline is. _The meeting is on the twentieth_ is a date in a diary. _By the twentieth I shall have written the answer nine times_ is a date with my own work attached to it, and the second one cannot be postponed by anybody, because the nine times are mine.'],
  ['Nour', 'And the second version — shall have been chasing?'],
  ['Mazen', 'That one is for the length. Fourteen months. And I shall say it in the meeting, once, in exactly those words, because a man who says _I have been chasing this a long time_ is complaining and a man who says _by today I shall have been chasing this for fourteen months_ has given them a figure (22.3). They can check it: my first letter is dated.'],
  ['Ms Huda', 'Now the two shapes, and they are easy because nothing changes. **_will have_ + the past participle** for a completed total — _will have written_. **_will have been_ + _-ing_** for a length — _will have been chasing_. ⚠ And the part that goes wrong is never the form; it is the **_by_**. _By the twentieth_, not ~~until the twentieth~~, and never ~~in the twentieth~~.'],
  ['Mazen', 'And one more thing, which I did not expect. I wrote the sentence down on the fourth of January, and the number in it was nine. I have written it twice since then because the sentence was on my desk saying nine.'],
  ['Ms Huda', 'Which is the useful accident of the form. **A sentence in the future perfect is a promise with arithmetic in it**, and the arithmetic goes on sitting there after you have stopped thinking about it.'],
]));
out.push(sp());
out.push(box('Language box – the future perfect', [
  '**Two shapes, and nothing changes in either:**',
  table(['shape', 'what it says', 'example'], [
    ['_**will have** + past participle_', 'a **total**, completed by a future time', '_By the 20th I **will have written** it nine times._'],
    ['_**will have been** + -ing_', 'a **length**, measured at a future time', '_By the 20th I **will have been** chasing this for fourteen months._'],
  ], [2.0, 1.9, 2.4]),
  '⚠ **The preposition is where it goes wrong, not the verb.** _**By** Friday_ — on or before Friday, and the sentence is about the total at that point. ~~Until Friday~~ means the action continues up to Friday and then stops, and ~~in Friday~~ is not English. The exam tests the preposition at least as often as the form.',
  '**What it does that nothing else does: it puts a deadline and a quantity in one sentence.** _The meeting is on the 20th_ is a date in a diary. _By the 20th I shall have written the answer nine times_ is a date with your own work attached — and the nine times cannot be postponed by anybody, because they are yours.',
  '**And the length version is the one that replaces a complaint with a figure** (22.3): _I have been chasing this a long time_ is a complaint; _by today I shall have been chasing this for fourteen months_ is a figure, and the first letter is dated, so it can be checked.',
  '⚠ **It is useless until you have something to count**, which is why it is in the last unit: _by June I will have studied English for a year_ is true and empty. The form works on fifteen entries in a fault book, a hundred and eighteen night shifts, eleven mornings at a bus stop.',
  '**Useful phrases:** I only had two shapes · what I wanted was the total at a date in the future · a date with my own work attached to it · a promise with arithmetic in it.',
  '**Practise:** Say each with _by_ and a date, twice — once as a total and once as a length.  1 something you are writing  2 something you are counting  3 something you have been chasing  4 something you are learning  5 something you are waiting for',
  '**Pronunciation.** 🔊 **Track 24.6** The three words in the middle are **unstressed and run together**, and the stress is on the participle and the figure: _bytheTWENtieth I\'ll\'ve **WRITten** it **NINE** times._ Students who stress _have_ sound as though they are insisting. Listen to six and write the participle and the number.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a date. B says what they will have **done** by it, with a number, and then what they will have **been doing**, with a length. A then asks the one useful question: _what is the number now?_ Swap cards.'));
out.push(dlg(null, [
  ['A', 'By __________?'],
  ['B', 'By __________ I shall have __________ ______ times.'],
  ['B', 'And by __________ I shall have been __________ for __________.'],
  ['A', 'What is the number now?'],
  ['B', '______. So __________ to go.'],
]));
out.push(table(['Card A – the date', 'Card B – the date'], [
  ['_by the end of this month_', '_by the end of this course_'],
  ['_by the time the tender is decided_', '_by the time the post is filled_'],
  ['_by the first of June_', '_by the first of September_'],
  ['_by the time you next see that person_', '_by the time the timetable is reprinted_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight totals and the eight lengths, and then write the eight answers to _what is the number now?_ The finding is in the gap between the two columns: where the gap is one or two, the sentence was a description; where it is six or nine, the sentence is a commitment, and the speaker heard that for themselves as they said the second figure.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say your own date and then both sentences — the total and the length. Then say what the number is **today**, and what would have to happen each week for the first sentence to be true.'));
out.push(p('**b**  Swap. Then each of you write your partner\'s **total** sentence on a piece of paper for them to keep on their desk, with today\'s number beside it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The meeting with the distributor is the twentieth of January, and Mazen has been saying a sentence to himself for a fortnight that he could not say in English until this week: by the twentieth of January I shall have written that answer nine times, and by the twentieth of January I shall have been chasing this since November of last year — fourteen months. Omar asked why he could not say it before, and Mazen said he only had two shapes: "I have written it six times", which is true now and says nothing about January, or "I will write it three more times", which is true and sounds like a plan nobody has to believe. What he wanted was the total at a date in the future, and there is one form for that and he did not have it. Ms Huda said it is the twelfth square on the map and the only new grammar in the unit, and she keeps it until the end for one reason: it is useless until you have something to count. A student in January can say "by June I will have studied English for a year" and it is true and empty, whereas Mazen has fifteen entries in a fault book, four handsets, a letter of the twenty-fourth of November and a meeting on the twentieth of January — so now the form has work to do. Jad asked what it does that the others cannot, and Mazen said it puts a deadline and a quantity in one sentence, which changes what a deadline is: the meeting is on the twentieth is a date in a diary, and by the twentieth I shall have written the answer nine times is a date with his own work attached, and the second cannot be postponed by anybody because the nine times are his. Nour asked about the length version, and he said that one is for the fourteen months, and he will say it in the meeting once, in those words, because a man who says he has been chasing it a long time is complaining and a man who gives a figure can be checked — his first letter is dated. And Mazen said the thing he did not expect: he wrote the sentence down on the fourth of January with the number nine in it, and he has written the answer twice since, because the sentence was on his desk saying nine._'));
out.push(p('**Listener task:** write one total sentence from this room and the number it stands at today.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Mazen keeps on his desk. Answer the questions.'));
out.push(model([
  '**THE TWENTIETH OF JANUARY · what will be true by then** · M. Hariri · written 4 January',
  '**The date.** 20 January. The meeting the distributor asked for in their letter of 12 December.',
  '**What I shall have done by then.** I shall have written the answer to the hard question nine times. Today it stands at six. _(Two more by the 11th; the ninth on the 18th, out loud, once.)_',
  '**What I shall have been doing by then.** I shall have been chasing this since 19 November of last year — fourteen months. My first letter is dated and they have it.',
  '**What I shall have counted by then.** Eighteen entries in the fault book. It stands at fifteen; three of the four handsets go into service this month and each one gets a line whether it fails or not.',
  '**What will not be finished by then, and I am not pretending otherwise.** The specification. They have never sent it, I have asked twice, and I shall ask a third time in that room — and if the answer is no, the answer is no, and I shall have asked three times in writing.',
  '**Why the sentence is on my desk and not in a notebook.** Because the number in it is nine and it sits there saying nine. I wrote it on the 4th and I have written the answer twice since, and the only reason is that the paper was in front of me.',
  '**And the sentence I shall say in the meeting, once.** _By today I shall have been asking about this for fourteen months, and I have written my own answer to your question nine times._ Then nothing. The figures are checkable and the silence is theirs to fill.',
]));
out.push(item('1', 'What are the two numbers for the answer, and what are the three dates in that line?'));
out.push(item('2', 'What will not be finished by the 20th, and what will he have done about it?'));
out.push(item('3', 'Why does he say the sentence is on his desk rather than in a notebook?'));
out.push(writers([
  'A sheet of what will be true by a date: **the date, and where it comes from** → **what you will have done, with today\'s figure beside it** → **what you will have been doing, with the length** → **what you will have counted** → **what will _not_ be finished, and that you are not pretending** → **why the sheet is where you can see it** → **and the one sentence you will say out loud**.',
  'Put **today\'s number** beside every future total. _Nine by the 20th; it stands at six today._ A future perfect without the present figure beside it is a wish; with it, the gap is visible and the gap is what does the work.',
  'Break the gap into dates. _Two more by the 11th; the ninth on the 18th._ Three small dates under one big one is the difference between a target and a plan, and it costs one line.',
  '⚠ Write the paragraph of **what will not be finished**. _They have never sent the specification, and if the answer is no, the answer is no — and I shall have asked three times in writing._ A sheet on which everything is finished by the date is not a plan, it is an advertisement for yourself written to yourself.',
  '⚠ And end with the one sentence you will actually say, and then stop. _By today I shall have been asking about this for fourteen months, and I have written my own answer to your question nine times. Then nothing._ The figures are checkable; the silence after them is the other side\'s to fill.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the sheet of what will be true by your own date (60 words or more).'));
out.push(p('**______________ · what will be true by then** · ______________ · written ______________   **The date.** ______________. ______________.   **What I shall have done by then.** I shall have ______________ ______ times. Today it stands at ______. _(______ more by ______________; the ______ on ______________.)_   **What I shall have been doing by then.** I shall have been ______________ since ______________ — ______ months.   **What I shall have counted by then.** ______. It stands at ______, because ______________.   **What will not be finished by then.** ______________. I shall have ______________.   **Why the sheet is where I can see it.** ______________.   **And the sentence I shall say, once.** "______________" Then nothing.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_By_ + a real date, never _until_ or _in_',
  'Today\'s figure beside every future total',
  'The gap broken into two or three smaller dates',
  'One paragraph of what will _not_ be finished — and one sentence to say out loud',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the thing that will **not** be finished by their date.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full sheet (140 words or more) for a real date of your own: what you will have done with today\'s figure, what you will have been doing with its length, what you will have counted, what will not be finished, where the sheet will live, and the one sentence you will say.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **_by_ + a real date**, **today\'s figure beside every total**, **the paragraph of what will not be finished**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your total sentence and today\'s figure.** Then put the sheets where you will see them, because that is the whole of the cycle and it is not a metaphor: Mazen wrote nine on the fourth of January and had written twice more by the eleventh, and the only reason was that the paper was on the desk. **A sentence in the future perfect is a promise with arithmetic in it**, and the arithmetic goes on sitting there after you have stopped thinking about it.'));
out.push(hw('Write the sheet (60+ words) and put it where you will see it every day. Then, in one week, write the new figure beside the old one — and nothing else.'));

// ======================= 24.4 =======================
out.push(pb());
out.push(h2('24.4  What I cannot yet do'));
out.push(p('**Function:** saying what you can and cannot yet do in English   ·   **Grammar:** _I can now… · I still cannot… · I can… but only when…_   ·   **Pronunciation:** the stress on _yet_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Two lists, said out loud, and the second one first: **what you cannot yet do in English.** Then what you can. Your teacher counts both. The second list will be twice as long as the first in every chair, and nobody will have written it down before.'));
out.push(board('I can ask a question. I cannot yet ask one when two people are already arguing.', '_I can now… · I still cannot… · but only when…_'));
out.push(p('**b**  Which are honest and which are empty? **1** _I can communicate quite well._  **2** _I can write a page of about a hundred and forty words in forty minutes._  **3** _My English has improved a lot._  **4** _I still cannot follow two people talking to each other._  **5** _I need to work on my vocabulary._  **6** _I can ask for a figure but not argue about one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Jad\'s figure for the year, and what is the first thing on his _cannot yet_ list?   **A** a hundred and four times he said _I do not know, I will find out_; following two people talking to each other   **B** nine hundred words a week; reading   **C** four hundred questions; writing letters'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say is wrong with the _I can…_ box at the end of each unit?   **2** What does Jad say about the sentence _I need to work on my vocabulary_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  The second list is the useful one', [
  ['Ms Huda', 'At the end of every unit in this book there is a box that says _I can…_, and you have ticked about a hundred and seventy lines in it. Today the other box, which is not printed anywhere: **I cannot yet.**'],
  ['Jad', 'Mine is longer than the first one.'],
  ['Ms Huda', 'Everybody\'s is, and that is not modesty; it is arithmetic. There is no end to the second list at any level, including mine.'],
  ['Omar', 'Jad, give us yours.'],
  ['Jad', 'Can do, with figures: about nine hundred words a week in English, of which about twelve are wrong — not my count, the editors\'. Four hundred and some forum answers. A forty-minute call with four people in which I asked three questions. And a hundred and four times this year I have said "I do not know, I will find out", which I counted because Ms Huda made us count things in Unit 3 and I have never stopped.'],
  ['Nour', 'And cannot yet?'],
  ['Jad', 'First one, and it is the one that frightens me: I cannot yet follow two people talking **to each other**. On that call, when two of the editors started disagreeing with one another about my own question, I lost about forty seconds of it. I can follow anybody talking to me. I cannot follow people talking across me.'],
  ['Lubna', 'That is exactly mine, and I am forty-six.'],
  ['Jad', 'Second: I can ask for a figure and I cannot argue about one. Third: I cannot write a letter that says no. I have written four and every one of them says no in the last line and sorry in the first three. And fourth, small and real — I cannot say a long number on the telephone without stopping in the middle.'],
  ['Ms Huda', 'Now why the second list matters more, and it is not a moral point. **The _I can…_ box is made of things somebody else chose**, and you tick them against a lesson you have just had. The _cannot yet_ list is made of things **you** found out, in a room, on a day, by failing — which means every item on it has a date and a place, and an item with a date and a place can be practised. _I need to work on my vocabulary_ has neither, and nobody has ever done anything about it.'],
  ['Jad', 'That sentence is on both of my old applications. I think it means _I would like to be better_, which is not information.'],
  ['Ms Huda', 'And the word that does the work in the second list is **_yet_**. _I cannot follow two people talking to each other_ is a statement about a person. _I cannot **yet** follow two people_ is a statement about a stage, and the whole of B2 is in that one syllable.'],
  ['Omar', 'So the list is the syllabus.'],
  ['Ms Huda', 'The list is your syllabus, and you have just written it. Nobody else in the world could have.'],
]));
out.push(sp());
out.push(box('Language box – the honest self-assessment', [
  '**Two lists, and the second one is written first:**',
  table(['you write', 'why it works', 'the empty version'], [
    ['_I can now write 140 words in 40 minutes._', 'a figure and a time', '~~My writing has improved.~~'],
    ['_I still cannot **yet** follow two people talking to each other._', 'a named situation that happened', '~~My listening is weak.~~'],
    ['_I can ask for a figure but not argue about one._', 'the limit named exactly', '~~I am not confident speaking.~~'],
    ['_I cannot write a letter that says no._', 'a document you have tried four times', '~~I need to work on my writing.~~'],
  ], [2.3, 1.7, 2.1]),
  '⚠ **_I need to work on my vocabulary_ is not information.** It has no figure, no date and no situation, and nobody has ever done anything about it. It means _I would like to be better_, which everybody would.',
  '**Why the _cannot yet_ list matters more than the _I can…_ box.** The box is made of things **somebody else** chose, ticked against a lesson you have just had. The list is made of things **you** found out, in a room, on a day, **by failing** — so every item has a date and a place, and an item with a date and a place can be practised. ⚠ That is the difference between a syllabus and a wish.',
  '**And the word that does the work is _yet_.** _I cannot follow two people talking to each other_ is a statement about a person. _I cannot **yet** follow them_ is a statement about a stage. ⚠ _Yet_ goes after the negative — _I cannot yet_, _I have not yet_ — and never at the front of the clause.',
  '**The useful shapes:** _I can now… · I can… **but only when**… · I can… **but not**… · I still cannot… · I cannot **yet**… · I can do it **in writing but not out loud**._ The third and the last are the ones that produce the exact items.',
  '**Useful phrases:** mine is longer than the first one, and that is arithmetic and not modesty · I can follow anybody talking to me; I cannot follow people talking across me · every item on it has a date and a place · the list is your syllabus, and nobody else in the world could have written it.',
  '**Practise:** Say each one twice — once as the empty version, once with a figure, a date or a situation.  1 listening  2 writing  3 speaking  4 reading  5 the telephone',
  '**Pronunciation.** 🔊 **Track 24.8** **_Yet_ takes the stress** and the sentence falls after it: _I cannot **YET** follow two people talking to each other._ ↘ Unstressed, _yet_ disappears and the sentence becomes a verdict on yourself. Listen to six and say which contain _yet_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes an empty claim from the card. B turns it into two sentences: one _I can… but only when…_ and one _I cannot yet…_, each with a situation that actually happened. A says which of the two is more useful to somebody teaching them. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I can __________, but only when __________.'],
  ['B', 'And I cannot yet __________ — on __________, when __________.'],
  ['A', 'The more useful one is __________, because a teacher could __________.'],
]));
out.push(table(['Card A – the empty claim', 'Card B – the empty claim'], [
  ['_My listening has improved._', '_My writing is better than it was._'],
  ['_I am not confident speaking._', '_I need to work on my vocabulary._'],
  ['_I can communicate quite well._', '_I understand more than I can say._'],
  ['_Reading is my strongest skill._', '_I have made considerable progress._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _cannot yet_ sentences and underline the **situation** in each. Then the finding: six or seven of the eight situations happened in the last three months, and most of them in the last three weeks — because a limit is only visible when you walk into it, and this class has spent three weeks walking into things on purpose.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read both your lists, the _cannot yet_ one first. Every item must have a figure, a date or a situation. Where an item has none, say so and put it aside: it is a feeling and not an item.'));
out.push(p('**b**  Swap. Then each of you choose the **one** item on your partner\'s _cannot yet_ list that could be practised next month, and say exactly how — where, with whom, and for how long.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda said that at the end of every unit in this book there is a box that says "I can", and the class has ticked about a hundred and seventy lines in it — and today the other box, which is not printed anywhere: I cannot yet. Jad said his is longer than the first one, and Ms Huda said everybody\'s is, and that is not modesty but arithmetic: there is no end to the second list at any level, including hers. Jad gave his. Can do, with figures: about nine hundred words a week in English, of which about twelve are wrong — the editors\' count and not his; four hundred and some forum answers; a forty-minute call in which he asked three questions; and a hundred and four times this year he has said "I do not know, I will find out", which he counted because the class was made to count things in Unit 3. And cannot yet, first and frightening: he cannot yet follow two people talking to each other — on that call, when two editors began disagreeing about his own question, he lost about forty seconds. He can follow anybody talking to him and he cannot follow people talking across him. Lubna said that is exactly hers and she is forty-six. Second: he can ask for a figure and cannot argue about one. Third: he cannot write a letter that says no — he has written four and every one says no in the last line and sorry in the first three. Ms Huda said why the second list matters more, and it is not a moral point: the "I can" box is made of things somebody else chose, ticked against a lesson just had, while the cannot-yet list is made of things the student found out by failing, in a room, on a day — so every item has a date and a place, and an item with a date and a place can be practised. "I need to work on my vocabulary" has neither, and nobody has ever done anything about it. Jad said that sentence is on both of his old applications and he thinks it means "I would like to be better", which is not information. And Ms Huda said the word that does the work is "yet", and the whole of B2 is in that one syllable._'));
out.push(p('**Listener task:** write one _cannot yet_ item from this room with its date and place.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Jad\'s two lists. Answer the questions.'));
out.push(model([
  '**TWO LISTS · J. ATTAR · 4 January · the second one written first**',
  '**WHAT I CANNOT YET DO**',
  '**1** Follow two people talking **to each other**. On 18 December, on a call with four editors, two of them began disagreeing about my own question and I lost about forty seconds of it. I can follow anybody talking to me.',
  '**2** Argue about a figure. When somebody said on that call that the disagreement happens "rarely", I had eleven cases in a notebook and said nothing.',
  '**3** Write a letter that says no. I have written four this year. Every one of them says no in the last line and sorry in the first three.',
  '**4** Say a long number on the telephone without stopping. _Four hundred and seventy-one thousand_ — I stop after _hundred_ every time.',
  '**WHAT I CAN DO NOW, WITH THE FIGURE BESIDE IT**',
  '**5** Write about nine hundred words a week in English, of which about twelve are wrong — the editors\' count, not mine.',
  '**6** Answer a technical question in writing for a stranger: about four hundred and ten this year, nineteen in English.',
  '**7** Say _I do not know, I will find out_: a hundred and four times since January. In January it was nought; I thought it was not allowed.',
  '**8** Ask a question that cannot be answered with reassurance. Three on one call, on 18 December; one produced four seconds of silence.',
  '**AND THE ONE I SHALL TAKE INTO B2.** Number 1 — not because it is the biggest but because I now know what it looks like: two voices, neither addressed to me, and forty seconds gone. I can sit in rooms where that happens, which is free, and count the seconds.',
]));
out.push(item('1', 'What is item 2, and what did he have in a notebook?'));
out.push(item('2', 'What does he say about item 7 in January?'));
out.push(item('3', 'Which item is he taking into B2, and for what reason?'));
out.push(writers([
  'Two lists, the **cannot yet** one first: **each item with the date and the place it happened** → then **what you can do now, with a figure beside every item** → **and the one item you will take into B2, with why and with what you will do about it**.',
  'Write the second list first and let it be longer. A page that leads with achievements is an application; a page that leads with limits is a syllabus.',
  'Give every _cannot yet_ item **the day it happened**. An item with a date is a thing you have seen; an item without one is a worry.',
  'Give every _can do_ item **a figure, and say whose it is**. _About twelve wrong — the editors\' count, not mine._ A figure attributed to somebody else is the strongest kind you can put about yourself (23.1).',
  '⚠ And end on the item you will take forward with a **free** way of practising it. _I can go and sit in rooms where that happens, which is free, and I shall count the seconds._ A plan that needs a course, a book or money is a plan for somebody else.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your two lists (60 words or more).'));
out.push(p('**TWO LISTS · ______________ · ______________ · the second one written first**   **WHAT I CANNOT YET DO**   **1** ______________. On ______________, ______________, and ______________.   **2** ______________. I can ______________ and I cannot ______________.   **3** ______________. I have ______________ ______ times. Every one of them ______________.   **WHAT I CAN DO NOW, WITH THE FIGURE BESIDE IT**   **4** ______________: ______________ — ______________\'s count, not mine.   **5** ______________: ______ this year, ______ of them in English.   **6** ______________: ______ times since January. In January it was ______.   **AND THE ONE I SHALL TAKE INTO B2.** Number ______. Not because ______________ but because ______________. I can ______________, which is free.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The _cannot yet_ list first, and longer',
  'A date and a place on every _cannot yet_ item',
  'A figure beside every _can do_ item, with whose figure it is',
  'One item carried into B2, with a free way of practising it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first _cannot yet_ item.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both lists in full (140 words or more): four things you cannot yet do, each with its date and place; four you can do now, each with a figure and whose figure it is; and the one you will take into B2 with a free way of practising it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **a date and a place on every _cannot yet_ item**, **a figure on every _can do_ item**, **a free way of practising the one you carry forward**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many items on your _cannot yet_ list happened in the last three weeks?** Most of them, in most chairs — and that is neither a coincidence nor a failure. A limit is only visible when you walk into it, and three weeks ago this class began walking into things on purpose. **The list is the dividend of those three weeks**, and it is the most valuable page in this book.'));
out.push(hw('Write both lists (60+ words). Then give the _cannot yet_ list to one person who knows your work, and ask them to add one item. Write down what they add.'));

// ======================= 24.5 =======================
out.push(pb());
out.push(h2('24.5  The next twelve months'));
out.push(p('**Function:** setting the next twelve months   ·   **Grammar:** _going to_ · _intend to_ · _aim to_ · _I shall have…_   ·   **Pronunciation:** the weak forms of _going to_ and _to_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One thing each for the next twelve months, and then your teacher asks the only question that matters: **on what date will we know whether you have done it?** Items without a date go on the other side of the board.'));
out.push(board('I am going to count for eleven days. I intend to ask three times in writing.', '_going to · intend to · aim to_'));
out.push(p('**b**  Which is which? Match **a** _going to_, **b** _intend to_, **c** _aim to_ to **1** a decision already taken, with the arrangements started.  **2** a target you may not reach, stated as a target.  **3** a settled purpose you have not yet begun to arrange.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the difference Rasha draws between her three items, and what is the last prediction she writes?   **A** one is arranged, one is intended, one is a target; that the blocks will be reviewed in the spring and no reason will be given   **B** they are all the same; nothing   **C** two are hopes; that she will be appointed'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say the three verbs are worth separating?   **2** What rule does Ms Huda give for the last prediction of the course?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  Arranged, intended, aimed at', [
  ['Rasha', 'I have three things for the next twelve months and I nearly wrote them as one list, and then I noticed they are not the same kind of thing at all.'],
  ['Ms Huda', 'Separate them.'],
  ['Rasha', 'The first I am **going to** do: I am going to take the B2 course in the spring. That is not an intention; the form is in and the fee is paid, and if I do not go it will be because something has happened to me.'],
  ['Omar', 'And the second?'],
  ['Rasha', 'The second I **intend to** do: I intend to train a second person on the pump settings. It is forty minutes, it is first on my own list, I have said it in a meeting — and nothing is arranged. No name, no date, no diary entry. Which, after 21.2, I know exactly what that means: an intention with nothing attached to it is a feeling.'],
  ['Jad', 'And the third?'],
  ['Rasha', 'The third I **aim to** do, and I am going to say the word aim because it is honest: I aim to be in a post where somebody else keeps the night record by the end of next year. I may not be. It depends on four people and one of them has not been appointed.'],
  ['Ms Huda', 'That is the whole distinction and it is worth two minutes. **_Going to_** is a decision taken and arranged — you can name the arrangement. **_Intend to_** is a settled purpose with nothing arranged yet, and ⚠ it is the dangerous one, because it feels like the first. **_Aim to_** is a target that depends on other people, said as a target, which is the honest word for about half of what anybody writes on a list like this.'],
  ['Nour', 'And what do you do with the intention?'],
  ['Rasha', 'What 21.2 says. I attach something. Forty minutes, one name, in the cover diary, before the end of February — and then it stops being an intention. I shall do it this week, because I have now said it in a room twice and that is the point at which I either arrange it or admit it is a feeling.'],
  ['Ms Huda', 'And then the last item, which is not a plan. The board came down in 23.7 and one line on it is still open — the first of June. This class has written a prediction in September, read it in February, read it again in December, and today you write the last one of the course. The rule is the one you have had since 14.1: **a date, a reason with a count in it, and the half you will not know by then.**'],
  ['Rasha', 'Mine is the spring review of the three-night blocks. I predict that it happens before the end of May and that the minute again gives no reason, because the October minute gave none and because a committee that has not stated a cause once will not state it on the second occasion either — that is one instance and a judgement, and I am marking it as a judgement. What I will not know by then is whether anybody has read the error count, because the minute will not say.'],
  ['Ms Huda', 'Which is the shape, and it is the last time I shall say it: the prediction is the cheap half. **The reason and the blind half are the whole of it**, and in two years that is the only thing on these sheets that has changed.'],
]));
out.push(sp());
out.push(box('Language box – the next twelve months', [
  '**Three verbs, and the middle one is the trap:**',
  table(['you say', 'what it means', 'the test'], [
    ['_I am **going to** take the B2 course._', 'decided **and arranged**', 'can you name the arrangement?'],
    ['_I **intend to** train a second person._', 'settled purpose, **nothing arranged**', '⚠ if nothing is attached, it is a feeling (21.2)'],
    ['_I **aim to** be in that post by next year._', 'a **target** that depends on others', 'who else has to act?'],
  ], [2.1, 1.8, 2.1]),
  '⚠ **_Intend to_ is the dangerous one because it feels like the first.** An intention with nothing attached to it is a feeling, and it is received as a feeling: no name, no date, no diary entry, nothing for anybody else to do. Attach **forty minutes, one name and a date**, and it becomes an arrangement.',
  '**_Aim to_ is the honest word for about half of any list of this kind**, and students avoid it because it sounds weak. It is not weak; it is accurate: a target that depends on four people, one of whom has not been appointed, is a target. ⚠ Writing it as _I am going to_ does not make it likelier — it makes you a person whose list cannot be read.',
  '**And the figures, from 24.3:** _by the end of February I shall have trained one person_ · _by June I shall have been counting for a year_. ⚠ A twelve-month list with no _by_ and no figure in it is a list of hopes, however carefully the verbs are chosen.',
  '**The last prediction of the course** (14.1, read in 18.7 and 23.7). The rule has never changed: **a date**, **a reason with a count in it** — and say whether the count is a pattern or a judgement — **and the half you will not know by then.** ⚠ The prediction is the cheap half; the reason and the blind half are the whole of it.',
  '**Useful phrases:** if I do not go it will be because something has happened to me · no name, no date, no diary entry · I am going to say the word aim because it is honest · that is one instance and a judgement, and I am marking it as a judgement.',
  '**Practise:** Say each with the right verb, and then attach something to the intention.  1 a course  2 a count you will start  3 a conversation you will have  4 a post you want  5 something you will stop doing',
  '**Pronunciation.** 🔊 **Track 24.10** _Going to_ runs to /ɡənə/ before a verb and _to_ in _intend to_ and _aim to_ weakens to /tə/: _I\'m **GON**na count_ · _I inTEND tə ask_. ⚠ A fully pronounced _to_ sounds like a reading voice. Listen to eight and write _going to_, _intend to_ or _aim to_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names something from the card for the next twelve months, choosing one of the three verbs. B applies the test — _can you name the arrangement?_ or _who else has to act?_ — and then says which verb A should actually have used. A then attaches something to it. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I __________ to __________.'],
  ['B', 'Can you name the arrangement? / Who else has to act?'],
  ['A', '__________.'],
  ['B', 'Then the verb is __________.'],
  ['A', 'So I shall attach __________ — ______ minutes, __________, by __________.'],
]));
out.push(table(['Card A – for the next twelve months', 'Card B – for the next twelve months'], [
  ['_a course you will take_', '_a count you will start_'],
  ['_a person you will train_', '_a question you will ask_'],
  ['_a post you want_', '_a letter you will write_'],
  ['_something you will stop doing_', '_a document you will ask for_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight items and the verb each speaker **first** chose, then the verb they ended with. Then the count: how many moved from _going to_ to _intend to_ or _aim to_? Five or six of eight — which is the finding, and it is not pessimism. A list in which everything is _going to_ is a list that cannot be read by anybody, because the reader cannot tell which items have arrangements behind them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your three items with the three verbs, and say the arrangement behind the first, what you will attach to the second, and who else has to act for the third. Then write your last prediction: date, reason with a count, and the half you will not know.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s reason is **a pattern or a judgement** — and if it is a judgement, say so out loud and let it stand as one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has three things for the next twelve months and nearly wrote them as one list, and then noticed they are not the same kind of thing at all. The first she is going to do: take the B2 course in the spring — not an intention, because the form is in and the fee is paid, and if she does not go it will be because something has happened to her. The second she intends to do: train a second person on the pump settings. It is forty minutes, it is first on her own list, she has said it in a meeting — and nothing is arranged: no name, no date, no diary entry. Which, after 21.2, she knows exactly what it means: an intention with nothing attached to it is a feeling. The third she aims to do, and she says she is going to use the word aim because it is honest: she aims to be in a post where somebody else keeps the night record by the end of next year. She may not be; it depends on four people and one of them has not been appointed. Ms Huda said that is the whole distinction — going to is a decision taken and arranged, and you can name the arrangement; intend to is a settled purpose with nothing arranged yet, and it is the dangerous one because it feels like the first; and aim to is a target that depends on other people, said as a target, which is the honest word for about half of what anybody writes on a list like this. Nour asked what she does with the intention, and Rasha said what 21.2 says: attach something — forty minutes, one name, in the cover diary, before the end of February — and she will do it this week, because she has now said it in a room twice, and that is the point at which you either arrange it or admit it is a feeling. Then the last item, which is not a plan: the board came down in 23.7 and the first of June is still open, and today the class writes the last prediction of the course. Rasha\'s is the spring review of the blocks: before the end of May, and the minute again giving no reason, because the October minute gave none — one instance and a judgement, and she marked it as a judgement. What she will not know by then is whether anybody has read the error count._'));
out.push(p('**Listener task:** write one item from this room whose verb changed, and one reason marked as a judgement.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Rasha\'s page. Answer the questions.'));
out.push(model([
  '**THE NEXT TWELVE MONTHS · and the last prediction** · R. Barakat · 5 January',
  '**What I am going to do, and the arrangement that proves it.** Take the B2 course in the spring. The form went in on 18 December and the first instalment is paid. If I do not go, it will be because something has happened to me.',
  '**What I intend to do, and what I am attaching to it today.** Train one other person on the pump settings. Forty minutes. Until today this had no name and no date, which after 21.2 I know makes it a feeling. So: Wafa\'a, on the Thursday of the first week in February, in the cover diary, forty minutes, and the diary entry goes in tomorrow morning.',
  '**What I aim to do, and who else has to act.** Be in a post by the end of next year where somebody other than me keeps the night record. Four people have to act and one of them has not been appointed. I am writing _aim_ and not _going to_, because a reader who cannot tell my arrangements from my hopes cannot use this page at all.',
  '**What I shall have done by June, in figures.** A hundred and eighteen night shifts this year became a count; by the first of June I shall have been keeping it for twelve months, and the figure will be about two hundred and thirty shifts and about twelve errors.',
  '**What I am going to stop.** Saying that the directorate\'s scheme covers four wards. I have no source for it and I have said it to six people (23.5).',
  '**THE LAST PREDICTION · test date: 31 May.** The three-night blocks will be reviewed again before the end of May, and the minute will again give no reason.',
  '**The reason, and it is a judgement and not a pattern.** The October minute gave no reason, and a committee that has not stated a cause once is unlikely to state it the second time. That is **one** instance, so this is a judgement with a single case behind it, and I am marking it as one.',
  '**And the half I will not know by then.** Whether anybody on that committee has read the error count. The minute will not say, and nobody will ever tell me.',
]));
out.push(item('1', 'What proves the first item is _going to_ and not an intention?'));
out.push(item('2', 'What exactly is she attaching to the second item, and when does the diary entry go in?'));
out.push(item('3', 'Why does she mark her reason as a judgement, and what is the blind half?'));
out.push(writers([
  'A twelve-month page: **what you are going to do, with the arrangement that proves it** → **what you intend to do, and what you attach to it today** → **what you aim to do, and who else has to act** → **what you will have done by a date, in figures** → **what you are going to stop** → **and the last prediction: date, reason, and the half you will not know**.',
  '⚠ Prove the _going to_ with the **arrangement**, not with your resolve. _The form went in on 18 December and the first instalment is paid._ Anything you cannot prove that way belongs under _intend_ or _aim_.',
  'Attach the intention **on the page itself**, with a name and a date, and say when the arrangement will be made. _The diary entry goes in tomorrow morning._ An intention that leaves the page unattached never comes back to it.',
  'Say why you are writing _aim_ and not _going to_: _a reader who cannot tell my arrangements from my hopes cannot use this page at all._ That sentence is what makes the honest verb read as strength instead of hedging.',
  '⚠ And mark your reason **a pattern or a judgement**, and let a single case stand as a judgement. _That is one instance, so this is a judgement with a single case behind it._ Two years of this course have changed one thing on these sheets, and it is that line.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your twelve-month page and your last prediction (60 words or more).'));
out.push(p('**THE NEXT TWELVE MONTHS · and the last prediction** · ______________ · ______________   **What I am going to do, and the arrangement that proves it.** ______________. ______________ on ______________. If I do not, it will be because ______________.   **What I intend to do, and what I am attaching today.** ______________. Until today it had ______________. So: ______________, on ______________, ______ minutes, and ______________ goes in ______________.   **What I aim to do, and who else has to act.** ______________. ______ people have to act and ______________.   **What I shall have done by ______________, in figures.** ______________.   **What I am going to stop.** ______________.   **THE LAST PREDICTION · test date: ______________.** ______________.   **The reason, and it is a ______________.** ______________.   **And the half I will not know by then.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each verb matched to its evidence — arrangement, attachment, or other people',
  'The intention attached on the page, with a name and a date',
  'One figure with _by_ and a date (24.3)',
  'The prediction with a test date, a reason marked pattern or judgement, and the blind half',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what they are going to **stop**.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more): the three verbs with their evidence, the attachment with its date, the figures with _by_, the thing you will stop, and the last prediction of the course with its reason and its blind half.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **each verb matched to its evidence**, **the intention attached today**, **the reason marked pattern or judgement**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read out your test date and your blind half, and nothing else.** Then the sheet goes up on the wall of Room 14, where the first one went up in September — one line each, with a name and a date, and nobody takes anything down. It will be read on the first of June, by whoever is in this room, including the students who are not here yet. **The prediction is the cheap half.** In two years the only thing on these sheets that has changed is the reason, and that is the whole of what this course has done.'));
out.push(hw('Write the page (60+ words) and make the one arrangement that turns your intention into a _going to_ — the diary entry, the telephone call, the name on a sheet. Then write one line saying what you did and on what day.'));

// ======================= 24.6 =======================
out.push(pb());
out.push(h2('24.6  The letter to your B2 self'));
out.push(p('**Function:** writing the sealed letter   ·   **Grammar:** everything in this book, in one page   ·   **Pronunciation:** reading your own sentence from a year ago'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put your three documents on the desk: the **week-one note** of 14 January, your **18.4** nine lines, and your **22.6** page. Read the first sentence of each, in that order, out loud. Nobody comments.'));
out.push(board('"I have never spoken it to a stranger." — 14 January.', 'the letter nobody will mark'));
out.push(p('**b**  Which belongs in a letter to yourself in a year\'s time? **1** a promise  **2** a figure from today  **3** a feeling you have today, dated  **4** advice  **5** one sentence somebody else said this year  **6** the thing you are frightened of  **7** what you will have forgotten by then'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Yara say she will have forgotten by next December, and what does Ms Huda say the letter must not contain?   **A** how hard the first fortnight was; promises and advice   **B** the names of her colleagues; figures   **C** the grammar; dates'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say nobody marks this letter?   **2** What does Yara say about the four sentences from January now?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  The thing I will have forgotten', [
  ['Ms Huda', 'Today\'s letter is the only piece of writing in two years that nobody will read but you. I shall not see it. You will seal it, write the date on the outside, and open it at the end of your B2 course.'],
  ['Omar', 'Then what is it for, if nobody marks it?'],
  ['Ms Huda', '**Because it is the only writing you will ever do with no reader to manage.** Every other page in this book has had somebody on the other side of it — a manager, a stranger, a committee, a panel. You have spent a year learning to write for a reader who owes you nothing. One page without one is worth having, and you will never get another chance to write to the only reader who will certainly understand every word.'],
  ['Yara', 'May I say the thing I am going to put first?'],
  ['Ms Huda', 'Say it.'],
  ['Yara', 'I am going to put the four sentences from the fourteenth of January at the top, again — the third time I have used them. And then one line underneath that I could not have written in January: _by the time you read this you will have forgotten how hard those four sentences were._'],
  ['Jad', 'Will you have?'],
  ['Yara', 'I nearly have already, and it is eleven months. In January I sat for forty minutes and produced four sentences and could not produce a fifth, and I remember that it was difficult but I no longer remember **what kind** of difficult. By next December I shall have been speaking English in a laboratory for two years and the four sentences will look like a child\'s page.'],
  ['Nour', 'So the letter is to stop you despising yourself in January.'],
  ['Yara', 'The letter is to stop me despising whoever I am next year for the same reason. Because I shall be stuck at something next December, and I shall want to think it is because I am slow, and the evidence that I am not slow is in a notebook from January that I shall have stopped believing.'],
  ['Ms Huda', 'Now the two rules for the page, and they are the only two. **No promises** — a promise to yourself in a sealed envelope is the cheapest sentence anybody can write, because nobody will ever check it. **And no advice** — you know less about next December than the person who opens the letter will. What you have that they have not is **today**: today\'s figures, today\'s feeling with its date on it, and the one thing you will have forgotten.'],
  ['Lubna', 'That is the hardest page in the book.'],
  ['Ms Huda', 'It is the shortest and the hardest, and it is the one thing in two years that I cannot help any of you with — which is the proof that the course is finished.'],
]));
out.push(sp());
out.push(box('Language box – the letter nobody will mark', [
  '**What goes in it, and the first three are the whole of it:**',
  table(['part', 'why', 'example'], [
    ['**The old evidence, quoted**', 'the reader will no longer believe it', '_"I have never spoken it to a stranger." 14 January._'],
    ['**Today\'s figures**', 'they will have changed and you will not know by how much', '_About nine hundred words a week; about twelve wrong._'],
    ['**Today\'s feeling, dated**', 'a feeling without a date cannot be compared with anything', '_Today I am frightened of the January interview._'],
    ['**The thing you will have forgotten**', 'it is the only thing you can give them that they cannot get', '_How hard those four sentences were._'],
    ['**One sentence somebody else said**', 'quoted, with who and when', '_"Nobody has ever asked me that." 2 December._'],
  ], [1.9, 2.0, 2.2]),
  '⚠ **No promises.** A promise to yourself in a sealed envelope is the cheapest sentence anybody can write, because nobody will ever check it. ⚠ **And no advice**: you know less about next December than the person who opens the letter does.',
  '**What you have that they will not have is _today_** — the figures, the feeling with its date, and the memory that will have gone. _By the time you read this you will have forgotten how hard those four sentences were_ is the sentence the letter exists to carry (24.3).',
  '**And the reason it is worth writing at all:** it is the only page you will ever write with **no reader to manage**. Every other page in this book has had a manager, a stranger, a committee or a panel on the other side of it. ⚠ Write this one in the register you actually think in, and do not tidy it.',
  '**Useful phrases:** I remember that it was difficult but I no longer remember what kind of difficult · the letter is to stop me despising whoever I am next year · the evidence that I am not slow is in a notebook I shall have stopped believing · it is the shortest and the hardest page in the book.',
  '**Practise:** Say each as a dated sentence for the letter.  1 a figure from today  2 what you are frightened of  3 what you will have forgotten  4 a sentence somebody said to you  5 what you were like in January',
  '**Pronunciation.** 🔊 **Track 24.12** Reading your own old sentence aloud: **flat, slowly, and without the small laugh.** _"I have never spoken it to a stranger."_ The laugh is the sound of a person distancing themselves from their own evidence, and it is the one thing that will make the letter useless to the person who opens it. Listen to the same four sentences read twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, and this stage is spoken and not written down by anybody. A reads one sentence from January. B asks the three questions. A answers, and then says the one thing they will have forgotten. Swap. **Nothing from this stage goes on a slip or into a report.**'));
out.push(dlg(null, [
  ['A', '_(from January)_ "__________."'],
  ['B', 'What is the figure for that today?'],
  ['B', 'What do you remember about writing it?'],
  ['B', 'And what will you have forgotten by next December?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – read from…', 'Card B – read from…'], [
  ['_your week-one note_', '_your 18.4 nine lines_'],
  ['_your 22.6 page_', '_your week-one note_'],
  ['_the first thing you wrote in English this year_', '_your 14.1 prediction_'],
  ['_a slip somebody wrote you in the spring_', '_a homework page from the autumn_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('No performance in this cycle. Instead, five minutes of silence with the three documents, and one instruction: **underline the sentence in the oldest of them that you would not write today**, and write today\'s version of it in the margin. Nobody reads anything out. Your teacher writes nothing on the board.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner one thing only: **what you will have forgotten by next December**, and why you think so. Then listen to theirs without answering it.'));
out.push(p('**b**  Then each of you, separately and in silence, write the four figures you want in the letter. Nobody looks at anybody\'s figures.'));
out.push(stage('4R', 'Report', 6));
out.push(p('There is no report in this cycle, and that is deliberate: it is the only stage in two years with nothing to hand in. Instead, your teacher reads this to the class:  _Ms Huda said today\'s letter is the only piece of writing in two years that nobody will read but the writer: she will not see it, the students seal it, write the date on the outside and open it at the end of their B2 course. Omar asked what it is for if nobody marks it, and she said because it is the only writing they will ever do with no reader to manage — every other page in the book has had a manager, a stranger, a committee or a panel on the other side of it. They will never get another chance to write to the only reader who will certainly understand every word. Yara said what she is going to put first: the four sentences of the fourteenth of January, at the top, for the third time — and then one line underneath that she could not have written in January: by the time you read this you will have forgotten how hard those four sentences were. Jad asked whether she will have, and she said she nearly has already, and it is eleven months: she remembers that it was difficult and no longer remembers what kind of difficult. Nour said so the letter is to stop her despising herself in January, and Yara said no — it is to stop her despising whoever she is next year for the same reason, because she will be stuck at something next December and will want to think it is because she is slow, and the evidence that she is not slow is in a notebook she will have stopped believing. Then Ms Huda gave the two rules, which are the only two: no promises, because a promise in a sealed envelope is the cheapest sentence anybody can write; and no advice, because you know less about next December than the person who opens the letter does. What you have that they have not is today._'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s letter. It is printed here with her permission, and it is the only letter in this book that was not written for anybody to read. Answer the questions.'));
out.push(model([
  '**TO MYSELF, AT THE END OF B2** · Y. Mansour · written 6 January · _to be opened December next year_',
  '**First, four sentences I wrote on 14 January last year.** _"I have studied English since I was eleven. I have never spoken it to a stranger. I work in a laboratory. I want to be able to answer the telephone."_ That took forty minutes and I could not write a fifth.',
  '**By the time you read this you will have forgotten how hard those four sentences were.** I have nearly forgotten already, and it is eleven months. I remember that it was difficult. I no longer remember what kind of difficult, and next December you will read those four lines and think they are a child\'s page. They are not. They are forty minutes and everything I had.',
  '**Today\'s figures, so that you can do the arithmetic yourself.** About nine hundred words a week in English, about twelve of them wrong. About four night telephone calls a month, two in English. One application sent, with a refusal in it. A hundred and eighteen afternoon runs, one of them eighteen hours late and written up in the December bulletin under my own name.',
  '**What I am frightened of today, 6 January.** The interview, if they give me one. Not the questions about the work — the moment when two of them start talking to each other and I lose it. I cannot yet follow that, and it will be in the room.',
  '**One sentence somebody else said this year.** On 2 December the senior technician said, when I asked whether there were exceptions I did not know: _"Nobody has ever asked me that."_ She then named two. I have thought about that sentence more than about anything I was taught.',
  '**And one thing I shall not write.** I shall not promise you anything, because nobody will ever check it and we both know that. I shall not give you advice either; you will know more than I do by then.',
  '**What I want from you, which is not a promise and is the only thing I am asking.** When you read this, write the four sentences you could not write today. Then put all three pages in the same envelope — January, this one, and yours — and look at the handwriting.',
]));
out.push(item('1', 'What does she say the four January sentences actually are?'));
out.push(item('2', 'What is she frightened of, and what is she not frightened of?'));
out.push(item('3', 'What is the one thing she asks of her B2 self, and why is it not a promise?'));
out.push(writers([
  'The letter: **the old evidence, quoted with its date** → **the thing they will have forgotten** → **today\'s figures, so that they can do the arithmetic** → **what you are frightened of today, dated** → **one sentence somebody else said** → **what you are not going to write** → **and the one thing you ask, which is not a promise**.',
  'Quote the oldest thing you have, with its date. The reader of this letter will no longer believe that sentence, and that disbelief is the whole gift.',
  '⚠ Put the forgetting **in the future perfect** (24.3): _by the time you read this you will have forgotten how hard those four sentences were._ It is the sentence the letter exists to carry, and it is the only thing in it that the reader cannot get anywhere else.',
  'Date the fear. _What I am frightened of today, 6 January: the moment when two of them start talking to each other._ A feeling with a date can be compared with something; a feeling without one is weather.',
  '⚠ And no promises and no advice. If you want to ask for something, ask for **a page**, not a behaviour: _write the four sentences you could not write today._ That can be done in twenty minutes by somebody who has forgotten everything else in this letter.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your letter (60 words or more). Nobody will read it.'));
out.push(p('**TO MYSELF, AT THE END OF B2** · ______________ · written ______________ · _to be opened _______________   **First, ______________ I wrote on ______________.** "______________" ______________.   **By the time you read this you will have forgotten ______________.** ______________.   **Today\'s figures, so that you can do the arithmetic yourself.** ______________. ______________. ______________.   **What I am frightened of today, ______________.** ______________. Not ______________ — ______________.   **One sentence somebody else said this year.** On ______________ ______________ said: "______________."   **And one thing I shall not write.** I shall not ______________, because ______________.   **What I want from you, which is not a promise.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The oldest evidence quoted, with its date',
  'The forgetting in the future perfect — _you will have forgotten…_',
  'At least three figures from today, and a dated fear',
  'No promises, no advice — and the one request is for a page, not a behaviour',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('**Nothing is shared.** Three minutes: seal the envelope, write the date on the outside, and write your own name on it. Your teacher collects nothing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the letter in full (140 words or more). The old evidence quoted, the forgetting, today\'s figures, the dated fear, one sentence somebody else said, what you will not write, and the one page you ask for. Then seal it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('**No peer review in this cycle.** Instead: five minutes in which each of you writes, on the **outside** of the envelope, one line for the person who opens it — the date, your name, and the number of pages inside. That line is the only part anybody else will ever see, including you, until next December.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One question, and anybody may decline it.** What is the one thing you will have forgotten? Say it in a sentence, or say nothing. Then the thing worth knowing: of eleven letters written in this room two years ago by a different class, nine were opened on time, and all nine of those students said afterwards that the only line that mattered was the one about forgetting — and that they had not believed it when they wrote it.'));
out.push(hw('Put the envelope somewhere you will find it and nobody else will look. Then write one line in your notebook — **not** in the letter — saying where it is. That line is the whole homework.'));

// ======================= 24.7 =======================
out.push(pb());
out.push(h2('24.7  Review & Mediate: What the certificate says, and the first fortnight'));
out.push(p('**Function:** explaining a certificate and a course description   ·   **Recycling:** Units 1–24   ·   **Exam practice:** B1 Preliminary Reading Part 4, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** By Friday I will have wrote it nine times.  **2** Until June I will have been counting for a year.  **3** Who did write the notice?  **4** How long it had been there before anybody saw it?  **5** I cannot follow yet two people talking to each other.  **6** I intend training a second person.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the sheet the centre hands out with the certificate.'));
out.push(box(null, [
  '**STATEMENT OF RESULTS AND COURSE DESCRIPTION** _(eight lines; handed out with the certificate)_',
  '**1**  This certificate records attendance at and completion of Proactive English B1: 252 hours over two academic years.',
  '**2**  The holder has been assessed at CEFR level B1 (Threshold).',
  '**3**  Assessment was by two internal papers (60 marks and 100 marks) and by continuous assessment of written work.',
  '**4**  This certificate is issued by this centre. It is not a Cambridge qualification.',
  '**5**  Holders wishing to sit B1 Preliminary should apply to an authorised centre; the nearest is in Damascus.',
  '**6**  The B2 course (Proactive English B2) runs over two academic years: 252 hours.',
  '**7**  B2 assumes that the student can follow a conversation between two other speakers and can write a report of about 250 words.',
  '**8**  Enrolment for the spring intake closes on 28 February.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Which line does Umm Kinan say is the most important and the worst placed, and which line does she say the class wrote for themselves last week?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  Eight lines, and the first fortnight', [
  ['Umm Kinan', 'I have read a great many of these in thirty-one years of teaching, and I read this one on Tuesday the way we read the procedure in 19.7. Eight lines, and they are not equal.'],
  ['Ms Huda', 'Start where you like.'],
  ['Umm Kinan', 'Line four, because it is the most important line on the page and it is in the middle, where nobody looks. _It is not a Cambridge qualification._ That is a fact and not a failing, and it is the line every one of us must be able to say out loud to an employer **before** they ask. A man who says it first is a man giving information. A man who says it when asked is a man who has been caught.'],
  ['Omar', 'And line two? That is the line everybody will quote.'],
  ['Umm Kinan', 'Line two is the weakest line on the page, and it will be quoted on every application any of us ever sends. _The holder has been assessed at CEFR level B1._ It says what we were **assessed at**. It does not say one thing about what any of us can do, and a stranger reading it learns nothing he could check — which is 22.6 exactly, printed on a certificate.'],
  ['Yara', 'So what do you put on the application instead?'],
  ['Umm Kinan', 'Both. Line two, because it is the official sentence and it is true — and then one line of your own with a figure in it. _Assessed at B1 (2 × internal papers, 252 hours). I answer about four night telephone calls a month in English and have done since March._ The certificate is the claim; your figure is the evidence.'],
  ['Jad', 'Line seven is the one I cannot stop looking at.'],
  ['Umm Kinan', 'Read it out.'],
  ['Jad', '_B2 assumes that the student can follow a conversation between two other speakers._ That is item number one on my _cannot yet_ list from 24.4. I wrote it on the fourth of January and I did not know it was printed on this sheet.'],
  ['Lubna', 'It is item one on mine as well.'],
  ['Umm Kinan', 'And that is the whole of why 24.4 is in this book. The B2 course\'s first assumption is this class\'s first gap, and you found the gap yourselves, last week, by failing at it in a room — not because anybody read you line seven. Which means every one of you walks into B2 already knowing what the first problem is, and nobody in my thirty-one years has ever walked into a course knowing that.'],
  ['Nour', 'And line eight?'],
  ['Umm Kinan', 'Line eight is the only line on the page with a date you can miss. The twenty-eighth of February. Three of the eight lines are administration, line five is useful once, and line eight is the one that costs you a year if you read the page in March.'],
  ['Ms Huda', 'Now the question I have been keeping for the end, and it is yours and not mine. There will be eleven people in this room in September who have never done any of this. **What do you tell them about the first fortnight?**'],
  ['Umm Kinan', 'The truth, and in this order. That the first fortnight is the worst of the two years and that nothing after it is as bad. That in the first week they will sit for forty minutes and produce four sentences and not be able to produce a fifth. And then the instruction, which is the only one that matters: **keep the four sentences.** Write the date on them and put them somewhere you will not lose them, because in eleven months they will be the only evidence you have that you were ever that person, and you will not believe them by then.'],
  ['Yara', 'Nobody told us that.'],
  ['Umm Kinan', 'Nobody told us that. You kept yours by accident, and it has been on the top of your application, in your bulletin item and in your letter. Eleven people in September can keep theirs on purpose, because you are going to tell them to — and that is the last thing this class does, and it is worth more than the certificate.'],
]));
out.push(sp());
out.push(box('Language box – reading a certificate and a course description', [
  '**Eight lines, four kinds. Read one at a time and ask what each line can do:**',
  table(['kind', 'the lines', 'what to do'], [
    ['**The official claim**', '2 — _assessed at CEFR level B1_', 'quote it, and add one line of your own with a figure'],
    ['**The fact you must say first**', '4 — _not a Cambridge qualification_', 'say it before anybody asks you'],
    ['**The line about what comes next**', '7 — what B2 assumes', 'match it against your own 24.4 list'],
    ['**Administration, and one date**', '1, 3, 5, 6, 8', 'read 8 twice: it is the one that costs a year'],
  ], [1.8, 2.1, 2.3]),
  '⚠ **The weakest line is the one that will be quoted most.** _The holder has been assessed at CEFR level B1_ says what you were assessed at and nothing about what you can do; a stranger learns nothing he could check (22.6). So quote it **and** add your own: _…I answer about four night telephone calls a month in English and have done since March._ **The certificate is the claim; your figure is the evidence.**',
  '⚠ **Say the awkward fact before you are asked.** _It is not a Cambridge qualification._ A person who says it first is giving information; a person who says it when asked is a person who has been caught (22.4).',
  '**Match the course description against your own list, not against your hopes.** Line 7 names exactly what most of this class put first on the _cannot yet_ list in 24.4 — following a conversation between two other speakers. ⚠ You found that by failing at it in a room, which is why you know it is true; reading it on a sheet would not have told you anything.',
  '**And the one line with a date you can miss:** _enrolment closes on 28 February_. Three of the eight lines are administration and one of them costs a year.',
  '**What to tell somebody about to begin:** the first fortnight is the worst of the two years; in the first week they will write four sentences and not a fifth; and **keep the four sentences, with the date on them** — because in eleven months they will be the only evidence that they were ever that person, and they will not believe them by then.',
  '**Pronunciation.** 🔊 **Track 24.14** Saying the awkward line first, flat and without apology: _It is **NOT** a Cambridge qualification. ‖ It is 252 hours and two internal papers._ Said quickly and quietly, it sounds like a confession; said flat, at the same speed as the rest, it is information. Listen to four pairs and say which speaker you would believe.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the sheets below and does **not** show it. A reads it once, then explains it: the official claim, the fact that must be said first, the line about what comes next, and the line with a date that can be missed. B must say which one line they would put on an application and what they would add to it. **Then, in two minutes together**, write the one sentence of your own that goes under the official claim. You do not have to agree. Change roles with the other sheet.'));
out.push(table(['Sheet A – a technical training certificate', 'Sheet B – a first-aid course statement'], [
  ['_1 Records completion of 180 hours over one year._', '_1 Records attendance at a 40-hour course._'],
  ['_2 The holder has been assessed as competent at level 3._', '_2 The holder has been assessed as proficient._'],
  ['_3 Assessment was by two practical tests._', '_3 Assessment was by one written paper._'],
  ['_4 This is not a trade licence._', '_4 This does not authorise clinical practice._'],
  ['_5 Licences are issued by the directorate on application._', '_5 Clinical authorisation is granted by the employer._'],
  ['_6 The level 4 course runs over one year._', '_6 The advanced course runs over 60 hours._'],
  ['_7 Level 4 assumes the ability to work unsupervised._', '_7 The advanced course assumes experience of two emergencies._'],
  ['_8 Applications for the autumn close on 31 July._', '_8 Enrolment closes six weeks before each course._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write, for each sheet, the four kinds and the sentence the pair wrote. On **both** sheets the official claim is line 2, the fact that must be said first is line 4, the line about what comes next is line 7, and the date that can be missed is line 8 — the same arithmetic as the class\'s own certificate, from two different trades. ⚠ And on both sheets, line 7 can be matched against a _cannot yet_ list: that is the use of the document, and almost nobody ever makes it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real certificate, statement of results, course description or training record of your own. Explain it to your partner **without showing it**: the official claim, the fact that must be said first, what the next course assumes, and the date that can be missed. Your partner must ask: _what would a stranger learn from line 2 that he could check?_, _which line would you say before being asked?_ and _what on your own list does the next course assume you can already do?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Umm Kinan has read a great many of these in thirty-one years of teaching, and she read this one on Tuesday the way the class read the procedure in 19.7: eight lines, and they are not equal. She started with line four, because it is the most important line on the page and it is in the middle where nobody looks — it is not a Cambridge qualification. That is a fact and not a failing, and it is the line every one of them must be able to say out loud to an employer before being asked: a man who says it first is giving information, and a man who says it when asked is a man who has been caught. Omar said line two is the line everybody will quote, and Umm Kinan said line two is the weakest line on the page and it will be quoted on every application any of them ever sends: the holder has been assessed at CEFR level B1 says what they were assessed at and nothing about what any of them can do, and a stranger reading it learns nothing he could check — which is 22.6 printed on a certificate. Yara asked what to put on an application instead, and the answer is both: line two, because it is the official sentence and it is true, and then one line of your own with a figure in it, because the certificate is the claim and your figure is the evidence. Jad said line seven is the one he cannot stop looking at: B2 assumes that the student can follow a conversation between two other speakers — which is item number one on his cannot-yet list from 24.4, written on the fourth of January, and he did not know it was printed on the sheet. Lubna said it is item one on hers as well. Umm Kinan said that is the whole of why 24.4 is in the book: the B2 course\'s first assumption is this class\'s first gap, and they found the gap themselves by failing at it in a room, not by being read line seven — so every one of them walks into B2 already knowing what the first problem is, and nobody in her thirty-one years has ever walked into a course knowing that. Nour asked about line eight, and it is the only line on the page with a date that can be missed: three of the eight are administration, line five is useful once, and line eight costs a year if the page is read in March. Then Ms Huda asked the question she had been keeping for the end: there will be eleven people in this room in September who have never done any of this — what do you tell them about the first fortnight? And Umm Kinan said the truth, in this order: that the first fortnight is the worst of the two years and nothing after it is as bad; that in the first week they will sit for forty minutes and produce four sentences and not be able to produce a fifth; and then the only instruction that matters — keep the four sentences, with the date on them, because in eleven months they will be the only evidence that they were ever that person, and they will not believe them by then._'));
out.push(p('**Listener task:** write the one sentence of your own that you would put under the official claim.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 4)', 7));
out.push(p('Read the article and choose the correct answer **A**, **B**, **C** or **D** for each question.'));
out.push(box(null, [
  '**WHAT A CERTIFICATE CAN AND CANNOT SAY**   from a magazine for language teachers',
  'I have spent twenty years writing the sentences that go on certificates, and I would like to defend them and then tell you what to do about them.',
  'The defence first. A line such as _the holder has been assessed at level B1_ is doing a job that nothing else can do: it is short, it is comparable between countries, and it can be verified by a telephone call to the centre that issued it. Anybody who has tried to write a one-line description of what a person can do in a language will know how quickly the alternatives become either dishonest or three pages long. The level is a coordinate, not a portrait, and coordinates are useful.',
  'What the line cannot do is tell the reader anything they could go and check about the person in front of them. Two holders of the same certificate will differ enormously: one answers telephone calls in a laboratory four times a month and the other has never spoken to a stranger. The certificate says the same thing about both of them, and it is right to, because what it is recording is an assessment and not a life.',
  'So the remedy is not a better certificate. Every few years somebody proposes one, with more lines and finer distinctions, and the result is a document that nobody outside the profession can read at all. The remedy is on the other side of the page: the holder adds one sentence with a figure in it. _Assessed at B1. I take about four telephone calls a month in English and have done since March._ The first sentence is the coordinate; the second is the thing a stranger can check in four minutes.',
  'I would go further. The sentence the holder adds should include something the certificate would never record — a refusal, or a thing they cannot yet do. _I cannot yet follow two people talking to each other._ No employer has ever seen that on an application and every employer knows it is true of most applicants, so it is read, correctly, as the sentence of somebody who has looked.',
  'And the line that matters most on the sheets I have written is always the one that says what the document is **not**: not a licence, not a Cambridge qualification, not an authorisation to practise. Holders hate that line and are wrong to. It is the only line on the page that will stop a conversation going badly at the worst possible moment, and the way to use it is to say it before anybody asks.',
], C.lyellow, C.orange));
[
  '**1**  What is the writer\'s main purpose in the second paragraph?   **A** to explain why a short official line is worth having   **B** to apologise for the wording used on certificates   **C** to compare certificates in different countries   **D** to argue that the alternatives are too expensive',
  '**2**  What does the writer say about two holders of the same certificate?   **A** One of them has usually been assessed wrongly.   **B** They may differ greatly, and the certificate is right to say the same of both.   **C** Employers can usually tell them apart.   **D** The difference is a matter of confidence rather than ability.',
  '**3**  What is the writer\'s attitude to proposals for a more detailed certificate?   **A** cautiously hopeful   **B** indifferent   **C** opposed, because the result cannot be read outside the profession   **D** opposed, because they would cost too much',
  '**4**  Why does the writer recommend including something the certificate would never record?   **A** Because employers prefer modesty.   **B** Because it makes the application longer.   **C** Because it is required by most application forms.   **D** Because it is read as the sentence of somebody who has looked at themselves.',
  '**5**  What would be the best summary of the whole article?   **A** Certificates should be rewritten to describe what people can do.   **B** The official line is worth keeping; the holder should add the evidence and say the awkward line first.   **C** Employers should stop relying on certificates altogether.   **D** Language levels cannot be measured in a useful way.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph that goes under the official line on an application (60 words or more).'));
out.push(p('**______________ · the line and what goes under it** · ______________   **The official line.** "______________"   **What a stranger can check in it.** ______________.   **My own sentence, with a figure.** ______________ — ______________, and I have done since ______________.   **And one thing the certificate would never record.** I cannot yet ______________. On ______________, ______________.   **The line I shall say before anybody asks.** "______________"   **Why I shall say it first.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The official line quoted exactly',
  'Your own sentence with a figure and a date, checkable by a stranger',
  'One thing you cannot yet do, with the occasion it happened',
  'The awkward line, said first, and why',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine for students.',
  '_"**What would you tell somebody starting the course you have just finished?** Tell us about the hardest part and the one thing you would make them do. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"I found the envelope at the back of the drawer, with the date on it in my own handwriting."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  By Friday I ___ it nine times.   a) will have written   b) will write   c) have written',
  '2  ___ June I shall have been counting for a year.   a) In   b) By   c) Until',
  '3  ___ wrote the notice?   a) Who did   b) Whom   c) Who',
  '4  How long ___ there before anybody saw it?   a) had it been   b) it had been   c) has it been',
  '5  I ___ to train a second person, but nothing is arranged yet.   a) am going   b) intend   c) will',
  '6  The form is in and the fee is paid: I ___ take the B2 course.   a) intend to   b) aim to   c) am going to',
  '7  I have ___ been able to ask that question.   a) yet not   b) not yet   c) not still',
  '8  By next year I shall have ___ doing this for two years.   a) been   b) be   c) being',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview).** 🔊 **Track 24.15** You will hear an interview with a teacher about a two-year English course. For each question choose the correct answer **A**, **B** or **C**.'));
[
  '**1**  What does she say was the hardest part of the two years for her students?   **A** the examinations   **B** the first fortnight   **C** the writing',
  '**2**  Why does she ask students to keep their first week\'s writing?   **A** so that the centre has a record   **B** to compare classes with one another   **C** because they will stop believing it',
  '**3**  What does she say about the _I can…_ boxes at the end of each unit?   **A** They are made of items somebody else chose.   **B** They are the most useful pages in the book.   **C** They should be filled in at the start of a unit.',
  '**4**  What does she say the course changed about her students\' predictions?   **A** they became more accurate   **B** the reasons underneath them changed   **C** they became shorter',
  '**5**  What does she say about her own prediction of September?   **A** It has been confirmed.   **B** She no longer remembers it.   **C** The evidence so far is against it.',
  '**6**  What does she say she cannot help the students with?   **A** the letter to their B2 self   **B** the examination   **C** the enrolment form',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Interviewer', 'Two years, two books, 252 hours. What was the hardest part for them?'],
  ['Ms Huda', 'The first fortnight, and nothing afterwards came near it. In the first week I ask for four sentences and I get four sentences, and about half the room cannot produce a fifth. After that it is work, and work is not hard in the same way.'],
  ['Interviewer', 'You ask them to keep that first page.'],
  ['Ms Huda', 'I ask them to keep it with the date on it, and I used to think it was sentimental. It is not. In eleven months they will not believe it: they will read their own four sentences and think somebody else wrote them, and then they will be stuck at something new and decide they are slow — and the only evidence they are not slow is the page they have stopped believing. So: the date, and somewhere they will not lose it.'],
  ['Interviewer', 'There is a box at the end of every unit that says _I can_.'],
  ['Ms Huda', 'There is, and it is the least useful page in each unit, and I would say so in print. Every line in it was chosen by somebody who is not the student, and they tick it against a lesson they have just had. The list that matters is the one nobody prints — what they cannot yet do — because they found those items themselves, by failing, in a room, on a day. An item with a date and a place can be practised.'],
  ['Interviewer', 'And the prediction board.'],
  ['Ms Huda', 'Went up in September of the first year, came down last month. What changed over two years was not whether they were right; the proportion of correct predictions moved very little. What changed is the **reason** underneath each one. In the first year they wrote judgements; by the second year they were writing counted patterns — three of the last four years, both shops from one distributor — and marking which was which.'],
  ['Interviewer', 'You put a prediction of your own on that board.'],
  ['Ms Huda', 'I did, and I shall report it the way I would report anybody else\'s. I predicted that eight of the eleven would be right about the event and wrong about the reason. Six dates have fallen and five were right in both halves. So there is no confirmation of my prediction and the evidence so far is against it, and the June reading will have to be done by somebody who is not me.'],
  ['Interviewer', 'Is there anything in the two years you cannot help them with?'],
  ['Ms Huda', 'One page. In the last unit they write a letter to themselves, to be opened at the end of their B2 course, and nobody reads it but them — not me, not a partner, nobody. It is the shortest and the hardest page in the book and I cannot help with a line of it, which is how I know the course is finished.'],
]));
out.push(p('**C  Writing.** Write the paragraph that goes under the official line (140+ words): the official sentence quoted, what a stranger can check in it, your own sentence with a figure and a date, one thing you cannot yet do with the occasion it happened, and the awkward line said first with the reason you say it first.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ see the twelve forms as answers to three questions — when, finished or not, how long',
  '☐ find the square on the map that I do not use, and the word I use instead',
  '☐ form a question in any tense, including about a length of time before something happened',
  '☐ say what I will have done, and what I will have been doing, by a date',
  '☐ write the _cannot yet_ list, with a date and a place on every item',
  '☐ tell _going to_ from _intend to_ from _aim to_, and attach something to the intention',
  '☐ write a prediction with a date, a reason marked pattern or judgement, and a blind half',
  '☐ read a certificate and say which line is the claim, which is the fact to say first, and which is the date I can miss',
], C.lblue, C.navy));
out.push(sp());
out.push(box('AFTER UNIT 24', [
  '**The End-of-Book Test comes next**: 100 marks over Reading (35), Writing (25), Listening (25) and Speaking (15), covering Units 13–24. The Writing paper allows 50 minutes. Everything in it has been practised in the x.7 cycles.',
  '**Then the certificate**, and the eight lines of 24.7. Three things to do before the end of February: quote line 2 and add your own sentence with a figure; be able to say line 4 before anybody asks; and read line 8, which is the only date on the page that costs a year.',
  '**And then B2**, whose first assumption is printed in line 7 and is already written at the top of your own _cannot yet_ list: following a conversation between two other speakers. You know what it looks like, you know the day it happened to you, and it is free to practise — rooms where people talk across you are everywhere.',
  '**Two things stay in this room.** The prediction sheet of 24.5, on the wall, to be read on the first of June by whoever is here. And eleven people arriving in September who have never done any of this — and one instruction you are going to give them, which is the last thing in this book: **write four sentences, put the date on them, and keep them.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
