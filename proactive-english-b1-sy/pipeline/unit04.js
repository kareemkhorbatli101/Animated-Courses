// Proactive English B1 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 4  Experience and Evidence'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  say what you have done',
  '**4.2**  say how long you have been doing it',
  '**4.3**  say how long with a number or a point',
  '**4.4**  draw a conclusion from evidence',
  '**4.5**  describe a skill you are building',
  '**4.6**  ask about somebody\'s experience at interview length',
  '**4.7**  Review & Mediate: explain a CV at B1',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The tense that comes forwards.** Unit 3 put a second past **behind** the first. Unit 4 does the opposite: everything in it arrives at **now**. _I have opened forty-one pharmacies_ and _I have been opening pharmacies for eleven years_ are both about today.',
  '**The continuous one you were promised.** Six sentences in Unit 3 contained _had been_ + _-ing_ and nobody named it. It is named in 4.2, beside the present perfect continuous, where it belongs.',
  '**Fares brings his CV.** Eleven years of work on one page, and Ms Huda says the page does not contain one piece of evidence. It is rebuilt across the unit and defended in 4.7.',
], C.lyellow, C.orange));

// ======================= 4.1 =======================
out.push(pb());
out.push(h2('4.1  What I have done'));
out.push(p('**Function:** saying what you have done   ·   **Grammar:** the present perfect simple, for the result   ·   **Pronunciation:** _\'ve_ and the participle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the **three things you have done** from your homework. Your teacher writes them on the board and puts a ring round every one that has a **number** in it. Count the rings. In most rooms it is fewer than half.'));
out.push(board('I\'ve opened forty-one pharmacies.', 'have / has + past participle'));
out.push(p('**b**  Which of these tells you anything? **1** _I have a lot of experience._  **2** _I have worked in sales for eleven years._  **3** _I have opened forty-one new accounts._  **4** _I am responsible for three governorates._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is wrong with the CV?   **A** the English   **B** the order   **C** there is no evidence in it'));
out.push(p('**b**  Listen again. **1** What does Fares\' CV say he is responsible for?   **2** What number does he produce when she pushes him, and how does he know it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  Eleven years on one page', [
  ['Fares', 'I have brought my CV. I have been sending it out since February and I have had two answers, and both of them were no.'],
  ['Ms Huda', 'Read me the work section.'],
  ['Fares', '"Medical representative, 2015 to present. Responsible for sales in three governorates. Extensive experience of the pharmaceutical market."'],
  ['Ms Huda', 'And what have you done?'],
  ['Fares', 'That is what I have done.'],
  ['Ms Huda', 'No. That is what you **are**. _Responsible for_ is a chair you sit in. _Extensive experience_ is a thing anybody can type. I am asking what you have done.'],
  ['Fares', '…I have sold medicines.'],
  ['Ms Huda', 'To how many places that were not buying from you when you started?'],
  ['Fares', '(after a pause) Forty-one.'],
  ['Lubna', 'Forty-one?'],
  ['Fares', 'Forty-one pharmacies that had never ordered from us. I know the number because I keep the list in the back of the order book, and I have kept it since the first one, which was in Jaramana in the October.'],
  ['Ms Huda', 'You have kept a list of forty-one for eleven years and you have put the words "extensive experience" on the page instead. Why?'],
  ['Fares', 'Because the number sounds like boasting and the words sound like a CV.'],
  ['Ms Huda', 'The number is a fact. Facts cannot boast. Give me the sentence.'],
  ['Fares', 'I have opened forty-one pharmacies that had never ordered from us, in eleven years, and I have the list.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the present perfect simple: _have_ / _has_ + past participle**',
  table(['you say', 'and it means'], [
    ['_I **have opened** forty-one pharmacies._', 'finished actions, counted — and the result is true now'],
    ['_She **has written** eleven reports this year._', 'the number is the point, not the dates'],
    ['_**Have** you **sent** it yet?_', 'asking about now, not about a day'],
    ['_He **has had** two answers._', 'and both arrived; the asking is over'],
  ], [2.1, 2.5]),
  '**It is a _present_ tense.** It says what is **true now** because of what you did. That is why it has no date in it: _I have opened forty-one_ (true now) against _I opened four in 2019_ (a finished year, past simple).',
  '⚠ ~~I have opened forty-one pharmacies in 2019.~~ A finished time takes the past simple: _I **opened** four in 2019._ The moment you say _in 2019_, _last year_ or _when I started_, the perfect goes.',
  '⚠ **A chair is not an achievement.** _Responsible for three governorates_ · _extensive experience_ · _involved in_ · _part of a team that_ — none of these says what you did. Replace each one with a verb and a number.',
  '⚠ ~~I have a lot of experience.~~ is true of everybody over thirty and means nothing on a page. Count something.',
  '**The participle, not the past simple:** _I have **done** · **seen** · **written** · **taken** · **given** · **spoken** · **sold** · **kept** · **sent** · **brought** · **chosen** · **begun**._ ⚠ ~~I have did · I have wrote · I have went.~~',
  '**Useful phrases:** that is what you are, not what you have done · a chair you sit in · the number sounds like boasting and the words sound like a CV · facts cannot boast · and I have the list.',
  '**Practise:** Turn each chair into an action with a number.  1 _Responsible for the stock room._  2 _Involved in teacher training._  3 _Extensive experience of customer service._  4 _Part of a team that improved delivery times._  5 _Familiar with Excel._',
  '**Pronunciation.** 🔊 **Track 4.2** _have_ almost disappears and the **participle** carries the sentence: _I\'ve **OPENED** forty-one_ · _she\'s **WRIT**ten eleven_. After a consonant _\'ve_ is barely a sound at all. Listen to eight and write only the participle.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the CV line from the card. B asks _and what have you done?_ until A produces a verb and a number. Three pushes maximum, then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'That is what you are. What have you done?'],
  ['A', 'I have __________.'],
  ['B', 'How many?'],
  ['A', '__________.'],
  ['B', 'Say the whole sentence.'],
  ['A', 'I have __________ __________, and I have __________.'],
]));
out.push(table(['Card A – the CV lines', 'Card B – the CV lines'], [
  ['Responsible for the stock room.', 'Involved in staff training.'],
  ['Extensive experience of customer service.', 'Part of a team that improved delivery times.'],
  ['Familiar with office software.', 'Strong communication skills.'],
  ['Duties included dealing with suppliers.', 'Assisted with the monthly accounts.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the verb and the number for each line. Then say which card line was hardest to turn into a fact — it is nearly always _strong communication skills_, and the reason is worth thirty seconds.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say three things you have done, each with a verb and a number, and each one true today. Your partner may only ask _how many_ and _how do you know_.'));
out.push(p('**b**  Swap. Then each of you say which of your three you have never told anybody, and why not.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares brought his CV. He has been sending it out since February, he has had two answers and both were no. The work section says "responsible for sales in three governorates" and "extensive experience of the pharmaceutical market", and when Ms Huda asked what he had done he said that was what he had done. She said no — that is what he is: responsible for is a chair you sit in and extensive experience is a thing anybody can type. So she asked how many places were not buying from him when he started, and after a pause he said forty-one. Forty-one pharmacies that had never ordered from them, and he knows the number because he keeps the list in the back of the order book and has kept it since the first one, which was in Jaramana in the October. She said he has kept a list of forty-one for eleven years and has typed "extensive experience" instead, and asked why. He said because the number sounds like boasting and the words sound like a CV. She said the number is a fact and facts cannot boast._'));
out.push(p('**Listener task:** write the number somebody in this room has been keeping and has never put on a page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the work section of Fares\' CV, before and after. Answer the questions.'));
out.push(model([
  '**MEDICAL REPRESENTATIVE** · 2015 to present · Dar al-Shifa Pharmaceuticals, Damascus',
  '**Before.** Responsible for sales in three governorates. Extensive experience of the pharmaceutical market. Strong communication skills and the ability to work under pressure. Duties included visiting pharmacies, taking orders and dealing with complaints.',
  '**After.** I have opened 41 pharmacies that had never ordered from this company, across Damascus, Rural Damascus and Suwayda, and I have kept the dated list since the first one in October 2015. I have trained 6 new representatives, 4 of whom are still in the job. I have taken over two areas that another representative had given up, and in both of them the monthly order is now larger than it was when he left. In eleven years I have lost 3 accounts, and I know which three and why.',
  '**What is different.** The facts were all in the order book. I had not read my own order book as a page about myself. The second version has four numbers in it and the first has none, and the only thing I added was the counting.',
]));
out.push(item('1', 'Which version is longer, and which one took longer to write?'));
out.push(item('2', 'Why does he include the three accounts he has lost?'));
out.push(item('3', 'What does he say was the only thing he added?'));
out.push(writers([
  'A work section that is evidence: **the job, the dates, the place** → **what you have done, in counted sentences** → **one thing that went wrong, counted too** → **and no adjectives about yourself anywhere**.',
  'Every sentence starts _I have_ + a verb. Not _I was responsible for_, not _my duties included_, not _I am a person who_. The verb does the work and the number proves it.',
  'Put in the **loss**: _I have lost 3 accounts, and I know which three and why._ A page of only successes is read as a page of claims; one counted failure makes the other four numbers credible.',
  '⚠ No adjectives about yourself. _Hard-working · reliable · motivated · dynamic_ — delete all of them and let the numbers be read. If a number is not there, the adjective was hiding the fact that you had not counted.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Rewrite one section of your own CV, or of a page about yourself, as evidence (50 words or more).'));
out.push(p('**______________** · ______________ · ______________   I have ______________ ______________, and I have ______________ since ______________. I have ______________ ______________, ______________ of whom ______________. I have taken over ______________, and ______________. In ______________ years I have ______________ ______________, and I know ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_I have_ + participle, with a **number**, in every sentence',
  'No _responsible for_, no _duties included_, no _experience of_',
  'No adjective describing you anywhere on the page',
  'One counted thing that went wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their counted-loss sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page about yourself (100 words or more) — for a job, a course, a committee or nobody. Only counted sentences. If a section cannot be counted, leave it out and write underneath what you would have to start recording this month in order to count it next year.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody holding thirty of them**. ★ _The number I would ask about at interview._  ✓ _One adjective you have left in, or one sentence with no number._  ? _How do you know that number?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who found a number they already had?** Most of the room. Then: how long have you had it? Collect three answers and expect years — this is the same finding as Unit 3.5 arriving from the other direction.'));
out.push(hw('Count something about your own work that you have never counted, using records you already keep (50+ words). Write the number and the sentence it goes in. If the record does not exist, write what you will start keeping on Monday.'));

// ======================= 4.2 =======================
out.push(pb());
out.push(h2('4.2  What I have been doing'));
out.push(p('**Function:** saying how long you have been doing it   ·   **Grammar:** the present perfect continuous — and _had been_ + _-ing_, at last   ·   **Pronunciation:** _\'ve been_ reduced to almost nothing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the **one thing you have been doing that is not finished** from your homework. Your teacher writes six on the board. Then the class decides which of the six will ever be finished.'));
out.push(board('I\'ve been drawing the same building for two years.', 'have been + -ing'));
out.push(p('**b**  Finished or not finished? **1** _I have written three letters._  **2** _I have been writing letters all morning._  **3** _She has read the report._  **4** _She has been reading the report._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Lubna say she has nothing for her page?   **A** she is too young   **B** nothing she does is finished   **C** she has not kept a record'));
out.push(p('**b**  Listen again. **1** How long has she been drawing the same building, and how many versions are there?   **2** What does Ms Huda say the two tenses are for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  Nothing of mine is finished', [
  ['Lubna', 'I cannot do the page. Fares has forty-one of something. I have nothing. I am twenty-three and I have finished nothing in my life.'],
  ['Ms Huda', 'What have you been doing?'],
  ['Lubna', 'Drawing. I have been drawing the same building for two years — a market hall for the empty ground behind the station, which nobody has asked me for and which will never be built.'],
  ['Ms Huda', 'How many versions?'],
  ['Lubna', 'Nineteen.'],
  ['Rasha', 'Nineteen drawings of one building?'],
  ['Lubna', 'Nineteen, and the nineteenth is the only one where the water works. That is two years of being wrong about water.'],
  ['Ms Huda', 'Then you have two sentences and they are not the same sentence. _I have been drawing a market hall for two years_ — that one is about the two years and it is not finished. _I have produced nineteen versions of it, and in the nineteenth the drainage works_ — that one is finished, and counted, and it is a fact about today.'],
  ['Lubna', 'The second one sounds like somebody else.'],
  ['Ms Huda', 'It sounds like somebody who has done something, which is what you have been avoiding saying. The continuous one is for the **time you have put in**. The simple one is for **what exists now because of it**. Most people only ever use one of them, and it is always the wrong one for the situation they are in.'],
  ['Lubna', 'Which one is wrong for me?'],
  ['Ms Huda', 'You have been giving people the years and keeping the nineteen to yourself. Fares has been doing the exact opposite — he has been giving people a chair and keeping forty-one to himself. You are the same case twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _have been_ + _-ing_: the time you have put in**',
  table(['simple — what exists now', 'continuous — the time put in'], [
    ['_I **have produced** nineteen versions._', '_I **have been drawing** it for two years._'],
    ['_I **have written** three letters._', '_I **have been writing** letters all morning._'],
    ['_She **has read** the report._', '_She **has been reading** the report._ (not finished)'],
    ['_He **has had** two answers._', '_He **has been sending** it out since February._'],
  ], [2.3, 2.3]),
  '**The simple one counts; the continuous one measures.** If there is a **number of things**, use the simple. If there is a **length of time** and no finished product, use the continuous.',
  '**Both of them arrive at now.** _I have been drawing it for two years_ means I am still drawing it this evening. _I have produced nineteen versions_ means nineteen exist on my table tonight.',
  '⚠ **State verbs do not take the continuous**, even here: _I **have known** her for ten years_ · _I **have had** this job since 2015_ · _I **have been** here for an hour_. ⚠ ~~I have been knowing · I have been having.~~',
  '**And the one you were promised in Unit 3: _had been_ + _-ing_.** Step the same idea back behind a past: _the seal **had been splitting** since the Monday_ · _she **had been standing** for twenty minutes_ · _I **had been doing** the account alone for six days_. Same meaning, one shelf further back. You have already read six of these.',
  '⚠ ~~I had been drawing it for two years and then I finished.~~ If it finished, the past perfect **simple** is usually what you want. The continuous is for what was still going on.',
  '**Useful phrases:** that is two years of being wrong about water · it sounds like somebody else · you have been giving people the years and keeping the nineteen to yourself · you are the same case twice.',
  '**Practise:** Say each one twice, simple and continuous.  1 teach / this syllabus  2 live / in this street  3 learn / to use the projector  4 look for / a flat  5 repair / telephones',
  '**Pronunciation.** 🔊 **Track 4.4** _I have been_ becomes one short sound, /aɪvbɪn/ or less, and everything rides on the _-ing_ word: _I\'vebin **DRAW**ing it for two years._ Listen to eight and write **simple** or **continuous**; the only clue is whether you can hear an _-ing_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the activity from the card. B says it **twice** — once with the time put in, once with what exists now — and then says which of the two they would put on a page and why. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I have been __________ for __________.'],
  ['A', 'And what exists?'],
  ['B', 'I have __________ __________.'],
  ['A', 'Which one goes on the page?'],
  ['B', 'The __________ one, because __________.'],
]));
out.push(table(['Card A – the activities', 'Card B – the activities'], [
  ['drawing / designing something', 'teaching the same subject'],
  ['learning English', 'keeping a record of something'],
  ['looking for work or a flat', 'repairing or mending things'],
  ['bringing up children', 'saving for something'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write both versions of each activity. Then the hard question: which pairs produced a continuous sentence and **no** simple one? Those are the activities where nothing has been counted yet, and there are usually two.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say the thing you have been doing longest that has nothing finished in it. Give the years. Then let your partner find the countable thing inside it — they may ask up to four questions.'));
out.push(p('**b**  Swap. Then each of you say whether you are a Lubna or a Fares: do you give people the years and keep the number, or give them a chair and keep the number?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna said she cannot do the page because Fares has forty-one of something and she has nothing, and she is twenty-three and has finished nothing in her life. Ms Huda asked what she has been doing. She has been drawing the same building for two years — a market hall for the empty ground behind the station, which nobody has asked her for and which will never be built — and there are nineteen versions. The nineteenth is the only one where the water works, which she says is two years of being wrong about water. Ms Huda said that is two sentences and they are not the same sentence: I have been drawing a market hall for two years is about the time and is not finished, and I have produced nineteen versions and in the nineteenth the drainage works is finished, counted and true today. Lubna said the second one sounds like somebody else. Ms Huda said it sounds like somebody who has done something, which is what she has been avoiding saying — and that she has been giving people the years and keeping the nineteen to herself, while Fares has been giving people a chair and keeping forty-one to himself. The same case twice._'));
out.push(p('**Listener task:** write the countable thing hidden inside somebody else\'s unfinished years.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lubna writes for her page. Answer the questions.'));
out.push(model([
  '**THE MARKET HALL** · Lubna Sweidan · fourth-year architecture, Damascus',
  'I have been designing one building for two years. It is a covered market hall for the waste ground behind the station in Qaboun. Nobody has commissioned it, nobody is going to build it, and I have been working on it for roughly six hours a week since the October of my second year.',
  'This is what exists. I have produced nineteen complete versions. I have drawn the roof forty-one times, because the roof is the whole problem — a market needs shade, light and air moving, and any two of those are easy. I have taken the drainage apart and rebuilt it in six of the nineteen, and in the nineteenth it finally works, which means water leaves the site in under four minutes in the heaviest rain this city has had since 2009.',
  'I have also measured the ground myself, twice, with a borrowed tape, because the only drawing of that site at the university is from 1974 and is wrong by about two metres.',
  'What I have been doing is failing at a roof for two years. What I have done is nineteen versions, a drainage system that works, and a correct survey of a piece of ground that the city believes it already has.',
]));
out.push(item('1', 'How many hours a week, and since when?'));
out.push(item('2', 'What two things does she have that the university does not?'));
out.push(item('3', 'What is the difference between her last two sentences?'));
out.push(writers([
  'A page about unfinished work: **the years, plainly, with the hours** → **what exists, counted** → **the one thing nobody else has** → **and the last paragraph that says both sentences next to each other**.',
  'Give the **rate** as well as the span: _roughly six hours a week since the October of my second year_. A span on its own can be two years of nothing; a rate cannot.',
  'Count the failures as work: _I have drawn the roof forty-one times_ · _I have taken the drainage apart in six of the nineteen_. Nobody else will count them for you and they are the largest true number on the page.',
  '⚠ End with the two sentences side by side — _what I have been doing is… What I have done is…_ It is the shape of the whole unit and it is the sentence an interviewer remembers.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own page about something unfinished (50 words or more).'));
out.push(p('I have been ______________ for ______________. It is ______________. Nobody has ______________, and I have been working on it for about ______________ a week since ______________.   This is what exists. I have ______________ ______________. I have ______________ ______________ times, because ______________. I have ______________ in ______________ of the ______________, and ______________.   I have also ______________, because ______________.   What I have been doing is ______________. What I have done is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Continuous for the time put in; simple for what exists',
  'A rate as well as a span — hours a week, not just years',
  'The failures counted as work',
  'The two sentences side by side at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last two sentences only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about the thing you have been doing longest with nothing finished in it — a design, a study, a house, a child, a shop, a language. The years, the rate, what exists, the thing nobody else has, and the two sentences.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody deciding whether to give them something to do**. ★ _The counted failure that convinced me._  ✓ _One continuous sentence that should be a simple one._  ? _What exists tonight, on your table, because of those years?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Hands up: who is a Lubna and who is a Fares?** Count both. Then one line each from two of each, and notice that the Lubnas are usually the younger half of the room and the Fareses the older.'));
out.push(hw('Write the two sentences — _what I have been doing is…_ and _what I have done is…_ — for the thing you have been doing longest (50+ words), and say which one you have been giving people.'));

// ======================= 4.3 =======================
out.push(pb());
out.push(h2('4.3  For nine years, since 2017'));
out.push(p('**Function:** saying how long with a number or a point   ·   **Grammar:** _for_ · _since_ · _all day_ · _lately_   ·   **Pronunciation:** the weak forms of _for_ and _since_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says a span — _nine years_ — and the class turns it into a point: _since 2017_. Then the other way round. Fast, round the room, and the arithmetic is part of it.'));
out.push(board('I\'ve been driving that route for nine years.', 'for + how long · since + when'));
out.push(p('**b**  _for_ or _since_? **1** ___ January  **2** ___ six weeks  **3** ___ I left school  **4** ___ ages  **5** ___ the war  **6** ___ a long time'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Tareq working out?   **A** how far he drives   **B** how long he has driven the same road   **C** how much he earns'));
out.push(p('**b**  Listen again. **1** How many times has Tareq driven the Harasta road, roughly?   **2** What does Rasha say about _lately_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  For nine years, twice a day', [
  ['Ms Huda', 'Tareq. How long have you been driving that route?'],
  ['Tareq', 'Since 2017. Nine years in the February.'],
  ['Ms Huda', 'Twice a day?'],
  ['Tareq', 'Twice a day, six days a week, and I have had eleven days off ill in nine years.'],
  ['Jad', 'That is about five and a half thousand times.'],
  ['Tareq', 'Five thousand five hundred and something. I have never once worked it out and I am not sure I wanted to.'],
  ['Umm Kinan', 'Why not?'],
  ['Tareq', 'Because it is the same eleven kilometres. If somebody asks me what I have done, I have driven eleven kilometres five and a half thousand times, and that is either a very large number or nothing at all depending on which way you hold it.'],
  ['Rasha', 'I have been on nights since January, which is nine months, and lately it has been getting harder — and I notice that _lately_ is the only word I have for it.'],
  ['Ms Huda', 'Say more about _lately_.'],
  ['Rasha', 'It means "for a while and I have not counted". I have been saying "lately" about the nights since about March. If I had been counting I would know whether it is the nights or whether it is March.'],
  ['Tareq', 'And I have been counting nothing for nine years, so I cannot tell you whether the road has got worse or whether I have.'],
  ['Ms Huda', 'Both of you have just said the same thing, which is that _lately_ and _for nine years_ are the two ways of not knowing. Put a number in both of them before next week.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how long**',
  table(['you say', 'what follows it'], [
    ['_**for** nine years · **for** six weeks · **for** ages_', 'a **length** of time'],
    ['_**since** 2017 · **since** January · **since** I left school_', 'a **point** it started'],
    ['_**all day** · **all week** · **all my life**_', 'a whole period, no _for_'],
    ['_**lately** · **recently** · **these days**_', 'a vague recent span — and a warning'],
  ], [2.3, 2.3]),
  '**Every span is also a point and every point is also a span.** _for nine years_ = _since 2017_. Saying both is the most useful habit in this cycle: _since 2017 — nine years in the February_.',
  '⚠ ~~I live here since two years.~~ → _I **have been living** here **for** two years_ / _**since** 2024_. This is the commonest single mistake carried up from A2, and it is wrong twice: the tense and the preposition.',
  '⚠ ~~for last January~~ · ~~since six weeks~~ · ~~for since 2017~~. One or the other, never both.',
  '⚠ ~~all the day~~ → _all day_. ⚠ ~~since ages~~ → _for ages_.',
  '**_lately_ is a confession.** It means "for a while, and I have not counted". It is perfectly good English and it is also a signal: whenever you hear yourself say it about something that matters, that is the thing to start counting.',
  '**Useful phrases:** nine years in the February · either a very large number or nothing at all depending on which way you hold it · I have been saying "lately" about it since March · the two ways of not knowing.',
  '**Practise:** Say each one as a span and as a point.  1 your current job  2 this street or this city  3 learning English  4 the longest thing you have been doing  5 something that has been getting worse.',
  '**Pronunciation.** 🔊 **Track 4.6** Both words go weak: _for_ is /fə/ and _since_ loses almost all its vowel, and the **number** takes the stress: _fə **NINE** years_ · _sins **TWENTY**-seventeen_. Listen to eight and write only the number or the date.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks _how long have you been…?_ about the item on the card. B answers with **both** a span and a point, and then adds one number that is not the time. Swap cards.'));
out.push(dlg(null, [
  ['A', 'How long have you been __________?'],
  ['B', 'For __________ — since __________.'],
  ['A', 'And how many / how often?'],
  ['B', '__________, which is about __________ altogether.'],
  ['A', 'Had you ever worked that out?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – ask about', 'Card B – ask about'], [
  ['doing your present job', 'living where you live'],
  ['travelling the same route', 'studying English'],
  ['knowing your oldest friend', 'using the same telephone'],
  ['saying "lately" about something', 'waiting for something'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the span, the point and the third number. Then: which pairs could not produce a third number? That is where _lately_ lives.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Choose the thing you have been doing longest. Give the span, the point, and then multiply it into one total — journeys, lessons, shifts, pages, customers, meals. Say the total out loud.'));
out.push(p('**b**  Swap. Then each of you say whether the total made the thing bigger or smaller, and whether you had ever worked it out before this evening.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Tareq how long he has been driving that route and he said since 2017, nine years in the February — twice a day, six days a week, and eleven days off ill in nine years. Jad worked out that it is about five and a half thousand times, and Tareq said five thousand five hundred and something and that he has never once worked it out and is not sure he wanted to. He said it is the same eleven kilometres, so if somebody asks what he has done, he has driven eleven kilometres five and a half thousand times, and that is either a very large number or nothing at all depending on which way you hold it. Rasha said she has been on nights since January, which is nine months, and that lately it has been getting harder — and that "lately" is the only word she has for it. She says lately means "for a while and I have not counted", and she has been saying it about the nights since about March; if she had been counting she would know whether it is the nights or whether it is March. Tareq said he has been counting nothing for nine years so he cannot say whether the road has got worse or whether he has. Ms Huda said they have both said the same thing: lately and for nine years are the two ways of not knowing._'));
out.push(p('**Listener task:** write the thing somebody has been saying _lately_ about, and the month they think it started.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Rasha writes in the back of her diary. Answer the questions.'));
out.push(model([
  '**NINE MONTHS OF NIGHTS** · R. Barakat · written because I have been saying "lately" since March',
  'I have been on permanent nights since the 6th of January. That is nine months and ten days, which is 118 shifts, because we do thirteen a month and I have given away four and taken three.',
  'What has been getting worse. I have been falling asleep in the afternoon since about March — not resting, sleeping, two to four in the afternoon, and I have been missing things in the afternoon ever since. Written down like that, it is clearly not the nights. It is the afternoons, and the afternoons started in March, and in March the rota changed from three nights together to five.',
  'I have worked 118 nights and I have had 7 of them where something went wrong that was my fault. All seven were on the fourth or fifth night of a block. None of them was on the first, second or third.',
  'I have been telling people for six months that nights are hard. What is true is narrower and more useful: **five in a row is hard and three in a row is not**, and I have 118 shifts of evidence for it, and until this evening I had never counted them.',
]));
out.push(item('1', 'How many shifts, and how does she get the number?'));
out.push(item('2', 'What did counting change about her complaint?'));
out.push(item('3', 'What exactly does her evidence support?'));
out.push(writers([
  'A page that replaces _lately_ with a number: **the span and the point** → **the arithmetic that turns it into shifts, journeys or lessons** → **what has been getting worse, with the month** → **the counted pattern** → **the narrower, more useful sentence at the end**.',
  'Do the **arithmetic on the page**: _nine months and ten days, which is 118 shifts, because we do thirteen a month and I have given away four and taken three._ Showing the working is what makes the number believable.',
  'Look for the pattern **inside** the number: seven of 118, all on the fourth or fifth night. A total tells you how much; a pattern tells you what to ask for.',
  '⚠ The last paragraph should be **narrower** than the complaint you started with. _Nights are hard_ cannot be granted by anybody. _Five in a row is hard and three is not_ can be put on a rota.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that replaces your own _lately_ with a number (50 words or more).'));
out.push(p('I have been ______________ since ______________. That is ______________, which is ______________, because ______________.   **What has been getting worse.** I have been ______________ since about ______________ — ______________ — and ______________ ever since. Written down like that, it is ______________.   I have ______________ ______________ and ______________ of them ______________. All ______________ were ______________. None of them was ______________.   I have been telling people ______________. What is true is narrower: ______________, and I have ______________ of evidence for it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_for_ with a length, _since_ with a point — and both given',
  'The arithmetic shown, not just the answer',
  'The month the change started',
  'A last sentence narrower than the complaint',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their narrower sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) about something you have been saying _lately_ about — at work, at home, about your health, your money or your English. Span, point, arithmetic, the month, the pattern, and the narrower sentence.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who could change the thing**. ★ _The pattern inside the number._  ✓ _One place where you have given a span with no arithmetic._  ? _What exactly are you asking me to change, in one sentence?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the narrower sentences only.** How many of them are things that could actually be granted? Count. A room that started the evening with twelve complaints usually ends it with four requests, and the other eight were weather.'));
out.push(hw('Do the arithmetic on your own longest span (50+ words): turn the years into a total of shifts, journeys, lessons, customers or pages, and write the pattern you can see inside it.'));

// ======================= 4.4 =======================
out.push(pb());
out.push(h2('4.4  You\'ve been crying'));
out.push(p('**Function:** drawing a conclusion from evidence   ·   **Grammar:** the present perfect continuous for visible evidence   ·   **Pronunciation:** the falling tone that softens a conclusion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives a piece of evidence — _the floor is wet · his hands are black · she is out of breath_ — and the class gives the conclusion with _have been_ + _-ing_. Then one of them is wrong on purpose.'));
out.push(board('You\'ve been running — you\'re out of breath.', 'evidence → have been + -ing'));
out.push(p('**b**  Evidence and conclusion. **1** _It\'s been raining._  **2** _It\'s raining._  **3** _You\'ve been working._  **4** _You work too much._ Which two are about **evidence in front of you**?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda conclude when she comes into Room 14?   **A** that they have been arguing   **B** that nobody has done the homework   **C** that they have been moving the furniture'));
out.push(p('**b**  Listen again. **1** What three pieces of evidence does she name?   **2** What does Omar say about being read?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  Three things and a wrong one', [
  ['Ms Huda', '(coming in) Somebody has been moving the tables, two of you have been arguing, and Omar has not been home.'],
  ['Samira', 'How can you possibly know that?'],
  ['Ms Huda', 'The tables are in a square and I left them in rows. Lubna and Fares are sitting at opposite ends of a square, which nobody does by accident. And Omar is wearing yesterday\'s shirt and has his bag with him, which he never brings on a Thursday.'],
  ['Omar', 'I have been at the hospital since six this morning. My grandmother. She is all right.'],
  ['Ms Huda', 'Then I was right about the fact and wrong about the reason, which is the thing to notice. Evidence gives you the _-ing_; it does not give you the _why_.'],
  ['Lubna', 'And we have not been arguing. We have been doing the Stage 3 cards and I moved because he talks very loudly.'],
  ['Fares', 'I do talk very loudly.'],
  ['Ms Huda', 'Two out of three, then. The tables, which is a fact; Omar, which is a fact with the wrong story attached; and you two, which I invented out of a square.'],
  ['Omar', 'I do not like being read from a shirt.'],
  ['Ms Huda', 'Nobody does, and everybody is, all day, by everybody. The useful part is this: when you say the conclusion out loud you give the other person the chance to correct it. I said "you have not been home" and you told me about your grandmother in four seconds. If I had thought it and said nothing, I would have spent the evening teaching a boy I had invented.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reading the evidence in front of you**',
  table(['the evidence', 'the conclusion'], [
    ['the ground is wet', '_It **has been raining**._'],
    ['she is out of breath', '_She **has been running**._'],
    ['his eyes are red', '_He **has been crying**._ / _He **hasn\'t been sleeping**._'],
    ['the tables are in a square', '_Somebody **has been moving** them._'],
  ], [1.9, 2.7]),
  '**This is what the continuous is for, in conversation.** Something has been going on, it has just stopped, and the **result is visible**. _It has been raining_ (the ground is wet now) against _it rained yesterday_ (a finished day, no evidence needed).',
  '⚠ _It has been raining_ and _it is raining_ are different: the first means it has stopped and you can see that it happened; the second means you need an umbrella.',
  '**Evidence gives you the verb, not the reason.** _You have not been home_ was right; _because he was out late_ was invented. Say the verb, let them supply the reason.',
  '**Soften it and offer the correction:** _You look as if you\'ve been…_ · _It looks as though somebody\'s been…_ · _Have you been…?_ The question form costs nothing and prevents the whole mistake.',
  '⚠ ~~You are crying.~~ to somebody who has stopped → _You **have been** crying._ Getting this wrong sounds either blind or unkind.',
  '**Useful phrases:** evidence gives you the _-ing_, not the _why_ · right about the fact and wrong about the reason · I do not like being read from a shirt · I would have spent the evening teaching a boy I had invented.',
  '**Practise:** Give the conclusion, then soften it into a question.  1 his hands are black  2 the kitchen smells of onions  3 she has three empty cups on her desk  4 the floor by the door is muddy  5 he will not look at anybody',
  '**Pronunciation.** 🔊 **Track 4.8** A conclusion said with a **falling** tone is a statement and can sound like an accusation; said with a **rising** tone it is a question and cannot. _You\'ve been crying._ ↘ · _You\'ve been crying?_ ↗ Listen to six pairs, mark the tone, and say which one you would want to be asked.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the evidence from the card. B gives the conclusion, softens it into a question, and then says one other thing it could mean. A says which is right. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'You look as if you have been __________.'],
  ['A', '__________.'],
  ['B', 'Or it could mean __________.'],
  ['A', 'It is the __________ one.'],
  ['B', 'Then I was right about the __________ and wrong about the __________.'],
]));
out.push(table(['Card A – the evidence', 'Card B – the evidence'], [
  ['Your hands are black to the wrist.', 'There are three empty cups on your desk.'],
  ['You are wearing yesterday\'s shirt.', 'You have not said one word this evening.'],
  ['The whole kitchen smells of onions.', 'Your bag is with you on a Thursday.'],
  ['You are out of breath on the first floor.', 'All nineteen drawings are off the wall.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the conclusion and the **other** thing it could mean. Then count how many of the pairs got the fact right and the reason wrong; in most rooms it is most of them, and that is the finding.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about a time somebody read you wrongly from evidence — a face, a shirt, an empty chair, a silence. What did they conclude, and what was actually true?'));
out.push(p('**b**  Swap. Then each of you say what people conclude about you most often from evidence, and whether they are right.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda came in and said somebody has been moving the tables, two of us have been arguing and Omar has not been home. The tables are in a square and she left them in rows. Lubna and Fares were at opposite ends of the square, which she said nobody does by accident. And Omar was in yesterday\'s shirt with his bag, which he never brings on a Thursday. Omar said he has been at the hospital since six in the morning with his grandmother, who is all right. Ms Huda said she was right about the fact and wrong about the reason, and that is the thing to notice: evidence gives you the -ing, it does not give you the why. Lubna said they have not been arguing — they have been doing the Stage 3 cards and she moved because Fares talks very loudly, and Fares said he does talk very loudly. So: two out of three. The tables, which is a fact; Omar, which is a fact with the wrong story attached; and the two of them, which she invented out of a square. Omar said he does not like being read from a shirt, and she said nobody does and everybody is, all day, by everybody — and that the useful part is saying the conclusion out loud, because he corrected her in four seconds, and if she had thought it and said nothing she would have spent the evening teaching a boy she had invented._'));
out.push(p('**Listener task:** write the conclusion somebody draws about you most often, and whether it is right.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Omar writes. Answer the questions.'));
out.push(model([
  '**THE SHIRT** · Omar Haddad',
  'On Thursday my teacher looked at me for about two seconds and said I had not been home. She was right. I had been at the hospital since six in the morning with my grandmother, who had fallen on the Wednesday evening and who is now sitting up and complaining about the food, which is how we know she is all right.',
  'The shirt was yesterday\'s and the bag was with me and both of those are facts. What she put on top of them was not a fact, and she said so herself about four seconds later, which I had not expected.',
  'I have been read wrongly from evidence twice this year that I know about. In March a man in an office decided from my shoes that I was not serious about a job. In September somebody decided from my silence in the first week of this course that I did not understand, and I have been understanding everything since the first evening; I was counting how many of them were older than me.',
  'What I notice is that both of those people were right about the evidence. My shoes were in that state and I was silent for three weeks. Nobody has ever been wrong about what they could see. They have been wrong about what it meant, every single time, and not one of them asked.',
  'So I have decided to do the thing she did. When I conclude something about somebody from what I can see, I am going to say it out loud, as a question, and let them have the four seconds.',
]));
out.push(item('1', 'How do they know the grandmother is all right?'));
out.push(item('2', 'What has nobody ever been wrong about?'));
out.push(item('3', 'What has he decided to do?'));
out.push(writers([
  'A page about being read: **the conclusion somebody drew, and the evidence behind it** → **what was actually true** → **two or three other times, dated** → **the pattern — what people get right and what they get wrong** → **what you are going to do differently**.',
  'Concede the evidence completely and early: _the shirt was yesterday\'s and the bag was with me and both of those are facts_. A page that denies the evidence loses; a page that concedes it and separates it from the meaning wins.',
  'Let the detail carry the feeling: _sitting up and complaining about the food, which is how we know she is all right_. Do not write _I was very worried_.',
  '⚠ The strongest sentence on the page is the pattern — _nobody has ever been wrong about what they could see; they have been wrong about what it meant_. Look for yours before you write the last paragraph.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write about a time you were read wrongly from evidence (50 words or more).'));
out.push(p('On ______________, ______________ looked at ______________ and said ______________. ______________ was right. I had been ______________ since ______________, because ______________.   ______________ and ______________ are facts. What ______________ put on top of them was ______________.   I have been read wrongly from evidence ______________ this year that I know about. In ______________, ______________ decided from ______________ that ______________. In ______________, ______________ decided from ______________ that ______________.   What I notice is that ______________. Nobody has ever been wrong about ______________. They have been wrong about ______________.   So I have decided ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_have / had been_ + _-ing_ for what the evidence showed',
  'The evidence conceded, in its own sentence',
  'Two or three other times, with months against them',
  'A pattern, then one thing you are going to do differently',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their pattern sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more). It can be about work, a shop, a border, a classroom, a family — anywhere somebody looked at what they could see and told you what it meant.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **one of the people in it**. ★ _The sentence that makes me look worse than I thought I did._  ✓ _One place where you deny the evidence instead of conceding it._  ? _Did any of them ask? Did you?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Who, this week, has concluded something about somebody from evidence and said nothing?** Everybody. Then: who is going to ask instead? That is the whole of this cycle and it is a four-second habit.'));
out.push(hw('Say one conclusion out loud this week, as a question, to the person it is about — _have you been…?_ — and write down what the four seconds produced (50+ words).'));

// ======================= 4.5 =======================
out.push(pb());
out.push(h2('4.5  So far, and not yet'));
out.push(p('**Function:** describing a skill you are building   ·   **Grammar:** _still_ · _yet_ · _so far_ · _up to now_   ·   **Pronunciation:** the stress on _yet_ and _still_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: _So far I have…_ and _I still haven\'t…_ about something you are learning now — anything, not only English.'));
out.push(board('So far I\'ve used it four times. I still haven\'t used it alone.', 'so far · yet · still · up to now'));
out.push(p('**b**  Put the word in. **1** _I haven\'t finished ___._  **2** _I ___ haven\'t finished._  **3** ____ I have written three._  **4** _Have you sent it ___?_  **5** _Up to ___ it has worked._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Umm Kinan learning?   **A** English grammar   **B** to use the projector   **C** to drive'));
out.push(p('**b**  Listen again. **1** How many times has she used it, and how many of those were alone?   **2** What does she say she is not going to say?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  Four times, and one of them alone', [
  ['Umm Kinan', 'I have something and it is small and I am going to say it anyway. They put a projector in my classroom in January. I am forty-eight and I have been teaching mathematics on a blackboard for twenty-four years.'],
  ['Ms Huda', 'And?'],
  ['Umm Kinan', 'So far I have used it four times. Three of those with a boy from the fourth year standing next to me, and once — on the eleventh of April, which was a Tuesday — on my own. It took me eleven minutes to get a triangle onto the wall and the lesson is forty-five minutes long.'],
  ['Mazen', 'Eleven minutes.'],
  ['Umm Kinan', 'Eleven minutes, in front of thirty-one children who can all do it in four seconds. I still haven\'t learnt how to go backwards through the pages and I still haven\'t worked out how to turn it off properly; I have been unplugging it.'],
  ['Lubna', 'Everybody unplugs it.'],
  ['Umm Kinan', 'Do they? Nobody has told me that.'],
  ['Ms Huda', 'What are you not going to say about the eleven minutes?'],
  ['Umm Kinan', 'That I am too old for it. I have been listening to women of my age say that since I was thirty-five and I have decided it is a sentence people say instead of a sentence with a number in it. The number is four times, one of them alone, eleven minutes, two things I still cannot do. That is not too old. That is January to April.'],
  ['Ms Huda', 'Say the last part again.'],
  ['Umm Kinan', '"Too old" is what you say when you have not counted. I have counted. I am four times in and I have two things left.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – where you are in the middle of learning something**',
  table(['you say', 'where it goes'], [
    ['_**So far** I have used it four times._', 'at the **front**; progress up to now'],
    ['_Up to now it has worked._', 'the same, slightly more formal'],
    ['_I **still haven\'t** learnt to go backwards._', '_still_ **before** _haven\'t_'],
    ['_Have you sent it **yet**? — Not **yet**._', '_yet_ at the **end**, questions and negatives'],
  ], [2.4, 2.2]),
  '**_so far_ counts what exists; _still … haven\'t_ names what is missing; _yet_ asks.** A description of a half-built skill needs all three, and the order on the page is almost always: so far → still haven\'t → what next.',
  '⚠ ~~I still have not finished yet.~~ Pick one: _I still haven\'t finished_ **or** _I haven\'t finished yet_. Both together is a very common doubling.',
  '⚠ ~~I haven\'t yet finished~~ is possible but formal and stiff in speech; put _yet_ at the end.',
  '⚠ ~~Until now I have used it four times.~~ → _**So far**_ / _**Up to now**_. _Until now_ in English suggests that it has just changed.',
  '**_still_ is not impatient and _yet_ is not rude.** Both are neutral in English. _Have you sent it yet?_ is an ordinary question; students avoid it because the Arabic equivalent can sound like pressure.',
  '**Useful phrases:** four times, one of them alone · "too old" is what you say when you have not counted · I am four times in and I have two things left · that is not too old, that is January to April.',
  '**Practise:** Three sentences each — _so far_, _still haven\'t_, and what is next.  1 a machine or a program at work  2 driving  3 writing in English  4 cooking something difficult  5 managing other people',
  '**Pronunciation.** 🔊 **Track 4.10** _still_ takes a strong stress and pulls the sentence onto itself — _I **STILL** haven\'t learnt it_ — while _yet_ at the end is short and almost swallowed: _have you sent it yet?_ Listen to six and mark which word is carrying the weight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the skill from the card. B gives three sentences — _so far_, _still haven\'t_, and the next thing — each with a number. A then asks _what would make the next one easier?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'So far I have __________ __________ times.'],
  ['A', 'And what is missing?'],
  ['B', 'I still haven\'t __________, and I haven\'t __________ yet.'],
  ['A', 'What is next?'],
  ['B', '__________ by __________.'],
  ['A', 'What would make it easier?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the skills', 'Card B – the skills'], [
  ['a machine or a program at work', 'speaking English on the telephone'],
  ['driving, or a route you do not know', 'writing a formal letter'],
  ['managing or training somebody', 'cooking something you have always bought'],
  ['reading something long in English', 'keeping accounts or records'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the _so far_ number and the _still haven\'t_. Then the useful one: whose "what would make it easier" was something **somebody in this room could do**? There is usually one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe a skill you are halfway into. _So far_ with a number, two things you _still haven\'t_ done, and the next step with a date on it. Then say what you have been telling people instead of the number.'));
out.push(p('**b**  Swap. Then each of you give the other one sentence of help — something you know about their skill that nobody has told them. _Everybody unplugs it._'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Umm Kinan said she had something small and was going to say it anyway. They put a projector in her classroom in January, and she is forty-eight and has been teaching mathematics on a blackboard for twenty-four years. So far she has used it four times: three with a boy from the fourth year standing next to her, and once on her own, on the eleventh of April, which was a Tuesday. It took her eleven minutes to get a triangle onto the wall and the lesson is forty-five minutes long — eleven minutes in front of thirty-one children who can all do it in four seconds. She still hasn\'t learnt to go backwards through the pages and she still hasn\'t worked out how to turn it off, so she has been unplugging it; and Lubna said everybody unplugs it, and nobody had told her that. Ms Huda asked what she is not going to say about the eleven minutes, and she said: that she is too old for it. She has been listening to women of her age say that since she was thirty-five and has decided it is a sentence people say instead of a sentence with a number in it. The number is four times, one of them alone, eleven minutes, and two things she still cannot do. That is not too old; that is January to April._'));
out.push(p('**Listener task:** write the sentence somebody has been saying instead of a number.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Umm Kinan writes for the head of her school. Answer the questions.'));
out.push(model([
  '**THE PROJECTOR IN ROOM 2** · S. Dibo, mathematics · April',
  'You asked in January for a note in April on how the projectors are being used. This is mine and it is not what you are hoping for.',
  '**So far.** I have used it four times since the 14th of January. Three of those were with a pupil from the fourth year standing beside me; once, on 11 April, I did it alone. It took eleven minutes to put one triangle on the wall, out of a forty-five-minute lesson.',
  '**What I still cannot do.** I still haven\'t learnt to move backwards through the pages, which means that if a class does not follow something I cannot return to it, and that is the reason I have used it four times and not forty. I still haven\'t found how to switch it off, so I have been unplugging it at the wall, which I understand everybody does and which nobody has told me.',
  '**What I am not going to say.** That I am too old to learn it. I have been hearing that sentence from women of my age since I was thirty-five and it is what people say when they have not counted. I have counted.',
  '**What would help, and it is small.** Forty minutes, once, with somebody who knows it, in my own room, on my own projector, with the door shut. Not a training afternoon in the hall with nine of us and one machine. We have had two of those and I have used it four times.',
]));
out.push(item('1', 'Why has she used it four times and not forty?'));
out.push(item('2', 'What does she say "too old" means?'));
out.push(item('3', 'What does she ask for, and what does she refuse?'));
out.push(writers([
  'A report on a half-built skill: **why you are writing** → **so far, with numbers and dates** → **what you still cannot do, and what that costs** → **the sentence you are refusing to say** → **the smallest thing that would help, and the thing that would not**.',
  'Attach a **consequence** to each _still haven\'t_: _I cannot return to it, and that is the reason I have used it four times and not forty._ A missing skill with no consequence attached reads as an excuse.',
  'Refuse the easy sentence on the page: _I am not going to say I am too old._ Naming it stops the reader thinking it for you.',
  '⚠ Ask for the smallest real thing and **name what you do not want**: _forty minutes with the door shut, not a training afternoon in the hall._ The second half is what makes the first half specific.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the report on your own half-built skill (50 words or more).'));
out.push(p('**______________** · ______________   ______________ asked for ______________. This is mine.   **So far.** I have ______________ ______________ times since ______________. ______________ of those were ______________; once, on ______________, ______________. It took ______________.   **What I still cannot do.** I still haven\'t ______________, which means ______________, and that is the reason ______________. I still haven\'t ______________, so I have been ______________.   **What I am not going to say.** That ______________.   **What would help, and it is small.** ______________. Not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_so far_ at the front with a number; _still haven\'t_ before the verb; _yet_ at the end',
  'No doubling — _still haven\'t_ **or** _haven\'t … yet_',
  'A consequence attached to each thing you still cannot do',
  'The smallest help named, and the unhelpful thing refused',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what would help, and it is small" line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full report (100 words or more) on something you are halfway into learning — and send it, or decide not to and write why underneath. If nobody has asked you for it, write it to the person who ought to have.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s report as **the person who could give them the forty minutes**. ★ _The number that tells me this is not laziness._  ✓ _One "still haven\'t" with no consequence attached._  ? _What exactly do you want, and from whom?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the smallest-help lines.** How many of them cost less than an hour? Nearly all. Then: how long has each person been not asking? That is the number that embarrasses the room, in a useful way.'));
out.push(hw('Write the three sentences — _so far_, _still haven\'t_, and the next step with a date — for the skill you are most behind on (50+ words). Then name the one person who could give you the forty minutes.'));

// ======================= 4.6 =======================
out.push(pb());
out.push(h2('4.6  Have you ever…?'));
out.push(p('**Function:** asking about somebody\'s experience at interview length   ·   **Grammar:** _how long_ · _how many_ · _have you ever_   ·   **Pronunciation:** the rise and fall of a long question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In threes, write the six questions you would ask somebody you were thinking of employing. Six, not three, and none of them may be answerable with _yes_.'));
out.push(board('How many have you done, and how do you know?', 'how long · how many · have you ever'));
out.push(p('**b**  Make each one unanswerable with _yes_. **1** _Do you have experience?_  **2** _Are you good with people?_  **3** _Can you work under pressure?_  **4** _Have you used this system?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is interviewing whom, and what do they find?   **A** Fares interviews Lubna   **B** Lubna and Rasha interview Fares   **C** Ms Huda interviews Fares'));
out.push(p('**b**  Listen again. **1** Which question does Fares answer badly, and why?   **2** What does Rasha say her best interview question is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  The practice interview', [
  ['Lubna', 'How long have you been in this job?'],
  ['Fares', 'Eleven years. Since September 2015.'],
  ['Rasha', 'How many accounts have you opened?'],
  ['Fares', 'Forty-one that had never ordered from us, and I have the dated list.'],
  ['Lubna', 'Have you ever lost one?'],
  ['Fares', 'Three. In eleven years.'],
  ['Rasha', 'Which one, and why?'],
  ['Fares', '…The one in Suwayda. Because I had stopped going, because the order was small, and somebody else went instead of me and they were better than I had been.'],
  ['Lubna', 'That was the good answer and he did not want to give it.'],
  ['Fares', 'Ask me the other one. The one she asked.'],
  ['Rasha', 'Why do you want to leave?'],
  ['Fares', 'Because I have been doing the same eleven years three times over and — no. That is the answer I have been giving and it is not true. I want to leave because I have trained six people and four of them are still in the job and nobody has ever asked me to train anybody. I have been doing it in car parks.'],
  ['Rasha', 'That is the sentence. My best question is always "which one and why" — I have been asking it at interviews for four years and nobody has ever been ready for it.'],
  ['Lubna', 'What is the worst question?'],
  ['Rasha', '"Do you have experience?" Everybody says yes and the room learns nothing. If a question can be answered with yes, I have wasted a minute and so have they.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about experience**',
  table(['the question', 'what it gets you'], [
    ['_**How long** have you been…?_', 'a span — and you then ask for the point'],
    ['_**How many** have you…?_', 'a number, and then _how do you know?_'],
    ['_**Have you ever**…?_', 'yes or no — so always follow it'],
    ['_**Which one, and why?**_', 'the answer nobody has prepared'],
  ], [2.1, 2.5]),
  '**Never leave a _have you ever_ alone.** It is a door; _which one and why_ is the room. _Have you ever lost one? — Three. — Which one, and why?_',
  '**A question that can be answered with _yes_ has wasted a minute.** Turn each one: _Do you have experience?_ → _How many have you done?_ · _Are you good with people?_ → _Tell me about somebody you could not get on with._ · _Can you work under pressure?_ → _What is the worst week you have had, and what did you do on the Thursday?_',
  '**Answering:** give the **number first**, then the evidence, then the thing that went wrong. _Forty-one, and I have the dated list. I have lost three._',
  '⚠ ~~How long time have you been here?~~ → _**How long** have you been here?_ ⚠ ~~How much accounts~~ → _**How many**_. ⚠ ~~Have you ever been go there?~~ → _Have you ever **been** there?_',
  '**Useful phrases:** which one, and why? · that was the good answer and he did not want to give it · that is the answer I have been giving and it is not true · I have been doing it in car parks.',
  '**Practise:** Turn each into a question that cannot be answered with _yes_.  1 _Are you reliable?_  2 _Do you know Excel?_  3 _Have you managed people?_  4 _Do you work well in a team?_  5 _Are you interested in this field?_',
  '**Pronunciation.** 🔊 **Track 4.12** A long question rises in the middle and falls at the end: _how many accounts have you **OPEN**ed?_ ↘ A _have you ever_ question rises all the way: _have you ever **LOST** one?_ ↗ Listen to eight and mark ↗ or ↘; then ask four of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. Two interview, one answers, five minutes each. Interviewers must use the card and must follow every _have you ever_ with _which one, and why?_ Rotate so that everybody answers once.'));
out.push(table(['Card A – interviewers', 'Card B – the job'], [
  ['How long have you been…? — and since when?', 'training new staff in your own field'],
  ['How many have you…? — and how do you know?', 'running a small team of four'],
  ['Have you ever…? — which one, and why?', 'dealing with complaints all day'],
  ['What is the worst week you have had?', 'keeping the records for a whole building'],
  ['Why do you want to leave?', '— and ask it twice'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('One group performs. **Listener task:** write the question that produced the answer the person had not prepared. In most interviews there is exactly one and it is nearly always _which one, and why?_'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Interview your partner for the job they actually do now, as if they were applying for it. Six questions, none answerable with _yes_, and follow every yes-or-no with _which one and why_.'));
out.push(p('**b**  Swap. Then each of you say which of your own answers was the one you had been giving and do not believe.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna and Rasha interviewed Fares. How long have you been in this job — eleven years, since September 2015. How many accounts have you opened — forty-one that had never ordered from them, and he has the dated list. Have you ever lost one — three, in eleven years. And then Rasha asked which one and why, and he said the one in Suwayda, because he had stopped going, because the order was small, and somebody else went instead of him and they were better than he had been. Lubna said that was the good answer and he did not want to give it. Then he asked for the other question, why do you want to leave, and he started to say because he has been doing the same eleven years three times over — and stopped and said no, that is the answer he has been giving and it is not true. He wants to leave because he has trained six people, four of them are still in the job, and nobody has ever asked him to train anybody: he has been doing it in car parks. Rasha said that is the sentence, and that her best question is always which one and why — she has been asking it for four years and nobody has ever been ready for it. The worst question is do you have experience, because everybody says yes and the room learns nothing._'));
out.push(p('**Listener task:** write the question in this room that produced an unprepared answer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Fares\' covering letter. Answer the questions.'));
out.push(model([
  '**To:** the training manager, Levant Medical Supplies',
  '**Subject:** Application — field training post, reference 14/A',
  'Dear Madam,',
  'I have been a medical representative for eleven years, since September 2015, in Damascus, Rural Damascus and Suwayda. I am applying for the field training post and I will put the relevant part first.',
  'I have trained six new representatives. Nobody asked me to. Four of the six are still in the job after an average of four years, in a trade where most people leave in eighteen months. I have been doing it in car parks, in the forty minutes before a shift, because there is no training post in my company and I have not waited for one to exist.',
  'The rest of the evidence. I have opened 41 pharmacies that had never ordered from my company, and I have kept the dated list since the first one in October 2015. I have taken over two areas another representative had given up, and the monthly order in both is now larger than when he left. I have lost 3 accounts in eleven years. I know which three. The one I would tell you about is Suwayda, because I stopped going when the order got small, and the man who replaced me was better than I had been.',
  'What I cannot offer. I have never trained anybody formally, I have never written a training plan, and I have never stood in front of more than four people at once.',
  'I would be glad to come and be asked "which one, and why" about any line of this.',
  'Yours faithfully, Fares Kayyali',
]));
out.push(item('1', 'What does he put first, and why?'));
out.push(item('2', 'What three things does he say he cannot offer?'));
out.push(item('3', 'How does he end, and what does that tell the reader?'));
out.push(writers([
  'A covering letter that is evidence: **who you are and the span** → **the one relevant thing, first, counted** → **the rest of the evidence** → **what you cannot offer** → **an invitation to be questioned**.',
  'Put the relevant paragraph **first** and say that you are doing it. Everything else is "the rest of the evidence" and can be read or not read.',
  'Write the **what I cannot offer** paragraph. Three things, plainly, no apology and no promise to improve. It is the paragraph that makes the other four believable, and almost nobody writes it.',
  '⚠ Offer the hard question yourself: _I would be glad to be asked "which one, and why" about any line of this._ Only somebody who has the evidence can write that sentence, and the reader knows it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a covering letter for something you would actually apply for (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I have been ______________ for ______________, since ______________. I am applying for ______________ and I will put the relevant part first.   I have ______________ ______________. Nobody ______________. ______________ of the ______________ are ______________, in a ______________ where ______________. I have been doing it ______________, because ______________.   **The rest of the evidence.** I have ______________. I have ______________. I have ______________ ______________, and I know ______________.   **What I cannot offer.** I have never ______________, I have never ______________, and I have never ______________.   I would be glad to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_How long_ answered with a span **and** a point',
  'The relevant paragraph first, counted',
  'A "what I cannot offer" paragraph with three plain items',
  'No adjectives about yourself anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I cannot offer" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) for a real post, course or committee. Then write underneath the six questions you would least like to be asked about it, and answer one of them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person with thirty applications and forty minutes**. ★ _The paragraph I would read if I only read one._  ✓ _One claim with no number._  ? _Which one, and why?_ — pick any line and ask it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many people have written "what I cannot offer"?** Then: how many of you would have written it last month? That paragraph is the single clearest sign that a page is evidence and not advertising.'));
out.push(hw('Write the six questions you would least like to be asked at an interview for the thing you want next, and answer **two** of them properly (50+ words). Bring both to 4.7.'));

// ======================= 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review & Mediate: What does this page claim?'));
out.push(p('**Function:** explaining a CV at B1   ·   **Recycling:** Units 1–4   ·   **Exam practice:** B1 Preliminary Reading Part 3, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I live here since two years.  **2** I have opened forty-one pharmacies in 2019.  **3** I have been knowing her for ten years.  **4** I still have not finished yet.  **5** How long time have you been there?  **6** I have did it four times.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the page Fares takes to the interview.'));
out.push(box(null, [
  '**FARES KAYYALI**  ·  Qassaa, Damascus  ·  0933 417 206  ·  f.kayyali@mail.sy',
  '**WHAT I HAVE DONE**',
  'Trained 6 new representatives, unasked, in car parks and in the forty minutes before shifts. 4 of the 6 are still in the job after an average of 4 years, in a trade where most leave within 18 months.',
  'Opened 41 pharmacies that had never ordered from this company — Damascus, Rural Damascus, Suwayda. Dated list kept since the first, October 2015.',
  'Taken over 2 areas another representative had given up. Monthly order in both is now larger than when he left.',
  'Lost 3 accounts in 11 years. I know which three and why.',
  '**WHAT I HAVE BEEN DOING**',
  'Medical representative, Dar al-Shifa Pharmaceuticals, since September 2015 — 11 years, three governorates, about 1,900 pharmacy visits.',
  'Keeping the dated account list since October 2015 — 11 years, unasked, in the back of an order book.',
  '**WHAT I CANNOT OFFER**',
  'No formal training qualification. No written training plan. Never spoken to more than four people at once.',
  '**EDUCATION**  ·  Diploma in Pharmacy Assistance, Damascus, 2014  ·  Secondary Certificate, Homs, 2010',
  '**LANGUAGES**  ·  Arabic (mother tongue)  ·  English (reading good; speaking — four months of a B1 course, 41 evenings)',
  '**REFERENCES**  ·  Available on request',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lubna explains the page to Mazen, who has never written one. What does Mazen object to, and what does she say the two headings are for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  Two headings and a third one', [
  ['Mazen', 'You cannot put "what I cannot offer" on a CV. You are handing them the reason to say no.'],
  ['Lubna', 'They are going to find it anyway. The question is whether they find it from him or from somebody else in the fourth minute.'],
  ['Mazen', 'And why two headings? Everybody has one list.'],
  ['Lubna', 'Because they are two different claims. _What I have done_ is finished and counted — six, forty-one, two, three. You can check every one of those. _What I have been doing_ is the time he has put in, which you cannot check and which explains where the numbers came from. If he only gave you the second one, you would have eleven years and nothing in your hand.'],
  ['Mazen', 'And if he only gave the first?'],
  ['Lubna', 'Then you would not know whether forty-one took him eleven years or eleven weeks. Forty-one in eleven weeks is a different man.'],
  ['Mazen', 'The languages line is strange. "Forty-one evenings."'],
  ['Lubna', 'That is the best line on the page. Everybody writes "good English". He has written a number that can be checked and that is smaller than everybody else\'s adjective.'],
  ['Mazen', 'I have been repairing telephones for nine years and I have never written any of this down. What would my two headings say?'],
  ['Lubna', 'What you have been doing is nine years of telephones. What you have done is eleven of one model in four weeks, and a letter to two shops that nobody has answered. You wrote it in Unit 3. It is already a line.'],
]));
out.push(sp());
out.push(box('Language box – explaining a page of evidence', [
  'Say what each **heading** claims before explaining any line under it: _what I have done is finished and counted; what I have been doing is the time put in._',
  'Explain why both are needed, with the test: _if you only had the years, you would have nothing in your hand; if you only had the numbers, you would not know whether forty-one took eleven years or eleven weeks._',
  'Defend the **uncomfortable** section by naming the alternative: _they are going to find it anyway — from him, or from somebody else in the fourth minute._',
  'Point at the line that is doing the most work and say why: _forty-one evenings_ is checkable and the adjective it replaces is not.',
  'Turn the listener\'s own experience into the same two headings. Everybody in the room has both and most people have only ever said one of them.',
  '**Useful phrases:** two different claims · you can check every one of those · nothing in your hand · a number that is smaller than everybody else\'s adjective · it is already a line.',
  '**Pronunciation.** 🔊 **Track 4.14** Reading a list aloud to somebody who cannot see it: a small **rise** on each item and a **fall** on the last — _six trained, ↗ forty-one opened, ↗ two areas taken over, ↗ three lost. ↘_ The fall is how the listener knows the list has ended. Listen, then read the four lines of the first section aloud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the pages below and does **not** show it. A explains it to B and C, who must each end by saying what the page claims, which line they would check first, and what is missing. Change roles with the other page.'));
out.push(table(['Page A – a school report on a pupil', 'Page B – a shop\'s page for a supplier'], [
  ['Attendance 94%, 11 absences, 4 unexplained', 'Trading since 2019 — 7 years'],
  ['Mathematics: has improved from 41% to 68% since January', 'Has stocked this line since March — 9 months'],
  ['Has read 6 books in English this year', 'Has sold 212 units; has returned 4'],
  ['Still has not spoken in class', 'Has never missed a payment'],
  ['Has been coming to the homework club since October', 'Cannot offer: no refrigerated storage'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the claim, the line you would check, and the thing that is missing. In Page A the missing thing is a reason for the four unexplained absences; in Page B it is who the other six years were with.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own page under the two headings — **what I have done** (counted) and **what I have been doing** (the time put in) — plus three lines of **what I cannot offer**. Then explain it to your partner **without showing it**. They must ask: _which line can I check?_, _how long did that take?_, _which one and why?_ and _what is missing?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner\'s page claims and what you decided:  _Mazen\'s page has nine years under "what I have been doing" and until this evening it had nothing at all under "what I have done". We found four lines. He has recorded 11 faults of one model in four weeks, he has written one letter to two shops with eleven dates in it, he has repaired about 2,300 telephones in nine years at an average of five a day six days a week, and he has trained nobody, which he says plainly. The line I would check first is the eleven, because it is the only one with a document behind it. What is missing is money: he has no idea what he has earned or what he has charged for the eleven repairs that were not his fault, and he says he has never written a figure down in nine years. So I decided to put one number under "what I have done" for myself this week, and the number I have chosen is how many shifts I have covered for other people, because I have been saying "always" for four years and "always" is not a number._'));
out.push(p('**Listener task:** did they give you both headings? Which line could you check, and what was missing?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 3)', 7));
out.push(p('Read the text and answer the questions. Choose **A**, **B**, **C** or **D**.'));
out.push(model([
  '**THE BACK OF THE ORDER BOOK**  · from a magazine for pharmacy staff',
  'When Fares Kayyali applied for his first job in 2015, the man who interviewed him gave him an order book and one piece of advice: write down every pharmacy that says no, and the date. He did not explain why, and Kayyali, who was twenty-three and had been refused four jobs that spring, did not ask.',
  'For eleven years he has kept that list. It now runs to forty-one names, all of them pharmacies that had never ordered from his company before he walked in, each with the month and year beside it. He has never shown it to anybody. When he was asked, earlier this year, what he had achieved in eleven years, he said that he had extensive experience of the market — and then, when the question was repeated, produced the number.',
  'What interests him now is not the forty-one. It is the six. Over the same eleven years he has trained six new representatives, none of them because he was asked to. He did it in car parks, in the forty minutes before a shift, because his company has no training post and he decided some years ago that he was not going to wait for one. Four of the six are still in the job, which in a trade where most people leave within eighteen months is a figure that ought to interest somebody.',
  'His own explanation of why he never wrote any of this down is worth hearing. "A number sounds like boasting," he says, "and the words sound like a CV." It took a teacher in an evening class to point out that a fact cannot boast, and that he had been keeping evidence for eleven years and handing people adjectives instead.',
  'He has also, since February, been applying for a training post with another company, and he has had two refusals. The third application went out last week with the list attached.',
]));
[
  '**1**  Why did Kayyali start keeping the list?   **A** He wanted to prove something to his employer.   **B** He was told to, and did not ask why.   **C** He had been refused four jobs.   **D** His company required a record of refusals.',
  '**2**  What happened when he was first asked what he had achieved?   **A** He gave the number straight away.   **B** He refused to answer.   **C** He described himself instead of counting.   **D** He showed the list.',
  '**3**  What does the writer suggest is the most interesting figure?   **A** forty-one   **B** eleven   **C** six   **D** eighteen',
  '**4**  Why did he train people in car parks?   **A** Nobody had asked him to and there was no post for it.   **B** His company refused him a room.   **C** He preferred to work outside.   **D** The representatives had no office.',
  '**5**  What is the writer\'s main point about Kayyali?   **A** He has been unlucky with applications.   **B** He should have asked for a training post sooner.   **C** He had the evidence for years and gave people adjectives.   **D** His company has not valued him.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message explaining your two headings to somebody who has never written a page like this (50 words or more).'));
out.push(p('My page has two headings and they are two different claims. Under **what I have done** there is ______________, ______________ and ______________ — you can check ______________.   Under **what I have been doing** there is ______________, which is ______________ years and which you cannot check; it is there because ______________.   If I gave you only the second one you would have ______________. If I gave you only the first you would not know ______________.   And under **what I cannot offer**: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both headings named, and the difference between the claims stated',
  'Counted sentences under the first; a span and a rate under the second',
  'Three plain items under what you cannot offer',
  'The test — _nothing in your hand_ / _eleven years or eleven weeks_',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these. Write **100 words or more**.',
  '**Question 1 — an article.** You see this notice in an English-language magazine for students.',
  '_"**What have you actually done?** Tell us about something you have been doing for a long time with nothing finished to show for it — and what you have done inside it that you have never counted. We will print the best articles."_',
  'Write your **article**.',
  '**Question 2 — a story.** Your English teacher has asked you to write a story. It must begin with this sentence:',
  '_"I had been keeping the list for eleven years and I had never shown it to anybody."_',
  'Write your **story**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ here for two years.   a) live   b) have been living   c) am living',
  '2  I ___ forty-one pharmacies.   a) have opened   b) have been opening   c) am opening',
  '3  She ___ the report, so she knows what is in it.   a) has been reading   b) has read   c) reads',
  '4  The ground is wet. It ___ .   a) has been raining   b) is raining   c) rained',
  '5  I ___ her since 2016.   a) have been knowing   b) have known   c) know',
  '6  ___ I have used it four times.   a) Until now   b) So far   c) Yet',
  '7  I ___ finished.   a) still haven\'t   b) haven\'t still   c) yet haven\'t',
  '8  ___ have you been in this job?   a) How long time   b) How long   c) How much time',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview, six questions).** 🔊 **Track 4.15** You will hear an interview with a medical representative. For each question choose **A**, **B** or **C**.'));
[
  '**1**  How long has he been in the job?   **A** nine years   **B** eleven years   **C** fourteen years',
  '**2**  What does he say about the number forty-one?   **A** He worked it out this year.   **B** He has kept the list since 2015.   **C** His company asked him for it.',
  '**3**  Why has he trained people in car parks?   **A** There is no training post in his company.   **B** The office is too small.   **C** He is not allowed inside.',
  '**4**  What does he say about the three accounts he has lost?   **A** He does not remember them.   **B** They were not his fault.   **C** He knows which three and why.',
  '**5**  What does he now say is his reason for wanting to leave?   **A** The money.   **B** He has been doing the same years over again.   **C** He has been training people that nobody asked him to train.',
  '**6**  What is on his page that he thinks interviewers will dislike?   **A** the list of forty-one   **B** the section on what he cannot offer   **C** the languages line',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Interviewer', 'How long have you been a representative?'],
  ['Fares', 'Eleven years, since September 2015. Three governorates.'],
  ['Interviewer', 'Your page says forty-one pharmacies. Where does that come from?'],
  ['Fares', 'From a list in the back of an order book. I have kept it since the first one in October 2015, with the month beside each name. Nobody asked me to keep it and until this year I had never shown it to anybody or even added it up.'],
  ['Interviewer', 'And you have trained six people.'],
  ['Fares', 'Six, and nobody asked me to do that either. There is no training post in my company — there never has been — so I have been doing it in car parks, in the forty minutes before a shift. Four of the six are still in the job.'],
  ['Interviewer', 'You also list three accounts lost.'],
  ['Fares', 'In eleven years. I know which three and I know why, and I would rather tell you than have you find out in the fourth minute.'],
  ['Interviewer', 'Why do you want to leave?'],
  ['Fares', 'For a long time I have been saying that I have done the same eleven years three times over. That is the answer I have been giving and it is not the true one. The true one is that I have been training people that nobody asked me to train, for years, in car parks, and there is no word for that in my company. There is one in yours.'],
  ['Interviewer', 'Anything on this page you expect me to dislike?'],
  ['Fares', 'The section headed "what I cannot offer". Everybody I have shown it to has told me to take it out.'],
]));
out.push(p('**C  Writing.** Write your own page under the two headings (100+ words): **what I have done**, counted, with at least four numbers; **what I have been doing**, with a span and a rate; and **what I cannot offer**, three plain items.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I have done with a verb and a number, not with a chair or an adjective',
  '☐ say how long I have been doing something, and give both the span and the point',
  '☐ choose between _have done_ and _have been doing_ according to what I am claiming',
  '☐ use _had been_ + _-ing_ to step the same idea back behind a past',
  '☐ use _for_, _since_, _all day_ and _lately_ correctly — and notice when I say _lately_',
  '☐ draw a conclusion from evidence and offer it as a question',
  '☐ use _so far_, _still haven\'t_ and _yet_ to describe a half-built skill',
  '☐ ask about experience with questions that cannot be answered _yes_',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 5 – DESCRIBING PROCESSES', [
  'Unit 4 was about what you have done. Unit 5 is about things that are done — _the seal is replaced every two years · the batch was moved · the road has been closed_ — where the person who did it is not in the sentence at all.',
  'Before the next lesson: write down **four steps** of something that happens where you work or live, in the order it happens, with no people in any of the four. Unit 5 is built on them, and 5.6 asks why the people went missing.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
