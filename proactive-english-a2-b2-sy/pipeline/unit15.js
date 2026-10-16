// Proactive English A2 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 15  Problems and Solutions'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**15.1**  talk about a possible situation and what will happen',
  '**15.2**  ask about possibilities',
  '**15.3**  talk about something you are certain will happen',
  '**15.4**  give a warning',
  '**15.5**  give strong advice',
  '**15.6**  reassure somebody',
  '**15.7**  Review & Mediate: explain a repair notice and a change of plan',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The lift has broken.** It stopped on a Tuesday with nobody in it, which everybody agrees was lucky. The Thursday class moves to **Room 3, on the ground floor**, until it is fixed.',
  '**Mr Bassam** is managing the repair and the notices, and he is enjoying neither.   ·   The engineer is **Abu Nizar**, who has fixed this lift four times.',
  '**Maya is planning three days in Latakia** and is arranging the whole trip around the weather, the bus and her sister\'s exams.',
], C.lyellow, C.orange));

// ======================= 15.1 =======================
out.push(pb());
out.push(h2('15.1  If it rains, we\'ll go on Sunday'));
out.push(p('**Function:** talking about a possible situation and its result   ·   **Grammar:** the first conditional   ·   **Pronunciation:** pausing at the comma; weak _if_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish the sentence five ways: _If the lift isn\'t fixed by Thursday, ______._ Your teacher writes the class\'s endings on the board.'));
out.push(board('If it rains, we\'ll go on Sunday.', 'If + now … , will + then'));
out.push(p('**b**  Which half is which? Mark **C** for the condition and **R** for the result. **1** _If it rains_ / _we\'ll stay at home_.  **2** _I\'ll ring you_ / _if the bus is late_.  **3** _If he asks_ / _I won\'t say anything_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where will Thursday\'s class be?   **A** in Room 12 as usual   **B** in Room 3, downstairs   **C** there will be no class'));
out.push(p('**b**  Listen again. **1** When did the lift stop, and why does everybody say it was lucky?   **2** What will happen if the part does not arrive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  The lift', [
  ['Mr Bassam', 'Nobody is to touch the lift. It stopped on Tuesday morning.'],
  ['Hiba', 'Was anybody in it?'],
  ['Mr Bassam', 'Nobody. It stopped between floors with the doors open and nobody inside, which Abu Nizar says is the luckiest thing that has happened in this building this year.'],
  ['Omar', 'So what happens on Thursday?'],
  ['Mr Bassam', 'If it isn\'t fixed by Thursday, your class will be in Room 3, on the ground floor.'],
  ['Hiba', 'And if it is fixed?'],
  ['Mr Bassam', 'Then you\'ll be upstairs as usual, and I will put a note on the door either way.'],
  ['Omar', 'When will you know?'],
  ['Mr Bassam', 'Abu Nizar has ordered the part. If it arrives on Wednesday, he will fit it on Wednesday evening. If it doesn\'t arrive, we wait, and nobody knows for how long.'],
  ['Hiba', 'Room 3 is the cold one.'],
  ['Mr Bassam', 'Room 3 is the cold one. If you come on Thursday, bring a coat.'],
  ['Omar', 'And if the part arrives and he fits it and it breaks again?'],
  ['Mr Bassam', 'Then I will retire, and you will all carry me down the stairs.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – the first conditional: a real possibility and its result**',
  table(['the condition — what might happen', 'the result — what you will do'], [
    ['**If** + **present simple**\n_**If** it **rains**…_\n_**If** the part **doesn\'t arrive**…_\n_**If** you **come** on Thursday…_',
     '**will** / **won\'t** + bare verb\n_… we **\'ll stay** at home._\n_… we **\'ll wait**._\n_… **bring** a coat._ (an imperative is also a result)'],
  ], [1.2, 1.4]),
  '⚠ **The big one.** After _if_, English uses the **present**, even though you are talking about the future: ~~If it will rain~~ → _**If it rains**_. ~~If the part will arrive~~ → _**If the part arrives**_.',
  '**Both orders are right.** _**If** it rains, we\'ll stay at home._ = _We\'ll stay at home **if** it rains._  When _if_ comes first, write a **comma** in the middle. When it comes second, no comma.',
  '**Not only _will_:** the result can be an imperative or a modal — _If you come, **bring** a coat._ · _If it rains, we **can** go on Sunday._',
  '**Practise:** Put the verbs in the right form.  1 If it ______ (rain), we ______ (not go).  2 If the part ______ (arrive) tomorrow, he ______ (fit) it.  3 I ______ (ring) you if the bus ______ (be) late.  4 If you ______ (see) Mr Bassam, ______ (ask) him about the lift.  5 If she ______ (not come), we ______ (start) without her.',
  '**Useful phrases:** If it isn\'t fixed by… · either way · and if it is? · nobody knows for how long · bring a coat',
  '**Pronunciation.** 🔊 **Track 15.2** Two things. _if_ is weak: /ɪf/, almost /əf/ in speech. And there is a small **pause at the comma**: _If it rains_ ⟍ (pause) ⟋ _we\'ll stay at home._ The first half rises, the second half falls. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a possible problem from the card; B says what they will do if it happens. A then asks _"And if it doesn\'t?"_ Then swap cards.'));
out.push(dlg(null, [
  ['A', 'What will you do if __________?'],
  ['B', 'If __________, I\'ll __________.'],
  ['A', 'And if it doesn\'t __________?'],
  ['B', 'Then I\'ll __________.'],
  ['A', 'And if __________ as well?'],
  ['B', '(laughs) Then I\'ll __________.'],
]));
out.push(table(['Card A – possible problems', 'Card B – possible problems'], [
  ['the lift isn\'t fixed by Thursday', 'it rains all weekend'],
  ['the bus doesn\'t come before eight', 'the shop is closed when you get there'],
  ['your phone has no battery at six', 'your friend forgets the meeting'],
  ['the room is cold', 'the price has gone up again'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** complete _if_ sentences you hear. Check that each one has a present verb after _if_ and a _will_ verb in the other half.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of **one** real thing that might go wrong this month — at home, at work, at college, with your transport, with your money. Tell your partner what it is and what you will do if it happens. Your partner must ask about a **second** problem: _"And if that doesn\'t work either?"_'));
out.push(p('**b**  Swap. This time your partner must find the hole in your plan — the thing you have not thought about — and ask you about it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s plan:  _Lina\'s problem is the water in her building. If it goes off on Tuesday, she will fill everything on Monday night, and if it is off on Wednesday as well she will go to her brother\'s and wash everything there. The hole in her plan is her neighbour upstairs, who is eighty-one and will not fill anything and will not ask anybody. Lina did not think of that, and by the end of the conversation the plan had a second half._'));
out.push(p('**Listener task:** whose plan has no hole in it? Whose problem would you most like to have instead of your own?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice on the door of the centre. Answer the questions.'));
out.push(model([
  '**AL-YASMIN LANGUAGE CENTRE — NOTICE TO ALL STUDENTS**',
  '**The lift is out of order.** It stopped on Tuesday 14 January. Please do not use it, and please do not press the button to see whether it works. It does not.',
  '**If it is not repaired by Thursday,** all evening classes on the second floor will move to the ground floor. Room 12 will be in Room 3; Room 14 will be in Room 5.',
  '**If it is repaired,** everything stays as it is and there will be a note on this door by four o\'clock on Thursday.',
  '**Either way there will be a note on this door by four o\'clock.** Please read the door before you climb the stairs.',
  '**If you cannot use the stairs,** come to reception and tell us. We will move your class to the ground floor whatever happens to the lift. Nobody has to explain why.',
  'Mr Bassam · Reception',
]));
out.push(item('1', 'What will happen to Room 12\'s class if the lift is not repaired?'));
out.push(item('2', 'What is on the door by four o\'clock on Thursday?'));
out.push(item('3', 'What should a student who cannot use the stairs do?'));
out.push(writers([
  'A notice with conditions: **the fact** → **if A, then this** → **if B, then that** → **what is true either way** → **the one group who need something different**.',
  'The strongest line in this notice is _**Either way** there will be a note on this door_. A reader with two possible futures needs one thing they can rely on. Give them it.',
  'Keep each condition on its **own line, starting with _If_**. A notice where the conditions are buried in a paragraph will be misread by half the people who read it.',
  '⚠ The last paragraph is what makes this a good notice rather than a correct one: it offers a way out, and it says _nobody has to explain why_. Write for the person who finds the notice hardest.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a notice with conditions for a real place — your building, your office, your college (35 words or more).'));
out.push(p('**______________ — NOTICE**   **______________** is ______________.   **If ______________,** ______________ will ______________.   **If ______________,** ______________.   **Either way ______________.**   **If you ______________,** ______________.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, a name at the bottom, and a date in the notice',
  'Present after _if_, _will_ in the other half, and a comma when _if_ comes first',
  'Each condition on its own line, starting with _If_',
  'All three parts: the two conditions · what is true either way · the people who need something different',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the notice you would really put up (60 words or more) about something that might go wrong where you live or work: the water, the heating, a road, a delivery, a closure. At least three _if_ sentences, one _either way_ sentence, and one line for the people it will be hardest for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as **somebody standing in front of the door with four minutes**. ★ _The line I would act on._  ✓ _One condition I had to read twice._  ? _What happens if neither of your two things happens?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall. Walk past them at reading speed — **four seconds each**. Which ones can you still act on at four seconds? Those are the good notices.'));
out.push(hw('Write the **note that goes on the door at four o\'clock** (40+ words): say what has happened, which room each class is in, and what will happen next week.'));

// ======================= 15.2 =======================
out.push(pb());
out.push(h2('15.2  What will happen if it isn\'t ready?'));
out.push(p('**Function:** asking about possibilities   ·   **Grammar:** first conditional questions   ·   **Pronunciation:** sentence stress in long sentences'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes one situation on the board — _the end-of-course evening is in June_. In ninety seconds the class must produce **six** questions beginning _What will happen if…?_ or _Will …, if…?_'));
out.push(board('What will happen if it rains?', 'Questions: 6 in 90 seconds ✓'));
out.push(p('**b**  Make the question. **1** _We\'ll move downstairs if it isn\'t fixed._ → What ______?  **2** _I\'ll wait._ → What ______ you ______ if she ______ (not come)?  **3** _Yes, the class will still happen._ → Will the class ______ if the lift ______ (be) broken?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Maya asking about?   **A** the bus to Latakia   **B** a hotel room   **C** her sister\'s exams'));
out.push(p('**b**  Listen again. **1** What happens to the ticket if she does not travel on Friday?   **2** What does the man say will happen if the coastal road is closed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  Six questions at the bus office', [
  ['Maya', 'I want to go to Latakia on Friday, but I have some questions first.'],
  ['Clerk', 'Everybody has questions on a Friday. Go on.'],
  ['Maya', 'If I buy the ticket today and I don\'t travel on Friday, what will happen?'],
  ['Clerk', 'If you tell us before Thursday evening, you can change it to another day. If you tell us on Friday morning, you lose it.'],
  ['Maya', 'And if the bus doesn\'t go at all — if the weather is bad?'],
  ['Clerk', 'Then it isn\'t your fault, and you don\'t lose anything. You come back here and we put you on the next one.'],
  ['Maya', 'What will happen if the coastal road is closed?'],
  ['Clerk', 'It won\'t be closed. If it is, we go the long way and you arrive three hours late, and nobody gives anybody any money back, because we did take you to Latakia.'],
  ['Maya', 'Will there be a seat if I come at seven instead of eight?'],
  ['Clerk', 'If you come at seven, there will be a seat and it will be a good one. If you come at eight, there will be a seat and you will be at the back by the door.'],
  ['Maya', 'One more. If my sister\'s exam moves to Monday, can I change the ticket twice?'],
  ['Clerk', '(pause) You can change it once. If you change it twice, you buy a new one. I am sorry about your sister.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking about a possible situation**',
  table(['question', 'answer'], [
    ['**What will happen if** the part doesn\'t arrive?', '_If it doesn\'t arrive, we\'ll wait._'],
    ['**What will you do if** she doesn\'t come?', '_I\'ll start without her._'],
    ['**Will** the class **happen if** the lift is broken?', '_Yes, it will. / No, it won\'t._'],
    ['**If** I come at seven, **will there be** a seat?', '_Yes, there will._'],
    ['**Can I** change it **if** the date moves?', '_Yes, once._'],
  ], [1.3, 1.2]),
  '**The question is in the _will_ half, never in the _if_ half:** _**What will you do** if it rains?_  ~~What you will do if it rains?~~  ~~What will happen if it will rain?~~',
  '**Both orders again:** _If I come at seven, will there be a seat?_ = _Will there be a seat if I come at seven?_',
  '⚠ Watch the **negative question**, which students avoid and then need: _What will happen **if it doesn\'t** arrive?_ — present simple negative after _if_, not ~~if it won\'t arrive~~.',
  '**Practise:** Make the question.  1 (what / happen / if / the part / not arrive) ______?  2 (what / you / do / if / it / rain) ______?  3 (there / be / a seat / if / I / come / at seven) ______?  4 (I / can / change it / if / the date / move) ______?  5 (she / be / angry / if / we / start / without her) ______?',
  '**Useful phrases:** What will happen if…? · And if…? · One more question. · It isn\'t your fault. · You can change it once.',
  '**Pronunciation.** 🔊 **Track 15.4** A long conditional question has only **two or three** strong words: _What will **HAPPEN** if the **PART** doesn\'t **ARRIVE**?_ Everything else is weak. Listen, mark the strong words, and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B is the person behind the desk on the card; A must ask **six** questions beginning _What will happen if…_, _Will…_ or _Can I…_ — and may not ask the same shape twice in a row. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I want to __________, but I have some questions first.'],
  ['B', 'Go on.'],
  ['A', 'What will happen if __________?'],
  ['B', 'If __________, __________. If __________, __________.'],
  ['A', 'And if __________?'],
  ['B', '__________.'],
  ['A', 'Can I __________ if __________?'],
  ['B', 'You can __________ once. If you __________ twice, __________.'],
]));
out.push(table(['Card A – you work at the bus office', 'Card B – you work at the language centre'], [
  ['change before Thursday evening: free', 'change your class level in the first two weeks: free'],
  ['change on the morning: you lose the ticket', 'after that: you pay half again'],
  ['bus cancelled by weather: not your fault, free', 'class cancelled by the centre: the lesson is added at the end'],
  ['road closed: three hours late, no money back', 'if you miss four lessons: no certificate'],
  ['change twice: buy a new ticket', 'if you are ill: bring a paper and nothing is counted'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** conditions that cost the customer money and the **one** that costs nothing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something you have to arrange soon — a ticket, an appointment, a form, a delivery, a class. Write the **six** questions you would ask before you paid for it. Ask your partner, who answers as the office and must say _"you can do that once"_ to one of them.'));
out.push(p('**b**  Swap. Then mark the **one** question whose answer would change your decision.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Maya asked six questions at the bus office. If she cancels before Thursday evening she can change the day; if she cancels on Friday morning she loses the ticket. If the weather stops the bus, she loses nothing. If the coastal road is closed she arrives three hours late and gets nothing back, because they did take her to Latakia, which I thought was a hard sentence but a fair one. She can change the ticket once. The question that would change her decision is the last one, because her sister\'s exam might move._'));
out.push(p('**Listener task:** write the **one** question you would always ask before paying for anything, in any office, in any country.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the bus company\'s website. Answer the questions.'));
out.push(model([
  '**TICKETS — WHAT HAPPENS IF YOUR PLANS CHANGE**',
  '**If you change the date before 18:00 the day before**, you can move your ticket to another day in the same month. There is no charge. You can do this **once**.',
  '**If you change it on the morning of travel**, the ticket is lost. We are sorry; the seat has already been counted.',
  '**If we cancel the bus** — for weather, for the road, for any reason that is ours — you do not lose anything. Come to the office and we will put you on the next bus with a seat, or give your money back if you prefer.',
  '**If the road is closed while you are travelling**, the bus will go the long way. You will arrive late, sometimes three hours late. We do not give money back for this, because the journey has happened.',
  '**If you are ill**, bring a paper from a doctor within seven days and we will treat it as our cancellation.',
  '**Questions?** Ask at the window before you buy, not after. Everything on this page is easier before you have paid.',
]));
out.push(item('1', 'How many times can you change the date free of charge?'));
out.push(item('2', 'Why is there no money back when the bus goes the long way?'));
out.push(item('3', 'What should an ill passenger bring, and by when?'));
out.push(writers([
  'A conditions page: **one condition per paragraph, each starting with _If_** → **what happens** → **the reason, in one short sentence** → **a closing line that tells the reader what to do now**.',
  'Give the **reason** for the hard conditions: _the seat has already been counted_ · _the journey has happened_. A rule with a reason is obeyed; a rule without one is argued with.',
  'Say the **limits exactly**: _once_ · _before 18:00 the day before_ · _within seven days_. Vague conditions are the ones that end in a row at a window.',
  '⚠ Write the conditions **in the order the reader will meet them**, not in the order that suits you. The customer changes their plans before they fall ill.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short conditions page for something you know — a class, a shop, a service, a club (35 words or more).'));
out.push(p('**______________ — WHAT HAPPENS IF ______________**   **If you ______________ before ______________,** you can ______________. There is no charge. You can do this **______________**.   **If you ______________,** ______________, because ______________.   **If we ______________,** you ______________.   **Questions?** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and one condition per paragraph, each starting with _If_',
  'Present after _if_ · _will_ or _can_ in the other half',
  'At least one exact limit (a time, a number, a number of days) and one reason',
  'A closing line telling the reader what to do now',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the conditions page (60 words or more) for something you would run yourself: a shop, a class, a repair service, a minibus, a flat you were renting out. Four conditions, two reasons, and one closing line.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **a customer about to pay**. ★ _The condition that makes me trust you._  ✓ _One condition with no exact limit._  ? _What happens if neither of us is at fault?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap pages. Find the condition on somebody else\'s page that you would **argue** with at the window, and tell them why. Good conditions survive the argument.'));
out.push(hw('Write the **reply to an angry customer** (40+ words): say which condition applies, give the reason, and offer the one thing you can offer.'));

// ======================= 15.3 =======================
out.push(pb());
out.push(h2('15.3  I\'ll ring you as soon as I know'));
out.push(p('**Function:** talking about something you are certain will happen   ·   **Grammar:** _when_ / _as soon as_ / _before_ + present simple   ·   **Pronunciation:** weak _when_ /wən/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  _if_ or _when_? Decide for each one: _…the lift is fixed · …it rains on Friday · …I finish this course · …my phone breaks · …the summer comes_. Put them in two columns on the board.'));
out.push(board('I\'ll ring you as soon as I know.', 'when = certain · if = possible'));
out.push(p('**b**  Which is sooner? **1** _when I arrive_ / _as soon as I arrive_  **2** _before I leave_ / _after I leave_  **3** _when the part comes_ / _if the part comes_ — and which one is certain?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Abu Nizar waiting for?   **A** the money   **B** the part   **C** Mr Bassam\'s permission'));
out.push(p('**b**  Listen again. **1** What will he do as soon as the part arrives?   **2** What does he want Mr Bassam to do before Thursday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  Abu Nizar on the stairs', [
  ['Mr Bassam', 'Abu Nizar. Tell me something good.'],
  ['Abu Nizar', 'I will tell you something true, which is better. The part is coming from Aleppo. When it arrives, I will fit it the same day.'],
  ['Mr Bassam', 'When, not if?'],
  ['Abu Nizar', 'When. It has left Aleppo. It is on a lorry. I don\'t know which lorry, but it is on one.'],
  ['Mr Bassam', 'And how long after that?'],
  ['Abu Nizar', 'As soon as I have it in my hand, two hours. I\'ll ring you as soon as I know the day — not when I know the hour, when I know the day, so you can put your note on the door.'],
  ['Mr Bassam', 'Thank you. That is the sentence I needed.'],
  ['Abu Nizar', 'And before Thursday, do one thing for me. Put a chair at the bottom of the stairs.'],
  ['Mr Bassam', 'A chair?'],
  ['Abu Nizar', 'A chair. When people see a chair, they sit down and they wait for somebody to help them. When they see nothing, they start climbing, and then I have two problems instead of one.'],
  ['Mr Bassam', 'I\'ll put it there before I go home tonight.'],
  ['Abu Nizar', 'Good. And when the lift works again, leave the chair. It is a good chair and the stairs are still there.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _when_, _as soon as_, _before_, _after_ + the present simple**',
  table(['_if_ — it **might** happen', '_when_ — it **will** happen'], [
    ['_**If** the part **arrives**, I\'ll fit it._\n(maybe it won\'t arrive)',
     '_**When** the part **arrives**, I\'ll fit it._\n(it is coming; only the day is unknown)'],
  ], [1, 1]),
  '**Same rule as _if_:** the time word takes the **present simple**, never _will_ — _when_, _as soon as_, _before_, _after_, _until_: ~~when the part will arrive~~ → _**when** the part **arrives**_.',
  '**_as soon as_ = at the first possible moment:** _I\'ll ring you **as soon as** I know._ It is stronger and faster than _when_.',
  table(['word', 'means'], [
    ['**when**', 'at that time — certain'],
    ['**as soon as**', 'the first moment it is possible'],
    ['**before** / **after**', 'earlier than / later than that moment'],
    ['**until**', 'up to that moment, and then it stops'],
  ], [1, 2]),
  '**Practise:** Put the verb in the right form.  1 I\'ll ring you as soon as I ______ (know).  2 When the lift ______ (work) again, we ______ (go) back upstairs.  3 I\'ll put the chair there before I ______ (go) home.  4 We ______ (wait) until the part ______ (arrive).  5 After she ______ (finish) the course, she ______ (look) for work.',
  '**Useful phrases:** When, not if. · as soon as I know · I\'ll tell you something true, which is better. · That is the sentence I needed. · before I go home tonight',
  '**Pronunciation.** 🔊 **Track 15.6** _when_ is weak inside a sentence: /wən/ — _I\'ll ring you **when** I know_ /aɪl rɪŋ juː wən aɪ nəʊ/. But at the front of a question it is strong: _**When** will you know?_ Listen and repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is waiting for the news on the card; B is the person who will have it. B must use _when_, _as soon as_ and _before_ at least once each, and must not say _if_ about the certain thing. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Tell me something good.'],
  ['B', 'I\'ll tell you something true. __________ is coming.'],
  ['A', 'When, or if?'],
  ['B', 'When. When it __________, I\'ll __________ the same day.'],
  ['A', 'And when will you know the day?'],
  ['B', 'I\'ll ring you as soon as __________.'],
  ['A', 'Thank you.'],
  ['B', 'And before __________, do one thing for me: __________.'],
]));
out.push(table(['Card A – you are the engineer', 'Card B – you are the supplier'], [
  ['the part has left Aleppo, on a lorry', 'the order has left the warehouse'],
  ['when it arrives: two hours to fit it', 'when it arrives: you will ring the same morning'],
  ['you will ring as soon as you know the day', 'you will send the paper before the goods'],
  ['ask them to: put a chair at the bottom of the stairs', 'ask them to: clear the doorway before Thursday'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** time sentences you hear, and mark which one is the **fastest** promise.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about something in your life that **will certainly happen** but you do not know when — a delivery, a decision, a visit, a birth, a result. Use _when_ and _as soon as_, not _if_. Your partner must ask what you will do **before** it happens.'));
out.push(p('**b**  Swap. Then each of you say **one** thing in your life that you have been calling _when_ but is really _if_. This is harder than it sounds and it is the point of the cycle.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour is waiting for her training dates. She says when they come she will put them on the wall at home the same evening, and she will tell her manager as soon as she knows the first day. Before it starts she is going to finish two jobs she has been leaving. Then I asked her the second question and she thought for a long time, and she said that she has been saying "when I am a senior technician" for two years, and that it is an if, and that she has never once said it as an if out loud._'));
out.push(p('**Listener task:** write one _when_ from the room that you think is really an _if_. Do not say whose.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Abu Nizar sends to Mr Bassam. Answer the questions.'));
out.push(model([
  '**To:** Mr Bassam   **Subject:** The lift — the plan, not the promise',
  'Mr Bassam,',
  'I am writing it down so that you can put it on your door.',
  'The part has left Aleppo. **When it arrives**, I will fit it the same day. It takes two hours once it is in my hand.',
  '**As soon as I know the day**, I will ring you — the day, not the hour. You can write the day on the door; nobody can write an hour.',
  '**Before Thursday**, please put a chair at the bottom of the stairs. When people see a chair they sit down and wait. When they see nothing they start climbing.',
  '**Until the part comes**, nobody is to press the button. Pressing it does not help and it is how the last part died.',
  'And **after it is working**, leave the chair where it is.',
  'Abu Nizar',
]));
out.push(item('1', 'Why does Abu Nizar say he will ring with the day and not the hour?'));
out.push(item('2', 'What is the reason for the chair?'));
out.push(item('3', 'What does he ask people not to do until the part arrives?'));
out.push(writers([
  'A "what happens when" message: **one time word per instruction** → **the instruction** → **the reason**, in that order.',
  'Use the time word that is **true**. _When_ promises that something will happen; _if_ does not. A writer who uses _when_ for something uncertain will be believed once.',
  'Put the **reason after the instruction**, short: _Pressing it does not help and it is how the last part died._ One clause. People follow instructions they understand.',
  '⚠ Promise only what you control. Abu Nizar promises **the day**, not the hour, and says why. That sentence is the difference between a plan and a promise you will break.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what happens when" message about something you are waiting for (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   ______________,   **When ______________,** I will ______________.   **As soon as ______________,** I will ______________.   **Before ______________,** please ______________, because ______________.   **Until ______________,** nobody ______________.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line and a name at the end',
  'Present simple after _when_, _as soon as_, _before_, _until_ (never _will_)',
  '_when_ only for the certain things · _if_ for the possible ones',
  'Every instruction has a reason after it, in one short clause',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) for something you are waiting for at home or at work: what will happen when it comes, what you will do as soon as you know, what people must do before, and what nobody should do until then.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who has to wait**. ★ _The promise I believe._  ✓ _One _when_ that should be an _if_._  ? _What will you do if it doesn\'t come at all?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two messages aloud. **Which writer would you wait for?** Count the _when_s and the _if_s in each — the trustworthy one is usually the one with fewer _when_s.'));
out.push(hw('Write the **message you send a week later** (40+ words), when it still has not arrived: what has changed, what has not, and what you will do as soon as you know more.'));

// ======================= 15.4 =======================
out.push(pb());
out.push(h2('15.4  Unless you leave now, you\'ll miss it'));
out.push(p('**Function:** giving a warning   ·   **Grammar:** _unless_; _otherwise_   ·   **Pronunciation:** stress on _unless_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish these three warnings: _Unless you leave now, ______. · Take a coat, otherwise ______. · Unless it stops raining, ______._ Your teacher collects the best endings.'));
out.push(board('Unless you leave now, you\'ll miss it.', 'unless = if … not'));
out.push(p('**b**  Say it the other way. **1** _Unless you hurry, you\'ll be late._ = _If you ______ hurry, you\'ll be late._  **2** _If you don\'t take a coat, you\'ll be cold._ = _______ you take a coat, you\'ll be cold._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Maya worried about Friday?   **A** the bus may be cancelled   **B** her sister\'s exam may move   **C** the hotel may be full'));
out.push(p('**b**  Listen again. **1** What does Lama warn her about the seven o\'clock bus?   **2** What is the "otherwise" about the hotel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  Before you book anything', [
  ['Lama', 'You\'re booking it now? Before the exam list comes out?'],
  ['Maya', 'I have to. Unless I book this week, there won\'t be a seat on Friday at all.'],
  ['Lama', 'All right. Then two warnings. Take the seven o\'clock, not the eight. Unless you take the seven, you will be at the back by the door, and that door opens in Homs and Hama and everywhere in between.'],
  ['Maya', 'Noted.'],
  ['Lama', 'And ring the hotel the night before. Otherwise they will give your room to somebody standing in front of them, and they will be very sorry, and you will be very outside.'],
  ['Maya', 'They have my booking.'],
  ['Lama', 'They have your booking. They also have a man in the doorway with a bag. Ring them.'],
  ['Maya', 'And if the exam list moves her exam to Monday?'],
  ['Lama', 'Then you change the ticket, once, which the man told you. But do it before Thursday evening, otherwise you lose the whole thing.'],
  ['Maya', 'You are enjoying this.'],
  ['Lama', 'I am. Unless you write these three things down, you will remember two of them, and it will be the wrong two.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _unless_ and _otherwise_**',
  table(['_unless_ = **if … not**', '_otherwise_ = **if you don\'t, this will happen**'], [
    ['_**Unless** you **leave** now, you\'ll miss it._\n= _**If** you **don\'t leave** now, you\'ll miss it._',
     '_Leave now, **otherwise** you\'ll miss it._\n_Take a coat, **otherwise** you\'ll be cold._'],
  ], [1.2, 1.2]),
  '⚠ **_unless_ already contains the _not_.** ~~Unless you don\'t leave now~~ is the opposite of what you mean. One negative only.',
  '⚠ _unless_ takes the **present simple**, like _if_: ~~Unless you will hurry~~ → _**Unless** you **hurry**_.',
  '**Where they go:** _unless_ joins the two halves (with a comma if it comes first). _otherwise_ comes **after** the instruction, in the second half: _Ring them, **otherwise** they\'ll give your room away._',
  '**The three ways to warn somebody — all the same meaning:**  _**If** you **don\'t** ring them, they\'ll give your room away._  ·  _**Unless** you **ring** them, they\'ll give your room away._  ·  _**Ring** them, **otherwise** they\'ll give your room away._',
  '**Practise:** Rewrite with the word in brackets.  1 If you don\'t hurry, you\'ll miss the bus. (unless)  2 Unless you book this week, there won\'t be a seat. (if)  3 Take a coat — if you don\'t, you\'ll be cold. (otherwise)  4 Unless she rings before Thursday, she\'ll lose the ticket. (if)  5 Write it down, or you\'ll forget. (otherwise)',
  '**Useful phrases:** Then two warnings. · Noted. · Do it before… , otherwise… · You are enjoying this. · it will be the wrong two',
  '**Pronunciation.** 🔊 **Track 15.8** A warning puts the stress on **unless** and on the bad result: _un**LESS** you leave now, you\'ll **MISS** it._ Say it flat and it sounds like information; say it with those two stresses and it sounds like a warning. Listen and do both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is about to do the thing on the card; B gives **three** warnings — one with _unless_, one with _otherwise_, and one with _if … don\'t_. A must argue with one of them. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I\'m going to __________.'],
  ['B', 'Then three warnings. Unless you __________, you\'ll __________.'],
  ['A', 'Noted.'],
  ['B', 'And __________, otherwise __________.'],
  ['A', 'But __________.'],
  ['B', 'If you don\'t __________, __________. Write these down.'],
]));
out.push(table(['Card A – you are about to…', 'Card B – you are about to…'], [
  ['travel to Latakia on a Friday in winter', 'start a course and work at the same time'],
  ['(B warns about: the bus, the hotel, the weather)', '(B warns about: the money, the sleep, the first month)'],
  ['move into a flat you have not seen', 'lend money to a cousin'],
  ['(B warns about: the water, the neighbours, the deposit)', '(B warns about: the date, the paper, the family)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** warnings and mark the one you think is the most useful.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your partner is going to do something you have done before — moving, travelling, starting a job, buying something, taking an exam. Give them **three real warnings** from your own experience, one of each kind. They must ask _"how do you know?"_ about one.'));
out.push(p('**b**  Swap. Then each of you choose the **one** warning you will actually act on, and say why the other two will not survive the week.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lama gave Maya three warnings about Friday. Unless she takes the seven o\'clock bus she will be at the back by the door, which opens in every town between here and the coast. She must ring the hotel the night before, otherwise they will give her room to a man standing in the doorway with a bag. And unless she changes the ticket before Thursday evening she will lose the whole thing. I asked how she knew the second one and she said it has happened to her, in Latakia, in the rain, in February._'));
out.push(p('**Listener task:** which warning in the room came from somebody\'s own bad week? Those are the ones to write down.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lama leaves for Maya. Answer the questions.'));
out.push(model([
  '**THREE THINGS, AND THEN I WILL STOP**',
  'Maya — I know. I am writing them down because you will remember two of these and it will be the wrong two.',
  '**1. Take the seven o\'clock bus.** Unless you take the seven, you will be at the back, by the door. That door opens at Homs, at Hama and at four places with no name. You will not sleep.',
  '**2. Ring the hotel on Thursday night.** They have your booking. They also have a man in the doorway with a bag, and he is standing in front of them and you are not. Otherwise you will be very outside, in February, in the rain. I know this because it happened to me.',
  '**3. If the exam list moves, change the ticket before Thursday evening.** Not Friday morning. Unless you change it before Thursday evening, you lose the whole thing — not half of it, all of it.',
  'That is all. Have a good time, and bring me something from the market that is not a keyring.',
]));
out.push(item('1', 'Why does Lama say she is writing the warnings down?'));
out.push(item('2', 'How does she know about the hotel?'));
out.push(item('3', 'What is the difference between Thursday evening and Friday morning?'));
out.push(writers([
  'A warning note: **why you are writing it** → **numbered warnings, one instruction each** → **the bad result** → **where the warning comes from** → **a warm last line**.',
  'Number them and keep them to **three**. Four warnings is a lecture, and a reader who feels lectured follows none of them.',
  'Say **where the warning comes from**: _I know this because it happened to me._ An experienced warning is obeyed; an invented one is not.',
  '⚠ End warmly. A note that is only warnings reads as criticism — and the last line is what the reader will be holding when they decide whether to do any of it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a warning note to somebody about to do something you have done (35 words or more).'));
out.push(p('**THREE THINGS, AND THEN I WILL STOP**   ______________ — I am writing them down because ______________.   **1. ______________.** Unless you ______________, you will ______________.   **2. ______________.** ______________, otherwise ______________. I know this because ______________.   **3. ______________.** If you don\'t ______________, ______________.   That is all. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, the name of the person, and a warm last line',
  '_unless_ with **no** second negative · present simple after _unless_',
  'One _unless_, one _otherwise_, one _if … don\'t_ — all three',
  'At least one warning with its source (_I know this because…_)',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real warning note (60 words or more) you would give to somebody about to do the thing that once went wrong for you. Give them the warning nobody gave **you**. Three warnings, three different structures, and at least one that comes from your own experience.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the person about to do it**. ★ _The warning I will take._  ✓ _One warning that needs to say where it came from._  ? _What happened to you?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three notes aloud. **Which warning would you put on a wall for everybody?** Write it big and put it on the wall.'));
out.push(hw('Write the **message from the person afterwards** (40+ words): which warning they followed, which they ignored, and what happened.'));

// ======================= 15.5 =======================
out.push(pb());
out.push(h2('15.5  If I were you, I\'d ring them'));
out.push(p('**Function:** giving strong advice   ·   **Grammar:** _If I were you, I\'d…_   ·   **Pronunciation:** _I\'d_ /aɪd/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads four small problems. For each one the class must give advice **three ways**: _You should… · Why don\'t you…? · If I were you, I\'d…_'));
out.push(board('If I were you, I\'d ring them.', 'should · why don\'t you · if I were you'));
out.push(p('**b**  Which is the **strongest** advice, and which is the gentlest? _You should ring them. · Why don\'t you ring them? · If I were you, I\'d ring them. · You could ring them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Hiba\'s problem?   **A** she has lost a form   **B** her referee has not replied   **C** she has missed the deadline'));
out.push(p('**b**  Listen again. **1** What does Rami advise her to do first?   **2** What does he say he would **not** do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  Nine days and no answer', [
  ['Hiba', 'I asked her nine days ago and she hasn\'t answered. The form has to go in on the first of March.'],
  ['Rami', 'Ms Huda? She has answered every message I have ever sent her within a day.'],
  ['Hiba', 'I know. That\'s why I haven\'t asked again. If she hasn\'t answered, there must be a reason.'],
  ['Rami', 'If I were you, I\'d ask her again on Thursday, in the room, with the form in my hand.'],
  ['Hiba', 'That feels rude.'],
  ['Rami', 'It isn\'t rude. Nine days is not a refusal, it is a full inbox. If I were you, I\'d assume she hasn\'t seen it.'],
  ['Hiba', 'And if she says no?'],
  ['Rami', 'Then you have twelve days and you ask somebody else. Twelve days is enough. Nine days of silence and then four days of panic is not.'],
  ['Hiba', 'What would you not do?'],
  ['Rami', 'I wouldn\'t write a second message explaining why the first one was important. I\'ve done that. It makes the other person feel bad and it doesn\'t make them faster.'],
  ['Hiba', 'So: Thursday, in the room, form in hand, no long message.'],
  ['Rami', 'And if I were you, I\'d ask the second referee this week anyway. Not instead of her. As well.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _If I were you, I\'d…_**',
  table(['the fixed opening', 'the advice'], [
    ['**If I were you,**\n(always _were_, never _was_ — it is a fixed phrase)',
     '**I\'d** (= I would) + bare verb\n_I **\'d ring** them._ · _I **\'d ask** her again._\n_I **wouldn\'t write** a second message._'],
  ], [1.1, 1.5]),
  '⚠ Learn it as **one chunk**: _If I were you, I\'d…_ Do not try to build it; there is a whole grammar behind it that belongs to B1. At A2 it is a phrase, like _How do you do?_',
  '⚠ ~~If I was you~~ — common in speech, but learn **were**.  ⚠ ~~I\'d to ring them~~ → _I\'**d ring** them._  ⚠ ~~If I were you, I ring them~~ → _I\'**d** ring them._',
  table(['how strong', 'what you say'], [
    ['gentle, a suggestion', '_You **could** ring them._ · _**Why don\'t you** ring them?_'],
    ['normal advice', '_You **should** ring them._'],
    ['strong, personal', '_**If I were you, I\'d** ring them._'],
    ['strong, against', '_**If I were you, I wouldn\'t** write again._'],
  ], [1, 1.8]),
  '**Practise:** Give advice with _If I were you…_  1 "I\'ve lost my ID card." → ______  2 "My referee hasn\'t answered." → ______  3 "The shop sold me a broken kettle." → ______  4 "I\'m always late for this class." → ______  5 "I don\'t want to tell my manager yet." → ______ (use _wouldn\'t_)',
  '**Useful phrases:** If I were you… · I wouldn\'t… · That feels rude. · It isn\'t rude. · Nine days is not a refusal. · Not instead of. As well.',
  '**Pronunciation.** 🔊 **Track 15.10** The whole phrase runs together and the advice lands on the verb: _If I were you, I\'d **RING** them_ /ɪf aɪ wə juː aɪd rɪŋ ðəm/. Listen and repeat five times until it is one piece.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a problem from the card; B gives advice — first gently, then with _If I were you_ — and must also say **one** thing they would **not** do. A objects once. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________, and I don\'t know what to do.'],
  ['B', 'Why don\'t you __________?'],
  ['A', 'I\'ve tried that. / That feels __________.'],
  ['B', 'Then if I were you, I\'d __________.'],
  ['A', 'And if __________?'],
  ['B', 'Then __________. But I wouldn\'t __________.'],
  ['A', 'Why not?'],
  ['B', 'Because __________.'],
]));
out.push(table(['Card A – problems', 'Card B – problems'], [
  ['your referee hasn\'t answered in nine days', 'you bought something and it broke in a week'],
  ['you are the only person who cleans the kitchen at work', 'your neighbour\'s water is coming through your ceiling'],
  ['you have been offered more hours and less sleep', 'a friend owes you money and never mentions it'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **one** piece of advice and the **one** thing the adviser said they would not do. Which was more useful?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner a **real** small problem — not a big one, a real one from this week. They must give you three pieces of advice of increasing strength, ending with _If I were you, I\'d…_, and one _I wouldn\'t…_'));
out.push(p('**b**  Swap. Then tell your partner honestly which piece of advice you will take, and which you will not, and why. The _why_ is the whole exercise.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba\'s problem is her referee. Rami said that if he were her he would ask again on Thursday, in the room, with the form in his hand, and that nine days is not a refusal, it is a full inbox. The thing he would not do is write a second message explaining why the first one mattered, because it makes the other person feel bad and does not make them any faster. He also said she should ask the second referee this week anyway — not instead, as well. She is going to do the Thursday one and she is not going to do the second one, and she could not explain why, which I think means she will._'));
out.push(p('**Listener task:** write the best piece of advice you heard today that you did not already know.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reply on the club\'s "Ask the club" page. Answer the questions.'));
out.push(model([
  '**ASK THE CLUB** — this week\'s question',
  '**The question.** "I asked somebody to be my referee nine days ago and she hasn\'t answered. The form goes in on the first of March. Should I ask her again or find somebody else?" — H.',
  '**The reply.** Ask her again, and ask her in person.',
  'Nine days of silence is not a refusal. It is almost always a full inbox, and the longer you leave it the harder it becomes for both of you. If I were you, I\'d catch her after a lesson with the form actually in my hand, because a form in a hand takes thirty seconds and a message takes a week.',
  'I wouldn\'t send a second message explaining why the first one was important. It makes the other person feel bad, and a person who feels bad is not faster, only quieter.',
  'And I\'d ask your second referee this week as well — not instead of her. If both say yes, you have a choice, and having a choice eleven days before a deadline is the whole point.',
  'If she says no on Thursday, you will still have twelve days. That is enough. Nine days of waiting and four days of panic is not.',
]));
out.push(item('1', 'Why does the reply say to ask in person rather than by message?'));
out.push(item('2', 'Why should she ask the second referee as well?'));
out.push(item('3', 'What is the difference between twelve days and four days, in the reply\'s argument?'));
out.push(writers([
  'An advice reply: **the question, short** → **your advice in one line at the top** → **the reason** → **what you would _not_ do** → **what happens if the advice fails**.',
  'Put the advice **in the first line** and the reasons underneath. A reader with a problem reads the first line and then decides whether to read the rest.',
  'The _I wouldn\'t_ paragraph is what makes advice trustworthy. Anybody can say what to do; saying what **not** to do shows you have made the mistake.',
  '⚠ Finish with the **plan if it goes wrong**. Advice that only works if everything goes well is not advice, it is hope.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply to a real problem — your partner\'s, or one from your own life (35 words or more).'));
out.push(p('**The question.** "______________" — ______________.   **The reply.** ______________.   ______________, because ______________. If I were you, I\'d ______________.   I wouldn\'t ______________, because ______________.   If ______________, you will still ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The question in quotation marks, then the advice in one short line',
  '_If I were you, I\'d_ + bare verb (never ~~I was~~, never ~~I\'d to~~)',
  'One _I wouldn\'t…_ paragraph, with its reason',
  'A last paragraph saying what happens if the advice does not work',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a full "Ask the club" reply (60 words or more) to a real problem somebody you know has. Advice in the first line, the reason, one thing you would not do, and the plan if it fails.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s reply as **the person with the problem**. ★ _The sentence that decided it for me._  ✓ _One place where you told me what to do but not why._  ? _Have you done this yourself?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three replies aloud with the problems removed. **Can the class guess the problem from the advice?** If they can, the advice was specific. If they cannot, it was general — and general advice helps nobody.'));
out.push(hw('Write **the message to the referee** (40+ words) that Hiba should send — or the one you would send in a situation like it. Short, no explaining, one clear request and one date.'));

// ======================= 15.6 =======================
out.push(pb());
out.push(h2('15.6  Don\'t worry — it\'ll be fine'));
out.push(p('**Function:** reassuring somebody   ·   **Grammar:** _It\'ll be fine_ and fixed reassurance phrases   ·   **Pronunciation:** warm, falling intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say in your own language when somebody is worried? Your teacher writes the English next to each one: _Don\'t worry · It\'ll be fine · These things happen · It\'s not the end of the world · We\'ll sort it out._'));
out.push(board('Don\'t worry — it\'ll be fine.', 'Reassurance ≠ advice ≠ a solution'));
out.push(p('**b**  Which of these would **help** you if you were worried, and which would annoy you? _"Don\'t worry." · "I\'ll help you." · "Calm down." · "It\'s not your fault." · "I told you." · "What do you need?"_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened?   **A** Lina has sent the wrong file to the supplier   **B** Lina has missed a meeting   **C** Lina has lost her bag'));
out.push(p('**b**  Listen again. **1** What does Rana do **before** she says anything reassuring?   **2** What does Mr Khaled say he did in 2011?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  The wrong file', [
  ['Lina', 'Rana. I\'ve sent them last year\'s prices. To Türkiye. Eleven minutes ago.'],
  ['Rana', '(pause) Right. Sit down. Give me the screen.'],
  ['Lina', 'I checked it twice.'],
  ['Rana', 'I know you did. Here — you sent the file called _prices_final_. The new one is _prices_final_Jan_. Whoever named those two files did this, not you.'],
  ['Lina', 'They will think we are—'],
  ['Rana', 'Listen to me. It\'ll be fine. Nobody has signed anything. They opened it four minutes ago, if they opened it at all, and it is half past four on a Thursday in Istanbul.'],
  ['Lina', 'I have to write to them.'],
  ['Rana', 'You do, and you will, in ten minutes, when your hands have stopped. One short message: the right file, one line, no explaining. Don\'t worry — these things happen every week in every office in the world.'],
  ['Mr Khaled', '(passing) What\'s happened?'],
  ['Rana', 'Wrong price file to Istanbul. We\'re fixing it.'],
  ['Mr Khaled', 'Ah. In 2011 I sent an entire client list to the wrong client. The whole list. We are all still here, and that man is now a supplier. Send the right one, Lina, and go home at five.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reassuring somebody — what to say, and in what order**',
  table(['step', 'what you say'], [
    ['**1. Take the problem seriously** (first, always)', '_Right. Sit down. Give me the screen._ · _Tell me exactly what happened._'],
    ['**2. Say it will be all right**', '_It\'ll be fine._ · _Don\'t worry._ · _We\'ll sort it out._'],
    ['**3. Take the blame off them**', '_It isn\'t your fault._ · _These things happen._ · _Anybody would have done that._'],
    ['**4. Give them the next step**', '_One short message, in ten minutes._ · _Send the right one and go home at five._'],
  ], [1.2, 1.8]),
  '⚠ **Never start at step 2.** _"Don\'t worry"_ said before you have heard the problem means _"stop talking"_. Said after, it means _"I have got this"_. Same words, opposite effect.',
  '⚠ Never say _**calm down**_ in English. It has never once calmed anybody down.',
  '**_It\'ll be fine_** is _It will be fine_, and it is a fixed phrase — do not change it to ~~It will be fine~~ in speech; the contraction is part of the warmth.',
  '**Also useful:** _It\'s not the end of the world._ · _Worse things have happened in this office._ · _Leave it with me._ · _What do you need?_ (the best of all of them)',
  '**Practise:** Somebody says each of these. Reassure them in **two** sentences — one reassurance, one next step.  1 "I\'ve missed the deadline." 2 "I think I\'ve failed." 3 "I\'ve broken it." 4 "Nobody has replied to me." 5 "I\'ve told him the wrong day."',
  '**Pronunciation.** 🔊 **Track 15.12** Reassurance **falls** at the end and is **slower** than normal speech: _It\'ll be **fine**._ ↘  _These things **happen**._ ↘  Say them with a rising voice and you sound uncertain — which is the one thing a worried person cannot use. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A tells B the problem on the card, in a worried voice. B must do all **four** steps in order — and may not say _"don\'t worry"_ until step 2. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________. I don\'t know what to do.'],
  ['B', 'Right. __________. Tell me exactly what happened.'],
  ['A', '__________.'],
  ['B', 'It\'ll be fine. __________.'],
  ['A', 'But __________.'],
  ['B', 'It isn\'t your fault — __________.'],
  ['B', 'Here\'s what we\'ll do. __________, and then __________.'],
]));
out.push(table(['Card A – problems', 'Card B – problems'], [
  ['you have sent the wrong file to a customer', 'you have booked the hall for the wrong Saturday'],
  ['you have lost the only key', 'you have told forty people the wrong room number'],
  ['you think you have failed the test', 'you have forgotten to order the food for tomorrow'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** did the reassurer do step **1** before step **2**? Write the exact words they used for each step.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about a time something went wrong and somebody reassured you **well** — or badly. What did they actually say? Your partner must decide which of the four steps that person did and which they skipped.'));
out.push(p('**b**  Swap. Then each of you say the **one** sentence you would most like to hear when you have made a mistake. Write it down; it is usually not the one you say to other people.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour told me about the day she deleted a customer\'s files at work. Her manager\'s first sentence was "show me", not "don\'t worry", and she says that is why she still works there. He did the steps in the right order without knowing there were steps. The sentence she would most like to hear is "anybody would have done that", and the sentence she says to other people is "it\'ll be fine", which she admitted is not the same thing at all._'));
out.push(p('**Listener task:** write the best reassuring sentence you heard in this room today.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two messages. Answer the questions.'));
out.push(model([
  '**MESSAGE 1 — Lina to the supplier, 16:48**',
  'Dear Mr Yilmaz,',
  'Please use the attached file. The prices I sent at 16:37 were last year\'s.',
  'With apologies, and thank you.',
  'Lina Haddad · Medica Trading',
  '**MESSAGE 2 — Rana to Lina, 17:10**',
  'That was exactly the right message. Four lines, the right file, no explaining.',
  'Three things before you go home. It isn\'t your fault — two files should never have had names that close, and I am renaming them tonight. Nobody signed anything, so nothing is lost. And in 2011 Mr Khaled sent a whole client list to the wrong client, which you should ask him about one day, but not this week.',
  'Go home at five. It\'ll be fine. It is already fine; it is just still loud in your head.',
  'Rana',
]));
out.push(item('1', 'Why does Rana say the first message was the right one?'));
out.push(item('2', 'What is Rana going to do tonight?'));
out.push(item('3', 'What does "it is just still loud in your head" mean?'));
out.push(writers([
  'A reassuring message: **say the thing they did right** → **take the blame off them, with a reason** → **say what is actually lost (usually nothing)** → **one instruction that lets them stop**.',
  'The instruction at the end matters more than the comfort: _Go home at five._ A worried person needs permission to stop, and a vague _try not to worry_ gives them none.',
  'Take the blame off them with a **fact**, not a feeling: _two files should never have had names that close, and I am renaming them tonight._ You cannot argue with a fact.',
  '⚠ The apology message itself (Message 1) is the other lesson: **four lines, the right file, no explaining**. When you have made a mistake, the long explanation is for you, not for them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reassuring message to somebody who has made a mistake (35 words or more).'));
out.push(p('______________,   That was ______________.   Three things before ______________. It isn\'t your fault — ______________, and I am ______________. Nothing is ______________, so ______________. And ______________.   ______________. It\'ll be fine.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A name at the start and at the end',
  'Something they did **right**, in the first line',
  'One **fact** that takes the blame off them — not just _don\'t worry_',
  'One clear instruction at the end that lets them stop',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the message (60 words or more) you would send to somebody who has just made a mistake at work, at college or at home. All four steps, one fact, one instruction — and no _calm down_.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who made the mistake**. ★ _The line that let me breathe._  ✓ _One place where you comforted me instead of telling me something._  ? _Is it really already fixed?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three messages aloud. **Which one would you want at half past four on a bad Thursday?** It is never the kindest one. It is the one with a fact in it.'));
out.push(hw('Write the **apology message itself** (40+ words) for a mistake you have really made: the correction first, one line of apology, no explaining.'));

// ======================= 15.7 =======================
out.push(pb());
out.push(h2('15.7  Review & Mediate: What does the repair notice say?'));
out.push(p('**Function:** explaining a repair notice and a change of plan   ·   **Recycling:** Units 1–15   ·   **Exam practice:** A2 Key Reading Part 1, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** If it will rain, we will stay at home.  **2** What you will do if she doesn\'t come?  **3** I\'ll ring you when I will know.  **4** Unless you don\'t hurry, you will miss it.  **5** If I was you, I would to ring them.  **6** Don\'t worry, it will be fine — calm down.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the notice that goes up on the door of the centre on Thursday afternoon.'));
out.push(box(null, [
  '**LIFT — REPAIR NOTICE**   _Posted Thursday 16:00 · Mr Bassam, Reception_',
  '**The part has arrived.** The engineer will fit it **this evening** after the last class.',
  '**Tonight\'s classes do not move.** Room 12 is in **Room 3** (ground floor) as announced on Tuesday. Room 14 is in **Room 5**.',
  '**If the repair is finished tonight**, all classes return to their normal rooms from **Saturday**. There will be a note on this door on Saturday morning either way.',
  '**If it is not finished tonight**, the ground-floor arrangement continues next week and we will tell you here.',
  '**⚠ Please do not use the lift before you see a note saying it is working.** A lift with the doors open is not a lift that is working.',
  '**If you cannot use the stairs**, tell reception. Your class will be moved to the ground floor whatever happens. You do not need to give a reason.',
  '**Guarantee:** this repair is covered for **six months**. If the same fault happens again before **17 July**, there is no charge.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Mr Bassam explains the notice to a student who cannot read English. Which day should she come back to the normal room?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  Explaining the notice', [
  ['Student', 'Everybody is reading the door and I can\'t read the door.'],
  ['Mr Bassam', 'Come here. It\'s six short parts, and only two of them are about you. The first part is good news: the part for the lift has arrived and the engineer will fit it tonight, after the last class.'],
  ['Student', 'So tonight I go upstairs?'],
  ['Mr Bassam', 'No — and this is the part people are getting wrong. **Tonight nothing changes.** Your class is in Room 3, downstairs, exactly as we said on Tuesday. He fits it after you have all gone home.'],
  ['Student', 'Then when do I go upstairs?'],
  ['Mr Bassam', 'If he finishes tonight, from Saturday. If he doesn\'t, we stay downstairs next week. Either way I will put a note on this door on Saturday morning, so you look at the door before you climb anything.'],
  ['Student', 'And this part with the triangle?'],
  ['Mr Bassam', 'That is a warning. Don\'t use the lift until you see a note saying it works. The doors being open does not mean it works. That is how people get hurt.'],
  ['Student', 'And the last part? It has a date.'],
  ['Mr Bassam', 'That is the guarantee. The repair is covered for six months — until the seventeenth of July. If the same thing breaks again before that date, we pay nothing. That part is not for you, it is for the centre, but you asked, so now you know.'],
  ['Student', 'Six parts and two of them are mine.'],
  ['Mr Bassam', 'Tonight: downstairs. Saturday: read the door. That is all of it.'],
]));
out.push(sp());
out.push(box('Language box – explaining a notice full of conditions', [
  'Say **how many parts** there are and **which ones are the reader\'s**, before anything else: _It\'s six short parts, and only two of them are about you._ That sentence alone halves the reader\'s work.',
  'Find the thing **everybody misunderstands** and say it as a contrast: _The part has arrived — but **tonight nothing changes**._ In a notice with good news and a delay, people hear the good news and act on it a day early.',
  'Translate each _if_ into a day the reader can act on: _If he finishes tonight → **from Saturday**._ · _If he doesn\'t → **next week, downstairs**._',
  'Explain **what a warning protects against**, not just what it forbids: _the doors being open does not mean it works. That is how people get hurt._',
  'Say plainly when a part is **not for them**: _That part is for the centre, not for you._ Knowing which lines to ignore is half of reading a notice.',
  'Finish with the **two-line version** they can carry away: _Tonight: downstairs. Saturday: read the door._',
  '**Useful phrases:** It\'s … short parts. · Only two of them are about you. · This is the part people are getting wrong. · Either way… · That part is not for you. · That is all of it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the notices below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end by saying what they will do and when. Change roles with the other notice.'));
out.push(table(['Notice A – a block of flats', 'Notice B – a phone repair shop'], [
  ['WATER — WORK ON THE MAIN PIPE', 'REPAIRS — WHAT YOU SHOULD KNOW'],
  ['The water will be off on Tuesday, 08:00–14:00.', 'Small repairs: same day if you come before 11:00.'],
  ['If the work is not finished, it will also be off on Wednesday.', 'Screens: two days, unless the part has to come from Aleppo.'],
  ['We will put a note here on Tuesday evening either way.', 'If we cannot fix it, you pay nothing.'],
  ['⚠ Do not turn the taps on to check. Turn them off before Tuesday.', '⚠ Back up your photographs before you leave the phone. We are not responsible for them.'],
  ['If you cannot carry water, tell the caretaker — flat 1.', 'Guarantee: 3 months on all repairs, with the receipt.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **one** thing that is certain, the **one** that depends on a condition, and the **one** thing the notice warns you not to do.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** notice or message in your own life that has conditions in it — a repair, a delivery, a closure, a bill, a guarantee, a change of plan. Explain it to your partner so completely that they could act on it without seeing it. They must ask: _which part is about me?_, _what happens if the other thing happens?_, and _what am I not supposed to do?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Omar explained the notice from the phone shop. If you take a small repair in before eleven, you get it back the same day. A screen takes two days, unless the part has to come from Aleppo, and then nobody promises anything. If they cannot fix it, you pay nothing, which he says is the only line in the notice that is really a promise. The warning is that you must copy your photographs before you leave the phone, because they are not responsible for them, and he says that is the line everybody ignores and then cries about. There is a three-month guarantee but only with the receipt, so I decided that if I ever take a phone there I will photograph the receipt, which is a strange sentence about a phone I cannot use._'));
out.push(p('**Listener task:** did they tell you **which part was yours** before the details? Which line would you have ignored?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 7));
out.push(p('For each question, choose the correct answer. What does the notice or message say?'));
out.push(model([
  '**1 · On a lift door:**  OUT OF ORDER. Do not use until further notice. Reception will tell you when it is working.',
  '**2 · A message from Rana:**  Don\'t send anything to Istanbul before you check with me — they changed the address on Monday.',
  '**3 · At a repair shop:**  Repairs are not covered unless you keep the receipt.',
  '**4 · A note on a classroom door:**  Tonight this class is downstairs in Room 3. Normal rooms from Saturday if the work is finished.',
  '**5 · A message from Abu Nizar:**  I\'ll ring you as soon as I know the day. I can\'t promise an hour.',
  '**6 · At the bus office:**  Tickets may be changed once, before 18:00 the day before travel.',
]));
[
  '**1**     **A** The lift will work again today.   **B** You must not use the lift now.   **C** Ask reception to use the lift.',
  '**2**     **A** Check with Rana before you send anything.   **B** Send it to the old address.   **C** Rana will send it on Monday.',
  '**3**     **A** You need the receipt to get a free repair.   **B** Repairs are never covered.   **C** The shop keeps your receipt.',
  '**4**     **A** This class is always downstairs now.   **B** The class is downstairs tonight only if the work is finished.   **C** The class is downstairs tonight, and may be upstairs from Saturday.',
  '**5**     **A** He will tell you the exact time.   **B** He will tell you the day when he knows it.   **C** He does not know whether it will come.',
  '**6**     **A** You can change a ticket twice.   **B** You can change a ticket the morning you travel.   **C** You can change a ticket once, the day before.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a classmate who was not there on Thursday (35 words or more). Use the repair notice above.'));
out.push(p('Hi ______!   You weren\'t there, so: the part for the lift ______________ and the engineer ______________ tonight.   But don\'t ______________ — tonight our class ______________, exactly as ______________.   If he ______________ tonight, we ______________ from ______________. If he ______________, we ______________.   Either way there ______________ on Saturday morning, so ______________ before you ______________.   And don\'t use the lift unless ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, an ending, and two short paragraphs',
  'Present after _if_, _unless_, _when_ and _until_ · _will_ in the other half',
  'At least one _unless_ or _otherwise_ warning',
  'All three content points: what has happened · what is **not** changing tonight · what happens on Saturday',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Something has gone wrong with the place where your English friend **Sam** is going to stay next week.',
  'Write an email to Sam.  In your email:  •  say **what the problem is**  •  say **what will happen if it is not fixed**  •  tell him **one thing he should do**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  If it ___ tomorrow, we won\'t go.   a) will rain   b) rains   c) rain',
  '2  What ___ if the part doesn\'t arrive?   a) will happen   b) happens   c) will it happen',
  '3  I\'ll ring you as soon as I ___.   a) will know   b) know   c) knew',
  '4  ___ you hurry, you\'ll miss the bus.   a) If   b) Unless   c) Otherwise',
  '5  Take a coat, ___ you\'ll be cold.   a) unless   b) if   c) otherwise',
  '6  If I ___ you, I\'d ring them today.   a) am   b) was   c) were',
  '7  If I were you, I ___ write a second message.   a) wouldn\'t   b) won\'t   c) don\'t',
  '8  Don\'t worry — it ___ fine.   a) will be   b) \'ll be   c) both a and b',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 15.14** Ms Huda says what each person is going to do about a problem. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they will do'], [
  ['1  Mr Bassam ___', 'A  will go a day later if the weather is bad'],
  ['2  Abu Nizar ___', 'B  will put a notice on a door either way'],
  ['3  Maya ___', 'C  will ask the same person again, in person'],
  ['4  Hiba ___', 'D  will fit the part on the day it arrives'],
  ['5  Lina ___', 'E  will send a short message with no explaining'],
  ['', 'F  will buy a new one if it is not repaired'],
  ['', 'G  will move to a different class'],
], [1, 2]));
out.push(dlg('Track 15.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is what everybody is doing about their problem this week. Mr Bassam has promised that whatever happens with the lift tonight, there will be a note on the door on Saturday morning — fixed or not fixed, the note goes up. Abu Nizar says the part is on a lorry from Aleppo, and the day it reaches his hand he will fit it, the same day, two hours. Maya has booked Friday but she has told me that if the weather closes the road she will travel on Saturday instead and lose nothing. Hiba has decided to ask her referee again on Thursday — not another message, in the room, with the form in her hand. And Lina sent four lines to Istanbul with the right file and no explaining at all, which Rana tells me was exactly right.'],
]));
out.push(p('**C  Writing.** Something has gone wrong where you live or work. Write a message to the people it affects (40+ words): what has happened, what will happen if it is fixed today, what will happen if it isn\'t, one warning, and one line for the people it will be hardest for.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use the present after _if_ and _will_ in the other half',
  '☐ ask _What will happen if…?_',
  '☐ use _when_ and _as soon as_ for things that are certain',
  '☐ warn somebody with _unless_ and _otherwise_',
  '☐ give strong advice with _If I were you, I\'d…_',
  '☐ reassure somebody in the right order — listen first, comfort second',
  '☐ write a notice with conditions that people can act on',
  '☐ explain a notice full of conditions to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 16 – THEN AND NOW', [
  'Unit 15 was about what will happen. Unit 16 goes backwards: what people **used to** do, what has stopped, and what is still here.',
  'Before the next lesson: find **one** photograph of a place you know, taken at least ten years ago. Bring it, or bring it on your phone. We will build a wall out of them.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
