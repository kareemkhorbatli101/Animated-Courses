// Proactive Business English B1 · Syria Edition · Book 2 · Unit 16 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 16  Comparing Suppliers and Evaluating Offers'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit refuses one word and the refusal is the syllabus.** *Better* with nothing after it was refused at A2 and is refused again here, because at B1 the learner is comparing two offers that differ on six dimensions at once ⚠ **and *better* hides five of them, in the direction the writer had already chosen.**',
  '⚠ **The arithmetic in 16.1 is what makes the grammar necessary.** Eleven per cent cheaper to buy and four per cent dearer to own are **both true**: they are answers to different questions. A class that gets this in 16.1 will name dimensions without being told to by 16.5.',
  '⚠ **And the unit ends by undermining its own method, on purpose.** 16.7 has the warehouse supervisor name two costs that are not on any quotation and not in the beautiful landed-cost table — ⚠ **because nothing in a comparison table is lifted by anybody.** That is not a criticism of the method; it is the row the method was missing, and the repair is a line at the bottom of a form.',
], C.grey, C.navy));

// ===================== 16.1 =====================
out.push(h2('16.1  Not as cheap as it looks: landed cost'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Everything that is not in the price* is the whole cycle asked as one question, and most learners name carriage and stop. **Press for four.**'));
out.push(p('**b**  _The Homs carton is **not as** cheap **as** it looks. · Their delivery is **not as** quick **as** ours._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The journey to Homs** (ex-works, and not on a Tuesday or Thursday because of the Ghouta run), ⚠ **a minimum of 500 against a usage of 400**, ⚠ **thirty days against sixty**, and ⚠ **an unknown on returns** against eleven years of replacements.  2 ⚠ **The landed cost** — *what it costs to have it in our warehouse, on our terms, with our van.*'));
out.push(note('⚠ Nadia\'s closing line is the one to write on the board: ⚠ **a quotation is not a price, it is a price with four conditions attached, and the conditions are where the money is.** The eleven per cent is not a lie and the four per cent is not a correction — **both numbers are right and they answer different questions**, and the learner\'s job is to know which question they are being asked.'));
out.push(p('**Language box – Practise (samples):**  1 *ex-works Homs, so our van, about 180 a hundred.*  2 *minimum 500 against a usage of 400 — a hundred financed every month.*  3 *thirty days against sixty — thirty days of our money, for ever.*  4 ⚠ *not known — eleven years with Ms Shamsi and never an argument; with him, no history at all.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The new plater is fourteen per cent cheaper a tonne.'],
  ['B', 'Cheaper to buy. Who carries it?'],
  ['A', 'We do, and he is forty minutes further out than ours.'],
  ['B', 'And how long does he take?'],
  ['A', 'Nine working days against four.'],
  ['B', '⚠ So every job gains a week. When do you pay him?'],
  ['A', 'On collection.'],
  ['B', '⚠ And what happens when a batch comes back wrong? He has never done our profile. **The fourteen per cent is real and the nine days is a fortnight added to every job we quote.**'],
]));
out.push(note('⚠ Role card 2 is the better demonstration because **the cost is not money at all**: nine days against four changes what the workshop can promise, and no arithmetic converts it into a percentage. ⚠ A learner who tries to price it is doing the right instinct in the wrong place — **16.1 collects the four conditions; 16.6 is where an unpriceable one is written down honestly.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the headline percentage, the four conditions and the all-in figure. **Typical errors:** _it is not so cheap than it looks_ · _their price is cheaper as ours_ · _not as cheaper as_ · and the content error, which is giving three conditions and stopping. ⚠ **The fourth — *what happens when a batch is wrong* — is the one always omitted, and it is the one with no number in it**, which is why it is omitted.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'Supplier A — Ms Shamsi', 'Supplier B — Homs'], [
  ['Headline price', '1,000 per hundred, delivered', '**890 per hundred, ex-works**'],
  ['Who carries it', 'she does', '⚠ **we do — about 180 a hundred**'],
  ['Minimum order, against our usage', '100 against 400 — no issue', '⚠ **500 against 400**'],
  ['Payment terms', '60 days', '**30 days**'],
  ['When a batch is wrong', 'eleven years, never argued', '⚠ **not known**'],
  ['⚠ **All-in figure**', '⚠ **1,000**', '⚠ **about 1,040 — 4 per cent dearer**'],
], [2, 2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The headline is eleven per cent cheaper. With the four conditions it is about four per cent dearer. The condition that costs most is the carriage, and the one with no number is what happens when a batch is wrong."', '⚠ **Count how many headline comparisons changed direction once the four conditions went in.** It is usually about half — ⚠ **and in every one of those cases somebody in the room was about to recommend the dearer option believing it was cheaper.**']));
out.push(stage('5', 'Read'));
out.push(p('1 890 plus 180 of carriage is **1,070**, which is already seven per cent dearer; the thirty days and the hundred surplus cartons are about another 40 against the overdraft. ⚠ **The headline was eleven per cent on a figure that was never the figure.**  2 ⚠ **Refuses to invent one** — *I have not made a figure up for it and I am not going to* — and instead gives the **exposure**: about **nine days of trade counter stock** if a batch of four hundred were wrong.  3 ⚠ **That five hundred is a quantity somebody will discount, and we have never asked.**'));
out.push(note('⚠ The third answer is the most valuable thing on the page and it comes from the **rejected** quotation. ⚠ **A quotation you turn down has told you what the market will do** — and the four per cent Ms Shamsi gives in 16.3 is worth more, every month, for ever, than the decision this comparison was written to make.'));
out.push(stage('6', 'Write with help – sample (117 words)'));
out.push(sample(null, [
  '**STEEL — TWO QUOTATIONS, LANDED. 8 February. B. Nassif. ⚠ The headline is 14 per cent and the answer is a fortnight.**',
  'Price per tonne | 480,000 | **413,000** | ⚠ **14 per cent cheaper**',
  'Carriage | delivered to the yard | ⚠ **ex-works, 40 minutes further out — about 18,000 a tonne and half a day of Fadi** | +18,000',
  'Minimum order | 1 tonne | **3 tonnes** | ⚠ **we cut about 1.4 a month**',
  'Payment terms | 30 days | ⚠ **on collection** | 30 days of our money',
  'When a batch is wrong | four years, two replaced without argument | ⚠ **not known — never done our profile** | ⚠ **no figure**',
  'Lead time | 4 working days | **9 working days** | ⚠ **a fortnight on every job**',
  '⚠ **All-in, per tonne** | ⚠ **480,000** | ⚠ **about 470,000** | ⚠ **2 per cent cheaper**',
  '⚠ **How the headline became the answer.** 413,000 plus 18,000 is 431,000, and the three-tonne minimum against a usage of 1.4 means about a month and a half of steel standing in the yard. The money comes out at about two per cent in his favour.',
  '⚠ **The row with no number.** Nine days against four is not a percentage. **It is a fortnight added to every quotation we give**, and we have lost two jobs this year on lead time alone.',
  '**The recommendation.** Stay. ⚠ **And ask ours what he would do for a standing monthly tonnage**, because the new man has shown us that three tonnes is a quantity somebody prices differently.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The all-in figure as the last row', '✓'],
  ['The arithmetic shown in words', '✓'],
  ['No invented figure in the unknown row', '✓ two of them'],
  ['What the rejected quotation has told you', '✓ three tonnes is priced differently'],
], [5, 1]));
out.push(note('⚠ The sample is the right shape and makes the harder point: ⚠ **the all-in figure favours the new supplier by two per cent and the recommendation goes the other way**, on a row that is not money. **Do not let the class believe the landed cost decides** — it removes the false comparison, and 16.5 is where the decision is made.'));
out.push(stage('6R', 'Share'));
out.push(p('The headline figure and the all-in figure. ⚠ **Count the direction changes** — and then ask the class what would have happened if the headline had gone to a manager in a one-line message, which is how most of these decisions are actually taken.'));
out.push(stage('7', 'Write freely – sample (169 words)'));
out.push(sample(null, [
  'We changed carton supplier in 2022 for nine per cent and changed back eleven months later.',
  'The nine per cent was real. What was not in it was the minimum order, which was a thousand against our usage of about six hundred, so from the second month we were always holding four hundred cartons.',
  'Nobody minded for about four months, because the money was saved every month and the cartons were only cartons. Then we needed the space for a seasonal line and the four hundred went into the corridor, ⚠ **and in the August rain we wrote off a hundred and six of them.**',
  'The write-off was about fourteen months of the nine per cent.',
  '⚠ **The condition that did it was the minimum order, and it was printed on the quotation in the same size as the price.** Nobody converted it into cartons standing still, because the quotation does not do that arithmetic and neither did we.',
  '⚠ **When anybody noticed was the day we moved them**, which is eleven months after the decision and about four minutes after the first person had to lift one.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the person who moved them into the corridor"   ✓ _is there an all-in figure?_ — "none was ever calculated"   ? _which of the four conditions cost the money?_ — "the minimum order, printed in the same size as the price"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually it was the condition with no number in it, in two of three texts — ⚠ **either the minimum order or what happens when something is wrong.** The first is a number that nobody converts; the second is not a number at all. ⚠ **Both are printed on the quotation and neither is in the comparison**, which is the cycle in one sentence.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I asked our carton supplier the four questions in writing. ⚠ The fourth produced the useful answer: **"we replace a wrong batch on your word, collected with the next delivery, no paperwork."** That has been true for eleven years and has never been written down anywhere. ⚠ **It is now in the file, with her signature, and it is worth more than the other three answers together.**']));

// ===================== 16.2 =====================
out.push(pb());
out.push(h2('16.2  One of the best, and by far the oldest'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second half — *how do you know it is true* — kills most of the superlatives in the room inside thirty seconds, which is the point.'));
out.push(p('**b**  *We are by far the oldest supplier on this street* is provable if the street is short. ⚠ *The cheapest* is a claim about everybody; *one of the cheapest* is a weaker claim about everybody and still unprovable.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because it is a claim about ⚠ **about forty businesses he has never telephoned** — and the test is *can you prove it on Thursday if she asks?*  2 ⚠ **A figure about ourselves**: *nine hundred and forty deliveries last year, eleven late, list available.*'));
out.push(note('⚠ Two corrections happen in this dialogue and only one is about provability. ⚠ *The oldest in the Mezzeh trade* is **false** — the canon is that the company was founded in **1998 in Bab Touma** and moved to **Mezzeh in 2011** — and *founded in 1998* is both true and stronger. **Teach the sequence: narrow until true, then prefer the figure.**'));
out.push(p('**Language box – Practise (samples):**  1 *cheaper than the two I have checked.*  2 *940 deliveries, 11 late, list available.*  3 *founded in 1998.*  4 *we answer the counter telephone within three rings; we counted for a week.*  5 *two to three days to Damascus addresses, and we have been outside that twice in eleven years.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The sign says the best prices and the best service in the district.'],
  ['B', 'Which can you prove on Thursday?'],
  ['A', 'Neither. And every sign in the district says it.'],
  ['B', '⚠ So the sign says nothing at all. What is true about us alone?'],
  ['A', 'We hold a quoted price for fourteen days, in writing, with the date on it.'],
  ['B', 'And?'],
  ['A', '⚠ Ninety-four of our two hundred and twelve accounts have been with us more than five years.'],
  ['B', '⚠ **Then that is the sign** — two facts, no adjectives, and neither of them is on anybody else\'s.'],
]));
out.push(note('⚠ Role card 2 makes the commercial argument that wins over sceptical learners: ⚠ **a superlative that everybody uses conveys nothing, so it is not even a boast — it is blank space on a sign you are paying for.** The two replacement facts are both ordinary and both unusual to print, which is exactly why they are read.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the claims, which survive, and the replacements. **Typical errors:** _the most cheapest_ · _one of the best supplier_ (singular after *one of the*) · _more older_ · and the content error, which is narrowing a superlative until it is true but trivial — ⚠ *the oldest supplier of 30-by-20 cartons on this side of the street*. **Narrow until true, then prefer the figure; do not narrow until absurd.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The claim', 'Provable on Thursday?', 'The narrower true version', 'The figure instead'], [
  ['the cheapest in Damascus', '⚠ **no — 40 businesses**', 'cheaper than the two I have checked', 'our list price, dated, held 14 days'],
  ['the oldest in the Mezzeh trade', '⚠ **no — and it is false**', 'founded in 1998 in Bab Touma; Mezzeh since 2011', '**27 years, two staff since 1998**'],
  ['one of the most reliable in the city', 'no', 'reliable by our own record', '⚠ **940 deliveries, 11 late, list available**'],
  ['the best service', 'no', '—', 'we answer the counter telephone within three rings'],
  ['easily the largest order we have had', '⚠ **yes — it is about us**', '—', '⚠ **keep the superlative**'],
], [1.6, 1.2, 1.6, 1.6]));
out.push(note('⚠ Row five is in the table so that one superlative **survives**. ⚠ **A superlative about your own books is a fact** — *easily the largest order we have had* — and a class taught to delete all of them has learned a rule instead of a test.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We say we are the most reliable in the city. I cannot prove it on Thursday. The narrower version is that we are reliable by our own record, and the figure that beats both is 940 deliveries, 11 late, list available."', '⚠ **Count the claims that could be proved on Thursday, then ask how long the replacements took to find.** Almost none of the claims survive and almost all of the figures take under five minutes, ⚠ **because the figures were already in the delivery book.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ ***The oldest established business in the Mezzeh trade*** — the company was founded in **Bab Touma in 1998** and moved to **Mezzeh in 2011**.  2 ⚠ **The eleven late deliveries with the list offered**, and ⚠ **the fourteen days in writing**, which is a promise rather than a boast.  3 Because ⚠ **it contains nothing that would embarrass her if it turned out to be untrue** — so Ms Tannous can send it to her own customer.'));
out.push(note('⚠ Count the two versions with the class: **four superlatives against nine facts**, and the nine facts are all checkable in a morning. ⚠ The sentence to dwell on is *940 deliveries, of which 11 were late; the list of the 11 and their reasons is available on request* — **nobody else will write it, and the offer of the list is what converts a figure into a credential.**'));
out.push(stage('6', 'Write with help – sample (126 words, both versions)'));
out.push(sample(null, [
  '**THE PARAGRAPH ABOUT OURSELVES, WRITTEN TWICE. 9 February. F. Saeed, for the workshop.**',
  '**Version 1.** _We are one of the leading metalwork fabricators in the district, with the most modern equipment and the highest standards of workmanship, and we offer the fastest turnaround in Damascus._',
  '⚠ **Three superlatives and one of them false.** *The most modern equipment* is false: our press is from 1998 and the plasma table is second-hand. *The highest standards* is a claim about everybody. *The fastest turnaround in Damascus* is a claim about workshops we have never telephoned.',
  '**Version 2.** _The workshop was set up in 2004 and has had the same two fabricators since 2011. We cut to drawing and we quote in writing, held for fourteen days with the date on it. Last year we completed 214 jobs; 9 were re-cut at our own cost, and the list of the 9 and what went wrong is available on request. Our normal lead time is four working days from an approved drawing; in the last year the longest was eleven, in the week of the plater\'s price change._',
  '⚠ **Why it is forwardable.** It contains nothing a customer would be embarrassed to pass to **their** customer, ⚠ **and the nine re-cuts are the sentence that makes the other figures believable.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every superlative tested', '✓'],
  ['The false one named as false', '✓ the equipment'],
  ['A number that is against you, with the list offered', '✓ nine re-cuts'],
  ['A promise rather than a boast', '✓ fourteen days in writing'],
  ['Forwardable without risk', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The number that is against them, read alone. ⚠ **Ask whether it makes the class trust the rest of the paragraph more or less** — and the answer is always *more*, which most learners find counter-intuitive until they hear it from twenty other people.'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  'Our letterhead says *established 1998 — the oldest name in Mezzeh packaging*, and the second half of that has been false since the day it was printed.',
  'We were established in 1998, in Bab Touma, and we moved to Mezzeh in 2011. There are at least two packaging businesses on the Mezzeh side that predate 2011, and one of them is four doors from us.',
  'It was written by a printer in about 2012 from a sentence somebody dictated on the telephone, and it has been on every letterhead, invoice and quotation since.',
  '⚠ **The provable version is shorter and stronger: *founded 1998 · two of our people since 1998*.** Both are facts about us, neither needs anybody else to be younger, and the second one is the kind of thing a customer repeats.',
  '⚠ **What it has cost is nothing yet**, and that is why it has survived thirteen years. ⚠ **But the four-doors-away business has the same claim on its own sign**, and the first customer to notice both will conclude, correctly, that one of us is not reading what we print.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "a customer who walks past both signs"   ✓ _is every claim provable?_ — "no: the second half is false"   ? _what figure would replace it?_ — "two of our people since 1998 — and it already exists"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the replacing figure already existed somewhere in the building, in all three texts. ⚠ **The superlative was not written for lack of a number; it was written because nobody looked** — and in the sample it was written by a printer from a telephone call, which is how most of these sentences get into print.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The figure that is against us: ⚠ **of 212 accounts, 31 have not ordered in the last twelve months.** The sentence that offers the list: *the list of the 31, with the date of each last order, is available on request.* ⚠ **Nobody has ever asked for it and nobody has ever been offered it** — and we found the 31 in about four minutes from the ledger.']));

// ===================== 16.3 =====================
out.push(pb());
out.push(h2('16.3  The more we take, the less it costs'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Learners give the supplier\'s half first, every time. **Ask for the second half before accepting the sentence.**'));
out.push(p('**b**  _The **more** we order, the **less** it costs per carton. The **more** he knows, the **less** he has to ask._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A hundred at 1,000, three hundred at 960, five hundred at 920** — eight per cent at the top step.  2 Because a hundred surplus cartons stand in the warehouse and eighty is paid out a month early: ⚠ **4,000 saved against about 2,200 tied up, so 1,800 ahead — and then the hundred go in the corridor, where nine were written off last August.**'));
out.push(note('⚠ The conclusion is the one learners resist: ⚠ **the biggest break is not the best break.** The decisive sentence is Nadia\'s last — *the proportional sentence is true and it is not an instruction* — because *the more we take, the less it costs* **says what the price does and says nothing about what the cartons do when they get here.**'));
out.push(p('**Language box – Practise (samples):**  1 *the more we take, the less it costs — and the more stands in the store.*  2 *the sooner we pay, the less it costs — and the less we have in the week the wages go out.*  3 *the bigger the delivery, the lower the carriage per carton — and the fewer places it will fit.*  4 *the more people we train, the less we depend on one — and the more hours come out of the week that trains them.*  5 *the more stock we hold, the fewer stock-outs — and the more of it is obsolete in eighteen months.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'They offer two per cent for payment in ten days instead of sixty.'],
  ['B', 'So the sooner we pay, the less it costs. And the other half?'],
  ['A', '⚠ The sooner we pay, the less we have in the bank in the week the wages go out.'],
  ['B', 'And the arithmetic? Two per cent for fifty days.'],
  ['A', 'That is about fourteen per cent a year, which is better than our overdraft.'],
  ['B', '⚠ Then it is a good rate — **and only if the fifty days were free.** Are they?'],
  ['A', '…In three months of the year they are not, because of the wages week and the two tax dates.'],
  ['B', '⚠ **So take it in nine months and not in three, and say so in the letter.**'],
]));
out.push(note('⚠ Role card 2 produces the answer that is neither yes nor no, which is the most useful outcome in this cycle: ⚠ **a proportional offer can be worth taking for part of the year.** A class that only ever answers *take it* or *leave it* has not noticed that the second half of the sentence varies by month.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both halves, the arithmetic and the cost with no number. **Typical errors:** _more we take, less it costs_ (⚠ **the article is compulsory in both halves**) · _the more cheaper_ · _the much we take_ · and the content error, which is giving the second half as a vague worry instead of a place. ⚠ **Name the place: *the corridor, where nine were written off last August.***'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The offer', 'The more…', 'The less / the more…', 'The arithmetic, and the cost with no number'], [
  ['carton price break at 500', 'we take at one time', 'each carton costs — 8 per cent', '⚠ **4,000 saved, 2,200 tied up, +1,800 — and 100 in the corridor**'],
  ['2 per cent for 10 days', 'we pay early', 'we have in the wages week', 'about 14 per cent a year — ⚠ **good in nine months of twelve**'],
  ['a full pallet of labels', 'we order', 'the carriage per thousand', 'about 9 per cent — ⚠ **and labels go yellow in about two years**'],
  ['three-year service contract', 'years we commit', 'the annual charge', '11 per cent — ⚠ **and we cannot leave him if he gets worse**'],
], [1.3, 1.2, 1.3, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The more we take at one time, the less each carton costs — and the more of our money stands in a place we do not have. The arithmetic says 1,800 ahead, and the cost I cannot price is a hundred cartons in the corridor where the rain came in."', '⚠ **Count the offers where the biggest step was not the best, then ask how many people had ever asked their supplier *what is your price break?*** ⚠ Almost nobody has, and that question is the single most profitable sentence in Unit 16.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The top step, by about 200 a month** — the middle nets 1,600 and the top nets 1,800.  2 Because the 200 is the whole of the difference and the hundred surplus cartons go ⚠ **in the corridor, where nine were written off last August when the rain came in** — *one wet August costs more than a year of the 200.*  3 ⚠ **That Ms Shamsi has a price break and we have been buying at the top of her list for eleven years without asking** — four per cent off everything, from one telephone call.'));
out.push(note('⚠ The page overrules its own arithmetic and **says so**, which is the model to insist on: ⚠ *the arithmetic says take five hundred, by 200 a month.* **A recommendation that hides the figure it is overruling will be overturned by the first person who does the sum** — and the sum here is two numbers.'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**THE LABEL ROLL PRICE BREAK — THE WHOLE SENTENCE. 10 February. H. Mourad.**',
  '⚠ **The supplier\'s half:** the more rolls we take at one time, the less each thousand labels costs.',
  '⚠ **Our half:** the more rolls we take at one time, the more of them are yellow before we use them.',
  '1 roll | 14,000 per thousand | — | — | — | the counter drawer',
  '⚠ **4 rolls** | 12,900 | **about 3,300 a quarter** | nothing — four rolls is a quarter\'s use | ⚠ **+3,300** | the counter drawer',
  '12 rolls | 11,800 | about 9,900 a quarter | about 1,400 financed | +8,500 | ⚠ **the back shelf, for about three years**',
  '⚠ **What the arithmetic says.** Take twelve, by about 5,200 a quarter.',
  '⚠ **And I am recommending four.** Twelve rolls is three years of labels and ⚠ **the last time we bought labels in bulk, in 2022, we threw about a third of them away because the printing had gone brown at the edges.** I cannot price that precisely; what I can say is that a third of twelve rolls is more than two years of the 5,200.',
  '**And what the exercise has produced.** ⚠ **There is a four-roll price and nobody knew**, and four rolls is exactly a quarter\'s use.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The two halves, labelled', '✓'],
  ['A *where it goes* column', '✓'],
  ['What the arithmetic says, stated even if overruled', '✓ take twelve'],
  ['The cost you will not invent a number for', '✓ the 2022 write-off'],
  ['What the exercise produced', '✓ a four-roll price'],
], [5, 1]));
out.push(note('⚠ The sample\'s second half is not money or space but **time**: labels go brown. ⚠ Expect the three commonest second halves to be **cash tied up, space you do not have, and deterioration** — and the fourth, in role card 2 of 16.3, is **flexibility you give away**, which is the hardest to see and is what a three-year contract costs.'));
out.push(stage('6R', 'Share'));
out.push(p('*Our half* alone. ⚠ **Ask which half the supplier had written for them** — and the answer is always the first. **A quotation is a document that contains one half of every sentence in it**, and that is worth saying once in this cycle.'));
out.push(stage('7', 'Write freely – sample (168 words)'));
out.push(sample(null, [
  'In 2022 we took a bulk price on plastic wrap: twenty per cent off for a year\'s supply paid in advance.',
  'The first half of the sentence was true and the saving was real. ⚠ **The second half was that a year\'s supply of plastic wrap is eleven pallets and we have room for four.**',
  'So seven pallets went to my cousin\'s lock-up in Jaramana, for which we paid nothing because he is family, and for about eight months the arrangement worked perfectly.',
  'Then he let the lock-up go. We moved the remaining four pallets in one afternoon with a hired van, and in the moving we found that the bottom two pallets had been standing on a floor that was damp. ⚠ **About a pallet and a half was unusable.**',
  'The write-off was roughly the whole of the twenty per cent.',
  '⚠ **Nobody wrote the second half down because the solution arrived at the same time as the problem** — the lock-up was offered in the same week — ⚠ **and a cost that is solved on the day it appears never becomes a line in anything.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the cousin, being asked for the lock-up again"   ✓ _are both halves written?_ — "the second was never written, only solved"   ? _what did the second half cost?_ — "about the whole of the twenty per cent"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the second half was never written down in all three texts, ⚠ **and in all three somebody remembers it perfectly.** ⚠ The sample gives the mechanism: **a cost that is solved on the day it appears never becomes a line in anything** — and the solution is usually a favour, which is why it does not last.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['I asked our stationery supplier *what is your price break?* ⚠ **There are three and we have been buying at the single-box price for years.** Both halves: *the more boxes we take, the less each costs — and the more of the stock cupboard is paper nobody has asked for.* **The break at six boxes is a month\'s use and fits the cupboard; the one at twenty does not.**']));

// ===================== 16.4 =====================
out.push(pb());
out.push(h2('16.4  Delivered faster, packed more carefully'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Forbidding price and product forces adverbs within about four seconds, and learners notice that they have nothing to say at first. **That silence is the cycle.**'));
out.push(p('**b**  _cheap_ (adjective — *their price is cheap*) · _quickly_ · _carefully_ · _good_ (adjective — *their service is good*) · ⚠ _well_ (*they answer well*).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **More reliably · faster · more carefully · more honestly.**  2 ⚠ **The last one** — *answers more honestly* — because *it is the only one of the four that tells you what the other three will be worth when something goes wrong, and something always goes wrong.*'));
out.push(note('⚠ Hala\'s distinction is the sharpest thing in the unit and it is about weighting, not grammar: ⚠ **faster matters when you are late and more reliably matters when you are planning.** The two are traded as though they were the same, and a company that plans a fortnight ahead is buying the wrong one every time it buys *faster*.'));
out.push(p('**Language box – Practise (samples):**  how quickly — *his sample came in one day against two or three.* how carefully — *four of his fifty sample cartons were marked; two of hers in eleven years.* how reliably — *late twice in eleven years, and she telephones the day before.* ⚠ how honestly — *asked a question he could not say yes to; he said no problem.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'How do I test honesty without insulting anybody?'],
  ['B', '⚠ Ask something they cannot say yes to, and make it ordinary. *Can you do five hundred by Thursday?* when Thursday is three days away and the road is four.'],
  ['A', 'And if he says no?'],
  ['B', 'Then he is useful, and you have found out in one telephone call that his dates mean something.'],
  ['A', 'And if he says no problem?'],
  ['B', '⚠ **Then you know what all his other dates are worth, and you have not accused anybody of anything.** You asked a question and he answered it.'],
  ['A', 'It feels like a trap.'],
  ['B', '⚠ **It is a trap you will walk into on the real order instead**, in March, with a customer behind you. **This way it costs a telephone call.**'],
]));
out.push(note('⚠ Role card 2 answers the objection the class will raise, and it should be answered in the learners\' terms: ⚠ **the test is not a trick played on a supplier; it is the question whose answer you need before you depend on him.** And it has to be an ordinary question — a question that is obviously a test tells you only how he handles tests.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four adverb comparisons and their evidence. **Typical errors:** _they deliver more quick_ · _she answers more good_ (⚠ *better*) · _he packs carefuller_ · and the content error, which is an adverb with no evidence. ⚠ **An adverb with nothing behind it is an opinion in grammatical clothing**, and the *how we know* column is the only defence.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['How', 'Ms Shamsi', 'The Homs supplier', 'How I know'], [
  ['how quickly', '2–3 days', '⚠ **1–2 days**', 'his sample came in one'],
  ['how carefully', '2 marked in 11 years', '⚠ **4 marked in a sample of 50**', 'Hala opens them'],
  ['how reliably', '⚠ **late twice in 11 years; telephones the day before**', 'one delivery — not known', 'our goods-in book'],
  ['⚠ how honestly', 'says no, with a reason', '⚠ **said *no problem* to something impossible**', '⚠ **a question asked on purpose, 5 Feb**'],
], [1.1, 1.5, 1.5, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The goods are the same. He delivers more quickly and she packs more carefully. I know because we open them and because it is in our goods-in book. The one that decides it is how honestly they answer."', '⚠ **Count the adverb comparisons with real evidence, then ask how many people have designed an honesty test.** Almost none — ⚠ **and it takes one telephone call and costs nothing, which makes it the cheapest control in Unit 16.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **How quickly they deliver** — and it matters least because *faster matters when you are late and more reliably matters when you are planning, and we plan*: **a day saved on a delivery we knew about a fortnight ago is worth nothing.**  2 Whether five hundred could be delivered by the following Thursday, when it is a four-day road and the Thursday was three days away. ⚠ **He said *no problem*.**  3 ⚠ **The honesty question is now the last question on the quotation sheet.**'));
out.push(note('⚠ The third answer is the only durable outcome in the whole unit: ⚠ **a test used once is an anecdote; a test added to a form is a control.** Everything else on this page will be forgotten in two years and the last line of the quotation sheet will still be asking the question.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**TWO PLATERS — THE WORK IS IDENTICAL. 11 February. B. Nassif. ⚠ Everything in this table is an adverb.**',
  'how **quickly** they return work | 4 working days | ⚠ **9 working days** | our own job cards',
  'how **reliably** | ⚠ **9 of 10 jobs within a day of the promise** | not known — no history | the job cards again',
  'how **carefully** they handle edges | 2 re-cuts in four years | ⚠ **1 of 3 sample pieces chipped** | ⚠ **I unwrapped them myself**',
  'how **honestly** they answer | tells me when he is full | ⚠ **said he could take the job the same week when his yard was visibly full** | ⚠ **I was standing in the yard, 10 Feb**',
  '⚠ **Which rows favour whom.** All four favour ours, which makes me suspicious of my own page — ⚠ **so I have written down that the new man is 14 per cent cheaper and that I am the person who has used ours for four years.**',
  '⚠ **The row with no units.** He said he could take it the same week. The yard had about three weeks of work in it and I could see it. ⚠ **It does not make him a liar; it makes his dates unusable**, which is a statement about what I can plan with.',
  '⚠ **The test, written down.** *Ask whether they can take work in a week you can see they cannot.* It is now on our enquiry sheet.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every row an adverb', '✓'],
  ['A *how we know* for every row', '✓'],
  ['A row that favours the other side, kept', '⚠ **✗ — none did, and the writer says so and names the price advantage instead**'],
  ['The honesty test, with its date and question', '✓ 10 Feb, in the yard'],
  ['The test generalised into a form', '✓ the enquiry sheet'],
], [5, 1]));
out.push(note('⚠ **The writer notices that all four rows favour the incumbent and treats that as a warning about the page rather than a result.** ⚠ *All four favour ours, which makes me suspicious of my own page* — and the repair is to print the fourteen per cent and the writer\'s own four-year relationship. **That is the honest handling of a one-sided table and it is better than inventing a row.**'));
out.push(stage('6R', 'Share'));
out.push(p('The honesty tests, read aloud. ⚠ **Ask which one the class would use tomorrow** — and collect them. A class of twelve produces about four tests, and all four work on any supplier in any trade.'));
out.push(stage('7', 'Write freely – sample (167 words)'));
out.push(sample(null, [
  'Two men do the same job at our counter and the difference between them is entirely in adverbs.',
  'One serves more quickly. He has a customer away in about four minutes where the other takes seven, and on a Thursday morning that is the difference between a queue and no queue.',
  'The other asks more carefully. He reads the order back, every time, including to people he has known for nine years, and he is the reason we have had no wrong-size dispute in about two years.',
  '⚠ **And the second one answers more honestly.** When he does not know whether something is in stock he says *I will look*, and he goes and looks. The first one says *yes* and is right about four times in five.',
  '⚠ **The difference decided which of them trains Lina**, and it was not the quick one.',
  '⚠ **What I could not have written down three weeks ago is the evidence.** *Four minutes against seven* is from standing behind them with a watch for one Thursday, and ⚠ **four times in five is from the stock card, which was there all along.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Lina, who is about to be trained by one of them"   ✓ _adverbs rather than adjectives?_ — yes   ? _which comparison had no units?_ — "answers more honestly — evidenced from the stock card"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the deciding difference had no units in all three texts, ⚠ **and was evidenced by something somebody remembered rather than anything written down.** ⚠ The sample is the exception worth reading out: a watch for one Thursday, and a stock card that was there all along — **the evidence for a no-units comparison is almost always available and almost never collected.**'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['My honesty test for the label supplier: ⚠ *"Can you deliver on Friday the 14th?"* — the 14th is a Saturday. **He said yes.** I asked again on Thursday and he said yes again. ⚠ **It does not make him dishonest; it tells me he is agreeing to dates without reading them**, so from now on I confirm every date in writing with the day of the week in it.']));

// ===================== 16.5 =====================
out.push(pb());
out.push(h2('16.5  Better at what? Naming the dimension'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Saying the same sentence three times with three dimensions usually makes one learner discover that two of their three point the other way. **That discovery is the cycle and it should not be rushed.**'));
out.push(p('**b**  _**On** price, they are cheaper. **As regards** reliability, she is better. They are better **in terms of** lead time._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Six** — price, landed cost, lead time, reliability, packing, honesty.  2 ⚠ **The working** — *better is not a comparison, it is a conclusion with the working removed* — and it pointed her way **because the writer had already decided.**'));
out.push(note('⚠ Mr Attar\'s second point is the commercial one and it is what persuades a class that resents the extra writing: ⚠ **anybody who reads your conclusion and then meets the Homs supplier will think you did not look.** Two of the six go the other way, and a reader who finds them unaided discounts the whole page.'));
out.push(p('**Language box – Practise (samples):** *On price he is cheaper. In terms of lead time he is quicker. On landed cost she is cheaper. As regards reliability she is better. Where packing is concerned she is better. On honesty she is better.* ⚠ And the weighting: *reliability, because we plan a fortnight ahead and cannot absorb a surprise.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The second candidate is better.'],
  ['B', 'Better at what?'],
  ['A', 'Better overall.'],
  ['B', '⚠ There is no such dimension. Name them.'],
  ['A', 'On experience, the first — six years against two. On speed, the first. ⚠ On accuracy, the second, clearly. On asking when she is unsure, the second. On whether she will still be here in two years, I do not know for either.'],
  ['B', 'So two go one way, two the other, and one is unknown. Which matters most, and why — about us?'],
  ['A', '⚠ **Accuracy, because the work goes to a buyer in another country who cannot telephone the warehouse to check it.**'],
  ['B', '⚠ Then say that, and the whole decision is one sentence that nobody can argue with.'],
]));
out.push(note('⚠ Role card 2 moves the cycle off suppliers deliberately, because ⚠ **the hidden-weighting fault is at its worst about people.** *The second one is better* in a hiring decision conceals which of two incompatible qualities the organisation has chosen, and the sample\'s weighting sentence — *the work goes to a buyer who cannot telephone the warehouse* — is Book 2\'s own spine answering the question.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the six dimensions and which way each points. **Typical errors:** _she is better_ · _in term of lead time_ · _on the reliability_ (⚠ no article after *on* with an abstract noun) · _at regards_ · and the content error, which is a weighting sentence about the suppliers. ⚠ **A weighting expressed as a fact about the supplier is arguable; one expressed as a fact about your own operation is not.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The dimension', 'Which way it points', 'Why'], [
  ['on price, ex-works', 'him', '11 per cent'],
  ['in terms of lead time', 'him', 'a shorter road'],
  ['on landed cost', 'her', 'carriage, minimum and terms'],
  ['as regards reliability', 'her', 'late twice in eleven years'],
  ['where packing is concerned', 'her', '2 marked in eleven years against 4 in 50'],
  ['⚠ **on honesty**', '⚠ **her**', '⚠ **he said *no problem* to something impossible**'],
], [1.6, 1.4, 3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"On price and in terms of lead time it points to him; on landed cost, reliability, packing and honesty it points to her. Two of the six go against my recommendation. The dimension that matters most is reliability, because we plan a fortnight ahead and cannot absorb a surprise."', '⚠ **Count the recommendations where every dimension favoured the recommended option, then ask whether that is likely.** ⚠ It almost never is — **and a page on which it appears to be true has usually had its dimensions chosen after the decision.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **So that nobody discovers them somewhere else** — both are real and anybody who telephones him will find them in four minutes.  2 ⚠ **Reliability, because we plan a fortnight ahead and we cannot absorb a surprise** — and it is **about us**, not about them.  3 ⚠ **As a statement about use and not about character** — *it does not make him dishonest; it makes his dates worthless to a planner* — because **a finding about character is an argument and a libel risk, and a finding about what you can rely on is neither.**'));
out.push(note('⚠ The arithmetic sentence is the one to make the class copy out: ⚠ *a supplier who is a day quicker four times out of five and a week late once is worse for us than one who is always two to three days.* **It converts a preference into a decision**, and it is the only form in which the trade between *faster* and *more reliably* can be settled rather than argued.'));
out.push(stage('6', 'Write with help – sample (128 words)'));
out.push(sample(null, [
  '**THE TWO PLATERS — THE FIVE DIMENSIONS, AND THE WEIGHTING. 12 February. B. Nassif. ⚠ One of the five favours the man we are not recommending, and it is the price.**',
  'on price per tonne | 480,000 | **413,000** | ⚠ **him — 14 per cent**',
  'in terms of lead time | **4 working days** | 9 working days | ours',
  'as regards reliability | **9 of 10 within a day of promise** | not known | ours',
  'where edges are concerned | 2 re-cuts in four years | 1 chipped in 3 samples | ours',
  '⚠ **on honesty** | tells me when he is full | ⚠ **said he could take work in a week I could see he could not** | ⚠ **ours — the deciding row**',
  '⚠ **The dimension that favours the other man.** Fourteen per cent a tonne, which on 1.4 tonnes a month is about 94,000 a month and is real money. ⚠ **It is on this page because anybody who telephones him will be told it in one minute.**',
  '⚠ **The weighting, in one sentence about us.** **Lead time, because we quote four days to customers and we have lost two jobs this year on lead time alone** — nine days would mean re-quoting every job we take.',
  '⚠ **The row with no units.** It does not make him unreliable in his work; ⚠ **it makes his dates unusable in a quotation**, and a quotation is what we sell.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *points to* column, pointing both ways', '✓ one row the other way'],
  ['The dimensions favouring the rejected option, named as real', '✓ with the monthly figure'],
  ['The weighting, in one sentence about you', '✓ lead time, because we quote four days'],
  ['The trade spelled out in arithmetic', '✓ 94,000 a month against re-quoting every job'],
  ['The no-units finding phrased as use, not character', '✓'],
  ['No sentence containing *better* with nothing after it', '✓'],
], [5, 1]));
out.push(note('⚠ The sample puts a **monthly figure** on the dimension that favours the rejected option — *about 94,000 a month and is real money* — which is the strongest possible handling. ⚠ **Quantifying the argument against yourself is what makes a reader stop looking for the argument against you.**'));
out.push(stage('6R', 'Share'));
out.push(p('The weighting sentence alone. ⚠ **Ask whether it is about the buyer or about the suppliers** — and about a third of the class will have written *because he is unreliable*, which is the fault. **The repair is one clause: *because we plan a fortnight ahead*.**'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'Our bank was changed in 2019 on the sentence *they are better for a business like ours*.',
  'The dimensions, written out afterwards, were six. On charges, the new one was cheaper — about a third cheaper on transfers. On the branch, the new one was four streets nearer. On the manager, the old one knew us for eleven years and the new one did not know us at all. On lending, the old one had already lent to us twice. On foreign transfers, which nobody mentioned, the new one was slower and dearer. ⚠ **And on who would answer the telephone in August, nobody asked.**',
  'Two dimensions favoured the new bank and four favoured the old one, and the two that favoured the new one were the two that are printed on a tariff.',
  '⚠ **Nobody said so**, because the sentence *they are better for a business like ours* had been said by the person who was going to sign it.',
  '⚠ **The foreign-transfer dimension cost us about nine days on the first Beirut payment in January**, which is six years later and is the only one of the six that nobody had even named.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "whoever has to make the next Beirut payment"   ✓ _is every comparison attached to a dimension?_ — "not at the time; only afterwards"   ? _which dimension went the other way?_ — "four of six, and one was never named at all"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually somebody found the dimension that went the other way **after** the decision, in two of three texts, ⚠ **and in those the decision was reopened** — which is the expensive outcome. ⚠ The sample adds the worse case: **a dimension nobody named at all**, which is not reopened because nobody connects the loss to the decision six years later.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['The decision: moving the Thursday run to Wednesday. ⚠ **The weighting sentence, about us:** *predictability for the two standing orders, because both customers plan their own week on it and one of them moved to Thursday in the Saturday trial.* **Not *Wednesday is better* — and when I wrote it this way, I noticed that the customers should be asked before it is decided.**']));

// ===================== 16.6 =====================
out.push(pb());
out.push(h2('16.6  The recommendation paragraph, and the column that is a guess'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Many learners find the second half easier, and that is worth saying aloud: **what would change this** often tells you what the recommendation actually is.'));
out.push(p('**b**  Only the third — *I recommend we stay with Ms Shamsi and ask for the three-hundred break.* ⚠ *On balance Ms Shamsi is cheaper* is a finding; **a recommendation contains a verb somebody can act on.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **What you recommend · what would change it · when you will look again.**  2 ⚠ **The column that is a guess stays a guess until somebody spends a little money on it** — and one order of a hundred cartons is a cheap way to buy a column.'));
out.push(note('⚠ Mr Ayoub\'s remark about the review date is the structural finding of the cycle: ⚠ *this company has suppliers nobody has compared since 2011, not because anybody decided to keep them but because nobody wrote a date.* **A recommendation with no review date is a decision that lasts for ever by accident** — and that is how most long relationships in most companies came about.'));
out.push(p('**Language box – Practise (samples):** *I recommend we stay and ask for the 300 break. What would change this: her refusing, or one clean delivery from Homs. I will look again in August, when I shall have six months at the new price.* ⚠ And the guess, bought: *one order of a hundred at the top of his list, no commitment.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I recommend we keep the old till and repair it.'],
  ['B', 'What would change it?'],
  ['A', 'If the repair cost more than about a third of a new one.'],
  ['B', 'That is one. What else?'],
  ['A', '⚠ If it failed twice more this year. Twice is a pattern and once is a Tuesday.'],
  ['B', 'And when will you look again?'],
  ['A', 'June, when I shall have six months of fault records.'],
  ['B', '⚠ And which column is a guess?'],
  ['A', '⚠ **How long a new one would last. I have put eight years and I have no idea** — the old one has done eleven and the shop two doors away has had two in five years.'],
]));
out.push(note('⚠ Role card 2 produces the best guess-naming in the unit: ⚠ **a figure the writer has entered and has no basis for.** *I have put eight years and I have no idea* is the sentence to praise, because a comparison always contains one such number and it is normally invisible — **it looks exactly like the figures that came from quotations.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three sentences and the guess. **Typical errors:** _I recommend to stay_ (⚠ *I recommend that we stay* or *I recommend staying*) · a recommendation with no condition · a review date with no *what I shall know by then* · and the content error, which is claiming there is no guess. ⚠ **Every comparison has one, and a writer who says theirs has none has not found it.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['I recommend', 'What would change this', 'I will look again in', 'The column that is a guess'], [
  ['stay with Ms Shamsi; ask for the 300 break', 'her refusing; or one clean Homs delivery', 'August', '⚠ **his reliability — one delivery**'],
  ['repair the old till', 'a repair over a third of a new one; two more failures', 'June', '⚠ **how long a new one would last — I put 8 years and have no basis**'],
  ['keep the Thursday run', 'either standing order moving; a third customer asking for Wednesday', 'May', 'what a Wednesday would gain — never tried'],
], [1.8, 1.8, 1.1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I recommend we repair the old till. What would change it is a repair over a third of a new one, or two more failures this year. I will look again in June, when I shall have six months of fault records. The guess on my page is how long a new one would last."', '⚠ **Count the recommendations with a review date, then ask how many decisions at everybody\'s work have no review date and have lasted years.** ⚠ The second number is always much larger, and nobody in the room chose any of them.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Her refusing the break**, which would make the two about level on landed cost, ⚠ **or one clean delivery from Homs**, which would turn his reliability column from a guess into a figure.  2 ⚠ **His reliability** — one delivery, no history — and it would cost **one order of a hundred at the top of his list, about 1,000 per hundred, with no commitment.**  3 ⚠ ***On balance Ms Shamsi is better*** — *six words, no condition, no review date, no guess named, and it would have been signed, filed, and still in force in 2030.*'));
out.push(note('⚠ Printing the sentence you would have written is the best teaching device in this unit and it costs one line. ⚠ **It shows the reader what the page is for** — and it makes the three-sentence form look like a saving rather than an imposition, because the six-word version is visibly the thing that produces suppliers nobody has compared since 2011.'));
out.push(stage('6', 'Write with help – sample (131 words)'));
out.push(sample(null, [
  '**THE TILL — RECOMMENDATION. 13 February. H. Mourad. ⚠ Three sentences. The fault record is behind this page.**',
  '**I recommend** that we repair the old till at about 180,000 rather than replace it at about 1,400,000, and that I keep the fault record from this month in writing.',
  '⚠ **What would change this:** a repair quotation above about 450,000, which is a third of a new one; **or** two further failures before June, because twice is a pattern and once is a Tuesday.',
  '⚠ **I will look again in June**, when I shall have six months of fault records instead of the four entries I have now.',
  '⚠ **The column that is a guess** | ⚠ **how long a new till would last. I have put eight years and I have no basis for it** — ours has done eleven and the shop two doors away has had two in five years. Every other figure is a quotation or a repair invoice.',
  '**What it costs to buy it** | ⚠ **nothing — one question to the two shops on this street that have replaced theirs**',
  '⚠ **And the sentence I would have written before.** *The old one is still better.* ⚠ **Five words, and we would have been repairing it in 2032.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences, no restated comparison', '✓'],
  ['Two conditions in sentence 2', '✓'],
  ['A review date, with what you will know by then', '✓ June, six months of records'],
  ['The guess named, and everything else said not to be', '✓'],
  ['The guess priced, with no commitment', '✓ nothing — two questions'],
  ['The sentence you would have written before', '✓'],
], [5, 1]));
out.push(note('⚠ Note that in this sample **the guess costs nothing to buy** — two questions to two shops on the same street. ⚠ **Not every guess needs an order placed; some need a conversation**, and a learner who concludes that buying a column always costs money has learned half the lesson.'));
out.push(stage('6R', 'Share'));
out.push(p('Sentence 3 alone. ⚠ **Ask what the writer will know in that month that they do not know now** — and if the answer is *nothing*, the review date is decoration and the stage has found a real fault.'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'Our telephone line has been with the same supplier since 2011 and nobody has ever compared it.',
  'It was decided when we moved to Mezzeh, by my uncle, in the week of the move, because they could connect us on the Thursday and the others quoted a fortnight. ⚠ **That was a good decision made for a reason that stopped applying on the Friday.**',
  'What has changed since is everything: there are four suppliers on this street instead of one, the price has been raised six times, and we now make about forty minutes a day of calls to Beirut, which were not part of the original decision because there was no Beirut.',
  '⚠ **One small test would cost nothing: three telephone calls, about an hour, and a copy of last month\'s bill.**',
  'Nobody has made the hour available in fourteen years, ⚠ **and nobody ever decided not to.** The decision of 2011 had no review date, so it became a fact about the building, like the stairs.',
  '⚠ **I have put it in the diary for the 28th with my own name against it, which is the whole of what this cycle has taught me.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "whoever pays the bill"   ✓ _is there a review date anywhere in the story?_ — "none for fourteen years"   ? _what would one small test cost?_ — "an hour and three telephone calls"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the arrangement had never been reviewed because nobody had written a date, in all three texts. ⚠ **It is almost never a decision to keep somebody; it is the absence of a decision to look** — and the sample names the mechanism exactly: *a good decision made for a reason that stopped applying on the Friday*, which then becomes **a fact about the building, like the stairs.**'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['**I recommend** we keep the current telephone supplier until the 28th and compare three others that week. ⚠ **What would change this:** a quotation more than fifteen per cent below ours, or any supplier who itemises Beirut minutes. ⚠ **I will look again on 28 February**, when I shall have three quotations instead of none. **The column that is a guess: what we are actually paying for Beirut calls.**']));

// ===================== 16.7 =====================
out.push(pb());
out.push(h2('16.7  Review & Mediate: what is not in the columns'));
out.push(stage('1', 'Get ready – Unit 16 quiz'));
out.push(p('**1** ⚠ **Who carries it · how many you must take · when you must pay · what happens when a batch is wrong.**  **2** ⚠ **Can you prove it on Thursday if they ask?** — and what beats it is ⚠ **a figure about you**, which needs nobody else to be worse.  **3** ⚠ **What the thing does when it gets here** — the money that stands still, the space you do not have, the deterioration, the flexibility given away.  **4** ⚠ **How they behave — and *how* is adverbs.**  **5** **What you recommend · what would change it · when you will look again** — ⚠ **and the third stops it becoming a tradition.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **His cartons come flat and hers come made up** — about forty minutes a day for one man, a morning a week — and ⚠ **his pallet is a different size**, so the fourth store holds about eleven per cent less of his.  2 ⚠ **They are decided in the office and arrive in the warehouse as an instruction** — *nothing in your columns is lifted by anybody.*'));
out.push(note('⚠ Abu Yasser prices the thing Bassel could not price. In 16.3 the space cost was written as *I cannot put a number on that*; here it is ⚠ **eleven per cent of the fourth store, and I know it because I stack it.** **It was not unpriceable — it was priceable by somebody who was not asked**, and that is the finding of the whole unit.'));
out.push(p('**Language box – Practise (sample):**  _"Is there anything not in this? … Made up or flat? … What size is the pallet? … How long would it have taken you to tell me in January? … Two minutes."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'Before you decide — how does it arrive?'],
  ['A', 'In boxes of fifty.'],
  ['B', 'Fifty of what weight?'],
  ['A', '…I do not know.'],
  ['B', '⚠ Because if it is over about twelve kilos it is two people to lift, and there are two of us on a Thursday morning and one of us is on the counter.'],
  ['A', 'That is not on either quotation.'],
  ['B', '⚠ It is never on a quotation. **A quotation describes what is being sold and not the work of receiving it** — and the work of receiving it is mine.'],
  ['A', 'How long would it have taken you to tell me?'],
  ['B', '⚠ **Less than a minute, any day in the last four months.**'],
]));
out.push(note('⚠ Pair 2 generalises the finding beyond cartons: ⚠ **a quotation describes what is being sold and never the work of receiving it.** The questions that come from handling are always the same shape — *how does it arrive · what does it weigh · where does it go · how long does it take to make ready* — and they are on nobody\'s quotation sheet in any trade.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two things and what each is worth, then the line for the bottom of the sheet. **Typical errors:** the defensive answer — treating the forty minutes as an objection to the landed-cost method rather than as ⚠ **a row the method was missing** · and the content error, which is collecting the questions and not changing the form. ⚠ **A conversation produces a finding once; a line at the bottom of the quotation sheet produces it every time.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Their question', 'What it found', 'Is it in my columns?'], [
  ['Made up or flat?', 'his come flat — about 40 minutes a day for one man', '⚠ **no**'],
  ['What size is the pallet?', 'his leaves a gap — the store holds 11 per cent less', '⚠ **no**'],
  ['How does it arrive, and what does it weigh?', 'boxes of fifty, weight unknown — ⚠ **over 12 kilos is two people**', '⚠ **no**'],
], [2, 2.6, 1.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"My columns did not contain the fact that his cartons come flat or that his pallet is a different size. The first is about forty minutes a day for one man and the second is eleven per cent of the fourth store. The person who knew both was Abu Yasser, and it would have taken him two minutes in January."',
  '⚠ **The unit\'s mediation, named as the fourth unit of this book:** a comparison is written by whoever gathers the quotations, **and the quotations describe the thing being sold and never the work of receiving it** — so every column in every comparison is about money, time and quality **as the seller measures them**, ⚠ **and the two or three real costs of a choice are held, unasked, by the person who will unload the first pallet and could have said them in two minutes.**',
  '⚠ And the half that decides what to do about it: the repair is **not** to consult more widely in general, which nobody sustains. ⚠ **It is one line at the bottom of the quotation sheet naming who must be asked before it is signed** — because *the columns are written by people who do not lift anything*, and a form is the only thing that outlives everybody\'s good intentions.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 2)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'E', 'D', 'C']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q3 is **E** and it is the discriminating item: *cartons arrive flat and have to be made up by hand* is decided by ⚠ **form of supply and pallet dimensions** — and E is also the line that requires the warehouse supervisor\'s signature, which is 16.7 written into the form. **Learners reach for A or B because the question mentions work and A and B mention money.**'));
out.push(note('⚠ Q4 is **D**: a supplier with no history gets *not known* and **no figure**. ⚠ A learner who answers **C** has matched the idea of a cost being converted to a figure, which is exactly what D forbids — and the difference between the two lines is the whole of 16.1\'s fourth condition.'));
out.push(stage('6', 'Write with help – sample (79 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Dear Mr Haddad, thank you for your quotation of 4 February. Six questions, so that I can compare properly. **1** Is the price ex-works or delivered? **2** What is the minimum order? **3** What are your payment terms? **4** What happens when a batch is wrong? **5** Do the cartons arrive made up or flat? **6** What size is the pallet? And what is your price break, and at what quantity? I need these by Thursday the 20th.',
]));
out.push(note('⚠ That sample is 79 words and is inside the band, which is worth showing: ⚠ **six numbered questions and a date fit in eighty words because nothing is explained.** A learner who adds *I am sure you will understand that we need to compare carefully* has spent twelve words on reassurance and will lose two questions to make room.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The four conditions, as questions', '✓'],
  ['The two warehouse questions', '✓ 5 and 6'],
  ['The price-break question', '✓'],
  ['A date for the answers', '✓ Thursday the 20th'],
  ['60 to 80 words — count them', '✓ 79'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (178 words)'));
out.push(sample(null, [
  '**CARTONS — THE COMPARISON IN FULL. 7 February. N. Mansour.**',
  '**Landed.** Shamsi 1,000 delivered; Homs 890 ex-works, plus about 180 carriage, a minimum of 500 against a usage of 400, and 30 days against 60. ⚠ **All-in: 1,000 against about 1,040 — four per cent dearer.**',
  '**The six dimensions.** On price, him (11 per cent). In terms of lead time, him (a day). On landed cost, her. As regards reliability, her — late twice in eleven years. Where packing is concerned, her — 2 marked in eleven years against 4 in a sample of 50. ⚠ **On honesty, her: he said *no problem* to a delivery that was physically impossible.**',
  '**Recommendation.** I recommend we stay with Ms Shamsi and ask for her three-hundred break at 960. ⚠ **What would change this:** her refusing, or one clean delivery from Homs. ⚠ **I will look again in August.**',
  '⚠ **The column that is a guess:** his reliability. One order of a hundred would buy it, with no commitment.',
  '⚠ **And the two things that were in no quotation and in none of my columns.** His cartons come **flat** — about forty minutes a day for one man, a morning a week. His **pallet is a different size** — the fourth store holds about eleven per cent less of his. ⚠ **Abu Yasser told me both in two minutes, and he has never been shown a comparison before.**',
]));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['I took the comparison to Abu Yasser. ⚠ **Two questions, two minutes: *made up or flat?* and *what size is the pallet?*** The flat cartons are a morning a week and the pallet is eleven per cent of the fourth store. ⚠ **He has never been shown a comparison before**, and the line now at the bottom of our quotation sheet reads: *not signed until the warehouse supervisor has seen it.*']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 16 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'c', 'a', 'b', 'a', 'b', 'b', 'b', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1 is arithmetic and the answer is **c**: 890 plus 180 is 1,070 against 1,000 delivered, so the *ex-works* one is dearer — ⚠ **and a learner who answers a has compared a price with a landed cost**, which is the error the whole unit exists to prevent. **Mark this one first.**'));
out.push(note('⚠ Question 5 and 6 are the adverb pair: when the goods are identical the comparison is **adverbs**, and *more carefully* is the form. ⚠ Question 7 is the unit\'s refusal — *she is better* fails because **better has no dimension after it** — and a learner who chooses a (*impolite*) has read it as a matter of manners rather than of information.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['First thing', 'What it costs', 'Second thing', 'What it costs', 'How long in January'], [[
  'his cartons come flat', '⚠ about 40 minutes a day — a morning a week', 'his pallet is a different size', '⚠ the store holds about 11 per cent less', 'two minutes',
]], [1.3, 1.7, 1.4, 1.7, 1]));
out.push(note('⚠ Gaps 2 and 4 both need the **figure**, not the fact: *forty minutes a day* and *eleven per cent*. ⚠ A learner who writes *it takes time* and *less space* has heard the conversation and not the point — **the whole value of the exchange is that the warehouse supervisor had numbers and nobody had asked him for them.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (73 words)', ['Shamsi 1,000 delivered | Homs 890 ex-works | carriage about 180 | minimum 500 against usage 400 | 30 days against 60 | ⚠ **not known on wrong batches** | ⚠ **all-in 1,000 against about 1,040**   **I recommend** we stay with Ms Shamsi and ask for the 300 break at 960. ⚠ **What would change this:** her refusing, or one clean delivery from Homs. ⚠ **I will look again in August**, when I shall have six months at the new price.']));
out.push(box('Marking the Unit 16 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gaps 2 and 4 need the figures.'],
    ['**C Writing**', '7', 'All four conditions present (2) · ⚠ **an all-in figure** (2) · the recommendation sentence (1) · ⚠ **what would change it** (1) · ⚠ **a review date** (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for the all-in figure are the unit.** A comparison that ends with the payment terms and no all-in figure scores 0 of those 2, however complete the conditions — ⚠ **because the whole of 16.1 is that the headline was a percentage of a figure that was never the figure.**',
  '⚠ **Give the *what would change it* mark only for something checkable.** *If things change* earns nothing. ⚠ *Her refusing the break* and *one clean delivery from Homs* earn it, **because somebody who is not the writer could notice either of them happening.**',
  '⚠ **Deduct for any sentence containing *better* with nothing after it**, wherever it appears, including in the recommendation. ⚠ **It is the one word this unit refuses**, and a comparison that does all the work and then concludes with it has thrown the work away in six characters.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 16**'));
out.push(p('**1 Comparing a price with a landed cost, which will happen in every cycle.** Learners put the headline of one supplier next to the all-in of another, in both directions, and the resulting number is meaningless. ⚠ **The repair is mechanical and should be drilled in 16.1: write the four conditions in the same order every time** — carriage, minimum, terms, what happens when it is wrong — ⚠ **and never compare two numbers until both have been through all four.** A class that has this will not need it explained again, and a class that has not will produce a wrong figure in 16.6 that looks authoritative.'));
out.push(p('**2 The one-sided table, which arrives in 16.5.** A learner who has decided will produce six dimensions that all point the same way, usually by choosing the dimensions afterwards. ⚠ **It is not dishonesty; it is the natural order of thinking**, and the instrument against it is the *points to* column plus one question: **which two of these favour the option you are not recommending?** ⚠ If the honest answer is *none*, say so on the page and name the strongest argument against yourself instead — **the sample in 16.4 does exactly that, and it is the better of the two models.**'));
out.push(p('**3 Treating 16.7 as a sentimental ending.** It looks like a lesson in consulting the staff and it is not: ⚠ **it is the discovery that the unpriceable column had a price all along, held by somebody who was never asked.** If a lesson has to be cut, **cut 16.2 and keep 16.7** — superlatives can be dealt with in ten minutes inside 16.5, and the warehouse conversation cannot be had second-hand. ⚠ **And insist on the last step**: the finding must end as a line at the bottom of a form, not as a resolution to consult people. **A conversation produces the finding once; the line produces it every time.**'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 16 · Answer Key');
