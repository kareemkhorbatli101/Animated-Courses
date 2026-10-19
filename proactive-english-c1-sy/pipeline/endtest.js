// Proactive English C1 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12)
const L = require('./lib');
const { p, h1, pb, sp, box, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('END-OF-BOOK TEST · Units 1–12'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (80 min) · **Writing** (90 min) · **Listening** (about 40 min) · **Speaking** (in pairs, about 18 minutes with your teacher).',
  '**Total: 100 marks** (Reading and Use of English 40 · Writing 20 · Listening 20 · Speaking 20).',
  '⚠ **All eight Reading and Use of English parts are in this paper.** **Parts 2, 6, 7 and 8 have each been met once in Book 1** — **Part 2 in Unit 4, Part 6 in Unit 8, Part 7 in Unit 6 and Part 8 in Unit 7** — **and they are the four to look at again before you sit this.**',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 1–12. Nothing in it is a surprise.',
  '⚠ **If you finish early, read your two written answers three times**: once for **the last four words of every paragraph**, once for **every adjective a measurement could replace**, and once for **every count with no denominator.**',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (80 minutes · 40 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (5 marks)', [
  'For questions **1–5**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE RETURN NOBODY HAD ASKED FOR**',
  'A records clerk in a governorate office was asked last spring how many of the files she sends out come back. It was a question nobody had ever **(1)** ______ to her, and she found she could answer it to within one: nine of forty-one, over three years.',
  'The arrangement that produced the nine had **(2)** ______ down over the best part of a decade and had never been examined, because every individual return had an individual explanation and nobody had ever added them up. Nor had anybody **(3)** ______ on to the fact that six of the nine were returned for something the file did not say rather than for something it said wrongly.',
  'The absence of a single figure — how many queries were dealt with at the counter and never recorded — **(4)** ______ against the file in six cases out of nine, and the clerk had not known it was absent, because a document does not look wounded where a fact has been taken out of it.',
  'She now puts the figure at the top of every file, and she is careful about what she claims for it. The practice **(5)** ______ both ways: an officer who is told what the record does not contain can refuse the file on exactly that ground, and two of them have.',
]));
[
  '**1**   **A** set   **B** put   **C** laid   **D** placed',
  '**2**   **A** worn   **B** bedded   **C** kept   **D** held',
  '**3**   **A** fastened   **B** gripped   **C** cottoned   **D** clung',
  '**4**   **A** argued   **B** reasoned   **C** pleaded   **D** told',
  '**5**   **A** breaks   **B** turns   **C** cuts   **D** folds',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Open cloze (5 marks)', [
  'For questions **6–10**, write **one** word in each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A SUMMARY TAKES, AND WHAT IT LEAVES**',
  'Not only **(6)** ______ the figure missing from the schedule; the reason it had been given was missing too, and the two absences are not of the same kind. A figure can be asked for. A reason nobody knows was ever written cannot.',
  'No sooner **(7)** ______ the schedule gone out than two districts acted on it in opposite directions, each of them reading the same four words correctly. It is of **(8)** ______ use at all to tell a reader that something has been left out without telling them what, because a reader who is told only that something is missing distrusts the whole document and can check none of it.',
  'What a reader at the far end of this process actually has is one sentence, and it is **(9)** ______ that sentence that they will act. Under no circumstances, therefore, **(10)** ______ a limitation be left standing in a sentence of its own, where it is a separate object and can be dropped without anything appearing to break.',
]));
out.push(sp());
out.push(box('Part 3 · Word formation (5 marks)', [
  'For questions **11–15**, use the word given in capitals at the end of each line to form a word that fits in the gap.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A YEAR OF THIS IS FOR**',
  'The **(11)** ______ of a claim\'s strength against the evidence actually held is the whole of what the year has taught.   **CALIBRATE**',
  'An assertion that goes beyond what the measurements will support is **(12)** ______ , however carefully it has been written.   **WARRANT**',
  'A reading of the figures that no document supports is **(13)** ______ , and the honest course is to say so in the sentence that carries it.   **CONJECTURE**',
  'Nine months produced a **(14)** ______ that nobody in the room could have described in September and that all ten can now date.   **COMPETENT**',
  'The **(15)** ______ of a habit is dated not by the day it began but by the last occasion on which its absence was noticed.   **ACQUIRE**',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (6 marks · two marks each)', [
  'For questions **16–18**, complete the second sentence so that it means the same as the first. **Use the word given.** Do not change the word given. Use **between three and six words**, including the word given.',
], C.lteal, C.teal));
[
  '**16**  The officer did not mention the missing entries at any time.   **POINT**\n     At ______________________________ the missing entries.',
  '**17**  Nobody disputes that the day-book is the only record this branch keeps.   **DISPUTE**\n     That the day-book is the only record this branch keeps ______________________________.',
  '**18**  The hedge could not be rendered in the other language.   **CARRIED**\n     The hedge ______________________________ the other language.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 5 · Multiple choice (5 marks)', [
  'You are going to read an article by a court translator. For questions **19–23**, choose the answer (**A**, **B**, **C** or **D**) which fits best according to the text.',
], C.lteal, C.teal));
out.push(model([
  '**THE LINE THAT WAS FILED**',
  'I have rendered perhaps nine hundred documents into Arabic for one court, and until last year I believed that the hard part of the work was the words. It is not. The hard part is the handful of things in an English document that have no equivalent at all, and what a reader does when they meet one.',
  'What a reader does is not stop. This is the finding that took me eleven years to arrive at and four minutes to state once I had. A reader who meets an absence supplies something from their own system, immediately and confidently, and nothing in the document tells them they have done it. The English hedge _may well explain_ is a construction with no equivalent in Arabic. It can be replaced with two sentences, and the two sentences are perfectly accurate, and they are twice as long and nobody will print them.',
  'So I began writing a covering line. One sentence, filed with the rendering, saying what had no equivalent and what I had done about it. I thought this was the end of the problem and it was the beginning of a different one. A line that is filed is not a line that is read. In July a committee passed a resolution resting on a sentence the English paper does not contain, and my covering line recording exactly that difference had been in the file since the fourth of the month.',
  'The temptation at that point is to write to the author or to the committee and say that the rendering was correct. It was correct, and saying so is the one sentence in such a letter that can be answered, and a letter with an answerable sentence in it produces a reply about that sentence and no resolution withdrawn. The useful letter says four things and none of them is about my work: what the English says, what the Arabic says, that the difference is a construction with no equivalent, and what the resolution therefore rests on.',
  'I have changed one thing since and it is not about language. The covering line now goes to the secretary with a request that it be circulated rather than filed, and I keep the reply. Three of the last four were circulated. The fourth was not, and the request is the only reason I know which.',
  'People ask me whether the court should employ a better translator and I think the question is the wrong shape. The rendering was not wrong in any of the nine hundred. What was wrong is that a document travelled through four hands and the only person who knew which sentence would not survive the journey was the one person with no standing to tell anybody.',
  '**19**  What does the writer say she believed for most of her career?   **A** that renderings should be longer   **B** that readers stop when they meet something unfamiliar   **C** that the difficulty of the work lay in the words   **D** that courts do not read what she files',
  '**20**  What does she say a reader does when they meet an absence?   **A** they ask the translator   **B** they supply something from their own system without knowing it   **C** they read the English version as well   **D** they distrust the document',
  '**21**  Why does she say the covering line was the beginning of a different problem?   **A** it was too long to file   **B** nobody understood it   **C** it recorded the wrong difference   **D** a line that is filed is not a line that is read',
  '**22**  Why does she say a letter must not state that the rendering was correct?   **A** it is the one sentence that can be answered   **B** it would be untrue   **C** it would offend the committee   **D** the committee already knows',
  '**23**  What does she say was actually wrong in the July case?   **A** the rendering   **B** the committee\'s procedure   **C** that the only person who knew had no standing to say so   **D** that the court employs one translator',
]));
out.push(pb());
out.push(box('Part 6 · Cross-text multiple matching (4 marks)', [
  'You are going to read four extracts in which teachers of professional English give their views on what a second year of such a course should do. For questions **24–27**, choose from the extracts **A–D**. The extracts may be chosen more than once.',
], C.lteal, C.teal));
out.push(model([
  '**A**  A second year should take the moves of the first and make them harder in one direction only: the power of the reader. The same limitation, written under somebody else\'s claim; the same degree of certainty, stated to a committee that has already decided. Length and new genres are a distraction, and a course that offers a longer version of a task the student can already do has given them nothing to carry. What I would drop from most second-year syllabuses is the vocabulary list, which is where the planning time goes and where the gain is smallest.',
  '**B**  The first thing a second year has to do is find out what the first year actually left. That cannot be done from a test, because a test measures what a student can produce when asked, and almost everything that matters in adult professional writing is what they do without being asked. I ask for an occasion with a date — something that happened or did not happen on a day the student can name — and about a third of the first answers are abandoned within the hour. The exercise is unpleasant and I know of nothing that replaces it. As for the gains themselves, they come from writing to somebody who can refuse you, and that is the only axis along which I have seen a move of this kind get harder without becoming a different move.',
  '**C**  I would spend the first fortnight on the items a year of English has left standing, and I would expect about half of them to turn out not to be about English at all. They are procedures, hierarchies and missing records in somebody\'s office. A syllabus that treats them as language problems will work at them for a second year and move none, and the student will finish believing the fault is theirs. The repair is a question that takes four seconds and is never asked: if somebody wrote this for you, perfectly, would the thing happen?',
  '**D**  Most second-year courses begin with a vocabulary audit, which is the one thing I am now certain is wasted. The gains in the second year are not lexical. They are decisions about which sentence carries a claim, and a list of words will not reach one of them. I also think the diagnostic question has to come from the student and not the teacher: a list the student wrote in September, read back in June, tells me more in ten minutes than any instrument I have tried.',
  '**24**  Which teacher has a different view from **B** on where the diagnosis of a student\'s needs should come from?',
  '**25**  Which teacher shares **A**\'s view that vocabulary work is the weakest part of a second-year syllabus?',
  '**26**  Which teacher takes a different view from the others on how much of what remains is a language problem at all?',
  '**27**  Which teacher shares **A**\'s view that the useful difficulty is the reader\'s power to refuse?',
]));
out.push(pb());
out.push(box('Part 7 · Gapped text (4 marks)', [
  'You are going to read an article by a pharmacist. **Four** paragraphs have been removed. Choose from the paragraphs **A–E** the one which fits each gap **(28–31)**. There is one extra paragraph which you do not need to use.',
], C.lteal, C.teal));
out.push(model([
  '**THE BOOK THAT IS KEPT BY HAND**',
  'I run a branch that has sent the same registration file to the same officer every year since 2019, and until last August every one of them came back. I had decided some years ago that the reason was my English, and I had worked at my English, and the files had gone on coming back.',
  '**(28)** ______',
  'The file that was accepted is twice as long as the one that was returned, which is not what I expected and is not what anybody in my class expected either. Nothing was taken out of it. Nine entries were added, with their dates, and one sentence was moved.',
  '**(29)** ______',
  'The sentence that was moved is the courtesy formula. I had been told, by implication rather than in words, that the formula was the problem and that a professional document in English does not open by being grateful. That is not what the evidence says. The officer is a formal man who has worked in that office for twenty years and the formula was correctly judged in September; it is in the August version too, in one line, at the end, after the entries.',
  '**(30)** ______',
  'The thing I did not write in the file, and which I wrote in a separate note, is that the day-book is kept by hand because no printed register has ever been made available to this branch. That is not a sentence about my English and no English of mine will change it. What a note can do is name the absence and the return that would supply one, which makes the refusal a decision somebody in the inspectorate has to take rather than one I have to accept.',
  '**(31)** ______',
  '**A**  What changed in August was not a sentence. It was a list. The officer\'s question had always been going to be _on what_, and for four years I had sent him a document that answered a different question very politely. The nine entries are the answer to his question and they had been in a hand-kept book on my counter the whole time.',
  '**B**  I noticed this in July and I did not decide it. I put the two documents side by side for a different reason altogether and found that the formula had moved to the end some time in the spring, without my having chosen to move it, and that there was now one of it instead of two.',
  '**C**  Three queries were dealt with at the counter last year and are not in the book, and the file says so. That line is the one I was most reluctant to write and the only one the officer mentioned. A reader who is told what a record does not contain can refuse it on exactly that ground, and I would rather be refused on a ground I named than accepted on one I had hidden.',
  '**D**  The note went on the eleventh of August and was answered in nine days, which is the fastest reply this branch has had from that directorate. The answer does not give us a register. It says that the governorate holds four and that none has been allocated since 2018, which is a figure nobody here had, and the next note will ask for one of the four.',
  '**E**  The inspectorate has published nothing on hand-kept records since 2017 and the position is therefore unclear to everybody, including, I suspect, the inspectorate. I have stopped trying to establish what the rule is and I write to the people who apply it.',
]));
out.push(pb());
out.push(box('Part 8 · Multiple matching (6 marks)', [
  'You are going to read four accounts by people who have finished a year of professional English. For questions **32–37**, choose from the people **A–D**. The people may be chosen more than once.',
], C.lteal, C.teal));
out.push(model([
  '**A · a wire-service journalist**  The change I can date is that I file a shape with the holes in it and make the calls afterwards. On the eleventh of June the desk ran eighty-six words of mine unchanged, which had not happened in two years, and it has happened four times since. I did not decide to work this way; I noticed about three weeks after it started. What has not changed is the length of my covering notes, which run to four hundred words against a house figure of three hundred, and the three I have written since April were all cut by somebody else, and they were right to cut them.',
  '**B · a doctoral candidate**  Mine is a negative and I value it more than anything else on the list: in June a referee asked me nothing at all about my search, for the first time in four submissions. Four submissions is a denominator and I say so, because a negative without one is a feeling. What I still cannot do is refuse anything to anybody senior. I have the refusal in four registers, point by point, with the office that holds the records named in each, and I have never sent one to my supervisor, and four drafts have been in a drawer since June.',
  '**C · a court translator**  The thing I stopped doing is producing a version first. I write the list — what has no equivalent, what the reader will supply, what I write — and then the rendering, and the list takes twenty minutes and saves the afternoon. It began in about March. The item I have struck off my own September list is not an ability at all: I wrote that I could not sound like a native speaker, and I do not want to, and I do not know why I wrote it. It is struck through rather than crossed off and the September hand is still legible underneath.',
  '**D · a structural engineer**  I have written the same way for twenty years and three things are different, and the one that matters is that I ask what the readings rule out rather than what they show. Fifty-five of fifty-six exclude a specified-grade frame at all but one position. I gave a page of an opinion to my daughter, who repairs nothing and reads nothing of this kind, and she asked who keeps the delivery notes, which is the one question the page was built to produce, and said nothing whatever about the writing. I had wanted her to say it was well written, and it felt like nothing at all.',
  '**32**  Which person gives a figure for something that did not happen?',
  '**33**  Which person says the change they report was not a decision?',
  '**34**  Which person describes a document they can write and have never sent?',
  '**35**  Which person removed an item from their list on the ground that they did not want it?',
  '**36**  Which person says what they wanted from a reader was not what counted as a success?',
  '**37**  Which person mentions something that has not improved and accepts the judgement of the people who corrected it?',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (90 minutes · 20 marks)'));
out.push(box('Part 1 · The essay (10 marks) — you must do this question', [
  'Your class has read an article about writing in a second language at work. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about adults who write in a second language at work. **First**, that what they notice changing is almost always something they have stopped doing, never something they have started. **Second**, that about half of what such a writer still cannot do is not about language at all. **Third**, that the only reliable test of a document is a reader who has no stake in it."_',
  '**Points to discuss: 1** subtractions and not additions   **2** the half that is not about language   **3** the reader with no stake',
  '⚠ **Name the two in the first paragraph with the ground for the choice, and do not mention the third again.** **One of the three is harder to defend than it looks: say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(13));
out.push(pb());
out.push(box('Part 2 · One task from three (10 marks) — answer one question only', [
  '**Either 2(a) · A proposal.** The head of the organisation you work for has money for **one** change this year and has asked for proposals. **Write a proposal.** Write **220–260 words**. You should: open with what the present arrangement costs, in the reader\'s own units, with the evidence named; make the ask **once**; and give the condition on which the arrangement would end, with a date.',
  '**Or 2(b) · A letter.** A document of yours has been summarised by somebody else and a decision has been taken on the summary. **Write a letter to the person who took the decision.** Write **220–260 words**. You should: say what your document says and what the summary says; say what the difference is made of; and say what the decision therefore rests on. ⚠ **Do not write that the summary was wrong.**',
  '**Or 2(c) · A report.** Your manager has asked for a report on one process where you work or study. **Write a report.** Write **220–260 words**. You should: describe what happens now, with figures and their denominators; say what you could not establish and which office holds it; and make one recommendation, with its cost and its limitation.',
  '⚠ **Write the letter of the question you have chosen in the box.**',
], C.lorange, C.orange));
out.push(table(['Question chosen', ''], [['', '']], [1, 3]));
out.push(...lines(13));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 40 minutes · 20 marks)'));
out.push(p('_You will hear each recording twice._', { color: '7F7F7F', after: 120 }));
out.push(box('One difference from the examination, stated so that nobody is surprised by it', [
  '⚠ **Part 4 is given here as one task over five speakers and the examination gives two tasks over the same five.** **The reason is arithmetical and not pedagogical**: twenty marks cannot carry ten Part 4 items alongside three other parts without reducing Parts 1 to 3 below the shape they have in the paper. **The two-task version was practised twice in Book 1, in 8.7 and 12.7**, and the Answer Keys for both carry the mechanics — **in a two-task item the second task\'s wrong options are built out of the first task\'s answers.**',
], C.lyellow, C.orange));
out.push(box('Part 1 · Three extracts (6 marks)', [
  '🔊 **Track EB-1.** You will hear three short extracts. For questions **38–43**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**Extract One — two colleagues looking at a returned file.**',
  '**38**  What does the woman say the file was returned for?   **A** something it did not say   **B** its wording   **C** a wrong figure',
  '**39**  What does the man say he had assumed for four years?   **A** that the officer was difficult   **B** that the form was at fault   **C** that the fault was his English',
  '**Extract Two — a supervisor and a research student.**',
  '**40**  What does the supervisor say she no longer asks for?   **A** a longer abstract   **B** a shorter version   **C** a list of limitations',
  '**41**  What does the student say changed the reading order?   **A** a question she could not answer   **B** advice from a colleague   **C** a returned paper',
  '**Extract Three — two members of a committee.**',
  '**42**  What does the man say the covering line should have done?   **A** been shorter   **B** been circulated rather than filed   **C** been written in both languages',
  '**43**  What do they agree must not be asked for?   **A** an apology from the translator   **B** a new rendering   **C** the withdrawal of both resolutions',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Sentence completion (5 marks)', [
  '🔊 **Track EB-2.** You will hear a records clerk talking about the figure she now puts at the top of every file. For questions **44–48**, complete the sentences with **a word or a number**.',
], C.lteal, C.teal));
[
  '**44**  Over three years, ______________ of the forty-one files she sent out came back.',
  '**45**  Six of those were returned for something the file did not ______________ .',
  '**46**  The figure nobody had was the number of queries dealt with at the ______________ .',
  '**47**  She says a document does not look ______________ where a fact has been taken out of it.',
  '**48**  Two officers have now refused a file on the ______________ she named herself.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Long interview (4 marks)', [
  '🔊 **Track EB-3.** You will hear an interview with a woman who teaches professional English. For questions **49–52**, choose the answer (**A**, **B**, **C** or **D**) which fits best.',
], C.lteal, C.teal));
[
  '**49**  What does she say she asks students for in the first week of a second year?   **A** a diagnostic test   **B** a list of weaknesses   **C** a piece of writing   **D** an occasion with a date',
  '**50**  Why does she say a test will not do the work?   **A** students prepare for it   **B** it takes too long   **C** it measures what they produce when asked   **D** it is unreliable at this level',
  '**51**  What does she say about the items that turn out not to be about language?   **A** they should be dropped from the course   **B** they are about half of what remains   **C** they are the student\'s own fault   **D** they can be fixed in a fortnight',
  '**52**  What does she say is the only direction in which a move should be made harder?   **A** its length   **B** its genre   **C** the reader\'s power to refuse   **D** the time allowed',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 4 · Multiple matching (5 marks)', [
  '🔊 **Track EB-4.** You will hear five people saying what they will do differently next year. For questions **53–57**, choose from the list (**A–H**) what each speaker says. There are three letters you will not need.',
], C.lteal, C.teal));
out.push(q('**A** they will write the list before the version   **B** they will send the refusal they have already drafted   **C** they will put the figure in the first paragraph   **D** they will ask for a covering line to be circulated   **E** they will give a page to a reader with no stake in it   **F** they will date every stopping by its last instance   **G** they will stop apologising for asking   **H** they will keep their September list'));
out.push(q('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______'));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 18 minutes · 20 marks)'));
out.push(p('_Your teacher runs all four parts. Nothing here is new._', { color: '7F7F7F', after: 120 }));
out.push(box('Part 1 · Interview (4 marks) — your teacher asks each student, with the follow-up printed', [
  '**1** What is one thing you now do in writing that you did not do a year ago? ⚠ **Follow-up, always asked:** _when was the last time you did it the old way?_',
  '**2** Tell me about something on your list that has not moved. **Follow-up:** _if somebody wrote it for you, perfectly, would the thing happen?_',
  '**3** Has anybody outside your work ever read something you wrote? **Follow-up:** _did they say anything about the writing itself?_',
  '**4** What will the person who teaches you next year most need to know about you? ⚠ **Follow-up:** _which document shows it?_',
  '⚠ **The follow-up is part of the question and is asked whatever the first answer is.** **A candidate who answers the first with a feeling and the second with an occasion has scored the mark; one who answers both with feelings has not.**',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (6 marks) — three photographs, you take two · one minute · then thirty seconds on your partner\'s pair', [
  '**Student A.** Here are three photographs. **Choose two** and compare them, saying **what the people might have just decided** and **what they might be about to do.**',
  '_**1** A woman at a counter writing in a large hand-ruled book while a man waits._   _**2** Two people at a table with the same document in two languages, one of them pointing at a line._   _**3** A man handing a single sheet to a young woman in a kitchen._',
  '**Student B**, after A has finished: **thirty seconds** — _which of A\'s two photographs shows the person with least power to refuse, and why?_ ⚠ **Do not summarise what A said.**',
  '**Student B.** Here are three photographs. **Choose two** and compare them, saying **why the people might be doing these things** and **what might have gone wrong before.**',
  '_**1** A committee table with nine bundles and one empty chair._   _**2** A woman reading two versions of a letter side by side, nine months apart._   _**3** Two engineers on scaffolding, one of them photographing a bolt._',
  '**Student A**, after B has finished: **thirty seconds** — _which of B\'s two photographs would be hardest to write one true sentence about, and why?_',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (6 marks) — fifteen seconds to read · two minutes together · then one minute to decide', [
  '⚠ **An organisation has money for one thing in the coming year. Which should it spend it on?**',
  '**A** _A printed register for every branch that keeps records by hand_   **B** _A second year of English for the four people who write most_   **C** _A rule that every covering line must be circulated and not filed_   **D** _One person whose job is to read documents as an outsider would_   **E** _Nothing: ask each office what it already knows and has never written down_',
  '⚠ **The two minutes must not decide anything.** **Give each option a cost, a condition and the office that would have to agree to it**, and ask no question about your partner.',
  '**And then your teacher will ask:** _Now decide which one the organisation should choose._ ⚠ **One minute. Name the discard and say why. Then name the failure condition.**',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (4 marks) — five questions, each with the examiner\'s follow-up printed', [
  '**1** Some people say that if you cannot do a thing in your own language, learning to do it in a second one will not help. What do you think? ⚠ **Follow-up to the other candidate:** _can you give an example where that is false?_',
  '**2** Should a person who summarises your work have to tell you what they left out? **Follow-up:** _who would have to agree to that, and what would it cost them?_',
  '**3** Is a compliment on your writing ever useful? ⚠ **Follow-up:** _what would you rather a reader said?_',
  '**4** Is it ever right to leave a limitation out of a document? **Follow-up:** _who carries the risk if you do?_',
  '**5** An adult who writes competently in a second language is said to notice only the things they have stopped doing. Why might that be? **Follow-up:** _how would you find out whether you had started doing something?_',
  '⚠ **The follow-up goes to the candidate who has not just spoken, and it is not optional.** **Half the marks in this part are for what a candidate does with a question built on somebody else\'s answer** — **which is 7.2 and 12.7, and is the one thing a prepared answer cannot cover.**',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (20 marks)', [
  '**Grammar and vocabulary (5)** — range, and whether the marked orders and the hedges are used once each rather than four times.',
  '**Discourse management (5)** — in Part 2, two photographs and not three, finishing on a full stop; in Part 3, two minutes that decide nothing and a discard named in the last minute.',
  '**Interactive communication (5)** — questions about the options and not about your partner; a concession at the strongest point and not at the weakest; no _do you agree_.',
  '**Pronunciation (5)** — a claim about yourself said without a rise; a limit said in one breath; _could not have known_ with no stress on _could_.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Where every mark in this paper was taught', [
  '⚠ **Nothing in this test is new and this table says where each part was taught.** **A student who has lost marks in one row knows which unit to reread, and a teacher marking the paper knows which cycle to go back to.**',
], C.lblue, C.navy));
out.push(table(['PAPER AND PART', 'MARKS', 'WHERE IT WAS TAUGHT'], [
  ['**1 · Part 1** multiple-choice cloze', '**5**', '**10.7**, and the phrasal verbs of Units 9 and 12'],
  ['**1 · Part 2** open cloze', '**5**', '**4.7** — and the inversions of 11.7'],
  ['**1 · Part 3** word formation', '**5**', '**9.7**, on this book\'s own word-formation sets'],
  ['**1 · Part 4** key-word transformations', '**6**', '**2.7** and **11.7** — two marks an item, and most candidates lose one'],
  ['**1 · Part 5** multiple choice', '**5**', '**5.7** and **12.7** — the distractor is a true statement in the wrong place'],
  ['**1 · Part 6** cross-text multiple matching', '**4**', '**8.7** — where writers appear to differ and where they actually do'],
  ['**1 · Part 7** gapped text', '**4**', '**6.7** — and the paragraph that is not needed is about the right subject'],
  ['**1 · Part 8** multiple matching', '**6**', '**7.7** — read the questions first and the texts once'],
  ['**2 · Part 1** the essay', '**10**', '**1.7 · 3.7 · 5.7 · 7.7 · 9.7 · 11.7** — the sixth essay of Book 1'],
  ['**2 · Part 2** proposal, letter or report', '**10**', '**12.6** · **9.6** and **11.6** · **6.6**'],
  ['**3 · Parts 1–4** listening', '**20**', 'Three of each part across the twelve units'],
  ['**4 · Parts 1–4** speaking', '**20**', '**3.3** · **4.1** and **4.2** · **7.2** and **12.7**'],
], [3, 1, 3]));
out.push(sp());
out.push(box('After the test', [
  '⚠ **The mark out of a hundred is a measurement and not a verdict**, and every item in this paper is traceable to one of the ninety-six lines in the twelve _I can…_ boxes. **Go back to the unit where you lost most marks and read its eight lines again.**',
  '**And then do the one thing this book has asked for that is not in any paper.** ⚠ **Write the readiness page: three moves, three harder versions, three questions.** **Nobody marks it.** **Its reader is a teacher you have not met, who will have four minutes** — **and a student who arrives in September with three rows and a second sheet has brought work, which is the last thing Book 1 has to say.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · End-of-Book Test');
