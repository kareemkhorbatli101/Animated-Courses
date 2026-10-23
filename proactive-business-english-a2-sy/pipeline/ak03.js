// Proactive Business English A2 · Syria Edition · Book 1 · Unit 3 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 3  The Office and the Warehouse'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 3.1 =====================
out.push(h2('3.1  There are six desks and one printer'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — the learners count their own room. Check the form: _There **is** one board._ / _There **are** twelve chairs._'));
out.push(p('**b**  shelf → **shelves** · box → **boxes** · tray → **trays** · person → **people**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (making a list of the office things)   **b**  1 Six.  2 A photocopier and a scanner.'));
out.push(p('**Language box – Practise:**  1 There are  2 There isn\'t  3 There are  4 There aren\'t  5 are there'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'How many shelves are there?'],
  ['B', 'There are twenty-four. And there\'s one forklift.'],
  ['A', 'Is there a computer?'],
  ['B', 'No, there isn\'t. We use the one in the office.'],
  ['A', 'And windows?'],
  ['B', 'There are two trolleys and a ladder, but there aren\'t any windows.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two missing things (role card 1: a computer and a window; role card 2: a scanner and — if they notice — a second chair). Typical errors: _There is six desks_ → _There **are**_; _How many desk are there?_ → _desk**s**_; _It is a printer in the office_ → _**There** is a printer_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'How many desks are there in your office?'],
  ['B', 'Only two. It\'s a small room.'],
  ['A', 'Is there a printer?'],
  ['B', 'There isn\'t one in the room. There\'s one in the corridor and everybody uses it.'],
]));
out.push(table(['Room / place', 'There is…', 'There are…', 'There isn\'t…'], [
  ['My office', 'a cupboard, a window', 'two desks, four chairs', 'a printer (it is in the corridor)'],
  ['The shop', 'a counter, a till', 'six shelves, two fridges', 'a store room'],
  ['The workshop', 'a bench, a sink', 'three machines, many tools', 'a telephone'],
], [1.2, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In Rasha\'s office there are two desks and four chairs. There\'s a cupboard and a window, but there isn\'t a printer — it\'s in the corridor and everybody uses it."', 'Most common missing thing in the sample: a printer in the room itself.']));
out.push(stage('5', 'Read'));
out.push(p('1 One chair is for visitors.  2 A photocopier and a scanner.  3 To send the warehouse list too, if they need it.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Shop equipment list. Dear colleagues, This is the list for the front shop. There are six shelves, two fridges and four chairs. There is one counter, one till and one small printer. There isn\'t a scanner — we use the photocopy shop next door. Please tell me if you need the store room list too. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_there is_ / _there are_ correct', '✓'],
  ['Plural **-s** after every number', '✗ – _six shelf_ → _six shelv**es**_'],
  ['At least one _there isn\'t_', '✓'],
  ['Says what you use instead', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The list is complete and easy to read. Check _six shelf_ — it needs the plural."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _There is two fridges._  →  After: _There are two fridges._ (plural → _there are_)'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['My kitchen is small. There is one window above the sink and there is a table in the middle. There are two cupboards on the wall and there are four chairs, but one is broken. There isn\'t a dishwasher, and there isn\'t room for one. There is always bread on the table.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"There is always bread on the table" — I can see the room._   ✓ _Can you add how many cupboards are full?_   ? _Where is the fridge?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Guessing game: the room with a broken chair and bread on the table is usually guessed first, because the detail is personal, not the furniture.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['**Store room.** There are fourteen shelves and about sixty boxes. There is one ladder and one trolley. There isn\'t a light above the third row.']));

// ===================== 3.2 =====================
out.push(pb());
out.push(h2('3.2  It\'s in the second drawer'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — a physical drill. Check the form as they speak: _I\'m putting it **on** the book. · Now it\'s **under** the book._'));
out.push(p('**b**  The folder is **on** the shelf. · The box is **under** the desk. · The printer is **between** the two cabinets. · My bag is **behind / next to** the chair.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the Homs file)   **b**  1 On Nadia\'s desk, between the tray and the keyboard (under the tray, on the left).  2 Nadia took the April invoices yesterday and did not put it back.'));
out.push(p('**Language box – Practise:**  1 in  2 between  3 under / behind  4 next to … on  5 behind'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Where\'s the stapler? It isn\'t on my desk.'],
  ['B', 'It should be in the top drawer.'],
  ['A', 'I looked. It isn\'t there.'],
  ['B', 'Then look on the printer, on the right.'],
  ['A', 'Here it is — between the printer and the paper.'],
  ['B', 'I\'ll put it back in the drawer this evening.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners draw a small plan. Typical errors: _in the left_ → _**on** the left_; _It\'s in the shelf_ → _**on** the shelf_; _behind of the chair_ → _behind the chair_ (no _of_).'));
out.push(stage('4', 'Your turn – sample exchange and notes'));
out.push(dlg(null, [
  ['A', 'Is it in the room?'],
  ['B', 'Yes.'],
  ['A', 'Is it under something?'],
  ['B', 'No.'],
  ['A', 'Is it behind the board?'],
  ['B', 'Yes — you found it.'],
]));
out.push(table(['Object', 'Where I hid it', 'How many questions?'], [
  ['a pen', 'behind the board', '3'],
  ['a key', 'under the third chair', '6'],
  ['a coin', 'on top of the cupboard', '8'],
], [1, 2, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I hid the coin. It was on top of the cupboard, between the box and the wall. Rasha found it in eight questions."', 'Best hiding place in the sample: on top of the cupboard — high places are asked about last.']));
out.push(stage('5', 'Read'));
out.push(p('1 In the filing cabinet by the window, drawer 2 (Hama and Homs).  2 In the cupboard, on the bottom shelf.  3 Write your name on the list on the noticeboard, and put it back the same day.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHERE THINGS ARE KEPT** — the front shop. Receipts: in the drawer under the till. Spare bulbs: in the cupboard, on the top shelf. Cleaning things: behind the door, in the blue box. Keys: on the hook next to the fridge, never in a pocket. If you take the store-room key, please write your name in the book.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Big to small', '✓ – _in the cupboard, on the top shelf_'],
  ['_in_ for inside, _on_ for a surface', '✗ – _in the hook_ → _**on** the hook_'],
  ['Every group of things has a place', '✓'],
  ['A rule at the end', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I could find everything. Check _in the hook_ — a hook is a surface, so it is _on_."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('A line passes the eyes-closed test when it names the **furniture** first: _in the cupboard, on the top shelf_ works; _on the top shelf_ alone does not, because there are four top shelves in the room.'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Hi Nadia, I need three things from your desk and I don\'t want to open everything. Where is the Aleppo price list? I looked in the second drawer and on the shelf above the cupboard. Where is the small calculator? And where do you keep the stamps? I looked under the tray — only paper there. Thank you! Nour']));
out.push(stage('7P', 'Respond – sample answer written by the partner'));
out.push(sample(null, ['The price list is in the green folder, in the third drawer, at the back. The calculator is in my bag — I\'m sorry, take Hala\'s from the counter. The stamps are in the small tin on top of the filing cabinet, behind the plant.']));
out.push(stage('7R', 'Share – sample'));
out.push(p('An answer is exact enough when it gives the **furniture**, the **part** of it and, for small things, the **landmark**: _in the small tin on top of the filing cabinet, behind the plant_.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['My keyboard is in front of the screen. My cup is on the right, next to the telephone. The bin is under the desk. The stapler is in the top drawer. My bag is behind the chair. The calendar is above the desk.']));

// ===================== 3.3 =====================
out.push(pb());
out.push(h2('3.3  Have we got any plastic wrap?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _I\'ve got some keys. I haven\'t got any money. Have you got any paper?_'));
out.push(p('**b**  We\'ve got **some** boxes. · We haven\'t got **any** tape. · Have you got **any** paper? · There are **some** pallets in the yard.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (plastic wrap)   **b**  1 Forty.  2 Ms Shamsi sends on Tuesday, so it comes next week if Nour calls today.'));
out.push(p('**Language box – Practise:**  1 any  2 some … no (or: … but no)  3 any  4 some  5 some'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Have we got any printer ink?'],
  ['B', 'We haven\'t got any. The last cartridge finished on Thursday.'],
  ['A', 'None at all?'],
  ['B', 'None at all. There\'s some paper — six packets — and there are some envelopes, but no ink.'],
  ['A', 'And pens?'],
  ['B', 'Pens we\'ve got. Pens are not the problem.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write two lists. Typical errors: _Have we got some wrap?_ → _**any**_ in a question; _We haven\'t got no wrap_ → one negative only; _How much boxes_ → _How **many** boxes_.'));
out.push(stage('4', 'Your turn – sample list'));
out.push(table(['We\'ve got some…', 'We haven\'t got any…', 'Who buys it?'], [
  ['tape, boxes, pens', 'rope', 'Fadi, on the way'],
  ['water, bread', 'cups', 'Rasha, at the shop below'],
  ['a trolley, a ladder', 'gloves', 'Samir, from the warehouse'],
], [1.3, 1.3, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We\'ve got some tape and some boxes. We haven\'t got any rope, so Fadi is buying it on the way."', 'The thing more than one group forgot, in the sample: **gloves** — and, very often, **water**.']));
out.push(stage('5', 'Read'));
out.push(p('1 Boxes — 40 big and about 100 small.  2 Plastic wrap (none at all), and staples for the big stapler.  3 Because Ms Shamsi sends on Tuesday; if Nour calls tomorrow, the wrap comes a week later.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**STOCK NOTE — the shop**, Thursday, end of day. We\'ve got some bags (about 200) and some receipt rolls (four). We haven\'t got any change for the till — none at all since the morning. Please go to the bank today, because the bank is closed tomorrow and Saturday. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_some_ positive, _any_ negative', '✓'],
  ['A number with at least two things', '✓ – 200 bags, four rolls'],
  ['The action says **who** and **when**', '✗ – _please go to the bank_ — who?'],
  ['A reason for the time', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The reason for today is strong. Who should go to the bank? Put a name in."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('A last sentence somebody can act on today names a **person**, a **thing** and a **time**: _Please telephone Ms Shamsi today and ask for twelve wide rolls._'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Hi everybody, For Saturday: we\'ve got some chairs (about twenty), some plates and all the glasses. We haven\'t got any ice and we haven\'t got any bread. Samir, could you buy the ice on Saturday morning, not before — it melts. I\'ll order the bread on Friday evening. Please tell me if you have a big table.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I know exactly what to buy and when._   ✓ _How many kilos of ice?_   ? _What time does it all start?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Numbers help because the person buying does not have to guess, and because you can check the list afterwards without asking anybody.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['There is some rice and there is some oil. There are some tins of tomatoes. There isn\'t any sugar. We haven\'t got any tea. There are no eggs.']));

// ===================== 3.4 =====================
out.push(pb());
out.push(h2('3.4  It\'s old, but it\'s not too slow'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  new ↔ **old** · heavy ↔ **light** · wide ↔ **narrow** · fast ↔ **slow** · noisy ↔ **quiet**'));
out.push(p('**b**  _It\'s **too** small_ is the problem: _too_ means it does not work for us. _Very small_ is only a fact — it may still be fine.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a new printer)   **b**  1 It is too slow for the delivery notes (forty pages take nine minutes) and very noisy.  2 He asks for the nine minutes and the telephone problem on one page, and he will ask the head office; meanwhile the warehouse moves heavy things down and light things up.'));
out.push(p('**Language box – Practise:**  1 too  2 very  3 too  4 very  5 too'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Can we buy a new trolley? This one is very noisy.'],
  ['B', 'Noisy is not a reason. Is it too heavy?'],
  ['A', 'It isn\'t too heavy for two people. But it\'s too heavy for one, and one wheel is broken.'],
  ['B', 'That\'s a better reason. What about the second trolley?'],
  ['A', 'It\'s very old, but it\'s not too slow.'],
  ['B', 'Then we repair the wheel. That costs nothing.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the reason that worked and the cheap answer. Typical errors: _two news shelves_ → _two **new** shelves_ (no -s on the adjective); _It\'s too good_ meaning _very good_; _The shelf is high too_ → _**too** high_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The thing', 'Very…', 'Too… for…'], [
  ['the office fan', 'very old', 'too noisy for a telephone call'],
  ['the back door', 'very heavy', 'too heavy for one person with a box'],
  ['the counter light', 'very dim', 'too dark for reading small numbers'],
], [1, 1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We\'ve got a very old fan. It\'s too noisy for telephone calls, so we switch it off when the bank rings — and then the room is too hot."', 'The problem a class usually votes to fix first is the one that stops **work**, not the one that is most unpleasant.']));
out.push(stage('5', 'Read'));
out.push(p('1 That the printer is eleven years old.  2 About half an hour a day — forty pages take nine minutes and the notes are printed twice a day.  3 Move the printer to the small room; that costs nothing and solves the telephone problem.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE SHOP FRIDGE — one page for the owner.** The fridge is nine years old. That is not the reason for this note. It is too warm for milk in the afternoon; at four o\'clock it is 9°C, not 4°C. We throw away about six litres a week. It is not too small, and the door closes well. If a new fridge is not possible this year, we can move the milk to the small fridge in the store room. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_too_ only for real problems', '✓'],
  ['At least two numbers', '✓ – 9°C, six litres a week'],
  ['One sentence about what still works', '✓'],
  ['A cheap answer at the end', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The six litres a week is the sentence that will get you a new fridge. Put it first."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The numbers that convince a manager are the ones that turn into **money or time**: _six litres a week_, _half an hour a day_. _Nine years old_ convinces nobody.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['My aunt is a seamstress. Her machine is very old and very heavy — black metal, from her mother. The light above it is too dim for dark cloth, so she works by the window. Her scissors are long and sharp and she never lets anybody else use them. The room is small, but it is warm and quiet.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"she never lets anybody else use them" — now I understand the scissors._   ✓ _Can you add how old the machine is?_   ? _What does she do when there is no electricity?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Adjectives that usually appear only once in a class: _sharp, dim, rusty, smooth, stiff_. Collect them on the board as the unit\'s extra vocabulary.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Very: the sofa is very big · the stairs are very steep · the kitchen is very warm · the window is very old · the street is very noisy.  Too: the cupboard is too high for my mother — she cannot reach the top shelf. The balcony door is too stiff to open with one hand.']));

// ===================== 3.5 =====================
out.push(pb());
out.push(h2('3.5  Go down the stairs and turn left'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check the imperative: _**Go** straight, **turn** left, **take** the second door._ — no _you_.'));
out.push(p('**b**  go down **the stairs** · turn **left** · take the **lift** · walk past **the printer** · it\'s on **your right**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a driver)   **b**  1 Out of the door and right.  2 Park in front of the gate (the forklift uses it all day).'));
out.push(p('**Language box – Practise:**  **1** go out of this door · **2** turn right · **3** walk past the small window · **4** go through the gate · **5** it\'s the big green door at the back'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Excuse me. I\'ve got a delivery for the office. Where do I go?'],
  ['B', 'Not here — this is the trade counter. Go through the glass door and along the corridor.'],
  ['A', 'Along the corridor. And then?'],
  ['B', 'Take the stairs or the lift to the second floor, then turn left. It\'s the second door.'],
  ['A', 'Can I take the trolley in the lift?'],
  ['B', 'No — don\'t use the lift with a trolley. Use the stairs, or leave it downstairs.'],
  ['A', 'And who do I ask for?'],
  ['B', 'Ask for Nour. She\'s there until four.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners follow the route with a finger. Typical errors: _You turn right_ → _**Turn** right_; _Go to the stairs down_ → _Go **down the stairs**_; _It\'s in your left_ → _**on** your left_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Place', 'How many instructions?', 'Did they repeat it right?'], [
  ['the photocopy room', '4', 'Yes'],
  ['the back entrance', '6', 'No — forgot the second turn'],
], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I sent Samir to the photocopy room. Go out of this door, turn left, walk past the water cooler, and it\'s the door on your right."', 'Four instructions were repeated back correctly; six were not. More than five instructions is usually too many for one telling.']));
out.push(stage('5', 'Read'));
out.push(p('1 The trade counter at the front — the lorry cannot stop there.  2 A grey gate on his left.  3 Telephone Nour on extension 212.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Saeed, Please don\'t come to the main gate — it is closed after two. From the Mezzeh highway, turn right before the big bakery into Zahra Street. Go to the third building and you will see a brown door next to a barber\'s shop. Park on the right, under the trees — don\'t park opposite the door, because the neighbours need to get out. Ask for Rasha on the second floor. If you are lost, telephone 0988 450 176.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one landmark', '✓ – the bakery, the barber\'s'],
  ['One instruction per sentence', '✓'],
  ['Something you must **not** do, with a reason', '✓'],
  ['A name and a telephone number', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The bakery and the barber\'s make this easy. Could you add which floor the brown door leads to?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Listeners usually get lost at the point where **two** instructions are joined with _and_ in one sentence. Splitting that sentence fixes it without adding a word.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Get off at the Mezzeh roundabout and walk towards the pharmacy. Turn into the first street on the right. It is a slope — go slowly with a heavy bag. At the top there is a small shop; stop there if you need to rest, and they will keep the bag. My building is the next one, number 14. The stairs are on the left, inside, and I am on the third floor.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"stop there if you need to rest" — very kind and very useful._   ✓ _Can you add a landmark at the top of the slope?_   ? _Is there a light on the stairs at night?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Clear is **not** the same as short. The clearest directions usually have one or two **more** words than the shortest — the landmark and the warning.'));
out.push(stage('HW', 'Homework – sample (three sentences, ≈30 words)'));
out.push(sample(null, ['Mezzeh, Zahra Street, after the big bakery. Stop at the barber\'s shop — the building with the brown door, number 14. If the street is closed, the one before it is fine.', '_Left out: the parking, the floor, the stairs, the warning about the neighbours. A taxi driver needs the street and the landmark, nothing else._']));

// ===================== 3.6 =====================
out.push(pb());
out.push(h2('3.6  It\'s a kind of plastic'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  a box → **cardboard** · a pallet → **wood** · a window → **glass** · a shelf → **metal** (or wood) · a bag → **plastic**'));
out.push(p('**b**  Open. Sample for a stapler: _It\'s a small metal thing. You use it to hold two papers together. You press it with your hand._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (the corners — edge protectors)   **b**  1 Pressed cardboard.  2 You put them on the corner of the box so the strap doesn\'t cut it.'));
out.push(p('**Language box – Practise (samples):**  1 _A stapler is a small metal thing. You use it to hold papers together._  2 _A trolley is a kind of small cart with wheels. You use it to move heavy boxes._  3 _A ladder is made of metal or wood. You use it to reach high shelves._  4 _Plastic wrap is a kind of thin plastic on a roll. You use it to hold the boxes on a pallet._  5 _A filing cabinet is a tall metal cupboard with drawers. You use it to keep papers in order._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I need two boxes of A4 paper, please. And… the other thing.'],
  ['B', 'Sorry — what exactly?'],
  ['A', 'I don\'t know the word. It\'s a kind of clip. It\'s made of metal, black, with two handles. You use it to hold a big pile of paper together.'],
  ['B', 'Ah — a bulldog clip.'],
  ['A', 'A bulldog clip. How do you spell that?'],
  ['B', 'B-U-L-L-D-O-G, then clip. How many?'],
  ['A', 'A box of twenty, please.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the description before the word. A good description has **kind → material → use**; if the class cannot guess, the missing part is almost always the **use**. Typical errors: _made from wood_ → _made **of** wood_ (for a material); _It\'s for to hold_ → _It\'s **for holding**_ / _You use it **to hold**_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['My description', 'The English word', 'Made of'], [
  ['a flat thing with a handle, for moving bread in and out of an oven', 'a peel', 'wood'],
  ['the thin paper you put between two cakes in a box', 'greaseproof paper', 'paper'],
  ['the metal thing that holds the pipe to the wall', 'a bracket / a clamp', 'metal'],
], [2, 1.2, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It\'s a kind of flat spade with a long handle. It\'s made of wood. You use it to put bread into the oven and take it out. In English it\'s called a peel."']));
out.push(stage('5', 'Read'));
out.push(p('1 Wood. You put the boxes on it and the forklift lifts it (and never carry one alone).  2 So the strap doesn\'t cut the corner of the box.  3 Don\'t use it — take a new one.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Receipt roll.** A roll of thin paper made for the till. You put it in the small door under the screen so the machine can print. Don\'t pull the paper when the machine is printing.', '**Till key.** A small metal key on a red ring. You use it to open the drawer when the power is off. Don\'t leave it in the lock.', '**Price gun.** A plastic tool with a handle. You use it to put the price labels on the tins. Don\'t use it on fruit — the labels don\'t come off.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The material is there', '✗ – the price gun: "plastic tool" is there, but the till key ring is not described'],
  ['What you do with it is there', '✓'],
  ['One rule or warning', '✓'],
  ['Three short sentences', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I could draw all three. The warning about the fruit is exactly the kind of thing a new worker needs."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('When two drawings differ, the missing sentence is nearly always the **size or the place**: _a small key_, _under the screen_. Add one of those and the drawings match.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['A _dallah_ is a kind of coffee pot. It is made of brass or steel and it has a long curved spout and a lid like a little dome. You use it to make and serve Arabic coffee with cardamom. You do not wash it with soap — only with water — and you never fill it more than half full, because the coffee must have room to rise.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"a lid like a little dome" — I can see it._   ✓ _Can you say what it is made of first?_   ? _How many cups does one dallah serve?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The explanation you could use with a real visitor tomorrow is the one that answers the question they would actually ask — usually _what do I do with it?_, not _what is it made of?_'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['The pot is made of steel; you use it to boil water. The spoon is made of wood; you use it to stir. The bowl is made of glass; you use it to mix. The board is made of wood; you use it to cut. The sieve is made of metal and plastic; you use it to wash rice.']));

// ===================== 3.7 =====================
out.push(pb());
out.push(h2('3.7  Review & Mediate: the floor plan and the safety notice'));
out.push(stage('1', 'Get ready – Unit 3 quiz'));
out.push(p('**1** _There are_ six desks and _there is_ one printer.  **2** Sample: _in_ the drawer · _on_ the shelf · _between_ the two cabinets.  **3** some … any.  **4** _Very old_ is a fact; _too old_ means it does not work for us — it is a problem, and it asks for money.  **5** _I don\'t know the word_ · _It\'s a kind of…_ · _It\'s made of…_ · _You use it to…_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a plan and a safety notice)   **b**  1 The small door between the office stairs and the store room (the red arrow).  2 Anything — nothing must be in the corridor, not even for one hour.'));
out.push(p('**Language box – Practise (sample):**  _Don\'t leave anything in front of the fire doors or in the corridor — not even for a minute._'));
out.push(stage('3', 'Practise – sample mediation of notice 1'));
out.push(sample(null, ['"It\'s the safety notice. It says nothing can stand in front of a fire door or in the corridor or on the stairs — not even for one hour. If something is waiting to go out, it goes in the marked area, not in the corridor. That\'s all."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one thing they must stop doing. The notice is in formal English (_obstruction_, _designated area_, _authorised operators_); a learner who repeats those words has **not** mediated. Ask for it again in words a driver would use.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The rule for them', 'Did they understand?'], [
  ['Fadi', 'nothing in front of the green door, not even for ten minutes', 'Yes'],
  ['Samir', 'wear the yellow jacket in the yard, every time', 'Not at first — he thought it was only for drivers'],
], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a safety notice from the loading door. It says nothing can stand in front of the fire exit. That means we must not leave the pallets by the small door, not even for an hour. The reason is that the fire exit is the only other way out of the warehouse."']));
out.push(note('Third unit of the book, so the ordinal is "third". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '"keep clear" = leave nothing there'],
  ['2', 'C', 'forklift only = no people walking'],
  ['3', 'B', 'the place is given: cupboard → middle shelf'],
  ['4', 'B', '"no wrap left" + "telephone today"'],
  ['5', 'A', 'lorries are sent to the side gate'],
  ['6', 'B', 'N.S. took it and comes back Thursday'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Samir, The fire exit is the small door between the stairs and the store room. Please don\'t put anything in front of it, not even for ten minutes. The yellow square is for the forklift only, so please walk round it. Thank you. Nour  _(42 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  Where the fire exit is', '✓'],
  ['2  Nothing in front of it', '✓'],
  ['3  Nobody walks in the yellow square', '✓'],
  ['25 words or more', '✓ – 42 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Rasha, The key is under the grey stone next to the door, not under the plant. The room on the right is yours — there\'s a bed, a small table and a fan. Please don\'t open the balcony door; the lock is broken. See you at seven! Nour']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thanks, Nour! I found the stone. Is the fan the one on the table or the big one? I won\'t touch the balcony door. See you this evening.']));
out.push(stage('✓', 'Unit 3 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'b', 'b', 'a', 'c', 'a', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Go out and turn: **right** · Walk past: **the small window** · Go through: **the grey gate (into the yard)** · Park: **on the left, next to the wall** · Ask for: **Abu Yasser (at the green door)**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Hala, The customer files are in the filing cabinet by the window — Homs is in the second drawer. The paper is in the cupboard, on the middle shelf. The stapler is in the top drawer of the desk next to the printer. Please put things back the same day. Nour  _(49 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** three things, each with a place — one mark each. A place is only a place if somebody could find it: _in the cupboard_ with four cupboards in the room scores nothing.',
  '**Language (2):** _there is / there are_ and prepositions used correctly.',
  '**Organisation and length (2):** one thing per sentence; 25 words or more.',
  '⚠ Mark the **findability**, not the grammar alone. That is what this genre is for.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 3', [
  '**1  _There is_ with a plural.** _There is six desks._ It survives into B1 if it is not killed here. Drill the two forms as a pair, never alone.',
  '**2  _in_ for a surface.** _in the shelf_, _in the left_, _in the hook_. Arabic uses one preposition where English uses three; teach _in = inside something closed_ and make learners mime it.',
  '**3  _too_ for _very_.** _My sister is too clever._ This is not only grammar: at work, _too_ asks for money and _very_ does not, so the mistake is expensive. Practise it with the equipment note in 3.4, where the difference is the whole argument.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 3 · Answer Key');
