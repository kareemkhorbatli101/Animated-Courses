// Proactive Business English B1 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'the minute book · the chair · those present · matters arising · agreed action · owner of an action · by when · verbatim · paraphrase · attributed · unattributed · on the record · off the record · for information · for decision · noted · agreed · deferred · carried · tabled · circulate · amend the minutes · a note of a call · at the time of the call · afterwards in the record · as reported to me · in those words · my own words · the substance of what was said · a faithful note';
const BACK_AT_B1 = 'repeat · update · diary';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 10  Reporting What Was Said'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  report a statement, with the tense moved back',
  '**10.2**  report a question in the order it was asked',
  '**10.3**  report an instruction you have to carry out',
  '**10.4**  choose between *said*, *explained*, *admitted* and *pointed out*',
  '**10.5**  report what was said without reporting what you think was meant',
  '**10.6**  write minutes in the house format',
  '**10.7**  Review & Mediate: telling the person who was not in the room',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Four verbs, four different claims about a person', [
  '*She **said** the order was placed. She **explained** that the order was placed. She **admitted** that the order was placed. She **pointed out** that the order was placed.* Those four sentences report the same words and make four different claims about the speaker — and three of them are claims the speaker never made.',
  '⚠ **10.4 is the cycle that matters most in this unit**, and it is the one that will be hardest to believe. *Admitted* turns a statement into a confession; *explained* implies the hearer had been confused; *pointed out* says the speaker was right and somebody else was not. **A minute that uses these words is a minute that takes sides while appearing to record.**',
  '**And the discipline in 10.5 is what makes the rest safe.** Report what was said. If you must report what you think was meant, say that you are doing it, in its own sentence — ⚠ *what I understood by that was…* — so that a reader can accept the first and reject the second.',
], C.lyellow, C.orange));

// ======================= CYCLE 10.1 =======================
out.push(pb());
out.push(h2('10.1  She said she had already sent it'));
out.push(p('**Function:** reporting a statement   ·   **Grammar:** reported speech, with backshift   ·   **Pronunciation:** the reported clause said without the speaker\'s emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell your partner something somebody told you yesterday. Then write it down as you said it.'));
out.push(p('**b**  Which is right? _She said she has sent it. · She said she had sent it. · She said she sent it yesterday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with Nour\'s note?   **A** the tense   **B** it reports two things as though they were said at the same time   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What does Nadia say about the word *already*? **2** What does she say a reported note must carry that this one does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  "When did she say it?"', [
  ['Nadia', 'Your note says Ms Shamsi said she had already sent the September invoice.'],
  ['Nour', 'She did.'],
  ['Nadia', 'When?'],
  ['Nour', 'On the telephone. Tuesday.'],
  ['Nadia', 'And when did she say she had sent it?'],
  ['Nour', '…She did not say. She said she had already sent it, and I assumed she meant before Tuesday.'],
  ['Nadia', 'Which is what *already* does — it moves the sending to before the saying, and you do not actually know that. She may have meant *already* as in *I have put it in the post this morning*.'],
  ['Nour', 'So I write *she said she had sent it* and leave *already* out.'],
  ['Nadia', 'Better. And put the date of the call in the note, because *had sent* only means anything if the reader knows when the saying happened. ⚠ **A reported statement without the date of the reporting is a tense with nothing to measure from.**'],
  ['Nour', 'It was Tuesday the 25th, at about ten.'],
  ['Nadia', 'Then write that, and then write what you did about it, because the note will be read by somebody deciding whether to telephone her again.'],
  ['Nour', 'I checked the post book and there is nothing from her since the 11th.'],
  ['Nadia', '⚠ Then that is the note. *On 25 November Ms Shamsi said she had sent the September invoice. The post book shows nothing from her since 11 November.* **Two sentences, one of them hers and one of them ours, and the reader can see which is which.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reported speech — and the date it is measured from**',
  table(['Direct', 'Reported'], [
    ['*I have sent it.*', 'She said she **had sent** it.'],
    ['*I sent it on Monday.*', 'She said she **had sent** it on Monday.'],
    ['*I will send it.*', 'She said she **would send** it.'],
    ['*I am sending it.*', 'She said she **was sending** it.'],
    ['*I can send it.*', 'She said she **could send** it.'],
  ], [2.4, 3]),
  '⚠ **Put the date of the call in the note.** *Had sent* is measured from the moment of speaking, so without that date the tense has nothing to measure from and the reader cannot place anything.',
  '⚠ **Leave out words that move the time if you do not know what they meant.** *Already* puts the sending before the saying — and the speaker may have meant *this morning*. ⚠ A single adverb can make a reported statement say something nobody said.',
  '⚠ **Keep your own findings in a separate sentence.** *She said she had sent it. The post book shows nothing since the 11th.* **One sentence hers, one ours, and the reader can see which is which.**',
  '⚠ **Backshift one step and no more.** *I have sent* → *had sent*. *I sent* → *had sent*. ⚠ There is nowhere further back to go, so two different originals arrive at the same reported form — which is a real loss and is why the date matters.',
  '**Practise:** Report each with a date and keep your own finding separate. 1 *I have sent it.* 2 *I will pay on Thursday.* 3 *I am waiting for your order.* 4 *I can hold the price.* 5 *I never received it.*',
  '**Useful phrases:**  On … she said that…  ·  She said she had…  ·  She said she would…  ·  The post book shows…  ·  I am not certain what she meant by…',
  '**Pronunciation – the reported clause, flattened.** 🔊 **Track 10.2** Listen: _she said she had sent it_. ⚠ The reported half is said **without** the original speaker\'s emphasis — a reported clause delivered with feeling is an impersonation, and in a note it reads as editorial. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a call; B asks when and finds the word that moved the time. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your note says __________ said __________.'],
  ['A', 'She did.'],
  ['B', 'When?'],
  ['A', '__________.'],
  ['B', 'And when did she say she had __________?'],
  ['A', '…She did not say. I assumed __________.'],
  ['B', 'Which is what *__________* does. ⚠ Leave it out and put the date of the call in.'],
  ['A', 'And then what I did about it.'],
  ['B', 'Then that is the note. ⚠ One sentence hers, one ours.'],
]));
out.push(table(['Role card 1 — the haulier', 'Role card 2 — the customer'], [[
  'Mr Jaber said he had *just* collected the Aleppo load. *Just* puts it minutes before the call, which A does not know — he may have meant that day. A\'s own finding: the gate sheet shows no collection that day at all.',
  'Mr Haffar said he had *never* received the credit note. *Never* is his word and should be reported as his: *he said he had never received it*. ⚠ A\'s own finding is separate — the credit book shows it issued on the 22nd and posted on the 23rd.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two-sentence note — one sentence theirs, one yours. ⚠ Then write the adverb that was left out and what it would have claimed.'));
out.push(PHRASE_CARD(['On … she said that…', 'She said she had…', 'She said she would…', 'The post book shows…', 'I am not certain what she meant by…', 'the date of the call']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you were told this month. Write each as a two-sentence note with the date.'));
out.push(table(['Date and who', 'What they said (reported)', 'What I found (separate)'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2.3, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _On _______, _______ said that _______. _______ shows _______._'));
out.push(p('**Listener task:** count the notes that put the speaker\'s claim and the writer\'s finding in one sentence. ⚠ Each of those has a conclusion built into it that nobody will be able to separate later.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _she said she has sent it_ and _she said me that she had sent it_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note of a call, and answer the questions.'));
out.push(box(null, [
  '**NOTE OF A TELEPHONE CALL. D. Shamsi to N. Mansour. Tuesday 25 November, about 10.00. Written at 10.20.**',
  '**What she said.** She said she had sent the September invoice. She said she had not been paid for September or October. She said the Aleppo price would hold until the end of December and that she would put that in writing. She said she had changed the wrap batch numbering in September and that 8814 was the first of the new series. ⚠ **She did not say when she had sent the September invoice and I did not ask.**',
  '**What she asked.** Whether we wanted the December delivery on the Thursday. Whether the two torn rolls had been replaced from stock or were still outstanding.',
  '**What I said.** That I would look at the September invoice today. That the two rolls were replaced from stock on the 20th. That Thursday suited us better than Wednesday and that I would confirm in writing.',
  '**What I have found since, which is ours and not hers.** The post book shows nothing received from her since 11 November. The purchase ledger shows the September invoice entered on 2 October, so **we have it** — and it is on neither October payment run, with a pencil mark against it that I think is Nadia\'s.',
  '⚠ **One thing I am recording because I may be wrong about it.** I took *she had sent it* to mean before the call. **It is equally possible she meant that morning**, in which case the post book proves nothing and the invoice is in the post now. I have not telephoned back to ask, because the ledger entry makes the question academic — we have the invoice either way — ⚠ **but if this note is read in six months the distinction may matter and I would rather it were on the page than in my memory.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What four headings does the note use, and why is the fourth separate?'));
out.push(item('2', 'What does the writer record that she did not do?'));
out.push(item('3', 'What may the writer be wrong about, and why is it recorded anyway?'));
out.push(box('Writer\'s box', [
  '**A note of a call — four headings, always in this order:** **what she said** · **what she asked** · **what I said** · ⚠ **what I have found since, which is ours and not hers.** Then one paragraph: ⚠ **what I may be wrong about.**',
  '**Head it with who, to whom, when, and when it was written.** *Written at 10.20* matters: a note written at 10.20 about a call at 10.00 is a different document from one written on Friday.',
  '**Record what you did not ask.** *She did not say when she had sent it and I did not ask.* ⚠ A gap you name is a gap; a gap you leave out becomes, to a later reader, a thing she did not mention.',
  '⚠ **Keep your own findings under their own heading and label them.** *What I have found since, which is ours and not hers.*',
  '⚠ **Record the ambiguity you may be wrong about, even when it does not matter today.** *If this note is read in six months the distinction may matter and I would rather it were on the page than in my memory.* ⚠ That is the sentence that makes a note of a call worth keeping.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note of a real call (**50 words or more**). Use the frame.'));
out.push(p('**NOTE OF A TELEPHONE CALL. ______________ to ______________. ______________. Written at ______________.**   **What they said.** They said they had ______________. They said they would ______________. ⚠ They did not say ______________ and I did not ask.   **What they asked.** Whether ______________. Whether ______________.   **What I said.** That I would ______________. That ______________.   **What I have found since, which is ours and not theirs.** ______________ shows ______________.   ⚠ **One thing I may be wrong about.** I took ______________ to mean ______________. **It is equally possible ______________**, and I would rather that were on the page than in my memory.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says keep your own findings under their own heading. Your third paragraph has what they said and what you discovered in the same sentence — which half is theirs?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a reader in six months tell their words from yours?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who, to whom, when, and when written', ''],
  ['The four headings, in order', ''],
  ['Something they did not say and you did not ask', ''],
  ['One thing you may be wrong about', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what I may be wrong about*. The class says which would matter in six months.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time what you reported somebody as saying turned out to be wrong (**100 to 140 words**). Say what they actually said, what you wrote, and where the difference came from.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _where the difference came from_   ✓ _backshift correct, and the date of the saying given?_   ? _was it a word they used or a word you added?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the difference one word? ⚠ Usually all three — and usually an adverb: *already*, *just*, *never*, *only*.'));
out.push(box('Homework', ['Write your final text. Then write a note of your next telephone call under the four headings, with the date of the call and of the writing (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.2 =======================
out.push(pb());
out.push(h2('10.2  What the auditor asked, in order'));
out.push(p('**Function:** reporting questions   ·   **Grammar:** *asked whether · asked what · asked me to*   ·   **Pronunciation:** a reported question said as a statement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody asked you four questions yesterday. Can you remember them in order?'));
out.push(p('**b**  Which is right? _He asked me what did I do. · He asked me what I did. · He asked that what I did._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Mr Ayoub want the auditor\'s questions in order?   **A** to answer them   **B** because the order shows what the auditor was working towards   **C** to count them'));
out.push(p('**b**  Listen again. **1** What does the order of the questions reveal? **2** What does Nour say about the question she could not answer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  "In the order he asked them"', [
  ['Mr Ayoub', 'What did Attar ask you on Thursday? In the order he asked them, if you can.'],
  ['Nour', 'First he asked whether the gate count was against the order or the picking list. Then he asked who signed the gate sheet. Then he asked whether the signature went on before or after the count. Then he asked what happened to a difference once it was recorded. And then he asked whether the invoice was raised from the order or the gate sheet.'],
  ['Mr Ayoub', 'Say that again and listen to it.'],
  ['Nour', '…He was walking towards the last one.'],
  ['Mr Ayoub', 'From the first question. Every one of the five is a step towards *what happens to a difference*, and the answer is that nothing does.'],
  ['Nour', 'He never said that was what he was looking for.'],
  ['Mr Ayoub', 'He never says. ⚠ **The order of somebody\'s questions tells you what they already suspect, and it is the only part of an interview that nobody thinks to write down.**'],
  ['Nour', 'There was a sixth. He asked how many differences had been recorded this year, and I did not know.'],
  ['Mr Ayoub', 'What did you say?'],
  ['Nour', 'That I did not know and that I would count them and tell him. ⚠ And I wrote the question down in front of him, which I think was the right thing to do.'],
  ['Mr Ayoub', 'It was, and for a reason that is not about politeness: **the question you cannot answer is the one you will forget by Monday**, and it is also the one he will come back to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reporting questions — and why the order matters**',
  table(['Direct', 'Reported'], [
    ['*Is the count against the order?*', 'He asked **whether** the count was against the order.'],
    ['*Who signs the sheet?*', 'He asked **who** signed the sheet.'],
    ['*What happens to a difference?*', 'He asked **what** happened to a difference.'],
    ['*Count them for me.*', 'He asked me **to count** them.'],
    ['*Don\'t change the sheet.*', 'He asked me **not to change** the sheet.'],
  ], [2.3, 3.1]),
  '⚠ **A reported question has statement word order.** *He asked what I did*, not ~~what did I do~~. ⚠ This is the single commonest error in the cycle and it survives a long time, because the direct form is what the ear remembers.',
  '⚠ **Record the questions in the order they were asked.** ⚠ **The order tells you what the asker already suspects**, and it is the only part of an interview nobody writes down. Five questions walking towards *what happens to a difference* is a finding before anybody answers anything.',
  '⚠ **Write down the question you cannot answer, in front of the person who asked it.** Not for politeness: **it is the one you will forget by Monday and the one they will come back to.**',
  '⚠ *Asked whether* for a yes-or-no question; *asked what/who/when* for the others; ⚠ **no *that*** after *asked* in either case.',
  '**Practise:** Report each, then say what the order of the five suggests. 1 *Is the count against the order?* 2 *Who signs it?* 3 *Before or after the count?* 4 *What happens to a difference?* 5 *Is the invoice from the order or the sheet?*',
  '**Useful phrases:**  He asked whether…  ·  He asked what/who/when…  ·  He asked me to…  ·  He asked me not to…  ·  I said I did not know and would find out.',
  '**Pronunciation – a reported question is a statement.** 🔊 **Track 10.4** Listen: _he asked **what** I did_ — level, falling at the end, no question tune at all. ⚠ A reported question spoken with a rise is heard as a real question and gets answered. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports five questions in order; B works out what the asker was after. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'What did __________ ask? In the order, if you can.'],
  ['A', 'First he asked whether __________. Then he asked who __________. Then he asked whether __________. Then he asked what __________. And then he asked whether __________.'],
  ['B', 'Say that again and listen to it.'],
  ['A', '…He was walking towards __________.'],
  ['B', 'From the first question. ⚠ And did he say so?'],
  ['A', 'No. There was a sixth I could not answer: __________.'],
  ['B', 'What did you say?'],
  ['A', 'That I did not know and would find out. ⚠ And I wrote it down in front of him.'],
]));
out.push(table(['Role card 1 — the bank', 'Role card 2 — a customer'], [[
  'Five questions from the bank: who signs cheques; what the limit is; who sets the limit; when it was last reviewed; whether anybody has signed above it. ⚠ They are walking towards the two-signature rule at 500,000 and the breach in September.',
  'Five questions from a new customer: how long you have traded; whether you hold stock; what your lead time is; whether you have ever missed a promised day; what you did about it. ⚠ He is walking towards the last one, and it is the only one that tells him anything.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the reporting for the class – **without the book**.'));
out.push(p('**Listener task:** write the five questions in order and then the one sentence saying what they were walking towards. ⚠ Then write the question nobody could answer.'));
out.push(PHRASE_CARD(['He asked whether…', 'He asked what/who…', 'He asked me to…', 'He asked me not to…', 'I did not know and will find out.', 'in the order he asked them']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a real conversation in which you were asked several questions. Write **five** in order, then what the asker was after.'));
out.push(table(['In order, as reported', 'What I answered'], [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']], [3, 2.5]));
out.push(p('**What the order suggests they already suspected:** ______________________'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class the five questions in order, then what they were walking towards.'));
out.push(p('**Listener task:** in how many cases did the asker say what they were after? ⚠ Almost none — and in almost all of them the order made it clear.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he asked me what did I do_ and _he asked that whether the count was correct_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the record of the interview, and answer the questions.'));
out.push(box(null, [
  '**RECORD OF AN INTERVIEW. Z. Attar with N. Mansour. Thursday 27 November, 2.10 to 2.55, in the office. Written the same afternoon.**',
  '**The questions, in the order he asked them.** **1** He asked whether the gate count was made against the order or the picking list. **2** He asked who signed the gate sheet. **3** He asked whether the signature went on before or after the count. **4** He asked what happened to a difference once it had been written on the sheet. **5** He asked whether the invoice was raised from the order or from the gate sheet. **6** He asked how many differences had been recorded this year. **7** He asked whether anybody had ever been told that a difference had not reached an invoice.',
  '**What I answered.** 1 The order. 2 Whoever counted, by name. 3 After — it must not be signed before. 4 It is seen by the coordinator before release. 5 From the order. 6 ⚠ **I did not know.** 7 ⚠ **I did not know, and I said that if it had happened I would expect to have been the person told.**',
  '⚠ **What the order of the questions tells us, which he did not say.** All seven walk towards the gap at question five, and questions six and seven are about **how long it has been there and whether anybody noticed**. He had the gap before he asked question one; questions one to four were him checking that the rest of the procedure was sound enough for the gap to matter.',
  '**What I undertook to do.** Count the recorded differences for the year and send him the figure. I wrote both questions down in front of him and read them back.',
  '⚠ **And one thing about question seven.** I answered that I would expect to have been told. **I do not actually know that** — I would expect it, and the procedure does not say it, and there is no line anywhere that makes me the person told. ⚠ I have recorded my answer as I gave it and this correction beneath it, because the answer was more confident than the facts.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the order of the questions reveal about what the auditor already knew?'));
out.push(item('2', 'Which two questions could the writer not answer, and what did she do?'));
out.push(item('3', 'What correction does the writer add to her own answer, and why?'));
out.push(box('Writer\'s box', [
  '**A record of an interview — five parts:** who, with whom, when, how long, where, and when written → **the questions numbered in the order asked** → **what you answered, numbered to match** → ⚠ **what the order tells you, which they did not say** → what you undertook to do.',
  '**Number the questions and the answers so they match.** A reader can then follow either column alone.',
  '⚠ **Write the paragraph about what the order reveals.** *He had the gap before he asked question one.* ⚠ It is the most valuable paragraph in the document and it is the one nobody writes, because it feels like speculation — it is not: the order is evidence, and you were there.',
  '**Record that you wrote down and read back what you could not answer.**',
  '⚠ **Correct your own over-confident answer in the record, underneath it.** *I have recorded my answer as I gave it and this correction beneath it, because the answer was more confident than the facts.* ⚠ Do not amend the answer — the record of what you said has its own value, and the correction is a second fact, not a replacement.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a record of an interview or a meeting at which you were questioned (**50 words or more**). Use the frame.'));
out.push(p('**RECORD OF ______________. ______________ with ______________. ______________, ______________ to ______________. Written ______________.**   **The questions, in the order asked.** **1** They asked whether ______________. **2** They asked who ______________. **3** They asked what ______________. **4** They asked whether ______________.   **What I answered.** 1 ______________. 2 ______________. 3 ______________. 4 ⚠ **I did not know.**   ⚠ **What the order tells us, which they did not say.** ______________. They had ______________ before they asked question one.   **What I undertook to do.** ______________. I wrote it down in front of them and read it back.   ⚠ **And one correction.** I answered ______________. I do not actually know that, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says write the paragraph about what the order reveals. Yours lists the questions and stops — what were they walking towards?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what did the asker already suspect?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Questions numbered in the order asked', ''],
  ['Answers numbered to match', ''],
  ['A paragraph on what the order reveals', ''],
  ['Any over-confident answer corrected beneath it, not replaced', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what the order tells us*. The class says which asker had made up their mind before the first question.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were asked a series of questions and only understood afterwards what they were for (**100 to 140 words**). Say what the questions were, when you realised, and what you would answer differently.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _when they realised_   ✓ _reported questions with statement word order?_   ? _which single question was the real one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the real question the last one? ⚠ Usually — and in the others it was the one the writer could not answer, which is the same thing from the other side.'));
out.push(box('Homework', ['Write your final text. Then write down the next five questions anybody asks you, in order, and work out what they were walking towards (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.3 =======================
out.push(pb());
out.push(h2('10.3  He told me to, and I have to'));
out.push(p('**Function:** reporting an instruction you must carry out   ·   **Grammar:** *told me to · asked me to · said I was to*   ·   **Pronunciation:** the difference between reporting and complaining'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name an instruction you were given and had to pass on. Did the person you passed it to know whose it was?'));
out.push(p('**b**  What is the difference? _You have to do it by Thursday. · Mr Ayoub has asked that it be done by Thursday, and I have told him it will be._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour passing on?   **A** an instruction to count the year\'s differences   **B** a complaint   **C** a price change'));
out.push(p('**b**  Listen again. **1** What three things does she tell Hala about the instruction? **2** What does she not do with it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  "He has asked for it by Monday"', [
  ['Nour', 'Hala — Mr Attar has asked for a count of every recorded difference this year, by Monday. That came from him and not from me, and I have told him Monday is possible.'],
  ['Hala', 'Every difference? That is going through the gate sheets.'],
  ['Nour', 'Every one. Eleven months of sheets.'],
  ['Hala', 'That is two days.'],
  ['Nour', 'It is about a day and a half and I have taken the Thursday counter off you to pay for it, and I have told Mr Ayoub that is where Thursday went.'],
  ['Hala', 'Did he ask for it by Monday or did you offer Monday?'],
  ['Nour', 'He asked how long it would take and I said Monday. ⚠ So the Monday is mine and the count is his, and you should know which part to argue with.'],
  ['Hala', 'Then I would argue with Monday and not with the count.'],
  ['Nour', 'Go on.'],
  ['Hala', 'If you want the number right, Monday is tight and I will be adding up tired. If you want a number by Monday I can give you one by Monday and tell you which months I rushed.'],
  ['Nour', 'Then take Tuesday and I will tell him Tuesday, and I will tell him why. ⚠ **He asked how long it would take; he did not say Monday, and I have been treating my own answer as his instruction for about an hour.**'],
  ['Hala', 'Most people would not have said that out loud.'],
  ['Nour', 'Most people would not have been asked which part to argue with.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Passing on an instruction — and separating whose is whose**',
  table(['Form', 'Example'], [
    ['**X has asked for / asked that…**', '**Mr Attar has asked for** a count of every difference.'],
    ['⚠ **and whose it is**', 'That came from him and not from me.'],
    ['⚠ **what you undertook**', 'I have told him Monday is possible.'],
    ['⚠ **what you paid for it**', 'I have taken the Thursday counter off you.'],
    ['**told me to / said I was to**', 'He **told me to** stop the load. He **said I was to** sign it myself.'],
  ], [2.2, 3.1]),
  '⚠ **Say whose the instruction is and whose the deadline is.** *He asked how long it would take and I said Monday* — ⚠ **so the Monday is mine and the count is his, and the person doing the work should know which part to argue with.**',
  '⚠ **Say what you have paid for it.** *I have taken the Thursday counter off you.* An instruction passed on with no resource attached is an instruction the other person has to fund out of their own week.',
  '⚠ **Say what you have undertaken on their behalf.** It is the part they are entitled to object to, and the only part you can go back on.',
  '⚠ **_Told me to_ is stronger than _asked me to_** and should be used only when it was an instruction; ⚠ *said I was to* is the most formal and is right for a written instruction you are quoting.',
  '**Practise:** Pass each on, naming whose it is, what you undertook and what you paid. 1 a count by Monday 2 a stocktake 3 a price change 4 a new signature rule 5 a report',
  '**Useful phrases:**  … has asked for…  ·  that came from … and not from me  ·  I have told him…  ·  I have taken … off you to pay for it  ·  which part to argue with',
  '**Pronunciation – reporting, not complaining.** 🔊 **Track 10.6** Listen: _Mr Attar has asked for a count of every recorded difference_ — level, no sigh, no emphasis on *every*. ⚠ A stressed *every* turns a report into a complaint about the asker, and the person receiving it then has two problems. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A passes on an instruction; B asks which part is A\'s. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has asked for __________, by __________. That came from __________ and not from me, and I have told __________ that __________ is possible.'],
  ['B', '__________? That is __________.'],
  ['A', 'It is about __________ and I have taken __________ off you to pay for it.'],
  ['B', 'Did they ask for __________ or did you offer __________?'],
  ['A', 'They asked how long it would take and I said __________. ⚠ So the __________ is mine and the __________ is theirs.'],
  ['B', 'Then I would argue with __________ and not with __________.'],
]));
out.push(table(['Role card 1 — a stocktake', 'Role card 2 — a price change'], [[
  'Mr Ayoub has asked for a full stocktake. A has undertaken that it will be done over one weekend, which Mr Ayoub did not ask for. B should argue with the weekend and not with the stocktake, and point out that four rooms in two days means counting the fourth tired.',
  'Mr Ayoub has set a new price list from the 1st. A has undertaken to tell every trade customer personally before then, which is forty telephone calls nobody asked for. ⚠ B should ask whose idea the forty calls were.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write three things — whose the instruction is, whose the deadline is, and what was paid for it. ⚠ Then say which part the worker should argue with.'));
out.push(PHRASE_CARD(['… has asked for…', 'that came from him, not me', 'I have told him…', 'I have taken … off you', 'which part to argue with', 'the deadline is mine']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** instructions you have passed on or must pass on. Separate the parts.'));
out.push(table(['The instruction', 'Whose it is', 'What I undertook', 'What I paid for it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  ______ has asked for ______. The ______ is theirs and the ______ is mine. I have taken ______ off ______ to pay for it._'));
out.push(p('**Listener task:** count the instructions passed on with no resource attached. ⚠ Then ask whose week paid for each of them.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he told me that to count them_ and _he asked for that it be done_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**Hala — the count of recorded differences. 28 November.**',
  '**What has been asked for, and by whom.** Mr Attar has asked for a count of every difference recorded on a gate sheet between January and November, with the month and the value of each. **That is his and not mine.**',
  '**What I undertook, which is mine.** He asked how long it would take and **I** said Monday. He did not say Monday and he has not asked for Monday. ⚠ **So if the date is wrong, the mistake is mine and it is correctable** — I have since told him Tuesday and he said Tuesday was fine, which rather proves the point.',
  '**What I have taken off you to pay for it.** The Thursday counter, all day, and the Friday morning price list — Nadia is printing that. ⚠ **If a day and a half is not enough, tell me on Tuesday morning and not on Tuesday evening**, because on Tuesday morning I can take something else off you and on Tuesday evening I can only apologise to him.',
  '**What I would like you to do with the months you rush.** Mark them. A count with four months marked *rushed* is worth more than a count with no marks, because he will test two months at random, and if he tests a marked one he learns that you mark them.',
  '⚠ **And the part of this I got wrong, recorded so that you can hold me to it.** For about an hour I passed Monday on to you as though it were his. **It was mine.** The difference matters because you would have argued with him through me and lost, when the thing to argue with was a figure I had invented in a corridor.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which part of the task came from the auditor and which from the writer?'));
out.push(item('2', 'Why does the writer want to be told on Tuesday morning rather than Tuesday evening?'));
out.push(item('3', 'What does the writer record about her own mistake, and why?'));
out.push(box('Writer\'s box', [
  '**A note passing on an instruction — five parts:** **what has been asked for, and by whom** → ⚠ **what you undertook, which is yours** → **what you have taken off them to pay for it** → what you want them to do about the parts they rush → ⚠ **the part you got wrong.**',
  '**Separate the ask from the deadline in two headings.** *That is his and not mine.* / *He asked how long it would take and I said Monday.* ⚠ The worker can then argue with the right half, which is the whole point of the cycle.',
  '**Say when you need to be told, and why.** *On Tuesday morning I can take something else off you and on Tuesday evening I can only apologise to him.*',
  '⚠ **Ask for the rushed parts to be marked.** *A count with four months marked rushed is worth more than a count with no marks.* ⚠ It is counter-intuitive and it is true, and it is the only way a number arrives with its own reliability attached.',
  '⚠ **Record your own error and say why it matters.** *You would have argued with him through me and lost, when the thing to argue with was a figure I had invented in a corridor.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note passing on a real instruction (**50 words or more**). Use the frame.'));
out.push(p('**______________ — ______________.**   **What has been asked for, and by whom.** ______________ has asked for ______________. **That is theirs and not mine.**   **What I undertook, which is mine.** They asked ______________ and **I** said ______________. ⚠ So if ______________ is wrong, the mistake is mine.   **What I have taken off you to pay for it.** ______________. ⚠ If ______________ is not enough, tell me ______________ and not ______________, because ______________.   **What I would like you to do with the parts you rush.** Mark them. ______________.   ⚠ **And the part I got wrong.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what you have taken off them to pay for it. Yours passes on the work and gives nothing up — whose week is funding this?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the reader know which part to argue with?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose the instruction is, said plainly', ''],
  ['What the writer undertook, under its own heading', ''],
  ['What has been taken off the reader to pay for it', ''],
  ['A request to mark the rushed parts', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what I have taken off you*. The class says which notes passed on work with nothing attached.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an instruction that reached you with somebody else\'s deadline attached as though it were the asker\'s (**100 to 140 words**). Say what you were told, what you later learned, and what you would have argued with.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they later learned_   ✓ _told me to / asked for, with the owner named?_   ? _who would they have argued with, and would it have worked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the deadline turn out to belong to the person who passed it on? Usually two of three — and in none of them was it dishonesty, only a figure given in a corridor and then defended.'));
out.push(box('Homework', ['Write your final text. Then pass on one instruction with the ask and the deadline separated, and say what you have taken off the person to pay for it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.4 =======================
out.push(pb());
out.push(h2('10.4  Said, explained, admitted, pointed out'));
out.push(p('**Function:** choosing a reporting verb   ·   **Grammar:** reporting verbs and the claims they carry   ·   **Pronunciation:** the neutral verb said neutrally'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Report one thing a colleague said yesterday, using *said*. Now report it using *admitted*. What changed?'));
out.push(p('**b**  Which of these did the speaker claim? _She said the list was old. · She admitted the list was old. · She pointed out that the list was old._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala object to in the minutes?   **A** one word   **B** the order of the items   **C** the date'));
out.push(p('**b**  Listen again. **1** What does she say *admitted* did? **2** What does Nour say about the word she used instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  "I did not admit anything"', [
  ['Hala', 'The minutes say I admitted the counter list was out of date.'],
  ['Nour', 'You said it was out of date.'],
  ['Hala', 'I said it was dated the 5th and the band changed on the 8th. I said it in the first minute of the meeting, before anybody asked me anything.'],
  ['Nour', 'And *admitted* makes it sound like—'],
  ['Hala', 'Like somebody got it out of me. Which is the opposite of what happened, and in six months that is the only record there will be.'],
  ['Nour', 'What should it say?'],
  ['Hala', '*Said.* Or if you want to be accurate, *reported* — because I brought it to the meeting.'],
  ['Nour', 'Reported is better than said. ⚠ And you are right about the six months, which is the part I had not thought about: I chose *admitted* because it felt like a stronger word for a serious point, and the strength went onto you instead of onto the point.'],
  ['Hala', 'There is another one. It says Nadia *pointed out* that the invoice was raised from the order.'],
  ['Nour', 'She did.'],
  ['Hala', 'She said it. ⚠ *Pointed out* means she was right and somebody else had been wrong, and the somebody else is me two lines earlier, and neither of us said anything of the kind.'],
  ['Nour', 'So the minute has given her a victory and you a confession, in two lines, out of one conversation in which nobody disagreed with anybody.'],
  ['Hala', 'And it is signed by you and nobody will ever read the other version, because there is no other version.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four verbs, four claims — and the one that claims nothing**',
  table(['Verb', 'What it claims about the speaker', 'Use it when'], [
    ['**said**', '⚠ **nothing** — the neutral verb', 'always, unless you can justify another'],
    ['**reported**', 'they brought it, unprompted', 'they raised it themselves'],
    ['**explained**', 'the hearer had been confused', 'somebody had asked for clarification'],
    ['⚠ **admitted**', 'it was got out of them; it is against them', '⚠ almost never — and never in minutes'],
    ['⚠ **pointed out**', 'they were right and somebody was wrong', '⚠ only if somebody had actually been wrong'],
  ], [1.4, 2.6, 2]),
  '⚠ **_Said_ claims nothing, which is why it is the right verb almost always.** A minute full of *said* looks plain and is accurate; a minute of *admitted*, *explained* and *pointed out* looks well written and **takes sides while appearing to record**.',
  '⚠ **_Admitted_ turns a statement into a confession**, and it does so permanently: ⚠ *in six months that is the only record there will be*, and there is no other version.',
  '⚠ **_Pointed out_ awards a victory and implies a loser** — usually whoever is minuted two lines earlier. Use it only where somebody had actually been wrong, and then name them.',
  '⚠ **_Reported_ is the useful one nobody uses.** It says the speaker brought the thing themselves, which is often the most important fact about it and is lost entirely by *said*.',
  '⚠ **The test: would the speaker sign this sentence?** If not, you have reported your own view of them and called it a minute.',
  '**Practise:** Choose the verb and justify it. 1 somebody raises their own error unprompted 2 somebody answers a direct question 3 somebody repeats a fact after a misunderstanding 4 somebody corrects a colleague who was wrong 5 somebody states a figure',
  '**Useful phrases:**  said  ·  reported  ·  explained  ·  admitted  ·  pointed out  ·  Would they sign this sentence?',
  '**Pronunciation – the neutral verb, neutrally.** 🔊 **Track 10.8** Listen to one sentence read three times with *said*, *admitted* and *pointed out*. ⚠ Nothing else changes and the person described changes completely. Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a minute; B is minuted in it and objects to the verb. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'The minutes say I __________ that __________.'],
  ['A', 'You said it.'],
  ['B', 'I said __________. And I said it __________, before anybody asked me anything.'],
  ['A', 'And *__________* makes it sound like—'],
  ['B', 'Like __________. Which is the opposite of what happened, and in six months that is the only record there will be.'],
  ['A', 'What should it say?'],
  ['B', '*Said.* Or if you want to be accurate, *__________* — because __________.'],
]));
out.push(table(['Role card 1 — "explained"', 'Role card 2 — "pointed out"'], [[
  'The minute says Abu Yasser *explained* that the gate is unmanned after five. Nobody had been confused and nobody had asked; he said it. ⚠ *Explained* makes the meeting look as though it had misunderstood something simple, which is a claim about everybody else in the room.',
  'The minute says Nadia *pointed out* that the credit had already been raised. Nobody had said otherwise. ⚠ *Pointed out* invents a disagreement, and the only person it can have been with is whoever spoke before her.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the objection for the class – **without the book**.'));
out.push(p('**Listener task:** write the verb used, what it claimed, and the verb that should have been used. ⚠ Then ask who the implied loser was in each case.'));
out.push(PHRASE_CARD(['said', 'reported', 'explained', 'admitted', 'pointed out', 'Would they sign this sentence?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** sentences from real minutes or reports at your work. For each: the verb, what it claims, and whether the speaker would sign it.'));
out.push(table(['The sentence', 'The verb', 'What it claims', 'Would they sign it?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.9, 0.8, 1.6, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It says _______ _______ that _______. That claims _______, and they would / would not sign it._'));
out.push(p('**Listener task:** count the *admitted*s and *pointed out*s in the room. ⚠ Then ask who wrote each of those documents, and whether the people named have ever read them.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _she admitted about the list_ and _he pointed out that was the gate_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the amended minute, and answer the questions.'));
out.push(box(null, [
  '**AMENDMENT TO THE MINUTE OF 24 NOVEMBER, item 4. Circulated 28 November by N. Mansour.**',
  '**What the minute said.** *Hala Mourad admitted that the counter price list was out of date. Nadia Sayegh pointed out that the invoice had been raised from the order.*',
  '**What it now says.** *Hala Mourad reported that the counter price list was dated the 5th and that the trade band had changed on the 8th. Nadia Sayegh said that the invoice had been raised from the order.*',
  '**Why it is being amended, and by whom.** Both changes were asked for by Hala Mourad and both are right. **I wrote the original and the error was mine.**',
  '⚠ **What was wrong with _admitted_.** Mrs Mourad raised the matter herself in the first minute of the meeting, before any question was asked. *Admitted* says the opposite — that it was got out of her — and it says it permanently, because **in six months this will be the only record of that meeting that exists.** I chose the word because it felt stronger than *said* for a serious point, and the strength attached itself to her rather than to the point.',
  '⚠ **What was wrong with _pointed out_.** Nobody had said anything to the contrary. *Pointed out* implies a correction, which implies somebody corrected — and the only candidate is the person minuted two lines earlier, which is Mrs Mourad. **The minute awarded one colleague a victory and another a confession, out of a conversation in which nobody disagreed with anybody.**',
  '**What I am doing differently from now on.** Minutes will use **said** unless there is a reason on the page for another verb. ⚠ Where somebody raises something themselves I will write **reported**, because that is a fact worth recording and *said* loses it.',
  '⚠ **And one thing I am not doing.** I am not destroying the original. It is in the minute book with this amendment attached, because **a record of what a minute said and why it was changed is worth more than a clean page** — and because anybody who was at that meeting is entitled to see what I wrote about them.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was wrong with *admitted*, and what does the writer say about why she chose it?'));
out.push(item('2', 'Who was the implied loser in the *pointed out* sentence?'));
out.push(item('3', 'Why is the original not destroyed?'));
out.push(box('Writer\'s box', [
  '**An amendment to a minute — six parts:** **what it said** (quoted) → **what it now says** (quoted) → who asked and whose the error was → ⚠ **what was wrong with each word, separately** → the rule you are adopting → ⚠ **what you are not doing.**',
  '**Quote both versions in full.** An amendment that describes the change instead of showing it cannot be checked.',
  '**Own the error in one sentence.** *I wrote the original and the error was mine.*',
  '⚠ **Explain what the word claimed and that it claimed it permanently.** *In six months this will be the only record of that meeting that exists.* ⚠ That is the argument that makes a reporting verb a serious matter rather than a nicety.',
  '⚠ **Keep the original, attached.** *A record of what a minute said and why it was changed is worth more than a clean page* — and **anybody who was at that meeting is entitled to see what you wrote about them.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an amendment to a real minute or report (**50 words or more**). Use the frame.'));
out.push(p('**AMENDMENT TO ______________. Circulated ______________ by ______________.**   **What it said.** *______________.*   **What it now says.** *______________.*   **Why, and by whom.** Asked for by ______________. **I wrote the original and the error was mine.**   ⚠ **What was wrong with _______________.** ______________. It says ______________, and it says it permanently, because ______________.   **What I am doing differently.** ______________ unless ______________.   ⚠ **And one thing I am not doing.** I am not ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says quote both versions in full. Yours describes the change — what did the original actually say?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the person named sign the new sentence?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both versions quoted in full', ''],
  ['The error owned in one sentence', ''],
  ['What the word claimed, and that it claimed it permanently', ''],
  ['The original kept, attached, with the reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what was wrong with the word*. The class says which word had done the most damage.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence somebody wrote about you that you would not have signed (**100 to 140 words**). Say what it said, what you had actually said, and whether it was ever corrected.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they had actually said_   ✓ _the reporting verbs named and their claims identified?_   ? _who would have had to change it, and were they asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was it corrected? ⚠ Almost none — and in most the writer had not intended anything, which is the point: these words do their damage without anybody meaning them.'));
out.push(box('Homework', ['Write your final text. Then take one document you have written and check every reporting verb against the question: would they sign this sentence? (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.5 =======================
out.push(pb());
out.push(h2('10.5  What was said and what was meant'));
out.push(p('**Function:** reporting without editorialising   ·   **Grammar:** separating the report from the interpretation   ·   **Pronunciation:** the sentence break that separates them'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody said something to you this week that you believe meant something else. What was said, and what do you think was meant?'));
out.push(p('**b**  Which is a report? _He said he would see what he could do, which means no. · He said he would see what he could do. I understood that to mean no._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub object to in Nour\'s note?   **A** a sentence that reports an interpretation as a statement   **B** the length   **C** the date'));
out.push(p('**b**  Listen again. **1** What does he say about *which means*? **2** What does he say the interpretation should get?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  "He did not say no"', [
  ['Mr Ayoub', 'Your note says the bank said they would review it in April, which means no.'],
  ['Nour', 'It does mean no.'],
  ['Mr Ayoub', 'It probably does. What did he say?'],
  ['Nour', 'That they would review the facility in April.'],
  ['Mr Ayoub', 'And nothing else?'],
  ['Nour', 'He said the committee had not met and that he would put it on the April list.'],
  ['Mr Ayoub', 'So he said three things and your note contains one of them and your own conclusion joined to it by *which means*. ⚠ **The conclusion may be right and it is not a report**, and in April, when somebody reads this, they will not be able to tell what he said from what you thought.'],
  ['Nour', 'So: he said the committee had not met, that he would put it on the April list, and that they would review it in April.'],
  ['Mr Ayoub', 'And then?'],
  ['Nour', 'And then a separate sentence. *I understood that to mean the application has not been refused but will not be considered before April.*'],
  ['Mr Ayoub', 'Which is a better interpretation than *no*, and you only got to it by separating them. ⚠ **The interpretation gets its own sentence, in your own name, and then it can be argued with** — and it may be wrong, because *the committee has not met* is also what somebody says when a thing is going through.'],
  ['Nour', 'I had decided it was a no before I wrote the note.'],
  ['Mr Ayoub', 'Everybody has. ⚠ **The discipline is not to stop deciding; it is to keep the decision in a sentence of its own, so that the next person can disagree with the decision without having to doubt the report.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Separating the report from the interpretation**',
  table(['Do this', 'Not this'], [
    ['He said that they would review it in April.', '~~which means no~~'],
    ['**I understood that to mean…**', '~~he was effectively refusing~~'],
    ['**My reading of that is…**', '~~he made it clear that…~~'],
    ['**I may be wrong about this.**', '~~obviously he meant…~~'],
    ['⚠ a separate sentence, in your own name', '⚠ a clause joined to the report'],
  ], [2.6, 2.6]),
  '⚠ **The interpretation gets its own sentence and your own name.** *I understood that to mean…* ⚠ Then a reader can accept the report and reject the reading, which is exactly what you want them to be able to do.',
  '⚠ **_Which means_ and _effectively_ and _made it clear_ are all the same move:** they attach your conclusion to their words so that the two cannot be separated later.',
  '⚠ **Report everything they said, not only the part that supports the reading.** Three things were said and the note contained one — ⚠ and the full three produced a **better** interpretation than the single one did.',
  '⚠ **The discipline is not to stop interpreting.** Everybody has decided before they write. It is to keep the decision in a sentence of its own, **so that the next person can disagree with the decision without having to doubt the report.**',
  '**Practise:** Report what was said, then interpret in a separate sentence in your own name. 1 *We will review it in April.* 2 *I will see what I can do.* 3 *Nobody has complained.* 4 *That is not normally something we do.* 5 *Leave it with me.*',
  '**Useful phrases:**  He said that…  ·  I understood that to mean…  ·  My reading of that is…  ·  I may be wrong about this.  ·  He did not say…',
  '**Pronunciation – the break that separates them.** 🔊 **Track 10.10** Listen: _he said they would review it in April_ // _I understood that to mean it will not be considered before then_. ⚠ A full stop and a new beginning, not a comma. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports with the interpretation attached; B separates them and finds the missing parts. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your note says __________ said __________, which means __________.'],
  ['A', 'It does mean __________.'],
  ['B', 'It probably does. What did they say?'],
  ['A', 'That __________.'],
  ['B', 'And nothing else?'],
  ['A', 'They said __________ and that __________.'],
  ['B', 'So they said three things and your note has one of them and your conclusion joined to it. ⚠ What is the report, and what is your reading?'],
  ['A', 'Report: __________. And separately: *I understood that to mean __________.*'],
]));
out.push(table(['Role card 1 — "leave it with me"', 'Role card 2 — "nobody has complained"'], [[
  'A supplier said *leave it with me* about a replacement. A\'s note says it means she will send one. ⚠ She also said she was away until Thursday and that the warehouse was being counted — which together suggest nothing will happen before Friday, a better reading than A\'s.',
  'A customer said *nobody has complained* about a product. A\'s note says it means it is fine. ⚠ He also said he had sold only four and that two were to his brother — so the reading should be that nothing is known either way.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the separation for the class – **without the book**.'));
out.push(p('**Listener task:** write the report and the interpretation as two sentences. ⚠ Then say whether the fuller report produced a better reading — it usually does.'));
out.push(PHRASE_CARD(['He said that…', 'I understood that to mean…', 'My reading of that is…', 'I may be wrong.', 'He did not say…', 'not "which means"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you were told and have interpreted. Separate each into a report and a reading.'));
out.push(table(['What was actually said, in full', 'My reading, in my own name'], [['', ''], ['', ''], ['', ''], ['', '']], [3, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _They said _______, _______ and _______. I understood that to mean _______, and I may be wrong because _______._'));
out.push(p('**Listener task:** count how many readings changed once the full report was given. ⚠ About half, and that is the argument for the discipline.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he said he would review it which means no_ and _I understood that it means no_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**NOTE OF A CALL TO THE BANK. N. Mansour to Mr Samir Haddad. 28 November, 11.40. Written at 11.55.**',
  '**What he said, in the order he said it.** That he had received our letter of the 24th. That the credit committee had not met in November. That he would put the facility on the list for the April meeting. That the quarterly figures we had sent were *the right figures to send*. That he could not say anything about the outcome and would not be drawn on it.',
  '**What he asked.** Whether the second site was trading every week. Whether the 14.2 million included the second site for the whole quarter or part of it. Whether we had any other borrowing.',
  '**What I said.** That the second site had traded every week since 8 June. That the 14.2 included it from 8 June and so covered about three weeks of the quarter at two sites and the rest at one. That we have no other borrowing.',
  '⚠ **My reading, which is mine and not his.** I understood the call to mean that the application has **not** been refused and will not be considered before April, and that the April comparison will be against a quarter that already includes the second site. **He did not say either of those things.**',
  '⚠ **Why I may be wrong about the first part.** *The committee has not met* is also what somebody says when a thing is going through and there is nothing to report. ⚠ **I have read it as a delay because I expected a delay**, and that is a reason to doubt my reading rather than a reason to trust it.',
  '**And one thing that is a fact and not a reading.** He asked whether the 14.2 included the second site for the whole quarter. ⚠ **He would not have asked that unless somebody is going to compare it with something**, and the only thing to compare it with is the same quarter next year. That is in the questions, not in my interpretation.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What five things did the bank manager say?'));
out.push(item('2', 'What does the writer say about why her reading may be wrong?'));
out.push(item('3', 'What does the writer treat as a fact rather than a reading, and why?'));
out.push(box('Writer\'s box', [
  '**A note of a call with a reading — five parts:** **what he said, in order** → **what he asked** → **what I said** → ⚠ **my reading, which is mine and not his** → ⚠ **why I may be wrong.**',
  '**Report everything, including the part that does not fit your reading.** *He said the figures were the right figures to send* does not support a refusal, and leaving it out would have been the easiest thing on the page.',
  '⚠ **Say _he did not say either of those things_ about your own reading.** One clause, and it does the work of a whole disclaimer.',
  '⚠ **Name the bias, not just the uncertainty.** *I have read it as a delay because I expected a delay, and that is a reason to doubt my reading rather than a reason to trust it.* ⚠ Naming the direction of your own expectation is the strongest thing a reader can be given.',
  '⚠ **Distinguish an inference from the questions from an inference about intent.** *He would not have asked that unless somebody is going to compare it with something* is about the question he asked, which is a fact — ⚠ and that is 10.2 paying off inside 10.5.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note of a call with a reading kept separate (**50 words or more**). Use the frame.'));
out.push(p('**NOTE OF A CALL. ______________ to ______________. ______________. Written at ______________.**   **What they said, in order.** That ______________. That ______________. That ______________. That ______________.   **What they asked.** Whether ______________. Whether ______________.   **What I said.** That ______________. That ______________.   ⚠ **My reading, which is mine and not theirs.** I understood the call to mean ______________. **They did not say that.**   ⚠ **Why I may be wrong.** ______________ is also what somebody says when ______________. I have read it as ______________ because I expected ______________.   **And one thing that is a fact and not a reading.** They asked ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name the bias and not just the uncertainty. Yours says you may be wrong — in which direction were you expecting to be?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **can a reader reject the reading and keep the report?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Everything said, including what does not fit the reading', ''],
  ['The reading in its own paragraph, in the writer\'s name', ''],
  ['*They did not say that*', ''],
  ['The direction of the writer\'s own expectation, named', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *why I may be wrong*. The class says which writer has named a real bias rather than a polite doubt.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time an interpretation was reported as a fact and acted on (**100 to 140 words**). Say what was said, what it was reported as, what was done, and whether the original words were ever recovered.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was actually said_   ✓ _report and reading in separate sentences?_   ? _could the original words still be recovered now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many can the original words still be recovered? Usually none — because the only record is the note, and the note contains the reading.'));
out.push(box('Homework', ['Write your final text. Then take a note you have written and split one sentence into a report and a reading, with the bias named (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.6 =======================
out.push(pb());
out.push(h2('10.6  The Monday meeting, in one page'));
out.push(p('**Function:** writing minutes   ·   **Grammar:** the house format; *agreed · noted · deferred*   ·   **Pronunciation:** an action point read back to the room'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a meeting at your work. What was decided, and where is it written?'));
out.push(p('**b**  Which is a minute? _We discussed the price list. · Agreed: one price list, printed Fridays, dated and initialled. Owner: Nadia. By: 5 December._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say is missing from the minutes?   **A** the discussion   **B** owners and dates on three of the four actions   **C** the apologies'));
out.push(p('**b**  Listen again. **1** What does he say about minuting the discussion? **2** What is his rule for an action with no owner?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  "Who, and by when?"', [
  ['Mr Ayoub', 'Four actions. One has a name and a date on it. What about the other three?'],
  ['Nour', 'They were agreed by everybody.'],
  ['Mr Ayoub', 'Then they were agreed by nobody. Who is counting the differences?'],
  ['Nour', 'Hala.'],
  ['Mr Ayoub', 'By when?'],
  ['Nour', 'Tuesday.'],
  ['Mr Ayoub', 'Then write Hala and Tuesday. ⚠ **An action without an owner is a wish and an action without a date is a wish with a plan.**'],
  ['Nour', 'And there is a page and a half of discussion.'],
  ['Mr Ayoub', 'Cut it. Who said what in a meeting matters when somebody has to be able to ask a question afterwards, and the question is always *why did we decide that* — so keep one line of **reason** against each decision and throw the rest away.'],
  ['Nour', 'Even the disagreement? Nadia and Abu Yasser did not agree about the Friday printing.'],
  ['Mr Ayoub', '⚠ That you keep, and you keep it with both names on it. **A decision that was unanimous and a decision that was taken over an objection are different decisions, and in six months the second one needs to be visible — because if it goes wrong, the person who objected was right and should be asked next time.**'],
  ['Nour', 'Most minutes I have seen record everything as agreed.'],
  ['Mr Ayoub', 'Most minutes are written to make the meeting look calm. ⚠ **A minute that records an objection is a minute somebody can learn from, and the only cost is that it does not read as smoothly.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Minutes — the house format**',
  table(['Element', 'Example'], [
    ['**Noted:**', '**Noted:** the fourth store room has not been entered since August.'],
    ['**Agreed:** + the decision', '**Agreed:** one price list, printed Fridays, dated and initialled.'],
    ['⚠ **Owner:** + a name', '**Owner:** Nadia.'],
    ['⚠ **By:** + a date', '**By:** 5 December.'],
    ['**Reason:** one line', '**Reason:** two undated lists were in use and a credit of 46,000 was paid.'],
    ['⚠ **Objection:** + the name', '⚠ **Objection:** Abu Yasser — Friday is the day the wrap arrives.'],
  ], [1.7, 3.6]),
  '⚠ **An action without an owner is a wish; an action without a date is a wish with a plan.** *Agreed by everybody* means agreed by nobody.',
  '⚠ **Cut the discussion and keep one line of reason.** The question anybody asks afterwards is *why did we decide that*, and one line answers it. The rest of who-said-what can go.',
  '⚠ **Keep the objection, with the name.** ⚠ **A unanimous decision and a decision taken over an objection are different decisions**, and if the second goes wrong the person who objected was right and should be asked next time. ⚠ Most minutes record everything as agreed, which is how that information is lost.',
  '⚠ **_Noted_, _agreed_ and _deferred_ do different jobs.** *Noted* records a fact with no action; *agreed* records a decision; *deferred* records that a decision was not taken, and should carry **when it will be**.',
  '**Practise:** Minute each in the house format, with an owner, a date, a reason — and an objection if there was one. 1 one price list 2 the difference count 3 the fourth store room 4 the van 5 the Ghouta day',
  '**Useful phrases:**  Noted:  ·  Agreed:  ·  Deferred to…:  ·  Owner:  ·  By:  ·  Reason:  ·  Objection: … —',
  '**Pronunciation – an action read back to the room.** 🔊 **Track 10.12** Listen: _agreed — one price list, printed Fridays, dated and initialled. **Nadia. Fifth of December.**_ ⚠ Read back with the name and the date separated and stressed, so that the owner hears their own name before the meeting moves on. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports four decisions; B converts them into the house format and finds the missing owners. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ actions. __________ has a name and a date. What about the others?'],
  ['A', 'They were agreed by everybody.'],
  ['B', 'Then they were agreed by nobody. Who is __________?'],
  ['A', '__________.'],
  ['B', 'By when?'],
  ['A', '__________.'],
  ['B', 'Then write __________ and __________. ⚠ And was there an objection?'],
  ['A', '__________ did not agree about __________.'],
  ['B', 'That goes in, with the name.'],
]));
out.push(table(['Role card 1 — a Monday meeting', 'Role card 2 — nothing was decided'], [[
  'Four items: the difference count (Hala, Tuesday), the fourth store room (nobody, no date), the Ghouta day (Abu Yasser objected — Friday is wrap day), the van (deferred). ⚠ Two of the four have no owner.',
  'A meeting at which four things were discussed and nothing was decided. ⚠ The honest minute is four *deferred* entries, each with a date for the decision — and B must resist A\'s wish to record the discussion instead.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four actions with owners and dates. ⚠ Then write the objection with its name, and say what it would be worth in six months.'));
out.push(PHRASE_CARD(['Noted:', 'Agreed:', 'Deferred to…:', 'Owner:', 'By:', 'Objection: … —']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Minute a real meeting from your own work in the house format — **four** items, with owners, dates, reasons and any objection.'));
out.push(table(['Noted / Agreed / Deferred', 'Owner', 'By', 'Reason, and any objection'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 0.8, 0.7, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read your four items to the class as if reading them back to the meeting, with the names and dates stressed.'));
out.push(p('**Listener task:** count the actions in the room with no owner. ⚠ Then count the objections recorded — usually nought, and in most of those meetings somebody objected.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _agreed that to print one list_ and _it was decided by all of us_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minutes, and answer the questions.'));
out.push(box(null, [
  '**MONDAY MEETING, 1 DECEMBER. Those present: K. Ayoub (chair), N. Sayegh, H. Mourad, Y. Khalil, N. Mansour. 8.30 to 9.05.**',
  '**1 · Recorded differences, January to November.** **Noted:** the figure is 14, of which 11 reached an invoice and 3 did not. **Agreed:** the three are to be traced and credited or billed as the case requires. **Owner:** Hala Mourad. **By:** 8 December. **Reason:** Mr Attar has asked for the figure and the three are a live exposure.',
  '**2 · The fourth store room.** **Noted:** not entered since August; the shelves have been moved, so it cannot be reconciled to the August paper count. **Agreed:** a full recount rather than a reconciliation. **Owner:** Y. Khalil, with one man from the counter on the Thursday. **By:** 19 December. **Reason:** a reconciliation would take longer than a recount and would not produce a figure anybody could rely on.',
  '**3 · The Ghouta day.** **Agreed:** Ghouta moves to Wednesday and Friday from 8 December. **Owner:** N. Mansour. **By:** 4 December (customers to be told). **Reason:** the Saturday road closure and the Saturday counter. ⚠ **Objection: Y. Khalil — Friday is the day the wrap arrives and he cannot be at the gate and on the forklift.** Not resolved; the chair took the decision. ⚠ **If this goes wrong it will go wrong on a Friday morning and Mr Khalil said so on 1 December.**',
  '**4 · The second van.** **Deferred to 15 December**, pending the repair quotes. **Owner:** N. Mansour (to circulate the three quotes by 8 December). **Reason:** the hire option was costed at 1.8 million against a once-only loss of about 400,000 and was dropped.',
  '⚠ **Not minuted, and deliberately.** About twenty minutes on the auditor\'s visit generally, which produced no decision and no action. **Nothing is lost by its absence and I am recording that it happened so that nobody looks for it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is the objection in item 3 recorded, and what is added after it?'));
out.push(item('2', 'What does item 4 record about an option that was rejected?'));
out.push(item('3', 'What is recorded as not minuted, and why?'));
out.push(box('Writer\'s box', [
  '**Minutes in the house format — those present with the chair named, times, then numbered items.** Each item: **Noted / Agreed / Deferred** · **Owner** · **By** · **Reason** · ⚠ **Objection, with the name.**',
  '⚠ **Record the objection and then say when it will matter.** *If this goes wrong it will go wrong on a Friday morning and Mr Khalil said so on 1 December.* ⚠ That sentence is the most useful thing in the document and it costs one line.',
  '**Record the rejected option and its figures.** *The hire option was costed at 1.8 million against a once-only loss of about 400,000 and was dropped.* Otherwise it is proposed again in March.',
  '⚠ **Say what you did not minute and that it produced nothing.** *Nothing is lost by its absence and I am recording that it happened so that nobody looks for it.* ⚠ A twenty-minute gap in the times with no explanation is what makes people doubt a minute.',
  '**Keep *Reason* to one line.** It answers the only question anybody asks later, and a second line starts reconstructing the discussion.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the minutes of a real meeting (**50 words or more**). Use the frame.'));
out.push(p('**______________ MEETING, ______________. Those present: ______________ (chair), ______________. ______________ to ______________.**   **1 · ______________.** **Noted:** ______________. **Agreed:** ______________. **Owner:** ______________. **By:** ______________. **Reason:** ______________.   **2 · ______________.** **Agreed:** ______________. **Owner:** ______________. **By:** ______________. ⚠ **Objection: ______________ — ______________.** Not resolved; ______________ took the decision. ⚠ If this goes wrong it will go wrong ______________.   **3 · ______________.** **Deferred to ______________**, pending ______________. **Reason:** ______________.   ⚠ **Not minuted, and deliberately.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says record the objection and then say when it will matter. Yours records that somebody disagreed — when would that disagreement turn out to have been right?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does every action have a name and a date?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Those present, the chair named, and the times', ''],
  ['An owner and a date on every action', ''],
  ['One line of reason on each decision', ''],
  ['Any objection, with the name and when it will matter', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their objection line. The class says which objection they would want on the record if they had made it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that went wrong and had been objected to (**100 to 140 words**). Say who objected, whether it was recorded, and whether they were asked the next time.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _who objected_   ✓ _the house format used, with owners and dates?_   ? _was the objection recorded, and were they asked next time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the objection recorded? ⚠ Usually none — and in how many was the objector asked the next time? ⚠ The two answers are almost always the same, which is the argument for the extra line.'));
out.push(box('Homework', ['Write your final text. Then minute your next meeting in the house format, with an owner and a date on every action and any objection named (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review & Mediate: telling the person who was not in the room'));
out.push(p('**Function:** reporting a meeting to somebody affected by it   ·   **Review:** reported statements · reported questions · instructions · reporting verbs · report against reading · minutes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What must a reported statement carry, and why?',
  '**2** What does the order of somebody\'s questions tell you?',
  '**3** When you pass on an instruction, what three things do you separate?',
  '**4** What does *admitted* claim, and what is the test for any reporting verb?',
  '**5** Where does an interpretation go, and what does that let a reader do?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Nour telling Fadi about the meeting?   **A** he was not there and a decision falls on him   **B** he asked   **C** to pass the time'));
out.push(p('**b**  Listen again. **1** What does she tell him about the objection? **2** What does he say that nobody in the meeting knew?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  "You were not there and it is your Friday"', [
  ['Nour', 'Fadi — Ghouta moves to Wednesday and Friday from Monday week. You were not in the meeting and it is your Friday, so I will tell you what was decided and who objected.'],
  ['Fadi', 'Somebody objected?'],
  ['Nour', 'Abu Yasser. He said he cannot be at the gate and on the forklift on a Friday morning, because that is when the wrap comes. It is in the minutes with his name on it and it was not resolved — Mr Ayoub took the decision.'],
  ['Fadi', 'So on Friday the wrap arrives, he is on the forklift, and I am loading Ghouta.'],
  ['Nour', 'That is what the objection says.'],
  ['Fadi', 'There is something else. The Friday Ghouta run is the one with the two Harasta drops at the far end, because they are shut Wednesdays. So Friday is the long run and it is also the morning with no forklift.'],
  ['Nour', 'Nobody in that room knew that.'],
  ['Fadi', 'Nobody in that room drives it. ⚠ **And I would not have known about the wrap, either, so between us the objection is twice as bad as he made it sound.**'],
  ['Nour', 'Then I will put both halves to Mr Ayoub this afternoon, and I will say it came from the two of you.'],
  ['Fadi', 'He will say to do it anyway.'],
  ['Nour', 'He may. ⚠ **But if he does, it will be on the record that two people said what would break and what it would cost, and in February nobody will be looking for somebody to blame — they will be looking at the minute.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – telling the person who was not in the room**',
  table(['To be fair to them', 'To be fair to the meeting', 'To get the rest of it'], [
    ['You were not there and it is your Friday.', 'It is in the minutes with his name on it.', 'Nobody in that room knew that.'],
    ['I will tell you who objected.', 'It was not resolved; the chair decided.', 'Between us the objection is twice as bad.'],
  ], [2, 2, 2]),
  '⚠ **Tell the person a decision falls on, before it falls on them**, and say why you are telling them: *you were not in the meeting and it is your Friday*.',
  '⚠ **Report the objection and whose it was.** Somebody affected by a decision is entitled to know that somebody objected and that it was not resolved — and they will usually have the other half of it.',
  '⚠ **Say when nobody in the room knew something.** *Nobody in that room drives it.* ⚠ Two partial objections from two people who each know half are a complete objection, and they will never meet unless somebody carries one to the other.',
  '⚠ **And say what the record is for.** *If he does, it will be on the record that two people said what would break — and in February nobody will be looking for somebody to blame; they will be looking at the minute.*',
  '**Practise:** Tell somebody about a decision they were absent from: what was decided, who objected, what was not resolved, and ask what they know.',
  '**Useful phrases:**  You were not there and it is your…  ·  X objected; it is in the minutes with his name on it.  ·  It was not resolved.  ·  Nobody in that room knew that.  ·  I will say it came from both of you.',
  '**Pronunciation – reporting an objection to somebody it affects.** 🔊 **Track 10.14** Listen: _Abu Yasser objected // he said he cannot be at the gate and on the forklift // it is in the minutes with his name on it_. ⚠ Three level statements; no sympathy in the voice, because sympathy invites agreement rather than information. Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a decision to B, who was absent and is affected. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A decision to recount the fourth store room on Thursdays, taken without the counter staff present. B works the counter and knows that Thursday is the day the trade customers come after their own closing. ⚠ The objection in the minute was about manpower; B\'s half is about which day.',
  'A decision that all complaints must be in writing, taken without B, who takes them by telephone. B\'s half: about a dozen a year are settled the same day and would now be irregular. ⚠ Nobody in the meeting knew the number.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the decision, the recorded objection, and the half the absent person supplied. ⚠ Then say whether the two halves together change the decision.'));
out.push(PHRASE_CARD(['You were not there.', 'X objected — it is in the minutes.', 'It was not resolved.', 'Nobody in that room knew that.', 'from both of you', 'they will be looking at the minute']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a decision. Report it to **two** people who were not in the room and collect what each knows.'));
out.push(table(['Who I told', 'What was decided and who objected', 'Their half of it', 'What the two halves add up to'], [['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.4, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the two halves added up to. This is the **tenth** unit of this book, and the thing nobody writes down is the one the unit has been building to: **an objection in a meeting is almost always half an objection, because the person in the room knows half of it — and the other half belongs to somebody who was not invited, so the two halves never meet unless somebody carries one to the other.**'));
out.push(p('_The minute recorded _______. _______ added that _______, which nobody in the room knew. Together they mean _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _those present · matters arising · agreed action · verbatim · on the record · circulate._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 5)', 10));
out.push(p('⚠ **This unit practises Part 5: multiple choice on a longer text.** Read the minute extract and choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**Extract from the minutes of 1 December.**',
  '_**3 · The Ghouta day.** **Agreed:** Ghouta moves to Wednesday and Friday from 8 December. **Owner:** N. Mansour. **By:** 4 December (customers to be told). **Reason:** the Saturday road closure and the Saturday counter. **Objection: Y. Khalil — Friday is the day the wrap arrives and he cannot be at the gate and on the forklift.** Not resolved; the chair took the decision. If this goes wrong it will go wrong on a Friday morning and Mr Khalil said so on 1 December._',
  '_**4 · The second van.** **Deferred to 15 December**, pending the repair quotes. **Owner:** N. Mansour (to circulate the three quotes by 8 December). **Reason:** the hire option was costed at 1.8 million against a once-only loss of about 400,000 and was dropped._',
  '_**Not minuted, and deliberately.** About twenty minutes on the auditor\'s visit generally, which produced no decision and no action._',
], 'FFFFFF', C.navy));
[
  '**1**  What happened to Mr Khalil\'s objection?   **A** It was accepted.   **B** It was recorded and the decision was taken anyway.   **C** It was withdrawn.',
  '**2**  Who must act by 4 December, and on what?   **A** Mr Khalil, on the forklift   **B** the chair, on the decision   **C** N. Mansour, on telling the customers',
  '**3**  What does the minute predict about the Ghouta change?   **A** that if it fails, it will fail on a Friday morning   **B** that it will work   **C** that the wrap will be late',
  '**4**  Why was the hire option dropped?   **A** no vehicle was available   **B** it cost more than the loss it would prevent   **C** the chair objected',
  '**5**  Why is the twenty minutes on the auditor recorded as not minuted?   **A** it was confidential   **B** nobody remembers it   **C** it produced no decision or action',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: telling somebody who was absent about a decision that falls on them.',
  'The shape: **what was decided, with the date** · ⚠ **who objected and that it was not resolved** · **what you want from them**.',
  '⚠ **In eighty words the objection must survive.** Without it the reader cannot tell whether the decision was considered or merely taken, and they are the person who will carry it.',
  '⚠ End by asking what they know. They were not in the room, and they are the only person who might have the other half.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A decision has been taken that affects a colleague who was not present. Write to them (**60 to 80 words**). Say **what was decided and when it starts**, ⚠ **who objected and that it was not resolved**, and **ask what they know**.'));
out.push(p('______________, ______________ was agreed on ______________ and starts ______________. You were not there and it is your ______________. ______________ objected: ______________, and it is in the minutes with ______________. It was not resolved — ______________ took the decision. ______________?'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What was decided, and when it starts', ''],
  ['Who objected, and that it was not resolved', ''],
  ['A question asking what they know', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write minutes of a real meeting in full (**100 to 140 words**): those present with the chair, three items with *noted*, *agreed* and *deferred*, an owner and a date on every action, one line of reason on each, any objection with its name, and what you did not minute.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then tell one person about a decision they were absent from, including the objection, and write down what they add (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  She said she ___ the invoice.   a) had sent   b) has sent   c) have sent',
  '2  She said she ___ the price until December.   a) will hold   b) would hold   c) holds',
  '3  He asked ___ the count was against the order.   a) that   b) if that   c) whether',
  '4  He asked me ___ I did on a Thursday.   a) what   b) what did   c) that what',
  '5  He asked me ___ the sheet before the count.   a) not sign   b) not to sign   c) to not signing',
  '6  Which verb claims nothing about the speaker?   a) admitted   b) pointed out   c) said',
  '7  She raised it herself, before anybody asked. The accurate verb is ___.   a) admitted   b) reported   c) explained',
  '8  Which belongs in a separate sentence in your own name?   a) what they said   b) what they asked   c) what you understood it to mean',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 10.15** Listen to the exchange. Complete the note.   What was decided, and from when: ______   Who objected, and what he said: ______   Whether it was resolved: ______   What Fadi adds: ______   What Nour will do: ______'));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Nour', 'Ghouta moves to Wednesday and Friday from Monday week. You were not in the meeting and it is your Friday.'],
  ['Nour', 'Abu Yasser objected. He said he cannot be at the gate and on the forklift on a Friday morning, because that is when the wrap comes. It is in the minutes with his name on it, and it was not resolved — Mr Ayoub took the decision.'],
  ['Fadi', 'There is something else. The Friday run is the one with the two Harasta drops at the far end, because they are shut on Wednesdays. So Friday is the long run and it is also the morning with no forklift.'],
  ['Nour', 'Nobody in that room knew that. I will put both halves to Mr Ayoub this afternoon and say it came from the two of you.'],
]));
out.push(p('**C  Writing.** Minute three items from a real meeting (**50 words or more**) with an owner and a date on each, one line of reason, and any objection with its name.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ report a statement with backshift, the date of the call, and my own findings kept separate',
  '☐ report questions in the order they were asked, and say what the order reveals',
  '☐ pass on an instruction, separating whose it is from whose the deadline is',
  '☐ choose *said* unless I can justify another verb, and ask whether they would sign the sentence',
  '☐ keep my reading in its own sentence, and name the direction of my own expectation',
  '☐ write minutes with an owner, a date, a reason — and the objection, with its name',
  '☐ tell somebody who was not in the room, and collect the half of the objection they hold',
  '☐ write a note of a call, a record of an interview, an amendment to a minute and minutes',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
