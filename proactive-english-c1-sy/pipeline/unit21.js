// Proactive English C1 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE EXAMINATION ASKS', 'WHAT IT IS MEASURING'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const maps = (rows) => table(['THE TASK AS SET', 'WHAT IT IS MEASURING', 'THE SENTENCE THAT IS EVIDENCE'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three descriptions from the reports on the board. For each one the room says whether it names a document, a limit, or only a level.';
const slip = '**Peer review, C1 band 4.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 21  The Same English, Another Examination'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_   ·   _Series author: Mo (Mohamad Khorbatli)_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Half of any real C1 class is in the room for a piece of paper, and this unit says so.** ⚠ **Mrs Ajouz needs 7.0 in every component of an IELTS test for a registration file and has twice been given 6.5 in writing.** **Three levels of this course have taught the English and left the bookkeeping to somebody else** — **and the bookkeeping is where her file has stopped twice.**',
  '**The claim of the unit is that the English is the same English and only the bookkeeping differs, and 21.5 proves it item by item.** ⚠ **Two things genuinely do not transfer and the cycle names both** — **and two habits that this course has spent twenty units building will cost marks in the other examination unless they are switched off deliberately.**',
  '**And the unit asks the harder question underneath the file.** ⚠ **What is your English, said without naming a level?** **A score is not a skill: it is a prediction made by people who have never seen you work** — **and the page you write in 21.6 is the document that has to survive having no certificate attached to it.**',
], C.grey, C.navy));
out.push(p('**Seven cycles · 90 minutes each · the seventh is Review & Mediate**', { bold: true, color: C.teal }));

// ===================== 21.1 =====================
out.push(pb());
out.push(h2('21.1  What it asks, and what it is measuring'));
out.push(p('**Function:** saying what an examination is measuring, as distinct from what it asks   ·   **Grammar:** the construct and the task, kept apart   ·   **Pronunciation:** a score read as a number and not as a verdict'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one examination you have sat, the number you were given, and what you believe it was measuring.** ⚠ **What it was measuring, not what it asked you to do.** **In this class nine of ten described the task and had to be asked again** — **and your teacher writes the ten tasks in one column and the ten constructs in the other, with most of the second column empty.**'));
out.push(board('Discuss both views and give your own opinion.', 'Range, accuracy, coherence, and whether the question was answered.'));
out.push(p('**b**  Which two say what is being measured? **1** _I had to write about whether examinations are useful._  **2** _Four things are marked, each equally: how far the question is answered, how the writing is organised, the range of the vocabulary, and the accuracy of the grammar._  **3** _There were two long passages and some questions about them._  **4** _Part 1 measures whether I can take two given points, evaluate them against each other and choose._  **5** _It was forty minutes and I ran out of time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a score is?   **A** a measurement of ability   **B** **a prediction made by people who have not seen you work**, on four criteria, from one performance   **C** a formality'));
out.push(p('**b**  Listen again. **1** What does Mrs Ajouz say she had been improving between the two tests?   **2** What does Mrs Khoury say the four criteria of the writing task are?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  Two tests, one file', [
  ['Ms Huda', 'Mrs Ajouz has sat the same test twice.'],
  ['Mrs Ajouz', '⚠ **Twice, fourteen months apart, and the writing was 6.5 both times.** **The registration file needs 7.0 in every component and I have 7.5 in reading, 7.0 in listening, 7.0 in speaking and 6.5 in writing** — **and between the two tests I did about ninety hours of work, all of it on vocabulary.**'],
  ['Mrs Khoury', 'What are the four things being marked?'],
  ['Mrs Khoury', '⚠ **Task response, coherence and cohesion, lexical resource, and grammatical range and accuracy, each weighted the same.** **Vocabulary is one of four** — **and ninety hours on one quarter of the mark, when nobody had told her which quarter was costing her, is the most ordinary mistake in examination preparation and it is not her fault.**'],
  ['Mr Attar', 'Did the report not say which one?'],
  ['Mrs Ajouz', '⚠ **The report gives one number for writing and nothing else.** **No component marks, no comments, no script returned.** **I have two pieces of paper that say 6.5 and I have never seen either answer again** — **and I rewrote the second one from memory in August to find out what was in it.**'],
  ['Mrs Oueidat', 'And what was in it?'],
  ['Mrs Ajouz', '⚠ **Both sides of the question, in four paragraphs, and no position of my own anywhere.** **I had been taught that an examination essay should be balanced** — **and the task had asked me to what extent I agreed, which is a question I did not answer in two hundred and seventy-one words.**'],
  ['Mrs Khoury', '⚠ **Which is the cycle and it is not about her English at all.** **The task asked one thing and she answered a different thing she had been taught to answer** — **and the construct is what the examination is measuring, which in that criterion is whether the question in front of you was answered.** **No amount of vocabulary repairs an unanswered question.**'],
  ['Dr Qabbani', 'So what is a score?'],
  ['Mrs Khoury', '⚠ **A prediction about a person made by two strangers from one performance, on four criteria, in forty minutes.** **It is a reasonable prediction and it is not a skill** — **and the proof is in this room: Mrs Ajouz reads thirty-one product dossiers a year in English and writes to manufacturers about them, and the number says 6.5.**'],
  ['Mrs Ajouz', '⚠ **Eleven queries to manufacturers last year and two recall notices, both in English, both acted on.** **And a registration board that will not look at any of them** — **which I had thought was unfair until Unit 18, and now think is a rule applied by somebody who did not make it.**'],
  ['Mr Shihabi', 'Is the number wrong?'],
  ['Mrs Oueidat', '⚠ **It is not wrong and it is narrow, and the room must hold both.** **It measured what it measured, accurately: she did not answer the question.** **It did not measure the eleven queries** — **and nobody at the examination ever said that it did, which is a fault in the reader and not in the test.**'],
  ['Mrs Tarabishi', 'What does a reader do with a number?'],
  ['Mrs Khoury', '⚠ **Trusts it, because it is one number and a document is four pages.** **A reader who has eighty files to process will take a number over evidence every time** — **and that is 21.7, and it is not a scandal: it is what numbers are for.**'],
  ['Mr Tayara', 'Then what was the ninety hours for?'],
  ['Mrs Ajouz', '⚠ **Nothing, for that criterion, and something for the other three.** **My lexical resource was probably the one thing that did not need the work** — **and the question I should have asked, and did not, was which of the four criteria the 6.5 was about.**'],
  ['Mrs Rizk', 'Can anybody tell her that?'],
  ['Mrs Khoury', '🔊 ⚠ **Nobody at the examination will, and the descriptors will, which is 21.3 and is the only route there is.** **You take the band you want, read its four criteria, and find in your own answer the sentence that earns each one** — **and where there is no sentence, you have found the criterion that is costing you, which is a measurement and not an impression.**'],
]));
out.push(sp());
out.push(box('Language box – the construct and the task', [
  '**The task is what you are asked to do; the construct is what is being measured.** ⚠ **_Discuss both views and give your own opinion_ is a task.** **_Whether the question in front of you was answered_ is a criterion** — **and a candidate who prepares for the task and not for the criteria is working in the dark.**',
  '**Four criteria, equally weighted, in that writing task.** ⚠ **Task response · coherence and cohesion · lexical resource · grammatical range and accuracy.** **Ninety hours on vocabulary is ninety hours on one quarter of the mark** — **and the quarter that was costing her was the first.**',
  '**A score is a prediction, not a skill.** ⚠ **Made by two strangers, from one performance, in forty minutes, on four criteria** — **and it is usually a reasonable prediction, which is why readers trust it.**',
  '**It is narrow and it is not wrong, and both have to be held at once.** ⚠ **It measured what it measured: the question was not answered.** **It did not measure eleven queries to manufacturers** — **and nobody at the examination ever claimed that it did.**',
  '**Say the number flat, as a number.** ⚠ **_The writing component was 6.5._** **A number said with apology attached invites the reader to decide how to feel about you** — **and the number does not need their sympathy; the file needs a plan.**',
  '**And the useful question is one nobody at the examination will answer.** ⚠ **Which of the four criteria was this number about?** **The descriptors answer it, and only against your own script** — **which is 21.3, and is why that cycle is the hinge of the unit.**',
  '**Pronunciation.** 🔊 **Track 21.2** **Say _the writing component was 6.5_ with no fall at the end and no stress on _was_.** ⚠ **A fall makes it a verdict about yourself; stress on _was_ makes it a complaint about the test** — **flat, it is a fact about a file, and the next sentence can be about the plan.**',
  '**Practise:** Task, or construct? **1** _discuss both views_  **2** _whether the question was answered_  **3** _two passages and forty questions_  **4** _the range of the vocabulary_  **5** _it was forty minutes long_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the line from the card. B says **whether it is a task or a construct**, and where it is a task, gives **the criterion it is marked against.** ⚠ **Two rows on each card are constructs already** — **and there B says so and names the task that would be set for it.** Change cards.'));
out.push(maps([
  ['_Discuss both views and give your own opinion._', '⚠ **Task**', '**Task response, first of four**'],
  ['_⚠ Whether the question in front of you was answered._', '⚠ **Construct**', '**Set as: _to what extent do you agree?_**'],
  ['_Write a proposal of 220–260 words._', '⚠ **Task**', '**Register, organisation, and the decision offered**'],
  ['_⚠ The range of structures used, with accuracy._', '⚠ **Construct**', '**Set as: any writing task at all**'],
  ['_Describe the figures in the chart._', '⚠ **Task**', '**Selection of the main features, and comparison**'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** task or construct, and the criterion. ⚠ **Rows 2 and 4 on both cards are constructs and the room will call them tasks** — **because a criterion written in the examination\'s own words reads like an instruction.** **Rows 5 are the pair that matter**: in both, the task is a description and the criterion is selection, **and a candidate who describes everything has failed a criterion the task never mentioned.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the last examination you sat** and write **the task as it was set** and **the four criteria it was marked against.** ⚠ **If you cannot name the four, say so** — **and in this class seven of ten could not name any of them for an examination they had paid for and prepared ninety hours for, which is the finding of the cycle and is nobody\'s fault in this room.**'));
out.push(p('**b**  Swap. Your partner reads **your four criteria** and asks **which one your number was about.** ⚠ **Then the harder question: what did you prepare, and which criterion did that preparation serve?** — **and in this class six of ten had prepared vocabulary, which is one quarter of one paper.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz has sat the same test twice, fourteen months apart, and the writing was 6.5 both times, and the registration file needs 7.0 in every component: she has 7.5 in reading, 7.0 in listening, 7.0 in speaking and 6.5 in writing, and between the two tests she did about ninety hours of work, all of it on vocabulary. Mrs Khoury asked what the four things being marked are, and task response, coherence and cohesion, lexical resource, and grammatical range and accuracy, each weighted the same, so vocabulary is one of four, and ninety hours on one quarter of the mark when nobody had told her which quarter was costing her is the most ordinary mistake in examination preparation and is not her fault. Mr Attar asked whether the report said which one, and the report gives one number for writing and nothing else: no component marks, no comments and no script returned, so she rewrote the second answer from memory in August to find out what had been in it. Mrs Oueidat asked what was in it, and both sides of the question in four paragraphs and no position of her own anywhere, because she had been taught that an examination essay should be balanced, and the task had asked to what extent she agreed. Mrs Khoury said that is the cycle and it is not about her English at all, since the task asked one thing and she answered a different thing she had been taught to answer, and no amount of vocabulary repairs an unanswered question. Dr Qabbani asked what a score is, and a prediction about a person made by two strangers from one performance on four criteria in forty minutes, which is reasonable and is not a skill. Mrs Ajouz said she writes eleven queries to manufacturers a year and two recall notices, all in English and all acted on, and the registration board will not look at any of them. Mr Shihabi asked whether the number is wrong, and Mrs Oueidat said it is not wrong and it is narrow and the room must hold both. Mrs Tarabishi asked what a reader does with a number, and trusts it, because it is one number and a document is four pages. And Mrs Khoury said nobody at the examination will tell her which criterion the number was about, and the descriptors will, against her own script, which is the only route there is: you take the band you want, read its four criteria, and find in your own answer the sentence that earns each one, and where there is no sentence you have found the criterion that is costing you, which is a measurement and not an impression._'));
out.push(p('**Listener task:** write your partner\'s four criteria and say which one their number was about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Ajouz wrote after rewriting her answer from memory. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _note on two tests and one file_ · _written after rewriting the second answer from memory_ · **18 August**',
  '**What the file needs.** **7.0 in each of the four components.** ⚠ **I have 7.5, 7.0, 7.0 and 6.5, and the 6.5 is writing, twice, fourteen months apart.** **The board does not average them and does not accept a 7.5 in reading as compensation, which is the rule and is not negotiable.**',
  '**What I did between the two tests.** **About ninety hours, all of it on vocabulary.** ⚠ **Lists of academic words, a collocation notebook, and forty essays\' worth of phrases I had copied from a preparation book** — **and lexical resource is one of four criteria, equally weighted, which I did not know in June and know now.**',
  '**What the report tells me.** **One number.** ⚠ **No component marks, no comments, and the script is not returned.** **So I rewrote the second answer from memory in August, which took an hour and is the only piece of evidence I have about my own performance.**',
  '**What was in it.** **Four paragraphs: two arguments for, two against, a summary.** ⚠ **Two hundred and seventy-one words and no position of my own in any of them.** **The task had asked to what extent I agreed, and I had answered a different question** — **the one I had been taught to answer at school, where balance was the whole of the mark.**',
  '**What that costs under the first criterion.** **The question was not answered.** ⚠ **Not answered badly: not answered.** **And the other three criteria cannot carry it, because the four are weighted the same and a band is not an average of generosity.**',
  '**What I am not saying.** **That the number is wrong.** ⚠ **It measured what it measured, accurately, from what I wrote** — **and it did not measure the eleven queries I sent to manufacturers last year, or the two recall notices, and it never claimed to.**',
  '**What I shall do differently, and it is not more vocabulary.** **Answer the question in the first sentence and keep answering it.** ⚠ **_I agree with the second view, and in this answer I shall say why the first is still worth keeping._** **Then two paragraphs that hold that position** — **and the balance goes inside the position instead of standing in place of it.**',
  '**And the thing I have not resolved.** **The board will see one number again.** ⚠ **If it is 7.0 in January, nobody will ask what I changed, and if it is 6.5 again, nobody will tell me why** — **and I have begun to think the plan has to include the board and not only the test, which is a different document.**',
  '**And the arithmetic of the fourteen months, set out because nobody set it out for me.** **Ninety hours of vocabulary, two test fees, four preparation books and one morning in Beirut.** ⚠ **Against forty minutes with the published descriptors, which I had not spent, and one hour rewriting my own answer, which I had not thought of** — **and of those two lists, the second produced three jobs and the first produced two list words I am about to remove.** **I am not saying the ninety hours were worthless.** **I am saying that nobody, including me, had asked which quarter of the mark they were for.**',
]));
out.push(item('1', 'What did Mrs Ajouz do between the two tests, and which criterion did it serve?'));
out.push(item('2', 'How did she find out what was in her second answer, and why was that necessary?'));
out.push(item('3', 'What does she say she is not saying about the number, and what will she do differently?'));
out.push(writers([
  'A note on your own examination: **what the file needs, as a figure** → **what you did between attempts, in hours** → **what the report tells you and what it does not** → **what was in the answer** → **what that costs under the criterion** → **what you are not saying** → **what you will do differently** → **and the thing you have not resolved.**',
  '⚠ **Put the requirement in figures and the preparation in hours.** _7.0 in each of four components; about ninety hours, all of it on vocabulary._ **Two lines of arithmetic that anybody can check** — **and the mismatch between them is the note, which no amount of describing how hard it was can produce.**',
  '**Name the criterion, not the paper.** ⚠ _The question was not answered. Not answered badly: not answered._ **A note that says the writing was weak has said nothing a reader can act on** — **and the four criteria are published, so the naming costs a reader nothing to verify.**',
  '**Say what you are not saying.** ⚠ _That the number is wrong. It measured what it measured, accurately, from what I wrote._ **A note that argues with its own score will be read as a complaint and filed as one** — **and the sentence that refuses to argue is what buys the rest of the page its credit.**',
  '⚠ And **end on the thing you have not resolved, and do not resolve it.** _The board will see one number again, and if it is 6.5 nobody will tell me why._ **A note that finishes with a plan has stopped being a record** — **and the unresolved sentence is the one another candidate will recognise, because it is the position almost all of them are in.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on your own examination (120 words or more).'));
out.push(p('**______________** · _note on _______________ · **______________**   **What the file needs.** **______________.** ⚠ **I have ______________.**   **What I did between ______________.** **About ______________ hours, all of it on ______________.** ⚠ **And ______________ is one of ______________ criteria.**   **What the report tells me.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The requirement as a figure, with the components',
  'The preparation, in hours, and which criterion it served',
  'What the report does and does not tell you',
  'No sentence claiming the number is wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentence naming what they prepared**, and the room says which criterion it served.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the requirement, the preparation, what the report tells you, what was in the answer, what it costs under the criterion, what you are not saying, what you will do differently, and the thing you have not resolved.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the four criteria named, the preparation matched to one of them, and no sentence that argues with the score.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many students could name the four criteria of an examination they had sat?** **Three of ten** — **and the seven should hear that said without comment, because it is a fact about examinations and not about them.** **Then: what did each prepare, and which criterion did it serve?** **Six of ten prepared vocabulary.** **Then Mrs Ajouz\'s ninety hours, and the answer she rewrote from memory.**'));
out.push(hw('**Find the four criteria for the paper you will sit next** — **the published descriptors, not a preparation book\'s summary of them** — **and write them out.** ⚠ **Then the harder half: name the one you think your mark is about, and the evidence for thinking so.** **In this class four of ten found that their examination publishes the criteria and three had never opened them.** **Bring the four criteria.** **21.2 answers one question against two mark schemes**, so bring one answer you have written for either examination.'));

// ===================== 21.2 =====================
out.push(pb());
out.push(h2('21.2  One answer, two mark schemes'));
out.push(p('**Function:** answering the same question for two different mark schemes   ·   **Grammar:** the one place the two genuinely differ   ·   **Pronunciation:** the position sentence said as a position'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one answer you have written, and what the task had actually asked you to do with the content.** ⚠ **With the content: given to you, or found by you.** **In this class eight of ten had never noticed the difference** — **and your teacher writes the ten tasks on the board, marking each one _content given_ or _content yours_.**'));
out.push(board('Write an essay discussing two of the points given.', 'To what extent do you agree with this statement?'));
out.push(p('**b**  Which two require a position of your own, held throughout? **1** _Discuss two of the points above and say which you consider more important._  **2** _To what extent do you agree that examinations select the right candidates?_  **3** _Write a report describing the figures in the table._  **4** _Some people say certificates matter more than experience. Do you agree?_  **5** _Evaluate the two proposals and recommend one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the one genuine difference is?   **A** the word count   **B** **where the content comes from** — one gives you points to handle, the other asks for a position you supply   **C** the register'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say the first mark scheme gives you?   **2** What does Mrs Tarabishi say her strong answer lost marks for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  The same answer, marked twice', [
  ['Ms Huda', 'Mrs Ajouz brought one answer and had it marked against both schemes.'],
  ['Mrs Ajouz', '⚠ **Two hundred and seventy-one words, rewritten from memory, and marked twice in this class.** **Under the one it loses on the first criterion because I never took a position.** **Under the other it loses on content because I never compared the two points I had been given** — **and both markers wrote almost the same sentence about it.**'],
  ['Mrs Khoury', 'What does the first scheme give you?'],
  ['Mrs Khoury', '⚠ **The content.** **Two or three points, printed, with a line of somebody\'s opinion under each, and the task is to take two of them and handle them** — **compare, evaluate, and select, in your own register, with a conclusion that actually chooses.** **Your own opinion is welcome and it is not the thing being marked.**'],
  ['Mr Attar', 'And the other?'],
  ['Mrs Khoury', '⚠ **Gives you a statement and asks how far you agree.** **The content is yours and the criterion is whether you take a position and hold it from the first sentence to the last** — **and an answer that gives both sides evenly and chooses nothing has not answered that question, however good the sides are.**'],
  ['Mrs Tarabishi', 'Mine went the other way.'],
  ['Mrs Tarabishi', '⚠ **A strong position, held all the way, and I ignored the second point I had been given.** **The marker\'s note was that I had written an excellent answer to a question nobody had asked** — **and I had thought my position was the mark, because that is what I had been taught for the other test.**'],
  ['Mrs Oueidat', 'So the two are opposite.'],
  ['Mrs Khoury', '⚠ **They are not opposite and the room will want them to be.** **The English is the same English: the paragraphs, the register, the accuracy, the hedging, the referencing back** — **and one place differs, which is where the content comes from, and a candidate who learns that one place can write for either.**'],
  ['Dr Qabbani', 'What about the length?'],
  ['Mrs Ajouz', '⚠ **That is bookkeeping and it costs marks anyway.** **One counts the words and takes marks off below the figure it names; the other gives a range and marks short answers through the content, because a short answer has not done the work** — **and my two hundred and seventy-one words were safe in one and thin in the other.**'],
  ['Mr Shihabi', 'Two answers, then.'],
  ['Mrs Khoury', '⚠ **One answer and two added sentences, which is the whole method of the cycle.** **Write the body once.** **For the one, add a sentence that compares the two given points and a last sentence that selects between them.** **For the other, add a position in the first sentence and the same position in the last** — **and nothing else changes.**'],
  ['Mr Tayara', 'And if you add both?'],
  ['Mrs Oueidat', '⚠ **Then you have selected between two points nobody gave you, or asserted an opinion and never touched the input, and both of those are in this class already.** **Adding both is the commonest fault of a student preparing for two examinations at once** — **and it reads as confusion rather than as range.**'],
  ['Mrs Rizk', 'How long does the switch take?'],
  ['Mrs Ajouz', '⚠ **About four minutes, and I timed it.** **Two sentences in, two sentences out, and one paragraph reordered so that the position is not buried in the middle** — **and the answer that came out of the switch was better than either of the originals, which I had not expected and cannot fully explain.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the marker\'s sentence about Mrs Tarabishi\'s answer.** **_An excellent answer to a question nobody asked._** **That is both of our faults in one line** — **hers by holding a position where the task wanted the input handled, and mine by balancing where the task wanted a position, and neither of us had read what the task was measuring.**'],
]));
out.push(sp());
out.push(box('Language box – one body, two framings', [
  '**One examination gives you the content; the other asks you to supply it.** ⚠ **That is the only place the two genuinely differ** — **and everything the room has learnt about paragraphs, register, hedging and accuracy serves both without alteration.**',
  '**Where the content is given: compare the two points, evaluate them against each other, and select in the last sentence.** ⚠ _Of the two, the second is the more useful, because it can be acted on by one person in a week._ **Your own opinion is welcome and is not what is being marked.**',
  '**Where the content is yours: take a position in the first sentence and hold it to the last.** ⚠ _I agree with the second view, and in this answer I shall say why the first is still worth keeping._ **The balance goes inside the position, not in place of it.**',
  '**One body, two added sentences, four minutes.** ⚠ **Two sentences in, two out, and one paragraph reordered so the position is not buried.** **Do not write two answers** — **and do not add both framings to one answer, which is the commonest fault of a candidate preparing for two examinations at once.**',
  '**The length is bookkeeping and it still costs marks.** ⚠ **One scheme counts the words and deducts below its figure.** **The other gives a range and marks a short answer through the content** — **because an answer that is short has not done the work the content needed.**',
  '**And the sentence to keep in front of you is a marker\'s.** ⚠ **_An excellent answer to a question nobody asked._** **It is the fault in both directions** — **and it is never a fault of English.**',
  '**Pronunciation.** 🔊 **Track 21.4** **Say the position sentence with the stress on the view you are taking and no rise at the end.** ⚠ **A rise makes a position sound like an offer to discuss** — **and under the criterion that marks position, an offer to discuss reads as no position at all.**',
  '**Practise:** Frame it. **1** two given points  **2** a statement to agree with  **3** a position buried in paragraph three  **4** both framings in one answer  **5** two hundred and seventy-one words',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the task from the card. B says **where the content comes from**, and gives **the two sentences the answer needs** — the comparison and the selection, or the position and its repetition. ⚠ **Two rows on each card are neither** — **and there B says what is being marked instead.** Change cards.'));
out.push(table(['Card A – the task as set', 'Card B – the task as set'], [
  ['_Discuss two of the points above and say which matters more._', '_To what extent do you agree with this statement?_'],
  ['_⚠ Describe the figures in the chart in 150 words._', '_⚠ Write a report for your manager on the two sites._'],
  ['_Some people say certificates matter more than experience._', '_Evaluate the two proposals and recommend one._'],
  ['_⚠ Write a review of a course you have taken._', '_⚠ Write a letter applying for the post._'],
  ['_An answer that gives both sides and chooses nothing._', '_An answer with a position that ignores the second point._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** where the content comes from, and the two sentences. ⚠ **Rows 2 and 4 on both cards are neither framing**: a data description, a report, a review and a letter are marked on selection, register and the decision offered, **and the room will try to force a position into all four.** **Rows 5 are the pair the cycle turns on**: they are the two faults, one each way, **and both are answers nobody asked for.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **one answer you have written** and reframe it for the other scheme. ⚠ **Two sentences in, two sentences out, and one paragraph reordered.** **Time yourself.** **In this class the switch took between three and nine minutes and nobody needed a new body** — **and four of ten found that the reframed version was the better answer, which is worth saying out loud and not explaining away.**'));
out.push(p('**b**  Swap. Your partner reads **your reframed answer** and says **which scheme it is now for**, from the first and last sentences alone. ⚠ **Then the harder question: are both framings in there?** — **and in this class three answers had both, and all three readers called it confusion rather than range.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz brought one answer of two hundred and seventy-one words, rewritten from memory, and had it marked against both schemes in this class: under the one it loses on the first criterion because she never took a position, and under the other it loses on content because she never compared the two points she had been given, and both markers wrote almost the same sentence about it. Mrs Khoury said the first scheme gives you the content, two or three printed points with a line of somebody\'s opinion under each, and the task is to take two of them and handle them, comparing, evaluating and selecting, with a conclusion that actually chooses, and your own opinion is welcome and is not the thing being marked. Mr Attar asked about the other, and it gives a statement and asks how far you agree, so the content is yours and the criterion is whether you take a position and hold it from the first sentence to the last. Mrs Tarabishi said hers went the other way, a strong position held all the way and the second given point ignored, and the marker\'s note was that she had written an excellent answer to a question nobody had asked. Mrs Oueidat said so the two are opposite, and Mrs Khoury said they are not opposite and the room will want them to be, because the English is the same English and one place differs, which is where the content comes from. Dr Qabbani asked about the length, and that is bookkeeping and costs marks anyway: one counts the words and deducts below the figure it names, and the other gives a range and marks short answers through the content. Mr Shihabi said two answers, then, and Mrs Khoury said one answer and two added sentences, which is the whole method: write the body once, and for the one add a comparison and a selection, and for the other add a position in the first sentence and the same position in the last. Mr Tayara asked what happens if you add both, and Mrs Oueidat said then you have selected between two points nobody gave you, or asserted an opinion and never touched the input, and adding both reads as confusion rather than as range. Mrs Rizk asked how long the switch takes, and about four minutes, timed. And Mrs Ajouz said the thing she will take away is the marker\'s sentence about Mrs Tarabishi\'s answer, which is both of their faults in one line and is never a fault of English._'));
out.push(p('**Listener task:** write the two sentences your partner added and say which scheme they are for.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Ajouz\'s note on one answer marked twice. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _one answer, two mark schemes_ · _with the two added sentences_ · **25 August**',
  '**The answer.** **Two hundred and seventy-one words, four paragraphs, rewritten from memory.** ⚠ **Two arguments for examinations as a means of selection, two against, and a summary that says both views have merit.**',
  '**Marked against the scheme that supplies the content.** **It loses on content and not on language.** ⚠ **I had been given two printed points and I had used neither of them** — **and the body of my answer is about a third point of my own, which is interesting and is not the task.**',
  '**Marked against the scheme that asks for a position.** **It loses on the first of four criteria.** ⚠ **The task asked to what extent I agreed and the summary says that both views have merit, which is not an extent** — **and the three remaining criteria cannot carry it, because they are weighted the same and not generous.**',
  '**The one place the two genuinely differ.** **Where the content comes from.** ⚠ **One prints the points and marks how I handle them; the other prints a statement and marks whether I hold a position** — **and everything else I have been taught about paragraphs, register and accuracy serves both without alteration.**',
  '**The two sentences for the first scheme.** _Of the two points above, the second is the more useful, because a selection procedure can be changed by one committee in a term where public confidence cannot._ **And at the end:** _For that reason I should keep the second and not the first._',
  '**The two sentences for the second scheme.** _I agree with the second view, and in this answer I shall say why the first is still worth keeping._ **And at the end:** _My position is unchanged by the two objections above, and I have said which of them I find the stronger._',
  '**What the switch took.** **Four minutes, timed, and one paragraph moved.** ⚠ **The position had been in the middle of paragraph three in both versions, where a marker working at speed will not find it** — **and moving it was the only change to the body.**',
  '**And the thing I had not expected.** **The reframed answer is better than either original.** ⚠ **I think it is because a sentence that has to select, or a sentence that has to hold, forces the paragraphs underneath it to be about something** — **and my four paragraphs had not been about anything in particular for eight years of answers like that.**',
  '**What I shall do with this in January.** **Write the body, then decide which examination I am in, then add the two sentences.** ⚠ **In that order, and the deciding takes four seconds because it is printed at the top of the paper** — **and the reason to do it in that order is that a body written for a framing is worse than a body written for the question.** **My four paragraphs were written for a framing I had been taught at school, and the framing had outlived the school by eighteen years.**',
]));
out.push(item('1', 'Why does the answer lose marks under the scheme that supplies the content?'));
out.push(item('2', 'What does she say the one genuine difference between the two schemes is?'));
out.push(item('3', 'What did the switch take, and what does she think it did to the paragraphs?'));
out.push(writers([
  'A note on one answer marked twice: **the answer in figures** → **what it loses under the scheme that supplies the content** → **what it loses under the scheme that asks for a position** → **the one genuine difference** → **the two sentences for each scheme, quoted** → **what the switch took** → **and the thing you had not expected.**',
  '⚠ **Quote the four added sentences in full.** **A note that describes them has left its reader with nothing to copy** — **and these four sentences are the whole transferable content of the cycle, which takes about thirty seconds to read and can be used on Thursday.**',
  '**Name the difference as content and not as style.** ⚠ _One prints the points and marks how I handle them; the other prints a statement and marks whether I hold a position._ **A note that says one examination is more academic has explained nothing** — **and the register, the paragraphs and the accuracy are identical in both, which is the claim and is checkable.**',
  '**Time the switch and give the figure.** ⚠ _Four minutes, timed, and one paragraph moved._ **The figure is the argument: a candidate who believes two examinations need two preparations will not be talked out of it** — **and four minutes cannot be argued with.**',
  '⚠ And **report the thing that surprised you, including the part you cannot explain.** _The reframed answer is better than either original, and I think it is because a sentence that has to select forces the paragraphs under it to be about something._ **_I think_ is the honest hedge there** — **and a note that explains the improvement confidently has overclaimed a finding from one answer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on one answer marked twice (120 words or more).'));
out.push(p('**The answer.** **______________ words, ______________ paragraphs.** ⚠ **______________.**   **Marked against the scheme that supplies the content.** **It loses on ______________.** ⚠ **I had been given ______________ and I ______________.**   **Marked against the scheme that asks for a position.** **It loses on ______________ because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The answer described in figures, not impressions',
  'One loss named under each scheme',
  'The genuine difference stated as where the content comes from',
  'No claim that the two schemes want different English',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their two added sentences**, and the room says which scheme each pair is for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the answer, the two markings, the one genuine difference, the two sentences for each scheme, what the switch took, and the thing you had not expected.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the two added sentences quoted in full, the genuine difference named as content and not as style, and no sentence claiming one scheme is harder.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How long did the switch take?** **Between three and nine minutes, and nobody needed a new body** — **and four of ten found the reframed version was the better answer.** **Then: how many answers had both framings in them?** **Three, and all three readers called it confusion and not range.** **Then the marker\'s sentence: an excellent answer to a question nobody asked.**'));
out.push(hw('**Take one answer you have written and reframe it for the other scheme**, two sentences in and two out. ⚠ **Then the harder half: give both versions to somebody who has not seen the task and ask which examination each is for.** **In this class seven of ten readers could tell from the first and last sentences alone, and the three who could not were reading answers that had both framings in them.** **Bring both versions.** **21.3 reads a band descriptor against your own sentences**, so bring the published descriptors for the band you need.'));

// ===================== 21.3 =====================
out.push(pb());
out.push(h2('21.3  The descriptor, and the sentence that earns it'));
out.push(p('**Function:** reading a band descriptor and saying which sentence of yours earns it   ·   **Grammar:** the descriptor applied to evidence rather than to an impression   ·   **Pronunciation:** the gap reported as a gap'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one phrase from a published descriptor, read out exactly, and the sentence of yours that earns it.** ⚠ **A sentence, read aloud, not a judgement about yourself.** **In this class seven of ten produced a judgement and had to be asked again** — **and your teacher writes the ten phrases on the board and leaves the second column empty until somebody supplies a sentence.**'));
out.push(board('Uses less common items with some awareness of style.', 'Which sentence of mine is the evidence?'));
out.push(p('**b**  Which two are evidence? **1** _My vocabulary is quite wide._  **2** _Paragraph two: "the shortfall is a matter of workmanship rather than of design", where "shortfall" and "workmanship" are the register of the field and not of the list I learnt them from._  **3** _I think I write at about this level._  **4** _Nineteen sentences, of which eleven have no error that my partner could find and four have one each._  **5** _My teacher has always said my writing is good._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a descriptor is?   **A** a description of a person   **B** **a list of criteria, each of which is either met by a sentence of yours or is not**   **C** an encouragement'));
out.push(p('**b**  Listen again. **1** How many of the seven phrases did Mrs Ajouz find a sentence for?   **2** What does Mrs Oueidat say a descriptor phrase has in common with a clause in a contract?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  Seven phrases and four sentences', [
  ['Ms Huda', 'Mrs Ajouz has taken the descriptors apart.'],
  ['Mrs Ajouz', '⚠ **Seven phrases for the band I need, and I went through my own answer with them.** **Four of the seven have a sentence beside them.** **Three have nothing at all** — **and the three are a clear position held throughout, cohesive devices used appropriately, and less common items used with some awareness of style.**'],
  ['Mrs Khoury', 'And the fourteen months of vocabulary?'],
  ['Mrs Ajouz', '⚠ **This is the part I did not expect and I shall say it plainly, because in 21.1 I said my vocabulary was the one thing that did not need the work.** **That was wrong.** **The phrase has no sentence** — **not because the words are missing but because they are in the wrong register: I have _plethora_ and _myriad_ in an answer about selection procedures, and both came out of a list and neither belongs there.**'],
  ['Mr Attar', 'So the hours were not wasted.'],
  ['Mrs Khoury', '⚠ **The hours were on the right criterion and did the wrong thing, which is a different finding and a more useful one.** **A list gives you items; the descriptor asks for items used with awareness of style** — **and awareness of style cannot be built by a list, because the list has no register in it.**'],
  ['Mrs Oueidat', 'The phrases read like clauses.'],
  ['Mrs Oueidat', '⚠ **They are clauses and they can be read two ways, which is 19.1 arriving in a document about me.** **_A range of cohesive devices used appropriately_** — **I had read it as _a range_, and the examiner reads it as _appropriately_, and my four paragraphs begin with _however_, _moreover_, _in addition_ and _furthermore_, which is a range and is not appropriate.**'],
  ['Dr Qabbani', 'That is four devices in four places.'],
  ['Mrs Khoury', '⚠ **It is a range deployed mechanically, which is the single commonest thing a marker sees** — **and it is evidence against the phrase rather than for it, which the room must take seriously: a sentence can earn a descriptor and a sentence can also disprove one.**'],
  ['Mrs Tarabishi', 'And the four that did have sentences?'],
  ['Mrs Ajouz', '⚠ **Read out, with the phrase beside each, and it took forty minutes for the whole answer.** **_Addresses all parts of the task_ — paragraph one names both parts.** **_A variety of complex structures_ — the conditional in paragraph three.** **And two more** — **and the forty minutes told me more than the ninety hours did.**'],
  ['Mr Shihabi', 'Can anybody do this without a marker?'],
  ['Mrs Khoury', '⚠ **Anybody can do it and almost nobody does, because it requires your own script and your own script is not returned.** **So you write the answer again from memory, as she did** — **and the room should notice that the rewriting is the method and not a complaint about the examination.**'],
  ['Mr Tayara', 'What do you do with the three gaps?'],
  ['Mrs Ajouz', '⚠ **They are the plan, and they are specific enough to work on this week.** **A position in the first sentence and the last; two paragraph openings rewritten so that the device does something; and the four list words taken out and replaced with the register of the subject** — **which is three jobs, not ninety hours.**'],
  ['Mrs Rizk', 'Does the gap have to be said out loud?'],
  ['Mrs Oueidat', '⚠ **Said flat, as a gap, and this is where the room will reach for apology.** **_This phrase has no sentence in my answer_ is a measurement.** **_I am weak at cohesion_ is a verdict about a person** — **and a verdict cannot be worked on, where a gap can be closed on Tuesday.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that the descriptors were published the whole time.** **Four pages, free, on the website, for fourteen months** — **and I had read them four times and never once put them beside a sentence of my own, which is the only reading of them that does anything.**'],
]));
out.push(sp());
out.push(box('Language box – the descriptor against your own sentence', [
  '**A descriptor is a list of criteria and each one is either met by a sentence of yours or is not.** ⚠ **Take the phrase, find the sentence, write the sentence beside it** — **and where there is no sentence, you have found the criterion that is costing you, which is a measurement and not an impression.**',
  '**Evidence, not judgement.** ⚠ _Paragraph two: "the shortfall is a matter of workmanship rather than of design."_ **That is evidence.** **_My vocabulary is quite wide_ is a judgement about a person** — **and no examiner has ever marked one.**',
  '**A sentence can also disprove a phrase.** ⚠ **_A range of cohesive devices used appropriately_, against four paragraphs opening with _however_, _moreover_, _in addition_ and _furthermore_** — **a range, deployed mechanically, and evidence against the phrase and not for it.**',
  '**The phrases are clauses and they have a second reading, which is 19.1 pointed at yourself.** ⚠ **_Less common items used with some awareness of style_ is not a request for less common items** — **and a word out of a list, in the wrong register, meets the first half and fails the second.**',
  '**Say the gap flat, as a gap.** ⚠ **_This phrase has no sentence in my answer._** **Not _I am weak at cohesion_, which is a verdict about a person and cannot be worked on** — **where a gap is three jobs and a week.**',
  '**And the method needs your own script, which is not returned.** ⚠ **So write the answer again from memory, as soon after as you can.** **An hour of rewriting and forty minutes of marking it against seven phrases** — **and that is the whole apparatus, and it is free.**',
  '**Pronunciation.** 🔊 **Track 21.6** **Say _this phrase has no sentence in my answer_ with no fall at the end and no stress on _no_.** ⚠ **Stress on _no_ makes it a confession** — **flat, it is a line in an inventory, and the next sentence is the job it implies.**',
  '**Practise:** Evidence or judgement? **1** _my grammar is accurate_  **2** _eleven of nineteen sentences have no error_  **3** _I use good linking words_  **4** _paragraph three: the conditional_  **5** _this phrase has no sentence_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the descriptor phrase from the card. B supplies **the sentence from the sample answer that earns it**, or says **that the phrase has no sentence** and names the job. ⚠ **Two rows on each card are disproved by a sentence** — **and there B reads out the sentence that disproves them.** Change cards.'));
out.push(table(['Card A – the descriptor phrase', 'Card B – the descriptor phrase'], [
  ['_Addresses all parts of the task._', '_Presents a clear position throughout._'],
  ['_⚠ Uses a range of cohesive devices appropriately._', '_⚠ Uses less common items with awareness of style._'],
  ['_Uses a variety of complex structures._', '_Produces frequent error-free sentences._'],
  ['_⚠ Logically organises information and ideas._', '_⚠ Uses paragraphing sufficiently and appropriately._'],
  ['_Selects the main features of the data._', '_Makes comparisons where relevant._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the sentence, or the gap and the job. ⚠ **Rows 2 and 4 on both cards are disproved by a sentence in the sample** — **the four mechanical paragraph openings, the two list words, one paragraph that contains two ideas and one that contains none.** **Rows 5 are the pair from the other paper**: nothing in the sample answers them at all, **and the honest answer is that the phrase belongs to a task the writer has not attempted.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the published descriptors for the band you need** and **your own answer, rewritten from memory if you have to.** ⚠ **Phrase by phrase: the sentence, or nothing.** **In this class the average was four sentences out of seven phrases, the best was six, and two students found that a phrase they had assumed was safe was disproved by their own writing** — **which is the most valuable single finding in the unit.**'));
out.push(p('**b**  Swap. Your partner reads **your inventory** and asks **whether each sentence really earns the phrase.** ⚠ **Then the harder question: what are the three jobs?** — **and in this class every student who had three gaps could name three jobs, and nobody needed more than a fortnight for any of them.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz has taken the descriptors apart: seven phrases for the band she needs, four of them with a sentence of hers beside them, and three with nothing at all, which are a clear position held throughout, cohesive devices used appropriately, and less common items used with some awareness of style. Mrs Khoury asked about the fourteen months of vocabulary, and Mrs Ajouz said this is the part she did not expect and will say plainly, because in the first cycle she had said her vocabulary was the one thing that did not need the work, and that was wrong: the phrase has no sentence, not because the words are missing but because they are in the wrong register, since she has plethora and myriad in an answer about selection procedures and both came out of a list. Mr Attar said so the hours were not wasted, and Mrs Khoury said the hours were on the right criterion and did the wrong thing, which is a different and more useful finding, because a list gives you items and the descriptor asks for items used with awareness of style, which a list cannot build. Mrs Oueidat said the phrases read like clauses, and they are clauses and can be read two ways, which is 19.1 arriving in a document about her: she had read a range of cohesive devices used appropriately as a range, and the examiner reads it as appropriately, and her four paragraphs begin with however, moreover, in addition and furthermore. Dr Qabbani said that is four devices in four places, and Mrs Khoury said it is a range deployed mechanically, which is the commonest thing a marker sees, and it is evidence against the phrase rather than for it. Mrs Tarabishi asked about the four that did have sentences, and they were read out with the phrase beside each, and the whole answer took forty minutes, which told her more than the ninety hours did. Mr Shihabi asked whether anybody can do this without a marker, and anybody can and almost nobody does, because it requires your own script, which is not returned, so you write the answer again from memory. Mr Tayara asked what you do with the three gaps, and they are the plan and they are three jobs and not ninety hours. Mrs Rizk asked whether the gap has to be said out loud, and Mrs Oueidat said said flat, as a gap, because a verdict about a person cannot be worked on where a gap can be closed on Tuesday. And Mrs Ajouz said the descriptors were published the whole time, four pages, free, for fourteen months, and she had read them four times and never once put them beside a sentence of her own._'));
out.push(p('**Listener task:** write one phrase, the sentence that earns it, and one gap with its job.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Ajouz\'s inventory. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _seven phrases, four sentences_ · _the band I need, against the answer I rewrote_ · **1 September**',
  '**How this was done.** **The published descriptors, four pages, and my own answer rewritten from memory.** ⚠ **Phrase by phrase, in order, with the sentence written out beside each one or the space left empty.** **Forty minutes.**',
  '**1 · Addresses all parts of the task.** **Earned.** ⚠ _Examinations are used to select candidates for registration, and the question is how far that use is justified._ **Paragraph one names both parts, and I had not noticed that it did.**',
  '**2 · Presents a clear position throughout.** **Nothing.** ⚠ **Four paragraphs, two each way, and a summary that both views have merit** — **and _merit_ is not an extent.** **The job: a position in the first sentence and the same position in the last.**',
  '**3 · Uses a range of cohesive devices appropriately.** **Disproved by my own writing, which is worse than nothing.** ⚠ **The four paragraphs open with _however_, _moreover_, _in addition_ and _furthermore_.** **That is a range, deployed by position rather than by meaning** — **and _however_ at the head of paragraph two contradicts nothing in paragraph one.**',
  '**4 · Uses a variety of complex structures.** **Earned.** ⚠ _Had the registration board been able to read the eleven queries, the question of the certificate would not have arisen._ **One inversion, in paragraph three, and it is doing work.**',
  '**5 · Produces frequent error-free sentences.** **Earned, on my partner\'s reading: eleven of nineteen with no error she could find.** ⚠ **I cannot mark this one myself and I have said so, which is the honest entry.**',
  '**6 · Uses less common items with some awareness of style.** **Nothing, and this is the entry that corrects me.** ⚠ **_Plethora_ and _myriad_, in an answer about selection procedures, both from a list.** **The job: take them out, and put in the register of the subject** — _eligibility_, _component_, _compensation_ — **which I use at work every day and had not thought of as vocabulary.**',
  '**7 · Logically organises information and ideas.** **Earned, narrowly.** ⚠ **Paragraph three contains two ideas and should be two paragraphs.**',
  '**What the inventory gives me.** **Three jobs and a fortnight.** ⚠ **A position, two paragraph openings, and four words exchanged for the ones I already own** — **against ninety hours that produced the two list words I am now removing.**',
  '**What the method costs and what it needs.** **An hour to rewrite the answer, forty minutes to mark it, and nothing else at all.** ⚠ **No teacher, no fee, no second attempt, and no permission from anybody** — **and the four pages of descriptors were on a public website throughout the fourteen months in which I did not open them properly.** **I have given a copy of this inventory to two colleagues who are sitting the same test in March.**',
  '**And the entry I cannot make, which the room should know about.** **Nothing in this inventory tells me what a marker would have done with the answer as a whole.** ⚠ **Seven phrases are not a band and four earned phrases are not a 7.0** — **and a candidate who believes the inventory is a prediction has made the mistake the unit opened with, in the other direction.**',
]));
out.push(item('1', 'How was the inventory made, and how long did it take?'));
out.push(item('2', 'Why does she say entry 3 is worse than nothing?'));
out.push(item('3', 'What does entry 6 correct, and what is the job it produces?'));
out.push(writers([
  'An inventory: **how it was done, and how long it took** → **each phrase in order, numbered** → **the sentence quoted, or the space left empty** → **any phrase your own writing disproves** → **the entry you cannot mark yourself** → **and what the inventory gives you, in jobs and weeks.**',
  '⚠ **Quote the sentence beside every earned phrase.** _Had the registration board been able to read the eleven queries, the question of the certificate would not have arisen._ **A tick is not evidence** — **and the point of writing the sentence out is that half the ticks do not survive being written out, which is the most useful minute in the exercise.**',
  '**Leave the empty spaces empty and give each one its job.** ⚠ _Nothing. The job: a position in the first sentence and the same position in the last._ **A gap with no job attached becomes a worry** — **and the three jobs are what make the inventory a fortnight of work instead of a verdict about a person.**',
  '**Mark the phrase your own writing disproves, and mark it as worse than a gap.** ⚠ _However, moreover, in addition and furthermore, at the head of four paragraphs: a range, deployed by position rather than by meaning._ **A disproof is evidence against you in your own handwriting** — **and nobody finds those except by this method.**',
  '⚠ And **say which entry you cannot mark yourself, and leave it to somebody else.** _I cannot mark error-free sentences and I have said so._ **An inventory that marks every phrase has one entry in it that is an impression** — **and the honest entry is the one that names the limit of the method.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own inventory (120 words or more).'));
out.push(p('**How this was done.** **______________.** ⚠ **Phrase by phrase, with the sentence beside each or the space left empty.** **______________ minutes.**   **1 · ______________.** **Earned.** ⚠ _______________._   **2 · ______________.** **Nothing.** ⚠ **______________.** **The job: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A sentence quoted beside every earned phrase',
  'Every gap stated as a gap, with its job',
  'Any phrase your own writing disproves, marked as such',
  'No judgement about yourself anywhere in the inventory',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one earned phrase with its sentence**, and the room says whether the sentence really earns it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole inventory (260 words or more): how it was done, the seven phrases in order with a sentence or a space, the phrase your own writing disproves, and the jobs the gaps produce.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a sentence quoted beside every earned phrase, every gap stated as a gap with its job, and no judgement about the writer anywhere.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many phrases out of seven had a sentence?** **An average of four, the best six** — **and two students found a phrase their own writing disproved, which is the most valuable finding in the unit and should be read aloud.** **Then: how many jobs did each gap produce, and how long is each?** **Nobody needed more than a fortnight.** **Then the four free pages, read four times in fourteen months and never once put beside a sentence.**'));
out.push(hw('**Make the inventory for the band you need, against your own answer** — **rewritten from memory if the script was not returned.** ⚠ **Then the harder half: do the shortest of the three jobs this week and bring both versions of the sentence.** **In this class eight of ten did the shortest job and six brought both versions, and in four cases the partner could not tell which was the later one, which is worth discussing rather than hiding.** **Bring the inventory.** **21.4 says what your English is without naming a level**, so bring nothing: the cycle begins with the board empty.'));

// ===================== 21.4 =====================
out.push(pb());
out.push(h2('21.4  What my English is, without a level'));
out.push(p('**Function:** saying what your English is, without naming a level   ·   **Grammar:** documents, volumes and limits in place of a label   ·   **Pronunciation:** the limit said as a fact and not as an apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **what your English is.** ⚠ **Your teacher will stop you at the first level, year or certificate.** **In this class eight of ten named a level in the first sentence and six gave years of study** — **and the board stays empty until somebody names a document, which took four minutes in this class and is worth waiting out in silence.**'));
out.push(board('I have an upper-intermediate level.', 'I read thirty-one product dossiers a year in it.'));
out.push(p('**b**  Which two survive having no certificate attached? **1** _I have a B2 and I am working towards C1._  **2** _I read about thirty product dossiers a year, of forty to ninety pages each, and write the queries that come out of them._  **3** _I have studied English for twelve years._  **4** _I have interpreted in court for fourteen years and I have never sat an examination in it._  **5** _My English is quite good, especially speaking._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a description has to contain?   **A** a level and a date   **B** **documents, volumes, and a limit named** — what you do in it, how much, and what you cannot do   **C** a list of courses'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say she has instead of a certificate?   **2** What does Mrs Khoury say years of study measure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  Fourteen years and no examination', [
  ['Ms Huda', 'Say what your English is, without a level.'],
  ['Mrs Ajouz', '⚠ **I read thirty-one product dossiers a year, of between forty and ninety pages, and I write the queries that come out of them** — **eleven last year, to four manufacturers, and two recall notices.** **And I cannot follow a conference talk without the slides, which I found out in Beirut in 2022.**'],
  ['Mrs Khoury', 'That is the cycle done in two sentences.'],
  ['Mrs Khoury', '⚠ **Documents, a volume, and a limit, and no label anywhere.** **The room should notice what the volume does: thirty-one dossiers is a fact a reader can weigh** — **where _I read a lot of technical material in English_ is a sentence anybody can write, including somebody who reads none.**'],
  ['Mrs Oueidat', 'I have no certificate at all.'],
  ['Mrs Oueidat', '⚠ **Fourteen years of interpreting in court and no examination in English since 2009.** **What I have instead is a list: about four hundred sittings, two hundred and seventy of them criminal, and the certificates of accuracy I sign** — **and in eleven of the fourteen years nobody has asked me for a level, and the two who asked were both abroad.**'],
  ['Mr Attar', 'Would a certificate help you?'],
  ['Mrs Oueidat', '⚠ **It would help a reader who does not know what a court interpreter does, and it would tell them less than one sitting would.** **I am not against the number** — **I am saying that mine would be a prediction about a performance I have given four hundred times, which is a strange thing to buy.**'],
  ['Dr Qabbani', 'And years of study?'],
  ['Mrs Khoury', '⚠ **Years of study measure the teaching and not the English, and six of ten in this room offered them.** **_Twelve years of English_ tells a reader how long somebody sat in a room** — **and the honest version of it is a volume: what did you read in those twelve years, and what did you write?**'],
  ['Mrs Tarabishi', 'Mine is almost all reading.'],
  ['Mrs Tarabishi', '⚠ **Four hundred papers for the literature review and about sixty in the last year, and I have written one conference abstract and no English prose longer than a page since 2021.** **Which is a lopsided description and it is mine** — **and the lopsidedness is the useful part, because it tells a supervisor exactly what to give me and what not to.**'],
  ['Mr Shihabi', 'Does a limit not harm you?'],
  ['Mrs Khoury', '⚠ **A limit named is the thing that makes the rest of the description believable, and the room will resist this for the whole cycle.** **A description with no limit in it reads as a claim.** **_I cannot follow a conference talk without the slides_ costs Mrs Ajouz nothing and buys the thirty-one dossiers their credit** — **and a reader who has seen one honest limit stops looking for the dishonest ones.**'],
  ['Mr Tayara', 'And where does the level go?'],
  ['Mrs Ajouz', '⚠ **Last, if at all, and in a line of its own.** **_I shall sit the test again in January and the file needs 7.0._** **That is a fact about a file and not about my English** — **and 21.6 puts it in the last line of the page, where an admissions reader will find it after the evidence and not instead of it.**'],
  ['Mrs Rizk', 'How do you know the description is any good?'],
  ['Mrs Oueidat', '⚠ **One test, and it is the test of the whole cycle: would every sentence still be true if the certificate were withdrawn tomorrow?** **Mine would, because I have not got one.** **Mrs Ajouz\'s would** — **and the eight descriptions in this room that began with a level would have lost their first sentence and kept nothing, which took about ten seconds to demonstrate and was not comfortable.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is what happened when I said the dossiers out loud.** **Mrs Tarabishi asked how long one takes me, and it is about two hours for ninety pages with the monograph open beside it** — **and nobody in fourteen months of preparation had asked me a single question about what I actually do in English, including me.**'],
]));
out.push(sp());
out.push(box('Language box – the description without a level', [
  '**Documents, volumes, and a limit named.** ⚠ **_Thirty-one product dossiers a year, of forty to ninety pages, and the eleven queries that came out of them._** **A reader can weigh that** — **where _I read a lot of technical material_ can be written by somebody who reads none.**',
  '**A volume is the cheapest credibility there is.** ⚠ **Four hundred sittings, two hundred and seventy of them criminal.** **Four hundred papers, sixty in the last year.** **Thirty-one dossiers** — **and in each case the figure was already known to the writer and had never been written down.**',
  '**Years of study measure the teaching and not the English.** ⚠ **_Twelve years of English_ says how long somebody sat in a room** — **and the honest version is a volume: what was read in those years, and what was written?**',
  '**Name a limit, and the rest becomes believable.** ⚠ **_I cannot follow a conference talk without the slides._** **A description with no limit reads as a claim** — **and a reader who has seen one honest limit stops looking for the dishonest ones.**',
  '**The lopsidedness is information and not a weakness.** ⚠ **Almost all reading and one abstract in three years tells a supervisor exactly what to give you and what not to** — **and a balanced description that is not true tells them nothing at all.**',
  '**And the test of the whole cycle is one question.** ⚠ **Would every sentence still be true if the certificate were withdrawn tomorrow?** **The level, if it appears, goes last and in a line of its own** — **as a fact about a file and not about your English.**',
  '**Pronunciation.** 🔊 **Track 21.8** **Say the limit flat, with no fall and no quickening.** ⚠ **A limit said quickly is an apology and invites reassurance** — **and reassurance is the one response that destroys the description, because the reader has then been asked to disagree with you about yourself.**',
  '**Practise:** Say it without a level. **1** what you read, with a volume  **2** what you write, and to whom  **3** what you do with people  **4** one limit  **5** the level, last and in its own line',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the description from the card. B says **whether it survives having no certificate attached**, and rewrites it with **a document, a volume and a limit.** ⚠ **Two rows on each card already survive** — **and there B says so and names which of the three parts is doing the work.** Change cards.'));
out.push(table(['Card A – the description as given', 'Card B – the description as given'], [
  ['_I have a B2 and I am working towards C1._', '_My English is quite good, especially speaking._'],
  ['_⚠ Four hundred court sittings and no examination since 2009._', '_⚠ About sixty papers read last year and one abstract written._'],
  ['_I have studied English for twelve years._', '_I did an intensive course in 2019._'],
  ['_⚠ Thirty-one dossiers a year, and I cannot follow a talk without slides._', '_⚠ Eleven queries to four manufacturers, and two recall notices._'],
  ['_I am fluent._', '_I can read anything but I cannot write._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** does it survive, and the three parts. ⚠ **Rows 2 and 4 on both cards survive already, and the room must name which part carries them** — **a volume, in three of the four, and a limit in the fourth.** **Rows 5 are the pair the cycle turns on**: _I am fluent_ has nothing in it at all, **and _I can read anything but I cannot write_ has a limit and no volume, which is half a description and the commoner half.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **what your English is** in four parts: **what you read in it, with a volume · what you write in it, and to whom · what you do in it with people · and one limit.** ⚠ **No level, no years, no certificate.** **In this class the volumes were already known to every writer and none of them had ever been written down** — **and three students had to telephone somebody to get a figure they use every week.**'));
out.push(p('**b**  Swap. Your partner applies **the test**: would every sentence still be true if the certificate were withdrawn tomorrow? ⚠ **Then the harder question: which sentence would a reader act on?** — **and in this class the sentence chosen was a volume in six cases and a limit in three, and in one case there was nothing to act on at all.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked the room to say what their English is without a level, and Mrs Ajouz said she reads thirty-one product dossiers a year of between forty and ninety pages and writes the queries that come out of them, eleven last year to four manufacturers and two recall notices, and that she cannot follow a conference talk without the slides, which she found out in Beirut in 2022. Mrs Khoury said that is the cycle done in two sentences, documents, a volume and a limit and no label anywhere, and the room should notice what the volume does, because thirty-one dossiers is a fact a reader can weigh where I read a lot of technical material can be written by somebody who reads none. Mrs Oueidat said she has no certificate at all: fourteen years of interpreting in court and no examination since 2009, and what she has instead is a list of about four hundred sittings, two hundred and seventy of them criminal, and the certificates of accuracy she signs. Mr Attar asked whether a certificate would help her, and it would help a reader who does not know what a court interpreter does and would tell them less than one sitting would, and she is not against the number. Dr Qabbani asked about years of study, and Mrs Khoury said years of study measure the teaching and not the English, and six of ten in the room offered them. Mrs Tarabishi said hers is almost all reading, four hundred papers for the literature review and sixty in the last year and one conference abstract, which is a lopsided description and is hers, and the lopsidedness is the useful part because it tells a supervisor what to give her. Mr Shihabi asked whether a limit does not harm you, and Mrs Khoury said a limit named is the thing that makes the rest believable, because a description with no limit reads as a claim. Mr Tayara asked where the level goes, and last, if at all, and in a line of its own. Mrs Rizk asked how you know the description is any good, and Mrs Oueidat gave the test: would every sentence still be true if the certificate were withdrawn tomorrow. And Mrs Ajouz said the thing she will take away is that nobody in fourteen months of preparation had asked her a single question about what she actually does in English, including herself, because Mrs Tarabishi had asked her how long one dossier takes and it is about two hours for ninety pages with the monograph open beside it, which she had never timed._'));
out.push(p('**Listener task:** write your partner\'s volume, their limit, and the sentence a reader would act on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Ajouz\'s description. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _what my English is_ · _written with no level in it, as an exercise_ · **8 September**',
  '**What I read in it.** **Thirty-one product dossiers last year, of between forty and ninety pages each.** ⚠ **Two pharmacopoeia monographs a month, which are the hardest reading I do and the shortest.** **And the correspondence of four manufacturers, which is about nine letters a month and is written by people whose English is not their first language either.**',
  '**How long a dossier takes me.** **About two hours for ninety pages, with the monograph open beside it.** ⚠ **Nobody has ever asked me that, including me, and I had to time one to find out.**',
  '**What I write in it.** **Eleven queries to manufacturers last year, of between eighty and three hundred words.** ⚠ **Two recall notices, both acted on, one of which went to forty-one pharmacies.** **And the English product names and dosage lines inside a monthly stock report that is otherwise in Arabic.**',
  '**What I have not written in it.** **Nothing in continuous prose longer than a page since 2016, apart from two examination answers.** ⚠ **That is the gap in this description and it is the gap the examination found** — **and the two things are the same gap, which I had been treating as two.**',
  '**What I do in it with people.** **Telephone calls to two representatives, about one a fortnight, and one six-minute account of a recall to the governorate inspector in English because his Arabic reader was away.** ⚠ **The six minutes went better than the fourteen months of preparation would have predicted.**',
  '**The limits, and there are three.** **I cannot follow a conference talk without the slides, which I found out in Beirut in 2022.** ⚠ **I have never written anything intended for publication.** **And I have never had to defend a document of mine in English in a room with somebody who disagreed** — **which is the whole of Book 2 and is the thing I am least able to do.**',
  '**What a reader can do with this.** **Give me a dossier and a deadline.** ⚠ **Do not give me a conference paper, and do not put me in the room in 19.6 without warning** — **and if a document of mine has to be defended, give me a fortnight and I shall be able to do it, because the course says the defence is a procedure and not a disposition.**',
  '**And the line about the file, which goes last.** **I shall sit the test again in January and the registration file needs 7.0 in writing.** ⚠ **That is a fact about a file.** **Nothing above it changes if the number arrives, and nothing above it changes if it does not** — **which is what I did not understand in June and is the only reason this page is worth writing.**',
  '**One figure I had to go and find.** **The two hours for ninety pages.** ⚠ **I have been doing it for nine years and I had never timed one, so I timed the dossier for a paediatric suspension on the ninth of this month, with a watch** — **and the room should notice that every figure on this page was either already known to me or could be found in an evening, and that the page had been impossible to write for nine years for no reason at all.**',
]));
out.push(item('1', 'What does she say about continuous prose, and why are the two gaps the same gap?'));
out.push(item('2', 'What are her three limits, and which does she call the thing she is least able to do?'));
out.push(item('3', 'What does the last line say, and why does she say the page is worth writing?'));
out.push(writers([
  'A description with no level in it: **what you read, with a volume** → **how long one unit of it takes you** → **what you write, and to whom** → **what you have not written** → **what you do with people** → **the limits** → **what a reader can do with this** → **and the line about the file, last.**',
  '⚠ **Put a volume on every line that can carry one.** _Thirty-one dossiers of forty to ninety pages; eleven queries of eighty to three hundred words._ **_A lot of technical reading_ can be written by somebody who reads none** — **and the figures were already known to the writer in every case in this class, and had never been written down.**',
  '**Include one figure you had to go and find.** ⚠ _About two hours for ninety pages, which I timed on the ninth._ **The going and finding is the part a reader can feel in the prose** — **and it is also the part that stops the description being a performance of modesty.**',
  '**Name the gap and the limits flat, and do not apologise in the same sentence.** ⚠ _Nothing in continuous prose longer than a page since 2016._ **A limit said quickly is an apology and invites reassurance** — **and reassurance destroys the description, because the reader has been asked to disagree with you about yourself.**',
  '⚠ And **put the level last, in a line of its own, as a fact about a file.** _I shall sit the test again in January and the file needs 7.0 in writing._ **Nothing above that line changes if the number arrives, and nothing above it changes if it does not** — **which is the test of whether the page above it was worth writing.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own description (120 words or more).'));
out.push(p('**What I read in it.** **______________, of ______________.** ⚠ **And ______________.**   **How long ______________ takes me.** **About ______________.**   **What I write in it.** **______________ last year, of between ______________ and ______________ words.** ⚠ **______________.**   **What I have not written in it.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A volume on every reading and writing line',
  'One figure the writer had to go and find',
  'Three limits, or at least one, stated flat',
  'No level, no years, no certificate above the last line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their limits**, and the room says whether each one is a fact or an apology.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole description (260 words or more): what you read with a volume, how long it takes, what you write and to whom, what you have not written, what you do with people, the limits, what a reader can do with this, and the line about the file, last.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a volume on every line that has one, at least one limit stated flat, and no level or year above the last line.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many descriptions named a level in the first sentence?** **Eight of ten, before the cycle, and the room should see the eight first sentences struck.** **Then: which sentence would a reader act on?** **A volume in six cases, a limit in three, and in one case nothing at all.** **Then the test: would every sentence survive the certificate being withdrawn tomorrow?**'));
out.push(hw('**Write your description and then find the three figures you do not know** — **the volume you have never counted, the length of the longest thing you have written in English, and the time one unit of your reading takes.** ⚠ **Then the harder half: give the description to somebody who works with you and ask which sentence is wrong.** **In this class six of ten were corrected on a figure, always downwards, and two were corrected upwards.** **Bring the corrected description.** **21.5 is the mapping cycle**, so bring both examinations\' published task lists if you have them.'));

// ===================== 21.5 =====================
out.push(pb());
out.push(h2('21.5  The same English, the other examination'));
out.push(p('**Function:** mapping the four C1 Advanced skills onto the other examination\'s task types   ·   **Grammar:** what transfers, what does not, and the two habits that cost marks   ·   **Pronunciation:** the word from the recording, said as it was said'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one task type from each of the two examinations, and whether you could do the other one tomorrow.** ⚠ **Tomorrow, with no preparation.** **In this class seven of ten could do most of the other paper tomorrow and every one of the ten named the same two things they could not** — **and your teacher writes the two on the board before anybody looks at a task list.**'));
out.push(board('Key word transformation. Multiple matching. Part 2 proposal.', 'True, False or Not Given. Describe the chart. The two-minute turn.'));
out.push(p('**b**  Which two have no counterpart in the other examination at all? **1** _Multiple matching across five short extracts._  **2** _Describe the figures in the chart in 150 words._  **3** _A multiple-choice interview of six questions._  **4** _A two-minute turn on a card, prepared in one minute, alone._  **5** _Sentence completion from a monologue._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the mapping shows?   **A** that the two examinations are quite different   **B** **that the English is the same English and four things do not transfer** — two tasks and two habits   **C** that one is harder'));
out.push(p('**b**  Listen again. **1** What two tasks does Mrs Khoury say have no counterpart?   **2** What are the two habits this course has built that cost marks in the other examination?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  What moves, and what does not', [
  ['Ms Huda', 'The two task lists, side by side.'],
  ['Mrs Khoury', '⚠ **And the claim of this cycle, which the room should test rather than accept: the English is the same English and the bookkeeping differs.** **Four things do not transfer** — **two tasks and two habits** — **and everything else in both papers is reading, listening, writing and speaking, which this course has been building for ninety-six units.**'],
  ['Mrs Ajouz', 'Start with the reading.'],
  ['Mrs Khoury', '⚠ **Eight parts and fifty-six questions in ninety minutes against three passages and forty questions in sixty, with no transfer time in either.** **Parts 5 to 8 move almost whole: multiple matching is matching information to paragraphs, and the cross-text part is an opinion question under another name.** **Parts 1 to 4 have no counterpart at all, and nothing in the other paper tests grammar directly.**'],
  ['Mr Attar', 'And the other way round?'],
  ['Mrs Oueidat', '⚠ **_True_, _False_ or _Not Given_, and this course has one unit of preparation for it and does not know it.** **_Not Given_ is a finding about the absence of evidence, which is 19.4** — **and a candidate who answers _False_ for _Not Given_ has concluded from silence, which is exactly what the expert statement unit spends six cycles forbidding.**'],
  ['Mrs Tarabishi', 'The writing is where I expected trouble.'],
  ['Mrs Khoury', '⚠ **And it is the one genuine non-transfer in the paper.** **The essay moves across with the two sentences from 21.2.** **Nothing in C1 Advanced asks anybody to describe a chart, and the other paper has no proposal, no report and no review** — **so the task that carries a third of the writing mark there is a task this course has never set, which has to be said plainly.**'],
  ['Dr Qabbani', 'A third?'],
  ['Mrs Ajouz', '⚠ **The essay counts twice what the chart task counts, and the chart task is one hundred and fifty words in twenty minutes.** **So the arithmetic is not frightening and the novelty is** — **and my 6.5 was in a component where one of two tasks was a thing I had done four times in my life.**'],
  ['Mrs Rizk', 'And the listening?'],
  ['Mrs Khoury', '⚠ **Thirty questions in about forty minutes against forty questions in about thirty, with ten minutes afterwards to transfer them on paper.** **The matching and the completion are the same listening.** **Labelling a plan has no counterpart here** — **and the completion items are where the first of the two habits costs marks.**'],
  ['Mrs Ajouz', 'The paraphrase.'],
  ['Mrs Khoury', '⚠ **Twenty units of this course have said: write the finding in your own words.** **A completion item wants the speaker\'s word, inside the word limit, spelled correctly** — **and a paraphrase scores nothing at all, however good it is.** **Three words where the rubric says two scores nothing either, and in this class four of ten wrote three.**'],
  ['Mr Shihabi', 'And the second habit?'],
  ['Mrs Oueidat', '⚠ **The partner.** **Fifteen minutes in pairs there, and eleven to fourteen minutes alone here, with a two-minute turn from a card and one minute to prepare it.** **Inviting the other person\'s view earns marks in a pair and gets a courteous nothing from an examiner** — **and the turn is the task nobody transferring practises, because there is nothing to practise it against.**'],
  ['Mr Tayara', 'So the course has taught her two bad habits.'],
  ['Mrs Khoury', '⚠ **It has taught her two good habits that are wrong in one room, which is not the same thing and the distinction matters.** **Paraphrase is right everywhere except in a completion item.** **Inviting a colleague is right everywhere except in a monologue** — **and both can be switched off in a sentence, which is why the cycle is a cycle and not a unit.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the validity.** **One certificate does not expire and the other is usually accepted for two years** — **and my first 6.5 is fourteen months old, which means the board has been refusing my file on a number that will not exist in ten months, and nobody including me had looked at the date.**'],
]));
out.push(sp());
out.push(box('Language box – the mapping, and the four things that do not transfer', [
  '**Reading.** ⚠ **Eight parts, fifty-six questions, ninety minutes against three passages, forty questions, sixty.** **Parts 5 to 8 move almost whole** — **multiple matching is matching information to paragraphs, and the cross-text part is an opinion question renamed.** **Parts 1 to 4 have no counterpart, and nothing there tests grammar directly.**',
  '**And the item this course does not teach: _True_, _False_ or _Not Given_.** ⚠ **_Not Given_ is a finding about the absence of evidence, which is 19.4 under another name** — **and answering _False_ for _Not Given_ is concluding from silence.**',
  '**Writing: one task moves and one does not.** ⚠ **The essay crosses with the two sentences from 21.2.** **The data description has no counterpart here and the proposal, report and review have none there** — **and the data task carries a third of that writing mark, because the essay counts twice.**',
  '**Listening: the same listening, two pieces of bookkeeping.** ⚠ **Forty questions in about thirty minutes with ten minutes afterwards to transfer them.** **Labelling a plan has no counterpart here** — **and the completion items are decided by the word limit and by spelling.**',
  '**Habit one, and this course built it: the paraphrase.** ⚠ **Write the finding in your own words is right everywhere except in a completion item, which wants the speaker\'s word, inside the limit, spelled as it was said** — **and a paraphrase scores nothing, however good.**',
  '**Habit two, and this course built it as well: the partner.** ⚠ **Fifteen minutes in pairs there; eleven to fourteen alone here, with a two-minute turn from a card and one minute to prepare.** **Inviting the other person\'s view earns marks in a pair and gets a courteous nothing from an examiner.**',
  '**And the bookkeeping nobody checks: validity.** ⚠ **One certificate does not expire; the other is usually accepted for two years** — **so a component mark fourteen months old has ten months left, which changes what a plan should be about.**',
  '**Pronunciation.** 🔊 **Track 21.10** **Say the completion answer as the speaker said it, with the same word and the same stress, and do not improve it.** ⚠ **The habit of rephrasing shows in the voice before it shows on the page** — **and a candidate who can hear themselves improving a word can stop doing it in about a minute.**',
  '**Practise:** Moves, or does not? **1** multiple matching  **2** the data description  **3** sentence completion  **4** the collaborative task  **5** _Not Given_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the task type from the card. B names **its counterpart in the other examination**, or says **that it has none** — and where it has one, names **the one piece of bookkeeping that differs.** ⚠ **Two rows on each card have no counterpart at all.** Change cards.'));
out.push(table(['Card A – the task type', 'Card B – the task type'], [
  ['_Multiple matching across five short extracts._', '_Multiple choice on three short extracts._'],
  ['_⚠ Key word transformation, six items._', '_⚠ Describe the figures in the chart, 150 words._'],
  ['_Sentence completion from a monologue._', '_The compulsory essay from two given points._'],
  ['_⚠ The collaborative task, in pairs._', '_⚠ The two-minute turn from a card, alone._'],
  ['_A gapped text with six paragraphs to replace._', '_True, False or Not Given._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the counterpart, or none, and the bookkeeping. ⚠ **Rows 2 and 4 on both cards have no counterpart**: the transformation, the data description, the collaborative task and the two-minute turn, **and those four are the whole of the non-transfer.** **Rows 5 are the pair that matter**: the gapped text has a cousin and no twin, **and _Not Given_ is 19.4 in an examination room, which the room should be made to say in those words.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the paper you must sit** and write **the mapping for one skill only**: the task types, the counterpart or none, and the bookkeeping that differs. ⚠ **Then name the habit of yours that will cost marks there.** **In this class every student named the paraphrase and six named the partner** — **and two found a third habit of their own, which is the useful part and both were about timing.**'));
out.push(p('**b**  Swap. Your partner reads **your mapping** and asks **which of the non-transfers you have actually practised.** ⚠ **Then the harder question: how many times have you done the task that has no counterpart?** — **and in this class the answers were four, two, one and none, against ninety hours of vocabulary.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury put the two task lists side by side and said the claim of the cycle is that the English is the same English and the bookkeeping differs: four things do not transfer, two tasks and two habits, and everything else in both papers is reading, listening, writing and speaking. On the reading, eight parts and fifty-six questions in ninety minutes against three passages and forty questions in sixty, with parts five to eight moving across almost whole, because multiple matching is matching information to paragraphs and the cross-text part is an opinion question under another name, while parts one to four have no counterpart at all. Mr Attar asked about the other direction, and Mrs Oueidat said True, False or Not Given, and that this course has one unit of preparation for it and does not know it, because Not Given is a finding about the absence of evidence, which is 19.4, and answering False for Not Given is concluding from silence. Mrs Tarabishi said the writing is where she expected trouble, and Mrs Khoury said it is the one genuine non-transfer: the essay moves across with the two sentences from 21.2, and nothing in C1 Advanced asks anybody to describe a chart, while the other paper has no proposal, no report and no review. Dr Qabbani asked about the third, and Mrs Ajouz said the essay counts twice what the chart task counts and the chart task is a hundred and fifty words in twenty minutes, so the arithmetic is not frightening and the novelty is. Mrs Rizk asked about the listening, and thirty questions in about forty minutes against forty in about thirty with ten minutes afterwards to transfer them, and labelling a plan has no counterpart here. Mrs Ajouz named the first habit, the paraphrase, and Mrs Khoury said a completion item wants the speaker\'s word inside the word limit and spelled correctly, and a paraphrase scores nothing however good, and four of ten in the class wrote three words where the rubric said two. Mr Shihabi asked about the second habit, and Mrs Oueidat said the partner: fifteen minutes in pairs there and eleven to fourteen alone here, with a two-minute turn from a card, and inviting the other person\'s view gets a courteous nothing from an examiner. Mr Tayara said so the course has taught her two bad habits, and Mrs Khoury said it has taught her two good habits that are wrong in one room, which is not the same thing, and both can be switched off in a sentence. And Mrs Ajouz said the thing she will take away is the validity: one certificate does not expire and the other is usually accepted for two years, and her first 6.5 is fourteen months old._'));
out.push(p('**Listener task:** write one counterpart, one non-transfer, and the habit your partner must switch off.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Ajouz\'s mapping note. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _the two papers, mapped_ · _written for myself and then given to the class_ · **15 September**',
  '**What I set out to find.** **Whether fourteen months of this course had prepared me for the paper my file actually needs.** ⚠ **The answer is that it had prepared me for all of it except four things, and that nobody had told me which four, including the preparation book I bought.**',
  '**Reading.** **Eight parts and fifty-six questions in ninety minutes, against three passages and forty questions in sixty.** ⚠ **The last four parts move across almost whole, and I had been treating them as different tasks because they have different names.** **The first four parts have no counterpart anywhere in the other paper.**',
  '**The item I have no preparation for.** **_True_, _False_ or _Not Given_.** ⚠ **It is 19.4: a finding about the absence of evidence, and answering _False_ where the passage is silent is concluding from silence, which this course spends an entire unit forbidding.** **I have been doing it since 2019 and calling it carelessness.**',
  '**Writing, and this is the one that matters to me.** **The essay crosses with two sentences, as 21.2 showed.** ⚠ **The data description has no counterpart in the course at all** — **a hundred and fifty words in twenty minutes about a chart, carrying a third of the component, and I have attempted four in my life.** **That is where my 6.5 lives and I had never looked.**',
  '**Listening.** **The same listening with two pieces of bookkeeping.** ⚠ **Forty questions in about thirty minutes, ten minutes afterwards to copy them onto the sheet, a word limit on every completion item, and spelling counted.** **Labelling a plan is a task I have never done.**',
  '**The first habit, which this course gave me.** **Write the finding in your own words.** ⚠ **A completion item wants the speaker\'s word, inside the limit, spelled as it was said** — **and my own words score nothing there, however accurate.** **I wrote three words for a two-word limit twice in the practice set.**',
  '**The second habit, which this course also gave me.** **Bring the other person in.** ⚠ **_What do you make of that?_ earns marks in a pair and gets a courteous nothing from an examiner** — **and the two-minute turn, alone, from a card, with one minute to prepare, is the task I have practised least and that no part of this course resembles.**',
  '**The bookkeeping nobody had checked.** **My first 6.5 is fourteen months old and that mark is usually accepted for two years.** ⚠ **So the board has been refusing my file on a number with ten months left in it** — **and the plan has to be a date and not an effort, which is 20.4 pointed at myself.**',
  '**And what the mapping is not.** **It is not a claim that the two examinations are the same examination.** ⚠ **One is fifteen minutes in pairs with four papers on a scale that does not expire; the other is alone, in three parts, on a scale that is usually read for two years** — **and a candidate who treats them as interchangeable will be surprised twice.** **The claim is narrower and it is the only one I can prove from my own two attempts: the English did not have to change, and four things did.**',
]));
out.push(item('1', 'Which four things does she say the course had not prepared her for?'));
out.push(item('2', 'What does she say she has been doing since 2019 and calling carelessness?'));
out.push(item('3', 'What had nobody checked, and what does it change about her plan?'));
out.push(writers([
  'A mapping note: **what you set out to find** → **each skill, with the figures for both papers** → **what moves across, named as the same task** → **what has no counterpart, named as none** → **the item you have no preparation for** → **the habits that will cost you marks** → **and the bookkeeping nobody had checked.**',
  '⚠ **Give both papers\' figures on every line.** _Fifty-six questions in ninety minutes against forty in sixty, with no transfer time in either._ **The figures are what turn a comparison into a mapping** — **and a note without them is an impression about two examinations the writer has sat once each.**',
  '**Name what has no counterpart as none, and count your attempts at it.** ⚠ _A hundred and fifty words in twenty minutes about a chart, carrying a third of the component, and I have attempted four in my life._ **That sentence is the whole value of the exercise** — **and it is available to anybody who reads the task list beside their own history.**',
  '**Name the habit and the cycle that built it.** ⚠ _Write the finding in your own words is right everywhere except in a completion item._ **A note that calls it a bad habit is wrong and will be resisted** — **and a note that says a good habit is wrong in one room will be acted on, because it does not ask the writer to unlearn anything.**',
  '⚠ And **check the bookkeeping nobody checks.** _My first component mark is fourteen months old and that mark is usually accepted for two years._ **Validity, transfer time, word limits, weighting** — **four things that are published, that nobody reads, and that between them decide more than any amount of preparation.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mapping for one skill (120 words or more).'));
out.push(p('**______________.** **______________ questions in ______________ minutes, against ______________.** ⚠ **______________ moves across almost whole.** **______________ has no counterpart.**   **The item I have no preparation for.** **______________.** ⚠ **It is ______________ under another name.**   **The habit that will cost me marks.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Figures for both papers: items, minutes, transfer time',
  'What moves across named as the same task',
  'What has no counterpart, named as none',
  'One habit of your own, with the cycle that built it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the non-transfers**, and the room counts how many times each has attempted them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole mapping (260 words or more): what you set out to find, the four skills with figures, the item you have no preparation for, the task with no counterpart, the two habits, and the bookkeeping nobody had checked.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: figures for both papers, every non-transfer named as none, and no sentence claiming either examination is the harder.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many times has each student attempted the task with no counterpart?** **Four, two, one and none** — **against ninety hours of vocabulary, and the comparison should be left on the board for the rest of the unit.** **Then: which habit will cost you marks?** **Ten named the paraphrase, six the partner, and two found a third of their own, both about timing.** **Then the validity, and the date.**'));
out.push(hw('**Attempt the task that has no counterpart, once, under time** — **the data description, or the two-minute turn, recorded.** ⚠ **Then the harder half: mark it against the published descriptors, as in 21.3, and name the first gap.** **In this class eight of ten attempted it and seven said the attempt was less frightening than the fortnight of not attempting it had been.** **Bring the attempt and the first gap.** **21.6 writes the page for an admissions reader**, so bring your description from 21.4.'));

// ===================== 21.6 =====================
out.push(pb());
out.push(h2('21.6  The page for the reader who has eighty files'));
out.push(p('**Function:** writing the page that explains your own English to an admissions reader   ·   **Grammar:** 260–300 words, ordered by the reader\'s decision   ·   **Pronunciation:** the last line read as bookkeeping'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **who reads your page, how many they read, and how long they spend on each.** ⚠ **If you do not know, say so** — **and in this class nine of ten did not know, and Mrs Tarabishi did, because she had telephoned the admissions office and asked, which took her four minutes and is the only research anybody in the room had done.**'));
out.push(board('Four pages about my English.', 'Four minutes, eightieth of eighty files.'));
out.push(p('**b**  Which two first sentences are for a reader with four minutes? **1** _I have always had a passion for languages._  **2** _This page is the evidence of professional English required by paragraph 4 of the advertisement; the three items are below._  **3** _I would like to explain a little about my background._  **4** _I am applying for the drug-information post and read thirty-one product dossiers a year in English; the queries and the two recall notices are at the annexe._  **5** _I hope you will consider my application favourably._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the page is ordered by?   **A** the writer\'s history   **B** **the decision the reader has to take**, with the evidence under it   **C** the strength of the feeling'));
out.push(p('**b**  Listen again. **1** What did Mrs Tarabishi find out by telephoning?   **2** Where does Mrs Khoury say the level goes, and why there?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  Four minutes, and eighty files', [
  ['Ms Huda', 'Mrs Tarabishi telephoned the admissions office.'],
  ['Mrs Tarabishi', '⚠ **Four minutes a file and about eighty files in a fortnight, and the reader is one person with a list of three things to find.** **I asked what the three were and she told me** — **and the whole conversation took four minutes, and I had spent five weeks on the application before making it.**'],
  ['Mrs Khoury', 'What were the three?'],
  ['Mrs Tarabishi', '⚠ **That the English is good enough for the supervision to happen in it, that somebody has read something of mine in English, and that there is a number on file if the faculty is ever asked.** **In that order, and the number is third** — **and I had built the whole page around the number, which is the one of the three she looks at last.**'],
  ['Mr Attar', 'So the page is reordered.'],
  ['Mrs Khoury', '⚠ **The page is ordered by the decision the reader has to take, and that is the whole cycle.** **Her reader has to decide whether supervision can happen in English** — **so the first sentence names the decision and the evidence sits under it, and the writer\'s history, which is interesting, goes nowhere at all.**'],
  ['Mrs Ajouz', 'Mine is a post and not a faculty.'],
  ['Mrs Ajouz', '⚠ **The advertisement says _evidence of professional English_ at paragraph 4, and the certificate is one admissible item of several, which I had not read properly until this week.** **So my first sentence names the paragraph** — **and the three items are the dossiers, the eleven queries and the two recall notices, with the number nowhere above the last line.**'],
  ['Mrs Oueidat', 'And the reader believes the figures?'],
  ['Mrs Khoury', '⚠ **A reader believes a figure that can be checked and discounts one that cannot, and the difference is whether you name where it comes from.** **_Thirty-one dossiers_ is a claim.** **_Thirty-one dossiers, of which the 2024 list is at annexe 2_ is evidence** — **and the annexe will not be opened, which is not the point: it is there so that the figure can be opened.**'],
  ['Dr Qabbani', 'Does the page ask for anything?'],
  ['Mrs Oueidat', '⚠ **Nothing, and this is where the room will reach for a request.** **A page that ends _I hope you will consider my application favourably_ has asked the reader to form an impression** — **and a reader with four minutes does not form impressions, she finds items and ticks them.**'],
  ['Mr Shihabi', 'Where does the level go?'],
  ['Mrs Khoury', '⚠ **Last, in a line of its own, as bookkeeping.** **_The most recent components are 7.5, 7.0, 7.0 and 6.5, dated June; I shall sit the writing component again in January._** **It goes last because a reader who finds a number first stops reading** — **and everything above it is the part only you can supply.**'],
  ['Mr Tayara', 'That is a strange place for it.'],
  ['Mrs Khoury', '⚠ **It is the only honest place for it, and 21.7 is about what happens when it is not there at all.** **A page that hides the number is a page that will be read twice and trusted once** — **and a page that opens with it has handed the reader the one line that makes the other three hundred words unnecessary.**'],
  ['Mrs Rizk', 'And the limit from 21.4?'],
  ['Mrs Tarabishi', '⚠ **One of them, and the one the reader would otherwise find out in the first month.** **Mine is that I have written one abstract and no English prose longer than a page since 2021** — **and my supervisor will discover that in week three, so there is nothing to be gained by his discovering it then rather than now.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the four minutes.** **I have written four versions of this page and every one of them was built for a reader who would read all of it carefully, which is a reader who does not exist** — **and the version I shall send has the three items in the first eighty words and could be read standing up.**'],
]));
out.push(sp());
out.push(box('Language box – the page for a reader with four minutes', [
  '**Find out who reads it, how many they read, and how long they spend.** ⚠ **Four minutes a file, eighty files in a fortnight, three things to find** — **and the way to know is to telephone and ask, which took one student in this class four minutes.**',
  '**Order the page by the decision the reader has to take.** ⚠ **_This page is the evidence of professional English required by paragraph 4 of the advertisement; the three items are below._** **Your history is interesting and goes nowhere** — **and the three items go in the first eighty words.**',
  '**Name where each figure comes from.** ⚠ **_Thirty-one dossiers_ is a claim; _thirty-one dossiers, of which the 2024 list is at annexe 2_ is evidence.** **The annexe will not be opened** — **and it is there so that the figure can be.**',
  '**Ask for nothing.** ⚠ **A page ending _I hope you will consider my application favourably_ has asked for an impression** — **and a reader with four minutes does not form impressions: she finds items and ticks them.**',
  '**One limit, and it is the one the reader would find out in the first month anyway.** ⚠ **_One abstract and no English prose longer than a page since 2021._** **There is nothing to be gained by a supervisor discovering that in week three rather than now.**',
  '**And the level goes last, in a line of its own, as bookkeeping.** ⚠ **_The most recent components are 7.5, 7.0, 7.0 and 6.5, dated June; I shall sit the writing component again in January._** **A reader who finds a number first stops reading** — **and everything above it is the part only you can supply.**',
  '**Pronunciation.** 🔊 **Track 21.12** **Read the last line as bookkeeping: flat, quick, with no stress on the figures and no pause before it.** ⚠ **A pause before the number tells the listener that the number is the point** — **and the page has spent three hundred words establishing that it is not.**',
  '**Practise:** First sentence, for four minutes. **1** a faculty · supervision in English  **2** a post · evidence at paragraph 4  **3** a registration file · a component mark  **4** the limit, placed  **5** the last line, as bookkeeping',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the first sentence from the card. B says **whether a reader with four minutes can use it**, and rewrites it so that it **names the decision and points at the evidence.** ⚠ **Two rows on each card are usable already** — **and there B names the decision the sentence is built on.** Change cards.'));
out.push(table(['Card A – the first sentence as written', 'Card B – the first sentence as written'], [
  ['_I have always had a passion for languages._', '_I would like to explain a little about my background._'],
  ['_⚠ This page is the evidence required by paragraph 4._', '_⚠ I am applying for the drug-information post and read thirty-one dossiers a year._'],
  ['_My English has improved a great deal recently._', '_I attach my certificates and transcripts._'],
  ['_⚠ Supervision can happen in English and three people have read my work in it._', '_⚠ Four hundred court sittings, and the certificates of accuracy are at annexe 1._'],
  ['_I hope you will consider my application favourably._', '_My overall band is 7.0._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** usable or not, and the decision it names. ⚠ **Rows 2 and 4 on both cards are usable and the room must say which decision each is built on** — **two are about a requirement and two are about whether the work can happen in English.** **Rows 5 are the pair the cycle turns on**: one asks for an impression and one opens with the number, **and both have the same effect, which is that nothing after them is read.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your description from 21.4** and turn it into **the page**: the decision in the first sentence, three items with their sources, one limit, and the level last. ⚠ **260 to 300 words, and count them.** **In this class the descriptions averaged four hundred and ten words and the pages averaged two hundred and eighty** — **and what came out was almost entirely the writer\'s history, which nobody missed.**'));
out.push(p('**b**  Swap. Your partner reads **your page for exactly four minutes by the clock** and then says **the three items from memory.** ⚠ **Then the harder question: did they find the number before they found the items?** — **and in this class two pages failed on that alone, and both had the number in the second paragraph.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi telephoned the admissions office and was told that the reader spends four minutes a file and reads about eighty in a fortnight, and that she is one person with a list of three things to find, and the whole conversation took four minutes after five weeks of work on the application. Mrs Khoury asked what the three were, and that the English is good enough for the supervision to happen in it, that somebody has read something of hers in English, and that there is a number on file if the faculty is ever asked, in that order, with the number third, and she had built the whole page around the number. Mr Attar said so the page is reordered, and Mrs Khoury said the page is ordered by the decision the reader has to take, which is the whole cycle, so the first sentence names the decision and the evidence sits under it and the writer\'s history goes nowhere at all. Mrs Ajouz said hers is a post and not a faculty, and the advertisement says evidence of professional English at paragraph 4 and the certificate is one admissible item of several, which she had not read properly until this week, so her first sentence names the paragraph and the three items are the dossiers, the eleven queries and the two recall notices. Mrs Oueidat asked whether the reader believes the figures, and Mrs Khoury said a reader believes a figure that can be checked and discounts one that cannot, so thirty-one dossiers is a claim and thirty-one dossiers with the list at annexe 2 is evidence, and the annexe will not be opened, which is not the point. Dr Qabbani asked whether the page asks for anything, and Mrs Oueidat said nothing, because a page that ends by hoping for favourable consideration has asked the reader to form an impression, and a reader with four minutes finds items and ticks them. Mr Shihabi asked where the level goes, and last, in a line of its own, as bookkeeping, because a reader who finds a number first stops reading. Mr Tayara said that is a strange place for it, and Mrs Khoury said it is the only honest place for it. Mrs Rizk asked about the limit from 21.4, and one of them, the one the reader would find out in the first month anyway. And Mrs Ajouz said the thing she will take away is the four minutes, because her four earlier versions were built for a reader who does not exist._'));
out.push(p('**Listener task:** write your partner\'s first sentence, their three items, and where the level sits.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mrs Ajouz is sending with her application. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _page 3 of the application for the drug-information post_ · _evidence of professional English, paragraph 4_ · **22 September**',
  '**What this page is.** **The evidence of professional English required by paragraph 4 of the advertisement.** ⚠ **Three items, each with its source, and a note on one limit.** **The certificate position is in the last line.**',
  '**Item one: what I read in English, and how much.** **Thirty-one manufacturers\' product dossiers in the year to June, of between forty and ninety pages each, and two pharmacopoeia monographs a month.** ⚠ **The dossier list with dates is at annexe 2.** **A ninety-page dossier takes me about two hours with the monograph open beside it.**',
  '**Item two: what I write in English, and who has read it.** **Eleven queries to four manufacturers in the same year, of between eighty and three hundred words, all answered.** ⚠ **Two recall notices, one of which went to forty-one pharmacies and was acted on in nine days.** **Both notices are at annexe 3, and the governorate inspector has read the second.**',
  '**Item three: what I do in English with people.** **A call a fortnight to two representatives.** ⚠ **And a six-minute account of the second recall, given in English to the governorate inspector in March because his Arabic reader was absent** — **his note of the meeting is at annexe 4 and names me.**',
  '**The limit, which you would find in my first month.** **I have written nothing in continuous English prose longer than a page since 2016.** ⚠ **If the post requires a monthly bulletin, that is the part I shall be slow at for a term** — **and the queries at annexe 3 are the longest continuous English I have written in eight years.**',
  '**What I am not offering.** **Conference English.** ⚠ **I cannot follow a talk without the slides, which I found out in Beirut in 2022, and I have not needed it since** — **and the post as advertised does not appear to require it.**',
  '**What a reader can do with this page.** **Open annexe 3 and read nine hundred words of my English about a product I had to recall.** ⚠ **It is the hardest thing I have written in English and it was written in one evening under pressure, which is the condition the post is advertised for.**',
  '**And the certificate position.** **The most recent components are 7.5 reading, 7.0 listening, 7.0 speaking and 6.5 writing, dated June, and the writing component is the only one below the registration figure.** ⚠ **I sit it again in January.**',
  '**What is not on this page, and why.** **Twelve years of courses, two preparation books and the ninety hours.** ⚠ **None of it is evidence of anything a reader of this post has to decide** — **and a page that lists preparation has told its reader how hard the writer has worked, which is the one thing a chief pharmacist with forty files on a Thursday has no use for.** **The annexes are four pages in total and the page itself is under three hundred words.**',
]));
out.push(item('1', 'What are the three items, and what source does each one carry?'));
out.push(item('2', 'What limit does she name, and why does she say she is naming it?'));
out.push(item('3', 'What does she say a reader can do with the page, and what is in annexe 3?'));
out.push(writers([
  'The page for a reader with four minutes: **what the page is, and which requirement it answers** → **three items, each with its source** → **the limit they would find anyway** → **what you are not offering** → **what a reader can do with the page** → **and the certificate position, last.**',
  '⚠ **Name the requirement by paragraph in the first sentence.** _The evidence of professional English required by paragraph 4 of the advertisement._ **A page that opens on the writer has asked for four of the reader\'s four minutes** — **and a page that opens on the requirement has told them which box it fills before they have sat down.**',
  '**Put a source beside every figure.** ⚠ _Thirty-one dossiers, of which the 2024 list is at annexe 2._ **The annexe will not be opened** — **and it is there so that the figure can be, which is the difference between a claim and evidence and costs five words.**',
  '**Ask for nothing anywhere on the page.** ⚠ **No favourable consideration, no hope, no thanking in advance.** **A reader with four minutes does not form impressions: she finds items and ticks them** — **and a request is the one thing on the page she cannot tick.**',
  '⚠ And **put the certificate position in the last line and name what you will do about it.** _The components are 7.5, 7.0, 7.0 and 6.5, dated June; I sit the writing again in January._ **A page that hides the number will be read twice and trusted once** — **and a page that opens with it has handed over the one line that makes the other three hundred words unnecessary.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your page (120 words or more).'));
out.push(p('**What this page is.** **The evidence of ______________ required by ______________.** ⚠ **______________ items, each with its source.**   **Item one: what I read in English, and how much.** **______________, of ______________.** ⚠ **The ______________ is at annexe ______________.**   **Item two: what I write in English, and who has read it.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision named in the first sentence',
  'A source beside every figure',
  'One limit, the one the reader would find anyway',
  'The level in the last line and nowhere else',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says what decision it is built on.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260–300 words, counted): what the page is, three items with sources, the limit, what you are not offering, what a reader can do with it, and the certificate position, last.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: between 260 and 300 words counted, a source beside every figure, and no level above the last line.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **Descriptions against pages: four hundred and ten words against two hundred and eighty** — **and the room should say what came out, which was almost entirely the writer\'s history and which nobody missed.** **Then: after four minutes by the clock, how many readers could name the three items?** **Seven of ten, and the three failures all had the number in the second paragraph.** **Then the four minutes and the eighty files.**'));
out.push(hw('**Send the page, or give it to the person who will read your file** — **and if you cannot send it, telephone the office and ask the three questions Mrs Tarabishi asked.** ⚠ **Then the harder half: ask them which of your three items they would open.** **In this class four students telephoned, three were told something they had not known, and one was told that the certificate is the only admissible item, which is 21.7 and is where the unit ends.** **Bring what you were told.** **21.7 is a score, a document, and a reader who trusts the wrong one.**'));

// ===================== 21.7 =====================
out.push(pb());
out.push(h2('21.7  Review & Mediate: a score, a document, and a reader who trusts the wrong one'));
out.push(p('**Function:** mediating between a score, a document, and a reader who trusts the wrong one   ·   **Recycling:** Unit 21   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 6 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The four criteria are weighted the same, not one more than other.  **2** If I would have known which criterion it was, I would not have spent ninety hours.  **3** The descriptors are published since fourteen months.  **4** Nothing in the course asks to anybody to describe a chart.  **5** A paraphrase scores nothing, how good it is.  **6** The mark is usually accepted during two years.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE FILE, FOUR ACCOUNTS** _(the registration file refused in July; the schedule of admissible evidence of 2021)_',
  '**Mrs Ajouz.** _"The board refused the file on one component. I have the dossier list, eleven queries and two recall notices, and nobody has asked for any of them."_',
  '**The registration clerk.** _"The requirement is 7.0 in each component. I cannot waive it and I have never been asked to look at a document, because the list I work from does not mention documents."_',
  '**The chief pharmacist who has read annexe 3.** _"I have read nine hundred words of her English about a recall she handled in one evening. My opinion is not admissible anywhere."_',
  '**The board\'s own schedule of admissible evidence, which nobody in this story has read.** _"Item 6: professional documentation endorsed by a registered superintendent."_ **Added in 2021 and never used.**',
  '⚠ **All four are accurate.** **The rule admits documents and the one-page summary the clerk works from does not mention them** — **and the clerk is applying the rule she was given, which is 18.4 arriving in Mrs Ajouz\'s own file.**',
  '**And the thing none of the three has noticed.** **Her first component mark is fourteen months old and that mark is usually accepted for two years** — **so the number the board has been refusing her on has about ten months left in it, and no part of the plan had a date in it.**',
  '**The question for the cycle.** _What do you write, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  Item 6, and the sentence that must not be written', [
  ['Ms Huda', 'Who gets a letter?'],
  ['Mrs Khoury', '⚠ **Three letters and a date, and one of the four is not about her file at all.** **A letter to the clerk citing item 6 by number.** **A request to the superintendent for the endorsement item 6 requires, in item 6\'s own words.** **A note to whoever maintains the one-page summary.** **And the January date, which stands whatever the other three do.**'],
  ['Mrs Ajouz', 'And what must not be said is that the board does not understand what the score measures.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is true, which is the difficulty of this unit in one sentence.** **Nobody at that board has read the descriptors and the clerk has never seen a script** — **and a letter that says so tells a roomful of people they are ignorant while asking them to apply a rule in your favour, which is 20.6 with the concession removed.**'],
  ['Mrs Oueidat', 'Is anybody at fault?'],
  ['Mr Attar', '⚠ **Nobody, and this is the ninth time in Book 2.** **The clerk applies the list she was given.** **The pharmacist has read the best evidence in the file and has no standing.** **The board wrote item 6 in 2021 and then summarised itself on one page without it** — **and Mrs Ajouz spent fourteen months and ninety hours on the only route the summary mentions.**'],
  ['Dr Qabbani', 'So the letter to the clerk is the whole repair.'],
  ['Mrs Ajouz', '⚠ **It is one of four and it is the only one that can produce a registration this year, which is not the same as being the repair.** **_The schedule of admissible evidence at item 6 admits professional documentation endorsed by a registered superintendent; the endorsement and the documents are enclosed._** **One sentence, a number, and nothing about the summary.**'],
  ['Mrs Tarabishi', 'Why nothing about the summary?'],
  ['Mrs Khoury', '⚠ **Because the clerk did not write it and cannot change it, which is 18.5.** **A letter that tells her her working list is defective has given her a problem she has no power over** — **and the note about the summary goes to whoever maintains it, in a different document, and will not help this file.**'],
  ['Mr Shihabi', 'And the January date?'],
  ['Mrs Ajouz', '⚠ **It stands whatever happens to item 6, and I had not seen why until this cycle.** **Item 6 depends on somebody reading a document, and the number depends on nobody reading anything** — **and after six cycles of this unit I am not going to build a plan that needs a reader with four minutes to open an annexe.**'],
  ['Mrs Rizk', 'That is 20.4.'],
  ['Mrs Khoury', '⚠ **It is 20.4 pointed at herself: a plan with a date, a figure and a name, and the name is hers.** **The three letters are the alternative with a date, and the January test is the thing she can deliver alone** — **and a candidate who has both is in a different position from one who has either.**'],
  ['Mr Tayara', 'What does the superintendent write?'],
  ['Mrs Oueidat', '⚠ **What item 6 asks for and not what he feels, which is the hardest instruction in the cycle.** **_I have read the recall notice of 14 March, which is nine hundred words of the applicant\'s own English, and I endorse it as professional documentation under item 6._** **No adjectives about her ability** — **because the schedule does not admit opinions and a sentence of praise would make the endorsement inadmissible.**'],
  ['Mrs Oueidat', 'And if item 6 is refused anyway?'],
  ['Mrs Khoury', '⚠ **Then it is refused by a named person under a numbered item, which is a different position from the one she is in now.** **A refusal of a cited rule tells you the rule has been read and gives you something to answer** — **where a file refused on a component mark has nobody in it, which is 20.1 from the other side of the desk and is why she has had nothing to reply to for four months.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that item 6 has been there since 2021 and has never once been used.** **Four pages of descriptors I never put beside a sentence, and one line of a schedule nobody has ever cited** — **and both documents were free, public and available throughout, which is the whole of what this unit has taught me and it is not about English at all.**'],
]));
out.push(sp());
out.push(box('Language box – the score, the document, and the reader', [
  '**A reader trusts the document their working list mentions, and that list is not always the rule.** ⚠ **Item 6 of the schedule admits professional documentation endorsed by a superintendent; the one-page summary the clerk works from does not mention documents** — **and she is applying the rule she was given, which is 18.4.**',
  '**So cite the rule by number, to the person who applies it.** ⚠ _The schedule of admissible evidence at item 6 admits professional documentation endorsed by a registered superintendent; the endorsement and the documents are enclosed._ **One sentence, a number, and nothing about the summary.**',
  '**Say nothing to that person about the defect in their working list.** ⚠ **They did not write it and cannot change it, which is 18.5** — **and the note about the summary goes to whoever maintains it, in a different document, and will not help this file.**',
  '**What must not be said: that the reader does not understand what the score measures.** ⚠ **It is true — nobody there has read the descriptors** — **and it tells a roomful of people they are ignorant while asking them to apply a rule in your favour.**',
  '**The endorsement must say what the rule asks for and not what its writer feels.** ⚠ _I have read the recall notice of 14 March, which is nine hundred words of the applicant\'s own English, and I endorse it as professional documentation under item 6._ **No adjectives about ability** — **because a schedule that admits documents does not admit opinions.**',
  '**And keep the route that depends on nobody\'s reading.** ⚠ **The document route needs a reader with four minutes to open an annexe; the number route needs nothing of anybody** — **so the January date stands whatever item 6 does, which is 20.4 pointed at yourself.**',
  '**Pronunciation.** 🔊 **Track 21.14** **Say _at item 6_ with the stress on the number and no stress on _item_.** ⚠ **A number said flat and precisely is a citation, and a clerk can check it in one movement** — **where the same sentence said with emphasis on the admission becomes an argument, and an argument has to be won before the file moves.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **the document nobody has read**, gives **the letters and the date**, and names **what must not be said.** ⚠ **On one of the two cards no document is missing at all**, and B must find that and say what went wrong instead. Change roles with the other pair.'));
out.push(table(['Pair A – the file and the schedule', 'Pair B – the file and the faculty'], [
  ['_The applicant: "refused on one component."_', '_The applicant: "my page had everything in it."_'],
  ['_The clerk: "my list does not mention documents."_', '_The reader: "I set it aside as incomplete."_'],
  ['_⚠ The superintendent: "my opinion is not admissible."_', '_⚠ The reader: "I needed a number and there was not one."_'],
  ['_⚠ Item 6 of the schedule, never used since 2021._', '_⚠ Nothing missing: the evidence was all there._'],
  ['_⚠ Missing: the rule, cited by number._', '_⚠ Missing: nothing. The bookkeeping line was left out._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the document, the letters, the date, and what must not be said. ⚠ **On Pair B nothing is missing and the room will keep looking** — **and the finding is that the page carried the evidence and no number, so a reader with four minutes set it aside as incomplete.** **The repair is 21.6: the certificate position goes in the last line, as bookkeeping, and leaving it out is not honesty.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the file of yours that somebody refused on a number** and write **the four accounts**: yours, the applier\'s, somebody who has read your work, and one document nobody has read. ⚠ **Then name the rule, by number if it has one.** **In this class six of ten found a rule they had never read and two found a route in it nobody had used** — **and in four cases the rule was on a public page.**'));
out.push(p('**b**  Swap. Your partner writes **the letters and the date** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, seven times in ten, a true statement about what the reader does not understand.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said there are three letters and a date, and one of the four is not about her file at all: a letter to the clerk citing item 6 by number, a request to the superintendent for the endorsement item 6 requires in item 6\'s own words, a note to whoever maintains the one-page summary, and the January date, which stands whatever the other three do. Mrs Ajouz said what must not be said is that the board does not understand what the score measures, and Mrs Khoury said that is exactly it and it is true, which is the difficulty of the unit in one sentence, because nobody at that board has read the descriptors and the clerk has never seen a script, and a letter that says so tells a roomful of people they are ignorant while asking them to apply a rule in her favour. Mrs Oueidat asked whether anybody is at fault, and Mr Attar said nobody, and this is the ninth time in Book 2: the clerk applies the list she was given, the pharmacist has read the best evidence in the file and has no standing, and the board wrote item 6 in 2021 and then summarised itself on one page without it. Dr Qabbani said so the letter to the clerk is the whole repair, and Mrs Ajouz said it is one of four and the only one that can produce a registration this year, which is not the same as being the repair. Mrs Tarabishi asked why nothing is said about the summary, and Mrs Khoury said because the clerk did not write it and cannot change it, which is 18.5, so the note about the summary goes to whoever maintains it and will not help this file. Mr Shihabi asked about the January date, and Mrs Ajouz said it stands whatever happens to item 6, because item 6 depends on somebody reading a document and the number depends on nobody reading anything. Mrs Rizk said that is 20.4, and Mrs Khoury said it is 20.4 pointed at herself, a plan with a date, a figure and a name, and the name is hers. Mr Tayara asked what the superintendent writes, and Mrs Oueidat said what item 6 asks for and not what he feels, with no adjectives about her ability, because a schedule that admits documents does not admit opinions. And Mrs Ajouz said item 6 has been there since 2021 and has never once been used, and both documents were free, public and available throughout, which is the whole of what the unit has taught her and is not about English at all._'));
out.push(p('**Listener task:** write the rule you cited by number and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 6)', 7));
out.push(p('You are going to read four contributions to a discussion about language test scores. For questions **1–4**, choose from the writers **A–D**. The writers may be chosen more than once.'));
out.push(model([
  '**A** _(a chief pharmacist)_   I read about forty applications a year and I would not give up the number. One line tells me where to begin, and a reader who pretends otherwise has never had forty files on a Thursday. What I object to is being given the line and nothing else: the boards publish a figure with no commentary of any kind, and the over-reading that follows is their doing and not mine. Documents from working life should be admitted beside the figure, and I wrote such a provision into an advertisement myself four years ago. Scripts should obviously be returned — the candidate paid for the performance. Whether a board should tell a candidate which criterion a mark concerns is a different matter, and not the board\'s business: that is what a teacher is for. I would add that the figure has done one useful thing in my department, which is to stop us appointing on an impression of somebody who speaks well in a room.',
  '**B** _(a teacher)_   The number is a convenience that displaces evidence already sitting in the file, and in my experience readers reach for it because one line is quicker than four pages. That is a choice readers make, and it is theirs. I am less troubled than my colleagues about scripts: the descriptors are published, and a candidate who rewrites the answer from memory and works through the criteria will find the gap without the paper. Documents from working life should certainly be admitted beside a score. And a board that will not say which criterion a mark concerns is withholding the only information the mark contains. I have watched candidates spend a year on the wrong quarter of a paper for want of one line from a board that already knows which quarter it was.',
  '**C** _(an admissions officer)_   I process eighty files in a fortnight and the number is a necessary shortcut; I spend four minutes on each and I am not going to apologise for that. The responsibility for over-reading it is mine and my colleagues\', and I include myself. Scripts should go back to candidates. Where I part from the others is on professional documents: a dossier from one applicant and a court file from another cannot be compared, and a procedure that admits them admits something I cannot apply evenly, so the score has to remain the deciding item. Boards should say which criterion is concerned, and I would read such a line if it came with the file, which is more than I can say for most of what we are sent.',
  '**D** _(an examiner)_   The number is accurate within its own terms and almost everything said against it is really a complaint that it does not do something it never claimed to do. It is a prediction from one performance on four criteria, and the people who use it as a description are not being deceived; they are expecting too much of arithmetic. I would not call that anybody\'s fault. Return the scripts, by all means, and admit professional documents, which tell a reader things no number can. And yes, a candidate should be told which criterion the mark concerns; it costs the board a sentence and it is information the board already has.',
]));
out.push(item('1', 'Which writer has a different view from the others about returning candidates\' scripts?'));
out.push(item('2', 'Which writer has a different view from the others about admitting documents from working life beside a score?'));
out.push(item('3', 'Which writer has a different view from the others about whether a board should say which criterion a mark concerns?'));
out.push(item('4', 'Which writer suggests that nobody is at fault for the way scores are used?'));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three letters and the date (120 words or more, including the working).'));
out.push(p('**To the person who applies the rule.** ⚠ **The ______________ at item ______________ admits ______________; the ______________ are enclosed.**   **To the person who can endorse it.** **______________, which is ______________, and I endorse it as ______________ under item ______________.**   **To whoever maintains the summary.** **______________.**   **And the date.** **______________.**   **The working.** **The sentence that must not be written: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The rule cited by number, to the person who applies it',
  'The endorsement in the rule\'s own words, with no adjectives',
  'The note about the summary sent elsewhere',
  'A date that depends on nobody\'s reading',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Two of the three points, a ground for choosing them, and a conclusion that selects.** **Your own opinion is welcome and is not what is being marked.**',
  'Your class has attended a talk on how qualifications are assessed. You have made the notes below.   **Points discussed:** _the usefulness of a single score to a reader with many files_ · _whether documents from working life should count as evidence_ · _whether candidates should see their own scripts_.   **Some opinions expressed:** _"One line beats four pages when you have eighty files."_ · _"A dossier and a court file cannot be compared."_ · _"The candidate paid for the performance."_',
  '**Write an essay** discussing **two** of the points in your notes. You should **explain which is more important**, giving reasons. You may, if you wish, make use of the opinions expressed, but you should use your own words as far as possible. Write **220–260 words**.',
  '⚠ **Do not take all three points.** **Name the two in the first paragraph and select between them in the last.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The four criteria are weighted the same, not one more than ___ .   a) other   b) the others   c) another',
  '2  ___ I known which criterion it was, I would not have spent ninety hours.   a) If   b) Should   c) Had',
  '3  The descriptors have been published ___ fourteen months.   a) for   b) since   c) during',
  '4  Nothing in the course asks ___ to describe a chart.   a) to anybody   b) anybody   c) for anybody',
  '5  A paraphrase scores nothing, ___ good it is.   a) how   b) whatever   c) however',
  '6  The mark is usually accepted ___ two years.   a) for   b) during   c) until',
  '7  She has never defended a document of hers in English, ___ is the whole of Book 2.   a) what   b) which   c) that',
  '8  Three jobs, ___ of which needs more than a fortnight.   a) none   b) neither   c) any',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style).** 🔊 **Track 21.15** You will hear three short extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best according to what you hear.'));
[
  '**Extract One** _(a chief pharmacist and a personnel officer)_',
  '1  What does the pharmacist say the advertisement\'s paragraph 4 was for?   A to exclude applicants without a certificate   B to admit evidence other than a certificate   C to satisfy the governorate',
  '2  What does the personnel officer say about annexe 3?   A she has not read it   B it is too long for the file   C it answered a question the certificate had not',
  '**Extract Two** _(a registration clerk and her supervisor)_',
  '3  What does the clerk say about the one-page list?   A she has worked from it for four years   B she knows it omits something   C she wrote it herself',
  '4  What does the supervisor say about item 6?   A it was withdrawn   B it requires a committee   C nobody has ever cited it',
  '**Extract Three** _(a candidate and her teacher)_',
  '5  What does the candidate say she had done with the descriptors?   A nothing at all   B read them without using them   C given them to somebody else',
  '6  What does the teacher say the January date is for?   A a route that needs nobody else   B a second opinion   C the superintendent',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['Extract One', '**Pharmacist:** Paragraph 4 says evidence of professional English, and I wrote that paragraph myself four years ago. I wrote it so that a certificate would not be the only thing we could look at, because the best pharmacist I ever appointed had no certificate and had written a recall notice I still use as a model. **Personnel officer:** I read annexe 3 on Tuesday. Nine hundred words about a recall, written in an evening. I had a question about whether she could write under pressure and that answered it, which the component mark did not and could not. **Pharmacist:** Then the paragraph did what it was for.'],
  ['Extract Two', '**Clerk:** I have worked from the one-page list for four years, since I came to this desk. It has the component figures and the deadlines and nothing else, and I have never had any reason to doubt it. **Supervisor:** The schedule behind it runs to eleven items and item 6 admits professional documentation with an endorsement. **Clerk:** I did not know that, and I have refused about ninety files. **Supervisor:** Nobody has cited item 6 since it was written in 2021. Not one applicant, not one of us. It is not that it was withdrawn or that it needs a committee; it has simply never been used, and a provision nobody cites stops being visible.'],
  ['Extract Three', '**Candidate:** I read the descriptors four times in fourteen months. Four pages, free, on the website. I read them the way you read a notice, and I never once put them beside a sentence of my own, which turns out to be the only reading of them that does anything. **Teacher:** And January? **Candidate:** January stands. Item 6 needs somebody to open an annexe and read nine hundred words, and the test needs nobody to read anything at all. After six cycles of this I am not building a plan that depends on a reader with four minutes. **Teacher:** Then January is the route that needs nobody else at all, and item 6 is the one that needs a reader.'],
]));
out.push(p('**C  Writing.** Write the three letters and the date (120 words or more): the rule cited by number, the endorsement in the rule\'s own words, the note that goes elsewhere, and the date that depends on nobody.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what an examination is measuring, as distinct from what it asks',
  '☐ answer one question for two mark schemes, with two sentences added and two removed',
  '☐ read a band descriptor and name the sentence of mine that earns it',
  '☐ say what my English is without naming a level, with volumes and a limit',
  '☐ map the four skills onto the other examination, and name what does not transfer',
  '☐ switch off the paraphrase and the partner where they cost marks',
  '☐ write the page for a reader who has eighty files and four minutes',
  '☐ cite the rule by number to the person who applies it, and keep the route that needs nobody',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _sit for · go in for · enter for · scrape through · fall down on · pass for · count towards · bear comparison with · match up to · come up to · get through to · fall between_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 21.7 draws on this unit\'s lexis)_: _proficient → **proficiency** · attain → **attainment** · benchmark → **benchmarked** · commensurate → **commensurately** · validate → **validation** · apt → **aptitude** · norm → **normative** · diagnose → **diagnostic** · certify → **certification**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _look forward to_ **→ _a descriptor looks forward to a performance nobody has seen_**, which is a document being predictive, where at A2 it was anticipating a visit · _put together_ **→ _the two component marks, put together, say less than one sentence of hers_**, which is taken collectively, where at A2 it was assembling a shelf · _go up_ **→ _the writing component went up half a band_**, which is rising on a scale, where at A2 it was going up the stairs.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 21 · The Same English, Another Examination');
