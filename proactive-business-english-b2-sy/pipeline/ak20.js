// Proactive Business English B2 · Syria Edition · Book 2 · Unit 20 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
// ⚠ Double-quoted, always — see the note at the head of ak18.js.
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 20  Succession, and the Week After You Have Gone'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Unit 20 is the unit in which the post Unit 13 described changes hands, and it is the only unit in either book whose entire output is written for one named person who has not arrived yet.**',
  '⚠ **The six things taught.** ⚠ **Judgements rather than tasks (20.1) · the successor\'s first week (20.2) · single-person dependencies (20.3) · a judgement you would not defend again (20.4) · the relationship that does not transfer (20.5) · recommending a person in writing (20.6).**',
  '⚠ **The trap in this unit is announced on its first page and classes fall into it anyway.** ⚠ **A handover is not a list of what you do.** **Forty tasks can be written in an afternoon and learned in a fortnight, and they are not what a firm loses** — **the valuable half is the judgements inside them, and the person doing them has stopped noticing that they are judgements at all.**',
  '⚠ **One question does more work than anything else in the unit and it is in 20.1.** ⚠ *What would I get wrong if I did this carelessly?* **Nothing means it is a task; something means the something is the judgement.** **Asking a learner what they decide produces nothing; asking them this produces everything, and it works on any job.**',
  '⚠ **20.3 is the cycle that will be hardest to get written honestly**, **because a dependency written in one sentence is indistinguishable from a boast and learners can feel that.** ⚠ **Three parts fix it** — **what stops, what it costs, what would have to happen** — **and the four words *and nobody chose this* remove the last of it.**',
  '⚠ **20.6 contains the only explicit test in either book for whether a sentence may be written down:** ⚠ *would you be willing to say it to the person themselves if they asked?* **It almost never censors a sentence. It makes it precise** — ***he would be adequate* becomes *the post this year needs somebody who has run a dispute, and he has not*, which is sayable, more informative, and names a gap instead of grading a man.**',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 1, an internal communication, 40 to 50 words, 10 marks**; **the exam practice is Reading Part 5, error correction, twelve lines, the second time in the level.**',
], C.grey, C.navy));

// ===================== 20.1 =====================
out.push(h2('20.1  Judgements, not tasks'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the cycle: learners name something mechanical and then, asked what they decide while doing it, usually find something within about fifteen seconds.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **The first is the task; the second contains the decision, the criterion and the reason** — **and the second can be used by somebody on their first Tuesday.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ *What would I get wrong if I did this carelessly?* **Nothing → task. Something → the something is the judgement.**  2 ⚠ **Because a judgement made four thousand times stops feeling like a judgement and starts feeling like the task.**'));
out.push(p('⚠ **Run the test on the class\'s own tasks before discussing it.** ⚠ **Asking people what they decide produces *I just do the job*; asking what would go wrong if they were careless produces a criterion, two names and a figure.** **The difference is reliable and it is worth demonstrating rather than describing.**'));
out.push(p('⚠ **The named cases are the format point and the one learners resist.** ⚠ **Hamdan and Tarabishi are worth more than any rule about late customers**, **because a successor can apply a named case in week one and a disposition in about two years** — **which is roughly when they would have worked it out unaided.**'));
out.push(p('⚠ **And reassure the class about Mr Ayoub\'s last line, because somebody will hear it as an admission of sloppiness.** ⚠ *It had not occurred to me that it was a decision. I just do it.* **That is what competence feels like from inside, and it is the reason the post-holder is the worst person in the building at writing this page unaided.**'));
out.push(p('**Language box – Practise (sample):**  _1 **Task:** send the weekly stock report. **Carelessly:** nothing goes wrong. **It is a task.**_  _2 **Task:** chase unpaid invoices on Mondays. **Carelessly:** I would chase the wrong people. **Judgement:** who is slow and who is not paying. **Applies to:** Faris, who has gone quiet twice before a problem. **Does not apply to:** the Ministry, which is always late and always pays._  _3 **Task:** sign off the overtime sheet. **Carelessly:** nothing. **And that is a finding, not a task** — **I have never refused one.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I have written "use your discretion on late customers" and that is the judgement captured.'],
  ['B', 'Your successor arrives on a Tuesday with four late accounts. What does she do?'],
  ['A', 'She uses her judgement.'],
  ['B', 'She has been here a day. Where does she get it?'],
  ['A', '…From experience.'],
  ['B', 'Which she will have in two years. Give me a name she should chase.'],
  ['A', 'Faris. He goes quiet before a problem, twice now.'],
  ['B', 'And one she should leave?'],
  ['A', 'The Ministry. Always late, always pays, and chasing them irritates the contact.'],
  ['B', 'Those two names are usable on Tuesday. Discretion is usable in 2029.']
]));
out.push(note("The exchange works because B refuses the abstraction twice and then asks for names, and names arrive immediately. Learners are not withholding the useful content; they genuinely believe that use your discretion is a faithful summary of what they do, because from inside it is. The line to keep is B's last one — those two names are usable on Tuesday and discretion is usable in 2029 — and it is worth writing on the board, because it reframes the whole cycle as a question of timing rather than of thoroughness."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One task, its judgement, and two names** — **one the judgement applies to and one it does not.** ⚠ **Insist on the second name.** **A successor who only has the chase-list will chase a Ministry, and losing a customer by over-chasing is the error this page exists to prevent.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — three tasks', [
  '⚠ **1  The task:** **check the overnight e-mail before the yard opens.** ⚠ **Carelessly:** **I would miss a cancellation and load a van for nothing.** ⚠ **The judgement:** **which cancellations are real and which are a customer trying their luck.** ⚠ **Applies to:** **Khalil, who cancels and then wants it the same afternoon. Does not apply to: the Ministry, whose cancellations are always real.**',
  '⚠ **2  The task:** **file the delivery notes weekly.** ⚠ **Carelessly:** **nothing.** ⚠ **It is a task.**',
  '⚠ **3  The task:** **approve the Friday cash float.** ⚠ **Carelessly:** **nothing, because I approve the figure the counter asks for.** ⚠ **And writing this down is how I noticed** — **there is no judgement here and there probably should be one.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Every morning I check the overnight e-mail. Done carelessly I would load a van for a cancelled order. So the judgement is which cancellations are real. It applies to Khalil, who cancels and then wants it the same afternoon, and it does not apply to the Ministry._'));
out.push(note("The third entry is the one to reward and it will appear in about a third of papers once the test is applied honestly. A task that produces nothing under the careless test, and which the learner expected to be a judgement, is a finding: either it genuinely does not matter, or nobody has ever decided it. Mr Ayoub's overtime approvals are the same discovery at sixteen years' scale. Teach learners to write those as absences rather than quietly dropping them, because a successor who inherits a blank as a practice will spend a month looking for a system."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **He took each of the forty items on pages 1 and 2 and asked what he would get wrong if he did it carelessly.** ⚠ **Thirty-one produced nothing and are tasks; nine produced something.**'));
out.push(p('**2** ⚠ **That approving overtime is not a judgement at all** — **he has approved every request in sixteen years and never had a criterion.** ⚠ **It is recorded as an absence rather than as a practice, because a successor who inherits it as a practice will think there is a system to learn.**'));
out.push(p('**3** ⚠ **Because a rule about late customers cannot be applied by anybody on their first Tuesday.** ⚠ *A successor can apply a named case in week one. They can apply a disposition in about two years, which is roughly when they would have worked it out anyway.*'));
out.push(p('⚠ **The method with its counts is the part to lift out.** ⚠ *Thirty-one of forty produced nothing; nine produced something.* **The counts tell a successor the page is complete rather than selected, and they tell the NEXT person leaving the post how to write theirs** — **which is the only self-propagating thing in the whole handover.**'));
out.push(p('⚠ **And note which column the judgement goes in.** ⚠ **Task in column one, judgement in column two, never merged** — **because merged, the page silently becomes a task list again, and that happens in about half of first drafts.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (124 words)', [
  '**HANDOVER: THE DEPOT SUPERVISOR\'S POST. THE JUDGEMENTS. M. Dib, 3 May. Not the task list.**',
  table(['It looks like', 'The judgement in it', 'Named cases'], [
    ['**checking the overnight e-mail**', '⚠ **which cancellations are real and which are a customer trying their luck**', '⚠ **Khalil: cancels and wants it the same afternoon. Hold the load for two hours. The Ministry: cancellations are always real. Unload.**'],
    ['**allocating the second van in the afternoon**', '⚠ **which route can absorb a late addition without breaking the window**', '**the Ghouta run can take one more; the Baghdad Street run cannot, because of the 4 p.m. cut-off at the depot gate**'],
    ['⚠ **approving the Friday cash float**', '⚠ **this is not a judgement and I have been treating it as one**', '⚠ **I approve whatever the counter asks for and always have.** **Somebody should set a ceiling; it has never been me.**'],
  ], [2, 2.8, 4.2]),
  '⚠ **How I found these. I took my twenty-two tasks and asked what I would get wrong if I did each carelessly. Eighteen produced nothing. Four produced something, and one of the four turned out to be the blank above.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ *Use your discretion* **anywhere.** ⚠ **A judgement with a rule and no names.** ⚠ **A judgement with only one name** — **the case it does NOT apply to is the one that prevents the expensive error.** ⚠ **Task and judgement merged into one column.** ⚠ **And a missing method with counts, which is what makes the page auditable.**'));
out.push(p('⚠ **The cost clause.** ⚠ *Adding the second name means asking Nadia which of the four are genuinely slow payers, which is twenty minutes and a slightly awkward question about a customer she manages.* **Twenty minutes and an awkward question is a time cost and a relationship cost together, which is exactly what the Book 2 band is for.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the named cases only.** ⚠ **The class says of each whether a successor could act on it on their first Tuesday.** **A case with a name, a behaviour and an instruction passes; a case with a name and an adjective does not.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (225 words)', [
  '⚠ **Every Thursday I decide which of our three drivers goes to the north, and until this week I would have told you it was a rota.**',
  '**It is not a rota. I have been choosing, every Thursday, for four years.**',
  '⚠ **What I actually decide is who can be sent to a customer who will argue.** **Two of the three will argue back, which has cost us one account and nearly cost us another. The third will write down what was said and bring it to me, which is what I need from the northern run because two of those customers dispute delivery times as a matter of habit.**',
  '⚠ **It applies to the two northern accounts and it does not apply to Ghouta, where nobody argues and all three drivers are equivalent.**',
  '⚠ **If I were away for a month, somebody would look at the rota, see that it is not a rota, and either make it one or choose at random.** **Either would produce an argument at a northern customer inside three weeks.**',
  '⚠ **What I find odd is that I have never told anybody this, and nobody has asked, and I would have said if asked that the Thursday allocation was the most mechanical thing I do.** ⚠ **It is the least mechanical thing I do, and I only know that because I was made to ask what would go wrong if I did it carelessly.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *task or judgement?*** **Apply it to each activity mentioned, not to the text as a whole** — **most texts contain both and the writer has only just separated them.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many had the writer not previously thought of it as a decision? Usually all three** — **and say plainly that this is not carelessness.** **It is what competence feels like from inside, which is the finding of the cycle and the reason the page cannot be written by asking the post-holder what they decide.**'));
out.push(note("That sample is the cycle's argument at full strength and its last paragraph should be read out. The learner would have described the Thursday allocation as the most mechanical thing they do; it is the least mechanical, and four years of choosing had become invisible to the person choosing. Note also what the consequence paragraph does: it predicts an argument at a northern customer within three weeks of the writer's absence, which is specific enough to act on. A dependency that names a consequence and a timescale gets attention; one that says things would be difficult does not."));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  Your successor\'s first week'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect precise and slightly indignant answers.** **A first week is remembered in detail for years, and the thing nobody mentioned is remembered best of all** — **which tells you the lesson has been learned once already and never generalised to the people coming after.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It has a date, a person, a test and a hole in it.** *Familiarise yourself with the systems* **describes the half of the week a competent person needs no help with.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Fixed events that fell in that week; people testing her once; and one piece of knowledge nobody had because the person who had it had gone.**  2 ⚠ **A fourth: what a successor will change first** — **and she had just told him, without noticing, that she moved the invoice run and moved it back.**'));
out.push(p('⚠ **The fourth item is the one that saves measurable time and the class will not reach it unaided.** ⚠ **A successor changes what looks arbitrary, and what looks arbitrary is exactly what has no recorded reason** — **so every undocumented arrangement in a firm is a change, a reversal and four months, waiting for a new holder.**'));
out.push(p('⚠ **Write prohibitions WITH a history, not just a reason.** ⚠ *Do not move it. Somebody moved it in 2025 and moved it back in six weeks.* **A bare instruction is something a new holder is entitled to ignore; the same line with a reversal in it is a fact about the world.**'));
out.push(p('⚠ **And the testers paragraph is the kindest thing in any handover.** ⚠ *He will ask you for something he knows you cannot give. Say no and say why. He will not ask twice.* **Note the last clause** — **without it the paragraph is a warning about a difficult man, and the successor arrives braced for a fight that is not coming.**'));
out.push(p('**Language box – Practise (sample):**  _**The calendar:** the quarter-end stock count falls on the 3rd and the auditor needs the gate sheets by the 1st._  _**The tests:** Khalil will ask for a same-day delivery he knows is not available. Say no and offer the next morning. He will not ask again._  _**The hole:** nobody now knows which of the two site contacts can authorise an overtime claim. Find out in week one._  _**What they will change:** the Thursday driver allocation. **Do not** — **see the judgements page; somebody made it a rota in 2024 and we lost an account.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'A competent person will work the first week out. I did.'],
  ['B', 'Did you? What did nobody tell you?'],
  ['A', '…That the Ministry order had to be confirmed by Wednesday.'],
  ['B', 'How long did that take to find out?'],
  ['A', 'Two months. And about two hundred thousand in late interest.'],
  ['B', 'So you worked out everything that was written down.'],
  ['A', 'And nothing that was not.'],
  ['B', 'Which is what competent means. It is not a criticism.'],
  ['A', 'And the things that are not written down are the ones that caused the trouble.'],
  ['B', 'By definition. That is why they were not written down — nobody had needed to.'],
]));
out.push(note("B's method here is to use the learner's own first week as the counter-argument, which works every time because every learner has a two-month gap in theirs. The two closing lines are the ones to keep. A competent person works out everything written down and nothing that is not, which is not a criticism but a definition. And the things not written down are, by construction, the ones that caused the trouble — because nobody writes down what has never gone wrong, and nothing has gone wrong yet precisely because the person who knows is still there."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The four items for one post, and then why the fourth saves the most time.** ⚠ **The reversal rule in one sentence:** *a prohibition with a history will be obeyed and one without will be ignored.*'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — one post', [
  '⚠ **The calendar:** **the quarter-end count falls on the 3rd; the auditor needs gate sheets by the 1st; the insurance renewal is on the 11th and nobody will remind you.**',
  '⚠ **The tests, by name:** **Khalil will ask for a same-day delivery he knows is unavailable, probably in your first three days** — **say no and offer the next morning; he will not ask again.** **Our own night shift will ask you to approve an unlogged overtime claim** — **say that you will approve it once it is logged, and log it with them.**',
  '⚠ **The hole:** **nobody now knows which of the two site contacts can authorise an overtime claim, because the person who knew moved to Aleppo. Find out in week one, because the first claim arrives on the 8th.**',
  '⚠ **What you will change:** **the Thursday driver allocation.** ⚠ **Do not: it is not a rota and never was. Somebody made it a rota in 2024 and we lost the Jableh account in five weeks.** **Everything else in the task list you should change if you see better, and I would rather you did it in month three than in week one.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _In the first week the quarter-end count falls due on the 3rd and the auditor needs gate sheets by the 1st. Khalil will test them with a same-day request. Nobody now knows who authorises an overtime claim. And they will change the Thursday allocation, which is the way it is because two of three drivers argue back._'));
out.push(note("Two features of that sample are worth transplanting. The hole has a deadline attached — the first claim arrives on the 8th — which converts a piece of background into a week-one task. And the prohibition carries a named consequence: somebody made it a rota in 2024 and we lost the Jableh account in five weeks. Ask the class to test their own prohibitions by asking whether a confident new holder, who thinks they can see a better way, would obey them. The ones with a history will be obeyed; the bare ones will not, and the new holder will be right to ignore them."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That he will ask for a release against a verbal order in the first three days, that he knows it cannot be given, and that the answer is no with the reason** — **the gate sheet being the only record of what left the yard.** ⚠ **After the test, *he will tell you things nobody else tells you.***'));
out.push(p('**2** ⚠ **Three.** ⚠ **The urgent one is which of the two Ministry contacts answers e-mail: find out in week one, because the Wednesday depends on it.**'));
out.push(p('**3** ⚠ **Because every arrangement that looks arbitrary looks arbitrary for the same reason** — **nobody wrote down why it was like that** — **and a new holder changes those first, since they appear to cost nothing to change.** ⚠ **Two of them cost four months each.** **The writer says the page took him an hour and is the cheapest thing in the handover.**'));
out.push(p('⚠ **The licence at the end of item 4 is as important as the prohibitions and classes skip it.** ⚠ *Everything else you should change if you can see a better way, and I would rather you changed it in June than in your first fortnight.* **Two prohibitions with reasons will be obeyed; twelve without them will all be ignored, including the two that mattered.**'));
out.push(p('⚠ **And notice the dependency inside the calendar.** ⚠ *The invoices go out on the 7th and Nadia needs the delivery sheets by the 5th.* **A date with a person attached cannot be missed by somebody reading it on the 4th** — **and a bare date can.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (132 words)', [
  '**HANDOVER: YOUR FIRST WEEK. Written for whoever holds this post on 1 June. M. Dib, 3 May.**',
  '⚠ **1  The calendar.** **Three things fall in your first week. The quarter-end count is on the 3rd and Z. Attar needs the gate sheets by the 1st. The insurance renewal is on the 11th and nobody will remind you. And the first overtime claim of the month arrives on the 8th.**',
  '⚠ **2  The tests.** **Khalil will ask you for a same-day delivery he knows is not available, probably in your first three days. Say no and offer the next morning. He will not ask again, and he is a good customer.**',
  '⚠ **3  The holes.** **Nobody now knows which of the two site contacts can authorise an overtime claim. Find out in week one, because the first claim arrives on the 8th.**',
  '⚠ **4  What you will want to change, and the one I ask you not to.** **The Thursday driver allocation. Do not: it is not a rota. Somebody made it one in 2024 and we lost the Jableh account in five weeks. Everything else, change it in month three rather than week one.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A calendar item with a date and no dependency.** ⚠ **A tester named with no answer supplied, or with no *what follows*.** ⚠ **A hole with no week-one action.** ⚠ **A prohibition with no history.** ⚠ **And a missing licence at the end** — **a page that forbids and never permits will be disregarded in full.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the prohibitions only.** ⚠ **The class says of each whether a confident new holder would obey it.** **The test is whether it carries a history, and a class applying that test to each other\'s pages will fail about half of them.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (221 words)', [
  '⚠ **I was briefed for two days when I started and the briefing was about the computer system.**',
  '**I had the system in an afternoon. What took me four months was everything else.**',
  '⚠ **Week one contained three things nobody had mentioned.** **A customer audit that had been booked for six weeks. A supplier who telephoned on the Tuesday expecting a decision he had been promised by my predecessor. And the fact that our two biggest accounts are invoiced on different cycles for a reason nobody could tell me.**',
  '⚠ **The third one is the interesting one, because I changed it in my second month.** **I put them both on the same cycle, which was obviously tidier, and in month four I discovered why they were different: one of them pays against a monthly purchase order that is raised on the 20th, and I had moved their invoice to the 15th.** ⚠ **We were paid late for two quarters and I never told anybody it was my doing.**',
  '⚠ **One sentence would have stopped it.** **Not *do not change the invoice cycles* — I would have ignored that. The sentence I needed was *the Atassi account is invoiced on the 25th because their purchase order is raised on the 20th*.**',
  '⚠ **And the thing I notice now is that I am two years in and I have not written that sentence down for whoever comes after me.** **I am going to, this week, and it will take four minutes.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *would this have been in a briefing?*** **Almost nothing in a good answer would have been, and that contrast is the point.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the writer change something and change it back? Usually two of three** — **and in every case the thing changed had no recorded reason, which is 18.4 and 20.2 being the same finding seen from opposite ends.**'));
out.push(note("The honesty in the fourth paragraph is what makes that piece useful: two quarters of late payment, caused by a tidying change, never reported. And the fifth paragraph makes the cycle's point better than the Language box does — the learner says explicitly that they would have ignored a bare prohibition and needed the reason instead. The last paragraph is the one to act on in class. Ask who has been in their post more than a year and has not written the sentence their successor will need. The answer is everybody, and the honest estimate of what it would cost is four minutes."));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  What you have been carrying alone'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one that produces silence.** **Most learners can name the thing that would stop; almost none believe anybody senior knows.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It names what stops, why, and when anybody would notice** — **and *I am quite important to the invoicing* is a claim about the speaker with no consequence in it at all.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What stops, what it costs, and what would have to happen for it not to stop.**  2 ⚠ **That a remedy you cannot complete is still worth writing, with what is missing from it named** — **and where there is no remedy, the firm carries the risk and somebody above you has to know they are carrying it.**'));
out.push(p('⚠ **Nadia\'s first line is the one that unlocks the cycle and it should be quoted exactly.** ⚠ *That is not a risk. That is a boast with a worried face on it.* **Learners feel this about their own drafts and therefore write nothing** — **so naming it first gives them permission to write the three-part version.**'));
out.push(p('⚠ **The three parts cannot be read as self-importance, and that is a structural fact rather than a matter of tone.** ⚠ **Two of them are about the firm and one is a job for somebody else** — **and the four words *and nobody chose this* remove the remainder.**'));
out.push(p('⚠ **Teach the incomplete remedy explicitly, because learners omit dependencies they cannot fix.** ⚠ *There is one meeting before 30 April and one is not enough.* **A remedy with its gap named is usable; one omitted because it could not be finished is a problem nobody inherits.**'));
out.push(p('**Language box – Practise (sample):**  _**1 What stops:** the quarterly reconciliation with our second bank, because I am the only signatory they recognise. **What it costs:** the facility review in October, which is about 900,000 of headroom. **What would have to happen:** a second signatory registered, which takes six weeks and a board minute. **Can I complete it?** Yes, if the minute is taken this month._  _**2 What stops:** nothing I can identify, and I expected to find something. **That is worth writing too.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'There is no remedy for the bank signatory thing, so I have left it out.'],
  ['B', 'Who is carrying that risk after you go?'],
  ['A', '…Whoever has my job.'],
  ['B', 'Do they know?'],
  ['A', 'They will find out in October.'],
  ['B', 'At the facility review. With about nine hundred thousand of headroom on it.'],
  ['A', 'Put like that, leaving it out is the worst option available.'],
  ['B', 'It is. An unremovable risk has to be held by somebody who knows they are holding it.'],
  ['A', 'And I should say who that is.'],
  ['B', 'Name them. Otherwise it is held by nobody, which is how it got to be a risk.']
]));
out.push(note("B's closing line is the one to take away: a risk held by nobody is how it became a risk in the first place. Learners omit the unfixable items for an understandable reason — writing a problem you cannot solve feels like passing it upwards — and the answer is that upwards is the only honest destination for a risk one person cannot remove. Make them name the holder. An unnamed risk in a handover is read as background by the next person, and background is exactly what it was for the sixteen years before anybody wrote it down."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **One dependency in three parts, what is missing from the remedy, and the last four words.** ⚠ **Mark the cost for whether it carries a figure** — **a dependency with a figure gets a decision and one without gets agreement and no action.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two dependencies', [
  '⚠ **1  What stops:** **the reconciliation with our second bank; I am the only signatory they recognise.** ⚠ **What it costs:** **the October facility review, about 900,000 of headroom.** ⚠ **What would have to happen:** **a second signatory registered — six weeks and a board minute.** ⚠ **Can I complete it?** **Yes, if the minute is taken this month, and I have asked twice.**',
  '⚠ **2  What stops:** **nothing stops, but the night shift will stop telling anybody when a pallet is damaged, because they tell me and not the system.** ⚠ **What it costs:** **about 40,000 a year in write-offs that currently get caught.** ⚠ **What would have to happen:** ⚠ **nothing I can do in a month. This took three years and it is a risk the firm carries.** **I have told the warehouse manager and he now knows he is carrying it.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _If I were not here the second-bank reconciliation would stop, because I am the only signatory they recognise. That costs the October facility review, about 900,000 of headroom. A second signatory would have to be registered, which is six weeks and a board minute. I can complete it if the minute is taken this month. And nobody chose this._'));
out.push(note("The second entry is the shape most learners will need and it is the one the cycle is really for. There is no remedy, the dependency is a relationship built over three years, and the honest ending is that the firm carries it and a named person now knows. Note that the learner has put a figure on it anyway — about forty thousand a year in write-offs currently caught — which is what turns an unfixable item into something a firm might actually spend money on. Unfixable by the writer is not the same as unfixable."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **One of the five** — **the Ministry Wednesday, which is now written on page 4 and in the diary, and is marked DONE.** ⚠ **The other four are either a relationship or a decision, and a document cannot carry either.**'));
out.push(p('**2** ⚠ **That the overtime approvals are not a dependency at all: he has approved everything for sixteen years, so there is nothing to transfer.** ⚠ **It needs somebody to DECIDE it, which is a different request, and he makes it of Mr Sayegh rather than of his successor.**'));
out.push(p('**3** ⚠ *The firm has been running on five single-person dependencies for years and nobody has ever written them down, including me.* ⚠ **He says it should have been written in 2015, when it would have been four pages and a reorganisation instead of three weeks and a hope.**'));
out.push(p('⚠ **The three kinds behave differently and the page sorts them, which is the transferable idea.** ⚠ **A document fixes one of five; a relationship cannot be transferred by introduction** — *it took nine years* — **and a decision has to be MADE by somebody rather than handed to anybody.** **A learner who sorts their own five this way will know which ones to spend their last three weeks on.**'));
out.push(p('⚠ **And the final sentence is the only thing on the page addressed to the person who is NOT leaving.** ⚠ *I should have written it in 2015.* **Ask the class who in the room has been in their post for more than five years, and then ask what their page six would say** — **it is the most useful two minutes in the cycle.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (129 words)', [
  '**HANDOVER: THINGS THIS FIRM CARRIES THROUGH ONE PERSON. M. Dib, 5 May.**',
  '⚠ **Nobody chose any of these. Each happened once because I was there and was then easier for everybody.**',
  table(['What stops', 'What it costs', 'What would have to happen'], [
    ['**the second-bank reconciliation**', '**the October facility review: about 900,000 of headroom**', '⚠ **a second signatory registered — six weeks and a board minute. I have asked twice and what is missing is the minute.**'],
    ['**the night shift reporting damage**', '**about 40,000 a year in write-offs currently caught**', '⚠ **nothing I can do in a month; it took three years.** **The firm carries this and the warehouse manager now knows he does.**'],
    ['⚠ **the Friday float ceiling**', '⚠ **nothing** — **and this is the discovery**', '⚠ **I thought this depended on me and it does not: I approve whatever is asked.** **It needs somebody to set it, and I am asking the warehouse manager rather than my successor.**'],
  ], [2, 3.2, 3.8]),
  '⚠ **Observations. One of the three could be fixed by writing something down and it has not been. I cannot discharge the second at all. And I should have written this page in 2024, when it would have been a conversation instead of a paragraph.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A one-sentence dependency.** ⚠ **A cost with no figure where a figure was available.** ⚠ **A remedy with no gap named where it cannot be completed.** ⚠ **An unremovable risk with no named holder.** ⚠ **And a missing *nobody chose any of these*, without which the page reads as either a boast or an accusation whatever else it says.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the *what would have to happen* column only.** ⚠ **The class says of each whether it could be completed before the writer left.** **Most cannot, and the right response is the named gap rather than the omission.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (229 words)', [
  '⚠ **Our firm has one person who can price a non-standard job, and it is not me, and he is sixty-one.**',
  '**He has never written down how he does it. I have watched him do it about forty times and I could not do it.**',
  '⚠ **What stops: every quotation outside our four standard product lines. That is about eleven a month and about a third of our margin, because the standard lines are priced to the market and the non-standard ones are not.**',
  '⚠ **What it costs: I have tried to work this out and the honest answer is between two and four million a year of gross margin, and the range is that wide because nobody knows how much of it is his pricing and how much is the work itself.**',
  '⚠ **What would have to happen: he would have to sit with somebody for a month, on live jobs, explaining each one.** **He has offered. Twice. Nobody has arranged it, because there is never a month.**',
  '⚠ **And that last sentence is the part I want on the record.** ⚠ **This is not a dependency nobody noticed.** **It is a dependency three people have noticed, which the person concerned has twice offered to fix, and which has not been fixed because the fix requires a month that nobody will give.**',
  '⚠ **Nobody chose this, in the sense that nobody decided it.** **But somebody has now declined to fix it twice, which is a different thing, and I have put both dates in the margin.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is there a remedy, or only a complaint?*** **A text with no third part is a complaint however accurate it is.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many does the dependency rest on the writer themselves? Usually two of three** — **and in those cases ask whether anybody senior knows, because the answer is usually no and the writer has never considered it their job to say so.**'));
out.push(note("The last two paragraphs of that sample go further than the cycle and they are right to. The learner distinguishes a dependency nobody chose from one that somebody has twice declined to fix, and records both dates. That is a genuinely different document: the first is an accident of history and the second is a decision, and a decision can be put to the person who took it. It is also the only place in this unit where the honest version of nobody chose this needs qualifying, and the learner found the qualification unprompted. Worth reading aloud, and worth asking the class which of their own dependencies is actually of the second kind."));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  The judgement you would not defend again'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one that matters: in almost every case the answer is that nobody who comes after will ever hear about it.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It separates the decision from the method and disowns only the method** — **which is exact, and exactness is the whole value of the page.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A confession defends or disowns the whole thing; a handover separates the decision from the way it was taken and is exact about which it is disowning.**  2 ⚠ **That the third part is missing: what would stop it happening again** — **not what he would do differently, because he will not be there, but what would make it HARD for the next person to do what he did.**'));
out.push(p('⚠ **The split is the cycle and both failures are common.** ⚠ **Defending everything hands on nothing; disowning everything hands on something untrue** — **and the second is commoner, because it feels humble and costs nothing in the room.**'));
out.push(p('⚠ **The lesson is never the obvious one, and this is worth drilling.** ⚠ **Not *do not close shops*, which is the wrong lesson from the right mistake** — **but *a decision you could test for four million and will live with for six years is worth testing*, which transfers to things that are not shops at all.**'));
out.push(p('⚠ **And the fourth part must be a RULE, not a disposition.** ⚠ **A count and a second signature · an initialled dispute clause · a named owner.** **Three things somebody could impose next month.** *Be more careful* **is not one of them, and about two-thirds of first drafts offer some version of it.**'));
out.push(p('**Language box – Practise (sample):**  _**1 The decision:** in 2024 I made the Thursday driver allocation a rota._ ⚠ _**Would again:** nothing — **I would not do it at all.**_ ⚠ _**Cost:** the Jableh account, about 600,000 of annual turnover, lost in five weeks._ ⚠ _**What would stop it:** the judgements page, which did not exist, and which now says in writing that the allocation is not a rota and why._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I should never have closed that line. It was entirely my fault.'],
  ['B', 'Do you actually believe that? Would you keep it open today?'],
  ['A', '…No. It was losing money and it would still be losing money.'],
  ['B', 'So you would close it again.'],
  ['A', 'Yes. I would not close it in a week without asking the counter staff.'],
  ['B', 'That is the split, and it is the opposite of what you wrote.'],
  ['A', 'What I wrote was humbler.'],
  ['B', 'It was untrue. And your successor would read it as "do not close lines".'],
  ['A', 'Which is the wrong lesson.'],
  ['B', 'From the right mistake. The humble version is the dangerous one.']
]));
out.push(note("This is the failure to watch for, and it is more common than the defensive one because it feels like good character. A learner who disowns a decision they still believe in hands their successor a prohibition the writer does not actually endorse, and prohibitions of that kind are either obeyed wrongly or ignored entirely. B's line — the humble version is the dangerous one — is worth putting on the board. The exercise is not about taking responsibility; it is about being exact enough that somebody else can use the result."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The four parts, and whether the writer would have resented the remedy at the time.** ⚠ **That last clause is what makes a rule credible**, **because it concedes that the person it would have constrained is the writer** — **and the successor who will be constrained by it needs to know that.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two decisions', [
  '⚠ **1  The decision:** **I made the Thursday allocation a rota, 2024.** ⚠ **Would do again:** **nothing.** ⚠ **Would not:** **all of it.** ⚠ **Cost:** **the Jableh account, about 600,000 a year, gone in five weeks.** ⚠ **What would stop a repeat:** **a judgements page that says the allocation is not a rota and why. It now exists.**',
  '⚠ **2  The decision:** **I moved the Atassi invoice to the 15th, 2025.** ⚠ **Would do again:** **standardising the cycles. It was right and it saved a day a month.** ⚠ **Would not:** **moving an account\'s date without asking that account when their purchase order is raised.** ⚠ **Cost:** **two quarters of late payment, about 180,000 of borrowing cost.** ⚠ **What would stop a repeat:** **no invoice date changes without a line on the file saying when the customer\'s order is raised. One line on a form.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _In 2025 I moved the Atassi invoice to the 15th. I would standardise the cycles again. I would not move an account\'s date without asking when their order is raised. It cost two quarters of late payment, about 180,000. And what would stop a repeat is a line on the form, which I would have found irritating at the time._'));
out.push(note("The second sample is the model and it is worth comparing with the first. Entry 1 has no half worth keeping and says so; entry 2 keeps the decision and disowns one step of the method, and its fourth part is a single line on a form. That is the whole range of this page. A learner who produces only entries like the first has either been unlucky or has not separated anything, and the quickest diagnostic is to ask whether they would take the same decision today."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **He would close Homs again.** ⚠ **What he would not do again is decide it alone, in a fortnight, without counting anything** — **and he names what was not counted: the walk-in trade, which was the whole question.**'));
out.push(p('**2** ⚠ **It is the only entry with no half he would keep.** ⚠ **And the cost is *I do not know, and that is the finding*** — **sixteen years of unexamined approvals have a cost that appears in no figure in the company, and the absence of the figure is worth more than a guess at it.**'));
out.push(p('**3** ⚠ **Because these are the three where the fourth part is a rule somebody could actually impose** — **a required count, an initialled clause, an owner.** ⚠ *Everything else I would do differently is a matter of how I would behave, and I will not be here to behave.*'));
out.push(p('⚠ **That selection criterion is the most reusable line in the cycle.** ⚠ **It explains why the page is three entries rather than a memoir, and it gives a learner a filter they can apply before writing anything** — **if the fourth part is about your own conduct, leave the entry out.**'));
out.push(p('⚠ **And entry 2 is the one to point at for proportion.** ⚠ *The cost of reading it was ten minutes and the cost of not reading it is a hearing in Beirut.* **Ten minutes against about four million, and the fourth part is one line on a form** — **which is the cheapest remedy anywhere in this book.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (127 words)', [
  '**HANDOVER: JUDGEMENTS I WOULD NOT DEFEND AGAIN. M. Dib, 6 May.**',
  '⚠ **This page is not a confession. Each entry has four parts and the fourth is the only one of any use to you.**',
  '⚠ **1  The Thursday allocation, 2024.** **I made it a rota.** ⚠ **I would not defend any part of this.** ⚠ **What it cost: the Jableh account, about 600,000 a year, lost in five weeks.** ⚠ **What would stop it: a judgements page saying the allocation is not a rota and why. It now exists, at page 3.**',
  '⚠ **2  The Atassi invoice date, 2025.** **I moved it to the 15th.** ⚠ **I would standardise the cycles again** — **it was right and it saves a day a month.** ⚠ **What I would not do is move an account\'s date without asking when their purchase order is raised.** ⚠ **What it cost: two quarters of late payment, about 180,000 in borrowing.** ⚠ **What would stop it: one line on the invoicing form. I would have found that irritating in 2025.**',
  '⚠ **Why two and not twenty. These are the two where the fourth part is a rule somebody could impose. The rest is how I would behave, and I will not be here to behave.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **An entry that disowns a decision the writer plainly still believes in.** ⚠ **A cost with no figure and no *I do not know, and that is the finding*.** ⚠ **A fourth part that is a disposition.** ⚠ **A missing *which I would have resented*, where it is true.** ⚠ **And a page with no selection criterion, which is how a handover becomes a memoir.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the fourth parts only.** ⚠ **The class says of each whether somebody other than the writer could impose it next month.** **Expect about a third to pass on a first attempt.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (224 words)', [
  '⚠ **In 2021 I agreed a payment plan with a customer over the telephone and recorded it in my own diary and nowhere else.**',
  '**He paid the first two instalments and stopped. When we chased him he said the plan had been for six months and not four, and there was nothing to put against it.**',
  '⚠ **I would agree the plan again.** **He was a fifteen-year customer with a genuine problem and the alternative was losing about two million and a relationship.**',
  '⚠ **What I would not do again is agree terms in a conversation and record them in a place only I can read.** **Not because of what he did** — **I am still not sure he was lying, and six months is what a tired man might well have heard.**',
  '⚠ **What it cost: about 400,000 written off, and two years of a relationship that had been straightforward for fifteen.**',
  '⚠ **What would stop it happening again: no payment plan takes effect until it has been put in an e-mail to the customer and the customer has replied to it.** ⚠ **Not signed. Replied to.** **Signature takes a fortnight and a reply takes an afternoon, and an afternoon is a thing a tired man will actually do.**',
  '⚠ **I would have thought that insulting in 2021, which is why I did not do it, and it is one e-mail.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *is the fourth part a rule, or a disposition?*** **Read only the fourth part and decide whether a third party could impose it.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many is the fourth part a rule somebody could impose? Usually one of three** — **and the other two say *be more careful* in longer words, which is exactly the fault the cycle exists to find.**'));
out.push(note("Two things in that sample are better than the model. The learner refuses to decide whether the customer lied — six months is what a tired man might well have heard — which keeps the entry about the writer's own method rather than about somebody's honesty, and that is the correct scope. And the fourth part is calibrated: not signed, replied to, because a signature takes a fortnight and a reply takes an afternoon. A rule designed around what a reluctant person will actually do is worth four rules designed around what they ought to do, and that distinction is worth five minutes with any class."));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  The relationship that does not transfer'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect years rather than months in the second answer, and expect the learner to be slightly surprised by their own figure.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It contains the history, the authority with a date, and what has not changed** — **and the first contains a name and a job title, which is what most introductions consist of.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That Mr Ayoub did not say *this is the auditor* but *when this man asks you for the gate sheets, give him the originals, and if I am not here you do it anyway*** — ⚠ **which was not an introduction but a statement of what Abu Yasser was allowed to do without him.**  2 ⚠ **The history said out loud; what the successor can do without him, with a date and a limit; and what has not changed.**'));
out.push(p('⚠ **Abu Yasser\'s own diagnosis is the cycle and it should be quoted.** ⚠ *Nobody says no to a new office manager because they dislike them. They say no because they do not know whether it counts.* **So the introduction that transfers anything is the one that says what the new person can do without you.**'));
out.push(p('⚠ **The limit is what makes authority believable, which learners find counter-intuitive.** ⚠ *Including a write-off up to half a million.* **An unlimited claim is not believed by an outsider** — **and *above that she comes to Mr Sayegh, as I did* turns the limit into a continuation rather than a demotion.**'));
out.push(p('⚠ **And do not let anybody claim that nine years transfers.** ⚠ *The authority transfers in one conversation and the rest takes as long as it takes.* **But without the authority the rest never starts, because the successor spends a year asking permission and the contact spends a year watching them ask** — **and both then conclude that the relationship did not transfer.**'));
out.push(p('**Language box – Practise (sample):**  _**The contact: our main carrier, Abu Nasser.**_ ⚠ _**History, out loud:** in four years he has twice held a load overnight at his own cost rather than deliver it damaged, and both times I paid him for the day._ ⚠ _**Authority:** from 1 June she can authorise an overnight hold and pay the day rate, up to 30,000, without reference to anybody. Above that she comes to me, as I did to the owner._ ⚠ _**What has not changed:** we still pay in fourteen days and we still do not ask him to carry unsheeted._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'She will build her own relationship with him in time. Introductions are a formality.'],
  ['B', 'It is Thursday. A load is damaged and he wants an overnight hold. What does he do?'],
  ['A', 'He telephones her.'],
  ['B', 'And she says?'],
  ['A', '…She says she will check and call him back.'],
  ['B', 'And he waits, with a loaded lorry. How many Thursdays of that before he stops offering?'],
  ['A', 'Two. Maybe three.'],
  ['B', 'So the thing you were going to let her build gets destroyed in three weeks.'],
  ['A', 'Because she had no authority to accept it.'],
  ['B', 'The building never starts. That is the point.']
]));
out.push(note("Run this with a concrete Thursday, as B does, because the abstract version of the argument loses. The sequence that convinces is: the contact offers something valuable, the successor cannot accept it, the contact stops offering, and the thing nobody meant to destroy is gone in three weeks. Learners will accept that readily once it is a lorry and a day rate. The general statement — without the authority the rest never starts — is true and does not persuade anybody on its own."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The three parts, and why the second matters on the day.** ⚠ **Then what a missing limit does to it:** **an unlimited claim is not believed, so the contact treats the whole introduction as a courtesy.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two contacts', [
  '⚠ **1  The carrier, Abu Nasser.** ⚠ **History:** **twice held a damaged load overnight at his own cost; paid for the day both times.** ⚠ **Authority:** **from 1 June, can authorise an overnight hold and the day rate up to 30,000 without reference. Above that, to me.** ⚠ **What has not changed:** **fourteen-day payment; nothing unsheeted.**',
  '⚠ **2  The site foreman at our largest customer.** ⚠ **History:** **he telephones me rather than raising a complaint, about four times a year.** ⚠ **Authority:** ⚠ **this is the problem** — **there is nothing formal I can transfer, because what he does is irregular and his own employer would not approve of it.** ⚠ **What has not changed:** ⚠ **I can introduce them and say, in front of him, that she will treat a telephone call the way I did, which is as information and not as a complaint.** **That is all there is, and it is worth saying anyway.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The contact is our carrier. What we have done is that he twice held a damaged load overnight at his own cost and I paid him for the day. A successor could authorise that, from 1 June, up to 30,000. And what has not changed is that we pay in fourteen days and never ask him to carry unsheeted._'));
out.push(note("The second entry is the honest hard case and it comes up in most classes. The relationship depends on somebody doing something their own employer would not sanction, so there is no authority to transfer and no history that can safely be stated out loud in detail. The learner's answer is right: say, in front of the person, that the successor will treat a telephone call as information rather than as a complaint. That is a transferable undertaking about conduct, it costs the contact nothing, and it is the whole of what can honestly be handed over."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That it was the right answer, and he records it so that a successor does not read it as unhelpfulness.** ⚠ **Four lines, protecting the relationship from a successor\'s first wrong inference.**'));
out.push(p('**2** ⚠ **Release any document including originals without reference to anybody; agree the audit timetable; commit the firm to a management-letter response; authorise a write-off up to 500,000.** ⚠ **Above that she comes to Mr Sayegh** — *which is exactly what I did.*'));
out.push(p('**3** ⚠ **That Mr Attar tells him things about the firm\'s records before they become findings.** ⚠ **Eight years old, in no document, and a letter cannot transfer it.** ⚠ **Instead: tell her it exists, tell him that he has told her, and leave the rest to the two of them.**'));
out.push(p('⚠ **The counts are the format point.** ⚠ *Eleven times in eight years, twice within the hour.* **A count is a fact the recipient recognises as true of themselves; *an excellent working relationship* is a claim they must take on trust** — **and a letter full of the second kind reads as a form letter.**'));
out.push(p('⚠ **And the independence sentence is the one learners omit.** ⚠ *Nothing in this handover alters your independence.* **Nobody asked** — **and an outside professional reading a handover letter is working out whether a new regime is arriving, so one sentence saves a month of careful behaviour on both sides.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (134 words)', [
  '**To: Abu Nasser, carrier   From: M. Dib   10 May   Copy: the warehouse manager**',
  '**I hand over the depot supervisor\'s post on 31 May. This letter is to transfer, as far as a letter can, what has been between us since 2023.**',
  '⚠ **What has actually passed between us. In four years you have twice held a damaged load overnight at your own cost rather than deliver it damaged, and both times I paid you for the day without being asked to. You have never once invoiced us for a waiting hour that you could have invoiced for.**',
  '⚠ **What L. Saleh can do without me, from 1 June. She can authorise an overnight hold and the day rate, up to 30,000, without reference to anybody. Above that she comes to the warehouse manager, which is exactly what I did.**',
  '⚠ **What has not changed. We pay in fourteen days. We do not ask you to carry unsheeted, and we will not start.**',
  '⚠ **One thing I cannot hand over. You telephone me when a load looks wrong before you leave the yard. That is four years old and a letter cannot transfer it. What I can do is tell her it happens, tell you that I have told her, and leave the rest to the two of you.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A history made of adjectives.** ⚠ **Authority with no date, or no limit, or no statement of what lies above it.** ⚠ **A missing *what has not changed*.** ⚠ **And a letter that claims the untransferable thing will transfer** — **which is the one sentence in such a letter that nobody believes, and it discredits the rest.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the authority paragraph only.** ⚠ **The class says of each whether the contact could act on it on a Thursday without telephoning anybody.** **That is the only test, and it fails any paragraph without both a date and a figure.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (222 words)', [
  '⚠ **The relationship that would not survive me leaving is with the man who repairs our chillers, and it consists of one thing: he comes out at night.**',
  '**He is not on a contract. There is no agreement. He comes out because in 2019 his van broke down outside our depot at eleven at night and I drove him home to Jaramana and did not mention it to anybody.**',
  '⚠ **In six years he has come out at night eleven times. Twice it saved a full load, which is about 300,000 each time. He has never charged us a night rate, although he charges one to everybody else, and I have never asked him not to.**',
  '⚠ **A letter could transfer almost none of this.** **What it could transfer is the authority: that whoever holds this post can agree a night call-out and pay whatever he asks, without reference, which nobody has ever written down because it has never cost us anything.**',
  '⚠ **What it cannot transfer is why he comes.** **And I am not going to put the 2019 story in a letter, because it would read as though I were claiming credit for a lift home, and because it is his business whether he tells anybody.**',
  '⚠ **So the honest handover is three lines about the authority and one sentence saying that he comes out at night, that it is not contractual, and that nobody should ever let it become a condition of anything.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *does the authority have a date and a limit?*** **And where the writer says the authority has never been written down because it has never cost anything, mark that as a finding** — **it is the commonest reason a transferable thing has not been made transferable.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many is the untransferable part the most valuable part? Usually all three** — **and the honest response is the letter\'s: name it, say you have named it to both people, and stop claiming the rest.**'));
out.push(note("The last paragraph of that sample shows judgement the cycle does not ask for. The learner declines to put the 2019 story in the letter for two reasons, and both are good: it would read as claiming credit, and it is the other man's business whether anybody knows. What goes in instead is the authority, plus one sentence warning that the night call-outs must never become a condition of anything. That warning is the most protective line in the piece and it is addressed to the firm rather than to the successor, which is the right destination for it."));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The case you cannot make out loud'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the cycle in advance: almost everybody names something they would want left out, and almost nobody thinks leaving it out would help them.**'));
out.push(p('**b**  ⚠ **The second.** ⚠ **It has a name, a costed case against, and the closed-door sentence** — **and the first is a preference.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Because a recommendation that does not cost anything has not been thought about** — **and without the case against it is a preference rather than a recommendation.**  2 ⚠ *Anything you would say about a candidate behind a closed door belongs in the written recommendation, provided you would be willing to say it to the candidate themselves afterwards if they asked.*'));
out.push(p('⚠ **Make the class watch what the test does to the sentence, because they will expect it to delete it.** ⚠ *He would be adequate* **becomes** *the post this year needs somebody who has run a dispute, and he has not.* **Sayable to Bassel, more informative, and it names what is missing instead of grading the man.**'));
out.push(p('⚠ **A gap can be acquired, pointed at and argued with. A grade can be none of the three and it follows somebody for years.** ⚠ **That is the whole reason the rewrite is better rather than merely safer**, **and it is the sentence to put on the board.**'));
out.push(p('⚠ **And the first move is the costing.** ⚠ *It probably costs us issue two, which is worth about 4 m.* **A recommendation whose own price is stated makes the reader decide; one without it invites agreement and no thought** — **and the reader is the person who has to live with the price.**'));
out.push(p('**Language box – Practise (sample):**  _**Recommendation:** L. Saleh for the depot supervisor\'s post._ ⚠ _**Case against:** she has never run a night shift, and two of our six weeks of peak are night work; the risk is about 200,000 of overtime mismanaged._ ⚠ _**Closed-door sentence:** the other candidate has run nights for nine years and I still would not appoint him._ ⚠ _**Would I say it to him?** Not like that._ ⚠ _**The version I would say:** the post needs somebody who will write down what they decide, and in nine years he has not started._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I cannot write anything comparative about a colleague who will see the decision.'],
  ['B', 'What is the sentence you would say behind a closed door?'],
  ['A', '…That he has run nights for nine years and I still would not appoint him.'],
  ['B', 'Would you say that to him if he asked you?'],
  ['A', 'Not in those words.'],
  ['B', 'Then say it in the words you would use.'],
  ['A', 'That the post needs somebody who writes down what they decide, and in nine years he has not started.'],
  ['B', 'Could you say that to him?'],
  ['A', 'Yes. And it is more use to him than the first version.'],
  ['B', 'And more use to the person deciding. The test did not silence you.']
]));
out.push(note("The sequence is the lesson and it should be run exactly in this order: the closed-door sentence first, then the test, then the rewrite. Learners who are asked for the sayable version first produce something bland; learners who say the blunt thing first and then rewrite it produce something precise. B's closing line matters — the test did not silence you — because the whole objection learners bring to this cycle is that the test is a muzzle. It is a drafting instrument, and on the evidence of most classes it improves about nine sentences in ten."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **A recommendation, the costed case against, and the closed-door sentence in both versions.** ⚠ **Then which version names a gap rather than grading a person** — **and whether the gap has a route by which it could be closed.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(sample('Sample — two recommendations', [
  '⚠ **1  Recommendation:** **L. Saleh for the depot post.** ⚠ **Case against, costed:** **she has never run a night shift and two of our six peak weeks are night work; about 200,000 of overtime at risk.** ⚠ **Closed-door:** **the other candidate has nine years of nights and I would still not appoint him.** ⚠ **The version I would say to him:** **the post needs somebody who writes down what they decide, and in nine years he has not started.**',
  '⚠ **2  Recommendation:** **buy the second van rather than hiring for four months.** ⚠ **Case against, costed:** **it is 1.4 m of capital against about 500,000 of hire, and the fifth month onwards is where it pays back.** ⚠ **Closed-door:** **we hire because the owner does not like capital on the balance sheet, and that is not a reason.** ⚠ **The version I would say to him:** ⚠ **the hire decision has been taken on the balance sheet and not on the route, and I would like to put the route figures to you separately.**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I recommend L. Saleh. The case against is that she has never run a night shift, which puts about 200,000 of peak overtime at risk. What I would not say in a meeting is that the other candidate has nine years of nights and I would still not appoint him. And the version I would say to him is that the post needs somebody who writes down what they decide._'));
out.push(note("The second sample extends the test to a person who is not a candidate, which is the right generalisation and worth pointing out. The closed-door sentence is about the owner's preference, the test applies unchanged, and the sayable version — the decision has been taken on the balance sheet and not on the route, and I would like to put the route figures to you separately — is both an accurate description and a workable request. Ask the class to apply the test to something they would say about a decision-maker rather than a candidate; it works identically and they will not have thought of it."));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **That she is carrying the arbitration to an award with the hearing in June, and that moving her on 1 May gives the arbitration to somebody who has read the bundle twice rather than fifty times.** ⚠ **It probably costs issue two, worth about 4 m** — *the price of the obvious answer, and it is not small.*'));
out.push(p('**2** ⚠ **That Bassel is not unsuitable for the post in general; that he does not lack judgement, with his December paper cited as wrong about the threshold and right about the method; and that the recommendation is not revenge for their December disagreement.** ⚠ **It ends *if that is what anybody thinks this page is, then the page has failed and I would rather be asked.***'));
out.push(p('**3** ⚠ **That somebody must act from 1 May to 30 June, that it should be Bassel, and that he must be told in writing that it is an acting appointment and that the substantive appointment has been decided rather than left open.** ⚠ *The cruellest version of this is the one where he acts for two months and infers.*'));
out.push(p('⚠ **The *what I am NOT saying* paragraph is the one to teach hardest, because it costs the most to write.** ⚠ **It must include the motive somebody will attribute to you** — *I am not recommending against him because he and I disagreed in December* — **and it is that clause which makes the rest of the page readable.**'));
out.push(p('⚠ **And every deferral gets a date and a consequence.** ⚠ *If the substantive appointment is not confirmed by 15 July, this recommendation lapses and should be made again by whoever holds the post then.* **A deferral that is not dated becomes permanent by drift**, **which is the sentence 20.7 is built on.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample (139 words)', [
  '**RECOMMENDATION: THE DEPOT SUPERVISOR\'S POST FROM 1 JUNE. M. Dib to the warehouse manager, 12 May. Not for circulation.**',
  '⚠ **1  My recommendation. L. Saleh, substantively, from 1 June.**',
  '⚠ **2  The case against, which is real. She has never run a night shift, and two of our six peak weeks are night work. My estimate is about 200,000 of overtime at risk in the first peak, and that is the price of this recommendation.**',
  '⚠ **3  What I would say behind a closed door and would say to the person if asked. The other candidate has run nights for nine years. The post needs somebody who writes down what they decide, and in nine years he has not started** — **which is a gap and not a grade, and it is one he could close in a month if anybody asked him to.**',
  '⚠ **4  What I am NOT saying. I am not saying he is unsuitable in general. I am not saying he lacks judgement. And I am not recommending against him because of the February argument about the Jableh load. If that is what anybody thinks this page is, it has failed and I would rather be asked.**',
  '⚠ **5  And a date. If this is not confirmed by 20 June, the recommendation lapses.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **No case against, or one with no figure.** ⚠ **A closed-door sentence that grades rather than naming a gap.** ⚠ **A gap with no route by which it could be closed.** ⚠ **A *what I am NOT saying* paragraph with no attributed motive in it.** ⚠ **And a deferral with no date, which is the fault 20.7 exists to prevent.**'));
out.push(stage('6R', 'Share'));
out.push(p('**Share — the closed-door sentence in both versions.** ⚠ **The class says of each whether the second names a gap and could be said to the person.** **Where the second version is merely vaguer than the first, the test has been dodged rather than applied.**'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample('Sample (226 words)', [
  '⚠ **The right answer at my work costs my own department two people and I have not recommended it.**',
  '**We run our own delivery fleet and we should not. Three vans, four drivers, a mechanic on call, and the arithmetic has been against us since the second hire firm opened in 2024.**',
  '⚠ **The case against my own recommendation is that two of the four drivers have been with us eleven and nine years, and that one of them is the man who comes out at night when the chillers fail, which is in no job description and which I wrote about last week.**',
  '⚠ **What I would say behind a closed door is that we keep the fleet because the owner likes seeing our name on the vans, and because nobody wants to be the person who put Hassan out of work.**',
  '⚠ **Would I say that to the owner? Not in those words.** ⚠ **The version I would say is: the fleet decision has been taken on presence and on loyalty, both of which are real, and it has not been taken on the route arithmetic. I would like to put the arithmetic and the two obligations side by side, and let you decide which you are buying.**',
  '⚠ **That is sayable, it is what I actually think, and writing it has shown me that I have not been avoiding a difficult conversation.** ⚠ **I have been avoiding a difficult page, which is a much smaller thing and takes an afternoon.**']));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to mark is *gap, or grade?*** **And ask of the rewritten version whether it is the same claim in sayable words or a weaker claim in vaguer ones.**'));
out.push(stage('7R', 'Share'));
out.push(p('**Share.** ⚠ **In how many did the unsayable sentence survive the test? Usually all three, in a better form** — **and that is the finding of the cycle: the test is a drafting instrument and not a muzzle, and the sentence it produces is the one the writer actually meant.**'));
out.push(note("The final two lines of that sample are the best thing in this cycle and they generalise beyond it. The learner discovers, by writing the sayable version, that they were not avoiding a difficult conversation but a difficult page — and that the page takes an afternoon. That is true of nearly every unsayable sentence in a working life, and it is the argument for the whole of Unit 20: the conversation feels impossible because it has never been drafted, and a drafted version of it is usually ordinary. Read it out and then ask what page each learner has been avoiding."));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: the right appointment at the wrong moment'));
out.push(stage('1', 'Get ready – Unit 20 quiz'));
out.push(table(['', 'The answer'], [
  ['**20.1**', '⚠ *What would I get wrong if I did this carelessly?* **Nothing → task. Something → the something is the judgement.**'],
  ['**20.2**', '⚠ **The calendar · the tests · the holes · and what they will change first.**'],
  ['**20.3**', '⚠ **What stops · what it costs · what would have to happen** — **and *and nobody chose this*.**'],
  ['**20.4**', '⚠ **It must be a rule somebody other than the writer could impose next month, not a disposition.**'],
  ['**20.5**', '⚠ **The authority** — **what the successor can do without you, with a date and a limit.** **An outsider refuses because they do not know whether it counts.**'],
  ['**20.6**', '⚠ *Would you be willing to say it to the person themselves if they asked?*'],
], [1, 7]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **She will not leave Bassel to hope** — **because he would do everything for the wrong reason for two months and would be entitled to be angry in July.**  2 ⚠ **The substantive appointment, decided today, effective 1 July; the acting appointment with the same authority and limit; the reason for the gap, which is the arbitration and not capability; and that if the substantive appointment has not taken effect by 15 July the acting appointment ends and the matter returns.**'));
out.push(p('⚠ **The distinction the whole cycle rests on is between *decided and starting later* and *deferred*.** ⚠ **The first is a decision with a date; the second is the absence of one** — **and the person standing in the gap hears the difference immediately and acts on it for two months.**'));
out.push(p('⚠ **Nour delivers the hard sentence herself, and the key should mark why.** ⚠ **She is the reason for the gap, so she is the only person who can say it without it sounding like somebody else\'s decision about Bassel** — **and she says it in front of everybody rather than afterwards.**'));
out.push(p('⚠ **The fourth paragraph of the minute is the drift protection and it is the part that gets left out of real minutes.** ⚠ **Every permanent temporary arrangement anybody has seen began as a short one nobody dated** — **and the person with standing to object is exactly the one who was told not to hope, which makes the drift both likely and unanswerable.**'));
out.push(p('⚠ **And the fifth paragraph is the proof that telling the truth paid.** ⚠ *Give me the Homs reopening and I will have run something by July.* **That ask only becomes available to a man who knows he is not auditioning** — **one who thinks he is on trial asks for nothing and volunteers for everything, which is worse for him and for the firm.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The five steps, with a sample run.**'));
out.push(table(['B asks', 'A answers (sample)'], [
  ['**Has it been decided, or is it open?**', '⚠ **Decided, on 12 May, effective 1 August.**'],
  ['**So am I acting, or auditioning?**', '⚠ **Acting. You are not auditioning, and doing it well will not change the outcome.**'],
  ['**Why is there a gap at all? Is it about me?**', '⚠ **The gap is the peak season handover, not your capability. She cannot leave her own post before the peak closes.**'],
  ['**When does this arrangement end, whatever happens?**', '⚠ **15 August. If the substantive appointment has not taken effect by then, the acting post ends and it comes back to the warehouse manager.**'],
  ['**And what am I supposed to actually DO in it, as a job?**', '⚠ **Take the night-shift overtime criteria and set them. Nobody has, in nine years, and by August you will have done something nobody else did.**'],
], [3.4, 5.6]));
out.push(note("The fifth step is the one teachers drop and it is the one that changes the two months from a holding operation into a job. Note that it also closes a 20.6 gap: the acting holder is given exactly the thing they were found to be missing, which means the firm gets a decision made and the person gets a route. Ask a class to design the fifth answer before the first four, as an exercise; it is harder, and it exposes whether the acting period has any content at all or is simply a gap with a person in it."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The four things the minute must contain, and then the fifth that the person in the gap asked for.** ⚠ **And why they could only ask once they had been told the truth** — **which is the finding of the cycle and the argument for the hardest sentence in it.**'));
out.push(stage('4', 'Your turn'));
out.push(sample('Sample — two temporary arrangements', [
  '⚠ **1  The arrangement:** **a colleague covered the counter supervisor\'s post for "a few months" in 2023.** ⚠ **Decided or open?** **Open.** ⚠ **End date?** **None.** ⚠ **What it became:** **two years and four months, and she is still called acting, and she has stopped asking.**',
  '⚠ **2  The arrangement:** **I took on the insurance renewal "until somebody has time".** ⚠ **Decided or open?** **Open.** ⚠ **End date?** **None.** ⚠ **What it became:** ⚠ **four years, and it is now in my job description, and nobody ever decided to put it there** — **which is permanent by drift with a document at the end of it.**',
]));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The mediation, in full.** ⚠ **Three people are right about three different things, which is why this one needs four paragraphs rather than a compromise.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Nadia**', '⚠ **the agreed decision will be executed badly: two months of silence turns an acting appointment into an audition and earns the resentment that follows**', '**the simplicity of a decision that only needed announcing**'],
  ['**Nour**', '⚠ **she cannot leave the post for May and June without probably losing issue two, and she is the only person who can say so without sounding ambitious**', '⚠ **the post for two months, and the comfort of letting somebody else deliver the news** — **she says it herself, in front of everybody**'],
  ['**Bassel**', '⚠ **he is entitled to know, and a holding operation is not a job**', '⚠ **the hope** — **told on a Thursday that doing it well will not change the outcome, which he asked for and which is still hard**'],
], [1, 4.4, 4.4]));
out.push(p('**Report (sample):**  _Everybody is right about something. Nadia is right that the decision will be executed badly. Nour is right that she cannot leave before the award. Bassel is right that he is entitled to know. So the minute says the substantive appointment decided today and effective 1 July, the acting appointment with the same authority, the reason for the gap, and an end date of 15 July — and Nour gives up the post for two months while Bassel gives up the hope._'));
out.push(p('⚠ **And the sentence that cost the most, which is Nour\'s:** *"If I left you to hope, you would do everything for the wrong reason for two months and you would be entitled to be angry in July."* ⚠ **Mark it as the hardest thing anybody says in either book to somebody\'s face.** **It is also the only reason the fifth paragraph exists.**'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)'));
out.push(table(['Line', '1', '2', '3', '4', '5', '6'], [['Answer', 'CORRECT', 'BEEN', 'CORRECT', 'OF', 'CORRECT', 'IT']], [1, 1.4, 1, 1.4, 1, 1.4, 1]));
out.push(table(['Line', '7', '8', '9', '10', '11', '12'], [['Answer', 'CORRECT', 'TO', 'CORRECT', 'CORRECT', 'IN', 'CORRECT']], [1, 1.4, 1, 1.4, 1.4, 1, 1.4]));
out.push(p('**2 BEEN** — *I have tried to be exact*; **the perfect active takes no *been*.**  **4 OF** — *until 30 June*; **a date takes no *of* in this form.**  **6 IT** — *has been decided and is recorded*; **the pronoun duplicates the subject.**  **8 TO** — *acting in the post*; ***in to* is not a structure here.**  **11 IN** — *provisional except its length*; ***provisional in except* is not English.**'));
out.push(p('⚠ **The pattern in this text, and it is the one to teach:** ⚠ **four of the five extra words are an auxiliary or a preposition inserted where the structure does not take one** — ***been*, *of*, *to*, *in*.** **The fifth, *it*, is a duplicated pronoun, which is the other standard Part 5 fault.** ⚠ **Between them those two families account for most of what this part ever tests.**'));
out.push(p('⚠ **And the instruction candidates ignore is the one that decides the paper.** ⚠ **Every one of the twelve lines makes perfect sense**, **including the five with errors in them** — **so a candidate reading for meaning will mark all twelve CORRECT.** ⚠ **Read each line for its STRUCTURE: find the verb, find its object, find what the prepositions attach to.** **That is a different act of reading and it has to be taught as one.**'));
out.push(p('⚠ **Expect line 11 to be the hardest.** ***Provisional in except its length* passes the ear almost completely**, **because *provisional in* sounds like the beginning of a real phrase** — ⚠ **and the only way to catch it is to ask what *in* is attached to, and find that the answer is nothing.**'));
out.push(stage('6', 'Write with help – Writing Part 1 sample'));
out.push(sample('Sample answer (47 words)', [
  '**To:** **B. Nassif**   **From:** **N. Sayegh**   **Date:** **25 April**   **Subject:** **the post from 1 May**',
  '⚠ **The substantive appointment was decided on 24 April and takes effect on 1 July.**',
  '⚠ **You are acting from 1 May to 30 June, with my authority and my limit. This is not a trial.**',
  '⚠ **If it has not taken effect by 15 July, the acting appointment ends and the matter returns to the board.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', 'the decision, with the date it was taken'],
  ['**1**', '⚠ **and the date it takes effect** — **both dates, because one of them is what makes it a decision rather than a plan**'],
  ['**1**', '**the acting period, with its dates**'],
  ['**1**', '⚠ **what the acting post is NOT, said plainly** — *this is not a trial.* **No mark for *we value your contribution*.**'],
  ['**1**', '⚠ **an end date with a consequence**, **and 40 to 50 words with the count written at the end**'],
], [1, 5]));
out.push(p('⚠ **The fourth mark is the one that will be lost and the reason is new.** **In the Mid-Book Test and in Unit 19 the lost mark was the one that cost the writer something.** ⚠ **Here it is the one that costs the READER something** — **and candidates replace it with reassurance because the reader is the person the news is about.** **A message that says *we value your contribution* has used nine words to avoid the content point it was asked for.**'));
out.push(p('⚠ **And do not accept a single date.** ⚠ *The appointment takes effect on 1 July* **is a plan.** *It was decided on 24 April and takes effect on 1 July* **is a decision**, **and the difference is four words and the whole of 20.7.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **One date where two were needed.** ⚠ **Reassurance in place of *this is not a trial*.** ⚠ **An end date with no consequence.** ⚠ **A message that explains why the gap exists at length** — **at 45 words that crowds out two content points, and the reason belongs in the minute.** ⚠ **And a word count outside 40 to 50.**'));
out.push(stage('7', 'Write freely'));
out.push(p('⚠ **Mark for the four things the arrangement should have had, applied to a real case.** ⚠ **The commonest honest finding is that the arrangement was never decided at all** — **and the second sample above is the pattern: four years, now in a job description, and nobody ever decided to put it there.**'));
out.push(pb());
out.push(stage('✓', 'Marking the unit check', 15));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'b', 'a', 'c', 'b', 'a']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one each. ⚠ **Nine judgements out of forty tasks, and the forty are the part nobody needs after a fortnight (1) · nine (1) · page six, the five single-person dependencies (1) · sixteen years of approving everything, found by writing the judgements page, and there is nothing to hand over because there was never anything there (1) · read page four again in 2029 before the lease, and write page six first and the task list last (1) · the 2019 introduction of Abu Yasser to Mr Attar, which worked because he said what Abu Yasser was allowed to do without him, and which was the only one of four that worked (1).**',
  '**C  Reading — 5 marks:** **one of the five (1)** · ⚠ **that the overtime approvals were not a dependency at all, because he approved everything and never had a criterion (2)** · ⚠ **2015, when it would have been four pages and a reorganisation instead of three weeks and a hope (2).**',
  '**D  Writing — 6 marks:** **the task (1)** · ⚠ **what would go wrong if it were done carelessly (1)** · **the judgement (2)** · ⚠ **a case it applies to AND a case it does not (2)** — **one mark each, and the second is the one that prevents the expensive error.**',
  '**Total 25.** ⚠ **The profile to expect: A high, B split, C high, D split.** ⚠ **B loses the last gap, which asks what he got right by accident** — **and the answer is in the audio only as a story, so candidates write *the introduction* without the reason.** ⚠ **And D loses the second named case in well over half of papers.** **Learners give the case to act on and not the case to leave alone, which is the same asymmetry as 19.1\'s burden of proof: the reflex is to write the action, and the omission is what costs a firm a customer.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five faults to watch. First, the task list masquerading as a handover. The unit announces this trap on its own first page and classes fall into it anyway, because a task list is what a handover has always looked like to them. The remedy is one question, asked about the learner's own work before anything is discussed: what would I get wrong if I did this carelessly? Nothing means task; something means the something is the judgement. Asking people what they decide produces I just do the job; asking this produces a criterion, two names and a figure. Insist on both names — the case the judgement applies to and the case it does not — because the error that costs a firm a customer is acting on a Hamdan, and over half of papers supply only the chase-list. Second, use your discretion, and every longer version of it. A successor can apply a named case in week one and a disposition in about two years, which is roughly when they would have worked it out unaided. Third, the dependency written as one sentence. Learners can feel that it reads as a boast and therefore write nothing, so say Nadia's line first — that is not a risk, that is a boast with a worried face on it — which gives them permission to write the three-part version. Two of the three parts are about the firm and one is a job for somebody else, so the structure cannot be read as self-importance whatever the tone. And teach the incomplete remedy explicitly: a remedy with its gap named is usable, and one omitted because it could not be finished is a problem nobody inherits. Where there is no remedy at all, make them name who carries the risk, because a risk held by nobody is how it became a risk. Fourth, the humble disownment in 20.4, which is commoner than the defensive version and more dangerous. A learner who disowns a decision they still believe in hands on a prohibition they do not endorse, and the successor takes do not close shops from a page about not counting anything. Ask whether they would take the same decision today; the split appears immediately. Then hold the fourth part to being a rule somebody else could impose next month — a required count, an initialled clause, a line on a form — and expect two-thirds of first drafts to offer be more careful in longer words. Fifth, and this is the one to spend the most time on, the belief that the test in 20.6 is a muzzle. Run it in the right order: the closed-door sentence first, then the test, then the rewrite. Learners asked for the sayable version first produce something bland; learners who say the blunt thing and then rewrite it produce something precise, and about nine sentences in ten come out better. He would be adequate becomes the post this year needs somebody who has run a dispute, and he has not — sayable, more informative, and naming a gap instead of grading a man. A gap can be acquired, pointed at and argued with; a grade can be none of the three and follows somebody for years. Two notes on 20.7. The distinction is between decided and starting later and deferred, and it is not a nicety: the person in the gap hears which one it is and works accordingly for two months. And Nour delivers the hard sentence herself, in front of everybody, because she is the reason for the gap — which is the only position from which it can be said without sounding like somebody else's judgement about Bassel. Finally, the fifth paragraph of the minute is the proof that telling the truth paid. A man who knows he is not auditioning asks for the Homs reopening; a man who thinks he is on trial asks for nothing and volunteers for everything. Ask the class which of those two they have been, and how they knew."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 20 · Answer Key');
module.exports = out;
