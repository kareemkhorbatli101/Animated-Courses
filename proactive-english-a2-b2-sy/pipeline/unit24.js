// Proactive English A2 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 24  Looking Forward'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**24.1**  talk about next year: the three futures',
  '**24.2**  ask somebody about their plans',
  '**24.3**  say how long you have been doing something',
  '**24.4**  say what you hope and what you are worried about',
  '**24.5**  thank somebody and congratulate somebody',
  '**24.6**  say goodbye and keep in touch',
  '**24.7**  Review & Mediate: write to the class that comes after you',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The envelopes from Unit 13.** In the first week of this book you wrote down what you thought would have happened by the end of it. Your teacher has kept them. They are opened in 24.1.',
  '**The end-of-course evening** is in two weeks. Omar has twenty T-shirts, Hiba has a list, and nobody has booked the chairs.',
  '**Five of the class are going on to B1 in September** and four are not, and 24.6 is about the fact that those are not the same thing as caring more or less.',
], C.lyellow, C.orange));

// ======================= 24.1 =======================
out.push(pb());
out.push(h2('24.1  This time next year'));
out.push(p('**Function:** talking about next year   ·   **Grammar:** _going to_ · present continuous · _will_   ·   **Pronunciation:** _gonna_ and _\'ll_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives out the envelopes from Unit 13. Open yours. Read it to yourself first. Then read **one** sentence from it aloud, and say whether it happened.'));
out.push(board('I\'m going to apply in February.', 'going to · present continuous · will'));
out.push(p('**b**  Which one? **1** _I ___ apply in February._ (a plan you have made)  **2** _I ___ my sister at six._ (an arrangement, with a time)  **3** _I ___ help you._ (you have just decided)  **4** _It ___ be hot in August._ (a prediction)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is in the envelopes?   **A** letters from last year\'s class   **B** what the students wrote about themselves in Unit 13   **C** the plan for the end-of-course evening'));
out.push(p('**b**  Listen again. **1** What did Hiba write in January?   **2** What does Omar say about his own envelope?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  The envelope', [
  ['Ms Huda', 'You wrote these in the first week. Your own handwriting, your own name. Open them.'],
  ['Lina', 'I do not remember writing anything.'],
  ['Hiba', '(reading) "By the end of this book I am going to have applied for the teacher-training course. I am not going to tell my mother until I know."'],
  ['Lina', 'Hiba.'],
  ['Hiba', 'I wrote it in January and I had no intention of doing it. I wrote it because we had to write something.'],
  ['Ms Huda', 'And?'],
  ['Hiba', 'And I applied in February, and I have a place, and I told my mother on Sunday. Three sentences, and I wrote all three down before any of them was true.'],
  ['Omar', 'Mine says "I am going to buy a camera." That is all it says. Eleven words of nothing.'],
  ['Ms Huda', 'Read it again.'],
  ['Omar', '"I am going to buy a camera with my own money."'],
  ['Omar', '…All right. Yes. I see it.'],
  ['Ms Huda', 'Next year you are going to write another one, and none of you is going to believe it either. Write it anyway.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the three futures**',
  table(['form', 'use', 'example'], [
    ['**going to** + verb', 'a plan or intention you have already', '_I\'m **going to** apply in February._'],
    ['**present continuous**', 'an arrangement, usually with a time or a place', '_I\'m **meeting** my sister at six._'],
    ['**will / \'ll**', 'a decision made now · an offer · a prediction', '_I\'**ll** help you._ · _It **will** be hot._'],
  ], [1.1, 1.4, 1.5]),
  '**The difference between the first two is small and real.** _I\'m going to see her_ = I intend to. _I\'m seeing her at six_ = it is arranged, she knows, it is in the day.',
  '**_will_ is not the normal future in English.** Students use it for everything and it is wrong about half the time: for a plan use _going to_, for an arrangement use the present continuous, and keep _will_ for the moment of deciding, for offering, and for saying what you think.',
  '⚠ ~~I will apply in February~~ _(when you decided last month)_ → _I\'m **going to** apply in February._',
  '⚠ ~~I am going to meet my sister at six~~ _(when it is arranged)_ → _I\'m **meeting** my sister at six._ Both are understood; only one is what a speaker would say.',
  '⚠ ~~I\'m going to can drive.~~ → _I\'m going to **be able to** drive._  ⚠ ~~Next year I will going to study.~~ — one future at a time.',
  '**Practise:** Which future?  1 I ___ apply in February. (decided last month) 2 I ___ my sister at six. (arranged) 3 I ___ carry that for you. (deciding now) 4 It ___ rain. (prediction) 5 We ___ the chairs on Thursday. (booked already) 6 I ___ ring you tonight. (just thought of it)',
  '**Useful phrases:** I do not remember writing anything. · I had no intention of doing it. · Eleven words of nothing. · Read it again. · Write it anyway.',
  '**Pronunciation.** 🔊 **Track 24.2** _going to_ before a verb is said /ɡənə/ — _I\'m **gonna** apply_ — and _will_ almost disappears into the pronoun: _I\'**ll** help._ Both are normal, fast speech, and you should understand them and may use them. Listen and repeat eight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from the card; B says which future it needs and why. Then B makes a true sentence about themselves in the same form. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________" — which one?'],
  ['B', '__________, because __________.'],
  ['A', 'And a true one about you?'],
  ['B', 'I\'m __________.'],
  ['A', 'Is that a plan or an arrangement?'],
  ['B', 'It\'s __________, because __________ knows about it.'],
]));
out.push(table(['Card A', 'Card B'], [
  ['I ___ apply in February. (decided in December)', 'We ___ the chairs on Thursday. (booked last week)'],
  ['I ___ my sister at six. (arranged yesterday)', 'I ___ help you with those. (deciding now)'],
  ['It ___ be hot in August. (prediction)', 'I ___ learn to drive. (intention, no date)'],
  ['I ___ ring you tonight. (just thought of it)', 'The course ___ in September. (it is in the timetable)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** true sentences you hear and mark each **plan**, **arrangement** or **decision now**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner three things about next year: one **plan** (_going to_), one **arrangement** that is already fixed (present continuous), and one **prediction** (_will_). Your partner must say which is which.'));
out.push(p('**b**  Then look again at your envelope from Unit 13. Say **one** sentence from it that did not happen, and whether you still intend it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave out the envelopes we wrote in the first week, in our own handwriting. Lina did not remember writing anything at all. Hiba\'s said that by the end of the book she was going to have applied for the teacher-training course and that she was not going to tell her mother until she knew — and she says she wrote it in January with no intention of doing it, because we had to write something. She applied in February, she has a place, and she told her mother on Sunday. Omar\'s said "I am going to buy a camera", which he called eleven words of nothing until Ms Huda made him read it again: it says with his own money, and he has done that. Ms Huda says next year we are going to write another one and none of us is going to believe that one either, and we should write it anyway._'));
out.push(p('**Listener task:** write the sentence from somebody else\'s envelope that you would put in your own.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the envelope Ms Huda wrote for herself in Unit 13, and has opened with the class. Answer the questions.'));
out.push(model([
  '**January · for the end of Book 2 · H. Khalil**',
  'I am going to teach this group four times a week for twenty-four weeks. Thirteen of them have come back from Book 1 and eleven are new, and by the end I am not going to be able to remember which was which, and that is the thing I am most looking forward to.',
  '**What I am going to do.** I am going to stop finishing their sentences. I have done it for nine years and I have told myself for nine years that it saves time.',
  '**What is already arranged.** I am meeting the director in March about the second room. I am taking the B1 group in September, whoever is in it.',
  '**What I think will happen.** Four of them will not finish, and it will not be the four I would pick today. Two of them will be better than me at something by June, and they will not notice.',
  '**What I am afraid of.** That I will teach this book the way I taught it last year because it worked last year.',
  '**For June:** read this before you write the next one, and do not be kind about the first paragraph.',
]));
out.push(item('1', 'What is the thing she says she is most looking forward to?'));
out.push(item('2', 'What is already arranged, and what is only intended?'));
out.push(item('3', 'What is she afraid of?'));
out.push(writers([
  'A letter to yourself: **the facts and the numbers** → **What I am going to do** → **What is already arranged** → **What I think will happen** → **What I am afraid of** → **an instruction for the day you open it**.',
  'The four headings do the grammar. Intentions take _going to_, arrangements take the present continuous, predictions take _will_ — and because they are in separate paragraphs you can see whether you have been honest about which is which.',
  'Put **one** thing under _What I am going to do_ that you have failed at before, and say how long: _I have done it for nine years._ A list of new intentions with no history in it is a list of wishes.',
  '⚠ The last line is what makes the envelope worth keeping: an instruction to the person who opens it. _Do not be kind about the first paragraph._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the envelope for **next** year. It will be given back to you (35 words or more).'));
out.push(p('**______________ · for ______________ · ______________**   I am going to ______________. ______________.   **What I am going to do.** I am going to ______________. I have ______________ for ______________.   **What is already arranged.** I am ______________ in ______________. I am ______________.   **What I think will happen.** ______________ will ______________, and it will not be ______________.   **What I am afraid of.** That I will ______________.   **For ______________:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_going to_ for intentions · present continuous for arrangements · _will_ for predictions',
  'One intention you have failed at before, with how long',
  'A prediction you would be sorry to be right about',
  'A last line instructing the person who opens it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real envelope (60 words or more) for yourself, to be opened in a year. Nobody else will read it; your teacher will seal it and keep it. All five sections and the instruction at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Do **not** swap this one. Instead, read it again yourself and write three marks in the margin. ★ _the sentence I will be most pleased to read in a year._  ✓ _the one I have written before and not done._  ? _the one I am not sure I mean._'));
out.push(stage('7R', 'Share', 4));
out.push(p('Seal them. Write your name on the front and the date you want it opened. **Then: who has written a sentence they are afraid of?** Nobody has to say what it is; the count is the point.'));
out.push(hw('Write the **same envelope for somebody else** — a brother, a daughter, a friend — and give it to them (40+ words). Four sections. Do not predict anything you would not want to be right about.'));

// ======================= 24.2 =======================
out.push(pb());
out.push(h2('24.2  What are you going to do?'));
out.push(p('**Function:** asking somebody about their plans   ·   **Grammar:** question review, all tenses   ·   **Pronunciation:** weak forms in questions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says eight statements across all the tenses of the two books. The class makes the question for each, fast, with no thinking time. Auxiliary first, every time.'));
out.push(board('What are you going to do in September?', 'Are you…? · Did you…? · Have you…? · Will you…?'));
out.push(p('**b**  Match the question to the answer. **1** _Have you decided?_  **2** _Did you decide?_  **3** _Are you going to decide?_  **4** _Will you decide?_ — which one asks about **now**, which about **a day in the past**, which about an **intention**, and which is nearly a **request**?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour doing?   **A** asking Omar about the end-of-course evening   **B** asking Omar six questions about next year   **C** telling Omar what he should do next year'));
out.push(p('**b**  Listen again. **1** Which question can Omar not answer?   **2** What does Nour say about that?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  Six questions and one he cannot answer', [
  ['Nour', 'Six questions. You said I could.'],
  ['Omar', 'Go on.'],
  ['Nour', 'Are you going on to B1 in September?'],
  ['Omar', 'Yes. I have paid the first part.'],
  ['Nour', 'Have you told your father you are going to carry on?'],
  ['Omar', 'He asked me whether I was going to, which is not the same thing and is as close as he gets.'],
  ['Nour', 'Are you going to go on taking photographs, or was that one newspaper and the end of it?'],
  ['Omar', 'I am going to go on. I am meeting the man from the paper on the ninth, the first time anybody has arranged to meet me about anything.'],
  ['Nour', 'What are you going to do about the workshop?'],
  ['Omar', 'Nothing. For two years, nothing. And I am not saying that because it is the safe answer.'],
  ['Nour', 'Last one. Where do you want to be in five years?'],
  ['Omar', '…I do not know. And I have noticed that I do not mind not knowing, which is new.'],
  ['Nour', 'That is the only one of the six you answered without deciding what I wanted to hear first.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about plans — the questions you need**',
  table(['question', 'what it asks'], [
    ['_**Are you going to** carry on?_', 'an intention'],
    ['_**Are you** meeting him on the ninth?_', 'an arrangement'],
    ['_**Have you** decided / paid / told anybody?_', 'now, with the past inside it'],
    ['_**Did you** apply in February?_', 'one finished action, with a time'],
    ['_**What do you want to** do?_ · _**Where do you want to be**…?_', 'the open one, which gets the real answer'],
  ], [1.5, 1.3]),
  '**The auxiliary comes first, in every tense.** _**Are** you going to…?_ · _**Have** you told…?_ · _**Did** you apply…?_ · _**Will** you be there…?_ If you can do that one thing you can ask anything in English.',
  '⚠ ~~You are going to carry on?~~ → _**Are** you going to carry on?_  ⚠ ~~What you will do?~~ → _What **will** you do?_  ⚠ ~~go on to take photographs~~ → _go on **taking**_: after _go on_, _carry on_ and _keep_, use **-ing**.',
  '**The order that gets a real answer:** the closed questions first, the open one last. _Have you decided?_ gets you a fact; _where do you want to be in five years?_ gets you an answer only if the first four have already been given.',
  '**Practise:** Make the question.  1 you / going to / carry on 2 you / tell / your father / yet 3 you / apply / in February 4 what / you / going to / do / about the shop 5 where / you / want / be / in five years 6 you / be / there / on Thursday',
  '**Useful phrases:** Six questions. You said I could. · which is not the same thing and is as close as he gets · For two years, nothing. · I do not mind not knowing, which is new.',
  '**Pronunciation.** 🔊 **Track 24.4** In questions the small words disappear: _are you_ → /əjə/, _have you_ → /həvjə/, _did you_ → /dɪdʒə/. The **verb** keeps the stress: _have you **TOLD** him?_ Listen and repeat eight, then say them at speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the six questions on the card in order, ending with the open one. B answers honestly in one or two sentences. Then swap cards. The rule: A may not comment on any answer until all six are asked.'));
out.push(dlg(null, [
  ['A', 'Six questions. Are you going to __________?'],
  ['B', '__________.'],
  ['A', 'Have you told __________?'],
  ['B', '__________.'],
  ['A', 'Did you __________?'],
  ['B', '__________.'],
  ['A', 'What are you going to do about __________?'],
  ['B', '__________.'],
  ['A', 'Last one. Where do you want to be in five years?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – your six questions', 'Card B – your six questions'], [
  ['Are you going on to B1 in September?', 'Are you going to stay in this job?'],
  ['Have you told anybody at home?', 'Have you saved anything this year?'],
  ['Are you meeting anybody about it?', 'Are you studying anything next year?'],
  ['What are you going to do about the money?', 'What are you going to do about the room?'],
  ['Where do you want to be in five years?', 'Where do you want to be in five years?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the answer to the **last** question, word for word if you can. Then say which of the six questions was the hardest to answer and which was the hardest to **ask**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask your partner the six questions. You may not comment until all six are asked. Then swap.'));
out.push(p('**b**  Then each of you say which answer surprised you about **yourself** — not about them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour asked Omar six questions. He is going on to B1 in September and has paid the first part. His father has not been told, but his father asked him whether he was going to carry on, which Omar says is as close as he gets. He is going to go on taking photographs, and he is meeting the man from the paper on the ninth — the first time anybody has arranged to meet him about anything. He is going to do nothing about the workshop for two years, and he says that is not the safe answer. And the last question, where he wants to be in five years, he could not answer: he has noticed that he does not mind not knowing, which is new. Nour told him that was the only one of the six he answered without first deciding what she wanted to hear._'));
out.push(p('**Listener task:** write the question from today that you would not want to be asked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet that goes up on the board at the end of every Book 2. Answer the questions.'));
out.push(model([
  '**BEFORE SEPTEMBER — six questions, and you answer them on paper** · for every student finishing Book 2',
  '**1. Are you going on?** Yes, no, or not yet. If it is "not yet", write the month you will decide in, and write it as a date.',
  '**2. Have you told anybody at home?** If you have not, that is the question, not the money. Most people who stop, stop because nobody at home knows it matters.',
  '**3. What has it cost you this year, in hours?** Four a week, thirty-two weeks, plus the homework. Write the number. People who know the number carry on; people who think of it as "the class" stop first.',
  '**4. What are you going to do about the one thing that has been hard all year?** Name it. For most of this group it is speaking in front of the room.',
  '**5. What is already arranged for September?** Not what you intend — what is in the day, with a date on it.',
  '**6. Where do you want to be in five years?** You may answer "I do not know". You may not leave it blank, and the difference between those two is the whole sheet.',
]));
out.push(item('1', 'What must you write if your answer to question 1 is "not yet"?'));
out.push(item('2', 'Why does the sheet say question 2 is not about money?'));
out.push(item('3', 'What is the difference between answering "I do not know" and leaving question 6 blank?'));
out.push(writers([
  'A set of questions for somebody else to answer: **the question in bold** → **what counts as an answer** → **why it is being asked**.',
  'Say what counts as an answer: _write the month, and write it as a date_ · _not what you intend — what is in the day_. A question with no standard attached gets a sentence that means nothing.',
  'Give the **reason** under the hardest question. _Most people who stop, stop because nobody at home knows it matters._ That line is why somebody answers truthfully instead of politely.',
  '⚠ Allow an honest **I do not know**, and say so. A sheet that will not accept it gets lied to, and then every answer on it is worth nothing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write six questions for somebody who is at the end of something (35 words or more).'));
out.push(p('**BEFORE ______________ — six questions** · for ______________   **1. Are you ______________?** ______________. If it is "______________", write ______________.   **2. Have you ______________?** If you have not, ______________.   **3. What has it cost you in ______________?** Write the number. People who ______________; people who ______________.   **4. What are you going to do about ______________?** Name it.   **5. What is already arranged?** Not what you intend — ______________.   **6. ______________?** You are allowed to answer "______________". You are not allowed to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every question starts with an **auxiliary** or a question word',
  '_going to_, present continuous and _will_ each used where they belong',
  'Every question says what counts as an answer',
  'One question allows an honest "I do not know"',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their question 6.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real sheet (60 words or more) for the people who come after you in something you are finishing — this course, a job, a year, a flat, a team. Six questions, each with a standard and a reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Answer your partner\'s six questions in writing, honestly, and give the answers back with the sheet. ★ _The question that made me write something true._  ✓ _One question I could answer with nothing._  ? _What would you do with my answers?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which question in this room would you least like to answer?** Collect three. In most classes it is question 2, and the reason is never the money.'));
out.push(hw('Answer your **own** six questions, on paper, and keep it with the envelope (40+ words). Then ask one person at home question 2.'));

// ======================= 24.3 =======================
out.push(pb());
out.push(h2('24.3  How long have you been here?'));
out.push(p('**Function:** saying how long   ·   **Grammar:** _How long have you…?_ + _for_ / _since_   ·   **Pronunciation:** weak _for_ and _since_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Stand in a line, in order of **how long you have been coming to this centre** — longest at the window. You must sort yourselves out in English and you have four minutes.'));
out.push(board('I\'ve been here for two years.', 'for + a length · since + a point'));
out.push(p('**b**  _for_ or _since_? **1** ___ two years  **2** ___ 2013  **3** ___ nine months  **4** ___ I was nineteen  **5** ___ the winter  **6** ___ a fortnight'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they working out?   **A** how long each of them has been coming   **B** who is going on to B1   **C** how much the course has cost'));
out.push(p('**b**  Listen again. **1** Who has been coming longest, and how long?   **2** What has Lina been doing for nine months without noticing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  Nine months', [
  ['Ms Huda', 'How long have you been coming here? Longest first.'],
  ['Hiba', 'Two years and two months. Since the March before last.'],
  ['Omar', 'Two years. I started the week after Hiba and she has never let me forget it.'],
  ['Lina', 'Nine months. Since September.'],
  ['Nour', 'Nine months as well, and it feels like four.'],
  ['Ms Huda', 'Hiba — what have you done for two years that you did not do before?'],
  ['Hiba', 'I have talked in front of a room. Every Thursday for two years. I have not minded it since about March.'],
  ['Ms Huda', 'Lina?'],
  ['Lina', 'I do not know. Nine months and I cannot name anything.'],
  ['Omar', 'You have written to Türkiye on your own. You have complained to a printer and got the money back. You have taken over Rana\'s job.'],
  ['Lina', 'That is work. That is not this.'],
  ['Omar', 'You did the first one in English, in writing, by yourself, in April. You could not have done that in September and I was there in September.'],
  ['Lina', '…All right. Nine months.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _How long…?_ with _for_ and _since_**',
  table(['_for_ + a **length** of time', '_since_ + a **point** in time'], [
    ['_**for** two years · **for** nine months_\n_**for** a fortnight · **for** ten minutes_',
     '_**since** September · **since** 2013_\n_**since** the winter · **since** I was nineteen_'],
  ], [1.3, 1.3]),
  '**The answer uses the present perfect, because it is still true:** _I **have been** here **for** two years._ · _I **have lived** in Damascus **since** 2011._',
  '⚠ ~~I am here since two years.~~ → _I **have been** here **for** two years._ This is the commonest error in the whole book and it survives into B1 and B2 if it is not fixed now.',
  '⚠ ~~since two years~~ → _**for** two years_.  ⚠ ~~for September~~ → _**since** September_.',
  '**_since_ can take a whole clause:** _since I was nineteen_ · _since I came to Damascus_ · _since my father died_. The clause is in the **past simple**.',
  '**The question:** _**How long have you** been here / lived here / worked there / known him?_ And the short answer is just the phrase: _Two years._ · _Since September._',
  '**Practise:** _for_ or _since_, and make the sentence.  1 two years 2 2013 3 nine months 4 I was nineteen 5 the winter 6 a fortnight 7 last Thursday 8 ten minutes',
  '**Useful phrases:** How long have you been coming here? · It feels like four. · That is work. That is not this. · You could not have done that in September and I was there in September.',
  '**Pronunciation.** 🔊 **Track 24.6** Both words are weak and fast: _for_ is /fə/ and _since_ keeps its /s/ but no stress. The **number** carries the stress: _for **TWO** years_ · _since **SEP**tember._ Listen and repeat eight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks _how long have you…?_ about each thing on the card; B answers with **both** a _for_ and a _since_ where they can. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How long have you __________?'],
  ['B', 'For __________. Since __________.'],
  ['A', 'And how long have you __________?'],
  ['B', 'Since __________ — so that is __________.'],
  ['A', 'What have you done in that time that you could not do before?'],
  ['B', 'I have __________.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [
  ['been coming to this centre', 'lived in this city'],
  ['lived in your flat', 'worked where you work'],
  ['known the person next to you', 'had your telephone'],
  ['been learning English', 'been getting up at the time you get up'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write four answers and mark every _for_ and _since_. Were any of them the wrong way round?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner how long you have been doing four things, using _for_ and _since_. Then, for each one, say **one** thing you can do now that you could not do when you started.'));
out.push(p('**b**  Swap. Then each of you name something the **other** person can do now and has not noticed — like Omar does with Lina.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba has been coming for two years and two months, since the March before last. Omar has been coming for two years — he started the week after Hiba and she has never let him forget it. Lina and Nour have both been coming for nine months, since September, and Nour says it feels like four. Hiba says what she has done for two years that she did not do before is talk in front of a room, every Thursday, and that she has not minded it since about March. Lina said she could not name anything at all in nine months, and Omar named three: she has written to Türkiye on her own, she has complained to a printer and got the money back, and she has taken over Rana\'s job. She said that is work, not this, and he said she did the first one in English, in writing, by herself, in April, and that she could not have done it in September — and he was there in September._'));
out.push(p('**Listener task:** write the thing somebody else can do now that they have not noticed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lina writes that evening. Answer the questions.'));
out.push(model([
  '**Nine months · 14 June · for myself, and I am not showing anybody**',
  'I have been coming here since September. Nine months, four hours a week, thirty-one weeks. I could not name one thing I have learned when I was asked today in front of everybody, and I want to write down why.',
  'It is because none of it arrived. I did not learn to write a formal letter on a Tuesday. There was no day when I could suddenly complain to somebody and get the money back.',
  '**Here is what I could not do in September, and I have the dates.** I could not write to a supplier without Rana reading it first — I did that alone on 2 April. I could not say "I am afraid that is not acceptable" to anybody at all — I said it on 11 May to a printer, in a shop, out loud. I could not ask somebody a question twice — I have done that so many times since February that I have stopped counting.',
  'And one more, which is the one I mind: in September I did not answer anybody in this room unless I was asked by name.',
  '**What I am going to do about today.** I am going to keep a page. Not a diary. One line a month: the thing I could not do last month. I have been doing this for nine months with no page and I have lost most of it, and losing it is why I stood there today with nothing to say.',
]));
out.push(item('1', 'Why does she say she could not name anything?'));
out.push(item('2', 'What are the three dated things she could not do in September?'));
out.push(item('3', 'What is she going to do, and why?'));
out.push(writers([
  'A page for yourself: **how long, with the numbers** → **why you cannot name anything** → **what you could not do then, with dates** → **the one you mind** → **what you are going to do about it**.',
  'Use _for_ and _since_ in the first two lines and then move to **dates**: _I did that alone on 2 April._ The dates are what turn a feeling into a record.',
  'Explain why nothing is nameable: _none of it arrived · there was no day when_. Everybody in the room believes they are the only one who cannot name anything.',
  '⚠ End with something **small enough to do**: _one line a month_. A plan to keep a diary is abandoned in nine days; a plan to write twelve lines in a year is not.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "how long" page (35 words or more).'));
out.push(p('**______________ · ______________ · for myself**   I have been ______________ since ______________. ______________ months, ______________ a week.   It is because none of it arrived. I did not ______________ on a Tuesday.   **Here is what I could not do in ______________, and I have the dates.** I could not ______________ — I did that on ______________. I could not ______________ — I ______________ on ______________.   And one more, which is the one I mind: ______________.   **What I am going to do.** I am going to ______________. One ______________ a ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_for_ + a length · _since_ + a point · the present perfect in the answer',
  'Never ~~I am here since~~ — always _I **have been** here_',
  'At least two things you could not do, with **dates**',
  'A plan small enough to still be happening in a year',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one "I could not… I did that on…" pair.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about something you have been doing for more than six months — this course, a job, a city, a marriage, a language, a responsibility. How long, why you cannot name anything, four dated things, the one you mind, and the small plan.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person they were when they started**. ★ _The one I would not have believed._  ✓ _One line with no date on it._  ? _Is the small plan actually small enough?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read four **"the one I mind"** lines aloud. **How many are about speaking rather than about English?** Count. It is almost always all of them, and that is worth saying in the last fortnight of a course.'));
out.push(hw('Ask somebody at home how long they have been doing the thing they do, and what they could not do when they started (40+ words). Write their _for_ and their _since_, and their dates.'));

// ======================= 24.4 =======================
out.push(pb());
out.push(h2('24.4  I hope… and I\'m worried that…'));
out.push(p('**Function:** saying what you hope and what you fear   ·   **Grammar:** _I hope_ · _I\'m worried that_ + _will_   ·   **Pronunciation:** stress on _hope_ and _worried_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each round the room: _I hope that…_ about September. No repeats, and nobody may say "I hope everything will be fine".'));
out.push(board('I hope it will be easier than I think.', 'I hope (that) … will · I\'m worried that … will'));
out.push(p('**b**  Hope or worry? Say each one both ways. **1** the course  **2** the money  **3** my mother  **4** the new class'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hiba worried about?   **A** the course itself   **B** her mother   **C** the money'));
out.push(p('**b**  Listen again. **1** What does Lina hope?   **2** What does Hiba say she is **not** worried about, and why does she say it is strange?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  What I hope and what I am afraid of', [
  ['Lina', 'What are you actually afraid of? The course or the shop?'],
  ['Hiba', 'Neither. I am worried that my mother will be fine about it.'],
  ['Lina', 'That she will be fine.'],
  ['Hiba', 'If she is angry I can argue with her. If she says "of course, go", then I have taken four days a week off a woman who has stood in that shop since she was seventeen, and she will have given it to me without a word, and I will carry that.'],
  ['Lina', 'And what do you hope?'],
  ['Hiba', 'I hope she will say something difficult. One sentence. Something I have to answer. Then it is between us and not inside me.'],
  ['Lina', 'My one is smaller and stupider. I am worried that I will be worse at Rana\'s job than Rana, and everybody will be kind about it.'],
  ['Hiba', 'You will be worse at it than Rana. For about four months.'],
  ['Lina', '(laughs) Thank you. That is the most useful thing anybody has said to me about it.'],
  ['Hiba', 'And what do you hope?'],
  ['Lina', 'I hope that in October I will not be able to remember what I was frightened of in June. That is all. I have had that happen once and I would like it again.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Hopes and worries**',
  table(['you say', 'with'], [
    ['_**I hope (that)** she **will** say something._', '_will_ + verb'],
    ['_**I hope (that)** it **is** not too late._', 'the present, when it is about **now**'],
    ['_**I\'m worried (that)** I **will** be worse at it._', '_will_ + verb'],
    ['_**I\'m afraid of** being late._ · _**I\'m afraid of** the exam._', '_of_ + **-ing** or a noun'],
  ], [1.8, 1.1]),
  '⚠ ~~I hope to she will come.~~ → _I hope **(that)** she will come._  And _I **hope to** come_ (I hope to do it myself) is a different pattern: _hope **to** + verb_ for yourself, _hope **that** + somebody_ for other people.',
  '⚠ ~~I am worried for the exam.~~ → _I\'m worried **about** the exam._ · _I\'m worried **that** I will fail._',
  '⚠ ~~I am afraid of be late.~~ → _afraid of **being** late_.  ⚠ ~~I wish she will come~~ → _I **hope** she will come._ _wish_ is for things that are not true.',
  '**_hope_ and _wish_:** _I **hope** you pass_ (it may happen) · _I **wish** I could help_ (I cannot). Students use _wish_ for both and it makes a hope sound like a regret.',
  '**Practise:** Say it as a hope and as a worry.  1 the course / be difficult 2 my mother / be angry 3 the money / be enough 4 the new class / know each other 5 I / forget my English',
  '**Useful phrases:** What are you actually afraid of? · Mine is smaller and stupider. · You will be worse at it than Rana. For about four months. · Then it is between us and not inside me.',
  '**Pronunciation.** 🔊 **Track 24.8** The stress goes on **hope** and on **worried**, not on the thing itself: _I **HOPE** she will say something._ · _I\'m **WORR**ied that she will be fine._ Flattening those two words makes the sentence sound like a report. Listen and repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a subject from the card; B says a **hope** and a **worry** about it, in full sentences. A then asks _what are you actually afraid of?_ and B answers again, more honestly. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I hope that __________ will __________. And I am worried that __________ will __________.'],
  ['A', 'What are you actually afraid of?'],
  ['B', 'Not that. I am worried that __________.'],
  ['A', 'And what do you hope?'],
  ['B', 'I hope __________. That is all.'],
]));
out.push(table(['Card A – the subjects', 'Card B – the subjects'], [
  ['September', 'the money next year'],
  ['the new class', 'telling your family'],
  ['your English in a year', 'the job you are taking over'],
  ['the person who takes your place', 'the thing you have not decided yet'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the first worry and the **second** one. The second answer is nearly always the real one, and it is nearly always about a person.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner one hope and one worry about next year. Your partner asks _what are you actually afraid of?_ once, and then stops asking.'));
out.push(p('**b**  Swap. Then each of you say which of the two things you said out loud you have never said to anybody at home.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina asked Hiba what she is actually afraid of, the course or the shop, and it is neither: she is worried that her mother will be fine about it. If her mother is angry she can argue; if her mother says "of course, go", then she has taken four days a week off a woman who has stood in that shop since she was seventeen, and it will have been given without a word, and Hiba says she will carry that. What she hopes is that her mother will say one difficult sentence that she has to answer, so that it is between them and not inside her. Lina\'s is that she will be worse at Rana\'s job than Rana and that everybody will be kind about it — and Hiba told her she will be worse at it, for about four months, which Lina says is the most useful thing anybody has said to her. And Lina hopes that in October she will not be able to remember what she was frightened of in June._'));
out.push(p('**Listener task:** write the worry you heard today that is really about a person, not a thing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Hiba writes before she speaks to her mother. Answer the questions.'));
out.push(model([
  '**Before Sunday · what I am going to say, and what I am not** · Hiba',
  '**What I am going to say.** I have a place on the teacher-training course. It starts in September, it is four days a week, and I am going to take it.',
  '**What I am going to say second, and not first.** That I know what the shop is. Forty-one years. That I am not going because the shop is small, and that if I thought that I would not be able to say the next part.',
  '**What I hope she will do.** I hope she will say something difficult. I hope she will ask me who is going to do the Thursdays and the stocktaking and the deliveries, because I have an answer for all three and I have had it for a month.',
  '**What I am worried about.** I am worried that she will say "of course, go", and smile, and then say nothing about it again, ever. If she does that I will have taken something from her and she will have made sure I cannot give it back.',
  '**What I am not going to do.** I am not going to apologise. I am not going to say "only four days". And I am not going to tell her I nearly did not apply, because it would make her feel better and it is not true any more.',
  '**The sentence I am most afraid of, written down so that it is smaller:** "I would have liked that."',
]));
out.push(item('1', 'What is she going to say second, and why not first?'));
out.push(item('2', 'What three questions does she hope her mother will ask?'));
out.push(item('3', 'Why is she not going to say she nearly did not apply?'));
out.push(writers([
  'A page before a hard conversation: **what I am going to say** → **what I am going to say second, and not first** → **what I hope they will do** → **what I am worried about** → **what I am not going to do** → **the sentence I am most afraid of**.',
  'The order of the first two sections is the whole page. Deciding what comes **second** is how a difficult conversation is prepared; starting with it is how it goes wrong.',
  'Hope for the **difficult** thing when the difficult thing is what you can answer: _I hope she will ask who is going to do the Thursdays, because I have an answer._',
  '⚠ Write the sentence you are most afraid of hearing, in their words, at the bottom. It is always shorter than you expect, and seeing it written is most of what this page is for.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page before a conversation you have to have (35 words or more).'));
out.push(p('**Before ______________ · what I am going to say, and what I am not** · ______________   **What I am going to say.** ______________.   **What I am going to say second, and not first.** ______________.   **What I hope they will do.** I hope ______________ will ______________, because ______________.   **What I am worried about.** I am worried that ______________ will ______________. If ______________, then ______________.   **What I am not going to do.** I am not going to ______________. And I am not going to ______________.   **The sentence I am most afraid of:** "______________."'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_I hope (that) … will_ · _I\'m worried (that) … will_ · _afraid **of** + -ing_',
  'Not ~~worried for~~ · not ~~I wish she will~~',
  'A second section that is deliberately second',
  'The feared sentence written out, in their words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the "what I am not going to do" section only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real page (60 words or more) before the conversation you have been putting off — at home, at work, with a friend, with an office. All six sections, and the sentence at the bottom.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person they are going to speak to**. ★ _The part I would be glad was said._  ✓ _One place where the apology has got back in._  ? _Are you going to say the second section at all?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the feared sentences are under eight words?** Count them. Then ask how long each one has been waiting; the usual answer is months, and it has been eight words the whole time.'));
out.push(hw('Have the conversation, or write the reason you are not going to (40+ words). If you have it, write down the sentence they actually said next to the one you were afraid of.'));

// ======================= 24.5 =======================
out.push(pb());
out.push(h2('24.5  Thank you for the Thursdays'));
out.push(p('**Function:** thanking and congratulating   ·   **Grammar:** _thank you for_ + _-ing_ · _congratulate on_ + _-ing_   ·   **Pronunciation:** linking in _thank you for_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Everybody writes one name from this room and one thing that person has done this year. Fold them. Your teacher reads six aloud and the class guesses nothing — it is not a game.'));
out.push(board('Thank you for staying behind.', 'thank you for + -ing · congratulations on + -ing'));
out.push(p('**b**  Finish each one. **1** _Thank you for ___._  **2** _Congratulations on ___._  **3** _I want to thank you for ___._  **4** _Well done for ___._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is being thanked?   **A** Ms Huda, by the class   **B** the class, by Ms Huda   **C** both'));
out.push(p('**b**  Listen again. **1** What does Hiba thank Ms Huda for?   **2** What does Ms Huda thank the class for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  Thank you for the Thursday you did not have to do', [
  ['Hiba', 'We have something to say and I have been made to say it.'],
  ['Ms Huda', 'Go on.'],
  ['Hiba', 'Thank you for the Thursdays you did not have to do. The November one, when there were four of us and the heating was off and you taught the whole ninety minutes.'],
  ['Omar', 'And for not finishing our sentences. You said in January you were going to stop. You did stop, and it was horrible for about a month.'],
  ['Ms Huda', '(after a moment) Thank you for noticing the second one. Nobody has ever noticed the second one.'],
  ['Lina', 'And congratulations on the second room. We know you have been asking for three years.'],
  ['Ms Huda', 'Then I will say mine, and I am going to say it badly. Thank you for coming on the Thursdays when you did not want to. There were eleven of you in November and four came. I have taught for nine years and I have never had a class where the people who were not going anywhere came anyway.'],
  ['Omar', 'That is not badly.'],
  ['Ms Huda', 'And congratulations to Lina on nine months, which she still cannot see. The rest of you have been told what you have done. She has not, and she is the one who has changed most.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Thanking and congratulating**',
  table(['you say', 'followed by'], [
    ['_**Thank you for** staying behind._', '**-ing** · or a noun: _thank you for the books_'],
    ['_**Congratulations on** passing._', '**-ing** · or a noun: _congratulations on the job_'],
    ['_**Well done for** asking._', '**-ing**'],
    ['_**I want to thank you for** teaching us._', '**-ing**'],
  ], [1.7, 1.3]),
  '**After _for_ and _on_, the verb takes _-ing_.** This is the one structure in the unit that must be automatic: _thank you for **coming**_ · _congratulations on **getting** the place_.',
  '⚠ ~~Thank you for to help me.~~ / ~~Thank you for help me.~~ → _Thank you for **helping** me._',
  '⚠ ~~Congratulations for your place.~~ → _Congratulations **on** your place._  ⚠ ~~Congratulate you.~~ → _**Congratulations.**_',
  '**Thank somebody for the thing nobody thanks them for.** _Thank you for the Thursdays you did not have to do_ · _for not finishing our sentences_. The ordinary thanks has been said already and is worth nothing; the specific one is remembered for years.',
  '**Note the negative:** _thank you for **not** finishing our sentences_ — _not_ goes before the _-ing_.',
  '**Practise:** Finish them.  1 Thank you for ___ (stay behind) 2 Congratulations on ___ (get the place) 3 Thank you for ___ (not say anything) 4 Well done for ___ (ask twice) 5 I want to thank you for ___ (teach us on the Thursdays)',
  '**Useful phrases:** We have something to say and I have been made to say it. · Nobody has ever noticed the second one. · I am going to say it badly. · which she still cannot see',
  '**Pronunciation.** 🔊 **Track 24.10** _thank you for_ runs into one word and the _for_ is weak: /θæŋkjəfə/. Then the **-ing word** takes the stress: _thank you for **COM**ing._ Listen and repeat six, then say the negative ones.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A thanks B for the three things on the card, using _-ing_ and making one of them a **negative**. B answers each one with something other than "you\'re welcome". Then swap.'));
out.push(dlg(null, [
  ['A', 'Thank you for __________.'],
  ['B', '__________.'],
  ['A', 'And thank you for not __________.'],
  ['B', '__________. Nobody has ever __________.'],
  ['A', 'And congratulations on __________.'],
  ['B', 'Thank you. __________.'],
]));
out.push(table(['Card A – thank somebody for…', 'Card B – thank somebody for…'], [
  ['teaching the lesson when four people came', 'reading every letter for eleven months'],
  ['not finishing our sentences', 'not telling anybody what I said in March'],
  ['asking me twice when I said I was fine', 'coming to the hospital and saying nothing'],
  ['congratulations on the second room', 'congratulations on finishing Book 2'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **negative** thanks you hear. Which of the three thanks would the person remember in a year?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Thank your partner for **two** real things from this year — one ordinary and one that nobody has thanked them for. They must not say "you\'re welcome".'));
out.push(p('**b**  Swap. Then each of you name one person **not** in this room who should have been thanked this year and has not been.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The class thanked Ms Huda and Hiba was made to say it. She thanked her for the Thursdays she did not have to do — the November one, when there were four of them and the heating was off and she taught the whole ninety minutes. Omar thanked her for not finishing their sentences: she said in January she was going to stop, she did stop, and he says it was horrible for about a month. Ms Huda said thank you for noticing the second one, because nobody has ever noticed the second one. Lina congratulated her on the second room, which she has been asking for for three years. Then Ms Huda thanked them for coming on the Thursdays when they did not want to — eleven of them in November and four came — and said she has taught for nine years and never had a class where the people who were not going anywhere came anyway. And she congratulated Lina on nine months, which Lina still cannot see._'));
out.push(p('**Listener task:** write the thanks you heard that you would want somebody to say to you.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three notes left on the table at the end of the course. Answer the questions.'));
out.push(model([
  '**1 · Omar, to Ms Huda.** Thank you for not finishing my sentences, which I know you decided to stop doing and which cost you something. I counted, in February, and you let a silence go on for eleven seconds while I found a word. It was the longest eleven seconds of my life and I found the word.',
  '**2 · Ms Huda, to Lina.** Congratulations on nine months. You will not believe this list and I am writing it anyway: you answered a question without being asked by name on 14 November; you read something out on 3 February; you corrected me on 11 March and you were right; and you wrote to Türkiye alone in April. I have the dates because I write them down for everybody, and yours is the longest list in the class.',
  '**3 · Hiba, to her mother, not left on the table.** Thank you for the forty-one years in that shop, which I have never said and which I am saying in English because I am a coward in two languages. And thank you for asking me who was going to do the Thursdays instead of saying "of course, go". You will not know why that mattered. It is the only question all week that I had an answer to.',
]));
out.push(item('1', 'What did Omar count, and what happened?'));
out.push(item('2', 'Why does Ms Huda have the dates?'));
out.push(item('3', 'What does Hiba thank her mother for asking?'));
out.push(writers([
  'A note of thanks: **_thank you for_ + -ing, and the specific thing** → **the evidence, with a date or a number** → **what it cost them** → **one line that is only true because you are the one writing it**.',
  'Thank them for the thing that **cost** them something, and say that you know it cost them: _which I know you decided to stop doing_.',
  'Put a **number** in: _eleven seconds_ · _14 November_ · _forty-one years_. A number proves you were paying attention, which is the whole content of a thank-you.',
  '⚠ Thank people for **questions** and for things they did **not** do. Nobody is ever thanked for either, and both are remembered.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two notes — one thanking and one congratulating (35 words or more in total).'));
out.push(p('**Thanking:** Thank you for ______________, which ______________ and which cost you ______________. I counted, in ______________, and you ______________. ______________.   **Congratulating:** Congratulations on ______________. You will not believe this list and I am writing it anyway: you ______________ on ______________; you ______________ on ______________; and you ______________. I have the dates because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_thank you for_ / _congratulations on_ + **-ing**',
  'The negative in the right place: _thank you for **not** saying anything_',
  'At least one date or number as evidence',
  'One line that only you could write',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real note (60 words or more) to the person who should have been thanked this year and has not been. Specific, with a date or a number, including something they did not do, and one line only you could write.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the person it is addressed to**. ★ _The line I would keep._  ✓ _One sentence that could have been written to anybody._  ? _Are you going to give it to them?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Give them out, now, in the room, to the people who are here.** For the ones who are not here: who is going to send theirs this week? Count the hands and ask again at the end-of-course evening.'));
out.push(hw('Give or send the note. Write down what they said (40+ words) — and if it was nothing, write that, because it is usually the ones who say nothing who keep it.'));

// ======================= 24.6 =======================
out.push(pb());
out.push(h2('24.6  Keeping in touch'));
out.push(p('**Function:** saying goodbye and keeping in touch   ·   **Grammar:** goodbyes and arrangements   ·   **Pronunciation:** the intonation of goodbyes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Six goodbyes on the board. For each, the class says whether you will see the person next week, next year, or never: _See you Thursday · See you around · Keep in touch · All the best · Look after yourself · Goodbye._'));
out.push(board('Keep in touch — and I mean it.', 'See you… · Keep in touch · All the best'));
out.push(p('**b**  Which is real? **1** _We must meet up._  **2** _I\'m in the shop on Tuesdays — come in._  **3** _Let\'s keep in touch._  **4** _I\'ll ring you on the ninth._ Two of these will happen. Which two, and what makes the difference?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many of the four are going on to B1?   **A** all four   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** Why is Nour not going on?   **2** What does Omar arrange, and why does he do it that way?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  The last Thursday', [
  ['Hiba', 'So. September. Who is coming?'],
  ['Omar', 'Me. Paid.'],
  ['Lina', 'Me. The company is paying half, which I asked for and got, which is also something I could not have done in September.'],
  ['Nour', 'Not me.'],
  ['Hiba', 'Nour.'],
  ['Nour', 'Not this year. Mr Fouad is opening the second workshop in October and for six months I am going to be the person who is there. It is not the money and it is not that I do not want it.'],
  ['Omar', 'Then say when, not whether.'],
  ['Nour', 'September next year.'],
  ['Omar', 'Say it again with a date.'],
  ['Nour', '(laughs) The first week of September next year, and you are allowed to ask me in August.'],
  ['Omar', 'I am going to. Give me your number — I am putting it in with "ask about B1" next to it, because "keep in touch" is what people say when they are not going to.'],
  ['Hiba', 'And the evening is on the twenty-seventh. All four of us. That is an arrangement, not a hope.'],
  ['Nour', 'The twenty-seventh. I will be there.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Goodbyes, and which ones are real**',
  table(['you say', 'and it means'], [
    ['_**See you** Thursday._ · _**See you** on the 27th._', 'an arrangement — it will happen'],
    ['_**See you around.**_ · _**We must meet up.**_', 'a politeness — it will not'],
    ['_**All the best.** · **Look after yourself.**_', 'you may not meet again, and you mean well'],
    ['_**I\'ll ring you on the ninth.**_', 'an arrangement, because it has a date'],
  ], [1.6, 1.3]),
  '**A goodbye becomes real when it has a date, a place or a question in it.** _Come into the shop on a Tuesday_ · _I\'ll ring you on the ninth_ · _I am going to ask you in August._ Everything else is kind and nothing more.',
  '**Say when, not whether.** When somebody says no to something they want, ask for a date instead of an answer. _Not this year_ → _September next year_ → _the first week of September next year, and you may ask me in August._',
  '⚠ ~~See you on Thursday~~ for something not arranged is a small promise you are breaking: use _see you around_, or make it true.  ⚠ ~~Good bye~~ is one word, _goodbye_, and it is more final in English than in Arabic — for "see you later", say _see you_.',
  '**Practise:** Real or polite? Then make each one real.  1 We must meet up. 2 Keep in touch. 3 See you around. 4 I\'ll ring you. 5 Come and see us some time.',
  '**Useful phrases:** Who is coming? · Then say when, not whether. · Say it again with a date. · That is an arrangement, not a hope. · because "keep in touch" is what people say when they are not going to',
  '**Pronunciation.** 🔊 **Track 24.12** Goodbyes fall at the end, and the warmer they are the lower they go: _All the **best**._ ↘ _Look after your**self**._ ↘ A goodbye said with a rise sounds like a question or like doubt. Listen and repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says goodbye with the polite version on the card; B turns it into something real, with a date, a place or a question. Then B says the next one. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Make it real. __________?'],
  ['A', '__________.'],
  ['B', 'Say it again with a date.'],
  ['A', '__________, and you are allowed to ask me in __________.'],
  ['B', 'I am going to ask you in __________. Give me your number.'],
]));
out.push(table(['Card A – the polite versions', 'Card B – the polite versions'], [
  ['We must meet up some time.', 'Keep in touch!'],
  ['See you around.', 'Come and see us some time.'],
  ['I\'ll ring you.', 'Let me know how it goes.'],
  ['Maybe next year.', 'I\'ll see you at the evening, probably.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **real** version of each goodbye. Which of them has a date in it, and which has only a feeling?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say goodbye to your partner as if you were not going to see them again. Then make **one** arrangement that is real, with a date or a place.'));
out.push(p('**b**  Then both of you say one person you have said _keep in touch_ to and not kept in touch with, and whether you are going to do anything about it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Three of the four are going on to B1 in September. Omar has paid. Lina is going and the company is paying half, which she asked for and got, and which she says is another thing she could not have done in September. Nour is not going this year, because Mr Fouad is opening the second workshop in October and for six months she is the person who will be there, and she says it is not the money and not that she does not want it. Omar told her to say when and not whether, and then to say it again with a date, and she said the first week of September next year and that he may ask her in August. He has taken her number and written "ask about B1" next to it, because "keep in touch" is what people say when they are not going to. And the evening is on the twenty-seventh, all four of them, which Hiba says is an arrangement and not a hope._'));
out.push(p('**Listener task:** write the arrangement from today that has a date on it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three goodbyes Nour writes on the last Thursday. Answer the questions.'));
out.push(model([
  '**1 · To Ms Huda.** Thank you for nine months. I am not going on in September and I want you to have the reason in writing, because I am coming back and I do not want to be somebody who said they would. The second workshop opens in October and I am the person who will be standing in it. I am coming back in the first week of September next year. If I have not written to you by the first of August, write to me.',
  '**2 · To Omar.** You have my number with "ask about B1" next to it, so I have put "he is going to ask" next to yours. Two things. The newspaper is not a fluke and you know it is not, so ring the man on the ninth even if he does not ring you. And thank you for not asking me whether I was all right in November. You asked what I was going to do about it instead, which is a different question and the only one I could answer.',
  '**3 · To Lina, who will not read this for a week because she puts things in her bag.** Nine months, and you still cannot see it, so here it is from the next desk: in September you asked me to check every sentence you wrote in English. You stopped in February. You did not notice stopping, I did, and I have been waiting four months to tell you.',
]));
out.push(item('1', 'Why does Nour want Ms Huda to have the reason in writing?'));
out.push(item('2', 'What does she thank Omar for not doing, and what did he do instead?'));
out.push(item('3', 'What did Lina stop doing in February?'));
out.push(writers([
  'A goodbye that is meant: **what is ending and what is not** → **the date you are coming back, or the date you will know** → **one specific thing about the person** → **an instruction that makes it real**.',
  'Give them a way to **hold you to it**: _if I have not written to you by the first of August, write to me._ That sentence is the difference between a plan and a goodbye.',
  'Say the thing from **your** position that they cannot see from theirs: _here it is from the next desk_. Nobody can see their own nine months, and you can.',
  '⚠ Thank people for the question they asked instead of the obvious one. _You asked me what I was going to do about it instead_ — that is the specific, unforgettable kind of thanks from 24.5, used in a goodbye.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two goodbyes — one to somebody in charge, one to somebody beside you (35 words or more in total).'));
out.push(p('**To ______________:** Thank you for ______________. I am not ______________ and I want you to have the reason in writing, because ______________. ______________ in ______________ and I am ______________. I am coming back ______________. If I have not ______________ by ______________, ______________.   **To ______________:** Two things. ______________ is not ______________ and you know it is not, and you should ______________. And thank you for not ______________. You ______________ instead, which ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every arrangement has a date, a place or a question',
  'No _see you Thursday_ for something that is not arranged',
  'One instruction that lets them hold you to it',
  'One specific thing they cannot see from where they are',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the line that holds them to something.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real goodbye (60 words or more) to somebody you are leaving or who is leaving you — a class, a job, a city, a flat, a team. What is ending and what is not, a date, the specific thing, and the instruction.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s goodbye as **the person leaving or being left**. ★ _The line that means you are actually coming back._  ✓ _One promise with no date in it._  ? _What happens if neither of you writes?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Exchange numbers now, in the room, and write the **reason** next to each one as Omar does. **Then: how many of you have a number in your telephone with no reason next to it and no memory of who it is?**'));
out.push(hw('Send one of the goodbyes, with its date in it. Then put the date in your telephone (40+ words on what you sent and what the date is).'));

// ======================= 24.7 =======================
out.push(pb());
out.push(h2('24.7  Review & Mediate: What would you tell the next class?'));
out.push(p('**Function:** writing to the people who come after you   ·   **Recycling:** Units 1–24   ·   **Exam practice:** A2 Key Reading Parts 1–5, Writing Part 7'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I am here since two years.  **2** Thank you for help me.  **3** Congratulations for your place.  **4** I hope to she will come.  **5** I am worried for the exam.  **6** Next year I will going to study.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the letter the last Book 2 class left for this one. It was on the board in the first week and nobody read it until now.'));
out.push(box(null, [
  '**TO THE CLASS THAT COMES AFTER US** · left in June by the group before you',
  'Nine of us finished. There were sixteen in the first week. We are not going to tell you that the eleven who left were lazy, because four of them were better than us.',
  '**1. The Thursday after the first test is the day people stop coming.** Watch for it. If somebody is not there, ring them that evening, not the week after. Two of ours came back because somebody rang.',
  '**2. The writing is the part that moves.** It does not feel like it, because you cannot hear yourself write. Keep every Stage 7 you do. In June, read the one you wrote in week two. That is where the proof is.',
  '**3. Say the thing you cannot say.** You will sit in that room for twenty-four weeks deciding whether to speak. The people who left mostly left without ever having said anything difficult in front of us.',
  '**4. The envelope in Unit 13 is not a game.** Write something true in it, even if you do not believe it. Three of ours came out true and none of the three believed it in January.',
  '**5. And the thing we got wrong:** we were kind to each other and we did not correct each other. Correct each other. It is not rude; it is the only thing in the room that is free.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Ms Huda and the class decide what to put in their own letter. Which of the five points do they say is the most important, and what do they add that is not in the old letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  What goes in the letter', [
  ['Ms Huda', 'You have read theirs. What goes in yours?'],
  ['Hiba', 'Point one. The Thursday after the first test. We lost two people there and nobody rang either of them.'],
  ['Omar', 'And nobody rang because everybody thought somebody else was going to. That has to be in it. Not "ring them" — "ring them yourself, today, because the other ten are thinking what you are thinking".'],
  ['Lina', 'I want to put in the thing about not being able to see it. Nine months, and I stood here in June and could not name one thing. Somebody should tell them to write it down as they go.'],
  ['Ms Huda', 'How?'],
  ['Lina', 'One line a month. "The thing I could not do last month." Twelve lines in a year and you would not need anybody to tell you.'],
  ['Nour', 'And something about stopping. I am not going on in September and I am coming back next year, and if nobody asked me for a date I would have said "maybe" and meant nothing. Put that in: if you have to stop, stop with a date.'],
  ['Ms Huda', 'And the thing you got wrong?'],
  ['Hiba', '(after a moment) We let Lina spend nine months thinking she was doing nothing. Nine months. Four of us had the evidence and nobody said it until June.'],
  ['Ms Huda', 'Then that is your point five. Write it in your own words and do not make it kind.'],
]));
out.push(sp());
out.push(box('Language box – writing to the people who come after you', [
  'Say **how many finished and how many started**, in the first line, and refuse the easy explanation: _we are not going to tell you that the eleven who left were lazy._',
  'Give the **day it happens**, not the advice: _the Thursday after the first test is the day people stop coming._ A date is actionable and a warning is not.',
  'Turn every point into an **instruction with a person in it**: not _ring them_ but _ring them yourself, today, because the other ten are thinking what you are thinking_.',
  'Make the invisible thing **recordable**: _one line a month — the thing I could not do last month_.',
  'Give the rule for **stopping**, because some of them will: _if you have to stop, stop with a date_.',
  'End with **what you got wrong**, in your own words and not kindly. It is the only part of the letter they will believe, and it is the part you will be sorry you softened.',
  '**Useful phrases:** What goes in yours? · because everybody thought somebody else was going to · if you have to stop, stop with a date · and do not make it kind',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. Each of you takes one of the letters below, does **not** show it, and explains it to the other two — how many points, which one is the most important and why, and which one the group would argue with. Then change.'));
out.push(table(['Letter A – from a first-year nurse', 'Letter B – from somebody who has just moved city'], [
  ['1. The second month is the one that empties the ward of new people.', '1. The first fortnight everybody is kind. The second month nobody rings.'],
  ['2. Write down every name on your first day; you will not again.', '2. Find one shop and go to it every day for a month.'],
  ['3. Ask the question in front of the patient, not after.', '3. Say yes to everything for eight weeks, including things you do not want.'],
  ['4. Nobody will tell you when you have stopped being new.', '4. Do not count the months. Count the people whose doors you could knock on.'],
  ['5. And what we got wrong: we did not tell each other when we were frightened.', '5. And what we got wrong: we waited to be invited.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the point they called the most important, the point they would argue with, and the "what we got wrong".'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain to your partner the letter **you** would write to the people coming after you in something you have finished — a school, a job, a year, a city, a family role. They must ask: _which point is the day it happens?_, _which point is an instruction with a person in it?_, _what is the invisible thing?_, _what is the rule for stopping?_ and _what did you get wrong?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner would write and what you decided:  _Nour\'s letter is to the next person who takes over a reception desk. Her first point is the day it happens: the second Tuesday, when the person you are covering for stops answering the telephone and you find out whether anybody told the customers. Her instruction with a person in it is "start the book yourself on day one, do not wait to be given one, because the person who should have given it to you is the person who lost the four messages". The invisible thing is that you will not notice you have stopped being frightened of the telephone, so she says write the date you first rang somebody back without rehearsing it. Her rule for stopping is to stop with a date, which is what Omar made her do. And what she got wrong is that she did not ring a number back for two days, and by then it was dead, and she says put that in — not "write everything down", but "ring back the next morning or you are too late". So I decided my letter would have a day in it as well, because mine was all advice and none of it had a date._'));
out.push(p('**Listener task:** did they give you a **day** or only advice? What did they say they got wrong?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading, Parts 1–5)', 7));
out.push(p('**Part 1 · one message.** What does the notice mean?'));
out.push(model([
  '**TO ALL STUDENTS FINISHING BOOK 2**',
  'Places on the September B1 course are held until **15 July** for students who have paid the first part. After that date places are offered to the waiting list. If you are not continuing this year, tell the office and your place will be held for September next year at this year\'s fee.',
]));
[
  '**1**   **A** Everybody must pay before 15 July.   **B** Students who have paid keep their place until 15 July.   **C** The waiting list closes on 15 July.',
  '**2**   **A** If you stop this year you lose your place.   **B** If you stop this year you may come back next year at the same fee.   **C** You cannot stop and come back.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(p('**Parts 2–5 · one text.** Read and answer **3–8**.'));
out.push(model([
  '**NINE OF SIXTEEN**  · by Ms Huda, for the file',
  'Sixteen people came in the first week of this book and nine have finished. I have taught for nine years and that is my best year, and I am not going to pretend I know why.',
  'The group that came back from Book 1 were easier to teach and they learned less. The eleven who were new asked twice as many questions **(5)** ______ the first month, and four of them have overtaken people who have been here two years.',
  'The one I will remember is the student who stood in front of everybody in June and could not name one thing she has learned. She has been here **(6)** ______ September, and in nine months she has changed more than anybody in the room. Four of them have the evidence and nobody gave it to her until the last fortnight. That is the thing I got wrong this year, and it is mine and not theirs: I **(7)** ______ the dates for every student in this class since September and I did not read hers out in November, when it would have been worth something.',
  'Three of them are going on in September. One is coming back next year and she has given me a date, which in nine years has happened twice. The others I will not see again, and two of those have done the thing this course is for, which is not an examination: they have said something difficult, in a second language, in front of people, **(8)** ______ they decided not to.',
]));
[
  '**3**  How many people finished the book?   **A** sixteen   **B** nine   **C** eleven',
  '**4**  What does Ms Huda say about the students who came back from Book 1?   **A** they learned less   **B** they asked more questions   **C** they finished first',
  '**5**   **A** in   **B** on   **C** since',
  '**6**   **A** for   **B** since   **C** from',
  '**7**   **A** have written   **B** wrote   **C** am writing',
  '**8**   **A** because   **B** after   **C** before',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your group\'s letter to the next class (35 words or more). Use the five headings.'));
out.push(p('**TO THE CLASS THAT COMES AFTER US** · left in ______________   ______________ of us finished. There were ______________ in the first week. We are not going to tell you ______________.   **1. ______________ is the day people stop coming.** ______________ yourself, ______________, because ______________.   **2. ______________ is the part that moves.** ______________.   **3. ______________.** ______________.   **4. ______________.** One ______________ a ______________.   **5. And the thing we got wrong:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A number of starters and a number of finishers in the first line',
  'One point that gives a **day**, not advice',
  'One instruction with a person in it, and one rule for stopping',
  'A point five that is not kind',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 7)', 10));
out.push(box(null, [
  '**Look at the three pictures. Write the story in 35 words or more.**',
  '**Picture 1.** A young woman stands at the front of a classroom of about ten people. She is holding a piece of paper and looking at the floor. The date on the board is September.',
  '**Picture 2.** The same woman is at a desk, writing. Beside her a colleague is holding out a letter towards her; the woman is shaking her head and pointing at her own page. The calendar on the wall says April.',
  '**Picture 3.** The same classroom, the same ten people. The woman is standing, talking, and three people are laughing. On the board somebody has written "nine months".',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ apply in February. (I decided in December)   a) will   b) \'m going to   c) am applying',
  '2  I ___ my sister at six. (it is arranged)   a) \'m meeting   b) will meet   c) meet',
  '3  I ___ help you with that. (deciding now)   a) \'m going to   b) \'ll   c) help',
  '4  I\'ve been here ___ two years.   a) since   b) for   c) from',
  '5  I\'ve lived here ___ 2011.   a) for   b) since   c) from',
  '6  Thank you for ___ behind.   a) stay   b) to stay   c) staying',
  '7  Congratulations ___ your place.   a) for   b) on   c) about',
  '8  I\'m worried ___ I will be late.   a) for   b) that   c) about',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 24.14** Ms Huda says what each person is doing next. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they are doing next'], [
  ['1  Hiba ___', 'A  is going on to B1 with half the fee paid by an employer'],
  ['2  Omar ___', 'B  is starting a teacher-training course in September'],
  ['3  Lina ___', 'C  is stopping for a year and has given a date to come back'],
  ['4  Nour ___', 'D  is meeting somebody from a newspaper on the ninth'],
  ['5  Ms Huda ___', 'E  is taking the next B1 group, whoever is in it'],
  ['', 'F  is leaving the city in the autumn'],
  ['', 'G  is going to keep one line a month about what they could not do'],
], [1, 2]));
out.push(dlg('Track 24.14  Audio script (read after the check)', [
  ['Ms Huda', 'The last thing, and then the chairs. Hiba is starting the teacher-training course in September — four days a week, forty places and three hundred applications, and she told her mother on a Sunday in June, which was harder than the application. Omar is going on to B1, he has paid the first part, and he is meeting the man from the newspaper on the ninth, which he says is the first time anybody has arranged to meet him about anything. Lina is going on to B1 as well and the company is paying half, which she asked for herself and got — and she is the one who stood in this room in June and could not name a single thing she has learned in nine months. Nour is not coming in September, because the second workshop opens in October and she is the person who will be standing in it; but she is coming back the first week of September next year, she has given us a date, and Omar has written "ask about B1" next to her number. And I am taking the B1 group, whoever is in it, for the tenth year.'],
]));
out.push(p('**C  Writing.** Write to the class that comes after you (40+ words): how many of you finished, one point that names the **day** something happens, one instruction with a person in it, and the thing you got wrong.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _going to_ for plans, the present continuous for arrangements and _will_ for predictions',
  '☐ ask about somebody\'s plans across all the tenses',
  '☐ say how long with _for_ and _since_ — and never _I am here since_',
  '☐ say what I hope and what I am worried about',
  '☐ thank somebody for _-ing_, including for something they did **not** do',
  '☐ congratulate somebody **on** something',
  '☐ say goodbye, and tell a real arrangement from a polite one',
  '☐ write to the people who come after me',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE END-OF-BOOK TEST', [
  'The End-of-Book Test covers Units 13–24 and takes four papers: Reading, Writing, Listening and Speaking, 100 marks. It is the shape of the Cambridge A2 Key, and everything in it has been in this book.',
  'Before it: read the Stage 7 you wrote in Unit 13 and the one you wrote in Unit 24. Nothing in the test will tell you as much as those two pages next to each other.',
  '**And then you have finished A2.** Sixteen of you started Book 1. Whatever number of you is reading this, the thing you have done is not the examination. You have said something difficult, in a second language, in front of people, after deciding not to. Keep the envelope. Write the next one.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
