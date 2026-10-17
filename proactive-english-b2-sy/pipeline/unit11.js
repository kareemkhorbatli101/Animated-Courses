// Proactive English B2 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 11  Three Readers, One Fact'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Unit 10 was about figures. This unit is about **one fact written three times** — because almost everything you write goes to **three kinds of reader at once**, and they need different things from the same sentence.',
  '**The three readers, and the unit uses these names throughout.** **The actor**: the person who has to do something. **The approver**: the person who has to agree to it. **The record reader**: the person who will read it in two years and was not there.',
  '**11.1** names the three readers of one of your own pieces of writing.   **11.2** writes the same fact three times, same length.   **11.3** writes the actor\'s version.   **11.4** writes the approver\'s version.   **11.5** reads a page and names which reader it was written for.   **11.6** writes the one page that serves all three, in layers.   **11.7** mediates a page that **went to all three and was acted on by none.**',
  '**Exam practice in 11.7:** B2 First **Reading and Use of English Part 2** (open cloze), **Writing Part 1** (the essay) and **Listening Part 3** (multiple matching).',
  '⚠ **Bring one short piece of writing of your own that went to more than one person** — a note, a message, a page — **and the names of the people it went to.** 11.1 runs on it, and **a piece that went to one person makes the cycle impossible.**',
  '**And the slip does not change again.** Band 2 for this unit and the next: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 11.1 =====================
out.push(pb());
out.push(h2('11.1  Who is this for?'));
out.push(p('**Function:** naming the three readers of one piece of writing   ·   **Grammar:** _for X, the point is_ · _what Y needs is_ · _in two years, nobody will_   ·   **Pronunciation:** the three readers named without ranking them'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the first line of the piece you brought and then **name every person it went to.** ⚠ Then sort them into three: **who had to do something, who had to agree, and who will read it in two years.** Most pieces have all three on the list and **were written for one of them.**'));
out.push(board('I sent it round to everybody who needed to know.', 'Three readers: Tareq had to act, Mr Saqqal had to approve, and the file is the third.'));
out.push(p('**b**  Which sentence is for the **actor**? **1** _The arrangement has been approved and will take effect from Monday._  **2** _Put a date stamp on every refused consignment from Monday; the stamp is in the second drawer._  **3** _This decision was taken because the earlier arrangement had no record of refusals._  **4** _We should perhaps consider whether a stamp would help._  **5** _The cost is about seventeen minutes a year._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three readers does Ms Huda name, and what does Mrs Shaaban find about her own note?   **A** two readers; nothing   **B** **the actor, the approver and the record reader** — and Rim finds that her note went to all three and was written **entirely for the approver**, so the man who had to put the stamp on the consignments **could not tell from it what to do on Monday**   **C** four readers; it was too long'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the actor\'s version must have in its first line?   **2** What does Mrs Khoury say about the record reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  The actor, the approver and the file', [
  ['Ms Huda', 'Mrs Shaaban. Your note about the date stamp. Who did it go to?'],
  ['Rim', 'Mr Saqqal at the directorate, Mr Ayoub at the depot, and a copy in the standing file.'],
  ['Ms Huda', '**Three readers, and they are the three this unit is about.** **Mr Ayoub is the actor** — he has to put a stamp on something on Monday. **Mr Saqqal is the approver** — he has to agree to it and will never touch a stamp. ⚠ **And the file is the record reader**: somebody in two years who was not there and will have nothing but the page.'],
  ['Rim', 'And the note was written for Mr Saqqal.'],
  ['Ms Huda', '**Read me Mr Ayoub\'s first line.**'],
  ['Rim', '_(reading)_ _"Following consultation with the directorate, it has been agreed that a revised procedure for the recording of refusals will be adopted."_ ⚠ **He cannot tell from that whether to do anything on Monday.**'],
  ['Ms Huda', '**And that is the commonest fault in working prose and it is not a fault of style.** ⚠ **It is a page written for the reader whose permission you needed, sent to the reader who has to act.** The approver was the difficult reader, so the writer wrote for the difficult reader — **which is natural and is wrong.**'],
  ['Omar', 'What does the actor\'s first line have to have?'],
  ['Ms Huda', '**A verb in the imperative and a date.** _Put a date stamp on every refused consignment from Monday._ ⚠ **Nine words**, and an actor who reads nothing else has done the right thing. **Everything else on the page is for somebody who is not holding the stamp.**'],
  ['Dima', 'And the record reader? That is the one I meet in my own work.'],
  ['Ms Huda', 'Say what they need.'],
  ['Dima', '⚠ **The reason, and the date, and the names.** In two years nobody will remember why the stamp was brought in, **and the page will be the only thing left.** A page that says _it has been agreed_ and not **who agreed and why** is useless to that reader — **and that reader is usually the writer\'s own successor.**'],
  ['Ms Huda', '**Which is the argument for taking the third reader seriously, because nobody does.** ⚠ **The actor complains if you fail them and the approver complains if you fail them. The record reader cannot complain**, and the page that fails them fails silently, two years later, **in a conversation the writer is not in.**'],
  ['Jad', 'Is it ever only one reader?'],
  ['Ms Huda', '**A message to one person about one action, with nothing to approve and nothing worth keeping.** ⚠ That is the only case, **and it is rarer than it feels** — because the file is a reader whether you addressed it or not.'],
  ['Hiba', 'And do you rank them? Is one of the three the main reader?'],
  ['Ms Huda', '⚠ **The actor first in the page, and no ranking in your head.** The order on the paper is **actor, approver, record** — but a writer who decides that the approver matters most will write 11.1\'s mistake again in a different form. **Three readers, three jobs, one page.**'],
  ['Mazen', 'And saying the three out loud?'],
  ['Ms Huda', '🔊 **Name the three with equal weight: _Tareq has to act, Mr Saqqal has to approve, and the file is the third._** ⚠ A speaker who drops the voice on the third has told the room it does not count, **and the page will be written accordingly.**'],
]));
out.push(sp());
out.push(box('Language box – the three readers', [
  '**The three readers of almost everything you write, and the unit uses these names.** **The actor** — has to do something. **The approver** — has to agree to it and will never touch the thing. ⚠ **The record reader** — will read it in two years, was not there, **and will have nothing but the page.**',
  '**What each needs, in one line.** **Actor:** an imperative and a date. **Approver:** the decision asked for, what it costs, what it risks. ⚠ **Record reader:** the reason, the date and the names.',
  '**The commonest fault in working prose, and it is not a fault of style.** ⚠ **A page written for the reader whose permission you needed, sent to the reader who has to act.** _Following consultation with the directorate, it has been agreed that a revised procedure will be adopted_ — **and the man holding the stamp cannot tell whether to do anything on Monday.**',
  '**Why it happens, which is worth knowing because it will happen to you again.** **The approver was the difficult reader**, so the writer wrote for the difficult reader. ⚠ **That is natural and it is wrong**, and no amount of care about sentences prevents it: **only naming the three readers before you write does.**',
  '**The actor\'s first line: a verb in the imperative and a date.** _Put a date stamp on every refused consignment from Monday._ ⚠ **Nine words**, and an actor who reads nothing else has done the right thing.',
  '**And the third reader is the one nobody takes seriously, for a structural reason.** ⚠ **The actor complains if you fail them; the approver complains if you fail them. The record reader cannot complain** — **the page that fails them fails silently, two years later, in a conversation the writer is not in.** **And that reader is usually the writer\'s own successor.**',
  '**The order on the page is actor, approver, record. There is no ranking in your head.** ⚠ A writer who decides the approver matters most **writes this cycle\'s mistake again in a different form.** **Three readers, three jobs, one page.**',
  '**And the only case with one reader: a message to one person about one action, with nothing to approve and nothing worth keeping.** ⚠ **Rarer than it feels** — **the file is a reader whether you addressed it or not.**',
  '**Pronunciation.** 🔊 **Track 11.2** **Name the three with equal weight**: _Tareq has to act, Mr Saqqal has to approve, and the file is the third._ ⚠ A speaker who drops the voice on the third **has told the room it does not count, and the page will be written accordingly.**',
  '**Practise:** Name the three readers of each of these. **1** a note bringing in a new step  **2** a refusal  **3** a request for money  **4** a handover sheet  **5** something you sent last week',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first line of the piece on the card. B names the three readers — **actor, approver, record** — and then says **which one the first line was written for.** B then writes the actor\'s first line: **an imperative and a date.** A says whether an actor could work from it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the first line as written)_ __________.'],
  ['B', 'Actor: __________. Approver: __________. Record: __________.'],
  ['B', 'Written for **the __________**, because __________.'],
  ['B', '_(the actor\'s first line)_ __________ **from __________.**'],
]));
out.push(table(['Card A – the first line as written', 'Card B – the first line as written'], [
  ['_Following consultation, a revised procedure for recording refusals will be adopted._', '_It has been agreed that the enquiry form will be amended in due course._'],
  ['_The directorate has approved the printing of originating offices on refusal letters._', '_A second portion of each disputed sample is now considered desirable._'],
  ['_⚠ Put the expected admissions on the foot of the handover sheet, from tonight._', '_⚠ Enter a refusal code in the box on every rejection slip, from Monday._'],
  ['_Members are reminded of the importance of accurate record-keeping._', '_Staff are asked to note the revised arrangements set out below._'],
  ['_The question of the second pad has been considered at some length._', '_The matter of the pencil board was raised and discussed._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three readers for each of the ten, and which reader the line was written for. Then the count: **eight of the ten are written for the approver** — and the two marked ⚠ are written for the actor and are the only two anybody could act on. ⚠ **No line in the ten is written for the record reader**, which is the finding to name out loud.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the piece you brought. **List every person it went to and sort them into the three.** ⚠ Then read your own first line and say, in writing, **which of the three it was written for.** **Most of the room will write _the approver_**, and that is the cycle working.'));
out.push(p('**b**  Swap. Your partner writes **the actor\'s first line** for your piece — an imperative and a date — and then asks you whether the actor could have worked from the line you actually sent.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim\'s note about the date stamp went to Mr Saqqal at the directorate, Mr Ayoub at the depot, and a copy in the standing file — three readers, and they are the three this unit is about. Mr Ayoub is the actor, because he has to put a stamp on something on Monday; Mr Saqqal is the approver, because he has to agree to it and will never touch a stamp; and the file is the record reader, which is somebody in two years who was not there and will have nothing but the page. And the note was written for Mr Saqqal. Asked to read Mr Ayoub\'s first line, she read: following consultation with the directorate, it has been agreed that a revised procedure for the recording of refusals will be adopted — and he cannot tell from that whether to do anything on Monday. Which is the commonest fault in working prose and is not a fault of style: it is a page written for the reader whose permission you needed and sent to the reader who has to act, and it happens because the approver was the difficult reader, so the writer wrote for the difficult reader. That is natural and it is wrong. Omar asked what the actor\'s first line has to have, and it has to have a verb in the imperative and a date: put a date stamp on every refused consignment from Monday — nine words, and an actor who reads nothing else has done the right thing. Dima said the record reader is the one she meets in her own work, and what that reader needs is the reason, the date and the names: in two years nobody will remember why the stamp was brought in and the page will be the only thing left, so a page that says it has been agreed and not who agreed and why is useless to that reader — and that reader is usually the writer\'s own successor. Which is the argument for taking the third reader seriously, because nobody does: the actor complains if you fail them and the approver complains if you fail them, and the record reader cannot complain, so the page that fails them fails silently two years later in a conversation the writer is not in. And Hiba asked whether one of the three is the main reader, and the order on the paper is actor, approver, record, with no ranking in anybody\'s head._'));
out.push(p('**Listener task:** write your partner\'s three readers and which one their first line was written for.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rim rewrites with the three readers named. Answer the questions.'));
out.push(model([
  '**THE DATE STAMP · what to do, what was agreed, and why** · R. Shaaban · 2 February',
  '**For Mr Ayoub, and this is the only part he needs: put a date stamp on every refused consignment from Monday 6 February. The stamp is in the second drawer of the gate desk. If a consignment is refused and you cannot find the stamp, write the date by hand and tell me the same day.**',
  '**For Mr Saqqal, who has to agree to it.** The stamp adds **about nine seconds to one consignment in fourteen** — about seventeen minutes a year across the depot. ⚠ **It changes nothing about the refusal policy and creates no new record**: it writes a date on a form that already exists. **What it risks is one thing only** — a gate man stamping a consignment that was not refused, which would put a date on a clean gate copy and would be visible at once.',
  '**What the alternative was, and why I am not asking for it.** A refusals register, kept at the gate. ⚠ **That is a new document, it needs somebody to keep it, and it would have been the fourth book on that desk.** **I am not asking for it and I shall not ask for it later.**',
  '**For whoever reads this in two years, and that is the part of this note I have never written before.** The reason is that **of forty consignments refused last quarter, I could not tell which nine were our own fault** and which thirty-one were the distributor\'s, **because the refusal slips carried a tick and no date.** The matter was raised by me on 20 November, discussed with Mr Saqqal on 18 January, and agreed by him on 30 January.',
  '**And what this note does not settle.** The distributor\'s own codes. ⚠ **A date on our side and a code on theirs are two halves of the same thing**, and the code was agreed in December by Mr Hariri\'s counter and not by this depot. **If somebody in two years finds only one half of it, the other half is in the counter\'s file.**',
  '**One sentence about the first version of this note.** It went to all three of these readers and was written entirely for Mr Saqqal. ⚠ **Mr Ayoub read it twice and asked me on the telephone what he was supposed to do**, which is how I came to write this one.',
]));
out.push(item('1', 'What does the actor have to do, and what if the stamp is missing?'));
out.push(item('2', 'What does she tell the approver it costs, and what does it risk?'));
out.push(item('3', 'What does the record reader get that the first version did not have?'));
out.push(writers([
  'A page with the three readers named: **the actor\'s instruction first, in the imperative, with a date and a fallback** → **the approver\'s paragraph: cost, what it does not change, the one risk** → **the alternative you are not asking for** → **the record reader\'s paragraph: reason, dates, names** → **what the page does not settle** → **and one sentence about the version that failed**.',
  '⚠ **Write the actor\'s part first and address them by name.** _For Mr Ayoub, and this is the only part he needs._ **Naming the reader and the extent of their part in one clause** saves an actor three paragraphs that are not for them — **and an actor who reads only their own paragraph has done the right thing.**',
  '**Give the actor a fallback.** _If you cannot find the stamp, write the date by hand and tell me the same day._ ⚠ An instruction with no fallback **produces either a telephone call or nothing**, and in a depot it produces nothing.',
  '**For the approver, say what the thing does _not_ change.** _It changes nothing about the refusal policy and creates no new record._ ⚠ **An approver\'s real question is what else moves**, and a writer who answers only the cost has left the expensive question unanswered.',
  '⚠ And in the record paragraph, put **dates and names, not events**. _Raised by me on 20 November, discussed on 18 January, agreed on 30 January._ **A reader in two years cannot ask anybody anything**, and three dates and two names are worth more to them than a page of reasoning.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with the three readers named (80 words or more).'));
out.push(p('**______________ · what to do, what was agreed, and why** · ______________ · ______________   **For ______________, and this is the only part they need: ______________ from ______________.** ______________. **If ______________, ______________.**   **For ______________, who has to agree to it.** ______________. ⚠ **It changes nothing about ______________.** **What it risks is one thing only** — ______________.   **What the alternative was, and why I am not asking for it.** ______________. ⚠ ______________.   **For whoever reads this in two years.** The reason is that ______________. Raised by ______________ on ______________, discussed on ______________, agreed on ______________.   **And what this note does not settle.** ______________.   **One sentence about the first version.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The actor\'s instruction first, imperative, dated, with a fallback',
  'What the thing does not change, for the approver',
  'The alternative named and declined',
  'Dates and names in the record paragraph',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their actor\'s first line only, and the room says whether somebody could work from it on Monday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the actor first with a fallback, the approver\'s paragraph, the alternative declined, and the record paragraph with its dates and names.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the actor\'s instruction first with an imperative and a date, what the thing does not change, dates and names in the record paragraph.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Name your three readers aloud with equal weight, and do not drop your voice on the third.** ⚠ The room says whether it heard three readers or two and an afterthought. Then the sentence the cycle ends on, which is Mrs Shaaban\'s: **Mr Ayoub read it twice and asked me on the telephone what he was supposed to do.**'));
out.push(hw('Write the page (80+ words). ⚠ Then go back to the piece you brought and **send its actor one line: the imperative and the date.** Write down how long it is. **Nine words is the target and nobody needs more than fifteen.**'));

// ===================== 11.2 =====================
out.push(pb());
out.push(h2('11.2  Same fact, three versions'));
out.push(p('**Function:** writing one fact three times at the same length   ·   **Grammar:** what is left out · _the point for you is_ · selection and not translation   ·   **Pronunciation:** the three versions read at the same speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one fact and say it three times, **in about twenty words each**: for the actor, for the approver, for the record. ⚠ Then your partner says **what was left out of each.** That question is the whole cycle, and most people answer it about the first version and not the other two.'));
out.push(board('I\'ll just explain it differently for each of them.', 'Three versions, twenty words each. The actor\'s leaves out the reason.'));
out.push(p('**b**  Which is the **record** version? **1** _Stamp every refused consignment from Monday._  **2** _About seventeen minutes a year and no change to policy._  **3** _Brought in on 30 January because refusal slips carried a tick and no date._  **4** _We have decided to make a small change._  **5** _The stamp is in the second drawer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the three versions differ in, and what does the class discover when the three are put side by side?   **A** in length; nothing   **B** **in what is left out, and not in what is said** — and the class discovers that **no sentence appears in all three**, and that each version is **the same fact with two thirds of it removed**   **C** in tone; that one is better'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the three versions must **not** be?   **2** What does Mr Attar say happens when you write one version and then adapt it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  What is left out', [
  ['Ms Huda', 'One fact, three versions, twenty words each. Mr Attar — the fact is that the forum will close the old thread on the first of March.'],
  ['Jad', '**Actor:** _Post your remaining replies in the old thread before 1 March; after that, use the new one._'],
  ['Jad', '**Approver:** _Closing the old thread costs nothing, loses no posts and stops the same question being answered twice._'],
  ['Jad', '**Record:** _The old thread was closed on 1 March because the same eleven questions were being answered in two places._'],
  ['Ms Huda', '**Now put the three side by side and tell me what they have in common.**'],
  ['Jad', '_(a pause)_ **Nothing.** Not one sentence appears in two of them. ⚠ **The date is in all three and nothing else is.**'],
  ['Ms Huda', '**Which is the finding of the cycle, and it is the one students do not expect: the three versions differ in what is left out, and not in what is said.** ⚠ **Each of them is the same fact with two thirds of it removed** — and the thirds removed are different thirds.'],
  ['Omar', 'So it is not rewriting. It is choosing.'],
  ['Ms Huda', '**It is selection and not translation, and that distinction decides whether the cycle is easy or impossible.** ⚠ A writer who thinks of it as translation **writes the same page three times in three registers**, which is three times the work and serves nobody: **the actor still has to read the reason and the approver still has to read the instruction.**'],
  ['Dima', 'And what goes wrong if you write one and then adapt it?'],
  ['Jad', 'I tried that first. ⚠ **You keep the shape of the first one.** I wrote the approver\'s version and then cut it down for the actor, **and what I got was the approver\'s version with the cost taken out** — which still opens with _closing the old thread_, where the actor needs _post your replies._'],
  ['Ms Huda', '**Which is why you write the actor\'s version first, every time, and not as a courtesy to the actor.** ⚠ **The actor\'s version is the shortest and the hardest to fake**, and a writer who has written it cannot then write a vague approver\'s paragraph: **they know what the thing actually is.**'],
  ['Hiba', 'Is there a fact that is the same for all three?'],
  ['Ms Huda', '**The date, usually, and nothing else.** ⚠ **It is worth checking that the date is identical in all three versions** — because it is the one thing that will be quoted back, and **three versions written separately are three chances to get it wrong.**'],
  ['Rim', 'And the length? Twenty words each is short.'],
  ['Ms Huda', '**The length is a discipline and not a rule.** Equal lengths force you to leave things out, ⚠ **and leaving things out is the skill**: a writer allowed forty words for the approver will put the reason in, **and the reason is the record reader\'s, not the approver\'s.**'],
  ['Mazen', 'What if the actor is also the approver?'],
  ['Ms Huda', '⚠ **Then you have two readers in one person and you still write two versions, one after the other on the page.** **A reader who has to do a thing and agree to it reads the two decisions separately**, and a page that mixes them makes the agreement conditional on the instruction being pleasant.'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Read the three at the same speed and in the same voice.** ⚠ **The temptation is to read the actor\'s version briskly and the record version slowly**, which puts a judgement into the delivery: **the three are equal and the room should hear them as three selections and not three attitudes.**'],
]));
out.push(sp());
out.push(box('Language box – three versions of one fact', [
  '**The finding, and it is not what students expect: the three versions differ in what is left out, and not in what is said.** ⚠ Mr Attar\'s three had **nothing in common but the date** — **not one sentence appeared in two of them.** **Each is the same fact with two thirds of it removed, and the thirds are different thirds.**',
  '**So it is selection and not translation**, and that distinction decides whether the cycle is easy or impossible. ⚠ A writer who treats it as translation **writes the same page three times in three registers** — three times the work, serving nobody: **the actor still has to read the reason and the approver still has to read the instruction.**',
  '**Write the actor\'s version first, every time, and not as a courtesy.** ⚠ **It is the shortest and the hardest to fake**, and a writer who has written it **cannot then write a vague approver\'s paragraph: they know what the thing actually is.**',
  '**What goes wrong if you write one and adapt it: you keep the shape of the first one.** ⚠ The approver\'s version cut down for the actor **is the approver\'s version with the cost taken out** — and it still opens with the decision where the actor needs the instruction.',
  '**Check that the date is identical in all three.** ⚠ **It is the one thing that will be quoted back**, and **three versions written separately are three chances to get it wrong.**',
  '**Equal lengths are a discipline and not a rule, and the discipline is the point.** ⚠ **A writer allowed forty words for the approver will put the reason in** — **and the reason is the record reader\'s, not the approver\'s.**',
  '**When the actor and the approver are the same person, you still write two versions, one after the other.** ⚠ **A reader who has to do a thing and agree to it reads the two decisions separately**, and a page that mixes them **makes the agreement conditional on the instruction being pleasant.**',
  '**And one test to use on your own three, which takes four seconds: cover the other two and ask whether anything is missing.** ⚠ If the actor\'s version alone leaves you wanting the reason, **you are reading as the record reader and not as the actor.** **Each version has to be complete for its own reader and incomplete for everybody else.**',
  '**Pronunciation.** 🔊 **Track 11.4** **The three at the same speed and in the same voice.** ⚠ Reading the actor\'s version briskly and the record version slowly **puts a judgement into the delivery** — **the three are equal, and the room should hear three selections and not three attitudes.**',
  '**Practise:** One fact, three versions, twenty words each. **1** a new step  **2** a refusal  **3** a date changed  **4** a request granted  **5** something that went wrong',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the fact from the card. B writes **three versions, about twenty words each**, in the order actor, approver, record. A then asks the question of the cycle: **what was left out of each?** ⚠ A also checks that **the date is identical in all three.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the fact)_ __________.'],
  ['B', '_(actor, ~20 words)_ __________.'],
  ['B', '_(approver, ~20 words)_ __________.'],
  ['B', '_(record, ~20 words)_ __________.'],
  ['A', 'Left out of the actor\'s: __________. Of the approver\'s: __________. Of the record: __________. **Date identical: yes / no.**'],
]));
out.push(table(['Card A – the fact', 'Card B – the fact'], [
  ['_The old forum thread will close on 1 March._', '_Refused consignments will be date-stamped from 6 February._'],
  ['_The second portion of disputed samples starts in February._', '_The expected admissions go on the handover sheet from tonight._'],
  ['_The enquiry form loses its second page on 1 April._', '_The promise field goes into the February release._'],
  ['_The observed lesson replaces the written paper this year._', '_The bracket will be printed on new refusals only._'],
  ['_The thin reference moves to the counter on Thursday._', '_The pencil board is replaced by a framed sheet at Harasta._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what was left out of each of the thirty versions, and whether the date was identical. Then the count: **the actor\'s version leaves out the reason in all ten**, which is correct; **the approver\'s version keeps the reason in six or seven**, which is the commonest fault. ⚠ And **the date differs between two versions in about two pairs in eight** — which is why the check is in the stage.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own three versions of one fact from your work, **twenty words each, actor first.** ⚠ Then do the covering test: **cover the other two and ask whether anything is missing.** **If the actor\'s version alone leaves you wanting the reason, you are reading as the record reader.**'));
out.push(p('**b**  Swap. Your partner puts your three side by side and **underlines everything that appears in more than one.** ⚠ **Anything underlined twice is either the date or a word you could have left out**, and the second kind is worth more than the first.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad took one fact — that the forum will close the old thread on the first of March — and wrote three versions of twenty words each. For the actor: post your remaining replies in the old thread before 1 March, and after that use the new one. For the approver: closing the old thread costs nothing, loses no posts, and stops the same question being answered twice. For the record: the old thread was closed on 1 March because the same eleven questions were being answered in two places. Asked what the three have in common, he said nothing — not one sentence appears in two of them, and the date is in all three and nothing else is. Which is the finding of the cycle and the one students do not expect: the three versions differ in what is left out and not in what is said, and each of them is the same fact with two thirds of it removed, where the thirds removed are different thirds. Omar said so it is not rewriting, it is choosing, and it is selection and not translation — a distinction that decides whether the cycle is easy or impossible, because a writer who thinks of it as translation writes the same page three times in three registers, which is three times the work and serves nobody. Dima asked what goes wrong if you write one and then adapt it, and Jad had tried that first: you keep the shape of the first one. He wrote the approver\'s version and cut it down for the actor, and what he got was the approver\'s version with the cost taken out, still opening with closing the old thread where the actor needs post your replies. Which is why you write the actor\'s version first, every time, and not as a courtesy to the actor: it is the shortest and the hardest to fake, and a writer who has written it cannot then write a vague approver\'s paragraph, because they know what the thing actually is. Hiba asked whether anything is the same for all three, and the date usually, and nothing else — which is worth checking, because it is the one thing that will be quoted back and three versions written separately are three chances to get it wrong. And Mazen asked what happens when the actor is also the approver, and then you have two readers in one person and you still write two versions, one after the other on the page._'));
out.push(p('**Listener task:** write your partner\'s three versions in figures — the word count of each — and what was left out of each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad posts with the three versions printed one under the other. Answer the questions.'));
out.push(model([
  '**CLOSING THE OLD THREAD · the same thing said three ways** · J. Attar · 4 February',
  '**I am printing three versions of one announcement, because the forum has three kinds of reader and I have spent two years writing for one of them.** The three are below, twenty-one, twenty and twenty-three words. **The only thing in all three is the date.**',
  '**For anybody who posts here.** _Post your remaining replies in the old thread before 1 March. After that date, use the new thread; nothing will be deleted._',
  '**For the two editors who have to agree to it.** _Closing the old thread costs nothing, loses no posts, and stops the same eleven questions being answered in two places._',
  '**For whoever reads this in two years.** _The old thread was closed on 1 March 2024 by Raed and Anas, because the same eleven questions were being answered in two places._',
  '**What is left out of each, and this is the part I had not noticed until I wrote them separately.** The first leaves out **the reason** and both names. The second leaves out **the instruction** — an editor does not post. ⚠ **The third leaves out everything anybody has to do**, because in two years there will be nothing to do: **there will only be a question about why.**',
  '**What I did wrong for two years.** I wrote the editors\' version and then shortened it for everybody else. ⚠ **What I got was the editors\' version with the arithmetic taken out**, which still began with _closing the old thread_ — **and a man who wants to know where to post does not care what it is called.**',
  '**And the one check that caught something.** The date. ⚠ **My first drafts had 1 March in two of them and 1 April in the third**, and I had written all three in the same ten minutes. **Three versions written separately are three chances to get the date wrong**, and I should have expected that and did not.',
  '**One more thing I had not expected, and it is the reason I am posting this rather than simply using it.** The version I found hardest to write was **the third**, and not because it is the longest. ⚠ **It is the only one of the three that nobody had ever asked me for** — no reader of this forum has ever written to ask why a thread was closed, **and in two years somebody will, and there will be nobody left to ask.**',
]));
out.push(item('1', 'How many words is each version, and what is the only thing in all three?'));
out.push(item('2', 'What is left out of each of the three?'));
out.push(item('3', 'What did he do wrong for two years, and what did the date check catch?'));
out.push(writers([
  'A page with three versions printed: **why you are printing three** → **the actor\'s version** → **the approver\'s** → **the record reader\'s** → **what is left out of each, named** → **what you used to do instead** → **and the one check that caught something**.',
  '⚠ **Print the word counts.** _Twenty-one, twenty and twenty-three._ **Equal lengths are the evidence that the three are selections and not a long version and two summaries** — and a reader who sees three different lengths assumes a hierarchy you did not intend.',
  '**Name what each version leaves out, in the writer\'s own words.** _The second leaves out the instruction — an editor does not post._ ⚠ **This is the paragraph that teaches the technique to the next person**, and it is the one most writers skip because it feels like showing the working.',
  '⚠ **Say what you used to do instead, and what it produced.** _The editors\' version with the arithmetic taken out._ **A confession of method is worth more than a rule**, because the reader recognises their own habit in it and cannot recognise a rule.',
  '**End on the check that caught something real.** _1 March in two of them and 1 April in the third._ ⚠ A page that ends on a rule is believed; **a page that ends on an error the rule caught is used.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with three versions (80 words or more).'));
out.push(p('**______________ · the same thing said three ways** · ______________ · ______________   **I am printing three versions of one ______________, because ______________.** The three are below, ______, ______ and ______ words. **The only thing in all three is ______________.**   **For ______________.** _______________.   **For ______________.** _______________.   **For whoever reads this in two years.** _______________.   **What is left out of each.** The first leaves out ______________. The second leaves out ______________. ⚠ **The third leaves out ______________**, because ______________.   **What I did instead, before this.** ______________. ⚠ ______________.   **And the one check that caught something.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three versions, word counts printed and within a few words of each other',
  'What each version leaves out, named by the writer',
  'The date identical in all three',
  'The old method named, with what it produced',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three versions at the same speed, and the room says which reader each was for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: three versions with their word counts, what each leaves out, your old method, and the check.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three versions within a few words of each other, what each leaves out named, the date identical in all three.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the three at the same speed and in the same voice.** ⚠ The room says whether it heard three selections or three attitudes. Then the sentence the cycle ends on, which is Mr Attar\'s: **my first drafts had 1 March in two of them and 1 April in the third, and I had written all three in the same ten minutes.**'));
out.push(hw('Write your three versions of one real fact and send **each one to its own reader.** ⚠ Then write down which of the three you found hardest. **It is the record reader\'s in most cases, and the reason is that nobody has ever asked you for it.**'));

// ===================== 11.3 =====================
out.push(pb());
out.push(h2('11.3  What the actor needs'));
out.push(p('**Function:** writing the actor\'s version   ·   **Grammar:** imperative + trigger · the fallback · who to ask · no passive   ·   **Pronunciation:** the instruction read once, with the trigger stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give your partner an instruction from your own work in **four parts**: the action, the trigger, the fallback, and who to ask. ⚠ Then **hand them the written version and ask them to tell you what they would do.** The test of an actor\'s version is not whether it is clear; it is **whether somebody who has never seen it can act on it.**'));
out.push(board('A date stamp is to be applied to refused consignments.', 'Stamp the date on every consignment you refuse. No stamp: write it by hand and tell me that day.'));
out.push(p('**b**  Which could an actor work from? **1** _A date stamp is to be applied to refused consignments._  **2** _Stamp the date on every consignment you refuse._  **3** _The recording of refusal dates will commence shortly._  **4** _When a consignment is refused, stamp the date on the gate copy; if the stamp is missing, write it by hand._  **5** _Please ensure appropriate records are maintained._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What four parts does Ms Huda say an actor\'s version has, and what does Sister Barakat say about the passive?   **A** three parts; nothing   **B** **the action in the imperative, the trigger, the fallback and who to ask** — and Rasha says **a passive instruction has no actor in it**, so on a ward at four in the morning it is done by nobody, **and the sentence is not wrong, it is empty**   **C** five parts; it is more polite'));
out.push(p('**b**  Listen again. **1** When does Ms Huda say a condition is a better trigger than a date?   **2** What is the one exception to leaving the reason out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  Four parts and no passive', [
  ['Ms Huda', 'Sister Barakat sends her pages in and does not come to the class, and she has sent us the clearest instruction in this book. Mrs Khoury, read it.'],
  ['Dima', '_"When a patient is expected and has not arrived, write the name and the expected hour at the foot of the sheet. If there is no room, write it on the back and draw an arrow. Ask me, not the day sister."_'],
  ['Ms Huda', '**Four parts, and they are the four parts of every actor\'s version.** **The action**, in the imperative. **The trigger** — _when a patient is expected and has not arrived._ **The fallback** — _if there is no room._ ⚠ **And who to ask**, which is the part everybody leaves out.'],
  ['Omar', 'Why does the fallback matter so much? It is an unusual case.'],
  ['Ms Huda', '**Because an instruction with no fallback produces either a telephone call or nothing** — ⚠ **and at four in the morning on a ward it produces nothing.** A fallback costs eight words and it is the difference between an instruction that works on a bad night and one that works on a good one.'],
  ['Dima', 'She has written to me about the passive before.'],
  ['Ms Huda', 'Say what she says.'],
  ['Dima', '⚠ **_The expected admissions are to be recorded_ has no actor in it.** On a ward at four in the morning it is done by nobody. **The sentence is not wrong — it is empty**, and she says she can tell from the first three words whether a notice came from somebody who has worked a night.'],
  ['Ms Huda', '**And the general rule behind it, which is this cycle in one line: an actor\'s version has no passive in it anywhere.** ⚠ Not as a matter of style: **a passive removes the person who has to act**, and the actor\'s version is the one version of the three whose whole job is to name them.'],
  ['Jad', 'And one action a sentence?'],
  ['Ms Huda', '**One action a sentence, always.** ⚠ _Stamp the date and enter it in the book and tell the office_ is three actions, **and in practice one of them gets done** — usually the first. **Three sentences, three actions, and the actor can stop after each one.**'],
  ['Hiba', 'When is a date the wrong trigger?'],
  ['Ms Huda', '**Whenever the thing happens irregularly.** _From Monday_ is a trigger for something that happens every day. ⚠ **_When a consignment is refused_ is a trigger for something that happens about once a fortnight** — and a man told _from Monday_ about a fortnightly event **has to remember a rule**, where a man told _when it happens_ only has to notice.'],
  ['Rim', 'And the reason? You said to leave it out.'],
  ['Ms Huda', '**Leave it out, with one exception, and the exception matters.** ⚠ **If the action looks wrong, the actor needs one clause of reason or they will correct it.** _Stamp the date on the gate copy and not on the manifest — the manifest goes to the customer._ **Eight words**, and without them a sensible man stamps the manifest, **because the manifest is the obvious place.**'],
  ['Mazen', 'What else goes out?'],
  ['Ms Huda', '**The cost and the approval.** ⚠ An actor who reads _the directorate has approved this_ has been told that somebody might not have, **and an actor who reads the cost has been handed an argument.** **Neither is theirs**, and both belong in the approver\'s paragraph.'],
  ['Lubna', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Once, at normal speed, with the stress on the trigger.** _**When** a patient is expected and has not arrived…_ ⚠ **An instruction repeated aloud is heard as doubt about whether it will be done**, and on a ward that is worse than not saying it twice.'],
]));
out.push(sp());
out.push(box('Language box – the actor\'s four parts', [
  '**Four parts, and Sister Barakat\'s page has all four in thirty-eight words.** **1 The action**, in the imperative. **2 The trigger.** **3 The fallback.** ⚠ **4 Who to ask** — _ask me, not the day sister_ — **which is the part everybody leaves out.**',
  '**No passive, anywhere in the actor\'s version.** ⚠ _The expected admissions are to be recorded_ **has no actor in it**; on a ward at four in the morning **it is done by nobody.** **The sentence is not wrong — it is empty.**',
  '**One action a sentence, always.** ⚠ _Stamp the date and enter it in the book and tell the office_ is three actions, **and in practice one gets done** — usually the first. **Three sentences, three actions, and the actor can stop after each.**',
  '**A condition beats a date whenever the thing happens irregularly.** _From Monday_ suits a daily thing. ⚠ **_When a consignment is refused_ suits a fortnightly one** — **a man told _from Monday_ has to remember a rule; a man told _when it happens_ only has to notice.**',
  '**The fallback costs eight words and it is not for unusual cases.** ⚠ **An instruction with no fallback produces either a telephone call or nothing — and at four in the morning it produces nothing.** It is the difference between an instruction that works on a bad night and one that works on a good one.',
  '**Leave the reason out, with one exception: if the action looks wrong, give one clause of reason or the actor will correct it.** ⚠ _Stamp the gate copy and not the manifest — the manifest goes to the customer._ **Eight words**, and without them **a sensible man stamps the manifest, because the manifest is the obvious place.**',
  '**And leave the cost and the approval out.** ⚠ An actor who reads _the directorate has approved this_ **has been told that somebody might not have**; an actor who reads the cost **has been handed an argument.** **Neither is theirs.**',
  '**The test, and it is not whether the instruction is clear.** ⚠ **Hand it to somebody who has never seen it and ask them what they would do.** **A version that passes that test is finished and a version that does not is not**, however well it reads to the writer.',
  '**Pronunciation.** 🔊 **Track 11.6** **Once, at normal speed, with the stress on the trigger:** _**when** a patient is expected and has not arrived…_ ⚠ **An instruction repeated aloud is heard as doubt about whether it will be done**, which is worse than saying it once.',
  '**Practise:** Four parts, one action a sentence. **1** something to stamp  **2** something to write down  **3** something to hand over  **4** where the obvious place is wrong  **5** where the trigger is a condition and not a date',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the instruction from the card **as it was written.** B rewrites it in **four parts** — action, trigger, fallback, who to ask — with **no passive and one action a sentence.** A then does the test: **says what they would actually do**, as somebody who has never seen it. ⚠ **Two rows on each card need the _why-not-the-obvious-thing_ clause**; B must spot them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as written)_ __________.'],
  ['B', '_(action + trigger)_ __________, when __________.'],
  ['B', '_(fallback)_ If __________, __________.'],
  ['B', '_(who to ask)_ Ask __________.'],
  ['A', '_(the test)_ What I would do is __________. ⚠ **Which is / is not what you meant.**'],
]));
out.push(table(['Card A – as written', 'Card B – as written'], [
  ['_A date stamp is to be applied to refused consignments._', '_Expected admissions are to be recorded on the handover sheet._'],
  ['_⚠ Refusal dates are to be entered on the gate copy._ _(not the manifest — the manifest goes to the customer)_', '_⚠ The code is to be entered on the rejection slip._ _(not the delivery note — the note stays with us)_'],
  ['_Members are reminded to maintain accurate records of promises._', '_Staff should ensure that samples are divided appropriately._'],
  ['_The second page of the form is to be discontinued._', '_The thin reference is to be relocated._'],
  ['_Replies should be posted in the appropriate thread._', '_The bracket is to be printed where applicable._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four parts for each of the ten, and whether the test passed. Then the count: **the fallback is missing from nine of the ten first attempts** and **who-to-ask from all ten.** ⚠ And the two rows marked ⚠ are the ones to dwell on: **without the one clause of reason, the test produces the wrong action in both** — and the actor who does the wrong thing is being sensible.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the actor\'s version of something from your own work, in four parts, **one action a sentence and no passive anywhere.** ⚠ Then count the passives. **Most people find one they did not see**, usually in the fallback.'));
out.push(p('**b**  Swap, and do the test properly: **read your partner\'s version once and then say what you would do**, as somebody who has never seen it. ⚠ **Do not ask questions and do not be helpful.** The silences are the finding.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Sister Barakat sends her pages in and does not come to the class, and she has sent the clearest instruction in the book. Dima read it: when a patient is expected and has not arrived, write the name and the expected hour at the foot of the sheet; if there is no room, write it on the back and draw an arrow; ask me, not the day sister. Four parts, and they are the four parts of every actor\'s version — the action in the imperative, the trigger, the fallback, and who to ask, which is the part everybody leaves out. Omar asked why the fallback matters when it is an unusual case, and because an instruction with no fallback produces either a telephone call or nothing, and at four in the morning on a ward it produces nothing: a fallback costs eight words and it is the difference between an instruction that works on a bad night and one that works on a good one. Dima said Rasha has written to her about the passive before, and what she says is that the expected admissions are to be recorded has no actor in it, so on a ward at four in the morning it is done by nobody — the sentence is not wrong, it is empty, and she can tell from the first three words whether a notice came from somebody who has worked a night. And the general rule behind it is this cycle in one line: an actor\'s version has no passive in it anywhere, not as a matter of style but because a passive removes the person who has to act. Jad asked about one action a sentence, and it is one action a sentence always, because stamp the date and enter it in the book and tell the office is three actions and in practice one of them gets done. Hiba asked when a date is the wrong trigger, and whenever the thing happens irregularly: a man told from Monday about a fortnightly event has to remember a rule, where a man told when it happens only has to notice. Rim asked about the reason, and leave it out with one exception, and the exception matters — if the action looks wrong, the actor needs one clause of reason or they will correct it: stamp the gate copy and not the manifest, because the manifest goes to the customer. And Mazen asked what else goes out, and the cost and the approval, because an actor who reads that the directorate has approved this has been told that somebody might not have._'));
out.push(p('**Listener task:** write your partner\'s four parts and what you would actually have done.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha Barakat sends in to the ward, which the class is given as the model of an actor\'s version. Answer the questions.'));
out.push(model([
  '**THE FOOT OF THE HANDOVER SHEET · what to do, from tonight** · R. Barakat · 6 February',
  '**When a patient is expected and has not arrived, write the name and the expected hour at the foot of the sheet.** One line each. **If there is no room at the foot, write it on the back and draw an arrow at the bottom of the front.**',
  '**Write it at the foot and not in the patient columns.** ⚠ The columns are for patients who are here, and a name in a column means a bed that is occupied — **so a name in a column for somebody who has not arrived will be acted on.** That is the whole reason and it is the only reason on this page.',
  '**If you do not know the expected hour, write the name and a dash.** A name with a dash is worth having. **A name with a guessed hour is worse than nothing**, because the day staff will plan round the guess and then be annoyed with the night.',
  '**If the patient arrives before you go off, cross the line out and put your initials beside it.** ⚠ **Do not rub it out.** A crossed line with initials tells the morning that somebody looked; **a clean sheet tells them nothing, and they cannot tell the difference between nothing expected and nobody looking.**',
  '**Ask me, and not the day sister.** I am on four nights in seven and the day sister has not seen the foot of the sheet. **If I am not on, write it anyway and leave a note on my desk.**',
  '**And one thing I am not asking for.** ⚠ **I am not asking anybody to telephone anybody.** The sheet is enough. **If this becomes a thing that involves a telephone call at three in the morning, it will stop happening within a fortnight** and I shall have made the sheet worse than it was.',
  '**The two boxes I have taken off to make room.** The bed number and the admitting date, **both of which are on the chart.** ⚠ Nobody has used either of them on a handover in the four years I have been doing this, **and I put them there myself in 2021.**',
]));
out.push(item('1', 'What is the action and the trigger, and what is the fallback if there is no room?'));
out.push(item('2', 'Why must the name go at the foot and not in the columns?'));
out.push(item('3', 'What should be done if the patient arrives before the night ends, and why not rub the line out?'));
out.push(writers([
  'An actor\'s page: **the action and the trigger first** → **the fallback for no room** → **one clause of reason, where the obvious place is wrong** → **the fallback for not knowing** → **what to do if it changes** → **who to ask** → **what you are not asking for** → **and what you took away to make room**.',
  '⚠ **Put the trigger before the action when the trigger is a condition.** _When a patient is expected and has not arrived, write…_ **The actor reads the condition, recognises the situation, then reads what to do** — and in that order the instruction is used; in the other order it is remembered or not.',
  '**Give a reason only where the obvious place is wrong, and say so.** _The columns are for patients who are here… that is the whole reason and it is the only reason on this page._ ⚠ **Naming it as the only reason stops the actor hunting for others.**',
  '**Write a fallback for every way it can fail**, and there are usually three: **no room, not knowing, and the situation changing.** ⚠ _A name with a dash is worth having; a guessed hour is worse than nothing._ **A fallback that explains itself is obeyed.**',
  '⚠ And **say what you are not asking for, when the obvious escalation is a telephone call.** _If this becomes a telephone call at three in the morning, it will stop happening within a fortnight._ **An instruction that fences its own escalation survives**; one that does not is improved into uselessness by its readers.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the actor\'s page (80 words or more).'));
out.push(p('**______________ · what to do, from ______________** · ______________ · ______________   **When ______________, ______________.** ______________. **If ______________, ______________.**   **Do it ______________ and not ______________.** ⚠ ______________ — **that is the whole reason and it is the only reason on this page.**   **If you do not know ______________, ______________.** ______________ is worth having. **______________ is worse than nothing**, because ______________.   **If ______________ before ______________, ______________.** ⚠ **Do not ______________.** ______________.   **Ask ______________, and not ______________.** **If I am not ______________, ______________.**   **And one thing I am not asking for.** ⚠ ______________.   **What I have taken away to make room.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The trigger before the action, and the action in the imperative',
  'No passive anywhere, including in the fallbacks',
  'Three fallbacks: no room, not knowing, the situation changing',
  'Who to ask, and what to do if they are not there',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first sentence only, and the room says what it would do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full actor\'s page (180 words or more), to the shape in the writer\'s box: the trigger first, the one clause of reason, the three fallbacks, who to ask, and the escalation you are not asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no passive anywhere, one action a sentence, a fallback for each way the instruction can fail.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your instruction once, at normal speed, with the stress on the trigger, and do not repeat it.** ⚠ Then the partner says what they would do, and the room counts the pauses. Then the sentence the cycle ends on, which is Sister Barakat\'s: **a clean sheet tells them nothing, and they cannot tell the difference between nothing expected and nobody looking.**'));
out.push(hw('Write the actor\'s page (80+ words) and **give it to somebody who has never seen it.** ⚠ Ask them what they would do, write down what they say, and change the page and not the person. **Keep the first version; 11.5 uses the pair.**'));

// ===================== 11.4 =====================
out.push(pb());
out.push(h2('11.4  What the approver needs'));
out.push(p('**Function:** writing the approver\'s version   ·   **Grammar:** _I am asking you to_ · what it costs · what it does not change · the one risk · the alternative declined   ·   **Pronunciation:** the ask said once'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner to approve something, in **one sentence with a verb they can actually do.** ⚠ Then your partner asks the approver\'s real question, which is not about cost: **what else moves?** Most asks cannot answer it, and the ones that can are approved.'));
out.push(board('I\'d be grateful for your support on the stamp.', 'I am asking you to tell the registry that the stamp is approved. It changes no policy.'));
out.push(p('**b**  Which is an ask an approver can act on? **1** _I would welcome your support._  **2** _I am asking you to sign the attached and return it by Thursday._  **3** _Perhaps you might consider the proposal favourably._  **4** _I am asking you to tell the registry that new refusals carry the bracket._  **5** _Your views on this would be appreciated._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the approver\'s real question is, and what does Mr Barghouti find out about his own three requests?   **A** what it costs; they were too short   **B** **what else moves** — and Adnan finds that all three of his requests answered the cost and **none of them said what the change does not touch**, which is the question the head of section was actually asking   **C** who else approved it; they were refused on cost'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say you must name the one risk yourself?   **2** What does she say about asking twice in the same page?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  What else moves', [
  ['Ms Huda', 'Mr Barghouti. Three requests about the bracket, three refusals, and all three refusals in the same words.'],
  ['Adnan', '_"Not at present."_ Three times, in eleven months. And the ask from the third one was: _"I should be grateful for the section head\'s support for the printing of originating offices on refusal letters."_'],
  ['Ms Huda', '⚠ **_Support_ is not a thing anybody can do.** **What did you want him to actually do?**'],
  ['Adnan', '_(a pause)_ Tell the registry to add the line to the template. **That is all. One instruction to one clerk.**'],
  ['Ms Huda', '**Then that is the ask, and it is eleven words: _I am asking you to tell the registry to add the line._** ⚠ **An approver reads for the verb they will have to perform.** _Support_, _consider_, _look favourably on_ — **none of them is a verb an approver can do**, and a page without one is read as a page that has not decided what it wants.'],
  ['Omar', 'And then the cost.'],
  ['Ms Huda', '**And then the thing that is not the cost, and this is the cycle.** ⚠ **The approver\'s real question is: what else moves?** An approver is paid to worry about **what you have not thought of** — **the next request that this one makes possible**, the other office that will ask for the same, the thing that becomes a precedent.'],
  ['Adnan', 'All three of my requests answered the cost. **Not one of them said what it does not touch.**'],
  ['Ms Huda', '**So the sentence to write is 9.2\'s sentence, in a different room.** _It changes nothing about the refusal policy, it creates no new record, and it applies only to decisions taken from the date of approval._ ⚠ **Three things it does not touch**, and the head of section\'s objection was about the third.'],
  ['Dima', 'And the risk? Do you name it or wait to be asked?'],
  ['Ms Huda', '**Name it, and name only the one.** ⚠ **An approver who finds a risk you did not name stops reading** — not because the risk is large, **but because they now have to look for the others themselves**, and that is a different and much slower job than reading your page.'],
  ['Jad', 'And the alternative?'],
  ['Ms Huda', '**Name it and decline it, which is 9.3.** _A refusals register was the alternative; it is a new document and needs somebody to keep it, and I am not asking for it._ ⚠ **An approver who thinks of the alternative themselves will propose it**, and you will spend a month on a thing you had already rejected in four seconds.'],
  ['Hiba', 'How many times do you ask?'],
  ['Ms Huda', '**Once.** ⚠ **An ask repeated in the last paragraph reads as doubt about the first one** — and an approver who meets it twice concludes that the writer expects a refusal, **which is a reasonable thing to conclude and is usually correct.**'],
  ['Rim', 'And what goes out of the approver\'s version?'],
  ['Ms Huda', '**The instruction and the history.** ⚠ An approver does not need to know what the gate man does with the stamp, **and the eleven months of asking are yours and not theirs**: they belong in the record reader\'s paragraph, **where they are a fact and not a complaint.**'],
  ['Mazen', 'And saying the ask aloud?'],
  ['Ms Huda', '🔊 **Once, flat, and then stop talking.** ⚠ A speaker who follows the ask with a sentence of justification has reopened it, **and the room hears somebody who expects to be refused.**'],
]));
out.push(sp());
out.push(box('Language box – the approver\'s five parts', [
  '**Five parts.** **1 The ask**, in one sentence, **with a verb the approver can perform.** **2 What it costs.** ⚠ **3 What it does not change.** **4 The one risk, named by you.** **5 The alternative, named and declined.**',
  '**_Support_ is not a thing anybody can do.** ⚠ **An approver reads for the verb they will have to perform.** _Support · consider · look favourably on_ — **none is a verb an approver can do**, and a page without one **is read as a page that has not decided what it wants.** _I am asking you to tell the registry to add the line_ is eleven words.',
  '**The approver\'s real question is not the cost. It is: _what else moves?_** ⚠ An approver is paid to worry about **what you have not thought of** — **the next request this one makes possible**, the other office that will ask for the same, the thing that becomes a precedent.',
  '**So write the sentence of 9.2 in a different room: what it does not touch.** _It changes nothing about the refusal policy, creates no new record, and applies only to decisions taken from the date of approval._ ⚠ **Three things**, and Mr Barghouti\'s section head had been objecting to the third all along.',
  '**Name the one risk yourself, and only the one.** ⚠ **An approver who finds a risk you did not name stops reading** — not because the risk is large, **but because they now have to look for the others themselves**, which is a much slower job than reading your page.',
  '**Name the alternative and decline it.** _A refusals register; it is a new document and needs somebody to keep it, and I am not asking for it._ ⚠ **An approver who thinks of the alternative themselves will propose it**, and you will spend a month on a thing you rejected in four seconds.',
  '**Ask once.** ⚠ **An ask repeated in the last paragraph reads as doubt about the first one**, and an approver who meets it twice concludes the writer expects a refusal — **which is a reasonable conclusion and is usually correct.**',
  '**And what goes out: the instruction and the history.** ⚠ An approver does not need to know what the gate man does with the stamp, **and your eleven months of asking are yours and not theirs**: they belong in the record reader\'s paragraph, **where they are a fact and not a complaint.**',
  '**Pronunciation.** 🔊 **Track 11.8** **The ask once, flat, and then stop talking.** ⚠ A speaker who follows the ask with a sentence of justification **has reopened it**, and the room hears somebody who expects to be refused.',
  '**Practise:** One ask with a verb the approver can do, then what it does not change. **1** a line on a template  **2** two hours of somebody\'s time  **3** a new field  **4** three days on site  **5** something refused three times already',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the ask from the card **as it was written.** B rewrites it with **a verb the approver can perform**, and then adds **what it does not change** — three things if there are three. A asks the approver\'s question: **what else moves?** B names **the one risk** and **the alternative, declined.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as written)_ __________.'],
  ['B', '_(the ask)_ I am asking you to __________.'],
  ['B', '_(what it does not change)_ It changes nothing about __________, it creates no __________, and it applies only to __________.'],
  ['A', 'What else moves?'],
  ['B', '_(the one risk)_ __________. _(the alternative, declined)_ __________, **and I am not asking for it.**'],
]));
out.push(table(['Card A – as written', 'Card B – as written'], [
  ['_I should be grateful for your support for the printing of originating offices._', '_Your views on the promise field would be welcome._'],
  ['_Perhaps the committee might consider the second portion favourably._', '_I hope the directorate will look kindly on the three days on site._'],
  ['_It would be helpful to have agreement on the date stamp._', '_I trust the arrangement for the handover sheet will be acceptable._'],
  ['_⚠ I am asking you to sign the attached and return it by Thursday._', '_⚠ I am asking you to tell the registry that new refusals carry the bracket._'],
  ['_Some consideration of the enquiry form would be appreciated._', '_I should like to raise the question of the thin reference._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the verb in each of the ten asks, and whether an approver could perform it. Then the count: **eight of the ten have no performable verb** — and the two marked ⚠ are the only two an approver could act on **without first deciding what was being asked.** ⚠ And the second finding: **nobody names a risk until asked**, in any of the ten.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own ask in **one sentence with a performable verb**, and then write **what it does not change** in three items. ⚠ **If you cannot find three, write the ones you have and mark the gap** — a writer who invents a third has told the approver something they will check.'));
out.push(p('**b**  Swap. Your partner is the approver and asks **what else moves?** once. ⚠ **Write down what they name**, because **it is almost always something you had not thought of**, and it is the paragraph your page is missing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan had made three requests about the bracket and had three refusals, all three in the same words: not at present, three times in eleven months. Asked to read the ask from the third one, he read: I should be grateful for the section head\'s support for the printing of originating offices on refusal letters. And support is not a thing anybody can do — so what did he want the man to actually do? Tell the registry to add the line to the template. That is all: one instruction to one clerk. So that is the ask, and it is eleven words — I am asking you to tell the registry to add the line — because an approver reads for the verb they will have to perform, and support, consider and look favourably on are none of them verbs an approver can do: a page without one is read as a page that has not decided what it wants. Omar said and then the cost, and then the thing that is not the cost, which is the cycle: the approver\'s real question is what else moves, because an approver is paid to worry about what you have not thought of — the next request this one makes possible, the other office that will ask for the same, the thing that becomes a precedent. And Adnan said all three of his requests answered the cost and not one of them said what it does not touch. So the sentence to write is 9.2\'s sentence in a different room: it changes nothing about the refusal policy, it creates no new record, and it applies only to decisions taken from the date of approval — three things it does not touch, and the head of section\'s objection was about the third. Dima asked whether you name the risk or wait to be asked, and you name it, and only the one, because an approver who finds a risk you did not name stops reading: not because the risk is large but because they now have to look for the others themselves, which is a much slower job than reading your page. Jad asked about the alternative, and you name it and decline it, because an approver who thinks of the alternative themselves will propose it and you will spend a month on a thing you had already rejected in four seconds. And Hiba asked how many times you ask, and once: an ask repeated in the last paragraph reads as doubt about the first one._'));
out.push(p('**Listener task:** write your partner\'s ask, its verb, and what the approver named when asked what else moves.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the approver\'s version Adnan writes on the fourth attempt. Answer the questions.'));
out.push(model([
  '**THE BRACKET · one instruction, and what it does not touch** · A. Barghouti · 8 February',
  '**I am asking you to tell the registry to add one line to the refusal template: _originating office: ______ ._** That is the whole request. **One instruction to one clerk, and about twenty minutes of her time, once.**',
  '**What it costs after that.** Five words typed into each refusal by whoever signs it. ⚠ **About four seconds**, on a document that already takes between six and eleven minutes to prepare. **There is no second cost and I have looked for one.**',
  '**What it does not change, and this is the part my three earlier requests left out.** **It changes nothing about the refusal policy.** **It creates no new record** — the line goes on a document that exists. ⚠ **And it applies only to decisions taken from the date of your approval**, so no applicant refused since 2019 acquires anything by it. **The third of those three is, I now believe, what you have been refusing.**',
  '**The one risk, and I can only find one.** A clerk entering the wrong office. ⚠ **That would put a wrong name on a refusal letter, which is worse than no name**, and the only answer I have is that the originating office is on the top of the file the clerk is already holding. **I am not claiming the risk is nothing. I am claiming it is one risk and it is visible.**',
  '**The alternative, and why I am not asking for it.** A refusals register at the registry counter, which is what I asked for in February. ⚠ **It is a new document, it needs somebody to keep it, and it would be the fourth book on that counter.** **I am not asking for it and I shall not ask for it again.**',
  '**And what I am not asking you to do.** Not to answer the letters this may bring — **that is the objection I have no answer to and it is in my page of 2 December, which stands.** Not to reopen anything. **Not to decide today.**',
  '**One sentence about the three earlier requests.** All three answered the cost and none of them said what the change does not touch. ⚠ **I think I have been answering a question about money that nobody was asking**, and I should have found that out in February and not in February a year later.',
]));
out.push(item('1', 'What exactly is he asking the approver to do, and what does it cost?'));
out.push(item('2', 'What three things does it not change, and which does he think was the real objection?'));
out.push(item('3', 'What is the one risk, and what is the alternative he is declining?'));
out.push(writers([
  'An approver\'s page: **the ask in one sentence, with a verb they can perform** → **what it costs after that** → **what it does not change, in three items** → **the one risk, named by you** → **the alternative, named and declined for good** → **what you are not asking them to do** → **and one sentence about the attempts that failed**.',
  '⚠ **Put the ask in the first sentence and make it small.** _Tell the registry to add one line._ **An approver reads the first sentence for the verb**, and one they can perform in a single instruction **is approved at a different speed from one they must interpret.**',
  '**Write _what it does not change_ in three items and expect the objection to be among them.** _No policy change · no new record · new decisions only._ ⚠ **Mr Barghouti\'s section head had refused the third for eleven months** without being told it was not being asked for.',
  '**Name the one risk and refuse to minimise it.** _I am not claiming the risk is nothing. I am claiming it is one risk and it is visible._ ⚠ **A named risk with its answer costs four lines; an unnamed one costs the page** — the approver has to look for the rest themselves.',
  '⚠ And decline the alternative **for good**: _I am not asking for it and I shall not ask for it again._ **_Again_ is what closes it** — without it the approver keeps the register in reserve, **and your small ask is answered against a large one you did not make.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the approver\'s page (80 words or more).'));
out.push(p('**______________ · one instruction, and what it does not touch** · ______________ · ______________   **I am asking you to ______________.** That is the whole request. **______________.**   **What it costs after that.** ______________. ⚠ **About ______________**, on ______________. **There is no second cost and I have looked for one.**   **What it does not change.** **It changes nothing about ______________.** **It creates no ______________.** ⚠ **And it applies only to ______________.**   **The one risk, and I can only find one.** ______________. ⚠ **I am not claiming the risk is nothing. I am claiming ______________.**   **The alternative, and why I am not asking for it.** ______________. **I am not asking for it and I shall not ask for it again.**   **And what I am not asking you to do.** ______________.   **One sentence about the earlier attempts.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The ask in the first sentence, with a verb the approver can perform',
  'What it does not change, in three items',
  'One risk named, with its answer and no minimising',
  'The alternative declined for good, in those words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their ask only, once, and the room says what verb the approver would have to perform.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full approver\'s page (180 words or more), to the shape in the writer\'s box: the performable ask, the cost, three things it does not change, the one risk, and the alternative declined for good.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a performable verb in the ask, three things it does not change, one risk named without minimising.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your ask once, flat, and then stop talking.** ⚠ The room counts how long the silence lasts before somebody fills it, **and the writer\'s own urge to add a justification is the thing to notice.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **I think I have been answering a question about money that nobody was asking.**'));
out.push(hw('Write the approver\'s page (80+ words). ⚠ Then ask one person who is not in this class the approver\'s question about your ask — **what else moves?** — and write down their answer. **If it is something you had not thought of, that is your missing paragraph**, and it is the commonest result.'));

// ===================== 11.5 =====================
out.push(pb());
out.push(h2('11.5  Which reader was this written for?'));
out.push(p('**Function:** naming the reader a page was written for   ·   **Grammar:** the tells — the passive · _it has been agreed_ · _in due course_ · the history first   ·   **Pronunciation:** the first line read, and the reader named'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the first line of something somebody sent **you** and name the reader it was written for. ⚠ Then take out the pair you kept from 11.3 — your own first version and the one you rewrote — and **name the reader of the first.** **It is usually the approver**, and you had sent it to an actor.'));
out.push(board('It\'s badly written, that\'s all.', 'It was written for the approver and sent to the man with the stamp.'));
out.push(p('**b**  Which reader was each written for? **1** _Following consultation, it has been agreed that the form will be amended in due course._  **2** _Stamp the date on every consignment you refuse._  **3** _The change was agreed on 30 January by Mr Saqqal, after the November count._  **4** _I have raised this three times since February and have had no reply._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give, and what fourth reader does Mr Hariri discover?   **A** reading it aloud; none   **B** **count the imperatives and count the dates** — and Mazen discovers a fourth reader nobody names: **the writer**, in a page that rehearses the writer\'s own difficulty, with the history in the first paragraph   **C** asking the sender; the approver'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say to do about somebody else\'s page, and what not to do?   **2** What is the tell for a page written for the writer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  Count the imperatives', [
  ['Ms Huda', 'Mr Hariri. The four notices on your counter this month. Read the first lines.'],
  ['Mazen', '_"It has been agreed that the enquiry form will be amended in due course."_ _"Staff are reminded of the importance of accurate recording."_ _"The question of the counter display has been considered at some length."_ And one more: _"Put the new price list in the window from the first of March."_'],
  ['Ms Huda', '**Now the test, and it is mechanical: count the imperatives and count the dates.**'],
  ['Mazen', 'The fourth has one imperative and one date. ⚠ **The other three have no imperative at all**, and only the fourth tells me to do anything.'],
  ['Ms Huda', '**And the readers?**'],
  ['Mazen', 'The first is for the approver — _it has been agreed_, passive, no actor. The second is for nobody I can identify. The third… ⚠ **the third is about the writer.** _Considered at some length_ is the writer telling me how much work it was.'],
  ['Ms Huda', '**Which is the fourth reader and nobody names it, so we shall: the writer.** ⚠ **A page written for the writer rehearses the writer\'s own difficulty**, and the tell is exact: **the history is in the first paragraph.** _I have raised this three times since February and have had no reply_ — **true, important to the writer, and of no use to any of the three readers.**'],
  ['Omar', 'Where should the history go?'],
  ['Ms Huda', '**The record reader\'s paragraph, where it is a fact.** ⚠ In the first paragraph it is a complaint; in the record paragraph **the same words are evidence** — _raised on 20 November, 18 January and 3 February; no reply._ **Same facts, two different sentences, and only one of them gets anybody anything.**'],
  ['Dima', 'And the tells for the other two? I use them all day. ⚠ **Approver: the passive, _it has been agreed_, the cost in the first paragraph, and _in due course_.** **Actor: imperatives, a trigger, a fallback, and no reasons.** **Record: dates, names and reasons, past tense throughout, and no imperative anywhere.** ⚠ **Four tells each and they are faster to count than to argue about.**'],
  ['Ms Huda', '**And _in due course_ is the single most reliable tell in working English.** ⚠ It means **the writer does not know the date**, and it is addressed to an approver, **because an actor who reads _in due course_ has been told to do nothing and an actor who reads it twice stops reading notices.**'],
  ['Jad', 'So what do you do when you get one of these?'],
  ['Ms Huda', '**Not rewrite it. You have no standing to rewrite somebody else\'s notice** ⚠ **and you will spend an afternoon on it.** **Ask the one question the version you needed would have answered.** For an actor that is six words: _what do I do, and when?_ **Four seconds to send and it works.**'],
  ['Hiba', 'Does it not sound rude?'],
  ['Ms Huda', '⚠ **It sounds like somebody who intends to do the thing**, which is the opposite of rude. **In four years I have never known that question to be answered badly** — and a writer who gets it twice about the same notice usually rewrites the notice themselves.'],
  ['Rim', 'And your own pages?'],
  ['Mazen', '**I counted my own.** ⚠ **Two imperatives in eleven pages**, and I had been complaining about the directorate\'s notices since August.'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Read the first line and then name the reader, flat and without comment.** ⚠ **Naming the reader is not a criticism of the writer**, and a speaker who sounds as though it is **has turned a mechanical test into an accusation**, which is 9.5 in a different room.'],
]));
out.push(sp());
out.push(box('Language box – the four tells and the fourth reader', [
  '**The test is mechanical: count the imperatives and count the dates.** ⚠ **An actor\'s page has imperatives. A record page has dates and names. An approver\'s page has figures and no imperative.** Mr Hariri\'s four notices: **one imperative between them.**',
  '**The tells, four each, and they are faster to count than to argue about.** **Approver:** the passive · _it has been agreed_ · the cost first · _in due course_. **Actor:** imperatives · a trigger · a fallback · no reasons. **Record:** dates · names · reasons · past tense and no imperative.',
  '**And the fourth reader, which nobody names: the writer.** ⚠ **A page written for the writer rehearses the writer\'s own difficulty**, and the tell is exact: **the history is in the first paragraph.** _I have raised this three times since February and have had no reply_ — **true, important to the writer, of no use to any of the three readers.**',
  '**Where the history belongs: the record reader\'s paragraph, where it is a fact.** ⚠ In the first paragraph it is a complaint; in the record paragraph **the same words are evidence** — _raised on 20 November, 18 January and 3 February; no reply._ **Same facts, two sentences, and only one of them gets anybody anything.**',
  '**_In due course_ is the single most reliable tell in working English.** ⚠ **It means the writer does not know the date**, and it is addressed to an approver — **because an actor who reads it has been told to do nothing, and an actor who reads it twice stops reading notices.**',
  '**What to do with somebody else\'s page: not rewrite it.** ⚠ **You have no standing to rewrite another office\'s notice and you will spend an afternoon on it.** **Ask the one question the version you needed would have answered.** For an actor: **_what do I do, and when?_** — six words, four seconds.',
  '**And it does not sound rude.** ⚠ **It sounds like somebody who intends to do the thing.** **In Ms Huda\'s four years that question has never been answered badly** — and a writer who gets it twice about one notice **usually rewrites the notice themselves.**',
  '**One thing to do before criticising anybody: count your own.** ⚠ Mr Hariri found **two imperatives in eleven pages** and had been complaining about the directorate\'s notices since August. **Everybody\'s first count is like that**, and the cycle is worthless without it.',
  '**Pronunciation.** 🔊 **Track 11.10** **Read the first line and name the reader, flat and without comment.** ⚠ **Naming the reader is not a criticism of the writer**, and a speaker who sounds as though it is **has turned a mechanical test into an accusation** — which is 9.5 in a different room.',
  '**Practise:** Name the reader and give the tell. **1** a notice with _in due course_ in it  **2** one with an imperative  **3** one with dates and names  **4** one that opens on its own history  **5** one of your own',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first line from the card. B counts the imperatives and the dates, names the reader, and **gives the tell.** B then says **which reader it was probably sent to**, and writes the six-word question an actor would send. ⚠ **Two rows on each card were written for the writer**; B must name the fourth reader. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the first line)_ __________.'],
  ['B', 'Imperatives: ______. Dates: ______. **Written for the __________**, and the tell is __________.'],
  ['B', 'Probably sent to the __________. ⚠ **Mismatch: yes / no.**'],
  ['B', '_(the question to send)_ __________?'],
]));
out.push(table(['Card A – the first line', 'Card B – the first line'], [
  ['_It has been agreed that the enquiry form will be amended in due course._', '_Staff are reminded of the importance of accurate recording._'],
  ['_⚠ The question of the counter display has been considered at some length._', '_⚠ I have raised this three times since February and have had no reply._'],
  ['_Put the new price list in the window from the first of March._', '_Stamp the date on every consignment you refuse._'],
  ['_The change was agreed on 30 January by Mr Saqqal, after the November count._', '_The old thread was closed on 1 March by Raed and Anas._'],
  ['_⚠ This has not been an easy matter to resolve._', '_⚠ After a great deal of thought, the following has been arrived at._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the reader and the tell for each of the ten, and the six-word question where there is a mismatch. Then the count: **two of the ten are for the actor, two for the record, two for the approver — and four were written for the writer.** ⚠ **Four out of ten is the usual proportion** and is worth putting on the board — **it includes pages the room has written.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Count the imperatives and the dates in **three pages of your own** — the pair from 11.3 and one more. ⚠ Write the two numbers for each page and the reader each was written for. **Do this before you look at anybody else\'s page**, because the order matters: **the count of your own is what makes the cycle usable.**'));
out.push(p('**b**  Swap, and name the reader of your partner\'s three pages from the counts alone, **without reading the pages through.** ⚠ Then read them. **The count is right in almost every case**, which is the point of having a mechanical test.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen read the first lines of the four notices on his counter this month: it has been agreed that the enquiry form will be amended in due course; staff are reminded of the importance of accurate recording; the question of the counter display has been considered at some length; and put the new price list in the window from the first of March. Then the test, which is mechanical — count the imperatives and count the dates. The fourth has one imperative and one date, the other three have no imperative at all, and only the fourth tells him to do anything. On the readers: the first is for the approver, because of it has been agreed, the passive and no actor; the second is for nobody he can identify; and the third is about the writer, because considered at some length is the writer telling him how much work it was. Which is the fourth reader, and nobody names it, so the class will: the writer. A page written for the writer rehearses the writer\'s own difficulty, and the tell is exact — the history is in the first paragraph. Omar asked where the history should go, and the record reader\'s paragraph, where it is a fact: in the first paragraph it is a complaint, and in the record paragraph the same words are evidence. Dima gave the tells, which she uses all day: approver — the passive, it has been agreed, the cost in the first paragraph, and in due course; actor — imperatives, a trigger, a fallback and no reasons; record — dates, names and reasons, past tense throughout and no imperative anywhere. And in due course is the single most reliable tell in working English, because it means the writer does not know the date and it is addressed to an approver: an actor who reads it has been told to do nothing, and an actor who reads it twice stops reading notices. Jad asked what you do when you get one, and not rewrite it — you have no standing to rewrite another office\'s notice and you will spend an afternoon on it. Ask the one question the version you needed would have answered, which for an actor is six words: what do I do, and when? Hiba asked whether it sounds rude, and it sounds like somebody who intends to do the thing. And Mazen counted his own: two imperatives in eleven pages, and he had been complaining about the directorate\'s notices since August._'));
out.push(p('**Listener task:** write your partner\'s three counts and the reader of each page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mazen writes after counting his own pages. Answer the questions.'));
out.push(model([
  '**ELEVEN PAGES AND TWO IMPERATIVES** · M. Hariri · 10 February',
  '**I have been complaining about the directorate\'s notices since August and this week I counted my own.** ⚠ **Eleven pages, two imperatives, and four dates.** **I shall not be making the complaint again in the same words.**',
  '**The test I used, and it takes about ten seconds a page.** Count the imperatives and count the dates. **An actor\'s page has imperatives; a record page has dates and names; an approver\'s page has figures and no imperative** — and a page with none of the three **was written for somebody who is not a reader at all.**',
  '**What my eleven turn out to be.** Two for the actor — the two with the imperatives, both about the window display. **One for the record**, which I wrote because a customer disputed a date. ⚠ **And eight for myself.** All eight open on the history: _I have asked about this three times_; _as I mentioned in September_; _this has not been an easy thing to arrange._',
  '**What the eight were really doing.** Rehearsing. ⚠ **I was writing down the difficulty of the thing because the difficulty was the part I was carrying**, and a page that does that is perfectly honest and reaches nobody. **The man who had to move the display could not tell from any of the eight whether to move it.**',
  '**Where the history should have gone, and I have moved it.** Into the last paragraph, with dates. _Asked on 2 September, 14 November and 6 January; no reply to any._ ⚠ **The same facts, and in the last paragraph they are evidence.** In the first paragraph they were a complaint, **and a complaint is a thing people answer and not a thing people act on.**',
  '**What I am doing about the directorate\'s four.** ⚠ **Not rewriting them.** I have sent six words about the one that matters: _what do I do, and when?_ **The answer came back the same afternoon with a date in it**, and the notice had been sitting on my counter for nine days.',
  '**And one thing I shall keep doing.** Counting. ⚠ **It takes ten seconds a page and it has told me more about my own writing in one week than four years of being annoyed by other people\'s.**',
]));
out.push(item('1', 'What are the three numbers he counted, and what does he say he will not do again?'));
out.push(item('2', 'What were eight of the eleven pages written for, and what were they doing?'));
out.push(item('3', 'What has he done about the directorate\'s notices, and what happened?'));
out.push(writers([
  'A note that counts your own pages: **the three numbers in the first two lines** → **the test, with the time it takes** → **what your own pages turn out to be** → **what the ones for yourself were doing** → **where the history has been moved to** → **what you are doing about other people\'s pages** → **and the one thing you will keep doing**.',
  '⚠ **Put the count first, with your own complaint beside it.** _Eleven pages, two imperatives, four dates. I shall not be making the complaint again in the same words._ **The count is the authority for the rest of the page**, and a reader who meets it first grants the rest.',
  '**Quote your own openings.** _I have asked about this three times; as I mentioned in September; this has not been an easy thing to arrange._ ⚠ **Three of your own sentences beat any description of the fault**: a reader recognises the shape and then finds it in their own drawer.',
  '**Name what the pages were doing, not what was wrong.** _Rehearsing._ ⚠ _I was writing down the difficulty because it was the part I was carrying_ — **a page that says why the fault happens is usable; one that says the fault is bad is not.**',
  '⚠ And end on **the result of the six-word question, with its figure.** _The answer came back the same afternoon, and the notice had been on my counter for nine days._ **One afternoon against nine days is the argument for asking instead of rewriting**, and needs no adjective.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that counts your own pages (80 words or more).'));
out.push(p('**______________ PAGES AND ______ IMPERATIVES** · ______________ · ______________   **I have been complaining about ______________ since ______________ and this week I counted my own.** ⚠ **______ pages, ______ imperatives, ______ dates.** ______________.   **The test I used, and it takes about ______________ a page.** ______________.   **What my ______ turn out to be.** ______ for the actor. ______ for the record. ⚠ **And ______ for myself.** All ______ open on ______________: _______________.   **What those were really doing.** ______________. ⚠ ______________.   **Where the history should have gone.** ______________. ⚠ **The same facts, and ______________.**   **What I am doing about ______________.** ⚠ **Not rewriting them.** ______________.   **And one thing I shall keep doing.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The three counts in the first two lines',
  'The writer\'s own openings quoted, at least three',
  'What the pages were doing, named rather than condemned',
  'The six-word question and what it produced, with a figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three counts only, and the room says which reader their pages were written for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the counts first, your own openings quoted, the history moved, and the result of asking rather than rewriting.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the counts in the first two lines, at least three of the writer\'s own openings quoted, the history moved to the record paragraph.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one first line aloud and then name its reader, flat and without any comment of your own.** ⚠ The room says whether it heard a mechanical test or an accusation about the writer. Then the figure the cycle ends on, which is Mr Hariri\'s: **two imperatives in eleven pages**, and he had been complaining about other people\'s notices since August.'));
out.push(hw('Count the imperatives and the dates in **five pages of your own** and write the two numbers for each. ⚠ Then send the six-word question — _what do I do, and when?_ — about one notice you are holding, **and write down how long the answer took.** **11.7 uses the figure.**'));

// ===================== 11.6 =====================
out.push(h2('11.6  One page, three layers'));
out.push(p('**Function:** writing one page that serves all three readers   ·   **Grammar:** the one-line summary · the heading that names its reader · the layers in order   ·   **Pronunciation:** the page read in layers, stopping at each'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say your fact **in one sentence of what and when** — that is the summary, and it goes at the top for all three readers. ⚠ Then say the three layer headings aloud, each **naming its reader.** _For Mr Ayoub, and this is the only part he needs._ **Naming the reader in the heading is the cheapest device in this book.**'));
out.push(board('I\'ll put it all in one note and hope for the best.', 'One line at the top. Then three layers, each headed with the reader\'s name.'));
out.push(p('**b**  Which heading names its reader? **1** _Background._  **2** _For Mr Ayoub, and this is the only part he needs._  **3** _General._  **4** _For whoever reads this in two years._  **5** _Further information._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What order does Ms Huda give for the three layers, and what does she say is the one thing never to do?   **A** record, approver, actor; nothing   **B** **actor, approver, record — shortest first and longest last** — and the one thing never to do is **write a single paragraph that tries to serve two readers**, because such a paragraph **is read by both and acted on by neither**   **C** approver, actor, record; use no headings'));
out.push(p('**b**  Listen again. **1** Why does Ms Huda say the record layer is the longest?   **2** What does she say transfers from this cycle to the examination essay?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  Shortest first, longest last', [
  ['Ms Huda', 'Mrs Sweidan. One page, three layers. Give me the order and the lengths.'],
  ['Lubna', '**Actor, approver, record. Shortest first and longest last.** My survey note is forty words, ninety and a hundred and sixty.'],
  ['Ms Huda', '**And the one line at the top, before the layers?**'],
  ['Lubna', '_The second survey runs on the 3rd, 4th and 5th of March._ ⚠ **One sentence, what and when, and it is the only thing all three readers need.**'],
  ['Ms Huda', '**Which is the architecture of the whole unit in four lines.** ⚠ **One summary. Three layers. Each layer headed with its reader named.** _For the site team, and this is the only part they need._ **A heading that names its reader is the cheapest device in this book**, and in a long page it is worth more than any amount of good prose.'],
  ['Omar', 'Why is the record layer the longest? It seems the least urgent.'],
  ['Ms Huda', '**Because it has to carry what nobody will remember.** ⚠ The actor will be in the room on the day; the approver will remember approving it for about a month. **The record reader has nothing but the page** — **and everything that was obvious at the time has to be written down, which is why it takes the most words.**'],
  ['Lubna', 'And it is the layer I write last and resent writing.'],
  ['Ms Huda', '**Everybody does, and there is a reason worth knowing: it is the only layer that does nothing for you now.** ⚠ The actor\'s layer gets the thing done, the approver\'s layer gets it allowed, **and the record layer is a gift to somebody who may be your own successor.** **It is also the layer that, two years later, is the only one anybody thanks you for.**'],
  ['Dima', 'What is the one thing never to do?'],
  ['Ms Huda', '⚠ **Write a single paragraph that tries to serve two readers.** _The date stamp, which the directorate has approved and which adds about nine seconds, should be applied from Monday._ **That is an instruction with an approval inside it** — **and it is read by both and acted on by neither**, because the actor hears a justification and the approver hears an order.'],
  ['Jad', 'How long can the whole page be?'],
  ['Ms Huda', '**One side, in working life, and about three hundred words.** ⚠ Longer and the actor stops at the heading of the second layer — **which is the right thing for them to do and means your summary was not at the top.** **The summary is what lets a long page be short for each reader.**'],
  ['Hiba', 'And what transfers to the examination? The essay has one reader.'],
  ['Ms Huda', '**It has one reader and four paragraphs, and what transfers is not the layering: it is the discipline.** ⚠ **Decide what each paragraph is for before you write it**, and write nothing in it that belongs in another. **A paragraph with two jobs loses the organisation mark** — and in an essay of two hundred words that is the commonest way to lose it.'],
  ['Rim', 'So the essay has layers too, in a sense.'],
  ['Ms Huda', '**Four, and they are fixed: your position, the first note, the concession paragraph, what follows.** ⚠ **The examination asks for a hundred and forty to a hundred and ninety words and this book writes a hundred and eighty to two hundred and twenty**, which you have done since Unit 1. **All the notes, and the candidate\'s own idea last.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Read the page in layers and stop at the end of each one.** ⚠ **At each stop, ask whether that reader has everything they need and nothing they do not.** **A layer that cannot be read alone has not been written yet**, and the stopping is the only way to hear it.'],
]));
out.push(sp());
out.push(box('Language box – one page in three layers, and this unit\'s two declared sets', [
  '**The architecture, in four lines.** **One summary at the top** — one sentence, what and when, **the only thing all three readers need.** **Then three layers: actor, approver, record** — **shortest first and longest last**, each **headed with its reader named.**',
  '**A heading that names its reader is the cheapest device in this book.** _For the site team, and this is the only part they need._ ⚠ In a long page **it is worth more than any amount of good prose**, because it tells each reader where to stop.',
  '**The record layer is the longest because it has to carry what nobody will remember.** ⚠ The actor was in the room; the approver remembers for about a month. **The record reader has nothing but the page**, so **everything obvious at the time has to be written down.**',
  '**And it is the layer everybody writes last and resents, for a reason worth knowing: it is the only layer that does nothing for you now.** ⚠ **It is also the layer that, two years later, is the only one anybody thanks you for.**',
  '**The one thing never to do: a single paragraph that tries to serve two readers.** ⚠ _The date stamp, which the directorate has approved and which adds about nine seconds, should be applied from Monday._ **An instruction with an approval inside it is read by both and acted on by neither** — **the actor hears a justification and the approver hears an order.**',
  '**One side and about three hundred words in working life.** ⚠ Longer, and the actor stops at the second heading — **which is the right thing for them to do and means the summary was not at the top.** **The summary is what lets a long page be short for each reader.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _pass on · copy in · chase up · flag up · see to · get on with · hold off · hand over · run past · take up with · check up on · put off_.',
  '**This unit\'s word-formation set** _(the unit check in 11.7 is built on it)_: _instruct → **instruction** · act → **action** · respond → **response** · delegate → **delegation** · brief → **briefing** · circulate → **circulation** · retain → **retention** · ambiguous → **ambiguity** · urgent → **urgency**._',
  '**And what transfers to the examination essay, which has one reader and four paragraphs: not the layering, the discipline.** ⚠ **Decide what each paragraph is for before you write it**, and write nothing in it that belongs in another. **A paragraph with two jobs loses the organisation mark**, and in two hundred words that is the commonest way to lose it. **Four fixed paragraphs: your position · the first note · the concession paragraph · what follows** — **140–190 asked, 180–220 written, all the notes, your own idea last.**',
  '**Pronunciation.** 🔊 **Track 11.12** **Read the page in layers and stop at the end of each.** ⚠ At each stop, **ask whether that reader has everything they need and nothing they do not.** **A layer that cannot be read alone has not been written yet.**',
  '**Practise:** One summary and three layer headings. **1** a survey  **2** a new step at a counter  **3** a refusal  **4** a date changed  **5** something you will have to write this week',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. A has the subject from the card. B gives **the one-line summary** and then **the three layer headings, each naming its reader**, in forty seconds. A then asks for **the first sentence of each layer** and says which reader could stop there. ⚠ **B must not put an approval inside an instruction**; A listens for it. Swap cards.'));
out.push(dlg(null, [
  ['B', '_(the summary)_ __________ **on __________.**'],
  ['B', '_(layer 1)_ For __________, and this is the only part they need: __________.'],
  ['B', '_(layer 2)_ For __________, who has to agree to it: __________.'],
  ['B', '_(layer 3)_ For whoever reads this in two years: __________.'],
  ['A', '_(time: ______ sec)_ The reader who could stop first is __________. ⚠ **Approval inside an instruction: yes / no.**'],
]));
out.push(table(['Card A – the subject', 'Card B – the subject'], [
  ['_The second survey, 3rd to 5th March_', '_The date stamp at the gate_'],
  ['_The promise field in the February release_', '_The expected admissions on the handover sheet_'],
  ['_The second portion of disputed samples_', '_The bracket on new refusals_'],
  ['_The old forum thread closing_', '_The thin reference moving to the counter_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** the summary and the three headings for each of the eight, and where an approval got inside an instruction. Then the count: **it happens in five or six of the eight** and almost always in the actor\'s layer. ⚠ And the second finding: **the summary is missing or is two sentences in about half** — and a two-sentence summary **is the first layer starting early.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the summary and the three layer headings for the thing you will use in 11.7, and then **the word count you intend for each layer.** ⚠ **Actor shortest, record longest**, and the three together under three hundred. **A plan with the record layer shortest is the commonest plan in the room and it is the wrong way round.**'));
out.push(p('**b**  Swap. Your partner reads each of your layers **and stops**, and at each stop says what that reader still needs. ⚠ **Write down what they say at the first stop**; it is nearly always a fallback.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna gave the order and the lengths: actor, approver, record — shortest first and longest last, and her survey note is forty words, ninety and a hundred and sixty. And the one line at the top, before the layers: the second survey runs on the 3rd, 4th and 5th of March — one sentence, what and when, and the only thing all three readers need. Which is the architecture of the whole unit in four lines: one summary, three layers, each layer headed with its reader named. A heading that names its reader is the cheapest device in the book, and in a long page it is worth more than any amount of good prose. Omar asked why the record layer is the longest when it seems the least urgent, and because it has to carry what nobody will remember: the actor will be in the room on the day and the approver will remember approving it for about a month, while the record reader has nothing but the page, so everything that was obvious at the time has to be written down. Lubna said it is the layer she writes last and resents writing, and everybody does, for a reason worth knowing — it is the only layer that does nothing for you now: the actor\'s layer gets the thing done, the approver\'s layer gets it allowed, and the record layer is a gift to somebody who may be your own successor. It is also the layer that, two years later, is the only one anybody thanks you for. Dima asked what the one thing never to do is, and it is to write a single paragraph that tries to serve two readers: the date stamp, which the directorate has approved and which adds about nine seconds, should be applied from Monday is an instruction with an approval inside it, and it is read by both and acted on by neither, because the actor hears a justification and the approver hears an order. Jad asked how long the whole page can be, and one side in working life and about three hundred words — longer and the actor stops at the heading of the second layer, which is the right thing for them to do and means the summary was not at the top. And Hiba asked what transfers to the examination, where the essay has one reader and four paragraphs: not the layering but the discipline — decide what each paragraph is for before you write it, because a paragraph with two jobs loses the organisation mark._'));
out.push(p('**Listener task:** write your partner\'s summary and three headings, and the intended word count of each layer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna writes for the second survey, in three layers. Answer the questions.'));
out.push(model([
  '**THE SECOND SURVEY · 3rd to 5th March** · L. Sweidan · 12 February',
  '**The second survey runs on the 3rd, 4th and 5th of March.** _(One line, and it is the only thing all three readers below need.)_',
  '**For the site team, and this is the only part you need.** Be at the north gate at half past seven on each of the three mornings. **Bring the long ladder on the first morning only.** If the gate is locked, go to the yard door and telephone me from there; **do not wait at the gate.** **Ask me, not the clerk of works** — he is not on site that week.',
  '**For the directorate, who have to agree to it.** **I am asking you to confirm the three days in writing before 24 February**, so that the yard is open. The three days cost **two people and the ladder**, which is the same as the first survey. ⚠ **It changes nothing about the scope, it adds no fee, and it does not touch the first survey\'s figures.** **The one risk is the weather**: three consecutive days in March, and if the second morning is lost we need the 6th as well — **which I am flagging up now rather than asking for later.**',
  '**For whoever reads this in two years.** The second survey was asked for on **11 November** because the first survey measured the east elevation from a photograph, which I had said at the time was adequate and ⚠ **which I now think was wrong.** The decision to run a second survey was taken by **Mr Saqqal on 30 January**, against my own earlier advice of 2 October. **The first survey\'s east elevation figures should be treated as superseded from 5 March** and not before, because until then they are the only figures there are.',
  '**And the thing this page does not settle.** ⚠ **Whether the first survey\'s figures were used for anything between October and March.** **I do not know, and the drawings were issued in December**, so somebody should check. **That question belongs to the directorate and not to me**, and I have put it here so that it exists in writing.',
]));
out.push(item('1', 'What does the site team have to do, and what if the gate is locked?'));
out.push(item('2', 'What does she ask the directorate to do, and what is the one risk?'));
out.push(item('3', 'What does the record layer say about her own earlier advice, and what does the page not settle?'));
out.push(writers([
  'One page in three layers: **the summary — one sentence, what and when** → **the actor\'s layer, shortest, with its fallback** → **the approver\'s: the ask, the cost, what it does not change, the one risk** → **the record layer, longest: the reason, the dates, the names** → **and the thing the page does not settle**.',
  '⚠ **Mark the summary as the summary.** _(One line, and it is the only thing all three readers below need.)_ **Nine words in a bracket turn a first sentence into an instruction on reading the page** — the difference between a layered page and a long one.',
  '**Put your own earlier advice in the record layer, and say if it was wrong.** _Which I said at the time was adequate and now think was wrong._ ⚠ **The record reader\'s commonest question is why the earlier decision was taken**, and answering it in your own voice **saves them from assuming incompetence.**',
  '**Flag the risk forward rather than asking for it later.** _If the second morning is lost we need the 6th — which I am flagging up now rather than asking for later._ ⚠ **An approver asked for four days says no; one told about a possible fourth says yes to three.**',
  '⚠ End on **the question the page does not settle, and whose it is.** _Whether the first survey\'s figures were used between October and March. That question belongs to the directorate and not to me._ **Naming an unanswered question and its owner puts it into the record**, which is the only place it survives.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page in three layers (80 words or more).'));
out.push(p('**______________ · ______________** · ______________ · ______________   **______________ on ______________.** _(One line, and it is the only thing all three readers below need.)_   **For ______________, and this is the only part you need.** ______________. **If ______________, ______________; do not ______________.** **Ask ______________, not ______________.**   **For ______________, who have to agree to it.** **I am asking you to ______________ before ______________.** ______________. ⚠ **It changes nothing about ______________, it adds no ______________, and it does not touch ______________.** **The one risk is ______________.**   **For whoever reads this in two years.** ______________ was asked for on ______________ because ______________, ⚠ **which I now think was ______________.** The decision was taken by ______________ on ______________.   **And the thing this page does not settle.** ⚠ ______________. **That question belongs to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A one-line summary at the top, marked as the summary',
  'Three layers, each headed with its reader named, shortest first',
  'No approval inside the instruction and no instruction in the approver\'s layer',
  'The record layer longest, with dates, names and the writer\'s own earlier advice',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their summary and their three headings only, and the room says where each reader would stop.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more, three layers under three hundred), to the shape in the writer\'s box: the summary, the actor shortest, the approver\'s four parts, the record longest, and the unsettled question.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a one-line summary at the top, three layers each naming its reader, and no approval inside the instruction.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your page in layers and stop at the end of each one.** ⚠ At each stop the room says whether that reader has everything they need and nothing they do not. Then the sentence the cycle ends on, which is Mrs Sweidan\'s and is the record layer doing its work: **which I had said at the time was adequate and which I now think was wrong.**'));
out.push(hw('Write the page in three layers (80+ words) and count the words in each. ⚠ **Actor shortest, record longest.** Then send it, **and ask the actor one question: did you read past your own heading?** **If they did, your heading did not name them clearly enough.**'));

// ===================== 11.7 =====================
out.push(h2('11.7  Review & Mediate: The page nobody acted on'));
out.push(p('**Function:** mediating a page that went to all three readers and was acted on by none   ·   **Recycling:** Unit 11   ·   **Exam practice:** B2 First Reading and Use of English Part 2 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Please passing this on to the registry.  **2** He chase up the missing slip the same afternoon.  **3** The one risk was flag up before anybody asked.  **4** I shall running it past the clerk of works.  **5** She taken the matter up with the directorate.  **6** The ambiguous in the notice stopped anybody acting.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the notice as it was sent, and what each of its three readers did about it.'));
out.push(box(null, [
  '**ONE NOTICE, THREE READERS, NOTHING DONE** _(sent 14 January; nothing had happened by 11 February)_',
  '**The notice, in full as sent.** _"The question of the second page of the enquiry form has been considered at some length. Following consultation it has been agreed that the position will be reviewed, and that staff will be advised in due course. Members are reminded of the importance of accurate recording in the meantime."_',
  '**What the counter did.** Nothing. _"I read it twice. There is nothing in it to do."_',
  '**What the directorate did.** Nothing. _"It did not ask me for anything. I assumed somebody else had agreed it."_',
  '**What the file has.** The notice. ⚠ _"No date, no name, no reason — and it is now the only record that anything was ever decided."_',
  '**And the question for the cycle.** _Which reader was it written for?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. Which reader was the notice written for, and what does Ms Huda say the mediation is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  Written for the writer', [
  ['Ms Huda', 'One notice, three readers, four weeks, nothing done. Mr Darwish — which reader was it written for?'],
  ['Omar', 'The approver, I would have said. Passive, _it has been agreed_, _in due course_.'],
  ['Ms Huda', '**Count the imperatives and count the dates.**'],
  ['Omar', 'No imperatives. No dates. ⚠ And the first six words are _the question of the second page_ — **which is the writer telling us the question existed.** **It was written for the writer.**'],
  ['Ms Huda', '**Which is the finding of the cycle and the fourth kind of page: a page acted on by nobody has usually been written for the writer.** ⚠ **The tell is the history in the first paragraph** — _considered at some length_, _following consultation_ — **and neither of those is a fact about anything that is going to happen.**'],
  ['Dima', 'So the mediation. Three moves?'],
  ['Ms Huda', '**Three, and they are not the moves of 10.7.** One: **ask each of the three readers what they did.** Two: **name the reader the page was written for.** Three: ⚠ **write the missing version for the other two** — **and that is the whole of it: there is nothing to settle, because there is no dispute.**'],
  ['Jad', 'No dispute at all?'],
  ['Ms Huda', '**None, and that is what makes this the hardest kind to find.** ⚠ **Nobody disagreed with anybody.** Three readers each waited for one of the others, **and nothing in the page told any of them that they were the one** — **so four weeks passed and no two people in it were ever in conflict.**'],
  ['Mazen', 'And nobody complains, because nobody knows.'],
  ['Ms Huda', '⚠ **Which is why this kind runs for months where a dispute runs for weeks.** A quarrel has an end: somebody wins or somebody gives up. **A page nobody acted on has no end at all** — it simply stops being recent, **and then it becomes the file\'s only record that anything was decided.**'],
  ['Hiba', 'What do you write in place of it?'],
  ['Ms Huda', '**Two versions and not three, because the writer\'s own version already exists.** ⚠ **The actor\'s**: _from 1 March, give out the one-page form; the two-page forms go in the second drawer and stay there._ **The approver\'s**: _I am asking you to confirm in writing that the second page is discontinued from 1 March._ **Nineteen words and twenty-one**, and the four weeks would not have happened.'],
  ['Rim', 'And the record version?'],
  ['Ms Huda', '**Written now and dated now, saying what was found and when.** ⚠ **A record paragraph written four weeks late is worth having and should say that it is late** — _written on 11 February about a notice of 14 January, after it was found that nothing had been done._ **A dishonest date in a record paragraph is the one fault in this unit that cannot be mended later.**'],
  ['Lubna', 'And who is at fault? Somebody must be.'],
  ['Ms Huda', '**The writer, and only the writer, and that is the one place where this book names a fault.** ⚠ **In 4.7, 6.7, 7.7, 8.7, 9.7 and 10.7 nobody was wrong.** **11.7: the three readers all behaved correctly** — **each of them did the right thing with a page that asked nothing of them.**'],
  ['Omar', 'And it was mine.'],
  ['Ms Huda', '🔊 **Then read the two missing versions aloud, flat, and say the four weeks at the end without apologising.** ⚠ _Nothing happened for four weeks._ **An apology in that sentence makes the room comfortable and teaches nobody anything**, and the sentence is the only thing in the cycle that does the teaching.'],
]));
out.push(sp());
out.push(box('Language box – the page nobody acted on', [
  '**The three moves, and they are not the moves of 10.7.** **1** Ask **each of the three readers what they did.** **2** **Name the reader the page was written for.** ⚠ **3** **Write the missing version for the other two** — **and that is the whole of it.**',
  '**Because there is nothing to settle: there is no dispute.** ⚠ **Nobody disagreed with anybody.** Three readers each waited for one of the others, **and nothing in the page told any of them that they were the one.** **Four weeks, and no two people in it were ever in conflict.**',
  '**And nobody complains, because nobody knows** — ⚠ **which is why this kind runs for months where a dispute runs for weeks.** **A quarrel has an end: somebody wins or somebody gives up. A page nobody acted on has no end at all**: it stops being recent, **and then it becomes the file\'s only record that anything was decided.**',
  '**The tell is the same as 11.5\'s: the history in the first paragraph.** ⚠ _The question of the second page has been considered at some length. Following consultation it has been agreed…_ — **no imperative, no date, and the first six words are the writer telling the reader that the question existed.**',
  '**Two versions and not three, because the writer\'s own already exists.** **Actor:** _from 1 March, give out the one-page form; the two-page forms go in the second drawer and stay there._ **Approver:** _I am asking you to confirm in writing that the second page is discontinued from 1 March._ ⚠ **Nineteen words and twenty-one.**',
  '**The record version is written now and dated now, and says that it is late.** ⚠ _Written on 11 February about a notice of 14 January, after it was found that nothing had been done._ **A dishonest date in a record paragraph is the one fault in this unit that cannot be mended later.**',
  '**And this is the one mediation in the book where somebody is at fault, and it is the writer.** ⚠ **4.7, 6.7, 7.7, 8.7, 9.7 and 10.7: nobody was wrong.** **11.7: the three readers all behaved correctly** — **each did the right thing with a page that asked nothing of them.**',
  '**One warning about the repair, because it is the obvious mistake.** Do not send the two missing versions **as a correction of the first notice.** ⚠ **Send them as the notice**, and keep the explanation for the record paragraph: **a reader who is handed a correction reads about the error, and a reader who is handed an instruction does the thing.**',
  '**Pronunciation.** 🔊 **Track 11.14** **Read the two missing versions flat, and say the four weeks at the end without apologising.** ⚠ _Nothing happened for four weeks._ **An apology in that sentence makes the room comfortable and teaches nobody anything** — and the sentence is the only part of the cycle that does the teaching.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the cases below and does **not** show it. A reads the notice as sent and what each reader did. B makes the three moves and writes **the two missing versions.** ⚠ **In one of the two cases something _was_ done — and the wrong thing**, which is a different fault; B must say which case and name it. Change roles with the other case.'));
out.push(table(['Case A – the enquiry form', 'Case B – the refusal codes'], [
  ['_The notice: "the question has been considered at some length… advised in due course."_', '_The notice: "refusal dates are to be entered on the gate copy."_'],
  ['_The counter: nothing. "There is nothing in it to do."_', '_⚠ The gate: stamped the manifest, which goes to the customer._'],
  ['_The directorate: nothing. "It did not ask me for anything."_', '_The directorate: nothing. "It read as an instruction, not a request."_'],
  ['_The file: the notice, with no date, name or reason._', '_The file: the notice, and four weeks of stamped manifests._'],
  ['_⚠ Written for: the writer._', '_⚠ Written for: the actor, but with no _why-not-the-obvious-thing_ clause._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves and the two missing versions for each case. ⚠ **Case B is the different fault**: the notice **was** written for the actor and **was** acted on — **and the actor did the obvious thing, which was wrong, because the one clause of reason was missing.** **Nobody did anything unreasonable in either case**, and about half the pairs call Case B careless; **it is 11.3 and it is the writer\'s.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take something you sent that nothing happened about. **Ask the three readers what they did** — really ask, where you can — **and then count the imperatives and the dates in what you sent.** ⚠ Write the two missing versions and send them **as the notice and not as a correction.** **Then write the record paragraph, dated today, saying that it is late.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class which reader the page was written for and what the missing versions were:  _One notice, three readers, four weeks, nothing done. Asked which reader it was written for, Omar said the approver — passive, it has been agreed, in due course. Then the test: count the imperatives and count the dates. No imperatives, no dates, and the first six words are the question of the second page, which is the writer telling us the question existed. It was written for the writer. Which is the finding of the cycle and the fourth kind of page: a page acted on by nobody has usually been written for the writer, and the tell is the history in the first paragraph — considered at some length, following consultation — neither of which is a fact about anything that is going to happen. Dima asked for the mediation, and it is three moves and not the moves of 10.7: ask each of the three readers what they did; name the reader the page was written for; and write the missing version for the other two. And that is the whole of it, because there is nothing to settle — there is no dispute. Jad asked whether there is no dispute at all, and none, which is what makes this the hardest kind to find: nobody disagreed with anybody, three readers each waited for one of the others, and nothing in the page told any of them that they were the one, so four weeks passed and no two people in it were ever in conflict. Mazen said and nobody complains because nobody knows, which is why this kind runs for months where a dispute runs for weeks: a quarrel has an end, because somebody wins or somebody gives up, and a page nobody acted on has no end at all — it simply stops being recent, and then it becomes the file\'s only record that anything was decided. Hiba asked what you write in place of it, and two versions and not three, because the writer\'s own already exists: the actor\'s is from 1 March give out the one-page form, and the two-page forms go in the second drawer and stay there; the approver\'s is I am asking you to confirm in writing that the second page is discontinued from 1 March. Nineteen words and twenty-one, and the four weeks would not have happened. Rim asked about the record version, and it is written now and dated now, saying what was found and when. And Lubna asked who is at fault, and the writer and only the writer, which is the one place this book names a fault: the three readers all behaved correctly, because each of them did the right thing with a page that asked nothing of them._'));
out.push(p('**Listener task:** write the two missing versions from your own case and the reader the original was written for.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text below and think of the word which best fits each gap. **Use only one word in each gap.** There is an example at the beginning (**0**).'));
out.push(box(null, [
  '**THREE READERS, ONE PAGE**',
  'Almost everything written at work is read by three kinds of person, **(0)** _**and**_ they need different things from the same words. The first has to do something; the second has to decide whether it may be done **(1)** ______________ all; the third will read the page in two years and was not there.',
  'Most pages are written with only one of the three **(2)** ______________ mind — usually the second, **(3)** ______________ the person whose permission is needed is the difficult reader. Writing for the difficult reader is natural, **(4)** ______________ it is wrong: the person holding the stamp cannot tell **(5)** ______________ the page whether to do anything on Monday.',
  'The third reader is the one nobody takes seriously, and **(6)** ______________ a structural reason. The first two complain if you fail them; the third cannot. A page can fail that reader **(7)** ______________ anybody ever noticing, and **(8)** ______________ reader is usually the writer\'s own successor.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a page nobody acted on (80 words or more).'));
out.push(p('**______________ · one notice, three readers, nothing done** · ______________   **The notice, as sent.** "______________"   **What ______________ did.** ______________. "______________"   **What ______________ did.** ______________. "______________"   **What the file has.** ______________.   **Imperatives: ______. Dates: ______.** ⚠ **Written for the ______________**, and the tell is ______________.   **The actor\'s version, which did not exist.** **______________.**   **The approver\'s version, which did not exist.** **I am asking you to ______________.**   **And the record paragraph, written today and late.** ______________. ⚠ **Nothing happened for ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What each of the three readers did, in their own words',
  'The counts, and the reader the page was written for',
  'The two missing versions, written as the notice and not as a correction',
  'A record paragraph dated today and saying that it is late',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The examination essay, and 11.6\'s discipline is what transfers: decide what each paragraph is for before you write it.** **Four paragraphs: your position · the first note · the concession paragraph _(9.6)_ · what follows.** 140–190 words asked; write **180–220**.',
  'In your English class you have been talking about written instructions at work. Your teacher has asked you to write an **essay**.',
  'Write an essay using **all** the notes and giving reasons for your point of view.',
  '_**Is a written instruction always better than a spoken one?**_',
  '_**Notes · write about:**_   **1** what happens when people forget   **2** whether writing takes too long   **3** ______________ _(your own idea)_',
  '⚠ **All three notes, and your own idea in the last paragraph, where it is read.** **A paragraph with two jobs loses the organisation mark** — which is 11.6 and is the commonest way to lose it in two hundred words.',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Please ___ this on to the registry.   a) passing   b) pass   c) passed',
  '2  He ___ up the missing slip the same afternoon.   a) chased   b) chasing   c) chase',
  '3  The one risk was ___ up before anybody asked.   a) flag   b) flagging   c) flagged',
  '4  I shall ___ it past the clerk of works first.   a) running   b) run   c) ran',
  '5  She ___ the matter up with the directorate in January.   a) taking   b) taken   c) took',
  '6  The ___ in the notice was what stopped anybody acting.   a) ambiguity   b) ambiguous   c) ambiguously',
  '7  A clear ___ needs a verb, a trigger and a fallback.   a) instruct   b) instruction   c) instructive',
  '8  There was no ___ to the six-word question for nine days.   a) respond   b) responsive   c) response',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 11.15** You will hear five people talking about a notice they were sent. For questions **1–5**, choose from the list (**A–H**) what each speaker says. **There are three extra letters you do not need.**'));
[
  '**A** The notice told me what to do but not when.',
  '**B** The notice was written for somebody who had to approve it.',
  '**C** I asked a short question and had an answer the same day.',
  '**D** I counted the imperatives in my own pages afterwards.',
  '**E** The notice opened with the writer\'s own difficulties.',
  '**F** I did the obvious thing and it was the wrong thing.',
  '**G** The notice gave me nothing to do if it went wrong, so I did nothing.',
  '**H** The notice is now the only record that anything was decided.',
].forEach(t => out.push(p(t, { indent: 200, after: 30 })));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 60 }));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['1 · Tareq', 'It said to enter the refusal date, and I entered it. Four weeks of it, on the manifest — which is the copy that goes to the customer, so about a dozen customers got a document with our internal refusal date written across it. I was not being careless. The manifest is where you write things; the manifest is what you are holding. If the notice had said "the gate copy and not the manifest, because the manifest goes out", I should have got it right the first morning. Eleven words, and nobody wrote them.'],
  ['2 · Mazen', 'It had been on my counter for nine days and I had read it twice. There was nothing in it I could act on, and I had decided to leave it, which is what I usually do with that kind of thing. Then I sent six words instead: what do I do, and when? The answer came back that same afternoon with a date in it. Nine days against one afternoon, and the only thing that changed was that I asked instead of waiting.'],
  ['3 · Rasha', 'The notice told me to record the expected admissions, and I was willing. But the sheet has fourteen boxes on it and no room at the foot, and there was nothing in the notice about what to do when there is no room. At four in the morning you do not invent a procedure. So the first night I looked for somewhere to put it, and there was nowhere, and after that I stopped looking. Nothing was recorded for three weeks and nobody noticed, which is the part that ought to worry somebody.'],
  ['4 · Dima', 'I pulled the file for a quite different reason, eighteen months later, and that notice was all there was. No date on the decision, no name against it, and not one sentence saying why. Somebody had decided something about that form and the only trace of it is four lines of passive. I am going to be asked what was agreed and I shall have to say that the file does not know, which is not a thing I like saying about a file I keep.'],
  ['5 · Omar', 'I wrote it, and I can tell you exactly who I had in mind while I wrote it: the directorate. Mr Saqqal had refused the thing twice and he was the reader I was afraid of, so every sentence in it was shaped to get past him. Passive throughout, no date, and "it has been agreed" doing the work of a decision nobody had taken. The man at the counter was on the circulation list and I never once thought about him while I was writing.'],
]));
out.push(p('**C  Writing.** Write the essay (180–220 words) in four paragraphs: your position, the first note, the concession paragraph, and what follows — with your own idea in the last paragraph.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ name the three readers of something I have written — actor, approver, record',
  '☐ write the same fact three times, and say what each version leaves out',
  '☐ write an actor\'s version: action, trigger, fallback, who to ask, and no passive',
  '☐ give one clause of reason where the obvious place is the wrong place',
  '☐ write an approver\'s version with a performable verb and what it does not change',
  '☐ name the one risk myself rather than waiting to be asked',
  '☐ name which reader a page was written for by counting imperatives and dates',
  '☐ write one page in three layers, each headed with its reader named',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 12 – WHAT THE YEAR SHOWED', [
  'Unit 11 wrote for three readers. **Unit 12 is the last unit of the book**, and it looks back over a year: **what was predicted, what happened, and what the difference was worth knowing.**',
  '**12.2 reads the prediction sheet the class wrote on 1 June** — in **B1 Book 2, Unit 24.5** — **and marks it.** ⚠ **12.5 writes the account of a year in which the writer was wrong about the main thing**, which is the hardest page in the book and the one that uses every cycle in it.',
  '⚠ **Bring two things you predicted at work this year** — **one that came out and one that did not** — **and anything you wrote down at the time.** 12.1 runs on the pair, and **a prediction you did not write down cannot be marked.**',
  '**And the peer-review slip is unchanged for the last time.** Band 2: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
