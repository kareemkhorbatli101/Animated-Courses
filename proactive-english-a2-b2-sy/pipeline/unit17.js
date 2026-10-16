// Proactive English A2 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 17  Learning and Training'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**17.1**  say what you want and hope to do',
  '**17.2**  say what you enjoy and what you don\'t mind',
  '**17.3**  say when and how you started',
  '**17.4**  talk about what you are good at and bad at',
  '**17.5**  give learning advice',
  '**17.6**  ask for help in a lesson',
  '**17.7**  Review & Mediate: explain a course leaflet and a timetable',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Nour\'s training course** at TechCare started on the 3rd of February: six weeks, two evenings a week, and an assessment at the end. Her trainer is **Mr Jamil**.',
  '**The centre\'s conversation club** starts on Saturdays at eleven — free for students, 20,000 SYP a term for everybody else.',
  '**Hiba\'s teacher-training forms** went in on the first of March. Both referees said yes.   ·   **Lama** is now working three afternoons at Dar Al-Kalima and is learning the till.',
], C.lyellow, C.orange));

// ======================= 17.1 =======================
out.push(pb());
out.push(h2('17.1  I want to finish it this year'));
out.push(p('**Function:** saying what you want and hope to do   ·   **Grammar:** _want_ / _hope_ / _need_ / _decide_ + **to** + verb   ·   **Pronunciation:** weak _to_ /tə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three things you are trying to learn — one at work or college, one at home, one nobody asked you to learn. Your teacher writes six of the class\'s answers on the board.'));
out.push(board('I want to finish it this year.', 'want / hope / need / decide + TO'));
out.push(p('**b**  Finish each one about yourself: _I want ______. · I hope ______. · I need ______. · I\'ve decided ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Nour started?   **A** a new job   **B** a training course at work   **C** a conversation club'));
out.push(p('**b**  Listen again. **1** How long is the course and how often is it?   **2** What does Nour say she needs to do before the assessment?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  Six weeks, two evenings', [
  ['Omar', 'So it started?'],
  ['Nour', 'Tuesday. Six weeks, two evenings a week, and an assessment at the end that decides everything.'],
  ['Omar', 'And what do you want out of it?'],
  ['Nour', 'I want to stop being the person who can fix things and can\'t explain them. That is the honest answer.'],
  ['Omar', 'That is a better answer than "I want to be a senior technician".'],
  ['Nour', 'I hope to be a senior technician. Those are two different sentences and I have learned to say them differently.'],
  ['Omar', 'What do you need to do before the assessment?'],
  ['Nour', 'I need to write four reports, and I need to learn to write them in a way Mr Jamil can read in two minutes. He says a report nobody reads is not a report.'],
  ['Omar', 'He sounds all right.'],
  ['Nour', 'He is. On Tuesday he asked everybody what they wanted to learn, and when I said "everything" he said that was not an answer, and he waited.'],
  ['Omar', 'And?'],
  ['Nour', 'And I decided to say the true thing. I want to learn to be understood by people who are not technicians. He wrote it down.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – these verbs take _to_ + verb**',
  table(['verb', 'example'], [
    ['**want to**', '_I **want to finish** it this year._ · _She **wants to learn** to drive._'],
    ['**hope to**', '_I **hope to be** a senior technician._'],
    ['**need to**', '_I **need to write** four reports._'],
    ['**decide to**', '_I **decided to say** the true thing._'],
    ['also: **would like to · plan to · try to · learn to · manage to**', '_I\'d **like to start** in May._ · _I **learned to write** reports._'],
  ], [1, 2]),
  '**The shape never changes:** verb + **to** + **bare verb**. ~~I want finish.~~ ~~I want to finishing.~~ ~~I want that I finish.~~',
  '⚠ **Who does the second verb?** If it is somebody else, the person goes in the middle: _I **want you to come**._ · _He **needs me to sign** it._  ~~I want that you come.~~',
  '⚠ _hope_ and _want_ are **not** the same strength. _I **want to** be a senior technician_ is a goal; _I **hope to** be_ is a wish. Nour says this out loud, and it matters.',
  '**The negative:** _I **don\'t want to** go._ · _I\'ve **decided not to** apply._ (notice where the _not_ goes with _decide_)',
  '**Practise:** Put the verb in.  1 I want ______ (finish) this level in June.  2 She hopes ______ (start) in September.  3 We need ______ (buy) the books.  4 He\'s decided ______ (not / apply) this year.  5 I\'d like you ______ (read) this.  6 They\'re trying ______ (learn) two languages at once.',
  '**Useful phrases:** What do you want out of it? · That is the honest answer. · Those are two different sentences. · I decided to say the true thing. · He wrote it down.',
  '**Pronunciation.** 🔊 **Track 17.2** _to_ is weak — /tə/, never /tuː/: _want to_ /ˈwɒntə/ · _need to_ /ˈniːdtə/ · _hope to_ /ˈhəʊptə/. Listen and repeat, and notice that _want to_ in fast speech is almost one word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the plan on B\'s card. B must use _want to_, _hope to_, _need to_ and _decide to_ at least once each — and must say which is a **goal** and which is only a **wish**. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'So what are you doing about __________?'],
  ['B', 'I\'ve decided to __________.'],
  ['A', 'What do you want out of it?'],
  ['B', 'I want to __________.'],
  ['A', 'And after that?'],
  ['B', 'I hope to __________. That one is a hope, not a plan.'],
  ['A', 'What do you need to do first?'],
  ['B', 'I need to __________, and I need __________ to __________.'],
]));
out.push(table(['Card A – your plan', 'Card B – your plan'], [
  ['a training course at work, six weeks', 'a part-time course at the centre, one term'],
  ['goal: be able to explain your work to anybody', 'goal: read a whole book in English'],
  ['wish: a better job next year', 'wish: teach one day'],
  ['first: write four reports · ask your manager for Tuesdays', 'first: pay the fee · tell your family you will be out on Saturdays'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **goal** and the **wish** you hear, and the **two** things that have to happen first.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about the **three** things you are trying to learn. For each one say what you want to do with it, and for **one** of them say honestly whether it is a goal or a wish. Your partner must ask _"what do you need to do first?"_ about each.'));
out.push(p('**b**  Swap. Then each of you say the **one** thing you have decided **not** to learn this year, and why that is a good decision.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour wants to stop being the person who can fix things and cannot explain them, which she says is the honest answer and is not the same as wanting to be a senior technician. She hopes to be one; she was careful about the difference. She needs to write four reports before the assessment, and she needs to learn to write them so that Mr Jamil can read one in two minutes. The thing she has decided not to do this year is start a second course at the same time, which she says she would have done last year without thinking about it._'));
out.push(p('**Listener task:** whose goal is a goal? Whose goal is really a wish wearing a goal\'s clothes?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first page of Nour\'s course notebook. Answer the questions.'));
out.push(model([
  '**TECHCARE TRAINING · WEEK 1 · what I want out of this** — Nour',
  'Mr Jamil asked everybody on Tuesday what they wanted to learn. I said "everything" and he said that was not an answer and then he waited, which is a thing he does.',
  '**What I want to do:** I want to stop being the person who can fix anything and cannot explain it to anybody. That is the whole course for me.',
  '**What I hope to do:** I hope to be a senior technician within two years. I am writing it as a hope, because that is what it is. The person who decides it has not mentioned it to me once.',
  '**What I need to do first:** I need to write four reports before the assessment. I need to learn to write them so that Mr Jamil can read one in two minutes — he says a report nobody reads is not a report. And I need to ask Mr Fouad to keep Tuesdays free, which I have not done yet and which is the easiest of the three.',
  '**What I have decided not to do:** the online course as well. Last year I would have signed up for both without thinking. This year I am doing one thing.',
]));
out.push(item('1', 'What did Mr Jamil do when Nour said "everything"?'));
out.push(item('2', 'Why has Nour written the senior technician line as a hope?'));
out.push(item('3', 'Which of the three "need to" things has she not done, and what does she say about it?'));
out.push(writers([
  'A "what I want out of this" page: **what I want to do** → **what I hope to do** → **what I need to do first** → **what I have decided not to do**.',
  'Keep _want_ and _hope_ in **separate paragraphs**. The moment a wish is written under _want_, the page stops being useful to you.',
  'Under _need to_, put the things in the order of difficulty and say which one you have **not done**. The undone easy one is always the interesting line.',
  '⚠ The last paragraph is the one that makes the page worth keeping. A plan with nothing refused in it is not a plan, it is a list of everything.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "what I want out of this" page for something you are learning (35 words or more).'));
out.push(p('**______________ · what I want out of this**   **What I want to do:** I want to ______________.   **What I hope to do:** I hope to ______________. I am writing it as a hope because ______________.   **What I need to do first:** I need to ______________, and I need to ______________. I haven\'t ______________ yet.   **What I have decided not to do:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the course or the thing, and your name',
  'verb + **to** + bare verb every time (never ~~want finish~~, never ~~want to finishing~~)',
  '_want_ and _hope_ in different paragraphs, and the difference explained',
  'All four parts — including the one you have decided **not** to do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) for the thing you most want to learn this year: what you want, what you hope, what you need to do first, what you have decided not to do — and one sentence about what will happen if you do none of it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who will ask them about it in June**. ★ _The sentence that makes this real._  ✓ _One thing under **want** that belongs under **hope**._  ? _What is the first thing, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"decided not to"** paragraphs aloud. **Which refusal was the hardest?** That is usually the one that makes the rest of the plan possible.'));
out.push(hw('Write the **message you have not sent yet** (40+ words) — to the manager, the teacher, the family member whose permission or help you need for the thing you want to learn.'));

// ======================= 17.2 =======================
out.push(pb());
out.push(h2('17.2  I don\'t mind doing the reports'));
out.push(p('**Function:** saying what you enjoy and what you don\'t mind   ·   **Grammar:** _enjoy_ / _don\'t mind_ / _finish_ / _practise_ + **-ing**   ·   **Pronunciation:** _-ing_ /ɪŋ/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three columns on the board: **I enjoy…**, **I don\'t mind…**, **I hate…** — and the class fills them with things people do at work, at home and in a lesson.'));
out.push(board('I don\'t mind doing the reports.', 'enjoy / don\'t mind / hate + -ING'));
out.push(p('**b**  Which is true for you? _I enjoy speaking English. · I don\'t mind making mistakes. · I hate writing. · I enjoy listening more than speaking._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lama find hardest at the bookshop?   **A** the till   **B** talking to customers   **C** the hours'));
out.push(p('**b**  Listen again. **1** What does Lama say she doesn\'t mind?   **2** What does Mrs Mona say about practising?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  The till', [
  ['Mrs Mona', 'Three weeks. Tell me honestly. What do you hate?'],
  ['Lama', 'Nothing. I like it here.'],
  ['Mrs Mona', 'Everybody hates one thing. If you don\'t tell me, I will guess and I will be wrong.'],
  ['Lama', '(pause) The till. I hate using the till.'],
  ['Mrs Mona', 'Good. Why?'],
  ['Lama', 'Because there is somebody standing in front of me waiting, and I am thinking about the buttons, and I can feel them deciding that I am slow.'],
  ['Mrs Mona', 'And the rest?'],
  ['Lama', 'I enjoy everything else. I enjoy finding books for people. I don\'t mind cleaning, I don\'t mind staying late, and I actually enjoy unpacking the boxes, which I did not expect.'],
  ['Mrs Mona', 'Nobody expects that one. Right — you will practise using the till on Tuesday mornings, when there is nobody here, until you have finished thinking about the buttons.'],
  ['Lama', 'That could take weeks.'],
  ['Mrs Mona', 'It will take four Tuesdays. You don\'t mind practising; you mind practising in front of people, which is a completely different thing and much easier to fix.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – these verbs take the _-ing_ form**',
  table(['verb', 'example'], [
    ['**enjoy**', '_I **enjoy finding** books for people._'],
    ['**don\'t mind**', '_I **don\'t mind staying** late._'],
    ['**hate** / **like** / **love**', '_I **hate using** the till._'],
    ['**finish**', '_…until you have **finished thinking** about the buttons._'],
    ['**practise**', '_You will **practise using** the till on Tuesdays._'],
    ['also: **start · stop · keep · spend time · be good at**', '_He **kept asking**._ · _I **spend time reading**._'],
  ], [1, 2]),
  '⚠ ~~I enjoy to find books.~~ → _I **enjoy finding** books._  There is no choice with _enjoy_, _don\'t mind_, _finish_ or _practise_ — it is always _-ing_.',
  '⚠ ~~I don\'t mind to stay late.~~ → _I **don\'t mind staying** late._',
  '⚠ **_practise_ is the British spelling of the verb.** The noun is _practice_. In this book: _I **practise**_ · _some **practice**_.',
  '**_don\'t mind_ means "it is fine, not my favourite":** _"Tea or coffee?" – "I don\'t mind."_ It is one of the most useful phrases in English and students use it far too little.',
  '**Practise:** Put the verb in the right form.  1 I enjoy ______ (read) in English.  2 She doesn\'t mind ______ (work) on Saturdays.  3 Have you finished ______ (write) the report?  4 We need ______ (practise) ______ (speak) more.  5 He hates ______ (make) mistakes in front of people.  6 I\'ve decided ______ (start) ______ (go) to the club.',
  '**Useful phrases:** Everybody hates one thing. · Tell me honestly. · which I did not expect · You don\'t mind practising; you mind practising in front of people. · I don\'t mind.',
  '**Pronunciation.** 🔊 **Track 17.4** The ending is /ɪŋ/ — one sound at the back of the mouth, with **no g** at the end: _reading_ /ˈriːdɪŋ/, not /ˈriːdɪŋɡ/. Listen and repeat six verbs, then say _I don\'t mind staying_ three times quickly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the manager or teacher on the card and asks the three questions; B answers with at least one _enjoy_, one _don\'t mind_ and one _hate_, and gives a reason for the _hate_. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'You\'ve been here __________. Tell me honestly — what do you hate?'],
  ['B', 'Nothing. I __________.'],
  ['A', 'Everybody hates one thing.'],
  ['B', '__________. I hate __________.'],
  ['A', 'Why?'],
  ['B', 'Because __________.'],
  ['A', 'And the rest?'],
  ['B', 'I enjoy __________. I don\'t mind __________, and I don\'t mind __________.'],
  ['A', 'Then you will practise __________ until __________.'],
]));
out.push(table(['Card A – a shop, after three weeks', 'Card B – a workshop, after a month'], [
  ['enjoys: finding things for people', 'enjoys: taking machines apart'],
  ['doesn\'t mind: cleaning · staying late', 'doesn\'t mind: the early start · the cold'],
  ['hates: the till, in front of people', 'hates: telephoning customers'],
  ['the fix: Tuesday mornings, nobody there', 'the fix: ring three people a day, from a written line'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **one** hated thing, the **reason**, and the **fix**. Was the fix about the task or about the people watching?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner **two** things you enjoy doing, **two** you don\'t mind doing, and **one** you hate doing — at work, at home or in English. For the hated one, your partner must ask the Mrs Mona question: _is it the thing, or is it doing it in front of people?_'));
out.push(p('**b**  Swap. Then each of you find **one** thing on your partner\'s _hate_ list that is really on their _don\'t mind_ list, and argue for it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lama enjoys finding books for people and she enjoys unpacking the boxes, which she says she did not expect. She doesn\'t mind cleaning and she doesn\'t mind staying late. The one she hates is the till, and the reason is not the till: it is somebody standing in front of her deciding that she is slow. Mrs Mona pointed out that she doesn\'t mind practising, she minds practising in front of people, and gave her four Tuesday mornings with an empty shop. I thought that was the best piece of management I have heard in this class._'));
out.push(p('**Listener task:** write one thing from the room that somebody hates **because of the people watching**, not because of the task.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the centre\'s noticeboard. Answer the questions.'));
out.push(model([
  '**SATURDAY CONVERSATION CLUB — starts 8 March, 11:00**',
  'One hour, every Saturday, in Room 3. Free for students of the centre; 20,000 SYP a term for everybody else.',
  '**It is for you if** you understand more than you can say, if you enjoy listening and hate speaking, or if you have finished a level and stopped using any of it.',
  '**What we do.** We practise speaking for fifty minutes and we spend ten minutes at the end writing down the five things somebody could not say. Nobody corrects anybody in the middle. We keep going.',
  '**What we don\'t do.** No grammar. No homework. Nobody reads anything aloud. If you hate reading aloud, this is the one hour of the week where nobody will ask you to.',
  '**You don\'t have to come every week** and you don\'t have to tell anybody when you can\'t. Come when you can.',
  '**One rule.** You may not say "my English is bad" in this room. Say what you want to say, badly, and somebody will help you say it better at the end.',
]));
out.push(item('1', 'Who is the club free for?'));
out.push(item('2', 'What happens in the last ten minutes?'));
out.push(item('3', 'What is the one rule, and why do you think it exists?'));
out.push(writers([
  'A notice for something people are afraid of joining: **when and how much** → **it is for you if…** → **what we do** → **what we don\'t do** → **the rule**.',
  'The _**what we don\'t do**_ section is the one that fills the room. People do not stay away because they do not know what happens; they stay away because of what they are afraid will happen.',
  'Describe the reader back to themselves: _if you understand more than you can say_ · _if you have finished a level and stopped using any of it_. One of those sentences is somebody in this class.',
  '⚠ Say the price and the exemption in the **first two lines**. A notice that hides the price is read as though the price is bad.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a notice for a club, class or group you would start (35 words or more).'));
out.push(p('**______________ — starts ______________**   ______________, every ______________, in ______________. ______________ for ______________; ______________ for everybody else.   **It is for you if** you ______________ or if you ______________.   **What we do.** We practise ______________ and we spend ______________ ______________.   **What we don\'t do.** No ______________. Nobody ______________. If you hate ______________, ______________.   **One rule.** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the start date and the time, at the top',
  '_enjoy / don\'t mind / hate / practise / finish / spend time_ + **-ing**, every time',
  'The price and who does not pay, in the first two lines',
  'All five parts — and the **What we don\'t do** section is not empty',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full notice (60 words or more) for a group you would really start — a reading group, a walking group, a repair afternoon, a homework hour for children in your building. Include what you don\'t do, and one rule.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as **somebody who is nervous about going**. ★ _The line that would get me through the door._  ✓ _One thing I am still afraid will happen._  ? _What if I can only come twice?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall and each student puts a mark next to the **one** they would actually go to. Count them. **Why did that one win?** It is nearly always the _what we don\'t do_ section.'));
out.push(hw('Write the **message you would send to one person** (40+ words) to get them to come to your group — somebody specific, who has a specific reason not to.'));

// ======================= 17.3 =======================
out.push(pb());
out.push(h2('17.3  I started learning it at school'));
out.push(p('**Function:** saying when and how you started   ·   **Grammar:** _start_ / _begin_ / _like_ + **to** or **-ing**   ·   **Pronunciation:** word stress in longer verbs'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When did you start learning English, and what made you keep going? Each student gives a year and one sentence. Your teacher writes the **earliest** and the **latest** on the board.'));
out.push(board('I started learning it at school.', 'start + -ing OR start + to — both right'));
out.push(p('**b**  Which of these are both possible? **1** _I started to learn / learning._  **2** _I enjoy to learn / learning._  **3** _I like to read / reading._  **4** _I want to go / going._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who started learning English last?   **A** Hiba   **B** Omar   **C** Lina'));
out.push(p('**b**  Listen again. **1** Why did Omar start learning English again at twenty-six?   **2** What does Lina say made her keep going?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  When did you start?', [
  ['Ms Huda', 'A year each, and one sentence about why you kept going.'],
  ['Hiba', 'Eleven. At school, like everybody. I began learning properly at about nineteen, when I understood that school taught me to pass an exam and not to say anything.'],
  ['Omar', 'I started at school too and I stopped the day I left. Then at twenty-six I opened a manual for a machine we bought that week and I could not read it, and there were eleven people waiting for me to tell them what it said.'],
  ['Ms Huda', 'So you started again.'],
  ['Omar', 'I started again the next week. Nobody likes learning something at twenty-six that they were taught at twelve.'],
  ['Lina', 'I started at thirty-one. Two years ago.'],
  ['Hiba', 'Thirty-one!'],
  ['Lina', 'My company began buying from Türkiye and somebody had to write the messages. I said I would try. I like to tell people that I did it for work, and that is half true. The other half is that I did not want to be the person in the office who hands the telephone to somebody else.'],
  ['Ms Huda', 'And what made you keep going? That is the real question. Everybody starts.'],
  ['Lina', 'Writing one message that got the right answer back. That was week nine, and I have not stopped since.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the verbs that take _either_ form**',
  table(['verb', 'both are right'], [
    ['**start**', '_I **started learning** it at school._ = _I **started to learn** it at school._'],
    ['**begin**', '_She **began working** here in 2019._ = _She **began to work** here in 2019._'],
    ['**like** / **love** / **hate**', '_I **like reading**._ = _I **like to read**._'],
    ['**continue**', '_He **continued studying**._ = _He **continued to study**._'],
  ], [1, 2.2]),
  '**So there are now three groups, and this is the whole of Unit 17:**',
  table(['always **to** + verb', 'always **-ing**', 'either'], [
    ['want · hope · need · decide\nwould like · plan · learn · manage',
     'enjoy · don\'t mind · finish\npractise · keep · spend time',
     'start · begin\nlike · love · hate · continue'],
  ], [1.2, 1.1, 1]),
  '⚠ The small difference, when you want it: _I **like reading**_ = I enjoy it. _I **like to read** before bed_ = it is what I choose to do. At A2 either is fine; from B1 the difference starts to matter.',
  '⚠ ~~I started to learning.~~ Choose **one**: _started **learning**_ or _started **to learn**_.',
  '**Practise:** Both, one, or neither? Write the right form(s).  1 I started ______ (work) there in 2020.  2 I enjoy ______ (work) there.  3 I need ______ (work) on Saturday.  4 She likes ______ (cook).  5 They finished ______ (paint) the room.  6 We hope ______ (see) you soon.',
  '**Useful phrases:** I began learning properly at… · Nobody likes learning at twenty-six what they were taught at twelve. · that is half true · What made you keep going? · Everybody starts.',
  '**Pronunciation.** 🔊 **Track 17.6** Longer verbs carry their stress on one syllable only: _con**TIN**ue · **PRAC**tise · **MAN**age · de**CIDE** · re**MEM**ber_. Listen and repeat, then say each one inside a sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A interviews B about the skill on the card: _when did you start?_, _why?_, _what made you keep going?_, _did you ever stop?_ B must use _start_ or _begin_ with **both** forms at least once each. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'When did you start __________?'],
  ['B', 'I started __________ when I was __________.'],
  ['A', 'Why then?'],
  ['B', 'Because __________.'],
  ['A', 'Did you ever stop?'],
  ['B', 'I stopped __________ and I began __________ again when __________.'],
  ['A', 'What made you keep going?'],
  ['B', '__________. That was __________, and I haven\'t stopped since.'],
]));
out.push(table(['Card A – the skill', 'Card B – the skill'], [
  ['learning English at 26, after failing to read a manual', 'learning to drive at 34, after two years of saying you would'],
  ['stopped: at 18, the day you left school', 'stopped: twice, both times after an argument with an instructor'],
  ['kept going: the first time somebody asked you to translate', 'kept going: your daughter asked you to take her somewhere'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** dates and the **one** thing that made them keep going.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner your real English story: when you started, when you stopped, when you started again, and what made you keep going. Your partner must ask _"what made you keep going?"_ and then wait, because the first answer is never the real one.'));
out.push(p('**b**  Swap. Then each of you name **one** thing you started and did not keep going with, and say what would have made you keep going.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina started learning English at thirty-one, two years ago, when her company began buying from Türkiye and somebody had to write the messages. She likes to tell people she did it for work, and she says that is half true. The other half is that she did not want to be the person in the office who hands the telephone to somebody else. What made her keep going was one message in week nine that got the right answer back, and she has not stopped since. The thing she started and gave up is swimming, and she says what would have made her keep going is somebody to go with._'));
out.push(p('**Listener task:** write down the real reason somebody gave, after the first reason.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**WHEN WE STARTED** — twelve members, twelve years',
  'We asked everybody two questions: when did you start, and what made you keep going. The second question is the one that took time.',
  '**The ages.** The youngest started at seven. The oldest started at forty-four, last year. Four of us started at school and stopped the same week we left.',
  '**Starting again.** Six of the twelve started again as adults, and five of those six can name the day. One opened a machine manual with eleven people waiting for him to say what it meant. One was asked to translate for a doctor. One\'s company began buying from another country and somebody had to write the messages.',
  '**What made us keep going.** Almost nobody said "my job". They said it first and then they said something else. The real answers were: one message that got the right answer back; a daughter who asked a question; not wanting to be the person who hands the telephone to somebody else.',
  '**What stopped us before.** Every single person who stopped stopped because they were learning alone. Not one person said the grammar was too hard.',
]));
out.push(item('1', 'How many of the twelve started again as adults?'));
out.push(item('2', 'What did people say **first** when asked what made them keep going?'));
out.push(item('3', 'What was the one reason everybody gave for stopping?'));
out.push(writers([
  'A survey page: **the two questions** → **the numbers** → **the stories behind the numbers** → **what the answers have in common**.',
  'Say which question was **harder to answer**, and why. That sentence tells the reader what kind of page they are reading.',
  'Report the **first answer and the real answer** separately. _Almost nobody said "my job". They said it first and then they said something else._ That is the finding.',
  '⚠ The last section is the point of a survey: what do all the answers have in common? _Every single person who stopped stopped because they were learning alone._ Do not leave the reader to work it out.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up a survey of this class about something you all do (35 words or more).'));
out.push(p('**WHEN WE STARTED ______________** — ______________ members   We asked everybody two questions: ______________ and ______________. The ______________ question is the one that took time.   **The numbers.** The youngest started at ______________. The oldest at ______________. ______________ of us ______________.   **The real answers.** Almost nobody said ______________. They said it first and then ______________. The real answers were: ______________.   **What they have in common.** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, the number of people, and the two questions in the first line',
  '_start_ / _begin_ with either form · _enjoy_ and _finish_ with **-ing** only',
  'At least four numbers',
  'A last section saying what the answers have in common',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **your own learning story** (60 words or more): when you started, when you stopped, what made you start again, what has made you keep going — and the honest second answer, not the first one.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s story as **somebody about to start learning something at forty**. ★ _The part that would make me start._  ✓ _One place where you gave me the first answer and not the real one._  ? _What would have made you keep going the first time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read the **"what made you keep going"** sentences aloud, anonymously. **How many of them have another person in them?** Count. The number is always higher than the class expects.'));
out.push(hw('Write about **something you started and did not continue** (40+ words): when, why you stopped, and the one thing that would have made the difference.'));

// ======================= 17.4 =======================
out.push(pb());
out.push(h2('17.4  I\'m good at listening, I\'m bad at starting'));
out.push(p('**Function:** talking about strengths and weaknesses   ·   **Grammar:** _good at_ / _bad at_ + **-ing**; _find it easy / hard to_   ·   **Pronunciation:** contrast stress'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Four columns on the board: **reading · listening · speaking · writing**. Every student puts their name in the column they are best at and a mark in the one they find hardest. Count both.'));
out.push(board('I\'m good at listening.', 'good at / bad at + -ING'));
out.push(p('**b**  Finish about yourself: _I\'m good at ______. · I\'m not very good at ______. · I find it easy to ______. · I find it hard to ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Jamil ask the group to write?   **A** a report   **B** two things they are good at and two they are bad at   **C** a list of questions'));
out.push(p('**b**  Listen again. **1** What does Nour say she is bad at, and what does Mr Jamil say about it?   **2** What is the difference Mr Jamil draws between being bad at something and finding it hard?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  Two and two', [
  ['Mr Jamil', 'Two things you are good at and two things you are bad at. Written down, not said. You have four minutes.'],
  ['Nour', 'Can I ask what it is for?'],
  ['Mr Jamil', 'It is for you. I will not read them.'],
  ['Nour', '(later) I wrote that I am good at finding faults and good at listening to customers. And I wrote that I am bad at writing things down and bad at starting.'],
  ['Mr Jamil', 'Say the last one again.'],
  ['Nour', 'I am bad at starting. If a job is in front of me I will do it well. If it is on a list, it stays on the list.'],
  ['Mr Jamil', 'That is not being bad at something. That is finding something hard. They are not the same and the difference matters.'],
  ['Nour', 'Why?'],
  ['Mr Jamil', 'Because if you are bad at writing, you learn to write. If you find it hard to start, no amount of learning to write will help you. You need a different thing — somebody expecting it on Thursday.'],
  ['Nour', 'So which one am I?'],
  ['Mr Jamil', 'You tell me. Are you bad at writing reports, or do you find it hard to begin them?'],
  ['Nour', '(pause) I find it hard to begin them. I have written four this month and all four were written on the last evening.'],
  ['Mr Jamil', 'Then we are not going to work on your writing. We are going to work on Tuesday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – strengths, weaknesses, and the difference between them**',
  table(['the pattern', 'examples'], [
    ['**be good at / bad at** + **-ing**',
     '_I\'m **good at listening**._ · _I\'m **bad at writing** things down._\n_She\'s **not very good at starting**._'],
    ['**find it easy / hard to** + bare verb',
     '_I **find it hard to begin** them._ · _I **find it easy to read**, and hard to speak._'],
  ], [1.2, 1.8]),
  '⚠ **_at_ is always followed by _-ing_**, because _at_ is a preposition: ~~good at to write~~ → _good **at writing**_. Same with every preposition: _**before going** · **after finishing** · **instead of asking** · **without saying**_.',
  '⚠ ~~I find hard to start.~~ → _I find **it** hard to start._ The _it_ is not optional.',
  '**The difference Mr Jamil draws, and it is worth keeping:** _bad at_ = I cannot do it well yet → **learn it**. _find it hard to_ = I can do it, but not easily → **change the conditions**.',
  '**Softer ways to say it:** _I\'m **not very good at**…_ · _I\'m **not the best at**…_ · _I **struggle to**…_ · _It **doesn\'t come easily to me**._',
  '**Practise:** Put the right form in.  1 I\'m good at ______ (listen).  2 She\'s bad at ______ (remember) names.  3 I find it hard ______ (start) a report.  4 He\'s not very good at ______ (explain) things.  5 We find it easy ______ (read) but hard ______ (speak).  6 He left without ______ (say) anything.',
  '**Useful phrases:** It is for you. I will not read them. · Say the last one again. · They are not the same and the difference matters. · You tell me. · Then we are not going to work on your writing.',
  '**Pronunciation.** 🔊 **Track 17.8** When you contrast two things, both carry heavy stress: _I\'m good at **LIS**tening and bad at **START**ing._ · _I find it easy to **READ** and hard to **SPEAK**._ Listen and repeat, and make the two words fight each other.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the trainer or teacher on the card; B gives two strengths and two weaknesses. A must then ask the Mr Jamil question about **one** of them: _are you bad at it, or do you find it hard?_ Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Two things you are good at and two you are bad at.'],
  ['B', 'I\'m good at __________ and good at __________.'],
  ['A', 'And bad at?'],
  ['B', 'I\'m bad at __________ and bad at __________.'],
  ['A', 'Say the second one again.'],
  ['B', 'I\'m bad at __________.'],
  ['A', 'Are you bad at it, or do you find it hard to __________?'],
  ['B', '(pause) I find it hard to __________, because __________.'],
  ['A', 'Then we are not going to work on __________. We are going to work on __________.'],
]));
out.push(table(['Card A – a workplace trainer', 'Card B – a teacher at the centre'], [
  ['good at: finding faults · listening to customers', 'good at: reading · remembering words'],
  ['bad at: writing things down · starting', 'bad at: speaking · asking questions in class'],
  ['the real problem: everything is written on the last evening', 'the real problem: speaking in front of thirteen people, not speaking'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **weakness** and then write whether it was really a weakness or a condition. How did you know?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write down **two** things you are good at and **two** you are bad at in English — privately, nobody reads them. Then tell your partner **one** from each list. Your partner must ask the Mr Jamil question about the weakness.'));
out.push(p('**b**  Swap. Then each of you say what would have to **change** — not what you would have to learn — for the hard thing to get easier.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour wrote that she is good at finding faults and good at listening to customers, and bad at writing things down and bad at starting. Mr Jamil stopped her on the second one and said that being bad at something and finding it hard are not the same, because if you are bad at writing you learn to write, and if you find it hard to start, learning to write will not help you at all. She decided she finds it hard to begin: she has written four reports this month and every one of them was written on the last evening. So he said they were not going to work on her writing, they were going to work on Tuesday._'));
out.push(p('**Listener task:** write one thing from this room that is a **condition** pretending to be a weakness.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from Nour\'s notebook. Answer the questions.'));
out.push(model([
  '**TWO AND TWO** — week 3',
  'Mr Jamil asked for two things I am good at and two I am bad at, written not said, four minutes, and he said he would not read them. He did not read them. I checked.',
  '**Good at.** I am good at finding faults — I can usually tell what is wrong with a machine before I have opened it, from the noise and from what the customer says they did last. And I am good at listening to customers, which nobody at TechCare thinks is a skill and which saves me an hour a week.',
  '**Bad at.** I am bad at writing things down. And I wrote that I am bad at starting.',
  '**What he said.** That being bad at something and finding it hard are two different problems. If I am bad at writing, I learn to write. If I find it hard to begin, no amount of learning to write will help me; I need somebody expecting the thing on a Thursday.',
  '**What is true.** I find it hard to begin. Four reports this month, four last evenings. I am not a bad writer. I am a person who writes at nine o\'clock at night because somebody is waiting at nine in the morning.',
  '**So:** we are not working on my writing. We are working on Tuesday.',
]));
out.push(item('1', 'Why does Nour say listening to customers saves her an hour a week?'));
out.push(item('2', 'What is the difference between the two problems, according to Mr Jamil?'));
out.push(item('3', 'What does "we are working on Tuesday" mean?'));
out.push(writers([
  'A strengths-and-weaknesses page: **Good at** → **Bad at** → **what somebody said about it** → **what is actually true** → **what changes as a result**.',
  'Under _good at_, give the **evidence**, not the adjective: _I can tell what is wrong from the noise_ · _it saves me an hour a week_. Anybody can write _I am a good listener_.',
  'Be exact about the weakness, with a **number**: _four reports this month, four last evenings._ The number is what turns a feeling into a problem you can work on.',
  '⚠ The last line must be a **change**, not a resolution. _We are working on Tuesday_ is a change. _I will try to start earlier_ is a resolution, and resolutions are what this page is supposed to replace.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own "two and two" page (35 words or more).'));
out.push(p('**TWO AND TWO** — ______________   **Good at.** I am good at ______________ — ______________. And I am good at ______________, which ______________.   **Bad at.** I am bad at ______________. And I wrote that I am bad at ______________.   **What is true.** I find it hard to ______________. ______________ this month, ______________.   **So:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and the week or the date',
  '_good at_ / _bad at_ + **-ing** · _find it hard **to**_ + bare verb · never ~~find hard to~~',
  'Evidence under each strength, and a number under the weakness',
  'A last line that is a **change**, not a resolution',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) about **yourself and English**. Two strengths with evidence, two weaknesses, the one that is really a condition, and the change you are going to make to the conditions.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **their teacher**. ★ _The strength you are underselling._  ✓ _One weakness that is really a condition._  ? _What exactly are you going to change, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Nobody reads anybody\'s weaknesses aloud. Instead, each student says only the **change** at the end of their page. **Which change is the class going to ask about in two weeks?**'));
out.push(hw('Write the **page for somebody who knows you well** (40+ words): what they would say you are good at, and the weakness they would name that you did not write down.'));

// ======================= 17.5 =======================
out.push(pb());
out.push(h2('17.5  Try writing it the night before'));
out.push(p('**Function:** giving learning advice   ·   **Grammar:** _try to_ + verb against _try_ + **-ing**; _remember_ / _forget_ + _to_   ·   **Pronunciation:** _try to_ /traɪ tə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is the best piece of learning advice anybody has given you? One sentence each. Your teacher keeps the three the class likes best.'));
out.push(board('Try writing it the night before.', 'try TO = make an effort · try -ING = experiment'));
out.push(p('**b**  Which is which? **1** _I tried to open the door._ (= it was difficult)  **2** _I tried pushing the door._ (= an experiment) — now say what happened next in each case.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hiba\'s problem?   **A** she forgets words   **B** she cannot start speaking   **C** she has no time to study'));
out.push(p('**b**  Listen again. **1** What **three** things does Lina tell her to try?   **2** What does Lina say she remembered to do, and what did she forget to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  Three things to try', [
  ['Hiba', 'I understand everything and I say nothing. For two years.'],
  ['Lina', 'I know that one. I was that for eighteen months.'],
  ['Hiba', 'What did you do?'],
  ['Lina', 'Three things, and only one of them worked, which is normal. Try writing the first sentence down before you say it. Just the first one.'],
  ['Hiba', 'That feels like cheating.'],
  ['Lina', 'It is not cheating. Nobody can hear your paper. Second: try saying something in the first five minutes of any lesson, anything, even "good evening". If you have spoken once, speaking again is a smaller thing.'],
  ['Hiba', 'And the third?'],
  ['Lina', 'Try not learning any new words for two weeks. Use only the ones you already have and find out what you can actually do with them. That is the one that worked for me.'],
  ['Hiba', 'That is the opposite of what everybody says.'],
  ['Lina', 'Everybody says learn more words, because it is easy to say and easy to measure. I tried to learn thirty words a week for a year. I remembered to write them down every single day and I forgot to use any of them.'],
  ['Hiba', 'Which one should I start with?'],
  ['Lina', 'The second one. Saturday, eleven o\'clock, the conversation club. Say good morning to somebody before you sit down, and you have already done it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _try_ has two meanings, and the form tells you which**',
  table(['**try to** + verb = make an effort; it is difficult', '**try** + **-ing** = experiment; see if it helps'], [
    ['_I **tried to learn** thirty words a week._\n(it was hard; I may have failed)\n_**Try to be** on time._',
     '_**Try writing** the first sentence down._\n(it is easy; the question is whether it works)\n_**Try saying** something in the first five minutes._'],
  ], [1.3, 1.3]),
  '**Advice is nearly always _try_ + -ing**, because you are suggesting an experiment, not demanding effort. _Try **asking** him._ · _Try **leaving** earlier._',
  '**The same two-way split, with _remember_ and _forget_:**',
  table(['_remember / forget_ + **to** = the thing you must do', '_remember / forget_ + **-ing** = the memory'], [
    ['_I **forgot to use** them._ (I didn\'t use them)\n_**Remember to bring** your book._',
     '_I **remember writing** them down._ (I did it, and I remember)\n_I\'ll never **forget meeting** her._'],
  ], [1.3, 1.3]),
  '⚠ _I **forgot to post** the letter_ = the letter is in your pocket. _I **forgot posting** the letter_ = you posted it and forgot that you did. Two different days.',
  '**Practise:** _to_ + verb or _-ing_?  1 Try ______ (ask) somebody else — it might be quicker. (advice)  2 I tried ______ (open) it but it was locked.  3 Remember ______ (bring) your notebook tomorrow.  4 I remember ______ (come) here as a child.  5 Don\'t forget ______ (lock) the door.  6 Try ______ (write) it down before you say it.',
  '**Useful phrases:** I know that one. · only one of them worked, which is normal · That feels like cheating. · Nobody can hear your paper. · which is easy to say and easy to measure',
  '**Pronunciation.** 🔊 **Track 17.10** _try to_ runs together with a weak _to_: /traɪ tə/ — and in fast speech the two _t_ sounds become one: _try\'o be on time_. But _try_ + -ing has a clear break: _try / writing_. Listen and repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the problem on the card; B gives **three** things to try — all with _try_ + -ing — and says which one worked for them. A objects to one. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________. For __________.'],
  ['B', 'I know that one. I was that for __________.'],
  ['A', 'What did you do?'],
  ['B', 'Three things, and only one worked. Try __________.'],
  ['A', 'That feels like __________.'],
  ['B', 'It isn\'t. __________. Second: try __________.'],
  ['A', 'And the third?'],
  ['B', 'Try __________. That is the one that worked for me.'],
  ['A', 'Which should I start with?'],
  ['B', '__________. __________, and you have already done it.'],
]));
out.push(table(['Card A – problems', 'Card B – problems'], [
  ['you understand everything and say nothing', 'you forget every word within a week'],
  ['you cannot hear fast speech at all', 'you never finish anything you start reading'],
  ['you write well and speak badly', 'you study for three hours on Sunday and nothing in between'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** things to try. Which one would you actually do this week?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner your real English problem. They must give you **three** things to try, in _try_ + -ing form, and must say which worked for them and which they have only heard about. You choose one and say when you will start.'));
out.push(p('**b**  Swap. Then each of you say one thing you **remembered to do** every day for a month and one thing you **forgot to do** with it — like Lina and her thirty words.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina told Hiba three things to try. Try writing the first sentence down before you say it, because nobody can hear your paper. Try saying something in the first five minutes of any lesson, even good evening, because once you have spoken, speaking again is a smaller thing. And try not learning any new words for two weeks and finding out what you can do with the ones you have. The third is the one that worked for her. She says she tried to learn thirty words a week for a year: she remembered to write them down every single day and she forgot to use any of them. Hiba is starting with the second one, at the club on Saturday._'));
out.push(p('**Listener task:** write the one piece of advice you heard today that is the **opposite** of what everybody says.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**THREE THINGS TO TRY** — for the people who understand everything and say nothing',
  'This page is for one kind of member. If you are not that member, the advice on it will be useless to you, and that is not a failure of the advice.',
  '**1. Try writing the first sentence down before you say it.** Only the first one. It feels like cheating; it is not cheating, because nobody can hear your paper. After about three weeks you will stop needing it, and you will not notice the week you stopped.',
  '**2. Try saying something in the first five minutes of any lesson.** Anything. "Good evening" counts. Once you have spoken, speaking again is a smaller thing, and the longer you sit in silence the larger the first sentence becomes.',
  '**3. Try not learning any new words for two weeks.** Use the ones you have and find out what they can actually do. One member tried to learn thirty words a week for a year. She remembered to write them down every single day and she forgot to use a single one of them.',
  '**Only one of these will work for you.** That is normal and it is not a reason to do none of them. Start with number 2, this Saturday, at eleven.',
]));
out.push(item('1', 'Who is this page **not** for?'));
out.push(item('2', 'Why does the page say writing the first sentence is not cheating?'));
out.push(item('3', 'What happened to the member who learned thirty words a week?'));
out.push(writers([
  'An advice page: **who it is for** → **numbered things to try** → **why each one works** → **what to do first, with a day and a time**.',
  'Say who the page is **not** for, in the first paragraph. Advice addressed to everybody is addressed to nobody, and the reader who is not that person should be allowed to stop reading.',
  'Answer the **objection** inside the advice itself: _It feels like cheating; it is not cheating, because nobody can hear your paper._ The reader will raise it whether you answer it or not.',
  '⚠ End with **one** action, a day and a time. A page with three pieces of advice and no starting point produces three pieces of nothing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "three things to try" page for a problem you have solved (35 words or more).'));
out.push(p('**THREE THINGS TO TRY** — for the people who ______________   This page is for ______________. If you are not ______________, ______________.   **1. Try ______________.** It feels like ______________; it is not, because ______________.   **2. Try ______________.** Once you have ______________, ______________.   **3. Try ______________.** ______________.   **Only one of these will work for you.** Start with number ______________, on ______________, at ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying who the page is for',
  '_try_ + **-ing** for every piece of advice · _try **to**_ only for effort · _remember/forget **to**_ for things that must be done',
  'One objection answered inside the advice',
  'A last line with one action, a day and a time',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) of advice for somebody with the problem **you** had two years ago. Three things to try, one objection answered, one thing that worked for you and one that did not, and a starting point.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person it is for**. ★ _The one I am going to do._  ✓ _One piece of advice that is really an order (_try to_ instead of _try_ + -ing)._  ? _What happened when it didn\'t work?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the pages into one class booklet: **Three things to try.** Give it to the next level when they start. **Which page would have helped you most two years ago?**'));
out.push(hw('Write about **the advice you were given and did not take** (40+ words): what it was, why you did not take it, and whether you were right.'));

// ======================= 17.6 =======================
out.push(pb());
out.push(h2('17.6  Sorry — could you say that again?'));
out.push(p('**Function:** asking for help in a lesson   ·   **Grammar:** requests for clarification and repetition   ·   **Pronunciation:** polite rising intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many ways can this class ask somebody to repeat something? Ninety seconds, as many as possible, on the board. Then mark which are **polite** and which are **blunt**.'));
out.push(board('Sorry — could you say that again?', 'repeat · slower · spell · explain · check'));
out.push(p('**b**  Match the problem to the question. _I didn\'t hear it · I heard it but it was too fast · I don\'t know that word · I\'m not sure I understood · I don\'t know how to write it_ → _Could you spell that? · What does ___ mean? · Could you say that again? · Could you say it a bit more slowly? · Do you mean…?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is the most useful sentence in the lesson?   **A** "I don\'t understand."   **B** "Do you mean…?"   **C** "Could you repeat that?"'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say _"I don\'t understand"_ is not enough?   **2** What does she ask the class to do for the rest of the term?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  The most useful sentence', [
  ['Ms Huda', 'Stop. Four of you did not understand what I just said and none of you said anything. I watched it happen.'],
  ['Rami', 'I was going to ask at the end.'],
  ['Ms Huda', 'At the end is too late; at the end I have built four more sentences on top of it. Now — "I don\'t understand" is not enough. Why not?'],
  ['Hiba', 'Because you don\'t know which part.'],
  ['Ms Huda', 'Exactly. If you say "I don\'t understand" I have to say the whole thing again, the same way, and you will understand it the same amount. Tell me **which** part.'],
  ['Omar', 'Sorry — could you say the second part again?'],
  ['Ms Huda', 'Yes. Much better. And the most useful sentence in this room is not that one. It is "Do you mean…?"'],
  ['Lina', 'Do you mean we should guess?'],
  ['Ms Huda', '(laughs) Exactly that. You just did it. You guessed, you put your guess in front of me, and in four seconds you knew whether you were right. That is faster than any explanation I can give you.'],
  ['Nour', 'What if the guess is wrong?'],
  ['Ms Huda', 'Then I know exactly what you were thinking, which is worth more to me than a correct answer. For the rest of this term I want every one of you to say "do you mean" at least once a lesson. I am going to count.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for help — say _which part_**',
  table(['the problem', 'what to say'], [
    ['I didn\'t hear it', '_Sorry, **could you say that again**?_ · _Sorry, I missed that._'],
    ['too fast', '_**Could you say it a bit more slowly**, please?_'],
    ['one word', '_**What does** "assessment" **mean**?_ · _Sorry, what is "mind" here?_'],
    ['the spelling', '_**How do you spell** that?_ · _**Could you write it on the board**?_'],
    ['I am not sure I understood', '_**Do you mean**…?_ · _So **is it right that**…?_ · _Let me check — …_'],
    ['only part of it', '_Could you say **the second part** again?_'],
  ], [1, 2]),
  '⚠ _"I don\'t understand"_ stops the conversation. _"**Do you mean**…?"_ moves it forward by one step — and if your guess is wrong, the teacher learns more from your wrong guess than from your silence.',
  '⚠ **Say which part.** _Could you say **the second part** again?_ is worth five times _Could you say that again?_',
  '⚠ ~~Repeat please.~~ → _**Could you** say that again, **please**?_ The bare imperative is not rude in every language; in English it is.',
  '**For a word you need and do not have:** _What\'s the word for…?_ · _How do you say … in English?_ · _It\'s like a … but smaller._',
  '**Practise:** What do you say?  1 The teacher said a word you have never heard. 2 You heard it all but it was too fast. 3 You understood the first half only. 4 You think you understood but you are not sure. 5 You need to write a name down.',
  '**Useful phrases:** Sorry — could you…? · Do you mean…? · Let me check. · the second part · I missed that. · What\'s the word for…?',
  '**Pronunciation.** 🔊 **Track 17.12** These questions **rise** at the end. _Could you say that again?_ ↗ Falling makes a polite question sound impatient. Listen to both and hear the difference, then say each one twice — once rising, once falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A reads the instruction from the card **once, quickly and quietly**. B and C must get it completely right, using at least **four** different ways of asking. A may not repeat anything until asked properly. Change roles.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'Sorry — could you say __________ again?'],
  ['A', '__________.'],
  ['C', 'Could you say it a bit more slowly, please?'],
  ['A', '__________.'],
  ['B', 'What does __________ mean?'],
  ['A', '__________.'],
  ['C', 'How do you spell __________?'],
  ['B', 'So do you mean __________?'],
  ['A', '__________.'],
]));
out.push(table(['Card A – instructions', 'Card B – instructions'], [
  ['Bring the green form and two photographs to Room 9 before Thursday at four.', 'The assessment is on the 14th at half past five in the main hall, not Room 3.'],
  ['Write your name, your level and your telephone number on the top right.', 'Pay at the window, keep the receipt, and bring it with you on the first day.'],
  ['The club is at eleven on Saturdays and it is free if you are a student here.', 'Ring Mr Bassam on 0991 205 734 before Tuesday or your place will go.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the instruction exactly, and count how many different ways of asking you heard.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Everybody in the class must say _"Do you mean…?"_ at least once in the next nine minutes, about something real. Your teacher will say three complicated things. Count the _do you means_ on the board.'));
out.push(p('**b**  In pairs: tell your partner about the last time you did **not** ask, and what it cost you. Everybody has one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda stopped the lesson because four people did not understand something and nobody said anything, and she said she watched it happen. She says "I don\'t understand" is not enough, because she then has to say the whole thing again the same way and you understand it the same amount. The sentence she wants is "do you mean", and Lina used it by accident while asking what it was for. She says a wrong guess is worth more to her than silence, because it tells her what you were thinking. She is going to count them for the rest of the term. The last time I didn\'t ask, I went to the wrong room for three weeks._'));
out.push(p('**Listener task:** write the cost of the last time somebody in this room did not ask.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Ms Huda gives every new student. Answer the questions.'));
out.push(model([
  '**WHAT TO SAY WHEN YOU ARE LOST** — Room 12, keep this in your book',
  'You will be lost about four times a lesson. Everybody is. The students who get better fastest are not the ones who are lost least; they are the ones who say so soonest.',
  '**Say which part.** "I don\'t understand" makes me repeat everything the same way. "Could you say the second part again?" takes eight seconds and fixes it.',
  '**Guess out loud.** "Do you mean…?" is the most useful sentence in this room. If you are right, we move on. If you are wrong, I find out what you were thinking, which is worth more to me than a correct answer.',
  '**Ask at the time, not at the end.** By the end I have built four more sentences on top of the one you missed.',
  '**Four sentences for your book:** _Sorry — could you say that again? · Could you say it a bit more slowly, please? · What does ___ mean? · Do you mean…?_',
  '**And one you may not say:** "my English is bad". Not in this room, not this year.',
]));
out.push(item('1', 'According to the card, what makes some students get better fastest?'));
out.push(item('2', 'Why is a wrong guess useful to the teacher?'));
out.push(item('3', 'Why should you ask at the time rather than at the end?'));
out.push(writers([
  'A "what to say" card: **a true sentence that removes the shame** → **one rule per paragraph, in bold** → **the reason** → **the list to copy** → **the one thing not to say**.',
  'Open by telling the reader that the problem is **normal and universal**: _You will be lost about four times a lesson. Everybody is._ A card that starts with advice assumes the reader has already admitted the problem, and most have not.',
  'Give the **cost in seconds**: _takes eight seconds and fixes it_. People do not ask because they think asking is expensive. Show them the price.',
  '⚠ Finish with the list they can copy into a notebook. A card full of principles and no sentences gives the reader nothing to say at half past five on a Thursday.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what to say when" card for a situation you know well (35 words or more) — a lesson, a shop, a clinic, a first day at work.'));
out.push(p('**WHAT TO SAY WHEN ______________**   You will ______________ about ______________. Everybody does. The people who ______________ are not the ones who ______________; they are the ones who ______________.   **______________.** ______________ makes ______________. ______________ takes ______________ and fixes it.   **______________.** ______________.   **Four sentences for your pocket:** ______________   **And one you may not say:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and a first line saying the problem is normal',
  '_Could you…?_ / _Do you mean…?_ — polite question forms, not bare imperatives',
  'At least one cost in seconds, minutes or weeks',
  'A list of four sentences the reader can copy, and one thing not to say',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full card (60 words or more) for a place where **you** were lost and nobody told you what to say: a first lesson, a first day, an office, a hospital, a border, a new city. Four sentences they can use, and one thing not to say.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody about to walk into that room for the first time**. ★ _The line that would calm me._  ✓ _One sentence I still could not say out loud._  ? _What happens if I ask and they are impatient?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Each student copies the **four sentences** from somebody else\'s card into the back of their notebook. **Whose four did you take?**'));
out.push(hw('Write about **the last time you did not ask** (40+ words): what you did not ask, why, what it cost, and the sentence you would use now.'));

// ======================= 17.7 =======================
out.push(pb());
out.push(h2('17.7  Review & Mediate: What does the leaflet say?'));
out.push(p('**Function:** explaining a course leaflet and a timetable   ·   **Recycling:** Units 1–17   ·   **Exam practice:** A2 Key Reading Part 5, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I want finish it this year.  **2** I enjoy to read in English.  **3** She is good at to speak.  **4** I find hard to start.  **5** Try to write it down — it might help. _(what should the form be?)_  **6** Repeat please.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the leaflet for the centre\'s new term.'));
out.push(box(null, [
  '**AL-YASMIN LANGUAGE CENTRE · SPRING TERM — 12 weeks from 8 March**',
  '**General English.** A1 to B1. Two evenings a week, 17:30–19:00. **380,000 SYP** a term. Books not included (**45,000** each).',
  '**Conversation Club.** Saturdays 11:00–12:00. **Free** for current students. **20,000 SYP** a term for everybody else. No booking — come when you can.',
  '**Exam preparation (A2 Key).** Saturdays 14:00–16:00, **8 weeks from 22 March**. **260,000 SYP**. You must already be at A2. Ask your teacher before you pay.',
  '**Placement test.** Free, Tuesdays and Thursdays at 16:00. You do **not** need a test if you finished a level here last term.',
  '**Paying.** Full payment before the second lesson, or two payments — half before the first lesson and half before week 6. Ask at reception; do not pay a teacher.',
  '**Changing level.** Free in the first two weeks. After that, half the fee again.',
  '**Missed lessons.** If the centre cancels, the lesson is added at the end. If you miss four or more, there is no certificate.',
  '**Certificates** are given in the last week. Your name is printed as it is on your ID — check it in week 1.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Nour explains the leaflet to her cousin, who does not read English. Which course does the cousin decide on, and what does Nour tell her to do first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  Explaining the leaflet', [
  ['Cousin', 'It\'s all numbers. Which one is mine?'],
  ['Nour', 'There are three courses and one test. Let me do the courses first and then the money, because the money is the same for everybody and you only need to hear it once.'],
  ['Cousin', 'Go on.'],
  ['Nour', 'General English, twice a week in the evening, half past five to seven, twelve weeks. That is the main one. Then the Conversation Club on Saturday mornings, one hour, and then an exam course on Saturday afternoons — but you can\'t do that one yet, it says you must already be at A2.'],
  ['Cousin', 'How do I know what I am?'],
  ['Nour', 'That is the test, and it\'s free. Tuesdays and Thursdays at four. You need it, because you haven\'t studied here before.'],
  ['Cousin', 'And the cost?'],
  ['Nour', 'Three hundred and eighty for the term, and the books are not in that — forty-five each. Here is the part people miss: you don\'t have to pay it all at once. Half before the first lesson and half before week six.'],
  ['Cousin', 'Nobody tells you that.'],
  ['Nour', 'It is on the paper, in the small part. And one more: do not give money to a teacher. It says pay at reception. That line is there because something happened once.'],
  ['Cousin', 'Then the main course. What do I do first?'],
  ['Nour', 'The test, Thursday at four. Everything else waits for that. And in week 1 look at how they have spelled your name, because the certificate copies your ID and nobody checks it but you.'],
]));
out.push(sp());
out.push(box('Language box – explaining a leaflet with courses, times and money', [
  'Say the **shape** first and promise an order: _there are three courses and one test — the courses first, then the money, because the money is the same for everybody_.',
  'Rule out what is **not for them** early: _you can\'t do that one yet — it says you must already be at A2_. A listener comparing four things they cannot all have gets lost.',
  'Give the **total and the extra** together: _three hundred and eighty, and the books are not in that — forty-five each_. The hidden extra is the thing people are angry about later.',
  'Find the line **people miss** and name it as such: _here is the part people miss — you don\'t have to pay it all at once_.',
  'Explain an odd-sounding rule by what it protects: _do not give money to a teacher. That line is there because something happened once._',
  'End with **one action, with a day and a time**, and one thing to check later: _the test, Thursday at four_ · _in week 1, check your name_.',
  '**Useful phrases:** Let me do … first and then … · Which one is mine? · You can\'t do that one yet. · Here is the part people miss. · It is on the paper, in the small part. · Everything else waits for that.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the leaflets below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end with one action and a time. Change roles with the other leaflet.'));
out.push(table(['Leaflet A – a computer training centre', 'Leaflet B – a driving school'], [
  ['BASIC SKILLS · 6 weeks · Mon & Wed 18:00–19:30', 'LESSONS · 60 minutes · from 08:00 to 18:00'],
  ['OFFICE SKILLS · 8 weeks · Sat 10:00–13:00', 'PACKAGE OF 10 · 15% less than single lessons'],
  ['290,000 SYP · materials included', 'You must bring your medical paper to the first lesson.'],
  ['You must be able to use a keyboard. Short test, free.', 'Test fee is not included and is paid at the centre, not here.'],
  ['Half now, half in week 4.', 'Cancel a lesson 24 hours before, or you pay for it.'],
  ['Certificate if you attend 6 of 8 sessions.', 'If you fail, the next ten lessons are 20% less.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **total cost**, the **one thing not included**, and the **one condition** that would stop you.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** leaflet, price list or timetable in your own life — a course, a gym, a clinic, a nursery, a service, a phone contract. Explain it to your partner so completely that they could sign up tomorrow. They must ask: _what is not included?_, _what can I not do yet?_, _can I pay in parts?_ and _what do I do first?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Omar explained the leaflet from the computer centre. There are two courses: a six-week basic one on Monday and Wednesday evenings, and an eight-week office course on Saturday mornings. The basic one is two hundred and ninety thousand and the materials are included, which he said is unusual and is the reason he would choose it. You cannot do either without being able to use a keyboard, and there is a short free test for that. You can pay half now and half in week four, which is in the small print. And you only get the certificate if you come to six of the eight sessions, so missing three ends it. I decided I would do the Saturday one, because I cannot do two evenings a week, and that I would ask whether the attendance rule is six out of eight for that one too, because he could not tell me and the paper only says it once._'));
out.push(p('**Listener task:** did they tell you what you **cannot** do before telling you the prices? What is not included?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 5)', 7));
out.push(p('Read the text and write **one** word for each gap. Write only one word.'));
out.push(model([
  '**A LETTER TO THE NEXT GROUP** · by Nour',
  'I have just finished **(1)** ______ training course that Mr Jamil runs, and he asked me to write something for the people starting in May.',
  'The first thing: do not say "everything" when he asks you what you want **(2)** ______ learn. He will wait, and the waiting is worse than the question.',
  'The second thing. I thought I was bad **(3)** ______ writing reports. I am not. I find it hard to begin them, which is a different problem, and I only found that out because he asked me the question twice. If you are honest in week three you will save yourself five weeks.',
  'The third thing: you will enjoy **(4)** ______ more than you expect. I did not want to do this course and I have not missed one evening.',
  'And the last thing. Ask. Every time. I did not ask in week one **(5)** ______ I did not want to look slow, and I spent two evenings doing something nobody wanted. The people who get better fastest are not the ones who understand most. They are the ones **(6)** ______ say so soonest.',
]));
[
  '**1**  the course Mr Jamil runs → _I have just finished ___ training course_',
  '**2**  _what you want ___ learn_',
  '**3**  _I thought I was bad ___ writing reports_',
  '**4**  _you will enjoy ___ more than you expect_',
  '**5**  _I did not ask in week one ___ I did not want to look slow_',
  '**6**  _they are the ones ___ say so soonest_',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend who wants to join the centre (35 words or more). Use the leaflet above.'));
out.push(p('Hi ______!   There are ______________ courses. The main one is ______________, ______________ a week, from ______________ to ______________, for ______________ weeks.   It costs ______________, but the books ______________ — ______________ each. You don\'t have to ______________: you can ______________.   You can\'t do ______________ yet, because ______________.   First, do ______________ — it\'s ______________ and it\'s on ______________ at ______________.   And don\'t ______________; it says ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  'verb + **to** / verb + **-ing** correct every time (_want to join_ · _enjoy learning_ · _good at speaking_)',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: what the courses are · what it costs and what is not included · what to do first',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** wants to start learning Arabic and has asked you for advice.',
  'Write an email to Sam.  In your email:  •  say **one thing he should try**  •  say **one thing you find hard** about learning a language  •  tell him **one thing you enjoy** about it.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I want ___ this level in June.   a) finish   b) to finish   c) finishing',
  '2  I enjoy ___ in English.   a) to read   b) reading   c) read',
  '3  She doesn\'t mind ___ late.   a) to stay   b) staying   c) stay',
  '4  I started ___ it at school.   a) learning   b) to learn   c) both a and b',
  '5  He\'s good at ___ faults.   a) find   b) to find   c) finding',
  '6  I find ___ hard to begin.   a) it   b) that   c) —',
  '7  ___ writing the first sentence down — it might help.   a) Try to   b) Try   c) You try to',
  '8  Sorry — ___ say that again?   a) could you   b) you could   c) repeat',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 17.14** Ms Huda says what each person has decided about their learning. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they have decided'], [
  ['1  Nour ___', 'A  is going to say something in the first five minutes of every lesson'],
  ['2  Hiba ___', 'B  is going to practise one thing when nobody is watching'],
  ['3  Lama ___', 'C  is going to start the writing on a fixed day each week'],
  ['4  Lina ___', 'D  is going to stop learning new words for a while'],
  ['5  Omar ___', 'E  is going to ask a question every time instead of waiting'],
  ['', 'F  is going to change to a different level'],
  ['', 'G  is going to stop coming on Saturdays'],
], [1, 2]));
out.push(dlg('Track 17.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is what everybody has decided this month. Nour found out on her course that she is not bad at writing reports — she finds it hard to begin them, so she and her trainer have fixed a day: every report starts on a Tuesday, whether she feels like it or not. Hiba has decided that she will say something, anything, in the first five minutes of every lesson, even if it is only good evening, because once you have spoken, speaking again is smaller. Lama hates using the till in front of customers, so Mrs Mona has given her four Tuesday mornings in an empty shop. Lina told us the thing that worked for her was the opposite of all the advice: she is not going to learn any new words for a fortnight and is going to find out what she can do with the ones she has. And Omar says he is simply going to ask, at the time, every time, instead of deciding to ask at the end and never asking.'],
]));
out.push(p('**C  Writing.** Write a short page about something you are learning (40+ words): what you want to do with it, what you enjoy doing, what you find hard to do, and the one thing you are going to try.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _want / hope / need / decide_ + **to** + verb',
  '☐ use _enjoy / don\'t mind / finish / practise_ + **-ing**',
  '☐ say when I started, with _start_ or _begin_ + either form',
  '☐ say what I am good at and bad at, with **-ing**',
  '☐ tell the difference between being bad at something and finding it hard',
  '☐ give advice with _try_ + **-ing**',
  '☐ ask for help by saying **which part** I did not understand',
  '☐ explain a course leaflet to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 18 – TECHNOLOGY AND ONLINE LIFE', [
  'Unit 17 was about learning. Unit 18 is about the thing that everybody in this class has to do and nobody has been taught: asking **how** to do something online, and explaining it to somebody else.',
  'Before the next lesson: find **one** thing on your telephone that you have never understood and have never asked anybody about. Bring the telephone.',
  '**And after Unit 18 comes the Mid-Book Test** — Units 13 to 18. It is in this book, after Unit 18.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
