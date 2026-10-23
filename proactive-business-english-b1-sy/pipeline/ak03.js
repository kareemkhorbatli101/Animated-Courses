// Proactive Business English B1 · Syria Edition · Book 1 · Unit 3 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 3  What Had Already Happened'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **One tense, and it is the tense of fault-finding.** That is why 3.2 exists and why it is the cycle to teach most carefully. The past perfect makes it easy to say that something had not been done, and the three ways of saying it — with a name, with *nobody*, in the passive — are all true at once. The unit teaches learners to choose between them **by asking who will read the sentence**, which is not a grammar question at all.',
  '⚠ **Do not let the unit become a lesson in blame avoidance.** The honest finding of 3.2 is the opposite of what learners expect: *nobody had* is the version that can be a lie while every word is true, and writing it about a person who has already admitted the thing **takes the credit away from them**. Teach that half as carefully as the grammar.',
  '⚠ **3.5 and 3.7 need one teacher behaviour: resist settling things.** The honest end of most arguments about order is *this cannot be established*, and a class that reaches it has done the work. A teacher who supplies an answer teaches that there is always one.',
], C.grey, C.navy));

// ===================== 3.1 =====================
out.push(h2('3.1  What had already happened'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The useful instruction is *something nobody did that morning* — it produces an omission rather than an event, which is where the unit is going.'));
out.push(p('**b**  The first is two facts in sequence and the reader may put them in either order. The second says the pallet was **already** unwrapped when the signature happened, which is the whole of the Adra case in one sentence.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because it decides whose figure the twenty-four is: if twenty-two had already been written, nobody here agreed to twenty-four.  2 He had never seen a pallet opened and re-taped before, in thirty years — which is why he wrote nothing at all.'));
out.push(p('**Language box – Practise (samples):**  1 _I had already written twenty-two on it._  2 _He had telephoned twice before anybody rang him back._  3 _The machine had been restarted twice before the engineer came._  4 _The picking list had already been printed when the order was amended._  5 _The list had been superseded three days earlier._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'We took the order and then he changed it, and the warehouse picked the old one, and I amended the paper.'],
  ['B', 'You amended the paper when the warehouse had already picked?'],
  ['A', 'No — I amended it before they picked. The list had gone down at four.'],
  ['B', 'Then that is a different story, and the difference is one word. Say it again with *had*.'],
  ['A', 'The picking list had already been printed when I amended the order.'],
  ['B', 'And that is the sentence. The amendment was never on the list they worked from, which means nobody in the warehouse ignored anything.'],
  ['A', 'There is something else. The amendment had not been dated.'],
  ['B', 'You wrote it and did not date it?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one sentence with *had* in it. **Typical errors:** _I have written twenty-two before he signed_ (present perfect with a past reference point) · _the pallet was already opened_ where the point is that it happened earlier — the past simple loses the order · _it had been open_ for *had been opened* · and the content fault, which is a whole account in the past perfect, so that nothing is a condition any more.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What went wrong', 'What had already happened', 'Did anybody know?'], [
  ['we signed for a short pallet', 'it had been opened and re-taped before it came off the lorry', 'Abu Yasser saw it and wrote nothing'],
  ['the credit was not applied', 'the credit list had been superseded three days earlier', 'nobody'],
  ['the engineer found nothing', 'the machine had been restarted twice on the night shift', 'the night man knew'],
  ['the order went short', 'the picking list had already been printed', 'the counter knew and did not say'],
], [1.2, 2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"By the time we signed, the pallet had already been opened and re-taped. Abu Yasser saw it before he touched it and wrote nothing, because he did not know what to write."', '⚠ Count how many of the already-true things were **in writing somewhere** and how many were only in somebody\'s head. The second kind is commoner and more expensive, and in most classes it is three to one.']));
out.push(stage('5', 'Read'));
out.push(p('1 A signature goes **under** the figure it accepts, so a signature above our figure must have been there before the figure was written.  2 What was in the pallet before it was opened: *nobody here knows, and the two boxes may never have left Adra.*  3 That the request may be refused — *a reasonable thing to ask and an unreasonable thing to insist on*.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**THE LATAKIA DRUMS — what was already true before we accepted them**',
  'Three things had already happened before the drums were accepted into stock, and none of them appears on the delivery note.',
  '**One.** Two of the six drums **had been stored outside** before they reached us. The labels were bleached on one side and the top rims were dusted with sand, which does not happen in a covered lorry. Fadi noticed it at the gate and photographed them where they stood.',
  '**Two.** The delivery note **had already been signed** by the depot, in a hand that is not the driver\'s, which is how we know the drums were checked out of the depot by somebody who was not with them on the road.',
  '**Three.** We **had asked** in writing, on the 4th, for the batch numbers in advance, and no answer came. So the numbers were read off the drums on arrival and we have nothing to check them against.',
  '**What follows from that.** We have accepted the drums into stock and we have not used the two marked ones. ⚠ What we cannot say is whether the contents are affected. Nobody here can tell by looking and we have no equipment to test them.',
  '**What I have asked for.** A copy of the depot\'s own out-check for this consignment. They may refuse; it is their record and not ours.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three things, numbered, each in the past perfect', '✓'],
  ['One proved by physical evidence', '✓ – the bleached labels, the second hand'],
  ['A "what we cannot say" paragraph', '✓ – whether the contents are affected'],
  ['One ask, with the refusal conceded', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says prove one of them by physical evidence rather than memory, and you have two — the bleaching and the handwriting. The line I would ask about is *which does not happen in a covered lorry*: is that something you know, or something you are inferring? Because it is the sentence the whole claim rests on."'));
out.push(note('⚠ The honest answer is that it is an inference, and a good one. Unit 9 gives learners the grammar to say so — *that could only have been stored outside* — and it is worth flagging forward here rather than fixing now.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we cannot say" paragraphs and ask which writer the class would believe on the rest of the page. The answer is always the one who gave something away, and saying so is the cheapest lesson in the unit.'));
out.push(stage('7', 'Write freely – sample (≈137 words)'));
out.push(sample(null, ['The flood in the small store room was blamed on the rain, and the rain was the last thing that happened rather than the cause. The gutter had come down in January; it had been reported twice, once by me; and the man who was going to fix it had been told to wait until the new roof sheets came, which were ordered in February and arrived in June. So by the time it rained properly in March, the water had had two months of running down the inside of that wall and nobody had looked behind the shelving. What we lost was about 300,000 of paper and two days of moving stock. Everybody could have known. Two of us did know about the gutter and neither of us connected a gutter on the outside with paper on the inside, which in hindsight is not a difficult connection.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the rain was the last thing that happened rather than the cause"_   ✓ _past perfect for the condition, past simple for the steps._   ? _Who could have made the connection, and when?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Two questions, in this order: could somebody have known, and did somebody actually know and not say? ⚠ The second usually has a worse answer, and the honest reason is almost never concealment — it is that the person who knew the fact did not know it mattered.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The three things already true before the Jaramana dispute: the account had been opened in the old company name, the credit limit had never been reviewed since 2019, and the contact we had on file had left eighteen months earlier. None of the three is about the order that was refused.']));

// ===================== 3.2 =====================
out.push(pb());
out.push(h2('3.2  Because nobody had checked it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second half — *is it anybody\'s job?* — splits the list into two, and the half that is nobody\'s is the half this cycle is really about.'));
out.push(p('**b**  Least to most accusing: _The sheet had not been checked._ → _Nobody had checked the sheet._ → _Hala had not checked the sheet._ → _The sheet was not checked, as usual._ ⚠ The fourth is the most accusing of all and has no name in it, which is worth pointing out: *as usual* accuses everybody and cannot be answered.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — both, in different documents.  **b**  1 Whether you **could name a person and are choosing not to**.  2 The passive is for the file, read in a year by somebody who will not know her; it is **not** a way of avoiding a conversation this week.'));
out.push(p('**Language box – Practise (samples):**  1 a credit list not checked → with a name, for the manager who must move the Monday.  2 a guarantee not filed → passive, for the file; the gap outlives the person.  3 a gate sheet not signed → with a name, and the same day.  4 a price not re-quoted → passive, in the procedure page.  5 the generator fuel before a holiday → *nobody had*, honestly, because it is nobody\'s job and the gap is the finding.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Three versions. *I had not filed the guarantee.* *Nobody had filed the guarantee.* *The guarantee had not been filed.*'],
  ['B', 'All three true?'],
  ['A', 'All three. Filing them is not written down as anybody\'s job and I have always done it.'],
  ['B', 'Then the question is what the sentence is for. Who is reading it?'],
  ['A', 'Mr Ayoub, and then the file.'],
  ['B', 'For him, the first — with the reason, which is that it is not anybody\'s job and you have been doing it for nothing. For the file, the third, with a line saying whose job it is **now**.'],
  ['A', 'And *nobody had filed it*?'],
  ['B', 'Can you name a person and are you choosing not to? You can name yourself, which is the hardest version of that question and the only one that matters here.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write which version was chosen and for whom. **Typical errors:** _nobody had not checked it_ (double negative) · _it was not been checked_ · _it had not checked_ (missing the passive) · and the content fault, which is reaching for *nobody* when a name is available — including the writer\'s own.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The omission', 'With a name', 'With *nobody*', 'Passive', 'Reader'], [
  ['the credit list', 'Hala had not checked it', 'nobody had checked it', 'it had not been checked', 'Mr Ayoub → name'],
  ['the guarantee', 'I had not filed it', 'nobody had filed it', 'it had not been filed', 'the file → passive'],
  ['generator fuel', '—', 'nobody had ordered it', 'it had not been ordered', 'anybody → *nobody*, honestly'],
], [1.1, 1.2, 1.1, 1.2, 0.9]));
out.push(note('⚠ The dash in row three is correct: there is genuinely no name, because it has never been anybody\'s job. That is the one case where *nobody had* is the honest version, and a class needs at least one of them to see the difference.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The omission was the guarantee. I would write *I had not filed it*, because the reader is Mr Ayoum this week and because filing them has never been anybody\'s job and I would rather he knew that than thought I had simply forgotten."', '⚠ Write down every case where the speaker could name somebody and chose not to — then ask whether that person would rather be named. Most would, and the reason is in 3.2\'s Writer\'s box: being *nobody* removes the credit as well as the fault.']));
out.push(note('There is a deliberate slip in that sample — *Mr Ayoum* for *Mr Ayoub*. If a learner spots it, that is the surname check of Unit 1 working in a human reader, and worth saying so.'));
out.push(stage('5', 'Read'));
out.push(p('1 The **reason**: *the list is printed on Mondays and she works the counter alone on Mondays*, and she has never had a quiet twenty minutes on the day the list changes.  2 A **date** and a **change**: *since 1 November the list is printed on Fridays*, initialled by whoever prints it.  3 Writing one document for both readers — neither version is a softened copy of the other.'));
out.push(stage('6', 'Write with help – sample (134 words)'));
out.push(sample(null, [
  '**Version A — for Mr Ayoub, sent the same day**',
  'The shutter repair cost us 180,000 that we were entitled to free, because **I had not filed the fitting guarantee** when it came in March, and when the motor failed nobody could find it. Nadia asked me about it on the Tuesday before anybody had looked at the invoice, which is how we know what happened at all. The reason matters more than the fault: **filing guarantees has never been written down as anybody\'s job**, I have always done it because I happened to start, and in March I was covering two sites in the week it arrived.',
  '**Version B — for the procedure file, written a week later**',
  'A guarantee issued in March **had not been filed** and could not be produced when a claim arose in December; the repair was paid for in full. **Since 12 December**, every guarantee, warranty and service contract is filed in the blue folder in the office on the day it arrives, and the person who files it initials the folder index. The index is checked against the purchase ledger each quarter.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A has a name and a reason with more room than the fault', '✓'],
  ['Whoever disclosed it is credited', '✓ – Nadia asked before anybody looked'],
  ['B is passive, dated, names a change', '✓ – since 12 December'],
  ['Neither is a softened copy of the other', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says give the reason more room than the fault, and yours does — three clauses of reason to one of fault. The thing I would ask about is the name in Version A: it is your own. Would you have written it the same way if it had been Hala\'s?"'));
out.push(note('⚠ That question is the whole cycle and should be asked at least once in the class. Most learners find they are stricter with themselves than with a colleague, which is the right direction and worth saying out loud.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read Version A only and ask the class whether they would mind being the person in it. Where somebody would mind, ask which sentence does it — it is nearly always a missing reason rather than the name.'));
out.push(stage('7', 'Write freely – sample (≈133 words)'));
out.push(sample(null, ['I was once named in a report about a late consignment and the reason was not in it. The sentence said that I had not telephoned the customer, which was true. What was not in the report was that I had telephoned him twice, that both calls had been to the number on the file, and that the number on the file had been his old office, which had closed. I found that out myself a week later and told the manager, who said "ah" and nothing else, and the report was not amended. I would much rather have been named with the reason than not named at all, and I have never minded the naming. What I minded was being the only fact in a sentence that had three facts in it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"being the only fact in a sentence that had three facts in it"_   ✓ _the three versions._   ? _Was the reason ever added?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many would have preferred to be named **with the reason** rather than left as *nobody*. It is usually most of the room, and it surprises people — which is exactly why the cycle puts it to them rather than telling them.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['File version: *A credit limit revised on 8 October had not been recorded on the counter copy of the list. Since 22 October one list is printed on Fridays, dated and initialled by whoever prints it, and the superseded copy is destroyed.* No name, one date, one change.']));

// ===================== 3.3 =====================
out.push(pb());
out.push(h2('3.3  By the time I got there'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Three is enough; the shape is the point and learners pick it up fast once they have said it aloud.'));
out.push(p('**b**  The second. *By the time* takes the past simple and the main clause takes the past perfect; the third reverses it and stops making sense.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — three: the counter closed, the queue moved, the lease taken off the file.  **b**  1 It puts her five-to-ten and their three changes in the same sentence, so the reader does the arithmetic himself.  2 Because told in order it sounds like a morning of difficulties; told that way it says she was early and it made no difference.'));
out.push(p('**Language box – Practise (samples):**  1 _By the time I got to the depot at ten to, they had loaded the pallet onto another lorry, signed the paperwork and gone to lunch._  2 _By the time the engineer came, the fault had cleared, the machine had been restarted twice and nobody had written the log._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'How did the depot go?'],
  ['A', 'First the pallet was not there, and then they said it had gone on another lorry, and then the manager was at lunch.'],
  ['B', 'Say that again starting with *by the time*.'],
  ['A', 'By the time I got there, they had loaded our pallet onto the Homs lorry, signed the paperwork for it and sent the manager to lunch.'],
  ['B', 'And what time were you there?'],
  ['A', 'Ten minutes early. Half past eight for a quarter to nine.'],
  ['B', 'Then say that too. And what did you do about it?'],
  ['A', 'I got the Homs driver stopped at the weighbridge and took it off there, which cost an hour and not a day.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the *by the time* sentence and count the participles sharing the *had*; two or three is right. **Typical errors:** _by the time I had arrived, he left_ (reversed) · _by the time of I arrived_ · _by the time I got there, they have closed_ · and the content fault, which is leaving out the second sentence about what the speaker then did.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['By the time I…', '…they had… (two or three things)', 'What I did'], [
  ['got to the bank at five to ten', 'moved interviews upstairs, closed the counter and taken our lease off the file', 'asked for the officer by name; open by eleven'],
  ['got to the depot at half past eight', 'loaded our pallet on the Homs lorry and signed for it', 'stopped it at the weighbridge'],
  ['came back from Latakia', 'called the fitter, paid him and filed nothing', 'found the guarantee and wrote the procedure'],
], [1.2, 2.2, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Write down anybody whose **second** sentence was missing. Learners who have been taught to be modest leave out what they did, and the account then reads as a complaint about a bank. Say so once; it is a habit, not a language gap.'));
out.push(stage('5', 'Read'));
out.push(p('1 Because two of the three things will happen to the next person as well — the email is for them, not for the writer.  2 That the lease **had been taken off before they arrived**, so it was not a thing that could have been fixed at the counter: it stops the next person standing there for twenty minutes believing it can be.  3 Telephone the day before → the interviews moving; take two copies → the lease; ask for the officer by name → the closed counter and the queue.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**Subject:** Customs file 7741 — cleared, and three things that cost a morning',
  'Dear Mr Ayoub,',
  'The file is cleared and the drums are on the road. The rest of this email is about how it went, because two of the three things will happen to whoever goes next.',
  '**What I walked into.** By the time I got there at eight, they had moved the counter for our category to the far office, taken the broker\'s standing authority off the file and changed the form for the declaration. The appointment had been confirmed by telephone on the 3rd.',
  '**What I did.** I found the broker in the car park, borrowed his copy of the authority, and filled in the new form from the old one. Cleared by half past eleven. I had brought the original invoices rather than copies, which is the only reason the new form could be completed on the spot.',
  '**What had become of the authority.** It had been taken off the file at some point by somebody; nobody there could say when. ⚠ The useful part is that it **had gone before we arrived**, so arguing at the counter would have changed nothing.',
  '**What the next person should do.** Telephone the broker the day before and ask him to bring his own copy; take originals, not copies; and ask at the door which office our category is in rather than joining a queue.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The result in the first line', '✓'],
  ['One *by the time* sentence, three participles', '✓'],
  ['What was already fixed-in before arrival', '✓'],
  ['One instruction per obstacle, in order', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says one instruction per obstacle in the same order, and your three line up exactly. The sentence I would look at is *I found the broker in the car park* — that is the thing that actually saved the morning and it is not in the instructions. Can the next person do it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the instructions only and ask which the class would follow next week. The followable ones are the ones that cost a telephone call the day before; the others are *be prepared*, which is Unit 2\'s wallpaper in a new place.'));
out.push(stage('7', 'Write freely – sample (≈131 words)'));
out.push(sample(null, ['Renewing the vehicle papers took me three mornings and should have taken one. By the time I got to the first window, the office had moved the vehicle desk to a different floor, stopped accepting cash and begun requiring the owner rather than a representative. I am not the owner. I went back with Mr Ayoub on the second morning and we were told the form had been superseded in April. On the third morning we had the new form, the owner and a bank receipt, and it took eleven minutes. What I would tell the next person is one sentence: go to the window with nothing and ask what is needed, then come back the next day with all of it. The two wasted mornings were both attempts to do it in one.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"go to the window with nothing and ask what is needed"_   ✓ _by the time + past perfect._   ? _Could a telephone call have done the first morning\'s work?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how much of each morning a telephone call the day before would have saved. Usually most of it — and then ask why nobody telephones, which produces the honest answer that offices do not answer, and that is a finding too.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['For the bank run: telephone the branch before nine to ask whether the counter is open for business paying-in; take the stamp as well as the book; and if the queue is for personal accounts, ask at the door — business paying-in is a different window and nobody says so.']));

// ===================== 3.4 =====================
out.push(pb());
out.push(h2('3.4  No — it had already been counted'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most people start with *no* or *actually*, and the cycle offers something better: a question about a date.'));
out.push(p('**b**  _Actually it was the other way round_ corrects the order rather than the person. _No, that is wrong_ contradicts. _I think you will find that…_ is worse than either — it is a correction with a sneer in it. The fourth corrects by simply stating the chronology, which is the strongest of the four.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — he has the price rise after the order; it was three days before.  **b**  1 She asks the two dates as questions and lets him correct himself.  2 Because the customer had a quotation with fourteen days on it, so on the 14th he was inside it by two days — the order of events decides which of two true positions wins.'));
out.push(p('**Language box – Practise (samples):**  1 _The order came in on the 14th? And the price went up on the 11th? So it is the other way round — by the time he ordered, the price had already risen._  2 _The repair was on 2 March? And the guarantee ran to 1 April? Then it was inside, and the date we paid is not the date that counts._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'So he went over his limit, and we let the order through, and now accounts are asking why.'],
  ['B', 'Can I check one thing in that? The order was on the 12th?'],
  ['A', 'The 12th, yes.'],
  ['B', 'And the limit was raised on the 8th.'],
  ['A', '…The 8th. But the list at the counter is dated the 5th.'],
  ['B', 'So it is the other way round. By the time he ordered, the limit had already been raised — four days earlier — and the counter was working from a list that had been superseded.'],
  ['A', 'Then nobody went over anything.'],
  ['B', 'Nobody went over anything, and the rule that settles it is the date on the counter copy, which is our own rule and we wrote it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two dates and the rule. **Typical errors:** _by the time he had ordered, the price went up_ · _it is the other way around round_ · _Can I check one thing of that?_ · and the content fault, which is correcting the person rather than the order: *you have got that wrong*.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['The disagreement', 'The two dates', 'The corrected order', 'The rule that settles it'], [
  ['price rise and order', '11 Oct / 14 Oct', 'the price had already risen when he ordered', 'a written quotation beats a list'],
  ['guarantee and repair', '2 Mar / 1 Apr', 'the repair was inside the guarantee', 'the fitting invoice date, not the payment date'],
  ['limit and order', '8th / 12th', 'the limit had already been raised', 'the date on the counter copy'],
], [1.1, 1, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Write down any disagreement where nobody can name a rule. Those are the ones that come back every few months, and the finding is the missing rule rather than the missing fact. It is worth adding to the Book 1 list for Unit 6, which is about exactly that.'));
out.push(stage('5', 'Read'));
out.push(p('1 The answer and the figure — *you are right and we have credited the difference, 46,000, today*; what is **not** in it is any defence.  2 Two faults: not writing to him on the 11th, and the counter pricing from the list when a live quotation existed.  3 Shortening the fourteen days — *we have not* — which would have been the cheap way out and is the thing the letter refuses.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**Subject:** Invoice 3402 — you are right, and here is the chronology',
  'Dear Mr Jaber,',
  '**You are right and the waiting charge has been cancelled** — 95,000 — today. The rest of this letter is the chronology, because you asked for it.',
  '**6 November.** You booked the collection for the 9th at eleven, by email, and we acknowledged it.',
  '**8 November, 4.10 p.m.** We moved the collection to the 10th, by telephone, and spoke to somebody at your office whose name we did not take. That is the first thing we got wrong.',
  '**9 November, 11 a.m.** Your lorry arrived for the original booking. By then we **had moved** the collection, but you **had not been told** in writing — only by telephone to somebody unnamed.',
  '**9 November.** Your lorry waited fifty minutes and left. You charged for the wait.',
  '**Where the fault is.** Ours, twice. We changed a written booking by telephone, which our own card by the gate says we do not do, and we did not take the name of the person we spoke to.',
  '**What has changed today.** No booking made in writing is changed except in writing, and the person taking any call writes the name of whoever answered. ⚠ We have not asked you to telephone us to confirm changes; that would put our mistake onto your office.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The answer and the figure in the first line', '✓'],
  ['One line per date, in order', '✓'],
  ['A past perfect where the timelines cross', '✓ – *had moved / had not been told*'],
  ['Both faults named, an easier change refused', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says say what you have **not** changed, and yours refuses to push the confirming onto their office, which is the strongest line in the letter. The one I would ask about is *somebody at your office whose name we did not take* — you have named that as your fault. Is it? Or is it theirs for answering a telephone without saying who they are?"'));
out.push(note('⚠ A real question with no settled answer. The defensible position is the one the letter takes — you cannot control their telephone and you can control your own note-taking — and a learner who argues the other side is not wrong, only choosing a harder letter.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we have not changed" sentences. The convincing ones cost the writer something; the unconvincing ones refuse a change nobody wanted.'));
out.push(stage('7', 'Write freely – sample (≈135 words)'));
out.push(sample(null, ['We argued with a supplier for six weeks about whether a delivery had been refused or never offered. We said their lorry never came; they said our gate was shut. Both of us were certain and both of us were describing a real event, and in the end the thing that settled it was the gate log, which shows the gate shut at 1.05 on a Thursday for the generator changeover — which is in our own procedure and which nobody on our side had thought of. Their lorry had come at 1.20. Nobody had been dishonest at any point in six weeks. We had simply both been answering a question about a different half-hour. What it cost was six weeks of a relationship that had been good for nine years, over 240,000 of goods.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"both of us were answering a question about a different half-hour"_   ✓ _the corrected order, with a past perfect._   ? _Was anybody dishonest, or only wrong?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts in which anybody was actually dishonest. It is almost none, and it is worth saying out loud: most people enter a dispute expecting bad faith and almost never find it. ⚠ That expectation is itself what makes the disputes long.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['The open argument: whether the Jaramana order was cancelled or amended. Two dates: our note says cancelled on the 6th; their email says amended on the 6th. The rule that settles it is ours — an order is cancelled only in writing by the person who placed it — and by that rule it was amended.']));

// ===================== 3.5 =====================
out.push(pb());
out.push(h2('3.5  The chronology box'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the answer is usually *one or two of five*. That proportion is the cycle.'));
out.push(p('**b**  Only the last — _11 October, from the price list copy in the counter drawer_. The other three cannot be checked by anybody who does not already trust you.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — where the date comes from.  **b**  1 She writes the line and marks it **unrecorded** — never leaves it out.  2 Because everything else on the page was already known; the gap is the only line that will change anything on Monday.'));
out.push(p('**Language box – Practise (sample, one line of each status):**  _2 Oct | quotation issued | quotation book, carbon copy | recorded_ · _11 Oct | price list dated this day | counter drawer | **disputed** — office copy says the 8th_ · _11–13 Oct | customer not told | nothing at all | **unrecorded**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The chronology for the machine. The engineer was called on the 4th, he came on the 6th, and the fault came back on the 9th.'],
  ['B', 'Good. Now put beside each one where the date comes from.'],
  ['A', 'The 4th is in the diary. The 6th is on his docket.'],
  ['B', 'And the 9th?'],
  ['A', '…Nobody wrote it. I know because the night man told me.'],
  ['B', 'Then we have a date from one person\'s memory and nothing else. And the two restarts on the night shift?'],
  ['A', 'Also nothing. Also the night man.'],
  ['B', 'So two of your four lines rest on one man\'s recollection. Write them both and mark them **unrecorded**. ⚠ And do not write *the night man says* as though that were a weakness in him — it is a weakness in us, because we have never given him anywhere to write it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the lines marked *unrecorded* and what each gap would cost. **Typical errors:** _in early October_ in a chronology line · _11/10_ as a date · the source column filled in with a person instead of a document · and the content fault, which is leaving a line out because it cannot be proved.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Date', 'What happened', 'Where it is recorded', 'Status'], [
  ['4 Oct', 'engineer called', 'office diary', 'recorded'],
  ['4–6 Oct', 'machine restarted twice, night shift', 'nothing — the night man\'s account', '**unrecorded**'],
  ['6 Oct', 'engineer attended; no fault found', 'his docket, our copy', 'recorded'],
  ['9 Oct', 'fault returned', 'nothing written at the time', '**unrecorded**'],
], [0.9, 1.8, 1.8, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The chronology has four lines. Two are recorded on a document I could produce; two rest on one man\'s memory. The gap is that the night shift has nowhere to write anything, and it would cost us the whole guarantee claim if the fitter asked when the fault first appeared."']));
out.push(stage('5', 'Read'));
out.push(p('1 *Nothing here is from memory* — because that sentence is what makes the table evidence rather than an account.  2 The two undated-in-use price lists: the 46,000 is settled in two lines, and two lists in one building will cost that again if nobody touches them.  3 **A gap in the way we work** — we have no note of calls out, so we cannot even show that nobody telephoned him.'));
out.push(stage('6', 'Write with help – sample (137 words)'));
out.push(sample(null, [
  '**CHRONOLOGY — machine 2, the guarantee claim. Built 12 October from the documents named; nothing here is from memory except where marked.**',
  table(['Date', 'What happened', 'Where it is recorded', 'Status'], [
    ['14 Mar', 'machine commissioned; 12-month guarantee', 'the fitter\'s invoice', 'recorded'],
    ['1–3 Oct', 'machine restarted twice, night shift', 'nothing', '**unrecorded**'],
    ['4 Oct', 'engineer called', 'office diary', 'recorded'],
    ['6 Oct', 'engineer attended; no fault found', 'his docket', 'recorded'],
    ['9 Oct', 'fault returned, 11 p.m.', 'nothing at the time; noted 10 Oct', '**undated at the time**'],
    ['10 Oct', 'machine stopped and locked off', 'my note, written that morning', 'recorded'],
  ], [0.8, 1.9, 1.9, 1.2]),
  '**Three findings, and only one of them is about the guarantee.**',
  '**1.** The machine is inside its guarantee until 14 March and the claim stands.',
  '**2.** The fault first appeared on the night shift and we cannot date it. If the fitter argues that it began before commissioning, we have nothing to put against him for the first three days. That is the expensive finding.',
  '**3.** ⚠ The night shift has **nowhere to write anything**. There is no log on that machine and never has been. The *unrecorded* lines are not gaps in this chronology; they are a gap in the way we run nights.',
  '**What has changed.** A hardboard log on the wall by machine 2, with the date printed down the side, from the 12th. The night man wrote the first three lines himself.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A source for every line, by document and place', '✓'],
  ['At least one line *unrecorded* or *disputed*', '✓ – two'],
  ['Three findings, one about the way you work', '✓ – finding 3'],
  ['A fix with a date', '✓ – the 12th'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says the gap should be a finding about the way you work, and finding 3 is exactly that. The detail I would keep above everything else is the last line — *the night man wrote the first three lines himself*. Is that in the right place? It is the only evidence on the page that the fix will survive."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the *unrecorded* lines and the third findings. Ask which gap the class recognises from their own workplace; three or four hands go up for the same one, every time, and it is usually a night shift, a Saturday or a second site.'));
out.push(stage('7', 'Write freely – sample (≈132 words)'));
out.push(sample(null, ['Nobody at our place can date the day the big press was last serviced. Everybody knows it was serviced, because we all remember the man coming and we remember that he said the bearing would want doing in a year. There is no docket, no invoice in the file and no entry anywhere, because he was paid in cash by somebody who is no longer here and the cash book for that year is in a box. In an argument with the insurer it would cost us the whole claim, because the first question would be the service record. What would fix it is one line in a book on the wall: date, who came, what he said, who paid. Four columns and a biro. We have had eleven years to write it and we have not.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"four columns and a biro"_   ✓ _dates as day and month, with sources._   ? _Who would be asked if it were disputed?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ The pattern worth naming: the facts nobody records are the ones nobody expected ever to have to **prove**. Everybody knows them, which is exactly why nobody writes them, and the day they are disputed is the day the knowing is worth nothing.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Built the chronology of the Jaramana account and showed it to Bassel, who has been arguing about it since August. He stopped at the line marked unrecorded — the telephone call in which the limit was agreed — and said "then neither of us can be right", which is what the table is for.']));

// ===================== 3.6 =====================
out.push(pb());
out.push(h2('3.6  I had never done it before that day'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. *Worked it out* is the commoner answer, and it is the whole argument for 3.6\'s one-page procedure.'));
out.push(p('**b**  Right: _It was the first time I had done it_ and _I had never done it before_. Wrong: the second (needs the past perfect after *the first time* with a past reference point) and the fourth (present perfect with *before that day*).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It **explains** why the second copy is missing; it does not **excuse** the two hours spent looking for it — and a learner is allowed to say the first without claiming the second.  2 She writes the procedure on one side of paper that afternoon and has Hala correct it, because Hala is the only person who knows what it does not say.'));
out.push(p('**Language box – Practise (samples):**  1 _It was the first time I had raised one. It explains the missing copy; it does not excuse the two hours._  2 _I had never filled in a customs form before. It explains the wrong value; it does not excuse not telephoning the broker._  3 _It was the first time I had covered the second site. Asked whom? Nobody — everybody who knows was at the other site._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The customs form. I did it wrong and I do not know how.'],
  ['B', 'Tell me what you did, in order.'],
  ['A', 'I took the value off the invoice, I wrote it in the box, I signed it, and I gave it to the broker.'],
  ['B', 'And the declared value?'],
  ['A', '…That is a different figure?'],
  ['B', 'Had you ever filled one in before?'],
  ['A', 'No. It was the first time I had done it. Bassel does them and he was in Homs.'],
  ['B', 'Then the sentence is *it was the first time I had filled one in*. It explains the figure and it does not excuse not telephoning him, which you could have done in a minute.'],
  ['A', 'There is a note on how to do it, apparently. In a drawer.'],
  ['B', 'Then *asked whom* has an answer and *where is it written* does not, and the second one is the finding.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the first time explained and what it did not excuse, and then answer *asked whom?*. **Typical errors:** _it was the first time I did it_ · _I have never done it before that day_ · _it was my first time to do it_ · and the content fault, which is a first time offered as a complete defence.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['The first time', 'What it explained', 'What it did not excuse', 'Anybody to ask?'], [
  ['raising a credit note', 'the missing second copy', 'the two hours of searching', 'no — both were out'],
  ['a customs form', 'the wrong value', 'not telephoning Bassel', 'yes, by telephone'],
  ['covering the second site', 'the takings in the wrong bag', 'nothing — nobody could have known', 'no'],
], [1.2, 1.4, 1.4, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Count the cases where there was nobody to ask. Each one is a procedure living in one person\'s head, and the count is the argument for stage 6. ⚠ In most classes it is half.'));
out.push(stage('5', 'Read'));
out.push(p('1 Hala, the day she raised her first one — and the page did not mention the second copy, which is the thing that actually went wrong.  2 Do it anyway and telephone afterwards rather than before, **because** waiting has cost a customer four days twice this year: a credit note slightly wrong on the right day is cheaper than a right one on the wrong day.  3 Credit notes against an invoice already paid — Nadia does those, nobody else ever has, and there is no page for it.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**COVERING THE BAGHDAD STREET COUNTER — one page, written 26 October by Nour and corrected the same week by Fadi, who covered it for the first time and found out what this page did not say.**',
  '**When.** Saturdays, and any day the counter staff are at Mezzeh. ⚠ Not for a half-day: if it is only two hours the store stays shut, because an open store with nobody who can price is worse than a closed one.',
  '**The keys.** Shutter key and till key are on the same ring, in the Mezzeh office drawer, **not** at the store. Take them with you and bring them back.',
  '**Prices.** The twenty lines are on a card by the till. ⚠ **Nothing is sold that is not on the card.** If somebody asks for something else, telephone Mezzeh — do not guess, and do not take a price from a Mezzeh list, because the store price includes delivery and the Mezzeh price does not.',
  '**The takings.** Into the **blue** bag, not the black one. The black bag is Mezzeh and the bank treats them as two accounts. This is the thing nobody tells anybody.',
  '**What to do if you have never covered it.** Go anyway. Telephone me at ten and at one, whether or not anything has happened; two calls are cheaper than a shut store.',
  '**What this page does not cover.** A complaint about goods bought at Mezzeh. Take the name and the number and nothing else.',
  '_Corrected by Fadi, 28 October: the original did not say the bags were different, which is the only thing that went wrong._',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Where it lives, and how many copies / which bag', '✓'],
  ['What to do if you have never done it, with the reason', '✓ – two calls are cheaper than a shut store'],
  ['What the page does not cover, and who does know', '✓ – complaints about Mezzeh goods'],
  ['One thing that is *not* a reason to use it', '✓ – not for a half-day'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says have it corrected by the person who just got it wrong and say so, and the line at the bottom does it with a date. The thing I would ask about is the prices paragraph: it tells me not to guess and not to use the Mezzeh list — so if Mezzeh does not answer the telephone, what do I do?"'));
out.push(note('⚠ Exactly the right question, and the honest answer belongs on the page: *if nobody answers, say we will telephone them back and take the number.* Every procedure page needs one line for the case where its own instruction fails.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what to do if you have never done one" lines. The ones that give real permission have a **cost comparison** in them; the ones that only sound like permission say *do your best*.'));
out.push(stage('7', 'Write freely – sample (≈134 words)'));
out.push(sample(null, ['The first important thing I did alone here was a bank paying-in for both sites, three weeks after I started covering them. What I did not know was that the two sites are two accounts and that the paying-in books are not interchangeable. Nobody had told me because to everybody else it is as obvious as the door being on the left. I could have asked Nadia, who was at her desk, and I did not ask, because I had been there three weeks and it felt like the kind of thing you should know. It took a fortnight to untangle and a letter from the branch. If I wrote one page for the next person it would have one sentence at the top in capitals: THERE ARE TWO ACCOUNTS AND TWO BOOKS, and the rest could be anything.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it felt like the kind of thing you should know"_   ✓ _it was the first time I had…_   ? _Is there a page now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ The sentence to collect from this stage is some version of *it felt like the kind of thing you should know*. It is the real reason first-timers do not ask, it has nothing to do with language, and a class that hears three people say it stops believing it is only them.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Wrote the page for the quarterly stock count, which only I have ever done, and gave it to Hala, who has never done one. She found four things it did not say, including that the count sheets must be initialled page by page and not only at the end.']));

// ===================== 3.7 =====================
out.push(pb());
out.push(h2('3.7  Review & Mediate: what happened first?'));
out.push(stage('1', 'Get ready – Unit 3 quiz (answers)'));
out.push(p('**1** A **condition** — the thing that was already true, lifted out of the sequence.  **2** *Nobody had…* — it is the only one that can be a lie while every word in it is true.  **3** _By the time I **got** there, he **had** left._  **4** **unrecorded** and **undated**.  **5** A first time **explains** and does not **excuse**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 She refuses to decide which of them remembers better.  2 That there is a document people write on by hand which has nowhere on it for a date — the finding is on neither side of the argument.'));
out.push(p('**Language box – Practise (sample mediation):**  _"I am not going to decide which of you remembers better, because you both remember perfectly. Where is each date recorded? The list is time-stamped; the amendment is undated. What makes you say it came after — the warehouse picked twelve? That is an inference and a good one, and it is not a date. So: list time-stamped at four, amendment undated, warehouse picked twelve, and **the order of these two events cannot be established.** From this afternoon amendments are initialled and timed."_'));
out.push(stage('3', 'Practise – sample with trio 2'));
out.push(dlg(null, [
  ['A', 'He was telephoned about the price. I am sure of it.'],
  ['B', 'He was not. He told me himself that nobody rang him.'],
  ['C', 'Where would a call out be recorded?'],
  ['A', 'It would not. We do not keep a note of calls out.'],
  ['C', 'Then neither of you can be shown to be right, and I am not going to ask either of you to remember harder. What makes you say he was telephoned?'],
  ['A', 'Because I remember deciding to do it.'],
  ['C', 'That is an inference about yourself and it is the commonest kind there is — deciding to do a thing and remembering it as done. It is not a date.'],
  ['B', 'So we write that it cannot be established.'],
  ['C', 'We write that, and we start a pad by the telephone this afternoon. ⚠ And neither of you was wrong about anything, which is worth saying to each other.'],
]));
out.push(note('⚠ *Deciding to do a thing and remembering it as done* is worth taking slowly. It is not a joke and it is not an accusation; it is a thing everybody does, and naming it is how a mediation ends without a loser.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the line that says what cannot be established, and the change that follows. ⚠ Both are required: a mediation that reaches *cannot be established* and stops has left the room worse off than before.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I mediated for', 'What each believed', 'What is actually recorded', 'The finding'], [
  ['Bassel and Hala', 'the amendment came after / before the list', 'the list is time-stamped; the amendment is undated', 'nobody dates handwritten amendments'],
  ['Nadia and Bassel', 'the customer was / was not telephoned', 'nothing at all', 'there is no note of calls out'],
], [1, 1.3, 1.3, 1.4]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"Bassel believed the amendment came after the picking list and Hala believed it came before. What is recorded is the list, time-stamped at four; the amendment is in Hala\'s hand and undated. Both of them had good inferences and neither had a date. What cannot be established is the order, and the finding is that our order form has nowhere to write a time — which is now a box on the reprinted form."']));
out.push(p('This is the **third** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a dispute about order is almost never a dispute about memory. It is a dispute about which documents are dated.** Everybody in it is telling the truth and the undated document is the only thing at fault — which is why the mediation in 3.7 ends with a box on a form rather than with an apology.'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 5)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'B', 'B', 'B', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**1** B — *the order of the two events could not be established*.  **2** B — the form *had nowhere on it for a date*; nobody\'s memory is at issue.  **3** B — *both were certain and both were honest*.  **4** B — *the order form has been reprinted with a box for it*.  **5** **A** — four seconds for the new step; four minutes was the argument and ten seconds is the next one.  **6** B — *so that the next disagreement of this kind will take ten seconds instead of four minutes*.'));
out.push(note('⚠ Question 5 is a three-numbers question and it is the one learners lose. All three figures are in the text and only one of them belongs to the step. ⚠ Part 5 at B1 Business Preliminary rewards finding the right sentence, not understanding the whole text — so teach the habit of underlining the question\'s own words in the passage before choosing.'));
out.push(stage('6', 'Write with help – exam sample (74 words)'));
out.push(sample(null, ['Two of us disagreed last week about whether an amendment was written before or after the picking list was printed. Neither could be shown to be right, because the list is time-stamped by the machine and handwritten amendments are not dated at all. What that showed is that our order form has nowhere to record a time. From this afternoon every handwritten amendment is initialled and timed. The form has been reprinted and this takes four seconds. Nobody is being blamed.']));
out.push(stage('6P', 'Check together'));
out.push(p('Three points: what happened · what it showed (**the gap, not the people**) · what changes, from when, with its cost. Seventy-four words, inside the band. ⚠ The commonest fault is naming the two colleagues, which spends words and turns a memorandum into a report about people.'));
out.push(stage('7', 'Write freely – sample (≈130 words)'));
out.push(sample(null, [
  '**CHRONOLOGY — the Jaramana account, still disputed. Built 29 October; sources named.**',
  '2019, month unknown: the account was opened in the customer\'s old company name — **undated**, the opening form is missing. 4 August: the order was placed by telephone — recorded on the counter pad, initialled. 4 August: a credit limit was agreed in that same call — **unrecorded**; both parties remember a figure and the figures differ by 300,000. 7 August: the order was refused by accounts — recorded, Nadia\'s note. 11 August: the customer wrote to Mr Ayoub — recorded, his letter is on file.',
  'Bassel infers from the order size that the higher figure was agreed; the customer infers the same from having placed the order at all. **Both inferences point the same way and neither is a record.** What cannot be established is the limit agreed on 4 August, and it never will be.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The document people write on with nowhere to date: the goods-returned slip. Somebody writes the reason and signs it and there is no date box, so a return can only be dated from the credit note that follows it, which is sometimes a fortnight later. I have added a box and reprinted fifty.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 3 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'b', 'a', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _had written_.  **2** _had already been opened_.  **3** _Nobody **had** checked_ — *had not* would be a double negative.  **4** _they **had closed**_ after *by the time*.  **5** _by the time I **got** there_ — the *by the time* clause is past simple.  **6** _the first time I **had raised** one_.  **7** _I **had** never seen_.  **8** _**had** been taken_.'));
out.push(note('⚠ Questions 4 and 5 are one point in two halves and should be marked as a pair: the *by the time* clause takes the past simple and the main clause takes the past perfect. A learner who gets one and misses the other has the halves the wrong way round, which is the error the cycle predicts.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Quotation issued', 'Price list dated', 'Order placed', 'Marked *unrecorded*', 'What has changed'], [[
  '2 October', 'two lists — the 8th (office) and the 11th (counter)', '14 October, by telephone, taken by Hala', 'the 11th to the 13th — the customer was not told', 'one list, printed Fridays, dated and initialled; old copy destroyed',
]], [1, 1.6, 1.4, 1.5, 1.6]));
out.push(note('The second gap needs **both** dates to earn the mark — one list is not the finding, two are. The fourth needs the **period** and what is missing; *the customer* alone is not enough.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (66 words)', ['14 Mar | machine commissioned, 12-month guarantee | the fitter\'s invoice | recorded. 1–3 Oct | restarted twice on nights | nothing | **unrecorded**. 6 Oct | engineer attended, no fault | his docket | recorded. 9 Oct | fault returned | noted the next morning | **undated at the time**. The unrecorded lines are not a gap in this chronology; they are a gap in the way we run nights, because there is no log on that machine.']));
out.push(box('Marking the Unit 3 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Four lines with dates (1) · **a source for every line** (2) · at least one marked *unrecorded* or *undated* (2) · one sentence saying what the gap is a gap in (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for sources are lost by a **person** in the source column. *Abu Yasser* is not a source; *the gate sheet, in the warehouse* is. Where a line genuinely rests on somebody\'s account, the source is *nothing — X\'s account*, which earns the mark and the *unrecorded* mark together.',
  '⚠ A chronology with no gap in it scores 0 of the 2 *unrecorded* marks, **and** the teacher should look at it again: four lines of a real matter with four documents behind them is rare enough to be worth checking rather than rewarding.',
  '⚠ The last two marks are for a gap **in the way they work**, not in the paperwork of this one case. *We should have written it down* scores 1; *there is no log on that machine and never has been* scores 2.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 3**'));
out.push(p('**1 The past perfect used for everything.** Once learners have the tense they will put the whole account in it, and then nothing is a condition and the reader cannot tell what was already true from what happened next. ⚠ The rule to give is a **ratio**: one past perfect to open, then the past simple. If a paragraph has four *hads* in it, three of them are doing no work. This is a style fault rather than a grammar one and no harness will ever catch it — read for it.'));
out.push(p('**2 _Nobody had_ as a reflex.** Learners reach for it because it feels kind, and 3.2 shows that it is sometimes the opposite. Expect resistance to the idea that a person might rather be named: it runs against a strong and decent instinct. ⚠ Do not argue it — put it to the room as the question in 3.2 stage 7 and let three people answer. Hearing a colleague say *I would rather have been named with the reason* settles it in a way no explanation does.'));
out.push(p('**3 Treating *cannot be established* as a failure.** This is the hardest thing in the unit for both learners and teachers. A class trained on exercises expects every question to have an answer, and 3.5 and 3.7 ask them to write down that one does not. ⚠ The repair is to insist on the **second half**: the line that cannot be established is always followed by a change, and the change is the result. A mediation that ends in *we cannot know* and nothing else has indeed failed — not because it was honest, but because it stopped one sentence early.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 3 · Answer Key');
