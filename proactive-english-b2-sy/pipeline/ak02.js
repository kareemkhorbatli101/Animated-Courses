// Proactive English B2 · Syria Edition · Book 1 · Unit 2 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 2  Taking the Person Out — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **This unit contradicts last year on purpose, and the contradiction has to be printed and not smoothed over.** B1 taught _put a person in front of it_ across two whole cycles. Unit 2 teaches the opposite move. A teacher who presents Unit 2 as a refinement of B1 will produce a class that writes committee English and believes it is being careful — which is the exact failure the unit exists to prevent.',
  '**The safeguard is 2.3 and it governs every unit after this one: the sentence may drop the agent, the paragraph must name it once.** It is QA check 11 on this book. Write it on the board in 2.3 and leave it there for the rest of the term.',
  '**2.1 and 2.2 will not run without the official paragraphs.** The class was asked in 1.7 for one paragraph each that they cannot read, and Mr Barghouti has four. A class that arrives with nothing has a grammar lesson about suffixes instead of a lesson about where people went. If it happens, use Mr Barghouti\'s four from the 2.7 box, which are printed in full.',
  '**2.5 is the cycle teachers under-run, because it looks like a lesson about jargon and is not.** It is a lesson about **agreement**: an abstraction is what lets nine people with four opinions pass a motion, and the price is that the argument arrives six months later. The arithmetic is Mazen\'s and it should be on the board: **thirty-eight weeks of agreement against three weeks of argument.**',
  '**And the sentence the unit turns on**, which is Lubna\'s in 2.6: _because there was nobody in it, nobody did anything about it, including me._',
], C.lblue, C.navy));

// ===================== 2.1 =====================
out.push(pb());
out.push(h2('2.1  The suspension of deliveries'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the instruction _stop there — do not defend either version_ is load-bearing. The cycle needs the two versions side by side and nothing else; a class that starts arguing about which is better in Stage 1 has had 2.5 four cycles early and will not hear 2.1 at all.'));
out.push(A('**b** **1** has a person (_the committee_) → **the committee\'s decision**, or **the decision of the committee**, and the difference between those two is the whole of 2.3.   **2** has nobody → **compliance** was already the noun; the clause is _somebody did not comply_.   **3** has a person (_they_) → **the removal of the sheet in 2019**.   **4** has a person (_we_) → **our refusal of the consignment** · **the refusal of the consignment**.   **5** has nobody → the clause is _somebody withdrew something and did not explain it_, and the sentence does not say who, what or why.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — _put a person in front of it_; and that he does not know who decided.'));
out.push(A('**b** **1** Taking the person out of nothing — he spent twelve months putting people in.   **2** A **question** and not an instruction: _can you put a person in front of it, and should it say so?_'));
out.push(NOTE('Cross the B1 test out on the board, physically, in front of the class, and do it before Mr Barghouti reads anything. The gesture does a thing no explanation does: it tells a class that spent eleven weeks last year being corrected on this that they are not about to be corrected again, and that the rule has been **replaced** rather than qualified. ⚠ The sentence to protect for the rest of the unit is Ms Huda\'s: **the agent is not always being hidden; sometimes it has genuinely gone.** Students arrive at this unit expecting to find concealment everywhere, and Mr Barghouti\'s four paragraphs are in the book precisely because three of the four are **honest** — the people are gone, nobody can find them, and no amount of suspicion will produce them.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _we refused the consignment_ → **our refusal of the consignment** · **the refusal of the consignment** → _somebody refused the consignment_.',
  '**2** _the committee decided_ → **the committee\'s decision** · **the decision** → _somebody decided_. ⚠ Note what the second form costs: three words deleted and the committee is gone.',
  '**3** _they removed the sheet_ → **their removal of the sheet** · **the removal of the sheet** → _somebody removed the sheet_.',
  '**4** _nobody complied_ → **the absence of compliance** · **non-compliance** → _somebody did not comply_. This is the awkward one: the negative has to go into a prefix or a noun of its own.',
  '**5** _we agreed to extend it_ → **our agreement to extend it** · **the agreement to extend it** → _somebody agreed to extend it_.',
]));
out.push(A('Item **2** is the one to read out and item **4** is the one to spend time on. In **2**, make the class delete the three words in front of the class and then ask who is left; in **4**, the point is that English has no neat nominalisation for a negative, which is why official prose reaches for _non-compliance_ and _the absence of_ — both of which bury the person twice.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The works office suspended deliveries._',
  '**B** _(with)_ **the works office\'s suspension of deliveries** · _(without)_ **the suspension of deliveries**.',
  '**A** What has gone is **the works office**, and with it any way of asking why.',
  '**B** _(back to a clause)_ _Somebody suspended deliveries_ — and I have had to say **somebody**, because the noun phrase does not tell me how many people or which office.',
]));
out.push(A('Insist on _somebody_ and not on a guess. A pair that says _the works office suspended deliveries_ on the way back has smuggled in information the noun phrase did not contain, and the stage then demonstrates nothing.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight noun phrases with what went beside each. The finding: in **six or seven of the eight** the agent is **not recoverable** from the noun phrase alone, and in most of those the listener could not say how many people were missing — which is the figure that matters, because a reader who does not know whether one person or a committee is behind a sentence cannot begin to ask about it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _(with the person)_ _I stopped signing the handover sheets in March because two of them had been altered._ **Seventeen words.** _(noun phrase with the person)_ _My suspension of handover signing in March, following two alterations._ **Eleven words.** _(noun phrase without)_ _The suspension of handover signing in March._ **Seven words.**',
  '**b** _My partner said a committee would pass the third one and nobody could act on it, and that those are not the same version — which is the first time I have seen that stated. The third one is the one I actually sent. It went to four people and not one of them asked me what had been altered._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda wrote last year\'s test on the board and crossed it out while the class watched — put a person in front of it, nineteen point one, twenty-three point three, eleven weeks of correction, crossed out and not wrong. Omar said he had spent a year learning it and had taken the person out of nothing for twelve months. Then Mr Barghouti read the first of his four paragraphs: forty-one words about the suspension of deliveries on 2 March, pending the completion of the review, until confirmation of compliance has been received. Nour asked who suspended the deliveries, and Adnan said he does not know, after nineteen years in that office — there is a minute somewhere with a date on it and no name, and the man who would have known retired. Ms Huda said that is the first thing to understand and not what anybody expects: the agent is not always being hidden, and sometimes it has genuinely gone. Then Rim put the paragraph back into verbs without improving it, and had to say "somebody" four times. Omar said so it is worse. And Ms Huda said it is longer and more honest, which is not the same as better — but look at what the conversion exposed: four missing people, and nobody in the room knew they were missing until the verbs came back. So the test for the rest of the year is a question and not an instruction: can you put a person in front of it, and should it say so? Dima said the cost of the noun version is that you cannot argue with it, and Ms Huda said that is 2.5 and the hardest cycle in the unit. Then the small thing that turns out to be the whole of 2.3: the committee\'s decision keeps the committee and cannot shed it without a rewrite, while the decision of the committee loses them by deleting three words — which is how most official paragraphs lost theirs. Then Lubna asked whether there is a rule for the ending, and Ms Huda gave the four families and the zero — suspend, decide, complete for the _-ion_ family; agree, assess, pay for _-ment_; remove, withdraw, refuse for _-al_; comply, refer, prefer for _-ance_; and the zero, where the noun is the verb, as in a change, a review, an increase. She said to learn them as families and not as a list, because 2.7 is the exam task that tests exactly this. And Jad said the stress moves, which is the one pronunciation point of the cycle: susPEND becomes suspenSION, the stress going to the syllable before the ending every time, and a reader who hears SUSpension hears somebody reading a form they do not understand.']));
out.push(A('The listener task has one answer per student and the answers go on the board as a column of numbers: **the number of people missing from one noun phrase**. Expect twos and threes, one four, and one student who counts six and is right.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('Three to write up, and all three are produced by this cycle every time.   **✗** _The suspension of the deliveries of the works office of 2 March._ → **✓** _the suspension of deliveries, a works-office instruction of 2 March._ Four _of_s, which is 2.4 arriving early, and the class should be told that it is.   **✗** _No notify was given._ → **✓** _no **notification** was given._ The suffix families, and this is the commonest slip of the unit.   **✗** _SUSpension_ · _COMpliance_. → **✓** _suspenSION_ · _comPLIance_. The stress goes to the syllable before the ending, and a fluent student who gets this wrong sounds less fluent than a hesitant one who gets it right.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because all four clerks had asked him the same question in a fortnight — what does the store paragraph actually say? And the point it is **not**: that the first version is bad English. It is correct, it is the form, and he has drafted paragraphs like it for nineteen years.'));
out.push(A('**2** **One** of the four. It was a works-office instruction of 2 March, signed by the duty officer, with a minute number. He has **stopped looking** for the other three.'));
out.push(A('**3** To put the one agent they **do** know into the paragraph somewhere — not necessarily into the sentence. _The suspension of deliveries (works office, 2 March)_ costs **five words** and answers the question all four of them asked.'));
out.push(NOTE('The figure to put on the board from this model is **four of twenty-six**: four of the twenty-six words in the honest version are the word _somebody_. Nobody reasons their way to that figure; it only appears if the conversion is actually done and the result actually counted, which is why Stage 3 insists on _somebody_ rather than a guess. ⚠ And note what the model refuses to ask for. It does not ask anybody to write the paragraph in verbs — that version runs to sixty words, would be refused upstairs, and would be refused for a reason Mr Barghouti says he agrees with. **The bracket is the whole change, and it fits inside the sentence they already send.** A page that asks for a bracket and does not say so is answered as though it had asked for a rewrite.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SAME PARAGRAPH TWICE** · T. Ayoub · 19 September',
  'This is for the six of us on the Harasta road, because four of you have asked me in the last month what the muster-room notice means.',
  '**What we are sent.** _"Adherence to the published departure schedule is required of all drivers, and notification of any alteration thereto must be given to the depot office prior to departure."_ Twenty-seven words.',
  '**What it means.** _"Leave when the printed time says. If you are going to leave at a different time, tell the depot office before you go."_ Twenty-three words, and the second sentence is the one nobody had understood.',
  '**The point, and the point it is not.** Not that the notice is badly written. The point is that _notification … must be given_ does not say **to whom you speak** or **how long before**, and six of us have been guessing for two years.',
  '**What I have been able to find out.** That it means the office and not the foreman, and that _prior to departure_ has always meant the same morning. I asked. It took four minutes.',
  '**What I am asking for, and it is one thing.** _Notification (to the depot office, the same morning)_ — six words in a bracket, and the notice can stay exactly as it is.',
  '**And the thing I should say about myself.** For two years I told two new drivers the foreman. I was guessing and I did not say I was guessing.',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**THE NOTE TEMPLATE PARAGRAPH, TWICE** · N. Sabbagh · 20 September',
  'This is for the three of you who own the release notes, and it is one page because all three of you have asked me, separately, what my December paragraph was actually requesting.',
  '**What I sent.** _"The absence of provision for the recording of undertakings given by telephone has been raised previously and remains unaddressed, and consideration of an amendment to the template at the next release would be welcomed."_ Thirty-four words.',
  '**What it meant.** _"The template has nowhere to put a promise somebody made on the telephone. I asked about this in February. Please add a field in the October release."_ Twenty-seven words — and the third sentence is a request that my version did not contain at all.',
  '**The point, and the point it is not.** Not that the first version is too formal; it is the register the release notes use and I would use it again. The point is that **nobody is in it, including me** — _has been raised previously_ does not say by whom, and the person who raised it was me, four times, in writing.',
  '**What I have been able to find out.** That the template is owned by two people and not one, and that neither of them had seen my February note, because it went to a third person who has since moved.',
  '**What I am asking for, and it is one thing.** _raised previously (by me, in writing, four times since December)_ — nine words in a bracket, and the sentence keeps its shape.',
  '**And the thing I should say about myself.** Eight months, four paragraphs, and in none of them did I say who was asking. I had read the silence as the request being refused.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: both versions quoted and counted.** You wrote _"The absence of provision for the recording of undertakings…" Thirty-four words._ Found: both are there with their counts, and the difference of seven words is doing more work than a paragraph of explanation would.',
  '**Criterion: the missing people counted.** You wrote _nobody is in it, including me._ Found: you have said it but not counted it — _has been raised previously_ hides one person, and the sentence has three other nouns you have not audited.',
  '**Criterion: the point it is not.** You wrote _Not that the first version is too formal._ Found: present, and the clause _I would use it again_ is what makes it credible rather than polite.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('The counts go up as a column and nothing else is read out. Then the sentence to leave the cycle on: **a noun phrase does not hide a person, it makes a person optional** — and an optional person is left out by a tired clerk at half past four, not by a conspiracy. A class that leaves 2.1 looking for conspiracies will mis-sort every paragraph in 2.7.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The paragraph: _"Issue of keys is subject to authorisation."_ The missing agent: whoever authorises. I asked the caretaker, who said the head of section, and the head of section said it has been the caretaker since 2021 and nobody told him. So I have found two agents and they contradict each other, which I had not expected to be a possible outcome. The paragraph has been on the board by the key cupboard for four years.']));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  Who is not in this sentence'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The three permitted answers are the whole discipline of the stage: _I know_, _I could find out_, _nobody knows_. ⚠ A student who answers _it does not matter_ has answered the second question before the first, and should be asked _by whom_ again.'));
out.push(A('**b** **1** _could find out_ — there is a date, so there is a file.   **2** _nobody knows_, usually, and this is the hardest to accept.   **3** _I know_ — somebody read the application and somebody signed the letter.   **4** _could find out_ — payment has an authoriser by definition.   **5** _nobody knows_ from the sentence, but in practice almost always _could find out_, because _it has been decided_ implies a meeting and a meeting implies a minute.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **C** — three; and that he took the person out himself in 2019, and knew what he was doing.'));
out.push(A('**b** **1** _By whom?_, which is a question about the sentence; and _should it say?_, which is a question about the people in it.   **2** It was for protecting one of the three — the one who had argued against it would otherwise have been the person asked about exceptions every day for a year.'));
out.push(NOTE('Do not resolve the second question for the class, and do not let the class resolve it either. Ms Huda refuses to say that Mr Barghouti was wrong, and that refusal is the cycle: **there is no rule, only a cost you can count.** A teacher who supplies the rule — _always name the agent_ — hands the class back B1 and makes 2.5 and 2.6 unteachable. ⚠ What the class may be given is the **arithmetic**, and it is Adnan\'s: eleven months of quiet, not one query, and forty-one late submissions in the eleven months before the notice against thirty-nine in the eleven months after it. A difference of two, across two years. **The notice changed the paper and not the practice**, and that is the cost of the trade, stated in the only unit that settles anything.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _A decision has been taken._ By whom? _Nobody knows_ from the sentence; _could find out_ in practice. Should it say? Not necessarily — but it should say **when and where**, which costs nothing.',
  '**2** _The sheet was withdrawn in 2019._ By whom? _Could find out_ — the date is the handle. Should it say? Yes, and cheaply: _withdrawn by the depot office in 2019_.',
  '**3** _Payment will be made in due course._ By whom? _I know_ — the finance office. Should it say? Yes, because the reader\'s only question is who to chase, and _in due course_ is a hedge pretending to be a date.',
  '**4** _Your application has been unsuccessful._ By whom? _I know_. Should it say? ⚠ This is the one worth arguing about in class: naming the individual assessor exposes a person to a disappointed applicant, and naming the **panel and the date** does not. The answer is the panel.',
  '**5** _The practice will be discontinued._ By whom? _I know_. Should it say? Not the people — but the **date and the room**, or the reader has nobody to ask for an exception and the practice continues.',
]));
out.push(A('Item **4** is the one to run as a disagreement rather than an answer. Let the class divide, and then make the division useful: everybody who wants the assessor named should be asked what the applicant will do with the name, and everybody who wants nothing named should be asked where an appeal goes.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _It has been decided not to proceed._',
  '**B** By whom? **Could find out** — there will be a minute. Should it say? **Not the names, but the date**, because somebody is going to ask whether it can be reopened.',
  '**A** If it said, it would cost **one line and a small amount of exposure for whoever chaired it**.',
  '**B** And if it does not say, it costs **every future query being sent to the wrong office, for as long as the decision stands**.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight sentences marked **know · could find out · nobody knows**. The count that matters: how many are **could find out**? Five or six of eight — which is the useful finding, because that is exactly the group where one bracket and five words would repair it, and it is far larger than any class expects.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My paragraph:_ "Access to the laboratory outside working hours is not permitted without prior arrangement." _By whom? I could find out — it will be the laboratory manager. Should it say? Yes, and what it costs if it does not say is the thing I had not thought about: twice this year somebody has come at seven in the morning, found the door locked, and gone home, because there was nobody named to arrange it with._',
  '**b** _My partner has left somebody out by accident, not made a trade, and you can tell from the sentence alone: a trade protects somebody, and there is nobody in her sentence who would be exposed by being named. The agent is the stores clerk and nobody would mind. It came out because the sentence was copied from an older notice._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Four paragraphs and one question each. The store paragraph: nobody knows, one agent of four found and the search abandoned. The reclassification of the post: nobody knows, because it is on a schedule and the schedule is not signed. The reference to the transport office: he could find out, because it would be a 2014 instruction and the man who wrote it is still there. And then the fourth, which Adnan said was his. "It has been decided that the practice of accepting late submissions will be discontinued." He wrote it in 2019, he knows exactly who decided, because it was three of them in a room on a Thursday, and he took the three of them out of the sentence on purpose. Omar asked why, and Adnan said because one of the three was going to be the person everybody blamed, and it was not going to be the one who had argued against it — so he wrote "it has been decided" and they all went home. Nour said that is the thing the class spent last year being told not to do, and Ms Huda said it is, and that she was not going to tell them it was wrong, because she does not think it was, and that is why the cycle exists. Then the test, which is two questions and not one: by whom, which is a question about the sentence; and should it say, which is a question about the people in it. Dima asked who decides the second, and Ms Huda said the writer, every time, and that there is no rule — but there is a cost and you may count it. So Adnan counted it. Nothing happened for eleven months: nobody argued, nobody asked who had decided, and nobody stopped submitting late either, because there was nobody to ask about an exception. It bought eleven months of quiet and cost eleven months of the thing not working. And he said he would write it the same way again, and would put a date in it.']));
out.push(A('Listener task: one sentence of the student\'s own that made a trade, and what the trade bought. Expect about a third of the class to find they have never made a trade and have only ever copied, which is the honest and more common finding.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It has been decided by the committee._ → **✓** _the committee decided_, or _it was decided on 24 October_. ⚠ The _it_-family is the one construction that cannot take a _by_-phrase, and this error appears in every class.   **✗** _Compliance is expected._ as an instruction. → **✓** _You send the lot number with the sheet._ A nominalised instruction is not a soft instruction; it is not an instruction.   **✗** _It is understood by this office that…_ → **✓** _We understand that…_ Not English, and the students who write it are the strongest ones, reaching for a register they have heard but not parsed.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** It bought **eleven months of quiet** — not one query, not one request for an exception, nobody asking who had decided. And it cost **eleven months of the thing not working**: late submissions did not stop, because a reader who wants an exception needs somebody to ask and there was nobody, so the practice continued **under a paragraph announcing that it had ended**.'));
out.push(A('**2** Because the one who had argued against it would have been the person asked about exceptions, every day, for a year — and her name is on nothing, which was deliberate. He says he would make that trade again.'));
out.push(A('**3** He would put **the date and the room** in: _it was decided on 24 October 2019, in the directorate office, that…_ — and he says it is **not** putting their names in.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE STAFFROOM NOTICE, AND WHAT IT COST** · H. Nasser · 20 September',
  '_"It has been agreed that marked work will be returned within ten working days."_ Fourteen words. I wrote it.',
  '**Who agreed, which the sentence does not say.** Four of us, at the end of a department meeting in September 2023. Three for, one against, and the one against teaches the two largest classes.',
  '**Why I took us out.** Because she would have been asked for the ten days every week by people who had voted for it, and she had already said in the meeting that she could not do it.',
  '**What the sentence bought.** A year of nobody raising it, and no argument in the staffroom.',
  '**And what it cost, which is the part I did not expect.** A year of nobody keeping to it, including me. Ten days is not a thing anybody can be asked whether they have done when there is no one who agreed to it.',
  '**What I would do differently, and it is not putting the four of us in.** _Agreed at the department meeting of 14 September 2023_ — a date, a meeting, nobody named, and somewhere to take an exception.',
  '**The thing I shall say about this page.** The colleague who voted against it was right about her two classes and nobody has ever written that down, including her.',
]));
out.push(S('Stage 7 · Write freely (sample, 198 words)'));
out.push(SAMPLE([
  '**THE LINE IN MY OWN FAULT BOOK** · O. Darwish · 21 September',
  '_"Faults are to be recorded at the time of attendance."_ Ten words. I wrote it, in September, at the front of a book I started for no reason anybody asked me for.',
  '**Who decided, which the sentence does not say.** I did. On my own, at a kitchen table, with nobody to consult and nobody to object.',
  '**Why I took myself out.** Because I was going to put the book in front of eleven site managers and I did not want it to read as my idea. An instruction with me in it is a request; an instruction with nobody in it looked like a procedure.',
  '**What the sentence bought.** Four of the eleven started using the book without asking me a single question about it. If adoption was the object it worked better than anything I have ever written.',
  '**And what it cost, which is the part I did not expect.** The other seven did nothing, and I had nothing to say to them — because **I could not chase an instruction I had taken myself out of.** To chase it I would have had to admit it was mine, in writing, after four months of its not being.',
  '**What I would do differently, and it is not signing it.** _Recorded at the time of attendance (my book, since September; tell me if the column is wrong)_ — which puts me in the paragraph and not in the instruction, and gives the seven something to argue with.',
  '**The thing I shall say about this page.** I spent a year in Unit 19 learning to put a person in front of everything, and the first instruction I ever wrote on my own authority has nobody in it at all.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: the sentence owned in the first lines.** You wrote _Ten words. I wrote it, in September._ Found: owned in four words, and the date is doing more than the admission.',
  '**Criterion: the cost given a figure.** You wrote _The other seven did nothing._ Found: there is a figure, and it is the right one — but you have not said over how long, and _four months_ appears two paragraphs later where it does less work.',
  '**Criterion: the repair that names nobody.** You wrote _my book, since September._ Found: this one does name you, and the page is better for it — but say so, because the criterion was a repair that names nobody and you have deliberately not met it.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('About half the room finds it was an accident, which is the better outcome: an accident is repaired by a bracket. Then the sentence to carry out of the cycle, which is Adnan\'s and should be written down: **a paragraph announcing that a practice has ended, with nobody in it, is how a practice continues.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The two answers I did not have: who decided, and on what date. The date took one telephone call to the department secretary — four minutes, and she had the minute book open while we spoke. The name I have not got and have stopped trying to get, because the two people I asked each named the other. **The date was the easy one by a long way, and the date is the one the rule actually needs.**']));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  The decision, taken by the works office on 2 March'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The instruction is **five words in the middle**, not a rewritten sentence, and the student must say which of the three — who, where, when — they chose. ⚠ Almost everybody chooses **when**, because it is the one they have; say so before the stage runs, or half the class will think they have failed.'));
out.push(A('**b** **1** after _suspension_ — _the suspension, a works-office instruction, was lifted in May_.   **2** after _review_ — _a review, commissioned by the directorate in March, has…_   **3** after _form_ — _the form, revised in the March release, was…_   **4** after _compliance_ — _compliance, confirmed by the duty officer on 14 April, was…_   **5** after _trial_ — _the trial, extended to all night staff by the minute of 1 June, has…_ ⚠ Item **5** is the B1 continuity point: that minute is Rasha\'s and the class should recognise it.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — the sentence may drop the agent, the paragraph must name it once; and that four of her nine paragraphs named nobody anywhere.'));
out.push(A('**b** **1** A **hedge**. _The decision, which was apparently taken at some point in March,_ is an evasion wearing the shape of an insert.   **2** That once is enough — the reader carries it forward over four more sentences without being told again.'));
out.push(NOTE('⚠ **This is the rule that makes the whole of B2 safe, and it is QA check 11 on this book.** Write it on the board and leave it there for the rest of the term: **the sentence may drop the agent; the paragraph must name it once.** Every unit from here is checked against it, and a cycle that teaches a person-removing move without it is a cycle that produces committee English. Note also why the repair will be **accepted**, which is the practical half of the cycle: it costs five words, it does not disturb the register, and a committee that would refuse a rewrite into verbs will pass a bracketed date without comment. Students who have spent a year being told to write in verbs need to hear that this is not a compromise but the version that actually gets through.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The suspension, **a works-office instruction of 2 March**, was lifted in May._ — noun in apposition plus a date.',
  '**2** _A review, **commissioned at the March meeting**, has been under way since._ — prepositional; carries where, not who.',
  '**3** _The form, **revised in the March release**, no longer has a signature box._ — participle; carries when.',
  '**4** _Compliance, **confirmed by the duty officer on 14 April**, has not been re-checked._ — participle; the only shape that carries an agent and a date together.',
  '**5** _The trial, **extended to all night staff by the minute of 1 June**, now covers about forty people._ — participle with a document as the agent, which is often the only agent available and is perfectly good.',
]));
out.push(A('Item **4** is the one to demonstrate and item **5** is the one to praise. In **4**, take the insert out in front of the class and ask what has been lost: an officer and a date, both facts. In **5**, the agent is a **document** and not a person, and students need to be told explicitly that this satisfies the rule — a minute, a release note or an instruction number gives the reader somewhere to go, which is all the rule asks.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The suspension has not been lifted._',
  '**B** _(insert: when)_ _The suspension, **in force since 2 March**, has not been lifted._',
  '**A** Take it out and the reader has lost **the date it started, and therefore any idea of how long this has gone on**.',
  '**B** _(and now a hedge instead)_ _The suspension, **which appears to be still in force**, has not been lifted._',
  '**A** Take that out and the reader has lost **nothing at all** — which is why it is not an insert. It is the writer telling me how sure they are, in the place where a fact should be.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight inserts marked **who · where · when**. The count: **when** is the commonest by a long way, and it is also the easiest to get. Say this out loud, because students assume the rule requires a name and it does not — a date satisfies it completely, and a date can usually be got from a file in four minutes.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My paragraph, four sentences, about the returns corridor. The agent is named nowhere. I had not noticed. The insert goes after_ the count: _"The second count, **made by me on 11 September**, gave two hundred and ten." And then the whole paragraph reads differently, because the three sentences after it are now plainly mine as well._',
  '**b** _My partner\'s insert was_ "which has been a problem for some time" _— and taking it out costs the reader nothing, so it is a hedge. She had the fact available: the corridor was cleared in January, so it is nine months. "**unchanged since January**" is four words and is an insert._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The rule that makes the rest of the unit safe is one sentence long: the sentence may drop the agent, the paragraph must name it once. Mazen asked whether once is really enough, and Ms Huda said once, anywhere in the paragraph — not in every sentence, which is last year and produces prose nobody can bear. Then Nour had gone through nine paragraphs she sent between December and July. Five name somebody somewhere. Four name nobody anywhere: not in the sentence, not in the paragraph, not in the attachment. And all four are about the note template, which is the thing she wants changed — four paragraphs asking for a change to a template, and in none of them did she say who owns it. Dima asked whether she knows, and Nour said not until August, which is the point: she wrote four paragraphs round a hole and did not notice the hole, because every sentence was correct. Then the shape. The insert goes between two commas, immediately after the noun it belongs to, and holds one of three things — who, where or when. The decision, taken by the works office on 2 March, has not been reviewed. Adnan said that is the form they already use for dates, and Ms Huda said that is exactly why it will be accepted: five words, no disturbance to the register, and a committee that would refuse a rewrite into verbs will pass it without comment. But the limit is firm: the insert may not be a hedge. "Apparently at some point in March" is an evasion wearing the shape of one, and the test is to take it out and ask whether the reader has lost a fact. Mazen asked what to do with only one of the three, and the answer is to put the one you have — a date alone is worth having, and a room alone is worth having. Because the rule is not name a person. It is leave the reader somewhere to go. Then Omar said that the eleven sites paragraph needs one insert and not eleven, and Ms Huda said one — and gave the check she will apply to every page anybody writes for the rest of the book: if a cycle teaches you to take the person out, the paragraph has to put them back somewhere. If the class remembers one rule from Unit 2, it is that one. And Hiba asked how you tell an insert from a hedge, and the answer is to take it out and see whether the reader has lost a fact: taken by the works office on 2 March loses the reader an office and a date, and apparently at some point in March loses them nothing, because there was nothing in it.']));
out.push(A('Listener task: one paragraph of the student\'s own that names nobody anywhere, and the insert they will add. Collect the **kind** of each insert on the board as three tallies — who, where, when — and the shape of the class\'s difficulty becomes visible in about a minute.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _The decision taken by the works office on 2 March has not been reviewed._ → **✓** _The decision, taken by the works office on 2 March, has not been reviewed._ Without the commas it is a defining clause, and the sentence now implies there were other decisions.   **✗** _The office suspended, on 2 March, deliveries._ → **✓** _The office suspended deliveries on 2 March._ An insert may not come between a verb and its object.   **✗** _Taken by the works office on 2 March, the decision has not been reviewed._ → **✓** the insert in the middle. At the front it becomes the subject of the reader\'s attention instead of an aside, which is the opposite of what it is for.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That a sentence may leave the agent out and a paragraph may not — once, anywhere, and the reader carries it forward. And she found that **four of the nine** name nobody: not the sentence, not the paragraph, not the attachment.'));
out.push(A('**2** Because all four are **requests**, and a request with nobody in it has nobody to answer it. She says the **reader is not at fault** for not passing on a question that had no one attached to it.'));
out.push(A('**3** **Three dates and one document** — and nobody is named in any of the four, including her in three of them. The other five, which did name somebody, **got answers**; the four that named nobody got none, and until that week she had read all nine as being ignored.'));
out.push(NOTE('The comparison at the end of this model is the most persuasive single fact in Unit 2 and it should be taken slowly: **five paragraphs that named somebody got answers; four that named nobody got none.** Nine data points, collected by accident over eight months, and read the wrong way for all eight. ⚠ Note also the sentence that absolves the reader — _the reader is not at fault for not passing it on_ — because without it the page is a complaint about somebody who did nothing, and the person reading it **is** that somebody. Students write this page naturally as an accusation; the one sentence is what converts it, and it is the sentence they leave out.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**SIX ENTRIES AND TWO HOLES** · M. Hariri · 21 September',
  'Between September and March I made six entries in the fault book about the one model of handset. I have read all six again against one rule, and two of them name nobody.',
  '**The rule I applied.** A sentence may leave the agent out. A paragraph may not. Once, anywhere.',
  '**What they said.** _"Returned units have been found to exhibit the same fault."_ · _"The batch has been identified as the probable source."_ Found by whom, identified by whom — and both are the entries I most want somebody to act on.',
  '**Why that matters more than it reads.** Both are claims that somebody has to stand behind, and in that form nobody does. A supplier reading _has been identified_ has no one to telephone, and I am the only person who has looked at the eleven units.',
  '**The repair, which is four words in each.** _"Returned units — eleven of fifteen, examined by me between September and January — have been found to exhibit the same fault."_ · _"The batch, identified from the serial sequence, has been…"_',
  '**What I have put in rather than names.** One count, two dates and a method. I am named once in six entries, which is enough.',
  '**And the thing I should say.** The four entries that named me got a reply from the distributor. The two that did not have had none, and I had been reading that as the distributor ignoring the fault book.',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**ELEVEN BENCH SHEETS AND THREE HOLES** · Y. Mansour · 22 September',
  'Between June and September I wrote eleven notes on the back of bench sheets about the afternoon run. I have read all eleven again this week against one rule, and three of them name nobody at all — not the sentence, not the note, not the sheet it is written on.',
  '**The rule I applied.** A sentence may leave the agent out. A note may not. Once, anywhere on the sheet, and whoever reads it next can carry it forward.',
  '**What the three said.** _"The result was not reproducible on the second lot."_ · _"A discrepancy was noted in the June calibration."_ · _"It has been agreed that the run will be repeated weekly."_ Three sentences, every one of them a thing somebody did, and nobody in any of them.',
  '**Why that matters more than it reads.** All three are things the next analyst has to decide whether to trust, and a note with nobody in it cannot be questioned — so it is either believed completely or ignored completely, and both are wrong. The analyst who ignored the June one was not being careless. There was no one to ask.',
  '**The repeat, which is a few words in each.** _"The result was not reproducible on the second lot (my run, 29 October, parallel with the first)."_ · _"A discrepancy was noted in the June calibration — by the morning bench, logged 14 June."_ · _"It was agreed at the laboratory meeting of 2 September that the run will be repeated weekly."_',
  '**What I have put in rather than names.** Two dates, one meeting and one bench. I am named once in eleven notes.',
  '**And the thing I should say about all eleven.** The eight that named a bench or a date were acted on. The three that named nobody were not, and I had been putting that down to the afternoon run being nobody\'s priority.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: the faulty sentences quoted together.** You wrote all three in one paragraph, ending _nobody in any of them._ Found: quoted together, which is what makes it a pattern rather than three examples.',
  '**Criterion: the reader absolved.** You wrote _The analyst who ignored the June one was not being careless. There was no one to ask._ Found: two sentences where one would do, and they are the best two sentences on the page.',
  '**Criterion: the insert tested against the hedge test.** You wrote _(my run, 29 October, parallel with the first)_. Found: take it out and the reader loses a person, a date and a method — three facts, so it passes. The second one, _by the morning bench_, loses only a bench, which is still a fact.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('About a quarter of the inserts fail the hedge test, and they fail in the same way every time: a word about the writer\'s certainty standing where a fact should be. Then the rule goes back on the board, for the rest of the book: **if the sentence drops the agent, the paragraph names them once.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The paragraph was from February and had nobody in it anywhere. The three I could have supplied: **when** — easily, the note is dated; **where** — yes, the laboratory meeting; **who** — no, because two of us wrote it together and I cannot remember which sentences are mine. So I supplied **when**, which took no research at all, and that is the answer to the question: the one the rule needs is also the one you already have.']));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  Of, of, of'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the count of the lost figures is the stage. Almost every student loses one on the first attempt and almost every student loses a **date**, which is the finding and should be collected rather than corrected.'));
out.push(A('**b** **1** one _of_ — works.   **2** two — a reader hesitates and then holds it.   **3** three — **broken**; most of the class cannot repeat it.   **4** two, with _for_ and _in_ doing the other two jobs — works, and this is the item to point at.   **5** four — gone, and nobody in the room can say what it is about.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — three sentences of a laboratory report, forty-one words into nineteen; and the chain breaks at the third _of_.'));
out.push(A('**b** **1** The twenty-ninth of October — the only date in the whole write-up that anybody has ever asked about.   **2** You stop and start a verb: **a full stop is cheaper than a fourth _of_.**'));
out.push(NOTE('Two findings here and they are both counts, not opinions. **The limit is two _of_s** — three is where a reader loses the head noun, and the demonstration is to ask the class to repeat a four-_of_ phrase back, which nobody can do, including the person who wrote it. And **a date, a figure or a name can go inside the noun phrase as a modifier**: _the 29 October run_, _the 210 cartons_, _the works-office instruction_. Two words, no structure, and the figure survives the compression. ⚠ A figure that has been given a clause of its own is usually there because the writer did not know this, which is worth saying because it reframes four years of over-careful writing as a gap in grammar rather than a failure of judgement.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a count and a place)_ _We counted them twice. The second figure was 210. They are in the back corridor._ → **The second count of the 210 cartons in the back corridor was made on 11 September.** One _of_, one _in_.',
  '**2** _(a date and a reason)_ _The run was repeated on 29 October. The repeat used a second lot. The reason was the first result._ → **The 29 October repeat with a second lot, prompted by the first result, gave the same figure.** One _of_ — none, in fact.',
  '**3** _(a figure and a source)_ _Thirty-four calls involved a promise. The figure is mine. It comes from the call sheets._ → **My own figure from the call sheets — thirty-four of forty-one calls — involved a promise.** Two _of_s.',
  '**4** _(a decision and an office)_ _A decision was taken. It was the works office. It was 2 March._ → **The works-office decision of 2 March.** One _of_, and a premodifier doing the rest.',
  '**5** _(a request and a deadline)_ _I have asked for three shelves. I asked in August. I need them by the end of the month._ → **My August request for three shelves, needed by the end of the month, has not been answered.** No _of_ at all.',
]));
out.push(A('Item **5** is the one to read out, because it has **no _of_ in it** and students do not believe that is possible. Then make the point that matters more than the compression: in items 1, 2 and 5 the other prepositions — _in_, _with_, _for_, _from_ — are doing the work the third and fourth _of_ would have done, and they do not count against the limit.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _We counted them twice. The second figure was 210. They are in the back corridor._',
  '**B** _(compressed, 1 of)_ _The second count of the cartons in the back corridor was 210._',
  '**A** You have lost **the date of the second count**.',
  '**B** _(put back inside the noun)_ _The second count, on 11 September, of the 210 cartons in the back corridor._ — **sixteen words**, and the 210 is now a modifier rather than a complement.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight compressed sentences with their _of_-counts and the figure that had to be put back. Two findings: **every pair loses a figure on the first attempt**, and the sentences with three or more _of_s are exactly the ones the listener had to ask for twice — which is the evidence for the limit, collected in the room rather than asserted.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My longest noun phrase: "notification of the outcome of the review of the arrangements for the issue of materials". Four ofs. Broken with a full stop: "The review of the issue arrangements has been completed. I have not been told the outcome." What I gained is that the second sentence is a complaint and the original was not — the original did not say that anybody had failed to tell me anything._',
  '**b** _I read my partner\'s aloud once and could not hold it. The noun I attached to the wrong head was_ the review: _I took it as the thing that had been notified, and it is the thing that had an outcome. His pause was after_ outcome, _and it should have been before_ of the review.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Three sentences into one, and the whole difficulty is doing it without losing a number. Yara read the three from the laboratory report — the afternoon run repeated on 29 October, the repeat using a second lot of reagent, the second lot giving the same result as the first — forty-one words with the dates in. Compressed, it came to nineteen, and she had lost the twenty-ninth of October. Ms Huda said that is the fault that matters, because a compressed sentence that has lost a figure is not shorter, it is incomplete, and asked her to put it back without adding a clause. So she put the date inside the noun: the repeat of the 29 October afternoon run. Twenty-one words. Omar said she had put the date inside the noun, and Ms Huda said that is the move — a date, a figure or a name can go inside the noun phrase as a modifier, where it costs two words and no structure, and a figure that has been given a clause of its own is usually there because the writer did not know this. Then Rim asked how long you can go on, and the answer is a count and not a matter of taste: two of s a reader follows, and the third is where it breaks. The reason for the delay in the completion of the review of the arrangements cannot be held by anybody, including the person who wrote it. Jad asked what you do instead of the fourth, and Ms Huda said you stop and start a verb, because a full stop is cheaper than a fourth of. Nour said hers are all five-of sentences, every one, and so are Mr Barghouti\'s — the ordinary product of writing a noun phrase and then needing one more thing. And the sentence to take away is that the compression is not the skill: stopping at two is the skill. Then one pronunciation point, because this is where long noun phrases are lost in speech: the pause goes before the first of that opens a new idea, and nowhere else. Read with a pause in the wrong place and the listener re-attaches the following noun to the wrong head, and the whole sentence has to be said again — which is what has been happening every time one of these paragraphs is read out in a meeting and somebody asks for it twice.']));
out.push(A('Listener task: the student\'s longest noun phrase, its _of_-count, and where the full stop goes. Put the counts on the board: fours and fives are ordinary, and one student in a class of twelve will have a six.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _The repeat of the run of 29 October of the afternoon._ → **✓** _the repeat of the 29 October afternoon run._ The date and the time of day are premodifiers, not _of_-phrases, and this is the error the cycle exists to fix.   **✗** _A second lot reagent run._ → **✓** _a second-**lot** reagent run._ The hyphen is grammar: without it, _second_ modifies _lot reagent run_ and the sentence means something else.   **✗** _The notification of the outcome of the review of the arrangements._ → **✓** two sentences. Three _of_s is not a style to be tidied; it is a missing full stop.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because the third version is shorter than the second and says more, and she could not have got there without the second: the failed compression is what showed her **which figure she was prepared to lose**, and that is not visible from version one.'));
out.push(A('**2** The twenty-ninth of October — and it matters because it is **the only date in the whole write-up that anybody has ever asked about**.'));
out.push(A('**3** Giving every figure its own sentence. She had thought that was **carefulness**, and it is what makes a four-sentence paragraph that stops being read at sentence two.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**CONSIGNMENT 4471 · one paragraph, three versions** · R. Shaaban · 22 September',
  'This is for the three of us who sign refusals, and I am sending all three versions because the third is shorter than the second and has more in it.',
  '**Version one, as we sent it.** _"The consignment was received on 2 September. The temperature on arrival was eleven degrees above the specified maximum. Four pallets were affected. The pallets are being returned."_ Thirty-four words.',
  '**Version two, compressed.** _"The consignment received in September is being returned because of the temperature on arrival."_ Fourteen words — and I had lost **the eleven degrees and the four pallets**, which are the only two things anybody can argue with.',
  '**Version three.** _"The four pallets of consignment 4471, eleven degrees above the specified maximum on arrival on 2 September, are being returned."_ Twenty words. The figures are inside the noun, the temperature is an insert between commas, and there are two _of_s.',
  '**The thing I had been doing wrong for three years, in one line.** A sentence for each fact. I thought it was being thorough.',
  '**The count I would ask you both to make.** Count the _of_s in the longest noun phrase of your last refusal. Three or more and there is a full stop missing.',
  '**And what I am not claiming.** That version three is better English. It is the same English with the figures moved.',
]));
out.push(S('Stage 7 · Write freely (sample, 194 words)'));
out.push(SAMPLE([
  '**THE 06.40 PARAGRAPH · one paragraph, three versions** · T. Ayoub · 23 September',
  'This is for the six of us on the Harasta road and for whoever reads the depot sheet, and I am sending all three because the second one is the one that taught me something.',
  '**Version one, as I wrote it in June.** _"The first service was timetabled for 06.40. The first service left at 06.20. This was the case on forty-one of the sixty-two mornings counted. The count was mine, from the sheet."_ Thirty-six words.',
  '**Version two, compressed.** _"The first service has been leaving early on most mornings according to my own count."_ Fourteen words — and I had lost **the 06.40, the 06.20, the forty-one and the sixty-two**. Four figures out of a sentence of fourteen words, and _most mornings_ in place of all of them.',
  '**Version three.** _"On forty-one of the sixty-two mornings counted from the depot sheet since 1 June, the 06.40 first service left at 06.20."_ Twenty-two words. The times are premodifiers, the count is a single _of_-pair, and the source is a prepositional phrase and not a clause.',
  '**The thing I had been doing wrong for two years, in one line.** Writing _most_ when I had the number. I thought it was being modest.',
  '**The count I would ask you to make.** Count the figures in your own longest sentence and then count the figures in your compressed version. If any has gone, it has not been compressed; it has been weakened.',
  '**And what I am not claiming.** That version three is better written. The same facts, moved into the noun.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: all three versions quoted and counted.** You wrote _Thirty-six words_ · _Fourteen words_ · _Twenty-two words_. Found: all three, and the middle figure is the one that makes the page worth reading.',
  '**Criterion: the lost figure named.** You wrote _the 06.40, the 06.20, the forty-one and the sixty-two_. Found: four, named individually rather than described as _the figures_, which is what makes the loss countable.',
  '**Criterion: the placement described grammatically.** You wrote _the times are premodifiers, the count is a single of-pair_. Found: exact, and it is the sentence that lets the other five drivers do the same thing to their own paragraphs.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Every student has a lost figure and it is almost always a date. Then the sentence to leave the cycle on: **a short sentence that has lost a number is not short, it is wrong** — and the repair is two words inside a noun, not a sentence of its own.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The longest noun phrase in the note I sent on 14 August: _"confirmation of receipt of the amended version of the schedule of works"_. **Four _of_s.** The full stop goes after _receipt_: _"Please confirm receipt. The amended schedule of works went out on 11 August."_ Two sentences, one _of_, and a date that was not in the original at all — which I only noticed because I had to put something in the second sentence.']));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  The sentence nobody argued with'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the second half is the stage: _then say what happened next_. Most of the room answers **nothing**, and the teacher should let that answer stand without comment for four or five students in a row, because the accumulation is what makes the cycle land.'));
out.push(A('**b** A reader could disagree with **2** and **4** — _four pallets were eleven degrees over_ and _the sheet was withdrawn in 2019_ can both be checked and both be wrong. **1**, **3** and **5** cannot be disagreed with by anybody, which is what they are for: _standards must be maintained_, _a more robust process is required_, _appropriate steps will be taken in due course_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — thirty-eight weeks, and that her staffroom has the same kind of sentence on a wall.'));
out.push(A('**b** **1** For **agreement** — nine people with four opinions cannot pass a concrete sentence and all nine can pass an abstract one.   **2** The **eleven degrees** — she has not changed the sentence; she has put one arguable thing after it.'));
out.push(NOTE('⚠ **This cycle is not a lesson about jargon and a teacher who runs it as one will lose it.** The claim is that an abstraction has a **function**, and the function is to make agreement possible: _there is a need for improved communication_ is what nine people with four opinions can pass at six o\'clock on a Thursday, and _the ward sister rings the laboratory before eleven_ is not. Say that plainly and do not apologise for it. Then the price, and it is the only part the class has to remember: **the argument was the work.** An abstraction defers the argument; it does not remove it. Mazen\'s arithmetic belongs on the board for the whole cycle — **thirty-eight weeks of agreement against three weeks of argument** — and the three weeks were spent on the fourteen days and on who writes the date, both of which were necessary and neither of which could be raised until the sentence was concrete enough to raise them.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Standards must be maintained._ Whose standards? From what to what? Maintained by whom, how often? → _Standards must be maintained — the four checks on the back of the sheet, every shift, initialled._',
  '**2** _A more robust process is required._ → _A more robust process is required: two signatures on a return instead of one._',
  '**3** _Appropriate steps will be taken._ → _Appropriate steps will be taken — I am writing to the eleven site managers this week and I shall report in November._',
  '**4** _Lessons have been learnt._ → _Lessons have been learnt. The one that cost most is that a fault with no date on it cannot be counted, so the sheet now has a date field._',
  '**5** _There is a need for improved communication._ → _There is a need for improved communication: the laboratory would like one telephone call before eleven rather than three after four._',
]));
out.push(A('Item **1** is the one to run slowly, because the three questions empty it in about four seconds and the class can watch it happen. ⚠ And note what every repair has in common: **the abstraction has not been deleted.** It stands, and one concrete thing follows it. A class that starts crossing abstractions out has learnt the wrong lesson and will write pages that no committee passes.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Standards must be maintained._',
  '**B** Whose? From what to what? Of what, to whom, how often?',
  '**A** I can answer **whose** — ours, the four of us on the bench. I cannot answer **from what to what**, because there has never been a figure, and I cannot answer **how often**.',
  '**B** Then the arguable thing is **_the four checks on the back of the sheet, initialled every shift_** — and somebody could now say back to you **that the fourth check takes twenty minutes and cannot be done on a short shift**, which is true and is the conversation nobody has had.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight abstractions with the number of questions the speaker could answer. The finding: **one of three** in most cases, and the one they can answer is almost always _whose_ — which means the agent was available all along and the sentence was built round it. That is the link back to 2.2 and it should be drawn explicitly.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My Stage 1 sentence: "Records are to be kept up to date." Nobody has ever argued with it and nothing has happened since January. The arguable thing, after it and not instead of it: "— the fault book written up before you leave the site, not in the evening." What somebody could now say back to me: that on the eleven-site days there is no time between the last call and the depot closing, which is true, and is the reason the evening write-ups started._',
  '**b** _My partner\'s arguable thing was_ "communication should be improved where necessary" _— which nobody can be wrong about, so it is another abstraction. The second attempt,_ "one call before eleven rather than three after four", _can be disagreed with: the morning bench could say eleven is too early for them._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba\'s sentence has been on a staffroom wall since 2022: there is a need for improved communication between departments. She cannot say who put it up, and nothing happened after it went up — which she had always read as nobody caring and now thinks is that there is nothing in it to do. Ms Huda took it apart in three questions. A need — whose? Improved — from what to what? Communication — of what, to whom, how often? Every noun in it is a question with the answer taken out, and that is not a defect of the sentence but the function of it. Dima said so it was written to be unarguable, and Ms Huda said it was written to be passed: a committee of nine with four opinions cannot agree that the ward sister rings the laboratory before eleven, and all nine can agree that there is a need for improved communication. Adnan said they do that in minutes every week. Then the price. Mazen\'s trade association agreed a line in 2022 — appropriate arrangements should be in place for the handling of returned units — seven of them voted for it, he voted for it, nobody argued, and it was in the minutes for six months with nothing in place, because appropriate arrangements is not a thing anybody can be asked whether they have done. In March somebody wrote each member keeps the returned unit for fourteen days and writes the date on it, two people objected, and it was in place in three weeks. Nour said so the argument was the thing that made it work, and Ms Huda said the argument was the work: an abstraction buys agreement and defers the argument, and the argument arrives later with six months of nothing in front of it. Then Rim said her refusal template is that sentence and nobody can object to it — and what she now puts at the end is the eleven degrees. She has not changed the sentence; she has put one arguable thing after it, and twice since Unit 1 somebody has written back to argue about the figure, which is the first time in three years anybody has written back at all. Which is the cheapest repair in the book: keep the unarguable sentence, and put one arguable thing in the same paragraph.']));
out.push(A('Listener task: one abstraction from the student\'s own work and the arguable thing they will put after it. ⚠ Test each one in the room by the Stage 7R rule — somebody must be able to disagree with it **and be wrong** — and hand back the ones nobody can.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Deleting the abstraction: _The four checks on the back of the sheet, every shift._ → **✓** keep the abstraction and add the concrete thing after it. The deleted version will not pass a committee and the cycle is not asking it to.   **✗** _Appropriate steps will be taken, as appropriate._ → **✓** one concrete step with a date. Two abstractions do not make a specification.   **✗** _There is a need for improved communication, which is clearly very important._ → **✓** a figure or a time. An intensifier on an abstraction is the one move that makes it worse, because it claims conviction where there is no content.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A unanimous vote in about four minutes, at the end of a long meeting, with nobody against. He says that if a vote was the object it was a complete success and he **would write it again to get one**.'));
out.push(A('**2** Nothing was in place for **thirty-eight weeks**, from 14 June 2022 to 9 March 2023. The arguable version — _fourteen days with the date written on the unit_ — drew two objections and was in place in **three weeks**.'));
out.push(A('**3** He is **not** suggesting they stop writing lines like that one, because nine people with four opinions will not pass a fourteen-day rule at six o\'clock on a Thursday and he was one of the nine. He is suggesting they keep the line and put **one arguable thing in the same paragraph**.'));
out.push(NOTE('The three weeks are worth unpacking with the class, because the model does it and students skip it: one evening on the drafting, **two weeks on the fourteen days** (one member wanted seven, one wanted thirty) and **one week on who writes the date**, which nobody had thought about at all until the sentence was concrete enough to raise it. ⚠ All three were necessary, and none of them could have happened under the 2022 line. That is what _the argument was the work_ means in practice, and it is also the answer to the student who says the concrete version just causes trouble: the trouble is the decision being made.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE LINE WE ALL AGREED TO** · D. Khoury · 23 September',
  'This is for the nine of us who agreed the style note in 2023, and I drafted it, so this is not an accusation.',
  '**The line.** _"Contributors should ensure that claims are appropriately supported."_ Nine words, agreed without discussion, at the foot of the February 2023 note.',
  '**What it bought.** Nine people agreeing to a style note in one line, at a meeting that had already run forty minutes over.',
  '**What it cost, with the dates.** From February 2023 to September 2025 — **about thirty-one months** — _arguably_ went on appearing forty-one times in six issues, because _appropriately supported_ is not a thing any contributor can be asked whether they have done.',
  '**The arithmetic.** Thirty-one months of agreement against the four days it took, last week, to argue about _four of forty-one_ with two of the nine.',
  '**What I am not suggesting.** That we take the line out. It is the only sentence in the note that all nine of us have ever agreed to.',
  '**What I am suggesting, and it is one sentence.** Keep it and add: _— as a working rate, one stance adverb in four paragraphs, and a figure in the sentence after it._',
  '**And the thing I shall own about my own.** I have _house style applies throughout_ at the top of every brief I send. It has applied to nothing for two years.',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**THE LINE WE ALL VOTED FOR IN 2021** · A. Barghouti · 24 September',
  'This is for the six of us who were in the room, and I drafted the wording, so this is a count and not an accusation.',
  '**The line.** _"Arrangements for the retention of correspondence should be kept under review."_ Eleven words, passed without a vote against, in the minutes of 9 November 2021.',
  '**What it bought.** The end of a meeting. Two of the six wanted a two-year rule, two wanted five, one wanted everything kept, and at twenty past six we agreed that arrangements should be kept under review.',
  '**What it cost, with the dates.** From November 2021 to this month — **forty-six months** — nothing has been reviewed and nothing has been destroyed. Four rooms, and I cannot tell you what is in two of them. _Kept under review_ is not a thing any of the six of us can be asked whether we have done.',
  '**The arithmetic I would put in front of the six of us.** Forty-six months of agreement against one afternoon. Last Tuesday I wrote _correspondence is kept for three years and then listed for destruction by the office that raised it_, and in one afternoon two people objected, both on the three years, and we have a rule going to the next meeting.',
  '**What I am not suggesting.** That we should have settled it in 2021. At twenty past six, with four positions in the room, the abstraction was the only sentence that could have been passed, and passing something was not worthless.',
  '**What I am suggesting, and it is one sentence.** Keep the line and put one arguable thing in the same paragraph: _— as a starting point, three years, listed by the raising office._',
  '**And the thing I shall own about my own.** _Files to be maintained in good order._ That is mine, 2016, on the front of every cabinet. Nine years.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: your own vote admitted in the first two lines.** You wrote _I drafted the wording, so this is a count and not an accusation._ Found: in the second line, and the word _drafted_ is stronger than _voted for_ — it concedes more than it had to.',
  '**Criterion: both costs in the same unit.** You wrote _forty-six months_ against _one afternoon_. Found: the units are not the same, and the mismatch is working in your favour, which a reader will notice — give both in days or both in months and the figure is still overwhelming.',
  '**Criterion: one arguable thing added without changing the sentence.** You wrote _— as a starting point, three years, listed by the raising office._ Found: added after the line, not instead of it, and _as a starting point_ is what makes it an invitation rather than a proposal.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each arguable thing is tested in the room: somebody must be able to disagree with it **and be wrong**. The ones nobody can disagree with go back. Then Mazen\'s arithmetic, which closes the cycle: **thirty-eight weeks of agreement against three weeks of argument**, and in 2022 seven of them voted to put the argument off.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The abstraction: _"Safety is everyone\'s responsibility."_ Where: a printed sign by the goods door. How long: since the door was rehung, which was 2018, so seven years. What has happened since: the door has no mirror and three people have asked for one, two of them in writing. **Nobody has ever objected to the sign and nobody has ever acted on it, and those two facts are the same fact.**']));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  Two paragraphs, one page'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the third question is the one that does the work: _which one would you send, and which one is true?_ About half the class finds those are different versions, and that gap is the cycle.'));
out.push(A('**b** **1** a figure → **paragraph one**.   **2** a name → **paragraph two**.   **3** a date → **paragraph one** (and the deadline, which is a different kind of date, goes in **two**).   **4** a disagreement → **paragraph two**, always, and this is the one the class gets wrong.   **5** an instruction → **paragraph two**, because an instruction needs somebody to carry it out and somebody to ask.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — because a page with only the first is unusable and a page with only the second is unsendable; and that the second one contains the actual disagreement.'));
out.push(A('**b** **1** The **figures and the dates**, because they survive forwarding, summarising and filing.   **2** For the person who has to **act** — and it names them.'));
out.push(NOTE('⚠ **The sharpest point in Unit 2 is in this cycle and it is easy to read past: an agentless sentence is most dangerous when it hides a _disagreement_, not a decision.** _The discrepancy has not been resolved_ is a sentence about two people disagreeing, with nobody in it, and a reader will therefore try to **solve** it — recalculate, check the drawing, look for an error — instead of **settling** it, which is sending a third measurer. Lubna wrote that sentence herself on the eleventh and did not notice for twelve days. Make the class look for the same thing in their own paragraph one: **if a noun could be rewritten as _two people do not agree_, it belongs in paragraph two.** The nouns to watch are _the discrepancy_, _the inconsistency_, _the difference of view_ and _the delay_.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a figure and a disagreement)_ **One:** _The second count on 11 September gave 210 cartons; the stores figure for the same date is 186._ **Two:** _The storeman and I counted on the same morning and we do not agree. He counted the two pallets in the lobby as despatched; I counted them as held. Neither of us has moved, and I should like somebody else to count on Thursday._',
  '**2** _(a date and an instruction)_ **One:** _The handover form was revised in the March release. The lot-number box has not appeared on the printed version._ **Two:** _Sister Mardini asked for the box in January and I asked again in July. Could whoever prints the forms add it before the next run, or tell me who does?_',
  '**3** _(a count and a refusal)_ **One:** _Four pallets of consignment 4471 were eleven degrees above the maximum on arrival on 2 September._ **Two:** _I am sending them back. The driver says they stood in the yard at Homs overnight and the yard says they did not, and I am not going to decide between them — I need the Monday gate log._',
  '**4** _(a fault and a name)_ **One:** _Eleven of the fifteen handsets of one model have returned with the same fault since September._ **Two:** _I told the distributor\'s representative in November and again in February. I should like him to look at the eleven himself rather than at my book._',
  '**5** _(a decision and the person it lands on)_ **One:** _Late submissions have not been accepted since 1 November 2019. Extensions requested before the date have never been stopped._ **Two:** _Three of us decided it, in the directorate office, on 24 October 2019. If you cannot meet a date, ask me — not the heads of section, who were never told that extensions continued._',
]));
out.push(A('Item **1** is the one to read out twice, because paragraph one contains a disagreement and does not say so — two numbers for one morning — and the class should be asked what a reader would do with it. The answer is _recount_, which is the wrong action, and paragraph two is what makes _send a third person_ visible.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(paragraph one, no person)_ _The second count on 11 September gave 210 cartons. The stores figure for the same date is 186._',
  '**B** On that alone I could **recount them**, which is what I would have done.',
  '**A** _(paragraph two, everybody named)_ _The storeman and I counted on the same morning and we do not agree about the two pallets in the lobby. He has them as despatched and I have them as held. I should like somebody else to count on Thursday._',
  '**B** Now I could **send somebody on Thursday** — and the sentence that was hiding somebody was **_the stores figure for the same date is 186_**, which sounds like a figure and is a person.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each of the eight pairs, the one sentence in paragraph one that was hiding a person. The finding: in **six or seven of the eight** it is a sentence about a **disagreement** and not about a decision — which is the opposite of what the class expected at the start of the unit, and it is worth saying so out loud.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** **One** _(41 words)_: _The afternoon run was repeated on 29 October with a second lot of reagent. Both lots gave the same result. The June calibration record for the instrument shows a discrepancy of 0.4 which has not been reconciled._ **Two** _(58 words)_: _The morning bench and I read the June calibration differently. They take the 0.4 as within the stated range and I do not, and we have both been working from the same sheet since June. I have asked the manager for an outside calibration and I should like it before the quarterly return on 10 October._ The sentence in one that was hiding somebody: **_which has not been reconciled_**.',
  '**b** _My partner\'s first paragraph would not survive being forwarded: the word that fails is_ "the usual sheet" _— a stranger has no idea which sheet, and it is the only noun in the paragraph that cannot be looked up._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Two paragraphs, one page, same reader: the first with no person in it at all, the second with everybody in it by name. Lubna asked why anybody would send both, and Ms Huda said because each alone fails in a way they have all seen — a page with only the first is unusable, four weeks of correspondence and nobody to ask, and a page with only the second is unsendable, because it reads as a quarrel in writing and the reader has to take a side before they reach the figure. Adnan said that is what his fourth paragraph was avoiding. Then Lubna did the scaffold survey. First paragraph: the survey of the first-floor joint was completed on 11 September, the 1974 detail is not as drawn and the discrepancy has not been resolved. Second: Mr Rifai and I measured the joint on 11 September and we do not agree about it — he reads the detail as drawn with a 90 mm bearing and she reads 60 mm on site, neither has moved, and she has asked for a third measurement. Omar said the second one has the whole thing in it, and Lubna said it has the disagreement in it: the first one says the discrepancy has not been resolved, which she wrote, and she had not noticed until that minute that it is a sentence about two people disagreeing with nobody in it. Which Ms Huda said is the finding of the cycle: an agentless sentence is most dangerous not when it hides a decision but when it hides a disagreement, because a disagreement with nobody in it reads as a technical fact, and the reader then tries to solve it instead of settling it. Dima asked whether the first paragraph is still worth having, and Ms Huda said it is and it has to come first, because the figures and the dates survive forwarding, summarising and filing, and a reader who disagrees with the second will still carry the first forward intact. And the lengths are firm: about forty words and about sixty, no headings, a line between them — longer and you have written a report, and the whole effect depends on a reader seeing both at once.']));
out.push(A('Listener task: the sentence in the student\'s own paragraph one that was hiding somebody. Collect them and read six aloud in a row, because the pattern — a disagreement wearing the clothes of a measurement — is only visible in a series.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** A paragraph one of a hundred and ten words. → **✓** about forty. The whole effect depends on a reader seeing both paragraphs at once; a long paragraph one is a report with a note under it.   **✗** _Background_ · _Discussion_ as headings. → **✓** a line. A heading says what the paragraph is **about**; the line says **who it is for**, which is the signal that matters.   **✗** A figure appearing for the first time in paragraph two. → **✓** every figure earns its place above the line first, because paragraph two is the part that does not get forwarded.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The figures, the dates and the documents: the survey date, the 90 mm, the 60 mm, the 30 mm discrepancy and the absence of a load calculation. It has no person in it **on purpose** because in six months it will still be true and it will not be about anybody.'));
out.push(A('**2** For whoever can **send a third measurer** — and that person needs the names, the dates and the disagreement, because a 30 mm discrepancy is not a technical fact but two people reading the same tape differently, and paragraph one does not say so.'));
out.push(A('**3** She is **not** asking anybody to decide between them, and she concedes that Mr Rifai has nineteen years on her and may well be right. About her own sentence: _the discrepancy has not been resolved_ is hers, written on the eleventh, and it sat for twelve days — **because there was nobody in it, nobody did anything about it, including her**.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE ELEVEN SITES · FAULT SHEET DATE FIELD** · O. Darwish · 24 September',
  'The date field was added to the fault sheet in March. Of the eleven sites, four are still returning the pre-March sheet. Ninety-one faults have been returned since 1 June with no first-noticed date, which is about a third of the total.',
  '_______________________________________________',
  'Two of the four sites say they were never sent the new sheet and two say they prefer the old one. Mr Saqqal at the Mezzeh store told me in July that the new sheet takes longer, and he is right — it takes about four seconds longer. I have not decided whether that matters and I am not going to decide it on my own. I should like ten minutes with whoever supplies the printed pads, before the next print run in October.',
  '**Why this page is in two paragraphs.** The first is the one that will be forwarded and quoted, and it has nobody in it because the ninety-one is true whatever anybody thinks. The second is for whoever controls the print run, and it needs Mr Saqqal in it, because **two sites not having a sheet and two sites refusing one are different problems and the first paragraph calls them both _still returning the pre-March sheet_.**',
  '**What I am not asking for.** I am not asking anybody to tell the four sites to change. Two of them have a reason and one of the reasons is good.',
  '**And the thing about my own sentence.** _Four are still returning the pre-March sheet_ is mine, and it has been in three of my notes since June. It is the sentence that made this look like a distribution problem for four months.',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**THE FORUM GUIDELINES · CLAUSE 4** · J. Attar · 25 September',
  'Clause 4 of the posting guidelines was added in the January revision. It requires that sources be cited for factual claims. Of the two hundred and six posts removed since January, **thirty-one** were removed under clause 4, and of those thirty-one, **nineteen** carried a source that an editor judged insufficient.',
  '_______________________________________________',
  'Two of the four editors read clause 4 as requiring a link and two read it as requiring a nameable source. Munzer removes a post with a named newspaper and no link; Hanan does not. Both have been applying clause 4 since January and neither has been told the other reads it differently, because the removal log records only the clause number. I should like the four of us in a room for twenty minutes before the April revision, and I should like Munzer and Hanan to bring one removed post each.',
  '**Why this page is in two paragraphs.** The first is the one that goes to the committee, and it has nobody in it because the nineteen is true however clause 4 is read. The second is for whoever can call the four of us together, and it has to have Munzer and Hanan in it by name, because **_judged insufficient_ is not a standard being applied unevenly — it is two standards, and the first paragraph makes it sound like one.**',
  '**What I am not asking for.** I am not asking which of them is right. I have been removing posts for nine months and I do not know which of them I agree with.',
  '**And the thing about my own sentence.** _An editor judged insufficient_ is my wording, from the log summary I wrote in June, and it is the sentence that made nine months of disagreement look like a quality problem.',
]));
out.push(S('Stage 7P · Respond (sample slip — criterion named and the line quoted)'));
out.push(SAMPLE([
  '**Criterion: paragraph one with no person and every figure.** You wrote _two hundred and six … thirty-one … nineteen_. Found: three figures, no person, and the three of them are in the right order — total, subset, finding.',
  '**Criterion: the disagreement named as a disagreement.** You wrote _it is two standards, and the first paragraph makes it sound like one._ Found: present, and the word _standards_ is doing the work. Without that sentence the committee will commission a review of editorial quality.',
  '**Criterion: the concession to the other person.** You wrote _I do not know which of them I agree with._ Found: and it is the strongest line on the page, because it is the one thing nobody could have required you to say.'
]));
out.push(S('Stage 7R · Share'));
out.push(A('The two paragraphs are read straight through, once, and the room hears the change of voice. Then the sentence to leave the cycle on, which is Lubna\'s and is the hardest thing in Unit 2: **because there was nobody in it, nobody did anything about it, including me.** Twelve days, one sentence, and the sentence was hers.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['Sent on Wednesday morning. The reply came on Thursday and it answered **paragraph two**: _bring Munzer and Hanan on the 3rd, twenty minutes._ Nothing in the reply mentioned the thirty-one or the nineteen at all, which I had expected to be the part that mattered — and I now think paragraph one was not for this reader. It was for the April revision paper, where it will be quoted by somebody who was not at the meeting.']));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: Four paragraphs nobody can read'));
out.push(S('Stage 1 · Get ready – Unit 2 quiz'));
out.push(A('**1** _the suspension of deliveries, a works-office instruction of 2 March, pending the review_ — four _of_s reduced to one, with an insert carrying the office and the date.   **2** _no **notification** of the reclassification was given._   **3** _the decision, **taken in March**, has not been reviewed_ — the hedge replaced by a fact.   **4** _there was no **compliance** with the instruction._   **5** _the **committee\'s** decision was taken on Thursday_ — the possessive, which cannot shed the committee.   **6** _the repeat of the **29 October afternoon** run gave the same result_ — the date and the time of day are premodifiers.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the four paragraphs are read, with their sorting, before the recording. Do not discuss them yet.'));
out.push(A('**b** The **second** cannot be repaired — there is nothing to put in, the schedule is unsigned, and he has looked twice. And mediation is **working out what the reader needed from the text and was never told** — which is almost never what the text says.'));
out.push(A('**c** Open; listen and read together.'));
out.push(NOTE('⚠ **The definition of mediation is the single most important sentence in Unit 2 and it is counter-intuitive, so give it twice.** Mediation is **not** making a hard text easier. A simplified paragraph is shorter than the original and says the same thing; a mediated paragraph is often **longer**, because it adds the thing the reader needed and was never told. In Mr Barghouti\'s fourth paragraph that thing is five words long — _extensions were never stopped_ — and it is four years late. The three questions that find it are: **who is this about** (not who it was sent to), **what will they do next** on this paragraph alone, and **what would they have to know that it does not say**. The answer to the third is almost always **what is still permitted**, because a notice says what has stopped and forgets to say what has not. Note also the honest repair for the unrecoverable case: _the reclassification, for which no originating office is recorded, was effective 1 January_ — nineteen words, nobody named, and the reader told not to look. That is an answer and not a failure, and a class that treats it as a failure will fabricate an agent for every paragraph in Stage 4.'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here sorts rather than drills, and the sorting is done in Stage 3 on two documents the class has not seen.'));
out.push(S('Stage 3 · Practise (sample – Sheet A)'));
out.push(SAMPLE([
  '_**1** "The revision of the handover documentation was implemented in March."_ → **gone but recoverable.** There is a date, so there is a release, so there is an office. Repair: _the revision, in the March release,…_',
  '_**2** "Compliance with the counting protocol is expected at all times."_ → **never there at all.** Nobody was ever in this sentence; it is an abstraction, and the repair is 2.5 — one arguable thing in the same paragraph: _…the four checks on the back of the sheet, initialled each shift._',
  '_**3** "Reference to the duty sister is required in all cases of discrepancy."_ → **could be found.** Somebody required it, on some date, and the duty sister rota will say who.',
  '_**4** "It has been determined that the practice of verbal handover will cease."_ → **removed on purpose**, and the _it_-family gives it away. Repair: the date and the room, and then the mediation — **who is this about?** The nurses who hand over verbally, and nobody has written to them.',
]));
out.push(A('Both sheets are deliberately the same arithmetic from two trades, and the class should be made to notice that before they are told: the hospital circular and the depot notice fail in the same four ways, in the same order.'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The four kinds for each sheet. On **both**, **1** is gone but recoverable (there is a date), **2** was never there at all, **3** could be found, and **4** was removed on purpose. ⚠ And on both, paragraph **4** is the one about somebody nobody has written to — which is the finding, and it is the one the class is slowest to reach.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_My paragraph was from the depot: "It has been decided that unrecorded departures will no longer be accepted." Sorted: removed on purpose — it is the_ it_-family. Who it is about: the six of us who drive the first service. Has anybody written to us? No. It went to the foreman and the foreman put it on the muster-room board in 2022._',
  '_My partner\'s rewrite, for a driver: "From the first of March the depot will not accept a departure with no time written against it. This was decided at the depot meeting of 14 February 2022. If you leave at a different time from the printed one, write the real time and tell the office the same morning — that has always been allowed and the notice never said so."_',
  '_What it did not say that we needed: **that writing a different time is permitted.** For three years I believed the notice meant we had to leave at 06.40, and six of us have been writing 06.40 on a sheet while leaving at 06.20._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Four paragraphs, three kinds, and then the question the unit was for: which can be repaired, and for whom? Adnan said three can and one cannot, and it is the second — the reclassification of the post, on an unsigned schedule, with no office, no date beyond the first of January and no name anywhere in the file. He has looked twice. Ms Huda said that is an answer and not a failure: a paragraph with no recoverable agent is repaired by saying so — the reclassification, for which no originating office is recorded, was effective 1 January. Nineteen words, nobody named, and the reader is told not to look. Nour said that is more honest than the original, and Ms Huda said it is the only honest version available. Then the first paragraph, with its one found agent put back as an insert and the minute number in it: thirty-four words, down from forty-one. Rim said it is shorter and has more in it, which is 2.3 and 2.4 arriving together — the insert went inside the noun phrase and three ofs came out. Then the hard one. Who is paragraph four about? Hiba said the people who submit late. And has anybody written to them? No. Four years. The paragraph went to the heads of section and the heads of section put it on a board. So Adnan rewrote it for a person who submits late on a Thursday with a reason: from 1 November we are not taking late submissions, decided on 24 October 2019 in the directorate office, and if you cannot meet a date, say so before it and ask for an extension — that is still allowed and always was, and it is the part the notice never said. Dima said the last clause is the whole thing, and Adnan said it is the thing nobody has known for four years: extensions were never stopped, and the notice only said what was stopping. Which gave the class the definition. Mediation is not making a hard text easier. It is working out what the reader needed from it and was never told, and that is almost never what the text says — it is what the text leaves out. Lubna said so you have to know the reader, and Ms Huda said you have to know what the reader will do next, which is why this cycle is at the end of Unit 2: you cannot find what a paragraph left out until you can see where its people went.']));
out.push(A('Listener task: the one thing the partner\'s paragraph never said, and the person who needed it. ⚠ Collect these on the board and count how many are **a permission** rather than an instruction: it will be most of them, and that count is the whole argument of the cycle.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** A rewrite that is shorter than the original and says the same thing. → **✓** mediation adds the missing permission, so it is often longer. Simplification is not the task.   **✗** An invented agent: _it was decided by the management_. → **✓** _for which no originating office is recorded_. Where nobody can be found, say so; a fabricated agent is worse than none, because the reader will go and ask them.   **✗** A rewrite addressed to the file: _staff are advised that…_ → **✓** addressed to the person: _if you cannot meet a date, ask me._ The whole cycle is the change of addressee, and a third of any class misses it on the first attempt.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 4)'));
out.push(A('**1** was no compliance with   **2** removal of the sheet took   **3** was reached by   **4** decision to discontinue   **5** notification of the reclassification   **6** an agreement to'));
out.push(A('Two things to say about this task, because it is the first Part 4 of the course. **The word given never changes its form** — _COMPLIANCE_ stays _compliance_, and a student who writes _complied_ scores nothing however good the sentence is. And **the answer is between two and five words inclusive**, counting the given word: item 6 is three words and item 2 is five, and a student who writes a perfect six-word answer scores nothing. ⚠ Both rules cost marks far more often than the grammar does.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOR THE SIX ON THE FIRST SERVICE, ABOUT THE DEPARTURE NOTICE** · T. Ayoub · 25 September',
  'From 1 March 2022 the depot will not accept a departure sheet with no time written against it. This was decided at the depot meeting of 14 February 2022, in the depot office.',
  '**What it does not change, and the notice never said so.** Leaving at a time other than the printed one is **still allowed**, and always was. The notice says what the depot will not accept on the **sheet**. It says nothing about the bus.',
  '**What to do if the first service goes early.** Write the real time on the sheet and tell the depot office the same morning — before you go if you can, and after if you cannot.',
  '**Who to ask.** The depot office, not the foreman. _(The foreman was never told that the real time is acceptable, which is why he has been sending people back to change the sheet.)_',
  '**And the one thing I cannot tell you.** Whether the printed 06.40 will be corrected. I have asked and I have had no answer, and that is a separate thing from this notice.',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 2: an article)'));
out.push(A('⚠ **This is the first article of the course and the register is different from everything else in the unit.** An article is written for people who **chose** to read it: it may ask the reader a question, address them directly as _you_, and end on a judgement. An official paragraph may do none of those things, and a student who writes the article in the register of Unit 2 has written a report and will be marked as having written one.'));
out.push(A('**Mark on four things and nothing else.** **1** Is there one official sentence **quoted exactly**? **2** Is it said **who it left out**? **3** Is the cost given as something countable — weeks, months, a number of people? **4** Does it end on a **judgement** rather than a summary? ⚠ And one structural point worth a minute of class time: an article needs a **title**, and a title is not the same as a subject line. _The sentence nobody argued with_ is a title; _Report on official language_ is a subject line.'));
out.push(SAMPLE([
  '**THE SENTENCE NOBODY ARGUED WITH**',
  'Have you ever obeyed a sentence that nobody wrote? I have obeyed one for four years, and so, I suspect, have you.',
  'The sentence is this: _"It has been decided that the practice of accepting late submissions will be discontinued."_ It went up on a board in my office in November 2019 and it is still there. Nineteen words, perfectly correct, and not one person in it.',
  'For a long time I took the absence of a person for the absence of a decision — as though the thing had simply become true, the way the weather does. It had not. Three people decided it, in a room, on a Thursday, and I now know which three. The sentence left them out to protect one of them, and I understand why, and I would probably have done the same.',
  'But here is what it cost, and it is worth more than my opinion about it. **Nobody argued with that sentence for eleven months.** Nobody asked who had decided, nobody asked for an exception, and nobody stopped submitting late either — because a reader who wants an exception needs somebody to ask, and there was no one. Forty-one late submissions in the eleven months before the notice; thirty-nine in the eleven months after it. The paper changed and the practice did not.',
  'What I would have wanted is not three names. It is five words: _decided on 24 October 2019, in the directorate office_. Nobody exposed, and a reader with somewhere to go.',
  'So if there is a sentence like that on a wall where you work, do not take it down. **Find out what it leaves out, and write that underneath.** The silence around it was never agreement. It was nobody being able to reach it.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('No Stage 7P in x.7. The sharing is the mediation report and the clinic; the cycle closes on the four paragraphs and on the count of how many of the missing things were **permissions**.'));
out.push(S('Unit 2 check · A  Grammar and vocabulary'));
out.push(A('**1** b   **2** c   **3** a   **4** b   **5** a   **6** c   **7** b   **8** a'));
out.push(A('Item **2** is the _it_-family: _there has been decided_ is not English and _it has decided_ makes the practice the decider. Item **3** is the countability point — _compliance_ and _guidance_ have no plural, so **notifications** is the only possible answer. Item **5** is the hedge test: only _, on 2 March,_ leaves the reader poorer when it is removed.'));
out.push(S('Unit 2 check · B  Listening (B2 First Listening Part 2 style – sentence completion)'));
out.push(A('**1** nineteen   **2** forty-one   **3** one   **4** works   **5** Three   **6** eleven   **7** room   **8** forty'));
out.push(A('Read the script **after** the check, and read it once. ⚠ Part 2 answers are words that are **actually spoken** — a student who writes _three people_ for gap 5 or _the works office_ for gap 4 has added a word that was not in the gap and loses the mark, and this is the single commonest Part 2 error. Say so before the first attempt, not after.'));
out.push(S('Unit 2 check · C  Writing'));
out.push(A('The pair, and marked on two things only: **does paragraph one contain every figure and no person, and does paragraph two contain the disagreement and the name?** Nothing else in this unit is assessed. ⚠ A paragraph one of more than about fifty words has failed whatever else is right about it, because the pair only works if a reader sees both at once.'));
out.push(S('I can… (Unit 2)'));
out.push(A('Self-assessment; no answers. The three that matter are the third, the sixth and the eighth: keeping the agent recoverable with one insert and telling an insert from a hedge, writing the pair, and rewriting a paragraph for the person it is about while naming what it never said. A class that ticks the suffix families and the _of_-chains and not those three has learnt some grammar and will go on writing paragraphs that nobody can answer.'));
out.push(box('Looking ahead to Unit 3', [
  'Units 1 and 2 were about who is in a sentence. **Unit 3** is about holding a position for four paragraphs: the thesis sentence, the point conceded, the third point that is the student\'s own, and the conclusion that adds one thing.',
  '⚠ **3.7 reads the essay written badly in 1.7, and the whole cycle depends on its being unimproved.** Ask for it in the Unit 2 lesson and ask again in the first Unit 3 lesson. If a student has rewritten it, ask for both and have them say which is which — the comparison still works, but only if the dates are honest. **Do not mark the 1.7 essay at any point before 3.7.**',
  '**Ask the class now for 3.2:** one essay-shaped argument they have **lost** — at work, at home, in writing or out loud — where they believe they were right and did not carry it. 3.2 is built on **the point they should have conceded and did not**, and a class that brings arguments they won has a cycle about rhetoric instead of a cycle about conceding.',
  '**And one thing to keep from Unit 2.** The paragraph each student rewrote for the person it was about. **4.6** separates what is known from what is inferred, and that paragraph is the first place most of them will find they have been mixing the two.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 2 · Answer Key');
