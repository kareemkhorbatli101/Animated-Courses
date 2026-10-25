// Proactive Business English A1 · Syria Edition · Book 2 · Unit 12 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 12  The Note You Leave'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the last unit of the course and it is the smallest thing in the book:** **four lines, about thirty words.** **To · what I did · what I did not do and why · what you must do.** **And a name and a time at the bottom.**',
  '⚠ **Say the thing that makes the whole twelve units cohere, and say it on the first morning of this unit:** **the shape the EXAMINATION wants and the shape a HANDOVER needs are the same shape.** **Four sentences, about thirty words.** **That is not a coincidence and it is why every Lesson B in this course has ended the same way.**',
  '⚠ **12.4 is the hardest line in the book and the fourth time the course has asked for it** — **5.6 (what you did not check), 7.4 (I have not opened it), 9.4 (I did not count it, no light), and now in a note somebody acts on.** **The _because_ is not an excuse: it is the next thing the other man needs to know.**',
  '⚠ **And 12.7 is the ONLY review cycle in twelve units where something goes RIGHT.** **Eleven have shown a thing going wrong with nobody at fault.** **This one works, unexpectedly, for a man who cannot read English.** **End the course on it and let the class notice the difference.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words** — **and in this unit that task IS the unit.**',
], C.grey, C.navy));

// ===================== 12.1 =====================
out.push(h2('12.1  Four lines'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect _nobody_ from most of the room**, **and that is the honest state of most shift changes** — **the information moves by meeting somebody, or it does not move.**'));
out.push(p('**b**  Open. ⚠ **One sentence, and take it from everybody.** **The thing a learner wanted to tell the next person and did not is the first line of their own note**, **and they will use it at stage 4.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — four.   **b**  **1** Who it is for, what you did, what you did not do and why, what he must do.  **2** Because it is written instead of said, and paper needs a name on the top.'));
out.push(p('⚠ **The link back to 9.6 is explicit and the class should be shown it:** _Unit nine said three sentences at a shift change and you remembered all three. — So why four now? — Because now you are writing it instead of saying it._ ⚠ **Three things plus the reader.** **Nothing new is being learned here** — **it is 9.6 with an envelope on it.**'));
out.push(p('⚠ **And the last exchange is the whole unit:** _The last line is the point. The other three tell him what happened. The last one tells him what to do._ **A note with no fourth line is a story.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'From Sunday you are on the early shift. You leave a note. Four lines.'],
  ['B', 'Four?'],
  ['A', 'Who it is for. What you did. What you did not do, and why. What he must do.'],
  ['B', 'And that is enough?'],
  ['A', 'That is enough.'],
  ['B', 'And the last line?'],
]));
out.push(note("The third line is four items said as one list and that is the drill — the shape has to be sayable before it can be written. Make them recite the four without the book, and do not accept three. The one that drops is always the fourth, which is the one the unit exists for."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Four headings, in order.** ⚠ **In order.** **A listener who writes them as a set has the content; a listener who writes them in order has the note** — **and the order is the only thing that puts the ask at the end where it gets acted on.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — my last shift in four lines', [
  '**To:** _Samih_   **Words:** 2',
  '**I did:** _the morning bake, eighty loaves_   **Words:** 6',
  '**I did not:** _wash the trays, because the water went off at 05.30_   **Words:** 11',
  '**Please:** _wash them before you start and put the eighty out at seven_   **Words:** 13',
]));
out.push(note("Thirty-two words, and the longest line is the last one. That is the right shape: the ask carries the most words because it is the only line that has to be unambiguous. A learner whose first line is the longest has written a letter."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _To Samih. I did the morning bake, eighty loaves. I did not wash the trays because the water went off at half past five. Please wash them before you start and put the eighty out at seven. Thirty-two words._'));
out.push(p('⚠ **Ask which line was longest.** **It should be the fourth and it usually is not** — **learners spend their words on what they DID, because that is the part they are proud of.** **The reader does not need it most.**'));
out.push(p('**Board clinic:** a note with three lines. ⚠ **The class says which is missing** — **and it is always the fourth.** **Ask what the reader would do with the three-line version.** **Nothing, which is 12.5.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Rows one to three and the Aleppo cartons.  **2** The ladder was in the yard.  **3** _It is the packets_ — four words that save the next man opening a carton to find out what he is looking for.'));
out.push(p('⚠ **Question 3 is the extra fact and it is worth marking.** **The four lines are a minimum, not a maximum** — **one short extra fact on line four, where the reader is already looking, is free.** ⚠ **And the TIME on the signature:** _Sunday, 16.00_ **tells Samih the note is six hours old when he reads it at ten.** **12.6 is about that.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**To: Samih**',
  '**I did** the morning bake — eighty loaves, on the racks.',
  '**I did not** wash the trays, because the water went off at 05.30.',
  '**Please** wash them before you start, and put the eighty out at seven. The brown ones are on the bottom rack.',
  '**H. Mourad, Friday, 09.15**',
]));
out.push(p('**What to credit.** **A name at the top.** ⚠ **A _because_ on line three.** ⚠ **A _Please_ on line four.** **And a day AND A TIME at the bottom.** ⚠ **Credit the extra fact on line four too** — _the brown ones are on the bottom rack_ — **because it is the cheapest useful thing on the page.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the top. **(reading)** "NOTE". ⚠ **Who is it for? Two words.**',
  '**(pointing)** at line three. **(reading)** "I did not wash the trays". ⚠ **Because? Without it I come in and find out myself.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their note and the class answers one question: what would the next person do FIRST?** **One action.** **If the class cannot name it, line four is missing or has three things in it.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**Nobody leaves notes at our shop. The morning man tells the evening man if they happen to overlap, and on Fridays they do not overlap at all, so Friday evening finds out everything the hard way.**',
]));
out.push(p('⚠ **_Friday evening finds out everything the hard way_ is the state of most workplaces and it is what the unit is for.** ⚠ **And the 7P question is the sharp one: does anybody ever ANSWER a note?** **Almost never** — **which means nobody who leaves one knows whether it was read.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Does anybody ever answer a note?_ — **_No. You find out because the thing got done._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many does anybody ever write back?** **Near zero.** ⚠ **Then say the small true thing: _you find out because the thing got done_ IS an answer**, **and it is the only one a four-line note needs.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(p('⚠ **This homework leaves a real note for a real person.** **Ask next lesson what they did, not what they said.**'));
out.push(sample('Sample answer (28 words)', [
  '**To: Samih. I did the morning bake, eighty loaves. I did not wash the trays because the water was off. Please wash them before you start. H. Mourad, Friday, 09.15.**',
]));

out.push(pb());
// ===================== 12.2 =====================
out.push(h2('12.2  To: Samih'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **A name, and if they do not know it, they must say so.** **In a shift system with four people on rotation most learners genuinely do not know who follows them on a given day** — **which is a real finding and the answer is in the Language box.**'));
out.push(p('**b**  ***To: Samih.*** ⚠ **Ask what happens to a note headed NOTE.** **Somebody will say _I would read it_** — **and the dialogue says four men did read it and all four thought it was for somebody else.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — nobody read it for two days.   **b**  **1** On the bench.  **2** _Write "To: Samih" and Samih picks it up in four seconds._'));
out.push(p('⚠ **Nour\'s diagnosis names the connection and the class should be shown it:** _A note for everybody is a note for nobody. Unit seven._ ⚠ **It is exactly 7.7** — **four men saw the crushed cartons and each assumed another had written it down; four men read a note headed NOTE and each assumed it was for another.** **Same arithmetic, different object.**'));
out.push(p('⚠ **And the last line is the one that solves the shift-rotation problem:** _if you do not know who, write "To: whoever opens the back store first". That is still a name._ **Because exactly one person will do it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'There was a note on the bench for two days. Nobody picked it up.'],
  ['B', 'I wrote that. On Tuesday.'],
  ['A', 'It says NOTE at the top. Just NOTE.'],
  ['B', 'Everybody who comes in the morning reads the bench.'],
  ['A', 'Everybody looked at it and thought it was for somebody else.'],
  ['B', 'All four of them.'],
]));
out.push(note("The last line is the learner's own admission and it is the drill: all four of them. Make them say the number. A note that four people looked at and nobody picked up is a much sharper fact than a note nobody read, and it is the fact that makes two words at the top worth writing."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How many looked at it, and what would have fixed it?** ⚠ **Two answers, and the second is two words.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four top lines', [
  '**About:** the trays not washed   **To:** _Samih_   **How I know:** he is on the late shift Monday to Thursday',
  '**About:** the water going off at 05.30   **To:** _Nour_   **How I know:** she rings the landlord',
  '**About:** the broken step   **To:** _whoever carries the trays down first_   **How I know:** ⚠ **exactly one person does it, and it changes every week**',
  '**About:** the price list on the wall   **To:** _Hala_   **How I know:** she opens the shop',
]));
out.push(note("Row three is the one the cycle exists for and it is the right answer to a rotating shift: whoever carries the trays down first. Not a shift, not a job title — a description of an action that exactly one person will perform. Learners find this hard to believe is allowed. It is, and it works."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My note is about the broken step. It says: to whoever carries the trays down first. I know it is them because exactly one person does that, and it changes every week._'));
out.push(p('⚠ **Two counts: how many top lines named a PERSON, and how many named a shift or nobody.** ⚠ **Then read out the best _whoever_ line in the room.** **It is usually better than the book\'s and it settles the question of whether the form is allowed.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** _To: Samih_ — four seconds.  **2** Because there are three people on the late shift and each thought it was for another.  **3** The more people a note is addressed to, the longer it waits.'));
out.push(p('⚠ **Question 3 is the pattern and it is only visible because the third column holds TIMES rather than ticks.** **A name: four seconds. A job: one minute. A shift: one day. Nothing: two days.** ⚠ **That is 7.7 measured in hours, and it is the clearest piece of arithmetic in Unit 12.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (27 words)', [
  '**NOTES ON THIS COUNTER — WHO READS WHAT**',
  table(['Top line', 'Who picked it up', 'How long'], [
    ['**To: Hala**', 'Hala', '⚠ **ten seconds**'],
    ['**To: whoever opens up**', 'Hala', 'two minutes'],
    ['**To: the evening**', '⚠ **nobody — there are two of them**', 'one day'],
    ['**IMPORTANT**', '⚠ **nobody**', '⚠ **three days**'],
  ], [2.4, 2.2, 1.6]),
  '⚠ **A name: ten seconds. A job: two minutes. A shift: a day. IMPORTANT: three days. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **TIMES in the third column, not ticks** — **the pattern is only visible as times.** **One line addressed to a person and one to nobody.** ⚠ **And credit a learner who uses a word like IMPORTANT or URGENT as the nobody line**, **because that is the real-world version and it is worse than NOTE: it looks addressed and is not.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the third column. **(reading)** "✓ ✓ ✗ ✗". ⚠ **How LONG? Four of these are different.**',
  '**(scanning)** four named lines. ⚠ **Where is the one nobody picked up? Everybody has one.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their table and the class says which top line they would use TOMORROW.** **Not which is best** — **which they will actually write.** **It is usually the _whoever_ one, because most of the room does not know who follows them.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**I wrote IMPORTANT on a note about the gas bottle and left it on the counter. It was there for three days. Everybody read it and everybody thought somebody more senior was dealing with it.**',
]));
out.push(p('⚠ **_Everybody thought somebody more senior was dealing with it_ is the sharpest version of 7.7 in the whole course**, **and a learner produced it about their own note.** **IMPORTANT looks addressed and is not** — **and the more urgent it looks, the more likely everybody is to assume it belongs to somebody above them.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who did you think would read it?_ — **_The manager. She never comes to the counter._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many unread notes were addressed to nobody in particular?** **Nearly all of them.** ⚠ **And then the question that closes the cycle: how many were about something that mattered?** **Also nearly all.** **Important notes are the ones most likely to be headed IMPORTANT and least likely to be picked up.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**After me: Samih (late Mon–Thu), Hani (late Fri), Nour (office, mornings), whoever opens Saturday. Samih needs the trays. Hani needs the step. Nour needs the landlord. Saturday needs the key.**',
]));

out.push(pb());
// ===================== 12.3 =====================
out.push(h2('12.3  I did rows one to three'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Past verbs from Unit 9, and the seven irregulars should appear.** **Three units later and they are being used rather than practised, which is what they were learned for.**'));
out.push(p('**b**  ***I did rows one to three.*** ⚠ **Ask WHY the second is believed.** **Because it could be checked.** **_I did the shelves_ cannot be checked, so it has to be checked** — **which is the whole cycle in one sentence.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — _the shelves_ could mean anything.   **b**  **1** Sixteen — four rows of four.  **2** Check all sixteen. Twenty minutes.'));
out.push(p('⚠ **The arithmetic is the content:** _Twenty minutes. Which is longer than it took you to write the note._ ⚠ **Six words against twenty minutes.** **Do the comparison on the board.**'));
out.push(p('⚠ **And the last exchange is the one to read twice:** _And if I had written nothing at all? — Then I check sixteen and I do not know whether you came in._ **A vague note is worse than none in one way only** — **it costs the same checking AND it implies the work was done.** **Say that; it is not obvious.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Your note says I did the shelves.'],
  ['B', 'I did the shelves.'],
  ['A', 'There are four rows and four shelves in each. Sixteen.'],
  ['B', 'I did rows one to three. Twelve of the sixteen.'],
  ['A', 'Then write that. I did the shelves means I have to check all sixteen.'],
  ['B', 'How long does that take?'],
]));
out.push(note("The fourth line is the model and it has two forms of the same fact in it — rows one to three, and twelve of the sixteen. Either would do; both together is better, because one is a location and one is a proportion. Learners pick one. Push for both and the next man can start AND knows how much is left."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How much did the vague note cost in MINUTES?** ⚠ **A number.** **Twenty, in card 1.** **The number is what makes six extra words obviously worth writing.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — vague against exact', [
  '**Vague:** _I did the bake._   **Exact:** _I did the eighty white and the forty brown. Not the cakes._   **Extra words:** 9',
  '**Vague:** _I counted the till._   **Exact:** _I counted the notes. Not the coins._   **Extra words:** 4',
  '**Vague:** _I washed up._   **Exact:** _I washed the trays and the big bowls. Not the racks._   **Extra words:** 8',
  '**Vague:** _I did most of the shelves._   **Exact:** _I did rows one to three of four._   **Extra words:** 3',
]));
out.push(note("Every exact version in that sample names what is NOT done — not the cakes, not the coins, not the racks — and that half is doing most of the work. Four to nine extra words. A learner whose exact versions only add detail about the finished part has done half the cycle."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Vague: I counted the till. Exact: I counted the notes, not the coins. The exact one is four words longer and it saves ten minutes._'));
out.push(p('⚠ **Add up the extra words and the saved minutes for the whole class and put BOTH totals on the board.** **A class of sixteen usually produces about a hundred extra words against four or five hours.** ⚠ **Say both numbers in the same sentence.** **That ratio is the argument.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Eleven words longer.  **2** Twenty-five minutes.  **3** Four.'));
out.push(p('⚠ **Question 3 is the small one that proves the point:** **the learner can only answer _four from Homs_ because version B said so.** **Version A does not contain that fact anywhere** — **and the reader of version A would have opened all twelve cartons to find out.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (36 words)', [
  '**A** _I did the bake and some of the washing up._',
  '**What the next person has to do:** check all the racks and all the trays, and count the loaves. **Twenty minutes.**',
  '**B** _I did eighty white and forty brown, not the cakes. I washed the trays, not the racks._',
  '**What the next person has to do:** bake the cakes and wash the racks. **Nothing to check.**',
  '⚠ **A is ten words. B is twenty-two. The twelve extra words saved twenty minutes. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **B names what is finished AND what is not, in the same breath.** **Numbers, not _some_ or _most_.** ⚠ **The minutes saved, as a number.** **And the word counts for both** — **because the comparison is the point, and without the counts it is just an assertion that being specific is better.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at B. **(reading)** "I did most of it". ⚠ **Most is version A. How much?**',
  '**(pointing)** at the bottom. ⚠ **How many words each? Count them.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read version A and then version B, and the class says how many minutes B saved.** **The class is good at this** — **it can see the checking work disappear as the sentence gets longer.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The evening man wrote "all done" on Thursday. I checked eighty loaves, four racks and the till before I believed it. It took half an hour and all of it was actually done.**',
]));
out.push(p('⚠ **_All of it was actually done_ is the sting and most papers have some version of it.** **The man had done the work and still cost the next shift half an hour**, **because _all done_ cannot be checked without checking.** ⚠ **That is the cycle\'s real point: being exact is not about being honest. It is about being verifiable.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Had they actually done it?_ — **_Yes. All of it. I still had to look._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then ADD UP the minutes this class has spent checking work that was already done.** **Put the total on the board in hours.** ⚠ **A class of sixteen usually produces a working day or more** — **all of it spent confirming work that had been done properly and described vaguely.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (29 words)', [
  '**I baked eighty white, not the brown. I washed the trays, not the racks. I counted the notes, not the coins. I did rows one to three, not row four.**',
]));

out.push(pb());
// ===================== 12.4 =====================
out.push(h2('12.4  I did not, because'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **BOTH halves from everybody, and do not let the because be left off.** **A learner who gives only the first half has produced the line this cycle exists to improve.**'));
out.push(p('**b**  **The second helps.** ⚠ **Ask HOW.** **Because the next man brings the ladder in before he starts.** **One concrete action** — **and that is what a _because_ buys.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — starts there.   **b**  **1** The ladder was in the yard.  **2** _The because is not for you. It is for me._'));
out.push(p('⚠ **That line is the whole cycle and it should be on the board before anything else:** _The "because" is not for you. It is for me._ ⚠ **Learners write a _because_ and feel they are making an excuse.** **Samih says what it actually is: the next thing he needs to know.**'));
out.push(p('⚠ **And the arithmetic again:** _Two walks and four minutes, because you did not write eight words._ **Eight words.** ⚠ **Then the last exchange, which refuses the word _excuse_ outright:** _So the excuse is the useful part. — It is not an excuse. It is the next thing I need to know._ **Read it twice.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Row four. You did not do it.'],
  ['B', 'I did not do row four because the ladder was in the yard.'],
  ['A', 'Good. So I bring the ladder in first, before I start.'],
  ['B', 'I thought you would be annoyed.'],
  ['A', 'Why? You told me where to start and what I need.'],
  ['B', 'The because felt like an excuse when I wrote it.'],
]));
out.push(note("The B part is the harder role and it is the learner's own voice: I thought you would be annoyed, and the because felt like an excuse. Make every learner say both of those lines, because both are what they are actually thinking when they decide to leave the because off. Hearing somebody answer why? is what changes it."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **What will the next man do FIRST because of the because?** ⚠ **One concrete action.** **Bring the ladder in. Get the key. Ring the office.** **If the listeners cannot name one, the _because_ was not useful and should be rewritten.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four I-did-nots', [
  '**I did not:** wash the trays   **because:** the water went off at 05.30   **So the next person:** ⚠ **fills two buckets the night before**',
  '**I did not:** put the cakes out   **because:** the cake tray is in the cold room and the key is with Hala   **So the next person:** ⚠ **gets the key from Hala first**',
  '**I did not:** count the coins   **because:** there were four customers waiting   **So the next person:** counts them before opening',
  '**I did not:** ring the landlord   **because:** he does not answer before eight   **So the next person:** ⚠ **rings at eight, not at six**',
]));
out.push(note("Every third column is a different first action, and that is the test: a because that does not change what somebody does first is not pulling its weight. Row four is the subtlest — he does not answer before eight — and it stops the next person wasting a call at six and concluding the landlord is ignoring them."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I did not put the cakes out because the cake tray is in the cold room and the key is with Hala. So the next person gets the key from Hala first._'));
out.push(p('⚠ **Count the reports where the _because_ CHANGED what the next person does.** **It should be all of them.** ⚠ **Where it did not, the _because_ is about the writer rather than the work** — **_because I ran out of time_ changes nothing** — **and that is the one to rewrite.**'));
out.push(p('**Board clinic:** four half-lines with no _because_. ⚠ **Add one to each AND say what it saves.** **The second half of that instruction is the clinic.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Brought the ladder in first, and saved two walks.  **2** Two short.  **3** They are the same job on the same morning, and the only difference is eight words.'));
out.push(p('⚠ **Question 2 is worth a minute: _counted it at seven in daylight. Found two short._** **The _because_ did not just save time** — **it got the count done properly, in daylight, and found a real shortage that would otherwise have been signed for.** ⚠ **That is 5.4 and 9.4 paying off in a note.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (34 words)', [
  '**THE BECAUSE LINES — AND WHAT THE NEXT PERSON DID**',
  table(['The line', 'What the next person did'], [
    ['_I did not wash the trays because the water went off at 05.30._', '⚠ **filled two buckets the night before. No lost bake.**'],
    ['_I did not put the cakes out because the key is with Hala._', '**got the key at six. Cakes out by half past.**'],
    ['_I did not ring the landlord because he does not answer before eight._', '⚠ **rang at eight and got him first time.**'],
    ['_I did not wash the trays._', '⚠ **came in, found no water, waited until eight. Lost the bake.**'],
  ], [3.2, 2.8]),
  '⚠ **Three lines with a because. One without. The one without lost a bake. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **A _because_ on at least three lines, and ONE line without.** ⚠ **The second column must say what somebody DID** — **not what they thought.** **And a cost at the bottom.** ⚠ **Credit especially a page where the last row is the SAME JOB as one of the first three**, **because that is the only way the comparison is honest.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "because I was busy". ⚠ **What does that tell me to do? Nothing.**',
  '**(pointing)** at the second column. **(reading)** "he understood". ⚠ **What did he DO?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their line with NO _because_ and the class says what it cost.** **A bake, two walks, four minutes, a wasted telephone call.** **The class names the cost and nobody has to be told that eight words were worth it.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**I wrote that I had not washed the trays because the water was off. Samih filled two buckets the night before and the bake went out on time. Nobody said anything about it.**',
]));
out.push(p('⚠ **_Nobody said anything about it_ is the quiet ending and it is the right one.** **A _because_ that works produces no conversation at all** — **the problem simply does not happen.** ⚠ **Which is why the 7R count matters: ask how many people were ANNOYED about an _I did not_ with a reason on it.** **It is always none, and the class has usually spent years expecting otherwise.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Was anybody annoyed?_ — **_No. He said thank you for the note._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was anybody annoyed about an _I did not_ WITH a reason?** ⚠ **It is usually none, and the number should be said slowly.** **Twelve units have been building to this: the line learners are most afraid to write is the one nobody has ever been angry about.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**I did not wash the trays because the water was off — saves a lost bake. I did not ring the landlord because he answers after eight — saves a wasted call.**',
]));

out.push(pb());
// ===================== 12.5 =====================
out.push(h2('12.5  Please do row four'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Four words, and one thing.** **A learner who gives three asks has produced the fault the Language box warns about** — **the next man picks the easiest.**'));
out.push(p('**b**  ⚠ **All three are grammatical and the class should be asked which they would WRITE, not which is correct.** **_Do row four_ reads as an order from an equal, which is the one that causes trouble.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — _please_.   **b**  **1** When somebody will get hurt.  **2** _He reads it, he knows, and he does nothing._'));
out.push(p('⚠ **The division is clean and it belongs on the board:** **_please_ for work, _must_ for safety.** **And _must_ points straight back to 10.2** — **three rules, not nine** — **which is why a note full of _musts_ is a note from somebody who has not read Unit 10.**'));
out.push(p('⚠ **And the third option is the one the cycle is really about:** _And nothing at all is the worst of the three._ **A note that says what happened and not what to do gets read, understood, and ignored.** ⚠ **_Because nobody asked him. And then on Tuesday you ask him why row four is not done._** **Nobody is at fault for that, and the class should hear it said.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Line four. Do I write please do row four or you must do row four?'],
  ['B', 'Please. He is a man you work with.'],
  ['A', 'And when is it must?'],
  ['B', 'When somebody will get hurt.'],
  ['A', 'So please for work and must for safety.'],
  ['B', 'And nothing at all is the worst of the three.'],
]));
out.push(note("The fifth line is the one to make them say — please for work and must for safety — because it is a rule they can carry out of the room in six words. And the sixth has to be said by the learner rather than the teacher, which is why it is in the card: nothing at all is the worst of the three is a counter-intuitive claim and it lands better from a peer."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **When is it _must_, and what is the worst of the three?** ⚠ **Two answers, and the second is _nothing_.** **A listener who says _must is the worst_ has not heard it.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four line-fours', [
  '**Line four:** _Please wash the trays before you start._   **Please or must:** please   **Why:** work   **A time:** before you start',
  '**Line four:** _Please ring the landlord at eight about the pump._   **Please or must:** please   **Why:** work   **A time:** ⚠ **at eight**',
  '**Line four:** _You must not carry two trays down the back step._   **Please or must:** ⚠ **must**   **Why:** ⚠ **Hala fell there**   **A time:** —',
  '**Line four:** _Please put the eighty loaves out at seven._   **Please or must:** please   **Why:** work   **A time:** at seven',
]));
out.push(note("One must in four is about right and the reason column has to name a real event — Hala fell there. If a learner's four line-fours contain three musts, go back to 10.2 with them: nine rules nobody enforces are weaker than three nobody may break, and the same arithmetic applies to one note."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My line four is: please ring the landlord at eight about the pump. It is please because it is work, and the time is in it because he does not answer before eight._'));
out.push(p('⚠ **Count how many were _must_.** ⚠ **If more than one or two in four, ask the question the key asks: would somebody really get hurt?** **Usually not** — **and a _must_ used for work makes the _must_ for safety weaker, which is exactly 10.2.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** The Beirut one — rung at 9.20, credit agreed.  **2** The paint store one, because somebody would get hurt.  **3** Nobody.'));
out.push(p('⚠ **Question 3 is the hard answer and it must not be softened.** **The man read the note, knew everything in it, and did nothing, because he was not asked.** ⚠ **That is not a failure of his** — **it is a missing line four.** **Twelve units of mediations have been teaching the class to look for the gap instead of the person, and this is the last one.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words)', [
  '**FOUR NOTES, ONE WEEK — AND WHAT HAPPENED**',
  table(['Line four', 'What happened'], [
    ['_Please wash the trays before you start._', '✓ **done by six**'],
    ['_Please ring the landlord at eight about the pump._', '✓ **rung at 8.05, man came Thursday**'],
    ['_You must not carry two trays down the back step._', '✓ **he handed them down to me**'],
    ['_(no line four)_', '⚠ **✗ nothing. He read it, he knew, he did nothing.**'],
  ], [3.4, 2.6]),
  '⚠ **Three asked and got it. One did not ask. Nobody is at fault for the fourth. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **ONE _must_, and it is about safety.** **One row with no line four, and what happened.** **A time on at least one ask.** ⚠ **And the line at the bottom about fault** — **which is the hardest sentence to write and the whole point of the row.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at three musts. ⚠ **Would somebody get hurt by all three? Make two of them please.**',
  '**(pointing)** at the no-line-four row. **(reading)** "he should have known". ⚠ **Nobody asked him. Write that.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their no-line-four row and the class says whose fault it was.** ⚠ **_Nobody\'s._** **Expect resistance** — **somebody will say the man should have used his head.** **Then ask what a note is for.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**I knew the cold room door was not shutting for about a month. Everybody knew. Nobody asked me to do anything about it and I never asked anybody either, so it is still not shutting.**',
]));
out.push(p('⚠ **_I never asked anybody either_ is the honest half and it is the one that makes the cycle land.** **The learner is both the man who was not asked and the man who did not ask** — **which is the real shape of the problem, and it is not a story about somebody else\'s failure.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Would you have done it if they had asked?_ — **_Yes. In five minutes._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many would the person have done it if asked?** ⚠ **Nearly all.** **Say that number and then say the sentence it implies:** **almost everything that does not get done is something somebody would have done if a line four had existed.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (25 words)', [
  '**Please wash the trays before you start. Please ring the landlord at eight. Please put the eighty out at seven. You must not carry two trays down the step.**',
]));

out.push(pb());
// ===================== 12.6 =====================
out.push(h2('12.6  A. Zreik, Sunday, 16.00'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Written, and then held up.** **Ask the room to read somebody else\'s initials.** **Most can; the new man cannot, and that is the finding the Language box uses.**'));
out.push(p('**b**  **The second.** ⚠ **Ask what the first one leaves out.** **When.** **And then ask whether that matters** — **the dialogue answers it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — no time.   **b**  **1** Because it tells the reader how much to believe the note.  **2** Six hours.'));
out.push(p('⚠ **The reasoning is the best thing in this cycle and it is entirely practical:** _The note says the ladder is in the yard. If you wrote it at eight this morning, it is still there. If you wrote it at four, Hani has brought it in._ ⚠ **The same note is true or false depending on a number that takes two seconds to write.**'));
out.push(p('⚠ **And the distinction to keep:** _A note six hours old is news. A note two days old is history._ ⚠ **Then the last line, which is better than the rule:** _And now I know to check the yard before I believe you._ **The time does not make the note true — it tells the reader how much checking to do.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Your note says A.Z. and nothing else.'],
  ['B', 'You know it is me.'],
  ['A', 'I know it is you. I do not know when you wrote it.'],
  ['B', 'Does it matter?'],
  ['A', 'The note says the ladder is in the yard. If you wrote it at eight, it is still there. If you wrote it at four, Hani has brought it in.'],
  ['B', 'So the time tells you how much to believe it.'],
]));
out.push(note("The fifth line is long and it should not be shortened: it is the only place in the unit where the consequence of a missing time is spelled out as two different states of the world. A pair who cut it to does it matter? yes have performed the question without the answer."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How old was the note, and was it still true?** ⚠ **Two answers, and in card 1 the answer to the second is NO** — **the ladder came in at half past four and the note was written at four.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four bottom lines', [
  '**The note says:** the water is off   **Bottom line:** _H. Mourad, Friday, 06.00_   **Stays true for:** ⚠ **about two hours — it came back at eight**',
  '**The note says:** the trays are not washed   **Bottom line:** _H. Mourad, Friday, 09.15_   **Stays true for:** until somebody washes them',
  '**The note says:** the step is broken   **Bottom line:** _H. Mourad, 14 January_   **Stays true for:** ⚠ **four months and counting**',
  '**The note says:** eighty loaves are on the racks   **Bottom line:** _H. Mourad, Friday, 09.15_   **Stays true for:** ⚠ **an hour — they go out at ten**',
]));
out.push(note("The third column is the invention of this stage and it is not in the book's own table: how long the note stays true. Two hours, four months, an hour. A note that stays true for an hour needs a time on it or it is useless; a note that has been true for four months barely needs a date. The variation is the point."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _My note says the water is off. I signed it H. Mourad, Friday, 06.00. It stays true for about two hours._'));
out.push(p('⚠ **Ask which note goes out of date FASTEST and how long.** **An hour or two, usually** — **and those are exactly the notes that most need a time.** ⚠ **Say the rule the class has just discovered: the shorter a note stays true, the more it needs a time on it.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** _A. Zreik, Sunday, 16.00_.  **2** Whether the ladder had come back.  **3** Four seconds.'));
out.push(p('⚠ **Question 2 is the test the Writer\'s box describes: a signature is judged by what it leaves the reader UNABLE to work out.** **_A. Zreik, Sunday_ looks complete and is not.** ⚠ **And question 3 is the whole page.** **Four seconds** — **and the book has now said this four times: the pen by the telephone, _each_ by hand, the read-back, the time on a signature.** **Say that it is the fourth.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (30 words)', [
  '**FOUR NOTES, FOUR BOTTOMS**',
  table(['The bottom line', 'What the reader knew'], [
    ['_H. Mourad, Friday, 06.00_', '⚠ **who, when, and that the water news is six hours old. Everything.**'],
    ['_H. Mourad, Friday_', 'who and which day. **Not whether the water had come back.**'],
    ['_H.M._', 'who, if you know her. ⚠ **Nothing about when.**'],
    ['_(nothing)_', '⚠ **nothing at all — and nobody to ask.**'],
  ], [2.6, 3.2]),
  '⚠ **Four notes. The first took four seconds longer to sign than the last. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **The second column must say what the reader COULD NOT WORK OUT**, **not what the writer wrote.** **One bottom with all three parts and one with no time.** **And the seconds at the bottom.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at row two. **(reading)** "who and which day". ⚠ **And what could he NOT work out? Write that.**',
  '**(pointing)** at the bottom. ⚠ **How many seconds? Put the number.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their best bottom line and the class says what a NEW man would know from it.** **A new man, not a colleague.** **_H.M._ passes with a colleague and fails with a new man** — **which is why the Language box prefers the full surname.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**There is a note on the cold room door about the temperature, in pencil, with no name and no date. Nobody knows who wrote it or whether the number on it is still right.**',
]));
out.push(p('⚠ **That sample is the end state of every missing signature:** **a note that is still on a door, possibly correct, and unusable because nobody can ask.** ⚠ **It is also 10.4\'s yellow CAUTION sign in a different shape** — **a piece of information that has become furniture.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody ever find out who wrote it?_ — **_No. It was there before all of us._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was the writer never found?** **Most.** ⚠ **And the homework is the answer** — **sign and time everything you leave this week.** **Ask next lesson whether anybody mentioned it.** **Usually nobody does, which is what a thing working looks like.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**I signed and timed five notes this week. Nobody mentioned any of them. Samih answered one with a note of his own, signed and timed. That is new.**',
]));

out.push(pb());
// ===================== 12.7 =====================
out.push(h2('12.7  Review: the note that saved a morning'));
out.push(stage('1', 'Get ready – Unit 12 quiz'));
out.push(table(['', 'The answer'], [
  ['**12.1**', '**To · I did · I did not, because · Please.** ⚠ **In that order.**'],
  ['**12.2**', '_To: Samih_ — ⚠ **or _To: whoever opens the back store first_.** **Never NOTE.**'],
  ['**12.3**', '_I did rows one to three._ ⚠ **Where you got to, and what is NOT done.**'],
  ['**12.4**', '_I did not do row four because the ladder was in the yard._'],
  ['**12.5**', '_Please do row four._ ⚠ **_Please_ for work, _must_ for safety, never nothing.**'],
  ['**12.6**', '_A. Zreik, Sunday, 16.00._ ⚠ **Three parts, and the time is the one that matters.**'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **This is the last quiz in the course.** ⚠ **A learner who can produce all six has the whole of Lesson B from twelve units in one page, and should be told so.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — a morning.   **b**  **1** Hani, who cannot read English, took it to Nour.  **2** It was written to Samih, who was ill.'));
out.push(p('⚠ **This is the last dialogue in the course and it is the only review cycle in twelve units where something goes RIGHT.** **Read it twice and say that out loud.** **Eleven units have shown a thing going wrong with nobody at fault; this one works, unexpectedly, for the wrong man.**'));
out.push(p('⚠ **And Abu Yasser\'s last line is a question to the class, not to Ammar:** _You wrote it to Samih and it worked for Hani. Say why._ **Do not answer it.** **Stop the recording there and let stage 3 and stage 4R do the work.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Ammar is not wrong to have named Samih** — **12.2 says a note for everybody is a note for nobody, and he followed it.** ⚠ **And Abu Yasser is not catching him out.** **He is pointing at something that worked better than it should have and asking why.** **That is a different kind of mediation and the class should notice.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **TWO things about the note made it work for a man who could not read it.** **The name at the top, which made it look like a note that mattered, so Hani picked it up instead of walking past.** **And four lines, which was short enough for Nour to read aloud in twenty seconds.**'));
out.push(p('⚠ **If the class gets only one of the two, it is always the name.** **The length is the one nobody sees** — **and it is the one that made it passable to a third person.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — a paper that works for anybody', [
  '**The paper:** the price list on the wall.   **Who it is for:** customers.   **Why it would work for anybody:** ⚠ **it has a date on it, so even a new girl knows whether to trust it.**',
  '**The paper:** the two-man jobs list by the bench.   **Who it is for:** the men.   **Why it would work for anybody:** ⚠ **the sentence is written out in full, so somebody who cannot think of the words can read them off the card.**',
]));
out.push(note("Both samples name the feature rather than the content, which is what the stage is asking for: a date, a sentence written out in full. Those are the things that make a paper usable by somebody it was not written for — and both come from earlier units, 11.3 and 10.6. The class is now reading its own course for design features."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'And here is why it worked'], [
  ['**Ammar**', '⚠ **he wrote it to one named person and could not have known who would come in** — **naming Samih was correct, and 12.2 is why**', '**nothing to give up.** ⚠ **He did it right and got more than he aimed at.**'],
  ['**Abu Yasser**', '⚠ **it worked for a man who was not named on it and cannot read it** — **so something in the note was doing more work than the name**', '**nothing.** ⚠ **He asks the question instead of answering it.**'],
  ['**The two things**', '⚠ **ONE: a name at the top made it look like a note that mattered, so Hani picked it up instead of walking past.** ⚠ **TWO: four lines was short enough for Nour to read aloud in twenty seconds.**', '⚠ **A name makes a note get PICKED UP. Four lines make it get PASSED ON.**'],
], [1.3, 4.6, 3.3]));
out.push(p('**Report (sample):**  _Ammar is right because he named one person, which is what 12.2 says. Abu Yasser is right because it worked for a man who was not named. And it worked because the name made Hani pick it up, and four lines were short enough for Nour to read aloud._'));
out.push(p('⚠ **The words to keep:** _I knew it was a note with a name on it, so I knew it mattered._'));
out.push(p('⚠ **And this is the last finding in the course, so say what is different about it.** **Eleven units have shown things going wrong with nobody at fault:** **Abu Raed\'s gate book, Hani\'s eleven swaps, the roll behind the door, Fouad\'s shelf map, a slip under a pad, the driver and the four minutes, four men and an empty sheet, the customer who never says please, two true sheets and a two-hour hole, a rule everybody breaks, a price on a wall.** ⚠ **This one went RIGHT** — **and nobody planned the part that worked.**'));
out.push(p('⚠ **That is what the four lines are for, and it is worth saying slowly to a class that has just finished a hundred and eighty hours.** **A note short enough to be read aloud by somebody else, with a name on it so it gets picked up, and a _please_ at the end so something happens.** **It is the smallest thing in the book and it is the only one that has ever saved anybody a morning.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'C', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 4 is the only one in the course whose answer is a DISTINCTION rather than a fact:** _two words for two different things._ **A learner who chooses A or B has collapsed _please_ and _must_ into one** — **and that is exactly what 10.2 and 12.5 exist to prevent.**'));
out.push(p('⚠ **A2 Key Reading Part 1, twelfth and last time.** **Time it and put the figure next to the one from Unit 1.** ⚠ **Twelve units ago this task was frightening.** **Say that, and show them both numbers.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (32 words, four sentences)', [
  '**To: Samih**',
  '**I did the morning bake, eighty loaves. I did not wash the trays because the water went off at 05.30. Please wash them before you start and put the eighty out at seven.**',
  '**H. Mourad, Friday, 09.15**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**a name at the top**'],
  ['**1**', '**what you did, exactly**'],
  ['**1**', '⚠ **what you did not do**'],
  ['**1**', '⚠ **the _because_**'],
  ['**1**', '⚠ **the ask, with a day and a time at the bottom**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers. Four.** **Twelfth unit running, and the last time.** ⚠ **Say that it is the last time, and that they have done it twelve times** — **the examination will ask for exactly this and the counting is already automatic.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **This is the last writing task in the course and it is a real one: the note they will actually leave tomorrow.** **Four sentences, about thirty words, a name at the top and a time at the bottom.**'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To: whoever opens up on Saturday. I did the Friday bake and the cleaning. I did not put the order in because the supplier closes at four. Please ring them at eight. H. Mourad, Friday, 16.10.**',
]));
out.push(note("That model uses the whoever form from 12.2, which is the right choice for a Saturday in a rotating shop, and it has a because that changes what the reader does first — ring at eight, not at six. It is also the last piece of writing the course asks for, and it is a real note for a real morning. Collect them and read three aloud. Then set the homework, which is to leave one."));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'c', 'b', 'b', 'b', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Seven of the eight answers are (b) and that is worth knowing before you hand it out** — **if your class would notice, read the eight aloud in a different order and have them answer on paper.** ⚠ **Question 5 is the grammar:** _I did not **do** row four_, **not _did_ and not _done_** — **9.4\'s rule, used for the last time.** ⚠ **And questions 6 and 7 are the _please_ / _must_ pair, which is the only thing in this unit a learner can get half right.**',
  '**B  Listening — 6 marks**, one each. **Samih (1) · the morning bake, eighty loaves (1) · washed the trays (1) · the water went off at half past five (1) · wash them before you start and put the eighty out at seven — either half (1) · 09.15 (1).** ⚠ **Item 6 is the LAST thing in the recording and it is two numbers.** **Learners who think the recording is about trays will have stopped listening.** **Play it three times.**',
  '**C  Reading — 3 marks:** **_A. Zreik, Sunday, 16.00_ (1) · whether the ladder had come back (2).** ⚠ **The second answer is worth two because it is the test the whole cycle rests on** — **a signature is judged by what it leaves the reader unable to work out.**',
  '**D  Writing — 8 marks:** **four sentences (2) · a name at the top (1) · what you did, exactly (1) · what you did not do (1) · the _because_ (2) · a day and a time at the bottom (1).** ⚠ **The _because_ is worth two.** **It is the hardest line in the book and the fourth time the course has asked for it.**',
  '**Total 25.** ⚠ **This is the last unit check in the course.** **The profile to expect: A high, B split on item 6, C split on the two-mark answer, D the best in the course.** ⚠ **If D is the best mark a learner has had in twelve units, say so when you hand it back** — **and say why: the task has been the same task since Unit 1.7, and they have now done it twelve times.**',
], C.lteal, C.navy));
out.push(note("Teacher's note, and the last one in this course. Six things. First, the shape. Four lines, about thirty words: to, what I did, what I did not do and why, what you must do, with a name and a time at the bottom. Say on the first morning of this unit that the shape the examination wants and the shape a handover needs are the same shape, and that this is why every Lesson B in twelve units has ended the same way. It is not a coincidence and the class has earned the right to be told. Second, 12.1 is 9.6 with an envelope on it. Three sentences at a shift change becomes four when it is written, because paper needs a name on the top. Nothing new is being learned; make that explicit, because a class that thinks the last unit is new material will revise the wrong things for the test. Third, 12.4, which is the hardest line in the book and the fourth time the course has asked for it — what you did not check in 5.6, I have not opened it in 7.4, I did not count it no light in 9.4, and now a because in a note somebody acts on. The sentence to put on the board is Samih's: the because is not for you, it is for me. And the 7R count is the payoff — ask how many people were ever annoyed about an I did not with a reason on it. It is always none, and most of the room has spent years expecting otherwise. Fourth, 12.5 and the three options. Please for work, must for safety, and nothing at all is the worst of the three. The man who reads a note with no line four knows everything in it and does nothing, because nobody asked him, and that is not a failure of his. Expect resistance when the class is asked whose fault it was; somebody will say he should have used his head. Then ask what a note is for. Fifth, the four seconds. The pen by the telephone in 6.3, each by hand in 11.5, the read-back in 11.2, the time on a signature here. Four times this course has shown that the thing which saves a morning costs seconds, and this is where you say it as a pattern rather than as four separate instructions. Sixth, 12.7, and it is the only review cycle in twelve units where something goes right. Eleven mediations have shown things going wrong with nobody at fault; this one works, for the wrong man, who cannot read English. Two features did it: a name at the top, so Hani picked it up rather than walking past, and four lines, so Nour could read it aloud in twenty seconds. A name makes a note get picked up; four lines make it get passed on. Nobody planned the second part. End the course there, and let the class see that the smallest thing in the book is the only one that has ever saved anybody a morning."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 12 · Answer Key');
module.exports = out;
