// Proactive Business English A1 · Syria Edition · Book 2 · Unit 9 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 9  Yesterday'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the biggest piece of grammar in the course and it is fifteen verbs and one word.** **Eight verbs add _-ed_. Seven do not, and they are the seven the class uses most: took, gave, found, lost, went, came, left.** **There is no rule for the seven.** **Do not look for one and do not let a strong learner look for one** — **tell the class there are seven, name them, and drill them.**',
  '⚠ **Say the good news early:** **the past is the SAME for everybody.** _I opened · he opened · we opened · they opened._ **No -s, no change.** **After the misery of 3.4 that is a relief and the class should be told it in the first five minutes.**',
  '⚠ **9.4 is the cycle with the professional content in it.** **_I did not count it_ was the hardest line on Samih\'s sheet and the only line his supervisor used.** **A shift sheet with only the good news on it tells the next man nothing he needs.** ⚠ **And at work, _did not_ and not _didn\'t_** — **_didn\'t_ disappears on a telephone and in a yard, and then you have said you DID.**',
  '⚠ **9.6 is the most immediately useful cycle in Book 2 and its content is a NUMBER: three.** **Samih tried six once and the next man remembered two.** **Three sentences, in order — still wrong, needs doing, not finished.** **Test it by making a third learner say them back from memory two minutes later.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 9.1 =====================
out.push(h2('9.1  Where everybody was at four o\'clock'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **_I was_ and nothing else, from every learner in the room, before anything is explained.** **_I were_ is the error of the unit and it is cheaper to prevent than to correct.**'));
out.push(p('**b**  Open. **_We were_ — the plural, immediately after the singular.** ⚠ **Taking them as a pair in the warm-up is deliberate:** **a class that meets _was_ alone for ten minutes will use it for both.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — on the Homs road.   **b**  **1** Nour.  **2** Somebody left the big gate open and he wants to know who was near it.'));
out.push(p('⚠ **Play it three times.** ⚠ **And note that Abu Yasser does not say why until the LAST line.** **That is 9.5 arriving early: he asked six open questions and withheld the reason, and so he got six honest answers instead of six careful ones.** **Point at it when you reach 9.5.**'));
out.push(p('⚠ **And _nobody was_**, **which is the item every class gets wrong:** _Nobody **was** in the yard._ **It feels like a lot of people and it takes _was_.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'At four o\'clock yesterday. Where was everybody?'],
  ['B', 'I was in the back store. On row three.'],
  ['A', 'And Samih?'],
  ['B', 'He was with me. We were both on row three.'],
  ['A', 'Fadi?'],
  ['B', 'Fadi was on the Homs road. He left at two.'],
]));
out.push(note("The fourth line is the drill: he was and we were in one breath, twelve words apart. That contrast is the whole cycle and a card that only produced singulars would teach half of it. Make the pairs say line four even when they are shortening the rest."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Three places.** ⚠ **With their detail** — **_in the back store, on row three_, not _in the store_.** **Unit 4 is three units old and this is where it gets used for something.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — five people at four o\'clock yesterday', [
  '**Who:** me   **Where:** at the counter, serving   **was / were:** was',
  '**Who:** Hala   **Where:** in the back, washing trays   **was / were:** was',
  '**Who:** the two delivery men   **Where:** in the van, outside   **was / were:** ⚠ **were**',
  '**Who:** the manager   **Where:** at the bank   **was / were:** was',
  '**Who:** nobody   **Where:** in the cold room   **was / were:** ⚠ **was**',
]));
out.push(note("The last two rows are the ones that earn the table. Two delivery men takes were and nobody takes was, and a learner who has written both down has met the only two traps in the cycle. If a learner's five rows are all singular, ask them to find a pair of people — every workplace has two of somebody."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _At four o\'clock I was at the counter. Hala was in the back. The two delivery men were outside in the van._'));
out.push(p('⚠ **Count the _was_ / _were_ mistakes as a NUMBER, not a list** — **same rule as the -s in 3.4, and for the same reason.** **Two or three in a first round is normal and it halves on the second.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Two — Ammar and Samih.  **2** Abu Raed, at the small gate, and he left at 3.45.  **3** Who was near the big gate between 3.45 and 4.00 — which is nobody on this sheet.'));
out.push(p('⚠ **Question 3 is the hardest reading question in Unit 9 and the answer is about a HOLE in the sheet.** **Everybody is accounted for and the gate was still opened** — **and the last fifteen minutes before four are not covered by anybody.** **That is 9.7 arriving in cycle one, and a learner who finds it has read better than the sheet was written.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (27 words)', [
  '**WHERE EVERYBODY WAS — FRIDAY, 4.00 p.m.**',
  table(['Who', 'Where', 'Could see the till?'], [
    ['me', 'at the counter', '**yes**'],
    ['Hala Mourad', 'the back, washing trays', 'no'],
    ['the two delivery men', 'the van, outside', 'no'],
    ['the manager', 'the bank', 'no'],
  ], [1.8, 2.4, 1.8]),
  '⚠ **Four people. One could see the till. The till was forty thousand short at six. S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **A time in the heading WITH a.m. or p.m.** **A place with a name or a number, not _the shop_.** ⚠ **And a third column that ASKS something** — **_could see the till_, _was near the gate_, _had the key_.** **A sheet with no third column answers nothing.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the heading. **(reading)** "4.00". ⚠ **Morning or afternoon?**',
  '**(pointing)** Here. **(reading)** "in the shop". ⚠ **Where in the shop? There are four places.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their third-column HEADING and the class says what question it answers.** **A heading like _notes_ answers nothing** — **and the class will say so, which is faster than explaining it.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**At four o\'clock yesterday I was at the counter alone. Hala was in the back and could not see me. Nobody could say where I was for an hour, and the till was short.**',
]));
out.push(p('⚠ **_Nobody could say where I was_ is the sentence this stage is built to produce**, **and in a workplace class it is said with some feeling.** **A man alone at a till for an hour has no witness, and 7.4 already taught the class what a missing witness costs.** **Point back at it.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who could say where you were?_ — **_Nobody. The camera, maybe._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many people were alone, with nobody who could say where they were?** **Most, for part of the day.** ⚠ **Do not turn it into a lesson about suspicion** — **the useful half is that a man who can be vouched for is a man who does not have to argue.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**At 4.00 p.m.: I was at the counter. Hala was in the back. The two drivers were outside. The manager was at the bank. Nobody was in the cold room.**',
]));

out.push(pb());
// ===================== 9.2 =====================
out.push(h2('9.2  Fifteen verbs, and what they do in the past'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three things in Arabic and the English on the board, and leave the board up for the whole cycle.** **The class will supply eight or nine of the fifteen verbs itself in four minutes, which is a better way to meet the list than reading it.**'));
out.push(p('**b**  Open. ⚠ **Ask which FIVE they use most, not which they know.** **Most learners pick from: started, finished, came, took, went.** **Four of those five are irregular, which is the bad news and is worth saying before they find out.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the light went out.   **b**  **1** He opened the back store and checked the shelves.  **2** Nine or ten, depending on how you count the unloading.'));
out.push(p('⚠ **Count the past verbs in the dialogue with the class — there are about fourteen — and then point out that EIGHT of them are in the fifteen-verb table.** **The class has just understood a whole shift report using a list it can hold in one hand.**'));
out.push(p('⚠ **And the professional content, which is not grammar:** _At eleven the light went out. I stopped work._ **He stopped.** **Then he found a way to carry on — the torch — and the sequence is stop, think, carry on safely.** **Unit 10 is built on that and this is its first appearance.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The night shift. Tell me.'],
  ['B', 'I started at ten. I opened the back store and I checked the shelves.'],
  ['A', 'Then?'],
  ['B', 'At eleven the light went out. I stopped work.'],
  ['A', 'And then?'],
  ['B', 'I took the torch. Then the lorry arrived at one.'],
]));
out.push(note("Three regular verbs in the first line and two irregular in the last: started, opened, checked, then went and took. That is the shape of the whole unit in one exchange, and it is why this card is worth drilling rather than the longer list. A learner who can say those five without thinking has the cycle."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Write every past verb and count them.** ⚠ **A number on the board for each pair.** **Five or six in a performed version, and the count is the only feedback that does not sound like correction.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — six things that happened yesterday', [
  '**1** The bread **came** an hour late. — _came_',
  '**2** I **opened** at six and nobody **arrived** until half past. — _opened, arrived_',
  '**3** The till roll **finished** and I **took** the spare from the drawer. — _finished, took_',
  '**4** A customer **lost** her purse in the shop. — _lost_',
  '**5** We **found** it under the bread rack. — _found_',
  '**6** I **closed** at eight and **gave** the keys to the manager. — _closed, gave_',
]));
out.push(note("Six lines and nine verbs, five of them from the irregular seven: came, took, lost, found, gave. That is a realistic proportion and it is why the seven matter more than the eight — the things that happen in a day are mostly described by the hard verbs. Say that to the class when you set the stage."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Yesterday the bread came late. Then the till roll finished and I took the spare. At four a customer lost her purse and we found it._'));
out.push(p('⚠ **Count how many of the SEVEN hard verbs appear in the reports.** **Put the seven on the board and tick them as they come up** — **a class usually produces six of the seven in ten reports, and the one that goes missing is _gave_.**'));
out.push(p('**Board clinic:** eight past verbs, three wrong — _goed_, _taked_, _leaved_. ⚠ **These three errors are PROGRESS, not carelessness.** **A learner who writes _goed_ has learned the -ed rule and applied it.** **Say so, then fix it.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** 23.00.  **2** Two hours — it came at 01.00 and was expected at 03.00.  **3** _I did not count it._'));
out.push(p('⚠ **Question 3 is the whole of 9.4, one cycle early, and the answer is the only line on the sheet that is bad news.** **Ask the class which line they would have left off.** **Most will say that one, and most supervisors would use only that one.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words)', [
  '**EARLY SHIFT — FRIDAY — H. MOURAD**',
  table(['Time', 'What happened'], [
    ['04.00', 'I **started**. I **opened** the bakery.'],
    ['05.30', '⚠ **The water stopped.** I **did not wash** the trays.'],
    ['06.00', 'I **baked** eighty loaves on the dirty trays.'],
    ['07.15', 'The bread van **came**. I **gave** the driver forty.'],
    ['08.00', 'The water **came** back.'],
    ['09.00', 'I **washed** the trays and **finished**.'],
  ], [1.2, 4.4]),
  '⚠ **The water has stopped three mornings. Nobody has been told but you. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **24-hour time on every line** — **a night or early shift crosses midnight and _1.00_ is unreadable there.** **The lines in order.** **Past verbs, no _goed_.** ⚠ **And at least one line that is bad news.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "1.00 lorry came". ⚠ **One in the morning? Write 01.00.**',
  '**(pointing)** at six good lines. ⚠ **Nothing went wrong at all? Where is the bad line?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their BAD-NEWS line and the class says whether they would have written it.** **Expect honesty** — **a lot of hands stay down.** **Then read Samih\'s sheet line six aloud and say what his supervisor did with it.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**On Tuesday the water stopped at half past five and I baked on dirty trays. I wrote it on the sheet. Nobody read the sheet, so on Wednesday I baked on dirty trays again.**',
]));
out.push(p('⚠ **_Nobody read the sheet_ is a finding and it is not the learner\'s fault.** ⚠ **It is also the first half of an argument the class should hear:** **a sheet nobody reads is a reason to tell somebody out loud AS WELL**, **which is 6.6\'s both-things rule arriving in a new place.** **Point at it.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did you write it down at the time?_ — **_Yes. Twice. Nobody looked._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was it written down at the time?** **And the harder follow-up: in how many did somebody READ it?** **The gap between those two numbers is a real problem in most workplaces and it is not solved in Unit 9** — **say so honestly. Unit 12 is where it gets solved.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (30 words)', [
  '**04.00 started, opened. 05.30 water stopped, did not wash trays. 06.00 baked eighty. 07.15 van came, gave forty. 08.00 water came back. 09.00 washed trays, finished.**',
]));

out.push(pb());
// ===================== 9.3 =====================
out.push(h2('9.3  Last night, last week, on Monday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **_Last night_ is nearest.** **Then yesterday, then on Monday, then last week** — **though that depends on which day it is, and a class that argues about it has understood all four.**'));
out.push(p('**b**  **The second line.** ⚠ **Count what the second one adds: a day AND a time, which are two facts for four words.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — three nights.   **b**  **1** He thought somebody had told Abu Yasser.  **2** It changes it from a bulb into the wiring, and the wiring needs a man from outside.'));
out.push(p('⚠ **This is the most valuable dialogue in Unit 9 and the content is not grammatical at all:** _One night is a bulb. Three nights at the same time is the wiring._ ⚠ **THE WHEN CHANGES WHAT IT IS.** **Put that sentence on the board.**'));
out.push(p('⚠ **And the quiet half:** _I thought somebody had told you. — Nobody told me anything._ **Third time in Book 2 and fourth time in the course.** **Samih assumed, exactly as the four men assumed in 7.7** — **and the class should recognise the shape by now.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The light went out last night at eleven.'],
  ['B', 'Last night, and the night before, and Tuesday.'],
  ['A', 'Three nights?'],
  ['B', 'Three nights. I thought somebody had told you.'],
  ['A', 'Three times, at about the same time, three nights running.'],
  ['B', 'Is that different from one night?'],
]));
out.push(note("The last line is the learner's question and it should be left unanswered in the drill — the answer is in the Language box and in the Lesson B sheet. A pair who have asked is that different from one night? and not been told are a pair who will read the box."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How many nights AND at what times.** ⚠ **All of them.** **Three times written in a column is where a pattern becomes visible, and the point of the cycle is that a pattern cannot be seen in one line.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things that happened more than once', [
  '**What happened:** the water stopped   **When:** Sun 05.30, Wed 05.30, Fri 05.30   **How many:** 3',
  '**What happened:** the bread came late   **When:** every Thursday since February   **How many:** ⚠ **about 9 — I have not counted**',
  '**What happened:** the till was short   **When:** 2 Apr, 14 Apr   **How many:** 2',
  '**What happened:** the freezer door did not shut   **When:** ⚠ **most days, for a year**   **How many:** ⚠ **nobody knows**',
]));
out.push(note("Rows two and four are the useful ones and they are the honest ones: about nine, I have not counted, and nobody knows. A learner who writes those has found the real problem, which is that the thing that has happened most often is the thing with no record at all. Do not push them to invent a number — push them to notice that the number is missing."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The water stopped on Sunday, on Wednesday and on Friday. Three times. All three at half past five._'));
out.push(p('⚠ **The count here is of TIMES, not of things** — **and the question to ask is which thing in this class has happened most often.** **It is nearly always something with no written record**, **which is the finding and it arrives from the room rather than from the book.**'));
out.push(p('**Board clinic:** four lines with no when. ⚠ **Add a when, and then ask the extra question: has it happened before?** **That second question is the clinic.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Three — 22.30, 23.00, 23.00.  **2** The wiring, not a bulb — an electrician on Monday, loading door closed after dark until then.  **3** That three nights happened and only one man knew.'));
out.push(p('⚠ **Question 2 needs both halves — the diagnosis AND what happens now.** **A learner who answers _the wiring_ has read the table and not the decision.** ⚠ **And question 3 is the fourth appearance of Book 1\'s lesson:** _three nights and one man knew._'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (34 words)', [
  '**THE WATER IN THE MORNING — WHAT WE ACTUALLY KNOW**',
  table(['When', 'Time', 'Who was there'], [
    ['Sunday', '05.30', 'H. Mourad'],
    ['Wednesday', '05.30', 'H. Mourad'],
    ['Friday', '05.30', 'H. Mourad'],
  ], [1.8, 1.6, 1.8]),
  '⚠ **The pattern:** three mornings, always 05.30, always about an hour after the first tap is opened.',
  '⚠ **So:** not the tap. The tank or the pump. Ring the landlord Monday, and fill two buckets the night before.',
  '**H. Mourad**',
]));
out.push(p('**What to credit.** ⚠ **ONE LINE PER TIME, with a date and a time on each** — **three lines showing a pattern, not one line saying _happens most mornings_.** **A line naming the pattern.** ⚠ **And a line saying what happens now** — **a sheet that stops at the pattern is still only information.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at one line. **(reading)** "happens most mornings". ⚠ **How many? Make it one line each.**',
  '**(pointing)** at the pattern line. ⚠ **And so? What happens now?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their PATTERN line and the class checks it against the table above it.** **A pattern that is not visible in the rows is a guess** — **and the class is good at spotting that, because the table is right there.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The freezer door has not shut properly for a year. Everybody pushes it with a knee. Nobody has counted the days and nobody has written it down, so it is still a door and not a repair.**',
]));
out.push(p('⚠ **_So it is still a door and not a repair_ is the sentence to mark**, **and it is this cycle\'s idea in the learner\'s own words:** **without a count it stays a nuisance; with a count it becomes a job.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How many people know?_ — **_Everybody. For a year._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many of these things are known to only ONE person?** ⚠ **And then the better question, which the class will not expect: how many are known to EVERYBODY and still not written down?** **Usually more.** **Point back at 7.7** — **the more people know, the less likely anybody records it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (28 words)', [
  '**The water: Sunday 05.30, Wednesday 05.30, Friday 05.30. Three times, same time, always an hour after opening. Not the tap. The pump. Ring the landlord.**',
]));

out.push(pb());
// ===================== 9.4 =====================
out.push(h2('9.4  I did not count it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take one from everybody, and take it without comment.** **The point of the warm-up is that saying _I did not_ out loud is ordinary** — **a class that has heard twelve of them in two minutes will write one on a sheet.**'));
out.push(p('**b**  ***I did not count it*** **is correct.** ⚠ **Ask what happened to the _-ed_.** **It moved onto _did_.** **The same move as 3.4, where the -s moved onto _does_.** **One idea, twice, and saying so saves half an explanation.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — count the load.   **b**  **1** They unloaded in the dark with one torch.  **2** _It is the only line on that sheet I am going to use._'));
out.push(p('⚠ **The whole cycle is in the last two exchanges:** _That line was the hardest one to write. — I know. And it is the only line on that sheet I am going to use._ ⚠ **Read it twice.** **The hardest line to write is the useful one, and a supervisor said so.**'));
out.push(p('⚠ **And note what Samih did as well as what he did not do:** **he signed the note AND wrote _not counted, no light_ beside his name.** **That is Unit 5.4 exactly, used without being told** — **and he says so: _like Unit five_.** **The book is allowed to point at itself here; the class will enjoy it.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Line six. I did not count it.'],
  ['B', 'I did not count it. We unloaded in the dark with one torch.'],
  ['A', 'Forty in the dark.'],
  ['B', 'Forty on the paper. I did not count forty. I counted nothing.'],
  ['A', 'Did you sign the note?'],
  ['B', 'I signed it and I wrote not counted, no light beside my name.'],
]));
out.push(note("I counted nothing is the line that makes the admission exact, and learners soften it to I did not count all of them. Push back on that: all of them implies some, and some is the vagueness 7.3 spent a whole cycle removing. Nothing is a number."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **What he did NOT do, and what he wrote beside his name.** ⚠ **Two answers, and the second is the one that turns an admission into a record.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things I did not do', [
  '**Did not do:** wash the trays   **Why not:** no water   **Wrote it down:** yes   **Anybody found out:** yes, the manager read the sheet',
  '**Did not do:** count the bread van   **Why not:** three customers waiting   **Wrote it down:** no   **Anybody found out:** ⚠ **yes — we were four loaves short**',
  '**Did not do:** finish the cold room   **Why not:** ran out of time   **Wrote it down:** yes   **Anybody found out:** no, Hala did it at four',
  '**Did not do:** ring the landlord   **Why not:** forgot   **Wrote it down:** no   **Anybody found out:** ⚠ **not yet**',
]));
out.push(note("Compare rows two and three. In row two nothing was written and the shortage was found anyway, badly and late. In row three something was written and nobody had to find out, because the next person simply did it. That is the argument for the cycle and it is in the learner's own table."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I did not count the bread van, because three customers were waiting. I did not write it down. We were four loaves short._'));
out.push(p('⚠ **Two counts: how many were written down, and how many were found out anyway.** ⚠ **The interesting cell is the one where it was NOT written and WAS found out** — **that is the expensive corner, and in most classes it is the fullest.**'));
out.push(p('**Board clinic:** four lines, two with _did not counted_ or _did not took_. ⚠ **Correct them, and then say the rule once more in the 3.4 form:** **the past goes onto _did_ and comes off the verb.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** All forty were counted the next morning, two were short, and it was claimed from Aleppo.  **2** 4,000 pounds.  **3** Ammar did row four at seven, so nobody looked for finished work.'));
out.push(p('⚠ **Question 3 is the small one with the best lesson.** **Nobody would ever have found out that row four was unfinished** — **and writing it saved somebody twenty minutes of checking work that was already done.** **A _did not_ line is not only for the expensive things.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**I DID NOT — FRIDAY, EARLY SHIFT**',
  '**1** I did not wash the trays — the water was off until eight.',
  '**2** I did not count the bread van — three customers were waiting.',
  '**3** The landlord did not ring back — I left two messages.',
  '**4** I did not finish the cold room — I ran out of time at nine.',
  '⚠ **Who needs to know:** the manager — lines 1 and 2 today, line 3 Monday.',
]));
out.push(p('**What to credit.** ⚠ **_did not_ + the bare verb.** **A reason on every line** — **it is what makes the line a report instead of an admission.** ⚠ **At least one line nobody would have found out about.** **And a line saying who needs to know, which is Unit 12 arriving early.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "I did not finished the cold room". ⚠ **_did not finish_. The past is on _did_.**',
  '**(pointing)** Here. **(reading)** "I did not wash the trays". ⚠ **Why not? Four words.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read the line nobody would have found out about, and the class says what it SAVES.** **Twenty minutes, a double check, a second count.** **That is the answer to a learner who thinks a _did not_ line is a confession.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**I wrote that I had not washed the trays. The manager read it, rang the landlord herself and had the pump looked at. If I had said nothing she would have blamed the bread.**',
]));
out.push(p('⚠ **_She would have blamed the bread_ is the quiet point of the cycle.** **An unexplained problem gets explained wrongly by somebody else** — **and the wrong explanation is usually the one nearest to hand.** **A _did not_ line is how you stop somebody else guessing.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _What would have happened if you had not written it?_ — **_She would have thought the flour was bad._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many would NOBODY have found out?** **Those are the brave ones.** ⚠ **And in how many did the written line stop somebody guessing wrongly?** **Say both numbers.** **The second is the professional argument for the whole unit.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**I did not wash the trays — no water. I did not count the van — customers waiting. I did not finish the cold room — no time. I did not ring the landlord — forgot.**',
]));

out.push(pb());
// ===================== 9.5 =====================
out.push(h2('9.5  What happened?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Listen for whether the Arabic asks WHO.** **In most rooms it does, and in most workplaces it does too** — **which is why this cycle exists and why it is for the supervisors in the room as much as for the storemen.**'));
out.push(p('**b**  ***What happened?*** **gets more.** ⚠ **Ask why.** **Because the other man tells you the thing HE thinks matters, and he was there.** **_Who broke it?_ gets you one name and ends the conversation.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — one.   **b**  **1** _What happened?_  **2** He does not ask who did it.'));
out.push(p('⚠ **Abu Yasser asks ONE question and gets the whole night, including the three-nights story he was not looking for.** **Count his words in the dialogue: about forty, and twenty of them are the explanation at the end.**'));
out.push(p('⚠ **And the technique is the SILENCE.** **The stage direction _(says nothing)_ is the most important line in the dialogue.** **Four seconds, and Samih volunteered the thing he had been sitting on since Tuesday.** ⚠ **Say that to the class: the silence after the question is part of the question.**'));
out.push(p('⚠ **The last line explains the whole card in Lesson B:** _if I had asked "who left the gate open" you would have told me about the gate and not about the light._ **A closed question gets you an answer to the question you asked, which is not the same as what you need to know.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Samih. What happened?'],
  ['B', 'The light went out at eleven. I took the torch. The lorry came at one and we unloaded in the dark. I did not count it.'],
  ['A', '_(says nothing — four seconds)_'],
  ['B', 'And it has been out three nights, not one.'],
  ['A', 'Yes.'],
  ['B', 'Are you not going to ask me anything else?'],
]));
out.push(note("The silence has to be timed, out loud, by the class — count four together the first time. Teachers find this drill uncomfortable and cut the silence to one second, which removes the only thing being practised. Four seconds is long. That is the point: the other man fills it, and what he fills it with is what he thinks matters."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **How many facts came AFTER the silence?** ⚠ **Count them.** **In a performed version it is usually one or two** — **and in the dialogue it is the single most important fact in the unit.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — what happened, and then the silence', [
  '**Said first:** _The bread came late and I opened at half past six._   **After the silence:** ⚠ **_And it has come late every Thursday since February._**',
  '**Said first:** _The till was forty short._   **After the silence:** ⚠ **_And I was alone at the counter for an hour because Hala was ill._**',
]));
out.push(note("Both second columns are the useful information and neither was asked for. That is the whole cycle in two rows, and it comes out of the class's own pairs rather than out of the book. Take two or three of these to the board — the pattern is immediately visible and nobody has to be persuaded of it."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I asked what happened. He said the till was forty short. Then I said nothing, and he said he had been alone at the counter for an hour._'));
out.push(p('⚠ **Count the pairs where the silence got more information.** **It is nearly all of them, and the figure should be said out loud** — **it is the cheapest technique in Book 2 and the one that takes the least learning.**'));
out.push(p('**Board clinic:** ⚠ **do this one exactly as written.** **Ask four learners _who did it?_ and four learners _what happened?_, about the same invented problem.** **Write both sets of answers on the board.** **The difference is a column of names against a column of facts, and it needs no commentary.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Say nothing — count to four.  **2** Question 3: _has it happened before?_  **3** _Who did it_ — because you get a name and lose the story.'));
out.push(p('⚠ **Question 3 names the one line on the card that takes a question AWAY**, **and it is the most useful line on it.** **A card that only adds things is a card of advice; a card that forbids something is a card that changes behaviour.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (40 words)', [
  '**WHEN SOMETHING HAS GONE WRONG — THE SHOP**',
  '**1** _What happened?_ ⚠ **Then say nothing. Count to four.**',
  '**2** _What time?_ ⚠ **Only if she has not said.**',
  '**3** _Has it happened before? How many times?_ ⚠ **This is the one that finds the pump instead of the tap.**',
  '**4** _What did you not get done?_ ⚠ **Easier to answer than "what went wrong".**',
  '**5** _What do you need from me?_',
  '⚠ **Do NOT ask whose fault it was, because you will get a name and lose the morning. H.M.**',
]));
out.push(p('**What to credit.** ⚠ **The OPEN question first, with the silence on it.** **A question about whether it has happened before.** **A question asking what the person needs.** ⚠ **And a line saying what NOT to ask, WITH the reason.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at question 1. **(reading)** "What happened?". ⚠ **And then? Write the silence down.**',
  '**(pointing)** at the bottom. **(reading)** nothing. ⚠ **What must you not ask?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _do not ask_ line and the class says what it PROTECTS.** **The answer is the story, or the morning, or the next man\'s willingness to tell you anything.** **Any of those three is right.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**When the till was short the manager asked who had been on it. I said me. She stopped there. She never found out that I was alone for an hour with a queue.**',
]));
out.push(p('⚠ **_She stopped there_ is the cost, and it is paid by the manager rather than the learner.** **A closed question answered honestly closes the conversation** — **and the information that would have fixed the problem was one open question away.** **That is worth saying to the supervisors in the room.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did they ever find out the rest?_ — **_No. It happened again in May._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was the rest never found out?** **Most.** ⚠ **And in how many did the same thing happen again?** **Say both.** **A problem whose cause was never asked for is a problem that comes back, and the two numbers show it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**1 What happened? Then nothing, four seconds. 2 What time? 3 Has it happened before, how many times? 4 What did you not get done? 5 What do you need? Never: whose fault.**',
]));

out.push(pb());
// ===================== 9.6 =====================
out.push(h2('9.6  Three sentences, in order'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three, and stop them at three.** **A learner who gives five has to choose which two to drop, and the choosing is the exercise.**'));
out.push(p('**b**  Open. ⚠ **Read nine things in one sentence aloud, fast, then three sentences slowly, and ask the class what it remembers.** **Do it before the Language box.** **The number three has to be discovered, not announced.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — three.   **b**  **1** The light, which is still out now.  **2** Row four, which is not finished.'));
out.push(p('⚠ **The ORDER is the content and it is in the Language box:** **still wrong → needs doing → not finished.** **Sentence one is what will hurt somebody in the next hour. Sentence three is tidying.** **A handover in the wrong order is three facts in a bag.**'));
out.push(p('⚠ **And the reason for the number, from the man who found it out:** _I tried six once and he remembered two. Three is what a man carries across a shift change._ ⚠ **That is an empirical claim and the class can test it in stage 4R** — **which is exactly what stage 4R does.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Samih. You are going home. What do I need to know?'],
  ['B', 'Three sentences. The light went out at eleven and it is still out.'],
  ['A', 'Still out. Right.'],
  ['B', 'The lorry came two hours early and we unloaded forty. I did not count them.'],
  ['A', 'Not counted.'],
  ['B', 'And row four is not finished.'],
]));
out.push(note("The listener's two short acknowledgements — still out, right and not counted — are in the card on purpose: they are the proof the three sentences landed. A handover where the other man says nothing is a handover you cannot be sure of, and two words per sentence is what confirming costs."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three things in THREE WORDS — light, lorry, row four.** **And then the real test: say them back from memory two minutes later.** **Set a timer, do something else, come back to it.** **That delay is the whole assessment and skipping it tests nothing.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — my last shift in three sentences', [
  '**1 still wrong:** _The water goes off at half past five and it is off now._   **Words:** 13',
  '**2 needs doing:** _Eighty loaves were baked on unwashed trays and need checking before they go out._   **Words:** 14',
  '**3 not finished:** _The cold room is not done._   **Words:** 7',
]));
out.push(note("Thirteen, fourteen and seven words. Short, and the third one shortest, which is right — the tidying sentence deserves the fewest words. A learner whose third sentence is the longest has the order wrong, and the word count shows it faster than reading does."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Water, trays, cold room. The water is off now. Eighty loaves need checking. The cold room is not done._'));
out.push(p('⚠ **The partner says them back from MEMORY, and you count how many survived.** **Three out of three is the pass.** ⚠ **Then do it again with six sentences and count again.** **Every class gets three out of three and then two or three out of six, and that result is the cycle.**'));
out.push(p('**Board clinic:** six sentences read aloud, then three. ⚠ **Have the class write what it remembers both times and compare the two sets on the board.** **Nobody argues with the number three afterwards.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Three.  **2** It says it has happened before and does not say how many times.  **3** Whether to tell Abu Yasser at all.'));
out.push(p('⚠ **Question 2 is 9.3 used as a critical tool and it is the sharpest item in Unit 9.** **_Light trouble again_ contains the word _again_, which is a count without a number** — **and the difference between a bulb and an electrician is exactly that number.** ⚠ **And question 3: _tell A.Y. maybe_ hands a decision to a man who has less information than the writer.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (32 words)', [
  '**HANDOVER — FRIDAY 09.00, EARLY SHIFT**',
  '**1** The water goes off at 05.30 every morning and it is off now.',
  '**2** Eighty loaves were baked on unwashed trays at 06.00 and have not been checked.',
  '**3** The cold room is not done — I got to the second shelf.',
  '**H. Mourad**',
]));
out.push(p('**What to credit.** ⚠ **EXACTLY three, numbered.** **Sentence 1 is the thing still wrong NOW.** ⚠ **No _mostly_, no _maybe_, no _again_ without a number** — **those three words are the whole of the bad handover in Lesson B.** **A time on anything that has one.**'));
out.push(p('⚠ **And credit the detail in sentence 3 of the sample:** _I got to the second shelf._ **_Not finished_ is a fact; _not finished, I got to the second shelf_ is a starting point.** **Four extra words save the next person finding out where to begin.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Rows mostly done". ⚠ **Mostly? Which ones? I will have to check all four.**',
  '**(pointing)** Here. **(reading)** "Tell the manager maybe". ⚠ **Maybe is my decision now, and I know less than you.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their three, a THIRD says them back from memory, and the class counts how many survived.** **This is the only stage in the course where a piece of writing is marked by somebody\'s memory**, **and it is the right test for a handover.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**The night man left me a note that said busy night, did what I could. I spent the first hour finding out that the freezer was off and two hundred loaves were soft.**',
]));
out.push(p('⚠ **_I spent the first hour finding out_ is the cost of a bad handover, measured in the only unit that matters.** **Add up the hours in stage 7R** — **a class of sixteen usually produces a working week, and the figure is the strongest argument the cycle has.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _How long did it take you to find out?_ — **_An hour. The loaves were already soft._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then ADD UP the time this class has spent finding out things the last shift knew.** **Put the total on the board in hours.** ⚠ **Then divide it by the number of learners and say that figure too.** **Three sentences would have prevented nearly all of it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(p('⚠ **This homework asks the learner to LEAVE the handover for a real person.** **Ask next lesson whether the next person said anything about it.**'));
out.push(sample('Sample answer (23 words)', [
  '**1 The water is off and goes off at 05.30 daily. 2 Eighty loaves on unwashed trays, not checked. 3 Cold room not done, second shelf.**',
]));

out.push(pb());
// ===================== 9.7 =====================
out.push(h2('9.7  Review: the shift report'));
out.push(stage('1', 'Get ready – Unit 9 quiz'));
out.push(table(['', 'The answer'], [
  ['**9.1**', '_I was at the counter. Hala was in the back. The two drivers were outside._'],
  ['**9.2**', '_I started, I opened, I checked_ ⚠ **and two of: took · gave · found · lost · went · came · left**'],
  ['**9.3**', '_Last night at eleven._ ⚠ **And: it happened on Tuesday and Wednesday too. Three nights.**'],
  ['**9.4**', '_I did not count it — no light._'],
  ['**9.5**', '_What happened?_ ⚠ **Then nothing.**'],
  ['**9.6**', '**Three sentences: still wrong, needs doing, not finished.**'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **9.2 is the one to listen to** — **a learner who produces _goed_ or _taked_ should hear the right form once and be ticked, because that error is the -ed rule working too hard.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — two men remember the same night differently.   **b**  **1** One o\'clock.  **2** Three o\'clock.'));
out.push(p('⚠ **Neither man is wrong and neither sheet is false.** **Samih wrote _01.00 lorry arrived_ and the lorry arrived at 01.00. Hani wrote _03.00 unloaded_ and it was unloaded at 03.00.** **Between the two true sheets there is a hole two hours wide, and a forty-carton lorry sat in a dark yard inside it.**'));
out.push(p('⚠ **And Samih was RIGHT not to unload alone in the dark.** **That is 4.6 and 10.6, and the class must not be allowed to conclude that he should have done it.** **The fault is not the waiting. The fault is that the waiting was not an event to either of them.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Neither man can be played as careless, because neither was.** **Samih waited for a second man rather than unload forty cartons alone in the dark. Hani came when he was called and unloaded.** ⚠ **If a learner starts blaming one of them, ask what that man should have written** — **and the answer is a sentence about waiting, which neither of them thought of.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **_Neither._** **Then the real question: what is missing from both?** **The gap.** **Two hours in which a loaded lorry stood in an unlit yard with nobody near it, and no line anywhere says so.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — the same hour, two versions', [
  '**The hour:** six to seven on a Thursday.   **One would say:** _I opened and served the first customers._   **The other would say:** _I was waiting for the bread._   **Missing from both:** ⚠ **that nothing was for sale for forty minutes.**',
  '**The hour:** the Tuesday delivery.   **One would say:** _I unloaded it._   **The other would say:** _I signed for it._   **Missing from both:** ⚠ **that nobody counted it — each thought the other had.**',
]));
out.push(note("The second sample is 7.7 and 9.7 in one row and real classes produce it constantly: two men, two true accounts, and a count that nobody did because each assumed the other. It is worth putting on the board beside the lorry, because the shape is identical and the class will see that this is one problem and not two."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Samih**', '⚠ **the lorry came at 01.00 and he wrote it** — **and he was right not to unload forty cartons alone in the dark, which is 4.6**', '**nothing he did.** ⚠ **One more line: _waited for second man_. And a telephone call at one.**'],
  ['**Hani**', '⚠ **he unloaded at 03.00 and he wrote it** — **and nobody told him the lorry had been in the yard since one, so he could not have come sooner**', '**nothing he did.** ⚠ **One more line: _lorry had been in yard since 01.00_.**'],
  ['**The rule**', '⚠ **WRITE THE WAITING. A gap is an event.** **And when the gap is two hours of a loaded lorry in a dark yard, it is worth a telephone call at one in the morning.**', '**nothing.** ⚠ **Two lines and one telephone call.**'],
], [1.2, 4.6, 3.4]));
out.push(p('**Report (sample):**  _Samih is right because the lorry came at one and he wrote it, and he was right not to unload alone in the dark. Hani is right because he unloaded at three and nobody told him it had been waiting. So both of them write the waiting — waited for second man, and lorry had been in yard since one — and Samih telephones Hani at one._'));
out.push(p('⚠ **The words to keep:** _two true sheets, and between them two hours that nobody can account for._'));
out.push(p('⚠ **And the finding, which is the hardest in Book 2:** **a sheet records what you DID.** **Nobody records what they were WAITING for, because waiting does not feel like an event** — **it feels like the absence of one.** ⚠ **This is the only kind of gap that two HONEST records can leave between them, and it is invisible precisely because both halves are true.**'));
out.push(p('⚠ **Lay it next to 7.7 and say the difference out loud.** **7.7 was four men and an EMPTY sheet** — **nobody wrote anything.** **9.7 is two men and two FULL sheets, and it is worse, because there is nothing to notice.** **An empty sheet is a question. Two complete sheets are an answer, and this one is wrong.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'B', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **All five answers are (B) and that is not an accident of drafting** — **in all five the correct reading is the MIDDLE one between doing nothing and doing too much**, **which is what a notice is usually for.** ⚠ **But tell the class the pattern afterwards, not before**, **and be aware that a learner who spots it can score five without reading.** **If your class is that class, read the five aloud in a different order.**'));
out.push(p('⚠ **A2 Key Reading Part 1, ninth time of asking.** **Time the room and tell them the figure** — **by Unit 9 a good class is finishing it in three or four minutes.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** the manager',
  '**At 05.30 the water went off again. I baked eighty loaves on unwashed trays. I did not wash them — there was no water. Please ring the landlord about the pump.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**a TIME in the first sentence**'],
  ['**1**', '**what happened, in the past**'],
  ['**1**', '**what you did**'],
  ['**1**', '⚠ **a _did not_ WITH its reason**'],
  ['**1**', '⚠ **what the reader must do**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **Ninth unit running.** ⚠ **And one extra check in this unit only: is there a _did not_ in there?** **A report of a shift with nothing missing from it is a report nobody needs.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, one of which must be a _did not_ with a reason, and the last of which is what the reader must do.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**The lorry came at 01.00, two hours early. I waited for the second man and we unloaded at 03.00. I did not count it — there was no light. Please count it this morning.**',
]));
out.push(note("That model answer is 9.7 solved in thirty words, and it is worth showing the class after the mediation rather than before. It contains the waiting — I waited for the second man — which is the one line neither Samih nor Hani wrote. A learner who produces it has understood the cycle rather than the grammar."));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'c', 'b', 'a', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Question 3 is _nobody **was**_**, **which feels plural and is not, and it is the item most often wrong.** ⚠ **Questions 4 and 5 are two of the irregular seven, _took_ and _went_, and the distractors are the two errors that show the -ed rule working: _taked_ and _goed_.** **Mark them wrong and then say that the error is a good sign.** ⚠ **Question 6 is _did not count_ against _did not counted_** — **the 3.4 move, done twice in one course.**',
  '**B  Listening — 6 marks**, one each. **Four in the morning (1) · the water (1) · half past five (1) · three (1) · she did not wash the trays because there was no water — BOTH halves needed (1) · water, trays, cold room (1).** ⚠ **Item 4 is after the silence** — **Hala volunteers the three mornings and nobody asks her** — **so a learner who stops listening when the first answer finishes will miss it.** **That is the point of the item.**',
  '**C  Reading — 3 marks:** **three things (1) · _again_ says it has happened before without saying how many times (2).** ⚠ **The second answer is worth two because it is 9.3 used as a tool, and a learner who can state it has the most transferable idea in the unit.**',
  '**D  Writing — 8 marks:** **four sentences (2) · a time (1) · what happened, in the past (1) · what you did (1) · a _did not_ with a reason (2) · what the reader must do (1).** ⚠ **The _did not_ is worth two.** **It is the hardest line to write and the only one the supervisor uses.**',
  '**Total 25.** ⚠ **The profile to expect: A split on 3, 4 and 5; B split on item 4; C split on the two-mark answer; D high but check for the _did not_.** ⚠ **If a paper is full marks on A and has no _did not_ in D, the learner has the grammar and not the unit.** **That is worth a sentence when you hand it back.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six things. First, the size of it. This is the biggest piece of grammar in the course and it is fifteen verbs and one word. Eight add -ed, seven do not, and the seven are the ones the class uses most: took, gave, found, lost, went, came, left. There is no rule for the seven, so do not hunt for one and do not let a strong learner hunt for one either — name them, drill them, and move on. Second, the good news, which should be said in the first five minutes: the past is the same for everybody. I opened, he opened, we opened, they opened. No -s. After the misery of 3.4 the class will be relieved and the relief buys you the irregular seven. Third, goed and taked are progress. A learner who writes them has learned the -ed rule and applied it everywhere, which is exactly what you asked for. Say that before you correct it; the alternative is a learner who stops generalising, and generalising is how the eight regular verbs got learned. Fourth, 9.4 and the hardest line. I did not count it was the hardest line on Samih's sheet and the only one his supervisor used. At work say did not and not didn't — didn't disappears on a telephone and in a yard, and then you have said you did. And the reason the line matters is not honesty for its own sake: an unexplained problem gets explained wrongly by somebody else, and the wrong explanation is the one nearest to hand. Fifth, 9.5 and the silence. Four seconds, counted, and teachers cut it to one because it is uncomfortable. The silence is the only thing being practised. Run the who-did-it against what-happened clinic exactly as written and put both sets of answers on the board; a column of names beside a column of facts needs no commentary from you. Sixth, 9.7, which is the hardest mediation in the course so far. Two men, two true sheets, and a two-hour hole between them. Samih was right not to unload forty cartons alone in the dark and the class must not be allowed to conclude otherwise. The fault is that waiting did not feel like an event to either of them, because a sheet records what you did. Lay it beside 7.7 and say the difference: four men and an empty sheet is a question, and two men with two complete sheets is an answer that happens to be wrong. The second is worse, because there is nothing to notice."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 9 · Answer Key');
module.exports = out;
