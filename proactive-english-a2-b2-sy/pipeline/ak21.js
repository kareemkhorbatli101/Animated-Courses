// Proactive English A2 · Syria Edition · Book 2 · Unit 21 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 21  Quality and Complaints — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The four words of this unit sit in one grid** and it is worth drawing it in 21.1 and leaving it up: **so** + adjective · **such (a)** + noun · **too** + adjective (never good) · **not … enough** (the same thing from the other end). Students who have the grid make very few errors; students who meet the words one at a time make them all.',
  '**The idea underneath** is in 21.3: _so small_ is how you feel and _too small for the order_ is a fact, and people answer facts. Everything from 21.3 to 21.7 is that sentence being worked out.',
], C.lblue, C.navy));

// ===================== 21.1 =====================
out.push(pb());
out.push(h2('21.1  It was such a good evening'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Six is enough, and keep them — 21.2 turns the same sentences round with _so_.'));
out.push(A('**b** **1** such a   **2** such   **3** such   **4** such a _(already correct in the prompt — the trap is the extra **a**)_   **5** such'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the end-of-course evening last year.'));
out.push(A('**b** **1** Because it was four hours of work for an evening the class still talks about in March — she says that is a good exchange.   **2** That he came for an hour and stayed for four, and said it was such a strange thing to be in a room where everybody was speaking his third language to each other.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **such a** long day   **2** **such** good neighbours   **3** **such an** interesting evening   **4** **such** bad luck   **5** **such an** honest person   **6** **such** hard work that nobody spoke'));
out.push(NOTE('Items 3 and 5 take **such an** before a vowel sound, which students forget because _such a_ is learned as one piece. Item 4 and item 6 are uncountable and take no article at all. Those three between them are where every mark is lost.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** How was the evening last year?',
  '**B:** It was such a good evening.',
  '**A:** Really?',
  '**B:** They were such kind people, and it was such good food.',
  '**A:** Would you do it again?',
  '**B:** It was such a good evening that we are doing it again, and I have volunteered for the part I hated.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_such a good evening · such kind people · such good food._ — the **a** only in the first, which is the check.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The best thing this year was four days in Latakia in August. It was such a quiet week — I did not look at a telephone before eleven once. They were such easy people to be with that nobody arranged anything, and it worked. And it was such good weather that we ate outside every evening._',
  '**A:** What made it so? — **B:** Nobody needed anything from me for four days. That is all it was.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba wants the end-of-course evening again, because last year was such a good evening that the class still talks about it in March. Lina said it was also such hard work — four hours for one evening — and Hiba said that is a good exchange. What Omar remembers is Mr Lang, who came for an hour and stayed for four and said it was such a strange thing to be in a room where everybody was speaking his third language. The new part is twenty T-shirts, which Omar says is such a good idea that he is suspicious of it, because twenty T-shirts is twenty chances for something to go wrong in the size.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ such kind a woman → ✓ **such a kind** woman.   ✗ such a hard work → ✓ **such hard** work.   ✗ such a nice people → ✓ **such nice** people.   ✗ such interesting evening → ✓ such **an** interesting evening.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Staying for four hours — he came for one.'));
out.push(A('**2** Because it was the first room where everybody was speaking English **to each other** and he was the one who was not needed.'));
out.push(A('**3** He was given a bag to take to the hotel, which he ate at eleven at night, standing up — and it was better than anything he ate in the following four days.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Umm Fares   **Subject:** Thank you — and I should have said this in February',
  'Dear Umm Fares,',
  'You came to the door with a dish on our second day here, which I did not expect and which I think about more than you would imagine.',
  'It was such a frightening fortnight. Arriving somewhere where nobody knows you is such an ordinary thing that nobody warns you how it feels.',
  'You were such kind neighbours. My daughter still asks about the small bowl.',
  'And it was such a lot of trouble for you — you did it for four families that year, I found out later.',
  'Thank you. Eleven years late.',
]));
out.push(S('Stage 7 · Write freely (sample, 143 words)'));
out.push(SAMPLE([
  '**To:** Ustaz Nabil   **Subject:** From a student you taught in 2009',
  'Dear Ustaz Nabil,',
  'You will not remember me. I was in the back row and I said nothing for two years.',
  'You kept me behind once, in the spring of 2009, and told me that I read better than anybody in the class and that you were not going to let me pretend otherwise. It took four minutes. It was such a small thing for you and it is such a large thing in my life that I have told it to about twenty people.',
  'You were such a tired man that year — we all knew about the second job and none of us said so — and you still stayed behind on a Thursday for somebody who has not spoken since September.',
  'I teach now. I keep people behind.',
  'Thank you.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I teach now. I keep people behind." Four words and the whole letter is in them._   ✓ _"such a tired man that year" — tell him how you knew._   ? _Are you going to send this?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the hands rather than reading anything aloud. In most classes a third say yes; of those, about half actually do, which is still more letters of thanks than that room would otherwise have produced in a decade. The ones who say no usually say _it would be strange after so long_, which is worth answering: it is strange, and it is received as the opposite of strange.'));
out.push(S('Homework (sample – after sending it)'));
out.push(SAMPLE(['I sent it on Sunday night and I did not sleep well, which was ridiculous. He answered on Monday afternoon. He said he did remember me, which I did not believe until he said where I used to sit and who sat next to me. He said he left teaching in 2014 and went back in 2019 and that he has kept about six messages like mine and that they are the reason for the 2019 part. I have read his four lines about nine times. It took me fifteen years to write four paragraphs and it cost me nothing.']));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  They\'re so small'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Turning each sentence round is the point: _such a long day_ → _the day was so long_. Five of them and the grid is understood.'));
out.push(A('**b** **1** so   **2** so many   **3** so much   **4** so much   **5** so'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the wrong size.'));
out.push(A('**b** **1** So small that one would be tight on a four-year-old.   **2** Nothing that day — she is too angry; tomorrow she will ring with the order number, the date, and one sentence.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **so**   **2** **such a**   **3** **so much**   **4** **so many**   **5** **such a**   **6** **so**'));
out.push(NOTE('Items 1 and 2 are the same complaint in the two shapes, side by side on purpose: _they\'re **so** small_ / _it was **such a** small T-shirt_. If a student can switch between those two sentences on demand, the whole cycle is done.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** …They\'re so small.',
  '**B:** Is it all of them?',
  '**A:** All twenty. Every one the same.',
  '**B:** How much was it?',
  '**A:** Four hundred and twenty thousand. Everybody\'s money.',
  '**B:** What are you going to do?',
  '**A:** Nothing today. I am so angry that anything I said this afternoon would be the wrong thing.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_so small · so many of them the same · so much money_, and _so angry that anything I said today would be wrong_. The last one tells you most, because it is the only one that says what she is going to **do**.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The flat we took in 2022. The photographs were honest, the landlord was so straightforward that I signed on the day, and the building has so much damp that we moved in November. The straightforwardness is what still annoys me — if he were slippery I would have blamed him. He was not. He simply did not mention the one thing._',
  '**A:** What would have made it easier to accept? — **B:** One sentence from him. "There is damp in the back room in winter." That is all it needed.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['All twenty T-shirts came in the wrong size — so small that one would be tight on Lina\'s four-year-old niece. Every single one is the same, so it is not a packing mistake: somebody printed the wrong size twenty times without stopping once. The printing itself is beautiful, which Lina says is what makes it so annoying, and that if they were badly printed she would feel better. It was four hundred and twenty thousand and it is everybody\'s money. She is not ringing them today, because she is so angry that anything she said today would be the wrong thing. Tomorrow she will ring with the order number, the date, and one sentence.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It was so a long day. → ✓ **such a** long day / the day was **so** long.   ✗ They are such small. → ✓ They are **so** small.   ✗ so much people → ✓ **so many** people.   ✗ so many noise → ✓ **so much** noise.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** All twenty — every single one.'));
out.push(A('**2** That she is glad she did not send it: everything in it is true and all of it is about how she feels.'));
out.push(A('**3** Any sentence that tells them what she **wants**. There is not one in it, and if she sends it they will answer the anger and not the T-shirts.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**DRAFT — not sent**',
  'To the housing office.',
  'My file has been with you since January and nobody has rung me once. I have come to the office four times and waited so many hours that I have stopped counting.',
  'I do not understand how so much can be known about a person and so little done with it. There are so many people in that building and not one of them is the person who decides.',
  'This is such a simple thing. One signature.',
  '**Written underneath, next morning:** All true. None of it says what I want, and none of it gives them anything they can act on without admitting they were wrong, which nobody does. I need a date, a file number, and one request.',
]));
out.push(S('Stage 7 · Write freely (sample, 146 words)'));
out.push(SAMPLE([
  '**DRAFT — not sent, 11.20 p.m.**',
  'To my brother.',
  'You have asked me for so many things this year and I have said yes to all of them, and you have not once asked whether it was a good week to ask.',
  'It was such a small thing on Tuesday. Twenty minutes. But it was the ninth twenty minutes, and the ninth one is not twenty minutes, it is a shape my whole year has taken.',
  'There is so much that I do not mind doing. That is what makes it so hard to say any of this — nobody can see the pile, because every single thing on it is reasonable.',
  '**Written underneath, next morning:** Not one sentence in that tells him what I want, because I do not know what I want. I think I want him to ask first. That is one sentence and it took me a page and a night to find it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the ninth one is not twenty minutes, it is a shape my whole year has taken." I would not argue with that._   ✓ _The line that would make him defensive is "you have not once asked" — it is true and it is an accusation._   ? _What do you actually want? Your own note says you found it. Say it in the real message._'));
out.push(S('Stage 7R · Share'));
out.push(A('Reading only the two lines underneath keeps the drafts private and gets the whole lesson. The thing most students find missing is identical and worth naming: **a sentence saying what they want.** Write it on the board and leave it there for 21.3.'));
out.push(S('Homework (sample – the short version)'));
out.push(SAMPLE(['File 4471-C, opened 14 January. I have come to the office on 2 February, 19 February, 6 March and 21 March, and I have not had a telephone call or a letter. I am not asking anybody to explain the delay. I am asking for one thing: a date by which the signature will be done, or the name of the person I should speak to instead. Could somebody tell me which, by the end of next week? Tareq Ayoub · 0944 318 260']));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  They\'re too small for us'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Things in the room are better than imagined examples because the class can see whether _too_ is fair.'));
out.push(A('**b** **1** too   **2** so   **3** too   **4** so'));
out.push(NOTE('Item 4 is the one to stop on: _she was **too** kind_ means she was kinder than she should have been, which is not a compliment. _too_ is never good, and that single fact prevents a whole category of accidental insults.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – say what is wrong, exactly.'));
out.push(A('**b** **1** It is how she **feels**, and the printer can answer it with "they are the size we printed".   **2** The order number, the date, and what was ordered against what arrived.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **too**   **2** **so**   **3** **too**   **4** **so**   **5** **too**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "The T-shirts are so small that nobody can wear them."',
  '**B:** And what will they say back?',
  '**A:** "They are the size we printed."',
  '**B:** Exactly. Try "too".',
  '**A:** "The shirts delivered are too small for the order."',
  '**B:** Better. Now three facts first.',
  '**A:** Order 1184, the third of April, twenty ordered in large and twenty delivered in a child\'s size.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_First: "so small that nobody can wear them." Second: "too small for the order", with the number, the date and the two sizes._ — The company can argue with the first and cannot argue with the second.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**To a friend:** the room is so dark that I cannot read in it in the afternoon._',
  '_**Rewritten:** flat 4, seen on 2 May and taken on the 8th. The advertisement said "bright, two windows". The back room has one window, which faces a wall two metres away. The room is too dark to read in at three in the afternoon without a light on._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mr Khaled made Lina rewrite her first sentence. She had "the T-shirts are so small that nobody can wear them", and he asked what the printer would say back, which is "they are the size we printed". He says "so small" is how you feel and "too small for us" is a statement about the order — too small for what was agreed — and one of those can be argued with and the other cannot. Then he made her put three facts before any adjective: order 1184, the third of April, twenty ordered in large and twenty delivered in a child\'s size. He said the first version was a feeling and the second one is a problem, and people answer problems.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ too much small → ✓ **too** small.   ✗ She was too kind. _(as praise)_ → ✓ She was **so** kind.   ✗ It is too small for wear. → ✓ too small **to wear**.   ✗ so small for me → ✓ **too** small for me.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** 42 cm across the chest, against 54 cm for a large.'));
out.push(A('**2** The printing — it is good and she says so.'));
out.push(A('**3** Reprinted in large from the same file; or, if that is impossible before 30 April, a full refund.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Al-Hoda Furniture   **Subject:** Order 312 — wrong height delivered',
  'Dear Sir,',
  '**Order 312**, placed on 1 March and paid in full — 540,000 SYP.',
  '**Ordered:** 12 chairs, seat height **46 cm**, as on the order form.',
  '**Delivered on 19 March:** 12 chairs, well made, seat height **38 cm**. They are too low for the tables they were ordered for, which are 74 cm.',
  'The chairs themselves are good and the finish is better than I expected. The problem is only the height, and it is the same on all twelve.',
  'I would like them exchanged for the height ordered. If that is not possible before 10 April, I would like the order refunded in full.',
  'Could you tell me by Thursday which it will be?',
  'Yours faithfully, Rami Khoury · 0944 207 118',
]));
out.push(S('Stage 7 · Write freely (sample, 154 words)'));
out.push(SAMPLE([
  '**To:** The Manager, Al-Yasmin Language Centre   **Subject:** Evening class 4B — room change, 8 March to present',
  'Dear Mr Bassam,',
  '**Class 4B**, Thursdays 17:30, fees paid in full for twelve weeks on 2 March — 380,000 SYP each, fourteen students.',
  '**What we were told:** Room 12, second floor, as on the timetable.',
  '**What has happened since 8 March:** we have been in Room 3, on the ground floor, for six of the seven weeks. Room 3 measures 4 m by 5 m and holds twelve chairs. We are fourteen. Two people have sat on the window ledge every week since the second one.',
  'The lift is being repaired and we understand that completely, and nobody is asking for the lift.',
  'The room is too small for the class, and it was too small on the first evening.',
  'We would like either Room 5, which is empty on Thursdays, or two extra chairs and the agreement that fourteen is the number. Could you tell us by next Thursday which is possible?',
  'Yours faithfully, on behalf of 4B',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Two people have sat on the window ledge every week since the second one." That is unanswerable._   ✓ _"We understand completely" is doing good work — but then say what you are **not** asking for, which you nearly do._   ? _Would two chairs really be enough, or are you being polite?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The complaint that would get an answer this week is always the one with a measurement in it. Ask the class to count the numbers in each of the two read aloud; the difference is usually four or five to none.'));
out.push(S('Homework (sample – the reply you expect)'));
out.push(SAMPLE(['Dear Ms Haddad, Thank you for your message. We are sorry for the inconvenience caused. Our records show that order 1184 was produced according to the specification received. However, as a gesture of goodwill, we are able to offer a discount of 15% on a future order. Please note that all orders should be checked on delivery and that claims must be made within 48 hours. We value your custom. **Underneath:** this is the reply I expect, and now that I have written it I can see that my letter needs to say the delivery date and that I wrote the same day, which it does, and I am glad.']));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  It isn\'t big enough'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** _too expensive_ → it isn\'t **cheap enough** · _too short_ → it isn\'t **long enough** · _too slow_ → it isn\'t **fast enough** · _too dark_ → it isn\'t **light enough** · _too late_ → it isn\'t **early enough**.'));
out.push(A('**b** **1** It isn\'t big **enough**.   **2** We haven\'t got **enough** chairs.   **3** There isn\'t **enough** time.   **4** He isn\'t old **enough**.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – he offers part of the order now and the rest later, which is not what she needs. (He does not refuse and he does not say the size is correct.)'));
out.push(A('**b** **1** He has not got enough plain shirts in large — eleven — and the next delivery is 5 May.   **2** Eleven, because they are twenty and the evening is on the 28th; and nine people standing in a photograph without a shirt is worse than nobody having one.'));
out.push(S('Language box · Practise'));
out.push(A('**1** It isn\'t **big enough**.   **2** I haven\'t got **enough money** (for it).   **3** He isn\'t **old enough to drive**.   **4** There aren\'t **enough chairs**.   **5** It isn\'t **light enough to read**.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B:** You are right, and I am sorry. The size was set wrongly.',
  '**A:** Thank you for saying so.',
  '**B:** I cannot reprint before the 30th. I haven\'t got enough plain shirts — I have eleven.',
  '**A:** Eleven is not enough. We need twenty.',
  '**B:** So what I can do is eleven now and nine on the 6th.',
  '**A:** Our evening is on the 28th. I want to be fair to you: you answered in a day and you did not argue. But eleven for a class of twenty is not good enough.',
  '**A:** Is there anything else you can do?',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Offered: 11 now, 9 on the 6th. Not enough because the evening is the 28th and they are 20._   _The last question produced: a search for another supplier._ — In most pairs it produces something, which is the point of asking it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The clinic offered my mother an appointment in seven weeks. Seven weeks is not enough use to anybody with the thing she has; the referral said four. I said "that is not soon enough — the letter says four weeks", which is the first time in my life I have said anything like that to a desk._',
  '**A:** Did you ask the last question? — **B:** No. **A:** Ask it next time. — **B:** I will, and I know what it would have produced, because when I rang back a week later and did ask, there was a cancellation list that nobody has ever mentioned.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The printer rang back and said Lina was right and that he was sorry, and that the size on the machine was wrong. But he has not got enough plain shirts in large — eleven — and the next delivery is the fifth of May, and the evening is on the twenty-eighth. Lina said eleven is not enough and that nine people standing in a photograph without a shirt is worse than nobody having one. She also said she wanted to be fair to him, because he answered in a day and did not argue. When she asked whether there was anything else he could do, he said give me until tomorrow: there is a man in Jaramana who may have twenty, and if he has, they will come on Monday and he will pay the difference.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It isn\'t enough big. → ✓ big **enough**.   ✗ We haven\'t got chairs enough. → ✓ **enough chairs**.   ✗ enough of money → ✓ **enough money**.   ✗ He isn\'t enough old for drive. → ✓ old **enough to** drive.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Ringing back the same day, and saying straight away that the size was wrong.'));
out.push(A('**2** Because if she knows by Friday she has long enough to do something else.'));
out.push(A('**3** That he answered in a day and did not argue, which is rarer than it should be — whichever way it goes.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Al-Hoda Furniture   **Subject:** Order 312 — thank you, and where we are',
  'Dear Sir,',
  'Thank you for replying the same day and for not asking me to prove the height. That is not what usually happens.',
  'Where we are: four chairs at the right height is not enough. There are twelve places at that table and the room is used by fourteen people.',
  'I am not asking for anything beyond the order. If you can deliver twelve at 46 cm by 10 April, we will take them. If you cannot, a refund is the right answer and neither of us will have done anything wrong.',
  'Could you let me know by Friday? If I know by Friday, I have long enough to borrow chairs for the month.',
  'And whichever it is, I will say that you answered in a day.',
  'Yours sincerely, Rami Khoury',
]));
out.push(S('Stage 7 · Write freely (sample, 151 words)'));
out.push(SAMPLE([
  '**To:** Dr Khalil\'s secretary   **Subject:** Appointment for Umm Maya — the seven weeks',
  'Dear Madam,',
  'Thank you for ringing yesterday and for finding the referral so quickly. You were the third person I spoke to and the first one who read it.',
  'Where we are: the twenty-second of May is not soon enough. The referral asks for four weeks and that would be the eighteenth of April. She is seventy-six and the thing the letter is about is getting worse weekly, which is why the four weeks is written on it.',
  'I am not asking anybody to move another patient. If there is a cancellation list, please put her on it and I will come with an hour\'s notice at any time, including evenings. If there is no list, please tell me plainly and I will look elsewhere without complaining about it.',
  'Could you let me know by Monday? If I know by Monday I have long enough to try the other clinic before the referral expires.',
  'And either way, I will tell people that somebody there read the letter.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I will come with an hour\'s notice at any time, including evenings." You have made yourself the easiest patient to help._   ✓ _"not soon enough" has its number, good — but say what the thing is, or I cannot prioritise it._   ? _What will you say about me if I cannot?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Reading the last lines alone takes a minute and lands hard: almost nobody writes a sentence saying what they will say about the other person **either way**, and everybody recognises instantly why it works. It is the most transferable sentence in Unit 21.'));
out.push(S('Homework (sample – to the twenty people)'));
out.push(SAMPLE(['Everybody — where we are with the T-shirts. They came on the 14th and all twenty were the wrong size; that is the printer\'s mistake and he has said so. He cannot reprint before the 30th because he has eleven shirts, and our evening is the 28th. He is looking for twenty elsewhere today and will tell me tomorrow. **What I need from you:** nothing yet. If he finds them, we pay nothing extra and they come Monday. If he does not, we get the 420,000 back and we have the evening without T-shirts, which was the plan until February and was a perfectly good plan. Nobody needs to decide anything before Friday.']));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  I\'m afraid there seems to be a problem'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The class will usually place the four correctly and then disagree about which shop needs which, which is the useful argument.'));
out.push(A('**b** **1** _I\'m afraid there seems to be a mistake — I think I\'ve been charged twice._   **2** _I\'m afraid this doesn\'t seem to be working._   **3** _I\'m afraid I was told Tuesday._   **4** _Could I have a refund?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – it does not switch off.'));
out.push(A('**b** **1** That they usually need the box.   **2** Two things: she asks to **show him what it does**, and at the end she says she knows the box matters and is not going to pretend that is his fault.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _I\'m afraid there seems to be a mistake — I think I\'ve been charged twice._   **2** _I\'m afraid this doesn\'t seem to be working._   **3** _I\'m afraid I was told it would be ready today._   **4** _I\'m afraid nobody told me about that._   **5** _Could I speak to the manager, please?_'));
out.push(NOTE('Mark the **front position** of _I\'m afraid_ and the full phrase _there seems to be_. Students produce _there seems a problem_ and _I afraid_ in roughly equal numbers, and both sound wrong to a native ear in a way that undoes the politeness the student is reaching for.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Good morning. I\'m afraid there seems to be a problem with this kettle.',
  '**B:** Have you got the box?',
  '**A:** I\'m afraid I haven\'t. I have the receipt.',
  '**B:** We usually need the box.',
  '**A:** I understand. May I show you what it does? It boils, and then it doesn\'t switch off until you unplug it.',
  '**B:** (pause) It should switch off.',
  '**A:** I\'m not asking for anything today — I\'d just like to know what happens next.',
  '**A:** And I know I should have kept the box. I\'m not going to pretend that is your fault.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The sentence that changed it: **"I\'m not going to pretend that is your fault."**_ — It was the admission, not the complaint. In most pairs the listener notices this without being told, which is why the task asks.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The dentist charged me for two appointments when I only had one, in January, and I have said nothing for three months because I like her and I did not want it to be a thing._',
  '_"I\'m afraid there seems to be something wrong with my account. I was charged on the 8th and the 22nd of January and I only came once. May I show you? I\'m not asking for anything today — I\'d just like to know whether I have misunderstood it, because I may have."_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Maya took the kettle back without the box and the assistant said they usually need it. What changed it was not the complaint. She asked to show him what it does — it boils and then does not switch off until you unplug it — and he said, after a pause, that it should switch off. Then she said she was not asking for anything that day and only wanted to know what happens next. And at the end she said she knows the box matters and she should have kept it, and that she was not going to pretend that was his fault. He said most people pretend it is his fault, and told her to come back on Saturday and ask for him.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ There seems a problem. → ✓ There **seems to be** a problem.   ✗ I afraid there is a mistake. → ✓ **I\'m afraid** there is a mistake.   ✗ I\'m afraid of there is a problem. → ✓ drop the **of**.   ✗ This is wrong, you charged me twice. → ✓ **I\'m afraid there seems to be** a mistake.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It boils normally and then does not switch itself off; it continues boiling until it is unplugged. It has done this since the first week and it does it every time.'));
out.push(A('**2** That she has not kept the box and knows that makes it harder for them; and that the assistant on Saturday could not have been more helpful.'));
out.push(A('**3** A repair; or an exchange for the same model; or, if neither is possible, a refund.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** The Manager, Al-Rawda Shoes   **Subject:** Shoes bought 2 February — receipt 1192',
  'Dear Sir or Madam,',
  'I would like to make a complaint about a pair of shoes I bought from your shop on 2 February. Receipt 1192 is attached.',
  'I\'m afraid there seems to be a fault in the stitching on the left shoe. The sole has come away from the upper along about four centimetres at the inside edge. It began in the third week and it has got worse since.',
  'I should say two things. They have been worn outside, which I know is normally the end of the matter. And your assistant was straightforward with me — she said she could not decide it herself and gave me your name rather than sending me away.',
  'I am not asking for anything beyond shoes that hold together. I would be glad to have them repaired, or exchanged for the same pair. If neither is possible, I would like a refund.',
  'Could you let me know within a week?',
  'Yours faithfully, Samira Deeb',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**To:** The Director, Al-Yasmin Language Centre   **Subject:** Certificate issued 14 December — name incorrect',
  'Dear Madam,',
  'I would like to make a complaint about the certificate issued to me on 14 December for level A2.',
  'I\'m afraid there seems to be an error in the name. It reads NASSER, LAMIA. My name is Lama Nasser, as on the ID I gave at registration and as on every register in the room all term.',
  'I should say two things. I did not check it on the day, and the card you gave us in week one asked us to, so part of this is mine. And the person at the desk looked for twenty minutes for my file when she could have told me to come back, which I noticed.',
  'I am not asking for an apology. I would be glad to have a corrected certificate; if that takes time, a signed letter confirming the level would be enough for now.',
  'Could you let me know what is possible, and by when?',
  'Yours faithfully, Lama Nasser · 0955 612 408',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"part of this is mine" — I read the rest of this letter completely differently because of five words._   ✓ _"I am not asking for an apology" is strong, but it is the only place you tell me what you do **not** want; tell me the order of what you do._   ? _Which do you actually need first, the letter or the certificate?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The writer the class believes is the one who weakened their own case first, every time. Say it plainly: a complaint that is entirely one-sided reads as a performance, and the reader starts looking for the part you have left out.'));
out.push(S('Homework (sample – the complaint you never made)'));
out.push(SAMPLE(['To the garage that did the brakes in 2021. You charged me for a part you did not fit. I know because the man who did them properly eighteen months later showed me the old one, still in, with the date stamped on it. I did not come back because I was frightened of being told I was wrong by four men in a room, and because by then I have paid twice and wanted it to be over. I am not sending this. But I have written it, and the thing I notice now is that I never once said the word "faulty" to anybody, and that was the word that would have changed it.']));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  Could I exchange it?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** **For the customer**, usually: refund → exchange → credit note → repair. **For the shop**: repair → exchange → credit note → refund. The two lists are almost exactly reversed, and seeing that is the whole of the cycle — it explains why the shop offers what it offers.'));
out.push(A('**b** Open. **1** _…I\'ll take the cheaper one and have the difference._   **2** _…I\'ll take a credit note._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – a different (cheaper) kettle and the difference in cash.'));
out.push(A('**b** **1** She offers to take the credit note if it is easier for them, and gives an honest reason for preferring the money.   **2** Fourteen days with the box for anything; after that, only if it is faulty — and then the box does not matter.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _Could I exchange it? If you haven\'t got the same one, I\'ll take a refund._   **2** _Could I have my money back? If a credit note is easier, I\'ll take that._   **3** _Could I take the cheaper one and have the difference?_   **4** _Would you repair it instead? If it can be done this week, I\'d prefer that._   **5** _Could I speak to the manager? If she isn\'t here, I\'ll come back tomorrow._'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Could I exchange it for the same one?',
  '**B:** We haven\'t got the same one. We have a dearer one and a cheaper one.',
  '**A:** Could I take the cheaper one and have the difference back?',
  '**B:** Normally we give a credit note.',
  '**A:** I understand. If a credit note is easier for you, I\'ll take it — I come here anyway. But if you can give the difference, I\'d rather, because it\'s about four thousand and I\'d spend a credit note on something I don\'t need.',
  '**B:** I\'ll give you the money.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The conditional: "if a credit note is easier for you, I\'ll take it."_ The way out it offered was **the shop\'s own preference** — and because it was offered honestly, the shop did not take it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_A heater, bought in November, never worked properly, still in the kitchen. I did not take it back because the shop is forty minutes away and I kept thinking I would be in that area anyway, and then it was March._',
  '_"I bought this in November and I\'m afraid it has never heated properly. Could I exchange it? If it is too late for an exchange, could you look at it — and if you\'d rather give a credit note, I\'ll take that, because I will be buying a fan in June."_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Maya was told she was covered, so she asked to exchange the kettle for the same one, and they have not got it. She asked whether she could take the cheaper one and have the difference, and they said they normally give a credit note. What worked was the conditional: if a credit note is easier for you I will take it, because I come here anyway — but if you can give the difference I would rather, because it is four thousand and I would spend a credit note on something I don\'t need. The assistant said that was the most honest thing anybody has said to him this week and gave her the money. And then she asked the actual rule, which is fourteen days with the box for anything, and after that only if it is faulty — and then the box does not matter at all, which nobody tells anybody.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Could I to exchange it? → ✓ Could I **exchange** it?   ✗ Can I have back my money? → ✓ Could I have **my money back**?   ✗ If it is easier, I take that. → ✓ **I\'ll** take that.   ✗ I want a refund. → ✓ **Could I have** a refund?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four shops; three told her immediately and one did not know.'));
out.push(A('**2** Only if it is **faulty** — and then the box does not matter at all.'));
out.push(A('**3** **faulty** — if a thing is faulty, almost every rule about boxes and days stops applying.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT THE OFFICES ACTUALLY ALLOW** — asked, not guessed. Tareq, flat 9.',
  'I have been told all my life that you cannot change an appointment once it is made. Last week I asked three places what the rule really is, and two told me and one did not know.',
  '**The clinic.** You can change once, free, up to twenty-four hours before. After that you lose the fee. The woman said almost nobody asks and almost everybody just does not come.',
  '**The bank.** No appointments at all before eleven, which is not a rule anybody has written down but is what actually happens.',
  '**The housing office.** Did not know. The man asked somebody and came back with "it depends", which I am writing down because it is true.',
  '**Two things I have learned.** Ask the person at the desk, not the person in the queue. And the word that changes everything is **cancellation** — half of these places have a list and none of them mention it.',
]));
out.push(S('Stage 7 · Write freely (sample, 148 words)'));
out.push(SAMPLE([
  '**WHAT THEY ACTUALLY ALLOW — FOUR PLACES ON THIS STREET** — asked in person, March. Omar, flat 11.',
  '**The electrical shop.** 14 days with the box for a change of mind; 12 months if it is faulty, and then the box does not matter. He said he tells about one customer in twenty, because the other nineteen do not ask.',
  '**The phone shop.** 14 days unopened. Opened but unused, 15% charge. Faulty, 12 months — but they repair first after 30 days, which is the sentence to remember.',
  '**The bakery.** "If it is wrong, bring it back." I asked for the rule and he looked at me as though I were asking him to write it down, and then he said "if it is wrong, bring it back" again.',
  '**The clothes shop.** 7 days, unworn, receipt. Nothing reduced. The small print is very small and I photographed it.',
  '**Two things I have learned.** The smaller the shop, the shorter the rule and the more likely they are to keep it. And always ask what happens if it is **faulty**, because that is a different question from everything else.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The smaller the shop, the shorter the rule and the more likely they are to keep it." I think that is true and I have never thought it._   ✓ _The bakery one is funny but it is not a rule — say what you would actually do._   ? _Did they mind being asked?_'));
out.push(S('Stage 7R · Share'));
out.push(A('This is the one page in Book 2 that is worth money to its readers, and it should go up somewhere real. If the class is willing, it is also the best possible thing to hand to the next level in week one.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**Al-Nahda Electrical, asked on Saturday.** Her words: "Fourteen days with the box if you have just changed your mind, and we give a credit note, not cash. If it is faulty you have a year, and I do not care about the box, and you need the receipt or anything that shows you bought it here. If it is faulty in the first month you choose — new one or money. After a month we try to repair it first." **What she could not answer:** what happens if you lose the receipt but paid by card. She said "I would find it on the machine, but I am not supposed to say that."']));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: What does the returns policy say?'));
out.push(S('Stage 1 · Get ready – Unit 21 quiz'));
out.push(A('**1** It was **such a** good evening.   **2** They are **so** small.   **3** There were **so many** people.   **4** It isn\'t **big enough**.   **5** _Grammatically correct_ — but it says she was **kinder than she should have been**. For praise: _She was **so** kind to me._   **6** There **seems to be** a problem.'));
out.push(NOTE('Number 5 is the one to argue about. It is the only item in the quiz that is not an error, and it is the most useful thing in the unit: **_too_ is never a compliment.** Students who have said _you are too kind_ to a host will want to know, and they should.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** The neighbour\'s heater does not heat, so it is **faulty** — rule 2 (twelve months, no box needed) and rule 3 (a fault in the first thirty days is replaced or refunded, at the customer\'s choice). The word Maya says decides everything is **faulty**.'));
out.push(S('Stage 3 · Practise (sample – Policy A explained without showing it)'));
out.push(SAMPLE([
  '_Before anything else: is it **faulty**, or have you changed your mind? The two halves of this page have nothing to do with each other._',
  '_If you have changed your mind: seven days, receipt, unworn, and you get an exchange or a credit note — not money._',
  '_If it is faulty: six months, and the box does not matter. You need the receipt._',
  '_But look at rule 3 before you go: if it was reduced, it is three days and exchange only, and that beats both of the above._',
  '_And rule 4: nothing at all on underwear or earrings, whatever has happened._',
  '**B:** Mine shrank in the wash after a month. — **A:** Then you are rule 2, not rule 1. Say "it is faulty — it shrank at the temperature on the label", and take the label.',
  '**C:** Mine was reduced and I have changed my mind. — **A:** Three days, and it is Thursday, so today.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Rule 2 · six months · "it is faulty — it shrank at the temperature on the label"._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the conditions on the back of a bus ticket. Two halves: what happens if **you** change your plans, and what happens if **they** cancel._',
  '_Your half: change once, free, up to 18:00 the day before. After that, nothing._',
  '_Their half: if they cancel, you get a seat on the next bus or your money back, and you choose._',
  '**A:** Which rule is mine? — **B:** Yours is the second, because the bus did not go. **A:** Do I get a choice? — **B:** You do, and they will offer the seat first because it costs them less. **A:** What should I say? — **B:** "The service was cancelled. I would like a refund, please." Nothing else.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Omar explained the policy on the back of a phone shop receipt. He started with the question that decides everything, which is whether the thing is faulty or whether you have changed your mind, because the two halves of the policy have nothing to do with each other. My problem was a charger that stopped working after five weeks, so I am rule three, not rule one — twelve months, and they repair first after thirty days, and five weeks is after thirty days. He also showed me rule five, which says my data is my responsibility, and that one is not about the charger but it is the one I should have read a year ago. So I decided I would take it in tomorrow and say "it is faulty — it stopped charging on the ninth" and nothing else, because he says the moment you say you are not happy with something, you have moved yourself into the wrong half of the page.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It says you have 14 days for faulty. → ✓ 14 days is for **a change of mind**; faulty is **12 months**.   ✗ The box is needed always. → ✓ The box is **not** required for faulty goods.   ✗ They will repair first in the first 30 days. → ✓ In the first 30 days **you** choose; they repair first **after** 30 days.   ✗ It says you have rights no affect. → ✓ the policy **does not affect your rights** if the goods are faulty.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 3'));
out.push(A('**1 B**   **2 B**   **3 C**   **4 B**   **5 A**   **6 C**'));
out.push(NOTE('**1** puts three real numbers in the text — 42, 54 and 420,000 — and only one answers the question. **6** is the one worth discussing: the answer is not the money or the measurement but the **last question she asked**, and the text says so in its final two sentences. Part 3 very often puts the answer to the last question in the last line.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Hi Rasha!',
  'One question first: is it **faulty**, or have you **just changed your mind**? It makes all the difference.',
  'If it\'s **faulty**, you\'ve got **twelve months** and you **don\'t** need **the box**. You need **the receipt, or anything that proves you bought it there**.',
  'And because it\'s less than **thirty days** old, they have to **replace it or refund it** — and **you** choose which. After **thirty days** they **repair** first.',
  'So go **tomorrow, not next week**. Don\'t say "**I\'m not happy with it**". Say "**it is faulty — it does not heat**" and say **the date you bought it**.',
  'If they say no, point at **the last line, which says the policy does not affect your rights if the goods are faulty**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (49 words)**',
  'Hi Sam! What exactly is wrong with it — does it not work at all, or not properly? Take the receipt; you don\'t need the box if it\'s faulty. Ask for a refund or an exchange, and say the word "faulty". Don\'t say you\'re not happy with it!',
]));
out.push(SAMPLE([
  '**Weaker sample (28 words) – why it only just passes**',
  'Hi Sam. What is the problem it? Take receipt and box. Ask them money back because is too bad. Bye.',
  '_All three points are answered and it is long enough, so it passes — but **What is the problem it?** should be **What is the problem with it?**; **Take receipt** needs **the**; **because is too bad** needs a subject and, more importantly, **too bad** is exactly the feeling-word this unit tells students to replace with **faulty**. A good one to correct together, because the content is right and the student has walked into the trap the whole unit is about._',
]));
out.push(S('Unit 21 check · A  Grammar and vocabulary'));
out.push(A('**1 b** such a   **2 a** such   **3 b** so much   **4 b** too   **5 b** big enough   **6 b** enough chairs   **7 a** I\'m afraid   **8 a** Could I'));
out.push(S('Unit 21 check · B  Listening (Track 21.14)'));
out.push(A('**1 B** (Lina – wrote the angry letter and did not send it)   **2 C** (Maya – admitted her own part)   **3 D** (Mr Rayyan – found another supplier and paid the difference)   **4 E** (Mr Khaled – a feeling replaced by a measurement)   **5 A** (Omar – asked the shops their real rules)'));
out.push(A('The two extra letters are **F** (asked to speak to the manager) and **G** (decided it was not worth complaining about).'));
out.push(NOTE('The full audio script for Track 21.14 is printed in the Student\'s Book **after** the questions. Read it **twice** at normal speed. Note that **F** and **G** are the two things most people actually do, which is why they are the distractors — and it is worth saying so after the check.'));
out.push(S('Unit 21 check · C  Writing (sample, 101 words)'));
out.push(SAMPLE(['**To: Al-Rayyan Printing. Subject: Order 1184 — wrong size delivered.** Order 1184 was placed on 3 April and paid in full, 420,000 SYP. Ordered: twenty T-shirts, size large, one design. Delivered on 14 April: twenty T-shirts, correctly printed, measuring 42 cm across the chest, where a large is 54 cm. They are too small for everybody they were ordered for. The printing is good and I want to say so; the problem is only the size, and it is the same on all twenty, so it is not a packing error. I would like them reprinted in large from the same file. If that is not possible before 30 April, I would like the order refunded in full. Could you tell me by Thursday which it will be?']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line that needs carrying forward is **_so_ against _too_** — not the grammar, which is easy, but the habit of reaching for _too_ in a complaint and _so_ in praise. Ten oral prompts at the start of each lesson for a fortnight fixes it; explaining it again does not.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 21 was about saying what is wrong. Unit 22 is about passing things on: _she asked me to tell you_, _he said he would ring_, and writing a short formal request.',
  'Ask the class to bring the three messages from the homework **exactly as they were given them**. Half of Unit 22 is the difference between what somebody said and what gets passed on, and it only works with real examples.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 21 · Answer Key');
