// Proactive English A2 · Syria Edition · Book 2 · Unit 13 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 13  Experiences — Answer Key'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  'This unit is about the students\' **own lives**, so most of the speaking and writing has no single right answer. Accept anything that is true for the student and uses the target form correctly — and use the differences in the room as the lesson.',
  '**The one thing to be strict about** all through Unit 13: the moment a student says **when**, the verb must change to the past simple. _I\'ve been to Aleppo_ → _I **went** in 2019._ Everything else in this unit can be forgiven; that cannot.',
], C.lblue, C.navy));

// ===================== 13.1 =====================
out.push(pb());
out.push(h2('13.1  Have you ever been to Palmyra?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. A typical board after four minutes: _travel by plane – 3 people · see the sea – most of the class · cook for twenty people – 2 · ride a horse – 1 · lose a phone – nearly everybody · sleep in a tent – 2 · meet somebody famous – 0._ Write the **question** on the board as well as the numbers, because the question is the lesson.'));
out.push(A('**b** go – went – **gone** · see – saw – **seen** · eat – ate – **eaten** · take – took – **taken** · fly – flew – **flown** · do – did – **done**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – Nour. (She went with her school when she was eleven.)'));
out.push(A('**b** **1** She has never been to Palmyra and she has never flown (she has been to Beirut, but by bus).   **2** The Citadel of Aleppo – he grew up there.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I **have never been** to Palmyra.   **2** **Have** you ever **eaten** fish in Latakia?   **3** She **has flown** twice.   **4** We **haven\'t seen** the new bridge.   **5** He **has driven** to Homs many times.   **6** **Have** they ever **swum** in the sea?'));
out.push(S('Stage 3 · Practise (sample – Card A asking Card B)'));
out.push(SAMPLE([
  '**A:** Have you ever been to Bosra?',
  '**B:** Yes, I have. Bosra and Maaloula, both.',
  '**A:** Really? And have you ever travelled by plane?',
  '**B:** No, never. I\'ve always wanted to.',
  '**A:** Me too. What about diving?',
  '**B:** I\'ve tried it once, in Latakia.',
  '**A:** I haven\'t done that either.',
  '**B:** Then we should go to Latakia one day.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_never: "I\'ve never travelled by plane." · a number of times: "I\'ve slept in a tent three times." · a question with ever: "Have you ever cooked kibbeh?"_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**Find someone who has…**  been to another country – **Hiba** (Beirut) · eaten something they didn\'t like – **Rami** · lost something important – **Lina** (her ID card, twice) · met somebody famous – **nobody** · cooked for more than ten people – **Nour** · never drunk coffee – **Lama**',
  '**b** _Lama has never drunk coffee in her life, which in this country is almost an achievement. And Nour has cooked for twenty-two people, for her brother\'s engagement. I\'ve never cooked for more than four, and I\'ve never been out of Syria, and I would like to do both._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['I found three people who have been to another country – Hiba has been to Beirut, by bus, and Rami has been to Jordan twice. Nobody has met anybody famous. The best answer was Lama\'s: she has never drunk coffee, not once. I\'ve never slept in a tent, and nobody in my group has either, so we have decided that this class should go to Bludan in the summer and sleep in one.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I have ever been to Aleppo. → ✓ I have **never** been / **Have you ever** been?   ✗ I haven\'t never been. → ✓ I\'ve **never** been.   ✗ I have went there. → ✓ I have **been** there.   ✗ Did you ever be there? → ✓ **Have** you ever **been** there?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because she has not missed a single Saturday since she joined, and she has repaired four of the club\'s laptops for nothing.'));
out.push(A('**2** The heat, and the colour of the stone.'));
out.push(A('**3** Travelling outside Syria and swimming in the sea both cost money, which she hasn\'t got; reading a whole book in English costs nothing. So the third one is the one she can actually do — and the one she intends to do.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**MEMBER OF THE MONTH: NOUR**',
  'Nour is twenty-three and she is a junior technician at TechCare.',
  'She has repaired four of our laptops and she has never asked for any money, which is why we are writing about her.',
  'There are things she has never done: she has never left Syria and she has never read a whole book in English.',
  'Next month she starts a training course at work.',
]));
out.push(S('Stage 7 · Write freely (sample, 71 words)'));
out.push(SAMPLE([
  '**MEMBER OF THE MONTH: ME, APPARENTLY**',
  'I have lived in three cities, I have cooked for twenty-two people in one evening, and I have taught my younger brother to use a computer, which was harder than the twenty-two people.',
  'There are two things I have never done. I have never been on a plane and I have never swum in the sea, although I have stood next to it.',
  'This year I am going to do the second one.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have stood next to it" – that is the line everybody will remember._   ✓ _Say where the three cities were._   ? _Why have you never swum? Can you swim?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Open. The question _"Which person in this room has done something you would like to do?"_ is the real task — insist that students tell the **person**, not you. This is also where the class discovers who to ask in 13.2.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['My grandmother has lived in the same house for fifty-one years. She has raised six children and about twenty grandchildren, and she has made bread every single morning of all of it. She has never been to Damascus, which is two hours away, and she has never telephoned anybody in her life — she says that is what children are for. Next month she is going to be eighty, and all six of her children are coming.']));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  When did you go?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The five that nearly every class produces: _When did you go? · Who did you go with? · How long did you stay? · What did you see? · Did you like it?_ Push them past the last one — _Did you like it?_ is the question that ends a conversation.'));
out.push(A('**b** **1** _When **did you go**?_   **2** _**Have you ever been** there?_   **3** _How long **did you stay**?_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – eleven.'));
out.push(A('**b** **1** By bus, from Homs; the journey took about three hours.   **2** She didn\'t understand what she was looking at — she counted the columns and ate her sandwich. She understood it ten years later, from a photograph.'));
out.push(S('Language box · Practise'));
out.push(A('**1** **Have you ever been** to Bosra?   **2** **Did you go** there last summer?   **3** **How long did you stay**?   **4** **Has she ever flown**?   **5** **Who did she go** with?'));
out.push(NOTE('Items 1 and 4 are the life questions; 2, 3 and 5 all contain a **time** word or follow one, so they must be past simple. If a student gets 1 and 4 right and 2, 3, 5 wrong, they have understood nothing yet; if they get 2, 3, 5 right, they have understood everything.'));
out.push(S('Stage 3 · Practise (sample – Card A, a night on Mount Qasioun)'));
out.push(SAMPLE([
  '**A:** Have you ever spent a whole night outside?',
  '**B:** Yes, I have. On Qasioun.',
  '**A:** Really? When did you go?',
  '**B:** Last August, just after the exams.',
  '**A:** Who did you go with?',
  '**B:** Four friends from university.',
  '**A:** How long did you stay?',
  '**B:** All night. We came down at six in the morning.',
  '**A:** And what do you remember?',
  '**B:** The city with no noise in it. At four in the morning Damascus is completely silent, and I have lived here all my life and I have never heard it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_when: last August · who with: four friends from university · how long: all night, down at six · remembers: the city with no noise at four in the morning_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**B:** I\'ve been to Istanbul.',
  '**A:** When did you go? · Who did you go with? · How did you travel? · How long did you stay? · What did you see on the first day?',
  '**B:** In 2018. With my father, for his work. We flew from Beirut. We stayed nine days, and on the first day I saw nothing at all, because I slept until four in the afternoon.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lina has been to the Citadel of Aleppo. She went three years ago, in the spring, with her brother Ziad and his wife. They travelled by bus and it took five hours. They stayed two days. What she remembers is not the Citadel — it is the man in the small restaurant below it, who refused to take any money from them because they were visitors.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ When have you gone? → ✓ When **did you go**?   ✗ I have been there in 2019. → ✓ I **went** there in 2019.   ✗ How long did you stayed? → ✓ How long **did you stay**?   ✗ Who did you went with? → ✓ Who **did you go** with?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because she thought singing would keep forty children quiet. (It did not.)'));
out.push(A('**2** The colour — everything was the colour of the ground until the sun moved; the quiet; and her sandwich, which she ate much too early.'));
out.push(A('**3** In a dentist\'s waiting room in Damascus, ten years later, looking at a photograph in a magazine.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE DAY I WENT TO THE SEA FOR THE FIRST TIME**',
  'I have been to Latakia once, and I was nine.',
  'We went in July, by bus, and the journey took five hours.',
  'I remember the smell before I saw anything, and my mother holding the back of my shirt.',
  'I didn\'t go into the water above my knees.',
  'I am going to go back this summer and swim properly.',
]));
out.push(S('Stage 7 · Write freely (sample, 118 words)'));
out.push(SAMPLE([
  '**THE DAY I CARRIED A DOOR**',
  'I have moved house four times, but I have only carried a door once.',
  'It was August, two years ago. My cousin bought a flat in Jaramana with no door on the bedroom, and he bought one from a shop in Bab Srija and no van would take it on a Friday. So we carried it. Two kilometres, two men, one door, forty degrees.',
  'I remember three things: the corner of the door in my shoulder, a taxi driver who slowed down to laugh at us and then stopped to help, and the tea we drank afterwards, which I still say is the best tea I have ever had.',
  'I have never told my cousin that I dropped it once.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Two kilometres, two men, one door, forty degrees." Four facts, no adjectives._   ✓ _I wanted to know what the taxi driver said._   ? _Does the door still have the mark?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Open. Ask the question in the book exactly as it is written — _which story made you want to ask a question?_ — and then make the student **ask it**. The answer is nearly always the best minute of the lesson.'));
out.push(S('Homework (sample – the same experience from another side)'));
out.push(SAMPLE(['I was driving down towards Bab Srija on a Friday when I saw two young men carrying a door. Not a small door — a bedroom door, with the handle still on it. I slowed down to laugh, which I am not proud of, and then I saw the face of the one at the back and I stopped. We put it on the roof and I drove them to Jaramana. They tried to pay me. I have carried a door myself, in 1991, so I didn\'t take it.']));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  I\'ve been there three times'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Collect class totals, not individual answers — the numbers are what make the next stage work.'));
out.push(A('**b** _Samer has **gone** to Aleppo_ means he is **not here now** — he went and he is still there. _Samer has **been** to Aleppo_ means it is in his life; he has come back.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – in Aleppo. (He left on Tuesday; the bank sent him for a week.)'));
out.push(A('**b** **1** Twice.   **2** Because both times were for work — he saw a hotel and a meeting room. _"Twice is not knowing a city."_'));
out.push(S('Language box · Practise'));
out.push(A('**1** gone   **2** been   **3** gone   **4** been   **5** gone'));
out.push(NOTE('Item 4 (_Have you ever **been** to Bosra?_) is the one that catches the whole class, because _gone_ feels like the "travel" word. The test is simple and worth writing on the board: **if the person is standing in front of you, it is _been_.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Is Rana here?',
  '**B:** No, she\'s gone to the bank.',
  '**A:** Again? How many times has she been there this month?',
  '**B:** Three times. Have you ever been to that branch?',
  '**A:** I\'ve been once. / I\'ve never been.',
  '**B:** Then you should go with her next time — she knows everybody there now.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_the bank – Rana, three times this month · Homs – Mr Khaled, first time this year · the post office – Lina, twice this week_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**B:** I\'ve been to Beirut three times. Once with my mother when I was small, and twice to see my aunt. Always by bus, always to the same street. So no — I don\'t know Beirut at all.',
  '**A:** Three times is not knowing a city. Three times is knowing one aunt.',
  '**B:** That is exactly what it is. The place I have never been to and want to know properly is Aleppo.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba has been to Beirut three times, always by bus, always to see the same aunt, and she says she has never seen anything of the city except that one street. I told her three times is not knowing a city and she agreed with me straight away, which was disappointing — I wanted an argument. The place she has never been to and wants to know properly is Aleppo.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I have gone to Aleppo twice. → ✓ I have **been** to Aleppo twice.   ✗ Where is Maya? She has been to the pharmacy. → ✓ She has **gone** to the pharmacy.   ✗ I have been there three time. → ✓ three **times**.   ✗ How many times you have been? → ✓ How many times **have you been**?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He doesn\'t say it directly. What the note says is that the Citadel is too close and too familiar to be caught in one photograph — after a whole childhood ten minutes away he still found a street he did not know. Accept any answer that uses his last line: _That is what a city is._'));
out.push(A('**2** One hall, one hotel, and the road between them. (She knows the food very well and the city not at all.)'));
out.push(A('**3** She is going to go to the sea first, before she goes to her aunt — which is not what a good niece does.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Rasha · Latakia.**',
  'I have been eleven times, always in August, which means I have seen one beach and one ice cream shop.',
  'I have seen the sea from the same two hundred metres every year but I have never walked into the old town, which is ten minutes away.',
  'The bus from Damascus takes four and a half hours.',
  'This year I am going to spend one whole day with no sea in it.',
]));
out.push(S('Stage 7 · Write freely (sample, 96 words)'));
out.push(SAMPLE([
  '**The road between Damascus and Homs**',
  'I have driven it about sixty times, and I have never once stopped.',
  'My family is in Homs and my work is here, so twice a month for three years I have got into the car at six in the morning, driven for two hours, and arrived. I know every petrol station and I have used four of them. I know where the road is bad.',
  'I have never seen anything that is not from the window of a car. There is a lake forty minutes off that road and I have never been to it.',
  'Do I know that road? I know the tarmac. That is all.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I know the tarmac. That is all." You should end there._   ✓ _Tell me about one of the four petrol stations._   ? _Would you take me to the lake?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Collect the notes into one class page. The deciding question — _how do you know?_ — should push the class towards **numbers and details**, not enthusiasm. The student who has been somewhere eleven times and admits they have seen two hundred metres of it knows the place better than the one who says "I love it".'));
out.push(S('Homework (sample – a place you have been to only once)'));
out.push(SAMPLE(['I have been to Maaloula once, on a school trip in 2015, in October. We went because the school went; nobody asked me. What I remember is not the buildings. It is that our teacher asked us to be quiet for one minute in the street, and forty-two children were quiet, and you could hear somebody in a house above us washing plates. I have never been back and I think about that minute perhaps four times a year.']));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  I\'ve just finished it'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ten things is the target; the three marked _in the last hour_ are the ones you will use for _just_.'));
out.push(A('**b** Longest ago → now: _I finished it last week_ → _I\'ve already finished it_ → _I\'ve just finished it_ → _I haven\'t finished it yet._'));
out.push(NOTE('The last one is not a time at all, and a sharp class will say so. That is the right answer: _yet_ puts the job in the space between now and the moment it gets done. Draw the line on the board and leave _not yet_ hanging off the end of it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – she has just sent it (two minutes ago).'));
out.push(A('**b** **1** Mr Khaled — he replied before Lina finished her coffee.   **2** The supplier list: she hasn\'t started it yet, because she has been on the phone to Türkiye since nine o\'clock.'));
out.push(S('Language box · Practise'));
out.push(A('**1** I have **just** eaten.   **2** Have you spoken to him **yet**?   **3** She hasn\'t replied **yet**.   **4** They have **already** left.   **5** We have **already** paid the bill.   **6** Has the bus gone **yet**?'));
out.push(S('Stage 3 · Practise (sample – Card B, Medica Trading)'));
out.push(SAMPLE([
  '**A:** Have you sent the January report yet?',
  '**B:** I\'ve just sent it. Two minutes ago.',
  '**A:** Good. And the supplier list?',
  '**B:** I\'ve already finished that — I did it yesterday afternoon.',
  '**A:** And Mr Khaled\'s question?',
  '**B:** Not yet, because the question is three pages long and I\'ve only just read it.',
  '**A:** When can you answer it?',
  '**B:** Before I leave today.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_done: the two laptop repairs (just) · the cable order (already, Tuesday) · the January report (just)_   —   _not done yet: the workshop phone (on the phone all morning) · the price list (the printer is broken) · the Türkiye call (they ring at four)_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**Six things this week:** pay the electricity · answer my sister · finish the chapter for Thursday · take my shoes to be mended · ring the landlord about the water · buy a present for Jana',
  '_I\'ve already paid the electricity and I\'ve already bought the present. I\'ve just answered my sister — on the bus, ten minutes ago. I haven\'t finished the chapter yet, because I\'ve read the same page four times. I haven\'t taken my shoes yet, because the man is closed on Tuesdays. And I haven\'t rung the landlord yet, because I know exactly what he is going to say._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar has already done four of his six jobs, which I think is a lie. He has just finished the laptop repairs — he showed me the message. He hasn\'t written the price list yet, because the printer at TechCare has been broken since Monday and nobody has called anybody about it. And he hasn\'t phoned his mother yet, which he said very quietly.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I have sent it already yet. → ✓ I have **already** sent it.   ✗ I haven\'t finished already. → ✓ I haven\'t finished **yet**.   ✗ I have just finished it yesterday. → ✓ I **finished** it yesterday. / I have **just** finished it.   ✗ Have you already finished? → ✓ Have you finished **yet**?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She has just answered Mr Khaled\'s question about the March figures.'));
out.push(A('**2** Because it needs the new prices from Türkiye, which still haven\'t arrived — and Rana, who is dealing with Türkiye, has been on the phone since nine.'));
out.push(A('**3** The paper for the printer: Lina has already ordered it, but it hasn\'t arrived yet. (They have promised Saturday.)'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Ms Huda   **Subject:** Thursday – where I am with the work',
  'Dear Ms Huda,',
  'I have already done the exercises on page 44 and I have just finished the writing task for 13.4.',
  'I have not learned the irregular verbs yet, because I only printed the list this morning. I will learn them on Saturday.',
  'Best regards,',
  'Rami Khoury',
]));
out.push(S('Stage 7 · Write freely (sample, 103 words)'));
out.push(SAMPLE([
  '**To:** Mr Fouad   **Subject:** Wednesday – the workshop',
  'Dear Mr Fouad,',
  'Before I close, here is where everything is.',
  'I have already finished the three repairs from Monday, and I have just tested the last one — it is on the shelf with your name on it.',
  'I have not started the price list yet, because the printer has been broken since Monday. I have already ordered the part and they have promised Thursday, so you will have the list on Thursday afternoon.',
  'The customer from Mezzeh has rung twice. I have not called her back yet; I will do it first thing tomorrow.',
  'Best regards,',
  'Omar Darwish · TechCare',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"it is on the shelf with your name on it" — I can stop worrying about that one._   ✓ _I still need to know what the part costs._   ? _"First thing tomorrow" — before or after nine?_'));
out.push(S('Stage 7R · Share'));
out.push(A('The answer to _which one would you be happy to receive at six o\'clock on a Thursday?_ is always the message where every **not yet** has a **reason and a date**. Say that out loud; it is the whole writing lesson in one sentence.'));
out.push(S('Homework (sample – the manager\'s reply)'));
out.push(SAMPLE(['Dear Omar, Thank you — and thank you for testing it before you went home. About the price list: I don\'t need the whole list on Thursday, I need the six items for the Mezzeh customer, and I need them before eleven, because she is coming at twelve. If the part has not arrived by Thursday morning, write the six prices by hand and give me the paper. Please also ring her tomorrow before nine. Best regards, Fouad']));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  I\'ve known her since 2019'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The two columns are the lesson; keep them on the board for the whole 90 minutes.'));
out.push(A('**b** **for** two years · **since** September · **for** a long time · **since** I was twelve · **for** ten minutes · **since** last Thursday'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – an assistant in a bookshop.'));
out.push(A('**b** **1** For two years. (She is from Latakia and lives with her sister in Mezzeh.)   **2** A CV in English, one page, by Sunday — and Lama says she will bring it on Saturday.'));
out.push(S('Language box · Practise'));
out.push(A('**1** She **has worked** there **since** January.   **2** We **have known** each other **for** ten years.   **3** I **haven\'t seen** him **since** the wedding.   **4** How long **have** you **had** that phone?   **5** They **have lived** in Mezzeh **since** 2021.'));
out.push(NOTE('Item 4 is the one to drill: _How long have you **had**…?_ The students want _How long do you have…?_ because that is how the question works in Arabic. Ask four students the question round the class before you move on.'));
out.push(S('Stage 3 · Practise (sample – Card A, Dar Al-Kalima Bookshop)'));
out.push(SAMPLE([
  '**A:** Tell me about yourself.',
  '**B:** My name is Ranim Haddad. I\'m a student — third year, history.',
  '**A:** How long have you lived in Damascus?',
  '**B:** Since 2019. Five years.',
  '**A:** Have you ever worked in a shop?',
  '**B:** No, never, but I worked in my uncle\'s pharmacy for three summers, so I know a till.',
  '**A:** Can you read English well enough to find a book for somebody?',
  '**B:** Yes. I\'ve read in English since school.',
  '**A:** Bring me a CV in English, one page, by Sunday.',
  '**B:** I\'ll bring it on Saturday.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_"Since 2019" – **since** · "for three summers" – **for** · "since school" – **since**_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I\'ve lived in this flat for nine months. I\'ve studied English since I was eleven, so that is thirteen years, which is a terrible thing to work out in front of other people. I\'ve known my oldest friend since the first week of secondary school. And I\'ve had this pen for about two weeks, which is a record — I lose one a week._',
  '**b (about somebody in the family)** _My father has worked at the same company since 1998. — Has he had the same job all that time? — No, he has had four jobs there, but the same desk for the last nine years._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour has lived in Damascus for four years but she has worked at TechCare for only fourteen months, which surprised me — she behaves as if she built the place. She has studied English since she was ten. She has known her oldest friend since the first day of school, and they still speak every week. And she has had the same phone for five years, which she says is a record in her family.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I live here since two years. → ✓ I **have lived** here **for** two years.   ✗ since two years → ✓ **for** two years.   ✗ I am here since Monday. → ✓ I **have been** here since Monday.   ✗ How long do you have that phone? → ✓ How long **have you had** that phone?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A CV in English, one page, by Sunday.'));
out.push(A('**2** She says it straight and then turns it with _but_: she has never worked in a shop, **but** she worked for two months on a children\'s summer course where she was responsible for fourteen children — and she has been a customer of the shop since her first week in Damascus.'));
out.push(A('**3** Monday, Tuesday and Thursday afternoons.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** Al-Yasmin Language Centre   **Subject:** Evening conversation course – application',
  'Dear Mr Bassam,',
  'Thank you for your time on Tuesday. I am sending my form, as you asked.',
  'I am an accounts assistant, and I have worked at Medica Trading for three years. I have studied English since secondary school. I have never taken an exam in English, but I use it every day at work, with suppliers in Türkiye.',
  'I am free on Monday and Wednesday evenings after six.',
  'Best regards,',
  'Lina Haddad · 0991 205 734',
]));
out.push(S('Stage 7 · Write freely (sample, 121 words)'));
out.push(SAMPLE([
  '**To:** Al-Noor Clinic   **Subject:** Volunteer reception help – Saturday mornings',
  'Dear Dr Khalil,',
  'Thank you for speaking to me after my appointment on Thursday. I am writing about the notice on your door.',
  'I am a second-year pharmacy student, and I have lived in Damascus for three years. I have studied English since I was ten and I have used it since September in the English club at Al-Yasmin, where we meet every Saturday afternoon.',
  'I have never worked in a clinic, but I have worked behind a counter for two summers in my uncle\'s shop, and I have answered a telephone that rings forty times a morning.',
  'I am free on Saturday mornings from eight until one, and I can start this week.',
  'Thank you for considering this.',
  'Best regards,',
  'Maya Nasser · 0933 427 815',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"a telephone that rings forty times a morning" — that is the sentence that gets the interview._   ✓ _You haven\'t said how long you can keep doing it. One month? A year?_   ? _What would you do if two people arrived at the same minute?_'));
out.push(S('Stage 7R · Share'));
out.push(A('Read three with the names removed and insist on **a reason from the text**. The class will reach the rule by itself: the winning message is the one with the most **numbers** in it. That is the point of _for_ and _since_.'));
out.push(S('Homework (sample – Mrs Mona\'s reply)'));
out.push(SAMPLE(['Dear Lama, Thank you for the CV — it came on Saturday, as you said it would, which tells me something useful. I would like you to start on Monday the 19th, four until eight, for three weeks first, and then we will both decide. Come at half past three on the first day so I can show you the till and the poetry corner, which you already know better than I do. Please bring your student card. Best regards, Mona Haffar · Dar Al-Kalima Bookshop']));

// ===================== 13.6 =====================
out.push(pb());
out.push(h2('13.6  It\'s the best book I\'ve ever read'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Collect six or seven on the board and keep the best three for Stage 7.'));
out.push(A('**b** good → **the best** · bad → **the worst** · long → **the longest** · interesting → **the most interesting** · beautiful → **the most beautiful** · easy → **the easiest**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a book for the club shelf (one book and one sentence from each of them).'));
out.push(A('**b** **1** Because it is probably **the worst written** — but it is the most useful thing he has ever bought.   **2** Short books are the ones you go back to.'));
out.push(S('Language box · Practise'));
out.push(A('**1** It\'s **the best film I\'ve ever seen**.   **2** It\'s **the longest journey she\'s ever made**.   **3** It\'s **the worst food we\'ve ever eaten**.   **4** It\'s **the most beautiful city he\'s ever visited**.   **5** It\'s **the proudest day I\'ve ever had**.'));
out.push(S('Stage 3 · Practise (sample – Card A, a book for a long bus journey)'));
out.push(SAMPLE([
  '**A:** I need a book for a five-hour bus. What do you recommend?',
  '**B:** The one about the bridges. It\'s the most useful thing I\'ve ever bought.',
  '**A:** Really? Why?',
  '**B:** Because everything in it is a drawing of something you can go and stand under.',
  '**A:** How many times have you read it?',
  '**B:** Four.',
  '**A:** And is there one you would **not** recommend?',
  '**B:** Yes — the novel everybody gave me last year. It\'s the slowest book I\'ve ever started and I\'ve never finished it.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_recommended: the book about bridges (the most useful thing he has ever bought) · the café behind the mosque (the cheapest place she has ever eaten)_   —   _not recommended: the novel everybody gives as a present (the slowest book he has ever started)_'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_I\'m recommending a two-hundred-lira vegetable knife from the market at Bab Srija. It is the most useful thing I have ever bought for a kitchen. I have used it every day for three years. What is wrong with it is that the handle is ugly and it goes blunt every two months, so you have to sharpen it yourself._',
  '**A:** I\'ll try it. I throw away a knife a year, so three years for two hundred is worth sharpening.',
  '**b (the opposite)** _The worst thing I have ever bought is a phone case that cost more than the phone. It has broken twice. Don\'t buy anything for a phone that costs more than a meal._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rami recommended a book about bridges, which is the most useful thing he has ever bought and, he says, the worst written. He has read it four times. The thing that is wrong with it is that there are no pictures, which for a book about bridges is a strange decision. I am not going to read it, but I liked the way he talked about it — he has clearly read it four times.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the most best → ✓ **the best**.   ✗ It\'s the best book that I ever read. → ✓ …that **I\'ve ever read**.   ✗ the more beautiful place I have seen → ✓ the **most** beautiful place.   ✗ It is most useful thing. → ✓ It is **the** most useful thing.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because he has stood under the bridges themselves — he doesn\'t need a picture of a thing he has seen with his own eyes.'));
out.push(A('**2** Because she did not want it to be over. (It is the first novel she has ever finished in English, and it took her five months.)'));
out.push(A('**3** Each card ends with _Take it if…_ — a line that says **who the book is for**. It turns a private opinion into a recommendation somebody can act on.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Hiba.**',
  'A cookery book, second-hand, with somebody else\'s notes in the margins.',
  'It is not the most beautiful book I have ever owned; it is probably the dirtiest.',
  'But it is the most used thing I have ever bought, and I have cooked eleven things out of it.',
  'Take it if you live alone and have stopped bothering.',
]));
out.push(S('Stage 7 · Write freely (sample, 94 words)'));
out.push(SAMPLE([
  '**A ten-minute walk, not a thing — Lina**',
  'What I recommend is the walk from the Hejaz station up to the end of Al-Maysat, at seven in the morning on a Friday.',
  'It is the cheapest thing I have ever recommended to anybody, and it is probably the most boring on paper: a wide street, some shops that are shut, three bakeries that are not.',
  'The fault is honest — it is ugly for the first four minutes.',
  'I have done it about two hundred times, in two years, and it is still the only part of my week that nobody else is in.',
  'Take it if you have stopped seeing the city you live in.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"the only part of my week that nobody else is in" — I would do it for that line alone._   ✓ _Say how long it takes, in minutes._   ? _Does it work on a Saturday? I work on Fridays._'));
out.push(S('Stage 7R · Share'));
out.push(A('The cards go face up and each student takes **one**. The second half of the question — _which sentence made you take it?_ — is the assessment: the sentence they name is nearly always the one with a **number** or an **admitted fault** in it, which proves the Writer\'s box without you saying anything.'));
out.push(S('Homework (sample – the worst thing you have ever bought)'));
out.push(SAMPLE(['**Omar.** A camera bag, 2021, new, expensive. It is the worst thing I have ever bought. It holds one camera and nothing else, it has eleven pockets and I have never used nine of them, and it is the heaviest empty object I own. I used it four times. It has been under my bed for two years and I have never been able to throw it away, because of what it cost. Don\'t take it if you already have a bag that works.']));

// ===================== 13.7 =====================
out.push(pb());
out.push(h2('13.7  Review & Mediate: What does the CV say?'));
out.push(S('Stage 1 · Get ready – Unit 13 quiz'));
out.push(A('**1** I have **never** been to Aleppo. (or: **Have you ever** been to Aleppo?)   **2** When **did you go** there?   **3** I have **been** to Beirut twice.   **4** Have you finished **yet**? – Not **yet**.   **5** I **have lived** here **for** two years.   **6** It is the **best** film I **have ever seen**.'));
out.push(NOTE('These six are the six cycles, in order. If a team gets all six, the unit has worked. If the class fails number 2, go back to 13.2 for ten minutes before you do anything else in this lesson — it is the one that carries into Units 19 and 23.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** A **photograph**. (Aunt Suad says every paper she has ever signed had one. Lama explains that you do not put a photograph on an English CV.)'));
out.push(NOTE('Students often also answer "the names of the references", which is a good answer and worth accepting with a correction: the names are **deliberately** not there — _Available on request_ means ask me and I will give them to you.'));
out.push(S('Stage 3 · Practise (sample – Document A explained without showing it)'));
out.push(SAMPLE([
  '_It\'s a card in a shop window, so it\'s short — five lines._',
  '_The first line says what the job is: a part-time assistant._',
  '_Then the hours: three afternoons a week, four until eight._',
  '_Then what they want from you — and this is the important part — you must be able to read English, but they say no experience is necessary._',
  '_Then how to apply: you go in person, you don\'t write, and you take a CV, one page, in English._',
  '_And the last line is a condition: ask for Mrs Mona, and don\'t telephone._',
  '**B:** So if I ring to ask what the pay is?',
  '**A:** Then you have already failed the first instruction.',
  '**C:** It doesn\'t say what it pays at all. I would go in, ask for Mrs Mona, and ask her.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_It says: 3 afternoons, 4–8 · you must read English · apply in person with a one-page English CV._   _It does not say:_ **what it pays** _— and it does not say which three afternoons._'));
out.push(S('Stage 4 · Your turn (sample – a real document)'));
out.push(SAMPLE([
  '_It\'s the message the electricity app sends. It has four parts._',
  '_At the top is the month and the meter number — that\'s the long number, not the amount._',
  '_Then the reading, and under it the amount in Syrian pounds._',
  '_Then a date, and that date is the part people get wrong: it isn\'t when the bill was made, it\'s the last day to pay it._',
  '_At the bottom there\'s a line in small letters saying what happens if you pay late._',
  '_What is missing is anything that tells you how to argue with it. There is no telephone number and no address — if the number is wrong you have to go to the office yourself._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Hiba explained the certificate she got in December. It has her full name, the level — A2 — and the number of hours, which is a hundred and twenty. It says her attendance was ninety-two per cent and that she passed with merit, which she had to explain to me: it means better than a pass but not the top. It is signed by the Director of Studies and it has the centre\'s stamp, and she says the stamp is the part that matters, because without it anybody could print one. The thing it does not say is what A2 actually means, so I decided I would write "A2 (Cambridge level)" next to it if I ever send mine anywhere.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It means that "references". → ✓ _"References" **means** people who…_   ✗ In English they write first the newest. → ✓ In English **you write the newest one first**.   ✗ It is not have a photograph. → ✓ There **is no** photograph. / It **doesn\'t have** a photograph.   ✗ Is write that she responsible. → ✓ It **says that she was responsible** for them.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 4'));
out.push(A('**1 B**   **2 C**   **3 A**   **4 B**   **5 B**   **6 B**'));
out.push(NOTE('**3** is the one that separates the class. _A_ is right because she has been going into the shop since her first week in Damascus, and the CV says she has lived in Damascus for two years. The students who choose _B_ have found the word "once" somewhere else in the text and stopped reading. Show them that Part 4 questions are almost never answered by one word.'));
out.push(S('Stage 6 · Write with help (completed sample)'));
out.push(SAMPLE([
  'Hi Rami!',
  'I\'ve got news. I\'ve applied for **a part-time job** at **the bookshop in Shaalan**. It\'s **three afternoons** a week, from **four** to **eight**.',
  'I went in on **Thursday** and I spoke to **the owner, Mrs Mona**. She asked me how long **I have lived in Damascus** and whether **I have ever worked in a shop**. I said **no, and then I told her about the summer course with the fourteen children**.',
  'She asked for **a CV in English, one page,** by **Sunday**, so I **wrote it on Friday and took it in on Saturday morning**.',
  'I haven\'t **had an answer** yet. **I\'ll tell you the minute I do.**',
]));
out.push(NOTE('The story on page 28 asks the question directly — _how long have you lived in Damascus?_ — so _how long **I have lived** in Damascus_ is what most of the class will write, and it is right. A student who writes _how long I **had** lived_ has produced a past perfect a year early; accept it without comment and do not teach it.'));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (48 words)**',
  'Hi Sam! I\'ve just done something for the first time — I\'ve applied for a job. It\'s in a bookshop in Shaalan, and I went in on Saturday with my CV. I learned one thing: never answer a question with only "no". Say what you have done instead!',
]));
out.push(SAMPLE([
  '**Weaker sample (26 words) – why it only just passes**',
  'Hi Sam. I have applied a job in bookshop. I go there in Saturday. I learn you must not say no. Bye.',
  '_It answers all three points and it is long enough, so it passes — but: **applied a job** should be **applied for a job**; **in bookshop** needs **a**; **I go there in Saturday** should be **I went there on Saturday** (the moment there is a day, it is past simple — the rule of the whole unit); and there is no friendly closing. Use this one to show the class that "three points answered" and "well written" are two different marks._',
]));
out.push(S('Unit 13 check · A  Grammar and vocabulary'));
out.push(A('**1 b** have   **2 c** taken   **3 b** gone   **4 b** just   **5 a** yet   **6 b** for   **7 b** since   **8 b** best'));
out.push(S('Unit 13 check · B  Listening (Track 13.14)'));
out.push(A('**1 D** (Nour – fourteen months at TechCare)   **2 B** (Hiba – three times to Beirut, always by bus)   **3 A** (Lama – her first job, the bookshop)   **4 E** (Omar – the Citadel, more times than he can count)   **5 C** (Fadi – drove to Homs for the first time)'));
out.push(A('The two extra letters are **F** (has started a university course this month) and **G** (has moved into a new flat).'));
out.push(NOTE('The full audio script for Track 13.14 is printed in the Student\'s Book **after** the questions. If there is no audio in your class, read it aloud **twice** at normal speed, pausing between the five people. Do not read it slowly: the point of Part 5 is to catch one fact in a stream of ordinary speech.'));
out.push(S('Unit 13 check · C  Writing (sample, 71 words)'));
out.push(SAMPLE(['Hi Lama! Good luck on Saturday. I\'ve done the same thing — I had my first interview two years ago, at a pharmacy in Mezzeh, and I was so nervous that I forgot my own telephone number when she asked for it. The thing that went wrong is that I only answered her questions and never asked her one. So ask her something. Anything. It makes you a person instead of a page.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The two lines that usually need five minutes at the start of Unit 14 are **_change to the past simple as soon as I say when_** (13.2) and **_use just, already and yet in the right place_** (13.4). The first comes back properly in Unit 23; the second in Unit 18.'));
out.push(sp());
out.push(box('Next in this answer key', [
  'Book 2 opens with everything that has **already happened**. Unit 14 turns the class to what **will** happen: _will_, _might_, and _probably_.',
  'Watch for the carry-over: the three predictions students write for homework at the end of Unit 13 are collected again in **Unit 24**, so make sure they actually keep them. One teacher\'s envelope with thirty folded papers in it is the simplest way.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 13 · Answer Key');
