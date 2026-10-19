// Proactive English C1 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });
const q = (t) => p(t, { indent: 200, after: 60 });

out.push(h1('MID-BOOK TEST · Units 1–6'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', 'Class', 'Date'], [['', '', '']], [2, 1, 1]));
out.push(sp());
out.push(box('Information for students', [
  'There are four papers: **Reading and Use of English** (50 min) · **Writing** (70 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about 15 minutes with your teacher).',
  '**Total: 60 marks** (Reading and Use of English 24 · Writing 12 · Listening 12 · Speaking 12).',
  '**All four Speaking parts are in this test**, including Part 2 (three photographs, of which you take two) and Part 3 (two minutes of discussion and then a separate decision), which were taught in Units 3 and 4.',
  'Write your answers on this paper, in pen. You may use a pencil for notes.',
  'You cannot use a dictionary or your telephone.',
  'Everything in this test has been taught in Units 1–6. Nothing in it is a surprise.',
  '⚠ If you finish early, read your writing twice: once for **the last four words of each paragraph**, and once for **every adjective a measurement could replace**.',
], C.lblue, C.navy));

// ================= PAPER 1 =================
out.push(pb());
out.push(paper('PAPER 1 · READING AND USE OF ENGLISH (50 minutes · 24 marks)'));
out.push(box('Part 1 · Multiple-choice cloze (4 marks)', [
  'For questions **1–4**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.',
], C.lteal, C.teal));
out.push(model([
  '**THE NOTE AT THE TOP**',
  'A clerk who has written the minutes of a district committee for nine years was asked last year how long a minute takes her. Nobody had ever asked, and the question had **(1)** ______ past her for nine years without her noticing it was a question at all.',
  'Her answer, when she worked it out, was four hours for a ninety-minute meeting, of which about three are spent deciding what will not be in it. She was careful not to **(2)** ______ the point at the committee, who had asked nothing and were not being criticised; she put a line at the top of the next minute instead, giving the number of decisions recorded and the number of options discussed.',
  'Two of the eleven members **(3)** ______ for that line as a permanent fixture at the following meeting, and the rest said nothing, which she had expected. What she had not expected was the effect on her own drafting. A paragraph that had been **(4)** ______ out for years with two sentences of context came out of the March minute entirely, and nobody asked where it had gone.',
]));
[
  '**1**   **A** slid   **B** slipped   **C** run   **D** gone',
  '**2**   **A** throw   **B** put   **C** set   **D** pitch',
  '**3**   **A** plumped   **B** settled   **C** decided   **D** chose',
  '**4**   **A** filled   **B** spun   **C** padded   **D** drawn',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Open cloze (4 marks)', [
  'For questions **5–8**, write **one** word in each gap. Write only one word.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A SUMMARY TAKES**',
  'A summary is made from beginnings, **(5)** ______ is a fact about summarising rather than a failing in the people who do it. The first sentence of a paragraph travels; the second does not, and a qualification written into the second has already been lost by the time anybody reads the agenda.',
  'The consequences are not small. No **(6)** ______ had one district minute gone out last year than two districts acted on it in opposite directions, each of them reading the same sentence correctly. It is **(7)** ______ no use at all to tell a reader that something has been left out without telling them what, because a reader who is told only that something is missing distrusts everything and can check nothing.',
  'The repair is a question of position and not of care. A limit belongs inside the claim it limits, in the sentence a summariser will take, because a reader who has only the first sentence will act **(8)** ______ it.',
]));
out.push(sp());
out.push(box('Part 3 · Word formation (4 marks)', [
  'For questions **9–12**, use the word given in capitals at the end of each line to form a word that fits in the gap.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT A CLERK COUNTS**',
  'Almost nothing about the way a document is built escapes **(9)** ______ once somebody has been shown where to look.   **OBSERVE**',
  'The **(10)** ______ of a figure from a shortened version is a decision and not an accident, and it leaves no hole.   **EXCLUDE**',
  'An inspection that is recommended and not **(11)** ______ is one from which nothing whatever follows.   **MANDATE**',
  'The **(12)** ______ of four paragraphs into one takes an afternoon and costs three of the four claim strengths.   **CONDENSE**',
]));
out.push(pb());
out.push(box('Part 4 · Key-word transformations (4 marks)', [
  'For questions **13–16**, complete the second sentence so that it means the same as the first. **Use the word given.** Do not change the word given. Use **between three and six words**, including the word given.',
], C.lteal, C.teal));
[
  '**13**  Nobody asked for the service log at any time in eleven weeks.   **POINT**\n     ______________________________ in eleven weeks did anybody ask for the service log.',
  '**14**  It is not disputed that the nine positions were never measured.   **DISPUTE**\n     That the nine positions were never measured ______________________________.',
  '**15**  The office insisted that the form should be reprinted.   **INSISTED**\n     The office ______________________________ reprinted.',
  '**16**  The costings came out of the second draft.   **TAKEN**\n     The costings ______________________________ of the second draft.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 5 · Multiple choice (4 marks)', [
  'You are going to read an article by an engineer. For questions **17–20**, choose the answer (**A**, **B**, **C** or **D**) which fits best according to the text.',
], C.lteal, C.teal));
out.push(model([
  '**THE SENTENCE THAT WAS QUOTED**',
  'In 2021 I wrote a three-paragraph finding about a concrete slab. One sentence of it appeared in a schedule eight months later: _the slab is non-compliant_. Four words, and the paragraph that limited them was not there.',
  'The usual account of what went wrong is that somebody quoted me unfairly, and it is not what happened. The person who made the schedule had a column eleven centimetres wide and three hundred findings to put in it. She took the first sentence of each, which is what anybody would do, and my first sentence was the only one of my three that could be lifted whole.',
  'What I had written was a finding and then, in its own sentence, the limit on it: that I had reached forty-one of fifty positions and that nine were behind a sheeted scaffold. A limit in its own sentence is a separate object. It can be left behind without anything looking broken, and it was.',
  'I now write the limit into the subject of the sentence that carries the claim. _On the forty-one positions I was able to reach on 7 August, the bolts measure M12._ It is not elegant and it cannot be cut without rewriting, and that is the whole of what it is for. The sentence is longer by nine words and those nine words have never since been separated from the rest of it.',
  'There is one thing I did not expect. Colleagues who read the new form assume I am being defensive, and three have told me so. I understand the reading and I think it is wrong, and I have stopped explaining: a finding that carries its own limit looks cautious to a reader who has never been quoted, and looks ordinary to one who has.',
  'I have the schedule still. The column is eleven centimetres and carries about nine words, and three hundred entries were made from three hundred documents in, I am told, four days. Nobody in that position reads a paragraph. The question is not whether they should: it is what a writer does, knowing they will not.',
  'The answer I arrived at is not a style and it is not a rule about length. It is a decision about which sentence carries the claim, made before the sentence is written. If the claim and its limit are in one sentence, the schedule either takes both or takes nothing, and both outcomes are acceptable to me. If they are in two, the schedule takes the first, and that outcome is not.',
  '**17**  What does the writer say about the person who made the schedule?   **A** She quoted him unfairly.   **B** She did what the format required.   **C** She should have asked him first.   **D** She had misread the finding.',
  '**18**  Why was his limiting sentence left out?   **A** It was too long for the column.   **B** It contradicted the finding.   **C** It stood as a separate object and could be dropped without damage.   **D** It appeared at the end of the document.',
  '**19**  What does he say about the length of his new form of words?   **A** It is nine words longer and that is the point.   **B** He has found a way of shortening it.   **C** It is no longer than the old one.   **D** Its length has been criticised.',
  '**20**  What does he say about colleagues who think he is being defensive?   **A** He has persuaded most of them.   **B** He accepts that they are right.   **C** He no longer tries to explain.   **D** They have not read the 2021 finding.',
]));
out.push(pb());
out.push(box('Part 7 · Gapped text (4 marks)', [
  'You are going to read an article. **Four** paragraphs have been removed. Choose from the paragraphs **A–E** the one which fits each gap **(21–24)**. There is one extra paragraph which you do not need to use.',
], C.lteal, C.teal));
out.push(model([
  '**WHAT I COUNT BEFORE I CUT**',
  'I was asked to halve a four-page report in 2019 and I did it in two hours, and I have thought about that afternoon ever since. The report came back from the committee with one question attached, and the question was about a figure that was no longer in it.',
  '**(21)** ______',
  'So I started counting. A figure, a date, a name, a document reference, a finding: one of those is a fact and the rest is prose. I put the number in the margin of each paragraph, added them up, and then did the same to the shortened version.',
  '**(22)** ______',
  'What the counting changed was not the length. It was where I cut from. Before 2019 I cut from the end, as almost everybody does, because the end is the part that is over the page — and the end of anything I write is where the limitation sits.',
  '**(23)** ______',
  'The second habit took longer and is the one I would keep if I could keep only one. It is a single line to whoever asked for the cut, saying what came out. Eleven words, no adverbs, and about one time in five the answer comes back: put that one back in.',
  '**(24)** ______',
  '**A**  Both counts were forty-one. The words had gone from two thousand to nine hundred and the facts had not moved at all, which told me the 2019 cut had been something else entirely — and the something else was a figure I had taken out without deciding to.',
  '**B**  The first habit was mechanical and took a week: I now cut from the middle, where the explanations of method live, and I touch the last two paragraphs only after everything else is done.',
  '**C**  My answer at the time was that nothing had been lost, and I believed it. A document that has had a fact taken out of it does not look wounded. The sentence closes over the gap, the paragraph reads perfectly well, and a week later the writer cannot tell either.',
  '**D**  It is a small piece of paper and the reply is often a single word. I have kept every one of them for six years, and the file is the only record I have of decisions I would otherwise have made invisibly and forgotten.',
  '**E**  The committee reduced its page limit the following year, from fifteen pages to eight, and the quality of what it received fell noticeably — which was the opposite of what anybody expected and is a different story.',
]));

// ================= PAPER 2 =================
out.push(pb());
out.push(paper('PAPER 2 · WRITING (70 minutes · 12 marks)'));
out.push(box('Part 1 · The essay (6 marks) — you must do this question', [
  'Your class has read an article about writing at work. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about documents at work. **First**, that a reader keeps the end of a paragraph and a summariser takes its beginning, so every document has two audiences. **Second**, that most long documents are long because nobody has counted what is in them. **Third**, that the person who asks for a shorter version rarely knows what they are really asking for."_',
  '**Points to discuss: 1** two audiences   **2** length because nothing has been counted   **3** the person who asks for the cut',
  '⚠ **Name the two in the first paragraph with the ground for the choice, and do not mention the third again.**',
], C.lorange, C.orange));
out.push(...lines(11));
out.push(pb());
out.push(box('Part 2 · A proposal or a report (6 marks) — answer one question only', [
  '**Either 2(a) · A proposal.** The head of your organisation has money for **one** improvement this year and has asked for proposals. **Write a proposal.** Write **220–260 words**. You should: establish the problem with a figure; say what you are asking for and what it would cost; and say what the organisation is paying now for not doing it.',
  '**Or 2(b) · A report.** Your manager has asked for a report on how one process works where you study or work. **Write a report.** Write **220–260 words**. You should: describe what happens now, with figures; say what you could not establish; and make one recommendation with its cost.',
  '⚠ **Write the letter of the question you have chosen in the box.**',
], C.lorange, C.orange));
out.push(table(['Question chosen', ''], [['', '']], [1, 3]));
out.push(...lines(11));

// ================= PAPER 3 =================
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (about 25 minutes · 12 marks)'));
out.push(p('_You will hear each recording twice._', { color: '7F7F7F', after: 120 }));
out.push(box('Part 1 · Two extracts (4 marks)', [
  '🔊 **Track MT-1.** You will hear two short extracts. For questions **25–28**, choose the answer (**A**, **B** or **C**) which fits best.',
], C.lteal, C.teal));
[
  '**Extract One — two colleagues discussing a minute.**',
  '**25**  What does the woman say was lost?   **A** a figure   **B** the reason a figure was given   **C** the name of the person who gave it',
  '**26**  What does the man say he will do?   **A** ask for the limit when the figure is given   **B** rewrite the minute   **C** circulate a draft',
  '**27**  **Extract Two — a manager and a records officer.**   What does the records officer count first?   **A** the words   **B** the paragraphs   **C** the facts',
  '**28**  What does the manager admit?   **A** he has never counted anything   **B** he cuts from the end   **C** he writes too much',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 2 · Sentence completion (4 marks)', [
  '🔊 **Track MT-2.** You will hear a surveyor talking about four words he wrote. For questions **29–32**, complete the sentences with **a word or a number**.',
], C.lteal, C.teal));
[
  '**29**  The four words he wrote were: the boundary ______________ to follow the wall.',
  '**30**  He had the deeds for ______________ side only.',
  '**31**  The wall turned out to be in the wrong place by about ______________ metres.',
  '**32**  He says the limit travelled separately because it was in a sentence of its ______________.',
].forEach(t => out.push(q(t)));
out.push(sp());
out.push(box('Part 3 · Long interview (4 marks)', [
  '🔊 **Track MT-3.** You will hear an interview with a woman who chairs a committee. For questions **33–36**, choose the answer (**A**, **B**, **C** or **D**) which fits best.',
], C.lteal, C.teal));
[
  '**33**  What does she say she used to ask authors for?   **A** more detail   **B** a meeting   **C** a shorter version   **D** an index',
  '**34**  Why does she say that request could not work?   **A** authors ignored it   **B** it took too long   **C** the committee never read the short versions   **D** a short version of a padded paper is also padded',
  '**35**  What does she say about the officer who changed her mind?   **A** she put two numbers at the top of a report   **B** she argued the case well   **C** she refused to shorten anything   **D** she wrote to the committee privately',
  '**36**  What does she now use the ratio to decide?   **A** what to read   **B** which authors to trust   **C** what to read carefully   **D** how long a meeting should be',
].forEach(t => out.push(q(t)));

// ================= PAPER 4 =================
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (in pairs · about 15 minutes · 12 marks)'));
out.push(p('_Your teacher runs all four parts. Nothing here is new: Part 2 was taught in 3.3 and Part 3 in 4.1 and 4.2._', { color: '7F7F7F', after: 120 }));
out.push(box('Part 1 · Interview (2 marks) — your teacher asks each student', [
  '**1** What do you write most often at work or in your studies, and who reads it?',
  '**2** Tell me about something you were asked to shorten.',
  '**3** Is there anything you have written that somebody else then relied on?',
], C.lteal, C.teal));
out.push(box('Part 2 · Long turn (4 marks) — three photographs, you take two · one minute · then thirty seconds on your partner\'s pair', [
  '**Student A.** Here are three photographs. **Choose two** and compare them, saying **why the people might be doing these things** and **how they might be feeling**.',
  '_**1** A woman at a desk with two versions of the same document side by side, one of them marked in pen._   _**2** Three people standing at a notice board, one of them photographing the notice._   _**3** A man alone in a storeroom, holding a file and looking at a shelf._',
  '**Student B**, after A has finished: **thirty seconds** — _which of A\'s two photographs shows the harder task, and why?_ ⚠ **Do not summarise what A said.**',
  '**Student B.** Here are three photographs. **Choose two** and compare them, saying **what has just happened** and **what might happen next**.',
  '_**1** A committee table with nine identical bundles on it and one chair empty._   _**2** A woman reading a single sheet aloud to a colleague who is not looking at her._   _**3** Two people at a printer, one of them holding a page up to the light._',
  '**Student A**, after B has finished: **thirty seconds** — _which of B\'s two photographs would be hardest to caption in one line, and why?_',
], C.lteal, C.teal));
out.push(box('Part 3 · Collaborative task (4 marks) — fifteen seconds to read · two minutes together · then one minute to decide', [
  '⚠ **An organisation has money for one change to the way it handles documents. Which should it spend it on?**',
  '**A** _A second person to check every document before it goes out_   **B** _Training everybody to count the facts in what they write_   **C** _A shared folder with an index_   **D** _A rule that no document may be longer than eight pages_   **E** _Nothing: leave the arrangement as it is_',
  '⚠ **The two minutes must not decide anything.** **Give each option a cost and a condition, and ask no question about your partner.**',
  '**And then your teacher will ask:** _Now decide which one the organisation should choose._ ⚠ **One minute. Name the discard and say why.**',
], C.lteal, C.teal));
out.push(box('Part 4 · Discussion (2 marks) — your teacher asks both students', [
  '**1** Some people say a long document is a sign of care. What do you think?',
  '**2** Should somebody who shortens your work have to tell you what they removed?',
  '**3** Is it ever right to leave a limit out of a document?',
], C.lteal, C.teal));
out.push(sp());
out.push(box('How your teacher marks your speaking (12 marks)', [
  '**Grammar and vocabulary (3)** — range, and whether the marked orders are used once rather than four times.',
  '**Discourse management (3)** — in Part 2, two photographs and not three, finishing on a full stop; in Part 3, two minutes that decide nothing.',
  '**Interactive communication (3)** — questions about the options and not about your partner; no _do you agree_.',
  '**Pronunciation (3)** — a question that comes down at the end; a limit said in one breath.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('After the test', [
  '⚠ **Whatever your total, go back to the unit where you lost most marks and read the eight lines in its _I can…_ box again.** **The mark out of sixty is a measurement and not a verdict**, and every item in this paper is traceable to one of those forty-eight lines.',
  '**Units 7 to 12 ask harder things of the same habits.** **7.1 reads your own paragraph as somebody looking for the gap in it; 9.3 writes the limitation that strengthens the claim it limits; and 11.7 asks you to run a mediation without being told which moves to make.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Mid-Book Test');
