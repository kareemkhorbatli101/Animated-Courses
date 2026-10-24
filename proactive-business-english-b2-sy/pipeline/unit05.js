// Proactive Business English B2 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a general wording · a definition · the scope of a policy · for the avoidance of doubt · an exception-holder · a named authority · a two-part obligation · a confirmed order · to be held to a sentence · a rule that survives a new case · an instruction · to apply to · not to apply to · a saving provision · a review date · a commencement date · to take effect from · to supersede · a departure from policy · to authorise a departure · a standing exception · an undefined word · a word doing the work · three disputes it prevents · to be quoted against you · the other side reading your policy · a policy nobody has written · a practice without a page · a general rule · an excluded case · a precondition · a term of art';
const COLLOC = 'to frame a rule · to narrow a scope · to grant an exception · to record a departure · to define a term · to be caught by a clause · to fall outside a policy · to hold somebody to a wording';
const BACK_AT_B2 = 'policy · procedure · exception';

out.push(h1('Unit 5  Policy, Not Procedure'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  write a rule for a case nobody has met yet',
  '**5.2**  set a scope, and say what the rule does not apply to',
  '**5.3**  name who may grant an exception, and how it is recorded',
  '**5.4**  write the one definition that does the work',
  '**5.5**  write a two-part obligation, and say why both halves fail together',
  '**5.6**  read your own policy as the person who will quote it against you',
  '**5.7**  Review & Mediate: the policy we have followed for years and never written',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Why there is a policy to write at all', [
  '⚠ **On 20 March Mr Ayoub asked for a credit rule.** **Not because of Beirut** — ⚠ **because of the eleven under-priced quotations, the nine scrap cartons, and a customer in Jaramana who has owed us 240,000 since November and whom nobody stopped supplying because nobody could point to a rule that said to.**',
  '⚠ **This is the first policy this company has written in twenty-seven years, and that is the whole difficulty.** **Everything here is run on procedure: Abu Yasser signs nothing he has not counted, Mr Ayoub approves anything over 500,000, the gate sheet is signed by name.** ⚠ **Those are instructions, and an instruction covers the case it was written for.**',
  '⚠ **A policy has to cover a case nobody has met.** **And once it is written, it can be quoted back at us** — **by a customer, by the bank, and by anybody in this office who does not want to do something.** ⚠ **That is not a reason not to write it. It is the thing to write it against.**',
], C.lyellow, C.orange));

// ======================= CYCLE 5.1 =======================
out.push(pb());
out.push(h2('5.1  A rule for a case nobody has met'));
out.push(p('**Function:** writing a rule general enough to survive a new situation   ·   **Grammar:** the general wording — _any · where · in each case_   ·   **Pronunciation:** reading a rule aloud for its shape, not its sense'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a rule at your work that has met a case it was not written for. Say what happened.'));
out.push(p('**b**  Which is an instruction and which is a rule? _Do not supply Jaramana Hardware until they have paid. · No further goods are supplied to any account more than sixty days overdue._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say the difference is?   **A** length   **B** an instruction names a case and a rule names a class   **C** formality'));
out.push(p('**b**  Listen again. **1** What is wrong with naming Jaramana? **2** What does he say the test of a rule is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  "A rule names a class, not a case"', [
  ['Nour', 'The first line is: *do not supply Jaramana Hardware until they have paid.*'],
  ['Mr Attar', '⚠ **That is an instruction and you already had it.** ⚠ **Mr Ayoub said it to the counter in January and nothing happened.**'],
  ['Nour', 'So what is the difference?'],
  ['Mr Attar', '⚠ **An instruction names a case. A rule names a class.** ⚠ *No further goods are supplied to any account more than sixty days overdue.* **Jaramana is in it and so is everybody who gets there next year.**'],
  ['Nour', 'And if Jaramana is the only one?'],
  ['Mr Attar', '⚠ **Then the rule costs you nothing and it will still be there in 2030 when the next one happens.** ⚠ **A rule written for one case stops being a rule the day that case is settled.**'],
  ['Nour', 'How do I know whether the wording is general enough?'],
  ['Mr Attar', '⚠ **Here is the test, and it is the only one I know.** ⚠ **Invent a case nobody has met and read your rule against it.** **A customer who is not overdue but has gone quiet. A customer who pays in full on day ninety every time, deliberately. ⚠ **A customer who is also a supplier and owes us while we owe him.'],
  ['Nour', 'The third one breaks it.'],
  ['Mr Attar', '⚠ **It breaks it in an interesting way, which is the point of inventing cases.** **Does *account* mean the customer or the ledger?** **If he owes us 300,000 and we owe him 280,000, is he sixty days overdue?**'],
  ['Nour', 'That is a definition and it is 5.4.'],
  ['Mr Attar', '⚠ **It is, and you found it by inventing a case.** ⚠ **Nobody finds a bad definition by reading the policy. You find it by walking an imaginary customer through the door.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Instruction and rule**',
  table(['', 'Instruction', 'Rule'], [
    ['**the shape**', '*do not supply Jaramana Hardware until they have paid*', '⚠ **_no further goods are supplied to any account more than sixty days overdue_**'],
    ['**what it names**', '⚠ **a case**', '⚠ **a class**'],
    ['**how long it lasts**', '⚠ **until that case is settled**', '**until the class stops existing**'],
    ['**the words that do it**', '*this customer · this order · today*', '⚠ **_any · where · in each case · no further_**'],
  ], [1.3, 2.4, 2.6]),
  '⚠ **An instruction names a case; a rule names a class.** **Jaramana already had an instruction and nothing happened** — ⚠ **because an instruction has to be remembered by whoever is on the counter, and a rule is a thing the counter can point at.**',
  '⚠ **A rule written for one case stops being a rule the day that case is settled.** **Write the class even when you can see only one member of it.**',
  '⚠ **The test, and it is the only reliable one: invent a case nobody has met and read your rule against it.** **A customer who has gone quiet but is not overdue. One who pays in full on day ninety, deliberately, every time.** ⚠ **One who is also a supplier and owes you while you owe him.**',
  '⚠ **The invented case is how you find a bad definition.** ⚠ **Nobody finds one by reading the policy; you find it by walking an imaginary customer through the door** — **and *account* turns out to mean two different things.**',
  '⚠ **And when the invented case breaks the rule, that is a success.** **It has broken in a classroom instead of in a yard in November.**',
  '**Practise:** Take an instruction at your work. Rewrite it as a rule, then invent three cases nobody has met and read it against them.',
  '**Useful phrases:**  an instruction names a case  ·  a rule names a class  ·  it will still be there in 2030  ·  invent a case nobody has met  ·  walk an imaginary customer through the door',
  '**Pronunciation – reading a rule for its shape.** 🔊 **Track 5.2** Listen to the credit rule read twice. ⚠ **The first is read in three chunks: _no further goods are supplied / to any account / more than sixty days overdue._** ⚠ **The second runs it together.** **A rule read in its chunks can be checked against a case; read flat it can only be agreed with.** Read it four times in three chunks.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads an instruction; B turns it into a rule and invents a case against it.'));
out.push(dlg(null, [
  ['A', 'The line is: __________.'],
  ['B', '⚠ **That is an instruction and you already had it. What is the class?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then: __________.** ⚠ Now invent a case nobody has met.'],
  ['A', '__________.'],
  ['B', '⚠ **And another.** ⚠ **And one that is both at once.**'],
  ['A', '__________. ⚠ That one breaks it.'],
  ['B', '⚠ **Which is a success. Why does it break?**'],
  ['A', 'Because __________ means two things.'],
]));
out.push(table(['Role card 1 — Jaramana and the class', 'Role card 2 — the customer who is also a supplier'], [[
  '*Do not supply Jaramana Hardware until they have paid* → ⚠ *no further goods are supplied to any account more than sixty days overdue.* ⚠ **Jaramana is in it, and so is whoever gets there in 2030** — **and the counter can point at a rule where it could not remember an instruction.**',
  'A has a rule. ⚠ **B walks three imaginary customers through the door: one who has gone quiet but is not overdue, one who pays in full on day ninety deliberately, and one who is also a supplier.** ⚠ **The third breaks it**: does *account* mean the customer or the ledger? **If he owes us 300,000 and we owe him 280,000, is he sixty days overdue?**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the instruction and the rule. ⚠ Then write the invented case that broke it, and the word that turned out to mean two things.'));
out.push(PHRASE_CARD(['an instruction names a case', 'a rule names a class', 'still there in 2030', 'invent a case nobody has met', 'walk a customer through the door']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** instructions at your work. Make each a rule, then break it.'));
out.push(table(['The instruction', 'The class', 'The rule', 'The invented case that breaks it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.1, 1.9, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The instruction was _______. The class is _______. The rule is _______. And it breaks on _______, because _______ means two things._'));
out.push(p('**Listener task:** count how many rules broke on a word that means two things. ⚠ Then ask how many of the instructions have already met a case they were not written for.'));
out.push(p('**Board clinic:** your teacher writes three rules on the board — look for a named customer inside a rule, and a rule with today\'s date in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — DRAFT 1, AND WHY IT IS WRONG. 22 March. N. Mansour. The first policy this company has written.**',
  '**Draft 1.** _Jaramana Hardware are not to be supplied with further goods until their account is settled. Any similar cases should be referred to Mr Ayoub._',
  '⚠ **Twenty-four words, and both sentences are instructions.** **The first names one customer. The second names a class — *similar cases* — and then declines to say what it is similar to.**',
  table(['', 'Draft 1', 'What is wrong', 'Draft 2'], [
    ['**the subject**', '*Jaramana Hardware*', '⚠ **one case; the rule ends when it is paid**', '⚠ **_any account_**'],
    ['**the trigger**', '*until their account is settled*', '⚠ **no measure — settled on whose reckoning?**', '⚠ **_more than sixty days overdue_**'],
    ['**the obligation**', '*are not to be supplied with further goods*', '⚠ **passive with nobody in it; who is not supplying?**', '**_the counter does not release goods_**'],
    ['**the escape**', '*any similar cases should be referred to Mr Ayoub*', '⚠ **_similar_ is undefined, and *referred* is not a decision**', '⚠ **5.3 — a named exception-holder and a record**'],
  ], [1.2, 2.2, 2.6, 2]),
  '**Draft 2.** ⚠ **_The counter does not release goods to any account more than sixty days overdue. This takes effect from 1 April and applies to orders placed on or after that date._**',
  '⚠ **Twenty-eight words against twenty-four, and it will outlive everybody who signs it.** **And four of the words are the ones nobody thinks about: *takes effect from* and *on or after*.** ⚠ **Without them, the first argument the rule meets is about an order placed in March and delivered in April**, **which is not a hard case and will happen in the first fortnight.**',
  '⚠ **The three cases I walked through the door, and what each did.** **A customer gone quiet but not overdue — the rule does not catch him, and should not; that is a different policy.** **A customer who pays in full on day ninety every time, deliberately — the rule catches him every month**, ⚠ **and he is one of our four best customers, which is 5.3.** **A customer who is also a supplier — the rule cannot be applied at all until *account* is defined, which is 5.4.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is each of draft 1\'s two sentences an instruction?'));
out.push(item('2', 'Which four words does nobody think about, and what argument do they prevent?'));
out.push(item('3', 'What did each of the three invented cases do to the rule?'));
out.push(box('Writer\'s box', [
  '**Draft 1 and why it is wrong — four parts:** **the draft** → ⚠ **a table: *subject · trigger · obligation · escape*** → **the second draft** → ⚠ **and the invented cases, each with what it did.**',
  '⚠ **Take the four parts of a rule one at a time.** **The subject (a class, not a case) · the trigger (a measure, not a judgement) · the obligation (somebody doing or not doing) · the escape (5.3).** ⚠ **A draft that is wrong is usually wrong in exactly one of the four, and the table finds which.**',
  '⚠ **Put a measure in the trigger.** ⚠ *Settled* **is on whose reckoning?** *More than sixty days overdue* **can be read off a ledger by whoever is on the counter at four o\'clock on a Thursday.**',
  '⚠ **Name who is doing the not-doing.** ⚠ *The counter does not release goods* **is a person at a place; *goods are not to be supplied* is Unit 2\'s hole the shape of a person**, and in a policy that hole is filled by whoever is standing there.',
  '⚠ **And put the commencement in.** ⚠ *This takes effect from 1 April and applies to orders placed on or after that date.* **Four words nobody thinks about, and without them the first argument is about an order placed in March and delivered in April** — **which will happen in the first fortnight.**',
  '⚠ **Then record what each invented case did**, including the ones the rule should not catch. **A case the rule correctly misses is a finding too, and it tells the reader where the policy stops.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Turn an instruction at your work into a rule, in two drafts (**80 words or more**). Use the frame.'));
out.push(p('**______________ — DRAFT 1, AND WHY IT IS WRONG. ______________. ______________.**   **Draft 1.** ______________   ⚠ **______________ words, and ______________ are instructions.**   **the subject** | ______________ | ⚠ **______________** | ⚠ **______________**   **the trigger** | ______________ | ⚠ **no measure — ______________?** | ⚠ **______________**   **the obligation** | ______________ | ⚠ **______________** | **______________**   **the escape** | ______________ | ⚠ **______________** | ⚠ **______________**   **Draft 2.** ⚠ **______________. This takes effect from ______________ and applies to ______________ on or after that date.**   ⚠ **______________ words, and it will outlive everybody who signs it.** ⚠ **Without *takes effect from*, the first argument the rule meets is ______________**, **which will happen in the first ______________.**   ⚠ **The three cases I walked through the door.** **______________ — ______________.** **______________ — ______________.** **______________ — ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A class in the subject, not a case', ''],
  ['A measure in the trigger, readable off a document', ''],
  ['Somebody named as doing the not-doing', ''],
  ['A commencement date and *on or after*', ''],
  ['Three invented cases, including one the rule should miss', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their invented case that broke the rule. ⚠ The class says which of the four parts it broke.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that met a case it was not written for (**200 to 240 words**). Say what the rule said, what the case was, what was done, and whether the rule was changed afterwards.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the rule changed, or only departed from?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the rule departed from and never changed? Usually all three — ⚠ **and in two of three the same case has come back since.**'));
out.push(box('Homework', ['Write your final text. Then take one instruction at your work, write it as a rule, and walk three imaginary cases through the door (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.2 =======================
out.push(pb());
out.push(h2('5.2  Scope and exclusion'));
out.push(p('**Function:** saying what a rule covers and what it does not   ·   **Grammar:** _this applies to · this does not apply to · for the avoidance of doubt_   ·   **Pronunciation:** the exclusion read as part of the rule'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a rule at your work that somebody has argued does not apply to them. Say what their argument was.'));
out.push(p('**b**  Which closes the argument? _This applies to all customer accounts. · This applies to all customer accounts. It does not apply to staff purchases, to the two Baghdad Street concession stalls, or to goods exchanged under warranty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Hala say the exclusions must be written?   **A** for completeness   **B** because the unwritten ones are granted by whoever is asked   **C** for the auditor'));
out.push(p('**b**  Listen again. **1** What are the three exclusions? **2** What is *for the avoidance of doubt* for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  "Write the exclusions or somebody else will"', [
  ['Nour', 'It applies to all customer accounts. That is all it needs to say.'],
  ['Hala', '⚠ **Then on the second of April somebody will stand at the counter and ask whether it applies to them, and whoever is on the counter will decide.**'],
  ['Nour', 'And?'],
  ['Hala', '⚠ **And that is the policy.** ⚠ **Not the one you wrote — the one Lina makes at twenty past four on a Thursday because a man is waiting and she has nothing to point at.**'],
  ['Nour', 'So what are the exclusions?'],
  ['Hala', '⚠ **You know three of them.** **Staff purchases. The two Baghdad Street stalls, which are concessions and not accounts. And goods going back out under warranty, which are not a supply at all.**'],
  ['Nour', 'Warranty exchanges are obviously not covered.'],
  ['Hala', '⚠ **Obviously to you.** ⚠ **Obvious is a thing a writer feels and a reader does not.** **Write it.'],
  ['Nour', 'And then there is *for the avoidance of doubt*.'],
  ['Hala', '⚠ **Which is for the fourth case — the one that is already covered by the words but that somebody will argue about anyway.** ⚠ *For the avoidance of doubt, a part exchange is a supply.* **The rule already said so. The sentence stops the argument.**'],
  ['Nour', 'What is the difference between that and an exclusion?'],
  ['Hala', '⚠ **An exclusion changes what the rule covers. A *for the avoidance of doubt* changes nothing and saves an afternoon.** ⚠ **Mix them up and you will exclude something you meant to catch.**'],
  ['Nour', 'How many of each?'],
  ['Hala', '⚠ **Three exclusions and one avoidance is a page.** ⚠ **Nine exclusions is a rule that has lost an argument nine times in advance.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Scope, exclusion, and the avoidance of doubt**',
  table(['Phrase', 'What it does', 'Example'], [
    ['**_this applies to_**', 'sets the class', '*all customer accounts*'],
    ['⚠ **_this does not apply to_**', '⚠ **takes something out of the class**', '*staff purchases · the two Baghdad Street stalls · goods going back under warranty*'],
    ['⚠ **_for the avoidance of doubt_**', '⚠ **changes nothing and saves an afternoon**', '⚠ *for the avoidance of doubt, a part exchange is a supply*'],
    ['**the ratio**', '⚠ **three exclusions and one avoidance is a page**', '⚠ **nine exclusions is a rule that has lost nine arguments in advance**'],
  ], [1.9, 2.1, 2.3]),
  '⚠ **Every exclusion you do not write is granted by whoever is asked.** ⚠ **The policy is not the one you wrote — it is the one Lina makes at twenty past four on a Thursday because a man is waiting and she has nothing to point at.**',
  '⚠ **Obvious is a thing a writer feels and a reader does not.** **A warranty exchange is obviously not a supply to the person who drafted the rule and is a live question to everybody else.**',
  '⚠ **Know the difference between the two sentences.** ⚠ **An exclusion changes what the rule covers. A *for the avoidance of doubt* changes nothing.** ⚠ **Mix them up and you will exclude something you meant to catch** — **which is the commonest fault in a first policy.**',
  '⚠ **Keep the count down.** **Three exclusions and one avoidance is a page.** ⚠ **Nine exclusions is a rule that has lost an argument nine times in advance**, **and a reader counts them.**',
  '⚠ **And write the exclusion inside the rule, not in an appendix.** **A rule and its exclusions on one page can be pointed at; in two places, only the first page gets pointed at.**',
  '**Practise:** Take a rule of yours. Write the scope, three exclusions, and one *for the avoidance of doubt*.',
  '**Useful phrases:**  somebody will ask and whoever is asked will decide  ·  that is the policy  ·  obvious is a thing a writer feels  ·  changes nothing and saves an afternoon  ·  nine arguments lost in advance',
  '**Pronunciation – the exclusion as part of the rule.** 🔊 **Track 5.4** Listen twice. ⚠ **The first reads scope and exclusions at the same pace and volume.** ⚠ **The second drops its voice on the exclusions, as though they were small print.** **A listener hears the drop as *and these do not really count*** — **which is the opposite of what an exclusion does.** Read it four times, level throughout.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a scope; B finds the exclusions by standing at the counter.'));
out.push(dlg(null, [
  ['A', 'It applies to __________. That is all it needs to say.'],
  ['B', '⚠ **Then on __________ somebody will ask whether it applies to them, and whoever is asked will decide. What do you want the answer to be?**'],
  ['A', 'It should not apply to __________.'],
  ['B', '⚠ **And?**'],
  ['A', '__________. And __________.'],
  ['B', '⚠ **Now the fourth case — the one already covered that somebody will argue about anyway.**'],
  ['A', '⚠ **For the avoidance of doubt, __________.**'],
  ['B', '⚠ **And is that an exclusion or an avoidance?**'],
  ['A', 'An avoidance. It changes nothing.'],
]));
out.push(table(['Role card 1 — three exclusions and one avoidance', 'Role card 2 — the exclusion that excludes too much'], [[
  '*Applies to all customer accounts.* ⚠ **Exclusions: staff purchases · the two Baghdad Street concession stalls · goods going back out under warranty.** ⚠ **And the avoidance: _for the avoidance of doubt, a part exchange is a supply._** **The rule already said so; the sentence saves an afternoon.**',
  'A writes an exclusion meant to save one case and ⚠ **it takes out a whole class** — *this does not apply to trade customers* **when A meant the two stalls.** **B\'s job is to list who is now outside the rule.** ⚠ **It is nine of the eleven largest accounts**, **and A has excluded the people the rule was written for.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the scope, the three exclusions and the avoidance. ⚠ Then say which of the four is doing the least work, and whether it should be there.'));
out.push(PHRASE_CARD(['whoever is asked will decide', 'that is the policy', 'obvious is what a writer feels', 'changes nothing, saves an afternoon', 'nine arguments lost in advance']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** rules at your work. Write scope, exclusions and one avoidance for each.'));
out.push(table(['The rule', 'Applies to', 'Does not apply to', 'For the avoidance of doubt'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.3, 2.1, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It applies to _______. It does not apply to _______, _______ or _______. And for the avoidance of doubt, _______._'));
out.push(p('**Listener task:** count the exclusions in the room that take out more than they were meant to. ⚠ Then ask whose job it currently is to answer the excluded cases, and the answer is whoever is asked.'));
out.push(p('**Board clinic:** your teacher writes three scopes on the board — look for an exclusion that swallows the rule, and a *for the avoidance of doubt* that actually changes the scope. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — SCOPE. 24 March. N. Mansour. Section 1 of 4.**',
  '**1.1  This policy applies to** ⚠ **every account on the customer ledger, at both sites, whether the order is placed at a counter, by telephone or in writing.**',
  '**1.2  This policy does not apply to:**',
  table(['', 'The exclusion', 'Why', 'How many accounts'], [
    ['**(a)**', '**staff purchases**', 'they are deducted from wages and are not credit', '**eleven people**'],
    ['**(b)**', '⚠ **the two Baghdad Street concession stalls**', '⚠ **they are concessions and hold no account; they pay on collection, and they have since the store opened on 8 June**', '**two**'],
    ['**(c)**', '**goods going back out under warranty**', '⚠ **a replacement is not a supply; the original was paid for**', '**about nine a year**'],
  ], [0.5, 2.3, 2.9, 1.3]),
  '**1.3  For the avoidance of doubt**, ⚠ **a part exchange is a supply, and the balance payable on a part exchange is subject to this policy.**',
  '⚠ **Three exclusions, one avoidance, and a count against each.** **The count is not in any policy I have ever read and it is the most useful column on the page**: ⚠ **eleven people, two stalls and nine warranty replacements a year is the entire hole in this rule**, **and a reader can see in four seconds that the hole is small.**',
  '⚠ **The exclusion I nearly wrote and did not is *trade customers*.** **I meant the two stalls.** ⚠ **_Trade customers_ would have taken out nine of our eleven largest accounts** — **the people the rule exists for** — **and it would have read as a perfectly reasonable sentence and nobody would have noticed until November.**',
  '⚠ **And 1.1 says *whether the order is placed at a counter, by telephone or in writing* for one reason.** **Jaramana\'s November order was placed by telephone to the yard**, ⚠ **and the yard is not a counter and does not have the ledger in front of it.** **That is not an exclusion. It is the scope being written wide enough to include the way the problem actually happened.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the most useful column, and what does it show?'));
out.push(item('2', 'Which exclusion was nearly written, and what would it have done?'));
out.push(item('3', 'Why does 1.1 name three ways of placing an order?'));
out.push(box('Writer\'s box', [
  '**A scope section — four parts:** ⚠ **the scope, written wide enough to include how the problem actually happened** → **the exclusions, lettered, each with a reason** → ⚠ **a count against each exclusion** → ⚠ **and one *for the avoidance of doubt*.**',
  '⚠ **Put a count against every exclusion.** ⚠ *Eleven people, two stalls, nine a year.* **It is in no policy anybody has read and it is the most useful column on the page** — **a reader can see in four seconds how big the hole is.**',
  '⚠ **Give each exclusion a reason in the same row.** ⚠ *A replacement is not a supply; the original was paid for.* **An unexplained exclusion is read as a favour to somebody.**',
  '⚠ **Check every exclusion for over-reach by naming who is now outside.** ⚠ *Trade customers* **would have taken out nine of the eleven largest accounts — the people the rule exists for** — **and it would have read as a perfectly reasonable sentence.**',
  '⚠ **Write the scope to include the route the problem actually took.** ⚠ **Jaramana\'s order came by telephone to the yard, and the yard does not have the ledger** — **so *whether placed at a counter, by telephone or in writing* is not padding, it is the whole reason the rule will work.**',
  '⚠ **One avoidance, and make sure it changes nothing.** **If it changes the scope, it is an exclusion in the wrong clothes and belongs in 1.2.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the scope section of a policy for your workplace (**80 words or more**). Use the frame.'));
out.push(p('**______________ — SCOPE. ______________. Section ______________.**   **1.1  This policy applies to** ⚠ **______________, whether ______________, ______________ or ______________.**   **1.2  This policy does not apply to:**   **(a)** ______________ | ______________ | **______________**   **(b)** ⚠ **______________** | ⚠ **______________** | **______________**   **(c)** ______________ | ⚠ **______________** | **______________**   **1.3  For the avoidance of doubt**, ⚠ **______________.**   ⚠ **______________ exclusions, one avoidance, and a count against each.** ⚠ **______________ is the entire hole in this rule, and a reader can see in four seconds that it is ______________.**   ⚠ **The exclusion I nearly wrote and did not is ______________.** **I meant ______________.** ⚠ **It would have taken out ______________** — **the people the rule exists for** — **and nobody would have noticed until ______________.**   ⚠ **And 1.1 says ______________ for one reason:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count against every exclusion', ''],
  ['A reason in the same row as each exclusion', ''],
  ['Every exclusion checked for over-reach by naming who is outside', ''],
  ['The scope wide enough to include how the problem happened', ''],
  ['One avoidance, and it changes nothing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *for the avoidance of doubt*. ⚠ The class decides whether it changes the scope — and if it does, it is an exclusion in the wrong place.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an exclusion at your work that somebody granted themselves (**200 to 240 words**). Say what the rule was, who decided it did not apply, what they pointed at, and whether anybody has written it down since.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the exclusion ever written down?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the exclusion granted at a counter or a gate by somebody with nothing to point at? Usually two of three — ⚠ **and in all three it has been granted the same way ever since.**'));
out.push(box('Homework', ['Write your final text. Then take a rule at your work, write its three exclusions with a count against each, and name who is outside the rule after each one (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.3 =======================
out.push(pb());
out.push(h2('5.3  Who may decide an exception'));
out.push(p('**Function:** naming the exception-holder and the record   ·   **Grammar:** _X may authorise a departure, and shall record it in Y_   ·   **Pronunciation:** a name read as part of a rule'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say who grants exceptions at your work. Say whether it is written anywhere.'));
out.push(p('**b**  Which can be audited? _Exceptions may be made at management discretion. · Mr Ayoub may authorise a departure from this policy, and shall record it on the account in the ledger with the date and his initials._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the record?   **A** it is for the auditor   **B** without it, the exception becomes the rule   **C** it is unnecessary'));
out.push(p('**b**  Listen again. **1** Why only one name? **2** What is the customer who pays on day ninety for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  "One name, and it is written down"', [
  ['Nour', 'Section 3: *exceptions may be made at management discretion.*'],
  ['Mr Ayoub', '⚠ **Whose discretion?**'],
  ['Nour', 'Yours. Or Bassel\'s, or mine, depending.'],
  ['Mr Ayoub', '⚠ **Then it is everybody\'s, and a rule everybody may set aside is a suggestion.** ⚠ **One name.**'],
  ['Nour', 'Yours.'],
  ['Mr Ayoub', '⚠ **Mine, and write it as mine, and write what happens when I am in Homs.** **That is the part nobody writes.'],
  ['Nour', 'And if you are away and a decision will not wait?'],
  ['Mr Ayoub', '⚠ **Then you, up to one order and one month, and you tell me when I am back.** ⚠ **Which is a second name with a limit on it, not a second discretion.**'],
  ['Nour', 'And the record?'],
  ['Mr Ayoub', '⚠ **On the account in the ledger, with the date and my initials, in the ledger and not in a drawer.** ⚠ **Because without the record the exception becomes the rule.**'],
  ['Nour', 'How?'],
  ['Mr Ayoub', '⚠ **Jaramana. I let them have one order on credit in September because the man\'s son had died.** ⚠ **That was an exception and I was right.** **Then they had another in October, from the counter, because the counter saw September and assumed it was the arrangement** ⚠ **— and by November it was 240,000 and nobody had decided anything since September.**'],
  ['Nour', 'So the record is what stops the second one.'],
  ['Mr Ayoub', '⚠ **The record is what makes the second one a decision instead of a precedent.** **And there is a third thing you have not asked about.**'],
  ['Nour', 'The customer who pays on day ninety, every time, deliberately.'],
  ['Mr Ayoub', '⚠ **He is one of our four best accounts and the rule catches him every month.** ⚠ **He does not need an exception each time. He needs a standing one, written, with a review date** — **otherwise somebody will stop his order in August and we will lose him over a policy I asked for.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The exception-holder and the record**',
  table(['', 'Write', 'Why'], [
    ['**the name**', '⚠ *Mr Ayoub may authorise a departure from this policy.*', '⚠ **one name; a rule everybody may set aside is a suggestion**'],
    ['⚠ **the deputy, with a limit**', '⚠ *In his absence the office manager may do so, up to one order and one month.*', '⚠ **a second name with a limit on it, not a second discretion**'],
    ['**the record**', '*and shall record it on the account in the ledger, with the date and his initials*', '⚠ **in the ledger and not in a drawer**'],
    ['⚠ **the standing exception**', '⚠ *The X account is exempt until 30 September, reviewed then.*', '⚠ **for the case the rule catches correctly and wrongly, every month**'],
  ], [1.7, 3, 2.1]),
  '⚠ **Without the record, the exception becomes the rule.** ⚠ **One order on credit in September, for a good reason; another in October from the counter, because the counter saw September and assumed it was the arrangement; 240,000 by November and nobody had decided anything since.** ⚠ **The record is what makes the second one a decision instead of a precedent.**',
  '⚠ **One name, and write what happens when that person is away.** **It is the part nobody writes, and it is the part that gets used.** ⚠ **A deputy with a limit — one order, one month, and tell me when I am back — is not a second discretion.**',
  '⚠ **Say where the record goes.** ⚠ *On the account in the ledger.* **A record in a drawer is a record the counter cannot see, and the counter is where the next decision happens.**',
  '⚠ **And write a standing exception for the case your rule catches correctly and wrongly every month.** ⚠ **A customer who pays in full on day ninety deliberately is caught by a sixty-day rule and is one of your best accounts** — **he needs one written exception with a review date, or somebody will stop his order in August.**',
  '⚠ **A standing exception always has a review date.** **Without one it is not an exception, it is a second policy.**',
  '**Practise:** Take a rule of yours. Name the exception-holder, the deputy with a limit, the record and its place, and one standing exception with a review date.',
  '**Useful phrases:**  whose discretion?  ·  a rule everybody may set aside is a suggestion  ·  write what happens when I am in Homs  ·  without the record the exception becomes the rule  ·  a decision instead of a precedent',
  '**Pronunciation – a name read as part of a rule.** 🔊 **Track 5.6** Listen twice. ⚠ **The first reads *Mr Ayoub may authorise a departure* at one level, as a clause.** ⚠ **The second stresses the name.** **Stressed, it sounds like a privilege; level, it sounds like an allocation** — **and a policy allocates.** Read it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a discretion clause; B pins it down.'));
out.push(dlg(null, [
  ['A', 'Exceptions may be made at __________ discretion.'],
  ['B', '⚠ **Whose discretion?**'],
  ['A', '__________, or __________, depending.'],
  ['B', '⚠ **Then it is everybody\'s, and a rule everybody may set aside is a suggestion. One name.**'],
  ['A', '__________.'],
  ['B', '⚠ **And when that person is away?**'],
  ['A', '__________, up to __________.'],
  ['B', '⚠ **And the record — where?**'],
  ['A', 'On __________, with __________.'],
  ['B', '⚠ **And the case your rule catches every month and should not?**'],
  ['A', '__________, with a review date of __________.'],
]));
out.push(table(['Role card 1 — September, October, November', 'Role card 2 — the standing exception'], [[
  '⚠ **One exception in September for a good reason, unrecorded. Another in October from the counter, because the counter saw September. 240,000 by November, and nobody had decided anything since September.** ⚠ **B\'s job is to get A to say what the record would have changed: it makes the second one a decision instead of a precedent.**',
  'A has a rule that correctly catches one of their best accounts every month — ⚠ **a customer who pays in full on day ninety, deliberately, every time.** **B asks what happens in August when A is away.** ⚠ **Somebody stops his order and the firm loses him over a policy A asked for.** ⚠ **The answer is one written standing exception with a review date.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the name, the deputy with the limit, the record and its place. ⚠ Then write the standing exception and its review date.'));
out.push(PHRASE_CARD(['whose discretion?', 'a rule everybody may set aside', 'when I am in Homs', 'the exception becomes the rule', 'a decision, not a precedent']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** rules at your work. Write the exception machinery for each.'));
out.push(table(['The rule', 'Who may authorise', 'The deputy, and the limit', 'The record, and where'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.3, 1.9, 1.9]));
out.push(p('⚠ **And the standing exception:** ______________ **is exempt until** ______________, **reviewed then, because** ______________.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Only _______ may authorise a departure. In their absence, _______, up to _______. The record goes on _______. And the standing exception is _______, reviewed on _______._'));
out.push(p('**Listener task:** count how many exception-holders are currently unwritten. ⚠ Then ask how many exceptions at the room\'s workplaces have already become rules, and let people name them.'));
out.push(p('**Board clinic:** your teacher writes three clauses on the board — look for *management discretion*, and a standing exception with no review date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — DEPARTURES. 26 March. N. Mansour. Section 3 of 4.**',
  table(['', 'The clause', 'The reason, in the margin'], [
    ['**3.1**', '⚠ **_Mr Ayoub may authorise a departure from this policy._**', '⚠ **one name. A rule everybody may set aside is a suggestion.**'],
    ['**3.2**', '⚠ **_In his absence the office manager may authorise a departure for one order, for not more than one month, and shall report it to him on his return._**', '⚠ **a second name with a limit, not a second discretion. This is the clause that gets used.**'],
    ['**3.3**', '**_Every departure shall be recorded on the account in the customer ledger, with the date and the initials of the person authorising it._**', '⚠ **in the ledger, where the counter can see it. A record in a drawer is not a record.**'],
    ['**3.4**', '⚠ **_A departure authorised for one order does not apply to any later order._**', '⚠ **September to October. This is the sentence the whole section exists for.**'],
    ['**3.5**', '⚠ **_A standing exemption may be granted in writing, and shall carry a review date not more than six months ahead. The Sabbagh account is exempt until 30 September._**', '⚠ **he pays in full on day ninety, deliberately, every time, and he is one of our four best accounts**'],
  ], [0.6, 4.1, 2.8]),
  '⚠ **3.4 is the sentence this section exists for and it is eighteen words.** **In September Mr Ayoub allowed Jaramana one order on credit because the man\'s son had died, and he was right.** **In October the counter gave them another, because the counter had seen September and assumed it was the arrangement.** ⚠ **By November it was 240,000 and nobody had decided anything since September.** **3.4 does not prevent generosity; it prevents generosity from becoming a standing arrangement nobody chose.**',
  '⚠ **3.5 is the clause I would have left out a week ago.** **Mr Sabbagh pays in full on day ninety every time and has for six years, and under section 2 he is sixty days overdue every single month.** ⚠ **The rule is right and it catches him wrongly** — **and without 3.5 somebody stops his order in August when Mr Ayoub is in Homs, and we lose a six-year account to a policy we asked for.**',
  '⚠ **And the review date in 3.5 is not administration.** **A standing exemption without a review date is a second policy with one customer in it**, ⚠ **and in five years nobody will remember why it exists.** **Six months is short enough that whoever renews it has to say why.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does 3.4 prevent, and what does it not prevent?'));
out.push(item('2', 'Why is 3.5 necessary, and what happens without it?'));
out.push(item('3', 'What is the review date for?'));
out.push(box('Writer\'s box', [
  '**A departures section — four parts:** ⚠ **one name** → ⚠ **a deputy with a limit** → **the record and its place** → ⚠ **the no-precedent sentence, and one standing exemption with a review date.**',
  '⚠ **Write the reason in the margin, beside each clause.** **It is not how policies are usually written and it is how they survive** — **a clause whose reason is on the page is a clause nobody deletes in two years to make the document tidier.**',
  '⚠ **The no-precedent sentence is the one the section exists for.** ⚠ *A departure authorised for one order does not apply to any later order.* **Eighteen words, and it does not prevent generosity — it prevents generosity becoming a standing arrangement nobody chose.**',
  '⚠ **Write the standing exemption for the account your rule catches correctly and wrongly.** ⚠ **A man who pays in full on day ninety deliberately is sixty days overdue every month and is one of your best accounts** — **and without the clause somebody stops his order in August while the exception-holder is away.**',
  '⚠ **Put a review date on every standing exemption and keep it short.** ⚠ **A standing exemption without a review date is a second policy with one customer in it**, **and in five years nobody will remember why.** **Six months is short enough that whoever renews it has to say why.**',
  '⚠ **And name the deputy clause as the one that gets used.** **The principal is away more often than anybody drafting the policy expects.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a departures section for a policy at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — DEPARTURES. ______________. Section ______________.**   **3.1** ⚠ **_______________ may authorise a departure from this policy._** | ⚠ **one name. ______________.**   **3.2** ⚠ **_In their absence ______________ may authorise a departure for ______________, for not more than ______________, and shall ______________._** | ⚠ **a second name with a limit. This is the clause that gets used.**   **3.3** **_Every departure shall be recorded on ______________, with ______________._** | ⚠ **______________. A record in a drawer is not a record.**   **3.4** ⚠ **_A departure authorised for ______________ does not apply to ______________._** | ⚠ **This is the sentence the whole section exists for.**   **3.5** ⚠ **_A standing exemption may be granted in writing and shall carry a review date not more than ______________ ahead. ______________ is exempt until ______________._** | ⚠ **______________**   ⚠ **3.4 does not prevent ______________; it prevents ______________ from becoming ______________ nobody chose.**   ⚠ **And the review date is not administration.** **Without one it is ______________, and in ______________ nobody will remember why it exists.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One name, and only one', ''],
  ['A deputy with a limit, not a second discretion', ''],
  ['The record, and where it lives', ''],
  ['A no-precedent sentence', ''],
  ['A standing exemption with a review date, and a reason in the margin', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their no-precedent sentence. ⚠ The class says what it would have stopped, naming a real case.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an exception at your work that became a rule (**200 to 240 words**). Say what it was, why it was granted, who granted the second one, what they were going on, and what it is now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what was the second grantor going on?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the second exception granted by somebody who had only seen the first? Usually all three — ⚠ **and in two of three the person who granted the first would not have granted the second.**'));
out.push(box('Homework', ['Write your final text. Then take a rule at your work, name its exception-holder and deputy, say where the record goes, and write the no-precedent sentence (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.4 =======================
out.push(pb());
out.push(h2('5.4  The definition that does the work'));
out.push(p('**Function:** defining the one term everything turns on   ·   **Grammar:** _in this policy, X means Y_   ·   **Pronunciation:** a definition read as a definition and not as an opinion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a word at your work that two people use differently. Say what each means by it.'));
out.push(p('**b**  Which definition does work? _A confirmed order means an order which has been confirmed. · In this policy, a confirmed order means an order for which a written acknowledgement has been issued with a price and a date._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many definitions does Bassel say a policy needs?   **A** as many as possible   **B** one or two, and they should be the ones that have caused arguments   **C** none'));
out.push(p('**b**  Listen again. **1** What three disputes does *confirmed order* settle? **2** What does he say about defining a word nobody argues about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  "Define the word that has cost you something"', [
  ['Nour', 'I have a definitions section. Eleven terms.'],
  ['Bassel', '⚠ **Read me the eleventh.**'],
  ['Nour', '*Goods means goods supplied by the company.*'],
  ['Bassel', '⚠ **Which nobody has ever argued about, and which now has to be read by everybody for ever.** ⚠ **How many of the eleven have cost this company money?**'],
  ['Nour', '…Two. *Account.* And *a confirmed order*.'],
  ['Bassel', '⚠ **Then there are two definitions.** ⚠ **A definition of a word nobody argues about is a line a reader has to get past to reach the one that matters.**'],
  ['Nour', 'And *a confirmed order*?'],
  ['Bassel', '⚠ **Tell me the three arguments it settles. If you cannot name three, it is not the word.**'],
  ['Nour', '⚠ **One: the plater\'s gauge error in January. We had told him 0.5 on the telephone and he says we never confirmed it.** ⚠ **Two: Jaramana in November, who say they never placed the second order, and somebody in the yard says they did.** ⚠ **Three: the eleven export quotations — are they orders yet, and are they held at the old price?**'],
  ['Bassel', '⚠ **Three real arguments, each with money in it.** **Now define it so all three are settled by the same sentence.**'],
  ['Nour', '*A written acknowledgement with a price and a date.*'],
  ['Bassel', '⚠ **Which settles all three, and which also means we were wrong about the plater.** ⚠ **We never sent him an acknowledgement.**'],
  ['Nour', 'So the definition costs us the plater argument.'],
  ['Bassel', '⚠ **It costs us an argument we were going to lose anyway, and it costs it to us in March instead of in a hearing.** ⚠ **A definition that only ever helps you is a definition you have written round yourself**, and the other side will read it too.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The definition that does the work**',
  table(['', 'Write', 'Why'], [
    ['**the form**', '⚠ *In this policy, a confirmed order means an order for which a written acknowledgement has been issued with a price and a date.*', '⚠ **_in this policy_ — it binds here and nowhere else**'],
    ['⚠ **the test**', '⚠ **name three arguments it settles, each with money in it**', '⚠ **if you cannot name three, it is not the word**'],
    ['**the count**', '**one or two definitions', '⚠ **a definition of a word nobody argues about is a line a reader must get past to reach the one that matters**'],
    ['⚠ **the honesty test**', '⚠ **does it cost you anything?**', '⚠ **a definition that only ever helps you is one you have written round yourself**'],
  ], [1.5, 3.4, 2.2]),
  '⚠ **Define the word that has cost you money, and nothing else.** ⚠ *Goods means goods supplied by the company* **has never settled anything and now has to be read by everybody for ever.**',
  '⚠ **The test is three arguments, each with money in it.** **For *a confirmed order*: the plater\'s gauge, the disputed November order, and the eleven export quotations.** ⚠ **If you cannot name three, it is not the word that needs defining.**',
  '⚠ **One sentence must settle all three.** ⚠ *A written acknowledgement with a price and a date* **settles the gauge (nothing was sent), the November order (nothing was sent) and the quotations (they are not orders).**',
  '⚠ **And check whether the definition costs you anything.** ⚠ **It settles the plater argument against us, because we never sent him an acknowledgement.** ⚠ **A definition that only ever helps you is a definition you have written round yourself, and the other side will read it too.**',
  '⚠ **Losing an argument in March instead of in a hearing is the definition earning its place.**',
  '**Practise:** Find the word at your work that has cost money. Name three arguments, and write one sentence that settles all three.',
  '**Useful phrases:**  how many have cost us money?  ·  name three arguments it settles  ·  if you cannot name three, it is not the word  ·  does it cost you anything?  ·  written round yourself',
  '**Pronunciation – a definition as a definition.** 🔊 **Track 5.8** Listen twice. ⚠ **The first reads *a confirmed order means* with a level tone and a clear stop at the end.** ⚠ **The second rises at the end, which turns it into a proposal.** **A definition that sounds like a proposal gets negotiated.** Read it four times, level, and stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a definitions list; B cuts it to the ones that do work.'));
out.push(dlg(null, [
  ['A', 'I have __________ definitions.'],
  ['B', '⚠ **How many of them have cost this company money?**'],
  ['A', '…__________.'],
  ['B', '⚠ **Then there are __________ definitions. Take __________. Name three arguments it settles.**'],
  ['A', 'One: __________. Two: __________. Three: __________.'],
  ['B', '⚠ **Now define it so all three are settled by the same sentence.**'],
  ['A', '__________.'],
  ['B', '⚠ **And does it cost you anything?**'],
  ['A', '⚠ Yes. It means we were wrong about __________.'],
  ['B', '⚠ **Then it is a real definition.**'],
]));
out.push(table(['Role card 1 — eleven down to two', 'Role card 2 — the definition that only helps'], [[
  '⚠ **Eleven definitions; two have cost money: *account* and *a confirmed order*.** ⚠ **Three arguments for *a confirmed order*: the plater\'s gauge, the disputed November order, the eleven export quotations** — ⚠ **settled by *a written acknowledgement with a price and a date*, which also loses us the plater argument.**',
  'A has written a definition that ⚠ **helps A in every case they can think of.** **B\'s job is to read it as the other side.** ⚠ **Find the case where it helps them and A loses** — **and if there is none, the definition is written round A and will be read by somebody who notices.** **5.6 is the whole of this move.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the definition and the three arguments it settles. ⚠ Then say what it costs the writer, and if the answer is nothing, say so.'));
out.push(PHRASE_CARD(['how many have cost us money?', 'name three arguments', 'not the word', 'does it cost you anything?', 'written round yourself']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** words at your work that two people use differently. Define one properly.'));
out.push(table(['The word', 'What each person means', 'Three arguments it would settle', 'The definition'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.8, 2.2, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The word is _______. _______ means _______ and _______ means _______. It would settle _______, _______ and _______. My definition is _______. And it costs me _______._'));
out.push(p('**Listener task:** count the definitions that cost their writer something. ⚠ Then ask about the ones that cost nothing, and read them as the other side.'));
out.push(p('**Board clinic:** your teacher writes three definitions on the board — look for a circular one (*X means X which has been X-ed*), and one written entirely in the writer\'s favour. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — DEFINITIONS. 28 March. N. Mansour. Section 2 of 4. ⚠ Two definitions, and eleven taken out.**',
  '**2.1  In this policy, _an account_ means the balance owed to the company by one customer on the customer ledger, taken on its own.** ⚠ **Where a customer is also a supplier, nothing owed by the company to that customer is set against the balance for the purposes of this policy.**',
  '**2.2  In this policy, _a confirmed order_ means an order for which the company has issued a written acknowledgement stating a price and a delivery date.**',
  table(['', 'The dispute it settles', 'Which way', 'What it cost us'], [
    ['**(a)**', '**the plater\'s gauge, January** — we told him 0.5 by telephone', '⚠ **against us: no acknowledgement was issued, so there was no confirmed order**', '⚠ **the argument, and about eleven sheets**'],
    ['**(b)**', '**Jaramana\'s second order, November** — they say they never placed it', '⚠ **against them: no acknowledgement either, so there was no confirmed order and the goods went out on nothing**', '**nothing — but it tells us how it happened**'],
    ['**(c)**', '**the eleven export quotations** — are they orders, and at which price?', '**they are not orders; the quotation holds fourteen days and then lapses', 'nothing'],
    ['**(d)**', '⚠ **the customer who is also a supplier** — settled by 2.1', '⚠ **against him: his 300,000 is overdue whatever we owe him**', '⚠ **an uncomfortable conversation in April**'],
  ], [0.5, 2.9, 2.9, 2]),
  '⚠ **Row (a) is the reason I believe this definition is honest.** **It loses us an argument.** **We told the plater 0.5 on the telephone, we never sent an acknowledgement, and under 2.2 there was no confirmed order** — ⚠ **so the hundred sheets at the wrong gauge are our fault and not his.** **I would rather know that in March than be told it by somebody else.**',
  '⚠ **And row (b) is the finding I did not expect.** **Jaramana say they never placed the October order, and Abu Yasser says somebody telephoned the yard.** ⚠ **Under 2.2 there was no confirmed order either way, which means the goods went out on nothing at all** — **and the question is no longer who is lying but why the yard releases goods without an acknowledgement.** **That is section 4 and it is a procedure, not a policy.**',
  '⚠ **Eleven definitions came out.** *Goods · delivery · the company · the customer · a day · in writing · the ledger · an order · supply · a site · a month.* ⚠ **Not one of them has ever cost this company anything, and all eleven would have had to be read by everybody for ever to reach 2.2.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row shows the definition is honest, and how?'));
out.push(item('2', 'What did row (b) turn out to be about?'));
out.push(item('3', 'How many definitions came out, and what was wrong with them?'));
out.push(box('Writer\'s box', [
  '**A definitions section — four parts:** ⚠ **one or two definitions, no more** → ⚠ **a table: *the dispute · which way · what it cost us*** → **the row that costs you something** → ⚠ **and the list of what you took out.**',
  '⚠ **Put *which way* in its own column.** **A definition settles a dispute in a direction, and writing the direction down is the only way to see whether you have written round yourself.** ⚠ **A column of four *in our favour* is a definition nobody else will accept.**',
  '⚠ **Keep the row that loses you something and say why you keep it.** ⚠ *It loses us an argument. I would rather know that in March than be told it by somebody else.*',
  '⚠ **Expect a definition to turn a question of blame into a question of procedure.** ⚠ **Under 2.2 the disputed order was not confirmed either way, so the goods went out on nothing** — ⚠ **and the question stops being who is lying and becomes why the yard releases goods without an acknowledgement.**',
  '⚠ **Write out what you took out.** ⚠ **Eleven terms, none of which has ever cost anything, all of which would have had to be read by everybody for ever** — **and listing them is what stops somebody putting them back.**',
  '⚠ **And handle the customer-who-is-also-a-supplier case explicitly if you have one.** **It is the case that cannot be decided by reading the rule, only by defining a word.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a definitions section for a policy at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — DEFINITIONS. ______________. Section ______________. ⚠ ______________ definitions, and ______________ taken out.**   **2.1  In this policy, _______________ means ______________.** ⚠ **Where ______________, ______________.**   **2.2  In this policy, _______________ means ______________.**   **(a)** ______________ | ⚠ **against us: ______________** | ⚠ **______________**   **(b)** ______________ | ⚠ **______________** | ______________   **(c)** ______________ | ______________ | ______________   ⚠ **Row (a) is the reason I believe this definition is honest.** **It loses us an argument.** ⚠ **I would rather know that in ______________ than be told it by somebody else.**   ⚠ **And row (b) is the finding I did not expect.** ⚠ **Under 2.2 ______________, which means ______________** — **and the question is no longer ______________ but ______________.**   ⚠ **______________ definitions came out.** ______________. ⚠ **Not one of them has ever cost anything.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two definitions at most', ''],
  ['A *which way* column, with at least one against the writer', ''],
  ['A reason for keeping the row that costs you something', ''],
  ['A dispute turned from blame into procedure', ''],
  ['The list of definitions taken out', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the row that costs them something. ⚠ The class says what it costs, and anybody whose column is all in their own favour reads theirs as the other side.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a word at your work that has cost somebody money (**200 to 240 words**). Say what the word is, who meant what by it, what happened, and what one sentence would have prevented.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would the definition have helped or hurt the writer?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the honest definition have gone against the writer\'s own side? Usually two of three — ⚠ **and in at least one nobody has written it since, for that reason.**'));
out.push(box('Homework', ['Write your final text. Then take the word at your work that has cost most, name three arguments it would settle, write one sentence, and say which way each goes (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.5 =======================
out.push(pb());
out.push(h2('5.5  Not only … but'));
out.push(p('**Function:** writing a two-part obligation   ·   **Grammar:** _not only X but Y · X and Y, and neither alone_   ·   **Pronunciation:** the second half said with equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something at your work that must be done twice over — checked and signed, dated and acknowledged. Say which half gets forgotten.'));
out.push(p('**b**  Which obligation can be half-met? _Goods must be counted and signed for. · Goods are not released until they have been counted and the count has been signed by the person who made it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about *counted and signed*?   **A** both always happen   **B** the second half is done by whoever is nearest, which is not the counter   **C** neither happens'));
out.push(p('**b**  Listen again. **1** What is the fault in *counted and signed*? **2** What does he say both halves have to share?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  "Who signs is the whole sentence"', [
  ['Nour', 'Section 4: *goods are counted and signed for before release.*'],
  ['Abu Yasser', '⚠ **Signed by whom?**'],
  ['Nour', 'Whoever counts.'],
  ['Abu Yasser', '⚠ **It does not say that.** ⚠ **It says counted and signed, and on a Thursday afternoon the man who counts is in the racks and the man who signs is at the gate with the driver waiting.**'],
  ['Nour', 'And they are different men.'],
  ['Abu Yasser', '⚠ **They have been different men about once a fortnight for nineteen years.** ⚠ **Both halves get done and the sentence is satisfied and nobody has counted what they signed for.**'],
  ['Nour', 'So I write *signed by the person who counted*.'],
  ['Abu Yasser', '⚠ **Then the two halves share a person and neither can be done alone.** **That is the difference.** ⚠ **Not two obligations — one obligation with two parts that cannot be separated.'],
  ['Nour', 'Give me another.'],
  ['Abu Yasser', '⚠ **Dated and acknowledged.** **A note is dated by the man who writes it and acknowledged by the man who gets it** ⚠ **— and if the acknowledgement does not carry the date of the note, you have two pieces of paper that cannot be matched.** **We have a drawer of them.**'],
  ['Nour', 'So the link is the thing to write, not the two halves.'],
  ['Abu Yasser', '⚠ **The halves everybody remembers. The link is what the sentence is for.** ⚠ **Counted *and signed by the counter*. Dated *and acknowledged by reference to that date*.**'],
  ['Nour', 'And *not only … but*?'],
  ['Abu Yasser', '⚠ **That is for when the second half is the one people will drop.** ⚠ *The count is not only made but signed by the person who made it.* **It tells a reader which half is the one that gets lost, which is the one worth the extra words.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two-part obligations, and the link**',
  table(['', 'Separable — fails', 'Linked — holds'], [
    ['**the count**', '*goods are counted and signed for*', '⚠ **_signed by the person who made the count_**'],
    ['**a note**', '*dated and acknowledged*', '⚠ **_acknowledged by reference to the date of the note_**'],
    ['**an order**', '*priced and dated*', '**_priced and dated on the same acknowledgement_**'],
    ['⚠ **the emphasis form**', '—', '⚠ **_the count is not only made but signed by the person who made it_**'],
  ], [1.2, 2.3, 2.8]),
  '⚠ **A two-part obligation with no link between the halves is satisfied by two people doing half each.** ⚠ **On a Thursday afternoon the man who counts is in the racks and the man who signs is at the gate with the driver waiting** — **both halves get done, the sentence is satisfied, and nobody has counted what they signed for.**',
  '⚠ **Write the link, not the halves.** **Everybody remembers the halves.** ⚠ **_Counted and signed by the counter_. _Dated and acknowledged by reference to that date._** **The link is the only part that cannot be done by accident.**',
  '⚠ **An unlinked *dated and acknowledged* leaves two pieces of paper that cannot be matched** — **and a drawer of unmatched paper is the normal result.**',
  '⚠ **Use *not only … but* when the second half is the one people drop.** ⚠ *The count is not only made but signed by the person who made it.* **It tells a reader which half gets lost, which is the half worth the extra words.**',
  '⚠ **And test every two-part obligation by asking whether two people could satisfy it between them without either doing the whole thing.** **If they could, it has no link.**',
  '**Practise:** Take three two-part obligations at your work. Find the link in each, or write one.',
  '**Useful phrases:**  signed by whom?  ·  it does not say that  ·  both halves done and nobody has counted  ·  write the link, not the halves  ·  which half gets lost',
  '**Pronunciation – the second half with equal weight.** 🔊 **Track 5.10** Listen twice. ⚠ **The first gives *counted* and *signed by the person who made the count* the same weight.** ⚠ **The second rushes the second half.** **A rushed second half is heard as a formality, and formalities are what get done by whoever is nearest.** Read it four times with both halves even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a two-part obligation; B separates it.'));
out.push(dlg(null, [
  ['A', '__________ are __________ and __________.'],
  ['B', '⚠ **__________ by whom?**'],
  ['A', 'Whoever __________.'],
  ['B', '⚠ **It does not say that. Could two people do half each?**'],
  ['A', '…Yes. On a __________ they would.'],
  ['B', '⚠ **Then write the link.**'],
  ['A', '__________ by the person who __________.'],
  ['B', '⚠ **And which half gets lost?**'],
  ['A', 'The __________.'],
  ['B', '⚠ **Then: _not only __________ but __________._**'],
]));
out.push(table(['Role card 1 — Thursday afternoon', 'Role card 2 — the drawer of unmatched paper'], [[
  '*Goods are counted and signed for before release.* ⚠ **On a Thursday the counter is in the racks and the signer is at the gate with a driver waiting, and they have been different men about once a fortnight for nineteen years.** ⚠ **The link: _signed by the person who made the count._**',
  'A has *dated and acknowledged*. ⚠ **B asks what the acknowledgement refers to.** ⚠ **Nothing — it has its own date and does not name the note\'s** — **so the two cannot be matched, and B describes the drawer.** ⚠ **The link: _acknowledged by reference to the date of the note._**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the obligation, how two people could satisfy it between them, and the link that stops them. ⚠ Then say which half gets lost.'));
out.push(PHRASE_CARD(['signed by whom?', 'it does not say that', 'half each on a Thursday', 'write the link', 'which half gets lost']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** two-part obligations at your work. Link each one.'));
out.push(table(['The obligation', 'How two people satisfy it between them', 'The link', 'Which half gets lost'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 2, 1.8, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The obligation is _______. Two people satisfy it by _______. The link is _______. And the half that gets lost is _______._'));
out.push(p('**Listener task:** count the obligations in the room with no link in them. ⚠ Then ask how many have a drawer of unmatched paper somewhere as a result.'));
out.push(p('**Board clinic:** your teacher writes three obligations on the board — look for *checked and approved* with no link, and a *not only … but* whose second half is the easy one. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — RELEASE. 30 March. N. Mansour. Section 4 of 4. ⚠ Four obligations, each with its link.**',
  table(['', 'The obligation', 'The link', 'Which half gets lost'], [
    ['**4.1**', '⚠ **_Goods are not released until the account has been looked at on the ledger and the person releasing them has initialled the gate sheet to say so._**', '⚠ **the same person looks and initials**', '⚠ **the looking. Initialling takes two seconds and looking takes a walk to the office.**'],
    ['**4.2**', '**_An order taken by telephone is not released until a written acknowledgement has been issued stating a price and a date._**', '**the acknowledgement is the release condition, not a later formality**', '⚠ **the acknowledgement. This is how Jaramana\'s November order went out on nothing.**'],
    ['**4.3**', '⚠ **_A count is not only made but signed by the person who made it._**', '⚠ **the signature belongs to the counter**', '⚠ **the signature belonging. Both halves get done by two men about once a fortnight.**'],
    ['**4.4**', '**_A departure is not effective until it has been recorded on the account with the date and initials of the person authorising it._**', '**the record is a condition of the departure, not a note about it**', '**the record. September to October.**'],
  ], [0.6, 4, 2.4, 2.4]),
  '⚠ **The pattern in all four is the same and it is not *do both things*.** ⚠ **It is *the second thing is a condition of the first*.** **Goods are not released until. An order is not released until. A departure is not effective until.** ⚠ **_And_ lets two people do half each; _until_ does not.**',
  '⚠ **4.1 is the one that will be resented and I want to say so.** **Looking at the ledger means a walk from the gate to the office, and on a Thursday with a driver waiting that is four minutes nobody has.** ⚠ **The honest answer is that the ledger has to be where the gate is, and that is not a policy, it is a second copy of one page**, **and I have asked for it in the covering note.**',
  '⚠ **And 4.3 has nineteen years behind it.** **Abu Yasser told me that the man who counts and the man who signs have been different men about once a fortnight since 1998** — **because the counter is in the racks and the signer is at the gate.** ⚠ **Nobody has ever broken a rule. The rule was written so that it could be satisfied by two people, and it has been, about five hundred times.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the pattern in all four, and what is the key word?'));
out.push(item('2', 'Which clause will be resented, and what is the honest answer?'));
out.push(item('3', 'How many times has 4.3\'s fault happened, and whose fault is it?'));
out.push(box('Writer\'s box', [
  '**Linked obligations — four parts:** ⚠ **each obligation written as *not … until*** → **the link, named** → ⚠ **which half gets lost, with the reason** → ⚠ **and the clause that will be resented, admitted.**',
  '⚠ **Use *until*, not *and*.** ⚠ **_And_ lets two people do half each; _until_ makes the second thing a condition of the first.** **That single change is most of this cycle.**',
  '⚠ **Say which half gets lost and why it gets lost.** ⚠ *Initialling takes two seconds and looking takes a walk to the office.* **A half that is lost for a physical reason cannot be fixed by wording**, and naming the reason is what gets the physical thing fixed.',
  '⚠ **Admit the clause that will be resented, and say what would answer it.** ⚠ **Four minutes with a driver waiting is a real objection** — **and the answer is a second copy of one ledger page at the gate, which is not a policy at all.**',
  '⚠ **Count how often the fault has happened.** ⚠ **About five hundred times in nineteen years, and nobody has ever broken the rule** — **the rule was written so that it could be satisfied by two people.** **That sentence is worth more than any amount of exhortation.**',
  '⚠ **And keep each obligation to one sentence.** **An obligation that needs two sentences has two obligations in it and should be split, each with its own link.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a release section with linked obligations (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________. ______________. Section ______________. ⚠ ______________ obligations, each with its link.**   **4.1** ⚠ **_______________ is not ______________ until ______________ and ______________._** | ⚠ **______________** | ⚠ **______________**   **4.2** **_______________ is not ______________ until ______________._** | **______________** | ⚠ **______________**   **4.3** ⚠ **_______________ is not only ______________ but ______________._** | ⚠ **______________** | ⚠ **______________**   ⚠ **The pattern in all of them is not *do both things*.** ⚠ **It is *the second thing is a condition of the first*.** ⚠ **_And_ lets two people do half each; _until_ does not.**   ⚠ **______________ is the one that will be resented and I want to say so.** ______________. ⚠ **The honest answer is that ______________, and that is not a policy, it is ______________.**   ⚠ **And ______________ has ______________ behind it.** ⚠ **Nobody has ever broken the rule. The rule was written so that it could be satisfied by two people, and it has been, about ______________ times.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*until*, not *and*', ''],
  ['The link named for each obligation', ''],
  ['Which half gets lost, with a physical reason', ''],
  ['The resented clause admitted, with what would answer it', ''],
  ['A count of how often the fault has happened', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *which half gets lost*. ⚠ The class says whether the reason is physical — and if it is, wording will not fix it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a two-part rule at your work that has been satisfied by two people for years (**200 to 240 words**). Say what it says, how it is actually done, why, whether anybody has broken it, and what the link would be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _has anybody actually broken the rule?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has nobody broken the rule? Usually all three — ⚠ **and in all three the rule was written so that it could be kept by two people doing half each.**'));
out.push(box('Homework', ['Write your final text. Then take three two-part obligations at your work, test each by asking whether two people could satisfy it between them, and write the link (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.6 =======================
out.push(pb());
out.push(h2('5.6  The policy that will be quoted against you'));
out.push(p('**Function:** reading your own policy as the other side   ·   **Grammar:** _read against me, this sentence says_   ·   **Pronunciation:** reading your own sentence in somebody else\'s voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a rule at your work that somebody outside has used against you. Say who.'));
out.push(p('**b**  Which sentence would you rather be held to? _We aim to acknowledge all orders within one working day. · An order is acknowledged in writing before goods are released._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say the policy becomes once it is issued?   **A** internal guidance   **B** a document the other side may hold you to   **C** nothing'));
out.push(p('**b**  Listen again. **1** Which sentence does he say to take out? **2** What does he say about *we aim to*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  "Now read it as the customer"', [
  ['Mr Sayegh', 'It is a sound policy. Now read it as a customer who has been refused goods.'],
  ['Nour', '…Section 2.2 is the one I would use. *A confirmed order means one for which the company has issued a written acknowledgement.*'],
  ['Mr Sayegh', '⚠ **And what would you say with it?**'],
  ['Nour', 'That the company issues acknowledgements, so a customer who does not get one has been let down by us and not the other way round.'],
  ['Mr Sayegh', '⚠ **Which is correct and is the first thing a careful customer will say.** ⚠ **A definition binds both ways. You cannot define a term for your own protection and then be surprised when it protects them.**'],
  ['Nour', 'Do I take it out?'],
  ['Mr Sayegh', '⚠ **No. You keep it and you keep the obligation that goes with it, because the obligation is the price of the definition and the definition is worth more.** ⚠ **What you take out is section 5.**'],
  ['Nour', '*We aim to acknowledge all orders within one working day.*'],
  ['Mr Sayegh', '⚠ **_We aim to_ is a promise with no obligation and no remedy, which is the worst of both.** ⚠ **A customer will read *we aim to* as *we will*, and when you do not, you have broken a promise you never made.**'],
  ['Nour', 'And if I write *we will acknowledge within one working day*?'],
  ['Mr Sayegh', '⚠ **Then you have made the promise, and you must be able to keep it on a Thursday in August with one person in the office.** ⚠ **Can you?**'],
  ['Nour', '…No. Not within one day. Within three.'],
  ['Mr Sayegh', '⚠ **Then write three and keep it.** ⚠ **A policy that promises one day and delivers three has handed the other side a document.** **A policy that promises three and delivers two has handed them nothing and you look better than you said.'],
  ['Nour', 'Nobody drafts the number they can actually do.'],
  ['Mr Sayegh', '⚠ **Nobody drafts a document expecting to be shown it in a dispute, which is the only time anybody reads one closely.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reading your own policy as the other side**',
  table(['The sentence', 'Read against you, it says', 'What to do'], [
    ['*a confirmed order means one for which the company has issued a written acknowledgement*', '⚠ **that you issue acknowledgements, so a customer without one was let down by you**', '⚠ **keep it — the obligation is the price of the definition, and the definition is worth more**'],
    ['⚠ **_we aim to acknowledge within one working day_**', '⚠ **a promise with no obligation and no remedy, read as *we will***', '⚠ **take it out**'],
    ['*we will acknowledge within three working days*', '**a promise you can keep in August with one person in the office**', '**keep it, and keep it**'],
  ], [2.3, 2.3, 2.4]),
  '⚠ **A definition binds both ways.** ⚠ **You cannot define a term for your own protection and then be surprised when it protects them** — **and the obligation that comes with it is the price of having the definition at all.**',
  '⚠ **_We aim to_ is the worst sentence in any policy.** ⚠ **It is a promise with no obligation and no remedy**, **and a customer reads it as *we will*** — **so when you do not, you have broken a promise you never made.**',
  '⚠ **Write the number you can keep on a Thursday in August with one person in the office.** ⚠ **A policy that promises one day and delivers three has handed the other side a document; one that promises three and delivers two has handed them nothing** — **and you look better than you said.**',
  '⚠ **Nobody drafts a document expecting to be shown it in a dispute, which is the only time anybody reads one closely.** **That sentence is the whole argument for this cycle.**',
  '⚠ **The method: read every clause aloud in the voice of the person who would most like to use it against you** — **a customer refused goods, a supplier chasing payment, an employee who did not get something.**',
  '**Practise:** Take your own policy. Read three clauses as the other side, and say for each whether to keep it, change the number, or take it out.',
  '**Useful phrases:**  read it as the customer  ·  a definition binds both ways  ·  the obligation is the price of the definition  ·  a promise with no obligation and no remedy  ·  the number you can keep in August',
  '**Pronunciation – your own sentence in somebody else\'s voice.** 🔊 **Track 5.12** Listen to *we aim to acknowledge all orders within one working day* read twice. ⚠ **The first is read by its author, lightly.** ⚠ **The second is read slowly by a customer quoting it.** **The same words, and in the second reading *aim* disappears entirely.** Read a clause of your own aloud slowly, four times, as somebody quoting it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a policy; B reads it as the other side.'));
out.push(dlg(null, [
  ['B', 'Now read it as __________ who has been __________.'],
  ['A', '…__________ is the one I would use.'],
  ['B', '⚠ **And what would you say with it?**'],
  ['A', 'That __________.'],
  ['B', '⚠ **Which is correct. Do you take it out?**'],
  ['A', '__________.'],
  ['B', '⚠ **And __________?**'],
  ['A', '*We aim to __________.*'],
  ['B', '⚠ **A promise with no obligation and no remedy. Can you do it on a Thursday in August with one person in the office?**'],
  ['A', '…No. __________.'],
  ['B', '⚠ **Then write that and keep it.**'],
]));
out.push(table(['Role card 1 — the definition that binds both ways', 'Role card 2 — we aim to'], [[
  '⚠ **B is a customer refused goods and uses 2.2: the company issues acknowledgements, so a customer without one was let down by the company.** ⚠ **Correct, and the clause stays** — **the obligation is the price of the definition and the definition is worth more.**',
  'A has *we aim to* somewhere. ⚠ **B asks the one question: can you do it on a Thursday in August with one person in the office?** ⚠ **The answer is no.** **Then B offers the choice: take it out, or write the number you can keep.** ⚠ **And B points out that three delivered in two looks better than one delivered in three.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the clause the other side would use and what they would say with it. ⚠ Then say whether it was kept, changed or taken out, and why.'));
out.push(PHRASE_CARD(['read it as the customer', 'binds both ways', 'the price of the definition', 'no obligation and no remedy', 'the number you can keep in August']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** clauses from a document at your work. Read each as the other side.'));
out.push(table(['The clause', 'Who would use it', 'What they would say with it', 'Keep, change or cut'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.2, 2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The clause is _______. _______ would use it to say _______. I would _______ it, because _______._'));
out.push(p('**Listener task:** count the *we aim to* sentences in the room. ⚠ Then ask how many of the promises could be kept on a Thursday in August with one person in the office.'));
out.push(p('**Board clinic:** your teacher writes three clauses on the board — look for *we aim to* and *we endeavour to*, and a definition kept only because it protects the writer. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CREDIT POLICY — READ AS THE OTHER SIDE. 31 March. N. Mansour. Before issue, and nothing in this note goes out with it.**',
  table(['', 'The clause', 'Used against us, it says', 'Decision'], [
    ['**2.2**', '*a confirmed order means one for which the company has issued a written acknowledgement*', '⚠ **the company issues acknowledgements; a customer without one was let down by us**', '⚠ **keep. The obligation is the price of the definition and the definition is worth more.**'],
    ['**4.2**', '*an order taken by telephone is not released until an acknowledgement has been issued*', '⚠ **so the November order should never have gone out, and the fault is entirely ours**', '⚠ **keep, and it is true, and Jaramana may read it**'],
    ['**5.1**', '⚠ **_we aim to acknowledge all orders within one working day_**', '⚠ **a promise with no obligation and no remedy, read as *we will***', '⚠ **cut, and replaced: _three working days_, which we can keep in August**'],
    ['**3.1**', '*Mr Ayoub may authorise a departure*', '**that departures are available, so a refused customer may ask for one**', '⚠ **keep. A refused customer asking Mr Ayoub is the policy working, not failing.**'],
    ['**1.2(b)**', '*this policy does not apply to the two Baghdad Street concession stalls*', '⚠ **that the stalls get credit the accounts do not** — **a trade customer could make something of that**', '⚠ **keep, and add the reason into the clause: they hold no account and pay on collection**'],
  ], [0.7, 3.1, 3, 2.6]),
  '⚠ **Row 4.2 is the one I sat with for an evening.** **Writing it means writing that the November order went out on nothing and that the fault is ours and not Jaramana\'s.** ⚠ **They owe us 240,000 and this sentence weakens us on about 90,000 of it.** **It stays, because it is true, and because the alternative is a policy that has a hole in it exactly where our own worst mistake was.**',
  '⚠ **Row 1.2(b) is the one I would not have found without reading as the other side.** **A trade customer who is refused goods and knows the stalls are not refused has a grievance** — ⚠ **not a legal one, a human one, which is worse** — **and the remedy is four words of reason inside the clause, not an argument afterwards.**',
  '⚠ **And the general finding, which I am putting in writing so that whoever revises this in five years does not undo it.** ⚠ **Four of the five clauses that read badly against us are staying.** **A policy with nothing in it that can be used against you is a policy that imposes no obligations on you at all** — ⚠ **and a customer reading such a document knows exactly what it is.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row did the writer sit with for an evening, and what does it cost?'));
out.push(item('2', 'Which row would she not have found, and what is the remedy?'));
out.push(item('3', 'What is the general finding, and who is it written for?'));
out.push(box('Writer\'s box', [
  '**Read as the other side — four parts:** ⚠ **a table: *the clause · used against us · decision*** → ⚠ **the row that costs you money, kept** → **the row you would not have found** → ⚠ **and the general finding, written for whoever revises it.**',
  '⚠ **Put a *decision* column with three possible values: keep, change, cut.** **Most rows are *keep*, and a table that is all *cut* means the policy imposed nothing.**',
  '⚠ **Keep the clause that costs you money if it is true.** ⚠ **The alternative is a policy with a hole in it exactly where your own worst mistake was** — **and that hole is the first thing a careful reader looks for.**',
  '⚠ **Expect to find a grievance that is human rather than legal.** ⚠ **A customer refused goods who knows the concession stalls are not refused has no case and has a complaint** — **and the remedy is four words of reason inside the clause, not an argument afterwards.**',
  '⚠ **Cut *we aim to* and write the number you can keep.** **And say what you replaced it with, so that nobody restores the shorter number later because it reads better.**',
  '⚠ **Then write the general finding for the person who will revise this.** ⚠ **A policy with nothing in it that can be used against you imposes no obligations on you at all, and a customer reading it knows exactly what it is.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Read a document of your own as the other side (**80 words or more**). Use the frame.'));
out.push(p('**______________ — READ AS THE OTHER SIDE. ______________. Before issue, and nothing in this note goes out with it.**   ______________ | ______________ | ⚠ **______________** | ⚠ **keep. ______________.**   ______________ | ______________ | ⚠ **______________** | ⚠ **keep, and it is true**   ______________ | ⚠ **_we aim to _______________** | ⚠ **a promise with no obligation and no remedy** | ⚠ **cut, and replaced: ______________, which we can keep in ______________**   ______________ | ______________ | ⚠ **______________** | ⚠ **keep, and add the reason into the clause: ______________**   ⚠ **Row ______________ is the one I sat with for an evening.** **Writing it means writing that ______________.** ⚠ **It weakens us on about ______________.** **It stays, because it is true, and because the alternative is ______________.**   ⚠ **Row ______________ is the one I would not have found without reading as the other side.** ⚠ **______________ has a grievance — not a legal one, a human one, which is worse** — **and the remedy is ______________.**   ⚠ **And the general finding, for whoever revises this in five years:** ⚠ **______________ of the ______________ clauses that read badly against us are staying.** ⚠ **A policy with nothing in it that can be used against you imposes no obligations on you at all.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *decision* column with keep, change and cut in it', ''],
  ['A clause kept although it costs money, with the reason', ''],
  ['A grievance that is human rather than legal', ''],
  ['*We aim to* cut, and the replacement number stated', ''],
  ['The general finding, addressed to the next reviser', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the clause they kept although it costs them. ⚠ The class says what the version without it would have looked like to a careful reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document of your workplace\'s that was used against it (**200 to 240 words**). Say what it said, who used it, what they said with it, whether the clause was changed afterwards, and whether it should have been.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _should the clause have been changed, or kept?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the clause an *aim* or an *endeavour*? Usually two of three — ⚠ **and in at least one it was changed afterwards to a weaker promise rather than a keepable one.**'));
out.push(box('Homework', ['Write your final text. Then read four clauses of a real document of yours aloud as the person who would most like to use them against you, and decide keep, change or cut for each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review & Mediate: the policy we have never written'));
out.push(p('**Function:** explaining a new policy to the people who will apply it   ·   **Review:** rule against instruction · scope and exclusion · the exception-holder · the definition · linked obligations · reading as the other side'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the difference between an instruction and a rule, and what is the test of a rule?',
  '**2** What happens to every exclusion you do not write?',
  '**3** Why must a departure be recorded, and what does the record change?',
  '**4** How do you know whether a word needs defining?',
  '**5** Why is *until* better than *and* in a two-part obligation?',
  '**6** What is wrong with *we aim to*?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina say she has been doing?   **A** nothing   **B** applying a rule nobody has written, for three weeks   **C** refusing everybody'));
out.push(p('**b**  Listen again. **1** What is her rule? **2** Where did she get it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  "I have been doing it already"', [
  ['Nour', 'This takes effect on the first. Sixty days overdue, no release, and you point at the page.'],
  ['Lina', 'I have been doing it already.'],
  ['Nour', 'Doing what?'],
  ['Lina', '⚠ **Not releasing to people who owe.** ⚠ **Three weeks. Four times.**'],
  ['Nour', 'On what basis?'],
  ['Lina', '**On the ledger.** ⚠ **If the balance is red and it is older than the month before last, I say the office has to approve it and I telephone you, and you have always said yes or no and I have never written it down.**'],
  ['Nour', '…That is the policy. That is almost exactly the policy.'],
  ['Lina', '**Is it?**'],
  ['Nour', '⚠ **Older than the month before last is about sixty days.** ⚠ **You invented the rule I have spent nine days drafting, in your third week, because somebody had to answer a man at a counter.**'],
  ['Lina', 'I thought I was guessing.'],
  ['Nour', '⚠ **You were, and you guessed the same as Mr Attar and me, which means it was not a guess** — **it is what the ledger makes anybody do who is standing in front of it.**'],
  ['Lina', 'So what does the page change?'],
  ['Nour', '⚠ **Three things, and none of them is the rule.** ⚠ **You stop telephoning me, because you can point at it. The four times you have already done it become four decisions instead of four guesses. And when somebody says *you let Jaramana have it in September*, you have a sentence that says September does not apply to October.**'],
  ['Lina', 'And if I had got it wrong?'],
  ['Nour', '⚠ **You would have got it wrong for three weeks with nothing to point at and nobody would have known until November.** ⚠ **Which is what happened in September, and that is why there is a page.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a policy that was already being applied**',
  table(['What you expect to say', 'What you hear', 'What the page actually changes'], [
    ['*this takes effect on the first*', '⚠ *I have been doing it already — three weeks, four times*', '⚠ **nothing about the rule**'],
    ['*on what basis?*', '⚠ *on the ledger — older than the month before last*', '⚠ **which is about sixty days**'],
    ['—', '*I telephone you and you say yes or no and I never write it down*', '⚠ **she stops telephoning, because she can point at it**'],
    ['—', '*I thought I was guessing*', '⚠ **four guesses become four decisions**'],
    ['—', '*you let Jaramana have it in September*', '⚠ **a sentence that says September does not apply to October**'],
  ], [1.9, 2.3, 2.1]),
  '⚠ **Ask what people are doing before you tell them what to do.** ⚠ **The rule you have spent nine days drafting is usually being applied already, by whoever is standing in front of the ledger** — **because it is what the ledger makes anybody do.**',
  '⚠ **When two people who have never discussed it reach the same rule, it was not a guess.** **Lina\'s *older than the month before last* and the drafted *sixty days* are the same rule found twice.**',
  '⚠ **Say what the page changes, and it is never the rule.** ⚠ **She stops telephoning. Her four guesses become four decisions. And she has a sentence for *you let Jaramana have it in September*.**',
  '⚠ **The third of those is the one that matters to the person at the counter**, because the argument she loses is never about the rule — **it is about a precedent somebody else set.**',
  '⚠ **And say what would have happened if she had guessed wrong.** ⚠ **Three weeks with nothing to point at and nobody would have known until November** — **which is what happened in September, and is why there is a page.**',
  '**Practise:** Explain a new rule to somebody who applies it already. Ask what they do, find out where they got it, and say what the page changes.',
  '**Useful phrases:**  I have been doing it already  ·  on what basis?  ·  older than the month before last  ·  I thought I was guessing  ·  four guesses become four decisions',
  '**Pronunciation – hearing an answer you did not expect.** 🔊 **Track 5.14** Listen to *I have been doing it already* twice, and to the two replies. ⚠ **The first reply is *doing what?* — open, and it gets the rule.** ⚠ **The second is *yes, but from the first it is written down* — and it gets nothing.** **Say *doing what?* four times, and leave the pause.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A announces a new rule; B is already applying one. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A announces the credit rule; B says they have been doing it for three weeks.** ⚠ **A asks on what basis and gets *older than the month before last*, which is sixty days.** **Then A names the three things the page changes — and none of them is the rule.**',
  'B has been applying an unwritten rule and ⚠ **believes they have been guessing.** **B gives the basis only if asked openly.** ⚠ **If A says *yes, but from the first it is written down*, B says nothing more** — **and A never learns that the rule already exists, which is what happens in most offices.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the unwritten rule and where it came from. ⚠ Then write the three things the page changes.'));
out.push(PHRASE_CARD(['I have been doing it already', 'on what basis?', 'the same rule found twice', 'guesses become decisions', 'September does not apply to October']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a one-page policy. Read it silently. Then explain it to **two** people who will apply it, and ask each what they do now.'));
out.push(table(['Who I told', 'What they are already doing', 'Where they got it', 'What the page changes'], [['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.4, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the policy. This is the **fifth** unit of this book, and the unwritten thing is this: ⚠ **most of what a firm does is governed by rules nobody has written, invented independently by whoever stands in front of the evidence — and those rules are usually right, and they are always undated, unattributable and defenceless, so the first person who sets a precedent against one destroys it, and the person applying it does not find out until somebody says *but you let them have it in September*.**'));
out.push(p('_The page says _______. The person applying it already does _______, which they got from _______. What the page changes is _______, and not the rule._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _the scope of a policy · a saving provision · a standing exception · a commencement date · a term of art · a departure from policy_. ⚠ Thirty items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a policy announced to somebody who already applies it, and a page whose author thinks the rule is the change. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)', 10));
out.push(p('⚠ **This unit is Part 2: sentence insertion.** Five sentences have been removed from the text. Choose from **A–F** the sentence which fits each gap **1–5**. ⚠ **There is one extra sentence which you do not need to use.**'));
out.push(box(null, [
  '**WRITING A FIRST POLICY — notes for a trade association bulletin**',
  'A firm that has operated for twenty years without a written policy has not operated without rules. **(1)** ______ The difficulty in writing the first one is therefore not invention but excavation: most of what needs to be written down already exists, unwritten, in the practice of whoever stands closest to the evidence.',
  'The commonest first draft is not a policy at all. It names a particular customer, a particular order or a particular week, and it ends when that case is settled. **(2)** ______ The remedy is to name the class rather than the case, and then to test the wording by inventing a situation nobody has met.',
  'Exclusions cause more trouble than scopes. Every exclusion that is not written is granted, informally, by whoever is asked for it — usually at a counter, usually in the afternoon, usually by somebody with nothing to point at. **(3)** ______',
  'A policy must also say who may depart from it, and that person must be one person. **(4)** ______ The record matters more than the permission: an unrecorded departure becomes a precedent within weeks, because the next person to decide has seen the first decision and has not seen the reasoning behind it.',
  'Finally, a policy should be read once in the voice of the person most likely to quote it against the firm. **(5)** ______ The test of a good policy is not that it contains nothing which can be used against you; it is that everything which can be used against you is something you are willing to be held to.',
], 'FFFFFF', C.navy));
out.push(p('**A** A rule which everybody may set aside is not a rule but a suggestion.   **B** Such drafts are instructions, and the firm almost always had the instruction already.   **C** Most firms find that this reading produces three or four changes, of which one or two are numbers that were never achievable.   **D** It is better to write them down and keep their number small, since a long list of exclusions reads as a series of arguments lost in advance.   **E** Policies should be reviewed annually by a committee.   **F** They have been governed by instructions, habits and the judgement of individuals, and these have usually been consistent.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the third Part 1 in the book; the even-numbered units take Part 2 at 120–140 words.**',
  '⚠ **For a message announcing a rule, the three points are: what the rule is · when it starts · and what the reader does when somebody argues.** **The third is the one learners leave out and it is the one the reader needs.**',
  '⚠ **In forty-five words you cannot summarise a policy, so give the trigger and the pointer.** ⚠ *Sixty days overdue, no release, and the page is on the counter.* **The page does the rest.**',
  '⚠ **And name the exception-holder, because a rule announced without one sends every hard case back to the announcer.**',
  '⚠ **Part 2 tip, for the insertion above.** **Read what comes *after* the gap, not only before it.** ⚠ **Four of the five gaps here are answered by the sentence that follows them** — *the remedy is · the record matters more · the test of a good policy is* — **and the extra sentence is the one that fits no neighbour at all.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A new rule starts at your workplace next week. Write an internal message to the people who will apply it (**40 to 50 words**). Say **what the rule is**, **when it starts**, and **what to do when somebody argues with it**.'));
out.push(p('______________: from ______________, ______________. ⚠ **The page is ______________ — point at it.** **If somebody argues, ______________, and only ______________ may ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the rule is, as a trigger', ''],
  ['When it starts', ''],
  ['What to do when somebody argues', ''],
  ['The exception-holder named', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that nobody has written down (**200 to 240 words**). Say what it is, who applies it, where they got it, whether two people would state it the same way, and what has happened when somebody set a precedent against it.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask the person at your work who stands closest to the evidence what rule they are applying, and write down what they say in their own words (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  This policy ___ to every account on the customer ledger.   a) applies   b) apply   c) applying',
  '2  It does not apply ___ staff purchases.   a) for   b) to   c) on',
  '3  Mr Ayoub may ___ a departure from this policy.   a) authorise   b) authorising   c) authorised',
  '4  Goods are not released ___ the count has been signed by the person who made it.   a) and   b) until   c) also',
  '5  In this policy, a confirmed order ___ an order for which an acknowledgement has been issued.   a) meaning   b) is meant   c) means',
  '6  A departure authorised for one order does not apply to ___ later order.   a) some   b) any   c) no',
  '7  ___ the avoidance of doubt, a part exchange is a supply.   a) To   b) For   c) In',
  '8  Had the record been made in September, the second order ___ a decision.   a) would be   b) would have been   c) will be',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 5.15** Listen to a conversation about a new rule. Complete the note.   What the person has been doing: ______   For how long, and how many times: ______   The basis they used: ______   What that is in days: ______   The three things the page changes: ______   What would have happened if they had got it wrong: ______'));
out.push(p('**C  Reading.** Read the definitions section at 5.4 again. Which row shows the definition is honest, which way does it go, and what did row (b) turn out to be about?'));
out.push(p('**D  Writing.** Write one rule in four lines: the rule itself with a class and a measure, one exclusion with a reason, who may depart from it and where the record goes, and the no-precedent sentence (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['Nour', 'This takes effect on the first. Sixty days overdue, no release, and you point at the page.'],
  ['Lina', '⚠ **I have been doing it already.**'],
  ['Nour', 'Doing what?'],
  ['Lina', '⚠ **Not releasing to people who owe. Three weeks. Four times.**'],
  ['Nour', 'On what basis?'],
  ['Lina', '**On the ledger.** ⚠ **If the balance is red and it is older than the month before last, I say the office has to approve it and I telephone you.** And you say yes or no, ⚠ **and I have never written it down.**'],
  ['Nour', '⚠ **Older than the month before last is about sixty days.** ⚠ **You invented the rule I have spent nine days drafting, in your third week.**'],
  ['Lina', 'I thought I was guessing.'],
  ['Nour', '⚠ **You guessed the same as Mr Attar and me, which means it was not a guess.** It is what the ledger makes anybody do who is standing in front of it.'],
  ['Lina', 'So what does the page change?'],
  ['Nour', '⚠ **Three things, and none of them is the rule.** ⚠ **You stop telephoning me, because you can point at it. Your four guesses become four decisions. And when somebody says *you let Jaramana have it in September*, you have a sentence that says September does not apply to October.**'],
  ['Lina', 'And if I had got it wrong?'],
  ['Nour', '⚠ **Three weeks with nothing to point at, and nobody would have known until November** — **which is what happened in September, and is why there is a page.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**5.1** write a rule that names a class, and break it with a case nobody has met',
  '**5.2** set a scope, write three exclusions with a count against each, and one avoidance of doubt',
  '**5.3** name one exception-holder, a deputy with a limit, the record and the no-precedent sentence',
  '**5.4** define the one word that has cost money, and say which way the definition goes',
  '**5.5** write a two-part obligation with a link, so that two people cannot do half each',
  '**5.6** read your own policy as the person who will quote it against you',
  '**5.7** explain a policy to somebody who is already applying it, and say what the page changes',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 6 — **Three Readers, One Fact**: the same two-week delay written for the bank, the customer and the yard, and the sentence that must be identical in all three._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
module.exports = out;
