// Proactive English C1 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['THE MOVE, IN ONE SENTENCE', 'WHAT THE LEARNER DID WITH IT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const taught = (rows) => table(['WHAT I SAID', 'WHAT THEY DID', 'WHAT THEY MUST HAVE UNDERSTOOD'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three of the one-sentence moves from the reports on the board. For each one the room says whether a beginner could do it on Monday.';
const slip = '**Peer review, C1 band 4.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 24  Handing It On'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_   ·   _Series author: Mo (Mohamad Khorbatli)_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**This is the last unit of the last book, and it does not revise anything.** ⚠ **It asks one question seven times: is any of this yours?** **And the test it uses is the only test there is** — **teach one move of it to somebody who has never had it, and report what they did not understand.**',
  '**Mrs Khoury arrived at A2 four years ago and leaves at C1 in three weeks.** ⚠ **In 24.1 she teaches one move to a junior of nineteen who has been at the paper for three weeks** — **and in 24.2 she reports what the junior did with it, which is not what was taught, and names the sentence of her own that made the misunderstanding possible.**',
  '**And the unit ends where no earlier unit has had to end.** ⚠ **24.5 asks for the _cannot yet_ list for the last time, and there is no next teacher to hand it to** — **and 24.6 is a page to whoever teaches this method next, written by a student, about a method, which is a document this series has never asked anybody for.**',
], C.grey, C.navy));
out.push(p('**Seven cycles · 90 minutes each · the seventh is Review & Mediate**', { bold: true, color: C.teal }));

// ===================== 24.1 =====================
out.push(pb());
out.push(h2('24.1  Teaching one move to somebody who has never had it'));
out.push(p('**Function:** teaching one move of this method to somebody who has never had it   ·   **Grammar:** the move named in one sentence, with no word from the course in it   ·   **Pronunciation:** the move said in four minutes, to a beginner'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you now do with a document that you did not do four years ago.** ⚠ **Do, not know.** **In this class seven of ten named a cycle number in the first sentence and had to be asked again** — **and your teacher writes the ten moves on the board in the students\' own words, striking every number, every title and every piece of this course\'s vocabulary as it is said.**'));
out.push(board('Say what you found, as a fact, with no sorry in it.', 'She stopped apologising to everybody, including her mother.'));
out.push(p('**b**  Which two could a beginner do on Monday? **1** _Apply the construct–task distinction before you prepare._  **2** _Before you send a complaint, write the thing you saw and the date you saw it, and nothing else._  **3** _Internalise the declared-scope principle._  **4** _When you refuse somebody, give one reason and then stop writing._  **5** _Remember 19.5 and avoid conclusions dressed as observations._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide you must hand on?   **A** the reason the move works   **B** **the move itself, as a drill a beginner can do on Monday** — and not the reason   **C** the cycle it comes from'));
out.push(p('**b**  Listen again. **1** How did Mrs Khoury find out what her own move was?   **2** What does Ms Huda say she has never done in sixty teachings of it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  Four minutes, to somebody with three weeks', [
  ['Ms Huda', 'Mrs Khoury has taught one move to somebody who has never had it.'],
  ['Mrs Khoury', '⚠ **Miss Dandashi, who is nineteen and has been at the paper for three weeks, and whose English is about where mine was in 2022.** **One move, four minutes, on a document of hers and not of mine** — **and the first difficulty was that I could not say what the move was.**'],
  ['Ms Huda', 'You could not say it?'],
  ['Mrs Khoury', '⚠ **I have been doing it for about three years and it has become invisible, which is what a habit is.** **So I watched myself do it: I took the last six notes I had written and looked for what was in all six and in nothing I wrote in 2022** — **and it took forty minutes and the answer is one sentence.**'],
  ['Mr Shihabi', 'Which is?'],
  ['Mrs Khoury', '⚠ **_Say what you found, as a fact, with no sorry in it._** **Thirteen words, no number, no title, and not one word of this course\'s vocabulary in it** — **and my first version was _state the finding without hedging or apology, as in 12.1_, which is nine words of jargon and a cross-reference to a book she has never seen.**'],
  ['Mrs Oueidat', 'Why does the jargon matter?'],
  ['Mrs Khoury', '⚠ **Because she cannot check it.** **A beginner hearing _state the finding_ does not know what counts as a finding** — **and the test of the sentence is whether she can do it on Monday without asking me what any of it means, which is the only test a move has to pass.**'],
  ['Dr Qabbani', 'And the demonstration?'],
  ['Mrs Khoury', '⚠ **On her document and not on mine, which I got wrong first.** **I showed her a note of my own and she said it was very good, which is what a junior says** — **so we took her own two-line message to the picture desk and I asked her to say what she had found, and she said _the caption is wrong_, and that is the move, and she had done it before I had explained anything.**'],
  ['Mrs Tarabishi', 'Then what did the four minutes go on?'],
  ['Ms Huda', '⚠ **On the reason, which is where this cycle goes wrong, and I shall say what I do.** **I have taught that move about sixty times at A2 and I have never explained it once.** **I drill it: six messages, say what you found, no sorry** — **and the reason arrives two levels later, when there is something underneath it for the reason to be about.**'],
  ['Mr Tayara', 'Sixty times and no explanation?'],
  ['Ms Huda', '⚠ **Not one.** **An A2 student cannot carry the reason and will carry the drill, and in a year the drill will have made the reason obvious to them** — **and a C1 student handing the move on hands on the reason, because the reason is the part they can see and the drill is the part that has become invisible.**'],
  ['Mrs Rizk', 'So the drill is the method.'],
  ['Mrs Khoury', '⚠ **The drill is the method and the reason is a comfort, and that sentence cost me four years.** **I had believed the opposite for the whole of B2** — **and the proof is sitting in Miss Dandashi\'s three weeks: she has the move and does not know why it works, and she is using it, and I had the reason for two years before I had the move.**'],
  ['Mrs Ajouz', 'What did she do with it?'],
  ['Mrs Khoury', '⚠ **Something I had not foreseen, and it is 24.2, so the room will have to wait.** **What I shall say now is that she used it twice in four days** — **once on a caption, which was exactly right, and once on a colleague, which was not** — **and the second one is my fault and not hers, and that is the whole of the next cycle.**'],
  ['Mr Attar', 'How long did the whole thing take?'],
  ['Mrs Khoury', '🔊 ⚠ **Four minutes to teach and forty to find.** **Which is the proportion nobody mentions: the teaching is nothing and the finding is everything** — **and I have been teaching juniors for eleven years and have never once gone looking for what I actually do before telling somebody to do it.**'],
]));
out.push(sp());
out.push(box('Language box – handing on one move', [
  '**Find the move by watching yourself, not by remembering the course.** ⚠ **Take the last six documents you wrote and look for what is in all six and in nothing you wrote four years ago** — **forty minutes, and the answer is one sentence.**',
  '**Name it in one sentence with no word of this course in it.** ⚠ **_Say what you found, as a fact, with no sorry in it._** **Thirteen words.** **_State the finding without hedging, as in 12.1_ is jargon and a cross-reference to a book the learner has never seen.**',
  '**The test of the sentence: can they do it on Monday without asking what any of it means?** ⚠ **A beginner hearing _state the finding_ does not know what counts as a finding** — **and a move that needs a gloss has not been named.**',
  '**Demonstrate on their document and not on yours.** ⚠ **Shown a note of yours, a junior says it is very good, which is what a junior says** — **and on their own two-line message they will do the move before you have finished explaining it.**',
  '**Hand on the drill and not the reason.** ⚠ **Six messages, say what you found, no sorry.** **A beginner cannot carry the reason and will carry the drill** — **and in a year the drill will have made the reason obvious to them, which is the order the series uses and never states.**',
  '**And the reason is the part you can see, which is why you will hand it on.** ⚠ **The drill has become invisible to you and the reason has not** — **so a C1 student teaching a beginner teaches the half of it the beginner cannot use.**',
  '**Pronunciation.** 🔊 **Track 24.2** **Say the move in your own words, to a beginner, with no stress on any technical word, because there should be none in it.** ⚠ **If you hear yourself stressing a word to carry its meaning, that word is jargon** — **and the stress is the test: a sentence with no word in it that needs stressing is a sentence a beginner can repeat.**',
  '**Practise:** Could a beginner do it on Monday? **1** _apply the construct–task distinction_  **2** _write what you saw and the date_  **3** _internalise the declared scope_  **4** _give one reason and stop_  **5** _avoid conclusions dressed as observations_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the move from the card. B says **whether a beginner could do it on Monday**, and rewrites the ones that could not **in one sentence with no word of this course in it.** ⚠ **Two rows on each card are already sayable to a beginner** — **and there B gives the drill that would teach it.** Change cards.'));
out.push(table(['Card A – the move as named', 'Card B – the move as named'], [
  ['_Apply the construct–task distinction before preparing._', '_Internalise the declared-scope principle._'],
  ['_⚠ Write what you saw and the date you saw it, and nothing else._', '_⚠ When you refuse somebody, give one reason and then stop._'],
  ['_Avoid conclusions dressed as observations._', '_Establish the problem before proposing the remedy._'],
  ['_⚠ Say what you found, as a fact, with no sorry in it._', '_⚠ Before you send it, read it aloud once._'],
  ['_Remember 19.5 and 22.1 together._', '_Keep your register consistent with your reader._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** Monday or not, and the drill. ⚠ **Rows 2 and 4 are sayable already and the room must give the drill for each** — **six messages, six refusals, six notes, six readings aloud, which is a drill.** **Rows 5 are the pair that matter**: one is two cycle numbers and one is advice with no action in it, **and the room will defend the second: _keep your register consistent_ is true and cannot be done on Monday by anybody who cannot already do it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Find **your own move** by taking **the last six documents you wrote** and looking for what is in all six and in nothing you wrote four years ago. ⚠ **Then name it in one sentence with no word of this course in it.** **In this class the finding took between twenty minutes and an hour and a half, and nine of ten found a move they had not known they had** — **and the tenth found that her move is one she was taught at school, which is the most interesting result in the unit.**'));
out.push(p('**b**  Swap. Your partner reads **your sentence** and asks **what the drill is.** ⚠ **Then the harder question: which word in your sentence would a beginner have to ask about?** — **and in this class eight of ten sentences had one, and in five cases it was a word from this book.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury has taught one move to Miss Dandashi, who is nineteen and has been at the paper for three weeks and whose English is about where Mrs Khoury\'s was in 2022: one move, four minutes, on a document of hers and not of Mrs Khoury\'s, and the first difficulty was that she could not say what the move was. Ms Huda asked whether she could not say it, and she has been doing it for about three years and it has become invisible, which is what a habit is, so she watched herself do it by taking the last six notes she had written and looking for what was in all six and in nothing she wrote in 2022, which took forty minutes and came out as one sentence. Mr Shihabi asked which, and say what you found, as a fact, with no sorry in it: thirteen words, no number, no title and not one word of this course\'s vocabulary, where her first version had been state the finding without hedging or apology, as in 12.1, which is nine words of jargon and a cross-reference to a book the junior has never seen. Mrs Oueidat asked why the jargon matters, and because she cannot check it, since a beginner hearing state the finding does not know what counts as a finding. Dr Qabbani asked about the demonstration, and on her document and not on Mrs Khoury\'s, which she got wrong first: shown a note of her own the junior said it was very good, which is what a junior says, and on her own two-line message to the picture desk she said the caption is wrong, which is the move, before anything had been explained. Mrs Tarabishi asked what the four minutes went on, and Ms Huda said on the reason, which is where the cycle goes wrong, and that she has taught that move about sixty times at A2 and has never explained it once: she drills it, and the reason arrives two levels later. Mr Tayara asked about sixty times and no explanation, and not one, because an A2 student cannot carry the reason and will carry the drill. Mrs Rizk said so the drill is the method, and Mrs Khoury said the drill is the method and the reason is a comfort, and that sentence cost her four years. Mrs Ajouz asked what the junior did with it, and something she had not foreseen, which is the next cycle. And Mrs Khoury said four minutes to teach and forty to find, which is the proportion nobody mentions._'));
out.push(p('**Listener task:** write your partner\'s one-sentence move and the drill that would teach it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Khoury wrote after the four minutes. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _note on one move, handed on_ · _four minutes to teach, forty to find_ · **1 March**',
  '**What I set out to do.** **Teach one thing I do to somebody who has never had any of this.** ⚠ **Miss Dandashi, nineteen, three weeks at the paper, and her English is about where mine was when I began this course in 2022.**',
  '**The first difficulty, which I had not expected.** **I could not say what the move was.** ⚠ **I have been doing it for about three years and it has gone invisible, which is what a habit is** — **and _I just say what I mean_ is not a move, it is a description of a person.**',
  '**How I found it.** **I took the last six notes I had written and looked for what was in all six and in nothing I wrote in 2022.** ⚠ **Forty minutes.** **The answer is that all six begin with a sentence saying what I had found, and none of the six has the word _sorry_ in it, and four of the six from 2022 do.**',
  '**The sentence.** _Say what you found, as a fact, with no sorry in it._ ⚠ **Thirteen words.** **No number, no title, and not one word from this course** — **and my first version was _state the finding without hedging or apology_, which has two words in it she would have had to ask me about.**',
  '**The demonstration, which I got wrong first.** **I showed her a note of mine and she said it was very good.** ⚠ **That is what a junior says to a senior and it taught her nothing** — **so we took her own two-line message to the picture desk, and I asked her what she had found, and she said _the caption is wrong_, which is the move, and she had done it before I had explained anything.**',
  '**What Ms Huda does instead, which I did not know until the lesson.** **She has taught this move about sixty times at A2 and has never once explained it.** ⚠ **She drills it: six messages, say what you found, no _sorry_** — **and the reason arrives two levels later, when there is something underneath it for the reason to be about.**',
  '**What that tells me about four years of my own.** **I had the reason for two years before I had the move.** ⚠ **And Miss Dandashi has the move and does not know why it works, and is using it** — **so the drill is the method and the reason is a comfort, which I had believed the other way round for the whole of B2.**',
  '**What I shall watch for.** **She used it twice in four days: once on a caption, which was right, and once on a colleague, which was not.** ⚠ **The second is in the next note.**',
  '**And the proportion that nobody mentions.** **Four minutes to teach, forty to find.** ⚠ **I have been teaching juniors for eleven years and I have never once gone looking for what I actually do before telling somebody to do it** — **and the forty minutes is the whole of what this unit has taught me so far.**',
  '**And the figure I shall give the next person who asks me how to train a junior.** **Four and forty.** ⚠ **Not because the ratio is a law** — **but because it is the only thing I have ever measured about my own teaching, and eleven years of not measuring is what produced three instructions I could not have carried out myself.**',
]));
out.push(item('1', 'How did she find out what her move was, and what did the six notes show?'));
out.push(item('2', 'What went wrong with the first demonstration, and what worked?'));
out.push(item('3', 'What does Ms Huda do instead, and what does Mrs Khoury conclude from it?'));
out.push(writers([
  'A note on one move handed on: **whom you taught, and where their English is** → **the difficulty of saying what the move is** → **how you found it, with the figures** → **the sentence, counted, with no course vocabulary in it** → **the demonstration you got wrong** → **what the move\'s own teacher does instead** → **what that tells you about your four years** → **and the proportion of finding to teaching.**',
  '⚠ **Name the learner and place their English.** _Nineteen, three weeks at the paper, about where mine was in 2022._ **A note that says _a colleague_ has hidden the only variable that matters** — **and the comparison with your own past level is what makes the note readable by a teacher.**',
  '**Give the method of finding, with its figures.** ⚠ _The last six notes, what is in all six and in nothing from 2022, forty minutes._ **The move cannot be remembered, because a habit is invisible to its owner** — **and a note that reports the move without the procedure has withheld the evidence.**',
  '**Quote both versions of the sentence and count the words of jargon.** ⚠ _State the finding without hedging or apology_ against _say what you found, as a fact, with no sorry in it._ **Two words she would have had to ask about** — **and the count is the discipline: jargon is invisible to whoever has the four years.**',
  '⚠ And **report the demonstration that failed, in the junior\'s own words.** _She said it was very good._ **That is what a junior says to a senior, and it taught her nothing** — **and the version that worked used her document, where she did the move before anything had been explained, which cannot be arranged in advance.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own note (120 words or more).'));
out.push(p('**What I set out to do.** **Teach one thing I do to ______________.** ⚠ **______________, and their English is about ______________.**   **The first difficulty.** **I could not ______________.**   **How I found it.** **I took ______________ and looked for ______________.** ⚠ **______________ minutes.**   **The sentence.** _______________._ ⚠ **______________ words.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The learner named, with their English placed',
  'The procedure of finding, with its figures',
  'The sentence quoted and counted',
  'No word of this course anywhere in the sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their one-sentence move**, and the room says which word a beginner would ask about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the learner, the difficulty, the finding with its figures, the sentence in both versions, the demonstration that failed, what the move\'s own teacher does, what it tells you about your four years, and the proportion.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the learner placed, the procedure of finding given with figures, and no word of this course in the one-sentence move.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many named a cycle number in their first attempt?** **Seven of ten** — **and the room should see all seven struck, because the number is the part that cannot cross.** **Then: how long did the finding take, against the teaching?** **Twenty minutes to an hour and a half, against four minutes** — **and nine of ten found a move they had not known they had.**'));
out.push(hw('**Teach your move to somebody who has never had any of this**, on their document, in four minutes, and then **write down what you said, word for word.** ⚠ **Then the harder half: do not explain why it works, even if they ask, and write down what it cost you not to.** **In this class eight of ten were asked why and six explained anyway, and all six said afterwards that the explanation was for themselves.** **Bring what you said.** **24.2 reports what they did not understand**, so watch what they do with it for four days and write it down.'));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  What they did not understand'));
out.push(p('**Function:** reporting what the person you taught did not understand   ·   **Grammar:** the misunderstanding as a measure of the explanation   ·   **Pronunciation:** the learner\'s version read without correction in the voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **what the person you taught actually did.** ⚠ **Did, in the four days, not what they said they understood.** **In this class eight of ten learners did something that was not the move** — **and your teacher writes the ten things they did on the board, with the ten moves beside them, and the room reads the two columns in silence for a minute.**'));
out.push(board('Say what you found, as a fact, with no sorry in it.', 'She told Mr Kaddour his page was late. No sorry.'));
out.push(p('**b**  Which two reports measure the explanation rather than the learner? **1** _She did not really understand it._  **2** _She used it on a colleague, which means my sentence did not say who it was for._  **3** _She needs more practice._  **4** _She dropped the word sorry from everything for four days, including an apology she owed, which my thirteen words do not forbid and do not permit either._  **5** _I think she was not listening properly._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a misunderstanding measures?   **A** the learner\'s attention   **B** **the explanation** — and specifically which sentence of it made the misunderstanding possible   **C** the difficulty of the move'));
out.push(p('**b**  Listen again. **1** What did Miss Dandashi do on the fourth day?   **2** Which words of Mrs Khoury\'s sentence does she say are responsible?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  Thirteen words, and what they did not say', [
  ['Ms Huda', 'Mrs Khoury has four days of evidence.'],
  ['Mrs Khoury', '⚠ **Two uses, and the second one is mine.** **On the Tuesday she wrote _the caption on page four is wrong: the man on the left is the deputy and not the minister_, which is the move, exactly, and the picture desk changed it in eleven minutes.** **On the Friday she told Mr Kaddour that his page was late, as a fact, with no _sorry_ in it** — **and he has not spoken to her since, and she is nineteen and has been there three weeks.**'],
  ['Ms Huda', 'What had you said?'],
  ['Mrs Khoury', '⚠ **_Say what you found, as a fact, with no sorry in it._** **Thirteen words, and not one of them says anything about who the sentence is for or what a finding is.** **She applied it to a person instead of to a document** — **and there is nothing in my thirteen words that tells her not to, which took me about four seconds to see and eleven hours to admit.**'],
  ['Mr Attar', 'Is that not obvious from the context?'],
  ['Mrs Khoury', '⚠ **It is obvious to somebody with four years of this, which is the whole trap of the cycle.** **I had the picture desk in my head when I said it and she had her Friday in hers** — **and a sentence that is unambiguous to its author is 19.1, which I have taught to this room twice and did not apply to thirteen words of my own.**'],
  ['Mrs Oueidat', 'So what is the report?'],
  ['Mrs Khoury', '⚠ **Three columns and no adjectives.** **What I said, what she did, and what she must have understood** — **and the third column is the one that costs something, because it is a sentence in her voice that I have to write without correcting it.** **_Say what you found, with no sorry, to anybody, about anything._**'],
  ['Dr Qabbani', 'And then the repair?'],
  ['Ms Huda', '⚠ **Not yet, and this is the discipline of the cycle.** **A misunderstanding is a measure of the explanation and the measurement comes before the repair** — **and in this room six of eight writers could name the sentence of their own that made the misunderstanding possible, which is a good rate and is only available to somebody who has written the three columns first.**'],
  ['Mrs Tarabishi', 'Does she tell the junior?'],
  ['Mrs Khoury', '⚠ **She tells her the missing half and she does not tell her that she misunderstood.** **_The move is for documents and not for people; with a person you say what you need and when._** **Fifteen more words** — **and the sentence that must not be said is _you misunderstood me_, which is true and which hands a nineteen-year-old a fault that is mine.**'],
  ['Mr Shihabi', 'And Mr Kaddour?'],
  ['Mrs Khoury', '⚠ **That is 24.7 and it is not a language question, and I shall say only that I have gone to him myself.** **The person who taught the move is the person who repairs its consequence** — **and a teacher who lets the learner carry it has taught two things, one of which is that teaching is free.**'],
  ['Mr Tayara', 'What would the better thirteen words have been?'],
  ['Mrs Khoury', '⚠ **Eighteen, and I have them now, and they are duller.** **_When a document is wrong, say what you found, as a fact, with no sorry in it._** **Five words added at the front, which name the occasion** — **and Ms Huda says the drill does that work at A2 without any words at all, because every one of the six messages in the drill is about a document.**'],
  ['Ms Huda', '⚠ **The drill carries the occasion and a sentence has to say it.** **Sixty teachings and I have never had Miss Dandashi\'s Friday** — **not because my sentence is better but because I never give a sentence: I give six documents, and the sixth one teaches the occasion to a student who could not have been told it.**'],
  ['Mrs Rizk', 'That is uncomfortable to hear.'],
  ['Mrs Khoury', '🔊 ⚠ **It is the most useful thing I have been told in four years and it arrived in the last three weeks.** **Everything I can explain, I can hand on wrongly in thirteen words** — **and the part of this course that works is the part nobody explained to me, which I have spent two books learning to explain, and the explaining is for me.**'],
]));
out.push(sp());
out.push(box('Language box – the misunderstanding as a measurement', [
  '**Report what they did, not what they said they understood.** ⚠ **Eight of ten learners in this room did something that was not the move** — **and the four days of doing is the only evidence there is.**',
  '**Three columns and no adjectives.** ⚠ **What I said · what they did · what they must have understood.** **The third is written in their voice and without correction** — **_say what you found, with no sorry, to anybody, about anything_** — **and it is the column that costs something to write.**',
  '**The misunderstanding measures the explanation.** ⚠ **Name the sentence of yours that made it possible.** **_Say what you found, as a fact, with no sorry in it_ says nothing about who the sentence is for** — **and in this room six of eight writers could name their own sentence, which is a good rate and needs the three columns first.**',
  '**A sentence unambiguous to its author is 19.1 pointed at your own teaching.** ⚠ **The author has the occasion in their head and the learner has their own Friday in theirs** — **and four years of context is exactly what cannot be handed on in thirteen words.**',
  '**Tell them the missing half; do not tell them they misunderstood.** ⚠ **_The move is for documents and not for people; with a person you say what you need and when._** **_You misunderstood me_ is true and hands a beginner a fault that belongs to the explanation.**',
  '**And the person who taught the move repairs its consequence.** ⚠ **A teacher who lets the learner carry it has taught two things, and the second one is that teaching is free** — **which it is not, and this is the cycle in which the course says so.**',
  '**Pronunciation.** 🔊 **Track 24.4** **Read the learner\'s version aloud with no correction in your voice** — **flat, as a finding about your own sentence.** ⚠ **A rise at the end turns it into a report of a mistake, and the room will hear whose mistake you think it was.**',
  '**Practise:** Measure the explanation. **1** _she did not really understand_  **2** _my sentence did not say who it was for_  **3** _she needs practice_  **4** _she dropped sorry from an apology she owed_  **5** _I think she was not listening_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the report from the card. B says **whether it measures the learner or the explanation**, and rewrites the ones that measure the learner **as three columns with no adjectives.** ⚠ **Two rows on each card measure the explanation already** — **and there B names the words that are missing.** Change cards.'));
out.push(taught([
  ['_She did not really understand it._', '⚠ **Measures the learner**', '**Rewrite as three columns**'],
  ['_⚠ She used it on a colleague._', '⚠ **Measures the explanation**', '**Missing: who the move is for**'],
  ['_She needs more practice._', '⚠ **Measures the learner**', '**And names no sentence of mine**'],
  ['_⚠ She dropped _sorry_ from an apology she owed._', '⚠ **Measures the explanation**', '**Missing: what the move does not cover**'],
  ['_I think she was not listening properly._', '⚠ **Measures the learner, and guesses**', '**_I think_ is doing the work of evidence**'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** learner or explanation, and the missing words. ⚠ **Rows 2 and 4 on both cards measure the explanation and the room must name what the sentence failed to say** — **who the move is for, and what it does not cover.** **Rows 5 are the pair the cycle turns on**: both begin _I think_ and both are guesses about a learner\'s attention, **and the room will defend them as honest, which they are, and they measure nothing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the three columns** for the person you taught: **what you said, what they did, and what they must have understood.** ⚠ **The third column in their voice, with no correction in it.** **In this class eight of ten had a misunderstanding to report, and six of the eight could name the sentence of their own that made it possible** — **and two could not, which is an honest result and should be written as _I cannot find it_.**'));
out.push(p('**b**  Swap. Your partner reads **your third column** and asks **which words of yours made it possible.** ⚠ **Then the harder question: what will you tell the learner, and what will you not tell them?** — **and in this class nine of ten could write the missing half in under twenty words, and seven had wanted to begin with _you misunderstood_.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury has four days of evidence and two uses, and the second one is hers: on the Tuesday Miss Dandashi wrote that the caption on page four is wrong, because the man on the left is the deputy and not the minister, which is the move exactly, and the picture desk changed it in eleven minutes; and on the Friday she told Mr Kaddour that his page was late, as a fact, with no sorry in it, and he has not spoken to her since, and she is nineteen and has been there three weeks. Ms Huda asked what had been said, and say what you found, as a fact, with no sorry in it, which is thirteen words and not one of them says anything about who the sentence is for or what a finding is, so she applied it to a person instead of to a document, and there is nothing in the thirteen words that tells her not to. Mr Attar asked whether that is not obvious from the context, and it is obvious to somebody with four years of this, which is the whole trap of the cycle, because a sentence unambiguous to its author is 19.1. Mrs Oueidat asked what the report is, and three columns and no adjectives: what I said, what she did, and what she must have understood, and the third is the one that costs something, because it is a sentence in her voice written without correction. Dr Qabbani asked about the repair, and Ms Huda said not yet, because a misunderstanding is a measure of the explanation and the measurement comes before the repair. Mrs Tarabishi asked whether she tells the junior, and she tells her the missing half and does not tell her that she misunderstood, in fifteen more words. Mr Shihabi asked about Mr Kaddour, and that is 24.7, and the person who taught the move repairs its consequence. Mr Tayara asked what the better sentence would have been, and eighteen words, duller, with five added at the front to name the occasion. Ms Huda said the drill carries the occasion and a sentence has to say it, and that in sixty teachings she has never had Miss Dandashi\'s Friday, not because her sentence is better but because she never gives a sentence. And Mrs Khoury said it is the most useful thing she has been told in four years and it arrived in the last three weeks, because everything she can explain she can hand on wrongly in thirteen words, and the part of the course that works on her is the part nobody explained._'));
out.push(p('**Listener task:** write your partner\'s third column and the words of theirs that made it possible.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Khoury\'s three columns and the note under them. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _what she did with thirteen words_ · _four days, two uses_ · **8 March**',
  '**Column 1 · What I said.** _Say what you found, as a fact, with no sorry in it._ ⚠ **Thirteen words, on the Monday, over a two-line message to the picture desk.**',
  '**Column 2 · What she did, Tuesday.** _The caption on page four is wrong: the man on the left is the deputy and not the minister._ ⚠ **The move, exactly, on a document, at nineteen, in three weeks.** **The desk changed it in eleven minutes and nobody minded anything.**',
  '**Column 2 · What she did, Friday.** _Your page is late._ ⚠ **To Mr Kaddour, who is forty-four and has been there nine years, as a fact, with no _sorry_ in it** — **and he has not spoken to her since.**',
  '**Column 3 · What she must have understood.** **In her voice, uncorrected:** _Say what you found, with no sorry, to anybody, about anything._ ⚠ **That is a reasonable reading of my thirteen words.** **It is, in fact, the only reading available to somebody who has not got the four years that were in my head when I said them.**',
  '**The words of mine that made it possible.** **All thirteen, by omission.** ⚠ **Not one of them says who the sentence is for, and not one of them says what a finding is** — **and I had the picture desk in my head and she had her Friday in hers, which is 19.1 arriving in my own teaching after I have taught it to this room twice.**',
  '**What I shall tell her, and it is fifteen words.** _The move is for documents and not for people; with a person you say what you need and when._ ⚠ **And what I shall not tell her: that she misunderstood me.** **It is true and it hands a nineteen-year-old a fault that belongs to my sentence.**',
  '**The better sentence, which I have now and which is duller.** _When a document is wrong, say what you found, as a fact, with no sorry in it._ ⚠ **Eighteen words, five of them naming the occasion** — **and I do not think any number of words would have been enough, which is the next paragraph.**',
  '**What Ms Huda does, and why her sixty learners have not had Friday.** **She gives no sentence at all.** ⚠ **Six documents, one drill, and the sixth document teaches the occasion to a student who could not have been told it** — **and a drill carries the occasion in the material, where a sentence has to say it and will be read by somebody with no occasion in their head.**',
  '**And what I am taking from four days.** **Everything I can explain, I can hand on wrongly in thirteen words.** ⚠ **The part of this course that works on me is the part nobody explained** — **and I have spent two books learning to explain things, and the explaining, I now think, is for me.**',
  '**One more thing, which belongs here and not in the next cycle.** **I have gone to Mr Kaddour myself.** ⚠ **Four sentences, in Arabic, in the corridor: that the sentence she used was mine, that it was for documents, and that she had not been told** — **and he said he had assumed she had been told to speak to him like that by somebody, and he was right, and the somebody is me.**',
]));
out.push(item('1', 'What did Miss Dandashi do on the Tuesday and on the Friday?'));
out.push(item('2', 'What does Mrs Khoury say made the Friday possible, and which earlier cycle does she name?'));
out.push(item('3', 'What will she tell the junior, and what will she not tell her?'));
out.push(writers([
  'Three columns and a note: **what you said, counted and dated** → **what they did, in their words, both times** → **what they must have understood, in their voice, uncorrected** → **the words of yours that made it possible** → **what you will tell them and what you will not** → **the better sentence** → **what the drill does instead** → **and what you take from it.**',
  '⚠ **Write the third column in the learner\'s voice and do not correct it.** _Say what you found, with no sorry, to anybody, about anything._ **A third column written in your own voice has become a diagnosis** — **and the sentence that costs something to write is the one that turns out to be a reasonable reading of what you said.**',
  '**Name your own words, and say how they failed: by omission or by ambiguity.** ⚠ _All thirteen, by omission: not one says who the sentence is for._ **_She did not understand_ measures a learner** — **and a note that cannot name its own sentence has not run the measurement at all.**',
  '**Separate what you will tell them from what you will not, and quote both.** ⚠ _The move is for documents and not for people._ **And:** _that she misunderstood me._ **The second is true, and a note that does not write it down has not noticed that it was tempted.**',
  '⚠ And **end on what you take from it, and let it cost you something.** _Everything I can explain, I can hand on wrongly in thirteen words._ **A note that ends on a better sentence has ended on a repair** — **and the finding of this cycle is not a repair: the part of a method that works may be the part nobody explained.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your three columns (120 words or more).'));
out.push(p('**Column 1 · What I said.** _______________._ ⚠ **______________ words, on the ______________.**   **Column 2 · What they did.** _______________._ ⚠ **______________.**   **Column 3 · What they must have understood.** **In their voice, uncorrected:** _______________._   **The words of mine that made it possible.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The third column in the learner\'s voice, uncorrected',
  'Your own words named, and how they failed',
  'What you will tell them, and what you will not, both quoted',
  'No adjective about the learner anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their third column**, flat, with no correction in the voice, and the room says which words of the explanation are missing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the three columns, the words of yours that made it possible, what you will and will not tell them, the better sentence, what a drill does instead, and what you take from it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the third column in the learner\'s voice, your own sentence named, and no adjective about the learner.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many learners did something that was not the move?** **Eight of ten** — **and the two columns side by side should be read in silence before anybody comments.** **Then: how many writers could name the sentence of their own that made it possible?** **Six of eight, and two wrote _I cannot find it_, which is the honest entry and is worth more than a guess.**'));
out.push(hw('**Write the three columns and then tell your learner the missing half, in under twenty words, without telling them that they misunderstood.** ⚠ **Then the harder half: if the misunderstanding cost somebody something, go to that person yourself.** **In this class three of ten had a consequence to repair and all three went, and two of the three said it was the hardest thing the course has asked of them.** **Bring the missing half and what the repair cost.** **24.3 asks what four years of this changed that is not about English.**'));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  What four years changed that is not about English'));
out.push(p('**Function:** saying what four years of this changed that is not about English   ·   **Grammar:** the practice, the date, and the evidence   ·   **Pronunciation:** the change reported as a change in practice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you do differently that has nothing to do with English.** ⚠ **A practice, a date and a piece of evidence** — **and your teacher strikes every sentence beginning _I feel_ or _I am more_.** **In this class seven of ten produced a practice and two produced nothing at all** — **and the two are a legitimate answer and should be heard without comment.**'));
out.push(board('I am more confident in meetings.', 'I have read every certificate aloud since June.'));
out.push(p('**b**  Which two are testable? **1** _I am more confident when I write._  **2** _I have read every certificate aloud before signing it since June, which is about sixty of them._  **3** _My thinking has become clearer._  **4** _I stopped writing_ we are unable _in Arabic in November, and my Arabic refusals now name the decision._  **5** _I have grown as a professional._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a report of change must contain?   **A** a feeling, honestly described   **B** **a practice, a date, and evidence that it changed**   **C** a comparison with other people'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say changed in her Arabic?   **2** What do two students say, and how does Ms Huda treat it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  A practice, a date, and the evidence', [
  ['Ms Huda', 'What has four years changed that is not about English?'],
  ['Mrs Rizk', '⚠ **My Arabic refusals.** **I stopped writing the Arabic equivalent of _we are unable_ in November and I can date it, because the November letters are in the file and the October ones are too** — **and of the eleven refusals I have written in Arabic since, nine name the decision and two name an obstacle, and both obstacles are real.**'],
  ['Ms Huda', 'That is not an English change at all.'],
  ['Mrs Rizk', '⚠ **It is not, and it is the biggest thing this course has done to me.** **The English units taught me to tell a decision from an incapacity and the distinction is not in English** — **it is in refusing, and I had been writing Arabic refusals for nine years in a language I am far better at than I shall ever be at English.**'],
  ['Mrs Oueidat', 'Mine is reading aloud.'],
  ['Mrs Oueidat', '⚠ **Every certificate of accuracy, aloud, before signing, since June: about sixty.** **I found three errors in the first fortnight and one of them was a date** — **and the practice came out of a unit about expert statements in English and is now applied to documents in two languages, one of which is my first.**'],
  ['Mr Attar', 'Mine is a question.'],
  ['Mr Attar', '⚠ **I ask where a figure came from, out loud, in meetings, in Arabic, which I had never done at twenty-two and did for the first time in January.** **Four times since, and twice the answer was _I do not know_** — **and the two _I do not knows_ have changed two decisions, which I can name and which is the evidence.**'],
  ['Mrs Khoury', 'And mine is about other people.'],
  ['Mrs Khoury', '⚠ **I have stopped asking juniors to do things I cannot demonstrate.** **Eleven years of telling people to _tighten it_ and _make it sharper_, and in March I watched myself work for forty minutes for the first time** — **and the evidence is that I have taught one move since and withdrawn two instructions I had been giving for a decade.**'],
  ['Dr Qabbani', 'I have nothing.'],
  ['Dr Qabbani', '⚠ **Four years, and I write better English and I cannot find a practice outside it that has changed.** **I examine patients as I did in 2022 and I write my notes as I did** — **and I have looked for this for a fortnight because I expected to find something, and I am saying so because the room would otherwise hear nine answers and assume there were ten.**'],
  ['Ms Huda', '⚠ **Which is the most useful answer in the cycle and the key says so.** **A course that changes a professional practice has done something unusual and a course that improves somebody\'s English has done what it said it would** — **and a room in which everybody reports a transformation is a room that has learnt to produce the answer a teacher wants, which is the opposite of everything these two books are about.**'],
  ['Mrs Tarabishi', 'Mine is a document I now keep.'],
  ['Mrs Tarabishi', '⚠ **The plan, one page, for everything over two thousand words, since January** — **and the evidence is that my supervisor has asked the other three candidates for one, which I did not do and is not my achievement, and is the only consequence of mine that has reached anybody else.**'],
  ['Mr Tayara', 'And mine is a filing cabinet.'],
  ['Mr Tayara', '⚠ **The Saturday sheets are filed with the day-book, from the first of February, by the clerk, without my asking twice.** **Nineteen of fifty-two were in the file last year and nine of nine are in it since February** — **and the change is not mine: it is Mrs Lattouf\'s question in a unit about proposals, applied by somebody who has never seen the book.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is Dr Qabbani\'s fortnight of looking.** **He went and looked and found nothing and said so, in a room where nine people had something** — **and that is the move from 12.1, performed on himself, in the last unit, about the course itself, which nobody asked him to do and which is the best evidence in the cycle that any of this is his.**'],
]));
out.push(sp());
out.push(box('Language box – the change that is not about English', [
  '**A practice, a date, and evidence that it changed.** ⚠ **_I have read every certificate aloud before signing it since June, which is about sixty._** **_I am more confident_ is a feeling and cannot be tested** — **and a room full of feelings is a room that has learnt to produce what a teacher wants.**',
  '**The best of these are in another language.** ⚠ **Arabic refusals that name the decision; a question about where a figure came from, asked in Arabic, four times since January** — **because the distinction the English unit taught is not in the English: it is in the refusing, and it travels.**',
  '**Evidence is a count or a consequence.** ⚠ **Nine of eleven letters; three errors in a fortnight; two decisions changed by two answers of _I do not know_** — **and a change with no count and no consequence is a resolution and not a change.**',
  '**_I have nothing_ is a legitimate answer and the most useful one in the room.** ⚠ **A course that improves somebody\'s English has done what it said it would do** — **and a student who looks for a fortnight and reports nothing has performed the move the whole course is about, on the course itself.**',
  '**Some of your changes are not yours.** ⚠ **A supervisor asking three other candidates for a plan; a clerk filing a sheet without being asked twice** — **and a report that claims those has taken credit for a consequence, which is 22.7.**',
  '**And the change that is hardest to report is the one about other people.** ⚠ **_I have stopped asking juniors to do things I cannot demonstrate._** **Eleven years of _tighten it_** — **and the evidence is two instructions withdrawn, which is a smaller claim than it sounds and is checkable by the juniors.**',
  '**Pronunciation.** 🔊 **Track 24.6** **Say the practice flat, with the date and the count carrying the stress, and no stress on _I_.** ⚠ **Stress on _I_ turns a practice into a claim about a person** — **and this is the last pronunciation note in the course, and it is the same one as the first.**',
  '**Practise:** Practice, or feeling? **1** _I am more confident_  **2** _sixty certificates read aloud since June_  **3** _my thinking is clearer_  **4** _nine of eleven Arabic refusals name the decision_  **5** _I have grown professionally_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B says **whether it is a practice or a feeling**, and rewrites the feelings as **a practice, a date and evidence** — or says that there is none. ⚠ **Two rows on each card are practices already** — **and there B names the evidence and asks who could check it.** Change cards.'));
out.push(table(['Card A – the claim as made', 'Card B – the claim as made'], [
  ['_I am more confident when I write._', '_My thinking has become clearer._'],
  ['_⚠ Sixty certificates read aloud before signing, since June._', '_⚠ Nine of eleven Arabic refusals name the decision._'],
  ['_I have grown as a professional._', '_I communicate better with my colleagues._'],
  ['_⚠ Two instructions withdrawn that I had given for a decade._', '_⚠ Nine of nine Saturday sheets filed since February._'],
  ['_I have nothing to report._', '_I write better English and nothing else has changed._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** practice or feeling, the evidence, and who could check it. ⚠ **Rows 2 and 4 on both cards are practices and the room must name the checker** — **a court, a committee, a junior and a clerk, none of whom has read this book.** **Rows 5 are the pair the cycle turns on**: both report nothing outside English, **and both are legitimate, and the room will try to improve them, which is the one thing it must not do.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your own change**: the practice, the date, and the evidence. ⚠ **If there is none, write that, and write what you looked at.** **In this class seven of ten produced a practice, one produced a change that was not his, and two produced nothing after a fortnight of looking** — **and the two wrote down what they had looked at, which is a document and not an absence.**'));
out.push(p('**b**  Swap. Your partner reads **your evidence** and asks **who could check it.** ⚠ **Then the harder question: is the change yours?** — **and in this class three of seven changes turned out to belong to somebody else, which nobody minded and all three had to be asked twice about.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked what four years have changed that is not about English, and Mrs Rizk said her Arabic refusals: she stopped writing the Arabic equivalent of we are unable in November and can date it, because the November letters and the October ones are both in the file, and of the eleven Arabic refusals she has written since, nine name the decision and two name an obstacle, and both obstacles are real. Ms Huda said that is not an English change at all, and Mrs Rizk said it is not, and it is the biggest thing the course has done to her, because the English units taught her to tell a decision from an incapacity and the distinction is not in English. Mrs Oueidat said hers is reading aloud: every certificate of accuracy, aloud, before signing, since June, which is about sixty, and she found three errors in the first fortnight and one of them was a date. Mr Attar said his is a question: he asks where a figure came from, out loud, in meetings, in Arabic, which he had never done at twenty-two and did first in January, four times since, and twice the answer was I do not know, and the two I do not knows have changed two decisions. Mrs Khoury said hers is about other people: she has stopped asking juniors to do things she cannot demonstrate, after eleven years of telling people to tighten it, and the evidence is one move taught and two instructions withdrawn. Dr Qabbani said he has nothing: four years, better English, and no practice outside it that has changed, and he has looked for a fortnight and is saying so because the room would otherwise hear nine answers and assume there were ten. Ms Huda said that is the most useful answer in the cycle, because a course that improves somebody\'s English has done what it said it would, and a room in which everybody reports a transformation has learnt to produce the answer a teacher wants. Mrs Tarabishi said hers is the plan, kept for everything over two thousand words since January, and the evidence is that her supervisor has asked the other three candidates for one, which is not her achievement. Mr Tayara said his is a filing cabinet, and nine of nine Saturday sheets filed since February against nineteen of fifty-two last year, and the change is not his either. And Mrs Khoury said the thing she will take away is Dr Qabbani\'s fortnight of looking._'));
out.push(p('**Listener task:** write your partner\'s practice, their evidence, and the person who could check it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Khoury wrote about the change outside English. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _note on what four years changed that is not about English_ · _one practice, with its evidence_ · **15 March**',
  '**The practice.** **I have stopped asking juniors to do things I cannot demonstrate.** ⚠ **Eleven years of _tighten it_, _make it sharper_, _give it more authority_** — **three instructions I had given perhaps a thousand times between them and could not have carried out on request.**',
  '**The date, and how I can date it.** **The second week of March 2026.** ⚠ **It is datable because of 24.1: I spent forty minutes watching myself work, which I had never done in eleven years** — **and the instructions went out of my vocabulary that week and have not come back.**',
  '**The evidence.** **One move taught, in one sentence, with a drill, to one junior.** ⚠ **And two instructions withdrawn: I have told two reporters that _give it more authority_ was not a usable instruction and that I should have said what I meant, which was _put the figure in the first sentence_.** **Both of them asked why I had not said that before.**',
  '**What this has to do with English, which is nothing.** **The move I handed on is an English move and the practice is not.** ⚠ **Not asking people to do what you cannot demonstrate is a rule about teaching, and I shall apply it in Arabic for the rest of my working life** — **and I did not get it from a language unit: I got it from being made to say in one sentence what I actually do.**',
  '**What it has cost.** **Two of my three standing instructions, which were useful to me and not to anybody else.** ⚠ **_Tighten it_ saved me about four minutes a piece** — **and it transferred the whole of the work to somebody who could not do it, which is what I had been calling training.**',
  '**Who could check this.** **The two reporters, and the three juniors I shall work with between now and June.** ⚠ **Not Ms Huda, not this class, and not me** — **and a change that only its author can confirm is 24.5 and not this cycle.**',
  '**What I am not claiming.** **That I am a better teacher.** ⚠ **I have made one teaching worse, in 24.2, by handing on thirteen words to a nineteen-year-old** — **and both things are true in the same fortnight, which is the honest arithmetic and is not a paradox.**',
  '**And the answer I keep thinking about, which is not mine.** **Dr Qabbani looked for a fortnight and found nothing and said so in a room where nine of us had something.** ⚠ **That is 12.1 performed on the course, in the last unit, by somebody nobody had asked** — **and it is better evidence that this method is now his than any of the nine practices we reported, including mine.**',
  '**And the one I have not reported, because I cannot test it.** **I think I have become harder to work for.** ⚠ **Two juniors have told me that I ask more exact questions than I did and one of them said it in a tone I could not read** — **and there is no count behind this and no witness, so it is not in the cycle and it is in this paragraph, where a reader can see that I know the difference.**',
]));
out.push(item('1', 'What three instructions has she stopped giving, and what did two reporters ask?'));
out.push(item('2', 'What does she say the practice has cost her?'));
out.push(item('3', 'Who could check the change, and who could not?'));
out.push(writers([
  'A note on a change outside English: **the practice, named as a practice** → **the date, and how you can date it** → **the evidence, as a count or a consequence** → **what this has to do with English, which may be nothing** → **what it has cost** → **who could check it** → **what you are not claiming** → **and the answer in the room that was not yours.**',
  '⚠ **Name the practice as a thing you do or have stopped doing.** _I have stopped asking juniors to do things I cannot demonstrate._ **_I am a better teacher_ cannot be checked by anybody** — **and the practice can be checked by three juniors who have never heard of this course.**',
  '**Date it, and say how you can.** ⚠ _The second week of March, because that is when I spent forty minutes watching myself work._ **A change with no date is a resolution** — **and the way you can date it is usually an event, which is the sentence a reader will remember.**',
  '**Say what the change has cost, in the currency you were using before.** ⚠ _"Tighten it" saved me about four minutes a piece._ **A change that costs nothing was not a change** — **and naming the four minutes is what stops the note being a congratulation.**',
  '⚠ And **report the answer in the room that was better than yours.** _He looked for a fortnight, found nothing, and said so where nine of us had something._ **A note that reports only its writer\'s own finding has missed the cycle\'s best evidence** — **and the best evidence that a method belongs to somebody is that they use it against the method.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own note (120 words or more).'));
out.push(p('**The practice.** **I have ______________.** ⚠ **______________ years of ______________.**   **The date, and how I can date it.** **______________.** ⚠ **It is datable because ______________.**   **The evidence.** **______________.** ⚠ **______________.**   **What this has to do with English.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A practice, not a feeling',
  'A date, with the reason you can date it',
  'Evidence that is a count or a consequence',
  'The name of somebody outside this class who could check it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their evidence**, and the room says who could check it and whether the change is theirs.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the practice, the date, the evidence, what it has to do with English, what it cost, who could check it, what you are not claiming, and the answer in the room that was not yours.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a practice and not a feeling, a date with its reason, and the name of somebody outside this class who could check it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many produced a practice?** **Seven of ten; one produced a change that was not his; and two produced nothing after a fortnight of looking** — **and the two are to be heard without comment and their documents kept, because what they looked at is a record.** **Then: who could check each change?** **A court, a committee, two reporters, a clerk and three juniors** — **and not one of the checkers has read this book.**'));
out.push(hw('**Write your change with its practice, date and evidence, and then show it to the person who could check it.** ⚠ **Then the harder half: ask them whether they had noticed.** **In this class seven asked and four were told yes, two were told no, and one was told that the change had been noticed and attributed to something else entirely.** **Bring what they said.** **24.4 names the one thing you would take out of this course**, so come with a replacement already written.'));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  The one thing I would take out'));
out.push(p('**Function:** naming the one thing you would take out of this course   ·   **Grammar:** the criticism made specific, with a replacement attached   ·   **Pronunciation:** the criticism said without apology and without heat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the one thing you would take out of this course.** ⚠ **One, named, with the cost to you** — **and your teacher writes the ten on the board and asks for the replacement at once, in the same breath.** **In this class six of ten had a replacement on the first attempt and four produced a complaint** — **and the four were asked to sit down and write one, which took between two and eleven minutes.**'));
out.push(board('Take out: the silence about examinations.', 'Put in: the mapping cycle, at B1.'));
out.push(p('**b**  Which two are criticisms with replacements? **1** _There is too much writing in this course._  **2** _Take the mediation cycle out of position seven and put it at position three, so that the writing answers it._  **3** _I did not enjoy the grammar sections._  **4** _Take the four-year silence about examinations out and put the mapping cycle at B1, where the deadline actually falls._  **5** _Some of the units are too long._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a criticism needs?   **A** evidence that others agree   **B** **a named thing, a cost, and a replacement**   **C** a polite opening'));
out.push(p('**b**  Listen again. **1** What does Mrs Ajouz say she would take out, and what does she say about Unit 21?   **2** What does Ms Huda say she does with the ten criticisms?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  Ten things to take out', [
  ['Ms Huda', 'The one thing each of you would take out. Mrs Ajouz.'],
  ['Mrs Ajouz', '⚠ **The four years of silence about examinations, and I asked about it in 1.1 and was given no good answer.** **Unit 21 is the answer and it arrives three weeks before the end** — **and what it cost me is fourteen months, two test fees and ninety hours on one quarter of one paper.**'],
  ['Ms Huda', 'And the replacement?'],
  ['Mrs Ajouz', '⚠ **The mapping cycle at B1, where the deadline actually falls, and not at C1 where it is a valediction.** **Not the whole unit** — **one cycle, four pages, the two tasks that do not transfer and the two habits that cost marks, which is all I needed and which I could have had in 2024.**'],
  ['Mr Attar', 'Mine is the board clinic.'],
  ['Mr Attar', '⚠ **Three minutes at the end of every report stage, eighty-four times in this book, which is four hours of a hundred and twenty.** **Replacement: the same three minutes spent on the listener task of the next cycle** — **and I know the answer to this one, which is that the clinic is where the room hears its own mistakes, and I am saying it anyway because the question was what I would take out.**'],
  ['Mrs Oueidat', 'Mine is a word.'],
  ['Mrs Oueidat', '⚠ **_Mediate._** **It is the title of twelve cycles and it is the wrong word for what they do: nothing in them is mediation and all of them are a letter to the person nobody has written to.** **Replacement: _Review and Report_, which is dull and accurate** — **and the cost of the word is that I skipped three of them in Book 1 because I thought they were about conflict resolution.**'],
  ['Mrs Khoury', 'And mine is the Language box.'],
  ['Mrs Khoury', '⚠ **At A2 and B1, not here.** **Eight paragraphs of reasons where a beginner needs six documents and a drill** — **which is 24.1, and it is the only criticism of mine that has four years of evidence behind it and a replacement I could write this afternoon.** **Replacement: at A2, six documents and one sentence; the reasons move to B2, where there is something underneath them.**'],
  ['Ms Huda', '⚠ **I shall say what happens to these, because it is a fair question and it has an answer.** **I write them down, verbatim, with the student\'s name and the cost** — **and they go to whoever wrote this course, which is 24.6, and three criticisms from the B2 class of 2024 are in the book this room is holding.**'],
  ['Mr Shihabi', 'Which three?'],
  ['Ms Huda', '⚠ **The seven-cycle unit instead of eight, which came from a student who could not finish a unit in a fortnight.** **The figure in every house model, which came from a reporter who said the models read like essays.** **And the _I cannot yet_ box, which came from a student who said the course never asked what she still could not do** — **and that box is now in all four levels and I have no idea whether she knows.**'],
  ['Mrs Tarabishi', 'That is a strange thing to be told at the end.'],
  ['Mrs Khoury', '⚠ **It is the thing that makes 24.6 a real document rather than an exercise, and the room should notice when it was told: after four years, in the last fortnight, in a cycle about criticism.** **Not in Unit 1, where it would have produced ten criticisms a week for four years** — **and that is either good design or a happy accident, and I am not sure which and have asked.**'],
  ['Mr Tayara', 'And the criticisms that are wrong?'],
  ['Ms Huda', '⚠ **They go up as well, with no comment of mine.** **I am not the filter and I have been wrong about which ones were wrong** — **the figure in the house model is the one I argued against in 2024, and it is the single thing in these four books that students mention most.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is the shape of the four replacements in this room that are any good.** **All four move something earlier.** **Not one of us wants anything removed** — **and the room should notice what that means: four years of criticism, from ten people who have paid for it in hours, and the whole of it is about order.**'],
]));
out.push(sp());
out.push(box('Language box – the criticism with a replacement', [
  '**Name the thing, the cost, and the replacement, in that order and in one breath.** ⚠ **_Take the four-year silence about examinations out; put the mapping cycle at B1; it cost me fourteen months and ninety hours._** **A criticism with no replacement is a complaint** — **and in this room four of ten produced one and all four wrote a replacement when asked, in between two and eleven minutes.**',
  '**Name a thing small enough to be moved.** ⚠ **One cycle, four pages, a word, a box, three minutes of a stage** — **and _too much writing_ and _some units are too long_ cannot be acted on by anybody, which is what makes them complaints whatever their truth.**',
  '**Say the criticism even when you can answer it yourself.** ⚠ **_I know the clinic is where the room hears its own mistakes, and I am saying it anyway, because the question was what I would take out._** **A criticism withheld because it has an answer is a criticism the course never receives.**',
  '**A word can be the thing.** ⚠ **_Mediate_ is the title of twelve cycles and nothing in them is mediation** — **and the cost was three cycles skipped in Book 1 by somebody who thought they were about conflict resolution, which is a real cost measured in pages.**',
  '**And the criticisms go up, including the wrong ones.** ⚠ **Written down verbatim, with the name and the cost, to whoever wrote the course** — **and three criticisms from a class of 2024 are in these books: the seven-cycle unit, the figure in every model, and the _I cannot yet_ box.**',
  '**Pronunciation.** 🔊 **Track 24.8** **Say the criticism flat, with no apology in front of it and no heat in it.** ⚠ **_I may be wrong about this, but_ is 22.3\'s softening, and heat makes the criticism about the speaker** — **and the thing being criticised is a four-page cycle, which has no feelings and can be moved.**',
  '**Practise:** Criticism, or complaint? **1** _too much writing_  **2** _move the mediation cycle to position three_  **3** _I did not enjoy the grammar_  **4** _put the mapping cycle at B1_  **5** _some units are too long_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criticism from the card. B says **whether it names a thing that can be moved**, and gives **the replacement and the cost.** ⚠ **Two rows on each card are complete criticisms already** — **and there B says what the replacement would cost the course.** Change cards.'));
out.push(table(['Card A – the criticism as made', 'Card B – the criticism as made'], [
  ['_There is too much writing in this course._', '_Some of the units are too long._'],
  ['_⚠ Put the mapping cycle at B1, not at C1._', '_⚠ Move the mediation cycle from seven to three._'],
  ['_I did not enjoy the grammar sections._', '_The reading passages are not interesting enough._'],
  ['_⚠ Change the word_ mediate: _nothing in those cycles is mediation._', '_⚠ Replace the Language box at A2 with six documents and a drill._'],
  ['_The course should be shorter._', '_I would change the order of the four books._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** movable or not, the replacement, and what it would cost. ⚠ **Rows 2 and 4 on both cards are complete criticisms and the room must price each replacement** — **four pages at B1, a reordered unit, a word in twelve titles, and eight paragraphs removed from two levels.** **Rows 5 are the pair the cycle turns on**: one is too large to act on and one is large and precise, **and the room should decide which, and will divide.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your one thing**: the thing, the cost to you, and the replacement. ⚠ **The replacement must be something a person could do to the book.** **In this class the ten things were one cycle, one box, one word, three minutes of a stage, a unit\'s position, two orders of books and three complaints that became criticisms when a replacement was written** — **and the average replacement was eleven words long.**'));
out.push(p('**b**  Swap. Your partner reads **your replacement** and asks **what it would cost the course.** ⚠ **Then the harder question: does your replacement move something earlier?** — **and in this class four of four good replacements moved something earlier, and nobody asked for anything to be removed.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked for the one thing each of them would take out. Mrs Ajouz said the four years of silence about examinations, which she had asked about in 1.1 and been given no good answer to, and Unit 21 is the answer and it arrives three weeks before the end, and what it cost her is fourteen months, two test fees and ninety hours on one quarter of one paper; and her replacement is the mapping cycle at B1, where the deadline actually falls, not the whole unit but one cycle of four pages. Mr Attar said his is the board clinic, three minutes at the end of every report stage, eighty-four times in the book, which is four hours of a hundred and twenty, and his replacement is the same three minutes on the listener task of the next cycle, and he knows the answer to his own criticism and is saying it anyway because the question was what he would take out. Mrs Oueidat said hers is a word, mediate, which is the title of twelve cycles and is the wrong word for what they do, and her replacement is Review and Report, which is dull and accurate, and the cost of the word is three cycles she skipped in Book 1 because she thought they were about conflict resolution. Mrs Khoury said hers is the Language box at A2 and B1, eight paragraphs of reasons where a beginner needs six documents and a drill, with the reasons moved to B2. Ms Huda said she writes them down verbatim with the student\'s name and the cost, and they go to whoever wrote the course, and three criticisms from the B2 class of 2024 are in the book this room is holding. Mr Shihabi asked which three, and the seven-cycle unit instead of eight, the figure in every house model, and the I cannot yet box, which is now in all four levels. Mrs Tarabishi said that is a strange thing to be told at the end, and Mrs Khoury said it is what makes 24.6 a real document rather than an exercise. Mr Tayara asked about the criticisms that are wrong, and Ms Huda said they go up as well with no comment of hers, because she is not the filter and has been wrong about which ones were wrong. And Mrs Khoury said the thing she will take away is the shape of the four replacements in the room that are any good, because all four move something earlier and not one of them asks for anything to be removed, which is what four years of criticism from ten people who have paid for it in hours comes to: the whole of it is about order._'));
out.push(p('**Listener task:** write your partner\'s thing, their replacement, and what it would cost the course.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Khoury\'s criticism, written out in full. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _the one thing I would take out, with its replacement_ · _written for whoever wrote this course_ · **22 March**',
  '**The thing.** **The Language box, at A2 and B1 only.** ⚠ **Eight paragraphs of reasons at the head of every cycle, in two levels where the reasons cannot be used** — **and I am not asking for it to be taken out of B2 or C1, where it is the best part of the page.**',
  '**What it cost me.** **Two years of having the reason before I had the move.** ⚠ **I could explain the finding-as-a-fact move in 2023 and I did not reliably do it until 2025** — **and I spent a great deal of A2 and B1 reading explanations of things I could not yet perform, which felt like progress and was not.**',
  '**The evidence that it cost me that, rather than my simply being slow.** **Miss Dandashi has the move after four days and cannot explain it.** ⚠ **Ms Huda has taught it sixty times at A2 and has never explained it once** — **and her sixty learners do it, which is a comparison of sixty against one and is the only evidence I have that is not about myself.**',
  '**The replacement, which somebody could do to the book.** **At A2 and B1: six documents and one sentence in place of the box.** ⚠ **The six documents are the drill, the sentence is the move in the learner\'s own words, and the reasons move to the B2 cycle that recycles the same function** — **which exists already, in every case, because the series was built that way.**',
  '**What the replacement would cost the course.** **Eight paragraphs a cycle across two levels, which is about a hundred and seventy pages.** ⚠ **And it would cost the teacher the thing teachers like: the part of the lesson where the room nods.** **I have taught for eleven years and I know exactly what I would be giving up.**',
  '**What I am not saying.** **That the explanations are wrong.** ⚠ **They are right, they are the best prose in the four books, and at B2 they are what makes the cycle work** — **and the criticism is entirely about where they are, which is 24.4\'s own instruction and I notice that all four of the usable criticisms in this room are about order.**',
  '**Who disagrees with me, and their ground.** **Mrs Ajouz, who says the explanations are the reason she stayed.** ⚠ **She arrived with a B2 from somewhere else and no method, and the reasons gave her a way of seeing what the drills were for** — **and if her case is the common one, I am wrong, and I cannot tell from inside one class of ten.**',
  '**And the thing I shall not pretend.** **This is the criticism of somebody who has just discovered the drill, three weeks before leaving.** ⚠ **Four years of explanations are what made me able to notice the drill at all** — **and I do not know how to write a course that produces this finding earlier, which is why the replacement is a page order and not a philosophy.**',
  '**And the one test of this criticism that I can offer.** **Give the A2 drill to ten adults with no method and the A2 box to ten more, and look at what they do in a fortnight.** ⚠ **Twenty learners, four pages, one fortnight** — **and nobody in four books has run it, so the strongest criticism I have is also an untested one, which I should like printed beside it wherever it goes.**',
]));
out.push(item('1', 'What is the one thing, and in which levels only?'));
out.push(item('2', 'What evidence does she give that is not about herself?'));
out.push(item('3', 'Who disagrees with her, and on what ground?'));
out.push(writers([
  'A criticism with a replacement: **the thing, named small enough to be moved** → **what it cost you** → **the evidence that it was the thing and not you** → **the replacement, as something a person could do to the book** → **what the replacement would cost** → **what you are not saying** → **who disagrees and their ground** → **and the thing you will not pretend.**',
  '⚠ **Name the thing with its boundaries.** _The Language box, at A2 and B1 only._ **A criticism of a whole book cannot be acted on** — **and the boundaries are what turn a complaint into an instruction, because they tell the writer exactly how many pages are in question.**',
  '**Give evidence that is not about yourself.** ⚠ _Sixty learners who were never given the reason, against one who was._ **A criticism supported only by the writer\'s own experience is indistinguishable from the writer being slow** — **and this is the one place in the course where _n_ of one is not enough.**',
  '**Price the replacement, including what it costs the teacher.** ⚠ _About a hundred and seventy pages, and the part of the lesson where the room nods._ **A replacement with no price is a wish** — **and naming what you would be giving up yourself is what makes it a proposal, which is 22.4.**',
  '⚠ And **give the strongest disagreement and name the person who holds it.** _Mrs Ajouz says the explanations are the reason she stayed, and if her case is the common one I am wrong._ **A criticism with no opposition in it has not been thought about** — **and the sentence admitting that you cannot tell from inside one class of ten is the sentence that makes the rest of it usable.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own criticism (120 words or more).'));
out.push(p('**The thing.** **______________, at ______________ only.** ⚠ **______________.**   **What it cost me.** **______________.** ⚠ **______________.**   **The evidence that it cost me that, rather than my being slow.** **______________.**   **The replacement, which somebody could do to the book.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The thing named with its boundaries',
  'A cost in hours, months or pages',
  'Evidence that is not about yourself',
  'A replacement somebody could carry out, with its price',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their replacement**, and the room says what it would cost and whether it moves something earlier.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole criticism (260 words or more): the thing with its boundaries, the cost, the evidence that is not about you, the replacement, its price, what you are not saying, who disagrees and why, and what you will not pretend.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a thing with boundaries, a replacement with a price, and one disagreement with the name of the person who holds it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many criticisms had replacements on the first attempt?** **Six of ten, and the four complaints became criticisms in between two and eleven minutes of writing** — **which is the whole of the difference between the two words.** **Then: how many replacements move something earlier?** **Four of four** — **and nobody in this room asked for anything to be removed, which should be the last thing said in the cycle.**'));
out.push(hw('**Write your criticism in full, with the replacement priced, and give it to your teacher to send on.** ⚠ **Then the harder half: find the person in this room most likely to disagree with you and ask them for their ground, and put it in the document in their words.** **In this class nine of ten found a disagreement and six changed something in their own criticism because of it, and one withdrew hers.** **Bring the disagreement.** **24.5 says what you cannot yet do, for the last time**, so bring the list and a name beside each line.'));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  What I cannot yet do, for the last time'));
out.push(p('**Function:** saying what you cannot yet do, in testable terms, with no next teacher to hand it to   ·   **Grammar:** the thing, the test, the date and the witness   ·   **Pronunciation:** the line said as an appointment'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you cannot yet do, and the name of the person who will tell you when you can.** ⚠ **A name, not a role.** **In this class ten things were named and three students could not name anybody at all** — **and your teacher writes the ten lines on the board with the three blanks left blank, because a line with no name beside it is the finding of the cycle.**'));
out.push(board('I cannot hold a position at speed in a room.', 'Chair the committee in June. The deputy will tell me.'));
out.push(p('**b**  Which two are testable? **1** _I need to improve my speaking under pressure._  **2** _I cannot hold a position in English against somebody senior in a room; I shall chair the production committee in English in June and the deputy editor has agreed to tell me whether I did._  **3** _My writing could be more fluent._  **4** _I have written nothing over twelve hundred words in English; I shall write three thousand on the subbing queue for the trade monthly by September, and its editor will refuse it if it is bad._  **5** _I want to keep working on my listening._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a _cannot yet_ line needs, now that there is no next teacher?   **A** a plan of study   **B** **a test, a date and a named witness who is not a teacher**   **C** a lower expectation'));
out.push(p('**b**  Listen again. **1** What has changed about this list for the first time in four years?   **2** What does Mrs Khoury say about her third line, and who is the witness?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  No next teacher', [
  ['Ms Huda', 'You have written this list at every level. What is different?'],
  ['Mrs Khoury', '⚠ **There is nobody to give it to.** **At A2 I handed it to the B1 teacher, at B1 to the B2 teacher, and at B2 to you** — **and in three weeks there is no next teacher, so the list has to be written to somebody who is not a teacher or it is a letter to myself, which is the same as not writing it.**'],
  ['Ms Huda', 'So what goes on each line?'],
  ['Mrs Khoury', '⚠ **Four things: the thing, the test, the date, and the name of the person who will tell me.** **_I cannot hold a position in English against somebody senior in a room._** **Test: chair the production committee in English.** **Date: June.** **Name: the deputy editor, who has agreed and who does not know he is the fourth item on a list.**'],
  ['Mr Shihabi', 'Why a name and not a role?'],
  ['Mrs Khoury', '⚠ **Because a role cannot be asked and a name can refuse.** **_Somebody at work will tell me_ is the sentence three people in this room have written and it means nobody** — **and the asking is the whole of it: I had to go to the deputy editor and say that I wanted to be told, which took eleven words and about two days of not doing it.**'],
  ['Mrs Oueidat', 'And if they say no?'],
  ['Mrs Khoury', '⚠ **Then that is the result and the line stays on the list unwitnessed, which is better than a line with a role on it.** **One of my three asked for a week to think about it** — **the trade monthly\'s editor, who said that refusing a piece of mine would cost him something, which had not occurred to me and is the most honest thing anybody said to me this month.**'],
  ['Dr Qabbani', 'Three lines is not many.'],
  ['Mrs Khoury', '⚠ **Three is what I can test in a year and the list is not an inventory of my faults.** **At A2 my list had eleven lines and nine of them were the same line** — **and the discipline of a test and a date is what brings a list of eleven down to three, because two thirds of what a student cannot do cannot be tested by anybody.**'],
  ['Mrs Tarabishi', 'What is your third line?'],
  ['Mrs Khoury', '⚠ **_I cannot teach a move without explaining it._** **Test: three juniors, drills only, no reasons, over the next term.** **Date: the end of the summer.** **And the witnesses are the three juniors, who do not know they are a test and must not be told** — **because a junior who knows will tell me what I want to hear, which is what juniors do and is what eleven years of _tighten it_ were built on.**'],
  ['Mr Attar', 'That one has no date you control.'],
  ['Mrs Khoury', '⚠ **It has no date I control and a test I cannot fail honestly, which Mr Attar has just found in about four seconds and I had not seen in four days.** **If I explain, I shall know, and nobody else will** — **so the line needs a fourth element I have not got, and I have written _witness: none, and I shall report it in September_, which is the weakest line on my list and is the one I shall work hardest on.**'],
  ['Mr Tayara', 'Does the list go anywhere at all?'],
  ['Ms Huda', '⚠ **To the three people named on it, which is where a list has always gone, and not to me.** **This is the first time the course has asked for a document with no teacher at the end of it** — **and the room should notice that the four levels have spent four years handing lists forward and that the practice stops here, which is either the end of the method or the beginning of it being theirs.**'],
  ['Mrs Rizk', 'Which do you think?'],
  ['Mrs Khoury', '🔊 ⚠ **I think the three names are the answer and the list is not.** **A deputy editor, an editor of a trade monthly and three juniors who will never be told** — **none of them has read a page of this and all five are now holding a piece of it** — **and that is what handing it on turns out to mean, which is not what I thought it meant in the first cycle of this unit, when I believed it meant explaining.**'],
]));
out.push(sp());
out.push(box('Language box – the _cannot yet_ list with no next teacher', [
  '**Four things on every line: the thing, the test, the date, and the name of the person who will tell you.** ⚠ **_I cannot hold a position against somebody senior in a room; chair the production committee in English; June; the deputy editor, who has agreed._**',
  '**A name and not a role.** ⚠ **A role cannot be asked and cannot refuse.** **_Somebody at work will tell me_ means nobody** — **and three students in this room wrote exactly that, and the three blanks on the board are the finding of the cycle.**',
  '**The asking is the work.** ⚠ **Eleven words to the deputy editor and two days of not saying them** — **and one of the three asked for a week to think about it, because refusing a piece would cost him something, which the writer had not considered.**',
  '**Three lines, not eleven.** ⚠ **A list is not an inventory of faults: it is what can be tested in a year** — **and two thirds of what anybody cannot do cannot be tested by anybody, which is what brings eleven lines down to three.**',
  '**A test you cannot fail honestly is not a test.** ⚠ **_Teach three juniors with drills only_ has no witness but the writer** — **and the honest entry is _witness: none_, which marks the weakest line on the list rather than hiding it.**',
  '**And the list goes to the people named on it.** ⚠ **Not to a teacher, because there is not one** — **and five people who have never read a page of this are now holding a piece of it, which is what handing it on turns out to mean.**',
  '**Pronunciation.** 🔊 **Track 24.10** **Say the line as an appointment: the thing flat, the date stressed, and the name last and clearly.** ⚠ **A _cannot yet_ said with a fall at the end is a confession and invites sympathy** — **and said as an appointment it is a thing in a diary, which is what it now is, because somebody has agreed to it.**',
  '**Practise:** Testable, or not? **1** _improve my speaking under pressure_  **2** _chair the committee in June; the deputy will tell me_  **3** _be more fluent_  **4** _three thousand words by September; the editor will refuse it_  **5** _keep working on my listening_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the line from the card. B says **whether it can be tested**, and supplies **the test, the date and a name** — or says **that there is no possible witness.** ⚠ **Two lines on each card are complete already** — **and there B says who had to be asked and what the asking cost.** Change cards.'));
out.push(table(['Card A – the line as written', 'Card B – the line as written'], [
  ['_I need to improve my speaking under pressure._', '_My writing could be more fluent._'],
  ['_⚠ Chair the committee in English in June; the deputy editor has agreed._', '_⚠ Three thousand words by September; the editor will refuse it if it is bad._'],
  ['_I want to keep working on my listening._', '_I should read more widely._'],
  ['_⚠ Teach three juniors with drills only; witness: none._', '_⚠ Interpret one civil hearing without notes; the registrar will tell me._'],
  ['_Somebody at work will tell me._', '_I shall know myself when I can do it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** testable or not, with the test, the date and the name. ⚠ **Rows 2 and 4 on both cards are complete, and the room must say who was asked and what the asking cost** — **and one of the four has _witness: none_ written on it, which is a complete line because it names its own weakness.** **Rows 5 are the pair the cycle turns on**: both are sentences three people in this room wrote, **and both mean nobody.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **three lines**: the thing, the test, the date, and the name. ⚠ **Then go and ask the three people, before the next cycle.** **In this class twenty-eight of thirty lines were written and twenty-two names were asked within the week** — **nineteen agreed, two asked for time, and one refused, and the refusal is on the board with the others.**'));
out.push(p('**b**  Swap. Your partner reads **your three lines** and asks **which one you cannot fail honestly.** ⚠ **Then the harder question: which of your witnesses has read a page of this course?** — **and in this class two of twenty-two had, and both were in this room, and both were asked to be replaced by somebody outside it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked what is different about the list this time, and Mrs Khoury said there is nobody to give it to: at A2 she handed it to the B1 teacher, at B1 to the B2 teacher and at B2 to Ms Huda, and in three weeks there is no next teacher, so the list has to be written to somebody who is not a teacher or it is a letter to herself. Ms Huda asked what goes on each line, and four things: the thing, the test, the date and the name of the person who will tell her, so that the first line is that she cannot hold a position in English against somebody senior in a room, the test is chairing the production committee in English, the date is June and the name is the deputy editor, who has agreed and does not know he is the fourth item on a list. Mr Shihabi asked why a name and not a role, and because a role cannot be asked and a name can refuse, and somebody at work will tell me is the sentence three people in the room wrote and it means nobody, and the asking is the whole of it. Mrs Oueidat asked what happens if they say no, and then that is the result and the line stays unwitnessed, which is better than a line with a role on it, and one of her three asked for a week to think about it because refusing a piece of hers would cost him something, which she had not considered. Dr Qabbani said three lines is not many, and three is what she can test in a year, and at A2 her list had eleven lines of which nine were the same line. Mrs Tarabishi asked for her third line, and that she cannot teach a move without explaining it, tested on three juniors with drills only, witnessed by juniors who must not be told. Mr Attar said that one has no date she controls, and she said it has no date she controls and a test she cannot fail honestly, which he found in four seconds and she had not seen in four days, so the line says witness: none. Mr Tayara asked whether the list goes anywhere, and Ms Huda said to the three people named on it and not to her, and this is the first time the course has asked for a document with no teacher at the end of it. And Mrs Khoury said she thinks the three names are the answer and the list is not._'));
out.push(p('**Listener task:** write one of your partner\'s lines in full, with the name, and say whether that person has been asked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Khoury\'s list. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _what I cannot yet do_ · _the last list, with no next teacher_ · **29 March**',
  '**How this list is different from the four before it.** **There is nobody to give it to.** ⚠ **A2 to the B1 teacher, B1 to the B2 teacher, B2 to Ms Huda, and C1 to nobody** — **so every line needs a witness who is not a teacher, or the list is a letter to myself and I have written four of those and kept none.**',
  '**Line 1 · The thing.** _I cannot hold a position in English against somebody senior in a room._ ⚠ **Test: chair the production committee in English, which is nine people and about forty minutes.** **Date: June.** **Name: the deputy editor, who has agreed.**',
  '**What asking him cost.** **Eleven words and two days.** ⚠ **_I should like you to tell me afterwards whether I held it._** **Two days of not saying them, in a corridor I walk down eleven times a day** — **and he said yes in four seconds and then asked what _held it_ meant, which I had to define on the spot and which improved the line.**',
  '**Line 2 · The thing.** _I have written nothing over twelve hundred words in English._ ⚠ **Test: three thousand words on the subbing queue for the trade monthly.** **Date: September.** **Name: its editor, who asked for a week before agreeing** — **because, as he said, refusing a piece of mine would cost him something, and that had not occurred to me at all.**',
  '**Line 3 · The thing.** _I cannot teach a move without explaining it._ ⚠ **Test: three juniors, drills only, no reasons, over the next term.** **Date: the end of the summer.** **Witness: none** — **and Mr Attar found the fault in four seconds: if I explain, I shall know and nobody else will, so the test cannot be failed honestly.**',
  '**Why line 3 stays on the list.** **Because it is the thing I most need to be able to do and the hardest to witness.** ⚠ **A list that drops the lines it cannot test has become a list of conveniences** — **and the honest entry is _witness: none, and I shall report it in September_, which marks it as the weakest line rather than hiding it.**',
  '**What is not on the list.** **Eight things that were on my A2 list.** ⚠ **Nine of my eleven A2 lines were the same line in different words** — **and of the eight that have gone, five I can now do and three cannot be tested by anybody, which is the reason a four-year list comes down to three and not the reason I had expected.**',
  '**Where the list goes.** **To the deputy editor, to the monthly\'s editor, and nowhere for line 3.** ⚠ **Not to Ms Huda, who has asked not to be sent it** — **and five people who have never read a page of this course are now holding a piece of it, three of them without knowing.**',
  '**And what I think handing it on means, which is not what I thought three weeks ago.** **Not explaining.** ⚠ **In 24.1 I believed it meant explaining and I handed thirteen words to a nineteen-year-old and caused something I had to go and repair** — **and it turns out to mean putting a piece of it in the hands of somebody who will never know its name, which five people in this document now are.**',
]));
out.push(item('1', 'What does she say asking the deputy editor cost, and what did he ask?'));
out.push(item('2', 'Why does line 3 stay on the list, and what is written beside it?'));
out.push(item('3', 'What has happened to the eight things from her A2 list?'));
out.push(writers([
  'The last list: **how it differs from the four before it** → **each line as the thing, the test, the date and the name** → **what the asking cost** → **the line with no possible witness, and why it stays** → **what is not on the list any more** → **where the list goes** → **and what you now think handing it on means.**',
  '⚠ **Put a name and not a role on every line.** _The deputy editor, who has agreed._ **A role cannot be asked and cannot refuse** — **and _somebody at work will tell me_ is a line with a blank in it, which is why the three blanks on the board are the cycle\'s finding and not its embarrassment.**',
  '**Report what the asking cost, in words and in days.** ⚠ _Eleven words and two days, in a corridor I walk down eleven times a day._ **The cost of asking is the whole difference between a list and a document** — **and it is the part of this cycle another student will recognise before any of the lines.**',
  '**Keep the line you cannot witness, and mark it.** ⚠ _Witness: none, and I shall report it in September._ **A list that drops its untestable lines has become a list of conveniences** — **and the marking is what tells a reader which line you are most afraid of.**',
  '⚠ And **end on what handing it on now means to you, and let it contradict what you said in the first cycle.** _In 24.1 I believed it meant explaining._ **A list that ends on a resolution has ended on the writer** — **and the four years count here only as the thing that produced one correction of a belief.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own list (120 words or more).'));
out.push(p('**How this list is different.** **There is nobody to ______________.** ⚠ **______________.**   **Line 1 · The thing.** _I cannot ______________._ ⚠ **Test: ______________.** **Date: ______________.** **Name: ______________.**   **What asking them cost.** **______________ words and ______________.**   **Line 2 · The thing.** _______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Four elements on every line: thing, test, date, name',
  'A name, never a role',
  'What the asking cost, in words and days',
  'Any line with no possible witness, marked as such',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one line in full, with the name**, and the room says whether that person could refuse.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole list (260 words or more): how it differs, the three lines in full, what the asking cost, the line you cannot witness, what has gone from the earlier lists, where the list goes, and what handing it on now means.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: four elements on every line, a name and not a role, and any unwitnessed line marked and kept.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Three counts on the board.** **Lines written: twenty-eight of thirty.** **Names asked within the week: twenty-two** — **nineteen agreed, two asked for time, and one refused, and the refusal stays on the board with the others.** ⚠ **Then: how many witnesses have read a page of this course?** **Two of twenty-two, both in this room, and both asked to be replaced from outside it** — **because a witness who knows the method will grade the method and not the student.**'));
out.push(hw('**Write your three lines and ask the three people, this week.** ⚠ **Then the harder half: write down what the asking cost you, in words said and days not said** — **and if anybody refuses, keep the line and write _witness: none_ beside it.** **In this class the average was eleven words and about a day and a half, and the longest delay was nine days, by a student who then asked somebody else entirely.** **Bring the three answers.** **24.6 writes the page for whoever teaches this next**, so bring everything: the move, the misunderstanding, the change, the criticism and this list.'));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  The page for whoever teaches this next'));
out.push(p('**Function:** writing the page that goes to whoever teaches this method next   ·   **Grammar:** 260–300 words, to a teacher, about a method, from a student   ·   **Pronunciation:** the page read aloud to somebody who will have to act on it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **who will teach this next, and what they will not know about your four years.** ⚠ **A person or a description, and one thing they cannot know.** **In this class nine of ten could describe the reader and the tenth said _nobody, because it stops with us_** — **and your teacher writes the ten descriptions on the board and strikes every one that is the word _teacher_ on its own.**'));
out.push(board('Dear whoever teaches this next: thank you for everything.', 'Sixty learners who were never told the reason, against one who was.'));
out.push(p('**b**  Which two belong in the page? **1** _Thank you for four wonderful years._  **2** _The move I handed on took four minutes to teach and forty to find, and the finding is the part no cycle asks for._  **3** _I enjoyed the course very much and would recommend it._  **4** _Ms Huda has taught one move sixty times at A2 and has never explained it; her learners do it; I had the reason for two years before I had the move._  **5** _I hope you will continue your excellent work._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the page is made of?   **A** gratitude, honestly expressed   **B** **evidence: counts, dates and documents** — with the thanks in one line at the end if at all   **C** advice about teaching'));
out.push(p('**b**  Listen again. **1** Which sentence of Mrs Khoury\'s page does Ms Huda say she would act on?   **2** What does Mrs Khoury say the page must not contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  Two hundred and eighty-seven words to a stranger', [
  ['Ms Huda', 'Who is the reader of this page?'],
  ['Mrs Khoury', '⚠ **Somebody who has the whole method and none of my four years, and who may be teaching A2 in a town I have never been to.** **She has the book, the key and the drills** — **and what she cannot have is ten students\' worth of what the drills did, which is the only thing I am in a position to give her.**'],
  ['Ms Huda', 'And what is the page made of?'],
  ['Mrs Khoury', '⚠ **Counts, dates and documents, and one line of thanks at the end if there is room.** **Two hundred and eighty-seven words: the move, the misunderstanding, the change outside English, the criticism with its replacement, and one line of what I cannot yet do** — **and not a sentence of advice about teaching anywhere, because I have never taught a language in my life.**'],
  ['Mrs Oueidat', 'Why no advice?'],
  ['Mrs Khoury', '⚠ **Because the one thing I have that she has not is evidence, and the one thing she has that I have not is sixty learners.** **If I send advice she can discount it in four seconds and she will be right** — **and if I send her the sixty-against-one comparison she has to do something with it, because it is her own figure and my own four years in one sentence.**'],
  ['Dr Qabbani', 'Which sentence would you act on?'],
  ['Ms Huda', '⚠ **That one, and I have told her so.** **_You have taught this move sixty times at A2 without once explaining it, and your learners do it; I had the reason for two years before I had the move._** **It is the only sentence in the page that is about me and not about her** — **and I have been doing it for nine years and had never counted the sixty or set it against anybody.**'],
  ['Mr Shihabi', 'And the thanks?'],
  ['Mrs Khoury', '⚠ **One line, last, and I rewrote it four times because every version was longer than the evidence it was attached to.** **_Four years; thank you._** **Three words** — **and the version I started with was sixty words long and would have told a stranger in another town nothing except that I am grateful, which she can assume.**'],
  ['Mrs Tarabishi', 'Is that not cold?'],
  ['Mrs Khoury', '⚠ **It is a page about a method and it is not a letter to Ms Huda, which is the distinction the room will miss and which took me three drafts.** **The letter to Ms Huda is a different document and I have written it and it is not three words long** — **and it goes to her and not to whoever teaches this next, who does not know either of us and should not be asked to read about us.**'],
  ['Mr Attar', 'What must the page not contain?'],
  ['Mrs Khoury', '⚠ **Three things.** **Advice about teaching, which I am not qualified to give.** **A judgement about any student in this room, including me, because the page outlives all of us and the figures do not need names.** **And the course\'s own vocabulary** — **no cycle numbers, no _mediate_, no _declared scope_, because a teacher in another town has the book and does not need my abbreviations for it.**'],
  ['Mr Tayara', 'And what goes in the first line?'],
  ['Mrs Khoury', '⚠ **What the page is, which is 21.6 for the last time.** **_This page is ten students\' worth of evidence about four cycles, from somebody who finished the course in March._** **A reader with four minutes knows in one line whether to read on** — **and in fact she has as long as she likes, and the line costs nothing and is the only thing I am sure of in the page.**'],
  ['Mrs Rizk', 'How do you know it is any good?'],
  ['Mrs Khoury', '🔊 ⚠ **I gave it to the one reader I have who is a teacher and asked which sentence she would act on, and she named one of five.** **One of five, which is the test of a page like this and is a figure I shall keep** — **and the four she did not name are the four that are about me, which I had not noticed until she named the fifth.**'],
]));
out.push(sp());
out.push(box('Language box – the page for the next teacher', [
  '**Say what the page is in the first line.** ⚠ **_This page is ten students\' worth of evidence about four cycles, from somebody who finished the course in March._** **21.6 for the last time** — **and the line costs nothing.**',
  '**Counts, dates and documents.** ⚠ **_Four minutes to teach and forty to find._** **_Sixty teachings without an explanation, against one with._** **_Nine of eleven Arabic refusals._** **What a reader of a method cannot have is other people\'s evidence, and it is the only thing a student is in a position to give.**',
  '**No advice about teaching.** ⚠ **A student who has never taught can be discounted in four seconds, and rightly** — **where a figure from the reader\'s own practice has to be dealt with: it is her sixty and your four years in one sentence.**',
  '**No judgements about individuals and no names.** ⚠ **The page outlives the room** — **and a figure does not need a name to be acted on, and a name in a document like this is a person handed to a stranger.**',
  '**None of this course\'s vocabulary.** ⚠ **No cycle numbers, no titles, no _mediate_, no _declared scope_** — **because the reader has the book and does not need your abbreviations for it, which is 24.1 applied to a document instead of to a beginner.**',
  '**Thanks: one line, last, three words if possible.** ⚠ **_Four years; thank you._** **A page of gratitude tells a stranger in another town nothing except that you are grateful, which she can assume** — **and the letter to your own teacher is a different document and is not three words long.**',
  '**And test it the way 23.6 tests a pair of paragraphs.** ⚠ **Give it to one reader who is a teacher and ask which sentence she would act on** — **and if she names one of five, the other four are about you, which is a measurement and takes four minutes.**',
  '**Pronunciation.** 🔊 **Track 24.12** **Read the page aloud to somebody who will have to act on it, and listen for the sentences that are about yourself.** ⚠ **They are audible: they are the ones you read faster** — **and that is the last thing this course has to say about reading aloud, which it has said in every unit of four books.**',
  '**Practise:** In the page, or not? **1** _thank you for four wonderful years_  **2** _four minutes to teach and forty to find_  **3** _you are an excellent teacher_  **4** _sixty teachings with no explanation_  **5** _I would advise teaching the drills first_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **whether it belongs in the page**, and rewrites the ones that do not **as a count, a date or a document.** ⚠ **Two rows on each card belong already** — **and there B says which figure in them a teacher would have to act on.** Change cards.'));
out.push(table(['Card A – the sentence as written', 'Card B – the sentence as written'], [
  ['_Thank you for four wonderful years._', '_I hope you will continue your excellent work._'],
  ['_⚠ Four minutes to teach the move and forty to find it._', '_⚠ Sixty teachings with no explanation, against one with._'],
  ['_The course changed my life._', '_You are an excellent teacher._'],
  ['_⚠ Nine of eleven Arabic refusals now name the decision._', '_⚠ Three criticisms from the class of 2024 are in this book._'],
  ['_I would advise teaching the drills before the reasons._', '_I think the Language box should move to B2._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** in the page or not, and the figure a teacher would act on. ⚠ **Rows 2 and 4 on both cards belong, and the room must name the figure** — **four and forty, sixty against one, nine of eleven, and three of a class of ten.** **Rows 5 are the pair the cycle turns on**: both are advice from somebody who has not taught, **and one is 24.4\'s criticism, which belongs in the page with a price and not as advice.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the page**: what it is, four pieces of evidence with their figures, one criticism with its replacement, one line of what you cannot yet do, and thanks in a line. ⚠ **260 to 300 words, counted.** **In this class the first drafts ran from a hundred and eighty to five hundred and ten words, and all four of the long ones were long in the same place** — **the gratitude, which averaged ninety words and came down to between three and eleven.**'));
out.push(p('**b**  Swap. Your partner reads **your page** and names **the one sentence they would act on if they were teaching this next year.** ⚠ **Then the harder question: how many of your sentences are about you?** — **and in this class the average was three of five, and the two students whose pages had none were the two who had written the page in the third person by accident.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked who the reader of the page is, and Mrs Khoury said somebody who has the whole method and none of her four years, who may be teaching A2 in a town she has never been to, and who has the book, the key and the drills, and what she cannot have is ten students\' worth of what the drills did. Ms Huda asked what the page is made of, and counts, dates and documents, with one line of thanks at the end if there is room: two hundred and eighty-seven words covering the move, the misunderstanding, the change outside English, the criticism with its replacement, and one line of what she cannot yet do, and not a sentence of advice about teaching anywhere, because she has never taught a language in her life. Mrs Oueidat asked why no advice, and because the one thing she has that the reader has not is evidence, and the one thing the reader has that she has not is sixty learners, so advice can be discounted in four seconds and rightly. Dr Qabbani asked which sentence Ms Huda would act on, and she named the one about sixty teachings with no explanation against one with, which is the only sentence in the page that is about her and not about the writer, and she has been doing it for nine years and had never counted the sixty. Mr Shihabi asked about the thanks, and one line, last, rewritten four times, and the version she started with was sixty words long. Mrs Tarabishi asked whether three words is not cold, and it is a page about a method and not a letter to Ms Huda, which is a different document and is not three words long. Mr Attar asked what the page must not contain, and three things: advice about teaching, judgements about any student including herself, and the course\'s own vocabulary. Mr Tayara asked what goes in the first line, and what the page is. And Mrs Khoury said she gave it to the one teacher she has and asked which sentence she would act on, and she named one of five, and the four she did not name are the four that are about the writer, which Mrs Khoury had not noticed until the fifth was named, and one of five is the test of a page of that kind and is a figure she will keep, and the four that nobody would act on are the four that are about her, which the room was left to notice in silence._'));
out.push(p('**Listener task:** write the sentence you would act on and say how many of your partner\'s sentences are about themselves.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mrs Khoury is sending, with the two notes she wrote on her own copy. The page itself is 287 words. Answer the questions.'));
out.push(model([
  '**TO WHOEVER TEACHES THIS NEXT** · _D. Khoury, finished March 2026_',
  '**What this page is.** **Ten students\' worth of evidence about four cycles, from somebody who finished the course in March.** ⚠ **It contains no advice about teaching: I have never taught a language.**',
  '**On handing a move on.** **I taught one move to a junior of nineteen who had none of this.** ⚠ **Four minutes to teach and forty minutes to find out what the move was, by reading my last six documents against six from four years ago.** **No cycle asks for those forty minutes and they were the whole of it.**',
  '**On the explanation.** **You have taught one move sixty times at A2 without once explaining it, and your learners do it.** ⚠ **I had the reason for two years before I had the move.** **Of the two of us, the one who has never explained it has the better record, and that is your figure and not mine.**',
  '**On the misunderstanding.** **The junior used the move correctly on a document in four days and wrongly on a colleague on the fourth.** ⚠ **My thirteen words did not say who the move was for.** **A sentence that is unambiguous to its author is the fault the course spends a unit on, and I committed it while teaching that unit\'s own method.**',
  '**On what changed outside the English.** **One student stopped writing the Arabic equivalent of _we are unable_ in November: nine of her eleven Arabic refusals since then name the decision.** ⚠ **One read about sixty certificates aloud before signing and found three errors in a fortnight.** **And one looked for a fortnight and found nothing, and said so in a room where nine of us had something.**',
  '**The one thing I would move.** **The Language box at A2 and B1: eight paragraphs of reasons where a beginner needs six documents and a drill.** ⚠ **It would cost about a hundred and seventy pages and the part of the lesson where the room nods.** **One student in ten disagrees with me and her ground is that the reasons are why she stayed.**',
  '**What I cannot yet do.** **Hold a position in English against somebody senior in a room; I shall chair a committee in June and the deputy editor has agreed to tell me.**',
  '**Four years; thank you.**',
  '**Note on my own copy, 1: what I took out, and the count.** ⚠ **Ninety-one words of gratitude, down to three.** **A paragraph naming Ms Huda, which belongs in the other letter.** **Two cycle numbers, 19.1 and 24.1, which mean nothing to a stranger with the same book in front of her under different numbers.** **And one judgement about a student in this room, who is named nowhere in the final version** — **because the page outlives the ten of us and a figure acts without a name.**',
  '**Note on my own copy, 2: the test, and what it found.** ⚠ **I gave it to the one teacher I have and asked which sentence she would act on.** **She named the sixty.** **Four of my five pieces of evidence are about me, and the one that is about her practice is the one that will be acted on** — **and that is the whole method of these two books, performed by accident, on the last document I shall write in this course.**',
]));
out.push(item('1', 'What does the page say it contains no advice about, and why?'));
out.push(item('2', 'Which figure does she describe as the reader\'s and not her own?'));
out.push(item('3', 'How is the criticism in the page qualified?'));
out.push(writers([
  'The page for the next teacher: **what the page is, in one line** → **the move, with the finding time** → **the explanation, as the reader\'s own figure** → **the misunderstanding, with your own sentence named** → **what changed outside the English, as counts** → **the one thing you would move, with its price and its opposition** → **one line of what you cannot yet do** → **and thanks, in a line.**',
  '⚠ **Make the central figure belong to the reader.** _You have taught this sixty times without explaining it, and your learners do it._ **A student\'s own evidence can be admired and set aside** — **and a count from the reader\'s own practice has to be dealt with, which is this page\'s only leverage.**',
  '**Name your own fault and name the unit that forbids it.** ⚠ _My thirteen words did not say who the move was for, and I committed the fault while teaching that unit\'s own method._ **A page with no fault of the writer\'s in it is a report on other people** — **and the fault is the best evidence that the method is hard to hand on.**',
  '**Put the counts in and leave the names out.** ⚠ _One student stopped writing the Arabic equivalent; nine of her eleven refusals since name the decision._ **The page outlives the room** — **and a figure acts without a name, where a name hands a person to a stranger.**',
  '⚠ And **keep the thanks to a line and write the other letter separately.** _Four years; thank you._ **A page of gratitude tells a stranger in another town only that you are grateful, which she can assume** — **and the letter to your own teacher is a different document.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your page (120 words or more).'));
out.push(p('**What this page is.** **______________, from somebody who ______________.** ⚠ **It contains no advice about ______________.**   **On ______________.** **______________.** ⚠ **______________ to ______________ and ______________ to ______________.**   **On the explanation.** **You have ______________, and ______________.** ⚠ **I had ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What the page is, in the first line',
  'One figure that belongs to the reader\'s own practice',
  'No advice, no names, and no vocabulary from this course',
  'Thanks in one line, last',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first line and their thanks**, and the room says whether anything between them could be guessed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260–300 words, counted): what it is, the move with its finding time, the explanation as the reader\'s figure, the misunderstanding with your sentence named, the changes outside English as counts, the one thing you would move with its price and its opposition, one line of what you cannot yet do, and the thanks.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: between 260 and 300 words counted, one figure belonging to the reader, no names and no course vocabulary, and thanks in a line.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **First drafts: a hundred and eighty to five hundred and ten words** — **and all four of the long ones were long in the same place, the gratitude, which averaged ninety words and came down to between three and eleven.** **Then: which sentence would your reader act on?** **One of five, on average** — **and the sentences nobody would act on are the ones about the writer, which the room should be left to notice in silence.**'));
out.push(hw('**Finish the page, count it, and give it to one reader who teaches anything at all** — **and ask which sentence they would act on.** ⚠ **Then the harder half: send it.** **Your teacher will tell you where it goes.** **In this class ten pages were written and nine were sent, and the tenth writer is still cutting the thanks.** **Bring the page and the sentence they named.** **24.7 is the student who arrived at A2 and the one who leaves at C1** — **and it is the last cycle of the last book, so bring the junior you taught, if she will come.**'));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: the student who arrived at A2 and the one who leaves at C1'));
out.push(p('**Function:** mediating between a student who has just arrived and one who is about to leave   ·   **Recycling:** Unit 24   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 2 · Writing Part 2 (the review) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I could not say what was the move.  **2** She used it on a colleague, what my sentence does not forbid.  **3** Not one of those sixty times she explained it.  **4** If I would have known she would use it on a person, I should have said so.  **5** The drill is the method and the reason are a comfort.  **6** Everything I can explain, I can hand on wrong in thirteen words.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE MOVE, FOUR ACCOUNTS** _(the four minutes of 1 March; the Friday of 5 March)_',
  '**Mrs Khoury, who leaves at C1 in three weeks.** _"Thirteen words, and they did not say who the move was for. The Friday is mine."_',
  '**Miss Dandashi, who arrived three weeks ago and is at A2.** _"It is the most useful thing anybody has given me here. I have stopped using it on people."_',
  '**Ms Huda, who has taught the same move at A2 sixty times.** _"I have never explained it and nobody has had a Friday. The drill carries the occasion; a sentence has to say it."_',
  '**The A2 Answer Key, page 41, which nobody in this story has opened.** _"Do not teach the reason at A2. The reason arrives at B2, where there is something underneath it."_',
  '⚠ **All four are accurate.** **The move cannot be handed on without the four years that are under it; the drill can** — **and the C1 student handed on the half of it that is visible to her, which is the reason, because the drill has become invisible.**',
  '**And the thing none of the three has noticed.** **The sentence in the A2 key is in a book Mrs Khoury owns and has owned since 2022** — **and it anticipates exactly what happened on the Friday, which means the series knew and she had never opened the key of a book she had finished.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  Page forty-one', [
  ['Ms Huda', 'Who is owed what?'],
  ['Mrs Khoury', '⚠ **Three things and one of them is a drill.** **Fifteen words to Miss Dandashi with the missing half.** **A visit to Mr Kaddour, which I have made.** **And six documents for the junior, because the sentence was never the right form** — **and the fourth thing, which is not owed to anybody, is that I shall open the key of a book I finished in 2023.**'],
  ['Mrs Khoury', 'Page forty-one.'],
  ['Mrs Khoury', '⚠ **_Do not teach the reason at A2. The reason arrives at B2, where there is something underneath it._** **It is in a book I have owned for four years and have never opened past the exercises** — **and it says, in two sentences, the thing I spent four minutes getting wrong and a fortnight working out.**'],
  ['Ms Huda', 'And what must not be said?'],
  ['Mrs Khoury', '⚠ **That nobody told me.** **It is true: nobody said it to me in four years** — **and it is in a book on my own shelf, so the sentence blames a room full of people for a page I did not turn, which is the eleventh time this course has put me in that position and the first time I have seen it coming.**'],
  ['Mrs Oueidat', 'Is anybody at fault?'],
  ['Mr Shihabi', '⚠ **Nobody, and it is the last time the room will say it.** **Mrs Khoury handed on the visible half, which is what anybody does.** **Miss Dandashi read thirteen words correctly.** **Ms Huda has taught the drill sixty times and had no reason to tell a C1 student what is in the A2 key** — **and the key says it, on page forty-one, and nobody in the story had opened it.**'],
  ['Miss Dandashi', 'May I say what I have done?'],
  ['Miss Dandashi', '⚠ **I have stopped using it on people and I use it on documents, and I did that on the Saturday, before anybody told me anything.** **Mr Kaddour did not speak to me for two days and that was enough** — **and the four minutes is still the most useful thing anybody has given me at that paper, and I have written it on a card and it is in my bag.**'],
  ['Dr Qabbani', 'That is the whole cycle in four sentences.'],
  ['Ms Huda', '⚠ **It is, and the room should notice which of the two of them learnt faster.** **Three weeks against four years** — **and the reason is not that she is cleverer: it is that she had a consequence on the Friday and Mrs Khoury had an explanation in 2023, and a consequence is a better teacher than a reason, which is the sentence this whole course is built on and has never printed.**'],
  ['Mrs Tarabishi', 'Does Miss Dandashi get the reason now?'],
  ['Mrs Khoury', '⚠ **No, and that is the hardest instruction in the unit and it comes from page forty-one.** **She gets six documents and a drill, and the reason waits two years** — **and I want it on the record that I shall find that very hard, because explaining is the thing I am good at and it is the thing she cannot use.**'],
  ['Mr Tayara', 'And the letter to whoever teaches this next?'],
  ['Mrs Khoury', '⚠ **It has a new sentence in it since Monday, and it is the only sentence in the page that is about the book and not about people.** **_Page forty-one of the A2 key says what Unit 24 of C1 spends seven cycles finding out; put it in both books._** **Twenty-one words** — **and Ms Huda says that is the second sentence of mine she would act on, and that the first one is still the sixty.**'],
  ['Mrs Rizk', 'And after three weeks?'],
  ['Mrs Khoury', '⚠ **Miss Dandashi has four years of this in front of her and I have none, which is the arithmetic of the last page of the last book.** **She will be at B2 in 2028 and she will read the reason then and it will be obvious** — **and I shall be chairing a committee in June with a deputy editor who has agreed to tell me whether I held it, which is the only test of mine that has a date on it.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away from four years is Miss Dandashi\'s card.** **Thirteen words in her bag, two of which are wrong and which she has corrected herself by having a bad Friday** — **and if anybody had asked me in 2022 what the end of this course would look like, I should have said a certificate, and it is a card in a nineteen-year-old\'s bag with my sentence on it, and she will not know for two years why it works.**'],
]));
out.push(sp());
out.push(box('Language box – arriving and leaving', [
  '**A move cannot be handed on without the years that are under it; a drill can.** ⚠ **So what goes to a beginner is six documents and one sentence** — **and the reason waits until there is something underneath it, which is two levels away and is the hardest instruction in this unit.**',
  '**What must not be said: _nobody told me_.** ⚠ **It is true — and the sentence is on page forty-one of a key the writer has owned for four years and never opened** — **so saying it blames a roomful of people for a page that was not turned.**',
  '**Nobody is at fault, for the last time.** ⚠ **The leaver handed on the visible half, the arriver read thirteen words correctly, the teacher had no reason to quote an A2 key to a C1 student, and the key had said it since 2022.**',
  '**A consequence is a better teacher than a reason.** ⚠ **Three weeks against four years, and the arriver corrected herself on the Saturday because of a Friday** — **and the leaver had the explanation in 2023 and the practice in 2025.**',
  '**The person who taught a move repairs its consequence.** ⚠ **A visit, made by the teacher and not by the nineteen-year-old** — **and a teacher who lets the learner carry it has taught a second thing, which is that teaching is free.**',
  '**And the page to the next teacher gets one more sentence.** ⚠ **_Page forty-one of the A2 key says what Unit 24 spends seven cycles finding out; put it in both books._** **Twenty-one words, about the book and not about people** — **which is the only kind of sentence a stranger in another town can act on.**',
  '**Pronunciation.** 🔊 **Track 24.14** **Say the two sentences from page forty-one aloud, flat, as a quotation and not as a discovery.** ⚠ **A discovery in the voice makes it your finding** — **and it is not: it is a sentence somebody printed in 2022, which is the last thing this course will ask you to notice.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **the document nobody has opened**, says **what goes to each person**, and names **what must not be said.** ⚠ **On one of the two cards there is no such document**, and B must find that and say what went wrong instead. Change roles with the other pair.'));
out.push(table(['Pair A – the move and the Friday', 'Pair B – the drill and the fortnight'], [
  ['_The leaver: "thirteen words, and the Friday is mine."_', '_The leaver: "I gave her six documents and no sentence."_'],
  ['_The arriver: "the most useful thing anybody has given me."_', '_The arriver: "I did it six times and I do not know why."_'],
  ['_⚠ The teacher: "the drill carries the occasion."_', '_⚠ The teacher: "that is correct, and it will keep."_'],
  ['_⚠ The A2 key, page 41, never opened._', '_⚠ Nothing missing: the drill was the right form._'],
  ['_⚠ Missing: six documents instead of a sentence._', '_⚠ Missing: nothing. The learner asked why and was told._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the document, what goes to each person, and what must not be said. ⚠ **On Pair B nothing is missing and the room will hunt for a document** — **and the finding is that the learner asked why and was told, which is the one thing page forty-one forbids, and the teaching was otherwise perfect.** **The repair is to answer the _why_ with a seventh document.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own teaching from 24.1** and write **the four accounts**: yours, the learner\'s, the person who taught you the move, and one document nobody has opened. ⚠ **Then go and look for the document.** **In this class seven of ten found one and four of the seven found it in a book they owned** — **and two of the four found the exact sentence they had spent a fortnight working out.**'));
out.push(p('**b**  Swap. Your partner says **what goes to each person** and names **the sentence you must not write.** ⚠ **In this class that sentence was, six times in ten, _nobody told me_.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Ms Huda asked who is owed what, and Mrs Khoury said three things and one of them is a drill: fifteen words to Miss Dandashi with the missing half, a visit to Mr Kaddour, which she has made, and six documents for the junior, because the sentence was never the right form; and a fourth thing owed to nobody, which is that she will open the key of a book she finished in 2023. Page forty-one says do not teach the reason at A2, because the reason arrives at B2 where there is something underneath it, and it is in a book she has owned for four years and has never opened past the exercises. Ms Huda asked what must not be said, and that nobody told her: it is true, nobody said it to her in four years, and it is in a book on her own shelf, so the sentence blames a room full of people for a page she did not turn. Mrs Oueidat asked whether anybody is at fault, and Mr Shihabi said nobody, and it is the last time the room will say it. Miss Dandashi asked to say what she had done, and she has stopped using it on people and uses it on documents, and she did that on the Saturday before anybody told her anything, because Mr Kaddour did not speak to her for two days and that was enough, and the four minutes is still the most useful thing anybody has given her at that paper. Dr Qabbani said that is the whole cycle in four sentences, and Ms Huda said the room should notice which of the two learnt faster, three weeks against four years, and the reason is that one had a consequence on the Friday and the other had an explanation in 2023. Mrs Tarabishi asked whether Miss Dandashi gets the reason now, and no, which is the hardest instruction in the unit and comes from page forty-one. Mr Tayara asked about the letter to whoever teaches this next, and it has a new sentence in it since Monday, about the book and not about people. Mrs Rizk asked about after three weeks, and Miss Dandashi has four years of this in front of her and Mrs Khoury has none. And Mrs Khoury said the thing she will take away from four years is a card in a nineteen-year-old\'s bag, with thirteen words on it of which two are wrong, corrected by a bad Friday and not by her, and that if anybody had asked her in 2022 what the end of the course would look like she would have said a certificate._'));
out.push(p('**Listener task:** write the document nobody had opened and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text below and think of the word which best fits each gap. Use only **one word** in each gap. **Then read the rest of the note, which has no gaps in it.**'));
out.push(model([
  '**HANDING IT ON**',
  'When I tried to explain the method to a colleague who had never met it, I discovered **(1) ________** much of it I had stopped noticing. The first move took four minutes to describe and, **(2) ________** the end of the week, she had used it twice and been misunderstood once.',
  'What she had taken from me was not the move **(3) ________** a rule about never apologising, which she then applied to a man of forty-four who had been at the paper for nine years. It is **(4) ________** no use telling a learner why a habit works if the habit has nothing underneath it yet.',
  '**(5) ________** I had done was hand on a sentence and leave out four years. The teacher who taught the move to me has taught it sixty times, and not **(6) ________** of those sixty times did she explain it. She drills it, **(7) ________** is what a beginner can carry, and the reason arrives two levels later when there is something for it to be about.',
  'I had assumed all my life that the reason was the method. It turns **(8) ________** that the drill is the method and the reason is a comfort, and the comfort is for the person who already has the habit.',
  '**And the last thing I shall say about it is this.** **The sentence I have just spent a fortnight working out is printed on page forty-one of a book I have owned since 2022** — **a book I finished, passed and never opened again** — **and it is two sentences long, and I could have had it in an afternoon.**',
  '**The rest of the note, which has no gaps in it.** **I have asked myself how many other sentences of that kind are in the four books I own, and the honest answer is that I do not know, because I have never read a key except to mark an exercise.** ⚠ **The A2 key is a hundred and forty pages long.** **I have opened it, by my own estimate, about sixty times, always at the page with the answers on it, and never at the paragraph above or below** — **which is a reading habit and not a language fault, and it is the habit this method spends four years attacking in every other document.**',
  '**And there is a figure I cannot get away from.** **Four years, eleven hundred pages between the four levels, about nine hundred hours, two examination fees of my own and three of my employer\'s** — **against two sentences on page forty-one that I could have read in 2022.** ⚠ **I am not going to pretend that the two sentences would have done the work: I know from 24.1 that an explanation arriving before the practice is an explanation nobody can use, and in 2022 I could not have used it.** **But I should like to have been the person who decided that, and I was not, because I had never turned the page.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three things and the working (120 words or more).'));
out.push(p('**To the person you taught.** ⚠ **The move is for ______________ and not for ______________; with ______________ you ______________.**   **To the person it cost something.** **______________.**   **The form it should have taken.** ⚠ **______________ documents and ______________.**   **And the working.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The missing half, in under twenty words',
  'The repair made by the teacher of the move, not the learner',
  'Six documents and a drill in place of a sentence',
  'Nothing that says nobody told you',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the review)', 10));
out.push(box(null, [
  '⚠ **A review has a reader who is deciding, and it must contain the thing you would move.** **Four years, in 220–260 words.**',
  'An English-language magazine has asked former students to review a course they have finished, for readers deciding whether to begin it. **Write a review** of this course, describing **what it does that other courses do not**, **what it costs the student in hours**, **the one thing you would move**, and **who should not take it.** Write **220–260 words**.',
  '**You should include:** one figure of your own   ·   one thing you can now do that you could not   ·   one honest warning   ·   and a recommendation that is not for everybody.',
  '⚠ **No sentence beginning _I would highly recommend_.** **And name the reader your recommendation is not for.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I could not say what the move ___ .   a) was   b) is   c) were',
  '2  She used it on a colleague, ___ my sentence does not forbid.   a) what   b) which   c) that it',
  '3  Not one of those sixty times ___ she explain it.   a) did   b) she   c) had',
  '4  ___ I known she would use it on a person, I should have said so.   a) If   b) Had   c) Should',
  '5  The drill is the method and the reason ___ a comfort.   a) are   b) be   c) is',
  '6  I have stopped asking juniors to do things I ___ demonstrate.   a) cannot   b) could not   c) am not able',
  '7  It is the part nobody explained ___ works on me.   a) what   b) which   c) that',
  '8  Everything I can explain, I can hand on ___ in thirteen words.   a) wrong   b) wrongly   c) the wrong',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching).** 🔊 **Track 24.15** You will hear five people talking about teaching something they know to somebody who does not. **Task One:** for questions **1–5**, choose from the list **A–H** what each speaker handed on. **Task Two:** for questions **6–10**, choose from the list **A–H** what the learner did with it. Use each letter once only.'));
out.push(p('**Task One — what the speaker handed on.**   **A** a reason, with no drill attached   **B** the move, demonstrated on the learner\'s own work   **C** a drill, with no reason attached   **D** a written list of rules   **E** a sentence containing a word the learner did not know   **F** the move together with the occasion for it   **G** an explanation they had got from somebody else   **H** a warning about a mistake of their own', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**Task Two — what the learner did with it.**   **A** used it in a situation it did not cover   **B** asked what one word meant and did not go on   **C** taught it to somebody else within a week   **D** agreed with it and never did it   **E** did it correctly and could not say why   **F** did the opposite of it   **G** did it once and then stopped   **H** refused it', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Speaker 1', 'I am a nurse and I taught the handover to a new girl on the ward. I did not explain anything at all: I gave her six handovers to write, in the same order every time, name and age and admission and the one thing the next shift must not miss. She does it perfectly now and when the sister asked her why the order is like that she said she did not know. Which is right, at three weeks. In a year she will know, because she will have handed over to somebody who missed the one thing.'],
  ['Speaker 2', 'I explained it. I am an accountant and I spent about twenty minutes on why we reconcile before we report rather than after, with the history and the two scandals that produced the rule, and he agreed with every word of it. That was in November. He has reconciled after reporting every month since, which I have checked, and we have never discussed it again. I gave him the reason and I never gave him the thing to do on a Monday morning, and I have thought about that more than about anything else this year.'],
  ['Speaker 3', 'I am a draughtsman and I told a boy to check the datum before he scaled anything. The word is datum. He stopped at it, asked me what a datum was, and I said it is the reference point, and he looked at me and nodded and went away and did not use any of it. Four months later I heard him explain to somebody else that you must always check your reference point first, and he had got that from a foreman and not from me, and the foreman had shown him on a drawing.'],
  ['Speaker 4', 'I showed her on her own page, which I think is the only thing I did right. Her own layout, her own caption, and I did the move on it in front of her and then she did it twice. Then she used it on a person — on a colleague of hers who was late — and he has not spoken to her since. The move was for documents and I had never said so, because to me it is so obviously for documents that the sentence did not occur to me.'],
  ['Speaker 5', 'I run a shop and I taught my nephew the thing I do when a representative pushes a line we cannot sell: I tell him what the shelf is and what the calendar is, and I taught the boy both, and when to use each. Nine days later he taught it to his sister, who sells nothing to anybody and is fourteen, and she used it on our mother about a holiday, and it worked, and I have not decided whether that is a success.'],
]));
out.push(p('**C  Writing.** Write the three things and the working (120 words or more): the missing half, the repair you made yourself, the form it should have taken, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ find the move I actually make, by reading my own documents',
  '☐ name it in one sentence with no word of this course in it',
  '☐ hand on the drill and keep the reason until there is something under it',
  '☐ report what the person I taught did not understand, and name my own sentence',
  '☐ say what four years changed that is not about English, with evidence',
  '☐ make a criticism with a replacement and a price',
  '☐ write a _cannot yet_ line with a test, a date and a name',
  '☐ write the page for whoever teaches this next, in counts and not in thanks',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _hand on · pass down · bring on · walk through · unpack · start from · work up from · leave behind · carry away · take away from · set going · bring home to_.',
  '**This unit\'s word-formation set** _(Reading Part 2 in 24.7 draws on this unit\'s lexis)_: _pedagogy → **pedagogical** · apprentice → **apprenticeship** · mentor → **mentorship** · articulate → **articulation** · succeed → **succession** · inherit → **inheritance** · emulate → **emulation** · tacit → **tacitly** · bequeath → **bequest**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _look like_ **→ _it looks like the habit will outlast the course_**, which is an estimate of what is probable, where at A2 it was resembling somebody in a photograph · _put back_ **→ _the committee was put back to June_**, which is postponing a thing, where at A2 it was returning a book to a shelf · _run out of_ **→ _I have run out of ways to say it_**, which is exhausting something that cannot be counted, where at A2 it was running out of bread.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 24 · Handing It On');
