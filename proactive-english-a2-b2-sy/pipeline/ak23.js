// Proactive English A2 · Syria Edition · Book 2 · Unit 23 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 23  News and Our City — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One rule decides nine tenths of the marks in this unit** and it belongs on the board from 23.1 to 23.7: the present perfect is for **news**, and the moment a finished time appears — _yesterday, in May, on the fourth, last week_ — the sentence becomes a **past simple**. Students do not fail this because they cannot form the tense; they fail it because they add a date to a tense that cannot take one.',
  '**The shape taught in 23.3 is the shape of all news in English:** one present-perfect sentence for what has happened, then the past simple for everything that happened. Once a class can do that, the rest of the unit is vocabulary.',
  '**This unit needs the homework from Unit 22** — one piece of real news, from a person. Without it 23.1 and 23.4 are role-play; with it they are the lesson.',
], C.lblue, C.navy));

// ===================== 23.1 =====================
out.push(pb());
out.push(h2('23.1  They\'ve opened the library'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on **one sentence**: the news, not the story. The stories come in 23.3 and they will take the whole lesson if you let them in now.'));
out.push(A('**b** **2** and **4** are news. What makes them news is that the **result is true now** and nobody is being told about a date. **1** is history (it has a date and a finished time) and **3** is one person\'s afternoon, not news, however interesting it was.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the library has opened again.'));
out.push(A('**b** **1** Eleven years — shut since 2013.   **2** That the stairs are the stairs and the smell is the smell: she says you will know it when you are in the door, and she has not smelt it since 2013.'));
out.push(S('Language box · Practise'));
out.push(A('**1** They **have opened** the library.   **2** They **have painted** the walls.   **3** I **have been** twice.   **4** Somebody **has put** new windows in.   **5** They **have moved** the desk.   **6** She **has taken** out a book.'));
out.push(NOTE('Items 3 and 4 carry the two errors you will see all fortnight: _I **am** gone twice_ for _I have been_, and _somebody has **put** new windows_ said as _has **putted**_ or _has **put in** new windows_ with the wrong word order. Drill _been_ separately; it is the commonest participle in English and the one students avoid.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Have you heard? They\'ve opened the library in Mezzeh.',
  '**B:** Which library?',
  '**A:** The one with the steps. It\'s open.',
  '**B:** It\'s been shut since I was at school.',
  '**A:** Eleven years. I\'ve been twice and I have taken a book out.',
  '**B:** Who did it?',
  '**A:** Nobody has said and I have asked twice.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('News: _they have opened the library._ Detail: _it has been shut eleven years · I went on Tuesday · the desk is by the door now._ The news is in the present perfect and the detail has already slipped into the past simple, which is 23.3 arriving early and should be praised, not corrected.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_They\'ve put new lights in our street. Eleven of them, and four work._ — **Which street?** _Ours, from the bakery to the school._ — **Who did it?** _Nobody knows. A lorry came on a Thursday and they were up by Saturday._',
  '**b** _Mine is news: it happened this month and the street is lit now. My partner\'s is not news — her cousin got engaged in February and she only heard last week. It is still worth telling and the English for it is the same, which surprised her._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba has news: they have opened the library in Mezzeh, the one with the steps, and it has been shut eleven years. She has been three times in nine days and has taken a book out twice, which she has not done since she was nineteen. They have painted it, put new windows in the back room and moved the desk to the door so that somebody sees you come in, but the stairs are the stairs and the smell is the smell. Nobody has said who opened it — she has asked twice, and the woman at the desk says "the municipality", which Hiba says is what people say when they do not know either.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They have opened the library yesterday. → ✓ They **opened** it yesterday. / They **have opened** it.   ✗ They have open it. → ✓ they have **opened** it.   ✗ I am gone three times. → ✓ I **have been** three times.   ✗ It is shut since 2013. → ✓ It **has been** shut since 2013.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Eleven years — and you must take your identity card the first time.'));
out.push(A('**2** Two students have left and have not said why; 4B has gone from thirteen to eleven. The board mentions it because somebody in the building may have heard from Rami or Souad.'));
out.push(A('**3** The kettle. It is on the board because it has been broken since February and four people have promised to look at it — the board records what has **not** happened as well as what has.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT\'S NEW — building 14, Mezzeh** · written by whoever is on the stairs',
  '**The lift has been mended.** Nine days now. Nobody ordered it and nobody knows who paid.',
  '**Flat 3 has had a daughter.** Four days ago. Umm Nabil is collecting for a present and she is on the second floor.',
  '**Two families have left and have not said where they have gone.** If anybody has an address for flat 9, tell somebody.',
  '**Not news, and it is going on the board anyway:** the light on the fourth landing is still out. It has been out since February.',
]));
out.push(S('Stage 7 · Write freely (sample, 121 words)'));
out.push(SAMPLE([
  '**WHAT\'S NEW — our street, from the bakery to the school** · Rasha, Monday',
  '**They\'ve put eleven new lights up.** Four of them work. A lorry came on a Thursday and they were up by Saturday, and nobody has told us who asked for them.',
  '**Abu Nabil has closed the bakery for five weeks.** His knee is being operated on. He will be open before the end of the summer and he has asked us to tell people, because three have already asked him where to go instead.',
  '**Somebody has painted the school gate.** Green. It has been the same green since 1978 and this is a different green, and the argument about it has been going on for a week.',
  '**Two of the shops on the corner have changed hands and nobody has said to whom.** If anybody knows, say.',
  '**Not news, and it is going on the board anyway:** the drain outside number 6 has been blocked since the winter. It has been reported four times.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _The green gate. Four lines and I know what kind of street this is._   ✓ _"Two of the shops have changed hands" — I cannot tell whether you think that is good or bad._   ? _Who is Abu Nabil?_ — the bakery item assumes I know him, and if I have just moved in I do not.'));
out.push(S('Stage 7R · Share'));
out.push(A('Four boards on the wall and the question answers itself in about a minute. Then the second question is the one worth the time: it is almost never the street with the best news that people choose, it is the one whose board sounds like somebody is looking after it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**WHAT\'S NEW — our street, 2020.** Nobody has mended the lights. The bakery has not closed for twenty years and Abu Nabil has not had a day off in that time. Three families have left and we know exactly where all three have gone. The school gate has been the same green since 1978. The drain outside number 6 has been blocked since the winter. Reading the two next to each other, four of the six items are the same item, and the one that has really changed is that in 2020 we knew where people went.']));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  I\'ve already been twice'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. _Just_ for the bread, _already_ for the Monday visit, _not yet_ for the children\'s room. Say each answer as a full sentence; the word on its own teaches nothing because the difficulty is where it goes.'));
out.push(A('**b** **1** I have **already** been twice.   **2** They have **just** opened it.   **3** The children\'s room hasn\'t opened **yet**.   **4** Have you been **yet**?'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – he has already been twice.'));
out.push(A('**b** **1** The children\'s room — it is still full of chairs.   **2** Putting eleven years of books back on the shelves, on her own, in nine weeks.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I have **already** been twice.   **2** They have **just** opened it.   **3** It hasn\'t opened **yet**.   **4** Have you seen it **yet**?   **5** They have painted it **recently**.   **6** She has **just** finished.'));
out.push(NOTE('The marks are all in the **position**, not the word. _just_ and _already_ go between _have_ and the participle; _yet_ goes at the end and only in questions and negatives. Mark a right word in the wrong place as wrong, from the first lesson, or it never moves.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B:** Have you been to the library yet?',
  '**A:** I\'ve already been twice. I went the first day — I saw the door open from the bus.',
  '**B:** And have you taken a book out?',
  '**A:** Twice. I have not done that since I was nineteen.',
  '**B:** Has the children\'s room opened yet?',
  '**A:** It hasn\'t opened yet. Maysoun says next month; it is still full of chairs.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Already happened: _been twice · taken a book out._ Not yet: _the children\'s room · the lending cards._ The one the speaker most wants is nearly always the one they mention without being asked.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The new bakery on the corner. They have **already** painted it and put the oven in, and the sign went up on Tuesday. They have **just** put a notice on the door saying they open on the first. They have **not** opened yet, and the thing that has not happened is the pavement — they were told to mend the pavement outside and it has not been touched._',
  '**b** _The pavement will never happen. I say that because the last two shops in that building were told the same thing and it is the same pavement._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar has already been to the library twice and he has not said a word to anybody. He went the first day, because he saw the door open from the bus and got off a stop early, and he went again to photograph the stairs — he has just taken four photographs of the light at four o\'clock, which has been coming down those stairs since 1962 with nobody in there to see it. The children\'s room has not opened yet; it is still full of chairs, and Maysoun says next month. And Maysoun has just finished putting eleven years of books back on the shelves, on her own, in nine weeks. He asked her how many and she said she has not counted and is not going to. He has not asked whether she has been paid, and he says he is not going to.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I have been already twice. → ✓ I have **already** been twice.   ✗ It has opened yet. → ✓ It **hasn\'t** opened **yet**.   ✗ I have yet not been. → ✓ I haven\'t been **yet**.   ✗ I have already been there yesterday. → ✓ I **went** there yesterday.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The desk moved to the door, so that somebody sees you when you come in — and she says it was the first thing she asked for and the last thing she got.'));
out.push(A('**2** Because the lending cards are not ready, so she writes your name in a book, which is how it was done there until 1998.'));
out.push(A('**3** Who paid for the paint. She has asked the municipality three times, had three different answers, and the paint is on the walls — so she has stopped asking.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHERE WE ARE** — flat 7, the kitchen · 2 June · R.K.',
  '**Done.** The wall has been taken out and the pipes have been moved. The window has been replaced and it opens, which the old one has not done since we came.',
  '**Just finished.** The tiling. It has taken nine days and it was supposed to take three, and I have stopped minding about that.',
  '**Not yet.** The cooker has not been connected — the man comes on the 9th. The door has never shut properly and nobody has promised me anything about it.',
  '**What I have not been able to find out:** whether the committee will pay for the pipes, since they are the building\'s. I have asked twice and had two answers.',
  '**If you come this week:** come in the evening and bring your own cup.',
]));
out.push(S('Stage 7 · Write freely (sample, 139 words)'));
out.push(SAMPLE([
  '**WHERE WE ARE** — the application · 14 June · Hiba',
  '**Done.** The form has been sent, with the photographs and the fee. The transcript has come back from the faculty, in Arabic and in English, which took eleven weeks and four visits.',
  '**Just finished.** I have just had the interview — Tuesday morning, forty minutes, three people, and two of them knew the form.',
  '**Not yet.** They have not said when they will decide; the letter says "in due course", which means nobody has written a date down. And I have not told my mother that I have applied at all — four months, and it is the only item on this list that is entirely mine to do.',
  '**What I have not been able to find out:** how many places there are. Three people have given me three numbers, and one of them works there.',
  '**If I get it:** the course is four days a week from September, and the shop is five. That sentence is the whole of it and I have written it down so that I stop pretending it is not there.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the only item on this list that is entirely mine to do." You have put the real one at the bottom of the "not yet" list, which is where everybody puts it._   ✓ _Under Done you have "the transcript has come back", but you say four visits — is the English one actually in your hand?_   ? _How long has the "not told my mother" one been on the list?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Expect the longest list to be about a flat or a document, and expect the oldest item on any list in the room to be between two and fifteen years old. Asking for the oldest one is the question that changes the lesson; the list itself is only the apparatus for getting there.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**My "not yet" list.** 1. I have not told my mother about the course — four months. 2. I have not been to see my grandmother in Homs — since the spring. 3. I have not finished the driving lessons — I stopped after six, three years ago. 4. I have not asked for the money I am owed from the summer — fourteen months. 5. I have not thrown away my father\'s coat — eleven years. The oldest is the one I will never do and I have known that while writing it.']));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  It opened on the fourth'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The point is visible rather than explained: every answer to _when? who? how much? how?_ comes back in the past simple, and the class hears the tense change the second time round without being told.'));
out.push(A('**b** **1** They\'ve opened the library. It **opened** on the fourth of May.   **2** Omar has sold a photograph. They **paid** twenty-five thousand.   **3** Hiba has a place on the course. She **heard** on Sunday.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – a newspaper has bought one of his photographs.'));
out.push(A('**b** **1** He sent four; they took one.   **2** Twenty-five thousand, for a photograph he took in eleven minutes — and he says he has thought about that for three days and cannot make it make sense.'));
out.push(S('Language box · Practise'));
out.push(A('**1** They\'ve opened the library. It **opened** on 4 May.   **2** He\'s sold a photograph. They **paid** twenty-five thousand and **printed** it on Thursday.   **3** She\'s got a place on the course. She **heard** on Sunday.   **4** They\'ve mended the lift. Two men **came** nine days ago.   **5** Two students have left. They **went** in March and **gave** no reason.'));
out.push(NOTE('Mark these for **consistency**, not for the first verb. A student who writes _they have opened it and it has opened on 4 May_ has understood nothing; a student who writes _they have opened it and it opened on 4 May_ has the whole unit. The second sentence is where the mark is.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** A newspaper has bought one of my photographs.',
  '**B:** When? How? Start at the beginning.',
  '**A:** They rang on Tuesday. I sent four that night. They took one and they printed it on Thursday, on page four.',
  '**B:** How much?',
  '**A:** Twenty-five thousand.',
  '**B:** For one photograph.',
  '**A:** For one photograph that I took in eleven minutes because I got off the bus a stop early.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_A newspaper has bought one of my photographs._ Then: _rang Tuesday · sent four · took one · printed Thursday, page four._ The check is the last of the four: by then most speakers have drifted back into the present perfect.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_My sister has passed the pharmacy examination._ — **Start at the beginning.** _She sat it in January, for the second time. She failed the first one in June by two marks and she did not tell anybody for a week. She studied in the shop, between customers, from six in the morning. The result came on the 3rd of March, on a Sunday, and she rang me before she rang our mother, and all she said was "it is done"._',
  '**b** _The place I went back was "she has studied in the shop" — I said it twice before I heard it. It should be "she studied", because I am in the story now._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['A newspaper has bought one of Omar\'s photographs. They rang on Tuesday, because somebody showed a man there the picture of the library stairs; Omar sent four that night, they took one, printed it on Thursday on page four and put his name under it. They paid twenty-five thousand, for a photograph he took in eleven minutes because he got off the bus a stop early, and he says he has thought about that for three days and cannot make it make sense. He bought four copies on Thursday and gave his father one at lunch, folded at page four, and said nothing. His father read it, said "this is the staircase at the library", then asked "did you do this?" — and he has put it on the workshop wall where the licence is. He has not mentioned it since and it has been there a week.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ They have rung on Tuesday. → ✓ They **rang** on Tuesday.   ✗ It has opened on the fourth. → ✓ It **opened** on the fourth.   ✗ He has gave me one. → ✓ He **gave** me one.   ✗ They have paid me yesterday. → ✓ They **paid** me yesterday.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He took it on the fourth of May; the newspaper rang on Tuesday the fourteenth.'));
out.push(A('**2** He showed the photograph to two people, and one of them showed it to a man at the newspaper.'));
out.push(A('**3** Take the photograph. Show it to two people.'));
out.push(NOTE('Question 3 is the whole writing stage. The two sentences are nine words and they are the only part of the page that somebody else can use, which is the test to give students for their own last line: could a stranger act on it?'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**For the wall · the pharmacy result · 3 March**',
  'My sister has passed the pharmacy examination. It is the first examination anybody in our family has sat twice.',
  'This is what happened. She failed in June by two marks and said nothing for a week. She sat it again in January. She studied in the shop, between customers, from six in the morning, for five months. The result came on a Sunday and she rang me before she rang our mother.',
  'The part I keep thinking about is this. She did not tell anybody she was sitting it again, and she nearly did not enter.',
  '**What I have learned:** the second time is not the same examination. Enter again. That is the whole of it.',
]));
out.push(S('Stage 7 · Write freely (sample, 147 words)'));
out.push(SAMPLE([
  '**For the wall · the first class I taught on my own · 11 October**',
  'I have taught a class on my own. Nineteen people, ninety minutes, and nobody told me until the morning.',
  'This is what happened. Ustaz Nabil rang at eight and said he could not come. Ms Huda found me in the corridor at ten past nine and asked whether I knew Unit 4; I said yes, which was half true. I lost eleven minutes on a grammar point I did not understand myself, a woman in the second row corrected me and was right, and I said so out loud — the only decision I made that day that I am still pleased about.',
  'The part I keep thinking about is this. Nobody in the room knew it was the first time, and three people asked at the end whether I would be taking them again.',
  '**What I have learned:** say "you are right" in front of everybody. It costs four seconds and it buys you the room. That is the whole of it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"say you are right in front of everybody." I would want that on a wall in ten years._   ✓ _"which is the only decision I made that day" — one more sentence like that and I would know what the other decisions were._   ? _What did the woman in the second row actually correct?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read six last lines with nothing round them, and keep the one that more than one person recognises. It is usually about asking rather than waiting, and having it on the board for the rest of the unit does more for 23.4 and 23.6 than any further instruction.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked my grandmother. Her sentence was: "I have taught four hundred children to read." Then the story, in her words and her numbers: she started in 1968, in a room behind the mosque, with nine children and no books. She was paid in flour for the first two years. She stopped in 1994 when her eyes went. She said the number four hundred is not exact and that she counted it once, in 1989, and it was two hundred and eleven then, so she has doubled it in her head since and she is not going to stop now.']));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  That\'s wonderful — tell me everything'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and fast — the speed is the exercise. The second round, with a question added, is where the class discovers that the reaction alone is not an answer.'));
out.push(A('**b** **1** _That\'s wonderful! Congratulations._   **2** _That\'s a shame._ / _Oh no._   **3** _Really? Since when?_ — and it may be good or bad news, which is why the question matters.   **4** _Really? I don\'t believe it._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – three: Hiba\'s place on the course, Rana leaving, and Lina taking Rana\'s job.'));
out.push(A('**b** **1** Because the course is four days a week and she will have to leave the shop, and her mother has worked in that shop since she was seventeen.   **2** Rana is leaving, which is a shame for Lina and the right thing for Rana — and the other half is that Lina is doing Rana\'s job from June.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _That\'s wonderful! When did you hear?_   **2** _That\'s a shame. How long **have** you worked together?_   **3** _Really? When did he go?_   **4** _That\'s great news. How much did they pay you?_   **5** _I\'m sorry to hear that. What will you do?_   **6** _You\'re joking. Since when?_'));
out.push(NOTE('Item 2 is the trap. Students ask about something that is still true with a past tense — _how long did you work together?_ — and the question needs the present perfect, because they are working together now. It is the same rule as 23.1 read from the other end.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I\'ve got a place on the teacher-training course.',
  '**B:** That\'s wonderful! When did you hear?',
  '**A:** Sunday. Three hundred applied and there are forty places.',
  '**B:** Does your mother know?',
  '**A:** Not yet. The course is four days and the shop is five.',
  '**B:** And how do you feel about it?',
  '**A:** It is the best thing that has happened to me and it is going to cost my mother something, and I am not going to put the first part in front of the second.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_That\'s wonderful! — When did you hear?_ · _That\'s a shame. — How long have you worked together?_ · _Really? — Since when?_ The reaction that sounds most real is almost never the longest one, and when you ask the class why, they say it was the voice.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Good: my brother has finished his military service. Bad: the shop where I have worked for six years has been sold and nobody has told us what happens in September. Both: my closest friend has been given a place in Germany and she goes in two months._',
  '**b** _The one I have never told anybody is the middle one, and the reason is that saying it out loud at home would frighten my mother, who does not know the shop has been sold._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['There were three pieces of news in one evening. Hiba has a place on the teacher-training course in September; she heard on Sunday, and three hundred applied for forty places. Her mother does not know yet, because the course is four days a week and Hiba will have to leave the shop, and her mother has worked there since she was seventeen. Lina said she will be prouder than Hiba thinks and will say nothing for two days, because that is what her own mother did. Lina\'s news is Rana: she has been given the Aleppo office and she is leaving, which Lina says is a shame for her and the right thing for Rana, and she is not going to put the first part in front of the second. And the second half is that Lina is doing Rana\'s job from June, which she has known only since Thursday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I\'m sorry for hear that. → ✓ I\'m sorry **to** hear that.   ✗ That\'s a pity for you. → ✓ That\'s a shame.   ✗ Congratulations for your news. → ✓ Congratulations **on** your place. / That\'s wonderful news.   ✗ It\'s a shame but it\'s good for her — said in that order → ✓ good part first: _it is the right thing for her, and it is a shame for me_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Ustaz Nabil. He says it is the right word because a place on the course is an **achievement** — somebody did something — and not simply good news that arrived.'));
out.push(A('**2** Whether she is going to stop coming to the class — and he wants to know now because four people will ask him tomorrow, and because if she is going, something can be done about it.'));
out.push(A('**3** Who marks the applications, because she is going to apply again.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To good news:** Congratulations! And I am not surprised, which you will not believe. Forty of three hundred. When do you start, and what are you going to do about the shop? Tell me when you have told your mother and I will ring her myself.',
  '**To bad news:** I\'m so sorry to hear that. I worked in a shop that was sold in 2017, so I know exactly what the next six weeks feel like: nobody tells you anything and everybody asks you what you have heard. What have they actually said in writing? Ring me on Thursday evening and I will tell you the four questions I wish I asked them in the first week.',
]));
out.push(S('Stage 7 · Write freely (sample, 118 words)'));
out.push(SAMPLE([
  '**To Souad, four months late**',
  'You wrote to me in February and I have not answered, and I am going to say why rather than apologise for it.',
  'You told me you had— you told me you did not get the course in 2019 and that you have thought about it every September since. I got a place this year, and I have known since Sunday, and for four days I have not been able to work out how to tell you that.',
  'Here is what I am not going to do: I am not going to make it smaller than it is so that it costs you less.',
  'And here is what I am going to do. I am going to find out who marks the applications, and I am going to bring you the form in November and sit with you while you fill it in. You applied once with nobody. You are not doing that again.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I am not going to make it smaller than it is so that it costs you less." Nobody has ever said that to me and it is the kindest line in the page._   ✓ _"I am going to say why rather than apologise" — and then the next paragraph is nearly an apology._   ? _Are you really going to bring the form in November?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Send them in the lesson if there are telephones in the room. The count of how old the news is produces the sentence the cycle exists for: nothing was left unanswered out of indifference, it was left because everybody assumed somebody else said it first.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent it on Sunday. She answered in eleven minutes and the whole message was: "November. Don\'t you dare forget." Then she rang on Monday and we talked for forty minutes, which we have not done since 2019, and at the end she said the thing she minded was not the course, it was that nobody said anything to her at all that summer. Four months of me not writing was worse than the news.']));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  According to the paper'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask _who says so?_ in exactly those words every time and let the class hear how uncomfortable it is to be asked, because that is why nobody asks it.'));
out.push(A('**b** **1** _According to the paper…_   **2** _According to a man who works there…_ / _I heard from…_   **3** _Apparently…_ — this is the one that must not be given a source it has not got.   **4** _It says on the notice that…_ / _According to the municipality\'s own notice…_  The two you would repeat with the source attached are **1** and **3**; **4** you can repeat plainly, and **2** depends on whether you will name him.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – whether the road is finished.'));
out.push(A('**b** **1** "The Mezzeh road is expected to open to traffic in June" — and it does not say expected by whom.   **2** That there are two hundred metres at the Mezzeh end with no surface, and that the machine that lays it has been in Tartous for five weeks.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **According to the paper**, the road opens in June.   **2** **Apparently** the machine is in Tartous.   **3** **According to** the woman at the desk, there are no lending cards yet.   **4** **I heard** the rent is going up.   **5** **It says on the notice** that it will cost two million. / **According to the notice on the door**…'));
out.push(NOTE('_According to_ takes a **person or a thing**, never a clause: ~~according to that the road is finished~~. And _according to me_ is wrong in English, which surprises students and is worth ten seconds of board time, because the Arabic pattern behind it is perfectly reasonable.'));
out.push(S('Stage 3 · Practise (sample – Card A, first statement)'));
out.push(SAMPLE([
  '**A:** The road opens in June.',
  '**B:** Who says so?',
  '**A:** According to the paper.',
  '**B:** What does it actually say? The words.',
  '**A:** "The Mezzeh road is expected to open to traffic in June."',
  '**B:** So it does not say it opens in June. It says somebody expects it to.',
  '**A:** Would you repeat it?',
  '**B:** I would repeat it with "the paper says it is expected" attached.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Statement: "the rent is going up fifteen per cent." Exact words: "rents will be reviewed annually from 1 July."_ Those two are the furthest apart on either card: the notice does not mention a number at all, and the fifteen was somebody\'s arithmetic from last year.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _1 The centre is moving to Qudsiya next year — I do not know where I got it, and I have repeated it to six people. 2 Bread is going up on the first — my neighbour, who has been right about this twice. 3 The number 7 is being changed — I read a notice at the stop, so I can quote it._',
  '**b** _The first. I have told two students here that the centre is moving and I could not name a single source for it if anybody asked me tomorrow._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar said the road opens next month and that it is finished. Nour asked who says so, and the answer is the newspaper — Thursday\'s, page two. But the words are "the Mezzeh road is expected to open to traffic in June", and the paper does not say expected by whom. According to her cousin\'s husband, who has been on that site since January, there are two hundred metres at the Mezzeh end with no surface, and apparently the machine that lays it has been in Tartous for five weeks. Nour says the paper is not wrong: "it opens in June" and "it is expected to open in June" are two different sentences, and the second says exactly how much is known. And when you tell somebody at work, say which one you have — the paper or the man on the site.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ According to me, the road is finished. → ✓ **I think** the road is finished.   ✗ According to that it opens in June. → ✓ According to **the paper**, it opens in June.   ✗ Apparently from my cousin. → ✓ **According to** my cousin. / **Apparently** the road is not finished.   ✗ The paper says it opens in June _(when it says "expected")_ → ✓ the paper says it is **expected** to open in June.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** "Substantially" and "expected".'));
out.push(A('**2** "Nobody on the site believes June. Ask me again in August."'));
out.push(A('**3** Plan for August and be pleased in June.'));
out.push(NOTE('Answer 3 is the model for every Stage 7 in this cycle: a note that ends at "nobody knows" has not helped anybody. The advice has to contain a date or a number that somebody can act on, and it is allowed to be wrong — it is advice, not a forecast.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE PIECE OF NEWS, THREE VERSIONS** · the bread price · R.K.',
  '**1 · What is said:** "bread is going up on the first."',
  '**2 · What the notice in the bakery says:** "prices under review." The word "review" is doing the work.',
  '**3 · What Abu Nabil says**, asked on Saturday: "nobody has told me a price. I have been told flour is going up and I have not been told by how much. If it goes up it will be after the first, because I have paid for this month\'s flour already."',
  '**What I would say:** according to the notice, prices are under review; according to the baker, nothing will change this month because the flour is paid for. If you are buying for a month, buy now and do not panic.',
  '**And the rule:** "under review" means somebody is thinking and nobody has decided.',
]));
out.push(S('Stage 7 · Write freely (sample, 136 words)'));
out.push(SAMPLE([
  '**ONE PIECE OF NEWS, THREE VERSIONS** · the centre moving to Qudsiya · Hiba',
  '**What has been going round since March:** "the centre is moving to Qudsiya next year."',
  '**Where it came from:** nobody can name the first person. I have asked four people and all four heard it from one of the other three.',
  '**What the written source says.** There is none. I have looked on the board, on the door and in the fee letter. The absence is the finding.',
  '**What Ms Huda says**, asked on Tuesday: "the lease here runs to August next year. Nobody has told me what happens after that and I have asked twice. Qudsiya has never been mentioned to me by anybody, and if anybody mentions it to me I will tell you the same day."',
  '**What I would say:** the lease ends in August next year and nothing after that is decided. Qudsiya appears to be somebody\'s guess that has been repeated until it sounded like a fact. If you are deciding about next year, decide on the August date and ignore Qudsiya.',
  '**And the rule:** when four people have heard it from each other, that is not four sources. It is nobody.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"There is no written source. The absence is the finding." That is the version I would act on._   ✓ _"appears to be somebody\'s guess" — that is as far as "apparently" can carry you, and here it nearly goes further._   ? _Did you really ask Ms Huda, or is that what you expect her to say?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Expect fewer than half to have found a written source at all, and that figure is the lesson. Keep the list of weakening words on the wall for the rest of the book: _expected · likely · planned · under review · under consideration · in the programme · substantially · in due course_. All eight come back in 23.7 and in the End-of-Book Test.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I believed that the water would be on for six hours a day from June, and I found the notice. The words are: "**it is expected** that supply **will be improved** during the summer months, **subject to** the completion of works at the station." Four things in one sentence mean "not yet": **expected**, **will be improved** with no number, **during the summer months** with no date, and **subject to** something being finished that nobody has said is finished. I have believed "six hours from June" for two months, and the notice does not contain the word six, the word June, or the word hours.']));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  Has it opened yet?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and fast. _they have opened it_ → **have they opened it?** · _he sold a photograph_ → **did he sell a photograph?** · _she is leaving_ → **is she leaving?** The auxiliary first, every time, and no pauses for thinking.'));
out.push(A('**b** **2** and **4** get more than one word. **1** and **3** are closed questions and get _yes_ or _no_ — which is exactly why people ask them.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – Mr Fouad, coming back after two weeks.'));
out.push(A('**b** **1** The news, not the messages — he chose, and she had both ready.   **2** The man who rang on the Tuesday and would not give a name: she did not ring the number back the next morning, and when she rang on the Thursday it was dead.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Has** anything happened?   **2** **Has** the library opened **yet**?   **3** **Did** you take any new work?   **4** **Has** anybody rung?   **5** **What have** I missed?   **6** **What else has** happened?'));
out.push(NOTE('Items 3 and 4 side by side are the whole grammar of the cycle: _did_ for one finished action you have a time for, _has_ for news. Students who can choose between those two auxiliaries without thinking have the unit, and the way to get there is twenty oral prompts, not an explanation.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** What have I missed?',
  '**B:** Eleven things, and four matter. Do you want those first or the news?',
  '**A:** Has anything broken?',
  '**B:** Nothing has broken. The hot water has been mended, which nobody ordered.',
  '**A:** Did anybody come?',
  '**B:** Your uncle came on the Tuesday. I said you were away and he did not leave a message, and I have thought about that every day since.',
  '**A:** What else has happened?',
  '**B:** Your sister has been given a place in Latakia. And the one thing I got wrong: I signed for a parcel that was not ours.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The answer to _what else has happened?_ is nearly always the best or the worst item on the list. Collect four of them and ask the class whether any of those four would have come out without the question; the answer is usually none.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _What have you missed? My brother has come back from his service. The shop has been sold. I have started coming to this class on Thursdays as well. And the one I kept back for "what else": my mother has been to the doctor twice in a fortnight and she has not told me what he said._',
  '**b** _The question I would like somebody to ask me more often is "what else has happened?" — because the first three things I say are always the ones I have already told four people._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mr Fouad came back after two weeks and asked what he has missed. Nour gave him the news before the messages: nothing has broken, the lift has been mended, which nobody ordered and nobody understands, and nobody has collected without a ticket. Two tried, one was Abu Hani, she said no to him and he has not spoken to her since. She turned down a four-day job on the eighth, as she was told to, and has thought about it every day since because it was two hundred thousand; he said she was right and will be unsure for a week. And the one thing she got wrong is the man with no name: she did not ring the number back the next morning, and by Thursday it was dead. Mr Fouad said he knows what it is about, and that she did not get it wrong, because he would not have rung back either.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ You have heard? → ✓ **Have** you heard?   ✗ He sold it? → ✓ **Did** he sell it?   ✗ Did you took any work? → ✓ Did you **take** any work?   ✗ What has happened to the lift? It has been mended it. → ✓ It **has been mended**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because it is the first thing anybody wants to know — and she says so on the page, which changes how everything after it is read.'));
out.push(A('**2** That neither call was urgent, and that she would do both again.'));
out.push(A('**3** The 25th — the day the terms letter from Al-Sharq matters, and nobody has answered it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TEN DAYS — the handover back** · Rasha, for my mother',
  '**Read this before the post.**',
  '**Nothing has broken and nobody has been ill**, because that is the first thing you will want and I am not making you read four lines for it.',
  '**What has happened.** The lift has been mended. Umm Nabil has had a daughter and there is a collection on the second floor.',
  '**What I decided.** I paid the electricity on the 15th in cash, because the card machine was down, and I would do it again. I did not let the man in to look at the roof on the 18th, because you were not here.',
  '**What I got wrong.** I forgot the plants on the balcony for six days. One of them is finished.',
  '**What has not happened yet.** The committee has not answered about the pipes. The 2nd is the day it matters.',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**THREE WEEKS AT THE SHOP — the handover back** · Yousef, for Omar',
  '**Read this before the book.** Sixty-one entries, and the nine that matter are clipped on top.',
  '**Nothing has broken and nobody has been hurt.** First line, because it is the first thing you asked me about on the telephone every single day.',
  '**What has happened.** The water has been off twice, both times for a morning. Four customers have asked for you by name and all four came back. The man from the garage opposite has paid what he owed, in full, without being asked, which neither of us expected.',
  '**What I decided.** I turned away the four-day job on the 8th because of your note — two hundred thousand, and I have thought about it every day since. I opened on the Saturday of the 13th, which you asked rather than told me to do. I gave Abu Hani his repair without the ticket on the 19th, because I have known him since I was nine, and that one was mine and it was wrong.',
  '**What I got wrong.** The Abu Hani one. Also: I did not write down a number on the Tuesday and the man has not rung back.',
  '**What has not happened yet.** The parts for the Haddad job have not come — the 22nd now, they say.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"that one was mine and it was wrong." You wrote it down before I could find it, and that is why I believe the rest of the page._   ✓ _The four-day job: I would want to know what the customer said when you turned it down._   ? _Is the Abu Hani one the whole of what went wrong, or the only one you are willing to write?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read three "what I got wrong" lines and expect the room to agree that they would not have written any of them. Then say the thing the cycle is for: the page with a mistake on it is the only one a returning manager believes, and everybody in the room has worked for somebody who never got one.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The page nobody gave me, for the fortnight I ran the office at nineteen. **Read this before anything.** **Nothing is on fire.** **What has happened:** the Thursday delivery is always two days late and nobody reports it any more. **What you may decide:** anything under twenty thousand, without asking me. **What I got wrong before you came:** I promised the Haddad file for the 9th and it is not possible, and you will be the one who has to say so. **What has not happened yet:** the landlord has not answered about the second room, and if he comes, say nothing and write down what he says.']));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: What does the newspaper say?'));
out.push(S('Stage 1 · Get ready – Unit 23 quiz'));
out.push(A('**1** They **opened** the library yesterday. _(or: they have opened the library — and drop "yesterday")_   **2** I **went** there last week. _(or: I have already been there)_   **3** It **hasn\'t** opened yet.   **4** **I think** the road is finished.   **5** **Have** you heard the news?   **6** I\'m sorry **to** hear that.'));
out.push(NOTE('Items 1 and 2 have two right answers each and both are worth putting on the board, because the choice is the unit: keep the time and use the past simple, or keep the present perfect and lose the time. You cannot have both, and that is the single most useful sentence to say out loud in this lesson.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** The sentence that matters is **"appointments are under consideration"** — Maysoun says it is the only sentence on the page that is about whether she has a job in September. Hiba decides to write to the paper, as a reader, and ask **one** question: who put fourteen thousand books back on the shelves, and have they been appointed?'));
out.push(NOTE('Three things in this track are the lesson and belong on the board: the **passive with nobody in it** (_has been returned_ — by whom?), the **official phrase that means nothing has been decided** (_under consideration_), and the **list of what the report does not say**, which is where the real news is.'));
out.push(S('Stage 3 · Practise (sample – Report A, the bus route, explained without showing it)'));
out.push(SAMPLE([
  '_Five paragraphs, and two of them are yours. Let me do the three that are not._',
  '_Paragraph 1 is just the date — the route changes from the first of June. Paragraph 2 says the change is "expected to reduce journey times", which means nobody has measured anything. Paragraph 4 says "alternative provision is under consideration" — nothing decided and nothing refused._',
  '_Yours is paragraph 3: two stops have been removed, at Baramkeh and at the hospital. That is the whole report._',
  '_And paragraph 5 is the one you would have missed: the change has not been advertised on the buses. On the first of June people will stand at a stop that is not there._',
  '**B:** My mother goes to the hospital twice a month. — **A:** Then paragraph 3 is yours, and the question is what replaces that stop. **C:** What would you ask? — **A:** On what date will the removal of the hospital stop be put on the buses themselves?',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Mine: the two removed stops. · The phrase that means nothing has been decided: "alternative provision is under consideration". · The question: on what date will it be put on the buses?_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It is the fee letter from the centre. Six paragraphs, two are mine; not mine are new students\' registration, the business course and the paragraph about teachers\' certificates._',
  '_Mine, and it is the whole letter: fees for continuing students are "unchanged at present" — and "at present" is not a promise about September._',
  '_And the threat: a class with fewer than eight students "may be merged". Mine is eleven and two people have stopped coming._',
  '**A:** Which is the whole letter? — **B:** "Unchanged at present." **A:** What does it not say? — **B:** What happens in September, who decides, or by when you would be told. **A:** What would you ask? — **B:** By what date will continuing students be told the September fee?',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Omar explained the report about the bus route. Five paragraphs and two of them are mine. The number 7 has been changed from the first of June, and two stops have been removed — one is the hospital, which is the one that matters, because my mother goes there twice a month and cannot walk from the next stop. The municipality says the change is "expected to reduce journey times", which is the word that tells you nobody has measured it, and a spokesman said "alternative provision is under consideration", which means nothing has been decided and nothing refused. The last paragraph is the one I would have missed: the change has not been advertised on the buses, so on the first of June people will stand at a stop that is not there. So I decided I would ask one question: on what date will the removal of the hospital stop be put on the buses themselves?']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The report says the children\'s room opens later this year. → ✓ it says it is **expected** to open.   ✗ They have returned the books. → ✓ the report says the collection **has been returned** — and does not say by whom.   ✗ Under consideration means they have refused. → ✓ it means **nothing has been decided and nothing has been refused**.   ✗ It says the losses were limited. → ✓ a **spokesman said** losses were "limited" — the paper has not checked it.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 4'));
out.push(A('**1 A** asked   **2 C** never   **3 B** with   **4 B** left   **5 C** according to   **6 A** has'));
out.push(NOTE('**1** is Unit 22 coming back: _ask somebody **to**_, which _said_ and _told_ cannot take. **3** is the only item that is not a tense: _enough to open **with**_, and students choose _yet_ because the unit is full of it. **4** is the consistency test from 23.3 — the sentence is already in the past simple and must stay there. **6** needs _has_ because the subject is _she_.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'There are **seven** paragraphs and **three** of them matter to **Maysoun**.',
  '**The news is:** they have **reopened the Mezzeh library** after **eleven** years. It **opened** in 1962 and **closed** in 2013.',
  '**The words to notice:** the repairs are "**substantially complete**" and the children\'s room is "**expected to open later in the year**".',
  '**What it does not say:** **what the work cost**, **who carried it out**, and **who put the books back on the shelves**.',
  '**The sentence that matters is:** "**appointments are under consideration**", which means **nothing has been decided and nothing has been refused**.',
  'If you go: **bring your identity card the first time** and **go before two or after four, any day but Friday**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (48 words)**',
  'Hi Tom! They\'ve reopened our library — it\'s been shut for eleven years. It opened again on 4 May and one woman put fourteen thousand books back on the shelves herself. If you come, bring your passport the first time, and go at four o\'clock for the light on the stairs.',
]));
out.push(SAMPLE([
  '**Weaker sample (29 words) – why it only just passes**',
  'Hi. They have open the library in May. Is very nice and old building. You must bring passport. Come and see it.',
  '_All three content points are there and it is over twenty-five words, so it passes. But **have open** needs **opened**; **in May** cannot sit in a present perfect, so it is either _they opened it in May_ or _they have opened the library_; **is very nice** needs **it is**; **bring passport** needs **your**. The weakest content point is the second: "in May" is the only detail, and the task asks for when **and** a detail._',
]));
out.push(S('Unit 23 check · A  Grammar and vocabulary'));
out.push(A('**1 a** have opened   **2 b** opened   **3 b** already   **4 c** yet   **5 b** According to   **6 b** to   **7 a** Has   **8 b** Did'));
out.push(S('Unit 23 check · B  Listening (Track 23.14)'));
out.push(A('**1 B** (Maysoun – has put eleven years of books back on the shelves)   **2 A** (Omar – has sold something he made for the first time)   **3 C** (Hiba – a place on a course, and her mother does not know)   **4 D** (Lina – taking over somebody else\'s job in June)   **5 E** (Nour – a fortnight of decisions, and one thing she got wrong)'));
out.push(A('The two extra letters are **F** (given an office in another city — that is Rana, who is in the story and not on the list) and **G** (has stopped asking a question nobody will answer).'));
out.push(NOTE('**G** is the strongest distractor and the most interesting one: it is true of Maysoun, who has stopped asking who paid for the paint — but it is in the Student\'s Book, not in this script, and the script is what is being tested. Worth saying so after the check, because the students who chose it were reading well.'));
out.push(S('Unit 23 check · C  Writing (sample, 94 words)'));
out.push(SAMPLE(['They have opened a bakery where the shoe shop was, at the bottom of our street. It opened on the first of June. My cousin took the shop in January and the queue on the first morning went to the corner and he sold out by ten. I heard it from him, not from anybody else, which for once makes me the first person in the chain. If you want bread on a Friday, go before eight; according to him he will not be baking twice on Fridays until he has somebody to help.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line to carry forward is the second — **keeping finished times out of present perfect sentences** — because it is the error a reader notices immediately and the one that survives into B1 if it is not fixed here. Ten oral prompts at the start of each lesson for a fortnight, and it goes.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 23 was about what **has** happened. Unit 24 is the last unit of A2: the three futures side by side, _how long have you been…?_, hopes and worries, and saying goodbye to a room you have been in for a year.',
  'Two things to have ready. The students need their **"not yet" list** from 23.2. And you need **the envelopes from Unit 13** — the predictions the class wrote for themselves in the first week of this book. Do not say what is in them before 24.1.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 23 · Answer Key');
