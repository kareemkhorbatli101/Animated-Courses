// Proactive Business English B2 · Syria Edition · Book 2 · Unit 13 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'an obligation · the weight of a word · best endeavours · reasonable endeavours · a cure period · an obligation that falls on us · the party on whom it falls · a clause that obliges nobody · a mandatory clause · a permissive clause · to perform a clause · non-performance · a continuing breach · to be in breach · a notice provision · to serve notice · the address for notice · a deemed date of receipt · close of business · a clock that starts on a date · an acknowledgement within forty-eight hours · a quarterly forecast · an obligations register · a clause converted into an act · the owner of a clause · evidence that a clause was performed · a clause nobody can perform · an undertaking we cannot keep · to audit your own obligations · a clause in the other party\'s favour · an unperformed obligation · a dormant clause';
const COLLOC = 'to discharge an obligation · to fall due · to serve a notice · to start a clock · to sit under a clause · to perform to a standard · to weigh a word · to audit a register';
const BACK_AT_B2 = 'clause · discretion · a notice period';

out.push(h1('Unit 13  The Contract You Have to Live Inside'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**13.1**  read your own agreement for what it obliges, not for what it says',
  '**13.2**  weigh _shall_, _may_ and _will use best endeavours_, and find out which one you signed',
  '**13.3**  turn a clause into a thing somebody does on a date',
  '**13.4**  name the clause nobody here can perform, before the other side does',
  '**13.5**  read a notice provision for the clock it starts',
  '**13.6**  build the obligations register: clause → act → owner → evidence',
  '**13.7**  Review & Mediate: the clause we are already in breach of, and nobody has looked',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Twenty-two clauses, and eleven of them are somebody\'s job', [
  '⚠ **The agreement with Dallal Freres was signed on 3 July and commences on 1 August.** **Twelve months, 1,100 cartons a month give or take ten per cent, and the damages clause Nour argued against in January is gone** — ⚠ **replaced by clause 20, a cure period of fourteen days from written notice.** **Clause 19 is the one she lost: arbitration seated in Beirut, under Lebanese procedure, accepted as drafted on 26 June.**',
  '⚠ **Book 1 was about winning this argument. Book 2 is about living inside the document it produced** — **and every clause in it is now hers, including the two she drafted herself.**',
  '⚠ **There are twenty-two clauses. Eleven of them oblige somebody at Sham Trading to do something, on a date, that nobody is currently doing.** ⚠ **Nour\'s first pass through the agreement found six.** **She was reading it for what it says, which is what a reader does, and the other five obligations are not in what it says** — **they are in what it makes somebody do.**',
  '⚠ **Nobody at this company has ever read a contract this way.** **The agreement was negotiated by three people and will be performed by eleven, and nine of the eleven have not seen it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 13.1 =======================
out.push(pb());
out.push(h2('13.1  What it obliges, not what it says'));
out.push(p('**Function:** reading your own contract for what it obliges   ·   **Grammar:** _this clause obliges us to · this clause obliges nobody_   ·   **Pronunciation:** a clause read as a duty, not as a sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one agreement your work is inside. ⚠ Then say how many things in it somebody at your work has to do on a date, and whether you know.'));
out.push(p('**b**  Which obliges somebody? _the Company recognises the importance of accurate forecasting · the Company shall supply a forecast within ten days of each quarter end_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say Nour has been doing wrong?   **A** reading too slowly   **B** reading for what the agreement says instead of for what it makes somebody do   **C** reading the wrong agreement'));
out.push(p('**b**  Listen again. **1** How many clauses oblige Sham Trading, and how many did Nour find? **2** What is the test Mr Sayegh gives her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.1  "Twenty-two clauses, and how many are ours"', [
  ['Nour', 'I have been through it twice. Six clauses put something on us.'],
  ['Mr Sayegh', '⚠ **Eleven.**'],
  ['Nour', 'Then I have read it badly.'],
  ['Mr Sayegh', '⚠ **You have read it the way everybody reads a contract, which is for what it says.** ⚠ **A contract is not read for what it says. It is read for what it makes somebody do, and those are different documents on the same page.**'],
  ['Nour', 'Give me one I missed.'],
  ['Mr Sayegh', '⚠ **Clause 13.** *The Supplier will use best endeavours to maintain a buffer stock of two hundred cartons.*'],
  ['Nour', 'That is not an obligation, it is an intention. It says best endeavours.'],
  ['Mr Sayegh', '⚠ **It is an obligation with a standard attached, and the standard is nearly the heaviest one there is.** **We will come to that. What I want you to see now is why you did not count it.**'],
  ['Nour', 'Because it does not sound like a duty.'],
  ['Mr Sayegh', '⚠ **Because it has no date in it.** ⚠ **You counted the clauses with dates and missed the clauses with standards** — **and a standard runs every day, which is worse.**'],
  ['Nour', 'So what is the test?'],
  ['Mr Sayegh', '⚠ **Read each clause and ask one question: if nobody at this company did anything at all, would this clause be broken?** ⚠ **If the answer is yes, it is ours, and somebody has to do something.**'],
  ['Nour', 'And the clauses where the answer is no?'],
  ['Mr Sayegh', '⚠ **They are theirs, or they oblige nobody.** ⚠ **A clause that obliges nobody is worth finding too, because somebody negotiated it and believed they had got something.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reading a contract for what it obliges**',
  table(['', 'The reading that misses it', 'The reading that finds it'], [
    ['**the test**', '**what does this clause say?**', '⚠ **if nobody here did anything at all, would this clause be broken?** — **yes means it is ours**'],
    ['⚠ **a clause with a date**', '**counted** — *within ten days of each quarter end*', '⚠ **counted, and easy** — **a date is the visible kind of obligation**'],
    ['⚠ **a clause with a standard**', '**missed** — *will use best endeavours to maintain*', '⚠ **counted, and the dangerous kind** — **a standard has no date because it runs every day**'],
    ['⚠ **a clause that obliges nobody**', '**read and forgotten**', '⚠ **named as obliging nobody** — **because somebody negotiated it believing they had got something**'],
  ], [1.8, 3, 3.6]),
  '⚠ **A contract read for what it says and a contract read for what it makes somebody do are two different documents on the same page.** ⚠ **The first is the one everybody reads. The second is the one that gets performed or does not.**',
  '⚠ **The test is one question and it takes an hour for a thirty-page agreement:** ⚠ *if nobody at this company did anything at all, would this clause be broken?* **Yes means the clause is ours and somebody has to do something about it.**',
  '⚠ **Clauses with dates get counted and clauses with standards get missed.** ⚠ **A date is a visible obligation; a standard runs every day and is invisible until the day somebody checks** — **which is why the clause you are most likely to be in breach of is the one with no date in it.**',
  '⚠ **And write down the clauses that oblige nobody.** ⚠ *The Company recognises the importance of accurate forecasting* **obliges nobody to do anything** — **and it is worth a line in your own notes, because somebody spent an afternoon negotiating it and believes it is a protection.**',
  '**Practise:** Take an agreement your work is inside. Apply the test to six clauses. Say which are yours, which are theirs, and which oblige nobody.',
  '**Useful phrases:**  if nobody did anything, would it be broken?  ·  that one is ours  ·  it has a standard, not a date  ·  that clause obliges nobody  ·  two documents on the same page',
  '**Pronunciation – a clause read as a duty.** 🔊 **Track 13.2** Listen twice. ⚠ **The first reads *the Supplier will use best endeavours to maintain a buffer stock of two hundred cartons* flat, as a sentence.** ⚠ **The second stresses *will* and *maintain*.** **Read flat, it is a description; stressed on the verbs, it is a duty somebody has.** Say it four times, stressing the verbs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a clause; B applies the test.'));
out.push(dlg(null, [
  ['A', 'Clause __________ says __________.'],
  ['B', '⚠ **If nobody here did anything at all, would it be broken?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is ours. Has it got a date or a standard?**'],
  ['A', '__________.'],
  ['B', '⚠ **A standard runs every day. Who is doing it now?**'],
  ['A', '__________.'],
  ['B', '⚠ **And the next clause?**'],
  ['A', 'That one says the Company recognises the importance of __________.'],
  ['B', '⚠ **That clause obliges nobody. Write it down anyway.**'],
]));
out.push(table(['Role card 1 — the clause with no date', 'Role card 2 — the clause that obliges nobody'], [[
  '⚠ **A reads clause 13 — best endeavours to maintain a buffer of two hundred cartons — and calls it an intention.** ⚠ **B applies the test: if nobody did anything, the buffer would not be maintained, so the clause is ours.** ⚠ **B then makes the point that A has counted dates and missed standards** — **and asks when anybody last counted the buffer.**',
  '⚠ **A reads a clause beginning *the parties recognise* and treats it as a protection won in negotiation.** ⚠ **B asks what anybody has to do under it, and the answer is nothing.** ⚠ **B\'s point: it still goes in the notes, because somebody negotiated it and will rely on it** — **and the moment to find that out is now, not in a dispute.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the test in one sentence. ⚠ Then say which of the two clauses in the exchange had no date, and why that makes it more dangerous and not less.'));
out.push(PHRASE_CARD(['would it be broken?', 'that one is ours', 'a standard, not a date', 'obliges nobody', 'who is doing it now?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** clauses from an agreement your work is inside. Apply the test to each.'));
out.push(table(['Clause', 'What it says', 'Ours / theirs / nobody\'s', 'Date or standard?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 3.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I read _______ clauses. _______ of them are ours. _______ have dates and _______ have standards. And _______ obliges nobody, which somebody negotiated._'));
out.push(p('**Listener task:** count how many people found more obligations on the second reading than the first. ⚠ Then ask how many of the extra ones had standards rather than dates, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes four clauses on the board — look for the one with a standard and no date, and the one that obliges nobody. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL AGREEMENT: WHAT IT PUTS ON US. 8 July. N. Mansour. Note 1 of 3.**',
  '⚠ **Twenty-two clauses. Eleven oblige this company to do something. Four oblige Dallal Freres. Seven oblige nobody.**',
  table(['Cl.', 'What it requires of us', 'Date or standard'], [
    ['**4**', '**supply 1,100 cartons a month, plus or minus ten per cent**', '⚠ **a standard, monthly** — **and the tolerance is the clause, not a courtesy**'],
    ['**6**', '**a quarterly forecast, within ten days of each quarter end**', '**a date, four times a year**'],
    ['**9**', '**acknowledge a complaint within forty-eight hours of receipt**', '⚠ **a date that starts when something arrives** — **see note 3**'],
    ['**13**', '**best endeavours to maintain a buffer stock of 200 cartons**', '⚠ **a standard, every day** — **and nobody has counted it since the agreement was signed**'],
    ['**17**', '**serve any notice in writing to the address in schedule 1**', '**a standard, whenever we write**'],
    ['**20**', '**remedy a notified breach within fourteen days**', '⚠ **a date that starts on a deemed receipt** — **see note 3**'],
  ], [0.5, 4.6, 3.9]),
  '⚠ **The seven that oblige nobody are listed at the foot of note 2, and I have listed them on purpose.** **Three of them were negotiated in May and two of those were ours.** ⚠ **Somebody here believes we obtained something in clause 11 and we did not.**',
  '⚠ **What this note does not do is say who performs any of it.** **That is note 2, and it is the register.** ⚠ **This note answers one question only** — *what does the agreement require of this company* — **and it answers it in eleven lines because a list of eleven things can be checked by somebody who has never read the agreement.**',
  '⚠ **One caution about my own first reading, which found six.** **I counted the clauses with dates in them.** ⚠ **Five of the eleven have no date and are obligations all the same, and four of those five are the ones we are most likely to be failing right now** — **because a clause with no date has no day on which anybody notices.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many clauses oblige this company, how many oblige Dallal Freres, and how many oblige nobody?'));
out.push(item('2', 'Why does the writer list the clauses that oblige nobody?'));
out.push(item('3', 'Why does she say her first reading found only six?'));
out.push(box('Writer\'s box', [
  '**The obligations note — four parts:** ⚠ **a count in the first line** → **a table of *clause · what it requires of us · date or standard*** → ⚠ **the clauses that oblige nobody, listed** → ⚠ **and a sentence saying what the note does not do.**',
  '⚠ **Put the count in the first line and make it add up.** ⚠ **Eleven, four and seven is twenty-two** — **and a reader who can add the three numbers to the number of clauses knows the writer has been through all of them.**',
  '⚠ **Write *what it requires of us* and not *what the clause says*.** **A clause says *the Supplier will use best endeavours to maintain a buffer stock*; what it requires of us is *keep two hundred cartons on the floor*.** ⚠ **The second can be checked by somebody holding a clipboard and the first cannot.**',
  '⚠ **Mark every row *date* or *standard*, and say how often.** ⚠ **A standard runs every day and is the kind you are already failing** — **so the column earns its width by making the dangerous rows look different from the safe ones.**',
  '⚠ **List the clauses that oblige nobody and say who negotiated them.** ⚠ **Somebody believes they obtained something; the cheapest moment to correct that belief is before the thing is needed.**',
  '⚠ **And say what the note does not do.** ⚠ *This note does not say who performs any of it.* **A note that answers one question in eleven lines is usable by somebody who has not read the agreement** — **and a note that tries to answer three is read by nobody.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the obligations note for an agreement your work is inside (**80 words or more**). Use the frame.'));
out.push(p('**______________: WHAT IT PUTS ON US. ______________. ______________. Note 1 of ______________.**   ⚠ **______________ clauses. ______________ oblige this company. ______________ oblige ______________. ______________ oblige nobody.**   **Cl.** | **What it requires of us** | **Date or standard**   **______________** | **______________** | ⚠ **______________**   **______________** | **______________** | ⚠ **______________**   **______________** | **______________** | ⚠ **______________**   ⚠ **The clauses that oblige nobody are ______________, and ______________ of them were negotiated by ______________.**   ⚠ **What this note does not do is ______________.** ⚠ **It answers one question: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count in the first line, and it adds up to the number of clauses', ''],
  ['*What it requires of us*, not what the clause says', ''],
  ['Every row marked date or standard, with how often', ''],
  ['The clauses that oblige nobody, listed', ''],
  ['A sentence saying what the note does not do', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first line. ⚠ The class adds the three numbers and checks them against the number of clauses.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an agreement your work is inside (**200 to 240 words**). Say how many clauses oblige your side, which ones have standards rather than dates, which oblige nobody, and which one you think is not being performed today.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _date or standard?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer name a clause nobody is performing? Usually all three — ⚠ **and in two of three it is a clause with a standard and no date, which is the finding of this cycle arriving on its own.**'));
out.push(box('Homework', ['Write your final text. Then take one agreement your work is inside and apply the test to every clause in it, and count the three numbers (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.2 =======================
out.push(pb());
out.push(h2('13.2  Shall, may, and best endeavours'));
out.push(p('**Function:** weighing the three obligations   ·   **Grammar:** _shall · may · will use best endeavours · will use reasonable endeavours_   ·   **Pronunciation:** three weights, read at three weights'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a promise you have made at work in writing. ⚠ Then say whether you promised to do it, to try to do it, or to be allowed to do it.'));
out.push(p('**b**  Which is heaviest? _the Supplier may hold a buffer stock · the Supplier shall hold a buffer stock · the Supplier will use best endeavours to hold a buffer stock_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about _best endeavours_?   **A** it is a soft promise   **B** it is nearly as heavy as _shall_, and it can oblige you to act against your own interest   **C** it means nothing in Syria'));
out.push(p('**b**  Listen again. **1** Which word did Nour choose, and which did she think she was choosing? **2** What is the one thing _best endeavours_ does not require?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.3  "I thought I was softening it"', [
  ['Nour', 'Clause 13 was mine. Their draft said *shall maintain* and I changed it to *will use best endeavours to maintain*.'],
  ['Mr Sayegh', '⚠ **Why?**'],
  ['Nour', 'Because we cannot always hold two hundred cartons and I wanted room.'],
  ['Mr Sayegh', '⚠ **You wanted *reasonable endeavours*.** ⚠ **What you wrote is nearly as heavy as *shall*.**'],
  ['Nour', 'Best endeavours is weaker than shall. It has the word endeavours in it.'],
  ['Mr Sayegh', '⚠ **Best endeavours means everything a prudent and determined person would do, in your position, wanting to achieve it** — ⚠ **including things that cost you money and things against your own commercial interest.** **It does not require you to ruin yourself. That is the only limit.**'],
  ['Nour', 'And reasonable endeavours?'],
  ['Mr Sayegh', '⚠ **One reasonable course, and you may stop if it becomes commercially unreasonable.** ⚠ **The distance between the two words is the distance between hiring a van at any price and asking your usual man whether he has one.**'],
  ['Nour', 'So I made it harder by trying to make it softer.'],
  ['Mr Sayegh', '⚠ **You made it harder and less visible at the same time, which is the worse of the two.** ⚠ *Shall maintain* **would have gone straight into somebody\'s job.** ⚠ *Best endeavours* **reads like an aspiration, so nobody has been given it** — **and the obligation is running anyway.**'],
  ['Nour', 'What should it have said?'],
  ['Mr Sayegh', '⚠ **_Will use reasonable endeavours to maintain a buffer stock of two hundred cartons, and shall notify the Buyer within three business days if the buffer falls below one hundred._** ⚠ **A soft standard with a hard date attached to the failure.** ⚠ **That is the shape you wanted: room to fail, and an obligation to say so.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The three weights, and what each one costs**',
  table(['Wording', 'What it requires', 'When to use it'], [
    ['⚠ **_shall_**', '⚠ **do it** — **no excuse but impossibility**', '**when you can do it and want it visible** — **a *shall* goes straight into somebody\'s job**'],
    ['⚠ **_will use best endeavours_**', '⚠ **everything a prudent and determined person wanting to achieve it would do** — **including things that cost money and things against your own interest**', '⚠ **almost never, by choice** — **it is nearly *shall* and it does not look like it**'],
    ['⚠ **_will use reasonable endeavours_**', '⚠ **one reasonable course, and you may stop when it becomes commercially unreasonable**', '⚠ **when you need room** — **this is the word people mean when they write *best***'],
    ['⚠ **_may_**', '⚠ **a discretion** — **you are permitted and not required**', '**when you want the freedom and not the duty** — **and check whose discretion it is**'],
  ], [2.2, 4, 2.9]),
  '⚠ **_Best endeavours_ is the trap, and it is a trap because of the English and not because of the law.** ⚠ **The word *endeavours* sounds like trying, and the word *best* sounds like a compliment** — **and the two together are nearly as heavy as *shall*.**',
  '⚠ **The distance between the two endeavours is a practical one:** ⚠ **best endeavours is hiring a van at any price you can survive; reasonable endeavours is asking your usual man whether he has one.** **Put it that way to anybody who thinks the difference is a matter of degree.**',
  '⚠ **A heavy obligation that does not look heavy is worse than a heavy obligation that does.** ⚠ *Shall maintain* **gets given to somebody.** ⚠ *Best endeavours to maintain* **reads like an aspiration, so nobody is given it** — **and the obligation runs all the same.**',
  '⚠ **The shape you usually want is a soft standard with a hard date on the failure:** ⚠ *reasonable endeavours to maintain two hundred, and shall notify within three business days if it falls below one hundred.* **Room to fail, and a duty to say so** — **and the duty to say so is the one that keeps the relationship.**',
  '⚠ **And check whose discretion a _may_ is.** ⚠ *The Buyer may inspect* **is not** *the Supplier may decline inspection* — **and a reader skimming for duties will not notice that the permissive clause is on the other side.**',
  '**Practise:** Take three promises in a document of yours. Say which weight each one carries, and rewrite one as a soft standard with a hard date on the failure.',
  '**Useful phrases:**  that is nearly shall  ·  you wanted reasonable  ·  a soft standard with a hard date  ·  whose discretion is it?  ·  room to fail, and a duty to say so',
  '**Pronunciation – three weights.** 🔊 **Track 13.4** Listen twice. ⚠ **The first reads *shall maintain*, *best endeavours to maintain* and *may maintain* at the same weight.** ⚠ **The second leans hardest on *shall*, nearly as hard on *best*, and lightly on *may*.** **Read flat, the three sound like three styles; read at three weights, they sound like three different promises.** Say each four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a softening; B weighs it.'));
out.push(dlg(null, [
  ['A', 'Their draft says the Supplier shall __________. I want to soften it.'],
  ['B', '⚠ **To what?**'],
  ['A', 'Will use best endeavours to __________.'],
  ['B', '⚠ **That is nearly *shall*, and it does not look like it. What did you mean?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then you wanted *reasonable endeavours*. And what happens if you fail?**'],
  ['A', '__________.'],
  ['B', '⚠ **Put a hard date on the failure. Notify within how long?**'],
  ['A', '__________ business days.'],
  ['B', '⚠ **Now it is the shape you wanted: room to fail, and a duty to say so.**'],
]));
out.push(table(['Role card 1 — the softening that hardened', 'Role card 2 — the discretion on the other side'], [[
  '⚠ **A wants to soften *shall maintain* and proposes *best endeavours*, confident it is lighter.** ⚠ **B gives the definition — everything a prudent and determined person wanting to achieve it would do, including against their own interest — and the van comparison.** ⚠ **B then makes the second point, which is the worse one: a heavy obligation that reads as an aspiration never gets given to anybody.**',
  '⚠ **A reads *the Buyer may inspect any consignment on three days\' notice* and calls it permissive, so harmless.** ⚠ **B asks whose permission it is.** ⚠ **It is the Buyer\'s discretion, not ours — so the clause obliges us to be inspectable on three days\' notice, which is a standard with a date hidden inside a *may*.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four weights in order. ⚠ Then write the sentence in the shape B asked for, and say which half of it is the soft part.'));
out.push(PHRASE_CARD(['that is nearly shall', 'you wanted reasonable', 'a hard date on the failure', 'whose discretion?', 'room to fail']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** promises from documents of yours. Weigh each, and rewrite one.'));
out.push(table(['The promise, as written', 'Its weight', 'What you meant', 'Rewritten: soft standard + hard date'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 1, 1.6, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote _______. Its weight is _______. What I meant was _______. It should say _______ and shall notify within _______ days if _______._'));
out.push(p('**Listener task:** count how many of the promises carried a heavier weight than the writer intended. ⚠ Then ask how many of those used the word _endeavours_, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes four promises on the board — look for a _best endeavours_ that was meant to be soft, and a _may_ that belongs to the other side. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 13: A NOTE ON WHAT I DRAFTED. 9 July. N. Mansour. For Mr Ayoub and Mr Sayegh.**',
  '⚠ **I drafted clause 13 and I drafted it wrong, and the error is in my favour nowhere.** **Their draft said *the Supplier shall maintain a buffer stock of two hundred cartons*. I changed it to *will use best endeavours to maintain*, intending to give us room.**',
  '⚠ **_Best endeavours_ requires everything a prudent and determined person in our position, wanting to achieve the result, would do — including steps that cost us money and steps against our own commercial interest.** **The only limit is that it does not require us to ruin ourselves.** ⚠ **It is nearly *shall*.**',
  '⚠ **What I wanted was _reasonable endeavours_**: **one reasonable course, abandonable when it becomes commercially unreasonable.** **The difference in practice is the difference between hiring a van at any price we can survive and asking Mr Jaber whether he has one.**',
  '⚠ **And there is a second cost, which I think is the larger one.** ⚠ **_Shall maintain_ would have gone into somebody\'s job on 1 August, because a *shall* with a figure in it is obviously a duty.** ⚠ **_Best endeavours_ reads as an aspiration, so nobody has been given it** — **and the obligation has been running since 1 August with no owner.**',
  '⚠ **What I recommend.** **Not reopening the clause: it is one of twenty-two, the agreement is four weeks old, and asking to weaken our own undertaking in week five is a request I would refuse if it came to me.** ⚠ **Instead: give clause 13 an owner this week, count the buffer weekly, and keep the count** — **because under *best endeavours* the evidence that we tried is the whole of the defence.**',
  '⚠ **One sentence I would be held to.** ⚠ *We will perform clause 13 as though it said shall, because it very nearly does, and we will keep the weekly count as the evidence that we did.*',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the writer change, what did she intend, and what did she get?'));
out.push(item('2', 'Which of the two costs does she say is the larger, and why?'));
out.push(item('3', 'Why does she recommend against reopening the clause?'));
out.push(box('Writer\'s box', [
  '**The note on your own error — five parts:** ⚠ **the error in the first line, with no cushion** → **what the wording actually requires** → **what you meant instead** → ⚠ **the second cost, which is usually the larger** → ⚠ **and a recommendation that is not *undo it*.**',
  '⚠ **Say it was yours in the first sentence.** ⚠ *I drafted clause 13 and I drafted it wrong.* **Eight words** — **and a reader who has to reach paragraph three to find out whose error it was has stopped reading the note and started reading the writer.**',
  '⚠ **Add *and the error is in my favour nowhere*.** **It answers the question a senior reader is already asking** — ⚠ **whether the mistake happens to suit the person reporting it** — **and answering it unasked is what buys the rest of the note.**',
  '⚠ **Give the practical difference and not the definition.** ⚠ **Hiring a van at any price we can survive against asking Mr Jaber whether he has one.** **A definition is argued with; a van is not.**',
  '⚠ **Name the second cost.** ⚠ **The wording is heavy AND invisible, so nobody was given the job** — **and an obligation with no owner has been running since the commencement date.** **That is worse than the weight, and most writers never get to it.**',
  '⚠ **And do not recommend undoing it.** ⚠ **Asking to weaken your own undertaking in week five is a request you would refuse yourself.** **Recommend the thing that works: an owner, a weekly count, and the count kept** — ⚠ **because under this standard the evidence that you tried is the whole of the defence.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note on a wording error of your own (**80 words or more**). Use the frame.'));
out.push(p('**______________: A NOTE ON WHAT I DRAFTED. ______________. ______________. For ______________.**   ⚠ **I drafted ______________ and I drafted it wrong, and the error is in my favour nowhere.** **Their draft said ______________. I changed it to ______________, intending to ______________.**   ⚠ **______________ requires ______________.** ⚠ **It is nearly ______________.**   ⚠ **What I wanted was ______________**: **______________.** **The difference in practice is the difference between ______________ and ______________.**   ⚠ **And there is a second cost, which I think is the larger one.** ⚠ **______________ would have gone into somebody\'s job, because ______________.** ⚠ **______________ reads as ______________, so nobody has been given it.**   ⚠ **What I recommend.** **Not ______________: ______________.** ⚠ **Instead: ______________.**   ⚠ **One sentence I would be held to.** ⚠ _______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The error, and whose it was, in the first sentence', ''],
  ['*And the error is in my favour nowhere*, or its equivalent', ''],
  ['The practical difference, not the definition', ''],
  ['The second cost — invisible as well as heavy — named', ''],
  ['A recommendation that is not *undo it*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first sentence. ⚠ The class says whether it names the error and the owner of it before the twelfth word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a wording you have used that carried more weight than you meant (**200 to 240 words**). Say what you wrote, what you thought it meant, what it required, who found out, and what you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what weight did it really carry?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did nobody find out? Usually two of three — ⚠ **and that is the point of the cycle: a wording that carries more than you meant is not discovered by being read, but by being enforced.**'));
out.push(box('Homework', ['Write your final text. Then take one promise your side has made in writing and decide which of the four weights it carries, and whether that is the one you wanted (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.3 =======================
out.push(pb());
out.push(h2('13.3  A clause as a thing somebody does on a date'));
out.push(p('**Function:** converting a clause into an act with an owner   ·   **Grammar:** _X prepares it by the 7th; Y sends it by the 10th_   ·   **Pronunciation:** a date read as a commitment'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your work has to do four times a year. ⚠ Then say whose diary it is in, and what happens in the week before.'));
out.push(p('**b**  Which can be done? _we will provide quarterly forecasts as required · Nadia prepares it by the 7th and Nour sends it by the 10th_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say is missing from the clause?   **A** a figure   **B** the three days before the date, and a name   **C** a signature'));
out.push(p('**b**  Listen again. **1** What are the four dates? **2** Why does Nadia want the 7th and not the 10th in her own diary?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.5  "Within ten days of each quarter end"', [
  ['Nour', 'Clause 6. A quarterly forecast, within ten days of each quarter end.'],
  ['Nadia', '⚠ **Then say the dates. All four of them.**'],
  ['Nour', '10 November, 10 February, 10 May, 10 August.'],
  ['Nadia', '⚠ **Good. Now whose are they?**'],
  ['Nour', 'Yours, I assumed. You have the figures.'],
  ['Nadia', '⚠ **I have the figures on the fifth working day, which is not the same thing as having a forecast on the tenth.** ⚠ **A forecast is the figures plus a view, and the view takes two days.**'],
  ['Nour', 'So you want the 7th.'],
  ['Nadia', '⚠ **I want the 7th in my diary and the 10th in yours.** ⚠ **Two entries, two names, and a gap between them that is three days wide** — **because the thing that fails is never the date, it is the day before the date.**'],
  ['Nour', 'And if the figures are late?'],
  ['Nadia', '⚠ **Then on the 7th you know, and you have three days to tell them rather than none.** ⚠ **That is the whole reason for two entries instead of one.**'],
  ['Nour', 'The clause does not say any of this.'],
  ['Nadia', '⚠ **A clause never does. A clause is a sentence in a drawer.** ⚠ **What makes it get done is a diary entry with a name on it, and the register is where the clause turns into one.**'],
  ['Nour', 'What goes in the register, then?'],
  ['Nadia', '⚠ **Clause 6. Act: prepare the quarterly forecast. Owner: me, by the 7th. Second act: send it. Owner: you, by the 10th. Evidence: the sent message, kept.** ⚠ **Four things, and the fourth is the one everybody leaves out** — **because an obligation you cannot prove you performed is one you did not perform, on the only day it matters.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Turning a clause into an act**',
  table(['The clause says', 'The act is', 'Why'], [
    ['⚠ *within ten days of each quarter end*', '⚠ **four dates, written out** — **10 November, 10 February, 10 May, 10 August**', '⚠ **a formula is not a date** — **nobody has ever missed a date they had written down**'],
    ['**(nothing about who)**', '⚠ **a name against each act**', '**a clause with no owner is performed by whoever happens to think of it**'],
    ['**(nothing about before)**', '⚠ **a second entry three days earlier, with a different name**', '⚠ **what fails is not the date, it is the day before the date**'],
    ['**(nothing about proof)**', '⚠ **evidence, named and kept** — **the sent message**', '⚠ **an obligation you cannot prove you performed is one you did not perform**'],
  ], [2.6, 3.2, 3.3]),
  '⚠ **A clause is a sentence in a drawer.** ⚠ **What makes it get done is a diary entry with a name on it** — **and the conversion from one to the other is the work of this unit.**',
  '⚠ **Write the dates out.** ⚠ *Within ten days of each quarter end* **is a formula, and a formula has to be computed by somebody who is already busy.** **Four dates cost eight words and are computed once, by you, now.**',
  '⚠ **Two entries, not one, and three days between them.** ⚠ **The 7th for the person who prepares and the 10th for the person who sends** — **because what fails is never the date itself but the day before it, and a single entry on the deadline leaves nobody any room.**',
  '⚠ **And the gap is not slack. It is information.** ⚠ **On the 7th you either have it or you know you do not** — **and three days is enough to tell the other side before the clause is breached instead of after.**',
  '⚠ **Name the evidence.** ⚠ **The sent message, kept** — **not *we sent it*.** **An obligation you cannot prove you performed is, on the one day it matters, an obligation you did not perform.**',
  '**Practise:** Take three dated clauses. Write out every date, give each an act and an owner, add an entry three days earlier, and name the evidence.',
  '**Useful phrases:**  say the dates, all four  ·  whose diary is it in?  ·  two entries, two names  ·  the day before the date  ·  evidence, named and kept',
  '**Pronunciation – a date as a commitment.** 🔊 **Track 13.6** Listen twice. ⚠ **The first says *Nadia prepares it by the 7th and Nour sends it by the 10th* with the names unstressed.** ⚠ **The second stresses both names.** **Unstressed, it is a procedure; stressed, it is two people who have each agreed to something.** Say it four times, stressing the names.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a dated clause; B converts it.'));
out.push(dlg(null, [
  ['A', 'The clause says within __________ of each __________.'],
  ['B', '⚠ **Say the dates. All of them.**'],
  ['A', '__________.'],
  ['B', '⚠ **Whose diary are they in?**'],
  ['A', '__________.'],
  ['B', '⚠ **And who does the thing three days before?**'],
  ['A', '__________.'],
  ['B', '⚠ **Two entries, two names. What is the evidence?**'],
  ['A', '__________.'],
  ['B', '⚠ **Named and kept, or it is not evidence.**'],
]));
out.push(table(['Role card 1 — the formula instead of the dates', 'Role card 2 — the single entry'], [[
  '⚠ **A reads the clause and repeats the formula: *within ten days of each quarter end*.** ⚠ **B refuses it and makes A say the four dates out loud.** ⚠ **B\'s point: a formula has to be computed by somebody who is already busy, on a day when they are busy** — **and four dates cost eight words and are computed once, now, by somebody who is not.**',
  '⚠ **A puts one entry in one diary, on the deadline, which feels sufficient.** ⚠ **B asks what happens if the figures are two days late.** ⚠ **With one entry on the 10th the answer is a breach; with an entry on the 7th it is a telephone call** — **and B makes A say which of those two the firm would rather be having.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four parts of a register row. ⚠ Then say why there are two entries and not one, in one sentence.'));
out.push(PHRASE_CARD(['say the dates', 'whose diary?', 'two entries, two names', 'the day before', 'named and kept']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** dated clauses from an agreement of yours. Convert each into acts.'));
out.push(table(['Clause', 'The dates, written out', 'Act and owner', 'Earlier entry', 'Evidence'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [0.8, 2.2, 2, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Clause _______ becomes _______ on _______, _______ and _______. _______ prepares by _______; _______ sends by _______. The evidence is _______._'));
out.push(p('**Listener task:** count how many people had written a formula where a date was needed. ⚠ Then ask how many had named the evidence, and expect it to be the part most often missing.'));
out.push(p('**Board clinic:** your teacher writes four register rows on the board — look for a row with no owner and a row with no evidence. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**CLAUSE 6: THE FORECAST, AS FOUR ACTS. 11 July. N. Mansour. Extract from note 2.**',
  '⚠ **Clause 6: *the Supplier shall provide a forecast of expected monthly volumes for the following quarter within ten days of each quarter end*.**',
  table(['', 'Act', 'Owner', 'By', 'Evidence'], [
    ['**1**', '**assemble the three months\' despatch figures**', '**N. Sayegh**', '**the 5th**', '**the despatch summary, filed**'],
    ['**2**', '⚠ **turn the figures into a forecast** — **a view, not a total**', '**N. Sayegh**', '⚠ **the 7th**', '**the draft forecast, dated**'],
    ['**3**', '**check it against the order book and send it**', '**N. Mansour**', '**the 10th**', '⚠ **the sent message, kept** — **not a note that it was sent**'],
    ['**4**', '⚠ **if the figures are not in hand on the 7th, tell Dallal Freres that the forecast will be late, and by how much**', '**N. Mansour**', '**the 7th**', '**the letter, kept**'],
  ], [0.4, 3.6, 1.3, 0.9, 2.4]),
  '⚠ **The four dates are 10 November, 10 February, 10 May and 10 August, and they are in two diaries.**',
  '⚠ **Act 4 is the one that is not in the clause.** **Clause 6 does not require us to warn them that a forecast will be late.** ⚠ **But a forecast three days late with a letter on the 7th is a courtesy, and a forecast three days late with nothing is a breach they discover themselves** — **and the difference costs one letter.**',
  '⚠ **Act 2 is where the clause is actually performed, and it is not on the deadline.** **The figures arrive on the fifth working day; a forecast is the figures plus a view and the view takes two days.** ⚠ **A register that put one entry on the 10th would be a register that recorded the clause and did not perform it.**',
  '⚠ **And the evidence column says *kept*, which is a word about a cupboard and not about a person.** ⚠ **Under clause 20 we would have fourteen days to remedy a notified breach, and the first thing anybody would ask for is the forecast we say we sent** — **so the sent message is the obligation and the note saying we sent it is not.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the four acts is not required by the clause, and why is it there?'));
out.push(item('2', 'Why is the clause performed on the 7th rather than on the 10th?'));
out.push(item('3', 'What is the difference between *the sent message, kept* and *a note that it was sent*?'));
out.push(box('Writer\'s box', [
  '**The register extract — five columns and one extra row:** ⚠ **number · act · owner · by · evidence** — ⚠ **and a row that the clause does not require.**',
  '⚠ **Write the act as a verb a person does.** ⚠ *Turn the figures into a forecast* **and not** *forecasting*. **A nominalisation in a register is an act with nobody inside it, which is exactly what the register exists to prevent.**',
  '⚠ **Put the real performance date in the register and not the deadline.** ⚠ **The clause says the 10th and the work happens on the 7th** — **and a register that records the deadline has recorded the clause without performing it.**',
  '⚠ **Add the row the clause does not require: the one where you tell them it will be late.** ⚠ **Late with a letter on the 7th is a courtesy; late with nothing is a breach they discover themselves** — **and the difference costs one letter and buys the relationship a year.**',
  '⚠ **Name the evidence as a thing, not as a fact.** ⚠ *The sent message, kept* — **not *we sent it*.** ⚠ **Under a cure period the first thing anybody asks for is the document you say you sent**, **and at that moment a note saying you sent it is a note about yourself.**',
  '⚠ **And write the dates out in a line under the table.** **Four dates, two diaries** — ⚠ **because the register is read by the owners and not only by the author, and an owner needs to find their own date without computing anybody else\'s.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one dated clause from an agreement of yours and write it as acts (**80 words or more**). Use the frame.'));
out.push(p('**______________: ______________, AS ______________ ACTS. ______________. ______________.**   ⚠ **Clause ______________: _______________.**   **Act** | **Owner** | **By** | **Evidence**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________**   ⚠ **The dates are ______________, and they are in ______________ diaries.**   ⚠ **Act ______________ is the one that is not in the clause.** **The clause does not require ______________.** ⚠ **But ______________ is a courtesy and ______________ is a breach they discover themselves** — **and the difference costs ______________.**   ⚠ **The evidence column says *kept*.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every act written as a verb a person does', ''],
  ['The real performance date, not only the deadline', ''],
  ['A row the clause does not require', ''],
  ['Evidence named as a thing, not as a fact', ''],
  ['The dates written out, and whose diaries they are in', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their evidence column. ⚠ The class says of each entry whether somebody could hand it over in an hour.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your work has to do on a date (**200 to 240 words**). Say what the obligation is, whose diary the date is in, what happens three days before, who does it when that person is away, and what the evidence is.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who does it when that person is away?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there a second person? Usually one of three — ⚠ **and in the other two the obligation is performed by one person with no entry before the date, which is the arrangement that holds until the first time they are ill.**'));
out.push(box('Homework', ['Write your final text. Then put one dated clause into two diaries, three days apart, with a name on each entry and the evidence named (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.4 =======================
out.push(pb());
out.push(h2('13.4  The clause nobody here can perform'));
out.push(p('**Function:** naming an undertaking you cannot keep, before the other side does   ·   **Grammar:** _as drafted we cannot perform this · what we can perform is_   ·   **Pronunciation:** an admission read as information'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing your work has promised in writing that it could not actually do. ⚠ Then say whether anybody told the other side, and when.'));
out.push(p('**b**  Which is the useful sentence? _we will do our best to acknowledge quickly · as drafted we cannot perform clause 9, and what we can perform is two business days_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why can clause 9 not be performed?   **A** nobody wants to   **B** *receipt* is undefined, there is one telephone at the counter, and forty-eight hours includes the weekend   **C** the agreement is unclear about complaints'));
out.push(p('**b**  Listen again. **1** What are the three separate problems? **2** What does Mr Ayoub say about telling them now rather than later?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.7  "One telephone, and forty-eight hours"', [
  ['Nour', 'Clause 9. We acknowledge a complaint within forty-eight hours of receipt. We cannot do it.'],
  ['Mr Ayoub', '⚠ **Why not? It is two days.**'],
  ['Nour', 'Three things, and they are separate. First, receipt by whom. A complaint can arrive at the Mezzeh counter, at the warehouse gate, or by letter to the office.'],
  ['Mr Ayoub', '⚠ **And the gate has no telephone of its own.**'],
  ['Nour', 'The gate has Abu Yasser, who has the counter telephone when he is at the counter, which is not often. Second: forty-eight hours is forty-eight hours. Thursday afternoon to Saturday afternoon is forty-eight hours and nobody is here.'],
  ['Mr Ayoub', '⚠ **So on a Thursday complaint we are in breach before anybody has opened a door.** **And the third?**'],
  ['Nour', 'Acknowledge means a document. Hala can say *we have it* on the telephone in a minute. Putting it in writing needs the complaint in front of somebody who can write.'],
  ['Mr Ayoub', '⚠ **Then we have an undertaking we cannot keep, in week two, on a clause nobody has broken yet.** ⚠ **What do you want to do?**'],
  ['Nour', 'Write to Mr Hamdan and say so.'],
  ['Mr Ayoub', '⚠ **Before anything has gone wrong.**'],
  ['Nour', 'Before anything has gone wrong is the only time it is information. ⚠ **After the first late acknowledgement it is an excuse, and it is the same sentence.**'],
  ['Mr Ayoub', '⚠ **Say that again, because that is the whole of it.**'],
  ['Nour', '⚠ **The same sentence is information today and an excuse in October.** ⚠ **Nothing about it will have changed except who says it first.**'],
  ['Mr Ayoub', '⚠ **Then write it today, and do not ask them to amend the agreement.** ⚠ **Ask them to agree what two words mean.** **That is a smaller thing and they can say yes to it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Naming a clause you cannot perform**',
  table(['', 'Not', 'Write'], [
    ['**the admission**', '⚠ *we will do our best to acknowledge quickly*', '⚠ *as drafted we cannot perform clause 9* — **and then what you can perform**'],
    ['⚠ **the reasons**', '**one reason**', '⚠ **each one separately** — **receipt is undefined · forty-eight hours spans the Friday and the Saturday · acknowledge means a document**'],
    ['⚠ **the timing**', '**after the first failure**', '⚠ **before anything has gone wrong** — **the same sentence is information today and an excuse in October**'],
    ['⚠ **the ask**', '**amend the agreement**', '⚠ **agree what two words mean** — **a smaller thing, which they can say yes to**'],
  ], [1.4, 3, 4]),
  '⚠ **Name the clause you cannot perform in the week you find out, and not in the week it fails.** ⚠ **The sentence does not change. The only thing that changes is whether you said it first** — **and that is the whole difference between information and an excuse.**',
  '⚠ **Separate the reasons and count them.** ⚠ **Three problems in clause 9: *receipt* is undefined, forty-eight hours includes days when nobody is here, and *acknowledge* means a document rather than a telephone call.** **One reason sounds like a complaint; three sounds like a reading.**',
  '⚠ **Say what you CAN perform, in the same breath.** ⚠ *What we can perform is an acknowledgement in writing within two business days of receipt at the administration office.* **An admission with no alternative in it is a request for sympathy.**',
  '⚠ **And ask for the smallest thing that solves it.** ⚠ **Not an amendment** — **an agreement about what two words mean.** **A definition can be agreed by somebody who cannot authorise an amendment, which means it can be agreed this week.**',
  '⚠ **The clause that cannot be performed is almost never the clause that looks hard.** ⚠ **It is the short one with a number in it** — **because a short clause with a number has been read by everybody and tested against the building by nobody.**',
  '**Practise:** Take one undertaking of yours that cannot be performed as drafted. Name it, give the separate reasons, say what you can perform, and ask for the smallest fix.',
  '**Useful phrases:**  as drafted we cannot perform  ·  what we can perform is  ·  three problems, and they are separate  ·  information today, an excuse in October  ·  agree what two words mean',
  '**Pronunciation – an admission as information.** 🔊 **Track 13.8** Listen twice. ⚠ **The first says *as drafted we cannot perform clause 9* level and unhurried.** ⚠ **The second drops in pitch and speeds up at the end.** **Level, it is a fact being reported; dropped and hurried, it is an apology, and an apology invites a reply about blame.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a clause; B presses for the three parts.'));
out.push(dlg(null, [
  ['A', 'As drafted we cannot perform clause __________.'],
  ['B', '⚠ **Why not? Separately.**'],
  ['A', 'First __________. Second __________. Third __________.'],
  ['B', '⚠ **And what can we perform?**'],
  ['A', '__________.'],
  ['B', '⚠ **When are you telling them?**'],
  ['A', '__________.'],
  ['B', '⚠ **Before anything has gone wrong, or after?**'],
  ['A', '⚠ **Before. The same sentence is information today and __________ later.**'],
  ['B', '⚠ **And what are you asking for? The smallest thing.**'],
]));
out.push(table(['Role card 1 — one reason instead of three', 'Role card 2 — the ask that is too big'], [[
  '⚠ **A says the clause cannot be performed because the warehouse has no telephone, and stops there.** ⚠ **B asks what else, twice, and gets the weekend and the meaning of *acknowledge*.** ⚠ **B\'s point: one reason reads as a complaint about a telephone and invites the answer *then get a telephone*; three reasons read as a reading of the clause and invite a definition.**',
  '⚠ **A wants to ask Mr Hamdan to amend clause 9.** ⚠ **B asks who at Dallal Freres can authorise an amendment, and the answer is not Mr Hamdan.** ⚠ **B\'s point: ask for the thing the person you are writing to can actually grant** — **an agreement about what *receipt* and *forty-eight hours* mean** — **and you have an answer this week instead of a committee in November.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three reasons separately. ⚠ Then write the ask, and say who at the other end can grant it.'));
out.push(PHRASE_CARD(['as drafted we cannot perform', 'three problems, separately', 'what we can perform is', 'information today', 'the smallest fix']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** undertaking of yours that cannot be performed as drafted. Work it out in four parts.'));
out.push(table(['The clause, and what it requires', 'The reasons, separately', 'What we can perform', 'The smallest ask, and who can grant it'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.6, 2.2, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _As drafted we cannot perform _______. First _______. Second _______. Third _______. What we can perform is _______. I am asking _______ to agree that _______ means _______._'));
out.push(p('**Listener task:** count how many of the unperformable clauses were short ones with a number in them. ⚠ Then ask how many had ever been tested against the building rather than read, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four admissions on the board — look for one with a single reason and one that asks for an amendment. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**Sham Trading, Mezzeh, Damascus — 14 July**',
  '**Mr Hamdan, Dallal Freres, Beirut**',
  'Dear Mr Hamdan',
  '⚠ **Clause 9 of the agreement of 3 July provides that we acknowledge a complaint within forty-eight hours of receipt. As drafted we cannot perform it, and I would rather tell you that this week than in October.**',
  '⚠ **There are three difficulties and they are separate.** **First, *receipt* is not defined. A complaint may reach our counter at Mezzeh, our warehouse gate, or this office by letter, and the three are up to two days apart. Second, forty-eight hours is forty-eight hours: a complaint made on a Thursday afternoon falls due on a Saturday afternoon, when nobody here is working. Third, *acknowledge* in your draft means a document, and our counter can confirm receipt by telephone within minutes but cannot issue a document without the complaint in front of somebody who writes.**',
  '⚠ **What we can perform, and will: an acknowledgement in writing within two business days of receipt at this office, and a telephone confirmation the same day wherever the complaint first arrives.** **Our experience of the Tannous account — whose agreed terms of 28 April ran twelve months from 1 May and were worked under that way for a year — is that the telephone call is the part a customer actually wants, and we would do it on the day.**',
  '⚠ **I am not asking you to amend the agreement.** **I am asking you to agree two definitions by letter: that *receipt* means receipt at the address in schedule 1, and that *forty-eight hours* means two business days.** ⚠ **Both are smaller than an amendment and neither changes what we owe you.**',
  '⚠ **If you would rather hold clause 9 as it stands, say so and we will staff it** — **but I would then ask you to tell me which of the three arrival points you intend to use, because we would put somebody on it and the agreement does not say where.**',
  'Yours sincerely, **N. Mansour, Administration**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the writer explain her timing, in the first paragraph?'));
out.push(item('2', 'What does she offer, and which part of it does she say the customer actually wants?'));
out.push(item('3', 'What does the last paragraph do that the rest of the letter does not?'));
out.push(box('Writer\'s box', [
  '**The letter about a clause you cannot perform — six parts:** ⚠ **the clause and the admission, in the first sentence** → **your timing, explained** → ⚠ **the difficulties, separated and counted** → **what you can perform, and will** → ⚠ **the smallest ask** → ⚠ **and what happens if they refuse.**',
  '⚠ **Put the admission in the first sentence and your timing in the same paragraph.** ⚠ *I would rather tell you this week than in October.* **Nine words, and they answer the question the reader is forming** — **which is why you are writing now about something that has not happened.**',
  '⚠ **Count the difficulties and keep them apart.** ⚠ *There are three and they are separate.* **A reader who can count your reasons can check them; a paragraph of reasons that runs together can only be agreed with or disagreed with as a whole.**',
  '⚠ **Say what you can perform AND that you will.** ⚠ **Both halves.** *What we can perform, and will* — **because *we could do X* is a negotiating position and *we will do X* is an undertaking, and this letter is worth nothing as the first.**',
  '⚠ **Give one fact from the relationship, and make it about them.** ⚠ *Our experience of the Tannous account is that the telephone call is the part a customer actually wants.* **It turns the offer from a convenience for you into a judgement about their customers** — **and it is true, which is the only reason to write it.** ⚠ **Date the experience you are citing** — *whose agreed terms of 28 April ran twelve months from 1 May* — **because an undated claim about your own history is the one sentence in a letter of this kind that nobody can check.**',
  '⚠ **Ask for definitions, not an amendment**, **and say that the definitions change nothing you owe.** ⚠ **An amendment needs authority; a definition needs agreement** — **and the person reading your letter has the second and not the first.**',
  '⚠ **And write the paragraph that assumes they refuse.** ⚠ *If you would rather hold clause 9 as it stands, say so and we will staff it* — **and then ask them for the one thing you would need.** **A letter that offers no path for a no is a letter that has to be answered yes or ignored.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about an undertaking you cannot keep as drafted (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________**   **______________**   Dear ______________   ⚠ **Clause ______________ of ______________ provides that ______________. As drafted we cannot perform it, and I would rather tell you ______________ than ______________.**   ⚠ **There are ______________ difficulties and they are separate.** **First, ______________. Second, ______________. Third, ______________.**   ⚠ **What we can perform, and will: ______________.** **Our experience of ______________ is that ______________.**   ⚠ **I am not asking you to ______________. I am asking you to ______________.** ⚠ **Both are smaller than ______________ and neither changes what we owe you.**   ⚠ **If you would rather hold ______________ as it stands, say so and we will ______________** — **but I would then ask you to ______________.**   Yours sincerely, **______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The admission in the first sentence, with the timing explained', ''],
  ['The difficulties counted and separated', ''],
  ['*What we can perform, and will* — both halves', ''],
  ['An ask smaller than an amendment', ''],
  ['A paragraph that assumes they refuse', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their ask. ⚠ The class says of each whether the person addressed could grant it without asking anybody.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an undertaking your work has made that it cannot keep (**200 to 240 words**). Say what it is, why not, whether anybody has said so, what would happen if you said so this week, and what you would ask for.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what is the smallest ask?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had somebody already noticed and said nothing? Usually all three — ⚠ **and the reason given is almost always that nothing had gone wrong yet, which is the one condition under which saying it is free.**'));
out.push(box('Homework', ['Write your final text. Then take one undertaking your side cannot keep and write the two definitions you would ask the other side to agree (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.5 =======================
out.push(pb());
out.push(h2('13.5  The notice provision, and the clock it starts'));
out.push(p('**Function:** reading a notice provision for the date a clock starts   ·   **Grammar:** _deemed received · within fourteen days of · by close of business on_   ·   **Pronunciation:** a deemed date read as a fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say where letters arrive at your work, and who opens them. ⚠ Then say what happens to one that arrives while that person is away.'));
out.push(p('**b**  Which starts a clock? _we received your letter and are looking into it · your notice of 3 September was deemed received on the 7th and the fourteen days expire on the 21st_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has happened?   **A** a letter was lost   **B** a notice was deemed received on the 7th, the cure period expires on the 21st, and it was found on the 18th   **C** the agreement has been breached'));
out.push(p('**b**  Listen again. **1** What are the three dates, and which of them does not matter? **2** What does Nour say the tray is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.9  "Posted the 3rd, deemed the 7th, expires the 21st"', [
  ['Hala', 'There is a letter from Beirut in the counter tray. It has been there a while.'],
  ['Nour', 'Dated?'],
  ['Hala', 'The 3rd of September. It came in on the 11th, I think. It is about a short delivery.'],
  ['Nour', 'Then it is a notice under clause 20 and today is the 18th. ⚠ **Give it to me.**'],
  ['Hala', 'Is the 11th a problem? It was only a week.'],
  ['Nour', '⚠ **The 11th does not matter at all, and that is the part nobody believes.** ⚠ **Clause 17 says a notice is deemed received at close of business on the second business day after posting.** **Posted the 3rd. Deemed received the 7th.**'],
  ['Hala', 'But we did not have it on the 7th.'],
  ['Nour', '⚠ **We are deemed to have had it on the 7th, which for every purpose in this agreement is the same thing.** ⚠ **The day a letter actually reaches a tray is a fact about our building and the agreement is not interested in our building.**'],
  ['Hala', 'And then?'],
  ['Nour', '⚠ **Clause 20. Fourteen days from the deemed date to remedy a notified breach. The 7th plus fourteen is the 21st.** **Today is the 18th.**'],
  ['Hala', 'Three days.'],
  ['Nour', '⚠ **Three days, and the remedy is two days\' work, so we are inside it.** ⚠ **If you had found it on the 22nd we would have been in breach of an agreement four weeks old over a letter that was in this building the whole time.**'],
  ['Hala', 'The tray is the problem.'],
  ['Nour', '⚠ **The tray is a clock nobody can see.** ⚠ **Every letter in it is running, and the only cure is that somebody opens the tray on a date with their name against it** — **which is a register row, not a policy.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reading a notice provision**',
  table(['The question', 'What the clause says', 'What follows'], [
    ['**when was it given?**', '⚠ *deemed received at close of business on the second business day after posting*', '⚠ **a date computed from the postmark** — **and not from your tray**'],
    ['⚠ **when did it actually arrive?**', '**(the agreement does not ask)**', '⚠ **it does not matter** — **the day a letter reaches a tray is a fact about your building**'],
    ['**what does it start?**', '⚠ *fourteen days to remedy a notified breach* — **clause 20**', '⚠ **deemed date plus fourteen** — **the 7th becomes the 21st**'],
    ['⚠ **who watches the tray?**', '**(the agreement does not ask)**', '⚠ **a register row with a name and a date** — **not a policy about post**'],
  ], [2.2, 3.6, 3.3]),
  '⚠ **A notice provision is not about letters. It is about when a clock starts** — **and it starts on a date the other side can compute and you cannot see.**',
  '⚠ **A deemed date is a fact, for every purpose in the agreement.** ⚠ **You are deemed to have had the letter on the 7th whether it was on a desk, in a tray, or in a van** — **and *we did not have it* is not an answer, because the clause has already answered it.**',
  '⚠ **Compute the expiry the moment a notice is found, and write both dates on the letter.** ⚠ **Deemed 7 September; expires 21 September.** **Two dates in ink on the top of the page, and anybody who picks it up afterwards knows how much time is left.**',
  '⚠ **The unopened tray is the real risk, and it is not a legal risk.** ⚠ **It is a clock nobody can see** — **and the cure is not a policy about post but a row in the register: who opens it, on which days, with their name against it.**',
  '⚠ **And check the address for notice before you need it.** ⚠ **A notice served on the address in schedule 1 is good even if nobody there reads it** — **so the question *is schedule 1 still the right address?* is worth asking in week two and not in month nine.**',
  '**Practise:** Take a notice provision of yours. Compute a deemed date from a posting date, then compute what it starts, then say who opens the tray.',
  '**Useful phrases:**  deemed received on  ·  the date it arrived does not matter  ·  deemed plus fourteen  ·  write both dates on the letter  ·  a clock nobody can see',
  '**Pronunciation – a deemed date as a fact.** 🔊 **Track 13.10** Listen twice. ⚠ **The first says *we are deemed to have had it on the 7th* flatly, as a fact.** ⚠ **The second lifts *deemed*.** **Flat, it is the position; lifted, it sounds like an objection to the position, and the position is not available to object to.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a letter; B computes the clock.'));
out.push(dlg(null, [
  ['A', 'There is a letter dated the __________. It came in on the __________.'],
  ['B', '⚠ **What does the notice provision say?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then the deemed date is the __________, and the day it arrived does not matter. What does it start?**'],
  ['A', '__________.'],
  ['B', '⚠ **So it expires on the __________. What is today?**'],
  ['A', '__________.'],
  ['B', '⚠ **Write both dates on the letter. And who opens that tray?**'],
  ['A', '__________.'],
  ['B', '⚠ **On which days, with whose name against it?**'],
]));
out.push(table(['Role card 1 — the date it arrived', 'Role card 2 — the tray with no owner'], [[
  '⚠ **A keeps returning to the day the letter reached the counter, because that is the day the company actually knew.** ⚠ **B holds the deemed date and explains why: the clause has already decided the question, and the day a letter reaches a tray is a fact about this building.** ⚠ **B then asks A to say out loud what would have happened if it had been found on the 22nd.**',
  '⚠ **A proposes a policy: all post to be brought to the office daily.** ⚠ **B asks whose name is on it, on which days, and what the evidence is that it happened.** ⚠ **B\'s point: a policy about post is a sentence and a register row is a person** — **and the thing that failed here was not a policy, it was that no name was attached to a tray.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three dates and mark the one that does not matter. ⚠ Then write what goes in the register, and whose name is on it.'));
out.push(PHRASE_CARD(['deemed received on', 'the arrival date does not matter', 'deemed plus fourteen', 'both dates on the letter', 'who opens the tray?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** notices or dated letters from your own work. Compute each clock.'));
out.push(table(['The letter, and its date', 'Deemed received', 'What it starts, and when it expires', 'Who should have opened it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 1.6, 2.8, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The letter is dated _______ and arrived _______. It is deemed received on _______. It starts _______, which expires on _______. It should have been opened by _______ on _______._'));
out.push(p('**Listener task:** count how many letters had a clock in them that nobody had computed. ⚠ Then ask in how many cases the arrival date was later than the deemed date, and note that in those cases the company had less time than it thought.'));
out.push(p('**Board clinic:** your teacher writes four letters on the board with dates — compute each clock together, and find the one where nobody owns the tray.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**NOTICE OF 3 SEPTEMBER: THE DATES. 18 September. N. Mansour. On the file, and on the letter.**',
  table(['Date', 'What it is', 'Does it matter?'], [
    ['**3 September**', '**the date of the notice, and the posting date**', '⚠ **yes** — **the clause computes from it**'],
    ['**7 September**', '⚠ **the deemed date of receipt** — **close of business on the second business day after posting, clause 17**', '⚠ **yes** — **this is the date we are treated as having had it**'],
    ['**11 September**', '**the day it reached the counter tray**', '⚠ **no** — **it is a fact about this building and the agreement does not ask**'],
    ['**18 September**', '**the day it was found and read**', '⚠ **no, except to us** — **it is the day we had eleven of the fourteen days left to discover**'],
    ['**21 September**', '⚠ **expiry of the cure period under clause 20** — **fourteen days from the deemed date**', '⚠ **yes** — **this is the only date on the list with a consequence**'],
  ], [1.3, 5.2, 3.4]),
  '⚠ **Action taken today.** **Both dates are written in ink at the top of the letter: *deemed 7.9 · expires 21.9*.** **The remedy is two days\' work and is instructed for tomorrow.** ⚠ **We are inside the period by three days and the margin is luck.**',
  '⚠ **What went wrong is not the post and not Hala.** **The letter was in this building from the 11th and nobody had a date to open the tray.** ⚠ **The counter tray is a clock nobody can see: every notice in it is running from a date computed in Beirut.**',
  '⚠ **The register row I am adding is not a policy about post.** ⚠ **Clause 17. Act: open the counter tray and the gate tray, and bring anything from Beirut or from a lawyer to this office the same day. Owner: H. Mourad, Mondays and Thursdays. Second owner when she is away: B. Nassif. Evidence: the dated initial on each item.**',
  '⚠ **And one question for Mr Sayegh, which I should have asked in July.** **Schedule 1 gives the address for notice as this office.** ⚠ **If a notice is served there it is good whether anybody reads it or not** — **so the address is correct and the arrangement behind it was not, and the second is the only one we can fix.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two of the five dates have a consequence, and why do the other three not?'));
out.push(item('2', 'Why does the writer say what went wrong is not the post and not Hala?'));
out.push(item('3', 'What is the difference between the address being correct and the arrangement behind it being correct?'));
out.push(box('Writer\'s box', [
  '**The dates note — four parts:** ⚠ **a table of every date with *does it matter?*** → **the action taken today** → ⚠ **what went wrong, named as a mechanism and not a person** → ⚠ **and the register row, which is not a policy.**',
  '⚠ **Put *does it matter?* in a column and answer it for every date.** ⚠ **Five dates and two of them have consequences** — **and a reader who sees three *no*s understands the clause better than a reader given only the two that count.**',
  '⚠ **Write the two live dates on the letter itself, in ink.** ⚠ *Deemed 7.9 · expires 21.9.* **The note goes on a file and the letter goes round the building** — **and the next person to pick it up needs the clock, not the analysis.**',
  '⚠ **Name the mechanism and not the person.** ⚠ *The letter was in this building from the 11th and nobody had a date to open the tray.* **Hala brought it the moment she thought about it** — ⚠ **and a note that says *Hala was slow* fixes nothing, because the next person will also be busy.**',
  '⚠ **Make the fix a register row, with a named deputy.** ⚠ **Owner, days, deputy, evidence** — **and *Mondays and Thursdays* rather than *daily*, because a daily duty nobody can keep is how the tray got full in the first place.**',
  '⚠ **And separate the thing that is right from the thing that is wrong.** ⚠ **The address for notice is correct; the arrangement behind it was not** — **and saying so stops a senior reader spending a week on the address.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take a dated letter or notice at your work and write the dates note (**80 words or more**). Use the frame.'));
out.push(p('**NOTICE OF ______________: THE DATES. ______________. ______________.**   **Date** | **What it is** | **Does it matter?**   **______________** | **______________** | ⚠ **______________**   **______________** | ⚠ **______________** | ⚠ **______________**   **______________** | **______________** | ⚠ **no** — **______________**   **______________** | ⚠ **______________** | ⚠ **yes** — **______________**   ⚠ **Action taken today.** **______________.**   ⚠ **What went wrong is not ______________ and not ______________.** **______________.**   ⚠ **The register row I am adding is not a policy about ______________.** ⚠ **Clause ______________. Act: ______________. Owner: ______________. Second owner when ______________: ______________. Evidence: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every date in the table, with *does it matter?* answered', ''],
  ['The two live dates written on the letter itself', ''],
  ['The mechanism named, not a person', ''],
  ['A register row with an owner, days, a deputy and evidence', ''],
  ['The thing that is right separated from the thing that is wrong', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their register row. ⚠ The class says whether it has a deputy, and what happens on the week the owner is away without one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the way post and notices arrive at your work (**200 to 240 words**). Say where things arrive, who opens them, what has sat somewhere, whether any clock was running, and what row you would add.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _whose name is on the tray?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many does somebody open the post because they always have, rather than because it is theirs? Usually all three — ⚠ **and an arrangement that depends on a habit is an arrangement that ends with a holiday.**'));
out.push(box('Homework', ['Write your final text. Then find one dated letter at your work, compute its deemed date and what it starts, and write both dates on it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.6 =======================
out.push(pb());
out.push(h2('13.6  The register'));
out.push(p('**Function:** building the obligations register   ·   **Grammar:** _clause → act → owner → evidence_   ·   **Pronunciation:** a row read as four things, not one'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say what your work keeps a list of. ⚠ Then say who reads the list, and when it was last wrong.'));
out.push(p('**b**  Which is a register row? _clause 13 — buffer stock — ongoing · clause 13 — count the buffer and record it — Abu Yasser, Sundays — the dated count sheet_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub object to first?   **A** the length of the register   **B** that it names nine people who have never seen the agreement   **C** the number of clauses'));
out.push(p('**b**  Listen again. **1** How many rows, how many acts and how many owners? **2** What does Nour say the register is for, in one sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.11  "Twenty-two rows, eleven acts, six names"', [
  ['Nour', 'Twenty-two rows, one for each clause. Eleven of them carry an act. Six people between them.'],
  ['Mr Ayoub', '⚠ **Six people, and how many of them have read the agreement?**'],
  ['Nour', 'Two. You and me.'],
  ['Mr Ayoub', '⚠ **So you are about to put four names against obligations in a document they have never seen.** ⚠ **What do I say to Abu Yasser when he asks what he has signed up to?**'],
  ['Nour', '⚠ **That he has not signed up to anything, because he cannot.** ⚠ **The company signed. The register says who performs what the company signed, which is a different question** — **and the answer to it was previously nobody.**'],
  ['Mr Ayoub', '⚠ **He will still read his name next to a clause number.**'],
  ['Nour', 'Then the row should not have a clause number in it where he can see it. ⚠ **His row says: count the buffer stock on Sundays and write the figure on the sheet.** ⚠ **The clause number is in my column, not in his.**'],
  ['Mr Ayoub', '⚠ **That is better. What is the fourth column?**'],
  ['Nour', 'Evidence. What we could hand over tomorrow to show the thing was done.'],
  ['Mr Ayoub', '⚠ **And how many of the eleven have evidence today?**'],
  ['Nour', '⚠ **Four.** ⚠ **Three of the other seven are being done and leave no trace, and four are not being done at all.**'],
  ['Mr Ayoub', '⚠ **Say the second number again.**'],
  ['Nour', '⚠ **Four of our eleven obligations are not being performed.** **We are seven weeks in.**'],
  ['Mr Ayoub', '⚠ **Then that is what the register is for, and I will stop arguing about the names.** ⚠ **Write it, bring it to me on Thursday, and bring the four separately.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The obligations register — four columns**',
  table(['Column', 'What goes in it', 'The fault to avoid'], [
    ['**clause**', '**the number, and nothing else**', '⚠ **do not put the number where the owner reads it** — **a name beside a clause number reads as a personal undertaking**'],
    ['⚠ **act**', '⚠ **a verb a person does, with a date or a day** — *count the buffer on Sundays and write the figure*', '⚠ **a nominalisation** — *buffer stock monitoring* **is an act with nobody inside it**'],
    ['⚠ **owner**', '**one name** — **and a deputy for when they are away**', '⚠ **a department** — **an office does not open a tray; a person does**'],
    ['⚠ **evidence**', '⚠ **the thing you could hand over tomorrow** — **the dated count sheet, the sent message**', '⚠ *we do it regularly* — **which is a sentence about yourself**'],
  ], [1.1, 4.1, 3.9]),
  '⚠ **The register answers one question: who performs what the company signed.** ⚠ **It is not the agreement, it does not bind anybody, and it should say so at the top** — **because the first thing a named owner feels is that they have been made to promise something.**',
  '⚠ **Keep the clause number out of the owner\'s view.** ⚠ **A row that says *clause 13 — Y. Khalil* reads as an undertaking; a row that says *count the buffer on Sundays and write the figure — Y. Khalil* reads as a job.** **The clause number belongs in the author\'s column.**',
  '⚠ **Write the act as a verb with a day in it.** ⚠ *Count the buffer on Sundays* — **not *maintain the buffer*, which is the clause again, and not *buffer stock monitoring*, which is nobody.**',
  '⚠ **One name, and a deputy.** ⚠ **A register with no deputies is a register that works until the first holiday** — **and the holiday is when the tray fills up.**',
  '⚠ **And the evidence column is the one that produces the finding.** ⚠ **Ask of each row: what could we hand over tomorrow?** **The rows with nothing in that column are either not being done or are being done invisibly** — **and the two look identical from a desk and are completely different from a tribunal.**',
  '**Practise:** Build four register rows from an agreement of yours. Put a deputy in each and an item of evidence you could produce tomorrow.',
  '**Useful phrases:**  twenty-two rows, eleven acts  ·  the clause number is in my column  ·  one name and a deputy  ·  what could we hand over tomorrow?  ·  being done and leaving no trace',
  '**Pronunciation – a row as four things.** 🔊 **Track 13.12** Listen twice. ⚠ **The first reads a row straight through as one phrase.** ⚠ **The second puts a clear break after the act, the owner and the day.** **Run together, a row is a sentence; broken into four, it is four things somebody can check.** Say one four times, with the breaks.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a row; B hardens it.'));
out.push(dlg(null, [
  ['A', 'Clause __________. Act: __________.'],
  ['B', '⚠ **That is the clause again. What does a person do?**'],
  ['A', '__________.'],
  ['B', '⚠ **On which day? And who?**'],
  ['A', '__________.'],
  ['B', '⚠ **And when that person is away?**'],
  ['A', '__________.'],
  ['B', '⚠ **Evidence. What could we hand over tomorrow?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then this row is real. Is the clause number in your column or theirs?**'],
]));
out.push(table(['Role card 1 — the act that is the clause again', 'Role card 2 — the empty evidence column'], [[
  '⚠ **A writes *maintain the buffer stock* as the act, which is the clause with the subject changed.** ⚠ **B asks what a person actually does on a day, and gets *count it and write the figure down*.** ⚠ **B\'s point: the register exists to convert, and a row that repeats the clause has converted nothing** — **it has only moved the sentence to a different page.**',
  '⚠ **A leaves evidence blank on three rows and says the things are being done.** ⚠ **B accepts that they are being done and asks what could be handed over tomorrow.** ⚠ **B\'s point: *being done and leaving no trace* and *not being done* look identical from a desk** — **and under a cure period, with fourteen days, they are the same thing.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one complete row, with a deputy. ⚠ Then say why the clause number belongs in the author\'s column and not the owner\'s.'));
out.push(PHRASE_CARD(['that is the clause again', 'on which day?', 'and when they are away?', 'hand over tomorrow', 'in my column, not theirs']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Build **four** register rows from an agreement your work is inside.'));
out.push(table(['Cl.', 'Act — a verb, with a day', 'Owner', 'Deputy', 'Evidence'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [0.5, 3.5, 1.4, 1.4, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My register has _______ rows and _______ acts, with _______ owners. The row I am least sure of is _______, because _______. The evidence column is empty on _______ rows._'));
out.push(p('**Listener task:** count how many registers had an empty evidence column somewhere. ⚠ Then ask, of each empty cell, whether the thing is not being done or is being done invisibly — and note that most people cannot say.'));
out.push(p('**Board clinic:** your teacher writes four rows on the board — look for an act that is the clause again, and a row with no deputy. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**DALLAL AGREEMENT: OBLIGATIONS REGISTER. 23 September. N. Mansour. Note 2 of 3. Extract: 6 rows of 22.**',
  '⚠ **This register does not bind anybody. The company is bound by the agreement. This says who performs what the company signed, and until this week the answer to that was nobody.**',
  table(['Cl.', 'What somebody does', 'Owner', 'Deputy', 'Evidence', '✓'], [
    ['**4**', '**check the monthly despatch total against 1,100 and report any month outside ten per cent**', '**N. Sayegh**', '**N. Mansour**', '**the monthly despatch summary**', '**✓**'],
    ['**6**', '**prepare the forecast by the 7th; send it by the 10th**', '**N. Sayegh / N. Mansour**', '**N. Mansour**', '**the sent message, kept**', '**✓**'],
    ['**9**', '**acknowledge a complaint in writing within two business days of receipt here**', '**H. Mourad**', '**N. Mansour**', '⚠ **the acknowledgement, copied to the file**', '⚠ **✗**'],
    ['**13**', '**count the buffer stock on Sundays and write the figure on the sheet**', '**Y. Khalil**', '**F. Saeed**', '**the dated count sheet**', '⚠ **✗**'],
    ['**17**', '**open both trays Mondays and Thursdays; bring anything from Beirut or a lawyer here the same day**', '**H. Mourad**', '**B. Nassif**', '**the dated initial on each item**', '⚠ **✗**'],
    ['**20**', '**on any notice: write the deemed date and the expiry date on it, in ink, the day it is seen**', '**N. Mansour**', '**Mr Ayoub**', '**the two dates on the letter**', '**✓**'],
  ], [0.4, 4.2, 1.5, 1.2, 2.3, 0.4]),
  '⚠ **Of the eleven acts, four have evidence we could produce tomorrow, three are being done and leave no trace, and four are not being done at all.** ⚠ **The four not being done are clauses 9, 13, 17 and 21, and they are attached to this note separately.**',
  '⚠ **The three that leave no trace are the ones I would spend the first week on**, **because they are already somebody\'s habit and all they need is a sheet.** ⚠ **A habit with a sheet under it is an obligation performed; the same habit with no sheet is indistinguishable, seven months later, from nothing.**',
  '⚠ **Nine of the eleven owners and deputies had not seen the agreement before this week.** **That is not a criticism of them.** ⚠ **It is the reason the register exists, and it is why no row carries a clause number in the column the owner reads.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the first line of the register say about what the register does, and why is it first?'));
out.push(item('2', 'What are the three states an act can be in, and which two look the same from a desk?'));
out.push(item('3', 'Why does no row carry a clause number in the owner\'s column?'));
out.push(box('Writer\'s box', [
  '**The register page — five parts:** ⚠ **a first line saying the register binds nobody** → **the rows** → ⚠ **the three-way count: evidenced, invisible, not done** → **what you would do first** → ⚠ **and who had not seen the agreement.**',
  '⚠ **Put the disclaimer first and make it one sentence.** ⚠ *This register does not bind anybody.* **The first reaction of a named owner is that they have been made to promise something** — **and a sentence at the top costs nine words and prevents a week of it.**',
  '⚠ **Count three ways and not two.** ⚠ **Evidenced · being done with no trace · not being done.** **Two columns of tick and cross hide the middle group, which is the largest** — **and the middle group is the cheapest to fix.**',
  '⚠ **Say which group you would spend the first week on, and why.** ⚠ **The invisible ones: they are already habits and all they need is a sheet.** **A reader who is given a finding and no order of work will choose the order themselves, and they will choose the four that are not being done, which take months.**',
  '⚠ **Attach the failures separately.** ⚠ **Four clauses not being performed, listed on their own sheet** — **because a senior reader must be able to put that page in front of somebody without handing over the whole register.**',
  '⚠ **And say who had not seen the agreement, with the sentence that it is not a criticism.** ⚠ **Nine of eleven** — **and then that this is the reason the register exists.** **Said that way it is a finding; said any other way it is a complaint about colleagues.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a register extract for an agreement your work is inside (**80 words or more**). Use the frame.'));
out.push(p('**______________: OBLIGATIONS REGISTER. ______________. ______________. Extract: ______________ rows of ______________.**   ⚠ **This register does not bind anybody. ______________ is bound by ______________. This says ______________, and until ______________ the answer to that was ______________.**   **Cl.** | **What somebody does** | **Owner** | **Deputy** | **Evidence** | **✓**   **______________** | **______________** | **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | **______________** | **______________** | **______________**   ⚠ **Of the ______________ acts, ______________ have evidence we could produce tomorrow, ______________ are being done and leave no trace, and ______________ are not being done at all.**   ⚠ **The ______________ that leave no trace are the ones I would spend the first week on**, **because ______________.**   ⚠ **______________ of the owners had not seen the agreement before this week. That is not a criticism of them.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line saying the register binds nobody', ''],
  ['Every act a verb with a day in it', ''],
  ['A deputy on every row', ''],
  ['The three-way count, and it adds up to the number of acts', ''],
  ['Who had not seen the agreement, with *that is not a criticism*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their three-way count. ⚠ The class adds the three numbers and checks them against the number of acts.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the obligations your work is under and who performs them (**200 to 240 words**). Say how many there are, how you found them, which have evidence, which are habits with nothing under them, and which are not being done.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does the count add up?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is at least one obligation not being performed? Usually all three — ⚠ **and in most cases nobody had looked, which is the finding of this unit: an obligation nobody has looked at is not being performed, it is merely not yet being asked about.**'));
out.push(box('Homework', ['Write your final text. Then build four register rows for your own work, each with a deputy and an item of evidence you could hand over tomorrow (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 13.7 =======================
out.push(pb());
out.push(h2('13.7  Review & Mediate: the clause we are already in breach of'));
out.push(p('**Function:** telling somebody they are inside an obligation they have never seen   ·   **Review:** what it obliges · the three weights · the act and the owner · the clause nobody can perform · the clock · the register'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 13 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the one question that finds every obligation in an agreement?',
  '**2** Which of the four weights is nearly as heavy as _shall_, and why does nobody believe it?',
  '**3** What are the four parts of a register row, and which is most often missing?',
  '**4** When do you name a clause you cannot perform, and what is the same sentence called if you wait?',
  '**5** Which date in a notice provision does not matter, and why?',
  '**6** What are the three states an act can be in, and which two look the same?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say that changes the conversation?   **A** that he will not do it   **B** that he would have held the buffer if anybody had told him it was a number in an agreement rather than a habit   **C** that the buffer is impossible'));
out.push(p('**b**  Listen again. **1** What are the two figures, and what caused the drop? **2** What does Abu Yasser ask for, and what does Nour agree to put in the register?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 13.13  "Nobody told me it was two hundred in a contract"', [
  ['Nour', 'Clause 13. We undertake best endeavours to keep two hundred cartons as a buffer. On 20 August the buffer was a hundred and twenty. On 1 September it was ninety-five.'],
  ['Abu Yasser', '⚠ **Ninety-five is right. The Ghouta run goes Mondays and Wednesdays and it takes forty a time when the orders are heavy, and in August they were heavy.**'],
  ['Nour', 'So we have been below half the figure since the middle of August.'],
  ['Abu Yasser', '⚠ **I have kept about a hundred for eleven years, because a hundred covers a week.** ⚠ **Nobody has ever told me two hundred.**'],
  ['Nour', 'It is in the agreement.'],
  ['Abu Yasser', '⚠ **I have not seen the agreement.** ⚠ **If you had told me in July that two hundred was a number somebody could sue us about, the Ghouta run would have taken thirty a time and I would have told you why.** ⚠ **I did not know it was a number. I thought it was a habit, and a habit gives way to an order.**'],
  ['Nour', '⚠ **That is my fault and it is in my note.** **What do you need?**'],
  ['Abu Yasser', '⚠ **Three things. The figure, in writing, where I count. A day to count on. And somebody to tell when it goes under a hundred and fifty, because I will not know who to tell at eight in the morning.**'],
  ['Nour', 'The figure on the sheet, Sundays, and you tell me — and Bassel when I am not here.'],
  ['Abu Yasser', '⚠ **And one more. Put in your register that the Ghouta run takes forty when the orders are heavy.** ⚠ **Because when somebody reads this in two years they will see that I let the buffer fall and they will not see why.**'],
  ['Nour', '⚠ **That is the best thing anybody has said about this register.** **It goes in the row, not in a footnote.**'],
  ['Abu Yasser', '⚠ **And am I in breach?**'],
  ['Nour', '⚠ **The company is, possibly, and not you.** ⚠ **And under best endeavours what we are judged on is what we did when we found out** — **which starts on Sunday.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – telling somebody they are inside an obligation they have never seen**',
  table(['What happens', 'What is said', 'What it does'], [
    ['**the figures are put**', '**two hundred required; a hundred and twenty on 20 August; ninety-five on 1 September**', '⚠ **a figure and two dates** — **and no adjective about anybody**'],
    ['⚠ **the cause is given, by the person**', '⚠ *the Ghouta run takes forty a time when the orders are heavy*', '⚠ **the cause arrives from the only person who had it** — **and it is operational, not personal**'],
    ['⚠ **the real finding**', '⚠ *I thought it was a habit, and a habit gives way to an order*', '⚠ **the whole unit in one sentence** — **a number nobody knows is a number is a habit**'],
    ['⚠ **the fault is taken**', '⚠ *that is my fault and it is in my note*', '**it ends the question of blame in nine words, before it is asked**'],
    ['⚠ **what he asks for**', '**the figure where he counts · a day · somebody to tell**', '⚠ **three things, all of them a register row** — **and the third is the one no author thinks of**'],
    ['⚠ **his last request**', '⚠ *put in your register that the run takes forty when the orders are heavy*', '⚠ **so that a reader in two years sees why and not only what** — **which is Unit 18, arriving early and from the yard**'],
  ], [1.9, 3.5, 3]),
  '⚠ **A number nobody has been told is a number is a habit.** ⚠ **And a habit gives way to an order, every time, without anybody deciding anything** — **which is how a company is in breach of a figure it undertook in writing seven weeks earlier.**',
  '⚠ **Put the figures and the dates, and no adjective about anybody.** ⚠ **Two hundred required, a hundred and twenty on the 20th, ninety-five on the 1st.** **The person opposite will supply the cause if the sentence has left room for it.**',
  '⚠ **Take the fault before it is offered to you.** ⚠ *That is my fault and it is in my note.* **Nine words** — **and after them the conversation is about Sunday instead of about August.**',
  '⚠ **Ask what they need, and expect three things rather than one.** ⚠ **The figure where the work happens · a day · and somebody to tell.** ⚠ **The third is the one an author never writes**, **because an author always knows who to tell.**',
  '⚠ **And put the operational fact in the row.** ⚠ *The Ghouta run takes forty a time when the orders are heavy.* **It is the sentence that will make a stranger in two years understand why the buffer fell** — ⚠ **and the person who asked for it is the one whose name is in the row.**',
  '**Practise:** Tell somebody about an obligation they are inside and have not seen. Give the figures, take the fault, ask what they need, and put their operational fact in the row.',
  '**Useful phrases:**  nobody has ever told me  ·  I thought it was a habit  ·  that is my fault and it is in my note  ·  the figure where I count  ·  somebody to tell',
  '**Pronunciation – a figure with no adjective.** 🔊 **Track 13.14** Listen twice. ⚠ **The first says *on 1 September it was ninety-five* flat.** ⚠ **The second leans on *ninety-five*.** **Flat, it is a measurement and the other person explains it; leaned on, it is an accusation and the other person defends it.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings the finding; B is the person named in it. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A gives the required figure and two measured figures with their dates, and no adjective.** ⚠ **When B explains the cause, A writes it down and says it goes in the row.** ⚠ **A takes the fault for not having told B in July, in one sentence, and then asks what B needs** — **and A must wait for all three things rather than stopping at the first.**',
  '⚠ **B explains the cause operationally and says plainly that nobody ever told him the figure was in an agreement.** ⚠ **B asks for three things: the figure where the work happens, a day, and a named person to tell when it goes under a warning level.** ⚠ **And B asks for the operational fact to go in the register** — **so that a stranger in two years sees why and not only what.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three things the yard asked for. ⚠ Then write the sentence about the habit, and say which earlier cycle of this unit it proves.'));
out.push(PHRASE_CARD(['nobody told me', 'I thought it was a habit', 'my fault, and in my note', 'what do you need?', 'it goes in the row']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you an obligation and a person who has never seen it. Have the conversation, then write the row.'));
out.push(table(['The figures and dates', 'The cause, in their words', 'The three things they asked for', 'The row, as agreed'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 2.2, 2.2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the conversation. This is the **first** unit of this book, and the unwritten thing is this: ⚠ **a company does not breach an agreement by deciding to** — **it breaches one because a figure in a document on a shelf was a habit in a building, and a habit gives way to an order every time without anybody deciding anything; so the register is not an administrative instrument but the only thing that turns twenty-two sentences into eleven jobs, and the most useful line in it will usually be the one a person who never saw the agreement asked you to write down.**'));
out.push(p('_The obligation is _______. The figures are _______ and _______. The cause, in their words, is _______. They asked for _______, _______ and _______. And the row now says _______._'));
out.push(p('**Listener task:** start the Book 2 **obligation-and-evidence word list**: _an obligation that falls on us · best endeavours · a clause converted into an act · the owner of a clause · a deemed date of receipt · an obligations register_. ⚠ **Six items, and there will be seventy-two by Unit 24.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for a figure given with an adjective attached, and a conversation that stops at the first thing the person asked for. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 4)', 10));
out.push(p('⚠ **This unit is Part 4: multiple-choice cloze, fifteen gaps, four options each, and it is the third time in the level.** Read the text and choose the best word for each gap. ⚠ **Part 4 tests collocation and grammar in roughly equal measure, so read the whole sentence each time and not only the gap.**'));
out.push(box(null, [
  '**WHY CONTRACTS ARE BREACHED BY COMPANIES THAT MEANT TO PERFORM THEM — from a trade association\'s guidance.**',
  'Almost no commercial agreement is broken on purpose. It is broken because the people who negotiated it are not the people who perform it, and nothing was ever done to **(1)** ______ that gap.',
  'A negotiated agreement is read, at the time, by three or four people who are **(2)** ______ in its commercial shape. They argue about price and term, and they are right **(3)** ______ do so, because those are the clauses that decide whether the deal is worth having. What they do not do is ask, of each clause **(4)** ______ turn, whether anybody in the building will have to do something about it on a Tuesday.',
  'The result is a document that **(5)** ______ eleven duties on a company, of which perhaps four are being performed when the first quarter ends. Of the remainder, some are not being done at all. Others — and this is the group that surprises people — are being done perfectly well **(6)** ______ leaving any trace, which from a distance of seven months is **(7)** ______ the same as not being done.',
  'Two kinds of clause are missed more **(8)** ______ than any others. The first is the clause with a standard rather than a date: *best endeavours*, *promptly*, *in good condition*. Nobody puts it in a diary, because there is nothing to **(9)** ______ a diary, and a standard **(10)** ______ every day. The second is the notice provision, which looks procedural and is **(11)** ______ fact the clause that decides when every other clock starts.',
  'The remedy is cheap and nobody does it. Go **(12)** ______ the agreement once, clause by clause, and ask one question: if nobody here did anything at all, would this clause be broken? Where the answer is yes, write down what somebody has to do, on what day, and what you could **(13)** ______ over tomorrow to show it was done. Give every entry a name and a deputy. Keep the clause numbers out of the column the owner reads, **(14)** ______ a name beside a clause number reads as a personal promise.',
  'It takes an afternoon for thirty pages, and it is the only exercise in commercial administration that reliably **(15)** ______ up a breach before the other side does.',
]));
out.push(table(['', 'A', 'B', 'C', 'D'], [
  ['**1**', 'fill', 'close', 'shut', 'join'],
  ['**2**', 'interesting', 'interest', 'interests', 'interested'],
  ['**3**', 'to', 'for', 'at', 'in'],
  ['**4**', 'by', 'at', 'in', 'on'],
  ['**5**', 'places', 'puts', 'sets', 'lays'],
  ['**6**', 'with no', 'lacking', 'absent', 'without'],
  ['**7**', 'all', 'far', 'much', 'well'],
  ['**8**', 'often', 'frequent', 'usual', 'common'],
  ['**9**', 'take in', 'bring in', 'set in', 'put in'],
  ['**10**', 'goes', 'runs', 'walks', 'drives'],
  ['**11**', 'in', 'at', 'by', 'on'],
  ['**12**', 'about', 'over to', 'through', 'into'],
  ['**13**', 'give', 'put', 'take', 'hand'],
  ['**14**', 'so', 'because', 'since that', 'for'],
  ['**15**', 'turns', 'brings', 'throws', 'shows'],
], [0.6, 1.4, 1.4, 1.6, 1.4]));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the first Part 1 of Book 2; the even units take Part 2.**',
  '⚠ **In forty-five words you can carry one finding, one number and one ask, and nothing else.** **Choose them before you write a word** — ⚠ **and the ask is the one people leave out when the count tightens, which is the one the marks are on.**',
  '⚠ **Do not describe the work you did.** ⚠ *I have been through the agreement clause by clause* **costs eight words and tells your manager nothing he can act on.** **The finding is that four obligations are not being performed; the work is how you know.**',
  '⚠ **Put the number in the finding and not in a second sentence.** ⚠ *Four of our eleven obligations under the Dallal agreement are not being performed.* **Twelve words, and it is the whole of the paper.**',
  '⚠ **Part 4 tip, for the cloze above.** ⚠ **Seven of the fifteen gaps are fixed phrases you either know or do not** — *close a gap · interested in · right to do so · each clause in turn · without leaving any trace · more often than · in fact* — **and the other eight are grammar or collocation recoverable from the sentence.** ⚠ **Do the recoverable ones first.**',
  '⚠ **And gap 7 is the one to look at twice.** **Three options are intensifiers that fit *the same as* in some register or other** — ⚠ **but only one of them is the one English actually uses before *the same as* in this construction.** **Read the gap with the two words after it, not with the two words before it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write a message to your manager about an obligations review (**40 to 50 words**). Include **the finding, with a number** · **the group you would deal with first, and why** · and **one thing you are asking for**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   ⚠ **______________ of our ______________ obligations under ______________ are not being performed.** **______________ more are being done and leave no trace.**   ⚠ **I would take the ______________ first, because ______________.**   ⚠ **I am asking for ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A finding with a number in the same sentence', ''],
  ['No description of the work done', ''],
  ['An order of work, with a reason', ''],
  ['One ask, stated as an ask', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the obligations note for an agreement your work is inside (**200 to 240 words**). Count what it obliges, weigh one wording, convert two clauses into acts with owners and evidence, and end with the one clause you think nobody is performing today.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one obligation at your work to the person who performs it, ask whether they knew it was in an agreement, and write down what they ask you for (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 13 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The Supplier ___ maintain a buffer stock of two hundred cartons.   a) shall to   b) shall   c) will to',
  '2  We ___ use reasonable endeavours to hold the figure.   a) will   b) will to   c) are',
  '3  The notice is deemed ___ on the second business day.   a) receiving   b) receive   c) received',
  '4  You have fourteen days ___ the deemed date to remedy it.   a) since   b) from   c) during',
  '5  The clause obliges ___ to do anything.   a) anybody   b) somebody not   c) nobody',
  '6  ___ nobody here did anything, would this clause be broken?   a) Unless   b) If   c) Despite',
  '7  Three of them are being done ___ leaving any trace.   a) with no   b) not   c) without',
  '8  The Buyer ___ inspect any consignment on three days\' notice.   a) mays   b) may   c) may to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 13.15** Listen to the conversation in the yard. Complete the note.   The figure required: ______   The two measured figures, with dates: ______   The cause, in his words: ______   What he thought the figure was: ______   The three things he asks for: ______   What he asks to go in the register: ______'));
out.push(p('**C  Reading.** Read the register extract at 13.6 again. Name the three states an act can be in, say which two look the same from a desk, and say why the clause number is kept out of one column.'));
out.push(p('**D  Writing.** Take one clause from an agreement your work is inside. Write it as a register row — act, owner, deputy, evidence — and add the operational fact a stranger would need in two years (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 13.15  Audio script (read after the check)', [
  ['Nour', '⚠ **Clause 13. We undertake best endeavours to keep two hundred cartons as a buffer. On 20 August the buffer was a hundred and twenty. On 1 September it was ninety-five.**'],
  ['Abu Yasser', '⚠ **Ninety-five is right. The Ghouta run goes Mondays and Wednesdays and it takes forty a time when the orders are heavy, and in August they were heavy.**'],
  ['Nour', 'So we have been below half the figure since the middle of August.'],
  ['Abu Yasser', '⚠ **I have kept about a hundred for eleven years, because a hundred covers a week. Nobody has ever told me two hundred.** ⚠ **I have not seen the agreement. I thought it was a habit, and a habit gives way to an order.**'],
  ['Nour', '⚠ **That is my fault and it is in my note. What do you need?**'],
  ['Abu Yasser', '⚠ **Three things. The figure, in writing, where I count. A day to count on. And somebody to tell when it goes under a hundred and fifty, because I will not know who to tell at eight in the morning.**'],
  ['Nour', 'The figure on the sheet, Sundays, and you tell me — and Bassel when I am not here.'],
  ['Abu Yasser', '⚠ **And one more. Put in your register that the Ghouta run takes forty when the orders are heavy, because when somebody reads this in two years they will see that I let the buffer fall and they will not see why.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**13.1** read an agreement for what it obliges, and count what is yours, theirs and nobody\'s',
  '**13.2** weigh _shall_, _best endeavours_, _reasonable endeavours_ and _may_, and choose on purpose',
  '**13.3** turn a dated clause into acts with owners, an earlier entry and named evidence',
  '**13.4** name a clause you cannot perform before it fails, and ask for the smallest fix',
  '**13.5** compute what a notice provision starts, and put both dates on the letter',
  '**13.6** build an obligations register that binds nobody and shows who performs what',
  '**13.7** tell somebody they are inside an obligation they have never seen',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 13 · Student\'s Book');
module.exports = out;
