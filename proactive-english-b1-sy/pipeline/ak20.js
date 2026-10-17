// Proactive English B1 · Syria Edition · Book 2 · Unit 20 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 20  Instructions, Manuals and How-To — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One question runs through the whole unit and it is not "is it clear?".** It is: **what would somebody do if they followed this exactly and knew nothing?** Ask it of every line any student writes in this unit, including the ones in their reports, and the unit teaches itself. A line can be perfectly clear to its author and completely unfollowable, and the only person who can tell you is the person who followed it and got it wrong.',
  '**The four rules of 20.3 are the spine of the unit** and they are cheap: one action per numbered step · the condition in front of the action · no _make sure_ · and none of the five two-way verbs from 18.3. Make the class read their own numbered steps **aloud with the numbers**, because a step with two actions in it cannot be said as one number and two verbs without being heard.',
  '**20.4 is the cycle that changes practice outside the classroom.** A reader who does not know what a step is for will follow it exactly until the day the conditions change and then do the sensible thing — and the sensible thing is almost always wrong. Six words fix it, and most experienced people have the reasons in their heads and nowhere else.',
  '**What you need in the room.** For 20.1, one set of instructions each **and the thing the student got wrong the first time** — the mistake matters more than the manual, and a class that arrives with manuals and no mistakes has a cycle about documents instead of a cycle about readers. For 20.7, one real manual, leaflet or set of guidance notes each.',
  '**And the sentence the unit turns on**, which is Ms Huda\'s in 20.1: _the person who wrote the step cannot see what they know, and the only person who can see it is the person who followed the sheet and got it wrong — who is the least likely person in any workplace to say so._',
], C.lblue, C.navy));

// ===================== 20.1 =====================
out.push(pb());
out.push(h2('20.1  I did exactly what it said'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and write the **steps** on the board and not the mistakes — that is the whole design of the stage. Then go along the line asking one question of each: _what does this assume?_ The class will find most of them, and the students who brought them will not.'));
out.push(A('**b** **1** _When_   **2** _If_   **3** _When_   **4** _If_   **5** _If_. The rule to give: _when_ for what will happen in the ordinary course, _if_ for what may not. Both take the present simple — ⚠ ~~when the light will come on~~.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – _reseat_; she took the module out and put it back into the second slot, which takes a different module in that model.'));
out.push(A('**b** **1** For three weeks she avoided step four: she carried the unit to a colleague called Hisham and said she was busy, about five times, and watched which slot he used. _Three weeks and five lies to learn one word._   **2** Not whether it is clear — **what somebody would do if they followed it exactly and knew nothing**.'));
out.push(NOTE('The three kinds of assumed knowledge are the tool the class takes away, and all three are invisible to the author: a **word** (_reseat, prime, bleed, purge, tare_), a **choice** the writer has never had to make (which slot, which screw, which of two switches), and a **state** the writer always finds the machine in (_the guard will already be off_). The second is the one that caused Nour\'s fault and the one nobody looks for. And the reason the fault survived four years is in the cycle: the person who can see it is the person who got it wrong, who is the least likely person in any workplace to say so — so the writer has to go and ask.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _"Reset the counter at the end of the run." It assumes I know which of the two counters — the sheet count or the impression count — and nothing says. **Choice.**_',
  '**2** _"Attach the relevant reference." It assumes I know that an order has a reference and where on the order it is printed. **Word and choice.**_',
  '**3** _"Allow it to settle and then decant." It assumes I know how long settling takes, which turns out to be about ten minutes and is nowhere on the page. **State.**_',
  '**4** _"Enter the reading in the usual field." It assumes the screen I am looking at is the screen the writer was looking at, and there have been two versions since. **State.**_',
  '**5** _"Ask the supervisor before moving it." It assumes there is one supervisor. There are two and they disagree. **Choice.**_',
]));
out.push(A('Item 5 is the one to read out, because the assumption is not about a machine at all: _it assumes there is one supervisor._ A great many instructions assume a single person where there are two, and the reader who meets two does the sensible thing and asks the nearer one.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** It says: "Reseat the module and run the test again." I took it out and put it back in the second slot.',
  '**B:** It assumes you know the word and it assumes there is one obvious slot. **Word and choice.**',
  '**B:** So the step should be: "Take the module out of the **upper** slot and put it back in the **upper** slot. Run the test again."',
  '**A:** And the thing I did instead of asking was carry the unit to somebody else five times and say I was busy.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('One or two of the eight asked somebody at the time. The other six or seven worked it out, watched somebody, or avoided the step — and that count is the explanation for every bad step that has survived on a sheet for years. Write the figure on the board and leave it there for 20.7.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The step is "complete the upper section and forward it". I completed the upper section and gave it to the person who had given it to me, because "forward" assumes you know who the next person is, and on that form the next person is the department and not the sender. It assumes a **choice**. What I did instead of asking was wait until I saw somebody else do it, which took about a month, and in that month I forwarded four of them backwards._',
  '**b** _My partner\'s rewrite: "Complete the upper section. Put it in the tray marked FINANCE outside room 9." Two actions, two numbers, and a place instead of a verb. A new person could follow that on their first morning._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour has brought the diagnostic sheet from her third day at TechCare, because she did the worst thing she has ever done at work with it and has never told anybody at work what actually happened. Step four reads: "When the amber light comes on, reseat the module and run the test again." Omar said that is a normal sentence, and she agreed it is a completely normal sentence — and she did not know the word reseat. She knew seat as a thing you sit on, so she worked it out: take the module out and put it back. Which is right. And then she put it back in the second slot, because there are two slots, nothing on the sheet says which, and the second is physically easier to reach. The unit ran, the test passed, the customer took it away, and it came back nine days later with the same fault and a second one — because the second slot is for a different module in that model. Lubna asked whether she told anybody, and she said no: for three weeks she avoided step four, carried the unit to a man called Hisham about five times saying she was busy, and watched which slot he used. Three weeks and five lies to learn one word. Ms Huda asked whose fault it was, and Nour said she would have said hers in September, and now thinks the sheet does not say which slot and the step was written by somebody for whom there has only ever been one obvious slot. Then the sentence of the whole unit: the test of an instruction is not whether it is clear, it is what somebody would do if they followed it exactly and knew nothing — and the writer cannot see what they know. Step four has been on that sheet for four years.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ When the light will come on… → ✓ when the light **comes** on.   ✗ If the light comes on _(it always does)_ → ✓ **When**.   ✗ When it jams, press the button _(it rarely jams)_ → ✓ **If**.   ✗ I was following exactly the sheet. → ✓ I **followed the sheet exactly**.   ✗ It assumes that I know the word _reseat_ meaning. → ✓ it assumes I know **the word** _reseat_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That the reader knows the word _reseat_; and that there is one obvious slot — which there is if you have worked on these for more than a fortnight, and is not if you have worked on them for three days.'));
out.push(A('**2** She avoided step four for three weeks, carrying the unit to Hisham and saying she was busy, about five times.'));
out.push(A('**3** That the sheet has been in use for four years and she is probably not the first person to put a module in the second slot — only the first to write it down, eleven months late, because for eleven months she thought it was a fact about her.'));
out.push(A('The structural move to teach is the **separation of the right part from the wrong part**: _I worked it out from "seat": take it out and put it back. That was right._ A note that admits everything reads as carelessness; a note that locates the single wrong turn reads as evidence, and only the second kind changes a sheet.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NOTE ON STEP 3 · expenses claim guidance** · F. Kayyali · December',
  '**What the step says.** "Complete the upper section and forward it."',
  '**What I did, on 4 September.** I completed the upper section and gave it back to the person who had given me the form.',
  '**What happened.** It came back to me a fortnight later with a note saying it had not been received by finance. I did that four times between September and October.',
  '**What the step assumes, and there are two things.** It assumes that "forward" names a known destination. And it assumes there is one obvious next person — which there is if you have claimed before, and is not if you have not.',
  '**What I did instead of asking.** I waited until I saw somebody else do it, which took about a month.',
  '**What I suggest, and it is fourteen words.** "**3** Complete the upper section. **4** Put the form in the tray marked FINANCE outside room 9."',
  '**And the thing that is not about step 3.** Four claims went backwards and forwards for six weeks and nobody has ever asked me why.',
]));
out.push(S('Stage 7 · Write freely (sample, 183 words)'));
out.push(SAMPLE([
  '**NOTE ON STEP 4 · diagnostic sheet, model 2200** · N. Sabbagh · 10 December',
  '**What the step says.** "When the amber light comes on, reseat the module and run the test again."',
  '**What I did on 14 January, my third day.** I did not know the word _reseat_, so I worked it out from _seat_: take the module out and put it back. That was right. Then I put it back in the second slot, because there are two slots, the sheet does not say which, and the second one is easier to reach from where you stand.',
  '**What happened.** The unit ran and the test passed. It came back on 23 January with the original fault and a second one. I have since been told that the second slot takes a different module in that model.',
  '**What the step assumes, and there are two things.** It assumes the reader knows the word _reseat_. And it assumes there is one obvious slot — which there is, if you have worked on these for more than a fortnight, and is not, if you have worked on them for three days.',
  '**What I did instead of asking.** For three weeks I avoided step four. When an amber light came on I carried the unit to Hisham and said I was busy. About five times. I watched which slot he used, and that is how I learnt it.',
  '**What I suggest, and it is eleven words.** "When the amber light comes on: **1** switch off. **2** take the module out of the **upper** slot and put it back in the **upper** slot. **3** run the test again."',
  '**And the thing that is not about step four.** That sheet has been in use for four years and I am probably not the first person to put a module in the second slot. I am only the first to write it down.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On the step quoted exactly: it is word for word, and the quotation is what lets me see that the trouble is one word and one missing adjective. On the assumptions named and labelled: both are there and the second one — the slot — is the one I would never have found, and I would put it first, because it is the one that caused the fault. On the word-count: eleven words is the sentence that will get the sheet changed, and I would also say that you are not asking for the other nine steps to be looked at."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the years the steps have been in use — some will be five or ten. Then the question: in how many cases is the student probably not the first to have got it wrong? Almost all. And in every one of those cases nobody wrote it down, because everybody concluded that the difficulty was theirs (19.1). The two cycles are the same cycle seen from the two ends of the document.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked Hisham whether he got step four right the first time. He said: "Nobody gets step four right the first time. There used to be an arrow drawn on the sheet in biro and somebody reprinted it." Eleven years, and the fix was a biro arrow that was lost in a reprint. He also said that two other people have done what I did, that he knew about both, and that neither of them said anything either.']));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  The warning goes first'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second half — adding the warnings and saying where each would have to go — is the stage. Insist on _where_, because students add warnings at the end by reflex, which is the fault the cycle is about.'));
out.push(A('**b** **1** _Before loading the roll, check the cutter._   **2** _After loading the roll, close the lid._   **3** _Before taking the bus out, sign the sheet._   **4** _Before opening the cover, switch off._   **5** _Before opening the drawer, read the chart._ ⚠ All five take **-ing** after _before_/_after_: ~~before to load~~.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – at the bottom of the card, in bold, under the last step; four jammed rolls in eight years, two of them his, and on 14 October a whole morning on the Harasta road done on a notebook.'));
out.push(A('**b** **1** That the warning about step two is four steps and about eighty words below step two, in a different typeface, after you have finished — and that a card like that is read once, in your first week, with a queue behind you.   **2** It is not a warning at all: _it is a record that somebody knew_ — and in that position it protects the author of the card rather than the reader.'));
out.push(NOTE('Tareq changes his mind inside the dialogue and the change is the teaching point. The warning is **not** better at the top: _a general warning at the top of a card is scenery_ — read once, in week one, and never again. It has to be **inside the numbered step, before the action, as an action**: _2 Check that the cutter is down. Load the new roll._ Then it is read every time the step is read, which is the only moment it can do anything. The cost is four words and no extra paper, which is the argument to give a manager.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _**4** Switch off at the wall. Open the cover._',
  '**2** _**2** Read the second column against the chart. Sign the sheet._',
  '**3** _**5** Check the batch number against the order. Send the consignment._',
  '**4** _**3** Isolate the machine at the wall. Clean the rollers._',
  '**5** _**1** Ask whoever is on stores. Move the box._',
]));
out.push(A('Every one of the five is now two imperatives in the order the reader meets them, and every one is **shorter** than the step plus its separate warning. That is the sentence to give the class for use with managers: the rewrite is not an addition, it is the same words in the order the reader meets them.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Step: "Load the new roll." Warning, at the bottom: "The cutter must be in the down position before a new roll is loaded."',
  '**B:** As one step: "**2** Check that the cutter is down. Load the new roll." That is eleven words, against seventeen for the step plus the warning.',
  '**A:** A reader who met the original would load the roll with the cutter up, jam it, and read the warning afterwards — which is exactly what happened to me in 2019.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The rewrites come out between eight and fifteen words and almost none is longer than the original step plus its warning. Keep the counts on the board: the commonest objection to moving a warning is that it will make the document longer, and the counts show that it does not.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The ward medicines notice has three warnings. One is in a box at the top — "all medicines must be checked against the chart" — which belongs inside step 3 and is at present scenery. One is at the end of the page about controlled drugs, which belongs in step 5. The third is in the middle of step 4 and is in the right place, and it is the only one anybody can quote._',
  '**b** _My partner says the top box is the scenery, and that nothing would be lost by deleting it entirely once the words are inside step 3 — which I had not considered, because deleting a warning feels like removing a safeguard and is in fact removing a decoration._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['There is a card beside the fare machine on every bus in Tareq\'s depot: six steps and one warning, and the warning is at the bottom, in bold, under the last step. It reads: "N.B. The cutter must be in the down position before a new roll is loaded." The loading is step two — so the warning about step two is four steps and about eighty words below it, in a different typeface, after you have finished. Omar said so nobody reads it until afterwards, and Tareq said nobody reads it at all: you read a card like that once, in your first week, standing in a bus with a queue behind you, and then you do the steps from memory for nine years. He has loaded about four hundred rolls and has read that warning twice — once in 2017 and once last Tuesday. What it costs is four jammed rolls that he knows of in eight years, two of them his; a jammed roll in the morning means no tickets until the depot opens at nine, and on the fourteenth of October the whole morning on the Harasta road was done on a notebook. Lubna asked whether it would be better at the top of the card, and this is what he has changed his mind about: no, because at the top it becomes a general warning, and a general warning at the top of a card is scenery. It has to be inside step two, before the word "load" — "2 Check that the cutter is down. Load the new roll." Two actions in the order they happen, and the warning is not a warning any more, it is a step. Then the sentence Ms Huda made him repeat: a warning that comes after the step is not a warning, it is a record that somebody knew. She said that is what it is for in most documents and the author usually does not know it: the card protects whoever wrote the card, and moving the warning in front of the action protects the reader instead, at a cost of four words.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Before to load the roll… → ✓ before **loading**.   ✗ After you sign it, hand in. → ✓ _after **signing** it, hand it in_ / _when you have signed it, hand it in_.   ✗ A numbered list with _then_ on every line → ✓ the numbers do that work.   ✗ _First_, _then_, _next_, _after that_, _finally_ all in five steps → ✓ use _then_ and the numbers.   ✗ N.B. at the bottom → ✓ inside the step, as an action.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Not a word. He has **moved eleven words** and said the cutter sentence twice.'));
out.push(A('**2** Because the cutter can come up when the old spindle comes out, and a driver who checked it in step 2 has no reason to look again.'));
out.push(A('**3** One card, on bus 7, for a month, and for whoever drives bus 7 to be asked in January whether it is better. He is **not** asking for the card to be reprinted for the whole fleet.'));
out.push(A('Two further moves worth naming. The **test step** — _print one test ticket; if it is blank or cut short, go back to step 2_ — because a procedure that does not end in a check ends in a passenger asking for a ticket. And the **defended repetition**: students are taught all their lives not to repeat themselves, and repetition in an instruction is right far more often than they allow. It needs one line of defence, once.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WARD 4 · GIVING A DRUG FROM THE TROLLEY** _(proposed replacement for the notice of 2021)_ · R. Barakat · December',
  '**1** Take the chart from the end of the bed.',
  '**2** Read the second column against the chart. Open the drawer.',
  '**3** Check the patient\'s band against the chart.',
  '**4** Read the second column against the chart. Give the drug.',
  '**5** Sign at the bed.',
  '**6** If the chart and the band do not agree, give nothing and telephone the pharmacy on 212.',
  '**NOTE.** The old notice has five steps and two warnings, both in a box at the top. I have not added a word: I have moved nine and said the second-column sentence twice, in steps 2 and 4, because the drawer can hold two charts\' worth of a similar name and the second look is the one that catches it.',
  'Step 6 is new only in position: it was the first line of the old top box, where it was read in week one and never again.',
  'I am not asking for the notice to be reprinted for the hospital. I am asking for one notice, on Ward 4, for a month.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**FARE MACHINE · CHANGING THE ROLL** _(proposed replacement for the card of 2017)_ · T. Ayoub · December',
  '**1** Stop the bus and switch the machine off.',
  '**2** Check that the cutter is down. Open the lid.',
  '**3** Take out the old spindle. Keep the old roll until the end of the shift.',
  '**4** Check that the cutter is down. Load the new roll with the printed side towards you.',
  '**5** Close the lid until it clicks. Switch on.',
  '**6** Print one test ticket. If it is blank or cut short, go back to step 2.',
  '**NOTE.** The old card has six steps and one warning. The warning — that the cutter must be down before a new roll is loaded — is at the bottom, in bold, under step six, about eighty words below the step it concerns.',
  'I have not added a word to the card. I have moved eleven words and said the cutter sentence twice, in steps 2 and 4, because the cutter can come up when the old spindle comes out and a driver who checked it in step 2 has no reason to look again.',
  'I have also put the test ticket in as step 6 with a route back to step 2, because at present the card ends and you find out whether it worked when a passenger asks for a ticket.',
  'What this is about is four jammed rolls in eight years, two of them mine. On 14 October I did the whole Harasta road morning on a notebook, which is not permitted and was the only thing available to me.',
  'I am not asking for the card to be reprinted for the fleet. I am asking for one card, on bus 7, for a month.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On the warning before the action: it is in steps 2 and 4 and it has stopped being a warning, which is the point. On the defended repetition: the one line about the spindle is enough and I would not add a second word to it. On the test step: step 6 with a route back to step 2 is the best thing on the card, and I would say in the note that it is new, because a manager comparing six steps with six steps will not notice that one of them does something the old card never did."**'));
out.push(NOTE('The objection to expect in this cycle is that the rewrite makes the document longer, and the counts answer it: the rewrites come out between eight and fifteen words and almost none is longer than the original step plus its separate warning. Keep the word-counts on the board. **The rewrite is not an addition; it is the same words in the order the reader meets them** — and that sentence, given to a manager, settles the matter in one line. The second objection is that a warning should be prominent, which is why it is in bold at the bottom; the answer is that prominence is not placement. A reader does not read the page, they read the step they are on.'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the warnings at the bottom and the warnings at the top. Then the finding, said plainly: a warning in either of those positions protects the person who wrote the document, and the authors almost never know that is what they have done. Students find this uncomfortable and it is worth sitting with for a moment, because several of them wrote the documents in question.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I showed both versions to the driver of bus 11 and said nothing. He read the old one, then the new one, then went back to the new one and read step 6 twice. He said: "This one tells you whether you have done it." Then he said the thing I had not thought of — that he has never once printed a test ticket, because it costs a ticket, and that he would want the card to say that the test ticket does not have to be accounted for. That is a tenth word and it has to go in.']));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  The step that cannot be got wrong'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and let the minute run out. _Make sure the file is saved before closing the window_ produces four or five different readings in any class: save then close · check whether it is saved then close · close and let it ask you · assume it autosaves. All of them are reasonable and only one is what the writer meant. _Try to keep a copy_ produces two: make an effort, or here is a method.'));
out.push(A('**b** **1** _1 Check the reading. 2 Enter it._   **2** _1 Look at the guard. 2 If it is up, push it down. 3 Start the machine._   **3** _1 Sign the sheet. 2 Hand it in at the window._   **4** _1 Read the chart. 2 Open the drawer. 3 Give the drug._   **5** _1 If the light is red, switch off. 2 Telephone._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – thirty-one of ninety-four numbered steps contain more than one action; and his three rules are one action per step, the condition in front, and none of the five two-way verbs.'));
out.push(A('**b** **1** Because _make sure_ is **not an action**: nobody can do it and nobody has ever been seen doing it, so a reader in a hurry makes sure of it in their head — and if a step says _make sure_, the writer has not decided what the reader should do.   **2** That a reader who meets the action first **begins to do it**, then meets the condition, and has to stop — and half of them do not stop.'));
out.push(NOTE('The sentence that makes rule 1 worth teaching is Jad\'s: **a numbered step is a place.** It is where somebody puts a finger when the telephone rings, and a number holding two actions cannot say where the work stopped — which is the only thing numbering is for. And the answer to the objection the class will raise: _eleven more numbers is not a cost; eleven more numbers is eleven more places a reader can put a finger._ A sheet is not improved by being short. It is improved by being followable at six in the morning by somebody with one hand free.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _1 Look at the sheet. 2 If it is not signed, sign it. 3 Leave._ — three numbers.',
  '**2** _1 Enter the code. 2 Press send._ — two numbers.',
  '**3** _1 Photocopy the page. 2 Put the copy in the green folder._ — two numbers, and the vague _keep a copy_ replaced by a place.',
  '**4** _1 If the machine is off, clean the blade. 2 If it is running, do not touch the blade._ — two numbers, both conditions in front.',
  '**5** _1 If the item is over 20 kg, use the floor balance. 2 Otherwise use the bench balance._ — two numbers, and no _try_.',
]));
out.push(A('Item 3 is the one to point at: _remember to keep a copy_ has become **a photocopier and a green folder**. The four rules do not only remove ambiguity; they force the writer to decide things they had left to the reader, and in almost every case the writer knew the answer all along.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** "Make sure the valve is closed before draining."',
  '**B:** That breaks rule 3 and rule 2. Rewritten: "**1** Look at the valve. **2** If it is open, close it. **3** Open the drain."',
  '**A:** And how many numbers now?',
  '**B:** Three instead of one — and all three are things somebody could be watched doing.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Rule 3 (_make sure_) comes up most and rule 1 second. The observation to end the stage on is the important one: **all eight originals are written in good, careful English by people who were trying hard**, which is why none of this can be found by proof-reading for mistakes. It can only be found by reading the numbers aloud.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Four of my own, from a handover note I wrote in October. "Check the chart and give the drug" — rule 1, two actions. "Make sure the ward has been told" — rule 3, and I do not know myself whether I meant telephone them or look at the book. "Remember to date the copy" — rule 4. "Sign it if you watched the check" — rule 2, condition after the action. Four steps and four rules broken._',
  '**b** _My partner says the worst is the second, because I do not know what I meant: a reader in a hurry will decide it means the book, since the book is in the room and the telephone is not — and the book is updated at the end of the shift, so they will believe the ward has been told when it has not._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad counted the steps in the forum\'s own posting guide and in two manuals he had at home: ninety-four numbered steps, and thirty-one of them have more than one action in them. Omar said that is a third, and Jad said a third, and that he has written steps like that himself for two years. "Check the reading and enter it" — two jobs, one number; and if somebody is interrupted in the middle they do not know whether they are in step three or past it, and neither does anybody looking at the sheet afterwards. Nour asked why two small things matter so much, and he said because a numbered step is a place: it is where you put your finger when the telephone rings, and if one number contains two actions the sheet cannot tell you where you are, which is the whole point of numbering. His three rules: one action per numbered step; the condition in front of the action, never after it; and none of the five verbs from Unit 18. Then the thing he did not expect, which is about "make sure". Everybody thinks "make sure the guard is down before you start the machine" is a good, careful sentence, and he says it is the most dangerous phrase on a sheet, because make sure is not an action — nobody has ever made sure of anything — and what you can do is look at the guard, which the sentence does not say. And if a step says make sure, the writer has not decided what the reader is supposed to do. So it becomes: "3 Look at the guard. 4 If it is up, push it down. 5 Start the machine." Three numbers, three things you can watch somebody do. Ms Huda added the rule students find hardest to believe: the condition goes in front of the action, because a reader who meets the action first begins to do it, then meets the condition, and has to stop — and half of them do not stop. Jad said the three rules cost nothing: the guide is four lines longer with eleven more numbers in it. Ms Huda said eleven more numbers is eleven more places a reader can put a finger.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Make sure the guard is down. → ✓ **Look at** the guard. **If** it is up, **push** it down.   ✗ Switch off if the light is red. → ✓ **If the light is red, switch off.**   ✗ 3 Check the name and the number and sign. → ✓ three numbers.   ✗ Remember to date it. → ✓ **Write the date on it.**   ✗ Try to use the second balance. → ✓ **Use** the second balance for anything over 20 kg.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Numbering exists to say **where you are** — where a finger goes when the telephone rings, and where the work stopped. A number holding two actions cannot say either.'));
out.push(A('**2** Because it is not an action. Nobody can do it and nobody has ever been seen doing it, and if a step says _make sure_, the writer has not decided what the reader should **do**.'));
out.push(A('**3** That the four rules go at the top of the **editors\' own page** — the page the posting guide is written on. He is **not** asking for the ninety-four steps to be rewritten.'));
out.push(A('That last request is the most transferable thing in the cycle and it should be said out loud: a rewrite is a project and will not be granted; four lines at the head of a template is a morning\'s work for one person, and it mends every document written after it. Students default to asking for the existing document to be fixed, which is the version that gets refused.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR RULES FOR A HANDOVER NOTE** · R. Barakat · for the ward office · December',
  'I counted the numbered steps in our own night handover notes for November: fifty-one steps, of which nineteen contain more than one action. I have written steps like that myself for two years and I am not criticising anybody.',
  '**Rule 1. One action per number.** "Check the chart and give the drug" is two jobs with one number. A numbered step is where somebody puts a finger when the buzzer goes.',
  '**Rule 2. The condition in front.** "If the band and the chart disagree, give nothing", never "give nothing if they disagree".',
  '**Rule 3. No "make sure".** This is the one I expect an argument about. "Make sure the ward has been told" is on four of our notes, and I wrote one of them, and I do not now know whether I meant telephone or the book.',
  '**Rule 4. None of the five verbs.** No _stop_, _try_, _remember_, _forget_ or _go on_ in a numbered step.',
  '**What the rules cost.** A November handover becomes about six lines longer. That is the whole cost.',
  '**What I am asking for.** That the four rules go on the inside cover of the handover book, not that the November notes be rewritten.',
]));
out.push(S('Stage 7 · Write freely (sample, 185 words)'));
out.push(SAMPLE([
  '**FOUR RULES FOR A NUMBERED STEP** · J. Attar · for the posting guide · December',
  'I counted the steps in our own posting guide and in two manuals. Ninety-four numbered steps; thirty-one of them contain more than one action. I have written steps like that myself for two years and I am not criticising anybody.',
  '**Rule 1. One action per number.** "Check the reading and enter it" is two jobs with one number on it. A numbered step is a **place** — it is where somebody puts a finger when the telephone rings — and a number holding two actions cannot say where the work stopped. That is the only thing numbering is for.',
  '**Rule 2. The condition in front of the action.** "If the light is red, switch off", never "switch off if the light is red". A reader who meets the action first begins to do it and then has to stop. Half of them do not stop, and the half who do not are the half who are in a hurry, which is the half the sheet exists for.',
  '**Rule 3. No "make sure".** This is the one I expect an argument about. It reads as the most careful sentence on the page and it is the most dangerous, because _make sure_ is not an action. If a step says _make sure_, the writer has not decided what the reader should do.',
  '**Rule 4. None of the five verbs.** No _stop_, _try_, _remember_, _forget_ or _go on_ in a numbered step.',
  '**What the four rules cost.** The guide becomes four lines longer and gains eleven numbers. Eleven more numbers is not clutter: it is eleven more places a reader can put a finger.',
  '**What I am asking for.** That the four rules go at the top of the editors\' own page — not the posting guide, the page we write the posting guide on. I am not asking for the ninety-four steps to be rewritten.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On one action per number: your own page obeys it, which matters more than the rules do — a page of rules that breaks its own rules is read for the irony. On the condition in front: the sentence about the half who are in a hurry being the half the sheet exists for is the strongest argument on the page, and I would put it in rule 1 as well. On the request that is not a rewrite: asking for the rules to go on the page where new documents are written is the move I shall steal, and I would add who would put them there, because at present it is nobody\'s job."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Insist that students count their **own** steps and not only other people\'s. Then the closing sentence: all of these were written in careful English by people trying hard, which is exactly why none of it can be found by proof-reading — only by reading the numbers aloud. Ask the class to do that once a term with anything they have written.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I read my own October handover note aloud with the numbers. Nine steps. Four break a rule: two have two actions, one has "make sure", and one has the condition after the action. I have mended the first three. The fourth I cannot mend until I decide what "make sure the ward has been told" meant, and I have realised I cannot ask anybody, because I wrote it — so I have replaced it with "telephone the ward and write the time on the sheet", which is what I actually do and have never written down.']));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  Say what the step is for'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second half is the stage: a step whose purpose the student **does** know and has never written down anywhere. Every experienced person in the room has several, and that is the material for Lesson B.'));
out.push(A('**b** **1** _Photograph it first, so that the scaffold does not hide it._   **2** _Date the copy; otherwise you will not know which is current._   **3** _Keep the old roll to check the count._   **4** _Sign at the bed, because nothing after it can be undone._   **5** _Ring the ward first, so that you know whether the patient has been moved._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – step two, photographing all four elevations before any scaffolding goes up; a student photographed the fourth through the scaffold and the 1974 joint is lost until March.'));
out.push(A('**b** **1** They follow it exactly until the day it stops making sense, and then they do the sensible thing — and the sensible thing is almost always wrong, because the step exists for a reason that is not sensible from where they are standing.   **2** It makes a step survive a **change in conditions**, which is the only thing a written step ever has to survive — and it protects the writer as well as the reader.'));
out.push(NOTE('Six words. _So that the render at the 1974 joint is visible._ That is the whole cost of the cycle, and the figure to keep in front of the class. The other sentence to put on the board is Lubna\'s last one: **_if I had written why, and she had still taken it through the scaffold, it would have been her Monday. It was my October._** A purpose line is not politeness and not teaching; it is the only thing that transfers responsibility from the writer to the reader, and students who resist writing purposes on the grounds that it is patronising have the direction of the favour backwards.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Keep a copy, so that an altered figure can be read both ways._',
  '**2** _Photograph it first, so that the scaffold does not hide the joint._',
  '**3** _Date everything; otherwise nobody knows which version is current._',
  '**4** _Telephone before you go up, so that you do not carry it twice._',
  '**5** _Write the time on the bag, so that the delay can be counted later._',
]));
out.push(A('All five are six words or fewer after the comma, which is the discipline. A purpose of twenty words is a paragraph and will be skipped; a purpose of six is read in the same breath as the step. Item 4 is the one to read out, because the purpose is about the reader\'s legs and not about the organisation — and purposes that are about the reader are the ones that get obeyed.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The step is: "Photograph it before work starts." No reason given.',
  '**B:** With the reason: "Photograph it before work starts, so that the joint is visible."',
  '**A:** Without the reason, on a day when the scaffold is already up, a reader would photograph it through the scaffold — which is sensible, and loses the only evidence there is.',
  '**A:** With it, they would come back on the Sunday.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Three or four of the eight guesses are right. That is the argument of the cycle in a number: **half the purposes a sensible reader invents for a step are wrong, and the reader has no way of knowing which half.** Say it, because students assume a competent reader will work it out, and a competent reader works out the wrong thing half the time.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Eleven steps on the bench instructions. Purposes written: two. Purposes in my head: seven. Purposes nobody in the laboratory knows: two — why the afternoon run is at three and not at four, and why the second channel is read before the first. I have asked three people about the second one and the best answer was "it has always been that way", which is not an answer._',
  '**b** _My partner chose the step about writing the time on the bag. On a day when the porter is late and there are six bags, a reader will write one time for all six, because it is sensible — and six bags with one time are six bags with no time. The six words are: "so that each bag can be counted separately."_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna wrote a method sheet in October for the two students helping her with the second building — eleven steps — and last week one of them dropped step two, and she has spent three days understanding that it was her sheet and not the student. Step two reads: "Photograph all four elevations before any scaffolding goes up." Eleven words and no reason. The student did it on three elevations; on the fourth the scaffold was already up when she arrived on Monday, and she photographed through it — which is a reasonable thing to do if you think the step is about having a photograph. It is not: it is about the render, which is the only evidence of where the 1974 extension joins the original wall, and once the scaffold is up the joint cannot be seen at all. Jad asked whether she can go back, and the scaffold comes down in March and the survey is due in January, so that elevation goes in with a photograph of a scaffold in front of it and the joint described in words, which is exactly the kind of sentence an examiner asks about. Nour asked what she would have written, and the answer is six more words: "so that the render at the 1974 joint is visible". She says the student would have gone back on the Sunday, and she knows it, because when she was told on Tuesday she was more upset than Lubna was. Then the sentence of the cycle: a reader who does not know what a step is for will follow it exactly until the day it stops making sense, and then do the sensible thing — and the sensible thing is almost always wrong. Ms Huda said that is why the purpose line is not politeness and not teaching: it is what makes a step survive a change in conditions, which is the only thing a written step ever has to survive. And Lubna said it protects the writer too — if she had written why and the student had still gone through the scaffold, it would have been her Monday. It was Lubna\'s October.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ so that to be visible → ✓ _so that it **is** visible_.   ✗ for to check the count → ✓ _**to** check the count_.   ✗ in order that check → ✓ _in order **to** check_.   ✗ Keep the old roll so that check the count. → ✓ _so that **you can** check the count_.   ✗ Date it, otherwise to know which is current. → ✓ _otherwise **nobody will know** which is current_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Step 5 — _write "blank" only where you have asked twice, on two dates, and write both dates_ — _so that a blank means something, and so that nobody, including me, can later call it laziness._'));
out.push(A('**2** That it is **not a method**: _a reason in one person\'s head is not a method_. It is a dependency on that person.'));
out.push(A('**3** It said "write blank where you cannot measure", which let her write "blank" the first time somebody did not open a door — which is what she did for seven weeks on the other building (19.1 and 18.1).'));
out.push(A('The move to teach is that a purpose can **protect the reader from the writer**: _so that nobody — including me — can later call it laziness._ A sheet that only protects its author is followed until somebody is in a hurry; a sheet that protects its reader is followed. And note that step 5 is the step Lubna has changed because of her own failure in another building, which is the only honest reason anybody ever tightens a method.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**METHOD SHEET · AFTERNOON SAMPLES** · Y. Mansour · December',
  '**1** Write the time on each bag as it reaches the bench. _So that each bag can be counted separately, even when six arrive together._',
  '**2** Read the control before the first sample, not after the last. _So that a bad run is found before forty minutes have been spent on it._',
  '**3** Enter every reading, including one identical to yesterday\'s. _So that a column of identical numbers is evidence; a gap is not._',
  '**4** Telephone the ward before releasing anything outside the range. _So that the ward is not told by a figure on a screen at two in the morning._',
  '**5** Write "not received" only where you have looked on the shelf by the lift. _Otherwise "not received" means two different things and neither of them can be counted._',
  '**NOTE.** The first version had five steps and one reason. On 29 October four samples sat on a shelf for eighteen hours, and the step that would have caught it is step 1, which said only "write the time on the bag". The reason was in my head and not on the sheet, and a reason in one person\'s head is not a method.',
  'The step I have changed most is 5, and it is not about accuracy. It used to say "write not received where appropriate", which let me write it without walking to the lift.',
]));
out.push(S('Stage 7 · Write freely (sample, 188 words)'));
out.push(SAMPLE([
  '**METHOD SHEET · 22 SHARIA BAGHDAD · survey, January** · L. Sweidan · second version, December',
  '**1** Walk the whole building once and write down nothing. _So that you know how many rooms there are before you start counting them._',
  '**2** Photograph all four elevations before any scaffolding goes up. _So that the render at the 1974 joint is visible: it is the only evidence of where the extension meets the original wall, and scaffolding hides it completely._',
  '**3** Measure every room at floor level, not at waist height. _So that the figures are comparable with the 2009 drawings, which were taken at floor level._',
  '**4** Record ceiling heights at two points in every room. _So that a sloping ceiling shows up as two numbers instead of one argument._',
  '**5** Write "blank" only where you have asked twice, on two dates, and write both dates. _So that a blank means something, and so that nobody — including me — can later call it laziness._',
  '**6** Keep the pencil original of every sheet. _So that a figure that has been altered can be read both ways._',
  '**NOTE.** The first version of this sheet had eleven steps and no reasons. On 2 December a step was dropped — reasonably, by somebody doing the sensible thing — and an elevation has been lost until March. The reason was in my head and not on the sheet, and a reason in one person\'s head is not a method.',
  'Step 5 is the one I have changed most, and it is not about accuracy. In October it said "write blank where you cannot measure". That let me write "blank" the first time somebody did not open a door, which is what I did for seven weeks on the other building.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On a purpose for every step: all six have one and none is longer than a line, which is harder than it looks. On the purpose written for a change in conditions: step 2 is the one that does it — _scaffolding hides it completely_ — and it is the only purpose on the page that could not have been guessed. On the step you changed most: step 5 is the strongest thing here, because the reason for the change is your own seven weeks and you have said so, and a method tightened for any other reason is tidying."**'));
out.push(S('Stage 7R · Share'));
out.push(A('The three columns are the point: **written · in your head · unknown to you too.** The second is much the largest in every class of working adults. Then the sentence to close on: a reason in one person\'s head is not a method, it is a dependency — and the person it depends on is going to be away for a fortnight in Unit 20.6.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked about the second channel being read before the first. The senior technician said she did not know and that the man who set up the analyser in 2016 would. He has left. She then said something more useful: that the order is in the instrument\'s own manual and that the manual is in a cupboard in the corridor. So the reason is not in anybody\'s head at all — it is in a cupboard, eleven metres from the bench, and nobody has opened it since 2016 because everybody assumed somebody knew.']));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  Unless, and in which case'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and write only the **exceptions** on the board — the guessing of the rules is the stage, and it demonstrates the point before the Language box is opened: an exception on its own is unintelligible, which is why an exception on a separate sheet is useless.'));
out.push(A('**b** **1** _Run it again unless the control is within range._   **2** _Do not sign it unless you have watched the check._   **3** _Telephone the ward unless the figure is impossible._   **4** _Keep the sample unless it is over two hours old._   **5** _Enter it by hand unless the system is available._ ⚠ All five: no second negative after _unless_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the line has no exception on the page, and in daily use it has three.'));
out.push(A('**b** **1** It becomes **a habit in the people who know it and a mistake in the people who do not**, and after a few years nobody can tell which of the two they are looking at.   **2** Inside the numbered step, with the condition in front — not in a note, not on a second sheet, not in a box at the bottom.'));
out.push(NOTE('The argument for _unless_ over two sentences is worth making explicitly, because it is not obvious: **a rule in one sentence and its exception in the next can be read half-way, and everybody in the room has stopped reading half-way through something today.** One sentence with _unless_ in the middle of it cannot be read half-way without being visibly unfinished. That is the whole case for the word, and it is why it is the most economical thing in the unit. Yara\'s arithmetic is the other half: three exceptions are four lines instead of one, and she says she would rather have four lines than a year.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Repeat any result outside the range before release, unless the control on the same run is also out, in which case re-run the control and leave the sample._',
  '**2** _Sign the sheet only if you watched the check, in which case write the time beside your name._',
  '**3** _Release the result unless the ward has asked to be telephoned first, in which case telephone and write the time of the call._',
  '**4** _Keep the sample unless it is more than two hours old, in which case ask the ward for a fresh one and write down that you have asked._',
  '**5** _Enter the reading on the system unless the system is down, in which case write it on the pad by the door and enter it when the system returns._',
]));
out.push(A('Check that every _in which case_ carries an **action**. An exception that tells the reader only that they are outside the rule is worse than no exception at all, because it stops them doing the normal thing and gives them nothing to do instead. Item 4 is the model: _ask for a fresh one **and write down that you have asked**_ — two actions, and the second one is what makes the first provable.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The rule is: any result outside the reference range is repeated before release.',
  '**B:** What is the exception?',
  '**A:** Three of them. If the control is also out, you re-run the control. If the ward stated the direction, you telephone and release. If the sample is over two hours old you do not repeat at all.',
  '**B:** Say it in one sentence.',
  '**A:** Repeat any result outside the range before release, unless the control on the same run is also out, in which case re-run the control and leave the sample.',
  '**B:** And how did you learn the exception?',
  '**A:** Standing up, from one person, in my first month. The third one I did not learn for a year.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('One or two of the eight exceptions are written down somewhere. Then the second question, which is the one to end on: how did each speaker learn theirs? Almost all of them were **told once, standing up, by one person** — and that phrase is the evidence that the knowledge is oral and therefore unevenly held, which is the whole subject of the cycle.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The rule is that nobody signs a proof they set themselves. Exceptions I know: if the man who set it has left for the day and the job is on a ministry date, the foreman signs and writes "set by" and the name — which I decided in April and have told three people and written nowhere. And if it is a reprint of an unaltered job, nobody signs again. Somebody in their first month would know neither._',
  '**b** _My partner\'s sentence: "Nobody signs a proof they set themselves, unless the setter has left and the job carries a ministry date, in which case the foreman signs and writes the setter\'s name beside it." She says a new man could follow that, and that my April decision has been a rule for eight months with no sentence anywhere._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['There is a line in Yara\'s bench instructions that she has been thinking about since 20.3: "Any result outside the reference range is to be repeated before release." Omar said that sounds complete, and she said it sounds complete and in practice has three exceptions, not one of which is anywhere on paper. One: if the control on that run is also out, you re-run the control, because the machine is wrong and not the patient. Two: if the result is outside the range in the direction the ward told you to expect, you release it and telephone, because repeating costs forty minutes and the ward is waiting. Three: if the sample is over two hours old you do not repeat it at all, you ask for a new one, because the repeat would be wrong in the same direction. Jad asked how new people learn the three, and she said the way she learnt them: somebody tells you, standing up, once, in your first month, and you remember two of the three. The third she did not know for a year, and she has repeated old samples and released figures she now thinks were wrong in a direction nobody could see. Nour asked whether anything happened, and she said nothing that she knows of, which is not the same as nothing. Then the thing she has only just understood: an unwritten exception does not stay an exception — it becomes a habit in the people who know it and a mistake in the people who do not, and after a few years nobody can tell which of the two they are looking at. So an exception goes inside the numbered step, with the condition in front. Ms Huda said unless is the most economical word in the unit, because it puts the rule and the exception in one sentence that a reader meets in one go — two sentences can be read half-way, and everybody in the room has stopped reading half-way through something today. Yara said the three exceptions together are four lines instead of one, and she would rather have four lines than a year.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ unless the control is not within range → ✓ _unless the control **is** within range_.   ✗ unless if → ✓ _unless_.   ✗ …in which case re-running the control → ✓ _re-run_.   ✗ …in which case you are outside the rule _(no action)_ → ✓ say what to do.   ✗ Only if you watched the check, sign it. → ✓ _Sign it **only if** you watched the check._'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** She describes it as putting on the sheet what the bench **already does** — _I am not proposing any change of practice: all three are what the bench already does._'));
out.push(A('**2** _In that year I repeated old samples and released figures that I now believe were wrong in a direction nobody could have seen._ And then: _nothing is known to have come of it, which is not the same as nothing having come of it._'));
out.push(A('**3** Line 9, the two-hour rule — because it is the one she was told last and the one she understands least.'));
out.push(A('That last request is the move to teach, and it is the opposite of what people do. Everybody asks for their strongest paragraph to be read first; asking for the line you understand least to be checked first is what makes a technical proposal trusted, and it costs one sentence. The other sentence to keep is the one about consequences: it claims nothing and conceals nothing, and it is the reason the note cannot be dismissed as alarmism or excused as nothing.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**PROOF SIGNING · proposed replacement for rule 1** · B. Tahhan · December',
  '**The rule as it stands.** "Nobody signs a proof they set themselves."',
  '**1** Nobody signs a proof they set themselves, **unless** the setter has left for the day and the job carries a ministry date, **in which case** the foreman signs and writes the setter\'s name beside his own.',
  '**2** A reprint of an unaltered job is not signed again **only if** the original proof is attached to the job bag. Otherwise it is signed as a new job.',
  '**NOTE.** The rule as it stands has two exceptions in daily use and neither is written anywhere. I decided the first myself, in April, and have told three people. I learnt the second from my father and have never said it aloud until this month.',
  'Nothing is known to have come of it, which is not the same as nothing having come of it: in September a reprint went out with an altered date and nobody can now say who approved it.',
  'I am not proposing any change of practice: both are what the shop already does. I am proposing that what the shop already does should be on the wall, so that an exception stops being a habit in the three men who know it and a mistake in the eleven who do not.',
  'I should be grateful if the three on the ministry order would read line 2 first, because it is the one I am least sure of.',
]));
out.push(S('Stage 7 · Write freely (sample, 190 words)'));
out.push(SAMPLE([
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
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On _unless_ without a second negative: clean in both places, and line 8\'s _only if_ is doing something _unless_ could not, which I had not seen before. On every exception carrying an action: line 7 and line 8 both do, and line 9 is the strongest because the action is _ask for a fresh sample_ and the reason is in the same sentence. On the line you understand least: asking for line 9 to be checked first is the sentence that will get the whole note read, and I would move it to the top rather than the bottom."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the unwritten exceptions and then count how many were learnt standing up from one person. The two figures are nearly the same, and that is the finding. Close on the sentence and let it be uncomfortable: an unwritten exception becomes a habit in the people who know it and a mistake in the people who do not — and in a department of four, after five years, nobody can tell which of the two they are looking at, including the people doing it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I asked the senior technician whether there were exceptions I did not know. She thought for about fifteen seconds — which is the part worth reporting — and then said yes, two. One about paediatric samples, which I have never handled and which I would have got wrong the first time. And one about Fridays, when the courier comes at eleven instead of three, so an afternoon sample taken on a Friday morning is not an afternoon sample at all. I have been here eighteen months and I did not know either. She said nobody had ever asked her the question.']));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The page I would leave on the bench'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and hold the line: **nobody is allowed to say "nothing".** Every adult in a working class has one thing nobody else does, and the students who claim they have none are usually the ones with three. If somebody genuinely cannot find one, ask who gets telephoned when they are ill.'));
out.push(A('**b** **1** yes — it is the page.   **2** no — an opinion of the system is the one thing that cannot be acted on, and it makes the page look like a complaint.   **3** yes, and inside the steps (20.5).   **4** yes, **with the hours against them**.   **5** yes, and it is the most important line on the page.   **6** usually yes, because somebody planning a day needs to know whether a step is four minutes or forty.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the exceptions were not the hardest part; the hardest was the **last line**, what to do when something is not on the page, and he put it last and spent an evening on it.'));
out.push(A('**b** **1** Because they are numbers and he knows them — half an hour\'s work.   **2** It must say **what to do when something is not on the page**: a page that does not will be abandoned the first time something is not on it, and after that the fortnight has no page at all.'));
out.push(NOTE('Three things in the last line, and the one students always omit is the third. An **action**, so there is something to do. A **limit**, so the reader is not carrying the writer\'s judgement — _do not quote a price, do not refuse the job._ And a **truth** about the writer\'s availability. Almost everybody writes _telephone me any time_, and almost everybody is lying: ⚠ **a page with a lie in it stops being used on the first day.** The honest version is always a limit — _telephone me only if the drawer has four tickets in it_ — and it is kinder as well as truer, because it tells the reader when they are allowed to.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _If a job is not on this page: take the name and number, write the fault in their words, put the ticket in the left-hand drawer, and tell them we shall telephone tomorrow. Do not quote a price. Telephone me only if there are four tickets in the drawer._',
  '**2** _If somebody asks for something that is not on this page: write down what they asked for and who they are, and say that an answer will come on Monday. Do not promise a day. The office manager is in on Tuesdays and Thursdays._',
  '**3** _If a patient is not on the handover sheet: write the bed number and what you were told, and tell the night sister at the next round. Do not move the patient. The night sister is on 214 until six._',
  '**4** _If a lesson is not in the folder: do the reading from the board and set the exercise on page 44. Do not set a test. I am away until the 28th and I shall not see messages._',
  '**5** _If a customer wants a repair I have not listed: take it in and write the fault in their words. Quote nothing. I am at a wedding from the 15th and I look at my telephone twice a day._',
]));
out.push(A('Every one of the five has an action, a limit and a truth, and items 4 and 5 are the ones to read out, because the truth in both is unflattering — _I shall not see messages_, _twice a day_ — and unflattering truths are the ones that keep a page in use.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** One: write the name and number on the ticket. Two: write the fault in their words. Three: look at the screen corners. Four: if a corner is lifted, say so and write it on the ticket. Five: give them the lower half.',
  '**A:** And if it is not on the page: take the name and number, write the fault in their words, put it in the left-hand drawer, telephone me only if there are four tickets in it.',
  '**B:** Is there an action? Yes — four of them.',
  '**B:** Is there a limit? Yes: do not quote, do not refuse.',
  '**B:** And is it true about where you will be? Yes, and that is the only part I would not have written.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Perhaps two of the eight last lines have all three. The one most often missing is the **truth**, and almost everybody writes _telephone me any time_. Read those out and ask the writers whether it is true. The answers are the cycle: at a wedding, on a train, in another country, in an examination. A page with a lie in it stops being used on the first day, and the reader does not say so — they simply stop opening it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The one thing nobody else can do is read the night notebook and tell the day staff which three of the night\'s events matter. My page could cover about seventy per cent of a fortnight. The other thirty per cent is the thing I cannot write: knowing which child will be awake, which is nine years and not a page._',
  '**b** _My partner\'s last line for me: "If something happens that is not in these notes, write it in the notebook in the patient\'s own words or the parent\'s, and tell the day sister at handover. Do not decide whether it matters. I am on leave from the 14th and I shall look at my telephone once in the evening." She says the limit — do not decide whether it matters — is the one that frees the person covering, and she is right._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen has written the page he would leave on the counter if he were away for a fortnight. It took two evenings and the second evening was all one line. On it: six steps for taking in a repair, the four prices he quotes without looking anything up, the two faults he always refuses, the three shops and which to ring for what, and the exceptions. The prices were the easy half — half an hour, because they are numbers and he knows them. What took the second evening was the last line, because the page cannot cover a fortnight: it covers about eighty per cent of one. Something will come in on the Tuesday of the second week that is not on the page, and if he has not said what to do then, the person at his counter has two choices — guess, or turn the customer away — and both cost him more than the fortnight. So he wrote: "If a job is not on this page: take the customer\'s name and telephone number, write what they say the fault is in their words, tell them you will telephone them tomorrow morning, and put the ticket in the left-hand drawer. Do not quote a price. Do not refuse the job. Telephone me only if the drawer has four tickets in it." Jad said he has told them not to telephone him, and Mazen said not until four, which is the only honest version — because "telephone me any time" is a lie, since he will be at his sister\'s wedding in Aleppo, and a page with a lie in it stops being used on the first day. Lubna asked about "in their words", and he said that is the line he is proudest of and it took four years at a counter to know: if somebody writes what a customer means, the fault is lost; if they write what the customer says — "it goes off when I put it in my pocket" — he can diagnose it on the telephone from Aleppo. Ms Huda said that is the test of the page and of the whole unit: a page that does not say what to do when something is not on it will be abandoned the first time something is not on it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Telephone me any time. _(if it is not true)_ → ✓ a limit: _only if…_   ✗ Use your judgement. → ✓ an action and a prohibition.   ✗ Write down what they mean. → ✓ **in their words**.   ✗ Ask me if you are not sure. _(you are away)_ → ✓ say where the answer comes from instead.   ✗ A list of numbers with no hours → ✓ _he answers before ten and after four_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Step 2 — _write what they say the fault is, in their words_ — _so that I can diagnose it on the telephone if I have to_; and step 4 — _if a corner is lifted, say so and write it on the ticket_ — _so that they do not find it on Thursday and think we did it._ The first protects the work; the second protects the shop from an accusation.'));
out.push(A('**2** So that nobody telephones it. _Mr Haddad is expecting a letter from me on 5 January and I do not want a telephone call in between_ — an entry nobody thinks of, protecting a negotiation two months in the building (19.5).'));
out.push(A('**3** The action (take the name and number, write the fault in their words, tell them we shall telephone tomorrow), the **place** (the left-hand drawer), the two prohibitions (do not quote, do not refuse), and the truth — _I am at a wedding in Aleppo from the 15th and I shall look at my telephone twice a day_, which is the part about him.'));
out.push(A('Two things worth naming. **Hours against the names**: a telephone number with no hours against it is two wasted calls and a person who stops trying. And the **purposes only where they are needed** — two out of six steps. A purpose on every step is a page nobody reads; two purposes on the two steps where a reader could do the sensible and wrong thing is a page that works.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ROOM 9 · WHAT TO DO WHILE I AM AWAY · 6–20 January** · S. Dibo',
  '**The lesson.** **1** Take the folder marked JANUARY from the second drawer. **2** Do the lessons in the order they are in the folder — _so that the Thursday test comes after the revision and not before it._ **3** Write the date and the lesson number on the board before the class comes in. **4** If the projector is needed, use the paper copies in the folder instead — _because the back arrow on that projector returns the file to the first page, and you will lose two minutes of a forty-five-minute lesson every time._',
  '**What I know without looking it up.** The two girls in the front row on the left do not read aloud. The register is taken twice on a Tuesday. The hall is available until six, whatever the notice on the door says.',
  '**What I would not do, and why.** I would not send anybody to the deputy head for talking — _because she is covering three absences this month and the child comes back worse._',
  '**Names, and when they answer.** The caretaker, for anything in the room, any time before four. Ustaz Samir in room 11 for the second-year sets, between lessons only.',
  '**The exception.** Follow the folder **unless** fewer than ten children are present, **in which case** do the revision sheet at the back of the folder and leave the new work.',
  '**IF SOMETHING IS NOT IN THE FOLDER.** Set the reading from the board and the exercise on page 44. Write what happened in the back of the folder. Do not set a test and do not give a detention. Do not telephone me — I am in Germany with my son from the 6th and I shall not see a message until the 20th. The person to ask is Ustaz Samir in room 11.',
]));
out.push(S('Stage 7 · Write freely (sample, 196 words)'));
out.push(SAMPLE([
  '**COUNTER 2 · WHAT TO DO WHILE I AM AWAY · 14–28 December** · M. Hariri',
  '**Taking a repair in.** **1** Write the customer\'s name and telephone number on the ticket. **2** Write what they say the fault is, **in their words**, not what you think it is — _so that I can diagnose it on the telephone if I have to._ **3** Look at the screen corners before you accept it. **4** If a corner is lifted, say so to the customer and write it on the ticket — _so that they do not find it on Thursday and think we did it._ **5** Give them the lower half of the ticket. **6** Put the upper half in the green box in date order.',
  '**Prices I quote without looking anything up.** Screen, the common model: 310,000. Screen, the large model: 395,000. Battery: 85,000. Charging port: 120,000. Anything else: see the last line of this page.',
  '**The two jobs I refuse, and why.** Water damage after somebody has already opened it — _because the fault is then unfindable and the customer will believe we caused it._ And anything with a crack across the board — _because it will come back twice and the second time for nothing._',
  '**Telephone numbers.** Abu Fadi, Mezzeh, for any part: he answers before ten and after four. Shaalan for glass only. The distributor\'s office for nothing at all this fortnight.',
  '**The exception on prices.** Quote the four prices above **unless** the customer has had the same repair here within six months, **in which case** write "repeat" on the ticket and quote nothing.',
  '**IF A JOB IS NOT ON THIS PAGE.** Take the name and the telephone number. Write what they say the fault is, in their words. Tell them we shall telephone tomorrow morning. Put the ticket in the **left-hand drawer**. Do not quote a price. Do not refuse the job. Telephone me **only if the left-hand drawer has four tickets in it** — I am at a wedding in Aleppo from the 15th and I shall look at my telephone twice a day.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named)'));
out.push(A('_Three sentences, each naming its criterion:_ **"On what you refuse with the reason: the two refusals are the part of the page I could not have invented, and the reason on the second one — it will come back twice and the second time for nothing — is what stops somebody accepting it to be helpful. On the exception carrying an action: _write "repeat" on the ticket and quote nothing_ is exactly right, and I would add where the ticket then goes. On the last line\'s action, limit and truth: all three are there, and the truth is the best line on the page, because _twice a day_ tells me when to expect you and _four tickets_ tells me when I am allowed to."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Read the availability lines out and let the room judge them. _Telephone me any time_ · _I shall be contactable_ · _ask me if you are not sure_ — every one is a lie told by somebody who means well. Say what happens: the reader tries once, fails, and never opens the page again, and does not mention it. The honest version is always a limit, and a limit is a permission as well as a restriction.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the page to Hisham and asked him what he would do with a job that is not on it. He read the last line and said: "Four tickets is two days. What do I do on the Tuesday if there is one ticket and the man is standing in front of me asking?" Which is the right question and I had not thought of it, because I had written the line for my own convenience and not for the Tuesday. So I have added six words: "If a customer will not leave it, telephone me at seven in the evening." Now the page has a time in it and not only a count.']));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: Who is the originating office'));
out.push(S('Stage 1 · Unit 20 quiz – corrections'));
out.push(A('**1** When the light **comes** on, reseat the module.   **2** Repeat it unless the control **is** within range.   **3** Before **loading** the roll, check the cutter.   **4** Photograph it so that **it shows** the joint _(or_ **to show** _the joint)_.   **5** **Look at** the guard. **If** it is up, **push** it down.   **6** **If the light is red, switch off.**'));
out.push(A('Items **1**, **2** and **6** are the three that must not survive into Unit 21: ⚠ _will_ after _when_, ⚠ a second negative after _unless_, and ⚠ the condition after the action.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** **Four** of the nine steps: 1 and 3 (both say "the originating office"), 4 ("make sure the form is signed by an authorised signatory"), and 8 (if any section is incomplete the form is returned — to whom, where, and what then?). The one change worth asking for is in **step 6**: move _before the 20th of the month_ into step 5, which is four words and would have saved him a month.'));
out.push(A('The three answers he found for himself are worth setting out, because each one shows a different route. **The originating office** is the ministry department whose reference is printed at the top of his own order — found in two minutes from a clerk two doors from the registry who has filled the form in eleven times, after six weeks of asking four people who never had. **The authorised signatory** is himself, under definition 6 of the conditions page he and Lubna read in 11.7 — _permission given in writing by the contractor or by a person whom the contractor names in writing_ — and he spent three weeks in the spring believing he needed somebody above him. **Step 8** has no answer available from the author at all, and belongs on his own page.'));
out.push(NOTE('The mediation discipline of the cycle is the sorting, and it is what stops the class writing a four-page complaint about a one-page document. The three kinds of fault need three different answers. A **name you do not know** → find the person who has done it before; the answer takes two minutes and is often already on your own desk. A **warning in the wrong place** → that is the one to write about, because it is four words and costs the author nothing. A **step with no action in it** → that goes on your own page, because the author cannot mend it without rewriting the document, and you will not get a rewrite. One line, one fault, one rewrite (18.7); the other three faults are yours to answer and to leave in the drawer for 2028.'));
out.push(S('Language box – reading a manual written by somebody else'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Read it **one step at a time** and ask of each: _could I do this, exactly, knowing only what I know?_ — not _do I understand it_. Four of Bassel\'s nine steps were comprehensible and undoable, which is the commonest condition of guidance notes anywhere. Then sort the faults into the three kinds, write about one, and put the rest on your own page.'));
out.push(A('The sentence to give the class for use outside the room: _three of the four are only unfollowable if you have never done it before — which is every single person reading the notes._ Guidance exists for people doing something for the first time, and is written by people who have done it so often that they can no longer see what they know (20.1). That is not a criticism of anybody; it is a property of expertise, and the only remedy is a reader who writes down what stopped them.'));
out.push(S('Stage 3 · Practise (sample – Document A, claiming travel expenses)'));
out.push(SAMPLE([
  'Seven steps. Three of them could not be followed by somebody who has never claimed.',
  '**Step 3, "enter the cost centre code":** a **name I do not know**. Nobody has ever told me what my cost centre is and it is not on my payslip. Somebody in this building has entered it a hundred times.',
  '**Step 4, "make sure the claim is authorised before submission":** _make sure_ (20.3), and _authorised_ by whom? My line manager, or the head of department? Those are different people and one of them is on leave every August.',
  '**Step 6, "claims over 30 days old are not accepted":** the **warning in the wrong place**. It is printed after step 5, which is the step about submitting, and it is the only line on the page with a deadline in it.',
  '**Our one change, in two minutes.** Step 6 into step 1: "Obtain a claim form from your line manager **within 30 days of the journey**." My partner wanted it in step 5, at submission; I wanted it in step 1, because thirty days is spent waiting for receipts and the person who reads step 5 has already lost. We did not agree and I now think she is right that it should be in both.',
  '**What belongs on my own page.** My cost centre code. The name of the person who authorises. And what happens to a claim over thirty days old, which step 6 does not say — it says they are "not accepted", not what you then do.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('On Document A it is nearly always step 6 moved into step 1 or 5; on Document B step 5 moved into step 4. In both cases it is the **warning in the wrong place**, because that is the only one of the three kinds the author can mend in four words — and the pairs arrive at it by giving up on the faults that matter more to them. Say that out loud: the fault that annoys you most and the fault worth writing about are almost never the same fault.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own manual or guidance notes. The three questions are the assessment: _who has done this before?_, _where is the warning?_ and _which step has no action in it?_ Expect at least one student to find that the answer to their nine-month question is already on their own desk, and expect that to be the moment the unit lands.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['The guidance notes came with Bassel\'s March order and he has had them nine months. Nine steps; four of them he could not do at all, and he did not know that four was the number until he read them one at a time. One and three both say "the originating office" and he did not know what that is. Four says "make sure the form is signed by an authorised signatory" and he did not know whether he is one. Eight says that if any section is incomplete the form is returned, and does not say to whom, or where, or what he then does. Nour asked what he did about the originating office, and he asked four people over about six weeks and then found out in two minutes, because there is a clerk two doors from the registry who has filled in that form eleven times for other people: the originating office is the ministry department whose reference is printed at the top of his own order, which has been on his desk since March. And step four — he went back to the conditions page he and Lubna read in June, and definition six says authorisation means permission given in writing by the contractor or by a person whom the contractor names in writing, so he is the authorised signatory, and he spent three weeks in the spring believing he needed somebody above him. Step six is the one that cost a month and it is the 20.2 fault exactly: it is a warning printed after step five, which is the step it concerns. He submitted on the twenty-third of November; if the words had been inside step five he would have submitted on the nineteenth and would be registered now instead of in February. So what he writes is one line, one fault, one rewrite, and it is four words. He is not going to tell them that four of their nine steps are unfollowable, because nobody has ever been persuaded of anything by that sentence, and because three of the four are only unfollowable if you have never done it before — which is every single person reading the notes. And the other three faults are for his own page: what the originating office is, that he is the signatory, and what to do if the form comes back, in the drawer with the order, for whoever has to do this in 2028.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 2'));
out.push(A('**1** A   **2** D   **3** F   **4** B   **5** G.   Not needed: **C**, **E**, **H**.'));
out.push(A('_Notes:_ **1** Hiba\'s man follows the card **exactly** and still gets it wrong, which is assumed knowledge and not numbering — **C** is the distractor and it is about how the steps are divided. **2** three exceptions that everybody knows and nothing says is **D** word for word. **4** a warning in bold at the bottom under the last step is **B**. **5** _a reference from an office he has never heard of_ is **G**; **A** is close and already used, which is how Part 2 is built — two texts fit loosely and one fits exactly, and the exact fit wins.'));
out.push(NOTE('Reading Part 2 is five people matched to eight short texts, and it is lost by matching on a **topic word** rather than on the person\'s actual problem. Two habits: underline the **problem** in each description — not the setting — before looking at the texts, because the setting is what the distractors share; and when two texts fit one person, read both descriptions again, because one of the two texts belongs to a different person and the other person\'s description will say so exactly. Tell candidates to cross out each text as it is used.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**SUPPLIER REGISTRATION NOTES · step 6** · B. Tahhan · 12 December',
  'I am writing about one step of the registration notes. The others are not the subject of this note.',
  '**The step as it stands.** "Forms submitted after the 20th of the month are processed in the following month."',
  '**Where it is, and where it belongs.** It is printed as step 6, which is one step below step 5 — the step about submitting — and is the only line on the page with a date in it.',
  '**The rewrite, which is four words moved and none added.** "**5** Submit the completed form to the registry **before the 20th of the month**."',
  '**What it cost me.** I submitted on 23 November. I shall be registered in February instead of December, and three of my fourteen people are on a ministry order with a weekly proof date.',
  '** · · · MY OWN PAGE, FOR THE DRAWER · · · **',
  '**"The originating office" means** the ministry department whose reference is printed at the top of the order itself. _(Not stated in the notes. I did not know this for nine months.)_',
  '**The authorised signatory is** the contractor — me — under definition 6 of the conditions page: _permission given in writing by the contractor or by a person whom the contractor names in writing._',
  '**If the form comes back:** step 8 does not say. Take it to the clerk in the office two doors from the registry; she has done this eleven times and she will say which section is wrong.',
  '**The person who has done this before is** that clerk. Eleven times. Nobody told me she existed and nobody will tell the next person either, which is why this page goes in the drawer with the order.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2 (sample, 161 words)'));
out.push(A('Out of 15, **140 words or more**. The **article** must answer all three parts of the notice — the step, what it assumed, and what it cost, with the rewrite — and the better scripts quote the step word for word. The **story** must begin with the given sentence exactly as printed and must be a narrative; the commonest failure is a page of reflection with nothing happening in it.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 161 words)**',
  '**The second slot**',
  'On my third day at work I followed an instruction exactly and did the most expensive thing I have ever done.',
  'The sheet said: "When the amber light comes on, reseat the module and run the test again." I did not know the word _reseat_. I worked it out from _seat_ — take it out and put it back — and that was right. Then I put it back in the second slot, because there are two slots, the sheet does not say which, and the second one is easier to reach.',
  'The unit passed its test. It came back nine days later with the original fault and a new one. The second slot takes a different module in that model.',
  'The step assumed two things: that I knew the word, and that there was one obvious slot. There is one obvious slot if you have worked on these for a fortnight. There is not, on your third day.',
  'Eleven words would have prevented it: "take the module out of the **upper** slot and put it back in the **upper** slot". That sheet has been in use for four years, and I am probably not the first. I am only the first to write it down.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 152 words)**',
  'I read the step again, and this time I read what was actually written.',
  'I had been reading it for nine months. It was the first line of the guidance notes that came with the order in March: "Obtain form S/4 from the originating office."',
  'I had asked four people over six weeks what the originating office was. Two had guessed. One had sent me to the registry, where a man told me politely that they were not the originating office and did not know who was.',
  'On the Tuesday a woman in the office two doors from the registry asked me what I was looking for. I told her. She took the order out of my hand, turned it the right way up, and put her finger on a reference printed across the top of it.',
  '"That," she said. "That is the originating office. I have filled that form in eleven times."',
  'The order had been on my desk since March. The answer had been in the room with me every day for nine months, and the words that would have told me are not anywhere in the notes.',
]));
out.push(S('Unit 20 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** a   **2** b   **3** a   **4** c   **5** c   **6** a   **7** b   **8** c'));
out.push(A('_Notes:_ **1** _when_, because the gloss says it happens every run. **2** _unless_ with no second negative; ~~unless if~~ does not exist. **4** _so that_ takes a clause; _to_ would need _to show_. **5** the imperative after _in which case_. **7** _otherwise_ introduces the consequence of **not** doing it; _unless_ and _so that_ both reverse the sense. **8** _to check_ — ⚠ ~~for check~~ and ~~so that check~~ are the two commonest errors in the item.'));
out.push(S('Unit 20 check  ·  B  Listening (Part 4, interview) – Track 20.15'));
out.push(A('**1** A   **2** C   **3** C   **4** A   **5** B   **6** B'));
out.push(A('Questions **1** and **3** are the pair to replay. In **1** the speaker answers a different question first — _five_ — before giving the number asked for, and candidates who write the first number they hear lose the mark. In **3** he rules out the registry in his first four words — _not from the registry_ — and the whole answer is in the clause after it; candidates listening for a positive statement miss the negative that carries it.'));
out.push(NOTE('Listening Part 4 is one long interview with six three-option questions in the order of the recording. Two habits: underline the **question word** in all six during the pause, because several ask _what does he say about…_ rather than _what happened_; and expect at least one answer to be carried by a **negative** — _not from the registry_, _I am not telling them_ — which is the commonest way an interviewee gives information and the commonest way a candidate loses a mark.'));
out.push(S('Unit 20 check  ·  C  Writing (sample, 181 words)'));
out.push(SAMPLE([
  '**STORES COUNTER · WHAT TO DO WHILE I AM AWAY · 2–16 January** · F. Kayyali',
  '**Issuing a part.** **1** Write the machine number and the part number on the pad. **2** Look at the shelf label before you take anything down — _so that a part from the 2019 batch is not issued against a 2024 machine number._ **3** If the shelf label and the box disagree, issue nothing and write both numbers on the pad. **4** Give the lower half of the pad slip to whoever collects it.',
  '**What I know without looking it up.** The three parts that are always on the second shelf and never in the system. The two machine numbers that share a part. The fact that the 2019 batch boxes are green and the 2024 are grey.',
  '**What I refuse, and why.** Anything for machine 4 without a written line from the foreman — _because machine 4 is on the ministry order and a wrong part there stops three men for a day._',
  '**Names, and when they answer.** Abu Samir, any time before three. Majid on Fridays only. The supplier\'s office: not at all this fortnight.',
  '**The exception.** Issue against the pad **unless** the part is for machine 4, **in which case** telephone the foreman and write the time of the call on the pad.',
  '**IF SOMETHING IS NOT ON THIS PAGE.** Write the machine number, the part wanted and who is asking, on the pad. Say that an answer will come tomorrow. Do not open a new box. Do not refuse anybody. Telephone me **only if three people are waiting** — I am at my brother\'s in Homs and I shall look at my telephone in the evenings.',
]));
out.push(S('I can… (Unit 20)'));
out.push(A('Self-assessment; no answers. The four that matter are the first, the fourth, the fifth and the seventh: naming what a step assumed, the four rules of a numbered step, the six words of purpose, and the one-page how-to written last line first. A class that ticks _when_ and _if_ and not those four has learnt a tense and will still write unfollowable instructions.'));
out.push(box('Looking ahead to Unit 21', [
  'Unit 19 asked for things; Unit 20 wrote them down. **Unit 21** is what happens when the other side wants something too: _unless · provided that · as long as · in that case · I would be prepared to…_ — the language of an offer with a condition attached.',
  '**21.3 is the cycle to prepare for**: saying what you would be prepared to give up, **and in exchange for what**, in one sentence with both halves in it. Students find the first half easy and the second almost impossible, and a concession with no exchange named is not a negotiation — it is a retreat, and it is remembered as a precedent.',
  '**21.6 writes the two-column page**: what each side needs, what each side can give, and the one row where the two lists touch. **21.7** mediates between two people who both believe they have already compromised.',
  '**Ask the class now for 21.1:** one thing each that they want from somebody who also wants something from them — at work, at home, from a supplier, from a committee — **and what they think the other side wants, written in the other side\'s words and not their own.** 21.1 begins with that second column, and a class that arrives with only the first column spends the cycle discovering it cannot do the task.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 20 · Answer Key');
