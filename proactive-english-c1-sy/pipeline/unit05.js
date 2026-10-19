// Proactive English C1 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['THE SENTENCE AS YOU WROTE IT', 'THE WORDS THE READER KEEPS'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says which words a reader would still have in an hour.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — and mark only what that reader would notice. Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';

out.push(h1('Unit 5  Where the Emphasis Has to Live'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**A reader keeps the end of your sentence and the end of your paragraph, and almost nothing else.** ⚠ **That is not a claim about attention; it is a fact about English, and it holds for a careful reader as well as a tired one.** **So the question in this unit is never _is the sentence clear_** — **it is _which four words will this reader still have in an hour, and are they the four I need them to have?_**',
  '**5.1** says one fact in four marked orders and names what each one makes important.   **5.2** fronts what the sentence is about and leaves the new thing at the end.   **5.3** holds a four-line subject back until the reader is ready for it.   **5.4** chooses between a cleft and an inversion for the same emphasis, and says why.   **5.5** keeps emphasis across three sentences without using the device twice.   **5.6** writes the paragraph whose emphasis survives being read aloud by somebody who disagrees with it.   **5.7** mediates between a paragraph and the summary that lost its emphasis.',
  '**Exam practice in 5.7:** C1 Advanced **Reading and Use of English Part 5** (multiple choice), **Writing Part 1** (the essay) and **Listening Part 1** (three extracts, two questions each).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a paragraph of your own in which the most important fact is not in the most important position. **Two:** something of yours that somebody else summarised — a minute, an abstract, a line in a schedule — **together with the original.** **5.7 runs on the second and it cannot be run without both halves.**',
  '**And one warning about what this unit is not.** ⚠ **B2 taught four cleft constructions and asked you to use them.** **This unit assumes you can build all four and asks a harder question: which one, and why that one rather than the other three.** **An inventory of devices is a B2 achievement.** **A C1 writer has an inventory and makes one choice from it per paragraph, and can say what the choice was for.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 5.1 =====================
out.push(pb());
out.push(h2('5.1  One fact, four orders'));
out.push(p('**Function:** saying one fact in four marked orders and naming what each one makes important   ·   **Grammar:** the it-cleft · the _what_-cleft · fronting with inversion · the agent at the end   ·   **Pronunciation:** the last stressed word, and what it does'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out one sentence you wrote this week, and then say which word you think your reader kept.** ⚠ **Do not say which word you meant them to keep.** Your teacher writes the sentence in the left column and the word in the right, and the room says whether it agrees.'));
out.push(board('The referral book was in the vehicle on four of the six Saturdays.', 'Saturdays.'));
out.push(p('**b**  One fact, five orders. Which makes the **book** important, and which makes **four** important? **1** _The referral book was in the vehicle on four of the six Saturdays._  **2** _It was the referral book that was in the vehicle._  **3** _What was in the vehicle was the referral book._  **4** _In the vehicle, on four of the six Saturdays, was the referral book._  **5** _The referral book was in the vehicle on four of the six Saturdays — four._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the four orders are for?   **A** variety   **B** **choosing which of the facts in one sentence the reader will be left holding** — and the four orders leave them holding four different things   **C** sounding more formal'));
out.push(p('**b**  Listen again. **1** What was Mr Attar taught about clefts, and what was never said?   **2** What does Mrs Oueidat say the drafting office changed, and what happened to the notice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  Four orders and one choice', [
  ['Ms Huda', 'One fact, five orders on the board. Mr Attar — which of them makes the book important?'],
  ['Jad', 'Two and three. The it-cleft and the what-cleft. ⚠ **And I can build all four of these and I have never once chosen between them.**'],
  ['Mrs Khoury', 'Say more about that, because it is the unit.'],
  ['Jad', '⚠ **I was taught the four as a list and I was tested on turning one into another.** **Nobody ever said they do different things.** **I have been producing them where the sentence felt flat, which is not a reason.**'],
  ['Mrs Tarabishi', 'But two and three both put the book at the end. How are they different?'],
  ['Mrs Oueidat', '⚠ **Two says _not the other thing_ and three does not.** _It was the referral book that was in the vehicle_ **answers a question nobody asked: which of several things.** _What was in the vehicle was the referral book_ **takes it as agreed that something was in the vehicle and names it.**'],
  ['Dr Qabbani', 'So the it-cleft argues with somebody.'],
  ['Mrs Oueidat', '⚠ **It does, and that is why it is dangerous in a notice.** **Our drafting office took _it is the occupier who must apply_ out of a notice last year and wrote _the occupier must apply_.** **Applications from occupiers went up by about a third in two months.**'],
  ['Mr Shihabi', 'Why would that happen?'],
  ['Mrs Oueidat', '⚠ **Because the it-cleft told people there was an argument about who applies**, and a reader who thinks there is an argument waits to see who wins it. **The plain order told them to apply.**'],
  ['Mrs Ajouz', 'And the fourth one — _in the vehicle was the referral book_. That sounds like a poem.'],
  ['Mrs Khoury', '⚠ **It sounds like a poem on its own and it is invisible in a paragraph**, which is the only place it ever appears. **It starts with what the sentence before was about and ends with the new thing.** **Take it out of its paragraph and it is strange; put it back and nobody notices it at all.**'],
  ['Mr Tayara', 'Which is the one I would use for the four Saturdays?'],
  ['Mr Zahreddine', '⚠ **None of them: you move the four to the end and stop.** _The referral book was in the vehicle on four of the six Saturdays_ **ends on Saturdays, and Saturdays is the one word in the sentence nobody needs.**'],
  ['Mrs Rizk', 'That is the whole of it, is it not. The last words are the ones that survive.'],
  ['Mrs Khoury', '⚠ **Yes, and it is not a tendency, it is how the language is built.** **The nucleus falls on the last lexical item unless something stops it.** **You can hear it: read the sentence and the voice comes down on _Saturdays_, and a reader hears that silently.**'],
  ['Jad', 'So the four orders are four ways of stopping it.'],
  ['Mrs Oueidat', '⚠ **Four ways of moving it, which is better.** **And each one costs something: the it-cleft implies a dispute, the what-cleft implies agreement, the fronting needs a paragraph round it, and putting the agent last makes the agent the news.**'],
  ['Mrs Tarabishi', 'And if none of the four is right?'],
  ['Mr Zahreddine', '🔊 ⚠ **Then rewrite the sentence so that the thing you need is last, which is what I do nineteen times out of twenty.** **The clefts are for the twentieth.**'],
]));
out.push(sp());
out.push(box('Language box – four marked orders, and the choice between them', [
  '**The unmarked order, and what it does.** _The referral book was in the vehicle on four of the six Saturdays._ ⚠ **The voice comes down on the last lexical word and the reader keeps it.** **Here that word is _Saturdays_**, which is the one piece of information in the sentence that nobody needed. **Before reaching for a device, ask whether moving the words is enough.**',
  '**1 The it-cleft.** _It was the referral book that was in the vehicle._ ⚠ **Identifies one thing against others and implies that there was a question.** **In a notice or an instruction it tells the reader there is an argument**, and a reader who believes there is an argument waits for it to finish.',
  '**2 The _what_-cleft.** _What was in the vehicle was the referral book._ ⚠ **Treats the first half as agreed and the last word as news.** **It is the safest of the four and the easiest to overuse**, and three of them in a page make a writer sound as though they are explaining something to a child.',
  '**3 Fronting with inversion.** _In the vehicle, on four of the six Saturdays, was the referral book._ ⚠ **Only works inside a paragraph**, because the fronted part has to be what the sentence before was about. **On its own it is strange; in place it is invisible.**',
  '**4 The agent at the end.** _The book was taken home by the driver._ **against** _The driver took the book home._ ⚠ **The passive is not a way of hiding somebody; it is a way of putting them last**, and last is where the reader keeps them. **A passive with the agent at the end is the strongest accusation in English and almost nobody knows it.**',
  '**And the cost of each.** ⚠ **The it-cleft implies a dispute. The _what_-cleft implies agreement. The fronting needs a paragraph round it. The agent at the end makes the agent the news** — **which is right if the driver is the point and wrong if the book is.**',
  '**Pronunciation.** 🔊 **Track 5.2** **Read the unmarked sentence and let your voice fall where it wants to.** ⚠ **It falls on _Saturdays_.** **Then read it with the fall forced onto _book_ and hear how much work it takes.** **A reader cannot hear you forcing it, which is the whole reason the written orders exist** — **in speech you can move the stress and on the page you have to move the words.**',
  '**Practise:** Say one fact in four orders and name what each makes important. **1** with the it-cleft  **2** with the _what_-cleft  **3** with fronting, inside a two-sentence paragraph  **4** with the agent last  **5** one where none of the four is right — and move the words instead',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a fact from the card. B says it in the order named and then says **what a reader would be left holding.** ⚠ **Two of the rows on each card are traps: the order asked for is grammatical and wrong for the fact.** **B must say so and give the order that is right.** Change cards.'));
out.push(table(['Card A – the fact, and the order asked for', 'Card B – the fact, and the order asked for'], [
  ['_Nineteen were turned away between January and June._ → **the it-cleft**', '_The slab was poured with the roller out of service._ → **the _what_-cleft**'],
  ['_⚠ The driver took the referral book home._ → **the _what_-cleft**', '_⚠ Eleven of the hundred and four were dispensed against a superseded sheet._ → **the it-cleft**'],
  ['_The form period lost ten minutes in September._ → **fronting, in a paragraph**', '_The test certificate is in the insurer\'s own file._ → **the agent at the end**'],
  ['_⚠ The inspection is required and the record is not._ → **the agent at the end**', '_⚠ Two of the five conditions are false today._ → **fronting, with no paragraph**'],
  ['_The notice was dated the eleventh._ → **the _what_-cleft**', '_The service log was never asked for._ → **the it-cleft**'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each row, the words the reader keeps. ⚠ **The traps are rows 2 and 4 on both cards.** **_The driver took the referral book home_ in a _what_-cleft gives _what the driver did was take the book home_, which makes the taking the news when the driver is the news** — **the agent at the end is the order, and it accuses.** **Row 4 on Card B asks for fronting with no paragraph round it**, which nobody can place.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own sentence from Stage 1** and write it in **all four orders.** ⚠ **Then say what each version leaves the reader holding, in three words or fewer.** **If two of your four leave them holding the same thing, one of the two is doing nothing** — **and it is usually the it-cleft, because it is the one people reach for first.**'));
out.push(p('**b**  Swap. Your partner reads your four versions **aloud, once each, at speed**, and then says — without looking — **what the sentence was about.** ⚠ **Their answer is the last word of whichever version they heard last.** **Do it twice with the order reversed and watch the answer change.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar can build all four of these orders and has never once chosen between them. Asked which made the book important, he said two and three, the it-cleft and the what-cleft, and then said the thing the unit turns on: he was taught the four as a list and was tested on turning one into another, and nobody ever said they do different things. He has been producing them where a sentence felt flat, which is not a reason. Mrs Tarabishi asked how two and three differ, since both put the book at the end, and Mrs Oueidat said two says not the other thing and three does not: it was the referral book that was in the vehicle answers a question nobody asked, which of several things, and what was in the vehicle was the referral book takes it as agreed that something was in the vehicle and names it. Dr Qabbani said so the it-cleft argues with somebody, and it does, which is why it is dangerous in a notice — their drafting office took it is the occupier who must apply out of a notice last year and wrote the occupier must apply, and applications from occupiers went up by about a third in two months. Mr Shihabi asked why that would happen, and because the it-cleft told people there was an argument about who applies, and a reader who thinks there is an argument waits to see who wins it; the plain order told them to apply. Mrs Ajouz said the fourth one sounds like a poem, and Mrs Khoury said it sounds like a poem on its own and is invisible in a paragraph, which is the only place it ever appears: it starts with what the sentence before was about and ends with the new thing. Mr Tayara asked which order he would use for the four Saturdays, and Mr Zahreddine said none of them — you move the four to the end and stop, because the referral book was in the vehicle on four of the six Saturdays ends on Saturdays, and Saturdays is the one word nobody needs. Mrs Rizk said that is the whole of it, the last words are the ones that survive, and Mrs Khoury said it is not a tendency but how the language is built: the nucleus falls on the last lexical item unless something stops it, and you can hear the voice come down on Saturdays. Mr Attar said so the four orders are four ways of stopping it, and Mrs Oueidat said four ways of moving it, which is better — and each one costs something. And Mr Zahreddine said that if none of the four is right you rewrite the sentence so that the thing you need is last, which is what he does nineteen times out of twenty: the clefts are for the twentieth._'));
out.push(p('**Listener task:** write the three-word answer for each of your own four versions.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Oueidat\'s note to the drafting office about one sentence of a notice. Answer the questions.'));
out.push(model([
  '**S. OUEIDAT** · _to the drafting office_ · _on the second sentence of the vacant-premises notice_ · **7 January**',
  '**The sentence as it stands is _it is the occupier who must apply before the thirtieth_.** **It is grammatical, it is clear, and it is the reason the notice is not working.**',
  '**What the four orders do with this fact.** **_It is the occupier who must apply_ identifies the occupier against somebody else, and the somebody else the reader supplies is the owner.** **_What the occupier must do is apply before the thirtieth_ treats it as settled that the occupier must do something.** **_Before the thirtieth, the occupier must apply_ puts the date where the reader keeps it.** **And _the application must be made by the occupier_ ends on the occupier, which is the version a reader will quote at you in April.**',
  '**The figures, which are the office\'s own.** **The notice went out in two forms by accident in 2025: eleven districts had the it-cleft and four had the plain order.** **The four were not chosen for anything — the printer worked from an older file and nobody noticed until October.** **Applications ran at about forty a month in the eleven and about fifty-five a month in the four**, against roughly comparable numbers of premises. ⚠ **I am not claiming the sentence accounts for all of that and I have not controlled for anything: I am claiming that the only difference anybody has identified is the sentence.**',
  '**Why the it-cleft loses applications.** **An it-cleft answers a question about which of several, and the reader has to work out what the several were.** **Here the reader works out _occupier, not owner_ — and about a third of our correspondents are occupiers who believe the owner handles it.** ⚠ **The sentence as drafted tells them there is a question about who applies, and a reader who believes there is a question waits for somebody to answer it.**',
  '**What I would put, and the decision is the office\'s.** _Before the thirtieth, the occupier must apply._ **The date is where the reader keeps it, the obligation is unmarked, and nothing in the sentence suggests that anybody disputes who it falls on.**',
  '**What I am not proposing.** **I am not proposing that the notice be rewritten.** ⚠ **One sentence, and the rest of the notice has been tested on the public for nine years.** **A redrafting would lose nine years of being understood in exchange for something nobody has measured.**',
  '**One thing that is ours and not the public\'s.** ⚠ **The it-cleft went in because a committee argued for two meetings about whether the owner should be liable**, and the sentence carries the argument. **A sentence that records an argument the reader was not in is the commonest fault in official prose and we have about sixty of them.** **They are listed on the sheet behind this note, and eleven of the sixty are in notices still going out.**',
]));
out.push(item('1', 'What does she say each of the four orders does with the fact?'));
out.push(item('2', 'What are the two sets of figures, and exactly what does she refuse to claim about them?'));
out.push(item('3', 'Why is she not proposing a redrafting, and what does she say the it-cleft is carrying?'));
out.push(writers([
  'A note on one sentence: **the sentence quoted exactly** → **the four orders and what each does with the fact** → **the figures, with the comparison and the refusal** → **why the order as drafted loses something** → **the version you would put, and whose decision it is** → **what you are not proposing** → **and where the marked order came from.**',
  '⚠ **Quote the sentence and do not describe it.** _The sentence as it stands is "it is the occupier who must apply before the thirtieth."_ **A reader who is given a description has to reconstruct the sentence before they can disagree with you**, and most of them reconstruct a better one than the one you are objecting to.',
  '**Give the orders as sentences, not as names.** ⚠ **Nobody outside a classroom knows what a cleft is and everybody can hear one.** _What the occupier must do is apply before the thirtieth_ **does the explaining that the word _cleft_ would not do.**',
  '**Refuse the causal claim you are inviting.** ⚠ _I am not claiming the sentence accounts for all of that and I have not controlled for anything._ **The forty and the fifty-five are the whole argument and the refusal is what makes them usable** — **a reader who is allowed to supply the causation themselves will defend it; a reader who is told it will test it.**',
  '⚠ And **say where the marked order came from, if you know.** _It went in because a committee argued for two meetings about whether the owner should be liable._ **A sentence that records an argument the reader was not in is the commonest fault in official prose**, and naming it makes the fix a tidying rather than a criticism.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on one sentence (120 words or more).'));
out.push(p('**______________** · _to _______________ · _on _______________ · **______________**   **The sentence as it stands is _"______________."_** **It is grammatical, and ______________.**   **What the four orders do with this fact.** **_______________ identifies ______________ against ______________.** **_______________ treats it as settled that ______________.** **_______________ puts ______________ where the reader keeps it.** **And _______________ ends on ______________.**   **The figures, which are ______________\'s own.** ⚠ **I am not claiming ______________ and I have not controlled for anything.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The sentence quoted exactly, not described',
  'The four orders given as sentences and not as names',
  'A figure, with the comparison it rests on',
  'The causal claim refused in the same paragraph',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their quoted sentence and the version they would put**, and the room says what moved.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the sentence, the four orders, the figures with the refusal, why the drafted order loses something, your version, what you are not proposing, and where the marked order came from.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the sentence quoted exactly, the orders given as sentences, a figure with its comparison, and the causal claim refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their quoted sentence twice: once as written and once with the last two words removed.** ⚠ **The room says what the shortened version is about.** **Something different, almost always** — and nothing was added, and nothing was reordered, and two words came off the end. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **the clefts are for the twentieth.**'));
out.push(hw('Take **the paragraph you brought** and find **the sentence whose last word is not the word you need.** ⚠ **Write it in all four orders and then write the fifth version: the one where you simply moved the words.** **In most paragraphs the fifth is the one to keep**, and the four orders are what let you see that. **Bring all five versions.** **5.2 is fronting**, and it is the order that only works inside a paragraph.'));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  What it is about first, what is new at the end'));
out.push(p('**Function:** fronting what the sentence is about and leaving the new thing at the end   ·   **Grammar:** the fronted object · the fronted complement · end-weight   ·   **Pronunciation:** the fronted part as its own tone unit'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out the first six words of a paragraph you wrote this week, and then the last six.** ⚠ **Nothing in between.** Your teacher writes the two ends up and the room says what the paragraph was about. **In about half the cases the room is wrong**, and those are the paragraphs this cycle is for.'));
out.push(board('A review of the arrangements was undertaken by the committee in October.', 'October.'));
out.push(p('**b**  The sentence before was: _Ten of the forty-one had no second sample at all._ Which of these begins with what the reader already has? **1** _Eight of the ten presented at night._  **2** _At night, eight of the ten presented._  **3** _Of the ten, eight presented at night._  **4** _It was at night that eight of the ten presented._  **5** _There were eight of them who presented at night._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a sentence should begin with?   **A** the subject   **B** **whatever the reader is already holding from the sentence before** — so that the new thing can be last   **C** the most important word'));
out.push(p('**b**  Listen again. **1** What did the desk do to Mr Shihabi\'s three paragraphs, and what did he only notice afterwards?   **2** What does Dr Qabbani say about the long phrase at the front of a sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  Given first, new last', [
  ['Ms Huda', 'Mr Shihabi — the three paragraphs the desk reordered. What did they do?'],
  ['Mr Shihabi', 'They did not change a word. ⚠ **They moved the last clause of each paragraph to the front and the first to the back, and the piece read better, and I was annoyed for a fortnight.**'],
  ['Mrs Tarabishi', 'Annoyed because they were right?'],
  ['Mr Shihabi', '⚠ **Annoyed because I could not say what they had done.** **I could see it was better and I had no word for it.** **I have been writing for twenty-one years.**'],
  ['Mrs Khoury', 'What they did has a name and it is two rules. ⚠ **Begin with what the reader already has. End with what is new.** **Everything in this unit is those eight words.**'],
  ['Dr Qabbani', 'Then what is fronting for, if the rule is just _given first_?'],
  ['Mrs Khoury', '⚠ **Fronting is how you begin with the given thing when the given thing is not the subject.** _The eight we have no reason for._ **_The eight_ is the object and it is what the paragraph has been about, so it goes first and the subject follows it.**'],
  ['Mrs Oueidat', 'And it only works if the eight really are given.'],
  ['Mrs Khoury', '⚠ **It only works then, and otherwise it is a trick.** **A fronted object that the reader has not met is the worst sentence in this unit** — **they hold it in the air for eleven words waiting to find out what it is doing.**'],
  ['Mr Tayara', 'What about the long phrase at the front? _In eight of the ten admissions where the first sample had already gone, a second was not available._'],
  ['Dr Qabbani', '⚠ **That is the same rule and the opposite problem.** **The long phrase is fine at the front if it is given and short-ish.** **At fourteen words it is a corridor**, and the reader arrives at the subject having forgotten why they were walking.'],
  ['Mrs Ajouz', 'So you put it at the end.'],
  ['Dr Qabbani', '⚠ **You put the heavy thing at the end, whatever it is.** _A second sample was not available in eight of the ten admissions where the first had already gone._ **The heavy part is last and it is also the new part, which is why the two rules almost never disagree.**'],
  ['Jad', 'Almost never. When do they?'],
  ['Mrs Khoury', '⚠ **When the given thing is the heavy one.** **Then you break the sentence in two and the problem disappears**, and that is 5.3.'],
  ['Mrs Rizk', 'And the one that annoys me: _it was in October that the committee reviewed it._'],
  ['Mrs Oueidat', '⚠ **October at the end is a date; October in a cleft is an argument about when.** **Ask whether anybody has suggested another month.** **If not, the sentence is answering a question that was not asked** — **which is 5.1 arriving a day later.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is that the desk did it by ear in about ninety seconds.** **Twenty-one years, and the repair has eight words in it.**'],
]));
out.push(sp());
out.push(box('Language box – given first, new last', [
  '**The two rules, and everything in this unit is in them.** ⚠ **Begin with what the reader already has. End with what is new.** **A paragraph obeying both reads as though it were written by somebody who knew what they were doing**, and a paragraph breaking them reads as a list of true sentences.',
  '**The fronted object.** _The eight we have no reason for._ ⚠ **Use it only when the object is genuinely given** — **when the reader met it in the sentence before.** **A fronted object the reader has not met is held in the air until the verb arrives**, and that is the worst sentence this unit can produce.',
  '**The fronted complement, with inversion.** _Missing from the file, on both visits, was the mill certificate._ ⚠ **It needs a paragraph round it and it needs the fronted part to be the paragraph\'s subject matter.** **Used once in a page it is invisible; used twice it is a style.**',
  '**End-weight.** ⚠ **Put the long thing last, whatever it is.** _A second sample was not available in eight of the ten admissions where the first had already gone._ **A fourteen-word phrase in front of the subject is a corridor**, and the reader arrives at the verb having forgotten what the sentence is about.',
  '**And the two rules almost never disagree**, because the new thing is usually the heavy thing. ⚠ **When they do — when the given thing is the long one — break the sentence in two.** **The repair is never to force one rule over the other.**',
  '**A date at the end is a date; a date in a cleft is an argument about when.** ⚠ **Before writing _it was in October that_, ask whether anybody has proposed another month.** **If nobody has, the sentence answers a question that was not asked, and the reader looks for the dispute.**',
  '**Pronunciation.** 🔊 **Track 5.4** **Read a fronted element as its own tone unit, with a small fall and a pause.** ⚠ _**The eight** | we have no reason for._ **Read flat and run together, it sounds like a mistake.** **Read as two units, it sounds like the most ordinary sentence in the language** — **and the pause is about a fifth of a second, which is nothing and is the whole difference.**',
  '**Practise:** Say it given-first and new-last. **1** with a fronted object  **2** with a fronted complement and inversion  **3** with a heavy phrase moved to the end  **4** where the given thing is heavy — so break it in two  **5** one where the date is at the end, and then in a cleft — and say which is right here',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair of sentences from the card. B says which of the two begins with the given thing, and **repairs the other one without changing a word of its content.** ⚠ **Two rows on each card cannot be repaired by reordering and have to be broken in two.** **B must say which, and why.** Change cards.'));
out.push(table(['Card A – which begins with the given?', 'Card B – which begins with the given?'], [
  ['_Thirty-one had a second sample. A second sample was not available in ten._', '_The roller was out of service. Out of service on the day of the pour was the roller._'],
  ['_⚠ We have no reason for the eight. The eight are the ones nobody asked about and the ones a reason would have come from._', '_⚠ The 2019 file holds the costing. Whatever was decided in 2019 and whatever costing was put to the committee that year are in the file._'],
  ['_The notice went out in two forms. In two forms, by accident, the notice went out._', '_Eleven dispensings were wrong. Of the hundred and four, eleven were wrong._'],
  ['_⚠ The limit names a document. The document the limit names and the party who holds it are the same two facts the handler needed._', '_⚠ A key is all it needs. What the Sunday count needs is a key and a department that will release it on a day it does not work._'],
  ['_The form period lost ten minutes. Ten minutes the form period lost._', '_The brake certificate is in the file. In the file, unread since March, is the brake certificate._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each row, the repair. ⚠ **Rows 2 and 4 are the ones that cannot be reordered**, because the given thing is also the heavy thing and no order satisfies both rules. **The repair is a full stop:** _We have no reason for the eight. They are the ones nobody asked about._ **Two sentences, each obeying both rules, and the fault disappears.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the paragraph you brought** and mark, for each sentence, **the first six words and the last six.** ⚠ **Then draw a line from each ending to the next beginning.** **Where the line is short, the paragraph reads well; where it crosses the whole page, it does not** — **and most people find two or three crossings in a paragraph they were pleased with.**'));
out.push(p('**b**  Swap. Your partner reads only **the first and last six words of each of your sentences**, in order, and says what the paragraph is about. ⚠ **If they are right, the paragraph is doing its work in the right places.** **If they are wrong, the content is in the middle of your sentences**, which is where nothing is kept.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi had three paragraphs reordered by a desk and was annoyed for a fortnight. They did not change a word: they moved the last clause of each paragraph to the front and the first to the back, and the piece read better. Asked whether he was annoyed because they were right, he said he was annoyed because he could not say what they had done — he could see it was better and he had no word for it, after twenty-one years of writing. Mrs Khoury said what they did has a name and is two rules: begin with what the reader already has, end with what is new, and everything in the unit is those eight words. Dr Qabbani asked what fronting is for if the rule is simply given first, and Mrs Khoury said fronting is how you begin with the given thing when the given thing is not the subject — the eight we have no reason for, where the eight is the object and is what the paragraph has been about, so it goes first and the subject follows. Mrs Oueidat said it only works if the eight really are given, and it only works then and is otherwise a trick: a fronted object the reader has not met is the worst sentence in the unit, because they hold it in the air for eleven words waiting to find out what it is doing. Mr Tayara asked about the long phrase at the front, in eight of the ten admissions where the first sample had already gone, and Dr Qabbani said that is the same rule and the opposite problem — a long phrase is fine at the front if it is given and short-ish, and at fourteen words it is a corridor, and the reader arrives at the subject having forgotten why they were walking. Mrs Ajouz said so you put it at the end, and you put the heavy thing at the end whatever it is: a second sample was not available in eight of the ten admissions where the first had already gone, the heavy part last and also the new part, which is why the two rules almost never disagree. Mr Attar asked when they do, and Mrs Khoury said when the given thing is the heavy one — then you break the sentence in two and the problem disappears. Mrs Rizk said the one that annoys her is it was in October that the committee reviewed it, and Mrs Oueidat said October at the end is a date and October in a cleft is an argument about when: ask whether anybody has suggested another month, and if not the sentence is answering a question that was not asked. And Mr Shihabi said the thing he will take away is that the desk did it by ear in about ninety seconds — twenty-one years, and the repair has eight words in it._'));
out.push(p('**Listener task:** write the two sentences in your own paragraph where the line crossed furthest.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three paragraphs Dr Qabbani sent to the clinical governance committee. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _to the clinical governance committee_ · _culture-negative admissions, 2023 to 2026_ · **12 January**',
  '**Forty-one culture-negative admissions were recorded in the three years to March, and thirty-one of them had a second blood sample taken before antibiotics.** **In eleven of the thirty-one the second sample was available and the first was not, and in seven of those eleven a serological diagnosis was reached.** **Seven of eleven is a figure I should like somebody else to look at.**',
  '**That figure is the reason I am writing, and it is also the reason I cannot tell the committee anything from it.** **Eleven is a small number, and the eleven were not selected: they are simply the admissions where one sample worked and the other did not.** **Against them stand the ten admissions with no second sample at all.** ⚠ **Those ten are the group that would answer the question, and about them I know nothing whatever.**',
  '**About the ten I know only when they arrived.** **Eight of the ten presented at night, and two of the eight arrived with antibiotics already running from another unit, in which case nobody could have taken a pre-antibiotic second sample.** **The two came from the same unit and on the same night, which I mention because it is the kind of coincidence that makes a small number smaller.** **That is two of the ten accounted for.** **The remaining eight are not accounted for, and no reason is recorded for any of them, because the note I wrote in 2023 asked for a sample and not for a reason.**',
  '**What the committee is being asked to agree is one line on the admissions sheet.** **Not a procedure, not an audit, not a change to anybody\'s practice: a line, in a space that already exists, four lines below the one everybody fills in.** **It records two things — the time, and whether the first sample had already gone to the laboratory.**',
  '**From January that line would make the three years answerable.** ⚠ **It would also, within about eighteen months, be capable of showing that my own advice was wrong**, which is the outcome I should expect if most of the eight turn out to have been cases where the first sample had already gone.',
  '**On the cost there is one honest figure and it is not in minutes.** **The two lines take about twenty seconds.** **The twenty seconds fall at two in the morning on a registrar who has one pair of hands**, and that is the figure the committee should weigh, not the twenty seconds. **One registrar put it to me as eight seconds for the time and twelve for the question, and she had counted them.**',
  '**Against the whole of the above stands a fact the committee will raise and I should rather raise first.** ⚠ **Three years of records exist and cannot answer the question they were kept for.** **Thirty-one and ten, and no reasons: a description of what happened, and evidence about nothing.**',
]));
out.push(item('1', 'What does each paragraph begin with, and how is it connected to the one before?'));
out.push(item('2', 'Which sentence puts its heavy phrase at the end, and what would it read like with the phrase in front?'));
out.push(item('3', 'What is the committee being asked to agree, and what does he say the line would be capable of showing?'));
out.push(writers([
  'A paragraph that keeps its emphasis: **begin with what the last sentence ended on** → **put the new thing last** → **move the heavy phrase to the end** → **front the object only when the reader has already met it** → **break the sentence in two when the given thing is the heavy one** → **and end the paragraph on the word you want kept.**',
  '⚠ **Chain the ends to the beginnings.** _…a serological diagnosis was reached. **That figure** is the reason I am writing._ **The reader carries one word across the gap and the paragraph closes behind them**, and nothing else in writing produces that effect as cheaply.',
  '**Front the object only when it is given.** ⚠ _**About the ten** I know only when they arrived._ **The ten have been the subject of two paragraphs, so the reader takes the fronted phrase without effort** — **and the sentence now ends on _arrived_, which is the new thing and the next paragraph\'s material.**',
  '**Put the heavy part last, and say the short thing first.** ⚠ _Eight of the ten presented at night, and two of the eight arrived with antibiotics already running from another unit._ **With the long clause in front, the reader walks fourteen words before learning what the sentence is about.**',
  '⚠ And **end the paragraph on the word you want kept, not on the word that happens to be last.** _…a description of what happened, and evidence about nothing._ **Nine words could have been reordered to end on _three years_**, which is true and useless; **the paragraph ends on _nothing_, which is the finding.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first two paragraphs of a report that chains its ends to its beginnings (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ were recorded in ______________, and ______________ of them ______________.** **In ______________ the ______________, and in ______________ of those ______________.** **______________ is a figure ______________.**   **That figure is the reason ______________, and it is also the reason ______________.** **______________ is a small number, and ______________ were not selected.** **Against them stand ______________.** ⚠ **Those ______________ are the group that would answer the question, and about them ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each sentence begins with something the one before ended on',
  'The new thing is last in every sentence',
  'No heavy phrase in front of a subject',
  'The paragraph ends on the word you want kept',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the last four words of each of their sentences, in order**, and the room says what the paragraph was about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole report (260 words or more), to the shape in the writer\'s box: the chain, the new thing last, the heavy phrase at the end, the fronted object only where it is given, and a last word worth keeping.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: each sentence begins with given material, the new thing is last, no heavy phrase in front of a subject, and the paragraph ends where it should.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their paragraph twice: once as written and once with every sentence in reverse order.** ⚠ **The room says which version it could follow.** **The written one, and the gap is much larger than anybody expects** — the same sentences, the same words, and one version that can be read once and one that has to be read twice. Then the sentence the cycle ends on, which is Mr Shihabi\'s: **the desk did it by ear in about ninety seconds.**'));
out.push(hw('Take **a page of your own** and mark **the first six words and the last six of every sentence.** ⚠ **Draw the line from each ending to the next beginning and count the crossings.** **Then repair the two longest crossings, and note which of the two repairs needed a full stop rather than a reordering.** **In most pages one of the two does.** **Bring the marked page and the two repairs.** **5.3 is the subject that is four lines long**, and it is the fault the second repair was about.'));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  The subject that is four lines long'));
out.push(p('**Function:** holding a long subject back until the reader is ready for it   ·   **Grammar:** extraposition · _it is not in dispute that_ · the repair that is a full stop   ·   **Pronunciation:** the anticipatory _it_, said as nothing at all'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out one sentence of your own in which the subject is longer than the predicate.** ⚠ **Count the words in each half aloud.** Your teacher writes the two numbers on the board. **In most classes the worst sentence in the room has a subject of twenty-odd words and a predicate of three**, and its writer was pleased with it.'));
out.push(board('That the nine positions were never measured and that no certificate was issued are not in dispute.', 'dispute.'));
out.push(p('**b**  Which of these makes the reader wait for the verb? **1** _It is not in dispute that the nine positions were never measured._  **2** _That the nine positions were never measured and that no certificate was ever issued are not in dispute._  **3** _Nobody disputes the nine positions._  **4** _Whether the frame will fail, which nobody has calculated and which is not what the insurer asked, remains open._  **5** _The question of whether the file copy exists has not been answered._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the anticipatory _it_ is for?   **A** formality   **B** **holding the long part back until the reader knows what is being done with it** — so the reader meets the verb first and the material second   **C** avoiding the first person'));
out.push(p('**b**  Listen again. **1** What happened to the sentence Mr Shihabi read out from the planning decision?   **2** What does Mrs Oueidat say about a long subject in a document that will be read aloud?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  The verb that never came', [
  ['Ms Huda', 'Mr Shihabi has brought a sentence from a planning decision. Read it.'],
  ['Mr Shihabi', '⚠ **_That the site had been used for storage since 2011, that no objection was received from the directorate, and that the access road is adopted were accepted by the inspector._** **Twenty-nine words before the verb.**'],
  ['Mrs Tarabishi', 'I lost it at the second _that_.'],
  ['Mr Shihabi', '⚠ **Everybody does, and it is not a difficult sentence.** **There is nothing in it a reader cannot follow.** **They simply have to hold three things with no idea what is going to be done with them.**'],
  ['Dr Qabbani', 'And the repair is _it was accepted that_.'],
  ['Mrs Khoury', '⚠ **_The inspector accepted three things: that the site…_ is the better repair and the one nobody reaches for.** **Extraposition is the standard fix and a colon and a list is often the honest one.**'],
  ['Mrs Oueidat', 'Both, depending on whether the three things are a list or an argument.'],
  ['Mrs Khoury', '⚠ **Say more about that.**'],
  ['Mrs Oueidat', '⚠ **If the reader needs all three together, extrapose: _it was accepted that A, that B and that C._** **If they are three separate findings, give them a colon and three lines, and the reader can take them one at a time.** **A list pretending to be a sentence is the commonest fault in a decision document.**'],
  ['Mr Tayara', 'What does the _it_ actually do?'],
  ['Mrs Khoury', '⚠ **Nothing, which is the point.** **It holds the subject position so that the verb can arrive on time.** **The reader gets _is not in dispute_ at word four and then knows what to do with everything after it.**'],
  ['Mrs Ajouz', 'In my examination I wrote one of those long subjects. I remember building it.'],
  ['Mrs Khoury', '⚠ **Most people build them deliberately and they are a sign of effort.** **That is why they survive: a twenty-nine-word subject looks like careful work and reads like a corridor.**'],
  ['Mr Zahreddine', 'My opinions are read aloud in hearings. Does it matter there?'],
  ['Mrs Oueidat', '⚠ **It matters more there and in exactly one way.** **A reader can go back and a listener cannot.** **A long subject read aloud is gone** — **and the person reading it aloud is usually not you, so they will also put the stress in the wrong place.**'],
  ['Jad', 'Is there a number? When is a subject too long?'],
  ['Mrs Khoury', '⚠ **There is no number and there is a test: read it aloud and see whether you need a breath before the verb.** **If you do, the reader needed one too.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is that the inspector wrote that sentence to sound careful.** **Twenty-nine words of care, and the three findings in it are the ones everybody has argued about since, because nobody could hold all three.**'],
]));
out.push(sp());
out.push(box('Language box – holding the long part back', [
  '**The fault.** ⚠ **A subject the reader has to hold while waiting to find out what is being done with it.** _That the site had been used for storage since 2011, that no objection was received and that the road is adopted were accepted by the inspector._ **Twenty-nine words before the verb, and nothing in the sentence is difficult.**',
  '**Repair one: extraposition.** _It was accepted by the inspector that the site had been used for storage, that no objection was received and that the road is adopted._ ⚠ **The _it_ does nothing at all, and that is its job** — **it holds the subject position so the verb can arrive at word three.**',
  '**Repair two: the colon and the list.** _The inspector accepted three things: that the site…_ ⚠ **Use this when the three things are three findings.** **Use extraposition when the reader needs all three held together as one.** **A list pretending to be a sentence is the commonest fault in a decision document.**',
  '**Repair three, which is usually best and is almost never chosen: the full stop.** ⚠ _The site had been used for storage since 2011. No objection was received. The road is adopted. The inspector accepted all three._ **Four short sentences, and the only cost is that it does not look like effort.**',
  '**The test, because there is no number.** ⚠ **Read it aloud and see whether you need a breath before the verb.** **If you do, the reader needed one too** — **and a reader cannot take one, because they do not know yet where the sentence is going.**',
  '**And the one place it matters more.** ⚠ **A document that will be read aloud** — **a hearing, a committee, a notice** — **has no second pass.** **A reader can go back and a listener cannot**, and the person reading it aloud is usually not the writer, so the stress will also land in the wrong place.',
  '**Pronunciation.** 🔊 **Track 5.6** **The anticipatory _it_ takes no stress at all.** ⚠ _It is **not** in dispute that…_ **Say it as though the word were not there.** **Students who have learnt the construction from the page often stress it, which makes the sentence sound as though _it_ referred to something** — **and the reader then looks back for what.**',
  '**Practise:** Repair a long subject, and name the repair. **1** with extraposition  **2** with a colon and a list  **3** with full stops  **4** where the three parts must be held together — so extrapose  **5** one that is fine as it is — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B counts the words before the verb aloud, then gives **the repair and its name.** ⚠ **Two rows on each card do not need repairing at all** — **the subject is long and the reader is ready for it, because it is the thing the sentence before was about.** **B must say so and not repair them.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_That the roller was out of service and that the pour went ahead are both recorded in the site diary._', '_Whether the eleven reached a patient, which nobody has established, remains the only question that matters._'],
  ['_⚠ The eight for whom no reason was recorded are the group this committee has to decide about._', '_⚠ The three years of records that were kept to answer this question cannot answer it._'],
  ['_That nobody asked for the service log for eleven weeks is the fact the insurer will be asked about._', '_That the form period lost ten minutes in September and that the first lesson never had them are both true._'],
  ['_⚠ The nineteen who were turned away between January and June are two-thirds of a problem nobody has costed._', '_⚠ The sentence the committee argued about for two meetings is still in the notice._'],
  ['_How the figure was arrived at, who supplied it and when it was last checked are not stated anywhere._', '_That the key is held by a department that does not work weekends is the whole of the difficulty._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the word count before each verb, and the repair. ⚠ **Rows 2 and 4 need no repair on either card.** **The subject is long and every word of it is given**, so the reader is not holding anything: they are being reminded. **The test is not length but whether the material is new** — and a fifteen-word subject made of old information is easier than a six-word subject made of new.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your sentence from Stage 1** and write all three repairs: **the extraposition, the colon and list, and the full stops.** ⚠ **Then choose, and write one line saying what the choice was for.** **If the three parts have to be held together, extrapose; if they are three findings, list them; if they are three facts, use full stops** — **and the last is right more often than anybody likes.**'));
out.push(p('**b**  Swap and read your original aloud to your partner, who holds a pen and **draws a mark at the point where they stop understanding it.** ⚠ **Then read the repair.** **Compare where the two marks fall.** **In most pairs the first mark is at about word twelve and the second does not exist.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi brought a sentence from a planning decision: that the site had been used for storage since 2011, that no objection was received from the directorate, and that the access road is adopted were accepted by the inspector. Twenty-nine words before the verb. Mrs Tarabishi said she lost it at the second that, and everybody does, and it is not a difficult sentence — there is nothing in it a reader cannot follow, and they simply have to hold three things with no idea what is going to be done with them. Dr Qabbani said the repair is it was accepted that, and Mrs Khoury said the inspector accepted three things, with a colon, is the better repair and the one nobody reaches for: extraposition is the standard fix and a colon and a list is often the honest one. Mrs Oueidat said both, depending on whether the three things are a list or an argument — if the reader needs all three together, extrapose; if they are three separate findings, give them a colon and three lines and the reader can take them one at a time, because a list pretending to be a sentence is the commonest fault in a decision document. Mr Tayara asked what the it actually does, and Mrs Khoury said nothing, which is the point: it holds the subject position so that the verb can arrive on time, and the reader gets is not in dispute at word four and then knows what to do with everything after it. Mrs Ajouz said she wrote one of those long subjects in her examination and remembers building it, and Mrs Khoury said most people build them deliberately and they are a sign of effort — which is why they survive, because a twenty-nine-word subject looks like careful work and reads like a corridor. Mr Zahreddine asked whether it matters in opinions read aloud at hearings, and Mrs Oueidat said it matters more there and in exactly one way: a reader can go back and a listener cannot, and the person reading it aloud is usually not you, so they will also put the stress in the wrong place. Mr Attar asked whether there is a number, and Mrs Khoury said there is no number and there is a test — read it aloud and see whether you need a breath before the verb, and if you do, the reader needed one too. And Mr Shihabi said the thing he will take away is that the inspector wrote that sentence to sound careful: twenty-nine words of care, and the three findings in it are the ones everybody has argued about since, because nobody could hold all three._'));
out.push(p('**Listener task:** write the word count before the verb in your own worst sentence, and in your repair.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Shihabi wrote for the news desk on the planning decision. Answer the questions.'));
out.push(model([
  '**K. SHIHABI** · _for the desk_ · _Mezzeh storage site, inspector\'s decision of 9 January_ · **10 January**',
  '**The inspector has allowed the appeal.** **He accepted three things: that the site has been used for storage since 2011, that the directorate entered no objection, and that the access road is adopted.** **He rejected the fourth, which was that the use is ancillary to the works next door.**',
  '**It is the fourth that the story is in.** **The appellant\'s case rested on the ancillary point, and the inspector dealt with it in one paragraph of a nineteen-page decision.** **He found that the works next door closed in 2016 and that nothing can be ancillary to a closed works, which is four lines and disposes of eleven pages of argument.** **The four lines read: _the works to which the use is said to be ancillary ceased in 2016 and have not reopened; nothing can be ancillary to a use that has ceased._**',
  '**It is not in dispute that the storage use is lawful now**, the inspector having allowed the appeal on the first three grounds. **What is in dispute, and what nobody on either side raised, is whether the lawfulness survives a change of operator** — **and the decision does not say.**',
  '**The directorate\'s position is the part a reader will want and the part we cannot give yet.** **They entered no objection, and I have asked twice why, and the answer both times has been that the file is with the legal officer.** **No officer has been named to me and I have not seen the file.** **The objection period closed on 2 March and the file was opened on 27 February, which I have from the registry index and not from them.**',
  '**On the figures.** **The site is about two and a half hectares.** **Nineteen pages of decision, eleven of them argument about the ancillary point, and one paragraph disposing of it.** **The appeal took fourteen months from lodging to decision, against a published target of eight.** **Two of the fourteen went on a request for further information that the appellant answered in nine days.**',
  '**What I have not done, and the desk should know before it runs.** **I have not spoken to the operator, whose number I have had since Thursday and who has not answered.** **I have not read the 2016 closure notice for the works next door**, which is the document the whole fourth ground turns on and which is in the registry. **The works next door are a joinery and the closure notice is a planning document and not a company filing, so the registry copy is the one that counts.** **I have not put the change-of-operator point to the directorate either, preferring to have the notice first.** ⚠ **If that notice says anything other than a closure, the four lines go and so does the story.**',
  '**One line for the lawyer before this runs.** **The sentence about the operator is mine and not the inspector\'s**, and nothing in the decision addresses it.',
]));
out.push(item('1', 'What did the inspector accept, and how is the list of three presented?'));
out.push(item('2', 'Where does the extraposed _it_ appear, and what does the sentence put at its end?'));
out.push(item('3', 'What has he not done, and what would happen to the story if the closure notice said something else?'));
out.push(writers([
  'A note that holds its long material back: **the finding in one short sentence** → **the list, given a colon and not built into a subject** → **extraposition where the parts must be held together** → **what is in dispute, at the end of its own sentence** → **the figures** → **what you have not done** → **and the one line that is yours and not the source\'s.**',
  '⚠ **Give a list a colon and not a subject.** _He accepted three things: that the site has been used for storage, that the directorate entered no objection, and that the road is adopted._ **The reader meets _three things_ at word four and then takes them one at a time**, which is the whole of the repair.',
  '**Use extraposition when the parts must be held together.** ⚠ _It is not in dispute that the storage use is lawful now._ **The _it_ does nothing and buys everything: the verb arrives at word four and the material arrives afterwards, when the reader knows what is being done with it.**',
  '**And put the thing in dispute at the end of its own sentence.** ⚠ _What is in dispute, and what nobody on either side raised, is whether the lawfulness survives a change of operator._ **Twelve words of given material, then the new thing, then a full stop** — **and the next sentence can begin from it.**',
  '⚠ And **say what you have not done, before somebody else does.** _I have not read the 2016 closure notice, which is the document the whole fourth ground turns on._ **A reader who is told what is missing can decide whether to run it; a reader who finds out afterwards decides something else.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note that holds its long material back (120 words or more).'));
out.push(p('**______________** · _for _______________ · _______________ · **______________**   **______________ has ______________.** **______________ accepted ______________ things: that ______________, that ______________, and that ______________.** **______________ rejected ______________, which was that ______________.**   **It is ______________ that the ______________ is in.** **______________ rested on ______________, and ______________ dealt with it in ______________.**   **It is not in dispute that ______________.** **What is in dispute, and what ______________, is whether ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No subject longer than its predicate',
  'A list given a colon, not built into a subject',
  'Extraposition only where the parts must be held together',
  'The thing in dispute at the end of its own sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their longest sentence**, and the room counts aloud the words before the verb.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the short finding, the list with a colon, the extraposition, the dispute at the end of its sentence, the figures, and what you have not done.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no subject longer than its predicate, a colon where there is a list, extraposition only where the parts hold together, and what you have not done.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their worst original sentence aloud and the room raises a hand at the moment it stops following.** ⚠ **Count the words to the first hand.** **Then the repair, read the same way, and count again.** **The first number is usually about twelve and the second is usually no hands at all.** Then the sentence the cycle ends on, which is Mr Shihabi\'s: **twenty-nine words of care, and nobody could hold all three.**'));
out.push(hw('Take **the sentence of your own with the longest subject** and write **all three repairs: the extraposition, the colon and list, and the full stops.** ⚠ **Then read the original aloud to somebody who is not in this class and watch their face.** **The place where they stop is the place your reader stopped, and they will not tell you unless you are watching.** **Bring the original, the three repairs and the word counts.** **5.4 is the choice between a cleft and an inversion**, which is the first cycle in this unit that asks you to defend a decision rather than make a repair.'));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  Cleft or inversion, and why that one'));
out.push(p('**Function:** choosing between a cleft and an inversion for the same emphasis, and saying why   ·   **Grammar:** _not until… did_ · _at no point was_ · _only when… did_ against _it was not until… that_   ·   **Pronunciation:** the inversion said without drama'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence you have written that begins with a negative word** — _not until_, _at no point_, _nowhere_, _never_, _only after_. ⚠ **If you have none, say so.** Your teacher writes them up and counts. **In most classes three or four students have one and the rest have none at all**, which is the figure the cycle starts from.'));
out.push(board('It was not until the fourth Saturday that anybody asked where the book was.', 'was.'));
out.push(p('**b**  Which of these is an inversion rather than a cleft? **1** _Not until the fourth Saturday did anybody ask._  **2** _It was not until the fourth Saturday that anybody asked._  **3** _What nobody did until the fourth Saturday was ask._  **4** _At no point was the service log requested._  **5** _It was the service log that nobody requested._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the difference is?   **A** formality   **B** **the cleft names a dispute and the inversion names a fact** — so the choice is about whether anybody is arguing   **C** the inversion is older'));
out.push(p('**b**  Listen again. **1** What happened when Mrs Khoury changed one sentence in a standing instruction?   **2** What does Mr Zahreddine say about inversions in an opinion?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  The same emphasis, two ways', [
  ['Ms Huda', 'Same emphasis, two sentences. Mrs Khoury — what is the difference?'],
  ['Mrs Khoury', '⚠ **_It was not until the fourth Saturday that anybody asked_ says somebody has been arguing about when.** **_Not until the fourth Saturday did anybody ask_ says nothing of the kind: it is a fact with the time in front of it.**'],
  ['Mr Tayara', 'They look like the same sentence to me.'],
  ['Mrs Khoury', '⚠ **They do until you put them in a document and watch what comes back.** **I changed one sentence in a standing instruction last year — cleft to inversion, nothing else — and the queries about the date stopped.**'],
  ['Mrs Tarabishi', 'Stopped entirely?'],
  ['Mrs Khoury', '⚠ **We had eleven queries in the first quarter and two in the second**, and the only thing that changed was the sentence. **I am not claiming the sentence did all of it. I am claiming it is the only change anybody can name.**'],
  ['Dr Qabbani', 'Why would a cleft produce queries?'],
  ['Mrs Oueidat', '⚠ **Because it-clefts contrast.** **_It was not until the fourth_ invites the reader to supply the alternative: not the first, not the second.** **A reader who has been handed an alternative starts checking it.**'],
  ['Mr Shihabi', 'And the inversion does not do that?'],
  ['Mrs Oueidat', '⚠ **The inversion emphasises without contrasting, which is the only thing in English grammar that does.** **It is also the one construction most writers in this room have never used on purpose.**'],
  ['Jad', 'Four of us have never written one at all.'],
  ['Mrs Khoury', '⚠ **Which is the honest state of the room and is worth saying.** **Inversion is read constantly and written almost never**, and the reason is that it feels theatrical when you write it and is invisible when you read it.'],
  ['Mr Zahreddine', 'I avoid them in opinions deliberately.'],
  ['Mrs Khoury', 'Say why.'],
  ['Mr Zahreddine', '⚠ **Because _at no point was the log produced_ reads as an accusation and _the log was not produced at any stage_ does not.** **In an opinion I do not want the emphasis** — **I want the fact to sit there and be checkable, and the reader can decide how annoyed to be.**'],
  ['Mrs Rizk', 'So there is a third option: neither.'],
  ['Mrs Oueidat', '⚠ **There is always a third option and it is the plain order, and in most documents it wins.** **The question this cycle asks is not _which device_ but _does this sentence need one_** — **and four sentences in five do not.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that I have been using the it-cleft for emphasis for years because I did not know the other one existed.** **I have been telling readers there was an argument about a date about once a week.**'],
]));
out.push(sp());
out.push(box('Language box – the cleft, the inversion, and neither', [
  '**The it-cleft contrasts.** _It was not until the fourth Saturday that anybody asked._ ⚠ **It hands the reader an alternative — _not the first, not the second_ — and a reader who has been handed an alternative checks it.** **Use it when there genuinely is a dispute about which one.**',
  '**The inversion emphasises without contrasting.** _Not until the fourth Saturday did anybody ask._ ⚠ **It is the only construction in English that does this**, and it is read constantly and written almost never, because it feels theatrical to write and is invisible to read.',
  '**The forms, and they are mechanical.** _Not until X **did** Y_ · _At no point **was** Z_ · _Only when X **did** Y_ · _Nowhere in the file **is** there_. ⚠ **The auxiliary comes before the subject and you supply _do_ if there is not one already.** **That is the whole of the grammar and it takes four minutes to learn.**',
  '**And the cost of the inversion.** ⚠ _At no point was the log produced_ **reads as an accusation**; _the log was not produced at any stage_ **does not.** **In an opinion that a third party will rely on, you may not want the emphasis at all** — **the fact can sit there and be checkable, and the reader decides how annoyed to be.**',
  '**The third option, which wins in most documents.** ⚠ **The plain order.** **The question is not _which device_ but _does this sentence need one_**, and four sentences in five do not. **A page with one marked order in it is emphatic; a page with four has no emphasis anywhere.**',
  '**How to decide, in one question.** ⚠ **Is somebody arguing about which one?** **If yes, the cleft. If no and you need the emphasis, the inversion. If no and you do not, the plain order** — **and write the plain order first and see whether you miss anything.**',
  '**Pronunciation.** 🔊 **Track 5.8** **Say the inversion flat, at the speed of the sentences round it.** ⚠ _Not until the fourth Saturday did anybody **ask**._ **Said with a lift on _not_ it is theatre and the room hears a complaint.** **Said flat it is a sentence**, and the emphasis is doing its work in the grammar where nobody has to notice it.',
  '**Practise:** Say it as a cleft, then as an inversion, then plainly, and choose. **1** where somebody is arguing about which  **2** where nobody is  **3** where the emphasis would read as an accusation  **4** with _at no point_  **5** one where the plain order wins — and say what you lose',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the fact and the setting from the card. B produces all three versions — **cleft, inversion, plain** — and then **chooses one and gives the reason in a single clause.** ⚠ **Two rows on each card are settings in which the plain order wins**, and B must say so rather than choosing a device. Change cards.'));
out.push(table(['Card A – the fact, and who will read it', 'Card B – the fact, and who will read it'], [
  ['_Nobody asked for the service log for eleven weeks._ → **a letter to the insurer**', '_The notice went out in two forms._ → **a note to the drafting office**'],
  ['_⚠ The second sample was not taken in ten cases._ → **a note to the registrars**', '_⚠ Eleven dispensings were made against superseded sheets._ → **a report for the inspection file**'],
  ['_The staggered window was considered and discarded._ → **a letter to two parents who complained**', '_The key is held by a department that does not work weekends._ → **a note to the area manager**'],
  ['_⚠ The mill certificates were not in the site file._ → **an opinion a court may read**', '_⚠ The eight have no reason recorded._ → **a paper for a governance committee**'],
  ['_The referral book was in the vehicle on four Saturdays._ → **a proposal to the health office**', '_The 2019 file holds the costing._ → **a note to the standards office**'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each chosen version and the reason, in one clause. ⚠ **Rows 2 and 4 on both cards are the plain-order settings**, and the reason is the same in all four: **the reader is the person who did not do it.** **An inversion addressed to the person responsible is an accusation and a cleft tells them there is an argument** — **and all four are documents in which the writer wants a fact checked and not a case made.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **one sentence of your own that carries emphasis** and write it three ways: **cleft, inversion, plain.** ⚠ **Then name your reader and choose, and write the reason as one clause beginning _because_.** **If your reason is _because it sounds better_, you have not chosen** — **go back and name what the reader would do differently on each version.**'));
out.push(p('**b**  Swap. Your partner reads your three versions and says **which one a reader would answer, and what they would say.** ⚠ **The cleft usually produces a question about which; the inversion produces a defence; the plain order produces the information you asked for.** **Check that against your own three.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury put two sentences with the same emphasis side by side. It was not until the fourth Saturday that anybody asked says somebody has been arguing about when; not until the fourth Saturday did anybody ask says nothing of the kind, and is a fact with the time in front of it. Mr Tayara said they look like the same sentence, and they do until you put them in a document and watch what comes back: she changed one sentence in a standing instruction last year, cleft to inversion and nothing else, and the queries about the date stopped. Mrs Tarabishi asked whether they stopped entirely, and there were eleven queries in the first quarter and two in the second, and the only thing that changed was the sentence — and she is not claiming the sentence did all of it, only that it is the only change anybody can name. Dr Qabbani asked why a cleft would produce queries, and Mrs Oueidat said because it-clefts contrast: it was not until the fourth invites the reader to supply the alternative, not the first, not the second, and a reader who has been handed an alternative starts checking it. Mr Shihabi asked whether the inversion does that, and the inversion emphasises without contrasting, which is the only thing in English grammar that does — and it is the one construction most writers in the room have never used on purpose. Mr Attar said four of them have never written one at all, and Mrs Khoury said that is the honest state of the room: inversion is read constantly and written almost never, because it feels theatrical when you write it and is invisible when you read it. Mr Zahreddine said he avoids them in opinions deliberately, because at no point was the log produced reads as an accusation and the log was not produced at any stage does not — in an opinion he does not want the emphasis, he wants the fact to sit there and be checkable, and the reader can decide how annoyed to be. Mrs Rizk said so there is a third option, neither, and Mrs Oueidat said there is always a third option and it is the plain order, and in most documents it wins: the question is not which device but does this sentence need one, and four sentences in five do not. And Mrs Ajouz said the thing she will take away is that she has been using the it-cleft for emphasis for years because she did not know the other one existed, and has been telling readers there was an argument about a date about once a week._'));
out.push(p('**Listener task:** write the one-clause reason for your own choice, beginning _because_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the standing instruction Mrs Khoury amended, with her covering note. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _to the four district offices_ · _standing instruction 9, second paragraph_ · **14 January**',
  '**The second paragraph of standing instruction 9 now reads: _Not until the vehicle has returned is the book to be signed off._** **It read: _It is not until the vehicle has returned that the book is to be signed off._** **Nothing else in the instruction has changed and the requirement is identical.**',
  '**Why the amendment was made.** **The old sentence produced eleven queries in the first quarter of last year, all of them about when the book may be signed.** **Nine of the eleven asked whether an exception existed for a vehicle returning after six.** **No exception exists and none has ever existed.**',
  '**Where the nine queries came from.** ⚠ **An it-cleft tells a reader that there is a question about which one, and the reader supplies the alternatives.** **_It is not until the vehicle has returned_ offers _but perhaps in some other case_, and nine clerks went looking for the other case.** **The amended sentence offers nothing to look for.** **The two queries that were not about an exception asked who signs when the vehicle does not return at all, which the paragraph has never covered and still does not.**',
  '**The figures.** **Eleven queries in the first quarter, two in the second, one in the third and two in the fourth.** **The eleven are counted from the query log, which records the district, the date and the question in one line.** ⚠ **I am not claiming the sentence accounts for all of that: the quarters were not comparable and two of the districts changed clerks.** **I am claiming that the amendment is the only change anybody has identified and that the two queries since have both been about something else.**',
  '**What I did not do, and would not.** **I did not write _at no point may the book be signed before the vehicle returns_.** **That is the same grammar and it reads as though somebody had been caught doing it**, and nobody has. **An instruction that accuses its reader of a thing they have not done is answered more slowly, in my experience, than one that does not.**',
  '**What the districts are asked to do.** **Nothing.** **The amended paragraph is already in the circulated version of the fourteenth and the old one is withdrawn.** **Clerks who have the old version may continue to work to it, the requirement being unchanged.** **The circulated version carries the date of the fourteenth in its footer, so a clerk holding two copies can tell which is current.**',
  '**One thing about the original, which belongs to this office.** ⚠ **The it-cleft was in the instruction because the paragraph was drafted in 1998 out of two conflicting memoranda, one of which did allow an exception.** **The exception was removed and the sentence that argued with it was not.** **I have asked the registry for the 1998 file and expect it this month.**',
]));
out.push(item('1', 'What exactly was changed, and what does she say about the requirement?'));
out.push(item('2', 'What did the nine clerks go looking for, and why does she say the old sentence sent them?'));
out.push(item('3', 'What third version did she reject, and for what reason?'));
out.push(writers([
  'A note on a chosen construction: **the new sentence and the old one, both quoted** → **what the old one produced, with a count** → **why that construction produced it** → **the figures, with the refusal** → **the version you rejected and why** → **what the readers are asked to do** → **and where the old construction came from.**',
  '⚠ **Quote both versions and let the reader see the difference.** **A reader who is told that a sentence was _clarified_ learns nothing and cannot check you** — **and this reader is being asked to accept that one word order was worth a circulated amendment.**',
  '**Name what the construction does, in the reader\'s terms and not in grammar.** ⚠ _An it-cleft tells a reader that there is a question about which one, and the reader supplies the alternatives._ **Nobody outside a classroom will accept _cleft_ as a reason**, and everybody will accept _nine clerks went looking for the other case_.',
  '**Say which version you rejected.** ⚠ _I did not write "at no point may the book be signed…"._ **A rejected version is how a reader knows a choice was made**, and the reason — **that it reads as though somebody had been caught** — **is the whole of this cycle in one clause.**',
  '⚠ And **say where the old construction came from, if you can find out.** _The paragraph was drafted in 1998 out of two conflicting memoranda, one of which did allow an exception._ **A sentence that argues with something is usually arguing with something real that has since gone**, and finding it turns a correction into an explanation.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on a construction you have chosen (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ now reads: _"______________."_** **It read: _"______________."_** **Nothing else has changed and ______________ is identical.**   **Why the amendment was made.** **The old sentence produced ______________, all of them about ______________.** **______________ of the ______________ asked whether ______________.** **______________ exists and ______________.**   **Where they came from.** ⚠ **______________ tells a reader that ______________, and the reader supplies ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions quoted, old and new',
  'What the construction does, said in the reader\'s terms',
  'A count, and the causal claim refused',
  'The version you rejected, with its reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their two quoted versions**, and the room says what a reader would go looking for after each.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: both versions quoted, the count, the explanation in the reader\'s terms, the figures with the refusal, the rejected version, the ask, and where the old construction came from.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both versions quoted, the construction explained in the reader\'s terms, a count with the causal claim refused, and the rejected version given.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads the same fact as a cleft, as an inversion and plainly, in that order, and the room says what each one would be answered with.** ⚠ **A question, a defence, and the information.** **Then they read the plain version again and the room says what was lost.** **Usually nothing** — and that is the finding. Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **about once a week, for years.**'));
out.push(hw('Take **one sentence of your own with a marked order in it** and write the plain version. ⚠ **Then show both to the person it was written for and ask which they would answer.** **If they say the plain one, the marked order was doing nothing and has been costing you a reply.** **Bring both versions and what they said.** **5.5 is emphasis across three sentences**, where the rule is that you may not use the same device twice.'));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Emphasis that lasts three sentences'));
out.push(p('**Function:** keeping emphasis across three sentences without using the device twice   ·   **Grammar:** emphasis as a property of the paragraph · the short sentence after two long ones   ·   **Pronunciation:** the paragraph read at one speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out a paragraph of your own of three sentences or more and then say which sentence you wanted the reader to keep.** ⚠ **The room says which one they did keep.** Your teacher writes the two numbers side by side. **They agree in about a third of cases**, and the third where they agree is not the third with the best sentences.'));
out.push(board('Three sentences, three marked orders, and nothing emphasised at all.', 'at all.'));
out.push(p('**b**  Which of these emphasises without a marked order? **1** _It was the key that stopped it._  **2** _What stopped it was the key._  **3** _One thing stopped it. A key._  **4** _Not until the key was released did anything move._  **5** _Everything else was in place; the key was not._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about three marked orders in one paragraph?   **A** they make it emphatic   **B** **they cancel each other, and a paragraph with three emphases has none** — the reader stops registering the device   **C** they are a matter of taste'));
out.push(p('**b**  Listen again. **1** What did Mr Tayara find when he counted the marked orders in his own letter?   **2** What does Mrs Khoury say the short sentence after two long ones does, and what does it cost?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  Three emphases and none', [
  ['Ms Huda', 'Mr Tayara counted the marked orders in a letter he had already sent. How many?'],
  ['Mr Tayara', '⚠ **Nine, in two pages.** **Four it-clefts, three what-clefts and two inversions.** **I had thought of it as a plain letter.**'],
  ['Mrs Tarabishi', 'And what is wrong with nine?'],
  ['Mrs Khoury', '⚠ **Nothing is wrong with any one of them and the nine together emphasise nothing.** **A reader registers a marked order the first time and stops registering it by the third.** **After that it is the writer\'s ordinary voice.**'],
  ['Dr Qabbani', 'So there is a budget.'],
  ['Mrs Khoury', '⚠ **One a paragraph, and one a page is better.** **The budget is not a rule about taste, it is about how attention works**: **the device works by being unexpected and there is nothing left to be unexpected about after the third one.**'],
  ['Mr Shihabi', 'Then how do you emphasise the other sentences?'],
  ['Mrs Khoury', '⚠ **With position, which costs nothing and never wears out.** **Last word of the sentence, last sentence of the paragraph.** **And with length: two long sentences and then a short one, and the short one is the one they keep.**'],
  ['Mrs Ajouz', 'Why does the short one work?'],
  ['Mrs Khoury', '⚠ **Because it changes the rhythm and the reader notices the change and not the sentence.** **It costs one thing and students should be told what: a short sentence has no room for a qualification**, so you may only use it where you are prepared to say something flatly.'],
  ['Mrs Oueidat', 'Which in my work is about one sentence in forty.'],
  ['Mr Zahreddine', '⚠ **And in mine it is the finding, which is exactly one sentence per opinion.** _The bolts measure M12 against a specified M16._ **Everything round it is forty words long and that one is nine.**'],
  ['Jad', 'So the emphasis is in the shape of the paragraph, not in any sentence.'],
  ['Mrs Khoury', '⚠ **Yes, and that is the thing this unit is for.** **B2 taught you to emphasise a sentence.** **The question at C1 is what a paragraph emphasises, and a paragraph can only emphasise one thing.**'],
  ['Mr Tayara', 'One thing. Not two.'],
  ['Mrs Oueidat', '⚠ **Two is none.** **If your paragraph has two points to make, it is two paragraphs**, and the amount of work that saves is more than anything else in this unit.'],
  ['Mrs Rizk', 'And how do you decide which one thing, before you write it?'],
  ['Mrs Khoury', '⚠ **You write the last sentence first.** **If you cannot write it, the paragraph does not yet know what it is for**, and no amount of reordering will rescue it.'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is that I wrote nine of them without noticing.** **I was emphasising in every sentence because I thought every sentence was important**, which is the same as thinking none of them is.'],
]));
out.push(sp());
out.push(box('Language box – emphasis as a property of the paragraph', [
  '**The budget.** ⚠ **One marked order a paragraph, and one a page is better.** **A device works by being unexpected**, and after the third one in a page there is nothing left to be unexpected about: **the reader has stopped registering it and it has become the writer\'s ordinary voice.**',
  '**The free devices, which never wear out.** ⚠ **Position: the last word of the sentence and the last sentence of the paragraph.** **Length: two long sentences and then a short one.** **Neither costs the reader anything and neither can be overused**, because the reader is not aware of them at all.',
  '**What the short sentence costs.** ⚠ **A short sentence has no room for a qualification**, so use it only where you are prepared to say something flatly. _The bolts measure M12 against a specified M16._ **Nine words among forty-word sentences, and it is the one the reader keeps.**',
  '**One thing to a paragraph.** ⚠ **A paragraph can emphasise one thing and two is none.** **If your paragraph has two points to make, it is two paragraphs** — **and that single decision does more for a page than every construction in this unit put together.**',
  '**How to check it, and it takes a minute.** ⚠ **Read your paragraph and underline the last word of each sentence and the last sentence of the paragraph.** **If those words and that sentence are the ones you would want quoted, the paragraph is emphasising what you meant.** **If not, nothing else you do to it will help.**',
  '**And the commonest fault at this level, which is not a fault of grammar.** ⚠ **A writer emphasises in every sentence because every sentence feels important while they are writing it.** **It is the same as emphasising nothing**, and the only repair is to decide, before the paragraph is written, which one sentence it exists for.',
  '**Pronunciation.** 🔊 **Track 5.10** **Read a paragraph of three sentences at one speed, with no extra loudness anywhere.** ⚠ **The emphasis should still land**, because it is in the positions and not in the voice. **If you have to push the voice to make it land, the paragraph is not emphasising it** — **and your reader has no voice at all.**',
  '**Practise:** Emphasise one thing across three sentences, using one device at most. **1** with position only  **2** with two long sentences and a short one  **3** with one marked order and nothing else  **4** where the paragraph has two points — so split it  **5** one where nothing should be emphasised — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the three-sentence paragraph from the card. B says **what the paragraph emphasises and by what means**, and then **removes one device and says what is lost.** ⚠ **Two paragraphs on each card emphasise two things and have to be split.** **B must say where the split goes.** Change cards.'));
out.push(table(['Card A – three sentences', 'Card B – three sentences'], [
  ['_The eleven queries all asked about the date. Nine of them asked about an exception. No exception exists._', '_The log was never produced. Nobody asked for it for eleven weeks. It was in the insurer\'s own cabinet._'],
  ['_⚠ The form period lost ten minutes in September. Individual conversations fell from nineteen to eleven. The staggered window would have cost two hundred and ten hours._', '_⚠ Eleven dispensings were against superseded sheets. Seven involved a dose change. The quarantine cupboard was cleared in only two of the six months._'],
  ['_It was the sentence that changed, and nothing else. The queries fell from eleven to two. Two districts changed clerks in the same quarter._', '_Nineteen were turned away. Nine of them arrived after the rota ended. The rota is the health office\'s own._'],
  ['_⚠ The appeal took fourteen months. The published target is eight. The four lines that decided it dispose of eleven pages._', '_⚠ Forty-one admissions, thirty-one with a second sample. Seven of eleven reached a diagnosis. Ten had no second sample at all._'],
  ['_Nobody disputes the measurements. What is disputed is what follows from them. Nothing follows about the frame._', '_The key is held by another department. That department does not work weekends. The count is on a Sunday._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what each paragraph emphasises, and the two that have to be split. ⚠ **Rows 2 and 4 on both cards carry two points each**, and the split is always at the same place: **where the subject matter changes.** **Row 2 on Card A is about the form period and then about the staggered window**, which is a different decision; **row 4 on Card B is about what the samples found and then about what was never taken**, which is a different question.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your paragraph from Stage 1** and underline **the last word of every sentence and the last sentence of the paragraph.** ⚠ **Write those words out on their own and read them.** **If they are the paragraph, it works.** **If they are not, rewrite the paragraph so that they are** — **and do it by moving words, not by adding a device.**'));
out.push(p('**b**  Swap. Your partner counts **the marked orders in your paragraph** and says the number aloud. ⚠ **Then they remove all but one and read it back.** **Most people hear no loss at all**, and the ones who do hear a loss have usually lost the only device that was doing anything.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara counted the marked orders in a letter he had already sent and found nine in two pages: four it-clefts, three what-clefts and two inversions, in what he had thought of as a plain letter. Mrs Tarabishi asked what is wrong with nine, and Mrs Khoury said nothing is wrong with any one of them and the nine together emphasise nothing — a reader registers a marked order the first time and stops registering it by the third, and after that it is the writer\'s ordinary voice. Dr Qabbani said so there is a budget, and one a paragraph, and one a page is better: the budget is not a rule about taste but about how attention works, because the device works by being unexpected and there is nothing left to be unexpected about after the third. Mr Shihabi asked how you emphasise the other sentences, and Mrs Khoury said with position, which costs nothing and never wears out — the last word of the sentence and the last sentence of the paragraph — and with length, two long sentences and then a short one, and the short one is the one they keep. Mrs Ajouz asked why the short one works, and because it changes the rhythm and the reader notices the change and not the sentence; and it costs one thing, which students should be told: a short sentence has no room for a qualification, so it may only be used where the writer is prepared to say something flatly. Mrs Oueidat said that in her work is about one sentence in forty, and Mr Zahreddine said in his it is the finding, exactly one sentence per opinion — the bolts measure M12 against a specified M16 — with everything round it forty words long and that one nine. Mr Attar said so the emphasis is in the shape of the paragraph and not in any sentence, and Mrs Khoury said yes, and that is the thing this unit is for: B2 taught you to emphasise a sentence, and the question at C1 is what a paragraph emphasises, and a paragraph can only emphasise one thing. Mr Tayara said one thing, not two, and Mrs Oueidat said two is none — if your paragraph has two points to make it is two paragraphs, and the amount of work that saves is more than anything else in the unit. Mrs Rizk asked how you decide which one thing before you write it, and Mrs Khoury said you write the last sentence first: if you cannot write it, the paragraph does not yet know what it is for, and no amount of reordering will rescue it. And Mr Tayara said the thing he will take away is that he wrote nine of them without noticing: he was emphasising in every sentence because he thought every sentence was important, which is the same as thinking none of them is._'));
out.push(p('**Listener task:** write the underlined words from your own paragraph, on their own line.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mr Tayara rewrote, with one marked order in it. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _to the governors_ · _the form period and the staggered window_ · **16 January**',
  '**The ten minutes went back to the form period on 6 January and the register now closes at twenty-five past eight.** **In the three weeks since, form tutors have recorded fourteen, sixteen and fifteen individual conversations against an autumn average of eleven.** **It is too early to mean anything.**',
  '**The autumn figure is the one worth the governors\' attention.** **Conversations ran at about nineteen a week before September and at about eleven from October to December, and the eleven held for nine consecutive weeks.** **Nine weeks is long enough to rule out a half-term effect and short enough that nothing else in the school changed.** **The figures are weekly totals across six tutor groups and are not adjusted for absence, which ran at about nine per cent that term.** **The ten minutes are the only candidate anybody has produced.**',
  '**What I am not able to tell the governors is what the eight missing conversations were about.** **The sheet records that a conversation of more than about two minutes took place and nothing else, which was decided deliberately in 2019 and which I would decide the same way again.** **Not until a tutor volunteers it does this office learn what any of them concerned.**',
  '**The staggered arrival window is a separate question and I am raising it separately.** **It needs a second member of staff at the gate from ten to eight until twenty past, five mornings a week, which is about two hundred and ten hours a year.** **The school has not got the hours and cannot buy them this term.**',
  '**On the two letters of September.** **Two parents asked why the window had not been considered, and it had been, and I had not written the discard down.** **The discard is now in the January letter to parents and in the minute of the December meeting.** **Both parents have had a copy of that minute and neither has written again.** **That is the whole of what those two letters cost and it is more than it sounds.**',
  '**What the governors are asked for.** **Nothing before the summer.** **The post would be about a quarter of a teaching assistant and the summer is when the establishment is set.** **If it is found, the window is what I shall propose, and the figures above will be eight months old and will need taking again.**',
  '**One thing about the figure itself, which the governors should have from me rather than from a tutor.** **The count is kept by the tutors and I do not check it.** **A tutor who has had a bad week can round down and nobody would know**, and I would rather have a figure the tutors own than one they are audited on. **The sheet has a line for the week and a line for the group and nothing else on it at all.**',
]));
out.push(item('1', 'What is the one marked order in the letter, and what does it emphasise?'));
out.push(item('2', 'Where does a short sentence follow two long ones, and what does the short one say?'));
out.push(item('3', 'What does he say about the count, and what does he prefer and why?'));
out.push(writers([
  'A letter whose emphasis lasts: **one marked order in the whole document, and you should be able to say where** → **the rest of the emphasis in positions** → **two long sentences and then a short one, where you are prepared to be flat** → **one thing to a paragraph, and a new paragraph where the subject changes** → **and a last sentence worth being the last.**',
  '⚠ **Spend the marked order on the sentence the document exists for.** _Not until a tutor volunteers it does this office learn what any of them concerned._ **One inversion in eight paragraphs, and it is on the limitation** — **which is the sentence a governor will quote back.**',
  '**Let position do the rest.** ⚠ _…and the eleven held for nine consecutive weeks._ · _The ten minutes are the only candidate anybody has produced._ **Both sentences end where they should and neither has a device in it**, and a reader will keep both without noticing why.',
  '**Put the short sentence where you are prepared to be flat.** ⚠ _It is too early to mean anything._ **Six words after two sentences of twenty-six and twenty-two**, and it closes a paragraph that could otherwise have been read as a claim.',
  '⚠ And **start a new paragraph where the subject changes, even when the two are related.** _The staggered arrival window is a separate question and I am raising it separately._ **A paragraph that holds two subjects emphasises neither** — **and the sentence that announces the split costs nine words and saves the reader the work of finding it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter with one marked order in it (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ on ______________ and ______________ now ______________.** **In the ______________ since, ______________ have recorded ______________ against ______________.** **It is too early to mean anything.**   **The ______________ figure is the one worth ______________.** **______________ ran at about ______________ before ______________ and at about ______________ from ______________, and the ______________ held for ______________.** **______________ is long enough to rule out ______________ and short enough that ______________.** **______________ are the only candidate anybody has produced.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One marked order in the whole document, and you can say where',
  'Two long sentences and then a short one, at least once',
  'One subject to a paragraph',
  'Every sentence ending on the word you want kept',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the last sentence of each of their paragraphs**, and the room says what the document is about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: one marked order, position doing the rest, a short sentence after two long ones, one subject to a paragraph, and a last sentence worth being last.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one marked order in the document, one subject to a paragraph, a short sentence used where flatness is intended, and a last sentence worth being last.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads only the last sentence of each of their paragraphs, in order, and the room says what the document was about.** ⚠ **Then they read the first sentences in the same way.** **The last sentences almost always give a better account of the document than the first ones do**, and the students who find the opposite have written their conclusions at the tops of paragraphs. Then the sentence the cycle ends on, which is Mr Tayara\'s: **nine of them, without noticing.**'));
out.push(hw('Take **two pages of your own writing** and count **every marked order in them.** ⚠ **Write the number down before you do anything else, because the number is the lesson.** **Then keep one per page and remove the rest, moving words where you have to.** **Read both versions aloud and note anything you can honestly say was lost.** **Bring the count, the two versions and the list of losses.** **5.6 hands your paragraph to somebody who disagrees with it**, and the test is whether your emphasis survives their voice.'));

// ===================== 5.6 =====================
out.push(h2('5.6  The paragraph an opponent reads aloud'));
out.push(p('**Function:** writing the paragraph whose emphasis survives being read aloud by somebody who disagrees with it   ·   **Grammar:** emphasis that is in the facts and not in the voice   ·   **Pronunciation:** reading somebody else\'s paragraph against it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence of yours that somebody has read aloud back to you in a tone you did not intend.** ⚠ **Say the sentence and then say the tone.** Your teacher writes the tones on the board — _sarcastic_, _bored_, _aggrieved_, _amused_. **Most classes produce four or five, and almost every sentence named contains an adjective.**'));
out.push(board('The present arrangement is clearly unsatisfactory and cannot continue.', 'continue.'));
out.push(p('**b**  Which of these would survive being read aloud by somebody who disagrees with it? **1** _The arrangement is clearly unsatisfactory._  **2** _Nineteen were turned away in six months and two presented at the hospital within a fortnight._  **3** _It is surely obvious that something must be done._  **4** _We would respectfully suggest that the position be reviewed._  **5** _The rota ends at nine, and nine of the nineteen arrived after nine._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the test is?   **A** whether the paragraph is polite   **B** **whether an opponent reading it aloud can put the stress anywhere that helps them** — and a paragraph whose emphasis is in its figures gives them nowhere   **C** whether the facts are correct'));
out.push(p('**b**  Listen again. **1** What happened when Mrs Ajouz\'s paragraph was read aloud at a meeting?   **2** What does Mr Zahreddine say about adjectives in a document that will be read against you?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  Read against you', [
  ['Ms Huda', 'Mrs Ajouz — the paragraph that was read aloud at a meeting. What happened?'],
  ['Mrs Ajouz', '⚠ **A colleague read it out to show the committee it was unreasonable, and it worked.** **He did not change a word.** **He put the stress on _clearly_ and on _simply_ and the room laughed.**'],
  ['Mrs Tarabishi', 'That is not fair reading.'],
  ['Mrs Ajouz', '⚠ **It is not, and it is what happens, and I had put the words there.** **Every word he leaned on was one I had added to make it stronger.**'],
  ['Mrs Khoury', 'That is the finding and it should go on the board. ⚠ **The words you add for emphasis are the handles an opponent uses.**'],
  ['Dr Qabbani', 'So you write it flat.'],
  ['Mr Zahreddine', '⚠ **You write it with figures in it, which is not the same thing as flat.** **_Nineteen were turned away and two presented within a fortnight_ cannot be read sarcastically.** **There is nothing in it to lean on** — **try it and the voice has nowhere to go.**'],
  ['Mr Shihabi', 'Adjectives are the handles, then.'],
  ['Mr Zahreddine', '⚠ **Adjectives and the little intensifiers: _clearly_, _simply_, _surely_, _of course_.** **In an opinion I have a rule and it is absolute: no adjective that could be replaced by a measurement.**'],
  ['Mrs Oueidat', 'And in our notices, no _respectfully_. ⚠ **A sarcastic reading of _we would respectfully suggest_ takes about a second and a half and there is no defence against it.**'],
  ['Jad', 'But some things cannot be measured.'],
  ['Mrs Khoury', '⚠ **Then say what you have counted and let the reader supply the adjective.** **A reader who reaches _unsatisfactory_ on their own will defend it** — **and they cannot be made to laugh at a word they supplied themselves.**'],
  ['Mr Tayara', 'Does the same apply to the emphasis devices?'],
  ['Mrs Khoury', '⚠ **It applies more.** **An it-cleft read aloud by an opponent becomes a sneer in one syllable**: _it was the key._ **The inversion is the only one that survives, because the emphasis is in the word order and a reader cannot take word order out.**'],
  ['Mrs Rizk', 'So the test is simply to have somebody read it against you.'],
  ['Mrs Ajouz', '⚠ **It is, and nobody ever does it, and it takes ninety seconds.** **I now ask the person in my office who disagrees with me most.**'],
  ['Mr Shihabi', 'And if they will not do it?'],
  ['Mrs Oueidat', '⚠ **Read it aloud yourself, in the voice of the person you are most afraid of.** **It is less reliable and it is not nothing** — **you will find two of the four handles, which is two more than you would find silently.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that he did not misquote me once.** **Everything he used against me I had put there on purpose, to help.**'],
]));
out.push(sp());
out.push(box('Language box – the paragraph that survives a hostile voice', [
  '**The finding, and it is the whole cycle.** ⚠ **The words you add for emphasis are the handles an opponent uses.** **_Clearly_, _simply_, _surely_, _of course_, _obviously_ and every adjective of judgement** — **each one is a place where a hostile voice can lean and the room will laugh.**',
  '**What survives: a figure.** ⚠ _Nineteen were turned away in six months and two presented at the hospital within a fortnight._ **Read it sarcastically and the voice has nowhere to go.** **A sentence made of counts cannot be performed against its writer**, which is the only protection there is.',
  '**The rule worth taking from an engineer.** ⚠ **No adjective that could be replaced by a measurement.** _Substantial_ → **a figure.** _Prolonged_ → **a duration.** _Repeated_ → **a count.** **And where there is no measurement, say what you counted and let the reader supply the adjective** — **a reader cannot be made to laugh at a word they supplied themselves.**',
  '**The devices are handles too, and one is not.** ⚠ **An it-cleft read by an opponent becomes a sneer in one syllable**: _it was the **key**._ **The _what_-cleft goes the same way.** **The inversion survives, because the emphasis is in the word order and a reader cannot take word order out of a sentence by reading it differently.**',
  '**_Respectfully_ and its family.** ⚠ _We would respectfully suggest that the position be reviewed._ **A sarcastic reading takes about a second and a half and there is no defence against it**, because the word is doing no work that a reader would miss.',
  '**The test, which takes ninety seconds and which almost nobody runs.** ⚠ **Hand the paragraph to the person who disagrees with you most and ask them to read it aloud to you.** **Watch where they put the stress.** **Every place they lean is a word you added**, and you will recognise every one of them.',
  '**Pronunciation.** 🔊 **Track 5.12** **Read somebody else\'s paragraph against them, twice.** ⚠ **First find the adjectives and lean on them; then try the same thing on a paragraph made of figures and hear it fail.** **The second attempt is the lesson** — **a hostile voice with nothing to lean on reads like a reading, and the facts arrive unopposed.**',
  '**Practise:** Make a sentence that cannot be read against you. **1** replacing an adjective with a count  **2** replacing an intensifier with a date  **3** where no measurement exists — so say what you counted  **4** with an inversion rather than a cleft  **5** one where you keep the adjective on purpose — and say what you are accepting',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card **as an opponent would**, leaning wherever the sentence allows. B says **which word was leaned on and what would replace it.** ⚠ **Two sentences on each card cannot be read against their writer at all.** **B must say so, and say why.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The present arrangement is clearly unsatisfactory and cannot continue._', '_It is surely obvious that the inspection ought to be required._'],
  ['_⚠ Nine of the nineteen arrived after the rota ended at nine._', '_⚠ Eleven of the hundred and four were dispensed against a superseded sheet._'],
  ['_We would respectfully suggest that the position be reviewed._', '_The delay has been both prolonged and entirely avoidable._'],
  ['_⚠ Not until the fourth Saturday did anybody ask for the book._', '_⚠ The file was opened on 27 February and the objection period closed on 2 March._'],
  ['_It was the key, of course, that stopped the whole thing._', '_What is simply unacceptable is the absence of any record at all._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the word leaned on in each, and its replacement. ⚠ **Rows 2 and 4 on both cards survive.** **Rows 2 are made entirely of counts and rows 4 are an inversion and a pair of dates** — and the inversion is the one that surprises a class, **because the emphasis is in the word order and a hostile reader cannot take word order out.** **Every other row offers at least one word to lean on, and in each case the writer added it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a paragraph of your own** and mark **every adjective of judgement and every intensifier.** ⚠ **Replace each one with a count, a date or a duration, or delete it.** **Where no measurement exists, write what you counted instead and stop** — **and notice how often the sentence is better with nothing at all in the place where the word was.**'));
out.push(p('**b**  Swap. Your partner reads your original aloud **against you**, leaning wherever they can, and then reads the repaired version the same way. ⚠ **Count the places they leaned in each.** **In most pairs the first version offers four or five and the second offers none**, and the person reading is usually surprised by how little there is to work with.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz had a paragraph read aloud at a meeting by a colleague who wanted to show the committee it was unreasonable, and it worked. He did not change a word: he put the stress on clearly and on simply and the room laughed. Mrs Tarabishi said that is not fair reading, and it is not, and it is what happens, and she had put the words there — every word he leaned on was one she had added to make the paragraph stronger. Mrs Khoury said that is the finding and should go on the board: the words you add for emphasis are the handles an opponent uses. Dr Qabbani said so you write it flat, and Mr Zahreddine said you write it with figures in it, which is not the same thing as flat — nineteen were turned away and two presented within a fortnight cannot be read sarcastically, because there is nothing in it to lean on, and if you try it the voice has nowhere to go. Mr Shihabi said adjectives are the handles then, and adjectives and the little intensifiers: clearly, simply, surely, of course. In an opinion Mr Zahreddine has an absolute rule, which is no adjective that could be replaced by a measurement, and Mrs Oueidat said in their notices there is no respectfully, because a sarcastic reading of we would respectfully suggest takes about a second and a half and there is no defence against it. Mr Attar said some things cannot be measured, and Mrs Khoury said then say what you have counted and let the reader supply the adjective: a reader who reaches unsatisfactory on their own will defend it, and they cannot be made to laugh at a word they supplied themselves. Mr Tayara asked whether the same applies to the emphasis devices, and it applies more — an it-cleft read aloud by an opponent becomes a sneer in one syllable, and the inversion is the only one that survives, because the emphasis is in the word order and a reader cannot take word order out. Mrs Rizk said so the test is simply to have somebody read it against you, and it is, and nobody ever does it, and it takes ninety seconds; Mrs Ajouz now asks the person in her office who disagrees with her most. Mr Shihabi asked what to do if they will not, and Mrs Oueidat said read it aloud yourself in the voice of the person you are most afraid of, which is less reliable and is not nothing: you will find two of the four handles, which is two more than you would find silently. And the thing she will take away is that he did not misquote her once: everything he used against her she had put there on purpose, to help._'));
out.push(p('**Listener task:** write the words your partner leaned on, and what you replaced them with.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper Mrs Ajouz rewrote after the meeting. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _to the standing committee_ · _the records migration of 2023_ · **18 January**',
  '**Three sets of results from 2023 are not in the system.** **They are the February, March and April sets for the north district, and they were in the old system on 14 May 2023, which is the date of the last export.** **They are not in the new one and no copy has been found.** **The north district is the only one of the four with a separate paper register.**',
  '**The migration ran for five weeks from 19 May to 23 June 2023.** **During those five weeks the north district filed on paper and the paper was entered afterwards by two clerks working from a box.** **The box is the part nobody can now account for.** **The two clerks worked from it for eleven days and signed a transfer sheet at the end of each day, and the eleven sheets are in the file.** **It was signed for on 26 June and it has not been seen since.**',
  '**What is in the system for those three months is twenty-two records against a monthly average of thirty-one for the rest of that year.** **Twenty-two against thirty-one is the whole of the evidence that something is missing**, and it is thin: three months is a small number of months and the district had a vacancy in April. **The vacancy lasted nineteen days and the district filed through the central office throughout it.**',
  '**What I am not saying.** **I am not saying the box was lost through anybody\'s fault, and I have not asked whose it was.** **Two of the three clerks who handled records that summer have left and the third was on secondment for four of the five weeks.** **A question about fault would take a month and would not produce a record.**',
  '**What would produce a record.** **The paper originals, if they exist, are in one of four places: the north district store, the archive at the directorate, the box, or nowhere.** **Three of the four can be searched in a day.** **The fourth place is not searchable and it is in the list because it is the honest answer.** **I have searched neither store and I am asking for authority to search both, not for an inquiry.**',
  '**On the date.** **The migration was signed off as complete on 30 June 2023 and the sign-off records that all districts were reconciled.** **The north district was reconciled on 26 June, which is the day the box was signed for.** **The sign-off is a single sheet with four district names on it and one signature against each.** **Those two dates are in the file and I have put copies behind this paper.**',
  '**And one thing that is mine.** **I was the officer who signed the reconciliation for the north district on the twenty-sixth.** **I signed it on a count of records transferred and not on a count of records received**, and nobody asked me for the second figure until this month.',
]));
out.push(item('1', 'How many adjectives of judgement are there in the paper, and what is used instead?'));
out.push(item('2', 'What does she refuse to ask about, and what reason does she give?'));
out.push(item('3', 'What does she say she signed, and what was the difference between the two counts?'));
out.push(writers([
  'A paper that cannot be read against you: **a first sentence that is a count** → **every adjective of judgement replaced by a measurement or deleted** → **the thin evidence named as thin, with the figure** → **the question you are refusing to ask, with the reason** → **what would actually produce a record** → **the dates, with copies attached** → **and your own part in it.**',
  '⚠ **Say the evidence is thin before anybody else does.** _Twenty-two against thirty-one is the whole of the evidence that something is missing, and it is thin._ **A reader who is told the evidence is thin reads the rest carefully; a reader who works it out stops reading.**',
  '**Replace the adjective with the measurement and let the reader supply the judgement.** ⚠ **There is no _unacceptable_, no _serious_ and no _clearly_ in this paper**, and a committee reading it will arrive at all three on its own — **and will then defend them, because they are theirs.**',
  '**Refuse the question you are not asking, and give the reason in time rather than in tone.** ⚠ _A question about fault would take a month and would not produce a record._ **The reason is a cost and not a courtesy**, which is why it cannot be read as evasion.',
  '⚠ And **put your own part in it last, where the reader will keep it.** _I signed it on a count of records transferred and not on a count of records received._ **The sentence is made of two counts and contains no judgement at all** — **and it is the one sentence in the paper that nobody can read aloud against her.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a paper that cannot be read against you (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ are not ______________.** **They are ______________, and they were ______________ on ______________, which is ______________.** **They are not ______________ and ______________ has been found.**   **______________ ran for ______________ from ______________ to ______________.** **During those ______________, ______________.** **______________ is the part nobody can now account for.**   **What is in ______________ is ______________ against ______________.** ⚠ **______________ is the whole of the evidence that ______________, and it is thin: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No adjective that a measurement could replace',
  'The thin evidence named as thin, with the figure',
  'The question you are not asking, with a reason in cost',
  'Your own part in it, said in counts',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students hand their first paragraph to somebody who disagrees with them, who reads it aloud; the room counts the places the voice could lean.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole paper (260 words or more), to the shape in the writer\'s box: counts instead of adjectives, the thin evidence named, the refused question, what would produce a record, the dates, and your own part last.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no adjective a measurement could replace, the thin evidence named, the refused question with its cost, and the writer\'s own part in counts.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Two students exchange papers and each reads the other\'s first paragraph aloud against its writer.** ⚠ **The room counts the places the voice leaned.** **Then both read their own aloud as they meant it, and the room says whether the emphasis landed in the same place both times.** **Where it did, the paragraph is finished.** Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **everything he used against me I had put there on purpose, to help.**'));
out.push(hw('Take **the paragraph you are least comfortable about** and give it to **the person who disagrees with you most**, and ask them to read it aloud to you. ⚠ **Write down every word they leaned on.** **Then replace each one with a count, a date or a duration, or delete it, and give it back to them.** **Bring both versions and the list of words.** **5.7 is the unit check**, and the mediation is between a paragraph and the summary that lost its emphasis.'));

// ===================== 5.7 =====================
out.push(h2('5.7  Review & Mediate: The summary that lost the emphasis'));
out.push(p('**Function:** mediating between a paragraph and the summary that lost its emphasis   ·   **Recycling:** Unit 5   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 5 · Writing Part 1 · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Not until the fourth Saturday anybody asked where the book was.  **2** At no point the service log was requested.  **3** What stopped the whole thing were the key.  **4** It was the key what stopped it.  **5** Only when the key was released anything moved.  **6** The eight, we have no reason for them, are the group the committee has to decide about.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the paragraph and the two summaries of it that went out in the same week.'));
out.push(box(null, [
  '**ONE PARAGRAPH, TWO SUMMARIES** _(the paragraph is Mrs Ajouz\'s; the summaries are a clerk\'s and a committee member\'s)_',
  '**The paragraph.** _"What is in the system for those three months is twenty-two records against a monthly average of thirty-one for the rest of that year. Twenty-two against thirty-one is the whole of the evidence that something is missing, and it is thin: three months is a small number of months and the district had a vacancy in April."_',
  '**The clerk\'s summary, for the agenda.** _"Records missing from the north district for three months in 2023. Officer requests authority to search."_',
  '**The committee member\'s note to a colleague.** _"She says about nine records a month went missing during the migration. Serious if true."_',
  '⚠ **Neither summary is inaccurate and both have lost the same sentence.**',
  '**And the thing neither of them carried.** **The paragraph says the evidence is thin and says why.** _Three months is a small number of months and the district had a vacancy in April._',
  '**The question for the cycle.** _Which of the three people do you speak to, and what do you say?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the fault is not in either summary. Where is it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  The sentence that did not travel', [
  ['Ms Huda', 'Two summaries of one paragraph. Mr Shihabi — which summariser was careless?'],
  ['Mr Shihabi', 'Neither. ⚠ **Both of them kept the first sentence and dropped the second, and the second is the paragraph.**'],
  ['Mrs Tarabishi', 'Then the summarisers are at fault. They dropped the qualification.'],
  ['Mrs Khoury', '⚠ **They dropped what was last, and what was last was a qualification, and nobody summarises the end of a paragraph.** **A summary is made from beginnings.** **That is not a failing in the summarisers; it is what summarising is.**'],
  ['Dr Qabbani', 'So the writer has to put the limit first.'],
  ['Mrs Oueidat', '⚠ **Not first — in the sentence the summary will take.** **Which is the first one.** _Twenty-two records against a monthly average of thirty-one, on three months with a vacancy in one of them._ **One sentence, and no summary can separate them.**'],
  ['Mrs Ajouz', 'That is 4.5 again. The limit inside the claim.'],
  ['Mrs Khoury', '⚠ **It is exactly 4.5 and the class should notice.** **Unit 4 said the limit must be inside the claim because a quoter will separate them.** **Unit 5 says the same thing about position: a summariser takes your first sentence, so your first sentence has to be able to stand alone.**'],
  ['Mr Tayara', 'But then what is the end of the paragraph for?'],
  ['Mrs Khoury', '⚠ **For the reader who reads the paragraph**, which is most of them. **The end is where the emphasis lives for a reader and the beginning is what survives a summary** — **and those are two different readers and you write for both.**'],
  ['Jad', 'That sounds like having it both ways.'],
  ['Mrs Oueidat', '⚠ **It is having it both ways and it is the job.** **Put the emphasis at the end for the reader and the qualification inside the first claim for the quoter.** **Mrs Ajouz\'s paragraph does the first and not the second.**'],
  ['Mrs Rizk', 'And what do you say to her?'],
  ['Mr Zahreddine', '⚠ **Read her her own second sentence and ask which of her two readers it was for.** **That is the whole mediation.**'],
  ['Mrs Tarabishi', 'And the clerk? He wrote the agenda line.'],
  ['Mrs Khoury', '⚠ **You ask the clerk one question and it is not a correction: _which sentence did you take it from?_** **He will say the first.** **That is the fact Mrs Ajouz needs and she cannot get it from anybody else.**'],
  ['Mr Shihabi', 'And the committee member who wrote _nine a month_?'],
  ['Mrs Oueidat', '⚠ **Nothing at all.** **He arithmetised a figure he was given and that is what a reader does with two numbers.** **The nine a month is in the paragraph** — **it is thirty-one minus twenty-two — and nobody put it there.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is that I wrote the best sentence in the paper second.** **Both of my readers were gone by then.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between a paragraph and a summary', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Here the sentence is her second and the question is nine words.** _Which of your two readers was that sentence for?_ ⚠ **She has two: the one who reads the paragraph and the one who summarises it.** **The end of the paragraph belongs to the first and the first sentence belongs to the second.**',
  '**And the fourth move from 4.7 applies again, because the summariser acts.** ⚠ **Ask the clerk which sentence he took it from.** **It is not a correction and it must not sound like one** — **he will say the first, and that is a fact the writer cannot get from anybody else.**',
  '⚠ **Do not correct the arithmetic reader.** _She says about nine records a month went missing._ **Thirty-one minus twenty-two is nine, the subtraction is in the paragraph, and a reader given two numbers will subtract them.** **The writer invited it and the reader is not at fault.**',
  '**The finding, and it is the unit in one line.** ⚠ **A summary is made from beginnings and emphasis lives at ends.** **Write the end for the reader and the beginning for the quoter**, and put the qualification inside the first claim where no summary can take it out.',
  '**And do not supply her sentence.** ⚠ **If you write _twenty-two against thirty-one, on three months with a vacancy in one_, it is your sentence.** **Read her her own second sentence, ask the nine words, and she will write it** — **and she will remember writing it, which is the whole reason the move exists.**',
  '**Pronunciation.** 🔊 **Track 5.14** **Read the writer her own sentence, ask the nine words, and stop.** ⚠ **The silence here is about five seconds, which is longer than in 3.7**, because she has to work out that she has two readers before she can answer. **What she says first is almost always a number: _second_.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a paragraph and two summaries of it, and does **not** show them. A reads all three. B makes the three moves on the writer and then **the fourth on the summariser: which sentence did you take it from?** ⚠ **In one of the two pairs the summary is simply wrong** — **it says something the paragraph does not say** — **and B must say so and do something different.** Change roles with the other pair.'));
out.push(table(['Pair A – the dispensing figures', 'Pair B – the appeal decision'], [
  ['_Paragraph: "Eleven of the hundred and four were against superseded sheets; the October sheets were the only ones I examined."_', '_Paragraph: "The inspector rejected the fourth ground, which was the appellant\'s whole case."_'],
  ['_Summary one: "Eleven dispensings wrong in October."_', '_⚠ Summary one: "The inspector rejected the appeal."_'],
  ['_Summary two: "About one in nine are wrong."_', '_Summary two: "Appeal allowed on three grounds of four."_'],
  ['_⚠ The limit — one month only — is in the second clause._', '_⚠ Summary one says the opposite of the paragraph._'],
  ['_⚠ Both summaries took the first clause._', '_⚠ Nothing the writer does would have prevented it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each pair\'s questions and the answers. ⚠ **Pair B is the one where the summary is simply wrong**, and no rewriting would have prevented it: **_rejected the fourth ground_ and _rejected the appeal_ are four words apart and mean opposite things.** **The move there is not mediation at all** — **it is to tell the writer that this one is not hers, and to go to the summariser with the two sentences side by side.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thing of yours that somebody summarised** and put the two texts side by side. ⚠ **Mark which sentence of yours the summary came from.** **It is the first in about four cases in five.** **Then ask whether your first sentence could have stood alone, and if not, write the version that could.**'));
out.push(p('**b**  Swap and do the three moves on a partner\'s paragraph, then the fourth on their summariser if they have one. ⚠ **Count the silence after the nine words.** **It is about five seconds and what they say first is almost always a number.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say, and to whom:  _Two summaries of one paragraph. Asked which summariser was careless, Mr Shihabi said neither: both of them kept the first sentence and dropped the second, and the second is the paragraph. Mrs Tarabishi said the summarisers are at fault for dropping the qualification, and Mrs Khoury said they dropped what was last, and what was last was a qualification, and nobody summarises the end of a paragraph — a summary is made from beginnings, and that is not a failing in the summarisers but what summarising is. Dr Qabbani said so the writer has to put the limit first, and Mrs Oueidat said not first but in the sentence the summary will take, which is the first one: twenty-two records against a monthly average of thirty-one, on three months with a vacancy in one of them, is one sentence that no summary can separate. Mrs Ajouz said that is 4.5 again, the limit inside the claim, and Mrs Khoury said it is exactly 4.5 and the class should notice — Unit 4 said the limit must be inside the claim because a quoter will separate them, and Unit 5 says the same thing about position, that a summariser takes your first sentence and your first sentence therefore has to stand alone. Mr Tayara asked what the end of the paragraph is for, and it is for the reader who reads the paragraph, which is most of them: the end is where the emphasis lives for a reader and the beginning is what survives a summary, and those are two different readers and you write for both. Mr Attar said that sounds like having it both ways, and Mrs Oueidat said it is having it both ways and it is the job — put the emphasis at the end for the reader and the qualification inside the first claim for the quoter, and Mrs Ajouz\'s paragraph does the first and not the second. Mrs Rizk asked what you say to her, and Mr Zahreddine said read her her own second sentence and ask which of her two readers it was for, which is the whole mediation. Mrs Tarabishi asked about the clerk who wrote the agenda line, and Mrs Khoury said you ask the clerk one question and it is not a correction: which sentence did you take it from. He will say the first, and that is the fact Mrs Ajouz needs and cannot get from anybody else. Mr Shihabi asked about the committee member who wrote nine a month, and Mrs Oueidat said nothing at all — he arithmetised a figure he was given, and that is what a reader does with two numbers: the nine a month is in the paragraph, thirty-one minus twenty-two, and nobody put it there. And Mrs Ajouz said the thing she will take away is that she wrote the best sentence in the paper second, and both of her readers were gone by then._'));
out.push(p('**Listener task:** write which sentence of your own the summary came from, and whether it could have stood alone.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 5)', 7));
out.push(p('You are going to read an article by a committee clerk. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which you think fits best according to the text.'));
out.push(box(null, [
  '**WHAT A MINUTE IS FOR, BY SOMEBODY WHO WRITES THEM**',
  'I have taken minutes for nineteen years and I have never once been told what a minute is for. The assumption in every office I have worked in is that it is a record of what was said. It is not, and anybody who has tried to write one knows it is not within about four minutes of starting.',
  'A meeting of nine people for ninety minutes produces something like twelve thousand words. A minute of that meeting runs to five hundred. The work is not transcription and it is not even summary in the ordinary sense: it is deciding which of about forty statements will exist in six months, because the ones that are not in the minute will not.',
  'People assume the hard part is the arguments. It is not. Arguments are easy, because they have shape and somebody wins. The hard part is the qualification — the clause somebody attached to a figure, usually at the end of a long sentence, usually in a lower voice. Those clauses are what a minute loses, and they are lost in a way nobody notices, because what remains is perfectly accurate.',
  'I now do one thing that has changed my minutes more than anything else in nineteen years, and it took a month to learn. When somebody gives a figure, I write the figure and then I ask them, in the meeting, what it does not cover. It takes eleven seconds. About half of them have an answer ready, which tells you they had thought about it and had not said it. The other half look at me and then produce one, which is worse: the limit existed and had not been thought about until I asked.',
  'The objection to this is that it slows the meeting, and it does, by about four minutes in ninety. The objection I take more seriously is that it is not my job. It may not be. But I am the only person in the room whose job is what the room will remember, and a figure without its limit is not a smaller fact than a figure with one. It is a different fact.',
  'What I cannot fix is the summary of the minute. Agendas carry one line per item and that line comes from my first sentence. I have started writing first sentences that carry their own qualification, which makes them ugly, and I would rather have an ugly sentence that survives than an elegant one that is quoted without half of itself.',
  '**1**  What does the writer say about the purpose of a minute?   **A** It is a record of what was said.   **B** It determines what will still exist later.   **C** It is a summary of the arguments.   **D** Nobody in his offices has been able to define it.',
  '**2**  What does he find hardest about the work?   **A** the volume of words   **B** deciding who won an argument   **C** writing quickly enough   **D** capturing the clauses attached to figures',
  '**3**  What does he imply about the people who have an answer ready?   **A** they are better prepared than the others   **B** they resent being asked   **C** they had thought of the limit and chosen not to say it   **D** they are usually the ones who gave the figure',
  '**4**  Why does he say the second group\'s response is worse?   **A** the limit had not been considered at all until he asked   **B** it takes longer   **C** it embarrasses them   **D** their answers are less reliable',
  '**5**  How does he respond to the objection that this is not his job?   **A** he rejects it   **B** he accepts it may be true and acts anyway   **C** he says the chairman has agreed to it   **D** he says it saves time overall',
  '**6**  What does he say about his first sentences?   **A** they have become shorter   **B** he writes them last   **C** he accepts they are inelegant   **D** the agenda no longer uses them',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a paragraph and its summaries (120 words or more).'));
out.push(p('**ONE PARAGRAPH, TWO SUMMARIES** · ______________   **The paragraph.** _"______________"_   **Summary one.** _"______________"_   **Summary two.** _"______________"_   **What is correct.** ⚠ **Both are ______________, and both ______________.**   **To the writer.** ⚠ **Your own ______________ sentence says ______________. Which of your two readers was it for?**   **To the summariser.** ⚠ **Which sentence did you take it from?**   **What I am not going to do.** ⚠ **______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What is correct, said first, about both summaries',
  'The writer\'s own sentence read back, and one question',
  'One question to the summariser, and not a correction',
  'The arithmetic reader left alone',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Third essay of the course, and the instruction has not changed: three points, two discussed, both named in the first paragraph with the ground for the choice, the third not mentioned again.**',
  'Your class has read an article about writing at work. **Write an **essay** discussing **two** of the points raised.** You should **explain which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about writing at work. **First**, that a reader remembers almost nothing of what they read, so the only question is which few words they keep. **Second**, that most bad writing at work is caused by not having decided what the document is for. **Third**, that it is cheaper to train people to write than to correct what they have written."_',
  '**Points to discuss: 1** a reader keeps almost nothing   **2** bad writing comes from an undecided purpose   **3** training is cheaper than correcting',
  '⚠ **This unit has given you an argument about the first two and no evidence at all about the third.** **Take the pair you can be specific about** — **and notice that the first and second, put together, make a claim neither of them makes alone.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Not until the fourth Saturday ___ where the book was.   a) anybody asked   b) asked anybody   c) did anybody ask',
  '2  At no point ___ requested.   a) the log was   b) was the log   c) the log has been',
  '3  What stopped the whole thing ___ a key.   a) was   b) were   c) have been',
  '4  The eight ___ we have no reason are the group the committee must decide about.   a) that   b) which   c) for whom',
  '5  It is not ___ that the storage use is lawful now.   a) dispute   b) in dispute   c) disputing',
  '6  Her ___ of the two figures side by side is what made the difference.   a) placement   b) place   c) placing',
  '7  The reconciliation was signed on a count of records ___, and not on a count received.   a) transfer   b) transferring   c) transferred',
  '8  The three sets of results ___ in the old system on 14 May.   a) was   b) were   c) is',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style – three extracts, two questions each).** 🔊 **Track 5.15** You will hear three short extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**Extract One — two colleagues discussing a minute.**',
  '**1**  What does the woman say went wrong?   **A** a figure was recorded inaccurately   **B** a condition attached to a figure was left out   **C** the item was taken in the wrong order',
  '**2**  What does the man say he will do differently?   **A** circulate a draft before the meeting   **B** record the discussion as well as the decision   **C** ask for the limit at the time',
  '**3**  **Extract Two — a trainer and a manager.**   What does the trainer say about reading a paragraph aloud?   **A** it reveals words that can be used against the writer   **B** it is the only way to check the grammar   **C** it works better with a group than with one person',
  '**4**  What does the manager admit about his own writing?   **A** he adds words he thinks strengthen it   **B** he writes too long   **C** he never reads it back',
  '**5**  **Extract Three — two people discussing a summary.**   What does the man say about the summary?   **A** it is inaccurate   **B** it is too short   **C** it took the first sentence',
  '**6**  What do they agree the writer should do?   **A** complain to the summariser   **B** put the qualification into the first sentence   **C** write shorter paragraphs',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['Extract One — Woman', 'It is not wrong. That is what I keep saying to people. The minute says the April figure was twenty-two and the April figure was twenty-two.'],
  ['Extract One — Man', 'Then what is the difficulty?'],
  ['Extract One — Woman', 'She said it in the meeting with a clause on the end — that April had a vacancy for nineteen days — and the clause is not there. So the committee has a number that means one thing and she gave them a number that meant another, and nobody can be shown to have done anything wrong.'],
  ['Extract One — Man', 'And it was at the end of what she said.'],
  ['Extract One — Woman', 'At the end, and quietly, and after a long sentence. Which is where limits always are.'],
  ['Extract One — Man', 'Right. Then from the next meeting I shall do what the clerk in planning does. Somebody gives a figure, I write it down and I ask them there and then what it does not cover. He says it costs four minutes in ninety.'],
  ['Extract Two — Trainer', 'Give it to whoever disagrees with you most and ask them to read it out loud to you. Then watch where they lean.'],
  ['Extract Two — Manager', 'That sounds like an unpleasant ninety seconds.'],
  ['Extract Two — Trainer', 'It is ninety seconds and it is the only test there is. Every place their voice leans is a word you put in. Not a word you got wrong — a word you added, deliberately, to make the thing stronger.'],
  ['Extract Two — Manager', 'I do that. I know I do it. I write a sentence and it looks a bit thin and I put in _clearly_ or _substantially_ and I feel better about it.'],
  ['Extract Two — Trainer', 'And every one of those is a handle. Take them out and put a number in where you can.'],
  ['Extract Two — Manager', 'And where I cannot?'],
  ['Extract Two — Trainer', 'Say what you counted and stop. Let the reader supply the adjective. They will not laugh at their own word.'],
  ['Extract Three — Man', 'The agenda line is not wrong either. That is the annoying part. Records missing for three months, officer requests authority to search. Every word of that is in her paper.'],
  ['Extract Three — Woman', 'So what is missing?'],
  ['Extract Three — Man', 'That she said the evidence was thin and said why. Three months is not many months and one of them had a vacancy in it. Whoever wrote the agenda line took her first sentence, which is what everybody does, and her first sentence does not carry it.'],
  ['Extract Three — Woman', 'Then it has to go in the first sentence.'],
  ['Extract Three — Man', 'It has to go in the first sentence, and the first sentence will be uglier, and she will not like that. But an ugly sentence that survives is better than a good one quoted without half of itself.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the ground, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say one fact in four marked orders and name what each makes important',
  '☐ begin a sentence with what the reader already has and end it with what is new',
  '☐ hold a long subject back, and know when to use a full stop instead',
  '☐ choose between a cleft and an inversion and give the reason in one clause',
  '☐ keep emphasis across a paragraph with one device at most',
  '☐ write a paragraph that cannot be read aloud against me',
  '☐ put the qualification inside the sentence a summariser will take',
  '☐ mediate between a paragraph and the summary that lost its emphasis',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _throw into relief · build up to · bury in · run together · hold up to · cast up · fence off · hem in · box in · play off · tease out · round out_.',
  '**This unit\'s word-formation set** _(Reading Part 5 in 5.7 draws on this unit\'s lexis)_: _weight → **weighty** · place → **placement** · position → **reposition** · order → **reorder** · balance → **imbalance** · expand → **expansion** · elaborate → **elaboration** · dense → **density** · stress → **unstressed**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _come up_ **→ _a question that comes up_**, which arises rather than approaches, where at A2 it was coming up a road · _read out_ **→ _read out against you_**, somebody reading your own words aloud to defeat you, where at A2 it was reading out a list · _keep on_ **→ _kept on_**, retained in a post for another term, where at A2 it was keeping on walking.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
