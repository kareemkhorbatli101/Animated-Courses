// Proactive Business English B2 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24) — Answer key and mark scheme
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-BOOK TEST  ·  Units 13–24  ·  Answer key and mark scheme'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  '**One hundred marks, divided equally: Reading 25 · Writing 25 · Listening 25 · Speaking 25.** ⚠ **Record four separate marks and give the candidate the average, not the total.** **This is how B2 Business Vantage reports, and one weak paper cannot be hidden behind three strong ones.**',
  '⚠ **A pass at the end of the level is 60 of 100** — **but the number to talk to the candidate about is the lowest of the four, and a candidate with 74 and a Speaking paper of 12 has a speaking problem and a good result, which are two separate facts and both should be said.**',
  '⚠ **The two declared emphases are in Writing and they are marked differently from each other.** ⚠ **The reason as distinct from the decision is marked across BOTH tasks and is worth half of the point it attaches to** — ***we have decided not to proceed, for the reasons discussed* states the decision twice and scores once.** ⚠ **The priced rejected option in Part 2 is pass or fail** — **an option named without a number against it scores nothing for that point, however fairly it is described.** **Both were announced on the candidate\'s own first page.**',
  '**Everything in Reading and Listening is right or wrong and worth one mark.** **No half marks anywhere in this paper.**',
  '⚠ **Reading has five parts of five and the real examination does not.** **Say so when you hand the marks back:** **in Vantage the cloze and the error correction carry twenty-seven of the forty-five questions**, **so a candidate who is weak in Parts 4 and 5 here is weaker in the examination than this paper makes them look.**',
], C.grey, C.navy));

// ================= READING =================
out.push(h2('PAPER 1  ·  READING    (25 marks)'));
out.push(p('**Part 1 · Matching  (5 marks)**'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'E', 'D', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Each extract is the answer to exactly one statement, which is not always true in the examination and is true here because the five extracts are five of the things Book 2 teaches.** ⚠ **Q1 is the one to discuss: A does not merely define *clean* better, it replaces a word with a TEST** — **a size, a surface, a distance, a light and one named judge** — **and a candidate who chose A for Q1 has read Unit 14.**'));
out.push(p('**Part 2 · Sentence insertion  (5 marks)**'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'E', 'D', 'C', 'A', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **The sentence not needed is F.**'));
out.push(p('⚠ **Gap 6 is held at both ends:** **before it, *most advice assumes a reader who wants to be helped*; after it, a list of readers who *may decline* and *need not explain*** — ⚠ **so the gap must state the level\'s premise, which is E.** ⚠ **Gap 9 is held at one end only and the test is the sentence before it:** **the reader supplies the alternatives, so the instruction must be to supply them yourself, priced, which is A.**'));
out.push(p('⚠ **F is the distractor and it is the kind that catches good candidates: it is true, it is about documents, and it is the sort of thing this text might have said.** ⚠ **No gap in the text is about length** — **and a candidate who places F has answered the topic instead of the gap, which is the one Part 2 fault worth naming to a class.**'));
out.push(p('**Part 3 · Multiple choice  (5 marks)**'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'C', 'A', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **This is the part whose options are full sentences, and it is where candidates lose marks to plausibility.** ⚠ **Q13 is the item of the paper:** **the successor will assume the decision was taken for the reason VISIBLE in the file, which is usually the second reason** — **and the three distractors are all things a careless successor might do and none of them is what the text says.**'));
out.push(p('⚠ **Q14 rewards reading the clause after the comma.** ⚠ *It has been written for the wrong reader, because every real document raises a question* — **and a candidate who chose A has read the first half of a sentence whose second half reverses it.**'));
out.push(p('**Part 4 · Multiple-choice cloze  (5 marks)**'));
out.push(table(['Q', '16', '17', '18', '19', '20'], [['Answer', 'B', 'C', 'D', 'C', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Two are fixed phrases, two are grammar and one is lexical choice.** ⚠ **The phrases: *works out* a figure (17) and *added to* a total (18).** ⚠ **The grammar: *decided without one* (16), where *besides*, *except* and *apart* all need a following word or phrase this sentence does not give them; and *whereas* (19), where *however* and *despite* cannot join two clauses in this position and *although* reverses the contrast.** ⚠ **And the lexical one is 20:** ***assumed at nil*** — **a collocation from Unit 21.4 that *thought*, *believed* and *considered* cannot carry.**'));
out.push(p('**Part 5 · Error correction  (5 marks)**'));
out.push(table(['Q', '21', '22', '23', '24', '25'], [['Answer', 'CORRECT', 'CORRECT', 'BEEN', 'TO', 'THAT']], [1.1, 1.5, 1.5, 1.1, 1.1, 1.1]));
out.push(p('⚠ **Three errors and two correct lines, and the examination never says how many of either** — **so a candidate who has found one error has not finished and one who has found five has invented two.** ⚠ **Line 23, BEEN:** *what has already been happened* — **_happen_ has no passive, and this is the fault the ear accepts most readily of the three.** ⚠ **Line 24, TO:** *the only condition in which I can to write it* — **a modal with an infinitive marker.** ⚠ **Line 25, THAT:** *before that the file does* — **_before_ as a preposition cannot take *that*, and the clause is complete without it.**'));
out.push(p('⚠ **Lines 21 and 22 are the correct ones and line 22 is the longer of the two**, **which matters: candidates mark long lines as faulty at about twice the rate of short ones, and that bias is worth naming to a class once, with this line as the example.**'));
out.push(p('**Reading total: ______ / 25**'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (25 marks)'));
out.push(p('**Part 1 · An internal communication  (10 marks)**'));
out.push(p('**Content, 6 marks:** ⚠ **the decision, in one sentence (1)** · ⚠ **the REASON it was taken, which is not the decision restated (2)** · ⚠ **the condition on which it would be re-examined, with a date (3** — **2 for the condition and 1 for the date)**. **Language, 4 marks:** range, accuracy, register, and whether it is 40 to 50 words.'));
out.push(sample('Sample answer (47 words)', [
  '**Mr Sayegh — we are not reopening the Hama road unit this year.** ⚠ **The reason is the 220-a-week threshold: the count came in at 196 and the figure we would need is the one we set in March.** ⚠ **To be looked at again on 1 April, or earlier if the pharmacy opposite closes.**',
]));
out.push(p('⚠ **Mark the reason point first, because it is the declared emphasis and it is where a well-written answer loses two marks.** ⚠ **_For the reasons discussed_, *in the light of the figures* and *because it is not viable* all state the decision again and score nought** — **and so does *because we cannot afford it*, which is a conclusion rather than the reason the conclusion was reached.**'));
out.push(p('⚠ **Give the condition marks only for something observable by somebody other than the writer.** ⚠ *If the pharmacy opposite closes* **scores;** *if circumstances improve* **does not.** ⚠ **And the date is a separate mark:** ***to be looked at again on 1 April*** — ***in due course* and *next year* score nought, and both are one word longer than a date.**'));
out.push(sp());
out.push(p('**Part 2 · A proposal  (15 marks)**'));
out.push(p('**Content, 10 marks:** ⚠ **four headings (1)** · ⚠ **what is proposed, with its cost (2)** · ⚠ **the rejected option, in a form its holder would recognise AND with a figure (3** — **pass or fail on the figure)** · ⚠ **the reason the recommendation is preferred, which is not a restatement (2)** · ⚠ **what would show it wrong, with a named person and a day (2)**. **Language, 5 marks:** range, accuracy, cohesion, and whether it is 120 to 140 words.'));
out.push(sample('Sample answer (137 words)', [
  '**What is proposed**',
  '⚠ **That we certify all eleven consignments through the Beirut body before 3 December, at about 310,000 in the first year and 264,000 thereafter.**',
  '**The option I recommend against**',
  '⚠ **Waiting for the association submission, which asks the Directorate to remove packaging from the schedule. Its holders are right that packaging was included in error. The Directorate has amended a published schedule twice in eleven years and both took over two years, and if we wait and are wrong the four December consignments are held and that costs about 590,000, once.**',
  '**Why certification is preferred**',
  '⚠ **Not because the submission is weak. Because certifying costs 264,000 a year and loses us nothing if the submission later succeeds, while waiting loses 590,000 if it does not.**',
  '**What would show this wrong**',
  '⚠ **If two of the eleven accredited bodies stop issuing for packaging. B. Nassif checks the list on the first of each month and tells me the same day.**',
]));
out.push(p('⚠ **The figure against the rejected option is pass or fail, as announced.** ⚠ **Give all three marks only where the rejected option is both stated fairly AND carries a number** — ***waiting for the submission, which would be cheaper* has no number and scores nought for that point, and so does a fair, well-written paragraph with no arithmetic anywhere in it.**'));
out.push(p('⚠ **Give the *fairly stated* part only for a sentence its holder would recognise.** ⚠ *Its holders are right that packaging was included in error* **is the move;** *some people would prefer to wait* **is not.** ⚠ **A candidate who concedes the rejected option\'s strongest point in its own terms and then prices it has done the whole of Unit 21.5 in two sentences and should be told so.**'));
out.push(p('⚠ **The reason point is the second declared emphasis and it is the harder half.** ⚠ *Not because the submission is weak. Because certifying loses nothing if it later succeeds and waiting loses 590,000 if it does not* **is a reason.** ⚠ *Because certification is the better option* **is the recommendation restated and scores nought**, **however confidently it is written.**'));
out.push(p('⚠ **And the falsifying condition needs a PERSON and a DAY for its two marks, not one or the other.** ⚠ **A condition with no watcher scores one; a watcher who is a department scores one; *reviewed regularly* scores nought** — **which is 23.4, and the paper does not declare it as an emphasis because it is a content point of the task itself.**'));
out.push(p('**Writing total: ______ / 25**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (25 marks)'));
out.push(p('**Part 1 · Note completion  (9 marks)**'));
out.push(table(['26', '27', '28', '29', '30'], [['the importer', 'a certificate', '3 September', 'seven', 'eleven']], [1.3, 1.4, 1.2, 0.9, 0.9]));
out.push(table(['31', '32', '33', '34'], [['goods in transit', 'that Dallal Freres must obtain it', 'matters', 'twice']], [1.4, 2.2, 1, 1]));
out.push(p('⚠ **Q26 must be the importer or *us*; do not accept *Dallal Freres* or *the supplier*, which is the error three people in the office had made and is the whole point of the question.**'));
out.push(p('⚠ **Q27 accepts *a certificate*, *a certificate of conformity* or *a certificate from an accredited body*.** ⚠ **Q31 accepts *goods in transit*, *the language of the certificate* or *originals*** — **all three are absences named in the conversation, and any one earns the mark.**'));
out.push(p('⚠ **Q28 is the mark that separates listening from assuming.** ⚠ **The transition runs from PUBLICATION, 3 September** — **and *1 January*, which is in bold in the notice and is said aloud twice in the script, is the distractor the candidate supplies for themselves.**'));
out.push(p('⚠ **Q32 is the only gap with more than one acceptable formulation and the mark is for the OBLIGATION, not for the rumour:** **accept anything saying that the firm had been waiting for the supplier to act.** ⚠ **Do not accept *that every item must be tested* or *that a factory audit is required*** — **both are untrue versions in the script and neither is the one the speaker calls expensive.**'));
out.push(p('**Part 2 · Multiple choice  (8 marks)**'));
out.push(table(['Q', '35', '36', '37', '38', '39', '40', '41', '42'], [['Answer', 'B', 'A', 'C', 'A', 'A', 'C', 'B', 'C']], [1.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Q36 and Q38 are a pair and the second depends on the first.** ⚠ **Two of the four already comply, so the Directorate knows the trade knows it** — **and a candidate who has Q36 wrong can still reason to Q38 and usually does, which tells you they followed the argument and not the arithmetic.**'));
out.push(p('⚠ **Q40 is the discriminator.** ⚠ **The fourth point is a transition for importers whose supplier is not yet accredited** — **and the two distractors, the length of the transition and goods in transit, are both points on which the signatories AGREE**, **so a candidate who chose either has heard the paragraph and not the structure.**'));
out.push(p('**Part 3 · Multiple choice  (8 marks)**'));
out.push(table(['Q', '43', '44', '45', '46', '47', '48', '49', '50'], [['Answer', 'C', 'A', 'C', 'A', 'C', 'A', 'B', 'C']], [1.1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('⚠ **Q46 is the item that tests whether a candidate heard the distinction the whole exchange is built on.** ⚠ **Option B** — *that the holder will do it when nobody is marking* — **is explicitly what the certificate does NOT evidence**, **and it is the option a candidate chooses if they heard a list of three without hearing which list it was.**'));
out.push(p('⚠ **And Q49 and Q50 are the last two marks in the paper for a reason.** ⚠ **The document she would rather leave out is the note correcting her own earlier note, and she includes it because it is the first thing she would ask for if she were the reader** — ⚠ **and a candidate who has both right has understood what the level has been building towards: that a document is written for what a reader will do with it, and that the person it describes is entitled to choose which questions they will be asked.**'));
out.push(p('**Listening total: ______ / 25**'));

// ================= LISTENING SCRIPTS =================
out.push(pb());
out.push(h2('Listening scripts'));
out.push(p('_Read each script twice, at an ordinary speaking pace, with a thirty-second pause between the two readings._', { color: '595959' }));
out.push(sp());
out.push(p('**Part 1 · Note completion**'));
out.push(dlg(null, [
  ['Bassel', 'Everybody is saying we have to get everything tested, and that it will take six months.'],
  ['Nour', '⚠ **Everybody is saying it and nobody has read it. I have, twice.** ⚠ **One: who is obliged? The importer. Us** — **not Dallal Freres, which is what three people in this office have been assuming, and that is the version that is costing us something, because we have been waiting for them to act and the duty is ours.**'],
  ['Bassel', 'And what is required?'],
  ['Nour', '⚠ **A certificate from a body on the accredited list, per consignment. Not a test of every item, and not a factory audit.** **There are eleven bodies on the list and two of them are in Beirut.**'],
  ['Bassel', 'By when?'],
  ['Nour', '⚠ **Here is the one that matters. The three months run from publication on 3 September, not from 1 January.** ⚠ **So the transition ends on 3 December, and the requirement bites on consignments arriving after 1 January** — **which means anything we order after about the middle of November.**'],
  ['Bassel', 'That is seven weeks, not four months.'],
  ['Nour', '⚠ **It is seven weeks. And the notice says nothing about the language of the certificate, nothing about originals, and nothing at all about goods in transit on 1 January.**'],
  ['Bassel', 'How did nobody see the seven weeks?'],
  ['Nour', '⚠ **Because the effective date is in bold in paragraph 2 and the transition is a subclause nine paragraphs later.** ⚠ **It is not a trick. It is how notices are drafted, and the rule I am taking from it is that the date in bold is almost never the date that matters.**'],
]));
out.push(sp());
out.push(p('**Part 2 · Multiple choice**'));
out.push(dlg(null, [
  ['Nour', 'Mr Tarabishi, the draft says the industry is united in opposing the requirement. We are not.'],
  ['Mr Tarabishi', '⚠ **Nobody is. Two of the four signatories already comply and would be glad to see it enforced tomorrow.**'],
  ['Nour', 'Then why does the draft say united?'],
  ['Mr Tarabishi', '⚠ **Because that is how submissions have been written here for twenty years, and it is a habit rather than a decision.** ⚠ **The Directorate knows our trade. They know Hamdan complies and we do not.** ⚠ **So a claim that we are united tells them one of two things: that we do not know our own members, or that we are prepared to say something convenient** — **and after that the three points we actually agree on are read as negotiating positions rather than as facts.**'],
  ['Nour', 'What do all four agree on?'],
  ['Mr Tarabishi', '⚠ **That packaging was included in error. That three months is too short for eleven bodies. And that the notice is silent on goods in transit.**'],
  ['Nour', 'And the fourth point, which we want and Hamdan does not.'],
  ['Mr Tarabishi', '⚠ **A transition for importers whose existing supplier is not yet accredited.** ⚠ **You want it, Hamdan actively does not, and I am not going to pretend the association has a view. It goes in an annex with your name on it.**'],
  ['Nour', 'Does that weaken the submission?'],
  ['Mr Tarabishi', '⚠ **It strengthens the three points.** ⚠ **A submission that marks its one disagreement is a submission whose agreements can be taken at face value** — **which is the only thing we have to sell.**'],
]));
out.push(sp());
out.push(p('**Part 3 · Multiple choice**'));
out.push(dlg(null, [
  ['Mr Sayegh', 'Lina has her certificate. I want to write that she is fluent in written and spoken English. It will get her the interview.'],
  ['Nadia', '⚠ **It will get her the interview and lose it for her in the first twenty minutes.** ⚠ **And when that sentence fails, everything else in the reference fails with it, including the true things.**'],
  ['Nour', '⚠ **May I say what the certificate actually is. It is a performance, on a stated day, against published criteria. It is not a description of a person.**'],
  ['Mr Sayegh', 'Then what is it worth?'],
  ['Nour', '⚠ **Three things. She read a long document under time pressure and found what it required of her. She wrote to a word limit, twice. And she did both on a day she did not choose, in conditions she did not control.**'],
  ['Mr Sayegh', 'And what does it not say?'],
  ['Nour', '⚠ **That she will do it when nobody is marking. That she can do it in the documents of a trade she has not worked in.** ⚠ **And almost nothing about speaking, which an interview will establish in ten minutes anyway.**'],
  ['Lina', 'Then say what I did. Not what I am. Three documents.'],
  ['Nour', 'Which three?'],
  ['Lina', '⚠ **The escalation standard I asked for in July and then wrote, because it did not exist. The Homs stock reconciliation of 2 November, which found 31,000.** ⚠ **And the note of 19 September correcting my own earlier note** — **which is the one I would rather not include and is the one I would ask to see if I were them.**'],
  ['Mr Sayegh', '⚠ **And you understand that this reference is colder than the one I wanted to write, and that a cold reference may cost you an interview.**'],
  ['Lina', '⚠ **I understand it, and I would rather be asked about the November reconciliation than asked to explain the word fluent. One of those conversations I can have.**'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (25 marks)'));
out.push(p('**Part 1 · Your own work  (5 marks)**'));
out.push(table(['Mark', 'What it is for'], [
  ['**1**', '**answers in complete sentences and at an ordinary pace**'],
  ['**1**', '⚠ **names who is obliged, and distinguishes it from who is affected**'],
  ['**1**', '⚠ **a date rather than *soon* or *shortly***'],
  ['**1**', '⚠ **a reason that is not the decision restated**'],
  ['**1**', '⚠ **a named person and a day in the answer to the third question**'],
], [0.6, 7]));
out.push(p('⚠ **The fifth mark is not for the quality of the condition.** **It is for a name and a day.** ⚠ **A candidate who says *we keep an eye on it* has answered honestly and scores nought for it**, **and that is worth discussing afterwards rather than during.**'));
out.push(sp());
out.push(p('**Part 2 · A collaborative task  (10 marks)**'));
out.push(table(['Marks', 'What it is for'], [
  ['**2**', '**listens, and answers what the partner actually said**'],
  ['**2**', '⚠ **says what the document is right about, and whose signature that needs**'],
  ['**2**', '⚠ **says what they are NOT asking for, in those words**'],
  ['**2**', '⚠ **names where the difference will be recorded instead**'],
  ['**2**', '⚠ **names the DAY of the telephone call, before filing and not with it**'],
], [0.7, 7]));
out.push(p('⚠ **The fifth is the mark this paper exists for.** ⚠ **Give the full ten for any performance in which a candidate names the day of a call that has to happen before a document is filed, whatever else happens in it** — **it is the whole of Unit 23.7, it is the most sophisticated move in Book 2, and almost nobody makes it unprompted, because the document is the visible half and the call is the half everybody postpones.**'));
out.push(p('⚠ **On the second role card, the candidate who asks for the difference to be marked in the joint document rather than in an annex has NOT conceded.** **That is the chairman\'s own choice in Unit 23.7 and it produced the stronger submission** — **so mark it as a position and not as a collapse, and say so afterwards.**'));
out.push(sp());
out.push(p('**Part 3 · Putting a case  (10 marks)**'));
out.push(table(['Marks', 'What it is for'], [
  ['**1**', '**what is obliged, of whom, and from when**'],
  ['**1**', '**what complying costs**'],
  ['**1**', '⚠ **what complying LATE costs** — **the figure nobody works out**'],
  ['**2**', '⚠ **the option recommended against, WITH a figure**'],
  ['**1**', '**a recommendation**'],
  ['**1**', '⚠ **a reason that is not the recommendation restated**'],
  ['**2**', '⚠ **what would show it wrong, with a named person and a stated day**'],
  ['**1**', '⚠ **what the candidate is not asking for**'],
], [0.7, 7]));
out.push(p('⚠ **The priced rejected option and the watched condition carry four of the ten marks and most candidates will produce neither.** ⚠ **Do not prompt for either.** **If they are absent, they are absent** — **and a candidate who produces both has demonstrated, in about ninety seconds, the whole of what twelve units were for.**'));
out.push(p('**Speaking total: ______ / 25**'));
out.push(sp());
out.push(box('⚠ The four marks, and what to say about them', [
  table(['Paper', 'Mark', 'What a low mark here means'], [
    ['**READING**', '______ / 25', '⚠ **look at Parts 4 and 5 separately** — **they are twenty-seven of the forty-five questions in the examination and only ten of the twenty-five here**'],
    ['**WRITING**', '______ / 25', '⚠ **look at the two declared emphases first** — **a candidate who gave a decision twice and an unpriced rejected option has a habit and not a gap**'],
    ['**LISTENING**', '______ / 25', '⚠ **look at Q28, Q40 and Q46** — **three marks that test understanding rather than hearing, and all three have a distractor the candidate supplies for themselves**'],
    ['**SPEAKING**', '______ / 25', '⚠ **look at Part 3\'s items 4 and 7** — **four marks that no amount of fluency can supply**'],
  ], [1.3, 1.1, 6]),
  '⚠ **Average: ______ / 25, reported as a percentage.** **Not the total.**',
  '⚠ **And one thing to say to every candidate, whatever the four marks are.** ⚠ **The two hardest things in this paper** — **the option you argue against with a number on it, and the person and the day against the condition that would make you wrong** — **are the two things nobody at work will ever ask them for.** **They are worth having anyway, and C1 assumes them.**',
], C.lteal, C.navy));
out.push(sp());
out.push(box('⚠ The list, and the thing you do in October', [
  '⚠ **Before the candidates left the room they wrote three things on your list: one document, one reader, one date in the following fortnight.** **Keep the list.**',
  '⚠ **Ask them in October.** **Not *how is your English* and not *did you write it*** — ⚠ **read their own line back to them and ask for the date it was written and who received it.** **That is the whole instruction.**',
  '⚠ **Expect about a third.** **The series records that figure so that the next teacher has something to compare with**, **and a third is the figure to beat rather than the figure to be disappointed by** — **because the three things on that line are a day, a document and a person, which is the apparatus of Unit 23.4 applied to the candidates themselves, and it is the last thing this course does.**',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_End of the End-of-Book Test key, and of B2. **C1 begins at Unit 1** — and the reader there is usually somebody who agrees with you and cannot act._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · End-of-Book Test · Answer Key');
module.exports = out;
