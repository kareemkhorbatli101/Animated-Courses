// Proactive Business English A2 · Syria Edition · Book 2 · Unit 21 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 21  Quality and Complaints'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit is one conversation from two ends.** 21.1, 21.2 and 21.6 are the complaining side; 21.3, 21.4 and 21.5 are the answering side. Several learners will be on both sides in the same week, and saying so early makes the second half easier to teach.',
  '⚠ **The rule that holds throughout: the complaint is almost never about the goods.** Two crushed boxes are two crushed boxes; the complaint is that nobody telephoned. Learners find this quickly in their own examples and then stop hearing it in other people\'s — keep asking.',
], C.grey, C.navy));

// ===================== 21.1 =====================
out.push(h2('21.1  Two of the twenty boxes were crushed'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The answer to "what do they write down" is usually nothing, which is the cycle.'));
out.push(p('**b**  The third. The proportion makes it undeniable and the position tells the supplier what happened.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (two boxes of twenty)   **b**  1 Both on the bottom layer, at the same corner.  2 Because once it has been moved the photograph proves nothing, and the pallet label in the picture ties it to the delivery.'));
out.push(p('**Language box – Practise (samples):**  _Six of the forty boxes of tiles are broken, five in one corner — that is a drop. · Four of the thirty rolls have crushed ends, all on one end and all on the outside — that is a forklift._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The wrap pallet has arrived and some of it is damaged.'],
  ['B', 'Do not move anything. How many, out of how many?'],
  ['A', 'Four. Four of the thirty.'],
  ['B', 'Where?'],
  ['A', 'All four on the same end, and all four on the outside of the pallet.'],
  ['B', 'Then it was a forklift, not the lorry — a lorry crushes the top and a fork goes into the side. Photograph it where it stands, with the label in the picture.'],
  ['A', 'And the driver is waiting for a signature.'],
  ['B', 'On his you write: four rolls of thirty, crushed ends, outside of the pallet, photographed.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the **position** suggests. Typical errors: _two boxes was crushed_ (plural agreement under a number) · _some of them were damage_ · and the content fault of writing "damaged" on the note instead of the facts.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'How many of how many', 'Where', 'What it suggests'], [
  ['wrap boxes', '2 of 20', 'bottom layer, one corner', 'stacked on, or dropped on that corner'],
  ['tiles', '6 of 40', '5 in one corner, 1 in the middle', 'a drop; the middle one broken before packing'],
  ['rolls', '4 of 30', 'one end, all outside', 'a forklift'],
], [1, 1.2, 1.1, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Four of the thirty rolls were crushed, all at the same end and all on the outside. That suggests a forklift rather than the lorry. On the note we wrote: four of thirty, crushed ends, outside of the pallet, photographed."', 'Ask how many have ever written anything on a driver\'s note before signing. It is nearly none, and it is the cheapest habit in this unit.']));
out.push(stage('5', 'Read'));
out.push(p('1 _We are not saying where it happened and we are not asking the driver to._ It is there because an accusation turns the supplier\'s reply into a defence and the two boxes then take a month.  2 Because _not used, not thrown away, available for fourteen days_ removes every reason to refuse the claim.  3 Two replacement boxes **or** a credit note, their choice, by Thursday.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**DAMAGE REPORT — delivery T-204, received 08.15, 12 March**', '**What arrived.** One pallet, forty boxes of floor tiles, batch 7781.', '**What is damaged.** **Six of the forty** boxes contain broken tiles. Five were together in one corner of the pallet; one was in the middle of the second layer.', '**What that suggests.** The five are consistent with a drop on that corner. The one in the middle may have been broken before packing. We are not saying where either happened.', '**What we did.** Photographed on the pallet before anything was moved, with the label visible — five photographs attached. The driver\'s note was signed with the words "six boxes of forty broken, five one corner, photographed".', '**What we have not done.** We have not opened the six beyond lifting the lids, and nothing has been thrown away. Available for inspection for fourteen days.', '**What we are asking for.** Six replacement boxes with the next delivery, or a credit note for six. Please tell us which by Friday.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The proportion and the position', '✓ – six of forty, one corner'],
  ['No accusation', '✓'],
  ['A "what we have not done"', '✓'],
  ['A choice of two outcomes, with a date', '✓ – by Friday'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says what you have not done is the paragraph that gets the credit note, and yours has it. The line I would look at is the one in the middle of the second layer — _may have been broken before packing_ is a bigger claim than the other five and it is in the same sentence as them."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we have not done" paragraphs. Ask which report the class would settle fastest as a supplier; it is always the one that has kept the goods.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A pallet of paper arrived wet in February. About a third of it dried out well enough to use and the rest went in the bin over two weeks, a ream at a time, as people found pages stuck together. Nobody claimed, because by the time we knew how much was ruined the pallet had been split between three store rooms and nothing had been photographed. It was perhaps 600,000. For somebody to have claimed, one person would have had to say "do not move it" in the first ten minutes.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"a ream at a time, as people found pages stuck together"_   ✓ _proportion and position._   ? _Who would be allowed to say "do not move it"?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Add up what the room has absorbed without claiming. The reason is nearly always that nothing was photographed in the first ten minutes.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['We take no photographs. To start, we would need a telephone at the gate — there is one, Fadi\'s — and one instruction: nothing moves until the receiving person has photographed it with the label in the picture.']));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  I would like to make a complaint'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The complaints that worked nearly always began by naming themselves.'));
out.push(p('**b**  The second. _This is not good enough_ invites a defence; naming the complaint and promising to be quick gets attention and goodwill at once.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (that nobody telephoned)   **b**  1 The two boxes — she says so explicitly.  2 Two replacements **and** one sentence about what will be said to the loader.'));
out.push(p('**Language box – Practise (sample, a late delivery):**  "I would like to make a complaint. The order was two days late, the third time this quarter. I am not complaining about the two days; I am complaining that you knew on Monday and I found out on Wednesday when I telephoned. The two days cost me one annoyed customer; the silence cost me a promise I had made in writing."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Barakat, I would like to make a complaint, and I would like to be quick about it.'],
  ['B', 'Go on.'],
  ['A', 'The invoice is at the old price again — 180,000 too much. That is the fourth time this year.'],
  ['B', 'I am sorry. We will credit it.'],
  ['A', 'Thank you. But I am not complaining about the 180,000; you have always credited it. I am complaining that each time somebody says they will tell the office, and each time I check the next invoice anyway.'],
  ['B', 'That is a different thing.'],
  ['A', 'It is the only thing. The money comes back. The four telephone calls and the checking do not.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that named the real complaint, and whether the other person heard it or kept answering the first one. Typical errors: _I want to complain about you_ (the person rather than the thing) · _I am complaining for the boxes_ · raising the voice instead of the specificity.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['To whom', 'The facts', 'The real complaint', 'What would prevent it'], [
  ['Shamsi', '2 of 20, 3rd time this year', 'the loader knew and nobody telephoned', 'a call when something is wrapped damaged'],
  ['Barakat', '180,000, 4th time', 'I have to check every invoice', 'a named person who checks before sending'],
  ['the garage', 'nine days, four calls', 'being told "tomorrow" eight times', 'tell me the truth on day one'],
], [1, 1.4, 1.6, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I complained to Barakat about an invoice at the old price. But the real complaint is that it is the fourth time and I now check every invoice. What would prevent it is one named person checking my invoices before they are sent."', 'Count the real complaints that were about **being told late** or **having to check**. It is nearly all of them, and it is the same finding as Unit 15.']));
out.push(stage('5', 'Read'));
out.push(p('1 The wrap is stretched over the dent in the third photograph, which means the corner was crushed before wrapping — the evidence is in the attachment and it is named.  2 _We have bought from you for eleven years and I would rather write this than not write it_ — it says the letter is maintenance of a relationship, not the end of one.  3 Replacements or a credit, and **one sentence about what will be said to whoever wrapped it** — the second is unusual, because it asks for prevention rather than repair.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Invoices at the old price — fourth time, and the checking it costs us', 'Dear Mr Barakat,', 'I am writing to make a complaint. I will keep it short and I would like an answer by Thursday.', '**What happened.** Invoice 3318, dated 2 March, is at the September price — 180,000 too much. The same happened on 4 November, 9 December and 14 January.', '**What it cost.** The 180,000 comes back every time, so that is not the cost. The cost is that we now check every invoice from you before paying it, which is about twenty minutes a month and a habit I would rather not have.', '**The complaint.** It is not the price. Each time, somebody has said they will tell the office, and each time the next invoice has been wrong.', '**What I am asking for.** The credit, and the name of one person who will check our invoices before they are sent, for three months.', 'We have bought from you for two years and I would rather write this than not write it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Says it is a complaint, with a deadline', '✓'],
  ['Proportions and dates', '✓ – four dates'],
  ['The two costs, separately', '✓ – the money and the checking'],
  ['Something that prevents it', '✓ – a named person, three months'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says separate the two costs, and _a habit I would rather not have_ is the best line in the letter. The paragraph I would look at is _the complaint_ — it repeats the second cost rather than adding to it. Could it say what the fourth time means about the first three answers?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the last lines. Ask which letter the class would answer first and which they would answer **best**; they are not always the same one, and the difference is the last line.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I never complained about the printer service contract. For two years they came late, did twenty minutes of work and left a sheet saying "serviced". When the machine finally failed it turned out the drum had been due for replacement for eighteen months and it was on their own sheets. I said nothing because I was not sure it was my place and because I did not have the sheets in front of me. I have them now. What I would write is four dates, the word on each sheet, and one question: what does "serviced" mean on your paperwork?']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"what does \'serviced\' mean on your paperwork?"_   ✓ _there are dates._   ? _Is the contract still running?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The reasons for not complaining divide into two: not wanting the argument, and not having the evidence. Only the second is fixable, and this unit fixes it — say so plainly.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Complained about the invoices in five moves. He offered the credit in the first minute. When I named the real complaint — the checking — he went quiet and then offered to send a copy of each invoice to me before it goes to accounts.']));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  I am very sorry about that'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Nearly everybody has, and nearly everybody did it badly the first time.'));
out.push(p('**b**  The second. _I am sorry you feel that way_ apologises for the other person\'s emotions and is heard as an insult in every language.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (it is not yet known)   **b**  1 The experience — the wrong sizes and the wasted morning — before she knows whose fault it is.  2 Blame a colleague who is not there, and guess.'));
out.push(p('**Language box – Practise (sample, a promise somebody else made):**  "I am very sorry about that. You were told Tuesday and Tuesday was never possible, and I can hear what that has cost you. What I can do is a part delivery on Tuesday and the rest on Thursday. I do not know yet how the promise was made, and I will find out and tell you."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Somebody at your counter was short with me on Sunday. I have been coming here for six years.'],
  ['A', 'I am very sorry about that. That should not have happened, and after six years it should not have happened to you of all people.'],
  ['B', 'Who was it? The young one?'],
  ['A', 'I do not know yet, and I would rather find out than guess. What I can tell you now is that I will find out today.'],
  ['B', 'It was the young one.'],
  ['A', 'That may be, and I am not going to say it on the telephone about somebody who is not here. I will tell you what I find, even if it turns out that we were short-staffed and nobody was rude at all.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that refused to blame a colleague, and what the customer did after it — they nearly always soften. Typical errors: _I am sorry for that happened_ · _sorry you feel like this_ · an apology repeated three times, which reads as fear.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The complaint', 'What I apologised for', 'What I promised to do', 'When I will explain'], [
  ['four sizes, three ordered', 'the wrong sizes and the wasted morning', 'small ones on the four o\'clock van; extra collected', 'tomorrow'],
  ['promised Tuesday', 'the promise and what it cost', 'part Tuesday, rest Thursday', 'today'],
  ['a short answer at the counter', 'the experience after six years', 'find out today', 'today, whatever it is'],
], [1.2, 1.4, 1.4, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"He said he was promised Tuesday. I said I was sorry about the promise and what it had cost him, and that I would send part of it on Tuesday and the rest on Thursday. I promised to tell him today how the promise was made."', 'Ask who found it hardest **not** to blame somebody. It is the most natural thing in the world, and naming the difficulty is more useful than praising the ones who managed it.']));
out.push(stage('5', 'Read'));
out.push(p('1 Apology · what we have done · what happened · what we have changed.  2 _What I am not going to do_ — it protects the three people who used the wrong list by naming the list as the fault.  3 It thanks him for telephoning rather than simply ordering elsewhere — which is what most customers do.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Sunday at the counter — I am sorry, and what we have changed', 'Dear Mr Darwish,', 'I am very sorry about Sunday. You have been coming here for six years and you should not have been spoken to like that. That should not have happened.', '**What we have done.** I have spoken to everybody who was on the counter that morning, and the person concerned has written to you — you will have it with this.', '**What happened.** There were two of us for a queue of eleven, because somebody was ill and nobody was called in. That explains the tone; it does not excuse it.', '**What we have changed.** From this week, if two people are on the counter and the queue goes past the door, the office comes out. Rana has the whistle and I mean that literally.', '**What I am not going to do.** I am not going to tell you it was one person having a bad day. We put somebody in an impossible morning.', 'Thank you for telling me rather than simply going to the other shop.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Apology first, in one sentence', '✓'],
  ['What has been done, before the explanation', '✓'],
  ['The process named, not a person', '✓ – two people, eleven in the queue'],
  ['A change that would have prevented it', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says name the process, and _we put somebody in an impossible morning_ does it better than most companies would dare. The line I would look at is _the person concerned has written to you_ — is that something they chose, or something they were told to do? The customer will wonder."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we have changed" paragraphs and ask which change the class believes would hold. The believable ones all name a person or a trigger.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A bank once apologised to me for forty minutes and did nothing. The man was genuinely sorry and said so six times, and at the end of it my transfer was still missing and I had no date. A year later a small shop apologised in eight words — "that is our mistake, it will be here Thursday" — and I have bought from them ever since. The order is what mattered: the shop put the remedy first and the apology around it, and the bank had only the apology, which is the part that costs nothing.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the apology, which is the part that costs nothing"_   ✓ _nobody was blamed._   ? _Did you ever go back to the bank?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the apologies that came **after** the explanation. That is the usual order and the usual reason apologies fail — and the class will recognise it from both sides.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Our last complaint was answered with four paragraphs of explanation and one line of apology at the end. Rewritten in the right order it is shorter by half: sorry; here is what we have already done; here is what happened; here is what has changed.']));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  We will send a replacement'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — and the answer tells you how much authority the learner actually has, which is often more than they think.'));
out.push(p('**b**  Cheapest to dearest, roughly: doing it again properly · a replacement · a credit note · a goodwill gesture · a refund. ⚠ The order depends on the trade; what matters is that they are **different** and are chosen, not reached for.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a replacement and something else)   **b**  1 Money off — he says the money does not fill a shelf.  2 Three months of telephone calls on the morning the order is picked, because the goods repay the shelf and the calls repay the morning.'));
out.push(p('**Language box – Practise (sample, a failed repair):**  "What would put this right, and what would not? — A loan machine before Thursday, not money. Then: the loan machine tomorrow, and for the next two months you have the engineer\'s mobile number, because two months is long enough to see whether it holds."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Khalil, two questions. What would put this right, and what would not?'],
  ['B', 'I do not want an apology. I want to stop checking every invoice you send me.'],
  ['A', 'Then: the 180,000 credited on this one, today.'],
  ['B', 'Good.'],
  ['A', 'And one thing you have not asked for. For the next six months, Rana checks your invoices before they are sent and signs the copy. If one is wrong, it is her name on it.'],
  ['B', 'Why six months?'],
  ['A', 'Because six months is long enough for you to stop looking. If I said for ever you would not believe me, and if I said one month you would be right not to.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the fifth thing with its length and reason. Typical errors: _we will to send_ · the present simple used for a promise (_we send you a replacement tomorrow_) · and the content fault of offering money to somebody who did not want money.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What went wrong', 'The remedy', 'The fifth thing', 'How long, and why'], [
  ['twelve boxes short', 'twelve on tomorrow\'s van, no charge', 'a call on the morning it is picked', '3 months — long enough to stop thinking'],
  ['invoices wrong four times', 'credit today', 'a named checker who signs the copy', '6 months — long enough to stop looking'],
  ['repair failed before Thursday', 'a loan machine tomorrow', 'the engineer\'s mobile number', '2 months — to see whether it holds'],
], [1.2, 1.2, 1.5, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"He wanted the boxes, not money. We offered twelve on tomorrow\'s van before he opens, with no delivery charge. And for three months we will telephone on the morning the order is picked, because three months is long enough for him to stop thinking about it."', 'Ask for the best fifth thing in the room. The good ones cost almost nothing and last exactly long enough — and nearly all of them are information rather than money.']));
out.push(stage('5', 'Read'));
out.push(p('1 Twelve boxes for the goods; three months of telephone calls for the lost morning.  2 It names the gap and says what to do if you fall into it — unusual because most settlements pretend there is no gap.  3 Because it is the number that will be answered. Giving a mobile number for three months **is** part of the remedy.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Invoice 3318 — credited today, and Rana checks yours for six months', 'Dear Mr Barakat,', 'Thank you for telling me what would help and what would not. You were right that an apology does not stop you checking.', '**For the money:** 180,000 credited on invoice 3318 today. The credit note is attached.', '**For the checking:** for the next six months, Rana checks every invoice to you before it is sent and signs the file copy. Six months, because that is long enough for you to stop looking at them.', '**What we have changed for everybody:** the price list on the invoicing screen is now dated, and the date is checked on the first of each month.', '**What this does not cover:** if an invoice is still wrong, telephone me and not accounts, and I will deal with it myself.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A remedy for the goods or money, with a time', '✓ – today'],
  ['A remedy for the inconvenience, with a length', '✓ – six months'],
  ['A reason for the length', '✓'],
  ['What this does not cover', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says two headings for two injuries, and yours separates the money from the checking exactly. The line I would look at is _signs the file copy_ — that is the part that makes it real, and it is the shortest clause on the page."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "for the inconvenience" lines. Ask which one the class would accept; the accepted ones are nearly always about certainty rather than compensation.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A tyre place sold us a tyre that was the wrong size and fitted it. When we came back the man did not argue: he took it off, put the right one on, and said he would not charge for either fitting. Then he did the thing I remember — he wrote the two sizes on a card and taped it inside the van\'s door, so that nobody would make the same mistake again, including us. We have bought nine tyres there since. The card is still in the door.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"The card is still in the door."_   ✓ _a date and no hedging._   ? _Does he know you still go there because of it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many writers are still customers. The remedy that keeps people is almost never the money; it is usually a piece of information or a named person.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Our fifth thing: for two months after any short delivery, we telephone the customer on the morning the next order is picked and say what is going on the van. It costs one minute and nobody has ever been offered it.']));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  Goods must be checked on arrival'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. "Against what" is the question that usually has no answer, and it is the one that matters.'));
out.push(p('**b**  The second. Who, against what, before when — all three.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (check against the order before the driver leaves)   **b**  1 Who, against what, and before when.  2 The driver who will not wait — because a rule with no answer for the hard case is a rule that will be broken on a Thursday and then every day.'));
out.push(p('**Language box – Practise (sample, taking a complaint):**  "A complaint must be written on the complaint slip by the person who takes it, with the customer\'s name and the date, before the next customer is served. If there is a queue, write the name and the telephone number only, and complete the slip within the hour."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The new rule: collections must be signed for.'],
  ['B', 'That is a hope. Who, against what, and before when?'],
  ['A', 'Then: collections must be signed for by the person handing the goods over, against the collection note, before the goods leave the yard.'],
  ['B', 'Better. And at five past seven, when the office is locked and only the warehouse is open?'],
  ['A', 'They always come in office hours.'],
  ['B', 'They do not, and you know it. If the rule has no answer, somebody will hand goods over with no paper at all.'],
  ['A', 'Then: outside office hours, write the name, the vehicle and the time in the gate book, and the note is completed the next morning.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the hard case and its instruction. Typical errors: _must be check_ · _goods must checked_ · and the content fault of a rule with no exception, which is the one the class will produce every time until it is named.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The rule', 'Who / against what / before when', 'The hard case', 'The reason'], [
  ['goods checked', 'receiver / the order / before the driver leaves', 'the driver will not wait', 'the note can agree with itself and be wrong'],
  ['complaints written', 'the taker / the slip / before the next customer', 'a queue of six', 'a complaint remembered is a complaint lost'],
  ['collections signed', 'the person handing over / the note / before it leaves', 'after seven, office locked', 'goods with no paper cannot be traced'],
], [1, 1.8, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Goods must be checked by the person receiving them, against the order, before the driver leaves. If the driver cannot wait, write \'received unchecked\' on his note before signing and check within the hour. The reason is that a delivery note can agree with itself and still be wrong."', 'Ask which rule in the room is most likely to be broken and which part is missing. It is nearly always the hard case.']));
out.push(stage('5', 'Read'));
out.push(p('1 A delivery note can agree with itself and still be wrong; the order is the only document that says what we asked for.  2 Because a supplier may want to inspect, and a claim with nothing left to look at gets refused.  3 A rule broken and reported is a problem that can be fixed; a rule broken quietly is the next complaint.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE COUNTER — the three rules, and what to do when they cannot be kept**', '**1** Every complaint **must be written** on the slip by the person who takes it, with the name and the telephone number, **before the next customer is served**.  _Reason: a complaint carried in somebody\'s head until the evening is a complaint that is lost, and the customer knows it is lost._', '**2** Any price given from memory **must be checked** against the screen **before the customer leaves**.  _Reason: a wrong price given at the counter is honoured, and it has cost us about 300,000 this year._', '**3** Cash **must not be left** in the drawer overnight.  _Reason: the insurance does not cover it and the policy says so in one line on page four._', '**When a rule cannot be kept.** If there is a queue, write the name and number only and complete the slip within the hour. If the screen is down, write the price you gave on the pad and tell Rana the same day. **A rule broken and reported is a problem; a rule broken quietly is the next complaint.**']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_must be_ + past participle throughout', '✓'],
  ['Who, against what, before when', '✓ in rules 1 and 2; rule 3 is a prohibition and needs no "against what"'],
  ['A one-line reason under each', '✓'],
  ['A "when a rule cannot be kept" section', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says four at most and three is better. The reason under rule 2 has a number in it, which is the strongest of the three — could rule 1\'s reason have one too? How many complaints were lost last year?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "when a rule cannot be kept" sections. Ask whose workplace would hear about the exceptions rather than discover them.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The rule is that nobody takes cash at the gate. It is broken most weeks, because a driver arrives with a small collection, the office is at the other end of the yard, and the customer is standing there with the money in his hand. The hard case is the small collection outside office hours, and the rule has nothing to say about it. What it should say is: cash at the gate is allowed for collections under 200,000, written in the gate book with the vehicle number, and handed to the office the same day.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the customer is standing there with the money in his hand"_   ✓ _must be + past participle._   ? _Who could change the rule — and would they?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts the rule is broken because it **cannot** be kept. That is a management finding and not a discipline one, and saying so changes how the class talks about rules for the rest of the book.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Rewrote the gate rule with the hard case in it and gave it to Abu Yasser. He said the original had been written by somebody who had never stood at the gate at seven in the evening, which is what everybody had been saying for two years in the yard and nobody had said in the office.']));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  Is it under guarantee?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. "Could you prove it in five minutes" is the real question and the answer is usually no.'));
out.push(p('**b**  The second. One question gets a yes or a no; four questions get a claim.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (yes, but not the labour)   **b**  1 From the date of **fitting**, 17 December.  2 The labour — and he waives it this time; she writes all of it down on the call.'));
out.push(p('**Language box – Practise (sample, a vehicle part):**  "Is it under guarantee? From what date does it run — fitting or purchase? Does it cover the part only or the labour? And what does it not cover — is there a distance limit?"'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The clutch has gone. You fitted it on the third of March, which is seven months ago. Is it under guarantee?'],
  ['B', 'It is. Twelve months on the part.'],
  ['A', 'Twelve months from the date of fitting, or from the date you bought the part?'],
  ['B', 'From purchase. The eleventh of January.'],
  ['A', 'So it expires in January, not in March. And does it cover the labour?'],
  ['B', 'The part only.'],
  ['A', 'And what does it not cover? Is there a distance limit?'],
  ['B', 'Forty thousand kilometres. It is on the back of my copy.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **date** it runs from and whether it is the one the customer assumed. Typical errors: _it is in guarantee_ · _two years of guarantee from it was bought_ · and the content fault of asking only the first question.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Runs from', 'Covers', 'Does not cover / where the paper is'], [
  ['shutter motor', 'fitting, 17 Dec', 'the motor', 'labour; wiring faults. Invoice in the folder'],
  ['van clutch', 'purchase, 11 Jan', 'the part only', '40,000 km limit. On the back of the garage copy'],
  ['cold store seal', 'fitting, 16 Dec', 'the seal', 'the hinges. Invoice in the folder'],
], [1, 1, 1.2, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The clutch is guaranteed for twelve months from the date the part was bought, the eleventh of January — not from fitting in March. It covers the part and not the labour, and there is a forty-thousand-kilometre limit on the back of the garage\'s copy."', 'Count the guarantees whose paper nobody could find. Those are guarantees that do not exist in practice, and the room usually has several.']));
out.push(stage('5', 'Read'));
out.push(p('1 The van clutch — twelve months from the purchase of the part on 11 January, not from fitting on 3 March, so it expires two months earlier than anybody would assume.  2 It is out of guarantee and not worth extending at 240,000 a year for an eleven-year-old machine that cost 600,000 — the uncovered risk is as much part of the list as the covered items.  3 To ask _from what date does it run?_ **on the day** anything is fitted, and to write the answer on the invoice before filing it.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**GUARANTEES**', '**Counter printer.** 24 months **from purchase**, 4 February. Covers parts and labour. **Does not cover** the drum, which is a consumable. Paper: receipt photographed, in the Equipment folder. **Expires 4 February.**', '**Shop shutter.** 12 months **from fitting**, 9 March. Covers the motor and fitting. Does not cover the manual release or damage from forcing it. Paper: the fitter\'s invoice, same folder. **Expires 9 March.**', '**Till.** Out of guarantee since last June. An extension is 180,000 a year on a machine that cost 900,000 and is six years old; worth taking once, not twice.', '⚠ Two of these three run from a date that is not the date we would have guessed. When anything is fitted, ask on the day: from what date does it run? — and write the answer on the invoice before filing it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How long **and from what date**', '✓'],
  ['What it does not cover', '✓ – the drum; the manual release'],
  ['Where the paper is', '✓'],
  ['An expiry date, in bold', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says include the things that are out of guarantee, and the till line does that with a judgement attached — _worth taking once, not twice_. The line I would look at is the drum: is _a consumable_ their word or ours?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask of each block: could you claim on Thursday? Where the answer is no, it is always the paper or the date that is missing, never the cover.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Everybody believed the roof was guaranteed for ten years. It was — against defective materials, from the date the materials were bought, and not against workmanship, which had two. When water came through in the third winter the manufacturer was perfectly willing to supply free tiles and nobody to fit them, which was about a tenth of the cost. The question that would have revealed it is the fourth one: what does it not cover? Nobody asked, because a ten-year guarantee sounds like an answer rather than a document.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"sounds like an answer rather than a document"_   ✓ _the four questions._   ? _Where is that guarantee now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the documents nobody can find. A guarantee whose paper is lost is a guarantee that does not exist, and the homework fixes one of them.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Found the compressor guarantee, wrote EXPIRES 14 AUGUST on the front in marker, and put it at the front of the Equipment folder. It had been face down under four invoices and nobody knew the date.']));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: the complaint letter'));
out.push(stage('1', 'Get ready – Unit 21 quiz'));
out.push(p('**1** How many, and out of how many.  **2** Sample: _I am not complaining about the two boxes, I am complaining that nobody telephoned._  **3** _I am sorry you feel that way._  **4** Who, against what, before when — plus the hard case.  **5** From what date does it run?'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (he thinks it is about him)   **b**  1 Aleppo — the corner was crushed before it was wrapped, and nobody telephoned.  2 One sentence about what will be said to whoever wrapped it.'));
out.push(p('**Language box – Practise (sample):**  "Read the paragraph headed \'The complaint\'. It says the wrap was stretched over the dent, so the damage happened before wrapping. Your van did not wrap anything. You are in the evidence — you delivered it and the photographs were taken before anything moved — not in the complaint."'));
out.push(stage('3', 'Practise – sample with letter 1'));
out.push(dlg(null, [
  ['B', 'I took that order. The letter says the order was short.'],
  ['A', 'Read me the paragraph headed "The complaint".'],
  ['B', '"We were told on Tuesday afternoon, by our own customer, that the order was short. Nobody from your company telephoned."'],
  ['A', 'Then the complaint is the telephone call that was not made, and that is not the order being taken. The paragraph headed "What happened" says the order was taken correctly on Sunday.'],
  ['B', 'So why am I in it at all?'],
  ['A', 'Because it is the sequence. You are in the evidence. And look at what they are asking for — the two lines, **and a note of what will change**. The second one is the letter.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the thing asked for that is not a remedy. It is the true subject of most serious complaints, and it is the one the recipient usually answers last.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought it said', 'What it is really asking for'], [
  ['Fadi', 'that his delivery damaged the boxes', 'a sentence about what will be said to the wrapper'],
  ['the order taker', 'that she took the order wrongly', 'a note of what will change about telephoning'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a complaint letter about a delivery. He thought it was about him. The paragraph headed \'The complaint\' says the damage happened before wrapping and that nobody telephoned. What it really asks for is one sentence about what will be said to whoever wrapped it."', '⚠ **The ordinal.** This is the **ninth** unit of Book 2 and the unwritten thing is where the meaning lives: a complaint says what it is about under the heading \'the complaint\', and almost nobody reads that far before deciding it is about them.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _credit note · goodwill gesture · batch number · tolerance · specification · consequential_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', 'The proportion: two damaged, twenty delivered.'],
  ['2', 'C', 'Against the **order**, while the driver is still there.'],
  ['3', 'A', 'Keep them for fourteen days — the sentence forbids disposal, it does not require it afterwards.'],
  ['4', 'B', '_Fitting_ = installation, not purchase.'],
  ['5', 'A', 'It apologises for the thing, not for the feeling.'],
  ['6', 'B', 'A credit note is money against a future order.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (31 words)'));
out.push(sample(null, ['Dear Ms Shamsi, two of the twenty boxes arrived crushed, both on the bottom layer. We would like two replacements, or a credit note. Could you tell us which by Thursday?']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: the proportion ✓ · what is wanted, with a choice ✓ · a date ✓. Thirty-one words. ⚠ The commonest fault is explaining or apologising inside a complaint. In twenty-five words there is room for the facts, the ask and the date, and nothing else.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Our last complaint said it was about a late delivery. Four of its six sentences were about the late delivery and the fifth was the real one: "nobody told us until we telephoned." We answered the four and not the fifth. We sent a credit note, which nobody had asked for, and we did not say anything about telephoning. The customer accepted the credit, thanked us politely, and has ordered twice since instead of four times. The complaint was about a telephone call and we answered it with money, which is the cheapest thing we had and the only thing he did not want.']));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['The paragraph our last complaint did not have: "The complaint is not the two days. It is that we told you we would telephone if anything slipped, and we did not, and you found out from your own customer."']));
out.push(pb());
out.push(stage('✓', 'Unit 21 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'a', 'b', 'b', 'c', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _Two … were_ — plural.  **2** _would like_ + **to**.  **3** _sorry **about** that_.  **4** _will_ for a promise.  **5** _must **be** checked_ — the passive needs _be_.  **6** _must not **be thrown**_.  **7** _**under** guarantee_.  **8** _runs **from** the date_.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['How many, of how many', 'Where on the pallet', 'The real complaint', 'What they want', 'By when'], [[
  'two of the twenty', 'bottom layer, same corner', 'the damage happened before wrapping and nobody telephoned', 'two replacements or a credit note', 'Thursday',
]], [1.2, 1.2, 1.8, 1.4, 0.8]));
out.push(note('The third gap must carry the telephone call. "The damage" alone earns nothing — it is the first complaint, not the real one, and the recording says so explicitly.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (58 words)', ['Dear Mr Haffar, I am very sorry about Tuesday. That should not have happened. The twelve small boxes went out on the four o\'clock van and were with you by half past five. The order was picked from an old list that had not been replaced. From Monday the list is printed fresh each morning with the date on it.']));
out.push(box('Marking the Unit 21 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Apology **first** (2) · what has **already** been done (2) · what happened (1) · what has changed (1) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the apology are for **position**. An apology in the last line scores 0 of 2, however warm it is, and saying so once ends the habit.',
  '⚠ Take a mark off any answer that blames a named person. It is the fault the whole cycle is about and it is worth being strict on.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 21**'));
out.push(p('**1 The missing _be_ in the passive rule.** _Goods must checked_ · _must not thrown away_. The modal and the passive together are genuinely hard. Drill the three-word chunk — _must be checked_, _must not be moved_ — rather than the rule.'));
out.push(p('**2 _Sorry you feel that way_.** It will appear, usually from a learner who has heard it in a film and thinks it is polite. Say plainly that it is heard as an insult in English, and give them the replacement — _I am very sorry about that_ — as a fixed phrase.'));
out.push(p('**3 Blaming a colleague to a customer.** Not a grammar fault and the most expensive one in the unit. It comes from a good instinct: the learner wants the customer to know it was not them. Practise the refusal — _I am not going to say that about somebody who is not here_ — until it is available under pressure, because under pressure is the only time it is needed.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 21 · Answer Key');
