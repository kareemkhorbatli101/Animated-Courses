// Proactive Business English B2 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a register · the register dials · a lay reader · an expert reader · the irreducible core · a load-bearing sentence · to copy verbatim · an audience · to pitch a document · what a reader will do with it · an action a reader takes · to be comparable · to compare notes · a discrepancy between versions · one fact three ways · a shared sentence · the same figure in all three · to be embarrassed by a comparison · to write for the action · what may be left out · what may never be left out · a reader who reschedules · a reader who re-plans · a reader who works a Saturday · in one sitting · the discipline of doing it once · forty minutes three documents · a version for each reader · a sentence that cannot be reworded · the reader you wrote for · the reader who actually read it · to be forwarded';
const COLLOC = 'to pitch a sentence · to hold a figure constant · to lift a sentence · to tailor a version · to compare two accounts · to cross-check a date · to forward a document · to speak to one reader';
const BACK_AT_B2 = 'paraphrase · recipient';

out.push(h1('Unit 6  Three Readers, One Fact'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  write one fact in three registers, moving the dials on purpose',
  '**6.2**  write for what each reader will do, not for who they are',
  '**6.3**  decide what may be left out, and what may never be',
  '**6.4**  write the one sentence that is identical in all three',
  '**6.5**  write for the day the three readers compare notes',
  '**6.6**  write all three in one sitting',
  '**6.7**  Review & Mediate: the reader you wrote for, and the reader who actually read it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The fact, and the three people who have to be told', [
  '⚠ **The paper went in on 1 April and Mr Ayoub has not decided.** **A reply went to Mr Dallal on 31 March asking for until 30 April to answer on the capped terms, and he has agreed.** ⚠ **So Beirut is quiet until the end of this month, and something else has happened.**',
  '⚠ **The plater stopped for eleven days.** **A press bearing went on 2 April in Aleppo and the part came from Homs.** **He is running again from the 13th, and we are two weeks behind on the Tannous April order** — **three hundred and twenty cartons, due with her on the 18th, now going on the 2nd of May.**',
  '⚠ **Three people have to be told and they are not told the same thing.** ⚠ **Mr Haddad at the bank, because the April receipt moves into May and the instalment does not. Ms Tannous, because her own customer has a date. And the yard, because somebody has to decide whether we work the Saturday.**',
  '⚠ **One fact. Three documents. And the three readers all know each other.**',
], C.lyellow, C.orange));

// ======================= CYCLE 6.1 =======================
out.push(pb());
out.push(h2('6.1  One fact, three registers'));
out.push(p('**Function:** moving register on purpose   ·   **Grammar:** the register dials — formality, distance, detail, hedging   ·   **Pronunciation:** the same sentence read in three registers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you have had to tell three different people. Say which version was easiest.'));
out.push(p('**b**  Which reader is each for? _The April receipt will fall into May. · We are two weeks behind on your April order. · The plater was down eleven days; we are two weeks behind._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say register is?   **A** politeness   **B** four dials, each set separately   **C** vocabulary'));
out.push(p('**b**  Listen again. **1** What are the four dials? **2** Which dial does she say people move by accident?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  "Four dials, and you are moving one by accident"', [
  ['Nour', 'I have written the bank version and the yard version and they sound like different people wrote them.'],
  ['Nadia', '⚠ **They should. Read me a line of each.**'],
  ['Nour', '*The April receipt will fall into May.* And: *the plater was down eleven days; we are two weeks behind.*'],
  ['Nadia', '⚠ **Good, and now say what is different, because it is not politeness.** ⚠ **There are four dials and you have moved three of them.**'],
  ['Nour', 'Formality. And detail — the yard gets the bearing and the bank does not.'],
  ['Nadia', '⚠ **And distance.** ⚠ *The April receipt will fall into May* **has nobody in it; _we are two weeks behind_ has us in it.** **That is the third dial and it is the one that matters most to a bank.**'],
  ['Nour', 'And the fourth?'],
  ['Nadia', '⚠ **Hedging. And it is the one you are moving by accident.** **Read the bank line again.**'],
  ['Nour', '*The April receipt will fall into May.*'],
  ['Nadia', '⚠ **_Will_. Flat. Certain.** **Now the yard line.**'],
  ['Nour', '*He is running again from the 13th and we should catch up by the end of the month.*'],
  ['Nadia', '⚠ *Should.* ⚠ **So the yard gets a hedge and the bank gets a certainty, and you have it exactly the wrong way round.** **The yard can absorb an uncertainty — they work a Saturday or they do not. ⚠ **A bank that is told *will* and then finds out *should* has been misled, and nobody meant to.**'],
  ['Nour', 'I was being confident for the bank.'],
  ['Nadia', '⚠ **You were being formal for the bank and you moved the hedging dial with the formality dial**, **because they feel like the same dial and they are not.** ⚠ **Formality up, distance up, detail down — and hedging stays exactly where the truth is.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four register dials**',
  table(['Dial', 'Low', 'High', 'Set it by'], [
    ['**formality**', '*the plater was down*', '*a supply interruption occurred*', 'the relationship'],
    ['⚠ **distance**', '*we are two weeks behind*', '*the April receipt will fall into May*', '**how much the reader needs a person in it**'],
    ['**detail**', '*two weeks behind*', '*a press bearing on 2 April, part from Homs, eleven days*', '**what the reader will do with it**'],
    ['⚠ **hedging**', '*will*', '*should · is expected to*', '⚠ **the truth, and nothing else**'],
  ], [1.3, 1.9, 2.4, 2.1]),
  '⚠ **Register is four dials and each is set separately.** **Most writers move all four together, because moving one feels like moving all of them.**',
  '⚠ **The hedging dial is the one people move by accident, with the formality dial.** ⚠ **A formal document feels as though it ought to be confident, so the hedges come out of it** — **and then the bank is told *will* and the yard is told *should*, which is exactly the wrong way round.**',
  '⚠ **The hedging dial is set by the truth and by nothing else.** **Not by the reader, not by the relationship, not by how the sentence sounds.** ⚠ **A reader told *will* who later finds out *should* has been misled, and nobody meant to.**',
  '⚠ **The yard can absorb an uncertainty** — **they work a Saturday or they do not.** **A bank cannot, because it has written your figure into its own forecast.**',
  '⚠ **Formality up, distance up, detail down — and hedging where the truth is.** **That is the whole of this cycle in one line.**',
  '**Practise:** Take one fact. Write it three times, and for each version say where you set all four dials.',
  '**Useful phrases:**  four dials, each set separately  ·  you have moved three of them  ·  the hedging dial by accident  ·  the yard can absorb an uncertainty  ·  hedging stays where the truth is',
  '**Pronunciation – one sentence in three registers.** 🔊 **Track 6.2** Listen to the delay said three times. ⚠ **The bank version is slower and the stress falls on the dates; the yard version is faster and the stress falls on the Saturday.** ⚠ **The customer version is the slowest of the three and stresses nothing** — **because a customer hearing emphasis hears an excuse.** Say each four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads two versions of one fact; B names the dials that moved.'));
out.push(dlg(null, [
  ['A', '_(version one)_ __________. _(version two)_ __________.'],
  ['B', '⚠ **Which dials have moved?**'],
  ['A', 'Formality. And __________.'],
  ['B', '⚠ **And distance — one has nobody in it and one has __________ in it.**'],
  ['A', 'And the fourth?'],
  ['B', '⚠ **Hedging. Read me both again.**'],
  ['A', '__________ … __________.'],
  ['B', '⚠ **So __________ gets a certainty and __________ gets a hedge, and you have it __________.**'],
]));
out.push(table(['Role card 1 — three dials moved, one by accident', 'Role card 2 — the dial set by the relationship'], [[
  '*The April receipt will fall into May* against *the plater was down eleven days; we should catch up by the end of the month.* ⚠ **Formality up, distance up, detail down — correctly.** ⚠ **And hedging moved with the formality: *will* to the bank and *should* to the yard, which is backwards.**',
  'A has set the hedging dial by how much they like the reader. ⚠ **B asks one question: which of these two is true?** ⚠ **Only one can be**, **and whichever it is goes to all three readers** — **because the dial is set by the truth and the other three are set by the reader.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** draw four dials and mark where each version sets them. ⚠ Then say which dial moved for the wrong reason.'));
out.push(PHRASE_CARD(['four dials, set separately', 'you have moved three', 'hedging by accident', 'the yard can absorb it', 'hedging stays where the truth is']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** fact from your work and write it for **three** readers. Set the dials deliberately.'));
out.push(table(['Reader', 'Formality', 'Distance', 'Detail', 'Hedging'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.2, 1.1, 1.1, 1.3, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _For _______ I set formality _______, distance _______, detail _______ and hedging _______. And the hedging is the same in all three, because _______._'));
out.push(p('**Listener task:** count how many people had a different hedge in different versions. ⚠ Then ask which version was true.'));
out.push(p('**Board clinic:** your teacher writes three pairs on the board — look for a hedge that moved with the formality, and a formal version with the detail still in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ELEVEN DAYS — ONE FACT, THREE OPENINGS. 14 April. N. Mansour. Drafted together, on purpose.**',
  table(['', 'To Mr Haddad, the bank', 'To Ms Tannous, the customer', 'To the yard'], [
    ['**the opening**', '⚠ **_The April receipt of about 1.9 million will fall into the first week of May. The 28 April instalment is unaffected and will be met from the takings of the second store, which has traded since 8 June._**', '⚠ **_Your April order of 320 cartons will reach you on 2 May instead of 18 April. Our plater was out of action for eleven days._**', '⚠ **_The plater lost eleven days. We are two weeks down on the Tannous order. The question is the Saturday._**'],
    ['**formality**', '**high**', '**medium**', '**low**'],
    ['⚠ **distance**', '⚠ **high — *the receipt will fall*, nobody in it**', '**low — *your order*, *our plater***', '⚠ **lowest — *we are two weeks down***'],
    ['**detail**', '**low — no bearing, no Homs, no dates of the stoppage**', '**medium — eleven days, and that it was the plater**', '⚠ **highest, and in the second paragraph: the bearing, the part from Homs, the 2nd to the 13th**'],
    ['⚠ **hedging**', '⚠ **_will_**', '⚠ **_will_**', '⚠ **_will_**'],
  ], [1.1, 3, 2.6, 2.5]),
  '⚠ **The bottom row is the point of the page and it is the row I had wrong in the first draft.** **I had *will* for the bank, *will* for Ms Tannous and *should* for the yard**, ⚠ **because the yard is the only one I would have to look in the face.** **Which is a reason to hedge to a person and not a reason to hedge in a document.**',
  '⚠ **The 2nd of May is a date I can keep.** **The plater is running from the 13th, we are four hundred cartons a month, three hundred and twenty is under a month\'s work, and the second press is free at night.** ⚠ **So *will* is true, and *will* goes to all three.** **If it were not true, *should* would go to all three, including the bank, and the bank would be told *should* in a formal letter, which is uncomfortable and correct.**',
  '⚠ **And the detail dial is the one that surprised me.** **The yard gets the most detail and the bank gets the least** — ⚠ **which is the opposite of what formality suggests**, **because the bank will do nothing with a bearing and Abu Yasser will decide a Saturday with it.** **Detail is set by what the reader does, not by how senior they are.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row was wrong in the first draft, and what was the reason?'));
out.push(item('2', 'Why is *will* true, and what would happen if it were not?'));
out.push(item('3', 'Who gets the most detail, and why is that surprising?'));
out.push(box('Writer\'s box', [
  '**One fact, three openings — four parts:** **the three openings side by side** → ⚠ **a row for each dial** → ⚠ **the hedging row, identical across all three** → ⚠ **and the dial that surprised you.**',
  '⚠ **Lay the three out in columns, not one after another.** **Columns make the dials visible; a page of three paragraphs hides them, and you cannot see that one hedge is different from the others.**',
  '⚠ **The hedging row must read the same in all three.** ⚠ **If you have *will* in one and *should* in another, one of them is false** — **and the reason is almost always that you would have to look one of the readers in the face.**',
  '⚠ **Justify the hedge with the arithmetic.** ⚠ *The plater runs from the 13th, we do four hundred a month, three hundred and twenty is under a month, and the second press is free at night.* **A hedge or a certainty with no arithmetic behind it is a tone of voice.**',
  '⚠ **Set the detail dial by what the reader will do.** ⚠ **The bank will do nothing with a bearing; the yard will decide a Saturday with it.** **Detail is not a function of seniority, and treating it as one is the commonest error in a formal letter.**',
  '⚠ **And say which dial surprised you.** **In a well-made set of three it is always detail**, because formality pulls detail the wrong way and the pull has to be resisted on purpose.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one fact and write three openings (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ONE FACT, THREE OPENINGS. ______________. Drafted together, on purpose.**   **the opening** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   **formality** | **______________** | **______________** | **______________**   ⚠ **distance** | ⚠ **______________** | **______________** | ⚠ **______________**   **detail** | **______________** | **______________** | ⚠ **______________**   ⚠ **hedging** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **The bottom row is the point and I had it wrong in the first draft.** **I had ______________, because ______________** — ⚠ **which is a reason to hedge to a person and not a reason to hedge in a document.**   ⚠ **______________ is true, and here is the arithmetic:** ______________. ⚠ **So it goes to all three.**   ⚠ **And the detail dial is the one that surprised me.** **______________ gets the most and ______________ the least** — ⚠ **because ______________ will do nothing with ______________ and ______________ will decide ______________ with it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three openings in columns, not in sequence', ''],
  ['A row for each of the four dials', ''],
  ['The hedging row identical across all three', ''],
  ['Arithmetic behind the hedge or the certainty', ''],
  ['The detail dial set by what the reader will do', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their hedging row. ⚠ The class says whether it is the same in all three — and if not, which version is true.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you told two people the same thing differently (**200 to 240 words**). Say what the fact was, what each version said, which dial you moved for the wrong reason, and what happened.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which dial moved for the wrong reason_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the dial that moved wrongly the hedging dial? Usually two of three — ⚠ **and in all three the reason was which reader the writer would have to face.**'));
out.push(box('Homework', ['Write your final text. Then take one fact you have to report, write it for two readers, and check that the hedging is identical in both (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.2 =======================
out.push(pb());
out.push(h2('6.2  What each reader will do with it'));
out.push(p('**Function:** writing for the action, not for the person   ·   **Grammar:** _you will need to · what this means for you is_   ·   **Pronunciation:** the reader\'s action said as the main clause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one piece of news at your work. Say what three different people would have to *do* about it.'));
out.push(p('**b**  Which is written for an action? _I thought you should be aware of the position. · You will need to move the April receipt in the cash forecast; the instalment is unaffected._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say most documents are written for?   **A** the action   **B** the reader\'s status   **C** the writer'));
out.push(p('**b**  Listen again. **1** What three actions does he name? **2** What does he say about *for your information*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  "What does he actually have to do?"', [
  ['Mr Attar', 'Your bank letter is clear. What does Mr Haddad have to do when he has read it?'],
  ['Nour', 'Nothing. He has to know.'],
  ['Mr Attar', '⚠ **Then do not send it.** ⚠ **Nothing is not an action, and a reader who has to do nothing files the letter and remembers the tone and not the figure.**'],
  ['Nour', 'He does have to do something. He has a cash forecast with our April receipt in it.'],
  ['Mr Attar', '⚠ **Then that is the letter.** ⚠ *You will need to move about 1.9 million from April into the first week of May. The 28 April instalment is unaffected.* **Two sentences, and he can do both of them without writing back.**'],
  ['Nour', 'And Ms Tannous?'],
  ['Mr Attar', '⚠ **What does she do?**'],
  ['Nour', 'She re-plans. Her own customer has a date and she has to tell them, and she needs to know whether it is all three hundred and twenty or part.'],
  ['Mr Attar', '⚠ **Which is a question she will ask, so answer it before she asks.** ⚠ **That is what writing for the action means: the question the reader would have to ask is the thing the document is for.**'],
  ['Nour', 'And the yard.'],
  ['Mr Attar', '⚠ **The yard decides a Saturday.** **One decision, and it is theirs, and the letter is three lines: eleven days lost, three twenty due on the 2nd, and does the Saturday get us there.**'],
  ['Nour', 'So the three documents are completely different.'],
  ['Mr Attar', '⚠ **The three documents are three different actions and one fact.** ⚠ **And the thing that tells you which register to use is not who the reader is — it is what they will be doing on Tuesday morning.**'],
  ['Nour', 'What about things somebody genuinely only needs to know?'],
  ['Mr Attar', '⚠ **Then write *for information* and write it at the top, so they know it is not a request.** ⚠ **What you must never do is write a letter that looks like a request and contains none** — **because then a careful reader spends twenty minutes working out what you want.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing for the action**',
  table(['Reader', 'The action', 'So the document says'], [
    ['**the bank**', '⚠ **moves a figure in a cash forecast**', '⚠ *you will need to move about 1.9 million from April into the first week of May; the instalment is unaffected*'],
    ['**the customer**', '⚠ **re-plans, and tells her own customer**', '⚠ *all 320 will reach you on 2 May; none of it is coming in April* — **the question she would ask, answered first**'],
    ['**the yard**', '⚠ **decides one thing: the Saturday**', '*eleven days lost · 320 due on the 2nd · does the Saturday get us there*'],
    ['⚠ **genuinely nothing**', '**none**', '⚠ **_for information_, at the top, so they know it is not a request**'],
  ], [1.2, 2.1, 3.4]),
  '⚠ **Ask what the reader has to *do*, and if the answer is nothing, do not send it.** ⚠ **A reader who has to do nothing files the letter and remembers the tone and not the figure.**',
  '⚠ **Answer the question the reader would have to ask.** ⚠ **Ms Tannous will ask whether it is all three hundred and twenty or part of it** — **so the answer goes in before she asks.** **That is what writing for the action means.**',
  '⚠ **One document, one action, where you can.** **The yard\'s letter is three lines because the yard has one decision.** **A document carrying three actions for one reader is three documents.**',
  '⚠ **Register is chosen by the action, not by the reader.** ⚠ **What tells you how to write is not who the reader is — it is what they will be doing on Tuesday morning.**',
  '⚠ **And if something really is only to be known, say *for information* at the top.** ⚠ **Never send a letter that looks like a request and contains none** — **a careful reader spends twenty minutes working out what you want, and resents it.**',
  '**Practise:** Take one fact and three readers. Write the action each must take, then one sentence that lets them take it.',
  '**Useful phrases:**  what does he have to do?  ·  nothing is not an action  ·  the question she would ask, answered first  ·  what they will be doing on Tuesday morning  ·  for information, at the top',
  '**Pronunciation – the action as the main clause.** 🔊 **Track 6.4** Listen twice. ⚠ **The first says *you will need to move the April receipt into May*** — **the action is the main clause.** ⚠ **The second says *in view of the delay, which arose from a supply interruption, the April receipt may need to be moved*.** **The action is at the end of the second one and a reader skimming will miss it.** Say the first four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a document; B asks what the reader does.'));
out.push(dlg(null, [
  ['B', 'Your letter is clear. ⚠ **What does __________ have to do when they have read it?**'],
  ['A', 'Nothing. They have to know.'],
  ['B', '⚠ **Then do not send it. Nothing is not an action.**'],
  ['A', 'They do have to __________.'],
  ['B', '⚠ **Then that is the letter. Write it in two sentences.**'],
  ['A', '__________. __________.'],
  ['B', '⚠ **And what would they ask you after reading it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then answer it before they ask.**'],
]));
out.push(table(['Role card 1 — three actions, one fact', 'Role card 2 — the letter that looks like a request'], [[
  '⚠ **The bank moves a figure in a forecast. Ms Tannous re-plans and tells her own customer. The yard decides a Saturday.** ⚠ **Three documents, three registers, one fact** — **and the register is chosen by the action and not by the reader\'s seniority.**',
  'A has written a letter that reads like a request and asks for nothing. ⚠ **B reads it as a busy reader and says what they think is being asked.** ⚠ **They will guess wrong**, **and they will guess that something is being asked.** ⚠ **Then A either finds the request or writes *for information* at the top.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the reader, the action and the one sentence that lets them take it. ⚠ Then write the question they would have asked, and check it was answered.'));
out.push(PHRASE_CARD(['what does he have to do?', 'nothing is not an action', 'the question she would ask', 'Tuesday morning', 'for information, at the top']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** fact and **four** readers. Write the action and the sentence for each.'));
out.push(table(['Reader', 'What they will actually do', 'The sentence that lets them do it', 'The question they would ask'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.6, 2.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _For _______ the action is _______. My sentence is _______. And the question they would ask is _______, which I have answered in _______._'));
out.push(p('**Listener task:** count how many readers turned out to have no action at all. ⚠ Then ask whether those documents are still being sent, and why.'));
out.push(p('**Board clinic:** your teacher writes three openings on the board — look for *I thought you should be aware*, and an action buried at the end of a subordinate clause. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ELEVEN DAYS — WHAT EACH READER DOES. 15 April. N. Mansour.**',
  table(['', 'Reader', 'The action, in a verb', 'What they ask if I do not answer it'], [
    ['**1**', '**Mr Haddad, the bank**', '⚠ **moves about 1.9 million from April to the first week of May in his own forecast**', '⚠ **_is the 28 April instalment affected?_ — and if I leave that out, he telephones Mr Ayoub, not me**'],
    ['**2**', '**Ms Tannous**', '⚠ **re-plans her own delivery to Beirut and tells her customer a date**', '⚠ **_is it all 320 or part?_ — she needs one date to give one date**'],
    ['**3**', '**the yard**', '⚠ **decides whether to work Saturday the 20th**', '**_does the Saturday get us there, or do we need two?_**'],
    ['**4**', '⚠ **Mr Sayegh**', '⚠ **nothing at all**', '⚠ **nothing — and I have taken him off the distribution, because a letter to a lawyer about a delay invites advice nobody asked for**'],
  ], [0.4, 1.9, 3.1, 3.4]),
  '⚠ **Row 1 is the one I would have got wrong a month ago.** **The bank\'s question is not about the delay at all — it is about the instalment.** ⚠ **A man whose forecast loses a receipt wants to know whether the payment going the other way is still coming**, **and if I do not answer that in the first three lines he telephones Mr Ayoub to ask, and then Mr Ayoub is answering a question about cash that he has not been briefed on.**',
  '⚠ **Row 2 taught me the shape of a customer letter.** ⚠ **She needs one date to give one date.** **A letter that says *we expect to deliver the bulk of the order in early May with the balance to follow* makes her write a letter of her own that nobody can act on**, **and she will telephone to turn my sentence into a date.** **So: all three hundred and twenty, on the 2nd of May, and nothing in April.**',
  '⚠ **And row 4 is the row I am most pleased with, because it is a subtraction.** **Mr Sayegh has no action.** ⚠ **Four people were on my first distribution list and only three of them have anything to do** — **and the fourth, being a lawyer, would have replied, and his reply would have gone into the file and become a thing somebody has to deal with.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the bank\'s real question, and what happens if it is not answered?'));
out.push(item('2', 'Why does the customer need one date?'));
out.push(item('3', 'Why has the fourth reader been taken off the list?'));
out.push(box('Writer\'s box', [
  '**What each reader does — four parts:** ⚠ **the action, in a verb** → ⚠ **the question they ask if you do not answer it** → **who they ask instead of you** → ⚠ **and the reader you take off the list.**',
  '⚠ **Write the action as a verb, not a state.** ⚠ *Moves 1.9 million from April to May.* **Not *needs to be aware of the cash position*** — **a state is not an action and cannot be checked.**',
  '⚠ **Write down the question each reader asks if you leave it out, and who they ask.** ⚠ **The bank telephones Mr Ayoub, not you** — **and then he is answering a question about cash he has not been briefed on.** **That is the real cost of an unanswered question and it never appears in the document.**',
  '⚠ **Give a customer one date so that she can give one date.** ⚠ *The bulk in early May with the balance to follow* **makes her write a letter nobody can act on**, **and she will telephone to turn your sentence into a date.**',
  '⚠ **And subtract a reader.** ⚠ **A reader with no action will nevertheless reply, and the reply goes into the file and becomes a thing somebody has to deal with** — **a lawyer most of all.**',
  '⚠ **One document, one action.** **If a reader has two, they get two documents or one document with two headings and two verbs.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what each reader does* for a fact at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT EACH READER DOES. ______________. ______________.**   **1** ______________ | ⚠ **______________** | ⚠ **______________ — and if I leave that out, ______________**   **2** ______________ | ⚠ **______________** | ⚠ **______________**   **3** ______________ | ⚠ **______________** | **______________**   **4** ⚠ **______________** | ⚠ **nothing at all** | ⚠ **nothing — and I have taken them off the distribution, because ______________**   ⚠ **Row 1 is the one I would have got wrong.** **Their question is not about ______________ at all — it is about ______________.** ⚠ **If I do not answer it in the first three lines they ask ______________, and then ______________.**   ⚠ **Row 2 taught me the shape of a ______________ letter.** ⚠ **They need one ______________ to give one ______________.**   ⚠ **And row 4 is a subtraction.** **______________ were on my first list and only ______________ have anything to do.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each action written as a verb', ''],
  ['The question each reader asks if you leave it out', ''],
  ['Who they ask instead of you', ''],
  ['A customer given one date, so they can give one', ''],
  ['A reader subtracted from the list', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the reader they took off the list. ⚠ The class says what that reader would have replied, and whether it would have helped.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a document at your work that goes to somebody with nothing to do (**200 to 240 words**). Say who it goes to, why they are on the list, what they do with it, what they have ever replied, and what would happen if they came off.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _why is that reader on the list?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the reason historical — somebody who used to hold the job, or a list copied from an older document? Usually all three — ⚠ **and in two of three nobody has ever been taken off anything.**'));
out.push(box('Homework', ['Write your final text. Then take a distribution list you use, write the action beside each name as a verb, and take off anybody whose verb is blank (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.3 =======================
out.push(pb());
out.push(h2('6.3  What may be left out, and what may never'));
out.push(p('**Function:** identifying the irreducible core   ·   **Grammar:** _the figure, the date and the consequence — in all three_   ·   **Pronunciation:** reading a core sentence and nothing else'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one piece of bad news. Say the shortest version that is still honest.'));
out.push(p('**b**  Which can be left out of a customer letter? _the bearing · the eleven days · the 2nd of May · that the part came from Homs · that it is all 320 cartons_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say the core is?   **A** everything true   **B** the figure, the date and the consequence   **C** the apology'));
out.push(p('**b**  Listen again. **1** What may always be left out? **2** What is the test for a thing you are tempted to leave out?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  "Three things, in all three letters"', [
  ['Nour', 'The yard letter has the bearing and the Homs part in it. Ms Tannous does not need either.'],
  ['Hala', '⚠ **She does not, and nobody will mind.** **What is in all three?**'],
  ['Nour', 'The two weeks.'],
  ['Hala', '⚠ **Say it as three things, because it is three.** ⚠ **A figure, a date and a consequence.** **Three hundred and twenty cartons. The second of May. And what it means for the person reading.**'],
  ['Nour', 'And those three are in all of them.'],
  ['Hala', '⚠ **Those three are the core, and the core never changes.** **Everything else is a dial.**'],
  ['Nour', 'What can always go?'],
  ['Hala', '⚠ **Cause, in the detail.** ⚠ **A bearing is cause. Homs is cause.** **Nobody outside the yard does anything with a cause** — **they do something with a figure, a date and a consequence.**'],
  ['Nour', 'Customers always want to know why.'],
  ['Hala', '⚠ **Customers want to know that there is a why and that it is not carelessness.** ⚠ *Our plater was out of action for eleven days* **does that in nine words.** ⚠ **_A press bearing failed on 2 April and the replacement came from Homs_ does not do it any better and invites a conversation about Aleppo.**'],
  ['Nour', 'And the test, for the things I am not sure about?'],
  ['Hala', '⚠ **One question: if they found this out from somebody else, would they feel they had been kept in the dark?** ⚠ **If yes, it is core, whatever dial it looks like.**'],
  ['Nour', 'Then the Saturday is core for Ms Tannous.'],
  ['Hala', '⚠ **Why?**'],
  ['Nour', '⚠ **Because if we work a Saturday to make her date and she hears it from Abu Yasser at a trade fair, she will think we nearly did not tell her.** ⚠ **And if we do not work it, and she hears we could have, that is worse.**'],
  ['Hala', '⚠ **Then it goes in her letter in one clause, and you have just found the thing the test is for.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The irreducible core, and the test**',
  table(['', 'What it is', 'Here'], [
    ['⚠ **the core — always in**', '⚠ **a figure, a date and a consequence**', '**320 cartons · 2 May · what it means for this reader**'],
    ['**always out**', '⚠ **cause in detail**', '*a bearing · the part from Homs · the 2nd to the 13th*'],
    ['**enough cause**', '⚠ **that there is a why and it is not carelessness**', '⚠ *our plater was out of action for eleven days* — **nine words**'],
    ['⚠ **the test for anything else**', '⚠ *if they found this out from somebody else, would they feel kept in the dark?*', '⚠ **the Saturday — yes, so it is core for her**'],
  ], [1.6, 2.4, 2.6]),
  '⚠ **The core is three things and it never changes: a figure, a date and a consequence.** **Everything else is a dial.**',
  '⚠ **Cause in detail can always go.** **Nobody outside the yard does anything with a bearing.** ⚠ **But some cause must stay, because a reader wants to know that there is a why and that it is not carelessness** — **and nine words does that as well as thirty and invites no conversation.**',
  '⚠ **The test for everything you are unsure about is one question:** ⚠ *if they found this out from somebody else, would they feel they had been kept in the dark?* ⚠ **If yes, it is core, whatever dial it looks like.**',
  '⚠ **That test moves things into the core that no rule about register would have found.** ⚠ **The Saturday is a yard matter and belongs to Ms Tannous**, **because if we work one to make her date and she hears it from somebody else she will think we nearly did not tell her** — **and if we do not work one and she hears we could have, that is worse.**',
  '⚠ **The test is about discovery, not about relevance.** **A thing can be irrelevant to a reader\'s action and still be core, because the cost is not confusion — it is their reading of you afterwards.**',
  '**Practise:** Take a piece of news. Write the three-part core, name what may always go, and apply the discovery test to three doubtful items.',
  '**Useful phrases:**  say it as three things  ·  the core never changes  ·  cause in detail can go  ·  that there is a why  ·  would they feel kept in the dark?',
  '**Pronunciation – a core sentence and nothing else.** 🔊 **Track 6.6** Listen twice. ⚠ **The first says *320 cartons, on 2 May, and nothing in April* and stops.** ⚠ **The second says the same and then adds *so we are doing everything we can*.** **The addition is the first thing a reader stops believing.** Say the first four times and stop.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has three versions; B finds the core and tests the doubtful items.'));
out.push(dlg(null, [
  ['B', '⚠ **What is in all three?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say it as three things.**'],
  ['A', 'A figure — __________. A date — __________. And a consequence — __________.'],
  ['B', '⚠ **And what can always go?**'],
  ['A', '__________, in detail. Nobody does anything with it.'],
  ['B', '⚠ **But some of it stays. How much?**'],
  ['A', '⚠ **That there is a why and it is not carelessness** — __________.'],
  ['B', '⚠ **Now the doubtful one. If they found __________ out from somebody else, would they feel kept in the dark?**'],
  ['A', '⚠ Yes. So it is core.'],
]));
out.push(table(['Role card 1 — a figure, a date and a consequence', 'Role card 2 — the discovery test'], [[
  '⚠ **The core: three hundred and twenty cartons, the second of May, and what it means for this reader.** ⚠ **Always out: the bearing, Homs, the dates of the stoppage.** ⚠ **Enough cause, in nine words: *our plater was out of action for eleven days*.**',
  'A has three items they are unsure about. ⚠ **B applies one question to each: if the reader found this out from somebody else, would they feel kept in the dark?** ⚠ **The Saturday passes the test and nothing about register would have found it** — **and the reason it passes is not relevance, it is how the reader would read A afterwards.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three-part core. ⚠ Then write the one doubtful item that passed the discovery test, and say which reader it was core for.'));
out.push(PHRASE_CARD(['say it as three things', 'the core never changes', 'cause in detail can go', 'that there is a why', 'kept in the dark?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take one piece of news and **three** readers. Build the core and test four doubtful items.'));
out.push(table(['', 'The figure', 'The date', 'The consequence for this reader'], [['**reader 1**', '', '', ''], ['**reader 2**', '', '', ''], ['**reader 3**', '', '', '']], [1.2, 1.3, 1.2, 2.3]));
out.push(p('⚠ **The doubtful four, tested:** ______________ — ______________ · ______________ — ______________ · ______________ — ______________ · ______________ — ______________'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The core is _______, _______ and _______. What always goes is _______. And the doubtful item that turned out to be core is _______, for _______, because _______._'));
out.push(p('**Listener task:** count the doubtful items that passed the discovery test. ⚠ Then ask how many of them would have been left out by anybody thinking about register alone.'));
out.push(p('**Board clinic:** your teacher writes three versions on the board — look for a core with no consequence in it, and a cause explained in thirty words. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ELEVEN DAYS — THE CORE, AND THE DOUBTFUL FIVE. 16 April. N. Mansour.**',
  '**The core, in all three letters.** ⚠ **The figure: 320 cartons. The date: 2 May. The consequence: for the bank, 1.9 million moves out of April; for Ms Tannous, nothing arrives in April; for the yard, two weeks to make up.**',
  table(['', 'The doubtful item', 'Found out from somebody else?', 'Decision'], [
    ['**1**', '**the bearing, and that the part came from Homs**', '**no — nobody else will mention a bearing**', '**out of all three except the yard**'],
    ['**2**', '⚠ **that we are considering working Saturday the 20th**', '⚠ **yes — Abu Yasser sees Ms Tannous\'s driver every fortnight**', '⚠ **into her letter, in one clause**'],
    ['**3**', '⚠ **that the plater put his rate up twelve per cent in March**', '⚠ **yes, and from a competitor** — **but it has nothing to do with this delay**', '⚠ **out. The test asks about this fact, not about every fact.**'],
    ['**4**', '**that the second press is free at night**', 'no', '**out; it is the arithmetic behind *will* and belongs in no letter**'],
    ['**5**', '⚠ **that we have asked Mr Dallal for until 30 April**', '⚠ **yes, and Mr Haddad would mind very much**', '⚠ **out of this letter and into a separate one, because it is a different fact and a different action**'],
  ], [0.4, 2.9, 2.8, 2.7]),
  '⚠ **Item 3 is where I nearly used the test wrongly.** **The plater\'s twelve per cent would embarrass me if a competitor mentioned it to Ms Tannous** — ⚠ **and it has nothing to do with an eleven-day stoppage.** **The test asks whether they would feel kept in the dark *about this*, not whether there is anything else they do not know.** ⚠ **Used loosely it turns every letter into a disclosure of everything, which is how three readers end up with twelve pages each and read none of them.**',
  '⚠ **Item 5 is the one that matters and it took me an hour.** **Mr Haddad would certainly mind finding out from the trade that we are negotiating a contract at four times our volume.** ⚠ **But it is not this fact and it is not his action here, which is moving a receipt** — **so it goes in a letter of its own, this week, about the thing itself.** ⚠ **The test tells you that a thing is core; it does not tell you it is core to *this* document.**',
  '⚠ **And item 2 is the whole justification for the test.** **Nothing about register, audience or action would have put a Saturday rota into a customer letter.** **One clause: *we may work the Saturday of the 20th to bring it forward and I will tell you on the 21st either way.*** ⚠ **Eighteen words, and Abu Yasser can now say anything he likes to her driver.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How was the test nearly used wrongly, and what does it actually ask?'));
out.push(item('2', 'What happens to item 5, and why?'));
out.push(item('3', 'Why is item 2 the justification for the test?'));
out.push(box('Writer\'s box', [
  '**The core and the doubtful items — four parts:** ⚠ **the three-part core, with the consequence written per reader** → ⚠ **a table of doubtful items and the discovery test** → ⚠ **the item where the test was nearly misused** → ⚠ **and the item that is core but not core to this document.**',
  '⚠ **Write the consequence three times, once per reader, and keep the figure and date the same.** **The core is not three identical sentences; it is one figure, one date and three consequences.**',
  '⚠ **Apply the test to *this fact*, not to everything the reader does not know.** ⚠ **Used loosely it turns every letter into a disclosure of everything** — **and three readers with twelve pages each read none of them.**',
  '⚠ **And distinguish *core* from *core to this document*.** ⚠ **A thing can pass the test and still belong in a different letter, about itself, with its own action** — **which is the right answer for anything large enough to have its own consequence.**',
  '⚠ **Keep the item that no reasoning about register would have found, and show your working.** ⚠ **A Saturday rota in a customer letter looks like a category error until you ask who sees whose driver every fortnight.**',
  '⚠ **One clause is enough for a tested item.** ⚠ *We may work the Saturday of the 20th to bring it forward and I will tell you on the 21st either way.* **Eighteen words, and the thing can no longer be discovered.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the core and the doubtful items for a fact at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE CORE, AND THE DOUBTFUL ______________. ______________. ______________.**   **The core, in all three.** ⚠ **The figure: ______________. The date: ______________. The consequence: for ______________, ______________; for ______________, ______________; for ______________, ______________.**   **1** ______________ | **no** | **out**   **2** ⚠ **______________** | ⚠ **yes — ______________** | ⚠ **in, in one clause**   **3** ⚠ **______________** | ⚠ **yes, but it has nothing to do with this** | ⚠ **out**   **4** ______________ | **no** | **out**   ⚠ **Item 3 is where I nearly used the test wrongly.** ⚠ **The test asks whether they would feel kept in the dark *about this*, not whether there is anything else they do not know.**   ⚠ **Item ______________ is core and is not core to this document.** **It goes in a letter of its own, because ______________.**   ⚠ **And item 2 is the justification for the test.** **Nothing about register or audience would have put ______________ into ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One figure, one date, three consequences', ''],
  ['The test applied to this fact, not to everything', ''],
  ['An item that is core but not core to this document', ''],
  ['An item the test found that register would not have', ''],
  ['Tested items kept to one clause', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the item the test found. ⚠ The class says who would have told the reader, and how soon.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you found out from somebody else that you should have been told (**200 to 240 words**). Say what it was, who should have told you, who did, what it changed about how you read them afterwards, and whether it was relevant to anything you had to do.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was it relevant to anything they had to do?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the thing irrelevant to anything the writer had to do? Usually two of three — ⚠ **and in all three it changed how they read the person afterwards, which is the cost the sender never sees.**'));
out.push(box('Homework', ['Write your final text. Then take something you are about to report, write the three-part core, and apply the discovery test to four things you were going to leave out (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.4 =======================
out.push(pb());
out.push(h2('6.4  The sentence that must be identical'));
out.push(p('**Function:** writing one load-bearing sentence and copying it   ·   **Grammar:** the sentence copied verbatim, not paraphrased   ·   **Pronunciation:** the same sentence read identically three times'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a sentence you have written twice in slightly different words. Say whether anybody compared them.'));
out.push(p('**b**  Are these the same? _The order will reach you on 2 May. · Delivery is expected in the first week of May. · The goods go out at the end of the month._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say about the three versions?   **A** they say the same thing   **B** they are three different promises   **C** they are too similar'));
out.push(p('**b**  Listen again. **1** Which is the load-bearing sentence? **2** What does he say about paraphrasing it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  "Copy it. Do not rewrite it."', [
  ['Bassel', 'Read me the delivery sentence from each of the three.'],
  ['Nour', '*The order will reach you on 2 May.* *Delivery is expected in the first week of May.* And for the yard: *out by the end of the month.*'],
  ['Bassel', '⚠ **Those are three different promises.**'],
  ['Nour', 'They are the same date.'],
  ['Bassel', '⚠ **_The 2nd of May_ is a day. _The first week of May_ is five days. _The end of the month_ is April.** ⚠ **You have written three dates and you believe you have written one.**'],
  ['Nour', 'The yard one is about dispatch and the others are about arrival.'],
  ['Bassel', '⚠ **Then say dispatch, and say arrival, and give both in all three.** ⚠ **Because the day Ms Tannous and Mr Haddad are in the same room, one of them has a Monday and one of them has a week.**'],
  ['Nour', 'So I write it once and copy it.'],
  ['Bassel', '⚠ **You write it once, and you copy it, and you do not improve it on the way.** ⚠ **That is the hard part: a writer rewriting the same sentence for a different reader cannot help making it fit the register** — **and the register is the three dials, and this sentence is not one of them.** ⚠ **So what is the sentence?**'],
  ['Nour', '*Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May.*'],
  ['Bassel', '⚠ **Then that is the sentence, word for word, in all three documents, and the rest of each letter can be as different as you like.**'],
  ['Nour', 'It will read oddly in the yard note. It is too formal.'],
  ['Bassel', '⚠ **It will read oddly to you.** ⚠ **The yard will read it as a date, which is what it is** — **and in eighteen months, when somebody puts the three documents side by side, that sentence is the only reason nobody is embarrassed.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The load-bearing sentence**',
  table(['', 'The three versions', 'What they actually say'], [
    ['**1**', '*the order will reach you on 2 May*', '**one day**'],
    ['**2**', '*delivery is expected in the first week of May*', '⚠ **five days, and *expected* is a hedge the first one does not have**'],
    ['**3**', '*out by the end of the month*', '⚠ **April — a different month from the other two**'],
    ['⚠ **the sentence**', '⚠ **_320 cartons leave here on 30 April and reach Beirut on 2 May._**', '⚠ **dispatch and arrival, both, in all three documents, word for word**'],
  ], [1.3, 3, 2.6]),
  '⚠ **Three versions of one date are three promises.** ⚠ **A day, five days, and a different month** — **and the writer believes they have written one date.**',
  '⚠ **Write it once, copy it, and do not improve it on the way.** ⚠ **That is the hard part: a writer rewriting the same sentence for a different reader cannot help making it fit the register** — **and the load-bearing sentence is not one of the dials.**',
  '⚠ **Put both events in it where there are two.** ⚠ **Dispatch and arrival, in all three** — **because one reader cares about one and another about the other, and a letter with only one of them invites a paraphrase.**',
  '⚠ **It will read oddly to you in at least one of the three, and it will not read oddly to the reader.** ⚠ **The yard reads it as a date, which is what it is.**',
  '⚠ **And the reason is a day that has not happened yet.** ⚠ **In eighteen months somebody will put the three documents side by side, and the copied sentence is the only reason nobody is embarrassed.**',
  '**Practise:** Take a fact you have written for two readers. Find the load-bearing sentence, write it once, and copy it into both.',
  '**Useful phrases:**  those are three different promises  ·  a day, five days, and a different month  ·  copy it, do not improve it  ·  it will read oddly to you  ·  side by side in eighteen months',
  '**Pronunciation – the same sentence three times.** 🔊 **Track 6.8** Listen to the load-bearing sentence read in the bank letter, the customer letter and the yard note. ⚠ **The surrounding register changes completely and the sentence does not change at all** — **same words, same stress, same speed.** **Read it four times without adjusting it.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads one sentence from each version; B tests whether they are the same.'));
out.push(dlg(null, [
  ['B', '⚠ **Read me the __________ sentence from each.**'],
  ['A', '__________. __________. __________.'],
  ['B', '⚠ **Those are three different __________.**'],
  ['A', 'They are the same __________.'],
  ['B', '⚠ **__________ is __________. __________ is __________. And __________ is __________.**'],
  ['A', 'So I write it once and copy it.'],
  ['B', '⚠ **And you do not improve it on the way. What is the sentence?**'],
  ['A', '__________.'],
  ['B', '⚠ **Word for word, in all three.**'],
]));
out.push(table(['Role card 1 — a day, five days, a different month', 'Role card 2 — the improved copy'], [[
  '*The order will reach you on 2 May* · *delivery is expected in the first week of May* · *out by the end of the month.* ⚠ **One day, five days, and April.** ⚠ **The sentence: *320 cartons leave here on 30 April and reach Beirut on 2 May*** — **dispatch and arrival, in all three.**',
  'A has the right sentence and ⚠ **has improved it in one of the three copies** — *a little* more formal, *a little* shorter, a hedge added for the nervous reader. **B puts the two side by side and reads both aloud.** ⚠ **A will defend the change as better writing, and it is**, **and it is a second promise.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three versions and what each actually says. ⚠ Then write the load-bearing sentence, and check it contains both events.'));
out.push(PHRASE_CARD(['three different promises', 'a day, five days, a month', 'copy it, do not improve it', 'both events in it', 'side by side in eighteen months']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take something you have written for two or more readers. Find and fix the load-bearing sentence.'));
out.push(table(['Version', 'What it says now', 'What it actually commits to', 'The copied sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.9, 1.8, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My three versions said _______, _______ and _______, which are _______, _______ and _______. The sentence is _______, and it goes in all of them word for word._'));
out.push(p('**Listener task:** count how many sets of versions contained three different commitments. ⚠ Then ask whether anybody had ever put their own versions side by side before today.'));
out.push(p('**Board clinic:** your teacher writes three sentence sets on the board — look for *expected* in one version and a flat future in another, and a sentence that gives dispatch in one and arrival in another. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SENTENCE. 17 April. N. Mansour. One sentence, three documents, word for word.**',
  '⚠ **_Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May._**',
  table(['', 'What I had written', 'What it committed to', 'What was wrong with it'], [
    ['**bank**', '*the April receipt will fall into the first week of May*', '**a five-day window, and no quantity at all**', '⚠ **a receipt is not a delivery; he would have dated his forecast from the wrong event**'],
    ['**customer**', '*your order will reach you on 2 May*', '**one day, arrival, 320 implied', '⚠ **no dispatch date, so she could not tell her own customer when to expect her**'],
    ['**yard**', '*out by the end of the month*', '⚠ **April, dispatch only, no quantity**', '⚠ **a different month from both the others**'],
  ], [1, 2.6, 2.3, 2.9]),
  '⚠ **The sentence is sixteen words and it took me three attempts, and the third attempt added the quantity.** **The first two said *the order* and *the April consignment*, and neither of them is a number.** ⚠ **In eighteen months nobody will remember what the April order was, and *three hundred and twenty cartons* will still be three hundred and twenty cartons.**',
  '⚠ **The bank version was the worst of the three and it is the one I was proudest of.** *The April receipt will fall into the first week of May.* ⚠ **A receipt is money and a delivery is cartons, and the two are not the same event** — **he pays about three weeks after delivery, so a 2 May delivery is a receipt in the third week of May, not the first.** ⚠ **I had written a date I had not calculated, in the one letter where the date is the only thing the reader uses.**',
  '⚠ **So the sentence goes in all three verbatim, and each letter then adds its own consequence beneath it.** **To the bank: *so the receipt falls in the third week of May and the 28 April instalment is unaffected.*** **To Ms Tannous: *and nothing will reach you in April.*** **To the yard: *and the Saturday question is whether we can bring the 30th forward.*** ⚠ **One sentence, three consequences, and the sentence is the only part that is not allowed to move.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long did the sentence take, and what did the third attempt add?'));
out.push(item('2', 'Why was the bank version the worst, and what had not been calculated?'));
out.push(item('3', 'What does each letter add beneath the sentence?'));
out.push(box('Writer\'s box', [
  '**The load-bearing sentence — four parts:** ⚠ **the sentence, at the top, alone** → ⚠ **a table of what you had written and what each version committed to** → ⚠ **the version that was worst and that you were proudest of** → ⚠ **and the consequence each document adds beneath it.**',
  '⚠ **Put a quantity in it.** ⚠ *The order* **and** *the April consignment* **are not numbers**, **and in eighteen months nobody will remember what the April order was while three hundred and twenty cartons will still be three hundred and twenty.**',
  '⚠ **Check that every version names the same *event*.** ⚠ **A receipt is money and a delivery is cartons** — **and a letter that converts one into the other without arithmetic has invented a date in the one document where the date is all the reader uses.**',
  '⚠ **Expect the worst version to be the one you were proudest of.** **It is usually the most formal one, because formality rewards a smooth phrase and a smooth phrase is where an uncalculated date hides.**',
  '⚠ **Then let each document add its own consequence *beneath* the sentence**, **not inside it.** ⚠ **One sentence, three consequences, and the sentence is the only part that is not allowed to move.**',
  '⚠ **And write it once before you write any of the three.** **A sentence extracted afterwards from three drafts is a compromise between them; a sentence written first is a commitment the three are built on.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the load-bearing sentence for something of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE SENTENCE. ______________. One sentence, ______________ documents, word for word.**   ⚠ **_______________._**   **______________** | ______________ | ______________ | ⚠ **______________**   **______________** | ______________ | ______________ | ⚠ **______________**   **______________** | ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **The sentence is ______________ words and it took me ______________ attempts, and the last one added ______________.** ⚠ **In ______________ nobody will remember ______________, and ______________ will still be ______________.**   ⚠ **The ______________ version was the worst and it is the one I was proudest of.** ______________. ⚠ **______________ is ______________ and ______________ is ______________, and the two are not the same event** — ⚠ **I had written a date I had not calculated, in the one letter where the date is the only thing the reader uses.**   ⚠ **So the sentence goes in all of them verbatim, and each adds its own consequence beneath it.** **To ______________: ______________. To ______________: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A quantity in the sentence', ''],
  ['Every version naming the same event', ''],
  ['The worst version identified, with what was uncalculated', ''],
  ['Each consequence beneath the sentence, not inside it', ''],
  ['The sentence written before the three documents', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sentence. ⚠ The class checks it for a quantity, a date and a named event — and anything missing is what the versions will disagree about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about two documents of your workplace\'s that disagree (**200 to 240 words**). Say what each says, who wrote them, whether anybody has noticed, what the one sentence should have been, and what it would cost if the two were compared.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _has anybody put the two side by side?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has nobody put the two documents side by side? Usually all three — ⚠ **and in two of three the two were written by the same person in the same week.**'));
out.push(box('Homework', ['Write your final text. Then take two documents of yours about one fact, find the sentence they both need, write it once with a quantity and a named event in it, and copy it into both without improving it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.5 =======================
out.push(pb());
out.push(h2('6.5  When the three readers compare notes'));
out.push(p('**Function:** writing for the day they talk to each other   ·   **Grammar:** _as I wrote to X on the_ — the cross-reference that survives   ·   **Pronunciation:** reading two of your own documents aloud one after the other'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say two people at or outside your work who know each other and whom you write to separately. Say where they meet.'));
out.push(p('**b**  Which survives a comparison? _I told the bank the receipt moves and the customer that delivery moves. · Both letters carry the same sentence and both say I have written to the other._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Mr Attar say the comparison will happen?   **A** in a meeting   **B** at the Damascus trade fair in September   **C** in writing'));
out.push(p('**b**  Listen again. **1** What does he say the two readers will compare? **2** What is the cross-reference for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  "They will be in the same room in September"', [
  ['Mr Attar', 'Mr Dallal and Mr Haddad will both be at the trade fair in September. Had you thought about that?'],
  ['Nour', 'They do not know each other.'],
  ['Mr Attar', '⚠ **Mr Haddad banks four of the six Syrian firms exhibiting and Mr Dallal buys from three of them.** ⚠ **They will know each other by the second morning.**'],
  ['Nour', 'And what will they compare?'],
  ['Mr Attar', '⚠ **Not your letters. Nobody carries letters to a trade fair.** ⚠ **They will compare two sentences each of them remembers**, **and the remembered sentence is always a number and a date.**'],
  ['Nour', 'So the numbers have to agree.'],
  ['Mr Attar', '⚠ **The numbers have to be the same numbers.** **Which 6.4 does.** ⚠ **And there is a second thing, which 6.4 does not do.**'],
  ['Nour', 'Which is?'],
  ['Mr Attar', '⚠ **Each of them has to know that you wrote to the other.** ⚠ *As I wrote to Ms Tannous on the 16th.* **Six words in the bank letter.**'],
  ['Nour', 'Why does the bank care who else I wrote to?'],
  ['Mr Attar', '⚠ **He does not care now. He cares in September.** ⚠ **A man who learns at a trade fair that you also wrote to the buyer feels managed; a man who already knew feels informed.** **Same fact, two different readings of you, and the difference is six words written in April.**'],
  ['Nour', 'And if the two letters do say different things?'],
  ['Mr Attar', '⚠ **Then the cross-reference is the worst thing you could have written, because it points at the discrepancy.** ⚠ **Which is why the cross-reference goes in last, after the sentence is identical** — **and if you cannot make them identical, do not write the cross-reference and do not send the letters either.**'],
  ['Nour', 'That is a strong rule.'],
  ['Mr Attar', '⚠ **It is the only one in this unit I would call a rule.** **Two documents about one fact that cannot carry a cross-reference to each other are two documents that should not both exist.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing for the comparison**',
  table(['', 'What happens', 'What to write'], [
    ['**where**', '⚠ **a trade fair, a waiting room, a wedding** — **not a meeting**', '—'],
    ['**what is compared**', '⚠ **not the letters — two remembered sentences, and the remembered sentence is a number and a date**', '**the load-bearing sentence, identical (6.4)**'],
    ['⚠ **the second thing**', '⚠ **each reader learns that you also wrote to the other**', '⚠ *as I wrote to Ms Tannous on the 16th* — **six words**'],
    ['⚠ **the rule**', '⚠ **the cross-reference points at any discrepancy**', '⚠ **so it goes in last, and if the sentences are not identical, do not send either letter**'],
  ], [1.4, 3.1, 2.6]),
  '⚠ **The comparison does not happen in a meeting and nobody carries letters to it.** ⚠ **Two people compare two remembered sentences, and a remembered sentence is a number and a date.**',
  '⚠ **Tell each reader that you wrote to the other.** ⚠ *As I wrote to Ms Tannous on the 16th.* **Six words.** ⚠ **A man who learns at a trade fair that you also wrote to the buyer feels managed; a man who already knew feels informed** — **same fact, two readings of you.**',
  '⚠ **The cross-reference goes in last.** ⚠ **If the two letters say different things it is the worst sentence you could have written, because it points at the discrepancy** — **so write it only after the load-bearing sentence is identical.**',
  '⚠ **And the rule, which is the only one in this unit:** ⚠ **two documents about one fact that cannot carry a cross-reference to each other are two documents that should not both exist.**',
  '⚠ **Think about where they meet, not whether.** **Four of six firms banked by one man and three of them selling to another is not a coincidence; it is a trade.**',
  '**Practise:** Name two readers who will meet. Say where, what sentence each will remember, and write the six-word cross-reference for each letter.',
  '**Useful phrases:**  they will know each other by the second morning  ·  nobody carries letters to a trade fair  ·  two remembered sentences  ·  a man who already knew feels informed  ·  it goes in last',
  '**Pronunciation – two of your own documents, one after the other.** 🔊 **Track 6.10** Listen to the load-bearing sentence read from the bank letter and then from the customer letter, with the surrounding lines. ⚠ **Read aloud in sequence, a discrepancy is audible in about four seconds** — **and read silently, side by side, it is not.** **Read two of your own aloud, one after the other.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names two readers; B works out where they meet and what is compared.'));
out.push(dlg(null, [
  ['A', 'I write to __________ and to __________. They do not know each other.'],
  ['B', '⚠ **Where would they meet?**'],
  ['A', '…__________.'],
  ['B', '⚠ **And what will they compare?**'],
  ['A', 'The letters.'],
  ['B', '⚠ **Nobody carries letters to __________. Two remembered sentences, and a remembered sentence is __________.**'],
  ['A', 'So __________ has to be the same in both.'],
  ['B', '⚠ **And the second thing. Each of them has to know __________.**'],
  ['A', '⚠ **As I wrote to __________ on __________.**'],
  ['B', '⚠ **And that goes in last. Why?**'],
  ['A', '⚠ Because if the two say different things, it __________.'],
]));
out.push(table(['Role card 1 — the trade fair in September', 'Role card 2 — the cross-reference that should not be written'], [[
  '⚠ **Mr Haddad banks four of the six Syrian firms exhibiting; Mr Dallal buys from three of them.** ⚠ **They will know each other by the second morning**, **and they will compare two remembered sentences — a number and a date.** ⚠ **Six words in each letter: *as I wrote to the other on the 16th.***',
  'A has two letters whose load-bearing sentences are **not** identical. ⚠ **B asks A to write the cross-reference.** ⚠ **A will see at once that it points straight at the discrepancy.** **Then B applies the rule: two documents about one fact that cannot carry a cross-reference to each other are two documents that should not both exist.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write where the two readers will meet and the sentence each will remember. ⚠ Then write both cross-references, and say which letter they go in last.'));
out.push(PHRASE_CARD(['by the second morning', 'nobody carries letters', 'two remembered sentences', 'already knew, feels informed', 'it goes in last']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** pairs of readers at your work. Work out the comparison for each.'));
out.push(table(['The two readers', 'Where they meet', 'The sentence each remembers', 'The cross-reference'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I write to _______ and _______. They meet at _______. Each will remember _______. And the cross-reference is _______._'));
out.push(p('**Listener task:** count the pairs who turned out to meet somewhere nobody had thought about. ⚠ Then ask how many of the room have ever written a cross-reference of this kind.'));
out.push(p('**Board clinic:** your teacher writes three pairs on the board — look for a cross-reference written before the sentences were made identical, and two readers assumed not to know each other in a trade of six firms. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SEPTEMBER. 18 April. N. Mansour. Written before the three letters go out, and not sent to anybody.**',
  table(['', 'Who meets whom, and where', 'What each will remember', 'Do they agree?'], [
    ['**1**', '⚠ **Mr Haddad and Mr Dallal, Damascus trade fair, September** — **he banks four of the six Syrian exhibitors and Mr Dallal buys from three**', '⚠ **_320 cartons, 2 May_ — both, because it is the same sentence**', '⚠ **yes, since the 17th**'],
    ['**2**', '**Ms Tannous and Mr Dallal, continuously** — **he is her customer**', '⚠ **_320 cartons, 2 May_, and that we may work a Saturday**', '⚠ **yes — and the Saturday is in her letter because of 6.3**'],
    ['**3**', '⚠ **Abu Yasser and Ms Tannous\'s driver, every fortnight at our gate**', '⚠ **whether the Saturday happened**', '⚠ **yes, if I write to her on the 21st either way, which I have undertaken to do**'],
    ['**4**', '**Mr Haddad and Mr Attar, four times a year, professionally**', '**the 28 April instalment', '**yes'],
  ], [0.4, 3, 2.4, 2.2]),
  '**The cross-references, written last, after the sentence was identical:**  ⚠ **To the bank: _as I wrote to Ms Tannous on the 16th._**  **To Ms Tannous: _as I have told the bank._**  ⚠ **To the yard: nothing, because the yard is us.**',
  '⚠ **Row 3 is the one that is not about documents at all and it is the most likely of the four.** **Abu Yasser sees her driver at our own gate every fortnight.** ⚠ **A letter cannot reach that conversation** — **the only thing that reaches it is the undertaking in her letter to tell her on the 21st either way**, **and then whatever Abu Yasser says to the driver on the 23rd is consistent with something she has already had in writing.**',
  '⚠ **Row 1 is the one I had thought was impossible and it took one question to destroy.** **I said they did not know each other.** ⚠ **Mr Attar pointed out that Mr Haddad banks four of the six Syrian firms at that fair and Mr Dallal buys from three** — **which is not a coincidence, it is a trade.** ⚠ **In a trade of six firms, every pair of readers knows every other pair, and the only question is which month.**',
  '⚠ **And this page is not sent to anybody**, **which is the point of writing it.** **It is four rows and it took twenty minutes, and it changed one sentence in one letter and added two cross-references.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row is not about documents, and what reaches that conversation?'));
out.push(item('2', 'What destroyed the assumption in row 1?'));
out.push(item('3', 'What did this page change, and how long did it take?'));
out.push(box('Writer\'s box', [
  '**Writing for the comparison — four parts:** ⚠ **a table: *who meets whom and where · what each will remember · do they agree*** → ⚠ **the cross-references, written last** → ⚠ **the row that is a conversation and not a document** → ⚠ **and what the page changed.**',
  '⚠ **Name the place and the month, not just the pair.** ⚠ *The Damascus trade fair in September · at our own gate every fortnight · four times a year, professionally.* **A comparison with no place attached is a worry; one with a place is a date.**',
  '⚠ **Put *what each will remember* in its own column, and keep it to a number and a date.** **Nobody remembers a paragraph.** **If the two remembered sentences differ, the letters differ, whatever the rest of them says.**',
  '⚠ **Write the cross-references last, and write *nothing* where none is needed.** ⚠ **The yard is us.**',
  '⚠ **Find the row that is a conversation rather than a document.** ⚠ **A letter cannot reach two drivers at a gate** — **only an undertaking can, and the undertaking has to be in writing to the person who will hear it second-hand.**',
  '⚠ **And do not send this page.** **It is working paper, it takes twenty minutes, and its whole output is one changed sentence and two cross-references** — **which is a good return for twenty minutes.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the comparison page for something of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. Written before the letters go out, and not sent to anybody.**   **1** ⚠ **______________, at ______________, in ______________** | ⚠ **______________** | ⚠ **______________**   **2** ______________ | ⚠ **______________** | ______________   **3** ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   **The cross-references, written last, after the sentence was identical:** ⚠ **To ______________: _as I wrote to ______________ on ______________._** **To ______________: _______________._** ⚠ **To ______________: nothing, because ______________.**   ⚠ **Row ______________ is not about documents at all and it is the most likely of the ______________.** ⚠ **A letter cannot reach that conversation** — **the only thing that reaches it is ______________.**   ⚠ **Row 1 is the one I had thought was impossible and it took one question to destroy.** ⚠ **______________, which is not a coincidence, it is a trade.**   ⚠ **And this page is not sent to anybody.** **It took ______________ and it changed ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A place and a month for every pair', ''],
  ['*What each will remember*, kept to a number and a date', ''],
  ['Cross-references written last, with *nothing* where none is needed', ''],
  ['A row that is a conversation rather than a document', ''],
  ['What the page changed, and how long it took', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their conversation row. ⚠ The class says what written undertaking would reach it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about two people who compared what you had told them (**200 to 240 words**). Say who they were, where they met, what they compared, whether it agreed, and what it cost or saved.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _had the writer expected them to meet?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the writer not expected them to meet? Usually all three — ⚠ **and in two of three the meeting was at a place anybody could have named in advance.**'));
out.push(box('Homework', ['Write your final text. Then take two readers you write to separately, name where and when they will meet, and write the six-word cross-reference for each letter (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.6 =======================
out.push(pb());
out.push(h2('6.6  Writing the three in one sitting'));
out.push(p('**Function:** the discipline of doing it once   ·   **Grammar:** the order of work — sentence, cores, dials, cross-references   ·   **Pronunciation:** reading three documents aloud in sequence as a check'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say how long you would expect three letters about one fact to take. Say whether you have ever written them together.'));
out.push(p('**b**  Which order is right? _write the easiest first and adapt it · write the sentence first, then the three cores, then the dials, then the cross-references_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long does the whole thing take?   **A** a morning   **B** about forty minutes, after the first time   **C** three days'));
out.push(p('**b**  Listen again. **1** What goes wrong if you write them on different days? **2** What is the last five minutes for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  "Forty minutes, and not on three days"', [
  ['Nadia', 'How long did the three letters take you?'],
  ['Nour', 'Three days. I wrote the bank one on Tuesday, Ms Tannous on Wednesday and the yard on Thursday morning.'],
  ['Nadia', '⚠ **Which is why the sentence was different in all three.** ⚠ **On Wednesday you could not remember Tuesday\'s wording and you did not look, because you thought you were writing a different letter.**'],
  ['Nour', 'I was writing a different letter.'],
  ['Nadia', '⚠ **You were writing three documents about one fact, which is one job.** ⚠ **Split it over three days and you do the job three times and get three answers.**'],
  ['Nour', 'So in one sitting. In what order?'],
  ['Nadia', '⚠ **Four steps and they are not negotiable.** ⚠ **One: the sentence, written once, with the quantity and the dates in it.** ⚠ **Two: the three cores — the figure, the date and the consequence for each reader. ⚠ **Three: the dials — formality, distance, detail, and hedging left where the truth is.** ⚠ **Four: the cross-references, last.**'],
  ['Nour', 'And how long?'],
  ['Nadia', '⚠ **Forty minutes, after the first time.** **Fifteen on the sentence, because the sentence is the work. Five on each core. Ten on the dials. Five on the cross-references.**'],
  ['Nour', 'The sentence took me three attempts and an hour.'],
  ['Nadia', '⚠ **It took an hour because you wrote it fourth instead of first.** ⚠ **You extracted it from three drafts, which is a compromise between them.** **Written first, it is a commitment the three are built on, and it takes fifteen minutes.**'],
  ['Nour', 'And the last five minutes?'],
  ['Nadia', '⚠ **Read all three aloud, one after the other, in one go.** ⚠ **A discrepancy is audible in four seconds and invisible on a desk.** **That is the whole check, and it is the only one that works.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four steps, forty minutes, one sitting**',
  table(['Step', 'What', 'Minutes'], [
    ['**1**', '⚠ **the load-bearing sentence, once, with a quantity and both dates** — **this is the work**', '**15**'],
    ['**2**', '**the three cores: figure, date, and the consequence for each reader**', '**5 each**'],
    ['**3**', '**the dials: formality, distance, detail — and hedging left where the truth is**', '**10**'],
    ['**4**', '⚠ **the cross-references, last, after the sentence is identical**', '**5**'],
    ['⚠ **the check**', '⚠ **read all three aloud, one after the other, in one go**', '⚠ **in the last 5**'],
  ], [0.6, 4.2, 1.2]),
  '⚠ **Three documents about one fact is one job.** ⚠ **Split over three days you do the job three times and get three answers** — **because on the second day you cannot remember the first day\'s wording and you do not look, since you think you are writing a different letter.**',
  '⚠ **The sentence is written first or it takes an hour.** ⚠ **Extracted from three drafts it is a compromise between them; written first it is a commitment the three are built on.**',
  '⚠ **The order is not negotiable: sentence · cores · dials · cross-references.** **Each step is impossible before the one above it** — **you cannot set a detail dial before you know what the reader\'s consequence is, and you cannot write a cross-reference before the sentence is fixed.**',
  '⚠ **Ten minutes for all three sets of dials, together.** **Dials are a comparison, and a comparison cannot be done one document at a time.**',
  '⚠ **And the check is reading all three aloud in sequence.** ⚠ **A discrepancy is audible in four seconds and invisible on a desk.** **It is the only check that works and it costs five minutes.**',
  '**Practise:** Take a fact and three readers. Do the four steps in order, timing yourself, and read all three aloud at the end.',
  '**Useful phrases:**  that is one job  ·  three times, three answers  ·  the sentence is the work  ·  a compromise between three drafts  ·  audible in four seconds',
  '**Pronunciation – three documents in sequence.** 🔊 **Track 6.12** Listen to three short documents read one after the other with no pause between them. ⚠ **In the first set the load-bearing sentence recurs identically three times and the effect is slightly monotonous and entirely reassuring.** ⚠ **In the second set it is paraphrased once, and you will hear it.** Read three of your own aloud in sequence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes how they wrote something; B imposes the four steps.'));
out.push(dlg(null, [
  ['B', '⚠ **How long did __________ take you?**'],
  ['A', '__________. I wrote __________ on __________ and __________ on __________.'],
  ['B', '⚠ **Which is why __________ was different in all of them.**'],
  ['A', 'They were different letters.'],
  ['B', '⚠ **They were ______________ about one fact, which is one job. Four steps. What is the first?**'],
  ['A', '⚠ **The sentence, once, with __________ in it.**'],
  ['B', '⚠ **Then?**'],
  ['A', 'The cores. Then the dials. ⚠ **Then the cross-references, last.**'],
  ['B', '⚠ **And the last five minutes?**'],
  ['A', '⚠ **Read all three aloud, one after the other.**'],
]));
out.push(table(['Role card 1 — three days, three answers', 'Role card 2 — the sentence written fourth'], [[
  '⚠ **A wrote three letters on three days and the load-bearing sentence came out differently in each.** ⚠ **B names the cause: on the second day you cannot remember the first day\'s wording and you do not look.** **Then the four steps, in order, and forty minutes.**',
  'A wrote the three drafts first and then tried to find the common sentence. ⚠ **B asks how long the sentence took.** ⚠ **An hour, and three attempts** — **because it was extracted from three drafts and is a compromise between them.** ⚠ **Written first it is fifteen minutes and it is a commitment.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four steps with their minutes. ⚠ Then say what the last five minutes are for, and why it has to be aloud.'));
out.push(PHRASE_CARD(['that is one job', 'three times, three answers', 'the sentence is the work', 'the cross-references last', 'audible in four seconds']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take one fact and three readers. Do the four steps, and time each one.'));
out.push(table(['Step', 'What I wrote', 'Minutes taken'], [['**1 the sentence**', '', ''], ['**2 the three cores**', '', ''], ['**3 the dials**', '', ''], ['**4 the cross-references**', '', ''], ['**the check, aloud**', '', '']], [1.5, 3.5, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence took _______ minutes. The three cores took _______. The dials took _______. The cross-references took _______. And reading them aloud found _______._'));
out.push(p('**Listener task:** count how many people the aloud check caught something in. ⚠ Then ask how many of those things would have been found by reading silently.'));
out.push(p('**Board clinic:** your teacher writes three work orders on the board — look for a sentence written fourth, and dials set one document at a time. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SECOND TIME. 19 April. N. Mansour. One fact, three documents, forty-one minutes, timed.**',
  table(['', 'Step', 'What it produced', 'Minutes'], [
    ['**1**', '⚠ **the sentence**', '⚠ **_Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May._** — **one attempt, because I had the quantity and both dates before I started**', '**14**'],
    ['**2**', '**the three cores**', '**bank: the receipt falls in the third week of May · Tannous: nothing arrives in April · yard: two weeks to make up**', '**6, 4, 3**'],
    ['**3**', '**the dials, all three together**', '⚠ **formality high/medium/low · distance high/low/lowest · detail low/medium/highest · hedging _will_ in all three**', '**9**'],
    ['**4**', '**the cross-references**', '*as I wrote to Ms Tannous on the 16th* · *as I have told the bank* · **nothing for the yard**', '**4**'],
    ['⚠ **check**', '⚠ **all three read aloud, in sequence**', '⚠ **caught one thing: the yard note said *the Tannous order* and the other two said *320 cartons***', '**5**'],
  ], [0.5, 1.6, 4.4, 1.1]),
  '⚠ **Forty-one minutes, against three days the first time, and the first time produced three different dates.**',
  '⚠ **The sentence took fourteen minutes and one attempt, and the reason is the whole lesson.** **I had the quantity and both dates in front of me before I wrote a word, because I had worked them out for 6.4.** ⚠ **A sentence takes an hour when you are deciding the facts while you write it, and fourteen minutes when the facts are decided.**',
  '⚠ **The check caught exactly one thing, and it was small and real.** **The yard note said *the Tannous order* where the others said *320 cartons*.** ⚠ **Nobody in the yard would have been confused.** **But the yard note goes into the same file as the other two, and in eighteen months *the Tannous order* is not a quantity.**',
  '⚠ **And step 3 took nine minutes for all three because the dials are a comparison.** **Setting them one document at a time took me most of a day in the first version and produced the hedging error** — ⚠ **because you cannot see that the bank has *will* and the yard has *should* unless the two are in front of you at the same moment.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long did the second attempt take, and what did the first produce?'));
out.push(item('2', 'Why did the sentence take fourteen minutes instead of an hour?'));
out.push(item('3', 'What did the aloud check catch, and why does it matter?'));
out.push(box('Writer\'s box', [
  '**One sitting, timed — four parts:** ⚠ **a table: *step · what it produced · minutes*** → ⚠ **the comparison with the untimed version** → ⚠ **what the check caught** → ⚠ **and why the dials are done together.**',
  '⚠ **Record the minutes.** **Not to be brisk** — ⚠ **because the numbers are the argument for doing it this way next time**, **and *forty-one minutes against three days* persuades where a method does not.**',
  '⚠ **Have the facts in front of you before step 1.** ⚠ **A sentence takes an hour when you are deciding the facts while you write it and fourteen minutes when the facts are decided.** **That is the real content of step 1, and the fifteen minutes is not thinking time, it is wording time.**',
  '⚠ **Expect the aloud check to catch one small thing, and keep it even when it is harmless.** ⚠ *The Tannous order* **against** *320 cartons* **would confuse nobody today** — **and in eighteen months, in a file, it is not a quantity.**',
  '⚠ **Do all three sets of dials in one block.** ⚠ **A dial is a comparison and cannot be set one document at a time** — **you cannot see that the bank has *will* and the yard has *should* unless both are in front of you.**',
  '⚠ **And if the sentence takes more than twenty minutes, stop writing letters and go and find out the facts.** **That is not a failure of the method; it is the method telling you something.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write three documents in one sitting and record it (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. One fact, ______________ documents, ______________ minutes, timed.**   **1** ⚠ **the sentence** | ⚠ **_______________** — **______________ attempt(s)** | **______________**   **2** **the cores** | **______________** | **______________**   **3** **the dials, together** | ⚠ **______________** | **______________**   **4** **the cross-references** | ______________ | **______________**   ⚠ **check** | ⚠ **all read aloud, in sequence** | ⚠ **caught ______________** | **______________**   ⚠ **______________ minutes, against ______________ the first time, and the first time produced ______________.**   ⚠ **The sentence took ______________ and ______________ attempt(s), and the reason is the whole lesson.** ⚠ **A sentence takes an hour when you are deciding the facts while you write it, and ______________ when the facts are decided.**   ⚠ **The check caught exactly ______________, and it was small and real.** ⚠ **Nobody would have been confused today.** **But ______________, and in ______________ ______________.**   ⚠ **And step 3 took ______________ for all of them because the dials are a comparison.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Minutes recorded for every step', ''],
  ['A comparison with the untimed way of doing it', ''],
  ['The facts decided before step 1', ''],
  ['Something the aloud check caught, kept even if harmless', ''],
  ['The dials done in one block', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only what their aloud check caught. ⚠ The class says whether reading silently would have found it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a job at your work that is done three times because it is split up (**200 to 240 words**). Say what it is, how it is split, what goes wrong, how long it takes split and together, and why it has never been done in one sitting.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _why has it never been done in one sitting?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the reason that the parts belong to different days rather than different people? Usually two of three — ⚠ **and in all three nobody has ever timed it either way.**'));
out.push(box('Homework', ['Write your final text. Then do one fact for two readers in one sitting, in the four steps, timed, and read both aloud at the end (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review & Mediate: the reader who actually read it'));
out.push(p('**Function:** finding out who read what you wrote   ·   **Review:** the four dials · the action · the core and the test · the identical sentence · the comparison · one sitting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the four dials, and which one is set by the truth alone?',
  '**2** What do you do with a document whose reader has no action?',
  '**3** What are the three parts of the core, and what is the discovery test?',
  '**4** Why is the load-bearing sentence copied and not rewritten?',
  '**5** Where does the comparison actually happen, and what is compared?',
  '**6** Why must the three be written in one sitting, and in what order?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who read the bank letter?   **A** Mr Haddad   **B** the credit committee, and Mr Haddad only after them   **C** nobody'));
out.push(p('**b**  Listen again. **1** What did the committee want that Mr Haddad did not? **2** What does Mr Haddad say about the cross-reference?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  "It went to the committee first"', [
  ['Mr Haddad', 'Your letter of the 16th. I should tell you that I did not read it first.'],
  ['Nour', 'Who did?'],
  ['Mr Haddad', '⚠ **The credit committee.** **Anything that moves a receipt by more than a month goes to them before it comes to me.** ⚠ **I have never told you that, and there is no reason you would know.**'],
  ['Nour', 'Then I wrote it for the wrong reader.'],
  ['Mr Haddad', '⚠ **You wrote it for me and it survived them, which is luck and is also three things you did.** ⚠ **The quantity was in it. The two dates were in it. And the instalment sentence was in the first three lines.**'],
  ['Nour', 'What did they want that you would not have?'],
  ['Mr Haddad', '⚠ **They wanted to know who else had been told.** ⚠ **A committee reading one letter about a delay always asks whether the customer knows**, **because a supplier who tells a bank before a customer is a supplier in trouble.**'],
  ['Nour', '*As I wrote to Ms Tannous on the 16th.*'],
  ['Mr Haddad', '⚠ **Six words, and they are the reason this did not come back to you as a list of questions.** ⚠ **I would not have needed them. They did.**'],
  ['Nour', 'I nearly left them out. They felt like showing off.'],
  ['Mr Haddad', '⚠ **They are the only sentence in the letter written for a reader you did not know existed**, **and you wrote it for a trade fair in September.**'],
  ['Nour', 'How many of your customers write for the committee?'],
  ['Mr Haddad', '⚠ **None of them, because none of them knows about it.** ⚠ **Which means the letters that survive it survive by accident.** **Yours survived because you wrote for a comparison, and a committee is a comparison with four people in it.**'],
  ['Nour', 'Should I write differently now that I know?'],
  ['Mr Haddad', '⚠ **No. Write the same way and put the quantity, both dates and the instalment in the first three lines every time.** ⚠ **A document that survives a reader you have never met is a document written for what readers do, and not for who they are** — **which I believe is something you were told in a classroom.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the reader you did not know existed**',
  table(['What you assumed', 'What happened', 'What saved it'], [
    ['**the bank manager reads it**', '⚠ **the credit committee reads it first; anything moving a receipt more than a month goes to them**', '⚠ **the quantity, both dates, and the instalment in the first three lines**'],
    ['**he knows the context**', '⚠ **they have none at all**', '**the three-part core, which assumes no context**'],
    ['**the cross-reference is for September**', '⚠ **the committee asked who else had been told**', '⚠ *as I wrote to Ms Tannous on the 16th* — **six words**'],
    ['⚠ **the reason it survived**', '⚠ **it was written for an action and a comparison**', '⚠ **and a committee is a comparison with four people in it**'],
  ], [1.8, 2.5, 2.4]),
  '⚠ **The reader you wrote for is often not the reader who read it, and you will not be told.** ⚠ **Anything moving a receipt by more than a month goes to the credit committee, and nobody has ever mentioned it to a customer.**',
  '⚠ **A document written for what readers *do* survives a reader you have never met.** **A document written for who the reader *is* does not**, **because the new reader is somebody else.**',
  '⚠ **A committee has no context and asks the questions a person would not.** ⚠ **It always asks whether the customer knows, because a supplier who tells a bank before a customer is a supplier in trouble** — **and six words answer it.**',
  '⚠ **The cross-reference was written for a trade fair in September and was used by four people in April.** ⚠ **A sentence written for one comparison survives every comparison**, **which is the general case of 6.5 and the reason it is worth five minutes.**',
  '⚠ **And nobody writes for the hidden reader, because nobody knows about them.** ⚠ **So the letters that survive survive by accident** — **unless they were written for an action and a comparison, in which case they survive on purpose.**',
  '**Practise:** Find out who actually read something of yours. Ask what they wanted that you had not expected, and which sentence answered it.',
  '**Useful phrases:**  I did not read it first  ·  there is no reason you would know  ·  they wanted to know who else had been told  ·  written for a reader you did not know existed  ·  a committee is a comparison with four people in it',
  '**Pronunciation – being told your reader was somebody else.** 🔊 **Track 6.14** Listen to two replies to *I did not read it first.* ⚠ **The first is *who did?* — level, and short.** ⚠ **The second is *oh — I hope it was all right?*** **The second gets reassurance and no information; the first gets the committee.** Say *who did?* four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wrote something; B read it and is not the expected reader. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **B reveals that a committee read it first.** **A asks *who did?* and then *what did they want that you would not have?*** ⚠ **The answer is who else had been told** — **and the six-word cross-reference, written for a trade fair in September, answered it in April.**',
  'B is the expected reader and ⚠ **gives the information only in answer to an open question.** ⚠ **If A says *oh — I hope it was all right?*, B says it was fine** and nothing more. **Run it both ways and let A hear the difference between a question and a plea.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write who actually read it, what they wanted, and which sentence answered it. ⚠ Then say which cycle of this unit produced that sentence.'));
out.push(PHRASE_CARD(['who did?', 'no reason you would know', 'who else had been told', 'a reader you did not know existed', 'a comparison with four people in it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you three documents about one fact. Read them silently. Then explain them to **two** people: the reader each was written for, and one hidden reader.'));
out.push(table(['Who I told', 'What they wanted', 'Which sentence answered it', 'Which cycle produced it'], [['', '', '', ''], ['', '', '', '']], [1, 1.7, 1.9, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the three documents. This is the **sixth** unit of this book, and the unwritten thing is this: ⚠ **almost every document is read by somebody the writer has never heard of — a committee, a successor, a solicitor, a file — and nobody ever tells the writer, so the documents that survive those readers survive by luck, except the ones that were written for what a reader does and for the day two readers compare, which survive every reader because they were never written for a person at all.**'));
out.push(p('_The documents said _______. The expected reader wanted _______. The hidden reader wanted _______. The sentence that answered it was _______, and it came from _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a register · the irreducible core · a load-bearing sentence · to copy verbatim · a discrepancy between versions · to be forwarded_. ⚠ Thirty-six items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a document written for a named person\'s knowledge, and a reply to *I did not read it first* that asks for reassurance. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)', 10));
out.push(p('⚠ **This unit is Part 1: matching, and it is the second time in this book.** Read the five short texts **A–E**, then decide which text each statement **1–7** refers to. ⚠ **A text may be used more than once.**'));
out.push(box(null, [
  '**A** _Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May, so the receipt falls in the third week of May. The 28 April instalment is unaffected. As I wrote to Ms Tannous on the 16th._',
  '**B** _Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May, and nothing will reach you in April. Our plater was out of action for eleven days. We may work the Saturday of the 20th to bring it forward and I will tell you on the 21st either way._',
  '**C** _Three hundred and twenty cartons leave here on 30 April and reach Beirut on 2 May. The plater lost eleven days — a press bearing on the 2nd, the part from Homs, running again on the 13th. The question is the Saturday._',
  '**D** _For information only: no reply is needed. The arrangement with Ms Tannous runs twelve months from 1 May and nothing in the April position alters it._',
  '**E** _I did not read your letter first. Anything that moves a receipt by more than a month goes to the committee before it comes to me, and there is no reason you would have known that._',
], 'FFFFFF', C.navy));
out.push(p('**1** This text gives the most detail about the cause.   **2** This text tells its reader that no action is required.   **3** This text undertakes to write again on a particular date.   **4** This text says that somebody else has already been told.   **5** This text explains that the writer was not the first reader.   **6** This text is addressed to somebody inside the writer\'s own firm.   **7** This text answers a question about a payment going the other way.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — 120 to 140 words, 20 marks.** **This unit\'s genre is correspondence**, which is what Part 2 asks for about half the time; **the other half is a report or a proposal.**',
  '⚠ **A letter at 130 words has room for exactly four things**: **the load-bearing sentence · the consequence for this reader · enough cause in nine words · and the undertaking or cross-reference.** **That is the shape, and it is the shape of letter B above.**',
  '⚠ **Put the load-bearing sentence first and do not open with the cause.** ⚠ *Our plater was out of action for eleven days* **is an opening that makes a reader wait for the date**, **and the date is what they are reading for.**',
  '⚠ **One undertaking, with a date on it.** ⚠ *I will tell you on the 21st either way.* **It is the only sentence in a delay letter that a reader can plan around**, **and *either way* is the half that makes it worth anything.**',
  '⚠ **Part 1 tip, for the matching above.** **Read the statement, then hunt — and notice that three of the five texts open with the same sentence.** ⚠ **In Part 1 the texts are deliberately similar, so a statement is almost never answered by the thing they share**; **it is answered by the one clause only one of them has.** ⚠ **Hunt for the difference, not for the subject.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Something at your workplace has been delayed and a customer must be told. Write a **letter** (**120 to 140 words**). Give **the load-bearing sentence with a quantity and both dates**, **the consequence for this reader**, **the cause in about nine words**, and **one undertaking with a date on it**.'));
out.push(p('**Dear ______________,**   ⚠ **______________ leave here on ______________ and reach ______________ on ______________.** **______________ will reach you in ______________.**   **______________ was ______________ for ______________.**   ⚠ **______________, and I will tell you on ______________ either way.**   **______________. As I ______________ on ______________.**   **Yours ______________,**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The load-bearing sentence first, with a quantity and both dates', ''],
  ['The consequence for this reader', ''],
  ['Cause in about nine words, and no more', ''],
  ['One undertaking, with a date and *either way*', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something of yours that was read by somebody you had never heard of (**200 to 240 words**). Say what it was, who read it, how you found out, what they wanted, and which sentence saved it.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask one person outside your workplace who reads your letters before they do, and write down what you learn (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Three hundred and twenty cartons ___ here on 30 April.   a) leaves   b) leave   c) leaving',
  '2  The 28 April instalment ___ unaffected.   a) are   b) be   c) is',
  '3  You will need ___ the April receipt into May.   a) move   b) to move   c) moving',
  '4  She needs one date ___ one date.   a) for giving   b) to give   c) give',
  '5  The sentence goes in all three ___ for word.   a) word   b) a word   c) words',
  '6  If they found it out from somebody else, they ___ feel kept in the dark.   a) will   b) would   c) had',
  '7  Detail is set by what the reader ___, not by how senior they are.   a) do   b) doing   c) does',
  '8  I had written a date I ___.   a) did not calculate   b) had not calculated   c) have not calculated',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 6.15** Listen to a bank manager explain what happened to a letter. Complete the note.   Who read it first: ______   What goes to them: ______   Why the writer did not know: ______   What they wanted that he would not have: ______   The six words that answered it: ______   What the letter was actually written for: ______'));
out.push(p('**C  Reading.** Read the sentence page at 6.4 again. Why was the bank version the worst of the three, and what had the writer not calculated?'));
out.push(p('**D  Writing.** Take one fact and two readers. Write the load-bearing sentence once with a quantity and both dates, then the consequence for each reader beneath it, then the two cross-references (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Mr Haddad', 'Your letter of the 16th. ⚠ **I did not read it first.**'],
  ['Nour', 'Who did?'],
  ['Mr Haddad', '⚠ **The credit committee.** ⚠ **Anything that moves a receipt by more than a month goes to them before it comes to me.** **I have never told you that, and there is no reason you would know.**'],
  ['Nour', 'What did they want that you would not have?'],
  ['Mr Haddad', '⚠ **They wanted to know who else had been told.** ⚠ **A committee reading one letter about a delay always asks whether the customer knows, because a supplier who tells a bank before a customer is a supplier in trouble.**'],
  ['Nour', '*As I wrote to Ms Tannous on the 16th.*'],
  ['Mr Haddad', '⚠ **Six words, and they are the reason it did not come back to you as a list of questions.** ⚠ **I would not have needed them. They did.**'],
  ['Nour', 'I nearly left them out. They felt like showing off.'],
  ['Mr Haddad', '⚠ **They are the only sentence in the letter written for a reader you did not know existed** — ⚠ **and you wrote it for a trade fair in September.**'],
  ['Nour', 'Should I write differently now that I know?'],
  ['Mr Haddad', '⚠ **No. Put the quantity, both dates and the instalment in the first three lines every time.** ⚠ **A document that survives a reader you have never met is a document written for what readers do and not for who they are.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**6.1** set four register dials separately, and leave hedging where the truth is',
  '**6.2** write for the action, answer the question before it is asked, and subtract a reader',
  '**6.3** build a three-part core, and apply the discovery test to what you were going to leave out',
  '**6.4** write one load-bearing sentence with a quantity in it, and copy it without improving it',
  '**6.5** write for the day two readers compare notes, and put the cross-reference in last',
  '**6.6** do the four steps in one sitting, in order, and read all three aloud',
  '**6.7** find out who actually read what you wrote, and what they wanted that you did not expect',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Next: the **Mid-Book Test**, covering Units 1–6 — sixty marks, thirty questions, and four papers weighted equally, as the examination weights them._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
module.exports = out;
