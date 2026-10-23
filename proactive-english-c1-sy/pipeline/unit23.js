// Proactive English C1 · Syria Edition · Book 2 · Unit 23 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['THE PARAGRAPH, IN ONE LINE', 'THE JOB IT DOES'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const plan12 = (rows) => table(['#', 'THE ONE LINE', 'THE JOB'], rows, [1, 4, 3]);
const clinic = '**Board clinic:** your teacher writes three plan lines from the reports on the board. For each one the room says whether it names a job or a subject.';
const slip = '**Peer review, C1 band 4.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 23  Five Thousand Words'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_   ·   _Series author: Mo (Mohamad Khorbatli)_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Everything this course has taught is about documents of one to three pages, and almost everything it has taught still holds at five thousand words.** ⚠ **Four things do not.** **A turn in the argument can no longer be announced, a thread cannot be carried by repeating its name, a paragraph may exist only to let the next one work, and a cut has to be declared** — **and those four are the unit.**',
  '**Mrs Tarabishi has a chapter of five thousand two hundred words in twelve paragraphs.** ⚠ **Two of the twelve do the same job and she did not know it until she wrote the plan** — **which she wrote after the chapter, in twenty minutes, which is the fault the unit opens on.**',
  '**And the piece has two readers whose budgets differ by a factor of ten.** ⚠ **A supervisor with twenty minutes and a panel chairman with two** — **and the only part both of them read is the first paragraph and the last, which is why 23.6 asks for those two and nothing between them.**',
], C.grey, C.navy));
out.push(p('**Seven cycles · 90 minutes each · the seventh is Review & Mediate**', { bold: true, color: C.teal }));

// ===================== 23.1 =====================
out.push(pb());
out.push(h2('23.1  Twelve lines, and the two that do the same job'));
out.push(p('**Function:** planning twelve paragraphs on one line each, and finding the two that do the same job   ·   **Grammar:** the line that names a job and not a subject   ·   **Pronunciation:** two plan lines read aloud, and whether a listener can tell them apart'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the longest thing you have written in English, its length, and how many paragraphs.** ⚠ **Then the arithmetic: the average length of a paragraph.** **In this class the longest pieces ran from nine hundred to five thousand two hundred words and the paragraph averages ran from ninety to four hundred and thirty** — **and your teacher writes the ten averages on the board, because the average is the first thing a reader feels and the last thing a writer counts.**'));
out.push(board('Paragraph 4: the three studies measured agreement differently.', 'Establishes that the measures are not comparable.'));
out.push(p('**b**  Which two plan lines name a job? **1** _Paragraph 3: the history of the method._  **2** _Paragraph 3: establishes that the method predates the problem it is now used for._  **3** _Paragraph 7: transcriber agreement._  **4** _Paragraph 7: gives the reader the one figure that makes paragraph 8 arguable._  **5** _Paragraph 9: more on the three studies._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a plan line must name?   **A** the subject of the paragraph   **B** **the job the paragraph does for the paragraph after it**   **C** the length'));
out.push(p('**b**  Listen again. **1** What test does Mrs Khoury give for two paragraphs doing the same job?   **2** What does Mrs Tarabishi say about when she wrote her plan?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  Twelve lines on one page', [
  ['Ms Huda', 'Mrs Tarabishi has written the plan of a chapter she had already finished.'],
  ['Mrs Tarabishi', '⚠ **Five thousand two hundred words, twelve paragraphs, and the plan took twenty minutes** — **after the chapter, which is the wrong order and is the only order I have ever worked in.** **Twelve lines, and the instruction was that each line says what the paragraph does and not what it is about.**'],
  ['Ms Huda', 'And what did the twelve lines show?'],
  ['Mrs Tarabishi', '⚠ **That paragraphs 4 and 9 do the same job.** **Both establish that the three earlier studies measured agreement differently** — **four hundred and ten words and three hundred and sixty words, eleven hundred words apart, and neither of them knew about the other.**'],
  ['Mrs Ajouz', 'How did the plan show it?'],
  ['Mrs Khoury', '⚠ **It showed it because the two lines are the same line, and that is the test.** **Read your plan lines aloud to somebody who has not seen the chapter** — **and if they cannot tell two of them apart, those two paragraphs are one paragraph and you have written it twice, eleven hundred words apart, which no amount of rereading will find.**'],
  ['Mr Shihabi', 'Why would rereading not find it?'],
  ['Mrs Khoury', '⚠ **Because eleven hundred words is about four minutes of reading and a writer rereading their own piece is carrying the whole of it in their head.** **You know what paragraph 4 said, so paragraph 9 reads as a reminder rather than as a repetition** — **and the reader, who is not carrying it, experiences the chapter as long in the middle without being able to say why.**'],
  ['Mrs Oueidat', 'Is _long in the middle_ a real thing?'],
  ['Mrs Tarabishi', '⚠ **My supervisor wrote it in the margin of two chapters and I had thought it was a complaint about style.** **It is a complaint about architecture and it has a cause, and the cause is almost always two paragraphs doing one job** — **and the plan finds it in twenty minutes and the reader finds it in four.**'],
  ['Dr Qabbani', 'What is the difference between a job and a subject?'],
  ['Mrs Khoury', '⚠ **A subject is what the paragraph is about; a job is what the paragraph does for the one after it.** **_Transcriber agreement_ is a subject and three of her twelve lines were like that.** **_Gives the reader the one figure that makes paragraph 8 arguable_ is a job** — **and a line that names a job can be checked against the paragraph in about ten seconds.**'],
  ['Mr Tayara', 'And a paragraph with no job?'],
  ['Mrs Tarabishi', '⚠ **Paragraph 11, and I could not write a line for it at all.** **I sat for four minutes and then wrote _I do not know what this is for_, which is the most useful line on the page** — **and the paragraph is three hundred and eighty words about a study from 2011 that I like and that nothing in the chapter depends on.**'],
  ['Mrs Rizk', 'Does it come out?'],
  ['Mrs Khoury', '⚠ **Not yet, and the room should notice the order of operations.** **23.4 is about paragraphs that exist only to let the next one work, and some of those have no job you can name in one line either** — **so a paragraph with no line waits for 23.4 and is not cut in 23.1, which is the commonest mistake a confident writer makes with a plan.**'],
  ['Mrs Ajouz', 'How long should the plan be?'],
  ['Mrs Tarabishi', '⚠ **One page, and that is a constraint and not a convenience.** **Twelve lines of about nine words each fit on one page and can be read in forty seconds** — **and a plan of three pages is a second chapter, which I have written twice and neither time did I read it again.**'],
  ['Mr Attar', 'Does the plan go with the piece?'],
  ['Mrs Tarabishi', '🔊 ⚠ **It should and mine never has, and that is 23.7.** **My supervisor has read four chapters of mine and has never seen a plan** — **so when he says that paragraph 7 is the centre of the chapter and I think paragraph 5 is, there is no document in the world that settles it** — **and there is one, on one page, in my own handwriting, and I have never shown it to anybody.**'],
]));
out.push(sp());
out.push(box('Language box – the plan of twelve lines', [
  '**One line a paragraph, and the line names the job and not the subject.** ⚠ **_Transcriber agreement_ is a subject.** **_Gives the reader the one figure that makes paragraph 8 arguable_ is a job** — **and a job can be checked against its paragraph in ten seconds.**',
  '**The test for two paragraphs doing one job: read the lines aloud to somebody who has not read the piece.** ⚠ **If they cannot tell two lines apart, those two paragraphs are one paragraph written twice** — **and in a chapter of five thousand words they will be a thousand words apart and no rereading will find them.**',
  '**Why rereading cannot find it.** ⚠ **A writer rereading carries the whole piece in their head, so the second version reads as a reminder** — **and a reader who is not carrying it experiences the piece as _long in the middle_, which is a complaint about architecture and not about style.**',
  '**A paragraph you cannot write a line for is a finding and not yet a cut.** ⚠ **Write _I do not know what this is for_ and leave it** — **because 23.4 is about paragraphs whose whole job is to let the next one work, and some of those have no nameable job of their own.**',
  '**One page, and it is a constraint.** ⚠ **Twelve lines of about nine words fit on a page and read in forty seconds** — **and a plan of three pages is a second piece, which nobody reads twice, including its writer.**',
  '**And the plan is a document, which means it can be sent.** ⚠ **A supervisor who has read four chapters and never a plan has no way of settling a disagreement about which paragraph is the centre** — **and the document that would settle it takes twenty minutes and one page, which is 23.7.**',
  '**Pronunciation.** 🔊 **Track 23.2** **Read two plan lines aloud, one after the other, flat, with no pause between them.** ⚠ **If a listener asks which was which, they are one line** — **and the pause a writer naturally puts between them is the thing that hides it, because the pause supplies a difference the words do not have.**',
  '**Practise:** Job, or subject? **1** _the history of the method_  **2** _establishes that the method predates the problem_  **3** _transcriber agreement_  **4** _gives the figure that makes 8 arguable_  **5** _more on the three studies_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the plan line from the card. B says **whether it names a job or a subject**, and rewrites the subjects as jobs. ⚠ **Two lines on each card are the same line as another one** — **and there B says which two and what it means.** Change cards.'));
out.push(plan12([
  ['**3**', '_The history of the method._', '⚠ **Subject**'],
  ['**4**', '_⚠ The three studies measured agreement differently._', '⚠ **Job — and see 9**'],
  ['**7**', '_Transcriber agreement._', '**Subject**'],
  ['**9**', '_⚠ The three studies are not comparable on agreement._', '⚠ **The same job as 4**'],
  ['**11**', '_I do not know what this is for._', '⚠ **No job — hold for 23.4**'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** job or subject, and the two that are one. ⚠ **Lines 4 and 9 on both cards are the same job in different words and the room must say so rather than improve them** — **and the useful question is which of the two the chapter needs, which is the earlier one in both cases.** **Line 11 is the pair the cycle turns on**: it has no job, **and the room will want to cut it, which 23.4 forbids for another three cycles.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the longest thing you have written** and write **its plan now, after the fact**: one line a paragraph, each line naming a job. ⚠ **One page, and twenty minutes by the clock.** **In this class nine of ten finished inside the twenty minutes and seven found at least two lines that were the same line** — **and two found a paragraph for which no line could be written at all.**'));
out.push(p('**b**  Swap. Your partner reads **your twelve lines aloud to a third student** who has not seen the piece, and asks **which two they cannot tell apart.** ⚠ **Then the harder question: which paragraph has no job?** — **and in this class the paragraph with no job was, in both cases, the paragraph its writer liked best.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has written the plan of a chapter she had already finished: five thousand two hundred words, twelve paragraphs, and the plan took twenty minutes, after the chapter, which is the wrong order and is the only order she has ever worked in, with each line saying what the paragraph does and not what it is about. Ms Huda asked what the twelve lines showed, and that paragraphs 4 and 9 do the same job, both establishing that the three earlier studies measured agreement differently, four hundred and ten words and three hundred and sixty words, eleven hundred words apart, and neither of them knew about the other. Mrs Ajouz asked how the plan showed it, and it showed it because the two lines are the same line, and that is the test: read your plan lines aloud to somebody who has not seen the chapter, and if they cannot tell two of them apart, those two paragraphs are one paragraph written twice. Mr Shihabi asked why rereading would not find it, and because eleven hundred words is about four minutes of reading and a writer rereading is carrying the whole piece in their head, so the second version reads as a reminder rather than a repetition, and the reader experiences the chapter as long in the middle without being able to say why. Mrs Oueidat asked whether long in the middle is a real thing, and Mrs Tarabishi said her supervisor wrote it in the margin of two chapters and she had thought it was a complaint about style, and it is a complaint about architecture with a cause, and the cause is almost always two paragraphs doing one job. Dr Qabbani asked about the difference between a job and a subject, and a subject is what the paragraph is about and a job is what it does for the one after it, and three of her twelve lines named subjects. Mr Tayara asked about a paragraph with no job, and paragraph 11, for which she could write no line at all, so she wrote I do not know what this is for, which is the most useful line on the page, and the paragraph is three hundred and eighty words about a study from 2011 that she likes and that nothing depends on. Mrs Rizk asked whether it comes out, and Mrs Khoury said not yet, because 23.4 is about paragraphs that exist only to let the next one work. Mrs Ajouz asked how long the plan should be, and one page, which is a constraint and not a convenience. And Mrs Tarabishi said the plan should go with the piece and hers never has, because her supervisor has read four chapters and has never seen a plan, so when he says paragraph 7 is the centre and she thinks paragraph 5 is, there is no document in the world that settles it, and there is one, on one page, in her own handwriting._'));
out.push(p('**Listener task:** write your partner\'s two lines that are one line, and the paragraph with no job.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s plan and the note under it. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _the plan of chapter 3, written after the chapter_ · _twelve lines, one page, twenty minutes_ · **4 January**',
  '**1** _Says what the chapter is for: whether the three studies can be compared at all._   **2** _Establishes that all three claim to measure the same thing._   **3** _Establishes that the method predates the problem it is now used for._',
  '**4** _Establishes that the three measured agreement differently._   **5** _Gives my own figure for the recordings, which the rest of the chapter rests on._   **6** _Lets paragraph 7 be read as arithmetic rather than as an opinion._',
  '**7** _Gives the one figure that makes paragraph 8 arguable._   **8** _States the objection a reader of the 2011 study would make._   **9** _Establishes that the three are not comparable on agreement._',
  '**10** _Answers the objection with the recordings and not with an argument._   **11** _I do not know what this is for._   **12** _Says what a reader may take from the chapter and what they may not._',
  '**What the twelve lines showed me in forty seconds.** ⚠ **4 and 9 are the same job.** **Four hundred and ten words and three hundred and sixty, eleven hundred words apart** — **and I have read that chapter about thirty times without seeing it, because I was carrying paragraph 4 in my head when I read paragraph 9.**',
  '**Which of the two the chapter needs.** **The earlier one.** ⚠ **Paragraph 4 earns paragraph 5, which is my own figure** — **and paragraph 9 earns nothing, because by then the reader has had five paragraphs of consequences and does not need the premise again.**',
  '**What my supervisor had written twice.** **_Long in the middle._** ⚠ **I had taken it as a remark about style and had answered it twice by cutting adjectives** — **and the cause is architectural: a thousand-word premise stated twice, with the second statement in the middle of the chapter.**',
  '**Paragraph 11, which I could not write a line for.** **Three hundred and eighty words on a study from 2011 that I like.** ⚠ **Nothing in the chapter depends on it, and it is not holding anything up.** **I sat for four minutes and wrote _I do not know what this is for_** — **which is a finding and is not yet a decision, because 23.4 exists.**',
  '**What the plan cost and what it is worth.** **Twenty minutes, after thirty readings.** ⚠ **It is one page, it reads in forty seconds, and it is the only document in which the chapter can be seen at once** — **and I have never shown it to the one person who has read every chapter.**',
  '**And the four lines I rewrote while making it, which is the part I had not expected.** **Lines 2, 7, 8 and 12 came out as subjects on the first attempt** — _the three claims_, _transcriber agreement_, _the 2011 objection_, _conclusion_ — ⚠ **and writing each of them again as a job took between forty seconds and four minutes.** **The four minutes was line 12, which I had been calling _conclusion_ for fourteen months and which is _says what a reader may take from the chapter and what they may not_** — **and that is not a better name for the same paragraph: it is a different paragraph, and I shall have to write it.**',
]));
out.push(item('1', 'What did the twelve lines show in forty seconds, and why had thirty readings not shown it?'));
out.push(item('2', 'Which of paragraphs 4 and 9 does the chapter need, and why that one?'));
out.push(item('3', 'What had the supervisor written twice, and what had she done about it?'));
out.push(writers([
  'A plan written after the fact: **twelve lines, each naming a job** → **what the twelve lines showed, and how fast** → **which of the two duplicates the piece needs** → **the margin note you had misread** → **the paragraph you could not write a line for** → **and what the plan cost against what it is worth.**',
  '⚠ **Print the twelve lines in full and let them be read as a block.** **A note that describes a plan has kept its reader outside the only document in which the piece can be seen at once** — **and twelve lines of nine words read in forty seconds, which is the whole argument for the form.**',
  '**Give the two duplicate paragraphs their word counts and their distance apart.** ⚠ _Four hundred and ten words and three hundred and sixty, eleven hundred words apart._ **The distance is the explanation** — **and without it a reader thinks the writer was careless, where in fact no amount of care would have found it.**',
  '**Report the margin note you had misread, and what you did about it the first time.** ⚠ _I had taken "long in the middle" as a remark about style and had answered it by cutting adjectives._ **A note that only reports the correct diagnosis has hidden the useful part** — **and the wrong repair, named, is what another writer will recognise.**',
  '⚠ And **leave the paragraph you cannot explain unresolved.** _I do not know what this is for, and that is a finding and not yet a decision._ **A plan that ends in a list of cuts has become a decision document** — **and the one line that admits ignorance is the line that keeps the plan honest, because every long piece has one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the plan of your own long piece (120 words or more, including the lines).'));
out.push(p('**______________** · _the plan of _______________, written after_ · **______________**   **1** _______________._ **2** _______________._ **3** _______________._ **4** _______________._   **What the lines showed me in forty seconds.** ⚠ **______________ and ______________ are the same job.**   **Which the piece needs.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One line a paragraph, each naming a job',
  'Any two lines that are the same line, marked',
  'The paragraph with no job, named and not cut',
  'The whole plan on one page',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **two of their plan lines aloud, flat, with no pause**, and the room says whether it can tell them apart.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the twelve lines, what they showed and how fast, which duplicate the piece needs, the margin note you misread, the paragraph with no job, and what the plan cost against what it is worth.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every line names a job, the duplicates are marked with their distance apart, and the paragraph with no job is not cut.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many students found two lines that were the same line?** **Seven of ten, inside twenty minutes** — **and the average distance between the two paragraphs was about nine hundred words, which is the figure that explains why nobody finds them by reading.** **Then: which paragraph had no job?** **Two students had one, and in both cases it was the paragraph its writer liked best.**'));
out.push(hw('**Write the plan of your longest piece — one line a paragraph, each line a job — and read the lines aloud to somebody who has not read the piece.** ⚠ **Then the harder half: ask them to tell you which two lines they cannot tell apart, and do not defend either.** **In this class eight of ten were given a pair and six agreed with it at once.** **Bring the plan and the pair.** **23.2 makes a turn in an argument without announcing it**, so bring the sentence in your piece that begins _however_.'));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  The turn that is not announced'));
out.push(p('**Function:** making a turn in an argument without announcing it   ·   **Grammar:** the fact that cannot be reconciled, placed first, with no connective   ·   **Pronunciation:** the turn read aloud with no lift and no pause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **count the _howevers_ and _neverthelesses_ in your longest piece.** ⚠ **Count them, do not estimate.** **In this class the counts ran from one to eleven in pieces of under six thousand words, and the highest count was in the shortest piece** — **and your teacher writes the ten counts on the board beside the ten word counts, which is a ratio worth looking at for a minute in silence.**'));
out.push(board('However, there is a difficulty with this view.', 'The recordings were made in 2011. Nobody has recomputed them.'));
out.push(p('**b**  Which two turn without announcing it? **1** _However, this view is not supported by the recordings._  **2** _The recordings were made in 2011 and nobody has recomputed them since._  **3** _Nevertheless, a difficulty remains._  **4** _Of the eleven hundred utterances in that corpus, four hundred are from one speaker._  **5** _It should be noted, however, that there is a counter-argument._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide an announced turn tells a reader?   **A** that a turn is coming   **B** **the writer\'s own position in the argument** — which the reader then has to adopt or refuse   **C** nothing at all'));
out.push(p('**b**  Listen again. **1** What had Mrs Tarabishi\'s supervisor written in her margin?   **2** What is the test Mrs Khoury gives for an unannounced turn?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  Where does the chapter change its mind?', [
  ['Ms Huda', 'Mrs Tarabishi counted her connectives.'],
  ['Mrs Tarabishi', '⚠ **Five _howevers_, three _neverthelesses_, and two _it should be noteds_ in five thousand two hundred words.** **Ten announced turns in twelve paragraphs** — **and the margin note I had never understood is in my supervisor\'s hand on page four: _you keep arguing with yourself_.**'],
  ['Ms Huda', 'What does that mean?'],
  ['Mrs Khoury', '⚠ **It means the reader can hear the writer taking both sides, one after the other, ten times.** **At five hundred words an announced turn is a courtesy: the reader has nowhere to get lost.** **At five thousand it is a position** — **_however_ tells the reader where the writer stands, and a reader who is told where you stand has to decide whether to stand there, which is work you have given them for nothing.**'],
  ['Mr Shihabi', 'And without the announcement?'],
  ['Mrs Khoury', '⚠ **The reader does the turning and then owns it, which is the whole of the cycle.** **_The recordings were made in 2011 and nobody has recomputed them since._** **No connective, a dated fact, placed first in a new paragraph** — **and the reader turns, because the fact cannot be reconciled with the paragraph above it, and the turn is theirs.**'],
  ['Mrs Oueidat', 'How is the turn made, mechanically?'],
  ['Mrs Tarabishi', '⚠ **Three ways and I have used all three since the cycle.** **A fact with a date on it, first in the paragraph.** **A change of grammatical subject, so that what was the object of the last paragraph is the subject of this one.** **And a move from the general present to a dated past** — **which is the one that does the most work and the one I had never noticed.**'],
  ['Dr Qabbani', 'Does the reader always turn?'],
  ['Mrs Khoury', '⚠ **No, and an unannounced turn the reader misses is a turn that did not happen, which the room must take seriously.** **So the cycle has a test and it is a question to a reader: _where does the piece change its mind?_** **If they name a different place from the one you intended, the turn is where they said it is** — **and that is not a difference of opinion, it is a measurement.**'],
  ['Mrs Tarabishi', '⚠ **I removed four of my ten connectives and gave the chapter to two people.** **Three of the four turns survived: both readers put them within a sentence of where I had meant them.** **The fourth vanished** — **both readers said the chapter changed its mind in paragraph 8, where I had not turned at all, and neither of them saw the turn in paragraph 6.**'],
  ['Mr Tayara', 'What was wrong with paragraph 6?'],
  ['Mrs Tarabishi', '⚠ **The fact was true and it was not dated, and it was third in the paragraph.** **_The corpus is weighted towards one speaker_ with no figure and no year, after two sentences of summary** — **and when I rebuilt it as _of the eleven hundred utterances, four hundred are from one speaker_, first sentence, both readers turned there.**'],
  ['Mrs Rizk', 'So the figure did it.'],
  ['Mrs Khoury', '⚠ **The figure and the position did it, and the room should not separate them.** **A fact that cannot be reconciled has to be unarguable and it has to be where the reader arrives** — **and a true but undated sentence in the middle of a paragraph is a fact the reader walks past, which is why 19.3 exists and why it is being used here for a different purpose.**'],
  ['Mrs Ajouz', 'May you ever announce a turn?'],
  ['Mrs Khoury', '⚠ **Once, and at the end, and it is a different sentence.** **_This is where the chapter changes its mind_ in paragraph 12, as part of saying what a reader may take from it** — **which is 23.6 and is a summary of a turn and not a turn.**'],
  ['Mr Attar', 'What did the four removals cost?'],
  ['Mrs Tarabishi', '⚠ **Eleven words gained and about forty minutes of work, and one paragraph rebuilt.** **The six connectives I kept are all in the second half** — **and the room should know why: by paragraph 9 the reader has been turned three times and has earned the courtesy of being told, which is the only defence of a _however_ I have found that survives this unit.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the margin note.** **_You keep arguing with yourself._** **Four years and three supervisors, and nobody had told me what it meant** — **and it is not a remark about my opinions, it is a count of my connectives, and the count was ten.**'],
]));
out.push(sp());
out.push(box('Language box – the turn that is not announced', [
  '**At five hundred words an announced turn is a courtesy; at five thousand it is a position.** ⚠ **_However_ tells the reader where the writer stands, and a reader who has been told has to decide whether to stand there** — **which is work handed to them for nothing.**',
  '**Three mechanical ways to turn without announcing.** ⚠ **A dated fact, first in a new paragraph, with no connective.** **A change of grammatical subject, so that last paragraph\'s object is this paragraph\'s subject.** **And a move from the general present into a dated past, which does the most work and is the least noticed.**',
  '**_The recordings were made in 2011 and nobody has recomputed them since._** ⚠ **The reader turns because the fact cannot be reconciled with the paragraph above it** — **and the turn is theirs, which means they will defend it.**',
  '**A turn the reader misses is a turn that did not happen.** ⚠ **So ask a reader: where does the piece change its mind?** **If they name a different place, the turn is where they said it is** — **which is a measurement and not a difference of opinion.**',
  '**The fact has to be unarguable and it has to be where the reader arrives.** ⚠ **_The corpus is weighted towards one speaker_, undated, third in a paragraph, is walked past.** **_Of the eleven hundred utterances, four hundred are from one speaker_, first sentence, turns both readers** — **and that is 19.3 used for a new purpose.**',
  '**You may announce one turn, once, at the end.** ⚠ **_This is where the chapter changes its mind_, in the last paragraph, as part of saying what a reader may take from it** — **which is a summary of a turn and not a turn.**',
  '**Pronunciation.** 🔊 **Track 23.4** **Read the turning sentence with no lift at the beginning and no pause before it.** ⚠ **A lift is an audible _however_** — **and a listener who hears it stops turning and starts waiting, which is exactly what the written connective does to them.**',
  '**Practise:** Turn without announcing. **1** a dated fact, first  **2** a change of subject  **3** present into dated past  **4** an undated fact, rebuilt  **5** the one announced turn, in the last paragraph',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the announced turn from the card. B rewrites it as **a dated fact placed first, with no connective**, and says **which of the three ways they used.** ⚠ **Two rows on each card turn without announcing already** — **and there B says what a reader would do at that sentence.** Change cards.'));
out.push(table(['Card A – the turn as written', 'Card B – the turn as written'], [
  ['_However, this view is not supported by the recordings._', '_Nevertheless, a difficulty remains._'],
  ['_⚠ The recordings were made in 2011 and nobody has recomputed them._', '_⚠ Of the eleven hundred utterances, four hundred are from one speaker._'],
  ['_It should be noted, however, that a counter-argument exists._', '_On the other hand, the evidence is not conclusive._'],
  ['_⚠ The schedule was last revised in 2013. Two of the institutions did not then exist._', '_⚠ In March the governorate moved the dry-season date._'],
  ['_The corpus is weighted towards one speaker._', '_The method has some limitations._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the rewrite, and which of the three ways. ⚠ **Rows 2 and 4 on both cards turn already and the room must say what a reader does at each** — **which is to stop reconciling and start reading the next paragraph as the other side.** **Rows 5 are the pair the cycle turns on**: both are true, undated and unfigured, **and both are facts a reader walks past, which is the fault that cannot be repaired by a connective.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your longest piece** and **remove half your connectives**, rebuilding each turn as a dated fact placed first. ⚠ **Count what you removed and what you gained in words.** **In this class the removals ran from one to five and the average gain was nine words** — **and in every case the work was in one paragraph and not in the sentence, which is the finding.**'));
out.push(p('**b**  Swap. Give **your piece to a reader who has not seen it** and ask the one question: **where does it change its mind?** ⚠ **Then the harder question: did they name the place you intended?** — **and in this class six of ten readers named it, two named a place the writer had not turned at all, and two could not find a turn.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi counted her connectives: five howevers, three neverthelesses and two it should be noteds in five thousand two hundred words, which is ten announced turns in twelve paragraphs, and the margin note she had never understood is in her supervisor\'s hand on page four, saying that she keeps arguing with herself. Ms Huda asked what that means, and Mrs Khoury said it means the reader can hear the writer taking both sides one after the other ten times, because at five hundred words an announced turn is a courtesy and at five thousand it is a position, since however tells the reader where the writer stands and a reader who has been told has to decide whether to stand there. Mr Shihabi asked about doing it without the announcement, and the reader does the turning and then owns it: the recordings were made in 2011 and nobody has recomputed them since, with no connective, a dated fact, placed first in a new paragraph. Mrs Oueidat asked how the turn is made mechanically, and three ways, all of which Mrs Tarabishi has used since: a fact with a date on it placed first, a change of grammatical subject so that the last paragraph\'s object is this paragraph\'s subject, and a move from the general present to a dated past, which does the most work and which she had never noticed. Dr Qabbani asked whether the reader always turns, and Mrs Khoury said no, and an unannounced turn the reader misses is a turn that did not happen, so the cycle has a test, which is to ask a reader where the piece changes its mind, and if they name a different place the turn is where they said it is. Mrs Tarabishi removed four of her ten connectives and gave the chapter to two people: three of the four turns survived and the fourth vanished, with both readers saying the chapter changed its mind in paragraph 8, where she had not turned at all. Mr Tayara asked what was wrong with paragraph 6, and the fact was true, undated and third in the paragraph, and when she rebuilt it as of the eleven hundred utterances four hundred are from one speaker, first sentence, both readers turned there. Mrs Rizk said so the figure did it, and Mrs Khoury said the figure and the position did it and the room should not separate them. Mrs Ajouz asked whether you may ever announce a turn, and once, at the end, as part of saying what a reader may take from the piece. Mr Attar asked what the removals cost, and eleven words gained, about forty minutes of work and one paragraph rebuilt. And Mrs Tarabishi said the thing she will take away is the margin note, which is not a remark about her opinions but a count of her connectives, and the count was ten._'));
out.push(p('**Listener task:** write your partner\'s rebuilt turn and say where their reader said the piece changed its mind.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Tarabishi wrote about the four removals. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _note on ten announced turns and four removals_ · _with the margin note that started it_ · **11 January**',
  '**The count.** **Five _howevers_, three _neverthelesses_, two _it should be noteds_.** ⚠ **Ten announced turns in twelve paragraphs of five thousand two hundred words** — **and I counted them in four minutes with the search box, having read the chapter about thirty times without counting anything.**',
  '**The margin note.** **_You keep arguing with yourself._** ⚠ **In my supervisor\'s hand, on page four, in a chapter submitted fourteen months ago** — **and I had read it as a remark about my opinions and had answered it by making my opinions firmer, which made the next chapter worse.**',
  '**What it actually meant.** **That a reader can hear me taking both sides, one after the other, ten times.** ⚠ **An announced turn hands the reader my position** — **and a reader holding my position has to decide whether to adopt it, which is work I was giving them ten times in twelve paragraphs.**',
  '**Removal one, paragraph 3.** **Was: _However, this view is not supported by the recordings._** **Now: _The recordings were made in 2011 and nobody has recomputed them since._** ⚠ **A dated fact, first in the paragraph, no connective** — **and both readers turned there.**',
  '**Removal two, paragraph 5: a change of grammatical subject.** **The object of paragraph 4 is the measure; paragraph 5 now begins with the measure as its subject.** ⚠ **_The agreement measure used in the 2009 study counts only the utterances both transcribers attempted._** **Nothing announces the turn and the sentence cannot be reconciled with the paragraph above it.**',
  '**Removal three, paragraph 10: the general present into a dated past.** ⚠ **Was: _the method is generally held to be robust._** **Now: _the method was accepted in 2004 on a corpus of two hundred utterances._** **The same claim, in a tense that invites a reader to ask what has happened since** — **and this is the way I had never noticed and now use most.**',
  '**Removal four, paragraph 6, which failed.** **Was: _Nevertheless, the corpus is weighted towards one speaker._** **My first rewrite: _the corpus is weighted towards one speaker_, third in the paragraph.** ⚠ **Both readers walked past it and both said the chapter changed its mind in paragraph 8, where I had not turned at all.**',
  '**The rebuild.** **_Of the eleven hundred utterances in that corpus, four hundred are from one speaker._** ⚠ **A figure, first sentence, and both readers turned there on the second reading** — **which tells me the fault was not the connective: it was an undated fact in the middle of a paragraph.**',
  '**What I kept, and why.** **Six connectives, all in the second half.** ⚠ **By paragraph 9 the reader has turned three times unaided and has earned the courtesy of being told** — **which is the only defence of a _however_ that I can make and I should like it tested.**',
  '**And what the count did not find.** **Three turns I had not noticed making at all.** ⚠ **Paragraph 2 turns on a tense, paragraph 8 on a change of subject, and paragraph 11 on nothing I can identify** — **and all three were already unannounced, which means I have been doing this by accident for four years in about a third of the places where it matters.**',
]));
out.push(item('1', 'What had she thought the margin note meant, and what did she do about it?'));
out.push(item('2', 'What are the three mechanical ways, and which does she now use most?'));
out.push(item('3', 'Why did removal four fail, and what does the rebuild show about the cause?'));
out.push(writers([
  'A note on announced turns: **the count, from the search box** → **the margin note, quoted** → **what it actually meant** → **each removal, with the before and after** → **the one that failed** → **the rebuild** → **and what you kept, with the reason you want tested.**',
  '⚠ **Count with the search box and give the figure.** _Five, three and two, in four minutes, after about thirty readings._ **A writer who estimates their connectives will estimate low** — **and the count is the only part of this cycle that cannot be argued with.**',
  '**Print the before and after of every removal.** ⚠ _Was: however, this view is not supported. Now: the recordings were made in 2011 and nobody has recomputed them._ **Two sentences side by side do what a paragraph of explanation cannot** — **and a note without them is a note about a method the reader has to take on trust.**',
  '**Report the removal that failed, and what the failure proved.** ⚠ _Both readers walked past it, and both said the chapter turned in paragraph 8, where I had not turned at all._ **The failure is the evidence that the cause is architectural and not lexical** — **and a note of four successes has proved nothing at all.**',
  '⚠ And **defend what you kept, and ask for the defence to be tested.** _Six connectives, all in the second half, because by paragraph 9 the reader has turned three times unaided._ **A rule applied to every instance is a habit** — **and the writer who names the exception and offers it for testing is the one who will still be improving in a year.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own note (120 words or more).'));
out.push(p('**The count.** **______________ _howevers_, ______________ _neverthelesses_, in ______________ words.** ⚠ **Counted in ______________ minutes.**   **Removal one, paragraph ______________.** **Was: _______________._** **Now: _______________._** ⚠ **______________, first in the paragraph, no connective.**   **Removal two: a change of grammatical subject.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count, from a search and not an estimate',
  'Before and after printed for every removal',
  'Which of the three ways each rewrite used',
  'The removal that failed, with what it proved',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their rebuilt turning sentence only**, flat, and the room says whether it would turn there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the count, the margin note, what it meant, the removals with their before and after, the one that failed, the rebuild, and what you kept.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a counted figure, a before and after for every removal, and the failure reported with what it proved.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **Connectives before and after:** **the ten counts ran from one to eleven, and the removals from one to five** — **and the average gain was nine words, which the room should hear, because nobody does this for the word count.** **Then: where did your reader say the piece changes its mind?** **Six of ten named the intended place, two named a place with no turn in it, and two found none.**'));
out.push(hw('**Count your connectives with a search box, remove half of them, and give the piece to a reader with one question: where does it change its mind?** ⚠ **Then the harder half: if they name a place you did not intend, rebuild the turn there as a dated fact and do not argue with them.** **In this class four of ten had to rebuild and three of the four found that the paragraph they rebuilt was the paragraph their supervisor had marked.** **Bring the question and the answer.** **23.3 carries one thread across eight paragraphs**, so bring the phrase your piece repeats most.'));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  One thread, eight paragraphs, and not its name'));
out.push(p('**Function:** carrying one thread across eight paragraphs without repeating its name   ·   **Grammar:** the definite description that advances   ·   **Pronunciation:** the thread named once and then carried'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the phrase your longest piece repeats most, and the count.** ⚠ **Use the search box.** **In this class the counts ran from six to thirty-one in pieces of under six thousand words, and nobody had counted before being asked** — **and your teacher writes the ten phrases on the board with the counts beside them and then asks whose piece is about that phrase, which in every case it is.**'));
out.push(board('_Inter-transcriber agreement_ — thirty-one times.', 'And nine of the thirty-one are necessary.'));
out.push(p('**b**  Which two carry the thread forward? **1** _the aforementioned agreement figure_  **2** _the figure nobody has recomputed since 2011_  **3** _inter-transcriber agreement_ (for the ninth time)  **4** _the objection a reader of the 2011 study would make_  **5** _this issue_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a repeated name does at length?   **A** helps the reader   **B** **becomes a drum**, and stops carrying any new information   **C** proves the writer is consistent'));
out.push(p('**b**  Listen again. **1** How many times did the phrase appear, and how many survive?   **2** What does Mrs Khoury say each mention of the thread has to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  Thirty-one times, and nine', [
  ['Ms Huda', 'Mrs Tarabishi has counted a phrase.'],
  ['Mrs Tarabishi', '⚠ **_Inter-transcriber agreement_, thirty-one times in five thousand two hundred words, which is once every hundred and seventy words.** **I had thought I was being precise.** **I was being precise nine times and beating a drum twenty-two times** — **and the room should know that the phrase is four words long, so it is a hundred and twenty-four words of the chapter.**'],
  ['Ms Huda', 'What takes the place of the other twenty-two?'],
  ['Mrs Tarabishi', '⚠ **Fourteen definite descriptions and eight nothing at all.** **The eight were deleted because the thread was obvious from the sentence** — **and that is the discovery: in eight places the reader already knew what I was talking about and I had told them anyway, which is a sentence about me and not about the reader.**'],
  ['Mr Attar', 'And the fourteen?'],
  ['Mrs Khoury', '⚠ **Each one must advance the thread, which is the rule of the cycle and the hard half.** **_The aforementioned figure_ advances nothing and is worse than the name, because it is longer and it points backwards.** **_The figure nobody has recomputed since 2011_ advances** — **it carries the thread and adds a fact, and the reader now holds two things where they held one.**'],
  ['Mr Shihabi', 'Fourteen advances in eight paragraphs?'],
  ['Mrs Tarabishi', '⚠ **Fourteen, and four of them are the same advance, which my partner found in nine minutes.** **I had three descriptions all saying that nobody had recomputed it** — **so the thread advanced in ten places and marked time in four, and the four marking time are worse than the name they replaced, because they look like progress.**'],
  ['Mrs Oueidat', 'Can a pronoun carry it?'],
  ['Mrs Khoury', '⚠ **Across a paragraph boundary, rarely, and across two, never.** **_It_ at the head of paragraph 7 referring to a figure last named in paragraph 5 is a sentence the reader has to solve** — **and at five thousand words you may ask a reader to do one thing at a time, and solving a reference is not the thing you want them doing.**'],
  ['Dr Qabbani', 'What is the test?'],
  ['Mrs Tarabishi', '⚠ **Ask a reader what the piece is about, and see whether they name the thread.** **Two readers: one named it and one named the 2011 study, which is the subject of three paragraphs and not the thread of eight** — **and the one who named the study is the one who read it in twenty minutes, which is 23.7 arriving early again.**'],
  ['Mr Tayara', 'Is the name ever right?'],
  ['Mrs Khoury', '⚠ **Nine times in her chapter, and each of the nine is in a place where precision is the point: a definition, a figure, a disagreement with another writer.** **The rule is not _never repeat the name_** — **it is that the name is for the places where the reader must not be allowed to approximate, which in a chapter of five thousand words is about nine.**'],
  ['Mrs Rizk', 'Mine is a word I cannot replace.'],
  ['Mrs Oueidat', '⚠ **Then it is a term and not a thread, and the room should learn the difference now.** **A term has to be the same word every time: _write-off_, _establishment_, _district rule_.** **A thread is the thing the piece is carrying** — **and if the two are the same word, the name stays and the advancing is done by the facts attached to it.**'],
  ['Mrs Ajouz', 'How many threads can a piece carry?'],
  ['Mrs Tarabishi', '⚠ **One across eight paragraphs, and I tried two and it does not work.** **My first attempt carried the agreement figure and the corpus weighting together** — **and both readers lost the second one by paragraph 6, and one of them said the chapter had two chapters in it, which is 23.1 saying the same thing from the other end.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the hundred and twenty-four words.** **Thirty-one mentions of a four-word phrase, of which twenty-two were doing nothing** — **about ninety words of pure repetition, which is a fifth of a paragraph, and it is not the ninety words that matter: it is that the reader was told twenty-two times that I knew what I was writing about.**'],
]));
out.push(sp());
out.push(box('Language box – the thread carried without its name', [
  '**At length a repeated name becomes a drum.** ⚠ **Thirty-one mentions of a four-word phrase in five thousand words is one every hundred and seventy words** — **and nine of them were doing work.**',
  '**Every mention that is not the name must advance the thread.** ⚠ **_The aforementioned figure_ advances nothing, is longer than the name and points backwards.** **_The figure nobody has recomputed since 2011_ carries the thread and adds a fact** — **and the reader now holds two things where they held one.**',
  '**A description that marks time is worse than the name.** ⚠ **Three descriptions all saying that nobody has recomputed it look like progress and are not** — **and a partner found four such in nine minutes, which a writer will not find at all.**',
  '**Some mentions should simply go.** ⚠ **Eight of twenty-two were deleted because the thread was obvious from the sentence** — **and a mention the reader did not need is a sentence about the writer knowing what they are writing about.**',
  '**A pronoun carries a thread across one paragraph boundary, rarely, and across two, never.** ⚠ **At five thousand words a reader may be asked to do one thing at a time** — **and solving a reference is not the thing you want them doing.**',
  '**A term is not a thread.** ⚠ **_Write-off_, _establishment_, _district rule_: a term is the same word every time, and precision is the point** — **and where the term and the thread are the same word, the name stays and the advancing is done by the facts attached to it.**',
  '**One thread across eight paragraphs, and not two.** ⚠ **Two threads lose the second by paragraph 6** — **and a reader who says the piece has two pieces in it has given you 23.1\'s finding from the other end.**',
  '**Pronunciation.** 🔊 **Track 23.6** **Say the name once, with stress, and then read three advancing descriptions with no stress on the thread at all.** ⚠ **The stress is what a reader hears as repetition** — **and a description read flat is heard as new information, which is what it is.**',
  '**Practise:** Advance it. **1** _the aforementioned figure_  **2** _the figure nobody has recomputed_  **3** the ninth repetition of the name  **4** _this issue_  **5** a term that cannot be replaced',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the mention from the card. B says **whether it advances, marks time or should go**, and rewrites the ones that mark time. ⚠ **Two rows on each card advance already** — **and there B says what fact each one adds.** Change cards.'));
out.push(table(['Card A – the mention as written', 'Card B – the mention as written'], [
  ['_the aforementioned agreement figure_', '_this issue_'],
  ['_⚠ the figure nobody has recomputed since 2011_', '_⚠ the objection a reader of the 2011 study would make_'],
  ['_inter-transcriber agreement_ (ninth mention)', '_the agreement question_ (eleventh mention)'],
  ['_⚠ the measure that counts only attempted utterances_', '_⚠ the two hundred utterances the method was accepted on_'],
  ['_the said figure_', '_the figure in question_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** advances, marks time or goes — and the fact each advance adds. ⚠ **Rows 2 and 4 on both cards advance, and the room must name the fact** — **a year, a reader, a counting rule and a corpus size.** **Rows 5 are the pair the cycle turns on**: both are longer than the name, both point backwards, **and the room will defend them as formal, which is exactly what they are and is why they mark time.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Count **your own most repeated phrase**, then go through the piece and mark each mention **advance, mark time, or go.** ⚠ **Then rewrite the ones that mark time so that each adds one fact.** **In this class the counts ran from six to thirty-one, the proportion doing work ran from a third to all six** — **and every student with a count over fifteen found at least four that should simply go.**'));
out.push(p('**b**  Swap. Your partner reads **your advancing descriptions in order** and asks **whether any two make the same advance.** ⚠ **Then the harder question: what is your piece about, in their words?** — **and in this class six of ten readers named the thread, three named the subject of the longest paragraph, and one named the title.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has counted a phrase: inter-transcriber agreement, thirty-one times in five thousand two hundred words, which is once every hundred and seventy words, and she had thought she was being precise, and she was being precise nine times and beating a drum twenty-two times. Ms Huda asked what takes the place of the other twenty-two, and fourteen definite descriptions and eight nothing at all, because in eight places the reader already knew what she was talking about and she had told them anyway. Mrs Khoury said each of the fourteen must advance the thread, which is the hard half, because the aforementioned figure advances nothing and is worse than the name, being longer and pointing backwards, where the figure nobody has recomputed since 2011 carries the thread and adds a fact. Mr Shihabi asked whether fourteen advances in eight paragraphs is possible, and fourteen, of which four are the same advance, which her partner found in nine minutes: three descriptions all saying that nobody had recomputed it, so the thread advanced in ten places and marked time in four, and the four are worse than the name they replaced because they look like progress. Mrs Oueidat asked whether a pronoun can carry it, and across a paragraph boundary rarely and across two never, because at five thousand words a reader may be asked to do one thing at a time and solving a reference is not that thing. Dr Qabbani asked for the test, and ask a reader what the piece is about and see whether they name the thread: one of her two readers named it and the other named the 2011 study, and the one who named the study read it in twenty minutes. Mr Tayara asked whether the name is ever right, and nine times, each in a place where precision is the point. Mrs Rizk said hers is a word she cannot replace, and Mrs Oueidat said then it is a term and not a thread, and a term has to be the same word every time. Mrs Ajouz asked how many threads a piece can carry, and one across eight paragraphs, and two does not work, because both readers lost the second by paragraph 6 and one said the chapter had two chapters in it. And Mrs Tarabishi said the thing she will take away is the hundred and twenty-four words, and that it is not the ninety words of repetition that matter but that the reader was told twenty-two times that she knew what she was writing about._'));
out.push(p('**Listener task:** write two of your partner\'s advancing descriptions and the fact each one adds.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s note on the thirty-one mentions. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _note on one phrase, thirty-one times_ · _and what replaced twenty-two of them_ · **18 January**',
  '**The count.** **_Inter-transcriber agreement_, thirty-one times in five thousand two hundred words.** ⚠ **One every hundred and seventy words, and a hundred and twenty-four words of the chapter.** **Counted in two minutes with the search box, after fourteen months.**',
  '**The nine that stayed.** **A definition, four figures, three disagreements with other writers, and the sentence in paragraph 12 that says what a reader may not take from the chapter.** ⚠ **In all nine, precision is the point and approximation would cost something** — **which is the only rule I have for keeping the name.**',
  '**The eight that went altogether.** **Deleted, and nothing put in their place.** ⚠ **In all eight the thread was obvious from the sentence, and the reader already knew** — **and a mention the reader does not need is a sentence about me knowing what I am writing about, which I had not thought of as something a reader could hear.**',
  '**The fourteen replacements, and the rule.** **Each must advance.** ⚠ **_The figure nobody has recomputed since 2011_ carries the thread and adds a year.** **_The measure that counts only the utterances both transcribers attempted_ carries it and adds a counting rule** — **and the reader holds two things where they held one.**',
  '**The four that failed.** **Three of my descriptions all said that nobody had recomputed it, and a fourth repeated the counting rule.** ⚠ **They mark time and they look like progress, which makes them worse than the name** — **and my partner found all four in nine minutes by reading only the descriptions, in order, with nothing between them.**',
  '**What I tried that does not work.** **Two threads.** ⚠ **My first version carried the agreement figure and the corpus weighting together** — **and both readers had lost the weighting by paragraph 6, and one of them said the chapter had two chapters in it, which is what 23.1 said about paragraphs 4 and 9 from the other end.**',
  '**The pronoun I removed.** **_It_ at the head of paragraph 7, referring to a figure last named in paragraph 5.** ⚠ **Nine hundred words apart.** **Both readers solved it and both slowed down, and one wrote _which?_ in the margin** — **and a reader solving a reference is not reading the sentence.**',
  '**The test, and what it found.** **I asked both readers what the chapter is about.** ⚠ **One named the thread and one named the 2011 study, which is the subject of three paragraphs** — **and the one who named the study had read the chapter in twenty minutes, which is a fact about readers and not about his attention.**',
  '**And what the count really measured.** **Not ninety words.** ⚠ **Twenty-two assurances to the reader that I knew my own subject** — **and I have begun to think that is what a long piece\'s repetitions always are.**',
  '**And the second count, which I made afterwards and nobody asked for.** **_It is important to note_ eleven times, _as discussed above_ nine times.** ⚠ **Twenty more assurances, in a chapter that now has nine** — **and the room should know that the phrase I counted first was the one I was proud of, and the twenty I found second are the ones I shall have to watch for the rest of my life.**',
]));
out.push(item('1', 'What are the nine places where the name stayed, and what is her rule for them?'));
out.push(item('2', 'How did her partner find the four that failed?'));
out.push(item('3', 'What happened when she tried two threads, and which earlier cycle does she connect it to?'));
out.push(writers([
  'A note on one phrase: **the count, with the words-per-mention arithmetic** → **the mentions that stayed, and the rule for them** → **the ones deleted altogether** → **the replacements, with what each advance adds** → **the ones that marked time, and how they were found** → **the pronoun you removed** → **the test, and what it found.**',
  '⚠ **Give the arithmetic of the repetition and not only the count.** _Thirty-one mentions of a four-word phrase: one every hundred and seventy words, a hundred and twenty-four words of the chapter._ **The count alone is a fact about the writer** — **and the density is a fact about the reader\'s experience, which is what the cycle is about.**',
  '**Name the rule for keeping the name, and apply it to a list.** ⚠ _A definition, four figures, three disagreements, and one sentence about what a reader may not take._ **Nine places where approximation would cost something** — **and a writer who cannot list them is not keeping the name for a reason.**',
  '**Say how the failures were found, because the method is transferable.** ⚠ _My partner read only the descriptions, in order, with nothing between them, and found four in nine minutes._ **A writer cannot do that to their own piece** — **and naming the procedure is worth more than naming the four.**',
  '⚠ And **end on what the count measured.** _Twenty-two assurances to the reader that I knew my own subject._ **That is a sentence about every long piece and not only about yours** — **and a note that ends on the ninety words has counted the cost and missed the finding.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own note (120 words or more).'));
out.push(p('**The count.** **_______________, ______________ times in ______________ words.** ⚠ **One every ______________ words.**   **The ones that stayed.** **______________.** ⚠ **In all of them precision is the point.**   **The ones that went altogether.** **______________, and nothing in their place.**   **The replacements, and the rule.** **Each must ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count and the density, both',
  'A list of the places where the name stays',
  'Each replacement with the fact it adds',
  'The replacements that mark time, found by reading them in order',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their advancing descriptions in order, with nothing between them**, and the room says which two make the same advance.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the count and the density, the mentions that stayed, those deleted, the replacements with their advances, the four that marked time, the pronoun, the test, and what the count really measured.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the density arithmetic, a fact named for every advance, and the replacements that mark time identified.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **The ten most-repeated phrases and their counts:** **six to thirty-one** — **and the proportion doing work ran from a third to all six, and every count over fifteen contained at least four that should simply go.** **Then: what is your piece about, in your reader\'s words?** **Six of ten named the thread, three named the longest paragraph\'s subject, and one named the title.**'));
out.push(hw('**Count your most repeated phrase, mark every mention _advance_, _mark time_ or _go_, and rewrite the ones that mark time.** ⚠ **Then the harder half: read your advancing descriptions aloud in order, with nothing between them, to somebody else.** **In this class seven of ten were given a pair that makes the same advance, and the average time to find it was four minutes.** **Bring the count and the pair.** **23.4 writes the paragraph that exists only to let the next one work**, so bring the paragraph of yours that you suspect says nothing new.'));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  The paragraph that lets the next one work'));
out.push(p('**Function:** writing the paragraph that exists only to let the next one work   ·   **Grammar:** the load-bearing paragraph that says nothing new   ·   **Pronunciation:** the restatement read flat, in the reader\'s terms'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the paragraph of yours that you suspect says nothing new.** ⚠ **Say its number and what it is next to.** **In this class ten such paragraphs were named and eight of them were next to the paragraph their writer considered the most important** — **and your teacher writes the ten pairs on the board, which is the whole hypothesis of the cycle before anybody has tested anything.**'));
out.push(board('Paragraph 6 says nothing new.', 'And paragraph 7 cannot be read without it.'));
out.push(p('**b**  Which two paragraphs are load-bearing? **1** _A paragraph that restates the counting rule in the reader\'s terms, immediately before the figure that depends on it._  **2** _A paragraph about a study the writer likes, which nothing else refers to._  **3** _A paragraph that gives the reader the vocabulary of the next three paragraphs, with no new claim in it._  **4** _A paragraph that summarises the three paragraphs above it._  **5** _A paragraph that repeats the premise eleven hundred words after it was established._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the test for a load-bearing paragraph is?   **A** whether the writer likes it   **B** **removing it and giving both versions to a reader** — and seeing what happens to the paragraph after it   **C** whether it has a figure in it'));
out.push(p('**b**  Listen again. **1** What does Mrs Tarabishi say a reader said they learnt from paragraph 6?   **2** What happens to paragraph 7 when paragraph 6 is removed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  Nothing new, and it cannot go', [
  ['Ms Huda', 'Mrs Tarabishi has a paragraph that says nothing new.'],
  ['Mrs Tarabishi', '⚠ **Paragraph 6, two hundred and ninety words, and there is not one fact in it that is not somewhere above.** **It restates the counting rule of the 2009 measure in the terms the reader has been using since paragraph 4** — **and my line for it in the plan is _lets paragraph 7 be read as arithmetic rather than as an opinion_.**'],
  ['Ms Huda', 'What did your reader learn from it?'],
  ['Mrs Tarabishi', '⚠ **Nothing, and she said so, and she was right.** **I asked both readers what they had learnt from paragraph 6 and one said _nothing_ and the other said _that you are about to say something about the figure_** — **and the second answer is what the paragraph is for, in a reader\'s own words, which I could not have written myself.**'],
  ['Mrs Khoury', 'And the test?'],
  ['Mr Shihabi', '⚠ **Take it out and give both versions to somebody who has not read either.** **That is the whole test and it is empirical** — **because every writer in this room can tell you why their weakest paragraph is load-bearing, and the only thing that settles it is what happens to the paragraph after it.**'],
  ['Mrs Tarabishi', '⚠ **Without paragraph 6, paragraph 7 was read as an opinion by both readers.** **One of them wrote _why do you say that?_ beside a figure that is a count** — **and with paragraph 6 in, neither of them wrote anything, which is the result and is not visible in the sentence.**'],
  ['Mrs Oueidat', 'What did paragraph 6 actually do?'],
  ['Mrs Khoury', '⚠ **It handed the reader the vocabulary and the counting rule, one page before the figure needed them.** **A reader who meets a figure and a rule in the same paragraph has to hold both** — **and a reader who had the rule a page ago holds one thing, and the figure arrives as arithmetic.**'],
  ['Dr Qabbani', 'So it is a courtesy.'],
  ['Mrs Khoury', '⚠ **It is a structural element and the room should resist the word courtesy, which will cost them the cycle.** **A courtesy can be dropped when space is short.** **A load-bearing paragraph cannot be dropped, and the proof is that the next paragraph stops working** — **and the room will test that in Stage 4 and will not believe it until they do.**'],
  ['Mr Tayara', 'And the paragraph from 23.1?'],
  ['Mrs Tarabishi', '⚠ **Paragraph 11, which I could not write a line for, and I had hoped this cycle would rescue it.** **It did not.** **I took it out and gave both versions to two readers and neither noticed anything at all** — **and paragraph 12 reads exactly as it did, so paragraph 11 is holding nothing up and is not a load-bearing paragraph, which means it goes to 23.5.**'],
  ['Mrs Rizk', 'How many paragraphs are load-bearing?'],
  ['Mrs Tarabishi', '⚠ **Two of twelve: paragraph 6 and paragraph 10.** **Ten of mine carry a new claim and two carry none** — **and that is about a sixth of a chapter spent on paragraphs that would score nothing in any summary of my argument.**'],
  ['Mrs Ajouz', 'Is a summary not the test of a piece?'],
  ['Mrs Khoury', '⚠ **It is the test of a piece\'s claims and not of its architecture, and that distinction is the whole of Unit 23.** **Summarise this chapter and paragraphs 6 and 10 vanish without loss** — **and remove them from the chapter and two of the claims that do appear in the summary stop being readable, which no summary can show you.**'],
  ['Mr Attar', 'Can a load-bearing paragraph be short?'],
  ['Mrs Tarabishi', '⚠ **Mine are two hundred and ninety and two hundred and forty words, and I tried to cut the first to ninety.** **At ninety words the restatement reads as a reminder and the reader hears impatience** — **and both readers found the ninety-word version patronising, which I had not expected and cannot fully explain.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the reader\'s own sentence about paragraph 6.** **_That you are about to say something about the figure._** **That is what the paragraph is for, said by somebody who learnt nothing from it** — **and I have written four chapters and never once built a paragraph on purpose to do that, which means the two I have were accidents.**'],
]));
out.push(sp());
out.push(box('Language box – the load-bearing paragraph', [
  '**A paragraph may exist to let the next one work, and carry no new claim at all.** ⚠ **_Lets paragraph 7 be read as arithmetic rather than as an opinion._** **Two hundred and ninety words, not one fact in it that is not above** — **and a reader who learnt nothing from it is reading it correctly.**',
  '**The test is empirical and it is the only one there is.** ⚠ **Remove it; give both versions to somebody who has read neither; see what happens to the paragraph after it** — **because every writer can explain why their weakest paragraph is load-bearing, and only the next paragraph can settle it.**',
  '**What the removal looks like when the paragraph is load-bearing.** ⚠ **The next paragraph is read as an opinion.** **_Why do you say that?_ beside a figure that is a count** — **and with the paragraph in, nothing is written in the margin at all, which is a result that is invisible in the sentence.**',
  '**What it does: hands the reader the rule, the vocabulary or the measure, one page before the figure needs it.** ⚠ **A reader who meets a figure and its rule together has to hold two things** — **and a reader who had the rule a page ago holds one, and the figure arrives as arithmetic.**',
  '**Not a courtesy.** ⚠ **A courtesy can be dropped when space is short; a load-bearing paragraph cannot, and the proof is in the next paragraph** — **and the room will not believe this until it has run the test on its own piece.**',
  '**A paragraph that holds nothing up is not rescued by this cycle.** ⚠ **Take it out, and if two readers notice nothing, it is not load-bearing** — **and it goes to 23.5, which is the cut, and that is the right order: find it in 23.1, test it here, cut it there.**',
  '**And it cannot be shortened to a reminder.** ⚠ **At ninety words a restatement is heard as impatience, and two readers called it patronising** — **so a load-bearing paragraph is paid for at full length, which is about a sixth of a long piece.**',
  '**Pronunciation.** 🔊 **Track 23.8** **Read the restatement flat, in the reader\'s terms, with no stress on the words that are being restated.** ⚠ **Stress on the restated term tells the listener they are being reminded** — **and the whole value of the paragraph is that they do not notice it at all.**',
  '**Practise:** Load-bearing, or not? **1** a restated counting rule before the figure  **2** a study nothing refers to  **3** vocabulary for the next three paragraphs  **4** a summary of the three above  **5** a premise repeated eleven hundred words later',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the paragraph description from the card. B says **whether it is load-bearing**, names **the test**, and says **what would happen to the next paragraph.** ⚠ **Two rows on each card are not load-bearing** — **and there B says what the removal would cost, which is nothing.** Change cards.'));
out.push(table(['Card A – the paragraph as described', 'Card B – the paragraph as described'], [
  ['_Restates the counting rule immediately before the figure._', '_Gives the vocabulary of the next three paragraphs._'],
  ['_⚠ A study the writer likes, which nothing refers to._', '_⚠ A premise repeated eleven hundred words later._'],
  ['_Puts the reader in the room before the dialogue begins._', '_States the objection the next paragraph answers._'],
  ['_⚠ A summary of the three paragraphs above it._', '_⚠ Two sentences of the writer\'s own history._'],
  ['_Defines the one term the conclusion depends on._', '_Names the four accounts before the finding._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** load-bearing or not, the test, and what happens next. ⚠ **Rows 2 and 4 on both cards are not load-bearing and the removal costs nothing** — **and the room should notice that two of the four are the kind of paragraph a writer defends hardest.** **Rows 5 are the pair the cycle turns on**: both look like scene-setting and both are load-bearing, **because the conclusion and the finding are unreadable without them.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the paragraph you suspect says nothing new** and **run the test**: remove it, and give both versions to somebody who has read neither. ⚠ **Ask them one question: what did you learn from the paragraph after it?** **In this class ten tests were run; three paragraphs proved load-bearing, five proved removable, and two produced readers who could not tell the versions apart at all** — **which counts as removable and should be said so.**'));
out.push(p('**b**  Swap. Your partner asks **what your load-bearing paragraph hands the reader** — a rule, a vocabulary, a measure or an objection. ⚠ **Then the harder question: could you shorten it by half?** — **and in this class four students tried and three were told that the short version was patronising, which is the same result Mrs Tarabishi got.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has a paragraph that says nothing new: paragraph 6, two hundred and ninety words, with not one fact in it that is not somewhere above, restating the counting rule of the 2009 measure in the terms the reader has been using since paragraph 4, and her plan line for it is that it lets paragraph 7 be read as arithmetic rather than as an opinion. Ms Huda asked what her reader learnt from it, and nothing, and the reader said so and was right, and the second reader said that she learnt that the writer was about to say something about the figure, which is what the paragraph is for, in a reader\'s own words. Mrs Khoury asked for the test, and Mr Shihabi said take it out and give both versions to somebody who has not read either, because every writer can tell you why their weakest paragraph is load-bearing and only the next paragraph settles it. Without paragraph 6, paragraph 7 was read as an opinion by both readers, and one wrote why do you say that beside a figure that is a count, and with paragraph 6 in, neither wrote anything at all. Mrs Oueidat asked what paragraph 6 actually does, and Mrs Khoury said it hands the reader the vocabulary and the counting rule one page before the figure needs them, because a reader who meets a figure and a rule together has to hold both. Dr Qabbani said so it is a courtesy, and Mrs Khoury said it is a structural element and the room should resist the word courtesy, because a courtesy can be dropped when space is short and a load-bearing paragraph cannot. Mr Tayara asked about the paragraph from 23.1, and paragraph 11, which she had hoped this cycle would rescue and which it did not: she took it out and neither reader noticed anything, so it goes to 23.5. Mrs Rizk asked how many paragraphs are load-bearing, and two of twelve, which is about a sixth of a chapter spent on paragraphs that would score nothing in a summary. Mrs Ajouz asked whether a summary is not the test of a piece, and Mrs Khoury said it is the test of a piece\'s claims and not of its architecture. Mr Attar asked whether a load-bearing paragraph can be short, and at ninety words the restatement reads as a reminder and both readers found it patronising. And Mrs Tarabishi said the thing she will take away is her reader\'s own sentence about paragraph 6, and that she has written four chapters and never once built such a paragraph on purpose._'));
out.push(p('**Listener task:** write what your partner\'s load-bearing paragraph hands the reader, and what happened to the next one without it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s note on paragraph 6. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _note on two paragraphs that say nothing new_ · _with the test and both results_ · **25 January**',
  '**What paragraph 6 contains.** **Two hundred and ninety words and not one fact that is not above it.** ⚠ **It restates the counting rule of the 2009 measure in the terms the reader has been using since paragraph 4** — **and the plan line for it is: _lets paragraph 7 be read as arithmetic rather than as an opinion_.**',
  '**The test, exactly as I ran it.** **Two versions of pages 4 to 7, with and without paragraph 6, to two readers who had read neither.** ⚠ **One question: what did you learn from the paragraph after it?** **Fifteen minutes, and it is the only test in this chapter that cost me nothing but other people\'s time.**',
  '**The result without it.** **Both read paragraph 7 as an opinion.** ⚠ **One wrote _why do you say that?_ beside a figure that is a count of utterances** — **and the figure had not changed, and the sentence had not changed, and the reader had.**',
  '**The result with it.** **Neither wrote anything in the margin at all.** ⚠ **That is the result, and it is invisible: a paragraph whose success is an absence of marginal notes cannot be defended in a seminar and can be demonstrated in fifteen minutes.**',
  '**What a reader said she learnt from paragraph 6.** **_Nothing._** ⚠ **And the second reader: _that you are about to say something about the figure._** **The second answer is what the paragraph is for, in the words of somebody who learnt nothing from it** — **and I could not have written that sentence myself.**',
  '**Paragraph 10, the other one.** **Two hundred and forty words, no new claim.** ⚠ **It states the objection that paragraph 11 was supposed to answer and that paragraph 12 now answers** — **and its removal left paragraph 12 answering a question the reader had not been asked, which one reader noticed and the other did not, so it is load-bearing on one reading of the evidence and I have kept it.**',
  '**Paragraph 11, which this cycle did not rescue.** **Removed, both versions given, and neither reader noticed anything.** ⚠ **Paragraph 12 reads exactly as it did** — **so paragraph 11 is holding nothing up, and it is three hundred and eighty words about a study I like, and it goes to the cut.**',
  '**What I tried that failed.** **Shortening paragraph 6 to ninety words.** ⚠ **Both readers called the short version patronising and one of them said it told her twice what she already knew** — **which is the opposite of what the long version does, and I cannot fully explain the difference except that at length a restatement is a passage and at ninety words it is a reminder.**',
  '**And the arithmetic of the chapter now.** **Twelve paragraphs: ten carry a claim, two carry none and are load-bearing, and one carried nothing and is going.** ⚠ **About a sixth of the chapter is paragraphs that would score nothing in any summary of my argument** — **and I have never built one on purpose in four chapters, which means the two I have are accidents of the order I happened to write in.**',
]));
out.push(item('1', 'How did she run the test, and how long did it take?'));
out.push(item('2', 'What did the two readers say they learnt from paragraph 6?'));
out.push(item('3', 'Why has she kept paragraph 10, and what happened to paragraph 11?'));
out.push(writers([
  'A note on load-bearing paragraphs: **what the paragraph contains, in figures** → **the test, exactly as run** → **the result without it** → **the result with it** → **what a reader said they learnt** → **the other paragraph, with its weaker evidence** → **the one this cycle did not rescue** → **and what you tried that failed.**',
  '⚠ **Describe the test so that another writer can run it tomorrow.** _Two versions of pages 4 to 7, to two readers who had read neither, one question, fifteen minutes._ **A note that asserts a paragraph is load-bearing has asserted the one thing in this cycle that cannot be asserted** — **and the procedure is the transferable part.**',
  '**Report the margin note, in the reader\'s hand.** ⚠ _Why do you say that? beside a figure that is a count._ **The figure had not changed and the sentence had not changed** — **and that is the whole demonstration, in one quoted question.**',
  '**Say plainly that the successful result is an absence.** ⚠ _Neither wrote anything in the margin at all._ **A paragraph whose success is nothing happening cannot be defended in a seminar** — **and naming that difficulty is what makes the fifteen-minute test worth describing.**',
  '⚠ And **report the weaker case honestly, and what it leaves you with.** _Paragraph 10 is load-bearing on one reading of the evidence, and I have kept it._ **One reader noticed and one did not** — **and a note that rounds that up to a result has thrown away the only honest sentence in the paragraph.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own note (120 words or more).'));
out.push(p('**What paragraph ______________ contains.** **______________ words and not one fact that is not above it.** ⚠ **It ______________.**   **The test, exactly as I ran it.** **Two versions of ______________, to ______________ readers who had read neither.** ⚠ **One question: ______________.**   **The result without it.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The test described so another writer could run it',
  'The result without the paragraph, in a reader\'s words',
  'The result with it, named as an absence',
  'Any paragraph the cycle did not rescue, sent to the cut',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their plan line for the load-bearing paragraph**, and the room says what it hands the reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the paragraph in figures, the test as run, both results, what a reader said they learnt, the weaker case, the paragraph not rescued, what failed, and the arithmetic of the piece now.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the test described as a procedure, a reader\'s own words quoted, and the weaker case not rounded up.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **Ten tests run: three load-bearing, five removable, and two where the reader could not tell the versions apart** — **and those two count as removable, which the room should hear said plainly.** **Then: what does each load-bearing paragraph hand the reader?** **A rule, a vocabulary, a measure or an objection** — **and in nine of ten cases it was one of those four.** **Then the ninety-word version, and the word _patronising_.**'));
out.push(hw('**Run the test on the paragraph you suspect: two versions, two readers, one question.** ⚠ **Then the harder half: if it proves load-bearing, write the plan line for it that names what it hands the reader.** **In this class three of ten proved load-bearing and all three writers had been defending the paragraph on other grounds, two of them on grounds of style.** **Bring the test, the result and the line.** **23.5 cuts a thousand words**, so bring the piece and be ready to lose a fifth of it.'));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  A thousand words, and what the reader loses'));
out.push(p('**Function:** cutting a thousand words and naming what the reader loses   ·   **Grammar:** the declared cut, and the cut nobody notices   ·   **Pronunciation:** the loss stated as a loss'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a fifth of your longest piece, as a number.** ⚠ **The number of words, not the proportion.** **In this class the fifths ran from a hundred and eighty to a thousand and forty** — **and your teacher writes the ten numbers on the board and leaves them there, because the number is what makes the cycle possible: a writer asked to cut _some_ cuts adjectives, and a writer asked to cut a thousand and forty words has to remove a paragraph.**'));
out.push(board('Cut: 1,040 words of 5,200.', 'And what the reader loses, cut by cut.'));
out.push(p('**b**  Which two cuts are declared? **1** _I have tightened the chapter throughout._  **2** _I have removed paragraph 11, three hundred and eighty words on the 2011 study; the reader loses the study and nothing that follows depends on it._  **3** _I have made some cuts for length._  **4** _I have cut a hundred and seventy words of hedging; the reader loses the impression that I am cautious, which one of my two readers valued._  **5** _The chapter is now considerably shorter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a declared cut must name?   **A** the number of words   **B** **what the reader loses** — and to whom that loss matters   **C** the reason for the length limit'));
out.push(p('**b**  Listen again. **1** Which of Mrs Tarabishi\'s cuts did a reader notice?   **2** What does Mrs Khoury say about a cut nobody notices?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  A thousand and forty words', [
  ['Ms Huda', 'Mrs Tarabishi has cut a fifth of her chapter.'],
  ['Mrs Tarabishi', '⚠ **A thousand and forty words of five thousand two hundred, and the chapter is four thousand one hundred and sixty.** **Four cuts: paragraph 11 at three hundred and eighty, paragraph 9 at three hundred and sixty, about ninety words of a repeated phrase, and two hundred and ten words of hedging** — **and I can tell you what the reader loses in each of the four, which took me longer than the cutting did.**'],
  ['Ms Huda', 'Begin with paragraph 11.'],
  ['Mrs Tarabishi', '⚠ **The reader loses a study from 2011 that I like and that nothing in the chapter depends on.** **23.4 proved it: two readers, both versions, nothing noticed** — **and the honest declaration is that the loss is mine and not the reader\'s, which took me three attempts to write without defending the paragraph in the same sentence.**'],
  ['Mrs Khoury', 'And paragraph 9?'],
  ['Mrs Oueidat', '⚠ **The reader loses a reminder at the midpoint of the chapter, which is a real loss and is not nothing.** **23.1 found that 9 repeats 4\'s job** — **and the question the room should ask is whether a reader at paragraph 9 needs the premise again, which depends entirely on whether 23.3 was done.**'],
  ['Mrs Tarabishi', '⚠ **It was, and that is why the cut is safe.** **The advancing descriptions carry the premise forward in paragraphs 5, 7 and 8, so the reader has met it three times in other words** — **and without 23.3 the cut of paragraph 9 would have left a reader at the midpoint holding nothing, which is the case in which a repeated paragraph is doing real work.**'],
  ['Mr Shihabi', 'Which cut did anybody notice?'],
  ['Mrs Tarabishi', '⚠ **The hedging, and it is the one I had thought was safest.** **Two hundred and ten words: _it may be that_, _it would appear_, _arguably_, nineteen instances.** **One of my two readers said the chapter had become _confident in a way I did not quite trust_** — **and she is the reader whose field it is, and the other reader noticed nothing.**'],
  ['Mrs Khoury', '⚠ **Which is the finding of the cycle and it is not about hedging.** **A cut nobody notices should have been made before anybody asked** — **and a cut somebody notices is the only cut that was ever a decision, so the nineteen hedges are the only part of the thousand and forty words that the chapter actually paid for.**'],
  ['Dr Qabbani', 'Does she put some back?'],
  ['Mrs Tarabishi', '⚠ **Four of the nineteen, and only where the claim is genuinely uncertain.** **Fifteen were decoration and four were accurate** — **and the four are now in the places where I do not know, which is 19.5, and the reader who noticed has read it again and says the trust is back and the confidence has stayed.**'],
  ['Mr Tayara', 'How do you cut without reading it all again?'],
  ['Mrs Tarabishi', '⚠ **You cut from the plan and not from the piece, which is the mechanical half of the cycle.** **Twelve lines on one page: cross out the lines, not the paragraphs** — **and I did the whole thousand and forty words from the plan in about eleven minutes, and then spent two hours on what the reader loses.**'],
  ['Mrs Rizk', 'Two hours on four sentences?'],
  ['Mrs Khoury', '⚠ **Four sentences that a supervisor will read instead of re-reading the chapter, which is the point.** **A declared cut is a document: it tells the reader what has gone and what they are no longer being given** — **and a chapter arriving a fifth shorter with no declaration asks its reader to work out what has changed, which nobody does, so they reread the whole thing.**'],
  ['Mrs Ajouz', 'And if the cut turns out to be wrong?'],
  ['Mrs Tarabishi', '⚠ **Then the declaration is the thing that makes it recoverable, and this has already happened to me once.** **My supervisor asked for paragraph 9 back and I had the words, because a declared cut is kept** — **and he withdrew the request when he saw the three advancing descriptions, which he had not noticed on the first reading.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the proportions.** **Of a thousand and forty words cut, nine hundred and thirty were never doing anything and a hundred and ten were** — **and I had spent four years believing that cutting was about finding the nine hundred and thirty, when the whole difficulty of it is the hundred and ten.**'],
]));
out.push(sp());
out.push(box('Language box – the declared cut', [
  '**Cut to a number, not to a proportion.** ⚠ **_A thousand and forty words of five thousand two hundred._** **A writer asked to cut _some_ cuts adjectives** — **and a writer asked for a thousand and forty has to remove a paragraph, which is the only cut that changes a long piece.**',
  '**Name what the reader loses, cut by cut.** ⚠ **_The reader loses a study from 2011 that I like and that nothing depends on._** **_The reader loses a reminder at the midpoint._** **_The reader loses the impression that I am cautious._** **Three different kinds of loss, and only one of them is nothing.**',
  '**Cut from the plan and not from the piece.** ⚠ **Twelve lines on one page: cross out lines.** **A thousand words in about eleven minutes** — **and then the hours go on what the reader loses, which is the part a reader will actually read.**',
  '**A cut nobody notices should have been made before anybody asked.** ⚠ **And a cut somebody notices is the only cut that was ever a decision** — **so the noticed cut is the part of the thousand words the piece actually paid for.**',
  '**Where a loss matters to one reader and not to another, say which reader.** ⚠ **_She is the reader whose field it is, and the other noticed nothing._** **A loss with no reader attached to it is an opinion about the piece** — **and a loss with a reader attached is a decision somebody can disagree with.**',
  '**The declared cut is a document, and it is what makes a cut recoverable.** ⚠ **A supervisor asked for a cut paragraph back and the words were there** — **and a piece that arrives a fifth shorter with no declaration asks its reader to work out what has changed, which nobody does: they reread the whole thing.**',
  '**And the proportions are the finding.** ⚠ **Of a thousand and forty words, nine hundred and thirty were never doing anything and a hundred and ten were** — **and the whole difficulty of cutting is the hundred and ten.**',
  '**Pronunciation.** 🔊 **Track 23.10** **Say the loss flat, as a loss, with no lift at the end and no _but_ after it.** ⚠ **A loss followed by a justification is a defence** — **and the reader has not disagreed with you yet, so the defence tells them which cut to argue about.**',
  '**Practise:** Declare it. **1** a paragraph nothing depends on  **2** a duplicate premise  **3** ninety words of a repeated phrase  **4** nineteen hedges, four of them accurate  **5** a loss that matters to one reader',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the cut from the card. B declares it: **the words, the paragraph, and what the reader loses.** ⚠ **Two rows on each card are cuts a reader will notice** — **and there B names the reader and what they will say.** Change cards.'));
out.push(table(['Card A – the cut as made', 'Card B – the cut as made'], [
  ['_Paragraph 11, three hundred and eighty words._', '_Paragraph 9, three hundred and sixty words._'],
  ['_⚠ Two hundred and ten words of hedging, nineteen instances._', '_⚠ The three sentences of my own history._'],
  ['_Ninety words of a repeated phrase._', '_Four descriptions that made the same advance._'],
  ['_⚠ The one example from outside the field._', '_⚠ The paragraph that named the four accounts._'],
  ['_I have tightened the chapter throughout._', '_The chapter is now considerably shorter._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the words, the paragraph, and the loss. ⚠ **Rows 2 and 4 on both cards are cuts a reader notices, and the room must name the reader** — **a supervisor, a colleague in the field, a reader from outside it, and in one case the writer\'s own examiner.** **Rows 5 are the pair the cycle turns on**: neither is a declaration at all, **and both are the sentence almost every writer sends with a shortened piece.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Cut **a fifth of your piece, to the number you wrote on the board**, working from the plan and not from the piece. ⚠ **Then write the declaration: the words, the paragraph, and what the reader loses, cut by cut.** **In this class the cutting took between four and nineteen minutes and the declarations took between forty minutes and two hours** — **and every student without exception said the second half was the harder.**'));
out.push(p('**b**  Swap. Your partner reads **the declaration and then the cut piece** and says **which loss they would argue with.** ⚠ **Then the harder question: which cut would you not have noticed?** — **and in this class the average was three of four cuts unnoticed, and the one noticed was in six cases out of ten the hedging.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has cut a thousand and forty words of five thousand two hundred, leaving four thousand one hundred and sixty, in four cuts: paragraph 11 at three hundred and eighty, paragraph 9 at three hundred and sixty, about ninety words of a repeated phrase, and two hundred and ten words of hedging, and she can say what the reader loses in each of the four, which took longer than the cutting did. On paragraph 11 the reader loses a study from 2011 that she likes and that nothing in the chapter depends on, which 23.4 proved with two readers and both versions, and the honest declaration is that the loss is hers and not the reader\'s. Mrs Oueidat said that on paragraph 9 the reader loses a reminder at the midpoint, which is a real loss and is not nothing, and whether it matters depends entirely on whether 23.3 was done. Mrs Tarabishi said it was, and that is why the cut is safe, because the advancing descriptions carry the premise forward in paragraphs 5, 7 and 8. Mr Shihabi asked which cut anybody noticed, and the hedging, which she had thought was safest: two hundred and ten words in nineteen instances, and one of her two readers said the chapter had become confident in a way she did not quite trust, and that reader is the one whose field it is. Mrs Khoury said that is the finding of the cycle and it is not about hedging, because a cut nobody notices should have been made before anybody asked, and a cut somebody notices is the only cut that was ever a decision. Dr Qabbani asked whether she puts some back, and four of the nineteen, in the places where she does not know. Mr Tayara asked how you cut without reading it all again, and you cut from the plan and not from the piece: cross out lines, which took eleven minutes. Mrs Rizk asked about two hours on four sentences, and Mrs Khoury said four sentences a supervisor will read instead of rereading the chapter. Mrs Ajouz asked what happens if the cut is wrong, and the declaration is what makes it recoverable, and her supervisor asked for paragraph 9 back and then withdrew the request. And Mrs Tarabishi said the thing she will take away is the proportions: of a thousand and forty words, nine hundred and thirty were never doing anything and a hundred and ten were, and she had spent four years believing that cutting was the work of finding the nine hundred and thirty, when the whole difficulty of it is the hundred and ten._'));
out.push(p('**Listener task:** write two of your partner\'s cuts with the loss beside each, and say which one a reader will notice.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s declaration of the cut. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _declaration of a cut: chapter 3, from 5,200 words to 4,160_ · _four cuts, with what the reader loses_ · **1 February**',
  '**Cut 1 · Paragraph 11, three hundred and eighty words.** **A study from 2011 and its two figures.** ⚠ **What the reader loses: the study, and nothing else** — **nothing after it refers to it, and when it was removed in the 23.4 test neither of two readers noticed anything at all.** **The loss is mine: I like it.**',
  '**Cut 2 · Paragraph 9, three hundred and sixty words.** **The premise that the three studies measured agreement differently, stated for the second time.** ⚠ **What the reader loses: a reminder at the midpoint of the chapter.** **That is a real loss** — **and it is covered, because the advancing descriptions in paragraphs 5, 7 and 8 carry the premise forward three times in other words.**',
  '**Cut 3 · About ninety words, spread.** **Twenty-two mentions of a four-word phrase, of which eight were deleted outright and fourteen replaced.** ⚠ **What the reader loses: nothing** — **and that is the one cut of the four about which I am certain, because a reader who did not need a mention cannot miss it.**',
  '**Cut 4 · Two hundred and ten words of hedging, nineteen instances.** **_It may be that_, _it would appear_, _arguably_.** ⚠ **What the reader loses: the impression that I am cautious.** **One of my two readers said the chapter had become _confident in a way I did not quite trust_** — **and she is the reader whose field this is.**',
  '**What I have put back.** **Four of the nineteen hedges.** ⚠ **Only where the claim is genuinely uncertain: the three places where I do not know what the 2011 transcribers did, and the one where my own recordings are thin** — **and the reader who objected has read it again and says the trust is back and the confidence has stayed, which is the result I wanted and did not expect.**',
  '**How the cut was made.** **From the plan, not from the chapter.** ⚠ **Twelve lines on one page, two crossed out, two shortened** — **eleven minutes.** **The declaration took two hours, and the proportion of that time is the opposite of what I had expected all my life.**',
  '**What is recoverable.** **All of it.** ⚠ **The cut paragraphs are in a file called _chapter 3 cuts_ with the date** — **and when my supervisor asked for paragraph 9 back I had the words, which is the only reason the conversation lasted four minutes instead of a week.**',
  '**The proportions, which are the finding.** **Of a thousand and forty words, about nine hundred and thirty were doing nothing and about a hundred and ten were.** ⚠ **I had spent four years believing that cutting is the work of finding the nine hundred and thirty** — **and the whole difficulty of it is the hundred and ten, and nobody had told me that, and a declaration is the only form in which it can be argued about.**',
  '**And what the declaration cost me that I had not counted.** **Two hours, and one belief.** ⚠ **I had thought of myself as somebody who writes economically and cuts reluctantly** — **and the arithmetic says that four fifths of what I cut was never doing anything, which is a fact about my drafting and not about my scruples.**',
]));
out.push(item('1', 'Which cut is she certain about, and why?'));
out.push(item('2', 'What has she put back, and what did the objecting reader say afterwards?'));
out.push(item('3', 'How long did the cut take against the declaration, and what does she say about the proportion?'));
out.push(writers([
  'A declaration of a cut: **each cut numbered, with its word count and its paragraph** → **what the reader loses, in one sentence each** → **what you have put back, and why** → **how the cut was made** → **what is recoverable, and where it is kept** → **and the proportions, which are the finding.**',
  '⚠ **Give every cut its number of words.** _Three hundred and eighty; three hundred and sixty; about ninety; two hundred and ten._ **A declaration without figures is a note about tightening** — **and the figures are what let a reader ask for one of them back.**',
  '**Name the loss without defending the cut in the same sentence.** ⚠ _What the reader loses: the study, and nothing else. The loss is mine: I like it._ **A loss followed by a justification is a defence** — **and it tells the reader which of your cuts to argue about, which is information you did not mean to give.**',
  '**Attribute the objection to a reader.** ⚠ _She is the reader whose field this is, and the other noticed nothing._ **A loss with no reader attached is an opinion about the piece** — **and a loss with a reader attached is a decision that can be disagreed with, which is what a declaration is for.**',
  '⚠ And **end on the proportions and name the belief they overturn.** _Nine hundred and thirty were doing nothing and a hundred and ten were, and I had spent four years believing cutting is the work of finding the nine hundred and thirty._ **That is the sentence another writer will take away** — **and it is only available to somebody who has declared a cut rather than made one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own declaration (120 words or more).'));
out.push(p('**Cut 1 · ______________, ______________ words.** **______________.** ⚠ **What the reader loses: ______________.**   **Cut 2 · ______________, ______________ words.** ⚠ **What the reader loses: ______________.** **That is a real loss** — **and it is covered, because ______________.**   **What I have put back.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A word count on every cut',
  'One sentence of loss for each, with no defence attached',
  'The objection attributed to a named reader',
  'Where the cut words are kept',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their loss sentences**, and the room says which loss it would argue with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole declaration (260 words or more): the numbered cuts with their counts, the losses, what you have put back, how the cut was made, what is recoverable, and the proportions.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a word count on every cut, a loss sentence with no defence in it, and the objection attributed to a reader.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **Cutting time against declaration time:** **four to nineteen minutes against forty minutes to two hours** — **and every student said the second was harder, which is the cycle.** **Then: which cut did your reader notice?** **An average of one of four, and in six cases of ten it was the hedging** — **which nobody had expected, because hedging is the cut everybody thinks is free.**'));
out.push(hw('**Cut your piece to the number on the board, from the plan, and then write the declaration.** ⚠ **Then the harder half: send the declaration to a reader without the piece, and ask which cut they would ask you to reverse.** **In this class seven of ten were asked to reverse one cut and four of the seven refused with a reason, which is band 4 arriving in a supervision.** **Bring the declaration and the request.** **23.6 writes the first and last paragraphs and nothing between**, so bring your piece and your plan.'));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  The first paragraph and the last, and nothing between'));
out.push(p('**Function:** writing the long piece\'s first and last paragraphs, and nothing between   ·   **Grammar:** 260–300 words across the two, and the piece derivable from them   ·   **Pronunciation:** the two paragraphs read one after the other'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read your first paragraph and your last paragraph aloud, one after the other, and nothing else.** ⚠ **Forty seconds each.** **In this class the room could name the subject of nine pieces out of ten from the pair and could name what the writer wanted the reader to be able to do in three** — **and your teacher writes the three on the board, because those three are the pieces that have a first paragraph.**'));
out.push(board('First: what it is for, and what you will be able to do.', 'Last: what you may take, and what you may not.'));
out.push(p('**b**  Which two belong in a first paragraph? **1** _This chapter examines inter-transcriber agreement in three earlier studies._  **2** _By the end of this chapter a reader will be able to say whether the three studies can be compared at all, and on what._  **3** _The literature on this question is extensive and various._  **4** _This chapter does not propose a new measure, and nothing in it rests on my own recordings before paragraph 5._  **5** _I shall begin by reviewing the background._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the pair of paragraphs must allow?   **A** a summary of the piece   **B** **the twelve-line plan to be reconstructed** by somebody who has not read the middle   **C** a decision about whether to read on'));
out.push(p('**b**  Listen again. **1** How many of the twelve jobs did Mrs Tarabishi\'s reader recover?   **2** Which of the missed four was a real fault, and what did she add?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  Eight of twelve', [
  ['Ms Huda', 'Mrs Tarabishi gave two paragraphs to somebody and asked for the middle.'],
  ['Mrs Tarabishi', '⚠ **The first paragraph and the last, a hundred and fifty-two words and a hundred and forty-one, and nothing else.** **And the instruction was: write the plan of the middle, one line a paragraph, as many lines as you think there are** — **and she wrote eleven lines in about nine minutes, which is one short, and recovered eight of my twelve jobs.**'],
  ['Ms Huda', 'Eight of twelve is a pass?'],
  ['Mrs Khoury', '⚠ **It is the figure to aim at and the four she misses are the interesting half.** **A pair of paragraphs from which a reader can reconstruct every paragraph of the middle has a middle that is doing nothing** — **and a pair from which they can reconstruct four is a pair that has not been written, which is eight of the ten pieces in this room.**'],
  ['Mr Shihabi', 'Which four did she miss?'],
  ['Mrs Tarabishi', '⚠ **Three, six, ten and eleven, and three of the four are the right answer.** **Six and ten are the load-bearing paragraphs from 23.4, which are invisible by design** — **and eleven is the paragraph I cut in 23.5, so it is not there to be found.** **The fourth is a real fault and it is paragraph 3.**'],
  ['Mrs Oueidat', 'What is paragraph 3?'],
  ['Mrs Tarabishi', '⚠ **_Establishes that the method predates the problem it is now used for._** **It is the second-largest claim in the chapter and nothing in my first paragraph signals that the chapter has a historical half at all** — **so a two-minute reader has no idea it is coming, and my supervisor, who has twenty minutes, found it and thought it was a digression.**'],
  ['Dr Qabbani', 'And the repair?'],
  ['Mrs Tarabishi', '⚠ **Eleven words in the first paragraph.** **_The measure is older than the question it is now asked to answer._** **One clause, in the second sentence** — **and the same reader, given the pair again a week later, produced paragraph 3 as her second line, which is where it is.**'],
  ['Mr Tayara', 'What goes in the first paragraph?'],
  ['Mrs Khoury', '⚠ **Three things and nothing else.** **What the piece is for; what a reader will be able to do at the end of it; and one thing it does not do.** **_This chapter does not propose a new measure_** — **and the third of the three is the one the room always leaves out, and it is the one that stops a reader looking for something that is not coming.**'],
  ['Mrs Rizk', 'And the last?'],
  ['Mrs Tarabishi', '⚠ **What a reader may take from the chapter, what they may not, and the one announced turn.** **_This is where the chapter changes its mind_, which is the only _however_ left in it and is in paragraph 12 by permission of 23.2** — **and the _may not_ is the half I had never written: _nothing here licenses a comparison of the three studies on anything but the counting rule_.**'],
  ['Mrs Ajouz', 'Why does the _may not_ matter?'],
  ['Mrs Khoury', '⚠ **Because a reader with two minutes will use the piece for something, and the only control you have over what they use it for is that sentence.** **The panel chairman read her first and last paragraph and nothing else** — **and he came away with a chapter about whether her own recordings are adequate, which is 23.7 and is a correct reading of what he read.**'],
  ['Mr Attar', 'How long should the pair be?'],
  ['Mrs Tarabishi', '⚠ **Two hundred and ninety-three words for a chapter of four thousand one hundred and sixty, which is about seven in a hundred.** **I tried it at a hundred and sixty and the reader recovered four jobs** — **and at four hundred she stopped reading the second paragraph properly, which I could see from her lines, because the last three were all about my recordings.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is that the test is cheap and nobody does it.** **Two paragraphs, one reader, nine minutes, eleven lines in her handwriting** — **and I have written four chapters, had every one of them read by three people, and never once asked anybody to tell me what they thought the middle of one was.**'],
]));
out.push(sp());
out.push(box('Language box – the first paragraph and the last', [
  '**The first paragraph contains three things and nothing else.** ⚠ **What the piece is for; what a reader will be able to do at the end; and one thing it does not do.** **_This chapter does not propose a new measure._** **The third is the one everybody leaves out, and it stops a reader looking for what is not coming.**',
  '**The last paragraph contains three things.** ⚠ **What a reader may take, what they may not, and the one announced turn 23.2 permits.** **_Nothing here licenses a comparison of the three studies on anything but the counting rule._**',
  '**The pair must allow the plan of the middle to be reconstructed.** ⚠ **Give the two paragraphs to a reader and ask for one line a paragraph, as many lines as they think there are** — **eight of twelve jobs is the figure to aim at, and nine minutes is the time it takes.**',
  '**A pair from which everything can be reconstructed has a middle doing nothing.** ⚠ **And a pair from which four can be reconstructed has not been written** — **which is eight pieces out of ten in an ordinary room.**',
  '**The jobs a reader should miss are the ones that are invisible by design.** ⚠ **The load-bearing paragraphs of 23.4 and the paragraph cut in 23.5** — **and any other miss is a fault in the first paragraph, which is repaired in a clause and not in a rewrite.**',
  '**Seven words in a hundred, and the proportion matters.** ⚠ **Two hundred and ninety-three words for four thousand one hundred and sixty.** **At a hundred and sixty the reader recovered four jobs; at four hundred she stopped reading the second paragraph** — **which showed in her lines and not in anything she said.**',
  '**And the _may not_ is the only control you have over a two-minute reader.** ⚠ **They will use the piece for something** — **and the sentence that says what it does not license is the only sentence in four thousand words that can stop them using it for the wrong thing.**',
  '**Pronunciation.** 🔊 **Track 23.12** **Read the two paragraphs aloud one after the other, with four seconds between them.** ⚠ **If the pair sounds like one paragraph, the last one is a summary of the first and the piece has no destination** — **and if it sounds like two halves of an argument, the middle has somewhere to go.**',
  '**Practise:** First, or last? **1** what the piece is for  **2** what a reader will be able to do  **3** one thing it does not do  **4** what a reader may not take  **5** the one announced turn',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **whether it belongs in the first paragraph, the last, or neither**, and says **what it does for a two-minute reader.** ⚠ **Two rows on each card belong in neither** — **and there B says where they do belong.** Change cards.'));
out.push(table(['Card A – the sentence as written', 'Card B – the sentence as written'], [
  ['_By the end a reader will be able to say whether the three can be compared._', '_Nothing here licenses a comparison on anything but the counting rule._'],
  ['_⚠ The literature on this question is extensive and various._', '_⚠ I shall begin by reviewing the background._'],
  ['_This chapter does not propose a new measure._', '_This is where the chapter changes its mind._'],
  ['_⚠ Of the eleven hundred utterances, four hundred are from one speaker._', '_⚠ The 2009 measure counts only attempted utterances._'],
  ['_The measure is older than the question it is now asked to answer._', '_A reader may take the counting rule and may not take the figure._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** first, last or neither, and what it does for a two-minute reader. ⚠ **Rows 2 and 4 on both cards belong in neither** — **rows 2 are preambles that could open any piece, and rows 4 are the facts that belong in the middle, where they turn the argument.** **Rows 5 are the pair the cycle turns on**: one is the eleven-word repair to a first paragraph, **and one is a _may_ and a _may not_ in one sentence, the last paragraph in miniature.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your first paragraph and your last**, to the three things each, in **260 to 300 words across the two.** ⚠ **Count them.** **In this class the pairs came out between two hundred and twenty and four hundred and ten words, and the four over three hundred all had a preamble in the first paragraph** — **and in every one of the four the preamble was the writer\'s opening sentence, unchanged, from the version they had arrived with.**'));
out.push(p('**b**  Swap. Give **the pair, and nothing else**, to a third student and ask them to **write the plan of your middle, one line a paragraph.** ⚠ **Then count the jobs they recovered and look at the ones they missed.** — **and in this class the recoveries ran from three of nine to eight of twelve, and in six of ten cases at least one miss was a real fault in the first paragraph.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi gave two paragraphs to somebody and asked for the middle: the first paragraph and the last, a hundred and fifty-two words and a hundred and forty-one, and nothing else, with the instruction to write the plan of the middle, one line a paragraph, as many lines as she thought there were, and she wrote eleven lines in about nine minutes and recovered eight of the twelve jobs. Ms Huda asked whether eight of twelve is a pass, and Mrs Khoury said it is the figure to aim at and the four she misses are the interesting half, because a pair of paragraphs from which a reader can reconstruct every paragraph has a middle that is doing nothing, and a pair from which they can reconstruct four is a pair that has not been written. Mr Shihabi asked which four she missed, and three, six, ten and eleven, of which three are the right answer: six and ten are the load-bearing paragraphs, which are invisible by design, and eleven is the paragraph cut in 23.5. Mrs Oueidat asked what paragraph 3 is, and that it establishes that the method predates the problem it is now used for, which is the second-largest claim in the chapter, and nothing in the first paragraph signals that the chapter has a historical half at all, so her supervisor found it and thought it was a digression. Dr Qabbani asked about the repair, and eleven words in the first paragraph, and the same reader a week later produced paragraph 3 as her second line. Mr Tayara asked what goes in the first paragraph, and Mrs Khoury said three things: what the piece is for, what a reader will be able to do at the end, and one thing it does not do, and the third is the one the room always leaves out. Mrs Rizk asked about the last, and what a reader may take, what they may not, and the one announced turn. Mrs Ajouz asked why the may not matters, and Mrs Khoury said because a reader with two minutes will use the piece for something and that sentence is the only control the writer has. Mr Attar asked how long the pair should be, and two hundred and ninety-three words for four thousand one hundred and sixty, which is about seven in a hundred. And Mrs Tarabishi said the thing she will take away is that the test is cheap and nobody does it: two paragraphs, one reader, nine minutes and eleven lines in somebody else\'s handwriting, and she has written four chapters, had every one read by three people, and never once asked anybody what they thought the middle of one was._'));
out.push(p('**Listener task:** write how many jobs your partner\'s reader recovered and which miss was a real fault.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s first and last paragraphs, and the note under them. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _chapter 3: the first paragraph and the last_ · _293 words across the two_ · **8 February**',
  '**The first paragraph.** _This chapter asks whether the three earlier studies of transcriber agreement can be compared with one another at all. By the end of it a reader will be able to say on what they can be compared, which is the counting rule, and on what they cannot, which is the figure. The measure they share is older than the question it is now asked to answer, and the chapter spends its first third on that history because the comparison cannot be assessed without it. The chapter does not propose a new measure of agreement, and nothing in it rests on my own recordings before paragraph 5._',
  '**The last paragraph.** _A reader may take from this chapter the counting rule, which is stated in paragraph 6 and is the only thing the three studies genuinely share. A reader may not take the agreement figure, which rests in each case on a corpus assembled on different principles, and in one case on four hundred utterances from a single speaker. This is where the chapter changes its mind: the 2009 measure appeared to settle the question and it settles only the arithmetic. What remains open is what my own recordings can be asked to carry, which is the subject of chapter 4 and not of this one._',
  '**The test, as run.** **The pair, with nothing else, to one reader, with one instruction: write the plan of the middle, one line a paragraph, as many lines as you think there are.** ⚠ **Nine minutes, eleven lines, eight of my twelve jobs recovered.**',
  '**The four she missed, and three of them are correct.** ⚠ **Six and ten are the load-bearing paragraphs and are invisible by design.** **Eleven was cut in 23.5 and is not there.** **And three is a fault.**',
  '**The fault, and the repair.** **Paragraph 3 establishes that the method predates the problem, which is the second-largest claim in the chapter.** ⚠ **My first paragraph said nothing about a historical half, so a reader could not know it was coming, and my supervisor — who has twenty minutes — read it as a digression.** **The repair is eleven words: _the measure they share is older than the question it is now asked to answer_.**',
  '**What the repair did.** **The same reader, a week later, produced paragraph 3 as her second line.** ⚠ **Nine of twelve** — **and the three she now misses are six, ten and eleven, which is the correct answer and is as good as this test can come out.**',
  '**The lengths I tried.** **A hundred and sixty words: four jobs recovered.** ⚠ **Four hundred words: she stopped reading the second paragraph properly, which I could see because her last three lines were all about my recordings** — **and two hundred and ninety-three is about seven words in a hundred of the chapter.**',
  '**And what the _may not_ sentence is for.** **A reader with two minutes will use the chapter for something.** ⚠ **The panel chairman read these two paragraphs and nothing else, and asked me for the recordings paper** — **which is a correct reading of what he read, and the only thing in four thousand words that could have prevented it is one sentence saying what the chapter does not license.**',
]));
out.push(item('1', 'What three things does the first paragraph do?'));
out.push(item('2', 'Which of the four missed jobs was a fault, and what was the repair?'));
out.push(item('3', 'What happened at a hundred and sixty words and at four hundred?'));
out.push(writers([
  'The pair: **the first paragraph — what it is for, what a reader will be able to do, one thing it does not do** → **the last — what may be taken, what may not, the one announced turn** → **the test as run** → **the jobs recovered and missed** → **which miss was a fault, and the repair in a clause** → **the lengths you tried** → **and what the _may not_ is for.**',
  '⚠ **Print both paragraphs in full and nothing between them.** **A note that quotes the first and describes the last has hidden the only thing the cycle is about, which is the pair** — **and the two read one after the other in about eighty seconds.**',
  '**Give the test as a procedure with its instruction quoted.** ⚠ _Write the plan of the middle, one line a paragraph, as many lines as you think there are._ **The phrase _as many as you think_ is what makes it a test** — **and telling the reader how many paragraphs there are has answered the question you were asking.**',
  '**Sort the misses into the ones that are correct and the ones that are faults.** ⚠ _Six and ten are invisible by design; eleven was cut; three is a fault._ **A note that treats every miss as a failure has thrown away 23.4** — **and a note that treats every miss as design has thrown away the only fault the test found.**',
  '⚠ And **report the lengths you tried, with what each one did to the reader.** _At four hundred words her last three lines were all about my recordings._ **That is evidence of a reader\'s attention and not of their opinion** — **and it is visible only because the test produces a document.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your first paragraph and your last (120 words or more across the two).'));
out.push(p('**The first paragraph.** **This ______________ asks whether ______________. By the end a reader will be able to say ______________. ______________. This ______________ does not ______________.**   **The last paragraph.** **A reader may take ______________. A reader may not take ______________. This is where ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three things in the first paragraph, including what it does not do',
  'Three things in the last, including what a reader may not take',
  '260 to 300 words across the two, counted',
  'No preamble anywhere in either',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **the two paragraphs one after the other, with four seconds between**, and the room says whether it heard one paragraph or two halves of an argument.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): both paragraphs in full, the test as run with its instruction, the jobs recovered and missed, the fault and the repair, the lengths you tried, and what the _may not_ sentence is for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both paragraphs printed in full, the test instruction quoted, and the misses sorted into design and fault.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **Jobs recovered: three of nine to eight of twelve** — **and in six of ten cases at least one miss was a real fault in the first paragraph, which is repaired in a clause.** **Then: the word counts of the pairs.** **Two hundred and twenty to four hundred and ten, and all four of the long ones had a preamble** — **and in every case the preamble was the writer\'s original opening sentence, unchanged.**'));
out.push(hw('**Give your first and last paragraphs, and nothing else, to somebody who has not read the piece, and ask for the plan of the middle.** ⚠ **Then the harder half: sort their misses into _invisible by design_ and _fault_, and repair each fault in a clause and not in a rewrite.** **In this class nine of ten ran the test and seven found exactly one fault, and in five of the seven the repair was under fifteen words.** **Bring their lines and your repair.** **23.7 is a long piece, a reader with twenty minutes, and a reader with two.**'));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: a long piece, a reader with twenty minutes, and a reader with two'));
out.push(p('**Function:** mediating between a long piece and two readers whose budgets differ by a factor of ten   ·   **Recycling:** Unit 23   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 8 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Paragraph 9 does the same job than paragraph 4.  **2** Without of paragraph 6, paragraph 7 reads as an opinion.  **3** Nine hundred and thirty words was doing nothing.  **4** She had read it thirty times without to notice.  **5** The plan is one page, what is a constraint.  **6** It is the hundred and ten words that matters.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE CHAPTER, FOUR ACCOUNTS** _(chapter 3, 4,160 words, submitted 10 February)_',
  '**Mrs Tarabishi.** _"The centre of the chapter is paragraph 5, which is my own figure. It says so on the plan, which is one page and which nobody has ever seen."_',
  '**The supervisor, who read it in twenty minutes.** _"The centre is paragraph 7. That is where the chapter earns its claim, and paragraph 3 is a digression."_',
  '**The panel chairman, who read the first paragraph and the last and nothing else.** _"It is a chapter about whether her own recordings are adequate. I have asked her for the recordings paper instead."_',
  '**The twelve-line plan, which nobody in this story has read.** _"5: gives my own figure, which the rest of the chapter rests on."_ **Written in twenty minutes, on one page, and never sent.**',
  '⚠ **All three readings are correct readings of what each person read.** **The chairman read two paragraphs and took from them what they say; the supervisor read the chapter in twenty minutes and found the claim where the load-bearing paragraph had put it** — **and neither of them has seen the document in which the chapter can be seen at once.**',
  '**And the thing none of the three has noticed.** **Paragraph 6 exists to make paragraph 7 readable, which is 23.4** — **so the load-bearing paragraph moved the centre of gravity of the chapter one paragraph to the right, and that is a cost of 23.4 that nobody mentioned when it was taught.**',
  '**The question for the cycle.** _What do you send, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  Three readers, three chapters', [
  ['Ms Huda', 'What goes out, and to whom?'],
  ['Mrs Khoury', '⚠ **Three things, and the first of them is one page and already written.** **The plan, to both readers, with the chapter.** **A repaired first paragraph, which is eleven words and is 23.6.** **And one line to the chairman about what the chapter does not license** — **and none of the three is an argument with anybody\'s reading.**'],
  ['Mrs Tarabishi', 'And what must not be said is that the chairman did not read it.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is true, and the room should feel how strong the temptation is.** **He read two paragraphs of four thousand one hundred and sixty words** — **and he read the two the piece offers a two-minute reader, so a sentence saying he did not read it tells a chairman that he read the wrong part of a document that was built to be read that way.**'],
  ['Mrs Oueidat', 'Is anybody at fault?'],
  ['Mr Shihabi', '⚠ **Nobody, and this is the tenth time in Book 2.** **The chairman read what a two-minute reader reads and reported it accurately.** **The supervisor read the chapter and found the claim where paragraph 6 had made it readable.** **And Mrs Tarabishi has a one-page document that would settle the whole thing in forty seconds and has never sent it** — **which is 20.7, and the room should say so out loud, because it is the same shape and a different profession.**'],
  ['Dr Qabbani', 'So the plan is the repair.'],
  ['Mrs Tarabishi', '⚠ **The plan is the repair for the twenty-minute reader and it is no use at all to the two-minute one.** **He is not going to read a plan either** — **so the repair for him is the first paragraph and the last, which is the only part of the chapter he has read and will read, and that is why 23.6 comes before this cycle and not after it.**'],
  ['Mr Tayara', 'What does the chairman get?'],
  ['Mrs Tarabishi', '⚠ **One line, in the covering note, and it is the _may not_ sentence from 23.6 with his request answered inside it.** **_The chapter does not assess my own recordings, which is chapter 4; it settles what the three earlier studies share._** **Twenty-two words** — **and the recordings paper he asked for exists and is not ready, and I have said so in four more.**'],
  ['Mrs Rizk', 'And the supervisor\'s paragraph 7?'],
  ['Mrs Khoury', '⚠ **He is not wrong and she is not wrong, and this is the hardest half of the cycle.** **Paragraph 5 is the centre of the argument and paragraph 7 is where the chapter earns it** — **and the reason they differ is paragraph 6, which exists to make 7 readable and in doing so made 7 feel like the arrival.**'],
  ['Mrs Tarabishi', '⚠ **Which is a cost of 23.4 that nobody mentioned.** **A load-bearing paragraph moves the centre of gravity one paragraph to the right** — **and the repair is not to remove it: it is a clause in paragraph 5 that says the figure is the chapter\'s own, and then paragraph 6 can go on doing its work without being mistaken for the approach to the summit.**'],
  ['Mrs Ajouz', 'Does the plan go to the chairman too?'],
  ['Mrs Khoury', '⚠ **It goes with the chapter and it is addressed to nobody, which is the right way to send a document that settles arguments.** **A plan sent to the supervisor alone is a submission in an argument about paragraph 7** — **and a plan clipped to the front of the chapter is a part of the chapter, and the room should notice that the difference is entirely in who it is addressed to.**'],
  ['Mr Attar', 'Had the plan ever been asked for?'],
  ['Mrs Tarabishi', '⚠ **Never, by three supervisors in four years, and I asked Dr Kheir about that in the interview the class heard.** **She has never asked for a plan and no student has ever sent her one** — **and she has the argument about which paragraph is the centre of a chapter about four times a year, which is a figure I would not have guessed and which makes the one page the cheapest document in this unit.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is that all three of us were right.** **The chairman about the first and last paragraphs, the supervisor about paragraph 7, and me about paragraph 5** — **and the whole disagreement is four thousand one hundred and sixty words against one page that took twenty minutes and that I kept in a drawer for a year.**'],
]));
out.push(sp());
out.push(box('Language box – a long piece and its two readers', [
  '**A long piece has two readers whose budgets differ by a factor of ten, and both readings are correct.** ⚠ **Twenty minutes and two** — **and the two-minute reader reads the first paragraph and the last, which is the part the piece offers them.**',
  '**The plan is the repair for the twenty-minute reader, and no use at all to the other.** ⚠ **One page, forty seconds, and it settles which paragraph is the centre** — **and a supervisor of twenty-two years has that argument four times a year and has never asked for one.**',
  '**The repair for the two-minute reader is 23.6, and it has to be done before this cycle and not after it.** ⚠ **The first paragraph and the last are the whole of the piece for him** — **and one line in the covering note, which is the _may not_ sentence with his request answered inside it.**',
  '**Send the plan addressed to nobody.** ⚠ **Clipped to the front of the piece it is part of the piece; sent to one reader it is a submission in an argument** — **and the difference is entirely in who it is addressed to.**',
  '**What must not be said: that the two-minute reader did not read it.** ⚠ **It is true, and it tells him that he read the wrong part of a document that was built to be read that way** — **and the temptation to say it is the strongest in this unit.**',
  '**And the cost of 23.4 that nobody mentioned.** ⚠ **A load-bearing paragraph moves the centre of gravity of a piece one paragraph to the right.** **The repair is not to remove it** — **it is a clause in the earlier paragraph saying that the figure is the piece\'s own, so that the load-bearing paragraph stops being mistaken for the approach to the summit.**',
  '**Pronunciation.** 🔊 **Track 23.14** **Read the covering line to the two-minute reader flat, in twenty-two words, with the _not_ unstressed.** ⚠ **Stress on _not_ makes it a correction of his reading** — **and flat, it is a statement about what the chapter does, which is what he asked for and did not get.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **the document nobody has read**, says **what goes to each reader**, and names **what must not be said.** ⚠ **On one of the two cards the plan was sent and the readers agreed**, and B must find that and say what went wrong instead. Change roles with the other pair.'));
out.push(table(['Pair A – the chapter and the two readers', 'Pair B – the report and its brief'], [
  ['_The writer: "the centre is paragraph 5."_', '_The writer: "the plan went with it and they agreed."_'],
  ['_The twenty-minute reader: "the centre is paragraph 7."_', '_The reader: "I asked for fifteen hundred words."_'],
  ['_⚠ The two-minute reader: "it is about her recordings."_', '_⚠ The second reader: "it is excellent and I have not read it."_'],
  ['_⚠ The twelve-line plan, never sent._', '_⚠ Nothing missing: the plan was sent and read._'],
  ['_⚠ Missing: the plan, and a clause in paragraph 5._', '_⚠ Missing: nothing. The piece is four thousand words long._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the document, what goes to each reader, and what must not be said. ⚠ **On Pair B the plan was sent, both readers agree, and nothing is missing** — **and the finding is that the piece is four thousand words for a reader who asked for fifteen hundred, so the architecture is faultless and the brief was ignored.** **The repair is 23.5: cut to a number, and the number is somebody else\'s.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own long piece** and write **the four accounts**: yours, your twenty-minute reader\'s, your two-minute reader\'s, and one document nobody has read. ⚠ **Then name your two readers by name.** **In this class nine of ten could name the twenty-minute reader and four could not name the two-minute one at all** — **and in three of those four cases the two-minute reader is the person who decides something.**'));
out.push(p('**b**  Swap. Your partner says **what goes to each reader** and names **the sentence you must not write.** ⚠ **In this class that sentence was, nine times in ten, a true statement about how little somebody had read.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said three things go out and the first of them is one page and already written: the plan, to both readers, with the chapter; a repaired first paragraph, which is eleven words and is 23.6; and one line to the chairman about what the chapter does not license, and none of the three is an argument with anybody\'s reading. Mrs Tarabishi said what must not be said is that the chairman did not read it, and Mrs Khoury said that is exactly it and it is true and the room should feel how strong the temptation is, because he read the two paragraphs the piece offers a two-minute reader, so saying he did not read it tells a chairman that he read the wrong part of a document built to be read that way. Mrs Oueidat asked whether anybody is at fault, and Mr Shihabi said nobody, and this is the tenth time in Book 2: the chairman read what a two-minute reader reads and reported it accurately, the supervisor read the chapter and found the claim where paragraph 6 had made it readable, and Mrs Tarabishi has a one-page document that would settle the whole thing in forty seconds and has never sent it. Dr Qabbani said so the plan is the repair, and Mrs Tarabishi said the plan is the repair for the twenty-minute reader and no use at all to the two-minute one, so the repair for him is the first paragraph and the last. Mr Tayara asked what the chairman gets, and one line in the covering note, the may not sentence with his request answered inside it, twenty-two words. Mrs Rizk asked about the supervisor\'s paragraph 7, and Mrs Khoury said he is not wrong and she is not wrong, because paragraph 5 is the centre of the argument and paragraph 7 is where the chapter earns it, and the reason they differ is paragraph 6. Mrs Tarabishi said that is a cost of 23.4 nobody mentioned, and the repair is a clause in paragraph 5 and not the removal of 6. Mrs Ajouz asked whether the plan goes to the chairman too, and it goes with the chapter addressed to nobody, because a plan sent to the supervisor alone is a submission in an argument. Mr Attar asked whether the plan had ever been asked for, and never, by three supervisors in four years. And Mrs Tarabishi said the thing she will take away is that all three of them were right: the chairman about the first and last paragraphs, the supervisor about paragraph 7 and herself about paragraph 5, and the whole disagreement is four thousand one hundred and sixty words against one page that took twenty minutes and sat in a drawer for a year._'));
out.push(p('**Listener task:** write what goes to each of the two readers and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 8)', 7));
out.push(p('You are going to read four contributions about writing at length. For questions **1–10**, choose from the writers **A–D**. The writers may be chosen more than once.'));
out.push(model([
  '**A** _(a thesis supervisor)_   I have written _long in the middle_ on perhaps four hundred chapters in twenty years and I never once explained it, because until three years ago I could not have. The cause, almost always, is two paragraphs doing one job a thousand words apart, which the writer cannot see because they are carrying the whole chapter in their head when they reread. I now also distrust repetition of a key phrase: a student who names their subject thirty times is reassuring me, or themselves. And a turn that is not announced is a risk I accept in my own writing and warn students about: a reader who misses it has not turned, and the turn did not happen.',
  '**B** _(a magazine editor)_   I read the first and last paragraphs of a long piece before I read anything else, and I have done so for eleven years. Length is never the complaint — I have run twelve thousand words and I have killed nine hundred — and anyone who tells you a piece is too long means something else and has not worked out what. What I look for is whether the piece serves the reader who has twenty minutes and the reader who has two. Both exist for everything I publish. A piece built for one of them will be argued about in a meeting I have to sit in.',
  '**C** _(an engineer who writes technical reports)_   There is a paragraph in every long report of mine that contains no information at all: it restates the measurement convention immediately before the figure that depends on it. Take it out and the figure is read as an opinion; I have tested that twice with colleagues and both times the question came back as _why do you say that?_ The other thing I insist on is that any cut goes out with a statement of what the reader no longer has. A report that comes back a fifth shorter with no such statement will simply be read again from the beginning, which costs the reader more than the pages saved.',
  '**D** _(a translator of long documents)_   I write the plan after the document, every time, and I know that it should be the other way round; four hundred thousand words into a career, I still do it in the wrong order. What I have learnt instead is that the plan is a document and not a private note: one page, a line for each section, saying what the section does. The argument I have with lawyers four or five times a year is about which section carries the obligation, and that page would settle it in under a minute. I have never sent it to anybody and I cannot tell you why.',
  '**1**  reads the opening and closing of a piece before anything else?   **2**  writes a plan after the piece and knows the order is wrong?   **3**  describes a paragraph containing no information that cannot be removed?   **4**  regards the repetition of a key phrase as reassurance?   **5**  insists that a cut is accompanied by a statement of what is lost?',
  '**6**  says a long piece has two readers with different amounts of time?   **7**  admits that a criticism of theirs went unexplained for years?   **8**  mentions a document that would settle a recurring argument and is never sent?   **9**  accepts a risk in their own writing and warns others about it?   **10**  says that length itself is never the real objection?',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three things and the working (120 words or more).'));
out.push(p('**To both readers, with the piece.** ⚠ **______________, addressed to nobody.**   **To the twenty-minute reader.** **______________.**   **To the two-minute reader, in the covering note.** ⚠ **The ______________ does not ______________, which is ______________; it ______________.**   **And the working.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The plan sent with the piece and addressed to nobody',
  'A repair for the two-minute reader in the first and last paragraphs',
  'One line answering what the two-minute reader asked for',
  'Nothing about how little anybody read',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Two of the three points, a ground for choosing them, and a conclusion that selects.** **Your own opinion is welcome and is not what is being marked.**',
  'Your class has discussed what makes a long piece of writing readable. You have made the notes below.   **Points discussed:** _the plan, and whether it should be sent to readers_ · _paragraphs that carry no new information_ · _declaring what a cut has removed_.   **Some opinions expressed:** _"One page would settle an argument I have four times a year."_ · _"Take it out and the figure is read as an opinion."_ · _"It will simply be read again from the beginning."_',
  '**Write an essay** discussing **two** of the points in your notes. You should **explain which is more important**, giving reasons. You may make use of the opinions expressed, but you should use your own words as far as possible. Write **220–260 words**.',
  '⚠ **Do not take all three.** **Name the two in the first paragraph and select between them in the last.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Paragraph 9 does the same job ___ paragraph 4.   a) than   b) as   c) that',
  '2  ___ paragraph 6, paragraph 7 reads as an opinion.   a) Without   b) With no   c) Out of',
  '3  Of the thousand words cut, nine hundred ___ nothing.   a) was doing   b) were doing   c) have done',
  '4  She had read it thirty times ___ noticing.   a) without   b) with no   c) not',
  '5  The plan is one page, ___ is a constraint.   a) what   b) which   c) that',
  '6  The hedges went back ___ the claim is genuinely uncertain.   a) when   b) where   c) which',
  '7  A cut nobody notices ___ have been made sooner.   a) should   b) must   c) would',
  '8  It is the hundred and ten words that ___ .   a) matter   b) matters   c) mattering',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style).** 🔊 **Track 23.15** You will hear an interview with Dr Kheir, who has supervised theses for twenty-two years. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '1  What is the note Dr Kheir has written for twenty years?   A that chapters are too long   B that a chapter is long in the middle   C that students repeat themselves',
  '2  Why had she never explained the note?   A she could not have explained it until recently   B she thought it was obvious   C no student had ever asked',
  '3  What does she say the cause almost always is?   A two paragraphs doing one job   B careless writing   C excessive length',
  '4  What does she say about plans?   A she has asked for them and not received them   B she has never asked and none has been sent   C she requires one page',
  '5  What does she say about a chapter\'s two readers?   A the chairman reads more carefully   B a chapter that serves one of them will be argued about   C twenty minutes is not enough',
  '6  What does she tell students about cutting?   A she will ask for one cut back   B she will never ask for a cut back   C she asks for a word count',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Interviewer', 'You have written the same four words in margins for twenty years.'],
  ['Dr Kheir', 'Long in the middle. On perhaps four hundred chapters, and I never once explained what I meant by it, because until about three years ago I could not have. I knew what I was feeling at paragraph seven and I did not know what was causing it.'],
  ['Interviewer', 'And now you do.'],
  ['Dr Kheir', 'Two paragraphs doing one job, a thousand words apart. Almost always. It is not carelessness and it is not length: the writer cannot see it, because when they reread they are carrying the whole chapter in their head, so the second one reads as a reminder.'],
  ['Interviewer', 'Do you ask for plans?'],
  ['Dr Kheir', 'I ask for the chapter. I have never asked for a plan and no student has ever sent me one, in twenty-two years. And a one-page plan would settle in under a minute the argument I have four times a year about which paragraph is the centre of a chapter.'],
  ['Interviewer', 'You read quickly, I am told.'],
  ['Dr Kheir', 'Twenty minutes for a chapter. The panel chairman has two, and he reads the first paragraph and the last, and those are the only two readers a chapter has before it is examined. A chapter that serves one of the two will be argued about in a room, and I shall be in it.'],
  ['Interviewer', 'And cutting?'],
  ['Dr Kheir', 'I tell them I shall ask for one cut back, and that if they cannot tell me what I have lost by it, I shall ask for all of them back. I have done that twice in twenty-two years. Both times the student had cut a paragraph that was holding another one up and could not tell me what it was holding.'],
]));
out.push(p('**C  Writing.** Write the three things and the working (120 words or more): the plan sent with the piece, the repair for the twenty-minute reader, the line for the two-minute reader, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ plan twelve paragraphs on one line each, and find the two that do the same job',
  '☐ make a turn in an argument without announcing it, and test whether the reader turned',
  '☐ carry one thread across eight paragraphs so that every mention advances it',
  '☐ write the paragraph that lets the next one work, and test it on two readers',
  '☐ cut to a number and declare what the reader loses, cut by cut',
  '☐ write a first and last paragraph from which the plan of the middle can be rebuilt',
  '☐ send the plan with the piece, addressed to nobody',
  '☐ serve the reader with twenty minutes and the reader with two',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _extend to · stretch to · open out · broaden out · draw together · tie up · carry forward · plant in · work in · weave in · hold the thread · lose the thread_.',
  '**This unit\'s word-formation set** _(Reading Part 8 in 23.7 draws on this unit\'s lexis)_: _extend → **extensive** · protract → **protracted** · digress → **digression** · recapitulate → **recapitulation** · unify → **unification** · segment → **segmentation** · truncate → **truncated** · amplify → **amplification** · incremental → **incrementally**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _come home_ **→ _the point comes home in paragraph nine_**, which is a reader at last realising something, where at A2 it was coming home from work · _go home_ **→ _the sentence about the four hundred utterances goes home_**, which is a remark reaching the person or place it is aimed at, where at A2 it was going home at the end of the day · _wake up_ **→ _a reader wakes up at paragraph four and nothing before it has been read_**, which is attention beginning, where at A2 it was waking up in the morning.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 23 · Five Thousand Words');
