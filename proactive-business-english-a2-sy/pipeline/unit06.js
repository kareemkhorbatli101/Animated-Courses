// Proactive Business English A2 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'van · lorry · route · journey · driver · load · unload · pick up · drop off · delivery note · consignment · on board · depot · checkpoint · diversion · traffic · breakdown · spare wheel · fuel · tank · kilometre · motorway · service · on foot · delay · arrive';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 6  Deliveries and Transport'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  say how goods and people travel, and choose the right transport',
  '**6.2**  ask and say how long a journey takes and how far it is',
  '**6.3**  give and understand the rules of a yard or a site',
  '**6.4**  propose a plan to a colleague, and agree on one',
  '**6.5**  give the reason for a decision, and say what something is for',
  '**6.6**  explain a delay, and say when something will arrive',
  '**6.7**  Review & Mediate: tell a colleague what the delivery note and the road signs say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Transport at Sham Trading — before you start', [
  '**The small van** (1.5 tonnes) does Damascus and Jaramana: two or three drops a day. **The lorry** (7 tonnes) goes to Homs, Hama and Aleppo, and only when it is full.',
  'Goods travel **by van**, **by lorry** or with a **service** driver who takes a parcel for a small fee. People travel **by service**, **by bus** or **on foot** inside Mezzeh.',
  'Damascus → Homs is about **160 km**, two hours on a good day. Damascus → Aleppo is about **350 km**, five or six hours, more in winter.',
  'Every load leaves with a **delivery note**. Nothing leaves the yard without one — that rule is older than everybody in this book except Abu Yasser.',
], C.lyellow, C.orange));

// ======================= CYCLE 6.1 =======================
out.push(pb());
out.push(h2('6.1  It goes by lorry, not by van'));
out.push(p('**Function:** saying how goods and people travel   ·   **Grammar:** _by_ + transport; _on foot_   ·   **Pronunciation:** weak _by_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you come to work or to class? Ask three people and write the answers.'));
out.push(table(['Name', 'How?', 'How long?'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 1]));
out.push(p('**b**  Which does **not** take _by_? _bus · car · lorry · foot · service · taxi_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they deciding?   **A** which day to send   **B** which vehicle to use   **C** which driver to send'));
out.push(p('**b**  Listen again. **1** Why not the van?   **2** How does the small parcel for Hama travel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  Van or lorry?', [
  ['Abu Yasser', 'Nour, the Homs order. Sixty boxes, ten packets, four cartons. Van or lorry?'],
  ['Nour', 'Can it go by van?'],
  ['Abu Yasser', 'It can go by van. It shouldn\'t. The van is one and a half tonnes and this is nearly two.'],
  ['Nour', 'Then by lorry.'],
  ['Abu Yasser', 'By lorry. And the lorry only goes when it is full, so we put the Hama pallets on the same load.'],
  ['Nour', 'And the small parcel for Hama — the two folders?'],
  ['Abu Yasser', 'Two folders don\'t travel by lorry. They go with a service driver. Five thousand, there in two hours.'],
  ['Nour', 'And he takes it to the shop?'],
  ['Abu Yasser', 'He takes it to the garage in Hama. From the garage it goes on foot — two streets. Write that on the note, or the customer waits at home all day.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – by + transport, and on foot**',
  table(['Pattern', 'Examples'], [
    ['**by** + transport (no _a_, no _the_)', 'by van · by lorry · by bus · by car · by service · by taxi · by air · by sea'],
    ['**on foot**', 'From the garage it goes **on foot**.'],
    ['**in / on** + a particular vehicle', '**in** the small van · **on** the two o\'clock bus'],
    ['**with** + a person', 'It goes **with** a service driver.'],
  ], [1.4, 2.2]),
  '⚠ _by van_, not ~~by a van~~ or ~~by the van~~. But if you mean **that** vehicle: _**in the** small van_.',
  '⚠ **on foot**, not ~~by foot~~. _I walk_ is usually better and shorter.',
  '⚠ _It goes **by** lorry_ (how) · _It goes **to** Homs_ (where) · _It goes **on** Tuesday_ (when). Three different words, one sentence: _It goes **to** Homs **by** lorry **on** Tuesday._',
  '**Practise:** Complete the sentences.',
  '1 The boxes go ___ lorry.  2 From the garage it goes ___ foot.  3 Nadia comes to work ___ service.  4 The folders go ___ a service driver.  5 It goes ___ Homs ___ lorry ___ Tuesday.',
  '**Useful phrases:**  Van or lorry?  ·  It can, but it shouldn\'t.  ·  …only goes when it is full.  ·  …don\'t travel by lorry.  ·  Write that on the note.',
  '**Pronunciation – weak _by_.** 🔊 **Track 6.2** Listen and repeat: _by van_ /baɪ væn/ · _by lorry_ /baɪ ˈlɒri/ · _by service_ /baɪ ˈsɜːvɪs/. _By_ is short and the transport word is strong.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has something to send; B chooses the transport and says why. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. __________ or __________?'],
  ['B', 'Can it go by __________?'],
  ['A', 'It can. It shouldn\'t. __________ is __________ and this is __________.'],
  ['B', 'Then by __________.'],
  ['A', 'By __________. And __________ only goes when __________, so we __________.'],
  ['B', 'And the small __________?'],
  ['A', '__________ don\'t travel by __________. They go __________.'],
]));
out.push(table(['Role card 1 — a pharmacy wholesaler', 'Role card 2 — a furniture workshop'], [[
  'To send: 40 boxes of medicine to Latakia (cool, urgent) · one small box to Homs · a fridge unit to Tartous. Options: refrigerated van, service driver, hired lorry.',
  'To send: six doors to Jaramana · one chair to a customer in Mezzeh · twenty chairs to Aleppo. Options: pick-up, van, lorry, on foot with a trolley.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write each item and how it travels. Was anything sent the expensive way?'));
out.push(PHRASE_CARD(['Van or lorry?', 'Can it go by…?', 'It can, but it shouldn\'t.', 'only when it is full', 'on foot', 'with a service driver']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three** things you have sent or received — a document, a parcel, furniture, money. Tell two colleagues how each one travelled and whether it was the right choice.'));
out.push(table(['What', 'How it travelled', 'Right choice?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.6, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ sent _______ by _______ to _______. It took _______. He / She says it was / wasn\'t the right choice, because _______._'));
out.push(p('**Listener task:** write the cheapest way anybody in the class has sent something.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _by a van_ and _by foot_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the delivery note Nour writes, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — DELIVERY NOTE**   ·   **No. 0411-1**   ·   11 April',
  '**To:** Tarabishi Stores, Souq al-Hamidiyeh branch, Homs   ·   **Tel:** 0955 612 043',
  '**By:** lorry (reg. 445621), driver F. Saeed   ·   **Leaves:** Tuesday 07.00   ·   **Expected:** Tuesday 10.00',
  '60 — small boxes   ·   10 packets — A4 paper   ·   4 cartons — gloves, large',
  '**4 items on this note. Please count them before you sign.**',
  'Received by: ____________________   Date and time: ____________   Signature: ____________',
  'Anything damaged or missing must be written **on this note before signing**. A telephone call afterwards is not enough.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How do the goods travel, and who is driving?'));
out.push(item('2', 'What must the customer do before signing?'));
out.push(item('3', 'What is not enough, if something is damaged?'));
out.push(box('Writer\'s box', [
  '**Shape of a delivery note:** the company and the note number → **to** whom, with a telephone number → **by** what, with the vehicle and the driver → when it leaves and when it is expected → one line per item → the number of items, in words → the signature block → the rule about damage.',
  'Put **the number of items** in its own line. The person signing counts to that number; without it they count to whatever they see.',
  'Name the **vehicle and the driver**. When a load goes missing, that line is the whole investigation.',
  '⚠ The damage rule must say **before signing**, and say what is **not** enough. Everyone who has ever signed for a broken box has telephoned afterwards and been told it is too late.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a delivery note for something real or invented (25 words or more). Use the frame.'));
out.push(p('**______________ — DELIVERY NOTE**  ·  **No. ______**  ·  ______.  **To:** ______________  ·  **Tel:** ______________.  **By:** ______________, driver ______________  ·  **Leaves:** ______________  ·  **Expected:** ______________.  ______ — ______________  ·  ______ — ______________.  **______ items on this note. Please ______________.**  Received by: ______  Signature: ______.  Anything ______________ must be ______________ before signing.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "Everything is there except the driver\'s name. And can you put the number of items on its own line?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Be the person signing at the other end. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_by_ + transport, with the vehicle and the driver', ''],
  ['The number of items on its own line', ''],
  ['A time it leaves **and** a time it is expected', ''],
  ['The damage rule says _before signing_', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about how something important travelled to you — a person, a parcel, news, a piece of furniture (35 words or more). Use at least four transport expressions.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I could follow the whole journey._   ✓ _How long did the… part take?_   ? _a question about the journey_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find the journey with the most changes of transport, and count them.'));
out.push(box('Homework', ['Write your final text. Then write six sentences about how six different things reach your home — water, bread, the post, electricity, news, visitors (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.2 =======================
out.push(pb());
out.push(h2('6.2  How long does it take to Aleppo?'));
out.push(p('**Function:** asking and saying how long and how far   ·   **Grammar:** _how long / how far_; _it takes_   ·   **Pronunciation:** _it takes_ and times'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner: _How far is it from your home to here? How long does it take?_ Write the answers.'));
out.push(p('**b**  Which question goes with which answer? _How long…? · How far…? · How often…?_   →   _About 160 kilometres. · Two hours. · Twice a week._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who wants to know about the journey?   **A** a customer   **B** a new driver   **C** Mr Ayoub'));
out.push(p('**b**  Listen again. **1** How far is it to Aleppo?   **2** How long does it take in winter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  Briefing a new driver', [
  ['Driver', 'Abu Yasser, I\'ve done Homs, but never Aleppo. How far is it?'],
  ['Abu Yasser', 'About three hundred and fifty kilometres on the motorway.'],
  ['Driver', 'And how long does it take?'],
  ['Abu Yasser', 'Five hours if the road is good. Six with a loaded lorry. In winter, seven — and you don\'t drive it in the dark.'],
  ['Driver', 'Seven. And how long is the stop at the checkpoint?'],
  ['Abu Yasser', 'That depends. Ten minutes, sometimes an hour. Have the delivery note in your hand before you stop, not under the seat.'],
  ['Driver', 'And Homs? How far is Homs from here?'],
  ['Abu Yasser', 'A hundred and sixty. Two hours, two and a half with a load.'],
  ['Driver', 'So Aleppo is more than twice as far.'],
  ['Abu Yasser', 'More than twice as far, and three times the trouble. Leave at five, not at seven.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how far, how long, it takes**',
  table(['Question', 'Answer'], [
    ['**How far** is it (from ___ to ___)?', 'It\'s **about** 350 kilometres.  ·  **About** two hours\' drive.'],
    ['**How long does it take**?', 'It **takes** five hours.  ·  Five hours **if** the road is good.'],
    ['**How long** is the stop?', 'Ten minutes, **sometimes** an hour.  ·  That **depends**.'],
    ['Comparing', 'Aleppo is **more than twice as far as** Homs.'],
  ], [1.4, 2.2]),
  '**it takes** + time: _It **takes** two hours._  With a person: _It **takes me** two hours._',
  '⚠ _How long **does it take**?_ — not ~~how long it takes?~~ in a question, and no **-s** on _take_ after _does_.',
  '⚠ _far_ is for distance, _long_ for time. _How far_ → kilometres; _how long_ → hours.',
  '⚠ Always say **what it depends on**: _five hours **if the road is good**_. A journey time with no condition is a promise.',
  '**Practise:** Write the question.',
  '1 About 160 kilometres. → ______  2 Two hours. → ______  3 Ten minutes, sometimes an hour. → ______  4 It takes me forty minutes. → ______  5 Twice a week. → ______',
  '**Useful phrases:**  How far is it?  ·  How long does it take?  ·  …if the road is good  ·  That depends.  ·  twice as far as…  ·  Leave at five, not at seven.',
  '**Pronunciation – _it takes_.** 🔊 **Track 6.4** Listen and repeat: _it takes_ /ɪt ˈteɪks/ · _how long does it take?_ /haʊ lɒŋ dəzɪt ˈteɪk/ · _two and a half hours_ /ˈtuː ənə hɑːf ˈaʊəz/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is new and asks about a journey; B briefs them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I\'ve done __________, but never __________. How far is it?'],
  ['B', 'About __________ on __________.'],
  ['A', 'And how long does it take?'],
  ['B', '__________ if __________. __________ with __________. In winter, __________.'],
  ['A', 'And how long is __________?'],
  ['B', 'That depends. __________, sometimes __________. Have __________ before __________.'],
  ['A', 'So __________ is __________ as far as __________.'],
  ['B', '__________. Leave at __________, not at __________.'],
]));
out.push(table(['Role card 1 — a bus company', 'Role card 2 — a courier on a motorbike'], [[
  'Damascus–Tartous 250 km, 3.5 hours, 4.5 in summer traffic. Damascus–Suwayda 100 km, 1.5 hours. Stops: 20 minutes at the halfway café, longer on a Friday.',
  'Across Damascus: 8–12 km, 25 minutes normally, 50 at five o\'clock. To Jaramana: 20 minutes. Waiting at a building: usually 5 minutes, sometimes 20 if there is no lift.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their briefing for the class – **without the book**.'));
out.push(p('**Listener task:** write the distance, the normal time and the bad-day time. Did the speaker say what it depends on?'));
out.push(PHRASE_CARD(['How far is it?', 'How long does it take?', 'About…', '…if the road is good', 'That depends.', 'twice as far as…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Brief **two** colleagues on a journey you really know — to your home town, to a hospital, to the border, to your old school. Give distance, time, the bad-day time and one piece of advice.'));
out.push(table(['Journey', 'How far', 'How long', 'Advice'], [['', '', '', ''], ['', '', '', '']], [1.4, 1, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ to _______ is about _______. It takes _______, or _______ if _______. The advice is _______._'));
out.push(p('**Listener task:** write the longest journey in the class, and the best piece of advice.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how long is it to Homs?_ and _it takes two hours to me_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the route sheet Abu Yasser gives a new driver, and answer the questions.'));
out.push(box(null, [
  '**ROUTE SHEET — DAMASCUS to ALEPPO**   for a loaded lorry',
  '**Distance:** about 350 km by the motorway.   **Normal time:** 5 hours empty, 6 loaded.   **Winter / bad road:** 7 hours. **Never in the dark.**',
  '**Leave:** 05.00, not 07.00. Two hours earlier at the start saves three at the other end.',
  '**Fuel:** full tank before you leave the yard, not on the road. The station at the halfway point is often closed in the afternoon.',
  '**Checkpoints:** three on this route. 10 minutes each on a good day, up to an hour. **Delivery note in your hand before you stop**, not under the seat.',
  '**Stops:** one proper stop at the halfway café, 20 minutes. Eat there, not in the cab.',
  '**On arrival:** telephone the yard before you unload, so Nour can tell the customer. Unload, get the note signed, **count with them**, and telephone again when you leave.',
  'If anything changes — a diversion, a breakdown, a closed road — telephone first and think afterwards. Nobody has ever been shouted at for telephoning too early.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How much longer does the journey take in winter than when the lorry is empty?'));
out.push(item('2', 'Why must the tank be filled in the yard?'));
out.push(item('3', 'What is the rule if anything changes on the road?'));
out.push(box('Writer\'s box', [
  '**Shape of a route sheet:** distance → normal time → bad-day time → when to leave, with the reason → fuel → checkpoints → stops → what to do on arrival → the rule for when things go wrong.',
  'Give a **normal time and a bad time**, always both. One time alone is read as a promise and then argued about.',
  'Explain the reason inside the instruction: _full tank before you leave, **not on the road** — the halfway station is often closed._ A rule with its reason survives the first time it is inconvenient.',
  '⚠ End with the rule for **when things go wrong**, and make it easy to obey: _telephone first and think afterwards_. A driver who is afraid to telephone early is a driver who telephones too late.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a route sheet for a journey somebody else would have to make (25 words or more). Use the frame.'));
out.push(p('**ROUTE SHEET — ______________ to ______________**   for ______________.  **Distance:** about ______.  **Normal time:** ______.  **Bad day:** ______.  **Leave:** ______, because ______________.  **______________:** ______________, not ______________.  **Stops:** ______________.  **On arrival:** ______________.  If anything changes, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Imagine you are making the journey tomorrow for the first time. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A distance **and** a time', ''],
  ['A normal time **and** a bad-day time', ''],
  ['At least one rule with its reason', ''],
  ['What to do when something goes wrong', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _if anything changes_ line. The class says whether a nervous new person would actually do it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the longest journey you have made (35 words or more). Say how far, how long, what made it longer, and what you would do differently.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The part I could feel._   ✓ _How far was it altogether?_   ? _a question about the journey_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the class\'s journeys on the board, in order of length. Is the longest one the hardest one?'));
out.push(box('Homework', ['Write your final text. Then write five _how far_ and five _how long_ questions about your own town and answer them (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.3 =======================
out.push(pb());
out.push(h2('6.3  You mustn\'t park at the loading door'));
out.push(p('**Function:** giving and understanding the rules of a yard or site   ·   **Grammar:** _must / mustn\'t_   ·   **Pronunciation:** _mustn\'t_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three rules of this building and three rules of your workplace. Which would you keep if you were the manager?'));
out.push(p('**b**  Which is a rule and which is advice? _You mustn\'t smoke here. · You shouldn\'t carry it alone. · You must wear the jacket. · It\'s better to come early._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Abu Yasser talking to?   **A** Nour   **B** a driver from another company   **C** Mr Ayoub'));
out.push(p('**b**  Listen again. **1** Where must the driver not park, and why?   **2** What must he wear?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  The rules of the yard', [
  ['Abu Yasser', 'Before you unload — three rules. You mustn\'t park at the loading door.'],
  ['Driver', 'But that\'s where the boxes go.'],
  ['Abu Yasser', 'That\'s where the forklift comes out, every four minutes. You park on the left, by the wall, and we bring the trolley to you.'],
  ['Driver', 'Fine. And?'],
  ['Abu Yasser', 'You must wear the yellow jacket in the yard. It\'s on the hook inside the gate. Yes, in August too.'],
  ['Driver', 'And the third?'],
  ['Abu Yasser', 'You mustn\'t walk in the yellow square. That\'s the forklift. If you need to cross, go round by the wall — it\'s eight steps more.'],
  ['Driver', 'Eight steps. All right.'],
  ['Abu Yasser', 'And one thing that isn\'t a rule: don\'t leave your keys in the cab. Nobody will take your lorry. But the boys play, and a lorry is not a toy.'],
  ['Driver', 'Understood. Jacket, left of the gate, round the square.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – must / mustn\'t**',
  table(['Form', 'Meaning', 'Example'], [
    ['**must** + verb', 'it is necessary — the rule says so', 'You **must wear** the yellow jacket.'],
    ['**mustn\'t** + verb', 'it is forbidden — do not do it', 'You **mustn\'t park** at the loading door.'],
    ['**don\'t have to** + verb', 'it is not necessary — you may if you like', 'You **don\'t have to** help us unload.'],
    ['**should / shouldn\'t**', 'advice, not a rule', 'You **shouldn\'t** carry it alone.'],
  ], [1.2, 1.4, 2]),
  '⚠ **mustn\'t ≠ don\'t have to.** _You **mustn\'t** park there_ = it is forbidden. _You **don\'t have to** park there_ = you can park somewhere else if you prefer. This is the most expensive mistake in the unit.',
  '⚠ No **to** after _must_: _You must **wear** the jacket_, not ~~must to wear~~. No **-s**: _He must **wear**_.',
  '**Practise:** _must_, _mustn\'t_ or _don\'t have to_?',
  '1 You ___ wear the jacket in the yard.  2 You ___ walk in the yellow square.  3 You ___ help us unload — we have two men.  4 Drivers ___ have the delivery note in their hand.  5 You ___ park at the loading door.',
  '**Useful phrases:**  Before you unload — three rules.  ·  That\'s where…  ·  You park…, and we…  ·  Yes, in August too.  ·  one thing that isn\'t a rule  ·  Understood.',
  '**Pronunciation – mustn\'t.** 🔊 **Track 6.6** Listen. The first **t** is silent: _mustn\'t_ /ˈmʌsnt/. Repeat: _you mustn\'t park · you mustn\'t walk there · you mustn\'t sign it_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the rules of a place; B asks why and gets a real answer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Before you __________ — three rules. You mustn\'t __________.'],
  ['B', 'But that\'s where __________.'],
  ['A', 'That\'s where __________. You __________, and we __________.'],
  ['B', 'Fine. And?'],
  ['A', 'You must __________. It\'s __________.'],
  ['B', 'And the third?'],
  ['A', 'You mustn\'t __________. If you need to __________, __________.'],
  ['B', 'All right.'],
  ['A', 'And one thing that isn\'t a rule: __________.'],
]));
out.push(table(['Role card 1 — a kitchen', 'Role card 2 — a building site'], [[
  'Rules: hands washed before touching food · nothing on the floor near the fryer · the back door stays shut (cats). Not a rule: tie your hair back, but everyone does.',
  'Rules: helmet everywhere, even for five minutes · nobody walks under the crane · no ladder without a second person. Not a rule: drink water every hour, but in July it should be.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their briefing for the class – **without the book**.'));
out.push(p('**Listener task:** write the three rules and the reason for one of them. Which rule would you forget first?'));
out.push(PHRASE_CARD(['You mustn\'t…', 'You must…', 'That\'s where…', 'If you need to…', 'one thing that isn\'t a rule', 'Understood.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Brief **two** colleagues on the rules of a place you know well — your workplace, your home, a mosque, a hospital, a school. Three rules, each with its reason, and one thing that is not a rule.'));
out.push(table(['Place', 'Rule', 'Reason'], [['', '', ''], ['', '', ''], ['', '', '']], [1.2, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At _______ you must _______, because _______. You mustn\'t _______. You don\'t have to _______, but most people do._'));
out.push(p('**Listener task:** write the rule that surprised you, and the rule everybody\'s workplace has.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _mustn\'t_ where _don\'t have to_ is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice by the gate, and answer the questions.'));
out.push(box(null, [
  '**DRIVERS — PLEASE READ BEFORE YOU UNLOAD**   Sham Trading Co., Mezzeh yard',
  '**1  You must wear a high-visibility jacket in the yard.** There is one on the hook inside the gate if you have not got your own. This is the rule in August as well as in January.',
  '**2  You mustn\'t park in front of the loading door.** The forklift uses it every few minutes. Park on the left, next to the wall; we will bring a trolley to your vehicle.',
  '**3  You mustn\'t walk in the yellow square.** It is the forklift area. To cross the yard, go round by the wall — it takes eight steps longer.',
  '**4  You must have the delivery note in your hand before the goods come off.** We count with you and you sign here, not later at home.',
  'You **don\'t have to** help us unload, and you don\'t have to wait inside — there is tea in the small room and we will call you.',
  'Questions: Abu Yasser, or extension 212.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the two things drivers **must** do?'));
out.push(item('2', 'Where must they park instead, and what will the warehouse do?'));
out.push(item('3', 'Name two things drivers do **not** have to do.'));
out.push(box('Writer\'s box', [
  '**Shape of a rules notice:** who it is for and when to read it → numbered rules, each with **the rule, the reason, and what to do instead** → a short list of what you **don\'t have to** do → who to ask.',
  'Every _mustn\'t_ needs an **instead**. A rule that only forbids leaves a driver standing in a yard with a load and no plan.',
  'Include the _don\'t have to_ list. It makes the notice read as information rather than as suspicion, and people obey it better.',
  '⚠ Answer the obvious objection inside the rule: _in August as well as in January_ · _it takes eight steps longer_. The objection will be made; answering it first costs one line.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a rules notice for a place you know (25 words or more). Use the frame.'));
out.push(p('**______________ — PLEASE READ BEFORE ______________**   ______________.  **1  You must ______________.** ______________.  **2  You mustn\'t ______________.** ______________. Instead, ______________.  **3  You mustn\'t ______________.** ______________.  You **don\'t have to** ______________, and you don\'t have to ______________.  Questions: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read as somebody who is in a hurry and does not want to obey. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every _mustn\'t_ has an _instead_', ''],
  ['Every rule has a reason', ''],
  ['A _don\'t have to_ list', ''],
  ['Somebody to ask', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one rule. The class invents the objection, and says whether the notice answers it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule you think is wrong, or a rule you would add, where you work or live (35 words or more). Say what the rule is, why it exists, and what you would do instead.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I agree with this._   ✓ _What would happen if…?_   ? _a question about the reason_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find a rule that exists for a reason nobody remembers. Should it stay?'));
out.push(box('Homework', ['Write your final text. Then write five sentences with _must_, five with _mustn\'t_ and three with _don\'t have to_ about a place you know well (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.4 =======================
out.push(pb());
out.push(h2('6.4  Why don\'t we send it on Wednesday?'));
out.push(p('**Function:** proposing a plan and agreeing on one   ·   **Grammar:** _Let\'s / Why don\'t we / Shall we_   ·   **Pronunciation:** the falling suggestion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make three suggestions about this lesson, one with each: _Let\'s… · Why don\'t we…? · Shall we…?_'));
out.push(p('**b**  How do you say **no** to a suggestion without saying _no_? Give two ways.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** the boxes are late   **B** the driver is ill   **C** the customer has moved'));
out.push(p('**b**  Listen again. **1** What does Nour suggest first?   **2** What do they agree in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  Which day do we send?', [
  ['Nour', 'Mr Ayoub, the small boxes arrive from Aleppo on Tuesday afternoon. The Homs lorry leaves Tuesday morning.'],
  ['Mr Ayoub', 'So we can\'t send the boxes on Tuesday.'],
  ['Nour', 'Why don\'t we send the whole order on Wednesday?'],
  ['Mr Ayoub', 'Mr Tarabishi opens his new branch on Wednesday. He wants the boxes on Tuesday evening.'],
  ['Nour', 'Then let\'s split it. The paper and the gloves go Tuesday morning, and the boxes go Tuesday evening with a service driver.'],
  ['Mr Ayoub', 'Sixty boxes by service? They won\'t fit.'],
  ['Nour', 'You\'re right. Shall we ask Khalil in Homs for sixty boxes, just this once, and pay a little more?'],
  ['Mr Ayoub', 'Now that is an idea. How much more?'],
  ['Nour', 'About four thousand. For a new branch opening, that\'s nothing.'],
  ['Mr Ayoub', 'Do that. And telephone Mr Tarabishi before you order, so he knows we moved for him.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – making and answering suggestions**',
  table(['Making one', 'Saying yes', 'Saying no, and offering'], [
    ['**Let\'s** split it.', 'Good idea.  ·  Do that.', 'They won\'t fit. **Shall we** …instead?'],
    ['**Why don\'t we** send it on Wednesday?', 'Now **that** is an idea.', 'We can\'t — he opens on Wednesday.'],
    ['**Shall we** ask Khalil?', 'Yes, let\'s.', 'You\'re right. What about…?'],
    ['**How about** asking Khalil?', 'Why not?', 'I\'d rather we…'],
  ], [1.3, 1.1, 1.8]),
  '**Let\'s / Why don\'t we / Shall we / How about** are followed by different forms: _**Let\'s send** it_ · _**Why don\'t we send** it?_ · _**Shall we send** it?_ · _**How about sending** it?_ (**-ing** after _how about_).',
  '⚠ A good _no_ names the **obstacle**, then makes the next suggestion. _They won\'t fit_ followed by silence ends the conversation; followed by _shall we…?_ it moves it on.',
  '**Practise:** Make a suggestion with each form.',
  '1 (Let\'s) split the order → ______  2 (Why don\'t we) ask Khalil → ______  3 (Shall we) telephone first → ______  4 (How about) send it by service → ______  5 (say no + offer) sixty boxes by service → ______',
  '**Useful phrases:**  Why don\'t we…?  ·  Then let\'s…  ·  Shall we…, just this once?  ·  Now that is an idea.  ·  Do that.  ·  …so he knows we moved for him.',
  '**Pronunciation – the falling suggestion.** 🔊 **Track 6.8** Listen. A suggestion **falls** at the end — it is not really a question: _Why don\'t we send it on ↘Wednesday._ Repeat the five suggestions.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a problem and makes suggestions; B blocks the first two with a real reason and accepts the third. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ arrives on __________. __________ leaves on __________.'],
  ['B', 'So we can\'t __________.'],
  ['A', 'Why don\'t we __________?'],
  ['B', '__________ — __________.'],
  ['A', 'Then let\'s __________.'],
  ['B', '__________? They won\'t __________.'],
  ['A', 'You\'re right. Shall we __________, just this once?'],
  ['B', 'Now that is an idea. Do that. And __________ first, so __________.'],
]));
out.push(table(['Role card 1 — a wedding and a broken oven', 'Role card 2 — an exam and a closed road'], [[
  'Problem: the oven breaks two days before 200 people eat. Blocked: the neighbour\'s oven is too small; hiring one takes a week. Possible: cook at the restaurant at night and pay the owner.',
  'Problem: the road to the exam centre is closed on the day. Blocked: no bus goes round; a taxi is too expensive for five people. Possible: go the evening before and stay with a cousin.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three suggestions. Which one solved it, and why did the first two fail?'));
out.push(PHRASE_CARD(['Why don\'t we…?', 'Then let\'s…', 'Shall we…?', 'They won\'t…', 'Now that is an idea.', 'Do that.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In **threes**, solve a real problem somebody in the group has — a timetable clash, a journey, a shortage, a family event. Everybody must make at least **two** suggestions, and no suggestion may be refused without a reason.'));
out.push(table(['The problem', 'Suggestions made', 'What we agreed'], [['', '', ''], ['', '', '']], [1.4, 2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The problem was _______. We said _______ and _______, but _______. In the end we agreed to _______._'));
out.push(p('**Listener task:** write the suggestion you would have made that nobody made.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how about send_ and _let\'s to go_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Nour sends to the customer, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr F. Tarabishi   **From:** Nour Mansour, Sham Trading   **Subject:** Your boxes for Wednesday — a change in the plan',
  'Dear Mr Tarabishi,',
  'Congratulations on the new branch. I am writing before you ask, because the plan has changed and you should hear it from us.',
  '**The problem:** our small boxes come from Aleppo on **Tuesday afternoon**, and the Homs lorry leaves on **Tuesday morning**. If we wait for our own boxes, you get them on Wednesday evening — after you open.',
  '**What we are doing:** we are buying sixty boxes from Khalil in Homs, just for this order. They will be at your branch on **Tuesday at 4 pm**, with the paper and the gloves from our own lorry in the morning.',
  '**What it costs you:** nothing. The difference is about 4,000 SYP and it is ours, not yours.',
  'If 4 pm on Tuesday is too late for you, telephone me today and we will find something else.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is Nour writing before the customer asks?'));
out.push(item('2', 'What exactly arrives on Tuesday, and when?'));
out.push(item('3', 'Who pays the extra 4,000, and why does Nour say so?'));
out.push(box('Writer\'s box', [
  '**Shape of a "change of plan" message:** a human first line → **the problem**, in two sentences with the dates → **what we are doing**, with the new time → **what it costs you** → an escape: what to do if the new plan is still no good.',
  'Write **before** they ask. A change they hear from you is a company looking after them; the same change discovered on Wednesday morning is a company that let them down.',
  'Say plainly **who pays**. If the answer is _we do_, say it — it is the cheapest goodwill in business.',
  '⚠ Always end with the escape. _If 4 pm is too late, telephone me today_ turns a decision you made alone into a decision they can still change.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "change of plan" message about something real or invented (25 words or more). Use the frame.'));
out.push(p('Dear ______________, ______________. I am writing before you ask, because ______________.  **The problem:** ______________.  **What we are doing:** ______________. It will be ______________ at ______________.  **What it costs you:** ______________.  If ______________, please ______________ today and ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the customer, on a busy morning. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The problem is clear in two sentences', ''],
  ['The new plan has a day **and** a time', ''],
  ['It says who pays', ''],
  ['There is an escape, with a deadline', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what it costs you_ line. The class says which message they would trust next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the message you would send to change a plan with a friend or a relative (35 words or more). Say what happened, what you suggest instead, and give them a real choice.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the person receiving it. Write on a slip:  ★ _I wouldn\'t mind at all._   ✓ _Can you suggest a second time?_   ? _what I would still worry about_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three messages. Which one makes it easiest to say **no**? That is usually the one people say yes to.'));
out.push(box('Homework', ['Write your final message. Then write three different suggestions for the same problem, one with _Let\'s_, one with _Why don\'t we_ and one with _How about_ (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.5 =======================
out.push(pb());
out.push(h2('6.5  We send the small van to save the fuel'));
out.push(p('**Function:** giving the reason for a decision, and saying what something is for   ·   **Grammar:** _because_; _to_ + purpose   ·   **Pronunciation:** linking _to_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish each sentence twice, once with _because_ and once with _to_: _We leave at five ______ · I came early ______ · We use the small van _______'));
out.push(p('**b**  Which answers **why**, and which answers **what for**? _because the road is closed · to save fuel · because it is cheaper · to tell the customer_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mr Ayoub asking about?   **A** the price   **B** the choice of vehicle and day   **C** the driver'));
out.push(p('**b**  Listen again. **1** Why the small van?   **2** Why Tuesday and not Monday?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  Why the small van, why Tuesday?', [
  ['Mr Ayoub', 'Nour, you\'ve sent the Jaramana order in the small van. Why not the lorry? The lorry was in the yard.'],
  ['Nour', 'Because it\'s four boxes, and the lorry drinks fuel. The small van does Jaramana and two more drops on the same trip.'],
  ['Mr Ayoub', 'Good. And you\'ve put the Hama pallets on Tuesday, not Monday.'],
  ['Nour', 'Yes — to put them on the same load as Homs. The lorry only goes when it is full, so one journey instead of two.'],
  ['Mr Ayoub', 'And the customer in Hama agreed to wait a day?'],
  ['Nour', 'I telephoned him to ask first. He said Tuesday was better for him, because his man is away on Monday.'],
  ['Mr Ayoub', 'So the day we chose to save fuel is also the day he wanted.'],
  ['Nour', 'It was luck, not planning. But I telephoned, and that wasn\'t luck.'],
  ['Mr Ayoub', 'No, it wasn\'t. Write both reasons on the sheet — the fuel and the customer. In six months nobody remembers why.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – because and to (purpose)**',
  table(['Pattern', 'Answers', 'Example'], [
    ['**because** + subject + verb', 'why?', 'We use the small van **because it\'s four boxes**.'],
    ['**to** + verb', 'what for?', 'We send it Tuesday **to put it on the same load**.'],
    ['**so that** + subject + verb', 'what for? (with a new subject)', 'I telephoned **so that he could choose**.'],
    ['**for** + noun', 'what for? (a thing)', 'The trolley is **for the heavy boxes**.'],
  ], [1.5, 1.2, 2]),
  '⚠ **to + verb**, never ~~for + verb~~: _I telephoned **to ask**_, not ~~for ask~~. But **for + noun** is right: _I telephoned **for the price**._',
  '⚠ _because_ needs a **subject and a verb** after it: _because **it is** cheaper_, not ~~because cheaper~~.',
  '⚠ Written reasons survive; spoken ones do not. _In six months nobody remembers why._',
  '**Practise:** _because_, _to_ or _for_?',
  '1 We use the small van ___ save fuel.  2 We use the small van ___ it\'s only four boxes.  3 I telephoned ___ ask him first.  4 I telephoned ___ the price.  5 We go on Tuesday ___ the lorry is full that day.',
  '**Useful phrases:**  Why not…?  ·  Because…  ·  …to put them on the same load  ·  I telephoned to ask first.  ·  It was luck, not planning.  ·  Write both reasons.',
  '**Pronunciation – linking _to_.** 🔊 **Track 6.10** Listen and repeat: _to save fuel_ /tə ˈseɪv ˈfjuːəl/ · _to ask first_ /tʊ ˈɑːsk ˈfɜːst/. _To_ is /tə/ before a consonant and /tʊ/ before a vowel.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A questions a decision; B gives two reasons — one with _because_ and one with _to_. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You\'ve __________. Why not __________?'],
  ['B', 'Because __________. And __________ does __________ on the same __________.'],
  ['A', 'Good. And you\'ve __________ on __________, not __________.'],
  ['B', 'Yes — to __________. __________ only __________ when __________.'],
  ['A', 'And __________ agreed?'],
  ['B', 'I telephoned to ask first. __________ said __________, because __________.'],
]));
out.push(table(['Role card 1 — a school trip', 'Role card 2 — a clinic'], [[
  'Decision: one big bus, not two small ones; Thursday, not Saturday. Reasons: cheaper per child; one driver to watch; Thursday the museum is free and quiet.',
  'Decision: two nurses in the morning, one in the afternoon; appointments every 20 minutes, not 15. Reasons: most patients come before noon; 15 minutes was never enough and everybody waited.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the two reasons. Which was a _because_ and which was a _to_?'));
out.push(PHRASE_CARD(['Why not…?', 'Because…', 'to… the same…', 'I telephoned to ask first.', 'It was luck, not planning.', 'Write both reasons.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a decision **you** made recently — at work, at home, about money or time. Explain it to **three** colleagues. Each must ask _why?_ twice, so you need two reasons for each decision.'));
out.push(table(['My decision', 'Because…', 'To…'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about somebody else\'s decision:  _______ decided to _______, because _______, and to _______._'));
out.push(p('**Listener task:** write a decision where the two reasons pulled in different directions.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _for save fuel_ and _because cheaper_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the decision sheet Nour keeps in the file, and answer the questions.'));
out.push(box(null, [
  '**DECISION SHEET — deliveries, week of 11 April**   Nour Mansour',
  '**Jaramana order (4 boxes): small van, Monday.** Because it is four boxes and the lorry uses three times the fuel. The van does Jaramana, Qudsaya and Mezzeh on one trip.',
  '**Hama pallets: Tuesday, not Monday.** To put them on the same load as Homs — the lorry only goes when it is full, so one journey instead of two. I telephoned the customer first; Tuesday is better for him anyway, because his man is away on Monday.',
  '**Homs small boxes: bought from Khalil, not waited for.** Because the customer opens a new branch on Wednesday and our own boxes arrive after his lorry leaves. Extra cost 4,000 SYP, paid by us, to keep the opening date.',
  '**Not done: a second trip to Hama on Thursday.** We discussed it and decided against it, because the load would have been a quarter full. If the customer complains, this is why.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the Jaramana order go by van?'));
out.push(item('2', 'What two reasons are given for sending the Hama pallets on Tuesday?'));
out.push(item('3', 'Why is the last paragraph on the sheet, when nothing was done?'));
out.push(box('Writer\'s box', [
  '**Shape of a decision sheet:** one bold line per decision, with **what was decided** → the reason with **because** → the purpose with **to** → anything you did to check (a telephone call) → at the end, **what you decided not to do**, and why.',
  'Give **both kinds of reason** where you have them: _because it is four boxes_ (the fact) and _to do three drops on one trip_ (the purpose). Together they are an argument; alone each is an opinion.',
  'Record the **telephone call**. _I telephoned the customer first_ is the sentence that protects the decision when somebody questions it later.',
  '⚠ Write down what you decided **not** to do. Six months later the thing nobody can explain is always the thing that did not happen.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a decision sheet for a week of your own decisions, real or invented (25 words or more). Use the frame.'));
out.push(p('**DECISION SHEET — ______________**   ______________.  **______________: ______________.** Because ______________. ______________ to ______________.  **______________: ______________.** To ______________. I ______________ first; ______________.  **Not done: ______________.** We decided against it, because ______________. If ______________, this is why.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the manager, six months later, asking _why did you do that?_ Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one _because_ and one _to_', ''],
  ['_to_ + verb, never _for_ + verb', ''],
  ['Something you did to check', ''],
  ['A "not done" line', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "not done" line. The class says whether it would stop an argument later.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision in your life that you still have to explain to people (35 words or more). Give the real reason and the reason you usually give. Are they the same?'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _That is a good reason._   ✓ _Can you say what it was for?_   ? _a question about the decision_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Is the real reason usually simpler or more complicated than the one people give?'));
out.push(box('Homework', ['Write your final text. Then write five sentences with _because_ and five with _to_ about things you did yesterday (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 6.6 =======================
out.push(pb());
out.push(h2('6.6  It\'s arriving at four, not at two'));
out.push(p('**Function:** explaining a delay and saying when something will arrive   ·   **Grammar:** present continuous for arrangements + time   ·   **Pronunciation:** correcting a time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give three reasons why a delivery might be late. Then give three reasons a customer would **accept**.'));
out.push(p('**b**  Put these in order, best first: _It\'s late. · I\'m sorry, there\'s a delay. · The road is closed at Nasiriyah; it\'s arriving at four instead of two. · The driver didn\'t come._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is the lorry late?   **A** a breakdown   **B** a closed road   **C** a long checkpoint'));
out.push(p('**b**  Listen again. **1** What is the new arrival time?   **2** What does Nour offer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  Telephoning about a delay', [
  ['Nour', 'Mr Tarabishi, good afternoon. It\'s Nour from Sham Trading. I\'m telephoning about today\'s delivery.'],
  ['Mr Tarabishi', 'It isn\'t here. It was two o\'clock.'],
  ['Nour', 'I know, and I\'m sorry. The road is closed at Nasiriyah and the lorry is going round by the old road.'],
  ['Mr Tarabishi', 'And when does it arrive?'],
  ['Nour', 'It\'s arriving at four, not at two. The driver telephoned me twenty minutes ago; he\'s past the diversion now.'],
  ['Mr Tarabishi', 'Four o\'clock. I close at five.'],
  ['Nour', 'I know you do. If four is too late, we can unload the boxes at your brother\'s shop and bring the rest tomorrow morning.'],
  ['Mr Tarabishi', 'No — four is all right. But telephone me when he leaves the diversion.'],
  ['Nour', 'I will. And I\'ll telephone again at four whether he\'s there or not.'],
  ['Mr Tarabishi', 'Whether he\'s there or not. Good. That\'s what I want.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – arrangements and delays**',
  table(['What you say', 'Why'], [
    ['I\'m telephoning **about** today\'s delivery.', 'Say why you are calling, first.'],
    ['I know, and I\'m **sorry**.', 'Apologise before you explain.'],
    ['The road **is closed**; the lorry **is going** round.', 'What is happening now.'],
    ['It **\'s arriving at four**, not at two.', 'The **new time**, against the old one.'],
    ['He **telephoned** me twenty minutes ago.', 'How you know — this is what makes it believable.'],
    ['If four is too late, **we can** …', 'An alternative.'],
    ['I\'ll telephone at four **whether he\'s there or not**.', 'The promise that costs nothing and buys everything.'],
  ], [1.6, 1.8]),
  '⚠ The present continuous is used for a **fixed arrangement**: _It\'s arriving at four_ · _He\'s coming on Tuesday_. Not _it will arrive_ — that sounds like a guess.',
  '⚠ Always give the **new time against the old one**: _at four, **not at two**_. People remember the number they were given first.',
  '**Practise:** Put the sentences in the right order for a call about a delay.',
  '___ If that\'s too late, we can… · ___ I\'m telephoning about today\'s delivery. · ___ It\'s arriving at four, not at two. · ___ I\'m sorry. · ___ The road is closed and the lorry is going round.',
  '**Useful phrases:**  I\'m telephoning about…  ·  I know, and I\'m sorry.  ·  It\'s arriving at…, not at…  ·  He telephoned me… ago.  ·  If… is too late, we can…  ·  whether he\'s there or not',
  '**Pronunciation – correcting a time.** 🔊 **Track 6.12** Listen. Both times are loud, and the voice falls on the new one: _It\'s arriving at **FOUR**, not at **two**._ Repeat the four corrections.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A telephones about a delay; B is the customer and is not pleased. A must get to an agreement. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, good afternoon. It\'s __________ from __________. I\'m telephoning about __________.'],
  ['B', 'It isn\'t here. It was __________.'],
  ['A', 'I know, and I\'m sorry. __________ and __________ is __________.'],
  ['B', 'And when does it arrive?'],
  ['A', 'It\'s arriving at __________, not at __________. __________ telephoned me __________ ago.'],
  ['B', '__________. I __________ at __________.'],
  ['A', 'If __________ is too late, we can __________.'],
  ['B', '__________ is all right. But __________.'],
  ['A', 'I will. And I\'ll telephone again at __________ whether __________ or not.'],
]));
out.push(table(['Role card 1 — a repair that is not finished', 'Role card 2 — a document that is not ready'], [[
  'Promised Tuesday; the part came wrong from the supplier. New date Thursday afternoon. Alternative: an old machine lent free until then.',
  'Promised at noon; the officer who signs is away until three. Ready at four today. Alternative: a stamped copy now and the original tomorrow.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** tick the six parts: reason for calling · apology · explanation · new time against old · how they know · alternative.'));
out.push(PHRASE_CARD(['I\'m telephoning about…', 'I know, and I\'m sorry.', 'It\'s arriving at…, not at…', '…telephoned me… ago', 'If… is too late, we can…', 'whether… or not']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Telephone **three** colleagues about a delay — real or invented, at work or in your own life. Each time, give a new time, say how you know, and offer one alternative.'));
out.push(table(['Who I called', 'The delay', 'New time', 'Alternative offered'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I telephoned _______ about _______. I said it was arriving at _______, not at _______. I offered _______, and he / she _______._'));
out.push(p('**Listener task:** write the explanation you would have accepted, and one you would not.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it will arrive_ where an arrangement is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Nour sends after the telephone call, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr F. Tarabishi   **From:** Nour Mansour, Sham Trading   **Subject:** Today\'s delivery 0411-1 — new time 4 pm',
  'Dear Mr Tarabishi,',
  'Following our call, in writing so that your staff have it too:',
  '**What happened:** the road is closed at Nasiriyah and the lorry is going round by the old road.',
  '**New time: 4 pm today** (it was 2 pm). The driver telephoned me at 1.40 from past the diversion.',
  '**What we are doing:** the driver will telephone me when he leaves the old road, and I will telephone you immediately. I will also telephone you at 4 pm, whether he has arrived or not.',
  '**If 4 pm does not work:** we can unload the boxes at your brother\'s shop today and bring the paper and gloves tomorrow before 10 am. Tell me by 3 pm and we will do that instead.',
  'I am sorry for the afternoon you have had.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does Nour write, when she has already telephoned?'));
out.push(item('2', 'What two telephone calls does she promise?'));
out.push(item('3', 'By when must the customer decide about the alternative?'));
out.push(box('Writer\'s box', [
  '**Shape of a delay message:** _following our call, in writing so that your staff have it too_ → **what happened** → **the new time, against the old one**, in bold → **how you know** → **what we are doing**, with the calls you promise → **if it does not work**, with a deadline for them to say so → one human line.',
  'Put the new time **in the subject line**. The person reading on a telephone, standing in a shop, may read nothing else.',
  'Promise the call you will make **even if there is no news**. It is the cheapest thing in this book and the one customers remember.',
  '⚠ The alternative needs a **deadline for the answer**, or you will be holding a lorry at three o\'clock waiting for a reply.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a delay message about something real or invented (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ — new time ______.  Dear ______________, Following our call, in writing so that ______________:  **What happened:** ______________.  **New time: ______** (it was ______). ______________ telephoned me at ______.  **What we are doing:** ______________. I will also ______________ whether ______________ or not.  **If ______ does not work:** ______________. Tell me by ______.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read only the **subject line** and say what you now know. Then read the rest. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The new time is in the subject line', ''],
  ['The new time is given against the old one', ''],
  ['A promised call even if there is no news', ''],
  ['An alternative with a deadline for the answer', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their subject lines. The class says which one they would open first on a bad day.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time **you** were kept waiting and nobody told you anything (35 words or more). Say what happened, what you were told, and what one sentence would have fixed it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I have felt exactly that._   ✓ _What did they finally say?_   ? _a question about what you did_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect on the board the "one sentence that would have fixed it" from every text. How many of them are the same sentence?'));
out.push(box('Homework', ['Write your final text. Then write the message you wish somebody had sent you that day (20+ words). Use the shape from the Writer\'s box.'], C.lblue, C.navy));

// ======================= CYCLE 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review & Mediate: the delivery note and the road signs'));
out.push(p('**Function:** telling a colleague, in simple words, what a delivery note and road signs say   ·   **Review:** transport · distance and time · _must / mustn\'t_ · suggestions · reasons · delays'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _by_ or _on_: ______ lorry · ______ foot · ______ service.',
  '**2** Ask about distance and about time, in two questions.',
  '**3** The difference between _you mustn\'t_ and _you don\'t have to_.',
  '**4** Three ways to suggest sending it on Wednesday.',
  '**5** _We use the small van ______ save fuel_ — _to_, _for_ or _because_?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the driver worried about?   **A** the route   **B** what he must do at the other end   **C** the money'));
out.push(p('**b**  Listen again. **1** What must he do before the boxes come off?   **2** What must he never do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  Explaining the note to the driver', [
  ['Driver', 'Nour, this paper. Three copies, small writing, a box at the bottom. What do I actually do?'],
  ['Nour', 'It\'s the delivery note for Homs. I\'ll tell you only what you do with it.'],
  ['Driver', 'Good.'],
  ['Nour', 'Before anything comes off the lorry, you have this paper in your hand. You and the customer count the four items together.'],
  ['Driver', 'Four items. And then he signs?'],
  ['Nour', 'Then he signs. If a box is damaged or missing, he writes it **on the note before he signs** — not afterwards on the telephone.'],
  ['Driver', 'And if he says he\'ll telephone the office later?'],
  ['Nour', 'Then nothing is written and we have no case. Write it yourself in front of him and ask him to sign next to it.'],
  ['Driver', 'And the three copies?'],
  ['Nour', 'White stays with him. Yellow comes back to me. Pink you keep in the cab until the end of the month. Never give away the pink one.'],
  ['Driver', 'White him, yellow you, pink me. And the signs on the road — the diversion at Nasiriyah?'],
  ['Nour', 'The yellow sign means the old road. It adds about forty minutes. Follow it; don\'t find your own way.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a form and a sign, for somebody who must act**',
  table(['To start', 'To give the actions, in order', 'To warn'], [
    ['It\'s the ___ for ___ .', 'Before anything ___ , you ___ .', 'Never ___ .'],
    ['I\'ll tell you only what **you** do with it.', 'Then he ___ . If ___ , he ___ before ___ .', 'Not afterwards on the telephone.'],
  ], [1.5, 2, 1.5]),
  '⚠ For somebody who must **act**, mediate as a **sequence of actions in time order**, not as a description of the paper. _Before anything comes off… then… if…_',
  '⚠ Give the **colour code** or the sign in the form the person will see it: _white him, yellow you, pink me_. They will repeat it back in exactly those words.',
  '⚠ A road sign is mediated by saying **what it means for the journey**: _the yellow sign means the old road; it adds about forty minutes_.',
  '**Practise:** The note says: _Discrepancies must be annotated on the consignment note prior to signature. Verbal notification is not accepted._ Say it in easy English for a driver at a loading door.',
  '**Useful phrases:**  I\'ll tell you only what you do.  ·  Before anything comes off…  ·  …before he signs  ·  Never give away…  ·  It adds about…  ·  Follow it; don\'t find your own way.',
  '**Pronunciation – a list people must remember.** 🔊 **Track 6.14** Listen. Three short groups, each with a fall: _White **him** ↘ yellow **you** ↘ pink **me** ↘._ Repeat the three lists.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads document 1 silently and tells B only what B must do. B closes the book. Then swap with document 2.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**CONSIGNMENT NOTE 0411-1.** Three copies: white (consignee), yellow (originator), pink (carrier, retain 30 days). _Discrepancies must be annotated on the consignment note prior to signature. Verbal notification will not be accepted. The carrier is responsible for the consignment until signature is obtained._',
  '**SITE ENTRY — VEHICLES.** _High-visibility clothing is mandatory beyond this point. Vehicles must not obstruct the loading bay. Pedestrian access to the marked operating area is prohibited. Drivers must report to the supervisor before unloading commences._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their document for the class – **without the book**.'));
out.push(p('**Listener task:** write the actions **in order**. Could you do the job from what you heard?'));
out.push(PHRASE_CARD(['It\'s the… for…', 'I\'ll tell you only what you do.', 'Before anything comes off…', '…before he signs', 'Never…', 'It adds about…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a form, a sign or a set of instructions in formal English. Read it silently. Then tell **two** colleagues what they must **do**, in order. Do not show them the paper.'));
out.push(table(['Who I told', 'The actions, in order', 'What I told them never to do'], [['', '', ''], ['', '', '']], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document you mediated. This is the **sixth** unit of this book, and the mediation task comes back in every unit — so listen for whether the speaker gave **actions** or a **description**.'));
out.push(p('_It\'s a ______. The first thing you do is ______. Then ______. If ______, you ______ before ______. Never ______._'));
out.push(p('**Listener task:** write the first action and the warning. Then say whether you could do it tomorrow.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _DIVERSION — old road. Follow yellow signs._   **A** The road is open. **B** Go a different way and follow the signs. **C** Stop here.',
  '**2**  _High-visibility clothing mandatory beyond this point._   **A** You must wear the jacket from here. **B** Jackets are for drivers only. **C** You should wear a jacket if you want.',
  '**3**  _Pink copy: carrier, retain 30 days._   **A** Give the pink copy to the customer. **B** The driver keeps the pink copy for a month. **C** Throw the pink copy away.',
  '**4**  _Damage must be noted before signing._   **A** Telephone the office about damage. **B** Write the damage on the note first, then sign. **C** Sign first and write later.',
  '**5**  _Lorry arriving 4 pm, not 2 pm. Road closed at Nasiriyah._   **A** The lorry comes two hours later than planned. **B** The lorry is not coming. **C** The lorry came at two.',
  '**6**  _Drivers must report to the supervisor before unloading._   **A** Unload and then find the supervisor. **B** See the supervisor first. **C** The supervisor unloads.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about a **journey or a delivery**, the three points are usually: **when** · **where / how** · **one thing to do or not do**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to the driver. Say: **(1)** the load leaves at seven on Tuesday by lorry, **(2)** he must have the delivery note in his hand before anything comes off, **(3)** he mustn\'t give away the pink copy. Use the frame.'));
out.push(p('Dear ______________, The load ______________ at ______ on ______________, by ______________. Please ______________ before ______________. Don\'t ______________ — ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  Leaves 7 am Tuesday, by lorry', ''], ['2  Note in hand before unloading', ''], ['3  Don\'t give away the pink copy', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('A friend is travelling to your town for the first time. Write a message (25 words or more). Say: **(1)** how to travel and how long it takes, **(2)** where you will meet, **(3)** one thing not to do on the journey.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _Thanks! Is the service from the big garage or the small one? I won\'t take the night bus._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The boxes go ___ lorry.   a) by   b) with   c) in a',
  '2  From the garage it goes ___.   a) by foot   b) on foot   c) with foot',
  '3  How ___ does it take to Aleppo?   a) far   b) long   c) much',
  '4  You ___ park at the loading door.   a) mustn\'t   b) don\'t have to   c) haven\'t',
  '5  You ___ help us unload — we have two men.   a) mustn\'t   b) don\'t have to   c) must not to',
  '6  ___ we ask Khalil, just this once?   a) Shall   b) Let\'s   c) How about',
  '7  We use the small van ___ save fuel.   a) for   b) to   c) because',
  '8  It ___ at four, not at two.   a) arrives   b) is arriving   c) arrive',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 6.15** Listen to a call about a delay. Complete the note.   Old time: ______   New time: ______   Reason: ______   How she knows: ______   Alternative: ______'));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Nour', 'Good afternoon, it\'s Nour from Sham Trading. I\'m telephoning about today\'s delivery.'],
  ['Customer', 'It was eleven o\'clock.'],
  ['Nour', 'I know, and I\'m sorry. There\'s a diversion at Nasiriyah and the lorry is going round by the old road.'],
  ['Customer', 'So when?'],
  ['Nour', 'It\'s arriving at one, not at eleven. The driver telephoned me fifteen minutes ago.'],
  ['Customer', 'I close for lunch at one.'],
  ['Nour', 'If one is difficult, we can leave it at your brother\'s and bring the rest tomorrow morning.'],
]));
out.push(p('**C  Writing.** Write a short message about a delivery (25+ words). Say when it leaves and how it travels, when it arrives, and one thing the person must do.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say how goods and people travel, and choose the right transport',
  '☐ ask and say how far a journey is and how long it takes',
  '☐ give the rules of a yard or a site, each with its reason and an _instead_',
  '☐ propose a plan, refuse one with a reason, and agree on another',
  '☐ give both kinds of reason — _because_ and _to_',
  '☐ explain a delay, give a new time and offer an alternative',
  '☐ tell a colleague in easy English what a delivery note and road signs mean for them',
  '☐ write a delivery note, a route sheet, a rules notice, a change-of-plan message, a decision sheet and a delay message',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
