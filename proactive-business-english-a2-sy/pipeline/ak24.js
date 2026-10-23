// Proactive Business English A2 · Syria Edition · Book 2 · Unit 24 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 24  Looking Forward'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit sorts the future onto three shelves and the whole unit depends on the sorting:** _going to_ for the arranged, _hope to_ for the intended, _would like to_ for the proposed. Teach the three together in the first lesson, on the board, with an example of each from the room. Everything after that is practice.',
  '⚠ **The hardest teaching in the unit is 24.6, and it is not language.** Owning a failure in the first person is difficult in any language and more difficult in a hierarchy. Do not push a learner into writing about their own employer\'s failure if they are uneasy; the role cards exist so that the skill can be practised at one remove.',
  '⚠ **This is the last unit of A2.** Leave ten minutes at the end of 24.7 for the course review in stage 7 and read three of them aloud. A class that hears what three colleagues have actually done with the English outside the room finishes differently from a class that finishes on an exam paper.',
], C.grey, C.navy));

// ===================== 24.1 =====================
out.push(h2('24.1  We are going to open on the first'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The useful part is the second question — most "definitely" items turn out to be intentions, and the class discovers the unit for itself.'));
out.push(p('**b**  _We are going to open on the first_ if it is arranged. _We will open_ reads as an intention. _We open on the first_ is a timetable and is fine on a notice in the window.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Is it arranged? Is there a lease, an order, a booking, a date somebody else has agreed to?  2 A decision made at the moment of speaking, and a prediction.'));
out.push(p('**Language box – Practise (answers):**  1 _going to_ — the lease is the arrangement.  2 _will_ — decided as you speak.  3 _will_ — a prediction.  4 _are meeting_ or _going to meet_ — it is in the diary.  5 neither — _we hope to_, which is 24.2.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'For the staff: "We will have a second machine running in August."'],
  ['B', 'Is it arranged? Is the machine paid for?'],
  ['A', 'It is paid for. It ships on the 12th.'],
  ['B', 'Then _we are going to have a second machine from August_ — the payment and the shipping date are the arrangement.'],
  ['A', 'I thought _will_ was stronger.'],
  ['B', '_Will_ is for a decision made as you speak. And who is going to run it on the second shift?'],
  ['A', 'Nobody yet. I was going to ask.'],
  ['B', 'Then the machine is _going to_ and the second shift is _we hope to_, and they must not share a sentence.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners build two columns. Typical errors: _we will going to_ · _we are going to_ with nothing arranged · _we are going to open_ for a timetable that would be better as the present simple.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What', 'A / H', 'The evidence', 'The sentence'], [
  ['second store', 'A', 'lease signed, shelving ordered', 'We are going to open on 1 September.'],
  ['Saturday deliveries', 'A', 'driver taken on', 'We are going to deliver on Saturdays from 1 September.'],
  ['Homs store', 'H', 'nothing — no lease, no date', 'We hope to open in Homs in 2027.'],
  ['second driver', 'H', 'nothing', 'We hope to take on a second driver.'],
  ['price list reprint', 'A', 'at the printer', 'The new list is going to be ready on Thursday.'],
], [1, 0.5, 1.2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We are going to open on 1 September, because the lease is signed and the shelving is ordered. We hope to open in Homs, but there is no lease and no date."', 'Anything marked A with no evidence beside it is a hope wearing a lease. That phrase is worth writing on the board; the class will use it on each other all week.']));
out.push(stage('5', 'Read'));
out.push(p('1 The lease is signed and the shelving is ordered; for Saturdays, a driver has been taken on.  2 Because a hope under the same heading as a signed lease damages the lease — and under its own heading it costs nothing and reads as honesty.  3 It answers "is anything being taken away from me" — the question every customer asked silently and none asked aloud.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TO OUR TRADE CUSTOMERS — a second machine and the cutting service**', '**What is arranged.** We are going to run a second press from 1 August. It is paid for and ships on 12 July. It is going to double the cutting capacity on standard sizes only.', '**Also arranged.** From 1 August, orders placed before ten are going to be cut the same day.', '**What we hope to do, and have not arranged.** We hope to add a second shift so that the press runs in the afternoon as well. There are no staff for it and no date.', '**What is not changing.** Prices, the three-week paint rule, and the gate count. Nobody is leaving and nothing is closing.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Going to_ only for arranged things', '✓'],
  ['Evidence beside each one', '✓ – paid for, ships 12 July'],
  ['Hopes under their own heading', '✓ – the second shift'],
  ['A "what is not changing" paragraph', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says put the evidence beside each arranged thing. The press has it. The same-day cutting does not — is that arranged because the press is arranged, or is it a separate thing somebody still has to agree to?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Sort every future sentence by ear into arranged and hoped-for. A class can do this accurately by the second announcement, and that is the test of the cycle.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['In 2018 we told customers we would open on Fridays. It was announced on a printed notice in the window. What was actually arranged was a conversation with one member of staff who had said he would think about it. He thought about it and said no, quite reasonably, and the notice stayed in the window for five weeks because nobody wanted to be the person who took it down. Customers came on three Fridays and found the shutter down. Two of them still mention it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody wanted to be the person who took it down"_   ✓ _going to / will used correctly._   ? _Who announced it, and did they know it was not arranged?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most of these stories the announced thing was never arranged at all, and the announcement was made by somebody who believed it. That is the cycle told by the class, and it is more convincing than the Language box.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['The press: paid for, ships 12 July — arranged. The same-day cutting: nothing, I assumed it followed from the press. The second shift: nothing at all. One of my three "certainties" had no evidence behind it.']));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  We hope to open in Homs'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second question — what would have to happen first — is the one that produces the condition, and learners always know the answer and have never said it.'));
out.push(p('**b**  Right: _We hope to open_ and _We are hoping to open_. Wrong: _hope opening_; _hope that we open_ is unnatural here.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 A condition and a date — what would have to happen first, and when she will know.  2 That it is a nice feeling, and nobody can plan around a nice feeling.'));
out.push(p('**Language box – Practise (samples):**  1 _We hope to open a second store, if we find a lease at or below 1,200 a month. We will know by March._  2 _We hope to buy a second press, if the first one pays for itself by June._  3 _We hope to take somebody on, if the Saturday trial brings thirty orders._  4 _We hope to reduce prices, if the import route reopens; we will know by the end of the quarter._  5 _We aim to run an English hour every week from September, if we can close at four on Thursdays._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'You say you hope to reduce prices. Does that mean yes or no?'],
  ['B', 'It means we intend to and it is not arranged. What would have to happen first is the Latakia route reopening, and that is not ours to arrange.'],
  ['A', 'Most companies would just say prices are coming down.'],
  ['B', 'And then in September they are not, and you remember.'],
  ['A', 'So when will you know?'],
  ['B', 'By the end of the quarter. If the route is open we are going to cut the wrap price by about ten per cent; if it is not, prices hold where they are. I will write to you either way.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the condition and the date of knowing, and say whether they could plan around it. Typical errors: _we hope opening_ · _we hope to can_ · _we are hoping for open_ · and the content fault of a hope with no condition, which is the whole point.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['We hope to…', 'The condition', 'When we will know'], [
  ['open in Homs', 'a lease at or below 1,200 a month', 'the end of March'],
  ['add a second shift', 'two people willing to work afternoons', 'when the press has run a month'],
  ['cut the wrap price', 'the Latakia route reopening', 'the end of the quarter'],
  ['close at four on Thursdays', 'the Ghouta run moving to Wednesday', 'after four weeks of trying it'],
], [1.6, 1.6, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We hope to add a second shift, if we can find two people willing to work afternoons. We will know when the press has run for a month."']));
out.push(stage('5', 'Read'));
out.push(p('1 **What is decided** — two words, _nothing yet_. It is right because the honest answer is short and burying it in four lines would be the dishonest version.  2 It lets the reader judge the odds for himself, and it stops the condition being a polite way of saying no.  3 Write in the first week of April either way, including if the answer is no.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** The second shift — what is decided and what is not', 'Dear Abu Yasser,', 'You asked whether there is going to be an afternoon shift. The honest answer is in two halves.', '**What is decided.** Nothing yet. Nobody has been asked and no hours have been set.', '**What we hope to do.** We hope to run the press from two until six as well, with two people. We intend to decide after the press has run a full month — so by the end of August.', '**What it depends on.** Two people who want the afternoon, and about 600,000 a month more in cut orders to pay for it. We have had 300,000 of that in July.', '**What you can plan on in the meantime.** Your hours and your Saturdays do not change, whether or not the shift happens. Nothing about the afternoon changes anything about the morning.', '**When you will hear.** I will tell you in the first week of September either way — including if the answer is no.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Hope to_ / _intend to_ with _to_ + verb', '✓'],
  ['A condition with a number in it', '✓ – 600,000 a month'],
  ['What the reader can plan on meanwhile', '✓ – hours and Saturdays unchanged'],
  ['A date for hearing, either way', '✓ – first week of September'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says put a number on the condition, and you have two — the people and the money. The one I would look at is _two people who want the afternoon_: is that a number or a hope? Has anybody been asked?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "what you can plan on meanwhile" paragraphs. Ask whether the reader could get on with their week. This is the paragraph most learners leave out of the first draft and it is the one the reader wanted.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We have hoped to take the unit next door for six years. It depends on the tenant leaving, which he has twice nearly done — once in 2021 when he told us himself, and once last year when his licence came up. If it ever happens, the first thing we would do is move the paint out of the yard shed, because the shed leaks and we have known that for six years and have not fixed it, on the grounds that we are about to move. The condition is not really the tenant. The condition is us.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the condition is not really the tenant; the condition is us"_   ✓ _hope / intend + to + verb._   ? _What would it cost to fix the shed anyway?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In perhaps a third of these texts the stated condition is not the real obstacle. Finding that out is worth the whole cycle and it happens only because the condition was written down.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Hope: the unit next door; condition: the tenant leaving; we will know — never, because nobody has asked him. I asked the landlord on Tuesday instead. He says the lease ends in March and he will tell us by January.']));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  We would like to propose three steps'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The question about fear is the useful one: the person who has to agree is nearly always afraid of a cost they cannot reverse, which is exactly what the small first step removes.'));
out.push(p('**b**  Right: _We would like to propose_ and _We suggest changing_. Wrong: _would like propose_ · _suggest to change_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because a whole new day for everybody at once fails in front of four hundred customers, while a six-week trial in one district fails cheaply.  2 How you would stop — a proposal that cannot be stopped is one nobody dares to start.'));
out.push(p('**Language box – Practise (samples):**  1 _We would like to try Saturdays in Mezzeh only, for six weeks; if fewer than thirty orders come, we stop._  2 _We suggest counting the twenty fastest lines for four Fridays, then reviewing._  3 _We would like to hold one price for twenty-one days as a trial on wrap only._  4 _We suggest one order of ten boxes from the new supplier, checked on arrival._  5 _We would like to try one English hour a week for a month; if attendance falls below four, we stop._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I would like to propose a stock count. Everything, every Friday, from this week.'],
  ['B', 'That is a good idea and nobody will agree to it.'],
  ['A', 'Why not?'],
  ['B', 'Because it is three hours of four people every week for ever, and if it finds nothing the first time everybody will resent it. Make the first step small: the twenty fastest lines, four Fridays.'],
  ['A', 'And then?'],
  ['B', 'Then step two, if the four Fridays find real differences: the whole store room monthly. Step three: a written count sheet with a name on it.'],
  ['A', 'That is slower.'],
  ['B', 'It is slower and it will actually happen. And say how you would stop: if the four Fridays find less than a hundred thousand of difference, we stop and say so.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the small first step and the exit, and say whether they would agree. Typical errors: _we would like propose_ · _we suggest to start_ · _we would like that you agree_ · and the content fault of a first step that is still the whole thing.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The change', 'The small first step', 'The exit'], [
  ['Saturday deliveries', 'Mezzeh only, six Saturdays, from 7 June', 'fewer than thirty orders → stop on 19 July'],
  ['weekly stock count', 'the twenty fastest lines, four Fridays', 'under 100,000 of difference found → stop'],
  ['a new wrap supplier', 'one order of ten boxes, checked at the gate', 'any crushed or late → no second order'],
], [1, 1.8, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We would like to propose Saturday deliveries in Mezzeh only, for six weeks. If thirty orders come, we would then do the whole city. If not, we stop on 19 July and nothing is lost."', 'Ask which proposal the class would agree to fastest, then ask whether that is because it is the best or the smallest. The honest answer is the smallest, and that is the lesson.']));
out.push(stage('5', 'Read'));
out.push(p('1 Two of the three — step two depends on the trial and step three on step two.  2 Nothing is bought and nobody is taken on, so stopping costs only the six Saturday mornings.  3 It asks for one thing — a yes or a no by 24 May — and promises that the proposer will arrange everything else.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**PROPOSAL — a weekly count of the twenty fastest lines, as a four-week trial**', '**What we would like to do.** We would like to propose counting the twenty fastest-moving lines every Friday at four, for four weeks, starting 6 June.', '**Why.** In the last three months we have had nine customers told an item was in stock when it was not. Seven of the nine were among the twenty fastest lines. Each one cost a telephone call and, twice, a delivery.', '**What it costs.** One person for about forty minutes a Friday. Nothing is bought.', '**Step two, if it works.** The whole store room once a month, on the last Friday. We would decide in the first week of July.', '**Step three, if step two works.** A printed count sheet signed by whoever counted it, as at the gate.', '**How we would stop.** If the four Fridays find less than 100,000 of difference in total, we stop and I will say plainly that it was not worth the time. Nothing is bought, so stopping costs four Friday afternoons.', '**What we need from you.** A yes or a no by 2 June, and nothing else.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A small, dated first step', '✓ – four Fridays from 6 June'],
  ['Numbers from real demand', '✓ – nine customers, seven of the twenty'],
  ['Steps two and three conditional', '✓'],
  ['A cheap exit, and one ask with a date', '✓ – yes or no by 2 June'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says make stopping cheap and say so, and yours does it twice. The sentence I would keep above everything else is _nothing is bought_ — that is the one the person signing is reading for."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "how we would stop" paragraphs and ask which proposal the class would sign today. The winner is reliably the one whose exit costs least, not the one whose idea is best.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I proposed a second telephone line in 2022. I asked for the line, two handsets, a new number printed on everything and a person to answer it, all in one memorandum, and I never got an answer at all. I thought it had been refused. Two years later the manager told me he had put it aside to think about the printing and then forgotten it. What I should have asked for was one line on the existing number, for a month, with no printing and nobody new, and a yes or no by a Friday.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"he had put it aside to think about the printing"_   ✓ _would like to / suggest + -ing._   ? _Was it refused, or was it never answered?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Far more proposals are never answered than are refused, and the unanswered ones nearly always had several asks and no date. Say so once; it changes how the class writes for the rest of their working lives.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Rewritten: one extra line on the existing number, for one month, nothing printed and nobody new. If fewer than twenty calls come to it, we give it up. A yes or a no by Friday. He said yes in a morning.']));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  First, then, after that — and why'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners produce the steps in the order they thought of them, which is 24.4\'s subject.'));
out.push(p('**b**  _first · then · after that · finally_, with _at the same time_ belonging anywhere — which is exactly the point of the cycle.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 He moves it to day one, because it has a three-week wait and depends on nothing inside the store.  2 Because without the reason somebody in a hurry will reorder the plan and undo it — the shelves fitted before the painting.'));
out.push(p('**Language box – Practise (samples):**  1 _First the lease, because nothing else is worth spending on until it is signed._  2 _First print the list, because you cannot count against a list you do not have._  3 _At the same time, start the registration — it takes three weeks._  4 _First tell the customers, because a delivery day nobody knows about is an empty van._  5 _First close the ledger, so that the count has something to be checked against._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The plan: first advertise, then interview, after that choose, finally he starts.'],
  ['B', 'Four steps in the right order. Now tell me why the paperwork is not in it.'],
  ['A', 'Because it happens after we choose.'],
  ['B', 'It does, and it takes three weeks, and at the moment it is invisible — so he will be chosen in May and start in June and everybody will be surprised.'],
  ['A', 'So: after that we choose, and at the same time we start the registration, because it takes three weeks.'],
  ['B', 'Better. And why does interviewing come before choosing?'],
  ['A', 'Because — that one is obvious.'],
  ['B', 'Then leave it. A reason on every step does not mean a reason on the obvious ones; it means a reason wherever somebody in a hurry could reorder it.'],
]));
out.push(note('That last exchange is worth keeping. The rule in the Language box is "a reason for each position", and a sensible learner will ask whether _first we advertise, because you cannot interview nobody_ is really necessary. It is not. The reasons belong on the steps that could be reordered, and saying so prevents a plan of eleven obvious clauses.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the steps with reasons and ring the one that moves to day one. Typical errors: _at first_ for _first_ · _after that we will to fit_ · _because of you cannot paint_ · and the content fault of a plan with no dates.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Step', 'What happens', 'Why here'], [
  ['First', 'sign the lease, 12 May', 'everything after it costs money on a street we would not have'],
  ['At the same time', 'order the sign, apply for the licence', 'three weeks and six weeks of waiting; neither depends on the store'],
  ['Then', 'paint, 20–24 May', 'you cannot paint behind a fitted shelf'],
  ['After that', 'fit the shelves, 26–28 May', 'the paint must be dry first'],
  ['Finally', 'open, Monday 8 June', 'a first day with a mistake in it is better on a quiet day'],
], [0.9, 1.6, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"First the lease, because nothing after it is worth spending on. At the same time the sign and the licence, because they take three and six weeks and depend on nothing inside the store. Then paint, because you cannot paint behind a fitted shelf."']));
out.push(stage('5', 'Read'));
out.push(p('1 The sign (three weeks) and the licence (six weeks) — both ordered the day the lease is signed.  2 A first day with a mistake in it is better on a quiet day than on a Thursday.  3 Which of the two late items would be allowed to delay the opening: the licence would not stop it, the sign would.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TAKING ON AN AFTERNOON PRESS OPERATOR — the plan, with reasons**', '**First, 1 July: ask the two people here who have said they want afternoons.** Nothing else can start until this is asked, because if either says yes the rest of the plan does not happen at all.', '**At the same time, 1 July: get the registration forms and the medical appointment.** The registration takes three weeks and the medical takes ten days. Started on day one, because neither depends on who is chosen.', '**Then, 8–15 July: advertise, if nobody inside said yes.** One week only, because a longer advertisement does not bring better people, it brings more people.', '**After that, 18–20 July: interview and choose.** Three days.', '**Finally, 1 August: start, with the press.** The same day the press runs, so that the training is on real orders and not on demonstrations.', '⚠ If the registration is late, he starts anyway on the morning shift with me — that is allowed — but we do not start the afternoon shift without the medical, because the insurance would not cover it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A date on every step', '✓'],
  ['A reason for each position', '✓ – on the steps that could be reordered'],
  ['Long-wait items started on day one', '✓ – registration and medical'],
  ['The awkward case decided in advance', '✓ – registration yes, medical no'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says decide the awkward case in advance, and yours decides both. The reason on the medical is the strongest line in the plan — I would put the insurance word in the step itself, not only in the warning."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "at the same time" lines and ask how many weeks each saves. Three to six weeks is the usual answer and it is the most immediately profitable sentence in the book.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Our store room shelving was eleven weeks late and everybody blamed the welder. The welder was three days late. What everybody waited for was a measurement: nobody measured the room until the old racking had been taken out, and the racking was not taken out until the shelving was ordered, and the shelving could not be ordered without the measurement. It could have been measured with a tape in twenty minutes on the first morning, over the top of the old racking, to within five centimetres. Eleven weeks, for twenty minutes.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"eleven weeks, for twenty minutes"_   ✓ _sequencers and because._   ? _Did anybody notice at the time?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Nearly every delay in the room is a long-wait item started late, or a circle of three steps each waiting for another. Both are visible the moment the plan is written down with reasons, which is the argument for writing it down.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Waits longer than a week in the plan I am in: the registration, three weeks; the medical, ten days; the sign, three and a half weeks; the licence, six weeks. Three of the four had not been started.']));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  We have already done three of the five'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect the "not done yet" list to be longer and more detailed than the "done" list, which is the habit the cycle reverses.'));
out.push(p('**b**  Right: _We have already signed_, _We have signed already_, _We haven\'t signed yet_. Wrong: _We didn\'t sign yet_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because the reader\'s question is "should I worry", and a count answers it while a list of what is left does not.  2 That it is the most expensive word in a progress report — it covers anything from an hour to three weeks.'));
out.push(p('**Language box – Practise (samples):**  1 _Four of the six steps are done; the shelves are finished on 30 May._  2 _Three of the four rooms are counted; the upstairs room is Friday._  3 _The licence has been applied for; the answer is due on 23 June._  4 _We have run two of the six Saturdays; nineteen orders so far._  5 _Nine of the twelve units of the year\'s plan are done; the last three are November and December._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The progress report. "The trial is going well."'],
  ['B', 'True, and it is not a report. How many Saturdays have you run?'],
  ['A', 'Two of the six.'],
  ['B', 'And how many orders?'],
  ['A', 'Nineteen.'],
  ['B', 'Then say that. _We have run two of the six Saturdays and taken nineteen orders._ Nineteen in two is ahead of thirty in six, and "going well" is not — it is a feeling, and a feeling cannot be compared with a target.'],
  ['A', 'And the review is nearly ready.'],
  ['B', 'Then it is not ready. When is it ready?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the count and any _nearly_ that survived, with the date that replaced it. Typical errors: _we didn\'t finish yet_ · _we have finished yesterday_ (the present perfect with a finished time) · _we have already two_ (no verb) · and the content fault of reporting a feeling instead of a count.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Already done', 'Not done yet', 'Date'], [
  ['lease signed', 'shelves fitted', '30 May'],
  ['sign ordered', 'stock moved', '1–5 June'],
  ['licence applied for', '', ''],
  ['painting finished', '', ''],
], [1.8, 1.4, 0.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We have already signed the lease, ordered the sign, applied for the licence and finished the painting. Four of the six are done. We haven\'t fitted the shelves yet; that is the 30th."', 'Ask every surviving _nearly_ for a date. The two answers — "nearly finished" and "finished on Thursday week" — are so different that the class hears the point without being told it.']));
out.push(stage('5', 'Read'));
out.push(p('1 The date each thing was done — it turns a claim into a record, and in a month that report is the only place the record exists.  2 A watched thing has already been thought about and has an answer ready (the paper allowing opening with the licence pending); a problem has not.  3 Because the reader was looking for exactly that line and should not have to work it out from the dates above — and because saying it when nothing has changed is what makes it believable when something has.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**PROGRESS — the Saturday trial, as at 21 June**', '**Done: four of the six Saturdays.** We have run 7 June (nine orders), 14 June (ten), and we have told all four hundred customers (2 June) and taken on the driver (28 May).', '**Not done yet: two.** 28 June and 5 July. The review is written on 7 July.', '**Changed.** Two of the nine Mezzeh customers who asked for Saturdays have moved a standing Thursday order to Saturday, which was not expected and takes about 200kg off the Thursday van.', '**The one thing I am watching.** The driver. He is doing Saturdays on top of a full week and has not complained, which is not the same as being all right. I am asking him on 28 June, not on 5 July.', '**Still 7 July for the decision.** Nothing in this report moves it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count of what is done', '✓ – four of six, with the order numbers'],
  ['A date beside each finished item', '✓'],
  ['_Haven\'t … yet_ with dates, and no _nearly_', '✓'],
  ['One watched item, and the end date restated', '✓ – the driver'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says have exactly one thing you are watching, and the one you chose is a person rather than a date, which is braver and probably right. _Has not complained is not the same as being all right_ is the best sentence in the report."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the last lines. Ask whether anybody would need to put a single question after reading one. A report that survives that test is a report that will be read next month.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Our second door was "nearly finished" for fourteen months. What was actually left was a frame, which the carpenter had made and would not deliver until he was paid for the previous job, which was disputed by about 40,000. Every month somebody said the door was nearly done. What finished it was a Thursday when the manager put the 40,000 on the desk, in front of two of us, and asked for the frame on Saturday. It came on Saturday. Fourteen months of "nearly" and one afternoon of a date.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"fourteen months of nearly and one afternoon of a date"_   ✓ _have / haven\'t … yet._   ? _What finished it in the end?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What finishes a long "nearly" is almost always a date set in front of other people. That is not a language point and it is the most useful thing in the cycle.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Done: three of the five (list printed 2 June, two staff trained 4 June, three rooms counted 7 June). Not done: the upstairs room, Friday the 12th. Watching: the ledger, which is two weeks behind.']));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  Closing well — a year, a project, a course'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. In most workplaces nothing is written and the year simply stops, which is why this cycle exists.'));
out.push(p('**b**  Open. _What went wrong_ and _what is going to change_ are chosen by most learners, and _who worked hardest_ by almost none — which is worth discussing, because the cycle asks them to name people for one specific thing.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That thanking everybody for everything thanks nobody, and everybody in the room knows which weeks were the hard ones.  2 One sentence about what is actually arranged for next year, with a date, so that people go home with a date.'));
out.push(p('**Language box – Practise (samples):**  1 _Thank you for the three weeks in August. What went wrong was Homs. We have learned to count before we sign. We are going to open on Baghdad Street on 8 June._  2 _Thank you for the two nights of the stock count. What went wrong was the list. We have learned to print it first. The next count is 5 January._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The note. "Thank you all for your efforts with the Saturday trial. We will consider it again in the future."'],
  ['B', 'Who made the effort?'],
  ['A', 'Everybody.'],
  ['B', 'Then it says nothing. Name the thing.'],
  ['A', 'Fadi worked six Saturdays on top of a full week and never once said no.'],
  ['B', 'That is a thank-you. And what went wrong?'],
  ['A', 'Nineteen orders in six weeks. We needed thirty.'],
  ['B', 'Put the number in. Everybody knows it failed; the number is what stops it being whispered about. And say what we learned: we counted the customers who asked, not the ones who would pay, and next time we ask for a standing order before we buy a Saturday.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Read these closings slowly and insist on it; the stage is a pronunciation stage as much as a function stage. Typical errors: _thank you for to work_ · _we have learn_ · _we will consider it in the future_, which is the content fault the cycle exists to remove.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('The four sentences — sample', [
  '**1 Thank you for** the six Saturdays, Fadi, on top of a full week, without once being asked twice.',
  '**2 What went wrong** was the Saturday trial: nineteen orders in six weeks against the thirty we needed, and the decision to try it was mine.',
  '**3 We have learned** to ask for a standing order before we buy a delivery day — a customer who asks for Saturday is not the same as a customer who will order on Saturday.',
  '**4 Next year we are going to** open on Baghdad Street on 8 June. The lease is signed and the sign is ordered.',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Ask which of the four was hardest to write. It is almost always the second, and in a hierarchy it is sometimes impossible — which is why the role cards exist. A learner who writes the second sentence about a trial rather than about their employer has still practised the skill.'));
out.push(stage('5', 'Read'));
out.push(p('1 He was there on two of those mornings and most of them were there on all of them — evidence rather than sentiment.  2 His, both times, and the note says so because a failure named in the passive at the most visible moment of the year is noticed by everybody.  3 That he will say which things are hopes and which are arranged, as they happen.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TO EVERYBODY AT NASSIF BROTHERS — the end of the year**', 'Thank you for the four days in February when the roof went. We moved eleven tonnes of stock in the rain and lost two boxes of paint and nothing else. I know what that cost because I could not lift my left arm for a week, and I was doing the easy end.', 'What went wrong this year was the Jaramana shop. I signed that lease in 2016 against advice, mine being the only signature on it, and we closed it in 2020. We have learned to count the passing trade in a street for a week before signing anything, and we did that for four days before the new unit.', 'Two other things. A gate sheet with a name on it has found three errors this year, and nobody has resented it. And paint older than three months is not a saving.', 'Next year, one arranged thing: the second press runs from 1 August. It is paid for and it ships on 12 July. Anything else you hear about next year is a hope and I will say so.', 'Thank you. Bassel Nassif']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Thanks for one specific thing, with evidence', '✓ – the February roof'],
  ['The failure named and owned', '✓ – "mine being the only signature"'],
  ['What was learned, as a rule', '✓ – count the trade for a week'],
  ['One arranged thing, with a date', '✓ – 1 August, ships 12 July'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says own the failure in the first person, and yours does it as plainly as it can be done. The line I would look at is _against advice_ — it is true and it names somebody else without naming them. Is that what you want in the sentence where you take the blame?"'));
out.push(note('That feedback is the hardest in the book to give and worth modelling aloud. It is also a real editorial point: a first-person failure that quietly notes that others were right is a smaller admission than it looks.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask which note the class would believe if they worked there. It is reliably the one that names a failure, and that result is the whole argument of the cycle.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I would want somebody to name the week in January when three of us covered the counter alone, because everybody remembers it and nobody has mentioned it since. I would want the thing that went wrong to be said out loud — the order we lost in March was lost by me and I have never been told whether anybody knows. And I would want one date for next year. Not a plan, not a hope, one date that I can say to my family when they ask whether this job is going anywhere.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"one date that I can say to my family"_   ✓ _have learned / are going to._   ? _Has anybody ever written you one?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many have ever received a closing of any kind. In most classes it is one or two out of twelve, and that count is the argument for writing them. End the cycle there rather than on a grammar point.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Written and sent, to the driver who is leaving: the night in February he came back for the second load without being asked; what went wrong, which was that we never replaced his van seat; and his last day, which is 14 March.']));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: the year-end note and the course review'));
out.push(stage('1', 'Get ready – Unit 24 quiz (answers)'));
out.push(p('**1** When it is already decided **and** arranged — there is a lease, an order, a booking, a date somebody else has agreed to.  **2** A condition and a date of knowing.  **3** _We suggest_ + **-ing**; _we would like_ + **to** + verb.  **4** _Nearly_.  **5** One arranged thing, with a date.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 In three parts: thanks, what went wrong (finished two years ago), and next year.  2 Baghdad Street on 8 June — the one arranged thing, with a signed lease, an ordered sign and an applied-for licence behind it.'));
out.push(p('**Language box – Practise (sample mediation):**  _"Read it in three parts. The first is thanks and it is specific enough to be real. The second is what went wrong, named and owned, and it finished two years ago. The third is next year, and there is exactly one arranged thing in it — 8 June, with a lease, a sign and a licence behind it. That is what you can plan on. What is not in it is drivers, and that is your question: ask him in January, with the note in your hand."_'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'The trial note says nineteen orders and that they are stopping. Are we in trouble?'],
  ['B', 'Read it in three parts. The thanks names the six Saturdays and names Fadi. The failure is a number — nineteen against thirty — and whose decision it was.'],
  ['A', 'And the third part?'],
  ['B', 'The third part is the only one about next week, and it says the Tuesday and Thursday runs continue exactly as now. That is the arranged thing, and it is the answer to your question.'],
  ['A', 'So nothing changes for me.'],
  ['B', 'Nothing in this note. And notice what is not in it: nothing about the van, which is eleven years old. If that were being replaced, this is where it would say so.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one arranged thing and the question they would ask, with its date. The question with a date is the part that turns mediation into work, and it is the part most learners leave out.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'What they thought it meant', 'The arranged thing, and what I would ask'], [
  ['Fadi', 'bad news was coming about drivers', '8 June, lease signed — I would ask in January whether a second driver is in next year\'s hopes'],
  ['Hala', 'she had not read it at all', '8 June — and I would ask her to read the last paragraph only, which is the only part that affects her week'],
], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"The note said thank you for August, that Homs was his decision and went wrong, and that one thing is arranged for next year. My colleague thought it meant bad news about drivers. The one arranged thing was Baghdad Street on 8 June, with a signed lease. I would ask him in January, with the note in my hand, whether a second driver is one of the hopes — because a new store and no new driver has an answer and it is better to know it in January than in June."']));
out.push(p('This is the **twelfth** unit of Book 2, and the last. The unwritten thing is the one the whole book has been circling since Unit 13: **what is arranged and what is hoped for are different, and almost nobody says which is which — so the person who does is believed about everything else.** It is worth saying out loud at the end of the course, because it is the sentence that holds the book together and it appears nowhere in it.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '_Going to_ plus the signed lease — arranged.'],
  ['2', 'B', '_Hope to_ — intended, not arranged.'],
  ['3', 'B', '_We would like to propose_ — asking, not doing.'],
  ['4', 'B', '_At the same time_ plus a three-week wait: day one.'],
  ['5', 'B', '_Haven\'t … yet_ — not done, and expected.'],
  ['6', 'B', '_Still 8 June_ — unchanged, said explicitly.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (33 words)'));
out.push(sample(null, ['Dear Mr Ayoub, we would like to try a weekly count of the twenty fastest lines for four Fridays. If it works, we would then count monthly. Could you say yes or no by Friday? Thank you. Hala']));
out.push(stage('6P', 'Check together'));
out.push(p('All three points present: what (a weekly count of twenty lines) · how long for (four Fridays) · a date for the answer (Friday). Thirty-three words. ⚠ The commonest fault is reasoning instead of asking: in twenty-five words the ask and the date must survive and the argument can wait for the meeting.'));
out.push(stage('7', 'Write freely – the course review, sample (≈95 words)'));
out.push(sample(null, ['I have used three things from this course outside this room. I wrote a damage report in March with the proportion in it — six of forty — and we were sent six boxes without an argument for the first time. I asked a bank for a confirmation by Thursday and got it on the Wednesday. And I stopped writing "as soon as possible", which I had written in every email for nine years. What I have not managed is the year-end note; I have drafted it twice and not sent it. Next month I am going to send it.']));
out.push(p('Read three of these aloud. A class that finishes on what three colleagues have actually done with the English finishes differently from a class that finishes on an exam paper — and the honest "what I have not managed" is the half that produces the next month\'s work.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Thank you for the Tuesday evenings. What went wrong was that I missed four of them and did not say why. What I have learned is to put the number in the first line. One arranged thing: I am going to send the year-end note on 2 December.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 24 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** the lease is signed → _**are going to** open_.  **2** no lease → _**hope to** open_.  **3** _would like **to propose**_.  **4** _suggest **starting**_.  **5** _**At** the same time_.  **6** _we **have** already signed_.  **7** _we **haven\'t** fitted … yet_.  **8** _we **are** going to open_.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Steps done', 'Not done yet', 'What changed', 'The one thing watched', 'Opening date'], [[
  'four of six', 'shelves (30th), stock (1–5 June)', 'the sign maker: three and a half weeks, so the sign arrives 6 June', 'the licence — may come after the opening', '8 June',
]], [0.9, 1.3, 1.8, 1.3, 0.8]));
out.push(note('The third gap needs the consequence, not only the change: _three and a half weeks_ alone has heard the fact and missed the point, which is the two days. Give the mark for either, and say in class which one the report was written for.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (61 words)', ['We would like to propose a weekly count of the twenty fastest lines, every Friday at four, for four weeks from 6 June. If it finds real differences, we would then count the whole store room monthly. If the four Fridays find less than 100,000 of difference, we stop and nothing is lost — nothing is bought and nobody is taken on. Could you say yes or no by 2 June?']));
out.push(box('Marking the Unit 24 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'A small first step **with a length** (2) · step two, conditional (1) · how it would stop (2) · one ask with a date (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the exit are the heart of the unit. A proposal with no way of stopping scores 5 of 7 however well written, and the reason is worth writing on the script: a proposal that cannot be stopped is one nobody dares to start.',
  '⚠ Take a mark off a first step that is still the whole thing. _We would like to deliver on Saturdays to everybody from next month_ is the fault 24.3 exists to remove, and it reads as confidence.',
  '⚠ Give nothing for _as soon as possible_ or _at your earliest convenience_ in place of the answer date. That was Unit 22\'s fault and it is the same fault here.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 24**'));
out.push(p('**1 _Going to_ for a hope.** The grammar will be right and the content will be wrong, which is the hardest kind of error to mark. Ask one question of every _going to_ in a learner\'s writing: **what is the evidence?** If the answer is a feeling, the sentence belongs in 24.2. Learners find this uncomfortable for a week and then start asking it of other people\'s writing, which is when it has been learned.'));
out.push(p('**2 The first step that is still the whole thing.** A learner who has understood 24.3 in theory will still propose the whole change and call it a trial. The test is cost: can it be stopped without losing money or embarrassing anybody? If not, it is not a first step, however it is labelled. Make them shrink one proposal three times in a row; the third version is usually the one that would be agreed.'));
out.push(p('**3 _Nearly_, and its relatives.** _Nearly · almost · more or less · just about · going well._ Each covers between an hour and a month of work and each is used by a learner who does not want to give a date. Treat them as one error with one fix: a date, said in front of somebody. By the end of the course a class can mark this for itself, and the sentence "then it is not finished" becomes a joke they use on each other — which is the best possible outcome for a correction.'));
out.push(sp());
out.push(box('The end of the Answer Key — a note for the teacher', [
  'Twenty-four units and one hundred and sixty-eight cycles. If you have taught the whole of A2, the four things this course has really taught — under the functions, the grammar and the exam practice — are these:',
  '**1 Say the number.** Two of twenty, nineteen of thirty, four of six. A number can be checked, argued with and acted on; an adjective can only be agreed with or doubted.',
  '**2 Put the date on it.** A deadline, a confirmation date, an answer date, a date of knowing. Nothing in this course has cost learners more and nothing has repaid them faster.',
  '**3 Separate what is certain from what is hoped for** — and say which is which before anybody asks. Units 13 to 24 return to this from eleven different directions.',
  '**4 Write down the thing nobody has written down.** The absence, the failure, the thing you have not seen, the step nobody measured. In almost every cycle of this book, the sentence that does the work is the one everybody already knew and nobody had put on paper.',
  'The End-of-Book Test follows. Its marking notes are in its own key, and they are stricter than this one about dates — deliberately, because that is the habit worth testing.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 24 · Answer Key');
