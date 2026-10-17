// Proactive English B2 · Syria Edition · Book 2 · Unit 22 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 22  Proposals — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **The unit rests on 22.1 and the key says so three times.** **A proposal with a buried ask is answered by somebody who does not know what it asks for**, **and nothing in the other five cycles can repair that.** **Teach 22.1 until the ask sentence is automatic and then build on it.**',
  '**Ask the class to bring three things.** ⚠ **A proposal they have written or received** _(22.1)_. **Something they have wanted at work for more than six months** _(22.1)_. **And one proposal of theirs that was neither agreed nor refused** _(22.7)_.',
  '⚠ **The hardest teaching point is in 22.4 and it is uncomfortable.** **The cycle occasionally destroys a student\'s proposal, and that is not a fault in the cycle.** **Say so at the start: a proposal that cannot survive its own cheapest alternative being stated fairly was going to be refused in a room the writer was not in, and this way the refusal is of a smaller thing and arrives in June rather than October.**',
  '**22.7 carries the examination papers.** **Reading and Use of English Part 3** is word formation, **Writing Part 2** is a report, and **Listening Part 2** is sentence completion.',
  '⚠ **And one warning about 22.5, which is the cycle that exposes people.** **It asks a student to write the figure that would show their own idea had failed, and then to say the figure they privately expect.** **The gap between the two numbers is the real content of the cycle** — **say at the start that both numbers stay in the room, and do not record them on the board with names against them.**',
], C.lblue, C.navy));

// ===================== 22.1 =====================
out.push(pb());
out.push(h2('22.1  The thing you are asking for'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Collect the page numbers and the word counts and write them on the board as two columns.** **In most sets of papers brought in, the ask is on the second or third page and there are several hundred words in front of it.** **The two columns are the argument for the whole cycle and the class makes them in four minutes.**'));
out.push(A('**b** The ask: **2** and **5**. Not: **1**, **3** and **4**. ⚠ **4 is the one to read twice** — _I should like to request consideration of additional resource_ — **because it has the grammar of a request and asks for nothing at all.** **Ask what the reader is to write in the margin, and the honest answer is a question mark.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a thing, a cost and a date, in one sentence at the top**; and **a proposal whose ask is on page three is read by somebody who has already decided what it is about, and they are usually wrong.**'));
out.push(A('**b** **1** ⚠ **It came back with the single word _costs?_ in the margin, although the cost was in it, on page three** — **and the reader had taken the paper for a complaint about the call handlers.**   **2** ⚠ **_Some_ is a figure the writer has declined to state, and it hands the figure to the person paying** — **who will choose honestly and choose low, because low is what the word invited.**'));
out.push(NOTE('⚠ **The class will treat the buried ask as a drafting fault, and Ms Sabbagh\'s own explanation is better than anything a teacher can supply.** **The arithmetic took an afternoon; the three weeks were spent being unwilling to put a number where it could be refused.** **While the figure sat on page three the paper could still be believed to be under consideration.** ⚠ **Put that on the board as a sentence and ask the room, by a show of hands, who has done it.** **The hands go up, and the cycle stops being about drafting.** **Then the price: the paper is answered by somebody who does not know what it asks for, and in this case was forwarded to a section that could do nothing with it.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ _I am asking for one clerk, two days a week, from 1 October until the end of March._   **2** ⚠ _I am asking for four hours a week of the reader\'s time, starting in January._   **3** ⚠ _I am asking for nine replacement drives, which is about a tenth of the equipment line, delivered before the spring run._   **4** ⚠ **With no date, and the repair:** _I am asking for a second steel rule_ → _I am asking for a second steel rule, in use at the gate by 1 July._ **An ask with no start date can be agreed and never begun.**   **5** ⚠ **Hedged, so that you hear what it hands over:** _some additional support for the escalation handlers_ — **and the reader picks the smallest thing that could be called support, honestly, because the word invited it.**'));
out.push(A('⚠ **Mark 5 hardest.** **A student who repairs the hedge without naming what the hedge hands over has produced a better sentence and missed the point** — **the point is that _some_ is a decision transferred, not a word mislaid.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Escalation calls: the promises are not recorded.**',
  '_B:_ **I am asking for eight afternoons a year for eleven people, starting in October.**',
  '_A:_ **The archive index has never been checked.** ⚠ _(marked row)_',
  '_B:_ **I am asking for one checker two days a week for six months, starting in February — and the unit of cost is days of a clerk, because that is what you hold; I cannot price it in entries, because nobody budgets for entries.**',
  '_A:_ **The older press is down for a roller every spring.**',
  '_B:_ **I am asking for one spare roller held in the works, bought before February.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have no obvious unit of cost** — **an index, a reader\'s hours, a procedure, a minute-taker\'s habit** — **and the listener task is to catch a unit the reader does not control.** **Hours and people are controlled; goodwill, attention and priority are not.** **A pair who prices a thing in _co-operation_ has written a sentence nobody can say yes to.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The thing:** a second proof reader for the Thursday bulletin._',
  '_**The ask:** I am asking for four hours a week of one sub-editor\'s time on Wednesdays, from the first week of September._',
  '⚠ _**And how long I have been willing to write that sentence: eleven days.** **I have wanted the four hours for two years, and until this fortnight I had never put a figure on it** — **I had asked twice for _some help on Wednesdays_, and both times I was given an hour, which was an honest answer to what I wrote.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour wrote four pages about escalation calls and Mr Jabri sent it back with the single word costs in the margin. The cost was in it: it was on page three. Page one was the thirty-four escalations out of forty-one that involve an unrecorded promise — all of it true, and none of it asking for anything. He thought the paper was a complaint about the call handlers, and he told her so a fortnight later: he had read page one, formed a view, and nothing on page three could undo it. Which is the unit in one sentence — a proposal whose ask is on page three is read by somebody who has already decided what it is about, and they are usually wrong, and they are not reading carelessly; they are reading the way everybody reads. Omar asked what the ask needs, and three things in one sentence at the top: a thing, which is what you want; a cost, in the units the reader controls; and a date, which is when it starts. Nour gave hers — I am asking for eight afternoons a year for eleven people, starting in October — fourteen words, and it took her three weeks to be willing to write them. Asked why three weeks, she said that the moment the figure is on the page it can be refused, and while it was on page three she could believe the paper was still being considered. Which is the honest answer and the room should have it: a buried ask is not a drafting fault but a way of not being refused yet, and the price is that the paper is answered by somebody who does not know what it asks for. Rim asked about the words that look like asks, and there are six: some, a degree of, additional, appropriate, structured, a form of. Hiba said she writes some additional support on every form, and the person with the budget picks a number, always the smallest one that could be called support. And Jad asked about saying the figure out loud: once, with no run-up, because the run-up tells the reader the figure is an opening position.']));
out.push(A('⚠ **Mark the report on whether the reader is reported as reasonable.** **A version in which Mr Jabri read carelessly has lost the cycle** — **the sentence to look for is that he read page one, formed a view, and was reading the way everybody reads.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I am asking **for** eight afternoons **for** eleven people **for** October._ → _starting in October_.   ⚠ _I am asking you **to** eight afternoons._ → _for eight afternoons_.   ⚠ _**Some** additional support._ → **give the figure.**   ⚠ _Four hundred and forty **hour**._ → _hours_.   ⚠ _I would **like to request consideration of**._ → _I am asking for_.'));
out.push(NOTE('⚠ **The six words are worth putting on the board on the first morning and leaving up for the whole unit:** _some_ · _a degree of_ · _additional_ · _appropriate_ · _structured_ · _a form of_. **Every paper a student brings in for the rest of the week will contain one of them.** ⚠ **And the second half of the teaching is what makes the list matter: a word that leaves the figure open does not leave it open.** **It hands the figure to the person paying, who will choose honestly and choose low, because low is what the word invited.** **Ms Nasser\'s _some additional support_ got her an hour, twice, and both answers were fair to what she had written** — **which is the example to keep, because nobody in the room defends it and most of the room has written it.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because the October rota is drawn on 15 June**, **so an answer on 20 June costs until January whatever it says.** **The date has a mechanism behind it, which is why it is kept** — **a deadline without one is read as pressure.**'));
out.push(A('**2** ⚠ **That it was read as a complaint about the call handlers, and that it was her own fault:** **the first page gave the figures and asked for nothing, so the figures were the whole paper.** **Taking the fault is what makes the sentence believed.**'));
out.push(A('**3** ⚠ **Not on calculating** — **the arithmetic took an afternoon.** **They were spent being unwilling to put a number where somebody could refuse it, and she says she could not have said that in February.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: A PROPOSAL** _(page 1 of 2 · 14 August · to Mr Hamwi)_',
  '**What I am asking for.** ⚠ **Four hours a week of one sub-editor\'s time on Wednesdays, from the first week of September.** **About a hundred and sixty hours in the year, and no money.**',
  '**When I need the answer, and why that date.** ⚠ **By 25 August.** **The September rota is posted on 28 August** — **so an answer after that date costs the whole of the autumn whatever it says.**',
  '**What it is not.** ⚠ **It is not a complaint about the quality of the copy that reaches me.** **I am saying so because my note of April was read as one.**',
  '**The figure, so that it can be refused properly.** **Four hours is half a Wednesday.** ⚠ **A hundred and sixty hours in the year is about four weeks of one person spread across one day a week and forty-two issues.**',
  '**What I am not asking for.** ⚠ **Not another post, not a longer deadline, and not the Thursday print time moved.**',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: A PROPOSAL** _(page 1 of 2 · 14 August · to Mr Hamwi)_',
  '**What I am asking for.** ⚠ **Four hours a week of one sub-editor\'s time on Wednesdays, from the first week of September.** **About a hundred and sixty hours of staff time in the year, and no money at all.**',
  '**When I need the answer, and why that date.** ⚠ **By 25 August.** **The September rota is posted on 28 August and the sub-editors arrange their own Wednesdays round it** — **so an answer after the twenty-eighth costs the whole autumn whatever it says, and I would rather have a no on the twenty-fifth than a yes in October.**',
  '**What it is not.** ⚠ **It is not a complaint about the copy that reaches me.** **I am putting that in the first paragraph because my note of April was read as one, and it was my fault: the note gave four examples of bad copy and asked for nothing, so the examples were the whole note.**',
  '**The figure, so that it can be refused properly.** **Four hours is half a Wednesday.** ⚠ **A hundred and sixty hours in the year is about four weeks of one person, spread across one day a week and forty-two issues** — **and the comparison I would want if I were you is on page 2, which is what the uncorrected errors cost us in reprinted pages.**',
  '**What I am not asking for.** ⚠ **Not another post. Not a longer Thursday deadline. And not the print time moved, which I know is the thing you were asked for last year.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the ask in one sentence with a cost and a date.** You have all three in the first line. **The line I copied is _about a hundred and sixty hours of staff time in the year, and no money at all_** — and _no money at all_ is doing more work than the hours figure._',
  '_**Criterion: an answer date with a mechanism.** The twenty-eighth of August and the rota. **_I would rather have a no on the twenty-fifth than a yes in October_ is the sentence that makes the date credible**, because it costs you something to say._',
  '_**Keep:** _the examples were the whole note._ **It works because it explains the misreading without asking the reader to accept any blame for it.**_',
  '_**Ranking of the slip I was given:** the mechanism criterion first, because it made me give the rota date; the renunciations second; the cost criterion last, because the figure was easy once I had divided it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The second question is the stage and the first is only the way in.** **Ask how long each student has been willing to write their own ask sentence, and keep the answers on the board without names.** **In this room the gap between wanting a thing and being willing to put a figure on it has run from three weeks to four years** — **and the four-year answer teaches the cycle better than the three-week one.** **Do not let the room treat it as a confession; it is the commonest professional habit in the book.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The ask:** I am asking for one morning a month of the works engineer\'s time to look at plates before a run, from October._',
  '_**Not asking for:** not a plate store, not a second guillotine, and not a change to the Thursday schedule._',
  '⚠ _**And the one I would quite like is the plate store.** **I have wanted it since the winter and ruling it out was the only line that took any effort.**_',
  '_**What I noticed while writing it:** the morning a month is twelve mornings, and my first draft said _regular attention to plate condition_, which would have got me somebody looking at a plate once._',
]));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  The problem, in the reader\'s units'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The instruction that makes this stage work is the second half:** **price it in a unit the reader counts and not in the one you feel it in.** **Collect the units the room offers and sort them on the board into _they hold a book of this_ and _they do not_.** **Frustration, morale, pressure and goodwill all go in the second column, and all four are real.**'));
out.push(A('**b** Priced in the reader\'s units: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 is the one that divides a class** — _morale in the section is affected_ — **because it is true, important, and unusable.** **Say plainly that it belongs in a different conversation and not in a paper that asks for hours.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is honest and it is unusable**; and **a reader who holds a budget cannot spend anything against frustration, however real it is.**'));
out.push(A('**b** **1** ⚠ **Nine lost working days a quarter at the two sites, taken from the registry\'s own closure book** — **which the reader can check in four minutes without asking him.**   **2** ⚠ **A figure from your own records is an assertion and a figure from theirs is a fact** — **and you use theirs even when yours is better.**'));
out.push(NOTE('⚠ **The finding of this cycle is one sentence and it should go on the board before the dialogue is read a second time:** **a figure from your own records is an assertion; a figure from theirs is a fact.** **Students resist it, because their own figures are usually better kept.** ⚠ **The answer is not about accuracy at all.** **A reader who can walk into a room and check a number in four minutes does not have to decide whether to trust the person who gave it** — **and that decision, not the number, is what stops most proposals.** **Then the second half, which is where the real teaching is: Mr Darwish found the drive fault by reading their book line by line, after eighteen months of arguing about travel time.** **Nobody had read it because it was their book.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **In hours:** _three hundred repeat calls at about forty minutes each is two hundred hours a year._   **2** ⚠ **In their records:** _nine lost working days a quarter, from the registry\'s own closure book for the four quarters to March._   **3** ⚠ **With the conversion shown:** _two hundred hours a year against four hundred and forty once_ — **which does not favour the proposal in the first year and favours it in every year after it.**   **4** ⚠ **Where the figure does not exist:** _nobody records what a closed registry day costs the public at the counter; the clerk at Salkhad says between twenty and forty people, and that is a recollection and not a record._   **5** ⚠ **Against the proposal, with the argument that survives:** _sixty days of engineer time against thirty-six lost days_ — **and the case is that the sixty are paid once and buy a four-hour response for every year after this one.**'));
out.push(A('⚠ **Mark 4 and 5 hardest.** **In 4 the error is a confident number where there is none, and it costs the writer every other figure on the page.** **In 5 a student who finds the conversion against them and then quietly adjusts the figure has learned the wrong lesson from the cycle.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Promises in escalation calls are not recorded.**',
  '_B:_ **About three hundred repeat calls a year, from the switchboard\'s own call book for the twelve months to March.**',
  '_A:_ **The archive index has never been checked.** ⚠ _(marked row)_',
  '_B:_ **Nobody counts this anywhere. What there is: four hundred entries loaded in March against no criteria, and two complaints from readers who were sent to the wrong page. To know properly, somebody would have to check a hundred entries against their pages, which is two days.**',
  '_A:_ **The older press loses a week every spring.**',
  '_B:_ **Six working days last spring and five the spring before, from the works\' own machine book.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have no record at all, and the answer is not a guess dressed as a figure.** **It is the three-part sentence: nobody counts this, here is the only count there is, and here is what it would take to know** — **which is a smaller claim and a stronger one.** **The listener task is the figure, its unit and whose book it came from, and the answer _mine_ is the one to question every time.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The problem priced in his units:** nineteen pages reprinted in the year to July, from the press\'s own reprint docket and not from my own list._',
  '_**The conversion:** nineteen pages is about eleven hours of press time and two reams of paper. **What I am asking for is a hundred and sixty hours of a sub-editor.**_',
  '⚠ _**Which is heavily against me, and I am not going to hide it.** **The argument that survives is not the press time.** **It is that four of the nineteen were corrections to a ministry notice, and a wrong ministry notice is reprinted at our cost and read by somebody who then telephones the ministry.**_',
  '_**And the figure I do not have:** nobody counts the telephone calls to the ministry. I asked, and there is no log at either end._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar priced the fortnight at the two distant sites badly the first time: he wrote that the delay was unacceptable and the registry staff demoralised, both true, and Mr Jabri cannot spend anything against either. The second time he wrote nine lost working days a quarter at the two sites, which he took from the registry\'s own closure book and not from his own records. Asked why from their book, he said because the reader can check it in four minutes without asking him, and a figure he can check is a figure he does not have to decide whether to trust. Which is the finding of the cycle: a figure from your own records is an assertion and a figure from theirs is a fact, and you use theirs even when yours is better. Nour asked what happens if their book does not record it, and then you say so, and say what you have instead, and say what it would take to know properly — nobody records this, my own log gives nine days, and it is the only count there is. A reader who is told the strength of a figure will use it, and one who is given a confident number and finds out later will not use anything of yours again. Rim asked how big the problem figure has to be, and bigger than the ask, in the same units and in the same paragraph, because four hundred and forty hours against three hundred repeat calls is not a comparison but two facts. So Omar has to convert, and has to show the conversion: three hundred repeat calls at about forty minutes each is two hundred hours, against four hundred and forty for the afternoons — which does not favour the proposal, and that is the paragraph the reader believes. Jad asked whether it is not a mistake to show a figure against yourself, and it is the only way to be believed about the others; and in that example the case is still there, because the four hundred and forty are paid once and the two hundred are paid every year.']));
out.push(A('⚠ **Mark the report on the drive finding, which students leave out because it arrives last.** **It is the strongest thing in the cycle:** **eleven of the thirty-six lost days were the same fault on a machine at nine of the eleven sites**, **found by reading the reader\'s own book line by line after eighteen months of arguing about travel.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _Three hundred repeat calls **in** a year._ → _a year_.   ⚠ _Nine lost days **by** quarter._ → _a quarter_.   ⚠ _It cost **us** about **two hundreds** hours._ → _two hundred hours_.   ⚠ _**Against** of four hundred and forty._ → _against four hundred and forty_.   ⚠ _The figure is **from** their book **of** closures._ → _from their closure book_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because the term has to be defined before the figure means anything** — **and because he has counted only full closures, which makes his figure smaller than the truth.** **A writer who says which way the definition errs is believed about the size.**'));
out.push(A('**2** ⚠ **Sixty days of engineer time against thirty-six lost days: the comparison is against him in the first year.** **The argument he makes instead is that the sixty buy a four-hour response in place of a fortnight for every year after this one, at the cost of the rota and not of a new post** — **so the case is in the second year and he will not pretend it is in the first.**'));
out.push(A('**3** ⚠ **The drive finding:** **eleven of the thirty-six lost days were the same fault on a model of machine that is at nine of the eleven sites** — **which means about a third of the problem is not a travel problem at all, and two of the sixty days he is asking for should be spent replacing nine drives.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: THE PROBLEM** _(page 2 of 2 · 14 August · to Mr Hamwi)_',
  '**The figure, and it is not mine.** ⚠ **Nineteen pages reprinted in the year to July, from the press\'s own reprint docket.** **You can check it without asking me: the dockets are in the bindery office and each is initialled.**',
  '**What a reprinted page means.** ⚠ **A page pulped and run again** — **not a page with an error that was left standing, and not a correction carried in the following issue.** **I have counted only pulped pages, which makes my figure smaller than the truth.**',
  '**The conversion, which does not favour what I am asking for.** ⚠ **Nineteen pages is about eleven hours of press time.** **I am asking for a hundred and sixty hours of a sub-editor.**',
  '**So the argument the arithmetic supports.** ⚠ **Four of the nineteen were ministry notices, and a wrong ministry notice is read by somebody who then telephones the ministry.**',
  '**One figure I do not have.** ⚠ **Nobody counts those telephone calls, at either end, and I am not going to invent a number for them.**',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: THE PROBLEM** _(page 2 of 2 · 14 August · to Mr Hamwi)_',
  '**The figure, and it is not mine.** ⚠ **Nineteen pages reprinted in the year to July, taken from the press\'s own reprint docket.** **You can check it without asking me: the dockets are in the bindery office and every one of them is initialled.**',
  '**What a reprinted page means, because the term has to be settled before the figure means anything.** ⚠ **A page pulped and run again** — **not a page with an error left standing, and not a correction carried in the following issue.** **I have counted only pulped pages, and the effect of that is to make my figure smaller than the truth rather than larger.**',
  '**The conversion, which does not favour what I am asking for.** ⚠ **Nineteen pages is about eleven hours of press time and two reams of paper.** **I am asking for a hundred and sixty hours of a sub-editor, which is fifteen times the press time I am saving, and I would rather put that sentence on this page than let you do the division yourself.**',
  '**So here is the argument the arithmetic actually supports.** ⚠ **Four of the nineteen were ministry notices.** **A wrong ministry notice is reprinted at our cost and is read in the meantime by somebody who telephones the ministry about it** — **and that is the thing the eleven hours do not measure.**',
  '**One figure I do not have.** ⚠ **Nobody counts those telephone calls, at either end.** **I asked at the ministry and there is no log, and I am not going to invent a number.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the figure from the reader\'s records with a way to check it.** The dockets and the initials. **The line I copied is _you can check it without asking me_** — six words, and they do the work of a paragraph._',
  '_**Criterion: the conversion shown even against you.** **_Fifteen times the press time I am saving_ is the bravest line on the page**, and it is the reason the ministry-notice argument is believed._',
  '_**Keep:** _I would rather put that sentence on this page than let you do the division yourself._ **It works because it names what the reader was about to do and does it for them.**_',
  '_**Ranking of the slip I was given:** the conversion criterion first, because it is the one most papers fail; the missing-figure criterion second; the definition criterion last, since _pulped_ settled it in one word._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Keep the tally on the board: conversions that favour the proposal against conversions that do not.** **In this room it has run at about half and half** — **and a room in which every conversion favours every proposal has not done the arithmetic, which is worth saying out loud without naming anybody.** **Then the harder question, which is whether the conversion changed the ask.** **In 22.4 it will, and the students who answer honestly here will have less to undo there.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Priced in their records:** eleven refused deliveries in the four months to April, from the ministry gate book. **I have the page and the gate clerk initialled a copy for me.**_',
  '_**The conversion:** eleven refusals against a vehicle for two days a week for seven months, which is about sixty vehicle-days._',
  '⚠ _**And it goes against me on the year.** **Eleven refusals are not sixty vehicle-days of harm by any arithmetic I can do.** **What survives is that a refused ministry delivery is re-booked at the back of a queue, and the queue in March was nine days long.**_',
  '_**The figure I do not have:** nobody records how long the re-booking queue is, except the ministry, and they would not give it to me._',
]));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  What you are not asking for'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The stage turns on the second question and the room will not get there alone.** **Collect the three fears first** — **a post, a precedent, a second request in March** — **and then ask where any of the three is ruled out.** **The answer is nowhere, in almost every case, because it had not occurred to the writer that the reader was afraid of anything.**'));
out.push(A('**b** Rules something out: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the one to dwell on** — _this is a modest first step_ — **because it is the opposite of a renunciation.** **It promises a second step and declines to say how big, and it is the sentence the reader was already afraid of, written by the writer in their own hand.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **whether the figure is the last figure**; and **nothing on a page that only says what it asks for can answer that.**'));
out.push(A('**b** **1** ⚠ **A post, a room of their own, and a spring request for the second half** — **and the one she minded was the room, which she has wanted for two years.**   **2** ⚠ **Strike it out.** **If it genuinely is the first of several, write the several** — _eight now and eight in the year after next if the first eight show what I think they will show_ — **and the reader is then deciding about sixteen, which is a decision they can take.**'));
out.push(NOTE('⚠ **This cycle is the one that most changes a class\'s results, and the reason is in the arithmetic rather than in the manners.** **Ms Nasser\'s paper was agreed in eleven days, and the reader told her afterwards that the room was the only thing he had been worried about** — **he had read the paper as the beginning of a building conversation.** ⚠ **Put the general rule up and make the room test it against their own experience: what a reader of a proposal is deciding is not what the proposal is about, but whether your figure is the last figure.** **Then the rule that keeps the paragraph honest: three renunciations, and one of them has to be something you actually want.** **Three things you never wanted anyway can be seen through in four seconds, and are worse than nothing, because they tell the reader you are managing them.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ _I am not asking for a post._   **2** ⚠ _I am not asking you to apply this to the other three sections, and I shall not cite it if somebody else does._   **3** ⚠ _I shall not come back in the spring for the second half; I shall ask in the autumn of next year, and only if the first half has done what I say it will._   **4** ⚠ **One you want:** _I am not asking for a room of our own. I have wanted a room for two years and I have asked for one twice, and it is not in this paper and will not be in it._   **5** ⚠ **The several, written out:** _sixteen afternoons over two years; I am asking for eight now and eight in the autumn of next year_ — **instead of** _a modest first step_.'));
out.push(A('⚠ **Mark 4 hardest and mark it on the absence of a trailing clause.** **The commonest failure is a renunciation with an escape at the end** — _which would of course still be desirable_, _although I am not ruling it out indefinitely_ — **and the escape re-opens everything the sentence shut.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Eight afternoons a year for eleven people.**',
  '_B:_ **I am not asking for a post. Nor am I asking for the afternoons to be protected from an emergency. And I shall not come back for the other eleven people in the spring. The one I want is the protection — if a ward goes down the afternoon is lost and I know it.**',
  '_A:_ **Nine replacement drives, as a first batch.** ⚠ _(marked row)_',
  '_B:_ **This genuinely is the first of several and I am not going to rule anything out. Nine drives now and the remaining twelve over the two years after, at about six a year — so you are deciding about twenty-one and not about nine with something behind it.**',
  '_A:_ **A second steel rule for the gate.**',
  '_B:_ **I am not asking for a third, not asking for a gauge, and not asking for anything at the other two gates.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows genuinely are the first of several** — **drives, a trial, an index, a procedure** — **and for these the honest answer is the several, written out with dates, and not a renunciation at all.** **_A first batch_ is _a first step_ wearing work clothes, and the listener task is to catch it.** **A pair that rules out the rest of the drives has made a promise they will break in the spring.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**1** I am not asking for another sub-editor._',
  '_**2** I am not asking for the Thursday deadline to be moved._',
  '_**3** I shall not come back for a second Wednesday morning; if four hours is not enough I shall say so in the April letter and ask you to look at the whole arrangement, not to add to it._',
  '⚠ _**And the one I want is the deadline.** **I have wanted the Thursday deadline moved by two hours since the spring of last year, and I know that you were asked for it last year and refused it** — **which is exactly why it is not in this paper.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba\'s training proposal was agreed in eleven days, and what the page did was three sentences near the top: I am not asking for a post, I am not asking for a room of our own, and I shall not come back in the spring for the other half. Two cost her nothing and one cost her something real — the room. She wants a room, she has wanted one for two years, and ruling it out in writing was the hardest line on the page. What it bought was the eleven days: Mr Jabri told her afterwards that the room was the only thing he had been worried about, because he had read the paper as the beginning of a building conversation. Which is what a reader of a proposal is actually deciding, and it is not what the proposal is about: they are deciding whether your figure is the last figure, and nothing on a page that says only what it asks for can answer that. Nour asked what to do if you might want the room later, and then you say so now and put a date on it, or you rule it out and keep your word — what you must not do is leave it unsaid and ask in March, because the March request does not cost you a room, it costs you every figure you ever write again. Omar asked whether that is not giving away a position, and it is giving away a position you were not going to be given: she was never getting the room in the same paper as the afternoons, and the silence about it bought her eleven weeks of hesitation instead of eleven days. Rim asked how many there should be, and three, one of which has to be something you actually want, because three things you never wanted anyway can be seen through in four seconds and are worse than nothing. And Jad asked about a modest first step, which is the sentence the reader fears written by the writer in their own hand.']));
out.push(A('⚠ **Mark the report on the eleven days and the room.** **Students report the three sentences and omit the reader\'s own remark, which is the evidence for the whole cycle** — **the room was the only thing he had been worried about, and he had read the paper as the beginning of a building conversation.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I am not asking **a** post._ → _for a post_.   ⚠ _**Neither** am I asking for a room._ → _nor am I asking_.   ⚠ _I **will not** come back in the spring._ → _I shall not_ **in a written undertaking.**   ⚠ _**Although** it would still be desirable._ → **strike the whole clause.**   ⚠ _A modest **firsts** step._ → **strike it out and write the several.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The room.** **She has wanted one for two years and asked twice** — **and she says it is not in this paper and will not be in it, and if she asks again it will be a separate request on its own merits in a different year.**'));
out.push(A('**2** ⚠ **Eight afternoons a year is four hundred and forty hours and a post is about seventeen hundred.** **If she needed a post she should be asking for a post** — **and a paper that asks for four hundred hours while meaning seventeen hundred will be found out in the second year.** **It is arithmetic and not generosity, and arithmetic is not doubted.**'));
out.push(A('**3** ⚠ **A clause explaining that a room would of course still be desirable** — **and the note calls it the sigh, in writing.** **Three versions out of four had it, and she wrote the sentence four times.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: WHAT I AM NOT ASKING FOR** _(page 2 of 2 · 14 August · to Mr Hamwi)_',
  '**Three things, and one of them I want.** ⚠ **I am not asking for another sub-editor.** **I am not asking for the Thursday deadline to be moved.** **And I shall not come back for a second Wednesday morning.**',
  '**The one I want is the deadline.** ⚠ **I have wanted it moved by two hours since last spring, and I know you were asked for it last year and refused** — **which is why it is not in this paper and will not be.**',
  '**Why another sub-editor is ruled out, which is arithmetic.** ⚠ **A hundred and sixty hours a year is about four weeks; a post is about forty-six.**',
  '**Instead of a first step.** ⚠ **If four hours is not enough I shall say so in the April letter and ask you to look at the whole arrangement, not to add to it.**',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: WHAT I AM NOT ASKING FOR** _(page 2 of 2 · 14 August · to Mr Hamwi)_',
  '**Three things, and one of them I want.** ⚠ **I am not asking for another sub-editor.** **I am not asking for the Thursday deadline to be moved.** **And I shall not come back for a second Wednesday morning.**',
  '**The one I want is the deadline, and I am saying so rather than letting you work it out.** ⚠ **I have wanted it moved by two hours since the spring of last year.** **I also know that you were asked for it last year by the print room and refused it, for reasons that had nothing to do with me** — **which is exactly why it is not in this paper, and it will not be in the April letter either.**',
  '**Why another sub-editor is ruled out, which is arithmetic and not generosity.** ⚠ **A hundred and sixty hours a year is about four working weeks and a post is about forty-six.** **If I needed a post I should be asking for a post, and a paper that asks for four weeks while meaning forty-six is a paper that gets found out in the second year.**',
  '**And instead of calling this a first step, which is the sentence you were afraid of.** ⚠ **If four hours a week turns out not to be enough, I shall say so in the April letter and ask you to look at the whole arrangement** — **not to add an hour to it.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the one you want, named as such.** The deadline, and you go further by naming the print room\'s refusal. **The line I copied is _for reasons that had nothing to do with me_** — which is the line that stops it reading as a complaint._',
  '_**Criterion: arithmetic rather than generosity.** Four weeks against forty-six. **It is the clearest paragraph here and it needed no adjectives at all.**_',
  '_**Keep:** _not to add an hour to it._ **Six words, and they rule out the thing a reader expects to happen next, which is the whole job of the paragraph.**_',
  '_**Ranking of the slip I was given:** the one-you-want criterion first, because it is what made this page worth reading; the arithmetic second; the no-first-step criterion last, because you had already removed it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The listening task is the trailing clause and the room is better at hearing it than the speaker is.** **Almost every first draft has one, and it is always at the end of the sentence** — **so ask the room to raise a hand the moment they hear it rather than waiting for the end.** **Then the second question: how long have you wanted the thing you have just given up?** **The answers are long, and the room should hear them, because the length is what makes the renunciation worth something to the reader.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**1** I am not asking for a plate store._',
  '_**2** I am not asking for the morning to be the same morning every month._',
  '_**3** I shall not ask for a second morning before next October, whatever the plates look like in the spring._',
  '⚠ _**The one I want is the plate store**, and the arithmetic: twelve mornings a year is about two days of an engineer; a plate store is a room, a rack and somebody to keep it._',
  '_**And the _first step_ I found in my own writing:** my note of June said _an initial look at plate condition_. **I have replaced it with: twelve mornings this year, and I shall ask again in October of next year if the reprint figure has not moved.**_',
]));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  The alternative you considered and rejected'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Ask for the cheapest thing and then ask whether it is in the paper, and let the silence stand for a moment.** **It is almost never in the paper, and it is always the first thing the reader thinks of** — **which means the reader gets there alone and in silence, and the writer is not in the room when they do.**'));
out.push(A('**b** Sets out an alternative honestly: **2** and **5**. Not: **1**, **3** and **4**. ⚠ **4 is the one to put under the light** — _doing nothing would clearly be unacceptable_ — **because _doing nothing_ is the only option in the paper whose cost the writer already knows.** **It is the figure from 22.2, and a paper that calls it unacceptable has declined to use it.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the reader finds it alone, and concludes either that you had not thought of it or that you had hidden it**; and **both conclusions cost more than the option would have.**'));
out.push(A('**b** **1** ⚠ **A rota change that costs nothing and ends the lateness on two of his four late days** — **half the problem for no money at all.**   **2** ⚠ **It is always on the list and never dismissed in one line, because it is what will happen if you are refused** — **so you already know its cost, and it is the figure from 22.2.**'));
out.push(NOTE('⚠ **This is the cycle that occasionally destroys a student\'s proposal, and the teacher has to say so before Stage 3 rather than after it.** **The honest form of the warning is Ms Huda\'s: a proposal that cannot survive its own cheapest alternative being stated fairly was going to be refused in a room the writer was not in** — **and this way the writer is there, the refusal is of a smaller thing, and it arrives in June instead of October.** ⚠ **Then give the room the two examples that make it bearable.** **Mr Darwish put nine drives into his own paper against himself in 22.2.** **And Mr Ayoub\'s ask went from five days of a vehicle to two, because writing the rota sentence at full value found the real figure** — **the cycle did not weaken the paper; it found what the paper should have said.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ _The cheaper option is a rota change, which costs nothing._   **2** ⚠ **At full value:** _it would end the lateness on two of the four late days, which is half the problem for no money._   **3** ⚠ **The mechanism:** _the other two are ministry deliveries and the gate closes at eleven; one vehicle cannot be in two places and the third has been off the road since February._   **4** ⚠ **_Doing nothing_, with its figure:** _four late days a month on ministry deliveries, and eleven refused deliveries in the four months to April, from the ministry\'s own gate book._   **5** ⚠ **Where the cheap option wins:** _a blade change at a tenth of the cost ends six of the eight trim faults_ — **so the paper to write is the blade change now, and the guillotine in the autumn only if the remaining two faults are still there.**'));
out.push(A('⚠ **Mark 2 and 5 hardest.** **In 2 the error is a grudging achievement** — _it would help a little_ — **which the reader reads as concealment.** **In 5 the student has to abandon their own proposal on the page, and the ones who do it are the ones whose papers are agreed.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **A second vehicle on the Harasta road.**',
  '_B:_ **The cheaper option is a rota change, which costs nothing, and it would end the lateness on two of the four late days. It will not do because the other two are ministry deliveries and the gate closes at eleven, and one vehicle cannot be in two places.**',
  '_A:_ **A new guillotine for the trim faults.** ⚠ _(marked row)_',
  '_B:_ **Here the cheap option wins. A blade change at a tenth of the cost ends six of the eight faults, so the paper I would write is the blade change this month and the guillotine next autumn only if the other two faults are still there.**',
  '_A:_ **Eight afternoons for the escalation handlers.**',
  '_B:_ **The cheaper option is a printed promise slip at every desk, which costs nothing. It catches the promises made in writing and none of the thirty-one made on the telephone.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **In the four marked rows the cheap option wins** — **a blade change against a guillotine, a sampling rule against a checker, a rota against an analyser, a shorter bulletin against a second sub-editor** — **and the pairs must say what paper they would write instead.** **A pair that defends all ten proposals has not done the cycle, and the listener task should include the count.** **In this room between two and four of the ten are usually conceded, and the concessions are the right ones.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The cheapest alternative:** shortening the bulletin by one page, which costs nothing and would give the existing sub-editor about forty minutes more on each issue._',
  '_**At full value:** it would probably catch a third of the errors I am worried about, and it would save the paper of the page as well._',
  '_**The mechanism of the rejection:** the page I would cut is the ministry notices page, and four of the nineteen reprints were ministry notices — so cutting it moves the errors to a page we are obliged to carry and cannot shorten._',
  '⚠ _**And has my ask got smaller? Yes.** **I was asking for four hours a week and I am now asking for four hours a week in the thirty weeks the ministry page runs, which is about a hundred and twenty hours instead of a hundred and sixty.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq asked for a second vehicle on the Harasta road, and the cheaper option is a rota change that costs nothing and solves two of his four late deliveries. It was not in the paper: he had a paragraph saying no alternative had been identified, which was not true — he had identified it in March and did not like it. Mr Jabri drives that road twice a month and would have thought of the rota in about nine seconds, and then the question is not about vehicles but about why it was not in the paper. Which is the cost of leaving it out, and it is larger than the option: a reader who finds an option you did not mention concludes either that you had not thought of it or that you had hidden it, and both cost more than the option ever would. Nour asked what the paragraph looks like, and three sentences, the first of which has to be generous — what the cheaper option is, what it would actually achieve, and why it will not do — and the achievement has to be the real figure and not a grudging one. Tareq gave his: a rota change costs nothing and would end the lateness on two of the four days, which is half his problem for no money at all. Then the rejection in the same voice: the other two days are the Harasta run and the rota cannot move them, because both are ministry deliveries with a fixed gate time and the gate closes at eleven. Rim asked what happens if the cheap option fixes most of it, and then you propose the cheap option and ask for the rest later, and you have been more useful than your original paper was. Hiba asked about doing nothing, which is always on the list and never dismissed in one line: it is what will happen if you are refused, so you already know its cost, and it is the figure from 22.2. A paper that calls it unacceptable has declined to use the only figure it has. And Jad asked about reading the rejected option out loud: at full value, at the same speed as your own proposal, because people read the alternative quickly and the rejection slowly and the room hears exactly that.']));
out.push(A('⚠ **Mark the report on the nine seconds, which students soften.** **Mr Jabri drives that road twice a month and would have thought of the rota in about nine seconds** — **and then the question is not about vehicles but about why it was not in the paper.** **That is the cost of leaving it out and it is larger than the option.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I considered it and **reject** it because._ → _rejected it_.   ⚠ _The cheaper option **is cost** nothing._ → _costs nothing_.   ⚠ _It would **end** the lateness **in** two days._ → _on two of the four days_.   ⚠ _**Doing nothing** would be **unacceptable**._ → **give the figure instead.**   ⚠ _No alternative **has been identified**._ → **strike it out; one always has been.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The rota change costs nothing and would end the lateness on two of the four late days** — **half the problem for no money.** **The mechanism that stops it doing the rest is the gate: the remaining two are ministry deliveries, the gate closes at eleven, one vehicle cannot be in two places, and the third has been off the road since February.**'));
out.push(A('**2** ⚠ **Hiring a vehicle for the two days.** **It works, it costs about a third more over a year than buying, and at eighteen months it has cost more than the vehicle** — **and he says that if the decision has to be this year\'s money rather than next year\'s, hiring is the better answer and he would not argue with it.**'));
out.push(A('**3** ⚠ **The smaller ask.** **While he was writing the rota sentence badly the vehicle was five days; the first time he wrote it as though he were proposing it, the answer was two.** **The note says the cycle did not weaken the paper but found the real figure.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: WHAT I CONSIDERED INSTEAD** _(page 2 of 3 · 14 August · to Mr Hamwi)_',
  '**The cheaper option, and it is a good one.** ⚠ **Cutting one page costs nothing and would give the existing sub-editor about forty minutes more on each issue** — **and you would be entitled to ask why I am not simply doing that.**',
  '**Why it will not do, and the mechanism is the ministry page.** ⚠ **The page I would cut is the one we are obliged to carry, and four of the nineteen reprints were on it.**',
  '**What I am therefore asking for, which is smaller than in my note of June.** ⚠ **Four hours a week in the thirty weeks the ministry page runs, and not in all forty-two.**',
  '**_Doing nothing_, with its figure.** ⚠ **Nineteen reprinted pages in the year to July, from the press\'s own docket.**',
  '**The third option, which somebody will raise.** ⚠ **Paying the press to read the proof.** **It works, and it costs about four times the sub-editor\'s hours. If the hours cannot be found at all, it is the better answer.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: WHAT I CONSIDERED INSTEAD** _(page 2 of 3 · 14 August · to Mr Hamwi)_',
  '**The cheaper option, and it is a good one.** ⚠ **Cutting the bulletin by one page costs nothing at all and would give the existing sub-editor about forty minutes more on each issue** — **which would probably catch a third of the errors I am worried about, and would save the paper of the page as well.** **You would be entitled to ask why I am not simply doing that and stopping.**',
  '**Why it will not do, and the mechanism is the ministry page.** ⚠ **The page I would cut is the ministry notices page, because it is the only one with no readership figures behind it** — **and four of the nineteen reprints were ministry notices.** **Cutting it moves my worst errors onto a page we are obliged to carry and cannot shorten.**',
  '**What I am therefore asking for, which is smaller than my note of June.** ⚠ **Four hours a week in the thirty weeks the ministry page runs, and not in all forty-two** — **about a hundred and twenty hours instead of a hundred and sixty.**',
  '**_Doing nothing_, with its figure.** ⚠ **Nineteen reprinted pages in the year to July, from the press\'s own docket, of which four were ministry notices.**',
  '**The third option, which somebody will raise.** ⚠ **Paying the press to read the proof.** **It works, and it costs about four times the hours I am asking for. If the hours cannot be found at all, it is the better answer and I would not argue with it.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the cheaper option stated generously.** You give it a third of the errors and the paper saved. **The line I copied is _you would be entitled to ask why I am not simply doing that and stopping_** — the reader\'s objection in the reader\'s words._',
  '_**Criterion: a mechanism in the rejection.** The obligation to carry the page. **_Cannot shorten_ is the mechanism and it is checkable, which a preference would not be.**_',
  '_**Keep:** _about a hundred and twenty hours instead of a hundred and sixty._ **It works because the ask has visibly shrunk on the page, which is the most persuasive thing in the unit and cannot be faked.**_',
  '_**Ranking of the slip I was given:** the generosity criterion first, because my own first draft was grudging; the smaller-ask criterion second; the third-option criterion last, because nobody was going to raise it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Keep the count of proposals that shrank, and say what the count means.** **The ones that shrank are the ones that will be agreed, and in this room about half of them shrink.** **Then put the harder question and wait for it: did you know about the cheap option before today, and for how long?** **Mr Ayoub knew in March and left it out because he had already decided what he wanted** — **and most of the room will recognise that, which is why the question is worth asking in front of everybody.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The cheapest alternative, written as though I were proposing it:** a printed promise slip at every desk. It costs nothing, it takes four minutes to explain, and it would catch every promise that is made in writing._',
  '_**The mechanism of my rejection:** thirty-one of the thirty-four promises are made on the telephone while the caller is still on the line, and nobody writes anything down during a call they are trying to end._',
  '⚠ _**And my ask has got smaller.** **I was going to ask for eight afternoons and a slip at every desk. The slip is going in this month on my own authority and is not in the paper at all** — **so the paper is eight afternoons, and nothing else.**_',
]));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  What it looks like if it fails'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Two questions and the second is the one that bites:** _how would anybody know_, **and** _in what month_. **In almost every case the honest answer is that nobody would ever know, because nothing was ever going to be measured** — **and a thing that cannot fail cannot be shown to have worked either, which is 21.1 arriving in a different unit and is worth naming as such.**'));
out.push(A('**b** A failure condition: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the one that sounds like one** — _progress will be monitored_ — **and it has nobody in it, no figure in it and no month in it.** **Mr Attar wrote it in his own first draft and it took him a week to see what was missing.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **money with no end to it**; and **a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who believes it is working.**'));
out.push(A('**b** **1** ⚠ _If by the end of March fewer than sixty of the hundred and ten engineers have posted a question, the forum has not worked and I shall say so in writing._ **It cost him two nights, because sixty is real and he privately expects about forty-five.**   **2** ⚠ **Somebody who is not you, because you will be the last person to believe it** — **name the person and the month, and the sentence has a mechanism instead of an intention.**'));
out.push(NOTE('⚠ **This is the cycle that exposes people and the teacher should say at the start that both numbers stay in the room.** **Mr Attar\'s answer is the whole lesson and it should be read aloud twice: forty-five is the number he would be able to explain away, and sixty is the number that would make the thing worth the machine it sits on.** ⚠ **Then the sentence that makes the cycle serve the student rather than the reader:** **a failure condition is the only thing that stops you, in March, from being a person who explains why forty-five was always the realistic figure.** **Do not put the two numbers on the board with names against them.** **Do put the gap between them on the board, unnamed, because the gap is the real content of the cycle.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ _If by 31 March fewer than sixty of the hundred and ten have posted a question, it has not worked._   **2** ⚠ **A date sooner than the next request:** _the next equipment round is in June, so the condition falls in March._   **3** ⚠ **A named person who is not you:** _I shall write to Mr Jabri in the first week of April and say so._   **4** ⚠ **The edge decided in advance:** _between fifty and sixty I shall ask for one further quarter and no further money; below fifty I shall close it._   **5** ⚠ **The honest figure against the justifying figure:** _forty-five is what I expect and sixty is the figure at which it is worth the machine_ — **and what you do about it is write sixty, know what you have done, and say both numbers in the same paragraph.**'));
out.push(A('⚠ **Mark 5 hardest and mark it on whether both numbers appear.** **A student who writes only the justifying figure has written a target; one who writes only the expected figure has written a forecast** — **and the paragraph that does the work has both, which almost nobody produces on the first attempt.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Eight afternoons for the escalation handlers.**',
  '_B:_ **If the repeat calls for the twelve months to March are not below two hundred and twenty, it has not worked, and I shall tell Mr Jabri in the first week of April. Between two hundred and twenty and two hundred and sixty I ask for one more year and no more afternoons; above two hundred and sixty I stop it.**',
  '_A:_ **A plate-condition procedure.** ⚠ _(marked row)_',
  '_B:_ **There is nothing measurable yet. What would have to start being counted is reprints attributed to plate condition, which nobody records — so the first thing is a column on the reprint docket from October, and the condition cannot fall before the following October.**',
  '_A:_ **One engineer two days a week at the distant sites.**',
  '_B:_ **If lost registry days at the two sites are not below fifteen in the year to March, it has not worked, and I shall write to Mr Jabri in April.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have nothing measurable yet** — **a procedure, a column, a rule, a course** — **and the honest answer names what would have to start being counted and from when, which pushes the condition a year out.** **The answer to catch is _we shall see how it goes_, and somebody always gives it.** **Say plainly that it is the answer a reader has heard before and has stopped hearing.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The condition:** if reprinted pages in the year to July are not below eight, the four hours have not worked, and I shall write to Mr Hamwi in the first week of August._',
  '_**The edge:** between eight and twelve I shall ask for one more year and no more hours. Above twelve I shall stop asking and say that the errors are not where I thought they were._',
  '⚠ _**And the figure I privately expect: eleven.** **Which is inside my own edge, and I have left the edge where it is, because eight is the figure at which a hundred and twenty hours are worth spending and eleven is the figure I could talk round next August.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad\'s forum proposal carries the sentence most proposals do not have: if by the end of March fewer than sixty of the hundred and ten engineers have posted a question, the forum has not worked and he will say so in writing. It cost him two nights, because sixty is a real number and he thinks the true figure will be about forty-five. Asked why sixty, he said because forty-five is the number he would be able to explain away and sixty is the number that would make the thing worth the machine it sits on — and if it is forty-five, it has not worked and he will have to say so. Which is what a failure condition is for, and it is not for the reader: it is the only thing that stops you, in March, from being a person who explains why forty-five was always the realistic figure. Nour asked what the reader gets out of it, and an end — a proposal with no failure condition is asking for money with no end to it, and a reader who cannot be shown that a thing failed will be asked for more of it every year by somebody who sincerely believes it is working. Omar asked what makes a usable condition, and three things: a figure that could actually come out the wrong way, a date sooner than the next request, and somebody who is told, who is not you. Rim asked why somebody who is not her, and because you will be the last person to believe it — name the person and the month and the sentence has a mechanism instead of an intention. Hiba asked what happens if the figure is on the edge, and then you say what you will do at the edge now, in advance, because a writer who decides the edge in October is making a judgement and the same writer deciding it in March is defending a position. And Jad asked what happens if it has worked, and then the same sentence is worth more to him than to anybody else: he has a figure, a date and a named witness, and his next proposal will be read by a man who has seen him call his own result, which is the only kind of credit in this unit that compounds.']));
out.push(A('⚠ **Mark the report on the two numbers.** **A version that gives sixty and omits forty-five has removed the whole content of the cycle** — **and the sentence to look for is that forty-five is the number he would be able to explain away.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _**If** by March the calls **will not** have fallen._ → _have not fallen_.   ⚠ _**Less** than sixty engineers._ → _fewer than sixty_.   ⚠ _I **will** write and say so._ → _I shall_ **in an undertaking.**   ⚠ _Progress **will be monitored**._ → **give a figure, a date and a name.**   ⚠ _**Between** fifty **to** sixty._ → _between fifty and sixty_.'));
out.push(NOTE('⚠ **There is a second half to this cycle that is easy to teach past, and it is the half that sells the method.** **If the thing works, the failure condition is worth more to the writer than to anybody else:** **they have a figure, a date and a named witness, and their next proposal is read by somebody who has seen them call their own result.** ⚠ **Say plainly that it is the only kind of credit in this unit that compounds** — **and that it cannot be acquired after the event, because a figure named in April is a claim and the same figure named in October is a boast.** **The students who find 22.5 most uncomfortable are the ones for whom this argument does the work, so make it before Stage 7 and not after.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because forty-five is the figure he privately expects and could explain away in April, and sixty is the figure at which the forum is worth the machine, the moderation and a hundred and ten people\'s time.** **So sixty goes on the page, and he says he is aware of what he has done.**'));
out.push(A('**2** ⚠ **Because a visit count would give him a number in the thousands within a fortnight and it would mean nothing** — **eleven of their own engineers would produce most of it, being the people who look at a thing eleven times.** **A question posted is a person who had a problem and chose the forum instead of the telephone, and that is the only thing he claims the forum does.**'));
out.push(A('**3** ⚠ **Nineteen of the hundred and ten posted in the four-week pilot and fourteen of the nineteen were in the first week** — **which extended across six months is well short of sixty.** **It is the strongest evidence against the paper, and it is on his own page rather than left for the reader to find.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: HOW YOU WILL KNOW IT HAS NOT WORKED** _(page 3 of 3 · 14 August · to Mr Hamwi)_',
  '**The condition.** ⚠ **If reprinted pages in the year to July are not below eight, the four hours have not worked.** **I shall write to you in the first week of August and say so.**',
  '**Why eight and not eleven.** ⚠ **Eleven is the figure I privately expect.** **Eight is the figure at which a hundred and twenty hours of a sub-editor are worth spending.**',
  '**What happens at the edge, decided now.** ⚠ **Between eight and twelve I shall ask for one further year and no further hours. Above twelve I shall stop asking.**',
  '**What I am not going to count, and why.** ⚠ **Not errors found at proof.** **That number would rise the moment somebody is looking, and it would rise whether or not the bulletin improved.**',
  '**And one figure already in that does not help me.** ⚠ **In the four weeks I did the Wednesdays myself in June, the reprints were two, which is an annual rate of about twenty-six.**',
]));
out.push(S('Stage 7 · Write freely (sample, 211 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: HOW YOU WILL KNOW IT HAS NOT WORKED** _(page 3 of 3 · 14 August · to Mr Hamwi)_',
  '**The condition, and it is one sentence.** ⚠ **If reprinted pages in the year to July are not below eight, the four hours have not worked.** **I shall write to you in the first week of August and say so, whatever it says.**',
  '**Why eight and not eleven.** ⚠ **Eleven is the figure I privately expect and it is the figure I could talk round next August.** **Eight is the figure at which a hundred and twenty hours of a sub-editor are worth spending** — **so eight goes on the page, and I know what I have done in writing it.**',
  '**What happens at the edge, decided now rather than next August.** ⚠ **Between eight and twelve I shall ask you for one further year and for no further hours, and say in the same letter what I think changed.** **Above twelve I shall stop asking and write up where the errors actually are, which is the only useful thing a failure produces.**',
  '**What I am not going to count, and why.** ⚠ **Not errors found at proof.** **That figure rises the moment somebody is looking at the page, and it rises whether or not the bulletin gets better** — **so it would tell you about my attention and not about the work.**',
  '**And one figure already in that does not help me.** ⚠ **In the four weeks I took the Wednesdays myself in June, the reprints were two** — **an annual rate of about twenty-six, which is worse than the year I am complaining about.** **I cannot explain it and I am not going to leave you to find it.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: a figure that could come out the wrong way, with a date.** Eight, by July. **The line I copied is _whatever it says_** — three words, and they are the only reason the condition is worth anything._',
  '_**Criterion: the easy count refused with its reason.** Errors found at proof. **_It would tell you about my attention and not about the work_ is the cleanest reason on the page.**_',
  '_**Keep:** _I cannot explain it and I am not going to leave you to find it._ **It works because it concedes an unexplained figure against yourself, which makes the explained ones credible.**_',
  '_**Ranking of the slip I was given:** the named-witness criterion first, because I had left the name out; the edge criterion second; the figure criterion last, because the figure was the easy part._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Write the two numbers for each speaker on the board without names, and then draw the gap.** **A room in which the two numbers are the same has not written a condition; it has written a prediction, and the arithmetic of the cycle will not work for them.** **A room in which the gaps are large has done the work.** **Then the one thing to say at the end, because the cycle leaves people uncomfortable: the sentence is worth more to the writer than to the reader, and worth most of all in the year it turns out to have worked.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The condition:** if lost registry days at the two distant sites are not below fifteen in the year to March, the two days of engineer time have not worked, and I shall write to Mr Jabri in the first week of April._',
  '_**The edge:** between fifteen and twenty-two I ask for one more year and no more days; above twenty-two I give the days back._',
  '⚠ _**The figure I privately expect: eighteen.** **Which is in the middle of my own edge, and I have left it there.**_',
  '_**And what the two numbers told me:** eleven of the thirty-six lost days are the drive fault, so the engineer days cannot get me below about twenty-five unless the drives are replaced as well. **The condition made me put the drives in the ask.**_',
]));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  The whole proposal'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The reader\'s order is: the ask · what you need from them and by when · the problem in their units · what you are not asking for · the alternative you rejected · how they will know it failed.** **The part most papers put first is the history of the problem, and the part most papers leave out altogether is the decision line.** **Take both answers and write them side by side, because they are the same mistake twice.**'));
out.push(A('**b** Belongs on the first page: **2**, **3**, **4** and **5**. Not: **1**. ⚠ **The history is the only part of a proposal that cannot be acted on**, **and a page one that opens with how we arrived here has spent its first third on it.** **A reader who wants the history will ask.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is a different sentence from the ask and most papers have neither**; and **a reader who is not told what is wanted from them will do the thing that is always available, which is to think about it.**'));
out.push(A('**b** **1** ⚠ **The ask is _eight afternoons for eleven people from October_; the decision line is _what I need from you is a yes or a no by 10 June_.** **The ask says what the thing is and the decision line says whether the reader is deciding, commenting, forwarding or being informed** — **four different afternoons of theirs.**   **2** ⚠ **One page, and then as many pages as the figures need** — **page one is the whole proposal and pages two to four are where a reader goes to check something.**'));
out.push(NOTE('⚠ **The observation that changes how students write is the one about how page one is read, and it is counter-intuitive.** **Nobody reads past page one in order, and that is not the same as not reading past page one.** **They read page one and then jump to the single number they do not believe** — **so every figure on page one needs a page reference beside it, and the jump then lands where the writer wants it to.** ⚠ **The second observation is about the order of writing and it should be demonstrated rather than asserted.** **Ms Sabbagh wrote her page in the order six to one, and the ask was eight afternoons for twenty-two people until she wrote paragraph six and could not name any figure that would show success for twenty-two.** **The failure condition is what tells a writer what they are actually asking for.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **The ask:** _eight afternoons a year for eleven people, starting in October._   **2** ⚠ **The decision line:** _what I need from you is a yes or a no by 10 June; not a comment, and not a referral to the training section._   **3** ⚠ **The problem figure with its page reference:** _three hundred repeat calls a year, from the switchboard\'s own call book_ _(page 2, paragraph 1)_.   **4** ⚠ **Two renunciations:** _not another person, and not any part of the equipment budget._   **5** ⚠ **The failure condition:** _if the repeat calls are not below two hundred and twenty by March, it has not worked, and I shall write and say so in the first week of April._'));
out.push(A('⚠ **Mark 2 hardest, and mark it on the exclusions rather than on the date.** **A decision line that asks for a yes or a no and does not rule out a comment and a referral has left the two things that will actually happen to the paper unaddressed** — **and a referral is what happened to Ms Sabbagh\'s February paper.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Eight afternoons for eleven escalation handlers.**',
  '_B:_ **The ask: eight afternoons a year for eleven people from October. What I need from you: a yes or a no by 10 June, not a comment and not a referral. The problem: three hundred repeat calls a year from the switchboard\'s book, at page 2. Not asking for: a post, the equipment budget, protected afternoons. Instead of this: a printed promise slip, which catches three of the thirty-four. If it fails: repeat calls not below two hundred and twenty by March.**',
  '_A:_ **Nine replacement drives, found while writing page 2.** ⚠ _(marked row)_',
  '_B:_ **This is not a yes-or-no paper. What I need is a signature on the equipment order, because the money is already in the line and nobody has to decide anything — they have to sign.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows are not yes-or-no papers** — **drives need a signature, a procedure needs forwarding to its owner with a line of the reader\'s own, a definition needs nothing but notice, and a minutes column needs the chairman rather than the budget.** **A pair that asks for a yes on all ten has not read the cycle, and the listener task should record which of the four forms each paper needs.** **The commonest error is asking for a decision from somebody whose only available action is to forward it.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Page one assembled, numbered 1 to 6, with a page reference against the reprint figure and against the conversion.**_',
  '⚠ _**And the part that was missing was the decision line, exactly as predicted.** **My June note said _I should be grateful for your thoughts_, which is an invitation to think about it for ever.**_',
  '_**So paragraph 2 now reads:** what I need from you is a yes or a no by 25 August — not a note of your thoughts, and not a referral to the print room, because the print room cannot give me a sub-editor._',
  '_**And read aloud it came to a hundred and ten seconds**, so I have cut the paragraph about how the Wednesday arrangement arose, which was the history and which nobody asked for._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Six parts, and the five cycles had given the class five. Nour named the ask, the problem in his units, what she is not asking for, the alternative she rejected, and how he will know it failed — and said the one not yet done is what she needs from him. Which is not the same sentence as the ask, and most papers have neither: the ask is eight afternoons for eleven people from October, and the decision line is what I need from you is a yes or a no by the tenth of June. Omar asked whether the second is not obvious from the first, and no, and this is where more proposals die than anywhere else: the ask tells him what the thing is and does not tell him whether he is being asked to decide, to comment, to forward it or to be informed, and those are four different afternoons of his. Nour said he forwarded her February paper to the training section, which was a reasonable thing to do with a paper that did not say what it wanted from him — a reader who is not told what is wanted will do the thing that is always available, which is to think about it, or to send it to somebody whose problem it looks like. Rim asked about the forms, and four words of difference give four different outcomes. Jad asked how long the whole paper should be, and one page, and then as many pages as the figures need: the first page is the whole proposal and pages two to four are where a reader goes when they want to check something. Hiba said nobody reads past page one, and nobody reads past page one in order, which is not the same thing — they read page one and then jump to the one number they do not believe, so every figure on page one needs a page reference beside it. And Tareq asked about the summary out loud: ninety seconds, the whole of page one and nothing added, because people add while they read and the addition is always the part they were least sure of — and if ninety seconds is not enough, page one is too long and the delivery is not the problem.']));
out.push(A('⚠ **Mark the report on the four forms of the decision line, which students reduce to _say what you want_.** **The content is that deciding, commenting, forwarding and being informed are four different afternoons of the reader\'s** — **and that a paper which does not choose gets the cheapest of the four.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _What I need from you **are** a yes or a no._ → _is_.   ⚠ _I should be grateful **for your thoughts**._ → **choose one of the four forms.**   ⚠ _**Please find attached** a paper for your consideration._ → _what I need from you is_.   ⚠ _The figure **is at** page 2 paragraph 1._ → _is at page 2, paragraph 1_.   ⚠ _**Ninety seconds** page one, not **ninety seconds** of reading faster._ → **cut the page.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because the October rota is drawn on 15 June, so an answer after that date costs until January whatever it says.** **The two things she does not want are a comment and a referral to the training section** — **and the referral is what happened to the February paper.**'));
out.push(A('**2** ⚠ **It catches the promises that are made in writing and none of the thirty-one of thirty-four that are made on the telephone.** **It costs nothing and she uses it already, which is what makes the rejection credible.**'));
out.push(A('**3** ⚠ **In the order 6, 5, 4, 3, 2, 1.** **Writing paragraph 6 changed the ask from twenty-two people to eleven**, **because she could not name a figure that would show it had worked for twenty-two** — **and she says the paper then became something she can defend in a room.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: PROPOSAL** _(page 1 of 3 · 14 August · to Mr Hamwi · replaces my note of 9 June)_',
  '**1  What I am asking for.** ⚠ **Four hours a week of one sub-editor on Wednesdays, in the thirty weeks the ministry page runs, from September.**',
  '**2  What I need from you.** ⚠ **A yes or a no by 25 August.** **Not a note of your thoughts, and not a referral to the print room, which cannot give me a sub-editor.**',
  '**3  The problem, in your units.** ⚠ **Nineteen reprinted pages in the year to July, from the press\'s own docket** _(page 2, paragraph 1)_. **That is about eleven hours of press time against a hundred and twenty of a sub-editor** _(page 2, paragraph 3)_.',
  '**4  What I am not asking for.** ⚠ **Not another post. Not the Thursday deadline moved. And not a second morning** _(page 3, paragraph 1)_.',
  '**5  What I considered instead.** ⚠ **Cutting one page, which costs nothing and moves my worst errors onto the page we must carry** _(page 3, paragraph 2)_.',
  '**6  How you will know it has not worked.** ⚠ **Reprints not below eight in the year to July, and a letter from me in the first week of August** _(page 3, paragraph 4)_.',
]));
out.push(S('Stage 7 · Write freely (sample, 212 words)'));
out.push(SAMPLE([
  '**THE THURSDAY BULLETIN: PROPOSAL** _(page 1 of 3 · 14 August · to Mr Hamwi · replaces my note of 9 June)_',
  '**1  What I am asking for.** ⚠ **Four hours a week of one sub-editor on Wednesdays, in the thirty weeks the ministry page runs, from the first week of September.** **About a hundred and twenty hours of staff time in the year, and no money.**',
  '**2  What I need from you.** ⚠ **A yes or a no by 25 August.** **Not a note of your thoughts, and not a referral to the print room** — **the print room cannot give me a sub-editor, and my note of June went there and came back in October.**',
  '**3  The problem, in your units.** ⚠ **Nineteen reprinted pages in the year to July, from the press\'s own reprint docket** _(page 2, paragraph 1 — the dockets are in the bindery office and each is initialled)_. **That is about eleven hours of press time against the hundred and twenty I am asking for, which is against me, and the argument that survives is the four ministry notices** _(page 2, paragraph 3)_.',
  '**4  What I am not asking for.** ⚠ **Not another post. Not the Thursday deadline moved, which I know you refused the print room last year. And not a second Wednesday morning** _(page 3, paragraph 1)_.',
  '**5  What I considered instead.** ⚠ **Cutting the bulletin by one page, which costs nothing and would catch perhaps a third of the errors** — **and which moves my worst errors onto the one page we are obliged to carry** _(page 3, paragraph 2)_.',
  '**6  How you will know it has not worked.** ⚠ **If reprints in the year to July are not below eight, it has not worked, and I shall write and say so in the first week of August** _(page 3, paragraph 4)_.',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: six numbered parts on one page.** All six, and they fit. **The line I copied is _my note of June went there and came back in October_** — which is the only evidence in the paper for why paragraph 2 rules out a referral, and it is four months long._',
  '_**Criterion: a page reference against every figure.** Three of the four have one. **The _about a hundred and twenty hours_ in paragraph 1 has none**, and that is the figure a reader will want to check first._',
  '_**Keep:** _which is against me, and the argument that survives is the four ministry notices._ **It works because the unfavourable arithmetic is on page one, where it reads as candour rather than as something the reader found.**_',
  '_**Ranking of the slip I was given:** the page-reference criterion first, because it found the figure with no reference; the decision-line criterion second; the six-parts criterion last, since the order was already right._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Time the ninety seconds with a watch and hold to the rule: anybody who does not finish cuts the page rather than reading faster.** **Ask the room which paragraph to cut and the answer is almost always the history, which is the one part of a proposal that cannot be acted on.** **Then ask in which order each writer wrote the six parts.** **The students who wrote six to one will have a smaller ask than they started with, and the ones who wrote one to six will usually not** — **and that comparison is the strongest evidence for the method that the course can produce.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Page one assembled, six numbered parts, written in the order 6, 5, 4, 3, 2, 1, with a page reference against all four figures.**_',
  '⚠ _**And paragraph 1 did change.** **I set out to ask for a vehicle five days a week.** **Writing paragraph 6 showed me that I could not name a figure that would prove five days had worked rather than two** — **because only two of my four late days are the Harasta run.**_',
  '_**So the ask is two days**, and the paper is shorter by a page._',
  '_**Read aloud: eighty-four seconds.** The paragraph I cut was the one explaining how the Harasta contract came to us in 2019._',
]));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: The proposer and the person who has to find the money'));
out.push(S('Stage 1 · Get ready – Unit 22 quiz'));
out.push(A('**1** _The **feasibility** of the scheme was never tested._   **2** _**Implementation** will begin in October._   **3** _We have had no **allocation** from the budget._   **4** _The **provision** of a second vehicle is not agreed._   **5** _He gave me a **commitment** in writing._   **6** _The **funding** runs out in March._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **It cannot reach the person who holds what is being asked for.** **A proposal priced in the reader\'s units has to be granted by whoever holds those units** — **so the rule from 22.2 that makes the paper readable is the rule that sends it to the wrong desk.** **The question that would have changed May is four words long:** _whose hours are these?_'));
out.push(S('Language box · Practise'));
out.push(A('⚠ **No Practise line in x.7.** **The Language box here records the three moves and the finding, and the work of the cycle is in Stages 3 and 4 rather than in a drill.** **Read the box aloud once before Stage 3 and leave it open on the desk while the pairs work.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '_**What the paper is for.** Getting a decision out of one man by the tenth of June on a figure he can check. It did that: he read it in a day and answered in three._',
  '_**The thing the document cannot do.** Reach the person who holds the hours. The rule that makes the paper readable — price it in the reader\'s units — is the rule that sends it to the desk of somebody who does not hold those units._',
  '_**Can the writer supply it?** No. Nobody outside a budget office knows what that office controls, so this is not a failure of research._',
  '⚠ _**What she can supply:** one sentence in paragraph 2. If any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units._',
  '_**And what we are not doing.** Not writing the paper to the whole organisation, which is 22.2 undone. And not sending this page to the rota-holder, because it is written in repeat calls and she holds a rota._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **Pair B is the control and it is the half of the stage that gets skipped.** **A paper with no decision line was always going to be forwarded to whoever the subject belongs to, and no question about units will mend it** — **so the answer for Pair B is 22.6 and not a resource-holder.** **Two faults, two remedies: a sentence added by the person who holds the budget, and a decision line written today.** **A pair that applies the mediation to Pair B has learned to reach for the clever answer, which is the error this stage exists to catch.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The proposal that was neither agreed nor refused:** my note of June asking for four hours of a sub-editor._',
  '_**What it was for:** getting a yes or a no out of Mr Hamwi before the September rota. It did not do that, and the fault was mine — there was no decision line in it._',
  '_**The person who actually held the thing:** the chief sub-editor, who allocates Wednesdays. Mr Hamwi holds the budget and does not hold the rota, and I did not know that in June._',
  '⚠ _**Did anybody ever tell me? No.** **I found out in August, from a sub-editor, in a corridor.** **And what I shall put in paragraph 2 from now on: if any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A paper that does everything the unit teaches, and the answer was neither yes nor no. Asked whether the paper is wrong, Nour said no — she would write it again, and Mr Jabri is right as well, which took her a fortnight to accept. His account in his own words: the four hundred and forty hours are not mine, they are the ward rota\'s. And Mrs Khalaf, who holds the rota, has never seen the paper. So the mediation, in three moves: separate what the paper is for from what its reader could do about it; find the thing the document cannot do; and say whether the writer can supply it. The paper is for getting a decision out of one man by the tenth of June on a figure he can check, and it did that — he read it in a day and answered in three. The thing it cannot do, Jad said, is reach the person who holds what is being asked for: a proposal priced in the reader\'s units has to be granted by whoever holds those units, and the rule from 22.2 that makes the paper readable is the rule that sends it to the wrong desk. Which is the finding of the cycle and it is new — everything in the unit has been about one reader, and nothing in it asks the question that would have answered this in May, which is four words long: whose hours are these? Tareq said he could not have asked it, because he does not know what Mr Jabri controls and nobody outside his office does. Hiba said what she can supply is one sentence in paragraph 2: if any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units. And whose decision that is: Mr Jabri\'s, because he is the only person who knows the hours are not his, and he has never said so, since a man who holds a budget is not in the habit of announcing what he does not control. Rim asked what we must not do: do not write the paper to the whole organisation, and do not send the same page to the rota-holder.']));
out.push(A('⚠ **Mark the report on whether the reader is reported as reasonable and on whether the proposer is let off.** **Both have to be true at once:** **the paper is excellent and the answer was neither yes nor no, and the reason is a thing neither of them could have fixed alone.** **The line to look for is that nobody outside his office could have known.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _Whose hours **is** these?_ → _are these_.   ⚠ _If any part of this is not yours **for** grant._ → _to grant_.   ⚠ _Tell me **who** it is._ → _whose it is_.   ⚠ _I shall write the same paper **on** their units._ → _in their units_.   ⚠ _He is not **in habit of** announcing it._ → _in the habit of_.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 3)'));
out.push(A('**1** feasibility   **2** allocation   **3** quantification   **4** provision   **5** commitment   **6** prioritisation   **7** funding   **8** sustainable'));
out.push(NOTE('⚠ **Three of the eight are the items that separate a class and they fail for three different reasons.** **Item 3 needs _quantification_ and students write _quantity_, which is a word they know and which does not fit _no amount of ___ of the problem_.** **Item 6 needs _prioritisation_, which is long, and the commonest wrong answer is _priority_** — **_the priority of requests between desks_ is grammatical and means something else entirely, so it is worth writing both on the board.** ⚠ **Item 8 is the only adjective in the set and a class that has just formed seven abstract nouns writes _sustainability_ without looking at the sentence.** **Teach the habit once: read the words on either side of the gap before you decide what part of speech you need.** **_Is ___ in a way that_ can only take an adjective.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE PROPOSAL, TWO ACCOUNTS** · _the Wednesday hours, two months apart_',
  '**The paper.** _"Four hours a week of one sub-editor on Wednesdays, from September. What I need from you is a yes or a no by 25 August… Nineteen reprinted pages in the year to July, from the press\'s own docket… Not another post, not the Thursday deadline moved…"_',
  '**The proposer.** _"It is the best paper I have written. The ask is in one sentence, the figure is out of their own docket, and the arithmetic against me is on page one."_',
  '**The reader.** _"It is the clearest paper I have had this year, and the Wednesdays are not mine. The chief sub-editor allocates Wednesdays. He has not seen this and he will be shown four hours as a loss."_',
  '⚠ **Both accounts are accurate and neither is about the paper.**',
  '**What the paper is for.** **Getting a yes or a no before the September rota.** ⚠ **It did that.**',
  '**The thing the document cannot do.** ⚠ **Reach the person who holds the Wednesdays.**',
  '**Can the writer supply it?** **No** — **nobody outside the budget office knows what that office controls.**',
  '**What the writer can supply.** ⚠ **One sentence in paragraph 2:** _"if any part of this is not yours to grant, tell me whose it is and I shall write the same paper in their units."_',
  '**Whose decision is that?** ⚠ **The reader\'s, and only the reader\'s.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 2: a report, sample 206 words)'));
out.push(SAMPLE([
  '**REPORT ON PROOF READING OF THE THURSDAY BULLETIN**',
  '**Purpose.** **This report recommends four hours a week of one sub-editor\'s time on Wednesdays and sets out what it would cost, what it would not involve, and how anybody would know it had failed.**',
  '**Recommendation.** **Four hours a week of one sub-editor on Wednesdays, in the thirty weeks the ministry notices page runs, from September. About a hundred and twenty hours of staff time in the year and no money.**',
  '**The problem in figures.** **Nineteen pages were reprinted in the year to July, taken from the press\'s own reprint docket rather than from my records, and four of the nineteen were ministry notices. Nineteen pages is about eleven hours of press time, which is less than the hours I am recommending; the case rests on the ministry notices and not on the press time, and I would rather say so here than let it be worked out.**',
  '**What is not recommended.** **Not a further post. Not a change to the Thursday deadline, which was refused to the print room last year. And not a second Wednesday morning at any point in this year.**',
  '**How failure would be seen.** **If reprinted pages in the year to July are not below eight, this has not worked, and I shall report that in the first week of August. Between eight and twelve I would ask for one further year and no further hours; above twelve I would stop.**',
]));
out.push(NOTE('⚠ **The report above is a band-5 answer and the fourth requirement is where it earns the mark.** **A report with a recommendation and no failure condition is asking for something with no end to it, and the examiner is reading for whether the thing could actually be decided.** ⚠ **Mark three things hardest.** **One: a purpose line, because a report without one reads as a memorandum and loses the register mark.** **Two: headings, which are expected in a Part 2 report and which half the class leaves out under time.** **Three: the figure with its source** — _taken from the press\'s own reprint docket rather than from my records_ — **which is the one sentence in the sample that could not have been written before this unit, and it is worth pointing at.**'));
out.push(S('Stage ✓ · Unit 22 check'));
out.push(A('**A** **1** a _(feasibility)_   **2** b _(Implementation)_   **3** c _(allocation)_   **4** a _(provision)_   **5** b _(commitment)_   **6** c _(Funding)_   **7** a _(prioritisation)_   **8** b _(sustainable)_'));
out.push(A('⚠ **Item 2 is the item that separates a class.** **_Implementation of the scheme_ takes the noun, and _Implementing of the scheme_ is not English** — **although _implementing the scheme_, with no _of_, would be.** **The general rule is worth stating once: a gerund does not take _of_.** ⚠ **Item 8 is the pair to put beside it:** **_a sustainable arrangement_ is the adjective, and a room that has just answered seven nouns reaches for _sustainability_.** **Read the sentence aloud and the error is audible, which is the habit to build rather than the rule.**'));
out.push(A('**B  Listening** **1** _costs_   **2** _three_   **3** _complaint_   **4** _fourteen_   **5** _refused_   **6** _15 June / the fifteenth of June_   **7** _call book_   **8** _six, five, four, three, two, one / backwards_   **9** _eleven_   **10** _ward rota_'));
out.push(A('⚠ **Items 6 and 8 are the two to replay.** **In 6 the speaker gives two dates in the same breath** — **the tenth of June for the answer and the fifteenth for the rota** — **and students write the tenth, because it is the one they have already heard twice in the unit.** **The question asks why the tenth, so the answer is the fifteenth.** ⚠ **In 8 accept either the sequence or _backwards_**, **and do not accept _from the end_, which is not what she says.** **Item 2 is the gentle one and it is worth using to teach the habit: the number is said once, in passing, inside a sentence about something else.**'));
out.push(A('**C  Writing** — **marked on the four requirements and on the headings.** ⚠ **All four or the content mark goes**, **and the commonest loss by a long way is the fourth: a report that recommends something and says nothing about how anybody would know it had failed.** **The second commonest is the problem figure with no source** — **which costs the organisation mark rather than the content mark, because the examiner reads it as an unsupported assertion.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 22 (sample)'));
out.push(SAMPLE([
  '_**Mediation written, and the person who actually held the Wednesdays named: the chief sub-editor.**_',
  '_**Report written, 206 words, four requirements and four headings.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the six parts of page one. **The four words.** **I have put _whose hours are these?_ into paragraph 2 of the paper I am sending next week, and I already know it will cost me a fortnight and save me two months.**_',
]));
out.push(sp());
out.push(box('After Unit 22', [
  '**Unit 23 is the long read, which is 18 at four times the length.** ⚠ **In 18 the class summarised a report; in 23 they read and use a document of forty pages or more** — **and the finding of 22.6 comes back, because a long document is read the way page one is read: once, in order, and then by jumping to the number the reader does not believe.**',
  '⚠ **The connection to name on the first day of 23 is the page reference.** **A forty-page document with no way in is a document that will be read by its first three pages and its last one** — **and the three pages the writer most needs read are almost never among them.**',
  '**And one thing to carry forward.** ⚠ **24.6 opens the letters the class sealed in B1 24.6.** **This is the last reminder in this key: if the sealed letters are not in the room on the first day of 24, the cycle cannot be taught at all.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 22 · Answer Key');
