// Proactive Business English A2 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'proposal · objective · second stage · pilot · trial run · intention · commitment · outcome · review meeting · action point · next steps · timescale · green light · go-ahead · progress report · achievement · setback · year end · carry over · exit point · in principle · provisionally · subject to · on track · behind schedule · ahead of time';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 24  Looking Forward'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**24.1**  say what is going to happen, and how certain it is',
  '**24.2**  say what you hope to do, without promising it',
  '**24.3**  propose something: _we would like to…_',
  '**24.4**  put a plan in order: _first · then · after that_, each step with a reason',
  '**24.5**  say what has been done already, with the present perfect',
  '**24.6**  close well — a year, a project, a course',
  '**24.7**  Review & Mediate: the year-end note, and the course review',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The last unit, and what it is for', [
  'Everything in this unit is about the future, and the future is where business English is most often dishonest — not deliberately, but because _we will_ is easier to write than _we hope to_, and because a plan with no dates in it cannot be checked by anybody, including you.',
  'So this unit sorts the future into three honest shelves. **Going to** for what is already decided and arranged. **I hope to** for what you intend and cannot promise. **We would like to** for what you are proposing to somebody who may say no. Three shapes, three different levels of commitment, and a reader who can tell them apart will trust everything else you write.',
  '⚠ 24.5 brings back the present perfect, and brings it back for one job: **saying what has already been done**. A proposal whose first paragraph says what is finished is read; one that begins with what will happen is skimmed. That is the single most useful thing in this unit.',
], C.lyellow, C.orange));

// ======================= CYCLE 24.1 =======================
out.push(pb());
out.push(h2('24.1  We are going to open on the first'));
out.push(p('**Function:** saying what is arranged   ·   **Grammar:** _going to_ for decided plans; _will_ for decisions made now   ·   **Pronunciation:** _gonna_ and when not to use it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things that are definitely going to happen at your work in the next month. Are they arranged, or only intended?'));
out.push(p('**b**  Which is right for each? _We are going to open on the first. · We will open on the first. · We open on the first._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub want changed?   **A** the date   **B** _we will_ changed to _we hope to_   **C** the name of the store'));
out.push(p('**b**  Listen again. **1** What is the test for _going to_? **2** What does he say _will_ is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  "Is it arranged, or do you hope?"', [
  ['Bassel', 'For the customers: "We will open the second store on 1 September."'],
  ['Mr Ayoub', 'Is it arranged? Is there a lease?'],
  ['Bassel', 'There is a lease. It is signed. The shelves are ordered.'],
  ['Mr Ayoub', 'Then _we are going to open on 1 September_ — _going to_ for something already decided and arranged. It is stronger than _will_, because it says the arrangements exist.'],
  ['Bassel', 'I thought _will_ was stronger.'],
  ['Mr Ayoub', '_Will_ is for a decision made at the moment of speaking — _I will telephone him now_ — and for a prediction. In a letter to customers it reads as an intention, which is weaker than a signed lease.'],
  ['Bassel', 'And the second part: "We will also open in Homs next year."'],
  ['Mr Ayoub', 'Is there a lease in Homs?'],
  ['Bassel', 'No. We are thinking about it.'],
  ['Mr Ayoub', 'Then that is not _going to_ and it is not _will_ either. That is _we hope to_, which is the next cycle, and putting it in the same sentence as the signed lease is how a company loses the right to be believed about either of them.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_Going to_ and _will_**',
  table(['Shape', 'Use'], [
    ['**am / is / are going to** + verb', 'already decided **and** arranged'],
    ['**will** + verb', 'a decision made now; a prediction'],
    ['present simple', 'a timetable: _the store opens at eight_'],
    ['**is / are** + -ing', 'a fixed arrangement with a time: _we are meeting on Tuesday_'],
    ['negative', '**is not going to** · **will not** (won\'t)'],
  ], [2, 2]),
  '⚠ **_Going to_ is the strong one in a letter.** It says the arrangements exist. _Will_ in a letter to a customer reads as an intention, and intentions are what everybody has.',
  '⚠ **The test: is it arranged?** If there is a lease, an order, a booking or a date somebody else has agreed to, it is _going to_. If there is only a wish, it belongs in 24.2 and not here.',
  '⚠ **Never put an arranged thing and a hoped-for thing in one sentence.** The reader cannot tell them apart, and when the second does not happen they stop believing the first.',
  '⚠ _Will_ is right and natural for a decision made as you speak: _I will telephone him now._ Keep it for that and it stays useful.',
  '**Practise:** Say each with _going to_ or _will_, and say why. 1 a signed lease 2 a telephone call you decide to make now 3 a price rise you expect 4 a meeting in the diary 5 something you are only considering',
  '**Useful phrases:**  We are going to open on the first.  ·  I will telephone him now.  ·  We are meeting on Tuesday.  ·  Is it arranged?  ·  The store opens at eight.',
  '**Pronunciation – _gonna_.** 🔊 **Track 24.2** Listen: in speech _going to_ becomes _gonna_ before a verb — _we\'re gonna open_. Understand it; say _going to_ in writing and at work. Never write _gonna_. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A announces a plan; B asks whether it is arranged and sorts it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the customers: "We will __________ on __________."'],
  ['B', 'Is it arranged? Is there __________?'],
  ['A', 'There is __________. It is __________.'],
  ['B', 'Then _we are going to ___________ — _going to_ for something already decided and arranged.'],
  ['A', 'I thought _will_ was stronger.'],
  ['B', '_Will_ is for a decision made at the moment of speaking, and for a prediction.'],
  ['A', 'And the second part: "__________"'],
  ['B', 'Is there __________? Then that is not _going to_ at all.'],
]));
out.push(table(['Role card 1 — a new delivery day', 'Role card 2 — a second machine'], [[
  'Arranged: a driver hired, a van booked, Saturdays from the 1st. Not arranged: a second van "later in the year", which A has put in the same sentence.',
  'Arranged: the machine is paid for and ships on the 12th. Not arranged: the second-shift staff to run it, which exist only in A\'s head.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the arranged things in one column and the hoped-for things in the other. Then say which sentence would have caused trouble.'));
out.push(PHRASE_CARD(['We are going to open on the first.', 'Is it arranged?', 'I will telephone him now.', 'We are meeting on Tuesday.', 'The store opens at eight.', 'not in the same sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('List **five** things coming at your work. Mark each A (arranged) or H (hoped for), then write it in the right shape.'));
out.push(table(['What', 'A / H', 'The evidence', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 0.5, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We are going to _______, because _______ is already _______. We hope to _______, but _______._'));
out.push(p('**Listener task:** write down anything marked A with no evidence beside it. That is a hope wearing a lease.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we are going to open_ with nothing arranged, and _we will going to_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice to customers, and answer the questions.'));
out.push(box(null, [
  '**TO OUR CUSTOMERS — the second store, and Saturday deliveries**',
  '**What is arranged.** We are going to open a second store at 22 Baghdad Street on 1 September. The lease is signed and the shelving is ordered. The store is going to carry the twenty lines we sell most, not the full range.',
  '**Also arranged.** From 1 September we are going to deliver on Saturdays as well as Tuesdays and Thursdays. A driver has been taken on for it.',
  '**What we hope to do, and have not arranged.** We hope to open in Homs in 2027. There is no lease and no date, and if anybody tells you otherwise they are guessing.',
  '**What is not changing.** Prices, terms, the fourteen-day price promise, and the Mezzeh store, which stays exactly as it is. Nobody is moving and nothing is closing.',
  'Nour Mansour · Administration · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What evidence is given for each arranged thing?'));
out.push(item('2', 'Why is the Homs plan in its own paragraph with its own heading?'));
out.push(item('3', 'What does the last paragraph answer, and who was asking it?'));
out.push(box('Writer\'s box', [
  '**An announcement — four headed parts:** what is arranged (with the evidence) → what else is arranged → what we hope to do, **named as a hope** → what is **not** changing.',
  '**Put the evidence beside each arranged thing.** _The lease is signed and the shelving is ordered._ Without it, _going to_ is just a confident _will_.',
  '**Give the hope its own heading.** A hope under the same heading as a signed lease damages the lease. Under its own heading — _what we hope to do, and have not arranged_ — it costs nothing and reads as honesty.',
  '⚠ **Answer "what is not changing" even though nobody asked it out loud.** Everybody asked it silently. It is the paragraph customers read twice and the one that stops a week of telephone calls.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an announcement about something coming at your work (35 words or more). Use the frame.'));
out.push(p('**TO ______________ — ______________**   **What is arranged.** We are going to ______________ on ______________. ______________ is ______________ and ______________ is ______________.   **Also arranged.** From ______________ we are going to ______________. ______________.   **What we hope to do, and have not arranged.** We hope to ______________. There is no ______________, and if anybody tells you otherwise ______________.   **What is not changing.** ______________. Nobody is ______________ and nothing is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the evidence beside each arranged thing. Your second _going to_ has no evidence — is it arranged, or is it a hope in the wrong paragraph?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a customer tell the certain from the hoped-for?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Going to_ only for arranged things', ''],
  ['Evidence beside each one', ''],
  ['Hopes under their own heading', ''],
  ['A "what is not changing" paragraph', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their announcement. The class sorts every future sentence into arranged or hoped-for, by ear.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a plan at your work that was announced and did not happen (60 to 100 words). Say how it was announced, what was actually arranged at the time, and what the announcement cost.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was really arranged_   ✓ _going to / will used correctly?_   ? _who announced it, and did they know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases was the thing announced as certain never arranged at all? That is the cycle, told by the class.'));
out.push(box('Homework', ['Write your final text. Then take three future plans at your work and write the evidence beside each — lease, order, booking, or nothing (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.2 =======================
out.push(pb());
out.push(h2('24.2  We hope to open in Homs'));
out.push(p('**Function:** saying what you intend   ·   **Grammar:** _hope to · intend to · plan to · aim to_   ·   **Pronunciation:** the honest fall on _hope_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name two things you hope to do at work this year but cannot promise. What would have to happen first?'));
out.push(p('**b**  Which are right? _We hope to open. · We hope opening. · We hope that we open. · We are hoping to open._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the customer prefer "we hope to"?   **A** it is politer   **B** it tells her what is uncertain   **C** it is shorter'));
out.push(p('**b**  Listen again. **1** What does Nour add after every _we hope to_? **2** What does she say about a hope with no condition on it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  "What would have to happen first?"', [
  ['Customer', 'You say you hope to open in Homs. Does that mean yes or no?'],
  ['Nour', 'It means we intend to and it is not arranged. What would have to happen first is a lease at a rent we can pay, and we have not found one.'],
  ['Customer', 'Most companies would just say they are opening.'],
  ['Nour', 'And then in May they are not opening, and you remember. _We hope to_ costs me nothing today and saves me that conversation.'],
  ['Customer', 'So when will you know?'],
  ['Nour', 'By the end of March. If there is a lease by March we are going to open before the summer; if there is not, we are not going to try this year. I will write to you either way.'],
  ['Customer', 'That is more useful than the promise.'],
  ['Nour', 'A hope with a condition and a date on it is nearly as useful as a plan. A hope with nothing on it is just a nice feeling, and nobody can do anything with a nice feeling.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what you intend**',
  table(['Shape', 'Feel'], [
    ['**hope to** + verb', 'you want it; it is not certain'],
    ['**intend to** + verb', 'a settled intention, still not arranged'],
    ['**plan to** + verb', 'there is a plan, not yet a commitment'],
    ['**aim to** + verb', 'a target you are working towards'],
    ['**are hoping to** + verb', 'the same, slightly more tentative'],
  ], [1.7, 2.3]),
  '⚠ **All of these take _to_ + verb:** _hope **to** open_, _intend **to** write_. Never ~~hope opening~~, ~~plan for open~~.',
  '⚠ **Every hope needs two things after it: a condition and a date.** _We hope to open in Homs — if there is a lease by March._ Without them it is a nice feeling, and nobody can plan around a nice feeling.',
  '⚠ **Say when you will know.** _By the end of March_ turns an uncertainty into an appointment, and it is the half people forget.',
  '⚠ Do not use _hope_ to soften something that is actually arranged. _We hope to deliver on Tuesday_, when the van is booked, teaches the reader to discount everything you say.',
  '**Practise:** Say each with a condition and a date. 1 a second store 2 a new machine 3 hiring somebody 4 a price reduction 5 a training course',
  '**Useful phrases:**  We hope to…  ·  if there is a lease by March  ·  We intend to…  ·  I will write to you either way.  ·  By the end of March we will know.',
  '**Pronunciation – the honest fall.** 🔊 **Track 24.4** Listen: _we **hope** to open in Homs_ — a small stress on _hope_ and a fall at the end. Said quickly and flat it sounds like a promise, which is exactly what it is not. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks whether a hope means yes or no; B answers with the condition, the date, and the promise to write either way. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You say you hope to __________. Does that mean yes or no?'],
  ['B', 'It means we intend to and it is not arranged. What would have to happen first is __________, and __________.'],
  ['A', 'Most companies would just say they are __________.'],
  ['B', 'And then in __________ they are not, and you remember.'],
  ['A', 'So when will you know?'],
  ['B', 'By __________. If __________ we are going to __________; if not, __________. I will write to you either way.'],
]));
out.push(table(['Role card 1 — a price reduction', 'Role card 2 — a bigger store room'], [[
  'A is a customer asking whether prices will come down. Condition: the import route through Latakia reopening. Date of knowing: the end of the quarter.',
  'A is a supplier asking whether you can take bigger deliveries. Condition: renting the unit next door, which is occupied until June.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the condition and the date of knowing. Then say whether you could plan around the answer.'));
out.push(PHRASE_CARD(['We hope to…', 'if there is a lease by March', 'We intend to…', 'By the end of March we will know.', 'I will write to you either way.', 'a condition and a date']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **four** real hopes about your work. Each one: the hope, the condition, and the date you will know.'));
out.push(table(['We hope to…', 'The condition', 'When we will know'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.6, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We hope to _______, if _______. We will know by _______._'));
out.push(p('**Listener task:** write down any hope with no condition. Ask the speaker what would have to happen first; they always know, and they had not said it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we hope opening_ and _we hope that we will open maybe_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reply to a customer, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Homs — what is decided and what is not',
  'Dear Mr Haffar,',
  'You asked whether we are opening in Homs. The honest answer is in two halves.',
  '**What is decided.** Nothing yet. There is no lease, no date and no staff.',
  '**What we hope to do.** We hope to open a small store in Homs — the twenty lines we sell most, not the full range. We intend to decide by the end of March.',
  '**What it depends on.** A lease at or below 1,200 a month in a street with passing trade. We have seen four and all four were above that or in the wrong street.',
  '**What you can plan on in the meantime.** Your deliveries from Damascus continue exactly as now, on Tuesdays and Thursdays, whether or not Homs happens. Nothing about Homs changes anything about you.',
  '**When you will hear.** I will write to you in the first week of April either way — including if the answer is no, which I would rather tell you than leave you wondering in June.',
  'Thank you. Best regards, Nour Mansour · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which paragraph is the shortest, and why is that right?'));
out.push(item('2', 'What is the number in "what it depends on" doing there?'));
out.push(item('3', 'What does the writer promise to do even if the answer is no?'));
out.push(box('Writer\'s box', [
  '**An honest answer about an uncertain plan — five headed parts:** what is decided (often _nothing yet_) → what we hope to do → what it depends on, with a number → **what you can plan on meanwhile** → when you will hear, either way.',
  '**Say _nothing yet_ in its own paragraph if that is the truth.** Two words under a heading is a stronger answer than four lines that avoid saying it.',
  '**Put a number on the condition.** _A lease at or below 1,200 a month._ It lets the reader judge the odds themselves, and it stops the condition being a polite way of saying no.',
  '⚠ The paragraph the reader actually wants is **what you can plan on meanwhile**. Most letters about an uncertain plan forget to say that the certain things are unaffected, and the reader spends a week assuming otherwise.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Answer a real question about something uncertain at your work (35 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — what is decided and what is not   Dear ______________,   You asked whether ______________. The honest answer is in two halves.   **What is decided.** ______________.   **What we hope to do.** We hope to ______________. We intend to decide by ______________.   **What it depends on.** ______________. ______________.   **What you can plan on in the meantime.** ______________, whether or not ______________.   **When you will hear.** I will write to you ______________ either way — including if the answer is no.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put a number on the condition. Yours says _if we find the right place_ — what would make a place right, in a figure?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the reader know what to do until the answer comes?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Hope to_ / _intend to_ with _to_ + verb', ''],
  ['A condition with a number in it', ''],
  ['What the reader can plan on meanwhile', ''],
  ['A date for hearing, either way', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what you can plan on meanwhile". The class says whether they could get on with their week.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you have hoped to do at work for a long time (60 to 100 words). Say what it depends on, whether that condition has ever nearly been met, and what you would do first if it were.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the condition_   ✓ _hope / intend + to + verb?_   ? _is the condition really the obstacle?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the stated condition the real obstacle? Sometimes it is not, and finding that out is worth the whole cycle.'));
out.push(box('Homework', ['Write your final text. Then write your four work hopes with a condition and a date of knowing on each, and show them to somebody who can check the conditions (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.3 =======================
out.push(pb());
out.push(h2('24.3  We would like to propose three steps'));
out.push(p('**Function:** proposing   ·   **Grammar:** _we would like to… · would it be possible to…? · we suggest_   ·   **Pronunciation:** _we\'d like_ said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of one change you would propose at your work. Who would have to agree, and what would they be afraid of?'));
out.push(p('**b**  Which are right? _We would like to propose. · We would like propose. · We suggest to change. · We suggest changing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia change about the proposal?   **A** the idea   **B** she makes the first step small   **C** the price'));
out.push(p('**b**  Listen again. **1** Why does she want a small first step? **2** What does she say every proposal must say about stopping?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  "Make the first step small"', [
  ['Hala', 'I would like to propose Saturday deliveries. All customers, every Saturday, from next month.'],
  ['Nadia', 'That is a good idea and nobody will agree to it.'],
  ['Hala', 'Why not?'],
  ['Nadia', 'Because it is a whole new day for everybody at once, and if it fails it fails in front of four hundred customers. Make the first step small. _We would like to propose a trial run: Saturdays for the Mezzeh district only, for six weeks._'],
  ['Hala', 'And then?'],
  ['Nadia', 'Then step two, if the trial works: the whole city. Step three: a second driver. Three steps, and each one only happens if the one before it worked.'],
  ['Hala', 'That is slower.'],
  ['Nadia', 'It is slower and it will actually happen, which is faster than a perfect plan that is refused. And one more thing: say how you would stop. _If fewer than thirty orders come in six weeks, we stop and nothing is lost._ A proposal that cannot be stopped is a proposal nobody dares to start.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Proposing**',
  table(['Shape', 'Use'], [
    ['**We would like to propose** + noun', 'the formal opening of a proposal'],
    ['**We would like to** + verb', '_we would like to try Saturdays for six weeks_'],
    ['**We suggest** + **-ing**', '_we suggest starting with Mezzeh only_'],
    ['**Would it be possible to** + verb?', 'asking permission, not stating a plan'],
    ['**If it works, we would then…**', 'step two, conditional on step one'],
  ], [2, 2]),
  '⚠ **_Would like_ + _to_ + verb; _suggest_ + _-ing_.** _We would like **to try**_ · _we suggest **trying**_. The two patterns are different and mixing them is the commonest error here.',
  '⚠ **Make the first step small, cheap and reversible.** A trial in one district for six weeks is agreed; a whole new system for everybody is refused, however good it is.',
  '⚠ **Say how you would stop.** _If fewer than thirty orders come in six weeks, we stop._ The exit is what makes the start possible, because it takes the risk off the person who has to say yes.',
  '⚠ Each later step must depend on the one before it: _if it works, we would then…_ Three independent steps are three risks; three dependent steps are one.',
  '**Practise:** Propose each as a small first step with an exit. 1 a new delivery day 2 a stock count 3 a price change 4 a new supplier 5 a training hour each week',
  '**Useful phrases:**  We would like to propose a trial run…  ·  We suggest starting with…  ·  for six weeks  ·  If it works, we would then…  ·  If not, we stop and nothing is lost.',
  '**Pronunciation – _we\'d like_.** 🔊 **Track 24.6** Listen: _we\'d like to propose_ — _we\'d_ is one short syllable. Said as _we would_ in speech it sounds like a formal letter read aloud. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes something too big; B shrinks the first step and adds the exit. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I would like to propose __________. __________, every __________, from __________.'],
  ['B', 'That is a good idea and nobody will agree to it.'],
  ['A', 'Why not?'],
  ['B', 'Because __________, and if it fails it fails in front of __________. Make the first step small: __________.'],
  ['A', 'And then?'],
  ['B', 'Then step two, if the trial works: __________. Step three: __________.'],
  ['A', 'That is slower.'],
  ['B', 'It is slower and it will actually happen. And say how you would stop: __________.'],
]));
out.push(table(['Role card 1 — a weekly stock count', 'Role card 2 — a new supplier'], [[
  'A proposes counting everything every Friday, from this week. B shrinks it: the twenty fastest lines, four Fridays, then review.',
  'A proposes moving all wrap purchases to a new supplier at once. B shrinks it: one order of ten boxes, checked on arrival, then decide.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the shrinking for the class – **without the book**.'));
out.push(p('**Listener task:** write the small first step and the exit. Then say whether you would agree to it.'));
out.push(PHRASE_CARD(['We would like to propose a trial run…', 'We suggest starting with…', 'for six weeks', 'If it works, we would then…', 'If not, we stop.', 'small, cheap and reversible']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** changes you would propose. For each, write the step small enough to be agreed, and the exit.'));
out.push(table(['The change', 'The small first step', 'The exit'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We would like to propose _______, for _______. If _______, we would then _______. If not, we stop and _______._'));
out.push(p('**Listener task:** write down the proposal you would agree to fastest. Ask yourself whether that is because it is the best one, or the smallest one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we would like propose_ and _we suggest to start_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the proposal, and answer the questions.'));
out.push(box(null, [
  '**PROPOSAL — Saturday deliveries, as a six-week trial**',
  '**What we would like to do.** We would like to propose a trial run: Saturday deliveries to the Mezzeh district only, for six weeks, starting 7 June.',
  '**Why.** Eleven customers have asked for Saturdays in the last three months. Nine of them are in Mezzeh. Four have said they would move an order from Thursday to Saturday, which would take weight off the Thursday van.',
  '**What it costs.** One driver for six Saturday mornings, and the van, which is otherwise standing. About 180,000 in total, or 30,000 a Saturday.',
  '**Step two, if it works.** The rest of the city, from the first Saturday in August. We would decide in the last week of July.',
  '**Step three, if step two works.** A second driver, so that Saturday does not depend on one person being well.',
  '**How we would stop.** If fewer than thirty orders come in the six weeks, we stop on 19 July and tell the eleven customers plainly that the trial did not pay. Nothing is bought and nobody is taken on, so stopping costs only the six mornings.',
  '**What we need from you.** A yes or a no by 24 May, and nothing else. We will arrange the rest.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the three steps are conditional on the one before?'));
out.push(item('2', 'What makes the exit cheap?'));
out.push(item('3', 'What does the last paragraph ask for, and what does it promise?'));
out.push(box('Writer\'s box', [
  '**A three-step proposal — the shape:** what we would like to do (small, dated) → **why**, with numbers from real demand → what it costs → step two, conditional → step three, conditional → **how we would stop** → what we need from you, with a date.',
  '**Count the demand before you propose.** _Eleven customers have asked in three months; nine are in Mezzeh._ A proposal built on a count is argued about on its numbers; one built on a feeling is argued about on whose feeling it is.',
  '**Make stopping cheap and say so.** _Nothing is bought and nobody is taken on._ The reader\'s real question is never "will this work" but "what happens to me if it does not".',
  '⚠ End with **one** ask and a date: _a yes or a no by 24 May, and nothing else_. A proposal that asks for a decision, a budget, a meeting and an opinion gets none of them.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-step proposal for a real change (35 words or more). Use the frame.'));
out.push(p('**PROPOSAL — ______________**   **What we would like to do.** We would like to propose ______________, for ______________, starting ______________.   **Why.** ______________ have asked ______________. ______________.   **What it costs.** ______________. About ______________.   **Step two, if it works.** ______________. We would decide ______________.   **Step three, if step two works.** ______________.   **How we would stop.** If ______________, we stop on ______________. ______________, so stopping costs only ______________.   **What we need from you.** A yes or a no by ______________, and nothing else.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says make stopping cheap and say so. What exactly would be wasted if this stopped at week six?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody say yes to this in two minutes?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A small, dated first step', ''],
  ['Numbers from real demand', ''],
  ['Steps two and three conditional', ''],
  ['A cheap exit, and one ask with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "how we would stop". The class says which proposal they would sign today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a proposal of yours that was refused (60 to 100 words). Say what you asked for, how big the first step was, whether there was an exit, and how you would write it now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the smaller first step they could have asked for_   ✓ _would like to / suggest + -ing_   ? _was it refused, or was it never answered?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many were refused, and how many were simply never answered? The second is commoner, and it is usually a proposal with no single ask and no date.'));
out.push(box('Homework', ['Write your final text. Then rewrite one refused proposal as three steps with a cheap exit, and show it to the person who refused it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.4 =======================
out.push(pb());
out.push(h2('24.4  First, then, after that — and why'));
out.push(p('**Function:** putting a plan in order   ·   **Grammar:** sequencers + _because_ / _so that_   ·   **Pronunciation:** the pause after a sequencer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe something you do at work in four steps, using _first · then · after that · finally_.'));
out.push(p('**b**  Which order words do you know? Put them in order: _finally · first · after that · then · at the same time_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is missing from Bassel\'s plan?   **A** the steps   **B** the reason each step is in that position   **C** the dates'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub do with the step that can be done at the same time? **2** Why does he want a reason on each step?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  "Why that order?"', [
  ['Bassel', 'The plan for the store: first we sign the lease, then we paint, after that we fit the shelves, then we stock it, finally we open.'],
  ['Mr Ayoub', 'Five steps in the right order. Now tell me why painting comes before the shelves.'],
  ['Bassel', 'Because you cannot paint behind a fitted shelf.'],
  ['Mr Ayoub', 'Then put that in. Without it, somebody who is in a hurry will fit the shelves first, and we will spend a Saturday taking them down again.'],
  ['Bassel', 'So: then we paint, **because** you cannot paint behind a fitted shelf.'],
  ['Mr Ayoub', 'Better. And what can be done at the same time as the painting?'],
  ['Bassel', 'The sign. The sign maker needs three weeks and the painting takes four days.'],
  ['Mr Ayoub', 'Then the sign is not step six, it is _at the same time_, ordered the day we sign the lease. The order of a plan is not the order you thought of the steps in. Half the delay in any plan is a thing that could have been started on day one and was started on day forty.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Ordering a plan, with reasons**',
  table(['Shape', 'Example'], [
    ['**First**, …', '**First** we sign the lease.'],
    ['**Then** / **After that**, …', '**Then** we paint. **After that** we fit the shelves.'],
    ['**At the same time**, …', '**At the same time** we order the sign.'],
    ['**Finally**, …', '**Finally** we open.'],
    ['**because** / **so that** on each step', '…we paint, **because** you cannot paint behind a shelf'],
  ], [1.7, 2.3]),
  '⚠ **Every step needs a reason for being in that position**, not just a position. _Then we paint, because you cannot paint behind a fitted shelf._ Without the reason, somebody in a hurry will reorder your plan and undo it.',
  '⚠ **Find the things that can run at the same time.** Anything with a long waiting time — a sign, a licence, a machine on order — starts on day one, not in its logical place. Half the delay in any plan is a step that waited for no reason.',
  '⚠ **_Because_ + subject and verb; _so that_ + a purpose.** _…because you cannot paint behind a shelf_ · _…so that the paint is dry before the stock arrives_.',
  '⚠ Four to six steps. A plan with eleven steps is a list, and nobody follows a list.',
  '**Practise:** Put each in order with a reason on every step. 1 opening a store 2 a stock count 3 taking on somebody new 4 a delivery day 5 closing the year',
  '**Useful phrases:**  First…  ·  Then…  ·  After that…  ·  At the same time…  ·  Finally…  ·  because you cannot…  ·  so that…',
  '**Pronunciation – the pause after a sequencer.** 🔊 **Track 24.8** Listen: _first // we sign the lease_. A small pause after _first_ and _then_ marks the step. Without it, five steps sound like one long sentence. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a plan in order; B asks why each step is where it is, and finds the thing that can run in parallel. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The plan: first __________, then __________, after that __________, finally __________.'],
  ['B', 'Four steps in the right order. Now tell me why __________ comes before __________.'],
  ['A', 'Because __________.'],
  ['B', 'Then put that in. Without it, somebody in a hurry will __________.'],
  ['A', 'So: then __________, because __________.'],
  ['B', 'Better. And what can be done at the same time?'],
  ['A', '__________. It takes __________.'],
  ['B', 'Then it starts on day one, not in its logical place.'],
]));
out.push(table(['Role card 1 — taking somebody on', 'Role card 2 — the Saturday trial'], [[
  'Steps: advertise, interview, choose, paperwork, start. The long-wait item is the registration, which takes three weeks and could start the day the choice is made.',
  'Steps: tell the customers, hire the driver, plan the route, run the first Saturday, review. The long-wait item is the driver, who needs two weeks\' notice at his present job.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the steps with their reasons, and ring the one that moves to day one.'));
out.push(PHRASE_CARD(['First…', 'Then…', 'After that…', 'At the same time…', 'Finally…', 'because you cannot…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write a real plan of yours in **five** steps. A reason on every step, and one thing marked "at the same time".'));
out.push(table(['Step', 'What happens', 'Why here'], [['First', '', ''], ['Then', '', ''], ['After that', '', ''], ['At the same time', '', ''], ['Finally', '', '']], [0.9, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _First _______, because _______. Then _______, because _______. At the same time, _______, because it takes _______._'));
out.push(p('**Listener task:** write down the "at the same time" item from each plan. These are the sentences that save weeks.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _at first_ for _first_, and _because of you cannot_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the plan, and answer the questions.'));
out.push(box(null, [
  '**OPENING THE BAGHDAD STREET STORE — the plan, with reasons**',
  '**First, 12 May: sign the lease.** Nothing else can start until this is signed, because everything after it costs money we would not spend on a street we do not have.',
  '**At the same time, 12 May: order the sign and apply for the licence.** The sign maker needs three weeks and the licence takes six. Both are started the day the lease is signed, because neither depends on anything inside the store and both would otherwise be the reason we open late.',
  '**Then, 20–24 May: paint.** Before the shelves, because you cannot paint behind a fitted shelf. Four days, and the paint must be dry before anything is fixed to the wall.',
  '**After that, 26–28 May: fit the shelves.** Two men, three days.',
  '**Then, 1–5 June: stock it.** Twenty lines only, moved from Mezzeh, so that we are not buying new stock and opening a store in the same week.',
  '**Finally, 8 June: open.** A Monday, because a first day with a mistake in it is better on a quiet day than on a Thursday.',
  '⚠ If the licence is late, we open anyway with the licence pending — that is allowed — but we do not open without the sign, because a shop nobody can see from the street is a shop that is paying rent to be invisible.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two tasks start on day one although they come later in the logic?'));
out.push(item('2', 'What reason is given for opening on a Monday?'));
out.push(item('3', 'What does the last line decide in advance?'));
out.push(box('Writer\'s box', [
  '**A plan with reasons — one step per line:** the sequencer, **the date**, the step in bold, then the reason it is in that position.',
  '**Put the long-wait items in an "at the same time" line at the very start**, with their waiting times. _The sign takes three weeks and the licence six._ This single line is the difference between opening on the 8th and opening in July.',
  '**Decide the awkward case in advance.** _If the licence is late, we open anyway; if the sign is late, we do not._ The plan that has already decided what to sacrifice does not stop to hold a meeting in week five.',
  '⚠ Dates on every line, even approximate ones. A plan with steps and no dates cannot be behind schedule, which sounds comfortable and is the reason it will be.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a plan with reasons for something real (35 words or more). Use the frame.'));
out.push(p('**______________ — the plan, with reasons**   **First, ______________: ______________.** Nothing else can start until ______________, because ______________.   **At the same time, ______________: ______________.** ______________ needs ______________. Started on day one, because ______________.   **Then, ______________: ______________.** Before ______________, because ______________.   **After that, ______________: ______________.** ______________.   **Finally, ______________: ______________.** ______________, because ______________.   ⚠ If ______________ is late, we ______________ — but we do not ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the long-wait items at the very start with their waiting times. What is the longest wait in your plan, and which line does it start on?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody else run this plan without asking you anything?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A date on every step', ''],
  ['A reason for each position', ''],
  ['Long-wait items started on day one', ''],
  ['The awkward case decided in advance', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "at the same time" line. The class says how many weeks each one saves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a plan that was late (60 to 100 words). Say which step everything waited for, when it could have been started, and what that delay cost.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the step that could have started on day one_   ✓ _sequencers and because_   ? _did anybody notice at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many delays were caused by a long-wait item started late? Nearly all, and it is the most reusable finding in the unit.'));
out.push(box('Homework', ['Write your final text. Then take a plan you are in the middle of and list everything in it with a wait longer than a week (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.5 =======================
out.push(pb());
out.push(h2('24.5  We have already done three of the five'));
out.push(p('**Function:** reporting progress   ·   **Grammar:** present perfect: _have done · haven\'t done yet · already_   ·   **Pronunciation:** the contracted _we\'ve_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things you have already done this week and two you have not done yet.'));
out.push(p('**b**  Which are right? _We have already signed. · We have signed already. · We didn\'t sign yet. · We haven\'t signed yet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia put first in the report?   **A** what is left   **B** what is already done   **C** the problems'));
out.push(p('**b**  Listen again. **1** Why does she put the finished half first? **2** What does she say about the word _nearly_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  "Start with what is finished"', [
  ['Hala', 'The progress report. "There are still two things to do: the shelves and the stock."'],
  ['Nadia', 'True, and it is the wrong way round. What have you already done?'],
  ['Hala', 'The lease is signed, the sign is ordered, the painting is finished.'],
  ['Nadia', 'Then start there. _We have already signed the lease, ordered the sign and finished the painting. Three of the five steps are done._ Now the two that are left are the end of a sentence, not the whole report.'],
  ['Hala', 'It feels like boasting.'],
  ['Nadia', 'It is a count, and a count is not boasting. The person reading it has to decide whether to worry. Three of five is an answer; "there are still two things to do" is a worry with no size on it.'],
  ['Hala', 'And the painting is nearly finished, not finished.'],
  ['Nadia', 'Then it is not finished. _Nearly_ is the most expensive word in a progress report — it is used for anything between one hour and three weeks of work. Say what is done and what is not, and put a date on the not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The present perfect – what is done and what is not**',
  table(['Shape', 'Example'], [
    ['**have / has** + third form', 'We **have signed** the lease.'],
    ['with **already**', 'We **have already ordered** the sign.'],
    ['negative with **yet**', 'We **haven\'t fitted** the shelves **yet**.'],
    ['question with **yet**', '**Have** you stocked it **yet**?'],
    ['a count', '**Three of the five** steps **are done**.'],
  ], [1.6, 2.4]),
  '⚠ **Start a progress report with what is finished, and count it.** _Three of the five steps are done._ The reader\'s question is "should I worry", and a count answers it; a list of what is left does not.',
  '⚠ **_Haven\'t … yet_, not _didn\'t … yet_.** _We haven\'t fitted the shelves yet._ The past simple with _yet_ is the commonest error in the cycle.',
  '⚠ **Ban _nearly_.** It covers anything from an hour to three weeks. Either it is done, or it is not done and has a date: _the painting is finished on Thursday_.',
  '⚠ _Already_ goes before the third form or at the end: _we have already signed_ · _we have signed already_. Both are fine.',
  '**Practise:** Report each with a count, and a date on what is left. 1 a store opening 2 a stock count 3 a licence 4 a trial run 5 the year\'s plan',
  '**Useful phrases:**  We have already…  ·  Three of the five are done.  ·  We haven\'t … yet.  ·  not _nearly_ — a date  ·  Have you … yet?',
  '**Pronunciation – _we\'ve_.** 🔊 **Track 24.10** Listen: _we\'ve already signed_ — _we\'ve_ is one syllable, and the stress is on _already_ and _signed_. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports what is left; B turns it round and counts, then removes every _nearly_. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The progress report. "There are still __________ things to do: __________."'],
  ['B', 'True, and it is the wrong way round. What have you already done?'],
  ['A', '__________, __________, __________.'],
  ['B', 'Then start there. _We have already __________. __________ of the __________ steps are done._'],
  ['A', 'It feels like boasting.'],
  ['B', 'It is a count, and a count is not boasting.'],
  ['A', 'And __________ is nearly finished.'],
  ['B', 'Then it is not finished. Say what is done, and put a date on what is not.'],
]));
out.push(table(['Role card 1 — the stock count', 'Role card 2 — the Saturday trial'], [[
  'Done: three of the four store rooms counted, the list printed, two staff trained. Not done: the upstairs room. A reports only the upstairs room, and calls it "nearly done".',
  'Done: the customers told, the driver hired, the route planned, two Saturdays run. Not done: the review. A says the trial is "going well", with no numbers.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the count you hear. Then write any _nearly_ that survived, and what date replaced it.'));
out.push(PHRASE_CARD(['We have already…', 'Three of the five are done.', 'We haven\'t … yet.', 'Have you … yet?', 'not nearly — a date', 'a count is not boasting']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Report progress on something real. **Four** things done, **two** not done yet, each with a date — and no _nearly_ anywhere.'));
out.push(table(['Already done', 'Not done yet', 'Date'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 1.4, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have already _______, _______ and _______. _______ of the _______ are done. We haven\'t _______ yet; that is _______._'));
out.push(p('**Listener task:** count the _nearlys_ that escaped. Then ask each one for a date and watch how different the two answers are.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we didn\'t sign yet_ and _we have signed yesterday_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the progress report, and answer the questions.'));
out.push(box(null, [
  '**PROGRESS — Baghdad Street store, as at 28 May**',
  '**Done: four of the six steps.** We have signed the lease (12 May), ordered the sign (12 May), applied for the licence (12 May) and finished the painting (24 May, on time).',
  '**Not done yet: two.** The shelves are being fitted and will be finished on 30 May. The stock moves from Mezzeh between 1 and 5 June.',
  '**Changed.** The sign maker now says three and a half weeks, not three — so the sign arrives on 6 June, two days before opening instead of four. This is tight but it holds.',
  '**The one thing I am watching.** The licence. It was applied for on the 12th and six weeks takes us to 23 June, which is after the opening. We are allowed to open with it pending, and I have the paper that says so, so this is a thing I am watching and not a thing that stops us.',
  '**Still 8 June.** Nothing in this report moves the opening date.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is in brackets after each finished step, and why?'));
out.push(item('2', 'What is the difference between "the one thing I am watching" and a problem?'));
out.push(item('3', 'Why is the last line there, when the dates above already say it?'));
out.push(box('Writer\'s box', [
  '**A progress report — five short parts:** **done**, counted, with the date each thing was done → **not done yet**, with dates → **changed** since last time → **the one thing I am watching** → and a final line saying whether the end date has moved.',
  '**Put the date beside each finished item.** _Signed the lease (12 May)._ It turns a claim into a record, and next month it is the only place that record exists.',
  '**Have exactly one "thing I am watching".** More than one and the reader does not know which to worry about; none at all and they assume you are not looking.',
  '⚠ **End with the end date, every time**, even when nothing has changed — especially then. _Still 8 June. Nothing in this report moves the opening date._ That is the line the reader was looking for, and they should not have to work it out from the dates above.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a progress report on something real (35 words or more). Use the frame.'));
out.push(p('**PROGRESS — ______________, as at ______________**   **Done: ______________ of the ______________ steps.** We have ______________ (______________), ______________ (______________) and ______________ (______________).   **Not done yet: ______________.** ______________ will be finished on ______________. ______________ between ______________.   **Changed.** ______________ — so ______________.   **The one thing I am watching.** ______________. ______________, so this is a thing I am watching and not a thing that stops us.   **Still ______________.** Nothing in this report moves ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says have exactly one thing you are watching. I can see three here — which one would actually move the date?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the reader know whether to worry, in ten seconds?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count of what is done', ''],
  ['A date beside each finished item', ''],
  ['_Haven\'t … yet_ with dates, and no _nearly_', ''],
  ['One watched item, and the end date restated', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says whether they would need to ask a single question after reading it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that was reported as "nearly finished" for a long time (60 to 100 words). Say how long, what was actually left, and what finally finished it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _how long "nearly" lasted_   ✓ _have / haven\'t … yet_   ? _what finished it in the end?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What finished each one? It is usually a date somebody finally put on it, in front of other people.'));
out.push(box('Homework', ['Write your final text. Then write this week\'s progress on something, with a count, dates in brackets, and one watched item (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.6 =======================
out.push(pb());
out.push(h2('24.6  Closing well — a year, a project, a course'));
out.push(p('**Function:** closing something   ·   **Grammar:** _thank you for… · what we have learned… · next year we are going to…_   ·   **Pronunciation:** reading a closing sentence slowly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How does your workplace end a year? Is anything written down, or does the year simply stop?'));
out.push(p('**b**  Which of these would you want to read in a year-end note? _the figures · what went wrong · who worked hardest · what is going to change_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub insist the note includes?   **A** the figures   **B** the thing that went wrong   **C** a list of names'));
out.push(p('**b**  Listen again. **1** What does he say about thanking everybody? **2** What is the one sentence he wants at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  The year-end note', [
  ['Nour', 'The note for the staff. "Thank you all for your hard work this year. We look forward to next year."'],
  ['Mr Ayoub', 'Who worked hard?'],
  ['Nour', 'Everybody.'],
  ['Mr Ayoub', 'Then it says nothing. Thanking everybody for everything is the same as thanking nobody for anything — and everybody in the room knows which three weeks were the hard ones. Name them.'],
  ['Nour', 'The three weeks in August when the generator failed and we worked mornings only.'],
  ['Mr Ayoub', 'That is a thank-you. And what went wrong this year?'],
  ['Nour', 'The Homs store. We opened it and closed it in two years.'],
  ['Mr Ayoub', 'Put it in. Everybody knows, and a note that leaves out the one thing everybody is thinking about is read as management not mentioning it. Say what we learned: we opened without counting the walk-in trade first, and we will not do that again.'],
  ['Nour', 'And the end?'],
  ['Mr Ayoub', 'One sentence about what is actually arranged for next year — not hopes, the arranged thing. Baghdad Street, on the eighth of June. People can go home with a date.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Closing a year, a project or a course**',
  table(['Shape', 'Example'], [
    ['**Thank you for** + the specific thing', '**Thank you for** the three weeks in August.'],
    ['**What went wrong** named plainly', 'We opened in Homs and closed it in two years.'],
    ['**What we have learned**', '**We have learned** to count the trade before the lease.'],
    ['**Next year we are going to…**', '**We are going to** open on Baghdad Street on 8 June.'],
    ['one arranged thing at the end', 'something with a date on it'],
  ], [2, 2]),
  '⚠ **Thank people for the specific thing.** Thanking everybody for everything thanks nobody. Name the three hard weeks; everybody knows which they were and the note will be believed for the rest of its length.',
  '⚠ **Name the thing that went wrong.** Everybody is already thinking about it. A closing note that omits it is read as a note that is avoiding it, and nothing else in the note survives that.',
  '⚠ **End with one arranged thing, with a date.** Not hopes. People leave a closing with whatever is at the end of it, and a date is worth more than three paragraphs of confidence.',
  '⚠ Keep it short. A closing note that is longer than a page is read by nobody; six sentences are read by everybody.',
  '**Practise:** Close each in four sentences — specific thanks, what went wrong, what was learned, one arranged thing. 1 a year 2 a project 3 a trial that failed 4 a course 5 somebody\'s last week',
  '**Useful phrases:**  Thank you for the three weeks in August.  ·  What went wrong was…  ·  We have learned to…  ·  Next year we are going to…  ·  on 8 June',
  '**Pronunciation – reading a closing slowly.** 🔊 **Track 24.12** Listen to the same four sentences read quickly and read slowly. The slow one is the one that is heard. A closing is the one time in the year to read at half speed. Repeat the last sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a general closing; B makes the thanks specific and puts the failure in. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The note. "Thank you all for __________. We look forward to __________."'],
  ['B', 'Who __________?'],
  ['A', 'Everybody.'],
  ['B', 'Then it says nothing. Name the __________.'],
  ['A', '__________.'],
  ['B', 'That is a thank-you. And what went wrong this year?'],
  ['A', '__________.'],
  ['B', 'Put it in. Everybody knows. Say what we learned: __________.'],
]));
out.push(table(['Role card 1 — the end of a failed trial', 'Role card 2 — somebody\'s last week'], [[
  'The Saturday trial got nineteen orders in six weeks and is being stopped. A wants to write "we will consider it again in the future". B wants the number and the lesson.',
  'A driver of nine years is leaving. A has written "we thank him for his service". B wants one specific thing he did, which everybody remembers.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs read their closings for the class – **without the book**, and slowly.'));
out.push(p('**Listener task:** write the specific thanks and the named failure. Then say what you would remember a week later.'));
out.push(PHRASE_CARD(['Thank you for the three weeks in August.', 'What went wrong was…', 'We have learned to…', 'Next year we are going to…', 'on 8 June', 'read it at half speed']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the four sentences to close your own year: the specific thanks, the thing that went wrong, what was learned, and one arranged thing with a date.'));
out.push(table(['The four sentences'], [['**1 Thank you for…**'], ['**2 What went wrong…**'], ['**3 We have learned…**'], ['**4 Next year we are going to…**']], [1]));
out.push(...lines(4));
out.push(stage('4R', 'Report', 6));
out.push(p('Read your four sentences to the class, slowly. Then say which of the four was hardest to write.'));
out.push(p('**Listener task:** write down the failure that was hardest to name. In most rooms it is the one everybody already knew.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _thank you for to work_ and _we have learn_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the year-end note, and answer the questions.'));
out.push(box(null, [
  '**TO EVERYBODY AT SHAM TRADING — the end of the year**',
  'Thank you for the three weeks in August. The generator failed on the 4th, we worked mornings only until the 26th, and not one delivery was late. I know what that cost, because I was here on two of those mornings and most of you were here on all of them.',
  'What went wrong this year was Homs. We opened a store in 2019 and closed it in 2021, and that was my decision both times. We opened it without counting the walk-in trade in that street for a single week first. We have learned to count before we sign, and the Baghdad Street lease was signed only after Bassel had stood on that pavement on four separate days.',
  'Two other things we have learned. Fixed delivery days are kept and promised days are not — so the Ghouta stays on Tuesdays and Thursdays. And a price held fourteen days in writing has never once lost us a customer, although we were sure it would.',
  'Next year, one arranged thing: we are going to open on Baghdad Street on 8 June. The lease is signed, the sign is ordered and the licence is applied for. Everything else you may hear about next year is a hope, and I will tell you which is which as it happens.',
  'Thank you. Khaled Ayoub',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the writer show he knows what August cost?'));
out.push(item('2', 'Whose decision was Homs, and why does the note say so?'));
out.push(item('3', 'What is promised about next year\'s news?'));
out.push(box('Writer\'s box', [
  '**A year-end note — five short paragraphs:** the specific thanks, with evidence that you know what it cost → what went wrong, **named, and owned** → two or three things learned, stated as rules → one arranged thing with a date and its evidence → thank you, and a name.',
  '**Own the failure in the first person.** _That was my decision both times._ A failure named in the passive — _mistakes were made_ — is the Unit 15 fault at the most visible moment of the year, and everybody notices.',
  '**State what was learned as a rule, not as a feeling.** _We have learned to count before we sign_ — and then the evidence that the rule was followed: _Bassel stood on that pavement on four separate days._',
  '⚠ Promise to label hopes as hopes. _I will tell you which is which as it happens._ It is the one promise in a closing note that can be kept every week of the following year.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the year-end note for your own workplace (35 words or more). Use the frame.'));
out.push(p('**TO ______________ — the end of the year**   Thank you for ______________. ______________. I know what that cost, because ______________.   What went wrong this year was ______________. ______________, and that was ______________. We have learned to ______________, and ______________.   Two other things we have learned. ______________. And ______________.   Next year, one arranged thing: we are going to ______________ on ______________. ______________ is ______________ and ______________ is ______________.   Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says own the failure in the first person. Yours says _it was decided_ — who decided it?"',
  'Quote, question, stop. This is the hardest band-3 question in the book to ask, and the most useful.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the people who were there recognise this year?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Thanks for one specific thing, with evidence', ''],
  ['The failure named and owned', ''],
  ['What was learned, as a rule', ''],
  ['One arranged thing, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their note slowly. The class says which one they would believe if they worked there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the closing you would want to receive (60 to 100 words). It can be for a year, a project or a job. Say what you would want named, thanked and dated.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they wanted named_   ✓ _have learned / are going to_   ? _has anybody ever written them one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many have ever received a closing of any kind? That answer is the argument for writing them.'));
out.push(box('Homework', ['Write your final text. Then write and actually send one closing — for a year, a project, or somebody who is leaving (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.7 =======================
out.push(pb());
out.push(h2('24.7  Review & Mediate: the year-end note and the course review'));
out.push(p('**Function:** telling a colleague what a closing document means   ·   **Review:** _going to_ · _hope to_ · _would like to_ · sequencers · the present perfect · closing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** When do you use _going to_ rather than _will_?',
  '**2** What two things must follow every _we hope to_?',
  '**3** _We suggest_ + __________ ; _we would like_ + __________.',
  '**4** Which word is banned in a progress report?',
  '**5** What goes at the end of a closing note?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi misread in the note?   **A** he reads the Homs paragraph as bad news about his job   **B** the date   **C** the thanks'));
out.push(p('**b**  Listen again. **1** How does Nour sort the note for him? **2** What is the one thing in it he can plan on?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  "Which part of this is about me?"', [
  ['Fadi', 'The year-end note. He says Homs went wrong and he says it was his decision. Is he telling us something is coming?'],
  ['Nour', 'No. Read it in three parts. The first is thanks, for August, and it is specific enough that he must have meant it. The second is what went wrong — Homs, named and owned, and finished two years ago.'],
  ['Fadi', 'And the third?'],
  ['Nour', 'The third is the only part about next year, and there is exactly one arranged thing in it: Baghdad Street, 8 June, with a signed lease, an ordered sign and an applied-for licence. That is what you can plan on.'],
  ['Fadi', 'There is nothing about drivers.'],
  ['Nour', 'There is nothing about drivers because nothing about drivers is arranged. If a second driver were arranged, that paragraph is where it would be — and he has promised to tell us which things are hopes as they happen, which is the sentence I would hold him to.'],
  ['Fadi', 'So a new store and no new driver means more Saturdays for me.'],
  ['Nour', 'It might. That is a question worth asking him in January, with the note in your hand — and asking it in January is a great deal better than waiting until June to find out.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – reading a closing document for somebody else**',
  table(['To sort it', 'To find the certainty', 'To act on it'], [
    ['Read it in three parts: thanks, what went wrong, next year.', 'How many arranged things are there?', 'What is not mentioned, and should be?'],
    ['Is the failure named and owned?', 'What is the evidence beside each one?', 'What would I ask, and when?'],
  ], [2, 1.9, 1.6]),
  '⚠ **Count the arranged things.** A closing note usually has exactly one, and it is the only part a reader can plan on. Everything else in it is a hope, a thank-you or history.',
  '⚠ **Notice what is not in it.** Fadi\'s question is the right one: a new store and no new driver has a consequence for him, and the absence is the information.',
  '⚠ **Turn the reading into a question with a date.** _I will ask him in January, with the note in my hand._ Mediating a document that nobody acts on is only reading aloud.',
  '**Practise:** A colleague has read the year-end note and thinks bad news is coming. Sort it into three parts, count the arranged things, and tell them what to ask and when.',
  '**Useful phrases:**  Read it in three parts.  ·  named and owned  ·  exactly one arranged thing  ·  what is not mentioned  ·  I would ask him in January.',
  '**Pronunciation – reading a document aloud for somebody.** 🔊 **Track 24.14** Listen to a paragraph read aloud for a colleague: slower than speech, with a pause at each full stop. Repeat one paragraph of the note at that speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has read a closing document and misread it; B sorts it into three parts and finds the one arranged thing. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A trial-closing note: the Saturday trial got nineteen orders in six weeks and is stopping. A reads it as "the company is in trouble". The note names the number, the lesson — count the demand in the district, not across the city — and one arranged thing: the Tuesday and Thursday runs continue exactly as now.',
  'A note about somebody leaving after nine years, naming one specific thing he did and saying that his round is being covered by two existing drivers until March, when it will be reviewed. B reads it as "they are not replacing him, so we will all do more". The arranged thing is the cover until March; the review is a date, not a promise.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the reading for the class – **without the book**.'));
out.push(p('**Listener task:** write the one arranged thing, and the question you would ask, with its date.'));
out.push(PHRASE_CARD(['Read it in three parts.', 'named and owned', 'exactly one arranged thing', 'what is not mentioned', 'I would ask in January.', 'a date, not a promise']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a closing document. Read it silently. Then explain it to **two** colleagues: one who is worried by it and one who has not read it at all.'));
out.push(table(['Who I told', 'What they thought it meant', 'The arranged thing, and what I would ask'], [['', '', ''], ['', '', '']], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document. This is the **twelfth** unit of Book 2, and the last. The unwritten thing is the one this whole book has been circling from Unit 13: **what is arranged and what is hoped for are different, and almost nobody says which is which — so the person who does is believed about everything else.**'));
out.push(p('_The note said ______. My colleague thought ______. The one arranged thing was ______, and I would ask ______ in ______._'));
out.push(p('**Listener task:** complete the Book 2 office-word list with the last entries: _proposal · trial run · action point · progress report · on track · behind schedule_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together — and then look at the board, because these are the last three of the course.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _We are going to open on 1 September. The lease is signed._   **A** It is arranged. **B** They are considering it. **C** They have opened.',
  '**2**  _We hope to open in Homs in 2027._   **A** It is arranged. **B** They intend to and it is not arranged. **C** They have decided against it.',
  '**3**  _We would like to propose a six-week trial._   **A** The trial has started. **B** They are asking permission. **C** The trial has failed.',
  '**4**  _At the same time, order the sign — it takes three weeks._   **A** Order it last. **B** Order it on day one. **C** Do not order it.',
  '**5**  _We haven\'t fitted the shelves yet._   **A** The shelves are fitted. **B** They are not fitted. **C** There are no shelves.',
  '**6**  _Still 8 June. Nothing in this report moves the opening date._   **A** The date has moved. **B** The date has not moved. **C** There is no date.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** Here: a short proposal, for somebody who can say yes.',
  'The three points for a proposal are nearly always: **what you would like to do** · **how long for** · **when you need an answer**.',
  '⚠ In twenty-five words, _we would like to try X for six weeks_ beats any amount of reasoning. The reason can wait for the meeting; the ask cannot.',
  '⚠ One ask, one date. A short message asking for a decision and an opinion gets an opinion.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Propose something small at your work. Write a short message (25 words or more). Say **what you would like to do**, **how long for**, and **when you need an answer**.'));
out.push(p('Dear ______________, we would like to try ______________ for ______________. If it works, we would then ______________. If not, we stop. Could you say yes or no by ______________? Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What you would like to do', ''],
  ['How long for', ''],
  ['A date for the answer', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('**The course review.** Write about this course (60 to 100 words). Say what you have already done with it outside this room — a real email, a real complaint, a real proposal — what you have not managed yet, and the one thing you are going to do next month.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then write the four sentences that close this course, as in 24.6: specific thanks, what went wrong, what you have learned, and one arranged thing with a date (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The lease is signed, so we ___ open on the first.   a) are going to   b) hope to   c) would like',
  '2  There is no lease yet. We ___ open in Homs in 2027.   a) are going to   b) hope to   c) hoping to',
  '3  We would like ___ a six-week trial.   a) propose   b) to propose   c) proposing',
  '4  We suggest ___ with Mezzeh only.   a) to start   b) starting   c) start',
  '5  ___ the same time, we order the sign.   a) In   b) At   c) On',
  '6  We ___ already signed the lease.   a) are   b) have   c) has',
  '7  We ___ fitted the shelves yet.   a) didn\'t   b) haven\'t   c) don\'t',
  '8  Next year we ___ going to open on Baghdad Street.   a) is   b) are   c) will',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 24.15** Listen to the progress report. Complete the note.   Steps done: ______   Not done yet: ______   What changed: ______   The one thing watched: ______   Opening date: ______'));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Nour', 'Progress on Baghdad Street, as at the twenty-eighth of May. Four of the six steps are done: the lease signed on the twelfth, the sign ordered on the twelfth, the licence applied for on the twelfth, and the painting finished on the twenty-fourth, on time.'],
  ['Nour', 'Two are not done yet. The shelves will be finished on the thirtieth, and the stock moves from Mezzeh between the first and the fifth of June.'],
  ['Nour', 'What has changed: the sign maker now says three and a half weeks rather than three, so the sign arrives on the sixth of June, two days before opening instead of four.'],
  ['Nour', 'The one thing I am watching is the licence, which may come after the opening — we are allowed to open with it pending. Still the eighth of June. Nothing in this report moves the opening date.'],
]));
out.push(p('**C  Writing.** Write a short proposal (35+ words): what you would like to do, how long for, what step two would be if it works, how you would stop, and a date for the answer.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use _going to_ only for what is arranged, and show the evidence',
  '☐ say what I hope to do, with a condition and a date of knowing',
  '☐ propose something as a small first step with a cheap exit',
  '☐ put a plan in order with a reason on every step',
  '☐ start the long-wait items on day one',
  '☐ report progress with a count, dates, and no _nearly_',
  '☐ close a year or a project: specific thanks, the failure owned, one arranged date',
  '☐ read a closing document for a colleague and find the one thing they can plan on',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The end of Book 2, and of A2', [
  'You have finished twenty-four units and one hundred and sixty-eight cycles. In Unit 13 you were writing a CV; in Unit 24 you are writing a proposal with an exit in it. Between those two you have written a damage report, a complaint and the answer to one, a set of instructions, a company profile, a note about an unconfirmed rumour and a year-end letter that names a failure.',
  'If you keep one thing from Book 2, keep this: **say the number, name the date, separate what is arranged from what you hope for, and put the thing you have not done in writing before somebody asks.** None of that is grammar, and all of it is why the grammar was worth learning.',
  '**Next: the End-of-Book Test** — Reading, Writing, Listening and Speaking, in the shape of the A2 Key examination, over Units 13 to 24. To prepare, go through the **"I can…"** box at the end of every unit from 13 onwards and find the lines you ticked 😐. Those lines are your week. The rest of the book you already have.',
  'And after that, B1 — where the same cycles get longer sentences, and where _I would be grateful if you could_ finally earns its place.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
