// Proactive English C1 · Syria Edition · Book 1 · MID-BOOK TEST — KEY (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 1–6 — KEY'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** — Reading and Use of English 24 · Writing 12 · Listening 12 · Speaking 12.',
  'Reading and Listening are **1 mark per question**, thirty-six questions in all. Writing has two band tables below, of six marks each. Speaking has a four-row grid printed on the test paper and the guidance for it is at the end of this key.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. ⚠ **Do not slow down.** **The weak forms of _it was not until_, _no sooner had_ and _does not exclude_ are part of what is being tested** and they disappear the moment a reader becomes careful.',
  'The three audio scripts are printed in this key after the listening answers. **Do not photocopy the key.**',
  '**Timing.** One two-and-a-half-hour session does the whole paper if Speaking is run in pairs while the others write, which is how the examination itself is run. Otherwise: Reading and Listening in one lesson of about eighty minutes, Writing and Speaking in the next.',
  '⚠ **Listening Part 4 is not in this test and its absence is deliberate.** **Part 4 is two tasks of five over one recording, and the only difficulty in it is holding both tasks at once** — **a reduced version with one task of four tests nothing the other parts do not.** **It is in the End-of-Book Test at full length.**',
  '⚠ **Nothing in this test is new.** **Every item is traceable to one of the forty-eight lines in the six _I can…_ boxes**, and the table at the end of this key says which.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (24 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · multiple-choice cloze (4)', '1 **B** · 2 **D** · 3 **A** · 4 **C**'],
  ['**Part 2** · open cloze (4)', '5 **which** · 6 **sooner** · 7 **of** · 8 **on**'],
  ['**Part 3** · word formation (4)', '9 **OBSERVATION** · 10 **EXCLUSION** · 11 **MANDATORY** · 12 **CONDENSATION**'],
  ['**Part 4** · transformations (4)', '13 **At no point** · 14 **is not in dispute** · 15 **insisted the form be** · 16 **were taken out**'],
  ['**Part 5** · multiple choice (4)', '17 **B** · 18 **C** · 19 **A** · 20 **C**'],
  ['**Part 7** · gapped text (4)', '21 **C** · 22 **A** · 23 **B** · 24 **D**   _(not needed: **E**)_'],
], [1.3, 3]));
out.push(NOTE('⚠ **Part 1 is collocation and nothing else, and every item here is a declared phrasal verb from Units 1 to 6.** **1 B** — _slip past_ somebody, which is Unit 1\'s set; _slide past_ and _run past_ are not English in this sense and _go past_ takes a thing and not a question. **2 D** — _pitch at_ is Unit 2\'s; the others need a particle the sentence does not have. **3 A** — _plump for_ is Unit 3\'s, and _settle_ needs _on_, _decide_ needs _on_, and _choose_ takes no particle. **4 C** — _pad out_ is Unit 6\'s; _fill out_ a form, _spin out_ a story, and _draw out_ a person. ⚠ **Teach the habit of reading to the end of the sentence and then saying the gap aloud with each option**: three of the four fall away before any rule is remembered, and the one rule that matters is that the particle has to be in the option.'));
out.push(NOTE('**Part 2 is grammar and almost never vocabulary, which is the single most useful thing to tell a class about it.** ⚠ **Item 6 is the one that separates this room**: _No **sooner** had one district minute gone out than two districts acted_ — **the inversion from 5.4, and the candidate who has never written one will try _longer_ or _soon_.** **The trigger is the _than_ further along the sentence and a candidate who has read to the end of it cannot miss the item.** **Item 5 is a sentential relative** _(which refers to the whole of the clause before it)_ **and _that_ is not available after a comma.** **Item 7 is _of no use_, a fixed phrase worth learning whole.** **Item 8 is the preposition that goes with _act_**, and it is the only one-mark item in this paper a weak candidate is likely to get.'));
out.push(NOTE('⚠ **Part 4 at C1 allows three to six words and the commonest loss is a candidate who writes a correct sentence of seven.** **Count aloud in the feedback.** **13 _At no point_ is three** and the inverted verb is already printed, which is the kind of item that looks harder than it is. **14 _is not in dispute_ is four and tests whether the candidate can run the extraposed sentence backwards into a plain subject** — **5.3 in one item.** **15 _insisted the form be_ is four and is the subjunctive from 4.7\'s check**: _insisted the form should be_ is five and also acceptable; **_insisted the form was_ is not.** **16 _were taken out_ is three.** ⚠ **Accept the five-word subjunctive in 15 and nothing else in the other three.**'));
out.push(NOTE('**Part 5 is the part where candidates answer from the paragraph nearest the question rather than from the text.** ⚠ **Item 17 is built on exactly that**: _she quoted me unfairly_ appears in the text as the reading the writer rejects, and about a third of any class takes A. **The words are present and the claim is the opposite, which is the commonest wrong answer in every reading part at every level.** **Item 20 is the attitude item** — _I understand the reading and I think it is wrong, and I have stopped explaining_ — **and candidates who look for a single clear feeling will take B.** ⚠ **Teach the two-step: find the part of the text the question is about, then test the other three options against that part rather than against memory.**'));
out.push(NOTE('⚠ **Part 7 is matched at the edges, not read.** **For each gap, underline the last four words before it and the first four after it, and look for a paragraph whose opening answers the first and whose ending leads into the second.** **Gap 22 is the clearest**: before it, _did the same to the shortened version_; after it, _what the counting changed was not the length_. **The paragraph must contain the result of the two counts, which is A, and it can be found without reading A as prose.** **The extra paragraph is E**, a true statement about a different subject and the standard shape of a Part 7 distractor — **and the class should be told that the extra paragraph is almost never nonsense: it is almost always relevant, interesting and in the wrong place.**'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (12 marks)'));
out.push(S('Part 1 · The essay (6 marks)'));
out.push(table(['Criterion', 'Mark'], [
  ['**Two points named in the first paragraph, with the ground for choosing them**', '1'],
  ['**The third point not mentioned again anywhere**', '1'],
  ['**An objection raised and answered in each body paragraph**', '1'],
  ['**A conclusion that does not repeat the first paragraph**', '1'],
  ['**Range and accuracy: one marked order at most, and the rest carried by position**', '1'],
  ['**220–260 words**', '1'],
], [4, 1], { headFill: C.navy }));
out.push(SAMPLE([
  '**Of the three claims, the first and the second are the two that can be tested against a document anybody has, and the third is a claim about what a reader knows that this essay has no way of checking.** **Both of the first two are claims about what happens before a word is written.**',
  '**That every document has two audiences is the stronger of the two and it is demonstrable in any committee.** **A nine-hundred-word paper reaches the people who decide as one line on an agenda, and that line is almost always the paper\'s first sentence.** ⚠ **The objection is that this makes the writer responsible for somebody else\'s carelessness, and it is not carelessness: an agenda line is one line because an agenda is one page.** **The writer is responsible for which of their sentences can stand alone, and for nothing else.**',
  '**That documents are long because nothing has been counted is harder to test and it follows from the first.** **A writer who has not counted what is in a paragraph cannot tell a hundred words carrying one fact from a hundred carrying six, and both feel like work.** ⚠ **The objection here is real: counting rewards reports and punishes arguments.** **A paper arguing a position may have four facts in it and be the most useful thing a committee reads all year** — **and the answer is a different count, of claims made against claims defended.**',
  '**Put together, the two make a claim neither makes alone.** **If the first sentence is what travels and nobody has counted what the rest carries, then the length of a document is the one thing about it that nobody can read** — ⚠ **which is a fact about the person who asks for a shorter version, and that is where the third point was.**',
]));
out.push(A('**249 words.** ⚠ **The sentence that earns the sixth mark is _the length of a document is the one thing about it that nobody can read_**, which appears in neither claim and is what the essay exists to say. **Mark the first paragraph before anything else**: a script that has not named both points with a ground loses two marks there and cannot recover them later, however good the body is.'));
out.push(S('Part 2 · A proposal or a report (6 marks)'));
out.push(table(['Criterion', 'Mark'], [
  ['**2(a) first paragraph a fact with no ask · 2(b) what happens now, with figures**', '1'],
  ['**2(a) the ask once, and nowhere else · 2(b) one recommendation, and one only**', '1'],
  ['**2(a) the present cost from the reader\'s own figures · 2(b) what could not be established**', '1'],
  ['**Something refused: an extrapolation, an inference or a request**', '1'],
  ['**Register: no adjective a measurement could replace**', '1'],
  ['**220–260 words**', '1'],
], [4, 1], { headFill: C.navy }));
out.push(SAMPLE([
  '**PROPOSAL: THE SECOND PRINTER** · _for the director_ · **16 February**',
  '**Of the four hundred and twelve documents printed at this office in January, two hundred and ninety were printed on the one machine in the back room.** **Eleven people share it and nine of them work on the first floor.** **On the eleven mornings I counted, somebody was waiting at it for more than five minutes on nine of them.**',
  '**What I am asking for.** **A second machine on the first floor, at about four hundred thousand pounds with a year\'s consumables.** **That is the whole of the ask and it is not repeated below.**',
  '**What this office is paying now, out of its own figures.** **Nine mornings of waiting at about seven minutes each is about an hour a week.** **An hour of the grade waiting is costed at about thirty thousand pounds in your own 2025 establishment return**, which is a million and a half a year against four hundred thousand once. ⚠ **I do not know that the waiting time is unproductive and I am not going to claim it: people read while they wait, and two of them told me so.**',
  '**Your reason for seeing no problem, which is correct as stated.** **The machine has never broken down.** ⚠ **It has not, and the queue is not about reliability: it is about one machine and two floors.**',
  '**What I am not asking for.** **Not a replacement for the back-room machine.** **Not colour.** **And not a decision before the March budget.**',
  '**What would make this unnecessary.** **If the first-floor copier were enabled to print, nine of the eleven would stop going downstairs.** **That is a setting and not a purchase**, and if it is done I shall withdraw this.',
]));
out.push(A('**238 words.** ⚠ **The sixth mark is for the refusal** — _I do not know that the waiting time is unproductive and I am not going to claim it_ — **and the script that omits it has written an estimate rather than an account.** **Mark the first paragraph for the absence of an ask before reading anything else**: it is the one criterion in this question that cannot be repaired by the rest of the script.'));

out.push(S('Part 2 · the report answer (2b), for comparison'));
out.push(SAMPLE([
  '**REPORT: HOW THE MORNING LIST REACHES THE BENCH** · _for the branch manager_ · **16 February**',
  '**This report is 241 words and carries 17 facts.** **It describes what happens, not what the procedure says.**',
  '**What happens now.** **The clinic sends the dated list by electronic mail between twenty past seven and about nine.** **On the eleven mornings I recorded it arrived after half past eight on six of them.** **It is printed at the back-room machine by whoever is first in, and carried to the bench.** **On four of the eleven mornings two copies were printed because nobody could tell whether the first had been.**',
  '**What I could not establish.** **Whether a superseded list has ever reached the bench.** ⚠ **Nobody can name an occasion, which is not evidence that none has occurred: a list nobody noticed was superseded is a list nobody will remember.** **I also could not establish the clinic\'s own sending time, because the system records receipt and not despatch.**',
  '**Recommendation, and it is one.** **The printed list should carry the time of printing in its header.** **The supplier makes the change in about an hour and the next scheduled visit is 24 February**, so the cost is nothing in money and nothing in time if it is asked for this week.',
  '**What I am not recommending.** **Not a second machine.** **Not a change to the clinic\'s sending arrangements, which are not ours.** **Not a rule about who prints, which would be unenforceable at twenty past seven.**',
]));
out.push(A('**241 words, and the mark it is most likely to lose is the last one: it is nineteen words short of the band and a script of 219 loses the sixth mark outright.** \u26a0 **The sentence that earns the fourth mark is _a list nobody noticed was superseded is a list nobody will remember_**, which refuses the inference the paragraph invites. **Both sample answers refuse something, and in both the refusal is the sentence that makes the rest believable** \u2014 **it is the one criterion in this question that a strong script almost never has by accident.**'));
out.push(NOTE('**Marking the writing consistently across a class is harder than marking it well, and the fix is the order of operations.** \u26a0 **Mark one criterion across all the scripts before moving to the next.** **Read every first paragraph for the two named points and the ground; then every script for the third point reappearing; then every body paragraph for an objection.** **Six passes through a set of ten scripts takes less time than ten passes through six criteria and produces marks a student can argue with.** **And the two criteria that must be marked first, because they cannot be repaired by anything later in the script, are _two points named with a ground_ in Part 1 and _no ask in the first paragraph_ in 2(a).**'));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (12 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · two extracts (4)', '25 **B** · 26 **A** · 27 **C** · 28 **B**'],
  ['**Part 2** · sentence completion (4)', '29 **appears** · 30 **one** · 31 **one and a half** _(accept_ 1.5 _)_ · 32 **own**'],
  ['**Part 3** · long interview (4)', '33 **C** · 34 **D** · 35 **A** · 36 **C**'],
], [1.3, 3]));
out.push(NOTE('⚠ **Part 2 answers are the speaker\'s own words and a paraphrase is not given the mark**, which is the single most useful thing to tell a class before this paper. **Item 29 is _appears_ and a candidate who writes _seems_ has heard it correctly and will not be marked right.** **Item 31 carries two numbers close together — a metre and a half, and the four words — and the sentence asks for the distance**: ⚠ **underline the grammatical slot before the recording starts, and here it is _by about ______ metres_, which cannot take four.** **Item 32 is _own_ and is the one most candidates miss**, because the phrase _a sentence of its own_ is unstressed and arrives at the end of a long sentence, where this book has spent six units saying the listener stops.'));
out.push(S('Track MT-1 · audio script'));
out.push(dlg(null, [
  ['Extract One — Woman', 'It is not wrong, and that is what I keep saying to people. The minute says the April figure was twenty-two and the April figure was twenty-two.'],
  ['Extract One — Man', 'Then what is the difficulty?'],
  ['Extract One — Woman', 'She gave it in the meeting with a clause on the end — that April had a vacancy for nineteen days — and the clause is not in the minute. So the committee has a number that means one thing, and she gave them a number that meant another, and nobody can be shown to have done anything wrong.'],
  ['Extract One — Man', 'And it was at the end of what she said.'],
  ['Extract One — Woman', 'At the end, and quietly, and after a long sentence. Which is where limits always are.'],
  ['Extract One — Man', 'Then from the next meeting I shall do what the clerk in planning does. Somebody gives a figure, I write it down, and I ask them there and then what it does not cover. He says it costs four minutes in ninety and I think four minutes is cheap.'],
  ['Extract Two — Manager', 'You said you count before you cut. Count what? Words?'],
  ['Extract Two — Records officer', 'Never words. Anybody can count words and the number tells you nothing you need. I count the facts. A figure, a date, a name, a document reference, a finding — that is a fact, and the rest is prose. I write the number in the margin of each paragraph and add them up.'],
  ['Extract Two — Manager', 'And what does that give you?'],
  ['Extract Two — Records officer', 'It gives me the paragraphs that have none, and there are always one or two on a page. It also gives me the ratio, which is the thing a reader actually wants when they ask for a shorter version.'],
  ['Extract Two — Manager', 'I have never counted anything in my life. What I do is take out the last page, because the last page is the one over the limit.'],
  ['Extract Two — Records officer', 'Everybody does. And the end of your document is where your limitation lives.'],
]));
out.push(S('Track MT-2 · audio script'));
out.push(dlg(null, [
  ['Surveyor', 'I wrote four words in 2017 that cost somebody a year. The boundary appears to follow the wall. Appears — and I meant it, because I had the deeds for one side only, and I said so in the next sentence.'],
  ['Surveyor', 'The solicitor quoted the four words in a letter and did not quote the next sentence. Why would he? It was a different sentence. The other side agreed on the strength of it, and then the second set of deeds turned up, and the wall was in the wrong place by about a metre and a half.'],
  ['Surveyor', 'Nobody did anything dishonest. The limit was in a sentence of its own, so it travelled separately, and a document that travels separately gets left behind. That is all that happened. I had written the most careful finding of my career and put the care in the wrong sentence.'],
  ['Surveyor', 'What I do now is put the limit inside the claim. On the deeds for the eastern parcel, which are the only deeds I have seen, the boundary appears to follow the wall. It is longer and it is uglier and nobody has separated it from itself in nine years.'],
]));
out.push(S('Track MT-3 · audio script'));
out.push(dlg(null, [
  ['Interviewer', 'You have chaired that committee for nine years. What did you ask authors for, in the early years?'],
  ['Chair', 'A shorter version. Every time, for about nine years. If a paper came in at eleven pages I asked for two, and I thought I was being reasonable, and the authors thought I was being reasonable, and we were both wrong.'],
  ['Interviewer', 'Wrong in what way?'],
  ['Chair', 'I worked out eventually what I had actually been asking for, and it was not a shorter paper. It was an answer to a question I had never put into words: is the middle of this worth the hour it will cost me? And a summary cannot answer that. A short version of a padded paper is a padded short version, and from the outside the two are identical. I was asking people to do a piece of work that could not tell me the thing I wanted to know.'],
  ['Interviewer', 'What changed your mind?'],
  ['Chair', 'An officer, and she did not argue about it at all. She put two numbers at the top of her report. Nine hundred and forty words, and forty-one facts, with the list on page two. I read it twice to be sure I had understood what the second number was for.'],
  ['Interviewer', 'And did you check the list?'],
  ['Chair', 'The first time, yes. Four of the forty-one, in under a minute. I have not checked anybody\'s since and I do not need to. A number that can be checked behaves differently from one that cannot, whether or not anybody checks it.'],
  ['Interviewer', 'Does the ratio tell you what to read?'],
  ['Chair', 'That is what I expected and it is not what happened. It tells me what to read carefully, which is a different decision and a better one. A dense eight pages now gets my whole afternoon and a thin four gets ten minutes, and before the two numbers existed those two documents got exactly the same treatment from me, which was the first page and the last.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (12 marks)'));
out.push(A('**The grid is printed on the test paper and the four rows are worth three marks each.** ⚠ **Mark Part 2 and Part 3 while they happen and the other two afterwards**, because Parts 1 and 4 are short and nothing in them is decided in the first fifteen seconds, where Parts 2 and 3 are.'));
out.push(table(['Row', 'What 3 looks like at C1', 'What costs a mark'], [
  ['**Grammar and vocabulary**', 'A marked order used once, where it does something; the declared lexis of Units 1–6 used without strain', 'Three it-clefts in two minutes; a phrasal verb produced because it was on a list'],
  ['**Discourse management**', 'Part 2: two photographs, not three, and a finish on a full stop. Part 3: two minutes that produce five costs and five conditions', 'A third photograph mentioned; a decision reached in the first thirty seconds'],
  ['**Interactive communication**', 'Questions about the options; a partner given something to say that is not about them', '_Do you agree?_ · _I do not mind, what do you think?_'],
  ['**Pronunciation**', 'A question that comes down at the end; a limit said in one breath', 'A rising question; a pause before the limit'],
], [1.2, 2.4, 2], { headFill: C.navy }));
out.push(NOTE('⚠ **The commonest loss in Part 3 is a pair who decide in the first thirty seconds and then have ninety seconds with nothing to do**, and it is a loss of two marks and not one: discourse management, because the task was not done, and interactive communication, because the ninety seconds are where that row is awarded. **Do not warn them during the task.** **Let it happen, mark it, and show them the timing afterwards** — **4.1 made exactly this point with Mrs Ajouz\'s twenty-five seconds and a class that has lost two marks to it once will not lose them again.** ⚠ **And in Part 2, the thirty seconds on the partner\'s pair is where most candidates summarise.** **A summary scores nothing in that row: the thirty seconds have to add something, and 3.4 taught the move.**'));
out.push(NOTE('\u26a0 **Running Speaking with an odd number of students, which is the usual case.** **Make one group of three and give Part 2 three turns of one minute**, with the thirty-second question going to the student who did not speak last. **Part 3 runs as a three and the two minutes become two and a half** \u2014 **and the examination itself does exactly this, so nothing is being improvised.** **What must not happen is a student doing Part 3 twice**, once with each partner: the first run tells them what the five options cost and the second is not a test of anything. **If you are short of time, cut Part 1 to one question and Part 4 to two.** **Do not cut Part 3**, which carries four of the twelve marks and is the only part of this paper that cannot be practised alone.'));
out.push(NOTE('**What to do with a class that has scored badly on Part 7, which happens more often than on any other part.** \u26a0 **Do not reteach the text.** **Give them the same six paragraphs and the same base text with the gaps in different places** \u2014 **it takes ten minutes to make and it tests the method rather than the memory.** **Then run it as a timed exercise with the four-step instruction on the board: whole text first, edges second, paragraph third, read-through last.** **A class that scores badly here is almost never reading badly: it is reading the paragraphs as prose and choosing by subject**, which is what the extra paragraph is built to punish.'));
out.push(sp());
out.push(box('Traceability — every item in this test, and the line it comes from', [
  '**Part 1** · phrasal verbs from the declared sets of Units 1, 2, 3 and 6 · _I can… tell a cut that removes words from a cut that removes facts_ (6).',
  '**Part 2** · the sentential relative (5.2) · the inversion (5.4) · _of no use_ (6.1) · the preposition after _act_ (5.7).',
  '**Part 3** · word-formation sets of Units 1, 3, 4 and 6.',
  '**Part 4** · 13 the inversion (5.4) · 14 extraposition (5.3) · 15 the subjunctive after _insist_ (4.4 and the Unit 4 check) · 16 the passive phrasal (6.1).',
  '**Part 5** · the limit inside the claim (4.5) · what a quoter takes (5.7).',
  '**Part 7** · the fact count (6.1 and 6.6) · where a cut falls (6.4).',
  '**Writing 1** · the essay instruction of 3.5 and 3.6 · emphasis as a paragraph property (5.5).',
  '**Writing 2** · the proposal (4.6) · the report (6.6) · the refusal (4.6 and 6.5).',
  '**Listening 1** · the limit dropped from a minute (5.7) · the fact count (6.6).   **Listening 2** · the limit in its own sentence (4.5).   **Listening 3** · length against density (6.6 and 6.7).',
  '**Speaking** · Part 1 the opening questions of 1.1 and 6.1 · Part 2 three photographs and two chosen (3.3) and the thirty seconds (3.4) · Part 3 the two minutes (4.1) and the decision with its discard (4.2) · Part 4 the discussion questions of 2.4.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Mid-Book Test · Key');
