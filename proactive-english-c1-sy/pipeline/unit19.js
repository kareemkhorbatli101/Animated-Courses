// Proactive English C1 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT I WROTE', 'HOW THE OTHER SIDE WILL READ IT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const readings = (rows) => table(['THE CLAUSE', 'THE SECOND READING', 'WHAT THAT READING WOULD OBLIGE'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three clauses from the reports on the board. For each one the room produces the second reading in full, in the other side\'s voice, and then says whether the two readings oblige different things.';
const slip = '**Peer review, C1 band 4** — **and this is the last change the course makes.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 19  The Document That Will Be Read in Court'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Some documents are read by somebody whose job is to find the gap in them.** ⚠ **An expert statement.** **A medical report in a claim.** **A cold-chain record in an inspection.** **A translation certified for a hearing.** **A school\'s account of an accident.** **None of these is read by a reader who wants to understand you** — **and that is not a reason for anxiety, it is a specification.**',
  '**So the axis turns to the last position Book 2 reaches, and it is the hardest.** ⚠ **In Unit 18 the reader was a rule applied by somebody who did not make it.** **Here the reader is paid to find the second reading of every sentence you write, and will find it, and is not acting in bad faith: finding it is the job.** **Nothing in these seven cycles is about sounding careful.** **Every one of them is a way of writing a sentence that survives being read by somebody looking for a hole.**',
  '**19.1** writes a clause that cannot be read two ways, and proves it.   **19.2** defines a term so that the definition closes.   **19.3** puts the date, the limit and the source in one sentence.   **19.4** says what you did not examine, in the document itself.   **19.5** separates what you observed from what you concluded.   **19.6** writes the statement.   **19.7** mediates between a statement, the party it helps and the party it does not.',
  '**Exam practice in 19.7:** C1 Advanced **Reading and Use of English Part 4** (key-word transformations), **Writing Part 1** (the essay) and **Listening Part 3** (a long interview).',
  '⚠ **The peer review changes in 19.1 and does not change again.** **Band 4: the reviewer writes the one sentence they would put in your place, and you say whether it is yours.** **It is the only band in this series that can be refused** — **and the refusal is the point: a writer who cannot tell a supplied sentence from their own has no voice to protect, and a writer who refuses every supplied sentence is not reading them.**',
  '⚠ **Bring something of yours that somebody could be paid to attack.** **A report, a certificate, a record, a statement, a set of notes.** **If you have never written one, bring the last document you signed** — **because every cycle here is applied to a real clause, and a clause invented for the lesson cannot be read twice by anybody.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 19.1 =====================
out.push(pb());
out.push(h2('19.1  The clause that cannot be read two ways'));
out.push(p('**Function:** writing a sentence that cannot be read two ways, and proving it   ·   **Grammar:** the four-reading test applied to your own clause   ·   **Pronunciation:** reading your own clause in the other side\'s voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one clause from the document you brought, read aloud exactly.** ⚠ **Then say what it obliges, in your own words.** **In this class four of ten said what they had meant and could not say what the clause obliged** — **and your teacher writes the ten clauses on the board, because the room is going to read each of them twice.**'));
out.push(board('The bolts were checked on 7 August.', 'All the bolts. By him. On that day.'));
out.push(p('**b**  Which two have been proved rather than asserted? **1** _I am confident the clause is clear._  **2** _The second reading is: all fifty-two bolts were checked. That would oblige me to have reached nine positions behind a sheeted scaffold, which I did not reach, so the clause now reads: on the forty-one positions reached on 7 August, the bolts measure M12._  **3** _Anybody reading it in good faith would understand me._  **4** _The second reading is: the inspection was completed. That would oblige the branch to have been inspected in full, where two rooms were locked, so the clause now names the two rooms._  **5** _I have read it several times and it seems unambiguous to me._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the proof is?   **A** reading the clause again carefully   **B** **writing out the second reading in full, in the other side\'s voice**, and saying what it would oblige   **C** asking a colleague whether it is clear'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say a writer cannot do with their own sentence?   **2** What does Mrs Oueidat say about the reader who is looking for the second reading?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  The second reading, written out in full', [
  ['Ms Huda', 'Mr Zahreddine has written four expert statements this year.'],
  ['Mr Zahreddine', '⚠ **Four, and the first one cost me a morning in a room with a man whose job was to find the gap.** **He found it in my second sentence** — _the bolts were checked on 7 August_ — **and he did not have to work at it.**'],
  ['Mrs Khoury', 'What was the second reading?'],
  ['Mr Zahreddine', '⚠ **That all of them had been checked, by me, on that day.** **All three of those are in the sentence and none of them is true: forty-one of fifty-two, two of them by my assistant, and the scaffolded bay on the eighth.** **I had not written anything false.** **I had written something that could be read as false.**'],
  ['Mrs Oueidat', '⚠ **And the room should be clear that the man was not acting in bad faith.** **Finding the second reading is his job, he is paid for it, and he is good at it** — **and a witness who treats that as an attack has misunderstood the room he is in.**'],
  ['Mr Attar', 'So how do you find it before he does?'],
  ['Mr Zahreddine', '⚠ **You cannot read your own sentence twice, and that is the whole difficulty.** **You read it once, as you meant it, and the second reading is invisible to you because you know what you meant** — **so you write it out.** **In full. In his voice. On paper.**'],
  ['Mrs Khoury', '⚠ **Which almost nobody will do, and the reason is not laziness.** **Writing out the second reading feels like conceding it** — **and in this class six of ten refused to write one and said instead that the clause was clear, which is an assertion and not a proof.**'],
  ['Dr Qabbani', 'Four readings, you said.'],
  ['Mr Zahreddine', '⚠ **Four, and the fourth is the one nobody thinks of.** **As I meant it.** **As the other side wants it.** **As a careless reader will take it.** **And as a reader who has only this sentence and nothing else will take it** — **which is the schedule reader from Book 1 and is the commonest reader any of my sentences ever has.**'],
  ['Mrs Rizk', 'And if two of the four readings agree?'],
  ['Mrs Oueidat', '⚠ **Then the clause is fine and you have spent four minutes finding out.** **The test is not a repair, it is a measurement** — **and in this class eleven clauses of thirty survived all four readings unchanged, which is a better rate than the room expected and a worse one than it hoped.**'],
  ['Mr Tayara', 'What does the repair look like?'],
  ['Mr Zahreddine', '⚠ **It is always longer and it is never more careful.** _On the forty-one positions I was able to reach on 7 August, the bolts measure M12._ **Nine words longer, three facts in one sentence, and no clause in it can be dropped without the sentence breaking** — **which is 19.3 and is the only defence a sentence has.**'],
  ['Mrs Tarabishi', 'Is there a reading you should not try to close?'],
  ['Mrs Khoury', '⚠ **There is, and it is worth the four minutes: a reading that would be absurd.** **A clause can be defended against the other side, against carelessness and against truncation.** **It cannot be defended against a reading nobody would advance** — **and a writer who tries produces the fourteen-line sentence that no reader finishes, which helps the other side more than the ambiguity did.**'],
  ['Mr Shihabi', 'How do you tell an absurd reading from a real one?'],
  ['Mrs Oueidat', '⚠ **You ask whether it would oblige anybody to do anything different.** **If the second reading changes an obligation, a date, a quantity or a person, it is real.** **If it only changes an impression, it is not** — **and that question is the whole of the test and takes about eight seconds.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is that he read my sentence out loud.** **He read it exactly, flat, with no tone at all, and the room heard what it said rather than what I meant** — **and I have read every clause of every statement since in his voice, out loud, before I sign it.**'],
]));
out.push(sp());
out.push(box('Language box – the four-reading test', [
  '**Four readings, and you write the second one out in full.** ⚠ **As you meant it.** **As the other side wants it.** **As a careless reader will take it.** **As a reader who has only this sentence will take it.** **Written out, in the other side\'s voice, on paper.**',
  '**You cannot read your own sentence twice.** ⚠ **You read it once, as you meant it, and the second reading is invisible to you because you know what you meant** — **so the proof is a document and not a feeling.** **_I am confident it is clear_ is an assertion; the second reading written out is a proof.**',
  '**The test is a measurement and not a repair.** ⚠ **Eleven clauses of thirty in this class survived all four readings unchanged.** **A clause that survives has been proved** — **and four minutes is the whole cost of knowing which of your clauses those are.**',
  '**The question that separates a real reading from an absurd one.** ⚠ **Would it oblige anybody to do anything different?** **A reading that changes an obligation, a date, a quantity or a person is real.** **A reading that changes only an impression is not** — **and the question takes about eight seconds.**',
  '**The repair is longer and it is not more careful.** ⚠ _On the forty-one positions I was able to reach on 7 August, the bolts measure M12._ **Nine words longer, and no clause in it can be dropped without the sentence breaking** — **which is the only defence a sentence has against being quoted in part.**',
  '**And the reader is not acting in bad faith.** ⚠ **Finding the second reading is their job and they are paid for it.** **A witness who treats it as an attack has misunderstood the room** — **and will defend the sentence instead of repairing it.**',
  '**Pronunciation.** 🔊 **Track 19.2** **Read your own clause aloud, flat, with no tone at all, as somebody who has never met you would read it.** ⚠ **Not slowly and not helpfully.** **A clause read in your own voice says what you meant; a clause read flat says what it says** — **and this is 15.1\'s exercise turned on a document that has not aged.**',
  '**Practise:** Write out the second reading. **1** _the bolts were checked_  **2** _the inspection was completed_  **3** _the record was kept daily_  **4** _the translation is accurate_  **5** a clause of yours that survives all four',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the clause from the card, flat. B **writes out the second reading in full**, in the other side\'s voice, and says **what it would oblige.** ⚠ **Two rows on each card survive all four readings** — **and there B says so and names which reading was closest.** Change cards.'));
out.push(readings([
  ['_The bolts were checked on 7 August._', '⚠ _All fifty-two, by him, that day._', '_Nine positions he did not reach._'],
  ['_⚠ The forty-one accessible positions were measured on 7 August._', '⚠ _None available._', '_Nothing; it survives._'],
  ['_The record was kept daily._', '⚠ _Every day without exception._', '_Three days in February with no entry._'],
  ['_⚠ Entries were made on ninety-one of ninety-four days._', '⚠ _None available._', '_Nothing; it survives._'],
  ['_The translation is accurate._', '⚠ _Every word of fourteen hours._', '_Four terms she could not verify._'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the second reading, written out, and what it would oblige. ⚠ **Rows 2 and 4 survive all four readings and the room must say so rather than hunt** — **and both survive for the same reason, which is that each carries its own denominator.** **Row 5 is the hardest**: the second reading obliges the translator to have verified four terms she could not, **and the repair is 19.4, because the defence is a scope paragraph and not a better adjective.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **three clauses from the document you brought** and apply the four readings to each. ⚠ **Write out the second reading in full, in the other side\'s voice.** **Then ask the eight-second question: would it oblige anybody to do anything different?** **In this class eleven of thirty clauses survived and nineteen did not** — **and of the nineteen, fourteen failed on a missing denominator.**'));
out.push(p('**b**  Swap. Your partner reads **your clause aloud, flat**, and then reads **your second reading.** ⚠ **Then the harder question: did you write the second reading, or did you argue that the clause was clear?** — **and in this class six of ten argued first and wrote afterwards.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine has written four expert statements this year, and the first one cost him a morning in a room with a man whose job was to find the gap, and he found it in the second sentence, which was that the bolts were checked on 7 August, and he did not have to work at it. Mrs Khoury asked what the second reading was, and that all of them had been checked, by him, on that day, and all three of those are in the sentence and none of them is true: forty-one of fifty-two, two of them by his assistant, and the scaffolded bay on the eighth. He had not written anything false; he had written something that could be read as false. Mrs Oueidat said the room should be clear that the man was not acting in bad faith, because finding the second reading is his job and he is paid for it and he is good at it, and a witness who treats that as an attack has misunderstood the room he is in. Mr Attar asked how you find it before he does, and you cannot read your own sentence twice, and that is the whole difficulty: you read it once as you meant it and the second reading is invisible because you know what you meant, so you write it out, in full, in his voice, on paper. Mrs Khoury said almost nobody will do that, and the reason is not laziness, because writing out the second reading feels like conceding it, and six of ten in the class refused and said instead that the clause was clear. Dr Qabbani asked about the four readings, and four, and the fourth is the one nobody thinks of: as I meant it, as the other side wants it, as a careless reader will take it, and as a reader who has only this sentence will take it. Mrs Rizk asked what happens if two of the four agree, and Mrs Oueidat said then the clause is fine and you have spent four minutes finding out, because the test is a measurement and not a repair. Mr Tayara asked what the repair looks like, and it is always longer and never more careful. Mrs Tarabishi asked whether there is a reading you should not try to close, and Mrs Khoury said there is: a reading that would be absurd. Mr Shihabi asked how you tell an absurd reading from a real one, and you ask whether it would oblige anybody to do anything different. And Mr Zahreddine said the thing he will take away is that the man read his sentence out loud, exactly, flat, with no tone at all, and the room heard what it said rather than what he meant._'));
out.push(p('**Listener task:** write your partner\'s clause, the second reading, and what it would oblige.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Zahreddine wrote after the first statement. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _note on the statement of 2 September_ · _one morning, one sentence_ · **14 September**',
  '**The sentence.** _The bolts were checked on 7 August._ ⚠ **Seven words, nothing false in them, and three things in them that I did not mean: all of the bolts, by me, on that day.**',
  '**What was true.** **Forty-one of fifty-two positions.** **Two of the forty-one measured by my assistant with me present.** **The scaffolded bay on the eighth, not the seventh.** ⚠ **Every one of those three facts was in my field notes and none of them was in my sentence.**',
  '**How long it took him to find.** **He read my second sentence aloud, flat, and then asked three questions.** ⚠ **All fifty-two?** **By you?** **On the seventh?** **The whole exchange was under two minutes and I had spent three weeks on the statement.**',
  '**Why I could not see it.** **Because I knew what I meant.** ⚠ **A writer reads their own sentence once, in their own voice, with the meaning already in their head** — **and the second reading is not hidden from a stranger, it is hidden from the author, which is a different problem and needs a different method.**',
  '**The method, which is four readings and a piece of paper.** **As I meant it; as the other side wants it; as a careless reader will take it; and as a reader who has only this sentence will take it.** ⚠ **The second one is written out in full, in his voice, on paper** — **and writing it out is the part I resisted for three statements, because it feels like agreeing with him.**',
  '**What the repaired sentence looks like.** _On the forty-one positions I was able to reach on 7 August, the bolts measure M12._ **Nine words longer than the original.** ⚠ **It is not more careful and it is not more modest: it is harder to quote in part, because no clause can be removed from it without the sentence breaking.**',
  '**One thing I got wrong in the other direction.** **In the second statement I closed a reading nobody would ever advance, and the sentence came out at fourteen lines.** ⚠ **Nobody read it, including the man who was paid to.** **A sentence that defends itself against the absurd has helped the other side more than the ambiguity did** — **and the test is whether a reading would oblige anybody to do anything different.**',
  '**One figure that settles the argument about cost.** **Four readings of a nine-hundred-word statement take about eleven minutes and a morning in a room takes four hours, of which three are other people\'s.** ⚠ **The ratio is not close and I have put it in this note because nobody adopts a method on a principle.**',
  '**And the practice I now have.** **Every clause read aloud, flat, in his voice, before I sign.** ⚠ **It takes about eleven minutes for a statement of nine hundred words** — **and it has found something in every statement since, including one sentence that had survived two colleagues and a lawyer.**',
]));
out.push(item('1', 'What three things were in his sentence that he did not mean?'));
out.push(item('2', 'Why does he say he could not see the second reading himself?'));
out.push(item('3', 'What happened in the second statement, and what rule does it produce?'));
out.push(writers([
  'A note on a sentence that was read twice: **the sentence, quoted** → **what was true, item by item** → **how long it took the other side to find** → **why you could not see it** → **the method, in four readings** → **the repaired sentence, with the word count** → **one thing you got wrong in the other direction** → **and the practice you now have, with its cost in minutes.**',
  '⚠ **Quote the sentence and then list what was true, separately.** **The force of this genre is entirely in the gap between the two lists** — **and a note that describes the fault instead of showing it cannot be used by anybody, because every writer believes their own sentences are clear.**',
  '**Say how long the other side took.** ⚠ _The whole exchange was under two minutes and I had spent three weeks on the statement._ **That ratio is the argument for the method** — **and it is the only sentence in the note that will make a reader apply it.**',
  '**Name the reason you could not see it, and make it structural.** ⚠ _A writer reads their own sentence once, with the meaning already in their head._ **Not carelessness, not inexperience** — **a structural fact about authorship, which is why the repair is a procedure and not an effort.**',
  '⚠ And **include the failure in the other direction.** _I closed a reading nobody would advance and the sentence came out at fourteen lines._ **A note that only warns against ambiguity produces unreadable prose** — **and the test, in one question, is whether a reading would oblige anybody to do anything different.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on a sentence of yours that can be read twice (120 words or more).'));
out.push(p('**______________** · _note on _______________ · _______________ · **______________**   **The sentence.** **______________.** ⚠ **______________ words, nothing false in them, and ______________ things in them that I did not mean.**   **What was true.** **______________.** **______________.** ⚠ **______________.**   **Why I could not see it.** **Because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The sentence quoted, and the true facts listed separately',
  'The time the other side took, against the time you spent',
  'The reason stated as structural and not as carelessness',
  'The repaired sentence, with its word count',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their original clause, flat**, and the room produces the second reading.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the sentence, what was true, how long it took, why you could not see it, the four readings, the repair with its count, the failure in the other direction, and the practice you now have.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the second reading written out in full, the eight-second question applied, and nothing claiming that the clause is simply clear.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one band.** **Of thirty clauses, eleven survived all four readings and nineteen did not, and fourteen of the nineteen failed on a missing denominator.** **Then the new peer review: ask the room how many supplied sentences were refused.** **In this class four of ten** — **and say at once that a refusal is a legitimate answer and that a student who accepts every supplied sentence is not reading them.**'));
out.push(hw('**Apply the four readings to three clauses of your own and write out the second reading of each.** ⚠ **Then do the harder half: read all three aloud, flat, to somebody who does not know the document, and ask them what each one obliges.** **In this class the listener found a reading the writer had not written in six of ten cases** — **and in two of the six the listener\'s reading was the one the other side would have used.** **Bring all three and what the listener said.** **19.2 defines a term so that the definition closes**, so bring a definition from your own field that contains _etc._ or _such as_.'));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  The definition that closes'));
out.push(p('**Function:** defining a term so that the definition closes   ·   **Grammar:** no _etc._, no _such as_ — an exhaustive list or a testable criterion   ·   **Pronunciation:** the criterion said without a rise at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one definition from your own field, read exactly, with its _etc._ or its _such as_ left in.** ⚠ **Exactly, and do not tidy it.** **In this class nine of ten definitions contained one of the two and the tenth contained _including but not limited to_** — **and your teacher writes the ten on the board, because every one of them is going to be closed.**'));
out.push(board('Load-bearing elements such as columns and beams.', 'Any element whose removal alters the load path.'));
out.push(p('**b**  Which two close? **1** _A register means a printed book, a bound ledger, etc._  **2** _A load-bearing element is any element whose removal would alter the load path of the structure._  **3** _Cold-chain equipment includes refrigerators, cool boxes and such other equipment as may be used._  **4** _A working day is a day on which the branch is open to the public, and there are two hundred and forty-one of them in the current year._  **5** _Documentation means records, files and similar materials._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a closing definition is?   **A** a longer list   **B** **an exhaustive list or a testable criterion**, and nothing in between   **C** a definition everybody agrees with'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say _such as_ invites a reader to do?   **2** What does Mrs Khoury say about a closing definition that turns out to be wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  An exhaustive list or a testable criterion', [
  ['Ms Huda', 'Mrs Oueidat has spent two years on a glossary that two judges disagree about.'],
  ['Mrs Oueidat', '⚠ **And the first finding is not about translation at all.** **Of two hundred and eleven entries, a hundred and sixty-three end in _and similar_, _or the like_, or _etc._** **A hundred and sixty-three of two hundred and eleven** — **and every one of those entries can be argued about in a hearing, which is what the glossary was written to prevent.**'],
  ['Mrs Khoury', 'What does _such as_ actually do?'],
  ['Mrs Oueidat', '⚠ **It invites the reader to add items, and the reader who adds them is the other side.** **_Cold-chain equipment such as refrigerators and cool boxes_ lets a party argue that a cupboard in a cool room is cold-chain equipment** — **and the argument is a good one, because the definition told them to look for more.**'],
  ['Mr Attar', 'And _etc._?'],
  ['Mrs Oueidat', '⚠ **_Etc._ is worse and it is more honest, which is a strange combination.** **It says that the writer stopped** — **and a reader can then put anything at all into the space where the writer stopped, and nobody can say they were wrong, because the writer did not say where the list ended.**'],
  ['Dr Qabbani', 'So what closes?'],
  ['Mr Zahreddine', '⚠ **Two things and nothing in between.** **A list that is exhaustive, with a number attached to it.** **Or a criterion that can be tested** — **_any element whose removal would alter the load path_, which covers a column, a beam, a wall I have not thought of, and a thing that has not been invented yet.**'],
  ['Mrs Khoury', '⚠ **And the room should see what the criterion costs, because it is not free.** **A criterion may turn out to be wrong: it may catch something nobody intended to catch.** **An open definition cannot be wrong at all** — **and that is not a virtue, it is the absence of content, and a definition that cannot be wrong cannot settle anything either.**'],
  ['Mrs Rizk', 'My donor\'s definition of a beneficiary is three lines and ends in _and others affected_.'],
  ['Mrs Oueidat', '⚠ **Then it defines nobody, and the room should be asked what it has cost.** **In a round where one scheme counted a hundred and four and another counted eleven hundred, both were within the definition** — **and the scorer is then comparing two numbers that measure different things and cannot say so, because the form gave her the definition.**'],
  ['Mr Tayara', 'Can you close a definition that somebody else wrote?'],
  ['Mrs Khoury', '⚠ **Not in their document, and you can state the reading you have applied in yours, which is the move.** **_For the purposes of this statement, a working day means a day on which the branch was open to the public; there were two hundred and forty-one such days in the period._** **You have not amended their definition** — **you have told the reader which of its readings your figures rest on, which is 16.2 arriving in a different room.**'],
  ['Mrs Tarabishi', 'And if the criterion is hard to apply?'],
  ['Mr Zahreddine', '⚠ **Then say who applies it, which is the third part that everybody drops.** **_Whether removal would alter the load path is a question for a structural engineer, and I have applied it to the eleven elements listed at annexe 2._** **A criterion with nobody behind it is a definition that reads well and settles nothing** — **and in a hearing it is settled by whoever speaks last.**'],
  ['Mr Shihabi', 'Does a closing definition ever make trouble?'],
  ['Mrs Oueidat', '⚠ **Once, for me, and I would do it again.** **I closed _document_ to mean a thing bearing a date and a signature, and a party produced an unsigned note that mattered** — **and because my definition closed, everybody could see at once that the note fell outside it and had to be dealt with separately, which took four minutes.** **Under _and similar materials_ it would have taken a morning.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the hundred and sixty-three.** **A glossary written to stop arguments contains a hundred and sixty-three entries that invite them** — **and nobody who wrote it was careless: every one of those entries was written by somebody who did not want to leave anything out, which is the most reasonable instinct there is and is the whole of the fault.**'],
]));
out.push(sp());
out.push(box('Language box – the definition that closes', [
  '**Two forms close and nothing in between.** ⚠ **An exhaustive list with a number attached.** **Or a criterion that can be tested** — **_any element whose removal would alter the load path_, which covers the thing you have not thought of and the thing that does not exist yet.**',
  '**_Such as_ invites the reader to add items, and the reader who adds them is the other side.** ⚠ **_Cold-chain equipment such as refrigerators and cool boxes_ lets a party argue for a cupboard in a cool room** — **and the argument is a good one, because the definition told them to look for more.**',
  '**_Etc._ is worse and more honest at once.** ⚠ **It says that the writer stopped** — **and a reader can put anything into the space where the writer stopped, and nobody can say they were wrong.**',
  '**A closing definition can be wrong, and that is its value.** ⚠ **A criterion may catch something nobody intended to catch.** **An open definition cannot be wrong at all, which is the absence of content** — **and a definition that cannot be wrong cannot settle anything either.**',
  '**Where the definition is somebody else\'s, state the reading you have applied in your own document.** ⚠ _For the purposes of this statement, a working day means a day on which the branch was open to the public; there were two hundred and forty-one such days in the period._ **You have not amended their definition; you have said which reading your figures rest on.**',
  '**And name who applies the criterion, which is the part everybody drops.** ⚠ _Whether removal would alter the load path is a question for a structural engineer, and I have applied it to the eleven elements at annexe 2._ **A criterion with nobody behind it reads well and settles nothing** — **and in a hearing it is settled by whoever speaks last.**',
  '**Pronunciation.** 🔊 **Track 19.4** **Say the criterion with no rise at the end and no stress on _any_.** ⚠ **A rise makes it a proposal and stress on _any_ makes it a boast about coverage** — **and flat, it is a test a reader can apply to an object in front of them, which is the only thing a definition is for.**',
  '**Practise:** Close it. **1** _a register means a printed book, etc._  **2** _cold-chain equipment such as refrigerators_  **3** _documentation means records, files and similar materials_  **4** _beneficiaries and others affected_  **5** somebody else\'s definition, with your reading stated',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the open definition from the card. B closes it, **either with an exhaustive list and a number or with a testable criterion**, and says **who applies it.** ⚠ **Two rows on each card cannot be closed by the writer at all** — **and there B states the reading applied instead.** Change cards.'));
out.push(table(['Card A – the open definition', 'Card B – the open definition'], [
  ['_A register means a printed book, a bound ledger, etc._', '_Cold-chain equipment such as refrigerators and cool boxes._'],
  ['_⚠ Beneficiaries and others affected (the donor\'s form)._', '_⚠ A working day (the regulation, undefined)._'],
  ['_Documentation means records, files and similar materials._', '_Load-bearing elements such as columns and beams._'],
  ['_⚠ Relevant experience (the syndicate\'s schedule)._', '_⚠ Adequate supervision (the handbook, undefined)._'],
  ['_A gap in the record._', '_An incident._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the closed form, and who applies it. ⚠ **Rows 2 and 4 on both cards belong to somebody else\'s document and cannot be amended** — **so B states the reading applied, for the purposes of their own document, with a figure where one exists.** **Rows 5 are the hardest**: both are terms nobody has defined at all, **and the room must notice that an undefined term is easier to close than an open definition, because there is nothing to contradict.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the definition you brought** and close it. ⚠ **An exhaustive list with a number, or a criterion with somebody named behind it.** **Then ask the hard question: what does your closed version catch that nobody intended to catch?** **In this class seven of ten closed definitions caught something unintended** — **and all seven writers kept their version, which is the right decision and should be said aloud.**'));
out.push(p('**b**  Swap. Your partner tries to add an item your definition does not cover. ⚠ **If they succeed, the definition has not closed.** **Then the harder question: can your criterion be applied by the person who will have to apply it?** — **and in this class three criteria could only be applied by the writer, which is a definition with one competent reader in the world.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat has spent two years on a glossary that two judges disagree about, and the first finding is not about translation at all: of two hundred and eleven entries, a hundred and sixty-three end in and similar, or the like, or etc., and every one of those can be argued about in a hearing, which is what the glossary was written to prevent. Mrs Khoury asked what such as actually does, and it invites the reader to add items, and the reader who adds them is the other side, because cold-chain equipment such as refrigerators and cool boxes lets a party argue that a cupboard in a cool room is cold-chain equipment, and the argument is a good one. Mr Attar asked about etc., and etc. is worse and more honest at once: it says that the writer stopped, and a reader can then put anything into the space where the writer stopped. Dr Qabbani asked what closes, and Mr Zahreddine said two things and nothing in between: a list that is exhaustive with a number attached, or a criterion that can be tested, such as any element whose removal would alter the load path, which covers a column, a beam, a wall nobody thought of and a thing that has not been invented yet. Mrs Khoury said the room should see what the criterion costs, because a criterion may turn out to be wrong and may catch something nobody intended to catch, and an open definition cannot be wrong at all, which is not a virtue but the absence of content. Mrs Rizk said her donor\'s definition of a beneficiary is three lines and ends in and others affected, and then it defines nobody: in a round where one scheme counted a hundred and four and another counted eleven hundred, both were within the definition. Mr Tayara asked whether you can close a definition somebody else wrote, and not in their document, and you can state the reading you have applied in yours. Mrs Tarabishi asked what happens if the criterion is hard to apply, and then say who applies it, which is the third part everybody drops. Mr Shihabi asked whether a closing definition ever makes trouble, and once, and she would do it again. And Mrs Oueidat said the thing she will take away is the hundred and sixty-three: every one of those entries was written by somebody who did not want to leave anything out, which is the most reasonable instinct there is and is the whole of the fault._'));
out.push(p('**Listener task:** write your partner\'s closed definition and the name of whoever applies it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat wrote for the group on closing a definition. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note for the terminology group_ · _on definitions that close_ · **18 September**',
  '**The count, which is the argument.** **Of the regulation\'s two hundred and eleven glossary entries, a hundred and sixty-three end in _and similar_, _or the like_, or _etc._** ⚠ **A glossary written to stop arguments contains a hundred and sixty-three entries that invite them.**',
  '**Nobody who wrote it was careless.** **Every one of those entries was written by somebody who did not want to leave anything out.** ⚠ **That is the most reasonable instinct there is and it is the whole of the fault** — **and this is the sentence I would put first if the group will let me.**',
  '**What _such as_ does.** **It instructs the reader to look for more items, and the reader who looks is the other side.** **_Cold-chain equipment such as refrigerators and cool boxes_ invites an argument that a cupboard in a cool room is included** — **and the argument is good, because the definition asked for it.**',
  '**What _etc._ does, which is worse and more honest.** ⚠ **It records that the writer stopped.** **A reader may then put anything into the space where the writer stopped and nobody can say they were wrong, because the writer did not say where the list ended.**',
  '**The two forms that close, and nothing lies between them.** **An exhaustive list, with a number: _the four forms listed at annexe 1, and no others_.** **Or a criterion that can be tested: _any element whose removal would alter the load path_** — ⚠ **which covers the thing nobody thought of and the thing that does not yet exist.**',
  '**What the criterion costs, because it is not free.** **It can be wrong.** ⚠ **It may catch something nobody intended to catch, and the group must be willing to pay that** — **because an open definition cannot be wrong at all, which is the absence of content and not a safeguard.**',
  '**The part everybody drops.** **Who applies the criterion.** ⚠ **_Whether removal would alter the load path is a question for a structural engineer._** **A criterion with nobody behind it reads well and settles nothing, and in a hearing it is settled by whoever speaks last.**',
  '**The form of words for somebody else\'s definition.** ⚠ _For the purposes of this statement, a working day means a day on which the branch was open to the public; there were two hundred and forty-one such days in the period._ **You have not amended their glossary and you have said which of its readings your figures rest on** — **which is the only move available where the open definition is in a document you cannot touch.**',
  '**And the case that made me certain.** **I closed _document_ to mean a thing bearing a date and a signature, and a party produced an unsigned note that mattered.** ⚠ **Because the definition closed, everybody could see at once that the note fell outside it and had to be dealt with separately, and that took four minutes.** **Under _and similar materials_ it would have taken a morning, and the morning would have been spent arguing about my definition rather than about the note.**',
]));
out.push(item('1', 'What does she say about the people who wrote the glossary?'));
out.push(item('2', 'What does she say an open definition cannot do, and why is that not a safeguard?'));
out.push(item('3', 'What happened with the unsigned note, and what would have happened under an open definition?'));
out.push(writers([
  'A note on closing definitions: **the count, as the argument** → **that nobody was careless, and why** → **what _such as_ does** → **what _etc._ does** → **the two forms that close, with an example of each** → **what the criterion costs** → **who applies it** → **and the case that made you certain.**',
  '⚠ **Put the count first and the explanation second.** _A hundred and sixty-three of two hundred and eleven._ **A note on definitions that opens with an argument about language will be read as a preference** — **and a count of a document the reader has on their own shelf cannot be.**',
  '**Exonerate the authors in the second paragraph and mean it.** ⚠ _Every one of those entries was written by somebody who did not want to leave anything out._ **A committee asked to change its own glossary will defend it if it is accused** — **and the instinct behind the fault is genuinely reasonable, which is both true and the only ground on which the change can be made.**',
  '**Price the closed form honestly.** ⚠ _It can be wrong. It may catch something nobody intended to catch._ **A note that presents closure as free will be disbelieved by anybody who has drafted anything** — **and the comparison that does the work is that an open definition cannot be wrong, which is the absence of content.**',
  '⚠ And **end on a case, with its cost in minutes.** _Four minutes under the closed definition; a morning under the open one, and the morning spent arguing about my definition rather than about the note._ **One instance with a clock on it closes an argument that three pages of principle cannot.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on closing a definition (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _on _______________ · **______________**   **The count, which is the argument.** **Of ______________, ______________ end in ______________.** ⚠ **______________.**   **Nobody who wrote it was careless.** **______________.** ⚠ **That is ______________ and it is the whole of the fault.**   **What _such as_ does.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count before any argument about language',
  'The authors exonerated, with the reasonable instinct named',
  'Two closed forms, with an example of each',
  'The cost of closure stated honestly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their closed definition**, flat, and the room tries to add an item it does not cover.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the count, the exoneration, _such as_, _etc._, the two closed forms, the cost, who applies it, and the case with its minutes.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a count before any argument, two closed forms with examples, and the cost of closure named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one decision.** **How many closed definitions catch something unintended?** **Seven of ten** — **and all seven writers kept their version, which the room should be asked to justify out loud.** **Then: how many criteria can only be applied by the writer?** **Three** — **and a definition with one competent reader in the world is not a definition.** **Then Mrs Oueidat\'s hundred and sixty-three.**'));
out.push(hw('**Close one definition from your own field**, with a number or a criterion, and name who applies it. ⚠ **Then do the harder half: give it to somebody in that field and ask them to add an item it does not cover.** **In this class six of ten definitions were broken on the first attempt and four held** — **and two of the four held because the criterion named a test rather than a class of object.** **Bring the definition and what they added.** **19.3 puts the date, the limit and the source into one sentence**, so bring one finding of yours that is currently three sentences.'));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  Three facts, one sentence'));
out.push(p('**Function:** putting the date, the limit and the source into one sentence without a list   ·   **Grammar:** three facts in one sentence, no comma splice, no clause removable   ·   **Pronunciation:** the whole sentence in one breath group'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one finding of yours that is currently three sentences**, read aloud. ⚠ **Three sentences, and then say which of the three a schedule would take.** **In this class ten of ten said the first** — **and your teacher writes the ten first sentences on the board alone, with the other twenty struck out, which is what a schedule does.**'));
out.push(board('The bolts measure M12. I reached 41 of 52. See annexe 2.', 'On the 41 positions reached on 7 August, the bolts measure M12, as recorded at annexe 2.'));
out.push(p('**b**  Which two cannot be quoted in part? **1** _The slab is non-compliant. I examined eleven of nineteen bays._  **2** _On the eleven bays I was able to examine on 3 May, the slab thickness is below the specified minimum, as measured with the gauge logged at annexe 3._  **3** _The record was incomplete. There are three gaps. The gaps are in February._  **4** _Entries are missing for 2, 3 and 4 February, which are the only three days absent from the ninety-four in the period, and all three are in the relief clerk\'s hand._  **5** _The translation is accurate, subject to the reservations set out below._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the one sentence is for?   **A** economy   **B** **making the claim unquotable in part**, because no clause can be removed without the sentence breaking   **C** sounding more formal'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say a list invites?   **2** What does Mrs Khoury say about the writer who keeps the limit in its own sentence out of politeness?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  No clause that can be dropped', [
  ['Ms Huda', 'Mr Zahreddine has rewritten the same finding four times in a year.'],
  ['Mr Zahreddine', '⚠ **Four, and the first version was three sentences and a cross-reference, which is how I was taught.** **The finding, then the limit, then the source.** **It is clearer to read and it is the version that got me into a room with a man for a morning.**'],
  ['Mrs Khoury', 'Why does three sentences fail?'],
  ['Mr Zahreddine', '⚠ **Because a list invites a reader to take one item from it, and every reader does.** **Three sentences are three objects.** **Two of them can be left behind without anything looking broken** — **and the one that travels is the finding, because it is first and because it is the only one anybody wants.**'],
  ['Mrs Oueidat', 'And in one sentence?'],
  ['Mr Zahreddine', '⚠ _On the forty-one positions I was able to reach on 7 August, the bolts measure M12, as recorded in the field notes at annexe 2._ **Three facts, one sentence.** **Take the first clause out and the sentence has no subject; take the last out and it has no source** — **and a reader with eleven centimetres either takes the whole of it or takes nothing, and both of those are acceptable to me.**'],
  ['Mr Attar', 'Is the second one not harder to read?'],
  ['Mrs Khoury', '⚠ **It is slightly harder to read and it is read by somebody who is being paid, which changes the arithmetic entirely.** **A sentence that is four per cent harder and cannot be cut in half is a better sentence for this reader** — **and the room should notice that this is the first time in the course that readability has been traded for anything.**'],
  ['Dr Qabbani', 'Where does the comma splice come in?'],
  ['Mr Zahreddine', '⚠ **It is the commonest repair and it is not a repair.** **_On the forty-one positions reached, the bolts measure M12, the field notes are at annexe 2_** — **three clauses joined by commas, which a reader can split at either comma, and which a typesetter will split for them.** **The joins have to be grammatical: a preposition, a relative pronoun, a participle.**'],
  ['Mrs Rizk', 'How long is too long?'],
  ['Mrs Oueidat', '⚠ **About forty words, and the test is not length, it is whether a reader can hold it in one breath group.** **Read it aloud** — **and if you have to take a breath in the middle, a reader will take a cut there instead, which is 19.1\'s method applied to a comma.**'],
  ['Mr Tayara', 'What if there are four facts?'],
  ['Mr Zahreddine', '⚠ **Then one of the four is not load-bearing and you find out which by removing each in turn.** **Date, limit, source, and finding is four and they go in one sentence.** **A fifth** — **the method, the instrument, the weather** — **goes in a separate sentence and may be quoted away without damage, which is the test of whether it belonged.**'],
  ['Mrs Tarabishi', 'Is there a case for keeping the limit separate?'],
  ['Mrs Khoury', '⚠ **There is one and it is not politeness, which is the reason most people give.** **A limit in its own sentence is right where the limit is the finding** — **in a scope paragraph, which is 19.4, and nowhere else.** **A writer who keeps it separate to avoid an ugly sentence has written a finding and an orphan, and the orphan is left behind every time.**'],
  ['Mr Shihabi', 'Four versions, you said. What changed between the third and the fourth?'],
  ['Mr Zahreddine', '🔊 ⚠ **The third had the source in a footnote and the fourth has it in the sentence.** **The footnote was removed by a typesetter, without malice, from a bundle of nine hundred pages** — **and for six weeks my finding existed in that bundle with no source attached, which I did not discover until somebody asked me where the measurement had come from.**'],
]));
out.push(sp());
out.push(box('Language box – three facts in one sentence', [
  '**Date, limit, source and finding, in one sentence, with grammatical joins.** ⚠ _On the forty-one positions I was able to reach on 7 August, the bolts measure M12, as recorded in the field notes at annexe 2._ **Take out the first clause and the sentence has no subject; take out the last and it has no source.**',
  '**A list invites a reader to take one item from it, and every reader does.** ⚠ **Three sentences are three objects; two can be left behind without anything looking broken** — **and the one that travels is the finding, because it is first and is the only one anybody wants.**',
  '**No comma splices.** ⚠ **_On the forty-one positions reached, the bolts measure M12, the field notes are at annexe 2_ can be split at either comma, and a typesetter will split it for you.** **The joins must be grammatical: a preposition, a relative pronoun, a participle.**',
  '**The length test is a breath group and not a word count.** ⚠ **About forty words.** **Read it aloud: if you take a breath in the middle, a reader will take a cut there instead** — **which is the four-reading test applied to a comma.**',
  '**Four facts is the limit, and the fifth tells you something.** ⚠ **Remove each in turn: the one whose removal does not break the sentence did not belong.** **The method, the instrument and the conditions go in a separate sentence** — **and may be quoted away without damage, which is the proof that they were not load-bearing.**',
  '**And there is one case for keeping the limit separate, which is not politeness.** ⚠ **Where the limit is itself the finding** — **a scope paragraph, which is 19.4, and nowhere else.** **A writer who separates it to avoid an ugly sentence has produced a finding and an orphan, and the orphan is left behind every time.**',
  '**Pronunciation.** 🔊 **Track 19.6** **Say the whole sentence in one breath group, with no pause at either comma.** ⚠ **If you cannot, it is too long and must be rebuilt rather than re-punctuated** — **and a sentence that needs two breaths will be printed as two sentences by somebody who has never met you.**',
  '**Practise:** Three facts, one sentence. **1** a measurement with a date and a denominator  **2** a gap with its period and its hand  **3** a figure with its document  **4** a finding with four facts  **5** a fifth fact, correctly separated',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the three sentences from the card. B gives **the one-sentence version**, with grammatical joins, and then **tries to remove one clause** from it. ⚠ **Two rows on each card contain a fact that does not belong** — **and there B separates it and says why.** Change cards.'));
out.push(table(['Card A – the three sentences', 'Card B – the three sentences'], [
  ['_The bolts measure M12. I reached 41 of 52. See annexe 2._', '_The slab is thin. Eleven of nineteen bays. Gauge log at annexe 3._'],
  ['_⚠ Entries are missing. Three days. February. The weather was poor._', '_⚠ The count is twenty-six. From the return. It was a Tuesday._'],
  ['_The record has three gaps. They are consecutive. One hand._', '_Four terms are unverified. Of nine at issue. Not in the glossary._'],
  ['_⚠ The form was returned. Field 7 ringed. No letter. I was on leave._', '_⚠ The figure is 3 of 5. On two letters. The scheme is in district four._'],
  ['_Four facts: date, denominator, source and finding._', '_Four facts, and a fifth that is the instrument._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the one sentence, and which clause could not be removed. ⚠ **Rows 2 and 4 on both cards carry a fact that does not belong** — **the weather, the day of the week, the writer\'s leave, the district** — **and the test is that removing it leaves the sentence standing.** **Rows 5 are the pair the cycle turns on**: four facts go in and a fifth comes out, **and the room must say which** — **by removal, in ten seconds.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your three-sentence finding** and write it as one. ⚠ **Grammatical joins only, and then remove each clause in turn to see which the sentence can survive.** **Then read it aloud in one breath.** **In this class four of ten one-sentence versions could not be said in one breath and all four were rebuilt rather than repunctuated** — **and three of the four turned out to contain a fifth fact.**'));
out.push(p('**b**  Swap. Your partner **cuts your sentence in half at the most promising point** and reads the first half aloud. ⚠ **If the half stands as a claim, your sentence has failed.** **Then the harder question: which of your three original sentences would a schedule have taken?** — **and in this class ten of ten said the first, which is the entire reason for the cycle.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine has rewritten the same finding four times in a year, and the first version was three sentences and a cross-reference, which is how he was taught: the finding, then the limit, then the source. It is clearer to read and it is the version that got him into a room with a man for a morning. Mrs Khoury asked why three sentences fail, and because a list invites a reader to take one item from it, and every reader does: three sentences are three objects, two of them can be left behind without anything looking broken, and the one that travels is the finding, because it is first and is the only one anybody wants. Mrs Oueidat asked about the one-sentence version, and three facts in one sentence, where taking the first clause out leaves the sentence with no subject and taking the last out leaves it with no source, so a reader with eleven centimetres either takes the whole of it or takes nothing, and both of those are acceptable to him. Mr Attar asked whether the second is not harder to read, and Mrs Khoury said it is slightly harder and is read by somebody who is being paid, which changes the arithmetic entirely, and the room should notice that this is the first time in the course that readability has been traded for anything. Dr Qabbani asked where the comma splice comes in, and it is the commonest repair and is not a repair, because three clauses joined by commas can be split at either comma and a typesetter will split them. Mrs Rizk asked how long is too long, and Mrs Oueidat said about forty words, and the test is not length but whether a reader can hold it in one breath group. Mr Tayara asked what happens with four facts, and then one of the four is not load-bearing and you find out which by removing each in turn. Mrs Tarabishi asked whether there is a case for keeping the limit separate, and Mrs Khoury said there is one and it is not politeness: where the limit is itself the finding. Mrs Ajouz asked whether the one-sentence version is not simply harder for everybody, and it is slightly harder for a reader who reads documents in order and no harder at all for a reader who takes one sentence out of three hundred. And Mr Shihabi asked what changed between the third version and the fourth, and the third had the source in a footnote and the fourth has it in the sentence, because the footnote was removed by a typesetter from a bundle of nine hundred pages, without malice, and for six weeks the finding existed in that bundle with no source attached, and he discovered it only when somebody asked where the measurement had come from._'));
out.push(p('**Listener task:** write your partner\'s one sentence and name the clause that could not be removed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four versions Mr Zahreddine kept of the same finding. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _four versions of one finding_ · _kept for the record_ · **2 October**',
  '**Version 1, as I was taught.** _The bolts measure M12. I reached forty-one of the fifty-two positions on 7 August. The field notes are at annexe 2._ ⚠ **Three sentences, three objects, and the second and third can be left behind without anything looking broken.** **The first one travelled into a schedule and the other two did not.**',
  '**Version 2, the comma splice.** _On the forty-one positions reached, the bolts measure M12, the field notes are at annexe 2._ ⚠ **One sentence to look at and three clauses to a typesetter.** **It can be cut at either comma and the first half stands perfectly well as a claim, which is the whole of the fault.**',
  '**Version 3, with the source in a footnote.** _On the forty-one positions I was able to reach on 7 August, the bolts measure M12._ **With a footnote to the field notes.** ⚠ **The footnote was removed from a bundle of nine hundred pages by a typesetter, without malice, and for six weeks the finding existed in that bundle with no source** — **and I discovered it only when somebody asked where the measurement had come from.**',
  '**Version 4, which I now use.** _On the forty-one positions I was able to reach on 7 August, the bolts measure M12, as recorded in the field notes at annexe 2._ ⚠ **Twenty-eight words, one breath, three grammatical joins and no removable clause.**',
  '**The removal test, run on version 4.** **Take out the first clause and the sentence has no subject.** **Take out the measurement and there is no finding.** ⚠ **Take out the last clause and there is no source, and a finding without a source is an opinion.** **Nothing in it can go.**',
  '**The fifth fact, which I keep out.** **The gauge was calibrated in June and the certificate is at annexe 4.** ⚠ **It goes in its own sentence, because removing it from version 4 leaves version 4 standing** — **and that is the test of whether a fact is load-bearing, and it takes ten seconds and no judgement at all.**',
  '**What the four versions cost me.** **Version 1 cost a morning.** **Version 2 cost nothing, because nobody quoted it that year, which is luck and not evidence.** ⚠ **Version 3 cost six weeks of a finding standing unsourced in a bundle.** **Version 4 has been quoted twice and both times in full.**',
  '**What the four versions have in common, which I did not plan.** **Every one of them is a true account of the same measurement.** ⚠ **Not one of the four says anything false** — **and three of them can be made to say something false by somebody with eleven centimetres and no bad intentions at all, which is the whole subject of this note.**',
  '**And the thing I did not expect.** **Version 4 is harder to read than version 1 and I have stopped apologising for it.** ⚠ **Three colleagues have told me it is heavy going.** **All three read documents in order and none of them has ever had eleven centimetres and three hundred findings to put in it** — **and the reader I write for is the second kind.**',
]));
out.push(item('1', 'What happened to version 1 and what happened to the other two sentences with it?'));
out.push(item('2', 'What went wrong with version 3, and for how long?'));
out.push(item('3', 'How does he decide that the gauge calibration is a fifth fact and goes elsewhere?'));
out.push(writers([
  'Four versions of one finding: **version 1 as you were taught, with what travelled and what did not** → **the comma-splice version, and where it can be cut** → **the footnote version, and what a bundle did to it** → **the version you use, with its word count** → **the removal test run on it, clause by clause** → **the fifth fact, and why it is out** → **what each version cost** → **and the thing you did not expect.**',
  '⚠ **Print all four versions in full.** **A note that describes the progression cannot be used** — **and the four versions side by side make the argument in about forty seconds, which no amount of explanation does.**',
  '**Run the removal test in writing, clause by clause.** ⚠ _Take out the first clause and the sentence has no subject; take out the last and there is no source._ **The test is what makes the method transferable** — **and a reader who has watched it run once will run it on their own sentence without being told.**',
  '**Cost each version, including the one that cost nothing.** ⚠ _Version 2 cost nothing, because nobody quoted it that year, which is luck and not evidence._ **That sentence is the one that stops the note being a success story** — **and it is also the honest position, because most badly built sentences are never tested.**',
  '⚠ And **end on the objection you have accepted.** _Version 4 is harder to read and I have stopped apologising for it._ **Name who makes the objection and what kind of reader they are** — **because the trade is real, and a note that pretends the better sentence is also the prettier one will be disbelieved by anybody who reads both.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first two versions and the removal test (120 words or more).'));
out.push(p('**______________** · _versions of one finding_ · **______________**   **Version 1, as I was taught.** **______________.** ⚠ **Three sentences, three objects** — **and ______________ travelled while ______________ did not.**   **Version 2, the comma splice.** **______________.** ⚠ **It can be cut at ______________.**   **The removal test.** **Take out ______________ and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All versions printed in full, not described',
  'Grammatical joins only in the final version',
  'The removal test run clause by clause',
  'The fifth fact identified and kept out',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their final version**, in one breath, and the room tries to cut it in half.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the four versions in full, the removal test, the fifth fact, what each version cost, and the objection you have accepted.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every version printed in full, no comma splice in the final one, and the removal test run in writing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one trade.** **How many final versions could be said in one breath?** **Six of ten; the other four were rebuilt rather than repunctuated, and three of those contained a fifth fact.** **Then the question that ends the cycle: which of your three original sentences would a schedule have taken?** **Ten of ten said the first** — **and then Mr Zahreddine\'s six weeks, and the typesetter who meant no harm.**'));
out.push(hw('**Write your finding as one sentence with three or four facts in it, and run the removal test in writing.** ⚠ **Then do the harder half: give the sentence to somebody and ask them to shorten it to eleven words.** **In this class eight of ten could not be shortened without breaking and two could** — **and both of the two had a fifth fact still inside them.** **Bring the sentence and what they produced.** **19.4 says what you did not examine, in the document itself**, so bring a list of everything you did not do on your last piece of work.'));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  What I did not examine'));
out.push(p('**Function:** saying what you did not examine, in the document itself   ·   **Grammar:** the scope paragraph — what was not done, and the reason for each   ·   **Pronunciation:** the scope read as a list of facts, with no apology in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **three things you did not do on your last piece of work.** ⚠ **Three, with a reason for each.** **In this class the reasons divided into three kinds — no access, not instructed, not possible — and four of thirty had no reason at all, which is the fourth kind and the one that matters.** **Your teacher writes the thirty on the board in four columns.**'));
out.push(board('I examined eleven of nineteen bays.', 'Eight bays: sheeted scaffold, no access on 3 May.'));
out.push(p('**b**  Which two belong in a scope paragraph? **1** _I did what I could in the time available._  **2** _I did not examine the eight bays behind the sheeted scaffold, which could not be entered on 3 May; I was not instructed to examine the roof slab; and the reinforcement cannot be examined without opening the floor._  **3** _My examination was necessarily limited._  **4** _I did not read the 2017 correspondence, which the office holds and which I did not ask for; and I did not interview the two members of staff who were on leave._  **5** _I have of course not seen everything._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the scope paragraph does?   **A** protects the writer from criticism   **B** **protects the finding**, by answering the first question in advance and in the writer\'s own words   **C** shortens the document'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say is the first question he is asked?   **2** What does Mrs Khoury say about the four omissions with no reason?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  The scope paragraph, near the front', [
  ['Ms Huda', 'Mr Zahreddine now puts a scope paragraph on the second page.'],
  ['Mr Zahreddine', '⚠ **On the second page, and for two statements it was in an annexe, which is the same as not writing it.** **The first question I am asked, every time, is _did you examine X_** — **and X is always something I did not examine, because the other side has read the statement looking for what is not in it.**'],
  ['Mrs Khoury', 'And if the scope is in the document?'],
  ['Mr Zahreddine', '⚠ **Then the question is already answered, in my words, with my reason, and the exchange is eleven seconds instead of nine minutes.** **_Did you examine the roof slab?_** _No; I was not instructed to, and I say so at paragraph 4._ **There is nowhere for the question to go.**'],
  ['Mrs Oueidat', 'The reason matters more than the omission.'],
  ['Mr Zahreddine', '⚠ **The reason is the whole paragraph and there are three good ones and one bad one.** **No access.** **Not instructed.** **Not possible without something nobody has authorised.** **And then the fourth: no reason, which means I did not think of it** — **and that one has to be written down too, in those words.**'],
  ['Mr Attar', 'You write down that you did not think of it?'],
  ['Mrs Khoury', '⚠ **She does and it is the hardest line in the unit.** **In this class four of thirty omissions had no reason at all, and every one of the four writers wanted to invent one** — **and an invented reason is the only sentence in a scope paragraph that can be destroyed, because the other side can usually show that access was available or that the instruction did cover it.**'],
  ['Dr Qabbani', 'So the honest version is safer.'],
  ['Mrs Oueidat', '⚠ **It is safer and it is also uncomfortable in a way the room should be warned about.** **_I did not examine the 2017 correspondence; the office holds it and I did not ask for it._** **That sentence invites a question about your competence and answers it: you did not ask.** **An invented reason invites a question about your honesty, and there is no answer to that one at all.**'],
  ['Mrs Rizk', 'How long should it be?'],
  ['Mr Zahreddine', '⚠ **Mine runs to about ninety words and lists between three and six things.** **Fewer than three and I have not thought about it.** **More than about eight and the statement is the wrong document** — **and twice I have written back to say that the instruction is too wide for one examination, which is a letter and not a scope paragraph.**'],
  ['Mr Tayara', 'Does it weaken what you did find?'],
  ['Mrs Khoury', '⚠ **It is the opposite, and this is the sentence of the cycle.** **A finding with no scope is a finding about everything** — **and a finding about everything is destroyed by one bay, one gap, one unexamined document.** **A finding with a scope is a finding about eleven bays, and it is as strong as the eleven.**'],
  ['Mrs Tarabishi', 'Where exactly does it go?'],
  ['Mr Zahreddine', '⚠ **Before the findings and after the instruction, and never in an annexe.** **A reader who reaches your finding without having read your scope has read a finding about everything** — **and that is the reading they will quote, and they will be entitled to.**'],
  ['Mr Shihabi', 'Has anybody ever used it against you?'],
  ['Mr Zahreddine', '🔊 ⚠ **Once, and it was the most useful morning of the four.** **He read my scope paragraph aloud and asked why I had not asked for the correspondence** — **and I said that I should have, and that was the end of it, and the finding about the eleven bays was not touched.** **The scope paragraph had moved the argument off my finding and on to my diary, which is where I would always rather have it.**'],
]));
out.push(sp());
out.push(box('Language box – the scope paragraph', [
  '**Before the findings and after the instruction, never in an annexe.** ⚠ **A reader who reaches your finding without having read your scope has read a finding about everything** — **and that is the reading they will quote, and they will be entitled to.**',
  '**Three good reasons and one bad one, and all four are written down.** ⚠ **No access.** **Not instructed.** **Not possible without an authorisation nobody has given.** **And: no reason — I did not think of it** — **which is the hardest line in the unit and the only one that cannot be attacked.**',
  '**An invented reason is the only destructible sentence in a scope paragraph.** ⚠ **The other side can usually show that access was available or that the instruction did cover it** — **and an invented reason invites a question about your honesty, which has no answer, where the honest version invites one about your diary, which has.**',
  '**A finding with no scope is a finding about everything.** ⚠ **And a finding about everything is destroyed by one bay, one gap, one unexamined document.** **A finding with a scope is a finding about eleven bays** — **and it is exactly as strong as the eleven.**',
  '**Length: three to six items, about ninety words.** ⚠ **Fewer than three and you have not thought about it.** **More than about eight and the statement is the wrong document** — **and the right one is a letter saying that the instruction is too wide for a single examination.**',
  '**And the question it answers in advance is the first one you will be asked.** ⚠ **_Did you examine X?_** _No; I was not instructed to, and I say so at paragraph 4._ **Eleven seconds instead of nine minutes, and nowhere for the question to go.**',
  '**Pronunciation.** 🔊 **Track 19.8** **Read the scope paragraph as a list of facts, flat, with no fall on _not_ and no apology anywhere.** ⚠ **A fall on _not_ makes each item a confession** — **and a confession invites sympathy or contempt, where a list invites a reader to check the next item against their own question.**',
  '**Practise:** Say what you did not do, with the reason. **1** no access  **2** not instructed  **3** not possible without authorisation  **4** no reason at all  **5** an instruction too wide for one examination',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the omission from the card. B writes it as **a scope item with its reason**, and names **which of the four kinds of reason it is.** ⚠ **Two rows on each card have no reason available** — **and there B writes the fourth kind in those words.** Change cards.'));
out.push(table(['Card A – the omission', 'Card B – the omission'], [
  ['_Eight bays behind a sheeted scaffold._', '_The roof slab, not mentioned in the instruction._'],
  ['_⚠ The 2017 correspondence, held by the office._', '_⚠ The two staff who were on leave._'],
  ['_The reinforcement, which needs the floor opened._', '_The night-shift records, which are not kept._'],
  ['_⚠ The branch\'s second store, which I forgot._', '_⚠ The four sessions nobody mentioned to me._'],
  ['_An instruction covering nineteen bays in one day._', '_An instruction covering four years of correspondence._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the scope item, the reason, and which of the four kinds. ⚠ **Rows 2 and 4 on both cards have no reason available and the room must write the fourth kind in plain words** — **and will want to supply _time was short_, which is invented and the most easily destroyed.** **Rows 5 are not scope items at all**: both are instructions too wide for one examination, **and the answer is a letter and not a paragraph.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thirty omissions on the board** and write **your own three as scope items**, each with its reason named by kind. ⚠ **Then place the paragraph: after the instruction and before the findings.** **In this class seven of ten had been putting their limits at the end of a report and three in an annexe** — **and all three of the annexes had been dropped at least once by somebody reproducing the document.**'));
out.push(p('**b**  Swap. Your partner reads **only your findings, without your scope**, and says **what your finding appears to be about.** ⚠ **Then they read the scope and say it again.** **In this class the two answers differed in nine cases of ten** — **and the difference is the whole of what the paragraph is for.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine now puts a scope paragraph on the second page, and for two statements it was in an annexe, which is the same as not writing it. The first question he is asked, every time, is did you examine X, and X is always something he did not examine, because the other side has read the statement looking for what is not in it. Mrs Khoury asked what happens if the scope is in the document, and then the question is already answered, in his words, with his reason, and the exchange is eleven seconds instead of nine minutes. Mrs Oueidat said the reason matters more than the omission, and the reason is the whole paragraph, and there are three good ones and one bad one: no access, not instructed, not possible without something nobody has authorised, and then the fourth, which is no reason, meaning he did not think of it, and that one has to be written down too, in those words. Mr Attar asked whether you write down that you did not think of it, and Mrs Khoury said you do and it is the hardest line in the unit, because four of thirty omissions in this class had no reason at all and every one of the four writers wanted to invent one. Dr Qabbani said so the honest version is safer, and Mrs Oueidat said it is safer and also uncomfortable: the honest sentence invites a question about your competence and answers it, where an invented reason invites a question about your honesty, which has no answer at all. Mrs Rizk asked how long it should be, and about ninety words and between three and six items. Mr Tayara asked whether it weakens what you did find, and Mrs Khoury said it is the opposite, because a finding with no scope is a finding about everything and is destroyed by one bay, where a finding with a scope is a finding about eleven bays and is as strong as the eleven. Mrs Tarabishi asked where exactly it goes, and before the findings and after the instruction, and never in an annexe. Mrs Ajouz asked how long the paragraph takes to write, and forty minutes and one telephone call to confirm that the correspondence exists, which is why the paragraph names two reports rather than saying some correspondence. And Mr Shihabi asked whether anybody has ever used it against him, and once, and it was the most useful morning of the four: he was asked why he had not requested the correspondence, he said that he should have, and that was the end of it, and the finding about the eleven bays was not touched, because the scope paragraph had moved the argument off his finding and on to his diary, which is where he would always rather have it._'));
out.push(p('**Listener task:** write your partner\'s three scope items and the kind of reason attached to each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the scope section of Mr Zahreddine\'s fourth statement. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _statement in the matter of the school rebuild_ · _paragraphs 3 to 5_ · **8 October**',
  '**3 · What I was instructed to do.** **To examine the first-floor slab and its supports and to report on compliance with the specified minimum thickness.** ⚠ **The instruction is dated 28 April and is at annexe 1 in full.** **I have examined nothing outside it except where paragraph 5 says otherwise.**',
  '**4 · What I did not examine, and why.** **I did not examine the eight bays behind the sheeted scaffold: they could not be entered on 3 May and no second visit was arranged.** ⚠ **I did not examine the roof slab: I was not instructed to.** **I did not examine the reinforcement: it cannot be examined without opening the floor, which nobody has authorised and which I have not recommended.**',
  '**4a · One omission for which I have no reason.** ⚠ **I did not ask for the 2017 correspondence, which the office holds and which I now understand includes two reports on the same slab.** **I did not think of it.** **I am not able to say whether it would have altered what follows, and I shall not guess.**',
  '**5 · One thing I examined that I was not instructed to.** **The stair landing at the east end, because the sheeting had been moved and it was in front of me.** ⚠ **I report it because omitting a thing I looked at is worse than reporting a thing I was not asked for.**',
  '**6 · What follows from paragraphs 3 to 5.** **Every finding in this statement is a finding about the eleven bays listed at annexe 2 and about nothing else.** ⚠ **A reader who takes a finding from this statement and applies it to the nineteen bays of the floor has gone beyond what I have written, and I say so here rather than in a footnote.**',
  '**7 · And what I would do differently.** **I should have asked for a second visit on 3 May while the scaffold was still standing.** ⚠ **I did not, and the eight bays are therefore unexamined for a reason that is mine** — **and that is the only sentence in this statement that is about me.**',
  '**8 · What paragraph 4 does not say.** **It does not say that the eight bays are compliant and it does not say that they are not.** ⚠ **An unexamined bay is unexamined, and a reader who takes my finding of non-compliance and applies it to the eight has done the one thing paragraph 6 forbids** — **and a reader who takes my silence as a finding of compliance has done the same thing in the other direction, which nobody warns about.**',
  '**9 · What the scope paragraph cost me to write.** **Forty minutes and one telephone call, which was to the office to confirm that the correspondence exists.** ⚠ **The call is the reason paragraph 4a names two reports rather than saying _some correspondence_** — **and a scope item with a figure in it cannot be met with the suggestion that the writer is exaggerating.**',
  '**A note on the position of paragraph 4.** **In my first two statements the equivalent paragraph was at annexe 3.** ⚠ **On both occasions the statement was reproduced without its annexes by somebody who had no reason to think they mattered** — **and a finding without its scope is a finding about everything, which is not what I wrote and is what those readers had.**',
]));
out.push(item('1', 'What does paragraph 4a say, and what does it refuse to do?'));
out.push(item('2', 'Why does he report the stair landing, which he was not instructed to examine?'));
out.push(item('3', 'What happened to the equivalent paragraph in his first two statements?'));
out.push(writers([
  'A scope section: **what you were instructed to do, with the instruction\'s date** → **what you did not examine, with a reason of a named kind for each** → **the omission for which you have no reason, in plain words** → **anything you examined without instruction, and why you report it** → **what follows for every finding in the document** → **what you would do differently** → **and a note on the position of the paragraph.**',
  '⚠ **Quote the instruction and date it.** _The instruction is dated 28 April and is at annexe 1 in full._ **A scope paragraph with no instruction behind it is a list of things the writer happens to have done.**',
  '**Write the unreasoned omission in plain words and refuse to speculate.** ⚠ _I did not think of it. I am not able to say whether it would have altered what follows, and I shall not guess._ **A writer who speculates about what they did not see has produced an opinion with no observation under it.**',
  '**Report what you examined without being asked.** ⚠ _Omitting a thing I looked at is worse than reporting a thing I was not asked for._ **A document recording only the instructed work has a gap the writer put there on purpose, which is the worst kind.**',
  '⚠ And **say what every finding is a finding about.** _Every finding in this statement is a finding about the eleven bays listed at annexe 2 and about nothing else._ **One sentence, in the body and not in a footnote** — **and it is the sentence that converts a limitation into a boundary, which is the difference between being weakened and being precise.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the instruction and the scope paragraph (120 words or more).'));
out.push(p('**______________** · _statement in the matter of _______________ · **______________**   **___ · What I was instructed to do.** **______________.** ⚠ **The instruction is dated ______________.**   **___ · What I did not examine, and why.** **I did not examine ______________: ______________.** **I did not examine ______________: I was not instructed to.** ⚠ **I did not examine ______________: ______________.**   **___a · One omission for which I have no reason.** ⚠ **______________.** **I did not think of it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The instruction quoted and dated',
  'A reason of a named kind under every omission',
  'The unreasoned omission in plain words, with no speculation',
  'One sentence saying what every finding is a finding about',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their findings, without the scope**, and the room says what the finding appears to be about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole scope section (260 words or more), to the shape in the writer\'s box: the instruction, the omissions with their reasons, the unreasoned one, the uninstructed work, what every finding is about, what you would do differently, and the note on position.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a reason of a named kind under every omission, the unreasoned one written as such, and the scope before the findings.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count and one demonstration.** **How many students had been putting their limits at the end or in an annexe?** **Seven at the end, three in an annexe, and all three annexes had been dropped at least once.** **Then run the demonstration again in front of the room: read a finding without its scope and then with it, and ask what the finding is about each time** — **nine of ten pairs got two different answers.** **Then Mr Zahreddine\'s most useful morning.**'));
out.push(hw('**Write your scope paragraph with three to six items, each with a reason of a named kind.** ⚠ **Then do the harder half: find the omission for which you have no reason, and write it in those words.** **In this class four of thirty omissions had no reason and every one of the four writers first tried to invent one** — **and the invented reasons were _time_, _time_, _the client_ and _the weather_.** **Bring the paragraph and the unreasoned item.** **19.5 writes what you observed separately from what you concluded**, so bring a paragraph of yours that contains both.'));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  Observed, and concluded'));
out.push(p('**Function:** writing what you observed separately from what you concluded   ·   **Grammar:** two sections, and the one sentence that joins them   ·   **Pronunciation:** the joining sentence read at the same weight as the observations'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one paragraph of yours that contains both an observation and a conclusion**, read aloud. ⚠ **Then say, for each sentence, whether you saw it or worked it out.** **In this class eight of ten paragraphs had at least one sentence the writer could not place immediately** — **and your teacher writes those sentences on the board, because they are the subject of the cycle.**'));
out.push(board('The slab is thin at eleven bays.', 'Measured: 148mm. Concluded: below the specified minimum.'));
out.push(p('**b**  Which two separate the two things? **1** _The slab is clearly substandard throughout._  **2** _Observed: at the eleven bays listed, the slab measures between 146 and 151 millimetres. Concluded: the slab at those eleven bays is below the specified minimum of 160 millimetres._  **3** _It was obvious on inspection that the work was poor._  **4** _Observed: three days in February have no entry, and the entries either side are in the relief clerk\'s hand. Concluded: the gaps fall in a period when the regular keeper was absent._  **5** _In my professional judgement the record was not properly kept._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the two sections are for?   **A** tidiness   **B** **so that one question can be answered instantly** — did you see that, or did you work it out   **C** making the document longer'));
out.push(p('**b**  Listen again. **1** What does Dr Qabbani say happens to a witness who cannot answer that question instantly?   **2** What does Mrs Khoury say the joining sentence must name?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  Did you see it, or did you work it out', [
  ['Ms Huda', 'Dr Qabbani writes reports that are read in claims.'],
  ['Dr Qabbani', '⚠ **And medicine solved this problem before any of us were born, which is worth saying first.** **A clinical note has a section for what was observed and a section for what was concluded, and the two are never in the same sentence** — **and the reason is not elegance: it is that one question destroys a paragraph that mixes them.**'],
  ['Mrs Khoury', 'The question being?'],
  ['Dr Qabbani', '⚠ **_Is that something you saw, or something you worked out?_** **A witness who answers in under a second has lost nothing.** **A witness who pauses has told the room that the paragraph is an inference wearing the clothes of an observation** — **and the whole paragraph then goes, including the part that was observed.**'],
  ['Mr Zahreddine', 'Mine used to mix them in one sentence.'],
  ['Mr Zahreddine', '⚠ **_The slab is thin at eleven bays_ is a conclusion with a measurement hidden inside it.** **What I saw was a number: between a hundred and forty-six and a hundred and fifty-one millimetres.** **What I concluded was that the number is below the specified minimum** — **and the specification is a document and not an observation, which is the part nobody notices.**'],
  ['Mrs Oueidat', 'So the conclusion rests on two things.'],
  ['Mrs Khoury', '⚠ **On an observation and on a document, and the joining sentence has to name both.** **That is the part the room will get wrong.** _I conclude from the measurements at paragraph 7 and from the specification at annexe 1 that the slab at those eleven bays is below the minimum._ **Observation, document, conclusion** — **and the conclusion has nowhere else to come from.**'],
  ['Mr Attar', 'Is _therefore_ allowed anywhere else?'],
  ['Dr Qabbani', '⚠ **In the joining sentence and nowhere else in the document, and I enforce that on myself with a search.** **Every other _therefore_ in a report of mine is a conclusion that has wandered into the observation section** — **and the search takes four seconds and has found something in eleven of my last fourteen reports.**'],
  ['Mrs Rizk', 'What about the observations you are not sure of?'],
  ['Dr Qabbani', '⚠ **They are observations with a qualification, and the qualification is part of the observation and not a conclusion.** **_The patient reported pain on the right side; I did not test the left._** **That is two observations and one scope item** — **and a reader who takes the first and leaves the second has gone beyond the document, which is 19.4\'s sentence doing a second job.**'],
  ['Mr Tayara', 'Does the order matter?'],
  ['Mrs Khoury', '⚠ **Observations first, always, and the room should know why rather than be told.** **A reader who has the conclusion first reads the observations as support for it and stops noticing which of them are missing** — **and a reader who has the observations first is in a position to reach a different conclusion, which is the condition of your conclusion being worth anything.**'],
  ['Mrs Tarabishi', 'That is an uncomfortable principle.'],
  ['Mrs Oueidat', '⚠ **It is the uncomfortable one in this unit and the room should sit with it for a minute.** **A document built this way lets a reader disagree with your conclusion while accepting every one of your observations** — **and a document that does not let them do that has not given them the observations at all, whatever it looks like on the page.**'],
  ['Mr Shihabi', 'Has a reader ever disagreed with your conclusion and kept your observations?'],
  ['Dr Qabbani', '🔊 ⚠ **Twice, and both times the other side\'s expert used my observation section in his own report, with my name on it.** **I had expected to mind that and I did not.** **The observations were not in dispute by then** — **and the only argument left was the one I had wanted to have, which was about the inference, and it was a short one.**'],
]));
out.push(sp());
out.push(box('Language box – observed, concluded, and the sentence between', [
  '**Two sections, observations first, and the two never in the same sentence.** ⚠ **The question that destroys a mixed paragraph is one question: _is that something you saw, or something you worked out?_** **A witness who pauses has lost the whole paragraph, including the part that was observed.**',
  '**A conclusion usually rests on an observation and a document, and the joining sentence names both.** ⚠ _I conclude from the measurements at paragraph 7 and from the specification at annexe 1 that the slab at those eleven bays is below the minimum._ **Observation, document, conclusion** — **and the specification is not an observation, which is the part nobody notices.**',
  '**_Therefore_ belongs in the joining sentence and nowhere else.** ⚠ **Run the search: every other _therefore_ in the document is a conclusion that has wandered into the observation section.** **It takes four seconds and it found something in eleven of fourteen reports.**',
  '**An uncertain observation is an observation with a qualification, not a conclusion.** ⚠ _The patient reported pain on the right side; I did not test the left._ **Two observations and one scope item** — **and a reader who takes the first and leaves the second has gone beyond the document.**',
  '**Observations first, and the reason is not habit.** ⚠ **A reader who has the conclusion first reads the observations as support and stops noticing which are missing.** **A reader who has the observations first can reach a different conclusion** — **which is the condition of your conclusion being worth anything.**',
  '**And the uncomfortable consequence, which is the point of the cycle.** ⚠ **A document built this way lets a reader accept every observation and reject your conclusion.** **A document that does not let them do that has not given them the observations at all** — **whatever it looks like on the page.**',
  '**Pronunciation.** 🔊 **Track 19.10** **Read the joining sentence at the same weight as the observations around it, with no lift on _conclude_.** ⚠ **A lift on _conclude_ announces the arrival of the important part** — **and the important part, to the reader you are writing for, is the paragraph before it.**',
  '**Practise:** Observed, concluded, joined. **1** a measurement against a specification  **2** a gap against a roster  **3** a count against a return  **4** an uncertain observation with its qualification  **5** a conclusion a reader could reject while keeping your observations',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the mixed sentence from the card. B splits it into **observed** and **concluded**, and gives **the joining sentence with both sources named.** ⚠ **Two rows on each card are conclusions with no observation in them at all** — **and there B says so and asks what was seen.** Change cards.'));
out.push(table(['Card A – the mixed sentence', 'Card B – the mixed sentence'], [
  ['_The slab is thin at eleven bays._', '_The record was not properly kept._'],
  ['_⚠ The work was clearly substandard._', '_⚠ In my judgement the branch is non-compliant._'],
  ['_The count of twenty-six is wrong._', '_The translation is unreliable in places._'],
  ['_⚠ It was obvious on inspection._', '_⚠ The explanation was plainly inadequate._'],
  ['_The patient reported pain on the right side._', '_Three days in February have no entry._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the observation, the conclusion, and both sources in the joining sentence. ⚠ **Rows 2 and 4 on both cards are conclusions with nothing observed under them, and B must ask what was seen** — **and in two of the four the honest answer is that the writer saw a general impression, which is not an observation and cannot be reported as one.** **Rows 5 are already observations and need no splitting**, which the room will not believe and should be made to check.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your paragraph** and split it into the two sections. ⚠ **Then write the joining sentence, naming the observation and the document it rests on.** **Then run the search for _therefore_.** **In this class seven of ten paragraphs had a _therefore_ or a _so_ outside the joining sentence** — **and in five of the seven the sentence it was in turned out to be a conclusion sitting in the observation section.**'));
out.push(p('**b**  Swap. Your partner asks, of each sentence in your observation section: **did you see that, or did you work it out?** ⚠ **Time the answers.** **Then the harder question: could they accept all your observations and reject your conclusion?** — **and in this class three of ten documents did not allow it, which is the finding.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani writes reports that are read in claims, and medicine solved this problem before any of us were born, which is worth saying first: a clinical note has a section for what was observed and a section for what was concluded, and the two are never in the same sentence, and the reason is not elegance but that one question destroys a paragraph that mixes them. Mrs Khoury asked what the question is, and is that something you saw or something you worked out: a witness who answers in under a second has lost nothing, and a witness who pauses has told the room that the paragraph is an inference wearing the clothes of an observation, and the whole paragraph then goes, including the part that was observed. Mr Zahreddine said his used to mix them in one sentence, and the slab is thin at eleven bays is a conclusion with a measurement hidden inside it: what he saw was a number, and what he concluded was that the number is below the specified minimum, and the specification is a document and not an observation. Mrs Oueidat said so the conclusion rests on two things, and Mrs Khoury said on an observation and on a document, and the joining sentence has to name both, which is the part the room will get wrong. Mr Attar asked whether therefore is allowed anywhere else, and in the joining sentence and nowhere else, and Dr Qabbani enforces it with a search that takes four seconds and has found something in eleven of his last fourteen reports. Mrs Rizk asked about observations he is not sure of, and they are observations with a qualification, and the qualification is part of the observation and not a conclusion. Mr Tayara asked whether the order matters, and Mrs Khoury said observations first, always, because a reader who has the conclusion first reads the observations as support for it and stops noticing which of them are missing. Mrs Tarabishi said that is an uncomfortable principle, and Mrs Oueidat said it is the uncomfortable one in the unit: a document built this way lets a reader accept every observation and reject the conclusion, and a document that does not let them do that has not given them the observations at all. And Dr Qabbani said a reader has done it twice, and both times the other side\'s expert used his observation section in his own report, with his name on it, and he had expected to mind and did not._'));
out.push(p('**Listener task:** write your partner\'s joining sentence and name both of its sources.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two sections of Dr Qabbani\'s report and the sentence between them. Answer the questions.'));
out.push(model([
  '**H. QABBANI** · _report on a cold-chain failure_ · _sections 4, 5 and 6_ · **12 October**',
  '**4 · Observed.** **The store thermometer read 11.4 degrees at 09.20 on 3 October.** **The day-book records readings at 08.00 and 16.00 on each of the preceding nine days, all between 2 and 7 degrees.** ⚠ **There is no reading for 2 October.** **The compressor was running at 09.20 and the door seal is torn along about 40 millimetres of its upper edge.** **Two cartons on the upper shelf were at 9.8 degrees when I measured them at 09.35.**',
  '**4a · Observed, with a qualification.** ⚠ **The thermometer is the store\'s own and I did not verify it against a second instrument, because there was not one on the premises.** **The reading of 11.4 is therefore the store\'s reading and not mine.**',
  '**5 · The sentence that joins the two sections.** ⚠ **I conclude from the readings at section 4, from the absence of a reading for 2 October, and from the manufacturer\'s storage range at annexe 2, that the two cartons were held above the permitted range for a period that cannot be established from the records available.**',
  '**6 · Concluded.** **The two cartons should be treated as outside the permitted range.** ⚠ **The period cannot be established and I do not estimate it.** **The torn seal is consistent with the readings and is not evidence of the period, because a seal of that kind may be torn for weeks without a reading moving.**',
  '**6a · What I do not conclude.** **I do not conclude that the remaining stock is affected: I measured two cartons of nineteen and did not open the lower shelf.** ⚠ **I do not conclude that the keeper was absent on 2 October; there is no reading and there is no roster in the documents supplied.**',
  '**6c · The fifteen minutes between two readings.** **The store thermometer read 11.4 at 09.20 and the two cartons read 9.8 at 09.35.** ⚠ **The gap is in section 4 because somebody may need it and I cannot tell who** — **and an observation whose use I cannot see is still an observation, which is the difference between recording and arguing.**',
  '**A note on the order of the sections.** **The observations come first and they came first in the drafting as well, which is not the same thing.** ⚠ **In my first eleven reports I wrote the conclusion and then assembled the observations under it, and the two reports in which I was found to have missed something are both from that period** — **and in both cases what I missed was an observation that did not support the conclusion I had already written.**',
  '**6b · One observation I have not used.** **The torn seal.** ⚠ **It is in section 4 because I saw it and it is in no conclusion of mine, because a seal of that kind may be torn for weeks without a reading moving** — **and an observation that supports nothing still belongs in the observation section, which is the test of whether that section is a record or an argument.**',
  '**And the search I run before signing.** **Every _therefore_ and every _so_ outside section 5.** ⚠ **Eleven of my last fourteen reports had one, and in nine of the eleven it was in the observation section** — **and a _therefore_ in an observation section is a conclusion that has moved house.**',
]));
out.push(item('1', 'What does 4a say about the thermometer reading, and whose reading is it?'));
out.push(item('2', 'What three things does the joining sentence name as its sources?'));
out.push(item('3', 'What does he say about his first eleven reports, and what was missed in two of them?'));
out.push(writers([
  'A report in two sections: **observations, with times and figures** → **observations with a qualification, marked as such** → **the one joining sentence, naming every source** → **conclusions, including what cannot be established** → **what you do not conclude, with the reason** → **a note on the order in which you drafted it** → **and the search you run before signing.**',
  '⚠ **Put a time on every observation.** _11.4 degrees at 09.20; two cartons at 9.8 when I measured them at 09.35._ **An observation with no time is a condition and not an observation** — **and the fifteen minutes between those two readings is itself a fact somebody may need.**',
  '**Mark the uncertain observation as an observation, not as a hedge.** ⚠ _The thermometer is the store\'s own and I did not verify it. The reading is therefore the store\'s reading and not mine._ **Whose observation it is is part of the observation** — **and the sentence costs two lines and removes a whole line of attack.**',
  '**Name every source in the joining sentence, including the absences.** ⚠ _From the readings, from the absence of a reading for 2 October, and from the manufacturer\'s range at annexe 2._ **An absence can support a conclusion and must be named when it does** — **and a joining sentence with one source is almost always hiding a second.**',
  '⚠ And **write what you do not conclude, with the reason for each.** _I measured two cartons of nineteen and did not open the lower shelf._ **This is 19.4 inside the conclusion section** — **and it is the paragraph that stops a reader extending your conclusion to the stock you never saw, which they will otherwise do without noticing.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the observation section and the joining sentence (120 words or more).'));
out.push(p('**______________** · _report on _______________ · **______________**   **___ · Observed.** **______________ at ______________.** **______________.** ⚠ **There is no ______________.**   **___a · Observed, with a qualification.** ⚠ **______________, because ______________.** **The ______________ is therefore ______________ and not mine.**   **___ · The sentence that joins the two sections.** ⚠ **I conclude from ______________, from ______________, and from ______________, that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A time on every observation',
  'The uncertain observation marked, with whose it is',
  'Every source named in the joining sentence, absences included',
  'No _therefore_ anywhere but the joining sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their observation section**, and the room asks of each sentence: seen, or worked out?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both sections and the sentence between them (260 words or more), to the shape in the writer\'s box: observations with times, the qualified observation, the joining sentence, the conclusions, what you do not conclude, the drafting order, and the search.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a time on every observation, every source named in the joining sentence, and a reader able to reject the conclusion while keeping the observations.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one test.** **How many paragraphs had a _therefore_ outside the joining sentence?** **Seven of ten, and in five of the seven the sentence was a conclusion sitting in the observation section.** **Then the test that ends the cycle: could your partner accept every observation and reject your conclusion?** **Three of ten documents did not allow it** — **and then Dr Qabbani\'s two reports, and what the other side\'s expert did with his observation section.**'));
out.push(hw('**Write your two sections and the sentence between them**, and run the _therefore_ search. ⚠ **Then do the harder half: give the observation section alone to somebody and ask them what they would conclude from it.** **In this class four of ten reached a different conclusion from the writer\'s** — **and in two of the four the writer changed their own conclusion, which is the best thing that happened in the cycle.** **Bring both conclusions.** **19.6 writes the statement that will be read by somebody paid to find its gap**, so bring everything you have written for this unit.'));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  The statement that will be attacked'));
out.push(p('**Function:** writing the statement that will be read by somebody paid to find its gap   ·   **Grammar:** instruction, scope, observation, conclusion, limit — in that order   ·   **Pronunciation:** the whole statement read flat, in the other side\'s voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the five parts, in order, from memory.** ⚠ **Instruction, scope, observation, conclusion, limit.** **In this class six of ten gave the five and four left out the scope** — **and the four are the ones to watch for the rest of the lesson, because leaving out the scope is the one fault this unit cannot repair afterwards.**'));
out.push(board('A statement in five parts.', 'And the order is the order it will be attacked in.'));
out.push(p('**b**  Which two orders are right? **1** _Conclusion, observations, scope, instruction._  **2** _Instruction, scope, observations, joining sentence, conclusions, and what I do not conclude._  **3** _Observations, conclusion, and the scope in an annexe._  **4** _What I was asked, what I did not examine, what I saw, what I infer and from what, and the boundary of every finding._  **5** _Scope, conclusion, observations, instruction._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the order is?   **A** the order a reader finds easiest   **B** **the order in which the document will be attacked**, so that each answer is already in place   **C** the order the work was done in'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say about the number of pages?   **2** What does Mrs Khoury say the statement must do for the party that commissioned it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  Five parts, in the order of the attack', [
  ['Ms Huda', 'Mr Zahreddine signs his fifth statement this week.'],
  ['Mr Zahreddine', '⚠ **And the five parts are not a style: they are the order in which a man with a highlighter goes through it.** **What were you asked.** **What did you not look at.** **What did you see.** **How did you get from that to this.** **And what is your finding a finding about.** **Five questions, and he asks them in that order every time.**'],
  ['Mrs Khoury', 'So the document answers them in advance.'],
  ['Mr Zahreddine', '⚠ **In advance and in my words, which is the only advantage a witness ever has.** **The same answer given in the document is a paragraph.** **Given in the room it is an admission** — **and the words are identical, and the difference is about nine minutes and the order in which the room hears them.**'],
  ['Mrs Oueidat', 'How long is a statement?'],
  ['Mr Zahreddine', '⚠ **Mine run between nine hundred and thirteen hundred words and the fourth one was two thousand four hundred.** **The two thousand four hundred was the worst of the five** — **not because it was long, but because at that length I had started explaining the method, and the method section was where all four of the morning\'s questions came from.**'],
  ['Mr Attar', 'The method is a weakness?'],
  ['Mrs Khoury', '⚠ **An explained method is a weakness and a stated method is not, and the distinction is exact.** **_Measured with a gauge calibrated in June, certificate at annexe 4_ is a statement of method in eleven words.** **Three paragraphs about why that gauge is the right instrument is an argument** — **and an argument invites a counter-argument, where a certificate invites nothing.**'],
  ['Dr Qabbani', 'And the party who commissioned it?'],
  ['Mrs Khoury', '⚠ **This is the part that will surprise the room and it is the whole reason the unit ends where it does.** **A statement with a hole in it is worth nothing to the party that paid for it** — **because the hole is the first thing the other side finds, and the party is then holding a document that has been destroyed in public.** **A statement that states its own limits is worth what it says.**'],
  ['Mrs Rizk', 'Do they ever ask you to take something out?'],
  ['Mr Zahreddine', '⚠ **Twice, and both times the paragraph they wanted out was the one that made the favourable finding credible.** **That is not a coincidence and it is 19.7.** **A finding that stands alone, with no limit and nothing against it, reads as a document written for a side** — **and a man with a highlighter does not have to work at that either.**'],
  ['Mr Tayara', 'What do you do when they ask?'],
  ['Mr Zahreddine', '⚠ **I write back in two paragraphs and the first is the one that matters: here is the paragraph the other side will use, and here is why it has to stay.** **The second is what I will change, which is usually a word or two of nothing.** **Both times the paragraph stayed** — **and once the instructing party told me afterwards that they had asked in order to see what I would say.**'],
  ['Mrs Tarabishi', 'Is there anything you will not put in?'],
  ['Mrs Oueidat', '⚠ **Speculation, and the room should notice how narrow that is.** **A finding you cannot support is out.** **A period you cannot establish is reported as not established and not estimated.** **And an opinion about anybody\'s conduct is out whoever asks for it** — **because a witness who has given one opinion about conduct will be asked for ten more and will have to refuse nine of them in front of everybody.**'],
  ['Mrs Rizk', '⚠ **And the order of the five is fixed?** **It is fixed because the questions are fixed, and the one that moves is the scope**: **two of my five had it at the end and both were reproduced without it.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the eleven minutes.** **Reading the whole statement aloud, flat, in his voice, before I sign** — **eleven minutes for nine hundred words, five statements, and it has found something every time, including once a sentence that had been read by two colleagues and a lawyer and signed off by both.**'],
]));
out.push(sp());
out.push(box('Language box – the statement in five parts', [
  '**Instruction, scope, observations, joining sentence, conclusions — and what you do not conclude.** ⚠ **The order is not a style: it is the order of the five questions a reader with a highlighter asks, and they ask them in that order every time.**',
  '**The same answer is a paragraph in the document and an admission in the room.** ⚠ **The words are identical.** **The difference is about nine minutes and the order in which the room hears them** — **and that is the only advantage a witness has.**',
  '**State the method; do not explain it.** ⚠ **_Measured with a gauge calibrated in June, certificate at annexe 4_ is eleven words.** **Three paragraphs on why that gauge is the right instrument is an argument** — **and an argument invites a counter-argument, where a certificate invites nothing.**',
  '**A statement with a hole in it is worth nothing to the party that paid for it.** ⚠ **The hole is the first thing the other side finds, and the party is then holding a document that has been destroyed in public** — **and this is the reason the method is not a kind of honesty: it is what the document is for.**',
  '**Speculation is out, and the category is narrow.** ⚠ **A finding you cannot support; a period you cannot establish, which is reported as not established and not estimated; and an opinion about anybody\'s conduct, whoever asks for it** — **because a witness who gives one will be asked for ten and will refuse nine in front of everybody.**',
  '**And when the instructing party asks for a paragraph to come out, answer in two paragraphs.** ⚠ **First: here is the paragraph the other side will use, and here is why it has to stay.** **Second: what you will change, which is usually a word of nothing.**',
  '**Pronunciation.** 🔊 **Track 19.12** **Read the whole statement aloud, flat, in the other side\'s voice, before you sign it.** ⚠ **Eleven minutes for nine hundred words.** **It has found something in every statement so far** — **including one sentence that had been read by two colleagues and a lawyer and signed off by both.**',
  '**Practise:** Build the five parts. **1** the instruction with its date  **2** the scope, three to six items  **3** observations with times  **4** the joining sentence  **5** what you do not conclude',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the question from the card — **one of the five a reader with a highlighter asks.** B says **which part of the statement answers it** and **reads the sentence that does.** ⚠ **Two rows on each card are questions no part of a statement should answer** — **and there B says so and why.** Change cards.'));
out.push(table(['Card A – the question from across the room', 'Card B – the question from across the room'], [
  ['_What were you asked to do?_', '_Did you examine the roof slab?_'],
  ['_⚠ Do you think the contractor was negligent?_', '_⚠ Would you have done it that way?_'],
  ['_What did you actually see?_', '_How did you get from that reading to that conclusion?_'],
  ['_⚠ How long had the seal been torn?_', '_⚠ What do you make of the other expert\'s report?_'],
  ['_Does your finding apply to the whole floor?_', '_Who measured the two positions you did not measure?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the part of the statement, and the sentence. ⚠ **Rows 2 and 4 on both cards must not be answered**: two are opinions about conduct, one asks for a period that cannot be established, and one asks for an opinion on another expert. **Rows 5 are the hardest**: one is answered by the boundary sentence of 19.4 and one by the observation section, **and the second is the only question whose honest answer names a colleague.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Assemble **your five parts** from the four cycles behind you. ⚠ **Instruction with a date; scope with three to six items; observations with times; the joining sentence; and what you do not conclude.** **Then count the words.** **In this class the statements ran from six hundred to nineteen hundred words** — **and the two longest both contained a method section, which the room should be asked to find.**'));
out.push(p('**b**  Swap. Your partner **reads your statement aloud, flat, in the other side\'s voice**, and stops at anything they would ask about. ⚠ **Time it.** **Then the harder question: which paragraph would the party that commissioned this ask you to remove?** — **and in this class eight of ten could name it immediately, which means they knew it was there.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine signs his fifth statement this week, and the five parts are not a style but the order in which a man with a highlighter goes through it: what were you asked, what did you not look at, what did you see, how did you get from that to this, and what is your finding a finding about. Five questions, in that order, every time. Mrs Khoury said so the document answers them in advance, and in advance and in his words, which is the only advantage a witness ever has, because the same answer given in the document is a paragraph and given in the room is an admission, and the words are identical. Mrs Oueidat asked how long a statement is, and between nine hundred and thirteen hundred words, and the fourth one was two thousand four hundred and was the worst of the five, not because it was long but because at that length he had started explaining the method, and the method section was where all four of the morning\'s questions came from. Mr Attar asked whether the method is a weakness, and Mrs Khoury said an explained method is a weakness and a stated method is not, and the distinction is exact: a certificate invites nothing and an argument invites a counter-argument. Dr Qabbani asked about the party who commissioned it, and Mrs Khoury said a statement with a hole in it is worth nothing to the party that paid for it, because the hole is the first thing the other side finds and the party is then holding a document that has been destroyed in public. Mrs Rizk asked whether they ever ask him to take something out, and twice, and both times the paragraph they wanted out was the one that made the favourable finding credible. Mr Tayara asked what he does, and he writes back in two paragraphs, and both times the paragraph stayed, and once the instructing party told him afterwards that they had asked in order to see what he would say. Mrs Tarabishi asked whether there is anything he will not put in, and Mrs Oueidat said speculation, and the category is narrow. Mrs Ajouz asked whether the order of the five parts is fixed, and it is fixed because the questions are fixed, and the one that moves is the scope: two of his five statements had it at the end and both were reproduced without it. And Mr Zahreddine said the thing he will take away is the eleven minutes of reading the whole statement aloud, flat, in the other side\'s voice, before he signs, which has found something in every statement so far, including once a sentence that two colleagues and a lawyer had read and signed off._'));
out.push(p('**Listener task:** write the five parts of your partner\'s statement and the paragraph they would be asked to remove.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Zahreddine\'s fifth statement. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _statement in the matter of the school rebuild_ · _nine hundred and forty words, of which these are the spine_ · **15 October**',
  '**1 · Instruction.** **To examine the first-floor slab and its supports and to report on compliance with the specified minimum thickness of 160 millimetres.** ⚠ **Instruction dated 28 April, at annexe 1 in full.**',
  '**2 · Scope.** **I did not examine the eight bays behind the sheeted scaffold: no access on 3 May and no second visit arranged.** **I did not examine the roof slab: not instructed.** **I did not examine the reinforcement: it cannot be examined without opening the floor.** ⚠ **And I did not ask for the 2017 correspondence, which the office holds; I did not think of it, and I am not able to say whether it would have altered what follows.**',
  '**3 · Observations.** **On 3 May, at the eleven bays listed at annexe 2, the slab measures between 146 and 151 millimetres, measured with a gauge calibrated in June, certificate at annexe 4.** ⚠ **Two of the eleven readings were taken by my assistant in my presence and are marked as such in the field notes.** **The east stair landing, which I was not instructed to examine, measures 163 millimetres.**',
  '**4 · The joining sentence.** ⚠ **I conclude from the readings at paragraph 3 and from the specification at annexe 1 that the slab at those eleven bays is below the specified minimum.**',
  '**5 · Conclusions.** **The slab at the eleven bays listed is below the specified minimum by between 9 and 14 millimetres.** ⚠ **Every finding in this statement is a finding about those eleven bays and about nothing else.**',
  '**6 · What I do not conclude.** **I do not conclude anything about the eight unexamined bays.** **I do not conclude that the floor is unsafe: that is a question of loading and I was not instructed on it.** ⚠ **And I do not conclude that the east landing is compliant, although it measures 163: one reading is not a finding and I have said so here rather than let the figure stand alone.**',
  '**7 · The paragraph I was asked to remove.** **Paragraph 6\'s last sentence, about the east landing.** ⚠ **I declined, in two paragraphs, and the first said why: a statement that reports a reading of 163 and does not say that one reading is not a finding has given the other side a sentence to put to me, and they will put it to me within four minutes.** **The paragraph stayed.**',
  '**7a · What I changed instead.** **One word: _approximately_ came out of paragraph 3, because the gauge reads to a tenth of a millimetre and there was nothing approximate about it.** ⚠ **That is the second of my two paragraphs, and it is the whole of what I conceded** — **and the instructing party accepted both paragraphs by return.**',
  '**8 · And the eleven minutes.** **I read this aloud, flat, before signing, and it took eleven minutes.** ⚠ **It found one thing: paragraph 3 originally said _the readings were taken on 3 May_, which does not say who took two of them** — **and that is the sentence a man with a highlighter would have found in about nine seconds.**',
]));
out.push(item('1', 'Why does he report the east stair landing at all, and why does he not conclude that it is compliant?'));
out.push(item('2', 'What did he say in the first of his two paragraphs declining the removal?'));
out.push(item('3', 'What did the eleven minutes find, and what was wrong with the original sentence?'));
out.push(writers([
  'A statement in five parts, plus two: **the instruction, dated** → **the scope, with a reason of a named kind for each omission** → **the observations, with times, instruments and whose reading each is** → **the single joining sentence** → **the conclusions, with the boundary sentence** → **what you do not conclude, with a reason each** → **the paragraph you were asked to remove, and the first of your two paragraphs declining** → **and the reading aloud, with what it found.**',
  '⚠ **Mark whose observation each one is.** _Two of the eleven readings were taken by my assistant in my presence and are marked as such in the field notes._ **A reading with no hand attached is your reading** — **and a witness who learns in the room that two of eleven were not his has lost all eleven.**',
  '**Report the inconvenient figure and then refuse to conclude from it.** ⚠ _The east landing measures 163; one reading is not a finding._ **A figure that helps the other side is safer inside your statement than outside it** — **and declining to conclude from it is what makes your other readings credible.**',
  '**Keep the method to one clause.** ⚠ _Measured with a gauge calibrated in June, certificate at annexe 4._ **A method section invites an argument about the method, and in the statement that had one, every question of the morning came from it.**',
  '⚠ And **record the paragraph you were asked to remove and the reason you declined.** _They will put it to me within four minutes._ **The reason is never integrity in the abstract: a statement with a hole in it is worth nothing to the party that paid for it, and that can be said in two sentences.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the spine of your statement (120 words or more).'));
out.push(p('**______________** · _statement in the matter of _______________ · **______________**   **1 · Instruction.** **______________.** ⚠ **Dated ______________.**   **2 · Scope.** **I did not ______________: ______________.** **I did not ______________: not instructed.** ⚠ **And I did not ______________; I did not think of it.**   **3 · Observations.** **On ______________, ______________, measured with ______________.**   **4 · The joining sentence.** ⚠ **I conclude from ______________ and from ______________ that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'All five parts, in order, with the scope before the observations',
  'Whose reading each observation is',
  'The method in one clause, not a section',
  'A boundary sentence saying what every finding is about',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their joining sentence**, and the room names its sources.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole statement (260 words or more), to the shape in the writer\'s box: instruction, scope, observations, joining sentence, conclusions, what you do not conclude, the paragraph you were asked to remove, and what the reading aloud found.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: five parts in order, the method in one clause, and the inconvenient figure reported inside the statement.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count and one question.** **The statements ran from six hundred to nineteen hundred words, and the two longest both contain a method section** — **have the room find it in each and strike it to one clause in front of everybody.** **Then the question: which paragraph would the commissioning party ask you to remove?** **Eight of ten named it immediately** — **and then Mr Zahreddine\'s four minutes, and the instructing party who asked in order to see what he would say.**'));
out.push(hw('**Write the whole statement in five parts and read it aloud, flat, before you call it finished.** ⚠ **Then do the harder half: time the reading and write down what it found.** **In this class the readings took between seven and seventeen minutes and found something in nine of ten statements** — **and in four of the nine what they found was a reading with no hand attached to it.** **Bring the time and the finding.** **19.7 mediates between a statement, the party it helps and the party it does not** — **so bring the paragraph you would be asked to remove.**'));

// ===================== 19.7 =====================
out.push(h2('19.7  Review & Mediate: a statement, the party it helps, and the party it does not'));
out.push(p('**Function:** mediating between a statement, the party it helps, and the party it does not   ·   **Recycling:** Unit 19   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 4 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It did not occur me to ask for the correspondence.  **2** I have said so here rather than to let the figure stand alone.  **3** If I would have asked for the correspondence, I should have known.  **4** The other expert made use from my observations.  **5** I have no intention to estimate the period.  **6** No more as one reading was taken at the landing.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE STATEMENT, FOUR ACCOUNTS** _(the statement of 15 October; the exchange of 29 October)_',
  '**The expert, Mr Zahreddine.** _"Paragraph 6 reports the east landing at 163 millimetres and says that one reading is not a finding. I was asked to take the sentence out. I declined."_',
  '**The instructing party.** _"The sentence hands the other side a figure. Our client is paying for a document that assists him, and I asked the question I am paid to ask."_',
  '**The other side\'s expert, in his own report.** _"I adopt Mr Zahreddine\'s observation section in full. The reading of 163 at the landing is the most useful figure in this case."_',
  '**The 2017 correspondence, which the expert did not ask for and which the instructing party\'s own office holds.** _"Design change of 14 June 2017: landing slab thickened to 165 at the request of the engineer."_',
  '⚠ **All four are accurate, and the figure the instructing party wanted removed turns out to assist them** — **because a landing poured to specification shows that the shortfall at the eleven bays is a matter of workmanship and not of design.**',
  '**And the thing none of the three has noticed.** **Nobody can be surprised by the omission at paragraph 2 of the statement, because the expert declared it himself** — **so the 2017 correspondence can be requested but cannot be sprung, and the only person who has not yet asked for it is the party whose office holds it.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  The figure they wanted out', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **The instructing party, and it is two paragraphs.** **The first says that the paragraph stays and why it now assists them.** **The second asks for the 2017 correspondence, which their own office holds** — **and offers a supplement before anybody has asked for one.**'],
  ['Mr Zahreddine', 'And what must not be said is that they tried to have the statement altered.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and the temptation is strong because it is true and because the expert was right.** **But a sentence of that kind in a letter turns a professional question into an allegation** — **and the letter is a document the other side may eventually read, which the room should think about for a moment.**'],
  ['Mrs Oueidat', 'The representative was doing his job.'],
  ['Mr Attar', '⚠ **He asks the question he is paid to ask and the expert answers the question he is paid to answer, and both of those are correct.** **Nobody here is at fault and this is the sixth time in Book 2** — **and it is the only one in which the two correct answers were in direct opposition and both of them held.**'],
  ['Dr Qabbani', 'And the figure helps them.'],
  ['Mr Zahreddine', '⚠ **It helps them and I did not know it would, and that is the part I want the room to hear.** **A landing poured to 163 shows that the slab was poured to specification somewhere** — **so the shortfall at the eleven bays is workmanship and not design, which is the client\'s whole case.** **I reported a figure against my instructing party and it was the best thing in the statement for them.**'],
  ['Mrs Khoury', '⚠ **And the room must not take the wrong lesson from that, which it will.** **The argument for keeping the paragraph was never that it might turn out to help.** **It was that a statement with a hole in it is worth nothing to the party that paid for it** — **and the paragraph would have had to stay even if it had cost them the case.**'],
  ['Mrs Rizk', 'Does he tell them it helps them now?'],
  ['Mrs Oueidat', '⚠ **He tells them, in one sentence, with the other expert\'s own words quoted** — **because a representative who learns from the other side\'s report that his own expert was right has learnt it in the worst possible order.** _The other expert adopts my observation section in full and calls the landing reading the most useful figure in the case._'],
  ['Mr Tayara', 'And the 2017 correspondence?'],
  ['Mr Zahreddine', '⚠ **I ask for it and I say that I did not ask for it before, which is already in paragraph 2 of the statement.** **That is the whole value of having declared it: the other side can request the correspondence and cannot spring it** — **and I offer the supplement now, so that if it changes anything the change is mine and not theirs.**'],
  ['Mrs Tarabishi', 'Could the supplement damage the client?'],
  ['Mrs Khoury', '⚠ **It could, and the letter says so in the same sentence that offers it, which is 20.4 arriving a unit early.** **_If the 2017 correspondence alters any finding I shall supplement, and I cannot say in advance in which direction._** **An offer with the direction concealed is not an offer** — **and a representative who is told the direction is unknown can plan for both, which is the only useful thing anybody can give him.**'],
  ['Mr Shihabi', 'Does the other expert come out of this well?'],
  ['Mrs Oueidat', '⚠ **He comes out of it exactly as he should and nobody in this room expected to say so.** **He adopted an observation section written by the other side, with the name on it, because the observations were sound** — **and that is 19.5 happening in public: a reader took every observation and reached his own conclusion, which is the condition of the observations being worth anything.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the fifteenth of October.** **I wrote a figure into a statement knowing it could cost the party that commissioned me, and I declined to remove it on a ground that had nothing to do with its being helpful** — **and five weeks later it was the most useful figure in the case, which proves nothing at all about the decision and is the reason I am telling the room about the fifteenth and not about the twenty-ninth.**'],
]));
out.push(sp());
out.push(box('Language box – mediating a statement that cuts both ways', [
  '**Two paragraphs, to the instructing party.** ⚠ **First: the paragraph stays, and why it now assists them, with the other expert\'s own words quoted.** **Second: the request for the document their office holds, and the offer of a supplement before anybody asks.**',
  '**What must not be said: that they tried to have the statement altered.** ⚠ **It is true and the expert was right** — **and a sentence of that kind turns a professional question into an allegation, in a letter the other side may eventually read.**',
  '**Nobody is at fault, and this is the only such case in the book where two correct answers were in direct opposition.** ⚠ **The representative asked the question he is paid to ask; the expert answered the one he is paid to answer** — **and both of them held.**',
  '**And the wrong lesson, which the room will take.** ⚠ **The argument for keeping the paragraph was never that it might turn out to help.** **It was that a statement with a hole in it is worth nothing to the party that paid for it** — **and the paragraph would have had to stay even if it had cost them the case.**',
  '**Tell them it helps, in one sentence, quoting the other side.** ⚠ **A representative who learns from the other expert\'s report that his own expert was right has learnt it in the worst possible order** — **and the sentence costs nothing and arrives first.**',
  '**Offer the supplement with the direction unknown and say so.** ⚠ _If the 2017 correspondence alters any finding I shall supplement, and I cannot say in advance in which direction._ **An offer with the direction concealed is not an offer** — **and a representative told that the direction is unknown can plan for both.**',
  '**And the declared omission is what makes all of this possible.** ⚠ **Nobody can be surprised by paragraph 2, because the expert wrote it himself** — **so the correspondence can be requested and cannot be sprung, which is 19.4 paying for itself five weeks later.**',
  '**Pronunciation.** 🔊 **Track 19.14** **Say _the paragraph stays_ flat, with no stress on _stays_ and nothing after it but the reason.** ⚠ **Stress on _stays_ makes it a refusal of the request** — **and flat, it is the first clause of an explanation, which is what the representative needs and can act on.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **whose question was legitimate**, gives **the two paragraphs**, and names **what must not be said.** ⚠ **On one of the two cards the figure does not turn out to help anybody**, and B must say what follows. Change roles with the other pair.'));
out.push(table(['Pair A – the statement and the landing reading', 'Pair B – the report and the missing roster'], [
  ['_The expert: "paragraph 6 stays."_', '_The expert: "I do not conclude that the keeper was absent."_'],
  ['_The instructing party: "it hands them a figure."_', '_The instructing party: "the absence is the whole of our case."_'],
  ['_⚠ The other expert: "I adopt the observation section in full."_', '_⚠ The other side: "there is no roster in the documents supplied."_'],
  ['_⚠ The 2017 correspondence: a design change to 165._', '_⚠ The roster, which exists and which nobody has requested._'],
  ['_⚠ The figure assists them; the ground for keeping it did not._', '_⚠ The figure assists nobody; the conclusion still cannot be drawn._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the legitimate question, the two paragraphs, and what must not be said. ⚠ **On Pair B the absence helps nobody and the room will try to make it help somebody** — **and the finding is that the honest answer is unchanged: the conclusion cannot be drawn, the roster should be requested, and the expert says both.** **The two cards exist so that the room cannot conclude that candour pays: it pays on A and costs on B, on one ground.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the paragraph you would be asked to remove** and write **the four accounts**: yours, the party\'s as they would put it, a reader who would use the paragraph, and one document nobody has requested. ⚠ **Then name the ground for keeping it, and the ground must not be that it might help.** **In this class nine of ten first grounds were that the paragraph was true** — **which is necessary and is not an argument anybody can act on.**'));
out.push(p('**b**  Swap. Your partner writes **the two paragraphs** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, nine times in ten, a true statement about the motives of the person who asked.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said the instructing party gets the letter and it is two paragraphs: the first says that the paragraph stays and why it now assists them, and the second asks for the 2017 correspondence, which their own office holds, and offers a supplement before anybody has asked for one. Mr Zahreddine said what must not be said is that they tried to have the statement altered, and that is exactly it, and the temptation is strong because it is true and because the expert was right, but a sentence of that kind turns a professional question into an allegation, in a letter the other side may eventually read. Mrs Oueidat said the representative was doing his job, and Mr Attar said he asks the question he is paid to ask and the expert answers the question he is paid to answer, and nobody here is at fault, and this is the sixth time in Book 2 and the only one in which two correct answers were in direct opposition and both held. Dr Qabbani said and the figure helps them, and it helps them and he did not know it would: a landing poured to a hundred and sixty-three shows that the slab was poured to specification somewhere, so the shortfall at the eleven bays is workmanship and not design, which is the client\'s whole case. Mrs Khoury said the room must not take the wrong lesson, because the argument for keeping the paragraph was never that it might turn out to help, but that a statement with a hole in it is worth nothing to the party that paid for it, and the paragraph would have had to stay even if it had cost them the case. Mrs Rizk asked whether he tells them it helps them now, and Mrs Oueidat said he tells them in one sentence with the other expert\'s own words quoted, because a representative who learns from the other side\'s report that his own expert was right has learnt it in the worst possible order. Mr Tayara asked about the 2017 correspondence, and he asks for it and says that he did not ask for it before, which is already in paragraph 2 of the statement, and that is the whole value of having declared it. Mrs Tarabishi asked whether the supplement could damage the client, and Mrs Khoury said it could, and the letter says so in the same sentence that offers it. Mr Shihabi asked whether the other expert comes out of this well, and Mrs Oueidat said he comes out of it exactly as he should and nobody expected to say so. And Mr Zahreddine said the thing he will take away is the fifteenth of October and not the twenty-ninth._'));
out.push(p('**Listener task:** write the two paragraphs and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 4)', 7));
out.push(p('For questions **1–6**, complete the second sentence so that it means the same as the first. **Use the word given.** Do not change the word given. Use **between three and six words**, including the word given.'));
[
  '**1**  I did not think to ask for the correspondence.   **OCCUR**\n     It ______________________________ ask for the correspondence.',
  '**2**  The period cannot be established from the records available.   **POSSIBLE**\n     It ______________________________ the period from the records available.',
  '**3**  Only one reading was taken at the east landing.   **MORE**\n     ______________________________ one reading was taken at the east landing.',
  '**4**  The other expert used my observation section in his own report.   **MADE**\n     The other expert ______________________________ my observation section in his own report.',
  '**5**  I shall not estimate the period under any circumstances.   **INTENTION**\n     I ______________________________ the period under any circumstances.',
  '**6**  They asked me to remove the paragraph and I refused.   **DECLINED**\n     I ______________________________ the paragraph when they asked.',
].forEach(t => out.push(p(t, { indent: 200, after: 80 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two paragraphs to the instructing party (120 words or more, including the working).'));
out.push(p('**Paragraph one.** ⚠ **The paragraph stays, and ______________.** **______________ adopts my observation section in full and ______________.**   **Paragraph two.** **I should be grateful for ______________, which your office holds and which I did not request.** ⚠ **If it alters any finding I shall supplement, and I cannot say in advance ______________.**   **And the working, which goes in neither paragraph.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The paragraph stays, with the ground stated first',
  'The other side\'s words quoted, not summarised',
  'The supplement offered with its direction unknown',
  'Nothing about the motives of the person who asked',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Name the two in the first paragraph with the ground for choosing them, and do not mention the third again.**',
  'Your class has read an article about documents written for a hostile reader. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about a document that will be attacked. **First**, that a claim and its limit belong in one sentence. **Second**, that a writer should say in the document what they did not examine. **Third**, that observations should be set out so that a reader can accept them and reject the writer\'s conclusion."_',
  '**Points to discuss: 1** the claim and its limit in one sentence   **2** the declared scope   **3** observations a reader can keep while rejecting the conclusion',
  '⚠ **One of the three costs the writer something that cannot be recovered.** **Say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  It did not occur ___ to ask for the correspondence.   a) me   b) to me   c) for me',
  '2  I have said so here rather than ___ the figure stand alone.   a) to let   b) letting   c) let',
  '3  ___ I asked for the correspondence, I should have known.   a) Had   b) If   c) Were',
  '4  The other expert made use ___ my observations.   a) from   b) of   c) with',
  '5  I have no intention ___ the period.   a) to estimate   b) for estimating   c) of estimating',
  '6  ___ more than one reading was taken at the landing.   a) No   b) Not   c) None',
  '7  Every finding here is a finding about those eleven bays and about ___ .   a) nothing more   b) nothing else   c) no other',
  '8  The slab is below the minimum ___ between 9 and 14 millimetres.   a) of   b) with   c) by',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style – a long interview).** 🔊 **Track 19.15** You will hear an interview with a solicitor who instructs expert witnesses. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best.'));
[
  '**1**  What does she say most experts get wrong?   **A** they write too much   **B** they put their limits in an annexe   **C** they are too cautious   **D** they refuse instructions',
  '**2**  Why does she sometimes ask for a paragraph to be removed?   **A** to improve the document   **B** because the client demands it   **C** to see what the expert will say   **D** to shorten the statement',
  '**3**  What does she do about an expert who agrees to remove a paragraph?   **A** she does not instruct them again   **B** she instructs them again   **C** she reports them   **D** she asks for a second opinion',
  '**4**  What happened with the reading of 163 at the landing?   **A** it was removed   **B** it was used against her client   **C** nobody noticed it   **D** it turned out to help her client',
  '**5**  What does she say about the 2017 correspondence?   **A** the expert should have asked for it   **B** it was privileged   **C** her own office failed to send it   **D** it did not exist',
  '**6**  What is her view of an expert who writes down what they did not examine?   **A** it costs her nothing and saves her a morning   **B** it weakens the case   **C** the rules require it   **D** it is a matter of professional pride',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Interviewer', 'You instruct expert witnesses. What do most of them get wrong?'],
  ['Solicitor', 'The limits. Not that they have limits, which everybody has, but where they put them. Three statements in four arrive with the scope in an annexe, and an annexe is the first thing that falls off a document when it is reproduced. I have had a statement photocopied for a hearing with the annexes left behind, and the finding in it then applied to a whole floor instead of eleven bays, and nobody did that on purpose.'],
  ['Interviewer', 'And you sometimes ask for things to be taken out.'],
  ['Solicitor', 'I do, and I should be honest about why. Occasionally it is because a sentence is genuinely loose. More often it is to see what the expert will say. An expert who takes out a paragraph because I asked is an expert whose other paragraphs I cannot rely on, and I do not instruct them again. It is not a trap: it is the only way I have of finding out, and it costs me nothing.'],
  ['Interviewer', 'That seems hard on them.'],
  ['Solicitor', 'It is hard and it is also the whole of my job. A statement with a hole in it is worth nothing to my client, because the hole is the first thing the other side finds, and then I am standing up with a document that has been destroyed in front of the judge. I would rather have a weaker statement that holds than a stronger one that goes.'],
  ['Interviewer', 'Tell me about the slab case.'],
  ['Solicitor', 'My expert reported a reading of a hundred and sixty-three at a landing he was not instructed to examine, and said in the same paragraph that one reading is not a finding. I asked him to take the sentence out. He declined, in two paragraphs, and the first one told me what the other side would do with it. Five weeks later their own expert called it the most useful figure in the case, and it was useful to us: a landing poured to specification means the shortfall is workmanship and not design, which is our case entirely.'],
  ['Interviewer', 'So his judgement was better than yours.'],
  ['Solicitor', 'On the outcome, yes, and that is not the point and he said so himself. He kept it for a reason that had nothing to do with its being helpful. If it had cost us the case he would have kept it anyway, and I knew that when I asked.'],
  ['Interviewer', 'And the 2017 correspondence?'],
  ['Solicitor', 'That is mine, and I have not enjoyed it. He wrote in his statement that he had not asked for it and did not think of it. My office holds it, we never sent it, and nobody in my office thought of it either. He declared his omission and we did not, and when he asked for it in October he told us he had not asked before, which was already on the page.'],
  ['Interviewer', 'Would you rather he had not declared it?'],
  ['Solicitor', 'No. It costs me nothing and it saves me a morning. A declared omission can be requested and cannot be sprung. An undeclared one is a surprise, and a surprise in that room is nine minutes long and I am the one standing up.'],
]));
out.push(p('**C  Writing.** Write the two paragraphs to the instructing party and the working beneath them (120 words or more): the paragraph stays and why, the other side\'s words quoted, the request and the supplement with its direction unknown, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write out the second reading of my own clause, in the other side\'s voice',
  '☐ ask whether a second reading would oblige anybody to do anything different',
  '☐ close a definition with an exhaustive list or a testable criterion, and name who applies it',
  '☐ put the date, the limit and the source in one sentence with no removable clause',
  '☐ write a scope paragraph with a reason of a named kind under every omission',
  '☐ write down an omission for which I have no reason, in those words',
  '☐ separate what I observed from what I concluded, and name both sources in the joining sentence',
  '☐ keep a paragraph that helps the other side, on a ground that is not that it might help me',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _read as · take to mean · put in issue · stand on · go to · rest on · set out in · provide for · admit of · speak to the point · pin to · confine to_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 19.7 draws on this unit\'s lexis)_: _construe → **construction** · stipulate → **stipulation** · unequivocal → **unequivocally** · delimit → **delimitation** · ascertain → **ascertainable** · comprehensive → **comprehensively** · negligent → **negligence** · admissible → **admissibility** · testify → **testimony**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _try on_ **→ _the other side will try the second reading on, and the clause has to survive it_**, which is attempting something to see whether it is allowed, where at A2 it was trying on a jacket · _get off_ **→ _a closed definition is what stops a party getting off the obligation_**, which is escaping a duty, where at A2 it was getting off a bus · _put out_ **→ _the statement was put out on 15 October and has not been amended_**, which is issuing a document, where at A2 it was putting out a light.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 19 · The Document That Will Be Read in Court');
