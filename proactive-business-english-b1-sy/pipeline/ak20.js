// Proactive Business English B1 · Syria Edition · Book 2 · Unit 20 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 20  Instructions, Specifications and the Bench Page'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The whole unit writes one page, and the page is in 20.6.** Everything before it is a finding that changed a line: the first-off found two faults with one cause, the re-sort found one warning where there were nine, the reversibility table moved a step, the numbers produced a method, and the exceptions produced four branches. ⚠ **Teach it as one document being built, not as six topics**, and the class will write a usable page in the last cycle.',
  '⚠ **The four facts the unit rests on are in the opener and they are worth putting on the board**: the reader is **alone**, **at night**, **has not done it before**, and **cannot ask**. ⚠ **Every rule in the unit is derivable from those four**, and a class that has them will invent most of the rules without being told.',
  '⚠ **Expect the class to resist the deletions.** Six lines come off a safety page in 20.2 and two of four marked steps come off in 20.3, and both feel like negligence until the reason is said aloud: ⚠ **a page with nine warnings has none, and a page with four marked steps has none.** The arithmetic of attention is the hardest idea in Book 2 and it is in this unit twice.',
], C.grey, C.navy));

// ===================== 20.1 =====================
out.push(h2('20.1  I did exactly what it said'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the first answers to be about people — *nobody explained it* — and steer to the page: **what did the line say, and what did you do?**'));
out.push(p('**b**  Only the second: ⚠ *I did exactly what step 4 said and the seal was on the wrong face.* **The first is a verdict and the third is a complaint about a colleague**, and neither identifies a line.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Step 4 says *apply the seal to the face carrying the consignee code*, and she did exactly that** — and on a flat carton the code is on what becomes the base, because the stencil is applied before the carton is made up.  2 ⚠ **More than an apology, because it tells the reader which line is wrong** — *an apology tells me nothing at all.*'));
out.push(note('⚠ The exchange that carries the cycle is the hypothetical one: ⚠ *and if I had decided the step was wrong and put the seal on the side?* — ⚠ **then the carton would have been right and the instruction would still be wrong, and nobody would ever have found it.** **The silent correction produces a good article and leaves the fault in place for the night shift**, which is the inversion the class has to feel.'));
out.push(p('**Language box – Practise (samples):**  1 *step 4 says apply the seal to the face carrying the code; I did; the seal is on the base.*  2 *step 6 says mark the weight in the lower right corner; I did; the weight is upside down.*  3 *the form says enter the total in the right-hand column; I did; the total is in the VAT column.*  4 *step 3 says fit the bracket with the slot upwards; I did; the slot is against the wall and cannot be reached.*  5 *the note says send the copy to the second floor; I did; the second floor is personnel and it should have gone to accounts.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You put the seal on the side, and the page says the face with the code.'],
  ['A', 'The page is wrong. The code is on the base until it is made up.'],
  ['B', 'So you corrected it in your head.'],
  ['A', 'I did, and the carton is right.'],
  ['B', '⚠ **The carton is right and the page is still wrong**, and nobody knows but you.'],
  ['A', 'I was trying to save the time.'],
  ['B', '⚠ **I know you were. And the next person is alone at night with a hundred cartons and that page** — ⚠ **so the kindness costs ninety-nine cartons and a vessel.**'],
]));
out.push(note('⚠ Role card 2 is the harder one and it is the one to demonstrate, because ⚠ **the silent correction is always done to be helpful.** The line to insist on is *I know you were* — **the correction is not a fault and it is still the expensive option**, and a class told it was careless will defend it instead of hearing it.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the step, what was done, the result, and the corrected step with its extra words. **Typical errors:** _it was wrong_ · _I did what I thought it meant_ · and the content error, which is apologising. ⚠ **An apology in place of a quoted step costs the reader the one thing they needed**, and most learners will write one on the first attempt.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The step, as written', 'What I did', 'The result', 'The repair'], [
  ['apply the seal to the face carrying the code', 'exactly that', '⚠ **the seal is on the base**', 'apply the seal to the **side** face, which carries the code once made up (**+5 words**)'],
  ['mark the weight in the lower right corner', 'exactly that', '⚠ **upside down when made up**', 'mark the weight on the **side** face, after the carton is made up (**+4**)'],
  ['send the copy to the second floor', 'exactly that', 'it went to personnel', 'send the copy to **accounts**, which is on the second floor (**+3**)'],
  ['enter the total in the right-hand column', 'exactly that', 'it went in the VAT column', 'enter the total in the column headed **TOTAL** (**+1**)'],
], [1.8, 1.1, 1.3, 2.4]));
out.push(note('⚠ **Every repair in the table is under six words long**, and that is the finding to draw out at 4R: ⚠ **a wrong instruction is almost never wrong by a paragraph.** It is wrong by a noun — *the face* instead of *the side face*, *the second floor* instead of *accounts* — ⚠ **and that is why it has survived: a page that is nearly right does not look wrong to anybody reading it at a desk.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Step 4 says *apply the seal to the face carrying the consignee code*. I did that. The result was a seal on the base. The repair is *apply the seal to the side face, which carries the code once the carton is made up* — five words longer."', '⚠ **Then ask the second question: how long has the wrong step been on its page?** ⚠ **Usually years**, and usually with people silently correcting it — which is the answer to *why has nobody noticed?* **Everybody noticed, and each of them fixed it privately.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One carton made exactly as the instruction is written, looked at before any more are made** — and she was told ⚠ **to follow the page even where it looked wrong**, which she did.  2 ⚠ **They are the same fault: both steps describe a face of a *made-up* carton and are performed on a *flat* one.** *Whoever wrote them was holding a finished carton and I was holding a flat sheet*, and the page never says which state the carton is in at each step.  3 ⚠ **The carton weighs about twenty-three kilos full and is a two-person lift, and nothing on the page says so** — ⚠ **and on a night shift there is one person.** It is in no step because it is not an action; it is a property of the finished article.'));
out.push(note('⚠ The row that came out right — **step 9, nothing wrong, this step is correct** — is a technique and not a courtesy. ⚠ **A report in which every row is a fault is read as a complaint about the page**, and the writer loses the argument on tone. **One correct row converts the other three rows from an attitude into findings.**'));
out.push(p('⚠ And the last paragraph is the one to praise: ⚠ ***I have not made the other ninety-nine, and I have kept the first-off carton exactly as it is.*** **A first-off that has been tidied away cannot be looked at**, and the instinct of every tidy person is to flatten it.'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**FIRST-OFF REPORT — THE SATURDAY PRICE LABELS. 12 April. H. Mourad.**',
  '**What a first-off is.** One sheet of labels printed exactly as the note is written, looked at before the rest are run. ⚠ **I followed the note even where it looked wrong, and two things came out wrong.**',
  'step 2 | *enter the price in the second box* | ⚠ **exactly that** | ⚠ **the price is in the box headed *unit*, and the shelf price goes in the fourth**',
  'step 5 | *print one sheet to check* | exactly that | ⚠ **one sheet is sixteen labels and the check needs two of each size**',
  'step 7 | *date the run* | exactly that | ⚠ **nothing wrong — this step is correct**',
  '⚠ **What the faults have in common.** Both steps count boxes on the screen, ⚠ **and the boxes were renumbered when the till was changed in February** — so the note describes a screen that no longer exists.',
  '⚠ **And the fault that is not in any step.** The printer takes four minutes to warm up and the first three labels are faint. ⚠ **Nothing on the page says to print and discard three.**',
  '**What I have not done.** ⚠ **I have not run the rest, and the check sheet is still in the printer.**',
]));
out.push(note('⚠ The sample\'s common cause is a date — ⚠ **the till was changed in February and the note describes the old screen** — which is the commonest real version of this fault and the easiest for a class to find. **Ask the class to look for an instruction that describes a machine, a form or a room that has since changed**, and every learner will have one.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Exactly that* in the *what I did* column', '✓ in all three rows'],
  ['One row that came out right', '✓ step 7'],
  ['What the faults have in common', '✓ the till was changed in February'],
  ['The fault that is in no step', '✓ the four-minute warm-up'],
  ['What you have not done, and the first-off kept', '✓ the check sheet is still in the printer'],
], [5, 1]));
out.push(note('⚠ **Band 3 and one move:** the reader to name in this unit is almost always ⚠ **somebody alone, at night, who has not done it before and cannot ask** — and the one question is ⚠ ***what is on this page that is not a step?*** **Insist on the naming**, because a slip written as a colleague at a desk will find spelling and not the warm-up.'));
out.push(stage('6R', 'Share'));
out.push(p('The faults that are in no step only. ⚠ **Rank them by what would matter most at night**, and the ranking is usually: a weight, a missing tool, a door that locks, a machine that takes time to be ready. ⚠ **None of the four is an action, which is exactly why no step contains them.**'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'The gate sheet at my last job had a line that said *enter the number of items*, and for three years everybody entered the number of cartons.',
  '⚠ **I did exactly what it said on my first morning.** There were fourteen cartons and three hundred and sixty items, and I wrote three hundred and sixty, and the storeman told me kindly that we write fourteen.',
  '⚠ **I asked why the line did not say cartons, and he said that everybody knows.**',
  'The sheet went to the customer with the delivery, and the customer\'s own clerk read the column heading, which said *items*. ⚠ **Twice in three years a customer had queried a shortage that did not exist**, because our fourteen was being read against their three hundred and sixty.',
  '⚠ **Nobody had changed the line, because everybody who used it had corrected it in their head on their first morning, exactly as I was being taught to do.**',
  '⚠ **The line was changed in the end by a girl in her first week**, who did what it said, got three hundred and sixty, and asked a question instead of learning the local custom. It took one word.',
]));
out.push(note('⚠ **The sample\'s ending is the unit\'s thesis in a story**: the line survived three years of experienced people and was fixed by somebody with no experience at all, ⚠ **because experience here means knowing what the page meant to say.** **A first-off is a way of buying that first morning back on purpose.**'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the customer\'s clerk reading the column heading"   ✓ _the three clauses?_ — "yes: the line said items, I wrote items, the storeman said cartons"   ? _was the page ever changed?_ — "after three years, by somebody in her first week"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the page was never changed in all three, ⚠ **and in two of three somebody had been silently correcting it for years** — which is the honest answer to how a wrong line survives. **It does not survive unnoticed; it survives because every person who notices it fixes it privately and tells nobody.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **I made one first-off of the Thursday banking slip, following the note exactly.** The note says *total the cash and enter it on the slip*; I did, and the slip wants cash and cheques separately, which the note does not mention. ⚠ **And the fault in no step: the bank closes at one on Thursdays** — the note gives no time at all.']));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  The warning before the step'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect most warnings the class can remember to be on walls rather than in sequences, which is the first useful observation: **a wall warning is read once, on the first day.**'));
out.push(p('**b**  The second: ⚠ *Do not press the lever while the guard is up. Press the lever.* **The warning conditions the next line and must precede it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It is step 8, after step 7 which tells the reader to lower the platen; it should be above step 7, in its own line, unnumbered** — *a numbered warning gets ticked off as though it were work.*  2 ⚠ **A warning is about a person and a caution is about the thing** — *the guard is a hand; the platen face is money.*'));
out.push(note('⚠ The exchange to dwell on is the defence of the existing order: ⚠ *it is the order the machine\'s own manual uses* — and the answer is not that the manual is wrong. ⚠ **A manual is written to be complete and a bench page is written to be obeyed by somebody reading one line at a time**, and **copying the manual\'s order onto a bench page is the commonest real cause of a warning in the wrong place.**'));
out.push(p('**Language box – Practise (samples):**  1 the guard — ⚠ **WARNING, a person**, above the step that lowers the platen.  2 the platen face — **CAUTION**, money, above the step that seats the stencil.  3 the hot plate — ⚠ **WARNING, a person**, above the step that is done nearest to it.  4 the stencil edges — **CAUTION** if it marks the platen, ⚠ **WARNING if it cuts a hand** — and the class should be made to choose and to say which consequence they mean.  5 the generator switch — ⚠ **a step, not a warning**: *switch off at the wall* belongs in the sequence as step 13.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Nine warnings. How many are about a person?'],
  ['A', 'All of them. They are all safety.'],
  ['B', 'Read me the third.'],
  ['A', '*Warning: do not overload the bench.*'],
  ['B', '⚠ **What happens if somebody does?** With a figure.'],
  ['A', '…It gives no figure. Nothing happens, as far as I know.'],
  ['B', '⚠ Then it is not a warning and it is not a caution. ⚠ **It is a sentence everybody agrees with**, and the ninth line is the one about a hand.'],
]));
out.push(note('⚠ Role card 2 is the demonstration and the question that does the work is ⚠ ***what happens if somebody does — with a figure?*** **A line that cannot answer it has no consequence attached**, and the class discovers the fourth category by themselves: *good practice with no consequence*, which is always bigger than anybody expects.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two lines in the right order and sort them. **Typical errors:** numbering the warning · _CAUTION: do not lower the platen with the guard raised_ (⚠ **a hand called money**) · and the content error, which is keeping all nine and merely reordering them. ⚠ **Reordering nine warnings produces nine warnings**, and the gain is in the sorting.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The text', 'Warning or caution?', 'Where it is', 'Where it should be'], [
  ['do not lower the platen with the guard raised', '⚠ **WARNING — a hand**', 'step 8, after step 7', '⚠ **above step 7, unnumbered**'],
  ['do not run without the stencil seated', '**CAUTION — the platen face**', 'on the wall', 'above step 6'],
  ['wear gloves', '⚠ **neither — a step**', 'a warning at the top', '⚠ **step 1 of the sequence**'],
  ['report all faults', '⚠ **neither — delete**', 'a warning at the top', '⚠ **nowhere; it cannot be obeyed or disobeyed**'],
  ['do not leave the press switched on', '**a step**', 'a warning at the top', 'step 13'],
], [2, 1.2, 1.2, 1.6]));
out.push(note('⚠ **Three of the five sample lines are not warnings at all**, and two of those three are steps that were printed as warnings — ⚠ **which removed them from the sequence where they would actually have been done.** *Wear gloves* at the top of a page is read once; *1 put on the gloves* is done every time, **and it is the same words in a different place.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The text is *do not run without the stencil seated*. It is a **caution**, because it is about the platen face and not about a person. It is printed on the wall and it should be above step 6."', '⚠ **Then count the pages in the room with more than three warnings, and ask what happens to the ninth.** The answer the class will give is the right one: ⚠ **a reader who steps over eight steps over the ninth** — and the ninth is the hand.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One of the nine** — the platen and the guard.  2 ⚠ **They became numbered steps in the sequence**: gloves as step 1, clear the bench as step 12, switch off at the wall as step 13.  3 ⚠ **Because they cannot be obeyed or disobeyed.** *Do not touch the plate* has no consequence and no step it belongs to; *do not overload the bench* gives no figure; ⚠ *report all faults* is a sentence everybody agrees with and nobody acts on — **and a line that cannot be obeyed or disobeyed is not an instruction.**'));
out.push(note('⚠ The sorting is the content of the cycle and the four categories are worth putting on the board as the class reads: ⚠ **a hand (1) · money (2) · steps in capital letters (3) · good practice with no consequence at all (3).** **The fourth category is the surprise and it is almost always the largest or second largest**, in every real page a class brings in.'));
out.push(p('⚠ And the last paragraph is what makes the deletions defensible: ⚠ ***a reader at two in the morning now has one line in that weight to step over instead of nine.*** **Without that sentence, removing six lines from a safety page reads as negligence** — and with it, it reads as the only way to make the remaining line work.'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**THE DELIVERY VAN CHECK SHEET — THE WARNINGS, RE-SORTED. 14 April. F. Saeed.**',
  '**Version 1, as it stands — seven warnings.** _WARNING: check the tyres. WARNING: do not reverse without looking. WARNING: do not overload. WARNING: do not use the tail lift with the door latched. WARNING: keep the cab clean. WARNING: drive carefully. WARNING: report all damage._',
  '⚠ **What they are when sorted.** ⚠ **Two are about a person**: the tail lift with the door latched, and reversing without looking. ⚠ **One is about money**: overloading, and the sheet should give the figure, which is 1,200 kilos. ⚠ **Two are steps in capital letters**: check the tyres, clean the cab. ⚠ **And two are good practice with nothing attached**: drive carefully and report all damage.',
  '**Version 2 — two warnings, one caution, two steps, two deleted.**',
  '⚠ **WARNING** | ⚠ **Do not operate the tail lift with the rear door latched.** _(above step 8, unnumbered)_',
  '⚠ **WARNING** | ⚠ **Do not reverse without a second person at the rear or a clear mirror view.** _(above step 11)_',
  '**CAUTION** | Do not load above 1,200 kg; the rear springs settle and the lift will not clear the kerb. _(above step 6)_',
  'steps | **1** check the tyre pressures · **14** clear the cab',
  '⚠ **deleted** | ⚠ **drive carefully · report all damage**',
  '⚠ **Why they were deleted and not demoted.** *Drive carefully* names no action and *report all damage* has no recipient and no time on it. ⚠ **A line that cannot be obeyed or disobeyed is not an instruction**, and Fadi now has two lines in that weight instead of seven.',
]));
out.push(note('⚠ **The sample does one thing better than the model: it supplies the missing figure.** *Do not overload* became ⚠ *do not load above 1,200 kg; the rear springs settle and the lift will not clear the kerb* — **a caution with a number and a consequence**, which is a different instruction from the one it replaced. ⚠ **Where a line can be rescued by a figure, rescue it rather than deleting it.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The nine sorted by consequence, with counts', '✓ 2 · 1 · 2 · 2'],
  ['Steps-in-capitals turned into numbered steps', '✓ steps 1 and 14'],
  ['Lines with no consequence deleted, not demoted', '✓ two deleted'],
  ['Every surviving line placed above a named step', '✓ steps 8, 11 and 6'],
  ['The gain stated in the reader\'s terms', '✓ two lines instead of seven'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The surviving warnings only. ⚠ **Ask of each: is it about a person?** ⚠ **Expect at least one survivor in the room that is still about money**, and the test to apply aloud is the one from the dialogue: **does it cost a finger or does it cost money?**'));
out.push(stage('7', 'Write freely – sample (166 words)'));
out.push(sample(null, [
  'The wall above the slicer at my uncle\'s shop has eleven warnings on it, and I counted them for this.',
  'One is about a hand: ⚠ **do not clear the blade with the guard off.** It is the fourth of the eleven, in the same size and the same red as the other ten.',
  '⚠ **Four of the eleven are about the machine** — the blade, the bearing, the cleaning fluid, the voltage.',
  '**Three are steps that somebody printed as warnings**: wash before starting, switch off at the wall, sign the cleaning sheet.',
  '⚠ **And three are sentences nobody can disobey**: keep the area hygienic, work safely, report any concerns.',
  'Nobody in the shop can tell me who put them up or when, and two are in a different typeface, ⚠ **which means they were added by at least two different people on at least two occasions.**',
  '⚠ **The one about the hand has been stepped over for nine years by everybody who works there**, and I do not believe any of them has read it since their first week — ⚠ **because it is the fourth of eleven identical red lines and there is nothing to make it the one.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "a new girl on her first Saturday"   ✓ _is every warning before its step?_ — "none of them is near a step; they are all on a wall"   ? _how many are about a person?_ — "one of eleven, in the same red as the other ten"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually fewer than a third are about a person in all three texts, ⚠ **and in all three nobody could say who had added the others or when** — which is the diagnostic. **A page whose warnings accumulated has no author**, and a line with no author is not maintained by anybody.'));
out.push(stage('HW', 'Homework – sample (≈64 words)'));
out.push(sample(null, ['⚠ **The till note has six warnings and one is about a person** — *do not reach behind the shutter while it is closing.* It was the fifth of six. ⚠ **It is now above the step that closes the shutter, unnumbered.** Two became steps (count the float, lock the drawer) and ⚠ **two were deleted: *be vigilant* and *report suspicious behaviour*, which name no action.**']));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  The step that cannot be got wrong'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the first answer to be the step that is hardest, and expect it to be wrong — which is the cycle in one exchange. **Ask *and could it be put right afterwards?* and the class corrects itself.**'));
out.push(p('**b**  The second: ⚠ **it is marked, because it says what cannot be undone** — *once the stencil is applied the carton is scrap.* **The first is a step; the second is a step with a consequence.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Eleven of the thirteen can be corrected afterwards; two cannot** — step 5, the stencil, and step 11, the seal.  2 ⚠ **That a page with four marked steps has none**: *a reader at two in the morning gives extra attention about twice in a shift, and if you ask for it four times they will choose which two* — ⚠ **and they will choose the two that look difficult.**'));
out.push(note('⚠ Mr Attar\'s last two answers are the two the class will remember. ⚠ **The dangerous step is not the difficult one** — *applying a stencil is easy; that is exactly why it gets done without looking.* And ⚠ **not *be careful*: write what cannot be undone** — *careful is not a thing anybody can do on purpose.* **Both are correctable habits and both appear in every page a class brings in.**'));
out.push(p('**Language box – Practise (sample):**  _"The step that cannot be undone is the stencil. Once the ink is in the board the carton is scrap, and there are nine in the fourth store from January. It takes eight seconds and it is the easiest step on the page."_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I am marking four: the stencil, the seal, the count and the packing list.'],
  ['B', 'The count. If it is wrong, what happens?'],
  ['A', 'We count again. Four minutes.'],
  ['B', 'And the packing list?'],
  ['A', 'We reprint it. Two minutes.'],
  ['B', '⚠ Then neither is marked. ⚠ **Four marked steps is none** — and the reader will keep the two that look difficult, ⚠ **which are the count and the packing, because they are the two longest steps on the page.**'],
  ['A', 'And the two that matter are the quickest.'],
  ['B', '⚠ **Eight seconds and four seconds.** That is why they have to be printed differently.'],
]));
out.push(note('⚠ Role card 2\'s last exchange is the content and it is counter-intuitive enough to be worth stating twice: ⚠ **the two irreversible steps are the two quickest steps on the page.** **Difficulty attracts attention by itself, so a bench page should spend its marking on the steps that attract none.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two marked steps with their reasons. **Typical errors:** _step 5: be very careful_ · marking five or six steps · and the content error, which is marking the longest step. ⚠ **Ask *and how long does it take to undo?*** — it is the only question in the cycle and it settles every case.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Step', 'Corrected afterwards?', 'How', 'If not — what cannot be undone'], [
  ['select the stencil', 'yes', 'put it back', '—'],
  ['make up the carton', 'yes', 'flatten and re-make, 2 min', '—'],
  ['⚠ **apply the stencil**', '⚠ **no**', '—', '⚠ **the ink is in the board; the carton is scrap. Nine in the fourth store, January.**'],
  ['mark the weight', 'yes', 'peel and re-mark, 2 min', '—'],
  ['count against the order', 'yes', 'count again, 4 min', '—'],
  ['⚠ **seal**', '⚠ **no**', '—', '⚠ **it can be opened and the seal is then broken, which is the point of a seal.**'],
], [1.4, 1.2, 1.3, 2.3]));
out.push(note('⚠ **The *minutes* column is what makes the table work.** Without it the class marks four or five steps and feels responsible; ⚠ **with it, the question answers itself** — *ten of the eleven in under five minutes* — and the two survivors are obvious. **It also stops the reader panicking about the other eleven**, which is the second reason to print it.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my thirteen steps, two cannot be put right. The reason beside the first is *once the stencil is applied the carton is scrap, and there are nine in the fourth store from January*. The step that looks hardest is the packing, and it can be corrected in six minutes."', '⚠ **Then count the pages in the room with more than two marked steps and ask, for each, which two the reader would actually choose.** ⚠ **The class names the difficult ones every time**, which proves the rule from the inside rather than being told it.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Two of thirteen, and neither is difficult** — the stencil takes about eight seconds and the seal about four.  2 ⚠ **The packing and the count** — the two longest steps on the page, ⚠ **and both completely reversible** (six minutes and four minutes).  3 ⚠ **Step 5 has been moved from fifth to ninth**, so that the code check happens after the count and the packing — ⚠ **so that nothing irreversible is done to a carton until everything reversible has been checked.**'));
out.push(note('⚠ The ordering consequence is the real output of this cycle and it is one sentence of thought: ⚠ **nothing irreversible is done to a carton until everything reversible has been checked.** **It moves one step and saves a carton every time somebody miscounts** — and it is the kind of change that costs nothing, which is why nobody makes it.'));
out.push(p('⚠ And note the prerequisite form in step 11: ⚠ ***do not seal until step 9 is signed.*** **It converts a warning into a condition that is checkable by somebody who was not there** — a signature on a line — and that is what makes an irreversible step auditable rather than merely emphasised.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**THE MONTH-END BANKING — WHICH CAN BE UNDONE. 16 April. N. Sayegh. ⚠ One step of nine cannot.**',
  'steps 1–4 | count, sort, list, total | re-do | 6 min',
  '⚠ **step 5** | ⚠ **the cash goes into the night-safe wallet and the wallet is sealed and dropped** | ⚠ **it cannot — the wallet is in the chute and the bank opens it tomorrow in front of nobody from here** | ⚠ **any error is now the bank\'s word against ours**',
  'steps 6–9 | file the copy, sign the book, lock the drawer, log off | re-do | 3 min',
  '⚠ **One step of nine is irreversible, and it takes about four seconds** — a wallet into a chute. ⚠ **The two longest steps, counting and listing, are entirely reversible**, and they are the two anybody would mark.',
  '⚠ **What goes beside it.** *This step cannot be corrected: once the wallet is in the chute it is opened at the bank without us. There was a 15,000 difference in November that nobody could prove either way.*',
  '⚠ **And the ordering consequence.** The total was signed after the drop. ⚠ **It is now signed before**, so that nothing that cannot be undone happens until the figure has been checked by two people.',
]));
out.push(note('⚠ **The sample finds the same shape in an office**: one irreversible step of nine, four seconds long, and two long reversible steps that attract all the attention. ⚠ **And it produces the same ordering change** — the signature moved from after the drop to before it. **If a class can do that with their own work, the cycle has landed.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *minutes* column for the reversible steps', '✓ 6 and 3'],
  ['No more than two irreversible steps marked', '✓ one'],
  ['The reason and the evidence beside each', '✓ the November difference of 15,000'],
  ['Nothing that says *be careful*', '✓'],
  ['An ordering consequence', '✓ the signature moved before the drop'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The irreversible step and its reason only, then ⚠ **how long the step takes.** ⚠ **Four seconds, eight seconds, one keystroke** — and the class sees the pattern without being told: **the irreversible step is almost always one of the quickest on the page.**'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  'The irreversible step where I work is one keystroke, and the page it is on does not mention it.',
  'We raise credit notes on the accounts system, and a credit note cannot be deleted. ⚠ **It can be reversed by a second credit note in the opposite direction, which means the customer\'s statement then carries three lines where it should carry one**, and twice a customer has paid against the middle one.',
  'The keystroke is F9, and it is on the page as ⚠ ***9 press F9 to post.***',
  'It takes about a quarter of a second and it is the easiest thing in the procedure. ⚠ **The hardest thing is working out the VAT on a part credit, which is step 6, and step 6 can be corrected as many times as you like before step 9.**',
  '⚠ **Nobody has ever marked step 9 and everybody treats step 6 as the dangerous one**, because it is the one that makes you think.',
  '⚠ **What the page should say is: this step cannot be corrected; a posted credit note cannot be deleted and can only be reversed by a second one, which has twice been paid against.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "somebody raising their first credit note"   ✓ _is the reason given rather than *be careful*?_ — "yes, and with the twice-paid evidence"   ? _how long does it take?_ — "a quarter of a second, and it is the easiest step"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the irreversible step is one of the quickest in all three texts, ⚠ **and in all three the page marks something else, or nothing.** **The generalisation to draw out: pages are marked by effort and should be marked by consequence**, and the two are almost opposites.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **The step that cannot be undone on the dispatch page is *sign the gate sheet*** — once it is signed and the lorry has gone, the count is what the sheet says. ⚠ **The page now reads: this step cannot be corrected: after the lorry leaves, the sheet is the count. The 17 July stoppage was a sheet signed before the pallets were counted.**']));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  So that nobody shortens it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The question to ask after the first answer is *and what is it for?* — **expect *I do not know* about half the time**, which is the cycle.'));
out.push(p('**b**  ⚠ *Hold for four seconds **so that** the ink takes.* · *Count before loading **in order to** prevent a short load.* · *Sign after the count **so that** the signature means something.*  ⚠ **Note that *to prevent* takes a noun and *in order to* a verb**, which is the one grammar error to expect here.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because he thought four seconds was somebody being cautious** — *he has pressed things all his life and one second is enough for everything he has ever pressed.*  2 ⚠ **Rounding down**: *every number on a page is a step somebody will round down*, and ⚠ **a number with a reason behind it is an instruction while a number on its own is a suggestion in disguise.**'));
out.push(note('⚠ The sentence that must not be skipped is the last one: ⚠ **the man was not being lazy, he was being sensible about a number nobody had explained.** **A class that hears the shortening as carelessness will write pages that get shortened again**, and the whole remedy in this cycle depends on taking the shortener\'s side.'));
out.push(p('**Language box – Practise (samples):**  1 *hold for four seconds **so that** the ink penetrates the board; a shorter hold rubs off in transit.*  2 *count before loading **in order to** catch a short load; a short load is found by the customer and not by us.*  3 *sign after the count **to prevent** a signature certifying a count that did not happen.*  4 *hold the price for fourteen days **so that** the customer can get a decision; a shorter period is read as pressure.*  5 *wait two minutes before moving the carton **so that** the seal adhesive sets; a lifted corner looks tampered with.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I am going to put a purpose on all thirteen steps.'],
  ['B', 'Step 1. Put on the gloves.'],
  ['A', '…so that your hands are protected.'],
  ['B', '⚠ **Which everybody already knows, and now the reader has thirteen reasons to read instead of thirteen steps to do.**'],
  ['A', 'So which ones?'],
  ['B', '⚠ **The ones with a time or a count in them.** Four seconds, count against the order, two minutes before moving.'],
  ['A', 'Three of thirteen.'],
  ['B', '⚠ **Three of thirteen, because every number is a step somebody will round down** — and nobody rounds down a glove.'],
]));
out.push(note('⚠ Role card 2 is the restraint half and it is as important as the rule. ⚠ **A purpose clause on every step makes the page longer and the sequence harder to read**, and at the single-page limit of 20.6 it is simply impossible. **The selection rule is mechanical and worth memorising: put a reason on the steps that contain a number.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the step as it was, the step with its purpose and consequence, and ⚠ **why the shortening made sense to the person who did it.** **Typical errors:** _hold for four seconds for the ink_ (⚠ **a preposition where a clause is needed**) · a purpose on all thirteen · and the content error, which is calling the shortener careless.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The step', 'The number', 'So that…', 'A shorter / smaller one gives…'], [
  ['hold the platen', 'four seconds', '⚠ **the ink penetrates board of this thickness**', '⚠ **a mark that rubs off — about twenty on the second night**'],
  ['wait before moving', 'two minutes', 'the seal adhesive sets', 'a lifted corner that looks tampered with'],
  ['pack', '23 kg', 'above about 18 kg it is a two-person lift', '⚠ **a man alone will lift it, and did**'],
  ['hold the price', 'fourteen days', 'the customer can get a decision', 'a shorter period is read as pressure'],
  ['per pallet', 'thirty', '⚠ **nobody knows — it is what fits**', '⚠ **nothing, as far as anybody can tell**'],
], [1.4, 0.9, 1.9, 2]));
out.push(note('⚠ **The *nobody knows* row is the one to insist on.** A class will invent a reason for every number rather than write *nobody knows*, ⚠ **and the invented reason is worse than the blank**, because the next person defends it. **Write *nobody knows — it is what fits* and mark it as not a specification**, which is what the model does with the thirty.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The step is the platen hold, with the number four seconds. It is so that the ink penetrates board of this thickness, and a shorter one gives a mark that rubs off in transit — about twenty on the second night."', '⚠ **Then count the numbers in the room with no reason attached, and ask which of them somebody has already rounded down.** ⚠ **The second question is the one that produces silence and then confessions**, and it is the evidence for the whole cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Three of five had no reason, and two of those three had already been rounded down** — the four seconds to about one, and the twenty-three kilos lifted by one man.  2 ⚠ ***This is what fits; it is not a specification*** — ⚠ **because a number that looks like a specification and is not will be defended by somebody one day.**  3 ⚠ **A method for the lone worker**: *a full carton weighs about 23 kg and is a two-person lift. If you are alone, pack to 10 and close; the remaining contents go in a second carton marked 2 of 2* — ⚠ **which is not a warning and not a caution.**'));
out.push(note('⚠ The third answer is the cycle\'s best moment and it is worth naming for the class: ⚠ **a number with no reason produced a new step.** The twenty-three kilos was not explained, so a man lifted it; explaining it produced not a warning but a **method** — **and the method is 20.5 arriving one cycle early.**'));
out.push(p('⚠ And the fifth number is the sophisticated one. ⚠ **Thirty a pallet is what fits and nobody can say why it is not twenty-eight.** **Marking it as *not a specification* protects the next person from defending it** — and a class that has met the price-holding period and the gate-sheet count in Book 1 will recognise the type immediately.'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**THE NUMBERS ON THE KITCHEN PAGE, AND WHAT EACH IS FOR. 18 April. H. Mourad. ⚠ Four numbers. One had a reason and three did not.**',
  '**seventy-five degrees** | 6, the holding cabinet | ⚠ **below it the food is in the range where it spoils** | ⚠ **nobody can see the difference, which is why it gets turned down**',
  '**twenty minutes** | 3, the proving | ⚠ **nobody knows — it is what the last baker did** | ⚠ **nothing, as far as anybody can tell**',
  '**two trays** | 5, the oven | the third tray blocks the fan and the back row stays pale | ⚠ **three trays, every busy Friday**',
  '**four hours** | 8, the display limit | the sandwiches are sold within four hours of making | ⚠ **nobody times it; the tray is simply refilled**',
  '⚠ **Three of the four had no reason and two had already been shortened or ignored** — the two trays became three on Fridays, and the four hours is not timed by anybody.',
  '⚠ **The number that is not a specification.** The twenty minutes is what the last baker did, so I have written *this is custom, not a requirement* beside it.',
  '⚠ **And the step that has come out of it.** The page now says: ⚠ *write the time on the tray label when it goes out; anything on the counter after four hours comes off, whether the tray is empty or not.*',
]));
out.push(note('⚠ The sample\'s fourth number is the most useful finding in it: ⚠ **a limit that nobody can measure is not a limit** — *nobody times it; the tray is simply refilled* — ⚠ **and the remedy is a step that makes it measurable**, which is writing the time on the label. **A number needs a reason and sometimes it also needs a way of being seen.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers listed, not the steps', '✓ four numbers'],
  ['A purpose for each, or *nobody knows*', '✓ one *nobody knows*'],
  ['The consequence of a smaller one, with evidence', '✓ three trays every busy Friday'],
  ['The number that is not a specification, marked', '✓ the twenty minutes'],
  ['A step that comes out of a number', '✓ the time written on the tray label'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *nobody knows* numbers only. ⚠ **Ask of each: change it, keep it, or mark it as *what fits*?** ⚠ **The usual answer is the third**, and that is the useful outcome: **a number nobody can justify should be kept and labelled rather than defended or deleted.**'));
out.push(stage('7', 'Write freely – sample (173 words)'));
out.push(sample(null, [
  'The number where I work is twelve, and twelve became eight about four years ago without anybody deciding.',
  'The counter staff are supposed to check twelve items of a delivery against the note before signing. ⚠ **Nobody checks twelve. Everybody checks the first eight and signs**, and I did it myself for a year before I asked why it was twelve.',
  '⚠ **Nobody knew. The supervisor who set it had left in 2019.**',
  'The shortening made complete sense from where we were standing. ⚠ **A delivery comes at the busiest part of the morning, the driver waits while you count, and the last four items are always from the same part of the note** — so after a month you know they are always right.',
  '⚠ **What it cost was a fortnight of January.** A carton that was always right was wrong, nobody had looked at it, and it went out to four customers before anybody found it.',
  '⚠ **And the page still says twelve.** It should say: ⚠ *check twelve items, including four taken at random from the bottom half of the note, so that no part of a delivery is never checked.*',
]));
out.push(note('⚠ **The sample\'s repair is better than its finding**, and it is the one to read aloud: the fault was not the shortening from twelve to eight but ⚠ **that the eight were always the same eight.** *Four taken at random from the bottom half of the note* ⚠ **costs the same time as the old eight and covers the whole note** — which is what a purpose clause is for: once you know what the twelve is for, you can redesign it.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the supervisor who set the twelve, reading it now"   ✓ _does the step say what it is for?_ — "no, and that is why it became eight"   ? _why did the shortening make sense?_ — "the driver waits, and the last four are always right"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the shortening made perfect sense from where the person was standing, in all three texts, ⚠ **and in all three the page had a bare number on it.** **The generalisation: a number without a reason is not obeyed or disobeyed, it is estimated** — and the estimate is made by somebody with more experience of the work than of this particular number.'));
out.push(stage('HW', 'Homework – sample (≈66 words)'));
out.push(sample(null, ['Five numbers on the dispatch page. ⚠ **Two have reasons** (the fourteen-day price hold; thirty minutes before the gate closes). ⚠ **Two are *nobody knows*** — three copies of the sheet and a two-pallet maximum per note. ⚠ **And one has been rounded down for years**: *allow twenty minutes for the gate sheet*, which everybody does in eight because the queue is shorter at four.']));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  Unless, and in which case'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question is the one that matters: **is what they do instead written anywhere?** — and the answer is almost always no.'));
out.push(p('**b**  ⚠ *Seal the carton **unless** the count is unsigned, **in which case** leave it open and write *not counted*.* · *Do not load **unless** the gate sheet is signed.*'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because the page says *apply the stencil*, there was no stencil, and the page says nothing at all about what happens then** — and it was half past two, so he could telephone nobody.  2 ⚠ **Improvisation, and good improvisation**: *a page that does not say *stop* is a page that forbids stopping*, to a man with a hundred cartons and a night.'));
out.push(note('⚠ The hardest sentence in the cycle is Abu Yasser\'s *why?* when Nour says the night man should have stopped. ⚠ **Nothing on the page said stopping was allowed**, and a page that does not permit stopping forbids it. **The class will want the night man to have used his judgement, and he did** — which is precisely how nine cartons became scrap.'));
out.push(p('**Language box – Practise (samples):**  1 *apply the stencil, **unless** it is not in the press room, **in which case** stop, leave the cartons flat and write the number on the handover note.*  2 *sign the count line, **unless** you are alone, **in which case** sign once, write *alone*, and it is counted again in the morning.*  3 *apply the label, **unless** the roll runs out, **in which case** stop at the last full carton and write the number.*  4 *pack the carton, **unless** you are alone and it is over eighteen kilos, **in which case** pack to ten, close it, and mark the second carton 2 of 2.*  5 *mark the cartons, **unless** the generator goes off before you finish, **in which case** write the number done on the handover note and leave the rest flat.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Step 6, the labels. ⚠ **What will be missing at two in the morning?**'],
  ['A', 'Nothing. The labels are in the drawer.'],
  ['B', 'How many are in the drawer?'],
  ['A', '…About sixty, and the run is a hundred.'],
  ['B', '⚠ Then the branch is: **unless the roll runs out, stop at the last full carton and write the number.**'],
  ['A', 'He could cut them from a sheet.'],
  ['B', '⚠ **He did cut them from a sheet, and they are a quarter of a millimetre out and will not read on a scanner** — which nobody at the bench could possibly know.'],
]));
out.push(note('⚠ Role card 2\'s question is the whole method and it should be drilled: ⚠ ***what will be missing at two in the morning?*** The answers come from a short list every time — ⚠ **a tool, a signature, a consumable, a second person** — **and in this unit all four were missing on one of the two nights.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the step, the *unless* and the *in which case*, then say whether the improvisation was skilful and whether that made it better or worse. **Typical errors:** _unless the stencil is missing_ with nothing after it (⚠ **a hole with a label on it**) · _if the stencil is missing, use your judgement_ · and the content error, which is a branch with no record in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The step', 'What will be missing', 'Unless…', 'In which case…'], [
  ['apply the stencil', '⚠ **the stencil itself**', 'unless it is not in the press room', '⚠ **stop, leave the cartons flat, write the number on the handover note**'],
  ['sign the count', 'a second signature', 'unless you are alone', 'sign once, write *alone*; counted again in the morning'],
  ['apply the label', 'the label roll', 'unless the roll runs out', 'stop at the last full carton, write the number'],
  ['pack and close', 'a second person', 'unless you are alone, over 18 kg', 'pack to 10, close, mark the next 2 of 2'],
  ['mark the batch', '⚠ **the generator**', 'unless it goes off before you finish', '⚠ **write the number done and leave the rest flat**'],
], [1.3, 1.2, 1.6, 2.3]));
out.push(note('⚠ **Every *in which case* in the table has three parts: a stop, a place and a record.** ⚠ **The record is the one learners omit**, and it is the one the next shift needs: *write the number on the handover note*, so that **the morning finds work in a known state instead of a tidy one.** A branch with a stop and no record hands over a mystery.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Step 3 needs an *unless*, because the stencil will be missing. The branch is: unless the stencil for that code is not in the press room, in which case stop, leave the cartons flat and write the number on the handover note."', '⚠ **Then count the branches in the room that contain a stop, a place and a record** — ⚠ **usually about a third** — and ask the others what the next shift finds. **The answer is always the same: tidy work in an unknown state.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four: hand-marking, double-signing, cutting labels with scissors, and lifting alone — and three of the four produced work we cannot use** (scrap cartons, a signature certifying an unwitnessed count, labels a quarter of a millimetre out).  2 ⚠ **The fourth, the lifting** — *the work is perfect; there is no defect to find, which means nothing would ever have told us.*  3 ⚠ **A record**: *write the number on the handover note* — ⚠ **so that the morning shift finds work in a known state instead of a tidy one.**'));
out.push(note('⚠ The second answer is the cycle\'s finding and it inverts the class\'s instinct: ⚠ **the improvisation that worked is the dangerous one.** **It leaves no defect, so nothing reports it, and it becomes the method** — a man lifting sixty-one twenty-three-kilo cartons alone between one and four, perfectly, for two nights. ⚠ **Nothing in any inspection system is designed to find work that came out right.**'));
out.push(p('⚠ And the sentence to keep: ⚠ ***they are beautiful and they are useless.*** **The nine hand-marked cartons were done neatly and skilfully and they are scrap for a customs purpose** — *skill without permission produces competent waste*, which is the kinder and truer way to say what the branches are for.'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**THE THINGS THAT WENT MISSING, AND THE BRANCHES — THE SATURDAY COUNTER. 20 April. L. Barakat.**',
  'the float | ⚠ **the second key to the safe, on a Saturday** | ⚠ **opened with one key and signed both lines** | unless the second keyholder is absent, **in which case take the float from the drawer tin, sign once, and write *one key* on the sheet**',
  'the price list | last week\'s list, the new one not printed | ⚠ **priced four lines from memory** | unless the current list is not on the counter, **in which case charge the old price and write the four lines on the back of the sheet**',
  'the delivery note | no copy for the driver | ⚠ **wrote one out by hand, and it was accepted** | if there is no copy, **write one by hand, keep the carbon, and tell the office on Monday**',
  '⚠ **Three steps, three things missing, three competent improvisations**, and two produced work we cannot use: a float signed by one person twice, and four prices nobody can reconstruct.',
  '⚠ **The one that produced nothing we cannot use is the hand-written note, and it is the one that worries me.** It was accepted, and the driver has taken hand-written notes four times since.',
  '⚠ **And every branch now ends with something written down**, so that Monday finds a known state.',
]));
out.push(note('⚠ The sample reproduces the model\'s shape and finds the same inversion in a shop: ⚠ **the hand-written delivery note worked, was accepted, and has now happened four more times** — **the improvisation that works becomes the method.** *And it is the one that worries me* is the sentence to praise.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the person actually did, called competent', '✓ three competent improvisations'],
  ['How many produced unusable work', '✓ two of three'],
  ['The one that produced perfect work, named', '✓ the hand-written note'],
  ['Every branch with a stop, a place and a record', '✓ except the first, which has no stop'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The improvisation that produced perfect work only. ⚠ **Then ask how anybody would ever have found out** — and the answer is always *nobody would*. ⚠ **That is the moment the cycle lands**, and it is worth letting the silence sit before moving on.'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'The best piece of work anybody did at my last job was done at eleven at night and nobody should ever have had to do it.',
  'A consignment had to be at the border for a Monday and the customs broker\'s form had changed on the Friday. ⚠ **The new form wanted a figure we did not have: the net weight of each carton separately.**',
  'Our page said *enter the weights from the packing list*, and the packing list carried one total. ⚠ **It said nothing about what to do if the figure was not there.**',
  'The storeman weighed forty-one cartons on a bathroom scale, one at a time, and wrote the figures on the form in pencil and then in ink. ⚠ **It took him three hours and the consignment cleared.**',
  '⚠ **Nobody found out until I asked him, four months later, why there was a bathroom scale in the dispatch office.**',
  '⚠ **The work was perfect and it is still the method.** The page still says *enter the weights from the packing list*, and there is still one total on the list, ⚠ **and there is still a bathroom scale under the bench.**'],
));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the storeman\'s replacement, on their first Friday"   ✓ _a stop, a place and a record?_ — "none of the three; there is no branch at all"   ? _was the improvisation good?_ — "it was excellent, and that is why the page was never changed"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the improvisation was skilful in all three texts, ⚠ **and in the ones that worked nobody found out and the improvisation is now the method.** **The bathroom scale under the bench is the physical form of a missing branch**, and most workplaces have one.'));
out.push(stage('HW', 'Homework – sample (≈63 words)'));
out.push(sample(null, ['Five steps, and the question asked of each. ⚠ **What will be missing at two in the morning: the second keyholder, the current price list, the carbon pad, the trolley, and a signature.** ⚠ **The branch written: *unless the trolley is in the yard, carry no more than four boxes and write the number left on the sheet*** — a stop, a place and a record.']));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The page I would leave on the bench'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect a step count and then a long list of *what else* — the specification, the history, the reason the customer matters. **All of it is the back of the sheet**, which is the cycle.'));
out.push(p('**b**  ⚠ **The thirteen steps and what to do when the stencil is missing.** ⚠ **The other two go on the back**: why the customer matters and the specification it came from.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The specification reference** — its number, revision, the date it was received and who sent it: *nobody at a bench needs it and anybody with a question does.*  2 ⚠ **Nothing comes off; the branches move into a right-hand column instead of into the sequence**, which takes the front from forty lines to twenty-six.'));
out.push(note('⚠ The two sentences to keep are Mr Ayoub\'s. ⚠ **A second page is a page somebody does not turn at two in the morning** — *they turn it on the first night and they do not turn it on the second.* And ⚠ **count the lines before you argue about the length**: twenty-six fits and forty does not, **and the counting ends the argument in about a minute.**'));
out.push(p('⚠ The third is the one classes miss: ⚠ **say at the top who the page was written for.** *For one person working alone. If two of you are here, read branch 4 anyway.* **A page written for a night will be used in a day**, and the reader needs to know which situation it assumes.'));
out.push(p('**Language box – Practise (sample):**  _"Thirteen steps, one warning, two cautions, four branches. On the back: the specification number, its revision, the date received, who sent it. On the front: twenty-six lines, because the branches are in the right-hand column and not in the sequence."_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Nothing can come off. Every line is needed.'],
  ['B', 'Then count them. How many lines in the sequence?'],
  ['A', 'Forty, with the branches under their steps.'],
  ['B', '⚠ And with the branches in a column beside their steps?'],
  ['A', '…Twenty-six.'],
  ['B', '⚠ **Then nothing comes off and it fits**, and we have not argued about which line matters.'],
  ['A', 'And the specification reference?'],
  ['B', '⚠ **On the back. Nobody at a bench needs it and anybody with a question does.**'],
]));
out.push(note('⚠ **Role card 2 is a negotiation technique as much as a layout rule**: counting the lines both ways ⚠ **ends the argument without anybody giving anything up.** The class should notice that the two-page version and the one-page version contain **exactly the same words** — *the column is what makes one page possible.*'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what went on the back and the line count both ways, then the top line. **Typical errors:** deleting steps to fit · putting the branches in the numbering · and the content error, which is a page with no statement of who it is for. ⚠ **A bench page that does not say it assumes one person will be used by two and by one without either knowing which.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'What I have put there'], [
  ['The top line — job, date, revision, who it is for', 'Export carton, Tannous order, rev 2, 1 April. ⚠ **For one person working alone, at night. If two of you are here, read branch 4 anyway.**'],
  ['Steps, down the left', '13, numbered, in the order they are done'],
  ['Branches, down the right', '⚠ **4, beside steps 2, 4, 6 and 10, out of the numbering**'],
  ['Warning and cautions, above their steps', '1 warning above step 7; 2 cautions above steps 5 and 6'],
  ['⚠ **On the back**', '⚠ **the specification number, its revision, the date received, who sent it**'],
  ['⚠ **Line count, front**', '⚠ **24 — and 40 if the branches go in the sequence**'],
], [2.4, 3.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"My page is for one person working alone at night. It has thirteen steps and four branches, twenty-four lines on the front, and on the back is the customer\'s specification with its number and date."', '⚠ **Then ask the pages that do not fit whether the branches are in a column or in the sequence** — ⚠ **it is the answer about four times in five**, and it is a layout fault being argued about as a content fault.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Twenty-four lines on one side** — one warning, two cautions, thirteen steps, four branches and the title line; ⚠ **and on the back the specification number, its revision, the date it was received and who sent it.**  2 ⚠ **The side face in step 9, the four branches, and the sentence at the top saying who the page is for** — all three from a first-off and two nights.  3 ⚠ **Step 7 was step 5**: it is now after the packing and the count, ⚠ **so that nothing irreversible is done to a carton until everything reversible has been checked.**'));
out.push(note('⚠ **This page is the unit\'s deliverable and every line of it was produced by one of the earlier cycles.** Put the provenance on the board as the class reads it: ⚠ **step 9\'s side face from 20.1 · the single warning from 20.2 · the marking and the reordering from 20.3 · the four-second purpose and the lone-worker method from 20.4 · the four branches from 20.5 · the layout and the back from 20.6.** **Nothing on the page is a rule; everything on it is a finding.**'));
out.push(p('⚠ And the revision note is one sentence: ⚠ ***nothing irreversible is done to a carton until everything reversible has been checked.*** **A revision note of one sentence is what makes the next revision possible**, which is Unit 17 arriving at a bench.'));
out.push(stage('6', 'Write with help – sample (131 words)'));
out.push(sample(null, [
  '**NIGHT CLOSE — THE SHOP. Rev 3, 22 April. ⚠ For one person closing alone. If two of you are here, read branch 2 anyway. Alarm codes and key register on the back.**',
  '| ⚠ **WARNING. Do not enter the yard after the yard light has gone off; the step down is not visible.** |',
  '1 | turn the sign and lock the front door |',
  '2 | count the float at the counter, **not in the back room, so that you are visible from the street** | ⚠ **unless the second keyholder is absent: count once, sign once, write *alone*, and it is counted again in the morning**',
  '3 | cash into the wallet | ',
  '| **CAUTION. Do not force the wallet seal; a torn wallet is refused at the bank.** |',
  '4 | ⚠ **seal the wallet and drop it. THIS STEP CANNOT BE CORRECTED: once it is in the chute it is opened at the bank without us** (15,000 difference, November) |',
  '5 | shutters down, **so that the glass is covered before the lights go off** |',
  '6 | lights, alarm, out by the side door | ⚠ **unless the alarm shows a fault light: do not set it, lock the side door, and telephone the number on the back**',
  '⚠ **Fourteen lines on one side**, and on the back are the alarm codes and the key register.',
  '⚠ **What was not on revision 2:** the counting place in step 2, the two branches, and the line at the top saying who the page is for.',
  '⚠ **And step 4 has moved** from second to fourth, so that nothing irreversible happens until the float has been counted and signed.',
]));
out.push(note('⚠ **The sample is a different trade and the same page**, which is what to show the class: a warning about a person above its step, a caution about money, one marked irreversible step with its evidence, two purposes inside steps, two branches in a column, and ⚠ **the line at the top saying who it is for.** **Fourteen lines, one side, read aloud in under a minute.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A title line saying who the page is for', '✓ for one person closing alone'],
  ['Branches in a column, out of the numbering', '✓ two'],
  ['The warning and cautions unnumbered, above their steps', '✓'],
  ['No more than two marked steps, with evidence', '✓ one, with the November difference'],
  ['Purposes inside the steps that carry a number', '✓ steps 2 and 5'],
  ['The line count, and what is on the back', '✓ fourteen; codes and key register'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Time the readings.** Thirteen steps should take about ninety seconds, ⚠ **with the warning slower and the branches read only when the step is reached.** **If a bench page cannot be read aloud in two minutes it is not a bench page**, and the timing finds the over-written pages faster than any checklist.'));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  '**THE GENERATOR CHANGEOVER. Rev 1, 24 April. ⚠ Written for whoever is here at one in the morning, working alone. Supply contract and service history on the back.**',
  '| ⚠ **WARNING. Do not open the panel with the mains switch up; the busbar is live even when the engine is off.** |',
  '1 | note the time and the meter reading on the sheet |',
  '2 | mains switch down, **so that the two supplies are never bridged; bridging them has burnt the changeover contacts twice** |',
  '3 | ⚠ **start the generator and let it run thirty seconds before loading, so that the voltage settles; loading it cold drops the press mid-stroke** |',
  '| **CAUTION. Do not load the press and the compressor together; the set is 11 kVA and the two together stall it.** |',
  '4 | generator switch up |',
  '5 | ⚠ **press on. THIS STEP CANNOT BE CORRECTED if the stencil is already in: a stalled press marks the platen face** (two faces, 2024) |',
  '6 | work; check the fuel at three | ⚠ **unless the fuel is below a quarter: stop at the carton you are on, write the number done, and leave the rest flat**',
  '7 | at four: press off, generator off, mains switch up, meter reading on the sheet | ⚠ **unless the generator has already stopped: leave the mains switch down, write the time, and do not restart it**',
  '⚠ **Sixteen lines on one side.** The supply contract, the service history and the hire company\'s number are on the back.',
]));
out.push(note('⚠ **Step 3 is the sample\'s best line and it is the whole of 20.4 in one step**: ⚠ *let it run thirty seconds before loading, so that the voltage settles; loading it cold drops the press mid-stroke.* **Thirty seconds with no reason on it would be gone within a fortnight** — and the respondent\'s slip says exactly that: *I would load it immediately, because thirty seconds feels like nothing.*'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "somebody doing the changeover for the first time, alone"   ✓ _does it fit on one side?_ — "sixteen lines, yes"   ? _which step would I get wrong?_ — "step 3 — I would load it immediately, because thirty seconds feels like nothing"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually a reader finds a step they could not do alone in two of three texts, ⚠ **and in both the writer had never done the job alone.** **That is the single most useful finding of the cycle**: the page is written by somebody who has only ever done the job with company, and the night shift has none.'));
out.push(stage('HW', 'Homework – sample (≈61 words)'));
out.push(sample(null, ['⚠ **The stock-take instruction laid out on one side.** It was three pages. ⚠ **Twenty-two lines on the front with the branches in a right-hand column, and forty-one if they go in the sequence.** On the back: the system log-in, the previous count sheets and the auditor\'s letter. ⚠ **Nothing came off, and the top line now says *for two people; if you are alone, read branch 3*.**']));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: who is the originating office'));
out.push(stage('1', 'Get ready – Unit 20 quiz'));
out.push(p('**1** ⚠ **Both steps describe a face of a made-up carton and are performed on a flat one** — *whoever wrote them was holding a finished carton and I was holding a flat sheet*; ⚠ **and the third fault is in no step at all: twenty-three kilos is a two-person lift and on a night shift there is one person.**  **2** ⚠ **A warning is about a person and a caution is about the thing** — and both go ⚠ **above** their step, ⚠ **unnumbered**, because a numbered warning gets ticked off as work.  **3** ⚠ **So that nothing irreversible is done to a carton until everything reversible has been checked** — it saves a carton every time somebody miscounts.  **4** ⚠ **A suggestion in disguise, and it gets rounded down** — *every number on a page is a step somebody will round down.*  **5** ⚠ **A stop, a place to leave the work, and a record for the next shift.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Nour wrote it, in an afternoon, from Ms Tannous\'s specification and from what she could remember of the bench.**  2 ⚠ **It makes the page arguable**: *a page from the administration office, written in an afternoon by somebody who has never run the press* — ⚠ **and that is a page a man at a bench will argue with at seven the next morning, which is all I want.**'));
out.push(note('⚠ Lina\'s distinction is the finding and it is one word wide: ⚠ **he did not think the line could not be *wrong*; he thought it could not be *argued with*.** **A page with nobody\'s name on it is not read as anonymous but as senior** — and at two in the morning an unsigned instruction becomes a specification from a buyer in another country. ⚠ **Four readers of four different kinds all said the same wrong thing about where it came from**, which is the evidence.'));
out.push(p('**Language box – Practise (sample):**  _"I asked three people where the gate sheet came from. Two said the auditor and one said it had always been there. It was written by the storeman in 2019 and nobody has changed a line of it since, and he is still here and has never been asked."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'Where do you think the stock-take instruction came from?'],
  ['A', 'Head office. Or the auditors.'],
  ['B', 'And who signed it?'],
  ['A', '…Nobody. There is no name on it anywhere.'],
  ['B', '⚠ So who wrote it?'],
  ['A', 'I think it was Nadia, about four years ago, because the handwriting on the original was hers.'],
  ['B', '⚠ **And she sits eleven metres from you and has never been asked about it.**'],
]));
out.push(note('⚠ Pair 2 produces the standard result and the two questions must be asked in this order: ⚠ **where do you think this came from**, then **who signed it?** ⚠ **The first answer is always more senior and further away than the truth**, and the gap between the two answers is the finding. **The author is usually in the building.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the four readers believed, who actually wrote it, and the five-line heading. **Typical errors:** a heading with a name and no sources · and the content error, which is omitting the last line. ⚠ **Without *tell me what is wrong with it*, naming the author only tells the reader whom to blame** — the invitation is the half that changes anything.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The instruction', 'Where readers think it came from', 'Who actually wrote it', 'What the heading should say'], [
  ['the carton page', '⚠ **Beirut — the customer\'s specification**', '⚠ **Nour, in an afternoon**', 'issued by the administration office · N. Mansour · 1 April · rev 2 · written from the specification and the first-off · ⚠ **tell me what is wrong with it**'],
  ['the gate sheet', 'the auditor', 'the storeman, 2019', 'issued by the store · who · when · from what · ⚠ **tell me what is wrong with it**'],
  ['the stock-take note', 'head office', 'Nadia, four years ago', 'issued by accounts · who · when · from what · ⚠ **and she is eleven metres away**'],
], [1.2, 1.5, 1.2, 2.1]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"Readers think our instructions come from the auditors or from head office, and they are written by the people sitting in the room. The heading I would put on them is: issued by the store, written by the storeman in 2019 from the old gate layout — tell me what is wrong with it."',
  '⚠ **The unit\'s mediation, named as the eighth unit of this book:** an instruction with no name on it is not read as anonymous but as senior, **so an unsigned page written in an afternoon by an office that has never done the job acquires, at two in the morning, the authority of the customer\'s contract** — ⚠ **and the reader then follows it past the point where it stops making sense, not because they believe it is right but because they believe it cannot be argued with**, which means the one line that makes a page safe is the line that names the office that wrote it and asks to be told what is wrong with it.',
  '⚠ **And the second half, which is a filing matter and decides everything**: **what the customer requires and what we have decided to do about it are not the same document.** ⚠ **For two months they were one page**, and every decision made in an afternoon inherited the authority of a contract from Beirut. **Her specification on the back, with its number and date; our method on the front, with our name on it.**',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 3)'));
out.push(table(['Question', '1', '2', '3', '4', '5'], [['Section', 'B', 'D', 'E', 'A', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ **Question 1 is the one that is missed**: *where to put something that concerns the reader\'s safety* is **B**, because B is the section that places warnings and cautions, ⚠ **and learners choose C because C sounds like the dangerous-step section.** **Part 3 rewards reading for the *function* of a section rather than its subject matter**, and this item is the clearest demonstration in the book.'));
out.push(note('⚠ Question 5 — *limits how many steps may be marked* — is **C** (*no more than two such steps are marked on a page*), and ⚠ **question 2 is D rather than B**: the four-second hold is a **number**, and D is the section about numbers carrying their reasons. **Teach the class to find the noun the question is really about** — a warning, a number, an exception, a heading, a mark — **and Part 3 becomes mechanical.**'));
out.push(stage('6', 'Write with help – sample (78 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Abu Yasser, Fadi — the page on the bench is revision 2 of the export carton instruction, issued by the administration office on 1 April. ⚠ **It was written from Ms Tannous\'s specification and from Lina\'s first-off report of 27 March.** ⚠ **I have never run the press, so the four-second hold is somebody else\'s figure and the order of steps 7 to 10 may be wrong for one person.** The code and the hold are hers and are not mine to change. ⚠ **Tell me by Thursday which step you cannot do alone, and I will rewrite it.**',
]));
out.push(note('⚠ **That is 78 words and every sentence is doing a different job.** The third is the one that gets answers: ⚠ *I have never run the press, so the four-second hold is somebody else\'s figure* — **a reader will not contradict an office that claims to be right.** ⚠ And the fourth saves everybody\'s time: **saying which lines are the customer\'s and cannot move stops the argument happening about those.**'));
out.push(note('⚠ The commonest failure here is a request for *any comments* by *as soon as possible*. ⚠ **One thing, by one date, from the people who will do the work**: *tell me by Thursday which step you cannot do alone.* **A general request for comments on a bench page comes back empty**, and the class should be made to count the words it wastes.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it is and who issued it', '✓ rev 2, the administration office, 1 April'],
  ['What it was written from', '✓ the specification and the first-off report'],
  ['⚠ What the writer believes is wrong with it', '✓ the four-second hold and the step order'],
  ['One thing wanted back, by one date', '✓ which step you cannot do alone, by Thursday'],
  ['60 to 80 words — count them', '✓ 78'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (174 words)'));
out.push(sample('The heading only — the rest of the page is the one printed in 20.6, unchanged', [
  '**EXPORT CARTON — TANNOUS ORDER. Rev 2, 1 April. ⚠ Issued by the administration office. N. Mansour. Written from the customer\'s specification and from the first-off report of 27 March. ⚠ Tell me what is wrong with it. For one person working alone, at night; if two of you are here, read branch 4 anyway. Specification number and date on the back.**',
  '⚠ **Then the thirteen steps exactly as they stand in 20.6**: the warning above step 7, the two cautions, the marked step 7 with its nine scrap cartons, the four-second hold with its purpose, the side face in step 9, and the four branches in the right-hand column.',
]));
out.push(note('⚠ **The only thing 20.7 adds to the page is its heading, and that is the point of the cycle.** ⚠ **Six cycles produced thirteen steps, one warning, two cautions and four branches; the seventh produced five lines at the top** — and those five lines are what will keep the other twenty correct next year. **A class that can produce this page for their own work has done Unit 20**, whatever their score on the language items.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['⚠ **I asked three people where the dispatch page came from. Two said the customer and one said *it came with the building*.** It was written by Fadi\'s predecessor, who left in 2018. ⚠ **The gap is five years and one door**: the author\'s successor sits under the page and has never been told he may change it, which is the only thing that was ever wrong with it.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 20 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1 separates a count from a cause: **a** reports the number of faults and **c** blames the operator, ⚠ **and only b names the one thing both faults have in common** — written from a made-up carton and read from a flat one. **Two faults with one cause is one page fault**, and it is cheaper to fix than two.'));
out.push(note('⚠ Question 8 is the mediation in one line and it is the item to discuss rather than mark: ⚠ **a page with no name on it is read as *senior*, not as *anonymous* or *unofficial*.** A learner who chooses **a** has read the word and not the situation — ⚠ **at two in the morning, with nobody to telephone, an unsigned page is the most authoritative document in the building.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What four readers believed', 'Who wrote it', 'What Abu Yasser said', 'What goes at the top', 'Where the specification goes'], [[
  '⚠ **that it came from Beirut — Ms Tannous\'s specification, translated**', '⚠ **Nour, in an afternoon**', '⚠ **it is the customer\'s page**', 'the office, the name, the date, the revision, what it was written from, ⚠ **and *tell me what is wrong with it***', '⚠ **on the back, with its number and date**',
]], [1.7, 1, 1.2, 2.2, 1.4]));
out.push(note('⚠ Gap 4 carries the mark that matters and it needs ⚠ **the last line, not only the name.** A learner who writes *the office and the date* has heard the heading and missed its purpose: **naming the author without inviting correction tells the reader whom to blame and changes nothing about the page.** ⚠ Gap 5 needs *with its number and date* — **a specification on the back without its own identification is not separable from the method.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (71 words)', [
  '**NIGHT CLOSE — THE SHOP. Rev 3, 22 April. ⚠ Issued by the office. N. Sayegh. Written from the old closing note and from two Saturdays watched. ⚠ Tell me what is wrong with it. For one person closing alone. Codes on the back.**',
  '1 | turn the sign and lock the front door |',
  '2 | count the float at the counter, **so that you are visible from the street** | ⚠ **unless you are alone: sign once and write *alone*; counted again in the morning**',
  '3 | cash into the wallet |',
  '4 | ⚠ **seal and drop. THIS STEP CANNOT BE CORRECTED: once it is in the chute the bank opens it without us.** |',
]));
out.push(box('Marking the Unit 20 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 4 needs the invitation, gap 5 needs the number and date.'],
    ['**C Writing**', '7', '⚠ **the originating office, the person and the line inviting correction** (3) · four numbered steps in order (1) · ⚠ **one purpose clause inside a step** (1) · ⚠ **one exception with a stop, a place or a record** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The three marks for the heading need all three parts.** An office and a name without ⚠ ***tell me what is wrong with it*** scores 2 of 3, ⚠ **and the invitation alone, with no office named, scores 1** — because an anonymous page that asks for corrections has nobody to send them to.',
  '⚠ **The two marks for the exception need the third part.** *Unless you are alone, sign once* earns one; ⚠ ***sign once, write *alone*, and it is counted again in the morning*** earns both. **The record is what hands the next shift a known state instead of a tidy one**, and it is the part every class omits first.',
  '⚠ **Deduct for *be careful* anywhere on the page**, and for a warning that is numbered as a step. ⚠ **Both are the errors the unit exists to remove**, and both survive into the free writing in about a third of a class.',
  '⚠ **Do not deduct for a page that is too long here.** The check asks for a heading and four steps; ⚠ **the single-page limit is marked in 20.6 and not in the check**, and a learner who writes six good steps has not failed anything.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 20**'));
out.push(p('**1 The class will not believe the deletions.** Six lines come off a safety page in 20.2 and two of four marked steps come off in 20.3, and both feel like negligence. ⚠ **The argument is arithmetic and must be made out loud: a reader at two in the morning gives extra attention about twice in a shift.** ⚠ **Ask for it nine times and you have asked for it nought times**, and the one about the hand is the one that is stepped over. **If the class does not accept this, nothing else in the unit will hold**, so do 20.2\'s sorting exercise with a page they brought in themselves, and let them count the fourth category.'));
out.push(p('**2 Treating the improvisers as careless.** Every person in this unit who departed from the page did skilful work: ⚠ **nine neatly hand-marked cartons, a signature on both lines, labels cut with scissors, sixty-one twenty-three-kilo cartons lifted alone.** ⚠ **A class that calls that carelessness will write pages that get improvised round again**, because the remedy follows from the diagnosis. ⚠ **And insist on the inversion in 20.5**: *the one that produced nothing we cannot use is the one that frightens me* — **the improvisation that works leaves no defect, so nothing reports it, and it becomes the method.** Give it time; it is the single most transferable idea in Book 2.'));
out.push(p('**3 Letting 20.6 be a layout lesson and 20.7 a nicety.** They are the two halves of one thing. ⚠ **20.6 makes the page usable and 20.7 makes it correctable**, and a page that cannot be corrected will be wrong within a year whatever its layout. If a cycle has to be cut, ⚠ **cut 20.3 and keep 20.7**: the irreversible-step test can be taught in ten minutes inside 20.6, and ⚠ **the question *where do you think this came from, and who signed it?* cannot be taught except by being asked.** It also produces the only homework in this unit that reliably changes something at the learner\'s work — **because the author is nearly always in the building, and has nearly always never been asked.**'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 20 · Answer Key');
