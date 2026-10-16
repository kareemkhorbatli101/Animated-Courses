// Proactive English B1 · Syria Edition · Book 1 · Unit 3 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 3  Looking Back Further — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**This is the unit the whole of A2 was waiting for.** Twenty-four A2 units and the first two units of this book contain no past perfect at all. That was planned, it has been held through four volumes, and it is the reason 3.1 works: the class is not revising a tense they half-know, they are being handed one. Say so out loud in 3.1 — _you have never been given this_ — because the surprise is doing teaching work.',
  '**Teach restraint from the first minute.** The commonest result of a past perfect lesson is a class that puts _had_ in front of everything for a fortnight. Two of the eight checklist lines in this unit, three of the ⚠ lines in 3.1, and the whole of Stage 7P are about **taking it out again**. Do not skip them to save time; they are the lesson.',
  '**The timeline on the wall is physical.** Put a long sheet of paper down one side of the room in 3.1 and add to it in every cycle. 3.7 does not work without it — Lubna\'s explanation is of a thing the class can see.',
  '**3.6 closes a device opened in Unit 1.** Yara said four sentences in 1.1 and said there was more. If your class does not have a Yara, give the page to whoever said least in week one, privately, a lesson in advance.',
], C.lblue, C.navy));

// ===================== 3.1 =====================
out.push(pb());
out.push(h2('3.1  What had already happened'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Write the six sentences **exactly** as the students wrote them, mistakes and all, and do not correct any of them yet. Five of the six will be in the past simple and that is what the cycle needs: the board is the problem, not the model.'));
out.push(A('**b** **1** _she left_ — second (I arrived, then she left).   **2** _she had left_ — first (she was already gone).   **3** _the bus went_ — at the same time as, or just after, my arriving.   **4** _the bus had gone_ — first.'));
out.push(A('Items 1 and 2 differ by one word and reverse the order of events. Read them aloud twice and let somebody say "so _had_ means before" — it is worth more from a student than from you, and it takes about forty seconds.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the past perfect.'));
out.push(A('**b** **1** Because at A2 they had enough to carry, and a tense that only exists to put a second past behind the first one is no use to somebody still deciding between _went_ and _have gone_.   **2** That it is not one sentence — it is two sentences written as one: what happened, and what was already true when it happened.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _I got to the stop. The bus **had gone**._ / _By the time I got to the stop the bus had gone._   **2** _She rang. I **had** already **left**._   **3** _We arrived. They **had eaten**._   **4** _He said sorry. I **had been waiting** an hour._ (or _had waited_)   **5** _The machine stopped. Nobody **had checked** it that morning._'));
out.push(NOTE('Item 4 is the first past perfect **continuous** in the series and nobody has been taught it. Accept _had waited_ and write _had been waiting_ next to it on the board without naming it; it is formally introduced in Unit 4 beside the present perfect continuous. If a student asks, say "next week" and mean it.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I got to the stop / the bus go.',
  '**B:** When I got to the stop, the bus had gone.',
  '**A:** Which half is the story?',
  '**B:** Getting to the stop. The bus going was already true when it happened.',
  '**A:** Does it need the past perfect?',
  '**B:** Yes, because nothing else in the sentence tells you which came first.',
  '_(last line of the card)_  **A:** I got up, had breakfast and left.',
  '**B:** That needs no past perfect at all, because _and_ in a list like that already means _then_.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The two that need no past perfect are the **last line of each card**: _I got up, had breakfast and left_ and _he came in, sat down and said nothing_. In both, the order is carried by the list itself. This is the restraint half of the lesson and it is deliberately hidden at the bottom of the card.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My Unit 2 story was the Baramkeh garage. The thing that was already true before the scene began is that the Latakia bus had been cancelled in the office twenty minutes before anybody on that pavement was told._',
  '**b** _It is better with it in, and it goes in late — after the man comes out and says it, not before. If I put it at the top the reader knows more than the forty people do and the waiting stops being waiting._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda put six sentences on the board and said five of them were in the wrong tense — not wrong English, wrong tense for what was being told. Bassel\'s said the driver was in Kilis since Sunday, and she asked when he found out. He said Tuesday morning, so by Tuesday morning the being-in-Kilis was already four days old: his sentence put it on the same shelf as the telephone call when it belongs on the shelf behind it. Then she said the thing nobody expected — that we have been in this building for two years and have never once been given this tense. Omar said he thought he had missed a lesson. She said she kept it back, because at A2 we had enough to carry and a tense that exists only to put a second past behind the first is no use to somebody still deciding between went and have gone. And Bassel looked at the board and said his sentence is not one sentence; it is two written as one. There is what happened, and there is what was already true when it happened, and he has been putting both of them in the same tense for forty-one years.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I had went. → ✓ I **had gone**.   ✗ When I arrived she had left and then she had gone to the shop. → ✓ …she **had left**, and she **went** to the shop. _(one step back is enough)_   ✗ I had gone to Aleppo in 2019. _(nothing else on the page)_ → ✓ I **went** to Aleppo in 2019.   ✗ He had been in Kilis since Sunday, and I had rung him, and I had told the manager. → ✓ one _had_, then past simple.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** None. Not one fact is different between the two versions — that is the point of the exercise and students look for a difference in content first.'));
out.push(A('**2** _the driver had been sitting in Kilis since the Sunday_ and _the roller had taken four hundred sheets_. What they have in common: both were **already finished before he found out about them**.'));
out.push(A('**3** _Was it already over by the time I found out?_ If yes, step it back.'));
out.push(NOTE('Bassel\'s test is better than any rule in the Language box and it is worth writing on the wall. It also quietly explains why a page should have two or three past perfects and not twelve: only two or three things in most mornings are over before you hear about them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The man came out and said the Latakia bus was cancelled, so forty people started talking at once. When I got to the window, the four o\'clock had already been full since the morning — they had sold those seats on the Wednesday — and nobody at the desk had thought to say so to a pavement full of people. While he was explaining that to me, two of the women behind me left for the service taxis. I stayed. By the time I got outside, the first taxi had gone and my sister had been standing at the Latakia garage for an hour and a half.',
]));
out.push(S('Stage 7 · Write freely (sample, 151 words)'));
out.push(SAMPLE([
  'It was the third of August and it was thirty-nine degrees at nine in the morning. We were at the Baramkeh garage and the Latakia bus was standing in full sun with its doors shut and its driver nowhere.',
  'About forty of us were waiting in a line that was not a line. An old man in front of me was holding his ticket in both hands. I was counting the people in front of me and recounting them.',
  'Then a man in a company shirt came out and said the bus was cancelled.',
  'What none of us knew, standing there, was that it had been cancelled in an office at twenty past eight. It had been cancelled before the old man arrived with his ticket in both hands. Somebody had taken the decision, written it down and gone back to work, and the forty of us had stood in thirty-nine degrees for forty minutes in front of a bus that was never going anywhere.',
  'I rang my sister. She had already left for the garage in Latakia.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"It had been cancelled before the old man arrived with his ticket in both hands." That one._   ✓ _"Somebody had taken the decision, written it down and gone back to work" — the second and third are fine in the past simple once you have stepped back once._   ? _Was it really already over when you found out — or did you only learn it later?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Expect one or two stories to be worse. The reason is always the same: six past perfects instead of two, which flattens the page into an explanation and removes the reader\'s surprise. Say that out loud, hold the two versions up, and do not make anybody rewrite it a third time this evening.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I wrote something two years ago about the day I left the school in Jaramana. The sentence I have put in is this: _By the time I handed in the letter, the head had already appointed somebody else._ What it changed is the whole thing. Before, it read as a brave decision that cost me a job. With that one sentence in it, it reads as a decision that cost me nothing, because the job had gone a fortnight earlier and I did not know. I liked the first version better and the second version is true.']));

// ===================== 3.2 =====================
out.push(pb());
out.push(h2('3.2  Because nobody had checked it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Use small, dull disasters — _the lift stopped · the bread was finished · the class was locked out · the water went off_ — and insist on **already true**: _because nobody had ordered any at six_ beats _because the baker was lazy_, which is a judgement, not a cause.'));
out.push(A('**b** Reason: **1**, **3**. Just an earlier (or later) event: **2** — the checking came **after**; **4** — two facts side by side with no reason claimed.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a sample was lost. _(Accept "a batch".)_ Not A: the incubator worked perfectly, which is the whole point of the track.'));
out.push(A('**b** **1** The seal had been splitting since about Monday; somebody had reported it in February and the report had gone to a man who left in March; and she had put the Thursday batch in the second door because the first was full of finished work that had never been taken out.   **2** That "the incubator failed" is four words and **a lie made of true words**.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The machine stopped because nobody had checked the oil since Thursday._',
  '**2** _We missed the train because the road had been closed since six and nobody had put it on the radio._',
  '**3** _The order went to the wrong address because the customer had changed it in March and nobody had changed it on the system._',
  '**4** _Nobody came to the meeting because the time had been moved twice and the second message had gone to eleven people out of thirty._',
  '**5** _The food was cold because the delivery had been sitting on the step for half an hour before anybody heard the bell._',
]));
out.push(A('All five have the same shape and it is worth naming: **somebody already knew, or something was already written, and the chain stopped there.** Ask which of the five could have been prevented by a telephone call; it is usually four.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The machine stopped.',
  '**B:** It happened because nobody had checked the oil since the Thursday before.',
  '**A:** And the other reason?',
  '**B:** And because the man who checks it was on the other floor at the time.',
  '**A:** Which is the real reason?',
  '**B:** The first one, because it was already true when the machine stopped. Where he was standing only matters in the three minutes afterwards.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The already-true reasons, one per failure. The ones preventable by somebody reading something already written down are typically the delivery to the wrong address, the meeting nobody came to, and the unanswered letter — three of eight, and more if the class is honest about the machine.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The fire alarm went off in the building in February and nobody moved, because it had gone off four times in January for nothing and somebody had told the caretaker to turn the volume down. Everybody on my floor knew about the four times. Nobody had written any of them down._',
  '**b** _Whose fault: the person who told him to turn it down, and I do not know who that was. Whose decision: mine, on the day, to go on marking — I heard it and I sat there._',
]));
out.push(NOTE('The fault/decision split in **b** is the pastoral heart of the unit and it does real work with adults who manage other people. Hold it to two sentences each. Left open it becomes a twenty-minute argument about blame, which is a different lesson and not this one.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara says everybody calls it an incubator failure and the incubator did not fail. Three things were already true before she came in that morning. The seal on the second door had been splitting since about Monday and you could see it. Somebody had reported it in February and the report had gone to a man who left in March, so it was in writing and the writing was in the drawer of somebody who does not work there. And the third is hers: she had put the Thursday batch in the second door, and she had put it there because the first door was full of somebody else\'s finished work that had never been taken out. Rasha said that is not her fault. Yara said it is not her fault and it is her decision, and those are different — she chose the second door, she knew about the seal, and everybody knew about the seal. She first wrote "the incubator failed", which she calls four words and a lie made of true words, because the machine held exactly the temperature it had been told to hold with a door that would not shut. She changed it on the Monday to four sentences. Nobody has said anything to her about it and the seal was replaced on the Wednesday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ because nobody didn\'t check it → ✓ because nobody **had checked** it.   ✗ I chose that door because the first one had been full. _(simultaneous)_ → ✓ because the first one **was** full.   ✗ It stopped because nobody checked it afterwards. → ✓ _afterwards_ cannot be a reason.   ✗ The incubator failed. → ✓ _The door did not close, on a seal that had been splitting for eleven days._'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the incubator held its temperature correctly throughout, with no variation — that is, that the machine did not fail.'));
out.push(A('**2** Since at least Monday 8 April — and it had been reported on 14 February by a member of staff who has since left.'));
out.push(A('**3** She asks that a report sent to a **post** rather than to a person should come back to the sender after fourteen days if that post is empty. She says no new rule is needed for anything else in the entry: _it needs somebody to read what was already written._'));
out.push(A('Answer 3 is the model for every complaint any student will ever write. One change, the smallest available, and an explicit line saying what is **not** being asked for. Point out that this is also why it worked: a request that costs nothing is a request that can be granted by somebody who has no authority to grant anything.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FIRE ALARM · BUILDING 3** · R. Barakat',
  '**What was written on the day.** "False alarm, 14.20. No action."',
  '**What actually happened.** The alarm sounded at 14.20 on 6 February and twenty-two people on the second floor stayed where they were for eleven minutes. The alarm was working; the test record is attached and shows it sounded at the correct volume.',
  'The alarm had gone off four times in January with no fire. On 19 January somebody had asked the caretaker to reduce the volume, and he had done it, and no record was made of the request or of the change.',
  'I was in Room 9. I heard it. I went on working for eleven minutes.',
  '**What I would like changed, and it is small.** Any change to the volume of an alarm is written in the log on the day it is made. Nothing else here needs a new rule; it needs the four January alarms to have been written down in January.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**WARD 4 · THE SECOND TROLLEY** · R. Barakat, night sister',
  '**What was written on the day.** "Delay in medication round, 02.40. Staffing."',
  '**What actually happened.** The 02.00 round on Ward 4 was finished at 03.25 on 11 March. It was recorded as a staffing delay and it was not one; we were two, as we are every night, and two is what the round is written for.',
  'The second trolley had been out of use since 2 February, which is five weeks. It had been taken to the workshop with a broken wheel and it had not come back, and it had not been chased because there is no form for chasing a trolley. The ward had therefore been running one trolley for a five-bay unit for five weeks, and every round in those five weeks had taken between fifty and eighty minutes longer than it is written for.',
  'I did not report any of the thirty-four previous rounds. I wrote "staffing" on nineteen of them.',
  '**What I would like changed, and it is small.** When equipment goes to the workshop, the ward keeps a line with a date on it. Nothing else needs a new rule. Somebody needs to be able to see five weeks.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"every round in those five weeks had taken between fifty and eighty minutes longer than it is written for" — that is the line I would act on._   ✓ _"it had not been chased" has no date against it; when did somebody last ask?_   ? _What is the sentence that is yours?_ — you have one, and it is the nineteen.'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the hands. In a working adult class it is between half and two thirds, and the number is the most useful thing the cycle produces: it is an argument for writing things down that nobody has had to make.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'The second fire door on the stairs between the first and second floors has not closed since at least October. It stands about eight centimetres open and you can push it shut with your foot, and it opens again.',
  'Everybody who uses those stairs knows. I have heard four people mention it, including a porter who said it has been like that since before he started, which was in the summer.',
  'It has never been in the maintenance book, because the maintenance book is for things that are reported and nobody has reported it.',
  'Today is 14 April. I am going to hand this in on Thursday, and I have put the date on it so that whoever reads it knows how long I waited as well as how long they did.',
]));

// ===================== 3.3 =====================
out.push(pb());
out.push(h2('3.3  By the time I got there'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Two sentences each, one _had_ and one _still hadn\'t_, and keep the pace fast — ten seconds a student. The pattern is being installed, not discussed.'));
out.push(A('**b** **1** _already_   **2** _still_   **3** _never_   **4** _already_ (or nothing — _by six o\'clock we had finished_ is correct and some students will say so; they are right).'));
out.push(NOTE('Item 2 is the one to slow down on: _still hadn\'t_, not ~~hadn\'t still~~. It is the only word-order mistake in this cycle that survives into B2 if it is not caught here, and there is no reason for it beyond habit.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – what he had done by nineteen.'));
out.push(A('**b** **1** He had built four computers out of other people\'s broken ones, had taught himself to read documentation in English, and had answered about six hundred questions on a forum. _(And what he had **not** done: spoken English out loud to anybody.)_   **2** That the list is **not nothing** — she is forty-eight and by his age she had done one thing.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _By the time I was eighteen I had left two schools and I still hadn\'t sat an examination I cared about._',
  '**2** _By the time I left that job I had trained nine people and I still hadn\'t asked for the money they owed me._',
  '**3** _By the time I got to Damascus I had lived in three cities and I still hadn\'t slept one night alone in any of them._',
  '**4** _By six o\'clock yesterday I had marked twenty-two books and I still hadn\'t eaten anything._',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** By the time you left school?',
  '**B:** By then I had taught myself to read documentation in English.',
  '**A:** How long?',
  '**B:** About two years, every evening.',
  '**A:** And what had you not done?',
  '**B:** By then I still hadn\'t spoken a sentence of it out loud. I had never said a word of it to a stranger before this September.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Collect the **numbers**: four computers, six hundred and something, two years, a million words, forty-eight, nineteen. Then the diagnostic question: which answers had no number in them? Those are the ones that were being generalised, and they are usually the ones the student is least comfortable with.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_By the time I finished A2 in this centre I had come to twenty-two of the twenty-four units, I had written about four thousand words of English, I had read one whole book in English — a short one, for children, and it took five weeks — and I had learnt the names of eleven people I would not otherwise have met. What I still hadn\'t done was speak to anybody outside this building._',
  '**b** _It sounded like nothing while I was saying it, because the book was for children and the eleven people are in this room. It does not sound like nothing now, because four thousand words is four thousand words and two years ago it was none._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Jad what he had done by the time he left school and he said nothing, he was eighteen. She told him to try again and count. By the time he left school he had built four computers out of other people\'s broken ones, he had taught himself to read documentation in English, which nobody asked him to do, and he had answered about six hundred questions on a forum where everybody thought he was older — six hundred and something, and he says it is on the site and you can count them. What he had not done, by the time he left school, was speak English out loud to anybody. Not once. He had read about a million words of it and had never said a sentence. Umm Kinan said that list is not nothing and that he had said "nothing" thirty seconds earlier. He said it feels like nothing because it is all the same thing — it is a boy in a room. And she said she is forty-eight, and by his age she had done one thing: she had passed an examination. His list has four items on it and he is nineteen, and she asked him to say "nothing" again and listen to himself while he did it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ By the time I had got there, it started. → ✓ By the time I **got** there, it **had started**.   ✗ hadn\'t still been → ✓ **still hadn\'t** been.   ✗ We had finished until six. → ✓ We had finished **by** six. / We worked **until** six.   ✗ I had never before spoken it. → ✓ I had never spoken it **before that day**. _(before goes with the point, not with the verb)_'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four working computers (ages fourteen to seventeen); reading technical documentation in English, about two years; six hundred and forty-one forum answers; and teaching his mother three things on her telephone. The **last** one took longest — longer than the computers — and it is the one he would not have counted.'));
out.push(A('**2** That asking for help was the thing he did not do. He decided it at about fifteen.'));
out.push(A('**3** It is the only item with another person in it, and it is the one he nearly did not write.'));
out.push(NOTE('The structure of this page is worth naming for the class: four items, and the fourth is the real one. Students who write three strong items and stop are not finished. Ask for a fourth from everybody, always, and take the fourth as the answer.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BY THE TIME I WAS TWENTY-SIX** · Y. Mansour',
  '**What I had done.** I had worked in a pharmacy in Suwayda for five years, between twenty-one and twenty-six. I had read English every single day since I was eleven, which took about half an hour an evening and which nobody in my family knew about. I had passed two sets of professional examinations. And I had kept a notebook of words I did not know, which by then had about nine hundred in it and which I have never shown anybody.',
  '**What I still hadn\'t done.** I had never spoken English to a stranger. I had never lived anywhere but my mother\'s house, because I had decided at about twenty that leaving would be a thing I did to her rather than for me.',
  '**Why it felt like nothing.** Because all of it was quiet and none of it had a certificate on it except the examinations.',
  '**What I notice now.** Nine hundred words is three a week for six years and I called it nothing.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**BY THE TIME I WAS FORTY-ONE** · Bassel Tahhan, written at the kitchen table',
  'I had been a printer for twenty-three years. By the time I was forty-one I had printed, at a rough and honest count, about four million sheets, and I had learnt three machines well enough to hear what is wrong with them from the next room. I had trained eleven men and two of them now run their own places. And I had kept the business open through four years in which I paid everybody before I paid myself, which my wife knew and nobody else did.',
  '**What I still hadn\'t done.** I had never written a letter in English, although I had read hundreds of them. I had never once asked a supplier for better terms, because I had decided somewhere in my twenties that asking was a kind of begging, and I have carried that for twenty years without ever looking at it.',
  '**Why it felt like nothing.** Because sheets of paper are not a thing anybody counts and because the eleven men are other people\'s success.',
  '**What I notice now.** The only item on that list I am proud of is the four years, and it is the one that is nobody\'s business.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"four years in which I paid everybody before I paid myself" — I would not have counted that either and it is the biggest thing on the page._   ✓ _"I had read hundreds of them" — hundreds is not a number; how many is a week?_   ? _What did you decide, and at what age?_ — you say "somewhere in my twenties", which is the one vague date on a page of exact ones.'));
out.push(S('Stage 7R · Share'));
out.push(A('Read only the _still hadn\'t_ lines. Nearly all of them are about **speaking, asking or being seen** — not about ability, qualifications or money. Say the number out loud. It is the fourth week of a B1 course and it tells the class what the next nine units are actually for.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '**BY THE TIME I FINISH THIS COURSE** · J. Attar · written 14 April, to be opened in Unit 12',
  'By the time I finish this course I will have spoken English out loud to at least four people who are not in this room. I have never done it once, so four is not a small number for me and I have chosen it because it is not one.',
  'I will have asked somebody for help with something technical, in English, in writing, on the forum where everybody thinks I am older. I will have said that I am nineteen.',
  'I will have written one page about myself that has another person in it, like the fourth item.',
  'What I think I will still not have done: telephoned anybody. I am writing that down so that whoever reads this in Unit 12 can see whether I was right.',
]));

// ===================== 3.4 =====================
out.push(pb());
out.push(h2('3.4  No — she had already gone'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Put two errors of **order** in your account, not two errors of fact — somebody left before somebody arrived, a letter was sent after a reply came — because an error of fact is corrected with a noun and an error of order needs the tense.'));
out.push(A('**b** **1** _Actually, I think that may be the other way round._   **2** _Actually, she had already left._   **3** _I think the order may be the other way round._   **4** _Actually, what happened was…_ / _In fact, by then…_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the order of events.'));
out.push(A('**b** **1** That Mr Khaled came in, saw the figures and told Lina to write to Türkiye herself.   **2** She had already written the letter — on the Tuesday evening at home, shown to nobody, and it had been sitting in her drafts for two days.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Actually, by the time he said anything I had already written it._',
  '**2** _Actually, she had arrived before I left — we were in the room together for about ten minutes._',
  '**3** _In fact they had paid two days before the delivery came._',
  '**4** _Actually, she had found out on the Sunday. The Monday was when she told us._',
]));
out.push(A('Each one needs **actually** or **in fact**, a past perfect, and nothing else: no "you are wrong", no explanation of why the other person got it wrong. Students add the explanation and it is what turns a correction into an argument.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** So Mr Khaled told Lina to write to Türkiye.',
  '**B:** Actually, by then she had already written it.',
  '**A:** Does that matter?',
  '**B:** It does, because in your version somebody pushed her, and in what happened she had already decided and was waiting for permission.',
  '**A:** I have been telling it wrong.',
  '**B:** Everybody has. She let us.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('What each correction **changes**: in the Lina card and the Jad card the person moves from being pushed to having decided; in the midwife card the opposite happens — she was waiting to be asked, so Tareq moves from having been rescued to having asked. Two of three move from pushed to decided, and that is worth naming: it is the commonest thing a wrong order does to a person.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The story told about me at home is that my brother persuaded me to apply for the course. Actually I had applied in the February and had been waiting three weeks for an answer when he first mentioned it. He thinks he persuaded me. He told the story at Eid and I let him._',
  '**b** _I have let it stand for a year, because his version makes him useful to me and mine makes him unnecessary, and he is my brother._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samira said Mr Khaled came in, saw the figures and told Lina to write to Türkiye herself. Lina says the facts are all right and the order is wrong, which makes it a different story about her. By the time he came in she had already written the letter — on the Tuesday evening, at home — and she had not shown it to anybody; it had been sitting in her drafts for two days. He did not tell her to write it. He asked how the account was going, she said she had written to them and not sent it, and he said "then send it". Omar asked why she had let the wrong version stand for six months and she said because the other way is easier to be in: if he pushed her then it is his, and if she had already done it then it is hers. Samira said she would correct it every time she heard it, and Lina said no — she will.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ That is not true. → ✓ **Actually**, by then…   ✗ You are wrong, she had gone. → ✓ I think that may be the other way round — she **had** gone by then.   ✗ Actually she has already gone. → ✓ she **had** already gone _(we are in a past story)_   ✗ No! → ✓ _No_ on its own is much harder in English than the Arabic habit makes it feel. Use _actually_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Two days — she had written it on the Tuesday evening and he came in on the Thursday.'));
out.push(A('**2** He asked how the account was going. She said, "I have written to them and I have not sent it." _(And he said, "Then send it.")_'));
out.push(A('**3** Nothing. _His version costs me nothing_ — that is why she has let it stand, and the cost is hers: it takes the courage away from her and leaves her the fear.'));
out.push(NOTE('Answer 3 is subtle and worth two minutes. She does not say his version is unkind or untrue — she says it is cheap, and that she has been living in it because it is comfortable. Students who have written a correction that is an accusation will see the difference immediately, and it is why the Stage 7P slip asks for exactly that.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHO APPLIED** · for nobody',
  'The story that is told about me is that my brother talked me into applying for this course. Everybody who tells it means it kindly, and he means it kindliest of all.',
  'Here is the order it actually happened in. By the twelfth of February I had found the centre and I had read everything on the noticeboard twice. By the fifteenth I had filled in the form and sent it, and I had not told one person in my family. By the eighth of March I had been waiting three weeks for an answer and had begun to think I would not get one.',
  'He did not talk me into it. He said, over lunch on the ninth, "You should do something about your English." I said, "I have applied." He said, "Oh."',
  '**Why the order matters.** In the version that is told, a sister needed a push. In the order it happened, she had already jumped and was waiting in mid-air to hear whether anybody had caught her.',
  '**Why I have not corrected it.** Because his version gives him something to have done for me, and he has not had much to do for anybody this year.',
]));
out.push(S('Stage 7 · Write freely (sample, 169 words)'));
out.push(SAMPLE([
  '**THE ORDER OF THE SHOP** · Mazen Hariri',
  'The story in my family is that my uncle set me up in the counter in Shaalan in 2016 — that he found the place, lent me the money and got me started. He has told it at every family gathering for nine years. He believes it and most of it is true.',
  'Here is the order it happened in. By the March of that year I had been repairing telephones on a table in my own room for two years. By the June I had saved eleven months of rent, in cash, in a box, and I had been to see four places and been refused by three of them. By the time I spoke to my uncle I had already agreed the fourth with its owner and I needed somebody to stand as a guarantor, which took him twenty minutes and cost him nothing.',
  'He did not lend me money. He signed a paper.',
  '**Why the order matters.** In his version I was a boy who was given a shop. In the order it happened, I was a man who had got a shop and needed a signature.',
  '**Why I have not corrected it.** Because it is the only story in which my uncle is the one who did the right thing, and the rest of that year he was not.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I had saved eleven months of rent, in cash, in a box" — that rung, and the three refusals._   ✓ _"which took him twenty minutes and cost him nothing" is where the correction becomes an accusation; the dates have already said it._   ? _Are you going to correct it, or is this the correction?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Not many hands, and that is the honest result. Read three last paragraphs instead of arguing: a wrong story that is doing something for somebody is not corrected by a grammar lesson, and saying so is more use than pretending otherwise.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I corrected it, to my brother, on the telephone, on Friday evening. I said the facts were all right and the order was wrong, and that I had applied three weeks before he said anything. There was a pause of about four seconds — I counted it, because of this unit — and then he said, "Are you sure?" and I said yes and offered to show him the date on the message. He said he did not need to see it. He did not say sorry and I did not want one; he said "well, then you did it", which is what I wanted and which I could not have asked for. He told the story the old way again on Sunday, to my aunt. I am going to correct it again on Sunday.']));

// ===================== 3.5 =====================
out.push(pb());
out.push(h2('3.5  The order it happened in'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Read the six events in a deliberately unhelpful order — the last one first — and then insist on **three** sentences. The reduction from six to three is the exercise; the ordering is the warm-up for it.'));
out.push(A('**b** **1** _The batch was lost on 9 April. It had been reported on 14 February._   **2** _She put it in the second door on the Thursday because the first had been full since the Tuesday._   **3** _When he rang on the Tuesday, he had been in Kilis since the Sunday._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a timeline on the wall.'));
out.push(A('**b** **1** That eleven telephones of the same model with the same fault had all been bought from the same two shops and all been sold between January and March — a bad batch. He had the information in a book for four months and did not have it in his head.   **2** It is **not a record** — the record was already in the book. It is for **seeing a shape that was already there**.'));
out.push(NOTE('Ms Huda\'s definition is the most portable idea in the unit and it transfers straight to work: the reason to make a timeline is never to write things down, because they are already written down. It is to put them in a line so that eleven things become one thing.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The batch was lost on the Saturday. The seal had been splitting since the Monday._',
  '**2** _The man left in the March. The report had been sent to his post in the February._',
  '**3** _By December I had recorded the same fault eleven times. The first one had come in on 3 September._',
  '**4** _Mr Khaled came in on the Thursday. The letter had been written on the Tuesday evening._',
]));
out.push(S('Stage 3 · Practise (sample – Card A, first set)'));
out.push(SAMPLE([
  '**A:** 8 April seal splitting · 14 February reported · March man leaves · 13 April batch lost.',
  '**B:** The batch was lost on the thirteenth of April. The seal had been splitting since the eighth and had been reported on the fourteenth of February, and the man it was reported to had left in the March. So by the thirteenth the report had been in an empty drawer for two months.',
  '**A:** Anything added?',
  '**B:** No — the last sentence only joins what is in the notes. I have not said why anybody did anything.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The commonest addition is **a reason that is not in the notes** — a _because_, a _so_, or the word _ignored_. Dates do not contain motives. When somebody adds one, ask which note it came from; the silence is the lesson and it is thirty seconds long.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My register. 3 October, she misses a Monday. 10 October, she misses the Thursday after the first test. 24 October, her name is still on my register and I have not rung her. 2 November, I take her off._',
  '**b** _The shape was a surprise and the information had been in my hand for five weeks. The shape is that she stopped coming after the first test and I wrote her name twenty-one times without reading it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Mazen to put his fault book on the wall and he said it is a list of telephone faults and there is nothing on the wall in it. She asked for the first four entries with their dates: the third of September, one model, screen; the ninth, same model, same screen; the fourteenth, same again — and by the end of September he had written that model down eleven times. Eleven in four weeks. The thing he says he did not see until he wrote them in a line is that all eleven had been bought from the same two shops and all eleven had been sold between January and March. He had the information in a book for four months and he did not have it in his head. Ms Huda said that is what a timeline is for: it is not a record, because the record was already in the book — it is for seeing a shape that was already there. Mazen says the shape is that somebody sold a bad batch in this city in the winter, and he has been mending them one at a time for nine months and charging people for it. He has written to the two shops — not angry, a list: eleven dates, one model, one fault. He sent it on the Monday, he has had nothing back, he would be surprised if he does, and he is going to send the next eleven when he has them.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ on 14/2 _(in running text)_ → ✓ on **14 February**, said _the fourteenth of February_.   ✗ First this happened, then this, then this. → ✓ later thing first, earlier things stepped back.   ✗ It was reported on 14 February and it had been lost on 9 April. → ✓ the perfect goes on the **earlier** half.   ✗ September the third → ✓ **the third of September** _(British, spoken)_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He is **not** making a complaint and **not** asking them for anything.'));
out.push(A('**2** Nine of the eleven had been carried in a case — so the fault is not how people are treating the telephones. It removes the explanation the shops would otherwise reach for first.'));
out.push(A('**3** He will send the next eleven with the same information if it is useful; and if it is not useful, they can tell him and he will stop.'));
out.push(A('The nine-out-of-eleven sentence is the whole letter and it is worth saying why. He has anticipated the one answer that would close the matter and has taken it away with a number, before anybody reaches for it. That is a skill, it is not grammar, and it is the kind of thing a coursebook can teach once and a student can use for thirty years.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of maintenance, Building 3',
  '**Subject:** The second fire door, October to April',
  'Dear Sir,',
  'I teach in Room 9. I am not making a complaint and I am not asking you for anything. I am sending you a list, because I think you have the same information in a different form and have not put it in a line.',
  'Between 2 October and 11 April I noted the second fire door on the first-floor stairs standing open seven times. The dates were 2 and 19 October, 6 November, 14 January, 3 and 27 February, and 11 April.',
  'All seven had been reported to me verbally by somebody else before I wrote them down. None of the seven had ever appeared in the maintenance book. The door had been like that before I started, according to the porter, which takes it back to the summer.',
  'I am not able to say what is wrong with the door. You are in a position to know whether it has ever been looked at, and I am not.',
  'If it is useful I will keep the list and send it again in October. If it is not, tell me and I will stop.',
  'Yours faithfully, S. Dibo',
]));
out.push(S('Stage 7 · Write freely (sample, 192 words)'));
out.push(SAMPLE([
  '**To:** the ward manager, copy to the workshop',
  '**Subject:** Medication rounds on Ward 4, 2 February to 11 March',
  'Dear Madam,',
  'I am the night sister on Ward 4. I am not making a complaint about anybody and I am not asking for more staff. I am sending you a list, because the information is already in the round book and it has not been put in a line.',
  'Between 2 February and 11 March the 02.00 round finished late thirty-four times out of thirty-four. The times were between fifty and eighty minutes over, and the average was sixty-three.',
  'The second trolley had gone to the workshop on 2 February with a broken wheel and had not come back. The ward had been running one trolley for a five-bay unit for five weeks. Nineteen of the thirty-four rounds had been recorded by me as "staffing", which was wrong, and I wrote it because there is a box for it.',
  'I am not able to say where the trolley is. You are in a position to find out, and I am not.',
  'If it is useful I will send the February and March book up with this. If it is not useful, tell me and I will stop sending it and go on writing "staffing".',
  'Yours faithfully, R. Barakat',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"thirty-four times out of thirty-four" — that would make me look it up before lunch._   ✓ _"which was wrong, and I wrote it because there is a box for it" — you have drawn the conclusion for me; the nineteen does it on its own._   ? _How long had you had this information before you put it in a line?_ — five weeks, and the letter does not say so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost every hand. Collect the three longest and expect at least one to be in years; a register, a repair book, a rent book or a diary is in most of these rooms. The longest one in the room is the single most persuasive argument for the cycle and it costs ninety seconds.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  'Four entries from my rent book: January 4, February 2, March 6, April 3 — the day of the month I was paid.',
  'The shape is that I have been paid in the first week of every month for four years and I have been late with the rent eleven times in those four years, every time in a month when I was paid on the fourth or later.',
  'I had both numbers in the same book for four years. I thought I was bad with money. I am bad with four days.',
]));

// ===================== 3.6 =====================
out.push(pb());
out.push(h2('3.6  I had never done it before that day'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the condition matters: **it must be something they have done since**. Without it the round becomes a list of regrets; with it, every sentence in the room is a sentence with a date in the middle of it.'));
out.push(A('**b** Open. Expect — and accept — short answers: _…been on a plane · …had to speak for a whole room · …lived alone · …said no to my father_. Correct only the tense: _had_ + third form, not the past simple.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – Yara, about the first week.'));
out.push(A('**b** **1** An inspector came to her school and asked her a question in English in front of the class; she knew the answer and said nothing for about nine seconds, and he moved on.   **2** She had already accepted the laboratory job, had already given notice at the pharmacy in Suwayda, and had already found a room.'));
out.push(NOTE('This track pays off a device planted in Unit 1 — Yara\'s four sentences and her "there is more". Three weeks have passed in the book and three weeks should have passed in the room. If you are teaching the units out of order, do not use this cycle before Unit 1 has been done, because the whole force of it is the delay.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 Speaking in a meeting.** _Before that Tuesday I had never said anything in a meeting of more than four people. On that Tuesday I said two sentences about the delivery times and my voice did something strange in the middle. I have spoken in six meetings since and it has not done it again._',
  '**2 Travelling alone.** _I had never once travelled further than Homs on my own. In August 2023 I went to Latakia and back in a day, which is four hours of bus, and I counted the people I spoke to: three. I have done it eleven times since._',
  '**3 Asking for money you are owed.** _I had never asked anybody for money they owed me. In March I asked a man for eleven thousand pounds he had owed me since the autumn. I have asked two other people since, and one of them paid._',
  '**4 Saying no to a relative.** _I had never said no to my uncle about anything. Last Eid I said no to one thing, in a room with nine people in it. I have said it twice since, both on the telephone, which is easier and which I am not proud of._',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Speaking in front of people.',
  '**B:** Before the ninth of September I had never spoken in front of more than six people.',
  '**A:** What happened?',
  '**B:** On the ninth of September I said four sentences in this room, to eleven strangers.',
  '**A:** And since?',
  '**B:** I have spoken in here five times since. Five times in four weeks, after twenty-six years of none.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three tenses, and then the gap. The biggest gap in most rooms is in the "saying no to a relative" or "speaking in front of people" card and it is measured in decades, not years. When somebody reports a gap of twenty years, do not comment; write the number on the board and go on to the next pair.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Before the twelfth of January I had never told my mother a decision after I had taken it. On the twelfth of January I told her I had taken the room in Mezzeh, which I had taken on the fourth. I have done it twice since, both times about small things, and I have given her the second one two days in advance instead of eight._',
  '**b** _What I was avoiding by not doing it: the forty minutes afterwards. Not the argument — the forty minutes after the argument when she is very polite._',
]));
out.push(A('Answer **b** is the sentence the cycle exists for and it is where the writing in Lesson B comes from. _What were you avoiding?_ is a better question than _why were you frightened?_, because it can be answered with a fact: a conversation, a telephone call, forty minutes, somebody\'s face.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara said the rest of it. The sentence she gave in the first week — that she has studied English since she was eleven and has never spoken it to a stranger — is true and is not the sentence. When she was eleven an inspector came to the school and asked her a question in English in front of the class, and she knew the answer and said nothing, for about nine seconds, and then he moved on and that was the end of it. She has not spoken English to a stranger since, and that is twenty-six years ago next month. She says she has built most of a life around those nine seconds. The second thing, which nobody knew: when she took the laboratory job in Damascus she did not tell her mother until it was done. By the time she told her she had already accepted it, had already given notice at the pharmacy in Suwayda and had already found a room — her mother found out on a Thursday that she was losing her on the Sunday. Ms Huda asked why that way round, and Yara said because she had never once won an argument with her mother and had decided not to have one: she was going to have a fact instead. She had never done anything like that before that week, she has not done anything like it since, and she said she would like to be the sort of person who does not need to do it like that.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I never spoke English to a stranger before that day. → ✓ I **had** never spoken…   ✗ I had never done it since. → ✓ I **have** not done it since.   ✗ I had never won an argument with her once. → ✓ I had **never once** won an argument with her.   ✗ Before that day I had never been speaking. → ✓ had never **spoken**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A week. She had been taught the answer the week before and she had written it out four times, because she liked the shape of it.'));
out.push(A('**2** That she had never been frightened of English **before that day** — she was not a frightened child and she was not bad at the subject; she was the best in the room, which is why he asked her.'));
out.push(A('**3** Because she would like there to be **a date on it**.'));
out.push(NOTE('Answer 1 is the past perfect doing something no other tense can do. _I had written it out four times because I liked the shape of it_ is what makes the nine seconds a loss rather than bad luck: she was not caught out, she was ready. Read the sentence aloud and let the room be quiet for a moment; it is the best argument for the tense in the unit.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR SECONDS AT A WEDDING** · S. Dibo',
  'I am forty-eight. For twenty-nine years of that I have not spoken at a family gathering unless somebody asked me a direct question, and the whole twenty-nine years rests on about four seconds at my cousin\'s wedding when I was nineteen.',
  'Somebody handed me a microphone. I had been asked that morning and I had said yes; I had written four lines on a card and I had the card in my hand. And I said my name and then nothing, for about four seconds, and a man took the microphone and said something kind, and everybody laughed with relief, including me.',
  'I had never been frightened of talking before that day. That is the part I have only understood recently. I was a girl who talked too much and was told so.',
  'Since that day I have taught mathematics for twenty-four years to classes of thirty. And in twenty-nine years I have not said one unasked sentence to a room of adults.',
  '**What I am doing about it.** I said six sentences in Room 14 in September, unasked. Today is 14 April. I am writing this down because I would like there to be a date on it.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**THE LIFT, AND WHAT IT WAS NOT ABOUT** · R. Barakat',
  'I am thirty. For eleven of those years I have not asked anybody at that hospital for anything, and the eleven years rest on a corridor in 2015 that took about two minutes.',
  'I was nineteen and new. I asked a sister whether I could have the Thursday night changed, because my mother was being discharged. I had arranged the swap myself first — I had found somebody to take it, I had written it on a piece of paper and I had checked the rota twice — and I gave her the paper. She did not read it. She said, in front of four people, that new staff ask for things and old staff do things, and she gave the paper back.',
  'I had never been frightened of asking before that day. I had asked for everything as a child; I was the one sent to the shops.',
  'Since 2015 I have worked about two thousand nights and I have asked for three things, all of them in writing, all of them refused, none of them chased.',
  '**What I am doing about it.** In January I was stuck in a lift for two hours with a four-year-old, and on the Monday I asked for something in writing and then asked again in February. Today is 14 April. There is a date on it now, and on this.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I had arranged the swap myself first" — the three things you had already done. That is the number that made me stop._   ✓ _"She did not read it" is enough; the next sentence explains what the page has already shown._   ? _What are you doing about it, and is there a date on it?_ — yes: January, February, and this.'));
out.push(S('Stage 7R · Share'));
out.push(A('Nobody reads anything out. Count the hands for "before you were fifteen" and expect between a third and a half; add "before you were twenty" and it is most of the room. Then put the pages away and say they are not for the wall. The counting is the whole exercise and it takes two minutes.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['14 April. By the end of this course I will have spoken English out loud to one stranger who is not in this room and not being paid to be patient with me. One, not four — I know what I can do. I have chosen the pharmacy on the corner of our street, where a man works on Tuesdays who answers the telephone in English to somebody, and I am going to ask him one question in English about something I actually need. If I do it I will write the date underneath this line, and if I do not do it I will write that instead, because an empty line under a date is a result as well.']));

// ===================== 3.7 =====================
out.push(pb());
out.push(h2('3.7  Review & Mediate: What happened first?'));
out.push(S('Stage 1 · Unit 3 quiz – corrections'));
out.push(A('**1** When I arrived she **had left** and then she **went** to the shop. _(one step back is enough)_   **2** I **had gone** to Aleppo before. _(third form)_   **3** By the time I **got** there, it **had started**. _(both halves were reversed)_   **4** I **have not done** it since. _(since takes the present perfect)_   **5** I **had** never spoken to a stranger before that day.   **6** It stopped because nobody **had checked** it. _(one negative)_'));
out.push(A('These six are the six mistakes of the unit in order of frequency, and items 1 and 3 are worth more than the other four together. If a team gets 1 and 3 and misses the rest, they have understood the unit.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** She says the wall is **not a story about Yara**, although it looks like one — it is about a piece of paper that sat in a drawer for fourteen months. The date that matters is **14 February**, because it is the only one that could have been different without anybody being braver: somebody simply had to send the report to a person.'));
out.push(S('Language box – explaining a timeline'));
out.push(A('No exercises. Use it as the checklist for Stage 3 and read the last line aloud before they start: _do not read the dates out in order._ Half the class will do it anyway the first time, and the other half will hear why it does not work.'));
out.push(S('Stage 3 · Practise (sample – Timeline A, a delivery that failed)'));
out.push(SAMPLE([
  'This is not a story about the man who placed the order, and that is what it looks like. It is about a letter that was filed without being read.',
  'The order was placed on the second of April on terms that had been changed in the January. By the time he placed it, the supplier had written three months earlier, the letter had been sitting unread in a file since the January, and nobody had told anybody on the ordering side that anything had changed.',
  'The date that matters is the twelfth of January, because it is the only one that could have been different without anybody being braver — somebody had to read a letter.',
  'And the quiet part: on the fifteenth of April the customer was told it was a transport problem, which was not true, and the letter was found a week after that. Nobody has told the customer anything since.',
]));
out.push(S('Stage 3R · Perform – listener task (sample, Timeline B)'));
out.push(A('Date that matters: **11 October** — four people noticed and each assumed another would ring. Obvious wrong reading: that she lost interest. Stacked sentence: _By the twenty-fourth of October she had missed three weeks, her name had been on the register for three of those weeks, and four people had each decided that somebody else was ringing her._'));
out.push(A('Timeline B has no final date and ends with a dash: _nobody has rung her_. Students will try to supply an ending. Do not let them. A timeline whose last line is an absence is the commonest kind at work, and noticing that the line is missing is the skill being tested.'));
out.push(S('Stage 4 · Your turn – mediation (sample)'));
out.push(SAMPLE([
  '_The obvious wrong reading of mine is that the fire door is broken, and it is not: it closes if you lift it. Six dates — October, October, November, January, February, April, the seven times I noticed it open. The date that matters is a day in the summer that I do not have, because the porter says it was like that before he started, and that is the first thing my timeline tells you: the one date I need is the one nobody wrote down. What had already been true when I first noticed it is that at least three people had mentioned it to each other, nothing had been written in the maintenance book, and the book only takes things that have been reported. What could have been different without anybody being braver is eleven seconds with a pen in October._',
]));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('The model report in the book is Rasha\'s lift and it is deliberately the longest report in the unit, because mediation at B1 means **carrying somebody else\'s timeline accurately and then saying what you decided**. Mark the second half: a report that retells the timeline and ends without a decision has done half the task.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 6 (open cloze)'));
out.push(A('**1** had   **2** those _(or_ these _)_   **3** which   **4** had   **5** which   **6** before'));
out.push(A('Items 3 and 5 are both _which_ and both are a comment on a whole clause — the one thing Reading Part 6 tests most often and the one students reach for _that_ for. ⚠ _that_ is wrong in both: after a comma, commenting on everything before it, English uses _which_. Item 6 is _before_, not _after_ — the sentence is read the wrong way round by about a third of any class.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'It is nine dates and it looks like a story about a woman in a laboratory who put a batch in a broken chamber. It is not. It is about a piece of paper that sat in a drawer for fourteen months.',
  'By the time she made that choice, the seal had been splitting for three days in front of everybody, the first chamber had been full since the Tuesday, and the report had been in an empty drawer since the February of the year before.',
  'The date that matters is the fourteenth of February, because it is the only one that could have been different without anybody being braver — somebody had to send a report to a person instead of to a post.',
  'And the quiet part: the seal was replaced two days after she rewrote four words as four sentences. Fourteen months, and then forty-eight hours.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 137 words)'));
out.push(SAMPLE([
  'Dear Sam,',
  'First, write down the dates. Not what people said and not whose fault it was — just what happened and when, one line each, even the dates you are not sure of. Write "I do not know" where you have no date, because that is usually the important one.',
  'The order matters because the thing that looks like somebody\'s decision is nearly always a bad choice made inside a situation that other people had already built. You cannot see that until the dates are in a line.',
  'It happened here. A sample was lost at a hospital laboratory last month and everybody blamed the woman who put it in the wrong chamber. Then we put the dates on the wall, and it turned out that the fault had been reported fourteen months earlier to somebody who had left.',
  'One warning: do not add a reason that is not in your dates. It is very easy and you will not notice you have done it.',
  'Write and tell me what the dates say.',
  'Yours, Lubna',
]));
out.push(NOTE('Writing Part 1 is marked out of 20 on Content, Communicative Achievement, Organisation and Language. **All four notes must be covered** — tell him what to write down first, why the order matters, an example from your own work, and one warning — and a script that misses one cannot reach the top band however good the English is. Mark the four off in the margin before you read for language.'));
out.push(S('Unit 3 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** a   **4** a   **5** c   **6** a   **7** b   **8** b'));
out.push(A('_Notes:_ **3** _had never been to_ — _been to_ is the form for visiting; _had never gone_ leaves the person there. **5** the negative is in _had not_, not in a second _didn\'t_. **7** _since_ brings it to now, so the present perfect. **8** _he had been in Kilis since the Sunday_ — we are inside a past story, so the step back is to _had_, not to _has_.'));
out.push(S('Unit 3 check  ·  B  Listening (Part 3, note completion) – Track 3.15'));
out.push(A('**1** February   **2** post   **3** March   **4** three   **5** 13   **6** two'));
out.push(A('Accept _the thirteenth_ for 5 and _2_ or _two_ for 6. Do not accept _fourteen months_ for 6: the gap asks for the days after the rewritten report, and the fourteen months is the trap the script sets in its last sentence.'));
out.push(S('Unit 3 check  ·  C  Writing (sample, 148 words)'));
out.push(SAMPLE([
  'The obvious wrong reading is that the night sister is slow. That is what the round book says thirty-four times.',
  'On 2 February the second trolley went to the workshop with a broken wheel. By the fourth it had not come back and nobody had chased it, because there is no form for chasing a trolley. On 11 February the round took sixty minutes longer than it is written for and I recorded the reason as "staffing". By 1 March I had written "staffing" nineteen times, and by the eleventh the ward had been running one trolley for a five-bay unit for five weeks.',
  'The date that matters is the fourth of February, because it is the only one that could have been different without anybody being braver: somebody had to notice that a trolley had not come back in two days.',
  'What could have been different without courage is a line in a book with a date on it. What took courage was the nineteen.',
]));
out.push(S('I can… (Unit 3)'));
out.push(A('Self-assessment; no answers. Lines 2 and 8 are the two to look at: _leave the past perfect out when the order is already obvious_ and _separate somebody\'s choice from the situation around it_. A class that ticks everything except those two has learnt the tense and not the unit.'));
out.push(box('Looking ahead to Unit 4', [
  'Unit 3 steps **backwards**; Unit 4 comes **forwards** to now, with the present perfect simple against the present perfect continuous. The pairing is deliberate: a class that has just spent a unit on _had been_ will produce _had been working_ for _have been working_ for about a week, and Unit 4 is where that is sorted out rather than avoided.',
  'The past perfect **continuous** is formally introduced in Unit 4 beside the present perfect continuous. It has appeared six times in this unit — _had been splitting · had been sitting · had been standing · had been doing_ — unnamed and in reading only. Students who ask have been told "next week"; keep that promise in 4.1.',
  'The Unit 3 homework from 3.3 and 3.6 — the _by the time I finish this course_ page and the dated turning-point page — are **both opened in Unit 12**. Collect them, or make sure every student knows where theirs is. They are two of the four envelopes 12.6 is built on.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 3 · Answer Key');
