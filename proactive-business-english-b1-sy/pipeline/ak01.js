// Proactive Business English B1 · Syria Edition · Book 1 · Unit 1 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 1  The Account and the Person'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **What is new at B1, and it changes how you mark.** At A2 a wrong word was a mistake. At B1 a wrong word is often a **claim**: *I handle* and *I am responsible for* are two different things to say about yourself, and a learner who uses them interchangeably has not made a grammar error — they have made a statement about accountability that may not be true. Mark the claim, not only the form.',
  '⚠ **The unit\'s own subject is accountability**, and that makes 1.2 and 1.5 uncomfortable for some learners, in a way the grammar does not predict. Separating *what I do* from *what I am answerable for* means saying out loud that something is somebody else\'s — and in many workplaces nobody has ever done that. Let the role cards carry it where a learner is uneasy about their own job.',
  '⚠ **The word counts are the course\'s, not the examination\'s**, and the difference is deliberate. Stage 6 asks for **50 words or more** and stage 7 for **100 to 140**; cycle 7\'s exam task asks for **35 to 45**, because B1 Business Preliminary Writing Part 1 does. Say so to the class the first time they meet it, or they will think the exam task is a mistake.',
], C.grey, C.navy));

// ===================== 1.1 =====================
out.push(h2('1.1  Ninety seconds'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the timing is the point: most introductions run long on parts 1–3 and stop before part 5. Expect 30–60 seconds of name, title and company, and no ask.'));
out.push(p('**b**  **Belongs:** your name · your company · which site · why you are calling · what you want from this call. **Does not:** your job title on its own (it is not a job), how long you have worked there (answer it if asked, do not offer it), how you are.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because a stranger cannot tell from a title whether she orders the tea or signs the contracts — a title is not a job.  2 _I handle_ is the permanent half of the job and tells him to write down the **role**; _I am covering_ is temporary and tells him to write down her **name** and ask again in September.'));
out.push(p('**Language box – Practise (sample, five parts):**  _"Good morning, my name is Nour Mansour. I am at Sham Trading, at the Mezzeh office. I handle the paperwork for both our sites. I am calling because we are opening a freight account this month and I am collecting three quotations. I would like a quotation by Thursday, and I would like to know who I speak to after that."_ — and with part 3 as a title: _"I am the administration coordinator"_, which is shorter, grander and useless.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning, my name is Nour Mansour and I am the administration coordinator at Sham Trading.'],
  ['B', 'Stop. Coordinator of what? They have no idea whether that means you count the petty cash or you move the money.'],
  ['A', '…I bank the takings from both our sites, every day.'],
  ['B', 'Better. That is a job they can picture. Go on.'],
  ['A', 'I am calling because we opened a second store in June and the cash from it is still coming to the Mezzeh account.'],
  ['B', 'Now the part everybody leaves out. What do you want from this call?'],
  ['A', 'An appointment this week, and the name of whoever opens accounts, so that I do not explain this twice.'],
  ['B', 'Seventy seconds, and the last sentence did the work.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the five parts and ring the thin one. **Typical errors:** _I am the coordinator_ as part 3 (a title, not a job) · _I am handling the paperwork_ for the permanent job · _I work here since two years_ (needs _have worked … for_, which is Unit 4) · and the content fault, which is part 5 absent or without a date.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Part', 'Sample'], [
  ['**1 Who**', 'My name is Hala Mourad.'],
  ['**2 Where**', 'from Sham Trading, at the Mezzeh trade counter.'],
  ['**3 What I do**', 'I take counter sales and telephone orders, and I deal with complaints.'],
  ['**4 Why I am calling**', 'One of your labels has come off a batch of ours in a customer\'s store room.'],
  ['**5 What I want, with a date**', 'I would like to know what adhesive that batch used, by Thursday, and who I send the two bad labels to.'],
], [1.2, 4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My part 3 used to be *I am in customer service*. It is now *I take counter sales and telephone orders, and I deal with complaints*. The thing I most often leave out is part 5 — I say what has happened and then wait for them to offer something."', '⚠ That last sentence is the commonest self-diagnosis in the room and it is accurate. Collect the counts on the board: titles against jobs. The gap is usually two to one.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because paperwork is raised at one site and goods are delivered to the other, so a reader has to **put the site on every document** — which is what the page then asks for.  2 Nour is described by what passes through her (*orders, paperwork, queries, anything you are not sure about*); Hala is described by what she covers and when (*runs the Mezzeh counter, will answer if Nour is out*). One is a remit, the other is a fallback, and a stranger needs to know which is which.  3 It promises **an answer** the same day — and carefully **not** a solution: _even if the answer is "I do not know yet and I will tell you on Thursday"_.'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**NASSIF BROTHERS — who we are, and who you will be dealing with**',
  '**The company.** Metal boxes and shelving, made to order and in standard sizes, for about ninety trade customers in Damascus. We were founded in 1974 and have been in the industrial zone since 1996.',
  '**One site, two gates.** The workshop gate takes lorries; the office gate is a green door on the street and takes nothing larger than a van. If you are delivering steel, you are at the workshop gate, whatever the invoice says.',
  '**Who you will be dealing with.** Bassel Nassif handles orders, prices and anything you are not sure about. The workshop foreman is answerable for what is counted in at the gate.',
  '**One thing we ask of you.** Telephone before a lorry leaves for us. Every failed delivery we have ever had arrived unannounced at the wrong gate.',
  '**And one thing we will do for you.** Any lorry that telephones first is unloaded within the hour, or we tell you why on the telephone while it is still on the road.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The sites, and how they differ', '✓ – two gates, and what each takes'],
  ['People described by what passes through them', '✓'],
  ['Exactly one thing asked, with what it has cost', '✓ – every failed delivery'],
  ['A promise that holds on a bad day', '✓ – unloaded within the hour **or** told why'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says ask for exactly one thing, with what it has cost. Yours asks for one thing and gives the cost, so that is done. The line I would look at is *the workshop foreman* — the box also says name people **and** roles, and that is a role with no name on it. Who is it this month?"'));
out.push(note('⚠ Note what the feedback does not do: it does not supply the name, and it does not rewrite the line. Band 3 is quote, question, stop. Teachers find this harder than learners do — the instinct to fix the sentence is strong and it takes the learning away.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the **one thing we ask of you** lines aloud and ask the class which they would actually do. The winner is always the one with a cost attached; a bare request reads as a preference.'));
out.push(stage('7', 'Write freely – sample (≈132 words)'));
out.push(sample(null, ['Two years ago I tried to pay a water bill for the store and could not find out who to pay it to. I went to the municipality office, where a man sent me to a window on the first floor; the window sent me to a different building; that building said the account was in the landlord\'s name and I would have to bring him. The landlord lives in Suwayda. In the end a clerk at the second window — not the one I had been sent to, the one next to it — told me that any bill in a landlord\'s name can be paid by the tenant with a copy of the lease, and that it says so on a notice upstairs. I had walked past the notice four times. One line on the door of the first office would have saved me three mornings: *bills in a landlord\'s name — second floor, bring your lease.*']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I had walked past the notice four times"_   ✓ _present simple for the permanent arrangement, continuous for what was happening._   ? _Did the first man know, and not say, or not know?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Add the room\'s totals on the board — people spoken to, mornings lost. The figure is usually absurd and it is the whole argument for the half-page in stage 6. ⚠ Ask one more question: in how many of these stories did the person who finally helped **not** have the job of helping?'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I used my ninety seconds on the bank. Parts 1 to 4 went as written. What I had not planned for was his first question back: "Which site is the registered address?" I did not know, and the answer turned out to be Mezzeh, which is why the Baghdad Street takings had been queried twice.']));

// ===================== 1.2 =====================
out.push(pb());
out.push(h2('1.2  What I do and what I am answerable for'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The two lists overlap less than learners expect, and the discovery is the cycle. Expect somebody to find an item on the second list that is on nobody\'s first list at all.'));
out.push(p('**b**  _I am responsible for the invoices._ The others describe work; only that one says you would be asked about it. ⚠ _The invoices come to me_ is a trap — it describes arrival, not accountability, and it is the sentence most learners would have chosen.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 One question: **who gets asked when it goes wrong?** — not who does the work.  2 Because a stranger who telephones on a Saturday and is told "she is at the other site" learns that the company is disorganised; one line prevents it.'));
out.push(p('**Language box – Practise (samples):**  1 _I handle counter sales, telephone orders and complaints._  2 _I am responsible for complaints — if one is still open after a fortnight, it is me somebody comes to._  3 _I only help with chasing payment; that is sales._  4 _I report to Mr Ayoub._  5 _I cover the Baghdad Street counter on Saturdays, until the new assistant starts._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'My three lines: Nadia Sayegh, accounts, Sunday to Thursday, eight until four.'],
  ['B', 'That is your title and your hours. What passes through you?'],
  ['A', 'Invoices. The ledger. Payment queries, mostly.'],
  ['B', 'Good. Now — of those three, which would you be asked about if it went wrong?'],
  ['A', 'All of them. Everybody telephones me about payment.'],
  ['B', 'Think about the Haffar account. Who did Mr Ayoub ask when it was four months late?'],
  ['A', 'Bassel. Because chasing is sales.'],
  ['B', 'So you **handle** payment queries and you are not **answerable** for the money arriving. Two sentences, and the second one has been doing you harm for a year.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners build the two columns. **Typical errors:** _I am responsible of_ · _I am reporting to Mr Ayoub_ for the permanent reporting line · _I am responsible for to answer the telephone_ · and the content fault, which is putting everything in the *answerable* column because it feels modest to claim less and loyal to claim more.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['I handle', 'I am answerable for', 'I only help with', 'Dotted lines'], [
  ['counter sales', 'complaints', 'chasing payment', 'Baghdad Street on Saturdays'],
  ['telephone orders', 'the counter being open at eight', 'stock counts', 'the mobile after five, if I answer it'],
  ['complaints', '—', 'the window display', 'holiday cover for Nour in August'],
], [1.2, 1.3, 1.2, 1.2]));
out.push(note('⚠ The dash in the second column is a real answer and should be left in. A row where a learner handles something and is answerable for nothing is worth discussing: either the accountability sits somewhere they have never been told, or it sits nowhere, which is 1.2\'s stage 7.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I handle counter sales, telephone orders and complaints. I am answerable for complaints. The one my colleague moved was *stock counts* — I had it as something I help with and she says the Saturday count is mine, and she is right, because nobody else is here."']));
out.push(stage('5', 'Read'));
out.push(p('1 It says Hala is at Baghdad Street on Saturdays **and** that the Mezzeh counter is therefore Nour. The line exists because a dotted line written from one side only produces a caller being told *she is not here* and nothing else.  2 **What was ordered.** It is worth printing because he has twice been blamed for a picking list, and half a line on a page is cheaper than the argument.  3 He has no *handles* line at all: his entry is accountability only — over 500,000, and anything anybody has said no to twice. ⚠ That second half is the most useful thing on the page and nobody would think to ask for it.'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**NASSIF BROTHERS — WHO TO ASK FOR, AND WHAT FOR**',
  '**Bassel Nassif · partner · office gate · 011 ___ ____**',
  'Handles: orders, prices, drawings, anything you are not sure about. Answerable for: the price being the price, and the date being the date. Reports to: nobody, which is why a refusal from him is final. Dotted line: he is in Homs on Tuesdays and the office is then Rasha.',
  '**Rasha Nassif · office · 8 a.m. to 3 p.m.**',
  'Handles: invoices, the day book, the telephone. Answerable for: the invoice matching the gate sheet. Only helps with: prices — she will read you the list and will not vary it.',
  '**The workshop foreman · workshop gate**',
  'Handles: steel in, work out, the gate sheet. Answerable for: what was counted in against the delivery note, which he signs by name. Not answerable for: what was ordered, or when it was promised.',
  '⚠ The third line of each entry is the one worth printing. The first two are on our letterhead and in our catalogue; the third is the line nobody can guess and everybody needs on a bad morning.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three lines for each person', '✓'],
  ['An _answerable for_ line for everybody', '✓'],
  ['At least one _not answerable for_', '✓ – the foreman, twice over'],
  ['Dotted lines, written from both sides', '✓ – Tuesdays, and who the office is then'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says the dotted lines should be reciprocal, and your Tuesday line does both halves. The one I would ask about is Rasha\'s *only helps with prices* — the box says print the negative where it has cost somebody. Has it? Because if somebody once talked her into a discount, that half-line is the most useful on the page."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask whether the class could now ring the right person first time. ⚠ Then ask the harder question: whose telephone would ring if nothing on the page covered it? The answer is always the same person, and that person is usually not on the page as being answerable for anything.'));
out.push(stage('7', 'Write freely – sample (≈136 words)'));
out.push(sample(null, ['The thing nobody owns at our place is the store room key. There is one key, it lives on a nail in the office, and everybody uses it. When it goes missing — four or five times a year — the morning stops. Somebody drives to Jaramana to the foreman\'s house, or we take the hinges off, which we have done twice. Afterwards everybody says the same thing, which is that we should have two keys, and nobody has ever cut a second one, because cutting a key is not anybody\'s job. It is not a big thing. It costs us perhaps half a day a year and a great deal of temper, and it belongs to the gap between the office and the workshop. If I had to give it to somebody I would give it to whoever opens the gate in the morning, because they are the person who finds out.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"cutting a key is not anybody\'s job"_   ✓ _handle / be answerable for used correctly throughout._   ? _Has anybody ever said this at a meeting?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Nearly every workplace has one, and it is nearly always the same **kind** of thing: a small recurring task that sits between two people\'s jobs. Say that out loud once the three texts have been read; the recognition in the room is the point of the cycle.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I showed my three lines to Mr Ayoub. He moved one thing: I had *the counter being open at eight* as mine and he says it is his, because if the counter is shut at eight the customer telephones him and not me. He is right, and I had been worrying about it for a year unnecessarily.']));

// ===================== 1.3 =====================
out.push(pb());
out.push(h2('1.3  Four questions and a fifth'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect price to come first and the three questions that actually prevent trouble — the deputy, the notice, the signature — not to be mentioned.'));
out.push(p('**b**  Most useful: _Who do I speak to about a problem?_ then _What is your lead time?_ then _How do you want the order?_ then _Who signs?_ — and _What are your prices?_ last, because it is the one question that is always answered anyway, in writing, unasked.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because it costs nothing on a first call, the answer is always specific, and it buys somebody else\'s experience for free — and because after something has gone wrong the same conversation is far more expensive.  2 That nine failures in ten are addresses; that he tells every new customer so; and that about a third of them act on it.'));
out.push(p('**Language box – Practise (sample answers written in their words):**  _"Me, or Samira if I am out — never the driver." · "By four the day before; after four it is a favour." · "In writing; telephone bookings are the ones that go wrong." · "The driver signs and does not check the count." · "Addresses, nine times out of ten."_ ⚠ All five are quotations. A learner who paraphrases them has thrown away the only thing the call produced.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Four things before we place anything, if I may. Who do I speak to about a proof once it is sent?'],
  ['B', 'Me, or my son if I am at the machine. Not the boy on the counter.'],
  ['A', 'Second: what notice do you need for a run of labels?'],
  ['B', 'Two working days from approval. From approval, not from the order.'],
  ['A', 'Third: how do you want the approval — telephone, or in writing?'],
  ['B', 'In writing, with the date on it. Nobody ever does it and then they argue about the colour.'],
  ['A', 'Fourth: who signs for the finished run, and does that person check it?'],
  ['B', 'Whoever collects. They do not check. They look at the top one.'],
  ['A', 'And one more. With a new customer like us, what goes wrong most often in the first two months?'],
  ['B', 'Colour. Approved by telephone, then disputed. Nine times out of ten.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the answer to question 5 only. **Typical errors:** _Could you tell me who does sign?_ (the indirect question keeps normal word order: _who signs_) · _I was wondering that…_ (needs _whether_ or _if_) · _What notice do you need me?_ · and the content fault, which is asking question 5 and then not writing the answer down.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['#', 'My question', 'The answer, in their words'], [
  ['1', 'Who do I speak to about a delivery already booked, and who if you are out?', '"Me, or the yard. Not the driver."'],
  ['2', 'What notice do you need?', '"Day before, by midday."'],
  ['3', 'Telephone or in writing?', '"Either, but put the order number on it."'],
  ['4', 'Who signs, and do they check?', '"Our man signs. He counts pallets, not boxes."'],
  ['**5**', 'What goes wrong most often with a new customer?', '"Boxes. We count pallets and the customer counts boxes, and the two never agree in the first month."'],
], [0.4, 2, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked our pallet haulier. The answer to the fifth was that they count pallets and we count boxes, which I knew and had never written down, and which is exactly why the March argument happened."', '⚠ Collect the answers to question 5 on the board and count them: how many are about **an address, a name, a date or a unit of measurement**, and how many about price? In every class it is the first four, and that is the finding — the thing that goes wrong is never the thing that gets asked about four times.']));
out.push(stage('5', 'Read'));
out.push(p('1 Three times — *he will agree to anything*, *he does not check the count and he will tell you he has*, and the addresses figure. It bothers because a paraphrase of those sentences is worth nothing in three months and the quotation is still evidence.  2 A **standing instruction**: SITE IN CAPITALS ON EVERY BOOKING. ⚠ A note that records an answer and changes no practice was a pleasant telephone call.  3 To be honest about the gap, and to make the second call happen — it names the question (who pays for a waiting hour) and gives it a day.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**NEW ACCOUNT — Tannous Labels. What I was told, 2 October, by Mr Tannous senior.**',
  '**Who to speak to.** Mr Tannous, or his son if he is at the machine. ⚠ **Not the counter** — his words: *the boy on the counter will take a message and lose it.*',
  '**Notice.** Two working days **from approval**, not from the order. So an order placed Sunday and approved Tuesday is ready Thursday, not Tuesday.',
  '**How to approve.** In writing, with the date on it. His words: *nobody ever does it and then they argue about the colour.*',
  '**Who signs.** Whoever collects signs, and looks at the top one only. So we check the run ourselves, at the counter, before it is carried out.',
  '**What goes wrong most often (I asked).** Colour, approved by telephone and then disputed. Nine times out of ten.',
  '**So, one standing instruction.** **NO LABEL RUN IS APPROVED BY TELEPHONE.** Approval goes by email with the proof number and the date, or it has not happened.',
  '**What I did not ask and should have.** Whether a reprint for their error is free, and who decides whose error it was. I will ask on Monday and add it here.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who told you, and when', '✓ – 2 October, Mr Tannous senior'],
  ['Their own words, where the words matter', '✓ – three quotations'],
  ['One standing instruction', '✓'],
  ['What was not asked, with a date', '✓ – Monday'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says turn an answer into an instruction, and yours does — no approval by telephone. The thing I would ask about is the notice line: *two working days from approval* is their rule, and your instruction does not mention it. Is anybody here going to work out that an order approved on Tuesday is not ready on Tuesday?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the standing instructions aloud and ask which would survive a busy Thursday. The ones that survive are short, in capitals, and about a single document; the ones that do not are sentences beginning *we should always try to*.'));
out.push(stage('7', 'Write freely – sample (≈130 words)'));
out.push(sample(null, ['I found out after eleven months that our wrap supplier gives a two per cent discount for payment within seven days. It is on the back of the invoice, in the terms, in grey type. Nobody had read it, including me, and we had been paying at thirty days because that is what we had always done. Eleven months of two per cent is a figure I would rather not write down. The person who told me was their own driver, who said it conversationally while he was waiting for a signature, and who assumed we had been taking it all along. Nobody at their office had ever mentioned it, and I do not blame them: it is on the invoice, and we are the people who did not read our own paperwork. If I had asked question five in the first week, he would have said it then.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"their own driver, conversationally, while he was waiting for a signature"_   ✓ _question forms, direct and indirect._   ? _Who else in your company could have read it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In almost every case somebody knew. Ask whether anybody had ever been asked — the answer is almost never — and then ask who in the room has read the back of an invoice they receive every month.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I asked the haulier question five. His answer, in his words: "Weekends. People book a Thursday collection and the goods are there on Saturday and nobody told us the yard is shut. Then we charge for the failed call and everybody is angry on Monday."']));

// ===================== 1.4 =====================
out.push(pb());
out.push(h2('1.4  Roles, not people'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Removing the name is harder than it sounds and the second version is nearly always shorter and better.'));
out.push(p('**b**  The third — _Ask Hala, or whoever is on the counter_ — because it carries both: the role, so the page is still true in a year, and the name, so the reader does not have to address a human being as *whoever*.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 In a year two of the names will be doing something else and the reader will still be telephoning them.  2 Because the role makes the page last and the name makes it usable today; either alone looks complete and is not.'));
out.push(p('**Language box – Practise (samples):**  1 _Collection queries go to whoever is on the counter — Hala at the moment._  2 _A count query goes to the warehouse; that is Abu Yasser._  3 _Anything about the account goes to the coordinator, which is Nour._  4 _Anything over 500,000 goes to the office manager — Mr Ayoub._  5 _On Saturdays the counter is the coordinator, because the counter staff are at the other site._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'So if I have a query about an invoice, I telephone — who?'],
  ['A', 'Me. Everything comes to me.'],
  ['B', 'I have written one name and I am worse off than with four. What happens the week you are away?'],
  ['A', 'It waits.'],
  ['B', 'For a customer that is the same as *nobody deals with it*. Tell me the jobs.'],
  ['A', '…There is only one job. I am the office.'],
  ['B', 'Then write that, and write what happens in August: *the office — one person — and in her absence anything urgent goes to the owner on his mobile.* That is two lines and it is true.'],
  ['A', 'He will not thank me for putting his mobile on a page.'],
  ['B', 'He will not thank you for the alternative either, which is a customer who telephoned for a fortnight and then stopped.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners build the role column and the name column, then cross out any name that would be wrong in a year. **Typical errors:** _whoever are on the counter_ (singular verb) · _she handle the counter_ — the third-person -s, which is the commonest error at this level and which nobody hears in their own speech · _a count query go to the warehouse_.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The query', 'The role it goes to', 'The name today', 'Right in a year?'], [
  ['a booking or a change', 'the coordinator, in writing', 'Nour', 'probably'],
  ['a query on a booked collection', 'whoever is on the counter', 'Hala / Nour on Sat.', 'no — counter staff change'],
  ['a count or a quantity', 'the warehouse', 'Abu Yasser', 'yes, and after him the role remains'],
  ['an invoice', 'accounts', 'Nadia', 'probably'],
], [1.2, 1.4, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"A collection query goes to whoever is on the counter, which is Hala at the moment. The one most likely to change is the counter, because it changes every Saturday already."', '⚠ Count the people in the room who are the **only** route for something. Each one is a week of trouble waiting for a holiday, and most of them have never been counted before.']));
out.push(stage('5', 'Read'));
out.push(p('1 The **middle** column — the role — because it will be true next year and the right-hand column may not.  2 For a query the reader cannot classify; and the page claims that using it has never once annoyed anybody. ⚠ That row prevents the worst outcome, which is not a misrouted query but a query nobody sent.  3 Because they change at different speeds: routing changes every holiday, accountability about once a year, and a sheet that mixes them goes out of date as a whole the first time either moves.'));
out.push(stage('6', 'Write with help – sample (112 words)'));
out.push(sample(null, [
  '**NASSIF BROTHERS — WHERE TO SEND WHAT**',
  'a drawing or a specification → the office, in writing → Rasha',
  'a price, or a variation to one → the partner → Bassel (Homs on Tuesdays)',
  'a delivery date → the office → Rasha',
  'steel arriving, or a delivery note → the workshop gate → the foreman',
  'an invoice or a payment → the office → Rasha',
  '**anything you are not sure about** → the office → Rasha',
  '**Two notes.** The middle column is the one to keep, because the names on the right change — Rasha is in the office five days a week now and was three until June. And the last row is not a joke: we would far rather answer a question that is not ours than find out in six weeks that nobody asked it.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Roles in the middle column, names on the right', '✓'],
  ['A row for anything the reader is unsure about', '✓'],
  ['Third-person -s correct throughout', '✓'],
  ['Routing kept separate from accountability', '✓ – this page says nothing about blame'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says the role goes in the middle so the page lasts. Four of your six middle cells say *the office*, which is one person — is that a role or is it Rasha\'s name with a hat on?"'));
out.push(note('⚠ That is the right question and the answer may well be "it is Rasha with a hat on", which is a true description of a small firm. Where that is so, the page is honest and the finding belongs in stage 7, not in a rewrite.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Have the class read their middle column with the names covered. A page that is unusable without the names has no middle column, whatever is written in it.'));
out.push(stage('7', 'Write freely – sample (≈128 words)'));
out.push(sample(null, ['I once telephoned a tile company to ask whether a batch was still available and was passed to five people. The first two were helpful and did not know. The third asked me to hold and never came back, so I telephoned again. The fourth told me the man I needed was at lunch and would be back at one; I rang at one and he was at a site. The fifth, who answered by accident, looked in the yard and told me in forty seconds. Nobody was rude. Every one of them was pleasant, and the pleasantness made it worse, because I could not even be properly annoyed. What the company thought I was being told was *we are busy*. What I was actually being told was *we do not know who owns this question*.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the pleasantness made it worse"_   ✓ _roles as well as names._   ? _Did the fifth person have the job, or just the yard key?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Separate rudeness from disorganisation on the board. Disorganisation is far commoner and reads to a customer **exactly like** rudeness, which is the sentence to leave the class with.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I wrote our routing page in roles, covered the names and gave it to the new driver. He got four of the six right. The two he could not place were *a variation to a price* and *anything you are not sure about* — he said he would never dare use the second one, which is worth knowing.']));

// ===================== 1.5 =====================
out.push(pb());
out.push(h2('1.5  That is not mine — and here is what I will do'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the instruction to listen to yourself is the whole exercise. Most people produce part 1 and stop, and hear it when they say it aloud.'));
out.push(p('**b**  The third. The first two are both true and both close the conversation; only the third contains a name, a time and a thing the speaker will do.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It is not mine (the useless part) · the **name**, and when they are there · **what I am going to do anyway**, with a time.  2 Because a transfer can fail, and then she has made it five people; a call back cannot fail, because it is hers.'));
out.push(p('**Language box – Practise (samples):**  1 _That is not mine; invoices are accounts — Nadia Sayegh, here until four. I will put the number in front of her and ring you before twelve._  2 _Delivery dates are the warehouse. Abu Yasser is there from seven. I will ask him when he comes off the gate and telephone you by ten._  3 _Prices are sales, which is Bassel, and he is in Homs today. I will reach him on his mobile and come back to you before five, with or without a figure._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'There is a skip outside your door and it has been there a week. It is blocking the pavement.'],
  ['B', 'I am sorry. That should not have happened, and it is not going to happen again on this call.'],
  ['A', 'So is it yours?'],
  ['B', 'No. It is not ours and it is not the municipality\'s; it belongs to the builders doing the flat above. That is the first part of my answer and it is the useless part.'],
  ['A', 'Go on.'],
  ['B', 'The second part is the name: the foreman is Mr Shaheen and he is on site mornings. The third is what I am going to do: I am going to speak to him myself this morning and telephone you before two to say what he said.'],
  ['A', 'It is not really your job.'],
  ['B', 'It is my pavement for eleven hours a day, and you have telephoned the only door that is open.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three parts and say which one the caller will remember in a week. **Typical errors:** _It is not my work_ for *not my job* · _I will to telephone you_ · _I am going to find out and I telephone you_ · and the content fault, which is a part 3 consisting of *I will pass it on* — that is part 2 with nothing after it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['They ask about', '1 Not mine', '2 The name and when', '3 What I will do, by when'], [
  ['an invoice', 'accounts', 'Nadia, until four', 'put the number in front of her; ring back before twelve'],
  ['a delivery date', 'the warehouse', 'Abu Yasser, from seven', 'ask him off the gate; ring by ten'],
  ['a price variation', 'sales', 'Bassel, Homs on Tuesdays', 'reach his mobile; come back before five either way'],
  ['a shutter under warranty', 'the fitter, not us', 'Mr Haddad, the number is on the invoice', 'telephone the fitter myself and copy you in'],
], [1.1, 1.1, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"People telephone me about invoices, which are accounts. I would say: that is not mine, invoices are Nadia and she is here until four — and I will put the number in front of her and ring you before twelve."', '⚠ Write on the board every part 3 that is only *I will pass it on*. In most rooms it is half of them, and the half is the lesson.']));
out.push(stage('5', 'Read'));
out.push(p('1 *Invoice queries are accounts … not me* — and it is there because the reader needs to know where the thing sits; the letter simply refuses to pretend that telling them is a service.  2 A tray is a queue and may be a week; *in front of her* is an action with a time in it. ⚠ A reader who has been passed around does not believe *I have passed it on*; they believe a described physical act.  3 **The four transfers.** The invoice was not hers; the way the telephone is answered was, and she takes it and says what she has done about it that afternoon.'));
out.push(stage('6', 'Write with help – sample (134 words)'));
out.push(sample(null, [
  '**Subject:** Shutter motor — not ours, but I have it in hand; answer by Thursday',
  'Dear Mr Haffar,',
  'Thank you for telephoning, and I am sorry you were told twice that there was nothing we could do.',
  '**Whose it is.** The motor was fitted by Haddad Shutters and the twelve-month warranty is theirs, not ours. We sold you the shutter; we did not fit it. That is the least useful sentence in this email.',
  '**What I have done with it.** I have found the fitting invoice — 2 March, so you are nine months in and inside the warranty — and I have written the serial number and the fault on a slip for Mr Haddad.',
  '**What I will do.** I will telephone him this afternoon and write to you by Thursday with a date for his visit, or with the reason there is not one.',
  '**What you should do if I do not.** Telephone me and say that I said Thursday. I would rather be embarrassed than have you waiting.',
  '**And one thing that is ours.** You were told twice that nothing could be done, and that is not the warranty, that is us not looking at the file. The file took four minutes.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose it is, named, and admitted to be the dull part', '✓'],
  ['An action already taken, described physically', '✓ – the invoice found, the slip written'],
  ['A time, and what happens either way', '✓ – Thursday, date or reason'],
  ['One thing taken as the writer\'s own', '✓ – *the file took four minutes*'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says find the part that genuinely is yours and take it, and your last paragraph does it as plainly as it can be done. The sentence I would look at is *we sold you the shutter; we did not fit it* — true, and it is sitting in the paragraph you yourself called useless. Does it belong there, or is it doing something else?"'));
out.push(note('⚠ That is a real editorial question and worth modelling aloud. A disclaimer placed inside the paragraph you have just dismissed is a disclaimer you are hoping will not be noticed.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the last paragraphs — the thing each writer took. Ask which the class believes. The believable ones name a specific failure with a cost or a duration attached; the others say *we could have communicated better*.'));
out.push(stage('7', 'Write freely – sample (≈134 words)'));
out.push(sample(null, ['I spent a morning last year trying to get a replacement part for a generator. The first person said parts were the workshop. The workshop said that model was discontinued and I should try the importer. The importer said they only supply dealers and gave me the name of a dealer who had closed. I telephoned the first number again and a different person told me, in about a minute, that the part was on a shelf in their own store room and had been all along. Nobody lied to me. Everybody answered the question I had asked them, and nobody asked what I was actually trying to do. The sentence that would have ended it at the first person is: *what is it for, and shall I look while you hold?* I have used it myself perhaps forty times since.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"Everybody answered the question I had asked them"_   ✓ _the three parts._   ? _Did anybody ever ask what you were trying to do?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts in which the caller eventually gave up. Those are the ones a company never finds out about — no complaint, no claim, no second order — and they are the reason this cycle is in Unit 1 rather than in Unit 19.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I used all three parts on a call about a ledger query that was not mine. The customer said, in a surprised voice, "You are going to telephone me back?" — and then gave me three more pieces of information I had not asked for, because he had decided I was going to use them.']));

// ===================== 1.6 =====================
out.push(pb());
out.push(h2('1.6  Keeping it going'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Everybody has one of these and the missing question is usually about time — a cut-off, a window, an out-of-hours number.'));
out.push(p('**b**  All four work, and they do different jobs: the echo gets the qualification, the widening question gets the exception, *while I have you* buys one extra, and _Really?_ buys nothing — it is interest without a question in it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Repeating the fact back gets you the **qualification** — *it is the booked time; the window is eleven to one, if I am honest with you* — which nobody volunteers unless you say the number back.  2 Exactly one extra question, at no social cost; here, the four o\'clock cut-off and then the mobile number.'));
out.push(p('**Language box – Practise (samples):**  **echo** — _Tuesday morning. So Tuesday morning is the booking, not the arrival._  **widening** — _Is that the same in Ramadan?_  **while I have you** — _And while I have you — who do I ring if he does not come?_  **honest reason** — _I am putting this on a card by the telephone and I would rather not put a wrong number on a wall._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning — Nour Mansour, Sham Trading. I am telephoning to confirm the engineer on Tuesday morning.'],
  ['B', 'Tuesday morning, yes. It is in the book.'],
  ['A', 'Thank you. So Tuesday morning is the booking, not the arrival time.'],
  ['B', 'It is the booking. He could be with you at seven or at one. Seven, usually, if you are first.'],
  ['A', 'That is useful. Is there a way of being first?'],
  ['B', 'Ask for first call when you book. Nobody does, and then everybody complains about one o\'clock.'],
  ['A', 'And while I have you — if he does not come at all, who do I telephone?'],
  ['B', 'Him. Not us. I will give you his mobile; the office cannot find him any better than you can.'],
  ['A', 'Thank you. That is the thing I did not know I needed.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write down what the caller got that they had not telephoned for. There is always something. **Typical errors:** _Is that the same of both sites?_ (needs *for*) · _While I have you, I want three things_ — which is the move used as a list, and it stops working · and the echo delivered flat, which reads as disbelief and makes the other person defend the figure instead of qualifying it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The call', 'The echo', 'The widening question', 'While I have you —'], [
  ['confirm a collection', 'So eleven is booked, not the window.', 'Is it the same in the afternoon?', 'what is the cut-off for a change?'],
  ['confirm a price', 'So that is 1,200 delivered.', 'Delivered to both sites, or only Mezzeh?', 'how long is it held for?'],
  ['confirm a repair visit', 'So Tuesday is the booking.', 'Is there a way of being first?', 'what is the engineer\'s own number?'],
], [1, 1.3, 1.5, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am telephoning the printer to confirm the run. My echo is *so Thursday is from approval, not from today*. My one extra question is whether a reprint for their error is free — because otherwise I telephone again the first time it happens, and that is the worst day to ask."']));
out.push(stage('5', 'Read'));
out.push(p('1 **Three** — booking by email, the cut-off and the signature were in the paperwork or the first call; the other four were not.  2 The real window and the mobile number, and both were **volunteered** after an echo and a widening question, not asked for.  3 Because a card in ink is a card nobody corrects, and an uncorrected card is worse than none at all, since it is trusted.'));
out.push(stage('6', 'Write with help – sample (108 words)'));
out.push(sample(null, [
  '**TANNOUS LABELS — the card by the telephone**',
  '**Book by** email, with the proof number. **No approval by telephone, ever.**',
  '**Cut-off** two working days from approval — not from the order. Approved Tuesday = ready Thursday.',
  '**The real window** "ready Thursday" = ready Thursday afternoon, collect Friday morning.',
  '**Ask for** Mr Tannous, or his son. Never the counter.',
  '**Out of hours** no mobile given, and he does not want one asked for. The machine is off at six.',
  '**Every document must say** the proof number and the date of approval.',
  '**Why this card exists.** Four of these six lines were not in the quotation. The Friday line was volunteered, not asked for — I echoed *ready Thursday* and he said "ready Thursday, collect Friday, everybody gets that wrong."',
  '_Pencil. Checked 2 October._',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Seven lines or fewer', '✓ – six'],
  ['The real figure beside the official one', '✓ – ready Thursday / collect Friday'],
  ['Out of hours, and who never to ask', '✓ – and an honest "no number"'],
  ['Where the lines came from, and a date', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says print the real figure beside the official one, and the Friday line does it. The one I would ask about is the out-of-hours line — you have written that he does not want to be asked for a mobile. Does the card need to say what we do at seven in the evening, then?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask which line each student would steal for their own workplace. The answer is almost always an out-of-hours number or a real window — the two things no company prints and every customer needs.'));
out.push(stage('7', 'Write freely – sample (≈132 words)'));
out.push(sample(null, ['The most useful thing I know about the customs broker we use is that he reads his messages at half past six in the morning and not again until the afternoon. He told me that himself, in passing, while we were waiting for a stamp. I had been telephoning him at ten and wondering why he was always on the other line. Now I send him anything important before seven and he answers it before eight, and I have stopped telephoning at ten altogether. Nobody at his office would ever tell you that, and it is not in any email signature. If I did not know it, every urgent thing we send him would take a day longer than it does, which over a year is a figure I cannot calculate and would rather not. It is written on a card now, in pencil.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"he reads his messages at half past six and not again until the afternoon"_   ✓ _the echo and the widening question._   ? _Is it written down anywhere other than in your head?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many of the room\'s facts are written down anywhere. Nearly none — and every one of them leaves the company when the person does. ⚠ That is the argument for the card, and it is a stronger argument than anything in the Writer\'s box.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['My card has six lines. The one that came from an echo is the delivery window: the order form says "within 48 hours" and when I said that back to him he said "forty-eight working hours, so a Thursday order is Monday." Nothing in writing says that anywhere.']));

// ===================== 1.7 =====================
out.push(pb());
out.push(h2('1.7  Review & Mediate: who is on this account?'));
out.push(stage('1', 'Get ready – Unit 1 quiz (answers)'));
out.push(p('**1** Who gets asked when it goes wrong — not who does the work.  **2** What you want from this call, with a date; it is missing because the other four parts feel like a complete introduction.  **3** *What goes wrong most often with a new customer like us?* Nobody asks it because it sounds like inviting bad news, and it is the only question that buys somebody else\'s experience.  **4** It is not mine · the name and when they are there · what I will do anyway, with a time.  **5** The **qualification** — the difference between what was said and what is actually true.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 The **role** — the part that lasts; the names are in pencil because in a year two of them will be wrong.  2 There is none, and that is the finding: nothing from the freight agent should reach Fadi first, and in practice their drivers ask him things all day, so the page needs a row it does not have.'));
out.push(p('**Language box – Practise (sample mediation):**  _"You are on it, but as a job rather than a name — read the warehouse row. Now tell me what they actually ask you. They ask you where to back up and whether we have signed? Then that is a fault on the page and not in your reading: it needs a row saying *a driver at the gate with a question → the warehouse*. Write it on the sheet and I will put it on properly. And the names are in pencil — the middle column is the part that lasts."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'I am on this page for invoices. I am telephoned all day about chasing payment, which is not mine at all.'],
  ['A', 'Then the page has a route it should not have. Who is telephoning you — customers, or us?'],
  ['B', 'Customers. They have my number from the invoice.'],
  ['A', 'So the invoice is the page, not this one. If your number is on every invoice, every payment conversation comes to you whatever any routing page says.'],
  ['B', 'I had not thought of the invoice as a routing page.'],
  ['A', 'It is the one with the widest circulation in the company. What would you rather it said?'],
  ['B', 'Queries on this invoice: accounts. Payment arrangements: sales, and a different number.'],
  ['A', 'Then that is the correction, and it is to the invoice template, not to this sheet. I will take it to Mr Ayoub with your name on it.'],
]));
out.push(note('⚠ This is the better of the two role cards and worth putting in front of the whole class. The missing row turned out not to be a row at all: the real routing document was the invoice, which nobody thinks of as one. Ask the class which document in their own workplace has the widest circulation — it is rarely the one anybody maintains.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the row that was missing and say whether it is a route that should exist or one that should be closed. Both are findings, and the second kind is the rarer and more valuable.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'What they said about it', 'The row that was missing or wrong'], [
  ['the driver', '"I am not on it"', 'a driver at the gate with a question → the warehouse'],
  ['the new counter assistant', '"what do I do with a complaint on a Saturday?"', 'Saturday: a complaint → the coordinator, on the mobile'],
], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"The page said that a collection query goes to whoever is on the counter. My colleague could not find himself on it at all. What he actually gets asked, all day, is where to back the lorry up and whether we have signed — so the missing row is *a driver at the gate with a question → the warehouse → Abu Yasser*. He wrote it on the sheet himself."']));
out.push(p('This is the **first** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a page of names tells a stranger who to ask for and goes out of date; a page of roles lasts and cannot be used; and almost nobody writes both, because each half looks complete on its own.** It is worth saying out loud at the end of the unit, because every document in Unit 1 — the who-we-are page, the contact page, the routing page, the card — is an attempt at the same problem from a different side.'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 1)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'B', 'B', 'B', 'B', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Six B answers. That is deliberate for one teaching reason and is wrong as an examination: Part 1 of the real paper distributes its keys. Point it out to the class, say why it is like that here — every one of these notices turns on a qualification rather than on a fact — and tell them the Mid-Book Test redistributes properly. A class that notices the pattern before you say it has read well.'));
out.push(p('**Why each is B.** **1** *cannot be guaranteed* ≠ *not taken*.  **2** *we will try* is not a guarantee and not a refusal.  **3** *anything you are not sure about* is the route for not knowing the route.  **4** a signature that follows a count is evidence of the count — which is Unit 5\'s procedure and Unit 9\'s evidence.  **5** booked eleven, window eleven to one, so eleven is the **earliest**.  **6** *over 500,000* says nothing about what is under it, and the inference is the question.'));
out.push(stage('6', 'Write with help – exam sample (41 words)'));
out.push(sample(null, ['From Monday all freight bookings go to Jaber Freight by email, not by telephone. Please put the site in capitals — MEZZEH or BAGHDAD STREET — and the order number on every booking. Changes must reach them by 4 p.m. the day before.']));
out.push(stage('6P', 'Check together'));
out.push(p('All three points present: what has changed (email, not telephone) · what the reader must now do (site in capitals, order number) · from when (Monday, with the 4 p.m. cut-off). Forty-one words, inside the band. ⚠ The commonest fault is a greeting and a reason: *Dear colleagues, as you know we have had some difficulties with…* spends eighteen of the forty words before the change appears.'));
out.push(stage('7', 'Write freely – sample (≈126 words)'));
out.push(sample(null, [
  '**Hala Mourad · customer service · Mezzeh counter · 8 a.m. to 4 p.m.**',
  'Handles: counter sales, telephone orders, complaints. Answerable for: complaints — if one is open after a fortnight, it is me. Only helps with: chasing payment.',
  'The item I think is in the wrong column is the Saturday stock count. I have it under *only helps with*, because the count is the warehouse\'s and always has been; but on a Saturday the warehouse is shut and the count is done by me, alone, from the shelf. If the figure is wrong on Monday nobody asks the warehouse, they ask me — which by the test in 1.2 means I am answerable for it, and I have never agreed to that or been asked. I am going to raise it, and I would rather raise it now than in March when something is short.',
]));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I showed my three lines to Abu Yasser, who would be asked if the Saturday count were wrong. He moved it to my column without hesitating and said he had assumed it was mine for two years. Neither of us had said a word about it in that time.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 1 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'a', 'a', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _I **handle**_ — the permanent half of the job.  **2** _I **am covering**_ — temporary, with an end.  **3** _responsible **for**_.  **4** _I **report** to_ — a permanent line, so the simple.  **5** _**whoever**_, with a singular verb.  **6** _She **handles**_ — the third-person -s.  **7** _who **signs**_ — an indirect question keeps normal word order.  **8** _**While** I have you_.'));
out.push(note('⚠ Questions 1, 2 and 4 are one teaching point in three costumes: the simple for the permanent, the continuous for the temporary. A learner who gets 1 and 4 and misses 2 has the rule and has not noticed that *covering* has an end date in it.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Who to ask for', 'And if they are out', 'Notice needed', 'Who signs', 'What goes wrong most often'], [[
  'Mr Jaber', 'Samira on the desk — and never the driver', '4 p.m. the day before', 'the driver, and he does not check the count', 'addresses — nine times out of ten',
]], [1, 1.5, 1.1, 1.6, 1.4]));
out.push(note('Accept _the agent_ or _Jaber_ for the first. For the second, **the mark needs the deputy**: "never the driver" alone is the warning, not the answer, and a learner who gives only that has heard the vivid half. For the fourth, accept *the driver* alone — the qualification is a bonus and worth saying so aloud.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (61 words)', ['Nour Mansour, administration coordinator, both sites, 011 ___ ____. Handles: orders, paperwork, queries, anything you are not sure about. Answerable for: the account, the paperwork being right, and anything you were told and not told again. Not answerable for: what was picked in the warehouse, or what was ordered by a customer over the counter without a written order.']));
out.push(box('Marking the Unit 1 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Where to find them (1) · a _handles_ line that is a list, not a title (2) · an _answerable for_ line (2) · a _not answerable for_ line (1) · 50 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the _handles_ line are for **content, not grammar**: a job title scores 0 of 2, however well written. *Handles: administration* is a title with a colon in front of it.',
  '⚠ The _answerable for_ line must be something that could **fail**. _Answerable for: my work_ scores 0 of 2. If the learner cannot name a failure, they have not applied the test and the test is the unit.',
  '⚠ Take nothing off for a short _not answerable for_ line. Four words — *not answerable for: picking* — is a complete answer and in a real workplace it is a brave one.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 1**'));
out.push(p('**1 The third-person -s, and a warning about how to treat it.** *She handle the counter* will appear in every lesson of this unit and most lessons of this book. It is not a knowledge gap — ask any of these learners to explain the rule and they will — it is an articulation gap, and nobody hears it in their own speech. **So do not re-teach the rule; drill the sound.** Four aloud at the start of every lesson: *she handles · he signs · it goes · she reports*. ⚠ And do not correct it in the middle of a stage 4 report. A learner who is being corrected on -s while trying to say something true about their own job will stop saying things that are true.'));
out.push(p('**2 The title instead of the job.** *I am the administration coordinator* is not laziness and not bad English; in Arabic, as in English, a title is the normal answer to *what do you do?* among colleagues, and it is only useless to a **stranger**. Teach it as an audience problem rather than an error: with a colleague, the title; with somebody outside, what passes through your hands. Learners accept that instantly and the correction sticks, where "don\'t say your title" does not.'));
out.push(p('**3 Stopping at part 1, and why it is not rudeness.** In 1.5 many learners will produce *that is not my department* and be surprised that it is the fault of the cycle. It is said by people being careful, not careless: naming somebody else\'s job sounds like claiming authority you do not have, and in a hierarchy that is a real risk. ⚠ So mark part 3 generously and discuss part 2 honestly. A learner who gives the name and the time but hedges on whose job it is has understood the unit; a learner who gives all three parts confidently may simply be senior.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 1 · Answer Key');
