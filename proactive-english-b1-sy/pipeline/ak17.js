// Proactive English B1 · Syria Edition · Book 2 · Unit 17 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 17  Habits Past and Present — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**Four forms, and the whole unit is keeping them apart.** _I used to work nights_ (the past, finished) · _I would wait by the gate_ (again and again) · _I am used to nights_ (normal to me now) · _I am getting used to days_ (becoming normal). Students mix these more than any other four forms in the language, and the mixing changes what the sentence claims. Correct the form every time, including in free speaking, and name which of the four was meant.',
  '**The one error to stamp out in 17.3 and never stop checking:** ⚠ ~~I am used to work~~. After _be used to_ and _get used to_ the verb is **-ing**, because _to_ there is a preposition. The test to give the class: you can put a noun after it (_I am used to the noise_), and you can never put a noun after a real infinitive.',
  '**The two cycles that change what the class does with their working lives** are 17.3 and 17.4. In 17.3 _being used to something is how a thing stops being a question_: the work nobody reviews is the work somebody has got used to. In 17.4 there is a **window** in which a change can still be described, and it closes when _getting used to_ becomes _used to_ — which is the argument for writing the page in the third week and not the ninth month.',
  '**What you need in the room.** For 17.1 and 17.7, one thing each that used to be done differently where the student works, **and the oldest person who was there** — the Unit 16 NEXT box asked for both. A class that arrives without the person has a cycle about a document instead of a cycle about somebody who remembers. For 17.6, every student needs their **3.6 page** from Book 1 in front of them.',
  '**And the sentence the unit ends on**, which is Umm Kinan\'s: _a person who is not asked anything for twenty-four years will conclude that they have nothing, and nobody will ever correct them — because the correction only arrives when somebody knocks._',
], C.lblue, C.navy));

// ===================== 17.1 =====================
out.push(pb());
out.push(h2('17.1  We used to sign at the bus'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Take the eleven things the class brought and put them on the board in two columns, **then** and **now**, and then ask the second question of each: _does anybody know why it changed?_ In a first run, two or three of the eleven have a reason attached and the rest have none — which is the finding the unit is built on, and it is worth writing the count on the board.'));
out.push(A('**b** **1** _used to work_ (a nine-year state that has finished; _worked_ is also correct, and the difference is that _used to_ says explicitly that it has stopped)   **2** _made_ — one Tuesday is not a habit, so ⚠ ~~used to make~~   **3** _used to sign_   **4** _told_ — a single event in May   **5** _used to keep_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the sheets were collected at the bus, by the man on the gate, until 2019.'));
out.push(A('**b** **1** A sheet went missing in 2019 and a bus went out with a cracked mirror; somebody came from the directorate, and after that the clerk wanted the sheets at the window so that he could see them signed. Abu Khaldoun thinks it lasted about a month as a rule and then became the way it is done.   **2** That when the person who remembers the reason goes, the rule stays and the reason leaves — and after that nobody can change it, because you cannot argue with a rule that has no reason attached to it.'));
out.push(NOTE('Tareq\'s sentence is the one to put on the board: _I have been asking for a change for two months and what I was actually asking for was 2019._ A request to **go back** is a completely different document from a request to **invent**: it has a year in it, a name in it and a precedent, and it can be four lines long. Most of what adults ask for at work used to exist, and almost nobody finds out before writing the letter. The practical instruction, which transfers to every trade in the room: before you ask for anything, find out whether it used to happen — and the only source is the oldest person who was there.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The check sheets used to be collected at the bus. They have gone to the office window since 2019._',
  '**2** _People used to ask the clerk at the counter. You send an email now, and it has been like that since the office moved in 2022._',
  '**3** _The keys used to hang on a board by the door. They are in a drawer in the office now, and nobody can say when that started._',
  '**4** _The foreman used to decide which machine a job went on. The order sheet decides it now, and the change came with the ministry work in March._',
  '**5** _A claim used to take about a fortnight. It takes about six weeks now, and it changed when the second signature was added last year._',
]));
out.push(A('Item 3 is the one to pull out: _nobody can say when that started_. A change with no date and no reason attached is the commonest kind, and it is the one 17.7 goes looking for a person about.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The way a form is handed in.',
  '**B:** The daily check sheets used to be collected at the bus at the end of the day. They have gone to the office window since 2019.',
  '**A:** Does anybody know why?',
  '**B:** One man. A sheet went missing in 2019 and a bus went out with a cracked mirror, and somebody came from the directorate.',
  '**A:** Who is the oldest person who was there?',
  '**B:** Abu Khaldoun, sixty-three, in that yard since 1989, and nobody has ever asked him anything.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Count the changes with a reason against the changes with none: in a first run it is about three with and eight without. Then the second count, which is the one worth saying out loud — how many of the eight **have somebody still there who would know**? Usually most of them, and in every case nobody has asked.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Requests for a part used to go on a half-sheet and straight to the workshop. Since the stores system came in, they go into the system, and the workshop sees them when somebody in stores releases them. It changed in 2021 with the system, and the reason given at the time was traceability._',
  '**b** _What I would be asking for, if I asked, is the half-sheet back for urgent jobs — which is a thing that used to happen, so my letter can name the year and the arrangement and does not have to invent anything. And the person who would know why urgent jobs were taken out is the storeman, who has been there seventeen years and was in the meeting._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq has found out something and is still annoyed about it. The check sheet did not always go to the office window: until 2019 the sheets were collected at the bus, by the man who opened the gate, at the end of the day — which is exactly what he asked for in his letter in September and exactly what he has been told twice is impossible. He asked for a thing that used to happen, and nobody in that office knows it used to happen, because everybody who was there in 2019 has gone except one man: Abu Khaldoun, sixty-three, in that yard since 1989, who does not drive any more and hands out the keys. Tareq asked him on Tuesday and was told in about ninety seconds what he has spent two months writing letters about. They used to collect them at the bus; the man on the gate would take them as the drivers came in and would put them in a tin, and on a Thursday the clerk would come out to the gate and take the tin. Then in 2019 a sheet went missing and a bus went out with a cracked mirror and somebody came from the directorate, and after that the clerk said the sheets had to come to the window so that he could see them signed — and Abu Khaldoun thinks it lasted about a month as a rule and then became the way it is done. There is no paper. Tareq asked. There is a man of sixty-three in a yard, and there is Tareq, and from Tuesday there are two people who know. And the sentence he said before the lesson: he has been asking for a change for two months and what he was actually asking for was 2019 — if he had known that in September his letter would have been four lines long and would have had Abu Khaldoun\'s name in it. Ms Huda said that is the unit in one case: every workplace has rules whose reasons are in one person\'s memory and have never been written down, and when that person goes the rule stays and the reason leaves.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I didn\'t used to → ✓ didn\'t **use** to.   ✗ Did you used to? → ✓ Did you **use** to?   ✗ I used to make a mistake on Tuesday. → ✓ I **made** a mistake on Tuesday.   ✗ I am used to work nights _(meaning the past)_ → ✓ I **used** to work nights.   ✗ It used to be collect at the bus. → ✓ used to be **collected**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That he is asking for something that used to happen, and that it stopped for a reason nobody wrote down — so the letter names the year, the arrangement and the man who remembers it.'));
out.push(A('**2** An hour with Abu Khaldoun and a notebook, before he goes — because the reason for the change is in one man\'s memory and in no document in the building.'));
out.push(A('**3** That a rule which has lost its reason cannot be argued with, and so cannot be changed: the reason has to be recovered before anything else can happen.'));
out.push(A('The move in this model that students can copy immediately is the **four-line letter**. Once a request is a request to restore, it needs no justification paragraph: the year, the arrangement, the name of the person who remembers, and the ask. Everything Tareq wrote in September was an attempt to justify a thing that had a precedent he did not know about.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE STORES MANAGER · urgent part requests** · F. Kayyali · November',
  'I am asking for something that used to happen, and I did not know that until last week.',
  '**What used to happen.** Until 2021, a request for a part on an urgent job went on a half-sheet straight to the workshop, and the workshop saw it the same hour.',
  '**What happens now.** It goes into the stores system, and the workshop sees it when somebody in stores releases it, which is usually the next working day.',
  '**When and why it changed.** 2021, with the system. The reason given at the time was traceability, which is a good reason and is not an argument against a half-sheet in parallel.',
  '**Who remembers.** Abu Samir in stores, seventeen years, who was in the meeting in 2021 and is the only person left who was.',
  '**What I am asking for.** The half-sheet back for urgent jobs only, in parallel with the system entry — about four lines of writing per job.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**TO THE DEPOT MANAGER · the daily check sheet** · T. Ayoub · 12 November',
  'I wrote to you in September asking that the check sheets be collected at the buses at the end of the day. I was told twice that it was not possible. I am writing again because I have learnt something that changes the letter completely, and it makes this one shorter.',
  '**Until the spring of 2019 that is how it was done.** The man on the gate took the sheets from the drivers as they came in and put them in a tin, and the clerk came out for the tin once a week. I am not asking for a new arrangement. I am asking for the one that existed for about fifteen years.',
  '**Why it changed.** A sheet went missing in 2019, a bus went out with a cracked mirror, and somebody came from the directorate. After that the clerk asked for the sheets at the window so that he could see them signed.',
  '**What nobody has ever written down.** That the change was never a decision. It was done in a bad week and nobody has looked at it since.',
  '**Who remembers.** Abu Khaldoun, in the yard since 1989. He is sixty-three. He told me all of the above in about ninety seconds, and no paper in the building contains any of it.',
  '**What I am asking for.** The tin, or anything like it, at the gate — and an hour with Abu Khaldoun and a notebook before he goes, which will cost you nothing and is worth more than my letter.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"What worked is that the letter is short because it does not have to justify anything, and I had not seen before that a request to go back needs no justification. I would move the line about it never being a decision to the end, because at the moment the manager reads it before he has agreed that it used to happen. And my question is what you will do with the hour if he gives it to you — because if you have not decided that, you will get the hour and come out with a story."**'));
out.push(S('Stage 7R · Share'));
out.push(A('The count is the point of the cycle: how many of the room\'s requests turn out to be requests for something that **used to happen**? In a first run it is three or four out of eleven, and in every one of those cases the student has been writing the wrong kind of letter. End on the instruction, not the count: before you ask for anything at work, find out whether it used to exist, and the only source is a person.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked the storeman. He was there in 2021 and he said the half-sheets were not stopped on purpose at all — the system came in, the half-sheet pad ran out in about the March, and nobody ordered another one. He said: "nobody decided that, it just ran out." Seventeen years and nobody has ever asked him. I have written his sentence down in his words, because it is the only sentence in my letter that nobody can argue with.']));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  He would sweep the floor at seven'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on a **person and a repeated action**, not a rule and not a fact — and write the verbs only on the board. If a student offers a state (_there would be two machines_), use it: that is the mistake the cycle exists to correct, and it is better found in Stage 1 than in a report.'));
out.push(A('**b** **1** both   **2** _used to_ only — _be_ is a state   **3** both   **4** both   **5** _used to_ only — _have_ is a state. The rule to give the class: **_would_ for actions that were repeated, _used to_ for anything that simply was.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** His father\'s, nineteen years after his death — and he has found his father\'s notebook in the bottom of the big drawer, with nothing useful in it: prices from 2003, three telephone numbers and a list of names he does not know.'));
out.push(A('**b** **1** He would come in at ten past six and sweep the whole floor before anything else; he would put the kettle on; and he would walk round both machines with his hand flat on them and would not speak to anybody until he had.   **2** For **states** — _there would be two machines_ is wrong, and it has to be _there used to be two machines_.'));
out.push(NOTE('The teaching point of the cycle is not the form, which is easy, but what the form recovers. Nobody can tell you their method when you ask for it; ask what somebody **would** do, every time, and the method arrives in three sentences. And then the second question, which is the one that costs something: **what was it for?** Bassel\'s father swept a floor that a boy was paid to sweep, and the sweeping was twenty minutes alone in the shop looking at everything, because you cannot sweep round a thing without seeing it. The habit was dropped at twenty-three by a man who thought it was about the floor, and the engineer has since found two bearings starting that a hand on the machine would have found first.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _He would arrive before anybody else, and he would read the fault book from the back, and he would never ask you a question in front of the others. And there used to be only one fault book._',
  '**2** _My uncle would stand at the gate at six, and he would count the lorries out loud, and he would write nothing down. He used to be the only one with a key._',
  '**3** _The woman before me would telephone every ward on a Monday morning, and she would keep a list in pencil, and she would cross a name off only when she had spoken to a person. There used to be eleven wards._',
  '**4** _He would eat at his desk, and he would answer the telephone with his mouth full, and he would apologise for it every time. He used to be the duty officer._',
  '**5** _Ten years ago I would copy every form twice, and I would keep the second copy at home, and I would never tell anybody I had it. I used to be frightened of being asked for something I could not produce._',
]));
out.push(A('Item 5 is the one to read out: a student describing **themselves** ten years ago is the bridge to 17.6, and _I used to be frightened_ is the kind of sentence that cannot be said with _would_.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The person who had your job before you.',
  '**B:** She would telephone every ward on a Monday morning, and she would keep her list in pencil, and she would never cross a name off until she had spoken to a person.',
  '**B:** And there used to be a second list on the wall.',
  '**A:** Which of the three do you do?',
  '**B:** The pencil, and I have no idea why I do it. I have never thought about it until now.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The harder count is the one to dwell on: of the eight habits people say they kept, how many were **copied without ever deciding to**? In a first run it is six or seven, and almost nobody has noticed. That is worth a minute of silence before Stage 4, because every adult in the room is carrying somebody else\'s method without having chosen it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The man who trained me would arrive twenty minutes early and read the fault book from the back, and that was so that he knew what had gone wrong most recently before anybody told him their version of it. He would never ask you a question in front of the others, which I understood years later. And he would check the water before the power, every time, and I do not know what that was for. I kept the fault book and the water. I dropped the questions in private, and I dropped it when I got six people of my own and no time._',
  '**b** _My partner says I should take back the questions in private, because the reason I dropped it was time and it costs about four minutes, and the reason he did it was so that a man would tell you the truth._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel was looking for the 2019 paper invoices and found a notebook of his father\'s in the bottom of the big drawer — nineteen years he has had that drawer and has never emptied it. There is nothing useful in the notebook: prices from 2003, three telephone numbers and a list of names he does not know. But holding it he remembered the things his father did every morning. He would come in at ten past six and he would sweep the floor before anything else — the whole floor, every morning, and they had a boy who could have done it. He would put the kettle on, and then he would walk round both machines with his hand on them, and he would not speak to anybody until he had. Lubna asked why the hand on the machines, and Bassel said he asked his father once, at about twenty-two, and was told: because a bearing tells you a week before it goes, and it tells your hand and not your ear. He thought it was an old man being an old man — and he has had the older machine serviced twice this year, and both times the engineer found a bearing starting, and both times asked whether he had noticed any vibration, and both times he said no, because he does not touch them. Jad asked whether he sweeps the floor, and he said no: he pays the boy, which is what he decided at twenty-three when it became his shop, and he has never thought about it again until Tuesday — and he used to think the sweeping was about the floor. It was about being in the shop for twenty minutes with nobody talking to him before the work started: he would sweep, and he would look at everything while he swept, because you cannot sweep round a thing without seeing it. Then the grammar: not "there would be two machines" — _would_ is for repeated actions and not for states, so "there used to be two machines". And Bassel is going to do one of the three: from Monday he walks round both machines with his hand on them before he speaks to anybody, which takes four minutes and which his father did every morning for thirty-one years.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ There would be two machines. → ✓ There **used to** be two machines.   ✗ He would be a printer for thirty years. → ✓ He **used to be** a printer.   ✗ He would swept the floor. → ✓ would **sweep**.   ✗ He would to sweep. → ✓ no _to_ after _would_.   ✗ He used to sweep it yesterday. → ✓ He **swept** it yesterday.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Twenty minutes in the shop with nobody talking to him before the work started — and you cannot sweep round a thing without looking at it. He was walking the shop, and the broom was an excuse that nobody could argue with, including himself.'));
out.push(A('**2** He kept the hours — he comes in at ten past six as his father did — and he dropped all three habits in the same month, at twenty-three, when the shop became his and he wanted it run by him and not by a dead man.'));
out.push(A('**3** _You should have told me what the sweeping was for. I would have kept it._ And he thinks his father believed that a man who has to be told is not a man who will do it.'));
out.push(A('The pattern in the model that students should be made to notice: the month a habit is dropped is almost always the month somebody took over, and the reason is never about the habit. It is worth asking the room for their own dropped habits with the month attached, and counting how many months are months of promotion, inheritance or a move.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE THINGS ABU RASHID DID** · F. Kayyali · November',
  '**He would arrive twenty minutes early and read the fault book from the back.** Every morning, for the eleven years I worked under him. I thought for years that this was about being early.',
  '**He would check the water before the power.** I have no explanation for this one and I am writing it down because it is true.',
  '**He would never ask you a question in front of the others, and would not say a word about a fault until he had you on your own.** I asked once, when I was twenty-six, and was told that a man answers differently with three people listening.',
  '**What reading the book backwards was actually about.** The most recent fault first, before anybody could tell him their version of it. Being early was an excuse that nobody could argue with.',
  '**What I kept and what I dropped.** I kept the fault book and the water. I dropped the questions in private, and I dropped it the month I was given six people of my own.',
  '**What it has cost.** Two men have told me things in the third week that they knew in the first.',
  '**What I am doing from Monday.** The private questions, four minutes each. Not the early arrival, because I have children to take to school.',
  '**And the thing I would say to him.** You never said that the privacy was the point. I thought it was politeness.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**THREE THINGS HE DID EVERY MORNING** · B. Tahhan · November · put in the big drawer with his notebook',
  'I found my father\'s notebook on Tuesday, nineteen years after he died, in a drawer I have never emptied. There is nothing in it. This is what I remembered while I was holding it.',
  '**He would sweep the whole floor before he did anything else.** Every morning at about twenty past six, and we had a boy who could have done it and did it in the evenings. I thought for thirty years that this was about the floor.',
  '**He would put the kettle on and not drink the tea until half past seven.** I have no explanation for this one and I am writing it down because it is true and not because I understand it.',
  '**He would walk round both machines with his hand flat on them and would not speak to anybody until he had finished.** I asked him once, at twenty-two, and he said a bearing tells you a week before it goes, and it tells your hand and not your ear.',
  '**What the sweeping was actually about.** Twenty minutes in the shop with nobody talking to him before the work started — and you cannot sweep round a thing without looking at it. The broom was an excuse that nobody could argue with, including him.',
  '**What I kept and what I dropped.** I kept the hours. I dropped all three habits in the same month, at twenty-three, when the shop became mine and I wanted it run by me and not by a dead man.',
  '**What it has cost.** The engineer has found a bearing starting twice this year and has twice asked whether I noticed any vibration, and I said no both times, because I do not touch them.',
  '**What I am doing from Monday.** The machines. Four minutes, hand flat, before I speak to anybody.',
  '**And the thing I would say to him.** You should have told me what the sweeping was for. I would have kept it.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The sentence that will stay with me is that the broom was an excuse nobody could argue with, including him, because I have two of those and I had not seen them as excuses. I would cut the kettle paragraph to one line, since you say yourself that you cannot explain it and the page is strongest where it is exact. And my question is whether you will still be doing the four minutes in March, because you have written the start and not the thing that keeps it going."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the habits dropped in the month somebody took over. The line to give the class, because it stops the count being read as laziness: a habit inherited without a reason is dropped the moment the person doing it is in charge, and the reason was usually never said out loud. Then the instruction that comes out of it, which is the only homework that matters in this cycle: if the person is alive, ask them.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked my mother about the kettle. She said he had an ulcer in about 1986 and was told not to drink tea on an empty stomach, and that he kept the hour long after the ulcer had gone because by then it was the hour. So one of the three was medical advice from before I was born, carried on for twenty-five years after it stopped applying, and I have been treating it as a mystery about my father\'s character. She said it in about nine seconds and I have had thirty years to ask her.']));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  I am used to being the one they telephone'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second question is the cycle: _when did you stop noticing?_ Almost nobody can answer with a date, and a vague answer is the right answer — say so, because students treat the vagueness as a failure of memory when it is the finding.'));
out.push(A('**b** **1** _used to_   **2** _am used to_   **3** _used to_   **4** _is used_   **5** _used to_   **6** _are_. Items **1** and **2** are the pair to put side by side on the board: _I used to work nights_ (and I do not now) against _I am used to working nights_ (I do them, and they are normal).'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – she is used to being telephoned at night by the wards, and she says she should not be used to being the only one.'));
out.push(A('**b** **1** About March, and she cannot give a better one because there is no day: you are not used to a thing, and then at some point you are, and the day it happened is not available to you afterwards.   **2** That it describes a state that is comfortable, so the things we are used to are the things nobody ever reviews, because nobody complains about them, including us.'));
out.push(NOTE('This is the cycle that does the most work outside the classroom, and the sentence to put on the board is Yara\'s: _being used to something is how a thing stops being a question._ The useful question is therefore never _can you manage?_ — the answer is yes, because the person is used to it. It is **what are you used to that is not in anybody\'s job description?** Expect the room to produce a long list in about four minutes, and expect most of it to be unpaid, uncounted and never discussed. Treat it as a language task, not a grievance session: the work is in getting _am used to_ + **-ing** right while saying something that matters.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am used to starting at half past five, and it stopped being difficult some time in the first winter._',
  '**2** _I am used to the hour and a half each way, and I could not tell you when it became normal — the second year, perhaps._',
  '**3** _I am used to working in English on the telephone, which in January was the thing I was most frightened of in my job._',
  '**4** _I am used to being asked for figures at two hours\' notice, and I have stopped pointing out that they take a day to produce._',
  '**5** _I am used to a room at fourteen degrees in February, and the new people ask me about it every year, which is the only time I remember it is cold._',
]));
out.push(A('Item 5 contains the whole mechanism in one line: _which is the only time I remember it is cold._ A new person is the instrument that measures what the rest of us have stopped noticing — and that is also the reason 17.7 sends students to the oldest person and not to the newest.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I am used to being telephoned outside my hours.',
  '**B:** Were you used to it a year ago?',
  '**A:** No. I stopped noticing in about March, and I cannot be more exact than that.',
  '**B:** And is it in anybody\'s job?',
  '**A:** No. There are four of us in that laboratory and it is my telephone, every time, because I did a course. It is not in my job description and it is not in anybody\'s.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Between five and seven of the eight are in nobody\'s job. That is the finding of the cycle and it should be said in one sentence: **the work that is in nobody\'s job is done by the person who has got used to it.** Keep the count on the board for 17.4, where the same room will discover that the losses nobody wrote down are not counted as costs either.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I am used to being the only one on the ward who can change the pump settings, which about four people could do two years ago. I am used to being asked to stay twenty minutes past the handover, which I stopped noticing some time last spring. And I am used to translating the two English labels on the new boxes for everybody on the shift, which takes ten seconds and has happened about two hundred times._',
  '**b** _My partner says the pump settings are the one to write down, because the other two cost me time and that one costs the ward a person — and the person to write it to is the ward manager, who almost certainly thinks four people can still do it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara is used to being telephoned at night by the wards — a nurse rings the laboratory to ask whether a figure can be real, and somebody has to say either yes it can or no, run it again. She is used to being woken up, and she is used to doing it in English about twice a month, because two of the night doctors are not Arabic speakers, and in January that one fact frightened her more than anything else in her work. Omar asked when she stopped noticing, and she said about March, and that she cannot give a date and has thought about it for three days: there is no day. You are not used to a thing, and then at some point you are, and the day it happened is not available to you afterwards — which is why she is writing things down now, while they are still difficult. Then the sentence she did not expect to be able to say: being used to it is not the same as it being all right; it is only that she has stopped noticing. And the thing she says she should not be used to is that she is the only one. There are four people in that laboratory and she is the one who is telephoned, every time, because she did a course. It is not in her job and it is not in anybody\'s job, it is not paid and it is not counted and it is written nowhere — and she is used to it, which means that for seven months she has not asked one question about it. Ms Huda said that is the danger of the form and that it is not a grammar point: the things we are used to are the things nobody ever reviews, because nobody complains about them, including us. So the useful question is never can you manage — you can, you are used to it. It is: what are you used to that is not in anybody\'s job description? Nour said at TechCare that would be a long list, and Yara said hers is one line long and she is going to write it on Thursday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am used to work nights. → ✓ used to **working**.   ✗ I used to being telephoned. → ✓ I **am** used to being telephoned.   ✗ I am used to be asked. → ✓ used to **being** asked.   ✗ I was not use to it. → ✓ was not **used** to it.   ✗ Are you used to get up at five? → ✓ used to **getting** up.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She is not asking for anything; she is writing down a thing she had become so used to that she had stopped being able to see it, so that it is on paper rather than in her head.'));
out.push(A('**2** Because minding and saying nothing is a decision, and she had stopped noticing, which is not — and it is the only reason the note is seven months late.'));
out.push(A('**3** That the four of them appear on a list, in some order, and that the wards are given the list — and she says carefully that it is **not** a rota and **not** an obligation.'));
out.push(A('The move to teach from this model is the **pre-emptive disclaimer**: _I am not asking for anything in this note_, and later, _not a rota and not an obligation_. Naming what you are not asking for is what stops a small request being read as a large one, and it is the single most useful sentence-shape in the unit for adults who have to write upwards.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NOTE FOR THE WARD MANAGER · the pump settings** · R. Barakat · November',
  'I am not asking for anything in this note. I am writing down a thing I had stopped noticing.',
  '**What I am used to.** I am used to being the only person on nights who can change the pump settings — about four times a week. I am used to being telephoned at home about it on my nights off, which has happened five times since August.',
  '**When it became normal.** Some time last spring, as far as I can tell, and I cannot be more exact than that.',
  '**What is not written anywhere.** That two years ago four people could do it and now one can. Nobody decided that; three of the four left.',
  '**Why that matters more than the work does.** Because I manage, so nobody has looked at it, and I have not raised it for a year — not because I minded and said nothing, but because I had stopped noticing.',
  '**What I think should happen, and it is small.** That one more person on nights is shown it, once, by me, in about forty minutes. Not a training programme and not a competency sheet.',
  '**And one sentence for myself.** Write down what is difficult in November, because by the summer it will be invisible.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**NOTE FOR DR SHAABAN · the night calls** · Y. Mansour · 12 November',
  'I am not asking for anything in this note. I am writing down a thing that I have become so used to that I had stopped being able to see it, and I would rather it were on paper than in my head.',
  '**What I am used to.** I am used to being telephoned at night by Wards 2 and 4, about four times a month, to be asked whether a result can be real. I am used to being woken up, and I am used to answering about twice a month in English, because two of the night doctors are not Arabic speakers. In January I was not used to any of it.',
  '**When it became normal.** March, as far as I can tell, and I cannot be more exact, which is itself part of the point: nobody notices the day a difficult thing stops being difficult.',
  '**What is not written anywhere.** That I am the one who is telephoned. There are four of us. It is not in my job description, it is not in anybody\'s, it is not counted on any sheet and it has never been discussed.',
  '**Why that matters more than the calls do.** A thing somebody is used to is a thing nobody reviews, because there is no complaint attached to it. I have not raised this for seven months — not because I minded and said nothing, but because I had stopped noticing, which is worse.',
  '**What I think should happen, and it is small.** That the four of us appear on a list, in some order, and that the wards are given the list. Not a rota and not an obligation: a list, so that it is not my telephone by accident.',
  '**And one sentence for myself.** I am going to write down what is still difficult now, in November, while I can still see it.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The line that does the work is that a thing somebody is used to is a thing nobody reviews, and I am going to use it in a note of my own next week. I would put the number of calls in the first line rather than the second, because the reader will decide how seriously to take the note before they reach it. And my question is who gives the wards the list, because at the moment the note asks for a list to exist and not for anybody to hand it over."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts. First, how many notes are about work that is in nobody\'s job. Second, and the one to take home: how many of us could name the month it became normal? Almost nobody, and that is the argument for the homework — the only reliable moment to write a difficulty down is while it is still a difficulty.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**Three things that are difficult for me now, in November, which I expect to be used to by the summer.** **1** Reading a request in English when the sender has written it in a hurry and left the verbs out — about twenty minutes a week and I dread it. **2** Saying "I do not know, I will find out" to a doctor on the telephone instead of guessing; I have done it four times and it has cost me nothing and I still have to decide to do it. **3** Being the person the new technician asks, because I have been there eighteen months and she has been there three weeks, and I do not feel like somebody who should be asked. Dated 13 November. I will read this on 13 June.']));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  I am getting used to the fourth night not existing'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on the second half — _how far through are you?_ — because without it the sentence is indistinguishable from _I am used to_. Accept _three weeks in_, _about half_, _not at all yet_; reject _slowly_.'));
out.push(A('**b** **1** _used to_   **2** _am used to_   **3** _am getting used_   **4** _is_   **5** _will be_. Item **3** is the one to drill: the distance in the sentence — _three weeks in, and it is not normal yet_ — is what makes _getting_ the right form.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the committee extended the trial to the whole of nights from 27 October, so the blocks have changed; and she did not expect to miss the fifth night.'));
out.push(A('**b** **1** Because by the fifth night she knew the ward completely — she knew which child would be awake before they were awake — and all seven of her errors were on a fourth or a fifth night. The fifth night was both.   **2** That _am used to_ is a finished state you have stopped noticing, and _am getting used to_ is the middle of the road: still moving, still visible, still describable.'));
out.push(NOTE('The sentence that makes this cycle worth a lesson is Ms Huda\'s: **there is a window in which a change can be described, and it is open while you are getting used to the thing and it closes when you are.** Everything Rasha says in this dialogue could not have been said in February and will not be available to her in July. The practical consequence, and it is the homework of the whole unit: the page about a change is written in the third week. A class that takes nothing else from Unit 17 should take this.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I am getting used to starting at six instead of eight. Three weeks in, and the only part that is normal is the alarm._',
  '**2** _I am getting used to the new building. Two months, and I still go to the old floor about once a week._',
  '**3** _I am getting used to the stores system. It took me about ten days to stop writing the half-sheet out first, and I am not used to trusting it yet._',
  '**4** _I am getting used to a manager who asks for things in writing. Four months in, and I have stopped being offended by it, which took three._',
  '**5** _I am getting used to not driving. Five weeks, and the mornings are normal and the evenings are not, and I did not expect the difference._',
]));
out.push(A('Item 5 is the one to read out, because it contains the shape the cycle wants: **one half normal, the other half not, and the asymmetry noticed.** A change is almost never becoming normal at one rate, and a student who can say which half has moved is doing something more exact than most professional writing about change.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** I am getting used to the three-night blocks. Three weeks in.',
  '**B:** Is any of it normal yet?',
  '**A:** One thing. I am used to waking up at four in the afternoon, and that took eleven days. The rest is still moving.',
  '**B:** And what have you lost that was not on your list?',
  '**A:** The fifth night. By the fifth night I knew that ward completely, and I had not costed that at all, because it was not on my sheet.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Most of the eight will not have thought of the loss before being asked, and that is the finding: **a thing that was never on a list is never counted as lost.** It is the same mechanism as 17.3 one step on — there, work nobody wrote down is not reviewed; here, a cost nobody wrote down is not counted, including by the person paying it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I am getting used to the ministry order. Two months. What is normal: the Thursday proof, which took about three weeks. What is not: having three of the fourteen men on one job and the rest looking at me when a private order comes in, and having to say no to people I have said yes to for nineteen years. What I have lost, and it was on nobody\'s list: the half-hour at the end of a Thursday when the shop was quiet and anybody could come and talk to me._',
  '**b** _My partner says the half-hour does not change my conclusion, and he is right: the ministry work is three times the money and it pays four wages. But he also says the half-hour was where I heard everything, and that I should put it somewhere else on purpose rather than wait for it to come back, because it will not._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The committee extended Rasha\'s trial to the whole of nights from the twenty-seventh of October, which Nour predicted in September to the week, so she is three weeks into the thing she asked for. She is getting used to it — getting used to, not used to, and she wanted the class to hear the difference, because in April she would have said those were the same words. She is getting used to sleeping at a different time, to having two days off in the middle of the week, which is useless for everything except sleeping, and to the fourth night not existing. One thing is normal: she is used to waking at four in the afternoon, and that took eleven days. Everything else is still being got used to and she is counting, because in nine months she will not remember any of it. Then the sentence she said she did not want to say: she misses the fifth night. She put a trial in writing to get rid of the fourth and fifth nights, she has the figures, the figures are right — seven errors in 118 shifts and every one on a fourth or a fifth — and she misses the fifth night, because by the fifth night she knew that ward completely: she knew which child would be awake before they were awake. On a first night she is competent; on a fifth night she was something else, and the something else is what she has given up, and she had not costed it because it was not on her sheet. Her sheet had errors on it and it did not have that. Lubna asked whether it goes in the report, and it is the second thing in it, because she is not having anybody find it later and tell her she hid it — and it does not change the conclusion: an error on a drug chart at four in the morning is not paid for by knowing the ward well. Ms Huda said the grammar in that is the whole cycle: there is a window in which a change can be described, and it is open while you are getting used to the thing and it closes when you are.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am getting used to finish early. → ✓ used to **finishing**.   ✗ I got used to work nights _(meaning: I worked nights and do not now)_ → ✓ I **used to** work nights.   ✗ It takes a month to get used to sleep in the day. → ✓ to get used to **sleeping**.   ✗ I am getting used of it. → ✓ used **to** it.   ✗ I am getting use to it. → ✓ getting **used** to it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because by January she will be used to it, and then the eleven days and the four strange things will be gone — the page can only be written while the change is still visible.'));
out.push(A('**2** She misses the fifth night, because by the fifth night she knew the ward completely. It changes nothing because an error on a drug chart at four in the morning is not paid for by her knowing the ward well — both sentences are true and the first does not survive the second.'));
out.push(A('**3** Write their own version of the page in their third week — and **not** in their ninth month, because they will write something calm and useless.'));
out.push(A('The sentence to teach as a form, because it is transferable to any argument an adult has to make honestly: _both of those sentences are true and the first one does not survive the second._ It lets a writer concede a real cost without losing the conclusion, which is the thing students believe is impossible and the reason they leave costs out.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO MONTHS IN — FOR WHOEVER TAKES THE MINISTRY ORDER NEXT** · B. Tahhan · November',
  'The order started on 1 September. I am writing this in the ninth week, while I can still see it, because by the spring I will be used to it.',
  '**What is already normal, and how long it took.** The Thursday proof: about three weeks. That is one out of four.',
  '**What is still becoming normal.** Having three of the fourteen men on one job. Saying no to private customers I have said yes to for nineteen years. And the counting — eleven conditions, every sheet, every week — which sounds like nothing and is the strangest of the three, because for nineteen years nobody counted anything in that shop but me and the money.',
  '**What I did not expect, and it is a loss.** The half-hour at the end of a Thursday when the shop was quiet and anybody could come and talk to me. It has gone, and it was on nobody\'s list including mine.',
  '**Why the loss does not change anything.** Because the order is three times the money and it pays four wages. Both of those sentences are true and the first does not survive the second.',
  '**What I would tell you if you are reading this in March.** Put the half-hour somewhere else on purpose. It will not come back on its own.',
  '**And the date I read this again.** 1 March, six months in.',
]));
out.push(S('Stage 7 · Write freely (sample, 179 words)'));
out.push(SAMPLE([
  '**THREE WEEKS IN — FOR WHOEVER IS ON NIGHTS IN JANUARY** · R. Barakat · 17 November',
  'The blocks changed on 27 October. I am writing this in the third week, while I can still see it, because by January I will be used to it and then this page will be impossible to write.',
  '**What is already normal, and how long it took.** Waking at four in the afternoon: eleven days. That is the only one. One out of five, in three weeks.',
  '**What is still becoming normal.** Sleeping at a different time. Two days off in the middle of the week, which are useless for everything except sleeping. Eating at hours that no shop agrees with. And the fourth night not existing, which sounds like nothing and is the strangest of the four, because for nine years the week had a shape and now it does not.',
  '**What I did not expect, and it is a loss.** I miss the fifth night. By the fifth night I knew the ward completely — which child would be awake before they were awake. On a first night I am competent; on a fifth night I was something else. I asked for the end of the fifth night, I was right to, and I have lost that, and it was on nobody\'s sheet including mine.',
  '**Why the loss does not change anything.** Because an error on a drug chart at four in the morning is not paid for by my knowing the ward well. The seven errors were all on a fourth or a fifth night. Both of those sentences are true and the first does not survive the second.',
  '**What I would tell you if you are reading this in January.** Write your own version of this page in your third week. Do not write it in your ninth month: you will write something calm and useless.',
  '**And the date I read this again.** 27 April, six months in, with the figures beside it.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"What works is the fraction — one out of five in three weeks — because it stops the page being either a complaint or a boast and makes it a measurement. I would say what you did on the fourth and fifth nights that made you competent, because the reader in January will want to know what to build and at the moment they only know what you miss. And my question is whether the two days off in the middle of the week are really useless or whether you have not found a use for them yet, which is a different sentence and would change what you write in April."**'));
out.push(S('Stage 7R · Share'));
out.push(A('The count: how many of the losses were on somebody\'s list before today? Almost none. Then the sentence that closes the cycle, and it is the bridge to the whole second half of the unit — a thing that was never written down is never counted as a cost, which is how a change that is correct on paper still takes something from the person who asked for it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked Sister Nasr what she remembers of her first three weeks on the five-night pattern in 2012. She remembered two things: that she cried in a sluice room in the second week, and that her mother made her a flask. Nothing else — not how long anything took, not what was strange, not what she lost. Fourteen years, and three weeks of it is a flask and a sluice room. She said: "you do not keep any of it." That is the argument for the page, and she asked me for a copy of mine.']));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  It used to be done in a car park'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and run it as four columns on the board — _used to_, _would_, _am used to_, _am getting used to_ — about one thing per student. Students who cannot fill the fourth column usually have a change that finished long ago; ask them for something from this year.'));
out.push(A('**b** **1** _used to_   **2** _would_   **3** _am used_   **4** _am getting used_   **5** _used_. Item **5** is the trap: _it used to take four hours_ is the past, and students reach for _is used to_ because the sentence is about now as well.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – two days a month in writing for a year; and it has cost him the thing that made the old way work, which was that nobody could be wrong in front of anybody.'));
out.push(A('**b** **1** He would get there twenty minutes early and write the three mistakes he had heard on the back of a call sheet (so that the session was about the person and not the product); he would take two of them in the car to the next town and do it while driving (because a person who is driving says things they will not say across a table); and he would never write a word in front of them (so that nobody was being recorded, because a man who is being recorded stops saying _I do not understand_).   **2** That writing a practice down makes it survive you **and** changes it — those are the same outcome, not two — so write down what the old version was **for** in the same week.'));
out.push(NOTE('The transferable instruction in this cycle is the one Fares ends on, and it is worth giving to the room as a rule: **whenever something informal is formalised, ask the person who used to do it informally what their habits were for, in the same week.** The purposes are never in the new document, and they go first. Fares did not know his own method was a method until somebody made him describe it in _would_ — which is the second reason the form in 17.2 matters, and the argument for doing 17.2 before this cycle rather than after it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Records used to be kept on a card in the drawer. Whoever was on would write the time in pencil and initial it. I am used to the system now. I am getting used to trusting what is in it, and I am not there yet._',
  '**2** _Training used to be done by whoever had been there longest. He would take you round on a Saturday morning and he would show you the three machines that break. I am used to the induction week now. I am getting used to the fact that nobody shows anybody the three machines that break._',
  '**3** _Handovers used to be spoken. The night sister would walk the ward with you and she would stop at the four beds that mattered. I am used to the printed sheet. I am getting used to reading it in the car park before I go in, because there is no time once you are inside._',
  '**4** _Parts used to be ordered by telephone. Abu Samir would ring and he would ask for the man by name. I am used to the portal. I am getting used to not knowing who, if anybody, is at the other end of it._',
  '**5** _You used to ask the head of department at his door. He would be there between four and half past, every day, and he would not keep anybody waiting. I am used to the booking form. I am getting used to asking a question three weeks before I need the answer._',
]));
out.push(A('Every one of these five has the same shape, and the class should be made to see it: the new arrangement does the **first** purpose better and does not do the **second** purpose at all. Items 2 and 5 are the ones to read aloud, because in both the second purpose was the whole value and nobody who wrote the new arrangement knew it existed.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** It used to be done in car parks, after the last call of the day.',
  '**B:** What would you do, every time?',
  '**A:** I would get there twenty minutes early and write the three mistakes I had heard on the back of a call sheet — because that way the session was about the person and not the product. And I would never write a word in front of them, because a man who is being recorded stops saying _I do not understand_.',
  '**B:** And now?',
  '**A:** I am used to being expected, which took three weeks. I am getting used to preparing, which I am not good at yet.',
  '**B:** What has the new way lost?',
  '**A:** Two of the six have stopped asking questions, and they are the two who asked most in the car park. There is a register at the door.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In most of the eight, what was lost **was the reason the old way worked**. The sentence to give the class: a new arrangement is written from what the old one **did** and never from what it was **for**, because the first is visible to anybody and the second is in one person\'s head. That is the whole argument for 17.7.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Handing over at the end of a shift used to be spoken. The night sister would walk the ward with you and she would stop at the four beds that mattered and say nothing at the other twenty-six — that was so that you knew where to look first, and it was also so that she could see your face when she told you. Now it is a printed sheet, which is better in every way I can list: it exists, it is legible, and it goes in the notes. I am used to it. I am getting used to reading it in the car park before I go in, because there is no time once you are inside._',
  '**b** _What is lost is the four beds. The sheet has twenty-six entries of equal weight and no order of looking, and you cannot see anybody\'s face on a sheet. The small thing that would bring it back is three names written at the top by hand, which the sister who hands over could do in forty seconds, and I am going to ask for that._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fares has had two of his days now, September and October, with November next week, so he can say something about the thing he spent a year asking for. It used to be done in a car park: six representatives over four years, after the last call of the day, between about half past five and seven — not anybody\'s job, not paid, not asked for and not recorded, and if he had been run over nobody at that company would have known the training existed. Omar asked what he actually did, and there were three things, every time. He would get there twenty minutes early and write the three mistakes he had heard that person make on the back of a call sheet. He would take two of them in his car to the next town and do it while he drove, because a person who is driving will say things they will not say across a table. And he would never write a word in front of them, for four years, because the moment you write it is a record and a man who is being recorded stops saying I do not understand — which he said was the whole method, and he did not know it was a method until last month. Now it is two days a month in writing for a year, in a room with a door, with a list of names chosen by somebody who is not him. He is used to being expected, which took about three weeks, and he is getting used to preparing, which he is not good at yet. And the cost: there is a register at the door, attendance is signed, and two of the six have stopped asking questions — not all six, two, and they are the two who asked the most in the car park. He has got the thing he asked for and lost the only feature of the old thing that made it work, which was that nobody could be wrong in front of anybody. He thinks he can get it back and it is small: the last forty minutes with the door shut and nothing written, asked for in writing — which is Tareq\'s sentence from 17.1 arrived at from the other direction. Ms Huda said that writing a practice down makes it survive you and changes it, so write down what the old version was **for** in the same week: that is never in the new document, and it goes first.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It used to be do in a car park. → ✓ used to be **done**.   ✗ I am used to be expected. → ✓ used to **being** expected.   ✗ I would be a representative for four years. → ✓ I **was** / I **used to be**.   ✗ I am getting used to prepare. → ✓ used to **preparing**.   ✗ We would used to go on Fridays. → ✓ **would go** / **used to go**, never both.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the four years before September are the part that is not written anywhere, and he is the only person who has it.'));
out.push(A('**2** The early arrival was so that the session was about the person and not the product; the car was because a driver says things they will not say across a table — and that is the one he says he cannot explain beyond its being true every time; the never writing was so that nobody was being recorded.'));
out.push(A('**3** The last forty minutes of each day with the door shut and nothing written down. It is the hardest kind of request to think of because it is a request for something that used to happen, and a person looking at a new arrangement does not look backwards for what to ask for.'));
out.push(A('Two things in this model repay being pointed at. The **precise cost** — _two of the six, and they are the two who asked most_ — because "morale has suffered" cannot be acted on and two named people and a register at a door can. And the **unexplained purpose**, kept and labelled: a page that supplies a reason for everything has invented at least one.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**HOW IT USED TO BE DONE, AND WHAT THAT WAS FOR** · R. Barakat · November',
  'Most of this is about the nine years before the printed sheet, because that is the part that is not written anywhere.',
  '**How it used to be done.** Handover was spoken. The night sister walked the ward with you at twenty to eight. It was not timed and it was not recorded.',
  '**The things we would do, every time, and what each was for.** She would stop at four beds and say nothing at the other twenty-six: that was so that you knew where to look first. She would walk and not sit: that was because a ward tells you things you cannot be told. And she would never hand over to more than one person: that was so that she could see one face and know whether it had understood.',
  '**What is already normal now.** The printed sheet. It exists, it is legible and it goes in the notes, and that took about a month.',
  '**What I am still getting used to.** Reading it in the car park before I go in, because there is no time once you are inside.',
  '**What the new arrangement has cost, precisely.** The order of looking. Twenty-six entries of equal weight and no first bed, and in October two late findings on beds that would have been in the four.',
  '**What I am asking for, and it is small.** Three names written at the top of the sheet by hand, by whoever hands over. Forty seconds.',
  '**And the general point.** Ask the person who did the old thing what their habits were for, in the week you write the new form.',
]));
out.push(S('Stage 7 · Write freely (sample, 181 words)'));
out.push(SAMPLE([
  '**HOW IT USED TO BE DONE, AND WHAT THAT WAS FOR** · F. Kayyali · after the October day',
  'You asked me in September to send a note after two months. This is it, and most of it is about the four years before September, because that is the part that is not written anywhere and I am the only person who has it.',
  '**How it used to be done.** In car parks. Six representatives over four years, after the last call of the day, roughly half past five to seven. It was not anybody\'s job, it was not paid, it was not asked for, and it was not recorded anywhere at all.',
  '**The three things I would do, every time, and what each was for.** I would arrive twenty minutes early and write down, on the back of a call sheet, the three mistakes I had heard that person make that week: that was so that the session was about them and not about the product. I would take two of them in the car to the next town and do it while driving: that was because a person who is driving says things they will not say across a table, and I have no better explanation than that it is true every time. And I would never write a word in front of them: that was so that nobody was being recorded, because a man who is being recorded stops saying _I do not understand_.',
  '**What is already normal now.** Being expected. A room, a door and a list of names I did not choose. That took about three weeks and I would not go back.',
  '**What I am still getting used to.** Preparing properly. For four years my preparation was twenty minutes in a car park with a call sheet, so I am learning a skill at thirty-four that I thought I already had.',
  '**What the new arrangement has cost, precisely.** Two of the six have stopped asking questions since September. Not all six — two, and they are the two who asked most in the car park. The register at the door is the only thing that has changed for them.',
  '**What I am asking for, and it is small.** The last forty minutes of each day with the door shut and nothing written down, not minuted and not reported. I am asking for a thing that used to happen, which is the easiest kind of request to grant and the hardest kind to think of.',
  '**And the general point, which is not about me.** When a practice is written down it survives the person who invented it and it changes: those are the same event.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The line that will change what I write at work is that the purposes are never in the new document and they go first, because I wrote a new form in June and asked nobody anything. I would name the two representatives privately rather than in the note, because the note is going to a manager and two men who have stopped asking questions can be identified from it. And my question is what you will do if you are given the forty minutes and the two of them still do not ask, because the register may not be the reason."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Almost every page in the room will describe a change that was an improvement **and** lost something, and in almost every case the lost thing is a reason nobody wrote down. Say the conclusion out loud, because it is the set-up for 17.7: the only place those reasons exist is in the memory of whoever was there, so the next cycle goes and finds that person.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked the sister who handed over to me for nine years why she stopped at four beds and not at all of them. She said: "because you cannot remember twenty-six and I needed you to remember four." Then she said the thing I did not expect — that she chose the four on the way to work, in her head, on the bus, and that it took her about ten minutes and it was the most useful ten minutes of her day. Nobody has ever written that down and nobody has asked her since she left. She is sixty-one.']));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  Then, now, and the turn in between'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and it needs the 3.6 pages physically present. Remind the class a week before. A student without theirs can still do the cycle from memory of the day they named, but the comparison between what they wrote in March and what they think now is the whole exercise, and it cannot be reconstructed.'));
out.push(A('**b** **1** _Until_   **2** _By_   **3** _From_   **4** _These_   **5** _then_. These five markers carry the cycle: _until_ opens the **then**, _by then_ places a point inside it, _from then on_ opens the **now**, _these days_ describes it, and _it was around then that_ is the only honest way to date a turn.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – she would have named 11 April, the day she used the projector alone; she now says the turn was a day in September.'));
out.push(A('**b** **1** A young woman of twenty-four in her second week came to her door and asked why the attendance sheet is taken twice on a Tuesday, and Umm Kinan told her in forty seconds a thing she had known for nineteen years. It is the real turn because of what she did after the young woman left: until then she used to think she had nothing anybody needed, and from then on she has known she is the oldest person in that building and that four things are in her head and in nobody else\'s.   **2** That there are two kinds of change — a thing you did, which has a date, and a thing you stopped believing about yourself, which has none — and that the turn is always in the second kind.'));
out.push(NOTE('Yara\'s distinction is the content of the cycle and it should be written on the board before anybody writes: **a thing you did has a date; a thing you stopped believing about yourself has none, and the turn is always the second kind.** This is why 3.6 produced a date and 17.6 produces a month with an argument attached. Expect several students to change their minds about their own turn during Stage 4, and treat that as the success of the cycle rather than a problem with their earlier page: the 3.6 page is not wrong, it is the evidence that the turn was somewhere else.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Until last year I used to think I could not speak to a stranger in English. These days I do it on the telephone about twice a month. It was around the spring that it stopped being a decision._',
  '**2** _Until February I never asked anybody for anything. These days I ask about once a week. It was around February that I understood that the asking was never the problem._',
  '**3** _Until this summer I would copy every form twice and keep one at home. These days I keep nothing at home. It was around July that I stopped expecting to be blamed for something I could not produce._',
  '**4** _Until last autumn I used to leave the room when the area manager came. These days I stay and I ask him one question. It was around October — I cannot be nearer than the month._',
  '**5** _Until this year I used to refuse any job with a report at the end of it. These days I take them. It was around the week I read a report that somebody else had written badly, and realised what the standard actually was._',
]));
out.push(A('Item 5 is the one to read out, because the turn is not an achievement and not an encouragement: it is reading somebody else\'s bad work. Students reach for inspirational turns, and the honest ones are nearly always small, unflattering and specific.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Until last year I used to think I had nothing that anybody needed.',
  '**B:** And these days?',
  '**A:** These days I am asked. Three times since October, and once by the deputy head.',
  '**B:** When was the turn?',
  '**A:** It was around September. Not the day in April I would have told you about in the spring.',
  '**B:** What did you do after it?',
  '**A:** I wrote down the four things that are in my head and in nobody else\'s, and I put a question mark on one of them.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The second kind outnumbers the first, usually by about six to two. The point to make is not that dated turning points are wrong but that they are **available**: a thing you did is easy to remember and easy to say, so it is what gets written down, and the change that mattered is the one with no date, which is why it needs an argument and evidence instead.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _In 3.6 I wrote about the Thursday in April when I telephoned a supplier in Aleppo and spoke English for nine minutes, having written in the January that I never would. I would still say that was the hardest thing I did all year, and it is not the turn. The turn was in May, when a man on the forum thanked me for an answer and then asked me a second question — not about the first answer, a new one — and I realised he had come back on purpose. Until then I used to think I was answering into a void and that nobody knew which answers were mine._',
  '**b** _My partner chose the telephone call, because she says nine minutes of speaking is a bigger thing than a second question from a stranger. I do not agree, and the reason is the evidence: after the call I did nothing, and after the second question I started keeping the answers I had written. One of those is a turn and the other is a day._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Umm Kinan read her 3.6 first sentence — "I had never used a projector on my own before the eleventh of April" — and the eleven minutes for one triangle that she is still slightly ashamed of. Then she said that the eleventh of April is not the turn, and that she has been wrong about it for seven months: it was a thing she did, and it is not where anything turned. There were two candidates. The first is August, when she asked a colleague for forty minutes after four months of not asking and was told yes in about nine seconds — the day she learned that the asking was never the difficult part; the not asking was. The second is September, when a young woman of twenty-four in her second week asked her why the attendance sheet is taken twice on a Tuesday. It takes forty seconds to tell and she has known it for nineteen years: two registers in 2007 because of the afternoon shift, the shift gone in 2011, the second register left behind, and the reason it stayed a woman called Mrs Hajjar who is dead — and she is the only person in that building who knows any of it. Jad asked why that is the turn and not August, and she said because of what she did after the young woman left: for twenty-four years she has been a person who is not asked, and she had decided somewhere that this was about her. Until September she used to think she had nothing anybody needed; from then on she has known that she is the oldest person in that building and that four things are in her head and in nobody else\'s. She has written three of the four down; the fourth has a question mark on it, because she does not know whether it is true or whether she has believed it since 2009 because somebody said it once, and on Thursday she asks the caretaker, who is the only person older than her. And Yara said the thing worth taking home: there are two kinds of change — a thing you did, which has a date, and a thing you stopped believing about yourself, which has none; and the turn is always in the second kind.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Until last year I am the person who did not ask. → ✓ I **was**.   ✗ From then I have known. → ✓ From then **on**.   ✗ These days I was used to it. → ✓ These days I **am** used to it.   ✗ By then I have done it eleven times. → ✓ By then I **had** done it.   ✗ It was around September when… → ✓ It was around September **that**…'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She is asked (three times since October, once by the deputy head) and she is used to the asking; what is still moving is the other half — being the person who gives the answer and is therefore responsible for it being right.'));
out.push(A('**2** August only taught her about asking; September taught her that she is the oldest person in the building — _those are different sizes of fact_.'));
out.push(A('**3** The evidence is that she wrote down the four things that are in her head and in nobody else\'s. The fourth she wrote with a question mark, because she does not know whether it is true or whether she has believed it since 2009 because somebody said it once — and she is going to ask the caretaker on Thursday.'));
out.push(A('The last paragraph of the model is the one to read twice, because it generalises without inflating: _a person who is not asked anything for twenty-four years will conclude that they have nothing, and they will be wrong, and nobody will ever correct them — because the correction only arrives when somebody knocks._ There is at least one person in every classroom to whom this applies and who has never heard it said.'));
out.push(NOTE('How to run the 3.6 comparison without it going soft. The question is not _how far have you come?_ but **_is the day you named still the day?_** — and it is answered with evidence, not feeling: what the student **did** in the week after each candidate. Umm Kinan\'s April produced nothing; her September produced a written list of four things and a question mark. Hold the class to that test and the cycle stays a piece of exact writing; drop it and eleven students write eleven paragraphs of encouragement. The one sentence to keep insisting on is _those are different sizes of fact_.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THEN, NOW, AND THE TURN** · J. Attar · November',
  '**Then.** Until the spring I was the person who answered into a void. About nine hundred answers at one in the morning. I would never put anything but the answer — no name, no greeting, nothing that said a person had written it. And I used to think that nobody knew which answers were mine and that it did not matter.',
  '**Now.** These days I keep what I write. I am used to being answered as somebody worth answering. I am getting used to being asked a second question, which is a different thing and still surprises me.',
  '**The turn, and it was not the day I would have named.** In March I wrote that it was the Thursday I telephoned Aleppo and spoke for nine minutes. That was a thing I did. The turn was around May, when a man came back with a second question that was not about the first answer.',
  '**Why I am sure it was that and not the telephone call.** The call only taught me that I could. The second question taught me that somebody had decided to come back. Those are different sizes of fact.',
  '**What I did after it, which is the evidence.** I started keeping my own answers in a file, by date, which I had never done in nine hundred answers.',
  '**What I am going to do next.** Put my age back in one answer and see what happens. Thursday.',
  '**And the sentence I did not have in March.** You cannot tell whether anybody is reading you until one of them comes back, and before that you will assume nobody is.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**THEN, NOW, AND THE TURN** · S. Dibo · November · clipped to the page from March',
  '**Then.** Until about a year ago I was the person who did not ask. Twenty-four years in that school and I had asked a colleague for help, properly, perhaps four times. I would read a manual at home at ten at night rather than ask the man with the same projector in the next room. And I used to think — and this is the sentence the whole page is about — that I had nothing that anybody needed.',
  '**Now.** These days I am asked. Twice in October and once in the first week of November, and once by the deputy head, which I did not expect at all. I am used to the asking. I am getting used to the other half of it, which is being the person who gives the answer and is therefore responsible for it being right.',
  '**The turn, and it was not the day I would have named.** In March I wrote that the turn was the eleventh of April — the day I used the projector alone, eleven minutes for one triangle. That was a thing I did. The turn was September, approximately, when a young woman in her second week came to my door and asked why the attendance sheet is taken twice on a Tuesday, and I told her in forty seconds a thing I have known for nineteen years and had never once said aloud.',
  '**Why I am sure it was that and not August.** August was the day I asked and was told yes in nine seconds, and that only taught me about asking. September taught me that I am the oldest person in the building. Those are different sizes of fact.',
  '**What I did after she left, which is the evidence.** I wrote down the four things that are in my head and in nobody else\'s, and put a question mark on the fourth.',
  '**What I am going to do about the question mark.** Ask the caretaker, twenty-nine years, the only person older than me. Thursday.',
  '**And the sentence I did not have in March.** A person who is not asked anything for twenty-four years will conclude that they have nothing, and nobody will ever correct them — because the correction only arrives when somebody knocks.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"Reading this as the person you were in March, the thing that would have been hardest to believe is that somebody would knock on your door, because in March you were writing about a projector and not about anybody coming to you. I would move "those are different sizes of fact" to the end of the page, because it is the strongest sentence you have and it is sitting in the middle. And my question is what you will write down if the caretaker says the fourth thing is true, because you have planned for one answer only."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts: how many named a day in Unit 3 that they would not name now, and how many of the real turns are things somebody stopped believing about themselves. Both counts come out high, and the conclusion to give the class is procedural rather than emotional — this page had to be written **twice**, once in March with a date on it and once in November with a month and an argument, and the second could not have been written without the first.'));
out.push(S('Homework (sample)'));
out.push(A('The page, clipped to the 3.6 page — and the second half of the homework is the material for 17.7, so check it: the thing that used to be done differently, **and a named person** with the number of years and the answer to _has anybody ever asked them anything?_ In a first run the answer to that last question is no in nine cases out of eleven, and the class should be told the count before Stage 1 of 17.7.'));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: How it used to be done here'));
out.push(S('Stage 1 · Unit 17 quiz – corrections'));
out.push(A('**1** I am used to **working** nights.   **2** **I am used to being** telephoned at two in the morning.   **3** She is getting used to **finishing** on the third night.   **4** He **used to be** a driver for nine years _(would cannot carry a state)_.   **5** It **used** to be done in a car park.   **6** From then **on** I have known why.'));
out.push(A('Items **1**, **3** and **4** are the three that survive into Unit 24 if they are not named: ⚠ the infinitive after _be/get used to_, and ⚠ _would_ used for a state.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Reading it back changed three lines and added two names: the clerk came out for the tin on a **Tuesday**, not a Thursday (he was definite, because Tuesday was the day the clerk came out anyway for the fuel book); the gateman had a name, **Abu Nazih**, 2004–2020; and the purpose Tareq had was only half — the sheets were collected at the bus so that a driver did not have to walk to the office **and also** so that no sheet was ever carried home, which used to happen before 2004. The third correction is the one that matters: the new rule was never meant to last a month, because **nobody ever said how long — it was never a decision**. Ms Huda: a reconstruction is evidence when the person who was there has read it back and corrected it, and the **corrections are worth more than the sheet**, because a correction is the only part nobody could have invented.'));
out.push(A('Umm Kinan\'s half of the dialogue is the other outcome and should not be skipped. Her fourth item, the one with the question mark, was **false**: the hall is not closed after four because of the roof and never has been — the key used to be held by a man who left at four, there has been a second key in the office since 2016, and nobody has taken it off the hook. She has repeated the roof about two hundred times since 2009 because one person said it once, and the sheet caught it because the sheet has a line for _what it was for_ that she could not fill in without asking somebody.'));
out.push(S('Language box – explaining how something used to be done'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Six moves: **the practice in one sentence** with _used to_ and the passive · **the repeated detail** with _would_ · **the line that is never filled in — _what it was for_ — and expect two purposes** · **separate a rule that was agreed from a rule that was never cancelled** · **read it back and let them correct you** · and **be ready for the answer to be _that was never the reason_**.'));
out.push(A('The second purpose is the move that transfers to every trade in the room. The first purpose is the convenient one anybody can guess; the second is usually about risk, or about somebody who was once blamed, and it is the one that wins arguments — because it is the purpose an organisation still cares about and has forgotten it had.'));
out.push(S('Stage 3 · Practise (sample – Practice A, the paper handover book)'));
out.push(SAMPLE([
  'The paper handover book was kept on the ward desk until 2021. Each nurse would write three lines at the end of a shift — never more than three, because the book had three ruled lines per entry and nobody ever used the margin.',
  'The purpose given at the time was a record. The second purpose, which came out later, is that the **night staff read the day\'s** — you came in at twenty to eight and read the three lines before anybody spoke to you, and that was the only quiet information in the shift.',
  'It changed when the system went electronic, and it **was** a decision: it was minuted, and the minute says the paper book was duplicating the system.',
  'Which half would win an argument today: the second. Nobody is going to reopen a minuted decision about duplication, and nobody has ever claimed the system gives a nurse three lines to read before anybody speaks to her.',
  '**Our two decisions, in two minutes.** We would restore half of it: three lines, on paper, read-only, at the start of a shift — printed off the system, not written again. We did not agree about who prints it: I say the outgoing shift, my partner says the incoming, and his reason is better than mine, which is that the person who prints it reads it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The pairs who choose _restore half of it_ nearly always build on the **second** purpose, and the reason is worth stating: the first purpose has usually been replaced by something that does it better, and the second has been replaced by nothing at all. That is the finding of the whole unit in one sentence, and it is the test to give students for any change they are asked to accept at work.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own practice and their own person, through the eight lines of the sheet. The three questions are the assessment: _what was the second purpose?_, _was it ever a decision?_ and _have you read it back to them?_ The third is the one that will usually be answered no, and it is the homework.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Tareq filled in the sheet on the fourth of November from what Abu Khaldoun told him, and then took it back on the eleventh and read it to him line by line. He corrected three lines and added two names. The clerk came out for the tin on a Tuesday and not a Thursday, and he was definite, because Tuesday was the day the clerk came out anyway for the fuel book. The man on the gate had a name — Abu Nazih — and he was there from 2004 to 2020. And the reason Tareq had was only half of it: the sheets were collected at the bus so that a driver did not have to walk to the office, which is what Tareq wanted, and also so that no sheet was ever carried home, which used to happen before 2004 — the half he says he would never have guessed, and the half that is now the whole letter, because he is no longer asking for a convenience but for the arrangement that stopped sheets leaving the premises. The third correction is the one that matters most: he had written that the new rule was meant to last about a month, and Abu Khaldoun said nobody ever said how long, because it was never a decision — somebody did a thing in a bad week in 2019 and nobody has looked at it since. There is a difference between a rule that was agreed and a rule that was never cancelled, and Tareq has spent two months writing to the second kind as though it were the first. Then Umm Kinan: she had four things in her head, wrote them down, and the fourth had a question mark on it, so she asked the caretaker — twenty-nine years — and he answered in one sentence, and the answer was no. The hall is not closed after four because of the roof and never has been: the key used to be held by a man who left at four, there has been a second key in the office since 2016, and nobody has taken it off the hook. She has told nine years of students the roof, about two hundred times, because one person said it once in 2009 — and the sheet caught it, because the sheet has a line for what it was for and she could not fill it in without asking somebody. Ms Huda said a reconstruction is not evidence because you wrote it down; it is evidence when the person who was there has read it back and corrected it, and the corrections are worth more than the sheet, because a correction is the only part nobody could have invented.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 1'));
out.push(A('**1** A   **2** C   **3** B   **4** C   **5** A'));
out.push(A('_Notes:_ **1** the notice says sheets **are now handed in at the office window**, so the place has changed and they are still handed in. **2** _it replaces the old pattern completely_ rules out A and B. **3** the key sentence is _the 16.00 notice on this door is out of date_. **4** _not minuted and not reported_ of **the last forty minutes** only — A overstates it and C contradicts the first line. **5** _which stopped in 2007, starts again on Monday_ — the opening time is explicitly **unchanged**.'));
out.push(NOTE('Reading Part 1 is five short texts with three options each, and it is lost on speed rather than on vocabulary. Two habits worth the five minutes: find the **one word that limits the sentence** — _now_, _completely_, _out of date_, _the last forty minutes_, _unchanged_ — because the correct option is nearly always the one that respects it and the distractors are the ones that ignore it. And beware the option that is **true of the world but not said in the text**: in item 4, "everything is recorded" is what the reader expects of a training day and not what the notice says.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**HOW THE CHECK SHEETS USED TO BE COLLECTED** · T. Ayoub · 12 November',
  '**The practice.** Until the spring of 2019, the daily check sheets used to be collected at the buses at the end of the day.',
  '**The detail.** The man on the gate would take them from the drivers as they came in, and would put them in a paint tin, and the clerk would come out for the tin on a Tuesday.',
  '**What it was for — and there are two.** The first is that a driver did not have to walk to the office at the end of a shift. The second, which I would not have guessed, is that a sheet was never carried home, which used to happen before 2004 — and that is the one I am writing to you about.',
  '**When and why it changed.** Spring 2019, because a sheet went missing, a bus went out with a cracked mirror, and somebody came from the directorate. The clerk then asked for the sheets at the window so that he could see them signed.',
  '**Whether it was ever a decision.** It was not. Nobody said how long it would last. There is a difference between a rule that was agreed and a rule that was never cancelled.',
  '**My source.** Abu Khaldoun, in the yard since 1989, the only person left who was there. I read this sheet back to him on 11 November and he corrected three lines: the tin came in on a Tuesday, the gateman was Abu Nazih, and the arrangement was never a decision.',
  '**What I am asking for.** The tin at the gate, and an hour with him and a notebook before he goes.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 1 (sample, 164 words)'));
out.push(A('Out of 20, **140 words or more**, and all **four** notes must be covered — a script that answers three of the four cannot reach the top band however well written. The four here are: who to ask and why that person; the one line of the sheet that matters most; the difference between agreed and never cancelled; and what to do with what he writes down.'));
out.push(SAMPLE([
  'Dear Sam,',
  '"It has always been like that" is never true, and the three people you asked are the wrong three. Ask the **oldest person who was there** — not the most senior, the longest-serving, and ideally somebody who no longer does the job. Most reasons for most rules are in one person\'s memory and were never written down, and when that person leaves the reason leaves with them.',
  'Write eight lines: the practice, who did it, how, what it was for, when it changed, why, how long the new way was meant to last, and who remembers. The line that matters most is **what it was for** — and expect two purposes, not one. The first will be the obvious one. The second is usually about risk, or about somebody who was once blamed, and it is the one that will get your rule changed.',
  'Then find out whether it was ever a **decision**. A rule that was agreed and minuted needs a different letter from a rule that somebody started in a bad week and nobody has looked at since, and most old rules are the second kind.',
  'And when you have written it down, take it back to the person and read it to them line by line. They will correct two or three things and add a name and a date, and those corrections are the only part of your page that nobody could have invented. That is what makes it evidence.',
  'Let me know what he says,',
  'Rania',
]));
out.push(NOTE('Writing Part 1 is an email with four notes, and the mark is lost on coverage rather than on language. Teach the same two habits every time: **number the four notes in the margin** and tick each one as it is answered; and give each note **its own paragraph**, because an examiner reading quickly must be able to see all four. The notes may be answered in any order, and a short closing line is expected but earns nothing.'));
out.push(S('Unit 17 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** a   **3** c   **4** b   **5** c   **6** a   **7** c   **8** b'));
out.push(A('_Notes:_ **1** _used to sign_ — the past; _are used to_ is now and would need _signing_. **3** _would walk_ for a repeated action; _is used to_ would need _walking_ and would mean now. **5** _was not used to it_ — the past of the state. **7** _from then on_ is the only one of the three that exists. **8** _used to think_ — ⚠ _was used to_ would need _thinking_ and would mean something else entirely.'));
out.push(S('Unit 17 check  ·  B  Listening (Part 1, seven extracts) – Track 17.15'));
out.push(A('**1** B   **2** C   **3** A   **4** B   **5** C   **6** B   **7** A'));
out.push(A('Extracts **2** and **6** are the pair to replay. In **2** the answer is in a subordinate clause — _before the kettle and before anything else, was the broom_ — and candidates who are listening for a verb hear none. In **6** two of the three options are spoken aloud (April and September) and the question asks which one the speaker says **now**, which is the commonest trap in Part 1: every option is mentioned and only one is answered.'));
out.push(NOTE('Listening Part 1 is seven short extracts with three options each, and the options are words or short phrases rather than pictures. The habit that gains the most marks: in the pause before each extract, read the **question** and not the options, because the question tells you what to listen for and the options tell you what to be confused by. And expect at least two extracts in which all three options are said out loud.'));
out.push(S('Unit 17 check  ·  C  Writing (sample, 172 words)'));
out.push(SAMPLE([
  '**HOW URGENT PART REQUESTS USED TO BE MADE** · F. Kayyali · November',
  '**The practice.** Until 2021, a request for a part on an urgent job used to go on a half-sheet, by hand, straight to the workshop.',
  '**The detail.** Whoever had the job would write the machine, the part and the word "urgent", and would walk it across the yard himself, and would not leave until somebody had taken it off him.',
  '**What it was for — and there are two.** The first is speed: the workshop saw it the same hour. The second, which I did not know until I asked, is that walking it across meant a man was standing in front of you when you read it, and a request you have to refuse to somebody\'s face is a request you think about.',
  '**When and why it changed.** 2021, with the stores system. The reason given was traceability, which is a good reason.',
  '**Whether it was ever a decision.** Not the half-sheet. The system was decided and minuted; the half-sheet was never stopped — the pad ran out in about the March of 2021 and nobody ordered another one. Abu Samir\'s words: "nobody decided that, it just ran out."',
  '**My source.** Abu Samir in stores, seventeen years, in the meeting in 2021 and the only person left who was. I read this back to him on Tuesday and he corrected two lines: the pad ran out in March and not in the summer, and the walking across the yard was never in any instruction — it was what one foreman insisted on in the nineties.',
  '**What I am asking for.** The half-sheet back for urgent jobs only, in parallel with the system entry, and that it is walked across.',
]));
out.push(S('I can… (Unit 17)'));
out.push(A('Self-assessment; no answers. The three that matter are the third, the fifth and the eighth: noticing what you are used to, keeping _I used to_ and _I am used to_ apart every time, and reconstructing a practice and being corrected on it. A class that ticks the four forms and not the third and the eighth has learnt some grammar and nothing it can use on Monday.'));
out.push(box('Looking ahead to Unit 18', [
  'Unit 17 ended on a form in which _to_ was a **preposition** — _used to working_. **Unit 18** is the system that question belongs to: _verb + -ing · verb + to · verbs that take both and mean two different things · adjective + to · preposition + -ing · verb + object + to._',
  '**18.3 is the cycle to prepare for**, because _remember · forget · stop · try · go on_ change meaning with the pattern, and an instruction sheet that uses the wrong one gives the wrong instruction. _I stopped to read it_ and _I stopped reading it_ are opposite events, and most students in a B1 class believe they are the same sentence said two ways.',
  '**18.7 takes the prediction board down.** It went up in 14.1 and has been on the wall for four units; remind the class to bring their own copy, with their name and date on it, because the cycle compares what was predicted with what happened and a student without their page can only watch.',
  '**And after Unit 18 comes the Mid-Book Test** — Units 13–18, sixty marks: Reading 20, Writing 15, Listening 15, Speaking 10. Nothing in it is new. The two things to revise are the four habit forms from this unit and the conditionals from Unit 15, which are the two places the test loses marks.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 17 · Answer Key');
