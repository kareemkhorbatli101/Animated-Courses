// Proactive English B2 · Syria Edition · Book 1 · END-OF-BOOK TEST — ANSWER KEY
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('END-OF-BOOK TEST · Units 1–12 — ANSWER KEY'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  '**Total 100 marks: Reading and Use of English 40 · Writing 25 · Listening 25 · Speaking 10.**',
  '**One mark a question throughout**, except where a note says otherwise. ⚠ **Reading and Use of English Part 4 takes the mark only if the key word appears unchanged and the answer is between two and five words** — that is the examination rule and it should be applied exactly, because candidates lose more marks to the form of the key word than to the structure.',
  '**The four audio scripts are at the end of this key, with Tracks E.1 to E.4.** ⚠ **Play each part twice**, as the examination does, and **read the script aloud afterwards**: in every part of this paper the distractors are easier to see than to hear.',
  '**Writing is marked on four named things a task and nothing else**, listed under each part. ⚠ **Count the figures and the paragraphs before reading a word for language** — it takes ten seconds and it decides the organisation mark.',
  '⚠ **And one thing to do after the marking, which is not marked.** The last box of the paper asks each candidate to write **one prediction with a date and a figure** on the back and keep it. **Check that they have**, and keep a copy yourself: **it is the only part of this test that can be marked next year.**',
], C.lblue, C.navy));

out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (40 marks)'));
out.push(S('Part 1 · Multiple-choice cloze (6 marks)'));
out.push(A('**1** A _(take the trouble to)_   **2** B _(it took him forty minutes)_   **3** C _(four out of ninety-one)_   **4** D _(turned down)_   **5** A _(none of them)_   **6** B _(he will not either)_'));
out.push(A('⚠ **Part 1 is lexis and collocation, not grammar**, and in every item here three of the four options are real English with a different partner. **Items 1, 4 and 6 are the ones to go over**: _take the trouble_ is fixed and _take the pains_ is not **(and _pains_ would take no article)**; _turn down_ is the only one of the four that collocates with a request; and **_either_ after a negative is the item most often lost** — candidates write _too_, which needs an affirmative. ⚠ **Item 5 is worth thirty seconds too**: _none_ and not _neither_, because **three** requests were made — the item is decided three lines earlier. **Teach the habit of reading both sides of the gap** before choosing.'));
out.push(S('Part 2 · Open cloze (6 marks)'));
out.push(A('**7** no   **8** to   **9** from   **10** for   **11** without   **12** none'));
out.push(A('⚠ **Every answer in Part 2 is a grammar word** — a preposition, a conjunction, a determiner, a pronoun — **and never a content word.** A candidate who has written a noun or a main verb has misread the part, **and that is the commonest single error in it.** **Items 9, 10 and 11 are dependent prepositions and fixed phrases** _(tell from · for a reason · without anybody noticing)_. ⚠ **Item 7 is the one that is lost**: _no fault of style at all_ wants **no** and not _not_, because what follows is a noun phrase. **Each gap here has one answer** — but if a candidate offers another word that is grammatical and keeps the sense exactly, give the mark, **and teach them to write the commonest word that fits rather than the most interesting one.**'));
out.push(S('Part 3 · Word formation (8 marks)'));
out.push(A('**13** comparison   **14** accuracy   **15** assumption   **16** measurement   **17** limitation   **18** ambiguity   **19** proportionate   **20** disagreement'));
out.push(A('⚠ **Part 3 is morphology with a grammar test inside it: the gap tells you the part of speech before you know the word.** _The_ before 13, _an_ before 15, _one further_ before 17 — all nouns; **_be_ before 19 wants an adjective.** ⚠ **Item 20 is the one that separates a class**: **AGREE** must become **disagreement** — a prefix **and** a suffix — because the sentence says the thing **disappears**, and what disappears is the dispute. **About half of any class writes _agreement_ and then cannot say what disappeared.** Teach the four-second check: **build the word, then read the whole sentence for sense.**'));
out.push(S('Part 4 · Key-word transformations (6 marks)'));
out.push(A('**21** had never been   **22** does not touch _(also: doesn\'t touch)_   **23** According to   **24** need not answer _(also: do not need to answer)_   **25** was out by   **26** For all its _(also: Despite all its · In spite of all its)_'));
out.push(A('⚠ **The key word must be used and must not be changed**, and the answer must be **two to five words including it.** **No mark for _answered_, _accords_, _needs_ or _watered_.** Item **21** is the long one: _had never been_ is three words and the _before_ at the end of the printed sentence is what fixes the tense. ⚠ Item **26** accepts three answers, which is normal in this part — **so teach the shortest version that uses the word unchanged**, which is right more often than any other rule here.'));
out.push(S('Part 5 · Multiple choice (6 marks)'));
out.push(A('**27** B   **28** D   **29** A   **30** C   **31** D   **32** B'));
out.push(A('⚠ **Part 5 asks what the writer says and means, and the answer is always in one place in the text: find the sentence before choosing.** The three wrong options in each item are built from things the text mentions but does not say. **Item 28 is the one to work through**: all four options are facts of the story, **and only the January reprint is the reason she is careful about her claim.** And **item 32 is a main-point question**, not a detail one: ⚠ **ask what the paragraph would lose if its last sentence went**, which is the habit that answers this kind.'));
out.push(S('Part 6 · Gapped text (4 marks)'));
out.push(A('**33** C   **34** A   **35** E   **36** B   _(**D** is not used)_'));
out.push(A('⚠ **Part 6 is answered from what is on each side of the gap and not from the gap itself.** Each key sentence here is fixed by the sentence after it: **C** by _each was missing either a date or a figure_; **A** by _being told that a prediction was never worth anything_; **E** by _four of the twenty-six_; **B** by _what it does is make them markable._ ⚠ **D is the distractor to discuss**: it is true, it is about the sheet, and **nothing on either side of any gap needs it** — which is what makes an extra sentence an extra sentence.'));
out.push(S('Part 7 · Multiple matching (4 marks)'));
out.push(A('**37** D   **38** A   **39** C   **40** B'));
out.push(A('⚠ **Part 7 is answered by matching the _question_ to the text and not the text to the question**, and the four accounts here are written so that each is nearly right for two of the four questions. **Item 37** is **D** and not **A**: A ends arguments quickly, **but only D says that what settled the argument was writing down what each of them was counting** — the object before the figure, which is 10.4. **Item 40** is **B** and not **D**: both accounts are about figures, **and only B says that a record produced no answerable question until it carried one.** ⚠ **Teach the two-step habit this part rewards: underline the one thing the question asks for, then look for the sentence that says it** — not the account that is about the same subject. A candidate who reads the four texts first and the questions afterwards will spend twice the time and answer two of the four.'));
out.push(NOTE('⚠ **Paper 1 totals 40 marks across seven parts** — 6 · 6 · 8 · 6 · 6 · 4 · 4 — **and every one of the seven has been taught and practised in a unit of this book**: Part 3 in 1.7, Part 4 in 2.7, Part 1 in 3.7, Part 2 in 4.7, Part 5 in 5.7, Part 6 in 6.7 and **Part 7 in 7.7**. If a class has lost marks in one part only, **go back to the unit that taught it rather than to the part**; the cycle has the method in it and the test only has the questions.'));

out.push(pb());
out.push(paper('PAPER 2 · WRITING (25 marks)'));
out.push(S('Part 1 · Essay (12 marks) — marked on four things'));
out.push(A('**1** Four paragraphs, **one job each** — position · first note · concession paragraph · what follows, with the candidate\'s own idea last and nothing else in that paragraph. **2** All three notes answered. **3** The concession paragraph third, with **the objection in its first sentence** and **a figure in sentence four** _(9.6)_. **4** 180–220 words. ⚠ **Nothing else is assessed.**'));
out.push(SAMPLE([
  '**Whether it is worth writing down what you expect to happen depends less on the prediction than on whether anybody can mark it afterwards. I think it is worth it, and for a reason that is not the obvious one.**',
  '**The obvious reason is that somebody reads it later, and often nobody does.** Of eleven predictions my own class wrote in June, **two were read again by anybody before the day we marked them.** So that is not the argument.',
  '**The strongest objection is that it takes time nobody has, and that the people with the least of it are the ones who would have to write. There is no answer to that. That does not touch what the writing does before anybody reads it. Writing a prediction down takes about twenty seconds, and in three of eleven cases in my own section it changed what the writer then wrote underneath. So the twenty seconds bought a changed mind, not a record.**',
  '**And my own idea is that the real value is in being unable to remember it differently.** A prediction kept in the head is always right afterwards, **because the version you remember is the version the facts fit** — and that is the one thing a dated line on a page prevents.',
]));
out.push(A('_(216 words — four paragraphs with one job each, all three notes, the concession paragraph third with the objection in its first sentence and a figure in sentence four, and the own idea alone in the last paragraph.)_'));
out.push(S('Part 2 · Choice of two (13 marks) — marked on four things'));
out.push(A('**(a) The review.** **1** The verdict with its reader, **and the reader it is not for.** **2** One decisive detail, **with a figure.** **3** The weakness in its strongest form, with the easy reason refused. **4** All four requirements of the announcement — **who it is for, who it is not for, what decided it, what is wrong with it** — and 180–220 words. ⚠ **No introduction**: _in this review I am going to look at…_ is twelve words telling the examiner about instructions the examiner wrote.'));
out.push(A('**(b) The email.** **1** A first line that is **the reason for writing** — **not _I hope you are well_.** **2** Three things, **each with a figure**, and the one to be remembered last. **3** All three named requirements — **what happened, what did not, what you would do differently.** **4** The register of somebody known and not written to for months _(contractions acceptable here)_, and 180–220 words.'));
out.push(SAMPLE([
  '**(a) A REVIEW · for whom, and for whom not**',
  '**For anybody who looks words up while doing something else — on a bus, at a counter, between two lessons — this is the dictionary to own. For anybody who sits down with a dictionary and reads around the entry, it is a poor buy.**',
  'What decided it was the glossary of about four hundred common confusions at the **front**, before the A. **I have timed myself at eleven seconds from closed book to answer**, standing, holding something in the other hand; in the big dictionary the same question takes me about fifty.',
  '**The binding is poor.** Mine came apart along the spine inside a month and lives in a rubber band, which is not a small complaint about a book you carry. **Its weakness is real and I would still buy it — and not because the price makes up for it**, but because the glossary is at the front, and that is a decision about the book and not about the paper.',
  '**Borrow somebody\'s copy, stand up, and look up _principal_ against the clock.** Under fifteen seconds, buy it; if you sit down to read the entry, buy the other one.',
]));
out.push(SAMPLE([
  '**(b) AN EMAIL**',
  '**Dear Lubna, it has been a while, and you have asked the one question I have spent this month answering, so here it is with the figures.**',
  '**What happened.** The refusal code went in: **a code on every slip since 10 February, about forty of them**, and I have not telephoned the depot about one. In the eleven months before that I telephoned nine times.',
  '**What did not.** **Our own nine.** Nine of forty consignments left here last quarter with the paperwork incomplete, which is what it was in December. **Knowing which nine has not yet made them eight**, and I shall know in June whether it ever will.',
  '**And what I would do differently.** I conceded the thing that mattered in September — **in a bracket, in a third letter.** Nobody reads a bracket in a third letter. **It cost both offices five months**, and the sentence would have done the same work in the first paragraph of the first letter. **That is about where a sentence goes and not about what it says.**',
  '**Yours, Rim**',
]));
out.push(NOTE('⚠ **Mark the two Part 2 tasks on their own four things and do not compare them.** A candidate who chooses the review is marked on the four moves of Unit 8; one who chooses the email on the four of Unit 12. **The commonest fault in each is the same shape and arrives in the first line**: the review opens with an introduction, and the email opens with _I hope you are well_ — ⚠ **and in both cases the candidate has spent the only sentence the reader is certain to read.** **Both faults are visible before a word is read for language**, which is why the counting comes first.'));

out.push(pb());
out.push(paper('PAPER 3 · LISTENING (25 marks)'));
out.push(S('Part 1 · Eight short extracts (8 marks)'));
out.push(A('**41** A   **42** B   **43** A   **44** B   **45** C   **46** B   **47** A   **48** C'));
out.push(A('⚠ **Part 1 is eight unrelated extracts, and the difficulty is the question and not the English: candidates answer the extract instead of the question.** **Item 44 is the one to go over**: the man says plainly that **the arithmetic is correct** and that his objection is the other one, **so A is a word from the recording attached to the wrong question.** ⚠ And **item 45** asks what was **missing** from the instruction, not what was wrong with the sheet. **Teach the habit: read the question first and underline the one word the three options differ on.**'));
out.push(S('Part 2 · Sentence completion (6 marks)'));
out.push(A('**49** two years   **50** watch   **51** two hundred and thirty-eight _(238)_   **52** fourteen   **53** gate   **54** walking'));
out.push(A('⚠ **Every answer here is one word, one number or one short phrase, and the commonest error is to write more than was heard** — _about nine seconds_ for **nine**, _the gate area_ for **gate**. **Write what you hear, in as few words as the sentence allows, and do not improve it.** ⚠ **Item 52** will be doubted, because the speaker says _three hundred_ several times before he says _fourteen_: **the sentence asks for the real total**, and a candidate who writes _three hundred_ has heard the recording and not the question.'));
out.push(S('Part 3 · Multiple matching (5 marks)'));
out.push(A('**55** D   **56** E   **57** A   **58** B   **59** F   _(**C**, **G** and **H** are not used)_'));
out.push(A('⚠ **The three unused options are written to be plausible for more than one speaker and two of them are nearly true of somebody.** **C** _(I conceded the point in a place nobody reads)_ **is true of Speaker 3**, who mentions the bracket — **but his answer to the question is the wrong object**, which is what he says first and last. **H** tempts on Speaker 1, who cannot produce a sentence — ⚠ **but she is talking about a figure and not a prediction.** **Teach the one habit: read all eight options before the recording starts and mark the two or three that could fit nobody**; the five that remain are a shorter list. **Play it twice.**'));
out.push(S('Part 4 · Multiple choice (6 marks)'));
out.push(A('**60** A   **61** B   **62** C   **63** A   **64** B   **65** C'));
out.push(A('⚠ **Part 4 distractors are built from things the speaker says somewhere else in the recording.** In item **62**, option **B** _(that the class disagreed with her)_ is true of one argument she describes — **and the thing that surprised her was that nobody argued about being wrong.** ⚠ Item **65** is the main-point question and the other two options are both mentioned: **_what the sheet measures_ is answered in her last sentence**, and a candidate who has not waited for it will choose **A**. **Read the script aloud afterwards**; these two are easier to see than to hear.'));

out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('**Part 1 (2 marks).** One or two sentences and a stop; **a figure given with its counter.** ⚠ **The mark is lost by over-answering**, which is 1.3 and is the commonest fault in Part 1 of any Cambridge speaking test.'));
out.push(A('**Part 2 (3 marks).** The long turn: **the reader named** _(actor, approver or record)_ and **what was left out of the page.** The listener\'s thirty seconds: **which of the three readers the page was written for.** ⚠ **A candidate who describes the page and never names a reader has done Unit 11 in reverse.**'));
out.push(A('**Part 3 (3 marks).** **Two minutes of narrowing and then one minute to decide** — three minutes in all, which is 6.3. The decision must carry **a cost in minutes** for each of the two chosen. ⚠ **Candidates who decide in the first thirty seconds lose the mark**, and so do candidates who never decide.'));
out.push(A('**Part 4 (2 marks).** **One claim, one concession and one figure** between the two of them. ⚠ **A pair who agree with each other throughout have not done Unit 9**: the concession is the mark.'));
out.push(NOTE('⚠ **The Speaking paper is the only part of this test the candidates cannot revise for by reading**, and it is where the course shows most plainly. **Three things are worth timing with a watch**: the **one-minute** long turn, the **two minutes** of Part 3 narrowing, and the **one minute** of deciding. **Keep to the clock exactly** — the discipline is the content of 6.3 and 8.6, and a Part 3 run loosely teaches the opposite of what the unit taught. ⚠ **And mark Part 4 on the concession and not on the opinions.** A pair who produce two claims, two concessions and two figures in three minutes have done the whole book, **whatever they happen to think about written records.**'));

out.push(pb());
out.push(paper('AUDIO SCRIPTS'));
out.push(dlg('Track E.1  Part 1 — eight short extracts', [
  ['41 · Rim', 'I had been saying three hundred man-hours a year for two years and I had never counted it. Not once. I did not invent it and I am fairly sure nobody else did either — it arrived in a conversation and it was useful, and I never asked it the one question it could not answer, which is three hundred man-hours of what.'],
  ['42 · Omar', 'This notice has been on my counter nine days. There is nothing in it I can act on.'],
  ['42 · Mazen', 'Are you going to rewrite it for them?'],
  ['42 · Omar', 'No. I have no standing to rewrite another office\'s notice and it would take me an afternoon. I am sending them six words: what do I do, and when.'],
  ['43 · Dima', 'I cut four paragraphs out of the middle of it and replaced them with four words. Then I gave a whole line back to one sentence — the one about the eleven telephone customers, which is the strongest thing anybody will say against the pad. That one cannot sit inside a subordinate clause.'],
  ['44 · Jad', 'I want the forty per cent taken out of the note, and I want to be clear that the arithmetic is correct. That is not my objection. My objection is the other one: it is not evidence of anything, because the fall is from five to three and the figure has been between two and nine every month all year.'],
  ['45 · Rasha', 'I was willing enough. The notice told me to record the expected admissions and I would have. But the sheet has fourteen boxes and no room at the foot, and there was nothing in the notice about what to do when there is nowhere to put it. At four in the morning you do not invent a procedure.'],
  ['46 · Hiba', 'Seven of nine this year and fourteen of twenty-two last year, and I am not able to compare them. The periods are the same — both at the end of the course. The populations differ and could be patched. What cannot be patched is that last year was a written paper and this year is an observed lesson, and there is no quantity that converts one into the other.'],
  ['47 · Omar', 'Forty seconds a call, which is about four and a half days a year of one person\'s time. Both true, and the same fact. I had been giving the forty seconds in three meetings while arguing in favour of the page, and I had not noticed I was choosing the size that sounded like the thing I already thought.'],
  ['48 · Rim', 'Three figures and no request at all. Not a change of policy, not an explanation, and not an answer to the letter. It is a letter about an arrangement that is working, and I think that is rarer in both our offices than it ought to be.'],
]));
out.push(dlg('Track E.2  Part 2 — counting at a depot gate', [
  ['Tareq', 'I want to tell you about a figure I had been quoting for two years, because I think the way it happened is commoner than anybody admits.'],
  ['Tareq', 'The figure was that we lose about three hundred man-hours a year on the gate. I used it in two meetings and one written request, and I believed it. I never asked it the one question it could not answer: three hundred man-hours of what?'],
  ['Tareq', 'So on a Tuesday in January I counted. There are two stamps on a gate copy, and I timed them using a watch, on ten consignments. About nine seconds a stamp — eighteen seconds a consignment. Then I took the consignment book for December off the shelf and counted the entries: two hundred and thirty-eight.'],
  ['Tareq', 'Eighteen seconds by two hundred and thirty-eight is seventy-one minutes a month. Over a year that is about fourteen hours. Not three hundred. Fourteen, and the difference is a factor of about twenty.'],
  ['Tareq', 'I have a guess about the three hundred and I want it understood as a guess. I think somebody once counted all the time spent at the gate — the signing, the waiting, the walking to the stamps and back — and three hundred man-hours a year is about right for that. It is a figure about a different thing, and I had been using it about the stamps.'],
  ['Tareq', 'There is one thing I still want somebody to count, and it is the walking. I have no figure at all for the distance from the vehicle to the stamps, and the gate men tell me that is the real cost. If they are right, the answer is to move the stamps and not to argue about nine seconds.'],
]));
out.push(dlg('Track E.3  Part 3 — five people on something they got wrong', [
  ['55 · Rim', 'For two years I quoted a figure I had never counted. It arrived in a conversation, it was useful, and I used it in two meetings and a written request. When I finally sat down with a watch and the December book it came out at about a twentieth of what I had been saying. Nobody ever asked me what it was a figure of, and I could not have answered.'],
  ['56 · Omar', 'I wrote it, and I can tell you exactly who I had in mind: the directorate. Mr Saqqal had refused the thing twice and he was the reader I was afraid of, so every sentence was shaped to get past him — passive throughout, no date, and _it has been agreed_ doing the work of a decision. The man at the counter was on the list and I never thought about him once.'],
  ['57 · Mazen', 'Five months on whether a batch of cells was faulty, and the question was never the batch. It was who looks at the seal before the carton leaves the depot, and nobody asked it until February. I conceded the batch in September, in a bracket, in a third letter — but the bracket is not what went wrong. The object was.'],
  ['58 · Nour', 'The field went into the February release and I had predicted it, and I spent three months believing my concession had done it. A regulatory item was withdrawn on the eleventh of December and a slot opened, and my specification was the only one in the drawer that was ready. It was mine because it was ready. I was right, and not for the reason I gave.'],
  ['59 · Yara', 'Wrong, and out by six — twenty-six against fewer than twenty. Then I asked why six, and four of the twenty-six were disputes about the second portion itself: two portions arriving with different labels, a kind that did not exist before February. I had made four of my own twenty-six, and my model had no term in it for that at all.'],
]));
out.push(dlg('Track E.4  Part 4 — an interview about a prediction sheet', [
  ['Interviewer', 'You marked a sheet your class wrote nine months ago. What were the totals?'],
  ['Hiba', 'Eleven predictions. Two right, four wrong, and five we could not mark at all.'],
  ['Interviewer', 'What was wrong with the five?'],
  ['Hiba', 'Nothing was wrong with them as sentences. Each was missing either a date or a figure, and three were missing both. _Record-keeping will get better_ was the first, and nothing that happened in nine months could have contradicted it.'],
  ['Interviewer', 'Was the marking difficult?'],
  ['Hiba', 'Not in the way I expected. I had thought the four wrong ones would be argued about and nobody disputed a single one of them. Every argument in the room was about an unmarkable, and that surprised me more than anything else in the lesson. We did have one real disagreement, about whether _the gate will cause trouble_ counted, and the man who wrote it accepted the verdict in about a minute and said it was worse than being wrong.'],
  ['Interviewer', 'And the most useful result?'],
  ['Hiba', 'A near miss. Somebody had predicted fewer than twenty disputed results and there were twenty-six. She wrote _wrong — out by six_, and the figure produced the question why six. Four of the twenty-six were disputes about the remedy itself. _Nearly right_ would have ended that conversation; _out by six_ opened it.'],
  ['Interviewer', 'Anything that worried you?'],
  ['Hiba', 'One result came out exactly, for a reason its writer had not given. A slot opened in a release because something else was withdrawn. A success with the wrong reason behind it is more expensive than a failure, and the reason is simple: nobody corrects it. Nobody argues with a field that is in.'],
  ['Interviewer', 'So what is the sheet for?'],
  ['Hiba', 'Not for predicting the year. I do not think the practice makes anybody\'s predictions better. What it does is make them markable — and marking them is what taught this class the difference between a figure and a hope. The sheet measures the course and not the year.'],
]));
out.push(sp());
out.push(box('After the test', [
  '**That is the end of Book 1: twelve units, eighty-four cycles, a mid-book test and this one.** ⚠ **Two things remain.**',
  '**1 Next year\'s prediction sheet**, written in front of the class and dated — the same number of predictions, **every one with a date and a figure**, in about twenty minutes. **The last box of the test asks each candidate for one; collect a copy of each and keep them with the marks.** ⚠ **It is the only part of this paper that can be marked next year.**',
  '**2 B2 Book 2, which begins at Unit 13**, in the same seven-cycle shape: **negotiation, the long document, the disagreement with somebody senior, and the paper that has to survive without you.** ⚠ **Ask the class to bring the sheet.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · End-of-Book Test · Answer Key');
