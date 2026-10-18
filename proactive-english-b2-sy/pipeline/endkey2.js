// Proactive English B2 · Syria Edition · Book 2 · END-OF-BOOK TEST — ANSWER KEY
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('END-OF-BOOK TEST · Units 13–24 — ANSWER KEY'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  '**Total 100 marks: Reading and Use of English 40 · Writing 25 · Listening 25 · Speaking 10.**',
  '**One mark a question throughout**, except where a note says otherwise. ⚠ **Reading and Use of English Part 4 takes the mark only if the key word appears unchanged and the answer is between two and five words** — that is the examination rule and it should be applied exactly, because candidates lose more marks to the form of the key word than to the structure.',
  '**The four audio scripts are at the end of this key, with Tracks E2.1 to E2.4.** ⚠ **Play each part twice**, as the examination does, and **read the script aloud afterwards**: in every part of this paper the distractors are easier to see than to hear.',
  '**Writing is marked on four named things a task and nothing else**, listed under each part. ⚠ **Count the figures and the paragraphs before reading a word for language** — it takes ten seconds and it decides the organisation mark.',
  '⚠ **And one thing to do after the marking, which is not marked.** The last box of the paper asks each candidate to write **one sentence saying what they still cannot do, with the word _yet_ in it**, and to give a copy to whoever teaches them next. **Check that they have, and collect the copies yourself** — **it is the only part of this test that is of any use to the next teacher, and in nineteen years nobody has ever been handed one.**',
], C.lblue, C.navy));

out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (40 marks)'));
out.push(S('Part 1 · Multiple-choice cloze (6 marks)'));
out.push(A('**1** C _(bring the other round)_   **2** A _(lays down a figure)_   **3** D _(failed by any method)_   **4** B _(tightened up)_   **5** C _(turn up at the gate)_   **6** B _(do differently)_'));
out.push(A('⚠ **Part 1 is lexis and collocation and not grammar**, and in every item here three of the four options are real English with a different partner. **Items 1, 2 and 5 are the ones to go over, and all three are this book\'s declared phrasal verbs:** _bring round_ **(17)**, _lay down_ **(21)** and _turn up_ **(23)**. **_Take round_, _keep down_ and _put up_ all exist and none of them fits.** ⚠ **Item 3 is the item most often lost.** **A criterion is _failed_, not _missed_ or _broken_** — **and the whole of 21.1 turns on that verb, because a line that cannot be failed cannot be passed either.** **Teach the habit of reading both sides of the gap** before choosing.'));
out.push(S('Part 2 · Open cloze (6 marks)'));
out.push(A('**7** do   **8** who   **9** when   **10** other   **11** On   **12** what'));
out.push(A('⚠ **Every answer in Part 2 is a grammar word** — **a verb in a fixed phrase, a relative, a conjunction, a determiner, a preposition, a pronoun** — **and never a content word.** **A candidate who has written a noun has misread the part, and that is the commonest single error in it.** **Item 7 is the fixed phrase** _nothing to do with_; **item 10 is** _anything other than_. ⚠ **Item 11 is the one that is lost:** _On the page itself_ — **and candidates write _In_, which is not wrong about pages in general and is wrong about a figure written on one.** **If a candidate offers another word that is grammatical and keeps the sense exactly, give the mark** — **and teach them to write the commonest word that fits rather than the most interesting one.**'));
out.push(S('Part 3 · Word formation (8 marks)'));
out.push(A('**13** feasibility   **14** allocation   **15** quantification   **16** provision   **17** definition   **18** deviation   **19** commitment   **20** sustainable'));
out.push(A('⚠ **Part 3 is morphology with a grammar test inside it: the gap tells you the part of speech before you know the word.** **_The_ before 13, 14, 16, 18 and 19 and _a_ before 17** — **all nouns; _is_ before 20 wants an adjective.** ⚠ **Item 15 is the one that separates a class.** **_No amount of ______ of the problem_ wants _quantification_, and about half of any room writes _quantity_**, **which is a word they know and which does not fit the frame.** **Item 20 is the pair to put beside it:** **a class that has just built seven abstract nouns writes _sustainability_ without looking at _is ______ in a way that_.** **Teach the four-second check: read the words on either side of the gap, then build the word, then read the sentence for sense.**'));
out.push(S('Part 4 · Key-word transformations (6 marks)'));
out.push(A('**21** had never been opened   **22** took him four months   **23** is no way of   **24** No matter how   **25** on the grounds that   **26** will not meet again until _(also: is not meeting again until)_'));
out.push(A('⚠ **The key word must be used and must not be changed**, and the answer must be **two to five words including it.** **No mark for _opened_, _taking_, _ways_, _matters_, _ground_ or _till_.** ⚠ **Item 21 is the long one and the one lost most often:** _had never been opened_ **is four words and the negative goes inside the passive** — **candidates write _had not been opened ever_, which is four words and is not English.** ⚠ **Item 26 needs _again_ kept** — _will not meet again until February_ — **and the commonest loss is dropping it, which loses the sense of the original.** **Item 23 is worth thirty seconds: the key word is WAY and a class that learned the NO pattern in Book 1 writes _is no point in_ without reading the key word at all.**'));
out.push(S('Part 5 · Multiple choice (6 marks)'));
out.push(A('**27** C   **28** B   **29** D   **30** A   **31** D   **32** B'));
out.push(A('⚠ **Part 5 asks what the writer says and means, and the answer is always in one place in the text: find the sentence before choosing.** **The three wrong options in each item are built from things the text mentions but does not say.** **Item 27 is the one to work through:** **the text never calls the contradiction an error** — **it gives two dates, the first of March and the eleventh of July, and says page two was accurate when it was printed.** ⚠ **Item 30 is the item that separates a class.** **All four options are plausible about a schedule of dates, and only one is in the text:** _the revision follows the instruction, so the seven begin inside the fourteen._ **And item 32 is a main-point question and not a detail one:** **ask what the last paragraph would lose if its last clause went**, **which is the habit that answers this kind.**'));
out.push(S('Part 6 · Gapped text (4 marks)'));
out.push(A('**33** D   **34** B   **35** C   **36** A   _(**E** is not used)_'));
out.push(A('⚠ **Part 6 is answered from what is on each side of the gap and not from the gap itself.** **Each key sentence here is fixed by the sentence after it:** **D** by _he telephoned the next morning having read the first paragraph only_; **B** by _what it adds is a date_; **C** by _a reader who has been told what a decision will cost them… stops reading_; **A** by _those nine words are the reason the rest of his figures are believed._ ⚠ **E is the distractor to discuss**: **it is true, it is about his customers, and nothing on either side of any gap needs it** — **which is what makes an extra sentence an extra sentence.**'));
out.push(S('Part 7 · Multiple matching (4 marks)'));
out.push(A('**37** B   **38** C   **39** D   **40** A'));
out.push(A('⚠ **Part 7 is answered by matching the _question_ to the text and not the text to the question**, and the four accounts here are written so that each is nearly right for two of the four questions. **Item 37 is B and not A:** **A also finds a fault in her own side** — **the inspector on the near corner** — **but only B says that two parties had been testing different things for eleven years.** **Item 40 is A and not C:** **both are about pages that got shorter or tighter, and only A says the four lines are neither stricter nor looser.** ⚠ **Teach the two-step habit this part rewards: underline the one thing the question asks for, then look for the sentence that says it** — **not the account that is about the same subject.** **A candidate who reads the four texts first and the questions afterwards will spend twice the time and answer two of the four.**'));
out.push(NOTE('⚠ **Paper 1 totals 40 marks across seven parts** — 6 · 6 · 8 · 6 · 6 · 4 · 4 — **and every one of the seven has been taught and practised in a unit of this book**: **Part 6 in 13.7 and 20.7, Part 7 in 14.7 and 21.7, Part 3 in 15.7 and 22.7, Part 4 in 16.7 and 23.7, Part 1 in 17.7 and 24.7, Part 2 in 18.7 and Part 5 in 19.7.** **If a class has lost marks in one part only, go back to the unit that taught it rather than to the part**; **the cycle has the method in it and the test only has the questions.**'));

out.push(pb());
out.push(paper('PAPER 2 · WRITING (25 marks)'));
out.push(S('Part 1 · Essay (12 marks) — marked on four things'));
out.push(A('**1** Four paragraphs, **one job each** — position in the first sentence · the first note · the second note developed further than the first · the candidate\'s own idea last, with a conclusion that is not a summary. **2** Both given notes answered. **3** The third note **taken from this book and not a general observation about bureaucracy** _(23.7, 21.7, 22.7)_. **4** 180–220 words. ⚠ **Nothing else is assessed.**'));
out.push(SAMPLE([
  '**Written rules solve more than they create, but only when they are written so that they can be failed, and most of the rules I have met cannot be.**',
  '**The case from clarity is easy to make and easy to overstate.** A line that says _no carton is to show a crush of more than ten millimetres_ ends an argument in four seconds, because two people looking at the same carton with the same rule reach the same answer. **A line that says _the packaging must arrive undamaged_ does the opposite: it produces two honest readings and two hours at a gate, and the clipboard pays for both of them.**',
  '**The cost of writing them is real and it is not the writing. It is the twenty minutes of asking the person who does the work what the process can actually hold, and that is the step everybody leaves out. A band tighter than the process will be broken, then ignored, and then every other line on the page has been taught to the supplier as negotiable.**',
  '**And my own point is the one I had not expected. A written rule cannot ask. It is written by the party who applies it and met by the party who cannot change it, so the silence that comes back is read as agreement when it is nothing of the kind. So the rules are worth having, and the sentence that makes them worth having is the one inviting the objection.**',
]));
out.push(A('_(218 words — four paragraphs with one job each, both given notes, the second developed further than the first, and a third note taken from 21.7 standing alone in the last paragraph.)_'));
out.push(S('Part 2 · Choice of two (13 marks) — marked on four things'));
out.push(A('**(a) The report.** **1** A **purpose line** and **headed sections** _(a report without either loses the organisation mark whatever the content)_. **2** The recommendation in one sentence, **with a cost and a date.** **3** The problem **in figures, with whose records they came from** _(22.2)_. **4** All four named requirements — **the recommendation, the figures, what is not being asked for, and how anybody would know it had not worked** — and 180–220 words. ⚠ **The commonest loss by a long way is the fourth.**'));
out.push(A('**(b) The letter.** **1** **The news in the first sentence, under about fifteen words, with a date** _(20.1)_. **2** One reason, **as a fact with a date behind it**, and no second reason. **3** What is still available **with its period**, and **what it costs the reader, priced from their side.** **4** All four named requirements and 180–220 words. ⚠ **No apology for the decision itself** — **an apology for a decision the writer would take again is not true, and the mark is for whether the letter could be sent.**'));
out.push(SAMPLE([
  '**(a) REPORT ON PROOF READING OF THE THURSDAY BULLETIN**',
  '**Purpose.** **This report recommends four hours a week of one sub-editor\'s time and sets out what it would cost, what it would not involve, and how anybody would know it had failed.**',
  '**Recommendation.** **Four hours a week of one sub-editor on Wednesdays, in the thirty weeks the ministry notices page runs, from September: about a hundred and twenty hours of staff time in the year and no money.**',
  '**The problem in figures.** **Nineteen pages were reprinted in the year to July, taken from the press\'s own reprint docket rather than from my records, and four of the nineteen were ministry notices. Nineteen pages is about eleven hours of press time, which is less than the hours I am recommending; the case rests on the ministry notices and not on the press time, and I would rather say so here than let it be worked out.**',
  '**What is not recommended.** **Not a further post. Not a change to the Thursday deadline, which was refused to the print room last year. And not a second Wednesday morning at any point this year.**',
  '**How failure would be seen.** **If reprinted pages in the year to July are not below eight, this has not worked, and I shall report that in the first week of August. Between eight and twelve I would ask for one further year and no further hours; above twelve I would stop.**',
]));
out.push(SAMPLE([
  '**(b) A LETTER**',
  '**DAR AL-KUTUB PRESS · QASSAA** · 20 March · _to Mr Saqqal, Directorate of Supply_',
  '**We cannot print the ministry order by 2 April.** **The earliest date we can hold is 19 April, and I can hold it until Thursday.**',
  '**Why, and it is one reason and not three.** **The older machine has been out since 6 March, waiting for a roller from Aleppo. With one machine the order is eleven working days and not five. The roller is expected on the eleventh and I am not relying on that date; the nineteenth assumes it arrives on the fourteenth.**',
  '**What is still open.** **The first four thousand can be printed on the newer machine by 2 April, if you will take them in two deliveries. If the second half can wait to the nineteenth you lose nothing at all except one gate movement.**',
  '**What this costs you, as far as I can see it.** **If the whole order must be with the ministry on the second, you will have to place it elsewhere, and the two places that could take it will both quote above us. I would rather tell you that than let you find it on Thursday afternoon. There is no apology here for the decision itself: with one machine I should take it again.**',
]));
out.push(NOTE('⚠ **Mark the two Part 2 tasks on their own four things and do not compare them.** **A candidate who chooses the report is marked on the six parts of Unit 22; one who chooses the letter on the five of Unit 20.** **The commonest fault in each is the same shape and arrives in the first line:** **the report opens with a history of the problem, and the letter opens with _I am writing with regard to_** — ⚠ **and in both cases the candidate has spent the only sentence the reader is certain to read.** **Both faults are visible before a word is read for language, which is why the counting comes first.**'));

out.push(pb());
out.push(paper('PAPER 3 · LISTENING (25 marks)'));
out.push(S('Part 1 · Eight short extracts (8 marks)'));
out.push(A('**41** B   **42** C   **43** A   **44** A   **45** A   **46** C   **47** B   **48** C'));
out.push(A('⚠ **Part 1 is eight unrelated extracts, and the difficulty is the question and not the English: candidates answer the extract instead of the question.** **Item 43 is the one to go over:** **the woman names an instrument and counts a sample, and both appear among the options** — **and what they agree a method must _do_ is be repeatable by another person on another day.** ⚠ **Item 47 is the finding of the whole book in nine seconds, and it is the item most often lost:** **the man says explicitly that the supplier was not being dishonest but commercial, and candidates choose C because a silence feels like a concealment.** **Teach the habit: read the question first and underline the one word the three options differ on.**'));
out.push(S('Part 2 · Sentence completion (6 marks)'));
out.push(A('**49** costs   **50** three   **51** complaint   **52** fourteen   **53** call book   **54** eleven'));
out.push(A('⚠ **Every answer here is one word, one number or one short phrase, and the commonest error is to write more than was heard** — _the word costs with a question mark_ for **costs**, _the switchboard\'s call book_ for **call book**. **Write what you hear, in as few words as the sentence allows, and do not improve it.** ⚠ **Item 52 will be doubted, because the speaker says several numbers before she says fourteen:** **the sentence asks how long the ask was, and a candidate who writes _eight_ or _eleven_ has heard the recording and not the question.** **Item 50 is the gentle one and worth using to teach the habit: the number is said once, in passing, inside a sentence about something else.**'));
out.push(S('Part 3 · Multiple matching (5 marks)'));
out.push(A('**55** A   **56** B   **57** C   **58** E   **59** D   _(**F**, **G** and **H** are not used)_'));
out.push(A('⚠ **The three unused options are written to be plausible for more than one speaker, and two of them are nearly true of somebody.** **G** _(I keep the note in a file where nobody looks)_ **is nearly true of Speaker 3**, who wrote something nobody used — **but what he says is that he wrote a summary, which is the fault and not the filing.** **H** tempts on Speaker 4, because a refusal and a reprint sound related — ⚠ **and she neither asked for a reprint nor was given one.** **Teach the one habit: read all eight options before the recording starts and mark the two or three that could fit nobody**; **the five that remain are a shorter list.** **Play it twice.**'));
out.push(S('Part 4 · Multiple choice (6 marks)'));
out.push(A('**60** A   **61** C   **62** B   **63** C   **64** A   **65** B'));
out.push(A('⚠ **Part 4 distractors are built from things the speaker says somewhere else in the recording.** **In item 61 all three options describe a direction of drift and the question asks which is commoner:** **she says the small specific want is replaced by the large vague one, and candidates choose B because a want getting smaller sounds more like failure.** ⚠ **Item 63 is the item that separates a class, and the trap is A** — _they should be practised more_ — **which is what a teacher would be expected to say and is the opposite of what she says.** **She says those functions cannot become habits at all and belong on printed paper, and that saying so is more honest than pretending.** **Read the script aloud afterwards; both of these are easier to see than to hear.**'));

out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('**Part 1 (2 marks).** One or two sentences and a stop; **a figure given with whose records it came from** _(22.2)_. ⚠ **The mark is lost by over-answering**, and it is also lost by a figure from the candidate\'s own memory where a book exists.'));
out.push(A('**Part 2 (3 marks).** The long turn: **both accounts allowed to be accurate**, and **the thing the document cannot do named in one sentence.** The listener\'s thirty seconds: **whether either party can supply it.** ⚠ **A candidate who decides which account is right has done the mediation cycles in reverse**, and that is the commonest loss in this part.'));
out.push(A('**Part 3 (3 marks).** **Two minutes of narrowing and then one minute to decide** — three minutes in all. **The decision must carry a cost in hours for each of the two chosen, and whose hours they are** _(22.7)_. ⚠ **Candidates who decide in the first thirty seconds lose the mark**, and so do candidates who never decide.'));
out.push(A('**Part 4 (2 marks).** **One claim, one concession and one figure** between the two of them. ⚠ **A pair who agree with each other throughout have not done this book**: the concession is the mark, and the four questions are built so that each has a real second side.'));
out.push(NOTE('⚠ **The Speaking paper is the only part of this test the candidates cannot revise for by reading**, and it is where the course shows most plainly. **Three things are worth timing with a watch**: the **one-minute** long turn, the **two minutes** of Part 3 narrowing, and the **one minute** of deciding. **Keep to the clock exactly** — **and mark Part 2 on the refusal to choose.** ⚠ **A candidate who says _both of them are right and the thing the page cannot do is ask_ has done the whole of Units 13 to 24 in one sentence, whatever else they say in the minute.**'));

out.push(pb());
out.push(paper('ITEM TRACEABILITY · every question back to the cycle that taught it'));
out.push(table(['Paper and part', 'Items', 'Taught in'], [
  ['Reading and Use of English Part 1 · multiple-choice cloze', '1–6', '17.7 and 24.7; lexis from 17, 21, 23'],
  ['Part 2 · open cloze', '7–12', '18.7; the content is 21.7 and 22.7'],
  ['Part 3 · word formation', '13–20', '15.7 and 22.7; sets from 21 and 22'],
  ['Part 4 · key-word transformations', '21–26', '16.7 and 23.7'],
  ['Part 5 · multiple choice', '27–32', '19.7; the content is 23.1, 23.2 and 23.5'],
  ['Part 6 · gapped text', '33–36', '13.7 and 20.7; the content is 20.1 to 20.5'],
  ['Part 7 · multiple matching', '37–40', '14.7 and 21.7; the four accounts are 21.1, 21.3, 21.7 and 21.2'],
  ['Writing Part 1 · essay', '—', '13.6, 15.7, 17.7, 19.7, 21.7, 23.7'],
  ['Writing Part 2 (a) · report', '—', '14.7 and the six parts of 22.6'],
  ['Writing Part 2 (b) · letter', '—', '20.1 to 20.6'],
  ['Listening Part 1 · eight extracts', '41–48', '17.7, 21.7 and 24.7'],
  ['Listening Part 2 · sentence completion', '49–54', '18.7 and 22.7'],
  ['Listening Part 3 · multiple matching', '55–59', '19.7 and 23.7'],
  ['Listening Part 4 · multiple choice', '60–65', '20.7 and 24.7'],
  ['Speaking Parts 1–4', '—', '13.3, the mediation cycles, 22.7 and 24.3'],
], [4, 1, 3]));
out.push(A('⚠ **Use this table rather than the mark total when a class has lost marks unevenly.** **A class that has lost Part 4 has not lost a grammar paper; it has lost 16.7 and 23.7, and the method is in those two cycles.** **A class that has lost Writing Part 2 (b) has lost 20.1, which is one page and twenty minutes to reteach.**'));

out.push(pb());
out.push(paper('AUDIO SCRIPTS'));
out.push(dlg('Track E2.1  Eight short extracts', [
  ['Extract 1', '**Woman.** The line said the packaging must arrive undamaged. Four cartons out of ninety had a corner pushed in, so I refused the load, and the driver said they were undamaged — and he was not being difficult. He meant the contents had not moved, and he had carried that line for four years. Two hours at the gate, and at the end of it the line was still true for me and still true for him.'],
  ['Extract 2', '**Man.** Thirty millimetres, and it came back at thirty-one, and I took it. I would have refused thirty-three and I cannot tell you what happens at thirty-two. So what I had on that drawing was not a specification at all. It was a wish with a number attached to it, and the number is what made it look like a document.'],
  ['Extract 3', '**Man.** So four units at random. — **Woman.** Four units drawn from different pallets, one from each quarter. — **Man.** Is random not stricter? — **Woman.** Nobody at a gate is random. A man in a hurry takes the four he can reach. Mine is a method because you could do it tomorrow and get my answer; yours is a word that sounds like one.'],
  ['Extract 4', '**Woman.** It came back in a day with one word in the margin. Costs. And the cost was in the paper — it was on page three, in a table, correct to the hour. What was on page one was the thirty-four escalations and not one sentence asking for anything. He read page one, formed a view, and the view was that I had written a complaint about the call handlers.'],
  ['Extract 5', '**Man.** The rota change costs nothing and it solves two of my four late days. It was not in the paper. I had a paragraph saying no alternative had been identified, which was not true — I had identified it in March and I did not like it. He drives that road twice a month and would have thought of it in about nine seconds, and then the question is not about vehicles. Two months, and a paper refused in nine seconds.'],
  ['Extract 6', '**Woman.** If you write that you do not cover the archive and stop there, you have shut a door. If you write that it is covered in document four of the nineteenth of April, you have done the man a service. And where it is covered nowhere at all, you say that too, and you say whose it is to write. Nobody thanks you for that sentence in April.'],
  ['Extract 7', '**Woman.** I asked four suppliers for comments in February and not one of them wrote back. — **Man.** And you read that as agreement. — **Woman.** I read it as agreement, and one of them had known since February that my figure was about the width of his banding. — **Man.** He was not being dishonest. He was being commercial. Write back in February and you are the supplier who cannot do the work.'],
  ['Extract 8', '**Man.** I can explain exactly why a failure condition works and I have never written one. The test card I do without deciding to — every batch that leaves my counter has the four tests on it. And the test is not whether I can explain the thing. It is whether I did it on the Tuesday I was two hours late and the exchange was waiting. That Tuesday gave me three out of about eighty.'],
]));
out.push(dlg('Track E2.2  Sentence completion — a woman talking about a proposal she wrote twice', [
  ['Interviewer', 'Your first paper came back in a day. What was on it?'],
  ['Nour', 'One word, in the margin. _Costs?_ And the cost was in the paper. It was on page three, in a table, correct to the hour.'],
  ['Interviewer', 'And page one?'],
  ['Nour', 'The thirty-four escalations out of forty-one that involve a promise nobody wrote down. All true, and not one sentence of it asking for anything. He read page one, formed a view, and the view was that I had written a complaint about the call handlers. He told me so a fortnight later and he was not being unfair to me — that is what the page said.'],
  ['Interviewer', 'The second paper begins with the ask.'],
  ['Nour', 'Eight afternoons a year for eleven people, starting in October. Fourteen words. And the three weeks between working out the figure and sending it were not arithmetic; the arithmetic took an afternoon. They were spent being unwilling to put a number somewhere it could be refused.'],
  ['Interviewer', 'The repeat-call figure is the heart of it. Where did it come from?'],
  ['Nour', 'The switchboard\'s own call book, for the twelve months to March. Not my records. He can walk into the switchboard room and check it in four minutes without asking me anything, and a figure a man can check is a figure he does not have to decide whether to trust.'],
  ['Interviewer', 'And you wrote page one backwards.'],
  ['Nour', 'Six, five, four, three, two, one — and it changed the paper. The ask was eight afternoons for all twenty-two people until I wrote paragraph six, and then I could not name any figure that would have shown it had worked for twenty-two. So it became eleven. The failure condition is what told me what I was actually asking for.'],
]));
out.push(dlg('Track E2.3  Multiple matching — five people talking about working from a long document', [
  ['Speaker 1', '**Woman.** Twenty-two minutes, and it found more than four months of reading had. I put every period in the thing into one column, by kind and not by page — eleven of them, and two will not go together. And what I want to record is that I had read every one of those clauses, some of them many times. I had simply never seen two of the figures on the same page.'],
  ['Speaker 2', '**Woman.** It is silent on a load that is refused and brought back in the same week. Four times last year. And when I was asked who had decided those four, the answer was me, at the gate, on the day — and not on the same basis each time. In January I treated it as a fresh consignment and in March as a continuation. I had been the rule for a year and I did not know it.'],
  ['Speaker 3', '**Man.** Four pages, and I was rather pleased with it. Nobody opened it twice. I understand why now: a summary is a fifth document, so the reader goes through mine and then goes through the original anyway, because they have no way of knowing whether to trust me. What they wanted was a set of instructions — if you want this, go to page forty-one.'],
  ['Speaker 4', '**Woman.** His note is the best thing anybody has sent me in nine years and I cannot do the one thing in it that he asks for. The page he wants corrected is a summary of a committee decision and the words are the committee\'s, not mine. The committee does not sit again until February, and I was not told until last month that anybody reads as far as page forty-one at all.'],
  ['Speaker 5', '**Man.** Forty minutes before the bulletin closed, and I opened it with no question at all. I came out knowing a great deal about the machine — the humidity warnings, the parts numbering, a clearance figure that does not match our bench — and nothing whatever about the stock, which is what I had gone in for. An interesting clause feels like progress.'],
]));
out.push(dlg('Track E2.4  Multiple choice — an interview with a teacher about the end of a two-year course', [
  ['Interviewer', 'You make them guess what is in the sealed envelope before you open it. Why?'],
  ['Ms Huda', 'Because the guess is the interesting document, not the letter. Nobody can remember accurately what they used to want — we revise the old want to fit the thing we got. So the guess is a record of what they now think they used to want, and putting the two sheets side by side is the whole exercise.'],
  ['Interviewer', 'And what do you usually find?'],
  ['Ms Huda', 'Two directions, and one is far commoner. A small specific want gets quietly replaced by a large vague one. _I want to answer a complaint without asking anybody to check it_ becomes _I want to be more confident_ — and the second cannot be tested, so it cannot be finished, and they carry it for another two years.'],
  ['Interviewer', 'You ask them to separate habits from knowledge.'],
  ['Ms Huda', 'The test of a habit is not whether they can explain it. It is whether they did it on the Tuesday they were two hours late. Anything that only survives when there is time is knowledge in a habit\'s clothes, and it will be the first thing to go in every busy week of their working lives.'],
  ['Interviewer', 'And the things that only come up twice a year?'],
  ['Ms Huda', 'Those cannot become habits at all, and saying so is more honest than pretending. Twice a year is not enough repetition for anything. They go on printed paper, as headings with nothing under them, because an empty heading is the only reminder that has ever reliably worked on anybody. It works because it is embarrassing.'],
  ['Interviewer', 'They always ask what comes next. What do you tell them?'],
  ['Ms Huda', 'Not more words. The step is holding two things in one sentence that this level keeps in two — the news and the reason together, in a form that still cannot be argued with. And I tell them not to attempt it until the simpler version is automatic, because every year somebody tries it in March and by May their letters are being argued with and they cannot think why.'],
  ['Interviewer', 'The envelope is kept by somebody else, and you are strict about who.'],
  ['Ms Huda', 'Somebody who will still be there in two years and who is not a friend. A friend hands it back the moment you ask for it early, and the whole value of a sealed letter is that you cannot get at it. Two of them chose the registry clerk, which is exactly right — it is his job to keep dates.'],
]));
out.push(sp());
out.push(box('After the test', [
  '**That is the end of Book 2, and of the series: twenty-four units, a hundred and sixty-eight cycles, four tests.** ⚠ **Three things remain and none of them is the certificate.**',
  '**1 The three pages each candidate keeps.** **The stocktaking page of 24.2, the _cannot yet_ list of 24.3 and the readiness page of 24.4.** ⚠ **Collect a copy of the _cannot yet_ lists and give them to whoever teaches the group next, on the first morning, before any assessment.** **In nineteen years no teacher has ever been handed one.**',
  '**2 The sealed letters.** **Each candidate has given theirs to a keeper with a date, and the keeper is not a friend of theirs.** ⚠ **Check that the date is written in a book somebody keeps for dates** — **and that the keeper is not the person the writer sits next to, which is the error three envelopes in twelve make.**',
  '**3 And the last thing, which is not marked and is the point of the whole of 24.** ⚠ **Two of these candidates will take a C1 course and the rest will not.** **The ones who do not have the three pages, a sealed letter and a keeper with a date in a book** — **and that is a better arrangement for the next two years than a course would be, because nobody is going to set them a task and they now have four that set themselves.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · End-of-Book Test · Answer Key');
