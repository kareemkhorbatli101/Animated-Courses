// Proactive English C1 · Syria Edition · Book 2 · Unit 20 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE LETTER SAID', 'WHAT IT MEANT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const refusals = (rows) => table(['THE REFUSAL AS WRITTEN', 'WHAT ARGUMENT IT INVITES', 'WHAT IT SHOULD SAY'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three refusals from the reports on the board. For each one the room says whether it is _not able_ or _not willing_, and what the applicant will do next.';
const slip = '**Peer review, C1 band 4.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 20  Refusing Without Giving Grounds for Appeal'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Everybody in this room refuses somebody in writing, and most of them do it badly in exactly the same way.** ⚠ **A grants officer writes twenty-seven refusals a year.** **A sub-editor turns down four pieces a week.** **A headmaster refuses a parent.** **A pharmacist refuses a representative.** **An engineer refuses a client\'s request for a figure he cannot give.** **None of them enjoys it, and every one of them has written _we are unable to_ about a decision.**',
  '**And that is the subject.** ⚠ **_We are not able to_ and _we have decided not to_ are different sentences and they invite different arguments.** **The first invites the applicant to remove the obstacle, and if they remove it you must say yes.** **The second invites them to argue that you should want to, which is an argument about your judgement and has no end** — **and nine refusals in ten choose the first because it sounds kinder, and the applicant then spends six weeks removing an obstacle that was never the reason.**',
  '**20.1** tells the two refusals apart and chooses.   **20.2** gives a reason that is also a limit.   **20.3** refuses once and not twice.   **20.4** offers the alternative you can deliver, with a date and a figure — or none at all.   **20.5** says what would make the answer different, without inviting a reapplication.   **20.6** writes the proposal that is a refusal of its reader\'s proposal.   **20.7** mediates between a refusal, its reader, and the person who has to defend it.',
  '**Exam practice in 20.7:** C1 Advanced **Reading and Use of English Part 5** (multiple choice), **Writing Part 2** (the proposal) and **Listening Part 4** (multiple matching).',
  '⚠ **Bring a refusal you have written and a refusal you have received.** **Both, if you can.** **The one you received is the more useful of the two: you know exactly what you did next, and what you did next is what this unit is about.**',
  '**And the warning this unit needs in its first minute.** ⚠ **Nothing here is about refusing more comfortably.** **A refusal that leaves its reader comfortable and uninformed has cost them weeks, and the kindness was yours and not theirs.** **Every cycle in this unit makes the letter harder to write and shorter to act on** — **and the measure of a refusal is not how it reads on the day but what the person who got it does in the fortnight after.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 20.1 =====================
out.push(pb());
out.push(h2('20.1  Not able, or not willing'));
out.push(p('**Function:** telling _we are not able to_ from _we are not willing to_, and choosing   ·   **Grammar:** the two refusals and the argument each one invites   ·   **Pronunciation:** the decision said as a decision, flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the refusal you received, read aloud exactly, and then what you did in the fortnight after it.** ⚠ **What you did, not what you felt.** **In this class seven of ten had done something to remove an obstacle and four of the seven later found that the obstacle was not the reason** — **and your teacher writes the ten refusals on the board and the ten actions beside them.**'));
out.push(board('We regret that we are unable to fund this scheme.', 'We have decided not to fund it.'));
out.push(p('**b**  Which two are decisions said as decisions? **1** _We regret that we are unable to assist on this occasion._  **2** _The committee has decided not to fund scheme 7, and I set out the reason below._  **3** _Unfortunately our resources do not permit us to help at this time._  **4** _I am not going to run the piece. The reason is in the second paragraph and it is not about the writing._  **5** _I am afraid it is not possible for us to take this forward._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the difference is?   **A** politeness   **B** **the argument each one invites** — _not able_ invites the removal of an obstacle, _decided not to_ invites an argument about judgement   **C** the length of the letter'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say she found when she counted her own refusals?   **2** What does Mrs Khoury say _unable_ costs the applicant?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.1  Unable, or decided not to', [
  ['Ms Huda', 'Mrs Rizk has written twenty-seven refusals this year.'],
  ['Mrs Rizk', '⚠ **Twenty-seven, and I counted the first words of each of them last month because of 16.2.** **Twenty-four begin with some form of _we are unable_** — **and of those twenty-four, nineteen were decisions.**'],
  ['Mrs Khoury', 'Nineteen of twenty-four.'],
  ['Mrs Rizk', '⚠ **The committee had money, the scheme was eligible, and we chose other schemes.** **That is a decision.** **I wrote _unable_ because _unable_ is kinder to write** — **and I had never once thought about what it is like to receive.**'],
  ['Mr Attar', 'What is it like to receive?'],
  ['Mrs Khoury', '⚠ **It is an instruction to remove an obstacle, and that is the whole cycle.** **_Unable_ tells the applicant that something is in the way.** **So they go and move it: they find a co-funder, they halve the budget, they get the governorate\'s letter** — **and they come back, and the obstacle is gone, and you must either say yes or admit that it was never the reason.**'],
  ['Mrs Oueidat', 'And what does that cost them?'],
  ['Mrs Rizk', '⚠ **Six weeks, in the case I know best, and the co-funder\'s goodwill, which they spent on us.** **They came back in March with a letter from the governorate that had taken them five visits** — **and the committee refused it again, for the same reason, which was that we had chosen two other schemes in the same district.**'],
  ['Dr Qabbani', 'So _decided not to_ is the honest one.'],
  ['Mrs Khoury', '⚠ **It is the honest one and it is not comfortable, and the room should notice which of those two facts is doing the work.** **_We have decided not to_ invites an argument about judgement: that you should have chosen differently.** **That argument is personal and it has no end** — **and it is the argument you are entitled to receive, because it is the argument that is actually available.**'],
  ['Mr Shihabi', 'Is _unable_ ever right?'],
  ['Mrs Rizk', '⚠ **Five of my twenty-seven, and the test is one question: if the obstacle were removed tomorrow, would the answer be yes?** **If it would, _unable_ is true and you should say what the obstacle is, because the applicant can then decide whether to move it.** **If it would not, _unable_ is false** — **and it is the most expensive false sentence in this unit.**'],
  ['Mr Tayara', 'And the tone of _we have decided_?'],
  ['Mrs Oueidat', '⚠ **Flat, and said once.** **_We have decided not to fund scheme 7_ and then the reason.** **A decision said with regret in it invites the applicant to think the regret is the opening of a negotiation** — **and in a sense it is, which is why it must not be there.**'],
  ['Mrs Tarabishi', 'May you say you are sorry at all?'],
  ['Mrs Khoury', '⚠ **Once, at the end, for a thing you have actually done to them** — **which is 15.5 arriving in a refusal.** **_I am sorry that this has taken five weeks_ is an apology for a delay you caused.** **_I am sorry we cannot help_ is an apology for the decision, which you are not sorry about, because you made it.**'],
  ['Mrs Ajouz', 'Mine is a representative who comes back every month.'],
  ['Mrs Rizk', '⚠ **Then he has been told _unable_ at some point, and he is removing obstacles.** **He will stop the week after he is told that it is a decision** — **and he may stop coming at all, which the room should notice is the thing most people are actually avoiding.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the five visits.** **A man went to the governorate five times and got a letter, because of a word I chose in order to make my own afternoon easier** — **and when I refused him the second time he wrote back and asked, quite politely, what the real reason had been the first time.**'],
]));
out.push(sp());
out.push(box('Language box – the two refusals', [
  '**_We are not able to_ invites the removal of an obstacle.** ⚠ **The applicant goes and moves it** — **a co-funder, a halved budget, a letter from the governorate** — **and comes back, and you must either say yes or admit that it was never the reason.**',
  '**_We have decided not to_ invites an argument about judgement.** ⚠ **That you should have chosen differently.** **It is personal, it has no end, and it is the argument you are entitled to receive** — **because it is the one that is actually available.**',
  '**The test is one question.** ⚠ **If the obstacle were removed tomorrow, would the answer be yes?** **If it would, _unable_ is true and you must say what the obstacle is.** **If it would not, _unable_ is false** — **and it is the most expensive false sentence in this unit.**',
  '**Say the decision flat and once.** ⚠ **_The committee has decided not to fund scheme 7_, and then the reason.** **A decision said with regret in it invites the applicant to read the regret as the opening of a negotiation** — **and in a sense it is, which is why it must not be there.**',
  '**One apology, at the end, for something you have actually done.** ⚠ **_I am sorry that this has taken five weeks_ is an apology for a delay you caused.** **_I am sorry we cannot help_ is an apology for a decision you made and are not sorry about** — **which the reader can hear.**',
  '**And the applicant who keeps coming back has been told _unable_.** ⚠ **He is removing obstacles, which is what he was asked to do.** **He stops the week after he is told that it is a decision** — **and he may stop coming at all, which is the thing most people are actually avoiding.**',
  '**Pronunciation.** 🔊 **Track 20.2** **Say _the committee has decided not to fund scheme 7_ with no fall on _not_ and no lift on _decided_.** ⚠ **A fall on _not_ makes it final in a way that sounds personal; a lift on _decided_ makes it provisional.** **Flat, it is a report of something that happened in a room** — **which is what it is.**',
  '**Practise:** Choose, and say it. **1** money existed and you chose elsewhere  **2** the round is genuinely closed  **3** a representative who comes monthly  **4** a decision dressed as a capacity  **5** an apology for a delay you caused',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the refusal from the card. B says **whether it is _not able_ or _not willing_**, says **what the applicant will do next**, and gives **the sentence it should have been.** ⚠ **Two rows on each card are genuinely _not able_** — **and there B says so and names the obstacle.** Change cards.'));
out.push(refusals([
  ['_We are unable to assist on this occasion._', '⚠ **Remove the obstacle; come back**', '_We have decided not to._'],
  ['_⚠ The round closed on 1 March and your file is dated the second._', '⚠ **Apply next round**', '_Correct as written._'],
  ['_Our resources do not permit us at this time._', '⚠ **Find a co-funder**', '_We chose two other schemes._'],
  ['_⚠ The board has no power to waive the residence condition._', '⚠ **None available**', '_Correct as written._'],
  ['_I am afraid it is not possible to take this forward._', '⚠ **Ask what would make it possible**', '_I am not going to run it._'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the kind, the next action, and the sentence it should have been. ⚠ **Rows 2 and 4 on both cards are genuinely _not able_ and the obstacle is nameable in both** — **a date and a power.** **Rows 5 are the hardest**: both are decisions in the passive, **and the room will want to keep the passive because it removes the person who decided, which is exactly what makes the letter unanswerable and therefore appealable.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the refusal you wrote** and apply the test. ⚠ **If the obstacle were removed tomorrow, would the answer be yes?** **Then rewrite the first sentence accordingly.** **In this class eight of ten first sentences said _unable_ and six of the eight failed the test** — **and all six writers said, when asked, that they had known.**'));
out.push(p('**b**  Swap. Your partner reads **only your first sentence** and says **what they would do in the fortnight after it.** ⚠ **Then the harder question: what did you actually want them to do?** — **and in this class four students discovered that the answer was _nothing_, which no refusal of theirs had ever said.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has written twenty-seven refusals this year and counted the first words of each of them last month, and twenty-four begin with some form of we are unable, and of those twenty-four, nineteen were decisions. Mrs Khoury repeated the figure, and Mrs Rizk said the committee had money, the scheme was eligible, and they chose other schemes, which is a decision, and she wrote unable because unable is kinder to write and she had never once thought about what it is like to receive. Mr Attar asked what it is like to receive, and Mrs Khoury said it is an instruction to remove an obstacle, and that is the whole cycle: unable tells the applicant that something is in the way, so they go and move it, and they come back, and the obstacle is gone, and you must either say yes or admit that it was never the reason. Mrs Oueidat asked what that costs them, and six weeks in the case Mrs Rizk knows best, and the co-funder\'s goodwill, which they spent on her committee: they came back in March with a letter from the governorate that had taken them five visits, and the committee refused it again for the same reason. Dr Qabbani said so decided not to is the honest one, and Mrs Khoury said it is the honest one and it is not comfortable, and the room should notice which of those two facts is doing the work, because decided not to invites an argument about judgement, which is personal and has no end and is the argument you are entitled to receive. Mr Shihabi asked whether unable is ever right, and five of the twenty-seven, and the test is one question: if the obstacle were removed tomorrow, would the answer be yes. Mr Tayara asked about the tone, and Mrs Oueidat said flat, and said once. Mrs Tarabishi asked whether you may say you are sorry at all, and once, at the end, for a thing you have actually done to them. Mrs Ajouz said hers is a representative who comes back every month, and then he has been told unable at some point and he is removing obstacles. And Mrs Rizk said the thing she will take away is the five visits, and that when she refused him the second time he wrote back and asked, quite politely, what the real reason had been the first time. And Mrs Khoury said the repair is in the opening itself: the committee has decided not to fund it where it was a decision, with we are unable kept for the five where an obstacle can be named, and the obstacle named in the same sentence._'));
out.push(p('**Listener task:** write your partner\'s first sentence, the kind, and what they would do next.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote after counting her refusals. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note on twenty-seven refusals_ · _first words only_ · **4 November**',
  '**What I counted.** **The first eight words of every refusal I wrote this year.** ⚠ **Twenty-four of twenty-seven begin with some form of _we are unable_.** **Of those twenty-four, nineteen were decisions: the committee had money, the scheme was eligible, and we chose other schemes.**',
  '**Why I wrote _unable_.** **Because it is kinder to write.** ⚠ **Not kinder to read, which I had never thought about, and not kinder to act on** — **and the distinction took me nine years and one letter from an applicant to notice.**',
  '**What _unable_ tells the reader.** **That something is in the way.** **So they move it.** ⚠ **Scheme 7 came back in March with a letter from the governorate that had taken five visits, a co-funder we had never heard of, and a budget cut by a fifth** — **and the committee refused it again, for the reason it had refused it the first time, which was that we had already funded two schemes in that district.**',
  '**The letter that made me count.** **Four lines, perfectly polite, from the man who had made the five visits.** ⚠ **He asked what the real reason had been the first time.** **I had no answer that I was willing to put in writing, which told me what the answer was.**',
  '**The test, which takes eight seconds.** **If the obstacle were removed tomorrow, would the answer be yes?** ⚠ **Five of my twenty-seven pass it.** **The round closed on the first and the file is dated the second: that is _unable_, the obstacle is a date, and the applicant can decide what to do about next year.**',
  '**What the honest sentence costs.** **An argument about judgement, which is personal and which I shall lose some of.** ⚠ **Three applicants have written back since September to say that we chose wrongly** — **and all three arguments were about the choice, which is the argument that was available all along and which my letters had been concealing.**',
  '**And one thing I had not expected.** **The monthly representative stopped coming.** ⚠ **Mrs Ajouz said in class that she had one too, and I had one for four years: a man who appeared every month with a slightly different version of the same proposal.** **I wrote _the committee has decided not to fund proposals of this kind, and the reason is at paragraph 2_ in October** — **and he has not been back, and I do not feel as well about that as I expected to.**',
  '**What I am doing about the twenty-four.** **Rewriting the standard opening, which is the only part of this that survives me.** ⚠ **_The committee has decided not to fund X_ where it was a decision, and _we are unable_ kept for the five where an obstacle can be named** — **with the obstacle named in the same sentence, because _we are unable_ without an obstacle is the sentence that sends a man to the governorate five times.** **I have also asked the secretariat for the count of appeals by opening word, which nobody has ever compiled** — **and I expect it will show that the twenty-four generate the correspondence and the five do not.**',
]));
out.push(item('1', 'What did scheme 7 do between the first refusal and the second, and what happened?'));
out.push(item('2', 'What did the four-line letter ask, and what did her inability to answer tell her?'));
out.push(item('3', 'What has happened since September, and why does she say those arguments were available all along?'));
out.push(writers([
  'A note on your own refusals: **what you counted, and the figure** → **why you wrote the softer word** → **what that word tells a reader to do** → **the case where they did it** → **the letter that made you count** → **the test, in one question** → **what the honest sentence costs** → **and one thing you had not expected.**',
  '⚠ **Count something and say what you counted.** _The first eight words of every refusal I wrote this year._ **A note that opens on a principle about honesty will be read as a mood** — **and twenty-four of twenty-seven cannot be argued with by anybody, including the writer.**',
  '**Separate kinder to write from kinder to read.** ⚠ _Because it is kinder to write. Not kinder to read, which I had never thought about._ **That is the whole fault in two sentences** — **and it is a fault of attention and not of character, which is why it can be repaired by a count.**',
  '**Give the case in full, with the applicant\'s costs itemised.** ⚠ _A letter that had taken five visits, a co-funder we had never heard of, and a budget cut by a fifth._ **Three items, each one somebody\'s work** — **and the itemising is what stops the case being an anecdote.**',
  '⚠ And **end on the thing you had not expected, and do not resolve it.** _He has not been back, and I do not feel as well about that as I expected to._ **A note that ties up every consequence has stopped being a record** — **and the unresolved sentence is the one a reader will remember and test against their own practice.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on your own refusals (120 words or more).'));
out.push(p('**______________** · _note on _______________ · **______________**   **What I counted.** **______________.** ⚠ **______________ of ______________ begin with ______________.** **Of those, ______________ were ______________.**   **Why I wrote ______________.** **Because ______________.** ⚠ **Not ______________, which I had never thought about.**   **What ______________ tells the reader.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A count, with what was counted',
  'Kinder to write separated from kinder to read',
  'One case in full, with the applicant\'s costs itemised',
  'The test as one question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, flat, and the room says what it would do next.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the count, the softer word, what it instructs, the case, the letter, the test, what honesty costs, and the thing you had not expected.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a real count, the test applied to it, and no sentence that presents the honest version as comfortable.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many first sentences said _unable_?** **Eight of ten, and six of the eight failed the test** — **and all six writers said they had known, which is worth hearing out loud.** **Then: how many students have removed an obstacle in response to a refusal?** **Seven, and four later found the obstacle was not the reason.** **Then Mrs Rizk\'s five visits, and the four-line letter.**'));
out.push(hw('**Count the first eight words of every refusal you have written this year** and apply the test to each. ⚠ **Then do the harder half: rewrite one of them as a decision and send it, or say why you did not.** **In this class six of ten rewrote one and two sent it** — **and both replies argued about the choice, which is the argument the first version had concealed.** **Bring the count and the reply.** **20.2 gives a reason that is also a limit**, so bring one refusal whose reason an applicant could remove.'));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  The reason that is also a limit'));
out.push(p('**Function:** giving a reason that is also a limit   ·   **Grammar:** the reason that cannot be met by a better application   ·   **Pronunciation:** the reason said as a fact about the world'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one refusal of yours whose reason an applicant could remove.** ⚠ **The reason, and then how they would remove it.** **In this class nine of ten reasons could be removed and six of the nine had already been removed by somebody** — **and your teacher writes the ten reasons on the board with the removal beside each.**'));
out.push(board('The budget is too high.', 'The district already has two funded schemes.'));
out.push(p('**b**  Which two cannot be met by a better application? **1** _The budget is higher than we can consider._  **2** _We have funded two schemes in this district this year and the programme does not fund a third._  **3** _The proposal does not demonstrate community ownership._  **4** _The post requires a qualification from an institution on the schedule, and the schedule was last revised before your institution existed._  **5** _The application was not sufficiently detailed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a reason has to be?   **A** true   **B** **true and unremovable** — a fact about the world rather than a fault in the application   **C** easy to understand'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say you get if the reason can be removed?   **2** What does Mrs Rizk say she now does when the only true reason is removable?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.3  A reason they cannot remove', [
  ['Ms Huda', 'Mrs Rizk sorted her reasons into two kinds last week.'],
  ['Mrs Rizk', '⚠ **Removable and unremovable, and the proportion is not what I expected.** **Nine of my ten standing reasons are removable** — **the budget, the detail, the evidence of ownership, the timetable** — **and all four of those are faults in an application and not facts about the world.**'],
  ['Ms Huda', 'And a removable reason gets you what?'],
  ['Mrs Khoury', '⚠ **The same application, improved, and a second refusal to write.** **That is not a theory: it is arithmetic.** **You have told somebody what is wrong, they have fixed it, and you have either to fund it or to produce a reason you did not give the first time** — **and the second reason, arriving second, reads as something you have gone looking for.**'],
  ['Mr Attar', 'What does an unremovable reason look like?'],
  ['Mrs Rizk', '⚠ **_We have funded two schemes in this district this year and the programme does not fund a third._** **Nothing in the application can change that.** **It is a fact about the programme and about the district** — **and the applicant can act on it, which is the whole point: they can apply next year, or in another district, or stop.**'],
  ['Dr Qabbani', 'So the unremovable reason is kinder.'],
  ['Mrs Oueidat', '⚠ **It is more useful and it is not kinder, and the room should not be allowed to blur those.** **An unremovable reason closes a door, and a closed door is a loss.** **A removable reason leaves the door open and costs the applicant six weeks of walking towards it** — **and the second is the greater unkindness and feels like the smaller one.**'],
  ['Mrs Tarabishi', 'What if the only true reason is removable?'],
  ['Mrs Rizk', '⚠ **Then you say so and you say what to change, which is a different letter and a shorter one.** **_The proposal gives no maintenance interval; with one, it would be competitive in the autumn round._** **That is not a refusal with a reason** — **it is a refusal with an instruction, and it is the honest document when the fault really is in the application.**'],
  ['Mrs Khoury', '⚠ **And the two documents must not be mixed, which is where most letters fail.** **A letter that gives an unremovable reason and then lists three improvable faults has told the applicant to improve an application that cannot be funded** — **and in this class four of ten refusals did exactly that.**'],
  ['Mr Shihabi', 'Mine is a piece I turned down for being too long.'],
  ['Mrs Khoury', '⚠ **Removable, and he will cut it, and you will have to say the real thing in April.** **_Too long_ is almost never the reason** — **and the unremovable version is usually about the commission and not the piece: _we are not running a second piece on this subject this quarter_.**'],
  ['Mr Tayara', 'And if the unremovable reason is embarrassing to us?'],
  ['Mrs Oueidat', '⚠ **It usually is, and that is why it is in the internal note instead of the letter.** **_The schedule was last revised before your institution existed_ is embarrassing to the body and it is the reason** — **and a letter that says _your qualification does not meet the schedule_ has moved an institutional failure on to an applicant, which is the one thing a refusal must never do.**'],
  ['Dr Qabbani', 'And if the reason is a decision and not a rule at all?'],
  ['Mrs Rizk', '⚠ **Then the decision is the reason, and it is unremovable in the only sense that matters: nothing the applicant does will change a choice that has already been made.** **_The committee has decided not to fund scheme 7; it has funded two other schemes in this district this year._** **The choice and the constraint in one sentence** — **and the applicant can see both, which is more than any letter of mine gave anybody before November.**'],
  ['Mrs Ajouz', 'Does anybody argue with an unremovable reason?'],
  ['Mrs Rizk', '🔊 ⚠ **Twice, and both arguments were good.** **One applicant showed me that the second scheme in his district was in a different sub-district, which the programme treats separately** — **and I funded him.** **The other told me that the programme had funded three in a district in 2022, which was true and which nobody at the committee had remembered** — **and that is the cost of an unremovable reason: when it is wrong, it is wrong in public and it has to be withdrawn.**'],
]));
out.push(sp());
out.push(box('Language box – the reason that is also a limit', [
  '**A removable reason gets you the same application, improved, and a second refusal to write.** ⚠ **It is arithmetic and not a theory** — **you have told somebody what is wrong, they have fixed it, and you must either fund it or produce a reason you did not give the first time.**',
  '**An unremovable reason is a fact about the world and not a fault in the application.** ⚠ _We have funded two schemes in this district this year and the programme does not fund a third._ **Nothing in the application can change it** — **and the applicant can act on it: next year, another district, or stop.**',
  '**It is more useful and it is not kinder.** ⚠ **An unremovable reason closes a door and a closed door is a loss.** **A removable reason leaves it open and costs six weeks of walking towards it** — **and the second is the greater unkindness and feels like the smaller one.**',
  '**Where the only true reason is removable, write the other document.** ⚠ _The proposal gives no maintenance interval; with one, it would be competitive in the autumn round._ **A refusal with an instruction, not a refusal with a reason** — **and it is the honest letter when the fault really is in the application.**',
  '**And never mix the two.** ⚠ **A letter that gives an unremovable reason and then lists three improvable faults has told the applicant to improve an application that cannot be funded** — **and four of ten refusals in this class did exactly that.**',
  '**Where the unremovable reason is embarrassing to you, it still goes in the letter.** ⚠ **_The schedule was last revised before your institution existed_ is embarrassing to the body and it is the reason** — **and _your qualification does not meet the schedule_ has moved an institutional failure on to an applicant, which is the one thing a refusal must never do.**',
  '**Pronunciation.** 🔊 **Track 20.4** **Say the unremovable reason flat, as a fact about the world, with no stress on _not_.** ⚠ **Stress on _not_ makes it a ruling and invites an argument about the ruling** — **and flat, it is a statement about a programme and a district, which the applicant can check and act on.**',
  '**Practise:** Make it unremovable. **1** the budget is too high  **2** the detail is insufficient  **3** no evidence of ownership  **4** the piece is too long  **5** a reason that is embarrassing to you',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the removable reason from the card. B gives **the unremovable one**, or says **that the only true reason is removable** and writes the instruction instead. ⚠ **Two rows on each card have no unremovable reason behind them at all.** Change cards.'));
out.push(table(['Card A – the reason as written', 'Card B – the reason as written'], [
  ['_The budget is higher than we can consider._', '_The proposal lacks detail._'],
  ['_⚠ The proposal gives no maintenance interval._', '_⚠ The piece has no second source._'],
  ['_No evidence of community ownership._', '_The timetable is unrealistic._'],
  ['_⚠ The qualification is not on the schedule._', '_⚠ The form was submitted on the wrong version._'],
  ['_The piece is too long._', '_The applicant has no experience in this sector._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the unremovable reason, or the instruction. ⚠ **Rows 2 and 4 on both cards have no unremovable reason**: two are genuine faults and the honest document is an instruction, **and two are embarrassing to the body — a stale schedule and a superseded form — and the letter must say so rather than blame the applicant.** **Rows 5 are the hardest**: both can be made unremovable by naming the commission or the programme, **and the room will try to keep them as applicant faults.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the refusal whose reason could be removed** and find the unremovable reason behind it. ⚠ **If there is none, write the instruction instead and say so.** **In this class six of ten found an unremovable reason, three had to write the instruction, and one found that the unremovable reason was embarrassing to the organisation** — **and that one is the useful case and should be read aloud.**'));
out.push(p('**b**  Swap. Your partner reads **the unremovable reason** and tries to remove it. ⚠ **If they can, it is not unremovable.** **Then the harder question: is it true?** — **and in this class two unremovable reasons turned out to be wrong, which is the cost of the method and has to be paid in public.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk sorted her reasons into two kinds last week, removable and unremovable, and the proportion is not what she expected: nine of her ten standing reasons are removable, which are the budget, the detail, the evidence of ownership and the timetable, and all four of those are faults in an application and not facts about the world. Ms Huda asked what a removable reason gets you, and Mrs Khoury said the same application, improved, and a second refusal to write, which is not a theory but arithmetic: you have told somebody what is wrong, they have fixed it, and you have either to fund it or to produce a reason you did not give the first time, and the second reason, arriving second, reads as something you have gone looking for. Mr Attar asked what an unremovable reason looks like, and that the programme has funded two schemes in this district this year and does not fund a third, which nothing in the application can change, and the applicant can act on it. Dr Qabbani said so the unremovable reason is kinder, and Mrs Oueidat said it is more useful and it is not kinder, and the room should not be allowed to blur those, because an unremovable reason closes a door and a closed door is a loss, while a removable reason leaves it open and costs six weeks of walking towards it. Mrs Tarabishi asked what happens if the only true reason is removable, and then you say so and you say what to change, which is a different letter and a shorter one. Mrs Khoury said the two documents must not be mixed, and four of ten refusals in the class did exactly that. Mr Shihabi said his was a piece turned down for being too long, and removable, and he will cut it. Mr Tayara asked what happens if the unremovable reason is embarrassing to the organisation, and Mrs Oueidat said it usually is, and that is why it is in the internal note instead of the letter. And Mrs Rizk said two applicants have argued with an unremovable reason and both arguments were good: one showed that the second scheme was in a different sub-district and was funded, and the other showed that the programme had funded three in a district in 2022, which nobody at the committee had remembered. And Dr Qabbani asked what happens if the reason is a decision and not a rule at all, and Mrs Rizk said the decision is then the reason and it is unremovable in the only sense that matters, because nothing the applicant does will change a choice that has already been made, and the choice and the constraint go into one sentence._'));
out.push(p('**Listener task:** write the unremovable reason, or the instruction, and say which it is.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two letters Mrs Rizk now sends, and the note that goes with them. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _two refusals of the same scheme, a year apart_ · _with a note_ · **11 November**',
  '**The letter of March, as I wrote it.** _We regret that we are unable to fund scheme 7 at this time. The budget is higher than the programme can consider and the proposal does not demonstrate community ownership. We would be glad to look at a revised proposal._ ⚠ **Three removable faults and an invitation.**',
  '**What the applicant did.** **Cut the budget by a fifth, obtained a letter from the governorate in five visits, and found a co-funder.** ⚠ **Eleven weeks of work by three people, all of it in response to sentences I had written in about four minutes.**',
  '**The letter of October, as I now write it.** _The committee has decided not to fund scheme 7. The programme has funded two schemes in this district this year and does not fund a third. That is the whole of the reason and it is not a comment on the proposal, which was the strongest of the nine on technical soundness._',
  '**What is not in the October letter.** ⚠ **The budget, the ownership evidence and the timetable.** **All three are improvable and none of them was the reason** — **and a letter that gave an unremovable reason and then listed three improvable faults would have told the applicant to improve a proposal that cannot be funded.**',
  '**What the October letter costs me.** **It closes a door, and the applicant knows it is closed.** ⚠ **And it can be wrong in public: two applicants have challenged an unremovable reason of mine this year, both correctly** — **one because his second scheme was in a sub-district the programme treats separately, and one because the programme had funded three in a district in 2022 and nobody on the committee remembered.**',
  '**The sentence that is for the applicant and not for the file.** **_It is not a comment on the proposal, which was the strongest of the nine on technical soundness._** ⚠ **It is true, it costs the programme nothing, and it is the only sentence in the letter the applicant can use with his own board** — **and I left it out for nine years because it felt like softening a refusal, which it is not: it is a separate fact.**',
  '**And the note that stays with me.** **The reason behind the reason is that the programme\'s district rule was written in 2019 for a different funding level and nobody has revised it.** ⚠ **That is embarrassing to us and it is not the applicant\'s business** — **and it is the thing I am raising with the secretariat, in a different document, which is 18.7.**',
  '**And what the October letter does not do, which I want on the record.** **It does not apologise.** ⚠ **There is one sentence of regret at the end of the March letter and none at all in the October one** — **and the reply to October was two lines long and thanked me for the sentence about technical soundness, which is the only thing in either letter he could use.** **A refusal that is regretted twice has asked its reader to manage the writer\'s discomfort, and that is work I have no right to give him.**',
]));
out.push(item('1', 'What did the applicant do after the March letter, and at what cost?'));
out.push(item('2', 'Why is the sentence about technical soundness in the October letter?'));
out.push(item('3', 'What does she say is the reason behind the reason, and where does it go?'));
out.push(writers([
  'Two refusals of one scheme: **the first letter as you wrote it, quoted** → **what the applicant did, itemised** → **the second letter as you now write it** → **what is not in the second letter, and why** → **what the honest version costs you** → **the sentence that is for the applicant and not for the file** → **and the reason behind the reason, and where it goes.**',
  '⚠ **Quote both letters in full.** **A note that paraphrases the bad one has protected its writer** — **and the force of this genre is entirely in the two letters side by side, which make the argument without help.**',
  '**Itemise what the applicant did, with the hours or the visits in it.** ⚠ _Eleven weeks of work by three people, all of it in response to sentences I had written in about four minutes._ **The ratio is the argument** — **and it is the only sentence in the note that will make another officer change a letter.**',
  '**Say what is absent from the second letter and why.** ⚠ _All three are improvable and none of them was the reason._ **A refusal that lists improvable faults beside an unremovable reason instructs the reader to improve something that cannot be funded** — **and the absence has to be stated, or the next officer will put them back.**',
  '⚠ And **include the sentence that is for the applicant and not for the file.** _It is not a comment on the proposal, which was the strongest of the nine on technical soundness._ **True, free, and the only sentence the applicant can use with their own board** — **and it is left out of most refusals because it feels like softening, which it is not: it is a separate fact.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write both letters and the absence (120 words or more).'));
out.push(p('**______________** · _two refusals of _______________ · **______________**   **The letter of ______________, as I wrote it.** **______________.** ⚠ **______________ removable faults and ______________.**   **What the applicant did.** **______________.** ⚠ **______________ of work, all of it in response to ______________.**   **The letter of ______________, as I now write it.** **______________ has decided not to ______________.** **______________.** **That is the whole of the reason and it is not a comment on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both letters quoted in full',
  'The applicant\'s work itemised, against the time you spent',
  'The unremovable reason alone, with no improvable faults beside it',
  'The free sentence that is for the applicant',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their unremovable reason**, flat, and the room tries to remove it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: both letters, what the applicant did, what is absent and why, what the honest version costs, the free sentence, and the reason behind the reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both letters quoted, an unremovable reason standing alone, and one free sentence that is for the applicant.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one case read aloud.** **Six of ten found an unremovable reason, three had to write the instruction instead, and one found that the unremovable reason was embarrassing to their organisation** — **read that one out, because it is the case the unit exists for.** **Then: how many refusals in the room list improvable faults beside an unremovable reason?** **Four of ten.** **Then Mrs Rizk\'s eleven weeks and her four minutes.**'));
out.push(hw('**Rewrite one refusal with an unremovable reason standing alone**, and add the one free sentence that is for the applicant. ⚠ **Then do the harder half: find the reason behind the reason and write it down somewhere that is not the letter.** **In this class seven of ten reasons behind reasons were about the organisation and not the applicant** — **and three of the seven were about a rule that nobody has revised.** **Bring both.** **20.3 refuses once and not twice**, so count the reasons in the last refusal you wrote.'));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  Once, and not twice'));
out.push(p('**Function:** refusing once and not twice   ·   **Grammar:** the second reason that weakens the first   ·   **Pronunciation:** the single reason said once, with nothing after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the number of reasons in the last refusal you wrote.** ⚠ **The number, and then the weakest of them.** **In this class the average was two point seven, the highest was five, and nine of ten could name their weakest reason at once** — **and your teacher writes the ten numbers on the board with the weakest reason beside each.**'));
out.push(board('Three reasons, and the third is the weakest.', 'One reason, and it is the first.'));
out.push(p('**b**  Which two refuse once? **1** _The budget is high, the timetable is tight and the evidence is thin._  **2** _The programme has funded two schemes in this district this year and does not fund a third. That is the whole of the reason._  **3** _We cannot fund it, and in any case the round has closed._  **4** _I am not running the piece. We are not carrying a second article on this subject this quarter._  **5** _The application is late, the form is the wrong version and there is no covering letter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a second reason does?   **A** strengthens the refusal   **B** **weakens it** — the reader attacks the weakest, and winning there makes the whole letter look arbitrary   **C** makes it clearer'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say two reasons imply about each of them?   **2** What does Mrs Rizk say the second reason is usually there for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.5  The weakest reason is the one they answer', [
  ['Ms Huda', 'Mrs Rizk has counted the reasons in her refusals and the appeals against them.'],
  ['Mrs Rizk', '⚠ **Average two point seven reasons.** **Thirty-one refusals, seven appealed.** **The seven that were appealed averaged three point four reasons, and the single-reason letters were appealed twice** — **and both of those two appeals were about the reason itself, which is the argument I want.**'],
  ['Mrs Khoury', 'And the appeals against the three-reason letters?'],
  ['Mrs Rizk', '⚠ **Five of the seven went at the weakest reason and ignored the other two.** **One of them was right, which is the whole problem** — **because when the weakest reason falls, the letter looks as though it was built out of whatever came to hand, and the committee then has to defend the two reasons it had not been asked about.**'],
  ['Mr Attar', 'Why would the strong reasons not survive?'],
  ['Mrs Khoury', '⚠ **They survive and the letter does not, and the distinction matters.** **Two reasons imply that neither was sufficient on its own** — **that is what putting two of them in a letter says, whether you meant it or not** — **and a reader who has knocked one down can say, quite reasonably, that the remaining one was never enough to refuse on.**'],
  ['Mrs Oueidat', 'So why does anybody write three?'],
  ['Mrs Rizk', '⚠ **Because one reason feels thin on the page, and that is a feeling about the writer and not about the letter.** **I have added a second reason to twenty-one letters this year and in nineteen of them the first reason was sufficient** — **and I know that because the nineteen first reasons are the unremovable ones from 20.2 and the second reasons are all removable faults.**'],
  ['Dr Qabbani', 'That is a tidy pattern.'],
  ['Mrs Khoury', '⚠ **It is the pattern and the room should look for it in its own letters.** **The strong reason is a fact about the world; the second reason is a fault in the application** — **and the second one is there because the first one is three lines long and the writer is uncomfortable with a three-line letter.**'],
  ['Mr Shihabi', 'And a short refusal reads as careless.'],
  ['Mrs Oueidat', '⚠ **It reads as careless to the writer and as clear to the reader, and the room has it the wrong way round.** **In this class four students have received one-reason refusals.** **All four knew what to do next and none of them described the letter as careless** — **and three of the four described the three-reason refusals they had also received as evasive, which nobody writing one intends.**'],
  ['Mr Tayara', 'What if there genuinely are two independent reasons?'],
  ['Mrs Rizk', '⚠ **Then you choose, and the choice is the unremovable one.** **If both are unremovable, choose the one the reader can act on** — **and say nothing about the other, which will still be true next year and can be given then if it is still the answer.**'],
  ['Mrs Tarabishi', 'Is there anything that may go in beside the reason?'],
  ['Mrs Khoury', '⚠ **One thing, and it is not a reason: the free sentence from 20.2.** **_It is not a comment on the proposal, which was the strongest of the nine on technical soundness._** **That is a fact and not a ground** — **and a reader can tell the difference, because a fact gives them nothing to argue with.**'],
  ['Mrs Ajouz', 'And _in any case_?'],
  ['Mrs Rizk', '🔊 ⚠ **It is the two words that give the whole thing away and I have written them eleven times this year.** **_We cannot fund it, and in any case the round has closed._** **_In any case_ announces that the writer is not sure the first reason will hold** — **and a reader who finds those two words goes straight to the first reason, because the writer has just told them where to look.**'],
]));
out.push(sp());
out.push(box('Language box – once, and not twice', [
  '**A second reason weakens the first.** ⚠ **A reader attacks the weakest, and when the weakest falls the letter looks as though it was built out of whatever came to hand** — **and the committee must then defend two reasons it was never asked about.**',
  '**Two reasons imply that neither was sufficient alone.** ⚠ **That is what putting two in a letter says, whether you meant it or not** — **and a reader who has knocked one down can say, quite reasonably, that the remaining one was never enough to refuse on.**',
  '**The pattern to look for in your own letters.** ⚠ **The strong reason is a fact about the world; the second reason is a fault in the application.** **Nineteen of twenty-one second reasons in one officer\'s year were removable faults** — **and the first reasons were all unremovable.**',
  '**A short refusal reads as careless to the writer and as clear to the reader.** ⚠ **Four students in this class have received one-reason refusals: all four knew what to do next and none called the letter careless** — **and three of the four called the three-reason refusals they had received evasive.**',
  '**Where two reasons are genuinely independent, choose.** ⚠ **The unremovable one; and if both are unremovable, the one the reader can act on** — **and say nothing about the other, which will still be true next year.**',
  '**One thing may stand beside the reason and it is not a reason.** ⚠ **The free sentence: _it is not a comment on the proposal, which was the strongest of the nine on technical soundness._** **A fact, not a ground** — **and a reader can tell, because a fact gives them nothing to argue with.**',
  '**And _in any case_ gives the whole thing away.** ⚠ **It announces that the writer is not sure the first reason will hold** — **and a reader who finds those two words goes straight to the first reason, because the writer has just told them where to look.**',
  '**Pronunciation.** 🔊 **Track 20.6** **Say the reason, then stop.** ⚠ **The silence after a single reason is about two seconds long and it is extremely uncomfortable to the person who wrote it.** **Practise stopping** — **because the second reason is almost always said into that silence, and once it is said it cannot be taken back.**',
  '**Practise:** One reason, and stop. **1** three reasons, choose  **2** _in any case_, struck  **3** two unremovable reasons  **4** the free sentence beside the reason  **5** a reason that is three lines long and is enough',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the multi-reason refusal from the card. B **chooses one reason**, says **why that one**, and names **what the reader would have attacked.** ⚠ **Two rows on each card already refuse once** — **and there B says so and resists adding anything.** Change cards.'));
out.push(table(['Card A – the refusal as written', 'Card B – the refusal as written'], [
  ['_Budget high, timetable tight, evidence thin._', '_Late, wrong form, no covering letter._'],
  ['_⚠ The programme does not fund a third scheme in a district._', '_⚠ We are not carrying a second piece on this subject this quarter._'],
  ['_We cannot fund it, and in any case the round has closed._', '_It is too long, and the sourcing is thin._'],
  ['_⚠ The schedule was last revised before your institution existed._', '_⚠ The post was filled on 4 March._'],
  ['_Five reasons, of which the fifth is that the applicant is new._', '_Two unremovable reasons: the district rule and the funding level._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the one reason, and what the reader would have attacked. ⚠ **Rows 2 and 4 on both cards already refuse once and the room must leave them alone** — **which is harder than it sounds: a one-line refusal invites everybody to improve it.** **Rows 5 are the pair the cycle turns on**: one has five reasons, the fifth about the applicant and not the application, **and one has two genuinely unremovable reasons, where the choice is the one the reader can act on.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your last refusal** and strike every reason but one. ⚠ **Then say why the one you kept is the one you kept.** **In this class the letters went from an average of two point seven reasons to one, and in seven of ten cases the reason kept was the first one written** — **which tells you that the first reason was the real one and the rest were company for it.**'));
out.push(p('**b**  Swap. Your partner reads **your one-reason version** and says **whether they would attack it and how.** ⚠ **Then the harder question: how long is the silence after the reason, and did you fill it?** — **and in this class six of ten had put something in the silence, and five of the six had put a second reason there.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has counted the reasons in her refusals and the appeals against them: an average of two point seven reasons, thirty-one refusals, seven appealed, and the seven that were appealed averaged three point four reasons, while the single-reason letters were appealed twice, and both of those appeals were about the reason itself, which is the argument she wants. Mrs Khoury asked about the appeals against the three-reason letters, and five of the seven went at the weakest reason and ignored the other two, and one of them was right, which is the whole problem, because when the weakest reason falls the letter looks as though it was built out of whatever came to hand. Mr Attar asked why the strong reasons would not survive, and Mrs Khoury said they survive and the letter does not: two reasons imply that neither was sufficient on its own, which is what putting two of them in a letter says whether you meant it or not. Mrs Oueidat asked why anybody writes three, and because one reason feels thin on the page, and that is a feeling about the writer and not about the letter: Mrs Rizk has added a second reason to twenty-one letters this year and in nineteen of them the first reason was sufficient. Dr Qabbani said that is a tidy pattern, and Mrs Khoury said it is the pattern: the strong reason is a fact about the world and the second reason is a fault in the application. Mr Shihabi said a short refusal reads as careless, and Mrs Oueidat said it reads as careless to the writer and as clear to the reader, and the room has it the wrong way round. Mr Tayara asked what happens if there genuinely are two independent reasons, and then you choose, and the choice is the unremovable one. Mrs Tarabishi asked whether anything may go in beside the reason, and one thing, and it is not a reason: the free sentence from the cycle before. And Mrs Ajouz asked about in any case, and Mrs Rizk said it is the two words that give the whole thing away and she has written them eleven times this year. Mrs Oueidat said four students in the class have received one-reason refusals, and all four knew what to do next and none of them called the letter careless, while three of the four described the three-reason refusals they had also received as evasive, which nobody writing one intends. And if both reasons are unremovable, the choice is the one the reader can act on, and the other is not mentioned, since it will still be true next year._'));
out.push(p('**Listener task:** write the one reason your partner kept and say what a reader would attack.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Rizk\'s note on the seven appeals. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note on seven appeals_ · _thirty-one refusals, one year_ · **18 November**',
  '**The arithmetic.** **Thirty-one refusals, average two point seven reasons.** **Seven appealed.** ⚠ **The seven averaged three point four reasons; the single-reason letters, of which there were nine, were appealed twice.**',
  '**Where the appeals went.** **Five of the seven attacked the weakest reason and said nothing about the others.** ⚠ **One of the five was right: the timetable objection in scheme 4 was based on a dry-season date that the governorate had moved in July, which I did not know** — **and once that fell, the committee had to defend two reasons that nobody had challenged, in front of a board that had just been shown we were wrong about something.**',
  '**What two reasons say.** **That neither was sufficient.** ⚠ **I did not mean that and it is what the letter said** — **and the appellant in scheme 4 put it in exactly those words: if the district rule were enough, why was the timetable mentioned?**',
  '**Why I wrote the second reason.** **Because the first one is three lines long and I was uncomfortable with a three-line letter.** ⚠ **Twenty-one letters this year have a second reason, and in nineteen of them the first reason was sufficient.** **I know which nineteen because the first reasons are facts about the programme and the second reasons are faults in the applications.**',
  '**The two words I have written eleven times.** _In any case._ ⚠ **They announce that I am not sure the first reason will hold, and a reader who finds them goes straight to the first reason** — **because I have told them where to look.**',
  '**What goes in beside the reason, and it is not a ground.** **The free sentence.** ⚠ **_It is not a comment on the proposal, which was the strongest of the nine on technical soundness._** **A reader can tell a fact from a ground and does not argue with facts** — **and in the nine single-reason letters, eight carried a free sentence of that kind and none of the eight was quoted back at me.**',
  '**And the silence.** **A one-reason refusal has about two seconds of silence after it when it is read aloud, and I can feel it in my own letters.** ⚠ **Six of my twenty-one second reasons went into that silence while I was drafting** — **and I now write the reason, leave the paragraph, and come back to it in the afternoon.**',
  '**And the appeal I should have had and did not get.** **Scheme 19, refused on a district rule I now think was applied to the wrong district.** ⚠ **Four reasons, of which the first was the rule and the fourth was that the budget lacked a maintenance line** — **and the applicant wrote back about the maintenance line, supplied it, and said nothing at all about the district.** **I was not asked the question I could not have answered.** **That is the part of a four-reason letter nobody warns you about: the weakest reason is not only the one they attack, it is also the one they accept** — **and a letter with four reasons in it chooses which argument its reader is going to have.**',
]));
out.push(item('1', 'What happened in scheme 4, and what did the committee then have to do?'));
out.push(item('2', 'What did the appellant in scheme 4 say about the mention of the timetable?'));
out.push(item('3', 'What does she now do while drafting, and what is it for?'));
out.push(writers([
  'A note on your own appeals: **the arithmetic, with averages and counts** → **where the appeals went** → **the one that was right, in full** → **what two reasons say, and the appellant\'s own words** → **why you wrote the second reason** → **the giveaway phrase, with its count** → **what may stand beside a reason** → **and the silence, and what you now do about it.**',
  '⚠ **Lead with the averages and put the counts beside them.** _Thirty-one refusals, average two point seven reasons; seven appealed, averaging three point four._ **That pair of figures is the whole argument** — **and it is available to anybody who keeps their own letters, which is all this method needs.**',
  '**Give the appeal that was right in full, and name what you did not know.** ⚠ _The timetable objection was based on a dry-season date the governorate had moved in July, which I did not know._ **An officer who reports only the appeals they beat has written an advertisement** — **and the one they lost is the one another officer will learn from.**',
  '**Quote the appellant.** ⚠ _If the district rule were enough, why was the timetable mentioned?_ **The reader\'s own sentence makes the argument better than yours can** — **because it is the argument, and it was available to him only because of what the letter had done.**',
  '⚠ And **name the drafting habit and the cure.** _Six of my twenty-one second reasons went into that silence while I was drafting._ **The cure is mechanical and should be stated as such: write the reason, leave the paragraph, come back in the afternoon** — **and a note that ends in a rule a tired officer can follow beats one that ends in a principle.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the arithmetic and the appeal that was right (120 words or more).'));
out.push(p('**______________** · _note on _______________ · **______________**   **The arithmetic.** **______________ refusals, average ______________ reasons.** **______________ appealed.** ⚠ **The ______________ averaged ______________; the single-reason letters were appealed ______________.**   **Where the appeals went.** **______________ attacked the weakest reason.** ⚠ **______________ was right: ______________.**   **What two reasons say.** **That ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Averages and counts in the first paragraph',
  'The appeal you lost, in full, with what you did not know',
  'The appellant\'s own sentence quoted',
  'A mechanical cure a tired writer can follow',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their one-reason refusal**, and the room times the silence after it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the arithmetic, where the appeals went, the one that was right, what two reasons say, why you wrote the second, the giveaway phrase, the free sentence, and the silence.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one reason only, no _in any case_, and the appeal you lost reported in full.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one silence.** **The letters went from an average of two point seven reasons to one, and in seven of ten the reason kept was the first one written.** **Then the silence: read three one-reason refusals aloud and time the gap** — **and ask the six who had filled it what they had put there, which in five cases was a second reason.** **Then Mrs Rizk\'s scheme 4 and the sentence the appellant wrote.**'));
out.push(hw('**Strike every reason but one from your last refusal** and send it, or say why you did not. ⚠ **Then do the harder half: count how many of your letters this year contain _in any case_ or _in addition_ or _furthermore_ before a second reason.** **In this class the counts ran from none to eleven** — **and every writer with a count above three had the same first reason in most of those letters, which is the finding.** **Bring the count.** **20.4 offers the alternative you can actually deliver**, so bring one alternative you have offered and never delivered.'));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  The alternative, with a date and a figure'));
out.push(p('**Function:** offering the alternative you can actually deliver, and pricing it   ·   **Grammar:** the alternative with a date, a figure and a name — or none at all   ·   **Pronunciation:** the alternative said as an undertaking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one alternative you have offered in a refusal, and whether you delivered it.** ⚠ **Delivered, not intended.** **In this class ten alternatives were offered and three were delivered** — **and of the seven that were not, six had no date in them, which your teacher writes on the board beside each.**'));
out.push(board('We would be glad to look at this again.', 'Scheme 7 may be resubmitted for the round closing 1 March.'));
out.push(p('**b**  Which two are alternatives? **1** _We would be glad to look at a revised proposal in future._  **2** _Scheme 7 may be resubmitted for the round closing 1 March; the district rule is applied at the date of the committee, which meets on the eleventh._  **3** _Do get in touch if we can help in any way._  **4** _I can give you eight hundred words on the inspectorate for the April issue, commissioned now, at the standard rate._  **5** _We shall certainly keep your details on file._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide an alternative must have?   **A** warmth   **B** **a date, a figure and a named person** — and it must be deliverable   **C** the applicant\'s agreement'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say an undeliverable alternative is?   **2** What does Mrs Rizk say about offering no alternative at all?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.7  A date, a figure and a name', [
  ['Ms Huda', 'Mrs Rizk has looked at the alternatives in her own letters.'],
  ['Mrs Rizk', '⚠ **Nineteen of thirty-one refusals offered one.** **Four were delivered.** **And of the fifteen that were not, thirteen contained no date** — **which means they were not alternatives at all, and the applicant knew that before I did.**'],
  ['Ms Huda', 'What is an undeliverable alternative?'],
  ['Mrs Khoury', '⚠ **A second refusal with a delay in it.** **_We would be glad to look at a revised proposal in future_ is a refusal, a wait, and then a second refusal** — **and the applicant has spent the interval working, which is the one thing the first refusal was supposed to prevent.**'],
  ['Mr Attar', 'So what makes an alternative real?'],
  ['Mrs Rizk', '⚠ **Three things and all three are checkable.** **A date — the round closing on 1 March.** **A figure — eight hundred words, or forty thousand, or two sessions.** **And a name: the person who will deal with it, which is usually me and must be said.**'],
  ['Dr Qabbani', 'And it has to be deliverable by you.'],
  ['Mrs Oueidat', '⚠ **By you, not by the organisation, and that is the distinction the room will miss.** **_The committee may consider_ is not an undertaking.** **_I shall put it to the committee of the eleventh_ is** — **because the first depends on nine people and the second depends on one, and the one is signing the letter.**'],
  ['Mrs Tarabishi', 'What if there is no alternative?'],
  ['Mrs Rizk', '⚠ **Then you say so, in those words, and it is the hardest sentence in the unit.** **_There is no alternative I can offer._** **Twelve of my thirty-one refusals should have said it and two did** — **and the two were the only refusals all year that nobody came back on.**'],
  ['Mr Shihabi', 'Nobody came back at all?'],
  ['Mrs Rizk', '⚠ **Nobody, and I had expected the opposite.** **A refusal with no alternative is a closed matter and people treat it as one.** **A refusal with a vague alternative is an open matter** — **and an open matter generates letters, telephone calls and a visit, all of which cost the applicant more than they cost me.**'],
  ['Mr Tayara', 'Does the alternative have to be smaller than what they asked for?'],
  ['Mrs Khoury', '⚠ **Usually, and it must be priced honestly and not presented as a favour.** **_I can give you eight hundred words on the inspectorate for April, at the standard rate_** — **eight hundred where he asked for two thousand, and the rate is the rate, and nothing in that sentence suggests he is being done a kindness.**'],
  ['Dr Qabbani', 'And if the date you have given passes and nothing has happened?'],
  ['Mrs Rizk', '⚠ **Then you write before the date and not after it, and you write even when there is nothing to report.** **_The committee of the eleventh did not reach scheme 11; it is first on the agenda for 8 April and I shall write on the ninth._** **An alternative with a date in it is an undertaking about my own diary** — **and an applicant who is not written to on the twelfth has learnt that my dates mean nothing, which costs me every alternative I offer after that.**'],
  ['Mrs Ajouz', 'And if the alternative is in somebody else\'s gift?'],
  ['Mrs Oueidat', '⚠ **Then it is not your alternative and you may name the person instead, which is a different and smaller offer.** **_The governorate\'s technical officer deals with allocations and her office is in the annexe building._** **That is a name and an address and it is honest** — **and it must not be dressed as an alternative, because the applicant will hear an offer and you have given them a direction.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the two letters that nobody answered.** **I had thought a refusal with nothing in it was the cruellest thing I could send, and I sent two in nine years** — **and both of those applicants went and did something else in March, and one of them has since been funded by another programme for the same scheme, which I found out from a newsletter.**'],
]));
out.push(sp());
out.push(box('Language box – the alternative you can deliver', [
  '**Three things, all checkable.** ⚠ **A date — the round closing 1 March.** **A figure — eight hundred words, two sessions, forty thousand.** **And a name: the person who will deal with it, which is usually you and must be said.**',
  '**An undeliverable alternative is a second refusal with a delay in it.** ⚠ **_We would be glad to look at a revised proposal in future_ is a refusal, a wait and a second refusal** — **and the applicant spends the interval working, which is the one thing the first refusal was supposed to prevent.**',
  '**It must be deliverable by you and not by the organisation.** ⚠ **_The committee may consider_ is not an undertaking.** **_I shall put it to the committee of the eleventh_ is** — **because the first depends on nine people and the second depends on one, and the one is signing the letter.**',
  '**Where there is no alternative, say so in those words.** ⚠ **_There is no alternative I can offer._** **Twelve refusals of thirty-one should have said it and two did** — **and those two were the only refusals of the year that nobody came back on.**',
  '**Which is the opposite of what everybody expects.** ⚠ **A refusal with no alternative is a closed matter and people treat it as one.** **A refusal with a vague alternative is an open matter, and an open matter generates letters, telephone calls and a visit** — **all of which cost the applicant more than they cost you.**',
  '**Price it honestly and do not present it as a favour.** ⚠ **_Eight hundred words for April, at the standard rate_** — **eight hundred where he asked for two thousand, and nothing in the sentence suggests he is being done a kindness.**',
  '**And where the alternative is in somebody else\'s gift, give a name and not an offer.** ⚠ **_The governorate\'s technical officer deals with allocations and her office is in the annexe building._** **A name and an address, honestly labelled** — **because an applicant who hears an offer and has been given a direction will come back to you.**',
  '**Pronunciation.** 🔊 **Track 20.8** **Say the alternative as an undertaking: flat, with the date stressed and no rise at the end.** ⚠ **A rise makes it a suggestion, and a suggestion has to be accepted before it exists** — **where an undertaking is already in force and the reader can diary it.**',
  '**Practise:** A date, a figure, a name — or none. **1** a resubmission with a closing date  **2** a smaller commission, priced  **3** an alternative in somebody else\'s gift  **4** no alternative at all  **5** an undertaking you can keep alone',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the offer from the card. B gives **the real alternative, with a date, a figure and a name** — or says **that there is none** and writes that sentence. ⚠ **Two rows on each card are in somebody else\'s gift** — **and there B gives a name and an address instead.** Change cards.'));
out.push(table(['Card A – the offer as written', 'Card B – the offer as written'], [
  ['_We would be glad to look at a revised proposal._', '_Do get in touch if we can help._'],
  ['_⚠ The governorate may be able to allocate a register._', '_⚠ The board might take a different view next year._'],
  ['_We shall keep your details on file._', '_I may be able to use something shorter._'],
  ['_⚠ The syndicate\'s committee could revise the schedule._', '_⚠ The directorate may accept a declaration._'],
  ['_A scheme that cannot be funded in this district at all._', '_A piece on a subject the paper has just covered._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the date, the figure, the name — or the sentence that there is none. ⚠ **Rows 2 and 4 on both cards are in somebody else\'s gift and the honest answer is a name and an address, labelled as a direction and not an offer.** **Rows 5 are the pair that matter**: in both there is genuinely no alternative, **and the room must write _there is no alternative I can offer_ and then stop, which is the hardest sentence in the unit.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the alternative you offered and never delivered** and rebuild it. ⚠ **A date, a figure, a name — and if you cannot supply all three, write the sentence that there is none.** **In this class six of ten alternatives became _there is no alternative I can offer_** — **and all six writers said that version was true and that they had not considered writing it.**'));
out.push(p('**b**  Swap. Your partner reads **your alternative** and asks the only question: **can you deliver this alone?** ⚠ **Then the harder question: what did your original offer cost the person who received it?** — **and in this class the answers included a visit, two letters, a revised budget and eleven weeks.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has looked at the alternatives in her own letters: nineteen of thirty-one refusals offered one, four were delivered, and of the fifteen that were not, thirteen contained no date, which means they were not alternatives at all and the applicant knew that before she did. Ms Huda asked what an undeliverable alternative is, and Mrs Khoury said it is a second refusal with a delay in it, because we would be glad to look at a revised proposal in future is a refusal, a wait and then a second refusal, and the applicant has spent the interval working. Mr Attar asked what makes an alternative real, and three things, all checkable: a date, a figure, and a name, which is usually the writer and must be said. Dr Qabbani said and it has to be deliverable by you, and Mrs Oueidat said by you and not by the organisation, and that is the distinction the room will miss, because the committee may consider is not an undertaking and I shall put it to the committee of the eleventh is. Mrs Tarabishi asked what happens if there is no alternative, and then you say so in those words, and it is the hardest sentence in the unit: twelve of thirty-one refusals should have said it and two did, and those two were the only refusals all year that nobody came back on. Mr Shihabi asked whether nobody came back at all, and nobody, and she had expected the opposite, because a refusal with no alternative is a closed matter and people treat it as one. Mr Tayara asked whether the alternative has to be smaller, and Mrs Khoury said usually, and it must be priced honestly and not presented as a favour. Mrs Ajouz asked what happens if the alternative is in somebody else\'s gift, and then it is not your alternative and you may name the person instead. And Mrs Rizk said the thing she will take away is the two letters nobody answered, and that one of those applicants has since been funded by another programme for the same scheme, which she found out from a newsletter. Dr Qabbani asked what happens if the date passes and nothing has happened, and Mrs Rizk said you write before the date and not after it, and you write even when there is nothing to report, because an alternative with a date in it is an undertaking about your own diary, and an applicant who is not written to on the twelfth has learnt that your dates mean nothing._'));
out.push(p('**Listener task:** write the date, the figure and the name, or the sentence that there is none.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three refusals Mrs Rizk sent in one week. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _three refusals, one week_ · _with the alternatives as sent_ · **25 November**',
  '**Scheme 11, with a real alternative.** _The committee has decided not to fund scheme 11 in this round. The round closed before the governorate published its population figures, which your cost per household rests on. The scheme may be resubmitted for the round closing 1 March; I shall put it to the committee of the eleventh myself, and the district rule is applied at the date of the committee._ ⚠ **A date, a committee, a name, and the rule\'s own timing.**',
  '**Scheme 12, with no alternative.** _The committee has decided not to fund scheme 12. The programme has funded two schemes in this district this year and does not fund a third; that is the whole of the reason and it is not a comment on the proposal, which was the strongest of the nine on technical soundness._ ⚠ **There is no alternative I can offer.** **The district rule will apply again next year on the same figures.**',
  '**Scheme 13, where the alternative is in somebody else\'s gift.** _The committee has decided not to fund scheme 13. The programme does not fund works on premises it does not hold a lease for._ ⚠ **The governorate\'s property section deals with leases of this kind; the officer is Mrs Haddad and her office is in the annexe building, second floor.** **That is a direction and not an offer, and I have no part in it.**',
  '**What the three have in common.** **One reason each.** ⚠ **A first sentence that says the committee decided.** **And nothing anywhere that invites a revised proposal, because in none of the three would a revised proposal be funded.**',
  '**What happened.** **Scheme 11 resubmitted on 24 February and was funded on 11 March.** ⚠ **Scheme 12 did not reply, and I have since seen in a newsletter that the scheme has been funded elsewhere.** **Scheme 13 wrote to Mrs Haddad and has a lease, and I expect the application in March.**',
  '**The sentence I had never written before this year.** **_There is no alternative I can offer._** ⚠ **It is six words, it closes the matter, and I had believed for nine years that it was the cruellest thing in a refusal** — **and the two letters that carried it are the only two all year that produced no further correspondence from anybody.**',
  '**And what I now think the cruellest thing is.** **_We would be glad to look at a revised proposal in future._** ⚠ **It is warm, it costs the writer nothing, and it is an instruction to do eleven weeks of work for a second refusal** — **and I wrote it nineteen times before I counted.**',
  '**And what the three letters cost me to write.** **Forty minutes between them, against about four minutes each for the versions I used to send.** ⚠ **The time goes on the alternative: finding the closing date, checking that the committee of the eleventh exists, and telephoning the annexe to be sure Mrs Haddad is still in that post** — **and all three are checks on facts I was previously content to assert.** **An alternative that has been checked is an undertaking.** **One that has not been checked is a wish with a date on it.**',
]));
out.push(item('1', 'What makes the alternative in scheme 11 deliverable, and by whom?'));
out.push(item('2', 'How is scheme 13 handled, and what does she say about her own part in it?'));
out.push(item('3', 'What does she now think the cruellest sentence is, and why?'));
out.push(writers([
  'Three refusals in one week: **one with a real alternative — date, figure, name** → **one with none, in those words** → **one where the alternative is in somebody else\'s gift, given as a direction** → **what the three have in common** → **what happened to each** → **the sentence you had never written** → **and what you now think the cruellest sentence is.**',
  '⚠ **Put the three letters side by side and quote them.** **The three shapes are the content of this cycle** — **and a note that describes them instead will be read as advice, where three quoted letters can be copied on Thursday.**',
  '**Name who delivers the alternative, and make it yourself where you can.** ⚠ _I shall put it to the committee of the eleventh myself._ **The organisation cannot undertake anything in a letter signed by one person** — **and _the committee may consider_ is a forecast about nine people, which is not an offer at all.**',
  '**Label the direction as a direction.** ⚠ _That is a direction and not an offer, and I have no part in it._ **An applicant who hears an offer and has been given a name will come back to you when it fails** — **and the labelling costs eleven words and saves a letter.**',
  '⚠ And **report what happened to all three, including the one you lost.** _Scheme 12 did not reply, and I have since seen in a newsletter that the scheme has been funded elsewhere._ **A note that reports only the resubmission that worked has proved nothing** — **and the scheme that went elsewhere is the strongest evidence in the note that a closed matter is a usable answer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two of the three refusals (120 words or more).'));
out.push(p('**______________** · _refusals, one week_ · **______________**   **______________, with a real alternative.** **______________ has decided not to ______________.** **______________.** ⚠ **______________ may be resubmitted for ______________; I shall ______________ myself.**   **______________, with no alternative.** **______________ has decided not to ______________.** **______________; that is the whole of the reason.** ⚠ **There is no alternative I can offer.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A date, a figure and a name in every real alternative',
  'An undertaking in the first person where you can give one',
  '_There is no alternative I can offer_ where there is none',
  'Any direction labelled as a direction',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their alternative**, and the room asks whether they can deliver it alone.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the three refusals and the note (260 words or more), to the shape in the writer\'s box: the real alternative, the none, the direction, what they have in common, what happened, the sentence you had never written, and the cruellest sentence.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a date, a figure and a name in every alternative; _there is no alternative I can offer_ where there is none; and no sentence inviting a revised proposal that would not be funded.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one sentence said aloud.** **Ten alternatives were offered in this room and three were delivered; six of the seven undelivered had no date in them.** **Then have the six who rewrote theirs as _there is no alternative I can offer_ read the six words out** — **and ask the room which of the two versions they would rather receive, and let the answers disagree.** **Then Mrs Rizk\'s newsletter.**'));
out.push(hw('**Rebuild your alternative with a date, a figure and a name, or write the six words.** ⚠ **Then do the harder half: count what your original offer cost the person who received it.** **In this class the answers included a visit, two letters, a revised budget and eleven weeks of work by three people** — **and nobody had counted before being asked.** **Bring the cost.** **20.5 says what would make the answer different, without inviting a reapplication**, so bring one condition you have stated that produced a reapplication you then refused.'));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  What would make the answer different'));
out.push(p('**Function:** saying what would make the answer different, without inviting a reapplication   ·   **Grammar:** the condition stated as a fact about the world   ·   **Pronunciation:** the condition said as information, not as an opening'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one condition you have stated in a refusal, and whether it produced a reapplication.** ⚠ **Produced, not invited.** **In this class eight conditions were stated, six produced a reapplication, and five of the six reapplications were refused again** — **and your teacher writes the eight conditions on the board with the outcome beside each.**'));
out.push(board('If you can show community ownership, do reapply.', 'The district rule is applied at the date of the committee.'));
out.push(p('**b**  Which two are information rather than invitations? **1** _If you can strengthen the evidence, we would encourage you to reapply._  **2** _The district rule is applied at the date of the committee; a scheme in a district with fewer than two funded schemes at that date is not caught by it._  **3** _Should your circumstances change, do let us know._  **4** _The schedule is revised by the board every third year and was last revised in 2022._  **5** _A stronger application might well succeed next time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the condition must be?   **A** encouraging   **B** **a fact about the world that the applicant cannot manufacture**, stated as information   **C** attached to a deadline'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say she produced by stating a condition the applicant could manufacture?   **2** What does Mrs Khoury say about the difference between information and an invitation?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.9  Information, not an opening', [
  ['Ms Huda', 'Mrs Rizk has stated eight conditions this year and six produced reapplications.'],
  ['Mrs Rizk', '⚠ **Six, and five of the six were refused again.** **And in four of the five the condition I had stated was one the applicant could manufacture** — **_if the evidence of ownership were stronger_, which is an instruction to go and get three more letters, and three more letters arrived.**'],
  ['Mrs Khoury', 'And you refused them.'],
  ['Mrs Rizk', '⚠ **Because the ownership evidence had never been the reason.** **I had stated a condition about the application and the reason was a condition about the district** — **and the applicant did exactly what my sentence told them to do, and I took eleven weeks of their work and refused them for the thing I had not mentioned.**'],
  ['Mr Attar', 'So which conditions are safe to state?'],
  ['Mrs Khoury', '⚠ **The ones the applicant cannot manufacture, and the test is that simple.** **_The district rule is applied at the date of the committee_ is a fact about a rule.** **The applicant cannot change it, cannot hurry it and cannot satisfy it by working** — **and knowing it, they can decide whether to wait for next year, which is a real decision and the only one on offer.**'],
  ['Mrs Oueidat', 'And the difference between information and an invitation?'],
  ['Mrs Khoury', '⚠ **An invitation asks the reader to do something; information lets them decide whether to.** **_Do reapply if you can strengthen the evidence_ is an instruction with encouragement attached.** **_The rule is applied at the date of the committee_ is a sentence about a rule** — **and the second costs the applicant eleven seconds and the first costs them eleven weeks.**'],
  ['Dr Qabbani', 'Does that mean you never encourage anybody?'],
  ['Mrs Rizk', '⚠ **It means I encourage when I mean it and with a date on it, which is 20.4.** **The three applicants I have genuinely encouraged this year got a round, a date and my name** — **and two of the three were funded.** **The encouragement nobody can act on is the one that goes in because the letter feels cold.**'],
  ['Mr Shihabi', 'What if the condition is about us and not about the world?'],
  ['Mrs Oueidat', '⚠ **Then say it, and it is the most useful condition there is, and almost nobody writes it.** **_This would be a different answer if the programme had a second allocation for this governorate, which it does not at present._** **That is a fact about the programme** — **and the applicant can write to the programme about allocations, which is a different and better thing to do than rewriting a proposal.**'],
  ['Mr Tayara', 'Does anybody ever do that?'],
  ['Mrs Rizk', '⚠ **One applicant did, in July, and his letter was better than mine.** **He wrote to the secretariat about the allocation and copied me** — **and the allocation has not changed, and the question is now on a committee agenda where it had never been before, which is 18.7 happening to me from the other side.**'],
  ['Mrs Tarabishi', 'And if there is no condition at all?'],
  ['Mrs Khoury', '⚠ **Then there is no condition, and the letter says nothing about the future, which is the hardest version of the hardest sentence in 20.4.** **A refusal with no condition and no alternative is a complete document** — **and in this class two students have written one and both said it felt unfinished, which is the feeling to overrule.**'],
  ['Mrs Ajouz', 'My representative asks me every month what would change the answer.'],
  ['Mrs Oueidat', '⚠ **Then he is asking for a condition and you have one: the stock list is set by the wholesaler and reviewed in January.** **That is a fact about a calendar.** **He cannot hurry it, and he will know whether to come in February or not at all** — **and the monthly visit is the cost of never having told him what the calendar is.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the three letters.** **A man sent me three letters of community ownership in February because of a sentence I wrote in January, and I refused him in March for the district rule, which I had known about in January** — **and he has not applied since, and the programme lost the strongest technical proposal in two rounds, which is in the file and which nobody has read.**'],
]));
out.push(sp());
out.push(box('Language box – the condition as information', [
  '**State only conditions the applicant cannot manufacture.** ⚠ **_The district rule is applied at the date of the committee_ is a fact about a rule.** **_If the evidence of ownership were stronger_ is an instruction to go and get three more letters** — **and three more letters will arrive.**',
  '**An invitation asks the reader to do something; information lets them decide whether to.** ⚠ **The second costs the applicant eleven seconds and the first costs them eleven weeks** — **and the first is the one that feels warmer to write.**',
  '**Encourage only where you mean it and with a date on it.** ⚠ **A round, a date and your name** — **which is 20.4, and the three applicants who were genuinely encouraged in one officer\'s year got all three, and two of the three were funded.**',
  '**The best condition of all is a fact about your own organisation, and almost nobody writes it.** ⚠ **_This would be a different answer if the programme had a second allocation for this governorate, which it does not at present._** **The applicant can then write to the programme about allocations** — **which is a different and better thing to do than rewriting a proposal.**',
  '**And where there is no condition, say nothing about the future.** ⚠ **A refusal with no condition and no alternative is a complete document** — **and it feels unfinished to the writer, which is the feeling to overrule.**',
  '**The cost of getting this wrong is paid entirely by the other party.** ⚠ **Three letters of community ownership in February, a refusal in March for a rule known about in January, and an applicant who has not applied since** — **and the programme lost the strongest technical proposal in two rounds.**',
  '**Pronunciation.** 🔊 **Track 20.10** **Say the condition as information: flat, with no lift at the end and no stress on _if_.** ⚠ **A lift makes it an opening and the reader will take it as one.** **Flat, it is a sentence about a rule, and the reader can do arithmetic with it** — **which is the only thing you are offering.**',
  '**Practise:** State it as information. **1** a rule applied at a date  **2** a schedule revised every third year  **3** an allocation your organisation does not have  **4** a condition the applicant could manufacture, refused  **5** no condition at all',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the condition from the card. B says **whether the applicant can manufacture it**, and gives **the version that is information.** ⚠ **Two rows on each card should not be stated at all** — **and there B says so and writes nothing.** Change cards.'));
out.push(table(['Card A – the condition as written', 'Card B – the condition as written'], [
  ['_If the evidence of ownership were stronger…_', '_If the piece were shorter…_'],
  ['_⚠ The district rule is applied at the date of the committee._', '_⚠ The schedule is revised every third year, last in 2022._'],
  ['_Should your circumstances change, do let us know._', '_A stronger application might well succeed._'],
  ['_⚠ The programme has no second allocation for this governorate._', '_⚠ The post was filled on 4 March and is not being readvertised._'],
  ['_A scheme that cannot be funded in this district on any terms._', '_A subject the paper will not return to this year._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** manufacturable or not, and the information version. ⚠ **Rows 2 and 4 on both cards are already information and the room must leave them** — **and rows 4 are the two that are facts about the writer\'s own organisation, which is the most useful kind and the rarest.** **Rows 5 are the pair where nothing should be said**: there is no condition, **and the room will want to supply one, which is the whole fault of the cycle arriving at the end of it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the condition that produced a reapplication** and test it. ⚠ **Could the applicant manufacture it?** **Then write the version that is information, or write nothing and say why.** **In this class six of eight conditions were manufacturable, and in four of the six the real reason was something the writer had known from the beginning** — **and all four writers said so without being pressed.**'));
out.push(p('**b**  Swap. Your partner reads **your condition** and says **what they would do on Monday.** ⚠ **Then the harder question: what did your original condition cost the person who received it?** — **and in this class the answers were three letters, a budget revision, five visits and eleven weeks.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has stated eight conditions this year and six produced reapplications, and five of the six were refused again, and in four of the five the condition she had stated was one the applicant could manufacture, such as if the evidence of ownership were stronger, which is an instruction to go and get three more letters, and three more letters arrived. Mrs Khoury said and you refused them, and she refused them because the ownership evidence had never been the reason: she had stated a condition about the application and the reason was a condition about the district, and the applicant did exactly what her sentence told them to do. Mr Attar asked which conditions are safe to state, and Mrs Khoury said the ones the applicant cannot manufacture, and the test is that simple, because the district rule is applied at the date of the committee is a fact about a rule, and knowing it they can decide whether to wait for next year. Mrs Oueidat asked about the difference between information and an invitation, and an invitation asks the reader to do something and information lets them decide whether to, and the second costs the applicant eleven seconds and the first costs them eleven weeks. Dr Qabbani asked whether that means she never encourages anybody, and it means she encourages when she means it and with a date on it, and the three applicants she genuinely encouraged this year got a round, a date and her name, and two of the three were funded. Mr Shihabi asked what happens if the condition is about the organisation and not about the world, and Mrs Oueidat said then say it, and it is the most useful condition there is and almost nobody writes it. Mr Tayara asked whether anybody ever does that, and one applicant did in July and his letter was better than hers. Mrs Tarabishi asked what happens if there is no condition at all, and Mrs Khoury said then there is no condition, and the letter says nothing about the future. And Mrs Rizk said the thing she will take away is the three letters, and that the man has not applied since, and the programme lost the strongest technical proposal in two rounds. And Mrs Ajouz said her representative asks her every month what would change the answer, and Mrs Oueidat said he is asking for a condition and there is one, which is that the stock list is set by the wholesaler and reviewed in January, a fact about a calendar that he cannot hurry, and that the monthly visit is the cost of never having told him what the calendar is._'));
out.push(p('**Listener task:** write the condition as information and say what the reader would do on Monday.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote about the eight conditions. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note on eight stated conditions_ · _six reapplications, five refused_ · **2 December**',
  '**The arithmetic.** **Eight conditions stated this year.** **Six produced a reapplication.** ⚠ **Five of the six reapplications were refused, and in four of the five the condition I had stated was one the applicant could manufacture.**',
  '**The case in full.** **In January I wrote _if the evidence of community ownership were stronger_.** **In February three letters arrived, obtained in five visits.** ⚠ **In March I refused the scheme because the programme had funded two schemes in that district, which I had known in January and had not written down.**',
  '**What I had done.** **Stated a condition about the application when the reason was a condition about the district.** ⚠ **The applicant did exactly what my sentence told him to do** — **and I took eleven weeks of work from three people and refused him for the thing I had not mentioned.**',
  '**The test, which takes four seconds.** **Can the applicant manufacture it?** ⚠ **If they can, it is an instruction and they will carry it out.** **If they cannot, it is information and they can do arithmetic with it** — **and arithmetic is the only thing a refusal has to offer about the future.**',
  '**The condition I had never written before this year.** **_This would be a different answer if the programme had a second allocation for this governorate, which it does not at present._** ⚠ **A fact about us and not about them.** **It is the most useful sentence in any of my letters and it took me nine years to write it, because it reads as an admission and is a piece of information.**',
  '**What came of it.** **One applicant wrote to the secretariat about the allocation in July and copied me.** ⚠ **His letter was better than mine.** **The allocation has not changed and the question is now on a committee agenda where it had never been** — **and if it changes, it changes for every scheme in the governorate and not for his.**',
  '**And the three letters.** **They are in the file for scheme 9, obtained in five visits in February 2024, and nobody has read them since I refused the scheme in March.** ⚠ **The man has not applied again.** **The proposal was the strongest in two rounds on technical soundness, which is also in the file** — **and both of those facts are consequences of one sentence I wrote because the letter felt cold.**',
  '**And what I now do with the conditions I cannot state.** **They go to the secretariat and not to the applicant.** ⚠ **The district rule was written in 2019 for a different funding level, the beneficiary definition ends in _and others affected_, and the ownership schedule predates two of the institutions that apply under it** — **and none of those three is the applicant\'s business and all three are mine.** **Four notes have gone up this year and one has produced a change.** **The arithmetic of that is poor, and it is better than the arithmetic of asking twelve applicants to manufacture evidence against a rule I had already decided to apply.**',
]));
out.push(item('1', 'What was the sequence from January to March, and what had she known in January?'));
out.push(item('2', 'What is the test, and what does each answer mean for the applicant?'));
out.push(item('3', 'What came of the condition she had never written before, and who did it help?'));
out.push(writers([
  'A note on stated conditions: **the arithmetic — conditions, reapplications, refusals** → **one case in full, month by month** → **what you had actually done** → **the test, in one question** → **the condition you had never written** → **what came of it** → **and the file, with what is in it and who has read it.**',
  '⚠ **Date the case by month and let the sequence do the work.** _January, February, March._ **A reader who sees the three months cannot be told that the fault was a matter of tone** — **and the sequence is the only form in which this particular fault is visible at all.**',
  '**Say what you had known and when.** ⚠ _Which I had known in January and had not written down._ **That clause is the note** — **and a version without it describes an unfortunate outcome, where this one describes a decision.**',
  '**Give the condition about your own organisation in full, and say why it took so long.** ⚠ _It reads as an admission and is a piece of information._ **The confusion between those two is why the sentence is rare** — **and naming the confusion is more useful to another officer than the sentence itself.**',
  '⚠ And **end on the file.** _Three letters obtained in five visits, which nobody has read; and a proposal that was the strongest in two rounds, which is also in the file._ **Two documents, both consequences of one sentence** — **and a note that ends in a filing cabinet rather than a resolution is the one that will change somebody\'s January.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the arithmetic and the case (120 words or more).'));
out.push(p('**______________** · _note on _______________ · **______________**   **The arithmetic.** **______________ conditions stated.** **______________ produced a reapplication.** ⚠ **______________ were refused, and in ______________ the condition was one the applicant could manufacture.**   **The case in full.** **In ______________ I wrote ______________.** **In ______________, ______________ arrived.** ⚠ **In ______________ I refused it because ______________, which I had known in ______________ and had not written down.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The arithmetic first, with three figures',
  'The case dated by month',
  'What you knew, and when, stated plainly',
  'The test as a single question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their condition**, flat, and the room says what it would do on Monday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the arithmetic, the case by month, what you had done, the test, the condition about your own organisation, what came of it, and the file.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every condition unmanufacturable, nothing encouraging without a date, and the case dated by month.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one cost.** **Six of eight conditions in this room were manufacturable, and in four of the six the real reason was known from the beginning** — **and all four writers said so unprompted, which should be acknowledged and not dwelt on.** **Then the cost: three letters, a budget revision, five visits, eleven weeks.** **Then Mrs Rizk\'s file for scheme 9, and the two documents nobody has read.**'));
out.push(hw('**Rewrite your condition as information, or write nothing and say why.** ⚠ **Then do the harder half: write the condition that is a fact about your own organisation.** **In this class seven of ten could write one and four said they would not send it** — **and the four reasons were all that it reads as an admission, which is the confusion the cycle is about.** **Bring both and the reason.** **20.6 writes the proposal that is a refusal of its reader\'s proposal**, so bring a proposal somebody has made to you that you are going to refuse.'));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  The proposal that refuses a proposal'));
out.push(p('**Function:** writing the proposal that is a refusal of its reader\'s proposal   ·   **Grammar:** the first paragraph does not say no   ·   **Pronunciation:** the reader\'s purpose read as agreement, because it is'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the proposal you are going to refuse, and what it is for.** ⚠ **What it is for, in the proposer\'s own terms, and not what is wrong with it.** **In this class nine of ten said what was wrong with it first and had to be asked again** — **and your teacher writes the ten purposes on the board, with nothing else beside them.**'));
out.push(board('The donor proposes scoring on cost per household alone.', 'So that schemes can be compared on one figure.'));
out.push(p('**b**  Which two open without saying no? **1** _I am afraid the proposed change would not work._  **2** _The purpose of scoring on cost per household alone is that schemes should be comparable on a single figure, and that purpose is right: four of the nine criteria are not comparable between districts._  **3** _There are a number of difficulties with this suggestion._  **4** _The reason for a single deadline is that a round should be scored against one set of figures, and nothing in this note disputes that._  **5** _While I understand the thinking, I cannot support it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the first paragraph does?   **A** softens the refusal   **B** **states the reader\'s purpose and agrees with it**, because the writer does   **C** summarises the proposal'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say a first paragraph that says no produces?   **2** What does Mrs Rizk say her own proposal has to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.11  The first paragraph does not say no', [
  ['Ms Huda', 'Mrs Rizk has to refuse a change proposed by the donor.'],
  ['Mrs Rizk', '⚠ **They want the schemes scored on cost per household alone, and the reason they give is a good one: nine criteria produce nine arguments and one figure produces a ranking.** **I am going to refuse it** — **and my first three drafts began by saying so, and all three were unsendable.**'],
  ['Ms Huda', 'What does a first paragraph that says no produce?'],
  ['Mrs Khoury', '⚠ **A reader who spends the rest of the document defending their proposal instead of reading yours.** **That is not a theory about feelings: it is what happens to attention.** **A reader whose idea has just been refused in line one is composing a reply from line two onwards** — **and nothing after line one is read.**'],
  ['Mr Attar', 'So the first paragraph is the purpose.'],
  ['Mrs Rizk', '⚠ **Their purpose, in their terms, and I have to mean it.** _The purpose of scoring on a single figure is that schemes should be comparable, and that purpose is right: four of my nine criteria are not comparable between districts and I have been scoring them as though they were._ **That is a concession and it is true and I had not put it in writing before.**'],
  ['Mrs Oueidat', 'And then the refusal.'],
  ['Mrs Rizk', '⚠ **And then the one thing the change would do that defeats its own purpose, which is the whole architecture.** **Cost per household is not comparable between districts either, because the denominator is the beneficiary definition** — **and that definition is three lines long and ends in _and others affected_, which 19.2 would call open.**'],
  ['Dr Qabbani', 'So their own purpose refuses it.'],
  ['Mrs Khoury', '⚠ **Their purpose refuses it, and that is the only refusal a proposal of this kind can survive.** **A refusal from your own preferences is an opinion against theirs.** **A refusal from their purpose is arithmetic** — **and 18.3 is the same move pointed at a rule instead of a proposal.**'],
  ['Mr Shihabi', 'Does it have to end with a proposal of your own?'],
  ['Mrs Rizk', '⚠ **It does, and the proposal has to serve their purpose and not mine.** **Mine is to close the beneficiary definition first and score on cost per household from the autumn round** — **which gives them their single figure a year later and makes it mean something, and which costs me the two criteria I was most attached to.**'],
  ['Mr Tayara', 'You give up something.'],
  ['Mrs Oueidat', '⚠ **She gives up two of her nine criteria and the room should notice that it is not a gesture.** **A counter-proposal that costs the writer nothing is a defence of the present arrangement in a proposal\'s clothes** — **and a donor reading one can see that in about four seconds.**'],
  ['Mrs Tarabishi', 'What if their purpose is not a good one?'],
  ['Mrs Khoury', '⚠ **Then this is the wrong document and you are having a different argument, which you should say.** **A proposal whose purpose you reject cannot be answered with a counter-proposal** — **it is answered with a letter that says what you think the purpose should be, which is 22.1 and is four units of work away.**'],
  ['Mrs Ajouz', 'And the word _but_?'],
  ['Mrs Rizk', '🔊 ⚠ **It does not appear, and finding that out took me three drafts.** **Every _but_ I wrote turned the concession in the first paragraph into a preface** — **and the version I sent has a full stop where each _but_ was, and the donor\'s reply quoted my concession back at me as though it were their own sentence, which is exactly what I wanted and did not expect to enjoy.**'],
]));
out.push(sp());
out.push(box('Language box – the proposal that refuses a proposal', [
  '**The first paragraph states the reader\'s purpose, in their terms, and agrees with it.** ⚠ **And you have to mean it.** _Four of my nine criteria are not comparable between districts and I have been scoring them as though they were._ **A concession that is true and that you had not put in writing before.**',
  '**A first paragraph that says no produces a reader who is composing a reply from line two.** ⚠ **That is not a theory about feelings: it is what happens to attention** — **and nothing after line one is read.**',
  '**Then the one thing the change would do that defeats its own purpose.** ⚠ **One thing, not three** — **which is 20.3 inside a proposal.** **Cost per household is not comparable either, because the denominator is an open definition.**',
  '**A refusal from their purpose is arithmetic; a refusal from your preferences is an opinion against theirs.** ⚠ **This is 18.3 pointed at a proposal instead of a rule** — **and it is the only refusal of a proposal that the proposer can accept without losing anything.**',
  '**Your counter-proposal must serve their purpose and cost you something.** ⚠ **Close the definition first, score on the single figure from the autumn round** — **their figure a year later and meaning something, at the price of the two criteria the writer was most attached to.** **A counter-proposal that costs the writer nothing is a defence of the present arrangement in a proposal\'s clothes.**',
  '**And where their purpose is itself wrong, this is the wrong document.** ⚠ **A proposal whose purpose you reject is not answered with a counter-proposal** — **it is answered with a letter about what the purpose should be, which is 22.1.**',
  '**No _but_.** ⚠ **Every _but_ turns the concession in the first paragraph into a preface.** **A full stop where each _but_ was** — **and in one case the donor quoted the concession back as though it were their own sentence, which is the result.**',
  '**Pronunciation.** 🔊 **Track 20.12** **Read the first paragraph as agreement, because it is agreement.** ⚠ **No lift at the end, no stress on _right_, and no pause before the next paragraph** — **because a pause there is an audible _but_, and the reader hears it even when the word is gone.**',
  '**Practise:** Purpose, defeat, counter-proposal. **1** a single scoring figure  **2** a single deadline  **3** a shorter form  **4** a purpose you reject  **5** a counter-proposal that costs you something',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the proposal from the card. B gives **the purpose in the proposer\'s terms**, **the one way it defeats that purpose**, and **a counter-proposal that costs B something.** ⚠ **Two rows on each card have a purpose B should reject** — **and there B says that this is the wrong document.** Change cards.'));
out.push(table(['Card A – the proposal to be refused', 'Card B – the proposal to be refused'], [
  ['_Score the schemes on cost per household alone._', '_One deadline for every element of a submission._'],
  ['_⚠ Rank schemes by the number of beneficiaries claimed._', '_⚠ Publish every scorer\'s comments with their name._'],
  ['_Shorten the application form to two pages._', '_Allow resubmission within the same round._'],
  ['_⚠ Remove the technical criteria altogether._', '_⚠ Let the committee chair decide the ranking alone._'],
  ['_Score on one figure, where the denominator is undefined._', '_A single deadline, where the figures are published later._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the purpose, the defeat, and what the counter-proposal costs. ⚠ **Rows 2 and 4 on both cards have purposes to reject** — **ranking by claimed beneficiaries, naming scorers, removing technical criteria, and a single decider** — **and the honest answer is a letter about the purpose and not a counter-proposal.** **Rows 5 are the pair the cycle turns on**: in both, the proposal defeats its own purpose for the same reason, **which is an open definition or a date nobody controls.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the proposal you are going to refuse** and write **the first paragraph: their purpose, in their terms, with a concession you mean.** ⚠ **Then the one way the change defeats that purpose.** **In this class seven of ten first paragraphs contained a _but_ or a _however_ and all seven were struck** — **and four of the ten concessions were things the writer had never put in writing before.**'));
out.push(p('**b**  Swap. Your partner reads **only your first paragraph** and says **whether they would read the second.** ⚠ **Then the harder question: what does your counter-proposal cost you?** — **and in this class three counter-proposals cost the writer nothing, which their partners identified in under a minute.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk has to refuse a change proposed by the donor: they want the schemes scored on cost per household alone, and the reason they give is a good one, because nine criteria produce nine arguments and one figure produces a ranking. She is going to refuse it, and her first three drafts began by saying so, and all three were unsendable. Ms Huda asked what a first paragraph that says no produces, and Mrs Khoury said a reader who spends the rest of the document defending their proposal instead of reading yours, which is not a theory about feelings but what happens to attention. Mr Attar said so the first paragraph is the purpose, and their purpose, in their terms, and she has to mean it: four of her nine criteria are not comparable between districts and she has been scoring them as though they were, which is a concession and is true and which she had not put in writing before. Mrs Oueidat said and then the refusal, and then the one thing the change would do that defeats its own purpose, which is the whole architecture, because cost per household is not comparable between districts either, since the denominator is the beneficiary definition. Dr Qabbani said so their own purpose refuses it, and Mrs Khoury said their purpose refuses it, and that is the only refusal a proposal of this kind can survive. Mr Shihabi asked whether it has to end with a proposal of her own, and it does, and the proposal has to serve their purpose and not hers. Mr Tayara said she gives up something, and Mrs Oueidat said she gives up two of her nine criteria and the room should notice that it is not a gesture. Mrs Tarabishi asked what happens if their purpose is not a good one, and Mrs Khoury said then this is the wrong document. And Mrs Ajouz asked about the word but, and Mrs Rizk said it does not appear and finding that out took three drafts, and the donor\'s reply quoted her concession back at her as though it were their own sentence. Mrs Khoury also said that a refusal from your own preferences is an opinion against theirs, where a refusal from their purpose is arithmetic, and that a proposal whose purpose you reject is answered not with a counter-proposal but with a letter saying what you think the purpose should be, which is 22.1 and four units of work away. And Mrs Rizk said the version she sent has a full stop where each but had been._'));
out.push(p('**Listener task:** write the purpose, the defeat, and what the counter-proposal costs the writer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the proposal Mrs Rizk sent to the donor. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note to the programme secretariat_ · _on scoring schemes on a single figure_ · **9 December**',
  '**1 · What the proposal is for.** **The secretariat proposes that schemes be scored on cost per household alone, so that schemes in different districts can be compared on one figure instead of nine.** ⚠ **That purpose is right and I have been part of the problem it addresses.** **Four of the nine criteria I score are not comparable between districts, and I have been scoring them as though they were, and ranking schemes on the total.**',
  '**2 · What the change would do to its own purpose.** **Cost per household is not comparable between districts either.** ⚠ **The denominator is the beneficiary definition at paragraph 2.4, which is three lines long and ends in _and others affected_** — **and in the spring round two schemes serving the same eleven villages reported two hundred and eighteen households and nine hundred.** **Both figures are within the definition.** **Scoring on one figure would therefore rank those two schemes four places apart on a number that measures nothing in common.**',
  '**3 · One figure that shows the size of it.** **Of the nine schemes in the spring round, four reported a cost per household and the definition each used can be identified from the annexes.** ⚠ **Two counted registered households, one counted a village, and one counted households within a kilometre.**',
  '**4 · What I propose instead, and it serves the same purpose.** **Close the beneficiary definition first, by criterion rather than by list: _any household from which a person collected water at the scheme in the month before application_.** ⚠ **Then score on cost per household alone from the autumn round, and drop the technical criteria to a pass or fail.**',
  '**5 · What my proposal costs me.** **Two of the nine criteria are mine and I argued for both in 2021.** ⚠ **Technical soundness becomes a pass or fail, which means I shall no longer be able to distinguish a good scheme from a competent one in the score** — **and I have been the person most attached to that distinction.**',
  '**6 · What it costs the secretariat.** **A year.** **The single figure begins in the autumn round and not in the spring one.** ⚠ **I can see no way of giving the figure earlier that does not give it a denominator that means four different things.**',
  '**7 · What I am not proposing.** **I am not proposing to keep the nine criteria.** **I am not proposing a review.** ⚠ **And I am not asking the secretariat to defer the change: if the definition is closed by March the change can proceed in the autumn round as the secretariat intends.**',
  '**8 · What I expect to be told, and my answer to it.** **That the definition has been open since 2019 and that closing it by March is not realistic.** ⚠ **It is a single criterion of twenty-three words and I have drafted it at paragraph 4; the obstacle is not the drafting but the spring round, in which four schemes have already reported under the open definition.** **Those four can be rescored against the closed definition from their annexes in about two days, and I shall do it myself** — **which is the second thing my proposal costs me and the reason I have not asked anybody else to do it.**',
]));
out.push(item('1', 'What does paragraph 1 concede, and about whom?'));
out.push(item('2', 'What is the one way the change defeats its own purpose, and what figures show it?'));
out.push(item('3', 'What does her proposal cost her, and what does it cost the secretariat?'));
out.push(writers([
  'A proposal that refuses a proposal: **their purpose, in their terms, with a concession you mean** → **the one way the change defeats that purpose** → **one figure that shows its size** → **your proposal, serving their purpose** → **what yours costs you** → **what it costs them** → **and what you are not proposing.**',
  '⚠ **Concede something real in the first paragraph.** _I have been part of the problem it addresses._ **A concession that costs nothing is a courtesy and reads as one** — **and the only concession worth making is the one you have not previously put in writing, which is why this paragraph is hard to draft and short to read.**',
  '**Name one way the change defeats its purpose, and only one.** ⚠ **20.3 inside a proposal.** **Three objections let the reader pick the weakest** — **and a proposal refused on three grounds is refused on none, because the reader will answer the easiest and treat the others as padding.**',
  '**Price your own proposal in what it costs you.** ⚠ _Two of the nine criteria are mine and I argued for both in 2021._ **A counter-proposal that costs the writer nothing is a defence of the present arrangement in a proposal\'s clothes** — **and a reader sees that in four seconds.**',
  '⚠ And **say what you are not proposing, and include the deferral.** _I am not asking the secretariat to defer the change._ **The commonest thing such a note is suspected of is delay** — **and the sentence that refuses to ask for it, with a date attached, removes the suspicion before it forms.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first two paragraphs and the cost (120 words or more).'));
out.push(p('**______________** · _note to _______________ · _on _______________ · **______________**   **1 · What the proposal is for.** **______________ proposes ______________, so that ______________.** ⚠ **That purpose is right and ______________.**   **2 · What the change would do to its own purpose.** **______________.** ⚠ **______________.**   **5 · What my proposal costs me.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Their purpose first, in their terms, with a real concession',
  'One objection only, and it comes from their purpose',
  'A counter-proposal that costs you something nameable',
  'No _but_ and no _however_ anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first paragraph**, and the room says whether it would read the second.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole proposal (260 words or more), to the shape in the writer\'s box: their purpose with a concession, the one defeat, the figure, your proposal, what it costs you, what it costs them, and what you are not proposing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a real concession in the first paragraph, one objection drawn from their purpose, and a cost to you that can be named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one strike.** **Seven of ten first paragraphs contained a _but_ or a _however_ and all seven were struck in front of the room** — **and the room should hear one read with the word and then without it.** **Then: how many counter-proposals cost the writer nothing?** **Three, identified by their partners in under a minute.** **Then Mrs Rizk\'s donor, quoting her concession back at her.**'));
out.push(hw('**Write the first paragraph of your refusal-proposal: their purpose, in their terms, with a concession you mean.** ⚠ **Then do the harder half: strike every _but_ and read it aloud to check that there is no pause where one was.** **In this class six of ten had a pause left behind after the word was struck** — **and a pause is an audible _but_, which is the finding.** **Bring the paragraph.** **20.7 mediates between a refusal, its reader, and the person who has to defend it** — **so bring a refusal of yours that somebody else had to explain.**'));

// ===================== 20.7 =====================
out.push(h2('20.7  Review & Mediate: a refusal, its reader, and the person who defends it'));
out.push(p('**Function:** mediating between a refusal, its reader, and the person who has to defend it   ·   **Recycling:** Unit 20   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 5 · Writing Part 2 (the proposal) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 20 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The committee has decided not funding it.  **2** There is no alternative which I can offer it.  **3** If I would have written the real reason in January, he would not have spent eleven weeks.  **4** The district rule is applied at the date of the committee, which meets at the eleventh.  **5** Nineteen from the twenty-four letters were decisions.  **6** I am not asking to the secretariat to defer the change.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE REFUSAL, FOUR ACCOUNTS** _(the letter of 14 October; the board meeting of 3 December)_',
  '**The writer, Mrs Rizk.** _"One reason, unremovable, and the free sentence at the end: it is not a comment on the proposal, which was the strongest of the nine on technical soundness."_',
  '**The applicant.** _"I took the letter to my own board. They asked why the strongest proposal in two rounds had been refused and I had no answer."_',
  '**The programme officer who had to defend it to that board.** _"I had the letter and nothing else. I could say what the rule was. I could not say what it was for."_',
  '**Mrs Rizk\'s internal note, which the officer has never seen.** _"The district rule exists to spread funding across districts within a governorate, and it is applied at the date of the committee."_',
  '⚠ **All four are accurate.** **The refusal was defensible and the person defending it did not have the sentence that made it defensible** — **because that sentence was in the internal note and not in the letter.**',
  '**And the thing none of the three has noticed.** **The free sentence about technical soundness was in the letter and the applicant did not use it with his board** — **because it was the last line of a one-paragraph refusal and read as consolation rather than as evidence.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 20.13  The sentence the defender needs', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **Three things, and one of them is not a letter.** **Two lines to the programme officer with the sentence she needed.** **One short note to the applicant with the free sentence at the top instead of the bottom.** **And a change to the standard refusal, which is the only one of the three that is worth anything next year.**'],
  ['Mrs Rizk', 'And what must not be said is that his board should have read the letter.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is true, which is the whole difficulty of this unit in one sentence.** **The free sentence was there.** **It was the last line of a one-paragraph refusal, where it reads as consolation** — **and a writer who tells a board that it should have read more carefully has blamed nine people for the position of a sentence.**'],
  ['Mrs Oueidat', 'Is anybody at fault?'],
  ['Mr Attar', '⚠ **Nobody, and this is the eighth time in Book 2.** **The writer gave one unremovable reason, which is what the unit teaches.** **The applicant took the letter to his board, which is what anybody does.** **The officer defended it with what she had.** **And the sentence that would have settled it was written down, by the right person, in the wrong document.**'],
  ['Dr Qabbani', 'So the refusal was right.'],
  ['Mrs Rizk', '⚠ **The refusal was right and the letter was incomplete, and I had thought those were the same thing.** **A refusal has two readers and I had been writing for one of them** — **and the second reader is the person who has to say it out loud in a room I am not in.**'],
  ['Mrs Khoury', '⚠ **Which is the finding of the unit and it arrives in the last cycle.** **Every refusal is defended by somebody** — **a programme officer, a head of department, a desk, the applicant\'s own manager** — **and the question to ask of a letter is not only whether it is right but whether the person who will have to defend it can do so from the letter alone.**'],
  ['Mr Shihabi', 'What does that sentence look like?'],
  ['Mrs Rizk', '⚠ **It is the rule\'s purpose and it is one line.** _The district rule exists so that funding is spread across districts within a governorate, and it is applied at the date of the committee._ **Eighteen words, in my internal note since 2021** — **and in none of the twenty-seven refusals I wrote this year.**'],
  ['Mr Tayara', 'Why was it never in the letter?'],
  ['Mrs Oueidat', '⚠ **Because it reads like an explanation and she had been taught that a refusal should not explain itself.** **And it is not an explanation: it is the rule\'s purpose, which 18.3 says an applicant is entitled to** — **and the officer defending the refusal is entitled to it twice over, because she did not make the rule either.**'],
  ['Mrs Tarabishi', 'And the note to the applicant?'],
  ['Mrs Rizk', '⚠ **Four lines, and the free sentence is the first of them and not the last.** **_Scheme 12 was the strongest of the nine on technical soundness._** **Then the rule and its purpose.** **Then nothing** — **and he may use the first line with his board, which is what it is for and what the position at the bottom of a paragraph prevented.**'],
  ['Mrs Ajouz', 'Does the standard letter change?'],
  ['Mrs Khoury', '⚠ **It does, and that is the only part of this that outlives the three of them.** **Every refusal now carries the rule\'s purpose in a sentence** — **and the first officer to defend one of those letters in a room will find that she can, which nobody will attribute to a committee note of December.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the officer\'s own sentence.** **_I could say what the rule was. I could not say what it was for._** **She had been given a rule and asked to defend a decision** — **and the person who could have given her the second half of that had written it down four years ago and filed it where she would never look.**'],
]));
out.push(sp());
out.push(box('Language box – the refusal and its second reader', [
  '**A refusal has two readers: the applicant, and whoever has to defend it in a room you are not in.** ⚠ **A programme officer, a head of department, a desk, the applicant\'s own manager.** **The question is not only whether the letter is right but whether the defender can defend it from the letter alone.**',
  '**The sentence the defender needs is the rule\'s purpose, and it is one line.** ⚠ _The district rule exists so that funding is spread across districts within a governorate, and it is applied at the date of the committee._ **Eighteen words** — **and it was in an internal note for four years and in none of the year\'s refusals.**',
  '**It reads like an explanation and it is not one.** ⚠ **It is the rule\'s purpose, which 18.3 says an applicant is entitled to** — **and the officer defending the refusal is entitled to it twice over, because she did not make the rule either.**',
  '**What must not be said: that his board should have read the letter.** ⚠ **It is true.** **The free sentence was there, as the last line of a one-paragraph refusal, where it reads as consolation** — **and a writer who says it has blamed nine people for the position of a sentence.**',
  '**Position is the whole of the second finding.** ⚠ **The free sentence goes first in the short note and not last.** _Scheme 12 was the strongest of the nine on technical soundness._ **Then the rule and its purpose, and then nothing** — **and the applicant may use the first line with his board, which is what it is for.**',
  '**And the only part that outlives the three of them is the standard letter.** ⚠ **Every refusal now carries the rule\'s purpose in a sentence** — **and the first officer who defends one of those letters successfully will not attribute it to anything, which is the ordinary fate of a change that works.**',
  '**Pronunciation.** 🔊 **Track 20.14** **Say the purpose sentence as a fact about a rule, flat, with no stress on _exists_.** ⚠ **Stress on _exists_ makes it a justification and invites an argument about whether the rule should exist** — **where flat, it is the information a defender needs and an applicant is entitled to.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **the sentence the defender needed**, gives **the three things to do**, and names **what must not be said.** ⚠ **On one of the two cards the defender had everything they needed**, and B must find that and say what went wrong instead. Change roles with the other pair.'));
out.push(table(['Pair A – the refusal and the district rule', 'Pair B – the refusal and the filled post'], [
  ['_The writer: "one reason, unremovable, and the free sentence."_', '_The writer: "the post was filled on 4 March."_'],
  ['_The applicant: "my board asked why and I had no answer."_', '_The applicant: "I was told I had been unsuccessful."_'],
  ['_⚠ The defender: "I could say what the rule was, not what it was for."_', '_⚠ The defender: "I had the date and the name of the appointee."_'],
  ['_⚠ The internal note: the rule\'s purpose, written in 2021._', '_⚠ Nothing missing: the letter said everything the defender said._'],
  ['_⚠ Missing: the purpose, in the letter._', '_⚠ Missing: nothing. The applicant never read past line one._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the missing sentence, the three actions, and what must not be said. ⚠ **On Pair B nothing is missing from the letter and the room will keep looking** — **and the finding is that the applicant stopped at _unsuccessful_, which is the first word of the first line, and that a refusal whose first line is a verdict is not read to the end.** **The repair is 20.1: the first line says who decided and what, and the second says why.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the refusal of yours that somebody else had to explain** and write **the four accounts**: yours, the reader\'s, the defender\'s, and one document the defender has never seen. ⚠ **Then name the sentence the defender needed.** **In this class seven of ten defenders had been given a rule and not its purpose** — **and in five of the seven the purpose was written down somewhere in the writer\'s own files.**'));
out.push(p('**b**  Swap. Your partner writes **the three things to do** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, eight times in ten, a true statement about what the other party failed to read.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said there are three things and one of them is not a letter: two lines to the programme officer with the sentence she needed, one short note to the applicant with the free sentence at the top instead of the bottom, and a change to the standard refusal, which is the only one of the three worth anything next year. Mrs Rizk said what must not be said is that his board should have read the letter, and that is exactly it and it is true, which is the whole difficulty of the unit in one sentence: the free sentence was there, as the last line of a one-paragraph refusal, where it reads as consolation. Mrs Oueidat asked whether anybody is at fault, and Mr Attar said nobody, and this is the eighth time in Book 2: the writer gave one unremovable reason, the applicant took the letter to his board, the officer defended it with what she had, and the sentence that would have settled it was written down by the right person in the wrong document. Dr Qabbani said so the refusal was right, and Mrs Rizk said the refusal was right and the letter was incomplete, and she had thought those were the same thing, because a refusal has two readers and she had been writing for one of them. Mrs Khoury said that is the finding of the unit and it arrives in the last cycle: every refusal is defended by somebody, and the question to ask of a letter is not only whether it is right but whether the person who has to defend it can do so from the letter alone. Mr Shihabi asked what that sentence looks like, and it is the rule\'s purpose and it is one line, eighteen words, in her internal note since 2021 and in none of the twenty-seven refusals she wrote this year. Mr Tayara asked why it was never in the letter, and Mrs Oueidat said because it reads like an explanation and she had been taught that a refusal should not explain itself, and it is not an explanation: it is the rule\'s purpose. Mrs Tarabishi asked about the note to the applicant, and four lines, with the free sentence first. Mrs Ajouz asked whether the standard letter changes, and Mrs Khoury said it does, and that is the only part of this that outlives the three of them. And Mrs Rizk said the thing she will take away is the officer\'s own sentence: she could say what the rule was and could not say what it was for._'));
out.push(p('**Listener task:** write the sentence the defender needed and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 5)', 7));
out.push(p('You are going to read an article by a grants officer. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best according to the text.'));
out.push(model([
  '**TWENTY-SEVEN LETTERS**',
  'I have written twenty-seven refusals this year and I counted the first eight words of each of them in November. Twenty-four begin with some form of _we are unable_. Nineteen of those twenty-four were decisions: the committee had money, the scheme was eligible, and we chose other schemes. I had been writing a sentence about capacity to describe an act of choice, for nine years, and nobody had ever complained about it.',
  'The reason I had not noticed is that _unable_ is kinder to write. It is not kinder to read and it is not kinder to act on, and those are three different things which I had been treating as one. What _unable_ tells the reader is that something is in the way. So they move it. One applicant cut his budget by a fifth, found a co-funder we had never heard of, and obtained a letter from the governorate in five visits — eleven weeks of work by three people, all of it in response to a sentence I had written in about four minutes. The committee refused the scheme again for the reason it had refused it the first time, which was a district rule I had known about throughout.',
  'What made me count was a letter from that applicant. Four lines, perfectly polite, asking what the real reason had been the first time. I had no answer I was willing to put in writing, which told me what the answer was.',
  'The repair is not a softer letter and it is not a warmer one. It is one unremovable reason, said once, with no second reason behind it. A second reason weakens the first: the reader attacks the weakest, and when the weakest falls the letter looks as though it was assembled out of whatever came to hand. Seven of my thirty-one refusals were appealed; those seven averaged three point four reasons, and the nine single-reason letters were appealed twice.',
  'The hardest sentence is six words long. _There is no alternative I can offer._ Twelve of my letters this year should have carried it and two did, and those two are the only refusals all year that produced no further correspondence from anybody. I had believed for nine years that a refusal with nothing in it was the cruellest thing I could send. I now think the cruellest is _we would be glad to look at a revised proposal_, which is warm, costs the writer nothing, and is an instruction to do eleven weeks of work for a second refusal.',
  'The thing I have changed most recently is not in the letter to the applicant at all. In December a programme officer had to defend one of my refusals to an applicant\'s board. She told me afterwards that she could say what the rule was and could not say what it was for. The rule\'s purpose had been written down, by me, in an internal note, in 2021. Every refusal now carries it in one line, and I expect nobody will ever mention that it is there.',
]));
out.push(p('**1**  What does the writer say about the first eight words of her letters?   **A** They were chosen carelessly.   **B** They described a choice as a limitation.   **C** They had been criticised by applicants.   **D** They were copied from a standard form.', { indent: 200, after: 60 }));
out.push(p('**2**  What does she say about the three kinds of kindness?   **A** Only one of them matters.   **B** They are usually in conflict.   **C** Applicants value a different one from writers.   **D** She had treated three different things as one.', { indent: 200, after: 60 }));
out.push(p('**3**  What does she say the applicant\'s four-line letter did?   **A** It showed her what her own answer was.   **B** It accused her of dishonesty.   **C** It persuaded the committee to reconsider.   **D** It arrived too late to be useful.', { indent: 200, after: 60 }));
out.push(p('**4**  Why does she say a second reason weakens the first?   **A** It makes the letter too long.   **B** It is usually untrue.   **C** When the weaker one falls, the letter looks improvised.   **D** Readers prefer a single explanation.', { indent: 200, after: 60 }));
out.push(p('**5**  What has changed her view of the cruellest sentence?   **A** Two letters that produced no reply at all.   **B** A complaint from a committee.   **C** The number of appeals she received.   **D** Advice from a colleague.', { indent: 200, after: 60 }));
out.push(p('**6**  What does she expect about the sentence now in every refusal?   **A** That it will be challenged.   **B** That it will shorten her letters.   **C** That applicants will quote it back at her.   **D** That nobody will ever remark on its presence.', { indent: 200, after: 60 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three things (120 words or more, including the working).'));
out.push(p('**To the programme officer, two lines.** ⚠ **______________ exists so that ______________, and it is applied at ______________.**   **To the applicant, four lines.** **______________ was the strongest of ______________.** **______________.** ⚠ **And nothing after it.**   **To the standard letter.** **Every refusal now carries ______________.**   **And the working.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The rule\'s purpose in one line, to the defender',
  'The free sentence first in the note to the applicant',
  'A change to the standard letter, not only to this one',
  'Nothing about what anybody failed to read',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the proposal)', 10));
out.push(box(null, [
  '⚠ **The first paragraph states the reader\'s purpose and agrees with it.** **One objection only, drawn from that purpose.** **And your proposal must cost you something you can name.**',
  'The body you work for has proposed a change that you think would defeat its own purpose. **Write a proposal** setting out **what the change is for**, **the one way it would defeat that purpose**, **what you propose instead**, and **what your own proposal costs you.** Write **220–260 words**.',
  '**You should include:** the purpose in the reader\'s terms   ·   one concession you mean   ·   one objection and one figure   ·   your proposal   ·   its cost to you   ·   and what you are not proposing.',
  '⚠ **No _but_ and no _however_ anywhere in the first two paragraphs.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 20 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The committee has decided ___ it.   a) not funding   b) not to funding   c) not to fund',
  '2  There is no alternative ___ I can offer.   a) which it   b) that   c) what',
  '3  ___ I written the real reason in January, he would not have spent eleven weeks.   a) Had   b) If   c) Should',
  '4  The rule is applied at the date of the committee, which meets ___ the eleventh.   a) at   b) in   c) on',
  '5  Nineteen ___ the twenty-four letters were decisions.   a) from   b) of   c) among',
  '6  I am not asking ___ to defer the change.   a) the secretariat   b) to the secretariat   c) for the secretariat',
  '7  A removable reason gets you the same application, ___ .   a) improve   b) improving   c) improved',
  '8  The applicant did exactly what my sentence told him ___ .   a) to do   b) to do it   c) doing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching).** 🔊 **Track 20.15** You will hear five people talking about a refusal they wrote or received. **Task One:** for questions **1–5**, choose from the list **A–H** what each speaker says went wrong. **Task Two:** for questions **6–10**, choose from the list **A–H** what each speaker says they changed. Use each letter once only.'));
out.push(p('**Task One — what went wrong.**   **A** a decision was written as an inability   **B** a second reason was attacked and fell   **C** an alternative was offered that could not be delivered   **D** a condition was stated that the reader could manufacture   **E** the defender was given a rule and not its purpose   **F** the free sentence was in the wrong place   **G** the refusal arrived too late   **H** nobody signed the letter', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**Task Two — what the speaker changed.**   **A** counted the first words of every letter   **B** struck every reason but one   **C** added the rule\'s purpose to the standard letter   **D** wrote _there is no alternative I can offer_   **E** moved one sentence to the top   **F** stopped stating conditions at all   **G** asked a colleague to sign   **H** shortened every letter to four lines', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 20.15  Audio script (read after the check)', [
  ['Speaker 1', 'I wrote that we were unable to fund the scheme, and we were perfectly able to: we had the money and we chose two others. He cut his budget, found a co-funder and went to the governorate five times, and then I refused him again for a district rule I had known about from the start. What I did afterwards was count the first eight words of every refusal I had written that year. Twenty-four of twenty-seven said unable and nineteen of those were decisions. I had not known that about myself and the count took eleven minutes.'],
  ['Speaker 2', 'Three reasons, and the third one was the timetable, and the timetable objection was based on a dry-season date the governorate had moved in July. He went at the third reason, he was right, and once it fell the committee had to defend two reasons nobody had challenged in front of a board that had just been shown we were wrong about something. I now strike everything but one. It feels thin and the thinness is mine and not the letter\'s.'],
  ['Speaker 3', 'I said we would be glad to look at a revised proposal in future. There was no future: the scheme could not be funded in that district on any terms. He spent eleven weeks on a revision for a letter I had written in four minutes. The sentence I had never written in nine years is six words long and I wrote it in October: there is no alternative I can offer. Nobody came back on it at all, which I had not expected.'],
  ['Speaker 4', 'The letter said the strongest thing it could say for him, which was that the proposal was the best of the nine on technical soundness, and it said it in the last line of a single paragraph. He took the letter to his own board and did not use it, because at the bottom of a refusal that sentence reads as consolation. It is now the first line of a four-line note and it does the work it was always capable of doing.'],
  ['Speaker 5', 'I had to defend somebody else\'s refusal to an applicant\'s board in December. I had the letter and nothing else. I could say what the rule was and I could not say what it was for, and a room of nine people can tell the difference in about four seconds. The purpose had been written down four years earlier in an internal note I had never seen. It is in every refusal now, in one line, and I imagine nobody will ever mention that it is there.'],
]));
out.push(p('**C  Writing.** Write the three things and the working (120 words or more): the two lines to the defender, the four-line note with the free sentence first, the change to the standard letter, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 20)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell a decision from an incapacity, and write whichever is true',
  '☐ give a reason an applicant cannot remove, or write the instruction instead',
  '☐ refuse once, with no second reason and no _in any case_',
  '☐ offer an alternative with a date, a figure and a name — or say there is none',
  '☐ state a condition the reader cannot manufacture, as information',
  '☐ write the free sentence that helps the reader and costs me nothing',
  '☐ refuse a proposal by stating its own purpose first and agreeing with it',
  '☐ put in the letter the sentence that whoever defends it will have to say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _turn down · knock back · hold the line on · see one\'s way to · put a stop to · stave off · shut out · close off · leave open · hold open · refer back · come down on_.',
  '**This unit\'s word-formation set** _(Reading Part 5 in 20.7 draws on this unit\'s lexis)_: _decline → **declined** · reject → **rejection** · revoke → **revocation** · conclusive → **conclusively** · reconsider → **reconsideration** · accede → **accession** · capacity → **incapacity** · practicable → **impracticable** · sanction → **unsanctioned**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _call back_ **→ _a decision cannot be called back once the letter is sent_**, which is revoking a thing, where at A2 it was telephoning somebody again · _go away_ **→ _an application does not go away because it has been refused_**, which is a matter ceasing to exist, where at A2 it was going away on holiday · _grow up_ **→ _the district rule grew up before the funding level changed_**, which is a practice developing over time, where at A2 it was a child growing up.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 20 · Refusing Without Giving Grounds for Appeal');
