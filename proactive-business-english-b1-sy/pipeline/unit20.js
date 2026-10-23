// Proactive Business English B1 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a work instruction · a tolerance band · a nominal dimension · a datum · a sequence of operations · a verification point · a witness point · a sign-off step · a warning · a caution · a prerequisite · a consumable · a fixture · a jig · a gauge · to verify · to inspect at source · a first-off check · a last-off check · a deviation · a written concession · a non-conformance · to quarantine · a rework instruction · a scrap decision · a shift handover note · a night-shift reader · a single-page limit · the step that cannot be got wrong · a numbered step';
const BACK_AT_B1 = 'specification · manual · step by step';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 20  Instructions, Specifications and the Bench Page'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**20.1**  say that you did exactly what it said, and that it was still wrong',
  '**20.2**  put the warning before the step and not after it',
  '**20.3**  mark the step that cannot be got wrong, and say why',
  '**20.4**  say what a step is for, so that nobody shortens it',
  '**20.5**  write the exception: _unless · in which case_',
  '**20.6**  write the one page you would leave on the bench',
  '**20.7**  Review & Mediate: who is the originating office',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The hundred cartons came, and the work runs at night', [
  '**Ms Tannous ordered a hundred cartons on 26 March**, which is the largest order this company has had from outside Syria. ⚠ **They have to be packed and marked to a specification that came from her own customer**, and we have never worked to anybody else\'s specification before.',
  '⚠ **And the work runs at night.** The stencil press runs on the generator, which runs from one until four — so the marking is three hours a day, and a hundred cartons needs two nights of it. ⚠ **For two nights the person doing the work will be alone in the building with a piece of paper**, and there will be nobody to telephone.',
  '**So this unit writes one page.** ⚠ **A work instruction for somebody who is alone, at night, who has not done it before, and who cannot ask.** Everything in the unit — the warnings first, the marked step, the purpose of each step, the exceptions — exists because of those four facts.',
], C.lyellow, C.orange));

// ======================= CYCLE 20.1 =======================
out.push(pb());
out.push(h2('20.1  I did exactly what it said'));
out.push(p('**Function:** reporting that you followed an instruction and it was wrong   ·   **Grammar:** _exactly what it said · as written · to the letter_   ·   **Pronunciation:** _exactly_ said without indignation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a time you followed an instruction at work and the result was wrong. Say what the instruction said and what you did.'));
out.push(p('**b**  Which sentence helps? _It was wrong. · I did exactly what step 4 said and the seal was on the wrong face. · Nobody explained it properly._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has gone wrong with the first trial carton?   **A** the marking   **B** the seal is on the wrong face, and the instruction was followed exactly   **C** the weight'));
out.push(p('**b**  Listen again. **1** What does step 4 say, and what did Lina do? **2** What does Nour say the sentence *I did exactly what it said* is worth?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  "Read me what you did"', [
  ['Nour', 'The trial carton has the seal on the base.'],
  ['Lina', 'Step 4 says *apply the seal to the face carrying the consignee code*.'],
  ['Nour', 'And the consignee code is on the base?'],
  ['Lina', '⚠ **On this carton the code is on the base, because the stencil is applied to the flat before it is made up** — and I did exactly what step 4 said.'],
  ['Nour', 'You did. Say that again, in those words, when Bassel asks.'],
  ['Lina', 'I thought I would be in trouble.'],
  ['Nour', '⚠ ***I did exactly what step 4 said* is the most useful sentence anybody can say to me**, and it is worth more than an apology, because it tells me which line is wrong. ⚠ **An apology tells me nothing at all.**'],
  ['Lina', 'And if I had decided the step was wrong and put the seal on the side?'],
  ['Nour', '⚠ **Then the carton would have been right and the instruction would still be wrong, and nobody would ever have found it.** ⚠ The next person would do what the page says, on a night shift, with a hundred cartons.'],
  ['Lina', 'So doing what the page says even when it looks wrong is the right thing.'],
  ['Nour', '⚠ **On a first-off, yes, and then stop.** That is what a first-off is for: ⚠ **you make one, exactly as written, and you look at it before you make ninety-nine more.**'],
  ['Lina', 'Step 4 should say which face.'],
  ['Nour', '⚠ *Apply the seal to the side face, which carries the consignee code once the carton is made up.* Fourteen words instead of nine. ⚠ **And the nine words were not careless; they were written by somebody looking at a made-up carton** — and you were looking at a flat one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_I did exactly what it said_ — and why it is the useful sentence**',
  table(['Instead of', 'Say'], [
    ['~~It was wrong.~~', '**I did exactly what step 4 said** and the seal is on the base.'],
    ['~~Nobody explained it.~~', '**Step 4 says X; I did X; the result is Y.**'],
    ['~~I am sorry.~~', '⚠ **an apology tells the reader nothing**'],
    ['**as written · to the letter**', 'I followed step 4 **as written**.'],
    ['⚠ **the first-off**', '⚠ **make one exactly as written, and look at it**'],
  ], [2.3, 2.9]),
  '⚠ ***I did exactly what step 4 said* is worth more than an apology, because it tells the reader which line is wrong.** An apology tells them nothing at all, and a page with a wrong line in it is still wrong tomorrow.',
  '⚠ **Quote the step, say what you did, and say what the result was** — three clauses and no adjectives. *Step 4 says apply the seal to the face carrying the consignee code; I did; the seal is on the base.*',
  '⚠ **On a first-off, follow the page even when it looks wrong — and then stop.** ⚠ **That is what a first-off is for: you make one, exactly as written, and you look at it before you make ninety-nine more.**',
  '⚠ **If you correct the page in your head, the product is right and the page is still wrong**, and ⚠ **the next person will do what it says, on a night shift, with a hundred cartons.** The silent correction is the expensive kindness.',
  '⚠ **And assume the wrong line was not careless.** ⚠ *The nine words were written by somebody looking at a made-up carton, and you were looking at a flat one.* **Almost every bad instruction is written from a different position than it is read from.**',
  '**Practise:** Report each as *the step says X; I did X; the result is Y.* 1 a seal on the wrong face 2 a label upside down 3 a figure entered in the wrong column 4 a part fitted the wrong way round 5 a form sent to the wrong office',
  '**Useful phrases:**  I did exactly what step 4 said  ·  as written  ·  step 4 says X; I did X; the result is Y  ·  that is what a first-off is for  ·  and then stop  ·  it was written from a made-up carton',
  '**Pronunciation – _exactly_ without indignation.** 🔊 **Track 20.2** Listen: _I did exactly what step four said._ ⚠ Level, no stress on *exactly*, falling at the end. **Stressed, it is an accusation; level, it is a report** — and only the report gets the line changed. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a wrong result; B gets the three clauses. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'The __________ has __________.'],
  ['A', 'Step __________ says *__________*.'],
  ['B', 'And __________?'],
  ['A', '⚠ On this __________, __________, because __________ — and I did exactly what step __________ said.'],
  ['B', 'You did. ⚠ Say that again, in those words, when __________ asks.'],
  ['A', 'I thought I would be in trouble.'],
  ['B', '⚠ It is the most useful sentence anybody can say to me, because it tells me __________.'],
]));
out.push(table(['Role card 1 — the seal', 'Role card 2 — the silent correction'], [[
  'Step 4: *apply the seal to the face carrying the consignee code.* ⚠ On a flat carton the code is on what becomes the base. **The carton is wrong and the instruction was followed exactly.** ⚠ The repair: *apply the seal to the side face, which carries the consignee code once the carton is made up* — fourteen words instead of nine.',
  'A corrected a step in their head and produced a right article from a wrong page. ⚠ B\'s job is to say why that is worse: **the page is still wrong, nobody knows, and the next person is alone at night with a hundred cartons.** ⚠ **The silent correction is the expensive kindness**, and it is almost always done to be helpful.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the step, what was done, and the result. ⚠ Then write the corrected step, and count the extra words.'));
out.push(PHRASE_CARD(['I did exactly what step 4 said', 'as written', 'step says X, I did X, result is Y', 'that is what a first-off is for', 'and then stop', 'written from a made-up carton']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** instructions at your work that are wrong or incomplete. Write the three clauses and the repair.'));
out.push(table(['The step, as written', 'What I did', 'The result', 'The repair'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.2, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Step _______ says _______. I did that. The result was _______. The repair is _______, which is _______ words longer._'));
out.push(p('**Listener task:** count the repairs in the room that are fewer than twenty words. ⚠ Then ask how long each wrong step has been on its page.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was wrong_ and _I did what I thought it meant_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**FIRST-OFF REPORT — THE TANNOUS EXPORT CARTON. 27 March. L. Barakat, in her twelfth week.**',
  '**What a first-off is.** One carton made exactly as the instruction is written, looked at before any more are made. ⚠ **I was told to follow the page even where it looked wrong, and I did, and three things came out wrong.**',
  table(['Step', 'What it says', 'What I did', 'The result'], [
    ['4', 'apply the seal to the face carrying the consignee code', '⚠ **exactly that**', '⚠ **the seal is on the base** — the code is on the base until the carton is made up'],
    ['6', 'mark the weight in the lower right corner', 'exactly that', '⚠ **the weight is upside down** — the lower right of a flat carton is the upper left when made up'],
    ['9', 'enter the batch on the packing list', 'exactly that', '⚠ **nothing wrong** — this step is correct'],
    ['11', 'seal and set aside for collection', 'exactly that', '⚠ **the carton cannot be lifted by one person** at 23 kilos, and nothing on the page says so'],
  ], [0.5, 2.2, 1, 2.6]),
  '⚠ **Two of the three faults are the same fault.** Steps 4 and 6 both describe a face of a made-up carton and are performed on a flat one. ⚠ **Whoever wrote them was holding a finished carton and I was holding a flat sheet**, and the page never says which state the carton is in at each step.',
  '⚠ **And the third is not in any step at all.** The carton weighs about twenty-three kilos when full. ⚠ **Nothing on the page says that it is a two-person lift**, and on a night shift there is one person.',
  '**What I have not done.** ⚠ **I have not made the other ninety-nine.** The instruction will be rewritten first, and I have kept the first-off carton exactly as it is so that somebody can look at it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is a first-off, and what was the writer told to do?'));
out.push(item('2', 'What do the faults in steps 4 and 6 have in common?'));
out.push(item('3', 'What is the third fault, and why is it not in any step?'));
out.push(box('Writer\'s box', [
  '**The first-off report — four parts:** **what a first-off is, in two sentences** → **a table: *step · what it says · what I did · the result*** → ⚠ **what the faults have in common** → ⚠ **the fault that is not in any step**, and what you have not done.',
  '⚠ **Keep a row that came out right.** *Step 9 — nothing wrong, this step is correct.* ⚠ **A report in which everything is wrong is read as a complaint about the page**; one correct row makes the other three findings.',
  '⚠ **Say *exactly that* in the *what I did* column, every time.** It is the whole value of a first-off: ⚠ **the column is there to show that the fault is in the page and not in the hands.**',
  '⚠ **Find what the faults have in common.** ⚠ *Whoever wrote them was holding a finished carton and I was holding a flat sheet.* **Two faults with one cause is a page fault; two unrelated faults are two page faults** — and the first is cheaper to fix.',
  '⚠ **Look for the fault that is in no step.** ⚠ *The carton weighs about twenty-three kilos and nothing says it is a two-person lift, and on a night shift there is one person.* **The most dangerous thing on a bench page is always something that is not on it.**',
  '⚠ **And say what you have not done.** ⚠ *I have not made the other ninety-nine, and I have kept the first-off exactly as it is.* **A first-off that has been tidied away is a first-off that cannot be looked at.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a first-off report for an instruction at your work (**60 words or more**). Use the frame.'));
out.push(p('**FIRST-OFF REPORT — ______________. ______________. ______________.**   **What a first-off is.** ______________. ⚠ I followed the page even where it looked wrong, and ______________ came out wrong.   ______________ | ______________ | ⚠ **exactly that** | ⚠ **______________**   ______________ | ______________ | exactly that | ⚠ **______________**   ______________ | ______________ | exactly that | ⚠ **nothing wrong — this step is correct**   ⚠ **What the faults have in common.** ______________, and ⚠ ______________.   ⚠ **And the fault that is not in any step.** ______________. ⚠ Nothing on the page says ______________.   **What I have not done.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person on the night shift who has only this page.** The box says look for the fault that is in no step. Your report has three steps in it — is there anything I need to know that is not a step at all?"',
  '⚠ In this unit the reader to name is almost always ⚠ **somebody alone, at night, who has not done it before and cannot ask.** **Every rule in Unit 20 comes from those four facts**, and a slip written as any other reader will miss most of them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what is on this page that is not a step?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Exactly that* in the *what I did* column', ''],
  ['One row that came out right', ''],
  ['What the faults have in common', ''],
  ['The fault that is in no step', ''],
  ['What you have not done, and the first-off kept', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their fault that is in no step. The class says which would matter most at night.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you or somebody followed an instruction exactly and the result was wrong (**140 to 180 words**). Say what the step said, what came out, and whether anybody changed the page.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _are the three clauses there — the step, what was done, the result?_   ? _was the page ever changed, and by whom?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the page never changed? Usually all three — ⚠ **and in two of three somebody had been silently correcting it for years.**'));
out.push(box('Homework', ['Write your final text. Then make one first-off at your work, following a page exactly, and write the three clauses for anything that comes out wrong (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.2 =======================
out.push(pb());
out.push(h2('20.2  The warning before the step'));
out.push(p('**Function:** ordering a warning and its step   ·   **Grammar:** warnings and cautions, placed before   ·   **Pronunciation:** the warning read aloud so that it stops somebody'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a warning you have seen at work. Say whether it came before or after the thing it warns about.'));
out.push(p('**b**  Which order is right? _Press the lever. Do not press it while the guard is up. · Do not press the lever while the guard is up. Press the lever._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the warning on the press?   **A** it is not clear   **B** it is printed after the step it warns about   **C** it is in the wrong place on the machine'));
out.push(p('**b**  Listen again. **1** Where is the warning, and where should it be? **2** What does Abu Yasser say about the difference between a warning and a caution?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  "A warning after the step is a note for the inquiry"', [
  ['Abu Yasser', 'Read me steps seven and eight of the press instruction.'],
  ['Nour', '*7 Lower the platen onto the stencil and hold for four seconds. 8 Warning: do not lower the platen with the guard raised.*'],
  ['Abu Yasser', '⚠ And in what order will somebody read those?'],
  ['Nour', 'Seven, then eight.'],
  ['Abu Yasser', '⚠ **So they lower the platen and then they read the warning about lowering the platen.** ⚠ A warning after its step is not a warning; **it is a note for the inquiry afterwards.**'],
  ['Nour', 'It is the order the machine\'s own manual uses.'],
  ['Abu Yasser', 'It is, and the manual is written to be complete. ⚠ **A bench page is written to be obeyed by somebody who is reading one line at a time** — and a man working at two in the morning reads line seven, does it, and reads line eight.'],
  ['Nour', 'So the warning goes first, as a step of its own.'],
  ['Abu Yasser', '⚠ **Before step seven, in its own line, and it is not numbered.** A numbered warning gets ticked off as though it were work.'],
  ['Nour', 'And the difference between a warning and a caution?'],
  ['Abu Yasser', '⚠ **A warning is about a person and a caution is about the thing.** *Do not lower the platen with the guard raised* is a warning — it is about a hand. ⚠ *Do not run the press without the stencil seated, or the platen face will be marked* is a caution: **it costs money and it does not cost a finger.**'],
  ['Nour', 'Does the difference matter on a page?'],
  ['Abu Yasser', '⚠ **It matters because there must be very few warnings.** This page has one. ⚠ **A page with nine warnings on it has none**, because a reader who steps over eight of them steps over the ninth** — and the ninth is the hand.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Warnings before steps — and warning against caution**',
  table(['', 'What it is about', 'Example'], [
    ['⚠ **WARNING**', '⚠ **a person**', '**Do not lower the platen with the guard raised.**'],
    ['**CAUTION**', 'the thing', 'Do not run the press without the stencil seated, or the platen face will be marked.'],
    ['⚠ **position**', '⚠ **before the step, in its own line, not numbered**', 'a numbered warning gets ticked off as work'],
    ['**how many warnings**', '⚠ **as few as possible — this page has one**', 'nine warnings is none'],
  ], [1.3, 1.7, 3]),
  '⚠ **A warning after its step is not a warning; it is a note for the inquiry afterwards.** ⚠ *They lower the platen and then they read the warning about lowering the platen.*',
  '⚠ **A manual is written to be complete and a bench page is written to be obeyed by somebody reading one line at a time.** ⚠ **The orders are different and copying the manual\'s order onto a bench page is the commonest cause of a warning in the wrong place.**',
  '⚠ **A warning is about a person; a caution is about the thing.** ⚠ *A hand* against *the platen face will be marked* — **one costs a finger and the other costs money**, and mixing them is how a page ends up with nine warnings.',
  '⚠ **And a page with nine warnings has none.** ⚠ **A reader who steps over eight steps over the ninth** — so the discipline is to have very few, and the only way to have very few is to call the money ones cautions.',
  '⚠ **Do not number a warning.** A numbered line is a line to be done and ticked; ⚠ **a warning is a condition on the next line and belongs above it, unnumbered and in a different weight.**',
  '**Practise:** Sort each into a warning or a caution, and place it. 1 the guard 2 the platen face 3 the hot plate 4 the stencil edges 5 the generator switch',
  '**Useful phrases:**  a warning goes before its step  ·  not numbered  ·  a warning is about a person  ·  a caution is about the thing  ·  nine warnings is none  ·  a note for the inquiry',
  '**Pronunciation – the warning that stops somebody.** 🔊 **Track 20.4** Listen: _WARNing. Do NOT lower the platen with the guard RAISED._ ⚠ A full stop after *warning*, then three stresses. **It is the one line on a bench page that is read aloud differently from the rest.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads two steps in the wrong order; B reorders them and sorts warning from caution. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Read me steps __________ and __________.'],
  ['A', '*__________. __________: do not __________.*'],
  ['B', '⚠ And in what order will somebody read those?'],
  ['A', '__________, then __________.'],
  ['B', '⚠ So they __________ and then they read the warning about __________.'],
  ['A', 'So it goes before, in its own line.'],
  ['B', '⚠ And not numbered. Is it a warning or a caution?'],
]));
out.push(table(['Role card 1 — the platen', 'Role card 2 — nine warnings'], [[
  '*7 Lower the platen and hold for four seconds. 8 Warning: do not lower the platen with the guard raised.* ⚠ **The warning goes above step 7, unnumbered.** And the second line on the page is a **caution**, not a warning: *do not run the press without the stencil seated, or the platen face will be marked.*',
  'A has a page with nine warnings on it. ⚠ B\'s job is to sort them: **how many are about a person?** Usually one or two. ⚠ **The rest are cautions or are simply steps written in capital letters** — and a page with nine warnings has none, because a reader who steps over eight steps over the ninth.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two lines in the right order, unnumbered warning first. ⚠ Then say which of the two is about a person and which about the thing.'));
out.push(PHRASE_CARD(['a warning goes before its step', 'not numbered', 'about a person', 'about the thing', 'nine warnings is none', 'a note for the inquiry']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** warnings or cautions at your work. Say which it is, where it is, and where it should be.'));
out.push(table(['The text', 'Warning or caution?', 'Where it is', 'Where it should be'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The text is _______. It is a _______ because it is about _______. It is printed _______ and it should be _______._'));
out.push(p('**Listener task:** count the warnings in the room that are printed after their step. ⚠ Then count how many pages have more than three — and ask what happens to the ninth.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a numbered warning and a caution written as a warning. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**THE PRESS INSTRUCTION — THE WARNINGS, RE-SORTED. 28 March. N. Mansour.**',
  '**Version 1, as it has stood since 2019 — nine warnings.** _WARNING: wear gloves. WARNING: do not touch the plate. WARNING: do not overload the bench. WARNING: do not lower the platen with the guard raised. WARNING: keep the area clear. WARNING: do not use a damaged stencil. WARNING: do not leave the press switched on. WARNING: report all faults. WARNING: do not run without the stencil seated._',
  '⚠ **What the nine are, when they are sorted.** ⚠ **One is about a hand**: the platen and the guard. ⚠ **Two are about money**: a damaged stencil and running without the stencil seated, both of which mark the platen face. ⚠ **Three are steps in capital letters**: gloves, clear the area, switch off. ⚠ **And three are good practice with no consequence attached at all**: do not touch the plate, do not overload the bench, report all faults.',
  '**Version 2 — one warning, two cautions, three steps, and three lines deleted.**',
  table(['', 'The line'], [
    ['⚠ **WARNING**', '⚠ **Do not lower the platen with the guard raised.** _(above step 7, unnumbered)_'],
    ['**CAUTION**', 'Do not run the press without the stencil seated, or the platen face will be marked. _(above step 6)_'],
    ['**CAUTION**', 'Do not use a stencil with a damaged edge; it marks the platen. _(above step 5)_'],
    ['steps', '**1** put on the gloves · **12** clear the bench · **13** switch off at the wall'],
    ['⚠ **deleted**', '⚠ **do not touch the plate · do not overload the bench · report all faults**'],
  ], [1.3, 5]),
  '⚠ **Why the three were deleted and not demoted.** ⚠ *Do not touch the plate* has no consequence on it and no step it belongs to; *do not overload the bench* gives no figure; ⚠ *report all faults* is a sentence everybody agrees with and nobody acts on. **A line that cannot be obeyed or disobeyed is not an instruction.**',
  '⚠ **And the one that matters is now the only warning on the page.** ⚠ **A reader at two in the morning now has one line in that weight to step over instead of nine** — and it is the one about a hand.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the nine were about a person?'));
out.push(item('2', 'What happened to the three that became steps?'));
out.push(item('3', 'Why were three lines deleted rather than demoted?'));
out.push(box('Writer\'s box', [
  '**The warnings re-sorted — four parts:** **version 1 as it stands, with the count** → ⚠ **what they are when sorted: a hand · money · steps in capitals · good practice with no consequence** → **version 2, with each line placed** → ⚠ **why some were deleted and not demoted.**',
  '⚠ **Sort by consequence and not by seriousness of tone.** ⚠ **A hand, money, a step, or nothing** — and the fourth category is bigger than anybody expects.',
  '⚠ **Turn the steps-in-capitals into steps.** *Put on the gloves* is step 1; *switch off at the wall* is step 13. ⚠ **A thing that must be done is a step, and printing it as a warning removes it from the sequence where it would actually be done.**',
  '⚠ **Delete the lines that cannot be obeyed or disobeyed.** ⚠ *Report all faults* is a sentence everybody agrees with and nobody acts on; *do not overload the bench* gives no figure. **A line that cannot be obeyed or disobeyed is not an instruction**, and leaving it in costs the page its authority.',
  '⚠ **Put each surviving line above the step it conditions**, and name the step: *above step 7, unnumbered.* ⚠ A warning with no step attached will migrate to the top of the page and be read once, on the first day.',
  '⚠ **And state the gain in the reader\'s terms.** ⚠ *A reader at two in the morning now has one line in that weight to step over instead of nine.* **That sentence is what justifies deleting six lines from a safety page**, which otherwise looks like negligence.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Re-sort the warnings on a page at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE WARNINGS, RE-SORTED. ______________. ______________.**   **Version 1, as it stands — ______________ warnings.** _______________________________   ⚠ **What they are when sorted.** ⚠ ______________ about a person. ⚠ ______________ about money. ⚠ ______________ are steps in capital letters. ⚠ **And ______________ are good practice with no consequence attached.**   **Version 2 — ______________ warning, ______________ cautions, ______________ steps, ______________ deleted.**   ⚠ **WARNING** | ⚠ **______________** _(above step ______________, unnumbered)_   **CAUTION** | ______________ _(above step ______________)_   steps | ______________   ⚠ **deleted** | ⚠ **______________**   ⚠ **Why they were deleted and not demoted.** ______________. ⚠ A line that cannot be obeyed or disobeyed is not an instruction.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be alone at two in the morning** — then ask one question: **how many lines in that weight do I have to step over?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The nine sorted by consequence, with counts', ''],
  ['Steps-in-capitals turned into numbered steps', ''],
  ['Lines with no consequence deleted, not demoted', ''],
  ['Every surviving line placed above a named step', ''],
  ['The gain stated in the reader\'s terms', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their surviving warning. The class says whether it is about a person.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the warnings on a page at your work (**140 to 180 words**). Say how many there are, how many are about a person, and what the rest really are.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every warning before its step?_   ? _how many of them are about a person?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many were fewer than a third of the warnings about a person? Usually all three — ⚠ **and in all three nobody could say who had added the others or when.**'));
out.push(box('Homework', ['Write your final text. Then sort the warnings on one page at your work by consequence, and move the one about a person above its step (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.3 =======================
out.push(pb());
out.push(h2('20.3  The step that cannot be got wrong'));
out.push(p('**Function:** marking the one step everything depends on   ·   **Grammar:** emphasis in an instruction — _this step · and nothing else · before anything else_   ·   **Pronunciation:** the marked step read aloud at half speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a job at your work with several steps. Which one, done wrong, cannot be put right afterwards?'));
out.push(p('**b**  Which of these is marked? _4 Check the code. · **4 Check the code against the order. This step cannot be corrected later: once the stencil is applied the carton is scrap.**_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which step does Nour mark, and why?   **A** the sealing   **B** the code check, because after it the carton cannot be put right   **C** the weighing'));
out.push(p('**b**  Listen again. **1** How many steps on the page can be corrected afterwards? **2** What does Mr Attar say about a page with four marked steps?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  "Which of these cannot be put right?"', [
  ['Mr Attar', 'Thirteen steps. Which of them, done wrong, cannot be put right afterwards?'],
  ['Nour', 'Most of them can. A label can be peeled off. A weight can be re-marked. The packing list can be reprinted.'],
  ['Mr Attar', 'And the ones that cannot?'],
  ['Nour', '⚠ **Step 5. Once the stencil is applied the ink is in the board, and a carton marked with the wrong code is scrap.** We have nine of them in the store from January to prove it.'],
  ['Mr Attar', 'Anything else?'],
  ['Nour', '…⚠ **Step 11, the seal.** Once it is sealed the carton can be opened, but then the seal is broken and the whole point of a seal is that it has not been.'],
  ['Mr Attar', 'So two of thirteen. ⚠ **Mark those two and nothing else.**'],
  ['Nour', 'I was going to mark four. The count as well, and the packing list.'],
  ['Mr Attar', '⚠ **Both of those can be corrected in two minutes by anybody.** ⚠ And a page with four marked steps has none: **a reader at two in the morning gives extra attention about twice in a shift, and if you ask for it four times they will choose which two.**'],
  ['Nour', 'They will choose the wrong two.'],
  ['Mr Attar', '⚠ **They will choose the two that look difficult, and the dangerous step is not the difficult one.** Applying a stencil is easy. ⚠ **That is exactly why it gets done without looking.**'],
  ['Nour', 'And what do I write next to the two?'],
  ['Mr Attar', '⚠ **Not *be careful*. Write what cannot be undone.** *This step cannot be corrected later: once the stencil is applied the carton is scrap.* ⚠ **A reason is obeyed and an instruction to be careful is not**, because *careful* is not a thing anybody can do on purpose.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Marking the step that cannot be got wrong**',
  table(['', 'What to write'], [
    ['**the test**', '⚠ **which step, done wrong, cannot be put right afterwards?**'],
    ['**how many**', '⚠ **two at most on a page of thirteen**'],
    ['⚠ **what to write beside it**', '⚠ **what cannot be undone** — *once the stencil is applied the carton is scrap*'],
    ['~~be careful~~', '⚠ ***careful* is not a thing anybody can do on purpose**'],
    ['**the trap**', '⚠ **the dangerous step is not the difficult one**'],
  ], [1.6, 4.2]),
  '⚠ **The test is one question: which step, done wrong, cannot be put right afterwards?** A label peels off, a weight is re-marked, a list is reprinted — ⚠ **and ink in board is scrap.**',
  '⚠ **Two marked steps at most, on a page of thirteen.** ⚠ *A reader at two in the morning gives extra attention about twice in a shift, and if you ask for it four times they will choose which two* — ⚠ **and they will choose the two that look difficult.**',
  '⚠ **The dangerous step is not the difficult one.** ⚠ *Applying a stencil is easy. That is exactly why it gets done without looking.* **Difficulty attracts attention by itself and a bench page does not need to add any.**',
  '⚠ **Write what cannot be undone, not *be careful*.** ⚠ *This step cannot be corrected later: once the stencil is applied the carton is scrap.* **A reason is obeyed; an instruction to be careful is not**, because it names no action.',
  '⚠ **And where you have evidence, cite it.** *We have nine of them in the store from January to prove it.* ⚠ **A marked step with a real example behind it is obeyed by somebody who has seen the example.**',
  '**Practise:** Take a job of yours with several steps. Find the one that cannot be undone, and write the reason beside it in one clause.',
  '**Useful phrases:**  which step cannot be put right?  ·  this step cannot be corrected later  ·  once X, the Y is scrap  ·  two at most  ·  not *be careful*  ·  the dangerous step is the easy one',
  '**Pronunciation – the marked step at half speed.** 🔊 **Track 20.6** Listen: _step five. Check the code against the order. This step cannot be corrected later: once the stencil is applied, the carton is SCRAP._ ⚠ Read at about half the speed of the other steps, and the last word stressed. **A marked step is read differently and should be printed differently.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A lists the steps; B asks which cannot be put right. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ steps. Which of them, done wrong, cannot be put right afterwards?'],
  ['A', 'Most can. __________ can be __________. __________ can be __________.'],
  ['B', 'And the ones that cannot?'],
  ['A', '⚠ Step __________. Once __________, __________.'],
  ['B', 'Anything else?'],
  ['A', '…⚠ Step __________, because __________.'],
  ['B', '⚠ Then mark those two and nothing else. And what goes beside them — not *be careful*?'],
]));
out.push(table(['Role card 1 — the thirteen steps', 'Role card 2 — four marked steps'], [[
  'Thirteen steps, two that cannot be undone: ⚠ **step 5, the stencil — ink in board, and nine scrap cartons in the store to prove it**; and ⚠ **step 11, the seal — it can be opened and then the seal is broken, which is the whole point of a seal.** The other eleven can be corrected in minutes.',
  'A wants to mark four: the stencil, the seal, the count and the packing list. ⚠ B\'s job is to refuse two of them — **the count and the list can be corrected in two minutes by anybody** — and to say why: ⚠ **a page with four marked steps has none, and the reader will choose the two that look difficult.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two marked steps and the reason beside each. ⚠ Then say which of the unmarked steps looks hardest, and why that is not the test.'));
out.push(PHRASE_CARD(['which cannot be put right?', 'this cannot be corrected later', 'once X, the Y is scrap', 'two at most', 'not "be careful"', 'the easy step is the dangerous one']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a job of yours with **six** steps or more. Say which can be corrected and which cannot, and write the reason.'));
out.push(table(['Step', 'Can it be corrected afterwards?', 'How', 'If not — what cannot be undone'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 1.3, 1.4, 2.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my _______ steps, _______ cannot be put right. The reason beside it is _______. The step that looks hardest is _______, and it can be corrected in _______._'));
out.push(p('**Listener task:** count the pages in the room with more than two marked steps. ⚠ Then ask, for each, which two a reader would actually choose.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _step 5: be very careful_ and a page with six marked steps. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE THIRTEEN STEPS — WHICH CAN BE UNDONE. 29 March. N. Mansour. ⚠ Two cannot. Eleven can, and ten of those in under five minutes.**',
  table(['Step', 'What it is', 'Undone how', 'Minutes'], [
    ['1–3', 'gloves, bench cleared, stencil selected', 'start again', '1'],
    ['4', 'carton made up', 'flatten and re-make', '2'],
    ['⚠ **5**', '⚠ **the stencil applied**', '⚠ **it cannot — ink is in the board**', '⚠ **the carton is scrap**'],
    ['6–8', 'weight marked, label applied, list entered', 'peel, re-mark, reprint', '2–4'],
    ['9', 'count against the order', 'count again', '4'],
    ['10', 'contents packed', 'unpack', '6'],
    ['⚠ **11**', '⚠ **the carton sealed**', '⚠ **it can be opened — and then the seal is broken, which is the point of a seal**', '⚠ **the seal is spent**'],
    ['12–13', 'bench cleared, press off', '—', '1'],
  ], [0.7, 2, 2.4, 1.1]),
  '⚠ **Only two steps of thirteen are irreversible, and neither of them is difficult.** Applying a stencil takes about eight seconds and sealing a carton takes four. ⚠ **The two longest steps on the page — packing and counting — are both completely reversible**, and they are the two a reader would mark if nobody told them the test.',
  '⚠ **What goes beside the two.** Step 5: *this step cannot be corrected later: once the stencil is applied the carton is scrap. There are nine scrap cartons in the fourth store from January.* ⚠ Step 11: *do not seal until step 9 is signed; a broken seal cannot be replaced and the carton must be re-made.*',
  '⚠ **And the ordering consequence.** Because step 5 cannot be undone, ⚠ **it has been moved from fifth to ninth.** The code check now happens after the count and the packing, ⚠ **so that nothing irreversible is done to a carton until everything reversible has been checked** — which is one sentence of thought and it saves a carton every time somebody miscounts.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the thirteen steps are irreversible, and are they difficult?'));
out.push(item('2', 'Which steps would a reader mark without being told the test?'));
out.push(item('3', 'What ordering change follows from step 5 being irreversible?'));
out.push(box('Writer\'s box', [
  '**Which steps can be undone — four parts:** **a table: *step · what it is · undone how · minutes*** → ⚠ **how many are irreversible, and whether they are difficult** → **what goes beside each of them** → ⚠ **the ordering consequence.**',
  '⚠ **Put a *minutes* column in.** ⚠ *Ten of the eleven in under five minutes* is the figure that makes the two marked steps stand out, **and it is also the figure that stops a reader panicking about the other eleven.**',
  '⚠ **Note that the irreversible steps are the quick ones.** Eight seconds and four seconds. ⚠ **Say so**, because it is counter-intuitive and it is the reason the marking is needed at all.',
  '⚠ **Write the reason and the evidence beside each marked step.** *There are nine scrap cartons in the fourth store from January.* ⚠ **A marked step with a real example behind it is obeyed; one with an adjective is not.**',
  '⚠ **And then re-order the page.** ⚠ *Nothing irreversible is done to a carton until everything reversible has been checked.* **That is the whole output of this cycle: a sentence of thought that moves one step and saves a carton every time somebody miscounts.**',
  '⚠ **Tie an irreversible step to a signed one.** *Do not seal until step 9 is signed.* It converts a warning into a prerequisite, which is checkable by somebody who was not there.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *which steps can be undone* for a job at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — WHICH CAN BE UNDONE. ______________. ______________. ⚠ ______________ cannot.**   ______________ | ______________ | ______________ | ______________   ⚠ **______________** | ⚠ **______________** | ⚠ **it cannot — ______________** | ⚠ **______________**   ______________ | ______________ | ______________ | ______________   ⚠ **Only ______________ steps of ______________ are irreversible, and neither is difficult.** ______________ takes about ______________. ⚠ The two longest steps are both reversible, and they are the ones a reader would mark.   ⚠ **What goes beside them.** ______________: *this step cannot be corrected later: ______________. ______________.*   ⚠ **And the ordering consequence.** Because ______________ cannot be undone, ⚠ **it has been moved from ______________ to ______________**, so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these steps ruins the article?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *minutes* column for the reversible steps', ''],
  ['No more than two irreversible steps marked', ''],
  ['The reason and the evidence beside each', ''],
  ['Nothing that says *be careful*', ''],
  ['An ordering consequence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their irreversible step and its reason. The class says how long the step takes to do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an irreversible step at your work (**140 to 180 words**). Say what it is, how long it takes, how often it has gone wrong, and whether the page marks it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the reason given, rather than *be careful*?_   ? _how long does the irreversible step take, and is it the hardest one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the irreversible step one of the quickest on the page? Usually all three — ⚠ **and in all three the page marks something else, or nothing.**'));
out.push(box('Homework', ['Write your final text. Then take a page at your work, find the step that cannot be undone, and write the reason beside it with a real example (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.4 =======================
out.push(pb());
out.push(h2('20.4  So that nobody shortens it'));
out.push(p('**Function:** saying what a step is for   ·   **Grammar:** _so that · in order to · to prevent_   ·   **Pronunciation:** the purpose clause said as part of the step, not after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a step at your work that people shorten. Say what it is for.'));
out.push(p('**b**  Complete: _Hold for four seconds _______ the ink takes. · Count before loading _______ prevent a short load. · Sign after the count _______ the signature means something._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which step has been shortened, and by how much?   **A** the sealing   **B** the four-second hold, to about one   **C** the count'));
out.push(p('**b**  Listen again. **1** Why did the night man shorten it? **2** What does Abu Yasser say a step with no purpose on it invites?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  "Nobody shortens a step they understand"', [
  ['Abu Yasser', 'The second night, the marks were faint on about twenty cartons.'],
  ['Nour', 'Step 7 says hold the platen for four seconds.'],
  ['Abu Yasser', 'He held it for about one. I watched him do three.'],
  ['Nour', 'Did he not read the step?'],
  ['Abu Yasser', 'He read it and he thought four seconds was somebody being cautious. ⚠ **He has pressed things all his life and one second is enough for everything he has ever pressed.**'],
  ['Nour', 'And four seconds is what the ink needs.'],
  ['Abu Yasser', '⚠ **Four seconds is what the ink needs on board of this thickness, and nothing on the page says so.** ⚠ *Hold for four seconds* with no reason on it is a number somebody chose, and a man at two in the morning with ninety cartons to do will round it down.'],
  ['Nour', 'So the step should say why.'],
  ['Abu Yasser', '⚠ *Lower the platen and hold for four seconds, **so that the ink penetrates the board**; a shorter hold gives a mark that rubs off in transit.* ⚠ **Nobody shortens a step they understand**, and nobody understands a step with a bare number in it.'],
  ['Nour', 'Should every step have a purpose on it?'],
  ['Abu Yasser', '⚠ **No, and that is the other half.** *Put on the gloves* needs no reason. ⚠ **Put a reason on the steps people shorten** — and you know which ones those are, because they are the ones with a time or a count in them.'],
  ['Nour', 'The four seconds, the count, and the fourteen days.'],
  ['Abu Yasser', '⚠ **Every number on a page is a step somebody will round down.** ⚠ **A number with a reason behind it is an instruction; a number on its own is a suggestion in disguise** — and the man last night was not being lazy, he was being sensible about a number nobody had explained.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what a step is for**',
  table(['Form', 'Example'], [
    ['**so that** + clause', 'Hold for four seconds **so that** the ink penetrates the board.'],
    ['**in order to** + verb', 'Count before loading **in order to** catch a short load.'],
    ['**to prevent** + noun', 'Sign after the count **to prevent** a signature certifying a count that did not happen.'],
    ['⚠ **and the consequence**', '⚠ **a shorter hold gives a mark that rubs off in transit**'],
    ['⚠ **which steps need one**', '⚠ **the ones with a time or a count in them**'],
  ], [1.9, 3.1]),
  '⚠ **Nobody shortens a step they understand, and nobody understands a step with a bare number in it.** ⚠ *Hold for four seconds* is a number somebody chose; **a man at two in the morning with ninety cartons to do will round it down**, and he will not be being lazy.',
  '⚠ **Every number on a page is a step somebody will round down.** ⚠ **A number with a reason behind it is an instruction; a number on its own is a suggestion in disguise.**',
  '⚠ **Not every step needs a purpose clause.** *Put on the gloves* needs none. ⚠ **Put one on the steps people shorten — and those are the ones with a time or a count in them.**',
  '⚠ **Add the consequence as well as the purpose.** *…so that the ink penetrates the board; a shorter hold gives a mark that rubs off in transit.* ⚠ **The purpose explains the step and the consequence makes it matter.**',
  '⚠ **And believe the person who shortened it.** ⚠ *He has pressed things all his life and one second is enough for everything he has ever pressed.* **Experience is why a step gets shortened, and a page that treats it as carelessness will be shortened again.**',
  '**Practise:** Put a purpose and a consequence on each. 1 hold for four seconds 2 count before loading 3 sign after the count 4 hold the price fourteen days 5 wait two minutes before moving the carton',
  '**Useful phrases:**  so that the ink penetrates  ·  in order to catch a short load  ·  to prevent a signature that certifies nothing  ·  a shorter hold gives …  ·  every number will be rounded down  ·  he was being sensible, not lazy',
  '**Pronunciation – the purpose inside the step.** 🔊 **Track 20.8** Listen: _hold for four seconds so that the ink penetrates the board_ — ⚠ **one breath, no pause before *so that***. **A pause makes the purpose sound like an afterthought, and an afterthought can be dropped.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a shortened step; B adds the purpose and the consequence. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ was wrong on about __________.'],
  ['B', 'Step __________ says __________.'],
  ['A', '__________ did about __________ instead. I watched.'],
  ['B', 'Did __________ not read the step?'],
  ['A', '⚠ __________ read it and thought __________ was somebody being cautious.'],
  ['B', 'And __________ is what __________ needs.'],
  ['A', '⚠ So the step should say: *__________, so that __________; __________ gives __________.*'],
]));
out.push(table(['Role card 1 — the four seconds', 'Role card 2 — which steps need a reason'], [[
  'About twenty faint marks on the second night. ⚠ **Step 7 says four seconds; he held about one**, because one second is enough for everything he has ever pressed. ⚠ **The repair:** *hold for four seconds so that the ink penetrates the board; a shorter hold gives a mark that rubs off in transit.*',
  'A wants to put a purpose on all thirteen steps. ⚠ B\'s job is to refuse: *put on the gloves* needs no reason. ⚠ **Find the steps with a time or a count in them** — four seconds, count against the order, two minutes before moving — ⚠ **and put a reason only on those, because every number is a step somebody will round down.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the step as it was, the step with its purpose and consequence, and the reason the shortening made sense to the person who did it.'));
out.push(PHRASE_CARD(['so that the ink penetrates', 'in order to catch a short load', 'a shorter hold gives …', 'every number gets rounded down', 'the steps with a number in them', 'sensible, not lazy']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **five** steps at your work with a number in them. Write the purpose and the consequence for each.'));
out.push(table(['The step', 'The number', 'So that…', 'A shorter / smaller one gives…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 0.8, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The step is _______, with the number _______. It is so that _______, and a shorter one gives _______._'));
out.push(p('**Listener task:** count the numbers in the room that have no reason attached. ⚠ Then ask which of them somebody has already rounded down.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _hold for four seconds for the ink_ and a purpose clause on all thirteen steps. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE NUMBERS ON THE PAGE, AND WHAT EACH IS FOR. 30 March. N. Mansour. ⚠ Five numbers. Two had a reason and three did not.**',
  table(['The number', 'In which step', 'What it is for', 'What a smaller one gives'], [
    ['**four seconds**', '7, the platen hold', '⚠ **the ink penetrates board of this thickness**', '⚠ **a mark that rubs off in transit — about twenty on the second night**'],
    ['**twenty-three kilos**', '10, packing', 'the carton is a two-person lift above about eighteen', '⚠ **a man alone will lift it, and did**'],
    ['**two minutes**', '11, before moving after sealing', '⚠ **the seal adhesive sets**', 'a seal that lifts at a corner in transit and looks tampered with'],
    ['**one hundred**', 'the order quantity', 'the customer ordered a hundred', '—'],
    ['**thirty**', 'the carton count per pallet', '⚠ **nobody knows** — it is what fits', '⚠ **nothing, as far as anybody can tell**'],
  ], [1.1, 1.4, 2.1, 2.4]),
  '⚠ **Three of the five numbers had no reason on the page and two of the three had already been rounded down** — the four seconds to about one, and the twenty-three kilos lifted by one man. ⚠ **Neither of those was carelessness: a man who has pressed things all his life knows one second is enough, and a man who can lift twenty-three kilos lifts it.**',
  '⚠ **The fifth number is the interesting one.** Thirty cartons a pallet is what fits, and nobody can say why it is not twenty-eight or thirty-two. ⚠ **I have written *this is what fits; it is not a specification* beside it**, because a number that looks like a specification and is not will be defended by somebody one day.',
  '⚠ **And the twenty-three kilos has produced a step that was not there.** The page now says: ⚠ ***a full carton weighs about 23 kg and is a two-person lift. If you are alone, pack to 10 and close; the remaining contents go in a second carton marked 2 of 2.*** **That is not a warning and it is not a caution; it is a method for the situation the page did not cover.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many numbers had no reason, and how many had been rounded down?'));
out.push(item('2', 'What is written beside the thirty, and why?'));
out.push(item('3', 'What new step has come out of the twenty-three kilos?'));
out.push(box('Writer\'s box', [
  '**The numbers on the page — four parts:** **a table: *the number · in which step · what it is for · what a smaller one gives*** → ⚠ **how many had no reason and how many had been rounded down** → ⚠ **the number that is not a specification** → **the step that comes out of a number.**',
  '⚠ **List the numbers first and the steps second.** ⚠ **A page has fewer numbers than steps and the numbers are where it fails** — four seconds, twenty-three kilos, two minutes, thirty a pallet.',
  '⚠ **Say which have been rounded down already, and refuse to call it carelessness.** ⚠ *A man who has pressed things all his life knows one second is enough.* **A page that treats the shortening as a fault will be shortened again.**',
  '⚠ **Mark the number that is not a specification.** ⚠ *This is what fits; it is not a specification.* **A number that looks like one and is not will be defended by somebody one day**, and that is more expensive than the number itself.',
  '⚠ **And convert a number into a method where you can.** ⚠ *If you are alone, pack to 10 and close; the remaining contents go in a second carton marked 2 of 2.* **That is not a warning and not a caution: it is a method for the situation the page did not cover** — which is 20.5 arriving one cycle early.',
  '⚠ **Give the evidence in the consequence column.** *About twenty on the second night.* ⚠ A consequence that has already happened is obeyed; one that might happen is weighed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the numbers on the page* for a job at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE NUMBERS ON THE PAGE, AND WHAT EACH IS FOR. ______________. ______________. ⚠ ______________ numbers. ______________ had a reason and ______________ did not.**   **______________** | ______________ | ⚠ **______________** | ⚠ **______________**   **______________** | ______________ | ______________ | ⚠ **______________**   **______________** | ______________ | ⚠ **nobody knows — ______________** | ⚠ **______________**   ⚠ **______________ of the ______________ had no reason and ______________ had already been rounded down.** ⚠ Neither was carelessness: ______________.   ⚠ **The number that is not a specification.** ______________, so I have written ______________ beside it, because ______________.   ⚠ **And the step that has come out of it.** The page now says: ⚠ *______________.*'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these numbers would I round down at two in the morning?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers listed, not the steps', ''],
  ['A purpose for each, or *nobody knows*', ''],
  ['The consequence of a smaller one, with evidence where there is any', ''],
  ['The number that is not a specification, marked', ''],
  ['A step that comes out of a number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *nobody knows* number. The class says whether it should be changed, kept, or marked as *what fits*.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a number at your work that somebody rounded down (**140 to 180 words**). Say what the number was for, why the shortening made sense, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the step say what it is for?_   ? _why did the shortening make sense to the person who did it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the shortening make perfect sense from where the person was standing? Usually all three — ⚠ **and in all three the page had a bare number on it.**'));
out.push(box('Homework', ['Write your final text. Then find every number on one page at your work and write what each is for, or *nobody knows* (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.5 =======================
out.push(pb());
out.push(h2('20.5  Unless, and in which case'));
out.push(p('**Function:** writing the exception   ·   **Grammar:** _unless · in which case · if you cannot, then_   ·   **Pronunciation:** the two branches heard as two'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a step at your work that cannot always be done. Say what somebody does instead, and whether it is written anywhere.'));
out.push(p('**b**  Complete: _Seal the carton _______ the count is unsigned, _______ leave it open and write *not counted*. · Do not load _______ the gate sheet is signed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the night man do when the stencil set was wrong?   **A** stopped   **B** marked by hand, because the page did not cover it   **C** telephoned'));
out.push(p('**b**  Listen again. **1** Why did he mark by hand? **2** What does Nour say a page without exceptions produces?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  "He did the only thing the page left him"', [
  ['Abu Yasser', 'Nine of the second night\'s cartons are marked by hand.'],
  ['Nour', 'By hand?'],
  ['Abu Yasser', 'In marker pen, in his own writing, and neatly. ⚠ **The stencil for the second code had been taken to Baghdad Street — the second store, which opened on 8 June — and he could not find it.**'],
  ['Nour', 'And he could not telephone anybody, because it was half past two.'],
  ['Abu Yasser', '⚠ So he did the only thing the page left him. **The page says *apply the stencil*, and there was no stencil, and the page says nothing at all about what happens then.**'],
  ['Nour', 'He should have stopped.'],
  ['Abu Yasser', '⚠ **Why?** He had ninety cartons to do and a vessel on the 14th, and nothing on the page says stopping is allowed. ⚠ **A page that does not say *stop* is a page that forbids stopping**, to a man who has been given a hundred cartons and a night.'],
  ['Nour', 'So the exception has to be written.'],
  ['Abu Yasser', '⚠ **Every step that can fail needs its *unless*, and the *unless* needs an *in which case*.** *Apply the stencil, **unless** the stencil for that code is not in the press room, **in which case** stop, leave the cartons flat and write the number on the handover note.*'],
  ['Nour', 'And the nine hand-marked ones?'],
  ['Abu Yasser', '⚠ **They are beautiful and they are useless.** A hand-written code is not a code for a customs purpose; it has to be the stencil. ⚠ **So nine cartons are scrap, and the only thing he did wrong was something the page told him to do.**'],
  ['Nour', 'How many steps need an *unless*?'],
  ['Abu Yasser', '⚠ **Ask one question of each step: what will be missing at two in the morning?** ⚠ **A stencil, a signature, a sheet of labels, a second person.** **Four steps of thirteen, and all four failed on one of the two nights.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_unless_ and _in which case_ — the two branches**',
  table(['Form', 'Example'], [
    ['**unless** + clause', 'Apply the stencil, **unless** the stencil for that code is not in the press room,'],
    ['**in which case** + instruction', '**in which case** stop, leave the cartons flat and write the number on the handover note.'],
    ['**if you cannot…, then**', '**If you cannot** find the stencil, **then** stop.'],
    ['⚠ **the stop is permission**', '⚠ **a page that does not say *stop* forbids stopping**'],
    ['⚠ **the question to ask**', '⚠ **what will be missing at two in the morning?**'],
  ], [1.9, 3.3]),
  '⚠ **A page that does not say *stop* is a page that forbids stopping**, to somebody who has been given a hundred cartons and a night. ⚠ **He did the only thing the page left him** — and he did it neatly.',
  '⚠ **Every step that can fail needs its *unless*, and every *unless* needs an *in which case*.** An *unless* with no instruction after it is a hole with a label on it.',
  '⚠ **The question to ask of each step is one line: what will be missing at two in the morning?** ⚠ **A stencil, a signature, a sheet of labels, a second person** — four steps of thirteen, **and all four failed on one of the two nights.**',
  '⚠ **The *in which case* must contain a stop, a place and a record.** *Stop, leave the cartons flat, and write the number on the handover note.* ⚠ **Without the record the next shift finds work in an unknown state.**',
  '⚠ **And the improvisation will be good work.** ⚠ *They are beautiful and they are useless* — nine neat hand-marked cartons that are scrap for a customs purpose. **Skill without permission produces competent waste.**',
  '**Practise:** Write the *unless* and the *in which case* for each. 1 the stencil is missing 2 the count is unsigned 3 the labels run out 4 the carton is over eighteen kilos and you are alone 5 the generator goes off early',
  '**Useful phrases:**  unless …, in which case …  ·  if you cannot …, then stop  ·  leave it flat and write the number  ·  what will be missing at two in the morning?  ·  a page that does not say stop forbids stopping  ·  beautiful and useless',
  '**Pronunciation – two branches heard as two.** 🔊 **Track 20.10** Listen: _apply the stencil // unless the stencil is not in the press room // in which case STOP._ ⚠ Three groups, and *stop* stressed and alone. **The branch has to be audible or it is read as part of the first instruction.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports an improvisation; B writes the *unless* and the *in which case*. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ of the __________ are __________.'],
  ['B', 'How?'],
  ['A', '__________, neatly. ⚠ __________ had been __________ and __________ could not find it.'],
  ['B', 'And could not telephone anybody, because __________.'],
  ['A', '⚠ So __________ did the only thing the page left. **The page says __________ and says nothing about __________.**'],
  ['B', '__________ should have stopped.'],
  ['A', '⚠ Why? ______________, and nothing on the page says stopping is allowed.'],
]));
out.push(table(['Role card 1 — the nine hand-marked cartons', 'Role card 2 — what will be missing at two'], [[
  'The stencil for the second code was at the other site. ⚠ **He marked nine by hand, neatly, and they are scrap** because a hand-written code is not a code for a customs purpose. ⚠ **The *unless*:** *unless the stencil for that code is not in the press room, in which case stop, leave the cartons flat and write the number on the handover note.*',
  'Go through a page of A\'s and ask of every step: ⚠ ***what will be missing at two in the morning?*** ⚠ **The answers are always from the same short list — a tool, a signature, a consumable, a second person** — and each one needs an *unless* with a stop, a place and a record in it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the step, the *unless* and the *in which case*. ⚠ Then say whether the improvisation was skilful, and whether that made it better or worse.'));
out.push(PHRASE_CARD(['unless …, in which case …', 'if you cannot, then stop', 'leave it flat and write the number', 'what will be missing at two?', 'no stop means no stopping', 'beautiful and useless']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a page of yours. Ask of **five** steps what will be missing, and write the two branches.'));
out.push(table(['The step', 'What will be missing', 'Unless…', 'In which case…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.3, 1.6, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Step _______ needs an *unless*, because _______ will be missing. The branch is: unless _______, in which case _______._'));
out.push(p('**Listener task:** count the *in which case* branches in the room that contain a stop, a place and a record. ⚠ Then ask what the ones without a record leave the next shift.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _unless the stencil is missing_ with nothing after it, and _if the stencil is missing, use your judgement_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FOUR THINGS THAT WENT MISSING, AND THE BRANCHES. 31 March. N. Mansour. ⚠ All four happened on one of two nights.**',
  table(['The step', 'What was missing', 'What he did', 'The branch, now written'], [
    ['5, the stencil', '⚠ **the second code\'s stencil, at the other site**', '⚠ **marked nine by hand, neatly — all scrap**', 'unless it is not in the press room, **in which case stop, leave the cartons flat and write the number on the handover note**'],
    ['9, the count signature', 'nobody to countersign at 02.00', 'signed both lines himself', 'unless you are alone, **in which case sign once and write *alone* beside it; it is counted again in the morning**'],
    ['6, the labels', 'the label roll ran out at carton 61', '⚠ **cut labels from a sheet with scissors**', 'unless the roll runs out, **in which case stop at the last full carton and write the number**'],
    ['10, the lift', 'a second person, at 23 kilos', '⚠ **lifted them alone, all sixty-one**', 'if you are alone, **pack to 10 and close; the rest goes in a carton marked 2 of 2**'],
  ], [1.2, 1.6, 1.6, 2.6]),
  '⚠ **Four steps, four things missing, and four competent improvisations.** Hand-marking, double-signing, scissors and lifting alone. ⚠ **Every one of the four was done well and three of the four produced work we cannot use**: the nine cartons are scrap, the double signature certifies a count nobody witnessed, and the cut labels are a quarter of a millimetre out and will not read on a scanner.',
  '⚠ **The fourth one produced nothing we cannot use and it is the one that frightens me.** He lifted sixty-one cartons of twenty-three kilos alone, between one and four in the morning, ⚠ **and the work is perfect.** **There is no defect to find, which means nothing would ever have told us.**',
  '⚠ **And the page now has four *unless* branches, each with a stop, a place and a record.** ⚠ **The record is the part I had never thought about**: every branch ends *write the number on the handover note*, so that the morning shift finds work in a known state instead of a tidy one.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What were the four improvisations, and how many produced unusable work?'));
out.push(item('2', 'Which one frightens the writer most, and why?'));
out.push(item('3', 'What does every branch end with, and what is it for?'));
out.push(box('Writer\'s box', [
  '**The things that went missing — four parts:** **a table: *the step · what was missing · what he did · the branch, now written*** → ⚠ **how many improvisations produced unusable work** → ⚠ **the one that produced perfect work** → **what every branch ends with.**',
  '⚠ **Record what the person actually did, in their own terms, and call it competent.** ⚠ *Hand-marking, double-signing, scissors and lifting alone* — **four competent improvisations**, and a page that calls them anything else will produce four more.',
  '⚠ **Count the ones that produced unusable work.** ⚠ *Three of the four* — scrap, an unwitnessed signature, labels a quarter of a millimetre out. **The figure is the argument for the branches.**',
  '⚠ **And name the one that produced perfect work.** ⚠ *There is no defect to find, which means nothing would ever have told us.* **The improvisation that works is the dangerous one**, because it becomes the method and leaves no trace.',
  '⚠ **Every branch ends with a record.** ⚠ *Write the number on the handover note*, so that **the morning shift finds work in a known state instead of a tidy one.** A branch with a stop and no record hands over a mystery.',
  '⚠ **Three parts to every *in which case*: a stop, a place and a record.** Stop; leave the cartons flat; write the number. ⚠ **The place is what stops the work being tidied away.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the things that went missing* for a job at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE THINGS THAT WENT MISSING, AND THE BRANCHES. ______________. ______________.**   ______________ | ⚠ **______________** | ⚠ **______________** | unless ______________, **in which case ______________, ______________ and write ______________**   ______________ | ______________ | ______________ | unless ______________, **in which case ______________**   ______________ | ______________ | ⚠ **______________** | if ______________, **______________**   ⚠ **______________ steps, ______________ things missing, and ______________ competent improvisations.** ⚠ Every one was done well and ______________ produced work we cannot use: ______________.   ⚠ **The one that produced nothing we cannot use is the one that frightens me.** ______________, ⚠ and the work is perfect — **there is no defect to find, which means ______________.**   ⚠ **And every branch now ends with ______________**, so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what do I do when it is not there?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the person actually did, called competent', ''],
  ['How many improvisations produced unusable work', ''],
  ['The one that produced perfect work, named', ''],
  ['Every branch with a stop, a place and a record', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the improvisation that produced perfect work. The class says how anybody would ever have found out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an improvisation at your work that the page did not cover (**140 to 180 words**). Say what was missing, what was done, how good it was, and whether anybody found out.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the branch contain a stop, a place and a record?_   ? _was the improvisation good, and did that make it better or worse?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the improvisation skilful? Usually all three — ⚠ **and in the ones that worked, nobody found out, and the improvisation is now the method.**'));
out.push(box('Homework', ['Write your final text. Then ask of five steps at your work *what will be missing at two in the morning?* and write one branch with a stop, a place and a record (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.6 =======================
out.push(pb());
out.push(h2('20.6  The page I would leave on the bench'));
out.push(p('**Function:** writing the whole instruction on one page   ·   **Grammar:** the bench page — numbered steps, warnings above, branches beside, nothing else   ·   **Pronunciation:** reading a bench page aloud in two minutes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a job at your work. Say how many steps it has. Then say what else a page about it would have to carry.'));
out.push(p('**b**  Which belongs on a bench page? _why the customer matters · the thirteen steps · the specification it came from · what to do when the stencil is missing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Mr Ayoub insist on one page?   **A** paper is expensive   **B** a second page is a page somebody does not turn at two in the morning   **C** it is the house style'));
out.push(p('**b**  Listen again. **1** What does he say goes on the back? **2** What has to come off the page to fit?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  "One side of one sheet"', [
  ['Mr Ayoub', 'How long is it?'],
  ['Nour', 'Two pages. Thirteen steps, one warning, two cautions, four branches, and the specification reference.'],
  ['Mr Ayoub', '⚠ **One side of one sheet.** What comes off?'],
  ['Nour', 'Nothing can come off. Every line is needed.'],
  ['Mr Ayoub', '⚠ Then something goes on the back, and you must decide what — **because a second page is a page somebody does not turn at two in the morning.** ⚠ *They turn it on the first night and they do not turn it on the second.*'],
  ['Nour', 'The specification reference could go on the back.'],
  ['Mr Ayoub', 'What is on it?'],
  ['Nour', 'The customer\'s specification number, the revision, the date we received it, and who sent it.'],
  ['Mr Ayoub', '⚠ **Back.** Nobody at a bench needs it and anybody with a question does. ⚠ What else?'],
  ['Nour', 'The thirteen steps, the warning, the two cautions and the four branches have to be on the front.'],
  ['Mr Ayoub', 'Count the lines.'],
  ['Nour', '…Twenty-six, with the branches beside their steps rather than under them. ⚠ **And it fits, because the branches are in the right-hand column and not in the sequence.**'],
  ['Mr Ayoub', '⚠ **Then that is the page.** Steps down the left, branches down the right, the warning above its step, ⚠ **and nothing on the front that nobody needs at the bench.**'],
  ['Nour', 'And the title?'],
  ['Mr Ayoub', '⚠ **The title is the job and the date and the revision**, and the one line that tells somebody what this page is for: *for one person working alone. If two of you are here, read branch 4 anyway.* ⚠ **Put that at the top, because the page was written for a night and it will be used in a day.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The bench page — one side of one sheet**',
  table(['Where', 'What goes there'], [
    ['**the top**', 'the job, the date, the revision, ⚠ **and who the page was written for**'],
    ['**down the left**', 'the numbered steps, in the order they are done'],
    ['⚠ **down the right**', '⚠ **the branches, beside their steps and not in the sequence**'],
    ['**above a step, unnumbered**', 'the warning · the cautions'],
    ['⚠ **the back**', '⚠ **everything nobody needs at the bench** — the specification reference, the revision history, who sent it'],
  ], [1.6, 4.2]),
  '⚠ **One side of one sheet, and something goes on the back.** ⚠ **A second page is a page somebody does not turn at two in the morning** — *they turn it on the first night and they do not turn it on the second.*',
  '⚠ **Branches go in a right-hand column, beside their steps.** Put them in the sequence and the page is twice as long and the steps are no longer a sequence. ⚠ **The column is what makes one page possible.**',
  '⚠ **What goes on the back is anything nobody needs at the bench and somebody needs with a question**: the specification number, the revision, the date it was received, who sent it. ⚠ **It is not unimportant; it is not needed in the hand.**',
  '⚠ **Say at the top who the page was written for.** ⚠ *For one person working alone. If two of you are here, read branch 4 anyway.* **A page written for a night will be used in a day**, and the reader needs to know which situation it assumes.',
  '⚠ **Count the lines before you argue about the length.** Twenty-six lines fits a page; **forty does not, whatever anybody feels about it** — and the counting ends the argument in about a minute.',
  '**Practise:** Lay out a job of yours as a bench page. ⚠ Count the lines, decide what goes on the back, and put the branches in a right-hand column.',
  '**Useful phrases:**  one side of one sheet  ·  what comes off?  ·  that goes on the back  ·  branches down the right  ·  for one person working alone  ·  count the lines',
  '**Pronunciation – the page read aloud in two minutes.** 🔊 **Track 20.12** Listen to the thirteen steps read in about ninety seconds, ⚠ **with the warning slower and the branches read only when the step is reached.** **If a bench page cannot be read aloud in two minutes it is not a bench page.** Repeat the warning and branch 4.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a two-page instruction; B gets it onto one side. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'How long is it?'],
  ['A', '__________ pages. __________ steps, __________ warning, __________ cautions, __________ branches, and __________.'],
  ['B', '⚠ One side of one sheet. What comes off?'],
  ['A', 'Nothing can come off.'],
  ['B', '⚠ Then something goes on the back — because __________.'],
  ['A', '__________ could go on the back.'],
  ['B', 'What is on it? ⚠ And who needs it at the bench?'],
  ['A', '…⚠ Nobody. Count the lines.'],
]));
out.push(table(['Role card 1 — the Tannous carton page', 'Role card 2 — the line count'], [[
  'Two pages: 13 steps, 1 warning, 2 cautions, 4 branches, the specification reference. ⚠ **Back:** the specification number, revision, date received, who sent it. ⚠ **Front:** 26 lines, **because the branches go in a right-hand column and not in the sequence.**',
  'A insists nothing can come off. ⚠ B\'s job is to count the lines — **and to count the branches twice: once in the sequence and once in a column.** ⚠ **In the sequence it is forty lines and in a column it is twenty-six**, which ends the argument without anybody giving anything up.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what went on the back and the line count both ways. ⚠ Then write the line at the top saying who the page is for.'));
out.push(PHRASE_CARD(['one side of one sheet', 'what comes off?', 'that goes on the back', 'branches down the right', 'for one person working alone', 'count the lines']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Lay out a job of yours as a bench page. Write the top line, the step count and what goes on the back.'));
out.push(table(['', 'What I have put there'], [
  ['The top line — job, date, revision, who it is for', ''],
  ['Steps, down the left', ''],
  ['Branches, down the right', ''],
  ['Warning and cautions, above their steps', ''],
  ['⚠ **On the back**', ''],
  ['⚠ **Line count, front**', ''],
], [2.4, 3.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My page is for _______. It has _______ steps and _______ branches, _______ lines on the front, and on the back is _______._'));
out.push(p('**Listener task:** count the pages in the room that fit on one side. ⚠ Then ask the ones that do not whether the branches are in a column or in the sequence.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a bench page with the specification history on the front, and branches numbered as steps. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the bench page, and answer the questions.'));
out.push(box(null, [
  '**EXPORT CARTON — TANNOUS ORDER. Rev 2, 1 April. ⚠ For one person working alone, at night. If two of you are here, read branch 4 anyway. Specification reference on the back.**',
  table(['#', 'Step', 'Branch'], [
    ['', '⚠ **WARNING. Do not lower the platen with the guard raised.**', ''],
    ['1', 'gloves on; bench cleared', ''],
    ['2', 'select the stencil for the code **on the order in front of you**', '⚠ **unless it is not in the press room: stop, leave the cartons flat, write the number on the handover note**'],
    ['3', 'make up the carton', ''],
    ['4', 'pack the contents against the order', '⚠ **if alone: pack to 10 kg and close; the rest goes in a carton marked 2 of 2**'],
    ['5', 'count against the order, by hand', ''],
    ['6', 'sign the count line', '⚠ **unless alone: sign once and write *alone*; counted again in the morning**'],
    ['', '**CAUTION. Do not run the press without the stencil seated, or the platen face will be marked.**', ''],
    ['7', '⚠ **apply the stencil. THIS STEP CANNOT BE CORRECTED: once the ink is in the board the carton is scrap** (nine in the fourth store, January)', ''],
    ['8', 'hold the platen four seconds, **so that the ink penetrates the board**; a shorter hold rubs off in transit', ''],
    ['9', 'mark the weight on the **side** face', ''],
    ['10', 'apply the label', '⚠ **unless the roll runs out: stop at the last full carton, write the number**'],
    ['11', '⚠ **seal — do not seal until step 6 is signed; a broken seal cannot be replaced**', ''],
    ['12', 'wait two minutes before moving, **so that the seal adhesive sets**', ''],
    ['13', 'set aside; press off at the wall; write the number done on the handover note', ''],
  ], [0.4, 3.6, 2.6]),
  '⚠ **Twenty-four lines on one side.** One warning, two cautions, thirteen steps, four branches in the right-hand column, and the title line. ⚠ **The specification number, its revision, the date we received it and who sent it are on the back**, where nobody at the bench needs them and anybody with a question has them.',
  '⚠ **Three things on this page were not on revision 1**, and all three came from a first-off and two nights: ⚠ **the side face in step 9, the four branches, and the sentence at the top saying who the page is for.**',
  '⚠ **And step 7 has moved.** It was step 5 in revision 1. ⚠ **It is now after the packing and the count, so that nothing irreversible is done to a carton until everything reversible has been checked** — one sentence of thought, and it saves a carton every time somebody miscounts.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many lines are on the front, and what is on the back?'));
out.push(item('2', 'What three things were not on revision 1?'));
out.push(item('3', 'Why has step 7 moved?'));
out.push(box('Writer\'s box', [
  '**The bench page — four parts:** **the title line: job, revision, date, ⚠ who it is for** → **the table: *# · step · branch*, with the warning and cautions unnumbered above their steps** → ⚠ **the line count and what is on the back** → ⚠ **what changed since the last revision, and why a step has moved.**',
  '⚠ **Put the branches in the third column and keep them out of the numbering.** ⚠ **It is what makes one page possible**, and it keeps the steps readable as a sequence.',
  '⚠ **Mark the irreversible step in the step column, in capitals, with its evidence.** *THIS STEP CANNOT BE CORRECTED… (nine in the fourth store, January.)* ⚠ **Two marked steps at most**, and here the second is step 11, tied to a signature.',
  '⚠ **Put the purpose inside the step, not after it.** *Hold the platen four seconds, so that the ink penetrates the board; a shorter hold rubs off in transit.* ⚠ One line, and it is the line that stopped twenty faint marks.',
  '⚠ **State the line count and what is on the back.** ⚠ *Twenty-four lines on one side* is a fact a reader can check and an argument nobody can have.',
  '⚠ **And say what changed since the last revision and why a step has moved.** ⚠ *Nothing irreversible is done to a carton until everything reversible has been checked.* **A revision note of one sentence is what makes the next revision possible** — which is Unit 17 arriving at a bench.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the bench page for a job at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________. Rev ______________, ______________. ⚠ For ______________. ______________ on the back.**   | ⚠ **WARNING. ______________** |   1 | ______________ |   2 | ______________ | ⚠ **unless ______________: stop, ______________, write ______________**   3 | ______________ | ⚠ **if alone: ______________**   | **CAUTION. ______________** |   4 | ⚠ **______________. THIS STEP CANNOT BE CORRECTED: ______________** |   5 | ______________, **so that ______________**; ______________ gives ______________ |   6 | ______________ | ⚠ **unless ______________: ______________**   ⚠ **______________ lines on one side**, and on the back is ______________.   ⚠ **What was not on the last revision.** ______________.   ⚠ **And ______________ has moved**, so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be alone, at two, and you have not done it before** — then ask one question: **is there anything here I cannot do?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A title line saying who the page is for', ''],
  ['Branches in a column, out of the numbering', ''],
  ['The warning and cautions unnumbered, above their steps', ''],
  ['No more than two marked steps, with evidence', ''],
  ['Purposes inside the steps that carry a number', ''],
  ['The line count, and what is on the back', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their page aloud. ⚠ **Time it.** The class says whether it took under two minutes.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the bench page for something at your work in full (**140 to 180 words**): the title line with who it is for, the numbered steps, the warning above its step, the branches in a column, the marked step with its evidence, and what is on the back.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does it fit on one side?_   ? _which step would I get wrong, alone, at two in the morning?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did a reader find a step they could not do alone? Usually two of three — ⚠ **and in both the writer had never done the job alone.**'));
out.push(box('Homework', ['Write your final text. Then lay one instruction at your work out on one side of one sheet, with the branches in a right-hand column, and count the lines (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 20.7 =======================
out.push(pb());
out.push(h2('20.7  Review & Mediate: who is the originating office'));
out.push(p('**Function:** saying where an instruction came from   ·   **Review:** the first-off report · warnings and cautions · the irreversible step · the reason beside the number · *unless* and *in which case* · the bench page'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What did the two first-off faults have as their single cause, and what was the third fault?',
  '**2** What is the difference between a warning and a caution, and where does each go?',
  '**3** Why was the stencil step moved from fifth to ninth?',
  '**4** What does a number without a reason beside it become?',
  '**5** What three things must an *in which case* contain?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina say every reader believed about the page?   **A** that it was wrong   **B** that the customer had written it   **C** that it was out of date'));
out.push(p('**b**  Listen again. **1** Who actually wrote the line about the stencil? **2** What does a name at the top of a page make possible?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  "They thought the customer had written it"', [
  ['Lina', 'May I ask something about revision 1? ⚠ **I have asked four people who wrote it, and all four said the same thing, and all four were wrong.**'],
  ['Nour', 'What did they say?'],
  ['Lina', '⚠ **That it came from Beirut.** That it was Ms Tannous\'s specification, translated. Abu Yasser said it, the night man said it, Hala said it, and Fadi said it was *the customer\'s page*.'],
  ['Nour', 'I wrote it. In an afternoon, from her specification and from what I could remember of the bench.'],
  ['Lina', '⚠ **I know. And nothing on the page says so**, which is why four people thought it came from a customer in another country.'],
  ['Nour', 'Does it matter who they thought wrote it, if the steps are right?'],
  ['Lina', '⚠ **It is the whole of it.** The step that produced nine scrap cartons was *apply the stencil*, with no branch. ⚠ **Abu Yasser read that line, saw that there was no stencil, and did not stop — and when I asked him why, he said: it is the customer\'s page.**'],
  ['Nour', 'So he thought the line could not be wrong.'],
  ['Lina', '⚠ **He thought the line could not be argued with.** ⚠ **A page with nobody\'s name on it is read as a page from somebody too senior to question**, and at two in the morning that is a specification from a buyer in Beirut.'],
  ['Nour', 'And with my name on it?'],
  ['Lina', '⚠ **Then it is a page from the administration office, written in an afternoon by somebody who has never run the press** — and that is a page a man at a bench will argue with at seven the next morning, which is all I want.'],
  ['Nour', 'What would you put at the top?'],
  ['Lina', '⚠ ***Issued by the administration office. N. Mansour, 1 April, rev 2. Written from the customer\'s specification and from the first-off report of 27 March. Tell me what is wrong with it.*** ⚠ **Five lines, and the last one is the one that does the work.**'],
  ['Nour', 'And the customer\'s specification stays on the back.'],
  ['Lina', '⚠ **On the back, with its number and its date** — so that the two things are separable. ⚠ **What she requires, and what we have decided to do about it, are not the same document, and for two months they have been the same page.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the originating office**',
  table(['The question', 'Revision 1', 'Revision 2'], [
    ['Who wrote it?', '⚠ **nothing on the page**', '⚠ **the administration office, by name and date**'],
    ['What four readers believed', '⚠ **that it came from Beirut**', '—'],
    ['Could it be argued with?', '⚠ **no — *it is the customer\'s page***', '⚠ **yes, and the page asks to be**'],
    ['Where is the specification?', 'mixed into the steps', '⚠ **on the back, with its number and date**'],
  ], [1.8, 2.1, 2.1]),
  '⚠ **A page with nobody\'s name on it is not read as anonymous; it is read as senior.** ⚠ **At two in the morning an unsigned instruction becomes a specification from a buyer in another country** — and four readers of four different kinds all said the same wrong thing about where it came from.',
  '⚠ **The cost of that is one line of the page and nine cartons.** *Apply the stencil*, with no stencil in the press room, and a man who did not stop ⚠ **because he thought the line could not be argued with.** **Not that it could not be wrong — that it could not be argued with.** The two are different and only the second one is fatal.',
  '⚠ **So name the originating office, the person, the date and the revision** — and add the line that does the work: ⚠ ***tell me what is wrong with it.*** A page that invites correction is corrected; a page that does not is obeyed exactly as far as its first hole.',
  '⚠ **And say what the page was written from.** *From the customer\'s specification and from the first-off report of 27 March.* ⚠ **A reader who knows the sources knows which parts are negotiable** — the specification is not and our method is.',
  '⚠ **Keep the customer\'s requirement and your own method in two documents.** ⚠ *What she requires, and what we have decided to do about it, are not the same document* — and when they are one page, every decision of yours inherits the authority of her contract, including the ones you made in an afternoon.',
  '**Practise:** Take an instruction at your work. ⚠ Ask three people where it came from, then find out. **The gap is the finding.**',
  '**Useful phrases:**  issued by …  ·  written from …  ·  tell me what is wrong with it  ·  it is the customer\'s page  ·  it could not be argued with  ·  what she requires and what we have decided',
  '**Pronunciation – the line that invites correction.** 🔊 **Track 20.14** Listen: _written from the customer\'s specification // and from the first-off report of the 27th. // TELL me what is WRONG with it._ ⚠ The last group slower and lower, not brighter. **An invitation said brightly is heard as a formality.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names an instruction at their work; B asks where it came from, then who actually wrote it.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Revision 1 of the carton page. ⚠ **Four readers, four kinds of job, and all four said it came from Beirut.** It was written in an afternoon by the administration office from a specification and a memory of the bench. ⚠ **The man who scrapped nine cartons said: *it is the customer\'s page.***',
  'Take an instruction of your own. ⚠ B asks two questions in this order: **where do you think this came from**, and then **who signed it?** ⚠ **Expect the second answer to be *nobody*** — and expect the first answer to be somebody more senior and further away than the truth.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what the four readers believed and who actually wrote it. ⚠ Then write the five-line heading you would put at the top, ending in the line that invites correction.'));
out.push(PHRASE_CARD(['issued by …', 'written from …', 'tell me what is wrong with it', 'it is the customer\'s page', 'it could not be argued with', 'two documents, not one']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Ask where their instructions come from, and find the gap.'));
out.push(table(['The instruction', 'Where readers think it came from', 'Who actually wrote it', 'What the heading should say'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1.4, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class where their instructions really come from. This is the **eighth** unit of this book, and the thing nobody writes down is this: **an instruction with no name on it is not read as anonymous but as senior, so an unsigned page written in an afternoon by an office that has never done the job acquires, at two in the morning, the authority of the customer\'s contract — and the reader then follows it past the point where it stops making sense, not because they believe it is right but because they believe it cannot be argued with, which means the one line that makes a page safe is the line that names the office that wrote it and asks to be told what is wrong with it.**'));
out.push(p('_Readers think our instructions come from _______, and they are written by _______. The heading I would put on them is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a work instruction · a tolerance band · a first-off check · a deviation · to quarantine · an originating office._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 3)', 10));
out.push(p('⚠ **This unit practises Part 3: matching a question to the right part of a text.** Read the five sections of the instruction-writing rules, then answer the five questions by choosing the section (**A–E**).'));
out.push(box(null, [
  '**A**  _Every page states the office that issued it, the person, the date and the revision, together with the documents it was written from. The last line of the heading asks the reader to report what is wrong with it._',
  '**B**  _Steps are numbered and are done in the order given. Warnings and cautions are not numbered and stand above the step they belong to: a warning concerns a person, a caution concerns the equipment or the work._',
  '**C**  _A step which cannot be undone is marked in the step itself, with the evidence of what undoing it has cost. No more than two such steps are marked on a page, and nothing irreversible is placed before the checks that are reversible._',
  '**D**  _Any number in a step carries its reason in the same line, because a number without a reason is rounded down by the second week. A figure which is convenience rather than requirement is marked as such._',
  '**E**  _Steps which can fail for want of a tool, a signature, a consumable or a second person carry an exception beside them. Each exception states a stop, a place to leave the work, and a record to be written for the next shift._',
], 'FFFFFF', C.navy));
[
  '**1**  Which section tells you where to put something that concerns the reader\'s safety?',
  '**2**  Which section explains why the four-second hold must say what it is for?',
  '**3**  Which section tells you what an exception must contain?',
  '**4**  Which section tells you to ask the reader to correct the page?',
  '**5**  Which section limits how many steps may be marked?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: sending a bench page out for comment to the people who will work from it.',
  'The shape: **what the page is and who issued it** · ⚠ **what it was written from** · ⚠ **what you know is wrong with it, named by you first** · **what you want back, by when.**',
  '⚠ **In eighty words the third part is the one that gets you answers.** *I have never run the press and step 8 is a guess* buys more corrections than any request for comments, ⚠ **because a reader will not contradict an office that claims to be right.**',
  '⚠ **Ask for one thing, by one date, from one person.** *Tell me by Thursday which step you cannot do alone.* A request for general comments on a bench page comes back empty; a request for one answer comes back answered.',
  '⚠ **And say what you cannot change.** *The code and the four-second hold are hers and are not mine to move.* **A reader who knows which lines are negotiable will argue about those and leave the others alone.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** You have written a bench page for a job you do not do yourself. Write to the people who will work from it (**60 to 80 words**). Give **what it is and who issued it**, ⚠ **what it was written from**, ⚠ **what you believe is wrong with it**, and **what you want back, by when.**'));
out.push(p('______________, the page on the bench is ______________, issued by ______________ on ______________. ⚠ It was written from ______________ and from ______________. ⚠ **I have never ______________, so ______________ is ______________ and ______________ may be ______________.** ______________ and ______________ are ______________ and are not mine to change. ⚠ Tell me by ______________ which ______________, and I will ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **you work at the bench and the writer does not** — then ask one question: **which line may I argue with?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it is and who issued it', ''],
  ['What it was written from', ''],
  ['⚠ What the writer believes is wrong with it', ''],
  ['One thing wanted back, by one date', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full bench page for a job at your work (**140 to 180 words**): the heading with the originating office and the line inviting correction, the numbered steps, the warning and caution above their steps, the marked irreversible step with its evidence, the reasons beside the numbers, and the exceptions in a column.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask three people where one instruction at your work came from, find out who wrote it, and write down the gap (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Two faults on a first-off had one cause. The useful line is ___.   a) two faults were found   b) the page was written from a made-up carton and read from a flat one   c) the operator misread two steps',
  '2  _Do not lower the platen with the guard raised._ This is ___.   a) a caution   b) a warning   c) a step',
  '3  Where does a caution go?   a) numbered, in sequence   b) unnumbered, above its step   c) at the end of the page',
  '4  Thirteen steps, two of them irreversible. How many should be marked?   a) all thirteen   b) the two   c) none',
  '5  Nothing irreversible should be done ___.   a) first   b) before the reversible checks   c) after the reversible checks',
  '6  _Hold the platen four seconds._ Add:   a) exactly four seconds   b) so that the ink penetrates the board   c) four seconds minimum',
  '7  _Apply the stencil, ___ it is not in the press room, in which case stop._   a) if   b) unless   c) when',
  '8  A page with no name on it is read as ___.   a) anonymous   b) unofficial   c) senior',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 20.15** Listen to the exchange. Complete the note.   What four readers believed: ______   Who actually wrote it: ______   What Abu Yasser said: ______   What goes at the top now: ______   Where the customer\'s specification goes: ______'));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Lina', 'I asked four people who wrote revision 1. All four said it came from Beirut — that it was Ms Tannous\'s specification, translated.'],
  ['Nour', 'I wrote it, in an afternoon, from her specification and from what I could remember of the bench.'],
  ['Lina', 'I know. And nothing on the page says so. The step that produced nine scrap cartons was apply the stencil, with no branch, and when I asked Abu Yasser why he did not stop, he said: it is the customer\'s page.'],
  ['Nour', 'So he thought the line could not be wrong.'],
  ['Lina', 'He thought it could not be argued with. A page with nobody\'s name on it is read as a page from somebody too senior to question.'],
  ['Nour', 'What would you put at the top?'],
  ['Lina', 'Issued by the administration office. N. Mansour, 1 April, revision 2. Written from the customer\'s specification and from the first-off report of 27 March. Tell me what is wrong with it.'],
  ['Nour', 'And the specification itself?'],
  ['Lina', 'On the back, with its number and its date, so that the two are separable. What she requires and what we have decided to do about it are not the same document.'],
]));
out.push(p('**C  Writing.** Write the heading and first four steps of a bench page for a job at your work (**60 words or more**): the originating office with the line inviting correction, and four numbered steps with one reason and one exception among them.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a first-off report that finds the cause two faults share',
  '☐ put a warning or a caution above its step, unnumbered',
  '☐ mark the step that cannot be corrected, with its evidence',
  '☐ put the reason beside the number so nobody rounds it down',
  '☐ write an exception with a stop, a place and a record',
  '☐ get a whole instruction onto one side of one sheet',
  '☐ name the originating office and ask to be corrected',
  '☐ write a bench page for somebody working alone at night',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
