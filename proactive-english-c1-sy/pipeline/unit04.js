// Proactive English C1 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WE DECIDED AT ONCE…', 'WE HELD IT OPEN TWO MINUTES…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says whether it is an obligation, a recommendation or neither.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — and mark only what that reader would notice. Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';
const prompt = (q, opts) => box('Speaking Part 3 — the prompt sheet', [q].concat(opts), C.lteal, C.teal);

out.push(h1('Unit 4  Deciding Out Loud, Then Deciding'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**C1 Advanced Speaking Part 3 is two tasks and not one.** ⚠ **Two minutes of discussion with your partner, and then a separate question: now decide.** **The two minutes are not preparation for the decision** — **a pair who decide in the first thirty seconds have failed the first task and have nothing to do for ninety seconds.**',
  '**4.1** discusses five options for two minutes without deciding anything.   **4.2** decides in one minute, with the discard named.   **4.3** tells an obligation from a recommendation in somebody else\'s prose.   **4.4** writes a recommendation that cannot be read as an instruction.   **4.5** writes an opinion a third party may rely on, with its limit inside it.   **4.6** writes a proposal to a reader who has not agreed there is a problem.   **4.7** mediates between an engineer\'s opinion and the insurer who reads it.',
  '**Exam practice in 4.7:** C1 Advanced **Reading and Use of English Part 2** (open cloze), **Writing Part 2** (a proposal) and **Listening Part 4** (multiple matching, two tasks of five).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a decision you are part of and have not taken. **Two:** something you have written that somebody else then relied on — an opinion, a recommendation, a figure in a letter. **4.5 runs on the second and it is the cycle that costs most.**',
  '**And one genre is new.** ⚠ **The proposal is not a report with a recommendation on the end.** **It is written to a reader who has not yet agreed that there is a problem**, so its first paragraph establishes the problem and not the remedy — **and its arithmetic has to include the cost of doing nothing.** **Nothing in A2, B1 or B2 asks for it.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 4.1 =====================
out.push(pb());
out.push(h2('4.1  Two minutes that decide nothing'));
out.push(p('**Function:** discussing five options for two minutes without deciding anything   ·   **Grammar:** **Speaking Part 3 at C1**, first half · holding a discussion open on purpose   ·   **Pronunciation:** a question that does not sound like an offer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the decision you are part of and have not taken, and how long it has been open.** ⚠ **In months, and nobody says why.** Your teacher writes the ten durations on the board and adds them up.'));
out.push(board('Right, so the second one, obviously. Next.', 'Two minutes on five, and then we decide.'));
out.push(p('**b**  Which of these keeps a discussion open? **1** _I think the second one is clearly the best, do you agree?_  **2** _The third one would cost nothing and would take two years — which of those matters more here?_  **3** _Shall we say the first one, then?_  **4** _What would have to be true for the fifth one to work?_  **5** _I do not mind, what do you think?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the two minutes are for?   **A** choosing   **B** **finding out what each option would cost and what would have to be true for it to work** — which is the material the one-minute decision then uses   **C** being polite to your partner'));
out.push(p('**b**  Listen again. **1** What happened to Mrs Ajouz and her partner in the examination?   **2** What does Mrs Rizk say a committee does with five options, and how long does it take?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  Two minutes, five options', [
  ['Ms Huda', 'Mrs Ajouz has done Part 3 in the room where it counts, with a partner she had never met.'],
  ['Mrs Ajouz', '⚠ **We decided in about twenty-five seconds.** **He said the second one and I agreed, and then we had a minute and a half.**'],
  ['Mr Shihabi', 'Doing what?'],
  ['Mrs Ajouz', '**Saying the same thing in different words.** ⚠ **And then the examiner asked us to decide, and we had already decided, so we said it again.**'],
  ['Mrs Tarabishi', 'And the report?'],
  ['Mrs Ajouz', '_Interactive communication: adequate._ ⚠ **Which was the lowest thing on the sheet and I did not understand it for a year.**'],
  ['Mr Zahreddine', 'You had agreed, so there was no interaction left to have.'],
  ['Mrs Rizk', 'May I say what a committee does with five options? ⚠ **Because it is the same mistake and it costs four months instead of ninety seconds.**'],
  ['Ms Huda', 'Please.'],
  ['Mrs Rizk', '**A committee of six is given five options and somebody says the second one in the first two minutes.** ⚠ **Nobody has costed any of them, and from that point the meeting is about whether the second one is right rather than about what any of the five would require.**'],
  ['Mr Tayara', 'And what should happen?'],
  ['Mrs Rizk', '⚠ **Each option gets its cost and its condition and nobody says a preference.** **_What would have to be true for the fifth one to work?_** **Four of my five options have a condition that is false and we have never once found that out in a meeting.**'],
  ['Dr Qabbani', 'That is a question about the option and not about the person.'],
  ['Mrs Khoury', '⚠ **Which is the whole of the first two minutes.** **Every question is about an option.** _What would it cost?_ _What would have to be true?_ _Which of the two things it gives us matters here?_ **No question is about your partner and no sentence contains _I think_.**'],
  ['Mrs Oueidat', 'And _do you agree_ ends it.'],
  ['Mrs Khoury', '⚠ **_Do you agree_ is a request for a decision wearing the clothes of a question.** **So is _shall we say the first one, then_ and so is _I do not mind, what do you think_** — **and the last of those three is the worst, because it hands the whole task to the other candidate.**'],
  ['Jad', 'So the two minutes end with nothing decided.'],
  ['Mrs Khoury', '⚠ **They end with five options, each with a cost and a condition, and no preference expressed by either candidate.** **That is a completed task** — **and the decision then takes about twenty seconds, because the material is already on the table.**'],
  ['Mr Shihabi', 'A desk conference is exactly this and nobody has ever said so.'],
  ['Mrs Ajouz', '🔊 ⚠ **And the questions have to not sound like offers**, which is the part I shall practise. **_What would have to be true for the fifth one to work?_ said with the voice going up at the end is _shall we do the fifth one?_** **I have been asking for agreement in the shape of a question for eleven years.**'],
]));
out.push(sp());
out.push(box('Language box – the two minutes that decide nothing', [
  '**The task.** **Five options and a question. Two minutes with your partner.** ⚠ **Then a separate instruction: now decide, in about a minute.** **The two minutes are not preparation and they are not a race** — **a pair who agree in thirty seconds have ninety seconds of saying the same thing in different words, and the mark for interactive communication is awarded on those ninety seconds.**',
  '**What the two minutes produce.** ⚠ **Five options, each with a cost and a condition, and no preference from either candidate.** _What would it cost?_ · _What would have to be true for this one to work?_ · _Which of the two things it gives us matters here?_',
  '⚠ **Every question is about an option and no question is about your partner.** **No sentence contains _I think_.** **The three that end a discussion are _do you agree?_, _shall we say the first one, then?_ and _I do not mind, what do you think?_** — **and the last is the worst, because it hands the whole task to the other candidate.**',
  '**_Do you agree_ is a request for a decision wearing the clothes of a question.** ⚠ **Replace it with a question about the option:** _the third would cost nothing and take two years — which of those matters more here?_ **Your partner now has something to say that is not about you.**',
  '⚠ **And the finding that is not about examinations at all.** **A committee of six given five options will hear a preference in the first two minutes and spend four months on whether that preference is right.** **Nobody will have costed any of the five.** **Four of the five usually have a condition that is false, and a meeting that asks _what would have to be true_ finds that out in ten minutes.**',
  '**Pronunciation.** 🔊 **Track 4.2** **A question about an option must not sound like an offer.** ⚠ **_What would have to be true for the fifth one to work?_ with the voice going up at the end is _shall we do the fifth one?_** **Come down at the end of the question.** **A rising question invites agreement, and agreement is the one thing the first two minutes must not produce.**',
  '**Practise:** Ask a question about an option, coming down at the end. **1** about cost  **2** about a condition  **3** about which of two benefits matters here  **4** about what the option rules out  **5** one that sounds like an offer when it rises — and say it both ways',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs with the prompt sheet below. **Two minutes. Nobody decides anything.** ⚠ **Each option must get a cost and a condition, and neither of you may use the words _I think_, _do you agree_ or _best_.** A third student times it and writes down any preference either of you expresses. Swap sheets.'));
out.push(prompt('⚠ **A hospital has money for one improvement to its outpatient department. What should it spend it on?**', [
  '**A** _Extra Saturday clinics_',
  '**B** _A second pharmacist_',
  '**C** _A telephone appointment line_',
  '**D** _More seats and shade in the waiting area_',
  '**E** _A records clerk to reconcile the two appointment books_',
  '**And then the examiner will ask:** _Now decide which one the hospital should choose._',
]));
out.push(prompt('⚠ **A school has ten minutes a day to give back to its timetable. Where should the ten minutes go?**', [
  '**A** _To the form period, which lost them in September_',
  '**B** _To the first lesson_',
  '**C** _To the end of the day_',
  '**D** _To a staggered arrival window_',
  '**E** _To nothing: leave the day as it is_',
  '**And then the examiner will ask:** _Now decide where the ten minutes should go._',
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** the five costs, the five conditions, and any preference expressed. ⚠ **In the hospital sheet, two options have a condition that is false unless something else happens first** — **a second pharmacist needs a second dispensing bench, and a telephone line needs somebody to answer it on a Saturday.** **A pair who find those two in two minutes have done the task.** **A pair who name a favourite have produced a ninety-second argument about a preference nobody costed.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own open decision from Stage 1** and write **five options, with a cost and a condition against each.** ⚠ **Then mark the conditions that are false today.** **In most lists two or three are**, and those two or three are why the decision has been open for months.'));
out.push(p('**b**  Swap. Your partner asks you **four questions about your options and none about you.** ⚠ **You write down any question that contains _do you think_ or ends with a rise**, and read them back. **Most people ask one or two.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz has done Part 3 in the room where it counts, with a partner she had never met, and they decided in about twenty-five seconds: he said the second one, she agreed, and then they had a minute and a half. Mr Shihabi asked doing what, and saying the same thing in different words — and then the examiner asked them to decide, and they had already decided, so they said it again. Mrs Tarabishi asked about the report, and it said interactive communication: adequate, which was the lowest thing on the sheet and which she did not understand for a year. Mr Zahreddine said they had agreed, so there was no interaction left to have. Then Mrs Rizk said what a committee does with five options, because it is the same mistake and costs four months instead of ninety seconds: a committee of six is given five options and somebody says the second one in the first two minutes. Nobody has costed any of them, and from that point the meeting is about whether the second one is right rather than about what any of the five would require. Mr Tayara asked what should happen, and each option gets its cost and its condition and nobody says a preference — what would have to be true for the fifth one to work? Four of her five options have a condition that is false and they have never once found that out in a meeting. Dr Qabbani said that is a question about the option and not about the person, and Mrs Khoury said that is the whole of the first two minutes: every question is about an option, no question is about your partner, and no sentence contains I think. Mrs Oueidat said and do you agree ends it, and do you agree is a request for a decision wearing the clothes of a question — so is shall we say the first one, then, and so is I do not mind, what do you think, and the last of the three is the worst, because it hands the whole task to the other candidate. Mr Attar said so the two minutes end with nothing decided, and they end with five options, each with a cost and a condition, and no preference from either candidate, which is a completed task — and the decision then takes about twenty seconds, because the material is already on the table. Mr Shihabi said a desk conference is exactly this and nobody has ever said so. And Mrs Ajouz said the questions have to not sound like offers, which is the part she will practise: what would have to be true for the fifth one to work, said with the voice going up, is shall we do the fifth one, and she has been asking for agreement in the shape of a question for eleven years._'));
out.push(p('**Listener task:** write the conditions on your own list that are false today.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote after a meeting that decided nothing on purpose. Answer the questions.'));
out.push(model([
  '**NOTE OF THE MEETING OF 14 NOVEMBER** · _five options, no decision_ · _to the six who were there and to the governorate_ · **H. Rizk**',
  '**Nothing was decided and that was the instruction.** **The meeting had five options and ninety minutes, and its task was to put a cost and a condition against each.** **The decision is for the governorate on 2 December and this note is the material for it.**',
  '**A — a second Saturday vehicle.** **Cost: about one and a half million pounds a year, of which the driver is the larger part.** **Condition: a second driver with a licence for the Deir Atiyah road, and there is one in the governorate.** ⚠ **Also a second referral book, which costs nothing and which we did not think of until the fourth option.**',
  '**B — a weekday clinic at Deir Atiyah.** **Cost: nothing in money and two days a week of the existing clinician.** **Condition: that the funded provision is not running on those days, and it is running on four of the five.** **So B is Tuesday only, which is not what B was proposed as.**',
  '**C — moving the Saturday clinic to Friday.** **Cost: nothing.** **Condition: that the fifty-one self-presentations are people who cannot come on a weekday, and we do not know.** ⚠ **The referral book records the day of presentation and not the reason**, and nobody has ever asked the fifty-one anything.',
  '**D — a telephone line.** **Cost: about four hundred thousand a year.** **Condition: somebody to answer it on a Saturday, which is the thing we do not have, which is why there is a Saturday problem at all.** **D is A with a telephone attached.**',
  '**E — nothing.** **Cost: nineteen people a year turned away, of whom we know about two.** ⚠ **This option has been in front of us for three years and has never been written down with a figure against it.** **It is the only one of the five that is already running.** **The two we know about both presented at the governorate hospital within a fortnight, and the seventeen we do not know about are the figure this option actually turns on.**',
  '**What the ninety minutes produced that no earlier meeting has.** **Two of the five conditions are false today** — B on four days of five, and D for the same reason as A. **One of the five has never been investigated** — C, and the investigation is four conversations. **And one has been running unexamined for three years, which is E.**',
  '**What I am asking the six of you for.** **Nothing, until 2 December.** ⚠ **If anybody has a preference, I should rather hear it on the second than now**, because a preference stated today will be the only thing anybody remembers of this note.',
  '⚠ **I have watched that happen to four of these in three years.** **The costs and the conditions survive about a week in anybody\'s memory, and a sentence beginning _personally I would_ survives until the decision is taken** — **which is why this note has nineteen figures in it and no adjectives.**',
]));
out.push(item('1', 'What was the meeting\'s task, and what does she say the note is for?'));
out.push(item('2', 'Which two conditions are false today, and why is D described as A with a telephone attached?'));
out.push(item('3', 'What does she ask the six people for, and what reason does she give?'));
out.push(writers([
  'A note of a meeting that decided nothing: **the instruction, said first** → **each option with its cost and its condition** → **the conditions that are false today** → **the option that has never been investigated** → **the option that is already running** → **and what you are asking the readers for.**',
  '⚠ **Put a cost and a condition against every option, including the one nobody proposed.** _E — nothing. Cost: nineteen people a year turned away._ **The option of doing nothing has a cost and is almost never written down with a figure against it** — **and it is the only one of the five that is already running.**',
  '**Name the conditions that are false today, in one short paragraph.** ⚠ _Two of the five conditions are false today._ **A condition that is false is not an argument against an option; it is a different decision, taken first** — **and a meeting that has not separated them is choosing between things that do not all exist.**',
  '**Say which option collapses into which.** ⚠ _D is A with a telephone attached._ **Five options are rarely five, and a note that says so has saved the next meeting an hour.**',
  '⚠ And **refuse preferences, with the reason.** _If anybody has a preference, I should rather hear it on the second than now, because a preference stated today will be the only thing anybody remembers of this note._ **That sentence is the whole discipline of the cycle, in writing, where it can be enforced.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note of a meeting that decided nothing (120 words or more).'));
out.push(p('**NOTE OF THE MEETING OF ______________** · _______________ options, no decision_ · _to _______________ · **______________**   **Nothing was decided and that was the instruction.** **The meeting had ______________ options and ______________, and its task was to put ______________ against each.** **The decision is for ______________ on ______________.**   **A — ______________.** **Cost: ______________.** **Condition: ______________, and ______________.**   **B — ______________.** **Cost: ______________.** **Condition: ______________, and ______________.** ⚠ **So B is ______________, which is not what B was proposed as.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A cost and a condition against every option, including doing nothing',
  'The conditions that are false today, named together',
  'Any option that collapses into another, said so',
  'No preference anywhere, and the reason given',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their cost and condition for the _do nothing_ option**, and the room says whether it has a figure in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the instruction, five options with costs and conditions, the false conditions, the uninvestigated one, the one already running, and what you are asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a cost and condition for every option including doing nothing, the false conditions named, collapsed options identified, and no preference.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student asks a question about an option twice: once coming down at the end and once rising.** ⚠ **The room says what the rising version asked for.** **Agreement, every time** — and the question was identical. Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **I have been asking for agreement in the shape of a question for eleven years.**'));
out.push(hw('Take **your own open decision** and write **the five options with a cost and a condition against each, including the option of doing nothing.** ⚠ **Then mark the false conditions.** **In most lists two or three are false, and the decision has been open for months because nobody separated _this is a bad option_ from _this option does not yet exist_.** **Bring the list.** **4.2 is the minute in which you decide**, and the discard is the part that is marked.'));
