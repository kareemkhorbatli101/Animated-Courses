// Proactive English A2 · Syria Edition · Book 2 · Unit 14 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 14  Plans and Predictions — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  'Unit 14 is about what students think will happen, so almost every speaking answer is theirs. Accept any prediction that is **grammatically** right, however unlikely — and then ask _"why do you think that?"_, which is where the language is.',
  '**The two things to be strict about:** the word order of _probably_ and _definitely_ (after _will_, before _won\'t_), and the difference between a plan already made (_going to_) and a decision taken at the moment of speaking (_\'ll_). Everything else in this unit is forgivable.',
], C.lblue, C.navy));

// ===================== 14.1 =====================
out.push(pb());
out.push(h2('14.1  I think it will be a good year'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Keep the two columns on the board all evening — _will_ on the left, _won\'t_ on the right — and count them at the end. Most classes produce three times as many _will_ sentences as _won\'t_, which is worth pointing out.'));
out.push(A('**b** **Predictions: 1** (_It will rain on Friday_) and **3** (_The new road won\'t be finished_). **Facts: 2** (_Friday is the fourteenth_) and **4** (_The centre closes at nine_). The test is simple: can you be **wrong**? If yes, it is a prediction.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the predictions the class wrote at the end of Unit 13.'));
out.push(A('**b** **1** That Al-Jaish will win on Friday — and he admits they won\'t.   **2** She will put it in the cupboard and the class will open it in Unit 24, in the summer.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I think the bus **will be** late.   **2** I\'m sure she **won\'t forget**.   **3** Prices **will go** up again in the summer.   **4** I don\'t think it **will rain** today.   **5** They **won\'t finish** the road this year.   **6** **Will** you **come** on Friday?'));
out.push(NOTE('Item 4 is the one to stop on. English puts the negative on the **first** verb: _I **don\'t think** it will rain._ The Arabic-shaped version, _I think it won\'t rain_, is understandable but it is not what people say. Write both on the board and leave them there for the rest of the unit.'));
out.push(S('Stage 3 · Practise (sample – Card A, the price of bread)'));
out.push(SAMPLE([
  '**A:** What do you think will happen to the price of bread this year?',
  '**B:** I think it will go up again. Twice, probably.',
  '**A:** Are you sure?',
  '**B:** I\'m sure it won\'t go down. That is the part I\'m sure about.',
  '**A:** I don\'t agree. I think it will stay the same until the summer.',
  '**B:** We\'ll see. Write it down.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_will: "Prices will go up again." · won\'t: "They won\'t finish the road." · I don\'t think: "I don\'t think the lift will be fixed."_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Me:** I think I will finish this level in June. **This class:** I think we will lose two people before the summer. **My city:** I don\'t think the new road will open this year._',
  '**A:** Why do you think we\'ll lose two people?',
  '**B:** Because two people have already stopped coming on time, and that is always how it starts.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour thinks she will finish her training course in April, and she is sure about that one because the dates are on the wall at work. She thinks this class will lose two people before the summer, which I did not enjoy hearing. And she doesn\'t think the new road will open this year. Her reason is that she has walked past it every day for seven months and she has seen four men working on it, twice.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He will to come. → ✓ He **will come**.   ✗ She wills come. → ✓ She **will** come.   ✗ I think it won\'t rain. → ✓ I **don\'t think** it will rain.   ✗ I will think prices go up. → ✓ I **think** prices **will** go up.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four. (Nineteen think it will open; only four think it will open this year.)'));
out.push(A('**2** Because that member is the only one who does not think prices will go up, and they gave no reason — the club would like to hear it.'));
out.push(A('**3** Print the same page again with a ✓ or a ✗ next to each line.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT WILL HAPPEN IN THIS CLASS?**',
  'We asked eleven people for one prediction each.',
  '**The level.** Nine of them think we will all pass. Only two think somebody won\'t.',
  'One person wrote: "We will pass, but three of us will pass by one mark."',
  'We will check in June.',
]));
out.push(S('Stage 7 · Write freely (sample, 113 words)'));
out.push(SAMPLE([
  '**MY PREDICTIONS — JANUARY**',
  '**Me.** I think I will finish this level in June. I\'m sure I won\'t take the exam in March, because I am not ready and I know it. And I will probably still be in the same job in December, which I have decided is not a sad sentence.',
  '**The people round me.** My sister will definitely move flat this year — the boxes are already in the hall. My friend Rasha says she will start driving lessons, and she has said that for three years, so I don\'t think she will.',
  '**My city.** There will be a new bakery on our street before the summer. The sign went up in December and nothing has happened since.',
  'I will know about the bakery by walking past it. Everything else I will check in June.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have decided it is not a sad sentence" — that is the line._   ✓ _The bakery needs a month, not "before the summer"._   ? _How will you know you are ready for the exam?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Fold them and put them in the envelope with the Unit 13 predictions. Write the date on the envelope. **Do not lose this envelope** — Unit 24 opens it, and it is the best fifteen minutes of the whole book.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['My father will definitely retire this year — he has the date and he has told everybody. He will probably not stop working, though, because he has already found two things to do, and that is how I know. And the one I hope is wrong: he says he will sell the car, which he has had for nineteen years. I think the car will still be there in December.']));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  I\'ll do it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Keep it fast — the point is the **speed** of the offer, not the quality. Count the points on the board.'));
out.push(A('**b** **a)** _I\'ll answer it_ is the offer made now — you heard the phone and decided as you spoke. **b)** _I\'m going to answer it_ means you decided to answer that phone before it rang, which is strange unless you were waiting for the call.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the photocopier is broken (four handouts for eleven people).'));
out.push(A('**b** **1** Photograph the handout and send it to everybody in the class group.   **2** That they won\'t wait for the photocopier: she will put every handout in the group on Wednesday evening, and the class will come with it on their phones.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** "This bag is heavy." → _I\'ll carry it for you._   **2** "I don\'t understand question four." → _I\'ll explain it._   **3** "We need ten chairs." → _I\'ll bring them from Room 9._   **4** "Nobody has told Mr Bassam." → _I\'ll tell him on my way out._   **5** "There\'s no water." → _I\'ll get some._'));
out.push(NOTE('Accept any verb; insist on **\'ll**. The two wrong answers to listen for are the bare verb (_I carry it_) and the Arabic-shaped present continuous (_I am carrying it for you_). Both mean something else in English.'));
out.push(S('Stage 3 · Practise (sample – Card A, the printer)'));
out.push(SAMPLE([
  '**A:** The printer has no paper.',
  '**B:** Don\'t worry, I\'ll bring some from downstairs.',
  '**A:** Are you sure? It\'s three floors.',
  '**B:** It\'s fine. I\'ll do it before the break.',
  '**A:** Thank you, that\'s very kind.',
  '**B:** And shall I take the empty box away as well?',
  '**A:** No, it\'s all right, Mr Bassam wants it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"I\'ll bring some paper" – accepted · "Shall I take the box?" – refused · "I\'ll tell Mr Bassam" – accepted_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I\'ll make a new list for the door and put it up before Thursday. I\'ll bring a spare charger and leave it in the cupboard. And I accepted Rami\'s offer to print the handouts, because I read badly from a screen._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Four people offered to speak to Mr Bassam, which means nobody will. Rami said he will bring a spare charger and leave it in the room, and Hiba said she will make a new list for the door and put it up before Thursday. I offered to carry the boxes and Lina refused me, which I am still thinking about. The one job nobody offered to do was washing the twelve cups afterwards.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will to help you. → ✓ I **\'ll help** you.   ✗ I help you. → ✓ I **\'ll help** you.   ✗ I am going to answer it. _(the phone has just started ringing)_ → ✓ **I\'ll** answer it.   ✗ Shall I to open the window? → ✓ **Shall I open** the window?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because it costs nothing and takes four minutes — and because he thinks nobody should have to read a handout on a telephone.'));
out.push(A('**2** Because Lina reads better from a screen than from paper; she told Ms Huda so.'));
out.push(A('**3** He has told Mr Bassam twice and nothing has happened, so his telling has become part of the routine that does not work. Saying it a third time would be a way of feeling useful rather than being useful.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Everybody,',
  'I\'ve seen that nobody has the new timetable.',
  'I\'ll photograph it and put it here on Wednesday evening. It costs nothing and it takes two minutes.',
  'Shall I also print five copies for the people who don\'t use the group?',
  'Nour',
]));
out.push(S('Stage 7 · Write freely (sample, 96 words)'));
out.push(SAMPLE([
  'Neighbours,',
  'Two things, both small.',
  'I\'ll put a list of the three plumbers who actually answer their phones on the board by the post boxes, tomorrow evening. It costs nothing and it is already written.',
  'I\'ll also sweep the stairs between the third and the ground floor on Friday morning, because I am doing my own landing anyway and it is ten extra minutes.',
  'One thing I need from you: if you have the caretaker\'s new number, please put it under my door — flat 7. I have asked four people and I have four different numbers.',
  'Thank you. Lina, flat 7',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"it is already written" — that is why I would accept it._   ✓ _Say what time on Friday morning._   ? _What do you want me to do? — I have the number, I\'ll bring it tonight._'));
out.push(S('Stage 7R · Share'));
out.push(A('The answer to _which group would you like to be in?_ is always the group whose offers are **small, exact and timed**. Say that out loud: it is the whole writing lesson, and it is also true outside the classroom.'));
out.push(S('Homework (sample reply)'));
out.push(SAMPLE(['Lina, thank you for the list — I\'ll copy the numbers into my phone tonight, because I have lost them twice. Please don\'t sweep our landing; my son does it on Saturdays and he will be offended, and he is fourteen, so everything offends him. The caretaker\'s new number is on the inside of the post box door — somebody wrote it there in December. And I\'ll put a bulb in the stairs light on Friday, because that is the real problem.']));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  It might move to Latakia'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** The line, left to right: _definitely will · will · probably will · might · might not · probably won\'t · won\'t_. Draw it long, and leave it on the board — Stage 4 sends students back to it.'));
out.push(A('**b** **1** _It will rain_ is more sure.   **2** _I probably won\'t come_ is more sure (than _I might not come_).   **3** _She\'ll definitely pass_ is more sure.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – his site might move to Latakia.'));
out.push(A('**b** **1** Eight months, possibly a year.   **2** That the Damascus office will stay open — so he definitely won\'t lose the job.'));
out.push(S('Language box · Practise'));
out.push(A('**1** She **will probably** come.   **2** They **probably won\'t** finish today.   **3** It **will definitely** be cold.   **4** I **definitely won\'t** be late.   **5** He **might be** at home.'));
out.push(NOTE('Items 1–4 are one rule in two halves: **after _will_, before _won\'t_**. Write the four sentences in a column on the board with _probably_ and _definitely_ in a different colour, and the pattern becomes visible in about four seconds. Item 5 is the reminder that _might_ replaces _will_ — there is no ~~might will~~.'));
out.push(S('Stage 3 · Practise (sample – Card A, the new office)'));
out.push(SAMPLE([
  '**A:** So what\'s happening with the new office?',
  '**B:** Nobody has decided anything yet.',
  '**A:** But what do you think?',
  '**B:** Well — we definitely won\'t lose anybody, and we\'ll probably know in March.',
  '**A:** And the eight months away?',
  '**B:** That might happen. It might not. We\'ll know in March.',
  '**A:** And how do you feel about it?',
  '**B:** I\'d rather know a bad answer in January than a good one in May.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_certain: nobody will lose their job · probable: the decision in March · only possible: eight months in another city_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The certain thing is that our building will get a new lift — the money is there and the contract is signed. The probable thing is that the work will start in April. The only possible thing is how long we will have no lift at all: they say three months, and nobody in this building believes three months._',
  '**A:** When will you know?',
  '**B:** When the men arrive. That is the only date anybody trusts.',
  '**A:** And what do you want to happen?',
  '**B:** I want them to start in September, after the summer. Nobody asked me.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rami\'s site might move to Latakia. The thing that is certain is that the Damascus office will stay open, so he definitely won\'t lose his job. It will probably be decided in February, although he says February in that company has meant March twice before. If it moves he will go for eight months, possibly a year. What he wants and what he expects are not the same thing, and he was honest about that, which I thought was brave for half past six on a Thursday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He might to come. → ✓ He **might come**.   ✗ She probably will not come. → ✓ She **probably won\'t** come.   ✗ It will might rain. → ✓ It **might** rain.   ✗ He mights be at home. → ✓ He **might** be at home.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because he wants one person to know before it becomes certain — and because he needs one person who will not tell their mother.'));
out.push(A('**2** That the Damascus office will stay open and that he will not lose the job.'));
out.push(A('**3** Because February in that company has meant March twice already, so Samer should plan for March and be pleasantly surprised.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Maya   **Subject:** The flat — nothing is decided',
  'Maya,',
  'Something might be about to change and I would rather you heard it from me.',
  '**What is certain:** the landlord is selling the building. He told us on Sunday.',
  '**What is probable:** the new owner will probably keep the tenants, because the flats are full and that is the easy thing to do.',
  '**What is only possible:** the rent might go up in the summer. It might not.',
  'Please don\'t start looking for somewhere else yet.',
  'Lama',
]));
out.push(S('Stage 7 · Write freely (sample, 124 words)'));
out.push(SAMPLE([
  '**To:** Ziad   **Subject:** The clinic — before anybody else tells you',
  'Ziad,',
  'I\'m writing before it is certain, because you will hear a version of this from Aunt Najwa and her version will be worse.',
  '**What is certain:** the clinic is opening a second room and they have asked me to run it. That part is on paper.',
  '**What is probable:** it will probably start in May. They said March, then they said April, so I am saying May.',
  '**What is only possible:** I might have to work two Saturdays a month. I might not. The person who decides that is on leave until February, which tells you everything about how important it is.',
  'What I want from you: don\'t congratulate me in front of Mother yet. Nothing is signed and she will start telling people.',
  'Maya',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"They said March, then April, so I am saying May." That told me more than the dates did._   ✓ _I still don\'t know how sure you are about the Saturdays — "might" and "might not" in one line cancel out._   ? _When exactly will the person on leave be back?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read two aloud and ask the question in the book. The class will choose the writer who separated the three levels — and when they do, say why: the other writer made the reader do the sorting, and a reader who has to sort bad news sorts it badly.'));
out.push(S('Homework (sample reply)'));
out.push(SAMPLE(['Maya — thank you for writing before Aunt Najwa. I will say nothing to anybody, including Mother, and especially including Aunt Najwa. I probably won\'t be able to help with the Saturdays, because mine are already the clinic\'s, but I will take Mother on two of them so that the house is quiet when you come home. And I promise you this one: when it is signed, you tell her. Not me, not Najwa. You.']));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  Will they tell you before March?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ten in ninety seconds is achievable and the clock is the point — it forces the question shape to become automatic. Count out loud.'));
out.push(A('**b** **1** _**Will they decide** in March?_   **2** _How many **will there be**?_   **3** _**Won\'t she come**?_ (or _**Will she come**?_)   **4** _How much **will it cost**?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – Lina, about the supplier in Türkiye.'));
out.push(A('**b** **1** How many suppliers there will be, and whether anything will be decided before the nineteenth.   **2** That he will tell her **the day** the answer arrives, not at the end of that week.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Will they answer** this month?   **2** **How many people will come**?   **3** **Will there be** enough chairs?   **4** **When will you know**?   **5** **Will she have to** do it again?'));
out.push(NOTE('Item 4 is the one that goes wrong: the question word does **not** take the place of the inversion. _When **will you** know?_ never ~~When you will know?~~ Ask four students the same question round the class before you move on — it is quicker than explaining it.'));
out.push(S('Stage 3 · Practise (sample – Card A, the end-of-course evening)'));
out.push(SAMPLE([
  '**B:** May I ask you about the end-of-course evening? I have six questions.',
  '**A:** Go on.',
  '**B:** Will it be in this building?',
  '**A:** Yes, it will — the big hall, in June.',
  '**B:** Will there be food?',
  '**A:** There will. Everybody brings one dish.',
  '**B:** How many people will come?',
  '**A:** About sixty, probably.',
  '**B:** Will the director come?',
  '**A:** I don\'t know.',
  '**B:** Will there be certificates?',
  '**A:** I don\'t know that either.',
  '**B:** And will you put it on the door when you know?',
  '**A:** I will. I promise you that one.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The two "I don\'t know"s were the director and the certificates — and yes, the certificates were the important one, because that is the question everybody in the room actually wanted answered._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Six questions about the teacher-training course:** Will it start in September? Will it cost more than last year? How long will it take? Will I be able to work at the same time? Who will teach it? Will they tell me before July?_',
  '_**The one I would keep:** Will I be able to work at the same time? Everything else only matters if the answer to that one is yes._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba asked about the teacher-training course. Her six questions were: will it start in September, will it cost more this year, how long will it take, will she be able to work at the same time, who will teach it, and will they tell her before July. She got three real answers and three "I don\'t know"s. The one question she would keep is whether she can work at the same time, because everything else depends on the answer to that.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ When they will decide? → ✓ When **will they** decide?   ✗ Will they to come? → ✓ **Will they come**?   ✗ Do they will answer? → ✓ **Will** they answer?   ✗ "Will you tell me?" – "Yes, I do." → ✓ "Yes, I **will**."'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** They will have to do it again — all of it.'));
out.push(A('**2** That he will tell them on the day the answer arrives, rather than at the end of that week.'));
out.push(A('**3** Because she will be in Homs on the nineteenth, and if the answer comes while she is away she wants one of the two of them to see it the same day.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Omar   **Subject:** The workshop move — where we are',
  'Omar,',
  'I asked Mr Fouad this morning, so here is where we are.',
  '**We know:** the workshop will move to the ground floor, and it will happen before the summer.',
  '**We don\'t know:** whether we will keep both rooms or only one.',
  '**Mr Fouad has promised:** he will tell us the week before, not the day before.',
  'Will you be here in the last week of May? If the move happens then, one of us should be.',
  'Nour',
]));
out.push(S('Stage 7 · Write freely (sample, 108 words)'));
out.push(SAMPLE([
  '**To:** Rasha   **Subject:** The building work — what I got out of them',
  'Rasha,',
  'I caught the caretaker on the stairs this morning and asked him six questions, which is five more than anybody has asked him this year.',
  '**We know:** the work will start in April. The water will be off on three days, and they will put a note on the door before each one.',
  '**We don\'t know:** how long the lift will be out of use. He said three months and then laughed, which I did not find funny.',
  '**He has promised:** he will give us the dates for the water in writing, before the end of March.',
  'Will you be away in April? If you are, give me a key — somebody should be able to get in.',
  'Lina',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"He said three months and then laughed." I know exactly where we stand._   ✓ _"Before the end of March" should be under **he has promised**, which is where you put it — good. But the April start belongs there too, or under "we don\'t know"._   ? _Your question: yes, the first two weeks. I\'ll bring the key on Sunday._'));
out.push(S('Stage 7R · Share'));
out.push(A('Swapping and answering somebody else\'s last question takes four minutes and does something no exercise does: it proves that a question written clearly gets answered, and a vague one comes back blank.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**Six questions about the end of this course:** Will there be an exam, or only the test in the book? When exactly will the last lesson be? Will we get a certificate, and will it say the level on it? Will this class stay together for B1? Will Ms Huda teach B1? And will the centre tell us the prices before we have to decide? **The one I would keep:** will this class stay together — because I will do B1 either way, but I would like to do it with these people.']));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  I\'m going to apply'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Be strict about the word **decided**: if a student says _I want to_ or _I hope to_, do not write it on the board. The gap between the two lists is the lesson.'));
out.push(A('**b** **1** _I **\'ll** carry it._ (deciding now)   **2** _I **\'m going to** apply._ (the forms explain it)   **3** _It **\'s going to** rain._ (you can see it coming)   **4** _They **will** go up._ (an opinion about the future)'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – to apply for the teacher-training course.'));
out.push(A('**b** **1** In March. (The course starts in September.)   **2** To ask Ms Huda to be a referee — and it is a **decision made now**, so she says _I\'ll ask her for you_. Hiba refuses it.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I **\'ll get** some.   **2** Where **are** you **going to go**?   **3** I think she **will pass**.   **4** That box **is going to fall**!   **5** We **are going to paint** the flat in April.'));
out.push(NOTE('Item 4 is the second use of _going to_ and students miss it every year: when the evidence is **in front of you**, English uses _going to_, not _will_. _Look at those clouds — it\'s going to rain._ Say it while looking out of the window and it never has to be explained again.'));
out.push(S('Stage 3 · Practise (sample – Card A, the bigger flat)'));
out.push(SAMPLE([
  '**A:** What are all these?',
  '**B:** I\'m going to move. A bigger flat.',
  '**A:** Since when?',
  '**B:** Since November.',
  '**A:** When are you going to give notice?',
  '**B:** In May. And then I\'m going to move in July, after the exams.',
  '**A:** I\'ll ask my cousin — he knows every flat in Jaramana.',
  '**B:** Thank you, yes. But I\'m going to tell the landlord myself, because he will hear it from somebody otherwise.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_decided: move to a bigger flat · give notice in May · move in July_   —   _not done yet: tell the landlord_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I\'m going to take the driving test in June. I decided in October and I\'ve paid for twelve lessons, so it is decided._',
  '**A:** Since when? — **B:** October. **A:** What haven\'t you done yet? — **B:** I haven\'t booked the test. **A:** What will you do if you fail? — **B:** Take it again in September. Everybody in my family has failed it once; my brother failed it three times and now drives for a living.',
  '**b (only a hope)** _I hope to visit my uncle in Jordan this year._ — _Notice how much weaker that sounds. No month, no money, nothing done._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba is going to apply for the teacher-training course. She decided in December and she is going to send the forms in March. She is going to keep working until July and then stop. The thing she hasn\'t done yet is ask her two referees, and she is going to ask them herself, although Lama offered. If it doesn\'t work she is going to apply again next year, which she said without any pause at all, so I think she has thought about it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will going to apply. → ✓ I **\'m going to apply**.   ✗ I\'m going to applying. → ✓ I\'m going **to apply**.   ✗ I going to apply. → ✓ I **\'m** going to apply.   ✗ "The bag is heavy." – "I\'m going to carry it." → ✓ "**I\'ll** carry it."'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because she has told four people, and telling people makes a decision expensive to go back on.'));
out.push(A('**2** She is going to apply again next year, and work on her English in between, because that is where she lost marks last time.'));
out.push(A('**3** Tell everybody in her family in March. She is going to wait until there is something to tell.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THIS YEAR I AM GOING TO LEARN TO DRIVE**',
  'I decided in October.',
  '**February.** I am going to finish the twelve lessons I have paid for. Before that I am going to get the medical paper, which takes a week.',
  '**June.** I am going to take the test.',
  'If I fail, I am going to take it again in September, and I am going to keep driving with my uncle in between so that I don\'t forget everything.',
  'What I am **not** going to do is borrow money for a car this year.',
]));
out.push(S('Stage 7 · Write freely (sample, 131 words)'));
out.push(SAMPLE([
  '**THIS YEAR I AM GOING TO OPEN THE SHOP WITH MY BROTHER** — Samer',
  'We decided last summer, in my mother\'s kitchen, and we have told nobody outside the family, which is why this page is going on the wall and not on the internet.',
  '**April.** We are going to find the place. We have looked at four and we are going to look at ten more. Before that, I am going to speak to the bank — that is the part I keep moving to next week.',
  '**June.** We are going to sign, if there is anything to sign.',
  '**September.** We are going to open, even if it is not finished. A shop that is open is a shop.',
  'If we don\'t find a place by June, we are going to stop for a year and save, not look harder in a hurry.',
  'What I am **not** going to do is leave my job before the shop pays for two people.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"A shop that is open is a shop." That is the sentence that makes me believe the plan._   ✓ _"Speak to the bank" has no date, and you said yourself you keep moving it — give it a week._   ? _What is the first thing you have to do, and when?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Putting the plans on the wall **under the months** does the assessment for you: the student with nothing before July has a wish, not a plan, and can see it without being told. Ask them one question — _what is the first thing, and when?_ — and let them add a line.'));
out.push(S('Homework (sample first message)'));
out.push(SAMPLE(['Dear Ms Huda, I am going to apply for the teacher-training course at the Institute, and the form asks for two referees. Would you be willing to be one of them? The course starts in September and I am going to send everything in the first week of March, so the form would need to be back by the end of February. It is one page and it asks about attendance and spoken English. I can bring it on Thursday. Thank you for considering it. Hiba Khalil, class 4B']));

// ===================== 14.6 =====================
out.push(pb());
out.push(h2('14.6  In ten years it will be quieter'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Count the votes; the disagreements are the material for Stage 3.'));
out.push(A('**b** **more** cars · **less** noise · **more / fewer** people · **less** water · **fewer** shops · **less** traffic'));
out.push(NOTE('_traffic_ is the trap. It looks like many cars, so students reach for _fewer_ — but it is uncountable in English, like _noise_ and _water_. There is no ~~a traffic~~ and no ~~two traffics~~, so it takes **less**.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – their own streets in ten years.'));
out.push(A('**b** **1** It will be quieter, because in ten years half the cars will make no noise.   **2** That there will still be a man selling coffee on the corner at six in the morning — a different man, the same corner, the same hour.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** There will be more **buildings**.   **2** There will be fewer **small shops**.   **3** There will be less **space**.   **4** It will be **noisier** than it is now.   **5** There will still be **a queue at the bakery on a Friday**.'));
out.push(NOTE('Mark item 4 hard: _noisier_, not ~~more noisy~~. Two-syllable adjectives ending in **-y** take **-er** and change the y to an i: _noisy → noisier · easy → easier · busy → busier · happy → happier_. This comes back in Unit 20 with comparative adverbs.'));
out.push(S('Stage 3 · Practise (sample – Card A, the buses)'));
out.push(SAMPLE([
  '**A:** The buses in your city, in ten years. Three sentences.',
  '**B:** There will be more buses.',
  '**B:** They will be more expensive than they are now.',
  '**B:** And there will still be no timetable that anybody believes.',
  '**A:** I disagree with the second one. I think they will be cheaper.',
  '**B:** Why?',
  '**A:** Because there will be more of them, and when there are more of something it gets cheaper. Usually.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"There will still be no timetable that anybody believes." — and yes, half the class agreed, which says something about the buses and something about the class._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_There will be more cars and less space. There will be fewer small shops. It will be louder than it is now and the summers will be hotter. And there will still be children playing football in the street between six and eight, because there is nowhere else and there never has been._',
  '**A:** I disagree about the shops. — **B:** Why? — **A:** Because two have opened on my street this year. — **B:** Opened, yes. Ask me again in ten years whether they are still there.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour thinks her street will be louder, with more cars and less space. Omar disagreed with her: he thinks there will be more cars but that it will be quieter, because the cars will be quieter. I think Omar is right about the cars and wrong about the street. The sentence I will remember is Nour\'s last one — that there will still be a man selling coffee on the corner at six in the morning, a different man, the same corner.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ less cars → ✓ **fewer** cars.   ✗ fewer traffic → ✓ **less** traffic.   ✗ more quiet → ✓ **quieter**.   ✗ louder that now → ✓ louder **than** now.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the city he grew up in was quieter than this one **and** had fewer cars — so the two things do not go together the way everybody assumes.'));
out.push(A('**2** Nine of the eleven.'));
out.push(A('**3** Because he has seen the drawings for the buildings, so it is information rather than a guess — and, as he points out, the drawings are already three years old.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Rasha · Jaramana.**',
  'There will be more buildings and fewer gardens.',
  'It will be hotter than it is now, because the gardens are what keeps a street cool and ours is going.',
  'The one I know: the school on the corner is going to take the empty land next to it, which means two hundred more children on this street every morning.',
  'And there will still be somebody selling bread from a cart at half past six.',
]));
out.push(S('Stage 7 · Write freely (sample, 102 words)'));
out.push(SAMPLE([
  '**Al-Jalaa Street, Mezzeh — in ten years**',
  'There will be more flats and fewer houses. Three went last year; two are empty now and everybody knows what empty means on this street.',
  'It will be hotter and it will be louder. It will probably be cleaner, because the new bins arrived in October and they are still there, which is a kind of record.',
  'The thing I actually know: the bakery has been sold. The sign is new and the family is not the same family.',
  'And there will still be a queue outside it at seven on a Friday morning, because the queue is older than the family.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the queue is older than the family" — I can see the street from that one line._   ✓ _"It will probably be cleaner" is the one sentence anybody could have written. The bins are the detail — put them first._   ? _Will you still be living there?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect them into one page and put it in the envelope with the predictions. In Unit 24 the class reads the predictions again — but this page is the one to keep for ten years, and students know it while they are writing it, which is why these come out better than anything else in the unit.'));
out.push(S('Homework (sample – your street ten years ago)'));
out.push(SAMPLE(['Ten years ago there were more small shops on this street — six, and now there are two. There was less traffic and there was more noise, which sounds wrong until you remember that the noise was children. It was dirtier than it is now. And the thing that is still here is the pharmacy on the corner; the family has changed twice, the sign has changed once, and it has never once been shut when I needed it.']));

// ===================== 14.7 =====================
out.push(pb());
out.push(h2('14.7  Review & Mediate: What does the weather page say?'));
out.push(S('Stage 1 · Get ready – Unit 14 quiz'));
out.push(A('**1** He **will come** on Friday.   **2** I **don\'t think** it **will rain**.   **3** She **probably won\'t** come.   **4** It **might be** cold.   **5** I **\'m going to** apply in March.   **6** There will be **fewer** cars and it will be **quieter**.'));
out.push(NOTE('These six are the six cycles, in order. Number 3 is the one that decides whether the unit has worked — if a team puts _probably_ after _won\'t_, go back to the coloured column on the board from 14.3 before you start Lesson B.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Sunday**. Maya was going to travel on Saturday morning; her mother reads the one number she can read — sixteen degrees, dry and bright — and decides for her.'));
out.push(S('Stage 3 · Practise (sample – Notice A explained without showing it)'));
out.push(SAMPLE([
  '_It\'s a notice about building work, and it covers one month — March._',
  '_The main thing: the lift will be out of use from the second to the twentieth. Nearly three weeks._',
  '_Because of that, the evening classes will move to the ground floor._',
  '_But — and this is the part people will get wrong — the room numbers on the timetable will stay the same. So the timetable will say Room 12 and Room 12 will be downstairs. Don\'t go upstairs looking for it._',
  '_One thing is not certain: the car park may be closed. May. They don\'t know, and they say "at short notice", which means they will tell you on the day._',
  '_And the notice itself will be updated on the first of March, so look again then._',
  '**B:** So on the fifth of March, is my class upstairs or downstairs?',
  '**A:** Downstairs. The number stays, the floor changes.',
  '**C:** I\'m going to come by bus in March, then. If the car park might be shut, I\'m not driving across the city to find out.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_definitely: the lift will be out of use 2–20 March · the evening classes will move downstairs._   _only may: the car park._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the message the electricity company sends before work on the lines._',
  '_The top line is the date and the hours — Tuesday, eight until two. That part is certain; it says "will be interrupted"._',
  '_Then there is a second line about Wednesday, and that one says "may also be affected". May. It is not the same sentence and it does not mean the same thing._',
  '_At the bottom it says they will put a note on the door if anything changes._',
  '**A:** So is Wednesday off or not? — **B:** Nobody knows, including them. Fill something on Monday night.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Lina explained the notice in her building about the water. It says the water will be off on Tuesday from eight until two, and it says it may also be off on Wednesday, but they have not decided. The part she had to explain to me twice is that "may" is not the same as "will" — the Tuesday is certain and the Wednesday is not. It also says that the building will tell everybody by a note on the door, which she says means nothing, because the last note was put up on the morning it happened. So I decided that if I lived there I would fill something on Monday night and not wait for a note.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It says the road is closed. _(when it says "advised not to use")_ → ✓ It says drivers **are advised not to** use it — it **isn\'t** closed.   ✗ The buses may will be cancelled. → ✓ The buses **may be** cancelled.   ✗ It will maybe rain. → ✓ It **might** rain. / It **will probably** rain.   ✗ They will tell on Friday. → ✓ They will **tell us** on Friday.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 2'));
out.push(A('**1 A**   **2 A**   **3 B**   **4 B**   **5 C**   **6 A**'));
out.push(NOTE('**3** is the one the class argues about. Bloudan is the coldest and the furthest, so students choose A — but the question is about getting **home**, and only Maaloula has the sentence _if you miss it there is no other way home_. Reading Part 2 always rewards the student who re-reads the **question**, not the text.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Hi Sam!',
  'Don\'t travel on **Friday**.',
  'It will **rain heavily** from **six in the morning**, and there\'s a warning about **the mountain road**. It says drivers **are advised not to use it between six and twelve** — it isn\'t closed, but they are telling you not to. The coastal road **will stay open**, but **there will be delays of up to an hour and a half**.',
  'The buses **will run**, but after **eight in the evening** they **may be cancelled, and they won\'t tell you until the last minute**.',
  'Come on **Sunday** instead — it will be **dry and bright** and **sixteen degrees**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (47 words)**',
  'Hi Sam! It will be warm next month — about twenty-five degrees — but the evenings will be cold, so bring a jacket. It probably won\'t rain. I\'m going to take you up Qasioun on the Friday evening, because the whole city is underneath you. See you soon!',
]));
out.push(SAMPLE([
  '**Weaker sample (28 words) – why it only just passes**',
  'Hi Sam. Next month the weather will good. Bring a jacket because in night is cold. We will go to Qasioun. Bye.',
  '_All three points are answered and it is long enough, so it passes — but: **the weather will good** needs **will be**; **in night** should be **at night**; **We will go** is not wrong, although **we\'re going to go** is better here because it is already planned; and there is no friendly ending. Use it to show that "three points" and "well written" are two different marks._',
]));
out.push(S('Unit 14 check · A  Grammar and vocabulary'));
out.push(A('**1 a** will   **2 b** will   **3 b** might   **4 a** probably won\'t   **5 b** are you going to   **6 b** Will   **7 b** fewer   **8 b** quieter'));
out.push(S('Unit 14 check · B  Listening (Track 14.14)'));
out.push(A('**1 B** (Rami – the site might move to Latakia)   **2 A** (Hiba – the forms for the course)   **3 D** (Lina – an answer from Türkiye)   **4 C** (Omar – a bigger flat, probably)   **5 E** (Nour – will definitely finish the training in April)'));
out.push(A('The two extra letters are **F** (is going to buy a car) and **G** (might stop studying English).'));
out.push(NOTE('This one tests the **certainty** words, not the facts: Rami gets _might_, Omar gets _probably_, Nour gets _definitely_. A student who matches on topic alone will still get 5 out of 5, so after the check read the script again and ask which three words did the work.'));
out.push(S('Unit 14 check · C  Writing (sample, 74 words)'));
out.push(SAMPLE(['Hi Rasha! You\'ll like it here in April. It will probably be about twenty degrees in the day, but it will be cold in the evening, so bring something warm. The one thing that might be difficult is the buses — they\'re full between four and six and you will not get a seat. I\'m going to take you to the old city on your first morning, before it gets hot. And I promise you will eat too much at my mother\'s house.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The two lines that usually need five minutes at the start of Unit 15 are **the word order of _probably_ and _definitely_** (14.3) and **_going to_ against _will_** (14.5). The first comes back in the Mid-Book Test; the second runs through the whole of Unit 15, because _If it rains, I\'ll stay_ is a decision made at the moment the rain starts.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 14 was about what **will** happen. Unit 15 puts a condition in front of it: _If the lift breaks, we\'ll move downstairs._',
  'Carry-over to watch: the predictions envelope now holds two sets of papers — the Unit 13 homework and the Unit 14 pages. **Unit 24 opens it.** Write the date on the envelope and put it somewhere that is not a classroom cupboard.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 14 · Answer Key');
