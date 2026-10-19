// Proactive English C1 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE REFEREE READ', 'WHAT THE WRITER MEANT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says which of the nine degrees it is, and whether the writer could defend it.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 9  The Claim You Can Defend to a Referee'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Somebody is paid to find the weak point in what you write.** ⚠ **A referee, a registration officer, an insurer\'s lawyer, a budget holder, an examiner.** **None of them is your enemy and none of them will tell you which sentence they stopped at** — **they will send back a judgement, and you will have to work out from it which of your sentences did the damage.**',
  '**9.1** puts a number on how sure you are, in writing, in nine steps.   **9.2** says what the evidence is consistent with and what it excludes.   **9.3** writes the limitation that strengthens the claim it limits.   **9.4** answers an objection without conceding the finding.   **9.5** rewrites your own overclaim, and says what it cost to see it.   **9.6** writes the response-to-referees letter.   **9.7** mediates between an author, a referee and the editor who has to decide.',
  '**Exam practice in 9.7:** C1 Advanced **Reading and Use of English Part 3** (word formation), **Writing Part 1** (the essay, for the fifth time) and **Listening Part 1** (three short extracts).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** something you wrote that somebody sent back — a referee\'s report, a returned file, a reviewer\'s comments, a letter declining a proposal. **Two:** the thing you wrote. **9.5 runs on both of them together and it is the cycle that costs most in this unit.**',
  '**And one genre is new, and it is the most precisely shaped document in Book 1.** ⚠ **The response-to-referees letter answers numbered points in the referee\'s order, concedes at least one and refuses at least one, and reasons both.** **A letter that concedes everything invites a second round; a letter that refuses everything is not read twice.** **Nothing in A2, B1 or B2 asks for it, and almost nobody in a professional life is taught it.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 9.1 =====================
out.push(pb());
out.push(h2('9.1  Nine degrees, in writing'));
out.push(p('**Function:** putting a number on how sure you are, in writing, in nine steps   ·   **Grammar:** the nine degrees written rather than spoken · **raising 4.1**   ·   **Pronunciation:** a degree said without a hedge in the voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the strongest sentence in the thing you brought, read aloud.** ⚠ **One sentence, and nothing about it.** Your teacher writes the nine degrees on the board and marks each sentence against them. **In most classes seven of the ten sit at degree 3 or 4**, and five of those seven could have been written at 6 or 8 from the evidence the writer holds.'));
out.push(board('The author is uncertain about everything.', 'Six of the eight sentences are at degree 8 and read as 3.'));
out.push(p('**b**  Which two of these are the same degree? **1** _It is possible that the night staffing explains the eight._  **2** _The evidence is consistent with a staffing explanation._  **3** _It is not possible to say whether staffing explains the eight._  **4** _It may be that the night staffing explains the eight._  **5** _On the balance of the evidence, the eight are a staffing effect._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the nine degrees are for?   **A** sounding careful   **B** **telling a reader which of your sentences you will defend and which you will not** — so that the reader stops at the right one   **C** avoiding criticism'));
out.push(p('**b**  Listen again. **1** What did the referee write about Mrs Tarabishi\'s thesis chapter?   **2** What does Mrs Khoury say happens to a writer who uses one degree throughout?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  Uncertain about everything', [
  ['Ms Huda', 'Mrs Tarabishi — the referee\'s first sentence.'],
  ['Mrs Tarabishi', '⚠ **_The author appears uncertain about everything and certain about one thing, and I am unable to tell which is which._** **Twenty-two words, and it was the whole report.**'],
  ['Mrs Khoury', 'Which one were you certain about?'],
  ['Mrs Tarabishi', '⚠ **The selection test, which is the only original thing in the chapter.** **And I had written _it may be that selection does not explain the rate_**, which is degree four, **and I would defend it at degree eight.**'],
  ['Dr Qabbani', 'And the rest?'],
  ['Mrs Tarabishi', '⚠ **The rest is at four as well.** **Every sentence in eleven pages written as _it may be_, because that is how one is taught to sound.** **So the one sentence I would die for is in the same clothes as the eight I would give away.**'],
  ['Mrs Khoury', '⚠ **Which is the whole fault and it is not a fault of modesty.** **A writer who uses one degree throughout has told the reader nothing about any of their sentences** — **and a referee who cannot tell which sentence to attack attacks the paper.**'],
  ['Mr Shihabi', 'Nine seems a great many.'],
  ['Mrs Oueidat', '⚠ **Nine is what the courts use and they did not invent it for pleasure.** _It is not possible to say_ · _it cannot be excluded_ · _it is possible_ · _it may be_ · _consistent with_ · _on the balance_ · _likely_ · _established_ · _not in dispute_. **Each one commits you to something different and a judge knows all nine.**'],
  ['Mr Tayara', 'Does a reader really feel the difference between three and four?'],
  ['Mrs Khoury', '⚠ **Between three and four, very little, and that is why there are nine and not three.** **The distances that matter are two to five and five to eight** — **_cannot be excluded_ to _consistent with_, and _consistent with_ to _establishes_.** **Those two jumps are where readers change what they do.**'],
  ['Mrs Ajouz', 'A registration officer does not read nine degrees.'],
  ['Mrs Oueidat', '⚠ **A registration officer reads three and knows which three.** _I cannot verify this_ · _I accept this_ · _this is agreed_. **The nine are for writing with and the reader takes the three they need** — **and a file written entirely at one degree gives them nothing to sort.**'],
  ['Mrs Rizk', 'And in a proposal? There is no evidence at all in half of mine.'],
  ['Mrs Khoury', '⚠ **Then degrees one and two are the most useful words in the document.** _It is not possible to say what the uptake will be in the two districts without the 2024 register._ **A proposal that says that has told a donor where to look** — **and a proposal that writes _uptake is expected to be high_ has told them nothing and invited the one question nobody can answer.**'],
  ['Jad', 'Is this not simply hedging with more words?'],
  ['Mrs Tarabishi', '⚠ **It is the opposite, and the arithmetic says so.** **My second chapter has three sentences at degree eight and one at nine, and about forty at five and below.** **It is nine hundred words shorter than the first version**, because a sentence at eight needs no apparatus round it and a sentence at four collects three.'],
  ['Mr Zahreddine', 'My opinions have used four of the nine for twenty years without a name for them.'],
  ['Mrs Oueidat', '⚠ **Which four, and the class should hear this**: _I am unable to say_, _consistent with_, _on the balance of the information available_, and _not in dispute_. **One from each end and two from the middle** — **and the two in the middle are the ones a tribunal quotes.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the referee\'s twenty-two words.** **He did not say the chapter was wrong, and he did not say it was weak.** **He said he could not tell which sentence to argue with**, and the eleven pages had made that impossible on purpose, without my knowing it.'],
]));
out.push(sp());
out.push(box('Language box – the nine degrees in writing', [
  '**Degrees 1 and 2 commit you to nothing, and say that you looked.** ⚠ **1** _it is not possible to say whether_ — **you have looked and the evidence is silent.**   **2** _it cannot be excluded that_ — **the same, and it says the question was asked.**',
  '**Degrees 3 to 5 are about what the evidence permits.** ⚠ **3** _it is possible that_ — **there is a mechanism, not evidence.**   **4** _it may be that_ — **the same, in your own voice rather than the field\'s.**   **5** _the evidence is consistent with_ — **nothing you hold contradicts it.**',
  '**Degrees 6 to 9 are about what you will defend.** ⚠ **6** _on the balance of the evidence_ — **you have weighed both directions and say which is heavier.**   **7** _it is likely that_ — **a figure, if anybody asks for one.**   **8** _the evidence establishes that_ — **you will defend it against a referee.**   **9** _it is not in dispute that_ — **the other side has agreed it in writing.**',
  '⚠ **And the two distances that matter, which is why there are nine and not three.** **Two to five** — _cannot be excluded_ **to** _consistent with_. **Five to eight** — _consistent with_ **to** _establishes_. **Between three and four a reader feels almost nothing.**',
  '**The rule.** ⚠ **Put every sentence that carries a claim at the degree you would defend it at, and no higher.** **And no lower** — **a sentence written at four that you would defend at eight has thrown away the only thing in the document you were sure of.**',
  '**Why one degree throughout is worse than a wrong degree.** ⚠ **A reader meets eleven pages at _it may be_ and learns nothing about any sentence in them.** **A referee who cannot tell which sentence to attack attacks the paper** — **and that is the report Mrs Tarabishi got and it is the commonest report there is.**',
  '**The two jumps that matter.** ⚠ **Two to five, and five to eight.** **_It cannot be excluded_ to _the evidence is consistent with_** — **the first says you looked and the second says nothing you hold contradicts it.** **_Consistent with_ to _the evidence establishes_** — **and the second is a promise to defend it.** **Between three and four a reader feels almost nothing, which is why there are nine and not three.**',
  '**Degrees one and two are not weakness: they are the most useful words in a document with no evidence in it.** ⚠ _It is not possible to say what the uptake will be without the 2024 register._ **That sentence has told a donor where to look.** _Uptake is expected to be high_ **has told them nothing and invited the one question nobody can answer.**',
  '**And the arithmetic, which is the argument.** ⚠ **A claim at eight needs no apparatus round it.** **A claim at four collects three sentences of defence, because the writer knows it is thinner than it should be.** **Mrs Tarabishi\'s second chapter is nine hundred words shorter and says more** — **and the nine hundred words were all protection of sentences that did not need protecting.**',
  '**What the reader takes.** ⚠ **A registration officer reads three degrees and knows which three.** _I cannot verify this_ · _I accept this_ · _this is agreed_. **The nine are for writing with; the reader sorts your sentences into their own three** — **and a document written at one degree gives them nothing to sort, so they sort the whole of it into the first.**',
  '**Pronunciation.** 🔊 **Track 9.2** **Read a degree-eight sentence aloud with no hedge in the voice.** ⚠ _The evidence establishes that the second sample was available in eleven of the thirty-one._ **The giveaway is a rise at the end, which turns a finding into an offer.** **Fall on the last three words.** **In a viva the fall is what gets the sentence accepted and the rise is what gets it examined.**',
  '**Practise:** Write the same claim at three different degrees, and say which you would defend. **1** at two  **2** at five  **3** at eight  **4** one where the honest degree is one  **5** one where you have been writing at four and would defend at eight — and say what the four cost you',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **which of the nine degrees it is** and **which degree the writer could defend from what they hold.** ⚠ **Two rows on each card are written below the degree the evidence would carry.** **B must say so and give the stronger version.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_It may be that the second sample carries diagnostic weight._', '_It is possible that the printed route explains the eleven._'],
  ['_⚠ It may be that selection does not explain the rate; we tested it in four governorates._', '_⚠ It is possible that the frame does not meet the specification; fifty-five of fifty-six positions read M12._'],
  ['_It is not possible to say what the uptake will be without the 2024 register._', '_It is not possible to say when the roller went out of service._'],
  ['_⚠ Perhaps the covering note explains the fall; it was adopted in all five branches._', '_⚠ We suspect the door reading is a degree high; the probe certificate is four years old._'],
  ['_It is not in dispute that forty-one admissions were culture-negative._', '_It is not in dispute that the minute records option three._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the degree written, and the degree the evidence would carry. ⚠ **Rows 2 and 4 on both cards are underwritten** — **a test in four governorates carries degree eight and fifty-five of fifty-six carries at least six** — **and the second half of each sentence is the evidence the first half is ignoring.** **Rows 3 are correctly at degree one and should be left there**: naming the document that is missing is the strongest thing those sentences can do.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thing you wrote** and mark **every claim sentence with a number from one to nine**, in the margin, as written. ⚠ **Then mark each one again with the degree you would defend.** **Two columns of numbers.** **In this class between a third and a half of the pairs differ**, and they differ in one direction: **the written degree is lower than the defensible one.**'));
out.push(p('**b**  Swap. Your partner reads **only your two columns of numbers** and says **which sentence is the one you care about.** ⚠ **They find it from the arithmetic alone**, because it is the sentence with the largest gap between the two columns — and in most cases the writer has never said so to anybody.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi\'s referee wrote twenty-two words and they were the whole report: the author appears uncertain about everything and certain about one thing, and I am unable to tell which is which. Mrs Khoury asked which one she was certain about, and it was the selection test, which is the only original thing in the chapter, and she had written it may be that selection does not explain the rate, which is degree four, and she would defend it at degree eight. Dr Qabbani asked about the rest, and the rest is at four as well: every sentence in eleven pages written as it may be, because that is how one is taught to sound, so the one sentence she would die for is in the same clothes as the eight she would give away. Mrs Khoury said that is the whole fault and it is not a fault of modesty — a writer who uses one degree throughout has told the reader nothing about any of their sentences, and a referee who cannot tell which sentence to attack attacks the paper. Mr Shihabi said nine seems a great many, and Mrs Oueidat said nine is what the courts use and they did not invent it for pleasure, and each one commits you to something different and a judge knows all nine. Mr Tayara asked whether a reader really feels the difference between three and four, and between three and four very little, which is why there are nine and not three: the distances that matter are two to five and five to eight, and those two jumps are where readers change what they do. Mrs Ajouz said a registration officer does not read nine degrees, and a registration officer reads three and knows which three — I cannot verify this, I accept this, this is agreed — and a file written entirely at one degree gives them nothing to sort. Mrs Rizk said there is no evidence at all in half of her proposals, and then degrees one and two are the most useful words in the document: a proposal that says it is not possible to say what the uptake will be without the 2024 register has told a donor where to look. Mr Attar asked whether this is not simply hedging with more words, and Mrs Tarabishi said it is the opposite and the arithmetic says so: her second chapter has three sentences at degree eight and one at nine, and about forty at five and below, and it is nine hundred words shorter than the first version. Mr Zahreddine said his opinions have used four of the nine for twenty years without a name for them, and Mrs Oueidat named them: I am unable to say, consistent with, on the balance of the information available, and not in dispute. And Mrs Tarabishi said the thing she will take away is the referee\'s twenty-two words: he did not say the chapter was wrong and he did not say it was weak, he said he could not tell which sentence to argue with._'));
out.push(p('**Listener task:** write your two columns of numbers, and the sentence with the largest gap.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section Mrs Tarabishi rewrote after the referee\'s report. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _chapter 4, section 4.6: what this chapter establishes and what it does not_ · **2 May**',
  '**This section states the chapter\'s findings at the degree each of them will be defended at.** **Three are put forward as established, one as not in dispute, and the remainder as consistent with the evidence or weaker.**',
  '**Not in dispute.** **Repayment on the four governorates\' small agricultural loans ran at eighty-one per cent of loans issued between 2019 and 2024.** **Both lenders publish the series, the figures agree to the nearest point, and no author in this literature questions them.**',
  '**Established by this chapter.** **First, that the published rate cannot be compared with the rates of the two commercial lenders, which count a loan as repaid at a different moment.** **Second, that selection does not explain the rate in the four governorates, on the comparison of accepted and refused applicants in the same villages in the same season.** **Third, that the refusal rate fell from thirty-one per cent to nine over the period.** ⚠ **I would defend each of these three against a referee and I say so here because the earlier version did not.**',
  '**Consistent with the evidence, and no stronger.** **That the fall in refusals followed the 2022 variation in terms rather than a change in the applicant population.** **Nothing I hold contradicts this and nothing establishes it**, and the distinction matters because a reader who takes it as established will cite it against the lenders.',
  '**Also consistent with the evidence.** **That the two lenders\' differing definitions of repayment account for the whole of the gap between their published rates and the series used here.** **The gap is four points on one calculation and nine on another, and the two calculations differ in which year is taken as the base.** ⚠ **I set both out in the appendix and adopt neither**, because the choice of base year is not a question this chapter is in a position to settle.',
  '**It cannot be excluded that the selection comparison is affected by village-level differences I have not measured.** **I asked the question and the data do not answer it.** ⚠ **This is a sentence at the second degree and not an apology**; it tells a reader exactly where the chapter is open.',
  '**It is not possible to say what the rate would have been without the 2022 variation.** **That requires the refused applicants\' records, which exist and are not published.** **I have asked twice and name the office that holds them in the appendix.**',
  '**One finding has been withdrawn since the first version.** **The earlier draft stated that the 2022 variation raised repayment among first-time borrowers.** ⚠ **It rested on a sub-sample of ninety-one and I would not defend it above the third degree**, so it is not in this chapter, and the sub-sample is reported in the appendix for anybody who wants it.',
  '**And one note about this section rather than about the findings.** **The previous version put all nine findings at the same degree.** ⚠ **The referee replied that he could not tell which sentence to argue with**, which was fair, and this section exists so that the next one can.',
]));
out.push(item('1', 'What does she put at the highest degree, and on what basis?'));
out.push(item('2', 'Which finding is only consistent with the evidence, and why does the distinction matter?'));
out.push(item('3', 'What does she say about the previous version of this section?'));
out.push(writers([
  'A section that states findings at their degrees: **say at the top that this is what the section does** → **what is not in dispute, and who agrees it** → **what the section establishes, and that you will defend it** → **what is only consistent with the evidence, and what a reader who overreads it would do** → **what cannot be excluded** → **what is not possible to say, and which document would answer it** → **and what the previous version did.**',
  '⚠ **Say at the top that the degrees are deliberate.** _This section states the chapter\'s findings at the degree each of them will be defended at._ **A reader who is not told assumes the variation is carelessness**, and a referee who assumes that marks the strong sentences down to the level of the weak ones.',
  '**Give the established claims a sentence of defence and no more.** ⚠ _I would defend each of these three against a referee._ **A claim at degree eight needs no apparatus** — **and three sentences of protection round it tell a reader you do not believe your own degree.**',
  '**Say what a reader who overreads would do.** ⚠ _A reader who takes it as established will cite it against the lenders._ **This is the sentence that makes the fifth degree hold** — **without it, _consistent with_ is read as a modest way of saying _established_, which is exactly how it is usually read.**',
  '⚠ And **name the document for every degree-one sentence.** _That requires the refused applicants\' records, which exist and are not published._ **A sentence at the first degree with no document named is an apology.** **With a document named it is a request**, and somebody may grant it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a section stating findings at their degrees (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **This section states ______________ at the degree each of them will be defended at.**   **Not in dispute.** **______________.** **______________ and ______________ questions it.**   **Established by ______________.** **First, that ______________. Second, that ______________.** ⚠ **I would defend each of these against ______________.**   **Consistent with the evidence, and no stronger.** **That ______________.** **Nothing I hold contradicts this and nothing establishes it**, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The variation of degrees declared at the top',
  'What is not in dispute, with who agrees it',
  'The established claims given one sentence of defence, not three',
  'What a reader who overread the fifth degree would do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their degree-eight sentences**, and the room says whether it would attack any of them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole section (260 words or more), to the shape in the writer\'s box: the declaration, the undisputed, the established, the consistent-with, the cannot-be-excluded, the not-possible-to-say with its document, and what the previous version did.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the degrees declared at the top, one sentence of defence for the established claims, the overreading named, and a document for every degree-one sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a degree-eight sentence twice, once with a rise at the end and once with a fall.** ⚠ **The room says which version it would examine.** **It is the rise, every time** — **because a rise turns a finding into an offer, and an offer is answered.** **Fall on the last three words.** Then the sentence the cycle ends on, which is Mrs Tarabishi\'s: **he said he could not tell which sentence to argue with.**'));
out.push(hw('Take **the thing you wrote** and **renumber every claim sentence** in two columns: the degree written, and the degree you would defend. ⚠ **Then rewrite the three sentences with the largest gaps** at the degree you would defend, and count what the rewriting removes. **In this class it has removed between two hundred and nine hundred words every time.** **Bring the two columns and the count.** **9.2 says what your evidence is consistent with and what it excludes**, which is the pair of sentences the fifth degree is made of.'));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  What it is consistent with, and what it excludes'));
out.push(p('**Function:** saying what your evidence is consistent with and what it excludes   ·   **Grammar:** _consistent with_ · _we are unable to exclude_ · _does not support_   ·   **Pronunciation:** _excludes_ said as a finding and not as a refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your strongest sentence again, and what its evidence rules out.** ⚠ **Not what it shows: what it makes impossible.** Your teacher writes the ten answers on the board. **In most classes four or five of the ten cannot answer at all**, and that is the finding of the cycle: a writer who cannot say what their evidence excludes does not yet know what it is worth.'));
out.push(board('The evidence supports a staffing explanation.', 'It is consistent with one and excludes nothing.'));
out.push(p('**b**  Which two say what the evidence **excludes**? **1** _The fifty-six readings exclude a bolt of the specified grade at all but one position._  **2** _The readings are consistent with a part delivery of the wrong grade._  **3** _The readings support the view that the frame is substandard._  **4** _We are unable to exclude an amendment to the drawing._  **5** _The diary entries for the ninth and the tenth exclude a pour before the eleventh._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide _supports_ does?   **A** states a finding   **B** **says nothing about how much the evidence narrows the possibilities** — where _consistent with_ and _excludes_ together say exactly how much   **C** overstates the case'));
out.push(p('**b**  Listen again. **1** What did the judge ask Mrs Oueidat about the word _supports_?   **2** What does Mrs Khoury say the three phrases do together?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  Supports, and what it ruled out', [
  ['Ms Huda', 'Mrs Oueidat — the word the judge stopped at.'],
  ['Mrs Oueidat', '⚠ **_Supports._** **The expert had written that the readings support the view that the frame is substandard, and the judge asked what they ruled out.**'],
  ['Mrs Tarabishi', 'And the answer?'],
  ['Mrs Oueidat', '⚠ **A great deal, as it happened.** **Fifty-five of fifty-six positions at 12.0 to 12.2 against a specified M16 rule out a specified-grade frame at all but one position.** **That is an exclusion and it is far stronger than _supports_**, and the expert had thrown it away in one word.'],
  ['Mrs Khoury', '⚠ **Because _supports_ is a direction and not a distance.** **It tells a reader which way the evidence points and nothing about how far.** **_Consistent with_ and _excludes_ are a pair** — **the first says what survives and the second says what does not, and together they draw the whole of the space your evidence leaves.**'],
  ['Dr Qabbani', 'Clinically that is the harder half. We can rarely exclude anything.'],
  ['Mrs Oueidat', '⚠ **Then the third phrase does the work.** _We are unable to exclude._ **It is not a hedge: it says the question was asked and the evidence is silent** — **and a reader who meets it knows that you looked, which _it is possible that_ does not tell them.**'],
  ['Mr Shihabi', 'A desk would cut all three and write _points to_.'],
  ['Mrs Khoury', '⚠ **And a desk is right about the headline and wrong about the paragraph.** **_Points to_ belongs in eight words above the story.** **In the fourth paragraph the reader is choosing what to do, and the choice is made by the exclusion** — **because what a piece of evidence rules out is what you can act on.**'],
  ['Mrs Ajouz', 'A registration officer only ever asks the exclusion question.'],
  ['Mrs Oueidat', '⚠ **Every careful reader asks it and most of them ask it silently.** **_Could it have been otherwise?_** **A file that answers it before being asked is a file that comes back once rather than three times.**'],
  ['Mr Tayara', 'Is there a form of words for a school report?'],
  ['Mrs Khoury', '⚠ **The same three, and they survive translation into any register.** _The attendance record is consistent with illness and excludes the explanation given in the letter._ **Eighteen words, and nobody has to be accused of anything** — **which is why these phrases outlive every other technique in this unit.**'],
  ['Mrs Rizk', 'Mine excludes nothing. I have no evidence at all.'],
  ['Mrs Oueidat', '⚠ **Then say so in the exclusion form and the sentence becomes useful.** _Nothing in the register excludes an uptake of ten per cent or of sixty._ **A donor reading that knows the range is unbounded and knows why** — **and that is a stronger paragraph than any estimate you could have invented.**'],
  ['Jad', 'How do you find the exclusion? I never see it.'],
  ['Mr Zahreddine', '⚠ **You write down every explanation you can think of and strike the ones the evidence kills.** **Six or seven, on paper, in about ten minutes.** **What is left standing is _consistent with_ and what is struck out is _excludes_** — **and the list is the whole method and it is not in any book I have read.**'],
  ['Mrs Tarabishi', 'That is what my supervisor does on the back of an envelope.'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is that the judge was not asking for less.** **He was asking for more and the expert heard it as an attack.** **_What does it rule out?_ is the question a reader asks when they want to use what you have written**, and the only honest answers to it are stronger than the sentence it was asked about.'],
]));
out.push(sp());
out.push(box('Language box – consistent with, unable to exclude, does not support', [
  '**The three phrases, and the space they draw.** ⚠ _The evidence is consistent with X_ — **nothing you hold contradicts X.** _The evidence excludes Y_ — **Y is not available, and this is the strongest thing evidence does.** _We are unable to exclude Z_ — **the question was asked and the evidence is silent.**',
  '**Why _supports_ is weaker than any of them.** ⚠ **It is a direction and not a distance.** **It tells a reader which way the evidence points and nothing about how far** — **and the expert who wrote _supports_ had an exclusion of fifty-five positions in fifty-six and gave it away in one word.**',
  '**The method, which takes ten minutes and is in no book.** ⚠ **Write down every explanation you can think of — six or seven — and strike the ones your evidence kills.** **What is left standing is _consistent with_.** **What is struck out is _excludes_.** **The list is the work and the two sentences are what it produces.**',
  '**_Unable to exclude_ is not a hedge.** ⚠ **It says the question was asked.** _It is possible that_ **says only that there is a mechanism.** **A reader who meets _we are unable to exclude_ knows that you looked** — **and in a clinical or a legal document that difference is the difference between a report and an opinion.**',
  '**And where you hold no evidence at all.** ⚠ _Nothing in the register excludes an uptake of ten per cent or of sixty._ **The exclusion form still works and it is more useful than any estimate.** **A reader learns that the range is unbounded and learns why**, and that is a paragraph a donor can act on.',
  '**The question every careful reader asks silently.** ⚠ _Could it have been otherwise?_ **A document that answers it before being asked comes back once instead of three times** — **and the answer is two sentences long, one for what survives and one for what does not.**',
  '**Pronunciation.** 🔊 **Track 9.4** **Say _the readings exclude a specified-grade frame_ with the stress on _exclude_ and the pitch level.** ⚠ **A rise on _exclude_ makes it sound like a refusal to help**, which is how half of any room first reads the word. **Level, it is a finding**, and the strongest one in the document.',
  '**Practise:** Say what it is consistent with and what it excludes. **1** fifty-five readings of fifty-six  **2** a diary with two entries  **3** a case where nothing can be excluded  **4** a register that excludes no figure at all  **5** one where the exclusion is stronger than the claim the writer made — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the evidence from the card. B lists **the explanations it leaves standing** and **the ones it excludes**, aloud. ⚠ **Two rows on each card exclude nothing at all**, and B must say so rather than straining — **and then say what would have to be added to exclude something.** Change cards.'));
out.push(table(['Card A – the evidence', 'Card B – the evidence'], [
  ['_Fifty-five of fifty-six positions read 12.0 to 12.2 against a specified M16._', '_Eight of the ten with no second sample presented between eight at night and eight in the morning._'],
  ['_⚠ The applicant\'s file was returned quoting one sentence._', '_⚠ Three referees scored the proposal differently._'],
  ['_Diary entries for the ninth and the tenth; nothing for the eleventh._', '_The covering note was adopted in all five branches on the first of March._'],
  ['_⚠ The report runs to two hundred words and the guidance asks for two hundred._', '_⚠ The minute records option three and nobody remembers agreeing it._'],
  ['_Accepted and refused applicants compared in the same villages in the same season._', '_The probe certificate is four years old and the cabinet reads at the door._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what survives, and what is excluded. ⚠ **Rows 2 and 4 on both cards exclude nothing** — **a returned file, three different scores, a word count and an unremembered minute are each consistent with everything** — **and the honest answer names what would have to be added.** **Rows 1, 3 and 5 all carry real exclusions**, and on rows 1 and 5 the exclusion is stronger than the claim the writer actually made.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your strongest sentence** and write **six or seven explanations of the evidence behind it** — ⚠ **on paper, not in your head** — **and strike the ones the evidence kills.** **Then write two sentences: what it is consistent with, and what it excludes.** **In this class the exclusion sentence has been the stronger of the two about two-thirds of the time.**'));
out.push(p('**b**  Swap. Your partner reads **only your exclusion sentence** and says **what they would now do that they could not have done before.** ⚠ **If the answer is nothing, the exclusion is not an exclusion** — **and the commonest reason is that the list was made in somebody\'s head and had three explanations in it instead of seven.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The word the judge stopped at was supports. The expert had written that the readings support the view that the frame is substandard, and the judge asked what they ruled out. Mrs Tarabishi asked what the answer was, and a great deal as it happened: fifty-five of fifty-six positions at 12.0 to 12.2 against a specified M16 rule out a specified-grade frame at all but one position, which is an exclusion and far stronger than supports, and the expert had thrown it away in one word. Mrs Khoury said that is because supports is a direction and not a distance — it tells a reader which way the evidence points and nothing about how far, where consistent with and excludes are a pair, the first saying what survives and the second what does not. Dr Qabbani said clinically that is the harder half because they can rarely exclude anything, and then the third phrase does the work: we are unable to exclude is not a hedge, because it says the question was asked and the evidence is silent, and a reader who meets it knows that you looked. Mr Shihabi said a desk would cut all three and write points to, and Mrs Khoury said a desk is right about the headline and wrong about the paragraph: in the fourth paragraph the reader is choosing what to do, and the choice is made by the exclusion, because what a piece of evidence rules out is what you can act on. Mrs Ajouz said a registration officer only ever asks the exclusion question, and every careful reader asks it and most of them ask it silently — could it have been otherwise? Mr Tayara asked whether there is a form of words for a school report, and the same three, which survive translation into any register: the attendance record is consistent with illness and excludes the explanation given in the letter, eighteen words, and nobody has to be accused of anything. Mrs Rizk said hers excludes nothing because she has no evidence at all, and then say so in the exclusion form and the sentence becomes useful: nothing in the register excludes an uptake of ten per cent or of sixty. Mr Attar asked how you find the exclusion, and Mr Zahreddine said you write down every explanation you can think of and strike the ones the evidence kills — six or seven, on paper, in about ten minutes — and what is left standing is consistent with and what is struck out is excludes. Mrs Tarabishi said that is what her supervisor does on the back of an envelope. And Mrs Oueidat said the thing she will take away is that the judge was not asking for less: he was asking for more and the expert heard it as an attack, and the only honest answers to what does it rule out are stronger than the sentence it was asked about._'));
out.push(p('**Listener task:** write your list of explanations, your two sentences, and which is stronger.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat now files with every summary of expert evidence. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note to the court on the scope of the engineering evidence_ · _the east elevation_ · **4 May**',
  '**This note states what the measurements before the court are consistent with, what they exclude, and what the court is unable to exclude on them.** **It is filed because both experts have used the word _supports_, which gives the court a direction and no distance.**',
  '**What the measurements exclude.** **Fifty-five of the fifty-six positions read between 12.0 and 12.2 millimetres against a specification of M16.** ⚠ **These readings exclude a frame built to the specification at all but one position.** **That is the strongest proposition the evidence carries and neither expert has stated it.**',
  '**What they are consistent with.** **A part delivery of the wrong grade; an amendment to the drawing which has not been produced; a substitution agreed on site and not recorded; and an error in the specification itself.** **Nothing in the fifty-six readings distinguishes these four.**',
  '**On the four, one is narrower than it looks.** **An error in the specification itself would have had to survive the drawing register, the bill of quantities and the contractor\'s own order**, and all three are in evidence and all three say M16. ⚠ **The measurements do not exclude it and the three documents very nearly do**, which is a different kind of proposition and I set it out separately for that reason.',
  '**What the court is unable to exclude.** **That the single reading of 15.9 is a sample position rather than an isolated bolt.** **Both experts examined the frame and neither removed a second bolt in that bay.** ⚠ **The question was asked of both and the evidence is silent**, which is a different matter from its not having been considered.',
  '**What the measurements do not support, in either direction.** **Any proposition about the safety of the frame.** **Neither expert has calculated it and both say so.** **A reader who treats the exclusion above as a finding about safety has gone further than any document before the court.**',
  '**What has been excluded by other evidence and not by these measurements.** **The two photographs filed with the site diary exclude a pour on the ninth or the tenth.** **That exclusion belongs to the diary and not to the frame**, and the two should not be run together, because the first expert measured on two dates and the second on one.',
  '**What would narrow this, and who holds it.** **The delivery notes for the two bays, which the contractor holds, would distinguish the first of the four from the other three.** **The drawing register would distinguish the second.** ⚠ **Either could be produced in a week and neither has been asked for.**',
  '**One matter of language rather than of evidence.** **The first expert writes in Arabic and the second in English, and the English word _nominal_ appears in the second report in the sense of _as designated_.** **I have rendered it so**, and record that the other sense would reverse the paragraph it stands in.',
  '**M. Oueidat** · _court-appointed translator and interpreter_',
]));
out.push(item('1', 'What does she say is the strongest proposition the evidence carries, and who had stated it?'));
out.push(item('2', 'What four explanations survive the measurements, and what distinguishes them?'));
out.push(item('3', 'What does she say the court is unable to exclude, and why is that not the same as its not having been considered?'));
out.push(writers([
  'A note that draws the whole space the evidence leaves: **say at the top that this is what the note does, and why it is needed** → **what the evidence excludes, which is the strongest thing in it** → **what it is consistent with, as a list** → **what cannot be excluded, and that the question was asked** → **what it does not support in either direction** → **what would narrow it and who holds that** → **and anything about language rather than evidence.**',
  '⚠ **Put the exclusion first, not the survivors.** _These readings exclude a frame built to the specification at all but one position._ **It is the strongest proposition in the document** — **and in two-thirds of this class\'s documents it was stronger than the claim the writer made.**',
  '**List what survives, and say that nothing distinguishes them.** ⚠ _A part delivery; an amendment not produced; a substitution agreed on site; an error in the specification._ **Four, and the sentence after them earns the list** — **_nothing in the fifty-six readings distinguishes these four_ is what stops a reader picking the one they prefer.**',
  '**Say that the question was asked.** ⚠ _The question was asked of both and the evidence is silent, which is a different matter from its not having been considered._ **This is the whole value of _unable to exclude_** — **and without the second clause a reader files it under oversight.**',
  '⚠ And **name what would narrow it and who holds it.** _The delivery notes, which the contractor holds, would distinguish the first of the four._ **An exclusion that narrows nothing further is a finished document.** **An exclusion with a named document beside it is a week\'s work for somebody** — **and somebody usually does it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on what your evidence is consistent with and what it excludes (120 words or more).'));
out.push(p('**______________** · _note on the scope of _______________ · **______________**   **This note states what ______________ is consistent with, what it excludes, and what ______________ is unable to exclude on it.**   **What ______________ excludes.** **______________.** ⚠ **This excludes ______________.** **That is the strongest proposition the evidence carries.**   **What it is consistent with.** **______________; ______________; ______________; and ______________.** **Nothing in ______________ distinguishes these four.**   **What ______________ is unable to exclude.** **That ______________.** ⚠ **The question was asked and the evidence is silent.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The exclusion stated first, as the strongest proposition',
  'What survives, as a list, with nothing distinguishing them',
  'The unable-to-exclude sentence saying the question was asked',
  'What would narrow it, with whoever holds it named',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their exclusion sentence**, and the room says what it could now do that it could not before.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the declaration, the exclusion, the survivors, the unable-to-exclude, what it does not support, what would narrow it, and a matter of language or form.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the exclusion first, the survivors listed, the question declared to have been asked, and a named document for what would narrow it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an exclusion sentence twice, once with a rise on _excludes_ and once level.** ⚠ **The room says which version sounds like a refusal to help.** **It is the rise, and about half of any room reads the word that way on the page as well** — **which is why the sentence after it has to say what it makes possible.** Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **the judge was not asking for less, he was asking for more.**'));
out.push(hw('Take **the strongest sentence** again and write **the list of six or seven explanations, on paper**, with the struck-out ones visible. ⚠ **Then show the list to the person who sent your document back** and ask one question: **which of these had you not ruled out when you read it?** **Do not defend anything.** **Bring the list and their answer.** **9.3 writes the limitation that strengthens the claim it limits**, which is the paragraph everybody writes last and nobody writes well.'));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  The limitation that strengthens the claim it limits'));
out.push(p('**Function:** writing the limitation that strengthens the claim it limits   ·   **Grammar:** the limitation paragraph, and where it goes   ·   **Pronunciation:** _therefore_ said as arithmetic and not as apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out your limitations paragraph, and say which page it is on.** ⚠ **If you have not written one, say that instead.** Your teacher writes the ten page numbers on the board. **In most classes eight of the ten are on the last page of the document**, and that single fact is the cycle: a limitation on the last page is read as a withdrawal of everything above it.'));
out.push(board('Limitations: the sample was small and the period short.', 'Two dates five months apart: a difference, therefore, and not a date.'));
out.push(p('**b**  Which two limitations **strengthen** the claim they limit? **1** _The sample was small._  **2** _Further research is needed._  **3** _The comparison is of two dates five months apart and therefore establishes a difference and not a date._  **4** _I did not examine the welds, so nothing here bears on them: the finding is about the bolts and is not weakened by their absence._  **5** _The data were imperfect in several respects._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a limitations paragraph on the last page does?   **A** protects the writer   **B** **reads as a withdrawal of everything above it** — because a limitation with no claim beside it attaches to the whole document   **C** satisfies the guidance'));
out.push(p('**b**  Listen again. **1** What did the other side\'s lawyer do with Mr Zahreddine\'s last paragraph?   **2** What does Mrs Khoury say the word _therefore_ has to be followed by?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  The paragraph that was doing the opposite', [
  ['Ms Huda', 'Mr Zahreddine — the paragraph that was quoted against you.'],
  ['Mr Zahreddine', '⚠ **My last paragraph, which I had written to be honest.** _This opinion is subject to the limitations of a visual inspection and to the documents made available to me._ **Twenty-one words, and the other side read the whole of it to the tribunal, twice.**'],
  ['Mrs Tarabishi', 'But it is true.'],
  ['Mr Zahreddine', '⚠ **Every word of it is true and I would write it again.** **What I would not do again is put it on the last page with nothing beside it** — **because a limitation with no claim beside it attaches itself to everything above it, and I had seven findings above it, six of which it did not touch.**'],
  ['Mrs Khoury', '⚠ **Which is the whole of this cycle and it is a question of position before it is a question of wording.** **A limitation belongs immediately after the claim it limits, in the same paragraph where possible** — **and then it is arithmetic.** **On the last page it is a mood.**'],
  ['Mrs Oueidat', 'The tribunal quoted it in the award. I have the sentence.'],
  ['Dr Qabbani', 'And the rewritten version?'],
  ['Mr Zahreddine', '⚠ **Seven limitations, one under each finding, and each of them with _therefore_ in it.** _The comparison is of measurements taken on two dates five months apart; it therefore establishes a difference and not the date on which the difference arose._ **That sentence has been quoted three times since and every time for me.**'],
  ['Mrs Khoury', '⚠ **Because _therefore_ has to be followed by what the claim does cover.** **A limitation that stops at what you did not do is a subtraction.** **A limitation that says _therefore this finding is about X and not about Y_ has drawn a boundary** — **and a boundary is a thing a reader can rely on.**'],
  ['Mr Shihabi', 'A desk cuts the second half.'],
  ['Mrs Khoury', '⚠ **A desk cuts the whole paragraph, and should.** **In copy the boundary goes inside the sentence** — _on the readings taken, which are of bolt diameter and not of weld_ — **which is 4.5 for the fourth time and the class should by now be able to see it coming.**'],
  ['Mrs Ajouz', 'Our forms have a box headed Limitations.'],
  ['Mrs Oueidat', '⚠ **Then fill the box and write the real ones where they belong as well.** **A box on a form is answered for the form\'s sake and read by nobody** — **and the officer who returns your file is reading the paragraph your finding is in, not the box at the bottom of page nine.**'],
  ['Mr Tayara', 'Is there a number? How many limitations is honest?'],
  ['Mr Zahreddine', '⚠ **One for each finding, which in my opinions is between four and eight.** **Not a list of twelve** — **a list of twelve is the same mood as a paragraph of twenty-one words and it is read the same way.** **The test is that each limitation names a finding.**'],
  ['Mrs Rizk', 'And where there is genuinely a limitation on the whole document?'],
  ['Mrs Khoury', '⚠ **Then it goes first and not last, and it says what the document is therefore for.** _This proposal rests on the 2019 register and therefore describes the position as it was before the two districts were merged._ **First, and a donor reads the rest knowing what it is.**'],
  ['Jad', 'That is the opposite of everything I was taught.'],
  ['Mrs Tarabishi', '⚠ **It is the opposite of what we were all taught, and the examination has been quietly asking for it for years.** **A limitation at the end is a convention of the form and not of the reading** — **and the people who mark papers, award contracts and return files all read from the top.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the word _twice_.** **He read it to the tribunal twice** — **once to show that I was honest and once to show that nothing I had written could be relied upon**, and the same twenty-one words did both jobs, and I had given him them.'],
]));
out.push(sp());
out.push(box('Language box – the limitation that strengthens', [
  '**Position first, wording second.** ⚠ **A limitation belongs immediately after the claim it limits, in the same paragraph where possible.** **On the last page, with nothing beside it, it attaches itself to everything above** — **and a reader with seven of your findings above it discounts all seven.**',
  '**The sentence shape, and _therefore_ is the hinge.** ⚠ _The comparison is of two dates five months apart; it therefore establishes a difference and not the date on which it arose._ **A limitation that stops at what you did not do is a subtraction.** **One that says what the finding is therefore about has drawn a boundary**, and a boundary can be relied on.',
  '**One limitation for each finding.** ⚠ **Four to eight in a long document.** **A list of twelve is the same mood as a sentence of twenty-one words and is read the same way** — **and the test is mechanical: every limitation must name the finding it limits.** **If it names none, it limits everything.**',
  '**And the limitation that really is about the whole document goes first.** ⚠ _This proposal rests on the 2019 register and therefore describes the position before the two districts were merged._ **First, and the reader reads the rest knowing what it is** — **where the same sentence at the end reads as a confession.**',
  '**Why the form\'s box is not enough.** ⚠ **A box headed _Limitations_ is answered for the form\'s sake and read by nobody.** **Fill it, and write the real limitations where they belong as well** — **because the officer who returns your file is reading the paragraph your finding is in and not the box on page nine.**',
  '**The quotation test, which is the whole point of the cycle.** ⚠ **Ask of each limitation: could the other side read this aloud against me?** **A limitation with no _therefore_ can be read twice — once to show you are honest and once to show that nothing you wrote can be relied upon.** **A limitation with a boundary in it can only be read for you.**',
  '**Pronunciation.** 🔊 **Track 9.6** **Say _it therefore establishes a difference and not a date_ with the stress on _difference_ and _date_ and none on _therefore_.** ⚠ **Stress on _therefore_ makes it an apology**, which is how most people say it, and the apology is audible in a viva and in a tribunal. **Flat on _therefore_, and the two nouns carry the sentence.**',
  '**Practise:** Write the limitation under the claim, with a boundary. **1** two dates five months apart  **2** a document you have not seen  **3** a part of the work you did not examine  **4** a limitation on the whole document — and put it first  **5** one that the other side could read aloud against you — and repair it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim and the limitation from the card. B says **whether the limitation draws a boundary or subtracts**, and rewrites it with _therefore_. ⚠ **Two rows on each card could be read aloud against the writer.** **B must say which half the other side would read.** Change cards.'));
out.push(table(['Card A – claim and limitation', 'Card B – claim and limitation'], [
  ['_Fifty-five positions read M12. · I measured on two dates five months apart._', '_Nine of eleven came from paper. · October may be unrepresentative._'],
  ['_⚠ The frame does not meet the specification. · This opinion is subject to the limitations of a visual inspection._', '_⚠ The covering note explains the fall. · The data are imperfect in several respects._'],
  ['_Eleven of thirty-one had a second sample. · I have not seen the service log._', '_Repayment ran at eighty-one per cent. · The refused applicants\' records are not published._'],
  ['_⚠ The file meets the guidance. · Further work is needed._', '_⚠ The rota covers the Saturday shift. · The sample was small._'],
  ['_I did not examine the welds. · The finding is about the bolts._', '_The protocol covers the four minutes. · It says nothing about the record._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** boundary or subtraction, and the rewritten sentence. ⚠ **Rows 2 and 4 on both cards are the readable-aloud ones** — **_subject to the limitations of a visual inspection_, _imperfect in several respects_, _further work is needed_ and _the sample was small_ each attach to the whole document and name no finding.** **Rows 1, 3 and 5 all name a finding already**, and the repair on those three is only to add the _therefore_ half.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your document** and move **every limitation to the paragraph of the claim it limits.** ⚠ **Then write the _therefore_ half for each one.** **Count how many limitations are left over with no finding to attach to.** **In this class the number has been between one and four, and those are the ones that were doing the damage.**'));
out.push(p('**b**  Swap. Your partner reads **only your limitations** and says, for each, **which finding it belongs to.** ⚠ **Where they cannot tell, the limitation is still attached to everything** — **and the repair is not softer wording but a named finding.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine\'s last paragraph was the one quoted against him, and he had written it to be honest: this opinion is subject to the limitations of a visual inspection and to the documents made available to me, twenty-one words, and the other side read the whole of it to the tribunal twice. Mrs Tarabishi said but it is true, and every word of it is true and he would write it again — what he would not do again is put it on the last page with nothing beside it, because a limitation with no claim beside it attaches itself to everything above it, and he had seven findings above it, six of which it did not touch. Mrs Khoury said that is the whole of the cycle and it is a question of position before it is a question of wording: a limitation belongs immediately after the claim it limits, and then it is arithmetic, where on the last page it is a mood. Mrs Oueidat said the tribunal quoted it in the award. Dr Qabbani asked about the rewritten version, and seven limitations, one under each finding, each with therefore in it: the comparison is of measurements taken on two dates five months apart and therefore establishes a difference and not the date on which the difference arose, and that sentence has been quoted three times since and every time for him. Mrs Khoury said that is because therefore has to be followed by what the claim does cover — a limitation that stops at what you did not do is a subtraction, and one that says this finding is about X and not about Y has drawn a boundary, and a boundary is a thing a reader can rely on. Mr Shihabi said a desk cuts the second half, and a desk cuts the whole paragraph and should, because in copy the boundary goes inside the sentence. Mrs Ajouz said their forms have a box headed Limitations, and then fill the box and write the real ones where they belong as well, because the officer who returns your file is reading the paragraph your finding is in. Mr Tayara asked how many limitations is honest, and one for each finding, which in Mr Zahreddine\'s opinions is between four and eight, and not a list of twelve. Mrs Rizk asked about a limitation on the whole document, and then it goes first and not last, and it says what the document is therefore for. Mr Attar said that is the opposite of everything he was taught, and Mrs Tarabishi said it is the opposite of what they were all taught, and the people who mark papers, award contracts and return files all read from the top. And Mr Zahreddine said the thing he will take away is the word twice: the lawyer read it to the tribunal once to show that he was honest and once to show that nothing he had written could be relied upon, and the same twenty-one words did both jobs._'));
out.push(p('**Listener task:** write your left-over limitations, and the finding each one should attach to.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section Mr Zahreddine now writes into every opinion. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _opinion on the east elevation: findings and the boundary of each_ · **6 May**',
  '**This opinion states seven findings and the boundary of each of them in the same paragraph.** **There is no limitations section at the end.** ⚠ **A limitation printed where there is no claim beside it attaches itself to every finding above it, and six of these seven are not touched by any of the limitations below.**',
  '**Finding 1, and its boundary.** **Fifty-five of fifty-six positions on the east elevation read between 12.0 and 12.2 millimetres against a specification of M16.** **The measurements were taken on two dates five months apart, in August and in January, with the frame in use between them.** ⚠ **They therefore establish a difference between the installed sizes and the specification, and not the date on which the difference arose.**',
  '**Finding 2, and its boundary.** **The single reading of 15.9 is the only exception on the elevation.** **I removed one bolt in that bay and no second bolt.** **This finding is therefore about one position and is not a sample of the bay**, and anybody wishing to treat it as a sample will need a second removal, which takes an afternoon.',
  '**Finding 3, and its boundary.** **The drawing register, the bill of quantities and the contractor\'s order all specify M16.** **I have read all three in copy and none in the original.** **The finding is therefore about what the three documents say and not about whether they were amended**, and an amendment, if one exists, would be in the register and not in my copies.',
  '**Finding 4, and its boundary.** **I did not examine the welds and have not been asked to.** ⚠ **Nothing in this opinion bears on them.** **The three findings above are about bolt diameter and are not weakened by the absence of a weld inspection**, because a weld inspection could not change a diameter.',
  '**Finding 5, and its boundary.** **I have not calculated the frame on the installed sizes.** **No finding here is about the safety or the adequacy of the frame**, and a reader who takes finding 1 as a finding about safety has gone further than this opinion goes. **The calculation would take about a day and a half.** **It has not been instructed and I have not done it on my own account.**',
  '**Finding 6, and its boundary.** **The elevation I inspected is the east one, which is the elevation I was instructed to inspect.** **I did not inspect the north, the south or the west.** ⚠ **Every finding above is therefore about the east elevation**, and nothing in this opinion suggests that the other three are either the same or different.',
  '**One limitation that is about the whole opinion, which is why it is here and not at the end.** **I attended the site twice and did not see the frame opened up.** ⚠ **Everything above is therefore from the surface and from documents**, and no finding in it depends on anything I was not shown.',
  '**F. Zahreddine** · _structural engineer_',
]));
out.push(item('1', 'Why does the opinion have no limitations section at the end?'));
out.push(item('2', 'What boundary does the second finding have, and what would be needed to widen it?'));
out.push(item('3', 'Why does he say the bolt findings are not weakened by the absence of a weld inspection?'));
out.push(writers([
  'An opinion whose limitations strengthen it: **say at the top that each finding carries its own boundary and that there is no section at the end** → **each finding, with its boundary in the same paragraph and a _therefore_** → **the finding that is only a refusal, with what it does not weaken** → **the territory you have not entered at all** → **and the whole-document limitation, placed where the reader meets it first.**',
  '⚠ **Say why there is no limitations section, in one sentence, at the top.** _A limitation printed where there is no claim beside it attaches itself to every finding above it._ **Without that sentence a reader trained on the convention looks for the section and distrusts a document that has not got one.**',
  '**Every boundary needs the _therefore_ half.** ⚠ _They therefore establish a difference between the installed sizes and the specification, and not the date on which the difference arose._ **The first half is what you did not do and the second is what the finding is for** — **and only the second can be quoted for you.**',
  '**Say what a limitation does not weaken.** ⚠ _A weld inspection could not change a diameter._ **This is the sentence that stops a reader discounting findings a limitation does not touch**, and it is the repair for the twenty-one words read to the tribunal twice.',
  '⚠ And **put the whole-document limitation first and give it a _therefore_ too.** _Everything above is therefore from the surface and from documents, and no finding in it depends on anything I was not shown._ **Last, it is a confession; first, it is the scope of the document** — **and the reader reads on knowing what they have.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a document whose findings carry their own boundaries (120 words or more).'));
out.push(p('**______________** · _______________: findings and the boundary of each_ · **______________**   **This ______________ states ______________ findings and the boundary of each in the same paragraph.** **There is no limitations section at the end.** ⚠ **A limitation printed where there is no claim beside it ______________.**   **Finding 1, and its boundary.** **______________.** **______________.** ⚠ **It therefore establishes ______________, and not ______________.**   **Finding 2, and its boundary.** **______________.** **This finding is therefore about ______________ and is not ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The absence of a limitations section explained at the top',
  'A boundary in the same paragraph as each finding',
  'A _therefore_ half on every boundary',
  'What the limitations do not weaken, said expressly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one finding with its boundary**, and the room says which half the other side would read aloud.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole document (260 words or more), to the shape in the writer\'s box: the declaration, the findings each with a boundary and a _therefore_, what is not weakened, the territory not entered, and the whole-document limitation placed first.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a boundary beside each finding, a _therefore_ half on each, what is not weakened said expressly, and the whole-document limitation placed first.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a boundary sentence twice, once with the stress on _therefore_ and once with it flat.** ⚠ **The room says which version is an apology.** **It is the stressed one, and most people say it that way** — **and the apology is audible in a viva and in a tribunal and on a telephone.** Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **he read it to the tribunal twice, and the same twenty-one words did both jobs.**'));
out.push(hw('Take **your document** and move every limitation under its finding, with a _therefore_ half. ⚠ **Then take the limitations that had no finding to attach to and ask of each: could the other side read this aloud against me?** **Rewrite the ones where the answer is yes.** **Bring the before and after of the limitation that moved furthest.** **9.4 answers an objection without conceding the finding**, which is where this unit stops defending and starts replying.'));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  Answering an objection without conceding the finding'));
out.push(p('**Function:** answering an objection without conceding the finding   ·   **Grammar:** the response letter: concede the method, hold the result   ·   **Pronunciation:** _you are right_ said without a rise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the objection you were sent, read aloud in the objector\'s words**, and then **what you did about it.** ⚠ **Three answers only: withdrew it, defended it, or ignored it.** Your teacher counts. **In most classes six or seven of the ten withdrew something**, and in about half of those the finding did not depend on the thing withdrawn.'));
out.push(board('You are right, and I have withdrawn the claim.', 'You are right about the month. The finding is nine of eleven.'));
out.push(p('**b**  Which two answer the objection **without** conceding the finding? **1** _You are right that the sample is small, and I have therefore withdrawn the claim._  **2** _You are right that one month is a short period. The finding is that nine of the eleven came from a printed sheet, which does not depend on the length of the month._  **3** _The objection is right about the instrument and does not reach the finding: the finding is a count and the instrument affects a rate._  **4** _I do not accept that the sample is small._  **5** _The sample is small, but the finding is nonetheless robust._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about conceding?   **A** never concede   **B** **concede exactly what is right and then show what the finding does not depend on** — because most objections are right about the method and silent about the result   **C** concede everything and resubmit'));
out.push(p('**b**  Listen again. **1** What did Mrs Ajouz withdraw, and what did she discover three weeks later?   **2** What does Mrs Khoury say the second sentence of a response has to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  Right about the method, wrong about the finding', [
  ['Ms Huda', 'Mrs Ajouz — the paragraph you took out and put back.'],
  ['Mrs Ajouz', '⚠ **The officer wrote that one month of one branch cannot support a conclusion about the dispensing route.** **He was right.** **So I took out the paragraph and the figure with it.**'],
  ['Mrs Tarabishi', 'And three weeks later?'],
  ['Mrs Ajouz', '⚠ **Three weeks later I read the paragraph again and the finding was nine of the eleven queries, which is a count.** **His objection was about a rate and I had never claimed a rate.** **I had given away a count because somebody made a correct remark about a proportion.**'],
  ['Mrs Khoury', '⚠ **Which is the commonest thing that happens to a careful writer.** **A correct objection arrives and the writer, being honest, concedes the sentence it landed near** — **and nobody in the exchange ever checks whether the objection reaches the finding.**'],
  ['Dr Qabbani', 'So the response has two sentences.'],
  ['Mrs Khoury', '⚠ **Two, and the second is the one nobody writes.** **One:** _you are right about X._ **Two:** _the finding is Y, which does not depend on X._ **Without the second sentence you have conceded the finding by silence**, and a referee reading only the first will record a concession.'],
  ['Mr Shihabi', 'And if the objection does reach the finding?'],
  ['Mrs Ajouz', '⚠ **Then you concede the finding and say so in one line.** **That is the honest half of the technique and it happened to me in the same file** — **the officer\'s second objection was about the word _satisfactory_ and it reached the finding, and the finding went.**'],
  ['Mrs Oueidat', 'A court calls the first kind an answer and the second an admission, and keeps them apart in the pleadings.'],
  ['Mr Tayara', 'How do you tell which it is?'],
  ['Mrs Khoury', '⚠ **You write the finding out with the objected-to thing removed and see whether it still stands.** **On paper, in one line.** **If it stands, the objection does not reach it** — **and that test takes about forty seconds and almost nobody applies it, because conceding feels like good manners.**'],
  ['Mrs Rizk', 'My donors object to costs and I always cut something.'],
  ['Mrs Oueidat', '⚠ **Then apply the test to the cut.** **A donor who says the staffing share is high is right about a share** — **and if your finding is that three districts are unreached, the share has nothing to do with it and the cut has bought you nothing.**'],
  ['Jad', 'Is there a form of words that does not sound like arguing?'],
  ['Mrs Khoury', '⚠ **There is one and it is four words: _you are right that._** **Said flat, with no rise at the end.** _You are right that one month is a short period._ **A rise turns it into the beginning of an argument** — **and in writing the same rise is a _however_ at the front of the next sentence, which is why the next sentence must not start with one.**'],
  ['Mr Zahreddine', 'I have conceded method in every opinion I have written and never once conceded a measurement.'],
  ['Mrs Ajouz', '⚠ **Which is twenty years of doing this without a name for it**, and the class should notice that the name is all that was missing. **The method is almost always worth conceding and the measurement almost never is**, because a method can be improved next time and a measurement either happened or did not.'],
  ['Mrs Tarabishi', 'My referee objected to the search and the search was the finding.'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the three weeks.** **The paragraph was out of the file for three weeks and the file was with nobody**, waiting for me to be braver — **and it was never a question of bravery.** **It was forty seconds of arithmetic I did not know to do.**'],
]));
out.push(sp());
out.push(box('Language box – concede the method, hold the result', [
  '**The two sentences.** ⚠ **One:** _you are right that one month is a short period._ **Two:** _the finding is that nine of the eleven came from a printed sheet, which does not depend on the length of the month._ **The second is the one nobody writes** — **and without it the first is read as a concession of everything near it.**',
  '**The forty-second test.** ⚠ **Write the finding out with the objected-to thing removed and see whether it still stands.** **On paper, in one line.** **If it stands, the objection does not reach the finding.** **Almost nobody applies the test, because conceding feels like good manners** — **and good manners cost Mrs Ajouz three weeks of a deadline.**',
  '**What is almost always worth conceding, and what almost never is.** ⚠ **Method, period, sample, presentation, order: concede them.** **A measurement, a count, a date, a document you hold: do not** — **because a method can be improved next time and a count either happened or did not.**',
  '**And the honest half, which has to be taught with the rest or the technique becomes a trick.** ⚠ **Where the objection does reach the finding, concede the finding in one line and do not explain.** _The second objection is right and the finding goes._ **One line, and a referee who reads it trusts the other eleven answers.**',
  '**The four words, said flat.** ⚠ _You are right that._ **No rise at the end** — **and in writing, no _however_ at the front of the next sentence.** **The next sentence begins with the finding:** _the finding is…_ **A _however_ there tells the reader the concession was tactical, and they then re-read the first sentence looking for the trick.**',
  '**The distinction the courts make, which is worth having.** ⚠ **An answer and an admission are different documents and are kept apart in the pleadings.** **A response letter that mixes them produces a reader who cannot tell which of your points were given up** — **and a referee who cannot tell assumes all of them.**',
  '**Pronunciation.** 🔊 **Track 9.8** **Say _you are right that one month is a short period_ with no rise on _period_.** ⚠ **The rise is the sound of a sentence that has a _but_ coming**, and a listener hears it before you have said anything. **Flat, and then a pause, and then the finding.** **The pause is where the reader believes the concession.**',
  '**Practise:** Concede and hold. **1** an objection to the period  **2** an objection to the instrument  **3** an objection that reaches the finding — concede it  **4** an objection to a cost where the finding is about coverage  **5** one where you conceded last year and the finding did not depend on it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the objection and the finding from the card. B applies the forty-second test aloud and writes **the two sentences** — or, where the objection reaches the finding, **the one line.** ⚠ **Two rows on each card are objections that do reach the finding.** **B must concede and stop.** Change cards.'));
out.push(table(['Card A – objection and finding', 'Card B – objection and finding'], [
  ['_One month cannot support a conclusion. · Nine of the eleven came from a printed sheet._', '_The sample is small. · Eleven of the thirty-one had a second sample and the first was unavailable._'],
  ['_⚠ The word satisfactory is undefined. · The arrangements have been satisfactory since 2019._', '_⚠ You measured on two dates five months apart. · The frame went out of specification in August._'],
  ['_The instrument may read high. · Four of the twelve certificates are missing._', '_The staffing share is a third of the budget. · Three districts are unreached by the fixed clinics._'],
  ['_⚠ You have not seen the service log. · The roller went out of service before the pour._', '_⚠ Your search is not described. · The literature contains no comparable study._'],
  ['_October may be unrepresentative. · The printed route carries a fifth of the volume._', '_The probe certificate is four years old. · The door reads warmer than the shelf._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two sentences, or the one line. ⚠ **Rows 2 and 4 on both cards reach the finding** — **an undefined word is the finding, a date cannot be had from two dates, an unseen log is the whole of the roller claim, and an undescribed search is the whole of a no-comparable-study claim** — **and the answer there is one line and no explanation.** **Rows 1, 3 and 5 are objections about rates where the findings are counts**, and the second sentence writes itself.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the objection you were sent** and apply the test: ⚠ **write your finding out with the objected-to thing removed.** **One line, on paper.** **Then write either the two sentences or the one line.** **In this class about half the objections have turned out not to reach the finding**, and about a third of those had already been conceded.'));
out.push(p('**b**  Swap. Your partner reads **only your two sentences** and says **whether the second one is doing any work.** ⚠ **In about a third of first attempts it is not** — **because it repeats the finding without saying what it does not depend on, and _which does not depend on_ is the whole of the clause.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The officer wrote that one month of one branch cannot support a conclusion about the dispensing route, and he was right, so Mrs Ajouz took out the paragraph and the figure with it. Mrs Tarabishi asked what happened three weeks later, and three weeks later she read the paragraph again and the finding was nine of the eleven queries, which is a count: his objection was about a rate and she had never claimed a rate, so she had given away a count because somebody made a correct remark about a proportion. Mrs Khoury said that is the commonest thing that happens to a careful writer — a correct objection arrives and the writer, being honest, concedes the sentence it landed near, and nobody in the exchange ever checks whether the objection reaches the finding. Dr Qabbani said so the response has two sentences, and two, and the second is the one nobody writes: you are right about X, and the finding is Y, which does not depend on X, and without the second sentence you have conceded the finding by silence. Mr Shihabi asked what happens if the objection does reach the finding, and then you concede the finding and say so in one line, which is the honest half of the technique and happened to Mrs Ajouz in the same file. Mrs Oueidat said a court calls the first kind an answer and the second an admission and keeps them apart in the pleadings. Mr Tayara asked how you tell which it is, and you write the finding out with the objected-to thing removed and see whether it still stands, on paper, in one line, and that test takes about forty seconds and almost nobody applies it because conceding feels like good manners. Mrs Rizk said her donors object to costs and she always cuts something, and then apply the test to the cut: a donor who says the staffing share is high is right about a share, and if the finding is that three districts are unreached the share has nothing to do with it. Mr Attar asked whether there is a form of words that does not sound like arguing, and there is one and it is four words, you are right that, said flat with no rise at the end. Mr Zahreddine said he has conceded method in every opinion he has written and never once conceded a measurement, and Mrs Ajouz said that is twenty years of doing this without a name for it. And she said the thing she will take away is the three weeks: the paragraph was out of the file for three weeks and the file was with nobody, waiting for her to be braver, and it was never a question of bravery but forty seconds of arithmetic she did not know to do._'));
out.push(p('**Listener task:** write your two sentences, and whether the second does any work.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reply Mrs Ajouz sent with the second version of her file. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _to the registration officer_ · _file 2026/118: reply to the two observations of 14 April_ · **8 May**',
  '**This reply answers both observations in your order.** **The first is answered and the paragraph it concerns stands, in a corrected form.** **The second is admitted and the finding it concerns has been removed.** ⚠ **I have kept the two apart so that you can see which is which.**',
  '**Your first observation: that one month of one branch cannot support a conclusion about the dispensing route.** **You are right that one month is a short period, and a rate taken from it would carry nothing.** **The finding in that paragraph is that nine of the eleven queries arose against a printed sheet, which is a count of the eleven and not a rate of anything.** ⚠ **It does not depend on the length of the month.**',
  '**What I have changed there in any event.** **The paragraph now gives the denominator in the same sentence as the count** — _nine of the eleven queries raised in October_ — **and the words _the printed route is the problem_ have gone, because they were a claim about cause and the count is not one.** **The paragraph is four words shorter than it was.**',
  '**Your second observation: that the word _satisfactory_ is not defined in the file.** **This is admitted and the finding has been removed.** ⚠ **I have not replaced it with a weaker form of the same sentence.** **In its place are the nine entries since 2019, with their dates and the six that concerned the cold chain**, and the officer who reads them can form their own view, which is the right position and not a concession.',
  '**One thing I did not do, and the reason.** **I have not added a second month to the October figures.** **A second month would produce a rate, and a rate is not what the paragraph claims** — **and I would rather answer your observation than build an apparatus round a count that does not need one.**',
  '**A third matter, which you did not raise and which should have been in the first version.** **The eleven queries are the queries recorded in the branch day-book, which is kept by hand and is the only record.** **Three further queries were dealt with at the counter and not recorded**, and I know of them because I dealt with two of them myself. ⚠ **I cannot say whether any of the three arose against a printed sheet**, and the count is therefore of recorded queries and not of queries.',
  '**What would change the first answer.** **If the finding were read as a claim about the route rather than about the eleven queries, your observation would reach it.** **I do not think the corrected paragraph can be read that way**, and if you think it can I would be glad to know which sentence does it, because I will have written it without noticing.',
  '**N. Ajouz** · _pharmacist_ · _file 2026/118_',
]));
out.push(item('1', 'How many observations does she answer, and what does she do with each?'));
out.push(item('2', 'Why does she say the first observation does not reach the finding?'));
out.push(item('3', 'What does she refuse to do, and why?'));
out.push(writers([
  'A reply that concedes the method and holds the result: **which points are answered and which admitted, said at the top** → **the objection in its own words** → **_you are right that…_** → **the finding, and what it does not depend on** → **what you changed anyway** → **the admission in one line, with no weaker replacement** → **and what would change your answer.**',
  '⚠ **Say at the top which is which.** _The first is answered and the paragraph stands. The second is admitted and the finding has been removed._ **A reader who cannot tell an answer from an admission assumes every point was given up** — **which is the court\'s distinction and worth borrowing.**',
  '**Put the objection in the objector\'s words before you touch it.** ⚠ _That one month of one branch cannot support a conclusion about the dispensing route._ **A paraphrase is read as an attempt to soften it**, and an objector who does not recognise their own sentence reads for the paraphrase instead of the answer.',
  '**The clause that does the work is _which does not depend on_.** ⚠ _A count of the eleven and not a rate of anything. It does not depend on the length of the month._ **Without that clause the second sentence only repeats the finding** — **and in a third of first attempts that is all it did.**',
  '⚠ And **admit in one line and do not replace the sentence with a weaker version of itself.** _This is admitted and the finding has been removed._ **Then put the evidence in its place and let the reader form a view.** **A hedged version of a removed claim loses a reader twice** — **for the claim and for the hedge.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a reply that answers one observation and admits another (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________: reply to _______________ · **______________**   **This reply answers ______________ in your order.** **The first is answered and ______________ stands.** **The second is admitted and ______________ has been removed.** ⚠ **I have kept the two apart so that ______________.**   **Your first observation: that ______________.** **You are right that ______________.** **The finding in that paragraph is that ______________, which ______________.** ⚠ **It does not depend on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Which points are answered and which admitted, said at the top',
  'The objection in the objector\'s own words',
  'The _which does not depend on_ clause, doing real work',
  'The admission in one line, with no weaker replacement',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their second sentence**, and the room says what the finding does not depend on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole reply (260 words or more), to the shape in the writer\'s box: the declaration, the objection quoted, the concession, the finding and what it does not depend on, what you changed anyway, the admission, what you did not do, and what would change your answer.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: answers and admissions kept apart, the objection in its own words, the does-not-depend-on clause doing work, and the admission in one line.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads _you are right that one month is a short period_ twice, once with a rise and once flat with a pause after it.** ⚠ **The room says which version it believes.** **It is the flat one with the pause** — **and the pause is where a reader decides the concession is real**, which is why the next sentence must not begin with _however_. Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **it was never a question of bravery.**'));
out.push(hw('Take **the objection you were sent** and apply the forty-second test to it in writing. ⚠ **Then write the reply: the objection in their words, the concession, and the finding with what it does not depend on.** **Send it if you can.** **In this class seven of the ten have sent one and six of the seven have had an answer in under a week.** **Bring the reply and anything that came back.** **9.5 rewrites your own overclaim**, which is the cycle that costs most in this unit, and it runs on the thing you wrote and the thing somebody sent back.'));

// ===================== 9.5 =====================
out.push(pb());
out.push(h2('9.5  Your own overclaim, and what it cost to see it'));
out.push(p('**Function:** rewriting your own overclaim, and saying what it cost you to see it   ·   **Grammar:** the overclaim found by reading your own summary last   ·   **Pronunciation:** reading your own sentence in somebody else\'s voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the first sentence of your summary, and the strongest sentence of your body**, read one after the other. ⚠ **Two sentences, in that order, and nothing between them.** **In most classes the room hears the gap in six or seven of the ten**, without being told what to listen for — and the writer almost never hears it in their own pair.'));
out.push(board('Summary: the printed route is the problem.', 'Body: nine of the eleven came from a printed sheet.'));
out.push(p('**b**  Which two go beyond the evidence in the same sentence? **1** _Nine of the eleven came from printed sheets, which shows that the printed route is the problem._  **2** _Three districts are unreached by the fixed clinics, so the mobile service is the only workable model._  **3** _Repayment ran at eighty-one per cent of loans issued between 2019 and 2024._  **4** _Fifty-five of the fifty-six positions read M12 against a specified M16._  **5** _It is not possible to say what the uptake will be without the 2024 register._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does the room decide an overclaim lives?   **A** in the body   **B** **in the summary** — because a summary is written from memory of what the writer hoped the body would say, and nobody reads the two against each other   **C** in the title'));
out.push(p('**b**  Listen again. **1** What did the donor quote back to Mrs Rizk, and what was in her own body?   **2** What does Mrs Khoury say about the order in which a document should be read?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  The summary nobody reads against the body', [
  ['Ms Huda', 'Mrs Rizk — the sentence the donor sent back.'],
  ['Mrs Rizk', '⚠ **_You say the mobile service is the only workable model._** **He had quoted my own summary at me and asked which of the alternatives I had costed.**'],
  ['Mrs Tarabishi', 'And how many had you?'],
  ['Mrs Rizk', '⚠ **None, and my own body says so.** **Page four says that three districts are unreached and that no comparison of delivery models has been attempted.** **The summary says _the only workable model_ and page four says _no comparison has been attempted_**, and both are mine and they are four pages apart.'],
  ['Mrs Khoury', '⚠ **Which is where overclaims live and it is almost never the body.** **A summary is written last, at speed, from memory of what you hoped the body would say** — **and then nobody reads the two against each other, including the writer, because by then they have read the body eleven times.**'],
  ['Dr Qabbani', 'My abstract is the last thing I write and the first thing anybody reads.'],
  ['Mrs Khoury', '⚠ **Which is the whole mechanism in one sentence.** **The reader\'s first paragraph is the writer\'s last, and it is the only paragraph that was never checked against anything.**'],
  ['Mr Shihabi', 'A desk reads the top and nothing else.'],
  ['Mrs Oueidat', '⚠ **And a court reads the top first and the body afterwards, looking for the difference.** **That is what cross-examination is**: a reader holding your summary in one hand and your evidence in the other, out loud, slowly.'],
  ['Mr Tayara', 'So what is the instruction?'],
  ['Mrs Rizk', '⚠ **Read your summary last, and read it against the body line by line, with the body open.** **Not from memory.** **It took me eleven minutes and found two sentences** — **and I had read that proposal perhaps thirty times without finding either of them.**'],
  ['Mrs Ajouz', 'Why does reading it last work when reading it thirty times did not?'],
  ['Mrs Khoury', '⚠ **Because thirty times you read it as the author.** **Read in the body\'s order and the summary arrives as a claim about a document you have just read**, which is the reader\'s position and not yours. **It is 7.1 in another costume and the class should recognise the mechanism.**'],
  ['Jad', 'And what do you do with the overclaim when you find it?'],
  ['Mrs Rizk', '⚠ **Replace it with what the body says, which is usually shorter.** _Three districts are unreached and no comparison of delivery models has been attempted._ **Fifteen words for eight** — **and the donor\'s question disappears, because the sentence now answers it.**'],
  ['Mr Zahreddine', 'And the cost of not seeing it?'],
  ['Mrs Rizk', '⚠ **Nine weeks and one refusal, and the refusal was correct.** **He was right to refuse a proposal that claimed to have compared models it had not compared** — **and the thing I would want anybody to take from this is that he was not being difficult.**'],
  ['Mrs Tarabishi', 'My referee\'s twenty-two words were about the same fault in the other direction.'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is that I wrote both sentences.** **Nobody misrepresented me and nothing was taken out of context.** **I had written the stronger sentence where it would be read first and the honest one where it would be read fourth**, and I did not know I had done it until he quoted me to myself.'],
]));
out.push(sp());
out.push(box('Language box – finding your own overclaim', [
  '**Where it lives.** ⚠ **In the summary, the abstract, the covering letter, the first paragraph** — **the part written last, at speed, from memory of what you hoped the body would say.** **It is the reader\'s first paragraph and the writer\'s last, and it is the only paragraph that was never checked against anything.**',
  '**The instruction, and it takes about eleven minutes.** ⚠ **Read the body first and the summary last, line by line, with the body open beside it.** **Not from memory.** **Mrs Rizk had read that proposal thirty times as the author and found nothing** — **and found two sentences in eleven minutes reading it in the body\'s order.**',
  '**Why it works.** ⚠ **Read last, the summary arrives as a claim about a document you have just read.** **That is the reader\'s position and it is not available to you in any other order** — **and it is 7.1\'s adversarial read arriving through a different door, which is the fourth time this book has used the same mechanism.**',
  '**The three shapes an overclaim takes.** ⚠ **A count turned into a cause** — _nine of eleven, which shows the printed route is the problem._ **A finding turned into the only remedy** — _three districts unreached, so the mobile service is the only workable model._ **A limit silently dropped** — _the arrangements have been satisfactory_, where the body said _since 2019_.',
  '**The repair is almost always shorter than the overclaim.** ⚠ _Three districts are unreached and no comparison of delivery models has been attempted._ **Fifteen words for eight, and the reader\'s question disappears** — **because the sentence now answers it instead of inviting it.**',
  '**And say what it cost.** ⚠ **Not as an apology: as a figure.** _Nine weeks and one refusal, and the refusal was correct._ **A writer who can put a number on an overclaim does not write the next one** — **and a writer who says only that they were careless writes it again in a fortnight.**',
  '**Pronunciation.** 🔊 **Track 9.10** **Read your summary\'s first sentence aloud in the voice of the person who sent your document back.** ⚠ **Slowly, and with their pause.** **The sentence you wrote at speed cannot survive being read at their speed** — **and the room will hear it go, about three times in four, before the writer does.**',
  '**Practise:** Find the overclaim and replace it with what the body says. **1** a count turned into a cause  **2** a finding turned into the only remedy  **3** a dropped date  **4** a dropped denominator  **5** one where the body and the summary are both yours and four pages apart — and say what it cost',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the summary sentence and then the body sentence from the card. B says **which of the three shapes it is** and **writes the replacement.** ⚠ **Two rows on each card are not overclaims at all** — **the summary is weaker than the body, which is the opposite fault and costs the writer their best finding.** Change cards.'));
out.push(table(['Card A – summary, then body', 'Card B – summary, then body'], [
  ['_The printed route is the problem. · Nine of the eleven came from a printed sheet._', '_The mobile service is the only workable model. · No comparison of models has been attempted._'],
  ['_⚠ It may be that selection does not explain the rate. · We compared accepted and refused applicants in four governorates._', '_⚠ Some concerns remain about the frame. · Fifty-five of fifty-six positions read M12 against a specified M16._'],
  ['_The arrangements have been satisfactory. · Nine entries since 2019, six of them cold-chain._', '_The fall is the covering note. · The note was adopted in all five branches in March._'],
  ['_⚠ The evidence is suggestive. · The diary entries exclude a pour before the eleventh._', '_⚠ Further work may be warranted. · The refused applicants\' records would settle it and are not published._'],
  ['_Second samples raise the diagnosis rate. · Seven of eleven reached a serological diagnosis._', '_The door reads warmer. · The door is about a degree warmer for four minutes after a delivery._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the shape, and the replacement. ⚠ **Rows 2 and 4 on both cards are underclaims** — **a four-governorate comparison written as _it may be_, fifty-five of fifty-six written as _some concerns_, an exclusion written as _suggestive_, and a named document written as _further work may be warranted_.** **The repair there is to put the body\'s sentence in the summary unchanged**, which is 9.1 arriving from the other side.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thing you wrote** and read **the body first and the summary last**, line by line, with the body open. ⚠ **Eleven minutes, timed, and write down every sentence of the summary that the body does not carry.** **In this class the count has been between one and four**, and nobody has ever found none.'));
out.push(p('**b**  Swap. Your partner reads **your summary sentence in the voice of the person who sent your document back** — ⚠ **slowly, with their pause.** **You will hear it go.** **The room hears it about three times in four and the writer hears it about once in two**, which is why somebody else has to read it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence the donor sent back was: you say the mobile service is the only workable model. He had quoted Mrs Rizk\'s own summary at her and asked which of the alternatives she had costed. Mrs Tarabishi asked how many she had, and none, and her own body says so: page four says that three districts are unreached and that no comparison of delivery models has been attempted, so the summary says the only workable model and page four says no comparison has been attempted, and both are hers and they are four pages apart. Mrs Khoury said that is where overclaims live and it is almost never the body — a summary is written last, at speed, from memory of what you hoped the body would say, and then nobody reads the two against each other, including the writer. Dr Qabbani said his abstract is the last thing he writes and the first thing anybody reads, and Mrs Khoury said that is the whole mechanism in one sentence: the reader\'s first paragraph is the writer\'s last, and it is the only paragraph that was never checked against anything. Mr Shihabi said a desk reads the top and nothing else, and Mrs Oueidat said a court reads the top first and the body afterwards looking for the difference, which is what cross-examination is. Mr Tayara asked what the instruction is, and read your summary last, against the body line by line, with the body open, and not from memory: it took eleven minutes and found two sentences in a proposal she had read thirty times. Mrs Ajouz asked why reading it last works when reading it thirty times did not, and Mrs Khoury said because thirty times you read it as the author, and read in the body\'s order the summary arrives as a claim about a document you have just read, which is the reader\'s position and not yours. Mr Attar asked what you do with the overclaim, and replace it with what the body says, which is usually shorter: three districts are unreached and no comparison of delivery models has been attempted, fifteen words for eight. Mr Zahreddine asked the cost of not seeing it, and nine weeks and one refusal, and the refusal was correct. And Mrs Rizk said the thing she will take away is that she wrote both sentences: nobody misrepresented her and nothing was taken out of context, and she had written the stronger sentence where it would be read first and the honest one where it would be read fourth._'));
out.push(p('**Listener task:** write the sentences your body does not carry, and the replacements.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the summary Mrs Rizk wrote for the second version, with her note to her own office underneath. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _application 2026/041, second version_ · _summary_ · **10 May**',
  '**Three of the eleven districts in this governorate are not reached by any fixed clinic.** **The figure is from the 2024 register and the three are named in the first annexe.** **No comparison of delivery models has been attempted in this application and none exists in the published literature for a governorate of this size.**',
  '**What this application asks for.** **A twelve-month mobile service in the three districts, with the arithmetic of the three options we considered set out at page six.** ⚠ **We put the mobile service first and we have not shown that it is the only workable model.** **We have not costed a second fixed clinic or an extension of the existing rounds**, and the first annexe says which figures we would need to do either.',
  '**What is not in dispute.** **The three districts; the 2024 register; that the existing rounds pass within eleven kilometres of all three and stop at the governorate boundary.** **None of the three has been questioned by the regional office in either round.**',
  '**What we are unable to say.** **What the uptake would be.** **Nothing in the register excludes an uptake of ten per cent or of sixty**, and the two comparable projects we have run were in districts with a fixed clinic already in them, which is a different question.',
  '**The three options, in one line each, because a summary should not send a reader to page six to find out what they are.** **One: a twelve-month mobile service in the three districts, which is what this application asks for.** **Two: a second fixed clinic in the largest of the three, which we have not costed and which would serve about half the population of the three.** **Three: an extension of the existing rounds past the governorate boundary, which needs the agreement of a neighbouring office and which we have not sought.**',
  '**What would narrow that, and who holds it.** **The 2024 attendance returns for the two neighbouring governorates, which the regional health office holds.** **We have asked once, in writing, and the request is at the second annexe.**',
  '**And the note to this office rather than to the donor.** ⚠ **The first version of this summary said _the mobile service is the only workable model_, and page four of the same document said that no comparison of models had been attempted.** **Both sentences were mine and they were four pages apart.** **The donor quoted the first back to me and asked which alternatives we had costed, and the answer was none.**',
  '**What it cost, as a figure rather than as an apology.** **Nine weeks and one refusal.** ⚠ **The refusal was correct and I would have made it myself.** **The instruction that found it is to read the body first and the summary last, line by line, with the body open** — **eleven minutes, and it has gone into the office\'s checklist for every application.**',
]));
out.push(item('1', 'What does the second version say about the mobile service, and why?'));
out.push(item('2', 'What is she unable to say, and what would narrow it?'));
out.push(item('3', 'What does she say the overclaim cost, and what found it?'));
out.push(writers([
  'A summary that the body carries: **the finding, with its source** → **what has not been attempted, said in the summary and not only in the body** → **what the application asks for, and what it does not claim** → **what is not in dispute** → **what you are unable to say** → **what would narrow it and who holds it** → **and, for your own office, the overclaim, what it cost as a figure, and what found it.**',
  '⚠ **Put the body\'s refusal in the summary, in the same paragraph as the ask.** _We put the mobile service first and we have not shown that it is the only workable model._ **A refusal that lives on page four and not in the summary is a refusal the reader will never meet** — **and the reader is the one who decides.**',
  '**Replace the overclaim with the body\'s own sentence, which is usually shorter.** ⚠ _No comparison of delivery models has been attempted._ **Eight words.** **The overclaim was fifteen and invited the one question nobody could answer.**',
  '**Say what you are unable to say, in the exclusion form.** ⚠ _Nothing in the register excludes an uptake of ten per cent or of sixty._ **This is 9.2 doing duty in a summary** — **and it is the paragraph that stops a reader inventing a figure of their own and then holding you to it.**',
  '⚠ And **put the cost as a figure.** _Nine weeks and one refusal, and the refusal was correct._ **A number is not an apology and it is the only form of this sentence that changes anybody\'s habits** — **including your own, which is why it belongs in a note to your own office and not to the donor.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a summary your body carries (120 words or more).'));
out.push(p('**______________** · _______________ · _summary_ · **______________**   **______________.** **The figure is from ______________ and ______________.** **No ______________ has been attempted in this ______________.**   **What this ______________ asks for.** **______________.** ⚠ **We put ______________ first and we have not shown that ______________**, because ______________.   **What is not in dispute.** **______________; ______________; ______________.**   **What we are unable to say.** **______________.** **Nothing in ______________ excludes ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The body\'s refusal present in the summary, beside the ask',
  'The overclaim replaced by the body\'s own words',
  'What you are unable to say, in the exclusion form',
  'The cost put as a figure, in the note to your own side',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their summary sentence and then their body sentence**, and the room says whether the body carries the summary.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole summary (260 words or more), to the shape in the writer\'s box: the finding with its source, what has not been attempted, the ask with its refusal, what is not in dispute, what you cannot say, what would narrow it, the overclaim, and what it cost as a figure.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the body\'s refusal in the summary, the overclaim replaced by the body\'s words, the exclusion form used, and the cost given as a figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student hands their summary sentence to somebody else, who reads it aloud in the voice of the person who sent the document back.** ⚠ **Slowly, with the pause.** **The room says whether the sentence survived.** **It does not, about three times in four** — **and the writer hears it this time, because the voice is not theirs.** Then the sentence the cycle ends on, which is Mrs Rizk\'s: **I wrote both sentences, and they were four pages apart.**'));
out.push(hw('Read **the body first and the summary last** of the longest thing you have written this year, line by line, with the body open. ⚠ **Eleven minutes, timed.** **Write down every summary sentence the body does not carry, and replace each with the body\'s own words.** **Then put the cost of one of them as a figure** — **weeks, refusals, or a number of people\'s afternoons.** **Bring the replacements and the figure.** **9.6 writes the response-to-referees letter**, which is this unit\'s new genre and the most precisely shaped document in Book 1.'));

// ===================== 9.6 =====================
out.push(h2('9.6  The response-to-referees letter'));
out.push(p('**Function:** writing the response-to-referees letter   ·   **Grammar:** 260–300 words · point by point in the referee\'s order · one concession and one refusal, both reasoned   ·   **Pronunciation:** _not accepted_ said without defiance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **how many points you were sent, and how many you accepted.** ⚠ **Two numbers, and nothing else.** Your teacher writes the ten pairs on the board. **In most classes the two numbers are the same in seven of the ten** — **everything accepted — and in this class two of those seven went to a third round.**'));
out.push(board('All the points have been addressed.', 'Eleven points: nine accepted, two not, with reasons.'));
out.push(p('**b**  Which two belong in a response-to-referees letter? **1** _I was surprised by the second referee\'s tone._  **2** _All the points have been addressed._  **3** _I have made the changes requested throughout._  **4** _Referee 1, point 3: accepted. The search is now described at page 11, with three numbers._  **5** _Referee 2, point 1: not accepted. The comparison asked for requires the refused applicants\' records, which are not published; the reason is at page 14._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does the room decide the letter is written to?   **A** the referees   **B** **the editor** — who has to decide, has not read the paper twice and is counting your answers against their points   **C** the author\'s supervisor'));
out.push(p('**b**  Listen again. **1** What happened to Mrs Tarabishi\'s first response letter?   **2** What does Mrs Khoury say a letter that accepts everything tells an editor?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  Eleven points, eleven concessions', [
  ['Ms Huda', 'Mrs Tarabishi — the first response letter.'],
  ['Mrs Tarabishi', '⚠ **Eleven points and eleven concessions.** **Four hundred words of _accepted_, _accepted_, _accepted_** — **and it came back for a third round with six new points.**'],
  ['Mrs Khoury', '⚠ **Of course it did.** **A letter that accepts everything tells an editor that the author has no view about their own paper** — **and an editor who learns that sends it to a third referee, because somebody has to have a view and it is not going to be you.**'],
  ['Dr Qabbani', 'That is not what any of us was taught.'],
  ['Mrs Tarabishi', '⚠ **It is the opposite of what I was taught, which was to be grateful.** **And two of the eleven I did not agree with at all.** **I made the changes anyway and the chapter is worse in both places**, and I now have to defend two sentences I do not believe in a viva.'],
  ['Mrs Oueidat', 'A pleading that admits everything is withdrawn, not answered.'],
  ['Mr Shihabi', 'So what is the shape?'],
  ['Mrs Tarabishi', '⚠ **Numbered, in the referee\'s order, with the same numbers they used.** **Each one labelled _accepted_ or _not accepted_, in those two words.** **A page reference for every change.** **At least one reasoned refusal.** **And not a syllable about anybody\'s tone.**'],
  ['Mrs Khoury', '⚠ **The page reference is the half that nobody writes and the only half an editor uses.** _Accepted; the search is now described at page 11, with three numbers._ **Without the page the editor has to find it** — **and an editor with fourteen papers does not find it, they ask the referee to find it, which is a fourth round.**'],
  ['Mr Tayara', 'And the refusal? Is one refusal a rule?'],
  ['Mrs Khoury', '⚠ **It is not a rule and it is almost always available.** **Eleven points from two readers of one paper will contain at least one you can answer** — **and a letter with one reasoned refusal in it reads as the work of somebody who has read their own paper, which makes the other ten concessions worth something.**'],
  ['Mrs Ajouz', 'Mine is a registration officer and there is only one of him.'],
  ['Mrs Oueidat', '⚠ **The shape is identical and the stakes are higher, because he can refuse the file.** **Numbered to his numbers, labelled, paged** — **and the one refusal reasoned, because an officer who has returned a file three times is looking for a reason to stop.**'],
  ['Mrs Rizk', 'How long? Mine run to two pages.'],
  ['Mrs Tarabishi', '⚠ **Twenty-four words for a point you accept and about sixty for one you refuse.** **Six or seven points comes to two hundred and sixty or three hundred, which is the length you will be asked for** — **and mine ran to four hundred and fifty for eleven across two readers, on the same arithmetic.** **Two pages is a letter that is arguing, and an arguing letter is read by the referee and not by the editor.**'],
  ['Jad', 'Why does the tone matter so much?'],
  ['Mrs Khoury', '⚠ **Because the editor is your reader and the referee is not.** **A sentence about anybody\'s tone is a sentence addressed over the editor\'s head to somebody who will never see your letter** — **and the editor reads it as a reason to be careful with you.**'],
  ['Mr Zahreddine', 'I write the same letter to insurers four times a year and nobody has ever taught it.'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the two sentences I do not believe.** **I conceded them to be agreeable and they are in the chapter**, and the viva will ask me about them because they are the weakest things in it — **and the referee who asked for them will not be in the room.**'],
]));
out.push(sp());
out.push(box('Language box – the response-to-referees letter', [
  '**Who it is written to.** ⚠ **The editor, who has to decide, has not read the paper twice, and is counting your answers against the referees\' points.** **Not the referees.** **A letter addressed to the referees is read by the referees, which costs a round.**',
  '**The shape, and it is almost mechanical.** ⚠ **Numbered, in the referee\'s order, with the referee\'s own numbers** → **each point labelled _accepted_ or _not accepted_, in those two words** → **a page reference for every change** → **at least one reasoned refusal** → **nothing about anybody\'s tone.**',
  '**The page reference is the half nobody writes and the only half the editor uses.** ⚠ _Accepted; the search is now described at page 11, with three numbers._ **Without the page the editor must find it, and an editor with fourteen papers does not find it** — **they ask the referee to find it, which is one more round for one missing number.**',
  '**Why a letter that accepts everything costs you a round.** ⚠ **It tells the editor that the author has no view about their own paper**, and somebody has to have one. **Mrs Tarabishi\'s eleven concessions came back with six new points** — **and two of the eleven changes made the chapter worse, and she has to defend both in a viva.**',
  '**The refusal, which is almost always available.** ⚠ **Eleven points from two readers will contain one you can answer.** _Not accepted. The comparison asked for requires the refused applicants\' records, which are not published; the reason is at page 14._ **One reasoned refusal makes the other ten concessions worth something.**',
  '**The length, which decides the reader.** ⚠ **About twenty-four words for a point you accept and sixty for one you refuse.** **_Accepted_, the change, the page.** **Six or seven points comes to 260 to 300 words, which is the length you will be asked for; eleven points across two readers comes to about 450, on the same arithmetic.** **Two pages is a letter that is arguing**, and an arguing letter is read by the referee rather than by the editor, which is the one outcome you cannot recover from.',
  '**Pronunciation.** 🔊 **Track 9.12** **Say _not accepted_ flat, with equal weight on both words and no stress on _not_.** ⚠ **Stress on _not_ is defiance and the room hears it.** **Flat, it is a label** — **and the reason that follows has to begin with the document and not with the referee:** _the comparison requires records that are not published_, **never** _the referee has not understood_.',
  '**Practise:** Label and reason. **1** accepted, with a page  **2** not accepted, with a document  **3** accepted in part, and say which part  **4** a point you cannot answer either way — and say what you have done  **5** one where accepting would make the work worse — and refuse it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the referee\'s point from the card. B gives **the label, the change and the page**, in under twenty-five words. ⚠ **Two rows on each card should be refused.** **B must refuse them and begin the reason with a document.** Change cards.'));
out.push(table(['Card A – the referee\'s point', 'Card B – the referee\'s point'], [
  ['_The search is not described._', '_The sample size is not stated for the sub-analysis._'],
  ['_⚠ Compare your rate with the two commercial lenders\'._', '_⚠ Give the date on which the frame went out of specification._'],
  ['_The limitation section should come earlier._', '_The abstract claims more than the body._'],
  ['_⚠ The literature review should cover 2024 as well._', '_⚠ Add a potency test on two vials of the consignment._'],
  ['_Table 3 has no denominator._', '_The word satisfactory is undefined._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the label, the change and the page, counted in words. ⚠ **Rows 2 and 4 on both cards must be refused** — **the commercial comparison needs records that are not published, a date cannot be had from two dates five months apart, 2024 was outside the stated search window, and a potency test destroys the vials and is outside the instruction.** **Collect the opening words of each refusal**: each must name a document or an instruction, and none a referee.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the points you were sent** and write **the label and the page for each**, in under twenty-five words a point. ⚠ **Then count your refusals.** **If the number is nought, go back and find the one you can answer** — **in this class it has been there every time, and the commonest place it hides is a point that asks for a document nobody holds.**'));
out.push(p('**b**  Swap. Your partner reads **only your labels** and says **what kind of author wrote them.** ⚠ **Eleven _accepted_ in a row produces the same answer every time: somebody with no view of their own paper.** **That is what the editor reads**, and it is the whole argument for the refusal.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi\'s first response letter had eleven points and eleven concessions, four hundred words of accepted, accepted, accepted, and it came back for a third round with six new points. Mrs Khoury said of course it did: a letter that accepts everything tells an editor that the author has no view about their own paper, and an editor who learns that sends it to a third referee. Dr Qabbani said that is not what any of them was taught, and Mrs Tarabishi said it is the opposite of what she was taught, which was to be grateful — and two of the eleven she did not agree with at all, and she made the changes anyway, and the chapter is worse in both places, and she now has to defend two sentences she does not believe in a viva. Mrs Oueidat said a pleading that admits everything is withdrawn and not answered. Mr Shihabi asked what the shape is, and numbered, in the referee\'s order, with the same numbers they used; each one labelled accepted or not accepted in those two words; a page reference for every change; at least one reasoned refusal; and not a syllable about anybody\'s tone. Mrs Khoury said the page reference is the half nobody writes and the only half an editor uses, because an editor with fourteen papers does not find the change, they ask the referee to find it, which is a fourth round. Mr Tayara asked whether one refusal is a rule, and it is not a rule and it is almost always available: eleven points from two readers of one paper will contain at least one you can answer, and a letter with one reasoned refusal reads as the work of somebody who has read their own paper. Mrs Ajouz said hers is a registration officer and there is only one of him, and the shape is identical and the stakes are higher because he can refuse the file. Mrs Rizk asked how long, and two hundred and sixty to three hundred words for eleven points, about twenty-four words a point. Mr Attar asked why the tone matters so much, and because the editor is your reader and the referee is not. Mr Zahreddine said he writes the same letter to insurers four times a year and nobody has ever taught it. And Mrs Tarabishi said the thing she will take away is the two sentences she does not believe: she conceded them to be agreeable and they are in the chapter, and the viva will ask her about them because they are the weakest things in it, and the referee who asked for them will not be in the room._'));
out.push(p('**Listener task:** write your labels, your page references, and the number of your refusals.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mrs Tarabishi sent with the second version. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _to the editor_ · _manuscript 2026-114, second version: response to the referees_ · **12 May**',
  '**Eleven points were raised.** **Eight are accepted, one in part, and two are not, and the two are at the end of this letter with their reasons.** **Every change is paged.**',
  '**Referee 1, point 1.** **Accepted.** **The search is described at page 11: four databases, sixty-one papers identified, fifty-three read, eight not obtainable and listed at annexe B with their titles, their journals and the date of each request.**',
  '**Referee 1, point 2.** **Accepted.** **Table 3 now carries its denominator in the table and in the caption, page 14.**',
  '**Referee 1, point 3.** **Accepted in part.** **The limitation now sits under each finding rather than in a section, pages 12 to 19.** ⚠ **The section the referee asked for has not been added**, because a limitation printed where there is no claim beside it attaches to every finding above it, and six of the seven are untouched by any of them. **The reason is at page 12.**',
  '**Referee 1, points 4 and 5.** **Accepted.** **The abstract now says what the chapter establishes and what it does not, page 3, and the two sentences the referee quoted have gone.** **The abstract is ninety words shorter than it was.**',
  '**Referee 2, point 1.** **Accepted.** **The selection comparison is set out at pages 15 to 17, with the four governorates and the two seasons named.**',
  '**Referee 2, point 2.** **Accepted.** **The three figures asked for — accepted, refused and the difference between them — are at page 16, with the standard error of each.**',
  '**Referee 2, point 3.** **Accepted.** **The 2019 series is identified in a footnote by its publishing office and its year of issue, page 15, and wherever else either series is used.**',
  '**Referee 2, point 4.** **Accepted.** **The two definitions of _repayment_ are distinguished at page 15 and used consistently thereafter, and the index of terms at page 24 carries both.**',
  '**Referee 2, point 5. Not accepted.** **The comparison with the two commercial lenders cannot be made from anything published.** **The two count a loan as repaid at a different moment, and the gap this produces is four points on one calculation and nine on another; both are set out at page 18 and neither is usable.** ⚠ **The chapter now says so rather than attempting the comparison**, and the sentence that attempts it in the first version has been removed with the paragraph that defended it.',
  '**Referee 2, point 6. Not accepted.** **The date on which the fall in refusals began cannot be established from the series.** **It requires the refused applicants\' records, which exist and are not published; the office that holds them is named at page 20 and has been asked twice in writing.** **The chapter states the position at the second degree and names the document.**',
  '**One change neither referee asked for.** **Chapter 4 previously reported a rise in repayment among first-time borrowers from a sub-sample of ninety-one.** **I would not defend it and it has been removed**, and the sub-sample is at annexe C with its size for anybody who wants it, and is not referred to anywhere in the text.',
  '**R. Tarabishi** · _manuscript 2026-114_',
]));
out.push(item('1', 'How many points were accepted, and where are the refusals placed?'));
out.push(item('2', 'What is accepted in part, and what reason is given for the rest?'));
out.push(item('3', 'What did she change that neither referee asked for, and why?'));
out.push(writers([
  'A response letter in 260 to 300 words: **the arithmetic of the points in the first line** → **each point numbered to the referee\'s own number** → **the label, in two words** → **the change, with its page** → **the partial acceptance, with the reason for the part refused** → **the refusals at the end, each beginning with a document** → **and one change nobody asked for.**',
  '⚠ **Give the arithmetic first.** _Eleven points were raised. Nine are accepted and two are not._ **An editor who has that sentence can read the rest as a check-list** — **and an editor who has not got it reads the whole letter looking for how many you gave away.**',
  '**Page every change, in the same clause as the change.** ⚠ _Table 3 now carries its denominator in the table and in the caption, page 14._ **Without the page the editor must find it, and with fourteen papers on the desk they will ask the referee to find it instead** — **which is a round, for one missing number.**',
  '**Begin every refusal with a document, never with a referee.** ⚠ _The comparison cannot be made from anything published._ **Then the arithmetic, then the page.** **A refusal that begins _the referee has not understood_ is read by the referee** — **and the letter has then been addressed over the editor\'s head to the one person who will never see it.**',
  '⚠ And **put the refusals at the end and keep them to the shape of the acceptances.** **Same numbering, same labelling, same paging.** **A refusal that looks different reads as a different kind of document** — **and the change nobody asked for goes last, because it is the sentence that tells an editor you have read your own paper.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a response-to-referees letter (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________: response to _______________ · **______________**   **______________ points were raised.** **______________ are accepted and ______________ are not, and the ______________ are at the end of this letter with their reasons.** **Every change is paged.**   **______________, point 1.** **Accepted.** **______________, page ______.**   **______________, point 2.** **Accepted.** **______________, page ______.**   **______________, point 3.** **Accepted in part.** **______________.** ⚠ **______________ has not been added**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The arithmetic of the points in the first line',
  'The referee\'s own numbering, and the two-word labels',
  'A page reference in the same clause as each change',
  'Every refusal beginning with a document',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their refusal**, and the room says what the first five words name.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (**260–300 words**, which is the genre\'s own length and not a convenience), to the shape in the writer\'s box: the arithmetic, the numbered points with labels and pages, the partial acceptance, the reasoned refusals at the end, and one change nobody asked for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the arithmetic first, the referee\'s numbering kept, a page with every change, and every refusal beginning with a document.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads _not accepted_ twice, once with the stress on _not_ and once flat.** ⚠ **The room says which version it would answer back.** **It is the stressed one, every time** — **and the written equivalent of that stress is a refusal that begins with the referee instead of with a document.** Then the sentence the cycle ends on, which is Mrs Tarabishi\'s: **the referee who asked for them will not be in the room.**'));
out.push(hw('Write **the whole response letter, 260 to 300 words**, to the points you were sent. ⚠ **Count the words and count the refusals.** **Then read your own labels in a row, aloud**, and ask what kind of author wrote them. **Send the letter if you can.** **Bring the letter, the two counts, and anything that came back.** **9.7 mediates between an author, a referee and the editor who has to decide**, and carries **Reading Part 3**, **Writing Part 1** and **Listening Part 1**.'));

// ===================== 9.7 =====================
out.push(h2('9.7  Review & Mediate: the author, the referee and the editor who has to decide'));
out.push(p('**Function:** mediating between an author, a referee and the editor who has to decide   ·   **Recycling:** Unit 9   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 3 · Writing Part 1 · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It is not possible to say that what the uptake will be.  **2** The readings exclude a specified-grade frame in all but one positions.  **3** We are unable to exclude that the single reading is a sample.  **4** The comparison is of two dates and therefore establish a difference and not a date.  **5** You are right that one month is a short period, however the finding is a count.  **6** Referee 2, point 5: not accept, and the reason is in page 14.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the three positions and the question the editor has asked.'));
out.push(box(null, [
  '**AN AUTHOR, A REFEREE AND AN EDITOR** _(the author is Mrs Tarabishi; the referee is the second of two; the editor has to decide this week)_',
  '**The author.** _"Point 5 cannot be done. The comparison he asks for requires the refused applicants\' records, which are not published. The chapter says so at page 18."_',
  '**The referee.** _"Without the comparison, the central claim of the paper is unsupported. I cannot recommend publication of a paper whose principal figure cannot be placed against anything."_',
  '**The editor.** _"I have to decide this week, I am not an economist, and I have one author telling me a thing is impossible and one referee telling me the paper fails without it."_',
  '⚠ **Both the author and the referee are right about what they are right about, and they are answering two different questions.**',
  '**And the thing none of the three has noticed.** **The referee\'s objection is to the claim as the abstract states it.** **The chapter already says the comparison cannot be made, and says it at page 18** — **so the abstract and the chapter are two documents, and only one of them is unsupported.**',
  '**The question for the cycle.** _What do you write, and to whom?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the letter goes to one of the three. Which, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  To the one who has to decide', [
  ['Ms Huda', 'Mrs Khoury — who gets the letter?'],
  ['Mrs Khoury', '⚠ **The editor, and only the editor.** **She is the one who has to do something by Friday** — **and the author and the referee have each written to the person who agrees with them, which is why it is now three weeks old.**'],
  ['Mrs Tarabishi', 'I wrote to the editor.'],
  ['Mrs Khoury', '⚠ **You wrote to the referee through the editor, which is the commonest fault in this cycle.** _Point 5 cannot be done._ **That is an answer to him.** **An editor who is not an economist reads it and has two assertions and no way of choosing.**'],
  ['Dr Qabbani', 'So what does she need?'],
  ['Mrs Oueidat', '⚠ **Not an opinion about who is right.** **A decision she can take** — **and that means the two questions named, and one line of what follows from each answer.** **It is 7.7 with a third person in the room, and the third person is the only one who can act.**'],
  ['Mr Shihabi', 'And the two questions here?'],
  ['Mrs Tarabishi', '⚠ **_Can the comparison be made?_ which is mine, and the answer is no, and page 18 says so.** **_Is the paper\'s central claim supported without it?_ which is his, and the answer depends entirely on where the claim is read** — **the abstract or the chapter.**'],
  ['Mrs Khoury', '⚠ **Which is the whole of it and nobody had seen it.** **The abstract claims a rate that cannot be placed against anything.** **The chapter claims a rate and says at page 18 that it cannot be placed.** **The referee is right about the abstract and the author is right about the chapter**, and they are each defending the document they wrote last.'],
  ['Mrs Ajouz', 'And the repair is in the abstract.'],
  ['Mrs Tarabishi', '⚠ **Eleven words in the abstract and the referee\'s objection has nowhere to stand.** **Which is 9.5, and I had been sent the same finding twice in one unit** — **once by a donor to Mrs Rizk and once by my own referee, and I did not recognise it the second time.**'],
  ['Mr Tayara', 'Does the editor need to be told all of that?'],
  ['Mrs Khoury', '⚠ **She needs four sentences and no history.** **The two questions, the answer to the first with its page, the two readings of the second, and the eleven words.** **Then one line saying what to do if she accepts the repair and one saying what to do if she does not** — **and that is a decision and not a letter.**'],
  ['Mrs Rizk', 'What do you not write?'],
  ['Mrs Oueidat', '⚠ **That the referee has misread the paper.** **He has not: he has read the abstract, which is what he was sent first and what the editor read too.** **A mediation that begins by telling the decider their own reading was careless has finished before the second sentence.**'],
  ['Jad', 'And if the author will not change the abstract?'],
  ['Mrs Khoury', '⚠ **Then the editor has a different decision, and she should be told which one.** **Publish the chapter with an abstract the referee will object to again, or hold it.** **A mediator who hides the second branch has made the decision for her** — **and she will find out in the next round that there was a branch.**'],
  ['Mr Zahreddine', 'An insurer reads the covering letter and not the opinion. It is the same thing.'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is which document I was defending.** **I answered the referee about page 18 four times**, and the sentence he was objecting to was on page 3 and I had written it last and never read it against the chapter — **and he was right every time he wrote to me.**'],
]));
out.push(sp());
out.push(box('Language box – mediating to the person who has to decide', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new, because a third person has to act.** ⚠ **Write to the decider and to nobody else.** **The author and the referee have each written to the person who agrees with them**, which is why the file is three weeks old. **A letter addressed past the decider to the other party is read by the other party and decides nothing.**',
  '**What a decider needs, which is not an opinion.** ⚠ **The two questions, named.** **The answer to the one that has an answer, with its page.** **The two readings of the one that has not.** **And the repair, in words you have counted** — _eleven words in the abstract._',
  '**Both branches, or you have decided for them.** ⚠ _Accept the repair and the objection has nowhere to stand; refuse it and the choice is to publish an abstract the referee will object to again, or to hold the paper._ **A mediator who hides the second branch will be found out in the next round** — **and the decider will then distrust the first branch too.**',
  '**What you never write to a decider.** ⚠ **That the other party has misread the document.** **The referee read the abstract, which is what the editor read as well** — **and a mediation that begins by calling the decider\'s own reading careless has finished before its second sentence.**',
  '**The length, and it is shorter than anybody expects.** ⚠ **Four sentences and no history.** **The two questions, the answer with its page, the two readings, the repair** — **plus one line for each branch.** **Everything else is the correspondence that produced the problem, and the decider was not in it.**',
  '**And the finding worth having from the unit.** ⚠ **A claim is defended at the degree it was written at, in the document where it was written.** **Mrs Tarabishi answered about page 18 four times and the sentence under attack was on page 3** — **and 9.1, 9.3 and 9.5 were each about the same thing from a different side.**',
  '**Pronunciation.** 🔊 **Track 9.14** **Say _the referee is right about the abstract and you are right about the chapter_ with equal weight on _abstract_ and _chapter_ and none on _right_.** ⚠ **Stress on either _right_ turns it into an adjudication** — **and the decider then hears you choosing, which is the one thing you are not doing.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a decider, an author and an objector, and does **not** show them. A reads all three. B says **who gets the letter**, names **the two questions**, and gives **both branches.** ⚠ **On one of the two cards the objection reaches both documents**, and B must say so and give the decider one branch rather than two. Change roles with the other pair.'));
out.push(table(['Pair A – the paper', 'Pair B – the file'], [
  ['_Author: the comparison cannot be made; page 18 says so._', '_Applicant: the word is defined by the manufacturer, not by me._'],
  ['_Referee: without it the central claim is unsupported._', '_⚠ Officer: an undefined word in a registration file cannot be accepted._'],
  ['_Editor: I decide on Friday and I am not an economist._', '_Head of registration: I have to answer the applicant this week._'],
  ['_⚠ Two documents: the abstract claims it, the chapter refuses it._', '_⚠ One document: the word is in the file and nowhere else._'],
  ['_⚠ The repair is eleven words in the abstract._', '_⚠ There is no repair short of removing the finding._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the recipient, the two questions, and the branches. ⚠ **Pair B has one document and not two**, so the objection reaches the finding and there is no repair short of removing it. **The move there is to give the head of registration one branch and say so**: remove the finding, or ask the manufacturer for the definition in writing, which takes eleven days. **A decider given two branches where one exists takes the one that does not work.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the objection you were sent** and write **the four sentences to the person who has to decide** — ⚠ **the two questions, the answer with its page, the two readings, and the repair with its word count.** **Then write the two branches, one line each.** **If your own document is the only one in play, write one branch and say that there is only one.**'));
out.push(p('**b**  Swap. Your partner reads **only your four sentences** and says **what they would do on Friday.** ⚠ **If they cannot answer, the letter is still addressed to the objector.** **The commonest sign of it is the word _however_ in the second sentence**, which is an answer to somebody and not a question for anybody.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you write, and to whom:  _Asked who gets the letter, Mrs Khoury said the editor and only the editor, because she is the one who has to do something by Friday, and the author and the referee have each written to the person who agrees with them, which is why it is now three weeks old. Mrs Tarabishi said she wrote to the editor, and Mrs Khoury said she wrote to the referee through the editor, which is the commonest fault in this cycle: point 5 cannot be done is an answer to him, and an editor who is not an economist reads it and has two assertions and no way of choosing. Dr Qabbani asked what she needs, and Mrs Oueidat said not an opinion about who is right but a decision she can take, which means the two questions named and one line of what follows from each answer. Mr Shihabi asked what the two questions are here, and can the comparison be made, which is the author\'s, and the answer is no and page 18 says so; and is the paper\'s central claim supported without it, which is the referee\'s, and the answer depends entirely on whether the claim is read in the abstract or in the chapter. Mrs Khoury said that is the whole of it and nobody had seen it: the abstract claims a rate that cannot be placed against anything and the chapter claims a rate and says at page 18 that it cannot be placed, so the referee is right about the abstract and the author is right about the chapter, and they are each defending the document they wrote last. Mrs Ajouz said so the repair is in the abstract, and eleven words in the abstract and the referee\'s objection has nowhere to stand, which is 9.5, and Mrs Tarabishi had been sent the same finding twice in one unit and did not recognise it the second time. Mr Tayara asked whether the editor needs to be told all of that, and she needs four sentences and no history, and then one line saying what to do if she accepts the repair and one if she does not. Mrs Rizk asked what you do not write, and Mrs Oueidat said that the referee has misread the paper, because he has not: he read the abstract, which is what he was sent first and what the editor read too. Mr Attar asked what happens if the author will not change the abstract, and then the editor has a different decision and should be told which one. Mr Zahreddine said an insurer reads the covering letter and not the opinion. And Mrs Tarabishi said the thing she will take away is which document she was defending: she answered the referee about page 18 four times and the sentence he was objecting to was on page 3, and he was right every time he wrote to her._'));
out.push(p('**Listener task:** write your four sentences and your two branches.   ' + clinic));

out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 3)', 7));
out.push(p('Read the text below. Use the word given in capitals at the end of each line to form a word that fits in the gap. There is an example at the beginning **(0)**.'));
out.push(box(null, [
  '**WHAT A REFEREE IS FOR**',
  '**(0)** _Example:_  A referee is not asked whether a paper is **interesting**.   **INTEREST**',
  'The request is narrower and harder: to say what the evidence will carry. The best reports therefore read less like verdicts than like exercises in **(1) ______________**, in which each claim is set against the measurement behind it.   **CALIBRATE**',
  'An objection is **(2) ______________** where it asks for something the published record cannot supply, and an author is entitled to say so in one line.   **WARRANT**',
  'A referee who marks a finding as **(3) ______________** accepted has not refused it; they have asked for one further thing, and the author should answer that thing and no more.   **PROVISION**',
  'The weakest kind of report is the **(4) ______________** one, which supplies an explanation of its own and asks the author to disprove it.   **CONJECTURE**',
  'The strongest shows a **(5) ______________** that few reports manage: it says which of its own points are blocking and which are not.   **CIRCUMSPECT**',
  'Where two readers differ, an editor needs a **(6) ______________** plan — what to do if the author can supply the figure, and what to do if the author cannot.   **CONTINGENT**',
  'Most reports name one or two **(7) ______________** between what a summary claims and what the body of the same paper establishes, and naming them is the most useful thing a referee does.   **DISCREPANT**',
  'Very little in this work can be settled **(8) ______________**, and a report which pretends otherwise makes the decision harder rather than easier.   **CONDITIONAL**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter to the person who has to decide (120 words or more).'));
out.push(p('**To ______________** · _______________ · **______________**   **There are two questions here and they have different answers.**   **The first: ______________.** **The answer is ______________, and it is at page ______.**   **The second: ______________.** ⚠ **The answer depends on ______________** — **in ______________ it is ______________, and in ______________ it is ______________.**   **The repair is ______________ words in ______________.**   **If you accept it, ______________.** **If you do not, ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Addressed to the person who has to decide, and to nobody else',
  'The two questions named, with the answerable one paged',
  'The repair, with its word count',
  'Both branches, one line each',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Fifth essay of the course and the instruction has not changed.** **Three points, two discussed, both named in the first paragraph with the ground, and the third not mentioned again.**',
  'Your class has read an article about being assessed by other people. **Write an **essay** discussing **two** of the points raised.** You should **explain which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about assessment. **First**, that a writer should concede nothing until the objection is shown to reach the finding. **Second**, that the useful part of any report is the part that names a document. **Third**, that writers who state their degree of certainty are marked down for appearing uncertain."_',
  '**Points to discuss: 1** concede nothing until the objection reaches the finding   **2** the useful report names a document   **3** stating your certainty is punished',
  '⚠ **This unit has given you evidence for the first two and the third is the one the room will believe and cannot support.** **Mrs Tarabishi\'s referee marked her down for the opposite fault** — **for using one degree throughout** — **and a candidate who takes the third point will have to argue against the only arithmetic in the unit.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  It is not possible ___ what the uptake will be without the register.   a) saying   b) to say   c) say',
  '2  The readings exclude a specified-grade frame in all ___ one position.   a) but   b) except of   c) than',
  '3  We are unable to exclude ___ the single reading is a sample position.   a) if   b) whether   c) that',
  '4  The comparison is of two dates and ___ establishes a difference and not a date.   a) therefore   b) however   c) nevertheless',
  '5  You are right that one month is short. The finding is a count, ___ does not depend on the month.   a) what   b) which   c) that it',
  '6  Referee 2, point 5: not ___ , and the reason is at page 14.   a) accept   b) accepting   c) accepted',
  '7  Nothing in the register ___ an uptake of ten per cent or of sixty.   a) exclude   b) excluding   c) excludes',
  '8  A claim at the eighth degree needs no apparatus ___ it.   a) about   b) round   c) of',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style – three short extracts).** 🔊 **Track 9.15** You will hear three different extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best according to what you hear.'));
[
  '**Extract One** _You hear two editors talking about a paper that is in its third round._',
  '**1**  What does the woman say the author\'s letter failed to do?   **A** answer the referee\'s points   **B** give her anything she could decide on   **C** keep to a reasonable length',
  '**2**  What do they agree about the third referee?   **A** she will settle the question   **B** she was chosen too late   **C** she was asked because neither of them had a view',
  '**Extract Two** _You hear a doctoral candidate talking to her supervisor about a referee\'s report._',
  '**3**  What does the supervisor say about the referee\'s first sentence?   **A** it is a complaint about the writing and not about the argument   **B** it is unfair   **C** it should be answered first',
  '**4**  What does the supervisor tell her to do about point five?   **A** make the comparison with other data   **B** withdraw the claim   **C** refuse it and name the office that holds the records',
  '**Extract Three** _You hear a referee talking to a journal\'s administrator._',
  '**5**  Why does the referee say he marks points as blocking or not blocking?   **A** so that the editor can tell which ones matter   **B** because the journal requires it   **C** to shorten his report',
  '**6**  What does he say about authors who concede everything?   **A** they are easier to work with   **B** they make him doubt the paper   **C** they usually improve the paper',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['Extract One', '_Two editors._'],
  ['Woman', 'Third round, and I am no further forward than I was in March. The author has answered every point he raised. Eleven points, eleven answers, and I still cannot tell you whether this paper should go in.'],
  ['Man', 'Because she answered him and not you.'],
  ['Woman', 'Exactly that. Every line of it is addressed to the referee. _Point five cannot be done._ Perhaps it cannot, but I am not an economist and he says the paper fails without it, so what I have is two people asserting opposite things at me. There is nothing in the letter I can act on.'],
  ['Man', 'So we send it to a third.'],
  ['Woman', 'We send it to a third because neither of us has a view, which is not a good reason and is the only one we have. If her letter had given me the two questions I would have decided in ten minutes.'],
  ['Extract Two', '_A doctoral candidate and her supervisor._'],
  ['Candidate', 'His first sentence says I appear uncertain about everything and certain about one thing and he cannot tell which is which. I have read it twenty times and I cannot decide whether it is rude.'],
  ['Supervisor', 'It is not rude and it is not about your argument. Eleven pages written at one level of certainty: he is telling you he could not find the sentence to attack. That is a remark about the writing, and the most useful thing in the report.'],
  ['Candidate', 'And point five? He wants the comparison with the commercial lenders.'],
  ['Supervisor', 'Can you do it?'],
  ['Candidate', 'No. It needs the refused applicants\' records and they are not published. I know which office holds them and I have asked twice.'],
  ['Supervisor', 'Then say that, and name the office, and put the page where you say it. Do not make the comparison out of something else and do not withdraw the claim. You have asked twice and a letter that says so is a stronger document than either.'],
  ['Extract Three', '_A referee and a journal administrator._'],
  ['Administrator', 'Your reports always have the points marked. Nobody else does that.'],
  ['Referee', 'I mark each one blocking or not blocking because otherwise the editor cannot tell, and an editor who cannot tell treats all of them as blocking. Half of what I write is a suggestion, and if I do not say so an author spends three weeks on a comma.'],
  ['Administrator', 'Do you mind when they argue with you?'],
  ['Referee', 'I prefer it. What worries me is the other kind — the letter that accepts all eleven points without a murmur. I read one of those and I start wondering whether the author has any view about their own work. It is the only thing that has ever made me change a recommendation downwards.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the ground, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put a number from one to nine on how sure I am, in writing, and defend it',
  '☐ say what my evidence is consistent with and what it excludes',
  '☐ write _we are unable to exclude_ and mean that the question was asked',
  '☐ put a limitation under the claim it limits, with a _therefore_ half',
  '☐ concede the method and hold the result, in two sentences',
  '☐ admit an objection that reaches the finding, in one line',
  '☐ find my own overclaim by reading the summary last, against the body',
  '☐ write a response-to-referees letter of 260 to 300 words with one reasoned refusal',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _weigh against · tell against · militate against · cut both ways · stand or fall · rest with · bear witness to · put beyond doubt · rule against · find against · hold against · stack against_.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 9.7 is built on this unit\'s lexis)_: _calibrate → **calibration** · warrant → **unwarranted** · provision → **provisionally** · conjecture → **conjectural** · circumspect → **circumspection** · contingent → **contingency** · absolute → **absolutely** · conditional → **unconditionally** · discrepant → **discrepancies**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _give up_ **→ _give up a finding_**, which is conceding it, where at B1 it was giving up a habit · _take back_ **→ _take back a claim_**, which is withdrawing it, where at B1 it was taking a parcel back · _put in_ **→ _put in a figure the body does not carry_**, which is inserting, where at A2 it was putting something in a bag.',
], C.lorange, C.orange));

//__TAIL__
module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
