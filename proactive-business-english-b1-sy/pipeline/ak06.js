// Proactive Business English B1 · Syria Edition · Book 1 · Unit 6 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 6  Obligation, Authority and Permission'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Mark the figure, not the modal.** A learner who writes *I am authorised to sign credit notes* with no figure has produced correct English and no authority, and should be marked as having not done the task. Say so before they write — this is the same contract as Unit 4\'s numbers and Unit 5\'s sources, and by Unit 6 a class recognises it.',
  '⚠ **The unit\'s one real difficulty is 6.2**, and it is conceptual rather than grammatical. Learners are taught *mustn\'t* as a stronger *don\'t have to*, in that order, in nearly every course book they have met. **They point in opposite directions.** Until that lands, nothing in 6.3 to 6.6 is safe, so if a lesson has to be cut, cut 6.1 and not 6.2.',
  '⚠ **6.6 will produce resistance and it is worth expecting.** Some learners will say that telling a customer *I think this rule is wrong* is disloyal. The unit\'s answer is specific and not a matter of opinion: it is disloyal only if the person who set the rule does not already know what you think, and the remedy is then to tell them, not to mislead the customer. ⚠ Have that sentence ready.',
], C.grey, C.navy));

// ===================== 6.1 =====================
out.push(h2('6.1  Company rule and law'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Ask for the confidence rating and record it; the class will be about a third wrong and very confident, which is the point of cycle 1.'));
out.push(p('**b**  *We **must** count the load* — ours. *We **have to** keep the invoices for ten years* — the law\'s.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 Because somebody will ask for a rule to be relaxed: if it is the company\'s that is a conversation, and if it is the law\'s it is not, and the kindest sentence is *I cannot*.  2 That the quarterly stock count is **both** — counting before the year end is required, and *quarterly* is the company\'s own.'));
out.push(p('**Language box – Practise (answers):**  1 **ours** — September 2024.  2 **the law\'s**.  3 **ours** — and undated.  4 **half**: the year-end count is required, *quarterly* is ours.  5 **the law\'s**.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Four rules on the delivery board. Which are yours and which are the law\'s?'],
  ['A', 'Sheeting the load is ours. The weights are the law. The four-hour break is the law. Washing the lorry on Fridays is ours.'],
  ['B', 'Sheeting is the law as well.'],
  ['A', 'Is it?'],
  ['B', 'For an open load on a public road, yes. ⚠ And you have been enforcing it as a company preference, which means somebody has argued with you about it and you have had the weaker half of the argument.'],
  ['A', 'So three of four are the law.'],
  ['B', 'And the one that is yours is the washing, which is the one everybody assumes is a regulation.'],
]));
out.push(note('⚠ The pattern in role card 1 is worth naming: the rule people take for a regulation is usually the cosmetic one, and the genuinely legal rules get argued about because nobody said they were legal.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write two columns and ring the half-rules. **Typical errors:** _we must to keep the invoices_ · _we have must count the load_ · _we are must to display it_ · and the content fault, which is sorting by how serious the rule feels rather than by where the obligation comes from. ⚠ Seriousness and source are unrelated: the cash-with-drivers rule is the company\'s and is the one they would never relax.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The rule', 'O / L / H', 'How I know'], [
  ['Invoices kept ten years', '**L**', 'the accountant; it is in the tax law'],
  ['Registration displayed', '**L**', 'the inspector asked for it in 2023'],
  ['Receipt for every sale', '**L**', 'checked by the accountant'],
  ['Stock counted quarterly', '**H**', 'the year end is required; quarterly is ours'],
  ['Gate count against the order', '**O**', 'we introduced it in September 2024'],
  ['Two signatures over 500,000', '**O**', 'Mr Ayoub\'s father; undated'],
], [2, 0.8, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of six rules, three are ours, two are the law\'s and one is half. The one I was wrong about was the receipts — I had it down as ours and had told two customers we could do without one."', '⚠ Count the rules the room could not place. About a third is normal, and the useful observation is that they are usually the rules people enforce most confidently, because nobody has ever been asked to justify them.']));
out.push(stage('5', 'Read'));
out.push(p('1 The quarterly stock count (they had it as the law) and the receipts (they had it as theirs) — both backwards. They had been telling customers for years that they *had to* count quarterly, which was not true.  2 They would discuss the fourteen days and the Friday printing, both arbitrary; they would not relax the gate count or the cash rule.  3 Both exist because **something actually went wrong**.'));
out.push(note('⚠ Question 3 gives the class a usable test for their own rule lists: a rule with an incident behind it is defended, and a rule with only a habit behind it is negotiable. ⚠ It is also the link back to 5.2 — the control with a date and a prompt — and worth naming as such, because learners do not always notice that two units are describing the same page from different sides.'));
out.push(stage('6', 'Write with help – sample (137 words)'));
out.push(sample(null, [
  '**THE RULES IN OUR WORKSHOP, SORTED.**',
  'Guards on the cutting machine | **Law** | not negotiable; stop the machine and tell me',
  'Fire exit kept clear | **Law** | not negotiable, and the pallets go on the other side',
  'Stock counted monthly | **Half** | the year-end count is required; monthly is ours',
  'No eating at the benches | **Ours** | my father\'s rule; I would discuss it',
  'Overalls worn at all times | **Ours** | and I would not discuss it',
  '⚠ **What we got wrong.** We had the fire exit down as a company rule and the overalls down as the law, which is both of them backwards. I had told two new men that the overalls were a regulation, which was untrue and easier than explaining.',
  '**Which of ours we would relax.** The eating rule is arbitrary and I would discuss it. The overalls I would not, because a man was burned in 2016 and was wearing a shirt.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every rule marked ours, the law\'s, or half', '✓'],
  ['A third column saying what to do', '✓ — *stop the machine and tell me*'],
  ['Something the writer had got wrong', '✓ two things, both backwards'],
  ['Which of their own they would relax, with the reason', '✓ and the reason is an incident'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('What the writers had got wrong, read out. ⚠ **Ask specifically which mistakes had been repeated to a customer or a new member of staff.** Those are the expensive ones, because they have been passed on and will be corrected by somebody other than the writer.'));
out.push(stage('7', 'Write freely – sample (132 words)'));
out.push(sample(null, [
  'Everybody in our building believes that a quotation has to be honoured for thirty days by law. It does not. The thirty days is ours and it has been ours since about 2015.',
  'The belief started with my predecessor, who told customers *we are obliged to hold it for thirty days*, which is true in the sense that we oblige ourselves and false in the sense everybody heard. Two of our four counter staff now say it, and one of them says *by law*.',
  '⚠ Correcting it has a real cost. At the moment no customer argues about the thirty days, because you cannot argue with a statute. The day we say it is our own policy, the first big customer will ask for sixty, and we will either hold the line or discover that we never had one.',
]));
out.push(note('⚠ The last paragraph is the hard honesty the cycle is for: a false belief about the source of a rule can be useful to the company, and a learner who sees that has understood something the grammar does not contain. ⚠ Do not let the class conclude that the deception is therefore fine — ask what happens the first time a customer checks.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the rule people think is the law_ — "a quotation held for thirty days"   ✓ _must and have to used for the right sources?_ — yes, and the misuse is quoted deliberately   ? _who would have to be told, and would they mind?_ — "the four counter staff, and the one who says *by law* will mind most"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Several of these beliefs are useful. **Name the difficulty plainly:** a company rule everybody believes is the law is obeyed perfectly and costs nothing to enforce, which is exactly why it survives. ⚠ The argument against it is not moral but practical — it works until one customer checks, and then every rule you have is open.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Six rules sorted: two the law, three ours, one half. I checked the overalls with the man who does our insurance. ⚠ He said the overalls are not law but our policy is a condition of the insurance, which is a third category nobody in the unit mentioned and the one my answer actually needed.']));
out.push(note('⚠ That homework sample finds a real third source — the insurer, the bank, the landlord — and a class will produce it. Accept it and add it to the board: the obligation is still **outside**, so *have to* is right, and it is not the law.'));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  What I don\'t have to do'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The *mustn\'t* list is harder for almost everybody, and the reason is worth saying: prohibitions at work are usually implied and duties are usually stated.'));
out.push(p('**b**  *You don\'t have to sign it* **removes a duty** — signing is optional. *You mustn\'t sign it* **creates a prohibition** — signing is forbidden. ⚠ They are not two strengths of one idea; they point in opposite directions.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Nour had said *you do not have to get a second signature* meaning credit notes under 100,000; Hala heard it as credit notes, with no figure.  2 Two sentences instead of one: *You do not have to get a second signature below 100,000. You must not sign anything above it on your own.* ⚠ The figure, and then both halves.'));
out.push(p('**Language box – Practise (samples):**  1 _Below 100,000 you don\'t have to get a second signature; above it you mustn\'t sign alone._  2 _Below 50,000 you don\'t have to put it in writing; above it you mustn\'t quote without writing._  3 _On a single box you don\'t have to count at the gate; on a pallet or more you mustn\'t load without counting._  4 _You don\'t have to write a receipt in the book for a counter sale under 5,000 — ⚠ careful: this one is the law, so there is no lower half._  5 _Up to 5 per cent you don\'t have to ask; above 5 per cent you mustn\'t agree it yourself._'));
out.push(note('⚠ Item 4 is a deliberate trap and the class should fall into it. The receipts rule came from 6.1 as the law\'s, and a legal duty has no *don\'t have to* half at all. ⚠ A learner who produces both halves for item 4 has the grammar and has stopped thinking about the source, which is the fault 6.1 exists to prevent.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'You told me I did not have to ask you about discounts.'],
  ['A', 'Up to five per cent on the counter, yes.'],
  ['B', 'So I have been giving discounts for six weeks without asking. Including fifteen per cent on Mr Haffar\'s standing order.'],
  ['A', '…That one you mustn\'t.'],
  ['B', 'You did not say mustn\'t. You said I did not have to ask.'],
  ['A', 'About the counter.'],
  ['B', 'You said *you do not have to ask me about discounts*, and I took it to mean discounts.'],
  ['A', 'What I should have said is: up to five per cent on the counter you do not have to ask; above five, or on anything on a standing order, you must not agree it yourself.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both halves with the figure, **and** the half instruction that caused it. **Typical errors:** _you don\'t must sign it_ · _you haven\'t to ask me_ · _you don\'t have to sign above 100,000_ (the right modal on the wrong side of the line, which is the dangerous one) · and the content fault, which is giving both halves with no figure in either.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The half instruction, as it was said', 'The figure', 'Both halves, properly'], [
  ['"You don\'t have to get Nadia to sign these."', '100,000', 'below: no second signature; at or above: must not sign alone'],
  ['"You don\'t have to ask me about discounts."', '5%', 'to 5% on the counter: no ask; above, or any trade discount: must not agree alone'],
  ['"You don\'t have to put it in writing for regulars."', 'same day', 'same-day collection: a telephone price; anything held over: must not quote without writing'],
  ['"You don\'t have to count every box."', '1 pallet', 'under a pallet: spot check; a pallet or more: must not load without a full count'],
], [1.8, 0.7, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said *you do not have to get Nadia to sign these*. It was heard as credit notes generally. What I should have said is: below 100,000 you do not have to; at 100,000 and above you must not sign alone."', '⚠ Count the half instructions in the room, then count how many had a figure. The second number is usually one or two, and the point to make is that the figure is the whole of the instruction — the modal is only grammar.']));
out.push(stage('5', 'Read'));
out.push(p('1 Nour\'s — *what I said in September was half an instruction and the six weeks since are my fault and not yours*.  2 It stands. It was correctly calculated and the customer was owed it, and she will not reverse a correct credit to make a procedure look tidy; it is recorded as signed outside the limit, with the reason, and Mr Attar has it.  3 Because six weeks showed Hala was signing up to about 250,000 and every one was right, and the figure had been set when the counter took a tenth of what it takes now. ⚠ The note explicitly rules out **covering Tuesday**.'));
out.push(note('⚠ Question 3 is the move worth teaching from this page: a limit raised in the same week as a breach looks like a cover-up to every reader, and the **only** defence is to name the suspicion yourself before anybody voices it. Learners will not think of this unprompted and will use it for the rest of the course.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**PURCHASE ORDERS — what you do not have to do, and what you must not.**',
  'Abu Yasser — what I told you in June was half an instruction, and if anything has gone through wrongly since then that is mine and not yours.',
  '**Below 150,000** you **do not have to** ask anybody. Raise the order, sign it, and put the copy in the file. Nobody needs to see it first.',
  '**At 150,000 and above** you **must not** sign it alone. I countersign, or Nadia if I am not here, and if neither of us is here it waits until the morning — and *it is ordered and it goes tomorrow* is a sentence you may say to a supplier.',
  '**The two orders you signed in August at about 150,000** stand. Both were urgent repairs, both were right, and I am not unpicking a correct order to tidy a file. They are recorded as signed at the limit, with the reason.',
  '⚠ **And one thing I am changing.** The figure is written down now, which it never has been. ⚠ Not because of August — August is recorded. Because eleven years of your ordering is better evidence than anything I could invent.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fault taken in the first line', '✓'],
  ['Both halves, with the figure', '✓ 150,000, both sides'],
  ['What happens to the thing already done', '✓ both orders stand'],
  ['If a limit changes, what the change is not for', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('First lines read out. **Ask which one the class would want to receive**, then ask what it would have cost the writer to write it. The answer is nothing, and that is the whole argument.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'When I started at the counter I was told I did not have to write the customer\'s telephone number on the order form. For about four months I did not write any of them.',
  'What I had not been told was that I must not take an order for delivery without one. Nobody said it because to the person telling me it was obvious — a delivery order with no number cannot be chased. I took about thirty of them and we chased all thirty by going through the street names.',
  'The person who found out was Fadi, not the person who told me, and he found out in a van in Ghouta at six in the evening. ⚠ Nobody ever told the man who gave me the half instruction what it had cost, and I did not tell him either, because I was new and he was not.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _how long it went on_ — "about four months, thirty orders"   ✓ _don\'t have to and mustn\'t in opposite directions?_ — yes, and the missing half is the *mustn\'t*   ? _was there ever a figure, and who should have given it?_ — "no figure; the condition was *for delivery*, and the man who trained her should have said it"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Often nobody tells the person who gave the half instruction. ⚠ **That is why the first line of the note in stage 5 matters more than the figures:** a person who takes the fault once gets told the next time, and a person who does not never finds out what their instructions cost. Say it in those terms rather than as a point about politeness.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Both halves for the gate count, given to Abu Yasser in writing: under a pallet, a spot check and you do not have to count every box; a pallet or more, you must not load without a full count against the order. ⚠ He asked what a pallet means when it is half built. I did not know.']));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  What I am authorised to sign'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Record how many learners can give a figure at all. In a typical class it is two or three, and the rest will say *it depends* or *small amounts*, which is the cycle\'s whole premise and should be collected rather than corrected.'));
out.push(p('**b**  The second. *Small amounts* is not a limit; it is an atmosphere, and two people will hold two different pictures of it and neither will be wrong.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **A figure and a thing.**  2 That without a written limit, a payment that goes wrong at 240,000 becomes a question about **your judgement** rather than arithmetic — *a written authority is not a restriction on you; it is the only thing that can defend you*.'));
out.push(p('**Language box – Practise (samples):**  1 _I am authorised to sign credit notes up to 250,000, subject to a countersignature above that._  2 _…purchase orders up to 500,000, subject to Mr Ayoub above that._  3 _…a discount up to 5 per cent on trade, subject to Mr Ayoub above that._  4 _…a refund up to 50,000 in respect of counter sales only._  5 _…to take on a temporary driver for up to two weeks, subject to the rate being the standard rate._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'What are you authorised to order?'],
  ['A', 'Packaging, pallets, small tools. Whatever the yard needs.'],
  ['B', 'Up to what?'],
  ['A', 'Nobody has ever said. I stop at about forty thousand and come and ask.'],
  ['B', 'And the two at a hundred and fifty?'],
  ['A', 'Urgent repairs. Nobody said anything afterwards.'],
  ['B', '⚠ Which you have read as approval, and it is not. It is nobody having looked.'],
  ['A', 'It has been eleven years.'],
  ['B', 'Then eleven years is your evidence and you should ask for the figure to be written, not wait to be given it.'],
]));
out.push(note('⚠ *Nobody said anything afterwards* is the most dangerous sentence in the cycle and learners offer it as reassurance. ⚠ Silence is not authority — it is the absence of anybody having looked, and it ends the first time something goes wrong at that figure.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the authority as a figure and a thing, then the exposure with no document. **Typical errors:** _I am authorise to sign_ · _I am authorised for sign credit notes_ · _I am authorised to sign until 250,000_ (*until* for *up to*) · and the content fault, which is a figure with no thing: *I am authorised up to 250,000* leaves the reader to guess what of.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['I am authorised to…', 'Up to', 'Subject to', 'W / P'], [
  ['sign credit notes', '250,000', 'countersignature above', '**W**'],
  ['raise purchase orders', '500,000', 'Mr Ayoub above', '**W**'],
  ['give a counter discount', '10%', 'nothing', '**P**'],
  ['give a trade discount', '5%', 'Mr Ayoub above', '**W**'],
  ['write off damaged stock', '—', 'nobody has ever said', '**P**'],
], [1.8, 0.8, 1.6, 0.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am authorised to sign credit notes up to 250,000, subject to a countersignature above that. Of my five lines, three are written and two are in practice only — and the two unwritten ones are the discount and the stock write-off, which are the two that do not produce a document anybody checks."']));
out.push(note('⚠ The pattern in that report holds across almost every class: the unwritten authorities are the ones that leave no document. ⚠ Put it on the board as a rule of thumb — **an authority nobody has written down is usually one nobody can see being used.**'));
out.push(stage('5', 'Read'));
out.push(p('1 That it is **recording what already happens** and not granting an authority — because a person who thinks they have been promoted by a table will behave differently from one who knows they have been written down.  2 It is a percentage and not a figure, and 5 per cent of a pallet exceeds Hala\'s credit-note limit; they have **left it** as a percentage because nobody could agree on the figure, and they say so.  3 Deliberately: the person who raises the paperwork does not release the money.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**AUTHORITY MATRIX — Nassif Brothers, as at 1 November.**',
  'Purchase order | Rami: to 300,000 | Samira: to 300,000 | Workshop: to 60,000 | **Above:** Mr Nassif',
  'Payment out | — | Samira: to 300,000 | — | **Above:** two signatures',
  'Credit note | Rami: to 100,000 | Samira: to 100,000 | — | **Above:** Mr Nassif',
  'Scrap a cut sheet | Rami: to 20,000 | — | Workshop: to 20,000 | **Above:** Rami',
  '**1 ·** The workshop\'s 60,000 is new and it is **not a promotion**. Consumables have been ordered at about that figure for nine years and nobody wrote it down. We are recording what happens.',
  '**2 ·** The weakness we have not solved is the scrap line. Twenty thousand of mild steel and twenty thousand of stainless are different quantities of metal, and nobody could agree whether the limit should be money or sheets.',
  '**3 ·** Rami cannot sign a payment out, which looks odd beside his other lines and is deliberate: he raises the orders.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A figure and a thing in every cell', '✓'],
  ['An **above that** column, filled on every row', '✓ all four'],
  ['Recording distinguished from granting', '✓ note 1'],
  ['One admitted weakness and one explained oddity', '✓ notes 2 and 3'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Admitted weaknesses read out. **The matrix the class trusts is the one with a weakness in it** — and the reason is worth drawing out: a table with no soft line has either not been tested or is hiding the soft line, and a reader cannot tell which.'));
out.push(stage('7', 'Write freely – sample (130 words)'));
out.push(sample(null, [
  'I work to forty thousand on the yard account and nobody has ever said forty thousand to me. I arrived at it in about 2016, when forty thousand bought a month of packaging. It now buys about a week.',
  'Nobody has ever queried it, which I used to take as approval and now do not. What it means is that nobody has looked at the yard account since 2016.',
  '⚠ If something went wrong at thirty-nine thousand, the question would not be whether I was inside my limit, because there is no limit to be inside. It would be whether a reasonable person would have ordered it, and that is a question about me rather than about a figure. **I would rather have the figure and be told it is thirty.**',
]));
out.push(note('⚠ The last sentence is the cycle landing. A learner who would rather have a lower written limit than a higher unwritten one has understood that an authority is a defence, and that is a genuinely difficult idea that nobody in the room arrived with.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the unwritten figure_ — "forty thousand, arrived at in 2016"   ✓ _am authorised to · up to · subject to?_ — yes   ? _who could write it down, and what is stopping them?_ — "Mr Nassif, and nothing is stopping him; nobody has asked"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In almost every text nobody has ever queried the figure. ⚠ **Do not let that be heard as reassurance.** An unqueried figure is an unprotected one, and the query arrives on the day something goes wrong — which is the one day on which you would like the figure to have been written down last year.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Five lines: three written, two in practice. I asked for the yard figure to be confirmed and gave the nine years of orders as the case. Mr Nassif said sixty rather than forty, which is more than I asked for, ⚠ and said he had assumed somebody had written it down years ago.']));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  What I may not decide alone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. If a learner cannot name the owner of a decision that is not theirs, that is the finding, and it should go on the board beside their name for the rest of the unit.'));
out.push(p('**b**  The third. *I am not sure* and *I will have to check* both make the line sound soft; the third names the owner, closes the question, and gives a date.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 She can put eight per cent up with the figures; she can tell him Mr Ayoub has said yes to eight once that she knows of, in 2024, for a bigger order; and she can give him five today **in writing** so a no costs him nothing.  2 She refuses to put the eight through and sort it out afterwards — because the next person who asked would get it too, and then five would mean nothing and neither would she.'));
out.push(p('**Language box – Practise (samples):**  1 _That is not mine to decide — it is Mr Ayoub\'s. I can put it up with your volume, tell you what he did in 2024, and give you five today in writing._  2 _A longer hold is not mine. I can give you the fourteen days now and put twenty-one to him._  3 _Sixty days is not mine. I can give you thirty in writing and put sixty up with your payment history._  4 _A free delivery to Aleppo is not mine. I can give you our rate today and put the waiver up._  5 _Taking back made-to-order goods is not mine. I can offer to re-cut at cost today and put the return up._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Sixty days. We have paid you on the nail since 2019.'],
  ['B', 'You have, and I have the ledger to prove it. Thirty is my limit. Sixty is not mine to decide — it is Mr Ayoub\'s.'],
  ['A', 'So you cannot help me.'],
  ['B', 'I can do three things. I can put sixty to him with your payment record — forty-one invoices, none late. I can tell you that sixty was given once, in 2023, to a customer who then failed, so he will be cautious and the reason will not be you. And I can give you thirty with a fortnight\'s grace in writing today, so that if he says no you are no worse off than this morning.'],
  ['A', 'And if he says no?'],
  ['B', 'Then it is thirty with the grace, and I will tell you his reason.'],
]));
out.push(note('⚠ The middle move in that sample — *he will be cautious and the reason will not be you* — is the one learners miss. Telling a customer **why** the answer may be no, in advance, costs nothing and removes the insult from a refusal before it arrives.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the owner and the three things, then mark whether the third was actually given. **Typical errors:** _it is not mine for decide_ · _I am not allowed go above five_ · _it is not my to decide_ · and the content fault, which is giving the first two things and not the third. ⚠ The thing given today in writing is what distinguishes this cycle from an apology.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What they ask for', 'Whose decision', 'The three things I can give'], [
  ['A trade discount above 5%', 'Mr Ayoub', 'put it up with the volume · what he did in 2024 · 5% today in writing'],
  ['Sixty-day terms', 'Mr Ayoub', 'put it up with the payment record · the 2023 case · thirty with a grace, in writing'],
  ['A return of made-to-order goods', 'Mr Ayoub', 'put it up · the one goodwill case, recorded as such · a re-cut at cost today'],
  ['A price held thirty days', 'Mr Ayoub', 'put it up · why fourteen was chosen · fourteen today in writing'],
], [1.4, 1, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"When they ask for sixty days, it is Mr Ayoub\'s. I can put it up with forty-one invoices and none late, tell them sixty was given once in 2023 to a customer who failed, and give them thirty with a fortnight\'s grace today in writing."', '⚠ Ask how many in the room have exceeded their authority to avoid saying no. Several will have. ⚠ Then ask what happened the **second** time that customer asked — there is almost always a second time, and the second ask is the cost of the first yes.']));
out.push(stage('5', 'Read'));
out.push(p('1 Five per cent, confirmed in writing and holding fourteen days — given in the first paragraph *so that the rest of this letter costs you nothing*.  2 That she recommended **seven and not eight**, her reason being the margin on this order and nothing to do with him, because he is entitled to know that the person putting his case did not put all of it — and because he would hear it anyway.  3 That Mr Ayoub would honour an eight put through now, the next person who asked would get eight, and within a month five would mean nothing — *the written five is only worth having while it is believed*.'));
out.push(note('⚠ Question 2 is the paragraph to read aloud twice. Telling a customer you recommended less than they asked for is the most counter-intuitive move in Book 1, and the justification is not candour for its own sake: **they will hear it from the decision-maker anyway**, and the difference between candour and a discovery is who said it first.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**To Mr Haffar. 7 November. Your order 1151 — the delivery charge.**',
  'Dear Mr Haffar,',
  'The charge on 1151 is waived, confirmed in writing, and that holds whatever happens next. ⚠ I am telling you that first so that the rest of this letter costs you nothing.',
  'Waiving it on every order is not mine to agree. It is Mr Nassif\'s, and I have put it to him with three figures: nine years of orders, the two months in 2022 when you took our stock while our yard was rebuilt, and the delivery cost to your street, which is 4,000 a journey.',
  '⚠ I should tell you what I told him. I recommended a waiver above 200,000 and not on every order, because below that the charge is most of the margin. My reason is the margin and nothing to do with you.',
  'He decides on Thursday. If the answer is no, I will tell you his reason and not simply that he said no.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What is yours, given in the first paragraph, in writing', '✓'],
  ['The owner named, and what was put up', '✓ three figures'],
  ['Your own recommendation, even if it was less', '✓ above 200,000, not every order'],
  ['The refusal explained in the reader\'s interest', '✗ **missing** — the letter has no refusal paragraph at all'],
], [5, 1]));
out.push(note('⚠ Leave that ✗. The sample is a good letter missing its last move, and learners mark a missing paragraph far more readily than a weak one.'));
out.push(stage('6R', 'Share'));
out.push(p('Recommendation paragraphs read out. Ask two questions in order: **would you rather have been told?** — nearly everybody says yes — and then **would you have written it?** The gap between the two answers is the thing the cycle is about.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'A customer offered me two thousand to put his order ahead of two others in the morning run. He did it in the yard, in front of Fadi, as if it were a tip, and I think he genuinely did not know it was anything else.',
  'I said the run is loaded in the order the orders came in, that it is not mine to change, and that if he wanted a guaranteed time he could pay for a dedicated journey, which is a real thing we sell and costs more than two thousand.',
  '⚠ What I did not do was tell him he had offered me something improper, because I do not think he had meant to and because Fadi was standing there. I told Mr Nassif the same afternoon. ⚠ I am still not certain the second decision was right.',
]));
out.push(note('⚠ Accept and praise the uncertainty in the last line. A learner who writes *I am still not certain* about a judgement call has produced better B1 writing than one who writes a confident moral, and the cycle does not have a settled answer about what to say to a customer in front of a colleague.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what was offered or implied_ — "two thousand, in the yard, as if it were a tip"   ✓ _not mine to decide · not allowed to · may not?_ — yes, *it is not mine to change*   ? _what would have happened to the next person who asked?_ — "Fadi was watching, so the next person would have been Fadi"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Some learners will have exceeded their authority. ⚠ **The useful question is not whether they were wrong but what happened the second time** — and the answer, nearly always, is that the second ask came, was larger, and was harder to refuse than the first would have been.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Three things for the sixty-day ask: the payment record, the 2023 case, and thirty days with a fortnight\'s grace in writing today. ⚠ I used it on Tuesday. He took the thirty with the grace and did not ask again about sixty, which I had not expected — I had expected to have to say it twice.']));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  Asking upwards'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Collect *how long* and *has anybody asked* as two numbers on the board. The second is almost always nought, and the gap between the two is the cycle.'));
out.push(p('**b**  The second. *Can I have a higher limit?* is a favour and invites *I will think about it*. The second is a decision with a figure and evidence, and can be made in a minute.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 Sixty-one credit notes this year, forty-three above the limit, the figure\'s age — and the awkward reason: six weeks of Hala signing above the limit, all correct.  2 That he would have said he would think about it, would not have thought about it, and she would have asked again in March — ⚠ *which is roughly what happened in March*.'));
out.push(p('**Language box – Practise (samples):**  1 _Would it be all right if the credit-note ceiling went to 250,000? Sixty-one this year, forty-three above the ceiling, none wrong._  2 _…if purchase orders went to 500,000? Eleven years at that figure and no error._  3 _…if the counter discount were a figure rather than 5 per cent? Five per cent of a pallet exceeds Hala\'s credit limit._  4 _…if Hala could countersign in Nadia\'s absence? Four credit notes waited between two and nine days this year._  5 _…if the price hold went to twenty-one days? Six customers have asked and two went elsewhere in the gap._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Would it be all right if the counter discount were a figure instead of five per cent?'],
  ['B', 'Why?'],
  ['A', 'Two reasons and one awkward one. Five per cent of a small sale is nothing. Five per cent of a pallet is 42,000, which is more than my credit-note limit — so I can give away more in a discount than I am allowed to credit back.'],
  ['B', 'And the awkward one.'],
  ['A', 'I have given five per cent on two pallets without working out what it came to. Both are done and recorded. I am not asking you to undo them; it is evidence that the percentage is the wrong shape.'],
  ['B', 'A figure, then. What figure?'],
  ['A', 'Twenty thousand, with percentage below that, and nothing else changed.'],
]));
out.push(note('⚠ *So I can give away more in a discount than I am allowed to credit back* is the kind of sentence this cycle is for: it is an inconsistency inside the matrix, found by counting, and it is unanswerable. ⚠ Point out that it was available to anybody who looked and that nobody had.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the figure, the counted evidence and the awkward reason, then say whether the ask was bounded. **Typical errors:** _would it be all right if I sign up to 250,000_ (present for past after *if*) · _I would like to propose that I will sign_ · _would it be all right that I signed_ · and the content fault, which is an ask with no number in it at all.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The ask', 'Counted reason 1', 'Counted reason 2', 'The awkward reason', 'And nothing else changed'], [[
  'credit-note ceiling to 250,000', '61 this year, 43 above the ceiling', 'none of the 61 wrong in amount', 'nine signed above it in six weeks, all correct', 'countersignature above 250,000 unchanged',
]], [1.1, 1.2, 1.2, 1.3, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['The ask made to the class, then: _"I will take it to Mr Nassif on Thursday, when he does the month end — he is better at figures on a Thursday."_', '⚠ Count the asks with a number in them, then count the asks with an awkward reason. **The second count predicts which asks the room believed**, and saying that out loud is more useful than any encouragement to be bold.']));
out.push(stage('5', 'Read'));
out.push(p('1 That the ceiling has not prevented an error this year, **because there has not been one to prevent** — none of the sixty-one was later found wrong in amount.  2 Because 250,000 would have let through every credit note except the largest (318,000), which is the one the writer would want Mr Ayoub to see. ⚠ The figure is **derived**, not chosen.  3 Not a payment-out authority, not a discount change, and not a change to who may countersign.'));
out.push(note('⚠ The *what I am not asking for* paragraph is the part learners omit and the part that gets requests granted. A reader of any request is looking for what else is in the envelope; three lines saying there is nothing stops them looking.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**REQUEST FOR AUTHORISATION — purchase-order ceiling, yard account. To Mr Nassif. 3 November.**',
  '**What I am asking for.** That the yard purchase-order ceiling be written at **60,000** for the workshop, with everything above it coming to me as now and no other line changed.',
  '**The counted case.** Ninety-one yard orders in the nine months to September. **Sixty-four were under 40,000** and twenty-seven between 40,000 and 60,000; every one of the twenty-seven came to me and every one was signed the same day. ⚠ Not one was refused, in nine months, and four waited overnight because I was at the other site.',
  '**Where the figure comes from.** The largest yard order of the year was 71,000, for a compressor repair. ⚠ A ceiling of 60,000 would have let through all but that one, which is exactly the one I would want to see.',
  '**The reason that does not help me.** Twice in August the workshop ordered at about 150,000 without authority, for urgent repairs. Both were right and both are recorded. **I am not asking you to approve them.**',
  '**What I am not asking for.** Not a payment authority, not a change to who signs for stock, and not a second card on the account.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The ask stated exactly, with the figure', '✓ 60,000'],
  ['A counted case — three numbers or more', '✓ 91, 64, 27, 4'],
  ['The figure derived from the counts', '✓ all but the 71,000'],
  ['The unhelpful reason, and what is not being asked for', '✓ both'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Unhelpful reasons read out. **Ask which request the class would grant today** — and note that the ones they would grant are the ones that cost the writer something to write.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'The petty cash float has been twenty thousand since 2014. In 2014 it covered a fortnight of small things. It now covers about three days, and the result is that I go to Samira for cash twice a week and she signs a slip for four thousand for a taxi and a box of screws.',
  'Nobody has asked for it to be raised in eleven years, and I think I know why. Asking for more cash sounds like asking for something for yourself, even when the request is that you be interrupted less often. ⚠ A float is the one figure in a company that is impossible to ask for without seeming to want it.',
  'The counted case is easy: forty-one slips this year, thirty-eight of them under five thousand, every one signed. That is forty-one interruptions to buy screws.',
]));
out.push(note('⚠ That text names a real obstacle the unit does not otherwise reach: some asks are hard to make because of what they look like, not because of what they are. ⚠ The answer is the counted case — *forty-one interruptions* turns a request for money into a request about somebody else\'s time.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what the figure was worth when it was set_ — "a fortnight in 2014, three days now"   ✓ _Would it be all right if…? / I should like to propose?_ — the ask is implied rather than made; say so   ? _why has nobody asked?_ — "because asking for cash looks like wanting it"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The commonest answer is that asking looks like asking for something for yourself. ⚠ **That is exactly what the counted case is for**, and it is worth making the mechanism explicit: three numbers turn a request about your own convenience into a statement about the company\'s time, and the person deciding can then agree without granting anybody a favour.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Three numbers for the float: forty-one slips, thirty-eight under five thousand, none refused. I took it to Samira rather than Mr Nassif because the interruptions are hers. ⚠ She raised it to fifty and told me she had been meaning to for two years and had been waiting for somebody to count it.']));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  Carrying a rule you did not make'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Ask the second question again at the end of the cycle; some learners discover during 6.6 that they agree with a rule they had been enforcing apologetically, which is its own finding.'));
out.push(p('**b**  The second. The first — *I am afraid it is the policy* — tells the hearer nothing and invites twenty minutes of argument with the wrong person.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 That she thinks it is wrong for Ms Shamsi specifically, that she said so in writing before the terms went out, and that **it is still thirty days**.  2 Because if she claimed to agree, she and Mr Ayoub would be saying different things about the same rule and Ms Shamsi would believe neither of them.'));
out.push(p('**Language box – Practise (samples):**  1 _Mr Ayoub set thirty days in September, for everybody. I think it is wrong for you and I said so in writing. And it still stands. Write to him and I will send you what I sent him._  2 _He set it after a return we could not resell. I think it is right, and here is why._  3 _The minimum order is his. I think it is too high for Ghouta specifically and I said so. It stands._  4 _The cash rule is ours and I think it is right: a driver carrying cash is the only one of us who cannot refuse._  5 _The Friday list is mine, actually — so this one is my judgement and not a rule I am carrying._'));
out.push(note('⚠ Item 5 is a deliberate trap and the best question in the cycle. If the rule is **yours**, none of the four moves applies: you do not get to report your own rule as somebody else\'s. ⚠ Learners reach for the carried-rule form because it is more comfortable, and that is precisely the evasion 6.6 is written against.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Fadi has taken cash back from me for four years. Now he says he cannot.'],
  ['B', 'He cannot. Mr Ayoub set it in September, for every customer.'],
  ['A', 'And you think that is right?'],
  ['B', 'I think it is right, and I will tell you why rather than hiding behind him. Fadi is alone in a van with other people\'s money and no safe. If something goes missing between your shop and our office, the only person who cannot prove anything is Fadi. ⚠ The rule protects him from us, not us from you.'],
  ['A', 'Nobody put it like that.'],
  ['B', 'Nobody put it at all, which is the fault. The letter went to you and not to him, and he had been carrying your cash for four years without knowing he should not.'],
]));
out.push(note('⚠ Role card 1 is the one where the four moves are used **in agreement**, and it is the harder performance. The second move becomes *I think it is right, and here is why*, and the reason has to be about the person the rule protects. ⚠ Learners who can only use the moves to distance themselves from a rule have learned half the cycle.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick the four moves and name the missing one. **Typical errors:** _he said that it must to be thirty days_ · _I am afraid that is the policy and I cannot to help_ · _he has set it for everybody without exceptions_ (acceptable, but *without exception* is the idiom) · and the content fault, which is the missing third move. ⚠ *And I said so* is omitted by almost everybody, because it is the only one that costs anything.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The rule', 'Owner and date', 'What I think, and whether I said so', 'The route upwards'], [
  ['Thirty-day supplier terms', 'Mr Ayoub, Sept', 'wrong for Ms Shamsi specifically; said so in writing 24 Aug', 'write to him; I will send my paragraph'],
  ['No cash with drivers', 'Mr Ayoub, Sept', '**right**, and I would say so — it protects Fadi', 'no route needed; I would defend it'],
  ['Minimum order 100,000', 'Mr Ayoub, 2024', 'too high for Ghouta; said so and was overruled', 'write to him; he knows my view'],
], [1.2, 1, 1.9, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The rule is thirty-day terms. Mr Ayoub set it in September for every supplier. I think it is wrong for one supplier specifically, I said so in writing on 24 August, and it still stands."', '⚠ Count the rules the room disagrees with and has **never said so** about. Those are the rules being enforced with *I am afraid it is the policy* — and the twenty minutes of argument are being spent somewhere, by somebody, every week.']));
out.push(stage('5', 'Read'));
out.push(p('1 Two reasons: so the supplier does not reasonably assume the change was about her (it went to eleven suppliers the same day), and so that she can tell the difference between a rule being carried and a judgement being made.  2 She will not say she agrees with it — otherwise the supplier would later hear from Mr Ayoub that the terms were deliberate and considered, and would not know which of them to believe about anything.  3 The October invoice goes in the first payment run of the month rather than the last, six working days earlier; and she will ask again at the year end.'));
out.push(note('⚠ The attachment is the move to point out: *I have attached what I wrote.* An opinion you can produce is evidence and an opinion you report is a kindness, and the difference is what stops the letter being read as ordinary commercial sympathy.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**To Mr Haffar. 9 November. The new minimum order.**',
  'Dear Mr Haffar,',
  'From 1 November, orders below 100,000 carry a delivery charge of 4,000. **Mr Nassif set the figure and it is not mine.**',
  '⚠ **You asked me what I think, so I will tell you.** I think 100,000 is too high for your street specifically. You order every week, you have never sent anything back, and your street is on the route whether you order or not, so the marginal cost of your drop is close to nothing. I put that to him on 20 October, before the change went out, and I have attached what I wrote. **The charge still stands.**',
  'I am telling you this so that you do not assume the change is about you — it went to about thirty customers on one day.',
  '**If you want to put it to him, do**, and I will send you my October paragraph to attach.',
  '**Meanwhile, what is mine.** Your Thursday drop can move to the Tuesday run, which puts you above the minimum by combining two weeks, and that is mine to decide.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The owner and the date, in the first paragraph', '✓'],
  ['What the writer thinks, **and that they said so**', '✓ with the paragraph attached'],
  ['The route upwards, with the writer\'s own paragraph offered', '✓'],
  ['Something given that is the writer\'s own to give', '✓ the Tuesday run'],
], [5, 1]));
out.push(note('⚠ The last line of that sample is the best thing in it: the writer cannot change the rule and has found a way for the reader to be on the right side of it. ⚠ That is worth more to a customer than agreement, and it is available far more often than learners expect.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what I will not do* paragraphs read out. **Ask which writer the class would believe the next time** — and make the inference explicit: a person who will not claim agreement is the only person whose agreement is worth anything.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'We will not quote in writing for anybody who has not ordered before. Mr Nassif set it after 2019, when we quoted forty jobs in a year for a man who was collecting prices for somebody else.',
  'I think it is wrong, and I have never said so to him. I think it is wrong because it costs us about one real customer a month — people who are new, cautious and want a piece of paper, and who go to the yard on the next street and get one.',
  '⚠ The reason I have never said so is not fear. It is that I would be asking him to re-open the one thing that happened to him personally, and I have been putting it off for three years on the grounds that there is never a good week for it.',
  'What I say to the customers is *I am afraid we cannot*, which is the sentence this unit told me not to use.',
]));
out.push(note('⚠ The last line is the best outcome 6.6 can produce, and it is not a correct answer — it is a learner catching themselves. ⚠ Mark it highly and do not resolve it for them; the honest finding is that the third move is the expensive one, and the unit\'s claim is only that the cost is smaller than it looks.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the reason they disagree_ — "about one real customer a month"   ✓ _the owner named, and the rule reported not owned?_ — yes   ? _have they ever said so upwards, and if not, why not?_ — "no: it would mean re-opening the thing that happened to him"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually one writer in three has said so upwards. ⚠ **The useful conversation is about what stopped the other two**, and the answer is rarely fear: it is that nobody ever asked them, that the rule came from something personal, or that there is never a good week. ⚠ All three are addressable, and *be braver* addresses none of them.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I wrote the paragraph about the quoting rule — four lines, with the count of the customers we have turned away this year. ⚠ I have not sent it. I have put a date on it instead, which is the Thursday after the year end, when he looks at terms anyway and it will not be about 2019.']));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: what do these terms actually require?'));
out.push(stage('1', 'Get ready – Unit 6 quiz'));
out.push(p('**1** *Must* is ours — the company\'s or the speaker\'s. *Have to* is outside — the law, the bank, the insurer, the customer. ⚠ And most rules are half a rule.  **2** Because it is an instruction to guess where the line is: it removes a duty without saying where the duty resumes. **The figure, then both halves.**  **3** **A figure and a thing.**  **4** Put it up with the figures · say what has been decided before in similar cases · **give what is yours today, in writing**.  **5** Name the owner and the date · say what you think · say that you said so · and enforce it anyway. Then offer the route upwards.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Clause 9 — *no cash or other payment shall be accepted by the carrier* — which Nour had down as the office\'s and which falls on Fadi.  2 What to do when the money is **already in his hand** and the man is seventy and will be hurt: *they say you must not accept it; they do not say what to do when it is already in your hand*.'));
out.push(note('⚠ The exchange establishes that clause 9 has been breached about twice a month for a year by somebody who was never sent the terms. ⚠ Make sure the class places the fault where Nour places it — on whoever sent four pages to the customers and nothing to the driver — and notice that she does so in the same breath as discovering it, without a pause.'));
out.push(p('**Language box – Practise (sample):**  _Almost none of it is yours. Clause 4 is yours and clause 9 is yours. What do you do now? … Then clause 9 has been breached twice a month and nobody told you it existed. And when the money is in your hand, the terms do not say — so until they do: _ ⚠ _whatever interim instruction the learner writes, with their own name on it._'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'Clause 11: no goods shall be left without a signature.'],
  ['B', 'The shop on the corner is shut half the time. I leave them with the pharmacist next door.'],
  ['A', 'How long have you been doing that?'],
  ['B', 'Two years. Nothing has ever gone missing and the pharmacist signs for them.'],
  ['A', 'He signs?'],
  ['B', 'In his own name. I have two years of signatures from a man who does not work there.'],
  ['A', 'Then you have been complying with the clause and breaching it at the same time, and the terms do not say whether a neighbour\'s signature counts. ⚠ Until they do: keep doing it, keep the signatures, and write the pharmacist\'s name on the sheet rather than just a signature — that is mine, not the terms\'.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the clause, what the person does now, and the missing alternative, then say whose fault the breach is. **Typical errors:** _it does not say who I tell to_ · _and when I can not?_ · _almost none of it is your_ · and the content fault, which is explaining all four pages instead of two clauses.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'Which clauses were theirs', 'What they do now', 'The missing alternative'], [
  ['Fadi (driver)', '4 and 9', 'takes cash from Mr Haffar about twice a month and brings it in', 'what to do when it is already in his hand — the terms do not say'],
  ['Hala (counter)', '12 and 14', 'settles telephone complaints the same day and writes nothing', 'whether a same-day settlement needs the written notice at all'],
], [1, 1.2, 1.4, 1.5]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"Of seventeen clauses, two were his. He has been taking cash about twice a month for a year, nobody had ever told him clause 9 existed, and the terms do not say what to do when the money is already in his hand."',
  '⚠ **The unit\'s mediation, named as the sixth unit of this book:** a rule is written by somebody with authority and carried by somebody without it, and the person who carries it is the only person who knows where it cannot be obeyed — **which is why the four pages go to the customers and never to the driver.**',
  '⚠ Ask the class who received their workplace\'s terms of business. In most companies it is the customers and the file, and the people the clauses fall on have never seen them. ⚠ That is a distribution failure and not a training failure, and it is fixed in an afternoon by whoever notices.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 6)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'b', 'c', 'b', 'c', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Q3 is the item the unit has been building to: *no payment **must not** be accepted* is the prohibition, and the distractor *does not have to* is the exact confusion of 6.2 in an examination. ⚠ Q7 is the hardest — *a shortage recorded on our gate sheet **requires no** notice* — and rewards learners who read the whole sentence rather than the gap. ⚠ Q8 tests *waive* against *enforce*, and a learner who chooses *enforces* has read clause 17 backwards: it is the clause that preserves the customer\'s rights, not the one that imposes them.'));
out.push(stage('6', 'Write with help – sample (41 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Fadi — clause 9 requires you to refuse any cash a customer offers. It does not say what to do when it is already in your hand. Until it does: bring it in, write it on the gate sheet, and tell me the same day. That is mine, not the terms\'.',
]));
out.push(note('⚠ That sample is 48 words and must be cut. ⚠ The cut is *write it on the gate sheet*, which is the one instruction the reader already follows — and making the class find that cut teaches more about Part 1 than any advice about counting.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The clause and what it requires', '✓'],
  ['The case it does not cover', '✓ the money already in his hand'],
  ['An interim instruction, owned by the writer', '✓ *that is mine, not the terms\''],
  ['35 to 45 words — count them', '✗ 48 at the first attempt'],
], [5, 1]));
out.push(note('⚠ The third line is the one to insist on. An interim instruction with the writer\'s name on it is not an invented rule — it says what to do until somebody decides, and it is the only honest thing available to a person standing in a yard with a clause that does not cover them.'));
out.push(stage('7', 'Write freely – sample (131 words)'));
out.push(sample(null, [
  'I am authorised to sign credit notes up to 250,000 and purchase orders up to 500,000, subject to a countersignature above either. I may not sign a payment out at any figure, because I raise the paperwork; Nadia signs those up to 500,000 and above that it is two signatures.',
  'The figure nobody has written down is the counter discount, where I work to about ten per cent and nobody has ever said ten. ⚠ Ten per cent of a pallet is more than my credit-note limit, which means the unwritten authority is larger than the written one.',
  'The rule I carry and did not write is the thirty-day supplier terms. Mr Ayoub set them in September for everybody. I think they are wrong for one supplier, I said so in writing before they went out, and they still stand.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I took the terms to Fadi and to Hala. Between them they found three clauses that fall on them and two that give no alternative. ⚠ Neither of them had ever seen the document. Mr Ayoub has agreed that the next version goes to the staff on the day it goes to the customers.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 6 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'b', 'a', 'b', 'a', 'a']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 1 and 2 must be marked as a pair: they are the same sentence shape with the source reversed, and a learner who gets one and not the other has guessed. ⚠ Questions 3 and 4 are the unit\'s conceptual item — *don\'t have to* below the figure and *mustn\'t* above it — and a learner who reverses them has the grammar and not the idea, which is worth a line of feedback rather than a mark.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What is asked for', 'From / to', 'The counted evidence', 'The awkward reason', 'Not being asked for'], [[
  'the credit-note ceiling raised, for Nour, Nadia and Hala', '100,000 to 250,000', '61 credit notes, 43 above the ceiling, none wrong in amount', 'nine signed above the limit in six weeks, all correct, from a half instruction', 'a payment-out authority, discounts, and the countersignature above the ceiling',
]], [1.3, 0.9, 1.5, 1.6, 1.5]));
out.push(note('⚠ The third gap wants **two** of the three numbers for the mark. The fourth wants both halves — nine above the limit **and** all correct — because the awkwardness and the evidence are the same fact, and a learner who writes only *Hala broke the rule* has heard the confession and missed the argument.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (61 words)', ['I am authorised to sign credit notes up to 250,000 and to raise purchase orders up to 500,000, in both cases subject to a countersignature above the figure. I must not sign a payment out at any figure; Nadia signs those and above 500,000 it is two signatures. The figure nobody has written down is the counter discount, where I work to about ten per cent.']));
out.push(box('Marking the Unit 6 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Two authorities with **figures** (2) · *am authorised to* / *up to* / *subject to* used correctly (2) · one *must not … alone* with the owner named (2) · one unwritten figure identified (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for figures are this check\'s version of Unit 4\'s numbers and Unit 5\'s sources. **An authority with no figure scores nothing**, however well formed — *I am authorised to sign credit notes* earns 0 of those 2. Say so before they write; the point is not to catch them.',
  '⚠ The *must not … alone* marks require **the owner**. *I must not sign a payment out* is half the answer; *Nadia signs those* completes it. A prohibition with no owner leaves the reader nowhere, which is the whole of 6.4.',
  '⚠ Give the last mark for any honestly identified unwritten figure, including *I do not know what my limit is*, which is a correct and useful answer and should be said so in writing on the script.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 6**'));
out.push(p('**1 _Mustn\'t_ taught as a stronger _don\'t have to_.** Almost every learner arrives with these two as a pair on a scale, and they are not on a scale: one removes a duty and the other creates a prohibition. ⚠ Do not teach the difference as a nuance of strength. Draw a line with a figure on it, put *don\'t have to* below and *mustn\'t* above, and give both halves every single time for the rest of the course. The error that matters is not *you don\'t must* — it is a correctly formed *don\'t have to* on the wrong side of a figure, which is what cost Sham Trading six weeks.'));
out.push(p('**2 The authority with no figure.** *I can authorise small amounts* will survive into cycle 6 and into the check unless it is marked. ⚠ The sentence that lands is not about precision but about protection: **a written limit is the only thing that can defend you**, because without it the question after a problem is your judgement rather than arithmetic. ⚠ Learners resist this at first and then produce the figures immediately once they hear it, in my experience faster than any other point in Book 1.'));
out.push(p('**3 _I am afraid it is the policy_.** It is the default sentence of everybody who has ever worked a counter, and 6.6 asks learners to give it up for something harder. ⚠ The argument that works is practical and not ethical: the policy sentence makes the rule sound like weather, nobody argues with weather, so they argue with **you** instead — for twenty minutes, to the same conclusion. ⚠ Ask the class to estimate how many of those twenty-minute arguments they have each week, multiply it out, and let the number do the work.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 6 · Answer Key');
