// Proactive English B1 · Syria Edition · Book 2 · Unit 16 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 16  Comparing and Evaluating — Answer Key'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**One question runs through the whole unit: how much?** _Better_, _cheaper_, _more reliable_ and _faster_ are words with no information in them, and the cycle-by-cycle work is putting a quantity, a field or a criterion against each one. Ask _how much?_ of every comparison a student makes, including the ones in their reports, and the unit teaches itself.',
  '**The two cycles that change how the class makes decisions** are 16.5 and 16.6. In 16.5 the criteria go down **before** you look, because criteria written afterwards choose what you had already chosen; in 16.6 a comparison ends in a verdict, a limit and a **trigger** — and the trigger is the part every student and most professionals leave out.',
  '**What you need in the room.** For 16.1 and 16.7, a real comparison each — a quotation, a table, a tender, a specification, two schools, two insurance policies. For 16.1, also one comparison of the student\'s own that they have never written down; that is where the best work in the unit comes from.',
  '**And the sentence the unit ends on**, which is Rasha\'s: _nobody had ever suggested to me that nine years of pushing a trolley was a measurement._ Every adult in the room has a row like that, unmeasured, in their hands.',
], C.lblue, C.navy));

// ===================== 16.1 =====================
out.push(pb());
out.push(h2('16.1  Not as cheap as it looks'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask _how much?_ of every comparison on every page the class brought in, and keep a tally on the board of answered and unanswered. In a first run it is two answered out of eleven, and the two are usually prices — which is the finding: the only thing most comparisons quantify is the one thing that was already a number.'));
out.push(A('**b** Open, but insist on a quantity or a size-word in each: **1** _better at filing — far better, and not close_   **2** _four per cent cheaper across eleven items_   **3** _about twice as slow on a sixty-four-page job_   **4** _worse by eleven complaints in a month_   **5** _comes back about twice a month against about twice a year_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – two shops, and the answer is neither: they are better at different things.'));
out.push(A('**b** **1** Price, paperwork, how fast they get a part in, and whether they tell him the truth when they do not know.   **2** That _better_ is a word people use when they have one impression and four reasons for it that they have never separated.'));
out.push(NOTE('The cycle\'s whole technique is in Mazen\'s second sentence: _I could not answer it until I stopped using the word._ One impression, four criteria, and the moment they are written as four lines the question collapses — the two shops are better at different things, so _which is the better shop_ was the wrong question. And the answer that comes out of it is not a winner but a change of practice: parts from one, stock from the other, after six years of doing it the other way round.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _On price, Mezzeh is about 4% dearer across eleven items. On paperwork it is far better and it is not close. On getting a part in, it is about twice as slow._',
  '**2** _The Harasta road is about nine minutes shorter and about twenty minutes less reliable at seven in the morning; the Mezzeh road is slightly longer and has never once been closed in eleven years._',
  '**3** _Writing the time on the bag takes about four seconds a bag; asking the ward afterwards takes about four minutes and gets an answer about half the time._',
  '**4** _The new form is two lines shorter and has no box for equipment; the old form has the box and three lines nobody has ever filled in._',
  '**5** _Abu Fadi answers about one question in two and says so when he cannot; the other man answers every question and is right about half the time, which is far worse and takes me longer to find out._',
]));
out.push(A('Item 5 is the one to read aloud: _answers every question and is right about half the time, which is far worse_. Students assume that more answers is better, and the comparison that matters is between **an answer you can act on** and an answer you have to check.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Two shops you buy from.',
  '**B:** On price, Shaalan is about four per cent cheaper across the eleven things I buy most. On paperwork, Mezzeh is far better and it is not close — every note filed by date against nothing kept at all. On getting a part in, Shaalan is twice as fast: two or three days against five or six.',
  '**A:** Is one of them better, or are they better at different things?',
  '**B:** Better at different things, and I have been buying the wrong things from each of them for six years.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Count the comparisons that ended in _better at different things_ rather than a winner: five or six of the eight. That is the cycle in one number, and the line to give the class is Nour\'s — most of the verdicts we carry in our heads are four separate comparisons we have never written down.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Two ways of asking the equipment office for something: telephoning and a written note. On speed of an answer, the telephone is far faster — the same day against about three weeks. On whether anything happens, the note is better: of nine notes, four produced something; of about thirty telephone calls, I can name two. On whether I have anything afterwards, the note is the only one of the two that exists._',
  '**b** _My partner has been deciding on one criterion all along without saying so: whichever of the two shops is open when he finishes work. It is not on his list and it explains every purchase he has made in two years._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen has two years of delivery notes from one shop and nothing from the other, and he spent the week on which is the better shop — and could not answer it until he stopped using the word, because "better" was the whole problem. So he wrote down the four things he actually cares about: price, paperwork, how fast they get a part in, and whether they tell him the truth when they do not know. On price, Shaalan is about four per cent cheaper across the eleven items he buys most, from twelve months of receipts — slightly cheaper and not far cheaper, about the price of a glass of tea on one handset. On paperwork it is not slight: Mezzeh files every note by date and produced eight when he asked, and Shaalan keeps only what comes with an invoice, so Mezzeh is far better and it is not close — and that four per cent is what the four untraceable units cost him, which makes Shaalan not nearly as cheap as it looks. On speed, Shaalan is twice as fast at getting a part in, two or three days against five or six, which is the largest difference on the page and is in Shaalan\'s favour. The fourth criterion is the one nobody can put in a column: Abu Fadi in Mezzeh tells him when he does not know, and the Shaalan man says "tomorrow" to everything and has for six years, so Mazen has stopped hearing it as a day of the week. His answer is both shops — parts from Shaalan, stock from Mezzeh — and he has been doing it the other way round for six years without ever comparing them. What "better" was hiding is that they are better at different things, so the question was wrong and not the answer.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ more cheaper → ✓ cheaper.   ✗ not as cheap than → ✓ as cheap **as**.   ✗ It is more better. → ✓ better.   ✗ _better_ with nothing after it → ✓ better **at** what, by how much.   ✗ a percentage with no source → ✓ say where the figure comes from.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Price, paperwork, getting a part in, and telling him when they do not know — and he would put the fourth first if he were only allowed one.'));
out.push(A('**2** The four untraceable units in his batch claim, which came from the shop that is four per cent cheaper.'));
out.push(A('**3** Stock from Shaalan for the four per cent and parts from whoever answered the telephone — and **nobody decided it, including him**.'));
out.push(A('_Nobody made that decision, including me_ is the sentence to pull out of this model. Most working arrangements of long standing were never decided: they were arrived at by a first choice that nobody revisited, and the forty minutes of writing four lines is what turns an arrangement into a decision. That is the practical pay-off of the cycle and it is worth saying before Lesson B rather than after it.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO WAYS OF ASKING THE EQUIPMENT OFFICE, FOUR LINES** · R. Barakat · November',
  'I have been asking that office for things for nine years and I have never compared the two ways of doing it.',
  '**Speed of an answer.** The telephone is far faster: the same day, against a mean of about three weeks for a note. On this one it is not close.',
  '**Whether anything happens.** The note is better, and I have the figures: of nine notes since February, four produced something. Of about thirty telephone calls I can name two, and one of those was the trolley going in rather than coming back.',
  '**Whether I have anything afterwards.** The note is the only one of the two that exists. Every telephone call I have made to that office in nine years is now nothing at all, including the four about the trolley.',
  '**What it costs me.** The telephone costs four minutes and a queue; the note costs about twenty minutes, because I write it properly, and that is the real reason I have made thirty calls and sent nine notes.',
  '**What I am doing.** Both, in a fixed order: telephone first, then one line in writing the same day saying what the call said. Four minutes extra and it is the only way the calls will exist in September.',
  '**And the thing the four lines showed me.** I have not been choosing between two methods. I have been choosing between twenty minutes and four, thirty times, and calling it a preference for the telephone.',
]));
out.push(S('Stage 7 · Write freely (sample, 173 words)'));
out.push(SAMPLE([
  '**TWO SHOPS, FOUR LINES** · M. Hariri · November · inside the cover of the fault book',
  'I have bought from both of these shops for six years and I have never compared them. This is four lines and it took forty minutes.',
  '**Price.** Shaalan is 4% cheaper across the eleven items I buy most often, from twelve months of my own receipts. That is slightly cheaper and not far cheaper: on one handset it is about the price of a glass of tea.',
  '**Paperwork.** Mezzeh files every delivery note by date and produced eight when I asked. Shaalan keeps only the notes that come with an invoice and throws the rest away. Mezzeh is far better and it is not close — and the four untraceable units in my batch claim came from Shaalan, which is what the 4% actually cost.',
  '**Getting a part in.** Shaalan is about twice as fast: two or three days against five or six. This is the largest difference between them and the one I notice every week, because a customer at a counter does not care where a note is filed.',
  '**Telling me when they do not know.** Abu Fadi says "I do not know, I will ask" about once a month and then telephones. The Shaalan man says "tomorrow". I cannot measure this and I am not going to pretend I can, and it is the line I would put first if I were only allowed one.',
  '**What I am doing.** Parts from Shaalan, stock from Mezzeh — and I have had it the other way round since 2019, and nobody made that decision, including me.',
]));
out.push(S('Stage 7P · Respond (sample slip — no stems)'));
out.push(A('_Three sentences:_ **"The line that changed my mind about my own shop is the last one, because I have two suppliers and I have never decided anything about either of them. I would put a figure next to \'twice as fast\' in days rather than as a multiple — two or three against five or six is clearer than twice, and you have both numbers anyway. And my question is what Abu Fadi would say if you showed him this page, because the fourth line is the one he would most want to read and the one you cannot prove."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Two counts — winners against _better at different things_ — and then the question about the criterion nobody can measure. In most of the pages with a winner, the winner was chosen on the unmeasurable line, and that is perfectly sound practice **as long as it is written down**, which is the sentence to end the cycle on.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I showed the four lines to Abu Fadi. He read the price line and said four per cent sounded about right, and then he read the fourth line twice and said: "nobody has ever told me that." Then he said something I did not expect — that he says "I will ask" because his father told him to say it, and that he loses about one customer a month to the other shop because of it. So the thing I value most about him is the thing he thinks costs him money, and neither of us knew what the other thought until a page with four lines on it was on the counter.']));

// ===================== 16.2 =====================
out.push(pb());
out.push(h2('16.2  One of the best, and by far the oldest'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Two questions of every superlative — **of how many?** and **on what?** — and keep the score on the board. In a first run neither question is answered in any of the six, which is not carelessness: a superlative with no field is the normal way the language is used in advertising, and most of the documents a class brings in are advertising.'));
out.push(A('**b** **1** _by far the best of the three on a sixty-four-page job_   **2** _the fastest of the four on small quantities_   **3** _the cheapest of the three, by about eleven per cent_   **4** _the most reliable of the three on dates_   **5** _the worst month of the nine for lateness_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Three paper agents. _Best_ turns out to mean _best at something_, and there are three of them.'));
out.push(A('**b** **1** A is by far the cheapest (about 11% under) and by far the latest (9, 16 and 23 days on three orders); B is the most reliable on dates and the dearest; C is second on both and is the only one who has ever telephoned before something was late.   **2** That a superlative with no number behind it is a compliment — and he has been reading compliments from all three of them for two years.'));
out.push(NOTE('The superlative of one is the teachable discovery of this cycle: **the only one who has ever telephoned me before it was late.** In a three-way comparison it is almost always the sentence that decides the matter, it is never in the price column, and it cannot be argued with. Teach students to look for _the only one who…_ in any comparison they make, and to notice that it is usually about what happens when something goes wrong.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _the oldest of the two machines — and the only one that will run a sixty-four-page job_ (two things: _the older_, and the superlative of one still works)',
  '**2** _the fastest of the three on anything under five hundred sheets, and the second fastest on a full order_',
  '**3** _the worst month of the nine: twenty-six late nights out of thirty-one_',
  '**4** _one of the two most reliable people on that shift, and the only one who writes anything down_',
  '**5** _the cheapest of the three by about eleven per cent, and by far the latest_',
]));
out.push(A('Item 1 carries the grammar trap worth naming: with **two** things the comparative is correct — _the older of the two_ — but a superlative of one (_the only one that…_) is still available and is often the stronger sentence.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** It is the best machine.',
  '**B:** It is the best of the two we have, on a long run — it will take sixty-four pages and the other one will not. And it is the worst of the two on short runs, because it takes forty minutes to set up.',
  '**A:** Is there a superlative of one in it?',
  '**B:** Yes, and it is the useful sentence: it is the only machine in this shop that has ever run a ministry order.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight fields, and three of them turn out to be **two**: with two things a superlative is wrong and the comparative is right — _the better of the two_. That is the commonest superlative error in the room and it survives into Unit 24 unless it is named here.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _What I would have called the best: our analyser. Properly: the faster of the two we have, by about thirty samples an hour, and the only one of the two that does a second read automatically. What it is worst at: small batches, because it has to be loaded with at least twelve._',
  '**b** _My partner\'s field is two, so it is not a superlative at all: the better of the two routes, and he has been calling it "the best way into town" for eleven years._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel has been comparing the three agents he can buy sixty-four-page stock from, because the paper is the whole risk on the ministry order. Ms Huda asked which is the best, and he said that is the question he wrote at the top of the page and crossed out: there is no best, there is a best at something, and there are three. Agent A is by far the cheapest — about eleven per cent under the other two — and by far the latest: nine, sixteen and twenty-three days over the date he gave, on the last three orders. Agent B is the most reliable on dates, two days early and one day late in three orders, and he is the dearest. Agent C is in the middle on both and is the only one of the three who has ever telephoned to say that something would be late before it was late. Nour said so C, and Bassel said so C, probably, and that is a different sentence from "C is the best agent": C is second cheapest of three and second most reliable of three, and the telephone call is doing all the work in the answer. Jad asked whether that is a very small thing to decide on, and Bassel said it is the only thing on the page that tells him what happens when something goes wrong, which is the only thing he needs to know, because the ministry date is his and not the agent\'s. Then Ms Huda made him say the three sentences properly, and asked what each one has in it that the originals had not: a number — of the three, the second, the only one. A superlative with no number behind it is a compliment, and he has been reading compliments from all three for two years.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ the most cheapest → ✓ the cheapest.   ✗ the best of my two shops → ✓ the better of the two.   ✗ one of the best supplier → ✓ supplier**s**.   ✗ the most reliable _(of what?)_ → ✓ of the three.   ✗ _by far_ on a one per cent gap → ✓ give the number instead.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Price: A, by far. Keeping to a date: B. Getting a small quantity in quickly: C. Telling him before it is late: C, and C only.'));
out.push(A('**2** He chooses C because the ministry date is his and the only thing on the page that says what happens when something goes wrong is one telephone call in February — and the phrase that is not a comparison at all is **the only one**.'));
out.push(A('**3** He is going to tell A exactly why he has not got the order — the three dates, nine, sixteen and twenty-three days, on one piece of paper — because A has never been told, and in two years nobody has given him a reason for anything.'));
out.push(NOTE('The last paragraph of this model is the cycle\'s practical argument and it is worth a minute with the class: telling the loser why, with figures, is the only part of a comparison that can change next year\'s comparison. Bassel adds the reason — _if he starts telephoning people before things are late he will be the best agent in Damascus inside a year_ — which is a prediction (14.1) with a date-free test, and the class may notice that too.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE PEOPLE I COULD ASK ABOUT THE 2009 FILE** · L. Sweidan · November · written before I ask any of them',
  'The question at the top of this page was "who is the best person to ask" and I crossed it out.',
  '**Likely to have it.** The departmental secretary is **by far the most likely of the three** — the file was logged to her office in 2011 and she has a cupboard nobody else opens.',
  '**Likely to answer.** My tutor is **the most likely of the three to answer within a week**, because he answers everything within a week; the secretary answered one of my two letters last year, and the university archivist has never answered anybody that I know of.',
  '**Able to say no on somebody else\'s behalf.** The archivist is **the only one of the three** who can say "that file cannot be released" and end it. That is the risk: a no from him is a no for ever, and a no from the secretary is a no this week.',
  '**What I recommend to myself.** The secretary, and in person rather than in writing, and not through my tutor — because the tutor is the fastest and the archivist is the only one who can close the question, and the order in which I ask them decides whether the question stays open.',
  '**What would change it.** If the secretary says the file went to the archive in a particular year, I ask the archivist with that year in my hand, which is a different question from the one I would be asking him now.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**THREE PAPER AGENTS** · B. Tahhan · November · written before I telephone any of them',
  'The question I wrote at the top of this page was "which is the best agent" and I crossed it out. There are three of them, they are best at different things, and the ministry date is mine.',
  '**Price.** A is **by far the cheapest of the three** — about 11% under B and 7% under C on sixty-four-page stock, from the last four orders. B is the dearest. On a twelve-thousand-copy job the gap between A and B is about two days of the older machine.',
  '**Keeping to a date.** B is **the most reliable of the three**: two days early, one day late, on time. C is **the second most reliable**: four and six days late. A is **by far the least reliable** — 9, 16 and 23 days on his last three — and he is the one I used in June, which is where six of my eight late days came from.',
  '**Getting a small quantity in quickly.** C is **the fastest of the three** under five hundred sheets. This matters twice a year and is on the page because it is true, not because it decides anything.',
  '**Telling me before it is late.** C is **the only one** of the three who has ever telephoned me before paper was late. One call, in February. A and B have never done it in two years.',
  '**What I recommend to myself.** C for the ministry order. Not because he is the best — second on price, second on dates — but because the only thing on this page that tells me what happens when something goes wrong is one telephone call in February.',
  '**And what I am not doing.** I am not leaving A without a reason. He gets the three dates on one piece of paper next week.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"\'The only one who has ever telephoned me before it was late\' is the sentence I am going to steal, because I have three suppliers and I can answer it about all three without looking anything up. I would cut the paragraph about small quantities — you say yourself it decides nothing, and on a page this short it reads as fairness rather than information. And my question is whether C knows that one telephone call in February is why he has the order, because if he does not, the one thing that earned it is the thing he is least likely to do again."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the superlatives of one, and then ask what each one is about. Almost all of them are about **what happens when something goes wrong** — who telephones, who says they do not know, who holds a spare, who answers at seven in the morning — and not one is about price, speed or quality. That is the finding to take out of the unit and into 16.6.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I told A. Not on the telephone — I took the three dates on one sheet and gave it to him in his own office, and I said that the nine, sixteen and twenty-three days were why the ministry order had gone elsewhere and that nobody had told him before because nobody tells anybody anything. He looked at the three numbers for a long time and said the twenty-three was a lorry held at the border for eleven days and that he had known on the second day. I asked why he had not telephoned me, and he said that nobody he sells to has ever wanted to be told early, because being told early means they have to tell somebody else.']));

// ===================== 16.3 =====================
out.push(pb());
out.push(h2('16.3  The more we counted, the less we argued'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Ask the follow-up every time — _has anybody ever counted it?_ — and keep the tally. Eleven patterns, nought or one counted: that gap is the cycle. Everybody in a workplace carries three or four of these and almost nobody has ever written one as a sentence with a number in it.'));
out.push(A('**b** **1** _The later it starts, the worse the round is._   **2** _The earlier you ask, the more likely the notes still exist._   **3** _The more trolleys there are, the less lateness there is._   **4** _The longer the block, the later in it the errors fall._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Three pairs, and the one she did not expect: the more they wrote down, the less anybody argued with them.'));
out.push(A('**b** **1** The later in a block a night is, the longer the round (about four minutes a night, on both sheets); the more trolleys, the less lateness (11 of 28 against 26 of 31); and the more they wrote down, the less anybody argued.   **2** That it is not a cause: she has not shown that writing things down **makes** people stop arguing — the form says two things move together and does not say which one is pushing.'));
out.push(A('The test belongs on the board for the rest of the book: **say the sentence the other way round and see whether it is just as likely.** _The less anybody argued, the more we wrote down_ is also possible — people write more when nobody is fighting them — and fourteen weeks of one ward cannot tell the two apart. A class that applies that test to its own sentences stops producing accidental causal claims, which is the commonest fault in B1 report writing.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The more trolleys there are, the less lateness — 11 late nights out of 28 with two against 26 out of 31 with one. Reversed: the less lateness there is, the more trolleys we are given — which is not happening, because nobody has ever given this ward a trolley for being on time._',
  '**2** _The more visits booked in a day, the later the fourth one — about eleven minutes per extra visit, from forty-one timings. Reversed: the later we run, the fewer visits are booked — would be true if the desk adjusted, and it does not._',
  '**3** _The earlier you ask a shop for a delivery note, the likelier it still exists — four of four inside three months, nought of four at six. Reversed: makes no sense, which is the clearest case on the page._',
  '**4** _The longer the block, the later in it the errors fall — seven errors, all on nights four and five. Reversed: the later the errors fall, the longer the block — meaningless; the block length is set by a rota and not by an error._',
  '**5** _The more we wrote down, the less anybody argued — one hour of argument in April against eleven words in September. Reversed: just as likely, and I cannot tell them apart._',
]));
out.push(A('Items 3 and 4 are the two where the reversal is **impossible**, which is the strongest kind of evidence available for a direction without an experiment. Teach students to look for it: where the reversed sentence is nonsense, the direction is probably real.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Trolleys and lateness.',
  '**B:** The more trolleys there are, the less lateness there is — about fifteen fewer late nights a month with two instead of one.',
  '**B:** The other way round: the less lateness there is, the more trolleys we get. I believe the first, because the trolley came from an equipment office that has never once given this ward anything for being on time.',
  '**A:** How many cases is that built on?',
  '**B:** One month with two trolleys and nine months with one. That is not a lot, and it is the only month anybody has ever counted.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight sentences with the number of cases next to each, and five or six where the reversed version is just as likely. Those are to be kept as **patterns** and never written as causes — and the honest sentence for a report is _these two move together and I cannot show which is pushing_, which is one line and keeps a page out of trouble.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _The more notes I send instead of telephoning, the more things happen — four out of nine notes against two out of thirty calls. Reversed: the more things happen, the more notes I send — possible, because a thing that moves makes me write it down. Built on nine notes and about thirty calls, which is nine months._',
  '**b** _My partner\'s is two cases pretending to be a law: two late deliveries in a wet month, and "the worse the weather, the later the paper". Two points are a line and not a pattern._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rasha has two sheets and fourteen weeks, and three things move together. One: the later in a block a night is, the longer the round takes — about four minutes a night, on both sheets, which is the pattern she came in with. Two: the more trolleys there are, the less lateness — eleven late nights out of twenty-eight with two trolleys against twenty-six out of thirty-one with one. And three, which is not about nights at all: the more we wrote down, the less anybody argued with us. In April she had nine months of figures and a committee that argued about the explanation for an hour; in September she had the same figures plus a limits page, and the argument was eleven words long. Jad said that is not a cause, and she agreed: the form says two things move together and does not say which is pushing. The test is to say it the other way round and see whether it is just as likely — the less anybody argued, the more we wrote down is also possible, and fourteen weeks of one ward cannot separate them. Then Nour said they have one at work that nobody has said out loud: the more visits booked in a day, the later they are by the fourth. Everybody knows it, the desk books five because five is what the schedule allows, and nobody has written it as a sentence — and a sentence with two halves is the only way to say it in one line to a man who has thirty seconds. Ms Huda said that is what the grammar is for: two columns of figures are an argument, and a two-halved sentence is a thing that gets repeated in a corridor, which is where decisions are actually made.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ More we counted, less we argued. → ✓ **The** more…, **the** less…   ✗ The more we counted, we argued less. → ✓ both halves in the fixed shape.   ✗ The more trolleys, the less late. → ✓ _the less lateness_ · _the fewer late nights_.   ✗ two cases presented as a pattern → ✓ say how many.   ✗ a pattern written as a cause → ✓ reverse it and see.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** _The more visits that are booked in one day, the later we are by the fourth_ — about **eleven minutes for every extra visit**, from forty-one timings.'));
out.push(A('**2** Because the reversed version would require somebody to adjust the bookings when they ran late, and nobody does: the desk books five whatever happened yesterday. The booking is done in advance by somebody who does not see the result.'));
out.push(A('**3** Nothing, deliberately — _the desk can decide what to do with one sentence, and I would rather they decided it than agreed with me_.'));
out.push(NOTE('The Writer\'s box flags a real tension with 14.7, and it is worth putting to the class rather than resolving: 14.7 says that a forecast which asks for nothing leaves the decision to whoever reads it most carefully, and 16.3 says that a page with no request in it is sometimes the most persuasive document in the building. Both are true. The test is whether the reader **can act alone**: Rasha\'s committee could not give itself a trolley, and Nour\'s desk can change a booking without asking anybody.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SECOND READ AND THE AFTERNOON** · one page, two sentences · Y. Mansour',
  '**The sentence.** The fuller the machine is when a batch is loaded, the less often the second read is done — **nineteen of thirty afternoon batches against thirty-one of thirty-four in the morning**, from two weeks of my own records.',
  '**What it looks like in practice.** A morning batch goes into a machine that is a third full, with two people on the bench: second read done. An afternoon batch goes into a machine two-thirds full with one person: second read done about two times in three.',
  '**Why it happens, so far as I can see.** Not because anybody has decided to skip it. A full machine means the second read waits for the first to finish, and the person who would do it is the person loading the next rack.',
  '**The other way round.** _The less often the second read is done, the fuller the machine_ — meaningless: the machine is filled by the day\'s work and not by our checking.',
  '**What it is built on.** Sixty-four batches over two weeks, recorded by me, including the eleven afternoon batches where I was the person who did not do it.',
  '**What I am asking for.** Nothing in this page. I do not know what the standard is, I have asked twice, and until somebody tells me the number this is a description and not a complaint.',
]));
out.push(S('Stage 7 · Write freely (sample, 172 words)'));
out.push(SAMPLE([
  '**FIVE VISITS IN A DAY** · one page, four sentences, for the appointments desk · N. Sabbagh',
  '**The sentence.** The more visits that are booked in one day, the later we are by the fourth — about **eleven minutes for every extra visit**, from forty-one visits timed between March and August.',
  '**What it looks like in a day.** Three visits: the third starts about six minutes late. Four: the fourth starts about twenty-five minutes late. Five: the fifth starts about fifty minutes late — and the customer of the fifth visit is the one who telephones to complain.',
  '**Why it happens, so far as I can see.** Not because anybody is slow. The schedule allows twenty minutes between appointments; the real travel time is twenty-five to forty inside a district and forty-five to an hour between districts. The gap adds up in one direction only, because nobody arrives early enough to give the time back.',
  '**The other way round, which I have thought about.** _The later we are, the fewer visits get booked_ — that would be true if anybody adjusted the bookings when we ran late, and nobody does. So I am fairly confident which half is pushing, and only because the booking is done in advance by somebody who does not see the result.',
  '**What it is built on.** Forty-one visits timed from the doorbell to the signature, by me; eleven days of five visits and nine of four.',
  '**What I am asking for.** Nothing. The desk can decide what to do with one sentence, and I would rather they decided it than agreed with me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Eleven minutes per extra visit is the thing I will remember, and it is the only number on the page the desk can do arithmetic with. I would cut \'not because anybody is slow\' — you have the travel times, so the sentence defends you against an accusation nobody has made yet. And my question is why you are asking for nothing when the desk can change a booking without permission, because this is exactly the case where one sentence of a request would cost you nothing."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Read the eleven sentences and then count how many have been said to the person who decides the first half. One or two. That is the gap the cycle exists for, and the homework closes it: say it in a corridor and write down the first four words that come back.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I said it to Rania at the desk, standing up, in about nine seconds: the more visits you book in a day, the later we are by the fourth, and it is about eleven minutes each. Her first four words were "so does everybody else". Then she said that she has been given a target of five a day and that nobody has ever shown her what the fifth one costs, and she asked me to put the eleven minutes in an email so that she could send it on, which is the opposite of what I expected and is the first time anybody at that desk has asked me for anything in writing.']));

// ===================== 16.4 =====================
out.push(pb());
out.push(h2('16.4  Done faster, done more carefully'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The second question is the one worth the time: all six are normal in speech and all six are marked in a Preliminary script. Say that plainly rather than pretending the spoken forms are wrong — a class that is told _quicker_ is wrong stops believing the teacher, and a class that is told it is spoken and not written remembers the distinction.'));
out.push(A('**b** **1** adjective — the machine itself   **2** adverb needed: _runs **more slowly**_   **3** adverb, correct   **4** adjective, correct   **5** spoken; in writing _more quickly_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** The morning batch and the afternoon batch: the same tests, machine and people, handled differently. The difference she can prove is the second read — **31 of 34** morning batches against **19 of 30** afternoon.'));
out.push(A('**b** **1** Because the tests and the machine are the same; what differs is how the work is done — loaded more slowly, checked more carefully, with two people and a rack that is not full.   **2** That _slower_ is what everybody says and is not wrong in speech, but in writing _the afternoon batch is loaded slower_ reads as though the batch itself were slow.'));
out.push(NOTE('The grammatical point and the ethical one are the same point, and Ms Huda says it in one line: **an adjective describes the thing and an adverb describes the doing** — so _the afternoon samples are slower_ blames the samples, and _the afternoon samples are handled faster and checked less carefully_ blames us. That is why the adjective version is so comfortable to write, and it is worth asking the class to look for it in their own reports about work: _the forms are slower_, _that ward is later_, _the old machine is worse_.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The afternoon batch is **loaded faster** — by one person, into a machine two-thirds full._ Doing it: us.',
  '**2** _The old machine is **set up more slowly**, about forty minutes against twelve._ Doing it: the man setting it up.',
  '**3** _That ward\'s forms **are filled in later** — at the end of a shift rather than at the bed._ Doing it: the nurses on that ward, which includes me on Thursdays.',
  '**4** _He **repairs them more quickly** and **tests them less thoroughly**: about forty minutes against my sixty, and no second power-up._ Doing it: him, and I have never said it to him.',
  '**5** _The second shift **records faults less often** — nine entries in a month against twenty-six._ Doing it: four named people, two of whom have never been shown the book.',
]));
out.push(A('Every answer names **who is doing the thing**, which is the test the cycle turns on. Item 5 carries the second half of it: when you name the people, you often find that two of them were never told — which moves the sentence from an accusation to a description of a gap.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The afternoon batch is slower.',
  '**B:** As an adverb: the afternoon batch is loaded faster and checked less carefully. The person doing it is whoever is alone on the bench after three, which is me on four days out of five.',
  '**A:** Does that put the fault somewhere else?',
  '**B:** It moves it from the samples to us, and from "us" to me on four days out of five, which is the version I would have avoided writing a year ago.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Six or seven of the eight move the fault from a thing to a person. Name what that means: the adjective version is not a grammar mistake, it is a way of writing that nobody has to answer for — and it is the default in every workplace notice the class has brought in since Unit 13.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Monday mornings and Thursday mornings on the same counter. On Mondays the fault book is filled in at the counter as each unit comes in; on Thursdays it is written up at six from memory, less accurately, by me, because Thursday is the day the Mezzeh stock arrives. Repairs are done about as carefully on both days, so far as I can tell, and I have looked. And units are tested less thoroughly on Thursdays: no second power-up on about half of them._',
  '**b** _My partner wrote "the night sheet is worse" and means that he fills it in worse, at the end instead of as he goes — and he is the only person who fills it in._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara\'s two weeks of times are finished and she has something she did not expect: the morning and afternoon samples are not treated differently, they are handled differently. The same tests, the same machine, the same people — but the morning batch is loaded more slowly and checked more carefully, because there are two of them on the bench until one o\'clock and the racks are not full, and the afternoon batch is loaded faster, by one person, into a machine already two-thirds full, with the second read done less often. Jad asked how much less often: the second read was done on thirty-one of thirty-four morning batches and nineteen of thirty afternoon ones — and she is one of the people who did not do it, eleven times. Nour said so the delay is not the only difference, and Yara said the delay is the one everybody talks about because a ward can see it: the second read is invisible, nobody has ever counted it, and it is the one she would be worried about if she were a doctor. Lubna asked about the grammar, because she would have said "slower", and Yara said so would she until she wrote it: slower is what everybody says and is not wrong in speech, but in writing the thing being compared is how it is loaded, and "the afternoon batch is loaded slower" reads as though the batch itself were slow. Ms Huda said that is the reason the cycle exists: an adjective describes the thing and an adverb describes the doing, and the adjective version quietly moves the fault onto the object — the afternoon samples are slower blames the samples; the afternoon samples are handled faster and checked less carefully blames us. And Yara said the second one is the sentence she has written, and it has her own eleven in it.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ He writes slow. → ✓ writes slowly.   ✗ They did it quicker than us. _(in writing)_ → ✓ more quickly than we did.   ✗ She explained it more clear. → ✓ more clearly.   ✗ It works more good. → ✓ better.   ✗ _hardly_ for _hard_ → ✓ _works harder_ against _hardly works_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The first page is about **when** samples are released — afternoon samples later, by a mean of nine hours and forty minutes. This page is about **how** they are handled, which nobody has ever counted.'));
out.push(A('**2** Checking against the request form: _done as carefully in the afternoon as in the morning, so far as I can see — I could find no difference and I looked for one._'));
out.push(A('**3** That if somebody fixes the visible delay by loading the afternoon batch faster still, the invisible thing — the second read — gets worse and nobody will know, including the laboratory.'));
out.push(A('The paragraph that finds **nothing** is what makes this page credible, and it is the hardest thing to persuade a student to write: _I could find no difference and I looked for one._ A report that finds a difference in every row is a report that was looking for one. The second teachable move is the refusal to assume a standard: _nineteen out of thirty may be entirely acceptable; I do not know what the standard is and I have asked twice._'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO DAYS ON ONE COUNTER · THE PAGE ABOUT HOW** · M. Hariri · November',
  'The visible thing is that Thursday repairs take longer to get back to the customer, and everybody at the counter knows it.',
  'This page is about **how** the work is done on the two days, and nobody has ever counted it.',
  '**The fault book.** On Mondays it is filled in at the counter as each unit arrives. On Thursdays it is written up at six, from memory, by me — less accurately: in the two weeks I checked, four of the eleven Thursday entries had the wrong fault written against the model.',
  '**Testing.** Units are tested less thoroughly on Thursdays: no second power-up on six of the eleven. On Mondays, every one.',
  '**The repair itself.** Done as carefully on both days, so far as I can tell, and I looked: the fifteen Thursday repairs in those weeks have produced one return and the twenty-two Monday repairs have produced two.',
  '**What this page is not.** It is not an argument for closing on Thursdays, and it is not about anybody else: on both days the person at this counter is me.',
  '**Why I am writing it anyway.** Because the slow return is visible and the wrong fault in the book is not — and the book is the thing I have spent a year building a batch claim on.',
  '**And the sentence that is mine.** Four wrong entries out of eleven, written by me at six in the evening on the day the stock comes in.',
]));
out.push(S('Stage 7 · Write freely (sample, 175 words)'));
out.push(SAMPLE([
  '**TWO WEEKS OF TIMES · THE SECOND PAGE** · Y. Mansour · 20 November',
  'The first page of this report is about **when** samples are released, and it says what everybody expected: afternoon samples are released later, by a mean of nine hours and forty minutes.',
  'This page is about **how** they are handled, and nobody has ever counted it.',
  '**Loading.** The morning batch is loaded more slowly: two people, a rack that is not full, and the sheet checked against the rack before the machine is started. The afternoon batch is loaded faster, by one person, into a machine already about two-thirds full.',
  '**The second read.** Done on **31 of 34** morning batches and on **19 of 30** afternoon batches. I did the loading on fourteen of the afternoon batches and did not do the second read on eleven of them.',
  '**Checking against the request form.** Done as carefully in the afternoon as in the morning, so far as I can see — I could find no difference and I looked for one.',
  '**What this page is not.** Not a complaint about staffing, and not an argument that the afternoon work is wrong. Nineteen out of thirty may be entirely acceptable; I do not know what the standard is and I have asked twice and not been told.',
  '**Why I am writing it anyway.** Because the delay is visible and the second read is not. If somebody fixes the delay by loading the afternoon batch faster still, the invisible thing gets worse and nobody will know, including us.',
  '**And the sentence that is mine.** I did not do the second read eleven times, alone, with a full machine and a bag that had come in at ten past three.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The paragraph where you found nothing is the reason I believe the two you did find, and I would never have thought to write one. I would move \'what this page is not\' above the three findings — a reader on the pathology office\'s side will have decided it is a staffing complaint by the second paragraph and will read the rest looking for proof. And my question is what the standard actually is, because you have asked twice and the page does not say who you asked, and the third asking should have a name on it."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Count the pages with the writer\'s own number in them, then ask the harder question: of the pages without one, how many are about work the writer does themselves? Those will be read as accusations whatever they say, and the fix is one sentence — which is the whole argument of 16.4 and of 15.6 in the same breath.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave it to the man on the other counter, who does Tuesdays and Saturdays. His first sentence was that he writes his book up at the end of every day, not just on stock days, and that he has never thought about it. His second was the useful one: he keeps a scrap of paper in his pocket and writes the model and fault on it as each unit comes in, and then copies it at six — which is exactly what I should do on Thursdays, and he has been doing it for four years because his handwriting is bad and he did not want to be seen writing slowly in front of customers.']));

// ===================== 16.5 =====================
out.push(pb());
out.push(h2('16.5  In terms of what?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the restriction is the exercise: B may ask only the two questions. Nothing teaches the cycle faster than being asked _in terms of what?_ four times in ninety seconds about a decision you thought you had already made. Expect two or three students to change their criteria while speaking, and ask who did.'));
out.push(A('**b** **1** price   **2** what happens when something goes wrong   **3** paperwork, or traceability   **4** speed on small quantities   **5** whether anybody answers at all — which is a criterion almost nobody writes down and almost everybody decides on.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** That she wrote her criteria **after** she had chosen — and the building she chose is by far the best of the three on the criterion she put first and by far the worst on the one she put fourth.'));
out.push(A('**b** **1** Light, floor area, the state of the stairs, distance from the main building, and the lavatories. She moved **distance** to the top and the **lavatories** from fifth to second.   **2** That criteria written after you look are the criteria that choose what you had already chosen — and they are not dishonest: they are what you noticed, and what you noticed is what you are good at noticing.'));
out.push(NOTE('This is the most expensive lesson in the unit and the one most worth labouring. Lubna is not careless: she is an architecture student, light is what she notices, and the building she chose has the best light she has ever stood in. Her honesty is in the sentence _I cannot tell those two reasons apart, which is the problem_ — and the remedy is mechanical rather than moral: write the criteria down, in order, **before** you look, and then ask whose criteria they are.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Criteria, in order: 1 whether they tell me when something is late; 2 price; 3 speed on small orders; 4 paperwork. In terms of the first, C. In terms of price, A, by eleven per cent._',
  '**2** _1 whether the road is ever closed; 2 time at seven in the morning; 3 time at four in the afternoon; 4 fuel. In terms of the first, the Mezzeh road, which has never been closed in eleven years._',
  '**3** _1 which fault will stop the work; 2 which is cheapest to put right; 3 which has been waiting longest. As far as the first is concerned, the wheel; as far as the third is concerned, the switch, which has been waiting since 2009._',
  '**4** _1 who will answer at all; 2 who can decide alone; 3 who will tell me what they do not know. In terms of the second, the manager; in terms of the first and third, Abu Fadi — and the order of those three criteria decides whom I ask first._',
  '**5** _1 what nobody is counting now; 2 what takes under five minutes a day; 3 what somebody else could keep if I stopped. In terms of all three, the round completion time — which is the record I did start, and the only one of the three that has survived._',
]));
out.push(A('Each answer puts the criteria **first** and numbered, and in each one the order is doing the work. Item 4 is the clearest demonstration: the same three people, three criteria, and the order decides whom you ask first — which is a real decision made every day by everybody in the room.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Which of two suppliers to use for the main order.',
  '**B:** My criteria, in order: one, whether they tell me before something is late; two, keeping to a date; three, price; four, speed on small quantities.',
  '**B:** In terms of the first, C — the only one who has ever telephoned. As far as dates are concerned, B. In terms of price, A, by eleven per cent, and price is third.',
  '**A:** Whose criteria are those?',
  '**B:** Mine, and they are the criteria of a man who was eight days late in June in front of a ministry. Two years ago my first criterion was price and I would have written this page the other way up.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Four criteria per pair, and then the two questions. About half the lists turn out to be one person\'s professional habit — the thing that person is best at noticing — and naming it is not a criticism. The useful follow-up is the one from the model: _whose criterion is missing?_ In Lubna\'s case it was the lavatories, and the nine women in her year had it second.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Criteria for the record I decided to start in September, written now: 1 nobody else is counting it; 2 under five minutes a night; 3 somebody else could keep it. Honestly: I wrote them after I started, and the record I started meets all three, which should make me suspicious of the list._',
  '**b** _My partner would have to move "cost" to the top for his decision to change, and he has it fourth, and he works in a department where everything is decided on cost — so his page will be read against a different list than the one on it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The university has to choose between three buildings for the second-year studios, and Lubna\'s tutor asked four students for a page each. She did what everybody does: went round all three with a notebook and wrote a page recommending the one on Sharia Baghdad. Then she looked at her own page to find out what her criteria had been — five of them, in this order: light, floor area, the stairs, distance, and the lavatories. Jad asked what is wrong with that, and she said nothing is wrong with the five: what is wrong is that she wrote them after she had chosen, and the building she chose is by far the best of the three on light and by far the worst on distance, and distance came fourth. Omar said so she put light first because the building she liked is good at light, and she said she put light first because she is an architecture student and light is what she notices — and she cannot tell those two reasons apart, which is the problem. So she started again, wrote the criteria before looking at any of the three, and the order came out different: distance first, because a studio twenty minutes away is used for four hours and not for ten; then area per student; then light; then stairs; then the lavatories, which she had fifth and which belong second if you ask the two women in her year who use them. And the recommendation changed: in terms of light Baghdad is by far the best, in terms of distance and area per student it is the worst, and as far as the four hours a day are concerned the building on the university side wins — the one she walked round in eleven minutes and dismissed because the light is poor and the stairs are ugly. The rule she had found: criteria written after you look are the criteria that choose what you had already chosen, and they are not dishonest — they are what you noticed, and what you noticed is what you are good at noticing.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ In terms of light it is better in terms of light. → ✓ once per sentence.   ✗ As far as the distance. → ✓ as far as the distance **is concerned**.   ✗ In term of → ✓ in terms of.   ✗ criteria with no definition → ✓ say how each is measured.   ✗ four criteria and no order → ✓ number them.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The lavatories, from fifth to second — because the two women in her year have it second, there are nine of them, and she is not the person who finds out whether they work.'));
out.push(A('**2** Fourth, on purpose, because it is what she notices first every time.'));
out.push(A('**3** Baghdad — and that she would be in it for four hours a day instead of ten, and that she would have written the page the other way round if she had not written the criteria down first.'));
out.push(A('The last paragraph of the model is the most persuasive thing in the unit: a page that states the writer\'s preference and then recommends against it. Ask the class what it costs her to put it in — nothing, except the appearance of certainty — and what it buys: a tutor who can see exactly where the judgement was made, and therefore has no reason to doubt the rest.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHICH RECORD TO START IN JANUARY** · R. Barakat · November · criteria first',
  '**My criteria, written before I looked at any of the three options, in order.**',
  '**1 Is anybody else counting it?** If somebody is, my version adds nothing. Measured by asking the two offices that would hold it.',
  '**2 Can it be kept in under five minutes a night?** Not "is it quick": five minutes, timed, at the end of a round when I am least able.',
  '**3 Could somebody else keep it if I moved to days?** Measured by whether a nurse who has never seen it could fill in a line correctly from the heading alone.',
  '**4 Will it still mean anything in a year?** A count of something that changes every month is a count of the month.',
  '**And then the three options.** **In terms of the first**, the day round wins: nobody has ever counted it, and both offices confirmed that. **In terms of the second**, the clipboard count wins — about ninety seconds. **In terms of the third**, the day round again, because the heading explains itself. **In terms of the fourth**, the day round, and the clipboard count fails: a clipboard is a thing that will be replaced and then the count means nothing.',
  '**My recommendation.** The day round, from the first of January.',
  '**What I would rather do.** The clipboard count, because it would be finished in a month and would prove me right about something small. The day round will take a year and may prove me wrong.',
]));
out.push(S('Stage 7 · Write freely (sample, 177 words)'));
out.push(SAMPLE([
  '**THREE BUILDINGS FOR THE SECOND-YEAR STUDIOS** · L. Sweidan · November · the criteria are on this page before the buildings are',
  '**My criteria, written before I went back to any of the three, in order.**',
  '**1 Distance from the main building.** A studio more than fifteen minutes away is used for four hours at a time and not for ten, and most second-year work happens in the hour you were going to go home.',
  '**2 Floor area per student in the busiest week.** Not total area: area per student in the week before a hand-in, when every table is occupied.',
  '**3 The lavatories.** I had this fifth in my first version. The two women in my year have it second, there are nine of us, and I am not the person who finds out whether they work.',
  '**4 Light.** Which is what I notice first every time, and what I have put fourth on purpose.',
  '**5 Stairs and access.** The 1962 staircase in the Baghdad building is 76 cm and outward-opening at the bottom, which is a real problem and not a preference.',
  '**And then the three buildings.** In terms of distance, the university-side building wins by a long way: four minutes against nineteen and twenty-two. In terms of area per student in the busiest week, 2.4 m² against 1.9 and 2.1. In terms of the lavatories, it is the only one of the three with two that work. In terms of light it is by far the worst: north-facing, two of four rooms with one window each. In terms of stairs, Baghdad is the worst.',
  '**My recommendation.** The university-side building: it wins on the first three criteria and loses badly on the fourth.',
  '**And what I would say if somebody asked which building I would rather work in.** Baghdad — and I would be in it for four hours a day instead of ten, and I would have written this page the other way round if I had not written the criteria down first.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"Putting light fourth and saying you did it on purpose is what makes the whole page trustworthy, and I would not have believed the recommendation without that line. I would give the lavatories a measurement like the others — \'two that work\' is a count, so say how you counted and on what day, because it is the criterion somebody will challenge. And my question is whether the four other students were given the criteria or chose their own, because four pages with four different orders will be read as four opinions and one page with the same five criteria in it would be a decision."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Hands for criteria written afterwards — most of the room, including the honest ones — and then the count of lists with somebody else\'s criterion in them. One or two. The second number is what matters, because a decision made on one person\'s criteria is one person\'s decision wearing a page of arithmetic, however good the arithmetic is.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I showed the five criteria — not the recommendation — to the two women in my year and to the man who runs the model workshop. The women moved nothing and said the second place was right. The workshop man added one I had not thought of and would never have thought of: whether a door is wide enough to get a 1200 by 800 board through without turning it, which is the thing that decides whether second-year students build anything at all. He has been in that workshop for twenty-two years and nobody from the department has asked him about any of the three buildings.']));

// ===================== 16.6 =====================
out.push(pb());
out.push(h2('16.6  The recommendation paragraph'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Read only the **last paragraph** of each document, which is where a recommendation is supposed to be, and ask what is being recommended. In two of four it cannot be said — the paragraph says that both options have merits, that further consideration is required, or that it is for the management to decide.'));
out.push(A('**b** Recommendations: **2** and **4** — and **4** is the better of the two, because it carries its own trigger. Not **1**, **3** or **5**, all of which are ways of not writing the sentence.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** The verdict, the reason, the limit and the trigger — and the **trigger** is the one people leave out.'));
out.push(A('**b** **1** Somebody else makes the decision from your page, and they make it on the first column, because that is the one a busy person reads; she has watched a man choose a supplier off a nine-row table because the first row was price.   **2** If C gives a date and misses it without telephoning first, B gets the next ministry order at 11% above A — and Bassel writes it so that in February he cannot argue with himself about what he decided in November.'));
out.push(NOTE('Bassel\'s admission is worth reading twice: he has left the trigger out of **every** decision he has written down in nineteen years, because it feels like saying you might be wrong. Nour\'s phrase for it is the one to keep — _writing down the thing that will embarrass you_ — and Ms Huda\'s answer to _it is for the management to decide_ is the sentence the cycle exists for: **the sentence you are afraid of writing is the sentence they are paying you for.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _C, at 7% above the cheapest. Not because he is best but because he is the only one who warns me. For the ministry order only. If he misses a date without telephoning, B gets the next one at 11% more._',
  '**2** _The university-side building. Not because it is the best building but because it is the one that will be used for ten hours a day. For the second-year studios only. If the lavatories are not repaired by September, the case changes and I will say so in writing._',
  '**3** _Replacements at 60 minutes. Not because the figure is exact but because 55 is the mean of forty-one timings. For one month. If a fifth visit goes into the gap, the month proves nothing and should be run again._',
  '**4** _Sister Nasr on the early block, not me. Not because she is more senior but because her sheet is fourteen weeks old and mine is nine months, and a fresh sheet on the harder block is the better test. For this quarter. If she asks to come off it, she comes off it that night and I take it._',
  '**5** _The day round, from January. Not because it is the most interesting but because nobody is counting it. For a year. If it takes more than five minutes a night by March, I stop and say so, because a record that costs ten minutes will not survive me._',
]));
out.push(A('All five carry the four parts, and in four of the five the trigger is **specific enough to recognise on the day**. Item 4 is the one to read aloud, because the trigger is about a person\'s right to withdraw — the hardest kind to write and the one that makes the recommendation safe to agree to.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Two suppliers for a big order.',
  '**B:** C for the main order, at seven per cent above the cheapest. Not because he is the best — he is second on price and second on dates — but because he is the only one who has ever told me before something was late. This is for the big orders only and says nothing about the small ones, where A is eleven per cent cheaper. And if C misses a date without telephoning first, B gets the next one at eleven per cent more.',
  '**A:** Will you actually do what your trigger says?',
  '**B:** I think so, and the reason I have written it down is that in February I will not want to, because eleven per cent of a ministry order is about two days of the older machine.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Eight triggers, and about half are not triggers at all: _if the service gets worse_, _if it becomes a problem_, _if things do not improve_. The test is whether you would **know on the day**. Rewrite two of the vague ones with the class and the rest of the room fixes its own.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Verdict: the day round, from the first of January. Reason: not because it is the most interesting of the three, but because both offices have confirmed that nobody is counting it. Limit: a year, and it says nothing about the clipboard, which is a separate question. Trigger, made precise: if it takes more than five minutes on more than four nights in any week, I stop and write down that I stopped._',
  '**b** _My partner would act on his trigger and it would cost him a conversation with his brother, which is why it is the only one on the page with a date in it — he has given himself until the end of January so that he has eight weeks of not having to have it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda said that today every comparison ends in a sentence, and asked Nour what happens to one that does not: somebody else makes the decision from your page, and they make it on the first column, because that is the one they read — she has watched a man choose a supplier off a table of nine rows because the first row was price and he was busy. Then the four parts, from Bassel: the verdict first, in one sentence; the reason, which is not that the thing is best; the limit, which is what the recommendation does not cover; and the trigger, which is what would have to happen for the answer to change. Jad asked which one gets left out, and Bassel said the trigger — he has left it out of every decision he has written down in nineteen years, because it feels like saying you might be wrong. His own: agent C for the ministry order; not because he is best, since he is second on price and second on dates, but because he is the only one who has ever telephoned before something was late, and the ministry date is his. The limit is that it covers the ministry order only and says nothing about small jobs where A is eleven per cent cheaper and a week late is nobody\'s disaster. The trigger: if C gives a date and misses it without telephoning, the page is wrong and B gets the next order at eleven per cent more. Rasha asked whether he will do it, and he said the reason the trigger is in a sentence is so that in February he cannot argue with himself about what he decided in November. Nour said they call that writing down the thing that will embarrass you. And Ms Huda said the verdict goes first, because a reader who reaches the end without one has already decided, and the trigger last, because it is the only part about the future — and that the sentence you are afraid of writing is the sentence they are paying you for.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Both options have advantages. → ✓ a verdict.   ✗ Further consideration is required. → ✓ say what would settle it, and by when.   ✗ It is for the management to decide. → ✓ it is, and they will decide better with a recommendation.   ✗ a trigger you would not notice → ✓ one you would know on the day.   ✗ a verdict with no cost in it → ✓ say what it costs.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Agent C for this order, at 7% above the cheapest quotation — because C is the only one of the three who has ever telephoned to say paper would be late **before** it was late, and the ministry date is his own.'));
out.push(A('**2** The small jobs, where A is 11% cheaper and a week late costs nobody anything — and quality: all three sell the same two mills\' stock and he has never been able to tell them apart on the machine.'));
out.push(A('**3** If C misses a date without telephoning first, B gets the next ministry order at 11% above A — written in a sentence so that in February he cannot argue with himself about what he decided in November.'));
out.push(NOTE('Two features of this page are worth copying into any trade. The verdict carries **its own price** — _at 7% above the cheapest quotation_ — so nobody can reverse it later by discovering the cost. And the paragraph about quality is a **refusal to differentiate**: all three are the same and he says so. Students think a comparison has to find a difference everywhere; a page that says _I could not tell these apart_ in one row is believed in the others.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHICH OF TWO WAYS TO BOOK REPLACEMENTS · RECOMMENDATION** · N. Sabbagh · November · for the appointments desk, and I will read it again on 2 January',
  '**The verdict.** Book replacements at 60 minutes for one month, at a cost of about four hours of unbooked capacity a week.',
  '**The reason, which is not that 60 is the right number.** 55 is the mean of forty-one timings and the range is 38 to 80, so 60 is a round number chosen to be safe rather than accurate. The reason for the month is not the figure: it is that the complaint log gives a reason and "late" was 31 of 44 in August, which means the month can be judged by somebody who is not me.',
  '**What this does not cover.** New installations, which I have timed at a mean of 110 against a booked 90 and which need a longer conversation; and the twenty minutes allowed between appointments, which is the bigger problem and is not mine to raise.',
  '**The trigger.** If a fifth visit is put into the gap the 60 creates, the month proves nothing: in that case I will say so in writing in the first week, and the month should be run again rather than counted.',
  '**And the thing that is not in the four parts.** The engineer in the north district has been booking his replacements at an hour for a year. If this month works, the desk should be told that it was his idea before it was mine, and he should be asked whether he wants to be named.',
]));
out.push(S('Stage 7 · Write freely (sample, 178 words)'));
out.push(SAMPLE([
  '**PAPER FOR MINISTRY ORDER 2026/2 · RECOMMENDATION** · B. Tahhan · 12 November · for my own file, and I will read it again in February',
  '**The verdict.** Agent C, for this order, at 7% above the cheapest quotation.',
  '**The reason, which is not that he is the best.** C is second of three on price and second of three on keeping to a date. He is **the only one of the three** who has ever telephoned me to say that paper would be late before it was late — once, in February, about eleven days. The ministry date is mine: I have written two dates in a box and signed my name under them, and the only thing I need from an agent is to be told early when the first one has gone. A is 11% cheaper and was 9, 16 and 23 days late on his last three orders, and told me on none of them.',
  '**What this does not cover.** The ministry order only: twelve thousand copies, one delivery. It says nothing about the small jobs, where A is 11% cheaper and a week late costs nobody anything, and I shall go on using A for those. It says nothing about quality either: all three sell the same two mills\' stock and I have never been able to tell them apart on the machine.',
  '**The trigger.** If C gives me a date and misses it **without telephoning me first**, this page is wrong. B gets the next ministry order at 11% above A, and I shall pay the difference and not enjoy it. I am writing that in a sentence so that in February I cannot argue with myself about what I decided in November.',
  '**And the thing that is not in the four parts.** A gets the three dates on one piece of paper next week, because he has never been told.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('_Three sentences:_ **"The verdict carrying its own seven per cent is the part I would copy, because it stops the price being used against you in February by somebody who has just discovered it. I would cut \'and I shall pay the difference and not enjoy it\' — it is the one sentence on the page written for yourself rather than for the file, and the file is where this is going. And my question is what you will do if C telephones you and is then still twenty days late, because your trigger is about the telephone call and not about the date, and that is either very wise or a hole."**'));
out.push(S('Stage 7R · Share'));
out.push(A('Hands for triggers they would recognise on the day, and then the real count: whose trigger would **cost** them money, time or face if they acted on it? Three in a class of eleven, and those three are the only real decisions in the room. Say so, and say that the other eight pages are still better than what they replaced.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I did the last paragraph with the loser. I told the man at the second shop that the stock order is going to Mezzeh from January and why, with the four lines on one page, and the four untraceable units written at the bottom. He read it standing up. Then he said that he throws the notes away because his brother told him that keeping paper is how the tax people find you, and that nobody has ever asked him for a note in eleven years, and that he would keep them in a box for me if I wanted him to. So the trigger I wrote for him — if he keeps notes for six months, he gets the stock order back — is now on the page, and I have given him a copy with that sentence in it.']));

// ===================== 16.7 =====================
out.push(pb());
out.push(h2('16.7  Review & Mediate: What is not in the columns'));
out.push(S('Stage 1 · Unit 16 quiz – corrections'));
out.push(A('**1** It is **cheaper** than the other one.   **2** It is not as cheap **as** it looks.   **3** She explained it more **clearly**.   **4** It is the **better** of my two shops.   **5** **The** more we counted, **the** less we argued.   **6** **In terms of light**, it is better than the other two.'));
out.push(A('Items **4** and **6** are the two that survive into Unit 24 if they are not named: ⚠ a superlative with a field of two, and ⚠ _in terms of_ used twice in one sentence.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** What is not in the columns: how long a wheel takes to come; whether anybody will chase it (there is no form for chasing equipment); what the ward does while the trolley is away (twenty-six late nights out of thirty-one); and whether a drug chart lies flat in the drawers. The only row that matters is **row six, the wheel diameter** — 125 mm against 160.'));
out.push(A('The arithmetic in this dialogue is one division and it is the model for every comparison the class will read: **convert the saving into the thing it buys.** 17% is about 390,000; a wheel is about 11,000; the cheaper trolley is cheaper by thirty-five wheels and will cost the ward a hundred and twenty late nights waiting for the first one. And the other finding is structural: rows six and eight are the same question four rows apart, and nobody noticed because one of them was in millimetres.'));
out.push(S('Language box – reading a comparison table'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Five moves: **read the rows in the order of your own criteria**, not the page\'s · ask **what is not in the columns** (what happens when it goes wrong, what it costs while broken, how the user actually uses it, what the user knows and has never been asked) · look for **two rows that are the same row** · **convert the saving into the thing it buys** · and ask **who was asked**.'));
out.push(A('The fifth move is the one that transfers to every trade in the room: a comparison table about a thing is nearly always written by somebody who does not use the thing, and the person who uses it is holding the deciding row, unmeasured, and has never been asked for it.'));
out.push(S('Stage 3 · Practise (sample – Table A, two printing papers)'));
out.push(SAMPLE([
  'Seven rows and a recommendation: the cheaper one, by eleven per cent.',
  'The row that decides it is the sixth — **held in stock locally: no against yes** — and it is the second-last row on the page. Eleven per cent on paper I have to wait fourteen days for is not a saving; it is a fortnight of a machine standing still, and the machine is the expensive thing in my shop.',
  'What is not in the columns: what happens when a delivery is short, which is the thing that actually goes wrong; whether the eighty-gram will go through the older machine without picking up, which is not a specification question but a thing you find out on a Thursday; the minimum order against what I actually use in a month; and who telephones whom when a lorry is held at the border for eleven days.',
  'Two rows that are the same row: **delivery** and **held in stock locally**, three rows apart, and the second makes the first meaningless.',
  'What the saving buys: eleven per cent of a twelve-thousand-copy paper order is about two days of the older machine, and a fourteen-day delivery against a seven-day one costs me a week of it. So the cheaper paper is dearer by about three days of press time, on my own arithmetic, and nobody at that table has ever costed a press day.',
  '**Our two decisions, in two minutes.** First: put _held in stock locally_ at the top and _minimum order_ second, because between them they decide whether the eleven per cent exists at all. Second: we did not agree about brightness — I would take it off the table altogether, and my partner says it stays because the ministry has rejected a job for it once, which I did not know.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In both tables the rows that move to the top are about **what happens when something goes wrong** — stock held locally, the service engineer\'s city, the second read — and in neither table is such a row first. That is the finding: tables are ordered by what is easy to put in a column, and decisions are made on what is hard to.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own table, explained without being shown. The three questions are the assessment: _in whose order are the rows?_, _what does the saving buy?_, _who uses the thing?_ Expect at least one student to discover that nobody who uses the thing was asked, and one to discover that they themselves were the person not asked.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Rasha has pushed a drug trolley for nine years and she read the equipment committee\'s table as somebody who has. She went to row six: wheel diameter, 125 millimetres against 160. Nour said that is the one row she would never have looked at, and Rasha said it is the only row on the page that decides anything — the trolley that went into the workshop on the second of February went in with a broken wheel and it is a 125, and every 125 they have had has lost a wheel inside three years, because a ward floor has a lip at every doorway and a 125 hits it where a 160 rides over. Jad asked whether that is measured anywhere, and she said not in writing, which is the problem: what she has is nine years, four trolleys, and the one with the big wheels, which is the oldest thing on the ward and has never been in a workshop. What is not in the columns is four things: how long a wheel takes to come; whether anybody chases it, since there is no form for chasing equipment, which is why that trolley is still in a workshop in November; what the ward does while it is away, which is twenty-six late nights out of thirty-one; and whether a drug chart lies flat in the drawers, because the cheaper trolley has six and five are too narrow, and a nurse folding a chart at two in the morning folds it the same way every time and the fold goes through the signature box. Nour said row eight — spare wheels held in Damascus, no and yes — is the row she would have fought on, and Rasha said six and eight are the same row and nobody noticed because they are four rows apart and one is in millimetres. The recommendation says seventeen per cent cheaper, about three hundred and ninety thousand, and a wheel is about eleven: so the cheaper trolley is cheaper by thirty-five wheels and will cost the ward a hundred and twenty late nights waiting for the first one. And Ms Huda said the arithmetic is one division — what made it possible is that Rasha has pushed one for nine years and nobody asked her.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 3'));
out.push(A('**1** B   **2** B   **3** C   **4** B   **5** C'));
out.push(A('_Notes:_ **2** every row was **true and checkable** — the article is explicit that the fault is not accuracy. **3** the arithmetic exists to turn a percentage into the thing it buys, which is the move the whole unit teaches. **4** _it is correct and it is not quite the point_ — the distractor **A** is the opposite of what the text says. **5** the last paragraph turns the point away from committees and onto the nurse: nobody had told her that nine years was a measurement.'));
out.push(NOTE('Reading Part 3 is a long text with five four-option questions, and three of the five in this set are **attitude or purpose** questions rather than fact questions. Two habits: for a _why does the writer mention…_ question, look for the sentence **after** the detail, because that is where the writer says what it was for; and for the last question, read the final paragraph twice before looking at the options, because Part 3 almost always ends on the writer\'s real point and the options are built from earlier paragraphs.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'The table has nine rows and a recommendation at the bottom: supplier A, seventeen per cent cheaper.',
  '**The row that decides it** is row six, the wheel diameter: 125 mm against 160 mm. Every trolley we have had with 125s has lost a wheel inside three years, because a ward floor has a raised lip at every doorway.',
  '**What is not in the columns.** How many days a wheel takes to arrive — nine months, in the case of the one in the workshop. Whether anybody chases it: there is no form in this hospital for chasing equipment that has gone to a workshop. What the ward does while it is away: twenty-six late nights out of thirty-one. And whether a drug chart lies flat in the drawers, which is the one the person who pushes it would put first.',
  '**Two rows that are the same row.** Row six and row eight — wheel diameter, and spare wheels held in Damascus — are one question, four rows apart, and nobody has noticed because one of them is in millimetres.',
  '**What the saving buys.** Seventeen per cent is about 390,000 pounds and a wheel is about 11,000. So the cheaper trolley is cheaper by about thirty-five wheels, and it will cost the ward a hundred and twenty late nights waiting for the first one.',
  '**Who was not asked.** Anybody who pushes one. I have pushed one for nine years and nobody has ever asked me a question about a trolley.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2 (sample, 157 words)'));
out.push(A('Out of 15, **140 words or more**. The **article** must answer both halves of the notice — the decision, and the one thing that was not in the columns — and the better scripts name the person who was not asked. The **story** must begin with the given sentence word for word.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 157 words)**',
  '**The row in millimetres**',
  'Two years ago a committee at the hospital where I work chose between two drug trolleys from a table of nine rows. It took four minutes. The recommendation was at the bottom of the page and the first row was price, and the cheaper trolley was seventeen per cent cheaper.',
  'Row six was the wheel diameter: 125 millimetres against 160. Nobody at that table had pushed a trolley, and nobody knew that a ward floor has a raised lip at every doorway, that a small wheel hits the lip and a large one rides over it, and that on our ward every trolley with small wheels has lost a wheel inside three years.',
  'What was not in the columns was everything that happens afterwards: how long a wheel takes to come, whether anybody chases it, and what a ward does with one trolley for nine months. Twenty-six late nights out of thirty-one, in our case.',
  'The arithmetic is one division. Seventeen per cent was about three hundred and ninety thousand pounds and a wheel is eleven thousand, so the saving was thirty-five wheels and the first one took nine months.',
  'I had that row in my hands for nine years. Nobody asked me, and I had never written it down either.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 148 words)**',
  'The row that decided it was in millimetres, and nobody at the table had ever pushed one.',
  'There were six of us in the room and the page had gone round on the Friday. I was there to take the minutes and I had the table in front of me with a pencil mark against row six, because I had put it there myself at home on the Sunday.',
  'The chairman read the recommendation off the bottom of the page and asked whether anybody had anything to add.',
  'I said that the cheaper trolley had hundred-and-twenty-five-millimetre wheels and that every one we had ever had with those wheels had lost one inside three years.',
  'He asked me how I knew. I said nine years, and four trolleys, and the oldest one on the ward, which has big wheels and has never been in a workshop.',
  'Then he asked the question nobody had asked me in nine years, which was whether I had written any of it down.',
]));
out.push(S('Unit 16 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** c   **3** b   **4** a   **5** b   **6** a   **7** b   **8** a'));
out.push(A('_Notes:_ **1** _slightly_ — _more cheaper_ is a double comparative and _most_ is a superlative. **4** _the better of_ with two. **6** _the only one … who **has ever**_. **8** _by far_, which is the only intensifier that goes in front of _the_ + superlative.'));
out.push(S('Unit 16 check  ·  B  Listening (Part 4, interview) – Track 16.15'));
out.push(A('**1** B   **2** B   **3** A   **4** B   **5** A   **6** B'));
out.push(A('Questions **3** and **6** are the pair to replay. In **3** the speaker rules out the two distractors in the same breath — _not because the part has not come and not because nobody authorised it_ — and candidates who are waiting for the answer choose one of the two things she has just excluded. In **6** the answer is in the last sentence of the interview, which is where Part 4 keeps its real point.'));
out.push(NOTE('Listening Part 4 is one long interview with six three-option questions in the order of the recording, and two habits are worth the ten minutes: underline the **question word** in all six during the pause, because half of them ask _why_ or _what does she say about_ rather than _what happened_; and expect the last question to be answered in the last two sentences, where an interviewee says the thing they came to say.'));
out.push(S('Unit 16 check  ·  C  Writing (sample, 171 words)'));
out.push(SAMPLE([
  '**TWO WAYS OF KEEPING THE NIGHT TIMES · RECOMMENDATION** · R. Barakat · November',
  '**My criteria, in order, written before I looked at either.** **1** Will it survive me — could a nurse who has never seen it fill in a line from the heading alone? **2** Does it take under five minutes at the end of a round? **3** Does it produce a figure somebody outside the ward can use? **4** Does it cost anything?',
  '**The two options.** A three-column page at the back of the night book: date, block position, finish time. Or the hospital\'s own equipment-and-incident form, one sheet per night.',
  '**In terms of surviving me**, the three columns win by a long way: the headings are three words each and Sister Nasr filled one in correctly on her first night without being shown. The form has nineteen boxes and four of them are compulsory and meaningless.',
  '**In terms of time**, the three columns take about ninety seconds and the form takes six minutes, which I have timed four times.',
  '**In terms of a usable figure**, the form wins — it goes to an office and mine goes in a drawer.',
  '**The verdict.** The three columns, from January, at the cost of having no official standing at all.',
  '**The limit.** This covers the night round only, and says nothing about the day round, which nobody counts.',
  '**The trigger.** If anybody asks for the figures and will not accept them because they are not on the form, I fill in the form as well, that week, and say so.',
]));
out.push(S('I can… (Unit 16)'));
out.push(A('Self-assessment; no answers. The three that matter are the fourth, the seventh and the eighth: finding the superlative of one, writing criteria down before looking, and ending a comparison with a verdict, a limit and a trigger. A class that ticks the comparative forms and not those three has learnt some grammar and no decisions.'));
out.push(box('Looking ahead to Unit 17', [
  'Unit 16 compared two things. **Unit 17** compares two times: _used to · would · be used to · get used to_ — how something used to be done here, how it is done now, and the turn in between.',
  '**17.5 puts the three forms in one account**, and they are the three students mix most often in the language. **17.6** writes about a change in the student\'s own life — then, now, and the turn between — which is the 3.6 page written again two years on, and the class should be reminded of that page before they write.',
  '**The Unit 16 NEXT box asks for two things:** one thing that used to be done differently where the student works — a form, a route, a rule, a machine, a way of asking — and, if they can find one, **the oldest person who remembers why it changed**. 17.7 is built on that person, and a class that arrives without one has a cycle about a document instead of a cycle about a man who was there.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 16 · Answer Key');
