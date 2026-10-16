// Proactive English A2 · Syria Edition · Book 1 · Unit 12 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 12  Celebrations & Customs — Answer Key'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  'This unit is about customs, so many answers depend on the students\' own families and regions. **There is no single right custom.** Accept any answer that is accurate for the student\'s own experience and uses the target language correctly — and use the differences in the room as the lesson.',
], C.lblue, C.navy));

// 12.1
out.push(pb());
out.push(h2('12.1  What do people do at Eid?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Typical board list: _Eid al-Fitr · Eid al-Adha · Ramadan · Christmas and Easter · New Year · Mother\'s Day (21 March) · Teachers\' Day · weddings and engagements · a new baby · graduations · the olive harvest._ Accept every celebration the class names, religious or not.'));
out.push(A('**b** Open. Most classes choose _visit · cook · wear · give · clean_ — the five verbs that run through the whole unit.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a visitor from another country (Mr Lang).'));
out.push(A('**b** 1 They clean the house and buy new clothes, especially for the children; Lina\'s mother cooks for two days (for about forty people).   2 The young people visit the older people first – grandparents, uncles and aunts.'));
out.push(S('Language box · Practise'));
out.push(A('1 **Before** the guests arrive, we clean the house. (or: We clean the house **before** the guests arrive.)'));
out.push(A('2 **After** we eat, we drink coffee.   3 **When** the children see their grandfather, they kiss his hand.   4 My mother cooks for two days **before** the Eid starts.'));
out.push(S('Stage 3 · Practise (sample – Celebration card A, Mother\'s Day)'));
out.push(SAMPLE([
  '**A:** Can I ask you something? What is Mother\'s Day here?',
  '**B:** It\'s on the twenty-first of March, the first day of spring. It means something like a day to thank your mother.',
  '**A:** And what do people actually do?',
  '**B:** Before the day, children buy flowers or a small present, and the schools prepare songs.',
  '**A:** And on the day?',
  '**B:** When the family comes together, we eat lunch at my mother\'s house. After that, everybody phones the mothers who live far away.',
  '**A:** Who visits who?',
  '**B:** The children go to the mother – never the other way.',
  '**A:** How long does it last?',
  '**B:** One day only, but the radio plays old songs about mothers for a week!',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Before the day, children buy flowers. · When the family comes together, they eat lunch at the mother\'s house. · After lunch, everybody phones the mothers who live far away._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE(['In our village the olive harvest is like a celebration. Before it starts, the whole family comes from the city, even the cousins. When they arrive, everybody works – the men on the trees, the women and children with the boxes. After the day in the field, we eat together outside, and somebody always plays music. It isn\'t a holiday, but it feels like one.']));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour told me about the olive harvest in her village. Before it starts, the whole family comes from the city, even the cousins who live far away. When they arrive, everybody works, and the children carry the small boxes. After the day in the field, they eat together outside and somebody plays music. She says it isn\'t a holiday, but it feels like one.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Everybody clean the house → ✓ Everybody **cleans**.   ✗ When the guests will arrive → ✓ When the guests **arrive**.   ✗ People visits → ✓ People **visit**.   ✗ We are eating sweets every Eid → ✓ We **eat** sweets every Eid.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Three days.   2 Because families are buying new clothes and sweets, so the markets stay open very late in the last days of Ramadan.   3 You don\'t have to bring a present, but sweets are welcome; say yes if somebody invites you; and don\'t eat too much in the first house.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**MOTHER\'S DAY IN SYRIA – what a visitor should know**',
  'Mother\'s Day is on 21 March, the first day of spring. It lasts one day.',
  '**Before.** In the week before, children buy flowers or a small present, and schools prepare songs and cards.',
  '**The day.** When the family comes together, everybody eats lunch at the mother\'s or the grandmother\'s house. Then people phone the mothers who live in another city.',
  '**What people eat:** a big family lunch and sweets in the afternoon.',
  '**For a visitor:** you don\'t have to bring anything, but flowers are always right.',
]));
out.push(S('Stage 7 · Write freely (sample, 104 words)'));
out.push(SAMPLE([
  '**A SYRIAN WEDDING – what a visitor should know**',
  'A wedding here is not one evening: it is two or three events. It usually starts with the engagement party some weeks before, in the family\'s home.',
  '**Before.** The two families visit each other, and the bride\'s family prepares the house. Everybody buys new clothes – guests too.',
  '**The day.** When the guests arrive at the hall, they greet the families at the door first, and then they sit. There is music, and later a big dinner. The couple arrive after the guests, not before.',
  '**Special word:** "zaffeh" – the music and singing that bring the couple into the hall. It is the loudest and the happiest part of the evening.',
  '**For a visitor:** you don\'t have to dance, but you should stand up during the zaffeh. Nobody stays sitting then.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ Now I understand why the couple arrive late!   ✓ You wrote "zaffeh" and explained it – good – but you didn\'t explain "engagement party".   ? What should I wear?'));
out.push(S('Homework (sample, 36 words)'));
out.push(SAMPLE(['In our house we always clean the whole kitchen the night before a feast, even at two in the morning. My grandmother says a feast cannot start in a dirty kitchen. Nobody sleeps, but nobody complains either.']));

// 12.2
out.push(pb());
out.push(h2('12.2  You are invited'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** The five things: **who** is inviting · **what** the event is · **when** (date and time) · **where** (the place and the address) · **how and by when to answer** (RSVP). Accept "how much / what to bring" as a sixth.'));
out.push(A('**b** Friendly: _Come at eight! · See you there 😊 · Bring the kids._   Formal: _We are pleased to invite you · We look forward to seeing you._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – a wedding.'));
out.push(A('**b** 1 Friday 24 October at six in the evening, at the Rose Hall in Homs.   2 Because the bus from Damascus takes two hours, so they have to leave at three at the latest.'));
out.push(S('Language box · Practise'));
out.push(A('1 **f**   2 **F**   3 **f**   4 **F**   5 **f**'));
out.push(S('Stage 3 · Practise (sample – Invitation card A)'));
out.push(SAMPLE([
  '**A:** Look what came today! An invitation to the centre\'s certificate evening.',
  '**B:** Read it!',
  '**A:** "The Al-Yasmin Centre is pleased to invite you to the end-of-year certificate evening, on Thursday the 19th of December at half past five, in the big hall on the second floor."',
  '**B:** And do we have to answer?',
  '**A:** Yes – RSVP to Mr Bassam by the 12th of December.',
  '**B:** How are we going to get there?',
  '**A:** It\'s at the centre, so the same as every lesson.',
  '**B:** Then say yes from me – and I\'m bringing my mother.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Who: the Al-Yasmin Centre · What: the end-of-year certificate evening · When: Thursday 19 December, 5.30 pm · Where: the big hall, second floor · Answer: to Mr Bassam by 12 December._'));
out.push(S('Stage 4 · Your turn (sample for b – saying no)'));
out.push(SAMPLE([
  '**B:** Thank you very much for the invitation – that\'s really kind of you.',
  '**A:** So you\'re coming?',
  '**B:** I\'m afraid I can\'t. I work until seven on Saturdays and I can\'t change it this month.',
  '**A:** That\'s a pity.',
  '**B:** I\'m sorry. I hope you all have a wonderful evening, and I\'m going to send a card with my sister.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Samir invited me to his sister\'s graduation party on Saturday the 7th at five, at their house in Jaramana, and he asked me to answer by Wednesday. I said I\'m afraid I can\'t come, because I work until seven on Saturdays, but I\'m going to send a card and I hope they have a wonderful evening.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I will be pleasure to attend → ✓ I **will be pleased to attend**.   ✗ Thank you for your invite → ✓ Thank you for your **invitation**.   ✗ I can\'t come because busy → ✓ because **I\'m busy** / because **I work until seven**.   ✗ Mixing registers: _Dear Mr and Mrs Dabbagh, count me in!_'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Any two of: _are pleased to invite you · We look forward to seeing you · RSVP_ (also the full names and titles, and no contractions).'));
out.push(A('2 How many people are coming (six) and what time they will arrive.'));
out.push(A('3 So that she knows how much cake to make.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Formal reply**',
  'Dear Mr and Mrs Haddad,',
  'Thank you very much for your kind invitation to Lara\'s graduation party.',
  'We will be pleased to attend. Three of us are coming, and we will arrive at about five o\'clock.',
  'We wish Lara every success in her new work.',
  'Best regards, Rana Khoury',
  '**Friendly reply**',
  'Of course we\'re coming! 🎓 Three of us, and I\'m bringing the sweets. See you at five!',
]));
out.push(S('Stage 7 · Write freely (sample, 96 words)'));
out.push(SAMPLE([
  '**(a) The invitation (friendly)**',
  'Hi everyone! 🎉 We\'re opening our little shop on Saturday 12 April at eleven in the morning, in Al-Zahra Street next to the bakery. Come and drink coffee with us and see the place. Bring the children – there\'s cake. Just tell me by Thursday so I know how many cups to buy. Hiba',
  '**(b) The reply I would like**',
  'Congratulations, Hiba! Of course we\'re coming – four of us, and we\'ll be there at eleven. We\'re so happy for you. Tell us if you need help with the tables in the morning. See you Saturday!',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ Everything is clear – I know where to go and when to answer.   ✓ You didn\'t say how long it lasts.   ? Can I bring my sister?'));
out.push(S('Homework (sample "no" reply, 44 words)'));
out.push(SAMPLE(['Hiba, thank you so much for inviting us. I\'m really sorry – I\'m in Aleppo that weekend for my brother\'s exam results and I can\'t change the tickets. I hope the opening is full of people. Can I come on the Monday and see the shop quietly?']));

// 12.3
out.push(pb());
out.push(h2('12.3  Congratulations!'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** birthday → _Happy birthday! / Many happy returns!_ · wedding → _Congratulations! / Best wishes!_ · new baby → _Congratulations!_ · new job → _Congratulations! / Well done!_ · passing an exam → _Well done! / Congratulations!_ · new house → _Congratulations!_ · a feast → _Happy Eid! / Happy holidays!_'));
out.push(A('**b** Open. Many students mention _Mabrouk_ (for anything new or any good news) and _hamdillah 3a salamtak_ (safe return / after an illness). English has no single phrase for either: the closest are _Congratulations_ and _Welcome back / I\'m glad you\'re home safely_. This gap is worth five minutes — it is exactly the kind of thing a mediator has to explain.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – two (Nour\'s contract and Hiba\'s cousin\'s wedding).'));
out.push(A('**b** 1 She finished her training at TechCare and starts on Sunday as a junior technician with a real contract.   2 Everybody writes one line for Nour and one for Hiba\'s cousin.'));
out.push(S('Language box · Practise'));
out.push(A('1 Congratulations! / Well done!   2 Congratulations!   3 Happy Eid! (Eid Mubarak)   4 **Not** congratulations – _Get well soon. I\'m sorry to hear that._   5 Congratulations! / Best wishes! / I hope you both have a wonderful day.'));
out.push(S('Stage 3 · Practise (sample – Situation card A, line 1)'));
out.push(SAMPLE([
  '**A:** My colleague passed a very difficult exam last week.',
  '**B:** Congratulations! Tell him well done from me – I know he studied for months.',
  '**A:** I will. He was so nervous.',
  '**B:** Then he deserves it even more.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Phrase: "Congratulations – well done." Extra sentence: "I know he studied for months." Yes, it fits: the exam is something he did, so Congratulations is right._'));
out.push(S('Stage 4 · Your turn (sample for b)'));
out.push(SAMPLE([
  'Nour: a work contract → Congratulations, Nour! You really worked for that.',
  'Samir: his brother is getting married in the spring → Best wishes to them both.',
  'Hiba: she moved into a new flat → Congratulations on the new flat! I hope you\'re very happy there.',
  'Fadi: his daughter started school → Well done to her! Is she happy?',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour finished her training and she has a contract now – congratulations, Nour. Samir\'s brother is getting married in the spring, so best wishes to him. Hiba moved into a new flat last month, and Fadi\'s daughter started school this year – well done to her.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Congratulation! → ✓ Congratulation**s**! (always plural)   ✗ Congratulations for your new job → ✓ Congratulations **on** your new job.   ✗ I hope you will have a nice day → ✓ I hope you **have** a nice day.   ✗ Congratulations for the baby of your sister → ✓ Congratulations **on** your sister\'s baby.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Card 3 (Jana) – short lines, a joke ("that\'s very old"), an emoji, simple words, "Auntie Lina".'));
out.push(A('2 Card 1, for Nour. It shows that the writer knows **her**, not just the news – and it says the success was earned.'));
out.push(A('3 Cards 1 and 2 (from everybody in 4B / from Class 4B).'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Dear Ms Huda,',
  'Congratulations on twenty years of teaching! Half of this class came here because somebody in their family was once in your classroom.',
  'I hope the centre gives you a very long holiday.',
  'With our thanks, Class 4B',
]));
out.push(S('Stage 7 · Write freely (sample, 97 words for the three cards)'));
out.push(SAMPLE([
  '**1 · Something somebody did**',
  'Dear Fadi, congratulations on passing your driving test! Third time, and you told the whole class the examiner was more nervous than you. Well done – and please drive slowly for the first month. From Nour',
  '**2 · A family occasion**',
  'Dear Rasha and Samer, congratulations to you both on your wedding. We wish you every happiness and a home that is always full of people. With our warmest wishes, Class 4B',
  '**3 · A feast**',
  'Dear Mr Khaled, wishing you and your family a very happy Eid. I hope you have a few quiet days with the people you love, and that the office is silent until Monday. Best regards, Lina',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ Card 1 is really for Fadi – nobody else could get it.   ✓ Card 2 could be for anybody; add one line about the couple.   ? Is "congratulations" right for a feast, or is "wishing you" better?'));
out.push(S('Homework'));
out.push(A('Students write a real card to a real classmate and give it in the next lesson. Collect nothing; read nothing aloud unless the writer offers. Check only that the phrase matches the occasion.'));
out.push(NOTE('**Teacher note.** In a class of adults there is almost always somebody with no good news this year, or with news they don\'t want to share. Stage 4 says "one piece of good news" — let students invent one, or talk about somebody else in their family, with no explanation asked for.'));

// 12.4
out.push(pb());
out.push(h2('12.4  What should I bring?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the answers vary a lot by region and family. Typical Syrian answers: wedding → money in an envelope, or gold for close family; new baby → money, clothes, or something for the baby\'s room; new house → sweets, a plant, something for the kitchen; birthday → a present or money for children; a first visit → sweets from a good shop, or fruit.'));
out.push(A('**b** Open. Expect disagreement about **money** (normal and useful at weddings here; impossible in some other countries) and about **plants** (lovely for some, "more work for the mother" for others). The disagreement is the point.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – something for the house: a printed photo album.'));
out.push(A('**b** 1 Because they are eighteen people and eighteen small envelopes would be strange.   2 A photo album of Omar\'s pictures from the engagement party, with a card signed by everybody.'));
out.push(S('Language box · Practise'));
out.push(A('1 What **should** I bring?   2 **What** about a plant?   3 Why **don\'t** we give one present from everybody?   4 Do you **think** we should bring the children?   5 It\'s something **that / which** he can use every day. (Accept the sentence with no word: _something he can use_.)'));
out.push(S('Stage 3 · Practise (sample – Advice card A, line 1)'));
out.push(SAMPLE([
  '**A:** I need some advice. My manager invited me to his house for the first time. What should I bring?',
  '**B:** What about flowers for his wife?',
  '**A:** I know, but I\'ve never met her and I don\'t want it to look strange.',
  '**B:** Then why don\'t you take sweets from a good shop? Everybody shares them and nobody feels uncomfortable.',
  '**A:** That\'s a good idea. Do you think I should take something for the children too?',
  '**B:** Something very small, yes. Not a big toy.',
  '**A:** Perfect. Sweets and something small for the children.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Ideas: flowers for the wife / sweets from a good shop. The first was refused because he has never met her and it could look strange._'));
out.push(S('Stage 4 · Your turn (sample for b – three rules for a visitor)'));
out.push(SAMPLE([
  '1 Bring sweets from a good shop. They are always right, everybody shares them, and nobody has to find a place for them afterwards.',
  '2 Don\'t bring anything expensive. The family will feel they have to give something back, and that spoils the evening.',
  '3 Bring something small for the children if there are children. That is the thing the family remembers.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['We think a visitor should bring sweets from a good shop – that\'s always safe and everybody shares them. They shouldn\'t bring something very expensive, because then the family feels they have to give something back. And they should bring something small for the children if there are children, because that is the thing people remember.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ What about to bring sweets? → ✓ What about **bringing** sweets? / What about **sweets**?   ✗ Why don\'t we to give…? → ✓ Why don\'t we **give**…?   ✗ I suggest you to bring → ✓ I suggest **bringing** / You **should** bring.   ✗ Do you think should I bring? → ✓ Do you think **I should** bring?'));
out.push(S('Stage 5 · Read'));
out.push(A('1 It\'s personal; nobody else is going to give them that; and it isn\'t expensive.'));
out.push(A('2 The time – whether Omar can finish it before the 24th.'));
out.push(A('3 He says that if somebody can\'t pay this month it\'s absolutely fine – they just sign the card.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Hi everyone! About Ms Huda\'s last lesson before the holiday. What about one present from all of us instead of twelve small ones?',
  'I think it\'s a good idea because she would have to carry twelve bags home, and because one good thing is better than twelve small ones.',
  'My idea: a framed photo of the whole class, with our names on the back. It costs about 1,200 each. If this month is difficult for somebody, that\'s absolutely fine – just sign the back.',
  'Please answer by Sunday evening so I can order the frame.',
  'Lina',
]));
out.push(S('Stage 7 · Write freely (sample, 103 words)'));
out.push(SAMPLE([
  'Hi everyone 👋 — about Abu Samir, our neighbour on the ground floor.',
  'He has carried everybody\'s bags up the stairs for fifteen years and he never takes anything for it. He is leaving next month to live with his daughter in Tartus.',
  'What about one present from the whole building? My idea is a good coat for the winter – he wears the same one every year – and a card with a line from every family.',
  'It\'s about 3,000 from each flat. If that is too much this month, please write your line in the card anyway: the card is the real present.',
  'Tell me yes or no by Friday so I can buy it in time.',
  'Rana (flat 4)',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ I\'m in – and the card idea is better than the coat.   ✓ Can you say by when we should pay, not only answer?   ? Can I give something instead of money – I have a good scarf, new?'));
out.push(S('Homework (sample follow-up, 37 words)'));
out.push(SAMPLE(['Thank you to the nine families who answered! We have 27,000, which is enough for the coat. If flats 2, 7 and 9 still want to join, there is time until Wednesday – and the card is still open for everybody.']));

// 12.5
out.push(pb());
out.push(h2('12.5  While we were waiting, the lights went out'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Typical one-liners: _It rained on my sister\'s wedding day. · The electricity went off. · The cake arrived with the wrong name on it. · Forty people came and we had chairs for twenty._'));
out.push(A('**b** _We were eating_ started first (the long action); _my uncle arrived_ happened during it.   In the second sentence the music started first, and then everybody stood up (two short actions, one after the other).'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – the electricity went off, in the whole street.'));
out.push(A('**b** 1 They were waiting for the dinner; Rasha\'s uncle was making a speech; later everybody was singing.   2 He ran to his car and brought his camera light.'));
out.push(S('Language box · Practise'));
out.push(A('1 While we **were eating**, my uncle **arrived**.   2 I **was taking** photos when the music **started**.   3 What **were** you **doing** when the lights **went** off?   4 She **wasn\'t listening** – she **was talking** to her sister.'));
out.push(S('Stage 3 · Practise (sample – Story card A, the birthday)'));
out.push(SAMPLE([
  '**A:** It was my mother\'s birthday and we wanted everything to be perfect. At six we were decorating the room, and while we were putting up the lights, the cake fell on the floor.',
  '**B:** Oh dear! What did you do?',
  '**A:** Nothing, at first. We just looked at it. Then at seven the guests were arriving and we were still cleaning the kitchen.',
  '**B:** Did your mother see it?',
  '**A:** She saw everything. She always sees everything.',
  '**B:** And the cake?',
  '**A:** My brother ran to the shop and bought sweets. By eight everybody was laughing about it, and my mother said it was the best birthday for years.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_While we were putting up the lights, the cake fell on the floor. · The guests were arriving when we were still cleaning the kitchen._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE(['It was my sister\'s graduation. The whole family was waiting outside the hall and my mother was taking photos of everybody. While we were waiting, it started to rain – really hard – and two hundred people ran inside at the same time. My brother was getting his certificate when my phone died, so we have no photos of that moment. But a man next to us was filming, and the next day he sent us everything. We still have his number.']));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fadi was at his sister\'s graduation. While the family was waiting outside the hall, it started to rain and everybody ran inside. His brother was getting his certificate when Fadi\'s phone died, so they have no photos of the moment. But a man they didn\'t know was filming, and the next day he sent them everything.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ While we ate, the lights went off → ✓ While we **were eating**.   ✗ When I was arriving, the music was starting → ✓ When I **arrived**, the music **started**.   ✗ He was make a speech → ✓ He **was making**.   ✗ We was waiting → ✓ We **were** waiting.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 They arrived at six; the hall was full of flowers; Rasha looked beautiful.'));
out.push(A('2 He was making a speech – and he stopped in the middle of a sentence.'));
out.push(A('3 With a feeling, not a fact: "It was the best wedding I have been to", and an invitation to come next time.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The graduation – and the rain**',
  'Dear Lama,',
  'You have to hear about Saturday.',
  'Everything started well. We arrived at ten, and the whole family was outside the hall taking photos.',
  'Then, while we were waiting to go in, it started to rain. My mother was standing in her new shoes when it happened.',
  'Two hundred people ran to the door at the same time. While we were pushing inside, my phone died.',
  'When my brother got his certificate, I had no camera and I just watched him instead. Maybe that was better.',
  'It was a wet day and a very happy one.',
  'Love, Hiba',
]));
out.push(S('Stage 7 · Write freely (sample, 141 words)'));
out.push(SAMPLE([
  '**The night the bus didn\'t come**',
  'Dear Rana,',
  'I\'m still laughing about this, so you have to hear it.',
  'Last Thursday we were going to my cousin\'s engagement party in Homs. Everything was fine at the beginning: six of us, good clothes, presents, and we were at the bus station an hour early.',
  'Then, while we were drinking tea in the station café, somebody said that our bus was cancelled. The next one was at nine – three hours later, and the party started at seven.',
  'Everybody was looking at me, because I booked the tickets. I was phoning every bus company in Damascus when an old man at the next table said, "I\'m driving to Homs now. I have four seats."',
  'We looked at each other for about two seconds. Then four of us went with him and two stayed for the nine o\'clock bus.',
  'We arrived at half past seven, before the food. The old man refused to take any money and wished my cousin a happy life.',
  'Now when anything goes wrong in our family, somebody says: "Don\'t worry, a man with a car will come."',
  'Love, Lina',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ I could see it – especially the two seconds when you looked at each other.   ✓ Add what the other people in the café were doing.   ? What did your cousin say when you arrived?'));
out.push(S('Homework (sample paragraph, 38 words)'));
out.push(SAMPLE(['While we were standing at the station door, the driver was shouting the names of cities and the café man was washing the same glass again and again. Nobody was helping us. Then the old man stood up.']));

// 12.6
out.push(pb());
out.push(h2('12.6  It\'s polite to take your shoes off'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Typical five: arrive a little late, not exactly on time · bring sweets, not something expensive · look at the door for shoes · expect a lot of food and refuse gently · stay for coffee after the meal.'));
out.push(A('**b** Open, and students will disagree — that is useful. Common Syrian answers: _arrive exactly on time_ = usually **false** (fifteen minutes later is normal) · _refuse twice_ = often **true**, the host insists · _a present for the children_ = **true** and much appreciated · _stay two hours_ = **true** or longer; leaving straight after the food is the mistake visitors make.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – to Omar\'s family home, for lunch.'));
out.push(A('**b** 1 At about one fifteen, although they said one o\'clock (fifteen minutes late is perfect; half an hour is also fine).   2 It\'s normal to say "no thank you, it was delicious" two or three times – and normal for the hosts to continue. Put your hand on your heart and smile.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('1 It\'s polite to take your shoes off.   2 It\'s normal to arrive fifteen minutes late.   3 It isn\'t usual to leave after the food.   4 You don\'t have to bring a present, but it\'s nice to bring sweets.'));
out.push(S('Stage 3 · Practise (sample – Situation card A, line 1)'));
out.push(SAMPLE([
  '**A:** They invited me for lunch at one. What should I know?',
  '**B:** It\'s normal to arrive about fifteen minutes late. If you come at one exactly, the family is still cooking.',
  '**A:** Really? And a present?',
  '**B:** You don\'t have to bring anything, but it\'s nice to bring sweets. It isn\'t a good idea to bring something expensive.',
  '**A:** And at the door?',
  '**B:** Look at the floor. If you see shoes there, it\'s polite to take yours off.',
  '**A:** And when can I go home?',
  '**B:** Not immediately after the food! It isn\'t polite to leave before the coffee.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Arrive fifteen minutes late · take your shoes off if you see shoes at the door · stay for coffee after the meal. The one that surprises visitors most is usually arriving late on purpose._'));
out.push(S('Stage 4 · Your turn (sample for b – two differences)'));
out.push(SAMPLE([
  '**Difference 1 – time.** Here it\'s normal to arrive fifteen or twenty minutes after the time. In Germany, Mr Lang says, you arrive at the exact minute, and being late is impolite. Neither is wrong: here "one o\'clock" means "we start at one"; there it means "be here at one".',
  '**Difference 2 – food.** Here the host puts food on your plate and you refuse two or three times before they stop. In some countries you serve yourself and "no thank you" means no the first time. A visitor from there thinks we don\'t listen; we think they aren\'t eating enough.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['I explained a first visit to a Syrian home. I said it\'s normal to arrive about fifteen minutes late, and it\'s polite to take your shoes off if you see shoes at the door. You don\'t have to bring a present, but it\'s nice to bring sweets. Hiba told me that in some countries people arrive exactly on time and the visit is shorter, so a visitor from there might leave straight after the food – and here that looks cold.']));
out.push(NOTE('**Mediation – what to assess here.** Did the student (1) describe the custom **accurately**, (2) give the **reason** behind it, (3) use **It\'s + adjective + to** and **you don\'t have to… but…** instead of "you must" everywhere, and (4) present the other country\'s custom as **different, not wrong**? Point 4 is the real mediation skill in this cycle.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It\'s polite taking your shoes off → ✓ It\'s polite **to take**.   ✗ You mustn\'t bring a present (= it\'s forbidden!) → ✓ You **don\'t have to** bring a present.   ✗ Is polite to… → ✓ **It\'s** polite to…   ✗ It\'s normal arrive late → ✓ It\'s normal **to arrive** late.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Because the family then feels they have to give something back.'));
out.push(A('2 Say "no thank you, it was delicious" two or three times, put your hand on your heart and smile.'));
out.push(A('3 Because a nervous visitor is afraid of making a mistake; the last line tells them that the welcome matters more than the rules.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**VISITING A SYRIAN OFFICE – a short guide for a foreign colleague**',
  '**The time.** For a meeting, arrive on time. For a visit to somebody\'s desk, any time before two is fine.',
  '**A present.** You don\'t have to bring anything, but it\'s nice to bring sweets on your first day or after a holiday. It isn\'t a good idea to give one person an expensive present, because the others see it.',
  '**Coffee.** It\'s polite to accept the first coffee, even a small one. Saying no to all of it looks cold.',
  '**The food.** If people are eating at a desk, they will invite you. It\'s normal to say yes and take a little.',
  '**And finally.** Nobody is going to be angry if you make a mistake.',
]));
out.push(S('Stage 7 · Write freely (sample, 152 words)'));
out.push(SAMPLE([
  '**A SYRIAN WEDDING – a short guide for our foreign guests**',
  '**Before.** If you are invited, answer early. The family is counting chairs and food, and "maybe" is the most expensive word at a wedding.',
  '**What to wear.** Guests dress well – better than you think. It isn\'t polite to come straight from work in ordinary clothes, and nobody minds if you are the best-dressed person in the room.',
  '**The time.** The card says six. Guests arrive between six and seven, and the couple arrive later. It\'s normal to wait; it isn\'t a mistake in the organisation.',
  '**The present.** Most guests give money in an envelope, and for a young couple that is the most useful thing. You don\'t have to do that – a present from your country is lovely – but don\'t worry that money looks cold. Here it doesn\'t.',
  '**At the hall.** Greet the two families at the door before you sit down. When the music brings the couple in, everybody stands up – so stand up too.',
  '**And finally.** You will be photographed. Many times. Smile and enjoy it.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ This makes me feel ready – especially the part about money not being cold.   ✓ Add **why** guests arrive late, not only that they do.   ? What happens if I leave early – is that rude?'));
out.push(S('Homework (sample, 36 words)'));
out.push(SAMPLE(['In Japan you give and take a present with two hands, and people don\'t open it in front of the guest. A Syrian visitor should know that – here we open it immediately and show everybody.']));

// 12.7
out.push(pb());
out.push(h2('12.7  Review & Mediate: The invitation and the programme'));
out.push(S('Stage 1 · Unit 12 quiz'));
out.push(A('1 When the guests **arrive**, we eat.   2 It\'s polite **to take** your shoes off.   3 While we **were eating**, the lights went off.   4 Congratulations **on** your new job.   5 What about **giving** a photo album?   6 Everybody **cleans** the house before the feast.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** She tells him to come at **six o\'clock**, because her level (A2) gets the certificates at 6.15 and the paper says come fifteen minutes before your level. (He doesn\'t have to stay for the whole evening.)'));
out.push(S('Stage 3 · Practise (sample – Event card A, the school open day)'));
out.push(SAMPLE([
  '**A:** It\'s the school open day, Saturday the 8th of March, from nine to one.',
  '**B:** All morning?',
  '**A:** You don\'t have to stay all morning. The classrooms open at nine, the children sing at half past ten, there\'s tea with the teachers at half past eleven, and photographs at half past twelve.',
  '**C:** We have an A2 child, so the singing is the important part for us.',
  '**A:** Then come at about ten – you see a little of the classroom and then the singing.',
  '**B:** Can we take the car?',
  '**A:** No cars in the school street. Leave it on the main road and walk.',
  '**C:** And does it cost anything?',
  '**A:** It\'s free, and they give tea and sweets. So we don\'t have to take anything.',
  '**B:** Good. Ten o\'clock, no car, nothing to carry.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Arrive at 10.00 (the singing is at 10.30) · take nothing (free, tea and sweets provided) · condition remembered: no cars in the school street._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  'It\'s my nephew\'s graduation party, on Saturday the 14th at five, at their house in Jaramana – the building behind the pharmacy, third floor.',
  'You don\'t have to answer formally, but tell my sister by Thursday so she knows the numbers.',
  'It\'s free, obviously, but everybody takes something sweet. There\'s no parking in their street, so leave the car on the main road and walk five minutes.',
  'Children are welcome; there will be six or seven of them. It says five, but nothing starts before half past.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Samir explained his nephew\'s graduation party. It\'s on Saturday the 14th at five, at their house in Jaramana, behind the pharmacy. It\'s free, but everybody takes something sweet. There\'s no parking in their street, so you leave the car on the main road and walk five minutes. Children are welcome. I decided I would go at about half past five, because nothing starts at five, and I would take sweets from the shop near my house.']));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 4'));
out.push(A('**1 B**   **2 C** (the teacher suggested it)   **3 B**   **4 B**   **5 C**   **6 B**'));
out.push(S('Stage 6 · Write with help (completed)'));
out.push(SAMPLE([
  'Hi Nour!',
  'The centre\'s end-of-year evening is on **Thursday 19 December** at **5.30**, in **the big hall on the second floor**. You have to answer **to Mr Bassam** by **12 December**.',
  'Our level gets the certificates at **6.15**, so come at **six** – the paper says fifteen minutes before your level.',
  'It\'s free, but **every family brings one dish for the dinner**. There\'s no parking **in front of the building**, so **use the street behind**. You can **bring** the children – there\'s a break at **7.00** for photos.',
  'See you there! Lina',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (46 words)**',
  'Hi Sam! On Friday we\'re going to my cousin\'s wedding. It starts at six, but we\'re leaving at three because it\'s in Homs. You don\'t have to bring a present – just come. One thing: when the music brings the couple in, everybody stands up, so stand up too!',
]));
out.push(SAMPLE([
  '**Weaker sample (27 words) – why it only just passes**',
  'Hi Sam. On Friday is my cousin wedding at six. You can bring sweets. People stand up when the couple come. Bye.',
  '_It answers all three points and is long enough, so it passes – but: **my cousin wedding** should be **my cousin\'s wedding**; **On Friday is** should be **On Friday there is / we have**; and there is no friendly opening or closing. Show the class that "all three points answered" and "well written" are two different things._',
]));
out.push(S('Unit 12 check · A  Grammar and vocabulary'));
out.push(A('**1 b** cleans   **2 b** arrive   **3 b** to take   **4 a** don\'t have to   **5 b** were waiting   **6 a** happened   **7 b** on   **8 a** about'));
out.push(S('Unit 12 check · B  Listening (Track 12.14)'));
out.push(A('**1 C** (Nour – a work contract)   **2 E** (Hiba – a cousin\'s wedding)   **3 G** (Omar – a photograph in a newspaper)   **4 A** (Lina – moved into a new flat)   **5 F** (Fadi – passed a driving test)'));
out.push(A('The two extra letters are **B** (is going to be a grandmother) and **D** (is travelling for the first time).'));
out.push(NOTE('The full audio script for Track 12.14 is printed in the Student\'s Book **after** the questions. If there is no audio in your class, read it aloud **twice** at normal speed, pausing between the five people.'));
out.push(S('Unit 12 check · C  Writing (sample, 62 words)'));
out.push(SAMPLE(['Hi Anna! On Saturday we\'re celebrating my grandmother\'s eightieth birthday at my aunt\'s house. It says four o\'clock, so come at about a quarter past – at four exactly everybody is still cooking. You don\'t have to bring a present, but bring flowers for my grandmother; she will put them next to her chair all evening. One thing: she will give you food three times. Say "no thank you" with your hand on your heart and smile – that works.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. The two lines that usually need five minutes in the next lesson are **telling a story with _while_ and _when_** (12.5) and **explaining the conditions in a programme** (12.7). Both come back in the End-of-Book Test.'));
out.push(sp());
out.push(box('End of Book 1', [
  'Units 1–12 are complete: **84 cycles**, each one function, each one 90 minutes.',
  'What comes next in this answer key: the **End-of-Book Test** (Reading 5 parts, Writing 2 parts, Listening 4 parts, Speaking 2 parts) with its audio scripts, its mark scheme, a strong and a weaker writing sample for each writing part, and the score bands with "what to do next" advice.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 12 · Answer Key');
