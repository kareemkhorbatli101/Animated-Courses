// Proactive Business English B1 · Syria Edition · Book 1 · Unit 11 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 11  Defining and Adding'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This is the only unit in Book 1 whose subject is a punctuation mark, and it is in the book because of money and not because of grammar.** *We will replace any item which is faulty* and *we will replace any item, which is faulty* are one comma apart and promise different things, and the second promises to replace a whole order.',
  '⚠ **Nobody makes this error through carelessness and the key says so four times.** In speech there is a small pause before a relative clause and **the pause is right**; the fault is the gap between what a voice does and what a page does. ⚠ A class told it is careless will defend its sentences; a class told it is a gap between two systems will test them.',
  '⚠ **The one danger in teaching this unit is over-correction.** By 11.5 learners start removing commas from sentences that need them and inserting *which* into sentences that are already correct. **Three stages are built to catch that** — 11.4\'s role card 2, 11.5\'s role card 2 and the marked-sentence page in 11.5 — and in each of them the right answer is *nothing is wrong*. ⚠ Do not skip them.',
], C.grey, C.navy));

// ===================== 11.1 =====================
out.push(h2('11.1  The customer who pays on delivery'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Ask the class to say how many customers each description fits before anybody answers; that converts the exercise into the cycle.'));
out.push(p('**b**  The second. The first, with its comma, is an addition about a customer already identified — and since nobody has been identified, it is not a sentence at all.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *The customer who has not paid since September* — and Hala understood it as any of four, so she telephoned the first in the book, who had paid in cash.  2 ⚠ **Count what is left.** Not *does it sound clear* — count. *A defining clause is right when the count is one, and nothing else tells you.*'));
out.push(note('⚠ Nadia\'s second point is the one learners need most: *a plural you have hidden inside a singular is the thing that sent Hala to the wrong telephone number.* ⚠ *The customer who…* with four candidates is not merely vague; it asserts that there is one, which is a false statement the writer did not notice making.'));
out.push(p('**Language box – Practise (samples):**  1 _the customer with a standing order who has not paid since September_ — one.  2 _the invoice which was priced from the list of the 5th_ — one; *the wrong invoice* — three.  3 _the delivery which was refused at the door_ — one; *the late delivery* — eleven.  4 _the member of staff who covers the Saturday counter_ — one.  5 _the store room which holds about 900 cartons and has not been entered since August_ — one; *the room that has not been done* — two.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'You said to find the invoice that was wrong. There are three.'],
  ['A', 'Three?'],
  ['B', 'Tarabishi 46,000 over, the school 8,000 under, and one with no reference at all. I pulled the school one because it was on top.'],
  ['A', 'I meant the one priced from the old list.'],
  ['B', 'Then that is a clause and you gave me an adjective. ⚠ *The wrong invoice* is three. *The invoice which was priced from the list of the 5th* is one.'],
  ['A', 'And I have had you pull the one that is 8,000 under, which nobody has complained about.'],
  ['B', 'And which I have now queried with the school, who did not know.'],
]));
out.push(note('⚠ The last line is worth noticing: the ambiguous instruction did not merely waste time — it opened a query with a customer about an error in the customer\'s favour. ⚠ Ambiguous instructions do not produce inaction; they produce confident wrong action, which is more expensive.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the first clause and its count, then the clauses that bring it to one. **Typical errors:** _the customer, who has not paid, is Tarabishi_ (commas round a defining clause) · _the customer that has not paid_ (*that* for a person in careful writing) · _the customer which has not paid_ · and the content fault, which is adding adjectives (*the wrong one*, *the late one*) instead of clauses. ⚠ An adjective cannot count down to one.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The instruction', 'The clause I would have used', 'How many it leaves', 'The clause that leaves one'], [
  ['telephone the unpaid customer', 'the customer who has not paid since September', '**4**', 'the customer with a weekly standing order who has not paid since September'],
  ['find the wrong invoice', 'the invoice which was wrong', '**3**', 'the invoice which was priced from the list of the 5th'],
  ['count the room nobody has done', 'the room which has not been entered since August', '**2**', 'the room which holds about 900 cartons and has not been entered'],
  ['chase the late supplier', 'the supplier who is late', '**2**', 'the supplier whose October delivery has not arrived'],
], [1.3, 1.6, 0.8, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would have said *the customer who has not paid since September*. That leaves four. The one that leaves one is *the customer with a weekly standing order who has not paid since September*."', '⚠ Count the instructions in the room that left more than one. ⚠ **Then ask what each would have caused** — and the answer is always somebody doing the wrong thing confidently, which is the cost of ambiguity that nobody budgets for.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because *the customer who has not paid since September* fits **four** accounts, and the fault was in the sentence and not in the telephoning.  2 That one of the four owes **nothing**; that one has not paid since **July** and so does not fit the clause at all; and that the two that do fit are on **different terms**, ⚠ *so they are not even the same kind of problem*.  3 *Telephone Mr Haffar — the weekly standing order, 1,240,000, thirty days, nothing since 2 September* — ⚠ **a name, a figure and a date, which is what a defining clause is trying to be and never does as well.**'));
out.push(note('⚠ That last observation is the practical conclusion of the whole cycle and it is worth putting on the board: **the best defining clause in a working document is usually a name.** ⚠ Learners finish 11.1 thinking the lesson is to build longer clauses; the lesson is to notice when a clause is a substitute for information you already have.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**JOBS NOT COLLECTED. Prepared 1 December. ⚠ Five jobs, not one.**',
  '**Why this is a list and not a sentence.** On 27 November I asked Rami to telephone *the customer whose job has not been collected*. **There are five.** He telephoned the first on the rack, whose job was collected on the 20th and who still has the receipt. ⚠ **The fault was in my sentence and not in his telephoning.**',
  'Mr Daher | the one **whose** job was collected on the 20th | ⚠ **nothing outstanding**',
  'The mosque | the one **which** is waiting for galvanising, not for collection | not ours to chase',
  'Mr Attieh | the one **whose** job has been cut and not invoiced | 180,000',
  'The school | the one **which** was cut to the wrong size and recut | ready since the 24th',
  'Mr Saab | the one **whose** job is finished, invoiced and unpaid | 410,000',
  '⚠ **What the table shows that my sentence hid.** One has nothing outstanding. One is not waiting for collection at all. And of the three that are, one is uninvoiced, one is unpaid and one is simply ready — **three different problems in one clause.**',
  '**What I should have written.** *Telephone Mr Saab — finished, invoiced 410,000, unpaid since 12 November.*',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Why it is a list and not a sentence', '✓'],
  ['A clause for each row that fits only that row', '✓ five'],
  ['What the original sentence hid', '✓ three different problems'],
  ['The name-and-figure version that should have been written', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('What each sentence hid, read out. **Ask which omission would have caused the most trouble.** ⚠ Usually the row where somebody owes nothing, because that is the telephone call that damages a relationship rather than merely wasting a morning.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'In 2023 my father told me to stop the order for the man who had not paid. Two men had not paid. I stopped the wrong one.',
  'The one I stopped had been with us eleven years and had been late twice in that time, both times by a week. The one he meant had been with us four months and owed for three orders. I stopped eleven years of trade and let the other order go out.',
  'The eleven-year customer telephoned my father directly, which is how it was found, and my father said to me that he had told me which one. He had not. He had told me *the man who had not paid*, which was two men.',
  '⚠ **What the instruction should have contained is a name, and the reason it did not is that he knew which one he meant.**',
]));
out.push(note('⚠ The last clause identifies the mechanism exactly: the speaker always knows which one they mean, so the clause feels complete to them. ⚠ That is why the test must be a count performed by the writer, not a judgement about clarity — the writer\'s sense of clarity is the thing that is broken.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what was actually done_ — "stopped an eleven-year customer\'s order"   ✓ _defining clauses without commas?_ — yes   ? _how many things did the original instruction fit?_ — "two, and the speaker knew which"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually two of three writers were blamed for acting on the instruction. ⚠ **And in all three the instruction was the fault**, which is worth saying plainly: the person who acts on an ambiguous instruction has done nothing wrong, and the person who gave it is usually the one who decides whose fault it was.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I was about to write *collect the sheet that came back*. Two came back this week. ⚠ Counting took five seconds and the instruction is now *collect the 2 mm sheet that came back from the hotel site on the 26th*, which fits one and cost me eleven words.']));

// ===================== 11.2 =====================
out.push(pb());
out.push(h2('11.2  Ms Shamsi, who has supplied us for eleven years'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Most learners will produce the non-defining form correctly in speech and punctuate it as defining on paper.'));
out.push(p('**b**  The first says the company has several suppliers and this is the Aleppo one. The second names her and adds a fact.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 That the company has **several** suppliers and that this one is distinguished by being in Aleppo — ⚠ *which is true and is not what you meant*.  2 ⚠ That *you have already identified her and are adding a fact* — **name first, then add, and if you cannot name, you are defining and the commas have to come out.**'));
out.push(note('⚠ The disclosure point is the half of this cycle that learners find surprising: *our supplier who is in Aleppo invites them to ask about the other eight* — ⚠ and two of the eight turn out to be the same company under two names. The relative clause did not reveal that; it invited the question that would.'));
out.push(p('**Language box – Practise (samples):**  1 _Ms Shamsi, who supplies our packaging from Aleppo, …_  2 _Our second site, which opened on 8 June, …_  3 _Mr Haffar, who has the largest standing order, …_  4 _Hala Mourad, who covers the Saturday counter, …_  5 ⚠ _The fourth store room, which has not been entered since August, …_ — and if there were two uncounted rooms this would be **defining** and the commas would come out, which is the point of the item.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Your letter says *our site which opened in June has traded every week*.'],
  ['A', 'It has.'],
  ['B', 'How many sites do we have?'],
  ['A', 'Two.'],
  ['B', 'And how many opened in June?'],
  ['A', 'One.'],
  ['B', 'Then with no commas you are distinguishing one site from others by its opening date, which tells the bank to ask how many we have and when each opened. You meant *our second site, which opened on 8 June, has traded every week*.'],
  ['A', 'So the commas say I have already identified it.'],
  ['B', '⚠ Name first — or *second site*, which is a name of a kind — then add.'],
]));
out.push(note('⚠ *Our second site* is an identifier even though it is not a proper name, and that is worth pointing out: the test is not whether a capital letter is present but whether the reader already knows which one you mean before the clause arrives.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both versions and what each implies. **Typical errors:** _Ms Shamsi, that is in Aleppo,_ (*that* in a non-defining clause, which is impossible) · _Ms Shamsi, who is in Aleppo has raised her price_ (⚠ **one comma instead of two** — the commonest punctuation error in business writing) · _Ms Shamsi which is in Aleppo_ · and the content fault, which is defending the no-comma version on the grounds that it is true. ⚠ It is true. That is not the test.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Defining or adding?', 'Punctuated right?', 'The repair'], [
  ['Our supplier who is in Aleppo has raised her price.', 'meant as **adding**', '**no**', 'Ms Shamsi, who supplies from Aleppo, has raised…'],
  ['Our second site, which opened in June, trades six days.', 'adding', '**yes**', '⚠ nothing'],
  ['The customer, who has the standing order, has not paid.', 'meant as **defining**', '**no**', 'The customer who has the standing order has not paid.'],
  ['Mr Jaber, who carries the northern route, has not changed his rates.', 'adding', '**yes**', '⚠ nothing'],
  ['The member of staff who covers Saturdays has asked for a change.', 'adding (there is one)', '**no**', 'Hala, who covers Saturdays, has asked…'],
], [2, 1.1, 0.9, 1.8]));
out.push(note('⚠ Two of those five need no repair, and the table is built that way deliberately. ⚠ A learner whose five sentences all need repairing has probably mis-marked one, and the quickest way to see it is to ask whether the reader can name the thing before the clause arrives.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I wrote *our supplier who is in Aleppo*. That is meant as adding, so it needs two commas and a name. What it implied was that we have several suppliers and this is the Aleppo one."', '⚠ Count the sentences in the room with **one comma instead of two**. ⚠ It is the commonest error and it leaves a sentence that cannot be parsed — the reader meets a parenthesis that never closes and has to guess where the main clause resumes.']));
out.push(stage('5', 'Read'));
out.push(p('1 That they have several **suppliers** and one is in Aleppo; several **hauliers** and one serves the north; several **standing orders** and one is the largest. ⚠ All three are true, and the haulier matters because there are two and one is the same man under a trading name.  2 Because *three names, three facts, and nothing about how many of anything we have* — ⚠ *a reader who wants to know how many hauliers we use now has to ask*, and the answer can then be given in a sentence written for the purpose.  3 ⚠ *The error is not in my thinking; it is in the gap between what my voice does and what the page does* — in speech the commas are a pause and the writer would have paused.'));
out.push(note('⚠ Question 3 is the most important sentence in the unit for a teacher. ⚠ **The error is systemic, not personal**, and it is worth repeating every time a learner produces it, because learners who believe they have been careless stop trusting their own ear — and their ear is right. What they need is the page test, not more care.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**Extract from a letter to the insurer, 2 December — the premises paragraph, written twice.**',
  '⚠ **The version I nearly sent.** *Our workshop which is on the Homs road holds the cutting machinery and our store which is behind it holds finished work. The man who holds the keys lives on the premises.*',
  '⚠ **What that told the insurer, none of it on purpose.** That we have more than one workshop. That we have more than one store. And that we have more than one keyholder — **which is the opposite of the truth and the opposite of what an insurer wants to hear**, because one keyholder living on site is a point in our favour and several is not.',
  '**The version I sent.** *Our workshop, which is on the Homs road, holds the cutting machinery, and the store behind it holds finished work. Khalil, who holds the only set of keys, lives on the premises.*',
  '⚠ **Why it is better and not merely tidier.** Three facts and nothing about quantities. **And the keyholder sentence now says what I wanted it to say**, which is that there is one man with one set of keys and he is there at night.',
  '⚠ **And one thing I have learned.** I would have said the first version aloud without a second thought, and an underwriter would have read it as three disclosures.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The bad version quoted in full', '✓'],
  ['What it revealed, listed', '✓ three quantities'],
  ['The good version: name first, then add, two commas', '✓'],
  ['The mechanism named — speech pauses, the page commas', '✓'],
], [5, 1]));
out.push(note('⚠ The keyholder sentence in that sample is the best illustration in the key of why this matters commercially: *the man who holds the keys* implies several keyholders, and **one keyholder is the fact the insurer would price favourably.** ⚠ The punctuation did not merely blur the sentence; it threw away an advantage.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what that told the reader* paragraphs read out. **Ask which accidental disclosure was the largest.** ⚠ The ones that cost something are nearly always about **quantity** — how many sites, suppliers, keyholders, vehicles — because a defining clause after a plural noun is a statement about how many there are.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'We wrote to a customer in 2022 saying *the man who deals with your account is away until the 14th*. There is one man. It is me.',
  'He read it as meaning we had several people and his was away, and he telephoned asking to speak to somebody else who dealt with accounts. There was nobody else. The woman who took the call said *there is only Rami*, and he said that was not what the letter said.',
  '⚠ It cost nothing in money and it cost a small amount of something else: he had believed we were larger than we are, and the letter and the telephone call together told him we were smaller, in one afternoon, by accident.',
  '**I would have said that sentence out loud to his face and it would have been perfectly clear, because I would have paused.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what was revealed_ — "that there is only one person on accounts, discovered by contradiction"   ✓ _defining and non-defining punctuated correctly throughout?_ — yes in the retelling   ? _would the writer have said it out loud?_ — "yes, with a pause, and it would have been clear"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three writers would have said the same thing out loud quite happily. ⚠ **The disclosure is an accident of punctuation and not of judgement** — and that is the sentence to close the cycle on, because it tells the class exactly where to apply effort: at the page, not at the thinking.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I read a letter I sent last month without its relative clauses. What was left was: *our workshop holds the machinery and our store holds finished work; the man lives on the premises.* ⚠ All of it true, and the third one needed a name — *the man* with no clause is worse than either version.']));

// ===================== 11.3 =====================
out.push(pb());
out.push(h2('11.3  Whose, where, when'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *whose* to be avoided for things; learners reach for *of which*, which is correct and heavy.'));
out.push(p('**b**  *the branch where the stock is held* — ⚠ and *where* has already done the work of the preposition, so *in it* must not be added.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That the yard **probably** counts as the premises, and ⚠ *probably is doing a great deal of work in a sentence about five hundred cartons* — while wrap standing at Ms Shamsi\'s is **not covered at all**.  2 That *whose* relates by **possession**: *stock whose property in the goods has passed to the insured* follows the ownership wherever it is — ⚠ **and for stock in transit the difference is the whole policy.**'));
out.push(note('⚠ The line to put on the board: *the clause reads as though it is about our stock and it is actually about our addresses.* ⚠ A relative pronoun decides what a clause is **about**, and in a fifteen-word insurance clause it is the smallest word and the only one that matters.'));
out.push(p('**Language box – Practise (answers):**  1 **whose** — *stock whose property has passed to us* follows the goods; *where it is held* follows the place.  2 **whose** — *a pallet whose base is split*, and ⚠ learners will offer *of which the base is split*, which is correct and heavier.  3 **where** — and the clause is then about addresses.  4 **when** — *the week when the generator failed*, with a time noun in front.  5 **whose** — *an invoice whose reference is missing*.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The guarantee covers *goods whose fault appears within twelve months*.'],
  ['B', 'Which is a twelve-month guarantee.'],
  ['A', 'Twelve months from when?'],
  ['B', 'From the sale. Obviously.'],
  ['A', 'The clause does not say the sale. It says the fault appears within twelve months — ⚠ **of appearing**, which is a circle.'],
  ['B', '…So a fault appearing in month eleven on something we sold in 2021 is covered.'],
  ['A', 'By that clause, yes. And the intended wording is *goods whose date of sale is within twelve months*.'],
  ['B', 'Has anybody claimed on it?'],
  ['A', 'Once, and we honoured it and thought we were being generous. ⚠ **We were complying.**'],
]));
out.push(note('⚠ Role card 2 is the sharpest item in the cycle because the clause is **circular** rather than merely misdirected, and the company has already paid a claim under it believing it was a goodwill gesture. ⚠ *We were complying* is the line to read aloud.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the clause follows and what it should follow, then the case where the difference costs money. **Typical errors:** _the room where the stock is held in it_ · _the branch which the stock is held_ · _the week which the generator failed_ · and _of which the base is split_ for *whose*, which is correct and should be accepted while *whose* is taught as the lighter option.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The clause', 'Follows the…', 'One case where it matters'], [
  ['stock held at the premises where the business is carried on', '**place**', '600,000 of wrap standing at a supplier is not covered'],
  ['goods in transit in a vehicle whose owner is the insured', '**ownership of the vehicle**', 'nothing on a hired lorry is covered'],
  ['any claim arising in the period when the premium is paid up', '**time of the claim**', '⚠ in our favour: a loss in a lapsed month is claimable'],
  ['risk passes on delivery to the premises where the customer trades', '**place**', 'a drop at a lock-up is not a delivery, so risk stays with us'],
], [2.2, 1, 2.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It says *stock held at the premises where the business is carried on*. That follows the place, so the wrap standing at Aleppo is not covered, and nobody has thought about it because the clause reads as though it is about stock."', '⚠ Count how many clauses in the room follow a **place** where they were meant to follow the **goods**. ⚠ It is the commonest of the three and the most expensive, because goods move and addresses do not.']));
out.push(stage('5', 'Read'));
out.push(p('1 Clause 4 follows **the place**; clause 9 follows **the ownership of the vehicle**; clause 12 follows **the time of the claim** and not the time of the loss.  2 **Clause 12** — and she points it out: ⚠ *I am pointing that out because it is in our favour and you may want to correct it, and I would rather it were corrected than relied on.*  3 By reading them, ⚠ *because Unit 11 of an English course made me ask what a relative pronoun was doing* — about **forty minutes**, and they have been in the policy since **2019**.'));
out.push(note('⚠ The clause-in-our-favour paragraph is what makes the whole note credible, and the reasoning is worth giving to the class: a note reporting only the clauses **against** you is a negotiating document, and a broker reads it as one. ⚠ A note that reports both is a reading, and it will be believed about the unfavourable ones.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**To the broker. 3 December. Two clauses, and what each follows.**',
  '**Clause 6 — machinery.** *Machinery situated at the insured premises **where** it is used in the business.* ⚠ **This follows the place and the use together.** So: the guillotine, covered. The portable welder, which goes to sites about twice a week — **not covered while it is out**, and it is out about eight days a month. Its value is 2.1 million.',
  '**Clause 11 — the period.** *Loss occurring during the period of insurance **whose** cause arises in that period.* ⚠ **This follows the cause and not the loss**, so corrosion that began before renewal and shows afterwards is excluded. **That is against us and it is reasonable**, and I am not asking for it to change.',
  '⚠ **One thing in our favour.** Clause 6 says *used in the business*, and the welder is used in the business wherever it is. ⚠ **I think that reading is available and I do not think it was intended**, and I would rather have a wording that says so than an argument at a claim.',
  '⚠ **What I am asking for.** A wording for clause 6 that covers portable plant away from the premises.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each clause quoted and what it follows stated', '✓'],
  ['What is in, what is out, with a figure', '✓ 2.1 million, eight days a month'],
  ['One clause that favours the writer, reported', '✓ and the writer declines to rely on it'],
  ['A specific replacement wording asked for', '✓'],
], [5, 1]));
out.push(note('⚠ *I think that reading is available and I do not think it was intended* is the most honest sentence in that sample. ⚠ It declines an argument the writer would probably win at a claim, in exchange for certainty now — which is a real commercial judgement and the kind of thing this course is for.'));
out.push(stage('6R', 'Share'));
out.push(p('The clause that favours each writer, read out. **Ask which writer the class would trust about the rest of the document.** ⚠ And then ask the harder question: would any of them have reported a favourable clause before this cycle?'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'Our lease has been in force since 2011 and I do not believe anybody has read it since my father signed it.',
  'I read one paragraph — the repairs clause. It says we must keep in repair *the premises, including all fixtures whose installation was carried out by the tenant*. We put in the three-phase supply, the extraction and the compressor base.',
  'So the extraction, which cost 1.8 million and is bolted to a wall we do not own, is ours to repair for as long as we are here — ⚠ and under the next sentence it becomes the landlord\'s property at the end of the lease, **because it is a fixture.**',
  '**We maintain it, we cannot remove it, and we do not own it, and all three of those come out of one word: *whose*.**',
]));
out.push(note('⚠ That is the cycle\'s best possible outcome: a learner reads one paragraph of a real document and finds a three-part consequence turning on a single relative pronoun. ⚠ The ending — *all three of those come out of one word* — should be read to the class.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they found_ — "the extraction is theirs to repair, cannot be removed, and is not theirs"   ✓ _whose / where / when used for the right relation?_ — yes   ? _how long has it been in force, and who signed it?_ — "2011, his father, and nobody has read it since"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually nobody has read the document since it was signed, ⚠ **and in all three cases it took under an hour to find something.** ⚠ That ratio — one hour against ten unread years — is the argument to leave the class with, and it does not require anybody to become a lawyer.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Our delivery terms say risk passes *on delivery to the address where the customer carries on business*. ⚠ It follows the place. Four of our regulars take goods at a site or a lock-up, so risk has never passed on any of those loads and we have been uninsured on about a third of our deliveries.']));

// ===================== 11.4 =====================
out.push(pb());
out.push(h2('11.4  The comma that changes a liability'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ They cannot hear the difference, and discovering that is the beginning of the cycle. Do not help them.'));
out.push(p('**b**  It promises to replace **any item** — the whole order — and adds the remark that every item is faulty on delivery.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Read the sentence without the clause.** If it still says what you meant, the clause is an addition and keeps its commas; if it now says something larger, the clause was defining and the commas come out.  2 ⚠ That they did **not** make a mistake about commas: *they typed what they would have said, and in speech there is a small pause there, and the pause is right.* **The page is what is unforgiving.**'));
out.push(note('⚠ Mr Attar\'s closing statistic is there to be used: *in six years of this work I have found that comma eleven times, and ten of them were in documents written by careful people.* ⚠ Say it before the class marks anything, because the first instinct of a learner who finds one in a colleague\'s work is to treat it as sloppiness, and the writer will then defend the sentence instead of testing it.'));
out.push(p('**Language box – Practise (answers):**  1 *any item, which is faulty* promises **every item**.  2 *all goods, which are inspected* promises that **all goods** are covered and claims that every one is inspected.  3 *every invoice, which is queried* promises something about **every invoice**.  4 *any customer, who pays on time* promises something to **every customer**.  5 *all stock, which is held at our premises* claims that **all** our stock is at our premises — ⚠ which, after 11.3, we know is false, since 600,000 of wrap is in Aleppo.'));
out.push(note('⚠ Item 5 is built to connect the two cycles: the comma version is not merely over-broad, it asserts something that 11.3 has already shown to be untrue. ⚠ Point that out — it is the moment the unit stops being about punctuation and becomes about documents.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'It says *our second site, which opened in June, trades six days a week*.'],
  ['B', 'Read it without the clause.'],
  ['A', '*Our second site trades six days a week.*'],
  ['B', '⚠ Does it still say what you meant?'],
  ['A', 'Yes. Exactly.'],
  ['B', 'Then the commas stay.'],
  ['A', 'I was going to take them out.'],
  ['B', '⚠ Everybody is, by now. **The test has two answers and we have only been using one of them.**'],
]));
out.push(note('⚠ Role card 2 is not optional. By this point in the unit a class removes every comma it meets, and the drill\'s whole purpose is to produce the answer **stay**. ⚠ *The test has two answers and we have only been using one of them* is the line to borrow.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence without the clause and then whether the commas stay or go. ⚠ For role card 2 the answer is **stay**. **Typical errors:** removing commas from a correct non-defining clause (⚠ by far the commonest at this point) · *we will replace any item, which is faulty* defended on the grounds that everybody knows what it means · and the content fault, which is applying the test to the clause instead of to the sentence without it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Without the clause, it says…', 'Commas: stay or go?'], [
  ['We will replace any item, which is faulty on delivery.', 'we will replace any item', '**go**'],
  ['All goods, which are inspected before dispatch, are guaranteed.', 'all goods are guaranteed', '**go** — unless that is what was meant'],
  ['Our second site, which opened on 8 June, trades six days.', 'our second site trades six days', '⚠ **stay**'],
  ['Mr Haffar, who has the largest standing order, pays in thirty days.', 'Mr Haffar pays in thirty days', '⚠ **stay**'],
  ['Any claim, which is made in writing, will be considered.', 'any claim will be considered', '**go**'],
], [2.2, 2.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It says *we will replace any item, which is faulty on delivery*. Without the clause it says *we will replace any item*, which is not what was meant, so the commas go."', '⚠ Count how many of the room\'s sentences promise more than their writers intended. ⚠ **Then count how many are in documents that have been sent to customers** — and ask, gently, whether anybody has ever relied on one.']));
out.push(stage('5', 'Read'));
out.push(p('1 **One comma.** With it the clause is an addition and the promise is to replace **any item** — the whole order. Without it the promise is to replace the faulty ones.  2 ⚠ *If any of you did read clause 8 as written and ordered on that basis, tell us and we will honour it as written. We think that is unlikely and we are not going to decide on your behalf that it did not happen.*  3 By the auditor, **reading clause 8 aloud** — and *nobody here had read it since it was typed, including the person who typed it*.'));
out.push(note('⚠ The offer paragraph is what distinguishes a correction from a quiet retraction, and the second half of it is the part that matters: ⚠ *we are not going to decide on your behalf that it did not happen.* Most corrections assume nobody relied on the error, which is probably true and is not the writer\'s to assume.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**CORRECTION TO OUR TERMS — clause 5. To all trade customers. 4 December.**',
  '**What clause 5 has said since 1 October.** *All work, which is to the customer\'s own measurements, is guaranteed against faulty workmanship for twelve months.*',
  '**What it should say, and now says.** *All work which is to the customer\'s own measurements is guaranteed against faulty workmanship for twelve months.*',
  '⚠ **What the difference is.** Two commas. With them, the clause is an addition and the guarantee covers **all work** — including standard stock items, which carry a three-month guarantee elsewhere in the same document and now contradict it. Without them it covers made-to-measure work, which is what was intended.',
  '⚠ **Why we are writing to you about two commas.** Because for nine weeks our terms gave a twelve-month guarantee on everything we sell, and **two of you bought stock shelving in that period.** ⚠ **If either of you read clause 5 as written, tell us and we will honour twelve months on those orders.**',
  '**What has not changed.** Twelve months on made-to-measure work. Three months on stock items. Faulty workmanship only, not damage.',
  '⚠ **And how it was found.** Reading the terms aloud to somebody who had not seen them. **Nobody here had read clause 5 since it was typed**, which was by me.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both versions quoted', '✓'],
  ['The difference explained, and what each version promises', '✓ and the internal contradiction named'],
  ['An offer to honour the wrong version', '✓'],
  ['What has not changed, listed', '✓ three items'],
], [5, 1]));
out.push(note('⚠ The best detail in that sample is the **internal contradiction**: the comma version gives twelve months on items that another clause gives three months. ⚠ A document that contradicts itself is the one case where the comma error can be found without the test, and learners should be told to look for it.'));
out.push(stage('6R', 'Share'));
out.push(p('The offer paragraphs read out. **Ask which notice they would rather receive as a customer.** ⚠ And ask the second question too: which notice would they rather their own supplier had sent them about something that had cost them money?'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'A notice at our gate says *all vehicles, which are the property of visitors, are parked at their owner\'s risk*.',
  'Without the clause it says all vehicles are parked at their owner\'s risk — including ours, which are parked there, and which are insured on a policy that assumes we are responsible for them. ⚠ **The notice disclaims liability for our own vans in our own yard.**',
  'It has been there since about 2015, screwed to the wall, laminated, and I have walked past it perhaps four thousand times.',
  'Nobody has relied on it, because nobody relies on a notice until something has gone wrong, and nothing has. ⚠ **But if a visitor\'s car were damaged by our forklift, the notice would be read aloud in the argument, and the first thing anybody would notice is that it covers our vans too — which does not help us at all.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what it promises_ — "it disclaims liability for the company\'s own vehicles"   ✓ _the four-second test applied and shown?_ — yes   ? _how long has it said that, and to how many people?_ — "since about 2015, to everybody who has come through the gate"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually nobody has relied on any of the sentences. ⚠ **That is luck and not design**, because nobody reads terms or notices until something has gone wrong — ⚠ which means the sentence is only ever read on the one day it matters, by somebody looking for an argument.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Eleven *any/all/every* sentences in our terms. Three failed the test. ⚠ One of the three is in our favour and I have corrected it anyway, because a clause that favours us by accident will be read out by the other side as evidence that the document was not drafted.']));

// ===================== 11.5 =====================
out.push(pb());
out.push(h2('11.5  The invoice I queried'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Everybody says the short version at work, and that is the right answer — the omitted object relative is natural and correct.'));
out.push(p('**b**  *the invoice which I queried* can lose it; *the invoice which was queried* cannot, because *which* is the subject of *was queried*.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 ⚠ **Look at what comes straight after the noun.** A person or a thing → the relative was the object and can go. A verb → it was the subject and must stay.  2 It means **nothing at all** — ⚠ *a missing subject relative produces a sentence nobody can read, so somebody queries it*, whereas *a missing comma produces a sentence everybody can read that means the opposite, and that is the one that costs money*.'));
out.push(note('⚠ That comparison is the cycle\'s whole justification and it inverts a learner\'s instinct. ⚠ **The loud error is the cheap one.** A broken sentence is queried within a day; a readable wrong sentence is never queried at all. Learners rank errors by how bad they look, and this cycle teaches them to rank by whether anybody will notice.'));
out.push(p('**Language box – Practise (answers):**  1 **can go** — object of *queried*.  2 ⚠ **cannot** — subject of *was queried*.  3 ⚠ **cannot** — subject of *telephoned*.  4 **can go** — object of *quoted*.  5 ⚠ **cannot** — subject of *left*.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The price we quoted holds for fourteen days.'],
  ['B', 'Nothing wrong with that.'],
  ['A', 'The order he placed is on the Thursday run.'],
  ['B', 'Nothing wrong with that either. Object relative, left out, correct.'],
  ['A', 'The man I telephoned has the receipt.'],
  ['B', 'Also correct. ⚠ Three out of three and I was about to put *which* into all of them.'],
  ['A', 'Why?'],
  ['B', 'Because we have spent an hour finding things wrong, ⚠ **and the test for a sentence is not whether I have just learned a rule about it.**'],
]));
out.push(note('⚠ Role card 2 exists for the same reason as 11.4\'s: by this stage a class is correcting correct sentences. ⚠ The drill\'s answer is that all three are already right, and B\'s last line is the one to borrow — *the test for a sentence is not whether I have just learned a rule about it*.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners mark each *object — can go* or *subject — must stay*. ⚠ For role card 2 all three are already right. **Typical errors:** inserting *which* into correct object-relative sentences (⚠ the commonest at this point) · _the customer telephoned on Tuesday wants a credit_ left unrepaired because it is read as two sentences · and the content fault, which is omitting a relative in a **non-defining** clause: ~~Ms Shamsi, I telephoned, has raised her price~~.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Object or subject?', 'Right as it stands?'], [
  ['The price we quoted holds for fourteen days.', 'object', '⚠ **yes**'],
  ['The order he placed on the 14th is on the Thursday run.', 'object', '⚠ **yes**'],
  ['The invoice was raised from the order carries no reference.', 'subject', '**no** — *which* must go back'],
  ['The customer telephoned on Tuesday wants a credit.', 'subject', '**no**'],
  ['The load left at 10.30 arrived at 4.20.', 'subject', '**no**'],
], [2.6, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I wrote *the price we quoted holds for fourteen days*. The relative was the object, so it can go — and it has gone, and the sentence is right."', '⚠ Count how many sentences in the room were already right. ⚠ **Say the number out loud**, because a class halfway through this unit has begun to believe that every relative clause it meets is broken, and that belief does more damage than the original errors.']));
out.push(stage('5', 'Read'));
out.push(p('1 **Four of the six** — the two object-relative sentences, the non-defining Ms Shamsi sentence, and the second object one. ⚠ Two of those four look careless to anybody who has just learned the rule.  2 The customer **replied asking what we meant, politely**.  3 ⚠ That the **broken** sentence reached one customer who asked, and the **readable, wrong** sentence reached thirty and nobody said a word: **the sentence that fails loudly is the cheap one** — ⚠ *which is why the four-second comma test matters more than anything else in this unit*.'));
out.push(note('⚠ This page is the unit\'s own ranking of its contents and it should be taken seriously in planning. ⚠ If a lesson has to be cut, cut 11.5 and not 11.4: the omitted-relative error announces itself, and the comma error does not.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**SIX SENTENCES FROM LAST MONTH, MARKED. For the workshop noticeboard.**',
  '*The sheet we ordered on the 3rd has not come.* | ⚠ **Nothing.** Object relative, correctly left out.',
  '*The job he collected on Friday was the wrong one.* | ⚠ **Nothing.** Object again.',
  '*The sheet was cut on Tuesday is 20 mm short.* | **Broken.** *Which* was the subject of *was cut*. Two verbs, one subject. ⚠ Rami queried it the same morning.',
  '*The man delivered the steel has not been paid.* | **Broken.** Same fault. ⚠ **This one went out in a letter** and the haulier telephoned to ask whether we meant him.',
  '*We will recut any sheet, which is short on delivery, free of charge.* | ⚠ **Readable and wrong.** It promises to recut **any** sheet. **Nobody queried it in seven weeks.**',
  '*Khalil, who holds the only keys, locks up at six.* | ⚠ **Nothing.** Name, then addition, two commas.',
  '⚠ **Why these are on a noticeboard.** Three of the six are perfectly correct and look wrong if you have just learned a rule. Two are broken and both were queried within a day. **One is readable, wrong, and went to about twenty customers in silence.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Six sentences, as they were actually sent', '✓'],
  ['At least two marked *nothing wrong*', '✓ three'],
  ['What happened to each in the real world', '✓'],
  ['The loud-failure and quiet-failure comparison', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('A sentence each writer marked *nothing wrong*, read out. **Ask whether they would have corrected it an hour ago.** ⚠ Most will say yes, and that is the honest and useful answer: the unit has given them a rule and the rule now needs a brake.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'We sent a letter in October that said *the consignment was dispatched on the 14th has not been received*. It went to the haulier.',
  'He telephoned within about two hours, perfectly friendly, and said he could not understand the sentence and could I tell him on the telephone what had happened. I told him and we sorted it out in four minutes.',
  'What it was supposed to say was *the consignment which was dispatched on the 14th has not been received* — one word.',
  '⚠ What I have thought since is that the broken sentence got me a telephone call in two hours, and a correctly written letter would have got a reply in about four days. ⚠ **I am not recommending it. But the error that cannot be read is the one that gets dealt with, and that is worth knowing.**',
]));
out.push(note('⚠ That conclusion is exactly right and should be praised rather than corrected. ⚠ The learner has arrived at the cycle\'s own point independently and is honest about its limits — *I am not recommending it* — which is the mark of somebody who has understood rather than memorised.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _who queried it and how quickly_ — "the haulier, in two hours, on the telephone"   ✓ _object and subject relatives handled correctly?_ — yes   ? _would a readable version of the same error have been queried at all?_ — "no — a correct letter would have taken four days"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three unreadable sentences were queried within a day. ⚠ **And in none of the three classes I have taught this to has anybody ever reported a readable wrong sentence being queried at all** — which is the comparison to end on, and it justifies the ranking the unit gives its own cycles.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Six sentences marked, three of them *nothing wrong*. ⚠ The hardest part was the three that were right: I had to stop twice and apply the test rather than my new instinct, which wanted *which* in all of them.']));

// ===================== 11.6 =====================
out.push(pb());
out.push(h2('11.6  One paragraph of terms, read twice'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ One reading is almost never enough, and the class will discover that before anybody explains it.'));
out.push(p('**b**  Because the comma test works on **one clause at a time**, and nobody applies it four times in a sentence they are hearing once.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That the first time it *sounded completely normal* — ⚠ **a reader hears the clause they expect.**  2 ⚠ **One clause per sentence in a paragraph of terms** — not because long sentences are bad, but because the test only works on one clause at a time.'));
out.push(note('⚠ Hala\'s last line is the cost: *I have been honouring quotations for about a month on the basis of the version I heard.* ⚠ The paragraph was not merely unclear — it had been **applied** in the form in which it was misheard, by the person whose job it is to apply it, for a month.'));
out.push(p('**Language box – Practise (sample for item 1):**  _**12.1** A written quotation is valid for fourteen days from the date on it. **12.2** A customer who holds a valid written quotation is entitled to the quoted price. **12.3** The entitlement applies to any order which is placed within the fourteen days. **12.4** After the fourteen days the current price list applies._ ⚠ **Four sentences, one clause each, definition first.**'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', '*Goods which are returned in their original packaging, which must be unopened, will be credited in full on any return, which is made within fourteen days.*'],
  ['B', 'So returns in the original packaging get a full credit within fourteen days.'],
  ['A', 'Read it again.'],
  ['B', '…*on any return, which is made within fourteen days.* With commas. So it is **any** return, and the clause merely remarks that they are all within fourteen days.'],
  ['A', 'And *which must be unopened* is also between commas.'],
  ['B', 'So the packaging condition is a remark too. ⚠ **As written, every return is credited in full, whatever its packaging and whenever it is made.**'],
  ['A', 'How would you write it?'],
  ['B', 'Three sentences. *Goods must be returned in their original, unopened packaging. A return must be made within fourteen days. A return which meets both conditions is credited in full.*'],
]));
out.push(note('⚠ Notice that B\'s rewrite converts two relative clauses into **two plain requirements** and keeps only one relative clause, in the third sentence. ⚠ That is the right instinct and worth naming: a condition is usually clearer as a sentence than as a clause, and the rewrite in this cycle is often a matter of removing relative clauses rather than repunctuating them.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what they heard first and what it says, then rewrite it in one clause per sentence and count the sentences. **Typical errors:** rewriting into shorter sentences that still carry two clauses each · keeping the definition inside a clause instead of putting it first · and the content fault, which is deciding the paragraph is fine because the room understood it — ⚠ they understood what they expected.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I read it to', 'What they heard first', 'What it says', 'My version, in sentences'], [
  ['Khalil', 'returns get a full credit if packaged and in time', 'every return is credited in full, whatever the packaging', '**3** sentences'],
  ['Samira', 'a quotation lasts fourteen days', 'any order at all gets the quoted price, for ever', '**4** sentences'],
], [1, 1.4, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Khalil heard that a return needs its original packaging and fourteen days. It says every return is credited in full whatever the packaging. My version is three sentences with one clause each."', '⚠ Count how many paragraphs in the room said something different from what everybody heard. ⚠ **Then ask how long each has been in use**, and the answers will be in years.']));
out.push(stage('5', 'Read'));
out.push(p('1 To the quoted price **on any order at all, with no time limit** — ⚠ and *read aloud, it sounds exactly like what we meant*, which is why it survived three months and two readings by its own author.  2 About **90,000** below list, on a November order honoured against an August quotation. ⚠ *She was right to, because that is what the clause said. The 90,000 is ours and she will not be asked about it again.*  3 ⚠ **An isolated error** — it is the second in three months, and the writer will read all nineteen clauses aloud to somebody who has not seen them and report what she finds *whether it is in our favour or not*.'));
out.push(note('⚠ The clearing of Mrs Mourad is the part to dwell on. ⚠ If the person who applies a clause as written can be criticised for it, then nobody will ever apply a clause as written again — they will apply what they think was meant, and the document stops governing anything. **Clearing her is not generosity; it is the only way the terms keep working.**'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**TERMS OF BUSINESS — clause 7, rewritten. Effective 8 December. ⚠ One clause per sentence.**',
  '⚠ **What clause 7 said until today.** *Goods which are returned in their original packaging, which must be unopened, will be credited in full on any return, which is made within fourteen days.*',
  '**What it says now.** **7.1** Goods must be returned in their original packaging, unopened. **7.2** A return must be made within fourteen days of delivery. **7.3** A return which meets 7.1 and 7.2 is credited in full. **7.4** A return which meets neither is at our discretion.',
  '⚠ **What was wrong, and it was not the length.** Three relative clauses and two of them punctuated as additions. Read as written, every return was credited in full whatever its packaging and whenever made. ⚠ **Read aloud it sounds like what we meant.**',
  '⚠ **What it has cost.** Rami credited a return in November that came back opened and nine weeks late, 220,000, because that is what clause 7 said. **He was right to, and the 220,000 is ours.**',
  '**Why it is now four numbered sentences.** So that each can be tested in four seconds.',
  '⚠ **One thing we are not claiming.** This is the second clause in three months. I am reading all of them aloud this week.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The old clause quoted in full', '✓'],
  ['The new one numbered, one clause per sentence', '✓ four'],
  ['That the old version sounded right', '✓'],
  ['The cost named and the person cleared', '✓ 220,000, and *he was right to*'],
], [5, 1]));
out.push(note('⚠ 7.4 in that sample is an addition the original did not have at all: *a return which meets neither is at our discretion.* ⚠ Rewriting for testability usually exposes a case the original never addressed, and that is a second benefit of the exercise worth pointing out.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what it has cost* paragraphs read out. **Ask which company they would rather work for.** ⚠ And ask the sharper version: which company would they rather apply a clause in, knowing they might be wrong?'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'Our overtime rule has been applied as everybody hears it since about 2018. It says *hours which are worked beyond thirty-eight in a week, which must be authorised in advance, are paid at time and a half*.',
  'What everybody hears is that authorised overtime gets time and a half. ⚠ **What it says is that all hours over thirty-eight are paid at time and a half, and that they all happen to be authorised** — because the authorisation clause is between commas.',
  'The difference has **saved** us money, not cost us, because we have been applying the stricter version — unauthorised overtime has been paid at flat rate, perhaps six or seven times a year.',
  '⚠ So correcting it costs us about 300,000 a year and nobody will thank me for raising it. **And if one of those six men ever reads clause 4, we will pay all of it anyway, with an argument attached.**'],
));
out.push(note('⚠ This is the uncomfortable case the stage is designed to produce and it must not be waved away. ⚠ The misreading has **saved** money; correcting it costs money; and the writer\'s argument for correcting it anyway is risk and not virtue — *we will pay all of it anyway, with an argument attached*. ⚠ That is the honest commercial case and it is the one a class will believe.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what everybody thinks it says_ — "that overtime must be authorised to be paid at time and a half"   ✓ _one clause per sentence in their rewrite?_ — yes   ? _has the difference cost or saved, and who applied it?_ — "saved, about 300,000 a year, and the office applied the stricter version"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('At least one text in three has a misreading that **saves** the company money. ⚠ **Do not resolve it for the class.** The honest position is that the saving is not safe — it lasts exactly as long as nobody reads the clause — and that is an argument from exposure rather than from honesty, which is the argument most likely to be acted on.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I read the payment paragraph aloud to my brother twice. First hearing: thirty days from invoice. Second: thirty days from **delivery**, because the invoice clause is between commas. ⚠ We have been paying on the invoice date for years, which is later, and no supplier has ever pointed it out.']));

// ===================== 11.7 =====================
out.push(pb());
out.push(h2('11.7  Review & Mediate: the page before the conditions'));
out.push(stage('1', 'Get ready – Unit 11 quiz'));
out.push(p('**1** ⚠ **Count what the clause leaves.** It is right when the count is **one**, and nothing else tells you.  **2** That the thing has **already been identified** and the clause is an addition — *by the way*.  **3** *Whose* relates by **possession** and follows the goods; *where* relates by **place** and follows the address. ⚠ For stock in transit the difference is the whole policy.  **4** ⚠ **Read the sentence without the clause.** If it still says what you meant, the commas stay; if it now says something larger, they come out.  **5** ⚠ When it is the **subject** of its own clause — *the invoice which was raised* — and never in a non-defining clause.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because ⚠ *every condition is made of the words on that page* — whether clause 12 applies is decided on page one and not in clause 12.  2 That *"written quotation" means a quotation issued on our quotation form and signed by an authorised signatory* — ⚠ so the prices she writes on the back of an order pad four times a week **are not quotations at all**, and she has been honouring them for two years.'));
out.push(note('⚠ Hala\'s conclusion is the unit\'s most important judgement and it is not a grammatical one: ⚠ *one of the two is wrong, and I do not think it is me.* **A definition that excludes what everybody does, and what is the right thing to do for the customer, is a defective definition** — not a workforce problem. ⚠ And she tests it properly: the alternative is to stop writing prices on order pads, and *that is not going to happen, because a customer standing at the counter wants a number on something.*'));
out.push(p('**Language box – Practise (sample):**  _"I need the page before the conditions. Every condition is made of those words. The definition says X. What do you actually treat as X? … Then half of them are not X, and one of the two is wrong."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'Page one says *"working day" means a day on which our office is open*.'],
  ['B', 'The office is shut on Saturdays. I work the counter.'],
  ['A', 'So a Saturday is not a working day.'],
  ['B', 'Then the fourteen-day price hold is longer than anybody thinks, because Saturdays do not count — and the three-day claim window is longer too, which is in the customer\'s favour.'],
  ['A', 'And the other way?'],
  ['B', 'Anything we promise *within two working days* takes longer than the customer expects, and I have been counting Saturdays as working days at the counter for four years because I am there.'],
  ['A', '⚠ So the same definition is in our favour on claims and against us on promises, and nobody has ever applied it either way.'],
]));
out.push(note('⚠ Pair 2 produces the most sophisticated finding available in this cycle: one definition cuts **both ways** depending on which clause uses it. ⚠ That is why the definitions page is read first — a change to one definition moves every condition that uses the term, in different directions.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the definition, what the person actually treats as the defined thing, and which of the two is wrong, then how long the gap has existed. **Typical errors:** _I need the page before of the conditions_ · _every condition is made from those words_ (acceptable; *made of* is the idiom here) · and the content fault, which is concluding that the person applying it has been doing it wrong. ⚠ In every case in this cycle the practice is right and the definition is defective.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I asked', 'The definition', 'What they actually treat as it', 'Which is wrong'], [
  ['Hala (counter)', '"written quotation" — our form, signed by an authorised signatory', 'any price she writes down, about four a week', '⚠ **the definition**'],
  ['Fadi (driver)', '"delivery" — to the customer\'s registered trading address', 'wherever the customer tells him, including lock-ups', '⚠ **the definition**'],
], [1, 1.4, 1.6, 1.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"The definition says a written quotation is one on our form, signed by an authorised signatory. What Hala actually does is write prices on an order pad about four times a week and honour them when they come back. One of the two is wrong, and it has been wrong since 2019."',
  '⚠ **The unit\'s mediation, named as the eleventh unit of this book:** a definitions page is read by whoever drafts it and by nobody who applies it — **so every definition narrower than the practice has been failed every day since it was written, by people doing the right thing.**',
  '⚠ And the second half, which matters for what anybody does next: the remedy is almost never to change the practice. **It is to change the definition to describe what the right thing to do actually is** — and that requires asking the person at the counter, which is the only part of this that cannot be done at a desk.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 2)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'D', 'A', 'B', 'C', 'E']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q1 is **D**: *"Goods" … does not include goods made to the customer\'s own measurements*, so a return of shelving cut to his sizes is decided by the definition of *goods* and not by any returns clause. ⚠ Learners look for a returns definition and there is none — **which is the Part 2 lesson and the unit\'s lesson at once: the decisive definition is often not the obvious one.**'));
out.push(note('⚠ Q4 is **C** and it is the discriminating item: whether a Saturday claim was in time is decided by *"working day" means a day on which our office is open*. ⚠ A learner who reaches for a claims clause has not grasped that the claims clause only counts **working days**, and the definition decides what one is.'));
out.push(stage('6', 'Write with help – sample (43 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Hala — page one says a "written quotation" means one on our form signed by an authorised signatory. That excludes prices written on the order pad, which you do about four times a week. Until it is changed: honour them, write the date on, and tell me each time. That is mine, not the document\'s.',
]));
out.push(note('⚠ That sample is 51 words and must be cut. ⚠ The cut is *and write the date on*, which is an improvement the writer has smuggled in rather than part of the task — and in forty words the **exclusion** and the **interim instruction** are what the marks are for.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The definition, quoted or summarised accurately', '✓'],
  ['What it excludes that the reader does', '✓ with a frequency'],
  ['An interim instruction, owned by the writer', '✓ *that is mine, not the document\'s*'],
  ['35 to 45 words — count them', '✗ 51 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (137 words)'));
out.push(sample(null, [
  '**TERMS — clause 9, rewritten. ⚠ One clause per sentence, definition first.**',
  '**9.1** "Delivery" means the handing over of goods to the customer or to a person nominated by the customer in writing. **9.2** Risk passes on delivery. **9.3** Goods which are left at an address without a signature are not delivered and remain at our risk. **9.4** A customer who wishes goods to be left without a signature must say so in writing, and risk then passes when they are left.',
  '⚠ **What clause 9 said before.** *Risk passes on delivery to the premises where the customer carries on business.*',
  '⚠ **Why that was wrong.** It followed the **place**. Four of our regular customers take goods at a site or a lock-up, so risk had never passed on about a third of our deliveries — and we were insuring loads we had been paid for.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I took the definitions page to Fadi. In four minutes he found that "delivery" excludes everywhere he actually delivers, and that "our vehicle" excludes the one we hire in August. ⚠ Both definitions are from 2019 and he had never seen page one. **He asked why nobody had shown him.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 11 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'b', 'c', 'a', 'a', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1 is the only item in Book 1 whose correct answer is that a grammatically perfect sentence is **wrong for a reason that is not grammatical**: it leaves four. ⚠ A learner who picks b (*ungrammatical*) has the rule and not the point.'));
out.push(note('⚠ Questions 3 and 4 are the *whose/where* pair and must be marked together: one follows the goods and one follows the place. ⚠ Question 5 is the comma test in one line, and Q6 and Q7 are the omitted relative in both directions — **a learner who gets 6 and misses 7 can leave one out and cannot tell when it must stay.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['The definition', 'What Hala does', 'How often', 'Which is wrong', 'How long'], [[
  'a quotation on our form, signed by an authorised signatory', 'writes prices on the back of an order pad and honours them', 'about four times a week',
  'the definition', 'since 2019',
]], [1.8, 1.8, 1, 1, 0.9]));
out.push(note('⚠ The definition gap needs **both** halves — the form **and** the signature — because the definition is failed by missing either. ⚠ Gap 4 is one word and is the judgement of the whole exchange: a learner who writes *Hala* has heard the facts and missed the argument.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (63 words)', ['**1** A written quotation is valid for fourteen days from the date on it. **2** A customer who holds a valid written quotation is entitled to the quoted price. **3** The entitlement applies to any order which is placed within the fourteen days. ⚠ The old version said *a customer who holds a written quotation, which is valid for fourteen days, is entitled to the quoted price on any order, which is placed within that period* — which entitled anybody to the quoted price for ever.']));
out.push(box('Marking the Unit 11 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 1 needs both halves of the definition.'],
    ['**C Writing**', '7', 'One clause per sentence (2) · ⚠ **defining clauses with no commas** (2) · additions in **two** commas (1) · the definition first (1) · what the old version said (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for unpunctuated defining clauses are the unit.** A rewrite in which a defining clause still carries commas scores 0 of those 2, however well organised — **because the comma is what the unit is about and it is the only error here that costs money.**',
  '⚠ **Deduct for over-correction as well.** A learner who has removed the commas from a correct non-defining clause has produced a new error and should lose the addition mark. ⚠ Say so in advance: the test has two answers, and about a third of the class will have been using only one of them since 11.4.',
  '⚠ Give the last mark for quoting the old version. A rewrite without it cannot be checked by the one person who most needs to check it, ⚠ **which is whoever has been applying the old wording.**',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 11**'));
out.push(p('**1 The comma, and the belief that it is carelessness.** It will appear in almost every learner\'s real documents, and it is not carelessness: in speech there is a small pause before a relative clause and **the pause is right**. ⚠ Say Mr Attar\'s line early — *eleven times in six years, and ten of them in documents written by careful people* — because a learner who thinks they have been sloppy will stop trusting their ear, and **their ear is correct**. What they need is the four-second page test, not more care.'));
out.push(p('**2 Over-correction, from 11.4 onwards.** By the middle of the unit a class removes commas from correct non-defining clauses and inserts *which* into correct object-relative sentences. ⚠ **This is a worse outcome than the original errors**, because the learner is now confident. Three stages exist to catch it — 11.4 role card 2, 11.5 role card 2, and the marked-sentence page where three of six are correct — ⚠ and **none of them is optional**. Make the class say *nothing is wrong* out loud; it is harder than it sounds and it is what the brake is made of.'));
out.push(p('**3 Treating the unit as grammar.** It is a unit about documents: a comma that promises a whole order, a relative pronoun that makes a policy follow addresses instead of goods, a definition that excludes what everybody at the counter does. ⚠ If a lesson has to be cut, **cut 11.5 and keep 11.4** — the omitted-relative error produces an unreadable sentence that somebody queries within a day, and the comma error produces a readable sentence that goes to thirty customers in silence. ⚠ **The loud error is the cheap one**, and the unit says so on its own marked-sentence page.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 11 · Answer Key');
