// Proactive Business English A2 · Syria Edition · Book 2 · Unit 16 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 16  Then and Now'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit asks learners to collect their own workplace\'s history, and most of it has never been written down.** Several tasks send them to ask the longest-serving person at their work. Those answers come back better than anything in this key, and they are worth ten minutes of the next lesson.',
  '⚠ The unit is careful about the word _progress_. Some of what changed is better and some is only newer. Mark down a history in which everything improved: the Writer\'s boxes ask for one thing that was worse in the past and one thing that is worse now, and both are part of the task.',
], C.grey, C.navy));

// ===================== 16.1 =====================
out.push(h2('16.1  We used to write every order by hand'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. If the class is new, send them to ask; the asking is half the unit.'));
out.push(p('**b**  _We used to write it by hand._ The other two are the two standard errors: the missing **d**, and **-ing** after _to_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (write every order by hand)   **b**  1 So that the two columns could be matched at the end of the day — a difference meant something was still in the warehouse that a customer was expecting.  2 Writing in the rain with a pen that would not work. He misses the eleven minutes.'));
out.push(p('**Language box – Practise (samples):**  1 We used to answer every call on one line. We didn\'t use to have a second line. Did you use to take messages on paper?  2 We used to send everything by post. 3 We used to be paid in cash. 4 Customers used to come in person. 5 There used to be a map on the wall.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Abu Yasser, what is this drawer? It is full of cards and the last one is 2018.'],
  ['B', 'That is the card index. We used to keep a card for every customer, with every order written on the back.'],
  ['A', 'Why on the back?'],
  ['B', 'Because you could see a man\'s whole history in one hand. It took thirty seconds and it was never down.'],
  ['A', 'And now?'],
  ['B', 'Now it is on the screen, and it is faster, and nobody looks at the history at all because it is three clicks away instead of in your hand.'],
  ['A', 'Do you miss it?'],
  ['B', 'I do not miss the handwriting. I miss the hand. We didn\'t use to telephone a customer without knowing what he bought last year.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the thing that is missed — never the object, always what the object made easy. Typical errors: _we didn\'t used to_ · _I am used to write_ (a different structure entirely, meaning "accustomed to") · _used to writing_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['They used to…', 'Now', 'Better now', 'Lost'], [
  ['write orders by hand, twice', 'the screen', 'faster, two people can read it', 'the eleven-minute daily check'],
  ['keep a card per customer', 'a screen record', 'never lost, searchable', 'seeing a history in one hand'],
  ['chalk the day on a board', 'a printed sheet', 'accurate', 'everybody could see it at a glance'],
], [1.4, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"They used to chalk the day\'s deliveries on a board in the warehouse. Now it is a printed sheet in the office. It is better because it is accurate, but we lost the thing where everybody — including the drivers — could see the whole day without asking."', 'Ask for the one thing the room agrees was better the old way. There is always at least one, and saying it out loud in front of everybody is what makes the rest of the unit honest.']));
out.push(stage('5', 'Read'));
out.push(p('1 The title: _written down before everybody who remembers has gone_.  2 The paragraph about not telephoning customers about delays — that was worse, and it is in deliberately.  3 Because a history with only gains is an advertisement and a history with only losses is a complaint; the page is written to be believed by people who were there.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**How we used to run the counter**', 'Until 2021 every price was looked up in a printed list on the counter. We used to mark the list in pencil when a price changed, and the pencil marks were copied into the next printed list every three months.', 'We used to know the regular customers\' usual order by heart. A man would come in and say nothing and we would start writing.', 'We didn\'t use to take telephone orders at all. If you wanted something you came for it.', 'There used to be one chair for waiting, and it was always full.', '**What we gained:** correct prices on the day they change, and orders from people who cannot come in.', '**What we lost:** the list on the counter was read by everybody, so everybody knew the prices. Now two of us know them and the rest ask.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_used to_, _didn\'t use to_, _there used to be_ all present', '✓'],
  ['One habit per paragraph, with a real detail', '✓ – the pencil marks; the one chair'],
  ['Something that was worse in the past', '✓ – no telephone orders'],
  ['A "what we lost" that still goes wrong', '✓ – two people know the prices'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for the detail that makes it real, and the pencil marks copied every three months is exactly that. The line I would look at is _the rest ask_ — ask how often? That would turn the loss into something a manager can act on."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we lost" paragraphs. Ask which loss should be argued for at a meeting, and whether anybody will.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I used to write the day\'s telephone messages on a pad with a carbon sheet under it, so there were two copies: one torn off for the person and one that stayed in the pad. Nobody told me to; I started doing it because a message I had passed on correctly was denied, and after that I had the pad. We stopped when the messages moved to the screen. What stopped being true is that I can no longer prove what I was told, and twice this year that has mattered.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"after that I had the pad"_   ✓ _used to / didn\'t use to correct._   ? _Could you keep the pad as well?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many of these habits are written down anywhere. The answer is almost always none, and this lesson is the first time — say so.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Abu Yasser, asked on Sunday: "We used to count the lorry out at the gate and count it in again when it came back empty. We stopped when the second lorry came, because there was nobody at the gate at six in the morning."']));

// ===================== 16.2 =====================
out.push(pb());
out.push(h2('16.2  The company has grown to nineteen'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Both numbers; the gap between them is the cycle.'));
out.push(p('**b**  _Has grown_ — the change reaches now. _Grew_ invites "and then?" and leaves the present unstated.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (customers — forty to about two hundred and ten)   **b**  1 The warehouse: the same four walls since 1998.  2 That _grown_ is a good word that hides two bad years — twenty-three in 2010, eleven in 2014.'));
out.push(p('**Language box – Practise (samples):**  _We have gone from four to nineteen; we were twenty-three in 2010. · The customer list has grown from forty to two hundred and ten; we lost about sixty in 2014._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'For the history page — how many were here when you started?'],
  ['B', 'Two. We have grown to fourteen.'],
  ['A', 'And the machines?'],
  ['B', 'We had one. We have four now. But the building has not changed at all.'],
  ['A', 'That is growth.'],
  ['B', 'Write it carefully. _Grown_ hides two bad years. We were nine in 2012 and three in 2016. Fourteen is not a line from two; it is the highest since 2011.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the turning point the headline hides. Typical errors: a present perfect with a finished year (_we have grown in 2010_) · _is not changed_ for _has not changed_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Then', 'Now', 'The year that is not on the line'], [
  ['staff', '4', '19', '2010: 23. 2014: 11.'],
  ['customers', '~40', '~210', '2014, about sixty lost'],
  ['premises', '1 warehouse', 'the same, plus the floor above', 'office floor taken 2016'],
  ['vehicles', '1 van', '1 van, 1 lorry', 'lorry 2004'],
], [1.2, 0.8, 0.8, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We have gone from four people to nineteen. The warehouse has not changed at all. In 2014 we were eleven, which the word grown does not show."', 'Ask what in the room has not changed at all. Those answers are reliably the most interesting of the day, and they are the ones a history page is really for.']));
out.push(stage('5', 'Read'));
out.push(p('1 **People** — it names 2010 and 2014 and says the line is not straight.  2 More than half of the original forty are still customers; it proves the growth did not come from replacing people who left.  3 Because what a company has not changed in twenty-eight years is what it actually is, and that is what a history is for.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**What has changed since 2009**', 'Haddad Stationery was founded in 2009 by Samir Haddad with one shop in Mezzeh.', '**People.** We have grown from five to seventeen. The line is not straight: we were four in 2013 when one branch closed.', '**Customers.** From a counter trade to about ninety school and office accounts. Six of the first ten are still with us.', '**Premises.** The first shop has not changed. We have taken the unit next door since 2019.', '**How we work.** Orders have moved from the counter to the telephone; delivery from nothing to two mornings a week; payment from cash to monthly accounts for schools.', '**What has not changed:** the opening hours, and the rule that nobody is served out of turn.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Present perfect for every change', '✓'],
  ['_from … to …_ with real numbers', '✓'],
  ['A year where the line is not straight', '✓ – 2013'],
  ['A "what has not changed" heading', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for one fact that proves the change is real, and _six of the first ten are still with us_ is it. The heading I would look at is How we work — _delivery from nothing to two mornings a week_ is the biggest change on the page and it is in the shortest clause."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what has not changed" lines and ask what each tells the class about that workplace. Learners hear their own company described for the first time.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I have gone from answering the telephone to deciding what we buy. When I started I did not know what a delivery note was for. I have raised about four thousand invoices since then and I have been wrong about eleven times that I know of. The year that is not on the line is 2024: I nearly left, and the reason was not the work. What has not changed at all is that I still write everything down at the moment it is said, which I learned in my first fortnight from a man in the warehouse.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"wrong about eleven times that I know of"_   ✓ _perfect for change, past for the year._   ? _Who taught you to write it down?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many have been doing the same work for longer than they expected, and what they would have said at the start. The gap between those two answers is most of a working life.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Founded 14 September 1998. In the first year there were four people and about forty regular accounts. Nobody in the building knew the date; it was on the back of the trading licence in the safe.']));

// ===================== 16.3 =====================
out.push(pb());
out.push(h2('16.3  It is not as quiet as it used to be'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Samples: _not as quiet · not as simple · not as friendly · not as slow_.'));
out.push(p('**b**  They say the same thing. _Not as quiet as_ describes; _noisier than_ complains. At work the first keeps the conversation open.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the office then and now)   **b**  1 It is not as quiet, and not as easy to concentrate.  2 Invoices: twenty minutes then, four now — five times faster, with about four times as many.'));
out.push(p('**Language box – Practise (samples):**  _It is not as busy as it was in the spring. / It is busier than it was last year. · The mistakes are about the same. · We do twice as many deliveries._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Is it easier?'],
  ['B', 'It is not as hard as it used to be. When I started there were four hundred lines and you found them by memory.'],
  ['A', 'Is that bad?'],
  ['B', 'It is not as personal. But finding stock is not as slow as it was either. A line used to take four minutes to find and now it takes thirty seconds.'],
  ['A', 'Eight times faster.'],
  ['B', 'Eight times faster, and we carry twice as much. So I am not eight times less busy; I walk about the same distance and I think less, which I am not sure is an improvement.'],
  ['A', 'And the wrong picks?'],
  ['B', 'About the same. The screen is only as right as what was typed into it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the thing that is **about the same**. Typical errors: _as quieter as_ · _more quiet than_ · and the content fault of claiming an improvement with no number behind it.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Then', 'Now', 'The sentence'], [
  ['noise', 'six people', 'nineteen', 'It is not as quiet as it used to be.'],
  ['an invoice', '20 min', '4 min', 'We raise about four times as many.'],
  ['finding stock', '4 min', '30 sec', 'It is eight times faster than it was.'],
  ['wrong picks', '~3 a month', '~3 a month', 'About the same.'],
], [1, 0.9, 0.9, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It is not as quiet as it used to be. We raise about four times as many invoices in a fifth of the time. And the mistakes are about the same."', 'Count how many "about the same" answers are about mistakes. In most rooms it is most of them, and it is worth the minute it takes to ask why.']));
out.push(stage('5', 'Read'));
out.push(p('1 It promises to say which changes are better and which are only faster, and it keeps the promise — the invoices are faster, the picks are the same, the quiet is worse.  2 The wrong picks: the screen is only as accurate as what is typed into it, and that is still typed by a tired person.  3 _Almost none of the two hundred and ten would notice if we changed the name on the door._ It is in the history because it is the one line a manager can act on.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Is it better?**', 'Some of it is better and some of it is only faster.', 'An order used to take six minutes to write and now takes ninety seconds. We take about three times as many. So the counter is not four times quieter — it is slightly busier and a good deal less tiring.', 'Finding a price is faster and more certain. Wrong prices are about the same, because the screen holds what somebody typed in, and the typing is done on Thursday evenings.', 'The shop is not as friendly as it was. We serve more people and we know fewer of them, and nobody has found an answer to that.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number with every comparison', '✓'],
  ['_not as … as_ used at least once', '✓'],
  ['Something about the same', '✓ – wrong prices'],
  ['Something worse, with no answer', '✓ – not as friendly'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says separate faster from better, and the price paragraph does it exactly — faster **and** the same number of mistakes. The sentence I would look at is _the typing is done on Thursday evenings_: that is a cause, and it is hidden in a subordinate clause."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the things that are worse. Ask which one a manager could act on — usually one in three, and that one is worth taking out of the lesson.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Our delivery is faster and not better. A customer used to wait four days and now waits two. But we used to telephone the day before, and now the system sends a message, and about one customer in six never sees it — so they are not there when the van arrives, and the van comes back. Two days with a telephone call was better than two days with a message. I would choose the telephone call, and I would keep the two days, and the only thing stopping us is that nobody has counted the returns.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the only thing stopping us is that nobody has counted the returns"_   ✓ _as … as correct._   ? _Could you count them for a fortnight?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how often the writer and the manager would choose differently. Naming that gap out loud is more useful than any further practice of the structure.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Timed on Sunday: raising an invoice, three minutes forty seconds including checking it against the order. The old way was eleven minutes including the carbon copy. Three times faster — but the checking is one minute of the three, and in the old way it was four of the eleven.']));

// ===================== 16.4 =====================
out.push(pb());
out.push(h2('16.4  Prices have not moved since March'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners can give the month and not the day, which is the fault the cycle exists to fix.'));
out.push(p('**b**  _since_ 1998 · _for_ twenty-eight years · _since_ the last rise.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (since 14 March)   **b**  1 No change to the whole list since November 2019.  2 Because in six months somebody will ask whether a quotation from the tenth was at the old price, and "March" cannot answer that.'));
out.push(p('**Language box – Practise (samples):**  _Prices have not changed since 14 March. · We have held them for seven months. · It is seven months since we changed them._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'For the history: the yard rent has not changed since the first of February 2023.'],
  ['B', 'Since 2023. Can I write "since 2023"?'],
  ['A', 'Write the first of February. In two years somebody will ask what we paid in January that year, and "2023" will not answer it.'],
  ['B', 'The first of February 2023. And rents on the road?'],
  ['A', 'Those have risen three times in the same period. We have paid the same for three years, which is why the yard looks cheap and is not a bargain — it is a landlord who has not got round to it.'],
  ['B', 'And the last time he raised it?'],
  ['A', '2023, by fifteen per cent. It is three years since he did that.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the exact date and the question it would answer in two years. Typical errors: _since seven months_ · _for March_ · _it is six years that we did_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'The exact date', 'since…', 'for…', 'It is … since'], [
  ['list prices', '14 March', 'since 14 March', 'for 7 months', 'It is seven months since they changed.'],
  ['whole-list rise', '3 Nov 2019', 'since Nov 2019', 'for 6 years', 'It is more than six years since we did that.'],
  ['last leaver', '11 Sept last year', 'since 11 Sept', 'for 14 months', 'It is fourteen months since anybody left.'],
], [1, 1, 1, 0.9, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Nobody has left since the eleventh of September last year. That is fourteen months. The last time somebody left was September, and before that four people left in eighteen months."', 'Count how many could not find an exact date for something important. It is usually most of the room — which is the point, and the homework.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because a history with only the current value cannot be asked a question; it becomes a setting rather than a record.  2 Our prices held for seven months, and supplier prices moved four times in the same period.  3 It says there has been no month missed — _every month_ could be true of a habit with gaps in it, and the margin and the stock both depend on there being none.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Dates that matter**', '**Founded:** 2 March 2009, one shop in Mezzeh.', '**Price list last reprinted:** 1 September. Single prices have changed since — about forty — but the printed list has not.', '**Current delivery charge in force since:** 15 January. Fuel has risen twice in the same period, which is why the delivery round barely pays for itself.', '**Last member of staff to join:** 4 April. **Last to leave:** 19 November two years ago — the longest without a leaver since the shop opened.', '**Last full stocktake:** 28 of last month, done every quarter without a gap since 2021.', '⚠ If you change any line on this page, write the new date above and leave the old one underneath.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An exact date on every line', '✓'],
  ['_since_ and _for_ correct', '✓'],
  ['Two periods put together', '✓ – delivery charge against fuel'],
  ['The instruction about not overwriting', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give both periods where they explain each other, and the delivery line does. The one I would look at is _about forty_ single prices — could that be exact? It is the number somebody will want when they reprint."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Have the class ask a question of each line read out. A line that cannot answer needs a better date, and the class finds those faster than any checklist.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Nobody can say exactly when we stopped taking cash from the school accounts. Everybody agrees it was "about four years ago" and two people say it was after a particular theft, which would make it 2022. It matters now because a school is arguing that it has always been allowed to pay cash and nobody can show when the rule started. The date is findable: the first monthly statement we ever sent a school is in the file, and whoever sent it will have dated it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the date is findable"_   ✓ _since / for correct._   ? _Who has the old statement file?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask in how many cases the date could be found this week from a document that already exists. Usually most — and the finding is the homework.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Found: the first school statement is dated 3 October 2022, which puts the end of cash accounts in that month. Added to the dates page, with the statement number next to it so the next person does not have to look.']));

// ===================== 16.5 =====================
out.push(pb());
out.push(h2('16.5  There was one van and one telephone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Numbers are what makes this task work: desks, telephones, chairs, doors.'));
out.push(p('**b**  There **was** one van. There **were** two telephones. There **was** not a computer in the building.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (one van and one telephone)   **b**  1 In person, on a Sunday, ordering for the fortnight.  2 A map of Damascus with a pin for every customer — one pin put in on the day a man first ordered, and never taken out.'));
out.push(p('**Language box – Practise (sample):**  "There was one counter and there were three shelf units. There was no second room. There were no prices on anything; you asked. There used to be a chair by the door."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Describe this place in 2005. I want to put it in the history.'],
  ['B', 'There was one bench, two machines and a dirt yard. There was no sign on the door. There were no customers who had not been sent by somebody.'],
  ['A', 'And orders?'],
  ['B', 'There was no telephone for the first two years. People came and waited. If a man did not come back, you never knew whether the work had been bad or his money had run out.'],
  ['A', 'What was on the wall? There is a nail.'],
  ['B', 'Every receipt from the first year is on that nail. My father put them there and he never took one off, even the ones that were never paid.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the object and what it was for. Typical errors: _there were a computer_ · _there was no any racks_ · agreement with the second item in a list rather than the first.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I asked', 'The year', 'Five things there were', 'The object'], [
  ['Mr Ayoub', '1998', 'one room; four desks; one telephone on the wall; a dirt floor; no racking', 'the map with forty-one pins'],
  ['Abu Yasser', '2004', 'one van; one lorry; two piles; a kettle; no second line', 'the chalk board for the day'],
], [1, 0.7, 2.3, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In 1998 there was one room and there were four desks. There were no racks at all. On the wall there was a map with a pin for every customer, which was how my uncle knew who had stopped buying."', 'Ask what the room would most like to see. Then ask whether it still exists anywhere. About a third of the time it does, in somebody\'s store room.']));
out.push(stage('5', 'Read'));
out.push(p('1 By giving the consequence: a call that came while somebody was speaking simply did not arrive.  2 Because the rule attached to it — a pin put in and never taken out, because a customer who has stopped is one you can visit — is the part worth keeping; the map is only the object.  3 It brings the page into the present and says the history has not been tidied away. Without it the page is a list; with it, it is a place.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**The place, 2009**', 'There was one shop, eleven metres by four, with one counter and three shelf units. There was no store room, so everything we had was on the floor behind the counter and you climbed over it.', 'Behind the shop there was a yard with a tin roof that leaked in two places. The places were marked with chalk.', 'There was one till with a handle. There was no telephone for the first eight months.', 'Customers came in person and most of them came on a Thursday.', 'On the wall there was a pencil list of about twenty names — the people allowed to buy on credit. My uncle wrote a name on it only after the third visit, and he never rubbed one out.', 'The list has gone. The pencil marks are still on the paint behind the new shelf.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbers with _there was / there were_', '✓'],
  ['A negative with its consequence', '✓ – no store room, so you climbed'],
  ['One object with its story', '✓ – the pencil list'],
  ['A last line about what is left now', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for the object with its rule, and _only after the third visit_ is the rule. The line I would ask about is the leaking roof marked in chalk — is that a second object? It may be better than the list."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the objects. Ask which one the class would put in a frame, and whether anybody could still find it.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The first place I worked was a bakery with one room and two ovens. There were four of us and there was one chair, which was for whoever had been there longest and was never sat in before eleven. There was no clock. There was no sign outside either, because everybody within half a kilometre already knew. The ovens are still there and the building is a telephone shop now. The chair went with my uncle to his house, where it is in the kitchen and still nobody sits in it before eleven.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"still nobody sits in it before eleven"_   ✓ _was / were agreement._   ? _Does your uncle know you wrote this?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many of the places still exist and what is in them now. The answers are short, they are always interesting, and they belong to the learners rather than to the book.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['The wooden tray the drivers put their notes in at the end of the day. It is older than everybody in the building, it holds about forty notes, and when the notes go on the screen it will be thrown away by somebody who never asked what it was.']));

// ===================== 16.6 =====================
out.push(pb());
out.push(h2('16.6  We changed it because of the rain'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and productive: every workplace has one. The second question is the homework.'));
out.push(p('**b**  _because of_ the rain · _because_ it was raining · _because of_ a mistake in 2016 · _because_ somebody made a mistake.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (because of one week in 2016)   **b**  1 The system was down for nine days and nobody had a list of what was in the building.  2 That a rule dies not because it stops working but because the reason stops being told — and then it is just a thing an old man does.'));
out.push(p('**Language box – Practise (samples):**  _We changed the delivery day because of the Monday market. / because the market blocks the street on Mondays. The market blocks the street, so we changed the day._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Why do two people sign for every collection?'],
  ['B', 'Because of a load in March 2021. It left with one signature and was never traced — one point eight million, eleven days of argument, and we lost the customer at the end of it.'],
  ['A', 'And the second signature?'],
  ['B', 'There was none before that. We started it the following week, because nobody could say who had handed the goods over, so we decided never again to have a collection that one person could describe alone.'],
  ['A', 'Nobody has ever told me that.'],
  ['B', 'Nobody has ever asked. That is how a rule dies: the reason stops being told and the rule looks like distrust.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **size** of the event. Typical errors: _because of it was raining_ · _because the rain_ · and the content fault of a reason with no size, which is a story and not evidence.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The rule', 'The event', 'Its size', 'The decision'], [
  ['stock book by hand', 'system down, June 2016', 'nine days', 'never a building we cannot describe'],
  ['two signatures', 'untraced load, March 2021', '1.8 m, 11 days, 1 customer', 'two people on every collection'],
  ['prices read back', 'reason lost', '—', 'kept; costs four seconds'],
], [1.2, 1.5, 0.9, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We write the stock in a book because of nine days in June 2016 when the system was down. We sold what we could see, so we decided never to be in a building we could not describe."', 'Count the rules whose reason nobody could find. Those are the ones that will be dropped within five years — and some of them should be, which is also worth saying.']));
out.push(stage('5', 'Read'));
out.push(p('1 Reading prices back on the telephone; it is kept, and the page says plainly that nobody can remember why and that the two who would know have retired.  2 Nine days · 1.8 million, eleven days, one customer · two hours and four sizes.  3 That a rule whose story is lost will be dropped by the first person who never heard the story — which is why the page exists.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Why we do these things**', '**Nobody is served out of turn, including family.** Because of a Saturday in 2014 when a cousin was served ahead of eleven people and four of them have never come back. The eleven were counted; the four were named.', '**Every credit name is written on the list only after the third visit.** Because of about 400,000 lost in the first two years to people who came twice.', '**The till is counted at midday as well as at night.** Nobody can remember why. It costs three minutes and we have kept it.', '⚠ If you add a rule to this page, add its event and the size of it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_because of_ + noun and _because_ + clause correct', '✓'],
  ['A date on every event', '✓ – 2014; the first two years'],
  ['A size on every event', '✓ – eleven people, four lost; 400,000'],
  ['One rule whose reason is honestly lost', '✓ – the midday count'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the size is what keeps the rule, and _the eleven were counted; the four were named_ is the strongest sentence on the page. The one I would ask about is the midday count — three minutes a day is a size. Is it worth writing next to _nobody knows_?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Vote on each rule. The vote is nearly always decided by the size of the event, which is the argument of the cycle made by the class rather than the book.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We print every delivery note three times and two of the copies are never looked at. It costs about four reams of paper a month and ten minutes a day of somebody sorting them. I think the third copy was for a customer who insisted on it and who stopped buying from us in 2021. Before dropping it I would want to know whether anybody outside the building has ever asked for the third copy, and whether the second one is what the accounts people use when they check a month — because if it is, I am wrong about two of the three.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"four reams a month and ten minutes a day"_   ✓ _because / because of correct._   ? _Who in accounts uses the second copy?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask for how many somebody in the building could answer the question this week. Those are the ones to ask about before the week ends; say so and write the names on the board.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Asked about the third copy of the delivery note. Reason lost; two people gave different answers and neither was sure. Written on the page as "reason lost, asked 14 November", which is what the Writer\'s box says to do.']));

// ===================== 16.7 =====================
out.push(pb());
out.push(h2('16.7  Review & Mediate: the company history'));
out.push(stage('1', 'Get ready – Unit 16 quiz'));
out.push(p('**1** The **d** goes in the negative and the question: _didn\'t use to_.  **2** _Has grown_ — the change reaches now.  **3** _as quiet as_: _as … as_ takes the plain adjective.  **4** _for_ seven months, _since_ 14 March.  **5** _because of_ the rain (a noun), _because_ it was raining (a clause).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (she thinks it is for customers)   **b**  1 For the person who starts there in four years and is told to keep a book by hand.  2 The reason prices are read back on the telephone — she asked three people in her first week and got three answers.'));
out.push(p('**Language box – Practise (sample):**  "The page of reasons is the one you need first. It is not for customers — you would not put _we sold what we could see_ in front of a customer. It is for you, so that in four years nobody is doing something they cannot explain."'));
out.push(stage('3', 'Practise – sample with document 1'));
out.push(dlg(null, [
  ['B', 'You cannot write that. _We make mistakes_ on page one of a handbook makes us look bad.'],
  ['A', 'Would you put the handbook in front of a customer?'],
  ['B', 'No. It is for staff.'],
  ['A', 'Then it is not an advertisement and it does not have to read like one. Look at the second sentence: _so that the same mistake is not made twice by two different people_. That is what the page is for. A handbook that says we never make mistakes is one nobody writes anything in.'],
  ['B', 'And the part about not knowing why a rule exists?'],
  ['A', 'That is the only line that will still be true in ten years.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that said **who** the document is for. Most documents never say, which is why most of them are misread, and noticing that is the transferable skill.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'Who they thought it was for', 'Who it is really for'], [
  ['Hala', 'customers, for a wall', 'the person who starts in four years'],
  ['Fadi', 'the bank', 'the drivers and the warehouse'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a company history. She thought it was for customers. The evidence that it is not is the page of reasons — you would not put nine days of selling what we could see in front of a customer. It is for the person who starts here in four years, and the part she needs first is the page of reasons."', '⚠ **The ordinal.** This is the **fourth** unit of Book 2, and the unwritten thing this time is who the document is for — which almost no internal document states on its own first page. Keep the claim in every cycle 7.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _handbook · premises · founded · obsolete · milestone · former_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '_Used to_ always means it has stopped.'],
  ['2', 'A', '_From four to nineteen_ — nineteen is the present number.'],
  ['3', 'B', '_Not as quiet as_ = noisier; the softer form says the same thing.'],
  ['4', 'A', '_Since 14 March_ — the change was then and nothing has moved since.'],
  ['5', 'C', '_There were no racks_ = none at all.'],
  ['6', 'B', '_Because of_ + noun gives the reason: the nine days caused the book.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (29 words)'));
out.push(sample(null, ['Hi Rasha, one thing before Sunday. We used to leave the notes on the desk. Now everybody puts them in the tray, because two were lost in March. See you Sunday.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: the old way with _used to_ ✓ · the present simple for now ✓ · the reason, correctly joined ✓. Twenty-nine words. ⚠ The commonest fault is _because of two were lost_ — a clause after _because of_. Ask: noun or clause?'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Haddad Stationery was founded in 2009 with one shop in Mezzeh and five people. There was one counter, three shelf units and no store room, so everything was on the floor behind the counter. We have grown to seventeen people and about ninety accounts, and we have taken the unit next door. The line is not straight: we were four in 2013, when the second branch closed and did not reopen. What has not changed is the opening hours and the rule that nobody is served out of turn, including family — which has cost us two cousins and kept eleven customers.']));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Given to my uncle. He changed one thing: the second branch closed in 2012, not 2013, "because it was the year of the flood and you were still at school". Corrected on the page, with his name next to it.']));
out.push(pb());
out.push(stage('✓', 'Unit 16 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'b', 'b', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _used to_ + verb.  **2** The **d** goes in the negative: _didn\'t use to_.  **3** The change reaches now.  **4** _as_ + plain adjective + _as_.  **5** _since_ + a point in time.  **6** _for_ + a length.  **7** Plural subject after _there_.  **8** _because of_ + a noun phrase.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Rooms', 'Desks', 'Telephones', 'What there was not', 'On the wall'], [[
  'one', 'four', 'one, fixed to the wall', 'a second line; any racks; (a proper floor)', 'a map of Damascus with 41 pins',
]], [0.8, 0.8, 1.3, 1.6, 1.5]));
out.push(note('Accept any one of the three for "what there was not". Accept "a map with pins" without the number.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (45 words)', ['We used to telephone every customer the day before a delivery. We stopped when the system began sending messages, because it saved about an hour a day. What we lost is that about one customer in six never sees the message, so the van arrives and nobody is there.']));
out.push(box('Marking the Unit 16 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', '_used to_ used correctly (2) · why it stopped, with _because_ or _because of_ (2) · **what was lost** (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for **what was lost** are the ones that distinguish this task from a grammar exercise. A learner who writes a correct _used to_ sentence and stops has done half of it.',
  '⚠ Do not take a mark off for a loss that sounds like nostalgia, as long as it names something that still goes wrong. That is the test the Writer\'s box sets and it is the right one.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 16**'));
out.push(p('**1 _didn\'t used to_.** The **d** is the only hard thing about _used to_ and it is hard in writing, not in speech, because in speech it cannot be heard. Correct it on the page and let it go in conversation; it will come right when the written form is automatic.'));
out.push(p('**2 The present perfect with a finished year.** _We have grown in 2010._ Unit 13 taught the test and this unit is where it is applied under pressure, because a company history is full of years. Point back to 13.4 rather than re-teaching it: the learners already know the rule and are not yet using it.'));
out.push(p('**3 _because of_ with a clause.** _Because of it was raining._ The fix is one question — **noun or clause?** — and it works in both languages. Expect it back in Unit 23, where the reasons are about the city rather than the company.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 16 · Answer Key');
