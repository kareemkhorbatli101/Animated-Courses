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

// ===================== 10.4 =====================
out.push(pb());
out.push(h2('10.4  The sentence that cannot be shortened'));
out.push(p('**Function:** writing a sentence that cannot be shortened without losing a fact, and proving it   ·   **Grammar:** the strike test, word by word   ·   **Pronunciation:** a sentence read aloud with every word given its own weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the eighty words you brought, and the number of words in the longest sentence in them.** ⚠ **Read that one sentence aloud.** Your teacher writes the ten lengths on the board. **In most classes the longest sentence is between thirty and fifty words**, and by the end of the cycle about half of those have come down by a third with nothing lost.'));
out.push(board('The results were, in the main, broadly consistent.', 'With what, measured how, and by how much?'));
out.push(p('**b**  Which two cannot be shortened without losing a fact? **1** _The results were, in the main, broadly consistent with expectations._  **2** _Eight of the ten with no second sample presented between eight at night and eight in the morning._  **3** _It should be noted that there were a number of cases of this kind._  **4** _The 2019 circular, which the inspectorate works from, gives a limit and no tolerance._  **5** _The situation was reviewed and appropriate action was taken._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the strike test is?   **A** a way of writing shorter sentences   **B** **striking each word in turn and naming the fact that goes with it** — so that a sentence is proved un-cuttable rather than believed to be   **C** a style exercise'));
out.push(p('**b**  Listen again. **1** What happened to Dr Qabbani\'s forty-one-word sentence under the strike test?   **2** What does Mrs Khoury say about the words that can be struck with nothing lost?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  Strike it and name what goes', [
  ['Ms Huda', 'Dr Qabbani — the forty-one words.'],
  ['Dr Qabbani', '⚠ **_It should be noted that, in a not insignificant number of the cases reviewed, a second sample was in fact available and the first was, for various reasons, not._** **Forty-one words.** **I struck them one at a time and named what went with each.**'],
  ['Mrs Tarabishi', 'And how many could go?'],
  ['Dr Qabbani', '⚠ **Twenty-three, and nothing went with any of them.** _It should be noted that_ — **four words and no fact.** _in a not insignificant number of_ — **seven, and it replaces a count I had.** _in fact_, _for various reasons_ — **five more.** **What was left was eighteen words and a figure I had never written down.**'],
  ['Mrs Khoury', '⚠ **Which is the whole test and it is mechanical.** **Strike a word and ask what fact has gone with it.** **If the answer is _nothing_, the word was not in the sentence** — **it was holding the sentence up while the writer decided what the sentence was about.**'],
  ['Mrs Oueidat', 'And the eighteen words?'],
  ['Dr Qabbani', '⚠ _In eleven of the thirty-one, the second sample was available and the first was not._ **Eighteen words, and every one of them can be struck only at a cost.** **Strike _eleven_ and you lose the count. Strike _thirty-one_ and you lose the denominator. Strike _second_ and the sentence means the opposite.**'],
  ['Mr Shihabi', 'A desk gets to eighteen in about four seconds and calls it a day\'s work.'],
  ['Mrs Khoury', '⚠ **A desk gets to about twenty-four and stops**, because it does not know what the figure is. **The last six words are the writer\'s** — **the count and the denominator — and a desk cannot supply them, which is why half of what a desk leaves in is still padding.**'],
  ['Mr Tayara', 'Is the test not simply deleting adjectives?'],
  ['Mrs Khoury', '⚠ **No, and the difference matters.** **_Broadly_ goes because nothing goes with it.** **_Three consecutive_ stays because _consecutive_ is the whole of the rule** — **and a writer who deletes adjectives by class will take _consecutive_ out of an attendance letter and not notice for a term.**'],
  ['Mrs Ajouz', 'What about the ones I cannot tell about?'],
  ['Dr Qabbani', '⚠ **Strike it and read the sentence to somebody who does not know the file.** **If they ask a question they would not have asked before, the word was carrying something.** **If they do not, it was not** — **and in this class that second reader has decided about a fifth of the cases.**'],
  ['Mrs Rizk', 'Mine get longer when I do this.'],
  ['Mrs Khoury', '⚠ **They should.** **The test removes words that carry nothing and the gaps it leaves are where the facts were missing** — **which is 10.2 from the other end.** **A paragraph that comes out longer has had facts put into it; a paragraph that comes out shorter had them already.**'],
  ['Jad', 'How long does it take on a page?'],
  ['Dr Qabbani', '⚠ **About twenty minutes a page the first time and four the fifth time.** **It stops being an exercise and becomes the way you write** — **and the sentence I now write first time is the sentence the test used to produce.**'],
  ['Mr Zahreddine', 'Mine are short because a tribunal reads them aloud.'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is the figure I had never written down.** **_A not insignificant number_ was standing exactly where _eleven of the thirty-one_ goes**, and I had the eleven and the thirty-one in a table two pages later. **The seven words were not a style: they were a figure I had not troubled to carry up the page.**'],
]));
out.push(sp());
out.push(box('Language box – the strike test', [
  '**The test, and it is mechanical.** ⚠ **Strike one word and ask what fact has gone with it.** **If the answer is _nothing_, the word was not in the sentence** — **it was holding the sentence up while the writer decided what the sentence was about.**',
  '**What it is not.** ⚠ **It is not deleting adjectives by class.** **_Broadly_ goes because nothing goes with it; _consecutive_ stays because _consecutive_ is the whole of the rule** — **and a writer who deletes by class will take it out of an attendance letter and not notice for a term.**',
  '**The seven-word shapes that almost always go.** ⚠ _it should be noted that_ · _in a not insignificant number of_ · _for various reasons_ · _in fact_ · _in the main_ · _appropriate action was taken_ · _the situation was reviewed_. **None of them carries a fact and most of them stand where a figure goes.**',
  '**Where you cannot tell, use the second reader.** ⚠ **Strike it and read the sentence to somebody who does not know the file.** **If they ask a question they would not have asked before, the word was carrying something.** **In this class that reader has decided about a fifth of the cases.**',
  '**Why the paragraph sometimes comes out longer.** ⚠ **The gaps the test leaves are where the facts were missing.** **A paragraph that comes out longer has had facts put into it; one that comes out shorter had them already** — **and _a not insignificant number_ was standing exactly where _eleven of the thirty-one_ goes.**',
  '**What a desk can and cannot do.** ⚠ **A desk gets a forty-one-word sentence to about twenty-four and stops, because it does not know what the figure is.** **The last six words are yours** — **the count and the denominator** — **and that is why half of what a desk leaves in is still padding.**',
  '**And the arithmetic of learning it.** ⚠ **About twenty minutes a page the first time and four the fifth time.** **Then it stops being an exercise**, and the sentence you write first time is the sentence the test used to produce.',
  '**Pronunciation.** 🔊 **Track 10.8** **Read an un-cuttable sentence aloud and give every word its own weight.** ⚠ _In eleven of the thirty-one, the second sample was available and the first was not._ **It can be done, slowly, and nothing in it sags.** **Then try it with the forty-one-word version** — **the voice runs for four words and then coasts, and the coasting is audible.**',
  '**Practise:** Strike and name what goes. **1** _it should be noted that_  **2** _a not insignificant number of_  **3** a word that looks like padding and is the rule  **4** one where the gap left needs a figure you have  **5** one where the gap left needs a figure you have not got — and say what you write instead',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B strikes words aloud, **naming the fact that goes with each**, and gives the count of words removed. ⚠ **Two rows on each card cannot be shortened at all.** **B must say so after trying three strikes, and not before.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_It should be noted that, in a not insignificant number of cases, a second sample was in fact available._', '_The situation was reviewed and appropriate action was taken in due course._'],
  ['_⚠ In eleven of the thirty-one, the second sample was available and the first was not._', '_⚠ Non-attendance on three consecutive days triggers a letter._'],
  ['_The results were, in the main, broadly consistent with expectations._', '_A number of certificates could not, for various reasons, be located._'],
  ['_⚠ Fifty-five of the fifty-six positions read between 12.0 and 12.2 against a specified M16._', '_⚠ The 2019 circular, which the inspectorate works from, gives a limit and no tolerance._'],
  ['_It is clearly the case that uptake will be a significant factor going forward._', '_The document was, to all intents and purposes, complete at the time of submission._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the words struck and the facts lost. ⚠ **Rows 2 and 4 on both cards cannot be shortened** — **and on row 2 of Card B the word to try is _consecutive_, which looks like padding and is the entire rule.** **Rows 5 are the ones to spend time on**: both can be reduced to nothing at all, because neither contains a fact, and the honest repair is to find out what the sentence was for before rewriting it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your longest sentence** and strike it word by word, ⚠ **writing beside each strike the fact that goes with it, or _nothing_.** **Count the _nothings_.** **In this class it has been between a quarter and a half of the sentence**, and the striking takes about four minutes for a forty-word sentence.'));
out.push(p('**b**  Swap. Your partner reads **the struck-down version** and says **which gap needs a figure.** ⚠ **Then say whether you have it.** **Where you have it, the sentence is finished in one more pass.** **Where you have not, the repair is 9.1\'s first degree** — _it is not possible to say_, **with the document named.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani\'s sentence ran to forty-one words: it should be noted that, in a not insignificant number of the cases reviewed, a second sample was in fact available and the first was, for various reasons, not. He struck them one at a time and named what went with each. Mrs Tarabishi asked how many could go, and twenty-three, and nothing went with any of them: it should be noted that is four words and no fact, in a not insignificant number of is seven and replaces a count he had, and in fact and for various reasons are five more. What was left was eighteen words and a figure he had never written down. Mrs Khoury said that is the whole test and it is mechanical — strike a word and ask what fact has gone with it, and if the answer is nothing the word was not in the sentence but was holding it up while the writer decided what the sentence was about. Mrs Oueidat asked about the eighteen words, and in eleven of the thirty-one the second sample was available and the first was not: every word of that can be struck only at a cost, because striking eleven loses the count, striking thirty-one loses the denominator, and striking second makes the sentence mean the opposite. Mr Shihabi said a desk gets to eighteen in four seconds and calls it a day\'s work, and Mrs Khoury said a desk gets to about twenty-four and stops, because it does not know what the figure is: the last six words are the writer\'s, and that is why half of what a desk leaves in is still padding. Mr Tayara asked whether the test is not simply deleting adjectives, and no, and the difference matters: broadly goes because nothing goes with it, and three consecutive stays because consecutive is the whole of the rule. Mrs Ajouz asked about the ones she cannot tell about, and strike it and read the sentence to somebody who does not know the file. Mrs Rizk said hers get longer when she does this, and they should, because the gaps the test leaves are where the facts were missing. Mr Attar asked how long it takes on a page, and about twenty minutes the first time and four the fifth time. Mr Zahreddine said his are short because a tribunal reads them aloud. And Dr Qabbani said the thing he will take away is the figure he had never written down: a not insignificant number was standing exactly where eleven of the thirty-one goes, and he had both numbers in a table two pages later._'));
out.push(p('**Listener task:** write your count of _nothings_, and the gap that needs a figure.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Dr Qabbani now opens the paper with, and his note on the strike test underneath. Answer the questions.'));
out.push(model([
  '**H. QABBANI** · _culture-negative admissions, 2022 to 2024_ · _paragraph 1, and a note on how it was written_ · **8 June**',
  '**Forty-one admissions were culture-negative over three years.** **Thirty-one had a second sample and ten had none.** **In eleven of the thirty-one, the second sample was available and the first was not, and in seven of those eleven a serological diagnosis was reached.** **Eight of the ten with no second sample presented between eight in the evening and eight in the morning.**',
  '**Fifty-four words, four sentences, and every word in them can be struck only at a cost.** ⚠ **Strike _eleven_ and the count goes; strike _thirty-one_ and the denominator goes; strike _second_ and the third sentence means the opposite of what it says.**',
  '**What the first version of this paragraph looked like.** _"It should be noted that, in a not insignificant number of the cases reviewed, a second sample was in fact available and the first was, for various reasons, not."_ **Forty-one words for what is now one clause of eighteen.**',
  '**What the strike test removed, counted.** **Twenty-three words, and no fact went with any of them.** **_It should be noted that_: four words, nothing.** **_In a not insignificant number of_: seven words, and it was standing where a count goes.** **_In fact_ and _for various reasons_: five more, nothing.**',
  '**What it added, which is the half nobody expects.** **The eleven and the thirty-one were in a table on page four of the first draft.** ⚠ **The seven words were not a style: they were a figure I had not troubled to carry up the page**, and the strike test is in that sense a method for finding one\'s own tables.',
  '**The one word in this paragraph that looks like padding and is not.** **_Second._** **A reader who strikes it gets _the sample was available and the first was not_, which is not a sentence about anything** — **and the test catches it in four seconds, which is why the test is done word by word and not by class of word.**',
  '**What I do where the gap wants a figure I have not got.** **I write the first degree and name the document.** _It is not possible to say whether the eight presented later because the night registrar had less time or because night admissions are sicker; the admissions sheet would distinguish them over about eighteen months._ ⚠ **Twenty-nine words, and none of them strikeable either.**',
  '**One sentence in this paragraph was not in the first draft at all.** **The eight of the ten presenting at night were in a table and in no sentence anywhere** — ⚠ **and I found them looking for something to put in the gap the strike test had left.** **That is the second thing the test does and nobody mentions it.**',
  '**And the arithmetic of doing it.** **Twenty minutes for the first page and about four for the fifth.** **The paper is nine hundred words shorter than the version that went to the committee in March**, and it has two figures in it that the March version did not.',
]));
out.push(item('1', 'How many words did the strike test remove, and what went with them?'));
out.push(item('2', 'Which word looks like padding and is not, and why?'));
out.push(item('3', 'What does he do where the gap wants a figure he has not got?'));
out.push(writers([
  'A paragraph that proves itself: **the facts, in short sentences** → **the word count and the claim that nothing is strikeable** → **the first version, printed** → **what the test removed, counted, with the fact against each** → **what it added, and where that came from** → **the one word that looks like padding and is not** → **what you do where the gap wants a figure you have not got** → **and the arithmetic of doing it.**',
  '⚠ **Print the first version.** _It should be noted that, in a not insignificant number of the cases reviewed…_ **A before-and-after with only the after in it is a claim about the writer** — **and the forty-one words beside the eighteen are the only form of this argument anybody believes.**',
  '**Name the fact against every strike, including the _nothings_.** ⚠ _It should be noted that: four words, nothing._ **The _nothings_ are the evidence.** **A list that shows only the words removed looks like a style preference; a list that shows nothing went with them is arithmetic.**',
  '**Say where the added figures came from.** ⚠ _The eleven and the thirty-one were in a table on page four of the first draft._ **This is the finding of the cycle and it is not about brevity at all** — **the padding was standing where a figure went, and the figure was in the writer\'s own document.**',
  '⚠ And **protect the one word that looks like padding.** _Second._ **Strike it and the sentence is about nothing.** **A writer who deletes by class loses one word like this in every page** — **and it is always the word that carried the distinction the paragraph was for.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a paragraph that proves itself (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **______________.** **______________.** **______________.**   **______ words, ______ sentences, and every word in them can be struck only at a cost.** ⚠ **Strike ______________ and ______________ goes; strike ______________ and ______________ goes.**   **What the first version looked like.** _"______________"_ **______ words for what is now ______________.**   **What the strike test removed, counted.** **______ words, and no fact went with any of them.** **______________: ______ words, nothing.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions printed, both counted',
  'A fact named against every strike, including the _nothings_',
  'Where the added figures came from',
  'The one word that looks like padding and is not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their count of removals and the figures the gaps needed**, and the room says whose paragraph got longer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole paragraph with its note (260 words or more), to the shape in the writer\'s box: the facts, the counts, the first version, what went and what came, the protected word, the degree-one sentence, and the arithmetic.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both versions printed and counted, a fact named against every strike, the source of the added figures, and the protected word identified.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an un-cuttable sentence aloud, giving every word its own weight, and then reads the forty-one-word version.** ⚠ **The room says where the voice started to coast.** **It is after about four words, every time** — **and the coasting is the spoken form of a word that carries nothing, which the ear finds before the pen does.** Then the sentence the cycle ends on, which is Dr Qabbani\'s: **it was a figure I had not troubled to carry up the page.**'));
out.push(hw('Take **the longest page you have written this month** and run the strike test on **every sentence in it.** ⚠ **Write the fact beside each strike, or _nothing_**, and count the _nothings_. **Then count the gaps that need a figure, and how many of those figures are somewhere else in your own document.** **In this class it has been most of them.** **Bring the two counts.** **10.5 reads your own sentence as a translator** — **and finds the part that will not go into another language, before somebody needs it to.**'));

// ===================== 10.5 =====================
out.push(pb());
out.push(h2('10.5  Read your own sentence as a translator'));
out.push(p('**Function:** reading your own sentence as a translator and finding the part that will not go   ·   **Grammar:** the untranslatable, located before it is needed   ·   **Pronunciation:** an idiom heard as an idiom'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence of yours, and the part of it you would not know how to put into Arabic.** ⚠ **The part, not the whole sentence.** Your teacher writes the ten fragments on the board. **In most classes seven or eight of the ten are an idiom or a word borrowed from an institution** — **and two or three of them are a hedge, which is the hardest group and the one 11.3 is about.**'));
out.push(board('The file was, to all intents and purposes, complete.', 'Which words go, and what replaces the rest?'));
out.push(p('**b**  Which two will not go into another language as they stand? **1** _The file was, to all intents and purposes, complete._  **2** _The arrangements have been satisfactory._  **3** _Nine of the eleven queries arose against a printed sheet._  **4** _The limit is eight degrees._  **5** _The register names the three districts._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the room decide a writer should find the untranslatable part themselves?   **A** to help the translator   **B** **because a translator who meets it will make a decision about your document and will not be able to ask you** — and the decision is usually to add certainty   **C** because translation is expensive'));
out.push(p('**b**  Listen again. **1** What did Mrs Oueidat do with _to all intents and purposes_, and what did the court hear?   **2** What does Mrs Khoury say an institutional word costs a translator?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  The part that will not go', [
  ['Ms Huda', 'Mrs Oueidat — the phrase you could not carry.'],
  ['Mrs Oueidat', '⚠ **_To all intents and purposes._** **An expert had written that the file was, to all intents and purposes, complete.** **There is no form of words in Arabic that carries exactly that** — **it means _complete enough for the present purpose and not complete_, and it means both at once.**'],
  ['Mrs Tarabishi', 'So what did you do?'],
  ['Mrs Oueidat', '⚠ **I rendered it as _complete for the purposes of this report_ and the court heard a flat statement that the file was complete.** **Which the expert had not said and would not have said.** **The hedge was in five English words and five English words is where it lived.**'],
  ['Mrs Khoury', '⚠ **And this is the thing a writer can do about it and a translator cannot.** **You find it before anybody needs it.** **A translator who meets it has to decide, in about four seconds, between losing the hedge and adding a sentence that is not yours** — **and in nine cases out of ten they lose the hedge, because adding is worse.**'],
  ['Dr Qabbani', 'Is it always idiom?'],
  ['Mrs Oueidat', '⚠ **Three groups, and idiom is the easiest.** **Idiom goes with a rewrite.** **An institutional word goes with a gloss** — _registrar_, _form tutor_, _grants panel_ **have no equivalent and need five words of explanation each.** **And a hedge sometimes cannot go at all**, which is 11.3.'],
  ['Mr Tayara', '_Form tutor_ has no equivalent?'],
  ['Mrs Oueidat', '⚠ **None, and I have been asked about it four times.** **A translator will choose a word from their own system and the reader will then picture a person with different powers** — **and nothing in the document tells them they have done it.** **Five words from you prevents it: _the teacher responsible for the pupil\'s attendance record_.**'],
  ['Mr Shihabi', 'A wire story is translated by somebody I will never meet.'],
  ['Mrs Khoury', '⚠ **Four or five times, usually, within a day.** **Which is why the eighty words in 10.6 are written as though every one of them will be rendered by a stranger** — **and the one thing you can control is whether there is anything in them that requires a decision.**'],
  ['Mrs Ajouz', 'And _satisfactory_?'],
  ['Mrs Oueidat', '⚠ **_Satisfactory_ is the worst word in this book and it is not an idiom.** **It has an exact equivalent in every language and it means something different in each institution** — **so the translation is perfect and the sense is gone.** **That is the hardest group to see, because nothing in the sentence looks difficult.**'],
  ['Mrs Rizk', 'How do I find them if nothing looks difficult?'],
  ['Mrs Oueidat', '⚠ **Read the sentence and ask: would I have to explain this to somebody in another office?** **Not another language — another office.** **If the answer is yes, a translator will have to guess** — **and that test finds _satisfactory_, _adequate_, _appropriate_ and _in due course_ in about four seconds each.**'],
  ['Jad', 'A manual is translated by a machine now.'],
  ['Mrs Khoury', '⚠ **And a machine has no way of asking, which makes it the strictest reader in the book.** **It renders an idiom literally and an institutional word confidently** — **and the confident one is the one that causes the trouble, because nothing in the output looks wrong.**'],
  ['Mr Zahreddine', 'My opinions are translated and I have never been asked a question.'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is that I decided on his behalf.** **Five seconds, in a hearing, with nobody to ask** — **and the expert sat through a sentence of his own that said something he had been careful not to say**, and he will have thought the court had misunderstood him.'],
]));
out.push(sp());
out.push(box('Language box – finding the untranslatable first', [
  '**Why the writer and not the translator.** ⚠ **A translator who meets it decides in four seconds, with nobody to ask, between losing the hedge and adding a sentence that is not yours.** **Nine times in ten they lose the hedge**, because adding is worse — **and the writer never learns that it happened.**',
  '**The three groups, easiest first.** ⚠ **Idiom** — _to all intents and purposes_, _by and large_ — **goes with a rewrite.** **An institutional word** — _registrar_, _form tutor_, _grants panel_ — **goes with a gloss of about five words.** **A hedge may not go at all**, which is 11.3.',
  '**And the fourth group, which is the hardest because nothing looks difficult.** ⚠ **A word with an exact equivalent and a different meaning in each institution.** _Satisfactory_ · _adequate_ · _appropriate_ · _in due course_. **The translation is perfect and the sense is gone.**',
  '**The test, and it is not about languages.** ⚠ _Would I have to explain this to somebody in another office?_ **Not another language — another office.** **If yes, a translator will have to guess** — **and the test finds the fourth group in about four seconds a word.**',
  '**The gloss, and where it goes.** ⚠ _the form tutor — the teacher responsible for the pupil\'s attendance record_. **Five words, in the sentence, the first time the word appears.** **Not a footnote**, because a footnote is the first thing a translator drops and the second thing a reader does not read.',
  '**Machines, which are now the commonest reader of your English.** ⚠ **A machine has no way of asking, which makes it the strictest reader in this book.** **It renders an idiom literally and an institutional word confidently** — **and the confident rendering is the dangerous one, because nothing in the output looks wrong.**',
  '**And what it costs when nobody does it.** ⚠ **An expert sat through a sentence of his own that said something he had been careful not to say.** **He will have believed the court misunderstood him.** **Nobody in that room made a mistake** — **and the hedge had lived in five English words.**',
  '**Pronunciation.** 🔊 **Track 10.10** **Read a sentence with an idiom in it aloud and then read it with the idiom removed and nothing put back.** ⚠ **The room says whether the meaning changed.** **With _to all intents and purposes_ gone the sentence is flatly true**, and that flat version is what a reader of the translation receives.',
  '**Practise:** Find it and repair it. **1** an idiom  **2** an institutional word  **3** a word with an exact equivalent and a different meaning  **4** a hedge that will not go  **5** one where the repair is to delete the phrase and lose nothing',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B names **the group** and gives **the repair** — a rewrite, a gloss, or a covering line. ⚠ **Two rows on each card need nothing at all.** **B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The file was, to all intents and purposes, complete._', '_The matter will be dealt with in due course._'],
  ['_⚠ Nine of the eleven queries arose against a printed sheet._', '_⚠ The limit is eight degrees and the reading was 8.4._'],
  ['_The form tutor will telephone before Friday._', '_The grants panel was not persuaded._'],
  ['_⚠ Fifty-five of the fifty-six positions read 12.0 to 12.2._', '_⚠ The note was adopted on the first of March._'],
  ['_The arrangements have been satisfactory._', '_The response was, by and large, adequate._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the group and the repair. ⚠ **Rows 2 and 4 on both cards need nothing** — **counts, denominators, measurements and dates go into any language unchanged, which is worth saying out loud because it is the reward for Units 4 to 9.** **Rows 3 are the institutional words and each needs a gloss of about five words.** **Rows 5 are the fourth group and the hardest**: _satisfactory_, _by and large_ and _adequate_ in three sentences, and the repair is a count.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a paragraph of yours** and mark **every phrase you would have to explain to somebody in another office.** ⚠ **Another office, not another language.** **Then sort the marks into the four groups and write the repair for each.** **In this class a paragraph of a hundred words has produced between two and six marks**, and about half of them have been the fourth group.'));
out.push(p('**b**  Swap. Your partner reads **your paragraph with every marked phrase deleted and nothing put back.** ⚠ **You hear what a translation sounds like.** **The sentences are all still true and about a third of them now say more than you meant** — **which is the finding and it cannot be got any other way.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The phrase Mrs Oueidat could not carry was to all intents and purposes. An expert had written that the file was, to all intents and purposes, complete, and there is no form of words in Arabic that carries exactly that: it means complete enough for the present purpose and not complete, and it means both at once. Mrs Tarabishi asked what she did, and she rendered it as complete for the purposes of this report, and the court heard a flat statement that the file was complete — which the expert had not said and would not have said. Mrs Khoury said this is the thing a writer can do and a translator cannot: you find it before anybody needs it, because a translator who meets it has to decide in about four seconds between losing the hedge and adding a sentence that is not yours, and nine times in ten they lose the hedge. Dr Qabbani asked whether it is always idiom, and three groups, and idiom is the easiest: idiom goes with a rewrite, an institutional word goes with a gloss, and a hedge sometimes cannot go at all. Mr Tayara asked whether form tutor really has no equivalent, and none, and a translator will choose a word from their own system and the reader will then picture a person with different powers — and five words from the writer prevents it. Mr Shihabi said a wire story is translated by somebody he will never meet, and four or five times within a day. Mrs Ajouz asked about satisfactory, and satisfactory is the worst word in this book and it is not an idiom: it has an exact equivalent in every language and means something different in each institution, so the translation is perfect and the sense is gone. Mrs Rizk asked how to find them if nothing looks difficult, and read the sentence and ask whether you would have to explain it to somebody in another office — not another language, another office. Mr Attar said a manual is translated by a machine now, and a machine has no way of asking, which makes it the strictest reader in the book. Mr Zahreddine said his opinions are translated and he has never been asked a question. And Mrs Oueidat said the thing she will take away is that she decided on his behalf: five seconds, in a hearing, with nobody to ask, and the expert sat through a sentence of his own that said something he had been careful not to say._'));
out.push(p('**Listener task:** write your four groups and the repairs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat now sends to anybody whose document she is about to translate. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _to the author of a document for translation_ · _four things to look for before you send it_ · **10 June**',
  '**I shall have to make decisions about your document and I shall not be able to ask you.** **This note is the four places where a decision will be needed, so that you can take them yourself.**',
  '**One: idiom.** _To all intents and purposes. By and large. In the main._ **These have no form of words that carries them and I shall rewrite them.** ⚠ **A rewrite loses the hedge, because the alternative is to add a sentence that is not yours** — **and in a hearing the flat version is what the court hears.**',
  '**Two: words that belong to your institution.** _Registrar. Form tutor. Grants panel. Second sample._ **I have no equivalent for any of them** — **I have a word from another system, and a reader will then picture a person or a thing with different powers.** **Five words from you in the sentence prevents it:** _the form tutor, the teacher responsible for the pupil\'s attendance record_. **Not a footnote; a footnote is the first thing dropped.**',
  '**Three: the hedge that will not go.** **Some hedges live in the grammar of English and have no grammar to live in elsewhere.** **Where that happens I shall tell you in a covering line if there is time, and where there is not I shall choose** — **and my choice will be the stronger reading, because the weaker one reads as an error of translation.**',
  '**Four, and this is the one nobody expects.** **A word with an exact equivalent in my language and a different meaning in every institution.** _Satisfactory. Adequate. Appropriate. In due course._ ⚠ **The translation will be perfect and the sense will be gone**, and nothing in my work or yours will show that it happened.',
  '**The test that finds all four, and it is not about languages.** _Would I have to explain this to somebody in another office?_ **Not another language: another office.** **If the answer is yes, I shall be guessing.**',
  '**What goes into any language unchanged, which is most of a good document.** **Counts. Denominators. Dates. Measurements. Named documents.** **A sentence made of those five things is the same sentence in every language I work in**, and a document built from them gives me nothing to decide.',
  '**One request, which costs you nothing.** **Send me the document and not a photograph of the form it sits in.** ⚠ **A form\'s headings were translated by somebody else, usually years earlier**, and a sentence of yours that leans on a heading will arrive beside a heading that no longer says what you were answering.',
  '**And one case from this year rather than a rule.** **An expert wrote that a file was, to all intents and purposes, complete.** **I had five seconds and nobody to ask.** ⚠ **The court heard that the file was complete**, and he sat through it believing he had been misunderstood.',
  '**M. Oueidat** · _court-appointed translator and interpreter_',
]));
out.push(item('1', 'What are the four places where a decision will be needed?'));
out.push(item('2', 'Why does she say a gloss must be in the sentence and not in a footnote?'));
out.push(item('3', 'What goes into any language unchanged?'));
out.push(writers([
  'A note to an author before translation: **say that you will have to decide and will not be able to ask** → **idiom, and what a rewrite costs** → **institutional words, with the five-word gloss and why not a footnote** → **the hedge that cannot go, and which way you will choose** → **the word with an exact equivalent and a different meaning** → **the test that finds all four** → **what goes unchanged** → **and one case rather than a rule.**',
  '⚠ **Say which way you will choose when you have to.** _My choice will be the stronger reading, because the weaker one reads as an error of translation._ **An author who is told this will take the decision themselves** — **and an author who is not told imagines a careful hedge surviving into a language that has no room for it.**',
  '**Put the gloss in the sentence and say why.** ⚠ _Not a footnote; a footnote is the first thing dropped._ **Five words, the first time the word appears** — **and the author who writes them has removed a decision rather than explained one.**',
  '**Name the fourth group last and say that nothing will show.** ⚠ _The translation will be perfect and the sense will be gone._ **This is the group authors do not believe in**, because the word looks simple and the dictionary agrees with them.',
  '⚠ And **end with what goes unchanged, which is most of a good document.** _Counts. Denominators. Dates. Measurements. Named documents._ **A note that lists only the dangers reads as a complaint about the author\'s English** — **and this list is the reward for Units 4 to 9 and should be said in those words.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note to an author before translation (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **I shall have to make decisions about ______________ and I shall not be able to ______________.** **This note is ______________, so that ______________.**   **One: idiom.** _______________. _______________. **These ______________ and I shall ______________.** ⚠ **______________.**   **Two: words that belong to ______________.** _______________. _______________. **I have no equivalent** — **I have ______________, and a reader will then ______________.** **Five words from you prevents it: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision declared, and the inability to ask',
  'The five-word gloss, in the sentence and not in a footnote',
  'Which way you will choose on a hedge that cannot go',
  'What goes into any language unchanged',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their fourth group**, and the room says which of those words it uses every week.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the declaration, the four groups with their repairs, the test, what goes unchanged, and one case rather than a rule.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the inability to ask declared, the gloss placed in the sentence, the hedge decision named, and what goes unchanged listed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a sentence with an idiom in it and then the same sentence with the idiom deleted and nothing put back.** ⚠ **The room says whether the meaning changed.** **With _to all intents and purposes_ gone the sentence is flatly true** — **and that flat version is exactly what a reader of the translation receives, which is the whole cycle in two readings.** Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **I decided on his behalf.**'));
out.push(hw('Take **a paragraph of yours** and mark every phrase you would have to explain **to somebody in another office.** ⚠ **Sort the marks into the four groups and write the repair for each.** **Then give the paragraph to somebody with the marked phrases deleted and nothing put back**, and ask them what it says. **In this class about a third of the sentences have said more than the writer meant.** **Bring the four groups and what your reader said.** **10.6 writes the eighty words that survive a desk** — **forty minutes, eighty words, one editor, and everything in this unit at once.**'));

// ===================== 10.6 =====================
out.push(h2('10.6  The eighty words that survive a desk'));
out.push(p('**Function:** writing the eighty words that survive a desk   ·   **Grammar:** the wire paragraph: forty minutes, eighty words, one editor   ·   **Pronunciation:** eighty words read aloud in under thirty seconds'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the eighty words you brought, read aloud, timed.** ⚠ **Nobody comments and nobody explains.** Your teacher writes the ten times on the board. **Eighty words takes about thirty seconds** — **and in most classes three or four of the ten run over forty, which means the words are longer than the facts in them.**'));
out.push(board('Officials claimed uptake had been significant.', 'Which officials, what figure, and said when?'));
out.push(p('**b**  Which two would survive a desk? **1** _Officials claimed that uptake had been significant._  **2** _It should be noted that a number of districts were, to all intents and purposes, unreached._  **3** _Three of the eleven districts have no fixed clinic, according to the 2024 register._  **4** _Two studies published this month put repayment at eighty-one per cent and differ about what it shows._  **5** _The situation is clearly a major concern for the region._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the eighty words are?   **A** a shorter version of something longer   **B** **the whole of this unit applied at once, under a clock** — the free verb, no changeable word, the strike test passed, and nothing in it a stranger would have to decide about   **C** a newspaper exercise'));
out.push(p('**b**  Listen again. **1** How does Mr Shihabi spend the forty minutes, and on what?   **2** What does Mrs Khoury say she does to eighty words that arrive with nothing wrong with them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  Forty minutes, eighty words', [
  ['Ms Huda', 'Mr Shihabi — the forty minutes.'],
  ['Mr Shihabi', '⚠ **Eighty words and forty minutes, and the forty minutes are not spent writing.** **About five minutes writing and thirty-five on the telephone** — **because the eighty words are made of counts and denominators and dates, and I do not have them when the story starts.**'],
  ['Mrs Tarabishi', 'Then what is on the page at minute five?'],
  ['Mr Shihabi', '⚠ **The shape, with gaps in it.** _Two studies put repayment at ___ per cent and differ about ___._ **Then I know which two telephone calls to make**, and the calls are short because I know exactly what I am asking for.'],
  ['Mrs Khoury', '⚠ **Which is the only way eighty words gets written and it is the opposite of how everybody is taught.** **The draft is a list of holes.** **A writer who drafts the sentences first spends the forty minutes making the prose good and files eighty words with no figures in them** — **and a desk cannot put figures into a story.**'],
  ['Dr Qabbani', 'And when they arrive with nothing wrong with them?'],
  ['Mrs Khoury', '⚠ **I read them twice and send them.** **Which happens about once a week and is the whole of what a contributor can aim for.** **The second read is for sense and not for faults** — **and the difference between the two reads is about four minutes of mine and a round of yours.**'],
  ['Mr Tayara', 'Is eighty a real number or a figure of speech?'],
  ['Mr Shihabi', '⚠ **It is the space.** **Four paragraphs of twenty words, or three of twenty-six, and the desk cuts from the bottom** — **so the fourth paragraph is written knowing it will go, and the first carries both positions, which is 8.5.**'],
  ['Mrs Ajouz', 'Nothing I write has a space limit.'],
  ['Mrs Khoury', '⚠ **Everything you write has a reader limit, which is the same thing arriving later.** **A registration officer reads the first paragraph and the last and skims the middle** — **and the discipline of eighty words is the discipline of knowing which paragraph will be read, which is worth more than the brevity.**'],
  ['Mrs Rizk', 'Four paragraphs for a proposal is absurd.'],
  ['Mr Shihabi', '⚠ **Write the eighty words first and then the proposal.** **If the eighty cannot be written, the proposal has nothing in it** — **and in my experience that is true about a third of the time and is better found out in forty minutes than in four months.**'],
  ['Jad', 'What goes in the first twenty words?'],
  ['Mr Shihabi', '⚠ **The thing that is new, with its number, and the thing it is in dispute with.** **Not the background.** **Background in the first twenty words is the commonest reason a story is cut to nothing** — **because a desk cutting from the bottom will cut the news and leave the background, which is what the first paragraph told it to keep.**'],
  ['Mr Zahreddine', 'An opinion cannot be written in eighty words.'],
  ['Mrs Oueidat', '⚠ **The covering letter can, and it is the only part the insurer reads.** **Eighty words with the finding, its boundary, the document that would settle it and who holds that** — **which is Units 9 and 10 in one paragraph, and I have seen you write it.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is the thirty-five minutes.** **For two years I thought I was a slow writer.** **I was a fast writer with nothing to write about** — **and the eighty words were never the problem: the two telephone calls were.**'],
]));
out.push(sp());
out.push(box('Language box – eighty words, and how they are made', [
  '**The time is not writing time.** ⚠ **About five minutes drafting and thirty-five finding the facts.** **The draft at minute five is a shape with gaps in it** — _two studies put repayment at ___ per cent and differ about ____ — **and the gaps tell you which two telephone calls to make.**',
  '**Why drafting the sentences first fails.** ⚠ **A writer who drafts sentences spends the time making the prose good and files eighty words with no figures in them.** **A desk cannot put figures into a document.** **The draft is a list of holes.**',
  '**The shape, and the bottom goes.** ⚠ **Four paragraphs of twenty words, or three of twenty-six.** **A desk cuts from the bottom** — **so the fourth paragraph is written knowing it will go, and the first carries both positions, which is 8.5.**',
  '**What goes in the first twenty words.** ⚠ **The thing that is new, with its number, and the thing it is in dispute with.** **Not the background.** **Background in the first twenty words is the commonest reason a document is cut to nothing**, because a reader cutting from the bottom keeps what the first paragraph told them to keep.',
  '**And this is not about newspapers.** ⚠ **Everything you write has a reader limit, which is a space limit arriving later.** **A registration officer reads the first paragraph and the last and skims the middle.** **The discipline of eighty words is the discipline of knowing which paragraph will be read** — **worth more than the brevity.**',
  '**The test for a long document.** ⚠ **Write the eighty words first.** **If they cannot be written, the document has nothing in it** — **true about a third of the time in this class, and better found out in forty minutes than in four months.**',
  '**Everything in this unit, at once.** ⚠ **_Said_ and no other verb.** **No word a desk could improve.** **Nominal only where the sentence is a rule.** **Every word un-strikeable.** **Nothing a stranger would have to decide about.** **Five checks, eighty words, and about four minutes once the facts are in.**',
  '**Pronunciation.** 🔊 **Track 10.12** **Read your eighty words aloud and time them.** ⚠ **Eighty words is about thirty seconds.** **Over forty seconds means the words are longer than the facts in them** — **and the ear finds that before any count does, which is why this is a timing exercise and not a counting one.**',
  '**Practise:** Write the shape with gaps, then name the calls. **1** the new thing with its number  **2** the thing it is in dispute with  **3** the paragraph written to be cut  **4** the eighty words of a long document you have already written  **5** one where the eighty words cannot be written — and say what that tells you',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B writes **the shape with gaps** aloud, in four paragraphs of about twenty words, and names **the two calls to make.** ⚠ **On two rows of each card the eighty words cannot be written at all.** **B must say so and say what it tells them.** Change cards.'));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_Two studies of repayment, same figure, different accounts of it._', '_Three districts with no fixed clinic; a twelve-month mobile service proposed._'],
  ['_⚠ A committee is divided and nobody disputes a figure._', '_⚠ A frame measured on two dates; a specification nobody disputes._'],
  ['_A file returned over one sentence; eleven days to reply._', '_A letter about three days\' absence; a rule that triggers it._'],
  ['_⚠ A concern has been expressed about standards generally._', '_⚠ A review of the literature is felt to be timely._'],
  ['_An excursion at 09:20 and a reading of 4.1 at 10:00._', '_Eleven points from two referees; nine accepted._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the shape, the gaps, and the two calls. ⚠ **Rows 4 on both cards cannot be written** — **_a concern has been expressed about standards_ and _a review is felt to be timely_ contain no count, no date, no document and no actor** — **and the finding is that there is no document there yet.** **Rows 2 are hard and can be written**: a divided committee with an undisputed figure is 8.2, and the eighty words are the agreed half and the grounds.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the longest document you have written this year** and write **its eighty words** — ⚠ **four paragraphs of about twenty, the new thing with its number first, and the fourth written to be cut.** **Then time yourself reading them.** **Thirty seconds is right and forty-five means the words are longer than the facts.**'));
out.push(p('**b**  Swap. Your partner reads **only your eighty words** and says **what the document is for.** ⚠ **If they cannot, the eighty words have the background in the first paragraph.** **In this class that has been true about half the time on a first attempt**, and the repair is to move paragraph three to the top and delete paragraph one.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi has eighty words and forty minutes, and the forty minutes are not spent writing: about five minutes writing and thirty-five on the telephone, because the eighty words are made of counts and denominators and dates and he does not have them when the story starts. Mrs Tarabishi asked what is on the page at minute five, and the shape, with gaps in it — two studies put repayment at so many per cent and differ about something — and then he knows which two telephone calls to make, and the calls are short because he knows exactly what he is asking for. Mrs Khoury said that is the only way eighty words gets written and it is the opposite of how everybody is taught: the draft is a list of holes, and a writer who drafts the sentences first spends the forty minutes making the prose good and files eighty words with no figures in them, and a desk cannot put figures into a story. Dr Qabbani asked what happens when they arrive with nothing wrong with them, and she reads them twice and sends them, which happens about once a week: the second read is for sense and not for faults, and the difference between the two reads is about four minutes of hers and a whole round of the writer\'s. Mr Tayara asked whether eighty is a real number, and it is the space — four paragraphs of twenty words, and the desk cuts from the bottom, so the fourth paragraph is written knowing it will go and the first carries both positions. Mrs Ajouz said nothing she writes has a space limit, and Mrs Khoury said everything she writes has a reader limit, which is the same thing arriving later. Mrs Rizk said four paragraphs for a proposal is absurd, and write the eighty words first and then the proposal: if the eighty cannot be written, the proposal has nothing in it, which is true about a third of the time. Mr Attar asked what goes in the first twenty words, and the thing that is new with its number and the thing it is in dispute with, and not the background. Mr Zahreddine said an opinion cannot be written in eighty words, and Mrs Oueidat said the covering letter can and it is the only part the insurer reads. And Mr Shihabi said the thing he will take away is the thirty-five minutes: for two years he thought he was a slow writer, and he was a fast writer with nothing to write about._'));
out.push(p('**Listener task:** write your four paragraphs\' word counts and your reading time.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the eighty words Mr Shihabi filed, with the shape he had at minute five underneath. Answer the questions.'));
out.push(model([
  '**SYRIA / HEALTH** · _three districts without a fixed clinic_ · **T. Shihabi** · _filed 11:40, 12 June_',
  '**Three of the eleven districts in Hama governorate have no fixed clinic, according to the 2024 attendance register.** _(19 words)_',
  '**The governorate health office said on Thursday that a twelve-month mobile service had been proposed for the three and that no decision had been taken.** _(24 words)_',
  '**The office said it held no estimate of how many children were involved, and that the register records attendance at fixed clinics only.** _(23 words)_',
  '**Two comparable services have been run in the governorate since 2021, both in districts that already had a fixed clinic.** _(20 words)_',
  '**Eighty-six words, four paragraphs, and the fourth written to be cut.**',
  '**The shape at minute five, which is what the forty minutes were spent filling.** _"___ of the eleven districts in ___ have no fixed clinic, according to ___. The ___ said on ___ that ___ had been proposed and that no decision had been taken. The office said it held no estimate of ___. ___ comparable services have been run since ___."_',
  '**Seven gaps and two telephone calls.** **The register gave the first three and the health office gave the rest** — ⚠ **and the second call was four minutes long because I knew exactly which four things I was asking for.**',
  '**The two calls, and what was asked in each.** **The register office: the number of districts, the governorate, and the year of the register.** **The health office: whether a service had been proposed, the date on which the office had said so, whether a decision had been taken, whether any estimate of the population was held, and how many comparable services had been run and since when.** ⚠ **Nine things in two calls, and both calls were made before a single finished sentence existed.**',
  '**What a desk would have done with the version I wrote two years ago.** **It began _concern has been raised about access to clinics in rural Hama_, which has no count, no date and no document in it.** ⚠ **A desk cutting from the bottom would have kept that sentence and cut the three numbers**, because the first paragraph tells it what the story is about.',
  '**What is not in these eighty words, deliberately.** **No adjective of degree.** **No reporting verb but _said_.** **No word a desk could improve without looking something up.** **Nothing an overnight translator would have to decide about** — **the three numbers, the two dates and the named register go into any language unchanged.**',
  '**The third paragraph is the one I would have left out two years ago.** ⚠ **_The office said it held no estimate_ is a sentence about an absence**, and it is the sentence a reader needs most, because without it the proposal looks costed and it is not.',
  '**And the arithmetic of the forty minutes.** **Five writing, thirty-two telephoning, three reading it back aloud.** **It takes about thirty seconds to read** — **and the desk filed it unchanged, which is the only result this cycle is for.**',
]));
out.push(item('1', 'What was on the page at minute five, and what did it tell him to do?'));
out.push(item('2', 'What is deliberately not in the eighty words?'));
out.push(item('3', 'Which paragraph would he have left out two years ago, and why does it matter?'));
out.push(writers([
  'Eighty words and the shape behind them: **the new thing with its number, first** → **what has been proposed or disputed, attributed with _said_** → **the absence that stops a reader assuming** → **the paragraph written to be cut** → **the shape with its gaps, printed** → **the calls the gaps produced** → **what is deliberately absent** → **and the arithmetic of the time.**',
  '⚠ **Print the shape with the gaps in it.** _"___ of the eleven districts in ___ have no fixed clinic, according to ___."_ **It is the only way to show that the writing was five minutes and the work was thirty-five** — **and a reader who sees only the finished eighty words draws the wrong lesson from them.**',
  '**Put the absence in, and in the third paragraph.** ⚠ _The office said it held no estimate of how many children were involved._ **Without it the proposal looks costed.** **An absence is a fact and it belongs in the eighty words, not in the part that gets cut.**',
  '**Write the fourth paragraph knowing it goes.** ⚠ **A desk cuts from the bottom.** **The fourth paragraph is where the useful-but-not-necessary context lives** — **and a writer who puts it first loses the news and keeps the background.**',
  '⚠ And **give the arithmetic of the time, not of the words.** _Five writing, thirty-two telephoning, three reading it back aloud._ **The word count is the easy half.** **The time split is the finding** — **and it is what turns a slow writer into somebody who knows which two calls to make.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the eighty words and the shape behind them (120 words or more, including the shape).'));
out.push(p('**______________** · _______________ · **______________** · _filed ______________   **______________.** _(___ words)_   **______________ said on ______________ that ______________.** _(___ words)_   **______________ said it held no ______________.** _(___ words)_   **______________.** _(___ words)_   **The shape at minute five.** _"___ of the ___ ______________, according to ___. The ___ said on ___ that ___."_   **___ gaps and ___ telephone calls.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The new thing with its number in the first twenty words',
  'No reporting verb but _said_, and no adjective of degree',
  'An absence stated, in the third paragraph',
  'The shape with its gaps printed, and the calls named',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their first paragraph only**, and the room says what the document is for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the eighty words and the full note behind them (260 words or more), to the shape in the writer\'s box: the four paragraphs with counts, the shape with its gaps, the calls, what is deliberately absent, the paragraph you would once have left out, and the arithmetic of the time.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the new thing with its number first, _said_ throughout, an absence in the third paragraph, and the shape with its gaps printed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their eighty words aloud while somebody times it.** ⚠ **Thirty seconds is right.** **Over forty-five means the words are longer than the facts in them**, and the room should say which paragraph was carrying the weight — it is the one with no number in it. Then the sentence the cycle ends on, which is Mr Shihabi\'s: **I was a fast writer with nothing to write about.**'));
out.push(hw('Take **the longest document you have written this year** and write **its eighty words**, with **the shape and the gaps first.** ⚠ **Then make the calls the gaps produce** — **actually make them** — **and time the whole exercise in three parts: drafting, finding, reading back.** **Bring the eighty words, the shape, and the three times.** **10.7 mediates between a writer and the sub-editor who rewrote them**, and carries **Reading Part 1**, **Writing Part 2** and **Listening Part 2**.'));

// ===================== 10.7 =====================
out.push(h2('10.7  Review & Mediate: the writer and the sub-editor who rewrote them'));
out.push(p('**Function:** mediating between a writer and the sub-editor who rewrote them   ·   **Recycling:** Unit 10   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 1 · Writing Part 2 (a letter or an email) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The ward claimed that the pharmacy had instructed to them.  **2** It should be noted that in a not insignificant number of cases.  **3** Non-attendance on three consecutive days trigger a letter.  **4** The file was, to all intense and purposes, complete.  **5** Strike the word and ask what fact has gone with them.  **6** Said is the only verb of the five which is not takes a position.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the sentence, the two versions of it, and what each party says.'));
out.push(box(null, [
  '**ONE SENTENCE, TWO VERSIONS** _(the writer is Mrs Ajouz; the sub-editor is Mrs Khoury; the reader is a regional pharmacy committee)_',
  '**What was sent.** _"The ward said the pharmacy had recommended holding four of the smaller cylinders."_',
  '**What was printed.** _"The ward claimed the pharmacy had instructed it to hold four of the smaller cylinders."_',
  '**The writer.** _"Two words were changed and both of them matter. _Recommended_ became _instructed_, which is the whole of the dispute, and _said_ became _claimed_, which tells the committee I am not believed."_',
  '**The sub-editor.** _"_Recommended_ to _instructed_ was wrong and I have corrected it. _Said_ to _claimed_ was within the style book and I would do it again, because the ward is reporting what somebody else told them and the paper does not know which it was."_',
  '⚠ **One of the two changes is an error of fact and the other is a position the writer did not take and the editor is entitled to.**',
  '**And the thing neither of them has said.** **The original sentence gave no document.** **A recommendation with no date and no decider named is a sentence a desk can do anything with** — **and both changes landed on it because there was nothing else in it to land on.**',
  '**The question for the cycle.** _What do you write, and to whom?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the two changes are different kinds of thing. What follows for the letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  Two changes, two letters', [
  ['Ms Huda', 'Mrs Ajouz — you have two complaints and the room thinks you have one.'],
  ['Mrs Ajouz', '⚠ **I have two and they feel like one, which is the problem.** **_Recommended_ to _instructed_ is a fact and it is wrong.** **_Said_ to _claimed_ is about me.**'],
  ['Mrs Khoury', '⚠ **And only the first is mine to correct.** **The second is a position the desk is entitled to take** — **and if you put both in one letter, the correction of the first will arrive as part of a complaint about the second.**'],
  ['Mrs Tarabishi', 'So two letters?'],
  ['Mrs Khoury', '⚠ **One letter and one conversation, and in that order.** **The letter asks for the correction of fact and says nothing about the verb.** **The conversation is about the verb and happens after the correction has run** — **because a desk that has just corrected itself will listen to anything.**'],
  ['Mr Shihabi', 'And the verb conversation goes nowhere.'],
  ['Mrs Khoury', '⚠ **It goes somewhere it is not expected to.** **The answer will be that _claimed_ was used because the sentence had nothing in it.** **No date, no decider, no document** — **and a desk looking for the one changeable thing found two, which is 10.2 arriving from the side that does the changing.**'],
  ['Dr Qabbani', 'That is a criticism of her sentence and not of the desk.'],
  ['Mrs Oueidat', '⚠ **It is a description of both, and the mediation has to carry both without choosing.** **The error of fact is the desk\'s.** **The exposure to the edit is the writer\'s.** **Say the first in a letter and the second to yourself** — **and the second is the half that stops it happening again.**'],
  ['Mr Tayara', 'What does the letter actually say?'],
  ['Mrs Ajouz', '⚠ **Four sentences.** **The printed words, the sent words, the document that settles it, and the correction asked for.** _The line as sent read "recommended"; the memorandum of 9 March, which the ward holds, uses the same word; I should be grateful for a correction._ **No adjective anywhere in it.**'],
  ['Mrs Rizk', 'And if the desk refuses?'],
  ['Mrs Khoury', '⚠ **A desk shown its own copy against a dated document does not refuse.** **It refuses when the letter argues**, because then the question becomes whether the writer is reasonable — and that question has no document behind it and can be answered either way.'],
  ['Jad', 'Why not just ask for both corrections?'],
  ['Mrs Oueidat', '⚠ **Because one of them is not a correction.** **A desk asked to correct a verb it was entitled to use will defend the verb**, and in defending it will re-read the whole sentence looking for support — **and it will find the missing date and the missing decider, and the reply will be about those.**'],
  ['Mr Zahreddine', 'An insurer does this to my opinions and I have stopped minding.'],
  ['Mrs Khoury', '⚠ **You have stopped minding because nothing in your opinions is changeable.** **Which is the cheapest protection in this book and nobody believes it until they have measured it** — **and Mrs Ajouz measured it this week, in two words.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that one of my two complaints was about my own sentence.** **I sent a recommendation with no date and no decider in it**, which is 4.5 and I have been able to write it for eight months — **and the desk did not invent a doubt: it found the one place in nine words where a doubt would fit.**'],
]));
out.push(sp());
out.push(box('Language box – mediating an edit', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new here: sort the changes before you answer any of them.** ⚠ **An error of fact is the editor\'s and is corrected.** **A position the editor was entitled to take is not an error** — **and a letter that asks for both will get neither, because the correction arrives as part of a complaint.**',
  '**One letter and one conversation, in that order.** ⚠ **The letter asks for the correction of fact and says nothing about the verb.** **The conversation about the verb happens after the correction has run**, because a desk that has just corrected itself will listen to anything.',
  '**The letter is four sentences and has no adjective in it.** ⚠ **The printed words. The sent words. The document that settles it, with its date and who holds it. The correction asked for.** _I should be grateful for a correction._ **Nothing else, and no account of how it felt.**',
  '**Why a desk refuses.** ⚠ **Not when it is shown its own copy against a dated document.** **It refuses when the letter argues** — **because the question then becomes whether the writer is reasonable, and that question has no document behind it and can be answered either way.**',
  '**And the half of the finding that belongs to the writer.** ⚠ **The edit landed where it did because there was nothing else in the sentence to land on.** **No date, no decider, no document.** **A desk does not invent a doubt: it finds the one place a doubt will fit** — **and the writer who takes this half home stops being edited, which is cheaper than being right.**',
  '**What a writer with nothing changeable actually gets.** ⚠ **Mr Zahreddine has stopped minding because nothing in his opinions can be improved without looking something up.** **It is the cheapest protection in this book and nobody believes it until they have measured it.**',
  '**Pronunciation.** 🔊 **Track 10.14** **Read the four-sentence letter aloud and listen for the place you want to add a word.** ⚠ **It is after _I should be grateful for a correction_.** **Everybody wants to add a clause there** — _as the matter is of some importance_ — **and the clause is the whole of what turns a correction request into an argument.** **Stop at _correction_ and let the silence do it.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a printed version, a sent version and two parties, and does **not** show them. A reads all of it. B **sorts the changes** into error of fact and entitled position, says **who gets the letter**, and gives the four sentences. ⚠ **On one of the two cards both changes are errors of fact**, and B must say so and ask for both. Change roles with the other pair.'));
out.push(table(['Pair A – the cylinders', 'Pair B – the frame'], [
  ['_Sent: the ward said the pharmacy had recommended._', '_Sent: fifty-five of fifty-six positions read 12.0 to 12.2._'],
  ['_Printed: the ward claimed the pharmacy had instructed._', '_⚠ Printed: fifty-five of fifty-six positions read 12.0 to 12.2 on 3 May._'],
  ['_⚠ One error of fact, one entitled position._', '_⚠ Printed: the engineer claimed the frame was substandard._'],
  ['_⚠ The repair is a memorandum with a date._', '_⚠ Both are errors of fact: the date is wrong and the word was never used._'],
  ['_⚠ The exposure is a sentence with no decider in it._', '_⚠ The exposure is nothing: the opinion gave both dates._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the sort, the recipient, and the four sentences. ⚠ **On Pair B both changes are errors of fact** — **the single date is wrong because the measurements were taken on two dates, and _substandard_ is a word the opinion never used** — **so both go in the one letter and there is no conversation afterwards.** **Pair B also has no exposure**: the opinion gave both dates in the sentence, which is why only the printed version is wrong.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own two versions from 10.1** and sort every change into **error of fact** and **position the editor was entitled to.** ⚠ **Then write the four sentences for the first group only.** **In this class about a third of the room has found that all their changes are in the second group** — **which is not a reason to write nothing: it is 10.2\'s finding arriving personally.**'));
out.push(p('**b**  Swap. Your partner reads **only your four sentences** and says **whether a desk would correct it without replying.** ⚠ **If they say no, find the word that argues.** **It is almost always in the fourth sentence**, after the request, and the repair is to stop at _correction_.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you write, and to whom:  _Mrs Ajouz has two complaints and they feel like one, which is the problem: recommended to instructed is a fact and it is wrong, and said to claimed is about her. Mrs Khoury said only the first is hers to correct, because the second is a position the desk is entitled to take — and if both go in one letter, the correction of the first will arrive as part of a complaint about the second. Mrs Tarabishi asked whether that means two letters, and one letter and one conversation, in that order: the letter asks for the correction of fact and says nothing about the verb, and the conversation about the verb happens after the correction has run, because a desk that has just corrected itself will listen to anything. Mr Shihabi said the verb conversation goes nowhere, and Mrs Khoury said it goes somewhere it is not expected to: the answer will be that claimed was used because the sentence had nothing in it — no date, no decider, no document — and a desk looking for the one changeable thing found two. Dr Qabbani said that is a criticism of her sentence and not of the desk, and Mrs Oueidat said it is a description of both, and the mediation has to carry both without choosing: the error of fact is the desk\'s and the exposure to the edit is the writer\'s. Mr Tayara asked what the letter actually says, and four sentences: the printed words, the sent words, the document that settles it, and the correction asked for, with no adjective anywhere in it. Mrs Rizk asked what happens if the desk refuses, and a desk shown its own copy against a dated document does not refuse; it refuses when the letter argues, because then the question becomes whether the writer is reasonable. Mr Attar asked why not ask for both corrections, and Mrs Oueidat said because one of them is not a correction: a desk asked to correct a verb it was entitled to use will defend the verb, and in defending it will find the missing date and the missing decider. Mr Zahreddine said an insurer does this to his opinions and he has stopped minding, and Mrs Khoury said he has stopped minding because nothing in his opinions is changeable. And Mrs Ajouz said the thing she will take away is that one of her two complaints was about her own sentence: she sent a recommendation with no date and no decider in it, and the desk did not invent a doubt but found the one place in nine words where a doubt would fit._'));
out.push(p('**Listener task:** write your sort, and your four sentences.   ' + clinic));

out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text below and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**WHAT A DESK DOES**',
  'A sub-editor\'s first duty is not to improve a sentence but to ask whether anything in it can be improved at all. **Where a word carries a fact there is nothing to be done with it; where a word carries none, it is the only thing on the page that can be **(1) ______** away, and that is where the edit lands.**',
  'Writers believe the process is one of taste, and are surprised by how often three colleagues will predict the change. A paragraph given to three readers with the single question _which word will go?_ will **(2) ______** two answers that agree, about four times in five.',
  'The temptation, having learnt this, is to **(3) ______** back every adjective in sight. That is a mistake of a different kind: _consecutive_ in an attendance rule looks like decoration and is the whole of the rule, and a writer deleting by class will lose it and not notice for a term.',
  'Nor does the cure lie in plainness. A sentence can be **(4) ______** down until nothing in it is difficult and still contain no fact whatever, which is the condition most official prose is in.',
  'What survives a desk is a sentence every word of which would have to be looked up to be replaced. Counts, denominators, dates and named documents can be **(5) ______** into any language unchanged, and a paragraph built from them gives an editor and a translator alike nothing to decide.',
  'The reverse is also measurable. A writer who **(6) ______** over the gap where a figure should be will be asked for the figure within a fortnight, and an institutional word with no gloss on it will be **(7) ______** off as its nearest equivalent by anybody translating at speed.',
  'The only defence against the second of those is to **(8) ______** out the meaning in five words of your own, in the sentence, the first time the word appears. A footnote will not serve: it is the first thing dropped and the second thing a reader does not read.',
  '**1** **A** set   **B** stripped   **C** dressed   **D** skated',
  '**2** **A** render   **B** denote   **C** pass   **D** produce',
  '**3** **A** trim   **B** bring   **C** harden   **D** soften',
  '**4** **A** dressed   **B** set   **C** softened   **D** passed',
  '**5** **A** dressed   **B** passed   **C** skated   **D** rendered',
  '**6** **A** skates   **B** sets   **C** brings   **D** hardens',
  '**7** **A** trimmed   **B** brought   **C** passed   **D** set',
  '**8** **A** pass   **B** bring   **C** strip   **D** skate',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the four sentences that ask for a correction of fact (120 words or more, with the sort above them).'));
out.push(p('**The sort.** **Error of fact: ______________.** **Position the editor was entitled to: ______________.**   **To ______________** · _______________ · **______________**   **The line as printed read "______________".**   **The line as sent read "______________".**   **______________, which ______________ holds, uses ______________.**   **I should be grateful for a correction.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The changes sorted before anything is asked for',
  'Only the errors of fact in the letter',
  'The document named, with its date and whoever holds it',
  'No word after _correction_',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the letter or email)', 10));
out.push(box(null, [
  '⚠ **Writing Part 2 at C1 offers a letter or an email, and the band is decided by whether the letter does one thing.** **A letter that asks for a correction and comments on a style decision has done two, and the second one is what a reader answers.**',
  'Something you wrote has appeared in a form you did not send — in a newsletter, a minute, a translated version, a report quoting you. **Write a letter or an email** to the person responsible. You should **state what was sent and what appeared**, **name the document that settles the difference**, and **say what you are asking for.** Write **220–260 words**.',
  '⚠ **The 220 to 260 words are not four sentences, and that is the task\'s difficulty.** **A longer letter has room to argue and must not** — **so the extra words go on the document, the dates, who holds what, and what you are not asking for.**',
  '**And one line that raises the band every time it appears.** ⚠ **What you are not asking for.** _I am not asking for anything to be said about the wording of the second sentence, which was a matter for the desk._ **It tells the reader the letter has a boundary** — **and a letter with a boundary is answered rather than considered.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ward claimed that the pharmacy ___ it to hold four cylinders.   a) instructed to   b) had instructed to   c) had instructed',
  '2  It should be noted that, in a not insignificant number ___ cases, a second sample was available.   a) in   b) of   c) from',
  '3  Non-attendance on three consecutive days ___ a letter.   a) triggers   b) trigger   c) triggering',
  '4  The file was, to all ___ and purposes, complete.   a) intense   b) intents   c) intent',
  '5  Strike the word and ask what fact has gone ___ it.   a) from   b) by   c) with',
  '6  _Said_ is the only one of the five ___ takes no position.   a) that   b) what   c) which it',
  '7  A desk changes ___ it can change.   a) that   b) what   c) which',
  '8  The gaps the test leaves are ___ the facts were missing.   a) where   b) which   c) that',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 10.15** You will hear a sub-editor talking about what a desk does. For questions **1–8**, complete the sentences with **a word or short phrase**.'));
[
  '**1**  A desk changes about one word a ______________.',
  '**2**  Three colleagues given one paragraph agree with each other in about ______________ cases in five.',
  '**3**  The eight words a desk reaches for carry no ______________.',
  '**4**  A gloss belongs in the sentence and not in a ______________.',
  '**5**  Of the forty minutes a wire paragraph takes, about ______________ are spent on the telephone.',
  '**6**  A desk cuts a story from the ______________.',
  '**7**  The only reporting verb that takes no position is ______________.',
  '**8**  A paragraph that has had the strike test run on it often comes out ______________.',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Interviewer', 'How much does a desk actually change?'],
  ['Sub-editor', 'About one word a paragraph, which sounds like nothing and is the whole of my job. And the word is almost never a surprise. If you give one paragraph to three colleagues and ask which word will go, two of the three will agree with each other in about four cases in five. Writers think the edit is taste. It is arithmetic.'],
  ['Interviewer', 'Which words?'],
  ['Sub-editor', 'There are about eight of them and I could write them on the back of an envelope. Significant, key, major, robust, very, clearly, substantially, a number of. Between them they account for about half of everything this desk changes, and what they have in common is that none of them carries a fact. They are what a writer reaches for when the figure is not to hand.'],
  ['Interviewer', 'And words a reader in another country will not have?'],
  ['Sub-editor', 'Those are a different problem and the answer is a gloss — five words of your own, in the sentence, the first time the word appears. Not in a footnote. A footnote is the first thing dropped and the second thing a reader does not read. I have watched an institutional word go into three languages as three different jobs, in one afternoon, because nobody had spent the five words.'],
  ['Interviewer', 'You came from a wire service. How long does eighty words take?'],
  ['Sub-editor', 'Forty minutes, and about thirty-five of them on the telephone. Five minutes of writing. That surprises people, and it stopped surprising me when I understood that the eighty words are made of counts and dates, and you do not have those when the story starts. The draft at minute five is a shape with holes in it, and the holes tell you whom to ring.'],
  ['Interviewer', 'And when there is no room for it all?'],
  ['Sub-editor', 'A desk cuts from the bottom. Always, in every newsroom I have worked in. So the last paragraph is written knowing it will go, and the first one has to carry both sides of whatever the story is about — because if the first paragraph carries one side, the cut leaves a headline about a dispute above half a dispute.'],
  ['Interviewer', 'Is there a word you will not touch?'],
  ['Sub-editor', 'Said. It is the only reporting verb of the five that takes no position at all. Stated is distant, maintained says they have been asked twice, conceded says it was against their interest, claimed says the writer doubts it. I have corrected my own use of claimed in print, which is not a thing I enjoy telling people. Nine saids in a paragraph is monotonous and costs nothing. Four different verbs is four positions nobody chose.'],
  ['Interviewer', 'Does any of this make writing shorter?'],
  ['Sub-editor', 'Not reliably, and that is the part nobody believes. Strike every word that carries no fact and you are left with gaps, and the gaps are where the facts were missing. A paragraph that has had that done to it often comes out longer. Shorter is what happens when the facts were already there.'],
]));
out.push(p('**C  Writing.** Write the letter or email (220–260 words): what was sent, what appeared, the document that settles it, what you are asking for, and what you are not asking for.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ choose a reporting verb deliberately and defend it to the person quoted',
  '☐ name the word a desk will change in my own paragraph before anybody changes it',
  '☐ nominalise and un-nominalise at will, and choose on the reader',
  '☐ run the strike test and name the fact that goes with every word removed',
  '☐ find the untranslatable part of my own sentence before a translator meets it',
  '☐ gloss an institutional word in five words, in the sentence',
  '☐ write eighty words that a desk files unchanged',
  '☐ sort an edit into errors of fact and positions the editor was entitled to',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _strip away · trim back · scale down · harden up · soften down · dress up · set forth · put into words · bring out · pass off · skate over · toughen up_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 10.7 is built on this unit\'s lexis)_: _abstract → **abstraction** · formal → **formality** · literal → **literally** · idiom → **idiomatic** · render → **rendering** · connote → **connotation** · denote → **denotation** · lexical → **lexically** · syntax → **syntactic**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _take down_ **→ _take a sentence down to eighteen words_**, which is reducing, where at A2 it was taking down a notice · _turn on_ **→ _the whole paragraph turns on one word_**, which is depending, where at A2 it was turning on a light · _go down_ **→ _how a sentence goes down with a reader_**, which is being received, where at A2 it was going down the stairs.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
