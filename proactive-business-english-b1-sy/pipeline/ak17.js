// Proactive Business English B1 · Syria Edition · Book 2 · Unit 17 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 17  The Way It Used to Be Done'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit has a real change in it and the change happens inside the book.** From 1 March the Ghouta run moves from Tuesdays and Thursdays to Mondays and Wednesdays — ⚠ **and when anybody asks why it was Tuesdays and Thursdays, nobody can answer.** The best account is a customer who left in 2019, which means two days of every week have been arranged for six years around somebody who is not there.',
  '⚠ **The grammar and the document are inseparable here.** *Used to · would · be used to · it used to be done* exist in this unit to make one page possible: ⚠ **a change note with an effective date, the old reason, and the line nobody writes — what is withdrawn.**',
  '⚠ **And the unit deliberately reverses a rule from Unit 15.** There, the passive was a fault: *the code should have been checked* owned nothing. ⚠ **Here the passive is the point**, because a change note asks nobody to do anything, so a name in it is only an accusation with a date. **The question that decides is in 17.5 and it is one line: *is anybody supposed to do something as a result?***',
], C.grey, C.navy));

// ===================== 17.1 =====================
out.push(h2('17.1  We used to sign at the gate'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Say when each changed, if you know* — and expect *if you know* to do the work: most learners cannot date any of their three.'));
out.push(p('**b**  *We used to sign at the gate* (past, ended) and *we are used to signing at the gate* (accustomed, now) are both possible and mean different things. ⚠ ***We use to sign* is impossible — there is no present form.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The sheet used to be signed at the gate without counting first** — a record that a load had gone, not that it had been counted.  2 Because no note was written at the time: *during the Baghdad Street opening, some time in the summer.* ⚠ **And both kinds of sheet are physically identical.**'));
out.push(note('⚠ Mr Attar\'s complaint is precise and should be read carefully: ⚠ **he is not criticising the current procedure, which he can see and has tested.** What he cannot do is **audit the three months before it**, because nothing on the paper says which practice a sheet was signed under. ⚠ *A change with no date is not a change; it is a gradual difference in what people do.*'));
out.push(p('**Language box – Practise (samples):**  1 *the gate sheet used to be a record of despatch — from 8 June it records a count.*  2 *the Ghouta run used to be Tuesdays and Thursdays — from 1 March, Mondays and Wednesdays.*  3 *Mr Habib used to open the shutter at seven; nobody does now.*  4 *a price used to be held until the customer came back; from (date unknown) it is fourteen days.*  5 *the stencil press used to be hand-fed; it was replaced in 2019.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'A price is held fourteen days, in writing, with the date on it. When did that start?'],
  ['A', 'It is procedure. It is in the file.'],
  ['B', 'And before that?'],
  ['A', 'Before that a price used to be held until the customer came back, which in practice meant for ever.'],
  ['B', 'When did it change?'],
  ['A', '…After a customer came back with a two-year-old quotation. I cannot give you a date.'],
  ['B', '⚠ Then nobody can tell whether an undated quotation in circulation is live or dead — **and there are undated quotations in circulation.**'],
]));
out.push(note('⚠ Role card 2 is the sharper of the two because the undated change has left **live documents** behind it: quotations with no date on them, held under a rule that no longer exists. ⚠ **An undated procedural change is a nuisance; an undated change that leaves undated documents in customers\' hands is a liability**, and the class should be asked which of their own changes is of the second kind.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the old practice, the new one and the date, or *not known*. **Typical errors:** _we use to sign_ · _we didn\'t used to count_ (⚠ **the *d* goes when *did* arrives**) · _did you used to_ · and the content error, which is giving a year because a blank looks careless. ⚠ **A guessed date is worse than *not known*, because somebody will rely on it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['It used to be…', 'It is now…', 'The date of the turn', 'Written down anywhere?'], [
  ['the gate sheet recorded despatch', 'it records a count, signed by name', '⚠ **not known — "during the opening"**', '⚠ **no**'],
  ['a price was held until the customer returned', 'fourteen days, in writing, dated', 'not known', 'the new rule only'],
  ['the old consignee code', 'the new code', '**14 November**', '⚠ **yes — Hala\'s note**'],
  ['the Ghouta run on Tuesdays and Thursdays', 'Mondays and Wednesdays', '⚠ **1 March**', '⚠ **nowhere yet**'],
  ['the counter opened at 07.00', 'still 07.00', '—', '⚠ **the reason is long dead**'],
], [1.8, 1.8, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We used to sign the gate sheet at the gate as a record of despatch. Now it records a count, signed by the person who counted. It changed during the Baghdad Street opening, and it is not written down anywhere."', '⚠ **Count how many turns have a date, then count how many are written down at all.** ⚠ The second number is usually smaller — **people remember dates they have never recorded, and they stop remembering at about the three-year mark.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Not the procedure — the date the procedure started, and what it had been before.**  2 ⚠ **The consignee code, 14 November, Hala\'s note** — and the conclusion is that ⚠ **a date is not a control, it is a record**: the date did not stop the nine cartons; it is what let the error be found in four minutes instead of a day.  3 ⚠ **Because it is in the future** — the Ghouta run moves on 1 March and the note does not exist yet, **so the company is about to make a fourth undated change in a table of undated changes.**'));
out.push(note('⚠ The *date is a record and not a control* distinction is the one to insist on, because learners over-claim in the other direction and a reader punishes it. ⚠ **The honest claim is narrow and still worth a great deal**: *four minutes instead of a day*, on a change that went wrong anyway.'));
out.push(stage('6', 'Write with help – sample (112 words)'));
out.push(sample(null, [
  '**WHAT CANNOT BE READ — THE WORKSHOP\'S JOB CARDS. 24 February. B. Nassif.**',
  '**What was actually asked for.** ⚠ A customer asked for a copy of the job card for a gate we cut in 2022, and whether it had been cut from revision 2 or revision 3 of his drawing.',
  'the job card | used to have no drawing revision box | ⚠ **is now printed with one** | ⚠ **not known — "when the new pads came"** | ⚠ **no**',
  'the quotation | used to be undated | is dated and held fourteen days | not known | the new rule only',
  'the drawing register | ⚠ **did not exist** | ⚠ **exists from 1 January** | ⚠ **1 January** | ⚠ **yes**',
  '⚠ **What the undated ones cost.** Nothing until last Tuesday, and that has been true for three years. ⚠ **Last Tuesday it cost us the answer to a direct question from a customer** — we cut his gate from one of two drawings and we cannot say which.',
  '**And the change that has not happened yet.** ⚠ **The old job-card pads are still in the drawer and still being used**, so I am writing the note this week rather than discovering the same thing in 2028.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*The date* and *written down?* as separate columns', '✓'],
  ['*Not known* where it is not known', '✓ twice'],
  ['The cost of the undated ones, and when it falls', '✓ last Tuesday, after three years'],
  ['A change that has not happened yet', '✓ the old pads'],
], [5, 1]));
out.push(note('⚠ The sample is better than the model in one respect and it is worth saying so: ⚠ **its cost has actually fallen.** *Nothing until last Tuesday, and that has been true for three years* — **a page where the cost has already arrived is far more persuasive than one where it is hypothetical**, and most learners have such a case if they are asked for it.'));
out.push(stage('6R', 'Share'));
out.push(p('The *date* column alone, and count the blanks. ⚠ **Then ask the class whether any of the blanks could still be filled by somebody in the building** — and in about half the cases they can, because somebody remembers the week.'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  'Our delivery notes used to be numbered in one series and are now numbered in two, one for each site, and nobody wrote the change down.',
  'The old series ran to about 14,000. When Baghdad Street opened, somebody — probably me — started the second site at 1. So there are two notes numbered 1,200: one from about 2016 and one from last autumn.',
  'For three years it mattered to nobody. ⚠ **Then in January Ms Tannous\'s agent asked us to confirm delivery note 1,243 and we sent him the wrong one** — a delivery of plastic wrap to a school in 2016 — and he replied, politely, asking whether we were sure.',
  'We now prefix them M and B, from 1 January, and that change **is** written down.',
  '⚠ **What the undated one cost was not the wrong note; it was the sentence *are you sure?* from a customer in another country in our first month of trading with her.**',
  '⚠ **And the repair took one morning and a rubber stamp**, which is what it would have taken in 2016.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the agent in Beirut, holding two notes numbered 1,243"   ✓ _is *used to* used for every ended practice?_ — yes   ? _who had to read the old document?_ — "a new customer, in her first month"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the undated change cost nothing until years later, in all three texts, ⚠ **and in all three the cost fell on somebody who had not been there.** ⚠ The sample sharpens it: **the cost was not the error but the question *are you sure?*** — and that cost cannot be itemised, which is why it never appears in anybody\'s calculation.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['My eighteen-word line: ⚠ ***From 1 January delivery notes are prefixed M (Mezzeh) or B (Baghdad Street); before that both sites used one unprefixed series.*** Twenty-one words, an effective date, and the old practice named. ⚠ **It is now the first page of the delivery-note file**, and it means a note from 2016 can be told from one from last autumn.']));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  He would open the shutter at seven'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect at least one learner to produce a state with *would* — *he would be very strict* — and correct it immediately, because the error is the subject of the language box.'));
out.push(p('**b**  *He would open the shutter at seven* is right. ⚠ ***He would be the manager*** is wrong (a state → *he was* / *he used to be*). ⚠ ***We would have two vans*** is wrong (possession → *we used to have*).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because Mr Habib would open at seven for ⚠ **the bakery delivery at 7.15 — and the bakery closed in about 2008.**  2 ⚠ **A habit in a document outlives a habit in a person**: the sweeping and the tea stopped the week he left; the shutter time is in the rota, *so it outlived the reason, the man, and the bakery.*'));
out.push(note('⚠ Abu Yasser\'s answer to the obvious objection is the most important thing in the cycle. ⚠ *That sounds like an argument for not writing things down* — and it is not: ⚠ **it is an argument for writing the reason down next to the thing.** *A rule with its reason attached can die when the reason does. A rule on its own cannot die at all.*'));
out.push(p('**Language box – Practise (samples):** four *would* sentences about a predecessor, then checked: *he would open at seven · he would sweep the pavement · he would make tea for the first customer · he would rule the stock card in red on a Friday.* ⚠ And the two that must change: *he **was** the senior man* and *we **used to have** two vans.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Why do we make two carbon copies of every order? Nobody takes the second one.'],
  ['B', 'The Thursday bookkeeper. He would come in on a Thursday and take the second copies for the week.'],
  ['A', 'And where is he?'],
  ['B', 'He retired in 2016.'],
  ['A', '⚠ So for nine years we have made about forty second copies a week for nobody.'],
  ['B', 'About nineteen thousand sheets. They are in a box in the store and the box has not been opened.'],
  ['A', '⚠ And it is in a document rather than in a person, which is why it survived him.'],
]));
out.push(note('⚠ Role card 2 gives the arithmetic that makes the cycle land: **forty a week for nine years is about nineteen thousand sheets into a box nobody opens.** ⚠ Insist on the multiplication — *a habit with a dead reason costs its weekly figure times the years*, and nobody ever does that sum until somebody asks for it.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the habit, the reason, the year it ended and the years since. **Typical errors:** _he would be the manager_ · _we would have two vans_ · _he would used to open_ · and the content error, which is failing to say whether the habit lives in a document or in a person. ⚠ **That column is the finding**, because it predicts which habits will survive the next person leaving.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The habit', 'Whose it was', 'The original reason', 'When the reason ended', 'Document or person?'], [
  ['the counter opens at 07.00', 'Mr Habib, 1998–2014', 'the bakery delivery at 7.15', '⚠ **about 2008**', '⚠ **document — the rota**'],
  ['two carbon copies', 'the Thursday bookkeeper', 'his second copy', '**2016**', '⚠ **document — the pad**'],
  ['the stock card ruled in red on Fridays', 'Mr Habib', 'a weekly figure for a bank facility', '2017', 'document'],
  ['sweeping the pavement at seven', 'Mr Habib', 'the shop front', '⚠ **it did not end**', '⚠ **person — stopped the week he left**'],
], [1.4, 1, 1.6, 1.2, 1.3]));
out.push(note('⚠ Row four is the control row and it inverts the pattern: ⚠ **the pavement reason never ended and the habit did**, because it lived in a man. **The two columns together make the real finding visible: survival depends on where the habit lives and not on whether the reason is still good.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We open the trade counter at seven because Mr Habib would open the shutter at seven for the bakery delivery at a quarter past. The bakery closed in about 2008, so we have done it for seventeen years for nothing. It lives in the rota."', '⚠ **Count the habits that live in a document, then the ones that live in a person**, and ask which kind the room has more of and which survived longer. ⚠ **The document ones always win**, and that is the argument for 17.2\'s rule rather than a reason to despair of it.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The swept yard — nobody knows why.** It is a different case: *a habit nobody can explain is either a good reason nobody has written down or a dead one*, and the honest recommendation is **find out**, not **stop**.  2 Because its reason died in 2017 and ⚠ **it is now the only weekly stock figure anybody produces** — the practice turned out to be useful for something else, **so the change note is a re-justification and not a cancellation.**  3 ⚠ **Stop the carbon copies · move the counter opening to 08.00 and tell the four early customers · keep the red rule and write down why · ask three people about the yard.**'));
out.push(note('⚠ Four rows and four different actions is the model answer, and a page that recommends one action for four rows has not looked at four rows. ⚠ **Note also who wrote it: Lina, in her seventh week** — the page exists because somebody asked *why* about four things everybody else had stopped seeing, which is 17.3 arriving one cycle early.'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**FOUR THINGS WE DO FOR REASONS THAT HAVE ENDED. 25 February. H. Mourad.**',
  'the till is balanced twice — at 14.00 and at close | Mr Habib | the afternoon bank run, which left at 14.30 | ⚠ **the bank stopped collecting in 2015** | ⚠ **10**',
  'the counter price list is typed afresh every Monday | ⚠ **nobody knows** | ⚠ **nobody knows** | — | —',
  'the order pad is kept in triplicate | the Thursday bookkeeper | his copy | 2016 | 9',
  'the shutter is locked from inside at 13.00 for an hour | Mr Habib | he went to the mosque and worked alone | ⚠ **we have been two on the counter since 2019** | ⚠ **6**',
  '⚠ **The one with no known reason.** The Monday retyping. I am not proposing to stop it; ⚠ **I am proposing that somebody find out, because it takes about forty minutes and nobody can say what it is for.**',
  '⚠ **The one that should survive its reason.** The 14.00 balance was for a bank run that ended in 2015, ⚠ **and it is now the only thing that catches a till error on the same day it happens** — so the note is *the 14.00 balance is retained as a same-day check, since 2015*, and not *stop it.*',
  '**What I am recommending.** ⚠ Stop the triplicate. ⚠ Keep the 14.00 balance and write down why. ⚠ Ask about the Monday retyping. ⚠ Open the shutter at 13.00 and keep two on the counter.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *years since* column, as a number', '✓'],
  ['A row with no known reason, kept and not cancelled', '✓ the Monday retyping'],
  ['A row that should survive its reason, re-justified', '✓ the 14.00 balance'],
  ['A separate recommendation for every row', '✓ four rows, four actions'],
  ['A quantity somewhere', '✓ forty minutes a week'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *years since* column alone. ⚠ **Ask which number the class finds hardest to believe** — and then ask the person who wrote it whether they had ever done the arithmetic. **They will not have.**'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'The man before me at the yard was called Mr Khoury and he was there from 1996 until 2018.',
  'He would walk the whole yard at five to eight, every morning, before anybody loaded anything. He would write four figures on a scrap of paper and put it in his shirt pocket. He would count the pallets by the north door twice. And he would refuse to let a van leave after four o\'clock, whatever was on it.',
  'Of those four, one survived. ⚠ **No van leaves after four.** It is in the rota and the drivers know it and nobody can tell you why.',
  'The reason was that after four there was no telephone at the far end, so a driver who broke down could not be reached. ⚠ **There have been telephones in every village on that route since about 2012.**',
  'The walk, the scrap of paper and the double count all stopped within a fortnight of his leaving, ⚠ **because they were in him and the four o\'clock rule was in the rota** — and the rule that survived is the only one of the four that is now wrong.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "a driver refused at ten past four"   ✓ _is *would* used only for repeated actions?_ — yes   ? _which habits survived?_ — "the one in the rota, and it is the one that is now wrong"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the surviving habits were the ones written in a document, in all three texts, ⚠ **and the ones in the person stopped within a week or two.** ⚠ The sample adds the sting: **the habit that survived is the only one of the four that is now wrong** — because the three in the man were judgement, and judgement does not outlive its owner.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The instruction: *no van leaves after 16.00.* ⚠ The reason, now written next to it: **because until about 2012 there was no telephone beyond the second village, so a driver who broke down could not be reached.** ⚠ **It took one line and one question to Mr Khoury\'s successor** — and anybody reading it now can see that the reason has ended.']));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  I am used to being the one they telephone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The *not used to* half is the useful half and learners give it last; ask for it first.'));
out.push(p('**b**  *I used to work at two sites* — and I do not now. ⚠ *I am used to working at two sites* — and I do, and it no longer troubles me. **One word apart, opposite facts.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The generator going off at four** — she no longer plans round it, she works until it goes and stops — ⚠ **and the Ghouta run being Tuesdays and Thursdays, which she has never asked about.**  2 ⚠ **The kind where it could be otherwise**: being used to the generator is harmless because nobody can change it; **being used to the Ghouta days is not, because somebody could change them and nobody has asked.**'));
out.push(note('⚠ Lina\'s test is the whole cycle and it is four words: ⚠ **could it be otherwise?** If it could not, being used to it is **competence** — the generator runs from one until four and that is a fact. ⚠ **If it could, being used to it is the reason it has not been.** Teach the test and the grammar will follow it.'));
out.push(p('**Language box – Practise (samples):** four things, then the test. *The generator from one until four* — could not be otherwise: competence. ⚠ *The counter at seven · two carbon copies · the gate sheet signed weekly* — could all be otherwise: **questions nobody has asked.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Six things. The generator hours.'],
  ['A', 'Could not be otherwise. Competence.'],
  ['B', 'The counter opening at seven.'],
  ['A', '⚠ Could be. Nobody has asked since about 2008.'],
  ['B', 'Two carbon copies. The gate sheet signed weekly. The Ghouta days. The price list dated on the front sheet only.'],
  ['A', '⚠ All four could be otherwise. ⚠ **So five of the six are questions nobody has asked, and one is a fact.**'],
  ['B', 'And who could change the five?'],
  ['A', '⚠ **Me, for three of them.**'],
]));
out.push(note('⚠ Role card 2 produces the count and the count is the point: **five of six could be otherwise, and most of them belong to the person doing the sorting.** ⚠ A class that ends this stage with a list of things *management* should change has done the exercise backwards — **ask for the *who could change it* column before accepting any row.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two lists the test produces. **Typical errors:** _I am used to work here_ · _I used to working here_ · _I am used to be asked_ (⚠ **the -ing is compulsory after *used to* as a preposition**) · and the content error, which is sorting a thing into *competence* because changing it would be difficult. ⚠ **Difficult is not the same as impossible, and the test is *could it*, not *would anybody*.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['I am used to…', 'Could it be otherwise?', 'Competence, or a question nobody has asked?', 'Who could change it'], [
  ['the generator from one until four', '⚠ **no**', 'competence', '—'],
  ['the counter opening at 07.00', 'yes', '⚠ **a question nobody has asked**', '⚠ **me**'],
  ['two carbon copies of every order', 'yes', '⚠ **a question nobody has asked**', '⚠ **me**'],
  ['the gate sheet signed for a week at a time', 'yes', '⚠ **a question nobody has asked**', 'me, with Abu Yasser'],
  ['three key sets on one board by the door', 'yes', '⚠ **a question nobody has asked**', 'Mr Ayoub'],
  ['being telephoned by name', 'no — it is the job', 'competence', '—'],
], [1.8, 1.2, 1.9, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am used to the counter opening at seven. It could be otherwise, so it is a question nobody has asked. The person who could change it is me."', '⚠ **Count how many things in the room could be otherwise, then ask how many the speaker could change themselves.** ⚠ It is usually more than half — **and that is the uncomfortable part, because it removes the explanation that somebody else is responsible.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **By asking the newest person, in her seventh week, to write down everything she was not used to — eleven items in about four minutes.**  2 ⚠ **Four of the five.** Not Mr Ayoub\'s and not the company\'s: *the counter hours, the carbon copies, the gate sheet and asking about the keys are all within what I do.*  3 Because ⚠ **being used to something is the same thing as not seeing it**, there is exactly one person in any building who is not yet used to it, ⚠ **and she stops being that person at about the twelfth week.**'));
out.push(note('⚠ The twelfth-week deadline is the most actionable sentence in Unit 17 and it generalises past this book: ⚠ **the asking has to be done early or not at all**, and the right time is between about week four and week ten. **After that the new person has become a member of staff and the list closes.**'));
out.push(stage('6', 'Write with help – sample (115 words)'));
out.push(sample(null, [
  '**WHAT THE NEWEST PERSON IS NOT USED TO — AND THE TEST. 26 February. B. Nassif, from the apprentice\'s list.**',
  '**How this page was made.** ⚠ I asked the apprentice, in his fifth week, to write down everything he was not used to. **He gave me nine things in about three minutes**, and two of them I did not understand until he explained.',
  'the plasma table being started an hour before use | ⚠ **no — it needs to warm** | a fact about the place | —',
  'the drawings kept in a folder with no index | ⚠ **yes** | ⚠ **a question nobody has asked** | ⚠ **me**',
  'the offcuts stacked against the door | ⚠ **yes** | ⚠ **a question nobody has asked** | ⚠ **me**',
  'nobody wearing gloves for the galvanised sheet | ⚠ **yes** | ⚠ **a question nobody has asked** | ⚠ **me**',
  '⚠ **Two of the nine are facts and four are questions nobody has asked.** The other three he will get used to: the noise, the Thursday rush, and the fact that the plater telephones at seven in the morning.',
  '⚠ **And all four are mine.** ⚠ **The gloves one is the one I am ashamed of**, because I have handled galvanised sheet for nine years and my hands are the evidence, and a boy in his fifth week asked why nobody wears gloves.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How the page was made, and how long it took', '✓ three minutes'],
  ['The test applied to every row', '✓'],
  ['A *who could change it* column', '✓'],
  ['How many are the writer\'s own', '✓ all four'],
  ['The deadline — when they stop being able to see it', '✗ — not stated'],
], [5, 1]));
out.push(note('⚠ The sample misses the deadline line and the checklist says so, which is the right handling. ⚠ But it earns something the model does not have: **a row the writer is ashamed of.** *A boy in his fifth week asked why nobody wears gloves.* **The strongest item on any such page is the one the writer would rather not print**, and it is usually about safety or about money.'));
out.push(stage('6R', 'Share'));
out.push(p('The items that are the writer\'s own. ⚠ **Ask which could be done this week** — and then ask the class to name one they will do, because this is the stage in Unit 17 where a share should produce an action rather than a discussion.'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'I am used to the fact that nobody at our company knows what anything cost last year.',
  'I have been here four years. In my first month I asked for the figures for the previous year and was given a file of invoices, and I remember thinking that I would put them into a page of totals when I had an afternoon. ⚠ **I had stopped thinking about it by about the fourth month.**',
  'Mr Ayoub could tell you the cost of anything we buy today and nothing we bought in 2022. Nadia has the ledger and the ledger is not a comparison.',
  'Who could change it is me. ⚠ **About two days of work, once, and then about twenty minutes a month.**',
  'Why I have not asked is not that anybody would refuse. ⚠ **It is that after the fourth month I stopped being able to see it as missing** — it became the way the figures are here, like the stairs, and you do not ask for the stairs to be changed.',
  '⚠ **I am writing this down because I can still feel it when I read my own first-month note, and in another year I shall not.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the person who asked for the figures in their first month"   ✓ _is *be used to* used, not *used to*?_ — yes   ? _who could change it?_ — "the writer, with two days of work"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the writer could change it themselves, in two of three texts, ⚠ **and the reason nobody has asked is that nobody has noticed, including the person who could.** ⚠ The sample names the mechanism precisely: **it became the way the figures are here, like the stairs, and you do not ask for the stairs to be changed.**'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['I asked Lina again. ⚠ **Four more, in two minutes.** The test: the generator (fact); the price list dated on the front sheet only (⚠ **could be otherwise — mine**); nobody answering the telephone after four (⚠ **could be otherwise — Mr Ayoub\'s**); the counter keys on the same ring as the store keys (⚠ **could be otherwise — mine, and it is a safety matter**).']));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  I am getting used to it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Is it still getting easier* separates stage 2 from stage 3, and most learners discover they are at stage 3 and had said stage 2 out of modesty.'));
out.push(p('**b**  Stage 1 · stage 2 · stage 3 · ⚠ **stage 4**, which is the one with no standard phrase for it, **and that is part of why nobody notices it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **About nine journeys a week, and almost nothing done at either site.**  2 ⚠ **It is the dangerous one**: at stage 3 you still know the thing costs you something; **at stage 4 you do not, and you stop telling anybody** — *and then next year somebody asks why administration takes so long and nobody says because one person is in two buildings.*'));
out.push(note('⚠ Mr Ayoub\'s qualification matters as much as the warning: ⚠ **stage 4 is not a weakness; it is what being good at something is.** So the repair cannot be vigilance, and it is not: ⚠ **write the cost down while you can still feel it** — two sentences, dated, read again in a year.'));
out.push(p('**Language box – Practise (samples):** *Two sites: month one, nine journeys a week; now, two.* ⚠ **The two sentences:** *What it costs: about an hour and a half a week in a van, and three standing jobs not done since June.* *What would have to be true: somebody covers Baghdad Street on a Tuesday morning, or the three jobs are given to somebody by name with a date.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'The two price lists. Is that all right?'],
  ['A', 'It is fine. We manage.'],
  ['B', '⚠ How many times a week does somebody look at the wrong one?'],
  ['A', '…Once or twice.'],
  ['B', 'And how long does it take to find out?'],
  ['A', 'Until the customer queries the invoice, usually. ⚠ **So about four days.**'],
  ['B', '⚠ So twice a week somebody quotes a wrong price and we find out four days later, and you have just told me it is fine.'],
  ['A', '⚠ **It is fine in the sense that I have stopped noticing it. Those are not the same thing, and I did not hear myself say it.**'],
]));
out.push(note('⚠ Role card 2 is the demonstration of stage 4 and it works every time: ⚠ **the figure shocks the person who gave it.** *It is fine* is a true report of the speaker\'s feelings and a false report of the facts, and the only instrument that separates them is a question with a number in the answer. **Ask *how many times a week?* about anything anybody calls fine.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two figures and the two sentences. **Typical errors:** _I am getting used to work two sites_ · _I get used to it_ (⚠ a habit, not a transition) · _I am getting used with it_ · and the content error, which is reporting progress in adjectives. ⚠ ***Much better* is not a report**; *nine journeys a week, then two* is, and it is the only form in which stage 2 can be checked.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'First month', 'Now', 'Stage', 'What it still costs'], [
  ['two sites', '9 journeys a week', '2 a week', '**2**', '1.5 hours in a van; three standing jobs undone'],
  ['the export paperwork', 'four hours a consignment', 'about ninety minutes', '2', 'the rest of a Tuesday afternoon'],
  ['two price lists', 'noticed every day', '⚠ **"it is fine"**', '⚠ **4**', '⚠ **two wrong quotations a week, found four days later**'],
  ['the generator hours', 'planned round it', 'work until it goes', '⚠ **4**', '⚠ **nothing — it could not be otherwise**'],
], [1.4, 1.2, 1.2, 0.8, 1.8]));
out.push(note('⚠ The last two rows are both stage 4 and only one of them is a problem, which is 17.3\'s test arriving inside 17.4: ⚠ **not noticing a thing that could not be otherwise is competence; not noticing a thing that could be is a cost nobody is counting.** **Both columns are needed to tell them apart.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am getting used to two sites. The first month, nine journeys a week; now, two. It still costs about an hour and a half in a van and three standing jobs that have not been done since June, and what would have to be true is that the three jobs are given to somebody by name with a date."', '⚠ **Count how many people are at stage 4 on something, then ask for the figure in each case.** ⚠ **Watch the figure surprise the person who gave it** — that reaction is the evidence that stage 4 is real and is not a metaphor.']));
out.push(stage('5', 'Read'));
out.push(p('1 Improved: ⚠ **journeys (9 to 2), hours in the van (6 to 1.5), and things started and not finished (most days to about one a week).** Not moved: ⚠ **what is still not done at all — the fourth-store stocktake, the file index and the key list, the same three since June.**  2 ⚠ **Either somebody covers Baghdad Street on a Tuesday morning, or the three standing jobs are given to somebody by name with a date** — and the second is asked for, because it is **cheaper and available now.**  3 Because ⚠ **by month fourteen she will not notice the van or the three jobs, and the note will be the only evidence that any of it ever cost anything.**'));
out.push(note('⚠ The fourth row is the finding and it is the one every learner\'s page will reproduce: ⚠ **getting used to a job is not the same as the job getting done.** The part you do gets easier and is reported as progress; ⚠ **the part nobody notices becomes the part nobody does**, and it is invisible in every row above it.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**THE EXPORT PAPERWORK, MONTH TWO — WRITTEN WHILE I CAN STILL FEEL IT. 27 February. L. Barakat. ⚠ To be read again in February next year.**',
  'time to prepare one consignment\'s papers | **about four hours** | **about ninety minutes**',
  'things I have to ask about | about twelve a consignment | about three',
  'mistakes found by somebody else | ⚠ **two in the first consignment** | none since',
  '⚠ **what is still not done at all** | ⚠ **the file of previous consignments, so that I could copy** | ⚠ **the same — I still start from a blank form**',
  '⚠ **What getting used to it looks like.** Four hours to ninety minutes, twelve questions to three, and no mistakes since the first one.',
  '⚠ **The row that has not moved.** There is no file of previous consignments. I prepare each one from a blank form and from memory, ⚠ **and the ninety minutes is mostly me remembering what I did last time.**',
  '⚠ **What it costs, in one sentence.** About an hour a consignment, and everything I know is in my head and nowhere else.',
  '⚠ **What would have to be true.** Either a file of the last four consignments in a folder, ⚠ **or a one-page sheet of what goes where** — and the sheet is better, takes me about an hour, and I am asking to be allowed the hour.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *month one* against *now* table with figures', '✓'],
  ['A *still not done at all* row', '✓'],
  ['The cost in one sentence', '✓ and it names the real risk'],
  ['Two remedies, and which one you ask for', '✓ the sheet, and the hour asked for'],
  ['A date for re-reading, in the heading', '✓'],
], [5, 1]));
out.push(note('⚠ The sample\'s cost sentence contains something the model\'s does not: ⚠ **everything I know is in my head and nowhere else.** **A stage-2 note written by the newest person is the best record a company will ever get of how a job is actually done**, and it exists for about four months.'));
out.push(stage('6R', 'Share'));
out.push(p('The *still not done at all* rows. ⚠ **Ask how long each item has been on it** — and the answers cluster around *since I started*, which tells the class that the row is not about capacity but about the fact that nobody owns it.'));
out.push(stage('7', 'Write freely – sample (169 words)'));
out.push(sample(null, [
  'Everybody at our company has got used to the fact that the office telephone is not answered after four.',
  'At the beginning it was a decision. Nadia finishes at four and nobody was asked to stay, and for the first few weeks people said *we must do something about the telephone* about once a day.',
  'Nobody says it now. If you ask, you are told that customers know, which is true of the regular ones.',
  '⚠ **The figure is eleven missed calls a week**, which I know because the handset keeps a count and nobody had ever looked at it. Four of the eleven are from the same three customers; the rest are numbers nobody recognises.',
  '⚠ **And the cost that nobody can count is the seven.** They are not our customers yet, so they are not in anybody\'s ledger, and a person who telephones a trade counter at ten past four and gets no answer telephones somebody else at a quarter past.',
  '⚠ **The last person to say it out loud was Lina, in her third week**, and she was told that customers know.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "one of the seven numbers nobody recognises"   ✓ _is the progress given in figures?_ — "yes — eleven a week, from the handset"   ? _who last said it out loud?_ — "the newest person, and she was corrected"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the cost had stopped being mentioned rather than stopped being paid, in all three texts, ⚠ **and in all three somebody could still give the figure when asked.** ⚠ The sample adds the best detail available: **the count was in the handset the whole time and nobody had looked** — stage 4 is not an absence of data.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The two sentences, dated 27 February and to be read in February next year. ⚠ **What it costs:** about forty minutes a day walking between the counter and the store because the counter stock is not duplicated. ⚠ **What would have to be true:** a small bin of the twelve fastest lines kept under the counter. **It would take an afternoon and nobody has ever proposed it.**']));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  It used to be done at the gate'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Without naming a single person* is harder than it sounds and the struggle is the teaching: learners reach for *we* and *they*, and **the second one is worse than a name.**'));
out.push(p('**b**  _It **used to be signed** at the gate._ · _The picking list **used to be typed** from the order._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It says that Abu Yasser signed sheets without counting** — which is not what the writer means and will be in the file in 2035. The meaning is that ⚠ **the method did not require a count**, which is a fact about a procedure and not about a man who followed it correctly for eleven years.  2 ⚠ **In a post-mortem**, where somebody is supposed to do something as a result and the document therefore needs names.'));
out.push(note('⚠ The decision rule is one question and it should be memorised: ⚠ **is anybody supposed to do something as a result?** ⚠ A post-mortem asks somebody to change something, **so it needs names — that was Unit 15.** ⚠ A change note asks nobody to do anything, **so a name in it is only an accusation with a date.**'));
out.push(p('**Language box – Practise (samples):**  1 *the sheet used to be signed at the gate.*  2 *the list used to be typed from the order.*  3 *quotations used not to be dated.* (or *were not required to be dated*)  4 *two copies used to be kept.*  5 *the counter used to be opened at seven.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your change note says *the quotations used to be left undated, which caused the Tarabishi dispute.*'],
  ['A', 'Both halves are true.'],
  ['B', 'They are, and they belong in two documents. ⚠ Is anybody supposed to do something because of the first half?'],
  ['A', 'No. It is so that an old quotation can be read.'],
  ['B', 'And because of the second half?'],
  ['A', 'Yes — somebody has to decide what we do about undated quotations still in circulation.'],
  ['B', '⚠ **Then the first half is the change note and the second half is a post-mortem with a name and a date on it** — and the dispute does not belong in a document that strangers will read for twenty years.'],
]));
out.push(note('⚠ Role card 2 is the one to use for the whole class, because the error it contains is the commonest one: ⚠ **a change note with a grievance in the second half of a sentence.** The split is mechanical once the question is asked, and the result is two shorter documents that each do one job.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both versions and say which document each belongs in. **Typical errors:** _the sheet used to signed_ (⚠ the *be* is dropped) · _it was used to be done_ · _the sheet was used to sign_ · and the content error, which is using *they* instead of a name and believing it is impersonal. ⚠ ***They* in a company of nine people is a name**, and everybody who reads it will supply it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The active version', 'The impersonal version', 'Anybody in it?', 'Belongs in…'], [
  ['we used to sign the sheet without counting', 'the sheet used to be signed at the gate; the load was not required to be counted', '**no**', 'the change note'],
  ['nobody dated the quotations', 'quotations were not required to be dated', '**no**', 'the change note'],
  ['Hala sent a note nobody acted on', '⚠ **keep the name**', '⚠ **yes, deliberately**', '⚠ **the post-mortem**'],
  ['Abu Yasser signs the whole week at once', '⚠ **keep the name**', '⚠ **yes, deliberately**', '⚠ **the post-mortem**'],
  ['we used to keep two copies for the bookkeeper', 'two copies used to be kept for the Thursday bookkeeper', 'no', 'the change note'],
], [1.8, 2.2, 0.9, 1.1]));
out.push(note('⚠ Rows three and four keep their names on purpose and the table is built that way: ⚠ **the exercise is not *remove all names*, it is *put the names where they are owed.*** A class that makes everything impersonal has learned a style instead of a rule, and in Unit 15 that style was the fault.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Actively it is *we used to sign the sheet without counting*. Impersonally it is *the sheet used to be signed at the gate; the load was not required to be counted against the order*. There is nobody in it, so it belongs in the change note."', '⚠ **Count the sentences that named somebody in a change note, then ask what each would look like to a stranger reading the file in ten years.** ⚠ **The stranger has no way of knowing that the person was following the method correctly**, and the document is all they will have.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the change happened during the Baghdad Street opening and no note was written at the time; ⚠ **the note records it late and says so**, so that a reader knows which practice applied and **that the boundary is not exact.**  2 ⚠ **Sheets in the first week of June cannot be told apart, and there are about nine of them.**  3 ⚠ **Not to change anything** — the practice changed nine months ago — ⚠ **but so that a sheet from 2024 can be read in 2035**, and the reader will be **a stranger.**'));
out.push(note('⚠ The *not specified by the method* cell is the finest thing on this page. ⚠ **The old method did not require a name**, which is a fact about a procedure; and the parallel rows let a reader see the change rather than read about it. ⚠ **Teach the four rows as a template: what it was · when it was signed · who signed it · what happened to a difference.**'));
out.push(stage('6', 'Write with help – sample (127 words)'));
out.push(sample(null, [
  '**CHANGE NOTE 3 — THE JOB CARD. Issued 27 February. Effective 1 January (retrospective record). Revision 1.**',
  '⚠ **Why this note is dated two months after the change.** New pads were printed for 1 January and nothing was written; ⚠ **this note records the change late so that a card from 2022 can be told from one from this year, and so that the boundary is known to be rough.**',
  'what the card recorded | the job, the customer and the quantity | **the same, plus the drawing revision**',
  'the drawing | ⚠ **not recorded by the method** | ⚠ **recorded by number and revision**',
  'who completed it | not specified by the method | the fabricator who cut the job',
  'what happened to a re-cut | not provided for | recorded on the same card, with the reason',
  '⚠ **Is there anybody in this note?** No. ⚠ **The old method did not record a drawing revision, and nobody is being told that they failed to record one.**',
  '⚠ **The boundary.** Cards before 1 January are under the old method. ⚠ **Pads from the old box were still in the drawer and were used until about the 20th of January, so cards from the first three weeks could be either** — there are about fourteen of them and they are marked in pencil on the back.',
  '**What this note is for.** ⚠ Not to change anything. **So that a customer asking in 2030 which revision his gate was cut from can be answered, or told honestly that it cannot be.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An effective date and a revision number in the heading', '✓'],
  ['Why it is late, if it is', '✓'],
  ['Parallel rows, impersonal throughout', '✓'],
  ['*Not specified by the method* where true', '✓ twice'],
  ['The boundary, including its fuzziness', '✓ about fourteen cards, marked in pencil'],
  ['What the note is for, and who will read it', '✓ a customer in 2030'],
], [5, 1]));
out.push(note('⚠ The sample does something the model does not and it is worth copying: ⚠ **it marks the ambiguous documents physically** — *about fourteen of them and they are marked in pencil on the back.* **A stated boundary tells a reader there is doubt; a mark on the document tells them which ones.**'));
out.push(stage('6R', 'Share'));
out.push(p('The boundary paragraph alone. ⚠ **Ask how many documents fall in the uncertain part** — and then ask whether they could be marked, which is usually an afternoon and almost never done.'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'Deliveries used to be accepted on the customer\'s word.',
  'A load would be taken to an address and left, and the delivery note would be signed by whoever was there. ⚠ **The method did not require the signature to be legible, and it did not require a name in capitals beside it.** For about eleven years that was the method and it worked, because the people signing were known.',
  'From some point after the second site opened, a printed name was asked for. ⚠ **The date is not known.** The pads were changed when the old ones ran out, so the two kinds overlap by several weeks.',
  '⚠ **What cannot now be told apart is any note from the second half of that year** where the signature is illegible: it cannot be said whether the printed name was omitted, or whether it was not yet required.',
  '⚠ **There are about thirty such notes**, and one of them is the Tarabishi delivery that was disputed.',
  '⚠ **Nobody would have been blamed for the illegible ones under the old method**, and that is exactly what the file cannot now show.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "somebody reading the Tarabishi file"   ✓ _is there anybody in any sentence?_ — no   ? _what did the old method not require?_ — "a legible signature or a printed name"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually an active sentence blamed somebody for following the method correctly, in two of three texts, ⚠ **and in both the writer had not noticed doing it.** ⚠ The sample\'s last line is the one to read out: **nobody would have been blamed for the illegible ones under the old method, and that is exactly what the file cannot now show.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The sentence in our procedure file: *Abu Yasser used to sign the sheets in a block at the end of the week.* ⚠ Rewritten: ***the gate sheet used not to carry a date column, so a week\'s loads could be signed on one line; the method did not require a signature per load.*** ⚠ **Same facts, no name, and it is now about a form.**']));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  Then, now, and the date the turn happened'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Three sentences will come easily and the fourth and fifth will not come at all, which is the cycle.'));
out.push(p('**b**  Missing from most announcements: ⚠ **what it used to be** and ⚠ **why it used to be that.** Almost all announcements have the new arrangement and most have a date.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The Ghouta bakery gains** — flour comes on Monday and wrap now comes the same day. ⚠ **Mr Jaber\'s yard is shut on Mondays**, so from the 1st he has one delivery day a week instead of two, and nobody has told him.  2 ⚠ **Put it in the note** — *it makes the next change possible*, even though nobody knows the old reason for certain.'));
out.push(note('⚠ Fadi\'s answer to *it makes us look foolish* is the argument of the cycle and it is forward-looking, not penitent: ⚠ **if the note says the old days were set for a customer who left in 2019, then in three years somebody will find a line saying the new days are for the bakery and for Mr Jaber\'s Monday closing** — and **when the bakery closes, somebody will cross it out.**'));
out.push(p('**Language box – Practise (samples):** five lines, done 4 and 5 first: ⚠ *Mr Jaber loses a day; the bakery gains* · ⚠ *the old days were for a customer who left in 2019* — and then *Tuesdays and Thursdays → Mondays and Wednesdays, from 1 March, no parallel run* takes ten seconds.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'From 1 April the trade counter opens at 08.00 instead of 07.00.'],
  ['B', 'That is right and it is not enough. Who comes before nine?'],
  ['A', 'Four customers. ⚠ **And one of them has come at about ten past seven every day for years.**'],
  ['B', 'Does he know?'],
  ['A', 'No.'],
  ['B', '⚠ And why was it seven in the first place?'],
  ['A', '⚠ **For a bakery delivery at a quarter past seven, and the bakery closed in about 2008.**'],
  ['B', '⚠ **Then both of those go in the note** — and somebody telephones the ten-past-seven customer before it is circulated.'],
]));
out.push(note('⚠ Role card 2 produces the hardest line 4 in the unit: ⚠ **one customer who has come at ten past seven every day for years.** He is not a loser in money and he is a loser in habit, and a change note that does not name him will reach him as a locked shutter — **which is the cheapest possible way to lose a seventeen-year customer.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write all five lines. **Typical errors:** a note with no effective date · a note with no line 4 · *from now on* instead of a date (⚠ **which half the readers will date from the day they read it**) · and the content error, which is giving the new reason and not the old one. ⚠ **The old reason is what allows the next change; the new reason is what allows the one after that.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['It used to be', 'It is now', 'From when', 'Who is affected, and how', 'Why it was the old way'], [
  ['Ghouta run Tuesdays and Thursdays', 'Mondays and Wednesdays', '**1 March**', '⚠ **Mr Jaber loses a day (yard shut Mondays); the bakery gains**', '⚠ **a customer who left in 2019**'],
  ['counter opens 07.00', '08.00', '1 April', '⚠ **four customers before nine; one at 07.10 daily for years**', '⚠ **a bakery delivery at 07.15; bakery closed about 2008**'],
  ['two carbon copies', 'one copy', '1 March', 'nobody', '⚠ **the Thursday bookkeeper, retired 2016**'],
], [1.4, 1.4, 0.8, 1.9, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It used to be Tuesdays and Thursdays and from 1 March it is Mondays and Wednesdays, with no parallel run. Mr Jaber is affected: his yard is shut on Mondays, so he has one delivery day instead of two. The old days were set for a customer who left in 2019."', '⚠ **Count the changes whose line 5 is *nobody knows*, then ask how long each arrangement has lasted.** ⚠ **The two numbers together are the finding** — six years for a customer who left, seventeen for a bakery that closed.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The bakery gains** (wrap comes with its flour); ⚠ **Mr Jaber loses a delivery day** — and ⚠ **Fadi is telephoning him today, before the note is circulated, because a customer should not read about it.**  2 ⚠ **Nobody knows for certain** — the best answer is a customer who left in 2019 — and it is in the note because ⚠ **two days of every week have been arranged for six years around somebody who is not there**, and a note that hides that cannot be used to change anything.  3 ⚠ **So that when the bakery\'s Monday changes or Mr Jaber opens on a Monday, somebody can cross it out instead of inheriting it.**'));
out.push(note('⚠ The page ends by pointing at its own file: ⚠ *the shutter has now outlived its bakery by seventeen years.* **One example from inside the building is worth any amount of explanation**, and it is the sentence that gets line 5 written on the next note without an argument.'));
out.push(stage('6', 'Write with help – sample (133 words)'));
out.push(sample(null, [
  '**CHANGE NOTE 4 — THE TRADE COUNTER HOURS. Issued 1 March. Effective 1 April. Revision 1. ⚠ No parallel run.**',
  'opening | **07.00** | **08.00**',
  '⚠ **why** | ⚠ **a bakery two doors away took deliveries at 07.15 and bought wrap; the bakery closed in about 2008** | ⚠ **nobody comes before 08.20 except four customers, and three of them have said 08.00 suits them better**',
  'closing | 17.00 | 17.00',
  'who opens | not specified by the method | the person on the counter rota',
  '⚠ **Who is affected, and what happens to them.** Four customers come before nine. Three have been asked and prefer 08.00. ⚠ **The fourth, Mr Qassab, has come at about ten past seven every working day for about nine years.** ⚠ **He has not been told and he is not being written to: I am going to see him on Thursday morning at ten past seven, which is the only time I know where he is.**',
  '⚠ **Why it used to be 07.00.** For the bakery delivery at 07.15. ⚠ **The bakery closed about 2008, so we have opened an hour early for about seventeen years for a shop that is not there.**',
  '⚠ **Why the new reason is written down.** So that if Mr Qassab\'s habit changes, or three more early customers appear, ⚠ **somebody can change it back with a line rather than a legend.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Effective date, revision number, parallel run or not', '✓'],
  ['*Why* as a row, with both columns filled', '✓'],
  ['The loser named, and telephoned before circulation', '⚠ **✓ — and visited, at ten past seven, which is better**'],
  ['*Nobody knows*, with the best answer and its year', '✓ the bakery, about 2008'],
  ['Why the new reason is written down', '✓'],
], [5, 1]));
out.push(note('⚠ The sample improves on the model in the third row: ⚠ **a visit at the hour the man is known to be there beats a telephone call**, and the reason given is practical rather than sentimental — *it is the only time I know where he is.* **A change that takes something from somebody is worth a journey.**'));
out.push(stage('6R', 'Share'));
out.push(p('The *why* row alone. ⚠ **Count how many old reasons are *nobody knows*** — and then ask how many of the new reasons have been written down anywhere before today, which is almost none.'));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  '**CHANGE NOTE — THE WORKSHOP\'S DRAWING FILE. Issued 28 February. Effective 1 March. Revision 1. ⚠ Parallel run of two weeks.**',
  'where drawings are kept | one folder, newest on top | **a numbered register, one sheet per job, newest at the back**',
  '⚠ **why** | ⚠ **nobody knows; the folder is older than anybody here** | ⚠ **because we cut a gate from a superseded revision in December and could not prove which we had used**',
  'revisions | not recorded by the method | recorded, with the date received',
  'who files | whoever finishes the job | the fabricator who cut it, same day',
  '⚠ **Who is affected.** The two fabricators, who will each spend about two minutes a job on it. ⚠ **And the apprentice, who asked in October why the folder had no index and was told it had always been like that.**',
  '⚠ **Why the old way was the old way.** Nobody knows. ⚠ **The folder predates everybody in the workshop, and the only reason anybody has offered is that it has always been there.**',
  '⚠ **Why the new reason is written down.** So that when somebody proposes a different system in 2030, ⚠ **they can see that this one was built because of one gate in December 2025** — and decide whether that reason still holds.',
  '**Parallel run:** both the folder and the register until 15 March, then the folder is withdrawn.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the apprentice who asked in October"   ✓ _all five lines?_ — "yes, and a parallel run"   ? _who loses?_ — "nobody, but two people pay two minutes a job"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the old reason was unknown in two of three texts, ⚠ **and in those the arrangement had lasted longer than the reason had existed.** ⚠ The sample also records the thing most change notes omit: **the person who asked about it before anybody listened** — *the apprentice, who asked in October and was told it had always been like that.*'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Coming change: the Thursday counter rota. ⚠ **Line 4:** Lina loses her Thursday afternoon off, which she arranged her college class around in January. ⚠ **Line 5:** Thursdays were double-staffed because the Ghouta run used to go out on Thursdays and the counter was short — ⚠ **and the run moves to Monday and Wednesday on 1 March, so the reason has already ended.**']));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: how it used to be done here'));
out.push(stage('1', 'Get ready – Unit 17 quiz'));
out.push(p('**1** Because it is ⚠ **a gradual difference in what people do** — for the months in the middle, half the documents mean one thing and half mean another and nothing on the paper says which.  **2** ⚠ **A state and a possession** — use *was* or *used to be*, and *used to have*.  **3** ⚠ **Could it be otherwise?** If not, being used to it is competence; ⚠ **if so, being used to it is the reason it has not been.**  **4** Not used to it · getting used to it · used to it · ⚠ **not noticing it**, which is the dangerous one because you stop telling anybody.  **5** ⚠ **Who is affected and what happens to them**, and ⚠ **why the old way was the old way** — and the second makes **the next change possible**, because a rule with its reason attached can die.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Three** — the yard pad (signature, no date), the Baghdad Street pad (both), and a box of about two hundred old ones with neither.  2 ⚠ **The people using the wrong one are the people who have been here longest**, because they are used to a pad that lives in a drawer in the yard, and the right pad lives at the other site.'));
out.push(note('⚠ Lina\'s last answer is the finding of the whole unit and it is structural: ⚠ **a change note tells people what to do and nobody has ever written one that tells them what to get rid of** — so every change adds a version and removes none. **Eleven years of that is three gate sheets, two price lists and a box of two hundred forms nobody will ever use and nobody will ever destroy.**'));
out.push(p('**Language box – Practise (sample):**  _"How many versions of this are in use? … Where does each one live? … Who uses which? … The old pads are withdrawn; the box in the store is to be destroyed; the yard pad is reprinted with a date column from the 1st."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'How many versions of the stock card are in use?'],
  ['A', 'One.'],
  ['B', '⚠ Where does it live?'],
  ['A', 'In the store, on the shelf by the door. ⚠ **And there is an older one in the office drawer that Nadia uses for the monthly figure.**'],
  ['B', 'So two.'],
  ['A', '⚠ **Three.** The one in the fourth store is a photocopy of the one before that, because the fourth store is across the yard and nobody wants to walk back.'],
  ['B', '⚠ **And the photocopy wins, because it is the nearest.**'],
]));
out.push(note('⚠ Pair 2 produces the mechanism in its purest form: ⚠ **a version that lives in the nearest drawer will win against any instruction.** The photocopy in the fourth store exists because the alternative is a walk across a yard, ⚠ **and no note has ever been written that beats a walk across a yard.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the versions, where each lives, who uses it, and the withdrawal line. **Typical errors:** counting versions and stopping · a withdrawal line with no destination for the old stock (⚠ *stop using the old pads* is not a withdrawal) · and the content error, which is treating the people using the old version as careless. ⚠ **It is not resistance; it is a drawer** — and the repair is to move the right pad, not to re-instruct the person.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Version', 'Where it lives', 'Who uses it', 'Withdraw, reprint or destroy?'], [
  ['the yard pad — signature, no date', 'the drawer in the yard', '⚠ **Abu Yasser and the drivers**', '⚠ **reprint with a date column**'],
  ['the Baghdad Street pad — both columns', 'the counter at Baghdad Street', 'Hala and Lina', '**keep — this is the right one**'],
  ['the old box — neither column', 'the store, about 200 blocks', '⚠ **whoever runs out**', '⚠ **destroy, by name, this week**'],
], [1.4, 1.6, 1.4, 1.6]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"I found three versions of the gate sheet. The oldest lives in a box in the store and is used by whoever runs out of pads. The withdrawal line is: the old pads are withdrawn, the box in the store is to be destroyed by Abu Yasser this week, and the yard pad is reprinted with a date column from the 1st."',
  '⚠ **The unit\'s mediation, named as the fifth unit of this book:** a change note tells people what to start doing and has no line for what to stop doing, **so every change in the history of a company has added a version and withdrawn none** — ⚠ **which means the oldest form is always still in a drawer somewhere, being used by the people who have been there longest**, because being used to a thing includes being used to where it lives, ⚠ **and the nearest drawer beats any instruction ever written.**',
  '⚠ And the half that decides what to do: the withdrawal line has **three parts and one of them is a bin** — withdrawn, reprinted, destroyed. ⚠ **It must carry a name against the destroying**, because *the old pads are withdrawn* with nobody named has been written in every company and has never removed a single pad.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 4)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7'], [['Answer', 'A', 'B', 'A', 'C', 'A', 'C', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q1 is **A** and it is worth a word of care: the extract says *nobody knows for certain* and then gives the best answer. ⚠ **A statement that the old days were chosen for a customer who has left is supported** — *the best answer anybody has* is still what the text says. **Learners who answer C have confused a hedged statement with no statement.**'));
out.push(note('⚠ Q4 and Q6 are both **C** and they are the two the paper is really testing: ⚠ **the note says Mr Jaber is being telephoned, not that he has agreed**, and it says the new days suit the bakery, **not that the bakery asked.** ⚠ *Doesn\'t say* is the right answer whenever a document records an action and the learner supplies a consequence — **and that is the single commonest error in Part 4 at this level.**'));
out.push(stage('6', 'Write with help – sample (44 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Abu Yasser — from Monday the old gate-sheet pads are withdrawn. Use the pad with the date column; from Monday they are in the yard drawer. The old blocks in the store are to be destroyed — bring them to me and I will burn them with the February papers. Nothing already signed needs doing again.',
]));
out.push(note('⚠ That sample is 56 words and must be cut to forty-five. ⚠ The cut is *I will burn them with the February papers*, which is a detail of the destroying rather than the instruction — **but the *bring them to me* must stay**, because it is the destination, and ⚠ **a withdrawal with no destination is the sentence every company has written and no company has acted on.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Which version is withdrawn, and from when', '✓'],
  ['⚠ Which to use, and where it lives', '✓ the yard drawer, from Monday'],
  ['⚠ What to do with the old ones, with a destination', '✓ bring them to me'],
  ['35 to 45 words — count them', '✗ 56 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (176 words)'));
out.push(sample(null, [
  '**CHANGE NOTE 5 — THE GATE SHEET, ALL VERSIONS. Issued 28 February. Effective 1 March. Revision 2. ⚠ No parallel run. ⚠ This note withdraws two versions.**',
  'which pad | ⚠ **three in use: the yard pad (signature, no date), the Baghdad Street pad (both), and about 200 old blocks in the store (neither)** | ⚠ **one: the Baghdad Street pattern, reprinted for both sites with a date column**',
  '⚠ **why three** | ⚠ **nobody chose it. A pad was printed for the new site and nothing was withdrawn; the old box has never been thrown away** | ⚠ **because a sheet has to say which day it refers to, and two of the three could not**',
  'who signs | not specified on the oldest version | the person who counted, by name, with the date',
  '⚠ **Who is affected.** Abu Yasser and the drivers, who have used the yard pad for years because it is in the yard drawer. ⚠ **They are not being asked to remember anything: the new pads go in the same drawer on Monday morning.**',
  '⚠ **What is withdrawn, and what is to be destroyed.** The yard pad and the old blocks are withdrawn from 1 March. ⚠ **The box of about 200 blocks in the store is to be destroyed by Abu Yasser in the week of the 3rd.** Nothing already signed is affected.',
  '⚠ **Why this line is in the note.** Because the three versions exist for one reason: ⚠ **no change note in this company has ever said what to get rid of.**',
]));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['I counted the price lists. ⚠ **Four.** The counter list (current, dated); the trade list (current, dated); a laminated one on the wall from 2023 that customers read; ⚠ **and one in the van, which Fadi quotes from.** ⚠ The withdrawal line: **the wall list and the van copy are withdrawn on 1 March and destroyed by me; the counter list is printed on both sides and one copy goes in the van each Monday.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 17 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'a', 'b', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 1 and 2 are the spelling pair and must be marked together: ⚠ ***used to* in the affirmative, *did not use to* elsewhere** — the *d* goes when *did* arrives. A learner who gets 1 and misses 2 has the form and not the rule.'));
out.push(note('⚠ Questions 3 and 4 are the *would* pair: ⚠ **a state takes *was*** and **a repeated action takes *would*.** ⚠ Questions 5 and 6 are *be used to* against *be getting used to*, and the figures in question 6 are what decide it: *the first month was nine journeys and now it is two* is a transition and not a settled state. ⚠ **Question 8 is the unit** — *what is withdrawn and destroyed* — and a learner who picks a or c has read the unit as being about dates.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Versions in use', 'Where the oldest are', 'Who uses the oldest, and why', 'Which is right', 'The three instructions'], [[
  'three', 'a box of about 200 in the store', '⚠ **the longest-serving — the pad lives in the yard drawer**', 'the Baghdad Street pad', '⚠ **withdraw the old pads · destroy the box · reprint the yard pad with a date column**',
]], [0.9, 1.4, 1.8, 1.1, 2]));
out.push(note('⚠ Gap 3 needs **both halves**: who, and why. ⚠ *The longest-serving* alone is half the answer and the other half — **because the pad lives in the drawer in the yard** — is the whole finding of the cycle. ⚠ Gap 5 needs all three instructions, **and the destroying is the one learners omit**, which is the joke the unit is making.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (74 words)', ['**CHANGE NOTE — THE GHOUTA RUN. Issued 25 February. Effective 1 March. Revision 1. No parallel run.**   It used to be Tuesdays and Thursdays; from 1 March it is Mondays and Wednesdays. ⚠ **Who is affected:** Mr Jaber\'s yard is shut on Mondays, so he has one delivery day instead of two; he is being telephoned today. ⚠ **Why the old days:** nobody knows for certain — the best answer is a customer who left in 2019. ⚠ **Withdrawn:** the old route card, destroyed by Fadi this week.']));
out.push(box('Marking the Unit 17 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 3 needs both halves, gap 5 needs all three instructions.'],
    ['**C Writing**', '7', 'What it used to be and what it is now (1) · ⚠ **an effective date** (1) · who is affected and how (1) · ⚠ **why the old way was the old way, or *nobody knows*** (2) · ⚠ **what is withdrawn** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for *why the old way was the old way* are the unit.** ⚠ **Give both marks for *nobody knows for certain*, with the best available answer** — it is the honest version and it is more useful than an invented reason, because it tells the next reader that the arrangement is unexplained and may be cancelled.',
  '⚠ **The two marks for the withdrawal require a destination and a name.** *The old forms are withdrawn* scores 0 of those 2. ⚠ ***The box in the store is to be destroyed by Abu Yasser in the week of the 3rd*** scores both — **because the whole of 17.7 is that a withdrawal with nobody against it has never removed a single pad.**',
  '⚠ **Deduct for a name in a change note where nobody is being asked to do anything.** ⚠ **A name in a change note is an accusation with a date**, and a reader in 2035 cannot know that the person was following the method correctly. ⚠ **But do not deduct for the name against the destroying** — that line is an instruction, so it needs one.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 17**'));
out.push(p('**1 The two *used to*s, which will be confused in every cycle.** *I used to work at two sites* and *I am used to working at two sites* are one word apart and state opposite facts, ⚠ **so the error does not merely sound wrong, it reverses the information.** Drill the pair aloud in 17.3 as pairs rather than as separate forms — 🔊 Track 17.6 exists for that — and then re-test it in 17.4, where the third form arrives. ⚠ **Expect the confusion to return in the writing even in a class that has the speaking right**, because the written forms look more alike than they sound.'));
out.push(p('**2 Reading 17.5 as a reversal of Unit 15.** A class that learned in Unit 15 that the passive owns nothing will object, correctly, that this unit now prefers it. ⚠ **Answer with the question and not with a style rule: *is anybody supposed to do something as a result?*** A post-mortem asks somebody to change something, so it needs names; a change note asks nobody to do anything, so a name in it is only an accusation with a date. ⚠ **And if the old method really was somebody\'s fault, the learner is writing the wrong document** — which is the answer to the objection the sharpest learner in the room will raise.'));
out.push(p('**3 Treating 17.7 as a tidiness lesson.** It looks like housekeeping and it is the structural finding of the unit: ⚠ **no change note in the history of most companies has ever said what to get rid of**, so every change adds a version. If a lesson has to be cut, **cut 17.4 and keep 17.7** — the four stages can be taught in ten minutes inside 17.3, and the count of versions cannot be done second-hand. ⚠ **And insist on the destination and the name in the withdrawal line.** *Stop using the old pads* is the sentence everybody writes; ⚠ ***bring them to me and I will destroy them*** is the one that empties the box, **and the difference between the two is about nine words.**'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 17 · Answer Key');
