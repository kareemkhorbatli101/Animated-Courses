// Proactive Business English B1 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a programme · a milestone · a critical date · a slot · a window · to block out · to pencil in · to firm up · provisional · confirmed in writing · an arrangement · a commitment date · to bring forward · to put back · a lead date · a sailing · a booking reference · an itinerary · a running order · a handover point · a dependency · to run to time · to slip · slack · a float · a task owner · to diarise · a standing slot · a cut-off · to flag';
const BACK_AT_B1 = 'arrange · slot · commitment';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 13  Plans, Intentions and Arrangements'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**13.1**  say what is arranged, and show the evidence that it is',
  '**13.2**  say what you intend to do, and not pretend it is arranged',
  '**13.3**  give a diary: three appointments and one fixed point',
  '**13.4**  put arranged, intended and predicted side by side',
  '**13.5**  read a timetable, and say what sails whatever you do',
  '**13.6**  write a programme somebody else can run without you',
  '**13.7**  Review & Mediate: the programme nobody reads twice',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Book 2 starts here, and three things have changed', [
  '**The first one is a customer who cannot telephone the warehouse.** Ms Maysa Tannous buys for a trading house in Beirut, and on 6 January she asked for a trial consignment. Everything you write for her has to work in her hands, in another country, with nobody to ring and ask. ⚠ **That one fact is the whole of Book 2.** Every document in it — the programme, the forecast, the post-mortem, the claim, the bench page — is written for a reader who cannot come and look.',
  '**The second is Lina.** Lina Barakat started on 2 January as trainee administrator. In Book 1 you were the person being told; **in Book 2 you are the person explaining.** Every cycle 7 of this book has you handing something to somebody who must act on it, and Lina is usually that somebody.',
  '**The third is the figures.** You write **60 words or more** where you wrote 50, and **140 to 180** where you wrote 100 to 140. And the peer-review slip takes one more move: ⚠ **before you quote the criterion, name the reader you are being.** *I am reading this as the auditor.* *I am reading this as Lina on her fourth day.* The same page is good for one of those readers and useless for the other, and the writer cannot tell which you mean unless you say.',
], C.lyellow, C.orange));

// ======================= CYCLE 13.1 =======================
out.push(pb());
out.push(h2('13.1  It is arranged, and here is the evidence'));
out.push(p('**Function:** saying what is arranged   ·   **Grammar:** present continuous and _going to_, with the evidence   ·   **Pronunciation:** the weak _\'re_ in _we\'re loading_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things that are arranged at your work this week. For each one, say what the evidence is: a booking, a signature, a confirmation, somebody\'s word.'));
out.push(p('**b**  Which of these is arranged, and which is only intended? _We are loading on the 11th. · We are going to load on the 11th. · We plan to load on the 11th. · I think we will load on the 11th._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask for?   **A** a date   **B** the evidence behind each date   **C** a lower price'));
out.push(p('**b**  Listen again. **1** How many of the five dates turn out to be arranged? **2** What does he say the word _arranged_ costs?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  "Which of these is actually arranged?"', [
  ['Nour', 'The Tannous trial. We are collecting the cartons from Ms Shamsi on the 8th, we are packing on the 9th and the 10th, Fadi is driving down on the 11th, it clears on the 12th and she puts it on the vessel on the 14th.'],
  ['Mr Ayoub', 'Say that again and after each one tell me what the evidence is.'],
  ['Nour', 'Collecting on the 8th — Ms Shamsi confirmed it by telephone yesterday.'],
  ['Mr Ayoub', 'Her word, then. Not nothing. Next.'],
  ['Nour', 'Packing the 9th and 10th — that is us, so it is arranged.'],
  ['Mr Ayoub', 'It is intended. Who is packing?'],
  ['Nour', '…Abu Yasser and Lina, except Lina is at the bank on the 9th.'],
  ['Mr Ayoub', 'So the 9th is half a day with one man. Next.'],
  ['Nour', 'Fadi driving on the 11th — that one is written in his sheet and he has read it.'],
  ['Mr Ayoub', 'Arranged. The 12th?'],
  ['Nour', 'Clearing on the 12th is what everybody says it takes.'],
  ['Mr Ayoub', 'That is a prediction wearing the clothes of an arrangement. And the 14th?'],
  ['Nour', 'The 14th is the vessel. It sails at 6.40 whether we are there or not.'],
  ['Mr Ayoub', '⚠ Then the 14th is the only one of the five that is a **fact**, and the only one you have not arranged. ⚠ **Write the evidence next to every date and the programme will tell you where it is going to break**, which is not the same question as whether the dates add up. They always add up. That is what a programme is for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Arranged, and the evidence that says so**',
  table(['Form', 'What it claims', 'Example'], [
    ['present continuous', '**arranged** — a time and the other party know', 'We **are collecting** the cartons on the 8th.'],
    ['_be going to_', '**decided**, not necessarily arranged with anybody', 'We **are going to pack** on the 9th.'],
    ['_plan to · intend to_', 'an **intention** and nothing more', 'We **plan to** clear on the 12th.'],
    ['_will_ + _I think_', 'a **prediction** about the world', 'I think it **will clear** on the 12th.'],
    ['present simple', 'a **timetable** — not yours to move', 'The vessel **sails** at 6.40 on the 14th.'],
  ], [1.4, 1.9, 2.1]),
  '⚠ **Write the evidence next to every date.** A booking reference, a signature, a confirmation in writing, somebody\'s word on the telephone, or **nothing** — and *nothing* is a legitimate entry that you must be willing to write.',
  '⚠ **The dates always add up.** A programme is not a sum; it is a list of claims of five different strengths, and the useful question is not *does it work* but **which of these will break first.**',
  '⚠ **Your own work is intended, not arranged**, until a named person has it in their sheet and has read it. *It is us, so it is arranged* is the commonest false claim in a programme, and it is the one nobody checks.',
  '⚠ *A prediction wearing the clothes of an arrangement* — _it clears on the 12th_ — is the dangerous entry, because it reads like the strongest line on the page and is the weakest.',
  '**Practise:** Take five dates from your own week. For each, say the form you would use and the evidence you hold. 1 something with a reference number 2 something somebody said on the telephone 3 something only you have decided 4 something you are guessing 5 something in a published timetable',
  '**Useful phrases:**  we\'re collecting on the 8th  ·  that is in his sheet and he has read it  ·  her word, then  ·  what is the evidence?  ·  it is intended, not arranged  ·  it sails whether we are there or not',
  '**Pronunciation – the weak _\'re_.** 🔊 **Track 13.2** Listen: _we\'re loading on the 11th_ — /wə/, almost nothing, and the stress falls on *loading* and *11th*. ⚠ A learner who says _we ARE loading_ sounds as though somebody has just denied it. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a programme; B asks for the evidence behind each date and names what each claim really is. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'We are __________ on the __________, we are __________ on the __________, and __________ on the __________.'],
  ['B', 'Say that again and after each one tell me the evidence.'],
  ['A', '__________ on the __________ — __________.'],
  ['B', '__________, then. Not nothing. Next.'],
  ['A', '__________ — that is us, so it is arranged.'],
  ['B', 'It is intended. Who is __________?'],
  ['A', '…__________, except __________.'],
  ['B', '⚠ And which of these is a fact you have not arranged?'],
]));
out.push(table(['Role card 1 — the trial consignment', 'Role card 2 — the stocktake'], [[
  'Five dates: collect (Ms Shamsi\'s word), pack (nobody named), drive (in Fadi\'s sheet, read), clear (what everybody says it takes), sail (6.40 on the 14th, published). ⚠ One is a fact, one is arranged, one is a word, one is an intention with nobody in it, and one is a guess dressed as a date.',
  'Four dates: count the fourth store (you intend to), get the figures typed (Lina, who does not know yet), get them signed (Nadia, who finishes at four exactly), send them to Mr Attar (he has asked for the 20th in writing). ⚠ Two have no named person in them at all.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the five dates and the evidence given for each, then rank them from strongest claim to weakest. ⚠ Then say which one you think will break first, and why that is not the weakest one.'));
out.push(PHRASE_CARD(['we\'re … on the 8th', 'what is the evidence?', 'her word, then', 'it is intended, not arranged', 'who is doing it?', 'it sails whatever we do']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** dates from something you are running at work. Write the form, the evidence, and what the claim really is.'));
out.push(table(['The date', 'How I would say it', 'The evidence I hold', 'What the claim really is'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.6, 1.6, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my five dates, _______ are arranged, _______ are intended and _______ is a fact I did not arrange. The evidence I am thinnest on is _______._'));
out.push(p('**Listener task:** count how many people in the room claimed their own work as arranged with nobody named in it. ⚠ It is usually most of the room, and it is usually the step that slips.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we will collect on the 8th, it is arranged_ and _we are going to load on the 11th, Fadi has confirmed_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**TANNOUS TRIAL CONSIGNMENT — THE FIVE DATES AND WHAT IS BEHIND THEM. 7 January. N. Mansour.**',
  table(['Date', 'The step', 'Said as', 'The evidence', 'What it really is'], [
    ['8 Jan', 'collect 24 cartons, Ms Shamsi, Aleppo', 'we are collecting', 'her word, telephone, 6 Jan', '**arranged, verbally**'],
    ['9–10 Jan', 'pack and mark for export', 'we are packing', '⚠ **nothing — nobody named**', '**an intention**'],
    ['11 Jan', 'road to Beirut, Fadi', 'Fadi is driving', 'in his sheet; he has read it', '**arranged**'],
    ['12 Jan', 'clearance at the border', 'it clears', '⚠ what everybody says it takes', '**a prediction**'],
    ['14 Jan', 'vessel sails, 6.40', 'the vessel sails', 'published sailing list', '⚠ **a fact we did not arrange**'],
  ], [0.7, 1.9, 1.1, 1.6, 1.1]),
  '⚠ **What this table tells me that the dates did not.** The dates fit: there are two clear days before the sailing. **But only one of the five steps has a named person who has read it**, and the two softest entries — the packing and the clearance — sit back to back in the middle, so a slip in either eats both spare days at once.',
  '**What I am doing about each.** Packing: Abu Yasser and Lina, in the sheet today, and Lina is at the bank on the 9th so the 9th is half a day. Clearance: I have asked Mr Jaber what it has actually taken him this month — twice it was a day and once it was three. **So the 12th is not a date, it is a range, and I am planning on three.**',
  '⚠ **And the one line I will not move.** The vessel sails at 6.40 on the 14th. ⚠ **Nothing we do after 6.40 on the 14th is worth anything to Ms Tannous**, so every other date in this programme exists to serve that one, and when something has to give it will not be that.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the five steps has a named person who has read it?'));
out.push(item('2', 'Why does the writer say the 12th is a range and not a date?'));
out.push(item('3', 'What is the one line the writer will not move, and why?'));
out.push(box('Writer\'s box', [
  '**The five dates and what is behind them — four parts:** a **table** with *said as · the evidence · what it really is* → ⚠ **what the table tells you that the dates did not** → **what you are doing about each soft entry** → ⚠ **the one line you will not move.**',
  '⚠ **Put *what it really is* in its own column.** Arranged · arranged verbally · an intention · a prediction · a fact you did not arrange. The column is the document: a programme without it is a list of dates that all look equally solid.',
  '⚠ **Write *nothing* where there is nothing.** *The evidence: nothing — nobody named.* A blank cell reads as an oversight; the word *nothing* reads as a finding, and it is the only entry that gets acted on.',
  '⚠ **Watch for two soft entries back to back.** They do not add up, they multiply: a slip in either eats the slack you were keeping for the other. ⚠ Say so in the words *so a slip in either eats both spare days at once.*',
  '⚠ **Turn a prediction into a range, out loud.** *Twice it was a day and once it was three, so the 12th is not a date, it is a range, and I am planning on three.*',
  '⚠ **End with the fixed point.** *Nothing we do after 6.40 on the 14th is worth anything to her.* ⚠ A programme with no stated fixed point will be rearranged by whoever reads it last.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take something you are running and write its dates with the evidence behind them (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE ______________ DATES AND WHAT IS BEHIND THEM. ______________. ______________.**   ______________ | ______________ | we are ______________ | ______________ | **______________**   ______________ | ______________ | it ______________ | ⚠ ______________ | **a prediction**   ______________ | ______________ | ______________ | ______________ | ⚠ **a fact we did not arrange**   ⚠ **What this table tells me that the dates did not.** ______________.   **What I am doing about each.** ______________. ______________.   ⚠ **And the one line I will not move.** ______________, because nothing we do after it ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '⚠ **Book 2\'s slip starts one step earlier than Book 1\'s.** First say who you are reading as; then quote the criterion; then ask your question; then stop.',
  '"**I am reading this as Lina on her fourth day.** The box says write *nothing* where there is nothing. Your packing row has an empty cell — is that nothing, or is it somebody you have not written down?"',
  '⚠ Naming the reader is not politeness. The same programme is sound for Mr Ayoub, who knows who packs, and useless for Lina, who does not. **Say which of them you are, or your question cannot be answered.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **which entry here has no named person in it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what it really is* column, filled for every row', ''],
  ['*nothing* written where there is nothing', ''],
  ['What the table shows that the dates did not', ''],
  ['The one line that will not move', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what it really is* column only. The class says which programme is most likely to slip, from that column alone.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something at your work was called arranged and was not (**140 to 180 words**). Say what the word rested on, when it was found out, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every date carry its evidence?_   ? _what did the word "arranged" actually rest on?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the false arrangement rest on somebody\'s own work? Usually all three — and the step nobody checks is the one you own.'));
out.push(box('Homework', ['Write your final text. Then take three dates you are working to this week and write the evidence next to each, including the word *nothing* where that is the answer (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.2 =======================
out.push(pb());
out.push(h2('13.2  What I intend to do, and what I am not pretending'));
out.push(p('**Function:** stating an intention honestly   ·   **Grammar:** _intend to · plan to · aim to · hope to_   ·   **Pronunciation:** _intend_ and _aim_ stressed, because the verb is the claim'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you intend to do this month that nobody else knows about. Then say what would have to happen for it to become arranged.'));
out.push(p('**b**  Put these in order from strongest to weakest: _I aim to · I hope to · I intend to · I plan to · I am going to._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nadia object to the sentence?   **A** the figure is wrong   **B** _we intend to_ has been used where somebody will read _we will_   **C** the date is wrong'));
out.push(p('**b**  Listen again. **1** What does Nour\'s sentence promise to a reader in Beirut? **2** What does Nadia say the honest half of the programme is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  "The half you have not arranged"', [
  ['Nadia', 'Your note to Ms Tannous says *we intend to ship on the 11th and to have the documents with you on the 13th*.'],
  ['Nour', 'Which is true. I do intend to.'],
  ['Nadia', 'And she will read it as a promise, because nobody outside this office knows the difference between what you have arranged and what you have decided on your own.'],
  ['Nour', 'So I should say we will ship on the 11th?'],
  ['Nadia', 'No. You should say which of the two is arranged and which is intended, and then she can decide what to do about the one that is not.'],
  ['Nour', 'That looks weak.'],
  ['Nadia', 'It looks like somebody who has counted. ⚠ *The shipping is arranged: Fadi, the 11th, in his sheet. The documents I intend to have with you on the 13th; that depends on the clearance, and the clearance has taken between one and three days this month.* Is that weak?'],
  ['Nour', 'It is longer.'],
  ['Nadia', 'It is twenty words longer and it is the only version she can plan against. ⚠ **A buyer does not want your confidence; she wants to know which of your dates she can put in her own programme.**'],
  ['Nour', 'And if I am wrong about the 13th after writing it like that?'],
  ['Nadia', '⚠ Then you were wrong about something you told her you might be wrong about, which costs you nothing. ⚠ **Being wrong about a sentence that said *we intend to* is forgivable. Being wrong about *we will* is a broken promise, and she will remember it for years.**'],
  ['Nour', 'So the hedge is not modesty.'],
  ['Nadia', '⚠ **The hedge is where the risk is kept.** Put it in the sentence and it stays with the sentence. Leave it out and it moves to the relationship.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Intentions, graded — and why the grade is not modesty**',
  table(['Form', 'Strength', 'What a reader may do with it'], [
    ['**I am going to** / we are', 'decided, not arranged', 'expect it, and ask who'],
    ['**I intend to**', 'decided and owned', 'plan round it, with a margin'],
    ['**I plan to**', 'in a programme, not yet fixed', 'ask what it depends on'],
    ['**I aim to**', 'a target I may miss', 'not plan against it'],
    ['**I hope to**', '⚠ almost nothing — say why', 'ignore it'],
  ], [1.4, 1.7, 2.3]),
  '⚠ **Say which half is arranged and which is intended, in one sentence each.** *The shipping is arranged: Fadi, the 11th, in his sheet. The documents I intend to have with you on the 13th; that depends on the clearance.*',
  '⚠ **A reader outside your office cannot tell the difference and will read every date as a promise.** That is not their fault and it is not solved by being careful; it is solved by labelling.',
  '⚠ **The hedge is where the risk is kept.** Put it in the sentence and it stays in the sentence; leave it out and it moves to the relationship. ⚠ *Being wrong about* we intend to *costs nothing. Being wrong about* we will *is a broken promise.*',
  '⚠ **Never use _hope_ without the reason.** *I hope to* with nothing after it tells a reader to ignore the line. *I hope to, if the clearance is one day and not three* is a usable sentence.',
  '⚠ **And attach the dependency, always.** An intention with no *that depends on* is an intention you have not thought about: _I intend to X; that depends on Y_ is the complete form.',
  '**Practise:** Grade each and attach its dependency. 1 sending a quotation tomorrow 2 finishing a stocktake this month 3 getting a payment in before the 20th 4 training somebody by March 5 opening on a Saturday again',
  '**Useful phrases:**  that is arranged: … in his sheet  ·  I intend to …; that depends on …  ·  I aim to, and I may miss it  ·  which of my dates can you plan against?  ·  the hedge stays in the sentence',
  '**Pronunciation – the verb carries the claim.** 🔊 **Track 13.4** Listen: _I inTEND to have them with you on the 13th_ · _I AIM to_ · _I HOPE to_. ⚠ The stress goes on the grading verb, not on the date, because the verb is the news. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes a line that mixes arranged and intended; B separates the two and attaches the dependency. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your note says *we intend to __________ and to __________*.'],
  ['A', 'Which is true.'],
  ['B', 'And __________ will read it as a promise, because __________.'],
  ['A', 'So I should say we will?'],
  ['B', 'No. Say which is arranged and which is intended. ⚠ *__________ is arranged: __________. __________ I intend to __________; that depends on __________.*'],
  ['A', 'That looks weak.'],
  ['B', '⚠ It looks like somebody who has counted — and it is the only version __________ can plan against.'],
]));
out.push(table(['Role card 1 — the documents', 'Role card 2 — the training'], [[
  '*We intend to ship on the 11th and to have the documents with you on the 13th.* ⚠ The shipping is arranged (Fadi, in his sheet). The documents depend on the clearance, which has taken one day twice and three days once this month. Separate them and give the range.',
  '*We intend to have Lina trained on the export paperwork by the end of February.* ⚠ Nothing in that is arranged: no sessions are booked and the person who would teach her is Nadia, who finishes at four exactly. Say what is arranged — nothing — and what it depends on.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the separation for the class – **without the book**.'));
out.push(p('**Listener task:** write the original line, then the two sentences it became, then the dependency. ⚠ Then say which sentence the reader will act on.'));
out.push(PHRASE_CARD(['that is arranged: …', 'I intend to …; that depends on …', 'I aim to, and may miss it', 'I hope to, if …', 'which can you plan against?', 'the hedge stays in the sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you have told somebody you would do. Grade each, attach its dependency, and say how the reader probably read it.'));
out.push(table(['What I said', 'What I meant', 'The dependency', 'How they probably read it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.2, 1.5, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said _______. I meant _______. It depended on _______, which I did not say, and they read it as _______._'));
out.push(p('**Listener task:** count how many promises in the room were intentions with the dependency left off. ⚠ Then ask what the dependency was in each case — it is almost always a third person who was never told.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I hope to send it_ with nothing after it, and _we intend to deliver on Tuesday_ where Tuesday is in a driver\'s sheet. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**Note to Ms M. Tannous, Beirut — 7 January. The trial consignment: what is arranged and what is not.**',
  '**Arranged, with a name against it.** The cartons are being collected from our Aleppo supplier on the 8th — she confirmed by telephone on the 6th. Our own driver is taking the load to Beirut on the 11th; that is in his sheet and he has read it.',
  '**Intended, and what each depends on.** I intend to have the packing finished on the 10th; that depends on two people being in the warehouse on the 9th, and one of them is at the bank that morning, so I am treating the 9th as half a day. **I intend to have the documents with you on the 13th; that depends on clearance, which has taken one day twice and three days once this month.** ⚠ So the 13th is my intention and the 15th is my worst case.',
  '**The fixed point, which is yours and not mine.** Your vessel sails at 6.40 on the 14th. ⚠ **Everything above exists to be ahead of that**, and if the clearance takes three days I will telephone you on the 12th rather than let you find out on the 14th.',
  '⚠ **What I am not saying.** I am not saying we will be there on the 13th. I am saying it is what I intend and what it depends on, ⚠ **so that you can put the 15th in your own programme and not mine.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two steps are arranged, and what is the evidence for each?'));
out.push(item('2', 'Why does the writer give both the 13th and the 15th?'));
out.push(item('3', 'What does the writer promise to do if the clearance takes three days?'));
out.push(box('Writer\'s box', [
  '**A note that separates the two halves — four parts:** ⚠ **arranged, with a name against it** → **intended, and what each depends on** → **the fixed point, which is theirs and not yours** → ⚠ **what you are not saying.**',
  '⚠ **Put the arranged half first and keep it short.** It is the part the reader can rely on, and a long list of intentions above it buries the only solid thing on the page.',
  '⚠ **Give the intention and the worst case, both.** *The 13th is my intention and the 15th is my worst case.* ⚠ A reader who is given one date plans against it; a reader given two plans against the second and is grateful for the first.',
  '⚠ **Name their fixed point as theirs.** *Your vessel sails at 6.40 on the 14th.* It tells them you have read their programme and not only your own.',
  '⚠ **Promise the telephone call, with its date.** *I will telephone you on the 12th rather than let you find out on the 14th.* ⚠ The undertaking to warn is worth more than the date, because it is the only thing on the page you can keep whatever happens.',
  '⚠ **Then write *what I am not saying*.** It is an unusual paragraph and it is the one that stops a careful reader from converting your intention into your promise.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write to somebody outside your office separating what is arranged from what you intend (**60 words or more**). Use the frame.'));
out.push(p('**Note to ______________ — ______________. ______________: what is arranged and what is not.**   **Arranged, with a name against it.** ______________ — ______________. ______________; that is ______________ and ______________ has read it.   **Intended, and what each depends on.** I intend to ______________; that depends on ______________. I intend to ______________; that depends on ______________, which has taken ______________. ⚠ So ______________ is my intention and ______________ is my worst case.   **The fixed point, which is yours.** ______________. ⚠ If ______________ I will ______________ on ______________ rather than let you find out on ______________.   ⚠ **What I am not saying.** I am not saying ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these dates could I put in my own programme?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Arranged first, with a name and the evidence', ''],
  ['Every intention carries *that depends on*', ''],
  ['The intention **and** the worst case', ''],
  ['The undertaking to warn, with a date', ''],
  ['*What I am not saying*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what I am not saying* paragraph. The class says what the reader would otherwise have assumed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a promise you kept and a promise you broke, both of which began as intentions (**140 to 180 words**). Say what the difference between them turned out to be.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every intention graded?_   ? _what did the broken one depend on that was never written down?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ How many broken promises depended on a person who was never told? Usually two of three — and the writer could not have kept the promise alone.'));
out.push(box('Homework', ['Write your final text. Then take one thing you have promised this week, grade it honestly, and write the sentence you should have sent instead (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.3 =======================
out.push(pb());
out.push(h2('13.3  At ten on the 14th: the diary'));
out.push(p('**Function:** giving and taking appointments precisely   ·   **Grammar:** _at ten on the 14th_ — time before date, and the prepositions   ·   **Pronunciation:** the date said so that it cannot be misheard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three appointments from your own week aloud, each with a time, a day and a date, in that order. Then say them again with the date first and hear which is easier to write down.'));
out.push(p('**b**  Correct these: _on ten o\'clock · at Tuesday · in the 14th · on the morning of Tuesday · at the 14th of February._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina write down wrongly?   **A** the name   **B** a time, because two dates were given in one sentence   **C** the price'));
out.push(p('**b**  Listen again. **1** What is the order Nour gives her for taking an appointment? **2** What does Nour say the fourth entry in the diary is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  "Read it back to me"', [
  ['Lina', 'Mr Jaber telephoned. He said he can do the 11th, or the 12th at eight, and he will be at the border either way on the 12th.'],
  ['Nour', 'Read me what you wrote.'],
  ['Lina', '"Jaber — 11th or 12th at eight — border 12th."'],
  ['Nour', 'And is eight o\'clock the 11th or the 12th?'],
  ['Lina', '…I do not know. I think he meant both.'],
  ['Nour', 'He meant one of them and we now have to telephone him back, which is the fourth time this week somebody has had to telephone back for a time. ⚠ So: **time, day, date, and one appointment per line.** Never two dates in a sentence.'],
  ['Lina', '"Jaber — 8.00, Thursday 11 January." And a second line for the other one.'],
  ['Nour', 'Better. And now read it back to him on the telephone before he hangs up, in that order, and let him correct you. ⚠ **The read-back is not politeness; it is the only moment when the mistake is free.**'],
  ['Lina', 'And the border on the 12th?'],
  ['Nour', 'That is not an appointment. He is telling you where he will be, which is a different kind of entry, and it goes in the diary with no time against it and the word *expected*.'],
  ['Lina', 'So there are three kinds of thing in a diary.'],
  ['Nour', 'There are four, and you have just met three of them: **an appointment, which has a time and two parties; a commitment, which has a date and one party; and an expectation, which has neither and is there so that you do not make an appointment on top of it.** The fourth is the one that matters most.'],
  ['Lina', 'What is it?'],
  ['Nour', '⚠ **A fixed point. Something that happens at a time whether anybody turns up or not.** The vessel at 6.40 on the 14th. ⚠ You do not arrange it, you do not move it, and you write everything else around it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Time, day, date — and the four kinds of diary entry**',
  table(['Shape', 'Example'], [
    ['**at** + clock time', '**at** 8.00 · **at** ten · **at** half past four'],
    ['**on** + day or date', '**on** Thursday · **on** the 11th · **on** 11 January'],
    ['**in** + month, year, part of day', '**in** January · **in** the morning'],
    ['the order', '**at 8.00 on Thursday 11 January** — time, day, date'],
    ['⚠ one appointment **per line**', 'never two dates in one sentence'],
  ], [1.5, 3]),
  '**The four kinds of entry, and why they are not the same:**',
  table(['Kind', 'Has', 'Example'], [
    ['**an appointment**', 'a time and two parties', '8.00, Thursday 11 January, Mr Jaber, here'],
    ['**a commitment**', 'a date and one party', 'documents to Beirut by the 13th — mine'],
    ['**an expectation**', 'neither; it blocks the day', 'Mr Jaber at the border, 12th, *expected*'],
    ['⚠ **a fixed point**', 'a time, and nobody\'s permission', '**the vessel, 6.40 on the 14th**'],
  ], [1.3, 1.4, 2.4]),
  '⚠ **Read it back before they hang up.** Time, day, date, in that order. ⚠ *The read-back is not politeness; it is the only moment when the mistake is free.*',
  '⚠ **Never put two dates in one sentence.** *The 11th, or the 12th at eight* is unwritable, and it is how four telephone calls a week get made twice.',
  '⚠ **Write a fixed point first and in a different hand.** Everything else in the week is arranged around it, and a diary that does not show it will let somebody book over it.',
  '**Practise:** Say each as time, day, date, one per line. 1 a meeting at half past nine next Tuesday 2 a collection some time on the 20th 3 a vessel sailing at 6.40 on the 14th 4 somebody at the border on Friday 5 a payment due by the end of the month',
  '**Useful phrases:**  at 8.00 on Thursday 11 January  ·  read it back to me  ·  one appointment per line  ·  that is an expectation, not an appointment  ·  that is a fixed point  ·  by the 13th, and that one is mine',
  '**Pronunciation – the date that cannot be misheard.** 🔊 **Track 13.6** Listen: _at EIGHT // on THURSday // the eLEVenth of JANuary_ — three groups, a break between each. ⚠ Said as one run it is the commonest source of a wrong diary entry in this book. Repeat four, then say it to a partner who writes it down.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones with a muddled arrangement; B takes it, separates the entries and reads it back. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ telephoned. He said he can do the __________, or the __________ at __________, and he will be __________ either way on the __________.'],
  ['B', 'Read me what you wrote.'],
  ['A', '"__________ — __________ or __________ at __________ — __________."'],
  ['B', 'And is __________ the __________ or the __________?'],
  ['A', '…I do not know.'],
  ['B', '⚠ Time, day, date, and one appointment per line. And the __________ is not an appointment — it is __________.'],
  ['A', 'So I write it with no time and the word __________.'],
]));
out.push(table(['Role card 1 — the haulier', 'Role card 2 — the auditor'], [[
  '"Mr Jaber can do the 11th, or the 12th at eight, and he will be at the border either way on the 12th." ⚠ Two appointments muddled into one sentence plus an expectation. Three lines are needed and one telephone call back.',
  '"Mr Attar says he will come in the week of the 20th, probably the Tuesday, in the morning, and he wants the stock figures before he comes." ⚠ One expectation (the week), one half-appointment (Tuesday morning, unconfirmed) and one commitment that is **yours** and has no date on it at all.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the entries as separate lines, each labelled appointment, commitment, expectation or fixed point. ⚠ Then say which line somebody would book over.'));
out.push(PHRASE_CARD(['at 8.00 on Thursday 11 January', 'read it back to me', 'one per line', 'that is an expectation', 'that is a fixed point', 'and that one is mine']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the next **seven** days of your own diary. Write each entry in the right shape and label its kind.'));
out.push(table(['Time', 'Day and date', 'What and who', 'Kind'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 1.4, 2.4, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my entries, _______ are appointments, _______ are commitments with nobody but me in them, _______ are expectations and _______ is a fixed point._'));
out.push(p('**Listener task:** count the commitments in the room that have a date and one party. ⚠ Then ask who would notice if each one were missed — and the answer is often nobody until it is too late.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _in Thursday the 11th_ and _at the 14th of February at 6.40_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the diary page, and answer the questions.'));
out.push(box(null, [
  '**WEEK OF 8 JANUARY — THE TRIAL CONSIGNMENT. Kept by N. Mansour. ⚠ The fixed point is at the top, not in its place in the week.**',
  table(['', 'Time', 'Day and date', 'Entry', 'Kind'], [
    ['⚠', '**6.40**', '**Wednesday 14 January**', '**Ms Tannous\'s vessel sails, Beirut**', '⚠ **FIXED POINT**'],
    ['', '—', 'Wednesday 8 January', 'cartons collected, Aleppo — Ms Shamsi', 'commitment (hers)'],
    ['', '09.00', 'Thursday 9 January', 'packing begins — Abu Yasser (Lina at bank)', 'appointment'],
    ['', '—', 'Friday 10 January', 'packing finished and marked', 'commitment (mine)'],
    ['', '08.00', 'Saturday 11 January', 'load leaves for Beirut — Fadi', 'appointment'],
    ['', '—', 'Sunday 12 January', 'Mr Jaber at the border, *expected*', 'expectation'],
    ['', '—', 'Monday 13 January', 'documents with Ms Tannous — mine', 'commitment (mine)'],
  ], [0.4, 0.8, 1.6, 2.6, 1.3]),
  '⚠ **Why the fixed point is at the top.** Because it is the only line nobody can move, and a week\'s diary read in order makes the last line look like the end of a sequence instead of the wall the sequence runs into. **It is at the top so that it is read first and read against every line below it.**',
  '⚠ **What the *kind* column shows.** Three of the seven entries are commitments with nobody in them but me. ⚠ **Nobody will telephone to remind me of those three, and all three are on days when nothing else is happening**, which is exactly why they are the ones that get used for something else.',
  '**What I have done about it.** The two of them that cannot slip — the marking on the 10th and the documents on the 13th — are now in Lina\'s sheet as well as mine, with the words *ask Nour whether this is done* against each. ⚠ She is not doing the work; **she is the reason somebody asks.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the fixed point written at the top of the page and not in its place in the week?'));
out.push(item('2', 'What do the three commitments have in common besides having only one party?'));
out.push(item('3', 'What is Lina\'s job in the two entries that cannot slip?'));
out.push(box('Writer\'s box', [
  '**A diary page somebody else can read — four parts:** ⚠ **the fixed point at the top** → **the week in time, day, date order with a *kind* column** → ⚠ **what the *kind* column shows** → **what you have done about the entries with nobody in them.**',
  '⚠ **The fixed point goes at the top, out of its place in the week.** In order, it reads as the end of a sequence; at the top, it reads as the wall the sequence runs into — which is what it is.',
  '⚠ **Keep the *kind* column.** It is four words — appointment, commitment, expectation, fixed point — and it turns a list into a risk assessment that takes four seconds to read.',
  '⚠ **Count the commitments that have nobody in them but you.** Those are the entries nobody will telephone about, ⚠ **and they are usually on the empty days, which is why they get spent on something else.**',
  '⚠ **Then give one of them to somebody as a question, not as work.** *Ask Nour whether this is done.* ⚠ She is not doing the task; she is the reason somebody asks — and that is the cheapest control in this book.',
  '⚠ **Time, day, date, one entry per line, and a dash where there is no time.** A blank where a time should be reads as a forgotten time; a dash reads as a decision.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write next week as a diary page somebody else could run (**60 words or more**). Use the frame.'));
out.push(p('**WEEK OF ______________ — ______________. Kept by ______________. ⚠ The fixed point is at the top.**   ⚠ | **______________** | **______________** | **______________** | ⚠ **FIXED POINT**   ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | ______________   ⚠ **Why the fixed point is at the top.** ______________.   ⚠ **What the kind column shows.** ______________ of the ______________ entries are commitments with nobody in them but me, and ______________.   **What I have done about it.** ______________ is now in ______________\'s sheet as well as mine, with the words ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **could I run your week from this page?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fixed point at the top', ''],
  ['Time, day, date, one entry per line', ''],
  ['A *kind* column, filled for every entry', ''],
  ['The commitments with nobody in them, counted', ''],
  ['One of them given to somebody as a question', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their fixed point and the entry nearest to it. The class says how much slack there is between them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a diary entry went wrong (**140 to 180 words**). Say which of the four kinds it really was, which kind it was written as, and what happened.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _time, day, date, one per line?_   ? _which of the four kinds was it written as, and which was it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ How many were expectations written as appointments? It is the commonest of the four errors, and it is the one that makes somebody wait.'));
out.push(box('Homework', ['Write your final text. Then write your own next seven days with a *kind* column and the fixed point at the top (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.4 =======================
out.push(pb());
out.push(h2('13.4  Arranged, intended, predicted — side by side'));
out.push(p('**Function:** sorting your own futures   ·   **Grammar:** the three futures in one table, with an evidence column   ·   **Pronunciation:** the contrast stress that separates two futures in one breath'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Sort five things from your own month into three piles: arranged, intended, predicted. Say the pile aloud before you say the thing.'));
out.push(p('**b**  Which pile does each belong to? _The audit is on the 20th. · We are going to repaint the counter. · Prices will go up in March. · Fadi is driving down on the 11th. · The generator runs from one until four._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the three-column page show that the list had not?   **A** a cost   **B** that the whole middle of the month is intention   **C** a wrong date'));
out.push(p('**b**  Listen again. **1** How many of the eleven lines were arranged? **2** What does Mr Ayoub say about the pile marked _predicted_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  "Sort them before you argue about them"', [
  ['Mr Ayoub', 'You have eleven lines here for January. Sort them before we argue about any of them. Three columns.'],
  ['Nour', 'Arranged: the collection, Fadi\'s run, the audit on the 20th, and Lina\'s first week, which is in a sheet. Four.'],
  ['Mr Ayoub', 'Intended?'],
  ['Nour', 'The packing, the marking, the documents, the stocktake of the fourth store, and training Lina on the paperwork. Five.'],
  ['Mr Ayoub', 'Predicted?'],
  ['Nour', 'The clearance taking a day, and Ms Tannous ordering again in February. Two.'],
  ['Mr Ayoub', 'So four, five, two. And where in the month do the five sit?'],
  ['Nour', '…From the 9th to the 17th. The whole middle of the month is intention.'],
  ['Mr Ayoub', 'Which is the finding, and you could not see it in a list because a list has no columns. ⚠ **A list of dates hides its own shape. The same eleven lines in three columns show you that a month has a soft middle, and a soft middle is where a programme fails.**'],
  ['Nour', 'And the two predictions?'],
  ['Mr Ayoub', '⚠ The pile marked *predicted* is not a plan at all; it is a list of things you are exposed to. You do not manage it, you **watch** it — and you decide now what you will do if each one goes the other way. The clearance taking three days: what then?'],
  ['Nour', 'Then the documents are the 15th and I telephone her on the 12th.'],
  ['Mr Ayoub', 'Good. Ms Tannous not ordering again?'],
  ['Nour', 'Then the January figures are the whole of the export business and I have told Nadia to expect more.'],
  ['Mr Ayoub', '⚠ **Then write that down too, because an exposure you have decided about is not a risk any more, it is a branch.** ⚠ And the thing nobody does: **sort first, argue second.** Half the arguments in this office are two people holding different columns.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The three futures, side by side, with an evidence column**',
  table(['Column', 'Form', 'What you do with it'], [
    ['**arranged**', 'present continuous; a name and a document', 'rely on it; check the name is still true'],
    ['**intended**', '_intend to · plan to · going to_', 'manage it; attach its dependency'],
    ['**predicted**', '_will · is likely to_', '⚠ watch it; decide the branch in advance'],
  ], [1.1, 2.1, 2.3]),
  '⚠ **A list of dates hides its own shape.** The same lines in three columns show where the month is soft — and a soft middle is where a programme fails, not a soft beginning or a soft end.',
  '⚠ **Count each column and say the three numbers aloud.** *Four, five, two.* ⚠ If the middle number is the largest, you are running on intention and nothing has been arranged yet.',
  '⚠ **The predicted column is not a plan; it is a list of exposures.** You do not manage it, you watch it — ⚠ **and you decide now what you will do if each one goes the other way.**',
  '⚠ **An exposure you have decided about is not a risk, it is a branch.** *If the clearance is three days, the documents are the 15th and I telephone her on the 12th.* Write the branch down or you have not decided anything.',
  '⚠ **Sort first, argue second.** Half the arguments about a programme are two people holding different columns: one is talking about what is arranged and the other about what is intended, and both are right.',
  '**Practise:** Sort and then say the three numbers. 1 your own next month 2 a delivery you are waiting for 3 a training plan 4 a price change you expect 5 a holiday somebody has asked for',
  '**Useful phrases:**  sort them before we argue  ·  four, five, two  ·  the middle of the month is intention  ·  that is an exposure, not a plan  ·  what then?  ·  then it is a branch and not a risk',
  '**Pronunciation – two futures in one breath.** 🔊 **Track 13.8** Listen: _the collection is arRANGED; the packing is inTENDed_ — the contrast stress sits on the two grading words and the nouns drop away. ⚠ Learners stress the nouns and the sentence loses its point. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a flat list of dates; B sorts it into three columns, counts them, and asks for the branch on each prediction. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'You have __________ lines here. Sort them before we argue. Three columns.'],
  ['A', 'Arranged: __________. __________.'],
  ['B', 'Intended?'],
  ['A', '__________. __________.'],
  ['B', 'Predicted?'],
  ['A', '__________.'],
  ['B', 'So __________, __________, __________. And where in the month do the intended ones sit?'],
  ['A', '…__________. ⚠ The __________ of the month is intention.'],
  ['B', '⚠ And __________ going the other way — what then?'],
]));
out.push(table(['Role card 1 — January at Sham Trading', 'Role card 2 — a month of your own'], [[
  'Eleven lines: collection, Fadi\'s run, the audit on the 20th, Lina\'s first week (all in documents); packing, marking, documents, the fourth-store stocktake, training Lina (nobody told); clearance in a day, Ms Tannous ordering again (guesses). ⚠ Four, five, two — and the five sit between the 9th and the 17th.',
  'Use your own month. ⚠ B\'s job is to refuse to argue about any single line until all of them are in a column, and then to ask for the branch on every prediction. **Most pairs discover they were arguing about two different columns.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the three numbers and where the intended lines sit in the month. ⚠ Then write one branch, in the form *if X, then Y and I will tell Z on the ___*.'));
out.push(PHRASE_CARD(['sort them before we argue', 'four, five, two', 'a soft middle', 'that is an exposure', 'what then?', 'then it is a branch']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **nine** lines from your own next month. Sort, count, and write a branch for every line in the predicted column.'));
out.push(table(['Arranged — and the document', 'Intended — and what it depends on', 'Predicted — and the branch'], [['', '', ''], ['', '', ''], ['', '', '']], [1.8, 2, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My three numbers are _______, _______ and _______. My intended lines sit between _______ and _______. My worst exposure is _______, and the branch is _______._'));
out.push(p('**Listener task:** count how many people had a middle number larger than the other two. ⚠ Then ask each of them what has been arranged this week — the answer is usually nothing, and nothing is what a soft middle is made of.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _prices are going up in March, it is arranged_ and _the audit will be on the 20th_ where the auditor has written to confirm it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three-column page, and answer the questions.'));
out.push(box(null, [
  '**JANUARY, IN THREE COLUMNS. 7 January. N. Mansour. ⚠ Eleven lines. Four arranged, five intended, two predicted.**',
  table(['Arranged — and the document', 'Intended — and what it depends on', 'Predicted — and the branch'], [
    ['collection 8th — Ms Shamsi, telephone 6th', 'packing 9th–10th — two people in the warehouse', 'clearance one day — ⚠ **if three: documents 15th, telephone her 12th**'],
    ['load leaves 11th — in Fadi\'s sheet, read', 'marking for export 10th — the stencils, which are at Baghdad Street', 'Ms Tannous orders again in February — ⚠ **if not: January is the whole export business; Nadia told**'],
    ['audit 20th — Mr Attar, in writing', 'documents to Beirut 13th — the clearance', ''],
    ['Lina\'s first week — her sheet', 'fourth-store stocktake — a free afternoon, which has not existed since December', ''],
    ['', 'training Lina on export paperwork — Nadia, who finishes at four exactly', ''],
  ], [1.9, 2.1, 2.2]),
  '⚠ **What the columns show that the list did not.** The five intended lines sit between the 9th and the 17th, **so the whole middle of the month is intention** — and the two that have no realistic dependency at all are the stocktake, which needs an afternoon that has not existed since December, and the training, which needs Nadia after four.',
  '**What I have moved as a result.** The marking is brought forward to the 9th because the stencils have to come from Baghdad Street and that is a journey, not a decision. ⚠ The stocktake is **out of January altogether** — it was never going to happen and leaving it in the programme made the programme a lie.',
  '⚠ **And the training, which is the real one.** Nadia finishes at four exactly and has done for eleven years. ⚠ **So the training cannot be an intention; it has to be an arrangement or it has to be somebody else.** I have asked Bassel, who does not know the paperwork as well and is there at five.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where in the month do the intended lines sit, and why does that matter?'));
out.push(item('2', 'Why was the stocktake taken out of January altogether?'));
out.push(item('3', 'What does the writer do about the training, and why?'));
out.push(box('Writer\'s box', [
  '**A month in three columns — four parts:** **the three counts in the heading** → **the table, with the document, the dependency and the branch** → ⚠ **what the columns show that the list did not** → **what you have moved as a result.**',
  '⚠ **Put the three counts in the heading.** *Eleven lines. Four arranged, five intended, two predicted.* ⚠ A reader who reads nothing else has read the state of the month.',
  '⚠ **Every arranged line carries its document; every intended line carries its dependency; every predicted line carries its branch.** A cell with none of those is not a plan line, and three empty cells in the intended column is the finding.',
  '⚠ **Take out what was never going to happen.** *It was never going to happen and leaving it in the programme made the programme a lie.* ⚠ A line nobody believes costs more than a missing line, because it makes the reader discount the ones that are true.',
  '⚠ **When a dependency is a person\'s fixed habit, it is not a dependency — it is a wall.** *Nadia finishes at four exactly and has done for eleven years.* ⚠ So the thing must become an arrangement or it must become somebody else, and you say which you have chosen and what it costs.',
  '⚠ **Name what you lose by the substitute.** *Bassel, who does not know the paperwork as well and is there at five.* A substitution written without its cost will be read as a solution and queried later.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own next month in three columns (**60 words or more**). Use the frame.'));
out.push(p('**______________, IN THREE COLUMNS. ______________. ______________. ⚠ ______________ lines. ______________ arranged, ______________ intended, ______________ predicted.**   ______________ — ______________ | ______________ — ______________ | ______________ — ⚠ **if ______________: ______________**   ______________ — ______________ | ______________ — ______________ |   ⚠ **What the columns show that the list did not.** ______________, so ______________.   **What I have moved as a result.** ______________. ⚠ ______________ is out of ______________ altogether — ______________.   ⚠ **And the real one.** ______________, so it has to be ______________ or it has to be ______________, and that costs ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which column is your largest, and what is in your middle of the month?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The three counts in the heading', ''],
  ['A document, a dependency or a branch in every cell', ''],
  ['What the columns show that the list did not', ''],
  ['Something taken out because it was never going to happen', ''],
  ['A wall named as a wall, with the cost of the substitute', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three counts and the line they took out. The class says whether they believe the line was ever real.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a programme you have seen that was mostly intention (**140 to 180 words**). Say what was arranged, what was not, and which line everybody knew was never going to happen.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _are the three columns separated?_   ? _which line did everybody know was not real, and why was it left in?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the unreal line left in because taking it out needed somebody\'s permission? Usually two of three — which is the whole mechanism.'));
out.push(box('Homework', ['Write your final text. Then sort your own next month into three columns, count them, and write one branch for every prediction (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.5 =======================
out.push(pb());
out.push(h2('13.5  The vessel sails at 6.40: timetables'));
out.push(p('**Function:** reading and quoting a timetable   ·   **Grammar:** present simple for schedules   ·   **Pronunciation:** the flat, unstressed present simple of a timetable'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that happen at a time whether anybody is there or not. Say each in the present simple.'));
out.push(p('**b**  Which is right, and why? _The vessel sails at 6.40. · The vessel is sailing at 6.40. · The vessel will sail at 6.40._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel find in the sailing list?   **A** the price   **B** that the cut-off is not the sailing time   **C** the wrong port'));
out.push(p('**b**  Listen again. **1** How many hours before the sailing is the cut-off? **2** What does Bassel say people plan against, and what they should plan against?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  "Nobody ships at the sailing time"', [
  ['Bassel', 'You have the 14th at 6.40 in your programme.'],
  ['Nour', 'That is when the vessel sails. It is in the list.'],
  ['Bassel', 'It is. Read the line under it.'],
  ['Nour', '"Cut-off for documents and delivery: 18.00 on the preceding day." …So the real date is the 13th at six in the evening.'],
  ['Bassel', 'Twelve and a half hours earlier, and it moves the whole programme by a day. ⚠ **Nobody ships at the sailing time. The sailing time is published because it is interesting; the cut-off is what you work to and it is printed smaller.**'],
  ['Nour', 'Then my documents date of the 13th is the same day as the cut-off.'],
  ['Bassel', 'The same day, and your clearance might be three days. So on the worst case you are at the port with the documents at about the time the gate shuts.'],
  ['Nour', 'Which I would not have known until the 13th.'],
  ['Bassel', 'You would have known on the 13th at about seven in the evening, which is the worst possible hour to find anything out, because there is nobody to telephone in two countries. ⚠ **Read every timetable down to the small print before you put a single date in a programme**, and copy the cut-off into the programme and not the headline time.'],
  ['Nour', 'And the next sailing?'],
  ['Bassel', 'The 21st. So missing the 14th does not cost us a day; it costs us a week, and Ms Tannous has a customer of her own behind her.'],
  ['Nour', 'That is the real figure, then. Not twelve hours. A week.'],
  ['Bassel', '⚠ **The cost of missing a fixed point is the gap to the next one**, and that is the number to write in the programme — because *we will be a little late* and *we will be seven days late* are two different conversations and the timetable decides which one you are having.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Timetables — the present simple, and the number that matters**',
  table(['Form', 'Example'], [
    ['present simple for a **schedule**', 'The vessel **sails** at 6.40 on the 14th.'],
    ['⚠ not the continuous', '~~The vessel is sailing at 6.40~~ — that is an arrangement, and nobody arranged it with you'],
    ['the **cut-off**', 'Documents and delivery **close** at 18.00 on the preceding day.'],
    ['the **next one**', 'The next sailing **is** the 21st.'],
    ['the cost', 'Missing the 14th **costs** a week, not twelve hours.'],
  ], [1.7, 3.1]),
  '⚠ **Nobody ships at the sailing time.** The headline time is published because it is interesting; **the cut-off is what you work to and it is printed smaller.** Copy the cut-off into your programme and put the sailing time in brackets after it.',
  '⚠ **Read every timetable down to the small print before you put a single date in a programme.** The line under the line is the one that moves your dates, and it is a different number on every route.',
  '⚠ **The cost of missing a fixed point is the gap to the next one.** ⚠ *We will be a little late* and *we will be seven days late* are two different conversations, and the timetable, not your judgement, decides which one you are having.',
  '⚠ **Say the worst hour, as well as the worst day.** *Seven in the evening on the 13th, when there is nobody to telephone in two countries.* ⚠ A risk that arrives out of hours is a worse risk, and almost no programme says so.',
  '⚠ **Remember your own timetables.** The generator runs from one until four; the Ghouta run goes Tuesdays and Thursdays; Nadia finishes at four. ⚠ **A fixed point does not have to be published to be a fixed point.**',
  '**Practise:** State each in the present simple with its cut-off or its small print. 1 a sailing or a flight 2 a bank\'s clearing time 3 a government office\'s hours 4 your own generator or power hours 5 the last collection of a courier',
  '**Useful phrases:**  the vessel sails at …  ·  read the line under it  ·  the cut-off is …  ·  the next one is …  ·  that costs a week, not a day  ·  and nobody to telephone',
  '**Pronunciation – the flat timetable voice.** 🔊 **Track 13.10** Listen: _the vessel sails at six forty on the fourteenth_ — level, unstressed, no emphasis anywhere. ⚠ A timetable read with feeling sounds like a plan, and a plan can be argued with. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A quotes a headline time from a timetable; B finds the cut-off and gives the cost of missing it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'You have __________ at __________ in your programme.'],
  ['A', 'That is when __________. It is in the list.'],
  ['B', 'It is. Read the line under it.'],
  ['A', '"__________." …So the real date is __________.'],
  ['B', '⚠ Nobody __________ at the __________ time. And the next one?'],
  ['A', '__________.'],
  ['B', '⚠ So missing it costs __________, not __________ — and that is the number for the programme.'],
]));
out.push(table(['Role card 1 — the sailing', 'Role card 2 — the bank'], [[
  'Sailing 6.40 on the 14th; cut-off for documents and delivery 18.00 on the 13th; next sailing the 21st. ⚠ Twelve and a half hours earlier, and the cost of missing it is seven days, not twelve hours.',
  'A transfer "clears same day". The small print: instructions received after 13.00 are processed the following working day, and Saturday is not a working day. ⚠ An instruction at two on a Thursday clears on Sunday, and the person who promised *same day* was reading the headline.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the headline time, the cut-off, the gap between them, and the cost of missing it. ⚠ Then say which of the four a programme usually contains.'));
out.push(PHRASE_CARD(['the vessel sails at …', 'read the line under it', 'the cut-off is …', 'the next one is …', 'that costs a week', 'nobody to telephone']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** timetables you depend on. Write the headline, the cut-off, the next one and the cost of missing it.'));
out.push(table(['The timetable', 'Headline time', 'The cut-off, from the small print', 'Next one', 'Cost of missing it'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.4, 0.9, 2, 0.8, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My timetable says _______. The cut-off is _______, which is _______ earlier. The next one is _______, so missing it costs _______._'));
out.push(p('**Listener task:** count how many people did not know their own cut-off before this lesson. ⚠ Then ask how many programmes in the room are built on a headline time.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the vessel is sailing at 6.40_ and _the bank will clear it the same day_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FIXED POINTS IN THIS CONSIGNMENT, AND THEIR SMALL PRINT. 8 January. N. Mansour. ⚠ Four of them, and three were not in yesterday\'s programme at all.**',
  table(['The fixed point', 'Headline', 'The cut-off, from the small print', 'Next one', 'Cost of missing it'], [
    ['Ms Tannous\'s vessel, Beirut', '**6.40, 14 Jan**', '⚠ **18.00, 13 Jan** — documents and delivery', '21 Jan', '⚠ **seven days**'],
    ['The border post', '07.00–16.00', 'last vehicle accepted **15.00**', 'next morning', 'one day, plus a night out'],
    ['Our bank, transfers', '"same day"', 'instructions after **13.00** go to the next working day; Saturday is not one', 'next working day', 'two days over a weekend'],
    ['Our own generator', '**one until four**', '⚠ the stencil press and the label printer run on it only', 'next day, one o\'clock', 'a day\'s marking'],
  ], [1.5, 1, 2.4, 1, 1.2]),
  '⚠ **What changed when I wrote the small print down.** My programme said the 14th. **The real date is the 13th at six in the evening**, which is twelve and a half hours earlier and moves everything. And the border\'s last vehicle is at three, not four, so a load leaving here at eight on the 11th has seven hours and not eight.',
  '⚠ **The one I had forgotten is our own.** The marking is done with the stencil press, **which runs on the generator, which runs from one until four.** So the marking is not a day\'s work that can be done any time on the 10th; it is three hours, in the afternoon, and if it is not finished by four it waits until the next day at one.',
  '**What I am now working to.** Documents and load at the port **before 18.00 on the 13th**; load leaves here **08.00 on the 11th** to be at the border by three; marking **between one and four on the 9th**, brought forward a day. ⚠ **Three of those four times came from small print and not from anybody\'s plan**, and the fourth is in this building.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the real deadline for the consignment, and how much earlier is it than the headline?'));
out.push(item('2', 'Why is the marking three hours and not a day?'));
out.push(item('3', 'How many of the four working times came from small print?'));
out.push(box('Writer\'s box', [
  '**The fixed points and their small print — four parts:** **a table with headline · cut-off · next one · cost** → ⚠ **what changed when you wrote the small print down** → ⚠ **the fixed point inside your own building** → **what you are now working to.**',
  '⚠ **The cut-off column is the document.** Everything else on the page is interesting; that column is what the dates become.',
  '⚠ **Always include the cost of missing it, in days.** *Seven days.* ⚠ Without it the reader treats every fixed point as equally serious, and they are not: one of these costs a week and one costs an afternoon.',
  '⚠ **Look for the fixed point inside your own building, and expect to have forgotten it.** The generator from one until four, the person who finishes at four exactly, the office that shuts on Friday. ⚠ **A fixed point does not have to be published to be a fixed point, and the unpublished ones are the ones left out of programmes.**',
  '⚠ **Then restate every date in the programme as the cut-off and not the headline**, and say how many of them came from small print. *Three of those four times came from small print and not from anybody\'s plan.*',
  '⚠ **Put the hour in, not just the day.** *Before 18.00 on the 13th* is a working instruction; *by the 13th* is a hope with a date on it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the fixed points in something you are running, with their small print (**60 words or more**). Use the frame.'));
out.push(p('**THE FIXED POINTS IN ______________, AND THEIR SMALL PRINT. ______________. ______________. ⚠ ______________ of them.**   ______________ | ______________ | ⚠ ______________ | ______________ | ⚠ **______________**   ______________ | ______________ | ______________ | ______________ | ______________   ⚠ **What changed when I wrote the small print down.** ______________, which is ______________ earlier and ______________.   ⚠ **The one I had forgotten is our own.** ______________, which runs on ______________, so ______________ is not ______________; it is ______________.   **What I am now working to.** ______________ before ______________; ______________ at ______________. ⚠ ______________ of those came from small print.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these dates is a headline and which is a cut-off?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A cut-off column, from the small print', ''],
  ['The cost of missing each one, in days', ''],
  ['A fixed point inside your own building', ''],
  ['Every date restated as a cut-off with an hour', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own building\'s fixed point. The class says how many programmes it would have broken.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a headline time was taken for the real one (**140 to 180 words**). Say where the real time was printed, who found it, and when.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _present simple for every schedule?_   ? _where was the real time printed, and who had read it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the real time printed on the same page as the headline? Usually all three — it is almost never hidden, only smaller.'));
out.push(box('Homework', ['Write your final text. Then find the small print of one timetable you depend on and write the cut-off, the next one and the cost of missing it (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.6 =======================
out.push(pb());
out.push(h2('13.6  A programme somebody else can run'));
out.push(p('**Function:** writing a programme for the person who will run it without you   ·   **Grammar:** the programme page — one line, one owner, one date   ·   **Pronunciation:** handing over a programme aloud in ninety seconds'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you are running. If you were away for a week, what is the one thing nobody else would know?'));
out.push(p('**b**  Which of these belongs on a programme page? _the aim of the project · who to telephone if the load is refused · why the customer matters · the date the stencils come from Baghdad Street._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the programme Lina is given?   **A** the dates   **B** it tells her what to do and not what to do when it goes wrong   **C** the order'));
out.push(p('**b**  Listen again. **1** What three things does Lina ask for that are not on the page? **2** What does Nour add to every line as a result?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  "What do I do if it is not there?"', [
  ['Nour', 'This is the programme. Eight lines, the dates, and who does each one. Can you run it on Thursday if I am at the other site?'],
  ['Lina', 'Line three. "Marking, 9th, one to four." If the stencils are not here, what do I do?'],
  ['Nour', '…Telephone Baghdad Street and ask Hala to send them with Fadi.'],
  ['Lina', 'That is not on the page. Line five. "Load leaves 08.00 on the 11th." If Fadi is not here at eight?'],
  ['Nour', 'Wait until half past and then telephone me.'],
  ['Lina', 'Also not on the page. And line seven: "Documents to the port before 18.00 on the 13th." If the clearance is not through?'],
  ['Nour', 'Then we have missed the sailing and the next one is the 21st and I have to telephone Ms Tannous, and that one is mine and not yours.'],
  ['Lina', '⚠ So the page tells me what to do when everything happens, and I need the page for when it does not.'],
  ['Nour', 'Which is every week.'],
  ['Lina', 'It is my fourth day. I do not know what normal looks like, so I cannot tell what is going wrong — ⚠ **which means I need the line that says what to do more than you do.**'],
  ['Nour', 'Then every line gets three things: who, by when, and **what to do if it has not happened by then, and who to tell.** Eight lines becomes eight lines with a tail.'],
  ['Lina', 'And if I do not know whether something has happened?'],
  ['Nour', '⚠ Then that is the answer to the fourth thing I had not thought of: **how you will know.** *The stencils are here when they are on the bench, not when Hala says she has sent them.* ⚠ **Who, by when, how you will know, and what to do if not.** Four columns, and only the first two were on my page.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The programme page — four columns, and the two that get left out**',
  table(['Column', 'Example', 'Why it is there'], [
    ['**who**', 'Abu Yasser', 'a line with no name is nobody\'s'],
    ['**by when**', '9th, between one and four', 'the hour, not only the day'],
    ['⚠ **how you will know**', 'on the bench — not *Hala says she has sent them*', 'evidence, not assurance'],
    ['⚠ **if not, and who to tell**', 'telephone Hala; if no answer by two, me', 'the only column a new person can use'],
  ], [1.3, 2.3, 1.9]),
  '⚠ **A programme that tells somebody what to do when everything happens is a programme for you.** You know what normal looks like; **the person running it does not, so they cannot tell what is going wrong** — and the *if not* column is for them and not for you.',
  '⚠ **How you will know is the column nobody writes.** *The stencils are here when they are on the bench, not when Hala says she has sent them.* ⚠ Assurance is not evidence, and a programme run on assurance fails on the day somebody is being kind to you.',
  '⚠ **Every *if not* ends with a person and a time.** *Telephone Hala; if no answer by two, telephone me.* An *if not* with no time in it will be acted on at five o\'clock.',
  '⚠ **Say which lines are not theirs.** *Telephoning Ms Tannous is mine and not yours.* ⚠ A new person handed a programme will attempt everything on it, including the things that would be wrong for them to do.',
  '⚠ **One line, one owner, one date.** Two names in a cell means neither of them does it; two dates means the later one.',
  '**Practise:** Take four lines of something you run and give each all four columns. ⚠ Do the *how you will know* column last and out loud — it is the one that exposes the lines you have been taking on trust.',
  '**Useful phrases:**  who, by when, how you will know, and if not  ·  that is mine and not yours  ·  on the bench, not somebody\'s word  ·  if no answer by two, telephone me  ·  it is my fourth day',
  '**Pronunciation – handing over in ninety seconds.** 🔊 **Track 13.12** Listen to the handover: _line three, marking, the 9th, one to four — Abu Yasser — you will know because they are on the bench — if not, Hala, and me by two._ ⚠ Four groups, falling at the end of each. Repeat four, then hand over one line of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A hands over a programme line; B asks the two missing questions until the line is runnable. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Line __________. "__________, __________." __________ does it.'],
  ['B', 'If __________ is not __________, what do I do?'],
  ['A', '…__________.'],
  ['B', 'That is not on the page. And how will I know it has happened?'],
  ['A', '__________.'],
  ['B', '⚠ Not __________\'s word — what I can see. And by when do I tell you?'],
  ['A', '__________. ⚠ And __________ is mine and not yours.'],
]));
out.push(table(['Role card 1 — the marking line', 'Role card 2 — the documents line'], [[
  '"Marking, 9th, one to four, Abu Yasser." ⚠ Missing: the stencils come from Baghdad Street, the second store, which opened on 8 June and holds the only set; you know they are here when they are on the bench; if not, telephone Hala, and Nour by two. And the press runs on the generator, which runs from one until four.',
  '"Documents to the port before 18.00 on the 13th." ⚠ Missing: you know the clearance is through when the stamped copy is in your hand; if it is not through by noon on the 13th, tell Nour at once — ⚠ **and telephoning Ms Tannous is Nour\'s line, not yours.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the handover for the class – **without the book**.'));
out.push(p('**Listener task:** write the line as four columns. ⚠ Then say which column the original page was missing and which column the person actually needed most.'));
out.push(PHRASE_CARD(['who, by when, how you\'ll know, if not', 'that is mine, not yours', 'on the bench, not his word', 'tell me by two', 'it is my fourth day', 'one line, one owner']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** lines of something you run. Fill all four columns, and do the third one last.'));
out.push(table(['The line', 'Who', 'By when', 'How you will know', 'If not — and who to tell'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.3, 0.8, 1, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My line is _______. How you will know is _______, and the one I had been taking on trust is _______. The _______ line is mine and not theirs._'));
out.push(p('**Listener task:** count the lines in the room whose *how you will know* is somebody\'s word rather than something visible. ⚠ Then ask what would happen if that person were being kind.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a cell with two names in it, and an _if not_ with no time in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the programme page, and answer the questions.'));
out.push(box(null, [
  '**TANNOUS TRIAL CONSIGNMENT — PROGRAMME. Issued 8 January by N. Mansour. ⚠ Runnable by anybody. The fixed point is 18.00 on the 13th, not 6.40 on the 14th.**',
  table(['#', 'The line', 'Who', 'By when', 'How you will know', 'If not — and who to tell'], [
    ['1', 'collect 24 cartons, Aleppo', 'Ms Shamsi\'s own carrier', '8th', 'the cartons are in bay 2', 'telephone her by 11.00; Nour by noon'],
    ['2', 'check count and condition', 'Abu Yasser', '8th, on arrival', 'the gate sheet is signed by name', '⚠ do not sign; Nour at once'],
    ['3', 'marking, stencil press', 'Abu Yasser', '9th, **one to four** (generator)', 'the stencils are on the bench', 'telephone Hala, Baghdad Street; Nour by 14.00'],
    ['4', 'pack and seal', 'Abu Yasser, Lina', '10th', '24 cartons on the pallet, strapped', 'Nour by 16.00 on the 10th'],
    ['5', 'load leaves for Beirut', 'Fadi', '**08.00 on the 11th**', 'the van is gone from the yard', 'wait to 08.30, then Nour'],
    ['6', 'at the border', 'Fadi', '**by 15.00** (last vehicle)', 'Fadi telephones from the post', 'Nour at once — ⚠ **not the customer**'],
    ['7', 'clearance', 'Mr Jaber', '12th, allow to the 14th', 'the stamped copy in your hand', 'if not through by noon on the 13th, Nour at once'],
    ['8', 'documents and load at the port', 'Mr Jaber', '⚠ **before 18.00 on the 13th**', 'the port receipt', '⚠ **Nour. Telephoning Ms Tannous is Nour\'s line and nobody else\'s.**'],
  ], [0.3, 1.8, 1.1, 1.4, 1.7, 2]),
  '⚠ **Two lines on this page are not instructions.** Line 2 says *do not sign* and line 6 says *not the customer*. ⚠ **A programme for a new person has to say what not to do as clearly as what to do**, because the wrong action is always available and often looks helpful.',
  '**The fixed point, restated.** The headline is the vessel at 6.40 on the 14th. ⚠ **The date this programme works to is 18.00 on the 13th**, which is the cut-off for documents and delivery, and the cost of missing it is the next sailing on the 21st — **seven days, not twelve hours.**',
  '⚠ **What is deliberately not on this page.** Why Ms Tannous matters, what the consignment is worth, and what happens to the February order if this one is late. ⚠ **None of it helps the person running the programme on Thursday**, and a page with it on is a page that gets read once and put down.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two lines tell the reader what not to do, and why are they there?'));
out.push(item('2', 'What date does the programme work to, and why is it not the 14th?'));
out.push(item('3', 'Name two things deliberately left off the page, and say why.'));
out.push(box('Writer\'s box', [
  '**The programme page — four parts:** **the heading with the real fixed point in it** → **the table: # · line · who · by when · how you will know · if not and who to tell** → ⚠ **the lines that say what not to do** → ⚠ **what is deliberately not on the page.**',
  '⚠ **Put the real fixed point in the heading, and say it is not the headline.** *The fixed point is 18.00 on the 13th, not 6.40 on the 14th.* A reader who looks at nothing else has the only date that cannot move.',
  '⚠ **Number the lines.** A person telephoning you from a border says *line six*, and that is worth more than any wording on the page.',
  '⚠ **Write the *do not* lines.** *Do not sign. Not the customer.* ⚠ The wrong action is always available and often looks helpful, and the only defence is to have written it down.',
  '⚠ **Every *if not* carries a person and an hour.** *Wait to 08.30, then Nour.* ⚠ *Tell Nour* with no hour will be done at the end of the day, which is after the hour at which it was useful.',
  '⚠ **Then say what you have deliberately left out.** Worth, context, consequences. ⚠ **None of it helps the person running the programme on Thursday** — and saying so stops a reader thinking the page is incomplete.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a programme page for something you run, runnable by somebody else (**60 words or more**). Use the frame.'));
out.push(p('**______________ — PROGRAMME. Issued ______________ by ______________. ⚠ Runnable by anybody. The fixed point is ______________, not ______________.**   1 | ______________ | ______________ | ______________ | ______________ | ______________   2 | ______________ | ______________ | ______________ | ______________ | ⚠ **do not ______________; ______________ at once**   3 | ______________ | ______________ | ______________ | ______________ | ______________   ⚠ **The lines that are not instructions.** Line ______________ says ______________ and line ______________ says ______________.   **The fixed point, restated.** ______________, and the cost of missing it is ______________.   ⚠ **What is deliberately not on this page.** ______________ — none of it helps ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the newest person in the building** — then ask one question: **could I run line three on Thursday?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The real fixed point in the heading', ''],
  ['Numbered lines, one owner each', ''],
  ['*How you will know* — visible, not somebody\'s word', ''],
  ['Every *if not* with a person and an hour', ''],
  ['At least one *do not* line', ''],
  ['What is deliberately not on the page', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *do not* lines. The class says what helpful wrong action each one prevents.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you ran something from somebody else\'s programme, or somebody ran yours (**140 to 180 words**). Say which column was missing and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _all four columns on every line?_   ? _which column was missing, and who found out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the missing column *if not*? Usually all three — and in all three the person did something helpful and wrong.'));
out.push(box('Homework', ['Write your final text. Then take one line of a programme you have given somebody and add *how you will know* and *if not, and who to tell* (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 13.7 =======================
out.push(pb());
out.push(h2('13.7  Review & Mediate: the programme nobody reads twice'));
out.push(p('**Function:** handing a programme to the person who must run it   ·   **Review:** arranged, intended, predicted · the evidence column · time, day, date · the four kinds of entry · timetables and cut-offs · the four columns'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What do you write next to every date in a programme, and what is a legitimate answer?',
  '**2** What are the four kinds of diary entry, and which one do you write at the top?',
  '**3** What is the difference between a headline time and a cut-off, and which goes in the programme?',
  '**4** What are the four columns of a programme page, and which two are usually missing?',
  '**5** How do you measure the cost of missing a fixed point?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Lina say she read the programme twice and the handover once?   **A** the programme was long   **B** because the handover told her what the page could not   **C** she lost the page'));
out.push(p('**b**  Listen again. **1** What does she say she cannot judge? **2** What does Nour say the handover is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  "I read the page twice and I still need you for ninety seconds"', [
  ['Lina', 'I have read the programme twice. May I ask you four things that are not on it?'],
  ['Nour', 'Go on.'],
  ['Lina', 'Which line is most likely to go wrong?'],
  ['Nour', 'Line three, the marking, because the stencils are at the other site and the press runs on the generator.'],
  ['Lina', 'Which line would be worst if it went wrong?'],
  ['Nour', 'Line eight. Missing six in the evening on the 13th costs seven days, and everything else on the page costs hours.'],
  ['Lina', 'Those are two different lines. So the one I watch is not the one I worry about.'],
  ['Nour', '⚠ Which is the whole of running anything, and it is not on the page because a page cannot rank its own lines.'],
  ['Lina', 'Third: what will look wrong to me but is normal?'],
  ['Nour', 'The yard being empty at half past eight on a Saturday. Fadi loads at eight and goes, and it looks as though nothing has happened. ⚠ **You will think the load has not left. It has.**'],
  ['Lina', 'And fourth: what will look normal and is wrong?'],
  ['Nour', '…The gate sheet being signed when you arrive. ⚠ **If it is already signed, nobody counted** — and that one I would not have told you, because I have stopped seeing it.'],
  ['Lina', 'That is the one I would never have found.'],
  ['Nour', '⚠ **Nor would I, by writing the page.** A programme says what to do. **A handover says which line to watch, which line to fear, what looks wrong and is not, and what looks right and is not** — and the last of those four is the only one that cannot be written down by the person who wrote the programme, because they have stopped being able to see it.'],
  ['Lina', 'So the page is for the work and the ninety seconds is for the judgement.'],
  ['Nour', '⚠ **And the ninety seconds has to happen with the page in the other person\'s hand**, which is why a programme sent by message is a programme nobody reads twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the four questions a handover answers and a page cannot**',
  table(['The question', 'The answer about this consignment'], [
    ['Which line is **most likely** to go wrong?', 'line 3, the marking — other site, and the generator'],
    ['Which line would be **worst** if it did?', 'line 8 — seven days, where the rest cost hours'],
    ['What will **look wrong and be normal**?', 'the empty yard at 08.30 — the load has gone'],
    ['⚠ What will **look normal and be wrong**?', '⚠ the gate sheet already signed — nobody counted'],
  ], [2, 3.6]),
  '⚠ **A page cannot rank its own lines.** The line you watch and the line you fear are different lines, and knowing which is which is the whole of running anything.',
  '⚠ **The fourth question is the one that cannot be written down by whoever wrote the programme**, because they have stopped seeing it. *That one I would not have told you, because I have stopped seeing it.* ⚠ It comes out only when a new person asks.',
  '⚠ **Hand over with the page in the other person\'s hand.** A programme sent by message is a programme nobody reads twice — and the ninety seconds is where the judgement lives.',
  '⚠ **Ask the four questions when you are the one receiving.** *May I ask you four things that are not on it?* ⚠ It is the most useful sentence a new person can say, and the fourth day is the right time to say it.',
  '**Practise:** Hand over something you run in ninety seconds, answering the four questions in order. ⚠ Your partner holds the page and must interrupt if an answer is already printed on it.',
  '**Useful phrases:**  which line is most likely to go wrong?  ·  which would be worst?  ·  what will look wrong and is normal?  ·  what will look normal and is wrong?  ·  the page is for the work, this is for the judgement',
  '**Pronunciation – the ninety-second handover.** 🔊 **Track 13.14** Listen: _most likely, line THREE // worst, line EIGHT // looks wrong, the empty YARD // looks right, the sheet already SIGNED._ ⚠ Four groups, each ending on the thing itself. Repeat four, then hand over one line of your own.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A holds a programme and hands it over; B asks the four questions and interrupts whenever the answer is already printed.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Hand over the Tannous programme. ⚠ The trap is the second question: most people answer *most likely* twice and never name the line that would be worst, because the worst line is usually the one furthest away and nothing has gone wrong with it yet.',
  'Hand over a week of your own work. ⚠ The trap is the fourth question. Expect to be unable to answer it, and say so: *I cannot see it any more* is the true answer, and the right next move is to ask the newest person what looked odd on their first day.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the handover for the class – **without the book**.'));
out.push(p('**Listener task:** write the four answers. ⚠ Then say which of the four was hardest to give, and whether the person giving it had to stop and think or could not answer at all.'));
out.push(PHRASE_CARD(['most likely to go wrong', 'worst if it did', 'looks wrong, is normal', 'looks normal, is wrong', 'I have stopped seeing it', 'the page is for the work']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Hand over something of yours in ninety seconds and collect their four answers.'));
out.push(table(['The four questions', 'What they answered'], [
  ['Most likely to go wrong', ''],
  ['Worst if it did', ''],
  ['Looks wrong, is normal', ''],
  ['⚠ Looks normal, is wrong', ''],
], [2, 4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the fourth answer was, or that there was not one. This is the **first** unit of this book, and the thing the unit has been building to is the thing nobody writes down: **a programme is written by the person who can no longer see what is odd about the work, so the line that looks normal and is wrong is invisible to its author and obvious to whoever arrived on Monday — which means the handover is not a courtesy to the new person, it is the only inspection the programme will ever get.**'));
out.push(p('_The programme says _______. What looks normal and is wrong is _______. I would not have written it down because _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a cut-off · a milestone · a dependency · a task owner · to firm up · to flag._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 3)', 10));
out.push(p('⚠ **This unit practises Part 3: matching a question to the right part of a text.** Read the five sections of the programme note, then answer the five questions by choosing the section (**A–E**).'));
out.push(box(null, [
  '**A**  _Every line of a programme carries the name of one person. Where two names appear in one line, neither of them does it. Where a line carries no name, it is the issuer\'s._',
  '**B**  _Dates are written as the cut-off and not as the published time, with the hour given. Where a published time differs from the working cut-off, both are shown and the cut-off governs._',
  '**C**  _Each line states how the reader will know the step has happened. An assurance from another person is not evidence; something the reader can see is._',
  '**D**  _Each line states what to do if the step has not happened by its time, naming a person and an hour. Lines which the reader must not attempt are marked. Contacting a customer is never delegated by a programme._',
  '**E**  _A programme is handed over in person with the page in the reader\'s hand. The handover states which line is most likely to fail, which line would be most costly, and what will look wrong without being wrong._',
], 'FFFFFF', C.navy));
[
  '**1**  Which section tells you a programme must not be sent by message alone?',
  '**2**  Which section says somebody\'s word is not enough?',
  '**3**  Which section covers a line with two people written against it?',
  '**4**  Which section tells you who may telephone a customer?',
  '**5**  Which section tells you which of two times to put in the programme?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling somebody which line of a programme to watch while you are away.',
  'The shape: **the line to watch and why** · ⚠ **the line that would be worst, if it is a different line** · **what to do, with an hour and a name.**',
  '⚠ **In forty words you cannot hand over the programme, so hand over the ranking.** The page already says what to do; only you can say which line to look at first.',
  '⚠ **And if the two lines are the same line, say so** — *the one to watch and the one to fear are the same this week* is a sentence worth four of its words, because it almost never happens.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** You are away on Thursday. Write to the person running your programme (**35 to 45 words**). Give **the line to watch**, ⚠ **the line that would be worst**, and **what to do, with an hour and a name.**'));
out.push(p('______________, the line to watch on Thursday is ______________, because ______________. The one that would be worst is ______________. If ______________ by ______________, telephone ______________ — not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The line to watch, with why', ''],
  ['The line that would be worst, named separately', ''],
  ['An hour and a name', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full programme page for something you run (**140 to 180 words**): the real fixed point in the heading, numbered lines with all four columns, at least one *do not* line, and what you have deliberately left off.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask the newest person where you work what looked odd to them in their first week, and write down the one thing you had stopped seeing (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Fadi has it in his sheet and has read it. Write:   a) we are going to load on the 11th   b) we are loading on the 11th   c) we intend to load on the 11th',
  '2  Nobody has been told and you have only decided. Write:   a) we are packing on the 9th   b) we are going to pack on the 9th   c) packing happens on the 9th',
  '3  _I hope to send it on Friday._ A reader should ___.   a) plan against it   b) ignore the line   c) treat it as arranged',
  '4  Published 6.40 on the 14th; documents close 18.00 on the 13th. The programme date is ___.   a) 6.40 on the 14th   b) 18.00 on the 13th   c) either',
  '5  _The vessel ___ at 6.40 on the 14th._   a) is sailing   b) will sail   c) sails',
  '6  Mr Jaber says he will be at the border on the 12th. That diary entry is ___.   a) an appointment   b) an expectation   c) a fixed point',
  '7  An _if not_ instruction must always name ___.   a) a person and an hour   b) a reason   c) a cost',
  '8  _How you will know_ is answered properly by ___.   a) Hala says she has sent them   b) they are on the bench   c) they were sent on Tuesday',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 13.15** Listen to the handover. Complete the note.   Line most likely to go wrong: ______   Line that would be worst: ______   Cost of missing it: ______   Looks wrong and is normal: ______   Looks normal and is wrong: ______'));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['Lina', 'Which line is most likely to go wrong?'],
  ['Nour', 'Line three, the marking. The stencils are at the other site and the press runs on the generator, which runs from one until four.'],
  ['Lina', 'And which would be worst?'],
  ['Nour', 'Line eight. Missing six in the evening on the 13th costs seven days, because the next sailing is the 21st. Everything else on the page costs hours.'],
  ['Lina', 'What will look wrong to me and be normal?'],
  ['Nour', 'The yard empty at half past eight on a Saturday. Fadi loads at eight and goes.'],
  ['Lina', 'And what will look normal and is wrong?'],
  ['Nour', 'The gate sheet already signed when you arrive. If it is already signed, nobody counted — and I had stopped seeing that one.'],
]));
out.push(p('**C  Writing.** Write three lines of a programme with all four columns (**60 words or more**), including one *do not* line, and say which date is a cut-off and not a headline.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 13)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what is arranged and write the evidence next to it, including the word *nothing*',
  '☐ grade an intention and attach what it depends on',
  '☐ give and take an appointment as time, day, date, one per line',
  '☐ tell an appointment, a commitment, an expectation and a fixed point apart',
  '☐ sort a month into arranged, intended and predicted, and write a branch for each prediction',
  '☐ find a cut-off in the small print and say what missing it costs',
  '☐ write a programme page somebody else can run, with *how you will know* and *if not*',
  '☐ hand a programme over in ninety seconds, answering the four questions a page cannot',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
