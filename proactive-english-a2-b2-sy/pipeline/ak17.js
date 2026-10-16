// Proactive English A2 · Syria Edition · Book 2 · Unit 17 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 17  Learning and Training — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The three lists are the unit.** Put them on the board in 17.1 and leave them there for all seven cycles: **always _to_** (want · hope · need · decide · would like · plan · learn · manage) · **always _-ing_** (enjoy · don\'t mind · finish · practise · keep · spend time · and after every preposition) · **either** (start · begin · like · love · hate · continue). Students do not need the reason; they need the lists in front of them for six weeks.',
  'This unit asks students to say what they are bad at. That only works if nobody is marked on it — Mr Jamil\'s line, _it is for you, I will not read them_, is in the dialogue for the teacher as much as for the class.',
], C.lblue, C.navy));

// ===================== 17.1 =====================
out.push(pb());
out.push(h2('17.1  I want to finish it this year'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The third category — something nobody asked you to learn — produces the best material and the most surprised faces. Make sure every student gives one.'));
out.push(A('**b** Open. Mark only the **form**: verb + _to_ + bare verb, four times.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a training course at work.'));
out.push(A('**b** **1** Six weeks, two evenings a week, with an assessment at the end.   **2** Write four reports, and learn to write them so that Mr Jamil can read one in two minutes.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I want **to finish** this level in June.   **2** She hopes **to start** in September.   **3** We need **to buy** the books.   **4** He\'s decided **not to apply** this year.   **5** I\'d like you **to read** this.   **6** They\'re trying **to learn** two languages at once.'));
out.push(NOTE('Items 4 and 5 are the two that are worth stopping on. In **4** the _not_ goes before _to_ — _decided **not to** apply_, never ~~didn\'t decide to apply~~, which means something else. In **5** the other person goes in the middle — _I\'d like **you** to read this_, never ~~I\'d like that you read this~~, which is the shape of the equivalent sentence in Arabic and which almost every student produces at least once.'));
out.push(S('Stage 3 · Practise (sample – Card A, the training course)'));
out.push(SAMPLE([
  '**A:** So what are you doing about the course?',
  '**B:** I\'ve decided to do the six-week one at work.',
  '**A:** What do you want out of it?',
  '**B:** I want to be able to explain my work to somebody who is not a technician.',
  '**A:** And after that?',
  '**B:** I hope to get a better job next year. That one is a hope, not a plan.',
  '**A:** What do you need to do first?',
  '**B:** I need to write four reports, and I need my manager to keep Tuesdays free.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Goal: to be able to explain the work to anybody._   _Wish: a better job next year._   _First: write four reports · get Tuesdays free._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**At work:** I want to learn the new system properly, not just enough to get through a day. **At home:** I want to learn to cook four things my mother makes, before I have to ask her over the telephone. **Nobody asked me:** I\'m trying to learn to read music, which is going badly and which nobody in my life knows about._',
  '**b** _I\'ve decided not to start driving lessons this year. I would do them badly and expensively and at the wrong time, and the car I would be driving does not exist._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour wants to stop being the person who can fix things and cannot explain them, which she says is the honest answer and is not the same as wanting to be a senior technician. She hopes to be one; she was careful about the difference. She needs to write four reports before the assessment, and she needs to learn to write them so that Mr Jamil can read one in two minutes. The thing she has decided not to do this year is start a second course at the same time, which she says she would have done last year without thinking about it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I want finish it. → ✓ I want **to finish** it.   ✗ I want to finishing. → ✓ I want **to finish**.   ✗ I want that you come. → ✓ I want **you to come**.   ✗ I didn\'t decide to apply. _(meaning: I decided not to)_ → ✓ I **decided not to** apply.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He said that was not an answer, and then he waited — which Nour says is a thing he does.'));
out.push(A('**2** Because the person who decides it has not mentioned it to her once. It is not in her control, so it is a hope and not a goal.'));
out.push(A('**3** Asking Mr Fouad to keep Tuesdays free. She says it is the easiest of the three — which is why the line is there.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**SATURDAY EXAM COURSE · what I want out of this**',
  '**What I want to do:** I want to stop being afraid of a timed paper. I can do the English; I cannot do the clock.',
  '**What I hope to do:** I hope to pass with merit. I am writing it as a hope, because I have never taken an exam in English and I have no idea what I am capable of.',
  '**What I need to do first:** I need to pay before the first lesson, and I need to tell my brother he is collecting the children on Saturdays. I haven\'t told him yet.',
  '**What I have decided not to do:** I am not going to do the conversation club at the same time. One thing.',
]));
out.push(S('Stage 7 · Write freely (sample, 139 words)'));
out.push(SAMPLE([
  '**LEARNING TO DRIVE · what I want out of this**',
  '**What I want to do:** I want to be able to take my mother to Homs without asking four people first. That is the whole thing. Everything else about a licence is decoration.',
  '**What I hope to do:** I hope to have it before the summer. I am writing it as a hope, because the test dates are not mine to choose and the last two people I know waited eleven weeks.',
  '**What I need to do first:** I need to get the medical paper, which takes a week and which I have not started. I need to pay for ten lessons at once, because it is cheaper and because paying makes me go. And I need to ask Rami to sit with me for an hour a week, which is the only one of the three I am embarrassed about.',
  '**What I have decided not to do:** buy a car this year. I will have a licence and no car, and that is still further than I was.',
  '**If I do none of it:** I will be in exactly the same place in December, asking four people, as I was in December last year.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Everything else about a licence is decoration." That is a goal, not a wish._   ✓ _"Ask Rami" is under **need to** and you are embarrassed about it — that makes it the one that will not happen. Give it a day._   ? _What is the first thing, and when? The medical paper?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Reading the **"decided not to"** paragraphs aloud is the right ending for this cycle, and it surprises students: the refusals are more interesting than the plans, and the hardest refusal is almost always the one that makes the rest possible. Say that out loud once.'));
out.push(S('Homework (sample – the unsent message)'));
out.push(SAMPLE(['Mr Fouad, I have started the six-week training course and it runs on Tuesday and Thursday evenings until the middle of March. Thursdays are already my day off, so the only thing I would need is to leave at five on Tuesdays instead of half past. I would make the half-hour up on Sunday mornings, when the workshop is quiet and I get more done anyway. There is an assessment at the end and the certificate goes on the file here. Can I come and ask you about it tomorrow? Nour']));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  I don\'t mind doing the reports'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The middle column is the one students leave empty, because _don\'t mind_ is not a category most learners use. Insist on three things in it.'));
out.push(A('**b** Open. The sentence worth collecting is _I enjoy listening more than speaking_ — in most classes more than half agree, and it sets up 17.4 and 17.5.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the till.'));
out.push(A('**b** **1** Cleaning and staying late. (She also says she enjoys unpacking the boxes, which she did not expect.)   **2** That Lama will practise on Tuesday mornings when the shop is empty — because she does not mind practising, she minds practising **in front of people**, which is a different thing and much easier to fix.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I enjoy **reading** in English.   **2** She doesn\'t mind **working** on Saturdays.   **3** Have you finished **writing** the report?   **4** We need **to practise speaking** more.   **5** He hates **making** mistakes in front of people.   **6** I\'ve decided **to start going** to the club.'));
out.push(NOTE('Items 4 and 6 are the ones that matter, because each has **two** verbs from **different lists**: _need_ takes _to_, _practise_ takes _-ing_; _decide_ takes _to_, and _start_ takes either. A student who gets 4 and 6 right has understood that the list decides, not the sentence.'));
out.push(S('Stage 3 · Practise (sample – Card A, the shop)'));
out.push(SAMPLE([
  '**A:** You\'ve been here three weeks. Tell me honestly — what do you hate?',
  '**B:** Nothing. I like it here.',
  '**A:** Everybody hates one thing.',
  '**B:** All right. I hate using the till.',
  '**A:** Why?',
  '**B:** Because somebody is standing in front of me and I can feel them deciding I am slow.',
  '**A:** And the rest?',
  '**B:** I enjoy finding books for people. I don\'t mind cleaning, and I don\'t mind staying late.',
  '**A:** Then you will practise using the till on Tuesday mornings until you have finished thinking about the buttons.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Hated: using the till. Reason: the person waiting, not the machine. Fix: Tuesday mornings with nobody in the shop._ — so the fix is about **the people watching**, which is the point of the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Enjoy:** reading in English; explaining something to somebody who then understands it. **Don\'t mind:** writing; coming on a Saturday. **Hate:** speaking first in a group._',
  '**A:** Is it speaking, or is it speaking in front of thirteen people? — **B:** …It is the thirteen people. I speak to you perfectly well and you are a person.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lama enjoys finding books for people and she enjoys unpacking the boxes, which she says she did not expect. She doesn\'t mind cleaning and she doesn\'t mind staying late. The one she hates is the till, and the reason is not the till: it is somebody standing in front of her deciding that she is slow. Mrs Mona pointed out that she doesn\'t mind practising, she minds practising in front of people, and gave her four Tuesday mornings with an empty shop. I thought that was the best piece of management I have heard in this class.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I enjoy to read. → ✓ I enjoy **reading**.   ✗ I don\'t mind to stay late. → ✓ I don\'t mind **staying** late.   ✗ Have you finished to write it? → ✓ Have you finished **writing** it?   ✗ I need to practise to speak. → ✓ I need to practise **speaking**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Current students of the centre. (Everybody else pays 20,000 SYP a term.)'));
out.push(A('**2** They write down the five things somebody in the group could not say.'));
out.push(A('**3** You may not say "my English is bad" in that room. It exists because that sentence is how people excuse themselves from speaking — and the club only works if nobody is allowed to.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SATURDAY REPAIR HOUR — starts 15 March**',
  'One hour, every Saturday, in the yard behind the workshop. Free for anybody in this building; 10,000 SYP for anybody else, towards the parts.',
  '**It is for you if** you have something broken that you have been walking past for a year, or if you enjoy taking things apart and have nobody to do it with.',
  '**What we do.** We mend one thing each and we spend ten minutes at the end writing down what we could not mend and why.',
  '**What we don\'t do.** Nobody charges anybody. Nobody is asked what they do for a living. If you hate being watched, bring your thing and sit in the corner — that is allowed and nobody will come over.',
  '**One rule.** You may not say "I\'m not good with my hands". Everybody says it and it has never once been true.',
]));
out.push(S('Stage 7 · Write freely (sample, 147 words)'));
out.push(SAMPLE([
  '**THE HOMEWORK HOUR — for the children in this building, starts Sunday 9 March, 17:00**',
  'One hour, every Sunday, in the entrance hall. Free, and it will always be free.',
  '**It is for you if** your child has nowhere quiet to work, or if you cannot help with the homework any more and have stopped saying so out loud. Nobody here is going to ask you why.',
  '**What we do.** Everybody works for fifty minutes with the door shut. The last ten minutes are for the children to ask each other, not us. Two adults sit at the back and read their own things.',
  '**What we don\'t do.** We don\'t teach. We don\'t look at marks. Nobody is asked what school they go to. And no adult explains anything for more than one minute — if it takes longer, we write it down and find somebody on Monday.',
  '**One rule.** No adult may say "when I was at school". It has never helped a child and it has never been true.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"if you cannot help with the homework any more and have stopped saying so out loud" — that is me, and nobody has ever written it down._   ✓ _I am still afraid of being the parent who has to admit it. Can we come without talking to anybody?_   ? _What if I can only come twice a month?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the marks. The winning notice is nearly always the one with the fullest **What we don\'t do** section, and when you say that out loud the class immediately understands why — people stay away from things because of what they are afraid will happen, not because they do not know what happens.'));
out.push(S('Homework (sample – the message to one person)'));
out.push(SAMPLE(['Umm Fares — I am starting a homework hour in the entrance hall on Sundays at five, and I am writing to you and not putting this on the board, because you told me in January that Kinan does his work on the kitchen table while four people are cooking. He does not have to speak to anybody and neither do you. He sits down, the door shuts, and at six he comes home. You do not have to stay. And if it is the wrong thing, come once and never come again and I will not mention it.']));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  I started learning it at school'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The gap between the earliest and the latest start is usually twenty-five years or more in one room, and saying that out loud does more for the confidence of the late starters than anything else in the unit.'));
out.push(A('**b** **Both possible: 1** (_started to learn / learning_) and **3** (_like to read / reading_).   **Only -ing: 2** (_enjoy learning_).   **Only to: 4** (_want to go_).'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** – Lina, at thirty-one, two years ago.'));
out.push(A('**b** **1** He opened a manual for a machine they bought that week and could not read it, with eleven people waiting for him to tell them what it said.   **2** Writing one message that got the right answer back, in week nine.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I started **working / to work** there in 2020. _(either)_   **2** I enjoy **working** there.   **3** I need **to work** on Saturday.   **4** She likes **cooking / to cook**. _(either)_   **5** They finished **painting** the room.   **6** We hope **to see** you soon.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** When did you start learning English?',
  '**B:** I started learning it at school, at eleven, like everybody.',
  '**A:** Why then?',
  '**B:** Because it was on the timetable. That is the whole reason.',
  '**A:** Did you ever stop?',
  '**B:** I stopped the day I left school, and I began to learn again at twenty-six.',
  '**A:** What made you keep going?',
  '**B:** The first time somebody asked me to translate something and I could. That was about four months in, and I haven\'t stopped since.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Started at 11 · started again at 26._   _What made them keep going: the first time somebody asked them to translate something and they could._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**A:** What made you keep going? — **B:** My work. **A:** _(waits)_ — **B:** …And because my daughter asked me what a word on a packet meant and I did not know, and she is seven and she looked at me differently for about one second.',
]));
out.push(NOTE('The waiting is the exercise. Tell the listening partner explicitly: **ask, then say nothing**. The first answer is always the respectable one — _my job_, _my studies_ — and the second one, which arrives after three or four seconds of silence, is the real one and is usually about another person.'));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina started learning English at thirty-one, two years ago, when her company began buying from Türkiye and somebody had to write the messages. She likes to tell people she did it for work, and she says that is half true. The other half is that she did not want to be the person in the office who hands the telephone to somebody else. What made her keep going was one message in week nine that got the right answer back, and she has not stopped since. The thing she started and gave up is swimming, and she says what would have made her keep going is somebody to go with.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I started to learning. → ✓ started **learning** / started **to learn**.   ✗ I enjoy to learn. → ✓ I enjoy **learning**.   ✗ I began learn at school. → ✓ I began **learning** / **to learn**.   ✗ I like read. → ✓ I like **reading** / **to read**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Six of the twelve.'));
out.push(A('**2** "My job" — almost everybody said it first, and then said something else.'));
out.push(A('**3** They were learning alone. Not one person said the grammar was too hard.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHEN WE STARTED DRIVING** — nine members',
  'We asked everybody two questions: when did you start, and what made you keep going? The second question is the one that took time.',
  '**The numbers.** The youngest started at seventeen. The oldest at forty-nine. Four of us stopped after the first failed test.',
  '**The real answers.** Almost nobody said "I needed to". They said it first and then they said something else. The real answers were: a mother who had to get to a clinic; a brother who laughed; one person who simply did not want to ask anybody for anything ever again.',
  '**What they have in common.** Every one of the four who stopped stopped alone, and three of the four started again when somebody sat in the car with them.',
]));
out.push(S('Stage 7 · Write freely (sample, 151 words)'));
out.push(SAMPLE([
  '**MY ENGLISH, IN FOUR DATES**',
  'I started learning English at school at eleven, with forty-four other children and one book between two. I do not remember learning anything, and I passed everything.',
  'I stopped at eighteen, the week I left, completely, for nine years.',
  'I began again at twenty-seven, in a pharmacy, because a woman came in with a prescription written in English by a doctor in Beirut and I had to say I could not read it. She was very kind about it. That was worse.',
  'What has made me keep going is not that afternoon. The first answer I give people is that afternoon, because it is a good story and it finishes neatly. The real answer is Thursdays. I like the people in this room, I like the hour between half past five and seven when nobody can ask me for anything, and I would come if we were studying anything at all.',
  'I have told nobody that, because it sounds like a poor reason. I have decided it is the best one I have.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I would come if we were studying anything at all." I think that is true of four people in this room._   ✓ _The nine years between eighteen and twenty-seven is the biggest thing on the page and it has one line._   ? _What would have made you keep going at eighteen?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the sentences with another person in them. In most classes it is between two-thirds and all of them — and the class does not expect that, because the reasons people **give** are about work and the reasons people **have** are about somebody who was there.'));
out.push(S('Homework (sample – something you did not continue)'));
out.push(SAMPLE(['I started learning to swim at twenty-four, at the pool near the sports city, on Monday evenings. I went eleven times. I stopped because the woman I went with changed jobs and moved to Aleppo, and I went twice on my own and did not go again, and I told everybody including myself that it was the cost. It was not the cost; eleven weeks of it was already paid for. What would have made the difference is one other person. That is all it was, and I have never said it out loud until now because it sounds like a small reason for giving something up, and it turns out to be the commonest reason there is.']));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  I\'m good at listening, I\'m bad at starting'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Count both columns. In nearly every class **listening** wins the "best at" column and **speaking** wins the "hardest" column, by a long way — and showing the class that number does more for 17.6 than any explanation.'));
out.push(A('**b** Open. Mark the form only: _good at_ + **-ing**, _find it hard_ + **to**.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – two things they are good at and two they are bad at.'));
out.push(A('**b** **1** Writing things down, and starting. Mr Jamil says that being bad at starting is not being bad at something — it is finding something hard.   **2** If you are **bad at** something, you learn it. If you **find it hard**, learning will not help; you change the conditions. (So: not her writing — Tuesday.)'));
out.push(S('Language box · Practise'));
out.push(A('**1** I\'m good at **listening**.   **2** She\'s bad at **remembering** names.   **3** I find it hard **to start** a report.   **4** He\'s not very good at **explaining** things.   **5** We find it easy **to read** but hard **to speak**.   **6** He left without **saying** anything.'));
out.push(NOTE('Item 6 is there to make the rule bigger than this unit: **every preposition takes _-ing_** — _without saying · before going · after finishing · instead of asking · good at listening · interested in learning_. Students who learn it as "_at_ takes _-ing_" meet _without to say_ three weeks later.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Two things you are good at and two you are bad at.',
  '**B:** I\'m good at finding faults and good at listening to customers.',
  '**A:** And bad at?',
  '**B:** I\'m bad at writing things down and bad at starting.',
  '**A:** Say the second one again.',
  '**B:** I\'m bad at starting.',
  '**A:** Are you bad at it, or do you find it hard to start?',
  '**B:** (pause) I find it hard to start, because nothing makes me. If somebody is waiting, I do it.',
  '**A:** Then we are not going to work on your writing. We are going to work on Tuesday.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Weakness: "bad at starting". It was really a **condition** — the student does it perfectly well when somebody is waiting. You know because the evidence was about **when** it gets done, not about **how well**._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Good at:** listening; reading something twice and getting it. **Bad at:** speaking first; remembering words I only read._',
  '**A:** Are you bad at speaking first, or do you find it hard? — **B:** I find it hard. In a pair I speak first every time. It is the group.',
  '**b** _What would have to change: a group of four instead of thirteen. Not my English. The room._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour wrote that she is good at finding faults and good at listening to customers, and bad at writing things down and bad at starting. Mr Jamil stopped her on the second one and said that being bad at something and finding it hard are not the same, because if you are bad at writing you learn to write, and if you find it hard to start, learning to write will not help you at all. She decided she finds it hard to begin: she has written four reports this month and every one of them was written on the last evening. So he said they were not going to work on her writing, they were going to work on Tuesday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ good at to write → ✓ good **at writing**.   ✗ I find hard to start. → ✓ I find **it** hard to start.   ✗ I\'m bad in speaking. → ✓ I\'m bad **at** speaking.   ✗ He left without to say anything. → ✓ without **saying** anything.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because what the customer says they did last usually tells her what is wrong before she has opened the machine — so listening does the work that an hour of looking would otherwise do.'));
out.push(A('**2** If you are **bad at** something, the answer is to learn it. If you **find it hard**, learning will not help — you need somebody expecting the thing on a Thursday. One is a skill problem; the other is a conditions problem.'));
out.push(A('**3** That they are going to work on **when** she starts — fixing a day — rather than on her writing, which is not the thing that is wrong.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO AND TWO** — week 1, Saturday exam course',
  '**Good at.** I am good at reading — I read a page of the practice paper in four minutes and I got five out of six, with nobody helping me. And I am good at guessing a word from the rest of the sentence, which my old teacher told me was cheating and which the exam actually rewards.',
  '**Bad at.** I am bad at spelling. And I wrote that I am bad at finishing in time.',
  '**What is true.** I am bad at spelling; that is real and I can learn it. But I am not bad at finishing in time — I find it hard to leave a question I cannot do. In the practice paper I spent nine minutes on one gap and did not reach the last page.',
  '**So:** spelling, ten minutes a day. And in every practice paper from now on, I move on after ninety seconds, whether I have it or not.',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**TWO AND TWO** — me and English, February',
  '**Good at.** I am good at listening. I understood every word of Track 16.11 at full speed and I did not need it twice, and two years ago I could not follow Ms Huda ordering tea. And I am good at reading slowly and getting it right — I read the whole leaflet in 17.7 and found the payment line that three other people missed.',
  '**Bad at.** I am bad at speaking. And I am bad at remembering words.',
  '**What is true.** I am bad at remembering words I have only read, and that is real and I can fix it. But I am not bad at speaking. I speak to my partner in every lesson for nine minutes without stopping. I find it hard to speak in front of thirteen people, which is a different sentence, and I have been telling myself the first one for two years.',
  '**So:** I am not going to work on my speaking. I am going to go to the Saturday club, where there are six people and no desks, and I am going to say something in the first five minutes.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have been telling myself the first one for two years." That sentence is the whole page._   ✓ _You are underselling the listening — a year ago you asked me to repeat everything._   ? _What exactly are you going to change, and when? The club starts on the 8th._'));
out.push(S('Stage 7R · Share'));
out.push(A('Nobody reads a weakness aloud — only the **change**. Write the changes on the board with names next to them and photograph it. Ask about three of them in two weeks, by name. A class that knows the changes will be asked about keeps them at about twice the rate.'));
out.push(S('Homework (sample – from somebody who knows you)'));
out.push(SAMPLE(['**What my sister would write about me.** She would say I am good at explaining things to people who are frightened, because she has watched me do it with our mother and a form. She would say I am good at starting things. And then she would name the weakness I did not write down: that I stop the moment somebody else is better at it than me. She has four examples and she would give all four. I wrote "bad at remembering words" and she would say that is not my problem and that I know it is not my problem.']));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  Try writing it the night before'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Keep three. The best ones are nearly always small and specific — _read the same page twice_ · _put the book where your telephone goes_ — and the worst are _study every day_.'));
out.push(A('**b** **1** _I **tried to open** the door_ = I made an effort; it was difficult; it probably did not open.   **2** _I **tried pushing** the door_ = an experiment; pushing was easy; the question was whether it would work. What happened next: in **1**, the door stayed shut. In **2**, you found out that it opens the other way.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – she cannot start speaking. (She understands everything and says nothing.)'));
out.push(A('**b** **1** Try writing the first sentence down before saying it; try saying something in the first five minutes of any lesson; try not learning any new words for two weeks.   **2** She **remembered to write** thirty words down every single day; she **forgot to use** any of them.'));
out.push(S('Language box · Practise'));
out.push(A('**1** Try **asking** somebody else — it might be quicker.   **2** I tried **to open** it but it was locked.   **3** Remember **to bring** your notebook tomorrow.   **4** I remember **coming** here as a child.   **5** Don\'t forget **to lock** the door.   **6** Try **writing** it down before you say it.'));
out.push(NOTE('Items 3 and 4 are the pair to teach together. _Remember **to bring**_ is a job that has not happened yet. _I remember **coming**_ is a memory of something that did. The one-line test: **_to_ looks forward, _-ing_ looks back.** It works for _forget_ too, and the difference between _I forgot to post it_ (it is in your pocket) and _I forgot posting it_ (it is in the postbox) is worth sixty seconds of anybody\'s time.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I understand everything and I say nothing. For two years.',
  '**B:** I know that one. I was that for eighteen months.',
  '**A:** What did you do?',
  '**B:** Three things, and only one worked. Try writing the first sentence down before you say it.',
  '**A:** That feels like cheating.',
  '**B:** It isn\'t. Nobody can hear your paper. Second: try saying anything in the first five minutes.',
  '**A:** And the third?',
  '**B:** Try not learning any new words for a fortnight. That is the one that worked for me.',
  '**A:** Which should I start with?',
  '**B:** The second. Saturday at eleven, say good morning to somebody before you sit down, and you have already done it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_1 write the first sentence down · 2 speak in the first five minutes · 3 stop learning new words for a fortnight._ — The one most students choose is **2**, because it is the only one that can be done without preparing anything.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**B (advice):** _Try reading the same page twice instead of two pages once — that worked for me. Try putting the book where your telephone charges, which I have only heard about. And try reading something you already know in Arabic, which worked for me and for nobody else I have told._',
  '**b** _I remembered to do the listening homework every week for a term. I forgot to ever listen to anything that was not homework._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina told Hiba three things to try. Try writing the first sentence down before you say it, because nobody can hear your paper. Try saying something in the first five minutes of any lesson, even good evening, because once you have spoken, speaking again is a smaller thing. And try not learning any new words for two weeks and finding out what you can do with the ones you have. The third is the one that worked for her. She says she tried to learn thirty words a week for a year: she remembered to write them down every single day and she forgot to use any of them. Hiba is starting with the second one, at the club on Saturday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Try to write it down — it might help. _(advice)_ → ✓ **Try writing** it down.   ✗ I tried opening it but it was locked. _(it would not open)_ → ✓ I **tried to open** it.   ✗ Remember bringing your book tomorrow. → ✓ Remember **to bring** it.   ✗ I\'ll never forget to meet her. → ✓ I\'ll never forget **meeting** her.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Anybody who is not that one kind of member — and the page says so, and says that the advice being useless to them is not a failure of the advice.'));
out.push(A('**2** Because nobody can hear your paper.'));
out.push(A('**3** She remembered to write them down every single day for a year, and forgot to use a single one of them.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE THINGS TO TRY** — for the people who read a page and remember nothing',
  'This page is for one kind of reader. If you finish books and remember them, it will be useless to you.',
  '**1. Try shutting the book at the end of every page and saying one sentence out loud.** It feels slow; it is slow, and it is still four times faster than reading the page again in March.',
  '**2. Try writing three words in the margin, not a summary.** Once you have written a summary you have written an essay and you will stop doing it by Thursday.',
  '**3. Try reading something you already know the story of.** You will understand twice as much and you will stop looking words up.',
  '**Only one of these will work for you.** Start with number 1, tonight, with whatever is next to your bed.',
]));
out.push(S('Stage 7 · Write freely (sample, 158 words)'));
out.push(SAMPLE([
  '**THREE THINGS TO TRY** — for the people who study hard and do not get better',
  'This page is for the member who comes every week, does every exercise, and is in the same place in June as in January. If that is not you, stop reading; you will find this annoying.',
  '**1. Try doing half as much, twice.** I did every exercise once for a year. I now do half of them and do each one twice, a week apart, and it is the single biggest difference I have ever made. It feels lazy. It is not lazy; it is the only thing that has worked.',
  '**2. Try using it badly on purpose, once a week.** Say the thing wrong, out loud, to a person. I tried to be correct for two years and I was correct and silent.',
  '**3. Try stopping for a week.** I have heard this from three people and it has never worked for me, and I am including it because three people is three people.',
  '**Only one of these will work for you.** Start with number 1, on Sunday, with the exercise you did last week.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I was correct and silent." I am going to write that on something._   ✓ _Number 3 is honest about not working for you, which is good — but then it is not advice, it is a report. Say what the three people said happened._   ? _What happened when you tried number 1 and it felt lazy — did anybody tell you to work harder?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect them into one booklet and give it to the next level. Students write differently when they know the reader is a real person who is not in the room, and the question — _which page would have helped you most two years ago?_ — produces the quietest and most honest minute of the unit.'));
out.push(S('Homework (sample – advice you did not take)'));
out.push(SAMPLE(['My first teacher told me to stop translating in my head and I did not take it, because I thought she did not understand how much slower I would be. I was right about the slower and wrong about everything else. I translated in my head for four more years and it cost me those four years; I only stopped when I had a job where somebody was waiting on a telephone and there was no time to translate anything. So she was right and her advice was useless, both at the same time — she told me what to do and not one thing about how to start, and at nineteen I needed the second one.']));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  Sorry — could you say that again?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Most classes produce six or seven. Mark _Repeat._ and _Again._ as blunt — not wrong, but not what anybody says to a person they do not know well.'));
out.push(A('**b** _I didn\'t hear it_ → **Could you say that again?**   _too fast_ → **Could you say it a bit more slowly?**   _I don\'t know that word_ → **What does ___ mean?**   _I\'m not sure I understood_ → **Do you mean…?**   _I don\'t know how to write it_ → **Could you spell that?**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – "Do you mean…?"'));
out.push(A('**b** **1** Because she does not know **which part** — so she has to repeat the whole thing the same way, and the student understands it the same amount.   **2** Say _"do you mean"_ at least once a lesson, for the rest of the term. She is going to count.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _Sorry, what does "assessment" mean?_   **2** _Could you say it a bit more slowly, please?_   **3** _Sorry — could you say the second part again?_   **4** _Do you mean we have to bring it on Thursday?_   **5** _How do you spell that?_ / _Could you write it on the board?_'));
out.push(NOTE('Mark **3** hardest. Almost every student will answer it with _Could you say that again?_, which is the whole-thing request and is exactly what the cycle exists to replace. _Which part_ is the skill; politeness is only the wrapping.'));
out.push(S('Stage 3 · Practise (sample)'));
out.push(SAMPLE([
  '**A:** _(quickly, quietly)_ Bring the green form and two photographs to Room 9 before Thursday at four.',
  '**B:** Sorry — could you say that again?',
  '**A:** Bring the green form and two photographs to Room 9 before Thursday at four.',
  '**C:** Could you say it a bit more slowly, please?',
  '**A:** Bring… the green form… and two photographs… to Room 9… before Thursday at four.',
  '**B:** What does "form" mean here — a paper?',
  '**A:** Yes, a paper. The green one.',
  '**C:** How do you spell the room — is it nine or five?',
  '**A:** Nine.',
  '**B:** So do you mean the green form, two photographs, Room 9, before four on Thursday?',
  '**A:** That is exactly it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_The instruction: the green form and two photographs, Room 9, before four on Thursday._   _Five different ways: say again · more slowly · what does it mean · how do you spell · do you mean._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**b (the last time I did not ask):** In my first week at TechCare somebody told me where to put the finished repairs and I did not hear the second half and did not ask. I put them on the wrong shelf for three weeks. Nobody noticed, and then everybody noticed at once. It cost me a morning, and it cost me the thing I actually minded, which was looking like somebody who did not listen in week one._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda stopped the lesson because four people did not understand something and nobody said anything, and she said she watched it happen. She says "I don\'t understand" is not enough, because she then has to say the whole thing again the same way and you understand it the same amount. The sentence she wants is "do you mean", and Lina used it by accident while asking what it was for. She says a wrong guess is worth more to her than silence, because it tells her what you were thinking. She is going to count them for the rest of the term. The last time I didn\'t ask, I went to the wrong room for three weeks.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Repeat please. → ✓ **Could you** say that again, **please**?   ✗ I don\'t understand. _(as the whole request)_ → ✓ Could you say **the second part** again?   ✗ What means "assessment"? → ✓ **What does** "assessment" **mean**?   ✗ How do you write that? _(for spelling)_ → ✓ **How do you spell** that?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Not being lost least — saying so soonest.'));
out.push(A('**2** Because it tells the teacher what the student was thinking, which is worth more than a correct answer: it shows exactly where the misunderstanding is.'));
out.push(A('**3** Because by the end the teacher has built four more sentences on top of the one that was missed.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT TO SAY WHEN YOU ARE IN A CLINIC AND DO NOT UNDERSTAND**',
  'You will not understand about half of it. Everybody doesn\'t. The people who get the right treatment are not the ones who understand most; they are the ones who say so before they leave the room.',
  '**Say it before you stand up.** Once you are in the corridor it is over, and going back in is four times harder than one more question.',
  '**Repeat it back.** "So do you mean one tablet twice a day, after food?" takes six seconds and it is the only way either of you finds out that you heard "twice" as "once".',
  '**Four sentences for your pocket:** _Sorry, could you say that again? · How do you spell the name of it? · Do you mean…? · Could you write that part down?_',
  '**And one you may not say:** "yes" when you mean "I think so".',
]));
out.push(S('Stage 7 · Write freely (sample, 161 words)'));
out.push(SAMPLE([
  '**WHAT TO SAY ON YOUR FIRST DAY IN A WORKSHOP**',
  'You will not understand about a third of what is said to you on the first day, and about half of that third will matter. Everybody is in this position and nobody says so, which is why you think you are the only one.',
  '**Ask at the machine, not at the end of the day.** At five o\'clock the person has gone home and the thing is still half done and now it is also your fault.',
  '**Ask for the second half, not the whole thing.** "Sorry — after I take the cover off, what then?" People are happy to repeat a half and they get tired of repeating a whole.',
  '**Say it back with the numbers in it.** "So: eight millimetres, and it goes on the blue shelf?" The numbers are where the mistakes live.',
  '**Four sentences for your pocket:** _Sorry, could you say that again? · What do you call this one? · Do you mean…? · Can I show you and you tell me if it\'s right?_',
  '**And one you may not say:** "I\'ve got it" when you have not got it. Everybody can tell, and the second time nobody believes the first time either.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the thing is still half done and now it is also your fault" — that is exactly why I never ask._   ✓ _I still could not say "Can I show you and you tell me if it\'s right?" out loud. Is there a shorter one?_   ? _What happens if I ask and they are impatient?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Copying four sentences from **somebody else\'s** card into the back of the notebook is the point of the whole cycle, and it takes two minutes. Ask whose four they took and why — the answer is nearly always "because that is my situation", which is the Writer\'s box proving itself.'));
out.push(S('Homework (sample – the last time you did not ask)'));
out.push(SAMPLE(['Last March a man at the bank told me which window to go to for the transfer and I heard "four" and I think he said "fourteen", and I did not ask because there were people behind me. I stood at window four for thirty-five minutes. The woman there was kind and told me it was the wrong one and that this happens all day. It cost me thirty-five minutes and a morning off work I do not get back. The sentence I would use now is the one from this lesson, and it is six words: "Sorry — do you mean four or fourteen?"']));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: What does the leaflet say?'));
out.push(S('Stage 1 · Get ready – Unit 17 quiz'));
out.push(A('**1** I want **to finish** it this year.   **2** I enjoy **reading** in English.   **3** She is good at **speaking**.   **4** I find **it** hard **to start**.   **5** **Try writing** it down — it might help. _(advice = an experiment, so **-ing**)_   **6** **Could you repeat that, please?**'));
out.push(NOTE('Number 5 is the only one in the six that is not a form error — _try to write_ is perfectly grammatical, and it is **wrong here** because the sentence says _it might help_, which is an experiment. Make the teams explain this one rather than just correct it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** The main **General English** course. First she must do the **free placement test — Thursday at four**, because she has not studied at the centre before, and everything else waits for the result.'));
out.push(S('Stage 3 · Practise (sample – Leaflet A explained without showing it)'));
out.push(SAMPLE([
  '_There are two courses and one small test. Let me do the courses, then the money._',
  '_Basic skills: six weeks, Monday and Wednesday evenings, six until half past seven. Office skills: eight weeks, Saturday mornings, ten until one._',
  '_You can\'t do either of them until you have done a short test, to show you can use a keyboard. The test is free._',
  '_The money: two hundred and ninety thousand, and — this is the unusual part — the materials are included. You can pay half now and half in week four. That is in the small print and nobody mentions it._',
  '_And one condition that would stop you: you only get the certificate if you come to six of the eight sessions. So missing three ends it._',
  '**B:** Then I need to know the test dates. — **A:** You ring and ask; the paper does not say.',
  '**C:** I\'m going to do the Saturday one and I\'m going to ring on Monday morning about the test.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Total: 290,000 SYP._   _Not included: nothing — the materials are in it (on Leaflet B it is the test fee)._   _The condition that would stop me: six of eight sessions for the certificate._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the price list from the gym on the corner. Three things, and the third is the one that matters._',
  '_A month is eighty thousand. Three months is two hundred, so a third cheaper. A year is six hundred._',
  '_What is not included: the locker, which is five thousand a month and which they do not mention until you are standing there with a bag._',
  '_What you cannot do yet: the weights room, until somebody has shown you round once. That is free but you have to book it._',
  '_Can you pay in parts? Only on the year._',
  '**A:** What do I do first? — **B:** Book the induction. Everything else waits for that, and it is the thing nobody tells you.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Omar explained the leaflet from the computer centre. There are two courses: a six-week basic one on Monday and Wednesday evenings, and an eight-week office course on Saturday mornings. The basic one is two hundred and ninety thousand and the materials are included, which he said is unusual and is the reason he would choose it. You cannot do either without being able to use a keyboard, and there is a short free test for that. You can pay half now and half in week four, which is in the small print. And you only get the certificate if you come to six of the eight sessions, so missing three ends it. I decided I would do the Saturday one, because I cannot do two evenings a week, and that I would ask whether the attendance rule is six out of eight for that one too, because he could not tell me and the paper only says it once.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It says you must to be at A2. → ✓ you **must be** at A2.   ✗ The books are not included in it — forty-five each one. → ✓ **forty-five each**.   ✗ You can pay in two times. → ✓ You can pay **in two parts** / **in two payments**.   ✗ It says don\'t pay to a teacher. → ✓ It says **do not pay a teacher** / **pay at reception**.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 5'));
out.push(A('**1 the**   **2 to**   **3 at**   **4 it**   **5 because**   **6 who**'));
out.push(NOTE('Gaps **2**, **3** and **4** are this unit\'s grammar doing exam work: _want **to** learn_, _bad **at** writing_, _enjoy **it**_. Gap **4** is the one to discuss — the verb is _enjoy_, which must have an object, and the only word that fits is _it_. Reading Part 5 at A2 is almost entirely grammar words; tell the class that, because students waste the whole part hunting for content words.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Hi Rasha!',
  'There are **three** courses. The main one is **General English**, **twice** a week, from **half past five** to **seven**, for **twelve** weeks.',
  'It costs **380,000**, but the books **aren\'t included** — **45,000** each. You don\'t have to **pay it all at once**: you can **pay half before the first lesson and half before week six**.',
  'You can\'t do **the exam course** yet, because **you have to be at A2 already and you haven\'t done a test**.',
  'First, do **the placement test** — it\'s **free** and it\'s on **Tuesdays and Thursdays** at **four**.',
  'And don\'t **give money to a teacher**; it says **pay at reception**.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (49 words)**',
  'Hi Sam! Try listening to something every day, even five minutes — that\'s the thing that worked for me. The hard part for me is speaking first; I understand everything and say nothing. But I enjoy reading in another language. It\'s like finding a door in a wall. Good luck!',
]));
out.push(SAMPLE([
  '**Weaker sample (28 words) – why it only just passes**',
  'Hi Sam. You should try to listen every day. I find hard to speak first. I enjoy to read in other language. Good luck.',
  '_All three points are answered and it is long enough, so it passes — but every one of the three sentences has this unit\'s error in it: **try to listen** should be **try listening** (advice is an experiment); **I find hard** needs **it**; **enjoy to read** must be **enjoy reading**. Also **in other language** needs **another**. A very useful one to put on the board, because the student clearly knows the content and has lost marks only on the forms this unit teaches._',
]));
out.push(S('Unit 17 check · A  Grammar and vocabulary'));
out.push(A('**1 b** to finish   **2 b** reading   **3 b** staying   **4 c** both a and b   **5 c** finding   **6 a** it   **7 b** Try   **8 a** could you'));
out.push(S('Unit 17 check · B  Listening (Track 17.14)'));
out.push(A('**1 C** (Nour – every report starts on a Tuesday)   **2 A** (Hiba – something in the first five minutes)   **3 B** (Lama – the till, with nobody watching)   **4 D** (Lina – no new words for a fortnight)   **5 E** (Omar – ask at the time, every time)'));
out.push(A('The two extra letters are **F** (change to a different level) and **G** (stop coming on Saturdays).'));
out.push(NOTE('The full audio script for Track 17.14 is printed in the Student\'s Book **after** the questions. Read it aloud **twice** at normal speed if there is no audio. Note that every one of the five decisions is a change to the **conditions**, not a resolution to try harder — which is the whole of 17.4 and 17.5 arriving in one script. Say that after the check.'));
out.push(S('Unit 17 check · C  Writing (sample, 83 words)'));
out.push(SAMPLE(['I am learning to use the new system at work. I want to be able to do a whole order without asking anybody, by the summer. I enjoy finding out what the buttons do when there is nobody waiting, and I don\'t mind staying half an hour late to do it. What I find hard is doing it with a customer in front of me — not the system, the customer. So the thing I am going to try is this: I am going to do one real order every Tuesday at eight in the morning, before the shop opens, with my manager watching and nobody else in the room.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line that needs most work is almost always **_enjoy / don\'t mind / practise_ + -ing**, because the _to_ forms come first in the unit and students generalise from them. Keep the three lists on the wall through Unit 18 and point at them rather than explaining, every time.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 17 was about learning. Unit 18 is about the thing nobody taught anybody: asking **how** to do something online, giving the steps, and explaining a screen to somebody who cannot read it.',
  '**Then the Mid-Book Test.** It covers Units 13–18, it is 60 marks, and it is in the Student\'s Book straight after Unit 18. The key, the audio scripts, the mark scheme, two graded writing samples and the score bands are in this answer key in the same place.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 17 · Answer Key');
