// Proactive English C1 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE PANEL ASKED', 'WHAT THE ANSWER HAS TO CARRY'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const twolist = (rows) => table(['WHAT I WOULD NOT WRITE NOW', 'WHAT I WOULD STILL WRITE'], rows, [1, 1]);
const clinic = '**Board clinic:** your teacher writes three answers from the reports on the board. For each one the room says whether the concession grew, and where.';
const slip = '**Peer review, C1 band 3** — **and this is new.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and then **hand it over unsigned.** **The writer answers in one line, and the line must either concede or refuse with a reason.** **A line that does neither is the fault this band exists to find.**';

out.push(h1('Unit 13  The Panel That Has Read Your Writing'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Book 2 opens where your readiness page left off.** ⚠ **Every move on that page was made harder in one direction and one only: the reader\'s power to refuse you.** **This unit is the first of the twelve and it takes the hardest reader there is** — **a panel that has read what you wrote, has it in front of them, and is going to ask you about it out loud.**',
  '**The document is old.** **That is the whole difficulty.** ⚠ **You wrote it eight months ago and you are not that writer any more**, and the honest sentence — _I would not write that now_ — **is a sentence that costs you the room unless two other things follow it immediately.** **13.1 is about those two things.**',
  '**13.1** answers a question about a document you wrote eight months ago.   **13.2** holds a concession under questioning without letting it grow.   **13.3** says what you would not have written and what you would still write, in the same forty seconds.   **13.4** answers a question whose premise is wrong without correcting it rudely.   **13.5** is asked about a figure you cannot remember.   **13.6** writes the two-page note the panel will have read before you arrive.   **13.7** mediates between a candidate\'s own note and the panel\'s reading of it.',
  '**Exam practice in 13.7:** C1 Advanced **Reading and Use of English Part 2** (open cloze), **Writing Part 1** (the essay) and **Listening Part 1** (three extracts).',
  '⚠ **Bring one document to the first lesson and it must be at least six months old.** **Something of yours that somebody else has read and acted on**: a chapter, an opinion, a letter, a file, a report. **Not a piece written for this course.** **If the only old document you have is one nobody read, bring it and say so at Stage 1** — **a document with no reader is a different exercise and 13.1b names it.**',
  '**And the warning the room needs before anything else.** ⚠ **Peer review changes in this unit and it changes for the rest of the course.** **The slip is unsigned**, and you answer it in one line that has to concede or refuse. **The reason is not politeness and it is not anonymity**: it is that an unsigned slip cannot be discounted by who wrote it — **and in a class where two people have been in the room for four years, that is the only way to make the other eight readable.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 13.1 =====================
out.push(pb());
out.push(h2('13.1  The document you wrote eight months ago'));
out.push(p('**Function:** answering a question about a document you wrote eight months ago   ·   **Grammar:** the honest _I would not write that now_, and the two things that must follow it   ·   **Pronunciation:** a concession said without a drop in volume'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the document you brought, its date, and who read it.** ⚠ **One sentence, and then stop.** Your teacher writes the ten dates on the board and leaves the second column empty. **In most classes the oldest document in the room is about three years old and the newest is just inside six months** — **and the student with the oldest one has the hardest cycle, not the easiest.**'));
out.push(board('Would you write that sentence today?', 'The answer, and then two things.'));
out.push(p('**b**  Which two of these are answers a panel can use? **1** _I would not write that now, and I should say what I would write instead: the same finding with the number of positions in the same sentence._  **2** _Looking at it again, I am not very happy with that section._  **3** _I would not write that now. What has changed is not the finding but where the limit sits, and the limit is why the finding held._  **4** _That was eight months ago and I have learnt a great deal since then._  **5** _I think it reads quite badly, to be honest._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide must follow _I would not write that now_?   **A** an apology   **B** **what you would write instead, and what has not changed** — two things, immediately, in the same turn   **C** an explanation of what you have learnt'));
out.push(p('**b**  Listen again. **1** What was Mrs Tarabishi asked, and what did she answer first?   **2** What does Mrs Khoury say happens to a candidate who stops after the concession?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  Two things, immediately', [
  ['Ms Huda', 'Mrs Tarabishi — you had a panel in January. What did they open with?'],
  ['Mrs Tarabishi', '⚠ **Section 4.6, which I wrote on the second of May.** **The chair read my own sentence back to me and asked whether I would write it today.**'],
  ['Mr Shihabi', 'And would you?'],
  ['Mrs Tarabishi', '**No.** ⚠ **And I said no, and then I stopped, and the silence was four seconds long and it cost me the next twenty minutes.**'],
  ['Mrs Khoury', '⚠ **Because a concession with nothing after it is an invitation, and the room should hear why.** **A panel that is handed _I would not write that now_ and nothing else has been given a door** — **and the next question is always about the thing you did not name, because you have just told them you cannot defend it and have not told them what you can.**'],
  ['Dr Qabbani', 'So you do not concede at all.'],
  ['Mrs Khoury', '⚠ **You concede, and you finish the turn.** **Two things, immediately: what you would write instead, and what has not changed.** **The second is the one candidates leave out** — **and it is the one that keeps the finding standing while the sentence is being given away.**'],
  ['Mrs Oueidat', 'The finding and the sentence are different objects.'],
  ['Mrs Tarabishi', '⚠ **Which is what I did not have in January and have now.** **The finding in 4.6 is nine findings at four degrees of certainty and it is correct.** **The sentence I wrote put the degree in a clause of its own, and that is what I would not write now** — **the degree goes inside the sentence that carries the finding, which is 9.3, and I had been taught it and had not applied it to my own chapter.**'],
  ['Mr Tayara', 'And you say all that out loud?'],
  ['Mrs Oueidat', '⚠ **You say the two sentences and you stop.** **_What I would write instead is the degree inside the finding\'s own sentence._ _What has not changed is the finding: nine at four degrees, and section 4.6 still supports it._** **Twenty-six words, and the panel has nothing to open.**'],
  ['Mrs Rizk', 'What if you would not change anything?'],
  ['Mrs Khoury', '⚠ **Then say so, and that is a rarer answer than this room expects.** **In this class eight of the ten found something they would now write differently and two did not** — **and both of the two had documents under eight months old, which is the shortest interval at which this question has an interesting answer.**'],
  ['Mr Zahreddine', 'Mine is three years old and the whole of it is different.'],
  ['Mrs Khoury', '⚠ **Then the answer is not about the document at all and it has a shape of its own.** _I would write all of it differently and the finding is unaffected; what has changed is the order._ **A candidate who tries to concede a three-year-old document sentence by sentence has agreed to be examined for an hour on prose nobody is disputing.**'],
  ['Mr Attar', 'What about volume? Mine dropped.'],
  ['Mrs Tarabishi', '⚠ **Mine dropped too and it is the thing I would fix first.** **A concession said quietly is heard as a retraction** — **and the panel then asks about the next thing, and the next, because quiet is the sound of a candidate who has more to give away.**'],
  ['Mrs Ajouz', 'So the voice does not change at all.'],
  ['Mrs Oueidat', '⚠ **Not at the concession and not after it.** **Same volume, same speed, no pause before _no_** — **and the two sentences that follow come at the same pitch as everything else you have said, because they are not an apology and must not sound like one.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the four seconds.** **I had the two sentences in my notes and I did not say them, because I had decided in advance that honesty was the whole of the answer** — **and honesty that stops in the middle is not honesty, it is an unfinished turn.**'],
]));
out.push(sp());
out.push(box('Language box – conceding a document you no longer own', [
  '**The concession, and it is one clause.** ⚠ _I would not write that now._ **Five words.** **No adverb, no _to be honest_, no _looking at it again_** — **and the room should notice that every softener available makes it longer and weaker at the same time.**',
  '**Then two things, immediately, in the same turn.** ⚠ **One: what you would write instead.** _What I would write instead is the degree inside the finding\'s own sentence._ **Two: what has not changed.** _What has not changed is the finding: nine at four degrees, and section 4.6 still supports it._ **The second is the one candidates leave out and it is the one doing the work.**',
  '**The finding and the sentence are different objects, and this is the distinction the whole cycle rests on.** ⚠ **You can give away a sentence and keep a finding.** **A candidate who cannot separate them gives away both, one question at a time** — **and a panel is entitled to take everything that is offered.**',
  '**Where the document is years old rather than months.** ⚠ **Do not concede sentence by sentence.** _I would write all of it differently and the finding is unaffected; what has changed is the order._ **One sentence about the whole document** — **because a candidate who agrees to go through a three-year-old text line by line has agreed to an hour on prose nobody is disputing.**',
  '**And the answer nobody expects to be allowed.** ⚠ _I would write it the same way._ **It is a legitimate answer and it needs its evidence in the same breath**: _the sentence has been quoted twice since and neither quotation lost the limit._ **In this class two of ten gave it and both documents were under eight months old.**',
  '**What must not follow the concession.** ⚠ **An account of what you have learnt.** **A panel is assessing a document and a candidate, not a journey** — **and _I have learnt a great deal since then_ answers a question nobody asked and concedes a second time while it does so.**',
  '**Pronunciation.** 🔊 **Track 13.2** **Say the concession and the two sentences after it at one volume.** ⚠ _I would not write that now. What I would write instead is …_ **A concession said quietly is heard as a retraction**, and the panel asks about the next thing because quiet is the sound of a candidate with more to give away. **No pause before _no_, and no drop on the two sentences that follow.**',
  '**Practise:** Concede and finish the turn. **1** a sentence you would change  **2** the finding that stands under it  **3** a document years old, conceded whole  **4** one you would write the same way, with evidence  **5** one where the change is the order and not the content',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the panel\'s question from the card. B concedes in one clause and then **says both of the two things.** ⚠ **Two rows on each card are traps**: the question invites a concession the candidate should not make. **B must hold.** Change cards.'));
out.push(table(['Card A – the panel asks', 'Card B – the panel asks'], [
  ['_Would you write that sentence today?_', '_Is that paragraph one you stand by?_'],
  ['_⚠ So the whole section is unreliable?_', '_⚠ So you accept the chapter needs rewriting?_'],
  ['_You put the limit in a separate sentence. Why?_', '_You gave no figure for the second group. Why?_'],
  ['_⚠ Would you agree the finding does not hold?_', '_⚠ Would you accept that the method was the wrong one?_'],
  ['_This is three years old. How much of it survives?_', '_You wrote this eleven months ago. What has changed?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the concession, and both of the two things. ⚠ **Rows 2 and 4 on both cards are traps** — **the question offers a concession about the finding and the candidate has only conceded a sentence.** **The answer is: _no, and the distinction matters here_, followed by the finding and its support.** **Rows 5 are the whole-document answers**, which the room will try to do sentence by sentence and must not.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Open **your own document** at the page you least want to be asked about. ⚠ **Find the one sentence you would not write now and write the two things against it**: what you would write instead, and what has not changed. **Then say all three out loud, in one turn, to your partner.** **Time it.** **In this class the whole turn has run between nineteen and thirty-one seconds and the ones over forty have had an apology in them.**'));
out.push(p('**b**  Swap. Your partner asks **the trap question**: _so the finding does not hold?_ ⚠ **You have one job, which is to refuse it and keep the tone.** **They will tell you whether your volume dropped** — **and in this class six of ten dropped on the refusal and not on the concession, which is the opposite of what everybody expects.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi was asked in January whether she would write section 4.6 as she wrote it on the second of May, and she said no and then stopped, and the four seconds of silence cost her the next twenty minutes. Mrs Khoury said a concession with nothing after it is an invitation, because a panel handed I would not write that now has been given a door, and the next question is always about the thing you did not name. Dr Qabbani asked whether you therefore do not concede at all, and you concede and you finish the turn: two things, immediately, which are what you would write instead and what has not changed. Mrs Oueidat said the finding and the sentence are different objects, and Mrs Tarabishi said that is exactly what she did not have in January: the finding in 4.6 is nine findings at four degrees and it is correct, and what she would not now write is the degree in a clause of its own, which is 9.3 and which she had been taught and had not applied to her own chapter. Mr Tayara asked whether you say all that out loud, and you say the two sentences and you stop, twenty-six words, and the panel has nothing to open. Mrs Rizk asked what happens if you would not change anything, and then you say so, and it is a rarer answer than this room expects: eight of the ten found something and two did not, and both of the two had documents under eight months old. Mr Zahreddine said his is three years old and the whole of it is different, and then the answer is about the document as a whole and not sentence by sentence, because a candidate who concedes a three-year-old text line by line has agreed to an hour on prose nobody is disputing. Mr Attar asked about volume, and Mrs Tarabishi said hers dropped and it is the thing she would fix first: a concession said quietly is heard as a retraction, and quiet is the sound of a candidate who has more to give away. Mrs Ajouz asked whether the voice changes at all, and not at the concession and not after it. And Mrs Tarabishi said the thing she will take away is the four seconds: she had the two sentences in her notes and did not say them, because she had decided in advance that honesty was the whole of the answer, and honesty that stops in the middle is an unfinished turn._'));
out.push(p('**Listener task:** write the concession you heard and both of the two things that followed it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Tarabishi wrote for herself after the January panel. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _note after the panel of 14 January_ · _what the four seconds cost_ · **16 January**',
  '**The panel opened with my own sentence and I had expected it to.** **Section 4.6, written on the second of May, read back to me by the chair, and the question was whether I would write it today.** ⚠ **I had the answer in my notes.** **I said the first five words of it and stopped.**',
  '**What I said.** _I would not write that now._ **Then nothing, for about four seconds.**',
  '**What was in my notes and did not get said.** _What I would write instead is the degree of certainty inside the sentence that carries the finding._ _What has not changed is the finding: nine findings at four degrees, and section 4.6 supports all nine._ **Twenty-six words.** **They were on the page in front of me.**',
  '**What the four seconds produced.** **The chair asked whether the section was therefore unreliable, and I spent nineteen minutes establishing that it was not** — ⚠ **nineteen minutes on a question that the twenty-six words would have closed**, and the panel\'s own minute records the exchange as _a discussion of the reliability of chapter four_, which is not what the chapter was being examined on.',
  '**Why I stopped, which is the part worth writing down.** **I had decided in advance that honesty was the whole of the answer.** ⚠ **It is not.** **Honesty that stops in the middle is an unfinished turn**, and a panel does not hear modesty in it: it hears a candidate who cannot say what the better version would be, which is a different and much worse finding about me.',
  '**The thing I got right, and it was not deliberate.** **I did not apologise.** **Nowhere in the fifty minutes did I say that I had learnt a great deal, and the chair would have had every reason to take it as a second concession** — **and I did not say it because it had not occurred to me, which is luck and not a method.**',
  '**The volume, which three people mentioned afterwards.** **My own supervisor said the _no_ was the quietest word in the session.** ⚠ **I do not remember dropping it.** **A concession said quietly is heard as a retraction and the next twelve questions were about what else I would give up** — **and the honest account is that the volume, not the concession, is what produced them.**',
  '**What I shall do before the next one, which is in June.** **Write the two sentences on one card, in capitals, and put the card where my hands are.** **Not in the notes: the notes were open at the right page and I did not look down.**',
  '**And the thing that is not about panels at all.** **Eight months is long enough for a writer to disagree with a document and short enough for the document to be the one on the table.** ⚠ **That interval is going to recur for the rest of my working life** — **and nothing in four years of this has been about the sentence you wrote and no longer believe, which is the ordinary condition of anybody who writes and keeps writing.**',
]));
out.push(item('1', 'What did she have in her notes, and what happened to it?'));
out.push(item('2', 'What does she say the four seconds produced, and how long did it take?'));
out.push(item('3', 'What does she say she got right, and why does she refuse to take credit for it?'));
out.push(writers([
  'A note on a panel that read your work: **the question, and that you expected it** → **what you actually said** → **what was in your notes and did not get said, word for word** → **what the gap produced, with its cost in minutes** → **why you stopped** → **the thing you got right** → **and what you will change before the next one.**',
  '⚠ **Quote your own unsaid sentences in full.** _What has not changed is the finding: nine findings at four degrees._ **A note that says _I failed to make my point_ is a note you cannot work from.** **The twenty-six words on the page are what you drill**, and they only exist in the note if you write them out.',
  '**Cost the gap in minutes and name the record it entered.** ⚠ _Nineteen minutes on a question the twenty-six words would have closed, and the minute records it as a discussion of the reliability of chapter four._ **The minute is the part that lasts** — **and a candidate who knows what the record says knows what the cost actually was.**',
  '**Refuse the credit you did not earn.** ⚠ _I did not say it because it had not occurred to me, which is luck and not a method._ **It is what makes the note usable in June.** **A note in which everything that went right was intended was written for somebody else.**',
  '⚠ And **end on the thing that is not about panels.** _Eight months is long enough to disagree with a document and short enough for it to be the one on the table._ **The interval is the condition, not the panel** — **and a note ending on the occasion treats a recurring problem as an event.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on a document of yours that was read and questioned (120 words or more).'));
out.push(p('**______________** · _note after _______________ · _______________ · **______________**   **The question was ______________ and I had expected it.** ⚠ **I had the answer ______________.**   **What I said.** _______________. **Then ______________.**   **What was in my notes and did not get said.** _______________. _______________. **______________ words.**   **What the gap produced.** **______________**, and the record now says ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The unsaid sentences quoted in full, not described',
  'The gap costed in minutes, and the record named',
  'Why you stopped, in one sentence',
  'Credit refused where it was luck',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentences that did not get said**, and the room says which of the two was missing: the replacement, or what has not changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the question, what you said, what did not get said, what the gap cost, why you stopped, what you got right, and what you will change.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the unsaid sentences quoted in full, the cost in minutes, and no apology anywhere in the note.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says their concession and the two sentences twice: once at their own volume, once at the volume of everything else they have said.** ⚠ **The room says which one it would have asked a second question after.** **It is the quiet one, every time.** **Then the sentence this cycle ends on, which is Mrs Tarabishi\'s: honesty that stops in the middle is an unfinished turn.** **Say it, and do not soften it** — **because the room will want to hear it as a warning against conceding, and it is the opposite.**'));
out.push(hw('Write **the two sentences for your own document** — the replacement and what has not changed — **in capitals, on one card.** ⚠ **Twenty-six words or fewer.** **Then say them to somebody who has not read the document and ask them what they think the finding was.** **If they cannot tell you, the second sentence is not doing its work.** **Bring the card and what they said.** **13.2 holds a concession under questioning without letting it grow**, so bring a concession you have actually made.'));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  The concession that does not grow'));
out.push(p('**Function:** holding a concession under questioning without the concession growing   ·   **Grammar:** the limit on a concession, stated once and then held   ·   **Pronunciation:** the same words the second time, at the same speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one concession you have actually made in writing or out loud, and what happened next.** ⚠ **The concession, then what the other party did with it.** **In most classes seven of the ten report that the concession was followed by a second request** — **and the board is worth keeping, because the second request is the subject of this cycle.**'));
out.push(board('You accept the first point. And the second?', 'The limit, in the words it was given in.'));
out.push(p('**b**  Which two answers hold the concession at its original size? **1** _I accept that the figure for the second group is not given. The other eight are, and they are at annexe A._  **2** _Yes, and I suppose the same could be said of the fourth group._  **3** _I accept point five and nothing beyond it; point six turns on the same figure and the figure is in the register._  **4** _You may well be right about the rest of it too._  **5** _That is a fair criticism and there are probably others._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a concession needs?   **A** an apology attached to it   **B** **a limit, stated once in the same breath** — and then repeated in the same words, not re-argued   **C** a second concession offered in advance'));
out.push(p('**b**  Listen again. **1** What did Dr Qabbani concede, and what did the referee do next?   **2** What does Mrs Oueidat say you do when the same question comes back a third time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  Once, and then held', [
  ['Ms Huda', 'Dr Qabbani — the referee of the May letter. What did you concede?'],
  ['Dr Qabbani', '⚠ **Point five.** **The figure for the second group is not in the paper and I said so in one sentence.**'],
  ['Mrs Tarabishi', 'And that was the end of it.'],
  ['Dr Qabbani', '**No.** ⚠ **The second letter asked whether the same objection did not apply to groups three and four**, and I had not written the limit, so I spent two paragraphs discovering that it does not.'],
  ['Mrs Khoury', '⚠ **Which is what a concession without a limit does, and the room should be made to say it in its own words.** **A conceded point with no boundary on it is a conceded method** — **and the next letter tests the boundary you did not draw, because that is what a competent reader is for.**'],
  ['Mrs Oueidat', 'The limit goes in the same breath as the concession.'],
  ['Dr Qabbani', '⚠ **_I accept point five and nothing beyond it; point six turns on the same figure and the figure is in the register._** **Nineteen words, and the second letter would not have been written.**'],
  ['Mr Shihabi', 'And if they ask anyway?'],
  ['Mrs Oueidat', '⚠ **You give the same words.** **Not a better version, not a longer version** — **the same nineteen words, at the same speed**, because a limit that is re-argued is a limit that is being negotiated, and a reader who hears it twice in two different forms has learnt that it moves.'],
  ['Mrs Rizk', 'That feels rude the second time.'],
  ['Mrs Khoury', '⚠ **It is the opposite of rude and this is the hardest thing in the cycle to believe.** **A party who restates a limit in the same words is a party who is not asking anybody to agree** — **and the irritation the room is anticipating is produced by the third version and never by the second.**'],
  ['Mr Tayara', 'And the third time?'],
  ['Mrs Oueidat', '⚠ **The same words, and then one sentence that is not about the point.** _We have the same difference on this as we had in May, and it is recorded._ **Which closes it, because there is nothing to answer.**'],
  ['Mrs Ajouz', 'Mine was a form and the inspectorate asked four times.'],
  ['Dr Qabbani', '⚠ **Four is not unusual and the number is worth knowing.** **In this class the concessions that were followed up have been followed up between once and five times** — **and every one that stopped at the first follow-up had the limit in the original sentence.**'],
  ['Mr Zahreddine', 'What if the limit turns out to be wrong?'],
  ['Mrs Khoury', '⚠ **Then you concede again, and the second concession has its own limit.** **What you do not do is widen the first one** — **because a limit that has been widened once will be tested at the new edge within a fortnight, and you have taught the reader where to push.**'],
  ['Mr Attar', 'So you can concede twice.'],
  ['Mrs Oueidat', '⚠ **You can concede ten times and lose nothing, provided each one is bounded and none of them is a widening of an earlier one.** **It is the growth that costs you, and not the number** — **and a file of eight bounded concessions reads as a careful writer, where one that has grown four times reads as a position being abandoned slowly.**'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is the two paragraphs.** **I wrote two paragraphs establishing something I already knew, for a reader who had asked only because I had not said it** — **and the nineteen words were available in May and I did not know I needed them.**'],
]));
out.push(sp());
out.push(box('Language box – the bounded concession', [
  '**The shape, and it is one sentence.** ⚠ **The concession, then the limit, in the same breath.** _I accept point five and nothing beyond it; point six turns on the same figure and the figure is in the register._ **Nineteen words.** **The semicolon is doing real work: it stops the limit being a separate sentence that a reader can drop.**',
  '**_And nothing beyond it_ is the whole phrase and it is worth learning as a unit.** ⚠ **Not _but_, which invites an argument.** **Not _however_, which announces one.** _And nothing beyond it_ **is an additive clause that adds a boundary**, and a reader has nothing to disagree with because it is a statement about what the writer is doing and not about the world.',
  '**The second time, give the same words.** ⚠ **Not a better version.** **Not a longer one.** **The same words at the same speed** — **because a limit that is re-argued is a limit that is being negotiated**, and a reader who hears it twice in two forms has learnt that it moves.',
  '**The third time, the same words and then one sentence that is not about the point.** ⚠ _We have the same difference on this as we had in May, and it is recorded._ **It closes the exchange because there is nothing in it to answer** — **and it is the only sentence in this cycle that refers to the correspondence rather than to the question.**',
  '**You may concede many times.** ⚠ **It is the growth that costs you and not the number.** **Eight bounded concessions read as a careful writer; one that has grown four times reads as a position being abandoned slowly** — **and the second is what a reader remembers.**',
  '**When the limit turns out to be wrong.** ⚠ **Concede again, with a new limit of its own.** **Do not widen the first.** **A limit widened once will be tested at its new edge within a fortnight**, because you have just shown the reader where the edge responds to pressure.',
  '**Pronunciation.** 🔊 **Track 13.4** **Say the nineteen words twice, with a minute between, at the same speed.** ⚠ **Record it if you can.** **The second version is almost always faster and about two words shorter**, and both changes read as impatience. **Same speed, same words, and no stress on _nothing_** — **stress on _nothing_ makes the limit a refusal.**',
  '**Practise:** Concede and bound it in one sentence. **1** a point in a letter  **2** a figure that is missing  **3** the same limit, restated  **4** a third request, closed  **5** a limit that was wrong, conceded again',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the follow-up from the card. B gives **the same limit in the same words**, and nothing else. ⚠ **Two rows on each card are third requests** — **and there B adds the one sentence about the record, and stops.** Change cards.'));
out.push(table(['Card A – the follow-up', 'Card B – the follow-up'], [
  ['_Does the same not apply to groups three and four?_', '_Would the objection not also cover the autumn figures?_'],
  ['_⚠ We raised this in May and again in June. Your position?_', '_⚠ This is the third time we have asked. Where does this leave us?_'],
  ['_You accept the figure is absent. What else is absent?_', '_You accept the date is wrong. Is the sequence wrong too?_'],
  ['_⚠ We appear to be no further forward than in May._', '_⚠ We have had the same answer twice. Is there anything to add?_'],
  ['_Your limit was too narrow; group two is affected as well._', '_Your boundary does not hold: the second sample is in scope._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** whether the words were the same, and whether the speed was. ⚠ **Rows 2 and 4 on both cards are third requests and get the record sentence.** **Rows 5 are the hardest on either card**: the limit was wrong, and the answer is a second bounded concession and never a widening of the first — **and the room will widen it, because widening sounds generous and is the one move that cannot be taken back.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the concession from Stage 1** and write the bounded version: the concession, then _and nothing beyond it_, then the limit. ⚠ **One sentence, twenty-five words or fewer.** **Then read it to your partner twice, a minute apart, and have them tell you whether the second version was shorter.** **In this class seven of ten were shorter the second time and all seven had dropped the limit.**'));
out.push(p('**b**  Swap. Your partner asks the follow-up **twice**, then a third time. ⚠ **You have the same words both times and the record sentence on the third.** **They will tell you where your version changed** — **and the commonest change is not a word at all: it is that the limit arrives at a lower volume than the concession, which tells a reader which half you believe.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani conceded point five of the May referee letter in one sentence, that the figure for the second group is not in the paper, and the second letter then asked whether the same objection did not apply to groups three and four. Mrs Tarabishi asked whether that was not the end of it, and it was not: he had not written the limit, so he spent two paragraphs discovering that the objection does not apply. Mrs Khoury said that is what a concession without a limit does, because a conceded point with no boundary on it is a conceded method, and the next letter tests the boundary you did not draw, which is what a competent reader is for. Mrs Oueidat said the limit goes in the same breath as the concession, and Dr Qabbani gave it: I accept point five and nothing beyond it, point six turns on the same figure and the figure is in the register, nineteen words, and the second letter would not have been written. Mr Shihabi asked what you do if they ask anyway, and you give the same words, not a better version and not a longer one, at the same speed, because a limit that is re-argued is a limit that is being negotiated. Mrs Rizk said that feels rude the second time, and Mrs Khoury said it is the opposite: a party who restates a limit in the same words is not asking anybody to agree, and the irritation the room anticipates is produced by the third version and never by the second. Mr Tayara asked about the third time, and the same words and then one sentence that is not about the point: we have the same difference on this as we had in May, and it is recorded. Mrs Ajouz said hers was a form and the inspectorate asked four times, and four is not unusual: the concessions in this class were followed up between once and five times, and every one that stopped at the first follow-up had the limit in the original sentence. Mr Zahreddine asked what happens if the limit turns out to be wrong, and then you concede again with a new limit, and you do not widen the first. Mr Attar asked whether you can concede twice, and you can concede ten times and lose nothing provided each one is bounded, because it is the growth that costs you and not the number. And Dr Qabbani said the thing he will take away is the two paragraphs: he wrote two paragraphs establishing something he already knew, for a reader who had asked only because he had not said it._'));
out.push(p('**Listener task:** write your partner\'s bounded concession, and whether the limit arrived at the same volume as the concession.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Dr Qabbani\'s reply to the second referee letter. Answer the questions.'));
out.push(model([
  '**H. QABBANI** · _reply to the second referee letter of 3 June_ · _point five, and its boundary_ · **9 June**',
  '**I accept point five and nothing beyond it.** **The figure for the second group is not in the paper and should be.** ⚠ **It is at annexe B of this reply, with the date of collection and the register it came from.**',
  '**Point six turns on the same figure and the position there is different.** **The figure is in the register, was in the register in March, and the paper cites the register at section 3.2.** **A reader of the paper could obtain it in one request to the records office, which is named.** **That is not the same as the figure being absent, and I am not conceding it.**',
  '**Groups three and four, which the second letter asks about.** **The objection does not apply.** **Both figures are in the body of the paper, at table 4, with their denominators** — ⚠ **and I should say plainly that I have had to go and look, because my May reply did not draw the boundary and I did not then know where it fell.** **That is a fault in the reply and not in the paper.**',
  '**What the absence of a boundary cost, since the editor has asked me to be specific about the delay.** **Two paragraphs in this letter and about three working days.** **The May reply conceded a point and stopped** — **and a conceded point with no boundary is read, correctly, as a conceded method.**',
  '**The limit, in the form I should have used in May.** _I accept point five and nothing beyond it; point six turns on the same figure and the figure is in the register._ ⚠ **Nineteen words.** **I am setting them out here because the same exchange will arise on the second paper and I would rather the editor had the form than my account of it.**',
  '**One place where the referee is right beyond point five, and it is not in the letter.** **Section 3.2 cites the register and does not say that the register is held outside the hospital.** ⚠ **A reader in another city cannot obtain the figure in one request and I have been writing as though they could.** **That is conceded, with its own limit: it affects the one sentence at 3.2 and not the finding, which rests on the eleven cases and not on the register.**',
  '**What would change my position on point six.** **Evidence that the records office has refused such a request, or a published period during which the register was closed.** **I am not aware of either.** **If the referee is, the position changes and I shall say so in those words.**',
  '**And the sentence I am not going to write, although the editor\'s note invites it.** **That I have learnt from the exchange.** ⚠ **The paper is being assessed and not my progress**, and a reply that offers an account of the author\'s development has conceded a third thing nobody asked about.',
]));
out.push(item('1', 'What does he concede beyond point five, and what limit does he put on it?'));
out.push(item('2', 'Why does he print the nineteen words in the reply itself?'));
out.push(item('3', 'What would change his position on point six, and what does he refuse to write?'));
out.push(writers([
  'A bounded reply: **the concession and its boundary in the first sentence** → **the neighbouring point and why it is different** → **the questions asked, answered with where you had to look** → **what the missing boundary cost** → **the limit in the form you should have used** → **anything else the reader is right about, bounded** → **what would change your position** → **and the sentence you are not going to write.**',
  '⚠ **Put _and nothing beyond it_ in the first sentence and never later.** **A reply whose boundary arrives in the third paragraph has been read as a general concession** — **and a reader who got there believing the method is conceded does not revise it.**',
  '**Say where you had to go and look.** ⚠ _I have had to go and look, because my May reply did not draw the boundary and I did not then know where it fell._ **This is the one admission in the genre that costs nothing**: it locates the fault in the reply and not in the document, which is where it is.',
  '**Concede the thing they did not ask about, if it is true, and bound that too.** ⚠ _It affects the one sentence at 3.2 and not the finding, which rests on the eleven cases._ **An unprompted bounded concession is the strongest paragraph available in this genre** — **and the bound is what stops it being a gift.**',
  '⚠ And **name the sentence you are refusing to write.** _That I have learnt from the exchange._ **The paper is being assessed and not your progress** — **and a reply offering an account of the author\'s development has conceded a third thing nobody asked about.** **It appears in six of ten first drafts.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a bounded reply (120 words or more).'));
out.push(p('**______________** · _reply to _______________ · _______________ · **______________**   **I accept ______________ and nothing beyond it.** **______________ is ______________ and should be.** ⚠ **It is at ______________.**   **______________ turns on the same ______________ and the position there is different.** **______________.** **That is not the same as ______________, and I am not conceding it.**   **______________, which the second letter asks about.** **The objection does not apply.** ⚠ **And I should say plainly that I have had to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_And nothing beyond it_ in the first sentence',
  'The neighbouring point distinguished, not conceded',
  'Where you had to go and look, said plainly',
  'No account of what you have learnt, anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says where the boundary falls and what is left outside it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole reply (260 words or more), to the shape in the writer\'s box: the bounded concession, the neighbouring point, the questions answered, the cost, the form of the limit, the unprompted concession, what would change your position, and the sentence you refuse.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the boundary in the first sentence, every concession bounded, and no sentence about the writer\'s development.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their bounded concession, and then the room asks the follow-up twice.** ⚠ **The second answer must be the same words.** **The room says whether it was** — **and in this class it has been the same words about three times in ten, and the commonest change is that the limit gets an extra clause of justification, which is the one thing it must never acquire.** **Then the sentence the cycle ends on, which is Dr Qabbani\'s: a conceded point with no boundary is read, correctly, as a conceded method.**'));
out.push(hw('Write **the bounded version of a concession you have already made**, in one sentence of twenty-five words or fewer, with _and nothing beyond it_ in it. ⚠ **Then find the follow-up that was actually sent to you**, if there was one, **and ask whether your bounded sentence would have prevented it.** **In this class seven of ten said it would.** **Bring the sentence, the follow-up and your answer.** **13.3 puts two lists side by side in forty seconds**, so bring a document old enough to have two.'));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  Two lists, forty seconds'));
out.push(p('**Function:** saying what you would not have written and what you would still write   ·   **Grammar:** the two lists, out loud, in the same forty seconds   ·   **Pronunciation:** the second list at the same pace as the first'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your document again, and the number of things in each list.** ⚠ **Two numbers and nothing else.** **How many things you would not now write, and how many you would still write.** **In most classes the first number is larger for everybody with a document over a year old and smaller for everybody under eight months** — **and your teacher writes both columns on the board, because the ratio is the finding of this cycle.**'));
out.push(board('What would you not write now?', 'And what would you still write?'));
out.push(p('**b**  Which two are second lists a panel can use? **1** _I would still write the finding, the four degrees and the table at 4.6._  **2** _Most of it is still all right, I think._  **3** _I would still write every figure, every date and the scope paragraph; the register citation I would now qualify._  **4** _The general approach was sound._  **5** _I stand by the substance of the chapter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about the second list?   **A** it is a courtesy and may be short   **B** **it is the longer and more specific of the two** — items, not qualities, and it comes second because it is what the panel will act on   **C** it should be left to the panel to supply'));
out.push(p('**b**  Listen again. **1** How many items are on each of Mr Zahreddine\'s lists, and which came out first?   **2** What does Mrs Khoury say a vague second list tells a panel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  The longer list is the second one', [
  ['Ms Huda', 'Mr Zahreddine — the opinion from three years ago. Two lists.'],
  ['Mr Zahreddine', '⚠ **Four things I would not write and eleven I would.** **And the four came out in nine seconds and the eleven took me two days to find.**'],
  ['Mrs Tarabishi', 'Two days?'],
  ['Mr Zahreddine', '⚠ **Because I had never been asked.** **Nobody in twenty years has asked me what in an opinion of mine I would write again** — **and I found I could name the faults immediately and had no vocabulary at all for the parts that were right.**'],
  ['Mrs Khoury', '⚠ **Which is the general case and not his, and the room should hear it put that way.** **Every writer in this room can produce the first list on demand.** **The second one is the one that has to be built** — **and a panel that is given four faults and _the general approach was sound_ has been given a candidate who cannot see their own work.**'],
  ['Mrs Oueidat', 'And it is the second list they act on.'],
  ['Mrs Khoury', '⚠ **It is the only one they can act on.** **The first list tells them what to discount.** **The second tells them what is left, and if what is left is a quality rather than a set of items, nothing is left** — _the substance is sound_ **is not a defence, it is a request to be trusted.**'],
  ['Dr Qabbani', 'Items, then. Not qualities.'],
  ['Mr Zahreddine', '⚠ **Eleven items, each one a thing on a page.** **The fifty-five readings. The denominator. The scope paragraph naming the two bays I did not inspect. The exclusion sentence. The date of each reading.** **A panel can check all eleven in four minutes and that is the point of them being items.**'],
  ['Mr Shihabi', 'Forty seconds for fifteen things is quick.'],
  ['Mrs Oueidat', '⚠ **It is quick because neither list is argued.** **You name them and you do not justify any of them** — **the justification is what the panel asks for next, one item at a time, and a candidate who justifies in advance has spent the forty seconds on two of the fifteen.**'],
  ['Mrs Rizk', 'Which list goes first?'],
  ['Mrs Khoury', '⚠ **The one you would not write, and it is short deliberately.** **A turn that opens with what is still good is heard as a defence and the panel waits for the concession** — **and a turn that opens with the concession has nothing left to wait for.**'],
  ['Mr Tayara', 'My first list is longer than my second.'],
  ['Mrs Oueidat', '⚠ **Then say both numbers before either list.** _Nine I would not write and four I would._ **A panel that has the ratio in advance reads the rest as an inventory**, and a panel that discovers it halfway through reads it as a collapse — **and the words are identical in both cases.**'],
  ['Mrs Ajouz', 'Mine is a form. Can a form have a second list?'],
  ['Mr Zahreddine', '⚠ **Four of my eleven are not sentences at all.** **A date, a denominator, a table and a line in an annexe** — **and the two the panel checked first were the denominator and the table, neither of which I wrote as prose.**'],
  ['Mr Attar', 'And the pace? Mine slowed on the second list.'],
  ['Mrs Khoury', '⚠ **Everybody\'s does and it is the tell.** **A second list read more slowly than the first is a second list the candidate is composing**, and a panel hears exactly that. **Write both out, learn the order, and give them at one pace.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the two days.** **Four faults in nine seconds and eleven strengths in two days, on a document I wrote myself** — **and I do not think the ratio is about the opinion at all.**'],
]));
out.push(sp());
out.push(box('Language box – the two lists', [
  '**Both numbers before either list.** ⚠ _Four I would not write and eleven I would._ **Nine words.** **A panel that has the ratio in advance reads what follows as an inventory; a panel that discovers it halfway reads the same words as a collapse.**',
  '**The short list first, and it is the one you would not write.** ⚠ **A turn that opens with what is still good is heard as a defence**, and the panel waits for the concession it knows is coming. **A turn that opens with the concession has nothing left to wait for** — **which is 7.2 arriving in speech instead of in a letter.**',
  '**Items, not qualities, and this is the whole of the second list.** ⚠ _The fifty-five readings. The denominator. The scope paragraph. The exclusion sentence. The date of each reading._ **Not** _the substance is sound_, **which is not a defence but a request to be trusted.** **An item is a thing on a page that a panel can check in a minute.**',
  '**Neither list is argued.** ⚠ **You name them and you justify none of them.** **The justification is what the panel asks for next, one item at a time** — **and a candidate who justifies in advance has spent the forty seconds on two of the fifteen and has invited questions about the other thirteen.**',
  '**Items need not be prose.** ⚠ **A date, a denominator, a table, a line in an annexe.** **Four of Mr Zahreddine\'s eleven are not sentences**, and the two his panel checked first were the denominator and the table — **which is worth knowing, because a writer composing a second list looks for good paragraphs and the checkable items are usually not paragraphs at all.**',
  '**And the pace, which is the tell.** ⚠ **A second list read more slowly than the first is a second list being composed in the room.** **Write both out, learn the order, and give them at one pace** — **because a panel that hears you slow down has learnt which half you had ready.**',
  '**Pronunciation.** 🔊 **Track 13.6** **Give the two numbers, then both lists, in forty seconds, with a stopwatch.** ⚠ **Do not slow for the second list and do not let the voice rise at the end of it.** **A rise turns the inventory into a question**, and the room then reassures you — **which is 12.1 again, and it costs the second list the same way it cost a claim.**',
  '**Practise:** Give both numbers, then both lists. **1** a document under a year old  **2** one over two years old  **3** a second list of items that are not sentences  **4** a case where the first list is longer  **5** one item from the second list, justified only when asked',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the prompt from the card. B gives **both numbers and then both lists**, in forty seconds, and justifies nothing. ⚠ **Two rows on each card invite a justification** — **and B must name the item and stop.** Change cards.'));
out.push(table(['Card A – the panel says', 'Card B – the panel says'], [
  ['_Take us through what you would and would not write._', '_What survives and what does not?_'],
  ['_⚠ Why would you still write the scope paragraph?_', '_⚠ Explain why the denominator is still right._'],
  ['_How many things would you change?_', '_Is there anything you would not touch?_'],
  ['_⚠ Defend the table for us._', '_⚠ Take the exclusion sentence and justify it._'],
  ['_Your first list is longer than your second. Comment._', '_You name four faults. Is that all of them?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the two numbers, the order, and whether anything was justified unasked. ⚠ **Rows 2 and 4 on both cards are invitations to justify and the answer is one sentence and a stop** — **the panel has asked about one item and a candidate who defends three has reopened two.** **Rows 5 are the ratio questions**: both numbers, said plainly, with no account of why the first list is long.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your two lists** on one sheet, in two columns. ⚠ **The second column must be items and not qualities**, and anything that is a quality is struck out and replaced with the thing on the page that made you write it. **In this class about a third of every first second-list has been struck** — **and the replacements are almost always dates, denominators and scope sentences.**'));
out.push(p('**b**  Swap sheets. Your partner reads **only your second column** and says **what the document was about.** ⚠ **If they cannot tell, the items are too small; if they can tell you the finding as well, the second list is doing more work than it has to.** **Then give both lists out loud in forty seconds while they time you.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine has four things he would not write and eleven he would, and the four came out in nine seconds and the eleven took him two days to find. Mrs Tarabishi asked why two days, and because nobody in twenty years has asked him what in an opinion of his he would write again: he could name the faults immediately and had no vocabulary at all for the parts that were right. Mrs Khoury said that is the general case and not his, because every writer in the room can produce the first list on demand and the second one has to be built, and a panel given four faults and the general approach was sound has been given a candidate who cannot see their own work. Mrs Oueidat said it is the second list they act on, and it is the only one they can act on: the first tells them what to discount and the second tells them what is left, and if what is left is a quality rather than a set of items then nothing is left. Dr Qabbani said items, then, not qualities, and Mr Zahreddine gave eleven: the fifty-five readings, the denominator, the scope paragraph naming the two bays he did not inspect, the exclusion sentence, the date of each reading, and a panel can check all eleven in four minutes. Mr Shihabi said forty seconds for fifteen things is quick, and it is quick because neither list is argued: the justification is what the panel asks for next, one item at a time. Mrs Rizk asked which list goes first, and the one you would not write, and it is short deliberately, because a turn that opens with what is still good is heard as a defence. Mr Tayara said his first list is longer than his second, and then you say both numbers before either list, because a panel that has the ratio in advance reads the rest as an inventory. Mrs Ajouz asked whether a form can have a second list, and four of Mr Zahreddine\'s eleven are not sentences at all: a date, a denominator, a table and a line in an annexe, and the two the panel checked first were the denominator and the table. Mr Attar asked about pace, and everybody\'s slows on the second list and it is the tell. And Mr Zahreddine said the thing he will take away is the two days: four faults in nine seconds and eleven strengths in two days, on a document he wrote himself, and he does not think the ratio is about the opinion at all._'));
out.push(p('**Listener task:** write your partner\'s two numbers and the three items of theirs you could check fastest.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Mr Zahreddine wrote before his tribunal. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _the opinion of 11 March, three years on_ · _four and eleven_ · **20 January**',
  '**Four I would not write and eleven I would.** ⚠ **The four took nine seconds and the eleven took two days**, which is a fact about me and not about the opinion.',
  '**The four.** **The opening paragraph, which describes the building before it says what the opinion is for.** **The phrase _in my professional judgement_, which appears five times and adds nothing to any of them.** **The limitation paragraph at the end, which should be four sentences inside the findings it limits.** **And the recommendation, which names no cost and no date.**',
  '**The eleven, and these are items and not qualities.** **One: the fifty-five readings, each with its position.** **Two: the denominator — fifty-six positions, and the one not reached is named.** **Three: the scope paragraph naming the two bays behind the sheeted scaffold.** **Four: the exclusion sentence, that the readings exclude a specified-grade frame at all but one position.** **Five: the date of every reading.** **Six: table 2, which carries the tolerance.** **Seven: the instrument and its calibration date.** **Eight: the sentence naming who holds the delivery notes.** **Nine: the statement that the notes have not been asked for.** **Ten: the three findings, each with its boundary in its own sentence.** **Eleven: the annexe line giving the contractor\'s own figure beside mine.**',
  '**Why the eleven took two days.** ⚠ **I was looking for good paragraphs.** **Four of the eleven are not paragraphs at all** — **a date, a denominator, a table and a line in an annexe** — **and I walked past them twice because I had been taught, somewhere, that writing means prose.**',
  '**What I shall not do in the room.** **Justify any of the fifteen unasked.** **The tribunal will take one item and ask about it, and the answer to that is one item long** — ⚠ **and a witness who defends three has reopened two.**',
  '**The order, which I have decided and shall not change on the day.** **Both numbers first.** **Then the four, fast.** **Then the eleven, at the same speed.** **Forty seconds, timed four times this week, and the slowest was forty-four.**',
  '**One thing I have put in the first list that my solicitor wanted in the second.** **The limitation paragraph.** ⚠ **It is correct, it is complete, and it is in the wrong place** — **and a limitation at the end of a document is a separate object that a quoter drops, which is 6.5 and which I did not know three years ago.** **Correct and badly positioned belongs in the first list.**',
  '**And the thing that is not about this tribunal.** **I have written perhaps four hundred opinions and I have never been asked what in one of them I would write again.** ⚠ **The first list is a habit of mind that twenty years of being corrected has built**, and the second list is a skill nobody taught me and I have now spent two days acquiring at forty-six.',
]));
out.push(item('1', 'Which four would he not write, and what is wrong with the limitation paragraph?'));
out.push(item('2', 'Why does he say the eleven took two days?'));
out.push(item('3', 'What does his solicitor disagree with him about, and how does he settle it?'));
out.push(writers([
  'A two-list sheet: **both numbers in the first line** → **the short list, with what is wrong with each item** → **the long list, as numbered items** → **why the long list was hard** → **what you will not do in the room** → **the order, decided and timed** → **one item you have placed against advice** → **and the thing that is not about this occasion.**',
  '⚠ **Number the second list and keep every item to a phrase.** _Two: the denominator — fifty-six positions, and the one not reached is named._ **A second list in prose cannot be given in forty seconds and cannot be checked in four minutes** — **and both of those are what it is for.**',
  '**Say why the long list was hard, because the reason is general.** ⚠ _I was looking for good paragraphs, and four of the eleven are not paragraphs at all._ **Everybody looks for prose.** **The checkable items are dates, denominators, tables and annexe lines** — **and naming that is worth more than any single item.**',
  '**Put _correct but badly positioned_ in the first list, and say so.** ⚠ _It is correct, it is complete, and it is in the wrong place._ **This is the hardest judgement in the genre and the one a colleague will argue with** — **and the test is not whether the sentence is true but whether a quoter would carry it.**',
  '⚠ And **end on the thing that is not about the occasion.** _I have written perhaps four hundred opinions and have never been asked what in one of them I would write again._ **The asymmetry between the two lists is a habit, where the tribunal is one morning** — **and a sheet ending on the tribunal treats a twenty-year habit as preparation.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your two-list sheet (120 words or more).'));
out.push(p('**______________** · _the _______________ of _______________, _______________ on_ · _______________ and ________________ · **______________**   **______________ I would not write and ______________ I would.** ⚠ **The ______________ took ______________ and the ______________ took ______________.**   **The ______________.** **______________.** **______________.** **______________.**   **The ______________, and these are items and not qualities.** **One: ______________.** **Two: ______________.** **Three: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both numbers in the first line',
  'Every item in the long list checkable in a minute',
  'At least one item that is not a sentence',
  'Nothing in the long list that is a quality',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their long list**, and the room says which three items it could check fastest and which one is still a quality.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole sheet (260 words or more), to the shape in the writer\'s box: both numbers, the short list, the long list numbered, why it was hard, what you will not do, the order, the item placed against advice, and the thing that is not about the occasion.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both numbers first, every long-list item checkable, and at least one item that is not a sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student gives both numbers and both lists against a stopwatch while the room counts the items.** ⚠ **Two things get reported back and nothing else: whether the count matched the numbers, and whether the second list was slower.** **In this class the count has matched eight times in ten and the second list has been slower in all ten.** **Then the sentence the cycle ends on, which is Mr Zahreddine\'s: four faults in nine seconds and eleven strengths in two days, on a document he wrote himself.**'));
out.push(hw('Write **your long list as numbered items**, and then do one thing with it: ⚠ **strike out every item a reader could not check in one minute** and replace it with the thing on the page that made you write it. **In this class a third of every first long list has gone this way.** **Bring the struck version and the replacements.** **13.4 answers a question whose premise is wrong**, so bring a question you have been asked that rested on something untrue.'));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  The question whose premise is wrong'));
out.push(p('**Function:** answering a question whose premise is wrong, without correcting it rudely   ·   **Grammar:** _if the question is whether_ … _then_ · the reframe that does not sound like a dodge   ·   **Pronunciation:** _if_ unstressed, so that the reframe is not heard as a refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a question you have been asked that rested on something untrue.** ⚠ **The question, and the untrue part.** **Not what you answered.** **In most classes eight of the ten questions turn out to rest on a reasonable mistake and two on something the questioner could not have known** — **and the board is worth keeping, because the two kinds get different answers.**'));
out.push(board('Why did you ignore the second sample?', 'The premise, named without the word wrong.'));
out.push(p('**b**  Which two answers reframe without refusing? **1** _I did not ignore it. Your question assumes something that is not the case._  **2** _If the question is whether the second sample was taken into account, it was, at table 4; if it is whether it changed the finding, it did not, and the reason is at 3.2._  **3** _That is not what happened at all._  **4** _If the question is why the register is not cited, it is cited, at 3.2; if it is why the register is not quoted, that is a different point and I shall come to it._  **5** _I think you have misread the paper._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the reframe does?   **A** corrects the questioner politely   **B** **answers both questions** — the one that was asked and the one that was meant — and never says that the question was wrong   **C** postpones the answer until the premise is settled'));
out.push(p('**b**  Listen again. **1** What was Mrs Oueidat asked, and what was wrong with it?   **2** What does Mrs Khoury say happens to a witness who names the mistake?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  Both questions, and neither correction', [
  ['Ms Huda', 'Mrs Oueidat — the hearing in November. The question that was wrong.'],
  ['Mrs Oueidat', '⚠ **_Why did you omit the covering line from the record?_** **I did not omit it.** **I filed it, and the registry did not read it into the record, and the question put the act on me.**'],
  ['Mr Shihabi', 'So you say so.'],
  ['Mrs Oueidat', '**That is what I did the first time, years ago, and it was a mistake.** ⚠ **_I did not omit it_ makes the next ten minutes about who omitted it** — **and the hearing was not about that and the judge had not asked.**'],
  ['Mrs Khoury', '⚠ **Which is the general rule and the room should have it in one sentence.** **A witness who names the mistake has changed the subject to the mistake.** **The reframe answers both questions and names nothing** — **and the judge who hears both answers works out the premise without anybody having to say it.**'],
  ['Dr Qabbani', 'Both questions. Say that again.'],
  ['Mrs Oueidat', '⚠ **_If the question is whether the line was filed, it was, on the fourth of July, and the file reference is in my statement._** **_If it is whether it was read into the record, it was not, and I was not asked to read it._** **Thirty-four words, two answers, and no accusation.**'],
  ['Mrs Tarabishi', 'The judge still learns that the registry did not read it.'],
  ['Mrs Khoury', '⚠ **The judge learns it from the facts and not from the witness\'s opinion of them, and that is the whole difference.** **A fact a judge has worked out is a fact; a fact a witness has asserted about another office is a dispute** — **and one of those takes ten minutes and the other takes none.**'],
  ['Mr Tayara', 'And _if_ at the front is not rude?'],
  ['Mrs Oueidat', '⚠ **Not if it is unstressed.** **_If the question is whether_, flat, four words, straight into the first answer** — **and the room should hear what stress on _if_ does, because it turns the clause into a challenge and the questioner then defends the question.**'],
  ['Mrs Rizk', 'What if you cannot tell which question they mean?'],
  ['Mrs Khoury', '⚠ **Then the reframe is doing exactly what it is for.** **You are not guessing: you are answering both, and the questioner takes whichever one they wanted** — **and in this class that has happened about half the time and nobody has ever objected to being given two answers.**'],
  ['Mr Attar', 'Is there a case where you do say it plainly?'],
  ['Mrs Oueidat', '⚠ **Where the premise is something the questioner could not have known and will act on.** _The register is held outside the hospital._ **Then you say it, once, as a fact and not as a correction** — **and you do it early, because a decision taken on a premise nobody corrected is a worse outcome than an awkward minute.**'],
  ['Mr Zahreddine', 'Mine was a surveyor who said I had not inspected the bays.'],
  ['Mrs Khoury', '⚠ **And the scope paragraph says you did not, so the premise is true and the question is fair.** **This is the case the room keeps missing**: about a fifth of the questions that feel wrong are correct and uncomfortable — **and a reframe used on a fair question reads as evasion, which is the one thing this move must never do.**'],
  ['Mrs Ajouz', 'So you test it first.'],
  ['Mrs Tarabishi', '⚠ **In the four seconds you have.** **One question to yourself: is the thing they have assumed on the page or not?** **If it is on the page, answer the question** — **and if it is not, reframe.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the first time.** **I said _I did not omit it_ and I was right, and I spent ten minutes being right about something nobody had asked** — **and the registry\'s clerk, who had done nothing deliberate, was in the room.**'],
]));
out.push(sp());
out.push(box('Language box – the reframe', [
  '**The form, and both halves are obligatory.** ⚠ _If the question is whether X, then …; if it is whether Y, then …_ **Two questions, two answers, one turn.** **A reframe that answers only the question you prefer is a dodge and will be read as one** — **and the second half is the one that earns the first.**',
  '**Name nothing.** ⚠ **Not _your question assumes_, not _I think you have misread_, not _that is not what happened_.** **A witness who names the mistake has changed the subject to the mistake** — **and the questioner now defends the question instead of listening to the answer.**',
  '**The judge works out the premise, and that is better than being told it.** ⚠ **A fact a reader has worked out is a fact.** **A fact a witness has asserted about another office is a dispute** — **and one of those costs ten minutes and the other costs none.**',
  '**_If_ is unstressed, and the clause is four words.** ⚠ _If the question is whether_ — **flat, fast, straight into the first answer.** **Stress on _if_ turns it into a challenge.** **A pause after it announces that something is about to be corrected**, which is the one thing the move exists to avoid.',
  '**Where you do say it plainly.** ⚠ **Where the premise is something the questioner could not have known and will act on.** _The register is held outside the hospital._ **Once, early, as a fact and not as a correction** — **because a decision taken on an uncorrected premise is worse than an awkward minute.**',
  '**And the test, which takes four seconds and is the whole safeguard.** ⚠ **Is the thing they have assumed on the page or not?** **If it is on the page, the question is fair and you answer it.** **About a fifth of the questions that feel wrong are correct and uncomfortable** — **and a reframe used on a fair question reads as evasion.**',
  '**Pronunciation.** 🔊 **Track 13.8** **Say the reframe twice: once with stress on _if_, once with the whole clause flat.** ⚠ **The room will hear the first as a challenge.** **Then say the two halves with no pause between them** — **a pause before the second half suggests you are deciding whether to give it, and the second half is the one that proves you are not dodging.**',
  '**Practise:** Reframe, or answer. **1** a premise that is not on the page  **2** one that is on the page — so answer it  **3** a premise the questioner could not have known  **4** a question you cannot tell the sense of  **5** one where the reframe would be evasion',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the question from the card. B applies the four-second test out loud — **on the page or not** — and then either reframes or answers. ⚠ **Two rows on each card are fair questions** and must be answered straight. Change cards.'));
out.push(table(['Card A – the question', 'Card B – the question'], [
  ['_Why did you omit the covering line from the record?_', '_Why is the register not cited anywhere?_'],
  ['_⚠ Why did you not inspect the two sheeted bays?_', '_⚠ Why is there no figure for the second group?_'],
  ['_Why did you decline to give a degree of certainty?_', '_Why did you change the reporting verb in March?_'],
  ['_⚠ Why does your scope paragraph exclude the annexe?_', '_⚠ Why did your note go out after the deadline?_'],
  ['_Why did you consult the contractor and not the engineer?_', '_Why did you write to the committee rather than the chair?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the test applied out loud, and then which route was taken. ⚠ **Rows 2 and 4 on both cards are fair** — **the thing assumed is on the page, in a scope paragraph or a date** — **and a reframe there is evasion.** **Rows 1 and 3 are reframes.** **Rows 5 are the ones to spend time on**: the premise is true, the question is fair, and the answer is a reason and not a reframe at all.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your question from Stage 1** and write the reframe: both halves, thirty-five words or fewer, and no word naming the mistake. ⚠ **Then apply the test to your own question and be honest about the answer** — **in this class a fifth of the questions brought to this stage turned out to be fair, and the students who found that out here were glad not to find it out in a room.**'));
out.push(p('**b**  Swap. Your partner asks your question and then asks it again **with the premise made explicit**: _I am assuming you did not file it. Did you?_ ⚠ **The second version does not get a reframe** — **a premise that has been put as a question is a question, and the answer is yes or no and then the fact.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat was asked at the November hearing why she omitted the covering line from the record, and she did not omit it: she filed it, the registry did not read it into the record, and the question put the act on her. Mr Shihabi said so you say so, and that is what she did the first time, years ago, and it was a mistake, because I did not omit it makes the next ten minutes about who omitted it, and the hearing was not about that and the judge had not asked. Mrs Khoury said a witness who names the mistake has changed the subject to the mistake, and the reframe answers both questions and names nothing. Dr Qabbani asked her to say it again, and she gave it: if the question is whether the line was filed, it was, on the fourth of July, and the file reference is in my statement; if it is whether it was read into the record, it was not, and I was not asked to read it, which is thirty-four words, two answers and no accusation. Mrs Tarabishi said the judge still learns that the registry did not read it, and the judge learns it from the facts and not from the witness\'s opinion of them: a fact a judge has worked out is a fact, and a fact a witness has asserted about another office is a dispute. Mr Tayara asked whether if at the front is not rude, and not if it is unstressed, because stress on if turns the clause into a challenge and the questioner then defends the question. Mrs Rizk asked what happens if you cannot tell which question they mean, and then the reframe is doing exactly what it is for: you answer both and the questioner takes whichever one they wanted. Mr Attar asked whether there is a case where you say it plainly, and where the premise is something the questioner could not have known and will act on, once and early, as a fact. Mr Zahreddine said his was a surveyor who said he had not inspected the bays, and the scope paragraph says he did not, so the premise is true and the question is fair: about a fifth of the questions that feel wrong are correct and uncomfortable. Mrs Ajouz said so you test it first, and in the four seconds you have, with one question to yourself: is the thing they have assumed on the page or not? And Mrs Oueidat said the thing she will take away is the first time: she said I did not omit it and she was right, and she spent ten minutes being right about something nobody had asked, and the registry\'s clerk, who had done nothing deliberate, was in the room._'));
out.push(p('**Listener task:** write your partner\'s reframe and say which half you would have left out under pressure.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat wrote for the registry after the hearing. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note for the registry file_ · _the question of 18 November and its premise_ · **21 November**',
  '**The question put to me was why I omitted the covering line from the record.** ⚠ **I did not omit it.** **The line was filed on the fourth of July and the registry did not read it into the record, and the question as put placed the act on me.**',
  '**What I said, and it is the whole of what I said.** _If the question is whether the line was filed, it was, on the fourth of July, and the file reference is in my statement._ _If it is whether it was read into the record, it was not, and I was not asked to read it._ **Thirty-four words.**',
  '**What I did not say, and why this note exists.** **That the registry omitted it.** ⚠ **Nine years ago I answered the same shape of question with _I did not omit it_ and I was right**, and the next ten minutes were about who had, and the clerk who had done nothing deliberate was sitting four feet away. **The hearing was not about the record and the judge had not asked.**',
  '**What the court did with the two answers.** **The judge asked no further question about it and the minute records that the line was filed on 4 July and not read.** ⚠ **Which is the finding, arrived at without anybody asserting it** — **and a fact a court has worked out from two answers is in a different category from a fact a witness has alleged about another office.**',
  '**The one thing I have changed in my own practice since, which is not about the hearing.** **The covering line now goes to the registrar with a request that it be circulated rather than filed, and I keep the reply.** **Three of the last four were circulated.** **The fourth was not, and the request is the only reason I know which.**',
  '**And the thing this note is actually for.** **Not the hearing.** ⚠ **The next time a question of mine arrives with the act in the wrong place** — **and there will be one, because a translator sits between two offices and the question will always arrive from one of them.** **The form is four words at the front: _if the question is whether_. Unstressed, and straight into the first answer.**',
  '**One qualification, and it is the part I had to be taught.** **The reframe is for a premise that is not on the page.** ⚠ **Where the thing assumed is on the page, the question is fair and the reframe is evasion** — **and about a fifth of the questions that feel wrong to me have turned out to be of that kind, including two in this hearing, which I answered straight and should have.**',
  '**What I would want the registry to take from this, if anybody reads it.** **Nothing about me.** **One procedural fact: a covering line that is filed and not circulated produces a question at a hearing between eighteen and twenty-four months later** — **and the file is the only place that interval is visible.**',
]));
out.push(item('1', 'What were the two halves of her answer, and how long were they?'));
out.push(item('2', 'What did the court do with the two answers, and why does she call that the finding?'));
out.push(item('3', 'What qualification does she record, and how often has it applied to her?'));
out.push(writers([
  'A note on a question with a wrong premise: **the question, and where the act was put** → **what you said, quoted in full** → **what you did not say, and the earlier occasion that taught you** → **what the reader did with the two answers** → **what you have changed in your own practice** → **what the note is actually for** → **the qualification** → **and the one fact you would want the file to carry.**',
  '⚠ **Quote your own reframe in full and count the words.** _Thirty-four words._ **A note that paraphrases the answer cannot be drilled from** — **and the point of writing it down is that the form is four words at the front and those four words have to be learnt exactly.**',
  '**Name the earlier occasion when you got it wrong.** ⚠ _Nine years ago I answered the same shape of question with "I did not omit it" and I was right._ **Being right is the trap and the note has to say so** — **and the detail that makes it land is who else was in the room.**',
  '**Record the qualification against yourself.** ⚠ _About a fifth of the questions that feel wrong to me have turned out to be fair, including two in this hearing._ **A note on a technique that does not say when the technique is wrong is a note that will be misapplied by its own writer.**',
  '⚠ And **end on the procedural fact and not on yourself.** _A covering line that is filed and not circulated produces a question at a hearing between eighteen and twenty-four months later._ **That is the sentence a file can use.** **Anything about the writer\'s composure is of no use to anybody who opens the folder.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on a question whose premise was wrong (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _the question of _______________ and its premise_ · **______________**   **The question put to me was ______________.** ⚠ **______________.** **The ______________ and the question as put placed the act on ______________.**   **What I said.** _If the question is whether ______________, ______________._ _If it is whether ______________, ______________._ **______________ words.**   **What I did not say, and why this note exists.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both halves of the reframe, quoted and counted',
  'Nobody named as having made the mistake',
  'The earlier occasion when you got it wrong',
  'The qualification: when the reframe would be evasion',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their reframe**, and the room says what the premise must have been and whether it could tell.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the question, your answer quoted, what you did not say, what the reader did with it, what you have changed, what the note is for, the qualification, and the one fact for the file.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both halves quoted, nobody named, and the qualification present with a figure on it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says their reframe twice: once with stress on _if_, once flat.** ⚠ **The room says which version it would have defended the question after.** **It is the stressed one, every time, and the room will not believe it until it has heard both.** **Then the sentence this cycle ends on, which is Mrs Oueidat\'s: she spent ten minutes being right about something nobody had asked, and the clerk who had done nothing deliberate was four feet away.**'));
out.push(hw('Write **the reframe for your own question**, both halves, thirty-five words or fewer, and then do the harder half of the homework: ⚠ **apply the four-second test to the last five questions you were asked about your own work** and count how many were fair. **In this class the count has run between three and five out of five.** **Bring both numbers.** **13.5 is asked about a figure you cannot remember**, so bring a document with a figure in it you could not produce today.'));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  The figure you cannot remember'));
out.push(p('**Function:** being asked about a figure you cannot remember, and saying so usefully   ·   **Grammar:** _I can get it to you by Thursday; what I remember is the order of magnitude_   ·   **Pronunciation:** the order of magnitude said as a fact, not as a guess'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one figure in your own document that you could not produce today.** ⚠ **The figure\'s name, not the figure.** **In most classes everybody has one and about half have three** — **and your teacher writes the ten on the board, because the board is the evidence that this is the ordinary condition of anybody who writes with numbers in it.**'));
out.push(board('What was the uptake figure for the second year?', 'Three things, and none of them is a guess.'));
out.push(p('**b**  Which two are answers a panel can use? **1** _I cannot remember._  **2** _I cannot give you the figure from memory. It is in the register, I can have it to you by Thursday, and what I remember is that it was between a fifth and a quarter._  **3** _It was about twenty per cent, I think, or possibly a little more._  **4** _I do not carry that figure. The regional office holds it, I have asked for it this morning, and the order of magnitude is hundreds and not thousands._  **5** _I would rather not guess._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the answer has to carry?   **A** an apology and an offer to write later   **B** **three things** — where the figure is, when you can produce it, and the order of magnitude you do remember   **C** the best estimate you can manage'));
out.push(p('**b**  Listen again. **1** What was Mrs Rizk asked, and what were her three things?   **2** What does Mrs Oueidat say is wrong with _about twenty per cent, I think_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  Three things, and no guess', [
  ['Ms Huda', 'Mrs Rizk — the panel in October asked you for a figure.'],
  ['Mrs Rizk', '⚠ **The uptake for the second year.** **It is in my own interim report and I could not produce it.**'],
  ['Mr Shihabi', 'And you said so.'],
  ['Mrs Rizk', '**I said _I cannot remember_, and then I waited.** ⚠ **Which is three words and leaves the panel holding the question.**'],
  ['Mrs Khoury', '⚠ **And the panel does the only thing it can, which the room should be made to predict.** **It asks for the figure anyway, or it asks somebody else, or it writes the answer down as _not known to the candidate_** — **and all three outcomes are worse than the one that was available.**'],
  ['Mrs Oueidat', 'Three things, and none of them is the figure.'],
  ['Mrs Rizk', '⚠ **Where it is, when I can produce it, and what I do remember.** _It is in the register; I can have it to you by Thursday; and what I remember is that it was between a fifth and a quarter._ **Twenty-six words and the panel moved on.**'],
  ['Dr Qabbani', 'A fifth to a quarter is a guess.'],
  ['Mrs Oueidat', '⚠ **It is a range and the difference is not a nicety.** **_About twenty per cent, I think_ is a number with a hedge on it and a panel will quote the number and drop the hedge** — **and then you are the candidate who said twenty when the register says thirty-one.** **A range cannot be quoted that way, because the range is the claim.**'],
  ['Mrs Tarabishi', 'So the vaguer answer is the safer one.'],
  ['Mrs Khoury', '⚠ **It is not vaguer, and this is the distinction worth ten minutes.** **_A fifth to a quarter_ excludes a half and excludes a twentieth.** **It is a precise statement about a wide interval** — **and _about twenty, I think_ is an imprecise statement about a narrow one, which is the worst of both.**'],
  ['Mr Tayara', 'And the date? Thursday is specific.'],
  ['Mrs Rizk', '⚠ **It has to be, and it has to be a day I shall keep.** **_As soon as possible_ is not a commitment and a panel knows it** — **and in this class three people have given a day and two of the three were late, which a panel remembers longer than the missing figure.**'],
  ['Mrs Ajouz', 'What if you do not know where it is either?'],
  ['Mrs Khoury', '⚠ **Then that is the first thing and it is said plainly.** _I do not know which register holds it; the regional office will, and I shall ask today._ **Not knowing where a figure is kept is a fact about a system** — **and a candidate who pretends to know and then cannot find it has turned one gap into two.**'],
  ['Mr Zahreddine', 'Mine was a calibration date and I had it in my pocket.'],
  ['Mrs Oueidat', '⚠ **Then produce it, and the whole of this cycle does not apply.** **The move is for a figure you genuinely do not carry** — **and a candidate who uses the three-part answer for something in their own bag has been evasive about a document they are holding.**'],
  ['Mr Attar', 'Does the order of magnitude ever help?'],
  ['Mrs Rizk', '⚠ **It is the half the panel used.** **They were deciding whether the second year had been worth funding, and a fifth to a quarter answered that and thirty-one per cent would not have answered it better** — **and I did not know that until they told me afterwards.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the three words.** **_I cannot remember_ is true, it is honest, and it hands the question back** — **and the twenty-six words were available and I had never been shown that there was anything else to say.**'],
]));
out.push(sp());
out.push(box('Language box – the figure you do not carry', [
  '**Three things, in this order, and the figure is not one of them.** ⚠ **Where it is. When you can produce it. What you do remember.** _It is in the register; I can have it to you by Thursday; and what I remember is that it was between a fifth and a quarter._ **Twenty-six words.**',
  '**A range, never a number with a hedge on it.** ⚠ _About twenty per cent, I think_ **is a number with a hedge and a reader will quote the number and drop the hedge.** **_A fifth to a quarter_ cannot be quoted that way, because the range is the claim** — **and this is 4.5 and 9.1 arriving together in speech.**',
  '**And the range is not the vaguer answer.** ⚠ **_A fifth to a quarter_ excludes a half and excludes a twentieth: it is a precise statement about a wide interval.** **_About twenty, I think_ is an imprecise statement about a narrow one** — **which is the worst of the available answers and the one everybody gives first.**',
  '**The date is a day, and it is a day you will keep.** ⚠ **_As soon as possible_ is not a commitment and a reader knows it.** **A missing figure is forgotten in a fortnight; a day that was given and not kept is remembered for a year** — **and in this class two of the three who gave a day were late.**',
  '**Where you do not know where it is kept either.** ⚠ **That is the first thing, said plainly.** _I do not know which register holds it; the regional office will, and I shall ask today._ **Not knowing where a figure lives is a fact about a system** — **and pretending to know turns one gap into two.**',
  '**And the case where the move does not apply.** ⚠ **A figure you are carrying.** **Produce it.** **A candidate who gives the three-part answer about something in their own bag has been evasive about a document they are holding**, and that is the one way this move can do damage.',
  '**Pronunciation.** 🔊 **Track 13.10** **Say the range as a fact, with no rise and no _I think_.** ⚠ _Between a fifth and a quarter._ **Then say it again with a rise at the end and hear what the room does.** **A range said as a question is taken as a guess** — **and a guess is what the whole answer was built to avoid.**',
  '**Practise:** Give the three things. **1** a figure in a register  **2** one held by another office  **3** one whose location you do not know  **4** one you are carrying — so produce it  **5** one where the order of magnitude answers the real question',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the question from the card. B gives **the three things in order**, with a range and a named day. ⚠ **Two rows on each card are figures the candidate is carrying** — **and there B produces the figure and says nothing else.** Change cards.'));
out.push(table(['Card A – the question', 'Card B – the question'], [
  ['_What was the uptake for the second year?_', '_How many files came back in the three years?_'],
  ['_⚠ What is the calibration date on the instrument?_', '_⚠ What is the date of the letter you are holding?_'],
  ['_How many of the nine were cold-chain?_', '_What proportion of the twenty tickets quoted a note?_'],
  ['_⚠ What does table 4 give for group two?_', '_⚠ What is the file reference in your statement?_'],
  ['_What is the regional return figure?_', '_How many abstracts were revised after submission?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the three things, in order, and whether the range was said as a fact. ⚠ **Rows 2 and 4 on both cards are figures in the candidate\'s own hand** — **a calibration date, a letter in front of them, a table, a file reference** — **and the three-part answer there is evasion.** **Rows 5 are the hardest**: nobody collects the figure, so the first thing is _I do not know which register holds it_, and the day given is a day for asking.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your figure from Stage 1** and write the three things: where, when, and the range. ⚠ **The range must exclude something** — **if your range includes everything from a twentieth to a half it is not a range, it is a refusal with numbers on it.** **Then say all three in one turn to your partner and have them write down the range they heard.**'));
out.push(p('**b**  Swap. Your partner asks the follow-up a panel actually asks: _and is the order of magnitude enough for what we are deciding?_ ⚠ **You do not know what they are deciding, so the answer is a question** — _it depends what the figure is for; if it is whether the second year was worth funding, then yes_ — **which is 13.4 arriving one cycle later and in a friendlier room.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk was asked in October for the uptake figure for the second year, which is in her own interim report, and she could not produce it. Mr Shihabi said and you said so, and she said I cannot remember and then waited, which is three words and leaves the panel holding the question. Mrs Khoury said a panel then does the only thing it can: it asks for the figure anyway, or it asks somebody else, or it writes the answer down as not known to the candidate, and all three are worse than the answer that was available. Mrs Oueidat said three things, and none of them is the figure, and Mrs Rizk gave them: where it is, when she can produce it, and what she does remember, which is that it was between a fifth and a quarter, twenty-six words, and the panel moved on. Dr Qabbani said a fifth to a quarter is a guess, and Mrs Oueidat said it is a range and the difference is not a nicety: about twenty per cent, I think, is a number with a hedge on it and a panel will quote the number and drop the hedge, and then you are the candidate who said twenty when the register says thirty-one. Mrs Tarabishi said so the vaguer answer is the safer one, and Mrs Khoury said it is not vaguer at all: a fifth to a quarter excludes a half and excludes a twentieth, so it is a precise statement about a wide interval, where about twenty, I think, is an imprecise statement about a narrow one. Mr Tayara asked about the date, and it has to be specific and it has to be a day she will keep, because as soon as possible is not a commitment and a panel knows it. Mrs Ajouz asked what happens if you do not know where it is either, and then that is the first thing and it is said plainly, because not knowing where a figure is kept is a fact about a system. Mr Zahreddine said his was a calibration date and he had it in his pocket, and then he produces it and the cycle does not apply. Mr Attar asked whether the order of magnitude ever helps, and Mrs Rizk said it is the half the panel used: they were deciding whether the second year had been worth funding, and a fifth to a quarter answered that and thirty-one per cent would not have answered it better. And Mrs Rizk said the thing she will take away is the three words: I cannot remember is true and honest and hands the question back, and the twenty-six words were available and nobody had ever shown her there was anything else to say._'));
out.push(p('**Listener task:** write your partner\'s range and say what it excludes.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk sent the panel on the Thursday. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _to the funding panel_ · _the second-year uptake figure, as undertaken on Tuesday_ · **Thursday 17 October**',
  '**The figure is thirty-one per cent.** ⚠ **Two hundred and six of six hundred and sixty-four, for the twelve months to 30 June, from the register the branch keeps by hand.** **The register is at annexe A in photographed pages, because it does not leave the branch.**',
  '**What I said on Tuesday, so that the panel can see whether I kept to it.** **That it was between a fifth and a quarter.** ⚠ **It is neither: thirty-one per cent is above my own range and I was wrong about my own project by six percentage points.** **I am reporting that plainly because a range I gave under questioning is a claim, and a claim that turns out to be wrong is worth more to the panel than the figure it was about.**',
  '**Why the range was wrong, which is the useful part.** **I was remembering the first year.** **The first year was twenty-two per cent and I have quoted it in four documents** — **and the figure I could not retrieve had been displaced by a figure I knew well, which is a failure of memory with a shape to it and not simply a gap.**',
  '**What the panel asked the figure for, which I did not know on Tuesday and asked afterwards.** **Whether the second year justified continuation.** ⚠ **A fifth to a quarter answers that and so does thirty-one**, and the decision would have been the same on either — **so the order of magnitude was the right thing to give and the only error in Tuesday\'s answer was that my interval did not contain the truth.**',
  '**What I shall carry in future, since this is the second time.** **Three figures on one card: the first-year and second-year uptake, each with its denominator and period, and the date of the register page they come from.** **Not more than three.** **A candidate carrying eleven figures retrieves none of them, and I had eleven in a folder on Tuesday and produced none.**',
  '**One thing about the register itself that the panel should have.** **It is kept by hand, it does not leave the branch, and no printed register has been allocated to us since 2018.** ⚠ **The governorate holds four.** **That is not an excuse for Tuesday and it is a fact the panel may want for a different decision.**',
  '**The arithmetic the panel was actually doing, which I have reconstructed from what the chair said afterwards.** **Continuation required uptake above a quarter in either year.** **The first year was twenty-two per cent and the second is thirty-one, so the second year carries it and the first does not** — **and a range of a fifth to a quarter straddles the threshold, which is why the chair asked a second question and not why he asked the first.** ⚠ **I had not known there was a threshold.** **A candidate who knows what the figure is for can say whether a range is good enough, and I could not.**',
  '**And what I am not going to write, although the covering note invites it.** **An apology for Tuesday.** **The undertaking was Thursday and this is Thursday** — **and a note that apologises for the gap it is filling has drawn the panel\'s attention back to the gap and away from the figure, which is the one thing this note exists to deliver.**',
]));
out.push(item('1', 'What is the figure, and how does it compare with what she said on Tuesday?'));
out.push(item('2', 'Why does she say the range was wrong, and what shape does the failure have?'));
out.push(item('3', 'What will she carry in future, and why not more?'));
out.push(writers([
  'A note delivering a figure you undertook to produce: **the figure, with its denominator, period and source, in the first line** → **what you said under questioning, and whether you were right** → **why you were wrong, if you were** → **what the reader wanted the figure for** → **what you will carry in future** → **one fact about the source the reader may want** → **and the sentence you are not going to write.**',
  '⚠ **The figure goes in the first line with everything attached.** _Two hundred and six of six hundred and sixty-four, for the twelve months to 30 June._ **Numerator, denominator, period, source.** **A note whose first paragraph is about Tuesday has made the apology the subject and the figure an attachment.**',
  '**Report your own range against the truth, and say if it failed.** ⚠ _It is neither: thirty-one per cent is above my own range and I was wrong about my own project by six percentage points._ **A range given under questioning is a claim** — **and a claim that turned out wrong is worth more to a panel than the figure it concerned.**',
  '**Give the failure its shape.** ⚠ _I was remembering the first year, which was twenty-two per cent and which I have quoted in four documents._ **A gap with a cause can be prevented.** **_I simply could not recall it_ cannot** — **and the card with three figures on it is the direct consequence of knowing which figure did the displacing.**',
  '⚠ And **refuse the apology.** _The undertaking was Thursday and this is Thursday._ **A note that apologises for the gap it is filling has drawn the reader back to the gap** — **and it appears in seven of ten first drafts, usually first.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note delivering a figure you undertook to produce (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________, as undertaken on _______________ · **______________**   **The figure is ______________.** ⚠ **______________ of ______________, for ______________, from ______________.** **The ______________ is at ______________.**   **What I said on ______________, so that ______________ can see whether I kept to it.** **That it was ______________.** ⚠ **It is ______________.**   **Why the range was ______________, which is the useful part.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The figure with denominator, period and source in the first line',
  'Your own range reported against the truth',
  'The failure given a cause, not just admitted',
  'No apology anywhere in the note',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first line**, and the room says which of the four things is missing: numerator, denominator, period or source.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the figure, what you said, why you were wrong, what it was wanted for, what you will carry, one fact about the source, and the sentence you refuse.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: all four parts of the figure in the first line, the range reported against the truth, and no apology.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says their range twice, once flat and once with a rise, and the room says which one it heard as a guess.** ⚠ **It is the rise.** **Then one number on the board: how many of the ten ranges contained the true figure?** **In this class, six** — **and the four who were wrong had each been displaced by a figure they knew better, which is the finding of the cycle.** **Then Mrs Rizk\'s sentence: the twenty-six words were available and nobody had shown her there was anything else to say.**'));
out.push(hw('**Make the card.** ⚠ **Three figures, no more**: each with its denominator, its period and the page it comes from. **Then have somebody ask you for all three without the card in your hand**, and write down which one you could not produce. **In this class everybody could produce two of three and nobody could produce all three on the first attempt.** **Bring the card and the one you lost.** **13.6 writes the note the panel reads before you arrive**, so bring the document the panel would be reading.'));

// ===================== 13.6 =====================
out.push(h2('13.6  The note they read before you arrive'));
out.push(p('**Function:** writing the two-page note a panel will have read before you arrive   ·   **Grammar:** 260–300 words · written for a reader who will quote it back at you   ·   **Pronunciation:** reading your own note aloud at the speed a panel reads it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **who reads something about you before they meet you, and what it is.** ⚠ **The reader and the document.** **In most classes nine of the ten have such a reader and only three have seen the document** — **and the three who have seen it did not write it, which is the position this cycle is designed around.**'));
out.push(board('What will they have read before I speak?', 'And which sentence will come back at me?'));
out.push(p('**b**  Which two sentences belong in a note a panel will quote back at you? **1** _The finding rests on fifty-five readings of fifty-six positions; the position not reached is named at 2.1._  **2** _I have worked hard on this chapter over the past two years._  **3** _Two bays behind sheeted scaffold were not inspected and the finding excludes them._  **4** _I believe the work represents a significant contribution._  **5** _I am confident the panel will find the method sound._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the note is for?   **A** persuading the panel in advance   **B** **choosing which of your sentences they will quote** — because they will quote one, and a note of three hundred words decides which   **C** summarising the document'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say every sentence in the note has to survive?   **2** What does Mrs Tarabishi say she put in her note on purpose, and what happened?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  The sentence they will quote', [
  ['Ms Huda', 'Mrs Khoury — the note that goes in before the candidate does. What is it for?'],
  ['Mrs Khoury', '⚠ **Choosing which sentence comes back at you.** **A panel reads three hundred words and opens with one of them, and the candidate who has not chosen has let the panel choose.**'],
  ['Mr Attar', 'So you write the sentence you want quoted.'],
  ['Mrs Khoury', '⚠ **You write the sentence you can defend for ten minutes and you make it the most quotable thing on the page.** **Short, specific, and with its limit inside it** — **because the panel is not looking for your best sentence, it is looking for the one that gives it a question.**'],
  ['Mrs Tarabishi', 'Mine was the denominator and they took it.'],
  ['Mrs Tarabishi', '⚠ **_Nine findings at four degrees of certainty, each degree stated in the sentence that carries the finding._** **Twenty-one words, and the chair read it out and asked me to take the four degrees in turn** — **which is forty minutes I had prepared and the only forty minutes I had prepared.**'],
  ['Dr Qabbani', 'That is luck.'],
  ['Mrs Tarabishi', '⚠ **It was not.** **It is the only sentence in the note with a number in it twice** — **and a panel reading three hundred words of prose will open on the one place where something is countable, which Mrs Khoury told us in October and I did not believe until January.**'],
  ['Mrs Oueidat', 'And the sentences you do not want quoted?'],
  ['Mrs Khoury', '⚠ **Take them out, and the test is one question: could this be read aloud against me?** **_I believe the work represents a significant contribution_ can, and it will be, and the candidate then spends ten minutes defending a word they chose carelessly** — **and _significant_ has no defence because it has no content.**'],
  ['Mr Shihabi', 'Three hundred words is short for two pages.'],
  ['Mrs Khoury', '⚠ **It is two pages because of what is on them and not how much.** **A note of three hundred words with four countable facts, a scope sentence and nothing about the writer** — **and the white space is doing work, because a panel of three reads it in ninety seconds and remembers the shape.**'],
  ['Mr Tayara', 'Nothing about the writer at all?'],
  ['Mrs Oueidat', '⚠ **Nothing.** **No _I have worked hard_, no _I am confident_, no account of two years.** **A panel assessing a document that is told how hard it was to write has been given a reason to be kind** — **and kindness is the one response a candidate cannot answer, because there is no question in it.**'],
  ['Mrs Rizk', 'What about what you cannot do?'],
  ['Mrs Khoury', '⚠ **The scope sentence, and it goes in, and it is the second most quoted line in this class\'s notes.** _Two bays behind sheeted scaffold were not inspected and the finding excludes them._ **A limitation in the note is a limitation you introduce** — **and a limitation the panel finds is a limitation you concealed, and those are not the same document.**'],
  ['Mrs Ajouz', 'So you hand them the hard question.'],
  ['Mrs Khoury', '⚠ **You hand them the hard question you have an answer to, which is not the same as handing them the hardest one.** **In this class seven of ten notes had a scope sentence and all seven were asked about it** — **and all seven had forty seconds ready, because they had written the sentence and knew what it was for.**'],
  ['Mr Zahreddine', 'And you read it aloud before it goes?'],
  ['Mrs Tarabishi', '🔊 ⚠ **At the speed a panel reads, which is faster than you think.** **I read mine in ninety seconds and found two sentences I could not finish in one breath** — **and a sentence a reader cannot finish in one breath is a sentence they will stop in the middle of, and the middle is where my limit was.**'],
]));
out.push(sp());
out.push(box('Language box – the note read before you arrive', [
  '**The note chooses which sentence comes back at you.** ⚠ **A panel reads three hundred words and opens on one of them.** **A candidate who has not chosen has let the panel choose** — **and the panel is not looking for your best sentence, it is looking for the one that gives it a question.**',
  '**Make the quotable sentence the one you can defend for ten minutes.** ⚠ **Short, specific, with its limit inside it, and with something countable in it.** _Nine findings at four degrees of certainty, each degree stated in the sentence that carries the finding._ **Twenty-one words and two numbers** — **and a panel reading prose opens on the one place where something is countable.**',
  '**The test for every other sentence.** ⚠ **Could this be read aloud against me?** **_I believe the work represents a significant contribution_ can, and will be, and _significant_ has no defence because it has no content.** **Cut it, and cut everything of its kind.**',
  '**Nothing about the writer.** ⚠ **No _I have worked hard_, no _I am confident_, no account of two years.** **A panel told how hard a document was to write has been given a reason to be kind** — **and kindness cannot be answered, because there is no question in it.**',
  '**The scope sentence goes in, and it is the second most quoted line.** ⚠ _Two bays behind sheeted scaffold were not inspected and the finding excludes them._ **A limitation you introduce is a different object from a limitation the panel finds** — **and the first is answered in forty seconds because you wrote it and know what it is for.**',
  '**Two pages for three hundred words, and the white space is doing work.** ⚠ **Four countable facts, a scope sentence, nothing about the writer.** **A panel of three reads it in ninety seconds and remembers the shape** — **and shape is what survives ninety seconds, where argument does not.**',
  '**Pronunciation.** 🔊 **Track 13.12** **Read your own note aloud at a panel\'s speed and time it.** ⚠ **Three hundred words in about ninety seconds.** **Mark every sentence you cannot finish in one breath** — **a reader stops in the middle of those, and if your limit is in the middle, your limit has not been read.**',
  '**Practise:** Write the sentence you want quoted. **1** with two numbers in it  **2** with its limit inside it  **3** a scope sentence  **4** one you would cut, and why  **5** one that could be read aloud against you',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **whether a panel would quote it, and what question it would ask next.** ⚠ **Two rows on each card are sentences to cut.** **B must say what has no defence in them.** Change cards.'));
out.push(table(['Card A – a sentence from a note', 'Card B – a sentence from a note'], [
  ['_Nine findings at four degrees, each degree in the finding\'s own sentence._', '_Fifty-five readings of fifty-six positions; the one not reached is named._'],
  ['_⚠ I believe the work represents a significant contribution._', '_⚠ I am confident the panel will find the method sound._'],
  ['_Two bays behind sheeted scaffold were not inspected._', '_The second-group figure is in the register and not in the paper._'],
  ['_⚠ I have worked hard on this over the past two years._', '_⚠ The chapter has been substantially improved since the first draft._'],
  ['_The register is held outside the hospital and cannot be obtained in one request._', '_Three queries were dealt with at the counter and are not in the book._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** quotable or cut, and the next question. ⚠ **Rows 2 and 4 on both cards are cuts and the reason is the same every time: the sentence has no content to defend.** **_Significant_, _confident_, _hard_, _substantially_** — **four words, no defence, and each one costs ten minutes.** **Rows 3 and 5 are scope and absence sentences and all four will be quoted**, which is the point of writing them yourself.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the one sentence you want quoted back at you**, with something countable in it and its limit inside it. ⚠ **Twenty-five words or fewer.** **Then write, underneath, the forty seconds you would give if a panel read it out and said _take us through that_.** **In this class the sentence takes four minutes and the forty seconds takes half an hour.**'));
out.push(p('**b**  Swap. Your partner reads **your whole note** at a panel\'s speed, out loud, timed, and tells you **which sentence they would have opened on.** ⚠ **If it is not the one you chose, the one you chose is not the most countable thing on the page** — **and in this class that has happened to five of ten, every time because an unchosen sentence had a number in it and the chosen one had a word.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury said the note that goes in before the candidate is for choosing which sentence comes back at you, because a panel reads three hundred words and opens with one of them, and a candidate who has not chosen has let the panel choose. Mr Attar said so you write the sentence you want quoted, and you write the sentence you can defend for ten minutes and make it the most quotable thing on the page: short, specific, with its limit inside it, because the panel is not looking for your best sentence but for the one that gives it a question. Mrs Tarabishi said hers was the denominator and they took it: nine findings at four degrees of certainty, each degree stated in the sentence that carries the finding, twenty-one words, and the chair read it out and asked her to take the four degrees in turn, which is forty minutes she had prepared and the only forty minutes she had prepared. Dr Qabbani said that is luck, and it was not: it is the only sentence in the note with a number in it twice, and a panel reading three hundred words of prose will open on the one place where something is countable. Mrs Oueidat asked about the sentences you do not want quoted, and you take them out, and the test is one question: could this be read aloud against me? Mr Shihabi said three hundred words is short for two pages, and it is two pages because of what is on them and not how much: four countable facts, a scope sentence and nothing about the writer, and the white space is doing work. Mr Tayara asked whether nothing about the writer at all, and nothing, because a panel told how hard a document was to write has been given a reason to be kind, and kindness cannot be answered. Mrs Rizk asked about what you cannot do, and the scope sentence goes in and is the second most quoted line in this class\'s notes, because a limitation you introduce is a different object from a limitation the panel finds. Mrs Ajouz said so you hand them the hard question, and you hand them the hard question you have an answer to, which is not the hardest one: seven of ten notes had a scope sentence, all seven were asked about it, and all seven had forty seconds ready. And Mrs Tarabishi said she reads it aloud at the speed a panel reads, which is faster than you think: she read hers in ninety seconds and found two sentences she could not finish in one breath, and the middle is where her limit was._'));
out.push(p('**Listener task:** write the sentence your partner chose and the one you would have opened on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Tarabishi sent the panel three weeks before it sat. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _note to the examining panel_ · _chapter four, submitted 18 May_ · **22 December**',
  '**Nine findings at four degrees of certainty, each degree stated in the sentence that carries the finding.** **Chapter four, section 4.6, written on 2 May and unaltered since.**',
  '**The four degrees and what each rests on.** **Three findings are stated as established and rest on the eleven cases in table 2.** **Four are stated as probable and rest on the same eleven with one further source, named at 4.6.3.** **One is stated as provisional on a single case.** **One is stated as conjectural and the word is used deliberately: the evidence for it is an absence, and the absence is specified.**',
  '**What the chapter does not cover, and this is said here rather than left to be found.** ⚠ **Two of the nine were tested on the Damascus material only.** **The chapter does not claim that either holds outside it, and section 4.2 says so in the sentence that carries each finding, not in a separate paragraph.**',
  '**The figure the panel is most likely to want and which is not in the chapter.** **The second-group denominator is in the register and the chapter cites the register at 3.2.** ⚠ **The register is held outside the department.** **A reader in another city cannot obtain it in one request, and 3.2 does not say so.** **That is a fault in 3.2 and I shall say so if asked.**',
  '**One method decision the panel may wish to open.** **The abstract was read against the body with the body open, on 10 May, in eleven minutes, and two sentences were removed from the abstract as a result.** **Both removals are listed at annexe C with the reason for each.**',
  '**And one thing about the chapter\'s own history.** **Section 4.6 is the fourth version.** **The first three put the degree of certainty in a clause of its own and the fourth puts it inside the finding\'s sentence** — **and the change was made on 2 May, after the chapter had been read by one person, for a reason that is now at 4.1.**',
  '**[Her own record, kept with the note and not sent.]** **The count is two hundred and ninety-one words and the band is two hundred and sixty to three hundred, so there was room for about nine more and I did not use it.**',
  '**Which sentence I chose, and why that one.** **The first.** **It has two numbers in it, it is twenty-one words, and I can take the four degrees in turn for forty minutes** — **and the forty minutes exist, written out, because the sentence was chosen first and the preparation was built to it and not the other way round.**',
  '**What came out to make room, and it was all of one kind.** **Four sentences.** _I believe the chapter makes a contribution._ _The method has been substantially refined._ _I am confident the findings will stand._ _This has been two years of work._ ⚠ **Not one of the four contains anything a panel could ask about**, and all four could have been read aloud against me.',
  '**What I read aloud, and what it found.** **Ninety-four seconds at a panel\'s speed.** **Two sentences I could not finish in one breath, both in the paragraph about the four degrees, and I split both** — **and the split put the word _conjectural_ at the start of a sentence instead of the middle of one, which is where I want it, because it is the word I most expect to be asked about.**',
]));
out.push(item('1', 'Which sentence has she made the most quotable, and how can you tell?'));
out.push(item('2', 'What does she say about 3.2, and why is it in the note at all?'));
out.push(item('3', 'What does the last paragraph tell the panel that the chapter does not?'));
out.push(writers([
  'A note a panel reads before you arrive: **the sentence you want quoted, first, with something countable in it** → **the structure behind it, in items** → **what the document does not cover, said here** → **the figure they will want that is absent, and where it is** → **one method decision they may open** → **and one fact about the document\'s own history.**',
  '⚠ **Open on the countable sentence and give it its document reference.** _Nine findings at four degrees, each degree stated in the sentence that carries the finding. Chapter four, section 4.6, written on 2 May._ **Twenty-one words and two numbers.** **A panel opens where something can be counted** — **so the first line is the choice and everything after it is support.**',
  '**Put the limitation in the note, not in the panel\'s discovery.** ⚠ _Two of the nine were tested on the Damascus material only._ **A limitation you introduce is answered in forty seconds** — **and the same limitation found by a reader is answered in ten minutes and is remembered as a concealment.**',
  '**Name the fault in your own document before they do, and bound it.** ⚠ _That is a fault in 3.2 and I shall say so if asked._ **This is 13.2 written down**: a bounded concession, in advance, in a document the panel reads cold. **The bound is _in 3.2_ — not in the finding and not in the chapter.**',
  '⚠ And **put nothing about yourself anywhere in it.** **Read the finished note and strike every sentence containing _I believe_, _I am confident_, _significant_, _substantially_ or an account of how long it took.** **That strike has removed between none and four sentences**, and the notes with four had not been read aloud.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the note your own reader will have read before they meet you (120 words or more).'));
out.push(p('**______________** · _note to _______________ · _______________, _______________ · **______________**   **______________.** **______________, written on ______________ and ______________ since.**   **The ______________ and what each rests on.** **______________.** **______________.** **______________.**   **What ______________ does not cover, and this is said here rather than left to be found.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Something countable in the first sentence',
  'The limitation introduced, not left to be found',
  'A fault in your own document, bounded',
  'Nothing about the writer anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says what question it would ask next and whether the writer could hold it for ten minutes.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 to 300 words — and this is a band and not a minimum), to the shape in the writer\'s box: the quotable sentence, the structure, what is not covered, the absent figure, a method decision, and the document\'s history.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: something countable in the first sentence, a limitation introduced, a bounded fault, and nothing about the writer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Every student reads their own note aloud, timed, and writes the time at the top of it.** ⚠ **Three hundred words in about ninety seconds is a panel\'s speed.** **Anybody over two minutes has sentences they cannot finish in one breath, and they mark them now.** **Then one question to the room: whose first sentence would you open on, and why?** **In this class the room and the writer have agreed five times in ten.** **Then Mrs Tarabishi\'s sentence: the middle is where my limit was.**'));
out.push(hw('Write **the whole note, 260 to 300 words**, and then do the two things that make it a note rather than a summary. ⚠ **One: read it aloud, timed, and mark every sentence you cannot finish in one breath.** **Two: give it to somebody who has not read your document and ask them which sentence they would ask about.** **If it is not the one you chose, change the note and not the sentence.** **Bring the note, the time and what they said.** **13.7 mediates between a candidate\'s note and the panel\'s reading of it**, and carries **Reading Part 2**, **Writing Part 1** and **Listening Part 1**.'));

// ===================== 13.7 =====================
out.push(h2('13.7  Review & Mediate: the note, and the panel\'s reading of it'));
out.push(p('**Function:** mediating between a candidate\'s own note and the panel\'s reading of it   ·   **Recycling:** Unit 13 and the readiness page   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 2 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I accept point five and nothing above it.  **2** No sooner has the chair finished reading than I conceded.  **3** What I remember are the order of magnitude, not the figure.  **4** A limitation what a reader finds is read as a concealment.  **5** It is the second list where a panel acts on.  **6** The figure is in the register, that is held outside the department.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two documents and the question.'));
out.push(box(null, [
  '**A NOTE, AND THE MINUTE OF THE PANEL THAT READ IT** _(the writer is Mr Tayara; the note went in on 4 January and the panel sat on 21 January)_',
  '**From the note.** _"The timetable has been issued in the same form for nine years. This school has four hundred and ten pupils and two rooms available in the afternoon session. The arithmetic of the double session is at annexe A. I have not been able to establish how many pupils are in the second session across the governorate, and the directorate holds that figure."_',
  '**From the panel\'s minute.** _"The head teacher was unable to say how many pupils are in the second session. The panel noted that the submission rests on a figure the head teacher does not have."_',
  '**Mr Tayara.** _"I wrote that the directorate holds it. The minute says I do not have it, which is true, and makes it sound like a gap in my case."_',
  '**The panel\'s chair, afterwards.** _"We read the note three weeks ago. On the day, that was the sentence we remembered."_',
  '⚠ **Both documents are accurate and they are not about the same thing.**',
  '**And the thing neither party has noticed.** **The note names the figure\'s holder and does not say what the figure is for.** **The arithmetic at annexe A does not need it** — **the case rests on four hundred and ten pupils and two rooms, which are both in the note** — **and nobody in three weeks has asked whether the governorate figure matters at all.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  The sentence they remembered', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **The chair, and nobody else is a candidate.** **The panel has acted, the minute is the record, and Mr Tayara is the only party who can say what the figure was for.**'],
  ['Mr Tayara', 'And what must not be said is that the minute is wrong.'],
  ['Mrs Khoury', '⚠ **It is not wrong and that is why.** **Every word of it is true: he was unable to say the figure, and the panel noted that the submission rests on it** — **and the second half is the only part that is a judgement, and it is the part to answer.**'],
  ['Mrs Oueidat', 'So the letter answers one sentence.'],
  ['Mrs Tarabishi', '⚠ **_The submission does not rest on that figure._** **Six words, and then the arithmetic: four hundred and ten pupils, two rooms, annexe A** — **and all three were in the note three weeks before the panel sat.**'],
  ['Dr Qabbani', 'Then why did they remember the other sentence?'],
  ['Mrs Khoury', '⚠ **Because it is the only sentence in the note with _I have not been able to_ in it, and the room should sit with that for a moment.** **He wrote a limitation, correctly, as 13.6 requires** — **and the limitation was the most quotable thing on the page, because nothing else in the note was countable in the way a limitation is.**'],
  ['Mr Shihabi', 'So the limitation was a mistake.'],
  ['Mrs Oueidat', '⚠ **The limitation was right and its position was wrong, which is 13.3 and is the finding here.** **A limitation with no competing countable sentence near it becomes the sentence** — **and the four hundred and ten and the two rooms were in the note and were not in the same sentence as each other.**'],
  ['Mrs Rizk', 'What would have prevented it?'],
  ['Mrs Tarabishi', '⚠ **One sentence, and it was available.** _Four hundred and ten pupils and two afternoon rooms; the arithmetic is at annexe A and needs no governorate figure._ **Twenty-one words, two numbers, and the limitation would have been the second most quotable thing on the page instead of the first.**'],
  ['Mr Tayara', 'That is what I am going to write.'],
  ['Mrs Khoury', '⚠ **And one more sentence, which is the uncomfortable one.** **That the note did not say what the governorate figure was for.** **It is his own fault, it is small, and a letter that corrects a minute without conceding anything reads as a complaint** — **whereas the same letter with that sentence in it is a correction with a cost attached.**'],
  ['Mr Zahreddine', 'Does the chair not come out of it badly?'],
  ['Mrs Oueidat', '⚠ **The chair comes out of it as the only person who told him what happened**: _we read the note three weeks ago, and on the day that was the sentence we remembered._ **Nobody had to say that** — **and a letter that makes a chair regret having said it has cost the writer the one honest reader on the panel.**'],
  ['Mrs Ajouz', 'And what do you ask for?'],
  ['Mrs Khoury', '⚠ **One thing, and it is not that the minute be changed.** **That the arithmetic be considered on what the note contains** — **because a minute is a record of what happened and a record that is altered afterwards is worth less to everybody, including him.**'],
  ['Mr Attar', 'So the minute stands.'],
  ['Mrs Tarabishi', '⚠ **The minute stands and the submission is reconsidered, and those are two different requests.** **A candidate who asks for the first has asked the panel to say it was careless.** **A candidate who asks for the second has asked it to do the thing it is for** — **and in this class eight of ten first drafts asked for the first.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is the three weeks.** **They read it on the fourth and sat on the twenty-first, and what survived seventeen days was the one sentence I was most careful about** — **and I had thought carefulness was the protection.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between a document and its reading', [
  '**The three moves, unchanged since 1.7, and this is the first time they are used on a reader who has already decided.** ⚠ **1 Say what is correct, and mean it.** **2 Show the reader their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new in Book 2: the other party has acted, and the record exists.** ⚠ **So the letter answers the one sentence in the record that is a judgement and leaves every sentence that is a fact alone.** _He was unable to say the figure_ **is a fact.** _The submission rests on it_ **is a judgement** — **and only the second can be answered.**',
  '**Never write that the record is wrong.** ⚠ **Where it is accurate, saying so is the one sentence that can be answered** — **and a letter with an answerable sentence in it produces a reply about that sentence and no reconsideration.**',
  '**The two requests are different and only one of them is available.** ⚠ **Do not ask for the minute to be changed**: that is asking the panel to say it was careless, and a record altered afterwards is worth less to everybody. **Ask for the submission to be reconsidered on what the document contains** — **which is the thing the panel is for.**',
  '**Concede the small thing that is yours, and it is what stops the letter being a complaint.** ⚠ _The note did not say what the governorate figure was for._ **A correction with no cost attached reads as a grievance** — **and the cost has to be real and small, because a large one hands the panel a second finding.**',
  '**Protect the person who told you what happened.** ⚠ **The chair said _on the day, that was the sentence we remembered_ and nobody had to say it.** **A letter that makes an honest reader regret having been honest has cost the writer the only reader on the panel who will ever do it again.**',
  '**Pronunciation.** 🔊 **Track 13.14** **Say _the submission does not rest on that figure_ with no stress on _not_.** ⚠ **Stress on _not_ makes it a contradiction and the room hears somebody arguing with a minute.** **Flat, it is a statement about the document** — **and the sentence after it has to be the arithmetic, immediately, or the flatness is wasted.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the document and the record from the card. B says **which sentence of the record is a judgement**, what the one answering sentence is, and **what small thing is conceded.** ⚠ **On one of the two cards the record contains no judgement at all.** **B must find that, and the answer there is that no letter is written.** Change roles with the other pair.'));
out.push(table(['Pair A – the school submission', 'Pair B – the registration file'], [
  ['_"I have not been able to establish the governorate figure; the directorate holds it."_', '_"Three queries were dealt with at the counter and are not in the book."_'],
  ['_"The head teacher was unable to say how many pupils are in the second session."_', '_"The branch records three counter queries as outside the day-book."_'],
  ['_⚠ "The panel noted that the submission rests on a figure the head teacher does not have."_', '_⚠ "The file was accepted on 11 August."_'],
  ['_⚠ Conceded: the note did not say what the figure was for._', '_⚠ Conceded: nothing. There is nothing to answer._'],
  ['_⚠ Asked for: reconsideration on what the note contains._', '_⚠ Asked for: nothing. No letter is written._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the judgement, the answering sentence, and the concession. ⚠ **On Pair B there is no judgement and no letter** — **the record is three facts and an acceptance, and a writer who answers it has written to a reader who agrees with them.** **The room will write a letter anyway**, because the second sentence reads like a paraphrase and a paraphrase feels like a misreading. **It is the same fact in the registry\'s words.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own note from 13.6** and **the sentence somebody said they would ask about.** ⚠ **Write the record as that reader would write it, in two sentences** — **one fact and one judgement** — **and then write the six-word answer to the judgement and the arithmetic that follows it.** **In this class seven of ten found that their reader\'s judgement was about the limitation they had introduced on purpose.**'));
out.push(p('**b**  Swap. Your partner reads **only your two-sentence record** and says **which half is the judgement.** ⚠ **If they cannot tell, your record is two facts and there is nothing to answer** — **which is a better outcome than it sounds and is the finding of Pair B.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said the chair gets the letter and nobody else is a candidate, because the panel has acted, the minute is the record, and Mr Tayara is the only party who can say what the figure was for. Mr Tayara said what must not be said is that the minute is wrong, and it is not wrong and that is why: every word of it is true, and the only part that is a judgement is that the submission rests on the figure, which is the part to answer. Mrs Oueidat said so the letter answers one sentence, and Mrs Tarabishi gave it: the submission does not rest on that figure, six words, and then the arithmetic, four hundred and ten pupils, two rooms, annexe A, all three of which were in the note three weeks before the panel sat. Dr Qabbani asked why they remembered the other sentence, and Mrs Khoury said because it is the only sentence in the note with I have not been able to in it: he wrote a limitation, correctly, as 13.6 requires, and the limitation was the most quotable thing on the page because nothing else in the note was countable in the way a limitation is. Mr Shihabi said so the limitation was a mistake, and Mrs Oueidat said the limitation was right and its position was wrong, which is 13.3: a limitation with no competing countable sentence near it becomes the sentence. Mrs Rizk asked what would have prevented it, and one sentence that was available: four hundred and ten pupils and two afternoon rooms, the arithmetic is at annexe A and needs no governorate figure, twenty-one words and two numbers. Mrs Khoury said and one more sentence, which is the uncomfortable one, that the note did not say what the governorate figure was for, because a letter that corrects a minute without conceding anything reads as a complaint. Mr Zahreddine asked whether the chair does not come out of it badly, and the chair comes out of it as the only person who told him what happened, and nobody had to say that. Mrs Ajouz asked what you ask for, and one thing, and it is not that the minute be changed, because a record altered afterwards is worth less to everybody including him. Mr Attar said so the minute stands, and the minute stands and the submission is reconsidered, and those are two different requests: eight of ten first drafts asked for the first. And Mr Tayara said the thing he will take away is the three weeks: they read it on the fourth and sat on the twenty-first, and what survived seventeen days was the one sentence he was most careful about, and he had thought carefulness was the protection._'));
out.push(p('**Listener task:** write the judgement sentence and the six-word answer to it.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text below and think of the word which best fits each gap. Use only **one** word in each gap.'));
out.push(box(null, [
  '**WHAT A PANEL IS ACTUALLY DOING**',
  'A panel that has read your writing is not assessing the writing. It is assessing whether the person in front of it is the same person as the one on the page, and the only instrument it has for that is a question. This is worth stating plainly, because almost every candidate prepares for the wrong thing: they prepare to defend the document, **(1)** ______ is not under threat, instead of preparing to be a reader of it.',
  'It is not the list of faults that a panel acts on, **(2)** ______ the list of what still stands. The first list every candidate can produce on demand; the second has to be built, and built from items rather than qualities, because a quality is something a panel has to take **(3)** ______ trust and no panel is in the business of trusting anybody.',
  'No **(4)** ______ has the chair read a sentence back than the candidate learns something about the note that no amount of rereading would have taught them. The sentence that comes back is almost never the one the writer worked hardest on. It is the one with something countable in it, or the one containing a limitation — and **(5)** ______ it not for the limitation being the only numerate thing on many pages, candidates would be asked about their findings far more often than they are.',
  'Two habits cost marks and both are forms of honesty. The first is the concession that stops in the middle: a candidate concedes a sentence, says nothing further, and is read as somebody who cannot say what the better version would **(6)** ______ . The second is the answer _I cannot remember_, which is true and which hands the question back; a panel then records the figure as not known to the candidate, and that is a worse outcome **(7)** ______ a range and a date would have been.',
  'In so **(8)** ______ as any of this can be taught, it is taught by being asked. The useful preparation is not rereading the document but handing it to somebody who has not read it and finding out which sentence they ask about.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter to the chair (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **The panel was right about ______________.** **______________.**   **The submission does not rest on ______________.** ⚠ **______________, ______________, and ______________** — **all three are at ______________ of the note of ______________.**   **What the note did not do.** ⚠ **It did not say ______________.**   **I should be grateful if ______________ were ______________ on what the note contains.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The fact in the record left alone; only the judgement answered',
  'The arithmetic immediately after the six-word answer',
  'The small thing conceded, and it is yours',
  'Reconsideration asked for, not an altered record',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **First Writing task of Book 2, and it is the essay.** **Name the two in the first paragraph with the ground for choosing them, and do not mention the third again.**',
  'Your class has read an article about being questioned on your own work. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about a panel that has read your writing. **First**, that the sentence it quotes back is never the one the writer worked hardest on. **Second**, that a concession costs nothing provided it has a limit in the same breath. **Third**, that the useful preparation is not rereading the document but giving it to a reader who has not seen it."_',
  '**Points to discuss: 1** the sentence that comes back   **2** the bounded concession   **3** the reader who has not seen it',
  '⚠ **One of the three is harder to defend than it looks.** **Say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I accept point five and nothing ___ it.   a) beyond   b) above   c) outside',
  '2  No sooner ___ the chair finished reading than I conceded.   a) has   b) had   c) did',
  '3  What I remember ___ the order of magnitude, not the figure.   a) are   b) were   c) is',
  '4  A limitation ___ a reader finds is read as a concealment.   a) that   b) what   c) which it',
  '5  It is the second list ___ a panel acts on.   a) what   b) that   c) where',
  '6  The figure is in the register, ___ is held outside the department.   a) that   b) what   c) which',
  '7  A candidate ___ has not chosen has let the panel choose.   a) who   b) whom   c) which',
  '8  I shall have it to you ___ Thursday.   a) until   b) by   c) since',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style – three extracts).** 🔊 **Track 13.15** You will hear three short extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**Extract One — a candidate and her supervisor, after a panel.**',
  '**1**  What does the candidate say cost her the next twenty minutes?   **A** the concession itself   **B** the four seconds after it   **C** the chair\'s first question',
  '**2**  What does the supervisor say she should carry?   **A** the two sentences on a card   **B** a longer note   **C** the register',
  '**Extract Two — two members of a panel, afterwards.**',
  '**3**  What does the woman say she opened on?   **A** the first paragraph   **B** the scope sentence   **C** the only countable sentence',
  '**4**  What does the man say about the limitation in the note?   **A** it was concealed   **B** the candidate introduced it   **C** it was unnecessary',
  '**Extract Three — a witness and a solicitor.**',
  '**5**  What does the solicitor advise against?   **A** naming the mistake   **B** answering both questions   **C** giving a range',
  '**6**  What does the solicitor say about the premise in the earlier question?   **A** it was untrue   **B** it could not have been known   **C** it was in the candidate\'s own document',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['Narrator', '**Extract One.** A candidate and her supervisor, after a panel.'],
  ['Supervisor', 'You conceded the sentence. That was right.'],
  ['Candidate', 'And then I stopped, and the room was quiet for about four seconds, and the next twenty minutes were about whether the whole section was reliable. The concession was not the problem. The four seconds were. I had the two sentences in my notes and the notes were open at the right page.'],
  ['Supervisor', 'Then they do not go in the notes. Write them on a card, in capitals, and hold the card. You did not look down once in fifty minutes and I watched you not look down.'],
  ['Candidate', 'The card seems a small thing for a viva.'],
  ['Supervisor', 'The card is the only thing. The sentences already exist.'],
  ['Narrator', '**Extract Two.** Two members of a panel, afterwards.'],
  ['Woman', 'I opened on the nine findings at four degrees. It was the only place in three hundred words where anything could be counted, and I had read the note three weeks before.'],
  ['Man', 'I would have gone to the two bays.'],
  ['Woman', 'The scope sentence. Yes, and I came to it second.'],
  ['Man', 'What struck me is that she put it there herself. Nothing was hidden and we did not have to find it, and I have sat on panels where the limitation arrives in the fortieth minute and then the rest of the hour is about why it was not in the note.'],
  ['Woman', 'She had forty seconds ready for it.'],
  ['Man', 'She had forty seconds ready because she wrote the sentence. That is the whole of it.'],
  ['Narrator', '**Extract Three.** A witness and a solicitor.'],
  ['Solicitor', 'The second question will put the act on you. Do not say that the question is wrong.'],
  ['Witness', 'Even though it is?'],
  ['Solicitor', 'Especially then. Name the mistake and the next ten minutes are about the mistake, and the court has not asked about it. Give both answers. If the question is whether it was filed, it was; if it is whether it was read into the record, it was not.'],
  ['Witness', 'And the second question they asked me last time?'],
  ['Solicitor', 'That one was fair, and you answered it straight, and you were right to. The thing they assumed was in your own scope paragraph. A reframe there would have sounded like a dodge, and the court would have been correct to hear it that way.'],
]));
out.push(p('**C  Writing.** Write the letter to the chair (220–260 words): what the record is right about, the six-word answer to the judgement, the arithmetic, the small thing conceded, and the request.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ concede a sentence and finish the turn with both of the two things',
  '☐ keep a concession at the size I gave it, in the same words, three times',
  '☐ give both numbers and then both lists, in forty seconds, justifying nothing',
  '☐ build a second list of items a reader can check in a minute',
  '☐ reframe a question whose premise is not on the page, naming nobody',
  '☐ apply the four-second test and answer a fair question straight',
  '☐ answer about a figure I cannot produce: where, when, and a range',
  '☐ write the note a reader sees first, and choose the sentence they will quote',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _hold one\'s ground · go after · press home · drive at · lead up to · run up against · reel off · dig in · let on · set straight · answer back · think back to_.',
  '**This unit\'s word-formation set** _(Reading Part 2 in 13.7 draws on this unit\'s lexis)_: _examine → **examination** · question → **questionable** · probe → **probing** · recall → **recollection** · attest → **attestation** · substantiate → **unsubstantiated** · credible → **credibility** · tenacious → **tenacity** · candid → **candour**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _look for_ **→ _the sentence a panel is looking for_**, which is selecting, where at A2 it was looking for your keys · _get up_ **→ _get up and answer it_**, which is rising to a challenge, where at A2 it was getting up in the morning · _go out_ **→ _the note goes out three weeks before_**, which is being circulated, where at A2 it was going out in the evening.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 13 · The Panel That Has Read Your Writing');
