// Proactive English A2 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 20  Services and Repairs'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**20.1**  say how somebody does something',
  '**20.2**  ask somebody to change how they do it',
  '**20.3**  describe a service you received',
  '**20.4**  explain what is still wrong',
  '**20.5**  ask for a repair',
  '**20.6**  ask about the price and the time for a job',
  '**20.7**  Review & Mediate: explain a repair receipt and a guarantee',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**A bad fortnight.** Rami\'s laptop, Lina\'s washing machine and the centre\'s projector all broke within two weeks of each other.',
  '**Three repair shops in Mezzeh**: **Khalid Electronics** (fast, expensive, never explains anything), **Abu Nidal\'s** (slow, cheap, tells you what he did), and **the one by the bridge** that nobody can remember the name of.',
  '**Omar has an opinion about all three** and has written it down, which the class will use as a model.   ·   **Nour\'s rule:** a repair you cannot see is a repair you cannot judge.',
], C.lyellow, C.orange));

// ======================= 20.1 =======================
out.push(pb());
out.push(h2('20.1  He works quickly but he explains badly'));
out.push(p('**Function:** saying how somebody does something   ·   **Grammar:** adverbs of manner   ·   **Pronunciation:** _-ly_ endings'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes six verbs on the board — _work · drive · explain · write · listen · repair_. For each one the class gives **two** adverbs: one good and one bad.'));
out.push(board('He works quickly but he explains badly.', 'adjective + -ly → adverb'));
out.push(p('**b**  Make the adverb: _quick → ______ · slow → ______ · careful → ______ · bad → ______ · good → ______ · easy → ______ · fast → ______ · hard → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many repair shops are they talking about?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What does Omar say about Khalid Electronics?   **2** Why does Nour say she goes to Abu Nidal?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  Three shops in Mezzeh', [
  ['Rami', 'My laptop. Where do I take it?'],
  ['Omar', 'There are three and I have been to all of them. Khalid Electronics works quickly — two days, sometimes one — and he works well. He also explains badly, which is to say he does not explain at all.'],
  ['Rami', 'Does that matter if it is fixed?'],
  ['Omar', 'Ask Nour.'],
  ['Nour', 'It matters. If nobody tells you what was wrong, you cannot stop it happening again. I took a machine to Khalid twice in a year and the second time it was the same fault, and I only know that because I opened it myself.'],
  ['Omar', 'Abu Nidal works slowly. Four days, five, and he will tell you Thursday and mean the following Thursday.'],
  ['Rami', 'So he is the bad one.'],
  ['Omar', 'He is the one I use. He works carefully, he charges honestly, and he will stand there and tell you exactly what he did and show you the old part. Slowly is not the same as badly.'],
  ['Nour', 'That is the rule, actually. A repair you cannot see is a repair you cannot judge.'],
  ['Rami', 'And the third?'],
  ['Omar', 'The one by the bridge. I went once. He talked fast, he worked fast, and the thing broke again on the Sunday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – adverbs: _how_ somebody does something**',
  table(['adjective → adverb', 'examples'], [
    ['most: **+ -ly**', 'quick → **quickly** · slow → **slowly** · careful → **carefully** · bad → **badly** · honest → **honestly**'],
    ['**-y → -ily**', 'easy → **easily** · happy → **happily** · angry → **angrily**'],
    ['**no change**', 'fast → **fast** · hard → **hard** · late → **late** · early → **early**'],
    ['**irregular**', 'good → **well**'],
  ], [1, 2]),
  '**Where it goes:** **after the verb**, or after the verb + its object: _He works **quickly**._ · _He explains the fault **badly**._ ~~He quickly works.~~ ~~He works quickly the laptop.~~',
  '⚠ **adjective or adverb?** The adjective describes the **thing**; the adverb describes **how it is done**: _He is a **good** mechanic._ (adjective) · _He works **well**._ (adverb) ~~He works good.~~',
  '⚠ ~~hardly~~ is **not** the adverb of _hard_: _He works **hard**_ = a lot; _He **hardly** works_ = almost not at all. And ~~fastly~~ does not exist — _He works **fast**._',
  '**Practise:** Adjective or adverb?  1 He works very ______ (quick).  2 She is a ______ (careful) driver.  3 They explained it ______ (bad).  4 He speaks English ______ (good).  5 She works ______ (hard) and she arrives ______ (early).  6 The machine broke ______ (easy).',
  '**Useful phrases:** Slowly is not the same as badly. · he will tell you Thursday and mean the following Thursday · He charges honestly. · A repair you cannot see is a repair you cannot judge.',
  '**Pronunciation.** 🔊 **Track 20.2** The _-ly_ is a light, quick ending — never stressed: _**QUICK**ly · **CARE**fully · **HON**estly_. The stress stays where it was in the adjective. Listen and repeat eight adverbs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the person or place on the card; B gives **three** adverbs — one good, one bad, and one that surprises A — and then gives the verdict. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'What is __________ like?'],
  ['B', 'He/She works __________ and __________ __________.'],
  ['A', 'So that\'s good.'],
  ['B', 'But he/she __________ __________.'],
  ['A', 'Does that matter?'],
  ['B', 'It matters, because __________.'],
  ['A', 'So would you use him/her?'],
  ['B', '__________. __________ is not the same as __________.'],
]));
out.push(table(['Card A – the people', 'Card B – the places'], [
  ['a mechanic: works fast / explains badly / charges honestly', 'a repair shop: works slowly / works carefully / shows you the old part'],
  ['a teacher: speaks clearly / marks slowly / listens well', 'a bakery: opens early / serves quickly / wraps things badly'],
  ['a driver: drives carefully / arrives late / talks constantly', 'a clinic: answers the phone badly / treats people kindly / runs late'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **three** adverbs and the verdict. Did the bad adverb change the verdict?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe **three** people who do a job for you — a mechanic, a shop, a doctor, a teacher, somebody in your family. Give two adverbs each, one good and one bad, and say whether you still go to them.'));
out.push(p('**b**  Swap. Then each of you say **one** adverb that describes how **you** do your own work, and one you would like to be able to use.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar has been to all three shops in Mezzeh. Khalid Electronics works quickly and works well, and explains badly — which, Omar says, means not at all. Nour pointed out why that matters: she took the same machine back twice in a year with the same fault and only knows because she opened it herself. Abu Nidal works slowly, but he works carefully, charges honestly and shows you the old part. Omar\'s line is that slowly is not the same as badly._'));
out.push(p('**Listener task:** write the one adverb today that decided somebody\'s verdict.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s page from the club noticeboard. Answer the questions.'));
out.push(model([
  '**THREE REPAIR SHOPS IN MEZZEH** — I have used all of them, so you do not have to',
  '**Khalid Electronics, Al-Hamra Street.** Works quickly — two days, sometimes one — and works well. Charges about a third more than the others and does not apologise for it, which I respect. Explains badly, which is to say he hands it back, says "it\'s fine", and turns to the next person. **Use him if** the thing must be back by Thursday and you do not care why it broke.',
  '**Abu Nidal, behind the bakery.** Works slowly. He will say Thursday and he will mean the following Thursday, and after eleven years I have stopped being surprised. But he works carefully, he charges honestly, and he will stand there for five minutes and tell you exactly what he did and show you the old part on the counter. **Use him if** you want to know what happened.',
  '**The shop by the bridge.** I went once. He talked fast, he worked fast, I paid fast, and the thing broke again on the Sunday. I have no more information than that and I am not going back to get any.',
  '**The rule I have learned:** quickly and well are two different words, and so are slowly and badly. The only one that cannot be forgiven is a repair nobody will explain to you — because a repair you cannot see is a repair you cannot judge.',
]));
out.push(item('1', 'Why does Omar respect Khalid Electronics for its prices?'));
out.push(item('2', 'What does Abu Nidal do that the others do not?'));
out.push(item('3', 'What is the only thing Omar says cannot be forgiven?'));
out.push(writers([
  'A review page: **one place per paragraph** → **the adverbs, good and bad** → **the detail that proves each one** → **_Use him if…_** → **the rule at the end**.',
  'Every adverb needs its **proof** next to it: _works slowly — he will say Thursday and mean the following Thursday_. An adverb on its own is an opinion; an adverb with evidence is a review.',
  'End each paragraph with _**Use him if…**_ rather than a score. A reader does not want to know which is best; they want to know which is best **for them, this week**.',
  '⚠ Be fair to the one you do not use. _Charges more and does not apologise for it, which I respect_ is what makes the rest of the page believable.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a review page for two or three places or people who do a job in your area (35 words or more).'));
out.push(p('**______________** — I have used ______________   **______________.** Works ______________ — ______________ — and works ______________. ______________ badly, which is to say ______________. **Use him/her if** ______________.   **______________.** Works ______________. But he/she works ______________ and ______________. **Use him/her if** ______________.   **The rule I have learned:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, and one place or person per paragraph',
  'Adverbs after the verb (_works quickly_, not ~~quickly works~~) · _well_ not ~~good~~ · _fast_ not ~~fastly~~',
  'Every adverb has a detail that proves it',
  'Each paragraph ends with _Use him / her if…_, and the page ends with a rule',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (60 words or more) reviewing the places you actually use — shops, workshops, clinics, offices, a barber, a tailor. Three of them, adverbs with proof, _Use them if…_, and your own rule at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has just moved to that area**. ★ _The one I would go to first._  ✓ _One adverb with no proof under it._  ? _Which one would you use in an emergency?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the pages into a class booklet: **Places we actually use.** **Which review would make you change where you go?** It is always the one with a number in it.'));
out.push(hw('Write the review **the shop would write of you as a customer** (40+ words): how you explain the problem, how you pay, how you behave when it is late.'));

// ======================= 20.2 =======================
out.push(pb());
out.push(h2('20.2  Could you say it more slowly?'));
out.push(p('**Function:** asking somebody to change how they do something   ·   **Grammar:** comparative adverbs   ·   **Pronunciation:** weak _more_ /mə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher does four things badly on purpose — speaks too fast, writes too small, explains too quickly, walks too fast to the board. The class must ask for each one to be changed, politely.'));
out.push(board('Could you say it more slowly?', 'more + adverb · better · faster'));
out.push(p('**b**  Make the comparative: _slowly → ______ · carefully → ______ · clearly → ______ · well → ______ · fast → ______ · hard → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina ask the man to do?   **A** come back tomorrow   **B** explain it again more slowly   **C** reduce the price'));
out.push(p('**b**  Listen again. **1** What **two** things does Lina ask for?   **2** What does the man say he will do better next time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  More slowly, please', [
  ['Technician', 'Right — the drum bearing has gone, the belt is stretched, the pump is fine, so I\'ve replaced the bearing and the belt and I\'ve left the pump. Eighty-five with the parts.'],
  ['Lina', 'I\'m sorry — could you say that again more slowly?'],
  ['Technician', '(slower) The bearing. The round part the drum turns on. That has gone. The belt was stretched, so I changed that as well. The pump is fine. Eighty-five thousand, with the parts.'],
  ['Lina', 'Thank you. And could you write the two parts down, more clearly than the receipt? I can\'t read the receipt.'],
  ['Technician', '(laughs) Nobody can read the receipt. My writing is bad and the paper is worse.'],
  ['Lina', 'Then could you write it on this, and could you tell me which part broke first? Because if the bearing went and that stretched the belt, I want to know.'],
  ['Technician', 'That is the right question and most people do not ask it. The bearing went first. It has been going for months — the noise you told me about in January was the bearing.'],
  ['Lina', 'So I should have called you in January.'],
  ['Technician', 'You should have called me in January. And next time I will explain it better the first time, because you asked me twice and you were right to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparative adverbs: asking for a change**',
  table(['adverb', 'comparative'], [
    ['**slowly / carefully / clearly / quietly**', '**more** slowly · **more** carefully · **more** clearly'],
    ['**well**', '**better**'],
    ['**badly**', '**worse**'],
    ['**fast / hard / late / early**', '**faster** · **harder** · **later** · **earlier**'],
  ], [1.2, 1.6]),
  '**The rule:** adverbs ending in **-ly** take **more**. Short adverbs with no _-ly_ (fast, hard, late, early) take **-er**. _well_ → **better**.',
  '⚠ ~~more slowlier~~ ~~more better~~ — choose one, never both.   ⚠ ~~Could you speak more slow?~~ → _more **slowly**_.',
  '**The polite shape, and it is the point of the cycle:**  _**Could you** + verb + **more** + adverb**?**_ · _**Could you** say that again **more slowly**?_ · _**Could you** write it **more clearly**?_ · _**Could you** explain it **better**?_',
  '**With _than_, to compare two things:** _He works **more carefully than** the last one._ · _She explains things **better than** anybody._ · _It broke **faster than** we expected._',
  '**Practise:** Ask for the change politely.  1 He is speaking too fast. 2 She is writing too small — you cannot read it. 3 He is explaining it in a way you do not follow. 4 He is doing it carelessly. 5 He arrives after you every time.',
  '**Useful phrases:** Could you say that again more slowly? · Nobody can read the receipt. · That is the right question and most people do not ask it. · I will explain it better the first time.',
  '**Pronunciation.** 🔊 **Track 20.4** _more_ before an adverb is weak — /mə/, joined to the next word: _more slowly_ /mə ˈsləʊli/ · _more carefully_ /mə ˈkeəfli/. Listen and repeat, then ask three questions at speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the person doing the job on the card, at speed and badly; B must ask for **three** changes, each one politely and with a comparative adverb. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________ (fast, unclear).'],
  ['B', 'I\'m sorry — could you say that again more __________?'],
  ['A', '(slower) __________.'],
  ['B', 'Thank you. And could you __________ more __________ than __________?'],
  ['A', '__________.'],
  ['B', 'And could you tell me __________?'],
  ['A', 'That is the right question and most people do not ask it.'],
]));
out.push(table(['Card A – the jobs', 'Card B – the jobs'], [
  ['a technician explaining a repair, fast, with part names', 'a pharmacist explaining a prescription, fast'],
  ['a clerk explaining a form, with three dates in one sentence', 'a teacher explaining homework in the last minute of a lesson'],
  ['a driver explaining a route, with four turnings', 'a landlord explaining a bill, with two numbers'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **three** requests. Did any of them sound rude? If so, which word made it so?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of somebody who really does something in a way that does not work for you — too fast, too quietly, too late, too carelessly. Tell your partner, and then say the actual sentence you would use. Your partner must tell you honestly whether they would be offended by it.'));
out.push(p('**b**  Swap. Then each of you say one thing somebody could politely ask **you** to do differently.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina asked the technician three things. Could he say it again more slowly — he did, and the second version used ordinary words. Could he write the two parts down more clearly than the receipt, because nobody can read the receipt. And which part broke first: he said that is the right question and most people do not ask it. The bearing went first, and the noise she told him about in January was the bearing. He said he would explain it better the first time next time._'));
out.push(p('**Listener task:** write the polite request you heard today that you are going to use this week.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina sends to the repair company. Answer the questions.'));
out.push(model([
  '**To:** Al-Sham Appliance Repairs   **Subject:** Job 4471 — thank you, and two small things',
  'Dear Sir,',
  'Your technician came on Tuesday and the machine is working. He worked carefully and he charged exactly what he said he would, and I am writing first to say so, because people only write when something is wrong.',
  'Two small things, both about explaining rather than about the work.',
  'He explained the repair very fast the first time and I had to ask him to say it again more slowly. He did, immediately and without being annoyed, and the second version was clear. It would be easier for everybody if the second version came first.',
  'And the receipt cannot be read. He told me himself that nobody can read it. He wrote the two parts out for me more clearly on a separate piece of paper, which was kind, but I now have two papers and only one of them is a receipt. Could they be printed?',
  'One more thing he did that I want to mention: he told me which part broke first. That is what tells a customer what to do differently, and in my experience almost nobody says it.',
  'Yours faithfully,',
  'Lina Haddad',
]));
out.push(item('1', 'Why does Lina say she is writing first about what was good?'));
out.push(item('2', 'What is her suggestion about the explanation?'));
out.push(item('3', 'Which thing does she say almost nobody does?'));
out.push(writers([
  'A message that asks a business to change something: **the thing that was good, first** → **"two small things"** → **one paragraph each, with what happened** → **one thing to praise at the end**.',
  'Say the good thing **first and specifically** — _he worked carefully and charged exactly what he said_. A complaint that opens with a complaint is read defensively and changes nothing.',
  'Separate the **work** from the **explaining**. _Both about explaining rather than about the work_ tells the reader in one line that their technician is not in trouble.',
  '⚠ Make the request a **suggestion the business can act on**: _it would be easier if the second version came first_ · _could they be printed?_ A complaint with no action in it is a feeling.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a business about something that could be done differently (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   ______________ came on ______________ and ______________. He/She ______________ and ______________, and I am writing first to say so, because ______________.   Two small things, both about ______________.   He/She ______________ and I had to ask ______________. It would be easier if ______________.   And ______________. Could ______________?   One more thing: ______________.   Yours faithfully, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line with the job or order number, and a full name',
  'Adverbs after the verb · comparative with _more_ + -ly, or _-er_ for short ones · _better_ not ~~more good~~',
  'The good thing first, and specific',
  'Each request is something the business can actually do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message (60 words or more) to a business, an office or an institution you deal with, about something that would be easy for them to do differently. Good thing first, two requests, one thing to praise at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the owner of that business**. ★ _The line that made me want to fix it._  ✓ _One complaint I cannot act on._  ? _Do you want an answer, or did you just want me to know?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three messages aloud. **Which one would actually change something?** Then the harder question: **who is going to send theirs?**'));
out.push(hw('Write the **reply from the business** (40+ words): thank them, say which of the two things you will change and which you cannot, and give a reason for the one you cannot.'));

// ======================= 20.3 =======================
out.push(pb());
out.push(h2('20.3  They did it well and they did it cheaply'));
out.push(p('**Function:** describing a service you received   ·   **Grammar:** adverb position; adverb against adjective   ·   **Pronunciation:** stress on the adverb'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads six sentences, three with adjectives and three with adverbs. The class must say which is which and why. _It was a quick repair. / They repaired it quickly. / He is a careful driver. / He drives carefully._'));
out.push(board('They did it well and they did it cheaply.', 'adjective → the thing · adverb → how'));
out.push(p('**b**  Adjective or adverb? **1** They did a ______ job. (good) **2** They did it ______. (good) **3** It was a ______ repair. (quick) **4** They repaired it ______. (quick) **5** He is a ______ worker. (slow) **6** He works ______. (slow)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Ms Huda doing?   **A** complaining about the projector   **B** telling the class how the projector was repaired   **C** asking for money for a new projector'));
out.push(p('**b**  Listen again. **1** How long did the repair take, and how much did it cost?   **2** What does she say was the best part of the service?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  The projector', [
  ['Ms Huda', 'The projector is back, and I want to tell you how it went, because you are writing reviews this week.'],
  ['Omar', 'Who did you use?'],
  ['Ms Huda', 'Abu Nidal. He took six days, which is four days longer than he said, and I was ready to be annoyed.'],
  ['Hiba', 'And?'],
  ['Ms Huda', 'He did it well and he did it cheaply — thirty-two thousand, when the centre was told a hundred and twenty for a new one. But that is not the best part.'],
  ['Omar', 'He showed you the old part.'],
  ['Ms Huda', 'He showed me the old part. And he explained, slowly and without being asked, that the fan was full of dust and that the dust is why the lamp burned out, and that if nobody opens it and cleans it once a year the new lamp will go the same way.'],
  ['Nour', 'So he told you how to not need him.'],
  ['Ms Huda', 'He told me how to not need him, which is the most expensive sentence a repair man can say and he said it anyway. Mr Bassam is going to open it every September.'],
  ['Omar', 'And the six days?'],
  ['Ms Huda', 'I have stopped minding about the six days. It is strange how quickly that happened.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – adjective or adverb, and where the adverb goes**',
  table(['adjective — describes the **thing**', 'adverb — describes **how**'], [
    ['_It was a **quick** repair._\n_He is a **careful** worker._\n_They did a **good** job._',
     '_They repaired it **quickly**._\n_He works **carefully**._\n_They did it **well**._'],
  ], [1.3, 1.3]),
  '**Position:** the adverb goes **after the verb**, or after the verb and its object — and if there are two, join them: _He did it **well** and he did it **cheaply**._',
  '⚠ ~~They did it good.~~ → _They did it **well**._  ⚠ ~~It was a well job.~~ → _a **good** job._  ⚠ ~~He explained slowly the fault.~~ → _He explained the fault **slowly**._',
  '**Two adverbs together:** join with _and_ — _slowly **and** without being asked_ · _well **and** cheaply_. Do not stack them: ~~He did it well cheaply.~~',
  '**Useful for reviews:** _They did it **quickly** / **cheaply** / **properly** / **badly** / **well**._ · _They explained it **clearly**._ · _They charged **honestly**._ · _They arrived **late**._',
  '**Practise:** Adjective or adverb, and where does it go?  1 They did the job ______ (quick).  2 It was a ______ job (good).  3 He explained the fault ______ (clear).  4 She is a ______ technician (careful).  5 They charged us ______ (honest) and they finished ______ (late).',
  '**Useful phrases:** I was ready to be annoyed. · that is not the best part · without being asked · the most expensive sentence a repair man can say · I have stopped minding.',
  '**Pronunciation.** 🔊 **Track 20.6** In a review the **adverb carries the sentence**: _They did it **WELL** and they did it **CHEAP**ly._ Say it with the stress on _did_ instead and the meaning goes. Listen and repeat both ways.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the service on the card; B describes it with **four** adverbs — and must include one thing that was bad and one that was better than expected. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How was __________?'],
  ['B', 'They took __________, which was __________ than they said.'],
  ['A', 'So it was bad.'],
  ['B', 'No. They did it __________ and they did it __________.'],
  ['A', 'And?'],
  ['B', 'And they explained it __________, without being asked.'],
  ['A', 'So would you go back?'],
  ['B', '__________. I have stopped minding about __________.'],
]));
out.push(table(['Card A – the services', 'Card B – the services'], [
  ['a projector repair: 6 days (said 2), 32,000, explained everything', 'a tailor: 3 days, cheap, did one sleeve badly and redid it free'],
  ['a plumber: came the same day, expensive, said nothing', 'a clinic: waited two hours, treated her kindly, explained slowly'],
  ['a barber: fast, cheap, talks constantly', 'a shoe repair: a week, perfect, cannot be found when you go back'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **four** adverbs. Which one decided whether they would go back?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe a service you have really received in the last year — good or bad. Four adverbs, one thing that was worse than you expected, one that was better. Your partner must decide whether **they** would use it.'));
out.push(p('**b**  Swap. Then each of you describe the **worst** service you have ever received, in four adverbs, without using the word _bad_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda took the projector to Abu Nidal. He took six days — four longer than he said — and she was ready to be annoyed. He did it well and cheaply: thirty-two thousand against a hundred and twenty for a new one. But the best part was that he showed her the old part and explained, without being asked, that the fan was full of dust and that the dust is why the lamp burned out. Nour said he told her how to not need him, which Ms Huda says is the most expensive sentence a repair man can say._'));
out.push(p('**Listener task:** write the service in this room you would use tomorrow, and the adverb that made you choose it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review on the club\'s noticeboard. Answer the questions.'));
out.push(model([
  '**THE CENTRE\'S PROJECTOR** — a review, because the class asked for one',
  '**What happened.** The projector stopped in the middle of a lesson in March. We were told a new one would cost a hundred and twenty thousand. We sent the old one to Abu Nidal behind the bakery instead.',
  '**How long.** Six days. He said two. If six days matters to you, that is a real fact and you should have it before anything else on this page.',
  '**How well.** Very well. It has worked every day since, including the day the electricity went off twice.',
  '**How much.** Thirty-two thousand with the part. Against a hundred and twenty for a new one, that is not a saving, that is a different decision.',
  '**What he did that nobody does.** He put the burned-out lamp and the dusty fan cover on the counter and explained, slowly and without being asked, that the dust has been building up for years and that the dust is why the lamp went. Then he said that if somebody opens the case and cleans the fan once a year, the new lamp will last. He told us how to stop needing him.',
  '**Verdict.** If you need it back by Thursday, he is the wrong man. If you want it to still be working in two years, he is the only one.',
]));
out.push(item('1', 'Why does the review put "six days" so early?'));
out.push(item('2', 'What did Abu Nidal put on the counter?'));
out.push(item('3', 'What is the verdict, in one sentence?'));
out.push(writers([
  'A service review: **what happened** → **how long** → **how well** → **how much** → **what they did that nobody does** → **verdict**.',
  'Put the **bad fact early and plainly**: _six days. He said two._ A review that hides its one bad fact until the end is not trusted when it gets there.',
  'Give the price **against the alternative**: _thirty-two against a hundred and twenty — that is not a saving, that is a different decision._ A number alone means nothing.',
  '⚠ The verdict should be **two conditions, not a score**: _if you need it by Thursday… if you want it working in two years…_ Different readers want different things, and a star rating tells neither of them anything.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a review of a service you have received (35 words or more).'));
out.push(p('**______________** — a review   **What happened.** ______________.   **How long.** ______________. They said ______________.   **How well.** ______________. ______________.   **How much.** ______________. Against ______________, that is ______________.   **What they did that nobody does.** ______________.   **Verdict.** If you ______________, ______________. If you ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title and the six headings, in that order',
  'Adverbs for how (_did it well_), adjectives for the thing (_a good job_) — never swapped',
  'The bad fact is in the first half, and the price is given against an alternative',
  'A verdict with **two** conditions, not a score',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full review (60 words or more) of a real service you have used. All six headings, one bad fact given early, a price against an alternative, and a verdict in two conditions.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s review as **somebody deciding this afternoon**. ★ _The fact I needed._  ✓ _One adverb with nothing behind it._  ? _Would you use them again for something bigger?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the reviews together as a class booklet. **Which review is honest about something that makes its own argument weaker?** Those are the reviews people believe.'));
out.push(hw('Write the review of **a service that was bad** (40+ words), using four adverbs and without once using the word _bad_. It is harder and it is more useful.'));

// ======================= 20.4 =======================
out.push(pb());
out.push(h2('20.4  It\'s still not working properly'));
out.push(p('**Function:** explaining what is still wrong   ·   **Grammar:** _still_ / _again_ / _properly_   ·   **Pronunciation:** stress on _still_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three sentences on the board: _It isn\'t working. · It\'s still not working. · It\'s not working properly._ The class must say what is different about each one, and give an example of each.'));
out.push(board('It\'s still not working properly.', 'still = after the repair · properly = partly'));
out.push(p('**b**  _still_, _again_ or _properly_? **1** You repaired it and it has not worked since — _it\'s ______ not working._  **2** It worked for a week and then stopped — _it has broken ______._  **3** It works, but not as it should — _it isn\'t working ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Rami\'s laptop?   **A** it has not been repaired at all   **B** it works but not properly   **C** it has broken again in a different way'));
out.push(p('**b**  Listen again. **1** What exactly is still wrong?   **2** Why does the man ask whether it does it on the mains?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  Still, again, or properly', [
  ['Rami', 'I brought it in on Monday and it\'s still not working properly.'],
  ['Technician', 'Say that again, but choose one word. Is it **still** not working, has it broken **again**, or is it not working **properly**?'],
  ['Rami', '…Properly. It turns on, it does everything, but the screen goes dark after about twenty seconds and comes back when I touch it.'],
  ['Technician', 'Good. That is a completely different problem from the one you brought it in with, and it is a much smaller one. "It\'s still not working" would have made me open the whole thing again.'],
  ['Rami', 'So it isn\'t the same fault?'],
  ['Technician', 'No. The old fault was the fan and the fan is fine — listen to it. This is a setting. Does it do it on the mains, or only on the battery?'],
  ['Rami', 'I don\'t know. I\'ve only used it on the battery since Monday.'],
  ['Technician', 'Then that is almost certainly it, and I can show you in forty seconds, and it costs nothing. But I want you to notice what just happened.'],
  ['Rami', 'I came in angry.'],
  ['Technician', 'You came in with a sentence that was not true. The sentence cost us both ten minutes and it was nearly going to cost you a morning.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three words that mean three different problems**',
  table(['word', 'what it means', 'example'], [
    ['**still** not working', 'it was repaired and **nothing changed**', '_I brought it in on Monday and it\'s **still** not working._'],
    ['broken **again**', 'it worked for a while and then **stopped again**', '_It worked for a week and it has broken **again**._'],
    ['not working **properly**', 'it works, but **not as it should**', '_It turns on, but the screen goes dark._'],
  ], [1, 1.3, 1.8]),
  '**Why it matters:** each of the three sends the repairer to a different place. _Still_ means open it all again. _Again_ means the repair did not hold. _Properly_ means something small and probably new.',
  '**Where they go:** _still_ goes **before** the main verb and **after** _be_ — _It is **still** broken._ · _It **still** doesn\'t work._  _again_ and _properly_ go at the **end** — _It has broken **again**._ · _It isn\'t working **properly**._',
  '⚠ ~~It\'s not still working.~~ means something else. Say _It\'s **still** not working._   And describe the **behaviour**, as in Unit 18: _it turns on, but the screen goes dark after twenty seconds._',
  '**Practise:** _still_, _again_ or _properly_?  1 You fixed it on Monday and nothing has changed: it is ______ broken.  2 It was fine for a week: it has broken ______.  3 It works but it is slow and hot: it is not working ______.  4 I have asked three times and it has ______ not been done.  5 The door closes, but not ______.',
  '**Useful phrases:** Say that again, but choose one word. · That is a completely different problem. · listen to it · I want you to notice what just happened. · a sentence that was not true',
  '**Pronunciation.** 🔊 **Track 20.8** _still_ is stressed and slightly long, because it carries the complaint: _It\'s **STILL** not working._ Compare it with the flat version, which sounds like a fact rather than a problem. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A comes back with the problem on the card and uses **the wrong word first**; B makes them choose between _still_, _again_ and _properly_, and then asks one question that narrows it down. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'I brought it in on __________ and it\'s still not working properly.'],
  ['B', 'Say that again, but choose one word. Is it **still** not working, has it broken **again**, or is it not working **properly**?'],
  ['A', '…__________.'],
  ['B', 'Good. Tell me exactly what it does.'],
  ['A', 'It __________, but __________.'],
  ['B', 'Does it do it __________, or only __________?'],
  ['A', '__________.'],
  ['B', 'Then that is almost certainly it.'],
]));
out.push(table(['Card A – the problems', 'Card B – the problems'], [
  ['a laptop: screen goes dark after 20 seconds (a setting)', 'a washing machine: works, but does not empty fully (a filter)'],
  ['a door: closes, but you have to lift it (a hinge)', 'a tap: no drip, but very slow (something in the end)'],
  ['a telephone: charges, but only on one wire (the socket)', 'a lamp: works, but flickers in the evening (the whole street)'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the word they chose and the question that narrowed it down. How long did it take once the right word was used?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something in your life that is **still** not right after somebody dealt with it — a repair, a form, a request, a promise. Tell your partner using exactly the right word of the three, and then describe the behaviour.'));
out.push(p('**b**  Swap. Then each of you work out what you would actually say to the person, in **one** sentence, and say it out loud.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rami went back with "it\'s still not working properly", and the technician made him choose one word of the three. The right word was properly: it turns on and does everything, but the screen goes dark after twenty seconds. The technician said that is a completely different problem and a much smaller one, and that "still not working" would have made him open the whole machine again. What I am taking away is his last line: Rami came in with a sentence that was not true, and it nearly cost him a morning._'));
out.push(p('**Listener task:** write the thing in this room that somebody has been calling _still_ and is really _properly_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Lina sends about the washing machine. Answer the questions.'));
out.push(model([
  '**To:** Al-Sham Appliance Repairs   **Subject:** Job 4471 — not the same fault, and not a complaint',
  'Dear Sir,',
  'Your technician came on Tuesday the 11th and replaced the bearing and the belt. The noise has gone completely and the machine turns normally. That part is fixed and I am not writing about it.',
  'There is something else, and I want to be exact about which of three things it is, because I know the difference matters to you.',
  'It is **not** still broken — the old fault has gone. It has **not** broken again — nothing has stopped. It is not working **properly**: it washes correctly and then it does not empty all the way. There is always about two centimetres of water left in the drum, every time, on every programme.',
  'It has done it on all four washes since Tuesday. It did not do it before.',
  'I am not asking for the repair to be done again and I am not asking for money back. I am asking whether this is connected to what was done on Tuesday, or whether it is a separate thing — and if it is separate, what it would cost to look at.',
  'Yours faithfully,',
  'Lina Haddad · flat 7',
]));
out.push(item('1', 'Which of the three words describes the problem?'));
out.push(item('2', 'How many times has it happened?'));
out.push(item('3', 'What exactly is Lina asking for?'));
out.push(writers([
  'A follow-up message: **what is fixed, first** → **which of the three it is, said explicitly** → **the behaviour, exactly** → **how many times** → **what you are and are not asking for**.',
  'Rule the other two out **by name**: _it is not still broken · it has not broken again · it is not working properly_. Three lines that save a return visit.',
  'Give the **count**: _all four washes since Tuesday. It did not do it before._ A fault that happens every time is a different fault from one that happens sometimes.',
  '⚠ Say what you are **not** asking for. _I am not asking for money back_ removes the defensiveness from the whole message and is the reason you will get an answer.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a follow-up message about something that is not right after somebody dealt with it (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   ______________ came on ______________ and ______________. ______________ has gone completely. That part is fixed and I am not writing about it.   It is **not** still ______________. It has **not** ______________ again. It is not working **properly**: ______________.   It has done it ______________ times since ______________. It did not do it before.   I am not asking for ______________. I am asking ______________.   Yours faithfully, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting, a subject line with the job number, and a full name',
  '_still_ before the verb · _again_ and _properly_ at the end · all three named explicitly',
  'The behaviour described exactly, and a count of how many times',
  'One line saying what you are **not** asking for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real follow-up (60 words or more) about something in your life that is still not right — a repair, a form, an office, a promise, a bill. Name which of the three it is, describe the behaviour, count it, and say what you are not asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as **the person who did the work**. ★ _The line that told me where to look._  ✓ _One place where you said "still" and meant "properly"._  ? _How many times exactly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two messages aloud. **Which one would get an answer the same day?** It is the one that ruled out the other two problems before anybody asked.'));
out.push(hw('Write the **reply from the company** (40+ words): say whether it is connected, what you will do, and what it will cost.'));

// ======================= 20.5 =======================
out.push(pb());
out.push(h2('20.5  Could you have a look at it?'));
out.push(p('**Function:** asking for a repair   ·   **Grammar:** _Could you…?_ / _Would it be possible to…?_   ·   **Pronunciation:** polite intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Six ways to ask for the same thing, from the most direct to the most polite. Your teacher writes them in order: _Fix this. · Can you fix this? · Could you fix this? · Could you have a look at this? · Would it be possible to look at this today? · I wonder whether you could look at this._'));
out.push(board('Could you have a look at it?', 'Could you…? · Would it be possible to…?'));
out.push(p('**b**  Which would you use with: **1** your brother  **2** a shopkeeper you know  **3** somebody you have never met  **4** somebody who is already busy  **5** somebody who has already said no once?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does the man agree to look at it?   **A** yes, today   **B** yes, but not today   **C** no'));
out.push(p('**b**  Listen again. **1** What does Hiba offer that changes the answer?   **2** What does the man say about people who say "quickly"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  Would it be possible?', [
  ['Hiba', 'Good morning. I know you\'re busy — would it be possible for you to have a look at this?'],
  ['Abu Nidal', 'It would be possible on Thursday.'],
  ['Hiba', 'Thursday is fine. May I ask one thing first — could you just look at it for thirty seconds now and tell me whether it is worth leaving at all? It is my mother\'s and she will ask me, and if it is finished I would rather tell her today.'],
  ['Abu Nidal', '(pause) That is a reasonable thing to ask. Give it here.'],
  ['Hiba', 'Thank you.'],
  ['Abu Nidal', '…It is not finished. It is the switch, which is a small thing, and the case has been opened before by somebody who used the wrong screwdriver, which is why these two screws will not come out. Leave it. Thursday.'],
  ['Hiba', 'Could you tell me roughly what it will cost?'],
  ['Abu Nidal', 'Under twenty. If it is more than twenty I will ring you before I do anything.'],
  ['Hiba', 'Thank you. That is exactly what I needed.'],
  ['Abu Nidal', 'You are the fourth person today and the only one who did not say "quickly". Do you know what "quickly" means to me? It means the person has already decided I am slow, and I have not started yet.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for a repair — from direct to very polite**',
  table(['you say', 'when'], [
    ['_**Can you** look at this?_', 'with somebody you know well'],
    ['_**Could you** look at this?_', 'the normal polite form — use this one by default'],
    ['_**Could you have a look at** this?_', 'softer again — _have a look_ asks for less than _fix_'],
    ['_**Would it be possible to** look at this today?_', 'when you are asking a lot, or asking a stranger'],
    ['_**I know you\'re busy, but could you**…?_', 'when you can see that they are'],
  ], [1.5, 1.4]),
  '⚠ _Could you…?_ + **bare verb**: ~~Could you to look?~~ ~~Could you looking?~~',
  '⚠ _Would it be possible **to** look…?_ / _Would it be possible **for you to** look…?_ — both correct. ~~Would it be possible you look?~~',
  '**_have a look at_** is the useful phrase of this cycle. It asks for an **opinion**, not a repair, so it is much easier to say yes to: _Could you **have a look at** it?_',
  '**Make it easy to say yes:** give a reason, offer a smaller version (_thirty seconds now_), or accept a later day first. And never open with _quickly_ — it tells the other person you have already decided they are slow.',
  '**Practise:** Ask politely.  1 A stranger, something big. 2 Somebody you know, something small. 3 Somebody who is clearly busy. 4 Ask for an opinion, not a repair. 5 Ask for a price before they start.',
  '**Useful phrases:** I know you\'re busy. · Would it be possible to…? · Could you have a look at it? · whether it is worth leaving at all · That is exactly what I needed.',
  '**Pronunciation.** 🔊 **Track 20.10** A polite request **rises** at the end and is **slower** than ordinary speech: _Could you have a look at it?_ ↗ Said fast and flat, the same words are an order. Listen to both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for the job on the card; B is busy and says no the first time. A must ask again, differently — smaller, or with a reason — until B agrees. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Good morning. I know you\'re busy — would it be possible __________?'],
  ['B', 'Not today. __________.'],
  ['A', '__________ is fine. May I ask one thing first — could you just __________ and tell me __________?'],
  ['B', '(pause) That is a reasonable thing to ask.'],
  ['A', 'Thank you. And could you tell me roughly __________?'],
  ['B', '__________. If it is more than __________ I will __________.'],
]));
out.push(table(['Card A – the jobs', 'Card B – the jobs'], [
  ['a laptop that will not start — you need to know if it is worth repairing', 'a sewing machine that belonged to your mother'],
  ['a bicycle before the weekend', 'a watch that has stopped and has no value except to you'],
  ['a leaking tap in a flat you are leaving next month', 'a telephone with photographs on it that are not backed up'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **second** request — the one that worked. What made it easier to say yes to?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something you actually need to ask somebody to do, and have been putting off. Say the request out loud to your partner three ways: direct, polite, and very polite. Your partner says which one fits the person.'));
out.push(p('**b**  Swap. Then each of you say the **reason** you would give, and your partner tells you whether it would work on them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba asked Abu Nidal to look at her mother\'s radio and he said Thursday. She accepted Thursday and then asked for something smaller: thirty seconds now, to tell her whether it was worth leaving at all. He said that was a reasonable thing to ask. It is the switch, and somebody has opened the case before with the wrong screwdriver. Under twenty, and he will ring before going over. Then the line our group wrote down: she is the only one today who did not say "quickly", and he says "quickly" means the person has already decided he is slow._'));
out.push(p('**Listener task:** write the thing somebody offered today that made a no into a yes.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Hiba leaves with the radio. Answer the questions.'));
out.push(model([
  '**FOR ABU NIDAL — the radio, left Tuesday**',
  'Thank you for looking at it this morning.',
  '**What it does:** it turns on, the light comes on, and there is no sound at all on any station. It makes a small click when you turn the switch and nothing after that.',
  '**When it started:** about three weeks ago, and it was not dropped and nothing was spilled on it. It was working on the Sunday and not on the Monday.',
  '**What I have already tried:** a different socket, and I have taken the back off and looked, and I put it back without touching anything.',
  '**What you should know:** somebody opened it years ago with the wrong screwdriver, which you saw. That was not me.',
  '**What I am asking for:** please repair it if it is under twenty thousand. If it is more than that, please do not do anything — ring me on 0998 440 217 and I will decide.',
  '**Why it matters:** it is my mother\'s and it has been in her kitchen since before I was born. She does not use it for the radio. She uses it because it is on.',
  'Hiba Khalil',
]));
out.push(item('1', 'What does the radio do when you turn the switch?'));
out.push(item('2', 'What does Hiba ask them to do if it costs more than twenty thousand?'));
out.push(item('3', 'Why does she say her mother uses it?'));
out.push(writers([
  'A note left with a repair: **what it does** → **when it started** → **what you have tried** → **what they should know** → **what you are asking for, with a price limit and a number** → **why it matters**.',
  'The **price limit and the telephone number** are the whole point of writing it down: _repair it if it is under twenty · if it is more, ring me._ Without those two lines you will get a bill you did not agree to.',
  'Say what you **have already tried** and what you **did not** do — _I put it back without touching anything_ · _that was not me_. It saves the repairer twenty minutes and it saves you being blamed.',
  '⚠ The last line is not sentimental decoration. _She uses it because it is on_ tells the repairer what "working" means here, and a repairer who knows that will not replace the sound of it with a better one.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note you would leave with something you were having repaired (35 words or more).'));
out.push(p('**FOR ______________ — ______________, left ______________**   **What it does:** ______________.   **When it started:** ______________. It was ______________ on ______________ and ______________ on ______________.   **What I have already tried:** ______________.   **What you should know:** ______________.   **What I am asking for:** please ______________ if it is under ______________. If it is more, please ______________ — ring me on ______________.   **Why it matters:** ______________.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title with the thing and the date it was left, and your name at the end',
  '_Could you…?_ / _please_ + bare verb — polite, not an order',
  'A price limit **and** a telephone number',
  'What it does, when it started, and what you have already tried',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (60 words or more) for something real you would leave with somebody — a repairer, a tailor, a garage, a shoemaker, an office. All six parts, and the last one has to be true.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the person who has to do the work**. ★ _The line that saves me half an hour._  ✓ _One thing I still have to ring you about._  ? _What is your limit, exactly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"why it matters"** lines aloud, without the rest. **Which thing would you be most careful with?** That is what the line is for.'));
out.push(hw('Write the note **for something of yours that nobody could value properly** (40+ words) — a thing whose worth is not its price. Make the last line do the work.'));

// ======================= 20.6 =======================
out.push(pb());
out.push(h2('20.6  How much will it cost and how long will it take?'));
out.push(p('**Function:** asking about price and time for a job   ·   **Grammar:** _How much will it cost?_ / _How long will it take?_   ·   **Pronunciation:** prices and numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says six prices and six lengths of time, quickly. The class writes them. Then check — how many did everybody get?'));
out.push(board('How much will it cost? How long will it take?', 'cost = money · take = time'));
out.push(p('**b**  _cost_ or _take_? **1** How much will it ______? **2** How long will it ______? **3** It will ______ three days. **4** It will ______ forty thousand. **5** How much does it ______ to send a parcel?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour tell Rami to ask?   **A** for a cheaper price   **B** four specific questions   **C** for a written guarantee'));
out.push(p('**b**  Listen again. **1** What are the **four** questions?   **2** What does Nour say about the answer "it depends"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  Four questions before you leave it', [
  ['Rami', 'He says he\'ll look at it and let me know.'],
  ['Nour', 'Then you have agreed to nothing and you will find out the price when it is too late to say no. Four questions, every time, before you leave anything anywhere.'],
  ['Rami', 'Go on.'],
  ['Nour', 'One: how much will it cost? Two: how long will it take? Three: what happens if it costs more than you said — will you ring me first? Four: is there a guarantee, and for how long?'],
  ['Rami', 'And if he says "it depends"?'],
  ['Nour', '"It depends" is a real answer and you should accept it — but then you ask the next one: depends on what, and what is the most it could be? A good repairer will give you a number for the worst case. A bad one will not, and now you know which you are dealing with before you have paid anything.'],
  ['Rami', 'And the guarantee?'],
  ['Nour', 'Ask. Everybody is embarrassed to ask and it is the cheapest question there is. Three months is normal here. If somebody says no guarantee at all, that is information, not an insult.'],
  ['Rami', 'You have clearly done this a lot.'],
  ['Nour', 'I have paid for the same repair twice, in the same month, at the same shop, because I did not ask question four. Twenty-eight thousand. I have never forgotten it and I have never done it again.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four questions, and how to say them**',
  table(['question', 'what you are really asking'], [
    ['**How much will it cost?**', 'the price — _cost_ is for money, always'],
    ['**How long will it take?**', 'the time — _take_ is for time, always'],
    ['**Will you ring me if it\'s more than that?**', 'a limit, so you are not surprised'],
    ['**Is there a guarantee, and for how long?**', 'what happens if it breaks again'],
  ], [1.4, 1.5]),
  '⚠ **_cost_ and _take_ are not interchangeable.** ~~How much will it take?~~ ~~How long will it cost?~~ Money **costs**; a job **takes** time.',
  '⚠ ~~How much it will cost?~~ → _How much **will it** cost?_ The question word does not remove the inversion (Unit 14).',
  '**Talking about prices:** _about forty thousand_ · _under twenty_ · _between thirty and forty_ · _no more than fifty_ · _plus the parts_ · _with the parts_',
  '**Time:** _it will take three days_ · _about a week_ · _two days at most_ · _I\'ll have it by Thursday_ · _Thursday at the latest_',
  '**Practise:** Make the question.  1 (how much / it / cost) ______?  2 (how long / it / take) ______?  3 (you / ring me / if it is more) ______?  4 (there / be / a guarantee) ______?  5 (what / be / the most it could be) ______?',
  '**Useful phrases:** before you leave anything anywhere · "It depends" is a real answer. · depends on what? · the cheapest question there is · that is information, not an insult',
  '**Pronunciation.** 🔊 **Track 20.12** Prices and times in Syrian pounds run together and students lose them: _forty thousand_ · _twenty-eight thousand_ · _a hundred and twenty_ · _three days_ · _a fortnight_. Listen and write six of them, then check.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is leaving the thing on the card; B is the repairer and answers **"it depends"** to the first question. A must ask all four questions and get a number for the worst case. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'How much will it cost?'],
  ['B', 'It depends.'],
  ['A', 'Depends on what?'],
  ['B', '__________.'],
  ['A', 'And what is the most it could be?'],
  ['B', '__________.'],
  ['A', 'How long will it take?'],
  ['B', '__________.'],
  ['A', 'And will you ring me if it is more than __________?'],
  ['B', '__________.'],
  ['A', 'Is there a guarantee?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – you are the customer', 'Card B – you are the repairer'], [
  ['a laptop — the screen or the board, nobody knows yet', 'depends: whether the part is here or from Aleppo'],
  ['a washing machine that does not empty', 'worst case: 90,000 · normally 35,000'],
  ['shoes that need the whole sole', 'time: 2 days, or 9 if it comes from Aleppo'],
  ['your limit: 50,000 and you must say so', 'guarantee: 3 months, with the receipt only'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **four** answers. Would you have left the thing there?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something you have paid for without asking the price first — a repair, a taxi, a job at home, a service. Tell your partner what happened and what it cost you. Everybody has one.'));
out.push(p('**b**  Then practise the four questions with your partner for something you are actually going to have done, until you can say all four without reading them.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour gave Rami four questions to ask before leaving anything anywhere: how much will it cost, how long will it take, will you ring me if it is more, and is there a guarantee and for how long. She says "it depends" is a real answer — but then ask what it depends on and what is the most it could be, because a good repairer gives you a number for the worst case and a bad one does not. She says the guarantee question is the cheapest question there is. Her reason is that she once paid for the same repair twice in one month, twenty-eight thousand, because she did not ask it._'));
out.push(p('**Listener task:** write the amount somebody in this room has lost by not asking a question.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card from the club noticeboard. Answer the questions.'));
out.push(model([
  '**FOUR QUESTIONS BEFORE YOU LEAVE ANYTHING ANYWHERE** — Nour, who learned this expensively',
  'This card is for the person who hands something over and says "let me know". That person is about to find out the price when it is too late to say no, and that person was me, twice, in one month.',
  '**1. How much will it cost?** If the answer is "it depends", that is a real answer and you should take it. Then ask: depends on what, and what is the **most** it could be? A good repairer gives you a number for the worst case. A bad one does not, and you have learned something for nothing.',
  '**2. How long will it take?** Ask for a day, not a feeling. "Soon" is not a day. And expect the day to be wrong — ask for the latest it could be, not the earliest.',
  '**3. Will you ring me if it is more than that?** This is the question that protects you, and it costs nothing to ask. Give them a figure: "ring me if it goes over fifty."',
  '**4. Is there a guarantee, and for how long?** Everybody is embarrassed to ask this and it is the cheapest question there is. Three months is normal here. "No guarantee" is information, not an insult.',
  '**What it cost me not to ask question 4:** twenty-eight thousand, the same repair, the same shop, three weeks apart.',
]));
out.push(item('1', 'Who is this card for?'));
out.push(item('2', 'What should you do if the answer is "it depends"?'));
out.push(item('3', 'What did it cost Nour not to ask the fourth question?'));
out.push(writers([
  'A "questions to ask" card: **who it is for** → **numbered questions in bold** → **what to do when the answer is vague** → **what it cost you not to ask**.',
  'Handle the **vague answer** inside each question. A card that lists questions without saying what to do when somebody will not answer them is useless in the only situation that matters.',
  'Give the reader the **exact words**: _"ring me if it goes over fifty"_. People do not ask because they do not know how to say it, not because they do not know they should.',
  '⚠ End with the cost of not asking, and make it a real number. _Twenty-eight thousand_ does more than a paragraph of advice.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "questions to ask" card for a situation you know (35 words or more).'));
out.push(p('**______________ QUESTIONS BEFORE YOU ______________** — ______________   This card is for the person who ______________. That person was me.   **1. ______________?** If the answer is ______________, then ask: ______________?   **2. ______________?** Ask for ______________, not ______________.   **3. ______________?** This is the question that ______________. Give them ______________: "______________."   **4. ______________?** Everybody is embarrassed to ask this and ______________.   **What it cost me not to ask:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title saying what the questions are for, and who wrote it',
  '_cost_ for money and _take_ for time, every time · _How much **will it** cost?_ with the inversion',
  'Each question says what to do when the answer is vague',
  'A real number at the end, for what not asking cost',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full card (60 words or more) of questions to ask before something you know about — renting a flat, taking a job, buying something second-hand, agreeing to work, signing a form. Four questions, the vague answers handled, and what not asking cost you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody about to do that thing tomorrow**. ★ _The question I would never have asked._  ✓ _One question with no vague-answer plan._  ? _What happens if they get annoyed that I asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the cards into one booklet: **Questions to ask.** Then go round the room: **what has not asking cost each person?** Add up the class total. It is always more than anybody expects.'));
out.push(hw('Write the card for **the thing you are most likely to agree to without asking** (40+ words): four questions, and the one you know you will still not ask.'));

// ======================= 20.7 =======================
out.push(pb());
out.push(h2('20.7  Review & Mediate: What does the receipt say?'));
out.push(p('**Function:** explaining a repair receipt and a guarantee   ·   **Recycling:** Units 1–20   ·   **Exam practice:** A2 Key Reading Part 1, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** He works very good.  **2** He drives fastly.  **3** Could you say it more slow?  **4** They did the job quick.  **5** It\'s not still working.  **6** How much will it take?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the receipt Lina is given for the washing machine.'));
out.push(box(null, [
  '**AL-SHAM APPLIANCE REPAIRS**  ·  Mezzeh  ·  Job **4471**',
  '**Customer:** L. Haddad   ·   **Received:** 09/04   ·   **Returned:** 11/04',
  '**Appliance:** washing machine, Zanussi, 7 kg',
  '**Reported fault:** loud noise when turning; customer reported noise since January.',
  '**Work carried out:** drum bearing replaced (part). Drive belt replaced (part) — stretched, secondary to bearing. Pump checked — no fault found, not replaced.',
  '**Parts:** bearing 38,000 · belt 11,000',
  '**Labour:** 36,000',
  '**TOTAL: 85,000 SYP** — paid in full 11/04',
  '**GUARANTEE: 3 months on parts and labour, to 11/07.** Covers the **parts listed above only**. Does not cover a different fault, or damage from use.',
  '**The guarantee is void if the appliance is opened by anybody else.**',
  '**Keep this receipt.** Without it there is no guarantee. We do not keep copies.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lina explains the receipt to her mother. What does her mother want to know, and what does Lina say is the most important line?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  Keep this receipt', [
  ['Mother', 'Eighty-five thousand. For a noise.'],
  ['Lina', 'Let me read it properly, because it tells you what the eighty-five was. Thirty-eight for the bearing, eleven for the belt, thirty-six for the work. The parts are half of it.'],
  ['Mother', 'And what is a bearing?'],
  ['Lina', 'The round part the drum turns on. That is what was making the noise — the noise I told you about in January.'],
  ['Mother', 'So why the belt as well?'],
  ['Lina', 'Because the bearing going stretched the belt. It says so here: "stretched, secondary to bearing". That means the belt was not a second fault, it was caused by the first one. And they checked the pump and did not replace it, and it says that too, which is the line that tells you they are honest — a dishonest shop replaces the pump.'],
  ['Mother', 'And this part at the bottom?'],
  ['Lina', 'The guarantee. Three months, until the eleventh of July, on **these parts only**. If something else breaks in June, that is not covered.'],
  ['Mother', 'And if it is the same thing?'],
  ['Lina', 'Then it is free until July. But look at this line, and this is the one that matters: the guarantee is finished if anybody else opens the machine. So if it does anything at all before July, nobody touches it — not me, not my brother, nobody. It goes back to them.'],
  ['Mother', 'Where are you going to put that paper?'],
  ['Lina', 'In the drawer with the identity papers, because it says they do not keep copies, and without it the three months does not exist.'],
]));
out.push(sp());
out.push(box('Language box – explaining a receipt and a guarantee', [
  'Break the **total into its parts** first: _thirty-eight for the bearing, eleven for the belt, thirty-six for the work. The parts are half of it._ A total on its own always sounds like too much.',
  'Translate the **technical phrase**: _"stretched, secondary to bearing"_ → _the belt was not a second fault, it was caused by the first one._',
  'Point out what they **did not do**, and what that tells you: _they checked the pump and did not replace it — that is the line that tells you they are honest._',
  'Give the guarantee as a **date**, and say exactly what it covers: _three months, to the eleventh of July, on **these parts only**_.',
  'Find the line that **cancels** it and say it as an instruction: _if it does anything before July, nobody touches it._ Every guarantee has a line like this and almost nobody reads it.',
  'Say **where the paper is going to live**, because _we do not keep copies_ means the paper is the guarantee.',
  '**Useful phrases:** Let me read it properly. · The parts are half of it. · That means… · which is the line that tells you they are honest · and this is the one that matters · without it, it does not exist',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the receipts below and does **not** show it. A explains it to B and C, who ask about anything unclear and must each end by saying what they will do with the paper and what they will not do before the guarantee ends. Change roles with the other receipt.'));
out.push(table(['Receipt A – a telephone repair', 'Receipt B – shoes resoled'], [
  ['Job 2218 · screen replaced', 'Order 77 · both shoes, full sole'],
  ['Part 55,000 · labour 15,000 · TOTAL 70,000', 'Materials 18,000 · labour 12,000 · TOTAL 30,000'],
  ['Battery checked — no fault, not replaced.', 'Stitching on left shoe repaired at no charge.'],
  ['Guarantee 1 month on the screen only, to 14/05.', 'Guarantee 6 months on the soles, to 20/10.'],
  ['Void if the phone is opened by anybody else.', 'Does not cover water damage.'],
  ['We do not keep copies.', 'Bring this card, not a photograph of it.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the **total**, what the guarantee covers, the **date** it ends, and the one thing that would cancel it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a **real** receipt, guarantee or job sheet — in your bag, at home on your telephone, or one you remember. Explain it to your partner so completely that they could use it. They must ask: _what did the total go on?_, _what does the guarantee cover and not cover?_, _when does it end?_ and _what would cancel it?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Nour explained the receipt for her telephone screen. The total was seventy thousand and fifty-five of it was the part, which she says is the line that stops an argument at home. They checked the battery, did not replace it, and wrote that down. The guarantee is one month, not three, and only on the screen. The line that would cancel it is anybody else opening the telephone — which catches people, because the first thing most of us do is let a cousin look at it. So I decided I would keep the paper receipts, because hers says they do not keep copies and a photograph is not a receipt._'));
out.push(p('**Listener task:** did they break the total into its parts before anything else? What would cancel their guarantee?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 7));
out.push(p('For each question, choose the correct answer. What does the notice or message say?'));
out.push(model([
  '**1 · In a repair shop:**  Estimates are free. If you do not go ahead with the repair, there is nothing to pay.',
  '**2 · A message from Abu Nidal:**  Finished, but it cost more than I said — 62, not 50. I rang you twice before I did it.',
  '**3 · On a guarantee card:**  This guarantee is void if the appliance is opened by anybody other than ourselves.',
  '**4 · A message from Nour:**  Don\'t leave it anywhere until you\'ve asked four questions. The guarantee one is the one people forget.',
  '**5 · At the counter:**  We do not keep copies of receipts. Without your receipt there is no guarantee.',
  '**6 · A message from Rami:**  It isn\'t the same fault — the old one has gone. It just isn\'t working properly.',
]));
[
  '**1**     **A** You must pay for an estimate.   **B** An estimate costs nothing, even if you say no.   **C** The repair is free.',
  '**2**     **A** He did the work without telling her.   **B** He tried to tell her before doing the extra work.   **C** The price was the same as he said.',
  '**3**     **A** Anybody can open it.   **B** The guarantee ends if somebody else opens it.   **C** You must open it yourself.',
  '**4**     **A** Ask about the guarantee.   **B** Never leave anything anywhere.   **C** Four questions are too many.',
  '**5**     **A** They will print another receipt.   **B** You must keep the receipt yourself.   **C** The guarantee does not need a receipt.',
  '**6**     **A** The repair did not work.   **B** It has broken again.   **C** There is a new, smaller problem.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to the person who is paying, explaining the receipt (35 words or more). Use the receipt above.'));
out.push(p('It\'s back, and here is what the ______________ went on.   ______________ for the ______________, ______________ for the ______________, and ______________ for the work. The parts are ______________.   The ______________ was what made the noise. The ______________ was ______________ by it, so it isn\'t ______________.   They checked ______________ and ______________, which ______________.   The guarantee is ______________, until ______________, on ______________ only. And if it does anything before then, ______________ — it goes back to them.   The paper is ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A greeting or an opening line, and two short paragraphs',
  'Adverbs for how, comparative adverbs for requests · _cost_ for money and _take_ for time',
  'The total broken into its parts',
  'All three content points: what the money went on · what the guarantee covers and until when · what would cancel it',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend **Sam** has had something repaired and is not happy with it.',
  'Write an email to Sam.  In your email:  •  ask **what exactly is wrong with it now**  •  tell him **one thing he should ask the shop**  •  say **what you would do**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  He works very ___.   a) good   b) well   c) goodly',
  '2  She drives ___.   a) fastly   b) fast   c) more fast',
  '3  Could you say it ___?   a) more slow   b) more slowly   c) slowlier',
  '4  They did the job ___.   a) quick   b) quickly   c) more quick',
  '5  It was a ___ repair.   a) quickly   b) quick   c) well',
  '6  I brought it in on Monday and it\'s ___ not working.   a) still   b) again   c) yet',
  '7  It works, but not ___.   a) still   b) again   c) properly',
  '8  How ___ will it take?   a) much   b) long   c) cost',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 20.14** Ms Huda says what each person found out about a repair. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they found out'], [
  ['1  Omar ___', 'A  the problem was a small new one, not the old fault'],
  ['2  Lina ___', 'B  the shop charges more and explains nothing'],
  ['3  Rami ___', 'C  the machine was fixed but does not empty fully'],
  ['4  Ms Huda ___', 'D  it was cheaper to repair than to replace, and he showed her why'],
  ['5  Hiba ___', 'E  a thirty-second look saved her leaving it at all'],
  ['', 'F  the guarantee ended before he went back'],
  ['', 'G  the shop refused to look at it'],
], [1, 2]));
out.push(dlg('Track 20.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish, here is what this class has found out about repairs this fortnight. Omar has been to all three shops in Mezzeh and his verdict on Khalid Electronics is that he works quickly and well, charges about a third more than anybody else, and will not tell you what was wrong — he hands it back, says "it\'s fine", and turns away. Lina\'s washing machine came back with the noise gone, which was the job, and it now does not empty the last two centimetres, which was not. Rami went back in with "it\'s still not working" and found out that the old fault has gone completely and what he has now is a setting that takes forty seconds. I took the projector to Abu Nidal, who charged thirty-two thousand against a hundred and twenty for a new one and put the burned-out lamp on the counter so that I could see why. And Hiba asked for thirty seconds rather than a repair, and those thirty seconds told her the radio was worth leaving, which is the cleverest thing anybody has done this month.'],
]));
out.push(p('**C  Writing.** Write a short review of a service you have received (40+ words): how long it took against what they said, how well it was done, how much it cost against the alternative, and a verdict in two conditions — _If you…, If you…_'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ make adverbs with _-ly_, and know that _good_ → _well_ and _fast_ → _fast_',
  '☐ put the adverb after the verb, not before it',
  '☐ tell an adjective from an adverb (_a good job_ / _they did it well_)',
  '☐ ask for a change with _more slowly_, _more clearly_, _better_',
  '☐ use _still_, _again_ and _properly_ to mean three different problems',
  '☐ ask for a repair politely with _Could you have a look at…?_',
  '☐ ask the four questions before leaving anything anywhere',
  '☐ explain a receipt and a guarantee to somebody who cannot read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 21 – QUALITY AND COMPLAINTS', [
  'Unit 20 was about how a job is done. Unit 21 is about what to say when it is not good enough: _so_ and _such_, _too_ and _enough_, and how to complain in a way that gets something done.',
  'Before the next lesson: find **one** thing you have bought or been given that was the wrong size, the wrong colour or the wrong thing, and that you still have because you did not take it back. Bring it, or bring the story.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
