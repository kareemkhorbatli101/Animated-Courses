// Proactive Business English B2 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a meeting you did not call · a standing item · an item taken under another heading · to be minuted · a minute that does not record a decision · an action with no owner · an owner with no date · a decision taken in the corridor · the real agenda · a stated agenda · a person who came for one item · to read the room · to ask what the meeting is for · an item nobody will raise · to put a thing on the record · a note of dissent · to be recorded as agreeing · silence taken as assent · a matter for a separate meeting · to carry an item over · a decision minuted as a discussion · a discussion minuted as a decision · to circulate a draft minute · a correction to a minute · the chairman\'s summary · a point of accuracy · a point of substance · to take a note yourself · two notes of one meeting · an attendance list · a decision recorded without a mover · the version that becomes the record';
const COLLOC = 'to call a meeting · to chair an item · to minute a dissent · to read a room · to circulate a minute · to correct a record · to take a note · to raise an item';
const BACK_AT_B2 = 'minutes · agenda · noted';

out.push(h1('Unit 10  The Meeting You Did Not Call'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  find out what a meeting is for before it starts',
  '**10.2**  name what each person in the room came for',
  '**10.3**  raise the item that is not on the agenda and is the reason for the meeting',
  '**10.4**  say the thing that stops a decision being taken on the wrong basis',
  '**10.5**  read a minute as the decision, and spot what it does not record',
  '**10.6**  correct a minute you did not write, on accuracy and not on substance',
  '**10.7**  Review & Mediate: the minute that decides what happened',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Four people, three agendas, one hour', [
  '⚠ **Mr Ayoub has called a meeting for Tuesday at nine, for one hour, with one item on the paper:** ***the Dallal matter*.** ⚠ **Four people will be in the room and three of them want different things out of it.**',
  '⚠ **Mr Ayoub wants the matter closed before the bank\'s credit committee meets on Thursday.** **Mr Sayegh wants nothing put in writing that could be read later as an admission.** ⚠ **Bassel wants Mr Dallal\'s account put on the standing exception list in the credit policy, because it stands at 9.2 million at seventy-four days.**',
  '⚠ **Nour did not call the meeting and is the fourth person.** **What she needs is a decision on whether the root-cause paper goes to Mr Dallal\'s board as it stands** — **which is not on the paper and is the only thing on the paper that is a decision.**',
  '⚠ **And there is one item nobody in the room will raise, although all four know it.** ⚠ **The reason Thursday matters is that the facility and the Dallal claim are the same problem** — **and saying so in a minuted meeting puts it in a document the bank can ask for.**',
], C.lyellow, C.orange));

// ======================= CYCLE 10.1 =======================
out.push(pb());
out.push(h2('10.1  What is this meeting for?'));
out.push(p('**Function:** establishing the purpose of a meeting you did not call   ·   **Grammar:** _is this for a decision or for a discussion? · what would a good hour look like?_   ·   **Pronunciation:** a question about purpose asked without challenge'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a meeting at your work that somebody else called. ⚠ Then say what it turned out to be for.'));
out.push(p('**b**  Which question gets an answer? _What is this meeting about? · Is this for a decision, and if so, whose?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say about a meeting with one word on the paper?   **A** it is badly organised   **B** one word on the paper means four people will arrive expecting four different hours   **C** it is normal'));
out.push(p('**b**  Listen again. **1** What are the three questions to ask before the day? **2** Why does she say to ask them of the person who called it, in writing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  "One word on the paper"', [
  ['Nour', 'Tuesday at nine. One hour. The paper says *the Dallal matter*.'],
  ['Hala', '⚠ **Three words, and four people will arrive expecting four different hours.**'],
  ['Nour', 'It is Mr Ayoub\'s meeting. He knows what he wants out of it.'],
  ['Hala', '⚠ **He does, and he is the only one who does, and that is not the same as the room knowing.** ⚠ **Ask three questions before Tuesday.**'],
  ['Nour', 'Which three?'],
  ['Hala', '⚠ **Is it for a decision or for a discussion? If it is for a decision, whose decision is it? And what would a good hour look like at ten o\'clock?**'],
  ['Nour', 'The third one is strange.'],
  ['Hala', '⚠ **It is the only one that cannot be answered with a word.** ⚠ **A man who tells you what a good hour looks like has told you his agenda without being asked for it** — **and a man who cannot answer it has called a meeting to think out loud, which is a different hour and needs a different preparation.**'],
  ['Nour', 'And I ask in writing?'],
  ['Hala', '⚠ **Two lines, the day before, and not because you need it in a document.** ⚠ **Because a question asked in the room at nine takes the first ten minutes of the hour and sounds like an objection** — **and the same question asked on Monday is help.**'],
  ['Nour', 'And if he does not answer?'],
  ['Hala', '⚠ **Then you know it is a discussion and you prepare for a discussion.** ⚠ **An unanswered question about purpose is itself an answer**, **and it is worth having before nine rather than at twenty past.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three questions before the day**',
  table(['', 'Ask', 'What the answer tells you'], [
    ['**1**', '⚠ *Is this for a decision or for a discussion?*', '**which of the two hours to prepare for** — **and they need opposite preparations**'],
    ['**2**', '⚠ *If it is for a decision, whose decision is it?*', '⚠ **who has to be persuaded, and whether that person will be in the room**'],
    ['**3**', '⚠ *What would a good hour look like at ten o\'clock?*', '⚠ **the real agenda, given to you without being asked for** — **and it is the only one of the three that cannot be answered with a word**'],
  ], [0.4, 3.2, 4.4]),
  '⚠ **One word on the paper means four people arriving expecting four different hours.** ⚠ **The person who called it knows what he wants, and that is not the same as the room knowing.**',
  '⚠ **The third question is the one that works.** ⚠ **A man who tells you what a good hour looks like has given you his agenda** — **and a man who cannot answer it has called a meeting to think out loud, which is a legitimate hour and a different preparation.**',
  '⚠ **Ask the day before, in two lines, not in the room.** ⚠ **The same question at nine o\'clock takes the first ten minutes and sounds like an objection; on Monday it is help.**',
  '⚠ **An unanswered question about purpose is an answer.** ⚠ **It means discussion** — **and it is better to know that at eight on Monday than at twenty past nine on Tuesday.**',
  '⚠ **And never ask *what is this meeting about?*** **It is answerable with the words already on the paper** — ⚠ *the Dallal matter* — **so it costs you a question and buys nothing.**',
  '**Practise:** Take three meetings in your diary that somebody else called. Write the three questions for each.',
  '**Useful phrases:**  is this for a decision or a discussion?  ·  whose decision is it?  ·  what would a good hour look like?  ·  four people, four different hours  ·  I will prepare for a discussion',
  '**Pronunciation – asking about purpose without challenge.** 🔊 **Track 10.2** Listen twice. ⚠ **The first says *is this for a decision or a discussion?* with the stress even across both nouns.** ⚠ **The second stresses *decision*.** **Stressed, it implies the meeting ought to reach one; even, it is a question about preparation.** Ask it four times even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a meeting invitation; B asks the three questions.'));
out.push(dlg(null, [
  ['A', '__________ at __________. One hour. The paper says *__________*.'],
  ['B', '⚠ **Is it for a decision or for a discussion?**'],
  ['A', '__________.'],
  ['B', '⚠ **If it is for a decision, whose is it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what would a good hour look like at __________ o\'clock?**'],
  ['A', '__________.'],
  ['B', '⚠ **That is the agenda. Where will you ask these?**'],
  ['A', '⚠ **In two lines, __________, and not in the room.**'],
]));
out.push(table(['Role card 1 — the third question', 'Role card 2 — the question that buys nothing'], [[
  '⚠ **B asks what a good hour would look like at ten o\'clock.** ⚠ **A, playing the person who called the meeting, tries to answer with a word and cannot** — **because the question asks for a state of affairs and not a topic.** ⚠ **What comes out is the real agenda: *the paper has gone to Dallal\'s board and the bank does not know anything it did not know on Friday*.**',
  '⚠ **A asks *what is this meeting about?*** ⚠ **B answers *the Dallal matter*, which is what the paper already said.** ⚠ **A has spent a question and learned nothing** — **and B points out that the only questions worth asking are ones whose answers are not already in the invitation.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three questions and the three answers. ⚠ Then say which answer gave away the agenda, and whether the person who gave it knew he had.'));
out.push(PHRASE_CARD(['decision or discussion?', 'whose decision?', 'a good hour at ten', 'four different hours', 'I will prepare for a discussion']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** meetings somebody else has called. Answer the three questions for each.'));
out.push(table(['The meeting', 'Decision or discussion?', 'Whose decision?', 'What a good hour looks like'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.4, 1.4, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The meeting is _______. It is for a _______. The decision is _______\'s. A good hour at ten o\'clock would look like _______. And I will prepare _______._'));
out.push(p('**Listener task:** count how many meetings were for a decision. ⚠ Then ask how many of those decisions belonged to somebody who would not be in the room, and expect at least one.'));
out.push(p('**Board clinic:** your teacher writes three questions on the board — look for *what is this about?*, and a question asked at nine o\'clock that should have been asked on Monday. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**TUESDAY AT NINE. 1 June. N. Mansour. Two lines to Mr Ayoub, and what came back.**',
  '⚠ **What I sent, on Monday at four:** _“Before tomorrow — is Tuesday for a decision or a discussion, and if a decision, is it yours or the board\'s? And what would a good hour look like at ten?”_',
  '⚠ **What came back, forty minutes later:** _“A decision, mine. A good hour at ten: the paper has gone to Dallal\'s board, and nothing has gone to the bank that they did not have on Friday.”_',
  table(['', 'What the answer gave me', 'What I would not have known at nine'], [
    ['**1**', '**it is a decision, and it is his** — **so one person has to be persuaded and he is in the room**', '**I had assumed the board, which would have made it a discussion**'],
    ['**2**', '⚠ **the paper going to Dallal\'s board is part of a good hour** — **which is what I came for**', '⚠ **that my item is on his agenda at all** — **it is not on the paper**'],
    ['**3**', '⚠ **_nothing has gone to the bank that they did not have on Friday_**', '⚠ **that Thursday is in the room, and that it is the half of the hour nobody will say out loud**'],
  ], [0.4, 3.6, 3.4]),
  '⚠ **The third line of his answer is the one I did not ask for and it is worth more than the other two.** **I asked what a good hour looks like, which is a question about Tuesday.** ⚠ **He answered with a condition about Thursday** — **and a man who tells you what must still be true on Thursday has told you what the meeting is really for.**',
  '⚠ **I have not replied to it and I will not.** **If I write back asking what the bank has to do with the Dallal matter, I have put the connection in an e-mail** — ⚠ **and the connection is the one thing in this business that nobody wants in a document.** **10.3 is how it gets raised, and it is not raised in writing.**',
  '⚠ **And the cost of the two lines was forty minutes of his Monday afternoon and nothing of my Tuesday.** **The same three questions at nine o\'clock would have taken ten minutes of a sixty-minute hour** ⚠ **and would have been answered in front of two other people, which is not where a man says *nothing has gone to the bank*.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which line of the answer was not asked for, and why is it worth most?'));
out.push(item('2', 'Why will the writer not reply to it?'));
out.push(item('3', 'What would the same questions have cost at nine o\'clock?'));
out.push(box('Writer\'s box', [
  '**Two lines before a meeting — four parts:** ⚠ **the three questions in one short message** → **what the answer gave you** → ⚠ **what you would not have known at nine** → ⚠ **and the part of the answer you did not ask for.**',
  '⚠ **Put all three questions in two lines and send them the day before.** ⚠ **Two lines is answerable in a corridor; a page is a document somebody has to think about** — **and the forty minutes it took him is forty minutes of his preparation, not yours.**',
  '⚠ **Ask what a good hour looks like, and read the answer for the condition rather than the topic.** ⚠ *Nothing has gone to the bank that they did not have on Friday* **is not about Tuesday at all** — **and a condition about another day is the real purpose of the meeting.**',
  '⚠ **Do not reply to the part you did not ask for.** ⚠ **A question in writing about why the bank matters puts the connection in a document** — **and the connection is the thing nobody wants written down.**',
  '⚠ **Price the alternative.** ⚠ **Three questions at nine o\'clock cost ten minutes of a sixty-minute hour and are answered in front of two other people** — **which is not where a man says what he said on Monday afternoon.**',
  '⚠ **And keep the answer.** **It is the only statement of the meeting\'s purpose that will exist in writing**, ⚠ **and in 10.7 it is what a minute gets measured against.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two lines for a meeting somebody else has called, and what came back (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. Two lines to ______________, and what came back.**   ⚠ **What I sent:** _“Before ______________ — is ______________ for a decision or a discussion, and if a decision, is it ______________? And what would a good hour look like at ______________?”_   ⚠ **What came back:** _“______________.”_   **1** | **______________** | **______________**   **2** | ⚠ **______________** | ⚠ **______________**   **3** | ⚠ **______________** | ⚠ **______________**   ⚠ **The ______________ line of his answer is the one I did not ask for and it is worth more than the others.** ⚠ **I asked about ______________ and he answered with a condition about ______________** — **and a man who tells you what must still be true on ______________ has told you what the meeting is for.**   ⚠ **I have not replied to it and I will not**, **because ______________.**   ⚠ **And the cost was ______________ of his ______________ and nothing of mine.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All three questions, in two lines, sent the day before', ''],
  ['*What a good hour looks like*, not *what is it about*', ''],
  ['The condition in the answer, identified', ''],
  ['The thing not replied to, with the reason', ''],
  ['The cost of asking at nine o\'clock instead', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the answer that came back. ⚠ The class says what the real agenda is — and where the answer names a topic rather than a state of affairs, the question was the wrong one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a meeting you went to without knowing what it was for (**200 to 240 words**). Say who called it, what the paper said, what you prepared, what it turned out to be, and what you would have done differently with an hour\'s warning.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was it a decision or a discussion?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer prepare for the wrong one? Usually two of three — ⚠ **and in both of those the writer had the invitation three days in advance and never asked.**'));
out.push(box('Homework', ['Write your final text. Then take the next meeting in your diary that you did not call, and send the three questions in two lines (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.2 =======================
out.push(pb());
out.push(h2('10.2  Three agendas in one room'));
out.push(p('**Function:** naming what each person came for   ·   **Grammar:** _he came for X · she needs Y out of this hour_   ·   **Pronunciation:** naming somebody\'s interest without imputing a motive'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a meeting with four people in it. ⚠ Say what each of the four came for.'));
out.push(p('**b**  Which can be said out loud in the room? _Bassel wants to protect himself. · Bassel needs the account on the exception list before the quarter closes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say happens when three agendas are not named?   **A** the meeting is shorter   **B** the person whose item comes last does not get it, and nobody notices   **C** people argue'));
out.push(p('**b**  Listen again. **1** What does he say to write down before the meeting? **2** What is the difference between an interest and a motive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  "Write down what each of us came for"', [
  ['Nour', 'Four of us and one hour. How does an hour get used?'],
  ['Bassel', '⚠ **Badly, unless somebody writes down what each of the four came for.** **Do it now, on one sheet, before Tuesday.**'],
  ['Nour', 'Mr Ayoub wants it closed before Thursday.'],
  ['Bassel', '⚠ **Yes. Me?**'],
  ['Nour', 'You want Dallal on the standing exception list in the credit policy.'],
  ['Bassel', '⚠ **Because the account is 9.2 million at seventy-four days and the policy says sixty.** ⚠ **That is an interest and I will say it out loud at nine o\'clock.**'],
  ['Nour', 'And Mr Sayegh wants nothing in writing that reads as an admission.'],
  ['Bassel', '⚠ **Also an interest, also sayable.** **And you?**'],
  ['Nour', 'A decision on whether the paper goes to Dallal\'s board as it stands.'],
  ['Bassel', '⚠ **Which is the only decision on the paper and it is not on the paper.** ⚠ **Write it at the top of your own sheet, because it will come up at nine fifty-five or not at all.**'],
  ['Nour', 'Why fifty-five?'],
  ['Bassel', '⚠ **Because three men with three interests will spend fifty minutes on the two that are easiest to agree**, **and the item belonging to the person who did not call the meeting goes last.** ⚠ **That is not malice, it is arithmetic.**'],
  ['Nour', 'And if I say *Bassel wants to protect himself*?'],
  ['Bassel', '⚠ **Then you have said a motive instead of an interest and I will deny it, correctly, and the meeting will spend four minutes on me.** ⚠ **An interest is what somebody needs out of the hour; a motive is why you think he needs it.** **Only the first is sayable, and only the first is useful.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Four people, their interests, and the order**',
  table(['Who', 'The interest — sayable', 'The motive — not sayable, and not useful'], [
    ['**Mr Ayoub**', '⚠ **the matter closed before Thursday**', '**that he is frightened of the committee**'],
    ['**Mr Sayegh**', '⚠ **nothing in writing that reads as an admission**', '**that he is covering himself**'],
    ['**Bassel**', '⚠ **the account on the standing exception list; 9.2 million at seventy-four days against a policy of sixty**', '**that he wants somebody else blamed for the debtor days**'],
    ['⚠ **Nour**', '⚠ **a decision on whether the paper goes to Dallal\'s board as it stands**', '—'],
  ], [1.1, 3.3, 3.3]),
  '⚠ **Write down what each person came for, on one sheet, before the day.** ⚠ **An hour with three unnamed agendas is spent on the two that are easiest to agree** — **and the item belonging to the person who did not call the meeting goes last.**',
  '⚠ **That is arithmetic and not malice**, **and it is why your own item goes at the top of your own sheet: it will come up at nine fifty-five or not at all.**',
  '⚠ **An interest is what somebody needs out of the hour. A motive is why you think he needs it.** ⚠ **Only the first is sayable** — **and a motive said out loud will be denied, correctly, and will cost the meeting four minutes.**',
  '⚠ **Give an interest its figure where it has one.** ⚠ *9.2 million at seventy-four days against a policy of sixty* **is Bassel\'s interest stated so that nobody has to guess at it** — **and an interest with a figure attached cannot be read as a position.**',
  '⚠ **And expect to be the fourth person.** **Three of the four will have called or been consulted; one will have been told.** ⚠ **The one who was told is the one whose item is not on the paper.**',
  '**Practise:** Take a meeting with three or more people. Write each person\'s interest, with a figure where there is one, and then the motive you were tempted to write instead.',
  '**Useful phrases:**  what each of us came for  ·  that is an interest and I will say it  ·  an interest, not a motive  ·  it will come up at five to ten or not at all  ·  arithmetic, not malice',
  '**Pronunciation – naming an interest without imputing a motive.** 🔊 **Track 10.4** Listen twice. ⚠ **The first says *Bassel needs the account on the exception list* flatly, as a fact about the hour.** ⚠ **The second stresses *needs*.** **Stressed, it suggests the need is suspicious; flat, it is one of four things the hour is for.** Say four interests flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names interests; B catches the motives.'));
out.push(dlg(null, [
  ['A', '__________ came for __________.'],
  ['B', '⚠ **Interest or motive?**'],
  ['A', '__________.'],
  ['B', '⚠ **And __________?**'],
  ['A', '__________ wants __________.'],
  ['B', '⚠ **That is a motive. Say what he needs out of the hour instead.**'],
  ['A', '__________ needs __________, because __________.'],
  ['B', '⚠ **Now yours. And where does it go on the sheet?**'],
  ['A', '⚠ **At the top, because it will come up at __________ or not at all.**'],
]));
out.push(table(['Role card 1 — interest, with a figure', 'Role card 2 — the fourth person'], [[
  '⚠ **A says Bassel wants to protect himself.** ⚠ **B asks what Bassel needs out of the hour.** ⚠ **The account on the standing exception list** — **9.2 million at seventy-four days against a policy of sixty.** ⚠ **B\'s point: the version with the figure in it is the version nobody can deny and nobody has to interpret.**',
  '⚠ **A is the person who was told about the meeting rather than consulted about it.** ⚠ **B works out with A what follows:** **A\'s item is not on the paper, three other items are, and fifty of the sixty minutes will go on the two that are easiest to agree.** ⚠ **So A\'s item goes first on A\'s own sheet and gets raised early, which is 10.3.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four interests. ⚠ Then write the motive the speaker was tempted to say instead, and say what it would have cost the hour.'));
out.push(PHRASE_CARD(['what each of us came for', 'an interest, not a motive', 'with a figure attached', 'five to ten or not at all', 'arithmetic, not malice']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a meeting at your work with three or more people. Write each interest.'));
out.push(table(['Who', 'The interest, with a figure if there is one', 'The motive I nearly wrote', 'When their item will come up'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 2.6, 1.9, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There were _______ of us. _______ came for _______. _______ came for _______. I came for _______, and my item would have come up at _______._'));
out.push(p('**Listener task:** count how many interests had a figure attached. ⚠ Then ask how many of the speakers were the person who had been told rather than consulted, and what happened to their item.'));
out.push(p('**Board clinic:** your teacher writes three interests on the board — look for a motive dressed as an interest, and an interest with no figure where a figure exists. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ONE SHEET, FOUR INTERESTS. 2 June. N. Mansour. For me, not for the meeting.**',
  table(['Who', 'What they need out of the hour', 'Figure', 'Where it will come'], [
    ['**Mr Ayoub**', '⚠ **the matter closed before Thursday** — **and *closed* means nothing new goes to the bank**', '**Thursday**', '**first, in his own opening sentence**'],
    ['**Mr Sayegh**', '**nothing in writing that reads as an admission**', '—', '⚠ **second, and he will raise it as a general principle rather than about any one line**'],
    ['**Bassel**', '**the account on the standing exception list**', '⚠ **9.2 million · 74 days · policy 60**', '⚠ **third, with the figure, and it will take twenty minutes because it is the only item with arithmetic in it**'],
    ['⚠ **me**', '⚠ **a decision: does the paper go to Dallal\'s board as it stands?**', '⚠ **it is twelve lines and four of them are closed**', '⚠ **nine fifty-five, or not at all**'],
  ], [0.9, 3.3, 1.7, 3.1]),
  '⚠ **The fourth column is the whole value of this sheet and it took longer to write than the other three together.** **Three interests will be raised by the men who hold them, in the order they hold the room.** ⚠ **Mine will not be raised by anybody but me**, **and the hour has sixty minutes in it and Bassel\'s item has arithmetic in it.**',
  '⚠ **So the plan is one sentence at nine o\'clock, before the first item.** **Not my case** — ⚠ **just the fact that there is a decision on the table that is not on the paper, and that it takes four minutes.** **10.3 is how that sentence is built.**',
  '⚠ **The second row is the one I had wrong on Monday.** **I had written that Mr Sayegh wants to stop me sending the paper.** ⚠ **That is a motive, and it is probably false** — **what he needs is that nothing in writing reads as an admission, which the paper does not, because Unit 9 settled every line of it with him.** ⚠ **Written as an interest, his position and mine are not opposed at all.**',
  '⚠ **And the figure in the third row is Bassel\'s own and I have checked it, because I am going to hear it quoted at me.** **9.2 million at seventy-four days is right at 31 May.** ⚠ **The policy figure is sixty days, which is in the policy of 1 April, and the standing exception list has two accounts on it already.** **Unit 5 is in the room on Tuesday whether anybody says so or not.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why did the fourth column take longest, and what does it show?'));
out.push(item('2', 'What did the writer have wrong on Monday, and what changed when she rewrote it?'));
out.push(item('3', 'Why has she checked somebody else\'s figure?'));
out.push(box('Writer\'s box', [
  '**One sheet of interests — four parts:** **a table of *who · what they need · figure · when it will come*** → ⚠ **the fourth column, which is the work** → ⚠ **the interest you had written as a motive** → ⚠ **and the figure of somebody else\'s that you have checked.**',
  '⚠ **Write *what they need out of the hour*, never *what they want*.** ⚠ **An hour is a bounded thing and a need inside it is checkable** — **and *wants* invites you to write a motive.**',
  '⚠ **Put a figure against every interest that has one, and check the figures that are not yours.** ⚠ **You are going to hear them quoted at you** — **and *9.2 million at seventy-four days against a policy of sixty* is the sort of sentence that decides a meeting if nobody can test it.**',
  '⚠ **Fill in *when it will come* for all four, and expect your own to be last.** ⚠ **Three interests are raised by the men who hold them; yours is raised by nobody but you** — **and an item with arithmetic in it will take twenty of the sixty minutes.**',
  '⚠ **Rewrite any interest that reads as a motive, and notice what it does to the opposition.** ⚠ **_He wants to stop me sending the paper_ is a motive and is probably false; *he needs nothing in writing that reads as an admission* is an interest** — **and written that way, the two positions turn out not to be opposed.**',
  '⚠ **And keep the sheet for yourself.** **It is not a document for the meeting and it should not look like one** — ⚠ **its only reader is the person who has to get an item raised at nine o\'clock.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-sheet of interests for a meeting of yours (**80 words or more**). Use the frame.'));
out.push(p('**ONE SHEET, ______________ INTERESTS. ______________. For me, not for the meeting.**   **______________** | ⚠ **______________** | **______________** | **______________**   **______________** | **______________** | — | ⚠ **______________**   **______________** | **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **me** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________, or not at all**   ⚠ **The fourth column is the whole value of this sheet.** **______________ interests will be raised by the people who hold them.** ⚠ **Mine will not be raised by anybody but me.**   ⚠ **So the plan is one sentence at ______________, before the first item.**   ⚠ **The ______________ row is the one I had wrong.** **I had written that ______________ wants ______________.** ⚠ **That is a motive, and written as an interest it is ______________** — **and our positions are not opposed at all.**   ⚠ **And the figure in the ______________ row is somebody else\'s and I have checked it**, **because I am going to hear it quoted at me.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*What they need out of the hour*, for every person', ''],
  ['A figure against every interest that has one', ''],
  ['*When it will come* filled in for all, including your own', ''],
  ['An interest rewritten from a motive, with what changed', ''],
  ['Somebody else\'s figure checked', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the interest they had first written as a motive. ⚠ The class says whether the rewritten version is still opposed to the writer\'s own — and in about half of cases it is not.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a meeting where your item was never reached (**200 to 240 words**). Say who was there, what each person came for, what order the items came in, what happened to yours, and whether anybody noticed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who raised the item that took longest?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the unreached item the writer\'s own? Usually all three — ⚠ **and in two of three it was never raised at a later meeting either, because an item that does not reach a minute does not exist.**'));
out.push(box('Homework', ['Write your final text. Then take your next meeting, write the interest of every person in the room with a figure where there is one, and mark when each will come up (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.3 =======================
out.push(pb());
out.push(h2('10.3  The item that is not on the agenda'));
out.push(p('**Function:** getting an unlisted item into the hour   ·   **Grammar:** _there is one decision on the table that is not on the paper · it takes four minutes_   ·   **Pronunciation:** a request for time, costed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you needed from a meeting that was not on the agenda. ⚠ Then say whether you got it.'));
out.push(p('**b**  Which gets the time? _Could I raise something at the end? · There is one decision on the table that is not on the paper, and it takes four minutes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about *at the end if there is time*?   **A** it is polite   **B** it means no, and both people know it   **C** it is the right way to ask'));
out.push(p('**b**  Listen again. **1** What are the three parts of the sentence that gets the time? **2** Why does he say the cost must be a number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  "Four minutes, and I will tell you when"', [
  ['Nour', 'Before we start — could I raise something at the end, if there is time?'],
  ['Mr Ayoub', '⚠ **No, and you know that is a no, because there is never time at the end.** ⚠ **Ask me properly.**'],
  ['Nour', '⚠ **There is one decision on the table that is not on the paper. It takes four minutes and it has to be taken today.**'],
  ['Mr Ayoub', '⚠ **Better. Which three words tell me it is a decision and not a report?**'],
  ['Nour', '*On the table.*'],
  ['Mr Ayoub', '⚠ **And four minutes is a number, so I can put it somewhere.** ⚠ **_A few minutes_ is not a number and goes to the end, which is where nothing happens.** **When do you want it?**'],
  ['Nour', 'Second. After your opening and before the credit item.'],
  ['Mr Ayoub', '⚠ **Why not first?**'],
  ['Nour', '⚠ **Because your opening sets what *closed* means, and my decision is about a document going out, so it belongs inside your definition and not before it.**'],
  ['Mr Ayoub', '⚠ **That is the right answer and it is not why you want to be second.**'],
  ['Nour', '⚠ **It is also because Bassel\'s item has arithmetic in it and will take twenty minutes.**'],
  ['Mr Ayoub', '⚠ **Say both.** ⚠ **A man who gives me one true reason and holds back the practical one is a man I have to work out** — **and I have four people and an hour.**'],
  ['Nour', 'Second, then. Four minutes.'],
  ['Mr Ayoub', '⚠ **Second. And if it turns out to need ten, say so at minute four and I will decide then** — **do not quietly take ten.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Getting an unlisted item into the hour**',
  table(['', 'Not', 'Say'], [
    ['**the request**', '⚠ *could I raise something at the end, if there is time?*', '⚠ *there is one decision on the table that is not on the paper*'],
    ['**the cost**', '⚠ *a few minutes*', '⚠ *four minutes* — **a number can be put somewhere; *a few* goes to the end**'],
    ['**the urgency**', '*when convenient*', '⚠ *it has to be taken today*, **where that is true**'],
    ['⚠ **the position**', '**wherever it falls**', '⚠ *second, after your opening and before the credit item* — **with BOTH reasons**'],
    ['⚠ **the overrun**', '**quietly taking ten**', '⚠ *at minute four, say so and let the chair decide*'],
  ], [1.2, 2.9, 4]),
  '⚠ **_At the end if there is time_ is a no, and both people know it.** **There is never time at the end.**',
  '⚠ **Three parts get the time: that it is a decision, that it is not on the paper, and what it costs as a number.** ⚠ **_On the table_ is what says decision rather than report**, **and four minutes is a thing a chairman can put somewhere.**',
  '⚠ **Ask for a position and give both reasons** — **the principled one and the practical one.** ⚠ **A man who offers one true reason and holds back the practical one is a man the chair has to work out**, **and a chair with four people and an hour has no time to.**',
  '⚠ **Declare an overrun at the moment it happens, not afterwards.** ⚠ *At minute four, say it needs ten and let him decide.* **Quietly taking ten is the thing that gets an item refused next time.**',
  '⚠ **And where it is NOT urgent, do not say it is.** **_It has to be taken today_ spends something**, ⚠ **and spending it on an item that could wait a week is how a chair learns to discount your urgency.**',
  '**Practise:** Take three unlisted items. Write the request, the cost as a number, the position, and both reasons.',
  '**Useful phrases:**  one decision on the table that is not on the paper  ·  it takes four minutes  ·  second, after your opening  ·  both reasons  ·  at minute four I will say so',
  '**Pronunciation – a request for time, costed.** 🔊 **Track 10.6** Listen twice. ⚠ **The first says *it takes four minutes* as a flat statement of fact.** ⚠ **The second rises at the end, as a question.** **Risen, it asks permission for the number as well as the item, and a chair will halve it.** Say it four times falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for time; B is the chair.'));
out.push(dlg(null, [
  ['A', 'Could I raise something at the end, if there is time?'],
  ['B', '⚠ **No, and you know that is a no. Ask me properly.**'],
  ['A', '⚠ **There is one __________ on the table that is not on the paper. It takes __________ minutes.**'],
  ['B', '⚠ **When do you want it?**'],
  ['A', '__________, after __________ and before __________.'],
  ['B', '⚠ **Why not first?**'],
  ['A', '⚠ **Because __________.**'],
  ['B', '⚠ **That is the right answer and it is not why. Give me the other one.**'],
  ['A', '⚠ **Because __________ has arithmetic in it and will take __________ minutes.**'],
]));
out.push(table(['Role card 1 — the number', 'Role card 2 — both reasons'], [[
  '⚠ **A asks for *a few minutes*.** ⚠ **B puts it at the end, which is where nothing happens, and says so.** ⚠ **Then A asks for four minutes and B has to put four minutes somewhere** — **which is the difference between a quantity and a request.**',
  '⚠ **A gives the principled reason for wanting to go second and stops.** ⚠ **B says it is the right answer and is not the real one, and waits.** ⚠ **The practical reason is that the credit item has arithmetic in it and will overrun** — **and B\'s point is that a chair with four people and an hour has no time to work out what A is not saying.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts of the request. ⚠ Then write both reasons for the position, and say which one the speaker nearly left out.'));
out.push(PHRASE_CARD(['a decision not on the paper', 'it takes four minutes', 'second, after your opening', 'both reasons', 'at minute four I will say']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you need from meetings that are not on their agendas. Build the request.'));
out.push(table(['The item', 'Decision or report?', 'The cost, as a number', 'The position, and both reasons'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.2, 1.3, 2.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There is one _______ on the table that is not on the paper. It takes _______ minutes. I want it _______, because _______ and because _______._'));
out.push(p('**Listener task:** count how many items were decisions rather than reports. ⚠ Then ask how many of the reports needed the meeting at all, and expect fewer than the room thinks.'));
out.push(p('**Board clinic:** your teacher writes three requests on the board — look for *a few minutes*, and an urgency claimed for an item that could wait a week. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE ITEM THAT IS NOT ON THE PAPER, AND THE ONE NOBODY WILL RAISE. 2 June. N. Mansour.**',
  '⚠ **There are two items not on Tuesday\'s paper. One of them I am going to raise and one of them I am not, and they are not the same kind of thing.**',
  table(['', 'Mine', 'The other one'], [
    ['**what it is**', '⚠ **a decision: does the root-cause paper go to Mr Dallal\'s board as it stands?**', '⚠ **that Thursday matters because the facility and the Dallal claim are the same problem**'],
    ['**why it is off the paper**', '⚠ **because Mr Ayoub was thinking about the week and not about the document**', '⚠ **because saying it in a minuted meeting puts it in a document the bank can ask for**'],
    ['**who else knows**', '**all four of us**', '**all four of us**'],
    ['⚠ **what I do**', '⚠ **ask for four minutes, second, with both reasons**', '⚠ **nothing** — **and that is a decision and not an omission**'],
  ], [1.3, 3.3, 3.4]),
  '⚠ **The first is a drafting failure and it is cheap to fix.** **A decision was not written on the paper because the man writing the paper was thinking in days rather than in documents.** ⚠ **Four minutes, asked for properly on Monday, and it is on the paper by nine o\'clock.**',
  '⚠ **The second is not a failure at all and this is the part that took me the week to understand.** **Everybody in the room knows that Thursday is the reason Tuesday exists.** ⚠ **Nobody will say it, and nobody should**, **because a minute that records *the Dallal matter is to be closed before the bank\'s committee meets* is a sentence the committee can later ask to see.**',
  '⚠ **What I will not do is pretend it is not there.** ⚠ **I have written it on my own sheet, with the date, so that when the hour starts going the way it is going I know why** — **and so that if anybody does raise it, I am not the person who looks surprised.**',
  '⚠ **And there is a sentence that gets the benefit of it without putting it on the record.** ⚠ *The paper is dated and goes to Dallal\'s board; nothing in it is new to anybody who read our 26 May note.* **Twenty words, true, about documents and not about banks** — **and it answers Thursday without naming it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the two unlisted items, and how do they differ?'));
out.push(item('2', 'Why will the writer not raise the second one?'));
out.push(item('3', 'What is the sentence that answers Thursday without naming it?'));
out.push(box('Writer\'s box', [
  '**Two kinds of unlisted item — four parts:** ⚠ **a table of *what it is · why it is off the paper · who knows · what I do*** → ⚠ **the one that is a drafting failure** → ⚠ **the one that is not a failure at all** → ⚠ **and the sentence that gets the benefit without putting it on the record.**',
  '⚠ **Separate the item left off by accident from the item left off on purpose.** ⚠ **The first is cheap to fix and is fixed by asking; the second is a decision the room has already taken without discussing it.**',
  '⚠ **Where everybody knows a thing and nobody will say it, write it on your own sheet with the date.** ⚠ **Not to raise it** — **so that you know why the hour is going as it is going, and so that you are not the person who looks surprised if somebody else raises it.**',
  '⚠ **Never pretend the unraisable item is not there.** ⚠ **A person who has not noticed it will be surprised at the wrong moment**, **and a person who has noticed it and written it down is simply prepared.**',
  '⚠ **And find the sentence that gets the benefit without the record.** ⚠ *The paper is dated and goes to Dallal\'s board; nothing in it is new to anybody who read our 26 May note.* **Twenty words, true, about documents rather than about banks.**',
  '⚠ **The test for such a sentence: is every word of it true, and could it be read aloud to the people it is protecting you from?** ⚠ **If the answer to either is no, it is not a sentence, it is a concealment** — **and 10.4 is where that line is drawn.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up the unlisted items for a meeting of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ITEM THAT IS NOT ON THE PAPER, AND THE ONE NOBODY WILL RAISE. ______________.**   ⚠ **There are two items not on ______________\'s paper. One I am going to raise and one I am not.**   **what it is** | ⚠ **______________** | ⚠ **______________**   **why it is off the paper** | ⚠ **______________** | ⚠ **______________**   **who else knows** | **______________** | **______________**   ⚠ **what I do** | ⚠ **ask for ______________ minutes, ______________, with both reasons** | ⚠ **nothing** — **and that is a decision and not an omission**   ⚠ **The first is a drafting failure and it is cheap to fix:** **______________.**   ⚠ **The second is not a failure at all.** **Everybody in the room knows ______________.** ⚠ **Nobody will say it, and nobody should, because ______________.**   ⚠ **What I will not do is pretend it is not there.** **I have written it on my own sheet, with the date, so that ______________.**   ⚠ **And there is a sentence that gets the benefit without putting it on the record:** ⚠ *______________.*'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The accidental omission and the deliberate one, separated', ''],
  ['The unraisable item written down, with a date', ''],
  ['What you will do about each, including *nothing*', ''],
  ['A sentence that gets the benefit without the record', ''],
  ['That sentence tested: every word true, and readable aloud', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their twenty-word sentence. ⚠ The class applies both tests — is every word true, and could it be read to the people it protects you from — and where either fails, it is a concealment.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something everybody at your work knows and nobody puts in a minute (**200 to 240 words**). Say what it is, why it is not minuted, whether the reason is good, what is said instead, and what would happen if it were written down.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the reason for not minuting it a good one?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the reason a good one? Usually one of three — ⚠ **and in the other two the thing is unminuted out of habit, which means nobody has ever decided it and nobody can defend it.**'));
out.push(box('Homework', ['Write your final text. Then take one meeting and write the item that is not on the paper, with the cost in minutes and the position you will ask for (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.4 =======================
out.push(pb());
out.push(h2('10.4  The sentence that stops a decision'));
out.push(p('**Function:** stopping a decision being taken on the wrong basis   ·   **Grammar:** _before that is decided, one fact · the decision is sound and the basis is wrong_   ·   **Pronunciation:** an interruption that is not an objection'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work that was taken on a wrong fact. ⚠ Then say whether anybody in the room knew.'));
out.push(p('**b**  Which stops the decision? _I am not sure that is right. · Before that is decided — the sixty days in the policy run from the invoice, not from the delivery._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the moment to speak?   **A** afterwards, in writing   **B** before the decision is minuted, because after it is minuted you are asking for a reversal   **C** at the end'));
out.push(p('**b**  Listen again. **1** What are the four words that open the sentence? **2** What does he say you must not do in the same breath?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  "Before that is decided — one fact"', [
  ['Mr Ayoub', 'So the account goes on the exception list. Agreed.'],
  ['Nour', '⚠ **Before that is decided** — **one fact.** ⚠ **The sixty days in the policy run from the invoice date and not from delivery.** **On invoice dates the account is at sixty-one days, not seventy-four.**'],
  ['Mr Ayoub', 'Bassel?'],
  ['Bassel', '⚠ **She is right, and I have been quoting delivery.** **Sixty-one.**'],
  ['Mr Ayoub', 'Does the decision change?'],
  ['Nour', '⚠ **I do not know, and that is not my item.** ⚠ **It is one day over instead of fourteen, which is a different conversation and may still end in the same place.**'],
  ['Mr Sayegh', '⚠ **And that is the whole of how it is done.** ⚠ **Four words to open** — *before that is decided* — ⚠ **then one fact, with its source, and then stop.**'],
  ['Nour', 'Stop where?'],
  ['Mr Sayegh', '⚠ **Before saying what you think the decision should be.** ⚠ **You corrected the basis and you did not take a position on the outcome** — **and that is why Bassel could agree with you in four words instead of defending himself for ten minutes.**'],
  ['Nour', 'And if I had said *so it should not go on the list*?'],
  ['Mr Sayegh', '⚠ **Then you would have been arguing against Bassel\'s item instead of correcting a date**, **and he would have had to fight the correction to keep the item.** ⚠ **Which he would have done, and the policy would still say invoice, and the minute would say seventy-four days.**'],
  ['Nour', 'And the timing?'],
  ['Mr Sayegh', '⚠ **Before it is minuted. Four seconds earlier is a fact; four seconds later is a request for a reversal** — **and a reversal has to be somebody\'s fault before it can happen.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stopping a decision on its basis**',
  table(['', 'Do', 'Not'], [
    ['⚠ **the opening**', '⚠ *before that is decided* — **four words**', '⚠ *I am not sure that is right*, **which is about you**'],
    ['**the content**', '⚠ **one fact, with its source** — *the policy runs from the invoice date*', '**two facts, or a fact and an argument**'],
    ['⚠ **the consequence**', '⚠ **state it as arithmetic** — *sixty-one days, not seventy-four*', '**say what the decision should now be**'],
    ['⚠ **the stop**', '⚠ **stop there, and say that the outcome is not your item**', '**take a position in the same breath**'],
    ['**the moment**', '⚠ **before it is minuted**', '⚠ **after** — **which is a request for a reversal, and a reversal needs somebody to be at fault**'],
  ], [1.4, 3.3, 3.3]),
  '⚠ **Four words open it:** ⚠ *before that is decided.* **They buy four seconds and they are not an objection** — **where *I am not sure that is right* is a statement about your own confidence and invites a discussion of it.**',
  '⚠ **One fact, with its source, and then the arithmetic.** ⚠ *The policy runs from the invoice date; on invoice dates the account is at sixty-one days and not seventy-four.* **No second fact, and no argument attached to the first.**',
  '⚠ **Then stop, before saying what the decision should be.** ⚠ **Correcting a basis and taking a position are two different interventions**, **and doing both at once turns a correction into an attack on somebody\'s item** — **which he then has to resist in order to keep it.**',
  '⚠ **Say out loud that the outcome is not yours.** ⚠ *I do not know whether the decision changes, and it is not my item.* **It is what lets the other person agree with you in four words instead of defending himself for ten minutes.**',
  '⚠ **And speak before it is minuted.** ⚠ **Four seconds earlier is a fact; four seconds later is a request for a reversal** — **and a reversal has to be somebody\'s fault before it can happen, which is why it usually does not.**',
  '**Practise:** Take three decisions taken on a wrong basis. Write the four-word opening, the one fact with its source, and the arithmetic — and stop.',
  '**Useful phrases:**  before that is decided  ·  one fact  ·  the policy runs from  ·  sixty-one, not seventy-four  ·  I do not know, and it is not my item',
  '**Pronunciation – an interruption that is not an objection.** 🔊 **Track 10.8** Listen twice. ⚠ **The first says *before that is decided* quickly and level, and goes straight on to the fact.** ⚠ **The second pauses after *decided*.** **The pause turns four words into a held floor, and a held floor is an objection.** Say it four times with no pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B announces a decision; A stops it on its basis.'));
out.push(dlg(null, [
  ['B', 'So __________. Agreed.'],
  ['A', '⚠ **Before that is decided** — **one fact.** ⚠ **__________ runs from __________ and not from __________.** **On __________ the figure is __________, not __________.**'],
  ['B', '⚠ **Does the decision change?**'],
  ['A', '⚠ **I do not know, and that is not my item.**'],
  ['B', '⚠ **Good. Now do it wrong. Add what you think should happen.**'],
  ['A', '⚠ **…So it should not __________.**'],
  ['B', '⚠ **And now I have to defend my item instead of agreeing with your date. Which of the two did you want?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — one fact, and stop', 'Role card 2 — four seconds too late'], [[
  '⚠ **B announces that the account goes on the exception list at seventy-four days.** ⚠ **A gives the four words, the one fact (the policy runs from the invoice date), and the arithmetic (sixty-one, not seventy-four), and stops.** ⚠ **B\'s job is to try to make A say what the decision should now be** — **and A\'s job is to say that the outcome is not A\'s item.**',
  '⚠ **A waits until the decision has been summarised and minuted, and then raises the same fact.** ⚠ **B\'s response is the one to feel rather than be told:** **the item is now reopened, somebody has to be wrong about it, and the quickest way out of the room is to leave the minute as it stands and note the point for next time.** ⚠ **Same fact, four seconds later, no effect.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four-word opening, the fact and the arithmetic. ⚠ Then say what the speaker did NOT say, and what that silence bought.'));
out.push(PHRASE_CARD(['before that is decided', 'one fact, with its source', 'sixty-one, not seventy-four', 'not my item', 'before it is minuted']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** decisions at your work taken on a doubtful basis. Build the intervention.'));
out.push(table(['The decision', 'The basis used', 'The one fact, with its source', 'The arithmetic'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.5, 2.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The decision was _______, taken on _______. Before that is decided — _______ runs from _______, which is in _______. On that basis the figure is _______, not _______. And I do not know whether the decision changes._'));
out.push(p('**Listener task:** count how many of the wrong bases were dates rather than figures. ⚠ Then ask how many of the speakers knew at the time and said nothing, and why.'));
out.push(p('**Board clinic:** your teacher writes three interventions on the board — look for *I am not sure that is right*, and a correction with a recommendation attached to it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ONE FACT, AT NINE TWENTY-SIX. 3 June. N. Mansour. What I said, and what I did not.**',
  '⚠ **What I said, in full:** _“Before that is decided — one fact. The sixty days in the policy run from the invoice date and not from delivery. On invoice dates the account is at sixty-one days, not seventy-four.”_',
  '⚠ **Thirty-eight words. And then I stopped, which took more effort than the thirty-eight.**',
  table(['', 'What I said', 'What I did not say, and why'], [
    ['**1**', '⚠ *before that is decided*', '⚠ **_I think there may be a problem_** — **which is about my confidence and invites a discussion of it**'],
    ['**2**', '⚠ **the policy runs from the invoice date**', '⚠ **and that I drafted that clause in March** — **true, and it would have made the fact mine instead of the policy\'s**'],
    ['**3**', '⚠ **sixty-one, not seventy-four**', '**that seventy-four had been quoted three times in two weeks** — ⚠ **true, and it is a point about Bassel and not about the account**'],
    ['**4**', '⚠ **nothing** — **I stopped**', '⚠ **_so it should not go on the list_** — **which would have turned a date into an argument about his item**'],
  ], [0.4, 3.2, 4.2]),
  '⚠ **The second row is the one I am least sure about.** **I drafted the invoice-date clause in the April policy and saying so would have settled the fact in two seconds.** ⚠ **It would also have made the correction mine rather than the document\'s** — **and a fact that belongs to a person can be argued with, where a fact that belongs to a policy has to be looked up.** **Unit 5 is why the policy is a better owner than I am.**',
  '⚠ **The fourth row is the one that worked, and what it bought was four words from Bassel:** ***she is right, and I have been quoting delivery*.** ⚠ **He conceded a date in four words because nothing had been taken from him** — **and his item still went on the list, at sixty-one days, which it should.**',
  '⚠ **And the timing was luck, which I am recording because it will not be luck next time.** **I spoke at nine twenty-six, about two seconds before Mr Ayoub would have summarised it.** ⚠ **If I had waited for him to finish the sentence I would have been asking for a reversal** — **and a reversal needs somebody to have been wrong, which is why most of them do not happen.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why did she not say that she had drafted the clause?'));
out.push(item('2', 'What did stopping buy, in Bassel\'s own words?'));
out.push(item('3', 'What does she say about the timing, and why is she recording it?'));
out.push(box('Writer\'s box', [
  '**Writing up an intervention — four parts:** ⚠ **what you said, in full, with the word count** → **a table of *what I said · what I did not say, and why*** → ⚠ **the row you are least sure about** → ⚠ **and the row that worked, in the other person\'s words.**',
  '⚠ **Quote yourself in full and count the words.** ⚠ **Thirty-eight words** — **because an intervention that worked is a thing to be able to repeat, and the only way to repeat it is to have it written down as it was said.**',
  '⚠ **Record what you did not say, with the reason.** ⚠ **Three of the four unsaid things in this note were TRUE** — **and that is the point of the column: the discipline is not about accuracy, it is about ownership and about scope.**',
  '⚠ **Prefer a fact that belongs to a document over one that belongs to you.** ⚠ **_The policy runs from the invoice date_ has to be looked up; *I drafted that clause in March* can be argued with** — **and Unit 5 is why a policy is a better owner of a fact than its author.**',
  '⚠ **Record what the stop bought, in the other person\'s words.** ⚠ *She is right, and I have been quoting delivery.* **Four words, because nothing had been taken from him** — **and his item went forward on a corrected basis, which is the whole object.**',
  '⚠ **And write down the timing even when it was luck.** ⚠ **Two seconds before the summary is a fact; two seconds after it is a request for a reversal** — **and naming the difference is what turns luck into a method.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up an intervention of your own (**80 words or more**). Use the frame.'));
out.push(p('**ONE FACT, AT ______________. ______________. What I said, and what I did not.**   ⚠ **What I said, in full:** _“Before that is decided — one fact. ______________ runs from ______________ and not from ______________. On that basis ______________ is ______________, not ______________.”_   ⚠ **______________ words. And then I stopped.**   **1** | ⚠ *before that is decided* | ⚠ **______________** — **which is about my confidence**   **2** | ⚠ **______________** | ⚠ **and that ______________** — **true, and it would have made the fact mine instead of the document\'s**   **3** | ⚠ **______________** | **that ______________** — ⚠ **true, and it is a point about a person**   **4** | ⚠ **nothing** — **I stopped** | ⚠ **______________** — **which would have turned ______________ into an argument**   ⚠ **The second row is the one I am least sure about**, **because ______________.**   ⚠ **The fourth row is the one that worked, and what it bought was ______________:** ***______________*.**   ⚠ **And the timing: I spoke ______________ before ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The intervention quoted in full, with a word count', ''],
  ['A *what I did not say* column, with reasons', ''],
  ['A fact owned by a document rather than by the writer', ''],
  ['What the stop bought, in the other person\'s words', ''],
  ['The timing, relative to the summary', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what I did not say* column. ⚠ The class counts how many of the unsaid things were true — and where all of them were, that is the cycle working rather than a failure of candour.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work taken on a wrong basis that nobody corrected (**200 to 240 words**). Say what the decision was, what the basis was, who knew it was wrong, when the moment to speak was, and what happened afterwards.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _when exactly was the moment?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody in the room know? Usually all three — ⚠ **and in two of three the person who knew raised it afterwards, in writing, and was answered with a sentence saying it would be looked at.**'));
out.push(box('Homework', ['Write your final text. Then take one decision coming up at your work, write the four-word opening and the one fact with its source, and stop there (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.5 =======================
out.push(pb());
out.push(h2('10.5  The minute is the decision'));
out.push(p('**Function:** reading a minute for what it does not record   ·   **Grammar:** _noted · it was agreed that · an action with no owner_   ·   **Pronunciation:** reading a minute aloud for its verbs'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work that was taken and not written down. ⚠ Then say what happened to it.'));
out.push(p('**b**  Which records a decision? _The credit position was noted. · The account is placed on the standing exception list at sixty-one days, reviewed on 30 September — Bassel._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the word *noted* does?   **A** records a discussion   **B** records nothing, and is the commonest word in a minute that decides nothing   **C** records agreement'));
out.push(p('**b**  Listen again. **1** What are the four things a minuted decision must have? **2** What is the difference between a decision minuted as a discussion and a discussion minuted as a decision?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  "Noted is not a verb"', [
  ['Nour', 'The draft minute has come round. Item 3: *the credit position was noted*.'],
  ['Nadia', '⚠ **Noted by whom, and what follows from it?**'],
  ['Nour', 'Nothing follows. It was a twenty-minute item and it ended in a decision.'],
  ['Nadia', '⚠ **Then the minute is wrong, and it is wrong in the commonest way there is.** ⚠ **_Noted_ records nothing.** **It is the word a minute uses when the writer was not sure what happened.**'],
  ['Nour', 'What should it say?'],
  ['Nadia', '⚠ **Four things. What was decided, on what basis, who owns it, and by when.** ⚠ *The account is placed on the standing exception list at sixty-one days, calculated on invoice dates, reviewed on 30 September — Bassel.*'],
  ['Nour', 'And the basis is in it because of Tuesday.'],
  ['Nadia', '⚠ **The basis is in it because in September nobody will remember that sixty-one was invoice dates and seventy-four was delivery** — ⚠ **and a review that starts from the wrong basis undoes the whole of what you did at nine twenty-six.**'],
  ['Nour', 'There is a worse one. Item 5 says *it was agreed that the paper would be reviewed*.'],
  ['Nadia', '⚠ **That is the other fault and it is the dangerous one.** ⚠ **Nothing was agreed; the paper was discussed and no decision was taken.** **A discussion minuted as a decision is worse than a decision minuted as a discussion.**'],
  ['Nour', 'Why worse? Both are wrong.'],
  ['Nadia', '⚠ **Because a decision recorded as a discussion can be taken again** — **it costs you a second meeting and nothing else.** ⚠ **A discussion recorded as a decision cannot be untaken**, **and in four months everybody will act as though the review was agreed and nobody will be able to say who agreed to do it or when.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A minuted decision, and the two faults**',
  table(['', 'The fault', 'What it costs'], [
    ['⚠ **_noted_**', '⚠ **records nothing** — **the word a minute uses when the writer did not know what happened**', '**a twenty-minute item disappears**'],
    ['⚠ **a decision minuted as a discussion**', '**_the credit position was noted_ where a decision was taken**', '⚠ **a second meeting, and nothing else** — **a decision can be taken again**'],
    ['⚠ **a discussion minuted as a decision**', '⚠ **_it was agreed that the paper would be reviewed_ where nothing was agreed**', '⚠ **the worse one** — **it cannot be untaken, and in four months nobody can say who agreed or when**'],
    ['⚠ **the remedy**', '⚠ **four things: what · on what basis · who owns it · by when**', '⚠ *placed on the exception list at sixty-one days, on invoice dates, reviewed 30 September — Bassel*'],
  ], [2.1, 3.3, 3.3]),
  '⚠ **A minuted decision has four parts: what was decided, on what basis, who owns it, and by when.** ⚠ **An action with no owner is not an action and an owner with no date is not an owner.**',
  '⚠ **Put the basis in the minute.** ⚠ **In September nobody will remember that sixty-one was invoice dates and seventy-four was delivery** — **and a review that starts from the wrong basis undoes everything the meeting did.**',
  '⚠ **_Noted_ records nothing.** **It is not a decision, not an action and not a discussion** — ⚠ **it is what a minute says when its writer did not know which of the three he had just watched.**',
  '⚠ **A decision minuted as a discussion costs a second meeting.** ⚠ **A discussion minuted as a decision cannot be untaken** — **and that asymmetry is why the second is the one to look for first.**',
  '⚠ **And read a minute for its verbs.** ⚠ **_Noted · discussed · considered_ are all one thing; *agreed · placed · instructed · will* are another** — **and the item you were in the room for is the one whose verb you remember differently.**',
  '**Practise:** Take a minute of a meeting you attended. Mark every item *decision*, *discussion* or *nothing*, and rewrite one in the four parts.',
  '**Useful phrases:**  noted by whom?  ·  what follows from it?  ·  what, on what basis, who, by when  ·  an action with no owner  ·  it cannot be untaken',
  '**Pronunciation – reading a minute for its verbs.** 🔊 **Track 10.10** Listen twice. ⚠ **The first reads an item aloud and stresses the verb each time** — *noted · was agreed · will review*. ⚠ **The second reads it evenly.** **Stressed on the verbs, the shape of the item is audible in one pass; even, it is five lines of prose.** Read three items stressing only the verbs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a minuted item; B asks the four questions.'));
out.push(dlg(null, [
  ['A', 'Item __________: *__________ was noted*.'],
  ['B', '⚠ **Noted by whom, and what follows from it?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what was actually decided? Four things.**'],
  ['A', '⚠ **__________, on the basis of __________, owned by __________, by __________.**'],
  ['B', '⚠ **Good. And item __________ says *it was agreed that* __________.**'],
  ['A', '⚠ **Nothing was agreed. It was discussed.**'],
  ['B', '⚠ **Which of the two faults is that, and why is it the worse one?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — four parts', 'Role card 2 — the asymmetry'], [[
  '⚠ **A has *the credit position was noted* where a twenty-minute item ended in a decision.** ⚠ **B asks the four questions in order and makes A produce the sentence:** ⚠ *the account is placed on the standing exception list at sixty-one days, calculated on invoice dates, reviewed on 30 September — Bassel.* **Four parts, one sentence.**',
  '⚠ **A has both faults in one minute.** ⚠ **B\'s task is to make A say which to correct first, and why.** ⚠ **The discussion recorded as a decision, because a decision recorded as a discussion costs a second meeting and the other cannot be untaken** — **and in four months people will act on it without knowing who agreed to it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four parts of the corrected item. ⚠ Then name the two faults and say which is worse, with the reason.'));
out.push(PHRASE_CARD(['noted by whom?', 'what follows from it?', 'what, basis, who, by when', 'an action with no owner', 'it cannot be untaken']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a minute of a meeting you attended. Mark **five** items.'));
out.push(table(['Item', 'As minuted', 'Decision · discussion · nothing', 'What it should say'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.6, 2.2, 1.7, 2.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Item _______ was minuted as _______. It was actually a _______. In four parts it reads: _______, on the basis of _______, owned by _______, by _______._'));
out.push(p('**Listener task:** count how many items used the word *noted*. ⚠ Then ask how many actions had an owner and a date, and expect fewer than half.'));
out.push(p('**Board clinic:** your teacher writes three minuted items on the board — look for *noted*, and an action with an owner and no date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DRAFT MINUTE OF 3 JUNE, READ AGAINST MY OWN NOTE. 4 June. N. Mansour.**',
  table(['Item', 'The draft minute says', 'My note says', 'The fault'], [
    ['**1**', '**_the Chairman opened the meeting_**', '**the same**', '**none**'],
    ['**3**', '⚠ **_the credit position was noted_**', '⚠ **twenty-two minutes, ending in a decision to place the account on the exception list at sixty-one days**', '⚠ **a decision minuted as a discussion** — **and *noted* records nothing at all**'],
    ['**4**', '⚠ **_it was agreed that the root-cause paper would be reviewed before issue_**', '⚠ **four minutes, and no decision taken** — **Mr Ayoub said he would think about it overnight**', '⚠ **a discussion minuted as a decision** — **the worse of the two**'],
    ['**5**', '⚠ **_the position regarding the bank was discussed_**', '⚠ **nothing was said about the bank by anybody** — **the word *Thursday* was used twice and the word *bank* never**', '⚠ **an item minuted that did not occur**'],
    ['**6**', '**_the meeting closed at ten o\'clock_**', '**ten minutes past**', '**none that matters**'],
  ], [0.5, 3.1, 3.1, 2.6]),
  '⚠ **Item 5 is the one I did not expect and it is the most interesting line in the minute.** **Nobody mentioned the bank.** ⚠ **The word *Thursday* was used twice, by Mr Ayoub, and *bank* was never said at all** — **and the minute-taker, who was not in the room for the first ten minutes, has written down what he assumed the Thursdays were about.** ⚠ **He is right, and it should not be in a minute.**',
  '⚠ **And he is right for the reason 10.3 gives: everybody knows.** **A minute-taker who knows what everybody knows will write it down**, ⚠ **because to him it is the obvious shape of the hour** — **which is exactly why the item nobody will raise has to be managed and not merely avoided.**',
  '⚠ **Item 4 is the one I will correct first, and the asymmetry is the reason.** **Item 3 under-records a decision and can be put right by taking the decision again.** ⚠ **Item 4 records a decision nobody took** — **and by September *it was agreed that the paper would be reviewed before issue* will be a thing Sham Trading agreed to do and did not do.**',
  '⚠ **My own note of the meeting is four pages and was taken because I was not chairing it and not minuting it.** **It has the times on it.** ⚠ **Without it I would be arguing about item 4 from memory against a document** — **and in that argument the document wins, every time, and it should.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is wrong with item 5, and why did the minute-taker write it?'));
out.push(item('2', 'Which item will be corrected first, and why?'));
out.push(item('3', 'Why does the writer\'s own note matter, and what does it carry that memory does not?'));
out.push(box('Writer\'s box', [
  '**Reading a draft minute against your own note — four parts:** **a table of *item · the minute says · my note says · the fault*** → ⚠ **the item that did not occur** → ⚠ **the one to correct first, with the asymmetry** → ⚠ **and your own note, with the times on it.**',
  '⚠ **Take your own note whenever you are neither chairing nor minuting.** ⚠ **Four pages with times on them** — **because the alternative is arguing from memory against a document, and the document wins, every time, and it should.**',
  '⚠ **Put the times in your note.** ⚠ *Twenty-two minutes · four minutes* **is what distinguishes a decision from a remark**, **and a twenty-two-minute item minuted in five words is visibly wrong before anybody argues about what was said.**',
  '⚠ **Look for the item that did not occur.** ⚠ **A minute-taker who knows what everybody knows will write down what he assumes the hour was about** — **and he will usually be right, and it should still not be in a minute.**',
  '⚠ **Correct the discussion-recorded-as-a-decision first.** ⚠ **The other can be put right by taking the decision again; this one becomes a thing your firm agreed to do and did not do.**',
  '⚠ **And where a decision is in the minute, check that its BASIS is too.** ⚠ *At sixty-one days, calculated on invoice dates.* **In September nobody will remember which basis was used** — **and a review from the wrong basis undoes the correction that produced the decision.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Read a draft minute against your own note (**80 words or more**). Use the frame.'));
out.push(p('**THE DRAFT MINUTE OF ______________, READ AGAINST MY OWN NOTE. ______________.**   **______________** | **______________** | **______________** | **none**   **______________** | ⚠ **______________** | ⚠ **______________ minutes, ending in ______________** | ⚠ **a decision minuted as a discussion**   **______________** | ⚠ **______________** | ⚠ **______________ minutes, and no decision taken** | ⚠ **a discussion minuted as a decision** — **the worse of the two**   **______________** | ⚠ **______________** | ⚠ **______________ was never said at all** | ⚠ **an item minuted that did not occur**   ⚠ **Item ______________ is the one I did not expect.** **______________.** ⚠ **The minute-taker has written down what he assumed**, **and he is right, and it should not be in a minute.**   ⚠ **Item ______________ is the one I will correct first**, **because ______________ can be put right by ______________ and ______________ cannot be untaken.**   ⚠ **My own note is ______________ and has the times on it.** ⚠ **Without it I would be arguing from memory against a document.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Times in your own note, item by item', ''],
  ['The two faults distinguished, with the asymmetry', ''],
  ['An item minuted that did not occur, if there is one', ''],
  ['The basis checked where a decision is recorded', ''],
  ['The order of correction, with a reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the item whose minute is shortest. ⚠ The class asks how long the item took — and where a twenty-minute item has five words, that is a decision missing before anybody argues about words.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that was taken and never minuted (**200 to 240 words**). Say what was decided, who was there, what the minute said instead, when the absence was noticed, and what people did about it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the decision survive without a minute?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the decision survive? Usually one of three — ⚠ **and in the other two it was taken again, differently, within the year, by people who did not know it had been taken at all.**'));
out.push(box('Homework', ['Write your final text. Then take the last minute you were sent, mark every item decision, discussion or nothing, and rewrite one item in the four parts (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.6 =======================
out.push(pb());
out.push(h2('10.6  Correcting a minute you did not write'));
out.push(p('**Function:** separating accuracy from substance in a correction   ·   **Grammar:** _a point of accuracy · a point of substance · I ask that the minute record_   ·   **Pronunciation:** a correction offered to a chairman'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a minute you have corrected. ⚠ Then say whether your correction was about what was said or about what was right.'));
out.push(p('**b**  Which is a point of accuracy? _Item 4 should say “considered” rather than “agreed”. · Item 4 is wrong because the paper should not be reviewed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about a correction that mixes the two?   **A** it is clearer   **B** it gets both refused, because a chairman cannot grant a substantive change to a record of what was said   **C** it is quicker'));
out.push(p('**b**  Listen again. **1** What are the two kinds of point, and who may grant each? **2** What does he say to do with the substantive one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  "Accuracy or substance?"', [
  ['Nour', 'Two corrections to the draft minute. Item 4 and item 5.'],
  ['Mr Ayoub', '⚠ **Are they points of accuracy or points of substance? Because I can grant one of those and I cannot grant the other.**'],
  ['Nour', 'Item 5 first. The minute says the position regarding the bank was discussed. Nobody mentioned the bank.'],
  ['Mr Ayoub', '⚠ **Accuracy. Granted, and it comes out.** ⚠ **A record of what was said is mine to correct, because I was there and I chaired it.**'],
  ['Nour', 'Item 4 says it was agreed that the paper would be reviewed before issue. Nothing was agreed; you said you would think about it overnight.'],
  ['Mr Ayoub', '⚠ **Also accuracy, and granted.** ⚠ **It will say that I undertook to consider the matter overnight, which is what happened.**'],
  ['Nour', 'And I think the paper should go as it stands.'],
  ['Mr Ayoub', '⚠ **Now you have moved, and I want you to notice that you moved.** ⚠ **That is a point of substance and it is not a correction to a minute at all** — **it is a submission about a decision I have not taken yet.**'],
  ['Nour', 'They came out of the same reading of the same document.'],
  ['Mr Ayoub', '⚠ **They did, and if you had put them in one note I would have refused both.** ⚠ **Because the moment a chairman sees an argument inside a correction, he reads the whole thing as an attempt to improve the record** — **and a record that can be improved is not a record.**'],
  ['Nour', 'So the substance goes where?'],
  ['Mr Ayoub', '⚠ **In a separate note, with its own date, which I will read with the paper and not with the minute.** ⚠ **Two documents, two readers in me, and both of them are willing.** **One document and I am a man being got round.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Accuracy and substance**',
  table(['', 'A point of accuracy', 'A point of substance'], [
    ['**what it is**', '⚠ **what was said, or not said, in the room**', '⚠ **what ought to be decided**'],
    ['**who may grant it**', '⚠ **the chairman** — **he was there and he chaired it**', '⚠ **nobody, at a minute meeting** — **it is a submission, not a correction**'],
    ['**the form**', '⚠ *item 5 records that the bank was discussed; the bank was not mentioned*', '⚠ *I submit that the paper should go as it stands*'],
    ['⚠ **where it goes**', '**in the corrections to the minute**', '⚠ **in a separate note, with its own date**'],
    ['⚠ **mixed together**', '⚠ **both refused** — **a chairman who sees an argument inside a correction reads the whole note as an attempt to improve the record**', '⚠ **and a record that can be improved is not a record**'],
  ], [1.3, 3.5, 3.4]),
  '⚠ **Ask of every correction: is this about what was said, or about what is right?** ⚠ **A chairman can grant the first because he was there.** **Nobody can grant the second at a minute meeting, because it is not a correction at all.**',
  '⚠ **Put the substance in a separate note with its own date.** ⚠ **Two documents and the same man reads both willingly; one document and he is a man being got round** — **and he will refuse the accuracy point to be safe.**',
  '⚠ **A point of accuracy is stated as a comparison, not as a complaint.** ⚠ *Item 5 records that the bank was discussed; the bank was not mentioned.* **Fourteen words, two halves, and no adjective.**',
  '⚠ **Expect your own best correction to be substance in disguise.** ⚠ **The two in this cycle came out of the same reading of the same document** — **and one of them is a correction and one of them is an argument about a decision that has not been taken.**',
  '⚠ **And notice the moment you move.** ⚠ *Now you have moved, and I want you to notice that you moved.* **It is the most useful sentence anybody says to Nour in this unit**, **because the slide from accuracy to substance happens inside one breath and is invisible from the inside.**',
  '**Practise:** Take four corrections to a minute. Sort each accuracy or substance, and write the two documents they belong in.',
  '**Useful phrases:**  is this accuracy or substance?  ·  the minute records X; X was not said  ·  I submit that  ·  in a separate note, with its own date  ·  you have moved',
  '**Pronunciation – a correction offered to a chairman.** 🔊 **Track 10.12** Listen twice. ⚠ **The first says *item 5 records that the bank was discussed; the bank was not mentioned* as two flat halves with a short pause between them.** ⚠ **The second stresses *not*.** **Stressed, it is an accusation about the minute-taker; flat, it is two facts next to each other.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has corrections; B is the chairman.'));
out.push(dlg(null, [
  ['A', 'Two corrections. Item __________ and item __________.'],
  ['B', '⚠ **Accuracy or substance? I can grant one and not the other.**'],
  ['A', '⚠ **Item __________ records that __________; __________ was not __________.**'],
  ['B', '⚠ **Accuracy. Granted. And the other?**'],
  ['A', '⚠ **I think __________ should __________.**'],
  ['B', '⚠ **Now you have moved. What is that?**'],
  ['A', '⚠ **A point of substance.**'],
  ['B', '⚠ **Where does it go?**'],
  ['A', '⚠ **In a separate note, with its own date.**'],
]));
out.push(table(['Role card 1 — two documents', 'Role card 2 — the slide'], [[
  '⚠ **A has one accuracy point and one submission, and wants to send them in one note because they came from one reading.** ⚠ **B explains the arithmetic of it: one document makes him a man being got round, and the safe answer to a note he distrusts is to refuse all of it.** ⚠ **Two documents, two readers in the same man, both willing.**',
  '⚠ **A begins with an accuracy point and slides into substance in the middle of a sentence.** ⚠ **B\'s job is to catch the exact word where it happens and say so** — ***now you have moved*** — ⚠ **and then to ask A to say the two halves separately, which A will find harder than expected.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the accuracy point and the submission separately. ⚠ Then find the word in the performance where the speaker moved from one to the other.'));
out.push(PHRASE_CARD(['accuracy or substance?', 'the minute records X; X was not said', 'I submit that', 'a separate note, its own date', 'you have moved']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** corrections you would make to a minute. Sort them.'));
out.push(table(['The correction', 'Accuracy or substance?', 'The form it takes', 'Which document'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.1, 1.4, 2.4, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Item _______ records that _______; _______ was not _______. That is a point of _______. And my other point is _______, which is a point of _______ and goes in _______._'));
out.push(p('**Listener task:** count how many corrections were substance. ⚠ Then ask how many of those the speaker had been intending to send inside the minute corrections, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three corrections on the board — look for an argument inside a correction, and a point of accuracy carrying an adjective. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CORRECTIONS TO THE DRAFT MINUTE OF 3 JUNE. 4 June. N. Mansour. To the Chairman.**',
  '⚠ **Three points of accuracy. There are no other points in this note.**',
  table(['Item', 'The minute records', 'What was said', 'Suggested'], [
    ['**3**', '**that the credit position was noted**', '⚠ **a decision was taken: the account on the standing exception list at sixty-one days, calculated on invoice dates**', '⚠ *the account is placed on the standing exception list at sixty-one days, calculated on invoice dates, for review on 30 September — Bassel Nassif*'],
    ['**4**', '⚠ **that it was agreed the paper would be reviewed before issue**', '⚠ **that the Chairman undertook to consider the matter overnight.** **No decision was taken.**', '⚠ *the Chairman undertook to consider overnight whether the paper should issue as it stands*'],
    ['**5**', '⚠ **that the position regarding the bank was discussed**', '⚠ **the bank was not mentioned by anybody.** **The word *Thursday* was used twice.**', '⚠ **that the item be deleted**'],
  ], [0.5, 2.6, 3.3, 3.4]),
  '⚠ **The meeting closed at ten past ten and the minute says ten o\'clock, and I am not raising it.** **It is accurate to within ten minutes, nothing turns on it, and a note with four points in it reads differently from a note with three.**',
  '⚠ **Item 3 is the one where I have supplied the owner and the date, which nobody said out loud.** **Bassel will own it because it is his item and there is nobody else**, ⚠ **and 30 September is the quarter end, which is when a review of a credit exception has to happen.** ⚠ **I have said in the covering line that both are my inference** — **because a minute that records an owner nobody named is a minute I have improved, and 9.4 is why that is not mine to do.**',
  '⚠ **And I have a point of substance, which is not in this note.** **It is in a separate note of the same date, about whether the paper should issue as it stands.** ⚠ **The two came out of one reading of one document and they go to the same man on the same morning in two envelopes** — **and the reason is not etiquette.** **A chairman who sees an argument inside a correction has to read the correction as an attempt to improve the record, and then the safe answer to all of it is no.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is not being raised, and why not?'));
out.push(item('2', 'What has the writer supplied at item 3, and how has she handled it?'));
out.push(item('3', 'Why do the two notes go in two envelopes?'));
out.push(box('Writer\'s box', [
  '**Corrections to a minute — four parts:** ⚠ **a line saying there are no other points in the note** → **a table of *item · the minute records · what was said · suggested*** → ⚠ **the point you are not raising** → ⚠ **and the inference you have supplied, declared as an inference.**',
  '⚠ **Open with the scope and keep it.** ⚠ *Three points of accuracy. There are no other points in this note.* **Nine words, and they are what make the note readable in one pass** — **and they are a promise the rest of the note has to keep.**',
  '⚠ **Set *the minute records* against *what was said* in two columns.** ⚠ **A correction stated as a comparison needs no adjective** — **and a correction written as prose almost always acquires one.**',
  '⚠ **Name the point you are NOT raising.** ⚠ **Ten past ten against ten o\'clock, nothing turning on it** — **because a note with four points reads differently from a note with three, and the reader cannot see the one you dropped unless you show him.**',
  '⚠ **Declare an inference as an inference.** ⚠ **An owner and a date that nobody said out loud are yours, not the meeting\'s** — **and a minute that records an owner nobody named is a minute you have improved, which 9.4 settled.**',
  '⚠ **And send substance in a separate note of the same date.** ⚠ **Two envelopes, one morning, one man** — **because a chairman who sees an argument inside a correction must treat the whole note as an attempt to improve the record, and the safe answer to that is no to all of it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write corrections to a minute you have been sent (**80 words or more**). Use the frame.'));
out.push(p('**CORRECTIONS TO THE DRAFT MINUTE OF ______________. ______________. To the Chairman.**   ⚠ **______________ points of accuracy. There are no other points in this note.**   **______________** | **______________** | ⚠ **______________** | ⚠ *______________*   **______________** | ⚠ **______________** | ⚠ **______________.** **No decision was taken.** | ⚠ *______________*   **______________** | ⚠ **______________** | ⚠ **______________ was not ______________ by anybody** | ⚠ **that the item be deleted**   ⚠ **______________ and I am not raising it.** **It is accurate to within ______________, nothing turns on it, and a note with ______________ points reads differently from a note with ______________.**   ⚠ **Item ______________ is the one where I have supplied ______________, which nobody said out loud.** ⚠ **I have said that both are my inference**, **because ______________.**   ⚠ **And I have a point of substance, which is not in this note.** **It is in a separate note of the same date, about ______________.** ⚠ **The reason is not etiquette:** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A scope line, and the note keeps it', ''],
  ['*The minute records* against *what was said*, in columns', ''],
  ['A point not raised, and why', ''],
  ['Any inference declared as an inference', ''],
  ['Substance in a separate note of the same date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their scope line and their last point. ⚠ The class says whether the note kept its promise — and where the last point is substance, the scope line has been broken by the writer who wrote it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a correction to a minute that was refused (**200 to 240 words**). Say what the minute said, what you said, what kind of point it was, what the chairman said, and what the record says now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the refused point accuracy or substance?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the refused point substance? Usually two of three — ⚠ **and in both of those there was an accuracy point in the same note that was refused with it.**'));
out.push(box('Homework', ['Write your final text. Then take the last minute you were sent, write every correction, sort each accuracy or substance, and put them in two documents (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review & Mediate: the minute that decides what happened'));
out.push(p('**Function:** settling a record with the person who wrote it   ·   **Review:** purpose · interests · the unlisted item · the one fact · the minute as the decision · accuracy and substance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the three questions to ask before a meeting you did not call, and which of them cannot be answered with a word?',
  '**2** What is the difference between an interest and a motive, and which is sayable?',
  '**3** What are the three parts of a request for time for an unlisted item?',
  '**4** What are the four words that stop a decision, and where must you stop?',
  '**5** What four things does a minuted decision carry, and what does *noted* record?',
  '**6** What is the difference between a point of accuracy and a point of substance, and who may grant each?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the minute-taker say about item 5?   **A** he heard somebody say it   **B** he was not in the room for the first ten minutes and wrote down what the Thursdays were obviously about   **C** he will not change it'));
out.push(p('**b**  Listen again. **1** What does he ask for, that nobody had offered? **2** What does he say about the word *noted*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  "I was not in for the first ten minutes"', [
  ['Nour', 'Three points on the draft, and one of them is mine to apologise for. Item 5 first.'],
  ['Mr Tarabishi', 'The bank line. Go on.'],
  ['Nour', '⚠ **Nobody mentioned the bank. *Thursday* was said twice and *bank* was never said at all.**'],
  ['Mr Tarabishi', '⚠ **You are right, and I will tell you exactly where it came from.** ⚠ **I was not in the room for the first ten minutes** — **I was finding the file** — **and when I came in, Mr Ayoub was saying Thursday for the second time.**'],
  ['Nour', 'And Thursday is obviously the committee.'],
  ['Mr Tarabishi', '⚠ **It is obviously the committee to anybody who works here.** ⚠ **So I wrote what the Thursdays were about, which is what a minute-taker does when he has missed the start** — **and it is the one thing a minute-taker must never do.**'],
  ['Nour', 'Item 3 says the credit position was noted.'],
  ['Mr Tarabishi', '⚠ **_Noted_ is what I write when I have not understood what happened**, **and I have been doing it for nineteen years, and nobody has ever said so to me.**'],
  ['Nour', 'It was a twenty-two-minute item and it ended in a decision.'],
  ['Mr Tarabishi', '⚠ **Then give me the four things and I will write them.** ⚠ **What, on what basis, who owns it, and by when.**'],
  ['Nour', '⚠ **The owner and the date are my inference. Nobody said either out loud.**'],
  ['Mr Tarabishi', '⚠ **Then I will take the first two from you and I will ask the Chairman for the other two**, **because an owner nobody named is not mine to supply and not yours.**'],
  ['Nour', 'And item 4.'],
  ['Mr Tarabishi', '⚠ **Already changed, as soon as you said it. *Undertook to consider overnight*.** ⚠ **And now I will ask you for something nobody has offered me in nineteen years.** ⚠ **Send me your own note of the meeting** — **the one with the times on it** — **and I will read it against mine before I circulate anything, for this meeting and the next one.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – settling a record with its writer**',
  table(['What you say', 'What he says', 'What it means'], [
    ['⚠ **the item that did not occur, as two facts** — *Thursday twice, bank never*', '⚠ *I was not in the room for the first ten minutes and I wrote what the Thursdays were about*', '⚠ **not invention and not carelessness** — **a gap filled with what everybody knows, which 10.3 predicted**'],
    ['⚠ **the twenty-two-minute item minuted as *noted***', '⚠ *noted is what I write when I have not understood what happened, and nobody has ever said so to me in nineteen years*', '⚠ **a habit nobody has corrected, because nobody reads a minute against a note**'],
    ['⚠ **the four things**', '⚠ *give me them and I will write them*', '⚠ **a minute-taker will take a form if somebody gives him one**'],
    ['⚠ **that the owner and the date are your inference**', '⚠ *then I will take the first two from you and ask the Chairman for the other two*', '⚠ **the right answer, and better than yours** — **9.4 applied to a record**'],
    ['⚠ **what he asks for**', '⚠ *send me your own note, with the times on it, and I will read it against mine*', '⚠ **the remedy that outlives the meeting** — **and nobody had offered it in nineteen years**'],
  ], [2.4, 3, 2.9]),
  '⚠ **Take a record back to the person who wrote it, item by item, before it is circulated.** ⚠ **What you will find is not invention: a gap in the hour filled with what everybody knows, and a word that records nothing used for nineteen years because nobody has read a minute against a note.**',
  '⚠ **State an item that did not occur as two facts and not as an accusation.** ⚠ *Thursday was said twice; the bank was never mentioned.* **It is checkable, it is not about him, and it produced an explanation in one sentence.**',
  '⚠ **Give a minute-taker the form and he will use it.** ⚠ **What, on what basis, who owns it, by when** — **and nobody in nineteen years had given it to him.**',
  '⚠ **Declare your inferences and let him route them.** ⚠ **He takes the decision and the basis from you and asks the Chairman for the owner and the date** — **which is better than your version, and is 9.4 arriving in a different document.**',
  '⚠ **And expect the remedy to come from him.** ⚠ *Send me your own note, with the times on it, and I will read it against mine before I circulate anything.* **Nobody had offered it in nineteen years, and it is the only part of this conversation still working next quarter.**',
  '**Practise:** Take a draft minute to the person who wrote it. Read the items as comparisons, give the four things, and offer your own note.',
  '**Useful phrases:**  Thursday twice, the bank never  ·  it was a twenty-two-minute item  ·  what, basis, who, by when  ·  that part is my inference  ·  my note has the times on it',
  '**Pronunciation – reading an item as two facts.** 🔊 **Track 10.14** Listen twice. ⚠ **The first says *Thursday was said twice; the bank was never mentioned* as two level halves.** ⚠ **The second rises on *never*.** **Risen, it is a charge; level, it is a comparison a man can check against his own page.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a draft minute; B wrote it. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A takes three items in the minute\'s order, each as two facts, and gives the four things for the item that was minuted as *noted*.** ⚠ **A declares which parts are inference.** ⚠ **A does not say that the minute is poor, does not mention nineteen years, and ends by offering the note with the times on it** — **which is the only thing in the conversation that changes the next meeting.**',
  '⚠ **B has been writing minutes for nineteen years and has never been read against a note.** ⚠ **B explains item 5 honestly** — **he missed the first ten minutes and filled the gap with what everybody knows.** ⚠ **B takes the four things gratefully, refuses the owner and the date because nobody named them, and then asks A for something nobody has ever offered.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three items and what the minute-taker said about each. ⚠ Then say which of the two inferences he refused, and why he was right.'));
out.push(PHRASE_CARD(['Thursday twice, the bank never', 'a twenty-two-minute item', 'what, basis, who, by when', 'that part is my inference', 'my note has the times on it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a draft minute of a meeting you were in. Take **three** items to the person who wrote it.'));
out.push(table(['Item', 'The two facts', 'What they said', 'What goes in the record'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.6, 2.2, 2.2, 2.2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the minute. This is the **tenth** unit of this book, and the unwritten thing is this: ⚠ **a minute is not a record of a meeting, it is the meeting, for everybody who was not there and for everybody who was there four months later** — **and it is written by whichever person in the room was least able to follow what was happening, because the person taking the note is the person who cannot join in; so the record of a decision is made by the one participant who was not participating, and the only correction available is somebody else\'s note with the times on it.**'));
out.push(p('_Item _______ records _______; in fact _______. The writer said _______. And what goes in the record is _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a minuted decision · an action owner · the real agenda · a note of dissent · a point of accuracy · the version that becomes the record_. ⚠ Sixty items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for an item read as an accusation, and an inference supplied as a fact. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)', 10));
out.push(p('⚠ **This unit is Part 2: sentence insertion, five gaps and six sentences, and it is the second time in this book.** Choose from **A–F** the sentence that fits each gap **1–5**. ⚠ **One sentence is not needed.** **Read the sentence BEFORE and the sentence AFTER each gap: a Part 2 answer is held in place at both ends.**'));
out.push(box(null, [
  '**WHO DECIDES WHAT HAPPENED — a note for a company secretary\'s manual.**',
  'A minute is not a record of a meeting. It is the meeting, as far as anybody who was not in the room is concerned, and as far as everybody who was in the room is concerned four months later. **(1)** ______',
  'The practical consequence is that the person who writes the minute decides what happened. **(2)** ______ The remedy is not to distrust minute-takers, most of whom are conscientious and none of whom asked to hold this power; it is to read the draft against a note of your own, taken at the time, with the times on it.',
  'Two faults account for most of the damage. The first is a decision recorded as a discussion. **(3)** ______ The second is a discussion recorded as a decision, and it is the one to correct first, because it cannot be undone by taking the decision again.',
  'A third fault is rarer and more interesting. **(4)** ______ He is usually right about what the meeting was for, and it should still not be in the record, because a minute is a record of what was said and not of what was understood.',
  '**(5)** ______ What was decided, on what basis, who owns it, and by when. An action with no owner is not an action, and an owner with no date is not an owner.',
]));
out.push(table(['', 'The six sentences'], [
  ['**A**', 'This is rarely malicious and is almost never noticed at the time.'],
  ['**B**', 'It costs a second meeting, which is a real cost and a recoverable one.'],
  ['**C**', 'A minute-taker who was not present for part of an hour will sometimes record what he assumes the hour was about.'],
  ['**D**', 'Every recorded decision needs four things.'],
  ['**E**', 'That is a strong claim and it is worth stating plainly, because almost nobody acts as though it were true.'],
  ['**F**', 'The attendance list should always be checked against the people who were actually in the room.'],
], [0.5, 7]));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Four content points, all four present, and a report takes headings.** ⚠ **This is the fifth Part 2 in the book; the odd units take Part 1.**',
  '⚠ **A report on a meeting takes three headings:** ⚠ **_What was decided_ · _What was not decided_ · _What I have asked to be corrected_.** **The second heading is the one candidates leave out and it is where half the content is.**',
  '⚠ **Put the BASIS inside the decision sentence.** ⚠ *at sixty-one days, calculated on invoice dates* — **nine words, and without them the report records a number whose meaning expires when the meeting is forgotten.**',
  '⚠ **Name what was not decided, and say what it is waiting on.** ⚠ *No decision was taken on the paper; the Chairman undertook to consider it overnight.* **A report that lists only decisions is read as a report in which everything was settled.**',
  '⚠ **Part 2 tip, for the gaps above.** ⚠ **Every answer is held at both ends.** **Gap 3 is the clearest case: the sentence before names the first fault and the sentence after begins *the second*, so the gap must say something about the FIRST fault and nothing about the second** — ⚠ **which eliminates three options without reading them properly.**',
  '⚠ **And the sentence that is not needed is usually true, sensible and about the right subject.** ⚠ **F is good advice about minutes and belongs nowhere in this text**, **because no gap in it is about attendance** — **and a candidate who places it has answered the topic instead of the gap.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write a report for your manager on a meeting you attended (**120 to 140 words**). Include **what was decided, with its basis** · **what was not decided, and what it waits on** · **what you have asked to be corrected in the minute** · and **one thing you recommend**.'));
out.push(p('**______________**   ______________ was decided: ______________, ⚠ **calculated on ______________**, owned by ______________, for review on ______________.   **______________**   ⚠ **No decision was taken on ______________.** **______________ undertook to ______________.**   **______________**   ⚠ **I have asked for ______________ points of accuracy: ______________, ______________ and ______________.**   ⚠ **I recommend ______________**, **because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings', ''],
  ['The basis inside the decision sentence', ''],
  ['What was not decided, and what it waits on', ''],
  ['The corrections, counted and named as accuracy', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the minute of a meeting that became the version everybody believes (**200 to 240 words**). Say what the meeting decided, what the minute said, who corrected it or did not, what people now think happened, and what it has cost.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take your own note of the next meeting you attend, with the times on it, and read the draft minute against it item by item (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The account ___ on the standing exception list.   a) is placed   b) is placing   c) place',
  '2  Nothing ___ agreed at that meeting.   a) were   b) was   c) been',
  '3  ___ that is decided — one fact.   a) Before   b) Front   c) Ahead',
  '4  An action ___ no owner is not an action.   a) by   b) with   c) at',
  '5  The sixty days run ___ the invoice date.   a) since   b) of   c) from',
  '6  He asked ___ four minutes.   a) to   b) for   c) about',
  '7  It was minuted ___ a decision.   a) like   b) how   c) as',
  '8  The item ___ nobody will raise is the reason for the meeting.   a) what   b) which   c) who',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 10.15** Listen to a conversation about a draft minute. Complete the note.   Why the bank line is in the minute: ______   What the writer says *noted* means: ______   How long he has been doing it: ______   The four things he asks for: ______   Which two he refuses to take from her, and why: ______   What he asks for at the end: ______'));
out.push(p('**C  Reading.** Read the four-part form at 10.5 again. Name the four parts, say which of the two faults is worse, and say why.'));
out.push(p('**D  Writing.** Take a meeting at your work. Write one minuted decision in the four parts; then one point of accuracy as a comparison; then the sentence you would use to get an unlisted item four minutes (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Nour', '⚠ **Item 5. Nobody mentioned the bank. *Thursday* was said twice and *bank* was never said at all.**'],
  ['Mr Tarabishi', '⚠ **You are right, and I will tell you where it came from.** ⚠ **I was not in the room for the first ten minutes** — **I was finding the file** — **and when I came in, Mr Ayoub was saying Thursday for the second time.** ⚠ **So I wrote what the Thursdays were about, which is the one thing a minute-taker must never do.**'],
  ['Nour', 'And item 3 says the credit position was noted. It was a twenty-two-minute item and it ended in a decision.'],
  ['Mr Tarabishi', '⚠ **_Noted_ is what I write when I have not understood what happened.** ⚠ **Nineteen years, and nobody has ever said so to me.** ⚠ **Give me the four things and I will write them: what, on what basis, who owns it, and by when.**'],
  ['Nour', '⚠ **The owner and the date are my inference. Nobody said either out loud.**'],
  ['Mr Tarabishi', '⚠ **Then I will take the first two from you and ask the Chairman for the other two**, **because an owner nobody named is not mine to supply and not yours.**'],
  ['Nour', 'And item 4 is already changed.'],
  ['Mr Tarabishi', '⚠ **As soon as you said it.** ⚠ **And now I will ask you for something nobody has offered me in nineteen years.** ⚠ **Send me your own note of the meeting, the one with the times on it, and I will read it against mine before I circulate anything** — **for this meeting and the next one.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**10.1** ask the three questions in two lines the day before, and read the answer for its condition',
  '**10.2** write each person\'s interest with a figure, and know when your own item will come',
  '**10.3** get four minutes for an unlisted item, and leave the unraisable one alone on purpose',
  '**10.4** stop a decision on its basis in four words and one fact, and then stop',
  '**10.5** read a minute for its verbs, and give a decision its four parts',
  '**10.6** separate a point of accuracy from a point of substance, and send them in two envelopes',
  '**10.7** settle a record with the person who wrote it, and give him your note with the times on it',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 11 — **The Thing You Have To Say**: the sentence that costs you something, said to the person it costs you with._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
module.exports = out;
