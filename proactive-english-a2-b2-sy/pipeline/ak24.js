// Proactive English A2 · Syria Edition · Book 2 · Unit 24 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 24  Looking Forward — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Two things must be ready before 24.1.** The **envelopes from Unit 13** — the predictions each student wrote for themselves in the first week of this book; and the **"not yet" list** from 23.2. If the envelopes were not written or have been lost, say so plainly at the start of the lesson and have the class write them now, for next year. It is a worse lesson and it is better than pretending.',
  '**Three futures, one rule each:** _going to_ for an intention you already hold · the **present continuous** for an arrangement that is in the day, with a time or a place · _will_ for a decision made at the moment of speaking, an offer, or a prediction. Students use _will_ for all three, and about half of those are wrong.',
  '**The error to hunt in 24.3** is ~~I am here since two years~~. It is the commonest single error in both books, it survives into B2, and this is the last cycle of the course in which you can make it somebody\'s habit to say _I **have been** here **for** two years_.',
  '**This unit has an ending in it.** Several of the stages are not language practice in the ordinary sense — the envelopes, the thanks in 24.5, the letter in 24.7. Give them the whole time they are allotted. The language in them is the language of the last twenty-four weeks and it is being used for something the students actually want to say.',
], C.lblue, C.navy));

// ===================== 24.1 =====================
out.push(pb());
out.push(h2('24.1  This time next year'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Give them a minute to read their own envelope in silence before anybody speaks. Expect two or three to be shaken by what is in theirs, and do not ask those students to read aloud; ask for volunteers and take the first three hands.'));
out.push(A('**b** **1** I\'m **going to** apply in February. _(a plan)_   **2** I\'m **meeting** my sister at six. _(an arrangement)_   **3** I\'**ll** help you. _(deciding now)_   **4** It **will** be hot in August. _(a prediction)_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – what the students wrote about themselves in Unit 13.'));
out.push(A('**b** **1** That by the end of the book she was going to have applied for the teacher-training course, and that she was not going to tell her mother until she knew.   **2** That it says "I am going to buy a camera" and is eleven words of nothing — until he reads it again and sees **with my own money**.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I\'m **going to** apply in February.   **2** I\'m **meeting** my sister at six.   **3** I\'**ll** carry that for you.   **4** It\'s **going to** rain. / It **will** rain.   **5** We\'re **booking** — _we **are getting** the chairs on Thursday_ (arranged).   **6** I\'**ll** ring you tonight.'));
out.push(NOTE('Item 4 takes either, and the difference is worth thirty seconds: _it is going to rain_ when you can see the sky, _it will rain_ when you are predicting from knowledge. Item 5 is the one students get wrong — it is already booked, so it is an arrangement and takes the present continuous, not _going to_.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "I ___ apply in February." (decided in December) — which one?',
  '**B:** Going to, because the plan already existed.',
  '**A:** And a true one about you?',
  '**B:** I\'m taking my mother to the clinic on the 18th.',
  '**A:** Is that a plan or an arrangement?',
  '**B:** An arrangement — the clinic knows about it and so does she.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_I\'m taking my mother to the clinic on the 18th_ — **arrangement**. _I\'m going to learn to drive_ — **plan**. _I\'ll help you with those_ — **decision now**. The giveaway for an arrangement is that somebody else knows; make the class use that test rather than the grammar.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_Plan: I\'m going to finish the driving lessons. Arrangement: I\'m starting at the new office on 1 September — it is in a letter. Prediction: I think the fees will go up and nobody will tell us until August._',
  '**b** _From my envelope: "I am going to stop being the one who says nothing in the meeting." It did not happen. I still intend it, and I have moved it to the next envelope, which is the fourth time._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda gave out the envelopes we wrote in the first week, in our own handwriting. Lina did not remember writing anything at all. Hiba\'s said that by the end of the book she was going to have applied for the teacher-training course and that she was not going to tell her mother until she knew — and she says she wrote it in January with no intention of doing it, because we had to write something. She applied in February, she has a place, and she told her mother on Sunday. Omar\'s said "I am going to buy a camera", which he called eleven words of nothing until Ms Huda made him read it again: it says with his own money, and he has done that. Ms Huda says next year we are going to write another one, none of us is going to believe that one either, and we should write it anyway.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Next year I will going to study. → ✓ I **am going to** study. / I **will** study.   ✗ I\'m going to meet my sister at six _(arranged)_ → ✓ I\'m **meeting** my sister at six.   ✗ I\'m going to can drive. → ✓ I\'m going to **be able to** drive.   ✗ I will apply in February _(decided last month)_ → ✓ I\'m **going to** apply.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That by the end she is not going to be able to remember which of them came back from Book 1 and which were new.'));
out.push(A('**2** Arranged: meeting the director in March about the second room, and taking the B1 group in September. Intended: stopping finishing their sentences.'));
out.push(A('**3** That she will teach the book the way she taught it last year, because it worked last year.'));
out.push(NOTE('The envelope is the model for Stage 7 and the two things to point at are the **nine years** under _What I am going to do_ — an intention with its own history of failure attached — and the instruction at the end. Students write intentions with no history and no instruction, and both are what make the page worth opening.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**June · for next June · Rasha',
  'I am going to be in the new office for a year, with eleven people I do not know, and by next June I am going to know which three of them I can ask anything.',
  '**What I am going to do.** I am going to speak first in meetings, once, in every meeting. I have promised myself that in four jobs and I have done it in none of them.',
  '**What is already arranged.** I am starting on 1 September. I am seeing my cousin in Latakia in August, which I have put off for two years.',
  '**What I think will happen.** I will be worse at it than the person who left, for about four months, and somebody will tell me that is normal and I will not believe them.',
  '**What I am afraid of.** That I will be comfortable by March and stop asking questions.',
  '**For next June:** read the second paragraph first, and count.',
]));
out.push(S('Stage 7 · Write freely (sample, 140 words)'));
out.push(SAMPLE([
  '**June · to be opened in June next year · Hiba**',
  'I am going to be a student again at twenty-nine, four days a week, with people who are nineteen, and I am going to be in a shop on the fifth day with my mother.',
  '**What I am going to do.** I am going to ask one question in every class, even when I understand. I have been the person who understands and says nothing for eleven years, and the only room where I stopped being her is this one.',
  '**What is already arranged.** The course starts on 14 September. I am working Fridays in the shop from October. I am coming to the end-of-course evening on the 27th.',
  '**What I think will happen.** My mother will not mention the course again until something goes wrong, and then she will be the only person who helps.',
  '**What I am afraid of.** That I will be good at the course and bad at the shop, and that I will let the second one happen quietly because the first one is where I am praised.',
  '**For next June:** if the shop paragraph came true, ring your mother before you read the rest of this.',
]));
out.push(S('Stage 7P · Respond (sample marks)'));
out.push(A('★ _"the only room where I stopped being her is this one." I want to read that in a year._   ✓ _"I am going to ask one question in every class" — I have written a version of this before and not done it._   ? _"I will let the second one happen quietly" — I am not sure I mean "quietly", and I am not changing it._'));
out.push(S('Stage 7R · Share'));
out.push(A('Seal them properly, with a date on the front, and keep them somewhere that is not a drawer you will clear. The count of how many have written a sentence they are afraid of is usually between half and all of them, and the number said out loud does more than any comment you could make.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**For my brother, to be opened in June.** You are going to finish your service in October and you are going to come home to a city you have not lived in for two years. **What I think will happen:** you will be angry for about a month and everybody will say nothing about it, including me, and I am telling you now so that when it happens you know that I know. **What I am not going to predict:** anything about the job, because I would be guessing and you would hold me to it. **For June:** ring me before you ring anybody about work.']));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  What are you going to do?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the only rule is speed. Eight statements across the two books — present, past, present perfect, _going to_, _will_ — and the class turns each into a question. The auxiliary first, no pauses.'));
out.push(A('**b** **1** _Have you decided?_ — **now**, with the past inside it.   **2** _Did you decide?_ — **a day in the past**, and it needs a time.   **3** _Are you going to decide?_ — an **intention**.   **4** _Will you decide?_ — nearly a **request**, and in some voices a complaint.'));
out.push(NOTE('Item 4 is the one worth a minute. _Will you decide?_ is grammatically a question about the future and in use it is usually pressure. Students who do not know this ask it of managers and landlords and are surprised by the answer they get.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – asking Omar six questions about next year.'));
out.push(A('**b** **1** Where he wants to be in five years.   **2** That it was the only one of the six he answered without first deciding what she wanted to hear.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Are** you going to carry on?   **2** **Have** you told your father yet?   **3** **Did** you apply in February?   **4** **What are** you going to do about the shop?   **5** **Where do** you want to be in five years?   **6** **Will** you be there on Thursday?'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Six questions. Are you going on to B1 in September?',
  '**B:** Not in September. In January, if the money is there.',
  '**A:** Have you told anybody at home?',
  '**B:** My wife. Nobody else, and that is the honest answer to the question you are really asking.',
  '**A:** Are you meeting anybody about it?',
  '**B:** No. And I have just heard myself say that.',
  '**A:** What are you going to do about the money?',
  '**B:** Ask at work. I have not asked because I have decided in advance that they will say no.',
  '**A:** Last one. Where do you want to be in five years?',
  '**B:** Teaching something. I have never said that out loud before and I am not going to explain it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The answer to the last question, word for word where possible. The hardest to **answer** is nearly always the last; the hardest to **ask** is nearly always question 2, about home — and the reason both are hard is the same, which is worth saying.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Six questions, no comment until all six are asked. The rule matters: the first comment ends the honesty._',
  '**b** _What surprised me about myself: I answered "what are you going to do about the money?" with "ask at work", and I have not asked, and I have been telling myself for four months that they would say no. Nobody has said no. I have._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour asked Omar six questions. He is going on to B1 in September and has paid the first part. His father has not been told, but his father asked him whether he was going to carry on, which Omar says is as close as he gets. He is going to go on taking photographs, and he is meeting the man from the paper on the ninth — the first time anybody has arranged to meet him about anything. He is going to do nothing about the workshop for two years, and he says that is not the safe answer. And the last question, where he wants to be in five years, he could not answer: he has noticed that he does not mind not knowing, which is new. Nour told him that was the only one of the six he answered without first deciding what she wanted to hear.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ You are going to carry on? → ✓ **Are** you going to carry on?   ✗ What you will do? → ✓ What **will** you do?   ✗ Are you going to go on to take photographs? → ✓ go on **taking**.   ✗ Where you want to be? → ✓ Where **do** you want to be?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The month you will decide in, written as a date.'));
out.push(A('**2** Because most people who stop, stop because nobody at home knows it matters — so the question is about who knows, not about the fee.'));
out.push(A('**3** "I do not know" is an answer and is allowed; a blank is not. The sheet says the difference between those two is the whole of it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BEFORE SEPTEMBER — six questions** · for whoever takes over the reception desk',
  '**1. Are you staying past the first three months?** Yes, no, or not yet. If it is "not yet", write the month you will decide in, as a date.',
  '**2. Have you told anybody at home what this job actually is?** If you have not, that is the question, not the hours.',
  '**3. What has it cost you in evenings?** Write the number. People who know the number ask for something; people who call it "just busy" do not.',
  '**4. What are you going to do about the one thing that frightens you here?** Name it. For most people it is the telephone.',
  '**5. What is already arranged for next month?** Not what you intend — what is in the day, with a date.',
  '**6. Do you want this job in two years?** You may answer "I do not know". You may not leave it blank.',
]));
out.push(S('Stage 7 · Write freely (sample, 133 words)'));
out.push(SAMPLE([
  '**BEFORE JULY — six questions** · for the three of us who are leaving the flat',
  '**1. Are you going to look for somewhere with the other two?** Yes, no, or not yet, and if it is not yet, the week you will say.',
  '**2. Have you told your family what you can actually afford?** If you have not, every conversation we have about rent is a guess.',
  '**3. What has this flat cost you a month, including the taxi when the water was off?** Write the number. The three of us have never once said our numbers out loud to each other.',
  '**4. What are you going to do about the thing you have not mentioned for a year?** Name it. For me it is that I cannot work in a room with the television on.',
  '**5. What is already arranged?** Not what you intend — I have given notice for 31 August, in writing, and that is the only fixed thing any of us has.',
  '**6. Do you want to live with us again?** You may answer "I do not know". You may not answer it politely.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _Question 3. We have never said our numbers and it is the reason every discussion goes in circles._   ✓ _Question 1 — I could answer that with "probably" and you would let me._   ? _What are you going to do with my answers? Are we going to read them to each other?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect three and expect question 2 to win. When you ask why, nobody says money; they say that the person at home would ask them to justify it, and that they do not have the sentence ready. That is a language problem and it is 24.4, which is the next cycle.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['My own six, answered. 1 Yes, September, paid. 2 My mother, on Sunday. 3 Four hours a week times thirty-one, plus about ninety minutes of homework — a hundred and seventy hours, which I have never added up before. 4 Reading out in front of the room; I am going to do it once in the first fortnight of B1 so that it is done. 5 The course starts on 14 September and the shop is Fridays from October. 6 Teaching, in a school, not a centre. I asked my mother question 2 and she said "I knew in February", which I have not finished thinking about.']));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  How long have you been here?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Four minutes, standing, in English. It produces forty uses of _for_ and _since_ in a form nobody can avoid, and it tells you in one minute who has been there longest, which you will need for Stage 4.'));
out.push(A('**b** **1 for** two years   **2 since** 2013   **3 for** nine months   **4 since** I was nineteen   **5 since** the winter   **6 for** a fortnight'));
out.push(NOTE('_since the winter_ is the one that splits a class. A season is a **point** you are counting from, like a month or a year, so it takes _since_. The test to give them is the question it answers: _for_ answers "how long?", _since_ answers "from when?"'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – how long each of them has been coming.'));
out.push(A('**b** **1** Hiba — two years and two months, since the March before last.   **2** She has stopped needing her English checked: she has written to Türkiye alone, complained to a printer and got the money back, and taken over Rana\'s job.'));
out.push(S('Language box · Practise'));
out.push(A('**1 for** two years   **2 since** 2013   **3 for** nine months   **4 since** I was nineteen   **5 since** the winter   **6 for** a fortnight   **7 since** last Thursday   **8 for** ten minutes'));
out.push(NOTE('Every answer must be a **sentence**, and every sentence must be a present perfect: _I **have been** here for two years._ Accepting the bare phrase is how ~~I am here since two years~~ survives the cycle. This is the single most valuable correction in the book and it is the last chance to make it automatic.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** How long have you been coming to this centre?',
  '**B:** For nine months. Since September.',
  '**A:** And how long have you lived in your flat?',
  '**B:** Since 2019 — so that is five years.',
  '**A:** What have you done in that time that you could not do before?',
  '**B:** I have argued with the landlord in writing. Twice. I would not have known where to start in 2019.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('Four answers, every _for_ and _since_ marked. The error that appears, if it appears, is nearly always on a **number of years** — _since two years_ — and it is worth writing on the board the moment you hear it rather than at the end.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I have been coming here for nine months, since September. I have lived in Damascus since 2011, which is thirteen years. I have worked at Medica for three years, since the April before Rana came. And I have known the person next to me for nine months — since the first Thursday, when neither of us spoke._',
  '**b** _What my partner cannot see: she asks a question in this room every single week now. In September she asked me to ask things for her. She does not remember that and I do, because I was the one being asked._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba has been coming for two years and two months, since the March before last. Omar has been coming for two years — he started the week after Hiba and she has never let him forget it. Lina and Nour have both been coming for nine months, since September, and Nour says it feels like four. Hiba says what she has done for two years that she did not do before is talk in front of a room, every Thursday, and that she has not minded it since about March. Lina said she could not name anything at all in nine months, and Omar named three: she has written to Türkiye on her own, she has complained to a printer and got the money back, and she has taken over Rana\'s job. She said that is work, not this, and he said she did the first one in English, in writing, by herself, in April, and that she could not have done it in September — and he was there in September.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am here since two years. → ✓ I **have been** here **for** two years.   ✗ since nine months → ✓ **for** nine months.   ✗ for September → ✓ **since** September.   ✗ I have been here since I am nineteen. → ✓ since I **was** nineteen.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because none of it arrived: there was no day on which she learned to write a formal letter or could suddenly complain and get the money back.'));
out.push(A('**2** Writing to a supplier alone — 2 April; saying "I am afraid that is not acceptable" out loud — 11 May; asking somebody a question twice — so often since February that she has stopped counting.'));
out.push(A('**3** Keep a page — one line a month, the thing she could not do last month — because she has lost nine months of it and losing it is why she stood there with nothing to say.'));
out.push(NOTE('This page is the reason the cycle exists and it is worth reading the last paragraph aloud yourself. Then ask the class to start the page in the back of their books, in the lesson, with June\'s line. One line in a lesson is a habit; a page to start at home is not.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Nine months · 14 June · for myself**',
  'I have been coming here since September. Nine months, four hours a week.',
  'It is because none of it arrived. I did not learn to speak in front of people on a Tuesday.',
  '**Here is what I could not do in September, and I have the dates.** I could not read anything out loud — I did that on 3 February. I could not correct somebody who was wrong — I corrected Ms Huda on 11 March and I was right.',
  'And one more, which is the one I mind: in September I did not answer anybody in this room unless I was asked by name.',
  '**What I am going to do.** I am going to keep a page. One line a month.',
]));
out.push(S('Stage 7 · Write freely (sample, 144 words)'));
out.push(SAMPLE([
  '**Six years at the shop · 14 June · for myself**',
  'I have worked in my mother\'s shop since I was twenty-three. Six years, six days a week. If anybody asked me what I have learned there I would say "nothing, it is a shop", and I want to write down why that is a lie.',
  'It is because none of it arrived. There was no day on which I became able to tell a man he was wrong about his own order.',
  '**Here is what I could not do at twenty-three, and I have the dates.** I could not take money off somebody I knew — the first time was the week my mother had influenza, in the February of 2019. I could not say "we do not have it and I am not going to pretend we will" — I said that to Abu Ziad in the spring and he has been back every week since. I could not count a day\'s takings without checking twice.',
  'And one more, which is the one I mind: for four years I said "my mother\'s shop" and not "the shop".',
  '**What I am going to do.** One line a month, in the back of the order book, where I will see it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"for four years I said my mother\'s shop and not the shop." I would not have believed that was the thing you minded._   ✓ _"I could not count a day\'s takings without checking twice" has no date on it._   ? _Is one line a month small enough? You have six years to catch up on and you may try to do it all in June._'));
out.push(S('Stage 7R · Share'));
out.push(A('Four "the one I mind" lines, read aloud. In every class I have done this with, all four turn out to be about speaking, or about being seen to be the person who does not speak, rather than about English. Saying that out loud in the last fortnight of a course is worth more than the grammar it sits next to.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked my father. He has been a driver since 1991 — thirty-three years — and for the first nine of those he did not own the lorry. What he could not do when he started: find anywhere between Homs and Aleppo without asking twice; say no to a load that was too heavy, which he says took him until about 1996 and cost him a back; and sleep in a cab, which he says he learned in one night and has never lost. His _since_ is 1991 and his _for_ is thirty-three years, and he gave me both without being asked which was which.']));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  I hope… and I\'m worried that…'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, round the room, no repeats, and the ban on "I hope everything will be fine" is the exercise. Expect the third or fourth person to stall; give them the sentence frame and not the content.'));
out.push(A('**b** Each one both ways, for example: **1** _I hope the course will be harder than I think._ / _I am worried that the course will be harder than I think._ The same clause, two frames, and the class hears how much of a worry is a hope with the stress moved.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – her mother.'));
out.push(A('**b** **1** That her mother will say something difficult — one sentence that Hiba has to answer, so that it is between them and not inside her.   **2** The course and the shop. It is strange because what she is actually afraid of is that her mother **will be fine** about it: if her mother is angry she can argue, and if her mother simply says "of course, go", Hiba will have taken four days a week from her without a word and will carry that.'));
out.push(S('Language box · Practise'));
out.push(A('**1** _I hope the course will not be too difficult._ / _I\'m worried that the course will be too difficult._   **2** _I hope my mother will not be angry._ / _I\'m worried that she will be angry._   **3** _I hope the money will be enough._ / _I\'m worried that it will not be enough._   **4** _I hope they will know each other._ / _I\'m worried that they will all know each other already._   **5** _I hope I will not forget my English._ / _I\'m worried that I will forget it._'));
out.push(NOTE('Item 4 is the useful one: the hope and the worry are opposite facts, not the same fact two ways. Ask the class which they actually feel about a new class, and the answer in most rooms is the worry — and it is the first thing the letter in 24.7 is written to deal with.'));
out.push(S('Stage 3 · Practise (sample – Card A, "September")'));
out.push(SAMPLE([
  '**A:** September.',
  '**B:** I hope that the new class will be as easy to talk in as this one. And I am worried that it will not be, and that I will go back to being quiet.',
  '**A:** What are you actually afraid of?',
  '**B:** Not that. I am worried that in a new room I will find out that it was this room and not me.',
  '**A:** And what do you hope?',
  '**B:** I hope it was me. That is all.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The first worry and the second one. The second is nearly always about a person or about themselves, not about a thing — and once the class has heard that twice, the Stage 4 answers change.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I hope that the new office will be a place where I can ask things. I am worried that I will be the oldest person who does not know how anything works._ — **What are you actually afraid of?** _That I will pretend to know, on the first day, and then have to keep pretending._',
  '**b** _The one I have never said at home is the second. At home I am the one who knows how things work._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina asked Hiba what she is actually afraid of, the course or the shop, and it is neither: she is worried that her mother will be fine about it. If her mother is angry she can argue; if her mother says "of course, go", then she has taken four days a week off a woman who has stood in that shop since she was seventeen, and it will have been given without a word, and Hiba says she will carry that. What she hopes is that her mother will say one difficult sentence that she has to answer, so that it is between them and not inside her. Lina\'s is that she will be worse at Rana\'s job than Rana and that everybody will be kind about it — and Hiba told her she will be worse at it, for about four months, which Lina says is the most useful thing anybody has said to her. And Lina hopes that in October she will not be able to remember what she was frightened of in June.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am worried for the exam. → ✓ worried **about** the exam / worried **that** I will fail.   ✗ I hope to she will come. → ✓ I hope **that** she will come.   ✗ I am afraid of be late. → ✓ afraid of **being** late.   ✗ I wish she will come. → ✓ I **hope** she will come.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That she knows what the shop is — forty-one years — and that she is not going because the shop is small. Not first, because said first it becomes the reason and the news becomes an apology.'));
out.push(A('**2** Who is going to do the Thursdays, the stocktaking and the deliveries — and she hopes for them because she has an answer to all three and has had it for a month.'));
out.push(A('**3** Because it would make her mother feel better and it is not true any more.'));
out.push(NOTE('Answer 1 is the whole page and the hardest thing in the cycle to teach. The order of what you say decides what the other person hears: the same two sentences in the other order turn an announcement into a request for permission. Make the class say both orders aloud.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Before Thursday · what I am going to say, and what I am not** · Rasha',
  '**What I am going to say.** I am taking the job in the new office. I start on 1 September and I am going to take it.',
  '**What I am going to say second, and not first.** That I know what the last four years here have been, and that I am not leaving because of any of it.',
  '**What I hope they will do.** I hope he will ask me who is going to do the stocktaking, because I have an answer and I have had it for three weeks.',
  '**What I am worried about.** I am worried that he will say "good for you" in the corridor and that we will never speak about it again.',
  '**What I am not going to do.** I am not going to apologise. I am not going to say "it is only across town".',
  '**The sentence I am most afraid of:** "I thought you were happy here."',
]));
out.push(S('Stage 7 · Write freely (sample, 131 words)'));
out.push(SAMPLE([
  '**Before Sunday · the conversation I have been putting off for two years** · Omar',
  '**What I am going to say.** I am not going to take over the workshop. Not in two years and not in five.',
  '**What I am going to say second, and not first.** That it is the best thing anybody has ever offered me, and that I know what it took him to build it, and that none of that is why.',
  '**What I hope he will do.** I hope he will ask me what I am going to do instead, because then I have to answer it and I have been avoiding answering it.',
  '**What I am worried about.** I am worried that he will say "I know" and go back to the engine. If he does that, the conversation is over and nothing is said, and we will both decide privately what the other one meant.',
  '**What I am not going to do.** I am not going to say "maybe one day". I am not going to mention the photograph.',
  '**The sentence I am most afraid of:** "Who is it for, then?"',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I know what it took him to build it, and none of that is why." That is the line that keeps the conversation alive._   ✓ _"I am not going to say maybe one day" — and the first section nearly says it._   ? _Are you going to say the second section at all, or only if he asks?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the feared sentences under eight words; it is usually most of them. Then ask how long each has been waiting. The pairing of those two numbers — eight words, two years — is the whole cycle, and it needs no comment from you.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I had it on Sunday. What I was afraid of: "I thought you were happy here." What he actually said, after about ten seconds: "Which office?" Then he asked who would do the stocktaking, which I had the answer to, and then he said the thing I was not ready for, which was "you should have told me in March when I could have matched it". So the sentence I was afraid of was not the one that came, and the one that came was worse and more useful, and I would rather have it than not.']));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  Thank you for the Thursdays'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Collect them and read six aloud without naming the writer. The instruction that it is not a game matters: if the class turns it into guessing, it stops being usable in Stage 7.'));
out.push(A('**b** All four take **-ing** or a noun: **1** _Thank you for **staying** behind._   **2** _Congratulations on **getting** the place._   **3** _I want to thank you for **teaching** us on the Thursdays._   **4** _Well done for **asking** twice._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – both.'));
out.push(A('**b** **1** The Thursdays she did not have to do — the November one, when four of them came and the heating was off and she taught the whole ninety minutes; and, from Omar, for not finishing their sentences.   **2** For coming on the Thursdays when they did not want to: eleven of them in November and four came, and she says in nine years she has never had a class where the people who were not going anywhere came anyway.'));
out.push(S('Language box · Practise'));
out.push(A('**1** Thank you for **staying** behind.   **2** Congratulations on **getting** the place.   **3** Thank you for **not saying** anything.   **4** Well done for **asking** twice.   **5** I want to thank you for **teaching** us on the Thursdays.'));
out.push(NOTE('Item 3 is where the marks are: the negative goes **before** the _-ing_ — _thank you for **not saying**_ — and it is also the most valuable sentence in the cycle, because nobody is ever thanked for something they did not do.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Thank you for teaching the lesson when four people came.',
  '**B:** Four people is a class. Eleven people is a room.',
  '**A:** And thank you for not finishing our sentences.',
  '**B:** That was harder than the November Thursday. Nobody has ever mentioned it.',
  '**A:** And congratulations on the second room.',
  '**B:** Thank you. Three years, and it is yours before it is mine — you are the ones who will be in it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('The negative thanks — _thank you for not finishing our sentences_ · _for not telling anybody what I said in March_ · _for not asking me whether I was all right_. Ask which of the three thanks the person would remember in a year; it is the negative one every time.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Ordinary: thank you for lending me the book in October. Not thanked for: thank you for not telling anybody that I cried in the corridor in January. You did not mention it to me either, which is the part I mean._',
  '**b** _The person not in this room is my aunt, who has collected my daughter from school every Thursday for two years so that I can be here, and who has never once said she was doing it for that._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The class thanked Ms Huda and Hiba was made to say it. She thanked her for the Thursdays she did not have to do — the November one, when there were four of them and the heating was off and she taught the whole ninety minutes. Omar thanked her for not finishing their sentences: she said in January she was going to stop, she did stop, and he says it was horrible for about a month. Ms Huda said thank you for noticing the second one, because nobody has ever noticed the second one. Lina congratulated her on the second room, which she has been asking for for three years. Then Ms Huda thanked them for coming on the Thursdays when they did not want to — eleven of them in November and four came — and said she has taught for nine years and never had a class where the people who were not going anywhere came anyway. And she congratulated Lina on nine months, which Lina still cannot see.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Thank you for help me. → ✓ Thank you for **helping** me.   ✗ Thank you for to help me. → ✓ for **helping**.   ✗ Congratulations for your place. → ✓ Congratulations **on** your place.   ✗ Thank you for don\'t say anything. → ✓ Thank you for **not saying** anything.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He counted a silence, in February — eleven seconds while he found a word. He says it was the longest eleven seconds of his life and he found the word.'));
out.push(A('**2** Because she writes them down for everybody, since September — and Lina\'s is the longest list in the class.'));
out.push(A('**3** For asking who was going to do the Thursdays instead of saying "of course, go" — because it is the only question all week that Hiba had an answer to.'));
out.push(NOTE('Note 2 is the teaching point for the whole book, not only this cycle: keeping dated evidence for every student costs five minutes a week and is the only answer to the student in 24.3 who cannot name a single thing. If you do nothing else from this unit, start the list in September.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Thanking:** Thank you for the lift to the hospital in January, which took you two hours and which cost you a morning\'s work. I counted, afterwards, and you did it four times and you never once said you were coming — you were just outside at eight.',
  '**Congratulating:** Congratulations on nine months of Thursdays. You will not believe this list and I am writing it anyway: you read out loud on 3 February; you corrected the teacher on 11 March and you were right; and you wrote to a supplier on your own in April. I have the dates because I sit next to you.',
]));
out.push(S('Stage 7 · Write freely (sample, 126 words)'));
out.push(SAMPLE([
  '**To my aunt, who has never been thanked for this**',
  'Thank you for collecting Maryam from school every Thursday for two years.',
  'I worked it out this week: that is about eighty Thursdays, and about a hundred and twenty hours, and it is the reason I have been able to come to this class at all. The certificate I am going to be given in two weeks is as much yours as mine, and I am not saying that to be kind — without the Thursdays there is no certificate.',
  'And thank you for never telling me you were doing it so that I could study. You said you liked the walk. You do not like the walk; you have told my mother about your knee twice this year.',
  'The one thing I want you to know: Maryam has started saying she is going to be a teacher. She has heard it from both of us and she thinks it is normal, and that is not nothing for a girl in our family.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"You do not like the walk." Four words, and it says I noticed._   ✓ _"The certificate is as much yours as mine" could be written to anybody; the knee could not._   ? _Are you going to give it to her, or is it going in a drawer?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Hand them out in the room, physically, before the lesson ends. For the people who are not there, count the hands and write the number on the board; then ask again at the end-of-course evening, which is the only follow-up that has ever made any difference to this task.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave it to her on Friday and she read it standing up, in the kitchen, and said "well" and then nothing at all, and then she folded it and put it in the pocket of her housecoat and went out to the balcony for about ten minutes. She has not mentioned it since. On Sunday my mother told me she had shown it to two of her neighbours. So: nothing said, and it is in the pocket, and two neighbours know. That is what being thanked looks like in my family and I understand it perfectly.']));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  Keeping in touch'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** _See you Thursday_ — next week, and it is arranged. _See you around_ — probably never, and both of you know it. _Keep in touch_ — warm, and usually the end. _All the best_ · _Look after yourself_ — you may not meet again. _Goodbye_ — more final in English than students expect.'));
out.push(A('**b** **2** and **4** will happen, because each has a **place** or a **date** in it. **1** and **3** have only a feeling, and the difference is not sincerity — the people who say "we must meet up" mean it as much as anybody.'));
out.push(NOTE('That last point is worth making explicitly, because students hear this cycle as being about honesty and it is not. It is about what a sentence contains. _Let\'s keep in touch_ is sincere and empty; _come into the shop on a Tuesday_ is no more sincere and it works.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – three.'));
out.push(A('**b** **1** Because Mr Fouad is opening the second workshop in October and for six months she is going to be the person standing in it — and she says it is not the money and not that she does not want it.   **2** He takes her number and writes "ask about B1" next to it, and says he is going to ask her in August, because "keep in touch" is what people say when they are not going to.'));
out.push(S('Language box · Practise'));
out.push(A('**1** Polite → _Come to us on a Friday; we are always in after seven._   **2** Polite → _I am going to write to you at the end of August._   **3** Polite → _I am in the centre on Thursdays; come and find me._   **4** Polite → _I\'ll ring you on the ninth._   **5** Polite → _Come on the 27th — we are all there at seven._'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** We must meet up some time.',
  '**B:** Make it real. When are you free?',
  '**A:** Thursdays, after six, most weeks.',
  '**B:** Say it again with a date.',
  '**A:** The Thursday after the evening — the fourth of July — and you are allowed to ask me in June.',
  '**B:** I am going to ask you in June. Give me your number.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Come to us on a Friday after seven_ · _I\'ll ring you on the ninth_ · _the fourth of July_. The ones with a date are real; the one that comes out as "I\'ll let you know" is the one to put on the board, because every class produces one and nobody notices it happening.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Goodbye version: all the best, and look after yourself, and thank you for the nine months. Real arrangement: I am in the library in Mezzeh on Saturday mornings, between ten and twelve, nearly every week. Come and find me there._',
  '**b** _I said "keep in touch" to a woman I worked with for four years and I have not spoken to her since 2021. I am going to write to her this week, and I am going to put the twenty-seventh in it, because she knows this class exists._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Three of the four are going on to B1 in September. Omar has paid. Lina is going and the company is paying half, which she asked for and got, and which she says is another thing she could not have done in September. Nour is not going this year, because Mr Fouad is opening the second workshop in October and for six months she is the person who will be there, and she says it is not the money and not that she does not want it. Omar told her to say when and not whether, and then to say it again with a date, and she said the first week of September next year and that he may ask her in August. He has taken her number and written "ask about B1" next to it, because "keep in touch" is what people say when they are not going to. And the evening is on the twenty-seventh, all four of them, which Hiba says is an arrangement and not a hope.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ See you on Thursday _(not arranged)_ → ✓ See you around. / Are you free on Thursday?   ✗ Good bye. → ✓ **Goodbye**, or _see you_.   ✗ Keep in touch me. → ✓ **Keep in touch.**   ✗ I will ring you some time. → ✓ I\'ll ring you **on the ninth**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because she is coming back and does not want to be somebody who said they would.'));
out.push(A('**2** For not asking her whether she was all right in November — he asked her what she was going to do about it instead, which she says is a different question and the only one she could answer.'));
out.push(A('**3** Asking Nour to check every sentence she wrote in English. She stopped in February, she did not notice stopping, and Nour did.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To Mr Khaled:** Thank you for four years. I am not staying past August and I want you to have the reason in writing, because I am not leaving for the money and I do not want that to be the version that gets told. The new office is a department of eleven and I will be the only person doing what I do here. I am coming back to this building for the stocktaking in January if you want me, and if I have not written to you by the first of December, write to me.',
  '**To Rana:** Two things. The Türkiye account is not harder than you think it is and you should take it yourself in September. And thank you for not telling me what to write in April. You asked me what I was going to do if he said no instead, which is a different question and the only one I had to think about.',
]));
out.push(S('Stage 7 · Write freely (sample, 139 words)'));
out.push(SAMPLE([
  '**To the four of us, written on the last Thursday · Nour**',
  'This is not a goodbye and I am going to prove it with a date rather than a sentence.',
  'What is ending: nine months of Thursdays, and me sitting at the desk by the window where I could see who came in late, including Omar, every week.',
  'What is not ending: I am coming back in the first week of September next year. Omar has "ask about B1" next to my number and I have "he is going to ask" next to his, and the two of those together are the only reason I believe myself.',
  'The specific thing, from where I sit and where you cannot: Lina, in September you asked me to check every sentence. You stopped in February and you did not notice. Hiba, you talked yourself out of the application three times in January, in this room, and you applied anyway. Omar, you have never once said the newspaper was luck and I have been waiting for you to.',
  'The instruction: the twenty-seventh, seven o\'clock, all four of us. If one of us is not there the other three ring, that evening, not the week after.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"If one of us is not there the other three ring, that evening, not the week after." That is the line that means you are coming back._   ✓ _"This is not a goodbye" is a promise with no date — and then you give three, so cut the sentence, not the dates._   ? _What happens if neither of you writes in August?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Exchange numbers in the room, with a reason written next to each one. The last question always produces laughter and then a count: most people have between two and ten numbers they cannot identify. It is the cheapest possible demonstration that "keep in touch" without a reason attached does nothing.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent the one to Rana on Thursday night with the date in it — the stocktaking in January, and the twenty-seventh if she can come. She answered on Friday: "January, yes. And I am coming on the 27th, and I am bringing the chairs, because I have just rung Omar and nobody has booked the chairs." So the date worked twice: it got me an answer and it found out about the chairs, which nine people have assumed somebody else was doing for three weeks.']));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: What would you tell the next class?'));
out.push(S('Stage 1 · Get ready – Unit 24 quiz'));
out.push(A('**1** I **have been** here **for** two years.   **2** Thank you for **helping** me.   **3** Congratulations **on** your place.   **4** I hope **(that)** she will come.   **5** I am worried **about** the exam. _(or: worried **that** I will fail it)_   **6** Next year I **am going to** study. _(or: I **will** study)_'));
out.push(NOTE('These six are the six commonest errors of the whole book, collected deliberately for the last quiz in A2. Number 1 is worth two minutes on its own; if a student leaves this course saying _I have been here for two years_ without thinking about it, the course has done something that will last.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** They say **point 1** matters most — the Thursday after the first test — and Omar makes it sharper: not "ring them" but "ring them yourself, today, because the other ten are thinking what you are thinking", since nobody rang the two they lost precisely because everybody assumed somebody else would. What they **add** to the old letter is Lina\'s one line a month, Nour\'s rule that if you have to stop you stop with a date, and a point five of their own: that they let Lina spend nine months believing she was doing nothing, with four of them holding the evidence.'));
out.push(S('Stage 3 · Practise (sample – Letter A, the nurse, explained without showing it)'));
out.push(SAMPLE([
  '_Five points, and the one that matters is the first, because it is the only one with a time in it: the second month is when the new people disappear._',
  '_Point 2 is practical and small — write down every name on your first day, because you will not do it again._',
  '_Point 3 is the one I would argue with: ask the question in front of the patient, not after. I can see why, and in some rooms it would cost you the patient\'s confidence._',
  '_Point 4 is the invisible thing: nobody will tell you when you have stopped being new._',
  '_And point 5 is the one they got wrong: they did not tell each other when they were frightened._',
  '**B:** Which would you keep? — **A:** Point 1, and I would add a day to it, like the letter from the last class did.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Most important: the second month. · Would argue with: asking in front of the patient. · What we got wrong: we did not tell each other when we were frightened._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The day it happens: the second Tuesday, when the person you are covering for stops answering the telephone._',
  '_The instruction with a person in it: start the message book yourself on day one — do not wait to be given one, because the person who should have given it to you is the person who lost the four messages._',
  '_The invisible thing: you will not notice you have stopped being frightened of the telephone, so write down the date you first rang somebody back without rehearsing it._',
  '_The rule for stopping: stop with a date._',
  '_What I got wrong: I did not ring a number back for two days and by then it was dead. So not "write everything down" — "ring back the next morning or you are too late."_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Nour\'s letter is to the next person who takes over a reception desk. Her first point is the day it happens: the second Tuesday, when the person you are covering for stops answering the telephone and you find out whether anybody told the customers. Her instruction with a person in it is to start the book yourself on day one and not wait to be given one, because the person who should have given it to you is the person who lost the four messages. The invisible thing is that you will not notice you have stopped being frightened of the telephone, so she says write down the date you first rang somebody back without rehearsing it. Her rule for stopping is to stop with a date, which is what Omar made her do. And what she got wrong is that she did not ring a number back for two days, and by then it was dead. So I decided my letter would have a day in it as well, because mine was all advice and none of it had a date.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ The letter says people stop coming. → ✓ it names the **day**: the Thursday after the first test.   ✗ You must ring them. → ✓ **ring them yourself, today** — the instruction needs a person and a time in it.   ✗ The eleven who left were lazy. → ✓ the letter refuses that: **four of them were better than us**.   ✗ We was kind to each other. → ✓ we **were** kind to each other.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading, Parts 1–5'));
out.push(A('**1 B** Students who have paid keep their place until 15 July.   **2 B** If you stop this year you may come back next year at the same fee.'));
out.push(A('**3 B** nine   **4 A** they learned less   **5 A** in   **6 B** since   **7 A** have written   **8 B** after'));
out.push(NOTE('**1** and **2** are Part 1 and both distractors come from reading half the notice — **A** ignores "for students who have paid" and **C** invents the waiting list closing. **5** is _in the first month_, a period, not a point. **6** is the last _for_/_since_ item in the book: _since September_. **7** needs the present perfect because the sentence ends _since September_ and the writing is still going on; **B** is the trap for anybody who stopped reading at the comma.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  '**TO THE CLASS THAT COMES AFTER US** · left in **June**',
  '**Nine** of us finished. There were **sixteen** in the first week. We are not going to tell you **that the seven who left stopped caring, because two of them were better at this than we are**.',
  '**1. The Thursday after the first test is the day people stop coming.** **Ring them** yourself, **that evening**, because **the other ten are all thinking what you are thinking, which is that somebody else will do it**.',
  '**2. The writing is the part that moves.** **You cannot hear yourself write, so keep every Stage 7 and read the week-two one in June.**',
  '**3. Say the thing you cannot say, in front of everybody, early.** **The people who left mostly left without ever having done it once.**',
  '**4. Write down what you could not do last month.** One **line** a **month**. Twelve lines in a year and nobody will have to tell you what you have learned.',
  '**5. And the thing we got wrong:** **we let one of us believe for nine months that she was doing nothing, and four of us had the dates in our heads the whole time and said them in June.**',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 7 (samples)'));
out.push(SAMPLE([
  '**Strong sample (52 words)**',
  'In September a woman had to speak in front of her class. She was frightened and she looked at the floor the whole time. In April a colleague tried to check her letter, but she said no and showed him her own page. In June she stood up and talked, and people laughed, and somebody wrote "nine months" on the board.',
]));
out.push(SAMPLE([
  '**Weaker sample (31 words) – why it only just passes**',
  'A woman is in the class. She is afraid. After she write a letter alone. In the last picture she is happy and all people are laughing with her.',
  '_It tells the story of all three pictures and it is over twenty-five words, so it passes. But **After she write** needs **Afterwards she wrote** or **Later she wrote**; **all people** should be **everybody** or **the others**; and the three pictures are in the past, so the whole story should be in the past simple rather than starting in the present. A good one to correct together: the content is right and every error is a Book 1 error, which is worth saying out loud in the last week of A2._',
]));
out.push(S('Unit 24 check · A  Grammar and vocabulary'));
out.push(A('**1 b** \'m going to   **2 a** \'m meeting   **3 b** \'ll   **4 b** for   **5 b** since   **6 c** staying   **7 b** on   **8 b** that'));
out.push(S('Unit 24 check · B  Listening (Track 24.14)'));
out.push(A('**1 B** (Hiba – the teacher-training course in September)   **2 D** (Omar – meeting somebody from a newspaper on the ninth)   **3 A** (Lina – B1 with half the fee paid by her employer)   **4 C** (Nour – stopping for a year, with a date to come back)   **5 E** (Ms Huda – taking the next B1 group, whoever is in it)'));
out.push(A('The two extra letters are **F** (leaving the city in the autumn) and **G** (going to keep one line a month about what they could not do).'));
out.push(NOTE('**G** is the strongest distractor, because it is Lina\'s own idea in 24.7 and the class adopts it — but it is not in this script, and **A** is. Students who put G against Lina have read the unit well and not listened to the recording, which is exactly the distinction Part 5 exists to make, and it is worth saying so in the last check of the book.'));
out.push(S('Unit 24 check · C  Writing (sample, 98 words)'));
out.push(SAMPLE(['Nine of us finished and there were sixteen in the first week. The day to watch is the Thursday after the first test: that is when people stop coming, and we lost two there. Ring them yourself, that evening, not the week after — because the other ten are all waiting for somebody else to do it, which is what we did. And the thing we got wrong: we let one of us believe for nine months that she was learning nothing, and four of us could have given her the dates in November and we gave them to her in June.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves, and this is the last one in the book, so give it five minutes rather than two. The line to carry into B1 is the third — **_for_ and _since_, and never _I am here since_** — and the one to carry into the rest of their lives is the fifth, which is thanking somebody for something they did not do. Neither of those is going to be taught again.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'The **End-of-Book Test** follows: four papers, 100 marks, covering Units 13–24, in the shape of the Cambridge A2 Key. Its key is a separate file and it includes a marking table for the Speaking paper and two sample answers for each writing task.',
  'Before the test, do the thing in the Student\'s Book: have each student read the Stage 7 they wrote in Unit 13 and the one they wrote in Unit 24, next to each other. It takes four minutes and it is worth more to them than the test is.',
  'And at the end: the class that finishes Book 2 has done two years of Thursdays. Say the number of weeks out loud. Nobody counts it for themselves, and the ones who most need to hear it are the ones who are not going on.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 24 · Answer Key');
