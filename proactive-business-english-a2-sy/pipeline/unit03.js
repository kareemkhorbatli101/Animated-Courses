// Proactive Business English A2 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'desk · cupboard · shelf · drawer · filing cabinet · printer · photocopier · scanner · stapler · folder · tray · noticeboard · loading door · gate · yard · pallet · forklift · trolley · ladder · corridor · stairs · lift · ground floor · plastic wrap · cardboard · metal';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 3  The Office and the Warehouse'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  say what there is in a room or a building',
  '**3.2**  say exactly where something is, and ask for it',
  '**3.3**  ask and say what you have and have not got on the shelves',
  '**3.4**  describe the equipment you work with',
  '**3.5**  give directions inside a building or a yard',
  '**3.6**  say what something is made of, and explain a word you do not know',
  '**3.7**  Review & Mediate: tell a colleague what the floor plan and the safety notice say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The building — before you start', [
  '**Ground floor:** the trade counter at the front, the corridor, the stairs, the lift, and the door to the yard.',
  '**Second floor:** the office — six desks, two filing cabinets, the printer, a cupboard, and the noticeboard by the door.',
  '**Behind the building:** the yard, the loading door, and the warehouse — shelves to the roof, a forklift, two trolleys and a ladder.',
], C.lyellow, C.orange));

// ======================= CYCLE 3.1 =======================
out.push(pb());
out.push(h2('3.1  There are six desks and one printer'));
out.push(p('**Function:** saying what there is in a room or a building   ·   **Grammar:** _there is / there are_   ·   **Pronunciation:** weak _there_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Count what is in **your** classroom. Write the number, then tell a partner: _There are ______ chairs. There is ______._'));
out.push(table(['Thing', 'How many?'], [['desks / tables', ''], ['chairs', ''], ['windows', ''], ['doors', ''], ['boards', '']], [2, 1]));
out.push(p('**b**  Singular or plural? _shelf → ______ · box → ______ · tray → ______ · person → _______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour doing?   **A** cleaning the office   **B** making a list of the office things   **C** moving to a new desk'));
out.push(p('**b**  Listen again. **1** How many desks are there?   **2** What is there **not** in the office?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  The office list', [
  ['Mr Ayoub', 'Nour, the head office wants a list of what we have here. Can you do it?'],
  ['Nour', 'Of course. Let me look. There are six desks and six chairs.'],
  ['Mr Ayoub', 'Seven chairs. There\'s one for visitors, by the window.'],
  ['Nour', 'Seven. And there are two filing cabinets and one cupboard.'],
  ['Mr Ayoub', 'And the machines?'],
  ['Nour', 'There\'s one printer. There isn\'t a photocopier — we use the one downstairs.'],
  ['Mr Ayoub', 'Write that. The head office always asks why.'],
  ['Nour', 'And there are two telephones, one noticeboard, and a small fridge.'],
  ['Mr Ayoub', 'Is there a scanner?'],
  ['Nour', 'No, there isn\'t. That\'s the next question from the head office.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – there is / there are**',
  table(['+', '–', '?'], [
    ['**There\'s** a printer.  (one thing)', '**There isn\'t** a photocopier.', '**Is there** a scanner? – No, there isn\'t.'],
    ['**There are** six desks.  (more than one)', '**There aren\'t** any trays.', '**Are there** any chairs? – Yes, there are.'],
  ], [1.3, 1.2, 1.5]),
  '**How many…?**  _**How many** desks **are there**? – There are six._',
  '⚠ _There is_ tells you the thing **exists**. _It is_ tells you **about** a thing you already know: _**There\'s** a printer in the office. **It\'s** very old._',
  '**Practise:** Complete with _there is / there are / there isn\'t / there aren\'t_.',
  '1 ______ six desks in the office.  2 ______ a photocopier — we use the one downstairs.  3 ______ two filing cabinets.  4 ______ any trays on my desk.  5 How many chairs ______?',
  '**Useful phrases:**  Let me look.  ·  There\'s one…  ·  There are two…  ·  There isn\'t a…  ·  Is there a…?  ·  Write that down.',
  '**Pronunciation – weak _there_.** 🔊 **Track 3.2** Listen and repeat: _there\'s a printer_ /ðəzə ˈprɪntə/ · _there are six desks_ /ðərə sɪks desks/ · _is there a scanner?_ /ɪz ðərə ˈskænə/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about a room; B answers from the role card. Then swap.'));
out.push(dlg(null, [
  ['A', 'How many __________ are there?'],
  ['B', 'There are __________. And there\'s one __________.'],
  ['A', 'Is there a __________?'],
  ['B', 'No, there isn\'t. We use the one __________.'],
  ['A', 'And __________?'],
  ['B', 'There are __________ and there aren\'t any __________.'],
]));
out.push(table(['Role card 1 — the warehouse', 'Role card 2 — the trade counter'], [[
  'shelves: 24 · pallets: about 60 · forklift: 1 · trolleys: 2 · ladder: 1 · no computer (the office has it) · no window',
  'counter: 1 long one · chairs: 2 for customers · till: 1 · printer: 1 small one · no scanner · a noticeboard by the door',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **two** things that are **not** there.'));
out.push(PHRASE_CARD(['How many…?', 'There are…', 'There\'s one…', 'Is there a…?', 'No, there isn\'t.', 'We use the one…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make a list of **your** workplace — one room. Then tell **two** colleagues, and ask about theirs. Make notes.'));
out.push(table(['Room / place', 'There is…', 'There are…', 'There isn\'t…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one colleague\'s workplace:  _In _______\'s office there are _______. There\'s one _______, but there isn\'t a _______._'));
out.push(p('**Listener task:** write the thing that **most** workplaces in the class do **not** have.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _there is_ with a plural. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list Nour sends to the head office and answer the questions.'));
out.push(box(null, [
  '**To:** Head Office — Equipment   **From:** Nour Mansour, Mezzeh branch   **Subject:** Office equipment list',
  'Dear colleagues,',
  'This is the list for the second-floor office. There are six desks and seven chairs — one chair is for visitors. There are two filing cabinets, one cupboard and one noticeboard. There is one printer and there are two telephones. There is a small fridge.',
  'There isn\'t a photocopier and there isn\'t a scanner. We use the photocopier on the ground floor, at the trade counter. Please tell me if you need the warehouse list too.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are there seven chairs and only six desks?'));
out.push(item('2', 'Which two machines are **not** in the office?'));
out.push(item('3', 'What does Nour offer at the end?'));
out.push(box('Writer\'s box', [
  '**Shape of an equipment list:** who it is for and which room → the furniture → the machines → what is **missing**, and what you use instead → an offer or a question → your name.',
  'Group the same kind of thing in one sentence: _There are two filing cabinets, one cupboard and one noticeboard._ One thing per sentence makes a long, slow list.',
  '**Say what is missing, and why it does not matter.** _There isn\'t a photocopier. We use the one downstairs._ — that answers the next question before it is asked.',
  '⚠ _There are six desk_ ✗ → _six desk**s**_. After a number bigger than one, the noun is plural, always.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the equipment list for **your** room (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______________ list.  Dear ______________, This is the list for ______________. There are ______________. There is ______________. There isn\'t ______________ — we use ______________. Please tell me if ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "The list is complete. Check _six desk_. Can you say what you use instead of the scanner?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books with your partner. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_there is_ with one thing, _there are_ with more than one', ''],
  ['Plural **-s** after every number', ''],
  ['At least one _there isn\'t_', ''],
  ['Says what you use instead', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Describe a room you know well that is **not** at work — your kitchen, a shop you use, the room where you study (35 words or more). Use _there is_, _there are_ and at least one _there isn\'t_.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I can see the room._   ✓ _Can you add how many…?_   ? _a question about the room_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts without the names. Guess which room belongs to whom.'));
out.push(box('Homework', ['Write your final text. Then count the equipment in one more room at your workplace and write the list (20+ words). Bring it to the next lesson.'], C.lblue, C.navy));

// ======================= CYCLE 3.2 =======================
out.push(pb());
out.push(h2('3.2  It\'s in the second drawer'));
out.push(p('**Function:** saying exactly where something is, and asking for it   ·   **Grammar:** prepositions of place   ·   **Pronunciation:** stress on the preposition'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put your pen **on**, **in**, **under**, **next to** and **behind** your book. Say what you are doing each time.'));
out.push(p('**b**  Which preposition? _The folder is ______ the shelf. · The box is ______ the desk (not on it). · The printer is ______ the two cabinets. · My bag is ______ the chair._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Mr Ayoub looking for?   **A** the Homs file   **B** the stapler   **C** his telephone'));
out.push(p('**b**  Listen again. **1** Where is the file in the end?   **2** Why is it not in the filing cabinet?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  Where\'s the Homs file?', [
  ['Mr Ayoub', 'Nour, where\'s the Homs file? It isn\'t on my desk.'],
  ['Nour', 'It should be in the filing cabinet, in the second drawer.'],
  ['Mr Ayoub', 'I looked. The second drawer has Hama and Homs… no, only Hama.'],
  ['Nour', 'Then Nadia has it. She took the April invoices yesterday.'],
  ['Mr Ayoub', 'Her desk is empty.'],
  ['Nour', 'Look under the tray, on the left. She puts things under the tray.'],
  ['Mr Ayoub', 'Ah. Here it is — between the tray and the keyboard.'],
  ['Nour', 'I\'m sorry. I\'ll put it back in the drawer this evening.'],
  ['Mr Ayoub', 'Don\'t be sorry. But write the room and the drawer on the front, please. Then nobody looks for twenty minutes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – prepositions of place**',
  table(['Preposition', 'Example at work'], [
    ['**in** / **on** / **under**', 'in the drawer · on the shelf · under the tray'],
    ['**next to** / **beside**', 'The printer is next to the cupboard.'],
    ['**between**', 'It\'s between the tray and the keyboard.'],
    ['**behind** / **in front of**', 'The warehouse is behind the building.'],
    ['**above** / **below**', 'The noticeboard is above the small table.'],
    ['**at** the front / the back / the top', 'The counter is at the front of the building.'],
  ], [1.2, 2.4]),
  '⚠ **in** = inside something closed (a drawer, a cupboard, a box).  **on** = on a surface (a desk, a shelf, the wall).',
  '⚠ _on the left_ / _on the right_ — never ~~in the left~~.',
  '**Practise:** Complete with the right preposition.',
  '1 The file is ___ the second drawer.  2 The printer is ___ the two cabinets.  3 Your bag is ___ the chair.  4 The noticeboard is ___ the door, ___ the right.  5 The yard is ___ the building.',
  '**Useful phrases:**  Where\'s…?  ·  It should be in…  ·  I looked.  ·  Here it is.  ·  Put it back in…  ·  on the left / on the right',
  '**Pronunciation – stress the preposition.** 🔊 **Track 3.4** Listen. The preposition is the new information, so it is loud: _It\'s **UN**der the tray, not **ON** it._ Repeat the five pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has lost something; B says where it is. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Where\'s the __________? It isn\'t __________.'],
  ['B', 'It should be in __________.'],
  ['A', 'I looked. It isn\'t there.'],
  ['B', 'Then look __________, on the __________.'],
  ['A', 'Here it is — between __________ and __________.'],
  ['B', 'I\'ll put it back __________ this evening.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'Lost: the stapler. Normal place: the top drawer. Really: on the printer, behind the paper.',
  'Lost: the Aleppo folder. Normal place: the shelf above the cupboard. Really: in the car, in the back.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** draw a very small plan of where the thing really was.'));
out.push(PHRASE_CARD(['Where\'s…?', 'It should be in…', 'I looked.', 'Look under…', 'Here it is.', 'on the left']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Hide a small object in the room. A colleague asks questions with **Is it…?** and you answer _yes_ or _no_ until they find it. Change roles. Do this **three** times.'));
out.push(table(['Object', 'Where I hid it', 'How many questions?'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I hid the _______. It was _______ the _______, between _______ and _______. _______ found it in _______ questions._'));
out.push(p('**Listener task:** write the best hiding place of the lesson.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _in the left_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice Nour puts on the filing cabinet, and answer the questions.'));
out.push(box(null, [
  '**WHERE THINGS ARE KEPT** — second-floor office',
  'Customer files: in the filing cabinet by the window. Drawer 1 — Damascus. Drawer 2 — Hama and Homs. Drawer 3 — Aleppo and the coast.',
  'Invoices (this year): in the green folders on the shelf above the cupboard. Invoices (last year): in the cupboard, on the bottom shelf.',
  'Paper, envelopes and tape: in the cupboard, on the middle shelf. The stapler and the scissors live in the top drawer of the desk next to the printer.',
  'If you take a file, please write your name on the list on the noticeboard — and put it back the same day.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where are the Homs files?'));
out.push(item('2', 'Where are last year\'s invoices?'));
out.push(item('3', 'What must you do if you take a file?'));
out.push(box('Writer\'s box', [
  '**Shape of a "where things are kept" notice:** title and room → one line for each group of things → the exact place (furniture → drawer or shelf) → the rule at the end.',
  'Go from **big to small**: _in the cupboard, on the middle shelf_ — not _on the middle shelf of the cupboard that is next to…_',
  'Use **by** or **next to** to say which piece of furniture: _the filing cabinet **by the window**_.',
  '⚠ A notice is for a person who is standing in the room and cannot find something. Write the **furniture first**; that is what they can see.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "where things are kept" notice for **your** workplace or your home (25 words or more). Use the frame.'));
out.push(p('**WHERE THINGS ARE KEPT** — ______________.  ______________: in ______________, on ______________.  ______________: in ______________.  ______________: ______________.  If you take ______________, please ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Stand up and try to **find** one thing in your partner\'s notice — can you, from the words alone? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Big to small: furniture → drawer or shelf', ''],
  ['_in_ for inside, _on_ for a surface', ''],
  ['Every group of things has a place', ''],
  ['A rule at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line. The class says whether they could find the thing with their eyes closed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('A colleague is away and you must find three things on his or her desk. Write the message you would send asking **where** they are, and say where you have already looked (35 words or more).'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message and **write the answer**: say exactly where each of the three things is.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read a question and its answer together. The class says whether the answer is exact enough to find the thing first time.'));
out.push(box('Homework', ['Write your final message. Then draw a small plan of your desk and write six sentences about where things are, using six different prepositions (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.3 =======================
out.push(pb());
out.push(h2('3.3  Have we got any plastic wrap?'));
out.push(p('**Function:** asking and saying what you have and have not got   ·   **Grammar:** _some / any_   ·   **Pronunciation:** weak _some_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Look in your bag. Say three sentences: _I\'ve got some ______. I haven\'t got any ______. Have you got any ______?_'));
out.push(p('**b**  _some_ or _any_? _We\'ve got ______ boxes. · We haven\'t got ______ tape. · Have you got ______ paper? · There are ______ pallets in the yard._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has the warehouse **not** got?   **A** boxes   **B** plastic wrap   **C** tape'));
out.push(p('**b**  Listen again. **1** How many big boxes are there?   **2** When is the new wrap coming?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  On the shelves', [
  ['Nour', 'Abu Yasser, have we got any plastic wrap? The Homs order goes tomorrow.'],
  ['Abu Yasser', 'Wrap? We haven\'t got any. The last roll finished on Sunday.'],
  ['Nour', 'None at all?'],
  ['Abu Yasser', 'None at all. There\'s some tape, and there are some cardboard corners, but no wrap.'],
  ['Nour', 'And boxes?'],
  ['Abu Yasser', 'Boxes we\'ve got. Forty big ones and about a hundred small ones. Boxes are not the problem.'],
  ['Nour', 'So I telephone Ms Shamsi in Aleppo.'],
  ['Abu Yasser', 'Telephone her today. She sends on Tuesday, so if you call tomorrow, we wait a week.'],
  ['Nour', 'Today, then. How many rolls shall I ask for?'],
  ['Abu Yasser', 'Twelve. And ask for the wide one, not the narrow one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – some / any**',
  table(['+', '–', '?'], [
    ['We\'ve got **some** tape.', 'We haven\'t got **any** wrap.', 'Have we got **any** wrap?'],
    ['There are **some** boxes.', 'There aren\'t **any** corners.', 'Are there **any** boxes?'],
    ['', '**No** wrap. · **None** at all.', 'How **much** tape? / How **many** boxes?'],
  ], [1.2, 1.3, 1.5]),
  '**some** in **+** sentences  ·  **any** in **–** and **?** sentences.',
  '⚠ **no** + noun means the same as **not any**: _We\'ve got **no** wrap._ = _We haven\'t got **any** wrap._ Never use both: ~~We haven\'t got no wrap~~.',
  '⚠ _Have you got **any**…?_ asks whether it exists. _Would you like **some** tea?_ — an **offer** takes _some_, not _any_.',
  '**Practise:** Complete with _some, any_ or _no_.',
  '1 Have we got ___ plastic wrap?  2 We\'ve got ___ tape, but ___ wrap.  3 There aren\'t ___ corners left.  4 There are ___ boxes in the yard.  5 Would you like ___ help with the list?',
  '**Useful phrases:**  Have we got any…?  ·  None at all.  ·  …are not the problem.  ·  How many shall I ask for?  ·  the wide one, not the narrow one',
  '**Pronunciation – weak _some_.** 🔊 **Track 3.6** Listen and repeat: _some tape_ /səm teɪp/ · _some boxes_ /səm ˈbɒksɪz/. Strong /sʌm/ only when it means _some but not all_: _**SOME** of the boxes are wet._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A needs materials; B checks the shelves. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Have we got any __________?'],
  ['B', 'We haven\'t got any. The last __________ finished on __________.'],
  ['A', 'None at all?'],
  ['B', 'None at all. There\'s some __________, and there are some __________, but no __________.'],
  ['A', 'And __________?'],
  ['B', '__________ we\'ve got. __________ are not the problem.'],
]));
out.push(table(['Role card 1 — the stationery cupboard', 'Role card 2 — the van'], [[
  'Got: paper (6 packets), envelopes (many), pens. Not got: printer ink, staples. Ink finished last Thursday.',
  'Got: two trolleys, a ladder, rope. Not got: spare wheel, water. The spare went with the big van.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what they have got and what they have **not** got — two lists.'));
out.push(PHRASE_CARD(['Have we got any…?', 'We haven\'t got any.', 'None at all.', 'There\'s some…', '…are not the problem.', 'How many shall I ask for?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your team is going to do a job away from the office for one day (a delivery, a stock count, a repair). In **threes**, decide what you have got and what you must buy. Make the list.'));
out.push(table(['We\'ve got some…', 'We haven\'t got any…', 'Who buys it?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.3, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We\'ve got some _______ and some _______. We haven\'t got any _______, so _______ is buying it._'));
out.push(p('**Listener task:** write the thing that **more than one** group forgot.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _some_ in a question. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Abu Yasser leaves for the office, and answer the questions.'));
out.push(box(null, [
  '**STOCK NOTE — packaging**   Thursday, end of day',
  'We\'ve got some tape (about 30 rolls) and some cardboard corners (two boxes). We have got plenty of boxes: 40 big, about 100 small. Boxes are not the problem.',
  'We haven\'t got any plastic wrap. None at all — the last roll finished on Sunday. We also haven\'t got any staples for the big stapler.',
  'Please telephone Ms Shamsi **today**. She sends on Tuesday. Ask for twelve rolls of the **wide** wrap, not the narrow one.',
  'Abu Yasser',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is there plenty of?'));
out.push(item('2', 'What is there none of?'));
out.push(item('3', 'Why must Nour telephone today and not tomorrow?'));
out.push(box('Writer\'s box', [
  '**Shape of a stock note:** what we have got (with numbers) → what we have **not** got → the action, with a **time** and a **reason**.',
  'Put the **good news first and short**, the problem second and clear. A reader who sees the problem in the first line stops reading the numbers.',
  'Numbers make a stock note useful: _some tape_ is weak; _about 30 rolls_ is a fact somebody can plan with.',
  '⚠ End with **who does what, and when**. A stock note that stops at the problem is only a complaint.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a stock note for your own workplace or home (25 words or more). Use the frame.'));
out.push(p('**STOCK NOTE — ______________**   ______________.  We\'ve got some ______________ (about ______) and some ______________. We haven\'t got any ______________ — ______________. Please ______________ today, because ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_some_ in the positive, _any_ in the negative', ''],
  ['A number with at least two things', ''],
  ['The action says **who** and **when**', ''],
  ['A reason for the time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the **last** sentence of their note. The class says whether somebody could act on it today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the shopping list message for something you organise — a family event, a repair at home, a trip (35 words or more). Say what you have got, what is missing, who buys it and when.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the person who must buy. Write on a slip:  ★ _I know what to buy._   ✓ _How many…?_   ? _one thing you would add_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Walk and read. Find the list with the **best numbers** and say why numbers help.'));
out.push(box('Homework', ['Write your final message. Then open one cupboard at home and write six sentences: three with _some_ and three with _any_ or _no_ (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.4 =======================
out.push(pb());
out.push(h2('3.4  It\'s old, but it\'s not too slow'));
out.push(p('**Function:** describing the equipment you work with   ·   **Grammar:** adjectives; _too / very_   ·   **Pronunciation:** adjective + noun stress'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Find the opposite: _new · heavy · wide · fast · noisy_   →   _slow · light · old · narrow · quiet_'));
out.push(p('**b**  Which is a problem? _It\'s very small._ or _It\'s too small._ Say why.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour want to buy?   **A** a new printer   **B** new shelves   **C** a new fridge'));
out.push(p('**b**  Listen again. **1** What is wrong with the old printer?   **2** What does Mr Ayoub decide?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  The old printer', [
  ['Nour', 'Mr Ayoub, can we buy a new printer? This one is very old.'],
  ['Mr Ayoub', 'Old is not a reason. Is it too slow?'],
  ['Nour', 'It isn\'t too slow for letters. But it\'s too slow for the delivery notes — forty pages take nine minutes.'],
  ['Mr Ayoub', 'Nine minutes. And it\'s noisy.'],
  ['Nour', 'Very noisy. Nadia can\'t use the telephone when it works.'],
  ['Mr Ayoub', 'That\'s a better reason than old. What about the new shelves in the warehouse? Are they good?'],
  ['Nour', 'They\'re very strong, Abu Yasser says. But they\'re too high for him — he needs the ladder for the top one.'],
  ['Mr Ayoub', 'Then we move the heavy things down and the light things up. That costs nothing.'],
  ['Nour', 'And the printer?'],
  ['Mr Ayoub', 'Write me the nine minutes and the telephone on one page. I\'ll ask the head office.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – adjectives, and too / very**',
  table(['Pattern', 'Example'], [
    ['**be** + adjective', 'The printer **is old**.  ·  The shelves **are strong**.'],
    ['adjective + **noun**', 'an **old** printer  ·  the **new** shelves  ·  a **heavy** box'],
    ['**very** + adjective', 'It\'s **very** noisy.  (a lot — but it still works)'],
    ['**too** + adjective', 'It\'s **too** slow.  (a **problem** — it does not work for us)'],
  ], [1.2, 2.4]),
  '⚠ The adjective **never** takes -s: _two **new** shelves_, not ~~two news shelves~~.',
  '⚠ **very ≠ too.** _Very big_ is a fact. _Too big_ means it does not fit. At work, _too_ asks for money; _very_ does not.',
  '**Practise:** _very_ or _too_?',
  '1 The box is ___ heavy — I can\'t lift it.  2 The office is ___ small, but we all fit.  3 The shelf is ___ high for Abu Yasser; he needs the ladder.  4 The printer is ___ old, but it works.  5 It\'s ___ noisy to use the telephone.',
  '**Useful phrases:**  Old is not a reason.  ·  It\'s too slow for…  ·  That\'s a better reason.  ·  That costs nothing.  ·  Write it on one page.',
  '**Pronunciation – adjective + noun.** 🔊 **Track 3.8** Listen. Both words are strong, the **noun** a little stronger: _an old PRINTer · the new SHELVes · a heavy BOX_. Repeat the six pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for new equipment; B asks for a **reason** and finds a cheap answer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Can we buy a new __________? This one is very __________.'],
  ['B', '__________ is not a reason. Is it too __________?'],
  ['A', 'It isn\'t too __________ for __________. But it\'s too __________ for __________.'],
  ['B', 'That\'s a better reason. What about __________?'],
  ['A', 'It\'s very __________, but it\'s too __________.'],
  ['B', 'Then we __________. That costs nothing.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'A wants: a new trolley. The old one: very noisy, one wheel broken, too heavy for one person. Cheap answer: repair the wheel.',
  'A wants: a second telephone line. The old one: always busy between 11 and 1. Cheap answer: a mobile for the counter.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **reason** that worked, and the cheap answer.'));
out.push(PHRASE_CARD(['very…', 'too… for…', '…is not a reason.', 'That\'s a better reason.', 'That costs nothing.', 'on one page']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **one** thing at your workplace that is old, slow, small or broken. Tell **three** colleagues. Use _very_ for the facts and _too_ only for the real problem.'));
out.push(table(['The thing', 'Very…', 'Too… for…'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We\'ve got a very _______ _______. It\'s too _______ for _______, so we _______._'));
out.push(p('**Listener task:** decide which problem you would pay to fix first, and say why.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _too_ where _very_ is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the one-page note Nour writes for Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**THE OFFICE PRINTER — one page for the head office**',
  'The printer is eleven years old. That is not the reason for this note.',
  'It is too slow for the delivery notes. Forty pages take nine minutes. We print the notes twice a day, so we lose about half an hour every day.',
  'It is very noisy. When it works, the person at the next desk cannot use the telephone. That desk is the accounts desk, and the bank calls in the morning.',
  'It is not too slow for letters and short documents, and the print is clear. If a new printer is not possible this year, we can move the printer to the small room. That costs nothing and it solves the telephone problem.',
  'Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which reason does Nour say is **not** a reason?'));
out.push(item('2', 'How much time is lost every day, and why?'));
out.push(item('3', 'What is the cheap answer if there is no money?'));
out.push(box('Writer\'s box', [
  '**Shape of a one-page equipment note:** the thing → the reason that is **not** good enough → the real problems, with **numbers** → what still works → a cheap answer if the money is not there → your name.',
  'Use **too + adjective + for** to name the problem: _too slow **for the delivery notes**_. The _for_ tells the reader when it matters.',
  'Say what still works. A note that says everything is bad is read as a complaint; a note that says what is good is read as a judgement.',
  '⚠ Numbers are the whole argument: _nine minutes · twice a day · half an hour every day_. Without them, _slow_ is only an opinion.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a one-page note about a piece of equipment at **your** workplace (25 words or more). Use the frame.'));
out.push(p('**______________ — one page for ______________.**  The ______________ is ______________. That is not the reason for this note. It is too ______________ for ______________. ______________ take ______________. It is very ______________. It is not too ______________ for ______________. If ______________ is not possible, we can ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_too_ used only for real problems', ''],
  ['At least two numbers', ''],
  ['One sentence about what still works', ''],
  ['A cheap answer at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their numbers only. The class says which numbers would convince a manager.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Describe the equipment of somebody whose work you admire — a cook, a mechanic, a nurse, a teacher (35 words or more). Use at least five adjectives and one _too_.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I can picture it._   ✓ _Can you add a number?_   ? _a question about the equipment_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find the adjective that nobody else used and write it on the board.'));
out.push(box('Homework', ['Write your final text. Then write five sentences about things at home that are **very** something and two that are **too** something, and say why the two are problems (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.5 =======================
out.push(pb());
out.push(h2('3.5  Go down the stairs and turn left'));
out.push(p('**Function:** giving directions inside a building or a yard   ·   **Grammar:** imperatives for directions   ·   **Pronunciation:** chunking the instruction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give your partner directions from your chair to the door — without pointing. Use: _go · turn · take · walk past · it\'s on your…_'));
out.push(p('**b**  Match: _go down ______ · turn ______ · take the ______ · walk past ______ · it\'s on _______   →   _the stairs · left · lift · the printer · your right_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking for directions?   **A** a new colleague   **B** a driver   **C** a customer'));
out.push(p('**b**  Listen again. **1** Which way does he go first?   **2** What must he **not** do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  To the loading door', [
  ['Driver', 'Excuse me. I\'ve got boxes for Sham Trading. Where do I go?'],
  ['Nour', 'Not here — this is the trade counter. Go out of this door and turn right.'],
  ['Driver', 'Right. And then?'],
  ['Nour', 'Walk past the small window and go through the gate into the yard.'],
  ['Driver', 'Through the gate. Can I bring the lorry in?'],
  ['Nour', 'Yes, but don\'t park in front of the gate — the forklift uses it all day.'],
  ['Driver', 'Where, then?'],
  ['Nour', 'In the yard, on the left, next to the wall. The loading door is the big green one at the back.'],
  ['Driver', 'The big green door at the back. And who do I ask for?'],
  ['Nour', 'Ask for Abu Yasser. He\'s there until half past four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – imperatives for directions**',
  table(['Direction', 'Example'], [
    ['**Go** out of / along / down / up / through', 'Go out of this door.  ·  Go through the gate.'],
    ['**Turn** left / right', 'Turn right at the end of the corridor.'],
    ['**Take** the lift / the stairs / the first door', 'Take the stairs to the second floor.'],
    ['**Walk past** / **Go past**', 'Walk past the small window.'],
    ['**Don\'t** + verb', '**Don\'t** park in front of the gate.'],
    ['**It\'s** on your left / right / at the back', 'It\'s the big green door at the back.'],
  ], [1.4, 2.2]),
  '⚠ The imperative has **no _you_**: _**Turn** right_, not ~~you turn right~~. For a stranger, add _please_ or start with _Excuse me_.',
  '⚠ Give the directions in the **order the person walks them**, one instruction at a time, and stop so they can repeat.',
  '**Practise:** Put in order to go from the trade counter to the loading door.',
  '___ turn right  ·  ___ go out of this door  ·  ___ go through the gate  ·  ___ walk past the small window  ·  ___ it\'s the big green door at the back',
  '**Useful phrases:**  Excuse me.  ·  Where do I go?  ·  And then?  ·  Can I…?  ·  Don\'t park…  ·  Ask for…',
  '**Pronunciation – one chunk at a time.** 🔊 **Track 3.10** Listen. Each instruction is one chunk with a small stop after it: _Go out of this door ‖ and turn right ‖ walk past the window ‖ and go through the gate._ Repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the way; B gives directions, one instruction at a time. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Excuse me. I\'ve got __________. Where do I go?'],
  ['B', 'Not here — this is __________. Go __________ and turn __________.'],
  ['A', '__________. And then?'],
  ['B', 'Walk past __________ and go through __________.'],
  ['A', 'Can I __________?'],
  ['B', 'Yes, but don\'t __________. __________ uses it all day.'],
  ['A', 'And who do I ask for?'],
  ['B', 'Ask for __________. He\'s / She\'s there until __________.'],
]));
out.push(table(['Role card 1 — to the office', 'Role card 2 — to the store room'], [[
  'From the trade counter: through the glass door, along the corridor, take the lift or the stairs to the second floor, turn left, second door. Don\'t use the lift with a trolley.',
  'From the yard: in at the loading door, past the forklift, turn right at the blue line, down three steps. Don\'t walk on the blue line.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** draw the route with your finger on the desk as you listen. Did you get lost? Say where.'));
out.push(PHRASE_CARD(['Excuse me.', 'Where do I go?', 'Turn right.', 'Walk past…', 'Don\'t park…', 'Ask for…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Give **two** colleagues directions from the door of this room to a place in this building — a different place each time. They must repeat the directions back before you say if they are right.'));
out.push(table(['Place', 'How many instructions?', 'Did they repeat it right?'], [['', '', ''], ['', '', '']], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I sent _______ to the _______. Go _______, turn _______, and it\'s _______._'));
out.push(p('**Listener task:** write the number of instructions. More than five is usually too many — say so.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you turn right_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the directions Nour sends to a new supplier\'s driver, and answer the questions.'));
out.push(box(null, [
  '**To:** Hamdan Printing — Mr Saeed (driver)   **Subject:** How to find our loading door',
  'Dear Mr Saeed,',
  'Please don\'t come to the trade counter at the front — the lorry cannot stop there.',
  'From the main street, turn right before the pharmacy into the small street. Go to the end and you will see a grey gate on your left. Go through the gate into the yard. Park on the left, next to the wall — please don\'t park in front of the gate, because the forklift uses it all day.',
  'The loading door is the big green door at the back of the yard. Ask for Abu Yasser; he is there from 7.30 until 4.30.',
  'If you are lost, telephone me on extension 212.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where must the driver **not** come, and why?'));
out.push(item('2', 'What can the driver see from the end of the small street?'));
out.push(item('3', 'What should the driver do if he is lost?'));
out.push(box('Writer\'s box', [
  '**Shape of written directions:** where **not** to go → the route, in the order you walk or drive it → where to park → what to look for → who to ask for and when → a telephone number.',
  'Give a **landmark**, not only a direction: _turn right **before the pharmacy**_. People find things, not angles.',
  'Written directions need **one instruction per sentence** or per clause. A long sentence with four turns in it gets read twice and still goes wrong.',
  '⚠ Always end with a telephone number. Directions are never perfect, and the number is what stops a lorry standing in the street.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write directions to **your** workplace, your home or your school for somebody who has never been (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Please don\'t ______________. From ______________, turn ______________ before ______________. Go ______________ and you will see ______________. Park ______________ — don\'t ______________, because ______________. Ask for ______________. If you are lost, telephone ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. **Walk** your partner\'s directions with your finger on a plan or in your head. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one landmark (a shop, a sign, a colour)', ''],
  ['One instruction per sentence', ''],
  ['Something you must **not** do, with a reason', ''],
  ['A name and a telephone number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their directions. The class listens with eyes closed and says where they got lost.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write directions from the nearest bus stop or service stop to your home, for a visitor carrying something heavy (35 words or more). Say where the stairs are, and where to rest.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s directions as the **visitor**. Write on a slip:  ★ _I would find it._   ✓ _Can you add a landmark at…?_   ? _one thing I still don\'t know_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the directions on the wall. Find the clearest one and count its instructions. Is clear the same as short?'));
out.push(box('Homework', ['Write your final directions. Then write the directions a taxi driver would need, in **three** sentences only (20+ words). What did you leave out?'], C.lblue, C.navy));

// ======================= CYCLE 3.6 =======================
out.push(pb());
out.push(h2('3.6  It\'s a kind of plastic'));
out.push(p('**Function:** saying what something is made of, and explaining a word you do not know   ·   **Grammar:** _made of_; _it\'s a kind of…_   ·   **Pronunciation:** _made of_ linking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What are these made of? _a box · a pallet · a window · a shelf · a bag_   →   _wood · glass · cardboard · metal · plastic_'));
out.push(p('**b**  Explain one of these without saying its name. Your partner guesses: _a stapler · a forklift · a trolley_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour not know the word for?   **A** the pallet   **B** the plastic wrap   **C** the corners'));
out.push(p('**b**  Listen again. **1** What are the corners made of?   **2** What are they for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  On the telephone to Aleppo', [
  ['Nour', 'Ms Shamsi, I need twelve rolls of the wide wrap, please. And… the things for the corners.'],
  ['Ms Shamsi', 'The corners?'],
  ['Nour', 'I\'m sorry, I don\'t know the word. They\'re a kind of card. You put them on the corner of the box so the strap doesn\'t cut it.'],
  ['Ms Shamsi', 'Ah — edge protectors. They\'re made of pressed cardboard.'],
  ['Nour', 'Edge protectors. Thank you. How do you spell that?'],
  ['Ms Shamsi', 'E-D-G-E, then protectors, P-R-O-T-E-C-T-O-R-S. How many?'],
  ['Nour', 'Two boxes. And is the wide wrap the same plastic as the narrow one?'],
  ['Ms Shamsi', 'The same plastic, yes, but it\'s thicker. It\'s better for the heavy pallets.'],
  ['Nour', 'Then the wide one. Thank you, Ms Shamsi.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – made of, and explaining a word**',
  table(['Pattern', 'Example'], [
    ['**be made of** + material', 'The pallet **is made of** wood.  ·  They **are made of** pressed cardboard.'],
    ['**It\'s a kind of** + noun', 'It\'s **a kind of** card.  ·  It\'s **a kind of** plastic.'],
    ['**You use it to / for** + verb', 'You **use it to** protect the corner.  ·  It\'s **for** lifting pallets.'],
    ['**You put it** + where', '**You put them on** the corner of the box.'],
    ['**It\'s like** + noun', 'It\'s **like** paper, but thicker.'],
  ], [1.4, 2.4]),
  '**Materials:** wood · metal · plastic · glass · paper · cardboard · cloth · rubber',
  '⚠ When you do not know a word, **do not stop**. Say _I don\'t know the word_ and then describe it: **kind** → **material** → **what it is for** → **where you put it**. That is how a B1 speaker buys something in a language they only half know.',
  '**Practise:** Explain each one in two sentences (_It\'s a kind of… You use it to…_).',
  '1 a stapler  2 a trolley  3 a ladder  4 plastic wrap  5 a filing cabinet',
  '**Useful phrases:**  I don\'t know the word.  ·  It\'s a kind of…  ·  It\'s made of…  ·  You use it to…  ·  It\'s like… but…  ·  How do you spell that?',
  '**Pronunciation – linking.** 🔊 **Track 3.12** Listen and repeat. The words join: _made of_ /ˈmeɪdəv/ · _made of wood_ /ˈmeɪdəv wʊd/ · _a kind of card_ /ə ˈkaɪndəv kɑːd/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A orders something but does not know its name; B helps and gives the word. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I need __________, please. And… __________.'],
  ['B', 'Sorry — what exactly?'],
  ['A', 'I don\'t know the word. It\'s a kind of __________. It\'s made of __________. You use it to __________.'],
  ['B', 'Ah — __________.'],
  ['A', '__________. How do you spell that?'],
  ['B', '__________. How many?'],
  ['A', '__________, please.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'A wants: a long metal thing with teeth that holds paper together in a big pile (B knows: a **bulldog clip**).',
  'A wants: the soft grey thing you put inside a box around a glass (B knows: **bubble wrap**).',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the description **before** the word is given. Could you guess it?'));
out.push(PHRASE_CARD(['I don\'t know the word.', 'It\'s a kind of…', 'It\'s made of…', 'You use it to…', 'It\'s like… but…', 'How do you spell that?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three** things from your own job whose English name you do not know. Describe each one to a colleague and write down the word they give you — or the word you find together.'));
out.push(table(['My description', 'The English word', 'Made of'], [['', '', ''], ['', '', ''], ['', '', '']], [2, 1.2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Teach the class **one** new word:  _It\'s a kind of _______. It\'s made of _______. You use it to _______. In English it\'s called _______._'));
out.push(p('**Listener task:** write every new word on one page. This page is your unit vocabulary.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _made from_ / _made by_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes for the new warehouse worker, and answer the questions.'));
out.push(box(null, [
  '**PACKAGING — what it is and what it is for**',
  '**Pallet.** A flat base made of wood. You put the boxes on it and the forklift lifts it. Never carry a pallet alone; they are heavy.',
  '**Plastic wrap.** A kind of thin plastic on a roll. You turn it round the pallet so the boxes don\'t move. The wide roll is thicker and we use it for the heavy pallets.',
  '**Edge protectors.** They are made of pressed cardboard. You put them on the corners of the box, under the strap, so the strap doesn\'t cut the box.',
  '**Strap.** A long narrow band, made of plastic. It holds the load. If a strap is cut or old, don\'t use it — take a new one.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is a pallet made of, and what do you do with it?'));
out.push(item('2', 'Why do you use edge protectors?'));
out.push(item('3', 'What must you do with an old strap?'));
out.push(box('Writer\'s box', [
  '**Shape of an explanation:** the name in bold → what kind of thing it is and what it is **made of** → what you **do** with it → one rule or warning.',
  'Three short sentences are enough for each thing. An explanation that runs to six lines stops being read.',
  'Use **so** to give the purpose: _You put them on the corners **so** the strap doesn\'t cut the box._',
  '⚠ Write for somebody who has the thing in their hand and does not know its name — not for somebody who already knows.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Explain **three** things from your own workplace for a new colleague (25 words or more). Use the frame for each.'));
out.push(p('**______________.** A / An ______________ made of ______________. You ______________ so ______________. ______________ don\'t ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read one explanation and **draw** the thing. Show the drawing to your partner. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The material is there', ''],
  ['What you do with it is there', ''],
  ['One rule or warning', ''],
  ['Three short sentences, not one long one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Hold up two drawings of the same explanation. If they are different, the explanation needs one more sentence — which one?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Explain something from **your culture** that has no simple English name — a dish, a tool, a kind of shop, a part of a house (35 words or more). Use _a kind of_, _made of_ and _you use it to_.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Now I know what it is._   ✓ _Can you say what it is made of?_   ? _a question a foreigner would ask_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Choose the explanation you could use with a real visitor tomorrow and say why.'));
out.push(box('Homework', ['Write your final explanation. Then look at five things in your kitchen and write what each one is made of and what you use it to do (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review & Mediate: the floor plan and the safety notice'));
out.push(p('**Function:** telling a colleague, in simple words, what a plan and a safety notice say   ·   **Review:** _there is / there are_ · prepositions · _some / any_ · adjectives · directions · materials'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _______ six desks and _______ one printer.',
  '**2** Three prepositions that say where something is, with an example of each.',
  '**3** _some_ or _any_: _We\'ve got ______ tape, but we haven\'t got ______ wrap._',
  '**4** The difference between _very old_ and _too old_.',
  '**5** Four things to say when you do not know the English word for something.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the two papers on the wall?   **A** a plan and a price list   **B** a plan and a safety notice   **C** two safety notices'));
out.push(p('**b**  Listen again. **1** Where is the fire exit?   **2** What must nobody put in the corridor?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  The plan on the wall', [
  ['Abu Yasser', 'Nour, they put two new papers by the loading door. A drawing and a lot of small writing.'],
  ['Nour', 'The drawing is the floor plan. The writing is the safety notice.'],
  ['Abu Yasser', 'The drawing first. What is it?'],
  ['Nour', 'It\'s the warehouse from above. The loading door is the green one at the back; the shelves are the long grey lines; the forklift area is the yellow square.'],
  ['Abu Yasser', 'And the red arrow?'],
  ['Nour', 'That\'s the fire exit. It\'s the small door between the office stairs and the store room.'],
  ['Abu Yasser', 'That door has three pallets in front of it.'],
  ['Nour', 'That\'s what the notice says. It says nothing must be in front of the fire exit, and nothing in the corridor — not even for one hour.'],
  ['Abu Yasser', 'Not even for one hour. Good. Anything else?'],
  ['Nour', 'One more thing: the yellow square is for the forklift only. Nobody walks there.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – saying what a plan and a notice say**',
  table(['A plan', 'A rule', 'To finish'], [
    ['It\'s the ___ from above.', 'It says nothing must be…', 'Anything else?'],
    ['The ___ is the ___ at the back.', 'Nobody ___s there.', 'One more thing:…'],
    ['The red / yellow one is the…', 'Not even for one hour.', 'That\'s all.'],
  ], [1.5, 1.5, 1.2]),
  '⚠ With a **plan**, start by saying **what you are looking at** — _it\'s the warehouse from above_ — before any detail. Then go from the **big shapes** to the small ones.',
  '⚠ With a **safety notice**, say the rule **and** the thing it stops: _nothing in front of the fire exit_ is a rule; _not even for one hour_ is what people actually do wrong.',
  '**Practise:** The notice says: _Access to emergency exits must be kept clear at all times. Obstruction of the walkway is prohibited._ Say it in easy English, in one sentence, for a colleague carrying a box.',
  '**Useful phrases:**  It\'s the… from above.  ·  The green one is…  ·  It says nothing must be…  ·  Nobody walks there.  ·  Not even for one hour.',
  '**Pronunciation – the strong word in a rule.** 🔊 **Track 3.14** Listen. In a rule, the strong word is the thing you must **not** do: _**NOTHING** in front of the fire exit._ · _**NOBODY** walks in the yellow square._ Repeat the four rules.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads notice 1 silently and tells B what it says, in easy English. B closes the book. Then swap with notice 2.'));
out.push(table(['Notice 1 — for A', 'Notice 2 — for B'], [[
  '**SAFETY NOTICE.** Access to emergency exits must be kept clear at all times. The obstruction of walkways and stairwells, whether temporary or permanent, is strictly prohibited. Materials awaiting collection must be stored in the designated area only.',
  '**SAFETY NOTICE.** Personnel are reminded that the forklift operating area, marked in yellow, is restricted to authorised operators. Pedestrians must use the marked walkway. High-visibility clothing must be worn in the yard at all times.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their notice for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one** thing you must stop doing from tomorrow.'));
out.push(PHRASE_CARD(['It\'s the… from above.', 'The green one is…', 'It says nothing must be…', 'Nobody walks there.', 'Not even for one hour.', 'One more thing…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a plan or a safety notice in formal English. Read it silently. Then tell **two** colleagues what it means for them. Do not show them the paper.'));
out.push(table(['Who I told', 'The rule for them', 'Did they understand?'], [['', '', ''], ['', '', '']], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the notice you mediated. This is the **third** unit of this book, and the mediation task comes back in every unit — so listen for the rule **and** the reason.'));
out.push(p('_It\'s a ______. It says ______. That means we must not ______. The reason is ______._'));
out.push(p('**Listener task:** write the rule. Then say whether the speaker explained **why**.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _KEEP CLEAR — FIRE EXIT._   **A** The door is locked. **B** Do not put anything here. **C** There is a fire.',
  '**2**  _Yellow area: forklift only._   **A** Walk in the yellow area. **B** Park the forklift outside the yellow area. **C** Do not walk in the yellow area.',
  '**3**  _Paper and envelopes: cupboard, middle shelf._   **A** The cupboard is in the middle. **B** Look on the middle shelf of the cupboard. **C** Take the paper to the cupboard.',
  '**4**  _No wrap left. Telephone Aleppo today. — A.Y._   **A** The wrap came from Aleppo today. **B** There is no plastic wrap; call the supplier now. **C** Aleppo telephoned today.',
  '**5**  _Lorries: use the side gate, not the front._   **A** Lorries must go to the side gate. **B** The side gate is closed. **C** Cars use the side gate.',
  '**6**  _Took the Homs file — N.S., back Thursday._   **A** The Homs file is in the cabinet. **B** N.S. has the file until Thursday. **C** Put the Homs file back on Thursday.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about a **place**, the three points are usually: **where** it is · **what is there** · **one rule** about it.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to a new worker in the warehouse. Say: **(1)** where the fire exit is, **(2)** that nothing must be in front of it, **(3)** that nobody walks in the yellow square. Use the frame.'));
out.push(p('Dear ______________, The fire exit is ______________. Please ______________ in front of it, not even ______________. The yellow square is ______________, so ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  Where the fire exit is', ''], ['2  Nothing in front of it', ''], ['3  Nobody walks in the yellow square', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('A friend is coming to your home for the first time while you are out. Write a message (25 words or more). Say: **(1)** where the key is, **(2)** what is in the room he or she will use, **(3)** one thing not to do.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _Thanks! Is the key under the big plant or the small one? I won\'t open the window._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  ___ six desks in the office.   a) There is   b) There are   c) It is',
  '2  The file is ___ the second drawer.   a) on   b) at   c) in',
  '3  We haven\'t got ___ plastic wrap.   a) some   b) any   c) no any',
  '4  The box is ___ heavy — I can\'t lift it.   a) very   b) too   c) much',
  '5  ___ park in front of the gate.   a) Don\'t   b) Not   c) You not',
  '6  The pallet is made ___ wood.   a) from   b) by   c) of',
  '7  The printer is ___ the two cabinets.   a) between   b) among   c) middle',
  '8  It\'s a ___ of thin plastic on a roll.   a) type   b) kind   c) sort of',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 3.15** Listen to a driver asking the way. Complete the note.   Go out and turn: ______   Walk past: ______   Go through: ______   Park: ______   Ask for: ______'));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Driver', 'Excuse me, where do I take the boxes?'],
  ['Nour', 'Go out of this door and turn right.'],
  ['Driver', 'Right. And then?'],
  ['Nour', 'Walk past the small window and go through the grey gate into the yard.'],
  ['Driver', 'Where do I park?'],
  ['Nour', 'On the left, next to the wall. Then ask for Abu Yasser at the green door.'],
]));
out.push(p('**C  Writing.** Write a short message telling a colleague where three things are kept in your office (25+ words).'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what there is in a room, and how many',
  '☐ say exactly where something is, and ask for something I cannot find',
  '☐ say what we have got and have not got on the shelves',
  '☐ describe equipment, and say what is _very_ and what is _too_',
  '☐ give directions inside a building or a yard',
  '☐ say what something is made of, and explain a word I do not know',
  '☐ tell a colleague in easy English what a plan and a safety notice say',
  '☐ write an equipment list, a "where things are kept" notice, a stock note, a one-page equipment note, written directions and an explanation page',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
