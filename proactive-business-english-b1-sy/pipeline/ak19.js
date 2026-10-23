// Proactive Business English B1 · Syria Edition · Book 2 · Unit 19 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 19  Complaints, Claims and Resolutions'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit is a claim and a reply, written from both sides, and that is deliberate.** Nour claims against her own supplier in 19.1 to 19.5 and answers Ms Tannous in 19.6. ⚠ **The two documents have the same shape with the sides reversed**, which is the only way to learn either: a class that has only written claims writes replies that sound like claims.',
  '⚠ **The hard part of a claim is never the firmness; it is the arithmetic.** Which items are undisputed, which are disputed, and ⚠ **which are real losses that are not yours.** Ms Tannous\'s agent charge is undisputed; the two days are ours and cannot be priced; and her own customer\'s deduction is real and was not caused by us.',
  '⚠ **Expect the class to want to be firmer than any of these documents are.** The letters in this unit concede early, ask narrowly, refuse to invent figures and leave doors open — ⚠ **and every one of those is a stronger position than the firm version**, which is the thing to demonstrate rather than assert. **19.4 is where it becomes obvious: four reasonable asks produced one roller.**',
], C.grey, C.navy));

// ===================== 19.1 =====================
out.push(h2('19.1  What it does, and how often'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *What it does, not what it is* is the instruction and learners will need it twice: the first answer is nearly always a verdict.'));
out.push(p('**b**  Only the third: ⚠ *the machine stops about four times a day, always in the first hour.* **Two figures and an exception, and the exception is the half that identifies the fault.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ ***It is not fit for purpose*** and ⚠ ***it keeps failing*** — both are verdicts: *told me nothing and put me on my guard, because it is the sentence people use before a solicitor.*  2 ⚠ **Three days of counts: it slips at between 38 and 44, about eleven times a day — and it does not slip at all on the first run of the morning.** The count narrows the fault to about four things and **the exception narrows it to one.**'));
out.push(note('⚠ The supplier\'s last answer is the one to teach and it is commercial rather than moral: ⚠ *I would still have come; I would have come ready to argue instead of ready to mend it.* **A legal phrase in a first letter does not stop a repair; it changes who arrives and in what frame of mind.**'));
out.push(p('**Language box – Practise (samples):**  1 *it prints about forty labels and then the feed slips; eleven times a day; not on the first run.*  2 *four of the last eleven arrived after the shop shut, and all four were Thursdays.*  3 *about one carton in fifty splits along the base seam, and none of the ones loaded by hand.*  4 *about three invoices a month carry list price instead of trade price, and all of them were raised on a Monday.*  5 *the line is engaged on about half of my calls between two and four, and never before noon.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Your deliveries are always late.'],
  ['B', 'How often?'],
  ['A', 'Four of the last eleven arrived after the shop had shut.'],
  ['B', 'Good. And is there a pattern?'],
  ['A', '…⚠ **All four were Thursdays.**'],
  ['B', '⚠ **Thursday is our Ghouta day too.** The van that brings yours is on the eastern run in the morning and comes to you last.'],
  ['A', 'So it is not lateness; it is Thursday.'],
  ['B', '⚠ **And neither of us had connected it, because *always late* has no day in it.**'],
]));
out.push(note('⚠ Role card 2 is the better demonstration because the exception produces a **cause** and not only a diagnosis: ⚠ **all four were Thursdays**, and the Thursday is the Ghouta run at both ends. **A fault with a pattern in it is usually a scheduling fact, and *always late* is the sentence that hides it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the verdict, the fault, the count and the exception. **Typical errors:** _it is always failing_ · _it is not fit for purpose_ · _it fails very often_ · and the content error, which is giving a count with no period behind it. ⚠ ***Eleven times a day* needs *counted over three days, 11–13 March*** — otherwise it is an impression with a number in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The verdict', 'What it does', 'How often', 'The exception'], [
  ['the printer is unreliable', 'prints about 40 labels, then the feed slips', '⚠ **about 11 times a day**', '⚠ **never on the first run of the morning**'],
  ['the deliveries are always late', '4 of the last 11 arrived after the shop shut', '4 in 11', '⚠ **all four were Thursdays**'],
  ['the cartons are weak', 'about 1 in 50 splits along the base seam', '1 in 50', '⚠ **none of those loaded by hand**'],
  ['the invoices are wrong', 'about 3 a month carry list instead of trade price', '3 a month', '⚠ **all raised on a Monday**'],
], [1.4, 1.9, 1.1, 1.8]));
out.push(note('⚠ **Every exception in the table identifies the cause** — a cold roller, a Thursday run, a forklift, a Monday relief clerk. ⚠ **That is not a coincidence of the samples; it is why the exception is asked for**: a fault that happens *always* has no mechanism in it and a fault that happens *except when* has one.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would have said *the printer is unreliable*. What it does is print about forty labels and then the feed slips, about eleven times a day, and it does not happen on the first run of the morning."', '⚠ **Count how many exceptions nobody had noticed before, and then ask how long each count took.** ⚠ **Two or three days, and never done before the letter** — which is the whole of the cycle: the counting is the part that cannot be done afterwards.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The machine does not slip on the first run of the morning, three mornings out of three** — and *I have no idea what that means and I am reporting it because you may.*  2 ⚠ **That the machine is faulty rather than badly used**: *two of us operate it and neither of us was shown how* — *if the slip is caused by how we load the roll, tell me and I will have it right this week.*  3 ⚠ **Somebody to look at it, with the three days of counts in front of them, before anybody decides whose fault it is** — ⚠ **and not a replacement**: *I am not going to until I know what the fault is.*'));
out.push(note('⚠ The paragraph conceding possible misuse is the one learners will want to cut and it is the one that gets an engineer instead of a solicitor. ⚠ **A letter that concedes the possibility of its own error is read by the other side as a letter from somebody who can be reasoned with** — and that is a commercial advantage and not a weakness.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**TO THE CARTON SUPPLIER — THE FAULT, COUNTED. 15 March. B. Nassif.**',
  '**What it does.** A carton splits along the base seam when it is lifted full, so that the contents go through the bottom. It does not tear; the glued seam opens.',
  'cartons used, 2–13 March | **about 1,100**',
  'splits | ⚠ **23** — about one in fifty',
  'splits on cartons taken off the pallet by hand | ⚠ **none of 23**',
  'splits on cartons taken off with the forklift | ⚠ **all 23**',
  '⚠ **The exception.** Not one of the twenty-three had been lifted by hand. ⚠ **I do not know whether that means the forklift tines are catching the base or whether the cartons are weaker than the old ones, and I am reporting it because you may.**',
  '**What I am not saying.** I am not saying the cartons are defective. ⚠ **Our forklift driver changed in January and the tines may be set differently**, and if that is the cause I will have it adjusted this week and write to tell you so.',
  '⚠ **What I am asking for.** For somebody to look at one of the split cartons with the counts in front of them, before anybody decides whose fault it is. **I have not asked for a credit.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it does, in the present simple', '✓ and it says what it does *not* do'],
  ['A count with the period stated', '✓ 2–13 March'],
  ['The exception', '✓ with both halves of the comparison'],
  ['What you are not claiming', '✓ the forklift driver changed in January'],
  ['The diagnosis asked for before the remedy', '✓'],
], [5, 1]));
out.push(note('⚠ The sample does one thing better than the model: ⚠ **it gives both halves of the exception** — none of the hand-lifted and all of the forklifted. **An exception stated both ways is a controlled comparison**, and it is the strongest evidence a letter like this can carry.'));
out.push(stage('6R', 'Share'));
out.push(p('The exceptions alone. ⚠ **Ask what each might narrow the fault to** — and the class is usually right, which is the point: **the exception is readable by anybody and the verdict is readable by nobody.**'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'My uncle told a machine supplier that his new saw was dangerous, and it cost him four months.',
  'What he meant was that the blade guard dropped on about one cut in twenty and that it had caught his sleeve twice. ⚠ **What he wrote was *the machine is dangerous and unfit for use*.**',
  'The letter went to the supplier\'s office and came back from their solicitor. The solicitor\'s letter was perfectly polite and asked for particulars, by which they meant the thing my uncle had not written: ⚠ **what it does, how often, and under what conditions.**',
  'It took four months, two letters and a visit from somebody who was not an engineer.',
  'What the fault turned out to be was a clamp that had been fitted the wrong way round on one of two models, ⚠ **and it dropped only when the arm was raised past about forty degrees** — which my uncle could have told them in the first letter, because he knew it.',
  '⚠ **Four months for a sentence he had in his head on the first day.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the solicitor who had to ask for particulars"   ✓ _is there a count anywhere?_ — "not in the first letter"   ? _when did it not happen?_ — "below forty degrees — and he knew that on day one"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually nobody had counted before complaining, in all three texts, ⚠ **and in two of three the count would have identified the fault without anybody coming out.** ⚠ The sample\'s version is the sharpest: **four months for a sentence he had in his head on the first day** — and the legal phrase is what produced the solicitor.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Three days of counting the trade telephone. ⚠ **It rings out unanswered about nine times a day, and never between nine and eleven.** The exception is the finding: ⚠ **nine to eleven is when two of us are on the counter**, so it is not the telephone and not the hours — it is that one person cannot answer it and serve at once.']));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  We have had it serviced twice'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect most of the list to be things the company **had done**: delivered, fitted, serviced, printed, cleared, repaired. **That is the normal condition of a small company and the construction exists for it.**'));
out.push(p('**b**  ⚠ *We have had it serviced twice* — if somebody else did the servicing. **The first claims expertise and the third hides who arranged it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That the company has somebody who can service a label printer** — *and if they ask who, the answer is nobody, which makes the rest of the letter weaker.*  2 ⚠ **It proves we did our part**, because having it serviced was the only part that was ours — and ⚠ **it puts the work on the other side\'s own record**: both services are in their engineer\'s notes.'));
out.push(note('⚠ The second half is the part learners miss: the construction is not only honest, ⚠ **it is tactically better.** Evidence the other side holds does not have to be produced, cannot be disputed, and was written by their own man — ⚠ **so four words of grammar convert the writer\'s claim into the reader\'s record.**'));
out.push(p('**Language box – Practise (samples):**  1 *we have had the machine serviced twice, by your own engineer.*  2 *we have had the van serviced three times this year, at your depot.*  3 *we have had the labels printed outside since November.*  4 *we had the consignment cleared by Mr Jaber.*  5 *we had the shutter mended in August.* ⚠ And the active, separately: *we have cleaned the rollers weekly since January and kept a sheet.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your letter says *we maintain the van properly*.'],
  ['A', 'We do.'],
  ['B', 'Who services it?'],
  ['A', 'Your own depot. Three times this year.'],
  ['B', '⚠ Then say so: **we have had it serviced three times this year, at your own depot**, and we have had the brakes done in August.'],
  ['A', 'And the oil?'],
  ['B', '⚠ **That one is yours, so say it in the active and say it separately**: *the driver has checked the oil every Monday and it is in his sheet.*'],
  ['A', 'Why separately?'],
  ['B', '⚠ **Because the two together read as a company claiming credit for everything that has been done to its own van.**'],
]));
out.push(note('⚠ Role card 2 shows the pattern on something every learner recognises. ⚠ **The third claim — *the driver has checked the oil every Monday and it is in his sheet* — is the credible one precisely because it is small, active and evidenced**, and it is credible only because the two services were correctly attributed to the depot.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence as claimed and as corrected, with the agent. **Typical errors:** _we have serviced it by the engineer_ · _we had serviced it twice_ (⚠ **past perfect for no reason**) · _we have had serviced it_ · and the content error, which is mixing the two kinds in one sentence. ⚠ **Two kinds, two sentences.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The work', 'Had done, or did?', 'By whom', 'The sentence'], [
  ['the printer serviced', '**had done**', 'their engineer', 'we have had it serviced twice, by your own engineer'],
  ['the roll holder replaced', '**had done**', 'their engineer', 'we had the holder replaced in December'],
  ['the rollers cleaned', '⚠ **did**', 'Lina, Mondays', '⚠ **we have cleaned the rollers weekly since January and kept a sheet**'],
  ['the machine re-sited', 'did', 'us', '⚠ **we re-sited it at your engineer\'s own suggestion**'],
  ['the labels printed outside', '**had done**', 'a printer in Mezzeh', 'we have had the labels printed outside since November'],
], [1.4, 1.1, 1.2, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We have had the machine serviced twice, by your own engineer, in December and February. What we did ourselves is clean the rollers weekly since January, and there is a sheet with eleven entries."', '⚠ **Count the claims that would have overstated what the company can do, then ask who would have noticed.** ⚠ **Usually the other side\'s own engineer**, who knows exactly who serviced it — which is why the overstatement is never worth making.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four of the five** — the two services and the holder by their engineer, and the re-siting at their engineer\'s suggestion.  2 ⚠ **The weekly cleaning**, because the company did it: *Lina has cleaned the rollers every Monday since 6 January and there are eleven entries on the sheet.*  3 Because ⚠ **their own engineer suggested the re-siting on 3 December and the slip continued after it**, which he recorded himself on 9 February — ⚠ **one explanation has already been tried, by them, and it was not the cause.**'));
out.push(note('⚠ That third answer is the strongest line available in any claim and it is worth naming as a type: ⚠ **an explanation eliminated by the other side\'s own suggestion.** It is in the file already in most disputes, it costs nothing to find, and it cannot be argued with — **because arguing with it means arguing with their own engineer.**'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**THE VAN — WHAT HAS BEEN DONE TO IT, AND BY WHOM. 16 March. F. Saeed.**',
  '14 Jan | serviced, 60,000 km | **us** | ⚠ **your depot** | your invoice 8841',
  '2 Mar | brake pads replaced | **us** | ⚠ **your depot** | your invoice 9014',
  'every Monday since Sept | oil and water checked | us | ⚠ **us — me** | ⚠ **my sheet, 26 entries**',
  '6 Mar | the load reduced to 900 kg | **us** | us | ⚠ **at your foreman\'s own suggestion**',
  '⚠ **Two of the four were carried out by your own depot** and I have written them as *we have had X done*, because we arranged them and your people did them. ⚠ **Both are on your invoices and not only on our word.**',
  '⚠ **The line that is entirely mine is the Monday check**, in the active, because I did it: twenty-six entries since September. ⚠ **I am not going to call twenty-six entries a maintenance regime; it is twenty-six entries and the sheet is here.**',
  '⚠ **And the line to read twice.** We reduced the load to 900 kilos **because your foreman suggested it on 6 March**, and the judder continued on the next two journeys. ⚠ **One explanation has been tried, by you, and it was not the cause.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Arranged by* and *carried out by* as separate columns', '✓'],
  ['An evidence column naming whose document it is', '✓ two of their invoices'],
  ['Your own work in numbers, not nouns', '✓ twenty-six entries'],
  ['A line where their own explanation has been tried', '✓ the load reduction'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *carried out by* columns. ⚠ **Count how many entries are the other side\'s** — and in most tables it is more than half, which surprises the writer and is the argument for the construction.'));
out.push(stage('7', 'Write freely – sample (167 words)'));
out.push(sample(null, [
  'A customer once wrote to us that he had maintained a roller shutter we fitted, and the letter lost him his claim in one sentence.',
  'He wrote *we have serviced the shutter annually since installation*. Our records showed three service visits, all by us, all invoiced to him, ⚠ **and the fourth year had been missed because he had declined the visit when we telephoned.**',
  'So the sentence was wrong twice. He had not serviced it — ⚠ **he had had it serviced, by us** — and it was three years and not four.',
  'What he meant was true and reasonable: he had arranged and paid for the servicing. ⚠ **What he wrote claimed to have done the work himself**, and the moment our engineer read it the whole letter was read differently.',
  'The claim was about a motor and the servicing was not really the point. ⚠ **But the letter had one sentence in it that our own records contradicted**, and after that every other sentence was checked.',
  '⚠ **He would have been better off writing nothing about the servicing at all.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the engineer reading the claim"   ✓ _is *have something done* used where the work was arranged?_ — no   ? _who found out?_ — "our own records, in about four minutes"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the overstatement was found by the other side, in two of three texts, ⚠ **and in both the rest of the letter was discounted because of it.** ⚠ The sample\'s last line is the practical lesson: **he would have been better off writing nothing about the servicing at all** — an unnecessary claim that can be checked is worse than silence.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Five things from this year. ⚠ **Had done:** the generator serviced (the engineer, April); the shutter mended (the fitter, August); the labels printed (a printer in Mezzeh, from November). ⚠ **Did:** cleaned the rollers weekly (Lina, Mondays, sheet); counted the fourth store (⚠ **not done — June**). **Three of five were somebody else\'s work and I would have claimed all five.**']));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  Could you tell me whether…'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second half decides it: *which would you put in a letter* — and learners choose the indirect one without being able to say why, which is what the cycle supplies.'));
out.push(p('**b**  _Could you tell me **whether** the invoice was priced from the list of the 5th? · I should like to know **when** somebody will come. · May I ask **who** authorised the change? · Could you tell me **whether** the customer was told?_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **An explanation** — *and an explanation is the cheapest thing anybody can send you*: two paragraphs about how busy March is.  2 ⚠ **It asks for a fact and it keeps its shape in a file**: *why has nobody come?* answered with a paragraph looks like a conversation, and ⚠ *could you tell me whether an engineer has been allocated* **answered with a paragraph looks like a refusal to say.**'));
out.push(note('⚠ The file argument is the one worth dwelling on, because it is counter-intuitive: ⚠ **the softer sentence is the harder one to refuse.** A direct question gives the other side a legitimate answer that is not an answer; an indirect one does not, ⚠ **and the difference is visible to anybody reading the correspondence afterwards** — which in a claim is the whole point.'));
out.push(p('**Language box – Practise (samples):**  1 *could you tell me whether the invoice was priced from the list of the 5th?*  2 *I should like to know when the machine will be replaced, or whether it will be.*  3 *may I ask who signed the gate sheet on the 14th?*  4 *could you tell me whether the code was checked at the February service?*  5 *I should like to know whether the claim has been passed to anybody, and if so to whom.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have his note. Why ask at all?'],
  ['A', 'Because telling them what their own engineer wrote is a small accusation.'],
  ['B', 'And if they answer *no, it was not recorded*?'],
  ['A', '⚠ **Then I have the note, and they have put something in writing that their own document contradicts.**'],
  ['B', 'And if they answer yes?'],
  ['A', '⚠ **Then the claim has their own engineer in it**, which is better than having my word for it.'],
  ['B', '⚠ So both answers help you.'],
  ['A', '⚠ **Both answers help me, and it cost one sentence.**'],
]));
out.push(note('⚠ Role card 2 is the sharpest thing in the cycle: ⚠ **an indirect question you already know the answer to is the strongest sentence in a claim.** Both answers improve the writer\'s position, it costs one sentence, ⚠ **and it is politer than the assertion it replaces** — which is why it should be taught as a technique and not as a trick.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the direct question, the answer it got, and the indirect version. **Typical errors:** ⚠ **inversion after *whether*** — *could you tell me whether has he been allocated* — which is the commonest error in the cycle · _I should like to know why are you busy_ · *if* for *whether* in writing · and the content error, which is asking three facts in one question. ⚠ **Two facts, no more, or it will be answered selectively.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Direct', 'Indirect', 'The fact I want', 'Do I already know it?'], [
  ['Why has nobody come?', 'Could you tell me whether an engineer has been allocated, and if so when?', 'allocated, and a date', 'no'],
  ['Why was it priced wrongly?', 'Could you tell me whether the invoice was priced from the list of the 5th?', 'which list', '⚠ **yes — the list is dated**'],
  ['Who changed the code?', 'May I ask who authorised the code change in November?', 'a name', 'no'],
  ['Did your engineer see the slip?', 'Could you tell me whether the slip was recorded at the February service?', 'recorded or not', '⚠ **yes — his note**'],
  ['Are you going to replace it?', 'I should like to know whether a replacement is being considered, and by when a decision is expected.', 'two facts', 'no'],
], [1.6, 2.2, 1.3, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Directly it is *did your engineer see the slip?* Indirectly it is *could you tell me whether the slip was recorded at the February service?* The fact I want is whether it is recorded, and I already know it, because his note is in front of me."', '⚠ **Count the *why* questions in the room, then ask what each would be answered with.** ⚠ **An explanation, in every case** — and a class that hears twelve examples of that will stop writing *why* in letters.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Because the writer does not yet know whether there is one** — and ⚠ **question 3 may end the matter against her**: if the machine is specified to need a feed check at forty labels, it is doing what it was sold to do and the fault is in what the company was told.  2 ⚠ **It could show that there is no complaint at all**, and she undertakes to say so in writing.  3 Because stating it — *your engineer recorded the slip on 9 February* — ⚠ **is a small accusation**, and asking costs nothing: *if the answer comes back no, I have his note.*'));
out.push(note('⚠ Question 3 is the one to teach as a type: ⚠ **the question that might end the matter against you.** A letter containing one is read completely differently, **it costs nothing because the answer is the answer either way**, and it is the single most persuasive thing a claimant can include — ⚠ **and almost nobody includes it, because it feels like conceding.**'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**TO THE CARTON SUPPLIER — FOUR QUESTIONS. 18 March. B. Nassif. ⚠ No complaint in any of them.**',
  '**1** Could you tell me **whether** the base seam specification changed between the November and the February batches, and **if so when**?',
  '**2** Could you tell me **whether** batch 4471 is the one supplied to us on 2 February? ⚠ _(It is the number on our own goods-in sheet, so this is a question I can answer myself; I am asking so that we are working from the same batch.)_',
  '**3** I should like to know **what** weight a carton of this grade is specified to carry when lifted full. ⚠ **If it is under twelve kilos we have no complaint at all, because we have been putting about fourteen in them, and I shall say so in writing.**',
  '**4** May I ask **whether** this grade has had base-seam failures elsewhere? ⚠ _(I am asking in writing rather than on the telephone so that the question is on the file either way.)_',
  '⚠ **Why there is no complaint.** Because question 3 may end the matter against us. ⚠ **We have never looked up the specified weight and we have been loading to about fourteen kilos because that is what fits.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbered questions, each asking for a fact', '✓'],
  ['No inversion after *whether*', '✓'],
  ['A bracket where you already hold the answer', '✓ the batch number'],
  ['A question that might end the matter against you', '✓ and it probably does'],
  ['Why there is no complaint yet', '✓'],
], [5, 1]));
out.push(note('⚠ The sample\'s question 3 is better than the model\'s because the writer has already guessed the answer and says so: ⚠ **we have been loading to about fourteen kilos because that is what fits.** **A claimant who names their own likely error in question three has written a letter that will be answered honestly**, and the answer will probably save them a claim they would have lost.'));
out.push(stage('6R', 'Share'));
out.push(p('The question 3s alone. ⚠ **Ask whether each could really go against the writer** — and send back any that could not, because a safe third question is not the thing: **the point is that the answer is the answer either way.**'));
out.push(stage('7', 'Write freely – sample (169 words)'));
out.push(sample(null, [
  'I once asked a government office why our licence renewal had not been processed, and I received a page about the volume of applications.',
  'It was a true page and it was entirely polite, and it told me nothing that let me do anything. I asked again, in different words, and received a shorter version of the same page.',
  'The third letter asked two things: ⚠ ***could you tell me whether our application of 14 January has been allocated to a file number, and if so what it is?***',
  'The answer came in four days and it was one line. ⚠ **It had not been allocated a number, because it had been returned to us on the 2nd of February for a missing signature and the return had gone to our old address.**',
  'Six weeks, and the fact was available on the first day to anybody who asked for a fact.',
  '⚠ **What I had asked twice was *why*, and *why* is a question about them.** The third letter asked **whether**, which is a question about a document — ⚠ **and a document either has a number or it has not.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the clerk who had to answer the third letter"   ✓ _is the indirect word order right?_ — yes   ? _what fact was wanted, and was it ever given?_ — "a file number; given in four days, after six weeks"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the fact was never given at all, in all three texts, ⚠ **and in all three the explanation was perfectly polite and arrived by return.** ⚠ The sample\'s formulation is the one to keep: ***why* is a question about them and *whether* is a question about a document** — and a document either has a number or it has not.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **The one I already hold:** *could you tell me whether the gate sheet for 14 March was signed before the count?* — **it is signed and undated and I have it.** ⚠ **The one that might end it against me:** *I should like to know what the specified interval is between services* — **if it is six months, we have missed one, and the claim is ours and not theirs.**']));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  One request, by one date'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Which one you actually wanted* is the question, and most learners discover that the one they wanted was not first on the list.'));
out.push(p('**b**  Only the second: ⚠ *what I am asking for is a replacement feed roller, fitted by Thursday the 26th.* **One thing, one date, and the day named.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The roller** — the cheapest of the four.  2 ⚠ **That you do not know which one matters to you** — *and if you do not, they will not guess.* ⚠ A list of asks is a menu and the other side orders from it.'));
out.push(note('⚠ Mr Ayoub\'s last answer is the one that changes behaviour: ⚠ **unanswered is worse than refused.** *A refusal can be argued with and a silence cannot — they have not said no to the credit, they have said nothing, and nothing has no reason in it to answer.* **An ask spent on a list has been half used**, and asking a second time is harder than asking for the first time.'));
out.push(p('**Language box – Practise (samples):** Four asks put in order, and the test is one question: ⚠ **which one would end the matter either way?** That one goes first, alone, with a date. ⚠ **It is usually a question rather than a demand**, and most learners put it last because it might not help them.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your five asks. Which one would end the matter either way?'],
  ['A', 'None of them would end it. They are all things I want.'],
  ['B', '⚠ Then which one, answered, would tell you whether you have a claim at all?'],
  ['A', '…The specified weight. If it is under twelve kilos, I have no claim.'],
  ['B', '⚠ **That one. First, alone, with a date.**'],
  ['A', 'It is the one I put last.'],
  ['B', '⚠ **Everybody puts it last, because it is the one that might not help.** And it is the only one that gets answered quickly, **because answering it may end the matter for them too.**'],
]));
out.push(note('⚠ Role card 2 contains the practical finding: ⚠ **the ask that might end the matter is the one the other side has an incentive to answer**, because an ending is valuable to them. Everything else on a list is a cost to them. ⚠ **So the question that feels weakest is the fastest-answered**, which is worth saying plainly to a class that resists it.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four asks, the one granted and the one that mattered. **Typical errors:** _please deal with this as soon as possible_ (⚠ **a date nobody can miss**) · five numbered requests · a date with no day named · and the content error, which is keeping the list and adding a date to each item. ⚠ **A dated menu is still a menu.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The claim', 'All the asks', 'The one that matters, and why', 'The single-ask sentence, with a date'], [
  ['the printer', 'a roller · a credit for labels · training · the stated run length', '⚠ **the run length — its answer ends the matter either way**', '⚠ *What I am asking for is the stated run length before a feed check is required, in writing, by Thursday the 26th.*'],
  ['the cartons', 'a credit for 23 · a new grade · an engineer · the specified weight', '⚠ **the specified weight — if it is under twelve kilos we have no claim**', '⚠ *What I am asking for is the weight a carton of this grade is specified to carry when lifted full, by Friday the 27th.*'],
], [1.2, 1.8, 1.9, 2.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked for a roller, a credit, training and the run length. The one that mattered was the run length, because its answer ends the matter in either direction. The sentence is: what I am asking for is the stated run length before a feed check is required, in writing, by Thursday the 26th."', '⚠ **Count the claims with more than two asks, then ask which was granted.** ⚠ **The cheapest, almost without exception** — and the class will have at least one example of a list in which the important item was never answered at all.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **A roller was sent**; ⚠ **the run length was not answered at all** — and it was the only one of the four whose answer could have ended the matter in either direction.  2 ⚠ **If it is forty labels, there is no complaint and the correspondence ends; if it is four hundred, the machine is not performing as specified and a second letter follows about the labels and the time.**  3 Because ⚠ **she cannot ask for it honestly until she knows whether the machine is doing what it was sold to do** — and if it is, the credit is not owed and the complaint is against whoever said it would run a thousand.'));
out.push(note('⚠ The two branches are what make a single ask strong, and the second one is the gift: ⚠ ***this correspondence ends*** is the most attractive sentence available to a supplier, **and offering it costs nothing if the branch is honest.** A reader who can see both outcomes can answer; one who can see only the bad outcome will delay.'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**THE CARTON CLAIM, WRITTEN TWICE. 20 March. B. Nassif.**',
  '**Version 1 (four asks).** _Please credit the twenty-three split cartons; supply the heavier grade in future; send somebody to look at our forklift; and confirm the weight a carton of this grade is specified to carry._',
  '⚠ **What came back: a credit for twenty-three cartons, about 34,000.** No answer on the grade, nothing about the forklift, ⚠ **and no answer at all on the specified weight** — which is the only one of the four whose answer could end the matter.',
  '**Version 2 (one ask).** _What I am asking for is the weight a carton of this grade is specified to carry when lifted full, in writing, by Friday the 27th. ⚠ **If it is twelve kilos or less, we have been overloading them, we have no claim, I shall return the credit of 34,000 and this correspondence ends.** If it is sixteen or more, the cartons are not performing as specified and I shall write again about the grade._',
  '⚠ **Why one ask.** Because four asks are a menu and they took the cheapest — ⚠ **and the three unanswered ones are now harder to ask for than before I asked, because unanswered is worse than refused.**',
  '⚠ **And why I am offering to return the credit.** Because if we have been overloading them I am not entitled to it, ⚠ **and offering it back is the only sentence in the letter that proves I want the answer and not the money.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One ask, with a figure or a thing', '✓'],
  ['One date, with the day named', '✓ Friday the 27th'],
  ['Two branches, both stated', '✓'],
  ['An ending offered on one branch', '✓ and the credit returned with it'],
  ['Why the obvious ask is being held back', '✓'],
], [5, 1]));
out.push(note('⚠ The sample goes one step beyond the model and it is the right step: ⚠ **it offers to return money already received** if the answer goes against it. **That sentence proves the writer wants the answer and not the money**, it costs nothing unless the writer was wrong, ⚠ **and it makes the answer arrive quickly** — which is the only thing the letter is for.'));
out.push(stage('6R', 'Share'));
out.push(p('The two branches alone. ⚠ **Ask which branch the other side would prefer, and whether it is honest** — and refuse any pair of branches where both outcomes are bad for the reader, **because then there is no incentive to answer and the letter will sit.**'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'When our generator failed in its first year we wrote to the supplier with six requests, and they answered the sixth.',
  'The six were: repair it under warranty; supply a loan machine; credit the fuel we had wasted; send the service history; confirm the warranty period; and explain the delay in the first call-out. ⚠ **They sent the service history**, which was two sheets and cost them nothing.',
  'What mattered was the fifth. ⚠ **The warranty period decided everything else on the list**, and we did not know it, because the paperwork we had been given at delivery was a delivery note and not a warranty.',
  'We asked again, nine days later, and by then the question had been answered once as part of a letter about something else, in a sentence saying *the standard period applies*. ⚠ **Which period, and standard to whom, nobody ever said.**',
  'It took five months. The warranty turned out to be two years, ⚠ **and if we had asked that one question alone in the first letter we would have known in a week** and the other five would have answered themselves.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the clerk choosing which of six to answer"   ✓ _is there one ask and one date?_ — "six and none"   ? _which would have ended it?_ — "the warranty period — and it was fifth"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the cheapest ask was the one granted, in all three texts, ⚠ **and in all three the ask that would have ended the matter was last on the list or not on it.** ⚠ The sample\'s detail — *answered once, inside a letter about something else, as *the standard period applies** — is the commonest way an important ask dies: **answered in words that are not an answer, and then treated as answered.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The claim: the telephone bill. ⚠ **The ask whose answer ends it either way:** *what is the per-minute rate for calls to Beirut on our tariff?* ⚠ **If it is what I think, we have been overcharged since January; if it is not, we have been budgeting wrongly and the fault is ours.** One sentence, by Thursday the 26th, and both branches in the letter.']));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  What I asked for was not this'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Starting a sentence with *what* is unfamiliar to most B1 learners in writing and immediate in speech, which is the way in.'));
out.push(p('**b**  _**What I asked for was** a roller, not a replacement machine. · **It is the date that is** the problem, not the price. · **What he signed was** the sheet, not the order._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Two pages on whether the machine was correctly specified for our volume** — a broad arguable question, where a narrow factual one was asked.  2 ⚠ ***What I asked for was the stated run length. I did not ask whether the machine was correctly specified, and I am not asking now.*** **The cleft plus the closing half.**'));
out.push(note('⚠ Nadia\'s explanation of the mechanism is worth reading twice: ⚠ **a question that can be slid sideways will be**, and the substituted question is nearly always about the asker. **You asked about their machine and they answered about your purchasing decision** — and once answered, two pages exist and nobody abandons two pages.'));
out.push(p('**Language box – Practise (samples):**  1 *what I asked for was the run length; I did not ask about specification.*  2 *it is the date that is the problem, not the price.*  3 *what he signed was the sheet, not the order.*  4 *what we are offering is the carriage, and not the two days.*  5 *the one thing nobody did was tell the customer.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your letter has three clefts in it. Which one is the letter about?'],
  ['A', 'The run length.'],
  ['B', '⚠ Then that one stays and the other two become ordinary sentences.'],
  ['A', 'They are all true.'],
  ['B', '⚠ **They are all true and three of them read as anger** — and an angry claimant can be managed instead of answered.'],
  ['A', 'Managed how?'],
  ['B', '⚠ **By somebody senior telephoning to calm you down**, which takes four minutes of their time and produces no figure at all. ⚠ **One cleft gets a figure; three get a telephone call.**'],
]));
out.push(note('⚠ Role card 2 gives the commercial reason for the one-per-letter rule and it is better than the stylistic one: ⚠ **an angry claimant gets a telephone call and a calm one gets a figure.** The call costs the other side four minutes and produces nothing, ⚠ **and most claimants accept it as progress.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the question asked, the question answered, and the cleft with its closing half. **Typical errors:** _what I asked was for the run length_ · _it is the date which is the problem_ (acceptable, but *that* is better in a claim) · more than one cleft · and the content error, which is omitting the closing half. ⚠ **Without it they will answer their own question again.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I asked', 'What they answered', 'The cleft', 'The closing half'], [
  ['the stated run length', 'whether the machine suited our volume', '⚠ **what I asked for was the stated run length**', '⚠ **I did not ask whether it was correctly specified, and I am not asking now**'],
  ['which list the invoice was priced from', 'how the list is produced', 'what I asked was which list this invoice was priced from', 'I did not ask how the lists are produced'],
  ['whether the slip was recorded', 'that their engineers are experienced', 'what I asked was whether the slip was recorded on 9 February', 'I have not questioned anybody\'s experience'],
  ['the specified weight', 'their quality procedures', 'what I asked for was the specified weight', 'I did not ask about your procedures and I am not asking now'],
], [1.4, 1.6, 1.8, 1.8]));
out.push(note('⚠ Look at the second column down the table: ⚠ **every substituted question is broader than the one asked and flatters the answerer.** *How the lists are produced · our engineers are experienced · our quality procedures.* **That is the pattern, and naming it lets a learner see a sideways answer in the first line of a reply.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked which list the invoice was priced from. They answered how the lists are produced. The cleft is *what I asked was which list this invoice was priced from*, and the closing half is *I did not ask how the lists are produced*."', '⚠ **Count the sideways answers, then ask what each substituted question was about.** ⚠ **Almost always about the answerer and almost always something they are proud of** — which is why the sideways answer is usually long and usually sincere.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One**, in the second paragraph, with its closing half immediately after it.  2 ⚠ **So that there is no doubt which question is outstanding** — *a reworded question restarts the clock and lets the other side treat it as a new one.*  3 ⚠ **That the specification pages were an evasion**: *I do not know that, and they may have been written by somebody who was trying to help. I have said only that they do not contain the figure* — **which is a fact, is checkable, and cannot be argued with.**'));
out.push(note('⚠ The last paragraph is the most sophisticated thing in Unit 19 and it is worth a minute: ⚠ **the writer declines to make the accusation she is entitled to make** and states only the checkable thing. **A letter that says *your letter does not contain the figure* cannot be answered except with the figure**; one that says *your letter was an evasion* can be answered with two more pages about how hard everybody is trying.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**TO THE CARTON SUPPLIER — PULLING THE QUESTION BACK. 25 March. B. Nassif. ⚠ One cleft.**',
  'Thank you for your letter of the 22nd.',
  '⚠ **What I asked for was the weight a carton of this grade is specified to carry when lifted full.** I did not ask about your quality procedures, and I am not asking now.',
  'Your letter does not contain the weight. It contains a page and a half on your inspection regime, and I have read it. ⚠ **If your inspection regime becomes relevant I shall raise it myself**, and at present it is not relevant, because I do not yet know what the carton is supposed to carry.',
  'The question is unanswered as of today, which is the **fifth** working day since I asked it. ⚠ **I am asking it again, in the same words**: the weight a carton of this grade is specified to carry when lifted full, in writing, by Friday the 27th.',
  '⚠ **Why this letter is four sentences long.** Because everything else I might write would be about your letter of the 22nd, and your letter is not the subject.',
  '⚠ **And what I have not written.** I have not said the inspection pages were an evasion. ⚠ **I have said that they do not contain the weight**, which is a fact and is checkable in four seconds.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Exactly one cleft, with its closing half', '✓'],
  ['The question repeated in the same words', '✓'],
  ['The working days counted', '✓ the fifth'],
  ['What their letter does contain, acknowledged', '✓ and read'],
  ['The accusation you could make, refused', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The closing halves alone. ⚠ **Ask which door each one closes** — and whether the door is one the other side has already walked through, because a closing half that refuses a question nobody asked is wasted.'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'I asked a bank, four times over five months, what the per-item charge on our account was.',
  'The first answer was a leaflet about the account\'s benefits. The second was a letter explaining that charges depend on the account type and inviting me to a review meeting. The third was a telephone call from somebody pleasant who asked how business was.',
  'The fourth time I wrote six words differently: ⚠ ***what I asked for was the per-item charge on account 4471, in figures.*** I did not ask for a review, and I said so in the next sentence.',
  'The answer came in two days. It was 1,100 per item, which was about four times what I had assumed, ⚠ **and it had been printed on the back of every statement for two years in a column headed *tariff*.**',
  'What I notice is that nobody lied to me and nobody refused me. ⚠ **Three people answered a question that was easier to answer than mine, and each of those answers was a sincere attempt to help.**',
  '⚠ **A cleft is not a weapon against bad faith. It is a way of surviving good faith.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the pleasant person who telephoned"   ✓ _is there one cleft and only one?_ — yes   ? _how many times was it asked?_ — "four, and reworded three times"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the question was reworded each time, in two of three texts, ⚠ **and a reworded question lets the other side answer it as a new one, which restarts everything.** ⚠ The sample\'s last line is the one to read out: ***a cleft is not a weapon against bad faith; it is a way of surviving good faith*** — three sincere people answered an easier question.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Asked again in exactly the original words: ⚠ ***what is the per-minute rate for calls to Beirut on our tariff, in figures?*** — asked on 4 March, ⚠ **today is the eighth working day.** I have added one sentence: *I did not ask for a tariff comparison and I am not asking now.* **The first letter had asked for the rate; the reply offered a review of our package.**']));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  I accept it, and here is what it does not cover'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *What part of it was plainly right* is the question, and a learner who says *none of it* should be pressed: **there is nearly always one item that is simply correct.**'));
out.push(p('**b**  The second. ⚠ **It accepts a figure and then limits, in that order** — and the first is a sentence about the claimant\'s feelings, which accepts and limits nothing.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The agent\'s re-marking charge of about 140,000 · the two days to her customer · and something her own customer has deducted from her, unquantified.**  2 ⚠ **A letter that limits before it accepts is read as a refusal with a concession at the end, and one that accepts before it limits is read as an acceptance with a boundary** — *the content is identical and the order decides which letter she thinks she has received.*'));
out.push(note('⚠ That is the finding of the cycle and it can be demonstrated in ninety seconds: read the same five sentences in two orders and ask the class what kind of letter each one is. ⚠ **Nothing else in Unit 19 produces as large an effect for as little work**, and it is invisible to the writer because the writer knows what the letter says.'));
out.push(p('**Language box – Practise (samples):** the three kinds, sorted. ⚠ **Undisputed:** the agent\'s invoice — itemised, caused by our code. ⚠ **Ours but unpriceable:** the two days. ⚠ **A real loss that is not ours:** her customer\'s deduction, under a contract we have never seen. **And for the unpriceable one: the list, the reworded line, and a name.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Read me your letter as if I were Ms Tannous.'],
  ['A', '*We have considered your claim. The deduction made by your own customer is not a matter for which we can accept responsibility, and there is no invoice for the two days. We are, however, prepared to accept the agent\'s charge of 140,000.*'],
  ['B', '⚠ So you are refusing most of it and offering me the carriage.'],
  ['A', 'That is not what it says.'],
  ['B', '⚠ **It is what it says in the order you have said it.** Now read me the same five sentences the other way round.'],
  ['A', '*We accept your agent\'s charge of 140,000 in full. The two days are ours and there is no invoice for them. Your customer\'s deduction is a real loss and it is not ours.*'],
  ['B', '⚠ **Same content. And now you are a company that accepts things.**'],
]));
out.push(note('⚠ Role card 2 is the demonstration and it must be done aloud, in both orders, by the same person. ⚠ **The word *however* in the middle of the first version is doing most of the damage**, and learners will defend it as politeness — **it is the word that tells a reader the acceptance is a concession.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three items and their kinds in the right order. **Typical errors:** _we accept the charge, however_ · all three items in one paragraph · an invented figure for the unpriceable item · and the content error, which is accepting the small item and calling it *goodwill*. ⚠ **An undisputed item accepted as goodwill is a refusal with a present on top of it**, and the claimant will hear it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The item', 'Undisputed / ours but unpriceable / not ours', 'The sentence', 'Order'], [
  ['the agent\'s re-marking charge, 140,000', '⚠ **undisputed**', 'We accept it in full and it will be credited.', '**1**'],
  ['the two days to her customer', '⚠ **ours, unpriceable**', 'The two days are ours. There is no invoice for them.', '2'],
  ['her customer\'s deduction', '⚠ **a real loss, not ours**', 'It was deducted from you under your contract, which we have not seen.', '3'],
  ['the list, the line and a name', '— (what is offered instead)', 'enclosed; the line now reads…; and I shall telephone you on the day I know.', '4'],
], [1.4, 1.8, 2.2, 0.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The undisputed item is the agent\'s charge of 140,000 and I accept it in the first line. The two days are ours and cannot be priced. Her customer\'s deduction is a real loss and it is not ours. What I offer instead is the list, the reworded line and a name."', '⚠ **Count how many letters would have limited before accepting, then ask how the claimant would have read each one.** ⚠ **As a refusal** — and the writers will not believe it until role card 2 has been done aloud.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The agent\'s re-marking charge of 140,000, in full, in the first line** — with a choice: credited against the next invoice or paid directly, *tell me which and it is done the same day.*  2 Because ⚠ **any figure I invented would be an insult to a loss I cannot measure.**  3 ⚠ **The list of objects carrying the code, which she asked for in January and which is enclosed; the reworded programme line; and a name** — *if anything of yours is wrong again, I shall telephone you on the day I know, with nothing to tell you except that I know.* ⚠ And no discount, **because she said in January that a discount tells her we want the matter closed.**'));
out.push(note('⚠ The final paragraph is the most respectful thing in the unit: ⚠ **it quotes the customer\'s own reasoning back to her as the reason.** *You told me in January that a discount tells you we want the matter closed, and I would rather send you the list.* **Using what a customer has said about how they want to be dealt with is worth more than any amount of warmth.**'));
out.push(stage('6', 'Write with help – sample (131 words)'));
out.push(sample(null, [
  '**TO THE AL-NAHDA SCHOOL — YOUR CLAIM OF 18 MARCH. 21 March. H. Mourad.**',
  '**We accept the cost of the second delivery, 46,000, in full.** It will be credited against your March account, or paid to the bursar\'s office directly if you prefer; tell me which and it is done the same day.',
  '**The caretaker\'s afternoon.** He waited from one until half past three and that is ours. ⚠ **There is no invoice for it and I am not going to offer you a figure, because any figure I invented would be an insult to an afternoon I cannot measure.** What I can offer instead is in the last paragraph.',
  '⚠ **The cost of the hired van.** You have told me the governors were charged 120,000 for a van on the Monday. ⚠ **That van was hired before anybody telephoned us and without our being asked, and we would have delivered free on the Monday morning. It is a real loss and it is not ours.** If the hire was arranged on advice from anybody here, tell me who and when and I shall answer again.',
  '⚠ **What I offer for the afternoon.** The delivery note now carries a telephone number, and the office telephone diverts to my mobile after four. ⚠ **And a name: if a delivery of yours is wrong again, I shall telephone the bursar on the day I know.**',
  '⚠ **What I have not done.** I have not offered the governors a discount on next term\'s account.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The undisputed item in the first line, in full, with no *however*', '✓'],
  ['A choice of how it is settled', '✓'],
  ['The unpriceable item, with a refusal to invent a figure', '✓'],
  ['The loss that is not yours, answered plainly, with a route left open', '✓ *tell me who and when*'],
  ['Something offered instead of money, including a name', '✓'],
  ['What you have not done, and why', '⚠ **✗ — the *why* is missing**'],
], [5, 1]));
out.push(note('⚠ The sample\'s last line has the *what* and not the *why*, and the checklist says so. ⚠ **The *why* is what stops the omission reading as meanness** — *because I would rather spend it on the telephone diversion, which is the thing that failed* is nine words and it changes the paragraph entirely.'));
out.push(stage('6R', 'Share'));
out.push(p('The first lines alone. ⚠ **Ask whether each contains a figure and whether anything in it hesitates** — and send back any that contains *however*, *whilst*, *although* or *in the circumstances*.'));
out.push(stage('7', 'Write freely – sample (173 words)'));
out.push(sample(null, [
  'We once answered a claim in the right order by accident and I have never forgotten what happened.',
  'A customer claimed for three things: a damaged consignment, a day of his fitter\'s time, and a job he said he had lost because of the delay. The damaged consignment was ours and plain. ⚠ **The fitter\'s day was ours and had no invoice. The lost job was real and had nothing to do with us** — he had lost it to a competitor on price, as he told me himself two weeks later.',
  'I wrote the letter in a hurry on a Thursday and I started with the consignment, because it was the easy one and I wanted to get it out of the way.',
  '⚠ **He telephoned the next morning to thank me**, and we spent eleven minutes talking about the fitter and no time at all on the lost job.',
  'The letter I would normally have written would have begun with the lost job, because it was the big number and the one I was worried about.',
  '⚠ **The content would have been identical and he would have telephoned to argue.** ⚠ **I got it right because I was in a hurry, and it took me two years to understand why it had worked.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer opening the letter on the Friday"   ✓ _does the acceptance come before the limit?_ — "yes, by accident"   ? _what was offered for the thing that could not be priced?_ — "eleven minutes of conversation, which was enough"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the limit came first, in two of three texts, ⚠ **and in both the claimant read the letter as a refusal, which it was not.** ⚠ The sample is the inverse case and the most instructive: **the right order produced a thank-you for a letter that refused the largest item**, and the writer did not know why for two years.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The first line only: ⚠ ***We accept the carrier\'s surcharge of 86,000 in full, and it will be credited to your March account; tell me if you would rather have it paid directly and it is done the same day.*** ⚠ **No *however*, no *whilst*, no *in the circumstances*** — and the two items I am going to limit are in the second paragraph, where they belong.']));

// ===================== 19.7 =====================
out.push(pb());
out.push(h2('19.7  Review & Mediate: who counts as the claimant'));
out.push(stage('1', 'Get ready – Unit 19 quiz'));
out.push(p('**1** ⚠ **What it does · how often · and the exception** — and the exception is worth most, because *the count narrows it to four things and the exception narrows it to one.*  **2** ⚠ **That we arranged it and somebody else did it** — so it claims no expertise we have not got, ⚠ **and it puts the work on the other side\'s own record.**  **3** Because ⚠ **a *why* question invites an explanation, which is the cheapest thing anybody can send**, and an indirect question asks for a **fact** — ⚠ **and an unanswered indirect question is visibly unanswered to whoever reads the file.**  **4** ⚠ **Because the other side orders from it, and takes the cheapest** — and ⚠ **unanswered is worse than refused**: a refusal can be argued with and a silence cannot.  **5** ⚠ **The order.** Accept then limit is read as an acceptance with a boundary; limit then accept is read as a refusal with a concession — **and the content is identical.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Four** — Ms Tannous, her own customer, her agent, and ⚠ **Abu Yasser.**  2 ⚠ **One of the four, and she is the only one who can send us an invoice** — *which I do not think is a coincidence.*'));
out.push(note('⚠ Lina\'s reformulation is the finding: ⚠ **the question is not who the claimant is; it is who is a claimant and cannot bill.** The agent has been paid, the customer\'s customer does not know we exist, ⚠ **and the man at the bench works here** — and of the three, only the last is owed anything, which is the judgement the cycle is really teaching.'));
out.push(p('**Language box – Practise (sample):**  _"Who lost something? … Can they bill us? … Two of the three need nothing: the agent has been paid and her customer is hers to manage. And the fourth works here and has been in four documents about the marking bench."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'Your claim. Who lost something?'],
  ['A', 'The school lost a morning. We lost the cost of the second delivery.'],
  ['B', 'Anybody else?'],
  ['A', '…The caretaker waited two and a half hours.'],
  ['B', 'Can he bill you?'],
  ['A', 'No. He is not the school; he is a man with a key.'],
  ['B', '⚠ And has anybody written to him?'],
  ['A', '⚠ **Nobody has written to him, and he is the only person in this whole matter who actually sat on a step.**'],
]));
out.push(note('⚠ Pair 2 finds the same structure in a different claim: ⚠ **the person who actually bore the loss is the one with no billing relationship.** The school can invoice; the caretaker cannot. ⚠ **A letter to the caretaker is not required by anything and it is the only one anybody would remember** — which is the judgement, not a rule.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write everybody who lost something, whether they can bill, and the sentence owed. **Typical errors:** listing only the parties to the correspondence · and the content error, which is proposing to write to all of them. ⚠ **Writing to a customer\'s customer over her head is the worst thing available in this unit**, and knowing when to do nothing is half the skill.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who lost something', 'Can they bill?', 'Written to?', 'What is owed'], [
  ['Ms Tannous', '⚠ **yes**', 'yes', 'nothing more — the letter is written'],
  ['her own customer', 'no', 'no', '⚠ **nothing, and we must not — he is hers to manage**'],
  ['her agent', 'no — invoiced and paid', 'no', 'nothing'],
  ['⚠ **Abu Yasser**', '⚠ **no — he works here**', '⚠ **no**', '⚠ **one sentence: you did it correctly from what you were given, and the fault was in the line I wrote**'],
], [1.6, 1, 1, 2.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"Four people lost something and we wrote to one — the only one who can send us an invoice. The one who cannot bill and is owed a sentence is Abu Yasser, and the sentence is: you marked nine cartons correctly from the stencils you were given, and the fault was in the line I wrote."',
  '⚠ **The unit\'s mediation, named as the seventh unit of this book:** a claim is answered by whoever can send an invoice, **so a company\'s whole correspondence about a fault is addressed to the one person in it who has a billing relationship** — ⚠ **and everybody else who lost something, including the person whose name is in every document about it and who did their work correctly from what they were given, is handled by nobody**, because a document about somebody goes to the person who decides and not to the person it is about.',
  '⚠ And the half that decides what to do: **do nothing about most of them.** The agent has been paid; the customer\'s customer is hers; ⚠ **writing to either would be worse than silence.** The one that is owed something is the one on the payroll, and what is owed is **one sentence and the document he is in** — which costs nothing and has not been done in two months.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 6)'));
out.push(table(['Gap', '1', '2', '3', '4', '5', '6'], [['Answer', 'B', 'A', 'B', 'A', 'B', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(table(['Gap', '7', '8', '9', '10', '11', '12'], [['Answer', 'B', 'A', 'C', 'A', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Gaps 11 and 12 are the unit\'s own distinction and they are the two that separate the class: ⚠ ***we are responsible for the fault*** (who did it) ⚠ **and *we are not liable for a loss we did not cause*** (who answers and pays). **A learner who swaps them has written a sentence that accepts the money and denies the work**, which is the opposite of the letter.'));
out.push(note('⚠ Gap 5 is **ours** and not *our*: *it is not **ours*** — a possessive pronoun standing alone. ⚠ Gap 7 is **instead** (*what I offer instead of the two days*) and gap 9 is **on** (*on the day I know*). **All three are small and all three are the kind of error that survives proofreading because the sentence still sounds right.**'));
out.push(stage('6', 'Write with help – sample (44 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Abu Yasser — you marked the nine cartons correctly from the stencils you were given. ⚠ **The fault was in the line I wrote**, which asked whether the stencils were on the bench and not whether they were the right ones. The post-mortem is on your bench and your name is in it twice. If anything in it is wrong, tell me and I will change it.',
]));
out.push(note('⚠ That sample is 61 words and must be cut to forty-five. ⚠ The cut is the explanatory clause — *which asked whether the stencils were on the bench and not whether they were the right ones* — because **he knows what the line said; he was the one working from it.** ⚠ **What must not be cut is *the fault was in the line I wrote*** and ⚠ **the offer to change the document**, which is the part that makes the note more than a kindness.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What they did, and that it was correct', '✓'],
  ['⚠ Where the fault was, in the first person', '✓ *the line I wrote*'],
  ['What they are being given or shown', '✓ the post-mortem, with the offer to change it'],
  ['35 to 45 words — count them', '✗ 61 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (176 words)'));
out.push(sample(null, [
  '**TO MS M. TANNOUS — YOUR CLAIM OF 20 MARCH. 25 March. N. Mansour.**',
  '**We accept your agent\'s re-marking charge of 140,000 in full.** It will be credited against your next invoice, or paid to you directly if you prefer; tell me which and it is done the same day.',
  '**The two days.** Your customer had the nine cartons two days late and that is ours. ⚠ **There is no invoice for it and I am not going to offer you a figure, because any figure I invented would be an insult to a loss I cannot measure.**',
  '⚠ **The deduction your own customer has made.** You have not yet put a figure on it and I am going to answer it before you do. ⚠ **It was deducted from you, under your contract with him, which we have not seen. It is a real loss and it is not ours.** If that contract passes such a deduction up the chain, send me the clause and I shall read it and answer again.',
  '⚠ **What I offer for the two days.** The one-page list of every object here that carries a consignee code — you asked for it in January; it is finished and enclosed. The programme line now reads *the stencils carry the code on the order*. ⚠ **And a name: if anything of yours is wrong again, I shall telephone you on the day I know, with nothing to tell you except that I know.**',
  '⚠ **What I have not done.** I have not offered a discount. **You told me in January that a discount tells you we want the matter closed, and I would rather send you the list.**',
]));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['Four people lost something in the wrong-village delivery: the school (⚠ **can bill — written to**), the bursar (no — not written to, and not needed), ⚠ **the caretaker, who waited two and a half hours** (no, and nobody has written), and Fadi, who is in three documents. ⚠ **The sentence owed to Fadi: *you telephoned the office twice from the road and nobody answered; the fault was in a note with no telephone number on it.***']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 19 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'c', 'b', 'b', 'b', 'b', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1 has three plausible answers and only one that can be acted on: ⚠ **b is a fault and c is a fault with a measurement and a pattern.** A learner who chooses b has done the right thing by half — **and the half that is missing is the half that identifies the cause.**'));
out.push(note('⚠ Question 4 is the no-inversion rule and it is the most-missed item in the paper: ⚠ ***could you tell me whether an engineer has been allocated***, never *has an engineer been*. ⚠ Question 6 is the unit\'s hardest idea in one line — **no answer at all is worse than a refusal** — and a learner who chooses a has not seen that a refusal contains a reason and a silence does not.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['People who lost something', 'The one who can invoice', 'The one who works here', 'What is owed to him', 'Why he has not seen it'], [[
  '⚠ **four** (Ms Tannous, her customer, the agent, Abu Yasser)', 'Ms Tannous', 'Abu Yasser', '⚠ **one sentence: he did it correctly and the fault was in the line she wrote**', '⚠ **a post-mortem goes to the person who decides, not the person in it**',
]], [1.8, 1, 1, 1.9, 1.8]));
out.push(note('⚠ Gap 1 needs the **number**; the names earn it too, but *several* does not. ⚠ Gap 5 is the mark that separates understanding from transcription, and it is a general finding about documents and not about this company: **a report about somebody is distributed to whoever must decide, and the person it is about is not on the list.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (69 words)', ['**We accept the agent\'s re-marking charge of 140,000 in full.** It will be credited against your next invoice, or paid to you directly if you prefer; tell me which and it is done the same day.   **The two days.** Your customer had the nine cartons two days late and that is ours. ⚠ **There is no invoice for it and I am not going to offer you a figure, because any figure I invented would be an insult to a loss I cannot measure.**']));
out.push(box('Marking the Unit 19 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 1 needs the number, gap 5 needs the general reason.'],
    ['**C Writing**', '7', '⚠ **the undisputed item accepted in the first line, in full, with its figure** (3) · a choice of how it is settled (1) · the second item named as yours (1) · ⚠ **a refusal to invent a figure, with the reason** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The three marks for the first line are the unit.** A reply whose first sentence contains a *however*, a *whilst*, an *in the circumstances* or any reference to the other items scores 0 of those 3, however complete the rest — ⚠ **because the whole of 19.6 is that the order decides which letter the claimant thinks they have received, and the content is identical either way.**',
  '⚠ **The two marks for refusing to invent a figure need the reason.** *There is no invoice* alone earns one; ⚠ ***because any figure I invented would be an insult to a loss I cannot measure*** earns both. **The reason is what stops the refusal reading as a refusal.**',
  '⚠ **Deduct for *goodwill* attached to an undisputed item.** An item that is plainly owed and is accepted *as a gesture of goodwill* is a refusal with a present on top of it, ⚠ **and every claimant hears it** — which is why the sample says *in full* and says nothing else.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 19**'));
out.push(p('**1 The class will want to be firmer than every document in this unit.** The letters here count before they claim, ask one narrow question, concede the possibility of their own error, refuse to invent figures and leave doors open — ⚠ **and a learner will read all of that as weakness until it is demonstrated.** The demonstration is 19.4: ⚠ **four reasonable asks produced one roller and left three asks spent.** Do that one first if the class is sceptical, and the rest of the unit becomes easy to teach.'));
out.push(p('**2 The order of the accept-and-limit letter, which is invisible to its writer.** A writer knows what their letter says and therefore cannot hear it. ⚠ **The only remedy is role card 2 of 19.6, done aloud, by the same person, in both orders** — five sentences each way, about ninety seconds. ⚠ **Expect the class to defend *however* as politeness**: it is the word that converts an acceptance into a concession, and nothing else in the letter can undo it.'));
out.push(p('**3 Treating 19.7 as a sentimental ending.** It looks like a lesson about being nice to colleagues and it is a structural finding about distribution lists: ⚠ **a document about somebody goes to the person who decides and not to the person it is about.** If a lesson has to be cut, **cut 19.5 and keep 19.7** — the cleft can be taught in fifteen minutes inside 19.4, and the question *who is a claimant and cannot bill?* cannot be taught except by being asked. ⚠ **And insist on the restraint**: two of the three uncompensated losers in this claim are owed **nothing**, and a class that writes to all of them has learned generosity instead of judgement.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 19 · Answer Key');
