// Proactive Business English B2 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'the agentless passive · an impersonal account · a nominalisation · the actor in a sentence · to restore the actor · a fault without a culprit · a culprit · as far as can be established · to be attributed to · to omit the agent · a neutral account · an institutional voice · a form of words · to soften a finding · a finding · a discrepancy · to be ascribed to · a named individual · a passive construction · the subject of a sentence · a verb made into a noun · to depersonalise · on the evidence of the file · to be answerable in writing · a stated actor · an unstated actor · to name nobody · a sentence with nobody in it · the person behind the verb · a question of wording · the delay in signing · an agreed form of words';
const COLLOC = 'to take the person out · to put a name to a fault · to let a sentence stand · to withdraw a form of words · to press for a name · to settle a form of words · to account for a delay · to attach a name to a finding';
const BACK_AT_B2 = 'wording · oversight · attribution';

out.push(h1('Unit 2  Taking Yourself Out of the Sentence'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  choose between a passive that hides and a passive that clarifies',
  '**2.2**  write *it was decided* — and know when to say by whom',
  '**2.3**  turn a verb into a noun, and count what it costs',
  '**2.4**  write a fault without a culprit, and a fault with one, on purpose',
  '**2.5**  hedge agency to exactly what the file supports',
  '**2.6**  restore the actor when somebody asks, without retreating',
  '**2.7**  Review & Mediate: the sentence that cost somebody a reputation, and nobody wrote it to',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Where the Beirut question stands', [
  '⚠ **A holding line went to Mr Dallal on 24 January.** His letter wanted an answer by the 26th. **Mr Ayoub signed four lines asking for until 31 March**, and a reply came on the 28th granting it. ⚠ **So the question is open until the end of March, and this book runs to the week it is answered.**',
  '⚠ **And one sentence of mine has gone somewhere I did not send it.** **In the January count paper I wrote _nine cartons in the fourth store were found to be damp_**, which names nobody. ⚠ **It has been read in the packing room as a finding about Abu Yasser**, who has never in nineteen years put a wet carton in a rack, ⚠ **and who heard about it from a driver.**',
  '**This unit is about that sentence.** ⚠ **The passive did not accuse him. It left a space where an actor should have been, and the building filled it in** — **and it filled it in with the name of the man closest to the shelf.**',
], C.lyellow, C.orange));

// ======================= CYCLE 2.1 =======================
out.push(pb());
out.push(h2('2.1  The passive that hides and the passive that clarifies'));
out.push(p('**Function:** choosing a passive on purpose   ·   **Grammar:** the agentless passive — _was accepted · was found · has been agreed_   ·   **Pronunciation:** the agentless passive read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a sentence you have read at work that told you something had happened and not who did it. Say whether you minded.'));
out.push(p('**b**  Which hides and which clarifies? _The order was accepted on the 14th. · It was felt that the figures needed review._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the passive is?   **A** always weak writing   **B** a tool with two uses   **C** a thing to avoid at B2'));
out.push(p('**b**  Listen again. **1** What is her test? **2** Why does she say *it was felt* is the worse of the two?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  "Ask what the space is doing"', [
  ['Nour', 'I have been told all my life that the passive is bad writing.'],
  ['Nadia', '⚠ **You have been told that by people who read a lot of bad passive.** ⚠ **It is a tool and it has two uses, and they are opposites.**'],
  ['Nour', 'Give me both.'],
  ['Nadia', '⚠ *The order was accepted on the 14th.* **Who accepted it?**'],
  ['Nour', 'Whoever was on the counter. It does not matter.'],
  ['Nadia', '⚠ **Exactly — and because it does not matter, naming them would be noise.** ⚠ **That passive clarifies: it puts the order and the date where the reader is looking.** Now the other. ⚠ *It was felt that the figures needed review.*'],
  ['Nour', 'Felt by whom?'],
  ['Nadia', '⚠ **Ask that out loud and you have found the fault.** ⚠ **Somebody has an opinion and has put it in a sentence with nobody in it**, so that the opinion arrives with the authority of the building and the cost of nobody.'],
  ['Nour', 'So the test is: who?'],
  ['Nadia', '⚠ **The test is: ask who, and then ask what the space is doing.** ⚠ **Sometimes the space is empty because nothing goes there. Sometimes somebody is standing in it and has stepped back.**'],
  ['Nour', 'And *the nine cartons were found to be damp*?'],
  ['Nadia', '⚠ **Found by whom?**'],
  ['Nour', '…By me. I found them. On the 8th, and again on the 11th.'],
  ['Nadia', '⚠ **Then you have taken yourself out of a sentence where you belonged, and left a hole the shape of a person** — **and a building reading that sentence will put somebody in the hole.** ⚠ **It will not put you in it, because you wrote it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The two passives, and the test**',
  table(['Sentence', 'Ask: by whom?', 'What the space is doing'], [
    ['*The order was accepted on the 14th.*', 'whoever was on the counter', '⚠ **empty, because nothing goes there** — the actor is noise'],
    ['*It was felt that the figures needed review.*', '⚠ **somebody, and they have stepped back**', '⚠ **an opinion with the authority of the building and the cost of nobody**'],
    ['*The nine cartons were found to be damp.*', '⚠ **by the writer, on the 8th and the 11th**', '⚠ **a hole the shape of a person, which the reader will fill**'],
    ['**the test**', '⚠ **ask who out loud**', '⚠ **then ask what the space is doing**'],
  ], [2.1, 1.6, 2.3]),
  '⚠ **The passive is a tool with two opposite uses and no moral.** **It clarifies when the actor is noise**: *the order was accepted*, *the account was opened in July*, *the gate sheet is signed by name.* **It hides when the actor has stepped back out of it.**',
  '⚠ **Ask *by whom?* out loud, every time.** **The sentences that fail do so audibly** — *felt by whom? · decided by whom? · found by whom?* **A sentence that answers *nobody in particular* is sound. A sentence that answers *me* and does not say so is not.**',
  '⚠ **A hole the shape of a person gets filled.** ⚠ **A reader does not leave an actor-shaped space empty; they put in the most likely person, which is the person nearest the thing.** **That is not a reading fault. It is what reading is.**',
  '⚠ **And the writer is never the one put in the hole, because the writer is visibly outside the sentence.** **That asymmetry is why the agentless passive is comfortable to write and expensive to be the subject of.**',
  '⚠ *It was felt · it was considered · it has been suggested* **are the three to be suspicious of in your own writing.** **All three are an opinion of yours, wearing the building\'s coat.**',
  '**Practise:** Take five passives from your own writing. Ask *by whom?* and say what each space is doing.',
  '**Useful phrases:**  ask who out loud  ·  what is the space doing?  ·  the actor is noise here  ·  a hole the shape of a person  ·  an opinion in the building\'s coat',
  '**Pronunciation – the agentless passive read without emphasis.** 🔊 **Track 2.2** Listen to *the order was accepted on the 14th* read twice. ⚠ **The first is flat and the stress is on *14th*; the second stresses *was accepted*.** **The second sounds as though somebody is being protected** — **and a reader hears that, then goes looking for whom. Say it flat, four times, with the stress on the date.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a passive sentence of their own; B asks *by whom?* and they decide together what the space is doing.'));
out.push(dlg(null, [
  ['A', '_(a passive from their own writing)_ __________.'],
  ['B', '⚠ By whom?'],
  ['A', '__________.'],
  ['B', '⚠ **And what is the space doing?**'],
  ['A', 'It is __________, because __________.'],
  ['B', '⚠ So it __________ — and if somebody has to be in it, who will the building put there?'],
  ['A', '__________, because they are nearest to it.'],
  ['B', '⚠ **Then either name yourself or name nobody and mean it.**'],
]));
out.push(table(['Role card 1 — the order and the feeling', 'Role card 2 — the hole, filled'], [[
  '*The order was accepted on the 14th* against *it was felt that the figures needed review.* ⚠ **The first has an empty space; the second has a person standing back from one.** **B asks *felt by whom?* until A says *by me*, which takes about three attempts.**',
  'A reads *the nine cartons were found to be damp.* ⚠ B asks who the building would put in the space. ⚠ **The answer is the man nearest the shelf, which is Abu Yasser, who has never put a wet carton in a rack.** **Then both of them write the sentence with the finder in it and read it back.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write each sentence and the answer to *by whom?* ⚠ Then mark each space **empty** or **vacated**, and for every vacated one write the name the building would supply.'));
out.push(PHRASE_CARD(['ask who out loud', 'what is the space doing?', 'the actor is noise here', 'a hole the shape of a person', 'an opinion in the building\'s coat']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** passive sentences from things you have written. Interrogate each one.'));
out.push(table(['The sentence', 'By whom?', 'Empty or vacated', 'Who the building would put in it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my five, _______ were empty and _______ were vacated. The worst was _______, and the building would put _______ in it._'));
out.push(p('**Listener task:** count the vacated spaces in the room. ⚠ Then ask how many of them had the writer standing just outside.'));
out.push(p('**Board clinic:** your teacher writes three sentences on the board — look for _it was felt_ and a *was found* whose finder is the writer. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**THE JANUARY COUNT, PARAGRAPH 4 — TWO VERSIONS OF ONE SENTENCE. 29 January. N. Mansour.**',
  '**What I wrote on the 15th.** _Nine cartons in the fourth store were found to be damp and cannot be sold as first quality. The store has been used for overflow since June. It has been noted that the roof above the north corner has not been inspected this year._',
  '⚠ **Three sentences, three passives, and not one actor in any of them.** **Forty-one words and nobody in them.**',
  '**What I should have written.** _I counted the fourth store twice, on the 8th and again on the 11th, and found nine damp cartons in the north corner. They cannot be sold as first quality. We have used the store for overflow since June, which was my arrangement. Nobody has inspected the roof above that corner this year, and nobody was asked to._',
  '⚠ **Fifty-eight words, seventeen more, and four actors: me, me, us-and-me, and nobody-and-nobody.**',
  table(['The sentence', 'Who was in the space', 'What happened'], [
    ['*were found to be damp*', '⚠ **me, twice, on two dates**', '⚠ **read as a finding about the man nearest the shelf**'],
    ['*has been used for overflow*', '⚠ **me — it was my arrangement**', 'read as a standing practice nobody chose'],
    ['*it has been noted*', '⚠ **me, and only in that sentence**', '⚠ **read as though somebody senior had noted it**'],
    ['*has not been inspected*', '**genuinely nobody**', '⚠ **and the second *nobody* is the one that matters: nobody was asked to**'],
  ], [1.7, 1.7, 2.6]),
  '⚠ **The third row is the one I am least able to defend.** *It has been noted* **was me, noticing, in that sentence, for the first time.** ⚠ **There was no note, no noter and no noting** — **I wrote the words because they made the observation sound as though it had come from further up the building than my own desk.**',
  '⚠ **And the fourth row is where the two versions differ most.** **The first says the roof has not been inspected, which reads as a failure.** ⚠ **The second says nobody has inspected it and nobody was asked to, which reads as a gap** — **and a gap belongs to whoever draws up the list of what gets inspected, which is me.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many words and actors are in each version?'));
out.push(item('2', 'Which sentence can the writer least defend, and why?'));
out.push(item('3', 'What is the difference between the two versions of the roof sentence?'));
out.push(box('Writer\'s box', [
  '**Writing a paragraph twice — four parts:** **the version you wrote** → ⚠ **the count: words, and actors** → **a table of who was in each space** → ⚠ **the sentence you can least defend, named.**',
  '⚠ **Count the actors, not the passives.** ⚠ *Three passives and not one actor; forty-one words and nobody in them.* **A count of passives is a style note. A count of actors is a finding.**',
  '⚠ **Expect the honest version to be longer.** **Fifty-eight against forty-one.** ⚠ **Putting people back into sentences costs words, and that cost is the reason the agentless version got written.**',
  '⚠ **Find the sentence where the actor was you and the passive borrowed somebody else\'s authority.** ⚠ *It has been noted* **when there was no note and no noter.** **That is the one to name, because it is the one a reader cannot detect and you can.**',
  '⚠ **Distinguish a failure from a gap.** ⚠ *The roof has not been inspected* **is a failure and somebody owns it.** ⚠ *Nobody has inspected it and nobody was asked to* **is a gap, and it belongs to whoever draws up the list** — **which is usually the writer.**',
  '⚠ **And do not rewrite every passive.** **The order was accepted on the 14th stays exactly as it is**, and a learner who de-passivises a whole page has swapped one habit for another.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a paragraph you have written and write it twice (**80 words or more**). Use the frame.'));
out.push(p('**______________ — TWO VERSIONS OF ONE PARAGRAPH. ______________. ______________.**   **What I wrote.** ______________   ⚠ **______________ passives, and ______________ actor(s). ______________ words and ______________ in them.**   **What I should have written.** ______________   ⚠ **______________ words, ______________ more, and ______________ actors.**   _(the table)_ ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **The sentence I am least able to defend is ______________.** ⚠ **______________ was ______________, and there was no ______________** — **I wrote the words because ______________.**   ⚠ **And the two versions differ most at ______________.** **The first reads as ______________; the second reads as ______________** — ⚠ **and ______________ belongs to ______________, which is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Actors counted, not passives', ''],
  ['Both word counts, with the honest version longer', ''],
  ['The sentence that borrowed somebody else\'s authority', ''],
  ['A failure distinguished from a gap', ''],
  ['At least one passive left exactly as it was', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the sentence they can least defend. ⚠ The class says who the building would have put in the space.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence that was read as being about somebody (**200 to 240 words**). Say what it said, who wrote it, who it was taken to be about, how they heard, and what the sentence would have been with an actor in it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who was in the space, and who got put there_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the person it was taken to be about hear it from somebody else? Usually all three — ⚠ **and in two of three the writer did not find out for weeks.**'));
out.push(box('Homework', ['Write your final text. Then take the last page you wrote, ask *by whom?* of every passive in it, and mark each space empty or vacated (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.2 =======================
out.push(pb());
out.push(h2('2.2  It was decided — and by whom'));
out.push(p('**Function:** restoring an actor where it is owed   ·   **Grammar:** _X decided · it was decided by X · it was decided_ — three distances   ·   **Pronunciation:** a name said in a sentence without weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a decision at your work that is always reported as *it was decided*. Say whether you know who took it.'));
out.push(p('**b**  Put these at three distances: _Mr Ayoub decided on 1 October · it was decided by Mr Ayoub on 1 October · it was decided on 1 October._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When does Mr Ayoub say his name must be in the sentence?   **A** always   **B** when somebody would otherwise be blamed for it   **C** never'));
out.push(p('**b**  Listen again. **1** What is the second case he gives? **2** What does he say the middle form is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  "Put my name on it"', [
  ['Nour', 'The note says the Ghouta days were changed in March.'],
  ['Mr Ayoub', 'Changed by whom?'],
  ['Nour', 'By me. I moved them to Mondays and Wednesdays on 1 March.'],
  ['Mr Ayoub', '⚠ **Then your name goes in it**, and not because of credit. ⚠ **Because the two biggest customers on that run were annoyed for a fortnight, and somebody has been apologising for a change nobody could trace.**'],
  ['Nour', 'Abu Yasser has been apologising.'],
  ['Mr Ayoub', '⚠ **Abu Yasser has been apologising for your decision for ten months**, and he has never once said whose it was, ⚠ **because he does not know either.**'],
  ['Nour', 'So the rule is: name the actor when it was a decision.'],
  ['Mr Ayoub', '⚠ **The rule is: name the actor when somebody else is otherwise carrying it.** That is the first case and it is the big one. ⚠ **The second is when a reader has to go and ask about it.**'],
  ['Nour', 'Meaning?'],
  ['Mr Ayoub', '⚠ **A sentence that says *it was decided* and nothing else is a sentence a reader cannot act on.** He wants it changed back, or wants to understand it. ⚠ **Who does he go to?** He goes to whoever is nearest, and that is the warehouse again.'],
  ['Nour', 'And the middle form — *it was decided by Mr Ayoub*?'],
  ['Mr Ayoub', '⚠ **That is for when the actor is owed and the sentence is not about them.** ⚠ *The 500,000 limit was set by me in 2019* — **I am in it, and the limit is still the subject, which is where the reader is looking.** **It is the form nobody teaches and it does most of the work.**'],
  ['Nour', 'And *it was decided* on its own?'],
  ['Mr Ayoub', '⚠ **For when the decision is the company\'s and the person is genuinely irrelevant** — *it was decided to close on the first Friday of the month.* **If you cannot say *and nobody needs to know who*, it is the wrong form.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three distances, and when each is right**',
  table(['Form', 'Use it when', 'Example'], [
    ['⚠ **_X decided_**', '⚠ **somebody else is otherwise carrying it**, or a reader has to go and ask', '*I moved the Ghouta run to Mondays and Wednesdays on 1 March.*'],
    ['⚠ **_it was decided by X_**', '⚠ **the actor is owed and the sentence is not about them**', '*The 500,000 limit was set by Mr Ayoub in 2019.*'],
    ['**_it was decided_**', '⚠ **only if you can add *and nobody needs to know who***', '*It was decided to close on the first Friday of the month.*'],
  ], [1.7, 2.3, 2]),
  '⚠ **The first case is the one that matters and it is not about credit.** ⚠ **Name the actor when somebody else is otherwise carrying the decision** — **and in a working building somebody always is: the person nearest the customer, the gate or the shelf.**',
  '⚠ **Abu Yasser apologised for ten months for a decision he could not trace.** **He never named anybody, because he did not know either.** ⚠ **An untraceable decision is carried by whoever is standing in front of the person who minds.**',
  '⚠ **The second case is practical: can the reader act on it?** **A reader who wants a decision explained or reversed must be able to see where to go.** ⚠ *It was decided* **sends him to whoever is nearest.**',
  '⚠ **The middle form is the one nobody teaches and it does most of the work.** ⚠ **_was set by Mr Ayoub_ keeps the limit as the subject, where the reader is looking, and still puts the actor on the page.** **Use it for history, for authorities and for anything a reader is checking rather than arguing with.**',
  '⚠ **And the test for the bare form is a sentence you say out loud:** ⚠ *and nobody needs to know who.* **If that is false, the form is wrong.**',
  '**Practise:** Take four *it was decided* sentences from your workplace and put each at the right distance.',
  '**Useful phrases:**  decided by whom?  ·  somebody else is carrying it  ·  he has been apologising for ten months  ·  can the reader act on it?  ·  and nobody needs to know who',
  '**Pronunciation – a name said without weight.** 🔊 **Track 2.4** Listen to *the limit was set by Mr Ayoub in 2019* twice. ⚠ **The first runs through the name; the second leans on it.** **The second sounds like blame or like flattery, and both are a cost you did not intend.** Say it four times, flat across the name.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an *it was decided* sentence; B finds the actor and chooses the distance.'));
out.push(dlg(null, [
  ['A', 'The note says __________ was changed in __________.'],
  ['B', '⚠ Changed by whom?'],
  ['A', 'By __________.'],
  ['B', '⚠ **Is anybody else carrying it?**'],
  ['A', '__________ has been __________ for __________.'],
  ['B', '⚠ Then the name goes in, and not for credit. **Which distance?**'],
  ['A', '__________, because __________.'],
  ['B', '⚠ **And can you say *and nobody needs to know who*?**'],
  ['A', '⚠ No. So it is the wrong form.'],
]));
out.push(table(['Role card 1 — ten months of apologies', 'Role card 2 — the middle form'], [[
  '*The Ghouta days were changed in March.* ⚠ **Changed by Nour, on 1 March.** ⚠ **Abu Yasser has apologised for it for ten months without knowing whose it was.** **B\'s job is to get A to the first distance: _I moved the Ghouta run on 1 March._**',
  'A has a sentence about an authority or a limit — a signing limit, a price list, a standing instruction. ⚠ B\'s job is to keep the thing as the subject and still get the actor on the page: ⚠ **_the 500,000 limit was set by Mr Ayoub in 2019._** **Then both read the first-distance version and notice it is about the wrong thing.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence at all three distances and ring the right one. ⚠ Then say who has been carrying it, and for how long.'));
out.push(PHRASE_CARD(['decided by whom?', 'somebody else is carrying it', 'can the reader act on it?', 'and nobody needs to know who', 'the thing stays the subject']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** decisions at your work that are reported with no actor. Place each at a distance.'));
out.push(table(['The decision, as reported', 'Who actually took it', 'Who has been carrying it', 'Distance, and why'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.2, 1.4, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It is reported as _______. It was taken by _______. _______ has been carrying it for _______. I would write it as _______._'));
out.push(p('**Listener task:** count how many decisions in the room have somebody carrying them who did not take them. ⚠ Then ask how many of those people know whose decision it was.'));
out.push(p('**Board clinic:** your teacher writes three sentences on the board — look for a bare *it was decided* that fails the *nobody needs to know who* test, and a first-distance sentence that should be the middle form. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE NINE CARTONS — THE SAME EVENT, WRITTEN FOUR WAYS. 30 January. N. Mansour. For Mr Ayoub, with the fourth one recommended.**',
  table(['', 'The version', 'What a reader does with it'], [
    ['**1**', '*Nine cartons in the fourth store were found to be damp.*', '⚠ **supplies the man nearest the shelf** — **which is what happened**'],
    ['**2**', '*Nine cartons in the fourth store were found to be damp by me, on the 8th and the 11th.*', '⚠ **reads as a boast or a defence**, because the finding is not the point and I am at the end of it'],
    ['**3**', '*I counted the fourth store twice and found nine damp cartons in the north corner.*', '**acts on it** — the count, the place and the finder, and the corner tells him where to look'],
    ['**4**', '⚠ **_I counted the fourth store twice, on the 8th and the 11th, and found nine damp cartons in the north corner, under the part of the roof nobody has inspected this year. Nobody was asked to inspect it. The store has been used for overflow since June, which was my arrangement._**', '⚠ **cannot blame anybody but me, and does not need to blame anybody at all**'],
  ], [0.6, 3.4, 2]),
  '⚠ **Version 1 is what I wrote and it has cost a man a fortnight of being looked at.** **Version 2 is the mistake people make when they are told to put themselves in: the actor goes in at the end, where it reads as either a claim or an excuse.**',
  '⚠ **Version 3 is correct and sufficient, and version 4 is the one I am sending**, because version 3 answers *who found them* and version 4 answers the question Mr Ayoub will ask next, which is ⚠ **how nine cartons came to be under an uninspected roof in a store nobody was supposed to be using for stock.**',
  '⚠ **The last clause of version 4 is the one that was hard to write.** *Which was my arrangement.* **Nobody asked me for it, nobody would have found it, and it converts a report about damp cartons into a report that includes a decision of mine.** ⚠ **It is also the only version in which Abu Yasser does not appear at all, and he is the reason I am writing it again.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does a reader do with version 1, and what did it cost?'));
out.push(item('2', 'Why is version 2 worse than version 3 and not better?'));
out.push(item('3', 'Which clause was hard to write, and what does it change?'));
out.push(box('Writer\'s box', [
  '**The same event, written four ways — four parts:** **the bare passive** → ⚠ **the passive with the actor tacked on the end** → **the active, sufficient version** → ⚠ **the version that answers the next question too.**',
  '⚠ **Put the actor at the front or not at all.** ⚠ *were found to be damp by me* **reads as a boast or a defence**, because a name at the end of a passive is a name that has been added under pressure.',
  '⚠ **Write the version that answers the reader\'s next question.** **Version 3 answers *who found them*; version 4 answers *how did they get there*** — ⚠ **and a reader who has to come back and ask will come back annoyed.**',
  '⚠ **Say *which was my arrangement* when it was.** **Nobody will ask, nobody would find it, and it is the clause that turns a report about a thing into a report that includes a decision of yours.**',
  '⚠ **And check whether the person who has been carrying it appears in your version at all.** ⚠ **The test of the rewrite is not that you are in it; it is that he is out of it.**',
  '⚠ **Recommend one version and say why.** **A page that offers four and chooses none makes the reader do the work the page exists to do.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take an event you have reported and write it four ways (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE SAME EVENT, WRITTEN FOUR WAYS. ______________. ______________, with the ______________ recommended.**   **1** ______________ | ⚠ **______________**   **2** ______________ | ⚠ **reads as ______________**   **3** ______________ | **acts on it**   **4** ⚠ **______________** | ⚠ **______________**   ⚠ **Version 1 is what I wrote and it has cost ______________.**   ⚠ **Version ______________ is the one I am sending**, because ______________ answers ______________ and ______________ answers the question ______________ will ask next, which is ⚠ **______________.**   ⚠ **The ______________ clause was hard to write.** ______________. **Nobody asked me for it, nobody would have found it, and it ______________.** ⚠ **It is also the only version in which ______________, and ______________ is the reason I am writing it again.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four versions, genuinely different', ''],
  ['A version with the actor tacked on the end, shown as a fault', ''],
  ['The version that answers the reader\'s next question', ''],
  ['A decision of the writer\'s, volunteered', ''],
  ['One version recommended, with a reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read versions 1 and 4 only. ⚠ The class says who disappears between them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision somebody has been carrying that they did not take (**200 to 240 words**). Say what it was, who took it, how long the other person has carried it, how it has shown, and what sentence would end it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does the person carrying it know whose decision it was?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many does the carrier not know whose decision it was? Usually two of three — ⚠ **and in at least one they have assumed it was their own fault.**'));
out.push(box('Homework', ['Write your final text. Then find one decision somebody else has been carrying, write it at the first distance with your own or the real name in it, and give it to them (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.3 =======================
out.push(pb());
out.push(h2('2.3  Nominalisation, and what it costs'));
out.push(p('**Function:** turning verbs into nouns, and counting the cost   ·   **Grammar:** _the delay in signing_ against _we did not sign_   ·   **Pronunciation:** a nominalised sentence read aloud, and the breath it takes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a phrase from your workplace that is a verb wearing a noun\'s clothes. _(Start: the implementation of · the provision of · the completion of.)_'));
out.push(p('**b**  Which is shorter, and which has a person in it? _the delay in signing the terms · we did not sign the terms until April_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say a nominalisation always loses?   **A** length   **B** the actor and the tense   **C** politeness'));
out.push(p('**b**  Listen again. **1** What does she say it gains? **2** Why is *the delay in signing* worse than four words longer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  "A verb has a who and a when in it"', [
  ['Hala', 'Read me the first line of your covering note.'],
  ['Nour', '*The delay in signing has created difficulties for the warehouse.*'],
  ['Hala', '⚠ **Who did not sign, and when?**'],
  ['Nour', '…We did not. Until the ninth of April.'],
  ['Hala', '⚠ **A verb has a who and a when inside it and a noun does not.** ⚠ *We did not sign until 9 April* **carries both.** ⚠ *The delay in signing* **carries neither, and it is one word shorter.**'],
  ['Nour', 'So nominalisation is a way of losing information cheaply.'],
  ['Hala', '⚠ **It is a way of losing the actor and the tense and keeping the event**, which is sometimes exactly what you want. ⚠ **It is the most useful thing in the language for a sentence that must name no one.**'],
  ['Nour', 'And what does it gain, besides the hiding?'],
  ['Hala', '⚠ **It lets you put an event in the subject of a sentence and do something to it.** ⚠ *The delay cost us nine days of yard space.* **You cannot say that with a verb without a long detour.** **That is a real gain and it is why the form exists.**'],
  ['Nour', 'Then why is my line bad?'],
  ['Hala', '⚠ **Because *has created difficulties for the warehouse* is the second half of the same trick.** ⚠ **Difficulties for whom? Created by what?** **You have two nominalisations in nine words and the sentence is about nobody doing nothing to no one.**'],
  ['Nour', 'What would it be?'],
  ['Hala', '⚠ *We did not sign until 9 April. Abu Yasser has had nine hundred cartons in the yard since the 2nd and has moved them twice.* ⚠ **Two sentences, twenty words, and now there is a man, a figure and a date in it.**'],
  ['Nour', 'And it is eleven words longer.'],
  ['Hala', '⚠ **And the first version has been read twice and acted on never**, and this one will be read once.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What a nominalisation loses and what it gains**',
  table(['', 'Noun', 'Verb'], [
    ['**the words**', '*the delay in signing*', '*we did not sign until 9 April*'],
    ['**the actor**', '⚠ **gone**', '**we**'],
    ['**the tense**', '⚠ **gone**', '**did not — finished, and dated**'],
    ['**the event**', 'kept', 'kept'],
    ['⚠ **what it lets you do**', '⚠ **_the delay cost us nine days of yard space_** — **the event in the subject**', 'a long detour to say the same'],
  ], [1.5, 2.3, 2.2]),
  '⚠ **A verb has a who and a when inside it and a noun does not.** **That is the whole grammar of this cycle.** ⚠ **Nominalisation is the most useful thing in the language for a sentence that must name nobody** — **and the question is always whether this is such a sentence.**',
  '⚠ **The gain is real: it lets you put an event in the subject and do something to it.** ⚠ *The delay cost us nine days of yard space.* ⚠ *The change to Mondays has halved the complaints.* **Those are good sentences and they need the noun.**',
  '⚠ **Watch for two in one sentence.** ⚠ *The delay in signing has created difficulties for the warehouse* **is nine words about nobody doing nothing to no one**, and the second nominalisation — *difficulties* — is where the human cost went.',
  '⚠ **The cost is paid in length and the length is worth it.** **Eleven words longer, with a man, a figure and a date in it.** ⚠ **The short version is read twice and acted on never.**',
  '⚠ **The test:** ⚠ **read the sentence and ask what you would have to add to act on it.** **If the answer is *who* and *when*, you have nominalised something that needed a verb.**',
  '**Practise:** Take four nominalisations from your workplace. Say what each loses, and whether it should.',
  '**Useful phrases:**  who did not, and when?  ·  a verb has a who and a when in it  ·  a sentence that must name nobody  ·  the event in the subject  ·  what would I add to act on it?',
  '**Pronunciation – a nominalised sentence and the breath it takes.** 🔊 **Track 2.6** Listen to *the delay in the implementation of the revised collection arrangements* read aloud. ⚠ **It takes one long breath and has no stress to put anywhere**, because there is no verb to carry it. **Then the verb version, which has three stresses and two breaths.** Read both aloud twice and notice which one you can say standing up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a nominalised line; B asks who and when, and they rebuild it.'));
out.push(dlg(null, [
  ['A', '_(a nominalised line)_ __________.'],
  ['B', '⚠ **Who __________, and when?**'],
  ['A', '…__________, on __________.'],
  ['B', '⚠ And the second half — **__________ for whom? __________ by what?**'],
  ['A', '__________.'],
  ['B', '⚠ **Read it with a person, a figure and a date in it.**'],
  ['A', '__________. __________.'],
  ['B', '⚠ How many words longer?'],
  ['A', '__________ longer. ⚠ And the first one has been read __________ and acted on __________.'],
]));
out.push(table(['Role card 1 — two in nine words', 'Role card 2 — the one to keep'], [[
  '*The delay in signing has created difficulties for the warehouse.* ⚠ **Two nominalisations, nine words, nobody doing nothing to no one.** → ⚠ *We did not sign until 9 April. Abu Yasser has had nine hundred cartons in the yard since the 2nd and has moved them twice.*',
  'A brings a nominalisation that is **right** — an event in the subject of a sentence that does something. ⚠ **_The delay cost us nine days of yard space_ · _the change to Mondays has halved the complaints._** **B\'s job is to try the verb version and fail**, and then to say in one sentence why the noun is correct here.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both versions and the word difference. ⚠ Then say which of the two role cards you have just heard — the one to rebuild or the one to keep.'));
out.push(PHRASE_CARD(['who, and when?', 'a verb has a who and a when', 'two in nine words', 'the event in the subject', 'what would I add to act on it?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** nominalisations from your workplace. Judge each one.'));
out.push(table(['The phrase', 'What it loses', 'Rebuild, or keep?', 'Words added if rebuilt'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.5, 1.3, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my six, _______ should be rebuilt and _______ should be kept. The worst was _______, which lost _______. Rebuilt it costs _______ words._'));
out.push(p('**Listener task:** count the room\'s total added words. ⚠ Then ask whether any of the kept ones were kept for the right reason, which is an event in the subject and not a habit.'));
out.push(p('**Board clinic:** your teacher writes three phrases on the board — look for two nominalisations in one sentence, and a *provision of* that is just *we gave*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE COVERING NOTE, PARAGRAPH 1 — WHAT THE NOUNS COST. 31 January. N. Mansour.**',
  '**As written.** _The delay in signing has created difficulties for the warehouse, and the postponement of the collection arrangements pending resolution of the storage situation has resulted in additional handling._',
  '⚠ **Twenty-eight words. Six nominalisations. Nought actors, nought dates, nought figures.** **Read it aloud and you will need one breath and will find nowhere to put a stress.**',
  table(['The noun', 'The verb under it', 'What was lost'], [
    ['*the delay in signing*', '*we did not sign*', '⚠ **us, and 9 April**'],
    ['*has created difficulties*', '*it has cost*', '⚠ **a figure** — it cost something countable'],
    ['*for the warehouse*', '*for Abu Yasser*', '⚠ **a man** — a warehouse cannot be inconvenienced'],
    ['*the postponement of*', '*I put off*', '⚠ **me, and the fact that it was a choice**'],
    ['*pending resolution of*', '*until we know where to put them*', '**a thing a reader can picture**'],
    ['*has resulted in additional handling*', '*he has moved them twice*', '⚠ **twice, and him moving them**'],
  ], [1.8, 2.1, 2.1]),
  '**As it should read.** _We did not sign until 9 April. I put off the new collection days until we knew where to put the cartons. Abu Yasser has had nine hundred cartons in the yard since the 2nd and has moved them twice._',
  '⚠ **Forty-one words against twenty-eight, so the honest version costs thirteen words.** **It also contains four actors, three dates or figures, and one decision of mine that the first version had dissolved into a noun.**',
  '⚠ **The fourth row is the one I want to point at.** ⚠ *The postponement of the collection arrangements* **was me, deciding, on a Tuesday.** **Turning it into a noun did not merely hide me: it made a decision look like a condition of the weather.** ⚠ **A reader cannot argue with a postponement. He can argue with *I put off*, and he should be able to.**',
  '⚠ **And the third row is the one nobody notices.** ⚠ *Difficulties for the warehouse.* **A warehouse is a building. It has not been inconvenienced by anything.** ⚠ **Abu Yasser has moved nine hundred cartons twice**, and the word *warehouse* was doing the work of hiding a man behind a wall.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many nominalisations, actors, dates and figures are in each version?'));
out.push(item('2', 'What does the writer say turning her decision into a noun did to it?'));
out.push(item('3', 'What was the word *warehouse* doing?'));
out.push(box('Writer\'s box', [
  '**What the nouns cost — four parts:** **the paragraph as written** → ⚠ **the count: nominalisations, actors, dates, figures** → **a table of the verb under each noun** → ⚠ **the rebuilt paragraph, with the extra words counted.**',
  '⚠ **Put the verb under each noun in its own column.** ⚠ *the postponement of* **→** *I put off.* **The column is the exercise; a general note that the paragraph is nominalised teaches nobody anything.**',
  '⚠ **Name what each noun lost, specifically.** **Not *the actor* — *me, and the fact that it was a choice*.** ⚠ **Not *clarity* — *twice, and him moving them*.**',
  '⚠ **Look for the noun that turned your own decision into a condition of the weather.** ⚠ **A reader cannot argue with a postponement; he can argue with *I put off*, and he is entitled to.**',
  '⚠ **And look for the building standing in front of a person.** ⚠ *Difficulties for the warehouse.* **A warehouse has not been inconvenienced by anything.** **Institutions in the object position are usually people in hiding.**',
  '⚠ **Count the extra words and do not apologise for them.** **Thirteen more, four actors, three figures, one decision recovered.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a nominalised paragraph of your own and rebuild it (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT THE NOUNS COST. ______________. ______________.**   **As written.** ______________   ⚠ **______________ words. ______________ nominalisations. ______________ actors, ______________ dates, ______________ figures.**   ______________ | ______________ | ⚠ **______________**   ______________ | ______________ | ⚠ **______________**   ______________ | ______________ | ⚠ **______________**   **As it should read.** ______________   ⚠ **______________ words against ______________, so the honest version costs ______________ words.** **It contains ______________ actors, ______________ dates or figures, and ______________.**   ⚠ **The ______________ row is the one I want to point at.** ______________ **was ______________.** ⚠ **Turning it into a noun made ______________ look like ______________.**   ⚠ **And ______________ is the one nobody notices.** ⚠ **______________ is ______________. It has not been ______________ by anything.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The verb under each noun, in its own column', ''],
  ['What each noun lost, specifically', ''],
  ['A decision of the writer\'s, recovered from a noun', ''],
  ['An institution found standing in front of a person', ''],
  ['The extra words counted, and not apologised for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the noun that hid a decision of theirs. ⚠ The class says what the reader could now argue with that they could not before.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a phrase at your work that everybody uses and nobody can unpack (**200 to 240 words**). Say what it is, what verb is under it, who has disappeared, and what happens when you say the verb version out loud in a meeting.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what verb is under the phrase, and who is in it_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the phrase used by people who could not say who does the thing? Usually all three — ⚠ **and in at least one the phrase is in a job title.**'));
out.push(box('Homework', ['Write your final text. Then take a page from your workplace, put the verb under every noun in it, and count the actors you recover (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.4 =======================
out.push(pb());
out.push(h2('2.4  A fault without a culprit, and a fault with one'));
out.push(p('**Function:** choosing on purpose whether a fault has a name in it   ·   **Grammar:** _the carton was mismarked_ against _Fadi mismarked the carton_   ·   **Pronunciation:** a finding read without the voice going up at the name'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a fault at your work that is written up with a name in it, and one that is written up without. Say who decided which was which.'));
out.push(p('**b**  Which would you want written about you? _Three cartons were mismarked on the night of the 12th. · Fadi mismarked three cartons on the night of the 12th._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say decides whether the name goes in?   **A** how serious it is   **B** whether the reader needs the name in order to act   **C** whether the person is senior'));
out.push(p('**b**  Listen again. **1** What is the supplier case? **2** What does he say the worst option is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  "Does the reader need the name?"', [
  ['Nour', 'Two faults this week. The plater sent us a hundred sheets at the wrong gauge, and Fadi mismarked three cartons on the night shift.'],
  ['Bassel', 'And you are asking me which gets a name in it.'],
  ['Nour', 'Both are faults. It feels inconsistent to name one.'],
  ['Bassel', '⚠ **Ask what the reader has to do, and the inconsistency disappears.** ⚠ **What does Mr Ayoub do about the plater?**'],
  ['Nour', 'Telephone him. Possibly stop using him.'],
  ['Bassel', '⚠ **Then the name is the whole content of the sentence.** *The plater in Aleppo sent a hundred sheets at the wrong gauge on the 9th.* ⚠ **Without the name the sentence is unusable.**'],
  ['Nour', 'And Fadi?'],
  ['Bassel', '⚠ **What does Mr Ayoub do about Fadi?**'],
  ['Nour', 'Nothing. He has never marked at night before and the codes are in a hand he cannot read in that light.'],
  ['Bassel', '⚠ **Then his name is not content. It is decoration, and the decoration costs him something.** ⚠ *Three cartons were mismarked on the night of the 12th. The night codes are handwritten and the light at the second rack is one bulb.* **That is a fault with a remedy in it and no culprit.**'],
  ['Nour', 'And if Mr Ayoub asks who?'],
  ['Bassel', '⚠ **Then you tell him, and that is 2.6.** ⚠ **Leaving a name out of a page is not the same as refusing to say it.**'],
  ['Nour', 'So what is the worst option?'],
  ['Bassel', '⚠ **The worst is the one you have been doing for a month without noticing.** ⚠ **Naming nobody and writing it so that everybody knows who.** *Three cartons were mismarked on the night of the 12th by the new man on the second rack.* ⚠ **That is a name without the courtesy of being a name**, and it is the only version of the three that is cowardly.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Does the reader need the name?**',
  table(['Case', 'Write', 'Because'], [
    ['⚠ **the reader must act on the person**', '*The plater in Aleppo sent a hundred sheets at the wrong gauge on the 9th.*', '⚠ **the name is the content** — without it the sentence is unusable'],
    ['⚠ **the reader will act on the system**', '*Three cartons were mismarked on the night of the 12th. The night codes are handwritten and the light at the second rack is one bulb.*', '⚠ **a fault with a remedy in it and no culprit**'],
    ['⚠ **the worst option**', '⚠ **_mismarked by the new man on the second rack_**', '⚠ **a name without the courtesy of being a name**'],
  ], [1.7, 2.6, 1.7]),
  '⚠ **The test is not seriousness and not seniority. It is: what does the reader have to do?** ⚠ **If he must act on a person, the name is the content. If he will act on a system, the name is decoration — and the decoration costs the person something.**',
  '⚠ **A fault without a culprit must have a remedy in it**, or it is not a neutral account, it is a complaint about the weather. ⚠ *The codes are handwritten and the light at the second rack is one bulb* **is the sentence that makes the nameless version honest.**',
  '⚠ **The third row is the commonest fault in a working office and nobody thinks they do it.** ⚠ **Naming nobody and writing it so that everybody knows who** — *the new man · the night man · somebody on that shift* — ⚠ **is a name without the courtesy of being a name.**',
  '⚠ **Leaving a name out of a page is not the same as refusing to say it.** **If the reader asks, you tell him** — **and knowing that is what makes it possible to leave it out in the first place.**',
  '⚠ **And the asymmetry: a name in a page outlives the fault.** **The plater\'s gauge error is solved by a telephone call; a man\'s name in a January file is read in June by somebody deciding about him.**',
  '**Practise:** Take four faults from your workplace. For each, say what the reader must act on, and whether the name is content or decoration.',
  '**Useful phrases:**  what does the reader have to do?  ·  the name is the content here  ·  a fault with a remedy in it  ·  decoration, and it costs him something  ·  a name without the courtesy of being a name',
  '**Pronunciation – a finding read without the voice going up at the name.** 🔊 **Track 2.8** Listen to *the plater in Aleppo sent a hundred sheets at the wrong gauge* twice. ⚠ **The first is flat; the second rises on *Aleppo*.** **The rise turns a fact into an accusation and a reader hears it.** Say it flat, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a fault to write up; B asks what the reader must act on.'));
out.push(dlg(null, [
  ['A', '__________ this week. __________, and __________.'],
  ['B', '⚠ **What does your reader do about __________?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then the name is __________.**'],
  ['A', 'And __________?'],
  ['B', '⚠ **What does he do about __________?**'],
  ['A', 'Nothing. __________.'],
  ['B', '⚠ **Then the name is decoration and it costs __________ something. Write it with a remedy in it and no culprit.**'],
  ['A', '__________. __________.'],
  ['B', '⚠ **And no *the new man*. That is a name without the courtesy of being one.**'],
]));
out.push(table(['Role card 1 — the plater and the night shift', 'Role card 2 — the uncourteous name'], [[
  '⚠ **The plater\'s gauge error needs the name: Mr Ayoub must telephone him.** ⚠ **Fadi\'s mismarking does not: nothing happens to Fadi, and the remedy is a bulb and a printed code sheet.** **Two faults, two forms, one test.**',
  'A has written *by the new man on the second rack.* ⚠ B\'s job is to make A say the man\'s name out loud, and then ask which is kinder on paper. ⚠ **It is the name.** ⚠ **A description that identifies one person is a name with the protection taken off it** — **everybody in the building decodes it and the man cannot even see that he was accused.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two faults and mark each *name* or *no name*. ⚠ Then write the remedy that makes the nameless one honest.'));
out.push(PHRASE_CARD(['what does the reader have to do?', 'the name is the content', 'a fault with a remedy in it', 'decoration, and it costs him', 'a name without the courtesy']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** faults from your workplace. Decide each one on purpose.'));
out.push(table(['The fault', 'What the reader must act on', 'Name or no name', 'The remedy, if no name'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.6, 1.1, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my five, _______ need a name because the reader must act on a person. _______ do not, and the remedy in each is _______. And _______ of them is currently written as _______._'));
out.push(p('**Listener task:** count the *name without the courtesy of being a name* in the room. ⚠ Then ask whether the person described has ever seen the page.'));
out.push(p('**Board clinic:** your teacher writes three findings on the board — look for *the new man on the second rack*, and a nameless fault with no remedy in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**TWO FAULTS, WEEK ENDING 1 FEBRUARY. N. Mansour. One with a name in it and one without, and the reason for each.**',
  '**1  The gauge.** ⚠ **The plater in Aleppo sent a hundred sheets at 0.4 instead of 0.5 on 9 January.** We used eleven before anybody noticed, and those eleven are in cartons that have gone to Beirut. He has been told and has not replied. ⚠ **The name is in this sentence because there is nothing else in it that you can act on.** He is the only plater in Aleppo who works to our standard, he put his rate up twelve per cent in March and we paid it, and the decision about him is yours and not small.',
  '**2  The night marking.** **Three cartons were mismarked on the night of the 12th and found at the gate on the 13th.** ⚠ **The night codes are handwritten, the light at the second rack is one bulb, and the man marking had not marked at night before.** **No carton left the yard. The remedy is a printed code sheet and a second bulb, and I have ordered both.**',
  table(['', 'Fault 1', 'Fault 2'], [
    ['**the reader must act on**', '⚠ **a person** — whether we keep him', '⚠ **a system** — a sheet and a bulb'],
    ['**so the name is**', '⚠ **the content**', '⚠ **decoration, and it would cost him**'],
    ['**what is in the sentence instead**', 'the gauge, the date, the eleven used', '⚠ **the hand, the light, and the first night**'],
    ['**who could be harmed by the form chosen**', '⚠ **the plater, and he has earned the risk**', '⚠ **nobody, which is the point**'],
  ], [2, 2.1, 1.9]),
  '⚠ **The sentence I had to take out of fault 2 was *by the man on the second rack*.** **I wrote it, read it, and understood that eleven people in this building would know who it was and he would not know he had been written about.** ⚠ **A description that identifies one person is a name with the protection taken off it.**',
  '⚠ **And the sentence I had to put into fault 1 is the last one.** *The decision about him is yours and not small.* **Naming the plater is easy and it is not free** — ⚠ **he is the only man in Aleppo who plates to our standard**, **and a page that names him without saying that has handed Mr Ayoub half a file.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the plater named and the marker not?'));
out.push(item('2', 'What sentence was taken out of fault 2, and why?'));
out.push(item('3', 'What sentence had to be put into fault 1?'));
out.push(box('Writer\'s box', [
  '**Two faults, one page — four parts:** **the fault that needs a name, with the name early** → ⚠ **the fault that does not, with its remedy** → **a table of why each form was chosen** → ⚠ **the sentence you took out, and the sentence you put in.**',
  '⚠ **Say in the page itself why the name is there.** ⚠ *The name is in this sentence because there is nothing else in it you can act on.* **A reader who can see the rule applied will trust the page that applies it the other way.**',
  '⚠ **A nameless fault needs three things: what happened, what made it possible, and the remedy, ordered.** ⚠ **The hand, the light, the first night, the printed sheet and the second bulb.** **Without the remedy it reads as a nameless accusation, which is worse than a named one.**',
  '⚠ **Take out every description that identifies one person.** ⚠ *the man on the second rack · the new driver · somebody on that shift.* **A description that identifies one person is a name with the protection taken off it** — ⚠ **everybody decodes it and he cannot see that he was written about.**',
  '⚠ **And when you do name somebody, price it in the same paragraph.** ⚠ *He is the only plater in Aleppo who works to our standard.* **Naming is easy and it is not free, and a page that names a man without saying what he is worth has handed the reader half a file.**',
  '⚠ **Put the harm column in the table.** **Who could be hurt by the form you chose** — **and in a well-made page the answer for the nameless fault is *nobody, which is the point*.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write up two faults from your workplace, one with a name and one without (**80 words or more**). Use the frame.'));
out.push(p('**TWO FAULTS, ______________. ______________. One with a name in it and one without, and the reason for each.**   **1  ______________.** ⚠ **______________ on ______________.** ______________. ⚠ **The name is in this sentence because ______________.** ______________.   **2  ______________.** **______________ on ______________ and found ______________.** ⚠ **______________, ______________, and ______________.** **______________. The remedy is ______________, and I have ______________.**   **the reader must act on** | ⚠ **______________** | ⚠ **______________**   **so the name is** | ⚠ **______________** | ⚠ **______________**   **who could be harmed** | ⚠ **______________** | ⚠ **nobody, which is the point**   ⚠ **The sentence I had to take out of fault 2 was ______________.** ⚠ **A description that identifies one person is ______________.**   ⚠ **And the sentence I had to put into fault 1 is ______________.** **Naming ______________ is easy and it is not free.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The reason the name is there, said in the page', ''],
  ['The nameless fault has its remedy, ordered', ''],
  ['No description that identifies one person', ''],
  ['The named person priced in the same paragraph', ''],
  ['A harm column, answered for both', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the sentence they took out. ⚠ The class says how many people in that workplace would have decoded it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fault that was written up with a name in it when it did not need one (**200 to 240 words**). Say what happened, what form was chosen, who chose it, what the page was read for later, and what the nameless version would have said.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the page read later for something else?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the page read months later by somebody deciding about the person? Usually two of three — ⚠ **and in all three the writer had not been thinking about that reader at all.**'));
out.push(box('Homework', ['Write your final text. Then take a fault you have to write up this week, decide the form on purpose, and write the reason for your choice at the foot of the page (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.5 =======================
out.push(pb());
out.push(h2('2.5  Hedged agency'));
out.push(p('**Function:** claiming exactly what the file supports   ·   **Grammar:** _appears to have been · was not, as far as can be established · is not recorded_   ·   **Pronunciation:** a hedge said once and not stacked'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you believe happened at work that you could not prove from a document. Say what you would write.'));
out.push(p('**b**  Which claims more? _The second consignment was approved verbally. · The second consignment appears to have been approved verbally; there is no written approval on the file._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say a hedge is for?   **A** politeness   **B** matching the claim to the evidence   **C** avoiding blame'));
out.push(p('**b**  Listen again. **1** What is the difference between *was not* and *is not recorded*? **2** Why does she object to three hedges in one sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  "Say what the file says"', [
  ['Nour', 'I have written that the second consignment was approved verbally.'],
  ['Nadia', '⚠ **Were you there?**'],
  ['Nour', 'No. Abu Yasser says Mr Ayoub told him to release it.'],
  ['Nadia', '⚠ **Then you do not know that it was approved. You know that one man says so and there is nothing on the file.** ⚠ **Write what the file says, which is a different sentence.**'],
  ['Nour', '*The second consignment appears to have been approved verbally; there is no written approval on the file.*'],
  ['Nadia', '⚠ **That is exactly the claim the evidence supports and no more.** **And you have put the gap in the same sentence as the claim, which is what makes it honest.**'],
  ['Nour', 'What about *was not approved*? Could I write that?'],
  ['Nadia', '⚠ **No, and the distinction is the whole cycle.** ⚠ *Was not approved* **is a finding about the world.** ⚠ *Is not recorded as approved* **is a finding about the file.** **You can make the second one from where you are sitting; you cannot make the first.**'],
  ['Nour', 'And people read them as the same thing.'],
  ['Nadia', '⚠ **Readers do, and that is the writer\'s problem and not the reader\'s.** ⚠ **A finding about a file dressed as a finding about the world is the commonest dishonest sentence in any office**, and it is almost never written dishonestly on purpose.'],
  ['Nour', 'I had also written *it would appear that it may possibly have been approved informally*.'],
  ['Nadia', '⚠ **Three hedges in eleven words.** ⚠ **A stacked hedge does not claim less — it claims nothing, and it tells a reader you are frightened.** **One hedge, exact, and then stop.**'],
  ['Nour', 'And if the one hedge is still too much for the reader?'],
  ['Nadia', '⚠ **Then he will ask, and you will say: there is nothing on the file, and Abu Yasser says he was told.** ⚠ **Which is the sentence you should have started from.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Matching the claim to the evidence**',
  table(['What you have', 'Write', 'Not'], [
    ['one person says so, nothing on the file', '⚠ **_appears to have been approved verbally; there is no written approval on the file_**', '*was approved verbally*'],
    ['nothing on the file either way', '⚠ **_is not recorded as approved_**', '⚠ **_was not approved_** — a finding about the world'],
    ['two accounts that differ', '*is recorded as X in the gate book and as Y on the delivery note*', '*was X*'],
    ['⚠ **three hedges in eleven words**', '⚠ **one hedge, exact, then stop**', '*it would appear that it may possibly have been*'],
  ], [1.8, 2.6, 1.6]),
  '⚠ **A finding about a file is not a finding about the world, and the sentence must say which it is.** ⚠ *Is not recorded as approved* **you can write from your desk.** ⚠ *Was not approved* **you cannot**, and the two read identically to almost every reader.',
  '⚠ **That misreading is the writer\'s problem and not the reader\'s.** ⚠ **A finding about a file dressed as a finding about the world is the commonest dishonest sentence in an office, and it is almost never written dishonestly on purpose.**',
  '⚠ **Put the gap in the same sentence as the claim.** ⚠ *…; there is no written approval on the file.* **A hedge with the evidence beside it is a statement; a hedge on its own is a mood.**',
  '⚠ **One hedge, and do not stack them.** ⚠ **A stacked hedge does not claim less, it claims nothing** — **and it tells the reader you are frightened, which is information you did not mean to give.**',
  '⚠ **And know the plain sentence underneath.** ⚠ *There is nothing on the file, and Abu Yasser says he was told.* **If you cannot say that, no hedge will help; if you can, you probably should.**',
  '**Practise:** Take four things you believe happened. For each, say what the file supports and write that claim exactly.',
  '**Useful phrases:**  were you there?  ·  write what the file says  ·  a finding about a file, not about the world  ·  put the gap in the same sentence  ·  one hedge, exact, then stop',
  '**Pronunciation – a hedge said once and not stacked.** 🔊 **Track 2.10** Listen to two speakers. ⚠ **The first says *appears to have been approved verbally* and goes straight on to the file.** ⚠ **The second slows down, and the slowing is itself a second hedge.** **A reader hears hesitation as uncertainty about everything, not only about that clause.** Say it four times at the speed of the rest of your sentence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes a claim; B asks what the file supports.'));
out.push(dlg(null, [
  ['A', 'I have written that __________.'],
  ['B', '⚠ **Were you there?**'],
  ['A', 'No. __________ says __________.'],
  ['B', '⚠ **Then you know that one person says so and that __________. Write what the file says.**'],
  ['A', '__________ appears to have __________; there is __________ on the file.'],
  ['B', '⚠ And could you write *was not*?'],
  ['A', '⚠ No — **that is a finding about the world and I can only make one about the file.**'],
  ['B', '⚠ **And the plain sentence underneath?**'],
  ['A', '__________, and __________ says __________.'],
]));
out.push(table(['Role card 1 — the verbal approval', 'Role card 2 — the stacked hedge'], [[
  '*The second consignment was approved verbally.* ⚠ **A has one man\'s word and nothing on the file.** → ⚠ *appears to have been approved verbally; there is no written approval on the file* — **and the plain sentence underneath, which is the one to start from.**',
  'A reads *it would appear that it may possibly have been approved informally.* ⚠ B counts the hedges out loud. ⚠ **Three in eleven words.** **Then B asks what A is actually frightened of**, and the answer is usually a specific person. ⚠ **One hedge, exact, then stop** — **and the fear goes in a different sentence or nowhere.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the claim as made and as the file supports it. ⚠ Then count the hedges in the first version and mark whether it was about the file or about the world.'));
out.push(PHRASE_CARD(['were you there?', 'write what the file says', 'about the file, not the world', 'the gap in the same sentence', 'one hedge, exact, then stop']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you believe happened at work. Write the claim the evidence supports.'));
out.push(table(['What I believe', 'What the file actually holds', 'The claim, exactly', 'File or world?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I believe _______. The file holds _______. So the claim is _______, which is a finding about the _______._'));
out.push(p('**Listener task:** count how many claims in the room were about the world and had to become claims about a file. ⚠ Then ask what the plain sentence underneath each one was.'));
out.push(p('**Board clinic:** your teacher writes three claims on the board — look for a *was not* that should be *is not recorded as*, and three hedges in one sentence. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SECOND CONSIGNMENT — WHAT THE FILE SUPPORTS. 3 February. N. Mansour. Four claims, and the evidence for each.**',
  table(['Claim', 'Evidence', 'So I have written'], [
    ['the consignment was released on 14 January', '⚠ **gate sheet, signed by name, 14 January**', '⚠ **_was released on 14 January_** — flat, no hedge'],
    ['it was approved by Mr Ayoub', '⚠ **nothing written; Abu Yasser says he was told on the yard**', '⚠ **_appears to have been approved verbally; there is no written approval on the file_**'],
    ['nobody checked the gauge before release', '⚠ **no check is recorded; the bench page has no line for it**', '⚠ **_is not recorded as checked, and the bench page has no line for a gauge check_**'],
    ['the eleven sheets at 0.4 went to Beirut', '⚠ **the packing list, and Hala\'s count on the 15th**', '**_eleven sheets at 0.4 were packed and have gone_**'],
  ], [1.8, 2.1, 2.1]),
  '⚠ **The third row is the one I have rewritten four times, and the fourth version is the only honest one.** **My first was *nobody checked the gauge*, which is a finding about what eleven people did and did not do on a Tuesday and I was not there.** **My second was *it is not clear whether the gauge was checked*, which claims nothing and is a mood.** ⚠ **My third was *the gauge was not checked, as far as can be established*, which is a finding about the world with a hedge hung on the end of it** — **and a reader will quote the first eight words.**',
  '⚠ **The fourth adds the sentence that makes it useful:** *the bench page has no line for a gauge check.* **The bench page is at revision 2 of 1 April and was issued by this office, so the missing box is mine.** **The absence of a record is explained by the absence of a box**, ⚠ **and the finding has stopped being about a person and become about a page I am responsible for.**',
  '⚠ **And the second row is where I have to be careful in the other direction.** ⚠ *Appears to have been approved verbally* **is correct and it is not nothing: it says a release happened and somebody says it was authorised.** **A reader who wants more can have the plain sentence** — ⚠ *there is nothing on the file, and Abu Yasser says he was told on the yard* — **and I would rather he asked for it than that I buried it in four hedges.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which claim is written flat, with no hedge, and why?'));
out.push(item('2', 'What were the four versions of the third claim, and why is the fourth the honest one?'));
out.push(item('3', 'What does the writer say a reader who wants more can have?'));
out.push(box('Writer\'s box', [
  '**What the file supports — four parts:** ⚠ **a table: *claim · evidence · so I have written*** → **the claim written flat, where the evidence is flat** → ⚠ **the claim you rewrote four times, with all four shown** → ⚠ **and the plain sentence you are keeping in reserve.**',
  '⚠ **Write the well-evidenced claim flat and do not hedge it out of habit.** ⚠ *Was released on 14 January* — **there is a gate sheet signed by name.** **A page that hedges everything has told the reader nothing about which parts are solid.**',
  '⚠ **Show the versions you rejected.** **A finding about people · a mood · a finding about the world with a hedge on the end · and the honest one.** ⚠ **The third is the dangerous one, because a reader quotes the first eight words and the hedge never travels.**',
  '⚠ **Explain the absence of a record when you can.** ⚠ *The bench page has no line for a gauge check.* **An unexplained missing record is read as a person\'s failure; an explained one is read as a page\'s** — ⚠ **and the page is usually yours.**',
  '⚠ **Do not hedge in the other direction either.** ⚠ *Appears to have been approved verbally* **says a release happened and somebody says it was authorised, and that is not nothing.** **Four hedges would have buried a real fact.**',
  '⚠ **And keep the plain sentence ready.** ⚠ *There is nothing on the file, and he says he was told on the yard.* **Better that a reader asks for it than that you bury it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what the file supports* for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT THE FILE SUPPORTS. ______________. ______________ claims, and the evidence for each.**   ______________ | ⚠ **______________** | ⚠ **______________** — flat, no hedge   ______________ | ⚠ **______________** | ⚠ **______________; there is ______________ on the file**   ______________ | ⚠ **______________** | ⚠ **______________, and ______________**   ______________ | ⚠ **______________** | **______________**   ⚠ **The ______________ row I have rewritten ______________ times.** **My first was ______________, which is ______________ and I was not there. My second was ______________, which claims nothing. My third was ______________** — ⚠ **and a reader will quote the first ______________ words.**   ⚠ **The fourth adds the sentence that makes it useful:** ______________. ⚠ **So ______________, and the finding has stopped being about ______________ and become about ______________.**   ⚠ **And the plain sentence I am keeping in reserve:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A well-evidenced claim written flat', ''],
  ['The rejected versions shown, including the dangerous third', ''],
  ['The absence of a record explained', ''],
  ['No claim hedged into a mood', ''],
  ['The plain sentence, kept in reserve', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their third version and their fourth. ⚠ The class quotes the first eight words of the third and says what travels.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence you have read that claimed more than its evidence (**200 to 240 words**). Say what it claimed, what the file actually held, who acted on it, and what the exact version would have been.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was it a finding about the file or about the world?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the over-claim a finding about a file read as a finding about the world? Usually two of three — ⚠ **and in at least one nobody has ever gone back to look at the file.**'));
out.push(box('Homework', ['Write your final text. Then take a page you are writing now, mark every claim *file* or *world*, and rewrite the ones that have the wrong label (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.6 =======================
out.push(pb());
out.push(h2('2.6  Restoring the actor on request'));
out.push(p('**Function:** answering _who did this?_ without retreating   ·   **Grammar:** _I wrote it that way because · the name is X, and here is what I would do_   ·   **Pronunciation:** answering a direct question at the same volume it was asked'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you been asked *who did this?* about something you wrote without a name in it? Say what you answered.'));
out.push(p('**b**  Which answers, and which retreats? _I would rather not say at this stage. · The name is Fadi. I left it out because nothing in the remedy depends on it, and I will say the same to him._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar want, and what does he get?   **A** a name, and a refusal   **B** a name, and the name plus the reason   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does Nour not do? **2** What does Mr Attar say at the end that she had not expected?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  "Who approved the second consignment?"', [
  ['Mr Attar', 'Your note says the second consignment appears to have been approved verbally. Who approved it?'],
  ['Nour', 'Abu Yasser says Mr Ayoub told him on the yard. There is nothing written.'],
  ['Mr Attar', 'Then why does your note not say Mr Ayoub?'],
  ['Nour', '⚠ **Because I was not there and the file is not.** ⚠ **If I write that Mr Ayoub approved it, that sentence is in the file for ever on the strength of one conversation I did not hear.**'],
  ['Mr Attar', 'And yet you have just told me.'],
  ['Nour', '⚠ **You asked, and you are entitled to it.** ⚠ **Leaving a name out of a page is not refusing to say it.** **The page is what is on the file. What I have just said is what I know.'],
  ['Mr Attar', 'Suppose I told you to put it in the note.'],
  ['Nour', '⚠ **Then I would write *Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January*, and I would date the sentence.** ⚠ **What I would not write is *Mr Ayoub approved it*, because that is still not something I know.**'],
  ['Mr Attar', 'You have thought about this more than I expected.'],
  ['Nour', 'I wrote the gauge paragraph four times.'],
  ['Mr Attar', '⚠ **Then I will tell you the thing you have not been told.** ⚠ **There is nothing on the file because there has never been a line on the release form for it.** **I asked for one in 2019 and was told it would slow the gate.** ⚠ **So the missing record is mine, from before you were here, and your paragraph has found it without naming anybody at all.**'],
  ['Nour', 'I did not know that.'],
  ['Mr Attar', '⚠ **Nobody did, because nobody ever wrote the absence down.** **Put a line on the form and put my name on the request.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Answering _who did this?_**',
  table(['Move', 'Say', 'Not'], [
    ['⚠ **give the name**', '*Abu Yasser says Mr Ayoub told him on the yard. There is nothing written.*', '⚠ *I would rather not say at this stage*'],
    ['⚠ **give the reason for the page**', '*I was not there and the file is not. That sentence would be on the file for ever on the strength of one conversation.*', '*it did not seem relevant*'],
    ['⚠ **name the distinction**', '⚠ **_leaving a name out of a page is not refusing to say it_**', '—'],
    ['⚠ **offer the form you could write**', '*Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January* — **dated**', '*Mr Ayoub approved it*'],
  ], [1.7, 2.9, 1.4]),
  '⚠ **Answer the question at the volume it was asked.** ⚠ *I would rather not say at this stage* **is a retreat, and a reader who meets it stops believing the rest of the page.**',
  '⚠ **Say why the page is as it is, in one sentence about the file and not about your feelings.** ⚠ *That sentence would be on the file for ever on the strength of one conversation I did not hear.*',
  '⚠ **Offer the form you *could* write, and the difference between it and the one you will not.** ⚠ *X states that Y authorised it* **is writable and dated.** ⚠ *Y approved it* **is not, and the gap between those two sentences is the whole of this unit.**',
  '⚠ **And expect the answer to produce information you did not have.** ⚠ **Mr Attar asked for a line on the release form in 2019 and was refused.** **The missing record was his, from before Nour arrived, and a paragraph that named nobody found it.**',
  '⚠ **That is the argument for the nameless form, and it is not a moral one.** ⚠ **A fault written with a name in it stops being investigated the moment the name is read.** **A fault written as a gap keeps being read until somebody recognises it.**',
  '**Practise:** Somebody asks who did something you wrote without a name. Give the name, the reason for the page, and the form you could write.',
  '**Useful phrases:**  you asked, and you are entitled to it  ·  leaving a name out is not refusing to say it  ·  the page is what is on the file  ·  X states that Y authorised it  ·  nobody ever wrote the absence down',
  '**Pronunciation – answering at the volume it was asked.** 🔊 **Track 2.12** Listen to two answers to *who approved it?* ⚠ **One is the same volume and speed as the question; the other drops.** **The drop is heard as reluctance even when the answer is complete**, and the next question is sharper. Say the answer four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks who did something; A answers without retreating.'));
out.push(dlg(null, [
  ['B', 'Your note says __________. Who __________?'],
  ['A', '__________ says __________. There is __________ written.'],
  ['B', 'Then why does your note not say __________?'],
  ['A', '⚠ **Because ______________.** ⚠ **If I write that __________, that sentence is in the file for ever on the strength of __________.**'],
  ['B', 'And yet you have just told me.'],
  ['A', '⚠ **You asked, and you are entitled to it.** ⚠ **Leaving a name out of a page is not refusing to say it.**'],
  ['B', 'Suppose I told you to put it in.'],
  ['A', '⚠ **Then I would write ______________, and I would date it.** ⚠ **What I would not write is ______________.**'],
]));
out.push(table(['Role card 1 — the second consignment', 'Role card 2 — the answer that gives you something'], [[
  '⚠ **B is Mr Attar and wants a name; A has one man\'s word and nothing on the file.** **A gives the name, the reason, the distinction, and the writable form** — ⚠ *Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January.*',
  'B knows something A does not: ⚠ **the record is missing because there has never been a box for it, and B asked for one years ago and was refused.** **B gives it only if A answers the first question properly.** ⚠ **If A retreats, B says nothing** — **which is what happens in a real office, and is the point of the card.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four moves. ⚠ Then say what the asker gave back, and whether the answer earned it.'));
out.push(PHRASE_CARD(['you asked, and you are entitled to it', 'leaving a name out is not refusing', 'on the strength of one conversation', 'X states that Y authorised it', 'nobody wrote the absence down']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** nameless statements you have written or would write. Prepare the answer to *who?*'));
out.push(table(['The statement', 'The name, and how I know', 'The reason the page is as it is', 'The form I could write'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.5, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The statement is _______. The name is _______, and I know it from _______. The page is as it is because _______. And the form I could write is _______._'));
out.push(p('**Listener task:** count how many prepared answers include a dated *X states that Y* form. ⚠ Then ask which of the four the speaker would be frightened to say out loud, and why.'));
out.push(p('**Board clinic:** your teacher writes three answers on the board — look for *I would rather not say*, and a *Y approved it* offered as the writable form. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE GAUGE PARAGRAPH — THE NOTE AFTER THE CONVERSATION. 4 February. N. Mansour. For the file, and copied to Mr Attar.**',
  '**What was asked.** ⚠ **Mr Attar asked on the 3rd who had approved the second consignment, and who had not checked the gauge.**',
  '**What I said.** ⚠ **The name, and that there is nothing written, and that I would write *Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January* if asked to, but not *Mr Ayoub approved it*.**',
  '**What I did not say.** ⚠ **Nothing. I was not asked anything I did not answer, and I did not say *I would rather not say at this stage*, which was my first instinct and would have ended the conversation.**',
  '**What I was given.** ⚠ **The release form has never had a line for a gauge check. Mr Attar asked for one in 2019 and was told it would slow the gate.** ⚠ **So the missing record is not a man\'s failure and never was; it is a form, and the request for the line is nine years old and in nobody\'s writing.**',
  table(['', 'Before the conversation', 'After it'], [
    ['**what the fault was**', 'a gauge check that is not recorded', '⚠ **a form with no line on it since 2019**'],
    ['**whose it was**', '⚠ **nobody\'s, and read as the night man\'s**', '⚠ **the form\'s, and the 2019 refusal\'s**'],
    ['**the remedy**', 'ask somebody to check gauges', '⚠ **a line on the form, and Mr Attar\'s name on the request**'],
    ['**what it cost to find**', '—', '⚠ **one direct question, answered at the volume it was asked**'],
  ], [1.8, 2.1, 2.1]),
  '⚠ **The sentence I keep coming back to is Mr Attar\'s.** *Nobody did, because nobody ever wrote the absence down.* ⚠ **A thing that is missing leaves no record of being missing**, and that is why it stays missing for nine years in a building full of people who write things down.',
  '⚠ **And the nameless paragraph did what a named one could not.** **If I had written *the night man did not check the gauge*, Mr Attar would have agreed with me and the form would still have no line on it.** ⚠ **A fault with a name in it stops being investigated the moment the name is read.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the writer not say, and what was her first instinct?'));
out.push(item('2', 'What did she learn, and how old is the request?'));
out.push(item('3', 'What would have happened if the paragraph had named the night man?'));
out.push(box('Writer\'s box', [
  '**The note after the conversation — four parts:** **what was asked** → **what you said** → ⚠ **what you did not say, and your first instinct** → ⚠ **what you were given, which is the reason to write the note at all.**',
  '⚠ **Write the note the same day, and copy it to the person who asked.** **A conversation that produced a nine-year-old fact and lives in nobody\'s writing is the fault the conversation found.**',
  '⚠ **Record your first instinct and that you did not follow it.** ⚠ *I did not say *I would rather not say at this stage*, which was my first instinct and would have ended the conversation.* **It is the most useful sentence in the note for whoever reads it next year.**',
  '⚠ **Put the before-and-after table in.** **What the fault was · whose it was · the remedy · what it cost to find.** ⚠ **The fourth row is the one that justifies the method: one direct question, answered at the volume it was asked.**',
  '⚠ **Name the general law you have just met.** ⚠ *A thing that is missing leaves no record of being missing.* **That is why it survives nine years in a building full of people who write things down.**',
  '⚠ **And say what the named version would have cost.** ⚠ **A fault with a name in it stops being investigated the moment the name is read** — **he would have agreed with you, and the form would still have no line on it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note after a conversation in which somebody asked you *who?* (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE NOTE AFTER THE CONVERSATION. ______________. For the file, and copied to ______________.**   **What was asked.** ⚠ **______________ asked on ______________ who ______________.**   **What I said.** ⚠ **______________, and that ______________, and that I would write ______________ if asked to, but not ______________.**   **What I did not say.** ⚠ **______________, which was my first instinct and would have ______________.**   **What I was given.** ⚠ **______________.** ⚠ **So ______________ is not ______________ and never was; it is ______________.**   **what the fault was** | ______________ | ⚠ **______________**   **whose it was** | ⚠ **______________** | ⚠ **______________**   **the remedy** | ______________ | ⚠ **______________**   **what it cost to find** | — | ⚠ **______________**   ⚠ **The sentence I keep coming back to is ______________.** ⚠ **______________.**   ⚠ **And the nameless version did what a named one could not.** **If I had written ______________, ______________ would have agreed with me and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What was asked, with its date', ''],
  ['Your first instinct, recorded and not followed', ''],
  ['What you were given, which is why the note exists', ''],
  ['A before-and-after table with a *what it cost to find* row', ''],
  ['What the named version would have cost', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what I was given*. ⚠ The class says how long that fact had existed in nobody\'s writing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were asked a direct question about something you had written (**200 to 240 words**). Say what was asked, what you answered, what you nearly said instead, and what the answer got you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what did answering properly get them?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the full answer produce a fact the writer did not have? Usually two of three — ⚠ **and in at least one the retreat was taken, and nothing came back at all.**'));
out.push(box('Homework', ['Write your final text. Then take one nameless statement you have written, prepare the four moves, and write the dated *X states that Y* form you would use if asked (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review & Mediate: the sentence that cost somebody a reputation'));
out.push(p('**Function:** explaining to somebody what a sentence of yours did to them   ·   **Review:** the two passives · three distances · nominalisation · name or no name · hedged agency · restoring the actor'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the two questions you ask of every passive?',
  '**2** What are the three distances, and what is the test for the bare form?',
  '**3** What does a verb have inside it that a noun does not — and what does a noun let you do?',
  '**4** What decides whether a fault is written with a name in it?',
  '**5** What is the difference between *was not approved* and *is not recorded as approved*?',
  '**6** Why does leaving a name out of a page get a fault investigated when putting one in does not?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say he did about it?   **A** complained to Mr Ayoub   **B** nothing, for three weeks   **C** asked Nour straight away'));
out.push(p('**b**  Listen again. **1** How did he hear? **2** What does he say the worst part was?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  "I heard it from a driver"', [
  ['Nour', 'Abu Yasser, I wrote a sentence in January that I need to tell you about.'],
  ['Abu Yasser', 'The nine cartons.'],
  ['Nour', '…You know.'],
  ['Abu Yasser', '⚠ **I have known for three weeks.** ⚠ **I heard it from Jaber\'s driver, who had it from somebody in the office.** *Nine cartons were found damp in the fourth store.* **In my store.**'],
  ['Nour', 'It does not say your name.'],
  ['Abu Yasser', '⚠ **It does not need to.** ⚠ **There is one man who racks that store and everybody knows which one.** **A sentence with no name in it about a place with one man in it is a sentence with his name in it.**'],
  ['Nour', 'And you said nothing for three weeks.'],
  ['Abu Yasser', '⚠ **Who do I say it to?** The page is yours and I am not in it. ⚠ **There is nothing to answer.** **If it had said *Abu Yasser left nine cartons under a leak*, I would have been at your desk the same morning with the store book.**'],
  ['Nour', 'That is the part I had not understood.'],
  ['Abu Yasser', '⚠ **A sentence with a name in it can be argued with. A sentence with a hole in it cannot.** ⚠ **The worst part is not being blamed. It is being blamed by a page you cannot reply to.**'],
  ['Nour', 'I found them myself. On the eighth and again on the eleventh. And the store has been overflow since June because I arranged it, and the roof above that corner has never been on anybody\'s inspection list, and that list is mine.'],
  ['Abu Yasser', '⚠ **Then write that, and send it to the people who read the first one.**'],
  ['Nour', 'It is four sentences longer.'],
  ['Abu Yasser', '⚠ **It is three weeks late.** ⚠ **Four sentences is nothing.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – telling somebody what your sentence did**',
  table(['To open it', 'To hear the answer', 'To put it right'], [
    ['⚠ *I wrote a sentence in January that I need to tell you about.*', '⚠ *How did you hear?*', '⚠ *I found them myself, on the 8th and the 11th.*'],
    ['**not** *I think there may have been a misunderstanding*', '⚠ *Who would you have said it to?*', '*the store has been overflow since June because I arranged it*'],
    ['⚠ **name the sentence, not the feeling**', '⚠ *what was the worst part?*', '⚠ *and the list the roof is not on is mine*'],
  ], [2.1, 1.7, 2.2]),
  '⚠ **A sentence with no name in it, about a place with one man in it, is a sentence with his name in it.** **The agentless passive protects nobody who can be identified by the circumstances** — **and in a small firm almost everybody can.**',
  '⚠ **A sentence with a name in it can be argued with; a sentence with a hole in it cannot.** ⚠ *Who do I say it to? The page is yours and I am not in it.* **This is the cost the writer never sees, and it is the opposite of the one the writer was avoiding.**',
  '⚠ **The worst part is not being blamed. It is being blamed by a page you cannot reply to.** **Ask what the worst part was and then stop talking.**',
  '⚠ **Put the correction where the first version went.** ⚠ *Send it to the people who read the first one.* **A correction that goes only to the person wronged is an apology, not a correction.**',
  '⚠ **And do not price the remedy in words.** ⚠ *It is four sentences longer* — *it is three weeks late.* **The arithmetic that matters is not the length of the fix.**',
  '**Practise:** Tell somebody what a sentence of yours did. Name the sentence, ask how they heard, ask what the worst part was, and say what you will send and to whom.',
  '**Useful phrases:**  a sentence I need to tell you about  ·  how did you hear?  ·  who would you have said it to?  ·  a page you cannot reply to  ·  to the people who read the first one',
  '**Pronunciation – saying your own sentence back to the person it hit.** 🔊 **Track 2.14** Listen to a writer read her own sentence aloud to its subject. ⚠ **It is read flat, as a quotation, with no apology inside it.** **An apologetic reading makes the other person reassure you, and then nothing is put right.** **Read a sentence of your own aloud flat, four times.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written something that landed on B. A opens it, B answers. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A names the sentence, flat, and asks how B heard.** **B heard from somebody outside the office, three weeks ago, and said nothing because there was nothing to answer.** ⚠ **A then gives the four facts that belong in it: who found it, when, whose arrangement, and whose list.**',
  'B is identified by circumstance and not by name — ⚠ **one man racks that store, one driver does that run, one person opens the post.** **B\'s job is to explain why no name is worse**, and to say the sentence that would have brought B to A\'s desk the same morning. ⚠ **Then B asks the question A is dreading: who else has read it?**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence as published and as it should have read. ⚠ Then write how the subject heard, and how long they said nothing.'));
out.push(PHRASE_CARD(['a sentence I need to tell you about', 'how did you hear?', 'who would you have said it to?', 'a page you cannot reply to', 'to the people who read the first one']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a short report with three agentless passives in it. Read it silently. Then explain it to **two** people: the person it will be read as being about, and the person who will act on it.'));
out.push(table(['Who I told', 'What they thought it said about them', 'What the sentence actually was', 'What I will send instead'], [['', '', '', ''], ['', '', '', '']], [1, 1.5, 1.5, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the report. This is the **second** unit of this book, and the unwritten thing is this: ⚠ **the agentless passive is written to avoid accusing anybody and it accuses the person nearest the thing, who cannot reply to it, who hears about it from somebody outside the building, and who says nothing — so the writer never learns that the sentence landed at all, and writes the next one the same way.**'));
out.push(p('_The sentence said ______. It was read as being about ______, who heard from ______. What it should have said is ______, and I am sending it to ______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _an agentless passive · a nominalisation · a culprit · a finding · an institutional voice · a named individual_. ⚠ Twelve items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a nameless sentence about a one-man place, and an apology sent to the subject and not to the readers. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 5)', 10));
out.push(p('⚠ **This unit is Part 5: error correction.** In some lines there is **one extra word which is grammatically wrong**. Some lines are correct. ⚠ **For a correct line, write CORRECT. For an incorrect line, write the extra word.** **Write your answers in CAPITAL LETTERS.**'));
out.push(box(null, [
  '**TO: MR ATTAR.  FROM: N. MANSOUR.  THE RELEASE FORM AND THE GAUGE.  5 FEBRUARY.**',
  '**1**  Thank you for your note of the 3rd. I have looked at the release form',
  '**2**  and can confirm that there is no line on it for to a gauge check.',
  '**3**  The form was last revised in 2019, and a request for such a line was',
  '**4**  made at that time but it was been refused on the grounds that a',
  '**5**  further entry would slow the gate. I have attached a copy of the form.',
  '**6**  Eleven sheets at the wrong gauge were packed before anybody noticed',
  '**7**  the error, and those eleven have since gone them to Beirut for export.',
  '**8**  I cannot say whether they have been used. The packing list does not',
  '**9**  show which sheets went into which carton, so there is no way of',
  '**10** knowing without that opening the cartons at the other end. I propose',
  '**11** two changes, both of which I would be grateful if you could to approve',
  '**12** before the month end: a line on the form, and a printed code sheet.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, proposal or piece of correspondence, 120 to 140 words, 20 marks.** ⚠ **Twice the marks of Part 1 and three times the words.** **A rubric gives the situation, the reader and three or four things the writing must do.**',
  '⚠ **This unit\'s genre is the report: an impersonal account that still assigns accountability.** **The two are not opposites.** ⚠ **A report has no *I think* in it and it still says who did what** — *the gauge was not checked; the release form has had no line for one since 2019.*',
  '**The shape that fits 120–140 words:** ⚠ **a title · what happened, dated · what made it possible · what is recommended, and who must do it.** **Four short paragraphs or three with a heading each.**',
  '⚠ **And three facts about Part 5, because learners lose marks on all three.** ⚠ **A correct line is answered CORRECT, not left blank** — blanks lose the marks for the lines that were right. ⚠ **The extra word must be grammatically wrong, not merely unnecessary** — learners hunt for flabby words and the task is hunting for ungrammatical ones. **And the answers go in capital letters.**',
  '⚠ **Part 5 is the one examination task in four levels that is also a working habit.** **It is reading your own prose for a word that should not be there**, which is what stage 6P has asked you to do for somebody else since Unit 1.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A fault was found at your workplace that nobody caused. Write a **report** for your manager (**120 to 140 words**). Say **what happened and when**, **what made it possible**, **what it has cost**, and **what you recommend and who must act**.'));
out.push(p('**REPORT: ______________.** **______________, ______________.**   **What happened.** ______________ on ______________. ______________.   **What made it possible.** ______________. ______________ since ______________.   **What it has cost.** ______________.   **Recommendation.** ______________. ⚠ **______________ must ______________, and I have ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No *I think* — and still says who did what', ''],
  ['What happened, dated', ''],
  ['What made it possible, not who to blame', ''],
  ['A recommendation with a person attached to it', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence that landed on you (**200 to 240 words**). Say what it said, who wrote it, how you heard, whether you could reply to it, what you did, and what you wish it had said.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take the last report you wrote, find the sentence that would be read as being about one person, and send the version with the facts in it to everybody who read the first one (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Nine cartons ___ to be damp.   a) were found   b) were find   c) finding',
  '2  The limit ___ by Mr Ayoub in 2019.   a) was set   b) set   c) was setting',
  '3  It is not ___ as approved.   a) record   b) recording   c) recorded',
  '4  The consignment ___ to have been approved verbally.   a) appears   b) appear   c) appearing',
  '5  We did not sign ___ 9 April, and the cartons waited in the yard.   a) since   b) until   c) from',
  '6  The delay ___ us nine days of yard space.   a) was costing   b) costed   c) cost',
  '7  He has been apologising ___ ten months.   a) since   b) for   c) during',
  '8  A description that identifies one person is a name with the protection ___.   a) take off   b) taken off   c) taking off',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 2.15** Listen to a conversation about a sentence in a report. Complete the note.   The sentence: ______   Who it was read as being about: ______   How they heard: ______   How long they said nothing: ______   Why they said nothing: ______   What the writer is sending, and to whom: ______'));
out.push(p('**C  Reading.** Read the four versions of the nine cartons at 2.2 again. Why is version 2 worse than version 3, and what is the one clause in version 4 that the writer says was hard to write?'));
out.push(p('**D  Writing.** Take one sentence with no actor in it and write it three ways: with the actor at the front, with the actor in the middle form, and with no actor and a remedy in it. Then say which you would send and why (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Nour', 'The sentence was *nine cartons in the fourth store were found to be damp*. There is no name in it.'],
  ['Hala', 'And Abu Yasser read it as being about him.'],
  ['Nour', '⚠ **Everybody read it as being about him.** ⚠ **One man racks that store.** A sentence with no name in it about a place with one man in it is a sentence with his name in it.'],
  ['Hala', 'How did he hear? It went to Mr Ayoub and to Mr Attar.'],
  ['Nour', '⚠ **From Jaber\'s driver, who had it from somebody in the office.** ⚠ **Three weeks ago.**'],
  ['Hala', 'And he has said nothing for three weeks.'],
  ['Nour', '⚠ **Because there was nothing to answer.** **He is not in the sentence, so he could not reply to it.** ⚠ **He told me that if it had said *Abu Yasser left nine cartons under a leak* he would have been at my desk the same morning with the store book.**'],
  ['Hala', 'So what are you sending?'],
  ['Nour', '⚠ **The version with the facts in it: that I found them myself on the 8th and the 11th, that the store has been overflow since June because I arranged it, and that the roof above that corner is not on any inspection list, and the list is mine.**'],
  ['Hala', 'To him?'],
  ['Nour', '⚠ **To everybody who read the first one.** **Sending it only to him would be an apology, and an apology is not a correction.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**2.1** ask *by whom?* of a passive, and say whether the space is empty or vacated',
  '**2.2** place an actor at one of three distances, on purpose',
  '**2.3** find the verb under a noun, and keep the nouns that earn their place',
  '**2.4** write a fault with a name in it, and one without, and give the reason for each',
  '**2.5** claim exactly what the file supports, with the gap in the same sentence',
  '**2.6** answer *who did this?* without retreating, and get back what you did not know',
  '**2.7** tell somebody what a sentence of yours did, and send the correction where the first one went',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 3 — **The Case Against a Decision Already Half-Taken**: the concession that costs you something, the other side put better than they put it, and the one figure that decides it._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
module.exports = out;
