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

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  The minute in which you decide'));
out.push(p('**Function:** deciding in one minute, and naming what you discarded and why   ·   **Grammar:** **Speaking Part 3 at C1**, second half · the discard with its reason   ·   **Pronunciation:** a decision said once, and then silence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the decision you would take on your own five options from 4.1, and the one you are discarding with most regret.** ⚠ **Two sentences and no reasons yet.** Your teacher writes the ten decisions and the ten regretted discards on the board.'));
out.push(p('**b**  Which of these is a decision? **1** _The second one, because it is the only one whose condition is true today._  **2** _I suppose on balance we might be leaning towards the second one._  **3** _The second one. We are discarding the fifth, which would be better in two years._  **4** _We both rather liked the second one, did we not?_  **5** _Perhaps we could come back to the second and the third._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the minute is marked on?   **A** agreeing with your partner   **B** **a decision, a reason that uses the two minutes\' material, and one named discard** — and then stopping   **C** considering all five again'));
out.push(p('**b**  Listen again. **1** What does Mr Tayara say happened when he named the discard in writing?   **2** What does Mrs Khoury say about the discard that is named with regret?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  The one you are discarding', [
  ['Ms Huda', 'Mr Tayara took a decision in writing with the discard named, and he says it cost him something.'],
  ['Mr Tayara', '**Five options for the ten minutes and I chose the form period.** ⚠ **And then I wrote one sentence naming what I was discarding: the staggered arrival window, which is the right answer in two years and needs a second member of staff at the gate.**'],
  ['Mrs Rizk', 'And what did that cost?'],
  ['Mr Tayara', '⚠ **Two parents wrote to the governors asking why we were not doing the staggered window.** **Which we were not, and I had told them so, and I had told them it was the better option.**'],
  ['Mr Shihabi', 'So naming it created the problem.'],
  ['Mr Tayara', '⚠ **Naming it created the letters and prevented the argument.** **Both parents said in their letters that they understood the staffing position** — **which they knew because I had put it in the sentence.**'],
  ['Dr Qabbani', 'And without the sentence?'],
  ['Mr Tayara', '**They would have written asking why nobody had considered it.** ⚠ **And I would have had to say that we had, which is the one thing nobody believes after the fact.**'],
  ['Mrs Tarabishi', 'So the discard is evidence that the two minutes happened.'],
  ['Mrs Khoury', '⚠ **Which is exactly what it is in the examination.** **A pair who decide and name nothing have given the examiner a decision and no evidence of the discussion.** **A pair who name one discard and say why have proved that five options were considered** — **and the proof costs about eleven words.**'],
  ['Mrs Oueidat', 'And the one you name — any of the five?'],
  ['Mrs Khoury', '⚠ **The one you are discarding with most regret, and that is not a sentimental instruction.** **The option you regret is the one whose condition is false** — **and naming it tells the reader what would have to change.** **_The staggered window, which is the right answer in two years and needs a second member of staff_ is a decision and a plan in one sentence.**'],
  ['Mrs Ajouz', 'Mine would have been the first one, because I liked it.'],
  ['Mrs Khoury', '⚠ **Then say why you liked it in terms of the option.** **If you cannot, you did not regret it, you preferred it** — **and a preference named as a discard is the two minutes arriving ninety seconds late.**'],
  ['Mr Zahreddine', 'And how long should the whole minute be?'],
  ['Mr Shihabi', '**About twenty seconds.**'],
  ['Mrs Khoury', '⚠ **About twenty-five, and the remaining thirty-five are not a problem.** **The examiner will move on.** **A pair who use the whole minute are almost always reopening the discussion** — **and the one thing that loses this task is deciding twice.**'],
  ['Jad', 'What does deciding twice sound like?'],
  ['Mrs Ajouz', '🔊 ⚠ **_The second one. Although the third is also quite strong._** **That is what we did**, and the examiner wrote _adequate_ and I understood it a year later. **Say it once and then stop, and let the silence be his problem.**'],
]));
out.push(sp());
out.push(box('Language box – the minute in which you decide', [
  '**The shape, and it is about twenty-five seconds long.** **The decision. The reason, in the two minutes\' own terms. One named discard, with why.** ⚠ **Then stop.** _The second one, because it is the only one whose condition is true today. We are discarding the fifth, which would be better in two years and needs a second member of staff._',
  '⚠ **The discard is the evidence that the two minutes happened.** **A pair who decide and name nothing have given the examiner a decision and no sign of a discussion.** **A pair who name one discard and say why have proved that five options were considered** — **and the proof costs about eleven words.**',
  '⚠ **Name the one you discard with most regret, and that is not a sentimental instruction.** **The option you regret is almost always the one whose condition is false** — **so naming it tells the reader what would have to change for the answer to be different.** **A decision and a plan in one sentence.**',
  '**If you cannot say why you regret it in terms of the option, you did not regret it — you preferred it.** ⚠ **A preference named as a discard is the first two minutes arriving ninety seconds late**, and an examiner who hears _I rather liked the first one_ in the decision minute knows the pair had a favourite all along.',
  '⚠ **And the thing that loses this task is deciding twice.** _The second one. Although the third is also quite strong._ **That is a pair reopening the discussion inside the decision**, and it is what the remaining thirty-five seconds tempt everybody into. **The examiner will move on; the silence is his problem and not yours.**',
  '**The same move in writing, and it is why this cycle is not only about an examination.** ⚠ **A decision with a named discard produces letters and prevents arguments.** **One writer in this room named a discarded option in a letter to parents and two of them wrote in; both said in their letters that they understood the staffing position, because he had put it in the sentence.** **Without it they would have written asking why nobody had considered it** — **and _we did consider it_ is the one thing nobody believes after the fact.**',
  '**Pronunciation.** 🔊 **Track 4.4** **Say the decision once, come down, and stop.** ⚠ **_Although_ after a decision is the sound of a pair deciding twice.** **Practise the stop with a partner holding a watch: twenty-five seconds and then nothing, for as long as it takes.**',
  '**Practise:** Decide in one sentence and name one discard with its reason. **1** where the condition is false  **2** where the cost is the reason  **3** where the discard is better in two years  **4** where two options collapse into one  **5** one where you regret nothing — and say that instead of inventing a regret',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs with a prompt sheet from 4.1 you have not used. **Two minutes, then the examiner\'s question: now decide.** ⚠ **The decision minute must contain a decision, a reason in the two minutes\' terms, and one named discard — and nothing else.** A third student times it and writes down the word _although_ if it appears. Swap sheets and roles.'));
out.push(dlg(null, [
  ['A', '**__________, because __________.**'],
  ['B', '**And we are discarding __________, which __________.**'],
  ['Timer', 'Seconds: ______.   _Although_: **yes / no.**   Decided twice: **yes / no.**'],
]));
out.push(table(['Card A – decisions', 'Card B – discards'], [
  ['_The second, because it is the only one whose condition is true today._', '_We are discarding the fifth, which is better in two years and needs a second driver._'],
  ['_⚠ On balance we are probably leaning towards the second._', '_⚠ We are discarding the others, which are less good._'],
  ['_The fourth, because it costs nothing and the other four all cost something._', '_We are discarding the first, which is the second with a telephone attached._'],
  ['_⚠ We both rather liked the second one, did we not?_', '_⚠ We are discarding the third, although it is also quite strong._'],
  ['_The first, because the nineteen are the only figure any of the five turns on._', '_We are discarding nothing with regret, because four of the five have a false condition._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** the decision, the reason, the discard, and whether _although_ appeared. ⚠ **The four rows marked ⚠ fail in three different ways: two are not decisions at all, one discards everything and names nothing, and one decides twice.** **The last row is the one to defend** — **_we are discarding nothing with regret_ is legitimate when four conditions are false**, and it is the one version of this task where that is the right thing to say.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own five options from 4.1** and write **the decision, the reason, and one named discard with its reason.** ⚠ **Then check the discard: is its condition false, or did you simply prefer something else?** **If the second, you have a favourite and the five options were four.**'));
out.push(p('**b**  Swap and read your three sentences aloud to a partner, then stop. ⚠ **They hold a watch and say nothing at all for twenty seconds.** **Write down what you said into the silence.** **Most people say something, and it is almost always _although_.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara took a decision in writing with the discard named and says it cost him something. Five options for the ten minutes and he chose the form period, and then he wrote one sentence naming what he was discarding: the staggered arrival window, which is the right answer in two years and needs a second member of staff at the gate. Mrs Rizk asked what that cost, and two parents wrote to the governors asking why they were not doing the staggered window — which they were not, and he had told them so, and he had told them it was the better option. Mr Shihabi said so naming it created the problem, and naming it created the letters and prevented the argument: both parents said in their letters that they understood the staffing position, which they knew because he had put it in the sentence. Dr Qabbani asked what would have happened without the sentence, and they would have written asking why nobody had considered it — and he would have had to say that they had, which is the one thing nobody believes after the fact. Mrs Tarabishi said so the discard is evidence that the two minutes happened, and Mrs Khoury said that is exactly what it is in the examination: a pair who decide and name nothing have given the examiner a decision and no evidence of the discussion, and a pair who name one discard and say why have proved that five options were considered, and the proof costs about eleven words. Mrs Oueidat asked whether it can be any of the five, and the one you discard with most regret, which is not a sentimental instruction: the option you regret is the one whose condition is false, and naming it tells the reader what would have to change. Mrs Ajouz said hers would have been the first one because she liked it, and then say why you liked it in terms of the option — and if you cannot, you did not regret it, you preferred it, and a preference named as a discard is the two minutes arriving ninety seconds late. Mr Zahreddine asked how long the whole minute should be and Mr Shihabi said about twenty seconds; about twenty-five, and the remaining thirty-five are not a problem, because the examiner will move on. A pair who use the whole minute are almost always reopening the discussion, and the one thing that loses this task is deciding twice. Mr Attar asked what deciding twice sounds like, and Mrs Ajouz gave it: the second one, although the third is also quite strong. That is what she and her partner did, and the examiner wrote adequate, and she understood it a year later. Say it once and then stop, and let the silence be his problem._'));
out.push(p('**Listener task:** write what you said into your partner\'s twenty seconds of silence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mr Tayara sent after the decision. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _to parents of years 7 to 9; copied to the governors_ · **5 December**',
  '**The ten minutes go back to the form period from 6 January.** **The form period runs from twenty past eight to half past, as it did before September, and the register closes at twenty-five past.** **Nothing else in the day changes.**',
  '**Why the form period and not the first lesson.** **The ten minutes came out of the form period in September and the first lesson never had them.** ⚠ **And the figure that decided it: the number of pupils seen individually in form period fell from about nineteen a week to about eleven, and has stayed at eleven for nine weeks.** **No figure from the first lesson changed at all over the same period, and we looked.**',
  '**What we are discarding, and with most regret.** ⚠ **A staggered arrival window, which is the better answer and which we are not doing.** **It needs a second member of staff at the gate between ten to eight and twenty past, five mornings a week** — **about two hundred and ten hours a year, which this school does not have and cannot buy this term.** **If the governors find the post in the summer, the staggered window is what I shall propose.**',
  '**The two options nobody has asked about, and what was wrong with them.** **Giving the ten minutes to the end of the day** was discarded because the afternoon buses are booked against a timetable four other schools share. **Leaving the day as it is** was discarded because it has a cost that nobody had written down: **eight fewer individual conversations a week, which over a term is about a hundred.**',
  '**What I am not claiming.** ⚠ **I am not claiming that the eleven will go back to nineteen.** **Form period lost ten minutes in September and the eight conversations may have gone somewhere else or may not have been happening for other reasons.** **I shall count again at half term and publish the figure whichever way it goes.** **The count is kept by the form tutors on a sheet in the staff room and anybody may see it.** **It records a conversation of more than about two minutes and it does not record what the conversation was about, which is deliberate.**',
  '**One request.** **Tell your son or daughter before the sixth and not on it.** **The last time a bell moved, about sixty pupils heard about it from the queue.** **The ones who had been told the night before arrived in a usable condition to start a lesson and the ones who had not did not.**',
  '**One last thing, which belongs to the governors and is in this letter because they are copied in.** **Two parents wrote in September asking why the staggered window had not been considered, and it had been.** ⚠ **I had considered it, discarded it and not written the discard down**, and the two letters were the cost of that omission. **This letter names the discard for that reason and not because the staggered window is interesting.**',
]));
out.push(item('1', 'What figure decided the choice, and what does he say about the first lesson?'));
out.push(item('2', 'What is he discarding, and what exactly would have to change for it to be chosen?'));
out.push(item('3', 'What does he refuse to claim, and what does he undertake to do about it?'));
out.push(writers([
  'A letter carrying a decision and a discard: **the decision, with the date and what does not change** → **why this option and not the nearest one, with the figure that decided it** → **the discard, with exactly what would have to change** → **the options nobody asked about, and what was wrong with them** → **what you are not claiming** → **and one request.**',
  '⚠ **Name the discard and the condition in the same sentence.** _A staggered arrival window, which is the better answer and which we are not doing. It needs a second member of staff between ten to eight and twenty past._ **A decision and a plan in two sentences** — **and a reader who has been given the condition cannot write in asking why nobody considered it.**',
  '**Say what the figure was.** ⚠ _The number of pupils seen individually fell from about nineteen a week to about eleven, and has stayed at eleven for nine weeks._ **A decision with a figure in it is a decision somebody can disagree with; a decision without one is a preference with a date attached.**',
  '**Cost the option of doing nothing, because nobody else will.** ⚠ _Leaving the day as it is was discarded because it has a cost that nobody had written down: eight fewer individual conversations a week._ **It is the option that is already running and it is the one that never gets a figure.**',
  '⚠ And **refuse the claim your own decision invites.** _I am not claiming that the eleven will go back to nineteen._ **Then the undertaking that makes the refusal credible: _I shall count again at half term and publish the figure whichever way it goes._**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter carrying a decision and a discard (120 words or more).'));
out.push(p('**______________** · _to _______________; copied to _______________ · **______________**   **______________ from ______________.** **______________, as it did before ______________.** **Nothing else ______________.**   **Why ______________ and not ______________.** **______________.** ⚠ **And the figure that decided it: ______________ fell from ______________ to ______________, and has stayed at ______________ for ______________.**   **What we are discarding, and with most regret.** ⚠ **______________, which is the better answer and which we are not doing.** **It needs ______________** — **about ______________ a year, which ______________.** **If ______________, ______________ is what I shall propose.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision with a date, and what does not change',
  'The figure that decided it, and the figure that did not move',
  'The discard with exactly what would have to change',
  'The cost of doing nothing, with a figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their discard sentence**, and the room says what would have to change for the answer to be different.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the decision, why this option, the discard with its condition, the options nobody asked about, what you are not claiming, and one request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a decision with a date, the deciding figure, a discard with its condition, and the cost of doing nothing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their decision, reason and discard, and then stops while a partner counts twenty seconds in silence.** ⚠ **The room writes down anything said into the silence.** **It is almost always _although_ or _but of course_**, and it is the same two phrases in every class. Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **let the silence be his problem.**'));
out.push(hw('Take **your own open decision** and write **the decision, the reason, and the discard with its condition.** ⚠ **Then do the part Mr Tayara did: work out what a reader would write to you about, and whether your discard sentence prevents it.** **If it does not, the condition is not specific enough** — _needs more staff_ **prevents nothing and** _needs a second member of staff between ten to eight and twenty past, five mornings a week_ **prevents everything.** **Bring the three sentences.** **4.3 reads somebody else\'s prose for obligations**, and it starts with four modal verbs in one paragraph.'));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  Obligation, recommendation, neither'));
out.push(p('**Function:** telling an obligation from a recommendation in somebody else\'s prose   ·   **Grammar:** _shall · must · should · is to · would be minded to_   ·   **Pronunciation:** reading a requirement without strengthening it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence from a document that governs your work, read out exactly.** ⚠ **The room then says: obligation, recommendation or neither.** Your teacher writes the ten verdicts on the board and marks the ones the room could not agree on.'));
out.push(p('**b**  Which of these creates an obligation? **1** _The holder shall keep the record for two years._  **2** _Records should normally be kept for two years._  **3** _The holder is to keep the record for two years._  **4** _It is recommended that records be kept for two years._  **5** _Records are to be kept for two years, save where the Authority directs otherwise._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about _should_?   **A** it is a weaker _must_   **B** **it creates no obligation at all and is read as one by almost everybody, including the people who wrote it**   **C** it depends on the document'));
out.push(p('**b**  Listen again. **1** What four modal verbs are in the paragraph Mr Zahreddine brought, and what does he say about them?   **2** What does Mrs Oueidat say happens to _should_ in court?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  Four verbs in one paragraph', [
  ['Ms Huda', 'Mr Zahreddine brought a paragraph with four different modal verbs in it.'],
  ['Mr Zahreddine', '**Six lines of a standard.** ⚠ _Connections **shall** be made with bolts to the specified grade. Bolts **should** be inspected before installation. The inspection **is to** be recorded. The record **may** be kept electronically._'],
  ['Mrs Rizk', 'And they mean four different things.'],
  ['Mr Zahreddine', '⚠ **They mean three different things and one of them means nothing**, and I have worked to that paragraph for nineteen years without separating them.'],
  ['Mr Tayara', 'Which is the one that means nothing?'],
  ['Mr Zahreddine', '**_Should be inspected._** ⚠ **Nobody has ever been in breach of it.** **I have seen frames accepted with no inspection record at all and no finding against anybody.**'],
  ['Mrs Oueidat', 'May I say what happens to it in court? ⚠ **Counsel asks whether the word creates a duty and the answer is no, and the whole of a case can turn on that.**'],
  ['Dr Qabbani', 'Even though everybody reads it as a duty.'],
  ['Mrs Oueidat', '⚠ **Everybody reads it as a duty and nobody can be held to it**, which is the worst combination there is. **The people who wrote it think they have required an inspection. The people who do the work think they have been required to inspect. And nobody has.**'],
  ['Mrs Tarabishi', 'Why would anybody write it, then?'],
  ['Mrs Khoury', '⚠ **Because the drafter wanted an inspection and did not want to pay for one**, which is the honest answer and is in the document\'s own history if anybody looks. **_Should_ is the word you use when you want the behaviour and not the liability.**'],
  ['Mrs Ajouz', 'And _is to_?'],
  ['Mr Zahreddine', '⚠ **_Is to_ is an obligation and most people do not know it.** **_The inspection is to be recorded_ is as binding as _shall_** — **and it is the quietest of the four, so it is the one that surprises people.**'],
  ['Jad', 'So the ranking is shall, is to, should, may.'],
  ['Mrs Khoury', '⚠ **Shall and _is to_ together, both binding.** **_May_ is a permission and creates nothing.** **_Should_ is the only one that is read as an obligation and is not one.** **Three things and four words, which is why the paragraph has been misread for nineteen years by the person whose work it governs.**'],
  ['Mr Shihabi', 'My desk uses _should_ in the style book for everything.'],
  ['Mrs Oueidat', '⚠ **Then your style book is advice**, and the one thing it tells you reliably is what the desk would prefer.'],
  ['Mr Zahreddine', '🔊 ⚠ **And the reading matters, which I had not expected.** **I read that paragraph aloud to a site team for years with the stress on _should_**, which made it sound like _must_. **Read it flat and the team hear what the document says** — **and then somebody asks whether the inspection is required, which is the right question and took nineteen years to be asked.**'],
]));
out.push(sp());
out.push(box('Language box – obligation, recommendation, neither', [
  '**Three things and four words.** ⚠ **Binding: _shall_ and _is to_.** _Connections **shall** be made with bolts to the specified grade._ · _The inspection **is to** be recorded._ **Permission: _may_.** _The record **may** be kept electronically._ **Neither: _should_.**',
  '⚠ **_Should_ creates no obligation and is read as one by almost everybody, including the people who wrote it.** **The drafters think they have required an inspection; the people doing the work think they have been required to inspect; and nobody has.** **That is the worst combination available** — **and a case can turn on it.**',
  '⚠ **Why anybody writes it: _should_ is the word you use when you want the behaviour and not the liability.** **It is not always dishonest** — a drafter may genuinely not know what the inspection would cost — **but it is always a transfer, and the person it transfers to is whoever is holding the document on the day.**',
  '**_Is to_ is the quiet one and is the one that surprises people.** ⚠ _The inspection is to be recorded_ **is as binding as _shall_**, and because it reads like an arrangement rather than a requirement, it is the clause people discover they have breached.',
  '**The four-second test on anybody\'s document.** ⚠ **Ask of each sentence: could somebody be found in breach of this?** **If no, it is not a requirement, whatever it says and however it is read.** **Then the second question, which is the useful one: who wanted the behaviour, and who was going to pay for it?**',
  '**And _would be minded to_, which belongs to a different class altogether.** ⚠ _The Authority would be minded to accept a record kept electronically._ **That is neither an obligation nor a permission: it is a statement about what somebody is likely to do**, and it is the most useful sentence in regulatory prose, because it can be relied on in practice and cited nowhere.',
  '**Pronunciation.** 🔊 **Track 4.6** **Read a requirement flat, with no stress on the modal.** ⚠ **_Should_ read with stress is heard as _must_** — and one engineer in this room read a standard aloud to site teams for years with exactly that stress. **Read it flat and somebody asks whether the inspection is required**, which is the right question and took nineteen years to be asked.',
  '**Practise:** Read a sentence and say which of the three it is, and who pays. **1** with _shall_  **2** with _is to_  **3** with _should_  **4** with _may_  **5** one where _should_ is doing the work of _shall_ — and say what it would cost to write _shall_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B does two things: **says which of the three it is, and asks whether somebody could be found in breach.** ⚠ **Two rows on each card are _should_ doing the work of _shall_** — and B has to say **what it would cost to write _shall_ instead**, which is the question the drafter avoided. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'Obligation / permission / neither: **__________.**   In breach possible: **yes / no.**'],
  ['B', 'If _should_: **writing _shall_ would cost __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_Connections shall be made with bolts to the specified grade._', '_The inspection is to be recorded before the frame is loaded._'],
  ['_⚠ Bolts should be inspected before installation._', '_⚠ Records should normally be reconciled at the end of each month._'],
  ['_The record may be kept electronically._', '_The Authority may require a second sample._'],
  ['_⚠ Staff should ensure that the referral book travels with the vehicle._', '_⚠ Sheets should be checked against the prescriber\'s date._'],
  ['_Records are to be kept for two years, save where the Authority directs otherwise._', '_The Authority would be minded to accept an electronic record._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the ten verdicts and the four _should_ sentences. ⚠ **All four _should_ sentences are about something somebody wants and nobody has paid for** — an inspection, a monthly reconciliation, a book that travels with a vehicle, a date check at the counter. **Three of the four are in documents people in this room work to.** ⚠ **_Should_ marks where a document wants a behaviour it has not funded.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a page of a document that governs your own work** and mark every modal. ⚠ **Count the _shoulds_ and write, against each, what it would cost to write _shall_.** **In most pages one or two of the _shoulds_ would cost nothing at all** — **and those are the ones to raise.**'));
out.push(p('**b**  Swap. Your partner reads your marked page and says **which _should_ they would be most surprised to be held to.** ⚠ Then the harder half: **they say which one they would quietly rely on anyway**, and you say whether you do.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine brought a paragraph with four different modal verbs in it: six lines of a standard. Connections shall be made with bolts to the specified grade. Bolts should be inspected before installation. The inspection is to be recorded. The record may be kept electronically. Mrs Rizk said and they mean four different things, and they mean three different things and one of them means nothing — and he has worked to that paragraph for nineteen years without separating them. Mr Tayara asked which one means nothing, and should be inspected: nobody has ever been in breach of it, and he has seen frames accepted with no inspection record at all and no finding against anybody. Then Mrs Oueidat said what happens to it in court: counsel asks whether the word creates a duty, the answer is no, and the whole of a case can turn on that. Dr Qabbani said even though everybody reads it as a duty, and everybody reads it as a duty and nobody can be held to it, which is the worst combination there is — the people who wrote it think they have required an inspection, the people who do the work think they have been required to inspect, and nobody has. Mrs Tarabishi asked why anybody would write it, and Mrs Khoury said because the drafter wanted an inspection and did not want to pay for one, which is the honest answer and is in the document\'s own history if anybody looks: should is the word you use when you want the behaviour and not the liability. Mrs Ajouz asked about is to, and is to is an obligation and most people do not know it — the inspection is to be recorded is as binding as shall, and it is the quietest of the four, so it is the one that surprises people. Mr Attar said so the ranking is shall, is to, should, may, and Mrs Khoury said shall and is to together, both binding; may is a permission and creates nothing; and should is the only one that is read as an obligation and is not one. Three things and four words, which is why the paragraph has been misread for nineteen years by the person whose work it governs. Mr Shihabi said his desk uses should in the style book for everything, and then the style book is advice, and the one thing it tells him reliably is what the desk would prefer. And Mr Zahreddine said the reading matters, which he had not expected: he read that paragraph aloud to site teams for years with the stress on should, which made it sound like must. Read it flat and the team hear what the document says — and then somebody asks whether the inspection is required, which is the right question and took nineteen years to be asked._'));
out.push(p('**Listener task:** write the _should_ your partner would quietly rely on anyway.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Zahreddine sent to the standards office. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE · CONSULTING ENGINEER** · _to the standards office_ · _on clause 7.4_ · **9 December**',
  '**Clause 7.4 contains four modal verbs and three of them work.** **_Connections shall be made with bolts to the specified grade_ is an obligation.** **_The inspection is to be recorded_ is an obligation.** **_The record may be kept electronically_ is a permission.** ⚠ **_Bolts should be inspected before installation_ is neither, and it is the sentence everybody reading the clause believes to be its main requirement.**',
  '**What the fourth sentence does in practice.** **I have certified frames for nineteen years to this clause.** **In that time I have seen two frames rejected for bolt grade and none rejected for want of an inspection.** **I have also seen three frames where the inspection record existed and the bolts were wrong**, which is the combination the clause as drafted actually produces: **the recording is required and the inspecting is not.**',
  '**What it would cost to write _shall_.** **An inspection of fifty positions before installation is about ninety minutes on a frame of this size and needs one person with a vernier.** **On a job of eleven frames that is about sixteen hours.** ⚠ **It is not a large figure and I do not believe it is the reason the word is _should_.** **I think the reason is that nobody has ever costed it**, which is a different problem and a smaller one.',
  '**The sentence I would propose, and I am aware this is not my clause.** _Bolts shall be inspected before installation and the inspection is to be recorded._ **Eleven words for fifteen, one verb instead of two, and the obligation and the record stand or fall together.**',
  '**What I am not proposing.** **I am not proposing that the inspection be witnessed.** ⚠ **That is a real cost — a second attendance on every frame — and it is the change that would make the clause unworkable on small jobs.** **If the office is minded to require witnessing, the threshold has to be a job size and not a frame.**',
  '**And one thing that is not about the clause.** **I have been reading this paragraph aloud to site teams for nineteen years with the stress on _should_**, which made it sound like _must_. ⚠ **I was wrong to do that and I have stopped**, and the first team I read it flat to asked within a minute whether the inspection was required. **That is the right question and it had not been asked in nineteen years.**',
  '**One matter of fact about the clause\'s own history, which the office will know better than I do.** **Clause 7.4 was amended in 2019 and the word before the amendment was _shall_.** ⚠ **I have the 2017 edition in my own copy and the sentence reads _bolts shall be inspected before installation_.** **So the behaviour was required once and is not now, and whatever was decided in 2019 was decided on a record somebody holds.** **If the costing I have given above is wrong, the 2019 file will say why and I should like to read it.**',
]));
out.push(item('1', 'Which of the four sentences does not work, and what does the clause as drafted actually produce?'));
out.push(item('2', 'What does he say it would cost to write _shall_, and what does he think the real reason for _should_ is?'));
out.push(item('3', 'What is he not proposing, and what condition does he attach if the office wants it anyway?'));
out.push(writers([
  'A note on somebody else\'s requirement: **each modal sorted into obligation, permission or neither** → **what the drafting produces in practice, with your own figures** → **what it would cost to write the binding word** → **the sentence you would propose, with the acknowledgement that it is not yours** → **what you are not proposing, and the condition if they want it anyway** → **and anything you have been doing wrong yourself.**',
  '⚠ **Sort the modals before you argue about anything.** _Three of them work._ **Then name the one that does not and say what everybody believes it to be** — **_it is the sentence everybody reading the clause believes to be its main requirement_ is the whole case in sixteen words.**',
  '**Give the practical consequence as a count of what you have seen.** ⚠ _Two frames rejected for bolt grade and none for want of an inspection; three where the record existed and the bolts were wrong._ **A drafting fault in the abstract is an opinion; the same fault in three frames is evidence.**',
  '**Cost the binding version, and then refuse the easy explanation.** ⚠ _It is not a large figure and I do not believe it is the reason the word is should. I think the reason is that nobody has ever costed it._ **A writer who declines to allege bad faith when incompetence will do gets answered.**',
  '⚠ And **put your own fault in last.** _I have been reading this paragraph aloud with the stress on should for nineteen years. I was wrong to do that and I have stopped._ **It costs nothing, it is true, and it is the paragraph that makes the rest of the note a professional letter rather than a complaint.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on somebody else\'s requirement (120 words or more).'));
out.push(p('**______________** · _to _______________ · _on ______________ · **______________**   **______________ contains ______________ modal verbs and ______________ of them work.** **_______________ is an obligation.** **_______________ is a permission.** ⚠ **_______________ is neither, and it is the sentence everybody reading it believes to be its main requirement.**   **What that sentence does in practice.** **I have ______________ for ______________.** **In that time I have seen ______________ and ______________.** ⚠ **Which is the combination it actually produces: ______________ is required and ______________ is not.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every modal sorted before any argument is made',
  'The practical consequence as a count of what you have seen',
  'The binding version costed',
  'Your own fault in it, if you have one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _neither_ sentence**, and the room says who wanted the behaviour and who was going to pay for it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the modals sorted, what the drafting produces, the cost of the binding word, the sentence you propose, what you are not proposing, and your own fault.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the modals sorted first, the consequence counted, the binding version costed, and no allegation of bad faith where incompetence will do.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a _should_ sentence twice: once with the modal stressed and once flat.** ⚠ **The room says which version sounded like a requirement.** **Always the first, and the words are identical.** Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **that is the right question and it had not been asked in nineteen years.**'));
out.push(hw('Take **one page of a document that governs your work** and sort every modal into the three. ⚠ **Then pick the _should_ you would be most surprised to be held to and write, in one sentence, what it would cost to make it binding.** **In most cases it costs less than people assume**, and the reason the word is _should_ is that nobody has counted. **Bring the page and the sentence.** **4.4 writes a recommendation that cannot be read as an instruction**, which is this cycle from the other side of the desk.'));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  A recommendation nobody can read as an instruction'));
out.push(p('**Function:** writing a recommendation that cannot be read as an instruction   ·   **Grammar:** _I would suggest_ · _it is open to you to_ · _the decision is yours and these are the two things I should want to know_   ·   **Pronunciation:** advice given without the voice of a superior'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one piece of advice you have given at work that was then treated as an instruction.** ⚠ **And whether you minded.** Your teacher writes the ten on the board in two columns — _minded_ and _did not mind_ — and counts them.'));
out.push(p('**b**  Which of these cannot be read as an instruction? **1** _The dose should be reviewed before Friday._  **2** _Please review the dose before Friday._  **3** _I would review the dose before Friday; the decision is the prescriber\'s._  **4** _The dose needs reviewing._  **5** _It is open to the prescriber to leave the dose as it is, and these are the two things I should want to know first._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide makes advice readable as an instruction?   **A** the tone   **B** **naming the action and not the decider** — and the repair is to name the person whose decision it is, in the same sentence   **C** the writer\'s seniority'));
out.push(p('**b**  Listen again. **1** What happened to Dr Qabbani\'s note about the two samples?   **2** What does Mrs Khoury say about advice that is deliberately left readable as an instruction?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  Advice that was obeyed', [
  ['Ms Huda', 'Dr Qabbani wrote a note that was obeyed, and he says that was the fault.'],
  ['Dr Qabbani', '**One sentence to a ward: _a second sample should be taken before antibiotics where the first is negative._** ⚠ **It was taken in thirty-one cases out of forty-one and in ten it was not, and nobody ever asked me a question about it.**'],
  ['Mrs Rizk', 'Thirty-one obeyed and ten did not.'],
  ['Dr Qabbani', '⚠ **And the ten are the ones I wanted to hear from.** **If the registrar at two in the morning decided not to, there was a reason, and it would be the most useful information in three years** — **and my sentence gave nobody anywhere to put it.**'],
  ['Mr Zahreddine', 'It named the action and not the decider.'],
  ['Dr Qabbani', '⚠ **It named the action and no decider at all.** **_A second sample should be taken_ has no person in it.** **So the thirty-one read it as an instruction and the ten read it as nothing, and neither of those was what I meant.**'],
  ['Mrs Oueidat', 'Which is _should_ from the last cycle doing the same damage from the other side.'],
  ['Mrs Tarabishi', 'And what should the sentence have been?'],
  ['Dr Qabbani', '_I would take a second sample before antibiotics where the first is negative. The decision is the admitting registrar\'s, and the two things I should want to know are the time and whether the first sample had gone._'],
  ['Mr Shihabi', 'That is three times as long.'],
  ['Dr Qabbani', '⚠ **It is three times as long and it has a person in it twice.** **And it asks for two facts**, which means a registrar who decides against it has somewhere to write the reason.'],
  ['Mrs Khoury', '**There is a harder version of this and it is worth saying out loud.** ⚠ **Some advice is written to be read as an instruction on purpose** — **because the writer wants the behaviour and does not want the responsibility.**'],
  ['Mr Tayara', 'Which is exactly the _should_ in the standard.'],
  ['Mrs Khoury', '⚠ **It is the same sentence from the drafter\'s side.** **_Staff should ensure that the referral book travels with the vehicle_ wants the book in the vehicle and names nobody**, and when the book is in the dispensary, nobody has failed.'],
  ['Mrs Ajouz', 'So how do you tell your own version apart from that one?'],
  ['Mrs Khoury', '⚠ **One question: if this is not done, who has decided not to do it?** **If your sentence cannot answer, you have written an instruction with nobody in it** — **and it will be obeyed by the people who would have done it anyway.**'],
  ['Jad', 'And if you do want to instruct?'],
  ['Mrs Khoury', '**Then instruct.** ⚠ _Please review the dose before Friday_ **is honest, short and nobody misreads it.** **The fault in this cycle is never instructing; it is instructing while appearing to advise.**'],
  ['Dr Qabbani', '🔊 ⚠ **And the voice is half of it, which I did not know.** **I gave that advice on a ward round in the tone I use for a diagnosis**, and a registrar hearing a diagnosis does not hear a question. **Say advice flat and at the speed of ordinary speech** — **and then ask what they would want to know, and wait.**'],
]));
out.push(sp());
out.push(box('Language box – advice that cannot be read as an instruction', [
  '**What makes advice readable as an instruction is not the tone: it is naming the action and not the decider.** ⚠ _A second sample should be taken before antibiotics._ **No person anywhere.** **So the people who would have done it anyway read it as an instruction, and the people who would not read it as nothing.**',
  '**The repair, and it is three times as long.** ⚠ _**I would** take a second sample before antibiotics where the first is negative. **The decision is the admitting registrar\'s**, and the two things I should want to know are the time and whether the first sample had gone._ **A person in it twice, and two facts asked for** — **so somebody who decides against it has somewhere to write the reason.**',
  '⚠ **And the reason that matters: the cases that go against your advice are the useful ones.** **Thirty-one took the second sample and ten did not, and the ten are the ones worth hearing from** — **a registrar at two in the morning who decided against it had a reason, and a sentence with no decider in it gives nobody anywhere to put it.**',
  '**The frames.** _I would …; the decision is X\'s._ · _It is open to you to …, and these are the two things I should want to know first._ · _My own view is …, and I should be glad to be told why not._',
  '⚠ **The hard version, said once.** **Some advice is written to be read as an instruction on purpose, because the writer wants the behaviour and not the responsibility** — **which is exactly the _should_ of 4.3 from the drafter\'s side.** **The test on your own prose is one question: _if this is not done, who has decided not to do it?_** **If your sentence cannot answer, you have written an instruction with nobody in it.**',
  '**And if you do want to instruct, instruct.** ⚠ _Please review the dose before Friday._ **Honest, short, and nobody misreads it.** **The fault in this cycle is never instructing** — **it is instructing while appearing to advise.**',
  '**Pronunciation.** 🔊 **Track 4.8** **Give advice flat and at the speed of ordinary speech.** ⚠ **Advice delivered in the voice you use for a finding is heard as a finding** — one doctor in this room gave his on a ward round in the tone he uses for a diagnosis, **and a registrar hearing a diagnosis does not hear a question.** **Then ask what they would want to know, and wait.**',
  '**Practise:** Write advice with the decider named. **1** about a dose  **2** about a date  **3** about a document  **4** where you ask for two facts  **5** one where you actually want to instruct — and instruct',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B asks the one question: **if this is not done, who has decided not to do it?** ⚠ **Two rows on each card are instructions dressed as advice** — B has to name the behaviour wanted and say who would be at fault if it did not happen. **The answer is usually nobody.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'If not done, who decided? **__________ / nobody.**'],
  ['B', 'If nobody: **the behaviour wanted is __________ and the person at fault is __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_I would take a second sample; the decision is the admitting registrar\'s._', '_It is open to you to leave the dose, and these are the two things I should want to know._'],
  ['_⚠ A second sample should be taken where the first is negative._', '_⚠ Staff should ensure that the referral book travels with the vehicle._'],
  ['_Please review the dose before Friday._', '_The frame is not to be loaded until the nine positions are measured._'],
  ['_⚠ Sheets should be checked against the prescriber\'s date._', '_⚠ Records should normally be reconciled at the end of each month._'],
  ['_My own view is that the January date is better; I should be glad to be told why not._', '_The register closes at half past eight._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each sentence, who decided if it is not done. ⚠ **The four marked rows answer _nobody_, and all four use _should_ with a passive or with a plural subject** — _a second sample should be taken_, _staff should ensure_, _sheets should be checked_, _records should normally be reconciled_. ⚠ **The grammar does the hiding: a passive has no agent and _staff_ is not a person.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own piece of advice from Stage 1 and rewrite it **with the decider named and two facts asked for.** ⚠ **Then answer the question about your original: if it was not done, who had decided not to do it?** **If the answer is nobody, you wrote an instruction with nobody in it and it was obeyed by the people who agreed with you.**'));
out.push(p('**b**  Swap. Your partner reads both versions and says **which they would rather receive as the person who has to decide.** ⚠ Then the harder half: **which they would rather send.** **Those two answers are different for most people, and the gap is the whole cycle.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani wrote a note that was obeyed, and he says that was the fault. One sentence to a ward: a second sample should be taken before antibiotics where the first is negative. It was taken in thirty-one cases out of forty-one and in ten it was not, and nobody ever asked him a question about it. Mrs Rizk said thirty-one obeyed and ten did not, and the ten are the ones he wanted to hear from: if the registrar at two in the morning decided not to, there was a reason, and it would be the most useful information in three years — and his sentence gave nobody anywhere to put it. Mr Zahreddine said it named the action and not the decider, and it named the action and no decider at all: a second sample should be taken has no person in it, so the thirty-one read it as an instruction and the ten read it as nothing, and neither of those was what he meant. Mrs Oueidat said that is should from the last cycle doing the same damage from the other side. Mrs Tarabishi asked what the sentence should have been, and: I would take a second sample before antibiotics where the first is negative; the decision is the admitting registrar\'s, and the two things I should want to know are the time and whether the first sample had gone. Mr Shihabi said that is three times as long, and it is three times as long and it has a person in it twice — and it asks for two facts, which means a registrar who decides against it has somewhere to write the reason. Then Mrs Khoury said there is a harder version worth saying out loud: some advice is written to be read as an instruction on purpose, because the writer wants the behaviour and does not want the responsibility. Mr Tayara said which is exactly the should in the standard, and it is the same sentence from the drafter\'s side — staff should ensure that the referral book travels with the vehicle wants the book in the vehicle and names nobody, and when the book is in the dispensary, nobody has failed. Mrs Ajouz asked how you tell your own version apart from that one, and one question: if this is not done, who has decided not to do it? If your sentence cannot answer, you have written an instruction with nobody in it, and it will be obeyed by the people who would have done it anyway. Mr Attar asked what to do if you do want to instruct, and then instruct: please review the dose before Friday is honest, short and nobody misreads it. The fault in this cycle is never instructing; it is instructing while appearing to advise. And Dr Qabbani said the voice is half of it, which he did not know: he gave that advice on a ward round in the tone he uses for a diagnosis, and a registrar hearing a diagnosis does not hear a question._'));
out.push(p('**Listener task:** write which version your partner would rather receive and which they would rather send.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dr Qabbani sent to the ward in November. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _to the admitting registrars and the ward sister_ · _second samples in culture-negative admissions_ · **18 November**',
  '**I would take a second blood sample before antibiotics are started where the first is negative.** **The decision is the admitting registrar\'s and nothing in this note changes that.** ⚠ **What I should want to know, in the cases where it is not taken, is the time and whether the first sample had already gone to the laboratory.** **There is a space on the admissions sheet for both and it is four lines down, which is the reason I am writing rather than changing anything.**',
  '**Why I am asking, with the figure.** **Over three years, thirty-one of forty-one culture-negative admissions had a second sample and ten did not.** **In the eleven for which the second was available and the first was not, a serological diagnosis was reached in seven.** **I cannot tell you whether the sample produced the diagnosis**, and the ten who had none are the group that would answer it.',
  '**What I am not saying.** ⚠ **I am not saying that the ten were a failure of any kind.** **Eight of the ten presented at night and two of those arrived with antibiotics already running from another unit, in which case a second sample before antibiotics was not available to anybody.** **That is two of the ten accounted for and eight not, and the eight are a question and not a criticism.**',
  '**What it costs.** **A second sample is one additional venepuncture and about four minutes, and the bottles are on the trolley.** **At two in the morning with one registrar on, four minutes is not nothing** — **and I should rather be told that than find out from a figure in three years.**',
  '**What I should like, and it is not a procedure.** **Two lines on the admissions sheet in the cases where it is not taken: the time, and whether the first sample had gone.** ⚠ **If the answer in most cases turns out to be _the first sample had gone and I could not get a pre-antibiotic second one_, then my advice is wrong and should be withdrawn**, and I shall write and withdraw it.',
  '**And one thing about the last three years that is mine and not the ward\'s.** ⚠ **My original note said _a second sample should be taken_, which named no decider at all.** **It was followed in thirty-one cases and ignored in ten, and in neither group did anybody have a reason to tell me anything.** **I wrote a sentence that could only be obeyed or disregarded, and then spent three years without the information I needed.**',
  '⚠ **One practical consequence of that, which the ward should know because it affects what is on the sheet.** **The three years of records cannot now be used to answer the question they were kept for.** **I have thirty-one and ten and no reasons for any of the ten**, so the figure is a description of what happened and not evidence about anything. **If the two lines are written from January, the same question will be answerable in about eighteen months.**',
]));
out.push(item('1', 'What two facts does he ask for, and where does he say they can be recorded?'));
out.push(item('2', 'What does he say would make his own advice wrong, and what does he undertake to do?'));
out.push(item('3', 'What does he say about his original note, and what did it make impossible?'));
out.push(writers([
  'A recommendation with the decider named: **the advice, in the first person** → **whose decision it is, said explicitly** → **the two facts you want in the cases where it is not followed, and where they can be written** → **why you are asking, with the figure** → **what you are not saying** → **what it costs the person who has to do it** → **and what would make your advice wrong.**',
  '⚠ **Name the decider in the sentence after the advice, not in a closing formula.** _The decision is the admitting registrar\'s and nothing in this note changes that._ **A disclaimer at the foot of a page is read by nobody; a decider named in the second sentence is read by everybody.**',
  '**Ask for two facts and say where they go.** ⚠ _The time, and whether the first sample had already gone. There is a space on the admissions sheet for both and it is four lines down._ **Advice that asks for nothing can only be obeyed or disregarded**, and both of those leave the writer with no information.',
  '**Cost it from the other person\'s side.** ⚠ _At two in the morning with one registrar on, four minutes is not nothing._ **Advice costed in the hours of the person doing it is advice that is argued with rather than ignored.**',
  '⚠ And **say what would make your advice wrong, and undertake to withdraw it.** _If the answer in most cases turns out to be that the first sample had gone, then my advice is wrong and should be withdrawn, and I shall write and withdraw it._ **Nothing else in a note of this kind buys as much for two clauses.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a recommendation with the decider named (120 words or more).'));
out.push(p('**______________** · _to _______________ · _on ______________ · **______________**   **I would ______________ where ______________.** ⚠ **The decision is ______________\'s and nothing in this note changes that.** **What I should want to know, in the cases where it is not done, is ______________ and ______________.** **There is a space on ______________ for both.**   **Why I am asking, with the figure.** **Over ______________, ______________ of ______________ and ______________ did not.** **I cannot tell you whether ______________**, and the ______________ are the group that would answer it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decider named in the sentence after the advice',
  'Two facts asked for, with somewhere to write them',
  'The cost given in the other person\'s hours',
  'What would make your advice wrong, and the undertaking',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their advice sentence and the one after it**, and the room says who has decided if it is not done.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the advice, the decider, the two facts, the figure, what you are not saying, the cost, and what would make you wrong.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the decider named early, two facts asked for with somewhere to put them, the cost in the other person\'s hours, and the withdrawal condition.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their advice sentence twice: once in the voice they use for a finding and once flat.** ⚠ **The room says which one they would have argued with.** **Only the flat one**, which is the whole point: advice that sounds like a finding is not argued with and is not followed either. Then the sentence the cycle ends on, which is Dr Qabbani\'s: **a registrar hearing a diagnosis does not hear a question.**'));
out.push(hw('Take **the piece of advice you have most recently given in writing** and ask the one question of it: ⚠ **if it was not done, who had decided not to do it?** **Then rewrite it with the decider named and two facts asked for, and work out where those two facts could be written** — **because advice that asks for something with nowhere to put it is advice that asks for nothing.** **Bring both versions.** **4.5 writes the opinion a third party relies on**, and it is the cycle in this unit that costs most.'));

// ===================== 4.5 =====================
out.push(pb());
out.push(h2('4.5  The opinion somebody else relies on'));
out.push(p('**Function:** writing an opinion a third party may rely on, with its limit inside it   ·   **Grammar:** _on the information available on 3 May_ · the limit as part of the claim   ·   **Pronunciation:** a limit said as part of the sentence and not as an afterthought'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **something you wrote that somebody else then relied on, and what they did with it.** ⚠ **One sentence, and name the third party.** Your teacher writes the ten third parties on the board — insurers, courts, panels, donors, councils, editors — **and the room counts how many of the ten the writer had never met.**'));
out.push(p('**b**  Which of these has its limit inside the claim? **1** _The frame does not meet the specification._  **2** _On the forty-one positions I was able to reach on 7 August, the bolts measure M12 against a specified M16._  **3** _In my opinion the frame does not meet the specification, although I should add that access was limited._  **4** _The frame does not meet the specification. Please note that nine positions were not inspected._  **5** _Of the fifty positions, forty-one were measured and nine were not; of the forty-one, all measure M12._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about a limit in a separate sentence?   **A** it is clearer there   **B** **it can be separated from the claim by anybody quoting it** — and a third party quotes the claim and not the paragraph   **C** it is more polite'));
out.push(p('**b**  Listen again. **1** What happened to Mr Zahreddine\'s 2021 opinion, and which sentence was quoted?   **2** What does Mrs Oueidat say about a limit in a document that is translated?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  The sentence that was quoted', [
  ['Ms Huda', 'Mr Zahreddine lost an argument in 2021 and has written differently ever since.'],
  ['Mr Zahreddine', '**An opinion on a slab, three paragraphs.** ⚠ **The first sentence said the slab did not meet the specification.** **The third paragraph said I had not calculated it on the installed sizes and had no instruction to.**'],
  ['Mrs Rizk', 'And which was quoted?'],
  ['Mr Zahreddine', '⚠ **The first sentence, on its own, in a schedule of eleven items, with my name against it.** **Nobody quoted the third paragraph and nobody was being dishonest** — **a schedule has one line per item.**'],
  ['Dr Qabbani', 'So the limit was in the document and not in the claim.'],
  ['Mr Zahreddine', '⚠ **It was in the document, which is where I had been taught to put it, and it was separable.** **Anything in its own sentence can be left behind.**'],
  ['Mrs Tarabishi', 'And now?'],
  ['Mr Zahreddine', '_On the forty-one positions I was able to reach on 7 August, the bolts measure M12 against a specified M16._ ⚠ **Twenty-one words, and the limit is inside the claim.** **You cannot quote the finding without quoting the forty-one.**'],
  ['Mr Shihabi', 'A desk cannot cut that.'],
  ['Mr Zahreddine', '⚠ **A desk can cut anything and this one cannot be cut without producing a sentence that is obviously incomplete** — **which is all the protection available.**'],
  ['Mrs Oueidat', 'May I say what happens in translation? ⚠ **A limit in its own sentence is the sentence most likely to be left out of a certified extract**, because an extract is of the passages the party needs.'],
  ['Mrs Ajouz', 'And that is allowed?'],
  ['Mrs Oueidat', '⚠ **It is entirely proper and it happens every week.** **I certify the extract as a true translation of the passages given to me**, and the passages given to me are the ones the party wants. **A limit inside the claim travels with it; a limit in paragraph three does not exist as far as my certificate is concerned.**'],
  ['Mr Tayara', 'What about _in my opinion_ at the start?'],
  ['Mrs Khoury', '⚠ **_In my opinion_ is not a limit at all.** **It tells a reader who is speaking and nothing about what the opinion rests on** — **and it is the first thing cut, because a schedule already knows whose opinion it is.**'],
  ['Jad', 'And _although access was limited_?'],
  ['Mrs Khoury', '⚠ **An afterthought with a date and a number missing.** _Although access was limited_ **cannot be checked, cannot be relied on and cannot be disproved.** **_Forty-one of fifty, on 7 August_ can be all three.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And it has to be said as part of the sentence, which took me longest.** **If you pause before the limit, you have turned it back into a separate sentence in the listener\'s ear** — **and in a meeting that is where it gets left behind.** **One breath: _on the forty-one positions I was able to reach on the seventh of August, the bolts measure M12._**'],
]));
out.push(sp());
out.push(box('Language box – the limit inside the claim', [
  '**The shape: the limit is a clause of the claim and not a sentence beside it.** ⚠ _**On the forty-one positions I was able to reach on 7 August**, the bolts measure M12 against a specified M16._ **Twenty-one words, and the finding cannot be quoted without the forty-one.**',
  '⚠ **Anything in its own sentence can be left behind, and it will be.** **One engineer\'s 2021 opinion had the limit in paragraph three and the first sentence was quoted on its own in a schedule of eleven items, with his name against it.** **Nobody was being dishonest: a schedule has one line per item.**',
  '**The same thing in translation, and it is worse.** ⚠ **A certified extract is of the passages the party gives the translator**, and a limit in its own sentence is the sentence most likely not to be given. **A limit inside the claim travels with the claim; a limit in paragraph three does not exist as far as the certificate is concerned.**',
  '**What is not a limit.** ⚠ **_In my opinion_** — **tells a reader who is speaking and nothing about what the opinion rests on, and a schedule already knows whose opinion it is.** ⚠ **_Although access was limited_** — **an afterthought with the date and the number missing: it cannot be checked, relied on or disproved.** **_Forty-one of fifty, on 7 August_ can be all three.**',
  '**The three things a usable limit contains.** **A count** (_forty-one positions_) · **a date** (_on 7 August_) · **and the boundary of your own act** (_I was able to reach_). ⚠ **Leave out the count and it is rhetoric; leave out the date and it is permanent; leave out your own act and it reads as a fact about the world.**',
  '**And the separate limit still has a job: it names what you did not examine.** ⚠ **Both are needed.** **The limit inside the claim protects the finding; the scope paragraph tells a reader how far the whole document reaches.** **A document with the second and not the first is the 2021 opinion.**',
  '**Pronunciation.** 🔊 **Track 4.10** **One breath, with no pause before the limit.** ⚠ **A pause turns the limit back into a separate sentence in the listener\'s ear**, and in a meeting that is where it gets left behind. _On the forty-one positions I was able to reach on the seventh of August, the bolts measure M12._',
  '**Practise:** Put the limit inside the claim, with a count, a date and your own act. **1** a measurement  **2** a count of records  **3** a sample  **4** a reading of a document  **5** one where the limit makes the finding almost useless — and keep it inside',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a claim from the card. B does two things: **tries to quote the finding without the limit, and says whether the result is usable.** ⚠ **Two rows on each card have the limit inside and cannot be quoted short** — B must read out the broken version to prove it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'Quoted short: **__________.**   Usable: **yes / no — obviously incomplete.**'],
  ['B', 'If the limit is separate: **it would be left behind by __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_⚠ On the forty-one positions I was able to reach on 7 August, the bolts measure M12._', '_⚠ Of the forty-one admissions in the admissions book between January 2023 and March 2026, thirty-one had a second sample._'],
  ['_The frame does not meet the specification. Nine positions were not inspected._', '_The April figures are wrong. The district column had not been read._'],
  ['_In my opinion the slab is non-compliant, although access was limited._', '_The eleven dispensings were made against superseded sheets, as far as I can tell._'],
  ['_⚠ Of the thirty-eight sets of results retrieved, seven showed a serological diagnosis._', '_⚠ On the three Saturdays I was present in June, nineteen people were turned away._'],
  ['_The referral book was in the vehicle. This was on at least four Saturdays._', '_The requisition is amended. I have not seen the file copy._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the short versions, and which four cannot be cut. ⚠ **Every one of the four that holds has all three elements — a count, a date and the writer\'s own act** — and every one that fails has the limit in a second sentence. ⚠ **And _as far as I can tell_ is not a limit at all: no count and no date.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thing you wrote that somebody relied on** and rewrite its main finding with the limit inside the claim. ⚠ **Check the three elements: a count, a date, and the boundary of your own act.** **Most first attempts have two of the three and the missing one is usually the count.**'));
out.push(p('**b**  Swap. Your partner is the third party and quotes your finding in one line for a schedule. ⚠ **If they can produce a usable short version, the limit is still separable** — and you rewrite it. **About half of first attempts survive.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine lost an argument in 2021 and has written differently ever since. An opinion on a slab, three paragraphs: the first sentence said the slab did not meet the specification, and the third paragraph said he had not calculated it on the installed sizes and had no instruction to. Mrs Rizk asked which was quoted, and the first sentence, on its own, in a schedule of eleven items, with his name against it — and nobody quoted the third paragraph and nobody was being dishonest, because a schedule has one line per item. Dr Qabbani said so the limit was in the document and not in the claim, and it was in the document, which is where he had been taught to put it, and it was separable: anything in its own sentence can be left behind. Mrs Tarabishi asked what he writes now, and: on the forty-one positions I was able to reach on 7 August, the bolts measure M12 against a specified M16. Twenty-one words, and the limit is inside the claim — you cannot quote the finding without quoting the forty-one. Mr Shihabi said a desk cannot cut that, and a desk can cut anything, and this one cannot be cut without producing a sentence that is obviously incomplete, which is all the protection available. Then Mrs Oueidat said what happens in translation: a limit in its own sentence is the sentence most likely to be left out of a certified extract, because an extract is of the passages the party needs. Mrs Ajouz asked whether that is allowed, and it is entirely proper and happens every week — she certifies the extract as a true translation of the passages given to her, and those are the ones the party wants. A limit inside the claim travels with it; a limit in paragraph three does not exist as far as her certificate is concerned. Mr Tayara asked about in my opinion at the start, and Mrs Khoury said in my opinion is not a limit at all: it tells a reader who is speaking and nothing about what the opinion rests on, and it is the first thing cut, because a schedule already knows whose opinion it is. Mr Attar asked about although access was limited, and that is an afterthought with a date and a number missing — it cannot be checked, relied on or disproved, where forty-one of fifty, on 7 August, can be all three. And Mr Zahreddine said it has to be said as part of the sentence, which took him longest: if you pause before the limit you have turned it back into a separate sentence in the listener\'s ear, and in a meeting that is where it gets left behind._'));
out.push(p('**Listener task:** write your partner\'s short version of your finding, and whether it was usable.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the opinion Mr Zahreddine wrote in December for an insurer he has never met. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE · CONSULTING ENGINEER** · _opinion for the insurer of the east elevation_ · **14 December**',
  '**On the forty-one bolt positions I was able to reach on 7 August 2026, the bolts as installed measure M12 against a specified M16.** **Nine positions at the third level were behind a sheeted scaffold on that date and on 9 August and were not measured by me at any time.** **I have issued no certificate for this frame at any stage.**',
  '**What I measured, and how.** **Forty-one positions with a vernier between half past seven and ten past nine on 7 August, two readings at each position and the lower recorded.** **Thirty-nine read 12.0 millimetres and two read 12.1.** **No position read above 12.2 and none read 15 or over.**',
  '**What I did not examine, and this list is exhaustive as at today\'s date.** **The welds.** **The grout.** **The anchor positions below the second level.** **The mill certificates, which were not in the site file on either visit.** ⚠ **And the frame as a structure: I have not calculated it on the installed sizes, no instruction to do so having been given and the calculation taking about a day and a half.**',
  '**What follows from the measurements and what does not.** **It follows that the frame does not meet the specification it was built to.** ⚠ **It does not follow that the frame will fail**, the design load for a classroom floor at these spacings being below the strength M12 would give — **and I have not done that calculation, so that sentence is an engineer\'s general knowledge and not a finding of mine.**',
  '**The documents I have seen, with dates.** **The delivery note of 4 August, which reads M16.** **The site copy of the purchase requisition of 19 July, amended by hand after it was raised, the amendment not initialled.** **A letter from the supplier of 11 August confirming that the order they hold is for M12.** **I have not seen the file copy of the requisition**, having asked for it on the ninth, the tenth and in writing on the twelfth.',
  '**What would change this opinion.** **The nine unmeasured positions, if any of them reads 15 or over.** **The file copy of the requisition, if it reads M12.** ⚠ **And a calculation on the installed sizes, which would not change the specification finding and might change what anybody decides to do about it.**',
  '**One matter that is not an engineering question and belongs in this opinion.** **I was asked on site on 7 August to leave the bolt sizes out of my note and to raise them separately, and I declined.** ⚠ **I record it because an insurer reading this in eighteen months will want to know whether anything was withheld at the time**, and the answer is that something was asked for and not given. **I have the request in my site diary with the time against it.**',
  '**F. Zahreddine** · _this opinion is given on the information described above and on no other_',
]));
out.push(item('1', 'Where is the limit in the first sentence, and what three things does it contain?'));
out.push(item('2', 'What does he say follows from the measurements, and what does he say does not?'));
out.push(item('3', 'What three things would change the opinion, and which of the three would not change the finding?'));
out.push(writers([
  'An opinion a third party may rely on: **the finding with its limit inside the claim** → **what you measured and how** → **what you did not examine, exhaustively and dated** → **what follows and what does not** → **the documents you have seen, with dates** → **and what would change the opinion.**',
  '⚠ **Put the count, the date and your own act into the claim itself.** _On the forty-one bolt positions I was able to reach on 7 August 2026, the bolts as installed measure M12._ **The finding cannot be quoted short without producing a sentence that is obviously incomplete** — **which is all the protection a writer has.**',
  '**Say that the scope list is exhaustive, and date the statement.** ⚠ _This list is exhaustive as at today\'s date._ **An open-ended scope paragraph invites a reader to assume you examined whatever is not mentioned**, and six words close it.',
  '**Mark the sentence that is general knowledge and not a finding.** ⚠ _I have not done that calculation, so that sentence is an engineer\'s general knowledge and not a finding of mine._ **The most dangerous sentence in any opinion is the helpful one the writer is not qualified to have made.**',
  '⚠ And **say what would change the opinion, and which of those things would not change the finding.** _A calculation on the installed sizes would not change the specification finding and might change what anybody decides to do about it._ **A third party can now tell the difference between a finding under threat and a decision under discussion.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of an opinion a third party may rely on (120 words or more).'));
out.push(p('**______________** · _opinion for ______________ · **______________**   ⚠ **On the ______________ I was able to ______________ on ______________, ______________.** **______________ were ______________ on that date and were not ______________ by me at any time.** **I have ______________ at any stage.**   **What I ______________, and how.** **______________ with ______________ between ______________ and ______________ on ______________.** **______________ read ______________ and ______________ read ______________.**   **What I did not examine, and this list is exhaustive as at today\'s date.** ______________. ______________. ⚠ **And ______________: I have not ______________, no instruction to do so having been given.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A count, a date and your own act inside the claim',
  'The scope list declared exhaustive, and dated',
  'What follows and what does not, separated',
  'Any sentence that is general knowledge marked as such',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and a partner tries to quote it short for a schedule of eleven items.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole opinion (260 words or more), to the shape in the writer\'s box: the finding with its limit inside, what you measured, what you did not examine, what follows and what does not, the documents, and what would change it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the limit inside the claim with all three elements, an exhaustive dated scope, the inference blocked, and general knowledge marked.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their first sentence twice: once in one breath and once with a pause before the limit.** ⚠ **The room says which version they would remember the limit from, and which version they would quote without it.** **The one breath for the first and the pause for the second.** Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **in a meeting that is where it gets left behind.**'));
out.push(hw('Take **the thing somebody relied on** and rewrite its finding with the limit inside the claim, with all three elements. ⚠ **Then do the thing that happened to Mr Zahreddine in 2021: write the one-line version a schedule would carry**, and see whether it survives. **If it does, the limit is still separable and the sentence has to be written again.** **Bring the finding, the one-line version and the rewritten finding.** **4.6 is the proposal**, and it is a genre this course has never taught.'));

// ===================== 4.6 =====================
out.push(h2('4.6  A proposal to somebody who sees no problem'));
out.push(p('**Function:** writing a proposal to a reader who has not agreed there is a problem   ·   **Grammar:** the problem established before the remedy · the cost of doing nothing, costed   ·   **Pronunciation:** the ask said once, early, and flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you would propose if anybody asked, and the reason the reader does not think there is a problem.** ⚠ **Name the reader\'s reason and not your own.** Your teacher writes the ten readers\' reasons on the board; the room then says which of the ten are good reasons.'));
out.push(p('**b**  Which of these is a first paragraph for a reader who sees no problem? **1** _Nineteen people were turned away from the Saturday clinic between January and June; two of them presented at the governorate hospital within a fortnight._  **2** _I should like to propose a second Saturday vehicle._  **3** _I am writing to raise a matter that has been of concern for some time._  **4** _The Saturday clinic turned away nineteen people between January and June, which is about one in three of those who came._  **5** _There is a serious problem with Saturday provision which needs to be addressed urgently._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the first paragraph of an unsolicited proposal must do?   **A** name the remedy   **B** **establish that something is happening, with a figure, before the reader has been asked for anything** — because a reader who disagrees with the problem will not read the remedy   **C** explain why you are writing'));
out.push(p('**b**  Listen again. **1** Why does Mrs Rizk say her first eleven proposals failed?   **2** What does Mrs Khoury say about the cost of doing nothing, and why is it always missing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  Nobody asked for this', [
  ['Ms Huda', 'Mrs Rizk has written about forty proposals and says the first eleven all failed the same way.'],
  ['Mrs Rizk', '⚠ **Every one of them began with what I wanted.** _I should like to propose a second vehicle._ **Eleven times.**'],
  ['Mr Tayara', 'Which seems the obvious way to start.'],
  ['Mrs Rizk', '⚠ **It is the obvious way to start a request and this is not a request.** **A request goes to somebody who has agreed there is a problem.** **A proposal goes to somebody who has not** — **and the first paragraph of mine was asking a man who saw no problem to pay for a solution.**'],
  ['Mr Shihabi', 'So the first paragraph is the problem.'],
  ['Mrs Rizk', '**The first paragraph is a fact.** ⚠ _Nineteen people were turned away from the Saturday clinic between January and June; two of them presented at the governorate hospital within a fortnight._ **No ask anywhere in it.**'],
  ['Dr Qabbani', 'And when does the ask come?'],
  ['Mrs Rizk', '⚠ **In the second paragraph, once, in one sentence, and never again.** **A proposal that asks three times has not asked once.**'],
  ['Mrs Tarabishi', 'What about the cost of doing nothing? That is the thing on your form.'],
  ['Mrs Rizk', '⚠ **It is a line on the form and I have never once filled it in honestly in four years.** **I write _continued unmet need_, which is not a cost and is not a figure.**'],
  ['Mrs Khoury', '**Which is the most interesting failure in the genre.** ⚠ **The cost of doing nothing is the only figure in a proposal that is already true**, and it is the only one nobody collects. **Every other figure in the document is an estimate about the future.**'],
  ['Mr Zahreddine', 'And why does nobody collect it?'],
  ['Mrs Khoury', '⚠ **Because it is a figure about what the reader\'s organisation is currently doing**, and a writer who collects it is telling a budget holder what his present arrangement costs. **That is a harder sentence to write than any estimate.**'],
  ['Mrs Ajouz', 'Mine would be the eleven dispensings.'],
  ['Mrs Khoury', '⚠ **And eleven is a figure that is already true**, which puts it in a different class from anything a proposal predicts. **A reader can check it this afternoon.**'],
  ['Mrs Oueidat', 'And the reader\'s own reason for seeing no problem — do you answer it?'],
  ['Mrs Rizk', '⚠ **You name it, in his words, and then you give the figure that bears on it.** **My budget holder says the Saturday numbers are small, which is true: nineteen in six months.** **And the figure that bears on it is that nineteen is about one in three of everybody who came.**'],
  ['Jad', 'So the same number twice, from two sides.'],
  ['Mrs Rizk', '🔊 ⚠ **The same number twice, and the second version is the one that moves anybody.** **Say the ask flat and once** — **I used to say it three times and read it aloud with the voice going up at the end**, which is a request for permission, **and a budget holder who has been asked for permission has been given the easier answer.**'],
]));
out.push(sp());
out.push(box('Language box – the proposal nobody asked for', [
  '⚠ **A request goes to somebody who has agreed there is a problem. A proposal goes to somebody who has not.** **So the first paragraph of a proposal is a fact and contains no ask at all.** _Nineteen people were turned away between January and June; two of them presented at the governorate hospital within a fortnight._',
  '**The ask comes in the second paragraph, once, in one sentence, and never again.** ⚠ **A proposal that asks three times has not asked once** — **the second and third asks tell a reader that the writer does not believe the first worked.**',
  '⚠ **The cost of doing nothing is the only figure in a proposal that is already true.** **Every other figure is an estimate about the future.** **It is also the only one nobody collects, and the reason is not laziness: it is a figure about what the reader\'s own organisation is currently doing** — **and writing it means telling a budget holder what his present arrangement costs.**',
  '**Name the reader\'s reason for seeing no problem, in the reader\'s words, and then give the figure that bears on it.** ⚠ _The Saturday numbers are small, which is true: nineteen in six months._ **And then: _nineteen is about one in three of everybody who came_.** **The same number twice, from two sides, and the second version is the one that moves anybody.**',
  '**What a first paragraph must not contain.** ⚠ **_I should like to propose_** (an ask) · **_I am writing to raise a matter of concern_** (about the letter) · **_there is a serious problem which needs to be addressed urgently_** (an adjective where a figure should be). **All three are read by a budget holder as a request, and a request can be declined without engaging with anything.**',
  '**And what makes a proposal different from a report, which is the question every class asks.** ⚠ **A report is read by somebody who asked for it.** **A proposal is read by somebody who did not** — **so a report may begin with its findings and a proposal has to earn the right to have any.**',
  '**Pronunciation.** 🔊 **Track 4.12** **Say the ask once, early, and flat.** ⚠ **An ask with the voice going up at the end is a request for permission**, and a budget holder who has been asked for permission has been given the easier answer. **Down at the end, and then the next paragraph.**',
  '**Practise:** Write a first paragraph that is a fact with no ask in it. **1** with a count over a period  **2** with a figure the reader can check this afternoon  **3** with the reader\'s own reason named  **4** with the same number given twice from two sides  **5** one where the problem is the reader\'s own arrangement — and say so without an adjective',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a first paragraph from the card. B does two things: **says whether it contains an ask, and names the reader\'s likely reason for seeing no problem.** ⚠ **Two rows on each card contain an adjective where a figure should be** — B has to say which adjective and what figure would replace it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'Contains an ask: **yes / no.**   The reader\'s reason: **__________.**'],
  ['B', 'Adjective for a figure: **__________ → __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_Nineteen were turned away between January and June; two presented at the governorate hospital within a fortnight._', '_Eleven dispensings in October were made against superseded sheets, seven of them by a dose change._'],
  ['_⚠ There is a serious problem with Saturday provision which needs urgent attention._', '_⚠ The current arrangement is highly unsatisfactory and cannot continue._'],
  ['_The timetable has shown the 06.20 as the 06.40 since 2019; eleven mornings were counted in November._', '_Of the forty-one admissions, ten had no second sample; eight of the ten presented at night._'],
  ['_⚠ I should like to propose a second Saturday vehicle._', '_⚠ I am writing to raise a matter that has been of concern for some time._'],
  ['_Form-period conversations have fallen from about nineteen a week to about eleven and have stayed there nine weeks._', '_Three sets of results from 2023 are not in the system; the migration was incomplete for five weeks._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** which paragraphs contain an ask, and the four adjectives. ⚠ **_Serious_, _urgent_, _highly unsatisfactory_ and _of concern_ are the four**, and the finding is that all four are the writer\'s state of mind in a document about somebody else\'s organisation — **which is 2.2\'s hedge wearing different clothes.** **A budget holder reads an adjective as a request and a figure as a fact.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your own first paragraph: a fact, a figure, and no ask.** ⚠ **Then write the reader\'s reason for seeing no problem in his own words, underneath**, and the figure that bears on it. **If you cannot write his reason, you do not yet know whom you are writing to.**'));
out.push(p('**b**  Swap. Your partner is the budget holder and reads only your first paragraph. ⚠ **They say what they would do next.** **_Nothing_ is the commonest answer and is useful: ask what figure would have made them do something, and write it down.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has written about forty proposals and says the first eleven all failed the same way: every one of them began with what she wanted. I should like to propose a second vehicle, eleven times. Mr Tayara said that seems the obvious way to start, and it is the obvious way to start a request and this is not a request — a request goes to somebody who has agreed there is a problem and a proposal goes to somebody who has not, and the first paragraph of hers was asking a man who saw no problem to pay for a solution. Mr Shihabi said so the first paragraph is the problem, and the first paragraph is a fact: nineteen people were turned away from the Saturday clinic between January and June, two of them presenting at the governorate hospital within a fortnight. No ask anywhere in it. Dr Qabbani asked when the ask comes, and in the second paragraph, once, in one sentence, and never again — a proposal that asks three times has not asked once. Mrs Tarabishi asked about the cost of doing nothing, which is the thing on the form, and it is a line on the form and she has never once filled it in honestly in four years: she writes continued unmet need, which is not a cost and is not a figure. Mrs Khoury said that is the most interesting failure in the genre, because the cost of doing nothing is the only figure in a proposal that is already true, and it is the only one nobody collects — every other figure in the document is an estimate about the future. Mr Zahreddine asked why nobody collects it, and because it is a figure about what the reader\'s organisation is currently doing, and a writer who collects it is telling a budget holder what his present arrangement costs, which is a harder sentence to write than any estimate. Mrs Ajouz said hers would be the eleven dispensings, and eleven is a figure that is already true, which puts it in a different class from anything a proposal predicts: a reader can check it this afternoon. Mrs Oueidat asked whether you answer the reader\'s own reason for seeing no problem, and you name it in his words and then give the figure that bears on it: her budget holder says the Saturday numbers are small, which is true — nineteen in six months — and the figure that bears on it is that nineteen is about one in three of everybody who came. Mr Attar said so the same number twice from two sides, and the same number twice, and the second version is the one that moves anybody._'));
out.push(p('**Listener task:** write the figure that would have made your partner do something.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the proposal Mrs Rizk sent to a budget holder who had not asked for it. Answer the questions.'));
out.push(model([
  '**TO THE GOVERNORATE HEALTH OFFICE** · _Deir Atiyah Saturday clinic_ · **H. Rizk** · **16 December**',
  '**Nineteen people were turned away from the Saturday clinic at Deir Atiyah between January and June, and nineteen is about one in three of everybody who came.** **Two of the nineteen presented at the governorate hospital within a fortnight.** **Nine were turned away before half past nine because Saturday cover ends at nine, and ten because the referral book was in the vehicle.** **The nineteen are counted from the refusal page the nurse keeps, which carries a name, a time and a reason on every line, and I have it here.**',
  '**What I am asking for.** **One driver and one vehicle on eleven Saturdays, between January and the end of March, at about four hundred thousand pounds.** ⚠ **That is the whole of the ask and it is not repeated anywhere below.**',
  '**What this office is paying now, which is the figure nobody has written down.** **The two we know about were seen at the governorate hospital: one in the accident department on a Sunday and one in an outpatient clinic eleven days later.** **An accident attendance is costed at about nine thousand pounds in your own 2025 schedule and an outpatient attendance at about three thousand.** **Both were seen inside a fortnight, which is short enough that the Saturday refusal and the hospital attendance are one episode of illness and not two.** **That is twelve thousand for two of nineteen**, and **if the other seventeen behaved like the two, the present arrangement costs this office about a hundred and fourteen thousand pounds a year to avoid spending four hundred.** ⚠ **I do not know that the seventeen behaved like the two and I am not going to claim it.**',
  '**Your own reason for seeing no problem, which I understand and which is correct as stated.** **The Saturday numbers are small: nineteen in six months against about two thousand six hundred weekday attendances.** **Two thousand six hundred is the right denominator for a weekday question and the wrong one for this one.** ⚠ **The figure I should want you to look at is not nineteen but the proportion: nineteen is about one in three of Saturday arrivals, where the weekday figure is about one in ninety.**',
  '**What I am not asking for.** **Not a permanent post.** **Not the weekday clinic.** **Not the three districts the funded provision covers.** **Not a second clinic room, which I know this office has not got.** **And not a decision before January**, the eleven Saturdays beginning on the tenth.',
  '**What would make this proposal unnecessary.** **If the rota were amended back to half past twelve, nine of the nineteen would not have been turned away and the case for a second vehicle would rest on ten.** ⚠ **The rota is yours and not mine and it costs nothing to change**, and if it is changed I shall withdraw this. **I would rather lose the vehicle than the nine.**',
]));
out.push(item('1', 'What is in the first paragraph, and what is not in it?'));
out.push(item('2', 'How does she cost the present arrangement, and what does she refuse to claim about it?'));
out.push(item('3', 'What would make the proposal unnecessary, and what does she undertake if it happens?'));
out.push(writers([
  'A proposal to somebody who sees no problem: **a first paragraph that is a fact, with a figure and no ask** → **the ask, once, in one sentence** → **what the reader\'s organisation is paying now, costed from their own figures** → **the reader\'s reason for seeing no problem, named in their words, and the figure that bears on it** → **what you are not asking for** → **and what would make the proposal unnecessary.**',
  '⚠ **Cost the present arrangement out of the reader\'s own schedule.** _An accident attendance is costed at about nine thousand pounds in your own 2025 schedule._ **A figure a reader recognises as theirs cannot be argued with as an estimate**, and the cost of doing nothing is the only figure in the document already true.',
  '**Refuse the extrapolation you have just invited.** ⚠ _I do not know that the seventeen behaved like the two and I am not going to claim it._ **Those nineteen words are why the hundred and fourteen thousand is believed at all.**',
  '**Give the same number twice, from two sides.** ⚠ _Nineteen in six months against two thousand six hundred weekday attendances_ **and then** _nineteen is about one in three of Saturday arrivals, where the weekday figure is about one in ninety._ **The first version is the reader\'s and is correct; the second is yours and is the one that moves anybody.**',
  '⚠ And **say what would make the proposal unnecessary, and undertake to withdraw it.** _The rota is yours and not mine and it costs nothing to change, and if it is changed I shall withdraw this._ **A proposal with a withdrawal condition comes from somebody who wants the problem solved rather than the money.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a proposal to somebody who sees no problem (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **______________ were ______________ between ______________ and ______________, and ______________ is about ______________ of ______________.** **______________ of the ______________ ______________.** **______________ because ______________, and ______________ because ______________.**   **What I am asking for.** **______________, at about ______________.** ⚠ **That is the whole of the ask and it is not repeated anywhere below.**   **What this office is paying now, which is the figure nobody has written down.** **______________ is costed at about ______________ in your own ______________.** ⚠ **I do not know that ______________ and I am not going to claim it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A first paragraph with a figure and no ask at all',
  'The ask once, and nowhere else',
  'The present arrangement costed from the reader\'s own figures',
  'The extrapolation you invited, refused',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first paragraph**, and the room says what a budget holder would do next.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole proposal (260 words or more), to the shape in the writer\'s box: the fact, the ask once, the cost of now, the reader\'s reason with the figure that bears on it, what you are not asking for, and what would make it unnecessary.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no ask in the first paragraph, the ask once, the present cost from the reader\'s own figures, and the extrapolation refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their ask sentence twice: once flat and once with the voice rising at the end.** ⚠ **The room says what the rising version asked for.** **Permission** — and a budget holder who has been asked for permission has been given the easier answer. Then the sentence the cycle ends on, which is Mrs Rizk\'s: **the same number twice, and the second version is the one that moves anybody.**'));
out.push(hw('Take **the thing you would propose** and write **the first paragraph with no ask in it**, and then the cost of doing nothing **out of the reader\'s own figures**. ⚠ **If you cannot find the reader\'s own figures, that is the task**: a schedule, a tariff, a published rate, last year\'s accounts. **A proposal costed in your figures is an estimate and a proposal costed in theirs is an account.** **Bring the paragraph and the cost.** **4.7 is the unit check**, and the mediation is between an engineer\'s opinion and the insurer who reads it.'));

// ===================== 4.7 =====================
out.push(h2('4.7  Review & Mediate: The insurer who reads the opinion'));
out.push(p('**Function:** mediating between an engineer\'s opinion and the insurer who reads it   ·   **Recycling:** Unit 4   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 2 · Writing Part 2 (a proposal) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The committee shall to decide before the tenth of January.  **2** It is open for you to amend the rota, and the decision is yours.  **3** On the information available in 3 May, the roller was out of service.  **4** I would suggest that the registrars will ask for two things before they admit.  **5** What would have to be true for that the fifth option works?  **6** The standard says inspections should be carried out, that means they are mandatory.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the opinion\'s two sentences and the two readings of them that came back from the insurer in the same envelope.'));
out.push(box(null, [
  '**ONE OPINION, TWO READINGS** _(Mr Zahreddine\'s opinion of 3 May, and what the insurer did with it)_',
  '**The two sentences that matter.** _"On the information available on 3 May — the site diary for the four days before the pour and the two photographs filed with it — the slab was poured with the roller out of service. I have not seen the service log and the date on which the roller went out of service is therefore not established by me."_',
  '**The first reader, a claims handler.** _"The engineer says the roller was out of service. That is the finding we needed. Close the file and decline the claim."_',
  '**The second reader, the insurer\'s own lawyer.** _"The opinion is qualified in every paragraph and the second sentence takes the first one back. It is worth nothing in front of a tribunal. Instruct a second engineer."_',
  '⚠ **Both readers have read the same two sentences and neither of them is being useful to anybody.**',
  '**And the thing neither of them noticed.** **The second sentence names the document that would settle it** — _the service log_ — **and the insurer is the party that holds it.**',
  '**The question for the cycle.** _What do you say, and to which of the three people?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides something has to be said to the reader as well as to the writer. Why is that new?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  The document the reader is holding', [
  ['Ms Huda', 'Two readings of one opinion. Mrs Khoury — which reader is right?'],
  ['Mrs Khoury', 'Neither, and they are wrong in opposite directions, which is the useful part. ⚠ **One has read a limited finding as a settled one and the other has read a limit as a retreat.**'],
  ['Mr Shihabi', 'The lawyer is not unreasonable. The second sentence does take the first one back.'],
  ['Mr Zahreddine', '⚠ **It does not take it back and I chose every word of it.** **What I found is that the slab was poured with the roller out of service.** **What I did not find is when the roller went out.** **Those are two different sentences and the second one is not an apology for the first.**'],
  ['Mrs Tarabishi', 'Then the lawyer has simply misread you.'],
  ['Mrs Oueidat', '⚠ **He has misread it because of where it sits.** **The limit is in a sentence of its own, after the finding, and anything in its own sentence after a finding is read as a second thought.** **Four units of this course have said that and here is the invoice.**'],
  ['Dr Qabbani', 'So we go back to the engineer and ask him to rewrite it.'],
  ['Mrs Khoury', '⚠ **We read him his own second sentence and ask him one question**, which is: _what would have to arrive for the date to be established?_ **And he will say the service log, because it is already in his sentence.**'],
  ['Mr Zahreddine', 'And then I have written it myself, which is the whole point of the move.'],
  ['Mrs Rizk', 'But somebody has to tell the claims handler he cannot close the file.'],
  ['Mrs Khoury', '⚠ **Not tell — ask.** **And this is the thing that is new in this unit.** **In 1.7 and in 3.7 the reader had nothing to write and nothing to do, so we left the reader alone.** **Here the reader is going to decline a claim on Thursday.**'],
  ['Mr Tayara', 'So what is the question to the handler?'],
  ['Mrs Khoury', '⚠ **Which of the two things the engineer says he has not seen do you hold?** **Nine words, and the answer is the service log, and it is in a filing cabinet about forty metres from his desk.**'],
  ['Mrs Ajouz', 'And nobody had asked that in — how long?'],
  ['Mr Zahreddine', '⚠ **Eleven weeks.** **Two engineers, one tribunal date and about nine hundred thousand pounds in fees, and the document was theirs the whole time.** **Nobody read the limit as an instruction, which is what a limit is.**'],
  ['Mr Shihabi', 'A limit is an instruction?'],
  ['Mrs Oueidat', '⚠ **To the reader, yes.** **_I have not seen the service log_ tells a reader what to go and find.** **It is the most useful sentence in the document and it is the one both of them treated as throat-clearing.**'],
  ['Jad', 'And the lawyer? Do we correct him?'],
  ['Mrs Khoury', '⚠ **Only if he asks, as in 3.7 — but notice that he will ask here, because he is about to spend money.** **A reader who has to act will come back to you, and a reader who only has an opinion will not.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that the two of them stopped at the same place again.** **One closed the file and one opened a second instruction, and neither of them opened the cabinet.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between an opinion and the party who acts on it', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Here the sentence is his limit and the question is nine words.** _I have not seen the service log._ ⚠ **_What would have to arrive for the date to be established?_** **The answer is already in his own sentence, which is why he will supply it and remember supplying it.**',
  '**And in this unit there is a fourth move, because the reader has to act.** ⚠ **Ask the reader one question too, and make it a question about what they hold.** _Which of the two things he says he has not seen do you hold?_ **A reader who is going to decline a claim on Thursday cannot be left alone the way a reader with only an opinion can.**',
  '⚠ **Never tell either of them they have misread it.** _The lawyer is right that the second sentence is in the wrong place_ — **and he is, and saying so costs nothing and buys the rest of the conversation.** **A mediator who opens by correcting the better-paid reader has lost both of them.**',
  '**A limit is an instruction to the reader.** ⚠ _I have not seen the service log_ **tells a reader what to go and find**, and both of these readers treated it as throat-clearing: one closed the file on the finding and one instructed a second engineer. **Neither of them opened the cabinet.**',
  '**The reader who has to act will come back to you.** ⚠ **The lawyer is about to spend money and will ask**, and that is when you may say what you think about the placing of the sentence. **A reader with nothing to do never asks, which is why 3.7 told you to leave that reader alone.**',
  '**Pronunciation.** 🔊 **Track 4.14** **Ask the reader\'s question with the stress on _hold_, and then stop.** ⚠ **_Which of the two things he says he has not seen do you **hold**?_** **Stress anywhere else — on _two_, on _he_ — turns it into a complaint about the engineer.** **The silence after it is about three seconds and what comes back is a filing-cabinet drawer.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an opinion\'s two sentences and two readings of them, and does **not** show them. A reads all four. B makes the three moves on the writer and then **the fourth move on the reader: one question about what the reader holds.** ⚠ **In one of the two pairs the reader holds nothing**, and B must find the different question. Change roles with the other pair.'));
out.push(table(['Pair A – the lift certificate', 'Pair B – the water readings'], [
  ['_Finding: "the lift was returned to service on 2 March."_', '_Finding: "the readings for the eleventh are above the limit."_'],
  ['_Limit: "I have not seen the test certificate for the brake."_', '_⚠ Limit: "the meter was last calibrated at a date I cannot establish."_'],
  ['_Handler: "returned to service — that is our answer. Decline."_', '_Handler: "above the limit. That is the whole claim proved."_'],
  ['_Lawyer: "he withdraws it in the next line. Instruct another."_', '_Lawyer: "a meter nobody can date proves nothing at all."_'],
  ['_⚠ The insurer holds the brake certificate: it is in the file._', '_⚠ Nobody holds a calibration record, because none was kept._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each pair\'s two questions — the one to the writer and the one to the reader — and the answers. ⚠ **Pair B is the one where the document does not exist**, and the question there is not about holding anything: **_what would you accept instead of a calibration record?_** — **asked of the reader, who has to decide what will do.** **That is the one case where the reader is the only person who can move the file.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own finding from 4.5** and read its limit aloud. ⚠ **Ask yourself the nine words: what would have to arrive for this to be established?** **Write the document, the person who holds it, and the date you asked them for it.** **If you have never asked, that is the task** — **a limit nobody has been asked to lift is a limit that was written to protect you and not to be useful.**'));
out.push(p('**b**  Swap and do the four moves on a partner\'s finding: the three on them, and then the fourth — **which of the things you say you have not seen does your reader hold?** ⚠ **Count how many of the documents in the room are held by the person who commissioned the opinion.** **In this class it has never been fewer than half.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say, and to whom:  _Two readings of one opinion. Asked which reader was right, Mrs Khoury said neither, and that they were wrong in opposite directions: one had read a limited finding as a settled one and the other had read a limit as a retreat. Mr Shihabi said the lawyer was not unreasonable, since the second sentence does take the first one back, and Mr Zahreddine said it does not take it back and he chose every word of it — what he found was that the slab was poured with the roller out of service, and what he did not find was when the roller went out, and those are two different sentences and the second is not an apology for the first. Mrs Tarabishi said the lawyer had simply misread him, and Mrs Oueidat said he had misread it because of where it sits: the limit is in a sentence of its own after the finding, and anything in its own sentence after a finding is read as a second thought. Four units of this course have said that, and here is the invoice. Dr Qabbani said we should go back and ask him to rewrite it, and Mrs Khoury said we read him his own second sentence and ask him one question — what would have to arrive for the date to be established — and he will say the service log, because it is already in his sentence. Mr Zahreddine said that then he has written it himself, which is the whole point of the move. Mrs Rizk said that somebody has to tell the claims handler he cannot close the file, and Mrs Khoury said not tell but ask, and that this is what is new in this unit: in 1.7 and in 3.7 the reader had nothing to write and nothing to do, so we left the reader alone, and here the reader is going to decline a claim on Thursday. Mr Tayara asked what the question to the handler is, and it is which of the two things the engineer says he has not seen do you hold — nine words, and the answer is the service log, in a filing cabinet forty metres from his desk. Mrs Ajouz asked how long nobody had asked that, and Mr Zahreddine said eleven weeks: two engineers, one tribunal date and about nine hundred thousand pounds in fees, and the document was theirs throughout. Nobody read the limit as an instruction, which is what a limit is. Mr Shihabi asked whether a limit is an instruction, and Mrs Oueidat said to the reader, yes — I have not seen the service log tells a reader what to go and find, and it is the most useful sentence in the document, and the one both treated as throat-clearing. Mr Attar asked whether we correct the lawyer, and Mrs Khoury said only if he asks, as in 3.7, but that he will ask here because he is about to spend money: a reader who has to act will come back to you, and a reader who only has an opinion will not. And Mrs Ajouz said the thing she will take away is that the two of them stopped at the same place again — one closed the file and one opened a second instruction, and neither of them opened the cabinet._'));
out.push(p('**Listener task:** write the document your own limit names, and the name of the person who holds it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text below and think of the word which best fits each gap. Use **only one word** in each gap.'));
out.push(box(null, [
  '**WHAT AN INSURER DOES WITH AN ENGINEER\'S OPINION**',
  'An opinion written by an engineer is read by at least two people and neither of them is an engineer. The first is a claims handler, **(1)** ______ job is to decide whether a file can be closed this week. The second is a lawyer, who will read the same four pages a fortnight later and has no interest whatever **(2)** ______ the method by which the finding was reached.',
  'Far **(3)** ______ being a weakness, the sentence that states the limit of an opinion is the one a careful reader goes to first. It is **(4)** ______ no use at all to a claims handler to be told that a roller was out of service if the date on which it went out sits in another paragraph.',
  'Most engineers put the limit at the end, **(5)** ______ is exactly where it will be read as a retreat. The limit belongs inside the claim, **(6)** ______ that it cannot be quoted away from it. A finding and its limit in one sentence survive being read quickly, and almost nothing else in the document does.',
  'And a limit is an instruction. An opinion is worth very little **(7)** ______ its reader can tell from it what document would change it — and that document is, more often **(8)** ______ not, in the insurer\'s own file.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an opinion and the two people who read it (120 words or more).'));
out.push(p('**ONE OPINION, TWO READINGS** · ______________   **The finding.** _"______________"_   **The limit.** _"I have not seen ______________."_   **The first reader.** _"______________"_   **The second reader.** _"______________"_   **What is correct.** ⚠ **______________ is right that ______________.**   **To the writer.** ⚠ **Your own sentence says ______________. ______________?**   **To the reader.** ⚠ **Which of the things ______________ do you hold?**   **What I am not going to do.** ⚠ **______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What is correct, said first, to the reader who is about to spend money',
  'The writer\'s own limit read back, and one question',
  'One question to the reader, about what the reader holds',
  'Neither reader told they have misread it',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: a proposal)', 10));
out.push(box(null, [
  '⚠ **First proposal of the course, and the genre nothing before C1 has asked for.** **The reader has not agreed there is a problem** — **so the first paragraph is a fact and not an ask, the ask appears once, and the cost of doing nothing comes out of the reader\'s own figures.** ⚠ **His last sentence is the test: _the problem before the want._**',
  '⚠ **A proposal whose first paragraph contains an ask has failed before the second paragraph** — **and the cost of doing nothing is the only figure in your document that is already true.** **The examiner is reading for the target reader**, and a budget holder who has not agreed there is a problem is the hardest target reader in the Part 2 menu.',
  'The director of the centre where you study has money for **one** thing this year and has asked students to send proposals. **Write a **proposal** for the director.** Write **220–260 words**.',
  '_"I have enough for one of the things that get asked for every year, and I would rather spend it on the thing somebody can show me is costing us something already. Tell me what the problem is before you tell me what you want."_',
  '**You should: 1** establish the problem, with a figure   **2** say what you are asking for, and what it would cost   **3** say what the centre is paying now for not doing it',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The committee ___ decide before the tenth of January, under clause 7.4.   a) shall to   b) shall   c) will to',
  '2  It is open ___ you to amend the rota, and the decision is yours.   a) to   b) for   c) of',
  '3  On the information ___ on 3 May, the slab was poured with the roller out of service.   a) available in   b) which available   c) available',
  '4  I would suggest that the registrars ___ for two things before they admit.   a) will ask   b) ask   c) asking',
  '5  What would have to be true ___ the fifth option to work?   a) for   b) that   c) so',
  '6  The standard says inspections should be carried out, ___ does not make them mandatory.   a) that   b) what   c) which',
  '7  The decision is at the registrar\'s ___, and the note says so in its first line.   a) discreet   b) discretion   c) discreetly',
  '8  The inspection is ___ under clause 7.4, which is why it is not a recommendation.   a) mandatory   b) mandate   c) mandatorily',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching, two tasks).** 🔊 **Track 4.15** You will hear five people talking about something they wrote that somebody else relied on. **You must complete both tasks as you listen.**'));
out.push(p('**TASK ONE – what went wrong.** For questions **1–5**, choose from the list (**A–H**) what each speaker says went wrong.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** a recommendation was carried out as though it were an instruction   **B** a figure was still in use long after it was taken   **C** a qualified finding was quoted as a settled one   **D** a proposal was refused for asking too many times   **E** a minute recorded a decision that nobody had taken   **F** a document was lost before anybody could check it   **G** a deadline was missed because no name was on it   **H** a letter went to the wrong department', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**TASK TWO – what they do now.** For questions **6–10**, choose from the list (**A–H**) what each speaker says they do differently now.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** I put the limit in the same sentence as the finding   **B** I name the person who decides, inside the sentence   **C** I cost the present arrangement out of the reader\'s own figures   **D** I date the information the opinion rests on   **E** I write down what was discarded, and why   **F** I ask a colleague to read everything before it goes   **G** I keep a copy of every document I have not seen   **H** I refuse to write anything that may be relied on', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Speaker 1', 'I am a surveyor and I wrote four words that cost somebody a year. The boundary appears to follow the wall. Appears, because I had the deeds for one side only and I said so in the next sentence. The solicitor quoted the four words in a letter without the next sentence, the other side agreed, and then the second set of deeds turned up and the wall was in the wrong place by about a metre and a half. Nobody did anything dishonest. The limit was in a sentence of its own, so it travelled separately, and documents that travel separately get left behind. Now the limit goes inside the finding, in the same sentence, and nobody can quote the one without the other.'],
  ['Speaker 2', 'I sat on a committee that spent forty minutes on five ways of covering the Saturday shift, and we were good at it. We costed all five and nobody pushed anything. Then the minute came round and it said: agreed, option three. We had not agreed option three. Somebody had to write something in the box and option three was the last one anybody praised. Two of us remembered discarding it on cost and the minute had no box for that at all. We signed it because it was easier than arguing with a secretary about a form. Now I write the discard and the reason for it into the minute myself, before the minute goes anywhere.'],
  ['Speaker 3', 'I am a pharmacist and I wrote a line about stock levels: I would suggest holding four of the smaller cylinders rather than two. Suggest. Within a fortnight the ward was holding four and had sent two back, and three weeks after that they ran short and the sister told the inquiry that pharmacy had instructed them. She was not lying. She had read a recommendation from somebody with a title and there was nobody named in my sentence who could have decided otherwise. The instruction was not in my words. It was in the blank space where the decider should have been. Now the sister is named in the sentence, and the sentence says the decision is hers.'],
  ['Speaker 4', 'I wrote a proposal for a second telephone line and I asked for it in the first paragraph, in the third, in the fifth and in the last. It came back refused in two days. What I had done was tell a budget holder four times that I wanted something, and a want can be refused in four seconds. There was nothing in the document about what the single line was already costing him — the calls that failed, the appointments remade. The second version had the ask once and his own figures for the remaking of appointments, and it went through in eleven days.'],
  ['Speaker 5', 'I run a small laboratory and I gave a colleague a figure over the telephone: about eleven per cent. It was right in the March of that year. Nine months later I found it in a tender document, with my name beside it, as the current rate — and it was down to about four by then because we had changed a supplier. I had not said when I took it, so there was nothing in the figure to stop anybody using it for ever. A number with no date on it does not expire, and that is the whole problem with it. Now I give the month I took it in, in the same breath as the figure, every time.'],
]));
out.push(p('**C  Writing.** Write the proposal (220–260 words): the problem first, with a figure; the ask once; and what the reader is paying now, out of their own figures.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ hold a discussion open for two minutes on five options, and decide nothing',
  '☐ decide in one minute and name the discard with its reason',
  '☐ tell an obligation from a recommendation in somebody else\'s prose',
  '☐ write a recommendation that cannot be read as an instruction',
  '☐ write an opinion with its limit inside the claim, not after it',
  '☐ write a proposal whose first paragraph has no ask in it',
  '☐ cost the present arrangement out of the reader\'s own figures',
  '☐ mediate between an opinion and the party who has to act on it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _kick around · go with · talk through · sign off on · hold to account · vouch for · argue for · plead for · side with · line up with · dial back · rein in_.',
  '**This unit\'s word-formation set** _(Reading Part 2 in 4.7 draws on this unit\'s lexis)_: _oblige → **obligation** · advise → **advisory** · rely → **reliance** · discreet → **discretion** · mandate → **mandatory** · waive → **waiver** · permit → **permissible** · consent → **consensual** · endorse → **endorsement**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _come back_ **→ _come back to you_**, which a reader who has to act will do and a reader with only an opinion will not · _put down_ **→ _put something down to_** a cause, as a committee puts a delay down to the rota, where at A2 it was putting a bag down · _stand up_ **→ _a finding that stands up_**, which is a finding with its limit inside it, where at A2 it was standing up from a chair.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
