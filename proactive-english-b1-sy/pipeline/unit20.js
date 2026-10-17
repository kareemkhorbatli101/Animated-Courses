// Proactive English B1 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** Name the criterion before you say anything. Write your partner three sentences, each one opening with the criterion it marks against, and then what you found.';

out.push(h1('Unit 20  Instructions, Manuals and How-To'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**20.1**  say what happened when you followed it',
  '**20.2**  put the steps in order, with the warning first',
  '**20.3**  write the step that cannot be got wrong',
  '**20.4**  say what a step is for',
  '**20.5**  write a step with a condition and an exception',
  '**20.6**  write the one-page how-to for your own job',
  '**20.7**  Review & Mediate: explain a manual',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Unit 19 was about putting something right. Unit 20 is about the page that stops it going wrong** — the card, the manual, the guidance notes, the step somebody has to follow at six in the morning with one hand free and nobody to ask.',
  '**The test for every line you write in this unit is the same one, and it is not "is it clear?".** It is: **what would somebody do if they followed this exactly, and knew nothing?** A line can be perfectly clear to its author and still be unfollowable, and the only person who can tell you is the person who followed it and got it wrong.',
  '**20.3 is the hardest cycle in the unit** and the one to practise most. One action per numbered step; the **condition in front of the step** and not after it; the warning **before** the thing it warns about; and none of the five two-way verbs from 18.3.',
  '**And the thing almost no instruction contains: what the step is for** (20.4). A reader who knows why a step exists will do it properly when the conditions change; a reader who does not will do it exactly as written until the day it stops making sense, and then stop doing it altogether.',
  '**Bring one set of instructions you have had to follow** — a manual, a leaflet, an assembly sheet, a form\'s guidance notes, a recipe, a card on a machine — **and the thing you got wrong the first time**. 20.1 is built on that mistake, and the mistake matters more than the manual.',
], C.lyellow, C.orange));

// ======================= 20.1 =======================
out.push(pb());
out.push(h2('20.1  I did exactly what it said'));
out.push(p('**Function:** saying what happened when you followed it   ·   **Grammar:** _when_ and _if_ + present, for what always happens   ·   **Pronunciation:** the stress on the verb of the step'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the step you got wrong, exactly as it is written, and then say what you did. Your teacher writes the eleven **steps** on the board — not the mistakes — and the class looks for what each one assumes.'));
out.push(board('When the amber light comes on, reseat the module. I did not know what reseat meant.', '_when_ + present · the assumed word'));
out.push(p('**b**  _When_ or _if_? **1** _____ the light comes on, write down the code._ (it always comes on)  **2** _____ the roll jams, press the grey button._ (it sometimes jams)  **3** _____ you finish, sign the sheet._  **4** _____ there is no answer, leave it on the bench._  **5** _____ the sample is over an hour old, mark it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which word on the sheet did Nour not know, and what did she do?   **A** _reseat_; she took the module out and put it back in the wrong slot   **B** _recalibrate_; she telephoned   **C** _reset_; she turned the machine off'));
out.push(p('**b**  Listen again. **1** What does she say she did for three weeks instead of asking?   **2** What does Ms Huda say the only test of an instruction is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  Reseat the module', [
  ['Nour', 'I have brought the diagnostic sheet from my third day at TechCare, because I did the worst thing I have ever done at work with it and I have never told anybody at work what actually happened.'],
  ['Ms Huda', 'Read the step.'],
  ['Nour', 'Step four: "When the amber light comes on, reseat the module and run the test again."'],
  ['Omar', 'That is a normal sentence.'],
  ['Nour', 'It is a completely normal sentence and I did not know the word _reseat_. I knew _seat_ as a thing you sit on. So I worked it out: take the module out and put it back. Which is right. And then I put it back in the second slot, because there are two slots and nothing on the sheet says which, and the second slot is physically easier to reach.'],
  ['Jad', 'And?'],
  ['Nour', 'And the unit ran, and the test passed, and the customer took it away, and it came back nine days later with the same fault and a second one. The second slot is for a different module in that model, and putting ours in it does something I still do not understand to the board.'],
  ['Lubna', 'Did you tell anybody?'],
  ['Nour', 'No. For three weeks I avoided step four. When an amber light came on I took the unit to the bench of a man called Hisham and said I was busy, about five times, and he reseated it and I watched which slot he used and said nothing. That is how I learnt it. Three weeks and five lies to learn one word.'],
  ['Ms Huda', 'Now the sheet. Whose fault was that?'],
  ['Nour', 'I would have said mine, in September. I think now the sheet does not say which slot, and there are two slots, and the step was written by somebody for whom there has only ever been one obvious slot.'],
  ['Ms Huda', 'Which is the whole unit, and I want the words exact. The test of an instruction is **not** whether it is clear. It is: **what would somebody do if they followed it exactly and knew nothing?** The person who wrote step four knows which slot, and has known for so long that the knowing has become invisible to them. They cannot see what they know. And the only person in the world who can see it is the person who followed the sheet and got it wrong — who is, in every workplace in the world, the person least likely to say so.'],
  ['Nour', 'And the sheet has had step four on it for four years.'],
  ['Ms Huda', 'So the first thing you write in this unit is not an instruction. It is the mistake.'],
]));
out.push(sp());
out.push(box('Language box – what always happens, and what is assumed', [
  '**_When_ for the thing that always or regularly happens; _if_ for the thing that may not.**',
  table(['you write', 'what the reader understands'], [
    ['_**When** the amber light comes on, reseat the module._', 'it will come on; this is the normal course'],
    ['_**If** the roll jams, press the grey button._', 'it may never jam; this is an exception'],
    ['_**When** you have finished, sign the sheet._', 'you will finish'],
    ['_**If** there is no answer, leave it on the bench._', 'there may well be an answer'],
  ], [2.3, 2.3]),
  '**Both take the present simple, not _will_:** ⚠ ~~when the light will come on~~ → _when the light **comes** on_. This is the zero conditional, and it is the tense of every instruction ever written.',
  '**And the reason _when_ and _if_ matter more than they look:** a reader who meets _if_ treats the step as rare and does not prepare for it; a reader who meets _when_ expects it. Put _if_ on something that happens daily and the reader is surprised every day.',
  '**Now the real content of the cycle: the assumed word.** Every step is written by somebody who knows something, and **they cannot see what they know**. _Reseat the module_ assumes you know the word, and — worse — assumes there is only one slot, because for the writer there has only ever been one obvious slot.',
  '**The three kinds of assumed knowledge, and all three are invisible to the author:** a **word** (_reseat, prime, bleed, purge, tare_) · a **choice** the writer has never had to make (which slot, which screw, which of the two switches) · and a **state** the writer always finds the machine in (_the guard will already be off_).',
  '⚠ **And expect the reader not to tell you.** Nour avoided step four for three weeks and told five lies to learn one word. The person who followed your sheet and got it wrong is the only person who can see the fault in it, and is the least likely person in any workplace to say so — so you have to ask (18.3).',
  '**Useful phrases:** I did exactly what it said · it is a completely normal sentence and I did not know the word · nothing on the sheet says which · the step was written by somebody for whom there has only ever been one obvious slot · they cannot see what they know.',
  '**Practise:** Say the step, then the assumed word, choice or state.  1 a step on a machine  2 a step on a form  3 a step in a recipe or a procedure  4 a step in a computer system  5 a step somebody gave you out loud',
  '**Pronunciation.** 🔊 **Track 20.2** In an instruction the stress falls on the **verb of the action**, not on the condition: _when the amber light comes on, **RESEAT** the module._ A reader who hears the stress on _amber_ is listening for a colour and not for a job. Listen to eight and write the action verb only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a step exactly as written and says what they did. B names what it assumed — a word, a choice or a state — and then rewrites the step so that the assumption is on the page. Swap cards.'));
out.push(dlg(null, [
  ['A', 'It says: "__________." I did __________.'],
  ['B', 'It assumes __________.'],
  ['B', 'So the step should be: "__________."'],
  ['A', 'And the thing I did instead of asking was __________.'],
]));
out.push(table(['Card A – steps as written', 'Card B – steps as written'], [
  ['_Reseat the module and run the test again._', '_Prime the pump before starting._'],
  ['_Tare the balance and weigh the sample._', '_Release the guard and clear the feed._'],
  ['_Complete the upper section and forward it._', '_Attach the relevant reference and submit._'],
  ['_Allow it to settle and then decant._', '_Reset the counter at the end of the run._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight assumptions and mark each **word**, **choice** or **state**. Then the count that matters: how many of the eight speakers **asked** somebody at the time? In a first run it is one or two out of eight, and the other six worked it out, watched somebody, or avoided the step — which is why a bad step can sit on a sheet for four years.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Read out your step, say what you did, and name what it assumed. Then the honest half: say what you did **instead of asking**, and for how long.'));
out.push(p('**b**  Swap. Then each of you rewrite your partner\'s step with the assumption on the page, and your partner says whether a new person could follow it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour has brought the diagnostic sheet from her third day at TechCare, because she did the worst thing she has ever done at work with it and has never told anybody at work what actually happened. Step four reads: "When the amber light comes on, reseat the module and run the test again." Omar said that is a normal sentence, and she agreed it is a completely normal sentence — and she did not know the word reseat. She knew seat as a thing you sit on, so she worked it out: take the module out and put it back. Which is right. And then she put it back in the second slot, because there are two slots, nothing on the sheet says which, and the second is physically easier to reach. The unit ran, the test passed, the customer took it away, and it came back nine days later with the same fault and a second one — because the second slot is for a different module in that model and putting theirs in it does something she still does not understand to the board. Lubna asked whether she told anybody, and she said no: for three weeks she avoided step four, and when an amber light came on she took the unit to a man called Hisham and said she was busy, about five times, and watched which slot he used and said nothing. Three weeks and five lies to learn one word. Ms Huda asked whose fault it was, and Nour said she would have said hers in September, and now thinks the sheet does not say which slot, there are two slots, and the step was written by somebody for whom there has only ever been one obvious slot. Then the sentence of the whole unit: the test of an instruction is not whether it is clear, it is what somebody would do if they followed it exactly and knew nothing — and the person who wrote step four cannot see what they know, and the only person who can see it is the person who followed the sheet and got it wrong, who is the least likely person in any workplace to say so. Step four has been on that sheet for four years._'));
out.push(p('**Listener task:** write one assumed word from this room, and what the reader did instead of asking.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour writes to the person who keeps the diagnostic sheets. Answer the questions.'));
out.push(model([
  '**NOTE ON STEP 4 · diagnostic sheet, model 2200** · N. Sabbagh · 10 December',
  '**What the step says.** "When the amber light comes on, reseat the module and run the test again."',
  '**What I did on 14 January, my third day.** I did not know the word _reseat_, so I worked it out from _seat_: take the module out and put it back. That was right. Then I put it back in the second slot, because there are two slots, the sheet does not say which, and the second one is easier to reach from where you stand.',
  '**What happened.** The unit ran and the test passed. It came back on 23 January with the original fault and a second one. I have since been told that the second slot takes a different module in that model.',
  '**What the step assumes, and there are two things.** It assumes the reader knows the word _reseat_. And it assumes there is one obvious slot — which there is, if you have worked on these for more than a fortnight, and is not, if you have worked on them for three days.',
  '**What I did instead of asking, which is the part I have not told anybody.** For three weeks I avoided step four. When an amber light came on I carried the unit to Hisham and said I was busy. About five times. I watched which slot he used, and that is how I learnt it.',
  '**What I suggest, and it is eleven words.** "When the amber light comes on: **1** switch off. **2** take the module out of the **upper** slot and put it back in the **upper** slot. **3** run the test again." The word _reseat_ can stay if _upper_ is in the sentence.',
  '**And the thing that is not about step four.** That sheet has been in use for four years and I am probably not the first person to put a module in the second slot. I am only the first to write it down, and I am writing it down eleven months late because for eleven months I thought it was a fact about me.',
]));
out.push(item('1', 'What two things does she say the step assumes?'));
out.push(item('2', 'What did she do instead of asking, and for how long?'));
out.push(item('3', 'What does she say about the four years, and about herself?'));
out.push(writers([
  'A note on one step: **what the step says, quoted** → **what you did, with the date** → **what happened** → **what the step assumes, and there is usually more than one thing** → **what you did instead of asking** → **what you suggest, and how few words it is** → **and the thing that is not about this step**.',
  'Quote the step word for word before anything else. A paraphrase hides exactly the words that caused the trouble.',
  'Separate the part you got right from the part you got wrong. _I worked it out from "seat": take it out and put it back. That was right._ A note that admits everything is read as carelessness; a note that locates the single wrong turn is read as evidence.',
  'Put a number on the rewrite. _It is eleven words._ The reader of such a note is afraid you are asking for the sheet to be rewritten, and a word-count in the sentence removes that fear (19.4).',
  '⚠ And say the thing about yourself, because it is the sentence that gets the sheet changed: _I am probably not the first person to do this. I am only the first to write it down._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note on one step (60 words or more).'));
out.push(p('**NOTE ON STEP ______ · ______________** · ______________   **What the step says.** "______________"   **What I did, on ______________.** ______________.   **What happened.** ______________.   **What the step assumes, and there are ______ things.** It assumes ______________. And it assumes ______________ — which is true if ______________, and is not, if ______________.   **What I did instead of asking.** ______________, for ______________.   **What I suggest, and it is ______ words.** "______________"   **And the thing that is not about step ______.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The step quoted word for word',
  '_When_ and _if_ used correctly in the rewrite, with the present simple',
  'At least two assumptions named, each labelled word, choice or state',
  'A word-count on the suggested rewrite',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what they did instead of asking.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more) on the step you got wrong: the step quoted, what you did and when, what happened, the assumptions, what you did instead of asking, the short rewrite with its word-count, and the sentence that is not about that step.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the step quoted exactly**, **the assumptions named and labelled**, **the word-count on the rewrite**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the steps in this room have been in use for more than a year?** Count the years. Then the question that ends the cycle: in how many cases is the student probably not the first person to have got it wrong? Almost all of them — and in every one of those, nobody wrote it down, because everybody concluded that the difficulty was theirs.'));
out.push(hw('Write the note (60+ words) and give it to whoever keeps the document. Then ask one person who has followed the same step whether they got it right the first time. Write down their answer in their words.'));

// ======================= 20.2 =======================
out.push(pb());
out.push(h2('20.2  The warning goes first'));
out.push(p('**Function:** putting the steps in order   ·   **Grammar:** sequencers · _before_ and _after_ + _-ing_   ·   **Pronunciation:** the pause after a sequencer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs: tell your partner how to do something from your own work in exactly five steps, out loud, with no warnings. Then add the warnings — and say where each one would have to go to be any use.'));
out.push(board('Before loading the roll, check that the cutter is down. Not: load the roll. (The cutter must be down.)', 'warning before the step'));
out.push(p('**b**  Rewrite with _before_ or _after_ + _-ing_. **1** _Check the cutter. Then load the roll._  **2** _Load the roll. Then close the lid._  **3** _Sign the sheet. Then take the bus out._  **4** _Switch off. Then open the cover._  **5** _Read the chart. Then open the drawer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is the warning on the depot\'s fare-machine card, and what has it cost?   **A** at the bottom; four jammed rolls and a morning\'s takings   **B** at the top; nothing   **C** there is no warning'));
out.push(p('**b**  Listen again. **1** What does Tareq say about the order the card is written in?   **2** What does Ms Huda say a warning placed after the step actually does?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  At the bottom, in bold', [
  ['Tareq', 'There is a card beside the fare machine on every bus in that depot and it has six steps on it and one warning, and the warning is at the bottom, in bold, under the last step.'],
  ['Ms Huda', 'Read the warning.'],
  ['Tareq', '"**N.B. The cutter must be in the down position before a new roll is loaded.**"'],
  ['Nour', 'And the loading is which step?'],
  ['Tareq', 'Step two. The warning about step two is four steps and about eighty words below step two, in a different typeface, after you have finished.'],
  ['Omar', 'So nobody reads it until afterwards.'],
  ['Tareq', 'Nobody reads it at all. You read a card like that once, in your first week, standing in a bus with a queue behind you. Then you do the steps from memory for nine years. I have loaded about four hundred rolls and I have read that warning twice: once in 2017 and once last Tuesday, when I brought the card here.'],
  ['Jad', 'What does it cost?'],
  ['Tareq', 'Four jammed rolls that I know of, in eight years, two of them mine. A jammed roll in the morning means no tickets until the depot opens at nine, and on the fourteenth of October the whole morning on the Harasta road was done on a notebook, which is not a thing I am supposed to do and is the only thing I could do.'],
  ['Lubna', 'Would it be better at the top of the card?'],
  ['Tareq', 'No — and this is what I have changed my mind about this week. At the top it becomes a general warning, and a general warning at the top of a card is scenery. It has to be **inside step two**, before the word "load". "**2** Check that the cutter is down. Load the new roll." Two actions, in the order they happen, and the warning is not a warning any more, it is a step.'],
  ['Ms Huda', 'Say that again, because it is the cycle.'],
  ['Tareq', 'A warning that comes after the step is not a warning. It is a record that somebody knew.'],
  ['Ms Huda', 'Which is exactly what it is for in most documents, and the author usually does not know that about themselves. The card protects whoever wrote the card. Put the warning **before** the action, in the imperative, as a step with a number on it, and it protects the reader instead — and the cost is four words and no paper at all.'],
]));
out.push(sp());
out.push(box('Language box – order, and where the warning goes', [
  '**The sequencers, and what each is for:** _**First**_ (only once, and only if the order is not obvious) · _**Then**_ (the workhorse; use it most) · _**Next**_ · _**After that**_ · _**Finally**_ (only for the last step). ⚠ In a numbered list you need almost none of them: the numbers do the work, and a numbered list full of _thens_ is a paragraph wearing numbers.',
  '**_Before_ and _after_ + _-ing_, for joining two actions in one step:** _**Before loading** the roll, check that the cutter is down._ · _**After signing** the sheet, hand it in at the window._ The _-ing_ is obligatory: ⚠ ~~before to load~~ · ~~after you sign it, hand in~~ _(mixing the two shapes)_.',
  '⚠ **And the rule this cycle exists for: the warning goes _before_ the thing it warns about, and preferably inside the step as an action.**',
  table(['instead of', 'write'], [
    ['_**2** Load the new roll._ … _N.B. The cutter must be down before loading._', '_**2** Check that the cutter is down. Load the new roll._'],
    ['_**4** Open the cover._ … _Warning: isolate the machine first._', '_**4** Switch off at the wall. Open the cover._'],
    ['_**3** Give the drug._ … _Note: the chart should be read first._', '_**3** Read the chart. Give the drug._'],
  ], [2.3, 2.3]),
  '**A warning at the top of the card is not better — it is scenery.** A general warning in a box at the head of a page is read once, in week one, and never again. A warning inside the numbered step is read every time the step is read, which is the only moment it can do anything.',
  '**And the sentence to take away: _a warning that comes after the step is not a warning; it is a record that somebody knew._** Written in that position, it protects the author of the card. Moved in front of the action, it protects the reader. The cost of moving it is four words.',
  '**Useful phrases:** six steps and one warning, and the warning is at the bottom in bold · you read a card like that once, in your first week, with a queue behind you · a general warning at the top of a card is scenery · the warning is not a warning any more, it is a step.',
  '**Practise:** Move the warning into the step, as an action.  1 switching something off before opening it  2 reading something before signing it  3 checking a number before sending something  4 isolating something before cleaning it  5 asking somebody before moving something',
  '**Pronunciation.** 🔊 **Track 20.4** A step with two actions in it is said with a clear pause between them and equal stress on both verbs: _**CHECK** that the cutter is down ‖ **LOAD** the new roll._ Run them together and the reader hears one instruction. Listen to six and write both verbs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the step and its warning as they stand. B rewrites the step with the warning in front of the action, and says how many words it took. Then A says what would have happened to a reader who met the original. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Step: "__________." Warning, at the bottom: "__________."'],
  ['B', 'As one step: "__________." That is __________ words.'],
  ['A', 'A reader who met the original would __________.'],
]));
out.push(table(['Card A – step and warning', 'Card B – step and warning'], [
  ['_Load the new roll._ + _the cutter must be down_', '_Open the cover._ + _isolate at the wall first_'],
  ['_Enter the reading._ + _readings are entered at the start of the shift_', '_Submit the form._ + _box 9 must be completed_'],
  ['_Give the drug._ + _the chart is read first_', '_Clear the feed._ + _the guard must be released_'],
  ['_Take the bus out._ + _the check sheet is signed first_', '_Decant the sample._ + _allow ten minutes to settle_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the word-count of each rewrite. They come out between eight and fifteen words, and almost none is longer than the original step plus its warning — which is the argument to give a manager: the rewrite is not an addition, it is the same words in the order a reader meets them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a real set of instructions you have. Find every warning on it and say, for each one, where it is and which step it belongs to. Then rewrite the two that matter most as steps with the warning inside them.'));
out.push(p('**b**  Swap. Then each of you say which warning on your partner\'s document is **scenery** — at the top, general, read once — and whether anything would be lost by deleting it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is a card beside the fare machine on every bus in Tareq\'s depot: six steps and one warning, and the warning is at the bottom, in bold, under the last step. It reads: "N.B. The cutter must be in the down position before a new roll is loaded." The loading is step two — so the warning about step two is four steps and about eighty words below it, in a different typeface, after you have finished. Omar said so nobody reads it until afterwards, and Tareq said nobody reads it at all: you read a card like that once, in your first week, standing in a bus with a queue behind you, and then you do the steps from memory for nine years. He has loaded about four hundred rolls and has read that warning twice — once in 2017 and once last Tuesday, when he brought the card to the lesson. What it costs is four jammed rolls that he knows of in eight years, two of them his; and a jammed roll in the morning means no tickets until the depot opens at nine, and on the fourteenth of October the whole morning on the Harasta road was done on a notebook, which he is not supposed to do and was the only thing he could do. Lubna asked whether it would be better at the top of the card, and this is what he has changed his mind about: no, because at the top it becomes a general warning, and a general warning at the top of a card is scenery. It has to be inside step two, before the word "load" — "2 Check that the cutter is down. Load the new roll." Two actions in the order they happen, and the warning is not a warning any more, it is a step. Then the sentence Ms Huda made him repeat: a warning that comes after the step is not a warning, it is a record that somebody knew. She said that is what it is for in most documents and the author usually does not know it: the card protects whoever wrote the card, and moving the warning in front of the action protects the reader instead, at a cost of four words and no paper at all._'));
out.push(p('**Listener task:** write one warning from this room that is scenery, and where it ought to be.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Tareq writes and the note he clips to it. Answer the questions.'));
out.push(model([
  '**FARE MACHINE · CHANGING THE ROLL** _(proposed replacement for the card of 2017)_ · T. Ayoub · December',
  '**1** Stop the bus and switch the machine off.',
  '**2** Check that the cutter is down. Open the lid.',
  '**3** Take out the old spindle. Keep the old roll until the end of the shift.',
  '**4** Check that the cutter is down. Load the new roll with the printed side towards you.',
  '**5** Close the lid until it clicks. Switch on.',
  '**6** Print one test ticket. If it is blank or cut short, go back to step 2.',
  '**NOTE CLIPPED TO THE CARD.** The old card has six steps and one warning. The warning — that the cutter must be down before a new roll is loaded — is at the bottom, in bold, under step six, which is about eighty words below the step it concerns.',
  'I have not added a word to the card. I have moved eleven words and said the cutter sentence twice, in steps 2 and 4, because the cutter can come up when the old spindle comes out and a driver who checked it in step 2 has no reason to look again.',
  'I have also put the test ticket in as step 6 with a route back to step 2, because at present the card ends and you find out whether it worked when a passenger asks for a ticket.',
  'What this is about is four jammed rolls in eight years, two of them mine. A jammed roll before nine means no tickets at all on the first two runs: on 14 October I did the whole Harasta road morning on a notebook, which is not permitted and was the only thing available to me.',
  'I am not asking for the card to be reprinted for the whole fleet. I am asking for one card, on bus 7, for a month, and for whoever drives bus 7 to be asked in January whether it is better.',
]));
out.push(item('1', 'How many words does he say he has added, and what has he done instead?'));
out.push(item('2', 'Why does the cutter sentence appear twice?'));
out.push(item('3', 'What is he asking for, and what is he not asking for?'));
out.push(writers([
  'A rewritten card and a note: **the steps, numbered, with the warning inside the step** → **what the old card does and where its warning is** → **what you have moved rather than added** → **why anything is repeated** → **what you have added at the end, and why** → **what it has cost, in a number** → **and the one small request**.',
  'Say that you have added nothing. _I have not added a word to the card. I have moved eleven words._ The reader of a proposed instruction is afraid of a longer document, and the sentence removes the fear before it forms.',
  'Justify every repetition. _The cutter can come up when the old spindle comes out, and a driver who checked it in step 2 has no reason to look again._ Repetition in an instruction is right far more often than writers allow, and it has to be defended once, in one line.',
  'Add the **test step** at the end, with a route back. _Print one test ticket. If it is blank, go back to step 2._ A procedure that does not end in a check ends in a passenger asking for a ticket.',
  '⚠ And ask for one card on one bus for one month (19.4). A fleet is a decision; one card on bus 7 is a thing somebody can say yes to this week.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the rewritten steps and the note (60 words or more).'));
out.push(p('**______________ · HOW TO ______________** _(proposed replacement for ______________)_ · ______________   **1** ______________. **2** Check that ______________. ______________. **3** ______________. **4** ______________. **5** ______________. **6** ______________. If ______________, go back to step ______.   **NOTE.** The old document has ______ steps and ______ warning(s). The warning about ______________ is ______________, which is ______________ below the step it concerns.   I have not added a word. I have moved ______ words, and I have said ______________ twice, in steps ______ and ______, because ______________.   What this is about is ______________.   I am not asking for ______________. I am asking for ______________, for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every warning inside the step it concerns, before the action',
  'No sequencers inside a numbered list',
  'A test step at the end, with a route back',
  '"I have added nothing" — with the number of words moved',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the repetition they have defended.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full rewritten instruction and its note (140 words or more): the numbered steps with the warnings inside them, what the old version does, what you have moved rather than added, your defended repetition, the test step, the cost in a number, and the one small request.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the warning before the action**, **the defended repetition**, **the test step**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many warnings in this room are at the bottom or at the top?** Count both positions. Then say the finding out loud: a warning in either of those places protects the person who wrote the document, and the authors almost never know that is what they have done. The cure is four words and the moving of a sentence.'));
out.push(hw('Write the rewritten instruction (60+ words) with every warning inside its step. Then show both versions to one person who has to follow them, say nothing, and write down which one they prefer and why.'));

// ======================= 20.3 =======================
out.push(pb());
out.push(h2('20.3  The step that cannot be got wrong'));
out.push(p('**Function:** writing an unambiguous step   ·   **Grammar:** the imperative · _make sure (that)_ · the condition in front   ·   **Pronunciation:** reading a numbered step aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher writes one step on the board: _Make sure the file is saved before closing the window._ One minute in pairs: how many different things could a reader do, and which of them is wrong? Then the same for: _Try to keep a copy._'));
out.push(board('3 Save the file. 4 Close the window. Not: make sure the file is saved before closing.', 'one action per numbered step'));
out.push(p('**b**  Split each into numbered steps with one action each. **1** _Check the reading and enter it._  **2** _Make sure the guard is down before you start the machine._  **3** _Sign the sheet and hand it in at the window._  **4** _Read the chart, open the drawer and give the drug._  **5** _If the light is red, switch off and telephone._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Jad find when he counted, and what are his three rules?   **A** 31 steps with more than one action; one action per step, the condition in front, no two-way verbs   **B** 31 spelling mistakes; three style rules   **C** 31 missing warnings; three new steps'));
out.push(p('**b**  Listen again. **1** Why does he say _make sure_ is the most dangerous phrase on a sheet?   **2** What does Ms Huda say about the condition going in front?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  Thirty-one steps with two jobs in them', [
  ['Jad', 'I counted the steps in the forum\'s own posting guide and in two manuals I had at home. Ninety-four numbered steps between them. Thirty-one of the ninety-four have more than one action in them.'],
  ['Omar', 'Which is a third of them.'],
  ['Jad', 'A third of them, and I have written steps like that myself for two years. "Check the reading and enter it." Two jobs, one number. If somebody is interrupted in the middle, they do not know whether they are in step three or past it, and neither does anybody looking at the sheet afterwards.'],
  ['Nour', 'Why does that matter so much? It is two small things.'],
  ['Jad', 'Because a numbered step is a **place**. It is where you put your finger when the telephone rings. If one number contains two actions, the sheet cannot tell you where you are, and the whole point of numbering is knowing where you are.'],
  ['Ms Huda', 'Your three rules. Say them.'],
  ['Jad', 'One action per numbered step. The condition in front of the action, never after it. And none of the five verbs from Unit 18 — stop, try, remember, forget, go on.'],
  ['Lubna', 'And you said something about _make sure_.'],
  ['Jad', 'That is the one I did not expect. _Make sure the guard is down before you start the machine._ Everybody thinks that is a good, careful sentence. It is the most dangerous phrase on a sheet, because _make sure_ is not an action. You cannot do it. Nobody has ever made sure of anything. What you can do is **look at the guard**, and the sentence does not say to look at it, so a reader in a hurry makes sure of it in their head.'],
  ['Jad', 'And if it says _make sure_, the writer has not decided what the reader is supposed to do. So the step becomes: "**3** Look at the guard. **4** If it is up, push it down. **5** Start the machine." Three numbers, three things you can actually watch somebody do.'],
  ['Ms Huda', 'Now the condition, because it is the rule students find hardest to believe. **The condition goes in front of the action.** _If the light is red, switch off_ — never _switch off if the light is red_. A reader who meets the action first begins to do it, and then meets the condition, and has to stop. Half of them do not stop.'],
  ['Jad', 'And the three rules together cost nothing. The guide is four lines longer and it has eleven more numbers in it.'],
  ['Ms Huda', 'Eleven more numbers is not a cost. Eleven more numbers is eleven more places a reader can put their finger when the telephone rings.'],
]));
out.push(sp());
out.push(box('Language box – writing the step that cannot be got wrong', [
  '**Four rules. All four are cheap, and all four are broken in almost every instruction ever written.**',
  table(['rule', 'instead of', 'write'], [
    ['**1** One action per number', '_3 Check the reading and enter it._', '_3 Check the reading. 4 Enter it._'],
    ['**2** The condition in front', '_Switch off if the light is red._', '_If the light is red, switch off._'],
    ['**3** No _make sure_', '_Make sure the guard is down._', '_Look at the guard. If it is up, push it down._'],
    ['**4** None of the five verbs', '_Remember to log the code._', '_Write the code on the sheet._'],
  ], [1.3, 1.9, 1.9]),
  '**Why rule 1 matters more than it looks: a numbered step is a _place_.** It is where the reader puts a finger when the telephone rings. A number containing two actions cannot tell anybody — reader, supervisor or inquiry — where the work stopped, and that is the whole purpose of numbering.',
  '⚠ **_Make sure_ is the most dangerous phrase on a sheet, and it looks like the most careful.** It is not an action: nobody can do it, and nobody has ever been seen doing it. If a step says _make sure_, the writer has not yet decided what the reader is supposed to **do**. Replace it with the looking, and then with the doing: _look at the guard · if it is up, push it down._',
  '⚠ **The condition in front, every time.** A reader who meets the action first **begins to do it**, then meets the condition, and has to stop. Half of them do not stop. This is the rule students most resist, because _switch off if the light is red_ sounds better — and sounding better is not one of the four rules.',
  '**And do not fear more numbers.** Eleven extra numbers is eleven more places a reader can put a finger. A sheet is not improved by being short; it is improved by being followable at six in the morning by somebody with one hand free.',
  '**Useful phrases:** two jobs, one number · a numbered step is a place · nobody has ever made sure of anything · the writer has not decided what the reader is supposed to do · three things you can actually watch somebody do.',
  '**Practise:** Rewrite each under the four rules, and count your numbers.  1 _Make sure the sheet is signed before you leave._  2 _Enter the code and press send._  3 _Remember to keep a copy._  4 _Clean the blade if the machine is off._  5 _Try to use the second scale for heavy items._',
  '**Pronunciation.** 🔊 **Track 20.6** A numbered step is read aloud with the **number**, then a pause, then the verb stressed: _**THREE** ‖ **LOOK** at the guard._ Reading the numbers aloud is how you find a step with two actions in it, because you cannot say one number and two verbs without hearing it. Listen to six and say which have two actions.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a step from the card. B rewrites it under the four rules, aloud, numbering as they go, and then says which rule the original broke. Swap cards.'));
out.push(dlg(null, [
  ['A', '"__________."'],
  ['B', 'That breaks rule __________. Rewritten: "__________. __________."'],
  ['A', 'And how many numbers now?'],
  ['B', '__________ instead of one.'],
]));
out.push(table(['Card A – steps to mend', 'Card B – steps to mend'], [
  ['_Make sure the valve is closed before draining._', '_Enter the reference and submit the form._'],
  ['_Clean the rollers if the machine has stopped._', '_Remember to date the copy._'],
  ['_Check the name and the number and sign._', '_Make sure the ward has been told._'],
  ['_Stop filling in the lower section after June._', '_Try to weigh it on the second balance._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write which rule each original broke. Rule 3 — _make sure_ — comes up most, and rule 1 second. Then the observation to give the class: all eight originals are written in good, careful English by people who were trying hard, which is why none of this can be found by proof-reading for mistakes.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take four steps you have written yourself — a note, a message, a handover, a card, an email telling somebody how to do something. Read each aloud with its number, and mend the ones that break a rule.'));
out.push(p('**b**  Swap. Then each of you choose your partner\'s worst step and say what a reader in a hurry would do with it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad counted the steps in the forum\'s own posting guide and in two manuals he had at home: ninety-four numbered steps between them, and thirty-one of the ninety-four have more than one action in them. Omar said that is a third, and Jad said a third, and that he has written steps like that himself for two years. "Check the reading and enter it" — two jobs, one number; and if somebody is interrupted in the middle they do not know whether they are in step three or past it, and neither does anybody looking at the sheet afterwards. Nour asked why two small things matter so much, and he said because a numbered step is a place: it is where you put your finger when the telephone rings, and if one number contains two actions the sheet cannot tell you where you are, which is the whole point of numbering. His three rules: one action per numbered step; the condition in front of the action, never after it; and none of the five verbs from Unit 18. Then the thing he did not expect, which is about "make sure". Everybody thinks "make sure the guard is down before you start the machine" is a good, careful sentence, and he says it is the most dangerous phrase on a sheet, because make sure is not an action — you cannot do it, nobody has ever made sure of anything, and what you can do is look at the guard, which the sentence does not say. And if a step says make sure, the writer has not decided what the reader is supposed to do. So it becomes: "3 Look at the guard. 4 If it is up, push it down. 5 Start the machine." Three numbers, three things you can watch somebody do. Ms Huda added the rule students find hardest to believe: the condition goes in front of the action, because a reader who meets the action first begins to do it, then meets the condition, and has to stop — and half of them do not stop. Jad said the three rules cost nothing: the guide is four lines longer with eleven more numbers in it. Ms Huda said eleven more numbers is eleven more places a reader can put a finger._'));
out.push(p('**Listener task:** write one _make sure_ from this room and the two actions it should have been.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad sends to the forum\'s editors. Answer the questions.'));
out.push(model([
  '**FOUR RULES FOR A NUMBERED STEP** · J. Attar · for the posting guide · December',
  'I counted the steps in our own posting guide and in two manuals. Ninety-four numbered steps; thirty-one of them contain more than one action. I have written steps like that myself for two years and I am not criticising anybody.',
  '**Rule 1. One action per number.** "Check the reading and enter it" is two jobs with one number on it. A numbered step is a **place** — it is where somebody puts a finger when the telephone rings — and a number holding two actions cannot say where the work stopped. That is the only thing numbering is for.',
  '**Rule 2. The condition in front of the action.** "If the light is red, switch off", never "switch off if the light is red". A reader who meets the action first begins to do it and then has to stop. Half of them do not stop, and the half who do not are the half who are in a hurry, which is the half the sheet exists for.',
  '**Rule 3. No "make sure".** This is the one I expect an argument about. "Make sure the guard is down" reads as the most careful sentence on the page and it is the most dangerous, because _make sure_ is not an action. Nobody can do it and nobody has ever been seen doing it. If a step says _make sure_, the writer has not decided what the reader should **do**. Replace it with the looking and then the doing: "**3** Look at the guard. **4** If it is up, push it down."',
  '**Rule 4. None of the five verbs.** No _stop_, _try_, _remember_, _forget_ or _go on_ in a numbered step, for the reasons in the note I sent in November about the card on machine 2.',
  '**What the four rules cost.** The posting guide becomes four lines longer and gains eleven numbers. That is the whole cost. Eleven more numbers is not clutter: it is eleven more places a reader can put a finger.',
  '**What I am asking for.** That the four rules go at the top of the editors\' own page — not the posting guide, the page we write the posting guide on. I am not asking for the ninety-four steps to be rewritten. If the rules are at the top of our page, the next guide is written under them and the old one can be mended a step at a time by whoever notices.',
]));
out.push(item('1', 'What does he say numbering is for, and why does one number with two actions defeat it?'));
out.push(item('2', 'Why does he say _make sure_ is the most dangerous phrase on a sheet?'));
out.push(item('3', 'What is he asking for, and what is he explicitly not asking for?'));
out.push(writers([
  'A page of rules for other writers: **the count, and that you are not criticising anybody** → **one rule per heading, each with its own example** → **the rule you expect an argument about, named as such** → **what the rules cost, in a number** → **and what you are asking for, which is not a rewrite**.',
  'Open with the count and include yourself in it. _I have written steps like that myself for two years and I am not criticising anybody._ Nobody adopts rules proposed by somebody who has set themselves outside them.',
  'Name the rule that will be resisted, and say so in the heading. _This is the one I expect an argument about._ A reader who is told where the argument is reads the rest without looking for a fight.',
  'Give every rule one example and no more. A rule with three examples reads as a complaint about three documents.',
  '⚠ And ask for the rules at the **top of the page where new documents are written**, not for the old documents to be rewritten. A rewrite is a project and will not be granted; four lines at the head of a template is a thing one person can do in a morning, and it mends everything written after it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page of rules (60 words or more).'));
out.push(p('**______________ RULES FOR ______________** · ______________   I counted ______________: ______ steps, of which ______ ______________. I have written steps like that myself and I am not criticising anybody.   **Rule 1. ______________.** ______________. Instead of "______________", write "______________."   **Rule 2. ______________.** ______________, because ______________.   **Rule 3. ______________.** This is the one I expect an argument about. ______________.   **Rule 4. ______________.** ______________.   **What the rules cost.** ______________. That is the whole cost.   **What I am asking for.** That the rules go ______________. I am not asking for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One action per numbered step, everywhere on your own page',
  'Every condition in front of its action',
  'No _make sure_, and none of the five two-way verbs',
  'The cost in a number, and a request that is not a rewrite',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the rule they expect an argument about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more): the count with yourself inside it, four rules each with one example, the rule you expect an argument about, the cost in numbers, and the request for the rules to go at the top of the page where new documents are written.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **one action per number**, **the condition in front**, **the request that is not a rewrite**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the steps this room has written itself break one of the four rules?** Count honestly, and count your own. Then the sentence that makes the cycle land: all of these were written in careful English by people trying hard, which is exactly why none of it can be found by proof-reading — it can only be found by reading the numbers aloud.'));
out.push(hw('Write the page of rules (60+ words). Then take one document you have written yourself and read every numbered step aloud with its number. Count the steps that break a rule, and mend the first three.'));

// ======================= 20.4 =======================
out.push(pb());
out.push(h2('20.4  Say what the step is for'));
out.push(p('**Function:** giving the purpose of a step   ·   **Grammar:** _so that_ · _in order to_ · _to_ · _otherwise_   ·   **Pronunciation:** the unstressed _so that_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: one step you follow at work whose purpose you do not know. Then the harder half: one step whose purpose you **do** know and have never written down anywhere.'));
out.push(board('Photograph the elevation before the scaffold goes up, so that the render is visible.', '_so that_ + a clause'));
out.push(p('**b**  Join with _so that_, _to_ or _otherwise_. **1** _Photograph it first. The scaffold hides it._  **2** _Date the copy. You will not know which is current._  **3** _Keep the old roll. You may need to check the count._  **4** _Sign at the bed. Nothing after it can be undone._  **5** _Ring the ward first. They may have moved the patient._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which step on Lubna\'s own method sheet has no purpose written against it, and what happened because of that?   **A** photographing before the scaffold; a student skipped it and lost an elevation   **B** the ceiling heights; nothing   **C** the sketch; a drawing was repeated'));
out.push(p('**b**  Listen again. **1** What does she say a reader does with a step whose purpose they do not know?   **2** What does Ms Huda say the purpose line protects?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  The step they dropped', [
  ['Lubna', 'I wrote a method sheet in October for the two students who are helping me with the second building. Eleven steps. And last week one of them dropped step two, and I have spent three days understanding that it was my sheet and not her.'],
  ['Ms Huda', 'What is step two?'],
  ['Lubna', '"Photograph all four elevations before any scaffolding goes up." That is the whole step. Eleven words and no reason.'],
  ['Omar', 'And she did not do it.'],
  ['Lubna', 'She did it on three elevations. On the fourth, the scaffold was already up when she got there on the Monday, and she took the photograph through it — which is a reasonable thing to do if you think the step is about having a photograph. It is not. It is about the render, which is the only evidence of where the 1974 extension joins the original wall, and once the scaffold is up you cannot see the joint at all.'],
  ['Jad', 'Can you go back?'],
  ['Lubna', 'The scaffold comes down in March. The survey is due in January. So that elevation goes in with a photograph of a scaffold in front of it, and the joint has to be described in words, which is exactly the kind of sentence an examiner asks about.'],
  ['Nour', 'What would you have written?'],
  ['Lubna', 'Six more words. "Photograph all four elevations before any scaffolding goes up, **so that the render at the 1974 joint is visible**." She would have gone back on the Sunday. I know she would, because when I told her on Tuesday she was more upset than I was.'],
  ['Ms Huda', 'Now say what you said to me afterwards.'],
  ['Lubna', 'A reader who does not know what a step is for will follow it exactly until the day it stops making sense, and then they will do the sensible thing. And the sensible thing is almost always wrong, because the step exists for a reason that is not sensible from where they are standing.'],
  ['Ms Huda', 'And that is why the purpose line is not politeness and not teaching. It is what makes a step survive a **change in conditions** — which is the only thing a written step ever has to survive. A sheet without purposes works perfectly for as long as nothing is different, and nothing is different about one day in ten.'],
  ['Lubna', 'And it protects the writer too. If I had written why, and she had still taken it through the scaffold, it would have been her Monday. It was my October.'],
]));
out.push(sp());
out.push(box('Language box – saying what a step is for', [
  '**Four ways, and they are not interchangeable:**',
  table(['form', 'example', 'when'], [
    ['_**so that** + clause_', '_…so that the render is visible._', 'the workhorse; use it most'],
    ['_**to** + infinitive_', '_Keep the old roll **to** check the count._', 'short, same subject'],
    ['_**in order to** + infinitive_', '_…**in order to** establish the joint._', 'formal; a written procedure'],
    ['_**otherwise** + clause_', '_Date the copy; **otherwise** nobody will know which is current._', 'when the consequence is worse than the purpose'],
  ], [1.3, 2.3, 1.5]),
  '⚠ ~~so that to be visible~~ · ~~for to check the count~~ · ~~in order that check~~ → _so that it **is** visible_, _**to** check_, _in order **to** check_. And ⚠ _**so that**_ takes a clause with a subject and a verb; _**to**_ does not.',
  '**Why it matters, and it is not politeness or teaching.** A reader who does not know what a step is for **will follow it exactly until the day the conditions change, and then do the sensible thing** — and the sensible thing is almost always wrong, because the step exists for a reason that is not visible from where the reader is standing.',
  '**So the purpose line is what makes a step survive a change in conditions** — which is the only thing a written step ever has to survive. A sheet without purposes works perfectly for as long as nothing is different, and something is different about one day in ten.',
  '**It costs about six words**, and six words is the whole of this cycle: _…so that the render at the 1974 joint is visible._',
  '**And it protects the writer as well as the reader.** _If I had written why, and she had still taken it through the scaffold, it would have been her Monday. It was my October._',
  '**Useful phrases:** eleven words and no reason · which is a reasonable thing to do if you think the step is about having a photograph · six more words · the sensible thing is almost always wrong · it was my October.',
  '**Practise:** Add the purpose to each, in six words or fewer.  1 keep a copy  2 photograph it first  3 date everything  4 telephone before you go  5 write the time on the bag',
  '**Pronunciation.** 🔊 **Track 20.8** _So that_ is unstressed and runs into what follows — /səðət/ — and the stress goes on the **purpose**: _photograph it first səðət the **JOINT** is visible._ Students stress _so that_ and the purpose disappears. Listen to six and write the purpose only.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a step with no purpose on it. B invents the most likely purpose and adds it in six words. A then says what a reader would do on the day the conditions change — with and without the six words. Swap cards.'));
out.push(dlg(null, [
  ['A', 'The step is: "__________." No reason given.'],
  ['B', 'With the reason: "__________, so that __________."'],
  ['A', 'Without the reason, on a day when __________, a reader would __________.'],
  ['A', 'With it, they would __________.'],
]));
out.push(table(['Card A – steps with no purpose', 'Card B – steps with no purpose'], [
  ['_Photograph it before work starts._', '_Keep the old sheet until the end of the month._'],
  ['_Write the time on the bag._', '_Date every copy._'],
  ['_Telephone the ward before you go up._', '_Enter the reading even if it is unchanged._'],
  ['_Use the second balance for anything over 20 kg._', '_Take the old spindle out before loading._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight purposes and mark the ones B **guessed right** when A revealed the real one. In a first run it is three or four out of eight — which is the argument of the cycle in a number: half the purposes a sensible reader invents for a step are wrong, and the reader has no way of knowing which half.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a sheet of instructions you have written or inherited. Go down it and say, for each step, whether the purpose is **written**, **in your head**, or **unknown to you too**. Count the three.'));
out.push(p('**b**  Swap. Then each of you choose the one step on your partner\'s sheet where a change in conditions would make a reader do the sensible and wrong thing, and write the six words.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna wrote a method sheet in October for the two students helping her with the second building — eleven steps — and last week one of them dropped step two, and she has spent three days understanding that it was her sheet and not the student. Step two reads: "Photograph all four elevations before any scaffolding goes up." Eleven words and no reason. The student did it on three elevations; on the fourth the scaffold was already up when she arrived on Monday, and she photographed through it — which is a reasonable thing to do if you think the step is about having a photograph. It is not: it is about the render, which is the only evidence of where the 1974 extension joins the original wall, and once the scaffold is up the joint cannot be seen at all. Jad asked whether she can go back, and the scaffold comes down in March and the survey is due in January, so that elevation goes in with a photograph of a scaffold in front of it and the joint described in words, which is exactly the kind of sentence an examiner asks about. Nour asked what she would have written, and the answer is six more words: "so that the render at the 1974 joint is visible". She says the student would have gone back on the Sunday, and she knows it, because when she was told on Tuesday she was more upset than Lubna was. Then the sentence of the cycle: a reader who does not know what a step is for will follow it exactly until the day it stops making sense, and then do the sensible thing — and the sensible thing is almost always wrong, because the step exists for a reason that is not sensible from where they are standing. Ms Huda said that is why the purpose line is not politeness and not teaching: it is what makes a step survive a change in conditions, which is the only thing a written step ever has to survive. And Lubna said it protects the writer too — if she had written why and the student had still gone through the scaffold, it would have been her Monday. It was Lubna\'s October._'));
out.push(p('**Listener task:** write one step from this room whose purpose nobody in the room knows.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s revised method sheet. Answer the questions.'));
out.push(model([
  '**METHOD SHEET · 22 SHARIA BAGHDAD · survey, January** · L. Sweidan · second version, December',
  '**1** Walk the whole building once and write down nothing. _So that you know how many rooms there are before you start counting them, and do not have to re-order the sheets later._',
  '**2** Photograph all four elevations before any scaffolding goes up. _So that the render at the 1974 joint is visible: it is the only evidence of where the extension meets the original wall, and scaffolding hides it completely._',
  '**3** Measure every room at floor level, not at waist height. _So that the figures are comparable with the 2009 drawings, which were taken at floor level._',
  '**4** Record ceiling heights at two points in every room. _So that a sloping ceiling shows up as two numbers instead of one argument._',
  '**5** Write "blank" only where you have asked twice, on two dates, and write both dates. _So that a blank means something, and so that nobody — including me — can later call it laziness._',
  '**6** Keep the pencil original of every sheet. _So that a figure that has been altered can be read both ways._',
  '**NOTE.** The first version of this sheet had eleven steps and no reasons. On 2 December a step was dropped — reasonably, by somebody doing the sensible thing — and an elevation has been lost until March. The reason was in my head and not on the sheet, and a reason in one person\'s head is not a method.',
  'Step 5 is the one I have changed most, and it is not about accuracy. In October it said "write blank where you cannot measure". That let me write "blank" the first time somebody did not open a door, which is what I did for seven weeks on the other building.',
]));
out.push(item('1', 'Which step\'s purpose protects the writer from a later accusation, and what is it?'));
out.push(item('2', 'What does she say about a reason that is in one person\'s head?'));
out.push(item('3', 'What did step 5 say in October, and why has she changed it?'));
out.push(writers([
  'A method sheet with purposes: **each step, then its purpose in italics on the same line** → **a note saying what the first version lacked and what it cost** → **and the one step you have changed most, with what it used to let you do**.',
  'Put the purpose on the same line as the step, not in a separate column and not at the end of the sheet. A purpose a reader has to look up is a purpose nobody reads.',
  'Write the purpose for the day the conditions change, not for the ordinary day. _Scaffolding hides it completely_ is the sentence that does the work; _so that we have a photograph_ would have done none.',
  'Use one purpose to protect the reader from you. _So that nobody — including me — can later call it laziness._ A sheet that protects its reader from its author is followed; one that only protects its author is followed until somebody is in a hurry.',
  '⚠ And say which step you have changed most and what the old version **let you do**. _It said "write blank where you cannot measure" — which let me write blank the first time somebody did not open a door._ That sentence is the only evidence that the sheet has been thought about rather than tidied.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the method sheet with purposes (60 words or more).'));
out.push(p('**METHOD SHEET · ______________** · ______________   **1** ______________. _So that ______________._   **2** ______________. _So that ______________._   **3** ______________. _So that ______________._   **4** ______________. _So that ______________, and so that ______________._   **5** ______________. _Otherwise ______________._   **NOTE.** The first version had ______ steps and ______________. On ______________ ______________, and ______________. The reason was in my head and not on the sheet.   The step I have changed most is ______, and it is not about ______________. It used to say "______________", which let me ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A purpose on every step, on the same line',
  '_So that_ + a clause, _to_ + an infinitive — not mixed',
  'At least one purpose written for the day conditions change',
  'One purpose that protects the reader from the writer',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the purpose that protects the reader from the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full method sheet (140 words or more) for something you do: five or six steps each with its purpose, a note on what the earlier version lacked and what it cost, and the step you have changed most with what the old wording let you do.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **a purpose on every step**, **one purpose written for a change in conditions**, **the step you changed most**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Count the three columns from Stage 4: purposes written, purposes in your head, purposes nobody knows.** In a first run the second column is the largest by a long way. That is the finding — most of what an experienced person knows about their own procedure is in their head, and a reason in one person\'s head is not a method, it is a dependency.'));
out.push(hw('Write the method sheet (60+ words) with a purpose on every step. Then take the one step whose purpose nobody knows, find somebody who might, and ask them. Write down the answer, or write down that nobody knows.'));

// ======================= 20.5 =======================
out.push(pb());
out.push(h2('20.5  Unless, and in which case'));
out.push(p('**Function:** writing a step with a condition and an exception   ·   **Grammar:** _unless_ · _only if_ · _in which case_   ·   **Pronunciation:** the stress on _unless_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: a rule at your work that has an exception nobody has written down. Your teacher writes the **exceptions** on the board and nothing else, and the class guesses the rules.'));
out.push(board('Repeat the run unless the control is within range, in which case report the first result.', '_unless_ · _in which case_'));
out.push(p('**b**  Rewrite with _unless_. **1** _Run it again if the control is not within range._  **2** _Do not sign it if you have not watched the check._  **3** _Telephone the ward if the figure is not impossible._  **4** _Keep the sample if it is not over two hours old._  **5** _Enter it by hand if the system is not available._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the repeat-run rule as written, and how many exceptions does it really have?   **A** it has no exception on the page, and there are three   **B** it has four exceptions and needs none   **C** it is written backwards'));
out.push(p('**b**  Listen again. **1** What does Yara say happens to an unwritten exception over time?   **2** What does Ms Huda say about where an exception must go?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  Three exceptions and none of them written', [
  ['Yara', 'There is one line in our bench instructions that I have been thinking about since 20.3, and it is: "Any result outside the reference range is to be repeated before release."'],
  ['Omar', 'That sounds complete.'],
  ['Yara', 'It sounds complete and in practice it has three exceptions, and not one of the three is anywhere on paper. One: if the control on that run is also out, you do not repeat the sample, you re-run the control, because the machine is wrong and not the patient. Two: if the result is outside the range in the direction the ward told you to expect, you release it and telephone, because repeating costs forty minutes and the ward is waiting. Three: if the sample is over two hours old you do not repeat it at all, you ask for a new one, because the repeat would be wrong in the same direction.'],
  ['Jad', 'How do new people learn the three?'],
  ['Yara', 'The way I learnt them. Somebody tells you, standing up, once, in your first month, and you remember two of the three. The third one — the two hours — I did not know for a year, and I have repeated old samples and released figures that I now think were wrong in a direction nobody could see.'],
  ['Nour', 'Did anything happen?'],
  ['Yara', 'Nothing that I know of, which is not the same as nothing. And here is what I have only just understood: an unwritten exception does not stay as an exception. It becomes a **habit** in the people who know it and a **mistake** in the people who do not, and after a few years nobody can tell which of the two they are looking at.'],
  ['Ms Huda', 'So where does an exception go?'],
  ['Yara', 'Inside the step. Not in a note, not on a second sheet, not in a box at the bottom — inside the numbered step, with the condition in front, the way 20.3 says. "Repeat any result outside the reference range before release, **unless** the control on the same run is also outside its range, **in which case** re-run the control and leave the sample."'],
  ['Ms Huda', 'And hear what _unless_ is doing, because it is the most economical word in this unit. _Unless_ means _except if_, and it lets you put the rule and its exception in **one sentence that a reader meets in one go**. Two sentences — the rule, then the exception — can be read half-way: everybody in this room has stopped reading half-way through something today. One sentence with _unless_ in the middle of it cannot.'],
  ['Yara', 'And the three together are four lines instead of one. I would rather have four lines than a year.'],
]));
out.push(sp());
out.push(box('Language box – conditions and exceptions in one step', [
  '**The three words, and what each does:**',
  table(['word', 'means', 'example'], [
    ['_**unless**_', 'except if', '_Repeat the result **unless** the control is also out._'],
    ['_**only if**_', 'in this case and no other', '_Release it **only if** the ward has been telephoned._'],
    ['_**in which case**_', 'and then do this instead', '_…**in which case** re-run the control._'],
  ], [1.1, 1.4, 2.6]),
  '⚠ **_Unless_ is already negative. Do not negate the verb after it:** ~~unless the control is not within range~~ → _unless the control **is** within range_. This is the commonest error with the word and it reverses the instruction.',
  '⚠ ~~unless if~~ · ~~except if the control~~ in a written step → _**unless** the control…_',
  '**_In which case_ refers back to the exception, and it must carry an action.** _…unless the control is also out, **in which case re-run the control and leave the sample**._ An exception with no action attached tells the reader that they are outside the rule and nothing else, which is worse than no exception at all.',
  '**Why one sentence and not two.** A rule in one sentence and its exception in the next can be read **half-way** — and everybody has stopped reading half-way through something today. A single sentence with _unless_ in the middle cannot be read half-way without being visibly unfinished.',
  '⚠ **And the finding of the cycle: an unwritten exception does not stay an exception.** It becomes a **habit** in the people who know it and a **mistake** in the people who do not, and after a few years nobody can tell which of the two they are looking at. The cost of writing three exceptions down is four lines; the cost of not writing them is a year of somebody doing it wrong and nothing visible happening.',
  '**Useful phrases:** it sounds complete and in practice it has three exceptions · somebody tells you, standing up, once, in your first month · nothing that I know of, which is not the same as nothing · I would rather have four lines than a year.',
  '**Practise:** Put the rule and its exception in one sentence with _unless_ and _in which case_.  1 repeating something  2 signing something  3 releasing or sending something  4 keeping or discarding something  5 entering something by hand',
  '**Pronunciation.** 🔊 **Track 20.10** _Unless_ carries a clear stress on the second syllable and a small pause before it, because it is the hinge of the sentence: _repeat the result ‖ **unLESS** the control is also out._ Said flat, it is missed. Listen to six and write what follows _unless_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a rule from their own work. B asks the question of this cycle: _what is the exception, and is it written down?_ A then says the rule and the exception in one sentence with _unless_ and _in which case_. Swap.'));
out.push(dlg(null, [
  ['A', 'The rule is: __________.'],
  ['B', 'What is the exception?'],
  ['A', '__________. It is not written down anywhere.'],
  ['B', 'Say it in one sentence.'],
  ['A', '__________ unless __________, in which case __________.'],
  ['B', 'And how did you learn the exception?'],
]));
out.push(table(['Card A – the rule', 'Card B – the rule'], [
  ['something that must always be repeated or re-done', 'something that must always be signed'],
  ['something that must never be released or sent', 'something that must always be kept'],
  ['something that must be done in a fixed order', 'something only one person may do'],
  ['something that must be entered on a system', 'something that must be reported the same day'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight exceptions and mark the ones that are **written down somewhere**. In a first run it is one or two out of eight. Then the second question, which is the one to end the stage on: how did each speaker learn theirs? Almost all of them were told once, standing up, by one person.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take one rule you follow and list **every** exception you know. Then say, for each, how you learnt it and whether somebody in their first month would know it.'));
out.push(p('**b**  Swap. Then each of you write your partner\'s rule and its most dangerous exception as one sentence, and your partner says whether the sentence is now followable by a new person.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is a line in Yara\'s bench instructions that she has been thinking about since 20.3: "Any result outside the reference range is to be repeated before release." Omar said that sounds complete, and she said it sounds complete and in practice has three exceptions, not one of which is anywhere on paper. One: if the control on that run is also out, you do not repeat the sample, you re-run the control, because the machine is wrong and not the patient. Two: if the result is outside the range in the direction the ward told you to expect, you release it and telephone, because repeating costs forty minutes and the ward is waiting. Three: if the sample is over two hours old you do not repeat it at all, you ask for a new one, because the repeat would be wrong in the same direction. Jad asked how new people learn the three, and she said the way she learnt them: somebody tells you, standing up, once, in your first month, and you remember two of the three. The third — the two hours — she did not know for a year, and she has repeated old samples and released figures she now thinks were wrong in a direction nobody could see. Nour asked whether anything happened, and she said nothing that she knows of, which is not the same as nothing. Then the thing she has only just understood: an unwritten exception does not stay an exception — it becomes a habit in the people who know it and a mistake in the people who do not, and after a few years nobody can tell which of the two they are looking at. So an exception goes inside the numbered step, with the condition in front: "Repeat any result outside the reference range before release, unless the control on the same run is also outside its range, in which case re-run the control and leave the sample." Ms Huda said unless is the most economical word in the unit, because it puts the rule and the exception in one sentence that a reader meets in one go — two sentences can be read half-way, and everybody in the room has stopped reading half-way through something today. Yara said the three exceptions together are four lines instead of one, and she would rather have four lines than a year._'));
out.push(p('**Listener task:** write one unwritten exception from this room, and how the speaker learnt it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three lines Yara proposes, and her note. Answer the questions.'));
out.push(model([
  '**BENCH INSTRUCTIONS · proposed replacement for line 7** · Y. Mansour · December',
  '**The line as it stands.** "Any result outside the reference range is to be repeated before release."',
  '**7** Repeat any result outside the reference range before release, **unless** the control on the same run is also outside its range, **in which case** re-run the control and leave the sample where it is.',
  '**8** Release a result outside the range without repeating it **only if** the requesting ward has stated the expected direction and you have telephoned them. Write the time of the call on the worksheet.',
  '**9** Do not repeat a result on a sample more than two hours old. Ask the ward for a fresh sample, **because** a repeat on an old sample is wrong in the same direction as the first result and therefore looks like a confirmation.',
  '**NOTE.** Line 7 as it stands has three exceptions in daily use and none of them is written anywhere. I learnt two of them in my first month, standing up, from one person. I learnt the third after about a year, and in that year I repeated old samples and released figures that I now believe were wrong in a direction nobody could have seen.',
  'Nothing is known to have come of it, which is not the same as nothing having come of it.',
  'The three lines above are four lines instead of one. I am not proposing any change of practice: all three are what the bench already does. I am proposing that what the bench already does should be on the sheet, so that an exception stops being a habit in the people who know it and a mistake in the people who do not.',
  'I should be grateful if you would read line 9 first, and tell me by 20 December whether I have the reason right, because it is the one I was told last and the one I understand least.',
]));
out.push(item('1', 'How does she describe what she is proposing, and what is she careful to say she is not proposing?'));
out.push(item('2', 'What does she say about the year, and what is her exact phrase about consequences?'));
out.push(item('3', 'Which line does she ask to be read first, and why?'));
out.push(writers([
  'A proposal for a line with exceptions: **the line as it stands, quoted** → **the replacement, numbered, with each exception inside its step** → **a note on how many exceptions are in daily use and how you learnt them** → **the honest sentence about consequences** → **what you are not proposing** → **and the one line you want checked first, with why**.',
  'Say plainly that you are not proposing a change of practice. _All three are what the bench already does._ A reader who thinks you want the work changed reads for risk; a reader who understands you want the sheet to match the work reads for accuracy.',
  'Use the exact sentence about consequences and do not soften it either way. _Nothing is known to have come of it, which is not the same as nothing having come of it._ It claims nothing and conceals nothing, and it is the sentence that makes the note impossible to dismiss.',
  'Name how you learnt each exception. _Standing up, from one person, in my first month._ It is the evidence that the knowledge is oral, and oral knowledge is the thing the proposal is about.',
  '⚠ And ask for the line **you understand least** to be checked first, and say that is why. It is the opposite of what people do — everybody asks for their strongest line to be read first — and it is the thing that makes a technical proposal trusted.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the proposed lines and the note (60 words or more).'));
out.push(p('**______________ · proposed replacement for ______________** · ______________   **The line as it stands.** "______________"   **______** ______________, **unless** ______________, **in which case** ______________.   **______** ______________ **only if** ______________. ______________.   **______** Do not ______________. ______________, **because** ______________.   **NOTE.** The line as it stands has ______ exceptions in daily use and ______________. I learnt ______ of them ______________. I learnt the ______________ after ______________, and in that time ______________.   Nothing is known to have come of it, which is not the same as ______________.   I am not proposing any change of practice: ______________. I am proposing that ______________.   I should be grateful if you would read line ______ first, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_Unless_ with no second negative after it',
  'Every _in which case_ carrying an action',
  'The exceptions inside the numbered steps, not in a note',
  '"I am not proposing any change of practice" — and the line you understand least, named',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the exception they learnt last.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full proposal (140 words or more): the line quoted, the replacement with exceptions inside the steps, how many exceptions are in daily use and how you learnt each, the honest sentence about consequences, what you are not proposing, and the line you want checked first.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **_unless_ without a second negative**, **every exception carrying an action**, **the line you understand least, named**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many unwritten exceptions has this room between it, and how many were learnt standing up from one person?** Count both. The second figure is almost the same as the first. Then the sentence to take away: an unwritten exception becomes a habit in the people who know it and a mistake in the people who do not — and the cost of writing it down is four lines.'));
out.push(hw('Write the proposal (60+ words). Then ask the person who taught you your exceptions whether there are any you do not know. Write down what they say, and whether they had to think about it.'));

// ======================= 20.6 =======================
out.push(pb());
out.push(h2('20.6  The page I would leave on the bench'));
out.push(p('**Function:** writing a one-page how-to for your own job   ·   **Grammar:** everything in this unit, on one page   ·   **Pronunciation:** reading a whole page aloud at the speed of work'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One question each, answered out loud in one sentence: **if you were away for a fortnight from tomorrow, what is the one thing nobody else in your workplace can do?** Your teacher writes the eleven on the board. Nobody is allowed to say "nothing".'));
out.push(board('If I am away for a fortnight, nobody can price a repair. This is the page that lets them.', 'the page you would leave'));
out.push(p('**b**  Which belongs on such a page? Say yes or no and why. **1** the order of the steps  **2** your opinion of the system  **3** the exceptions  **4** the telephone numbers  **5** what to do when something is not on the page  **6** how long each step takes'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mazen say the hardest part of the page was, and what did he put last?   **A** the exceptions, and what to do when something is not on the page   **B** the prices, and his telephone number   **C** the order, and a warning'));
out.push(p('**b**  Listen again. **1** Why does he say the prices were the easy half?   **2** What does Ms Huda say the last line of such a page must do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  One page, and the last line', [
  ['Mazen', 'I have written the page I would leave on the counter if I were away for a fortnight, and it took me two evenings, and the second evening was all one line.'],
  ['Ms Huda', 'What is on it?'],
  ['Mazen', 'Six steps for taking in a repair, the four prices I quote without looking anything up, the two faults I always refuse, the three shops and which to ring for what, and the exceptions. The prices were the easy half — half an hour. They are numbers and I know them.'],
  ['Omar', 'What took the second evening?'],
  ['Mazen', 'The last line. Because I realised that the page cannot cover a fortnight. It covers about eighty per cent of a fortnight. Something will come in on the Tuesday of the second week that is not on the page, and if I have not said what to do then, the person at my counter has one of two choices: guess, or turn the customer away. Both of those cost me more than the fortnight.'],
  ['Nour', 'So what did you write?'],
  ['Mazen', '"If a job is not on this page: take the customer\'s name and telephone number, write what they say the fault is in their words, tell them you will telephone them tomorrow morning, and put the ticket in the left-hand drawer. Do not quote a price. Do not refuse the job. Telephone me only if the drawer has four tickets in it."'],
  ['Jad', 'You have told them not to telephone you.'],
  ['Mazen', 'I have told them not to telephone me until four, which is the only honest version. If I write "telephone me any time", I am lying, because I shall be in Aleppo at my sister\'s wedding, and a page with a lie in it stops being used on the first day.'],
  ['Lubna', 'And "in their words"?'],
  ['Mazen', 'That is the line I am proudest of and it took four years at a counter to know. If somebody writes down what a customer **means**, I have lost the fault. If they write what the customer **says** — "it goes off when I put it in my pocket" — I can diagnose it on the telephone from Aleppo.'],
  ['Ms Huda', 'And that is the test of the page and of this whole unit. The last line is not a courtesy and it is not a disclaimer. **A page that does not say what to do when something is not on it will be abandoned the first time something is not on it** — and after that the fortnight has no page at all. So the last line is the one to write first and the one to spend the second evening on.'],
]));
out.push(sp());
out.push(box('Language box – the one-page how-to', [
  '**What goes on it, in this order:**',
  table(['part', 'what it is for'], [
    ['**The steps**, numbered, one action each', 'the ordinary case (20.3)'],
    ['**The purposes**, on the same line', 'so the steps survive a change (20.4)'],
    ['**The exceptions**, inside the steps', 'so they stop being oral (20.5)'],
    ['**The figures and names**, in a block', 'what you know without looking it up'],
    ['**What you refuse**, with the reason', 'so nobody takes on your judgement by accident'],
    ['**The last line: what to do when it is not on the page**', 'the only part that decides whether the page is used'],
  ], [2.2, 2.4]),
  '⚠ **The last line is the page.** A page that does not say what to do when something is not on it is abandoned the first time something is not on it — and after that the fortnight has **no** page at all. Write the last line first.',
  '**And the last line must contain an action, a limit and a truth.** _Take the name and number · write the fault in their words · do not quote a price · telephone me only if the drawer has four tickets in it._ An action so there is something to do; a limit so the reader is not carrying your judgement; and a truth about your availability, because ⚠ **a page with a lie in it stops being used on the first day** — and _telephone me any time_ is a lie if you will be at a wedding.',
  '**In their words, not in their meaning.** _Write what the customer says the fault is, in their words._ A reader who records what somebody **meant** has destroyed the only evidence; a reader who records what they **said** — _it goes off when I put it in my pocket_ — has preserved a diagnosis.',
  '**Put the things you refuse on the page, with the reason.** Otherwise the person covering for you accepts a job you would not have accepted, and the refusal — which is your judgement, built over years — is not available to them (19.4, 18.4).',
  '**Useful phrases:** it took me two evenings, and the second evening was all one line · the page covers about eighty per cent of a fortnight · guess, or turn the customer away, and both cost me more than the fortnight · telephone me only if the drawer has four tickets in it · a page with a lie in it stops being used on the first day.',
  '**Practise:** Write the last line for each.  1 your own job  2 a reception desk  3 a ward at night  4 a classroom with a supply teacher  5 a shop on a Friday',
  '**Pronunciation.** 🔊 **Track 20.12** Read the whole page aloud at the speed somebody would read it **while working** — fast, with a hard stop at the end of every numbered step. If you cannot read a step in one breath, it is two steps. Listen to one page read twice, once slowly and once at working speed, and say which reveals the fault.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes their job in five numbered steps and then gives the last line. B asks the three questions that test it. Swap.'));
out.push(dlg(null, [
  ['A', 'One: __________. Two: __________. Three: __________. Four: __________. Five: __________.'],
  ['A', 'And if it is not on the page: __________.'],
  ['B', 'Is there an action in that line?'],
  ['B', 'Is there a limit, so they are not carrying your judgement?'],
  ['B', 'And is it true about where you will be?'],
]));
out.push(table(['Card A – the fortnight', 'Card B – the fortnight'], [
  ['you are away and somebody covers your counter', 'you are away and somebody covers your bench'],
  ['you are away and a supply teacher has your class', 'you are away and a junior has your shift'],
  ['you are away and your own family has your shop', 'you are away and nobody covers you at all'],
  ['you leave the job altogether next month', 'you are ill tomorrow with no notice'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight last lines and mark each for the three tests — **action**, **limit**, **truth**. In a first run perhaps two of the eight have all three, and the one most often missing is the **truth**: almost everybody writes _telephone me any time_, which is the sentence that gets the page thrown away on day one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name the one thing nobody else can do if you are away for a fortnight. Then say what proportion of a fortnight your page could cover, honestly, and what the other proportion is made of.'));
out.push(p('**b**  Swap. Then each of you write your partner\'s last line for them, with an action, a limit and a truth — and your partner says whether the truth is true.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen has written the page he would leave on the counter if he were away for a fortnight. It took two evenings and the second evening was all one line. On it: six steps for taking in a repair, the four prices he quotes without looking anything up, the two faults he always refuses, the three shops and which to ring for what, and the exceptions. The prices were the easy half — half an hour, because they are numbers and he knows them. What took the second evening was the last line, because he realised the page cannot cover a fortnight: it covers about eighty per cent of one. Something will come in on the Tuesday of the second week that is not on the page, and if he has not said what to do then, the person at his counter has two choices — guess, or turn the customer away — and both cost him more than the fortnight. So he wrote: "If a job is not on this page: take the customer\'s name and telephone number, write what they say the fault is in their words, tell them you will telephone them tomorrow morning, and put the ticket in the left-hand drawer. Do not quote a price. Do not refuse the job. Telephone me only if the drawer has four tickets in it." Jad said he has told them not to telephone him, and Mazen said he has told them not to telephone him until four, which is the only honest version — because if he writes "telephone me any time" he is lying, since he will be at his sister\'s wedding in Aleppo, and a page with a lie in it stops being used on the first day. Lubna asked about "in their words", and he said that is the line he is proudest of and it took four years at a counter to know: if somebody writes down what a customer means, the fault is lost; if they write what the customer says — "it goes off when I put it in my pocket" — he can diagnose it on the telephone from Aleppo. Ms Huda said that is the test of the page and of the whole unit: a page that does not say what to do when something is not on it will be abandoned the first time something is not on it, and after that the fortnight has no page at all._'));
out.push(p('**Listener task:** write one last line from this room that has all three of action, limit and truth.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mazen\'s page. Answer the questions.'));
out.push(model([
  '**COUNTER 2 · WHAT TO DO WHILE I AM AWAY · 14–28 December** · M. Hariri',
  '**Taking a repair in.** **1** Write the customer\'s name and telephone number on the ticket. **2** Write what they say the fault is, **in their words**, not what you think it is — _so that I can diagnose it on the telephone if I have to._ **3** Look at the screen corners before you accept it. **4** If a corner is lifted, say so to the customer and write it on the ticket — _so that they do not find it on Thursday and think we did it._ **5** Give them the lower half of the ticket. **6** Put the upper half in the green box in date order.',
  '**Prices I quote without looking anything up.** Screen, the common model: 310,000. Screen, the large model: 395,000. Battery: 85,000. Charging port: 120,000. Anything else: see the last line of this page.',
  '**The two jobs I refuse, and why.** Water damage after somebody has already opened it — _because the fault is then unfindable and the customer will believe we caused it._ And anything with a crack across the board, visible when the back is off — _because it will come back twice and the second time for nothing._',
  '**Telephone numbers.** Abu Fadi, Mezzeh, for any part: he answers before ten and after four. Shaalan for glass only. The distributor\'s office for nothing at all this fortnight — Mr Haddad is expecting a letter from me on 5 January and I do not want a telephone call in between.',
  '**The exception on prices.** Quote the four prices above **unless** the customer has had the same repair here within six months, **in which case** write "repeat" on the ticket and quote nothing: I shall deal with it when I am back, and it is usually free.',
  '**IF A JOB IS NOT ON THIS PAGE.** Take the name and the telephone number. Write what they say the fault is, in their words. Tell them we shall telephone tomorrow morning. Put the ticket in the **left-hand drawer**. Do not quote a price. Do not refuse the job. Telephone me **only if the left-hand drawer has four tickets in it** — I am at a wedding in Aleppo from the 15th and I shall look at my telephone twice a day.',
]));
out.push(item('1', 'Which steps have a purpose written against them, and what does each purpose protect against?'));
out.push(item('2', 'Why is the distributor\'s office on the telephone list at all?'));
out.push(item('3', 'What are the four parts of the last line, and which of them is about him rather than about the work?'));
out.push(writers([
  'The page you would leave: **the steps, numbered, with purposes on the lines that need them** → **the figures you know without looking them up** → **what you refuse, with the reason** → **the names and when they answer** → **the exception, with _unless_ and _in which case_** → **and the last line, in capitals**.',
  'Put the hours against the names, not just the names. _He answers before ten and after four._ A telephone number with no hours against it is two wasted calls and a person who stops trying.',
  'Include the person who must **not** be telephoned, and why. It is the entry nobody thinks of, and it is the one that protects a negotiation you have spent two months building.',
  'Write the purposes only where a reader could do the sensible and wrong thing. A purpose on every one of six steps is a page nobody reads; two purposes on the two steps that matter is a page that works.',
  '⚠ And put the last line in capitals at the bottom with all four parts in it: **the action, the place to put it, the two prohibitions, and the truth about where you will be.** Write that line first and spend most of your time on it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page you would leave (60 words or more).'));
out.push(p('**______________ · WHAT TO DO WHILE I AM AWAY · ______________** · ______________   **______________.** **1** ______________. **2** ______________ — _so that ______________._ **3** ______________. **4** If ______________, ______________ — _so that ______________._ **5** ______________.   **The figures I know without looking anything up.** ______________. ______________. Anything else: see the last line.   **What I refuse, and why.** ______________ — _because ______________._   **Names, and when they answer.** ______________. And ______________, for nothing at all this fortnight, because ______________.   **The exception.** ______________ **unless** ______________, **in which case** ______________.   **IF SOMETHING IS NOT ON THIS PAGE.** ______________. Put it ______________. Do not ______________. Telephone me **only if** ______________ — I am ______________ and I shall ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One action per numbered step; purposes only where they are needed',
  'What you refuse, with the reason',
  'The exception with _unless_ and an action after _in which case_',
  'The last line: action, place, prohibition, and a truth about where you will be',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) for a real fortnight away from your own work: steps with purposes where they matter, your figures, what you refuse and why, names with hours, one exception, and the last line with all four of its parts.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **what you refuse, with the reason**, **the exception carrying an action**, **the last line\'s action, limit and truth**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the pages in this room contain a lie?** Read the availability lines out and let the room decide. _Telephone me any time_ · _I shall be contactable_ · _ask me if you are not sure_ — every one of those is a lie told by somebody who means well, and a page with a lie in it stops being used on the first day. The honest version is always a limit: _only if the drawer has four tickets in it._'));
out.push(hw('Write the page (60+ words), beginning with the last line. Then give it to one person who would actually have to use it and ask them one question: _what would you do with a job that is not on this page?_ Write down their answer, not yours.'));

// ======================= 20.7 =======================
out.push(pb());
out.push(h2('20.7  Review & Mediate: Who is the originating office'));
out.push(p('**Function:** explaining a manual   ·   **Recycling:** Units 1–20   ·   **Exam practice:** B1 Preliminary Reading Part 2, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** When the light will come on, reseat the module.  **2** Repeat it unless the control is not within range.  **3** Before to load the roll, check the cutter.  **4** Photograph it so that to show the joint.  **5** Make sure the guard is down. _(make it an action)_  **6** Switch off if the light is red. _(put the condition first)_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the guidance notes Bassel was given for the ministry order.'));
out.push(box(null, [
  '**HOW TO REGISTER A NEW SUPPLIER · guidance notes** _(nine steps; undated; issued with the March order)_',
  '**1**  Obtain form S/4 from the originating office.',
  '**2**  Complete sections A and B in full.',
  '**3**  Attach the reference from the originating office.',
  '**4**  Make sure the form is signed by an authorised signatory before submission.',
  '**5**  Submit the completed form to the registry.',
  '**6**  Forms submitted after the 20th of the month are processed in the following month.',
  '**7**  Registration is confirmed in writing within 30 working days.',
  '**8**  If any section is incomplete the form is returned.',
  '**9**  Enquiries concerning registration should be directed to the registry.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. How many of the nine steps does Bassel say he could not follow, and what does he say the one change worth asking for is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  Nine steps, four of which I could not do', [
  ['Bassel', 'These came with the March order and I have had them for nine months. There are nine steps. Four of them I could not do at all, and I did not know that four was the number until I sat down with this unit and read them one at a time.'],
  ['Ms Huda', 'Which four?'],
  ['Bassel', 'One and three, which both say "the originating office", and I did not know what that is. Four, which says "make sure the form is signed by an authorised signatory", and I did not know whether I am one. And eight, which says that if any section is incomplete the form is returned — and does not say to whom, or where, or what I then do.'],
  ['Nour', 'What did you do about "the originating office"?'],
  ['Bassel', 'I asked four people over about six weeks. Then I found out in two minutes, because there is a clerk two doors from the registry who has filled in that form eleven times for other people. The originating office is the ministry department whose reference is printed at the top of my own order — which I have had on my desk since March.'],
  ['Omar', 'So the answer was on your own desk.'],
  ['Bassel', 'The answer was on my own desk for nine months and the words that would have told me are not in the guidance. And step four: I went back to the conditions page, the one Lubna and I read in June, and definition six says authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing. So I am the authorised signatory, and I spent three weeks in the spring believing I needed somebody above me.'],
  ['Jad', 'And step six?'],
  ['Bassel', 'Step six is the one that cost me a month, and it is the Unit 20.2 fault exactly. It is a warning, and it is printed **after** step five, which is the step it concerns. I submitted on the twenty-third of November. If those words had been inside step five — "Submit the completed form to the registry **before the 20th of the month**" — I would have submitted on the nineteenth, and I would be registered now instead of in February.'],
  ['Lubna', 'So what do you write to them?'],
  ['Bassel', 'One line, one fault, one rewrite, and it is four words. Move "before the 20th of the month" into step five. I am not going to tell them that four of their nine steps are unfollowable, because nobody has ever been persuaded of anything by that sentence, and because three of the four are only unfollowable if you have never done it before — which is every single person reading the notes.'],
  ['Ms Huda', 'And that is the mediation. The four words in step five are for them. The other three faults are for **your** page: write down what the originating office is, that you are the signatory, and what to do if the form comes back — and put it in the drawer with the order, for whoever has to do this in 2028.'],
]));
out.push(sp());
out.push(box('Language box – reading a manual written by somebody else', [
  '**Read it one step at a time and ask the Unit 20 question of each: _could I do this, exactly, knowing only what I know?_** Not _do I understand it_. Four of Bassel\'s nine steps were comprehensible and undoable, which is the commonest condition of guidance notes everywhere.',
  '**Then sort what you cannot do into three kinds, because they need three different answers.** **1** A **name you do not know** — an office, a form, a reference, a signatory. Find the person who has done it before; the answer takes two minutes and is often already on your own desk. **2** A **warning in the wrong place** (20.2) — that is the one to write to the author about, because it is four words and it costs them nothing. **3** A **step with no action in it** — _if any section is incomplete the form is returned_: to whom, where, and what do you then do? That goes on **your own** page, because the author cannot fix it without rewriting the document.',
  '**One line, one fault, one rewrite** (18.7). Of the four faults, write about **one** — the cheapest one to mend — and keep the other three for yourself. _Nobody has ever been persuaded of anything by the sentence "four of your nine steps are unfollowable."_',
  '**And the part that is yours: write the answers into a page of your own and leave it with the document** (20.6). What the originating office is; who the signatory is; what to do if the form comes back. That page is for whoever has to do this in four years\' time, and it is the only version of the guidance that will ever contain those three facts.',
  '**Useful phrases:** four of them I could not do at all · I asked four people over six weeks, then found out in two minutes · the answer was on my own desk for nine months · three of the four are only unfollowable if you have never done it before, which is every single person reading the notes · the four words are for them; the other three faults are for my page.',
  '**Pronunciation.** 🔊 **Track 20.14** Explaining a step you cannot follow: **read the step flat, pause, then your own question with the stress on the unknown word** — _"obtain form S/4 from the originating office" ‖ what is the **ORIGinating** office?_ Listen to four and write the unknown word only.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the documents below and does **not** show it. A reads it once, then explains it: which steps could not be followed by somebody who has never done it, which kind of fault each one is, and which single fault is worth writing to the author about. B must say what belongs on A\'s own page instead. **Then, in two minutes together**, decide the **one** change you would ask for. You do not have to agree. Change roles with the other document.'));
out.push(table(['Document A – claiming travel expenses', 'Document B – booking the college workshop'], [
  ['_1 Obtain a claim form from your line manager._', '_1 Request the workshop through the technician on duty._'],
  ['_2 Attach original receipts._', '_2 Complete the booking sheet in the workshop office._'],
  ['_3 Enter the cost centre code._', '_3 Make sure a risk assessment is in place._'],
  ['_4 Make sure the claim is authorised before submission._', '_4 Submit the sheet to the senior technician._'],
  ['_5 Submit to the finance office._', '_5 Bookings made after Wednesday are for the following week._'],
  ['_6 Claims over 30 days old are not accepted._', '_6 Confirmation is given by email._'],
  ['_7 Payment is made with the following month\'s salary._', '_7 If equipment is unavailable the booking lapses._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the one change each pair asked for. On Document A it is nearly always step 6 moved into step 1 or 5; on Document B step 5 moved into step 4. In both cases it is the **warning in the wrong place**, because that is the only one of the three kinds of fault the author can mend in four words — and the pairs reach it by giving up on the faults that matter more to them, which is the discipline of the cycle.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use a real manual, leaflet or set of guidance notes from your own life. Explain it to your partner **without showing it**: the steps you could not have followed, what kind of fault each is, the one worth writing about, and the three facts that belong on your own page. Your partner must ask: _who has done this before?_, _where is the warning?_ and _which step has no action in it?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _The guidance notes came with Bassel\'s March order and he has had them nine months. Nine steps; four of them he could not do at all, and he did not know that four was the number until he read them one at a time. One and three both say "the originating office" and he did not know what that is. Four says "make sure the form is signed by an authorised signatory" and he did not know whether he is one. Eight says that if any section is incomplete the form is returned, and does not say to whom, or where, or what he then does. Nour asked what he did about the originating office, and he asked four people over about six weeks and then found out in two minutes, because there is a clerk two doors from the registry who has filled in that form eleven times for other people: the originating office is the ministry department whose reference is printed at the top of his own order, which has been on his desk since March. And step four — he went back to the conditions page he and Lubna read in June, and definition six says authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing, so he is the authorised signatory, and he spent three weeks in the spring believing he needed somebody above him. Step six is the one that cost a month and it is the 20.2 fault exactly: it is a warning printed after step five, which is the step it concerns. He submitted on the twenty-third of November; if the words had been inside step five — "submit the completed form to the registry before the 20th of the month" — he would have submitted on the nineteenth and would be registered now instead of in February. So what he writes is one line, one fault, one rewrite, and it is four words. He is not going to tell them that four of their nine steps are unfollowable, because nobody has ever been persuaded of anything by that sentence, and because three of the four are only unfollowable if you have never done it before — which is every single person reading the notes. And Ms Huda said the other three faults are for his own page: what the originating office is, that he is the signatory, and what to do if the form comes back, in the drawer with the order, for whoever has to do this in 2028._'));
out.push(p('**Listener task:** write the one change each pair asked for, and one fact that belongs on their own page.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 2)', 7));
out.push(p('The five people below all want help with a set of instructions. Choose from the eight pages (**A–H**) the one page that suits each person. There are **three** pages you do not need.'));
[
  '**1**  Hiba wrote a card for a machine herself. The new man follows it exactly, every time, and still gets one step wrong, and she cannot see what is wrong with the card.',
  '**2**  Samer has a rule at work that has three exceptions. Everybody on his shift knows all three and nothing anywhere says any of them.',
  '**3**  Rula is away for three weeks from next month and there is one job nobody else in the building has ever done.',
  '**4**  Ziad has a manual with one warning on it, in bold, at the bottom of the page, under the last step.',
  '**5**  Nabil has been given nine guidance notes for a form. Two of them tell him to attach a reference from an office he has never heard of.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box(null, [
  '**A**  **What the step assumes.** The three kinds of knowledge a writer cannot see in their own instruction — a word, a choice, a state — and how to find them by asking the person who followed it and got it wrong.',
  '**B**  **Where the warning goes.** Why a warning printed after the step is a record that somebody knew, and the four words that turn it into a step.',
  '**C**  **One action per number.** Why a numbered step is a place to put your finger, and what the phrase _make sure_ is hiding every time it appears.',
  '**D**  **Unless, and in which case.** Putting a rule and all its exceptions in one sentence that cannot be read half-way — and what an unwritten exception becomes after a few years.',
  '**E**  **Say what it is for.** The six words that make a step survive a change in conditions, and why a reader without them does the sensible and wrong thing.',
  '**F**  **The page you would leave.** What belongs on a one-page how-to for your own job, and the last line — the one that decides whether the page is used at all.',
  '**G**  **Who is the originating office?** What to do with guidance that names a form, an office or a reference you have never heard of, and who in the building has already done it eleven times.',
  '**H**  **The purpose nobody wrote down.** Recovering the reason for an old practice from the oldest person who was there, and reading it back to them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-line note to the author of a manual, and your own page (60 words or more).'));
out.push(p('**______________ · step ______** · ______________   I am writing about one step of the ______________ notes. The others are not the subject of this note.   **The step as it stands.** "______________"   **Where it is, and where it belongs.** It is printed ______________, which is ______________ below the step it concerns — step ______.   **The rewrite, which is ______ words moved and none added.** "______________"   **What it cost me.** ______________.   ** · · · MY OWN PAGE, FOR THE DRAWER · · · **   **______________ means** ______________. _(Not stated in the notes.)_   **The authorised signatory is** ______________, under ______________.   **If the form comes back:** ______________.   **The person who has done this before is** ______________, ______________ times.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One fault only in the note to the author — the cheapest one to mend',
  'The number of words moved, and none added',
  'The three facts the author cannot supply, on your own page',
  'The person who has done it before, named, with how many times',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **140 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**The instruction that could not be followed.** Tell us about a step you followed exactly and still got wrong. What did the step assume, what did it cost, and what would you write instead? The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"I read the step again, and this time I read what was actually written."_',
]));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ the amber light comes on, reseat the module. _(it comes on every run)_   a) When   b) If   c) Unless',
  '2  Repeat the result ___ the control is also outside its range.   a) if not   b) unless   c) unless if',
  '3  ___ loading the new roll, check that the cutter is down.   a) Before   b) After   c) Until',
  '4  Photograph the elevation first ___ the joint is visible.   a) for   b) to   c) so that',
  '5  …in which case ___ the control and leave the sample.   a) re-running   b) to re-run   c) re-run',
  '6  Look at the guard. ___ it is up, push it down.   a) If   b) Unless   c) So that',
  '7  Date every copy; ___ nobody will know which is current.   a) unless   b) otherwise   c) so that',
  '8  Keep the old roll ___ check the count.   a) for   b) so that   c) to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview).** 🔊 **Track 20.15** You will hear an interview with a printer about a set of guidance notes. For each question choose **A**, **B** or **C**.'));
[
  '**1**  How many of the nine steps does he say he could not follow?   **A** four   **B** two   **C** nine',
  '**2**  What is "the originating office"?   **A** the registry   **B** his own office   **C** the ministry department whose reference is on his order',
  '**3**  How did he find out?   **A** he telephoned the registry   **B** he read the conditions page   **C** a clerk near the registry had done the form eleven times',
  '**4**  Which step cost him a month?   **A** step 6   **B** step 8   **C** step 9',
  '**5**  What is the one change he is asking for?   **A** the notes rewritten   **B** four words moved into step 5   **C** a telephone number added',
  '**6**  What does he say about step 8?   **A** it is the clearest step on the page   **B** it has no action in it   **C** it should be deleted',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Interviewer', 'You have had these guidance notes since March. How many of the nine steps could you actually follow?'],
  ['Bassel', 'Five. Four of them I could not do at all, and I did not know it was four until I sat down and read them one step at a time, which I had never done — I had read them twice as a page and come away feeling slow.'],
  ['Interviewer', 'Steps one and three both mention "the originating office".'],
  ['Bassel', 'And I did not know what that was for nine months. It is the ministry department whose reference is printed at the top of my own order. The order has been on my desk since March.'],
  ['Interviewer', 'How did you find out in the end?'],
  ['Bassel', 'Not from the registry. There is a clerk two doors from the registry who has filled that form in eleven times for other people, and she told me in about two minutes. I had asked four people over six weeks before that, and none of the four had ever filled one in.'],
  ['Interviewer', 'And the step that cost you most?'],
  ['Bassel', 'Step six. It says that forms submitted after the twentieth are processed in the following month — and it is printed after step five, which is the step about submitting. I submitted on the twenty-third of November. Those nine words belong inside step five and I would be registered now instead of in February.'],
  ['Interviewer', 'So what are you asking them to change?'],
  ['Bassel', 'One thing. Move four words into step five. I am not telling them that four of their nine steps cannot be followed, because nobody has ever been persuaded of anything by that sentence, and because three of the four are only unfollowable by somebody who has not done it before — which is everybody who reads the notes.'],
  ['Interviewer', 'And step eight?'],
  ['Bassel', 'Step eight says that if any section is incomplete the form is returned. There is nothing in it for me to do. It does not say to whom it is returned, or where, or what I am supposed to do next — so it is not a step at all, it is a fact about their office. That one goes on my own page and not in my letter.'],
]));
out.push(p('**C  Writing.** Write the one-page how-to for your own job (140+ words): numbered steps with one action each, purposes where a reader could do the sensible and wrong thing, the figures you know without looking them up, what you refuse and why, one exception with _unless_ and _in which case_, and a last line with an action, a limit and a truth.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what happened when I followed a step exactly, and name what it assumed',
  '☐ use _when_ and _if_ correctly in an instruction, with the present simple',
  '☐ put the warning before the action, inside the numbered step',
  '☐ write one action per number, with the condition in front and no _make sure_',
  '☐ say what a step is for, in six words, with _so that_ or _otherwise_',
  '☐ put a rule and its exception in one sentence with _unless_ and _in which case_',
  '☐ write the one-page how-to for my own job, last line first',
  '☐ read somebody else\'s manual, find the step nobody new could follow, and ask for one change',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 21 – NEGOTIATING AND COMPROMISE', [
  'Unit 19 asked for things and Unit 20 wrote them down. **Unit 21** is what happens when the other side wants something too: _unless · provided that · as long as · in that case · I would be prepared to…_ — the language of an offer with a condition attached to it.',
  '**21.3 is the cycle to prepare for**: saying what you would be prepared to give up, and in exchange for what — in one sentence, with both halves in it. Students find the first half easy and the second half almost impossible, and a concession with no exchange named is not a negotiation, it is a retreat.',
  '**21.6 writes the two-column page**: what each side needs, what each side can give, and the one row where the two lists touch. **21.7** mediates between two people who both think they have already compromised.',
  '**Bring one thing you want from somebody who wants something from you** — at work, at home, from a supplier, from a committee. With what you think **they** want, written in their words and not yours. 21.1 begins with that column.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 20 · Student\'s Book');
