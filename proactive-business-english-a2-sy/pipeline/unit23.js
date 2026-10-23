// Proactive Business English A2 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'founder · shop front · industrial zone · storey · family firm · capital · employ · workforce · trade customer · walk-in customer · import · export · population · municipality · district · congestion · rent · utilities · generator · licence · registration · customs · bank transfer · neighbourhood · reputation · word of mouth';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 23  The Company and the City'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**23.1**  say when a company was founded, and how long it has been here',
  '**23.2**  describe what there is in a place, and what there is not',
  '**23.3**  compare two cities, or two districts, without exaggerating',
  '**23.4**  use the simple passive: _it is made here · they are sent to Beirut_',
  '**23.5**  explain a difficulty with _because of_',
  '**23.6**  talk about something you read in the business news',
  '**23.7**  Review & Mediate: tell a visitor what the local business page says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Why a unit about the city, in a business course?', [
  'Because every supplier, customer and bank you deal with asks you two questions in the first five minutes, and nobody ever teaches the answers: **who are you** and **where are you**. A company profile and a paragraph about your city are the two most-written pieces of English in a working life after the email, and they are both usually written badly — either as a boast or as an apology.',
  'This unit is also where Book 2\'s grammar comes back together: _since_ and the past simple from 23.1, _there is/are_ from 23.2, comparatives from 23.3, the passive from 23.4. None of it is new. What is new is writing a paragraph that a stranger will believe.',
  '⚠ One honest warning. Writing about your own city in a foreign language pulls you towards two bad paragraphs: the brochure (everything is excellent, nothing is difficult) and the complaint (nothing works, nobody should come). Neither is read twice. The paragraph that gets read says what is good, says what is hard, and says what you do about it.',
], C.lyellow, C.orange));

// ======================= CYCLE 23.1 =======================
out.push(pb());
out.push(h2('23.1  We were founded in 1998'));
out.push(p('**Function:** saying when and how long   ·   **Grammar:** past simple + _in_; _since_ / _for_   ·   **Pronunciation:** years said aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When was your company founded? When did you join it? Which of the two do you know exactly?'));
out.push(p('**b**  Which are right? _We are founded in 1998. · We were founded in 1998. · We work here since 1998. · We have been here since 1998._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub correct?   **A** the year   **B** _we are founded_   **C** the name of the company'));
out.push(p('**b**  Listen again. **1** What is the difference between _since 1998_ and _for 28 years_? **2** Why does he say the year of the move matters?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  "We are founded in 1998"', [
  ['Bassel', 'For the profile: "Sham Trading are founded in 1998."'],
  ['Mr Ayoub', 'Were founded. The founding happened once, in 1998, and it is finished — so the past: _Sham Trading **was** founded in 1998_.'],
  ['Bassel', 'And then "We work here since 1998."'],
  ['Mr Ayoub', '_We have been here since 1998._ _Since_ needs the present perfect, because it joins 1998 to today. Or count the years: _we have been here for 28 years_.'],
  ['Bassel', 'Since the year, for the number.'],
  ['Mr Ayoub', 'Exactly that. And put the move in. _Founded in 1998 in Bab Touma; moved to Mezzeh in 2011._'],
  ['Bassel', 'Does anybody care where we were before?'],
  ['Mr Ayoub', 'A customer of twenty years cares, because he knew the old shop. And a stranger reads it as a company that has survived something, which is true and is worth more than any adjective you could put there instead.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**When, and how long**',
  table(['Shape', 'Example'], [
    ['**was / were founded in** + year', 'Sham Trading **was founded in** 1998.'],
    ['**have / has been** + place + **since** + point', 'We **have been** in Mezzeh **since** 2011.'],
    ['**have / has been** + place + **for** + length', 'We **have been** here **for** fifteen years.'],
    ['past simple for finished events', 'We **moved** to Mezzeh in 2011. We **opened** the second store in 2019.'],
    ['**started as** + noun', 'It **started as** a workshop with four people.'],
  ], [2.1, 1.9]),
  '⚠ **_Was founded_, not _is founded_.** The founding is one finished act in the past. _Is founded_ says it is happening now, which it is not.',
  '⚠ **_Since_ + a point in time; _for_ + a length of time.** _Since 2011_ · _for fifteen years_. Both need **have been**, never the present simple: ~~we work here since 2011~~.',
  '⚠ A profile wants **three or four dates**, not one: founded, moved, grew, added. Dates are the part a stranger believes, because they can be checked.',
  '⚠ Do not round a date to make it older. Somebody will one day have the registration paper in front of them.',
  '**Practise:** Say each with a date. 1 when the company was founded 2 when you joined 3 when it moved 4 how long you have been in this district 5 what it started as',
  '**Useful phrases:**  was founded in…  ·  have been here since…  ·  for fifteen years  ·  started as a workshop  ·  moved to Mezzeh in 2011',
  '**Pronunciation – years aloud.** 🔊 **Track 23.2** Listen: _nineteen ninety-eight · two thousand and eleven · two thousand and nineteen_. English says years in two halves before 2000 and in full after it. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A drafts a line of a profile; B corrects the tense and asks for a second date. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the profile: "__________ are founded in __________."'],
  ['B', 'Were founded. The founding happened once, in __________, and it is finished.'],
  ['A', 'And then "We work here since __________."'],
  ['B', '__________. _Since_ needs __________, because __________. Or count the years: __________.'],
  ['A', 'Since the year, for the number.'],
  ['B', 'Exactly that. And put __________ in.'],
]));
out.push(table(['Role card 1 — a family workshop', 'Role card 2 — a new company'], [[
  'Founded 1974 by a grandfather, moved twice, now in the industrial zone. A writes "is founded in 1974" and "we are here since 40 years".',
  'Founded 2021, one room, now eleven people. A thinks it is too new to write dates and wants to leave them out altogether.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the dates you hear. Then say which date told you most.'));
out.push(PHRASE_CARD(['was founded in 1998', 'have been here since 2011', 'for fifteen years', 'moved to Mezzeh in 2011', 'started as a workshop', 'since the year, for the number']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** dated facts about your company — or about a company you know. Then say them aloud with the years in English.'));
out.push(table(['What happened', 'When', 'The sentence'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 0.7, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We were founded in _______. We moved to _______ in _______. We have been here for _______ years._'));
out.push(p('**Listener task:** write the oldest company in the room and the newest. Then ask the oldest what it started as.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _is founded_ and _since 40 years_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first paragraph of the company profile, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — who we are**',
  'Sham Trading was founded in 1998 as a packaging workshop in Bab Touma, with four people and one machine. We moved to Mezzeh in 2011 and have been in the same premises since then. We opened a second store in Homs in 2019 and closed it in 2021.',
  'We employ nineteen people. Eleven have been with the company for more than five years; two have been here since 1998.',
  'We sell packaging — wrap, boxes, tape and labels — wholesale to about four hundred businesses in Damascus and the Ghouta, and retail from the Mezzeh store to anybody who walks in.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many dated facts are in the first paragraph?'));
out.push(item('2', 'Why mention the Homs store, which closed?'));
out.push(item('3', 'What does "two have been here since 1998" tell a reader that "we value our staff" does not?'));
out.push(box('Writer\'s box', [
  '**The first paragraph of a company profile — dates and numbers, no adjectives:** founded, where, what it started as → the moves, with years → what was added and what was closed → how many people → what you sell, to whom, and how.',
  '**Include what closed.** _Opened a second store in 2019 and closed it in 2021._ It costs you nothing — everybody local knows anyway — and it buys the whole paragraph its credibility. A profile with no setback in it reads as written by somebody who is hiding one.',
  '**Replace every adjective with a number.** Not _we value our staff_ but _two have been here since 1998_. Not _a leading supplier_ but _about four hundred businesses_. The number is shorter and it cannot be said by a competitor.',
  '⚠ No superlatives in the first paragraph: no _leading_, no _the best in Damascus_, no _one of the largest_. They are the sentences a reader skips, and after two of them they skip the rest.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first paragraph of a profile of your own company (35 words or more). Use the frame.'));
out.push(p('**______________ — who we are**   ______________ was founded in ______________ as ______________ in ______________, with ______________. We moved to ______________ in ______________. We ______________ in ______________ and ______________ in ______________.   We employ ______________ people. ______________ have been with the company for ______________; ______________ since ______________.   We sell ______________ — ______________ — to ______________ and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says replace every adjective with a number. There are two adjectives in your third line — what numbers do you have for them?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a stranger check any of this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Was founded_, not _is founded_', ''],
  ['Three or four dates', ''],
  ['Something that closed or stopped', ''],
  ['Numbers in place of adjectives', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their paragraph. The class counts the dates and the adjectives. The ratio is the feedback.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the oldest business you know in your district (60 to 100 words). Say when it started, what it started as, what it sells now, and why it is still there.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the date that told you most_   ✓ _since / for used correctly?_   ? _what has it survived?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What do the surviving businesses have in common? It is rarely the product.'));
out.push(box('Homework', ['Write your final text. Then find the registration year of your own company — or the oldest date anybody can prove — and write the first sentence of a profile with it in (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.2 =======================
out.push(pb());
out.push(h2('23.2  There is a generator, but there is no lift'));
out.push(p('**Function:** describing a place   ·   **Grammar:** _there is / there are_; _there is no_ / _there isn\'t any_   ·   **Pronunciation:** the weak _there_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe your workplace in four sentences, all beginning _there is_ or _there are_.'));
out.push(p('**b**  Which is right? _There is two offices. · There are two offices. · It has two offices. · There are no lift._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer most want to know?   **A** the size of the store   **B** whether there is parking   **C** the opening hours'));
out.push(p('**b**  Listen again. **1** What does Hala say about listing what there is **not**? **2** Why does she mention the generator?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  What there is, and what there is not', [
  ['Hala', 'The new customer asked what the Mezzeh store is like. I said it is very good.'],
  ['Nour', 'Which tells her nothing. What is there?'],
  ['Hala', 'There is a counter, there are two store rooms, there is a generator, and there is parking for three cars in front.'],
  ['Nour', 'That is a store. Now what is there not?'],
  ['Hala', 'Why would I tell her that?'],
  ['Nour', 'Because she is bringing a van and there is no loading bay, and there is no lift to the first-floor store room. If she finds that out on Tuesday with a van and a driver waiting, we have cost her an hour. If she knows today, she brings two men instead.'],
  ['Hala', 'So: there is no loading bay and there is no lift.'],
  ['Nour', 'And there is a generator, which matters more than either of them in July. Say both halves. A place described only by what it has sounds like a place somebody is selling.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**There is / there are – and what there is not**',
  table(['Shape', 'Example'], [
    ['**There is** + singular', '**There is** a generator. **There is** parking for three cars.'],
    ['**There are** + plural', '**There are** two store rooms.'],
    ['**There is no** + noun', '**There is no** loading bay. **There is no** lift.'],
    ['**There aren\'t any** + plural', '**There aren\'t any** steps at the front.'],
    ['**Is there…? / Are there…?**', '**Is there** parking? **Are there** steps?'],
  ], [1.7, 2.3]),
  '⚠ **The verb agrees with what comes after it**, not with _there_: _there **is** a generator_ · _there **are** two rooms_. ~~There is two rooms~~ is the commonest error in the cycle.',
  '⚠ **_There is no_ + singular; _there aren\'t any_ + plural.** Both are normal. ~~There are no lift~~ mixes them.',
  '⚠ **Say both halves — what there is and what there is not.** The second half is what makes the first believable, and it saves somebody a wasted journey.',
  '⚠ Do not use _it has_ for a place you are describing to a stranger: _there is_ is the natural English and _it has_ sounds like a brochure.',
  '**Practise:** Describe each in two sentences — one _there is/are_, one _there is no / there aren\'t any_. 1 your office 2 the store room 3 the street outside 4 the building entrance 5 the nearest bank',
  '**Useful phrases:**  There is a generator.  ·  There are two store rooms.  ·  There is no loading bay.  ·  There aren\'t any steps.  ·  Is there parking?',
  '**Pronunciation – the weak _there_.** 🔊 **Track 23.4** Listen: _there\'s a generator_ — _there_ almost disappears and the stress lands on _generator_. Said with a strong _there_ it sounds like pointing at something. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a place with only the good half; B asks for the other half. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ asked what __________ is like. I said it is very good.'],
  ['B', 'Which tells them nothing. What is there?'],
  ['A', 'There is __________, there are __________, and there is __________.'],
  ['B', 'That is __________. Now what is there not?'],
  ['A', 'Why would I tell them that?'],
  ['B', 'Because __________. If they find that out __________, we have cost them __________.'],
  ['A', 'So: there is no __________ and there is no __________.'],
]));
out.push(table(['Role card 1 — the workshop', 'Role card 2 — the new office'], [[
  'There are three machines, a yard and a generator. There is no telephone line, no shade in the yard, and the gate is too narrow for a lorry.',
  'There are six desks and a meeting room. There is no internet yet, no second door, and there are eleven steps and no lift.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two halves in two columns. Then say which "there is no" would have cost somebody most.'));
out.push(PHRASE_CARD(['There is a generator.', 'There are two store rooms.', 'There is no loading bay.', 'There aren\'t any steps.', 'Is there parking?', 'Say both halves.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe your own workplace to somebody who is coming next week. **Four** things there are, and **four** things there are not.'));
out.push(table(['There is / there are…', 'There is no / there aren\'t any…'], [['', ''], ['', ''], ['', ''], ['', '']], [1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is _______ and there are _______. There is no _______, so bring _______._'));
out.push(p('**Listener task:** write down the most useful "there is no" you hear. It is nearly always something nobody thinks to mention.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _there is two_ and _there are no lift_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note sent to a visiting supplier, and answer the questions.'));
out.push(box(null, [
  '**COMING TO THE MEZZEH STORE — what to expect**',
  '**Getting here.** There is parking for three cars in front and more on the side street after nine. There is no loading bay: a van unloads on the street, which is legal until eleven and difficult afterwards.',
  '**The building.** There is a counter on the ground floor and two store rooms behind it. There is a second store room on the first floor and **there is no lift** — eleven steps, and everything is carried. If you are bringing more than ten boxes, bring a second person.',
  '**Power and water.** There is a generator and it runs from one until four. There is water in the yard tap but there is none in the upstairs room.',
  '**Nearby.** There is a bank two streets away and there are three places to eat on the corner. There isn\'t a hotel in the district; the nearest is fifteen minutes by taxi.',
  '**Ask for** Hala at the counter, or telephone 011 ___ ____ from the street and somebody will come down.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which single sentence saves the visitor most trouble?'));
out.push(item('2', 'Why is "legal until eleven" more useful than "there is no loading bay" alone?'));
out.push(item('3', 'What does the last line do that the rest does not?'));
out.push(box('Writer\'s box', [
  '**A "what to expect" note — four or five short headed parts:** getting here → the building → power and water → nearby → who to ask for.',
  '**Put the consequence next to the absence.** _There is no lift — eleven steps, and everything is carried. If you are bringing more than ten boxes, bring a second person._ The absence is information; the consequence is help.',
  '**Give the hours of everything that has hours.** The generator runs from one until four; the street is legal until eleven. A time turns a fact into a plan.',
  '⚠ End with a **name and a telephone number**. A visitor standing in the street with a van needs a person, not a paragraph.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what to expect" note for your own workplace (35 words or more). Use the frame.'));
out.push(p('**COMING TO ______________ — what to expect**   **Getting here.** There is ______________. There is no ______________: ______________.   **The building.** There is ______________ and there are ______________. There is no ______________ — ______________. If ______________, ______________.   **Power and water.** There is ______________ and it runs from ______________. There is ______________ but there is none ______________.   **Nearby.** There is ______________ and there are ______________. There isn\'t ______________.   **Ask for** ______________, or telephone ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put the consequence next to the absence. You have _there is no internet_ — what should the visitor do about that?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a stranger arrive without a surprise?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_There is_ / _there are_ agreeing correctly', ''],
  ['At least three "there is no"', ''],
  ['A consequence next to each absence', ''],
  ['A name and a telephone number at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their note. The class says which workplace they could find and enter without telephoning.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a visit that went wrong because nobody had told you something (60 to 100 words). Say what was missing, what it cost, and the one sentence that would have prevented it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the missing sentence_   ✓ _there is / there are correct?_   ? _did anybody apologise?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases did somebody know and not say? That is the commonest answer and it is not malice; it is familiarity.'));
out.push(box('Homework', ['Write your final text. Then write the four "there is no" sentences about your workplace that a first-time visitor most needs (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.3 =======================
out.push(pb());
out.push(h2('23.3  Cheaper than Damascus, further from the port'));
out.push(p('**Function:** comparing two places   ·   **Grammar:** comparatives revisited; _than_; _as … as_   ·   **Pronunciation:** the weak _than_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Compare two districts you know: rent, traffic, customers, parking. Two sentences each.'));
out.push(p('**b**  Which are right? _more cheap · cheaper · more expensive · expensiver · as cheap as · cheaper as_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Bassel comparing?   **A** two suppliers   **B** two cities for a second store   **C** two machines'));
out.push(p('**b**  Listen again. **1** Which comparison does Mr Ayoub say is the only one that matters? **2** What is wrong with "much better"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  "Homs is much better"', [
  ['Bassel', 'For the second store, Homs is much better than Aleppo.'],
  ['Mr Ayoub', 'Better in what way? _Better_ with nothing after it is an opinion wearing a comparative.'],
  ['Bassel', 'The rent is cheaper.'],
  ['Mr Ayoub', 'How much cheaper?'],
  ['Bassel', 'About forty per cent cheaper than Aleppo, for the same floor area.'],
  ['Mr Ayoub', 'Now that is a comparison. What else?'],
  ['Bassel', 'It is nearer to us — two hours instead of five. But the market is smaller, and it is further from the port.'],
  ['Mr Ayoub', 'So it is cheaper, nearer and smaller. Three comparisons, two for it and one against, and I can decide. "Much better" tells me only that you have already decided and would like me to agree.'],
  ['Bassel', 'And if I think it really is better overall?'],
  ['Mr Ayoub', 'Then say so at the end, after the three, and say it as yours: _on balance I would choose Homs_. The comparisons are facts; the conclusion is yours, and the two should not be wearing the same clothes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Comparing – and saying how much**',
  table(['Shape', 'Example'], [
    ['short adjective + **-er than**', 'cheap**er than** Aleppo · near**er than** Homs'],
    ['**more** + long adjective + **than**', '**more** expensive **than** last year'],
    ['irregular', 'good → **better** · bad → **worse** · far → **further**'],
    ['**as** + adjective + **as**', 'The rent is **as high as** in Mezzeh.'],
    ['how much: **about / nearly / twice**', '**about forty per cent** cheaper · **twice** as far'],
  ], [1.9, 2.1]),
  '⚠ **_Better_, _bigger_ and _cheaper_ with nothing after them are opinions.** Add the measure (_forty per cent cheaper_) or the dimension (_cheaper in rent, further from the port_), or do not use the word.',
  '⚠ **_Than_, not _as_,** after a comparative: _cheaper **than**_, ~~cheaper as~~. _As … as_ is only for equals.',
  '⚠ **One comparison against, every time.** Three comparisons with none against them is a recommendation, not a comparison, and it will be read as one.',
  '⚠ Keep the facts and the conclusion in different sentences: the comparisons, then _on balance I would choose…_',
  '**Practise:** Compare two places, with a measure in each. 1 rent 2 distance 3 the size of the market 4 traffic 5 the number of competitors',
  '**Useful phrases:**  about forty per cent cheaper than…  ·  two hours instead of five  ·  further from the port  ·  as high as  ·  on balance I would choose…',
  '**Pronunciation – the weak _than_.** 🔊 **Track 23.6** Listen: _cheaper than Aleppo_ — _than_ is unstressed and almost swallowed. Stressing it sounds like an argument. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a bare comparative; B asks "in what way" and "how much". Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For __________, __________ is much better than __________.'],
  ['B', 'Better in what way? _Better_ with nothing after it is an opinion wearing a comparative.'],
  ['A', '__________ is cheaper.'],
  ['B', 'How much cheaper?'],
  ['A', 'About __________ cheaper than __________, for __________.'],
  ['B', 'Now that is a comparison. What else?'],
  ['A', 'It is __________. But __________, and __________.'],
  ['B', 'So it is __________, __________ and __________. Now I can decide.'],
]));
out.push(table(['Role card 1 — two districts for a store', 'Role card 2 — two suppliers\' cities'], [[
  'Mezzeh and the old city. Rent, parking, passing customers, delivery access. A believes the old city is "much nicer".',
  'Aleppo and Latakia. Distance, the port, price, how long a delivery takes. A has a cousin in Latakia and has not mentioned it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three comparisons and the one against. Then say whether you could decide from them.'));
out.push(PHRASE_CARD(['forty per cent cheaper than…', 'two hours instead of five', 'further from the port', 'as high as', 'on balance I would choose…', 'better in what way?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Compare two real places — districts, cities, markets. **Four** comparisons with a measure in each, and at least one against your own preference.'));
out.push(table(['Dimension', 'Place A', 'Place B', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 0.8, 0.8, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______ per cent _______ than _______. It is also _______. But it is _______. On balance I would choose _______._'));
out.push(p('**Listener task:** write down anybody who gave four comparisons all in the same direction. Ask them, gently, whether they had decided before they started.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _more cheaper_ and _cheaper as_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the comparison note, and answer the questions.'));
out.push(box(null, [
  '**A SECOND STORE — Homs or Aleppo**',
  '**Rent.** Homs is about forty per cent cheaper for the same floor area: 1,200 against 2,000 a month for roughly 200 square metres.',
  '**Distance from us.** Homs is two hours by lorry; Aleppo is five. On a weekly delivery that is six hours a week of a driver\'s time.',
  '**The market.** Aleppo is much bigger — perhaps three times the number of businesses of our kind. This is the strongest argument against Homs and it should not be buried.',
  '**The port.** Aleppo is further from Latakia than Homs is, but it has its own importers, so in practice the difference is small.',
  '**Competitors.** Four of our kind in Homs, eleven in Aleppo, as far as we can count from the directory.',
  '**On balance I would choose Homs**, because the rent and the distance are certain and the market size is a guess. If we were sure of the Aleppo market I would say the opposite.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which paragraph argues against the writer\'s own conclusion?'));
out.push(item('2', 'What reason is given for choosing Homs, and what would change it?'));
out.push(item('3', 'Where does the writer admit that a number is uncertain?'));
out.push(box('Writer\'s box', [
  '**A comparison note — one dimension per headed paragraph**, each with a **measure**, then a final paragraph beginning _On balance I would choose…_',
  '**Give the strongest argument against you its own paragraph, and say that it is the strongest.** _This is the strongest argument against Homs and it should not be buried._ A reader who finds it himself distrusts everything else; a reader who is handed it trusts the lot.',
  '**Say which numbers are certain and which are guesses.** _The rent and the distance are certain and the market size is a guess._ That one sentence is worth more than any of the numbers.',
  '⚠ End with what would change your mind: _if we were sure of the Aleppo market I would say the opposite._ It is the sentence that makes a recommendation an argument rather than a position.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a comparison note on a real choice (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________ or ______________**   **______________.** ______________ is about ______________ than ______________: ______________ against ______________.   **______________.** ______________.   **______________.** ______________ is much ______________. This is the strongest argument against ______________.   **______________.** ______________.   **On balance I would choose ______________**, because ______________. If ______________, I would say the opposite.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says say which numbers are certain and which are guesses. Which of your five numbers would you not want to be quoted on?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a reader disagree with the conclusion using the writer\'s own numbers?** If not, something is missing. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A measure in every comparison', ''],
  ['The strongest argument against, named as such', ''],
  ['Certain numbers separated from guesses', ''],
  ['_On balance_, and what would change it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their "argument against" paragraph. The class says whether it would change their mind.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a choice between two places that somebody you know got right or wrong (60 to 100 words). Say what was compared, what was not, and what the forgotten dimension turned out to be.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the forgotten dimension_   ✓ _than / as used correctly?_   ? _was it knowable at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many forgotten dimensions were knowable at the time? Most of them, which is uncomfortable and useful.'));
out.push(box('Homework', ['Write your final text. Then compare your own district with the one next to it, in four dimensions, with a measure in each (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.4 =======================
out.push(pb());
out.push(h2('23.4  It is made here and sent to Beirut'));
out.push(p('**Function:** describing a process   ·   **Grammar:** the simple passive, present and past   ·   **Pronunciation:** the weak _is_ in a passive'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where is each thing in your workplace made? Where does it go? Say it without naming a person.'));
out.push(p('**b**  Which are right? _The boxes are made in Homs. · The boxes make in Homs. · The boxes are maked in Homs. · The boxes were sent yesterday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nour use the passive?   **A** it is more polite   **B** the person does not matter   **C** it is shorter'));
out.push(p('**b**  Listen again. **1** When should you **not** use the passive, according to Nour? **2** What is wrong with "it is maked"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  "Who does it?" "It does not matter."', [
  ['Hala', 'For the profile: "We make the labels in Homs and then we send them to Beirut."'],
  ['Nour', 'Fine, if the _we_ matters. Does it?'],
  ['Hala', 'Not really. The customer wants to know where the labels come from.'],
  ['Nour', 'Then take the person out: _the labels are printed in Homs and sent to Beirut_. That is the passive, and this is exactly what it is for — when the **what** matters and the **who** does not.'],
  ['Hala', 'It feels like hiding.'],
  ['Nour', 'It can be. _A mistake was made_ — that is hiding, and we spent a week on it in Unit 15. _The labels are printed in Homs_ is not hiding; nobody wants the printer\'s name.'],
  ['Hala', 'And for last year: "the labels were printed in Aleppo"?'],
  ['Nour', 'Yes — _was_ and _were_ for the past. And please, _printed_, not _printeded_, and never _maked_. The passive is _be_ plus the third form, and the third form is the one worth learning by heart: make, made, **made**.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The simple passive — _be_ + the third form**',
  table(['Shape', 'Example'], [
    ['present, singular', 'The label **is printed** in Homs.'],
    ['present, plural', 'The boxes **are made** here.'],
    ['past', 'The order **was sent** on Tuesday. They **were delivered** late.'],
    ['negative', 'The wrap **is not made** here; it **is imported**.'],
    ['with **by**, only when it matters', 'It **was signed by** the manager.'],
  ], [1.5, 2.5]),
  '⚠ **The passive is for when the _what_ matters and the _who_ does not** — a process, an origin, a rule. It is not for avoiding a name when the name is the point: _a mistake was made_ is the fault from Unit 15 and this cycle does not undo it.',
  '⚠ **_Be_ + the third form.** _is made_ · _are sent_ · _was printed_. Never ~~is make~~, ~~are sended~~, ~~was maked~~.',
  '⚠ **Add _by_ only when the doer matters:** _signed by the manager_ (it matters who signed) but not _printed by a printer_.',
  '⚠ Two passives in a row are usually one too many. _The labels are printed in Homs and sent to Beirut_ needs only one _are_.',
  '**Practise:** Say each in the passive. 1 where the boxes are made 2 where the wrap comes from 3 when the order was sent 4 what is not made locally 5 who signs the delivery note, if it matters',
  '**Useful phrases:**  is printed in Homs  ·  are made here  ·  was sent on Tuesday  ·  is imported  ·  signed by the manager',
  '**Pronunciation – the weak _is_.** 🔊 **Track 23.8** Listen: _it\'s made here · they\'re sent to Beirut_. The _be_ almost vanishes and the third form carries the stress. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a process with _we_; B takes the person out where it does not matter, and leaves it in where it does. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the profile: "We __________ and then we __________."'],
  ['B', 'Fine, if the _we_ matters. Does it?'],
  ['A', 'Not really. The customer wants to know __________.'],
  ['B', 'Then take the person out: __________. That is the passive, and this is what it is for.'],
  ['A', 'It feels like hiding.'],
  ['B', 'It can be. __________ is hiding. __________ is not; nobody wants __________.'],
  ['A', 'And for last year?'],
  ['B', '__________ — _was_ and _were_ for the past.'],
]));
out.push(table(['Role card 1 — where things come from', 'Role card 2 — the one that needs a name'], [[
  'Boxes made in Homs, wrap imported through Latakia, tape bought locally, labels printed in the workshop. A keeps saying "we".',
  'A delivery note was signed, and nobody knows by whom, so a load went to the wrong address. Here the person is the point and the passive would be the Unit 15 fault.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the passive sentences. Then say which one should **not** have been a passive.'));
out.push(PHRASE_CARD(['is printed in Homs', 'are made here', 'was sent on Tuesday', 'is imported', 'signed by the manager', 'the what matters, the who does not']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe where **five** things in your workplace come from and where they go, all in the passive. Then mark the one where a name is needed after all.'));
out.push(table(['The thing', 'The passive sentence', 'Does the doer matter?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 2.2, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ are _______ in _______ and _______ to _______. The one that needs a name is _______, because _______._'));
out.push(p('**Listener task:** write down any passive that was really a hidden person. There is usually one in the room and it is usually about a mistake.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _is make_ and _was maked_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the second part of the company profile, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — what we sell and where it comes from**',
  '**Boxes.** Made in Homs by two workshops we have used since 2013. Delivered to us weekly, flat, and assembled here as they are sold.',
  '**Wrap and tape.** Imported through Latakia and stored in the Mezzeh store rooms. Nothing is kept for more than six weeks, because wrap stiffens.',
  '**Labels.** Printed in our own workshop on one machine, bought in 2019. Short runs are printed the same day; anything over five thousand is sent to a printer in Homs.',
  '**Delivery.** Orders received before eleven are delivered the same day inside Damascus. Orders for the Ghouta are delivered on Tuesdays and Thursdays. Everything is checked against the order at the gate before it is loaded, and the note is signed by the person who checked it, by name.',
  '⚠ That last sentence is deliberate. Everything else on this page is a process and the person does not matter. The gate check is the one place where it does, and so it is the one place where we name somebody.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many passive verbs are in the "Delivery" paragraph?'));
out.push(item('2', 'Why is the person named in the last sentence and nowhere else?'));
out.push(item('3', 'What reason is given for not storing wrap for long?'));
out.push(box('Writer\'s box', [
  '**A "what we sell and where it comes from" page — one product per headed paragraph**, each in the passive: where it is made → how it reaches you → what happens to it here.',
  '**Name a person exactly once, where accountability lives.** _The note is signed by the person who checked it, by name._ A page of passives with one named role in it is read as a company that knows which step can go wrong.',
  '**Give a reason for each rule in the process.** _Nothing is kept more than six weeks, because wrap stiffens._ The reason is what stops the rule being broken when it is inconvenient.',
  '⚠ Say out loud why your passives are passive. If the answer is "because I did not want to say who", change it back — that is Unit 15\'s fault in Unit 23\'s grammar.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "where it comes from" page for your own workplace (35 words or more). Use the frame.'));
out.push(p('**______________ — what we sell and where it comes from**   **______________.** Made in ______________. Delivered ______________, and ______________ here.   **______________.** Imported through ______________ and stored ______________. Nothing is kept for more than ______________, because ______________.   **______________.** ______________ in ______________. ______________ are ______________ the same day; anything over ______________ is ______________.   **Delivery.** Orders received before ______________ are ______________. Everything is ______________ before it is ______________, and ______________ is signed by ______________, by name.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name a person exactly once, where accountability lives. Which step in your process is the one that can go wrong, and is anybody named at it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is every passive here a process, or is one of them a hidden person?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Be_ + the third form throughout', ''],
  ['A reason attached to each rule', ''],
  ['One named role, at the step that matters', ''],
  ['No passive hiding a person', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their page. The class listens for the one named role and says whether it is at the right step.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about how something you use every day is made or reaches you (60 to 100 words). Use the passive, and stop once to say who the person is at the one step where it matters.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the step where a person mattered_   ✓ _be + third form?_   ? _how do you know this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How much of each process does the writer actually know, and how much is assumed? The honest answer is usually the more interesting half.'));
out.push(box('Homework', ['Write your final text. Then write four passive sentences about where your goods come from — and one sentence naming the person at the step that can go wrong (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.5 =======================
out.push(pb());
out.push(h2('23.5  Because of the power cut, not because we forgot'));
out.push(p('**Function:** explaining a difficulty   ·   **Grammar:** _because of_ + noun; _because_ + clause   ·   **Pronunciation:** the phrase group before the comma'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three difficulties of doing business in your city that a visitor would not guess.'));
out.push(p('**b**  Which are right? _because of the traffic · because the traffic · because of it was late · because it was late_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub object to in the paragraph?   **A** the grammar   **B** that every difficulty is somebody else\'s fault   **C** that it is too short'));
out.push(p('**b**  Listen again. **1** What must follow every difficulty in the paragraph? **2** What does he say about the word _situation_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  Difficulties, and what you do about them', [
  ['Bassel', 'The paragraph about the city: "Because of the situation, business is very difficult. Because of the power cuts, we cannot work. Because of the roads, deliveries are late."'],
  ['Mr Ayoub', 'Every sentence is grammatically right and the paragraph is useless. Who would read that and want to deal with us?'],
  ['Bassel', 'But it is all true.'],
  ['Mr Ayoub', 'It is true and it is half of each sentence. There are power cuts; what do we do? We have a generator and it runs from one until four. The roads are slow; what do we do? We deliver to the Ghouta on two fixed days instead of promising any day.'],
  ['Bassel', 'So: because of the power cuts, we run a generator from one until four.'],
  ['Mr Ayoub', 'That is a company. The other version is a complaint. And take out _the situation_ — it means nothing to a stranger and everything to us, which is the worst combination in a document somebody else will read.'],
  ['Bassel', 'What do I put instead?'],
  ['Mr Ayoub', 'The actual difficulty. Power cuts, the exchange rate, a licence that takes nine weeks. Name them one at a time and answer each one. A reader will forgive every single difficulty on that list if each one has an answer after it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_Because of_ and _because_ — and the half that must follow**',
  table(['Shape', 'Example'], [
    ['**because of** + **noun**', '**Because of the power cuts**, we run a generator.'],
    ['**because** + **subject + verb**', '**Because the roads are slow**, we deliver on two fixed days.'],
    ['**so** for the result', 'The roads are slow, **so** we deliver on fixed days.'],
    ['**Despite** + noun', '**Despite the power cuts**, the machine ran all July.'],
    ['the answer half', '…, **we** + what you do about it'],
  ], [1.9, 2.1]),
  '⚠ **_Because of_ takes a noun; _because_ takes a subject and a verb.** ~~Because of it was late~~ · ~~because the traffic~~. Learn the two shapes as a pair.',
  '⚠ **Every difficulty needs an answer in the same sentence.** _Because of the power cuts, we run a generator from one until four._ Without the second half it is a complaint, and a complaint about a whole country is not a business paragraph.',
  '⚠ **Name the difficulty.** Not _the situation_, not _the circumstances_ — power cuts, the exchange rate, a licence that takes nine weeks. Vague difficulties sound bigger than real ones, which is the opposite of what you want.',
  '⚠ A reader forgives a long list of difficulties if every item has an answer. The same list without answers loses you the reader at the second item.',
  '**Practise:** Join each difficulty to what you do about it. 1 power cuts 2 slow roads 3 the exchange rate 4 a slow licence 5 a shortage of a material',
  '**Useful phrases:**  Because of the power cuts, we…  ·  Because the roads are slow, we…  ·  so we deliver on fixed days  ·  Despite…  ·  Name the difficulty.',
  '**Pronunciation – the group before the comma.** 🔊 **Track 23.10** Listen: _because of the power cuts // we run a generator_. One group, a small pause at the comma, then the answer. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a difficulty with no answer; B supplies the second half. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The paragraph: "Because of __________, __________. Because of __________, we cannot __________."'],
  ['B', 'Every sentence is grammatically right and the paragraph is useless. Who would read that and want to deal with us?'],
  ['A', 'But it is all true.'],
  ['B', 'It is half of each sentence. There is __________; what do we do? __________.'],
  ['A', 'So: because of __________, we __________.'],
  ['B', 'That is a company. The other version is a complaint. And take out __________ — name the actual difficulty.'],
]));
out.push(table(['Role card 1 — the paragraph of complaints', 'Role card 2 — the vague one'], [[
  'Four sentences, all beginning "because of", none with an answer: power cuts, roads, prices, staff leaving. All true, all half-written.',
  'Every difficulty is called "the situation" or "the circumstances". B must make A name four of them one at a time.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the rewriting for the class – **without the book**.'));
out.push(p('**Listener task:** write the four completed sentences. Then say which answer you found most convincing.'));
out.push(PHRASE_CARD(['Because of the power cuts, we…', 'Because the roads are slow, we…', 'so we deliver on fixed days', 'Despite…', 'Name the difficulty.', 'every difficulty needs an answer']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** real difficulties of working where you work, each with what you actually do about it. Where there is no answer, write "no answer yet" — honestly.'));
out.push(table(['The difficulty, named', 'What we do about it'], [['', ''], ['', ''], ['', ''], ['', ''], ['', '']], [1.4, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Because of _______, we _______. Because _______, we _______. The one with no answer yet is _______._'));
out.push(p('**Listener task:** write down the best answer you hear to a difficulty you share. Then ask whether it could be copied.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _because of it was_ and _because the traffic_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph on doing business in Damascus, and answer the questions.'));
out.push(box(null, [
  '**DOING BUSINESS WITH US IN DAMASCUS — what to expect**',
  'There are four things a supplier from outside should know, and all four have answers.',
  '**Power.** There are cuts every day, usually in the afternoon. Because of them we run a generator from one until four, so the counter and the label machine do not stop. Email reaches us all day; the telephone is better between nine and one.',
  '**Roads.** Deliveries inside Damascus take an hour that should take twenty minutes. Because of that we deliver to the Ghouta on Tuesdays and Thursdays only, and we promise those two days rather than promising every day and keeping neither.',
  '**Prices and the exchange rate.** A price we give is held for fourteen days, in writing. After fourteen days we re-quote. We do not pretend a price can be held for three months, because it cannot, and a price that is withdrawn is worse than a price that was honest about its date.',
  '**Paperwork.** A new registration or licence takes between six and nine weeks. Because of that we start the paperwork for a new customer before the first order rather than after it.',
  'None of these four is going to be solved by us. All four are planned around, and that is the difference between a difficulty and an excuse.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the first line promise, and does the paragraph keep the promise?'));
out.push(item('2', 'What is said about a price that is held for three months?'));
out.push(item('3', 'What is "the difference between a difficulty and an excuse"?'));
out.push(box('Writer\'s box', [
  '**A paragraph on doing business here — the shape:** a first line that says how many difficulties there are and that each has an answer → one headed paragraph per difficulty, each **named** and each with what you do → a last line about planning rather than solving.',
  '**Promise the structure in the first line.** _There are four things a supplier should know, and all four have answers._ The reader then reads the difficulties as competence instead of complaint, from the first word.',
  '**Say what you do not pretend.** _We do not pretend a price can be held for three months, because it cannot._ Refusing one easy promise buys belief for all the others.',
  '⚠ End on planning, not on hope. _None of these is going to be solved by us. All four are planned around._ Hope is not a business paragraph; a fixed delivery day is.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph on doing business where you are (35 words or more). Use the frame.'));
out.push(p('**DOING BUSINESS WITH US IN ______________ — what to expect**   There are ______________ things ______________ should know, and all ______________ have answers.   **______________.** ______________. Because of ______________ we ______________, so ______________.   **______________.** ______________. Because of that we ______________.   **______________.** ______________. We do not pretend ______________, because ______________.   **______________.** ______________ takes ______________. Because of that we ______________.   None of these is going to be solved by us. All ______________ are planned around.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says every difficulty needs what you do about it. Your third one names the difficulty and stops — what do you actually do when that happens?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a supplier from outside want to deal with this company?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line promising the structure', ''],
  ['Every difficulty named, not "the situation"', ''],
  ['An answer in every paragraph', ''],
  ['A closing line about planning', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their paragraph. The class says which company they would place a first order with, and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about one difficulty where your workplace has found a real answer (60 to 100 words). Say what the difficulty is, what was tried first, and what works now.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the answer that works_   ✓ _because of + noun, because + clause_   ? _could anybody else use it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Collect the answers that could be copied. This is usually the most valuable page the class produces all term.'));
out.push(box('Homework', ['Write your final text. Then write the four difficulties your workplace plans around, each with its answer, in four sentences (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.6 =======================
out.push(pb());
out.push(h2('23.6  Did you read about the new rule?'));
out.push(p('**Function:** talking about business news   ·   **Grammar:** _Did you read about…? · Apparently… · It says that…_   ·   **Pronunciation:** reporting without asserting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where do you get news that affects your work? A newspaper, a group, a colleague, a customer?'));
out.push(p('**b**  Which of these would you repeat to your manager, and which would you check first? _It says in the paper that… · Apparently… · Somebody told me that… · I read on a group that…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour ask before anything else?   **A** when it starts   **B** where he read it   **C** what it means for us'));
out.push(p('**b**  Listen again. **1** Why does the source come first? **2** What does she do with the part he is not sure about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  "Where did you read it?"', [
  ['Bassel', 'Did you read about the new rule? Imported packaging has to be labelled in Arabic from June.'],
  ['Nour', 'Where did you read it?'],
  ['Bassel', 'Somebody put it in the traders\' group this morning.'],
  ['Nour', 'Then say that first, before the rule. _Apparently — it was in the traders\' group — imported packaging has to be labelled in Arabic from June._ Now I know how much to believe.'],
  ['Bassel', 'It might be in the official gazette too. I am not sure.'],
  ['Nour', 'Then that is two different things: what you read, and what you think. Keep them apart. _It says in the group that…_ and _I think it may also be official, but I have not seen it._'],
  ['Bassel', 'And what does it mean for us?'],
  ['Nour', 'That is the third sentence, and it is the one I actually need: if it is true, about a third of what we import needs a new label by June. Source, then content, then what it means for us. In that order, every time.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting business news – source first**',
  table(['Shape', 'Use'], [
    ['**Did you read about…?**', 'opening the subject'],
    ['**It says in** + source + **that…**', 'something you read, source named'],
    ['**Apparently…**', 'you heard it; you are not vouching for it'],
    ['**I have not seen it myself, but…**', 'honest second hand'],
    ['**If it is true, it means…**', 'the consequence, kept separate'],
  ], [1.8, 2.2]),
  '⚠ **Source, then content, then what it means for us.** In that order. A rule reported without its source cannot be weighed, and the hearer either believes too much or ignores it.',
  '⚠ **Keep what you read apart from what you think.** _It says in the group that…_ then _I think it may also be official, but I have not seen it._ Two sentences, because they carry different weight.',
  '⚠ **_Apparently_ is a useful word and not a hiding place.** It means "I heard this and I am not vouching for it", and it should be followed by where you heard it.',
  '⚠ The sentence your manager actually wants is the third one: **what it means for us**, with a number if you have one.',
  '**Practise:** Report each in three sentences — source, content, consequence. 1 a new labelling rule 2 a price rise 3 a road closure 4 a bank holiday 5 a competitor opening nearby',
  '**Useful phrases:**  Did you read about…?  ·  It says in the group that…  ·  Apparently…  ·  I have not seen it myself, but…  ·  If it is true, it means…',
  '**Pronunciation – reporting without asserting.** 🔊 **Track 23.12** Listen to the same rule said as fact and said as a report. The difference is a small fall on _apparently_ and a lighter voice on the rest. Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings news with no source; B puts the source first and asks for the consequence. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Did you read about __________? __________.'],
  ['B', 'Where did you read it?'],
  ['A', '__________.'],
  ['B', 'Then say that first, before the rule. _Apparently — __________ — __________._ Now I know how much to believe.'],
  ['A', 'It might be __________ too. I am not sure.'],
  ['B', 'Then that is two different things: what you read, and what you think. Keep them apart.'],
  ['A', 'And what does it mean for us?'],
  ['B', 'That is the third sentence, and it is the one I need: __________.'],
]));
out.push(table(['Role card 1 — a price rise', 'Role card 2 — a road closure'], [[
  'A heard from a customer that the price of imported wrap will rise thirty per cent in September. No source beyond the customer. Consequence: the fourteen-day price promise.',
  'A read on a group that the Mezzeh road closes for three weeks from the 1st. Consequence: the Tuesday and Thursday Ghouta deliveries.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the source, the content and the consequence in three columns. Then say how much you would believe it.'));
out.push(PHRASE_CARD(['Did you read about…?', 'It says in the group that…', 'Apparently…', 'I have not seen it myself, but…', 'If it is true, it means…', 'source, content, consequence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Bring **three** real pieces of news that affect your work. For each, write the source, the content in one sentence, and what it means for you.'));
out.push(table(['Source', 'What it says', 'What it means for us'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Apparently — it was in _______ — _______. I have not seen it myself. If it is true, it means _______._'));
out.push(p('**Listener task:** write down which pieces of news had a named source and which did not. Then say which you would act on.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Did you read about of_ and _It says that is_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the internal note about a piece of news, and answer the questions.'));
out.push(box(null, [
  '**NOTE — Arabic labelling on imported packaging (unconfirmed)**',
  '**What I have seen.** A message in the traders\' group, posted on 6 May, which says that from 1 June all imported packaging sold retail must carry an Arabic label with the importer\'s name. The message does not give a gazette number.',
  '**What I have not seen.** The gazette itself. I have not found it and I have not asked the chamber yet.',
  '**What I think.** It is probably true in some form; three people in the group say they have been told the same by their customs agent. The date of 1 June may be wrong.',
  '**What it would mean for us.** About a third of what we import is sold retail from the Mezzeh store — wrap and tape, not boxes. Labelling it would cost roughly 0.5 per unit and about a week of somebody\'s time to set up, once.',
  '**What I suggest.** I telephone the chamber on Monday and ask for the gazette number. We do nothing else until we have it. If it is confirmed, four weeks is enough to label the retail stock, so we are not late by waiting.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the five headings is the writer\'s own opinion?'));
out.push(item('2', 'Why does the last paragraph say "we are not late by waiting"?'));
out.push(item('3', 'What exactly has the writer not done?'));
out.push(box('Writer\'s box', [
  '**A note about unconfirmed news — five short headed parts:** what I have seen (with the date and the source) → what I have not seen → what I think → what it would mean for us, with a number → what I suggest.',
  '**Put "what I have not seen" in its own paragraph.** It is the paragraph that makes the rest usable: a reader who knows exactly where your knowledge stops can decide how much weight to put on it.',
  '**Show that waiting is safe, if it is.** _Four weeks is enough, so we are not late by waiting._ That sentence is what prevents an expensive decision taken on a group message.',
  '⚠ Put **(unconfirmed)** in the title. It costs one word and it survives being forwarded, which the careful paragraphs inside may not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note about a real piece of unconfirmed news (35 words or more). Use the frame.'));
out.push(p('**NOTE — ______________ (unconfirmed)**   **What I have seen.** ______________, posted on ______________, which says ______________.   **What I have not seen.** ______________. I have not ______________.   **What I think.** ______________. ______________ may be wrong.   **What it would mean for us.** ______________. It would cost roughly ______________.   **What I suggest.** I ______________ on ______________. We do nothing else until ______________. If it is confirmed, ______________, so we are not late by waiting.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says put _what I have not seen_ in its own paragraph. Where does your knowledge actually stop, and can I tell from the page?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the reader decide how much to believe?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The source, with a date', ''],
  ['A "what I have not seen" paragraph', ''],
  ['A number for the consequence', ''],
  ['A suggestion, and why waiting is safe', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what I have not seen". The class says whether they now trust the rest more or less. It is reliably more.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a rumour was acted on too early, or too late (60 to 100 words). Say where it came from, who believed it, and what it cost.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _where it came from_   ✓ _apparently / it says that used correctly?_   ? _who could have checked it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases could one telephone call have settled it? That is usually the finding, and it is usually a call nobody was willing to make.'));
out.push(box('Homework', ['Write your final text. Then take one piece of news from this week and write it in three sentences: source, content, what it means for you (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 23.7 =======================
out.push(pb());
out.push(h2('23.7  Review & Mediate: the local business page'));
out.push(p('**Function:** telling a visitor what the local business page says   ·   **Review:** dates · _there is/are_ · comparatives · the passive · _because of_ · reporting news'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _We ___ founded in 1998._',
  '**2** _since_ + a point, _for_ + a ______.',
  '**3** _There ___ two store rooms._',
  '**4** _cheaper ___ Aleppo._',
  '**5** _Because ___ the power cuts_ — of, or nothing?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the visitor misunderstand?   **A** the prices   **B** he reads the difficulties as a warning   **C** the address'));
out.push(p('**b**  Listen again. **1** What does Nour say the page is for? **2** What does she say about the sentence a visitor should take away?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  "It sounds very difficult here"', [
  ['Visitor', 'I have read your page about doing business here. Power cuts, slow roads, nine weeks for a licence. It sounds very difficult.'],
  ['Nour', 'It is difficult. The page is not there to say it is easy; it is there to say that we know exactly which four things are difficult and what we do about each one.'],
  ['Visitor', 'Most companies send me a page saying everything is excellent.'],
  ['Nour', 'And then the first difficulty arrives and you find out they had no plan for it, because they had not admitted it existed. Ours says: cuts every afternoon, so the generator runs from one until four; slow roads, so the Ghouta is Tuesdays and Thursdays only; prices held fourteen days, in writing, and no longer.'],
  ['Visitor', 'So the difficulties are the argument.'],
  ['Nour', 'The answers are the argument. The difficulties are everybody\'s — yours too, in a different shape. If you take one sentence away, take that one: none of the four is going to be solved by us, and all four are planned around.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining a difficult place without apologising or boasting**',
  table(['To frame it', 'To answer the doubt', 'To close'], [
    ['The page is there to say what is difficult and what we do.', 'It is difficult. Here is what we do.', 'Planned around, not solved.'],
    ['Four things, and all four have answers.', 'Everybody has these; ours are written down.', 'Take that one sentence away.'],
  ], [1.9, 1.8, 1.8]),
  '⚠ **Do not defend the place and do not apologise for it.** Both put you in the wrong conversation. Name the difficulty and give the answer; the answer is the whole argument.',
  '⚠ **A difficulty with an answer is a qualification.** Four difficulties with four answers is the most persuasive page a company here can write, and it is more persuasive than a page of excellences precisely because it can be checked.',
  '⚠ When a visitor says _it sounds very difficult_, agree. Then move straight to what you do. Disagreeing makes you sound as though you have not noticed your own country.',
  '**Practise:** A visitor has read your difficulties page and says it sounds hard. Agree, give the four answers, and leave them with one sentence.',
  '**Useful phrases:**  It is difficult.  ·  Here is what we do.  ·  all four have answers  ·  planned around, not solved  ·  If you take one sentence away…',
  '**Pronunciation – agreeing and moving on.** 🔊 **Track 23.14** Listen: _it is difficult_ — flat, short, no defensiveness — then a clear new start on _here is what we do_. Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor who has read the difficulties page and is put off; B agrees and gives the answers. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'You are a Lebanese supplier choosing between two Damascus distributors. One sent a page of excellences; the other sent the four difficulties with four answers. You are inclined to prefer the confident one and need to be talked round — fairly.',
  'You are an engineer coming to install a machine. You have read that there is no lift, no loading bay and a generator that runs three hours. You want to know whether to bring two men or four, and whether to come in the morning.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the four answers. Then write the one sentence you would take away.'));
out.push(PHRASE_CARD(['It is difficult.', 'Here is what we do.', 'all four have answers', 'planned around, not solved', 'yours too, in a different shape', 'If you take one sentence away…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a local business page — a company profile and a difficulties paragraph. Read it silently. Then explain it to **two** visitors: one who thinks it sounds difficult, and one who thinks the company is making excuses.'));
out.push(table(['Who I told', 'What they objected to', 'What I said'], [['', '', ''], ['', '', '']], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the page. This is the **eleventh** unit of Book 2, and the unwritten thing is the one the whole unit turns on: a difficulty with an answer beside it is a qualification, and a page with no difficulties in it has not been written by somebody who has to deliver anything.'));
out.push(p('_The page said ______. The visitor thought ______. I said ______, and the sentence I left them with was ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _founded · premises · turnover · wholesale · retail · municipality · registration_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Sham Trading was founded in 1998._   **A** It is being founded now. **B** It started in 1998. **C** It closed in 1998.',
  '**2**  _We have been in Mezzeh since 2011._   **A** We left in 2011. **B** We arrived in 2011 and are still there. **C** We will move in 2011.',
  '**3**  _There is no loading bay._   **A** Unload on the street. **B** There is a loading bay at the back. **C** No vans allowed.',
  '**4**  _Homs is about forty per cent cheaper for the same floor area._   **A** Homs costs more. **B** The same space costs less in Homs. **C** The areas are different.',
  '**5**  _The labels are printed in Homs and sent to Beirut._   **A** Beirut prints them. **B** Homs prints them. **C** Nobody prints them.',
  '**6**  _Because of the power cuts, we run a generator from one until four._   **A** The cuts stopped. **B** There are cuts, and there is an answer to them. **C** There is no generator.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** Here: three facts about where you work, for somebody who is coming.',
  'The three points for a visitor are nearly always: **where it is** · **what there is not** · **who to ask for**.',
  '⚠ In twenty-five words, one _there is no_ earns its place ahead of any description. The absence is what changes what they bring.',
  '⚠ Put the telephone number in. It is four words and it is the only line that works when everything else fails.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** Somebody is visiting your workplace next week. Write a short message (25 words or more). Say **where it is**, **what there is not**, and **who to ask for**.'));
out.push(p('Dear ______________, we are at ______________. There is no ______________, so ______________. Ask for ______________ at ______________, or telephone ______________. Thank you. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Where it is', ''],
  ['One _there is no_, with its consequence', ''],
  ['A name to ask for', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the paragraph you would send to somebody abroad who asked what it is like to do business where you are (60 to 100 words). Neither a brochure nor a complaint: what is good, what is hard, what you do about it.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then write the one sentence you would want a stranger to take away about doing business where you are (35+ words with the reason).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Sham Trading ___ founded in 1998.   a) is   b) was   c) has',
  '2  We ___ here since 2011.   a) are   b) have been   c) were',
  '3  We have been here ___ fifteen years.   a) since   b) for   c) from',
  '4  There ___ two store rooms.   a) is   b) are   c) has',
  '5  There is ___ lift.   a) no   b) not   c) any',
  '6  Homs is cheaper ___ Aleppo.   a) as   b) than   c) that',
  '7  The labels ___ printed in Homs.   a) is   b) are   c) be',
  '8  ___ the power cuts, we run a generator.   a) Because   b) Because of   c) Why',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 23.15** Listen to the company described. Complete the note.   Founded: ______   Moved to Mezzeh: ______   People employed: ______   There is no: ______   Generator hours: ______'));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Nour', 'Sham Trading was founded in 1998 as a packaging workshop in Bab Touma, with four people and one machine.'],
  ['Nour', 'We moved to Mezzeh in 2011 and we have been in the same premises since then. We employ nineteen people.'],
  ['Nour', 'There is parking for three cars in front, but there is no lift — the first-floor store room is eleven steps up and everything is carried. Because of the power cuts we run a generator from one until four.'],
]));
out.push(p('**C  Writing.** Write the opening of a company profile (35+ words): _was founded_ with a year, one more date, a number in place of an adjective, and one _there is no_ with its consequence.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say when a company was founded, and how long it has been somewhere',
  '☐ use _since_ with a point and _for_ with a length',
  '☐ say what there is in a place **and** what there is not',
  '☐ compare two places with a measure in each, and one comparison against me',
  '☐ use the simple passive for a process, and name a person where it matters',
  '☐ join a named difficulty to what we do about it',
  '☐ report news with its source, and keep what I think separate',
  '☐ write a profile a stranger could check, and a difficulties paragraph a stranger would believe',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
