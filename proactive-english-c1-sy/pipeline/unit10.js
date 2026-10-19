// Proactive English C1 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE WRITER SENT', 'WHAT THE READER GOT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says which word a desk would change, and whether the change costs a fact.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 10  The Sentence That Cannot Be Rewritten'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Somebody is going to change your sentence after you have sent it.** ⚠ **A sub-editor, a translator, a secretary typing a minute, a colleague tidying a report, a desk with forty minutes and eighty words of space.** **They will not ask you first and they will not be wrong to do it** — **and what you can do, before you send anything, is write the sentence they will not need to change.**',
  '**10.1** finds the one verb that fixes a sentence\'s register.   **10.2** predicts the edit a desk will make and writes the version it will not.   **10.3** nominalises and un-nominalises at will, and chooses on the reader.   **10.4** writes the sentence that cannot be shortened without losing a fact.   **10.5** reads a sentence as a translator and finds the part that will not go.   **10.6** writes the eighty words that survive a desk.   **10.7** mediates between a writer and the sub-editor who rewrote them.',
  '**Exam practice in 10.7:** C1 Advanced **Reading and Use of English Part 1** (multiple-choice cloze), **Writing Part 2** (a letter or an email) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a sentence of yours that somebody else changed, with both versions if you have them. **Two:** eighty words of your own that you believe cannot be cut. **10.2 runs on the first and 10.4 and 10.6 run on the second.**',
  '**And one thing in this unit is a reversal rather than an addition.** ⚠ **At B2 you were taught to un-nominalise: _the condensation of the four paragraphs_ → _the four paragraphs were condensed_.** **10.3 teaches the move in both directions and makes you choose on the reader** — **because a nominalisation is the right sentence for a register that needs no actor, and the B2 rule was a rule for writers who had only one direction.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 10.1 =====================
out.push(pb());
out.push(h2('10.1  One verb, three registers'));
out.push(p('**Function:** finding the verb that fixes a sentence\'s register, and changing only it   ·   **Grammar:** _said · stated · claimed · conceded · maintained_   ·   **Pronunciation:** _claimed_ said without an opinion in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the sentence of yours that somebody changed, in both versions.** ⚠ **Read the original first and then the published one, with no comment.** Your teacher writes the two columns on the board. **In most classes the change is a single word in seven of the ten**, and in four or five of those seven the word is a reporting verb.'));
out.push(board('The ward said the pharmacy had instructed them.', 'The ward claimed the pharmacy had instructed them.'));
out.push(p('**b**  Which two of these put the writer on one side? **1** _The ward said the pharmacy had instructed them._  **2** _The ward claimed the pharmacy had instructed them._  **3** _The ward stated that the pharmacy had instructed them._  **4** _The ward maintained that the pharmacy had instructed them._  **5** _The ward conceded that the pharmacy had instructed them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a reporting verb carries?   **A** nothing   **B** **the writer\'s own position on whether the thing said is true** — and five of them carry five different positions, which a reader picks up without noticing   **C** the speaker\'s tone of voice'));
out.push(p('**b**  Listen again. **1** What did Mrs Khoury change in the sentence about the ward, and what did the writer say afterwards?   **2** What does Mrs Oueidat say about _claimed_ in a court document?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  Said, claimed, conceded', [
  ['Ms Huda', 'Mrs Khoury — the one word.'],
  ['Mrs Khoury', '⚠ **_Said_ to _claimed_.** **The ward said the pharmacy had instructed them, and I made it _claimed_, and the paper carried it.** **One word in a nine-word sentence.**'],
  ['Mrs Ajouz', 'And it was my pharmacy.'],
  ['Mrs Khoury', '⚠ **It was, and I did not know that when I did it.** **_Claimed_ tells a reader that the writer does not believe the speaker.** **It is the cheapest editorial position there is and I had taken one on a fact I had not checked.**'],
  ['Mrs Tarabishi', 'Is _said_ not also a position?'],
  ['Mrs Khoury', '⚠ **_Said_ is the only one of the five that is not.** _Stated_ **is formal and slightly distant.** _Maintained_ **says they have been asked twice.** _Conceded_ **says it was against their interest.** _Claimed_ **says the writer doubts it** — **five verbs, five positions, and only the first is free.**'],
  ['Mrs Oueidat', '⚠ **And _claimed_ is the word I am forbidden to use.** **In a court document the translator has no position**, so every reporting verb goes to _said_ or to _stated_, and the difference between those two is the whole of the register available to me.'],
  ['Mr Tayara', 'A school report has the same problem in the other direction.'],
  ['Mrs Khoury', '⚠ **It has, and _conceded_ is the one to watch there.** _The parent conceded that the absences were unexplained._ **It is accurate and it has made the parent a party to a dispute** — **and the letter was about an attendance record, which is not a dispute until a verb makes it one.**'],
  ['Mr Shihabi', 'A wire service writes _said_ nine times in a paragraph and a desk leaves it.'],
  ['Mrs Khoury', '⚠ **Because repetition is cheaper than a position.** **A paragraph with _said_ nine times in it is monotonous and carries nothing**, and a paragraph that varies the verb for variety has taken four positions by accident. **The rule on a desk is: vary it never, unless the variation is the finding.**'],
  ['Dr Qabbani', 'And where the variation is the finding?'],
  ['Mrs Oueidat', '⚠ **Then it is the most useful word in the sentence.** _The first expert maintained his view after the second report; the second conceded his._ **Two verbs, and the whole history of the correspondence is in them** — **and a reader who has only _said_ twice has been told nothing.**'],
  ['Mrs Rizk', 'How do I know which one a donor will read as a position?'],
  ['Mrs Khoury', '⚠ **All of them except _said_.** **Write _said_ by default and spend the other four deliberately**, which is about twice in a document. **The test is one question: would I defend this verb if the person quoted read it?**'],
  ['Jad', 'In a forum answer nobody is quoting anybody.'],
  ['Mrs Khoury', '⚠ **You quote the manual, and _the manual claims_ is a sentence about you and not about the manual.** **Fifteen people will answer the verb and nobody will answer the question** — **and the thread is then about your attitude, which is the one subject a technical answer cannot survive.**'],
  ['Mr Zahreddine', 'I use _states_ throughout and have never varied it.'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is Mrs Ajouz\'s face.** **I changed one word in nine and I was doing my job**, and the sentence that went out said something about her branch that I had no evidence for — **and _said_ would have carried the whole of the news.**'],
]));
out.push(sp());
out.push(box('Language box – five verbs, five positions', [
  '**The five, and what each one commits you to.** ⚠ _said_ — **nothing; the only free verb of the five.** _stated_ — **formal, and slightly distant.** _maintained_ — **they have been asked more than once.** _conceded_ — **it was against their interest to say it.** _claimed_ — **you doubt it.**',
  '**The default, and the budget.** ⚠ **Write _said_ unless the variation is the finding.** **Four deliberate uses in a document is a great many** — **and a writer who varies the verb for variety has taken four positions without choosing any of them.**',
  '**Where the variation _is_ the finding, it is the most useful word in the sentence.** ⚠ _The first expert maintained his view after the second report; the second conceded his._ **Two verbs, and the history of the correspondence is in them.** **A reader given _said_ twice has been told nothing.**',
  '**The test, and it takes four seconds.** ⚠ _Would I defend this verb if the person quoted read it?_ **_Claimed_ fails it almost always.** **_Conceded_ fails it whenever the thing conceded was not against anybody\'s interest** — **and in a school letter or a registration file it makes a party out of somebody who was not one.**',
  '**And the register you have left when you may not take a position at all.** ⚠ **A court translator has two verbs: _said_ and _stated_.** **That is the whole of the available range**, and Mrs Oueidat has worked inside it for eleven years — **which is worth knowing, because a writer who believes they need five verbs has never tried working with two.**',
  '**The one that is not about verbs at all.** ⚠ **A desk changes a word because the word was the only thing in the sentence it could change.** **A sentence with its facts, its denominators and its dates in place leaves nothing to improve** — **and the edit then falls on the verb, where a writer loses a position they never took.**',
  '**Pronunciation.** 🔊 **Track 10.2** **Say _the ward claimed the pharmacy had instructed them_ with no stress on _claimed_.** ⚠ **It cannot be done.** **The word takes a stress wherever it is put**, which is the spoken form of the same fault: a listener hears the doubt before they hear the sentence. **Then say it with _said_ and notice that the sentence has no shape at all** — **which is what a free verb sounds like.**',
  '**Practise:** Choose the verb and defend it. **1** a fact nobody disputes  **2** a position held after a second report  **3** something against the speaker\'s interest  **4** a court document  **5** one where a desk would change your verb — and write the version it would not',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **which position the verb takes** and **what a desk would change it to.** ⚠ **Two rows on each card have a verb that cannot be defended if the person quoted reads it.** **B must say so and give the free version.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The ward said the pharmacy had instructed them._', '_The contractor said the drawing had been amended._'],
  ['_⚠ The parent conceded that the absences were unexplained._', '_⚠ The applicant claimed the record was complete._'],
  ['_The first expert maintained his view after the second report._', '_The second expert conceded that he had not calculated the frame._'],
  ['_⚠ The branch claimed the cabinet had been serviced._', '_⚠ The office conceded that the note had been adopted in March._'],
  ['_The register states that the specification is M16._', '_The circular states that a second reading is required._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the position, and the free version. ⚠ **Rows 2 and 4 on both cards fail the test** — **a parent and an applicant and a branch and an office have each been given a verb that takes a position about them**, and in rows 4 _conceded_ is worse than _claimed_ because adopting a note in March was against nobody\'s interest. **Rows 3 are the defensible variations**: the correspondence history is the finding and the verbs carry it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your two versions from Stage 1** and find **the one word that changed.** ⚠ **Then write the sentence a desk would have had nothing to change in.** **In this class that version has been longer than the original about half the time** — **because what the desk was reaching for was usually a missing date or a missing denominator, and the verb was only where its hand landed.**'));
out.push(p('**b**  Swap. Your partner reads **your original sentence** and says **which word they would change and to what.** ⚠ **They agree with the actual desk about two-thirds of the time.** **The edit is that predictable**, which is the whole premise of 10.2.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury changed said to claimed — the ward said the pharmacy had instructed them, and she made it claimed, and the paper carried it: one word in a nine-word sentence. Mrs Ajouz said it was her pharmacy, and it was, and Mrs Khoury did not know that when she did it: claimed tells a reader that the writer does not believe the speaker, which is the cheapest editorial position there is, and she had taken one on a fact she had not checked. Mrs Tarabishi asked whether said is not also a position, and said is the only one of the five that is not — stated is formal and slightly distant, maintained says they have been asked twice, conceded says it was against their interest, claimed says the writer doubts it: five verbs, five positions, and only the first is free. Mrs Oueidat said claimed is the word she is forbidden to use, because in a court document the translator has no position, so every reporting verb goes to said or to stated, and the difference between those two is the whole of the register available to her. Mr Tayara said a school report has the same problem in the other direction, and conceded is the one to watch there: the parent conceded that the absences were unexplained is accurate and has made the parent a party to a dispute, and the letter was about an attendance record. Mr Shihabi said a wire service writes said nine times in a paragraph and a desk leaves it, and Mrs Khoury said that is because repetition is cheaper than a position: a paragraph that varies the verb for variety has taken four positions by accident, and the rule on a desk is to vary it never unless the variation is the finding. Dr Qabbani asked about the case where the variation is the finding, and Mrs Oueidat said it is then the most useful word in the sentence: the first expert maintained his view after the second report and the second conceded his, and the whole history of the correspondence is in those two verbs. Mrs Rizk asked how she knows which one a donor will read as a position, and all of them except said: write said by default and spend the other four deliberately, which is about twice in a document, and the test is whether you would defend the verb if the person quoted read it. Mr Attar said nobody is quoting anybody in a forum answer, and you quote the manual, and the manual claims is a sentence about you and not about the manual. Mr Zahreddine said he uses states throughout and has never varied it. And Mrs Khoury said the thing she will take away is Mrs Ajouz\'s face: she changed one word in nine and she was doing her job, and said would have carried the whole of the news._'));
out.push(p('**Listener task:** write the word that changed in your own pair, and the version a desk would have left.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Khoury circulates to contributors. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _to contributors_ · _reporting verbs: a note that is shorter than the correspondence it saves_ · **2 June**',
  '**This desk changes about one word a paragraph and the word is usually a reporting verb.** **The note is to explain what each of them does, so that the verb you send is the verb you meant.**',
  '**_Said_ is free and the other four are not.** **_Said_ takes no position on whether the thing said is true.** **_Stated_ is formal and slightly distant and is useful for documents rather than people.** **_Maintained_ tells a reader the speaker has been asked more than once.** **_Conceded_ tells them it was against the speaker\'s interest.** **_Claimed_ tells them the writer doubts it.**',
  '**Two of the four are about the speaker and two are about you.** **_Maintained_ and _conceded_ describe something the speaker did** — **they held a position under pressure, or they gave something away against their own interest.** ⚠ **_Stated_ and _claimed_ describe you**: the first puts you at a distance from the sentence and the second puts you against it. **The first pair can be checked against a record and the second pair cannot**, which is why the second pair produces the corrections.',
  '**The default is _said_, nine times in a paragraph if necessary.** **Monotony is cheaper than a position.** ⚠ **A paragraph that varies the verb for variety has taken four positions without choosing any of them**, and the desk will flatten all four, which costs you the one you did mean.',
  '**Where the variation is the finding, it is the best word in the sentence and this desk will not touch it.** **_The first expert maintained his view after the second report; the second conceded his._** **Two verbs and the history of a correspondence.** **Send that and nothing will happen to it.**',
  '**The test before you file.** ⚠ _Would I defend this verb if the person quoted read it?_ **_Claimed_ fails almost always.** **_Conceded_ fails whenever the thing conceded was against nobody\'s interest** — **and in a story about a school or a pharmacy it makes a party out of somebody who was not one.**',
  '**And the thing this note cannot say in a rule, so it is said as a figure.** **In March this desk changed _said_ to _claimed_ in a nine-word sentence about a dispensary.** **The change was within the style book and the fact behind it had not been checked by anybody**, and the correction ran at the foot of page four eleven days later.',
  '**One request rather than a rule.** **If you have chosen a verb deliberately, mark it.** ⚠ **Four letters in the margin — _del._ — and this desk will leave it and come to you if it disagrees.** **Nobody has ever done this and it would take you two seconds.**',
  '**And one word that is not on the list of five and is changed here more often than any of them.** **_Admitted._** ⚠ **It is _conceded_ with a court attached**, and this desk takes it out of every story that is not about one. **A person who admits something has been accused of something**, and in most of what we print nobody has been.',
  '**D. Khoury** · _chief sub-editor_',
]));
out.push(item('1', 'Which verb does she call free, and what are the other four for?'));
out.push(item('2', 'What is the test she gives, and which verbs fail it?'));
out.push(item('3', 'What does she ask contributors to do, and what will the desk then do?'));
out.push(writers([
  'A note that explains an edit before it happens: **say what this desk changes and how often** → **the free word, and what each of the others commits the writer to** → **the default, with the reason monotony is cheaper** → **the case where variation is the finding, and a promise not to touch it** → **the test, in one question** → **the figure that makes the rule believable** → **and one request that costs the reader two seconds.**',
  '⚠ **Name the free word and say that it is the only one.** _Said takes no position on whether the thing said is true._ **A writer who has never been told this believes all five are neutral** — **and four of them are a position taken on their behalf by their own hand.**',
  '**Give the default and the reason, not the default alone.** ⚠ _Monotony is cheaper than a position._ **Nine _saids_ in a paragraph is a style fault and four accidental positions is an error of fact**, and a contributor who is told only to repeat the word will think the desk has no ear.',
  '**Promise not to touch the deliberate case.** ⚠ _Send that and nothing will happen to it._ **A note that only forbids produces writers who flatten everything** — **and the variation that carries a correspondence history is worth a position.**',
  '⚠ And **put one figure in, and make it one that costs your own side something.** _The change was within the style book and the fact behind it had not been checked by anybody._ **A rule with a figure under it is followed; a rule with a principle under it is read** — **and a figure that embarrasses the writer of the rule is followed furthest.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note explaining an edit before it happens (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **This ______________ changes about ______________ and the thing changed is usually ______________.** **The note is to explain ______________, so that ______________.**   **______________ is free and the others are not.** **______________ takes no position on ______________.** **______________ tells a reader ______________.** **______________ tells them ______________.**   **The default is ______________.** ⚠ **______________ is cheaper than ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The free word named, and said to be the only one',
  'A position attached to each of the others',
  'The default with its reason, not the default alone',
  'The deliberate case protected by a promise',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their test question**, and the room says which of their own verbs fails it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: what you change and how often, the free word, the four positions, the default with its reason, the protected case, the test, a figure against your own side, and one request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the free word named, a position attached to each of the others, the default reasoned, and a figure that costs your own side something.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says _the ward claimed the pharmacy had instructed them_ and tries to put no stress on _claimed_.** ⚠ **It cannot be done and the room should hear the attempt.** **The word takes a stress wherever it is put** — **and then the same sentence with _said_, which has no shape at all, because that is what a free verb sounds like.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **_said_ would have carried the whole of the news.**'));
out.push(hw('Take **a page of your own** and mark **every reporting verb.** ⚠ **Count the ones that are not _said_ or _stated_**, and against each write the position it takes and whether you chose it. **In this class between a third and a half of them were not chosen.** **Then apply the test to each: would you defend it if the person quoted read it?** **Bring the count and the failures.** **10.2 predicts the edit a desk will make** — **and the premise of that cycle is the two-thirds agreement you have just measured.**'));

// ===================== 10.2 =====================
out.push(pb());
out.push(h2('10.2  The predictable edit, predicted'));
out.push(p('**Function:** saying which of two words a desk editor will change, and writing the one they will not   ·   **Grammar:** the word that carries no fact   ·   **Pronunciation:** an adjective of degree read aloud and heard to carry nothing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence of yours, read aloud, and the word you think somebody else will change.** ⚠ **Name the word before anybody else speaks.** Your teacher writes the ten predictions. **In most classes six or seven of the ten name an adjective or an adverb**, and the room is right about its own writing at a rate that surprises it.'));
out.push(board('The uptake was significant.', 'Which figure did you have, and what was it?'));
out.push(p('**b**  Which two will a desk change? **1** _The uptake was significant._  **2** _Nine of the eleven districts returned the form._  **3** _This is a key finding for the region._  **4** _The note was adopted on the first of March in all five branches._  **5** _Four of the twelve certificates are missing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the room decide a desk edit is predictable?   **A** desks follow a style book   **B** **because a desk changes what it can change, and the only changeable words are the ones that carry no fact** — so a sentence whose every word carries a fact has nothing in it to edit   **C** desks dislike long words'));
out.push(p('**b**  Listen again. **1** What did Mrs Rizk\'s own colleagues predict about her paragraph, and how many were right?   **2** What does Mrs Khoury say a desk does when a sentence has nothing changeable in it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  What a desk can change', [
  ['Ms Huda', 'Mrs Rizk — the paragraph and the four predictions.'],
  ['Mrs Rizk', '⚠ **I gave one paragraph to four colleagues and asked which word the regional office would change.** **Three of the four said _significant_.** **The regional office changed _significant_.**'],
  ['Mrs Tarabishi', 'Then everybody knew except the person who wrote it.'],
  ['Mrs Rizk', '⚠ **The person who wrote it knew too, and wrote it anyway**, which is the part worth saying out loud. **I had no figure for the uptake and _significant_ was the word that let me finish the sentence.**'],
  ['Mrs Khoury', '⚠ **Which is the whole mechanism and it is not about style.** **A desk changes what it _can_ change.** **A word that carries a fact cannot be improved and a word that carries none is the only thing on the page an editor can do anything with** — **so the edit lands there, every time, in any language.**'],
  ['Mr Shihabi', 'On our desk it is _significant_, _key_, _major_ and _robust_.'],
  ['Mrs Khoury', '⚠ **Add _very_, _clearly_, _substantially_ and _a number of_.** **Eight words, and between them they account for about half of what any desk changes.** **None of them carries a fact and all of them let a sentence finish.**'],
  ['Mr Tayara', 'And what does a desk do when there is nothing changeable?'],
  ['Mrs Khoury', '⚠ **It leaves the sentence alone, and it reads the next one differently.** **A paragraph that survives a first read untouched is read for sense rather than for faults** — **and that is a thing you cannot buy and can write.**'],
  ['Mrs Ajouz', 'A registration officer does not edit. He returns the file.'],
  ['Mrs Oueidat', '⚠ **Which is the same act with a longer delay.** **He cannot change your sentence so he sends it back for you to change** — **and the word he quotes will be the one that carries no fact, every time.** **Mrs Ajouz\'s was _satisfactory_ and it took seven weeks.**'],
  ['Dr Qabbani', 'In a paper the referee circles it instead.'],
  ['Mrs Khoury', '⚠ **Three readers, three instruments, one word.** **A desk changes it, an officer returns it, a referee circles it** — **and the writer who learns the list of eight has solved all three at once, which is the only economy of this kind in the book.**'],
  ['Mrs Rizk', 'And where there genuinely is no figure?'],
  ['Mrs Oueidat', '⚠ **Then 9.1 and 9.2 have already answered it.** _It is not possible to say what the uptake will be without the 2024 register._ **Degree one, with the document named** — **and the regional office cannot change that sentence either, because every word in it carries something.**'],
  ['Jad', 'Is there a test before I send anything?'],
  ['Mrs Khoury', '⚠ **Read the sentence and try to improve one word without looking anything up.** **If you can, a desk will.** **If every word you reach for needs a document to replace it, the sentence is finished** — **and it takes about four seconds a sentence, which is the cheapest check in this unit.**'],
  ['Mr Zahreddine', 'My opinions have no adjectives of that kind at all and nobody has ever changed a word of one.'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is that three of my four colleagues knew.** **It was not a secret and it was not a matter of taste.** **Everybody who read that paragraph could see the one word in it that was holding nothing up**, and I had written it to get to the end of a sentence I could not finish honestly.'],
]));
out.push(sp());
out.push(box('Language box – the eight words a desk reaches for', [
  '**The list, and it is short.** ⚠ _significant_ · _key_ · _major_ · _robust_ · _very_ · _clearly_ · _substantially_ · _a number of_. **Between them they account for about half of what any desk changes**, in any language, and none of them carries a fact.',
  '**Why the edit is predictable.** ⚠ **A desk changes what it _can_ change.** **A word carrying a fact cannot be improved; a word carrying none is the only thing on the page an editor can do anything with** — **so the edit lands there whether the editor has a style book or not.**',
  '**What a desk does with a sentence it cannot change.** ⚠ **It leaves it, and reads the next one differently.** **A paragraph that survives a first read untouched is then read for sense rather than for faults** — **which is a thing you cannot buy and can write.**',
  '**Three readers, three instruments, one word.** ⚠ **A sub-editor changes it; a registration officer returns the file quoting it; a referee circles it.** **The same eight words, and a writer who learns the list has solved all three readers at once.**',
  '**And where there genuinely is no figure, which is half the cases.** ⚠ **9.1 and 9.2 have answered it already.** _It is not possible to say what the uptake will be without the 2024 register._ **Degree one with the document named** — **and nobody can change that sentence either, because every word in it carries something.**',
  '**The four-second test, before you send anything.** ⚠ **Try to improve one word without looking anything up.** **If you can, a desk will.** **If every word you reach for would need a document to replace it, the sentence is finished.**',
  '**The honest part, which the class will skip.** ⚠ **These words are written because they let a sentence finish.** **Nobody writes _significant_ believing it carries a figure** — **it is what a writer reaches for when the figure is not to hand, and the repair is the document and not the vocabulary.**',
  '**Pronunciation.** 🔊 **Track 10.4** **Read _the uptake was significant_ aloud and then _nine of the eleven districts returned the form_.** ⚠ **The first has nowhere to put a stress and the second has three places.** **A sentence with nothing to stress is a sentence with nothing in it**, and the ear finds this faster than the eye.',
  '**Practise:** Predict the edit and write the version that survives it. **1** _significant_  **2** _key_  **3** _a number of_  **4** one where no figure exists — write the degree-one sentence  **5** one where the word a desk would reach for is a verb and not an adjective',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B names **the word a desk would change** and writes **the version it would not touch.** ⚠ **Two rows on each card have nothing changeable in them**, and B must say so rather than inventing an improvement. Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The uptake was significant in the three districts._', '_A number of certificates could not be located._'],
  ['_⚠ Nine of the eleven queries arose against a printed sheet._', '_⚠ The note was adopted on the first of March in all five branches._'],
  ['_This is a key finding for the region._', '_The improvement in attendance was substantial._'],
  ['_⚠ Four of the twelve certificates are missing._', '_⚠ Fifty-five of the fifty-six positions read 12.0 to 12.2._'],
  ['_The evidence for the mechanism is robust._', '_The record has clearly been maintained throughout._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the word, and the version that survives. ⚠ **Rows 2 and 4 on both cards have nothing changeable in them** — **every word in those four sentences carries a count, a date or a measurement** — **and the honest answer is that a desk would leave them.** **Rows 5 are the ones to spend time on**: _robust_ and _clearly_ are not adjectives of degree, and the repair for _clearly_ is almost always to delete it and lose nothing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a paragraph of your own** and give it to three people with one question: ⚠ **which word will be changed?** **Collect the three answers before you say anything.** **In this class two of the three have agreed with each other about four times out of five** — **and with the actual reader about two-thirds of the time.**'));
out.push(p('**b**  Write **the version the three would have nothing to say about.** ⚠ **Then apply the four-second test to every sentence in it.** **Where a word can be improved without looking anything up, replace it with the document that would** — **or with the degree-one sentence that names the document you have not got.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk gave one paragraph to four colleagues and asked which word the regional office would change: three of the four said significant, and the regional office changed significant. Mrs Tarabishi said then everybody knew except the person who wrote it, and the person who wrote it knew too and wrote it anyway, which is the part worth saying out loud: she had no figure for the uptake, and significant was the word that let her finish the sentence. Mrs Khoury said that is the whole mechanism and it is not about style — a desk changes what it can change, and a word that carries a fact cannot be improved while a word that carries none is the only thing on the page an editor can do anything with, so the edit lands there every time and in any language. Mr Shihabi said on their desk it is significant, key, major and robust, and Mrs Khoury added very, clearly, substantially and a number of: eight words, and between them they account for about half of what any desk changes. Mr Tayara asked what a desk does when there is nothing changeable, and it leaves the sentence alone and reads the next one differently, because a paragraph that survives a first read untouched is read for sense rather than for faults. Mrs Ajouz said a registration officer does not edit but returns the file, and Mrs Oueidat said that is the same act with a longer delay: he cannot change your sentence so he sends it back for you to change, and the word he quotes will be the one that carries no fact — hers was satisfactory and it took seven weeks. Dr Qabbani said in a paper the referee circles it instead, and three readers, three instruments, one word: a desk changes it, an officer returns it, a referee circles it, and the writer who learns the list of eight has solved all three at once. Mrs Rizk asked about the case where there genuinely is no figure, and Mrs Oueidat said 9.1 and 9.2 have already answered it: it is not possible to say what the uptake will be without the 2024 register, degree one with the document named, and the regional office cannot change that sentence either. Mr Attar asked whether there is a test before sending anything, and read the sentence and try to improve one word without looking anything up: if you can, a desk will. Mr Zahreddine said his opinions have no adjectives of that kind at all and nobody has ever changed a word of one. And Mrs Rizk said the thing she will take away is that three of her four colleagues knew: it was not a secret and it was not a matter of taste._'));
out.push(p('**Listener task:** write the three predictions you collected and the version you wrote.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of Mrs Rizk\'s paragraph, with her note to the office underneath. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _application 2026/041_ · _paragraph 4, before and after_ · **4 June**',
  '**Before.** _"Uptake in the three districts is expected to be significant, and a number of comparable projects have achieved substantial improvements. The need is clearly established and the evidence for the model is robust."_ **Thirty-eight words.**',
  '**After.** _"Nothing in the 2024 register excludes an uptake of ten per cent or of sixty: the register records attendance at fixed clinics and the three districts have none. Two comparable projects have been run by this office, both in districts with a fixed clinic already in them, and their attendance figures are at annexe A. The need rests on the 2024 register, which names the three districts and is cited at paragraph 2."_ **Seventy-one words.**',
  '**What changed, counted.** **Five words gone: _significant_, _a number of_, _substantial_, _clearly_, _robust_.** **Thirty-three words added, every one of them a count, a date, a document or a named absence.** ⚠ **The paragraph is almost twice as long and there is nothing in it for anybody to change.**',
  '**Why the first version existed, which is the part this note is for.** **I had no uptake figure and I have never had one.** ⚠ **_Significant_ was not a judgement about the uptake: it was the word that let me finish a sentence I could not finish honestly** — **and the same is true of the other four.**',
  '**What the regional office actually did with the first version.** **It changed _significant_ to _considerable_ and returned the paragraph with one question in the margin: _on what?_** **The question took eleven days to arrive and four months to answer, because answering it meant finding out that the register could not answer it.** **The eleven days were not the office being slow: the paragraph went out on a Tuesday and the margin note came back with the whole file on the second Friday after it.**',
  '**The three words the regional office did not change, which is the half of this nobody notices.** **_Expected_, _comparable_ and _established_ all survived the first version.** ⚠ **Each of them carries something a reader can check**: _expected_ invites a date, _comparable_ invites a list, and _established_ invites a document. **The office asked about none of the three**, because the sentence they stood in already held the weakest word on the page.',
  '**What I now do before anything leaves this office.** **Four seconds a sentence: try to improve one word without looking anything up.** **Where I can, the regional office can.** ⚠ **Where every word I reach for would need a document to replace it, the sentence is finished.**',
  '**And the test I run on other people\'s drafts, which costs nothing.** **I give the paragraph to three colleagues and ask which word will be changed.** **Two of the three agree with each other about four times in five**, and with the regional office about two-thirds of the time — **which means the edit was never a surprise and was never a matter of taste.**',
  '**H. Rizk** · _grants office_',
]));
out.push(item('1', 'How many words were taken out, and how many put in?'));
out.push(item('2', 'Why does she say the first version existed?'));
out.push(item('3', 'What did the regional office do with the first version, and how long did it cost?'));
out.push(writers([
  'A before-and-after that explains itself: **the two versions, each with its word count** → **what changed, counted, and what the additions are made of** → **why the first version existed, which is never about taste** → **what the reader actually did with it, with the delay as a figure** → **the test you now run before sending** → **and the test you run on other people\'s drafts.**',
  '⚠ **Print both versions and count both.** **The after is almost twice as long** — **and a writer who is told only to delete the eight words will produce a shorter paragraph with a hole in it.** **The deletion is half the move; the document that replaces it is the other half.**',
  '**Say what the additions are made of.** ⚠ _Thirty-three words added, every one of them a count, a date, a document or a named absence._ **Four kinds, and _a named absence_ is the one that surprises people** — **because it is 9.1\'s first degree doing duty as a repair.**',
  '**Admit why the word was there.** ⚠ _Significant was the word that let me finish a sentence I could not finish honestly._ **Nobody writes these words believing they carry a figure.** **A note that treats them as a style fault will be read as a style note and changed nothing.**',
  '⚠ And **give the delay as a figure.** _Eleven days to arrive and four months to answer._ **The four months are the whole argument** — **and they were not spent writing: they were spent finding out that the register could not answer the question the word had invited.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a before-and-after of your own (120 words or more).'));
out.push(p('**______________** · _______________ · _______________, before and after_ · **______________**   **Before.** _"______________"_ **______ words.**   **After.** _"______________"_ **______ words.**   **What changed, counted.** **______ words gone: ______________.** **______ words added, every one of them ______________.** ⚠ **______________.**   **Why the first version existed.** **______________.** ⚠ **______________ was the word that let me ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions printed, both counted',
  'The additions classified: counts, dates, documents, named absences',
  'The reason the first version existed, not treated as taste',
  'The delay given as a figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their two word counts and the list of what went out**, and the room says whether the after is longer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole before-and-after (260 words or more), to the shape in the writer\'s box: the two versions with counts, what changed, why the first existed, what the reader did and what it cost, and the two tests.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both versions counted, the additions classified, the reason for the first version given, and the delay as a figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a sentence with _significant_ in it and then the same sentence with a count in place of it.** ⚠ **The room says where the stress fell in each.** **The first has nowhere to put one and the second has three places** — **and a sentence with nothing to stress is a sentence with nothing in it, which the ear finds faster than the eye.** Then the sentence the cycle ends on, which is Mrs Rizk\'s: **three of my four colleagues knew.**'));
out.push(hw('Give **one paragraph of yours to three people** and ask the single question: **which word will be changed?** ⚠ **Collect the three answers before you say anything about the paragraph.** **Then write the version they would have nothing to say about, and count both.** **Bring the three predictions, both versions and both counts.** **10.3 nominalises and un-nominalises at will** — **and reverses the one rule from B2 that this level has to take apart.**'));

// ===================== 10.3 =====================
out.push(pb());
out.push(h2('10.3  Nominalise and un-nominalise at will'));
out.push(p('**Function:** nominalising and un-nominalising at will, and choosing on the reader   ·   **Grammar:** **the B2 signature, now reversible** · raising 2.1 and 2.6   ·   **Pronunciation:** a nominalised sentence read aloud without a sag'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a nominalised sentence of your own, and who the actor is.** ⚠ **If the actor is not in the sentence, say _nobody_.** Your teacher writes the ten actors on the board. **In most classes five or six of the ten are _nobody_** — **and about half of those five are right, which is the finding this cycle exists for.**'));
out.push(board('The condensation of the four paragraphs was carried out.', 'By whom, and does the reader need to know?'));
out.push(p('**b**  Which two nominalisations should stay as they are? **1** _The condensation of the four paragraphs was carried out by the committee._  **2** _The committee condensed the four paragraphs._  **3** _The inspection of the frame was completed on 3 May._  **4** _The withdrawal of the claim does not affect the other findings._  **5** _Non-attendance on three consecutive days triggers a letter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about the B2 rule?   **A** it was wrong   **B** **it was a rule for writers who had only one direction** — and at C1 the move goes both ways and is chosen on the reader   **C** it applies only to reports'));
out.push(p('**b**  Listen again. **1** What did Mr Tayara find when he un-nominalised a letter to a parent?   **2** What does Mrs Oueidat say a nominalisation is for in a rule?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  Both directions', [
  ['Ms Huda', 'Mr Tayara — the letter you rewrote twice.'],
  ['Mr Tayara', '⚠ **I had written _non-attendance on three consecutive days has been recorded_, and I took the B2 advice and un-nominalised it.** _Your son was absent on three consecutive days and nobody telephoned us._ **The second version is better English and I did not send it.**'],
  ['Mrs Tarabishi', 'Why not?'],
  ['Mr Tayara', '⚠ **Because the first version is about a rule and the second is about a family.** **The nominalisation had been doing something and I had not known what** — **it was keeping the letter about the attendance register, which is where a first letter has to stay.**'],
  ['Mrs Khoury', '⚠ **Which is the thing B2 could not teach, because at B2 the fault runs one way.** **A writer at that level nominalises to sound official and the advice is correct for them.** **At C1 you can do both and the question changes: not _which is better English_ but _which actor does this reader need_.**'],
  ['Mrs Oueidat', '⚠ **And in a rule the answer is none.** _Non-attendance on three consecutive days triggers a letter._ **There is no actor because the rule applies to everybody** — **and the moment you supply one, the rule becomes a decision somebody took about somebody.**'],
  ['Dr Qabbani', 'A protocol is the same. _Administration is to be discontinued._'],
  ['Mrs Khoury', '⚠ **And that one carries a second job, which the class should notice.** **It does not say who discontinues it** — **which in a protocol is not evasion: the registrar, the consultant and the nurse all read the same sentence and each of them is the actor.**'],
  ['Mr Shihabi', 'A desk kills them on sight.'],
  ['Mrs Khoury', '⚠ **A desk kills them in copy and keeps them in a rule.** **_The withdrawal of the claim does not affect the other findings_ would run in a court report unchanged**, and _the withdrawal of the claim was announced_ would be rewritten in four seconds. **The difference is whether the sentence is about an event or about a consequence.**'],
  ['Mrs Ajouz', 'Mine are in the forms and I did not write them.'],
  ['Mrs Oueidat', '⚠ **And the form is usually right.** **A field headed _Reason for discontinuation_ wants a reason and not a person**, because a person in that box becomes a party. **The fault is the sentence you write underneath the field, in your own voice, where the actor matters and you have copied the form\'s register.**'],
  ['Mr Zahreddine', 'My findings un-nominalise and my boundaries do not.'],
  ['Mrs Khoury', '⚠ **Which is exactly the rule and nobody has ever written it down.** _Fifty-five positions read 12.0 to 12.2_ **is an event and has an actor who matters.** _The comparison establishes a difference and not a date_ **is a consequence and has no actor at all.** **Findings active, boundaries nominal.**'],
  ['Mrs Rizk', 'How do I decide in the ones that are neither?'],
  ['Mr Tayara', '⚠ **Ask who is helped by the actor being there.** **If the reader needs to know who to telephone, name them.** **If the reader needs to know what the rule is, do not** — **and in this class that question has decided it every time, in about three seconds.**'],
  ['Jad', 'And a forum answer?'],
  ['Mrs Khoury', '⚠ **Active throughout, because every sentence in it is an instruction to one person reading it.** **A nominalised instruction is the commonest reason a technical answer is asked to explain itself** — _reinitialisation of the device is required_ **against** _switch it off and on again_.'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is that I nearly sent the better sentence.** **It was clearer, it was shorter, and it made an attendance letter into a conversation about a family** — **and the version I had written without thinking was the right one for the wrong reason, which is not the same as being right.**'],
]));
out.push(sp());
out.push(box('Language box – both directions, chosen on the reader', [
  '**The B2 rule and what was true about it.** ⚠ **At B2 the fault runs one way: a writer nominalises to sound official, and the advice to un-nominalise is correct for them.** **At C1 the move goes both ways** — **and the question is not _which is better English_ but _which actor does this reader need_.**',
  '**Where a nominalisation is right: a rule.** ⚠ _Non-attendance on three consecutive days triggers a letter._ **There is no actor because the rule applies to everybody**, and supplying one turns the rule into a decision somebody took about somebody.',
  '**Where it is right: a protocol with several readers.** ⚠ _Administration is to be discontinued._ **The registrar, the consultant and the nurse read the same sentence and each of them is the actor** — **which is not evasion but the only form of words that serves three readers at once.**',
  '**Where it is right: a consequence rather than an event.** ⚠ _The withdrawal of the claim does not affect the other findings._ **This would run in a court report unchanged.** _The withdrawal of the claim was announced_ **would be rewritten in four seconds**, because an event has an actor who matters.',
  '**The rule nobody writes down.** ⚠ **Findings active, boundaries nominal.** _Fifty-five positions read 12.0 to 12.2_ — **an event, with an actor.** _The comparison establishes a difference and not a date_ — **a consequence, with none.** **Mr Zahreddine has written this way for twenty years without a name for it.**',
  '**The question that decides the rest, in three seconds.** ⚠ _Who is helped by the actor being there?_ **If the reader needs to know whom to telephone, name them.** **If the reader needs to know what the rule is, do not.**',
  '**And the one place where the answer is always active.** ⚠ **An instruction to one person reading it.** _Reinitialisation of the device is required_ **against** _switch it off and on again_. **A nominalised instruction is the commonest reason a technical answer is asked to explain itself.**',
  '**Pronunciation.** 🔊 **Track 10.6** **Read a nominalised sentence aloud and listen for the sag in the middle.** ⚠ _The condensation of the four paragraphs was carried out._ **The stress falls on the first noun and then there is nothing until the end.** **A rule can carry that sag and a finding cannot** — **and if you are reading a finding and hear it, un-nominalise.**',
  '**Practise:** Choose the direction and say who is helped. **1** a rule  **2** a protocol with three readers  **3** a consequence  **4** an event with an actor who matters  **5** an instruction to one reader',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **which direction to take it** and **who is helped by the actor being there or not.** ⚠ **Two rows on each card should be left exactly as they are.** **B must say so and name the reader who needs no actor.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The condensation of the four paragraphs was carried out._', '_Reinitialisation of the device is required._'],
  ['_⚠ Non-attendance on three consecutive days triggers a letter._', '_⚠ Administration is to be discontinued at forty-eight hours._'],
  ['_The inspection of the frame was completed on 3 May._', '_The submission of the file took place in March._'],
  ['_⚠ The withdrawal of the claim does not affect the other findings._', '_⚠ Discontinuation does not require a second signature._'],
  ['_The committee condensed the four paragraphs._', '_The registrar discontinued the antibiotics at forty-eight hours._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the direction, and who is helped. ⚠ **Rows 2 and 4 on both cards stay as they are** — **two are rules and two are consequences, and in the rules the actor is everybody while in the consequences there is no actor at all.** **Rows 3 are the clear un-nominalisations**: an inspection and a submission are events with dates, and _took place_ is the word that tells you so. **Rows 5 are already active and should be left.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your sentence from Stage 1** and write it **in both directions.** ⚠ **Then write, in one line, who is helped by each.** **Not which is better English: who is helped.** **In this class about half the room has kept the nominalisation after doing this**, and almost nobody expected to.'));
out.push(p('**b**  Swap. Your partner reads **both of your versions and your one line** and says **which they would send.** ⚠ **They disagree with the writer about a third of the time**, and the disagreement is always about who the reader is and never about the grammar — which is the whole point of the cycle.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara had written non-attendance on three consecutive days has been recorded, and he took the B2 advice and un-nominalised it: your son was absent on three consecutive days and nobody telephoned us. The second version is better English and he did not send it. Mrs Tarabishi asked why not, and because the first version is about a rule and the second is about a family: the nominalisation had been doing something and he had not known what, which was keeping the letter about the attendance register. Mrs Khoury said that is the thing B2 could not teach, because at B2 the fault runs one way — a writer at that level nominalises to sound official and the advice is correct for them, and at C1 you can do both and the question changes from which is better English to which actor does this reader need. Mrs Oueidat said in a rule the answer is none: non-attendance on three consecutive days triggers a letter has no actor because the rule applies to everybody, and the moment you supply one the rule becomes a decision somebody took about somebody. Dr Qabbani said a protocol is the same, and Mrs Khoury said that one carries a second job: it does not say who discontinues it, which in a protocol is not evasion, because the registrar, the consultant and the nurse all read the same sentence and each of them is the actor. Mr Shihabi said a desk kills them on sight, and a desk kills them in copy and keeps them in a rule: the difference is whether the sentence is about an event or about a consequence. Mrs Ajouz said hers are in the forms and she did not write them, and the form is usually right, because a field headed Reason for discontinuation wants a reason and not a person — and the fault is the sentence written underneath the field in your own voice. Mr Zahreddine said his findings un-nominalise and his boundaries do not, and Mrs Khoury said that is exactly the rule and nobody has ever written it down: findings active, boundaries nominal. Mrs Rizk asked how to decide in the ones that are neither, and ask who is helped by the actor being there. Mr Attar asked about a forum answer, and active throughout, because every sentence in it is an instruction to one person reading it. And Mr Tayara said the thing he will take away is that he nearly sent the better sentence: it was clearer and shorter and it made an attendance letter into a conversation about a family, and the version he had written without thinking was the right one for the wrong reason._'));
out.push(p('**Listener task:** write both of your versions and the one line about who is helped.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first letter Mr Tayara now sends, with the note he keeps beside the template. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _to the parent or guardian_ · _attendance: first letter_ · **6 June**',
  '**Non-attendance on three consecutive days triggers this letter.** **It has been triggered in respect of the dates below and it is sent in every such case.**',
  '**The dates recorded.** **Monday 2, Tuesday 3 and Wednesday 4 June.** **No telephone call, note or message was received by the office on any of the three days.** **If one was made, this letter is wrong and the office would be glad to be told so.**',
  '**What this letter is and is not.** **It is a record and a request.** ⚠ **It is not a finding about anybody**, and nothing in it says that the absences were unexplained, because the school does not yet know whether they were.',
  '**What the office asks.** **A telephone call to the office before Friday, or a note with the pupil.** **Either closes the matter and no second letter is sent.**',
  '**What the office does not ask for.** **A reason.** ⚠ **There is no field for one in this letter and none is wanted at this stage**, because a reason given before anybody has telephoned becomes a written explanation that the school then has to keep on a file. **A telephone call closes the matter and leaves nothing on the file at all, which is what most families would prefer.**',
  '**What happens if nothing is received, stated here so that nobody has to ask.** **A second letter goes out on the following Monday and names the form tutor as the person to speak to.** ⚠ **The second letter is where a person is named, and that is deliberate**: a first letter is about the register and a second one is about a conversation.',
  '**One sentence about the wording of this letter, because parents have asked.** **The first line of it has no actor in it and some readers find that cold.** **It is written that way because the rule applies to every pupil in the school and to every family**, and a first letter that named a decision-maker would be saying that somebody decided to send it about this child.',
  '**One further thing about the dates, which this office has learnt to put in.** **The three days are given as weekdays and dates together.** ⚠ **A parent reading _2, 3 and 4 June_ has to find a calendar**, and about a third of the replies this office used to receive began by disputing the days rather than the absences.',
  '**Signed.** **M. Tayara, headmaster.** **A reply may be addressed to the office and need not be addressed to me.**',
  '**An earlier version of this letter said that the absences were unexplained and that the parent had failed to notify the school.** ⚠ **Both statements were true in most cases and neither belonged in a first letter**, and between them they produced about nine telephone calls a term that began at a disadvantage.** **The figure is this office\'s own and was counted over two terms.',
]));
out.push(item('1', 'Why has the first line of the letter no actor in it?'));
out.push(item('2', 'Where is a person named, and why there?'));
out.push(item('3', 'What did the earlier version say, and what did it cost?'));
out.push(writers([
  'A first letter that stays about the rule: **the rule, nominalised, and the fact that it is sent in every such case** → **the dates, and what was not received** → **what the letter is and is not** → **what is asked, and what closes it** → **what happens next, with the person named only there** → **one sentence explaining the wording to a reader who found it cold** → **and what the earlier version said and cost.**',
  '⚠ **Nominalise the first line and say that the rule is general.** _Non-attendance on three consecutive days triggers this letter. It is sent in every such case._ **The second sentence is what makes the first one bearable** — **and without it the nominalisation reads as a school hiding behind a form.**',
  '**Say what the letter is not.** ⚠ _It is not a finding about anybody._ **An attendance letter that does not say this is read as an accusation**, and the reply then answers an accusation nobody made. **Ten words, and they change the telephone call that follows.**',
  '**Name a person only where a person is wanted.** ⚠ _The second letter names the form tutor as the person to speak to._ **A first letter is about the register and a second is about a conversation** — **and the escalation is in the naming and not in the tone.**',
  '⚠ And **explain the cold line once, in the letter itself.** _It is written that way because the rule applies to every pupil and to every family._ **A reader who has been told why a sentence has no actor stops reading the absence as an evasion** — **which is the only defence a nominalisation has, and it costs one sentence.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter that stays about the rule (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ triggers this ______________.** **It has been triggered in respect of ______________ and it is sent in every such case.**   **The ______________ recorded.** **______________.** **No ______________ was received by ______________.** **If ______________, this ______________ is wrong and ______________.**   **What this ______________ is and is not.** **It is ______________.** ⚠ **It is not ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The rule nominalised, and said to be general',
  'What the document is not, in one sentence',
  'A person named only where a person is wanted',
  'The cold line explained once, in the document itself',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their first line and their _is not_ sentence**, and the room says whether a reader would take the first as an accusation.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the rule, the dates, what the letter is not, what is asked, what happens next with the naming, the explanation of the wording, and what the earlier version cost.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the rule nominalised and declared general, the _is not_ sentence present, the naming placed where a person is wanted, and the wording explained once.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a nominalised sentence aloud and the room listens for the sag in the middle.** ⚠ _The condensation of the four paragraphs was carried out._ **The stress falls on the first noun and then there is nothing until the end.** **A rule can carry that sag and a finding cannot** — **and a reader who hears it in a finding should un-nominalise on the spot.** Then the sentence the cycle ends on, which is Mr Tayara\'s: **I nearly sent the better sentence.**'));
out.push(hw('Take **a document of yours with four or more nominalisations in it** and write each one **in both directions.** ⚠ **Beside each pair, one line: who is helped by the actor being there?** **Then decide, and count how many you kept.** **In this class it has been about half, every time.** **Bring the pairs, the one-liners and the count.** **10.4 writes the sentence that cannot be shortened without losing a fact** — **and the eighty words you brought to this unit are the material for it.**'));

//__TAIL__
module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
