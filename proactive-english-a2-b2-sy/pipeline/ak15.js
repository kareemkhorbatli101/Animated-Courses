// Proactive English A2 · Syria Edition · Book 2 · Unit 15 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 15  Problems and Solutions — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**The one rule the whole unit stands on:** after _if_, _unless_, _when_, _as soon as_, _before_ and _until_, English uses the **present simple** — never _will_. Mark it every time, in every cycle, even in free speaking. Everything else in Unit 15 can wait.',
  'The second thing worth being strict about is **_unless_ with two negatives** (~~unless you don\'t hurry~~), because it means the opposite of what the student intends and nobody will tell them.',
], C.lblue, C.navy));

// ===================== 15.1 =====================
out.push(pb());
out.push(h2('15.1  If it rains, we\'ll go on Sunday'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Typical endings: _…we\'ll be in Room 3 · …I\'ll come anyway · …my knee will not forgive anybody · …the class will be smaller._ Write five on the board and underline the present verb after _if_ in each.'));
out.push(A('**b** **1** _If it rains_ **C** / _we\'ll stay at home_ **R**.   **2** _I\'ll ring you_ **R** / _if the bus is late_ **C**.   **3** _If he asks_ **C** / _I won\'t say anything_ **R**.'));
out.push(NOTE('Item 2 is there to show that the **order can be reversed**. The condition is still the condition wherever it stands; what changes is the comma. Draw the two shapes on the board once and refer back to them all unit: _If C, R._ and _R if C._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – in Room 3, on the ground floor.'));
out.push(A('**b** **1** On Tuesday morning. It stopped **between floors with the doors open and nobody inside** — Abu Nizar calls it the luckiest thing that has happened in the building this year.   **2** They wait, and nobody knows for how long.'));
out.push(S('Language box · Practise'));
out.push(A('**1** If it **rains**, we **won\'t go**.   **2** If the part **arrives** tomorrow, he **will fit** it.   **3** I **\'ll ring** you if the bus **is** late.   **4** If you **see** Mr Bassam, **ask** him about the lift.   **5** If she **doesn\'t come**, we **\'ll start** without her.'));
out.push(NOTE('Item 4 is the one students query: the result half is an **imperative** (_ask him_), not a _will_ sentence. Tell them the rule is about the _if_ half only — the other half can be _will_, an imperative, or _can_. That is also why item 4 has no comma problem: _If you see him, ask him._'));
out.push(S('Stage 3 · Practise (sample – Card A, the lift)'));
out.push(SAMPLE([
  '**A:** What will you do if the lift isn\'t fixed by Thursday?',
  '**B:** If it isn\'t fixed, I\'ll come half an hour early and sit downstairs.',
  '**A:** And if it doesn\'t get fixed next week either?',
  '**B:** Then I\'ll ask Ms Huda to keep us downstairs until the summer.',
  '**A:** And if Room 3 is cold as well?',
  '**B:** (laughs) Then I\'ll bring two coats and give one to Hiba, who never brings one.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"If it isn\'t fixed, I\'ll come early." · "If the bus doesn\'t come before eight, I\'ll walk." · "If the shop is closed, I\'ll go on Saturday."_ — all three have a present verb after _if_ and _will_ in the other half. That is the check.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The water in our building goes off without warning. If it goes off on Tuesday, I\'ll fill everything on Monday night._',
  '**A:** And if that doesn\'t work either? **B:** If it\'s off on Wednesday as well, I\'ll take everything to my brother\'s and wash it there.',
  '**A (the hole):** What about your neighbour upstairs? **B:** …She is eighty-one and she will not fill anything and she will not ask anybody. I did not think of that.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina\'s problem is the water in her building. If it goes off on Tuesday, she will fill everything on Monday night, and if it is off on Wednesday as well she will go to her brother\'s and wash everything there. The hole in her plan is her neighbour upstairs, who is eighty-one and will not fill anything and will not ask anybody. Lina did not think of that, and by the end of the conversation the plan had a second half.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If it will rain, we will stay. → ✓ If it **rains**, we will stay.   ✗ If the part will arrive → ✓ If the part **arrives**.   ✗ If it rains we\'ll stay _(no comma)_ → ✓ If it rains**,** we\'ll stay.   ✗ If she doesn\'t comes → ✓ If she **doesn\'t come**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It will move to Room 3, on the ground floor.'));
out.push(A('**2** A note — **either way**, whether the lift has been repaired or not.'));
out.push(A('**3** Go to reception and tell them. Their class will be moved to the ground floor whatever happens to the lift, and they do not have to explain why.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BUILDING 14, AL-JALAA STREET — NOTICE**',
  '**The main water pipe** is being repaired on Tuesday 21 January.',
  '**If the work finishes on Tuesday,** the water will be back by two o\'clock.',
  '**If it does not finish,** the water will be off on Wednesday as well.',
  '**Either way there will be a note on this board by six o\'clock on Tuesday evening.**',
  '**If you cannot carry water up the stairs,** knock at flat 1 and we will bring it. You do not have to explain why.',
  'The caretaker · flat 1',
]));
out.push(S('Stage 7 · Write freely (sample, 121 words)'));
out.push(SAMPLE([
  '**AL-NOUR CLINIC — SATURDAY 8 FEBRUARY**',
  '**The electricity company is working on our street on Saturday**, from seven in the morning.',
  '**If the power is off for less than four hours,** the clinic will open as normal and only the X-ray will not be available.',
  '**If it is off for longer,** we will see emergencies only, and everybody with an appointment will be telephoned — telephoned, not sent a message, because half of you have told us you do not read messages.',
  '**Either way, the clinic will be open and somebody will be at the desk.** If you are not sure, come. It is better than waiting at home.',
  '**If you need a prescription that day and you cannot come in,** ring us before Thursday and we will have it ready at the desk from Friday afternoon.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Either way the clinic will be open and somebody will be at the desk." That is the line I would act on._   ✓ _I had to read the four-hours condition twice — give the two cases separate lines._   ? _What happens if neither of your two things happens and they finish at midday on Sunday?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The **four-second walk** is the assessment, and it is ruthless in the right way. A notice that cannot be acted on in four seconds will not be acted on at all, and students who have just written a beautiful paragraph discover this without being told.'));
out.push(S('Homework (sample – the note at four o\'clock)'));
out.push(SAMPLE(['**THURSDAY, 16:00.** The part has arrived and the engineer will fit it tonight after the last class. Tonight nothing changes: Room 12 is in Room 3 and Room 14 is in Room 5, as announced on Tuesday. If the work is finished tonight, all classes go back to their normal rooms from Saturday. If it is not finished, we stay downstairs next week. There will be a note on this door on Saturday morning either way. Please do not use the lift until a note says it is working.']));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  What will happen if it isn\'t ready?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Six in ninety seconds. Typical: _What will happen if it rains? · Will there be food if we pay? · What will we do if the hall is too small? · Will it still happen if the director can\'t come?_'));
out.push(A('**b** **1** _**What will happen** if it isn\'t fixed?_   **2** _**What will** you **do** if she **doesn\'t come**?_   **3** _**Will** the class **still happen** if the lift **is** broken?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the bus to Latakia.'));
out.push(A('**b** **1** If she tells them before Thursday evening she can change it to another day; if she tells them on Friday morning she loses it.   **2** The bus goes the long way, she arrives about three hours late, and nobody gets any money back — because they did take her to Latakia.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **What will happen if the part doesn\'t arrive?**   **2** **What will you do if it rains?**   **3** **Will there be a seat if I come at seven?**   **4** **Can I change it if the date moves?**   **5** **Will she be angry if we start without her?**'));
out.push(NOTE('The error to hunt in this exercise is _~~What will happen if the part **won\'t** arrive?~~_ Students get the question half right and then put _will_ into the _if_ half as well, because both halves are about the future. Say it once: **only one _will_ per conditional sentence, and it is never after _if_.**'));
out.push(S('Stage 3 · Practise (sample – Card A, the bus office)'));
out.push(SAMPLE([
  '**A:** I want to travel on Friday, but I have some questions first.',
  '**B:** Go on.',
  '**A:** What will happen if I can\'t travel on Friday?',
  '**B:** If you tell us before Thursday evening, you can change the day. If you tell us on Friday morning, you lose the ticket.',
  '**A:** And if the bus doesn\'t go at all?',
  '**B:** Then it isn\'t your fault and you lose nothing.',
  '**A:** Can I change it twice if the date moves again?',
  '**B:** You can change it once. If you change it twice, you buy a new ticket.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Costs money: changing on the morning of travel (you lose the ticket); changing a second time (you buy a new one)._   _Costs nothing: a cancellation by the company._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Six questions before I pay for the course:** What will happen if I have to stop in the middle? Can I change to the morning class if my shifts change? Will I get the money back if the centre cancels? What happens if I miss four lessons? Will there be a certificate if I pass? And can I pay in two parts if I ask now?_',
  '_**The one that would change my decision:** the morning class. If I cannot move, I cannot do it at all, and nothing else on the list matters._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Maya asked six questions at the bus office. If she cancels before Thursday evening she can change the day; if she cancels on Friday morning she loses the ticket. If the weather stops the bus, she loses nothing. If the coastal road is closed she arrives three hours late and gets nothing back, because they did take her to Latakia, which I thought was a hard sentence but a fair one. She can change the ticket once. The question that would change her decision is the last one, because her sister\'s exam might move.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ What you will do if…? → ✓ **What will you do** if…?   ✗ What will happen if it will rain? → ✓ …if it **rains**?   ✗ If I come at seven, there will be a seat? → ✓ …**will there be** a seat?   ✗ What will happen if the part won\'t arrive? → ✓ …if the part **doesn\'t arrive**?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Once.'));
out.push(A('**2** Because the journey has happened — they have taken the passenger to Latakia, even though it took three hours longer.'));
out.push(A('**3** A paper from a doctor, within **seven days**. It is then treated as the company\'s own cancellation.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**EVENING CLASSES — WHAT HAPPENS IF YOUR PLANS CHANGE**',
  '**If you change your level in the first two weeks,** you can move to any class with a place. There is no charge. You can do this **once**.',
  '**If you change after the second week,** you pay half the fee again, because the books and the register have already been made up.',
  '**If we cancel a lesson,** we add it at the end of the course. You lose nothing.',
  '**Questions?** Ask at reception before you pay. Everything on this page is easier before you have paid.',
]));
out.push(S('Stage 7 · Write freely (sample, 130 words)'));
out.push(SAMPLE([
  '**KHOURY & SONS — DELIVERY AND RETURNS**',
  '**If you order before 14:00,** we deliver the same day inside the city. After 14:00 it goes on the next morning\'s van.',
  '**If nobody is at the address,** the driver waits ten minutes and then takes it back. We will ring you and bring it again the next day, once, free. The second time there is a charge, because the van has made the journey twice and the second journey helps nobody.',
  '**If the goods arrive damaged,** tell the driver before he leaves. We will take them back and replace them. **If you find the damage later,** ring us within two days and keep the box — the box tells us where it happened.',
  '**If we are late and you no longer want it,** you pay nothing at all.',
  '**Questions?** Ask when you order, not when the van is outside.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the second journey helps nobody" — that is a reason I accept, so I accept the charge._   ✓ _"Tell the driver before he leaves" has no limit — how long does he wait? Ten minutes is in the other paragraph; say it here too._   ? _What happens if neither of us is at fault — the box is fine but the thing inside isn\'t?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The argument at the window is the real test. A condition that survives a determined customer is well written; one that collapses needed a limit, a reason, or both. Give the arguing pairs four minutes and then collect the three conditions that were rewritten.'));
out.push(S('Homework (sample reply to an angry customer)'));
out.push(SAMPLE(['Dear Mr Haddad, Thank you for your message, and I am sorry about Tuesday. The condition that applies is the second one: the driver waited and there was nobody at the address, so the delivery came back to us. We bring it again free the first time, and that is what we did on Wednesday. I cannot take the Thursday charge off, because the van made that journey a third time. What I can do is this: I will deliver myself on Saturday morning at a time you choose, and there will be no charge for Saturday. Please tell me an hour and I will be there. Yours sincerely, S. Khoury']));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  I\'ll ring you as soon as I know'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** **when** (certain): _the lift is fixed · I finish this course · the summer comes_.   **if** (possible): _it rains on Friday · my phone breaks_.'));
out.push(NOTE('_the lift is fixed_ is the one worth arguing about, and the argument is the lesson. Mr Bassam says _when_ because the part is on a lorry; a student who says _if_ because they have lived in that building for nine years is not wrong about the building, only about the grammar. Let the class decide and then name what they have decided: **_when_ is a claim about certainty, and you are responsible for it.**'));
out.push(A('**b** **1** _as soon as I arrive_ is sooner.   **2** _before I leave_ is sooner.   **3** _when the part comes_ — and that is the **certain** one.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the part.'));
out.push(A('**b** **1** He will fit it the same day — two hours once it is in his hand.   **2** Put a chair at the bottom of the stairs.'));
out.push(S('Language box · Practise'));
out.push(A('**1** …as soon as I **know**.   **2** When the lift **works** again, we **\'ll go** back upstairs.   **3** …before I **go** home.   **4** We **\'ll wait** until the part **arrives**.   **5** After she **finishes** the course, she **\'ll look** for work.'));
out.push(S('Stage 3 · Practise (sample – Card A, the engineer)'));
out.push(SAMPLE([
  '**A:** Tell me something good.',
  '**B:** I\'ll tell you something true. The part is coming.',
  '**A:** When, or if?',
  '**B:** When. When it arrives, I\'ll fit it the same day — two hours.',
  '**A:** And when will you know the day?',
  '**B:** I\'ll ring you as soon as the lorry reaches the depot. The day, not the hour.',
  '**A:** Thank you.',
  '**B:** And before Thursday, do one thing for me: put a chair at the bottom of the stairs.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"When it arrives, I\'ll fit it the same day." · "I\'ll ring you as soon as the lorry reaches the depot." · "Before Thursday, put a chair at the bottom of the stairs."_ — the **fastest** promise is the _as soon as_ one.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I\'m waiting for my training dates. When they come I\'ll put them on the wall at home the same evening, and I\'ll tell my manager as soon as I know the first day. Before it starts I\'m going to finish two jobs I\'ve been leaving._',
  '**b (the honest one)** _I have been saying "when I\'m a senior technician" for two years. It is an **if**. I have never once said it as an if out loud._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour is waiting for her training dates. She says when they come she will put them on the wall at home the same evening, and she will tell her manager as soon as she knows the first day. Before it starts she is going to finish two jobs she has been leaving. Then I asked her the second question and she thought for a long time, and she said that she has been saying "when I am a senior technician" for two years, and that it is an if, and that she has never once said it as an if out loud.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ when I will know → ✓ when I **know**.   ✗ as soon as the part will arrive → ✓ as soon as the part **arrives**.   ✗ We\'ll wait until the part will come. → ✓ …until the part **comes**.   ✗ After she will finish → ✓ After she **finishes**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because he can control the day but not the hour — the part is on a lorry and he does not know which one. He promises only what he can keep, and he says so: _nobody can write an hour_.'));
out.push(A('**2** When people see a chair they sit down and wait for help; when they see nothing they start climbing the stairs — and then he has two problems instead of one.'));
out.push(A('**3** Press the lift button. It does not help, and it is how the last part was destroyed.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Mr Fouad   **Subject:** The new machine — the plan',
  'Mr Fouad,',
  '**When the machine arrives**, I will set it up the same afternoon. It takes about three hours.',
  '**As soon as I know the day**, I will tell you — the day, not the hour.',
  '**Before Friday**, please clear the corner by the window, because the old one has to come out before the new one goes in.',
  '**Until it arrives**, nobody should use the small printer for big jobs. That is what killed the last one.',
  'Omar',
]));
out.push(S('Stage 7 · Write freely (sample, 115 words)'));
out.push(SAMPLE([
  '**To:** everybody in flat 4   **Subject:** My mother is coming on the 9th',
  '**When she arrives**, she will have the small room, and I will be on the sofa for three weeks. This is not a request; it is information.',
  '**As soon as I know her train**, I will put the time on the fridge. I will know on Sunday.',
  '**Before the 9th**, please take whatever is yours off the small bed. All of it is somebody\'s and none of it is mine.',
  '**Until she goes**, the kitchen radio stays off after nine. She does not sleep and then nobody sleeps.',
  '**After she leaves**, I will cook for everybody for a week, which is the price of three weeks on a sofa and I am paying it willingly.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"This is not a request; it is information." I believe every other line because of that one._   ✓ _"I will know on Sunday" is a when — make it one: **when I ring her on Sunday**._   ? _What will you do if she doesn\'t come at all — she cancelled twice last year?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Counting the _when_s and _if_s is quick and it is honest. A message with five _when_s in it is promising five things; one with two _when_s and three _if_s is telling the truth. Students feel the difference immediately when it is their own waiting.'));
out.push(S('Homework (sample – a week later)'));
out.push(SAMPLE(['Mr Bassam — nothing has changed, and I would rather tell you that than say nothing. The part has not reached me. It left Aleppo on the fourteenth and the company tells me it is still on a lorry, which is now the ninth day that sentence has been true. What has not changed: when it reaches my hand I will fit it the same day, and I will ring you as soon as I know the day. What has changed: I am now ringing them every morning instead of every second day. Keep the chair where it is.']));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  Unless you leave now, you\'ll miss it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Typical: _…you\'ll miss it · …you\'ll be cold · …we won\'t go at all._ Keep three on the board for Stage 3.'));
out.push(A('**b** **1** _If you **don\'t** hurry, you\'ll be late._   **2** _**Unless** you take a coat, you\'ll be cold._'));
out.push(NOTE('Do this one in both directions until it is automatic: **_unless_ = _if … not_**. Write _unless = if not_ in the corner of the board and leave it there for the whole cycle. Every error in this cycle is a failure to believe that one equation.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – her sister\'s exam may move, and Maya is booking before the exam list comes out.'));
out.push(A('**b** **1** Unless she takes the seven o\'clock, she will be at the back by the door — and that door opens at Homs, Hama and everywhere between.   **2** Ring the hotel the night before; otherwise they will give her room to somebody standing in front of them.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Unless** you **hurry**, you\'ll miss the bus.   **2** **If** you **don\'t book** this week, there won\'t be a seat.   **3** Take a coat, **otherwise** you\'ll be cold.   **4** **If** she **doesn\'t ring** before Thursday, she\'ll lose the ticket.   **5** Write it down, **otherwise** you\'ll forget.'));
out.push(S('Stage 3 · Practise (sample – Card A, Latakia on a Friday in winter)'));
out.push(SAMPLE([
  '**A:** I\'m going to Latakia on Friday.',
  '**B:** Then three warnings. Unless you take the seven o\'clock bus, you\'ll be at the back by the door.',
  '**A:** Noted.',
  '**B:** And ring the hotel on Thursday night, otherwise they\'ll give the room away.',
  '**A:** But they have my booking.',
  '**B:** They have your booking and a man in the doorway with a bag. If you don\'t ring, you\'ll be standing next to him. Write these down.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"Unless you take the seven, you\'ll be at the back." · "Ring the hotel, otherwise they\'ll give the room away." · "If you don\'t change it before Thursday evening, you lose the whole thing."_ — the most useful is the hotel one, because it is the one the listener did not expect.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_You\'re moving flat next month. Three warnings. **Unless** you photograph every room before you put anything in it, you will argue about the deposit in July. **Take the day off**, otherwise you will be carrying boxes at eleven at night after a full day\'s work. And **if you don\'t** tell the electricity company the day you move, the next bill will be the old tenant\'s and it will take four months to fix._',
  '**A:** How do you know the last one? **B:** Because it took me four months.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lama gave Maya three warnings about Friday. Unless she takes the seven o\'clock bus she will be at the back by the door, which opens in every town between here and the coast. She must ring the hotel the night before, otherwise they will give her room to a man standing in the doorway with a bag. And unless she changes the ticket before Thursday evening she will lose the whole thing. I asked how she knew the second one and she said it has happened to her, in Latakia, in the rain, in February.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Unless you don\'t hurry → ✓ **Unless you hurry** / **If you don\'t hurry**.   ✗ Unless you will hurry → ✓ Unless you **hurry**.   ✗ Otherwise you don\'t take a coat, you\'ll be cold. → ✓ Take a coat, **otherwise** you\'ll be cold.   ✗ Unless, you hurry → ✓ no comma after _unless_; the comma goes in the **middle**.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because Maya will remember two of the three — and it will be the wrong two.'));
out.push(A('**2** It happened to her: Latakia, February, in the rain.'));
out.push(A('**3** Thursday evening is the last moment she can change the ticket and keep it. On Friday morning she loses it — not half of it, all of it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE THINGS, AND THEN I WILL STOP**',
  'Rasha — I am writing them down because nobody remembers advice given in a doorway.',
  '**1. Photograph every room before you move anything in.** Unless you do, you will argue about the deposit in July and you will lose.',
  '**2. Take the whole day off.** Otherwise you will be carrying boxes at eleven at night after a full day at work. I know this because I did it.',
  '**3. Ring the electricity company on the day, not the week after.** If you don\'t, the next bill will be the old tenant\'s.',
  'That is all. Tell me which floor and I will come with the heavy things.',
]));
out.push(S('Stage 7 · Write freely (sample, 139 words)'));
out.push(SAMPLE([
  '**THREE THINGS BEFORE YOU START THE COURSE AND WORK AT THE SAME TIME**',
  'Hiba — you did not ask, and I am writing anyway, because I did this two years ago and nobody warned me.',
  '**1. Decide now which evening is empty.** Unless you keep one evening with nothing in it, you will stop going out, then stop ringing people, and then stop doing the course. In that order. It takes about ten weeks.',
  '**2. Tell your manager in the first week, not the fourth.** Otherwise the first time he hears about it will be the first time you ask to leave early, and those two sentences in one conversation sound like one excuse.',
  '**3. If you fall behind, miss a week on purpose.** Do not try to do two weeks in one. I know this because I tried, and the week I lost was February, and I never got it back.',
  'That is all. It is a good course and you will finish it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"stop going out, then stop ringing people, then stop the course. In that order." I will keep Tuesdays._   ✓ _Number 3 needs where it came from — you say you tried, but not what happened._   ? _What happened in February?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Putting one warning on the wall is worth the four minutes. The one the class chooses is almost always the one with somebody\'s own bad week inside it — which is exactly what the Writer\'s box said, now proved by the room rather than by the book.'));
out.push(S('Homework (sample – the message afterwards)'));
out.push(SAMPLE(['Lama — I took the seven o\'clock, and you were right about the door; four people got off at Hama and every one of them let the cold in. I rang the hotel on Thursday night and the man said "of course, madam" in a voice that told me you were right about that too. The one I ignored was the ticket: I did not change it when the exam list came out on Wednesday, because I thought it would be fine. The exam moved to Monday. I lost the ticket and bought another one. Do not say anything. I am writing it down so that you do not have to.']));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  If I were you, I\'d ring them'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Insist on all three forms for each problem — the point is to feel the three strengths in a row, which no amount of explaining achieves.'));
out.push(A('**b** **Strongest:** _If I were you, I\'d ring them._ **Gentlest:** _You could ring them._ (In the middle: _Why don\'t you…?_ then _You should…_)'));
out.push(NOTE('Students are often surprised that _If I were you_ is the **strongest**, because it is the longest and the most polite-sounding. Explain it once: the other three tell them about their situation; this one tells them what **you** would do, and that is personal, so it carries weight. It is also the one to use sparingly.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – her referee has not replied.'));
out.push(A('**b** **1** Ask her again on Thursday, in the room, with the form in her hand.   **2** Write a second message explaining why the first one was important.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** _If I were you, I\'d go to the office today and report it before anybody uses it._   **2** _If I were you, I\'d ask her again in person._   **3** _If I were you, I\'d take it back with the receipt tomorrow._   **4** _If I were you, I\'d leave twenty minutes earlier and find out whether it is the bus or me._   **5** _If I were you, I **wouldn\'t** say anything until it is signed._'));
out.push(S('Stage 3 · Practise (sample – Card A, the referee)'));
out.push(SAMPLE([
  '**A:** My referee hasn\'t answered in nine days, and I don\'t know what to do.',
  '**B:** Why don\'t you send her another message?',
  '**A:** I\'ve tried that. It feels rude.',
  '**B:** Then if I were you, I\'d catch her after the lesson with the form in my hand.',
  '**A:** And if she says no?',
  '**B:** Then you have twelve days and you ask somebody else. But I wouldn\'t write a long message explaining why it matters.',
  '**A:** Why not?',
  '**B:** Because it makes the other person feel bad, and a person who feels bad is slower, not faster.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Advice: ask her in person, with the form._   _Would not do: write a long second message._   — The second one was more useful, because the student was already planning to do exactly that.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**A:** I\'m the only person who ever cleans the kitchen at work.',
  '**B:** _You could put a rota on the wall._ → _You should say something at the Monday meeting._ → _If I were you, I\'d stop cleaning it for one week and say nothing at all._ And **I wouldn\'t** put up a notice about it — a notice about a kitchen is read by everybody and obeyed by nobody.',
  '**b** _I will do the Monday meeting. I will not stop cleaning it, because I would be cleaning it on the eighth day anyway and then I would have lost both the kitchen and the argument._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba\'s problem is her referee. Rami said that if he were her he would ask again on Thursday, in the room, with the form in his hand, and that nine days is not a refusal, it is a full inbox. The thing he would not do is write a second message explaining why the first one mattered, because it makes the other person feel bad and does not make them any faster. He also said she should ask the second referee this week anyway — not instead, as well. She is going to do the Thursday one and she is not going to do the second one, and she could not explain why, which I think means she will.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ If I was you → ✓ If I **were** you.   ✗ If I were you, I\'d to ring them. → ✓ I\'**d ring** them.   ✗ If I were you, I ring them. → ✓ I\'**d** ring them.   ✗ If I were you, I don\'t write again. → ✓ I **wouldn\'t** write again.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because a form in a hand takes thirty seconds and a message takes a week — the person can say yes on the spot.'));
out.push(A('**2** So that if both say yes she has a choice, and having a choice eleven days before a deadline is the whole point. It is _as well_, not _instead_.'));
out.push(A('**3** Twelve days is enough time to find and ask another referee and get the form back. Nine days of waiting followed by four days of panic is not — the time has been spent, not used.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The question.** "My neighbour\'s water has been coming through my kitchen ceiling for three weeks. I have knocked twice and he says he will look at it." — R.',
  '**The reply.** Write it down and put it under his door, today.',
  'Three weeks of knocking has told you what knocking achieves, because a conversation at a door disappears the moment the door shuts. If I were you, I\'d write four lines — what is happening, since when, and one date by which you would like it looked at — and keep a photograph of the ceiling with the date on it.',
  'I wouldn\'t go to the caretaker first, because you will need him later and you can only do that once.',
  'If nothing has happened by your date, then the caretaker — and by then you will have a paper and a photograph, which is a different conversation.',
]));
out.push(S('Stage 7 · Write freely (sample, 143 words)'));
out.push(SAMPLE([
  '**The question.** "A friend borrowed money from me in the autumn and has never mentioned it. We see each other every week. Do I ask?" — N.',
  '**The reply.** Ask, once, and make it easy for him to answer.',
  'You are not going to stop thinking about it, and he is not going to raise it first — people who are late with money go quiet, and the quiet is almost never about you. Every week you both say nothing, the thing gets heavier and the friendship gets thinner.',
  'If I were you, I\'d say it in the first two minutes, not at the end of an evening, and I\'d give him a way out: _"When you get a chance about the autumn — no hurry, I just want to stop wondering."_ That sentence lets him say _next month_ without it being a confession.',
  'I wouldn\'t send it as a message. Written money is a debt; spoken money is a favour, and you want it to stay a favour.',
  'If he says nothing after that, you have your answer about the money, and you still have your friend, and you decide what each one is worth.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Written money is a debt; spoken money is a favour." That is what decided it._   ✓ _You tell me to ask in the first two minutes but not why — is it so the rest of the evening is normal?_   ? _Have you done this yourself?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The guessing game is a sharp and very quick test of specificity. Advice that could belong to any problem (_talk to them · be honest · don\'t worry about it_) is unguessable, and the class discovers in two minutes that general advice is a kind of politeness, not a kind of help.'));
out.push(S('Homework (sample – the message to the referee)'));
out.push(SAMPLE(['Dear Ms Huda, I asked you on the 20th about being a referee for the teacher-training course, and I know how full your inbox is, so I am asking once more and then I will stop. It is one page. It asks about attendance and spoken English, and it takes about ten minutes. The form has to be in by the first of March, so I would need it back by the 26th of February. I will bring it to class on Thursday and you can say no on Thursday and nothing between us changes. Thank you. Hiba Khalil, 4B']));

// ===================== 15.6 =====================
out.push(pb());
out.push(h2('15.6  Don\'t worry — it\'ll be fine'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and worth the time: nearly every language has a fixed phrase here, and putting the English next to it makes the register obvious.'));
out.push(A('**b** **Helps:** _I\'ll help you_ · _It\'s not your fault_ · _What do you need?_ (usually the best of all).   **Annoys:** _Calm down_ · _I told you_.   **_Don\'t worry_ depends entirely on when it is said** — after you have listened it helps; before you have listened it means _stop talking_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – Lina has sent the wrong file (last year\'s prices) to the supplier in Türkiye.'));
out.push(A('**b** **1** She asks for the screen and **looks at what actually happened** — she finds the two file names. Only then does she say anything reassuring.   **2** He sent an entire client list to the wrong client — and that man is now a supplier.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('**1** "I\'ve missed the deadline." → _Show me the date. … Right — it closed yesterday, so we ring them in the morning and ask. People extend things all the time._'));
out.push(A('**2** "I think I\'ve failed." → _You might have. We\'ll know on Thursday and not before. Come on Thursday and we\'ll look at it together._'));
out.push(A('**3** "I\'ve broken it." → _Let me see. … It\'s the handle, not the machine. These things happen — I\'ll bring the other one from upstairs._'));
out.push(A('**4** "Nobody has replied to me." → _How long has it been? … Four days is nothing in that office. Ring them on Monday morning, early, and you\'ll get a person._'));
out.push(A('**5** "I\'ve told him the wrong day." → _Tell me exactly what you said. … Then send one line with the right day and no explaining. He will read the day and nothing else._'));
out.push(NOTE('Mark these on **order**, not on vocabulary. Every good answer begins by asking for information — _show me · let me see · how long has it been · tell me exactly_. A student whose first words are _don\'t worry_ has given the right phrase at the wrong moment, and that is the whole cycle.'));
out.push(S('Stage 3 · Practise (sample – Card A, the wrong file)'));
out.push(SAMPLE([
  '**A:** I\'ve sent the wrong file to the customer. I don\'t know what to do.',
  '**B:** Right. Sit down. Tell me exactly what happened.',
  '**A:** I sent the old price list. Eleven minutes ago.',
  '**B:** It\'ll be fine. Nobody has signed anything and it is half past four.',
  '**A:** But I checked it twice.',
  '**B:** It isn\'t your fault — two files should never have had names that close, and I am renaming them tonight.',
  '**B:** Here\'s what we\'ll do. One short message with the right file, in ten minutes, when your hands have stopped. Then go home at five.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Step 1: "Sit down. Tell me exactly what happened." Step 2: "It\'ll be fine." Step 3: "It isn\'t your fault — the file names." Step 4: "One short message in ten minutes, then go home."_ — and yes, step 1 came first, which is what made the rest work.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_The day I deleted a customer\'s files, my manager\'s first word was "show me", not "don\'t worry". He looked for four minutes, found them in the wrong folder, and said "they were never gone". Then he said "these things happen" — after, not before._',
  '**Partner\'s verdict:** _He did 1, then 3, then 2. He skipped 4, but there was nothing left to do._',
  '**b** _The sentence I would most like to hear: "anybody would have done that". The sentence I say to other people: "it\'ll be fine." They are not the same thing at all._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour told me about the day she deleted a customer\'s files at work. Her manager\'s first sentence was "show me", not "don\'t worry", and she says that is why she still works there. He did the steps in the right order without knowing there were steps. The sentence she would most like to hear is "anybody would have done that", and the sentence she says to other people is "it\'ll be fine", which she admitted is not the same thing at all.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Calm down. → ✓ **Tell me exactly what happened.**   ✗ Don\'t worry _(said first)_ → ✓ listen first, **then** _don\'t worry_.   ✗ It will be fine, I think. → ✓ **It\'ll be fine.** _(no hedging — the hedge is the one thing a worried person cannot use)_   ✗ It isn\'t your fault, you should be more careful. → ✓ choose one. Those two sentences cancel each other out.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Four lines, the right file, and no explaining — the correction first, one line of apology, and nothing else.'));
out.push(A('**2** Rename the two files, so that nobody can make the same mistake again.'));
out.push(A('**3** The problem itself is already solved — the right file has gone, nothing was signed, nothing is lost. What is left is the panic, which is in Lina and not in the situation. It is Rana\'s way of saying: the thing you can hear is not the thing that is happening.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Hiba,',
  'That was exactly the right message — short, the right date, no explaining.',
  'Three things before you go to bed. It isn\'t your fault — the list on the door said Thursday until Tuesday afternoon, and I have taken a photograph of it. Nothing is lost, because only four people have answered and I have written to all four. And this is the fourth time this has happened to somebody in this club this year.',
  'Go to sleep. It\'ll be fine.',
  'Lama',
]));
out.push(S('Stage 7 · Write freely (sample, 124 words)'));
out.push(SAMPLE([
  'Rami,',
  'You rang me at half past eleven, so I am writing instead of sleeping, which tells you how worried I am about this. Not very.',
  'First: you told them the same evening. That is the part that matters and it is the part you are not giving yourself any credit for.',
  'It isn\'t your fault. The drawing you were given was the old one — it has the January date in the corner and I have kept it. Anybody working from that sheet would have set it out the same way.',
  'Nothing is lost. They have not poured anything. The correction takes a morning and the morning is Sunday, which is why you are not going in tomorrow.',
  'So: sleep, go in at eight on Sunday, and bring the old drawing with you.',
  'Omar',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"That is the part you are not giving yourself any credit for." I did not think of it as a thing I did right._   ✓ _"Nothing is lost" is the comfort; the **fact** is that they have not poured anything. Put the fact first._   ? _Is the old drawing really dated? If it is, that changes who pays._'));
out.push(S('Stage 7R · Share'));
out.push(A('The class will choose the message with the **fact** in it, not the kindest one, and they will be surprised by their own choice. Name it for them: comfort without a fact is a feeling, and a feeling does not survive the walk home.'));
out.push(S('Homework (sample – the apology itself)'));
out.push(SAMPLE(['Dear Mr Yilmaz, Please use the attached file. The prices I sent on Thursday at 16:37 were last year\'s and should be ignored. The attached list is correct and is dated January. With apologies for the extra message, and thank you for your patience. Lina Haddad · Accounts · Medica Trading']));

// ===================== 15.7 =====================
out.push(pb());
out.push(h2('15.7  Review & Mediate: What does the repair notice say?'));
out.push(S('Stage 1 · Get ready – Unit 15 quiz'));
out.push(A('**1** If it **rains**, we will stay at home.   **2** **What will you do** if she doesn\'t come?   **3** I\'ll ring you when I **know**.   **4** **Unless you hurry**, you will miss it. _(or: If you **don\'t** hurry…)_   **5** If I **were** you, I **would ring** them.   **6** Don\'t worry, it\'ll be fine. _(delete **calm down** — never say it)_'));
out.push(NOTE('Numbers 1, 3 and 4 are the same mistake wearing three hats: a future verb where English wants the present. If a team gets one of those wrong they will have got all three wrong. Fix it once, on the board, with all three sentences in a column.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Saturday** — and only if the repair is finished tonight. The student\'s real question is answered in two lines at the end: _Tonight: downstairs. Saturday: read the door._'));
out.push(S('Stage 3 · Practise (sample – Notice A explained without showing it)'));
out.push(SAMPLE([
  '_It\'s a notice about the water, and it has five short parts. Two of them are yours._',
  '_The certain part: the water will be off on Tuesday, from eight in the morning until two._',
  '_Then a condition: if they don\'t finish on Tuesday, it will be off on Wednesday as well. They don\'t know yet._',
  '_Either way there will be a note here on Tuesday evening, so look at the board before you go to bed._',
  '_The warning: don\'t turn the taps on to check whether it has come back. Turn them **off** before Tuesday. If you leave a tap open and the water comes back at two in the morning, you will find out about it from the flat below._',
  '_And the last part is for the people who can\'t carry water: knock at flat 1 and they will bring it._',
  '**B:** So on Wednesday morning — water or no water?',
  '**A:** Nobody knows. Read the board on Tuesday night.',
  '**C:** I\'m going to fill the bath on Monday evening, then I don\'t have to think about Wednesday at all.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Certain: the water will be off Tuesday 08:00–14:00._   _Depends on a condition: Wednesday._   _Not to do: turn the taps on to check — turn them off first._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_It\'s the message from the phone shop. Four parts, and really only two are mine._',
  '_Small repairs: same day, if you bring it before eleven._',
  '_A screen: two days — unless the part has to come from Aleppo, and then nobody promises anything._',
  '_If they can\'t fix it, you pay nothing. That is the only line in it that is a real promise._',
  '_The warning is the one everybody ignores: copy your photographs before you leave the phone. They are not responsible for them._',
  '**A:** Which part is about me? — **B:** The screen one, and the warning. — **A:** What am I not supposed to do? — **B:** Leave it there with your photographs still on it.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Omar explained the notice from the phone shop. If you take a small repair in before eleven, you get it back the same day. A screen takes two days, unless the part has to come from Aleppo, and then nobody promises anything. If they cannot fix it, you pay nothing, which he says is the only line in the notice that is really a promise. The warning is that you must copy your photographs before you leave the phone, because they are not responsible for them, and he says that is the line everybody ignores and then cries about. There is a three-month guarantee but only with the receipt, so I decided that if I ever take a phone there I will photograph the receipt, which is a strange sentence about a phone I cannot use.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It says the lift is working. _(when it says "do not use until a note says it is working")_ → ✓ It says **don\'t use it until** a note says so.   ✗ If the work will finish tonight → ✓ If the work **finishes** tonight.   ✗ The guarantee is six months if you don\'t lose the receipt — unless you have the receipt. _(two negatives)_ → ✓ …**unless you have the receipt**, there is no guarantee.   ✗ Either way it will a note. → ✓ Either way **there will be** a note.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 1'));
out.push(A('**1 B**   **2 A**   **3 A**   **4 C**   **5 B**   **6 C**'));
out.push(NOTE('**4** is the one that separates the class, and it is pure Unit 15. The notice says the class **is** downstairs tonight (certain) and **may** be upstairs from Saturday (conditional). **B** reverses the two — it makes tonight conditional — and that is exactly the misreading Mr Bassam warns about in Track 15.13. Read option B aloud next to the notice and let the class hear the difference.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Hi Nour!',
  'You weren\'t there, so: the part for the lift **has arrived** and the engineer **will fit it** tonight, after the last class.',
  'But don\'t **go upstairs tomorrow** — tonight our class **is in Room 3, downstairs**, exactly as **Mr Bassam said on Tuesday**.',
  'If he **finishes** tonight, we **go back to Room 12** from **Saturday**. If he **doesn\'t finish**, we **stay downstairs next week**.',
  'Either way there **will be a note on the door** on Saturday morning, so **read the door** before you **climb the stairs**.',
  'And don\'t use the lift unless **you see a note saying it is working** — the doors being open doesn\'t mean anything.',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (49 words)**',
  'Hi Sam! Small problem — the lift in my building is broken and your room is on the fourth floor. If they fix it this week, nothing changes. If they don\'t, you\'ll be climbing. Bring one bag, not two, and tell me if that\'s a problem and I\'ll find somewhere else.',
]));
out.push(SAMPLE([
  '**Weaker sample (27 words) – why it only just passes**',
  'Hi Sam. The lift is broken in my building. If they will not fix it you must climb four floors. Bring small bag. Bye.',
  '_All three points are there and it is long enough, so it passes — but: **if they will not fix it** must be **if they don\'t fix it** (the whole of Unit 15 in one error); **Bring small bag** needs **a**; **you must climb** is a little hard — **you\'ll have to climb** is what a friend writes; and there is no ending. A good one to put on the board next to the strong sample._',
]));
out.push(S('Unit 15 check · A  Grammar and vocabulary'));
out.push(A('**1 b** rains   **2 a** will happen   **3 b** know   **4 b** Unless   **5 c** otherwise   **6 c** were   **7 a** wouldn\'t   **8 c** both a and b'));
out.push(NOTE('**8** is deliberate and students will challenge it, which is the point: _it will be fine_ and _it\'ll be fine_ are both correct, but in **speech**, reassurance is always contracted. Answer **c**, then say the uncontracted version aloud and ask the class whether they would believe it.'));
out.push(S('Unit 15 check · B  Listening (Track 15.14)'));
out.push(A('**1 B** (Mr Bassam – a note on the door either way)   **2 D** (Abu Nizar – fits the part the day it arrives)   **3 A** (Maya – travels a day later if the weather is bad)   **4 C** (Hiba – asks the same person again, in person)   **5 E** (Lina – a short message with no explaining)'));
out.push(A('The two extra letters are **F** (will buy a new one if it is not repaired) and **G** (will move to a different class).'));
out.push(NOTE('The full audio script for Track 15.14 is printed in the Student\'s Book **after** the questions. If there is no audio, read it aloud **twice** at normal speed, pausing between the five people. Do not slow down: the five conditions all sound alike at speed, and separating them at speed is the skill.'));
out.push(S('Unit 15 check · C  Writing (sample, 96 words)'));
out.push(SAMPLE(['**TO EVERYBODY IN THE BUILDING.** The pump broke on Sunday night, which is why there has been no water above the second floor since Monday morning. The part is being collected today. If it is fitted this afternoon, the water will be back this evening. If it is not, we will fill the tank by hand tomorrow morning and there will be water between seven and ten only. Either way there will be a note on this board by eight o\'clock tonight. Please do not leave taps open to check — the flat below you will find out before you do. If you cannot carry water, knock at flat 1 at any time. You do not have to explain why.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The line that always needs five more minutes is **_use the present after if and will in the other half_** — not because they do not know it, but because it collapses the moment they stop thinking about it. The cure is not explanation, it is speed: ten quick oral prompts at the start of Unit 16, every lesson, for a fortnight.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Unit 15 looked forward with conditions. Unit 16 turns round and looks back: _used to_, what has stopped, and what is still here.',
  'Bring the photographs. Unit 16 builds a **then and now** wall out of them, and a unit about the past with nothing to look at is a much thinner unit than it needs to be.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 15 · Answer Key');
