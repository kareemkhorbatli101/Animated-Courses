// Proactive English B1 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, Book 2.** No stems from now on. Write your partner **three sentences in English**: what worked, the one place you would change, and the question you are left with.';

out.push(h1('Unit 13  Plans, Intentions and Arrangements'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**13.1**  say what is arranged',
  '**13.2**  say what you intend',
  '**13.3**  say what you will be doing at a given time',
  '**13.4**  choose between the three futures',
  '**13.5**  talk about a timetable',
  '**13.6**  write an itinerary',
  '**13.7**  Review & Mediate: explain a programme to somebody',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Welcome back — and what is new in Book 2', [
  '**This is the second year.** Twelve of you were in Room 14 last June and eleven of you are here in September. Everything you wrote in Book 1 is still yours, and three pieces of it — the four envelope pages, the balanced page from 12.6 and the list of lines you left at 😐 — are used in **13.1** and again in **24.4**. Bring all three to the first lesson.',
  '**Four things get longer.** Guided writing **60 words or more**. Free writing **140–180**. The model texts are half as long again. And the dialogues run to sixteen and eighteen turns, because a conversation at B1 does not stop after ten.',
  '**And the peer review changes.** No stems. For the rest of Book 2 you write your partner three sentences of your own, in English, and from Unit 19 you also name the standard you are marking against.',
  '**The three futures, head to head.** _I am seeing him on Tuesday_ · _I am going to ask him_ · _I will be sitting in front of them at ten._ English has three and most students have one. **13.4** puts them side by side, and the test is not which is correct: it is what each one tells the listener about **how settled the thing is**.',
], C.lyellow, C.orange));

// ======================= 13.1 =======================
out.push(pb());
out.push(h2('13.1  It is arranged'));
out.push(p('**Function:** saying what is arranged   ·   **Grammar:** the present continuous for arrangements   ·   **Pronunciation:** the contracted _\'m_ and _\'re_ before a date'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  The first question of the second year. Round the room, one sentence each: **what have you got arranged between now and the end of the month that was not arranged in June?** Something with a day in it, or nothing. Your teacher writes the eleven answers on the board and counts how many have a date.'));
out.push(board('I am seeing the supplier on the fourteenth.', 'am/is/are + -ing + a time'));
out.push(p('**b**  Arranged, or only intended? **1** _I am meeting the committee on the fifteenth._  **2** _I am going to write to them again._  **3** _She is coming back in September — she said so in June._  **4** _We are going to look at the yard some time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who has come back, and who has not?   **A** eleven of the twelve, and one new student   **B** all twelve, and nobody new   **C** nine of the twelve'));
out.push(p('**b**  Listen again. **1** What has Fares arranged, and what did he have to move?   **2** What does Umm Kinan say about her two colleagues?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  The first Thursday', [
  ['Ms Huda', 'Second year. Eleven of you, one of you new, and one who is not here. Before anything else: what is **arranged**? Not what you hope. What has a day against it.'],
  ['Nour', 'May I start, since nobody knows me? I am Nour Sabbagh and I finished at TechCare a year ago and I have been a junior technician there since. I said in June of last year that I was coming in September, and then I did not come for a year, and the arrangement I have made this time is that my shift finishes at four on Mondays and Thursdays. In writing, with my supervisor. That is the difference between this September and the last one.'],
  ['Omar', 'I have had "ask about B1" written next to her number since the end of A2.'],
  ['Nour', 'You asked me four times.'],
  ['Fares', 'Mine is arranged and it is the thing I was waiting for in June. The two days a month start this month: I am training representatives on the third Tuesday and the Wednesday after it, from this month until next August, and it is in writing.'],
  ['Rasha', 'Tuesday and Wednesday.'],
  ['Fares', 'Tuesday and Wednesday, because the first dates they offered me were the Mondays, and I said no. Which took me about four seconds and nine months.'],
  ['Ms Huda', 'Say what you said to them.'],
  ['Fares', 'I said: I am in a class on Mondays and Thursdays until June. Not "I have something on Mondays". I gave them the two days and the month it ends.'],
  ['Umm Kinan', 'I have to report on something I announced in this room in June. I said I had asked two colleagues to come with me this year. Neither of them is here.'],
  ['Ms Huda', 'What happened?'],
  ['Umm Kinan', 'One of them is teaching an extra class on Thursdays and told me in August. The other one said yes four times and has not enrolled, and I know exactly what that is, because that was me from January to April. She intends to come. There is nothing arranged.'],
  ['Jad', 'So one of them had an arrangement and one of them had an intention.'],
  ['Umm Kinan', 'And in June I reported both of them to this room as though they were the same thing, which is the mistake. I am going to ask the second one once more, in writing, with the two days and the time on it, and then I am going to stop asking.'],
  ['Ms Huda', 'That is the whole of this unit in one answer, and we are four minutes into the year. **Arranged** takes _I am seeing him on Tuesday_. **Intended** takes _I am going to ask her_. They are different claims, and this class has spent a year learning to tell a reader which one it is looking at.'],
  ['Mazen', 'And the one who is not here?'],
  ['Ms Huda', 'Lina. Her company moved her to Homs in July and she has written to all of you, and the letter is on the wall where the "who we are" pages were.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present continuous for arrangements**',
  table(['you say', 'what it claims'], [
    ['_I **am seeing** the supplier on the fourteenth._', 'arranged: a time, and the other person knows'],
    ['_She **is coming** back in September._', 'arranged, with somebody else involved'],
    ['_We **are meeting** at four on Mondays._', 'a standing arrangement'],
    ['_I **am training** them on the third Tuesday._', 'arranged, in writing, with dates'],
  ], [2.5, 2.1]),
  '**An arrangement has two things in it: a time, and another person who knows.** That is the test. If only you know about it, it is an intention and takes _going to_ (13.2). If nobody has agreed a time, it is a hope and takes _I\'d like to_.',
  '**Use a time expression.** _I am seeing him_ on its own is ambiguous; _I am seeing him on Thursday_ cannot be read as anything but an arrangement. ⚠ Without the time, a listener hears the present.',
  '⚠ ~~I will see the supplier on the fourteenth~~ for a thing already fixed. _Will_ is a decision made now, not a diary entry, and at B1 it is the commonest future error in the room.',
  '⚠ ~~I am going to meet them on the fourteenth at four~~ — possible, but it throws away the information that it is settled. Give the reader the stronger claim when you have it.',
  '⚠ ~~I have an appointment the Tuesday~~ → _on Tuesday_ · _on the third Tuesday_ · _next Tuesday_ (no _on_ with _next_).',
  '**Useful phrases:** not what you hope, what has a day against it · in writing, with my supervisor · I gave them the two days and the month it ends · she intends to come, there is nothing arranged.',
  '**Practise:** Turn each hope into an arrangement, inventing the day and the person.  1 _I want to talk to my manager._  2 _We should look at the yard._  3 _I would like to see the committee._  4 _Somebody ought to train the new man._  5 _I must go to the ministry._',
  '**Pronunciation.** 🔊 **Track 13.2** In an arrangement the verb is contracted and unstressed and the **date carries the weight**: _I\'m seeing him on the FOURteenth_ · _we\'re meeting at FOUR_. Students stress the verb, which makes a settled thing sound like an announcement. Listen to eight and underline the stressed word; in six of the eight it is the time.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the hope from the card. B turns it into an arrangement — a day, a time and a person who knows — and then says what would have to happen for it to stop being one. A asks the test question: _does the other person know?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I am __________ on __________ at __________.'],
  ['A', 'Does the other person know?'],
  ['B', '__________.'],
  ['A', 'What would stop it being an arrangement?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the hopes', 'Card B – the hopes'], [
  ['I want to talk to my manager about the record.', 'We should look at the second door again.'],
  ['I would like to see the committee before September.', 'Somebody ought to train the new man.'],
  ['I must go to the ministry about the order.', 'I want to ask for the purchase dates.'],
  ['We ought to meet the people from the other shift.', 'I would like forty minutes with somebody who knows it.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each arrangement and mark the ones where the other person does **not** yet know. Those are intentions wearing an arrangement\'s clothes, and in a first run there are three or four out of eight — which is exactly the error Umm Kinan reported on herself in the dialogue.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the list of 😐 lines you brought from Book 1. Choose one, and turn it into an **arrangement**: a day, a time, and a person who will know. Say it out loud with the date in it.'));
out.push(p('**b**  Swap. Then each of you say which of the other\'s two sentences — the arrangement or the intention — you would put money on.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda opened the second year by asking what is arranged — not what anybody hopes, but what has a day against it. Nour Sabbagh introduced herself: she finished at TechCare a year ago and has been a junior technician there since, she said in June of last year that she was coming in September and then did not come for a year, and the arrangement she has made this time is that her shift finishes at four on Mondays and Thursdays, in writing, with her supervisor — which she says is the difference between this September and the last one. Omar said he has had "ask about B1" written next to her number since the end of A2, and she said he had asked her four times. Then Fares: the two days a month start this month, he is training representatives on the third Tuesday and the Wednesday after it until next August, in writing, and the first dates they offered him were Mondays and he said no — which took him four seconds and nine months. He told them: I am in a class on Mondays and Thursdays until June, and he gave them the two days and the month it ends. Umm Kinan then reported on something she had announced in June: she had asked two colleagues to come with her and neither is here. One is teaching an extra class on Thursdays and told her in August; the other has said yes four times and has not enrolled, and she says she knows exactly what that is because it was her from January to April. That one intends to come; there is nothing arranged. Jad said so one of them had an arrangement and one had an intention, and Umm Kinan said that in June she reported both to this room as though they were the same thing, which is the mistake — and that she is going to ask the second one once more, in writing, with the two days and the time on it, and then stop asking. And Lina is not here: her company moved her to Homs in July, and her letter is on the wall._'));
out.push(p('**Listener task:** write one arrangement from this room and one intention, and say how you can tell.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter on the wall of Room 14. Answer the questions.'));
out.push(model([
  '**TO ROOM 14, FROM HOMS** · L. Haddad · written 2 September, pinned where the "who we are" pages were',
  'I am not coming back and I would rather tell you why in a page than be the empty chair.',
  '**What is arranged.** Medica moved the accounts function to Homs on the first of July and I went with it, because the alternative they offered me was the same salary and no accounts. I am in Homs from Sunday to Thursday and in Damascus at the weekends. I am starting an English class here on Tuesday the ninth, at a place I have not seen, with a teacher I have not met, and I have paid for ten weeks so that I cannot quietly stop going.',
  '**What is not arranged, and I am not pretending otherwise.** I am going to come to Room 14 in June for the last lesson. I have not bought a ticket, nobody in Homs knows I intend to, and if the audit falls in that week I will not be there. Hold the chair and do not keep it.',
  '**What I am taking with me.** Four seconds. I have needed four seconds before I speak since I was nineteen years old and for all of that time I thought it was a fault. Umm Kinan asked me in February what I do in them, and I had never been asked, and the answer is that I decide which of two sentences to say. In July I said that out loud to a man from the Homs office in the middle of a meeting — I said: give me a moment, I am choosing between two ways of putting this — and he waited, and the room waited, and nothing happened to me at all.',
  '**And what I am leaving here.** My half of the Unit 10 minutes, which Rasha has, and a sentence for whoever is new. It is this: the thing in that room that changed what I do is not a tense. It is that eleven people watched me take four seconds in front of them once a week for nine months and nobody ever once filled them in for me.',
  '**What I would ask of you.** Write to me. Not all of you and not often. One of you, once a month, with one thing that happened in Room 14 that I would not otherwise hear about. I will answer every one by return, and that is an arrangement and not an intention.',
]));
out.push(item('1', 'What has Lina arranged, and what has she deliberately not arranged?'));
out.push(item('2', 'What does she say she is taking with her, and what changed about it?'));
out.push(item('3', 'What does she ask the class for, and how does she mark it as an arrangement?'));
out.push(writers([
  'A letter that separates the two: **what is arranged, with dates** → **what is only intended, and said to be** → **what you are taking with you** → **what you are leaving behind** → **and one ask, marked as an arrangement**.',
  'Say which is which **in the headings**. _What is not arranged, and I am not pretending otherwise_ does more for a reader than three paragraphs of warm language, because it tells them what to count on.',
  'Pay for something, or give a date, to stop yourself drifting: _I have paid for ten weeks so that I cannot quietly stop going._ An arrangement with a cost attached is the one that survives November.',
  '⚠ End with an ask that is small and bounded — _one of you, once a month, with one thing_ — and then mark it: _that is an arrangement and not an intention._ A vague _keep in touch_ is a sentence nobody acts on.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter to a group you are leaving, or have left (60 words or more).'));
out.push(p('**TO ______________, FROM ______________** · ______________   I am ______________ and I would rather tell you ______________.   **What is arranged.** ______________ on ______________, because ______________. I am ______________ from ______________ to ______________. I am starting ______________ on ______________, and I have ______________ so that I cannot ______________.   **What is not arranged, and I am not pretending otherwise.** I am going to ______________. I have not ______________, nobody ______________, and if ______________ I will not ______________.   **What I am taking with me.** ______________. I have ______________ since ______________ and for all of that time I thought ______________. ______________ asked me ______________, and the answer is ______________.   **And what I am leaving here.** ______________, and a sentence for whoever is new: ______________.   **What I would ask of you.** ______________, once ______________, with ______________. And that is an arrangement and not an intention.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Arrangements in the present continuous, each with a day and a person',
  'The intentions marked as intentions, not dressed up',
  'One arrangement with a cost or a date attached to it',
  'A last ask that is small, bounded and marked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what is not arranged" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (140 words or more) to a group you have left, are leaving, or are joining. Everything arranged with a date; everything intended marked as intended; one thing you are taking and one you are leaving; and one bounded ask.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s letter as **somebody in the group they are writing to**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many arrangements in this room have a cost attached to them?** Count. Then count the intentions that have been announced to somebody. The second number predicts which of them will still exist in November better than anything else on the board.'));
out.push(hw('Write the letter, or the message, that turns one of your own intentions into an arrangement (60+ words): the day, the time, the person who will know, and the cost you have attached to it. Send it before the next lesson and bring what came back.'));

// ======================= 13.2 =======================
out.push(pb());
out.push(h2('13.2  What I intend to do'));
out.push(p('**Function:** saying what you intend   ·   **Grammar:** _going to_ for intention   ·   **Pronunciation:** _gonna_, and when not to use it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing you are **going to** do this term that nobody has agreed to yet. Then your teacher asks each person the only question that matters: _what is the first thing you have to do, and when?_ Anybody who cannot answer it has a wish and not an intention.'));
out.push(board('I am going to ask her once more, in writing.', 'going to + the first step'));
out.push(p('**b**  Intention or prediction? **1** _I am going to ask for the dates._  **2** _It is going to rain._  **3** _They are going to refuse._  **4** _I am going to write it down this time._  **5** _He is going to be late — he always is._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mazen going to do, and what has changed since June?   **A** he is going to write to the supplier again   **B** he is going to stop keeping the book   **C** he is going to leave the shop'));
out.push(p('**b**  Listen again. **1** What does Nour say about intentions at TechCare?   **2** What does Ms Huda say the difference is between _going to_ and _will_ here?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  The first step and the date', [
  ['Ms Huda', 'Mazen. In June you had asked the supplier for a name twice and had not been given one. What are you going to do?'],
  ['Mazen', 'I am going to write once more, and this time I am going to write to a person and not to a company.'],
  ['Ms Huda', 'Which person?'],
  ['Mazen', 'That is the problem and it was the problem in April. I do not have a name, and the name was the thing I was asking for.'],
  ['Nour', 'May I say something about that, because it is my actual job? At TechCare the thing you want is never the first thing you ask for. If you ask for a name you get nothing, because the person reading your letter has to decide to give you a colleague. If you ask for a **part number**, somebody answers, because answering costs them nothing — and the answer comes with a name at the bottom of it.'],
  ['Mazen', 'So I am going to ask for the adhesive specification.'],
  ['Nour', 'Ask for the specification of the adhesive used on that model in the batch sold between January and March, and give the fifteen dates. Somebody in a technical department will answer that in a week, because it is a question with one answer and no blame in it.'],
  ['Mazen', 'And then I have a name.'],
  ['Nour', 'Then you have a name, and the name is the one you would never have been given.'],
  ['Ms Huda', 'Mazen, say the whole thing again with the first step and the date in it.'],
  ['Mazen', 'I am going to write on Sunday, to the technical department, asking for the adhesive specification for that model in the January-to-March batch, with the fifteen dates attached. And I am going to give them until the end of the month, and if nothing comes back I am going to send the same letter to the manufacturer in Türkiye, which I have never done and which I have been afraid of since April.'],
  ['Ms Huda', 'Why afraid?'],
  ['Mazen', 'Because the shop buys from that supplier and I mend telephones at a counter in it, and the man who owns the shop has not asked me to do any of this.'],
  ['Omar', 'Does he know you are doing it?'],
  ['Mazen', 'He asked me for a copy of the book in April. He knows exactly what I am doing and he has never once said the word "supplier" to me, and I think that is on purpose.'],
  ['Ms Huda', 'Notice what has made that an intention and not a wish: a day — Sunday — a first step that costs nothing, a deadline, and a second move if the first one fails. Four things, and none of them is the outcome. **_Going to_ is for what you have decided; _will_ is for what you decide while you are speaking.** The sentence Mazen said in April was "I will write again", and he did not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _going to_ for intention**',
  table(['you say', 'what it does'], [
    ['_I **am going to** write on Sunday._', 'a decision already taken, with a first step'],
    ['_I **am going to** ask her once more, in writing._', 'intention, and the method is part of it'],
    ['_We **are going to** give them until the end of the month._', 'intention with a deadline'],
    ['_It **is going to** rain._', 'a **prediction** from evidence you can see'],
  ], [2.6, 2.0]),
  '**_Going to_ does two jobs: intention and prediction-from-evidence.** _I am going to write_ (I have decided). _It is going to rain_ (look at the sky). Both are already-settled in the speaker\'s head, which is why English uses one form for the two.',
  '**An intention needs the first step and a date, or it is a wish.** _I am going to improve my English_ is a wish. _I am going to read one page out loud on Sunday evenings_ is an intention. The test question is the one Ms Huda asks: **what is the first thing you have to do, and when?**',
  '**Add the second move.** _If nothing comes back, I am going to send the same letter to the manufacturer._ An intention with a fallback survives a refusal; one without it ends at the first no.',
  '⚠ ~~I will write again~~ for something you have already decided. _Will_ is a decision made at the moment of speaking — _all right, I\'ll do it_ — and it is the form students use for everything.',
  '⚠ ~~I am going to can ask~~ · ~~I am going to asking~~ → _going to_ + **infinitive**: _I am going to ask_.',
  '⚠ _gonna_ exists and is normal in speech. Do not write it, ever, and do not say it to somebody senior to you in a formal meeting.',
  '**Useful phrases:** the thing you want is never the first thing you ask for · a question with one answer and no blame in it · what is the first thing you have to do, and when? · he has never once said the word, and I think that is on purpose.',
  '**Practise:** Turn each wish into an intention with a first step, a date and a fallback.  1 _I want to improve my writing._  2 _I want to be asked to that meeting._  3 _I would like the second trolley back._  4 _I want to know who welded the door._  5 _I want to stop being the person who does it at seven in the morning._',
  '**Pronunciation.** 🔊 **Track 13.4** In speech _going to_ before a verb reduces to /ˈɡənə/: _I\'m gonna write on Sunday_. Before a **noun** it does not: _I\'m going to Homs_ stays full. Listen to eight and mark which are reduced; the four that are not are all followed by a place.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the wish from the card. B turns it into an intention with four things in it — the first step, the day, the deadline and the fallback. A then asks: _what does the first step cost the other person?_ If it costs them anything, B makes it smaller. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I am going to __________ on __________, and I am going to give them until __________. If nothing comes back I am going to __________.'],
  ['A', 'What does the first step cost them?'],
  ['B', '__________.'],
  ['A', 'Make it smaller.'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the wishes', 'Card B – the wishes'], [
  ['I want to improve my writing.', 'I want to be asked to that meeting.'],
  ['I want the second trolley back.', 'I want to know who welded the second door.'],
  ['I want to be paid for the training.', 'I want somebody else to keep a record too.'],
  ['I want to stop going in at seven.', 'I want my own entries kept separately.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the first step of each intention and mark it _costs them nothing_ or _costs them something_. The ones that cost nothing are the ones that get answered, which is Nour\'s point and the most practical thing in the unit.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the intention you announced in June, in 12.1 or 12.6, and say what has actually happened to it. Then re-state it with a first step, a date, a deadline and a fallback — or say out loud that you are dropping it, which is an honest answer and takes ten seconds.'));
out.push(p('**b**  Swap. Then each of you find the intention the other one is going to drop and has not said so.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Mazen what he is going to do, since in June he had asked the supplier for a name twice and had not been given one. He said he is going to write once more and this time write to a person and not a company — and then said that is the problem and was the problem in April, because he has no name and the name is the thing he is asking for. Nour said that at TechCare, which is her actual job, the thing you want is never the first thing you ask for: if you ask for a name you get nothing, because the person reading has to decide to give you a colleague, but if you ask for a part number somebody answers, because answering costs them nothing — and the answer comes with a name at the bottom of it. So Mazen is going to ask for the adhesive specification for that model in the batch sold between January and March, with the fifteen dates attached, because it is a question with one answer and no blame in it. He is going to write on Sunday, give them until the end of the month, and if nothing comes back send the same letter to the manufacturer in Türkiye, which he has never done and has been afraid of since April — because the shop buys from that supplier and he mends telephones at a counter in it, and the owner has not asked him to do any of it. Omar asked whether the owner knows, and Mazen said he asked him for a copy of the book in April, so he knows exactly what he is doing and has never once said the word "supplier" to him, which Mazen thinks is on purpose. Ms Huda said to notice what makes that an intention and not a wish: a day, a first step that costs nothing, a deadline, and a second move if the first fails — four things, and none of them is the outcome._'));
out.push(p('**Listener task:** write one intention from this room with all four parts, and one that is missing a part.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mazen sends on the Sunday. Answer the questions.'));
out.push(model([
  '**TO: the technical department · Al-Nahla Trading, Damascus · 7 September**',
  '**Subject:** Adhesive specification, model NX-220, units sold January–March',
  'Dear Sir or Madam,',
  'I repair telephones at a counter in Shaalan and I buy through your Damascus office. This letter asks for one piece of technical information and nothing else.',
  '**What I am asking for.** The specification of the adhesive used to bond the screen assembly on the NX-220 in the units distributed between January and March of this year. A product code and a temperature range would be enough.',
  '**Why I am asking.** Between 3 September last year and 2 April this year I repaired fifteen NX-220 handsets at this counter with the same fault: the screen assembly separating at the lower left corner. In all fifteen the adhesive line is uneven and visible under a lamp. The fifteen purchase dates are attached, with the two shops they were bought from.',
  '**What I am not claiming.** I am not claiming that the adhesive is at fault. Both shops store stock in a room with a window and heat does to glue what a bad batch does to glue, and I have not measured anything. I cannot tell the difference between those two explanations from a counter, and the specification would let somebody who can.',
  '**What I am not asking for.** I am not asking for compensation, I am not asking for any unit to be replaced, and I am not making a complaint. Nothing in this letter is going anywhere else.',
  '**What I am going to do next.** If I have not had a reply by the thirtieth of September I am going to send this letter, unchanged, to the manufacturer. I would rather have the answer from you, because you are nine streets away and they are in another country, and because if the fault is real you will want to know before they tell you.',
  'Yours faithfully, M. Hariri · counter 2, Shaalan · and the fifteen dates are overleaf',
]));
out.push(item('1', 'What does he ask for, and why is that easier to answer than his earlier letters?'));
out.push(item('2', 'What two explanations does he say he cannot separate?'));
out.push(item('3', 'What is he going to do if nothing comes back, and what reason does he give for preferring an answer from them?'));
out.push(writers([
  'A letter that asks for one small thing: **who you are and what you buy** → **what you are asking for, exactly, in one line** → **why, with the count and the dates** → **what you are _not_ claiming** → **what you are not asking for** → **and what you are going to do next, with the date**.',
  'Ask for the thing that **costs the reader nothing**. A specification, a part number, a date, a copy of a page. The name, the admission and the apology are what you want; they are not what you ask for first.',
  'Put the deadline in the last paragraph and make the fallback real: _unchanged, to the manufacturer, by the thirtieth._ A deadline with no second move behind it is a date somebody can ignore.',
  '⚠ Give the reader a reason to prefer answering you: _if the fault is real you will want to know before they tell you._ That sentence is worth more than any amount of pressure, and it is 12.2 — their case, put well.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter that asks for one small thing (60 words or more).'));
out.push(p('**TO:** ______________   **Subject:** ______________   Dear ______________,   I ______________ and I ______________. This letter asks for ______________ and nothing else.   **What I am asking for.** ______________. ______________ would be enough.   **Why I am asking.** Between ______________ and ______________ I ______________. In all ______________ the ______________. ______________ are attached.   **What I am not claiming.** I am not claiming ______________. ______________, and I have not ______________.   **What I am not asking for.** I am not asking for ______________, and I am not ______________.   **What I am going to do next.** If I have not had a reply by ______________ I am going to ______________. I would rather have the answer from you, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One thing asked for, in one line, and it costs the reader nothing',
  'A count and the dates, attached rather than described',
  'What you are not claiming, and what you are not asking for',
  '_Going to_ + a date for the next move, and a real fallback',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I am asking for" line only — one line each, and the class says whether answering it would cost anybody anything.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (140 words or more) asking one real organisation for one small thing you actually want. Then write underneath what you really want, and whether this letter is the first step towards it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s letter as **the person in the technical department who has forty letters to answer today**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Whose first step costs the reader nothing?** Hands, and then read three of those letters\' opening asks aloud. The room will hear the difference between a letter that will be answered and a letter that is about being right, and most of us have spent years writing the second kind.'));
out.push(hw('Send the letter (60+ words). Then write down the date you have given them, the fallback you have chosen, and what you are going to do on the day after the deadline. Bring the reply if one comes.'));

// ======================= 13.3 =======================
out.push(pb());
out.push(h2('13.3  At ten o\'clock I will be sitting in front of them'));
out.push(p('**Function:** saying what you will be doing at a given time   ·   **Grammar:** the future continuous   ·   **Pronunciation:** _I\'ll be_ reduced to one syllable'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a time: **half past eight on Monday morning**. Round the room, one sentence each: _at half past eight on Monday I will be…_ Then the second question, which is the useful one: _and what will you have in your hand?_'));
out.push(board('At ten on the fifteenth I will be sitting in front of that committee.', 'will be + -ing + a time'));
out.push(p('**b**  Which is better here? **1** _At four I will be driving._ / _At four I will drive._  **2** _I will send it tomorrow._ / _I will be sending it tomorrow._  **3** _This time next year I will be finishing Book 2._ / _…I will finish Book 2._  **4** _Don\'t telephone at six — I will be reading the round._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is happening on the fifteenth, and what has Rasha asked for?   **A** a rota meeting, and a second trolley   **B** an interview, and a new post   **C** an inspection, and more staff'));
out.push(p('**b**  Listen again. **1** What does Rasha say she will be doing, and what does she say she will **not** be doing?   **2** What does Omar notice about the form she has chosen?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  At ten on the fifteenth', [
  ['Ms Huda', 'Rasha, the September meeting. When is it?'],
  ['Rasha', 'The fifteenth, at ten. At ten o\'clock on the fifteenth of September I will be sitting in front of four people reading a report I wrote about myself.'],
  ['Lubna', 'And what will you be doing at five past?'],
  ['Rasha', 'Reading the second paragraph out loud, which is the one about the trolley, because I have decided that it goes first.'],
  ['Omar', 'You said "I will be sitting". Not "I will sit".'],
  ['Rasha', 'Because I will be in the middle of it. At ten I am not starting and I am not finishing; I am in it, and that is the whole difference. _I will sit in front of them_ sounds like something I am going to do once, like signing a form. _I will be sitting_ is a room I am inside, at a time you could telephone me in.'],
  ['Ms Huda', 'Give me the other half of it, which is the thing you will not be doing.'],
  ['Rasha', 'I will not be arguing. Three months ago I would have been arguing, and I would have been right, and it would have cost me the trial. At ten on the fifteenth I will be reading out the strongest objection to my own case and then sitting still.'],
  ['Nour', 'May I ask something? Is this the trolley month?'],
  ['Rasha', 'The ward had a second trolley for four weeks in August. The manager asked for it in June, after she read my limits page before the figures.'],
  ['Nour', 'And?'],
  ['Rasha', 'And the round was late eleven times in those four weeks instead of twenty-six, and there were no errors. Which means the trolley is half of it and the blocks are half of it, and neither of my two sentences from April is true on its own.'],
  ['Jad', 'So you were wrong.'],
  ['Rasha', 'I was half wrong, which is a result and not a defeat, and it is a better answer than being right, because now there are two things to fix and one of them costs a trolley. If I had never written the limits page nobody would have asked for the trolley, and I would have been sitting there on the fifteenth with one explanation and a committee looking for the other one.'],
  ['Ms Huda', 'Say the three sentences in the three futures, so the class can hear them next to each other.'],
  ['Rasha', 'I am seeing them at ten on the fifteenth. I am going to lead on the trolley. And at five past ten I will be reading out the paragraph that says I was half wrong.'],
  ['Ms Huda', 'Arranged, intended, and in the middle of happening. Three forms, three different claims, one morning.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the future continuous: _will be_ + _-ing_**',
  table(['you say', 'what it claims'], [
    ['_At ten I **will be sitting** in front of them._', 'in the middle of it at that moment'],
    ['_I **will be reading** the round at six._', 'so do not telephone then'],
    ['_This time next year I **will be finishing** Book 2._', 'a point inside a long process'],
    ['_I **will not be arguing**._', 'a thing you will deliberately not be doing'],
  ], [2.6, 2.0]),
  '**Use it for a moment inside something.** The question it answers is not _what will you do?_ but _what will you be in the middle of?_ — which is why it always wants a time: _at ten · at five past · this time next year · while you are telephoning me_.',
  '**It is the polite future, too.** _Will you be coming to the meeting?_ asks about the arrangement and leaves the person free; _will you come?_ asks them to decide now. In an email to somebody senior, the continuous is the softer question.',
  '**And the negative is the useful half.** _I will not be arguing_ · _we will not be counting those four weeks with the rest_ — a thing you have decided **not** to be doing at a known moment is a plan, and saying it out loud in advance is what makes it happen.',
  '⚠ ~~At ten I will sitting~~ · ~~I will be sit~~ → _will be_ + _-ing_.',
  '⚠ Not with a state verb: ~~I will be knowing by Friday~~ → _I will know by Friday_.',
  '⚠ ~~At ten I will sit in front of them~~ is not wrong — it simply says something else, and at B1 the mark is for choosing.',
  '**Useful phrases:** at five past, reading the second paragraph out loud · a room I am inside, at a time you could telephone me in · I was half wrong, which is a result and not a defeat · arranged, intended, and in the middle of happening.',
  '**Practise:** Say what you will be doing, and one thing you will **not** be doing.  1 at eight tomorrow morning  2 at six this evening  3 at this time next Thursday  4 at ten on the first Monday of next month  5 at this time next year',
  '**Pronunciation.** 🔊 **Track 13.6** _I will be_ becomes /aɪlbi/ — one beat, not three — and the weight falls on the _-ing_ verb and the time: _I\'ll be SITting at TEN._ Students give _will_ and _be_ full value, which makes the sentence sound like a promise instead of a diary. Listen to six and repeat each one in three beats.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the time from the card. B says what they will be doing then, what they will have in their hand, and one thing they will **not** be doing. A asks the question that makes it real: _and who else will be there?_ Swap cards.'));
out.push(dlg(null, [
  ['A', 'At __________?'],
  ['B', 'I will be __________, with __________ in my hand. And I will not be __________.'],
  ['A', 'Who else will be there?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the times', 'Card B – the times'], [
  ['at half past five tomorrow morning', 'at ten o\'clock on the first of next month'],
  ['at six this evening', 'at this time next Thursday'],
  ['at nine on the last day of this month', 'at four on the day your deadline falls'],
  ['at this time next year', 'at the hour you are most often interrupted'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight _I will not be_ sentences. They are the most interesting thing anybody says in this cycle, and about half of them are things the speaker has never said out loud to the person who would need to hear them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the one appointment, meeting, deadline or journey you have between now and the end of the month. Say what you will be doing at the moment it starts, what you will have in your hand, and what you will not be doing.'));
out.push(p('**b**  Swap. Then each of you say which of the other\'s three sentences is a decision and which is a hope.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha\'s September meeting is on the fifteenth at ten, and she said that at ten o\'clock on the fifteenth she will be sitting in front of four people reading a report she wrote about herself. Lubna asked what she will be doing at five past, and she said reading the second paragraph out loud — the one about the trolley, which she has decided goes first. Omar noticed that she said "I will be sitting" and not "I will sit", and she said it is because she will be in the middle of it: at ten she is not starting and not finishing, she is in it, and "I will sit in front of them" sounds like something done once, like signing a form, whereas "I will be sitting" is a room she is inside, at a time you could telephone her in. Ms Huda asked for the other half — the thing she will not be doing — and Rasha said she will not be arguing: three months ago she would have been arguing, and she would have been right, and it would have cost her the trial. Then Nour asked about the trolley month: the ward had a second trolley for four weeks in August, which the manager asked for in June after reading the limits page that goes before the figures. The round was late eleven times in those four weeks instead of twenty-six, and there were no errors — so the trolley is half of it and the blocks are half of it, and neither of Rasha\'s two sentences from April is true on its own. Jad said so she was wrong, and she said she was half wrong, which is a result and not a defeat, and better than being right, because there are now two things to fix and one of them costs a trolley. And if she had never written the limits page, nobody would have asked for the trolley and she would be sitting there with one explanation and a committee looking for the other one._'));
out.push(p('**Listener task:** write one sentence from this room in each of the three futures.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Rasha sends the other night sister the day before the meeting. Answer the questions.'));
out.push(model([
  '**TO SISTER NASR · the night before · 14 September**',
  'Tomorrow at ten I will be sitting in front of the rota committee with the report in front of me, and you will be asleep, which is the right way round for once. I am writing this so that you know what I am going to say about you before I say it, and so that you can tell me tonight if any of it is wrong.',
  '**What I will be reading out, in order.** The trolley first. The ward had one trolley from the second of February to the end of July and a second one for four weeks in August, and in those four weeks the round was late eleven times instead of twenty-six and there were no errors in it. That paragraph goes before mine, and while I am reading it somebody on that committee will be deciding that the whole thing was a trolley, and I am going to let them, because it is half true and because the other half is still in the pages after it.',
  '**What I will be saying about you, and it is four lines.** That you joined the trial on the eighth of June at your own request, that your entries are on a separate sheet because you asked for them to be, that in the fourteen weeks since there has been nothing on a fourth or fifth night on your sheet either, and that you have told me twice that you want your fourteen years left out of it. They are left out. I have written the words "a second nurse" and not your name anywhere except on the sheet, which is yours.',
  '**What I will not be doing.** I will not be saying that the blocks are the cause. I will not be saying that anybody was at fault in the fourteen years before this one, and if somebody on that committee says it, I am going to say that nobody counted and that a thing nobody counted is not a thing anybody got wrong.',
  '**And what I am asking you for, which is nothing.** You do not have to be there, you do not have to sign anything, and if they ask me in September next year whether you want to go on, I am going to tell them to ask you.',
  'Telephone me tonight if any line of this is not true. I will be awake until one.',
]));
out.push(item('1', 'What goes first in the report, and what does Rasha expect the committee to do while she reads it?'));
out.push(item('2', 'Which four facts does she say she will read out about Sister Nasr, and what has she left out?'));
out.push(item('3', 'What does she say she will do if somebody blames anybody for the fourteen years?'));
out.push(writers([
  'A message before a meeting: **where you will be and where they will be** → **what you will be reading out, in order** → **what you will be saying about them, counted in lines** → **what you will not be doing** → **and what you are asking them for, which may be nothing**.',
  'Say what you expect the room to **do while you are talking** — _somebody will be deciding that the whole thing was a trolley, and I am going to let them_. That is 12.7 in the future continuous, and it is the sentence that shows you have thought about the meeting rather than about your case.',
  'Count the lines you will say about the other person, and say what you have left out and on whose instruction. _They are left out._ Two words, and they are the reason the message gets answered.',
  '⚠ End with the ask, even when it is nothing, and give them a way to stop you: _telephone me tonight if any line of this is not true. I will be awake until one._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message you send the night before something, to somebody it is about (60 words or more).'));
out.push(p('**TO ______________ · the night before · ______________**   Tomorrow at ______________ I will be ______________, and you will be ______________. I am writing so that you know what I am going to say about you before I say it.   **What I will be reading out, in order.** ______________ first, because ______________. While I am reading it somebody will be ______________, and I am going to ______________.   **What I will be saying about you, and it is ______ lines.** That ______________, that ______________, and that ______________. ______________ is left out.   **What I will not be doing.** I will not be ______________. And if somebody says ______________, I am going to say ______________.   **And what I am asking you for.** ______________. Telephone me tonight if ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Future continuous with a time for every moment inside the event',
  'At least one _I will not be_ sentence, and it is a decision',
  'What you have left out about the other person, and why',
  'An ask — or an explicit nothing — and a way for them to stop you',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I will not be doing" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full message (140 words or more) to somebody who will be affected by something you are going to do. Everything you will be doing with a time on it, everything you will not be doing, and the ask at the end.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s message as **the person it is addressed to, reading it at midnight**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the _I will not be_ lines.** Then the question: how many of you have ever told the other person in advance what you were not going to say about them? Almost nobody, and it is four lines of writing that costs nothing and changes what the other person does the next morning.'));
out.push(hw('Write the message you would send the night before your next meeting, interview, journey or difficult conversation (60+ words), to one person it is about. Send it if you can, and bring what came back.'));

// ======================= 13.4 =======================
out.push(pb());
out.push(h2('13.4  Three futures, side by side'));
out.push(p('**Function:** choosing between the three futures   ·   **Grammar:** the contrast, head to head   ·   **Pronunciation:** hearing which future a speaker chose'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads twelve sentences about the same thing — a meeting on the fifteenth. The class sorts each one into **arranged**, **intended** or **in the middle of happening**, and then does the hard half: says what each one tells a listener that the other two do not.'));
out.push(board('I am seeing them at ten. I am going to lead on the trolley. At five past I will be reading it.', 'arranged · intended · in the middle'));
out.push(p('**b**  Which future, and why? **1** _I ___ the committee at ten on the fifteenth._  **2** _I ___ lead on the trolley._  **3** _At five past ten I ___ the second paragraph._  **4** _The train ___ at 6.40._  **5** _All right — I ___ it this evening, then._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Tareq discover about his own four sentences?   **A** that three of them are the same future   **B** that he has used all four correctly   **C** that none of them has a time in it'));
out.push(p('**b**  Listen again. **1** What is the rule Jad gives, in one line?   **2** What does Ms Huda say about _will_ on its own?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  Four sentences and three futures', [
  ['Ms Huda', 'Everybody has written four sentences about the same week. Tareq, read yours.'],
  ['Tareq', '"I will see the depot manager on Tuesday. I will ask him about the second sheet. I will be driving at six so I will not be able to go in the morning. I will write it down this time."'],
  ['Jad', 'Three of those are the wrong future and one of them is right.'],
  ['Tareq', 'Go on, then.'],
  ['Jad', 'The first one is arranged — you told me on Monday that he has put you in his book — so it is _I am seeing the depot manager on Tuesday_. The second one you decided last week, so it is _I am going to ask him_. The third one is right, because you will be in the middle of driving. And the fourth one is the only real _will_ in the four, because you are deciding it as you say it.'],
  ['Tareq', 'And what difference does it make? He will understand all four.'],
  ['Jad', 'He will understand all four and he will not know which of them are settled. If you write "I will see the manager on Tuesday" in a message to the depot, the man reading it does not know whether you have an appointment or a hope. That is the only thing he needs.'],
  ['Ms Huda', 'Jad, give the class the rule in one line.'],
  ['Jad', '_Will_ for what you are deciding now. _Going to_ for what you decided before. _Am -ing_ for what somebody else has agreed to. _Will be -ing_ for the middle of it.'],
  ['Nour', 'That is the clearest thing anybody has said about English in this room.'],
  ['Ms Huda', 'It is, and I want to add the one thing that is behind it. Students use _will_ for everything because _will_ is what they were taught first and because it is the only one of the four that commits you to nothing. _I will write to them_ can be said in September and still be true in March. _I am writing to them on Sunday_ cannot.'],
  ['Mazen', 'Which is why I said "I will write again" in April and wrote nothing.'],
  ['Ms Huda', '_Will_ is the future of good intentions. The other three have dates in them, and a date is a thing that can be missed, which is why it is worth more.'],
  ['Tareq', 'Then I am seeing him on Tuesday, I am going to ask about the second sheet, I will be driving at six, and the thing I will write down this time is what he says about the sheet, because last time I remembered it wrong by a word and the word was "all".'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four futures, head to head**',
  table(['form', 'what it tells the listener'], [
    ['_I **will** write to them._', 'decided as I speak; commits to nothing'],
    ['_I **am going to** write on Sunday._', 'decided before now; a first step exists'],
    ['_I **am seeing** him on Tuesday._', 'somebody else has agreed; a diary entry'],
    ['_At six I **will be driving**._', 'in the middle of it at that moment'],
    ['_The train **leaves** at 6.40._', 'a timetable; not mine to change (13.5)'],
  ], [2.3, 2.3]),
  '**One line to keep:** _will_ for what you are deciding now · _going to_ for what you decided before · _am -ing_ for what somebody else has agreed to · _will be -ing_ for the middle of it.',
  '**_Will_ is the future of good intentions.** It is correct, it is useful for offers and decisions made on the spot — _all right, I\'ll do it_ · _I\'ll give you a hand_ — and it is the form that lets a student say the same sentence in September and in March. If you have a date, use a future with a date in it.',
  '**Choosing is the B1 skill, not forming.** All four are easy to make. The mark — in the examination and in a meeting — is for picking the one that tells your reader how settled the thing is.',
  '⚠ ~~I will be seeing him on Tuesday~~ when you simply have an appointment. The continuous is for the moment inside, or for a deliberately soft question; used everywhere, it makes everything vague.',
  '⚠ ~~When I will arrive, I will telephone you~~ → _when I **arrive**, I\'ll telephone you_. No _will_ after _when_, _as soon as_, _before_, _after_ or _until_.',
  '**Useful phrases:** he will understand all four and he will not know which of them are settled · _will_ is the future of good intentions · a date is a thing that can be missed, which is why it is worth more.',
  '**Practise:** Choose the future and say why.  1 _I ___ (see) the dentist at four on Thursday._  2 _I ___ (ask) for the dates — I decided last night._  3 _Don\'t telephone at six; I ___ (read) the round._  4 _That is heavy — I ___ (carry) it for you._  5 _The shop ___ (close) at eight on Fridays._  6 _By the time you telephone, I ___ (sit) in the meeting._',
  '**Pronunciation.** 🔊 **Track 13.8** Four sentences about one week, said by one speaker. Listen and write **arranged · intended · middle · deciding now** for each. The clue is rhythm as much as grammar: an arrangement puts the weight on the date, an intention on the verb, and a decision made on the spot on _will_ itself, which is the only time _will_ is ever stressed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card, all of them in _will_. B says it again in the right future and says what the new version tells a listener. A then asks: _would you put that in a message to somebody at work?_ Swap cards.'));
out.push(dlg(null, [
  ['A', 'I will __________.'],
  ['B', 'Better: __________, because __________.'],
  ['A', 'What does that tell the person reading it?'],
  ['B', '__________.'],
  ['A', 'Would you put it in a message at work?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – all in _will_', 'Card B – all in _will_'], [
  ['I will see the manager on Tuesday.', 'I will ask about the second sheet.'],
  ['I will drive at six so I will not come.', 'I will write to the supplier.'],
  ['I will meet the committee at ten on the fifteenth.', 'I will train them on the third Tuesday.'],
  ['I will read the round at six.', 'I will finish Book 2 next June.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight corrected sentences and mark the ones where the new form **adds information** rather than just being more correct. There are usually six, and that is the argument for the cycle: this is not tidying, it is telling somebody something.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write four sentences about your own next week, one in each future, and then read them to your partner in a different order. Your partner names the future and says what each one claims.'));
out.push(p('**b**  Swap. Then each of you find one sentence of the other\'s that is in _will_ and should not be.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq read four sentences about the same week, all of them with "will" in: I will see the depot manager on Tuesday, I will ask him about the second sheet, I will be driving at six so I will not be able to go in the morning, I will write it down this time. Jad said three of them are the wrong future and one is right — the first is arranged, because Tareq had said the manager has put him in his book, so it is "I am seeing him on Tuesday"; the second he decided last week, so it is "I am going to ask him"; the third is right, because he will be in the middle of driving; and the fourth is the only real "will", because he is deciding it as he says it. Tareq asked what difference it makes, since the manager will understand all four, and Jad said he will understand all four and will not know which of them are settled — and if you write "I will see the manager on Tuesday" to a depot, the man reading it cannot tell whether you have an appointment or a hope, which is the only thing he needs. Ms Huda asked Jad for the rule in one line: will for what you are deciding now, going to for what you decided before, am -ing for what somebody else has agreed to, will be -ing for the middle of it. Nour said it was the clearest thing anybody had said about English in that room. Ms Huda added the reason behind it: students use will for everything because it was taught first and because it commits them to nothing — "I will write to them" can be said in September and still be true in March, and "I am writing to them on Sunday" cannot. Mazen said that is why he said "I will write again" in April and wrote nothing. And Ms Huda said will is the future of good intentions, and the other three have dates in them, and a date is a thing that can be missed, which is why it is worth more._'));
out.push(p('**Listener task:** write the one sentence from this room where the future changed what the sentence claims.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the same week written twice. Answer the questions.'));
out.push(model([
  '**ONE WEEK, WRITTEN TWICE** · from the Unit 13 board, rewritten',
  '**Version A — all in _will_.** I will see the depot manager on Tuesday. I will ask him about the second check sheet. I will write down what he says. I will not be able to go in the morning because I will drive the early shift. I will speak to the night supervisor as well. I will tell you what happens.',
  '**Version B — four futures.** I am seeing the depot manager at eleven on Tuesday; he put it in his book on Monday. I am going to ask him for one thing only — that the second check sheet be collected from the bus and not from the office window — and I am going to take the nine dates with me. At six on Tuesday morning I will be driving the early shift, so eleven is the first hour I have. I will write down what he says, word for word, because last time I remembered it wrong by one word and the word was "all". And if he says no, I am going to ask the night supervisor instead, who has wanted it for longer than I have.',
  '**What A tells the depot.** That a driver has some plans. Nothing in it can be missed, nothing in it can be checked, and the manager\'s office could read it in September and find no obligation in any of the six sentences, including the one about the sheet.',
  '**What B tells the depot.** The hour, the man, the one request, the evidence, the reason the morning is impossible, what will be written down, and what happens if the answer is no. Every one of those is a thing somebody could hold me to, which is the point of writing it.',
  '**And the sentence that does not change.** _I will write down what he says, word for word._ That is a decision taken while writing, about a thing with no date — and _will_ is the right future for it, which is why Version B keeps it exactly as it was.',
]));
out.push(item('1', 'How many sentences in version A have a time in them, and how many in version B?'));
out.push(item('2', 'What does the writer say an office could find in version A in September?'));
out.push(item('3', 'Which sentence is the same in both versions, and why?'));
out.push(writers([
  'A page that shows the choice: **the same week in _will_** → **the same week in four futures** → **what the first one tells the reader** → **what the second one tells the reader** → **and the one sentence that was right in _will_ all along**.',
  'Write version A first and honestly. Most people\'s real messages are version A, and the page only teaches if the first half is what you would actually have sent.',
  'Judge the versions by **what somebody could hold you to**. _Every one of those is a thing somebody could hold me to, which is the point of writing it._ That is the argument for dated futures in one line.',
  '⚠ Keep the sentence that was right. A page that changes all six proves nothing; a page that changes five and defends the sixth shows that you chose.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own next week twice (60 words or more).'));
out.push(p('**ONE WEEK, WRITTEN TWICE**   **Version A — all in _will_.** I will ______________. I will ______________. I will ______________. I will ______________.   **Version B — four futures.** I am ______________ at ______________ on ______________; ______________. I am going to ______________, and I am going to ______________. At ______________ I will be ______________, so ______________. And if ______________, I am going to ______________.   **What A tells the reader.** ______________.   **What B tells the reader.** ______________. Every one of those is ______________.   **And the sentence that does not change.** ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All four futures used, each doing its own job',
  'A time expression in every arrangement',
  'No _will_ after _when_, _as soon as_, _before_ or _until_',
  'One sentence defended as correctly _will_'],
));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version B only, and the class names the four futures as they go past.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (140 words or more) that you are going to send this week, in version B — four futures, every arrangement dated, one request, and what happens if the answer is no. Then write underneath which version you would have sent a year ago.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s message as **the person who has to answer it by Friday**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Count the dated futures in the room\'s version A paragraphs, and then in the version Bs.** The first number is usually under five in the whole class and the second is over thirty. Then ask the real question: which version is the one you have been sending for years?'));
out.push(hw('Rewrite one real message you have already sent this month in the four futures (60+ words), and write one line underneath saying what the person who received it could not have known from your original.'));

// ======================= 13.5 =======================
out.push(pb());
out.push(h2('13.5  The bus leaves at 6.40'));
out.push(p('**Function:** talking about a timetable   ·   **Grammar:** the present simple for schedules   ·   **Pronunciation:** reading a timetable aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one thing in your week that runs to a **timetable** — something that happens at a time whether you are there or not. Say it in the present simple. Then your teacher asks the second question: _and who can change it?_'));
out.push(board('The first bus leaves at 6.40. The shop opens at nine.', 'present simple = not mine to change'));
out.push(p('**b**  Timetable, arrangement or intention? **1** _The train leaves at 6.40._  **2** _I am leaving at 6.40._  **3** _The committee meets on the fifteenth of every month._  **4** _I am going to leave early._  **5** _The laboratory closes at six._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Tareq brought in, and what is wrong with it?   **A** a timetable with a mistake in it   **B** a timetable nobody can read   **C** a timetable that was changed without being reprinted'));
out.push(p('**b**  Listen again. **1** What is the difference between the printed timetable and what actually happens?   **2** What does Nour say about a schedule that nobody owns?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  What it says and what happens', [
  ['Tareq', 'I have brought the printed timetable for my line. It is from 2019 and it is still on the wall at both ends.'],
  ['Ms Huda', 'Read the first three lines of it.'],
  ['Tareq', '"First departure 6.40. Then every twenty minutes until 9.00. Then every thirty minutes until 14.00."'],
  ['Lubna', 'And what actually happens?'],
  ['Tareq', 'The first bus leaves at 6.20, because the drivers agreed among themselves in 2021 that the men going to the industrial road needed it earlier. Then it is every twenty minutes until about half past eight, because that is when the traffic takes the interval away from you. The thirty-minute part is right.'],
  ['Omar', 'So the timetable on the wall is wrong by twenty minutes at the only hour that matters.'],
  ['Tareq', 'It is wrong by twenty minutes in our favour. The passengers who know, know. The passengers who do not know are standing there at 6.40 having missed it, and they are the ones who do not use the line often, which is to say the ones who most need a timetable.'],
  ['Nour', 'Who owns it?'],
  ['Tareq', 'Nobody. That is the answer and I have never said it out loud. The drivers changed the first departure, the company printed the sheet, the sheet is six years old, and the man who could reprint it has never been on the line at 6.20.'],
  ['Nour', 'Then that is the whole problem, and it is the same at TechCare. We have an installation schedule that says a visit takes ninety minutes. It takes a hundred and ten. Everybody who does the visits knows it is a hundred and ten, and the schedule is used to tell customers ninety, and then we are late four times a day and the customer is annoyed four times a day, and nobody has changed one number on a page since 2022.'],
  ['Ms Huda', 'What would change it?'],
  ['Nour', 'Somebody writing the real number down and giving it to the person who sends out the appointments. It is one number. I have been there a year and I have not done it.'],
  ['Tareq', 'And what stops you is the same thing that stops me: it is not my sheet.'],
  ['Nour', 'It is not my sheet. And four times a day somebody is annoyed about twenty minutes that are nobody\'s fault and that everybody in the building knows about.'],
  ['Ms Huda', 'Then here is this cycle\'s work, and it is in the present simple because a timetable is a statement about how the world runs. Write the real one. Not a complaint — a timetable, in the same shape as the printed one, with the true numbers in it, and a line at the top saying who it came from.'],
  ['Tareq', 'And give it to whom?'],
  ['Ms Huda', 'To the person who would reprint it. Who, in your case, is not your manager.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present simple for schedules**',
  table(['you say', 'what it means'], [
    ['_The first bus **leaves** at 6.40._', 'a timetable: it happens whether I am there or not'],
    ['_The shop **opens** at nine and **closes** at eight._', 'a standing schedule'],
    ['_The committee **meets** on the fifteenth of every month._', 'recurring, and not mine to change'],
    ['_A visit **takes** ninety minutes._', 'a stated standard — true or not'],
    ['_The course **finishes** in June._', 'fixed by the institution, not by me'],
  ], [2.4, 2.2]),
  '**The present simple is the future of things you do not control.** Timetables, opening hours, departures, terms, schedules, programmes. _I am leaving at 6.40_ is my arrangement; _the bus leaves at 6.40_ is the world\'s.',
  '**Which is why it is the right form for a printed sheet** — and why putting your own plans in it is a mistake: _I leave at six_ reads as a timetable and makes your choice sound like a rule.',
  '**And a stated standard is still a schedule, even when it is false.** _A visit takes ninety minutes_ is what the page says. The sentence for what actually happens is _a visit takes a hundred and ten_, in the same tense, which is why one number on one page is the whole of the fix.',
  '⚠ ~~The bus is leaving at 6.40 every morning~~ → _leaves_. The continuous makes a timetable sound like today only.',
  '⚠ ~~The shop will open at nine tomorrow~~ for the normal hour → _opens_. Keep _will_ for a change: _it will open at ten tomorrow, for the holiday._',
  '⚠ ~~The committee meet~~ → _meets_ in writing. A singular body takes a singular verb in careful English.',
  '**Useful phrases:** it is wrong by twenty minutes in our favour · the ones who most need a timetable · nobody owns it, and I have never said it out loud · it is one number, and I have not done it.',
  '**Practise:** Say the real schedule in the present simple, and then who owns the page it is written on.  1 your working day  2 the place you buy from  3 a journey you make often  4 a meeting that recurs  5 this class',
  '**Pronunciation.** 🔊 **Track 13.10** Reading a timetable aloud: the **times** are the stressed words and the verbs are almost swallowed — _the first bus leaves at SIX FORty, then EVery twenty MINutes until NINE_. And _at_ before a time reduces to /ət/. Listen to six lines and write only the times you hear.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the printed line from the card. B says what actually happens, in the present simple, and then says **who owns the page**. A asks the last question: _what is the one number that would have to change?_ Swap cards.'));
out.push(dlg(null, [
  ['A', 'The sheet says __________.'],
  ['B', 'What actually happens is __________.'],
  ['A', 'Who owns the page?'],
  ['B', '__________.'],
  ['A', 'What is the one number that would have to change?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – printed lines', 'Card B – printed lines'], [
  ['First departure 6.40, then every twenty minutes.', 'An installation visit takes ninety minutes.'],
  ['The laboratory issues results within 24 hours.', 'The drug round takes fifty minutes.'],
  ['The counter opens at nine and closes at eight.', 'A repair is quoted at three working days.'],
  ['The ministry answers correspondence within a week.', 'The lesson finishes at half past seven.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight printed numbers and the eight real ones next to each other, and then mark the ones where **everybody involved already knows** the real number. In a first run it is seven or eight out of eight, and that is the finding: almost every false schedule in a workplace is false in public.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take one printed or stated schedule from your own work — hours, a duration, a frequency, a turnaround. Say what it says and what happens, both in the present simple, and then say who owns the page and how long it has been wrong.'));
out.push(p('**b**  Swap. Then each of you say what it costs, per day, that the page has not been changed.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq brought in the printed timetable for his line, from 2019, still on the wall at both ends. It says first departure 6.40, then every twenty minutes until 9.00, then every thirty minutes until 14.00. What actually happens is that the first bus leaves at 6.20, because the drivers agreed among themselves in 2021 that the men going to the industrial road needed it earlier; then it is every twenty minutes until about half past eight, because that is when the traffic takes the interval away; and the thirty-minute part is right. Omar said the timetable is wrong by twenty minutes at the only hour that matters, and Tareq said it is wrong in their favour — the passengers who know, know, and the ones standing there at 6.40 having missed it are the ones who do not use the line often, which is to say the ones who most need a timetable. Nour asked who owns it, and Tareq said nobody, and that he had never said it out loud: the drivers changed the departure, the company printed the sheet, the sheet is six years old, and the man who could reprint it has never been on the line at 6.20. Nour said it is the same at TechCare: the installation schedule says a visit takes ninety minutes and it takes a hundred and ten, everybody who does the visits knows, the schedule is used to tell customers ninety, and so they are late four times a day and the customer is annoyed four times a day, and nobody has changed a number on a page since 2022. What would change it is somebody writing the real number down and giving it to the person who sends out the appointments — one number, and she has been there a year and has not done it. Tareq said what stops her is what stops him: it is not my sheet. So Ms Huda set the work: write the real timetable, in the same shape as the printed one, with the true numbers and a line at the top saying who it came from — and give it to the person who would reprint it, who is not the manager._'));
out.push(p('**Listener task:** write one real number from this room, and how long the printed one has been wrong.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Nour writes. Answer the questions.'));
out.push(model([
  '**INSTALLATION VISITS · THE TIMES THEY ACTUALLY TAKE** · N. Sabbagh, junior technician · September · for the appointments desk',
  'This sheet is not a complaint and it is not a request. It is the schedule we work to, written down, because the one in use was printed in 2022 and the appointments desk has never been given another one.',
  '**A standard installation takes 110 minutes**, not 90. That is the mean of the forty-one visits I did between March and August, which I timed from the doorbell to the signature. The quickest was 70 and the longest was 195.',
  '**A visit to a flat above the second floor with no lift takes 130**, because the equipment goes up in two journeys.',
  '**A replacement — where something is already installed — takes 55.** The printed sheet gives it 90, the same as a new installation, and this is the number that costs us the most, because four replacements are booked as a half-day and finish by eleven.',
  '**Two visits in one building take 150 for the pair**, not 220, because the same cable survey serves both.',
  '**The desk allows 20 minutes between appointments.** The real travel time between two addresses in the same district is 25 to 40, and between districts it is 45 to an hour, which is why a day of five visits runs forty minutes late by the fourth one however fast each visit is.',
  '**What this means for the day as it is built now.** Five visits at 90 plus 20 between them is a day of 9 hours 10. The same five visits at the real numbers is 11 hours 15. The difference is not anybody\'s speed; it is two hours that were never on the page.',
  '**What I am not saying.** I am not saying the 2022 sheet was wrong when it was written — I was not there and the equipment has changed twice. I am not asking for fewer visits. And I have not asked anybody else to check my forty-one, which is the first thing somebody should do with this sheet.',
  '**What I would like.** That the desk books replacements at 60 and installations at 110 for one month, and that somebody counts the complaints about lateness in that month and compares them with August. If the number does not fall, this sheet is wrong and I will say so.',
]));
out.push(item('1', 'What are the four real durations she gives, and which one does she say costs the most?'));
out.push(item('2', 'What does she say the difference in the day is not caused by?'));
out.push(item('3', 'What does she ask for, and what will she do if the complaints do not fall?'));
out.push(writers([
  'A corrected schedule: **say what the sheet is not** → **the real numbers, one a line, each with how you got it** → **the number that costs the most, named** → **what it means for a whole day** → **what you are not saying** → **and a one-month trial with a test that could prove you wrong**.',
  'Give the **range as well as the mean**: _the quickest was 70 and the longest was 195_. A single number invites an argument about exceptions; a mean with a range has already had it.',
  'Say what it means for the **unit the reader cares about** — in her case the whole day, not the visit. Nobody books a visit; they book a day.',
  '⚠ End with a test that could go against you: _if the number does not fall, this sheet is wrong and I will say so._ That is 12.3 and 7.6 in a timetable, and it is what turns a corrected schedule from a complaint into a proposal.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the real schedule for something in your own work (60 words or more).'));
out.push(p('**______________ · THE TIMES THEY ACTUALLY TAKE** · ______________ · for ______________   This sheet is not ______________. It is the schedule we work to, written down, because ______________.   **A standard ______________ takes ______________**, not ______________. That is ______________ of the ______________ I ______________ between ______________ and ______________. The quickest was ______________ and the longest was ______________.   **______________ takes ______________**, because ______________.   **______________ takes ______________.** The printed sheet gives it ______________, and this is the number that costs the most, because ______________.   **What this means for the ______________.** ______________.   **What I am not saying.** I am not saying ______________. I am not asking for ______________. And I have not ______________.   **What I would like.** That ______________ for one month, and that somebody ______________. If ______________, this sheet is wrong and I will say so.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every duration in the present simple, with a mean and a range',
  'How each number was obtained, in the same line',
  'What it means for the whole day, shift or week',
  'A one-month trial with a test that could prove you wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I am not saying" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full sheet (140 words or more) for a schedule in your own work that everybody knows is wrong. Real numbers only, with how you got them. Then write underneath who owns the page, and whether you are going to give it to them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s sheet as **the person at the desk who books the appointments**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the sheets in this room contain a number the writer timed themselves?** Count. Then: how many of the false printed numbers were known to be false by everybody who uses them? The second number is almost always the whole room, and that is the fact to end on — these sheets are not discoveries, they are things nobody had written down.'));
out.push(hw('Time one thing at work properly, five times at least (60+ words). Give the mean, the quickest and the longest, and write the one line of schedule it should replace.'));

// ======================= 13.6 =======================
out.push(pb());
out.push(h2('13.6  An itinerary somebody else can follow'));
out.push(p('**Function:** writing an itinerary   ·   **Grammar:** the three futures and the timetable, in one document   ·   **Pronunciation:** reading a programme aloud to somebody taking notes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs: A has to be somewhere tomorrow that B has never been. B must write down, in sixty seconds, everything they would need in order to go **instead of** A. Then A reads what B wrote and says what is missing. Swap.'));
out.push(board('09.00 Meet H. Sweidan at the gate on Sharia al-Jalaa (not the door).', 'time · what happens · who · and the warning'));
out.push(p('**b**  Which of these belongs in an itinerary somebody else will follow? **1** _10.00 Site visit._  **2** _10.00 Meet the caretaker at the yard gate; he has the key and he leaves at 10.30._  **3** _Bring the drawings._  **4** _Bring sheets 1–3, rolled, and a torch._  **5** _Lunch._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is coming to Damascus, and what does Lubna have to write?'));
out.push(p('**b**  Listen again. **1** What does Lubna say an itinerary is for?   **2** What are the two things she puts in that nobody taught her to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  Somebody else can follow it', [
  ['Lubna', 'There is an engineer coming from Aleppo on the twenty-third to look at the building with me, and I have to send her a programme by Thursday. I have never written one.'],
  ['Ms Huda', 'What have you got so far?'],
  ['Lubna', '"9.00 meet at the building. 10.00 survey. 1.00 lunch. 2.00 discussion."'],
  ['Nour', 'I could not follow that. I do not know which building, which door, whether to bring anything, or what happens if you are not there.'],
  ['Lubna', 'That is exactly the comment I got from my tutor, in four words: _this is your diary_.'],
  ['Ms Huda', 'Say what the difference is.'],
  ['Lubna', 'A diary is a reminder for somebody who already knows everything. An itinerary is for somebody who knows nothing and is arriving at a gate in a city they do not live in. So every line has to have a time, a place exact enough to stand in, a person with a name, and — this is the part I had not thought about — what to do if the person is not there.'],
  ['Omar', 'And the second thing?'],
  ['Lubna', 'The second thing is the warnings, and they are the only reason anybody keeps an itinerary in their hand. The gate on al-Jalaa is not the door. The caretaker has the only key and he leaves at half past ten, so if we are late the yard is finished for the day. The stairwell store has no handle on the inside and I am not having a visiting engineer shut in it. And the south rooms are five degrees hotter, so the measurements she wants are the ones to do first, before eleven.'],
  ['Jad', 'None of those is in the four lines you read out.'],
  ['Lubna', 'None of them is in the four lines, and all four of them are things I have known for a year.'],
  ['Nour', 'We put the warnings at the top at TechCare. "Nobody is in the building before eight" goes above the appointment and not next to it.'],
  ['Lubna', 'Then the warnings go at the top. And the tenses: the arrangements are in the present continuous because she and I have agreed them, the building times are in the present simple because they are not mine, and the two things I intend to do if there is time are marked as intentions so that she can see they might not happen.'],
  ['Ms Huda', 'Read the first line of the new one.'],
  ['Lubna', '"08.50 — I am meeting you at the **gate** on Sharia al-Jalaa, which is twenty metres north of the door and has no number on it. If I am not there, telephone me; if there is no answer, ask at the bread shop opposite, where they know me."'],
  ['Ms Huda', 'That is an itinerary. The first version was a diary with four times in it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four tenses an itinerary needs**',
  table(['the line', 'the form'], [
    ['_08.50 I **am meeting** you at the gate._', 'present continuous — we have agreed it'],
    ['_The caretaker **leaves** at 10.30._', 'present simple — not ours to change'],
    ['_We **are going to** look at the roof if there is time._', '_going to_ — an intention, may not happen'],
    ['_At eleven you **will be standing** in the hot rooms._', 'future continuous — so do those first'],
  ], [2.5, 2.1]),
  '**An itinerary is for somebody who knows nothing.** Every line: a **time**, a **place exact enough to stand in**, a **person with a name**, and **what to do if that person is not there**. A line without the fourth is a line that fails on the one morning it is needed.',
  '**Warnings go at the top, not in place.** The thing that will ruin the day — a key, a gate, a man who leaves at half past ten, a room that locks — is read once, at the beginning, by somebody standing in the street. Buried at 11.00 it is read at 11.00.',
  '**Mark the intentions as intentions.** _We are going to look at the roof if there is time_ tells a visitor they may lose it. An itinerary that promises everything in the present continuous is a document that disappoints at four in the afternoon.',
  '⚠ ~~10.00 Site visit~~ → _10.00 We are measuring the south rooms, starting at Room 14 (first floor, right)._ A noun with a time next to it is a diary entry.',
  '⚠ ~~Bring the drawings~~ → _bring sheets 1–3, rolled, and a torch_. The reader is packing a bag the night before, in another city.',
  '**Useful phrases:** this is your diary · a place exact enough to stand in · what to do if the person is not there · the warnings go at the top.',
  '**Practise:** Turn each diary line into an itinerary line.  1 _9.00 Meeting._  2 _11.00 Workshop._  3 _1.00 Lunch._  4 _2.00 Discussion with the department._  5 _4.00 Leave._',
  '**Pronunciation.** 🔊 **Track 13.12** Reading a programme aloud to somebody who is writing it down: the **time first, then a pause**, then the line said slowly, then a second pause before the warning. _Oh eight fifty ‖ I am meeting you at the gate ‖ which is not the door._ Listen to four lines and write them as you hear them; the pauses are where your pen goes.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the diary line from the card. B turns it into an itinerary line with all four parts and then adds the warning that belongs at the top. A writes it down as B dictates, which is the real test. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________ — I am __________ at __________, which is __________. If __________, __________.'],
  ['A', 'And the warning at the top?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – diary lines', 'Card B – diary lines'], [
  ['9.00 Meeting.', '11.00 Workshop.'],
  ['1.00 Lunch.', '2.00 Discussion with the department.'],
  ['8.00 Collect the keys.', '3.00 Hospital.'],
  ['10.00 Supplier.', '5.00 Train.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, with the listeners writing the lines down from dictation. **Listener task:** mark every line you could not have followed, and say what was missing. A line that fails is nearly always missing the same thing — what to do if the person is not there.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the itinerary for one day of your own that somebody else could follow instead of you. Four lines at least, warnings at the top. Read it to your partner, who writes it down.'));
out.push(p('**b**  Swap. Then your partner tells you the one line they could not have followed, and the one warning you know and did not write.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna has an engineer coming from Aleppo on the twenty-third and has to send her a programme by Thursday, and she had never written one. What she had was four lines: nine o\'clock meet at the building, ten survey, one lunch, two discussion. Nour said she could not have followed it — she would not know which building, which door, whether to bring anything, or what to do if Lubna were not there — and Lubna said that is exactly what her tutor said, in four words: this is your diary. A diary is a reminder for somebody who already knows everything; an itinerary is for somebody who knows nothing and is arriving at a gate in a city they do not live in. So every line needs a time, a place exact enough to stand in, a person with a name, and what to do if that person is not there. And the second thing she had not thought about is the warnings, which are the only reason anybody keeps an itinerary in their hand: the gate is not the door; the caretaker has the only key and leaves at half past ten, so if they are late the yard is finished for the day; the stairwell store has no handle on the inside; and the south rooms are five degrees hotter, so the measurements have to be done before eleven. Jad pointed out that none of those was in her four lines, and Lubna said no — and that all four are things she has known for a year. Nour said that at TechCare the warnings go at the top, above the appointment and not next to it. So the warnings go at the top, the arrangements are in the present continuous because they have been agreed, the building times are in the present simple because they are not hers, and the two things she intends to do if there is time are marked as intentions so the visitor can see they might not happen. Her new first line is: ten to nine, I am meeting you at the gate on Sharia al-Jalaa, which is twenty metres north of the door and has no number on it; if I am not there, telephone me, and if there is no answer, ask at the bread shop opposite, where they know me._'));
out.push(p('**Listener task:** write the best warning anybody read out, and the line you could most easily have followed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the programme Lubna sends. Answer the questions.'));
out.push(model([
  '**14 SHARIA AL-JALAA · TUESDAY 23 SEPTEMBER** · programme for H. Qassab, structural engineer, Aleppo · sent by L. Sweidan, 18 September',
  '**Read these four things first.**',
  '**1** The **gate** is twenty metres north of the door, has no number and is green. The door with the number on it is locked and nobody answers it.',
  '**2** The caretaker, Abu Rafiq, holds the only key to the yard and he **leaves at 10.30**. Anything in the yard has to happen before that or it waits for another day.',
  '**3** The store under the stairwell has a steel door and **no handle on the inside**. Do not go in it; I will hold it open if we need to look.',
  '**4** The three south rooms run 4–5 °C hotter than the north side. If you want readings in them, we take them first.',
  '**08.50** — I am meeting you at the gate. If I am not there, telephone me; if there is no answer, ask at the bread shop opposite, where they know me.',
  '**09.00–10.25** — We are in the yard with Abu Rafiq: the 1974 extension, the render, and the two downpipes. Bring a torch; there is no light under the extension.',
  '**10.30–11.15** — We are measuring the three south rooms. At eleven you will be standing in the hottest room in the building, so this is the hour for anything that needs you to concentrate.',
  '**11.15–12.30** — Rooms 13 and 14, the single lighting circuit, and the external wire on the second switch. I am going to ask you one question here that I have not put in writing.',
  '**12.30–13.15** — Lunch at the place on the corner. It **closes at two** and it does not take cards.',
  '**13.15–15.00** — The stairwell and the abandoned lift shaft, then whatever you want to go back to.',
  '**15.00** — I am going to ask for twenty minutes of your opinion on the two blanks in my key, if you have them. If you have to leave at three, say so now and I will move this to the morning.',
  '**What to bring:** sheets 1–3 rolled, a torch, a tape, and shoes you do not mind. **What I am providing:** water, the 2009 drawings, and the mark-up of the key.',
  '**If the day falls through** — if the gate is shut and Abu Rafiq is not there, which has happened twice this year — telephone me and we go to the university drawing office instead, which has the 1974 file and is nine minutes away. Nothing is wasted.',
]));
out.push(item('1', 'Why do the four warnings come first, and what would happen if the second one were buried at 10.30?'));
out.push(item('2', 'Which line is an intention rather than an arrangement, and how can the reader tell?'));
out.push(item('3', 'What is the plan if the day falls through?'));
out.push(writers([
  'An itinerary: **the warnings first, numbered** → **each line with a time, a place to stand, a person and a fallback** → **the intentions marked as intentions** → **what to bring and what you are providing** → **and what happens if the whole day falls through**.',
  'Write the **fallback for the day**, not only for the lines. _Nothing is wasted_ is the sentence that lets somebody get on a bus from Aleppo for you.',
  'Say what you are providing. A visitor who does not know whether to bring water carries water, and a visitor who carries water is a visitor you have made nervous.',
  '⚠ Mark the ask you are leaving till the end — _I am going to ask for twenty minutes of your opinion, if you have them_ — and give them the escape: _if you have to leave at three, say so now._ An ask disclosed in advance is granted far more often than one sprung at a quarter to three.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the itinerary for one day that somebody else will follow (60 words or more).'));
out.push(p('**______________ · ______________** · programme for ______________ · sent by ______________   **Read these ______ things first.**  **1** ______________.  **2** ______________ **leaves at** ______________.  **3** ______________.   **______** — I am meeting you at ______________. If I am not there, ______________; if ______________, ______________.   **______** — We are ______________. Bring ______________.   **______** — At ______________ you will be ______________, so ______________.   **______** — I am going to ______________, if ______________.   **What to bring:** ______________. **What I am providing:** ______________.   **If the day falls through** — ______________, and ______________. Nothing is wasted.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Warnings numbered, at the top, before any time',
  'Every line: time · place to stand · person · what if they are not there',
  'Arrangements continuous · schedules simple · intentions marked',
  'What to bring, what you provide, and a fallback for the whole day',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their warnings only — the numbered block at the top.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full itinerary (140 words or more) for a real day — a visit, a journey, an inspection, a hospital appointment, a first day at work — for somebody who has never done it. Then give it to somebody and ask them to find the line they could not follow.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Read your partner\'s itinerary as **somebody who has to do that day tomorrow instead of them, alone**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Which warnings in this room are things the writer has known for more than a year?** Nearly all of them. That is the finding, and it is the same as 13.5\'s: the thing that would help a stranger most is usually the thing everybody local already knows and nobody has written down.'));
out.push(hw('Write the itinerary for a day somebody else could do instead of you (60+ words), with the warnings at the top, and give it to that person. Write down which line they asked a question about.'));

// ======================= 13.7 =======================
out.push(pb());
out.push(h2('13.7  Review & Mediate: The programme nobody reads twice'));
out.push(p('**Function:** explaining a programme to somebody   ·   **Recycling:** Units 1–13   ·   **Exam practice:** B1 Preliminary Reading Part 5, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I will see the committee at ten on the fifteenth.  **2** I am going to can ask him.  **3** The bus is leaving at 6.40 every morning.  **4** At ten I will sitting in front of them.  **5** When I will arrive, I will telephone you.  **6** I have an appointment the Tuesday.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page that goes up in every staff room in the school in the second week of September.'));
out.push(box(null, [
  '**AL-RUKN SECONDARY SCHOOL · EXAMINATION WEEK, 6–10 OCTOBER · PROGRAMME** _(one page, issued 12 September)_',
  '**1** Examinations **begin at 08.15** each day and candidates **are admitted** from 08.00.',
  '**2** The hall **is unavailable** on Wednesday 8 October; Wednesday\'s papers **take place** in Rooms 4, 5 and 6.',
  '**3** Invigilators **are assigned** on the list attached. Staff **are reminded** that an invigilator is a member of staff whom the head names in writing.',
  '**4** Third-year mathematics **is scheduled** for Thursday 9 October at 10.45.',
  '**5** Staff **are asked to make themselves available** for cover during the week.',
  '**6** Results **are issued** within ten working days of the last paper.',
  '**7** The department **intends to review** the order of the third-year scheme after the examinations, and a meeting **will be arranged**.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Umm Kinan takes the programme apart with Nour and Jad. Which line is not a schedule at all, and which line is the one she has been waiting nine months for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  Seven lines and three futures', [
  ['Umm Kinan', 'This went up on Friday. One page, seven lines, and every teacher in that school will read it once.'],
  ['Ms Huda', 'Read line five.'],
  ['Umm Kinan', '"Staff are asked to make themselves available for cover during the week."'],
  ['Nour', 'That is not a schedule. There is no time in it, no name, and no number of hours.'],
  ['Umm Kinan', 'It is not a schedule, it is a hope in the passive, and it is the line that will cost somebody four afternoons. Every year the same four people cover everything, because the sentence asks nobody in particular and the people who answer it are the people who answer everything.'],
  ['Jad', 'What would make it a schedule?'],
  ['Umm Kinan', 'A list. "The following staff are covering the following hours." Nine words and a table, and it would take the office twenty minutes, and then cover is an arrangement instead of a competition in willingness.'],
  ['Ms Huda', 'Now the lines that **are** schedules.'],
  ['Umm Kinan', 'One, two, four and six are schedules and they are in the present simple, and they are not mine to change: the examinations begin at a quarter past eight, the hall is unavailable on the Wednesday, third-year mathematics is at a quarter to eleven on the Thursday, results come in ten working days. Line three is a definition, which is the eleventh time this room has taught me that a definitions line decides what a rule means.'],
  ['Nour', 'And line seven?'],
  ['Umm Kinan', 'Line seven is why I came in today with this page in my bag.'],
  ['Ms Huda', 'Read it again, slowly.'],
  ['Umm Kinan', '"The department intends to review the order of the third-year scheme after the examinations, and a meeting will be arranged." — I asked for that in June of last year. I tabled four June papers and my own mark analysis, and the head of department said the printed scheme comes from the directorate and the department cannot alter it, and I agreed to teach chapter seven in the second term in my own classes and report in September.'],
  ['Jad', 'And now it is on the page.'],
  ['Umm Kinan', 'It is on the page in the two weakest futures in English. _Intends to_ and _will be arranged_. No date, no person, and a passive with nobody in it. In June of last year I would have gone home happy, because my words are on a school notice.'],
  ['Ms Huda', 'And this year?'],
  ['Umm Kinan', 'This year I am going to the office on Monday and I am going to ask for one thing: the date. Not the meeting, not the review, not the agenda — the date. Because _a meeting will be arranged_ is a sentence that can be true for four years, and _the meeting is on the twenty-seventh of October_ is a sentence somebody has to keep.'],
  ['Nour', 'And if they will not give you a date?'],
  ['Umm Kinan', 'Then I will have learnt something that I could not have learnt from the page, and I am going to put my own date in the letter: I am going to say that I am bringing the 2026 mark analysis to the November department meeting, which is on the fourth, and that I will table it under any item they like.'],
  ['Ms Huda', 'Which is this unit. Somebody has written your victory in a tense that commits them to nothing, and you have read the tense.'],
]));
out.push(sp());
out.push(box('Language box – reading a programme', [
  'Sort every line into **four kinds** before you do anything else: a **schedule** (present simple — not yours to change), an **arrangement** (continuous, or a named list — somebody has agreed), an **intention** (_intends to · is going to_ — decided, no date), and a **hope in the passive** (_staff are asked to · it is hoped that_ — nobody has decided anything).',
  '**The line to find first is the hope in the passive.** It has no time, no name and no number in it, and it is the line that costs somebody their week. _Staff are asked to make themselves available_ · _colleagues are encouraged to contribute_ · _every effort will be made_.',
  '**Then look for your own victory in a weak future.** _It is intended that · a meeting will be arranged · this will be reviewed in due course._ Those sentences can be true for four years. The answer is not to complain about the wording; it is to **ask for the date**.',
  '**And if they will not give you a date, put yours in.** _I am bringing the analysis to the November meeting, which is on the fourth._ A date you have set yourself is the only one you can keep without permission.',
  '⚠ Do not read a passive as a promise. _Will be arranged_ names nobody; a sentence with no subject has nobody in it to keep it.',
  '⚠ And do not read a definition line as decoration (line 3). At B1 you have met six definitions pages and every one of them changed what a rule meant.',
  '**Useful phrases:** it is not a schedule, it is a hope in the passive · cover becomes an arrangement instead of a competition in willingness · somebody has written your victory in a tense that commits them to nothing · ask for the date, not for the meeting.',
  '**Pronunciation.** 🔊 **Track 13.14** Explaining a programme to somebody who is writing it down: **the kind of line first, then the line** — _that one is a schedule ‖ examinations begin at a quarter past eight_ — and the voice drops on the kind and rises slightly on the content. Listen to four and write only the four kinds.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the programmes below and does **not** show it. A reads it once, then explains it: which lines are schedules, which are arrangements, which are intentions, and which line is a hope in the passive. B must find the line that will cost somebody their week. **Then, in two minutes together**, decide the two things the person receiving this programme should do first. You do not have to agree. Change roles with the other programme.'));
out.push(table(['Programme A – a hospital study week', 'Programme B – a shop\'s inventory week'], [
  ['Sessions begin at 08.30 and run to 16.00.', 'Stocktaking takes place from Monday 13 to Friday 17.'],
  ['The lecture theatre is unavailable on Tuesday.', 'The counter closes at 17.00 on Wednesday only.'],
  ['Ward cover is arranged on the attached list.', 'Two staff are assigned to each aisle on the list attached.'],
  ['Night staff are asked to attend where possible.', 'Staff are encouraged to stay on until the count is finished.'],
  ['Certificates are issued within fifteen working days.', 'Figures are reported to the owner on the following Monday.'],
  ['It is intended to repeat the week in the spring.', 'A review of the ordering system will be arranged.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the hope in the passive from each programme — on A it is the night staff line, on B it is the one about staying on — and then write the pair\'s two decisions. In almost every run both pairs decide the same first thing: **ask for a date or a name for the line that has neither.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring, or write out from memory, a programme, agenda, notice or circular you are under. Explain it to your partner **without showing it**: the schedules, the arrangements, the intentions, and the line that will cost somebody their week. They must ask: _who has agreed that?_, _what is the date?_ and _which line has nobody in it?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Umm Kinan brought in the examination-week programme that went up in every staff room on Friday: one page, seven lines, and every teacher in that school will read it once. Line five says staff are asked to make themselves available for cover during the week, and Nour said straight away that it is not a schedule — no time, no name, no number of hours. Umm Kinan said it is a hope in the passive and it is the line that will cost somebody four afternoons, because every year the same four people cover everything: the sentence asks nobody in particular, and the people who answer it are the people who answer everything. What would make it a schedule is a list — "the following staff are covering the following hours" — nine words and a table, twenty minutes of the office\'s time, and then cover is an arrangement instead of a competition in willingness. Lines one, two, four and six are real schedules in the present simple and are not hers to change, and line three is a definition, which she said is the eleventh time this room has taught her that a definitions line decides what a rule means. And line seven is why she brought the page: the department intends to review the order of the third-year scheme after the examinations, and a meeting will be arranged — which is what she asked for in June of last year, written in the two weakest futures in English, with no date, no person, and a passive with nobody in it. She said that in June of last year she would have gone home happy because her words were on a school notice. This year she is going to the office on Monday to ask for one thing: the date. Not the meeting, not the review, not the agenda — the date, because a meeting will be arranged can be true for four years and the meeting is on the twenty-seventh of October is a sentence somebody has to keep. And if they will not give her a date she is going to put her own in: she is bringing the 2026 mark analysis to the November department meeting, which is on the fourth, under any item they like. So I decided to go through the circular I have had since August and find the line in it that has nobody in it._'));
out.push(p('**Listener task:** which line had nobody in it, and what date did somebody decide to ask for?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 5)', 7));
out.push(p('For each question (**1–6**), choose the correct answer **A**, **B**, **C** or **D**.'));
out.push(box(null, [
  '**THE LINE THAT COSTS SOMEBODY THEIR WEEK**',
  'Most notices in a workplace are read once, standing up, by somebody on the way to something else. That is why the **(1)** ______ each line makes matters more than its wording.',
  'A line with a time and a name in it is a schedule, and a reader can **(2)** ______ it. A line that says staff are asked to make themselves available has no time, no name and no number of hours, and it will be **(3)** ______ by the same three or four people every year — the ones who answer everything.',
  'The second line worth finding is the one that **(4)** ______ something you asked for in a tense that commits nobody: it is intended that, a meeting will be arranged, this will be reviewed in due course. Sentences of that shape can be true for years without anybody **(5)** ______ a thing.',
  'The answer is not to object to the wording. It is to ask for a date — and, if no date is forthcoming, to **(6)** ______ one of your own and say so in writing.',
], C.lyellow, C.orange));
[
  '**1**  **A** speech   **B** claim   **C** say   **D** tell',
  '**2**  **A** count   **B** depend   **C** trust   **D** rely',
  '**3**  **A** replied   **B** answered   **C** responded   **D** returned',
  '**4**  **A** writes   **B** puts   **C** records   **D** sets',
  '**5**  **A** making   **B** taking   **C** having   **D** doing',
  '**6**  **A** put   **B** set   **C** place   **D** lay',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message explaining a programme to somebody who is under the same page (60 words or more).'));
out.push(p('The programme came out on ______________. It is ______ lines long and most people will read it once.   **The schedules** — not ours to change — are ______________ and ______________. ______________ begins at ______________ and ______________ is issued within ______________.   **The arrangements** are on ______________, which means somebody has agreed them: ______________.   **The intention** is line ______: ______________. There is no date and no name in it.   **And the line that will cost somebody their week** is line ______: ______________. It has no ______________, no ______________ and no ______________, and the people who answer it are ______________.   **What I am going to do.** I am going to ask for ______________ on ______________. If I do not get it, I am going to ______________, which is on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every line sorted: schedule · arrangement · intention · hope in the passive',
  'The line with no time, no name and no number, named',
  'A date asked for — not a meeting, a review or an agenda',
  'Your own date, if theirs is not forthcoming',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"A notice went up at work in September saying that my department will be reviewed and that staff are asked to make themselves available to help. Everybody has shrugged and gone back to work, but I think something is actually going to happen and I do not want to be the last to know. What should I be looking at? Sam"_',
  '**Your notes:**  •  _Tell him which lines to sort, and into what_  ·  _Explain what a line with no time and no name does_  ·  _Tell him the one thing to ask for, and from whom_  ·  _Give him one example of your own, with a date in it_',
  'Write your email to Sam using **all four** notes. Write **140 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ the committee at ten on the fifteenth — it is in their book.   a) will see   b) am seeing   c) see',
  '2  I ___ ask for the dates. I decided last night.   a) will   b) am going to   c) am',
  '3  Don\'t telephone at six; I ___ the round.   a) will read   b) read   c) will be reading',
  '4  The first bus ___ at 6.40 every morning.   a) is leaving   b) leaves   c) will leave',
  '5  That bag looks heavy — I ___ it for you.   a) am going to carry   b) carry   c) will carry',
  '6  When I ___ , I will telephone you.   a) will arrive   b) arrive   c) am arriving',
  '7  I am going to ___ him once more, in writing.   a) asking   b) ask   c) can ask',
  '8  This time next year I ___ Book 2.   a) will be finishing   b) will finish   c) finish',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 13.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  What has the speaker arranged?   **A** two days a month   **B** a new post   **C** a day off',
  '**2**  What is the speaker going to ask for?   **A** a name   **B** a specification   **C** compensation',
  '**3**  What will the speaker be doing at ten?   **A** arguing   **B** reading a paragraph aloud   **C** waiting outside',
  '**4**  What does the speaker say about the printed timetable?   **A** it is twenty minutes wrong   **B** it has been reprinted   **C** nobody uses the line',
  '**5**  Which line of the programme is the speaker talking about?   **A** a schedule   **B** a definition   **C** a hope with nobody in it',
  '**6**  What is missing from the itinerary?   **A** the times   **B** what to do if nobody is there   **C** the address',
  '**7**  What has the speaker decided to do?   **A** ask for a date   **B** write a complaint   **C** wait until November',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['1  Man', 'It starts this month and it runs until next August. The third Tuesday and the Wednesday after it, in writing, and the first dates they offered me were the Mondays and I said no, because I am in a class on Mondays and Thursdays until June. It is not the post and it is not a title, and it is in writing.'],
  ['2  Man', 'If you ask for a name you get nothing, because the person reading has to decide to give you a colleague. So I am going to ask for the adhesive specification for that model in the January-to-March batch, and attach the fifteen dates, because that is a question with one answer and no blame in it — and the answer comes with a name at the bottom of it.'],
  ['3  Woman', 'At ten I will be sitting in front of four of them, and at five past I will be reading the second paragraph out loud, which is the one about the trolley. Three months ago I would have been arguing, and I would have been right, and it would have cost me the trial.'],
  ['4  Man', 'It says first departure six forty and the first bus leaves at six twenty, and it has said six forty since 2019. The passengers who know, know. The ones standing there at twenty to seven having missed it are the ones who do not use the line often, which is to say the ones who most need it.'],
  ['5  Woman', 'There is no time in it, there is no name in it, and there is no number of hours in it. Every year the same four people cover everything, because the sentence asks nobody in particular and the people who answer it are the people who answer everything.'],
  ['6  Woman', 'The times are all there and the address is at the top. What is not there is what I do at ten to nine if you are not at the gate — and the gate is not the door, and the door is locked, and I would have been standing in a street in a city I do not live in.'],
  ['7  Woman', 'Not the meeting, not the review and not the agenda. The date. Because "a meeting will be arranged" is a sentence that can be true for four years, and "the meeting is on the twenty-seventh of October" is a sentence somebody has to keep.'],
]));
out.push(p('**C  Writing.** Write the itinerary for one real day (140+ words) that somebody else could follow instead of you: warnings numbered at the top, every line with a time, a place to stand, a person and a fallback, the intentions marked, and what happens if the whole day falls through.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what is arranged, with a day and a person who knows',
  '☐ say what I intend, with a first step, a date and a fallback',
  '☐ say what I will be doing — and not doing — at a given moment',
  '☐ choose between the four futures on purpose, and say what each one claims',
  '☐ state a real schedule in the present simple, and say who owns the page',
  '☐ write an itinerary somebody else could follow, with the warnings at the top',
  '☐ sort a programme into schedules, arrangements, intentions and hopes',
  '☐ find the line that has no time, no name and no number in it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 14 – PREDICTIONS AND PROBABILITY', [
  '_will · won\'t · may · might · could · be likely to · there\'s a chance that · probably · by then._ Unit 13 was about what is settled. **Unit 14** is about what is not, and how to say how likely you think it is without pretending to know.',
  '**14.6 writes a forecast** — a projection with its assumptions stated — and **14.7** takes one apart and asks how far to trust it. Rasha\'s September report is read in 14.7 by people who were not in the room, and the question is whether a committee can tell the difference between a number and a guess.',
  '**Bring:** one prediction you have made out loud this year that turned out to be wrong, and one you have not tested yet. And bring a forecast somebody else has written — a budget, a projection, a schedule of works, a weather page, anything with a number about the future in it.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
