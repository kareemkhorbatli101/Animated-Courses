// Proactive Business English B1 · Syria Edition · Book 2 · Unit 13 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 13  Plans, Intentions and Arrangements'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Book 2 opens here, and three things change on this page and stay changed.** The guided task asks for **60 words or more** and the free task for **140 to 180**; the peer-review slip takes one extra move — ⚠ **name the reader you are being before you quote the criterion**; and every cycle 7 of this book hands something to somebody who has to act on it. **Lina Barakat, trainee administrator, started on 2 January**, and she is usually that somebody.',
  '⚠ **The unit is not about the future tense.** It is about the difference between five claims that all look like dates: arranged, decided, intended, predicted, and published. ⚠ **A class taught this as grammar will produce correct sentences and the same bad programmes**, so the evidence column in 13.1 is the lesson and the forms are the equipment.',
  '⚠ **The one thing to expect to be argued with about is the hedge.** Learners — particularly confident ones — will say that *I intend to, and that depends on* sounds weak. Nadia answers it in 13.2 and the answer is worth saying twice: ⚠ **the hedge is where the risk is kept. Put it in the sentence and it stays in the sentence; leave it out and it moves to the relationship.**',
], C.grey, C.navy));

// ===================== 13.1 =====================
out.push(h2('13.1  It is arranged, and here is the evidence'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Insist on the evidence before the thing. A learner who cannot name the evidence has found the point of the cycle in six seconds.'));
out.push(p('**b**  *We are loading on the 11th* — arranged. *We are going to load* — decided. *We plan to load* — intended. *I think we will load* — predicted. ⚠ All four are grammatical and only the first says anybody else knows.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **One** — Fadi\'s run on the 11th, which is in his sheet and he has read it. Ms Shamsi\'s collection is her word; the packing is an intention with nobody named; the clearance is a prediction; the sailing is a fact nobody arranged.  2 That writing the evidence next to every date ⚠ **tells you where the programme is going to break, which is not the same question as whether the dates add up. They always add up. That is what a programme is for.**'));
out.push(note('⚠ Mr Ayoub\'s last line is the one to put on the board. Learners check programmes by adding up the days, and the days always work, because the person who wrote the programme made them work. The useful reading is vertical, not horizontal: **what is behind each line, one line at a time.**'));
out.push(p('**Language box – Practise (samples):**  1 _the audit is on the 20th_ — arranged, Mr Attar in writing.  2 _Ms Shamsi is collecting on the 8th_ — arranged verbally; her word, telephone, the 6th.  3 _we are going to repaint the counter_ — decided, nobody told, no date.  4 _I think the clearance will take a day_ — predicted; one day twice and three days once this month.  5 _the generator runs from one until four_ — published, in effect; **not ours to move.**'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'We are collecting on the 8th, we are packing on the 9th and the 10th, and Fadi is driving on the 11th.'],
  ['B', 'Say that again and after each one tell me the evidence.'],
  ['A', 'Collecting on the 8th — Ms Shamsi confirmed by telephone on the 6th.'],
  ['B', 'Her word, then. Not nothing. Next.'],
  ['A', 'Packing the 9th and 10th — that is us, so it is arranged.'],
  ['B', 'It is intended. Who is packing?'],
  ['A', '…Abu Yasser and Lina, except Lina is at the bank on the 9th.'],
  ['B', '⚠ And which of these is a fact you have not arranged? The vessel at 6.40 on the 14th — and it is the only one of the five that is certain.'],
]));
out.push(note('⚠ The exchange is built so that the strongest claim on the page belongs to somebody else. ⚠ That is usually true and it is usually missed: **the only certain line in most programmes is the one the writer has no control over**, and everything they do control is softer than they think.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners rank the five claims and name the one that will break first. **Typical errors:** _we will collect on the 8th, it is arranged_ (*will* for an arrangement) · _we are going to load on the 11th, Fadi has confirmed_ (⚠ **the continuous is needed once the other party knows**) · _it is arranged because it is us_ · and the content error, which is ranking the fixed point as the weakest line because nobody arranged it. ⚠ It is the strongest. Nobody arranged it **because** it does not need arranging.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The date', 'How I would say it', 'The evidence I hold', 'What the claim really is'], [
  ['8 Jan', 'we are collecting the cartons', 'her word, telephone, 6 Jan', 'arranged, verbally'],
  ['9–10 Jan', 'we are packing', '⚠ nothing — nobody named', 'an intention'],
  ['11 Jan', 'Fadi is driving down', 'in his sheet; he has read it', '**arranged**'],
  ['12 Jan', 'it clears', 'what everybody says it takes', 'a prediction'],
  ['14 Jan', 'the vessel sails at 6.40', 'the published sailing list', '⚠ **a fact we did not arrange**'],
], [1, 1.6, 1.6, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my five dates, one is arranged, three are intended and one is a fact I did not arrange. The evidence I am thinnest on is the packing, which has nobody\'s name against it at all."', '⚠ **Count how many people claimed their own work as arranged with nobody named in it.** It is usually most of the room, and it is usually the step that slips — because the writer is the only person who knows it is due, and the writer is busy.']));
out.push(stage('5', 'Read'));
out.push(p('1 **The load leaving on the 11th** — it is in Fadi\'s sheet and he has read it.  2 Because Mr Jaber\'s own clearances this month took ⚠ **one day twice and three days once**, so *the 12th* is a range and the writer is planning on three.  3 **The vessel at 6.40 on the 14th**, because ⚠ *nothing we do after 6.40 on the 14th is worth anything to Ms Tannous* — so every other date exists to serve it and it is not the one that gives.'));
out.push(note('⚠ The sentence worth lifting out is the structural one: **only one of the five steps has a named person who has read it, and the two softest entries sit back to back in the middle, so a slip in either eats both spare days at once.** ⚠ Learners look for the weakest line; the finding is about **where the weak lines are next to each other.**'));
out.push(stage('6', 'Write with help – sample (96 words)'));
out.push(sample(null, [
  '**THE BAKERY DELIVERY — THE FOUR DATES AND WHAT IS BEHIND THEM. 9 January. R. Khoury.**',
  '14 Jan | flour arrives | we are taking delivery | the mill\'s confirmation, in writing | **arranged**',
  '15 Jan | mix and prove overnight | we are mixing | ⚠ nothing — the night man has not been told | **an intention**',
  '16 Jan | bake and box | it bakes by six | ⚠ what it usually takes | **a prediction**',
  '16 Jan | the hotel\'s van collects at 07.00 | the van comes at seven | their own standing time | ⚠ **a fact we did not arrange**',
  '⚠ **What this table tells me that the dates did not.** The two soft lines are the mixing and the baking, and they are consecutive, so there is no night between them to recover in. And the one fixed line is the hotel\'s van, which does not wait.',
  '**What I am doing about each.** The night man is told today and signs the sheet. The baking is given an extra hour by starting the oven at four.',
  '⚠ **And the one line I will not move.** The van at seven, because nothing we bake after seven goes anywhere that day.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what it really is* column, filled for every row', '✓'],
  ['*nothing* written where there is nothing', '✓ twice'],
  ['What the table shows that the dates did not', '✓ the two soft lines are consecutive'],
  ['The one line that will not move', '✓'],
], [5, 1]));
out.push(note('⚠ **The band-3-plus-one slip is new and must be enforced from this cycle.** A slip that begins *the box says* without first naming the reader is sent back. ⚠ The reason is in the box: the same programme is sound for Mr Ayoub, who knows who packs, and useless for Lina, who does not — **so a question asked without saying which of them you are cannot be answered.**'));
out.push(stage('6R', 'Share'));
out.push(p('The *what it really is* column, read alone. ⚠ **Ask which programme is most likely to slip from that column only**, and the class will be right — which is the argument for the column.'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  'In 2022 I told a customer his shutters were arranged for the Tuesday. What the word rested on was a conversation with the fitter in a corridor, in which he had said *probably Tuesday, if the Monday job finishes*.',
  'I did not hear the condition. I heard the day. I wrote *arranged* in the book and I telephoned the customer and used the word *arranged*, and he took the Tuesday morning off work and sat in an empty flat from eight until noon.',
  'The Monday job did not finish. The fitter told me on the Monday evening, which was the first moment he had any reason to think I was expecting him.',
  '⚠ **The cost was not the Tuesday.** The cost was that the customer did not believe any date I gave him for the rest of the job, and he began telephoning the fitter directly, which meant I stopped knowing what was arranged at all.',
  '⚠ **What the word rested on was a corridor and a conditional**, and what it had to rest on was a line in the fitter\'s own sheet with his handwriting in it.',
]));
out.push(note('⚠ The second half is the half to teach: the cost of a false *arranged* is not the wasted morning but the loss of the writer\'s standing as a source of dates. ⚠ **After that, the customer routes round them** — and a coordinator nobody routes through cannot coordinate.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer, waiting in the flat"   ✓ _does every date carry its evidence?_ — "no: *arranged* rests on a corridor"   ? _what did the word actually rest on?_ — "a conditional you did not hear"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three false arrangements rested on the writer\'s own work or on a conversation with no document behind it. ⚠ **The step nobody checks is the one you own**, because there is no one to remind you and no document that fails if you forget.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['My three dates this week: the stocktake on Thursday — evidence **nothing**, nobody else knows; the bank on Friday at ten — evidence a reference number; the figures to Mr Attar by the 20th — evidence his letter. ⚠ Writing *nothing* against the first one took four seconds and it is the only one of the three I have now told anybody about.']));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  What I intend to do, and what I am not pretending'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second half of the question is the work: *what would have to happen for it to become arranged* almost always turns out to be **telling one other person.**'));
out.push(p('**b**  Strongest to weakest: _I am going to_ · _I intend to_ · _I plan to_ · _I aim to_ · _I hope to_. ⚠ Accept small differences in the middle three and refuse any order that does not have *hope* last.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It promises both — ⚠ because *nobody outside this office knows the difference between what you have arranged and what you have decided on your own.*  2 So that she can ⚠ **decide what to do about the half that is not arranged**: *a buyer does not want your confidence; she wants to know which of your dates she can put in her own programme.*'));
out.push(note('⚠ Nadia\'s exchange with Nour contains the whole argument against hedging-as-weakness and it is worth reading aloud twice. ⚠ The decisive line is the last one: **being wrong about a sentence that said *we intend to* is forgivable; being wrong about *we will* is a broken promise, and she will remember it for years.** The hedge is not modesty — **it is where the risk is kept.**'));
out.push(p('**Language box – Practise (samples):**  1 _I intend to send the quotation tomorrow; that depends on the trade price, which Ms Shamsi has not sent._  2 _I aim to finish the stocktake this month, and I may miss it._  3 _I intend to have the payment in before the 20th; that depends on the customer\'s own clearing, which takes two days._  4 _I plan to have Lina trained by March; that depends on Nadia, who finishes at four exactly._  5 ⚠ _I hope to open on a Saturday again, if the nineteen orders of the trial become thirty._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your note says *we intend to have Lina trained on the export paperwork by the end of February*.'],
  ['A', 'Which is true. I do intend to.'],
  ['B', 'And Mr Ayoub will read it as a commitment, because it has a date on it.'],
  ['A', 'So I should say she will be trained?'],
  ['B', 'No. Say what is arranged — which is nothing — and what it depends on. ⚠ *Nothing is arranged yet. I intend to have Lina trained by the end of February; that depends on Nadia, who finishes at four exactly, so it has to be inside the working day or it has to be somebody else.*'],
  ['A', 'That looks weak.'],
  ['B', '⚠ It looks like somebody who has noticed that the plan needs an hour that does not exist — and it is the only version Mr Ayoub can do anything about.'],
]));
out.push(note('⚠ Role card 2 is the harder one and the one to use for the whole-class demonstration: **a plan whose dependency is a person\'s eleven-year habit is not a plan with a risk in it, it is a plan with a wall in it.** ⚠ The honest sentence names the wall, and naming it is what lets somebody else move the plan or the person.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the original line, the two sentences it became, and the dependency. **Typical errors:** _I hope to send it_ with nothing after it (⚠ tells the reader to ignore the line) · _we intend to deliver on Tuesday_ where Tuesday is in a driver\'s sheet (⚠ **under-claiming is also an error** — an arrangement reported as an intention makes a reader plan a margin they do not need) · and the content error, which is giving the dependency without the worst case.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I said', 'What I meant', 'The dependency', 'How they probably read it'], [
  ['"We will have it with you Thursday."', 'I intend to', 'the clearance', 'a promise'],
  ['"I hope to get to it this week."', 'almost nothing', 'an empty afternoon', 'he will do it'],
  ['"We are shipping on the 11th."', 'arranged — Fadi, in his sheet', 'none', '⚠ correctly'],
  ['"The figures will be ready for the audit."', 'I aim to', 'Nadia after four', 'a commitment'],
  ['"We are going to start on Saturdays again."', 'decided, nobody told', 'thirty orders, not nineteen', 'it is happening'],
], [1.7, 1.2, 1.5, 1.5]));
out.push(note('⚠ Row three is in the table so that one row is **right**. A learner whose five rows are all mis-graded has probably mis-marked one: ⚠ **an arrangement reported as an arrangement is not a fault, and the exercise is not a hunt for hedges.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said *we will have it with you Thursday*. I meant I intend to. It depended on the clearance, which I did not say, and they read it as a promise."', '⚠ **Count the promises in the room that were intentions with the dependency left off, then ask what the dependency was in each case.** It is almost always a third person who was never told — ⚠ which is why the honest sentence is also the one that gets the third person told.']));
out.push(stage('5', 'Read'));
out.push(p('1 The collection (Ms Shamsi\'s own confirmation by telephone on the 6th) and the road journey (**in the driver\'s sheet and he has read it**).  2 Because ⚠ *the 13th is my intention and the 15th is my worst case* — **a reader given one date plans against it; a reader given two plans against the second and is grateful for the first.**  3 ⚠ **Telephone her on the 12th** rather than let her find out on the 14th.'));
out.push(note('⚠ The undertaking to warn is the most valuable line in the note and the one learners omit, because it is the only promise on the page that can be kept whatever happens. ⚠ **A date can fail; a telephone call on the 12th cannot**, and a reader who has been given one stops needing the date to be certain.'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**Note to Mr Haffar — 9 January. The March order: what is arranged and what is not.**',
  '**Arranged, with a name against it.** The steel is reserved in your name until the 20th — that is our Aleppo supplier\'s own confirmation, in writing. The cutting is booked for the 22nd; that is in Abu Yasser\'s sheet and he has read it.',
  '**Intended, and what each depends on.** I intend to have it galvanised by the 28th; that depends on the plater, who has taken between four days and nine this winter. ⚠ So the 28th is my intention and 3 February is my worst case.',
  '**The fixed point, which is yours.** Your own site closes for the holiday on 4 February. ⚠ If the plater is at nine days I will telephone you on the 26th rather than let you find out on the 3rd.',
  '⚠ **What I am not saying.** I am not saying it will be galvanised by the 28th.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Arranged first, with a name and the evidence', '✓'],
  ['Every intention carries *that depends on*', '✓'],
  ['The intention **and** the worst case', '✓ the 28th and 3 February'],
  ['The undertaking to warn, with a date', '✓ the 26th'],
  ['*What I am not saying*', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what I am not saying* paragraph, read alone. ⚠ **Ask the class what the reader would otherwise have assumed** — and the answer is always the thing the writer most wanted to be true.'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'The promise I kept was a delivery to a school on the first day of term. It began as an intention in October and I made it an arrangement in November by writing it into the driver\'s sheet and telling the caretaker the date, so that two people who were not me were expecting it.',
  'The promise I broke was a quotation I said I would send the same evening. It began as an intention too, and it stayed one. Nobody else knew about it. I did it at eleven the next morning and the customer had already telephoned twice.',
  'The difference was not how hard either was, and it was not how much I cared. ⚠ **The school delivery had two other people inside it and the quotation had nobody.**',
  'So the rule I took from it is not about willpower. It is that ⚠ **an intention becomes an arrangement at the moment a second person is expecting it** — and if I do not want to be chased, the honest thing is to say *I intend to, this evening or tomorrow morning*, which I can keep.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer who telephoned twice"   ✓ _is every intention graded?_ — yes   ? _what did the broken one depend on that was never written down?_ — "nothing; and that is why it broke"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually two of three broken promises depended on a person who was never told. ⚠ **The writer could not have kept the promise alone**, which converts the conversation from character to method: the question is not *why did I not do it* but *who else had to know for it to be real*.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I promised Mr Tarabishi the credit note "this week". Honestly graded: I aim to, and it depends on Nadia signing it, and she finishes at four. ⚠ What I should have sent: *I intend to have the credit note with you by Thursday; that depends on our accountant\'s signature, and if it slips I will telephone you on Thursday morning.*']));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  At ten on the 14th: the diary'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second half is the exercise: said date-first, an appointment is harder to write down, and learners hear it immediately.'));
out.push(p('**b**  _at ten o\'clock · on Tuesday · on the 14th · on Tuesday morning_ (or *on the morning of Tuesday the 14th*) · _at 6.40 on 14 February_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Time, day, date, and one appointment per line** — never two dates in a sentence; then read it back before they hang up.  2 ⚠ **A fixed point**: *something that happens at a time whether anybody turns up or not* — the vessel at 6.40 on the 14th. You do not arrange it, you do not move it, and you write everything else around it.'));
out.push(note('⚠ The four kinds of entry are the content of this cycle and the grammar is the vehicle. ⚠ **The one learners have never had a name for is the third** — an expectation, with no time against it, written down so that nobody books on top of it. A diary without expectations in it is a diary that gets double-booked by its own owner.'));
out.push(p('**Language box – Practise (samples):**  1 _at 9.30 on Tuesday 14 January_ — appointment.  2 _— | Monday 20 January | collection, some time_ — commitment, no time.  3 _at 6.40 on Wednesday 14 January_ — ⚠ **fixed point.**  4 _— | Friday 17 January | Mr Jaber at the border, expected_ — expectation.  5 _— | Friday 31 January | payment due_ — commitment (ours).'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Attar says he will come in the week of the 20th, probably the Tuesday, in the morning, and he wants the stock figures before he comes.'],
  ['B', 'Read me what you wrote.'],
  ['A', '"Attar — w/c 20th, prob Tues am — stock figures first."'],
  ['B', 'And when are the stock figures due?'],
  ['A', '…Before he comes. Which is the 21st, probably, in the morning.'],
  ['B', '⚠ So the only firm date on the page is a commitment of ours, and it has no date at all. Three lines: the week, expected. Tuesday the 21st, morning, unconfirmed. ⚠ **And the figures, which are ours, by Monday the 20th — because a commitment that says *before he comes* is a commitment with no hour in it.**'],
  ['A', 'And I telephone him to confirm the Tuesday.'],
  ['B', 'Today, and read it back to him.'],
]));
out.push(note('⚠ Role card 2 produces the finding that matters: ⚠ **the entry with no date on it is ours.** Learners treat an unconfirmed visit as the problem; the problem is the commitment hanging off it, which nobody will chase and which has to be given a date before the visit is confirmed, not after.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the entries as separate labelled lines. **Typical errors:** _in Thursday the 11th_ · _at the 14th of February at 6.40_ (two *at*s, and the date before the time) · _on ten o\'clock_ · and the content error, which is labelling the auditor\'s visit a fixed point. ⚠ It is an expectation: **a fixed point is a time nobody needs your permission for**, and a man who can be telephoned is not one.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Time', 'Day and date', 'What and who', 'Kind'], [
  ['**6.40**', '**Wednesday 14 January**', '**Ms Tannous\'s vessel sails, Beirut**', '⚠ **fixed point**'],
  ['09.00', 'Thursday 9 January', 'packing begins — Abu Yasser', 'appointment'],
  ['—', 'Friday 10 January', 'packing finished and marked', 'commitment (mine)'],
  ['08.00', 'Saturday 11 January', 'load leaves — Fadi', 'appointment'],
  ['—', 'Sunday 12 January', 'Mr Jaber at the border, *expected*', 'expectation'],
  ['—', 'Monday 13 January', 'documents with Ms Tannous — mine', 'commitment (mine)'],
], [0.8, 1.4, 2.4, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my entries, two are appointments, three are commitments with nobody but me in them, one is an expectation and one is a fixed point."', '⚠ **Count the commitments with a date and one party, then ask who would notice if each were missed.** The answer is often nobody until it is too late — and that is the argument for the *kind* column rather than for working harder.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because ⚠ **it is the only line nobody can move**, and read in its place in the week it looks like the end of a sequence instead of **the wall the sequence runs into**.  2 ⚠ They are all **on days when nothing else is happening** — which is exactly why those days get used for something else.  3 She is not doing the work; the entries are in her sheet with the words *ask Nour whether this is done*, so ⚠ **she is the reason somebody asks.**'));
out.push(note('⚠ The third answer is the cheapest control in Book 1 and Book 2 together and it is worth naming as such: **a second person who asks a question costs nothing, requires no skill, and catches the commitments that have nobody in them.** ⚠ It is also the first thing Lina is given to do, and it is deliberately not work.'));
out.push(stage('6', 'Write with help – sample (104 words)'));
out.push(sample(null, [
  '**WEEK OF 20 JANUARY — THE AUDIT. Kept by N. Mansour. ⚠ The fixed point is at the top.**',
  '⚠ | **09.00** | **Tuesday 21 January** | **Mr Attar arrives, Mezzeh** | ⚠ **FIXED POINT** (he is travelling from Aleppo and will not come twice)',
  '— | Monday 20 January | stock figures printed and checked — mine | commitment (mine)',
  '14.00 | Monday 20 January | Nadia goes through the figures with me | appointment',
  '— | Wednesday 22 January | fourth store counted, if he asks — expected | expectation',
  '⚠ **Why the fixed point is at the top.** Because everything else in the week is only there to be ready for nine o\'clock on the Tuesday, and read in order the Tuesday looks like the middle of the week rather than its deadline.',
  '⚠ **What the kind column shows.** One of the four is a commitment with nobody in it but me, and it is on the Monday, which is the day most likely to be eaten.',
  '**What I have done about it.** The Monday printing is in Lina\'s sheet as well, with the words *ask Nour whether the figures are printed.*',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fixed point at the top', '✓'],
  ['Time, day, date, one entry per line', '✓'],
  ['A *kind* column, filled for every entry', '✓'],
  ['The commitments with nobody in them, counted', '✓ one'],
  ['One of them given to somebody as a question', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The fixed point and the entry nearest to it. ⚠ **Ask how much slack there is between them** — and in about half the class the answer is *none*, which is a finding the writer had not noticed because the two entries are on different lines of a list.'));
out.push(stage('7', 'Write freely – sample (166 words)'));
out.push(sample(null, [
  'Two years ago I wrote "Dagher — Thursday" in the diary. Ms Rana Dagher is at a government office and she had said she would be in her office on the Thursday, which is not the same as having an appointment with me.',
  'I wrote it as an appointment. On the Thursday I went across the city with a file, waited an hour and a quarter, and was told she had been in a meeting since nine and would be until two.',
  'What it really was, in the four kinds, was an expectation: she had told me where she would be, with no time and no second party. ⚠ **It had no time against it in my own handwriting, and I did not notice, because the day was there and the day was enough to make it look like an appointment.**',
  'What it cost was an afternoon, a taxi and a week — because the file then waited for the following Thursday.',
  '⚠ **The repair is three words in the diary: the word *expected*, and the absence of a time where a time would be.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "somebody reading your diary while you are out"   ✓ _time, day, date, one per line?_ — "no time at all on the entry"   ? _which of the four kinds was it written as?_ — "an appointment; it was an expectation"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually most of the class wrote expectations as appointments. ⚠ **It is the commonest of the four errors and the only one that makes somebody wait** — and the cost falls on the person who travelled, which is often not the person who wrote the entry.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['My week, with the kinds: fixed point at the top — the Thursday power cut from one until four, which is every day. Two appointments, both with times. Three commitments, all mine, none with an hour. One expectation. ⚠ Writing the kinds took two minutes and showed me that my three commitments are all on the two days I am at the other site.']));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  Arranged, intended, predicted — side by side'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Insist that the pile is named **before** the thing. Said the other way round, learners sort by how confident they feel about it, which is the habit the cycle exists to break.'));
out.push(p('**b**  The audit on the 20th — arranged (in writing). Repainting the counter — intended. Prices in March — predicted. Fadi on the 11th — arranged. ⚠ The generator from one until four — **a fixed point**, which is why it is in the list: it belongs to none of the three columns and has to be drawn on the page some other way.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **Four** — the collection, Fadi\'s run, the audit on the 20th and Lina\'s first week.  2 ⚠ That it **is not a plan at all; it is a list of things you are exposed to**: you do not manage it, you watch it, and you decide now what you will do if each one goes the other way — ⚠ *an exposure you have decided about is not a risk any more, it is a branch.*'));
out.push(note('⚠ Mr Ayoub\'s closing instruction is the practical one and it saves more time than anything else in the unit: ⚠ **sort first, argue second. Half the arguments in this office are two people holding different columns** — one talking about what is arranged and the other about what is intended, and both correct.'));
out.push(p('**Language box – Practise (samples):**  1 four, five, two, as in the text.  2 _arranged: the carrier confirmed; predicted: it arrives Tuesday — if Wednesday, we pack on the Thursday and I tell the customer Tuesday evening._  3 _intended: trained by March; depends on an hour that does not exist._  4 _predicted: a rise in March — branch: we hold the quoted price fourteen days and no longer, which we do anyway._  5 _intended: a Saturday again — depends on thirty orders, and the trial got nineteen._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'You have eleven lines here. Sort them before we argue. Three columns.'],
  ['A', 'Arranged: the collection, Fadi\'s run, the audit on the 20th, Lina\'s first week. Four.'],
  ['B', 'Intended?'],
  ['A', 'Packing, marking, documents, the fourth-store stocktake, training Lina. Five.'],
  ['B', 'Predicted?'],
  ['A', 'The clearance in a day, and Ms Tannous ordering again. Two.'],
  ['B', 'So four, five, two. And where in the month do the intended ones sit?'],
  ['A', '…The 9th to the 17th. ⚠ The whole middle of the month is intention.'],
  ['B', '⚠ And the clearance going to three days — what then?'],
]));
out.push(note('⚠ The exchange is written so that the finding arrives at the moment the learner says *the 9th to the 17th*, not when the columns are filled. ⚠ **Sorting is not the point; reading the sorted page for its shape is the point** — and the shape to look for is a cluster, not a single weak line.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three numbers and where the intended lines sit, then one branch. **Typical errors:** _prices are going up in March, it is arranged_ (⚠ a prediction about the world cannot be arranged by anybody) · _the audit will be on the 20th_ where the auditor has written to confirm it (⚠ **under-claiming again**: *will* for something that is arranged in writing) · and the content error, which is writing a branch with no person in it. ⚠ A branch that does not say who is told is not a decision.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Arranged — and the document', 'Intended — and what it depends on', 'Predicted — and the branch'], [
  ['collection 8th — her telephone call, 6th', 'packing 9th–10th — two people in the warehouse', 'clearance one day — ⚠ **if three: documents 15th, telephone her 12th**'],
  ['load leaves 11th — Fadi\'s sheet, read', 'marking 10th — the stencils, at Baghdad Street', 'she orders again in February — ⚠ **if not: January is the whole export business; Nadia told**'],
  ['audit 20th — Mr Attar, in writing', 'documents 13th — the clearance', ''],
], [1.8, 2, 2.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My three numbers are four, five and two. My intended lines sit between the 9th and the 17th. My worst exposure is the clearance, and the branch is: if it takes three days, the documents are the 15th and I telephone her on the 12th."', '⚠ **Count how many people had a middle number larger than the other two, then ask them what has been arranged this week.** The answer is usually nothing — ⚠ **and nothing is what a soft middle is made of.**']));
out.push(stage('5', 'Read'));
out.push(p('1 Between the **9th and the 17th** — ⚠ so the whole middle of the month is intention, and two of those five lines have no realistic dependency at all.  2 Because it needed ⚠ **an afternoon that has not existed since December**: *it was never going to happen and leaving it in the programme made the programme a lie.*  3 ⚠ Nadia **finishes at four exactly and has done for eleven years**, so the training cannot be an intention — it has to be an arrangement or it has to be somebody else, and the writer has chosen Bassel, ⚠ **who does not know the paperwork as well and is there at five.**'));
out.push(note('⚠ The cost of the substitution is written down, and that is the part to insist on. ⚠ **A substitution recorded without its cost will be read as a solution**, and in three months nobody will remember that the export paperwork is now being taught by the person who knows it second best.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**FEBRUARY, IN THREE COLUMNS. 28 January. H. Mourad. ⚠ Nine lines. Three arranged, four intended, two predicted.**',
  'counter rota to the 14th — in the staff book | the second till repaired — the engineer, who has not been telephoned | ⚠ **the February order from Beirut — if it does not come: no overtime in February; Mr Ayoub told on the 1st**',
  'stock count 3rd — Abu Yasser, his sheet | the window display changed — a quiet afternoon | ⚠ **a price rise from Aleppo — if it comes: quotations held fourteen days only, dated, which we do anyway**',
  'Lina on the counter Thursdays — her sheet | the old till taken away — the engineer again |',
  '| the Saturday question reopened — thirty orders, and we had nineteen |',
  '⚠ **What the columns show that the list did not.** All four intended lines are in the second half of the month, and two of them are the same dependency: one engineer who has not been telephoned.',
  '**What I have moved as a result.** The engineer is telephoned today, which turns two lines into one arrangement. ⚠ The Saturday question is out of February altogether — it needs thirty orders and the trial got nineteen of thirty, and it stopped on 19 July.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The three counts in the heading', '✓ three, four, two'],
  ['A document, a dependency or a branch in every cell', '✓'],
  ['What the columns show that the list did not', '✓ two lines, one dependency'],
  ['Something taken out because it was never going to happen', '✓ the Saturday question'],
  ['A wall named as a wall, with the cost of the substitute', '✗ — no wall in this month'],
], [5, 1]));
out.push(note('⚠ The last row is ticked ✗ legitimately and the sample is built that way: **not every month contains a wall**, and a learner who invents one to fill the row has written a worse page. ⚠ Say so, or half the class will manufacture an obstacle.'));
out.push(stage('6R', 'Share'));
out.push(p('The three counts and the line taken out. ⚠ **Ask the class whether they believe the line was ever real** — and the useful follow-up is *who would have had to agree to take it out*, because that is usually why it survived three programmes.'));
out.push(stage('7', 'Write freely – sample (174 words)'));
out.push(sample(null, [
  'The programme for our move to the new premises had twenty-two lines and I could tell you now which four were real.',
  'Arranged: the lease, the lorries for the Friday, the telephone transfer, and the painters. Each of those had a document with a date and a name on it.',
  'Intended: everything to do with us. Packing the files, labelling the shelves, taking the old signage down, telling customers, moving the ledgers, setting up the counter. Eleven lines, all of them ours, none of them with an hour against them.',
  'Predicted: that the new district would bring walk-in trade. There was no branch written anywhere for the possibility that it would not.',
  '⚠ **And the line everybody knew was never going to happen was "scan the archive before the move."** It had been on three programmes. It needed about six weeks and it was given a Thursday.',
  '⚠ **The reason it stayed in is the thing I would tell anybody.** Taking it out needed somebody to say out loud that we were not going to do it — and nobody wanted to be the person who said that, so it travelled from programme to programme instead, making every other line look optional.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the person who had to pack the files"   ✓ _are the three columns separated?_ — yes   ? _which line did everybody know was not real, and why was it left in?_ — "the archive; taking it out needed permission"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually two of three unreal lines survived because removing them needed somebody\'s permission. ⚠ **That is the whole mechanism**, and it is worth naming: a line nobody believes is not an optimism problem, it is an **authority** problem — and the fix is to ask for its removal in writing, once, with the reason.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['My February: arranged three, intended five, predicted one. The intended five are all after the 14th. ⚠ My one prediction is that the Aleppo price will rise, and the branch is that every quotation goes out held for fourteen days with the date on it — which is what we are supposed to do anyway, so the branch is really *start doing it properly*.']));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  The vessel sails at 6.40: timetables'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the generator, the power hours, a bank\'s cut-off, a government office\'s closing time, and a courier\'s last collection. ⚠ **Almost nobody names a fixed point inside their own building**, which is 13.5\'s finding arriving early.'));
out.push(p('**b**  _The vessel sails at 6.40_ — present simple, because it is a published schedule and nobody arranged it with us. ⚠ *Is sailing* claims an arrangement; *will sail* makes it a prediction about something already decided.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Twelve and a half hours** — the cut-off for documents and delivery is 18.00 on the preceding day.  2 People plan against the **sailing time**, which is published because it is interesting; they should plan against the **cut-off**, ⚠ *which is what you work to and is printed smaller.*'));
out.push(note('⚠ Bassel\'s last answer is the figure that matters and it is not the twelve and a half hours: ⚠ **the cost of missing a fixed point is the gap to the next one** — the 21st, so seven days. *We will be a little late* and *we will be seven days late* are two different conversations, **and the timetable decides which one you are having, not your judgement.**'));
out.push(p('**Language box – Practise (samples):**  1 _The vessel sails at 6.40; documents and delivery close at 18.00 the day before; the next sailing is the 21st._  2 _Transfers clear the same day; instructions after 13.00 go to the next working day; Saturday is not one._  3 _The office opens from eight until two; the last number is given out at one._  4 _The generator runs from one until four; the press and the label printer run on it only._  5 _The courier collects at 16.30; a parcel booked after 15.00 goes the following day._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have told him the transfer clears the same day.'],
  ['A', 'It does. The bank says same day.'],
  ['B', 'Read the line under it.'],
  ['A', '"Instructions received after 13.00 are processed the following working day. Saturday is not a working day." …I sent it at two on a Thursday.'],
  ['B', 'So it is processed on the Friday and the money is there on the Sunday. And the next one?'],
  ['A', 'There is no next one — it is just a day later.'],
  ['B', '⚠ Then say so, because this is the kind where the cost is a day and not a week. **The number is still the number**, and you promised a Thursday.'],
]));
out.push(note('⚠ Role card 2 exists so that one of the two measurements is **small**. ⚠ A class that has done the sailing card believes every cut-off costs a week; the bank card costs two days over a weekend, and the point is that you cannot know which without reading it. **The reading is the skill, not the alarm.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the headline, the cut-off, the gap and the cost. **Typical errors:** _the vessel is sailing at 6.40_ · _the bank will clear it the same day_ · _the office is opening at eight_ · and the content error, which is giving the gap and omitting the cost. ⚠ **A programme usually contains only the headline**, which is why the fourth column is the one the exercise is for.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The timetable', 'Headline time', 'The cut-off, from the small print', 'Next one', 'Cost of missing it'], [
  ['the Beirut sailing', '6.40, 14th', '**18.00, 13th** — documents and delivery', '21st', '⚠ **seven days**'],
  ['the border post', '07.00–16.00', 'last vehicle accepted **15.00**', 'next morning', 'a day and a night out'],
  ['our bank, transfers', '"same day"', 'after **13.00** → next working day; not Saturday', 'next working day', 'two days over a weekend'],
  ['our generator', '**one until four**', 'the press and label printer run on it only', 'next day, one o\'clock', 'a day\'s marking'],
], [1.5, 1, 2.4, 1, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My timetable says the vessel sails at 6.40 on the 14th. The cut-off is 18.00 on the 13th, which is twelve and a half hours earlier. The next one is the 21st, so missing it costs seven days."', '⚠ **Count how many people did not know their own cut-off before this lesson, then ask how many programmes in the room are built on a headline time.** The two numbers are usually the same number.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **18.00 on the 13th** — twelve and a half hours earlier than the published 6.40 on the 14th.  2 Because the marking is done with the stencil press, ⚠ **which runs on the generator, which runs from one until four** — so it is three hours in the afternoon, and if it is not finished by four it waits until one o\'clock the next day.  3 ⚠ **Three of the four**, and the fourth is inside the building.'));
out.push(note('⚠ The generator line is the one to teach hardest, because it is the class of fixed point that is never in anybody\'s programme: **unpublished, internal, known to everybody, and written down nowhere.** ⚠ Ask every learner for theirs, and expect the answers to be a person\'s finishing time, a power window, a shared machine and a key held by one man.'));
out.push(stage('6', 'Write with help – sample (112 words)'));
out.push(sample(null, [
  '**THE FIXED POINTS IN THE SCHOOL CONTRACT, AND THEIR SMALL PRINT. 12 January. B. Nassif. ⚠ Four of them, and two were not in the programme.**',
  'term begins | **7.30, 1 February** | ⚠ **delivery accepted only before 7.00 or after 14.30** — not in school hours | next delivery day, 2 Feb | ⚠ **a day, and a caretaker paid to wait**',
  'the purchase order | "valid 30 days" | ⚠ counted from the **order date**, not from our quotation | re-issue, 10 days | ⚠ **ten days and a new signature**',
  'our own van | available all day | ⚠ Fadi is on the Ghouta run **Tuesdays and Thursdays** | the next day | a day',
  'the bank | "same day" | after 13.00 → next working day | next working day | two days',
  '⚠ **What changed when I wrote the small print down.** The delivery cannot be at eight in the morning, which is what the programme said, and the purchase order has nine days left and not twenty.',
  '⚠ **The one I had forgotten is our own.** The van is not ours on a Tuesday or a Thursday, because Fadi is on the Ghouta run, so a Monday delivery is really a Monday or a Wednesday.',
  '**What I am now working to.** Delivery **before 07.00 on Monday 2 February**; order re-signed **by the 21st**.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A cut-off column, from the small print', '✓'],
  ['The cost of missing each one, in days', '✓'],
  ['A fixed point inside your own building', '✓ the Ghouta run'],
  ['Every date restated as a cut-off with an hour', '✓ before 07.00'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The own-building fixed point, read aloud. ⚠ **Ask how many programmes in the room it would have broken** — and expect somebody to discover that their own fixed point breaks somebody else\'s programme, which is the most useful ten seconds in the cycle.'));
out.push(stage('7', 'Write freely – sample (169 words)'));
out.push(sample(null, [
  'We lost a container of tiles to a cut-off I had read and not understood.',
  'The shipping line\'s notice said the vessel closed at noon on the Wednesday. I read that as the gate closing at noon, so I sent the lorry to arrive at eleven. The lorry arrived at eleven and was turned away, because the noon was the **documentary** cut-off and the physical gate had closed at six the evening before.',
  'Both times were printed on the same notice, in the same size, one under the other. ⚠ **It was not hidden. I had read the line that applied to the paperwork and assumed it was the one that applied to the lorry.**',
  'The next vessel was eleven days later. The tiles were for a hotel that was opening, and the customer bought elsewhere and did not come back.',
  '⚠ **What I learned is to count the cut-offs rather than find one.** A notice with one deadline on it is unusual. ⚠ **If I have found one cut-off, I have not finished reading** — and the one I have found is usually the one for the documents, because documents are what notices are written by.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the driver turned away at eleven"   ✓ _present simple for every schedule?_ — yes   ? _where was the real time printed?_ — "on the same notice, one line below"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually all three real times were printed on the same page as the headline. ⚠ **It is almost never hidden, only smaller** — so the skill is not vigilance against concealment, it is the habit of reading the line below the line and of expecting more than one deadline.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['Our courier: headline "next-day delivery anywhere". Small print — collections close at 16.30, and a parcel booked after 15.00 goes the following working day. ⚠ So a parcel I book at four on a Thursday is a Monday delivery and I have been promising Fridays. The next collection is the following day, so the cost is one day, or three over a weekend.']));

// ===================== 13.6 =====================
out.push(pb());
out.push(h2('13.6  A programme somebody else can run'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The answers are nearly always the same four kinds of thing: which supplier is reliable, which customer must not be telephoned, where something is kept, and which step is habitually skipped.'));
out.push(p('**b**  On the page: **who to telephone if the load is refused**, and **the date the stencils come from Baghdad Street**. ⚠ The aim and why the customer matters are not on a programme page — they belong in the handover, in ninety seconds, and a page carrying them gets read once and put down.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 What to do if the **stencils** are not there, if **Fadi** is not there at eight, and if the **clearance** is not through.  2 ⚠ **Four columns, not two: who · by when · how you will know · if not, and who to tell** — and only the first two were on the original page.'));
out.push(note('⚠ Lina\'s line is the argument of the cycle and it is better than a rule: ⚠ *it is my fourth day; I do not know what normal looks like, so I cannot tell what is going wrong — which means I need the line that says what to do more than you do.* **A programme that assumes the reader can recognise trouble is a programme for its author.**'));
out.push(p('**Language box – Practise (samples):** The *how you will know* column, done last and aloud, typically produces: _the cartons are in bay 2_ · _the gate sheet is signed by name_ · _the stamped copy is in your hand_ · _the van is gone from the yard_. ⚠ And it typically exposes one line whose only evidence is somebody\'s word, which is the line to fix.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Line three. "Marking, 9th, one to four." Abu Yasser does it.'],
  ['B', 'If the stencils are not here, what do I do?'],
  ['A', '…Telephone Hala at Baghdad Street and ask her to send them with Fadi.'],
  ['B', 'That is not on the page. And how will I know it has happened?'],
  ['A', 'The stencils are on the bench.'],
  ['B', '⚠ Not Hala\'s word — what I can see. Good. And by when do I tell you?'],
  ['A', 'Two o\'clock, because the generator stops at four and the press runs on it. ⚠ And telephoning Ms Tannous is mine and not yours.'],
]));
out.push(note('⚠ The hour in the *if not* comes from the generator and not from preference, and that is worth pointing out: ⚠ **a good *if not* time is derived from a fixed point, not chosen.** *Tell me by two* exists because the press stops at four and a stencil from the other site takes an hour and a half.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the line as four columns. **Typical errors:** a cell with two names in it (⚠ neither of them does it) · an *if not* with no time (⚠ **it will be acted on at five o\'clock**) · *how you will know* answered with somebody\'s assurance · and the content error, which is omitting the *not yours* line. ⚠ A new person handed a programme will attempt everything on it, **including the things that would be wrong for them to do.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The line', 'Who', 'By when', 'How you will know', 'If not — and who to tell'], [
  ['collect 24 cartons', 'her carrier', '8th', 'the cartons are in bay 2', 'telephone her by 11.00; Nour by noon'],
  ['check count', 'Abu Yasser', '8th, on arrival', 'gate sheet signed by name', '⚠ do not sign; Nour at once'],
  ['marking', 'Abu Yasser', '9th, one to four', 'the stencils are on the bench', 'Hala; Nour by 14.00'],
  ['load leaves', 'Fadi', '08.00, 11th', 'the van is gone from the yard', 'wait to 08.30, then Nour'],
  ['documents at port', 'Mr Jaber', '**before 18.00, 13th**', 'the port receipt', '⚠ Nour — **not the customer**'],
], [1.3, 0.8, 1, 1.6, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My line is the marking. How you will know is that the stencils are on the bench, and the one I had been taking on trust is that the other site had sent them. The customer line is mine and not theirs."', '⚠ **Count the lines whose *how you will know* is somebody\'s word, then ask what would happen if that person were being kind.** ⚠ A programme run on assurance fails on the day somebody does not want to disappoint you — which is the most likely day of all.']));
out.push(stage('5', 'Read'));
out.push(p('1 Line **2** (*do not sign*) and line **6** (*not the customer*). ⚠ Because **a programme for a new person has to say what not to do as clearly as what to do**: the wrong action is always available and often looks helpful.  2 ⚠ **18.00 on the 13th**, the cut-off for documents and delivery — the 14th is the headline, and the cost of missing the cut-off is the 21st, seven days.  3 Why Ms Tannous matters, what the consignment is worth, and the February order. ⚠ **None of it helps the person running the programme on Thursday.**'));
out.push(note('⚠ The third answer is the one learners resist, because the omitted material is the interesting material. ⚠ Say it in the author\'s own terms: **a page with the context on it is a page that gets read once and put down**, and the context belongs in the ninety seconds of 13.7, where it can be ranked and questioned.'));
out.push(stage('6', 'Write with help – sample (131 words)'));
out.push(sample(null, [
  '**FRIDAY\'S COUNTER OPENING — PROGRAMME. Issued 10 January by H. Mourad. ⚠ Runnable by anybody. The fixed point is 08.00, when the first trade customer arrives, not 08.30 when we open to walk-ins.**',
  '1 | unlock and lights | Lina | 07.30 | the shutter is up | ⚠ **do not open the till**; telephone me',
  '2 | till float counted | Lina | 07.40 | the float sheet is signed by name | if it is short, **do not make it up** — telephone me at once',
  '3 | price list on the counter | Lina | 07.45 | the dated sheet is on the counter | if it is yesterday\'s date, print one; the printer runs on the generator from one',
  '4 | first trade order | Lina | **08.00** | the order book has an entry | if nobody comes by 08.20, telephone me',
  '⚠ **The lines that are not instructions.** Line 1 says do not open the till and line 2 says do not make a shortfall up.',
  '**The fixed point, restated.** 08.00, and missing it costs the trade customer\'s morning, not ours.',
  '⚠ **What is deliberately not on this page.** Who the trade customers are and what they spend.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The real fixed point in the heading', '✓'],
  ['Numbered lines, one owner each', '✓'],
  ['*How you will know* — visible, not somebody\'s word', '✓'],
  ['Every *if not* with a person and an hour', '✓ except line 2, which is *at once*'],
  ['At least one *do not* line', '✓ two'],
  ['What is deliberately not on the page', '✓'],
], [5, 1]));
out.push(note('⚠ *At once* is an acceptable hour and the sample shows one: a cash shortfall has no sensible later time. ⚠ **But it must be a decision and not a default** — if more than one *if not* on a page says *at once*, the page has no ranking in it and the reader will treat them all as ordinary.'));
out.push(stage('6R', 'Share'));
out.push(p('The *do not* lines, read alone. ⚠ **Ask what helpful wrong action each one prevents**, and the answers are revealing: making up a till shortfall, signing a sheet to save time, telephoning a customer to reassure them. **All three are kind, and all three are the error.**'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'I ran my uncle\'s workshop for nine days when he was in hospital, from two sides of a sheet of paper.',
  'The sheet told me what happened on each day of the week: the collections, the two regular customers, the day the steel came. What it did not tell me was what to do when any of it did not happen, and on the second day the steel did not come.',
  'I telephoned the supplier. The supplier told me the order had been cancelled, which was not true — it had been moved, by my uncle, three weeks earlier, and the new date was in his head.',
  'So I cancelled the Thursday job, telephoned the customer and apologised, and rescheduled it for the following week. ⚠ **The steel arrived on the Wednesday, exactly as my uncle had arranged**, and I had moved a job for no reason and told a customer we had a problem we did not have.',
  '⚠ **The missing column was *how you will know*.** I had no way of telling an absence from a change, so I treated every absence as a fault — ⚠ **which is what a new person does, and it is more expensive than doing nothing.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer whose job was moved"   ✓ _all four columns on every line?_ — "no: no *how you will know*"   ? _which column was missing, and who found out?_ — "the third; the customer, by telephone"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the missing column is *if not*, and usually the person did something helpful and wrong. ⚠ **That pattern is the cycle\'s whole justification**: an absent *if not* does not produce inaction, it produces improvisation by somebody who cannot tell normal from abnormal.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The line I give Lina: "stock card updated after every issue." ⚠ *How you will know*: the card\'s last line is today\'s date in your own handwriting. *If not*: do not write it up from memory at the end of the day — tell me before four, because the figures go to Mr Attar on the 20th and a reconstructed card is worse than a gap.']));

// ===================== 13.7 =====================
out.push(pb());
out.push(h2('13.7  Review & Mediate: the programme nobody reads twice'));
out.push(stage('1', 'Get ready – Unit 13 quiz'));
out.push(p('**1** ⚠ **The evidence** — a booking reference, a signature, a confirmation in writing, somebody\'s word, or **nothing**, which is a legitimate entry you must be willing to write.  **2** An appointment (a time and two parties), a commitment (a date and one party), an expectation (neither; it blocks the day) and ⚠ **a fixed point** (a time and nobody\'s permission), which goes **at the top**.  **3** The headline is published because it is interesting; ⚠ **the cut-off is what you work to and is printed smaller** — and the cut-off goes in the programme, with the headline in brackets.  **4** Who · by when · ⚠ **how you will know** · ⚠ **if not, and who to tell** — and the last two are the ones usually missing.  **5** ⚠ **By the gap to the next one.** Missing the 14th costs seven days, not twelve hours.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ She cannot judge **which line matters** — *a page cannot rank its own lines*, and the line you watch is not the line you fear.  2 ⚠ **A programme says what to do; a handover says which line to watch, which line to fear, what looks wrong and is not, and what looks right and is not** — and the fourth cannot be written down by whoever wrote the programme, *because they have stopped being able to see it.*'));
out.push(note('⚠ Nour\'s admission is the heart of the unit and should not be softened: ⚠ *that one I would not have told you, because I have stopped seeing it.* **The gate sheet already signed means nobody counted**, it is the most expensive thing on the page, and the only reason it got said aloud is that a person on her fourth day asked a question in a form the author could not deflect.'));
out.push(p('**Language box – Practise (sample):**  _"Most likely to go wrong: line three, the marking — other site, and the generator. Worst if it did: line eight — seven days. Looks wrong and is normal: the empty yard at half past eight. Looks normal and is wrong: the gate sheet already signed."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'What will look normal and is wrong?'],
  ['A', '…I cannot think of anything.'],
  ['B', 'Take the week you have just handed me. What do you not look at any more?'],
  ['A', 'The signature column on the goods-in sheet. It is always full.'],
  ['B', 'Always?'],
  ['A', '…It is always full because Abu Yasser signs the whole page on a Thursday for the week. ⚠ **Which means four of the five entries were signed by somebody who was not there when the goods came.**'],
  ['B', '⚠ And that is the answer. It took you forty seconds and you have worked beside it for two years.'],
]));
out.push(note('⚠ Pair 2 is the demonstration to run with the whole class, because it shows the method for the fourth question when the honest first answer is *I cannot see it any more*. ⚠ **The follow-up is always the same: what do you no longer look at?** A column that is always full, a box that is always ticked, a sheet that is always signed — **the answer is hiding in whatever is invariant.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four answers and say which was hardest. **Typical errors:** answering *most likely* twice and never naming the worst line (⚠ **the worst line is usually the furthest away and nothing has gone wrong with it yet**) · giving a fourth answer that is really a complaint about a colleague · and the content error, which is inventing a fourth answer to avoid saying *I cannot see it*. ⚠ **The honest *I cannot see it any more* is a better answer than a manufactured one**, because it leads to the right next move: ask the newest person what looked odd in their first week.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The four questions', 'What they answered'], [
  ['Most likely to go wrong', 'the invoice run — it depends on one printer and one afternoon'],
  ['Worst if it did', 'the month-end return — it is a date in law and the rest are dates in a diary'],
  ['Looks wrong, is normal', 'the ledger left open on the desk at lunchtime — she is mid-reconciliation'],
  ['⚠ Looks normal, is wrong', '⚠ the petty-cash book balancing to the piastre every week — ⚠ **it is being made to balance, not found to**'],
], [2, 4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"The programme says the gate sheet is signed by name. What looks normal and is wrong is that it is already signed when you arrive — and if it is already signed, nobody counted. I would not have written it down, because I have stopped seeing it."',
  '⚠ **The unit\'s mediation, named as the first unit of this book:** a programme is written by the person who can no longer see what is odd about the work, **so the line that looks normal and is wrong is invisible to its author and obvious to whoever arrived on Monday** — which means the handover is not a courtesy to the new person, ⚠ **it is the only inspection the programme will ever get.**',
  '⚠ And the half that decides what anybody does next: the finding belongs to **the question**, not to the person who asked it. ⚠ **A new person who is thanked for it asks again in February; a new person who is explained to does not** — and there is only one of them in a building at a time.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 3)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'E', 'C', 'A', 'D', 'B']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q4 is **D** and it is the discriminating item. Learners look for a section about customers and there is none; the sentence is ⚠ *contacting a customer is never delegated by a programme*, which sits inside the section about what to do when a step has failed. **The Part 3 lesson and the unit\'s lesson are the same: the decisive sentence is rarely under the obvious heading.**'));
out.push(note('⚠ Q1 is **E** and Q5 is **B**; both are short sections and both reward reading the whole of a short section rather than matching a keyword. ⚠ A learner who answers Q5 with **A** has matched the word *line*; the question is about **which of two times**, which only B contains.'));
out.push(stage('6', 'Write with help – sample (41 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Lina — the line to watch on Thursday is line three, the marking, because the stencils are at Baghdad Street and the press runs on the generator. The one that would be worst is line eight. If the stencils are not on the bench by two, telephone Hala — not Ms Tannous.',
]));
out.push(note('⚠ That sample is 48 words and must be cut. ⚠ The cut is *and the press runs on the generator*, which is a second reason where one would do, and the forty words have to carry **two different lines** — the one to watch and the one to fear — which is what the marks are for. ⚠ A note that names only one line, however well written, has answered half the task.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The line to watch, with why', '✓'],
  ['The line that would be worst, named separately', '✓ line eight'],
  ['An hour and a name', '✓ by two, Hala'],
  ['35 to 45 words — count them', '✗ 48 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  '**GOODS-IN, MONDAY TO THURSDAY — PROGRAMME. Issued 13 January by N. Mansour. ⚠ Runnable by anybody. The fixed point is the carrier\'s driver, who will not wait more than ten minutes.**',
  '1 | meet the vehicle at the gate | whoever is in the yard | within 5 minutes of arrival | the vehicle is inside the gate | ⚠ **do not sign anything yet**; find Abu Yasser',
  '2 | count against the delivery note | one person, by hand | before the driver leaves | every line of the note has a figure beside it in pen | if you cannot finish in ten minutes, write *not counted* and telephone me',
  '3 | sign the gate sheet, by name | the person who counted | immediately after the count | ⚠ **your own name, in your own hand, with today\'s date** | ⚠ **never sign for a count you did not do, whoever asks**',
  '4 | differences written on the sheet | the person who counted | before the load is moved | the difference is on the sheet in pen | Nour at once; the load does not move',
  '⚠ **The lines that are not instructions.** Line 1 says do not sign yet, and line 3 says never sign for a count you did not do.',
  '⚠ **What is deliberately not on this page.** What the load is worth and which supplier is difficult. Neither helps the person at the gate.',
]));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I asked Lina what looked odd in her first week. She said the keys: there are four sets and three of them are on one board by the door that anybody walks past. ⚠ I have walked past that board every day for four years. **The thing I had stopped seeing is not complicated — it is simply always there.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 13 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'b', 'c', 'b', 'a', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 1 and 2 are a pair and must be marked together: the same journey said two ways, once arranged and once merely decided. ⚠ A learner who gets 1 and misses 2 has learned the continuous and not the distinction, which is the unit.'));
out.push(note('⚠ Question 4 is the cut-off and Question 5 the present simple, and both are about the same vessel on purpose. ⚠ **Question 8 is the one to look at first when marking**: *they are on the bench* against *Hala says she has sent them*. A learner who chooses a has the grammar of the unit and none of its argument — **assurance is not evidence**, and that distinction is worth more at work than any tense in this book.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Most likely to go wrong', 'Worst if it did', 'Cost of missing it', 'Looks wrong, is normal', 'Looks normal, is wrong'], [[
  'line 3, the marking', 'line 8', 'seven days (next sailing the 21st)', 'the yard empty at 08.30', 'the gate sheet already signed',
]], [1.4, 0.9, 1.6, 1.4, 1.5]));
out.push(note('⚠ Gap 3 needs the **seven days**, not *a week\'s delay in general terms*: the figure comes from the next sailing being the 21st, and the whole of 13.5 is that the cost of a fixed point is the gap to the next one. ⚠ Gap 5 is the mark that separates a class that has understood the unit from one that has followed it — **and a learner who writes *the sheet is signed* without *already* has not heard the point.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (71 words)', ['1 | unlock and lights | Lina | 07.30 | the shutter is up | ⚠ **do not open the till**; telephone me   2 | float counted | Lina | 07.40 | the float sheet is signed by name | if short, **do not make it up** — telephone me at once   3 | trade order taken | Lina | **08.00** | an entry in the order book | if nobody by 08.20, telephone me   ⚠ **08.00 is a cut-off and not a headline**: it is when the first trade customer arrives, and we open to walk-ins at 08.30.']));
out.push(box('Marking the Unit 13 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 3 needs the figure, gap 5 needs the word *already*.'],
    ['**C Writing**', '7', 'Three lines with a named owner (1) · an hour, not only a day (1) · ⚠ **a visible *how you will know* on every line** (2) · an *if not* with a person and an hour (1) · ⚠ **one *do not* line** (1) · the cut-off identified and distinguished from the headline (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for *how you will know* are the unit.** A programme whose evidence column is somebody\'s assurance scores 0 of those 2, however well organised — ⚠ **because an assurance fails on the day somebody does not want to disappoint you, and that is the most likely day of all.**',
  '⚠ **Give the *do not* mark only for a prohibition of something helpful.** *Do not be late* earns nothing. *Do not make the shortfall up* · *do not sign for a count you did not do* · *do not telephone the customer* — ⚠ **each of those prevents an action the reader would take in order to be useful**, and that is the only kind worth printing.',
  '⚠ **Deduct nothing for a short page.** Three good lines beat eight lines with two empty columns, and a learner who fills twenty cells with *as soon as possible* has written the thing this unit exists to prevent.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 13**'));
out.push(p('**1 The hedge read as weakness.** It will come up in 13.2 and it will come from the most confident learners, and the answer is not *be humble*. ⚠ Say Nadia\'s line: **the hedge is where the risk is kept — put it in the sentence and it stays in the sentence; leave it out and it moves to the relationship.** Then give the test that settles it: *being wrong about* we intend to *costs nothing; being wrong about* we will *is a broken promise, and she will remember it for years.* ⚠ A class that accepts this in 13.2 writes better documents for the whole of Book 2; a class that does not will hedge nothing in Units 14 and 15, where hedging is the entire subject.'));
out.push(p('**2 Under-claiming, which arrives in the second half of the unit.** From 13.4 onwards learners begin grading everything down: an audit confirmed in writing becomes *we aim to*, and a driver\'s sheet becomes *we plan to*. ⚠ **This is as serious as over-claiming and it is harder to see**, because it looks careful. It makes a reader build a margin they do not need, and it costs the writer their credit for the things they have actually arranged. ⚠ Two items exist to catch it — 13.2\'s *typical errors* and 13.4\'s role card 1 — **and the sample table in 13.2 has one row that needs no repair at all.** Make the class find it.'));
out.push(p('**3 Treating 13.7 as a nice idea.** The four questions look like a soft ending and they are the hardest thing in the unit, because the fourth one cannot be answered by the person who wrote the programme. ⚠ If a lesson has to be cut, **cut 13.3 and keep 13.7** — the diary conventions can be taught in ten minutes at the start of 13.6, and the handover cannot be taught at all except by doing it. ⚠ And run pair 2 of 13.7 with the whole class watching: **the method for the fourth question is to ask what you no longer look at**, and a column that is always full is where the answer lives.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 13 · Answer Key');
