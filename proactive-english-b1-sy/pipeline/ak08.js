// Proactive English B1 · Syria Edition · Book 1 · Unit 8 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 8  Advice and Hypotheses — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One grammatical form, six uses.** _If_ + past simple, _would_ + verb — and the past form marks the sentence as **not real**, not as past. That is the whole of 8.1 to 8.4, and the rest of the unit is about what you do with it: softening advice upwards in 8.5, writing to a stranger in 8.6, and weighing two options in 8.7.',
  '**The real subject is why advice fails.** 8.1 says it: advice that cannot finish the sentence _if I were you_ is an opinion about somebody else\'s life. Samira\'s eight months, Jad\'s wrong tense, Fares\' one day in June and Lubna\'s two years are four versions of the same finding.',
  '**It runs on the Unit 7 homework** — one piece of advice you were given and did not take, and one you gave that was not taken. Both columns go on the board in 8.1 and the right-hand column is the material for Lesson B. Collect it.',
  '**Two threads close here.** Lubna\'s letter from 6.3 is answered in 8.4, with a condition that has been available for two years. And Fares\' one day in June, won in the 6.5 homework, is prepared in 8.5 and weighed in 8.7.',
], C.lblue, C.navy));

// ===================== 8.1 =====================
out.push(pb());
out.push(h2('8.1  If I were you'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The right-hand column is always longer and the answer to the question is almost always **none** — nobody\'s advice began _if I were you_. Say the count and move on; the dialogue does the rest.'));
out.push(A('**b** Advice: **1** _if I were you_, **4** _why don\'t you_, **5** _I would_. A judgement from outside: **2** _you should_. Not advice at all: **3** _you have to_ — an obligation with nobody obliging anybody, which the class met as a fault in 6.1.'));
out.push(A('Item 2 is worth a minute. _You should_ is not wrong and is not an instruction, but it places the speaker outside the situation, passing a verdict. Students have usually been taught that _should_ is **the** advice word; the cycle\'s point is that _I\'d_ is the advice word and _should_ is the verdict word.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – it is an instruction in a softer voice. _(Accept: most advice is an opinion delivered from outside.)_'));
out.push(A('**b** **1** She told her sister to leave the job at the clinic — for eight months, every week. Her sister did not leave, they did not speak properly for a year, and she left eleven months later and now says she should have gone when Samira said.   **2** They oblige you to say out loud that you are imagining being in the other person\'s position — so they oblige you to have thought about the rent.'));
out.push(NOTE('The hardest thing in the dialogue is that **the advice was right**. Samira is not being corrected about the content; she is being shown that correct content delivered from outside somebody\'s life is not advice and will not be taken. Students want this cycle to be about being wrong, and it is not.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _You have to leave that job._ → _If I were you I\'d leave in the spring, not now._ Had to think about: what she lives on between the two jobs.',
  '**2** _You should tell him._ → _If I were you I\'d tell him on a Friday, at his place, not at work._ Had to think about: that they work in the same building and she cannot leave the room afterwards.',
  '**3** _You must complain._ → _If I were you I\'d put it in writing to one named person and keep a copy._ Had to think about: that a verbal complaint is deniable and she is on a temporary contract.',
  '**4** _You have to ask for a rise._ → _If I were you I\'d ask in the week after the audit, when the figures are on his desk._ Had to think about: that he has refused two people this year.',
  '**5** _You should go back and study._ → _If I were you I\'d do one evening a week for a term before giving anything up._ Had to think about: three children and a job he cannot replace.',
]));
out.push(A('The pattern in all five: the real advice has a **time** or a **sequence** in it, which the instruction did not. You cannot produce a time without having thought about the person\'s circumstances, which is why the frame works.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I have had a key for two years that I was never given.',
  '**B:** If I were you, I\'d put it in an envelope and give it back before I asked for anything.',
  '**A:** What did you have to think about to say that?',
  '**B:** That you have nineteen drawings you cannot explain the origin of, and that giving the key back first is the only way the drawings stop being a problem.',
  '**A:** That is the thing, yes. Nobody has said that to me.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Count the pieces of advice that came with a real thing attached. In a first run it is about half. The ones without a thing attached are not unkind or stupid — they are simply opinions, and the person receiving them can hear the difference immediately, which is the whole finding of the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"If I were you I would leave that job — in the spring, after the quarter\'s rent is paid, and I would ask three people in December and not one." The thing I would have to live with is being the person who left in a year when nobody leaves anything._',
  '**b** _It is not the same advice. The first version was "go". This one has a December and a spring in it, and I notice that I cannot say it in thirty seconds, which is why I said the other one thirty times._',
]));
out.push(A('Answer **b** arrives in some form in nearly every class: the real version takes longer to say, so people say the short one, repeatedly, instead of the long one once. That is a practical finding and not a moral one, and it is worth saying in exactly those terms.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samira said her column is longer on the right: she has given a great deal of advice that nobody took and has taken almost none. Hers is that she told her sister in 2022 to leave the job at the clinic — for eight months, every week — and her sister did not leave, and they did not speak properly for a year. Omar asked whether the advice was wrong, and she said the advice was right: her sister left eleven months later and says now that she should have gone when Samira said it. And she says she would give the same advice again and give it the same way, which is the part she has been sitting there thinking about. The way was "you have to leave that job", about thirty times, and she never once said "if I were you". She stood outside the situation and told her what to do, and her sister had three children and a rent and Samira had none of those things. Ms Huda said those four words are not politeness: they make you say out loud that you are imagining being in their position, and they oblige you to have thought about the rent. Lubna asked whether it is just a softer way of saying the same thing, and Ms Huda said no — it is a harder way, for the person giving it: if you cannot honestly finish the sentence, you have an opinion about somebody else\'s life. Samira said then she had an opinion for eight months and called it advice, and her sister knew.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If I was you → ✓ If I **were** you.   ✗ If I were you, I will wait. → ✓ I **would** wait.   ✗ If I would be you → ✓ If I **were** you.   ✗ I\'d to wait → ✓ I\'d **wait**.   ✗ _You have to_ offered as advice → ✓ _I\'d_ + a time or a sequence.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Thirty times.'));
out.push(A('**2** Where her sister was going to live in the December.'));
out.push(A('**3** _It has a December in it._'));
out.push(A('_It was a correct opinion delivered from a flat with one person in it_ is the sentence to read aloud twice. It concedes that the advice was right and refuses the credit for it in the same clause, and that is a genuinely difficult thing to do in any language. It is also the model for the whole of Lesson B.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO MY BROTHER, TWO YEARS LATE** · M. Hariri · not sent',
  'You took the shop in Jaramana in 2023 and it closed in fourteen months, and you have said twice that I told you not to.',
  'I said "do not take that shop" about twenty times. I never said "if I were me, with your rent and two children and no trade of my own, I would not take it" — because if I had tried to say that sentence I would have had to work out what else you were supposed to do that spring, and I never did work it out, not once.',
  'The advice was right and it was not advice. It was a correct opinion from a man who already had a counter.',
  '**What I would say now.** If I were you I would have taken that shop, because there was nothing else, and I would have taken it for six months on a written agreement instead of two years, and I would have asked Abu Samir what the previous man paid before I signed anything, because he knew and he would have told you.',
  'That is almost the opposite advice. It has a six months and a question in it. Mine had neither.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**TO MYSELF AT TWENTY-FIVE** · S. Dibo · April',
  'You take the first post you are offered, at the school you went to yourself, four streets from your mother, and you stay for twenty-four years. Everybody tells you afterwards that you should have gone somewhere.',
  'Nobody ever said "if I were you". If anybody had, they would have had to work out what your mother did in 2002 on the days she could not get out of the chair, and who was going to be in that house at four o\'clock, and none of the people who told you to go somewhere ever asked either of those questions.',
  'The advice was right and it was not advice. It was a correct opinion about a woman they had decided was timid.',
  '**What I would say to you now.** Take the post. Take it for three years and not for life, and write the three years down somewhere where you will see it in 2005. Learn one thing that is not mathematics in those three years — an hour a week, at night, after she is asleep — and do not tell anybody you are doing it, because the telling is what makes it a thing you can fail at.',
  'That is the same advice everybody gave me and it has a 2005 in it and an hour a week. Mine came without either, and I was not timid. I was the only person in that house.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I was not timid. I was the only person in that house." That is the whole page and it is in the last line._   ✓ _"the telling is what makes it a thing you can fail at" — that is advice to yourself at twenty-five from somebody at forty-eight, and it is the one line that is not about 2002._   ? _Where was your mother going to be at four o\'clock?_ — the page answers it, which is why the advice works.'));
out.push(S('Stage 7R · Share'));
out.push(A('Two or three letters will be sent. Then the count that ends the cycle: how many pieces of advice in the right-hand column had a December in them when they were first given? None. Say the number and stop.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I said it to Hassan on Tuesday. "If I were you I would ask the landlord for a written agreement before you move the family in May, because if he is the kind of man who agrees things in a doorway he is the kind of man who forgets them in a doorway, and you have the children in a school that you cannot change in September." He said nobody had mentioned September. He has been talking about that flat for six weeks and four of us have given him advice and none of us had thought about the school.']));

// ===================== 8.2 =====================
out.push(pb());
out.push(h2('8.2  If they changed the rota'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Crossing out the sentences that are really about the future is the exercise: _if I get the money, I will buy it_ is a first conditional and belongs in a different cycle. Keep six and keep them unreal.'));
out.push(A('**b** Real: **1**, **4** _(first conditional — likely)_. Not real: **2**, **3** _(second conditional — not the case now)_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – imagining being twenty-five now.'));
out.push(A('**b** **1** She would not take the first post she was offered, four streets from her mother; she would go somewhere she did not know for two years and learn one thing that was not mathematics.   **2** That it was in the wrong tense: he said _if I had done that_ about something he is nineteen and can still do, and he did not notice until it was out of his mouth.'));
out.push(NOTE('Jad\'s mistake is the most useful thing in the unit and it is a **grammar** mistake with a life-sized consequence: _if I had done_ closes a door that _if I did_ leaves open. Write both on the board. Then ask the room the question Ms Huda asks, and ask it again in 8.7 and again in Unit 12: _is this a past I cannot reach, or a present I am pretending is a past?_'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _If I lived in another city, I would have to start again._ — a present being treated as a past for most people under thirty-five, and a past that cannot be reached for most people over fifty with a family.',
  '**2** _If I learnt something new, I would have an hour less in the evening._ — present. Everybody in the room is in the middle of proving it.',
  '**3** _If I asked for more money, he would say no._ — present, and the _would_ is doing a lot of work for something nobody has tested.',
  '**4** _If I changed my hours, the afternoons would be mine._ — present, and usually one conversation away.',
  '**5** _If I studied again, I would be the oldest person in the room._ — present, and the sentence is not about studying.',
]));
out.push(A('Items 3 and 5 are the two to pursue. In **3** the student has predicted somebody else\'s answer and is treating the prediction as a fact; in **5** the reason given is not the reason. Both are the shape the cycle is looking for.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Speaking English outside this room.',
  '**B:** If I spoke English outside this room, I would find out whether twenty-six years of reading is worth anything.',
  '**A:** Is that a past you cannot reach?',
  '**B:** No. It is a present. There is a pharmacy on the corner of my street.',
  '**A:** So what would you do on Thursday?',
  '**B:** Ask the man on the corner one question in English about something I actually need.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Five or six of the eight turn out to be presents, and all five or six have a Thursday in them. The two or three genuine closed pasts are nearly always about **age or a death**, and they should be left alone: the cycle is not an argument that everything is possible, and a class that is told it is will stop believing the rest of the unit.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Four: if I were twenty-five (closed), if I had taken the Aleppo post in 2004 (closed), if I spoke one more language (present), if I asked Mr Fouad to show me the rest of the machine (present — and he is three metres away)._',
  '**b** _From the second pile: ask Mr Fouad for a second forty minutes, on Monday, about going backwards through the pages._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked Umm Kinan to imagine being twenty-five now. She said that if she were twenty-five now she would not do what she did, and that is not the same as saying she was wrong at twenty-five. At twenty-five she took the first teaching post she was offered, in the school she had been to herself, four streets from her mother. If she were twenty-five now she would go somewhere she did not know for two years, and she would learn one thing that was not mathematics — a language, probably, which is why she is in this room at forty-eight. Jad said that if he had done that at nineteen he would not be at university at all, and Umm Kinan said he is nineteen and can do it — and he said that is true: he said "if I had done that" and he is still doing it, and his sentence was in the wrong tense and he did not notice until it was out of his mouth. Ms Huda said that is the most useful mistake anybody has made this evening: if I had done is about a past that is closed, and if I did is about now, and now is open — Jad put a door between himself and a thing he could do on Thursday, with one tense. Umm Kinan said hers is a past she cannot reach, because she is forty-eight and not going to move to Aleppo; and that the language is the present she was pretending was a past, and she started it in September.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If they would change the rota → ✓ If they **changed** it.   ✗ If I would have a car, I would drive → ✓ If I **had** a car.   ✗ If I will have time, I would do it → ✓ If I **had** time, I would do it. / If I **have** time, I **will** do it.   ✗ _if I had done_ about something still open → ✓ _if I **did**_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A way of being busy.'));
out.push(A('**2** One sentence typed into a box.'));
out.push(A('**3** The grammar — _and the grammar is doing something to me_.'));
out.push(A('The structure of this page is worth copying and is almost mechanical: three closed sentences, three open ones, and one paragraph noticing that they are in different tenses. Any student can write it, and almost every student discovers at least one item that has been sitting in the wrong list for years. It is the single most portable page in the unit.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO LISTS** · R. Barakat',
  '**Things that would be different if a past had been different.** If that sister had read the piece of paper I gave her in 2015, I would have asked for things in writing for the last eleven years. If I had not been nineteen and new that week, I would have asked somebody else. If my mother had not been discharged on the Wednesday, I would not have needed the Thursday at all.',
  'Those three are closed. I have been over the corridor in 2015 more times than I can count, and I now think the going-over was a way of not asking anybody for anything in 2024.',
  '**Things that would be different if a present were different.** If I asked the other night nurse one question, I would know whether her errors are on fourth and fifth nights too. If I asked the workshop directly, I would know where the trolley is. If I put the three-night case in writing, I would find out what this ward actually says no to.',
  'All three are this week. The first is one sentence at a handover. The second is a telephone number I have had since January. The third is written and in my bag.',
  '**What I notice.** My closed list is about one woman in one corridor and my open list is about three conversations I have not had. I have been treating the three conversations as if they were the corridor.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**TWO LISTS, AND ONE OF THEM HAS A MONDAY IN IT** · B. Tahhan',
  '**If a past had been different.** If I had been taught to read a contract at twenty-two, I would not have signed the 1998 lease as it stands. If the war had not come when it came, I would have had four machines instead of three. If I had told my wife about the four years earlier, she would not have found out from her brother.',
  'Those are closed, and I have spent a good deal of nineteen years in them, mostly at about one in the morning.',
  '**If a present were different.** If I asked the two suppliers for terms, I would know in a fortnight whether nineteen years of paying on time is worth anything. If I wrote the eleven men down somewhere, I would have a page about myself instead of a feeling. If I told Hassan that the floor was never his job, he would stop getting up at half past six.',
  'The first is two telephone calls. The second is an evening. The third is eleven words and I have had them in my head since February.',
  '**What I notice.** Every item on my second list is a sentence I have not said to somebody who is in the building with me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Every item on my second list is a sentence I have not said to somebody who is in the building with me." That is the finding and it is also mine._   ✓ _"If the war had not come when it came" is on the closed list and it is doing the work of three different items; it hides the two about money._   ? _Which day?_ — February for the eleven words, and the page does not give a day.'));
out.push(S('Stage 7R · Share'));
out.push(A('Let each person accept or refuse the move. Refusals are real answers and should be respected: a forty-eight-year-old who declines to move _live in another city_ onto the open list is not in denial, and the cycle is not an argument that everything is possible.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I typed it on Sunday: "I am nineteen and I am in Damascus and I have been answering these questions since I was seventeen." Four people replied. One of them said he had assumed I was in my thirties and working for a manufacturer. Two of them asked how I had learnt it. And one of them, who has answered more questions than I have, said he was sixteen when he started and had never said so either. One sentence in a box, and it took me two years.']));

// ===================== 8.3 =====================
out.push(pb());
out.push(h2('8.3  Would, might, could'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The honest one is nearly always _might_ and the one for a letter is the same word, which surprises a class that expects formality to require strength.'));
out.push(A('**b** Strongest to weakest: **1** _would_ · **4** _would probably_ · **5** _might well_ · **2** _might_ · **3** _could_. _(Accept 5 and 2 either way round.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – might.'));
out.push(A('**b** **1** Because her evidence — seven errors out of 118 shifts, one nurse, recorded by herself — does not carry it; and if she writes _would_ and one error appears on a second night in the trial, the whole letter is finished.   **2** That it sounds weaker. _(And she answers that it sounds weaker and is stronger.)_'));
out.push(NOTE('**Never use a word that is bigger than your evidence.** It is the rule of the cycle and it is a direct continuation of 7.6: the modal is the only thing in a letter nobody can check, so it is the only thing they can refuse. Students want to be forceful; this is the one lesson in the book that tells them force loses.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 If the handle were replaced** — _the window **would** shut_. Mechanical, no second condition: _would_ is right.',
  '**2 If the box on the form were bigger** — _drivers **might** write a real reason_. A person is involved, so _might_; _would_ claims that the box was the only thing stopping them, and it was not.',
  '**3 If somebody rang him in week one** — _he **might** come back_. Nobody knows, and the honest word is the middle one.',
  '**4 If the model were withdrawn** — _the fifteen **would** stop coming in_. Mechanical again, as far as the counter is concerned.',
  '**5 If I spoke to one stranger a week** — _I **would** have spoken to about fifty by next April_. That is arithmetic, not a prediction, so _would_ is right — and notice how rare that is.',
]));
out.push(A('The generalisation worth drawing: _would_ belongs to arithmetic and to machines; _might_ belongs to everything with a person in it. That is 7.5 restated in a different grammar and the class should be the ones to say so.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** If the reason box were four lines deep…',
  '**B:** …it would get a real reason. …it might get a real reason. …it could get a real reason.',
  '**A:** Which one?',
  '**B:** Might. My evidence is ninety forms with four words in them, all written by me. That tells you the box is too small. It does not tell you that anybody else would fill a bigger one.',
  '**A:** Is the word bigger than the evidence?',
  '**B:** Not now. It was when I said "would".',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The _would_ answers are the mechanical conditions — a handle, a light, a withdrawal — and the _might_ answers all have a person in them. Let the class find that and then name it once: it is 7.5 arriving in the result clause.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _If the handle were replaced, the window would shut — and two children would be able to write in January. The second half is a "might": I have two children and one January and no thermometer._',
  '**b** _The word I have been using in my head for six years is "would". Six written notes, and every one of them said the room would be warm._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has rewritten the last sentence of her rota letter four times and the only thing that changes is one word. If the block were set at three nights, the errors would stop — might move — could move. Fares said the first is strongest and she should use it, and she said the first is the one that loses: seven errors on fourth and fifth nights out of a hundred and eighteen shifts, from one nurse, recorded by herself, does not carry the word "would" — and if she writes would and then there is one error on a second night in the trial, the whole letter is finished and so is she. Could is too weak, because it means it is possible, which is true of anything, and a sentence that commits her to nothing is not worth a page of evidence. So: might. It says she thinks it likely, is not certain, and has said why in the paragraph above. Fares said it sounds weaker, and she said it sounds weaker and is stronger, because it is the only one of the three that matches her evidence: the manager will read the number, then the limit, then the word, and if the word is bigger than the number she will stop at the word. Never use a word that is bigger than your evidence — it is the only thing in the letter they cannot check, so it is the only thing they can refuse.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ might to move → ✓ might **move**.   ✗ would moving → ✓ would **move**.   ✗ _would_ with one person\'s notebook behind it → ✓ **might**.   ✗ _could_ in a letter with four paragraphs of evidence → ✓ **might**: _could_ wastes the evidence.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Version 1 promises an outcome she cannot deliver out of one notebook, and the first error on a second night ends the argument. Version 2 uses a word that is true of everything, so the four paragraphs above it are wasted.'));
out.push(A('**2** What would count as the change working, what would count as it failing, and **who will say so** — and when.'));
out.push(A('**3** A modal on its own tells the reader how sure you are; version 4 tells them how they will **know whether you were right**.'));
out.push(NOTE('Version 4 is the most advanced single sentence in the first half of this book, and it is made entirely of things the class has already been taught: the unreal condition from 8.2, the honest modal from 8.3, the limit from 7.6 and the named reporter from 6.6. Point out the four sources; students who see a hard sentence decompose into four taught pieces write better for the rest of the course.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Version 1.** If the handle were replaced, Room 9 would be warm in January.',
  '**Version 2.** …Room 9 could be warmer.',
  '**Version 3.** …Room 9 might be warmer.',
  '**Version 4, which is the one I have sent.** If the handle were replaced before the end of October, the two children under that window might be able to write without gloves in January, and I would expect the room to stay colder than the north side whatever happens. If they are still in gloves in January, the handle was not the problem and I will say so at the February meeting and ask you to look at the casement instead.',
  '**Why version 1 fails.** It promises a warm room, and the room will not be warm: it is a 1962 casement on the south-west corner and it has never been warm.',
  '**Why version 2 fails.** _Could be warmer_ is true of every room in Syria in January.',
  '**Why version 4 is not version 3 with more words.** It names the date, the two children, what would count as failure, and who will say so. It also concedes the thing a reader would otherwise use against me, which is that the room will still be cold.',
]));
out.push(S('Stage 7 · Write freely (sample, 169 words)'));
out.push(SAMPLE([
  '**ONE SENTENCE, FOUR TIMES** · M. Hariri',
  '**Version 1.** If the model were withdrawn from both shops, these repairs would stop.',
  '**Version 2.** …these repairs could stop.',
  '**Version 3.** …these repairs might stop coming in.',
  '**Version 4, which is the one in the letter.** If the model were withdrawn from both shops tomorrow, the repairs would not stop — there are two or three years of them already sold — but the number arriving each month might begin to fall from about the end of this year, and I would expect to see the last of them in 2029. If I am still seeing four a month in 2028, the two shops were not the only source and I will write and say so.',
  '**Why version 1 fails.** It is not true. Withdrawing a telephone from a window does nothing about the ones in people\'s pockets, and the manager knows that better than I do.',
  '**Why version 2 fails.** It asks a man to withdraw a line of stock on the strength of the word "could".',
  '**Why version 4 is not version 3 with more words.** It says what will **not** happen, which is the part he will check first, and it gives a date in 2028 by which I will have been proved wrong.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the repairs would not stop — there are two or three years of them already sold". You have told him the thing that makes your own request less attractive, and that is why he will believe the rest._   ✓ _"might begin to fall from about the end of this year" has two hedges; one is enough._   ? _Who is going to tell me, and when?_ — 2028, and the page says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Mostly _would_ last month, mostly _might_ now. One sentence to close: the modal is the only thing in the letter nobody can check, so it is the only thing they can refuse.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The sentence: _if the block were set at three nights for three months, the errors might move to the second and third nights or disappear, and I would expect some._ What would count as my being wrong: an error on a first, second or third night of a three-night block during the trial. If that happens I will write it in the ward book on the night, say so at the next meeting, and not argue that it was the trolley.']));

// ===================== 8.4 =====================
out.push(pb());
out.push(h2('8.4  Unless, as long as, provided that'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Doing each one twice — once with _as long as_ and once with _unless_ — is the whole exercise, because the class hears the same rule become two different places.'));
out.push(A('**b** **1** **not** the same — opposite. **2** the same. **3** the same. **4** the same.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – yes with a condition.'));
out.push(A('**b** **1** That a technician is on site and knows she is there. A technician has been on site until eight every evening for as long as she has been in the department, so the condition has been available the whole time.   **2** That it means _if not_, so it puts the refusal first and the way in second — while _as long as_ and _provided that_ put the way in first. The rule is identical and the sentence tells you what the writer wanted you to feel.'));
out.push(NOTE('_The condition has been available the whole time_ is the sentence this four-unit thread was built for. Lubna broke a rule twice a week for two years, and the thing that would have made it allowed was eleven seconds of telling a man thirty feet away. Hold the moment; do not explain it. Then 8.4 Stage 7R asks the room for its own version, and there is always one.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _You may use the room after six as long as you lock it._ / _You may not use the room after six unless you lock it._',
  '**2** _I will take the extra shift provided that I am not on the fifth night of a block._ / _I will not take it unless I am off a block._',
  '**3** _You can have the key as long as you sign for it._ / _You cannot have the key unless you sign for it._',
  '**4** _The work can be sub-contracted provided that we are told in writing._ / _The work may not be sub-contracted unless we are told in writing._',
  '**5** _I will send the next eleven dates as long as you tell me it is useful._ / _I will not send them unless you tell me it is useful._',
]));
out.push(A('Read any pair aloud one after the other and the class hears it: the _unless_ version is the one that goes on a door where somebody is afraid of being blamed. The rules are identical.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Could I use a room after six?',
  '**B:** Yes, as long as somebody on the staff knows you are in the building.',
  '**A:** So: I may not use a room after six unless somebody on the staff knows I am in the building.',
  '**B:** Same rule.',
  '**A:** Which one goes on the door?',
  '**B:** The first one, if you want it used. The second one, if you want to be able to say afterwards that you told them.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The _unless_ version goes on the door where somebody fears being blamed; the _as long as_ version where somebody wants the thing to happen. Students recognise both buildings instantly, and the observation transfers to every notice, tenancy and contract they will read.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"Yes, as long as you tell the technician on duty and write your name and the time on the board inside the door." The condition has been available for two years and I did not know what it was, because I never asked._',
  '**b** _It costs eleven seconds. He is in the room with the lathe and I walk past the door._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna has an answer. It came on Sunday, it is eleven lines, and the useful part is one clause: the department has no objection to her using the workshop after six, provided that a technician is on site and knows she is there. Rasha asked whether one is, and she said a technician is on site until eight every evening and has been for as long as she has been there — the condition has been available the whole time. She has been going in alone for two years, and the thing that would have made it allowed was telling a man thirty feet away that she was in the building. Two years, and the condition costs eleven seconds. Ms Huda asked her to say it with unless, and she said: you may not use the workshop after six unless a technician is on site and knows you are there — the same rule, and it feels completely different. Ms Huda said that is because unless means if not, so it puts the refusal first and the way in second, while as long as and provided that put the way in first; the rule is identical and the sentence tells you what the writer wanted you to feel. Lubna said hers was written with provided that — somebody wanted her to be able to say yes.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ unless he does not ask → ✓ **unless he asks** / **if he does not ask**. _(The commonest error of the cycle: unless already contains the negative.)_   ✗ as long as he will be there → ✓ as long as he **is** there.   ✗ provided that if → ✓ one or the other.   ✗ Unless you lock it, you may use the room. → the two halves have been swapped; _unless_ attaches to the refusal.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A note on the board inside the door, with her name and the time she came in, which the technician can see from the lathe.'));
out.push(A('**2** One sentence spoken to a man thirty feet from the bench — and she did not say it for two years.'));
out.push(A('**3** There are four students in the year below who use the workshop in the evenings with borrowed keys. She suggests printing the condition on the door — _after 18.00: tell the technician_ — and says it would end most of it, not all, because some of them will not ask and she was one of them.'));
out.push(A('The four students are the reason the letter is worth sending, and they are introduced in the second half of the page rather than the first. A letter about yourself gets you forgiven; a letter that gives the reader a fact about four other people gets a notice printed. Teach the ordering: your own case first, briefly, and then the thing they can use.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of maintenance · **Subject:** Your reply — accepted, and one thing you should know',
  'Dear Sir,',
  'Thank you. I accept the condition and I will keep it as written: I will not store teaching materials in the stair cupboard unless the caretaker has a list of what is in it. I have written the list — forty-one boxes, numbered, with my name and room on the first sheet — and I will give him a copy and keep one on the inside of the door.',
  'One thing about the condition. The caretaker has been in that building since 2022 and has never been asked for a list of anything. The condition you have set has therefore been available on every one of the four years in which I was using that cupboard without permission. What stood between me and permission was a conversation at a door, and I did not have it.',
  'I am telling you because there are at least three other cupboards on that corridor with somebody\'s teaching materials in them, and I know whose. If the condition were written on the inside of each cupboard door — _contents to be listed with the caretaker_ — I think most of it would come out into the open. Not all. Two of those three will not ask, and I was one of them for four years.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**To:** Dar al-Kutub Press · **Subject:** Condition 7 — accepted as written, and one thing you should know',
  'Dear Sir,',
  'I accept the eleven conditions. On condition 7 I have done what the wording allows: authorisation to leave the premises during working hours is given by me, in writing, standing, for all four of my staff, and the note is on the wall beside your page. I will keep a dated copy.',
  'One thing you should know, and it is about the wording rather than the rule.',
  'Condition 7 does not say from whom written authorisation must come. I am the contractor, so I have given it. That means condition 7 is met in this shop and has cost nobody anything — and it also means that any contractor who reads it the way I first read it will spend four months telling men to ask permission to go and pray, for nothing.',
  'I read it four times before I saw what was not in it, and a nurse in an evening class saw it in about nine seconds.',
  'If the condition said _authorisation by the contractor_, or named a post, it would be the same rule and nobody would read it the hard way. That is the only suggestion in this letter, and I am not asking for an answer.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"any contractor who reads it the way I first read it will spend four months telling men to ask permission to go and pray, for nothing." You have made it their problem without making it an accusation._   ✓ _"and a nurse in an evening class saw it in about nine seconds" is a very good line and it is the one line in the letter that is about you; it may cost you the paragraph._   ? _How long has the condition been available?_ — for ever, and the letter says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost all of them were already available, and the spans run from months to years. The sentence that ends the cycle is the one nobody expects: **nobody in this room has ever been told no.** They have been told nothing, and have read it as no.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['_As long as_: I may take a telephone home overnight to finish a repair as long as it is written on the ticket and the customer has been told. _Unless_: I may not take a telephone home unless it is written on the ticket and the customer has been told. I would put the first one on the inside of my own shutter, because it is for me and I want to do it right. I would put the second one on the counter where a customer can read it, because then the customer knows there is a rule and that somebody can be held to it.']));

// ===================== 8.5 =====================
out.push(pb());
out.push(h2('8.5  You might want to'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The room stops at about the fifth, and that is the point: English has four or five genuine levels of softening and after that the sentence stops meaning anything — which is 6.5 arriving again from the advice side.'));
out.push(A('**b** Most to least direct: **3** _Ask them._ · **1** _You should ask them._ · **5** _You might want to ask them._ · **2** _It might be worth asking them._ · **4** _Have you thought about asking them?_ _(Accept 2 and 4 either way round; they are level.)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the training manager who has given him one day.'));
out.push(A('**b** **1** That two of the six hours should be done in a pharmacy, with him doing one visit while the twelve watch.   **2** Soft and **vague** is hiding; soft and **exact** is advice. The softening belongs in the frame; the content must get more specific, not less.'));
out.push(NOTE('_Soft and exact, never soft and vague_ is the sentence of the cycle and it surprises every class. Students believe that softening means saying less. It means saying the same thing in a frame that removes you from it — and the frame only works if the content is sharper than the criticism it replaces.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The training is in the wrong place._ → _It might be worth doing two of the six hours in a pharmacy, with one real visit._',
  '**2** _Your form is too small._ → _You might want to move the reason box to the back of the sheet and give it four lines._',
  '**3** _Nobody reads that notice._ → _It might be worth putting the one sentence that requires something at the top, on its own line._',
  '**4** _You are asking the wrong people._ → _It might be worth asking the two night staff as well; they are the ones who use the trolley._',
  '**5** _That rule cannot be kept._ → _It might be worth collecting the sheet off the bus at the end of the day rather than off the window at the start._',
]));
out.push(A('In every one of the five the soft version is **longer and more specific** than the criticism. That is the test: if the softened version is vaguer, the student has hidden instead of softening, and about half of them do on the first attempt.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** That form is too small to be any use.',
  '**B:** It might be worth moving the reason box to the back of the sheet and making it four lines deep.',
  '**A:** Is there any judgement left in that?',
  '**B:** No. I have not said the form is bad and I have not said who designed it.',
  '**A:** And if the answer is no?',
  '**B:** Then I write the reason on the back myself and attach it, which is what I did last week.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Mark whether the soft version is **more** specific. About half of first attempts are vaguer, and the diagnosis is always the same: the student has softened by removing the content instead of the judgement. Name it, and have them try again with the judgement removed and the content doubled.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _To the director: it might be worth printing the condition on the inside of the workshop door — "after 18.00: tell the technician" — in the same size as the existing notice. If the answer is no, I keep to the condition myself and say nothing._',
  '**b** _I am going to say it, to the head of department, on Thursday, after the fourth-year review, because he will be in a corridor and not behind a desk._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fares has one day in June teaching new representatives, and he has seen the plan: six hours, twelve people, a hotel room in Mezzeh, and no pharmacies. They are going to teach people how to talk to pharmacists in a room with no pharmacists in it, and everything he knows he learnt in forty minutes before shifts, standing outside. Rasha said so tell him, and he said the man has given him one day and he has been refused twice by that company — if he says "this plan is wrong", he is a man who was turned down telling a training manager how to train. Ms Huda said then do not say that: say the thing you actually want and leave the judgement out. He wants two of the six hours in a pharmacy, any pharmacy, walking in with the twelve of them and doing one visit while they watch. So: it might be worth doing two of the six hours in a pharmacy — I would do one visit and let them watch. Fares said that is softer than what he was going to say, and Ms Huda said it is softer and more specific, and those two usually go together: soft and vague is hiding, soft and exact is advice. "It might be worth" removes you from the sentence and leaves the suggestion standing on its own, where he can pick it up without agreeing that you were right. And if the answer is no, Fares does six hours in a hotel room, well, and says nothing — one day in June is not the hill.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ it might be worth to ask → ✓ it might be worth **asking**.   ✗ you might want ask → ✓ you might want **to** ask.   ✗ I would suggest to do → ✓ I would suggest **doing** / **that you do**.   ✗ _This is wrong, so it might be worth…_ → ✓ remove the judgement entirely.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Two of the six hours in a pharmacy instead of in the room — and it is about **where** rather than **what**.'));
out.push(A('**2** What to do with your hands while somebody reads a label, and what to say in the four seconds after a pharmacist says "not today".'));
out.push(A('**3** _That is not evidence of anything. It is just the only comparison I have._'));
out.push(A('The two unteachable things — the hands and the four seconds — are what make the suggestion impossible to refuse on the merits, because they are specific, true and nothing to do with the manager\'s plan being bad. Note also the structure: _one suggestion, and it is about where rather than what_ tells the reader the size of the thing before they read it, so nobody has to brace.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** the head of the mathematics department · **Subject:** The June examination week — one suggestion about the rooms',
  'Dear Sir,',
  'Thank you for the timetable. I have read it and I can do all four sessions.',
  'One suggestion, and it is about rooms rather than people. It might be worth putting the four candidates with reading difficulties in Room 2 rather than the hall. I would invigilate that room myself and I would not need anybody else in it.',
  'The reason I suggest it is not that the hall is wrong. It is that in the hall a candidate who wants a word read has to raise a hand in front of a hundred and ten people, and in six years I have never seen one do it.',
  'If that is difficult — and I can see two reasons it might be, including the second invigilator — the week works as it stands and I will do it as timetabled.',
  'One other thing, for your information rather than for action: of the eleven candidates I have had with reading difficulties since 2019, nine were in the hall and none of the nine asked for anything. The two who were in a small room both asked. That is two candidates and it is not evidence. It is the only comparison I have.',
]));
out.push(S('Stage 7 · Write freely (sample, 173 words)'));
out.push(SAMPLE([
  '**To:** the ward manager · **Subject:** The May rota — one suggestion about the order of the blocks',
  'Dear Madam,',
  'Thank you for the draft. The dates all work for me and I can cover the two Fridays.',
  'One suggestion, and it is about the order rather than the number. It might be worth putting the two three-night blocks at the start of each month rather than at the end. I would take either and it makes no difference to my own hours.',
  'The reason I suggest it is not that the current order is wrong. It is that the drug round at the end of a month is the round that follows the stock delivery, and a trolley that has just been restocked takes about fifteen minutes longer because nothing is where it was. At the moment that round always falls on a fifth night.',
  'If that is difficult — and I can see that it moves somebody else\'s weekend — the rota works as it stands and I will do it as drafted.',
  'One other thing, for information rather than action: of my seven recorded errors this year, three were on the night after a stock delivery. Three out of seven is not evidence of anything. It is the only pattern I have that is not about blocks.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"a trolley that has just been restocked takes about fifteen minutes longer because nothing is where it was." Nobody who has not done the job knows that, and it is the reason the suggestion will be taken._   ✓ _"It makes no difference to my own hours" is doing a lot of work and is slightly too keen; one clause of self-removal is enough._   ? _What happens if I say no?_ — the letter says, which is why it is a suggestion and not a request.'));
out.push(S('Stage 7R · Share'));
out.push(A('The last-month versions are shorter, blunter and every one contains a judgement. Then the question, and let the room answer it: which of the two would have been answered?'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Sent to the training manager on Monday: _One suggestion, and it is about where rather than what. It might be worth doing two of the six hours in a pharmacy — I would do one ordinary visit with the twelve of them standing where they can hear it. If that is difficult the day works as it stands._ She answered on Tuesday: "Which pharmacy, and will they mind?" That is not yes and it is not no. It is the first question of somebody who has already decided to try it.']));

// ===================== 8.6 =====================
out.push(pb());
out.push(h2('8.6  Advice to somebody you do not know'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The **stranger** answer is the longest in a first attempt, which is the wrong way round: distance makes students formal, and formality to somebody with a broken thing in front of them is the opposite of help.'));
out.push(A('**b** **2** _Do the small one first_ and **5** _Here is what I would check, in order_. The other three are about the writer: **1** and **3** ask the reader to manage a feeling, and **4** is a story about somebody else.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – answered strangers\' questions in English.'));
out.push(A('**b** **1** _Don\'t worry_, _I hope this helps_, and that he had the same problem — even when he did.   **2** That it is not what she expected from the boy in the room. _(And he answers: it is the only place he has ever been any good at anything.)_'));
out.push(NOTE('This cycle quietly reverses the class\'s view of Jad, and it does so with a number from Unit 3: six hundred and forty-one pieces of technical advice, in writing, in a foreign language, to adults who came back and said whether it worked. Ms Huda\'s last line is the one to read slowly, because it is true: there is nothing harder than that in this course, and he did not know it counted.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1 A printer making a noise on one side.** _Open it and look at the roller on the side the noise is on. Two minutes. If the roller has a flat spot you will feel it with a thumb. If it has not, stop and say so — a noise on one side with a good roller is not something I can help with._',
  '**2 A rule you cannot keep.** _Write down, in one line, what physically stops you keeping it — the distance, the missing shelf, the time. Ten minutes. Then send that one line to whoever wrote the rule and ask nothing. If they do not answer, keep the line; it is the whole of your case later._',
  '**3 Not being paid.** _Write the dates and the amounts in one column, today. Half an hour. Then ask once, in writing, to one named person, for the dates to be confirmed — not for the money. If you are not given the dates, that is your answer and you will need somebody who knows the law, which I do not._',
  '**4 Learning English at forty-eight.** _Do one hour a week for twelve weeks before you decide anything. Tell nobody. At twelve weeks count what you can do that you could not do in week one. If the answer is nothing, it is the wrong hour of the day; try a different one before you try a different decision._',
]));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** My screen separates at one corner. Is it worth mending?',
  '**B:** Look at the corner under a lamp first. Thirty seconds. If you can see brush marks in the glue, it is an assembly fault and it will come back unless the whole lower edge is sealed. If you cannot see brush marks it is a drop, and then mend it — it will not recur. I do not know whether this model is like that everywhere; I have only seen fifteen and they all came from one district.',
  '**A:** Which of the four was missing?',
  '**B:** None. The one I nearly left out was the last.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The element missing is nearly always **what the adviser does not know**, and it is the one that makes a stranger trust the other three. Students leave it out because they think it weakens the answer; Jad\'s stranger wrote back about precisely that paragraph.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**b** _What I wanted to put in and left out: "I know exactly how you feel, I was stuck in a lift for two hours in January." It is true and it is about me, and the man asking the question is in a lift now._',
]));
out.push(A('That answer — the thing people want to put in — is the same thing in nearly every class: a story of their own, offered as solidarity. It is kind and it is in the way. The distinction worth naming is that solidarity is for afterwards, and the answer is for now.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad said he has written six hundred and forty-one pieces of advice in English to people he will never meet, and has never once written a letter in English to anybody he knows. His answers are short and usually numbered — check three things, in this order — and he never writes "don\'t worry", never writes "I hope this helps", and never says he had the same problem, even when he did. Umm Kinan asked why not, because those are the kind things, and he said because the person asking is sitting in front of a broken thing at one in the morning: kindness is answering the question in six lines so they can go to bed. "Don\'t worry" costs them four seconds and gives them nothing, and "I had the same problem" is about him. The ones that work give an order, say how long each step takes, say what to do if the first step fails, and say what he does not know — if it is not the cable, I have never seen that fault and you should ask somebody else. Nobody has ever been angry with him for writing that, and people are angry when you pretend. Umm Kinan said he has written six hundred and forty-one of those and did not know he could write English, and he said he did not know it counted, because it is a forum. And Ms Huda said there is nothing in this course harder than that, and he has been doing it since he was seventeen.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I advise you to check → ✓ **I would check** / **Check**.   ✗ It is advised to check → ✓ **Check**.   ✗ Don\'t worry! → ✓ delete.   ✗ I hope this helps → ✓ delete; the help is the six lines above it.   ✗ a long formal paragraph to a stranger → ✓ brevity reads as respect, formality reads as distance.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** About thirty seconds — looking at the corner under a lamp at an angle. It tells you whether it is an assembly fault, which will recur, or a drop, which will not.'));
out.push(A('**2** Whether the model has a batch problem everywhere or only there: he has seen fifteen and all fifteen came from two shops in one district of one city, so his fifteen may mean nothing about the stranger\'s.'));
out.push(A('**3** The last one — _what I do not know_.'));
out.push(A('Eleven minutes to write, four of them on the paragraph he nearly cut. The arithmetic is the lesson: the hardest sentence to write is the one that limits your own claim, and it is the one the reader answers. That is 7.6 sentence 3 arriving in a six-line message to a stranger, which is where the class will actually use it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The question.** _"I have been given a rule at work that I cannot physically keep. If I say so I look like somebody making excuses. What do I do?"_',
  '**My answer.** Before you say anything to anybody: write one line saying what **physically** stops you — the distance, the missing shelf, the four minutes, the forty metres. One line, not a paragraph. That takes ten minutes and it is the whole of the work.',
  'If the line is about an object or a distance, send it to whoever wrote the rule and ask for nothing at all. Just the line and the date. People answer a line about a shelf; they argue with a paragraph about a rule.',
  'If you cannot write the line — if what stops you is not a thing — then the rule is keepable and the problem is something else, and that is worth knowing before you start a fight you will lose.',
  '**What I do not know:** I do not know what happens where you are. Where I work the answer to a line like that was a board on a trolley in a fortnight, after two years of nobody asking. That is one ward and one manager and it may mean nothing about yours.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**The question** _(asked by a woman at the school gate, in Arabic; I am writing the answer in English because she asked me to)_. _"I am thirty-nine. My daughter is learning English and I understand nothing she says. Is it too late?"_',
  '**My answer.** Do not start with your daughter\'s book. Start with one page of something you already know — a recipe, a form you have filled in a hundred times, the back of a packet. Read it in English with the Arabic beside it. Twenty minutes, twice a week, for a month.',
  'If at the end of the month you can read that page without the Arabic, go and find a class. You will be about the fourth-oldest person in it and not the oldest; I have been counting for twenty-four years and there is always somebody older.',
  'If at the end of the month you cannot, do not conclude anything about yourself. Change the page. Most people start with something they do not care about and then decide the problem is their age.',
  '**What I do not know:** I do not know how fast anybody learns, and I have no idea whether you will enjoy it. I am forty-eight and I have been doing this since September, and I still cannot say a sentence on a telephone.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Most people start with something they do not care about and then decide the problem is their age." That is the sentence; it is a failure plan and a kindness in one line, and it is not about you._   ✓ _"I am forty-eight and I have been doing this since September" is about you — and it is in the "what I do not know" paragraph, which is the one place it is allowed, so keep it._   ? _What happens if the first step tells me nothing?_ — change the page, and the answer says so.'));
out.push(S('Stage 7R · Share'));
out.push(A('Most of the room has given written advice to a stranger — a neighbour, a customer, a parent at a gate — and most did not count it, in the same way Jad did not. Ask Jad\'s question and let the answers come; the point is that the hardest writing many of them do is the writing they do not record.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Answered for the man at the pharmacy on the corner, who asked me how to find out whether a supplier is cheating him on quantities. In English, six lines, because he reads English and does not speak it, which is the opposite of me. Order: count one delivery yourself before you say anything. Time: twenty minutes. Failure plan: if the count is right, count the next one and then stop, because two right counts is an answer. What I do not know: I do not know what you do if the count is wrong, because I have never had to, and you will need somebody who has.']));

// ===================== 8.7 =====================
out.push(pb());
out.push(h2('8.7  Review & Mediate: Two options, and what I would do'));
out.push(S('Stage 1 · Unit 8 quiz – corrections'));
out.push(A('**1** If I **were** you, I **would** wait.   **2** If they **changed** the rota, the errors would move.   **3** It might be worth **asking** them.   **4** **Unless he asks**, nothing will happen. / **If he does not ask**, nothing will happen.   **5** As long as he **is** there, I will go in.   **6** If I had more time, I **would** finish it.'));
out.push(A('Items **2** and **4** are the two that matter: _would_ never appears in the _if_ half, and _unless_ already contains the negative.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** The line at the bottom of Fares\' own sheet: _both of them depend on me telling one person something I have not told them for eleven years._ Mazen says that is not a line about the options — it is the decision, written small at the bottom the way people do. There is no A and no B until he has told somebody at his own company that he has been training representatives for eleven years: until then A is a letter he cannot write honestly and B is a thing he is hiding.'));
out.push(NOTE('Mazen\'s advice is the one to teach: **neither option, and one step that is not on the sheet** — tell the woman who runs the Suwayda office, this week, and ask her for nothing. His reason is the most sophisticated thing anybody says in the first half of this book: _then it is information and not a request, and she can do something with it. If he asks, she has to decide something, and she will decide it in a corridor in four seconds._'));
out.push(S('Language box – explaining two options and advising'));
out.push(A('No exercises. Use it as the checklist for Stage 3. Two habits to drill: **the same four headings for both options**, and **find the line that is true of both**. The third move — advising neither, and naming the step that is not on the sheet — cannot be drilled, but it can be recognised, and Stage 3R gives the class two chances to recognise it.'));
out.push(S('Stage 3 · Practise (sample – Pair A, a nurse)'));
out.push(SAMPLE([
  '**Option A** is a three-night trial for her alone. It costs nothing, the risk is that it proves very little, and it depends on nobody thinking she is arranging her own rota.',
  '**Option B** is the whole ward\'s case. It costs a great deal of work, the risk is that it is refused and that she has then spent her one chance, and it depends on the other night nurse\'s record, which she has never seen.',
  '**What is true of both:** she has never spoken to the other night nurse about any of it.',
  '**If I were her** I would do neither this week. I would ask that nurse one question at the next handover — whether her own errors fall on fourth and fifth nights — and I would ask for nothing else, because then it is information and not a request. The thing I had to think about is that the two of them will be on that ward together for the next ten years whatever the rota says, which is not true of anybody she writes to.',
  'It might give her the second record. It would not give her the rota, and I would not expect it to.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In both pairs the thing true of both is **a conversation that has never happened**: the other night nurse, and the mark analysis nobody has seen. In both pairs that conversation is the first step and it is not on the sheet. Say the pattern once: when two options share a dependency, the dependency is the decision.'));
out.push(S('Stage 4R · Report – mediation'));
out.push(A('Mark three things: both options under the **same** headings; the line true of both; and advice that commits — _if I were her I would…_ — with one thing about her situation named. A mediation that ends _it depends_ has done half the task. The model report also closes with a decision of the reporter\'s own, which is where mediation becomes useful rather than tidy.'));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 2'));
out.push(A('**1** D   **2** E   **3** A   **4** C   **5** G   ·   Not needed: **B**, **F**, **H**'));
out.push(A('_Notes:_ Part 2 is won on the **constraints**, not the topic. **1** needs one person, one machine, her own room — D is the only one-to-one option. **2** can only come on a Tuesday and does not want speaking: E is Tuesday and has no spoken work. **3** cannot come before 19.30: A starts at 19.45 and H and C are daytime. **4** is daytime, not Mondays, and wants reports and evidence: C is Wednesday and Saturday mornings. **5** will not join a large class: G has four students. **B** is large and on a Monday, **F** is mornings for four weeks, and **H** is mathematics — the three distractors are each ruled out by a single constraint.'));
out.push(NOTE('Teach the method, which is mechanical and worth five marks: underline the **constraint** in each person (a day, a time, a size, a format) before reading the eight texts at all, then scan the texts for days and times. Students who read the eight texts first and then the five people lose two or three marks and run out of time.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'There are two options and I will give them the same way.',
  '**Option A** is to ask my own company to make the training part of my job — two days a month, same pay, in writing. It costs nothing. The risk is that there has never been a training post and the man who would have to agree it does not answer letters. It depends on somebody in that building noticing eleven years of something nobody has been told about.',
  '**Option B** is to take the outside day in June and whatever follows it. It costs me nothing in money and a good deal in exposure. The risk is that I would be training people to sell against my own employer in the same governorates. It depends on my telling my own company before somebody else does.',
  '**What is true of both:** both of them depend on my telling one person at my own company something I have not told anybody there in eleven years.',
  '**If I were me** I would do neither first. I would tell the woman who runs the Suwayda office this week — she has sent me two of the six — and I would ask her for nothing at all. It might change what A looks like. It would not get me the post, and I am not expecting it to.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2'));
out.push(A('Both out of 20 on Content, Communicative Achievement, Organisation and Language. The **article** must answer the notice\'s real question — _was the advice wrong, or was the way it was given wrong?_ — and a script that only tells the story cannot reach the top band. The **story** must begin with the sentence word for word; it is a long sentence and candidates mis-copy it, which costs Content, so tell them to copy it before they plan.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 145 words)**',
  '**The advice I did not take**',
  'For eight months my sister told me every week to leave my job. She was right. I left eleven months later and I have said twice since that I should have gone when she told me.',
  'So was she right? Yes. Was it advice? No, and it took me three years to work out the difference.',
  'She never once said "if I were you". She said "you have to leave", about thirty times, and every time she said it she was standing in a flat with one person in it, and I was standing in a flat with three children and a rent paid quarterly. Not once in eight months did she say where I was supposed to live in the December.',
  'The content was right and the shape was wrong, and the shape is what made it impossible to take. Correct advice from outside somebody\'s life is just a correct opinion.',
  'If you want your advice taken, put a month in it.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 139 words)**',
  '"If I were you," she said, and then she stopped, because she realised she had never once imagined being me.',
  'We were in her kitchen. It was a Friday and the children were asleep and she had the telephone bill in her hand, which was mine and which she had paid.',
  'She had been telling me to leave that clinic since the February. Every week, the same three words, and that night she got as far as "if I were you" and then she put the bill down on the table and did not finish the sentence.',
  'I waited. I had been waiting for eight months for her to finish a sentence that began that way.',
  'She said: where would you live in December?',
  'I said I did not know. She said she did not know either, and that she had been telling me to jump off something without ever looking at what was underneath.',
  'We found out about the December in about forty minutes. I left the clinic in the November.',
]));
out.push(S('Unit 8 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** b   **3** b   **4** b   **5** a   **6** b   **7** a   **8** b'));
out.push(A('_Notes:_ **4** and **5** are the pair students lose: _it might be worth_ takes _-ing_ and _you might want_ takes _to_. **6** _as long as_ — the condition is the way in, so _unless_ would reverse the sentence. **8** the evidence carries _might_ and not _would_, which is the rule of 8.3.'));
out.push(S('Unit 8 check  ·  B  Listening (Part 4, interview) – Track 8.15'));
out.push(A('**1** B   **2** C   **3** B   **4** B   **5** C   **6** B'));
out.push(A('Question **3** is the Part 4 item to replay. He gives two reasons in one breath — that it gives the person nothing, and that kindness is answering the question — and option A ("it is not kind") is the opposite of what he says while using his own word. Part 4 always contains one distractor built from the speaker\'s own vocabulary.'));
out.push(S('Unit 8 check  ·  C  Writing (sample, 158 words)'));
out.push(SAMPLE([
  'There are two options and I will give them the same way.',
  '**Option A** is to move chapter 7 in my own scheme and tell nobody. It costs one evening. The risk is nothing at all, which is why it is tempting. It depends on no other teacher needing to know, which is not true: there are four of us and three of them teach the same year.',
  '**Option B** is to take it to the department with the four years of papers. It costs a meeting and some awkwardness. The risk is that it is refused and that I have then shown everybody a mark analysis I have never shown anybody. It depends on my being willing to be looked at.',
  '**What is true of both:** nobody has ever seen my mark books, in twenty-four years, and both options require me to decide whether that stops now.',
  '**If I were me** I would do B, because A helps thirty-one children and B might help a hundred and twenty-four, and because A leaves three colleagues teaching the wrong order while I know better. The thing I had to think about is that I will be in that staff room on Monday either way.',
]));
out.push(S('I can… (Unit 8)'));
out.push(A('Self-assessment; no answers. The three that matter are the first, the third and the sixth: naming what you had to imagine in order to give advice, telling a closed past from a present you are treating as one, and softening upwards while becoming **more** specific. A class that ticks the conditional forms and not those three has learnt a tense.'));
out.push(box('Looking ahead to Unit 9', [
  'Unit 8 was about what **would** happen. **Unit 9** is about what **must**, **might** and **can\'t** be true — _he must have been waiting · it might be a batch fault · that can\'t be the reason_ — and it extends 4.4, where the class drew conclusions from evidence in the present, backwards into the past.',
  '**9.4 teaches B1 Preliminary Speaking Part 2**, the long turn: describing a photograph and speculating about it, which is worth real marks in the examination and has not appeared in this book. The Unit 8 NEXT box asks every student to bring **a photograph of a place or people they do not know**. Without them, 9.4 does not work — chase it.',
  'One thread lands quietly in **9.5**: Fares does his one day in June. It is one line in a dialogue about something else, in the manner of 6.3, and it is not flagged.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 8 · Answer Key');
