// Proactive Business English B2 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a draft returned · a tracked change · a silent correction · a flagged correction · a substantive change · a presentational change · a term of art you may not improve · an agreed figure · a quoted undertaking · a house style · a covering note to a redraft · to reinstate a deletion · a deletion you cannot accept · a line whose author will read it · to annotate rather than rewrite · a change that alters the obligation · a change that alters only the rhythm · to leave a clumsy line alone · a comment addressed to the author · a comment addressed to the file · a clean version and a marked version · a single voice · two authors in one paragraph · a sentence you did not write · to take out a hedge somebody chose · a hedge that was negotiated · the author\'s intention and the text · a mark-up a reader can follow · to accept a change without reading it · a change accepted by silence · a schedule of changes · the line that must go back as it came';
const COLLOC = 'to return a draft · to track a change · to reinstate a line · to accept a change · to flag a correction · to mark up a page · to leave a line alone · to send a clean copy';
const BACK_AT_B2 = 'draft · amended · a correction';

out.push(h1('Unit 9  Somebody Else\'s Draft'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  separate a change of substance from a change of presentation',
  '**9.2**  decide which corrections to make silently and which to flag',
  '**9.3**  edit a line whose author will read your edit',
  '**9.4**  recognise the line you may not improve, however badly written',
  '**9.5**  reinstate a deletion you cannot accept, and say why',
  '**9.6**  make one document out of two authors without flattening either',
  '**9.7**  Review & Mediate: the four you may not change, read back to their author',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Twelve lines, and the draft that came back', [
  '⚠ **Sham Trading sent Mr Dallal\'s office a one-page note on 26 May, drawn from the root-cause paper, for Mr Dallal to put in front of his own board.** **Their office has sent it back with twelve lines amended.**',
  '⚠ **Five of the twelve are improvements and one of those five is an improvement nobody here will enjoy accepting.** **Three are changes of substance dressed as changes of style.** ⚠ **And four of the twelve may not be touched at all** — **not because they are well written, two of them are not** — **but because of what they are.**',
  '⚠ **One is a figure agreed in writing on 20 February.** **One is eleven words quoted from our own letter of 28 January.** ⚠ **One is a term of art that means something exact and reads like nonsense.** **And one is a hedge that Mr Kamal Sayegh negotiated, clause by clause, in a telephone call in March.**',
  '⚠ **This unit is that mark-up.** **The hard part is not knowing how to write the lines better** — **most of the room could.** ⚠ **It is knowing which of the twelve are yours to write at all.**',
], C.lyellow, C.orange));

// ======================= CYCLE 9.1 =======================
out.push(pb());
out.push(h2('9.1  Substance and presentation'));
out.push(p('**Function:** sorting a change by what it changes   ·   **Grammar:** _this alters the obligation · this alters only the rhythm_   ·   **Pronunciation:** two questions asked in the same tone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a change somebody made to something you wrote. ⚠ Then say whether it changed what the document commits you to.'));
out.push(p('**b**  Which is substance and which is presentation? _“we shall deliver” for “we will deliver” · “we expect to deliver” for “we will deliver”_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about a change of substance dressed as a change of style?   **A** it is rare   **B** it is the normal way one is made, because nobody argues about a comma   **C** it is always deliberate'));
out.push(p('**b**  Listen again. **1** What are the two questions? **2** What is wrong with *so far as we are aware*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  "What does the change change?"', [
  ['Nour', 'They have made twelve changes. Most of them are better than what I wrote.'],
  ['Mr Sayegh', '⚠ **Then ask two questions of each one and the twelve sort themselves.** ⚠ **Does it alter what we are committed to? And does it alter only the rhythm?**'],
  ['Nour', 'Number four. They have put *we shall notify* for *we will notify*.'],
  ['Mr Sayegh', '⚠ **Rhythm. Accept it and do not mention it.**'],
  ['Nour', 'Number six. They have put *so far as we are aware* in front of a sentence that said *the count was made on the apron*.'],
  ['Mr Sayegh', '⚠ **Stop. That is substance, and it is the whole paper.** ⚠ **We wrote it as a fact supported by one account. They have made it a fact about our state of knowledge.**'],
  ['Nour', 'It is softer. I thought they were being kind.'],
  ['Mr Sayegh', '⚠ **It is softer and it is weaker in a way that costs us.** ⚠ *So far as we are aware* **means we have not looked** — **and we looked in four files and named them.** **Unit 7 is why that sentence cannot go.**'],
  ['Nour', 'And they did it in six words inside a sentence about a count.'],
  ['Mr Sayegh', '⚠ **Which is how a change of substance is normally made.** ⚠ **Nobody argues about a comma, so a comma is where you put it.** **It was not necessarily deliberate** — **their office has a house phrase and it goes in front of everything.**'],
  ['Nour', 'So how do I answer?'],
  ['Mr Sayegh', '⚠ **Line by line, and in their order, not mine.** ⚠ **Accept five without comment. Reject three with one sentence each saying what the change would alter.** **And four of them do not arise, which is 9.4.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two questions, and the twelve sort themselves**',
  table(['The change', 'Question 1 — the obligation', 'Question 2 — the rhythm', 'Decision'], [
    ['*shall* for *will*', '**no**', '⚠ **yes, only**', '⚠ **accept, and do not mention it**'],
    ['⚠ *so far as we are aware* **added**', '⚠ **yes** — **it moves a finding to a state of knowledge**', '**no**', '⚠ **reject, with one sentence saying what it alters**'],
    ['**a paragraph reordered**', '**no**', '⚠ **yes** — **and theirs reads better**', '**accept**'],
    ['⚠ **an *about* in front of a figure**', '⚠ **yes** — **an agreed figure stops being agreed**', '**no**', '⚠ **reject** — **and 9.4 is why it does not even arise**'],
  ], [1.9, 2.5, 1.9, 2.1]),
  '⚠ **Ask two questions of every change: does it alter what we are committed to, and does it alter only the rhythm?** ⚠ **A change that alters only the rhythm is accepted and not mentioned** — **and most of a returned draft is that.**',
  '⚠ **A change of substance is normally made as a change of style, because nobody argues about a comma.** ⚠ **Six words in front of a sentence about a count is where it goes.** **It is not always deliberate: an office has house phrases and they travel.**',
  '⚠ **Watch the hedge somebody adds to your finding.** ⚠ *So far as we are aware* **means we have not looked, and if you looked in four files and named them, the hedge gives away the strongest thing you had.**',
  '⚠ **And watch the *about* in front of a figure.** ⚠ **An agreed figure with *about* in front of it is no longer agreed** — **it is the second-smallest change on the page and the most expensive.**',
  '⚠ **Answer in their order, line by line, not in order of importance.** **A reply that reorders the lines makes the author find his own page twice**, ⚠ **and a reply that answers only the three rejections reads as though the other nine were missed.**',
  '**Practise:** Take six changes somebody made to a document of yours. Ask both questions of each and write the decision.',
  '**Useful phrases:**  does it alter the obligation?  ·  it alters only the rhythm  ·  accept and do not mention  ·  what the change would alter  ·  line by line, in their order',
  '**Pronunciation – two questions in the same tone.** 🔊 **Track 9.2** Listen twice. ⚠ **The first asks both questions flatly, as a procedure.** ⚠ **The second stresses *obligation*.** **Stressed, it sounds like an accusation that the other side has interfered; flat, it is a sorting instruction.** Ask them four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a change; B asks the two questions.'));
out.push(dlg(null, [
  ['A', 'Change number __________. They have put __________ for __________.'],
  ['B', '⚠ **Does it alter what we are committed to?**'],
  ['A', '__________.'],
  ['B', '⚠ **Does it alter only the rhythm?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then __________, and __________.**'],
  ['A', 'And number __________. They have added __________ in front of __________.'],
  ['B', '⚠ **What does that move?**'],
  ['A', '⚠ **It moves __________ to __________.**'],
]));
out.push(table(['Role card 1 — the hedge added to a finding', 'Role card 2 — the improvement you must accept'], [[
  '⚠ **They have added *so far as we are aware* to a sentence that says the count was made on the apron.** ⚠ **B\'s question: what does that move?** ⚠ **It moves a finding supported by one named account to a statement about our own state of knowledge** — **and we looked in four named files, so the hedge throws away the strongest thing in the paper.**',
  '⚠ **They have reordered A\'s second paragraph and it now reads better than A\'s version.** ⚠ **B\'s job is to make A say so and accept it without comment.** ⚠ **The temptation is to accept it and add a sentence explaining why the original order was also defensible** — **which is eleven words that tell a reader you minded.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two questions and the decision for each change. ⚠ Then say which change was substance dressed as style, and how many words it took.'));
out.push(PHRASE_CARD(['does it alter the obligation?', 'only the rhythm', 'accept, no comment', 'what it would alter', 'line by line, their order']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** changes somebody has made to something you wrote. Sort them.'));
out.push(table(['The change', 'Alters the obligation?', 'Alters only the rhythm?', 'Decision'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 1.5, 1.5, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They changed _______ to _______. It alters _______ and it does not alter _______. So I will _______, and the sentence I would write is _______._'));
out.push(p('**Listener task:** count how many changes altered only the rhythm. ⚠ Then ask how many of those the speaker had been intending to argue about, and expect at least two.'));
out.push(p('**Board clinic:** your teacher writes three changes on the board — look for a hedge added to a finding, and a rejection of a change that only altered the rhythm. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE TWELVE CHANGES, SORTED. 28 May. N. Mansour. Working note before the reply.**',
  table(['', 'Their change', 'Obligation?', 'Decision'], [
    ['**1**', '**_the Company_ for _we_ throughout**', '**no**', '**accept; their house style**'],
    ['**2**', '**two paragraphs reordered**', '**no**', '⚠ **accept; theirs is better and I will not say so**'],
    ['**3**', '⚠ **_about eleven cartons_ for _eleven cartons_**', '⚠ **YES** — **the figure was agreed in writing on 20 February**', '⚠ **does not arise; see 9.4**'],
    ['**4**', '**_shall_ for _will_**', '**no**', '**accept**'],
    ['**5**', '⚠ **_as set out in correspondence_ for the eleven quoted words of our letter of 28 January**', '⚠ **YES** — **a quotation is not a summary**', '⚠ **does not arise; see 9.4**'],
    ['**6**', '⚠ **_so far as we are aware_ added to the apron sentence**', '⚠ **YES** — **a finding becomes a state of knowledge**', '⚠ **reject, one sentence**'],
    ['**7**', '**a semicolon for a dash, four times**', '**no**', '**accept**'],
    ['**8**', '⚠ **_without prejudice_ deleted from the heading**', '⚠ **YES** — **and it is a term of art**', '⚠ **does not arise; see 9.4**'],
    ['**9**', '**_consignment_ for _load_, throughout**', '**no**', '⚠ **accept; and theirs is the right word**'],
    ['**10**', '⚠ **_the delay_ for _the eleven days the press was out of service_**', '⚠ **YES** — **a cause becomes an event**', '⚠ **reject, one sentence**'],
    ['**11**', '⚠ **_so far as the Company has been able to establish_ deleted**', '⚠ **YES** — **Mr Sayegh negotiated that clause in March**', '⚠ **does not arise; see 9.4**'],
    ['**12**', '⚠ **_regret_ for _apologise for_**', '⚠ **YES, probably** — **and I am not sure which way**', '⚠ **reject, and ask Mr Sayegh**'],
  ], [0.4, 3.4, 2.4, 2.3]),
  '⚠ **Five accepted, three rejected, four that do not arise** — **and five and three and four is twelve, which I have added up.** **A note that sorts twelve changes into three piles and does not add the piles together is a note nobody can check, including me.**',
  '⚠ **Change 2 is the one to notice.** **Their reordering is better than mine and I am accepting it with no comment at all.** ⚠ **The temptation is to accept and explain that my order was also defensible**, **which is eleven words whose only content is that I minded.**',
  '⚠ **And change 12 is the only one I cannot sort, which is why it is on this list rather than in the reply.** **_We regret_ and _we apologise for_ are not the same in a document that may be read later by somebody who was not there** — ⚠ **and whether the difference helps us or hurts us is a question for Mr Sayegh and not for me.** **A line you cannot sort is a line you ask about, not a line you guess at.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many changes are accepted, rejected, or do not arise — and why does the writer add the three piles together?'));
out.push(item('2', 'What is the temptation at change 2, and what would the extra sentence tell the reader?'));
out.push(item('3', 'Why is change 12 on this list rather than in the reply?'));
out.push(box('Writer\'s box', [
  '**Sorting a returned draft — four parts:** **a table of *their change · does it alter the obligation? · decision*** → ⚠ **the count of each kind** → ⚠ **the improvement accepted in silence** → ⚠ **and the one you cannot sort.**',
  '⚠ **Keep their numbering and their order.** ⚠ **A note that reorders the changes by importance makes its author hunt his own page twice**, **and the reply has to be line by line in their sequence.**',
  '⚠ **Write the reason only where the answer is *yes*.** ⚠ **_No_ needs no reason** — **five *no*s with five explanations is a document about your own feelings.**',
  '⚠ **Accept an improvement in silence.** ⚠ **Their paragraph order is better; accept it and say nothing** — **the sentence explaining that yours was also defensible has one piece of content, which is that you minded.**',
  '⚠ **Flag the change you cannot sort rather than guessing.** ⚠ **_Regret_ against _apologise for_ is not a matter of tone in a document that will be read by somebody who was not there** — **and the person who knows is not you.**',
  '⚠ **And count the kinds, and add them up.** ⚠ **Five, three, four, and five and three and four is twelve** — **because a reply that rejects three of twelve reads completely differently from one that rejects three of four, and because a sort that does not add up has lost a change somewhere.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Sort the changes somebody has made to a document of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ CHANGES, SORTED. ______________. Working note before the reply.**   **1** **______________** | **no** | **accept; ______________**   **2** **______________** | **no** | ⚠ **accept; theirs is better and I will not say so**   **3** ⚠ **______________** | ⚠ **YES** — **______________** | ⚠ **______________**   **4** ⚠ **______________** | ⚠ **YES** — **______________** | ⚠ **reject, one sentence**   **5** **______________** | **no** | ⚠ **accept; and theirs is the right word**   **6** ⚠ **______________** | ⚠ **YES, probably** — **and I am not sure which way** | ⚠ **reject, and ask ______________**   ⚠ **______________ accepted, ______________ rejected, ______________ that do not arise.**   ⚠ **Change ______________ is the one to notice.** **Theirs is better than mine and I am accepting it with no comment at all.** ⚠ **The temptation is ______________**, **which is a sentence whose only content is that I minded.**   ⚠ **And change ______________ is the only one I cannot sort.** **______________ and ______________ are not the same in a document that ______________** — ⚠ **and that is a question for ______________ and not for me.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their numbering and their order kept', ''],
  ['A reason given only where the answer is *yes*', ''],
  ['An improvement accepted in silence', ''],
  ['A change flagged as unsortable, with who decides', ''],
  ['The three counts stated', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the change they accepted in silence. ⚠ The class says whether the sentence the writer wanted to add would have told the reader anything but that the writer minded.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a change somebody made to something you wrote that altered more than it looked (**200 to 240 words**). Say what the change was, how many words it was, what it altered, whether you think it was deliberate, and what you did.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how many words was the change?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the change under ten words? Usually all three — ⚠ **and in two of three the writer accepted it at the time and found out what it had altered later.**'));
out.push(box('Homework', ['Write your final text. Then take a document of yours that came back marked, sort every change by the two questions, and count the three kinds (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.2 =======================
out.push(pb());
out.push(h2('9.2  The silent correction and the flagged one'));
out.push(p('**Function:** deciding which corrections to announce   ·   **Grammar:** _I have corrected X silently · I have left Y and flagged it_   ·   **Pronunciation:** a correction mentioned without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a mistake you corrected in somebody else\'s document. ⚠ Then say whether you told them.'));
out.push(p('**b**  Which should be flagged? _a date typed as 28 Febuary · a date typed as 28 February where the letter was sent on 28 January_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say decides whether a correction is flagged?   **A** its size   **B** whether the author needs to know he was wrong, or only needs it to be right   **C** politeness'));
out.push(p('**b**  Listen again. **1** What are the three things that are always flagged? **2** Why is the February date flagged although it is obviously a slip?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  "Does he need to know, or does it need to be right?"', [
  ['Nour', 'Their page has four small mistakes. Two spellings, a date, and a figure in words that does not match the figure in digits.'],
  ['Hala', '⚠ **Then ask one question of each: does the author need to know he was wrong, or does it only need to be right?**'],
  ['Nour', 'The spellings only need to be right.'],
  ['Hala', '⚠ **Correct them and say nothing.** ⚠ **A spelling flagged is a point scored, and you are not scoring points off a man whose board reads this on Thursday.**'],
  ['Nour', 'The date says 28 February. The letter was 28 January.'],
  ['Hala', '⚠ **Flag it.** ⚠ **Not because he needs correcting but because a date is a fact somebody may rely on**, **and if I am wrong about which letter he meant, my silent correction has invented a letter.**'],
  ['Nour', 'And the figure — *eleven* in words and *11* in digits, and they agree.'],
  ['Hala', '⚠ **Then nothing to correct. Look again at the one where they do not agree.**'],
  ['Nour', 'Twelve in words, 11 in digits.'],
  ['Hala', '⚠ **Flag it, and do not choose.** ⚠ **A figure where the words and the digits disagree is not a typing error, it is two different numbers**, **and the author knows which he meant and you do not.**'],
  ['Nour', 'So the rule is three things.'],
  ['Hala', '⚠ **Three always flagged: a date, a figure, and a name.** ⚠ **Everything else, ask whether he needs to know.** **And flag it in one line, in a list at the end, with no adjectives.**'],
  ['Nour', 'Why at the end?'],
  ['Hala', '⚠ **Because four flags at the top of a reply is a reply about his mistakes.** ⚠ **The same four at the bottom under *small points* is housekeeping.** **The content is identical and the document is not.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Silent or flagged**',
  table(['', 'Correct silently', 'Flag'], [
    ['**a spelling**', '⚠ **yes** — **a spelling flagged is a point scored**', '—'],
    ['⚠ **a date**', '**never silently**', '⚠ **always** — **somebody may rely on it, and a silent correction can invent a letter**'],
    ['⚠ **a figure**', '**never silently**', '⚠ **always** — **and where words and digits disagree, do not choose**'],
    ['⚠ **a name**', '**never silently**', '⚠ **always** — **you may be correcting it to the wrong person**'],
    ['**anything else**', '⚠ **if it only needs to be right**', '⚠ **if he needs to know he was wrong**'],
  ], [1.3, 2.9, 3.4]),
  '⚠ **One question decides it: does the author need to know he was wrong, or does it only need to be right?** **Most small things only need to be right.**',
  '⚠ **Three are always flagged: a date, a figure, a name.** ⚠ **Not out of deference** — **because each of the three is a fact somebody may act on, and a silent correction of a date can invent a letter that does not exist.**',
  '⚠ **Where words and digits disagree, flag both and choose neither.** ⚠ **_Twelve_ against _11_ is not a typing error, it is two numbers** — **and the author knows which he meant.**',
  '⚠ **Flag in one line each, in a list at the end, with no adjectives.** ⚠ **Four flags at the top is a reply about his mistakes; the same four at the bottom under *small points* is housekeeping** — **identical content, different document.**',
  '⚠ **And never flag a thing you have already corrected.** **Either it was silent or it was flagged.** ⚠ **A correction made and then announced is a correction with a flourish on it.**',
  '**Practise:** Take six small errors in somebody\'s draft. Sort them silent or flagged, and write the flags as one line each.',
  '**Useful phrases:**  does he need to know?  ·  it only needs to be right  ·  a date, a figure, a name  ·  small points  ·  I have not chosen between them',
  '**Pronunciation – a correction without emphasis.** 🔊 **Track 9.4** Listen twice. ⚠ **The first says *the date in line 6 reads 28 February; the letter was 28 January* flatly and stops.** ⚠ **The second stresses *February*.** **Stressed, it is a correction of him; flat, it is a correction of the page.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has small errors to sort; B asks the one question.'));
out.push(dlg(null, [
  ['A', 'There are __________ small mistakes. __________, __________ and __________.'],
  ['B', '⚠ **Does the author need to know he was wrong, or does it only need to be right?**'],
  ['A', '__________ only needs to be right.'],
  ['B', '⚠ **Then __________ and say nothing. And __________?**'],
  ['A', 'It is a __________.'],
  ['B', '⚠ **Which is one of the three. Flag it. How?**'],
  ['A', '⚠ **__________ reads __________; __________ was __________.**'],
  ['B', '⚠ **Good. Where does that go?**'],
  ['A', '⚠ **At the end, under *small points*.**'],
]));
out.push(table(['Role card 1 — the words and the digits', 'Role card 2 — the flag at the top'], [[
  '⚠ **Their page says *twelve cartons* in words and *11* in digits.** ⚠ **A wants to correct it to eleven, because eleven is the agreed figure.** ⚠ **B\'s point: the agreed figure is eleven, and that is exactly why the author must be asked rather than corrected** — **a document that silently makes his twelve into eleven has resolved, on his behalf, the one thing in the page that matters.**',
  '⚠ **A has put four flags in the first paragraph of the reply.** ⚠ **B reads the first paragraph aloud and asks what the reply is about.** ⚠ **It is about his mistakes.** ⚠ **Then B reads the same four at the bottom under *small points*, and asks the same question** — **and the answer is the consignment, which is what the reply is supposed to be about.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the six errors and mark each silent or flagged. ⚠ Then write one flag as a single line, and check that it has no adjective in it.'));
out.push(PHRASE_CARD(['does he need to know?', 'it only needs to be right', 'a date, a figure, a name', 'under small points', 'I have not chosen']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** small errors from a draft you have been sent. Sort them.'));
out.push(table(['The error', 'Silent or flagged?', 'Why', 'The flag, in one line'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.2, 1.6, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The error was _______. It is _______ because _______. And the flag reads _______._'));
out.push(p('**Listener task:** count how many flags had an adjective in them. ⚠ Then ask how many of the flagged items were a date, a figure or a name, and how many were a point being scored.'));
out.push(p('**Board clinic:** your teacher writes three flags on the board — look for a spelling flagged, and a figure corrected silently. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SMALL POINTS. 29 May. N. Mansour. The last section of the reply to Mr Dallal\'s office.**',
  '⚠ **Small points, for the file rather than for an answer.**',
  table(['', 'Where', 'The point', 'What I have done'], [
    ['**1**', '**line 6**', '**the date reads 28 February; our letter was 28 January**', '⚠ **flagged, not changed** — **if a February letter exists I have not seen it**'],
    ['**2**', '**line 9**', '⚠ **_twelve cartons_ in words and _11_ in digits**', '⚠ **flagged, and I have not chosen between them**'],
    ['**3**', '**line 11**', '⚠ **_Mr Jallad_ where I believe _Mr Jallad\'s successor_ is meant**', '⚠ **flagged** — **a name is never corrected silently**'],
    ['**4**', '**throughout**', '**two spellings and a stray second full stop**', '⚠ **corrected silently; not listed individually**'],
    ['**5**', '**line 4**', '⚠ **the note is dated 26 May and refers to *last week\'s* meeting, which was on 19 May**', '⚠ **flagged** — **a reader in September will not know which week**'],
  ], [0.4, 1.2, 3.8, 3.1]),
  '⚠ **Four flags and one silent class of corrections, and the silent class is deliberately not itemised.** **Two spellings and a full stop listed one by one would be three more rows in a section of five**, ⚠ **and a reader counting rows would read this as a page with seven mistakes on it.** **It has four that matter.**',
  '⚠ **Point 2 is the one I have been asked twice to resolve and will not.** **The agreed figure is eleven and it is agreed in writing.** ⚠ **Which is exactly why their *twelve* has to go back to them rather than be corrected to eleven by me** — **if I make it eleven, I have decided on their behalf that their twelve was a slip, and the one thing in this page a reader will check is that number.**',
  '⚠ **Point 3 is the one I nearly left out.** **Mr Jallad left in July 2024 and the sentence describes a conversation in March this year, so it cannot be him.** ⚠ **But I do not know his successor\'s name, and a flag that says *I think you mean somebody else* is worth more than a guess that puts a stranger\'s name in a document about a man who has left.**',
  '⚠ **And point 5 is the one nobody would flag and everybody should.** ***Last week*** **is clear to two people on 29 May and to nobody in September**, **and this note will be read in September, because the correspondence has already run five months.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are the spellings not itemised?'));
out.push(item('2', 'Why will the writer not resolve point 2 herself?'));
out.push(item('3', 'What is point 5, and why is it worth flagging?'));
out.push(box('Writer\'s box', [
  '**A *small points* section — four parts:** **a table of *where · the point · what I have done*** → ⚠ **the silent class, not itemised** → ⚠ **the point you will not resolve** → ⚠ **and the point nobody would flag.**',
  '⚠ **Put *small points* at the end and say what it is for** — ⚠ *for the file rather than for an answer.* **Six words, and they tell the author he need not reply to any of it.**',
  '⚠ **Do not itemise silent corrections.** ⚠ **Two spellings and a full stop as three rows of seven makes a page of four real points look like a page of seven mistakes** — **one row, *corrected silently, not listed individually*, does the whole job.**',
  '⚠ **Refuse to resolve the figure, and say why in the flag.** ⚠ **Correcting their *twelve* to the agreed *eleven* decides on their behalf that their figure was a slip** — **and that number is the one thing in the page a reader will check.**',
  '⚠ **Flag a name you cannot supply.** ⚠ *I think somebody else is meant; I do not know the name.* **Worth more than a guess** — **and a guessed name in a document about a man who has left is the kind of error that outlives the document.**',
  '⚠ **And flag the *last week* nobody would flag.** ⚠ **Clear to two people on the day and to nobody in September** — **and a correspondence already five months old will be read in September.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a *small points* section for a draft you have been sent (**80 words or more**). Use the frame.'));
out.push(p('**SMALL POINTS. ______________. The last section of the reply to ______________.**   ⚠ **Small points, for the file rather than for an answer.**   **1** | **______________** | **______________** | ⚠ **flagged, not changed** — **______________**   **2** | **______________** | ⚠ **______________** | ⚠ **flagged, and I have not chosen**   **3** | **______________** | ⚠ **______________** | ⚠ **flagged** — **a name is never corrected silently**   **4** | **throughout** | **______________** | ⚠ **corrected silently; not listed individually**   **5** | **______________** | ⚠ **______________** | ⚠ **flagged** — **______________**   ⚠ **______________ flags and one silent class, and the silent class is deliberately not itemised.** ⚠ **______________ listed one by one would make a page of ______________ real points look like a page of ______________.**   ⚠ **Point ______________ is the one I will not resolve.** **______________, which is exactly why ______________.**   ⚠ **And point ______________ is the one nobody would flag and everybody should:** **______________ is clear to ______________ and to nobody in ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Small points*, at the end, with what it is for', ''],
  ['Silent corrections in one row, not itemised', ''],
  ['A figure flagged without being resolved', ''],
  ['A name flagged rather than guessed', ''],
  ['No adjectives in any flag', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their flags. ⚠ The class counts the adjectives — and where there is one, it says what the flag would lose by dropping it, which is usually nothing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a silent correction somebody made to your work that turned out to be wrong (**200 to 240 words**). Say what was changed, who changed it, why they thought it was an error, what it actually was, and when it was discovered.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was it a date, a figure or a name?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the silently corrected item a date, a figure or a name? Usually all three — ⚠ **and in two of three the corrector was entirely reasonable and simply did not have the fact.**'));
out.push(box('Homework', ['Write your final text. Then take a draft somebody sent you, list every small error, and write the flags for the dates, figures and names in one line each (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.3 =======================
out.push(pb());
out.push(h2('9.3  Editing a line whose author will read it'));
out.push(p('**Function:** marking up a page the writer will see   ·   **Grammar:** _I have suggested X; the line as it stands says Y_   ·   **Pronunciation:** a suggestion read as a suggestion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a sentence of yours that somebody rewrote. ⚠ Then say whether you knew why.'));
out.push(p('**b**  Which mark-up can the author act on? _a sentence crossed out and replaced · a sentence left standing with: this reads as though we chose the date; we did not_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say a rewritten sentence takes away from its author?   **A** nothing   **B** the chance to fix the real problem, because he cannot see what the problem was   **C** his style'));
out.push(p('**b**  Listen again. **1** What is the two-part form of a usable mark-up? **2** What does he say about rewriting three sentences in a row?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  "Say what it says, then suggest"', [
  ['Nour', 'I have rewritten six of their sentences. They are all better.'],
  ['Bassel', '⚠ **Better by whose reading? Show me one.**'],
  ['Nour', 'Theirs: *the delivery date was moved to 2 May*. Mine: *we agreed with Ms Tannous to move the delivery to 2 May*.'],
  ['Bassel', '⚠ **Yours is better and your author cannot see why.** ⚠ **He will read two versions of a sentence and conclude that you prefer your own prose.**'],
  ['Nour', 'How do I show him why?'],
  ['Bassel', '⚠ **Two parts, always.** ⚠ **What the line as it stands says, and then the suggestion.** ⚠ *The line as it stands reads as though the date moved by itself; we agreed it with the customer. Suggest: we agreed with Ms Tannous…*'],
  ['Nour', 'That is three times as long.'],
  ['Bassel', '⚠ **It is three times as long and it is the only version he can act on** — **because now he can accept your sentence, or write a better one, or tell you that the date did move by itself and you are wrong.**'],
  ['Nour', 'And if I have six of them?'],
  ['Bassel', '⚠ **Then you have six, and that is fine, and they go in his order with his line numbers.** ⚠ **What you must not do is rewrite three sentences in a row.**'],
  ['Nour', 'Why not, if all three need it?'],
  ['Bassel', '⚠ **Because three in a row is no longer a mark-up, it is a redraft of a paragraph** — **and a man reading a redraft of his paragraph stops reading your reasons.** ⚠ **Rewrite the worst of the three, annotate the other two, and say that the paragraph may need rebuilding once the first line is settled.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A mark-up the author can act on**',
  table(['', 'Not', 'Write'], [
    ['⚠ **a sentence**', '**crossed out and replaced**', '⚠ *the line as it stands reads as though…; suggest:…* — **what it says, then the suggestion**'],
    ['**a word**', '**silently swapped**', '*consignment* **for** *load* **throughout, for consistency with the schedule**'],
    ['⚠ **three in a row**', '⚠ **three rewritten sentences** — **which is a redraft of his paragraph**', '⚠ **rewrite the worst, annotate the other two, and say the paragraph may need rebuilding once the first is settled**'],
    ['**a line you dislike**', '**improved**', '⚠ **left alone** — **9.4 is the harder version of this**'],
  ], [1.4, 2.6, 3.6]),
  '⚠ **Every suggestion has two parts: what the line as it stands says, and the suggestion.** ⚠ **Without the first part an author sees two versions of a sentence and concludes that you prefer your own prose** — **which is sometimes true and is never the reason.**',
  '⚠ **The two-part form is three times as long and it is the only one he can act on.** ⚠ **He can accept your sentence, write a better one, or tell you that you are wrong about the fact** — **and the third of those is the one that justifies the length.**',
  '⚠ **Never rewrite three sentences in a row.** ⚠ **Three consecutive rewrites is a redraft of a paragraph, and a man reading a redraft of his paragraph stops reading your reasons.**',
  '⚠ **Rewrite the worst, annotate the rest, and name the dependency.** ⚠ *The paragraph may need rebuilding once line 7 is settled.* **It is true, it is shorter than rebuilding it, and it leaves the rebuilding to its author.**',
  '⚠ **Give a reason for a word change even when it is obvious.** ⚠ *For consistency with the schedule* **is five words and it stops a reader wondering whether you dislike his vocabulary.**',
  '**Practise:** Take four sentences in somebody\'s draft. Write each mark-up in two parts, and pick the one of them you will rewrite.',
  '**Useful phrases:**  the line as it stands reads as though  ·  suggest:  ·  for consistency with  ·  the paragraph may need rebuilding  ·  I have annotated rather than rewritten',
  '**Pronunciation – a suggestion read as a suggestion.** 🔊 **Track 9.6** Listen twice. ⚠ **The first reads *suggest* with no stress at all, as a label.** ⚠ **The second leans on it.** **Leaned on, it is an instruction; flat, it is one of three things the author may now do.** Read four suggestions flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has rewritten a line; B asks for the first part.'));
out.push(dlg(null, [
  ['A', 'Theirs: __________. Mine: __________.'],
  ['B', '⚠ **Yours is better and the author cannot see why. What does his line say?**'],
  ['A', '⚠ **It reads as though __________.**'],
  ['B', '⚠ **And what is true?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write both parts.**'],
  ['A', '⚠ **The line as it stands reads as though __________; __________. Suggest: __________.**'],
  ['B', '⚠ **And how many in a row have you rewritten?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the date that moved by itself', 'Role card 2 — three in a row'], [[
  '⚠ **Their line: *the delivery date was moved to 2 May*.** ⚠ **A\'s line: *we agreed with Ms Tannous to move the delivery to 2 May*.** ⚠ **B makes A say what the original says** — **that the date moved by itself, with nobody in the sentence** — **and the two-part mark-up then writes itself.** **Unit 2 is the grammar and this is the use of it.**',
  '⚠ **A has rewritten lines 7, 8 and 9.** ⚠ **B reads the three rewrites aloud, one after another, and asks whose paragraph it now is.** ⚠ **Then B sets the task: keep the rewrite of the worst line, annotate the other two in two parts each, and add one sentence saying the paragraph may need rebuilding once line 7 is settled.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write a mark-up in both parts. ⚠ Then say what the author could do with it that he could not do with a rewrite, and name all three things.'));
out.push(PHRASE_CARD(['the line as it stands reads as though', 'suggest:', 'for consistency with', 'may need rebuilding', 'annotated, not rewritten']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** sentences from a draft you have been sent. Mark each up in two parts.'));
out.push(table(['Line', 'What it says as it stands', 'The suggestion', 'Rewrite or annotate?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.7, 2.4, 2.4, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Line _______ as it stands reads as though _______; in fact _______. I suggest _______. And I have _______ rather than _______ because _______._'));
out.push(p('**Listener task:** count how many mark-ups had both parts. ⚠ Then ask how many of the first parts turned out to be about a fact rather than about style, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three mark-ups on the board — look for a rewrite with no first part, and three consecutive rewritten sentences. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE REPLY, LINES 1 TO 12. 30 May. N. Mansour. For Mr Sayegh before it goes.**',
  '⚠ **Line 2.** _“the Company notes the shortfall”_ — **the line as it stands reads as though we had been told of it; we counted it ourselves and reported it on 14 March.** ⚠ *Suggest: the Company identified the shortfall on 14 March and reported it the same day.*',
  '⚠ **Line 4.** _“the delivery date was moved to 2 May”_ — **the line as it stands reads as though the date moved by itself.** ⚠ *Suggest: the Company agreed the revised date of 2 May with Ms Tannous on 18 April.*',
  '⚠ **Line 6.** _“so far as we are aware, the count was made on the apron”_ — ⚠ **the hedge moves a finding to a statement about our own knowledge, and we searched four named files.** ⚠ *Suggest: delete the hedge; the sentence is already attributed to one account in the paper at paragraph 9.*',
  '⚠ **Line 7.** _“the press failure”_ — **a press that is nine years old and has failed twice is not a failure, it is a frequency, and the note elsewhere says eleven days.** ⚠ *Annotated, not rewritten: line 7 may need rebuilding once line 6 is settled.*',
  '⚠ **Line 10.** _“the delay”_ — **the line as it stands puts four separate causes into one noun.** ⚠ *Suggest: the eleven days during which the plating press was out of service.*',
  '⚠ **Line 12.** _“we trust this is satisfactory”_ — ⚠ **I have left this alone and I want it noted that I left it alone.** **It is a sentence I would never write and it is not wrong, and nothing in it alters an obligation.**',
  '⚠ **Six mark-ups on twelve lines, four of which are suggestions and two of which are annotations** — **and lines 6 and 7 are consecutive, which is why only one of them is rewritten.**',
  '⚠ **The one I expect to be argued with is line 2.** ***Notes* against *identified*** **looks like a preference and is not.** ⚠ **A company that notes a shortfall was told about it; a company that identifies one found it** — **and the whole value of the root-cause paper is that we found it, counted it, and reported it on the same day.** **That is not style. It is the first fact in the file.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is line 7 annotated rather than rewritten?'));
out.push(item('2', 'What does the writer want noted about line 12, and why?'));
out.push(item('3', 'Why is *notes* against *identified* not a matter of preference?'));
out.push(box('Writer\'s box', [
  '**A mark-up of twelve lines — four parts:** ⚠ **each line in two parts, in the author\'s numbering** → ⚠ **one of two consecutive lines annotated rather than rewritten** → ⚠ **the line you left alone, with a note that you left it** → ⚠ **and the one you expect to be argued with.**',
  '⚠ **Quote the author\'s words before you discuss them.** ⚠ **In quotation marks, exactly** — **a mark-up that paraphrases the line it is marking cannot be checked against the page.**',
  '⚠ **Make the first part about the reading, not about the writing.** ⚠ *Reads as though we had been told of it* **is a fact about what a reader will take from the line** — **where *this is unclear* is a fact about you.**',
  '⚠ **Where two marked lines are consecutive, rewrite one and annotate the other.** ⚠ *Line 7 may need rebuilding once line 6 is settled.* **Eleven words, and the paragraph stays its author\'s.**',
  '⚠ **Note the line you left alone, and say it is not wrong.** ⚠ *A sentence I would never write, and nothing in it alters an obligation.* **It tells a reader that your silences are decisions** — **which is what makes the six mark-ups credible.**',
  '⚠ **And name the one that will be read as a preference.** ⚠ **_Notes_ against _identified_: a company that notes a shortfall was told about it; one that identifies it found it** — **and the difference is the first fact in the file.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Mark up six lines of a draft you have been sent (**80 words or more**). Use the frame.'));
out.push(p('⚠ **Line ______________.** _“______________”_ — **the line as it stands reads as though ______________; ______________.** ⚠ *Suggest: ______________.*   ⚠ **Line ______________.** _“______________”_ — **______________.** ⚠ *Suggest: ______________.*   ⚠ **Line ______________.** _“______________”_ — ⚠ **______________.** ⚠ *Annotated, not rewritten: line ______________ may need rebuilding once line ______________ is settled.*   ⚠ **Line ______________.** _“______________”_ — ⚠ **I have left this alone and I want it noted that I left it alone.** **It is a sentence I would never write and it is not wrong, and nothing in it alters an obligation.**   ⚠ **______________ mark-ups on ______________ lines, ______________ suggestions and ______________ annotations** — **and lines ______________ and ______________ are consecutive, which is why only one is rewritten.**   ⚠ **The one I expect to be argued with is line ______________.** **______________ against ______________ looks like a preference and is not:** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The author\'s words quoted exactly before being discussed', ''],
  ['A first part about the reading, not about the writing', ''],
  ['Of two consecutive lines, one annotated', ''],
  ['A line left alone, with a note that it was left', ''],
  ['The mark-up that will be read as a preference, named', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first parts, without the suggestions. ⚠ The class says what each line as it stands commits the author to — and where the first part says *this is unclear*, it is about the marker and not the line.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time your sentence was rewritten and you could not tell why (**200 to 240 words**). Say what you wrote, what came back, what you guessed the reason was, whether you asked, and what the reason turned out to be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did you ever find out the reason?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer never find out why? Usually two of three — ⚠ **and in those two the writer has since written the same sentence the same way again, because nothing told them not to.**'));
out.push(box('Homework', ['Write your final text. Then take four lines of a draft you have been sent and write each mark-up in two parts, with the author\'s words quoted (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.4 =======================
out.push(pb());
out.push(h2('9.4  The line you may not improve'));
out.push(p('**Function:** recognising a line that is not yours to write   ·   **Grammar:** _this is quoted · this was agreed · this is a term of art · this hedge was negotiated_   ·   **Pronunciation:** a refusal to edit, said without regret'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a badly written line at your work that nobody is allowed to change. ⚠ Then say why not.'));
out.push(p('**b**  Which may you improve? _a clumsy sentence in a covering letter · a clumsy sentence that quotes eleven words of a letter you sent in January_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the four lines?   **A** they are well drafted   **B** two of them are badly written and all four are closed to editing   **C** they will be renegotiated'));
out.push(p('**b**  Listen again. **1** What are the four kinds? **2** What does he say about *without prejudice*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  "Four of them are not yours"', [
  ['Nour', 'Four of the twelve I have not touched. I want to check I have the right four.'],
  ['Mr Sayegh', '⚠ **Read them.**'],
  ['Nour', 'Line 3, the figure. Eleven cartons, agreed in writing on 20 February.'],
  ['Mr Sayegh', '⚠ **Closed. An agreed figure is a fact two parties have signed off, and it does not acquire an *about* because somebody\'s house style prefers one.**'],
  ['Nour', 'Line 5. Eleven words quoted from our own letter of 28 January.'],
  ['Mr Sayegh', '⚠ **Closed, and the reason is sharper: a quotation that has been improved is not a quotation.** ⚠ **They have replaced it with *as set out in correspondence*, which is a summary** — **and a summary of your own undertaking is a weaker thing to be holding in September.**'],
  ['Nour', 'Line 8. *Without prejudice* in the heading, which they have deleted.'],
  ['Mr Sayegh', '⚠ **Closed, and that one is not even about writing.** ⚠ **It is a term of art: it means the letter cannot be put in front of a court as an admission, and it means that because those two words are there.** **Delete them and the protection goes with them.**'],
  ['Nour', 'It reads like nonsense to anybody who does not know.'],
  ['Mr Sayegh', '⚠ **It does, and that is the cost, and the cost is worth paying.** ⚠ **A term of art is not an ornament** — **it is a short way of saying something that would otherwise take a paragraph and still be arguable.**'],
  ['Nour', 'And line 11. *So far as the Company has been able to establish*, which they have deleted.'],
  ['Mr Sayegh', '⚠ **Closed, and that is my own hedge and I spent forty minutes on the telephone in March getting it accepted.** ⚠ **It is nine words that limit what we are asserting to what we have looked for** — **which is the opposite of line 6\'s hedge, and the difference is that line 6\'s was added to a finding and line 11\'s was negotiated against a liability.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four lines that are not yours to write**',
  table(['', 'Why it is closed', 'Here'], [
    ['⚠ **an agreed figure**', '⚠ **two parties have signed off a fact**', '⚠ **eleven cartons, agreed in writing on 20 February** — **and it does not acquire an *about***'],
    ['⚠ **a quoted undertaking**', '⚠ **a quotation that has been improved is not a quotation**', '⚠ **eleven words of our letter of 28 January** — **and *as set out in correspondence* is a summary**'],
    ['⚠ **a term of art**', '⚠ **it is a short way of saying something that would take a paragraph and still be arguable**', '⚠ **_without prejudice_** — **delete it and the protection goes**'],
    ['⚠ **a negotiated hedge**', '⚠ **somebody bought it, clause by clause**', '⚠ **_so far as the Company has been able to establish_** — **nine words, forty minutes on a telephone in March**'],
  ], [1.7, 3.2, 3.6]),
  '⚠ **Two of the four are badly written and all four are closed.** ⚠ **Quality is not the test** — **the test is where the words came from.**',
  '⚠ **A quotation that has been tidied is not a quotation**, **and a summary of your own undertaking is a weaker thing to be holding in September than the eleven words you actually wrote.**',
  '⚠ **A term of art reads like nonsense to anybody who does not know it, and that is the cost, and the cost is worth paying.** ⚠ **It is not an ornament: it does in two words what a paragraph would do badly.**',
  '⚠ **Learn to tell a negotiated hedge from an inserted one.** ⚠ **Line 6\'s hedge was added to a finding and weakens it; line 11\'s was negotiated against a liability and limits it** — **same grammar, opposite function, and the difference is who asked for it and what it is attached to.**',
  '⚠ **And when you leave such a line, say in the reply that you have left it and why in six words.** ⚠ *Line 8 is a term of art.* **Otherwise your silence is read as not having noticed** — **and somebody downstream will improve it.**',
  '**Practise:** Take four closed lines from your work. Name the kind of each, and write the six words you would use to protect it.',
  '**Useful phrases:**  agreed in writing on  ·  quoted from our letter of  ·  it is a term of art  ·  that hedge was negotiated  ·  quality is not the test',
  '**Pronunciation – a refusal to edit, without regret.** 🔊 **Track 9.8** Listen twice. ⚠ **The first says *line 8 is a term of art* and stops.** ⚠ **The second adds *I know it reads badly*.** **The apology invites a negotiation about a thing that is not negotiable.** Say the first four times, and stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a closed line; B asks which kind it is.'));
out.push(dlg(null, [
  ['A', 'Line __________. __________.'],
  ['B', '⚠ **Which of the four is it?**'],
  ['A', '⚠ **It is __________, because __________.**'],
  ['B', '⚠ **And they have changed it to __________. What does that cost?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say the six words you will put in the reply.**'],
  ['A', '⚠ **Line __________ is __________.**'],
  ['B', '⚠ **And do not add that it reads badly.**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the quotation summarised', 'Role card 2 — the two hedges'], [[
  '⚠ **They have replaced eleven quoted words of A\'s own letter with *as set out in correspondence*.** ⚠ **B asks what A will be holding in September.** ⚠ **Eleven words of A\'s own undertaking, or a phrase that points at a file** — **and a quotation that has been improved is not a quotation at all.**',
  '⚠ **Line 6\'s hedge was added by their office to a finding; line 11\'s hedge was negotiated by Mr Sayegh against a liability.** ⚠ **B\'s job is to make A articulate the difference without using the word *ours*.** ⚠ **The test is what the hedge is attached to: a finding you have evidenced, or an assertion about the whole world.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four kinds. ⚠ Then write the difference between the two hedges, and say what each one is attached to.'));
out.push(PHRASE_CARD(['agreed in writing on', 'quoted from our letter of', 'it is a term of art', 'that hedge was negotiated', 'quality is not the test']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** closed lines from documents at your work. Name each.'));
out.push(table(['The line', 'Which kind', 'Where the words came from', 'The six words for the reply'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.3, 1.7, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The line is _______. It is _______, because the words came from _______. If it were changed we would lose _______. And the reply will say _______._'));
out.push(p('**Listener task:** count how many closed lines are badly written. ⚠ Then ask how many had already been improved by somebody, and what it cost, and expect one in every room.'));
out.push(p('**Board clinic:** your teacher writes three closed lines on the board — look for a quotation tidied, and a term of art replaced with plain English. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FOUR LINES THAT DO NOT ARISE. 30 May. N. Mansour. For the reply, and for the file.**',
  table(['Line', 'Their change', 'Why it is closed', 'What the change would cost'], [
    ['**3**', '⚠ **_about eleven cartons_ for _eleven cartons_**', '⚠ **an agreed figure** — **agreed in writing on 20 February, in their own letter**', '⚠ **the only number in the file that is not in dispute stops being agreed**'],
    ['**5**', '⚠ **_as set out in correspondence_ for eleven quoted words**', '⚠ **a quoted undertaking from our letter of 28 January**', '⚠ **in September we would be holding a reference to a file instead of eleven words we wrote**'],
    ['**8**', '⚠ **_without prejudice_ deleted from the heading**', '⚠ **a term of art** — **it means the letter cannot be produced as an admission**', '⚠ **the protection, entirely** — **the words are what does it**'],
    ['**11**', '⚠ **_so far as the Company has been able to establish_ deleted**', '⚠ **a negotiated hedge** — **agreed clause by clause in March**', '⚠ **we would be asserting about the world what we can only assert about our own search**'],
  ], [0.5, 2.6, 3, 3]),
  '⚠ **Lines 8 and 11 are badly written and both are closed, and the reply says so in six words each and does not apologise for either.** ⚠ **_Line 8 is a term of art. Line 11 was agreed in March._** **Twelve words for two lines, and no adjectives.**',
  '⚠ **Line 3 is the one I nearly missed, because *about* is the smallest word on the page.** **The figure was agreed in their own letter of 20 February.** ⚠ **An *about* in front of it turns the one number nobody disputes back into a number** — **and the whole of the root-cause paper rests on the eleven being settled so that the argument can be about why.**',
  '⚠ **Line 11 is the one I would have deleted myself in March if nobody had told me.** **It is nine words of fog in front of a clear sentence.** ⚠ **What it does is limit what we assert to what we have looked for** — **so that a document we have not seen, in a file we do not hold, cannot later be said to contradict us.** **Mr Sayegh spent forty minutes buying it.**',
  '⚠ **And the general rule, which is the unit\'s:** ⚠ **quality is not the test.** **The test is where the words came from** — **a figure two parties agreed, a quotation, a term of art, or a hedge somebody negotiated** — **and none of the four is improved by being better written.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two lines are badly written, and what does the reply say about them?'));
out.push(item('2', 'Why does the *about* at line 3 matter so much?'));
out.push(item('3', 'What does the hedge at line 11 actually do?'));
out.push(box('Writer\'s box', [
  '**The lines that do not arise — four parts:** **a table of *their change · why it is closed · what the change would cost*** → ⚠ **the badly written ones, named without apology** → ⚠ **the smallest word on the page** → ⚠ **and the general rule.**',
  '⚠ **Say where the words came from, with a date.** ⚠ *Agreed in writing on 20 February, in their own letter.* **A closed line with no provenance is a preference**, **and provenance is what makes it closed.**',
  '⚠ **Protect a badly written closed line in six words and do not apologise.** ⚠ *Line 8 is a term of art.* **An apology invites a negotiation about a thing that is not negotiable** — **and the person who invited it is you.**',
  '⚠ **Look at the smallest words.** ⚠ **An *about* in front of an agreed figure is five letters and it reopens the only number in the file that is settled** — **and a settled number is what allows an argument to be about causes.**',
  '⚠ **Write out what a negotiated hedge does, for whoever reads the file next.** ⚠ **It limits what you assert to what you have searched** — **so that a document you have not seen cannot later be said to contradict you.** **Without that sentence, the next person deletes it.**',
  '⚠ **And state the rule.** ⚠ **Quality is not the test; provenance is** — **a figure agreed, a quotation, a term of art, a negotiated hedge, and none of the four is improved by being better written.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *lines that do not arise* section for a draft of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ LINES THAT DO NOT ARISE. ______________. For the reply, and for the file.**   **______________** | ⚠ **______________** | ⚠ **an agreed figure** — **agreed ______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **a quoted undertaking from ______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **a term of art** — **it means ______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **a negotiated hedge** — **agreed ______________** | ⚠ **______________**   ⚠ **Lines ______________ and ______________ are badly written and both are closed**, **and the reply says so in six words each and does not apologise.**   ⚠ **Line ______________ is the one I nearly missed, because ______________ is the smallest word on the page.**   ⚠ **Line ______________ is the one I would have deleted myself.** **What it does is ______________** — **so that ______________.**   ⚠ **And the general rule: quality is not the test. The test is where the words came from.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Provenance, with a date, for every closed line', ''],
  ['What the change would cost, for each', ''],
  ['A badly written closed line protected without apology', ''],
  ['The smallest word on the page, examined', ''],
  ['What the negotiated hedge does, written out for the file', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their closed line and its provenance. ⚠ The class says whether the provenance would survive somebody asking for the document — and where there is no document, the line is a custom and not a closed line.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a line at your work that everybody thinks cannot be changed (**200 to 240 words**). Say what it is, who says it cannot change, what kind of closed line it is supposed to be, whether there is a document behind it, and what you found.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a document behind it?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was there a document behind the closed line? Usually one of three — ⚠ **and the other two are customs that have been treated as terms for years, which is the opposite fault and costs just as much.**'));
out.push(box('Homework', ['Write your final text. Then find one line at your work that is treated as closed, ask where the words came from, and write down the answer or the absence of one (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.5 =======================
out.push(pb());
out.push(h2('9.5  Reinstating a deletion'));
out.push(p('**Function:** putting back something their editor removed   ·   **Grammar:** _I have reinstated X; without it the sentence reads as Y_   ·   **Pronunciation:** a reinstatement said as a statement of fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something that was cut from a document of yours. ⚠ Then say whether the document still works without it.'));
out.push(p('**b**  Which cut must be reinstated? _a sentence of explanation nobody needs · the date on which you first reported the shortfall_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say most deletions are?   **A** hostile   **B** an editor shortening a paragraph without knowing what one clause was carrying   **C** accidental'));
out.push(p('**b**  Listen again. **1** Which three things does she say you always reinstate? **2** What is the form of a reinstatement?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  "Put it back and say what it was carrying"', [
  ['Nour', 'They have cut four things. A date, a clause about the four files, a sentence about the weighbridge, and the word *same*.'],
  ['Nadia', '⚠ **Which of the four changes what the document can be used for?**'],
  ['Nour', 'The date. *Reported on 14 March* has become *reported promptly*.'],
  ['Nadia', '⚠ **Reinstate it, and say what the cut did.** ⚠ *Promptly* **is an adjective about us; 14 March is a fact in a file** — **and the one thing we have in this correspondence is that we found it and said so the same day.**'],
  ['Nour', 'And the four files?'],
  ['Nadia', '⚠ **Reinstate.** ⚠ **Four named files is a search; *we have no record* is a claim** — **Unit 7, and they have turned the first into the second by deleting one clause.**'],
  ['Nour', 'The weighbridge sentence is genuinely long. Their version is shorter and nothing is lost.'],
  ['Nadia', '⚠ **Then let it go and say nothing.** ⚠ **A reinstatement you do not need costs you one of the ones you do** — **a reply that puts back four things is a reply from somebody who cannot be edited.**'],
  ['Nour', 'And the word *same*? *Reported the same day* has become *reported that day*.'],
  ['Nadia', '⚠ **Reinstate it, and that is the one they will not expect.** ⚠ **_That day_ means the day of the count; *the same day* means the same day as the count** — **and only one of the two says we did not wait.**'],
  ['Nour', 'Three reinstatements out of four cuts.'],
  ['Nadia', '⚠ **Three, each in one sentence, each saying what the cut removed rather than that you want your words back.** ⚠ **A date, a search, and a word that carries a comparison.** ⚠ **And the form is always the same: I have reinstated X; without it the sentence reads as Y.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What you reinstate, and how**',
  table(['', 'The cut', 'Reinstate?', 'The sentence'], [
    ['⚠ **a date**', '⚠ *reported promptly* **for** *reported on 14 March*', '⚠ **always**', '⚠ *reinstated: “on 14 March”. Promptly is an adjective about us; the date is a fact in a file.*'],
    ['⚠ **a named search**', '**the clause listing four files**', '⚠ **always**', '⚠ *reinstated: four named files is a search; without it we are claiming to have no record.*'],
    ['**a long sentence**', '**their shorter version**', '⚠ **no** — **let it go and say nothing**', '—'],
    ['⚠ **a word carrying a comparison**', '⚠ *that day* **for** *the same day*', '⚠ **yes** — **and they will not expect it**', '⚠ *reinstated: “the same”; that day means the day of the count, the same day means we did not wait.*'],
  ], [1.5, 2.3, 1.6, 4.1]),
  '⚠ **Most deletions are an editor shortening a paragraph without knowing what one clause was carrying.** ⚠ **Treat them that way in writing, whatever you suspect** — **it is usually true and it is always the cheaper assumption.**',
  '⚠ **Three things are always reinstated: a date, a named search, and a word that carries a comparison.** **Each of the three is load-bearing and none of them looks it.**',
  '⚠ **A reinstatement you do not need costs you one you do.** ⚠ **A reply that puts back four cuts is a reply from somebody who cannot be edited** — **so let the long sentence go, and say nothing about it.**',
  '⚠ **The form is always: I have reinstated X; without it the sentence reads as Y.** ⚠ **The second half is the work** — **it is about the reading, not about your preference, and it is how 9.3\'s two parts come back in a different task.**',
  '⚠ **And watch the single word.** ⚠ **_The same day_ against *that day* is four letters and a comparison** — **and the comparison is the only thing in the sentence saying you did not wait.**',
  '**Practise:** Take four cuts from a document of yours. Decide which three to reinstate, and write each as one sentence.',
  '**Useful phrases:**  I have reinstated  ·  without it the sentence reads as  ·  a fact in a file, not an adjective about us  ·  four named files is a search  ·  let it go',
  '**Pronunciation – a reinstatement as a statement of fact.** 🔊 **Track 9.10** Listen twice. ⚠ **The first says *I have reinstated the date; promptly is an adjective about us* flatly.** ⚠ **The second stresses *reinstated*.** **Stressed, it is a complaint about being edited; flat, it is a note about what the document can be used for.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has four cuts; B asks which change the use of the document.'));
out.push(dlg(null, [
  ['A', 'They have cut __________, __________, __________ and __________.'],
  ['B', '⚠ **Which of them changes what the document can be used for?**'],
  ['A', '__________, because __________.'],
  ['B', '⚠ **Reinstate it. Say what the cut did.**'],
  ['A', '⚠ **I have reinstated __________; without it the sentence reads as __________.**'],
  ['B', '⚠ **And __________? Is their version worse?**'],
  ['A', 'No. It is shorter and nothing is lost.'],
  ['B', '⚠ **Then let it go and say nothing. How many are you putting back?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — promptly for 14 March', 'Role card 2 — the reinstatement you must not make'], [[
  '⚠ **Their editor has replaced *on 14 March* with *promptly*.** ⚠ **B makes A say what each of the two is:** **one is an adjective about us and one is a fact in a file** — ⚠ **and the whole of A\'s position in the correspondence is that the shortfall was found by A\'s own count and reported the same day.**',
  '⚠ **A wants to put back a long sentence about the weighbridge because A wrote it and it is accurate.** ⚠ **B asks what is lost by their shorter version.** **Nothing.** ⚠ **Then B makes the arithmetic explicit: four reinstatements make a reply from somebody who cannot be edited, and the price is paid by the three that matter.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three reinstatements in the two-part form. ⚠ Then say which cut was let go, and what letting it go bought.'));
out.push(PHRASE_CARD(['I have reinstated', 'without it the sentence reads as', 'a fact in a file', 'four named files is a search', 'let it go']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** cuts from a document of yours. Decide each.'));
out.push(table(['The cut', 'What it was carrying', 'Reinstate?', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.9, 1, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They cut _______. It was carrying _______. I have _______ it, and the sentence reads _______. And the one I let go was _______, because _______._'));
out.push(p('**Listener task:** count how many cuts were a single word. ⚠ Then ask how many of those single words were carrying a comparison or a date, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three reinstatements on the board — look for one that says only *I prefer my version*, and four reinstatements in one reply. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THREE REINSTATEMENTS. 31 May. N. Mansour. Section 2 of the reply.**',
  '⚠ **1. Line 2. I have reinstated “on 14 March”.** **Their version reads *reported promptly*.** ⚠ *Promptly* **is an adjective about ourselves and *14 March* is a date in a file** — **and the Company\'s position throughout this correspondence is that the shortfall was identified by its own count and reported on the day of the count.** **The date is what makes that checkable.**',
  '⚠ **2. Line 6. I have reinstated the clause naming the four files searched.** **Their version reads *the Company has no record of where a count is made*.** ⚠ **Four named files is a search; *no record* is a claim** — **and the difference is the whole of the paper\'s method.**',
  '⚠ **3. Line 9. I have reinstated “the same”.** **Their version reads *reported that day*.** ⚠ ***That day*** **means the day of the count; *the same day* means the same day as the count** — **and only the second says that nothing was held back for consideration.** **It is four letters.**',
  '⚠ **And one cut I have not reinstated.** **Line 7 carried a sentence of mine about the weighbridge, which their editor has reduced from thirty-one words to nine.** ⚠ **Nothing is lost and theirs is better, and I have said nothing about it anywhere in the reply.**',
  '⚠ **Four cuts and three reinstatements, and the proportion is the point.** **A reply that reinstated all four would be a reply from somebody who cannot be edited** — ⚠ **and the cost of that is not paid on the weighbridge sentence, it is paid on the date.**',
  '⚠ **The one I expect them to query is the third, because it is four letters and will look like fussiness.** ⚠ **The answer, if asked, is one sentence: the document is about whether we delayed, and *the same day* is the only phrase in it that answers that question.** **I have not put that sentence in the reply, because a reinstatement defended in advance reads as a reinstatement the writer expects to lose.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the difference between *that day* and *the same day*?'));
out.push(item('2', 'Which cut was not reinstated, and what did letting it go buy?'));
out.push(item('3', 'Why is the defence of the third reinstatement not in the reply?'));
out.push(box('Writer\'s box', [
  '**Reinstatements — four parts:** ⚠ **each in the two-part form, numbered and with the line** → ⚠ **the cut you did not reinstate** → ⚠ **the proportion, stated** → ⚠ **and the one you expect to be queried, with the answer kept back.**',
  '⚠ **Quote their version as well as yours.** ⚠ *Their version reads “reported promptly”.* **A reinstatement that does not quote the cut version cannot be checked against the page**, **and the author has to hold two documents open to follow you.**',
  '⚠ **Make the second part about use, not about preference.** ⚠ *The date is what makes that checkable.* **_I prefer my wording_ is the sentence that loses every reinstatement**, **because it concedes that the question is taste.**',
  '⚠ **Let one cut go, and say so.** ⚠ **Thirty-one words to nine, nothing lost, theirs better** — **and the sentence declaring it is what makes the other three look like judgements rather than reflexes.**',
  '⚠ **State the proportion.** ⚠ **Four cuts, three reinstatements** — **because the cost of reinstating everything is not paid on the sentence you did not need; it is paid on the date.**',
  '⚠ **And keep the defence of your smallest reinstatement back.** ⚠ **A four-letter reinstatement defended in advance reads as one the writer expects to lose** — **have the sentence ready and do not send it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the reinstatements section of a reply (**80 words or more**). Use the frame.'));
out.push(p('**______________ REINSTATEMENTS. ______________. Section ______________ of the reply.**   ⚠ **1. Line ______________. I have reinstated “______________”.** **Their version reads *______________*.** ⚠ **______________ is ______________ and ______________ is ______________** — **and ______________.**   ⚠ **2. Line ______________. I have reinstated ______________.** **Their version reads *______________*.** ⚠ **______________ is a search; ______________ is a claim.**   ⚠ **3. Line ______________. I have reinstated “______________”.** ⚠ **______________ means ______________; ______________ means ______________** — **and only the second says ______________.** **It is ______________ letters.**   ⚠ **And one cut I have not reinstated.** **Line ______________ carried ______________, which their editor has reduced from ______________ to ______________.** ⚠ **Nothing is lost and theirs is better, and I have said nothing about it.**   ⚠ **______________ cuts and ______________ reinstatements, and the proportion is the point.**   ⚠ **The one I expect them to query is ______________.** **The answer, if asked, is ______________** — ⚠ **and I have not put it in the reply.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their cut version quoted as well as yours', ''],
  ['A second part about use, not about preference', ''],
  ['One cut let go, and declared', ''],
  ['The proportion stated', ''],
  ['The defence of the smallest reinstatement kept back', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their smallest reinstatement. ⚠ The class says what the four or five letters were carrying — and where nobody can say, the reinstatement is a preference and should be let go.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something cut from a document of yours that turned out to matter (**200 to 240 words**). Say what was cut, who cut it, why they cut it, when the absence was noticed, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long was the thing that was cut?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the cut thing shorter than a sentence? Usually two of three — ⚠ **and in all three the person who cut it was shortening something and had no idea what the clause was carrying.**'));
out.push(box('Homework', ['Write your final text. Then take a document of yours that somebody shortened, find the dates, the named searches and the comparisons, and check which survived (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.6 =======================
out.push(pb());
out.push(h2('9.6  One document, two authors, one voice'));
out.push(p('**Function:** making two hands read as one signature   ·   **Grammar:** _the join is at “furthermore” · read it aloud and listen for the seam_   ·   **Pronunciation:** finding a join by ear'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a document at your work that two people wrote. ⚠ Then say whether a reader could tell where one stopped.'));
out.push(p('**b**  Which sentence is the join? _We counted the consignment on 14 March and reported it the same day. · Furthermore, it is submitted that no liability attaches to the Company in respect thereof._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does Mr Ayoub find the joins?   **A** he compares drafts   **B** he reads it aloud and hears where the voice changes   **C** he asks who wrote what'));
out.push(p('**b**  Listen again. **1** What are the three signs of a join? **2** What does he say must happen to a clause that cannot be rewritten in one voice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  "It goes out over my name"', [
  ['Mr Ayoub', 'This goes out over my signature. Read me the second paragraph.'],
  ['Nour', '*We counted the consignment on 14 March and reported it the same day. Furthermore, it is submitted that no liability attaches to the Company in respect thereof.*'],
  ['Mr Ayoub', '⚠ **Stop there. Who wrote the second sentence?**'],
  ['Nour', 'Mr Sayegh.'],
  ['Mr Ayoub', '⚠ **I could hear it, and so will Mr Dallal, and he will wonder which of the two of us he is dealing with.** ⚠ **One signature, one voice.**'],
  ['Nour', 'How did you know without being told?'],
  ['Mr Ayoub', '⚠ **Three things.** ⚠ **The connective** — *furthermore*, **which nobody in this building says.** ⚠ **The passive with no agent** — *it is submitted*. ⚠ **And a word that belongs to one trade** — *thereof*.'],
  ['Nour', 'The content is right, though. We are not accepting liability.'],
  ['Mr Ayoub', '⚠ **Then say it in the voice of the first sentence.** ⚠ *We do not accept that the Company is liable for the shortfall, and we have set out why at paragraph 9.* **Same content, and it sounds like the man whose name is at the bottom.**'],
  ['Nour', 'And if a clause genuinely cannot be rewritten? The hedge at line 11 is Mr Sayegh\'s and it cannot change.'],
  ['Mr Ayoub', '⚠ **Then it does not get blended, it gets marked.** ⚠ **Put it in quotation marks and attribute it, or set it out as a numbered term** — **so a reader can see that one clause is in a different voice on purpose.**'],
  ['Nour', 'Rather than hiding the seam.'],
  ['Mr Ayoub', '⚠ **A seam you can see is a construction; a seam you cannot see is a document that changes its mind halfway down.** ⚠ **And there is nothing in between.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Finding and fixing a join**',
  table(['The sign', 'In the draft', 'What to do'], [
    ['⚠ **a connective nobody here says**', '⚠ *furthermore · in the premises · accordingly*', '⚠ **rewrite in the voice of the sentence before it**'],
    ['⚠ **a passive with no agent**', '⚠ *it is submitted that no liability attaches*', '⚠ *we do not accept that the Company is liable* — **Unit 2, used the other way round**'],
    ['⚠ **a word belonging to one trade**', '⚠ *thereof · aforesaid · the said consignment*', '**the ordinary word, or the thing itself**'],
    ['⚠ **a clause that cannot be rewritten**', '⚠ **the negotiated hedge at line 11**', '⚠ **mark it** — **quote and attribute, or set it out as a numbered term**'],
  ], [2.1, 2.9, 3.1]),
  '⚠ **Read it aloud.** ⚠ **A join is heard before it is seen**, **and the ear finds in one reading what a comparison of drafts takes an hour to find.**',
  '⚠ **One signature, one voice.** ⚠ **A reader who can hear two authors wonders which of them he is dealing with** — **and in a disputed matter that is a question about authority, not about prose.**',
  '⚠ **Three signs, and they travel together: a connective nobody in the building says, a passive with no agent, and a word that belongs to one trade.** **Where you find one, look for the other two in the same sentence.**',
  '⚠ **Keep the content and change the voice.** ⚠ *We do not accept that the Company is liable, and we have set out why at paragraph 9* **says exactly what *it is submitted that no liability attaches in respect thereof* says**, **and it sounds like the man whose name is at the bottom.**',
  '⚠ **And where a clause cannot be rewritten, mark it instead of blending it.** ⚠ **A seam you can see is a construction; a seam you cannot see is a document that changes its mind halfway down** — **and there is nothing in between.**',
  '**Practise:** Take a document two people wrote. Read it aloud, mark every join you hear, and rewrite one of them in the voice of the sentence before it.',
  '**Useful phrases:**  read it aloud  ·  the join is at  ·  one signature, one voice  ·  in the voice of the sentence before it  ·  marked rather than blended',
  '**Pronunciation – finding a join by ear.** 🔊 **Track 9.12** Listen twice. ⚠ **The first reads the two sentences straight through at one speed.** ⚠ **The second hesitates before *furthermore*.** **The hesitation is the ear finding the seam** — **and a reader who hesitates there has heard what Mr Ayoub heard.** Read the pair four times and stop where you hesitate.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a paragraph aloud; B says where the join is.'));
out.push(dlg(null, [
  ['A', '*__________. __________.*'],
  ['B', '⚠ **Stop. Who wrote the second sentence?**'],
  ['A', '__________.'],
  ['B', '⚠ **How could I tell? Name the three signs.**'],
  ['A', '⚠ **The connective __________, the passive __________, and the word __________.**'],
  ['B', '⚠ **Now say it in the voice of the first sentence.**'],
  ['A', '__________.'],
  ['B', '⚠ **And the clause that cannot be rewritten?**'],
  ['A', '⚠ **It gets marked, not blended** — **__________.**'],
]));
out.push(table(['Role card 1 — three signs in one sentence', 'Role card 2 — the clause that must be marked'], [[
  '⚠ *Furthermore, it is submitted that no liability attaches to the Company in respect thereof.* ⚠ **B makes A find all three: the connective, the agentless passive, and the trade word.** ⚠ **Then the rewrite, keeping every bit of the content:** ⚠ *we do not accept that the Company is liable for the shortfall, and we have set out why at paragraph 9.*',
  '⚠ **A wants to smooth the negotiated hedge into the surrounding prose so that the paragraph reads evenly.** ⚠ **B\'s point: smoothing it either changes the words, which is 9.4, or hides that one clause is in another voice.** ⚠ **So it is quoted and attributed, or set out as a numbered term** — **and the visible seam is the honest construction.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three signs and the rewritten sentence. ⚠ Then check that the rewrite has lost nothing of the content, clause by clause.'));
out.push(PHRASE_CARD(['read it aloud', 'the join is at', 'one signature, one voice', 'in the voice before it', 'marked, not blended']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a document at your work that two people wrote. Read it aloud and mark **four** joins.'));
out.push(table(['The sentence', 'Which of the three signs', 'Rewritten in one voice', 'Or marked, because'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 1.4, 2.2, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The join is at _______. The signs are _______ and _______. In one voice it reads _______. And the clause I have marked instead is _______, because _______._'));
out.push(p('**Listener task:** count how many joins carried all three signs at once. ⚠ Then ask how many documents had a second author nobody had been told about, and expect two or three.'));
out.push(p('**Board clinic:** your teacher writes three paragraphs on the board — look for *furthermore* and a *thereof*, and a negotiated clause smoothed into the prose around it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE REPLY, READ ALOUD. 1 June. N. Mansour. Four joins and what I did with each.**',
  table(['Where', 'As drafted', 'Signs', 'What I did'], [
    ['**para 2**', '⚠ *Furthermore, it is submitted that no liability attaches to the Company in respect thereof.*', '⚠ **all three** — *furthermore* · *it is submitted* · *thereof*', '⚠ *We do not accept that the Company is liable for the shortfall, and we have set out why at paragraph 9.*'],
    ['**para 3**', '⚠ *The said consignment was duly counted.*', '⚠ **two** — *the said* · *duly*', '⚠ *We counted the consignment on 14 March.* — **and the date arrives free, because *duly* was standing where a date should be**'],
    ['**para 5**', '⚠ *In the premises, we would invite your office to reconsider three of the amendments.*', '⚠ **one** — *in the premises*', '⚠ *We ask your office to reconsider three of the amendments.*'],
    ['**para 6**', '⚠ *“so far as the Company has been able to establish”*', '⚠ **a different voice on purpose**', '⚠ **marked, not blended** — **quoted, and attributed in a footnote to the telephone agreement of 24 March**'],
  ], [0.8, 3.2, 1.9, 3.3]),
  '⚠ **The second row is the one worth noticing, because the rewrite made the sentence better and not merely plainer.** ***Duly*** **was doing the work of a date: it told a reader that the count was done properly without saying when.** ⚠ **Taking it out left a hole exactly the size of *on 14 March***, **which is the one fact in this correspondence we most want in every paragraph.**',
  '⚠ **The fourth row is marked rather than rewritten and the footnote is three lines.** **It says who agreed the clause and when.** ⚠ **A reader who meets one clause in a different register with no explanation assumes carelessness; the same clause quoted and dated is visibly a term** — **and 9.4 is why it cannot simply be reworded.**',
  '⚠ **What I did not do is rewrite paragraph 4, which is Mr Sayegh\'s throughout and reads as his.** ⚠ **A whole paragraph in one voice is not a join** — **it is a section, and a section may be attributed at its head.** **The fault is a voice that changes inside a paragraph, and twice inside one sentence is worse than once between two.**',
  '⚠ **And the whole exercise took eleven minutes, out loud, with the door shut.** **I have found four joins by ear that I did not find in two readings on the screen** — ⚠ **and the reason is that the eye reads for sense and skips the connectives, which is exactly where the seams are.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was *duly* doing, and what did removing it reveal?'));
out.push(item('2', 'Why is the fourth row marked rather than rewritten, and what does the footnote say?'));
out.push(item('3', 'Why was paragraph 4 left alone?'));
out.push(box('Writer\'s box', [
  '**Reading a two-author document aloud — four parts:** **a table of *where · as drafted · signs · what I did*** → ⚠ **the rewrite that revealed a missing fact** → ⚠ **the clause marked rather than blended** → ⚠ **and the section you left alone.**',
  '⚠ **Count the signs per sentence.** ⚠ **Three signs in one sentence is a sentence from another document; one sign is a habit** — **and the number tells you whether you are rewriting a sentence or translating a paragraph.**',
  '⚠ **Watch what a vague word was standing in for.** ⚠ **_Duly_ was doing the work of a date** — **and removing it left a hole the exact size of *on 14 March*.** **Most trade words are standing where a fact should be.**',
  '⚠ **Mark a clause you may not reword, and date the marking.** ⚠ **Quoted, attributed, and footnoted to the agreement that produced it** — **because an unexplained change of register reads as carelessness and a dated quotation reads as a term.**',
  '⚠ **Leave a whole paragraph in one voice alone.** ⚠ **A section in another voice is a section and may be attributed at its head** — **the fault is a voice that changes inside a paragraph, and twice inside a sentence is worse than once between two.**',
  '⚠ **And say how long it took and how you did it.** ⚠ **Eleven minutes, aloud, with the door shut** — **and four joins the eye had missed in two readings, because the eye reads for sense and skips the connectives.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Read a two-author document of yours aloud and write up the joins (**80 words or more**). Use the frame.'));
out.push(p('**______________, READ ALOUD. ______________. ______________ joins and what I did with each.**   **______________** | ⚠ *______________* | ⚠ **all three** — *______________* · *______________* · *______________* | ⚠ *______________*   **______________** | ⚠ *______________* | ⚠ **two** — *______________* · *______________* | ⚠ *______________* — **and ______________ arrives free**   **______________** | ⚠ *______________* | ⚠ **one** — *______________* | ⚠ *______________*   **______________** | ⚠ *“______________”* | ⚠ **a different voice on purpose** | ⚠ **marked, not blended** — **quoted, and attributed to ______________**   ⚠ **The second row is worth noticing:** ***______________*** **was doing the work of ______________**, ⚠ **and taking it out left a hole exactly the size of ______________.**   ⚠ **What I did not do is rewrite ______________, which is ______________ throughout.** ⚠ **A whole paragraph in one voice is a section, not a join.**   ⚠ **And the whole exercise took ______________, out loud** — **and I found ______________ joins the eye had missed.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The signs counted for each sentence', ''],
  ['A rewrite that revealed a fact standing behind a vague word', ''],
  ['A clause marked and dated rather than blended', ''],
  ['A whole section in one voice left alone', ''],
  ['How long it took, and that it was done aloud', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their worst join aloud — the original, not the rewrite. ⚠ The class says where it hesitated, and whether the hesitation came at the connective.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work whose readers could tell it had two authors (**200 to 240 words**). Say what it was, who wrote which parts, what gave it away, whether anybody said so, and what the reader concluded.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what gave the second author away?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the giveaway a connective or a passive? Usually all three — ⚠ **and in two of three nobody ever said anything to the authors, and the document went out as it was.**'));
out.push(box('Homework', ['Write your final text. Then read aloud a document two people wrote, mark every place you hesitate, and rewrite one join in the voice of the sentence before it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review & Mediate: the four you may not change'));
out.push(p('**Function:** telling an author which of his amendments you will not take   ·   **Review:** substance and presentation · silent and flagged · the two-part mark-up · the closed line · the reinstatement · one voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the two questions you ask of any change somebody has made?',
  '**2** Which three things are never corrected silently, and why those three?',
  '**3** What are the two parts of a mark-up the author can act on?',
  '**4** What are the four kinds of closed line, and what is NOT the test?',
  '**5** Which three things do you always reinstate, and what does a fourth reinstatement cost?',
  '**6** What are the three signs of a join, and what happens to a clause that cannot be rewritten?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Dallal\'s drafter say about the four?   **A** he withdraws them   **B** he did not know two of them were closed and says so   **C** he disagrees'));
out.push(p('**b**  Listen again. **1** Which of the four had he changed deliberately, and why? **2** What does he ask for at the end, and what does it tell you about his office?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  "Three of those I did not know"', [
  ['Nour', 'Before the reply goes, I want to read you the four we are not taking.'],
  ['Mr Hamdan', 'Go on.'],
  ['Nour', '⚠ **Line 3. *About eleven cartons.* The eleven was agreed in writing, in your own letter of 20 February.**'],
  ['Mr Hamdan', '⚠ **Then that is a mistake and I am glad you have raised it.** **Our office puts *about* in front of every quantity, as a style rule.** ⚠ **Nobody told me the figure was agreed.**'],
  ['Nour', '⚠ **Line 5. You have put *as set out in correspondence* where we had eleven words quoted from our letter of 28 January.**'],
  ['Mr Hamdan', '⚠ **Also a mistake. I shortened a long sentence and I did not see the quotation marks.** **Put them back.**'],
  ['Nour', 'Line 8. *Without prejudice*, deleted from the heading.'],
  ['Mr Hamdan', '⚠ **That one I did deliberately, and I will tell you why, and then I will put it back.** ⚠ **My board does not know what it means and I did not want to explain two words in a meeting.** **But I know what it does.**'],
  ['Nour', 'And line 11. The clause about what the Company has been able to establish.'],
  ['Mr Hamdan', '⚠ **That one I deleted because it is nine words of fog.**'],
  ['Nour', '⚠ **It was agreed clause by clause with Mr Sayegh in March, by telephone.**'],
  ['Mr Hamdan', '⚠ **Then it is not fog, it is a term, and the fault is mine for not having the March note in front of me.** ⚠ **Three of those four I did not know, and one I knew and did anyway.** **Send me your reply, and send me the March note as well.**'],
  ['Nour', 'I will send both.'],
  ['Mr Hamdan', '⚠ **And one more thing, which you have not asked for.** ⚠ **Put the four on a separate sheet with the dates on them, and I will put that sheet in the file** — **so that the next person to edit this does not do what I have just done.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – reading the closed lines to the author**',
  table(['What you say', 'What he says', 'What it means'], [
    ['⚠ **the line, then where the words came from, with a date**', '⚠ *nobody told me the figure was agreed*', '⚠ **a house style rule travelling into a document where it does damage** — **not a position**'],
    ['**the quotation summarised**', '⚠ *I shortened a long sentence and did not see the quotation marks*', '⚠ **the commonest closed-line fault there is, and it is pure accident**'],
    ['⚠ **the term of art deleted**', '⚠ *that one I did deliberately — my board does not know what it means* — **and he puts it back**', '⚠ **a real reason, and a bad one, and he knows both**'],
    ['⚠ **the negotiated hedge deleted**', '⚠ *I deleted it because it is nine words of fog* → *then it is a term, and the fault is mine for not having the March note*', '⚠ **provenance he did not have** — **which is a filing failure, and ours as much as his**'],
    ['⚠ **what he asks for**', '⚠ *put the four on a separate sheet with the dates, and I will put it in the file*', '⚠ **the only remedy that outlives both of you**'],
  ], [2.2, 3.1, 2.9]),
  '⚠ **Read the closed lines to their author before the reply goes, line by line, with the provenance and the date for each.** ⚠ **Three of four are usually things he did not know** — **a house style rule, a shortened sentence, a clause whose history is in a note he has not got.**',
  '⚠ **Expect one to have been deliberate, and expect the reason to be real.** ⚠ *My board does not know what “without prejudice” means and I did not want to explain two words in a meeting.* **That is a genuine difficulty** — **and it is answered by a footnote, not by deleting the protection.**',
  '⚠ **When a closed line\'s provenance is in your own file and not in his, the failure is partly yours.** ⚠ **A clause agreed by telephone in March, with the note in your drawer, is a clause the next editor will delete again** — **and he will be right to, on the information he has.**',
  '⚠ **So the remedy is not the reply.** ⚠ **It is the separate sheet of four lines with their dates, which goes in HIS file** — **and that is the only part of this conversation that is still working in September.**',
  '⚠ **And notice what reading it aloud did.** ⚠ **Twelve amendments, five accepted, three argued, four closed** — **and the four were settled in six minutes by a man who agreed with all of them**, **which is what would not have happened in a letter.**',
  '**Practise:** Read your four closed lines to somebody, with the provenance and the date for each. Then write the separate sheet.',
  '**Useful phrases:**  where the words came from  ·  agreed in writing on  ·  nobody told me  ·  then it is a term and not fog  ·  put it on a separate sheet with the dates',
  '**Pronunciation – reading a provenance.** 🔊 **Track 9.14** Listen twice. ⚠ **The first says *the eleven was agreed in writing, in your own letter of 20 February* level, with the date unemphasised.** ⚠ **The second stresses *your own*.** **Stressed, it is a point being scored; level, it is a provenance.** Read four provenances level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads closed lines; B is their author. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A reads each closed line, then where the words came from, then the date, and stops.** ⚠ **A does not explain what the change would cost unless asked.** ⚠ **And when B accepts, A says nothing beyond thank you** — **an accepted point explained further is an accepted point reopened.**',
  '⚠ **B has made all four changes and did not know three of them were closed.** ⚠ **B accepts those three at once and names the reason for each: a house style rule, a shortened sentence, a note he has not got.** ⚠ **The fourth B did deliberately, for a real reason, and puts it back anyway** — ⚠ **and then B asks for the separate sheet, which A had not thought of.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the four lines and what the author said about each. ⚠ Then say which failure was the writer\'s own, and what the separate sheet is for.'));
out.push(PHRASE_CARD(['where the words came from', 'agreed in writing on', 'nobody told me', 'a term, not fog', 'a separate sheet with dates']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a marked-up page. Find the closed lines. Then read them to **two** people and write what each says.'));
out.push(table(['The closed line', 'Its provenance and date', 'What the author said', 'Whose failure it was'], [['', '', '', ''], ['', '', '', '']], [1.6, 1.6, 2.1, 1.2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the page. This is the **ninth** unit of this book, and the unwritten thing is this: ⚠ **almost nobody who alters a closed line knows that it is closed, because the thing that makes it closed is a fact about its history and the history is in somebody else\'s drawer** — **so an editor working from the page alone will delete a negotiated clause, summarise a quotation and soften an agreed figure, every time, and be entirely reasonable in doing it; which means the remedy is never a better editor, it is a sheet of paper in his file saying which lines came from where and when.**'));
out.push(p('_The line was _______. Its provenance is _______, dated _______. The author said _______. And the failure was _______, because _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a tracked change · a substantive change · a closed line · a quoted undertaking · a silent correction · a reinstatement_. ⚠ Fifty-four items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for a provenance given without a date, and an accepted point explained further. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)', 10));
out.push(p('⚠ **This unit is Part 5: error correction, twelve lines, and it is the second time in this book.** Some lines have **one extra word**. Write the extra word in **CAPITALS**; where a line is correct, write **CORRECT**. ⚠ **The extra word is always grammatically wrong, not merely unnecessary** — **a word you would cut for style is not the answer.**'));
out.push(box(null, [
  '**A REPLY TO AN AMENDED DRAFT — find the extra words.**',
  '**1** ______  Thank you for returning the draft note with your office\'s',
  '**2** ______  amendments. We have been accepted five of the twelve',
  '**3** ______  changes without comment, and the reordering of the second',
  '**4** ______  paragraph reads better than what our own version did. Three',
  '**5** ______  changes we have asked you to reconsider, and the our reasons',
  '**6** ______  are set out below, one sentence in each case. Four of the',
  '**7** ______  amendments do not arise, for reasons of provenance rather',
  '**8** ______  than of drafting: a figure which agreed between us in writing',
  '**9** ______  on 20 February, eleven words were quoted from our letter of',
  '**10** ______  28 January, a term of art in the heading, and a clause agreed',
  '**11** ______  by telephone in March. Five small points are listed at the very',
  '**12** ______  end, for the file rather than for than an answer; no reply is needed.',
]));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the fifth Part 1 in the book; the even units take Part 2.**',
  '⚠ **For a message about a returned draft, the three points are: how many changes you have accepted · how many you are asking them to reconsider · and when it goes back.** ⚠ **Not what the changes were** — **there is no room, and the counts are what a manager needs in order to know whether to read any of it.**',
  '⚠ **Name the four closed lines by kind and not by content.** ⚠ *A figure, a quotation, a term of art and your March clause.* **Ten words for four lines** — **and your reader recognises all four kinds, because 9.4 is the same four everywhere.**',
  '⚠ **Give the date it goes back, not *shortly*.** **A date is one word longer and it is the only part of the message that commits you to anything.**',
  '⚠ **Part 5 tip, for the lines above.** **Six of the twelve lines carry an extra word and six are correct**, ⚠ **and the examination never tells you how many of either** — **so a candidate who has found three errors has not finished and a candidate who has found nine has invented some.**',
  '⚠ **And the three traps in these twelve lines.** ⚠ **A perfect participle where a past tense belongs (*have been accepted*) · a relative pronoun where none is wanted (*a figure which agreed*) · and a doubled preposition or conjunction (*rather than for than*).** **All three are grammatically wrong, which is the test** — **and none of them is a word you would cut for style.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A draft you sent out has come back amended. Write an internal message to your manager (**40 to 50 words**). Say **how many changes you have accepted** · **how many you are asking them to reconsider** · and **when it goes back**.'));
out.push(p('______________ — ______________ has returned ______________ with ______________ amendments. ⚠ **We have accepted ______________ without comment and asked them to reconsider ______________.** ⚠ **______________ do not arise: ______________, ______________, ______________ and ______________.** **It goes back on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The number accepted', ''],
  ['The number you are asking them to reconsider', ''],
  ['The closed lines by kind, not by content', ''],
  ['A date it goes back, not *shortly*', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a closed line at your work whose provenance is in nobody\'s file (**200 to 240 words**). Say what the line is, who knows where it came from, what would happen if that person left, what a new editor would do with it, and what the sheet of paper would say.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then write the separate sheet: every closed line in a document of yours, with where the words came from and the date, one line each (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Four of the amendments do not ___.   a) arise   b) arises   c) arising',
  '2  We have accepted five ___ comment.   a) with   b) without   c) out of',
  '3  The line ___ it stands reads as though we were told.   a) how   b) like   c) as',
  '4  I have reinstated the date, ___ which the claim cannot be checked.   a) without   b) with   c) for',
  '5  ___ prejudice is a term of art.   a) Out of   b) Without   c) Beyond',
  '6  A quotation ___ has been improved is not a quotation.   a) what   b) which   c) who',
  '7  The hedge ___ negotiated in March.   a) was   b) were   c) been',
  '8  They have asked us ___ the figure.   a) reconsider   b) to reconsider   c) reconsidering',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 9.15** Listen to a conversation about four amendments. Complete the note.   How many the author did not know were closed: ______   The reason for the *about*: ______   Why the quotation was summarised: ______   Why the term of art was deleted, and what he does: ______   Why the March clause was deleted: ______   What he asks for at the end: ______'));
out.push(p('**C  Reading.** Read the four closed lines at 9.4 again. Name the four kinds, say which two are badly written, and say what the test is if it is not quality.'));
out.push(p('**D  Writing.** Take a change somebody made to a document of yours. Write the two-part mark-up; then one reinstatement in the form *I have reinstated X; without it the sentence reads as Y*; then one closed line with its provenance and date (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 9.15  Audio script (read after the check)', [
  ['Nour', 'Line 3. *About eleven cartons.* The eleven was agreed in writing, in your letter of 20 February.'],
  ['Mr Hamdan', '⚠ **Then that is a mistake.** **Our office puts *about* in front of every quantity, as a style rule.** ⚠ **Nobody told me the figure was agreed.**'],
  ['Nour', '⚠ **Line 5. You have put *as set out in correspondence* where we had eleven words quoted from our letter of 28 January.**'],
  ['Mr Hamdan', '⚠ **Also a mistake. I shortened a long sentence and I did not see the quotation marks.** **Put them back.**'],
  ['Nour', 'Line 8. *Without prejudice*, deleted from the heading.'],
  ['Mr Hamdan', '⚠ **That one I did deliberately.** ⚠ **My board does not know what it means and I did not want to explain two words in a meeting.** **But I know what it does, so put it back.**'],
  ['Nour', '⚠ **And line 11, the clause about what the Company has been able to establish. It was agreed clause by clause with Mr Sayegh in March, by telephone.**'],
  ['Mr Hamdan', '⚠ **I deleted it because I thought it was nine words of fog.** ⚠ **If it was agreed then it is a term, and the fault is mine for not having the March note.** ⚠ **Put the four on a separate sheet with the dates on them, and I will put that sheet in the file** — **so that the next person to edit this does not do what I have just done.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**9.1** sort a change by whether it alters the obligation or only the rhythm',
  '**9.2** correct a spelling in silence and flag a date, a figure and a name',
  '**9.3** write a mark-up in two parts, and annotate rather than rewrite twice in a row',
  '**9.4** recognise the four kinds of closed line, and protect one in six words',
  '**9.5** reinstate a date, a search and a comparison, and let the fourth cut go',
  '**9.6** find a join by ear, and mark the clause that cannot be rewritten',
  '**9.7** read the closed lines to their author, and write the sheet that goes in his file',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 10 — **The Meeting You Did Not Call**: four people, three agendas, and the minute that decides what happened._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
module.exports = out;
