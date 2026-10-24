// Proactive Business English B1 · Syria Edition · Book 2 · Unit 24 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a level · a stage · a milestone in learning · a gap · to consolidate · to revise · a weak point · a habit · a routine · to keep up · to fall behind · a measurable gain · a plateau · to practise deliberately · a log · a record of practice · a target date · a benchmark · to self-assess · a portfolio · a certificate · a pass mark · a band · an examiner · a candidate · to sit an examination · a resit · a study plan · a learning partner · the next twelve months';
const BACK_AT_B1 = 'progress · experience · skill';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 24  Looking Ahead to B2'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**24.1**  put the whole tense system on one page',
  '**24.2**  ask the same question in eight tenses',
  '**24.3**  count a habit: _by January I will have written it nine times_',
  '**24.4**  say what you cannot yet do',
  '**24.5**  separate what is arranged, what you intend, and what you hope for',
  '**24.6**  close well, and write the letter to your B2 self',
  '**24.7**  Review & Mediate: what the certificate says, and the first fortnight',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The last unit, and the one nobody prepares for', [
  '**It is the end of August.** The Tannous arrangement runs to next May, the bench page is at revision 3, and Lina Barakat has been confirmed in post. ⚠ **Nothing in this unit is new grammar.**',
  '⚠ **What is new is being asked what you cannot do.** Twenty-three units have asked you to write what you know; ⚠ **24.4 asks you for one sentence about your own gap**, and it is the hardest sentence in the book.',
  '**And the unit ends with a letter you seal.** ⚠ **It is opened at B2 Unit 1, which is three or four months from now** — and what you write in it is the only part of this book that will still be addressed to you personally when you read it again.',
], C.lyellow, C.orange));

// ======================= CYCLE 24.1 =======================
out.push(pb());
out.push(h2('24.1  The whole system on one page'));
out.push(p('**Function:** choosing a tense on purpose   ·   **Grammar:** the tense map — twelve forms, one job each   ·   **Pronunciation:** the contracted auxiliary that carries the tense'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one sentence about your work in the present simple, one in the present perfect, and one in the past simple. Say what each does that the others cannot.'));
out.push(p('**b**  Which job belongs to which? _a habit · a finished action at a stated time · a finished action with a present result_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say the map is for?   **A** learning the forms   **B** choosing between two forms that are both correct   **C** correcting mistakes'));
out.push(p('**b**  Listen again. **1** Which two forms does Lina confuse? **2** What is the test Nour gives her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  "Both are correct, and they say different things"', [
  ['Lina', 'I have written *we sent the list on the 20th* and you have changed it to *we have sent the list*.'],
  ['Nour', '⚠ **Both are correct and they say different things**, and that is what the map is for. ⚠ **It is not for finding mistakes; it is for choosing between two forms that are both right.**'],
  ['Lina', 'What is the difference?'],
  ['Nour', '⚠ ***We sent it on the 20th* puts the reader in the past and invites the next question: *and did it arrive?*** ⚠ ***We have sent it* puts the reader in the present and the next question is *what do you need from me?***'],
  ['Lina', 'So the perfect is for a present result.'],
  ['Nour', '⚠ **The test is one question: does the reader have to do anything?** ⚠ **If yes, the perfect, because it brings the thing into today.** If the reader is only being told what happened, the past simple with its date.'],
  ['Lina', 'And the twelve forms? I have never been able to keep them in my head.'],
  ['Nour', '⚠ **Nobody keeps twelve in their head. You keep a page and you look at it for a year.** ⚠ **And in this trade you will use six of the twelve for nine documents out of ten.**'],
  ['Lina', 'Which six?'],
  ['Nour', '⚠ **Present simple, present continuous, present perfect, past simple, *going to*, and the future perfect.** ⚠ **The other six are for the one document in ten, and when you need one you will know it** — *because you will try to write a sentence and find you cannot.*'],
  ['Lina', 'That is how I found the future perfect.'],
  ['Nour', '⚠ **It is how everybody finds it.** ⚠ **You wanted to say that by the time the lorry goes the marking will be finished, and no form you had would do it** — and then somebody shows you the form and you have it for life. **A form learned because you needed it is not forgotten.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The tense map — one job each**',
  table(['Form', 'Its one job', 'Example'], [
    ['**present simple**', 'a habit, a rule, a timetable', 'the van goes east on Thursdays'],
    ['**present continuous**', '⚠ **an arrangement with somebody else in it**', 'we are loading on the 11th'],
    ['**present perfect**', '⚠ **a finished action with a present result** — *the reader must do something*', 'we have sent the list'],
    ['**past simple**', '**a finished action at a stated time**', 'we sent it on the 20th'],
    ['**past continuous**', 'the background to an interruption', 'we were loading when the gate closed'],
    ['**past perfect**', '⚠ **the earlier of two past things, where the order matters**', 'the seal had been broken before it left'],
    ['**_going to_**', 'an intention, or evidence in front of you', 'we are going to buy no board'],
    ['**_will_**', 'a decision at the moment of speaking, a promise', 'I will telephone you on the day I know'],
    ['⚠ **future perfect**', '⚠ **finished by a deadline**', 'by Friday we will have marked ninety'],
    ['**future continuous**', 'in progress at a future time', 'at two we will be marking'],
    ['**used to**', 'a past habit that has stopped', 'the run used to be on Tuesdays'],
    ['**would**', '⚠ **a measured consequence, or a conditional offer**', 'I would be prepared to, if you would'],
  ], [1.5, 2.4, 2.1]),
  '⚠ **The map is not for finding mistakes; it is for choosing between two forms that are both correct.** ⚠ *We sent it on the 20th* **and** *we have sent it* **are both right and they ask the reader two different questions.**',
  '⚠ **The test for the perfect: does the reader have to do anything?** ⚠ **If yes, the perfect, because it brings the thing into today.** If the reader is only being told what happened, the past simple with its date.',
  '⚠ **Six of the twelve do nine documents out of ten**: ⚠ **present simple, present continuous, present perfect, past simple, *going to*, and the future perfect.**',
  '⚠ **Nobody keeps twelve forms in their head. Keep the page and look at it for a year.**',
  '⚠ **And you will find the rare forms by needing them.** ⚠ *You will try to write a sentence and find you cannot* — **and a form learned because you needed it is not forgotten.**',
  '**Practise:** Write the same fact in four tenses. ⚠ Then say what each version asks the reader to do.',
  '**Useful phrases:**  both are correct and they say different things  ·  does the reader have to do anything?  ·  six of the twelve  ·  keep the page  ·  I tried to write it and could not  ·  one job each',
  '**Pronunciation – the auxiliary that carries the tense.** 🔊 **Track 24.2** Listen: _we\'ve sent the list_ · _we sent the list_. ⚠ **The whole difference is one contracted syllable, and in fast speech it is almost inaudible.** **In writing it is the difference between a report and a request** — so in speech, say *we have* in full when it matters. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a sentence; B gives it in another tense and says what changes. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have written *__________*.'],
  ['B', '⚠ Both are correct and ⚠ **they say different things.** *__________* puts the reader __________.'],
  ['A', 'And the other?'],
  ['B', '⚠ *__________* puts the reader __________, and the next question is __________.'],
  ['A', 'So which do I use?'],
  ['B', '⚠ **Does the reader have to do anything?**'],
  ['A', '__________.'],
  ['B', '⚠ Then __________.'],
]));
out.push(table(['Role card 1 — sent and have sent', 'Role card 2 — the form you cannot find'], [[
  '*We sent the list on the 20th* ⚠ **puts the reader in the past: the next question is *and did it arrive?*** ⚠ *We have sent the list* **puts the reader in the present: the next question is *what do you need from me?*** ⚠ **The test: does the reader have to do anything?**',
  'A has a sentence they cannot write: ⚠ **by the time the lorry goes, the marking will be finished.** ⚠ B\'s job is to let A try every form they have and fail, **and only then to name the future perfect.** ⚠ **A form learned because you needed it is not forgotten** — and this is how the class should meet 24.3.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two versions and what each asks the reader to do. ⚠ Then name the six forms that do nine documents out of ten.'));
out.push(PHRASE_CARD(['both are correct', 'does the reader have to do anything?', 'six of the twelve', 'keep the page', 'I tried and could not', 'one job each']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** fact about your work and write it in six tenses. Say what each version asks the reader to do.'));
out.push(table(['The form', 'My sentence', 'What it asks the reader to do'], [['present simple', '', ''], ['present continuous', '', ''], ['present perfect', '', ''], ['past simple', '', ''], ['_going to_', '', ''], ['future perfect', '', '']], [1.4, 2.4, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My fact is _______. In the present perfect it reads _______, which asks the reader to _______. In the past simple it reads _______, which asks _______._'));
out.push(p('**Listener task:** count the sentences in the room where the perfect was the right choice. ⚠ Then ask which form each student has never once used at work.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a past perfect where two past things are not in question, and a *will* for an arrangement. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE SIX FORMS THIS COMPANY ACTUALLY WRITES. 28 August. N. Mansour. ⚠ Counted from forty-one documents of this year.**',
  table(['Form', 'Times used', 'What it was doing', 'Where'], [
    ['**present simple**', '⚠ **in all 41**', 'rules, steps, timetables', 'every bench page, every programme line'],
    ['**present perfect**', '⚠ **in 33**', '⚠ **a finished thing the reader must act on**', '*we have sent · we have had it serviced · she has cancelled*'],
    ['**past simple with a date**', 'in 29', 'the record of what happened', 'post-mortems, file notes, claims'],
    ['**present continuous**', 'in 18', '⚠ **arrangements with somebody else in them**', 'programmes, date lists'],
    ['**_going to_**', 'in 11', 'intention, and evidence in front of us', 'forecasts, the board position'],
    ['⚠ **future perfect**', '⚠ **in 4**', '⚠ **finished by a deadline**', '⚠ **all four in the export programmes**'],
  ], [1.5, 1, 2.2, 2.3]),
  '⚠ **Six forms, and the first three are in nearly everything.** ⚠ **The other six forms of the twelve appear in this year\'s documents eleven times between them** — the past perfect four times, *used to* three, *would* three, and the future continuous once.',
  '⚠ **And the future perfect is the one worth noticing.** ⚠ **Four uses, all four in export programmes, and all four written since March** — because the export work is the first work this company has done where somebody else\'s deadline decides everything. ⚠ **The form arrived with the job.**',
  '⚠ **What I would tell anybody learning this.** ⚠ **Do not try to carry twelve forms. Carry three and know them exactly** — the present simple, the present perfect and the past simple with its date — ⚠ **and let the other nine arrive when a sentence you need will not go into any of the three.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which three forms are in nearly everything?'));
out.push(item('2', 'How many times do the other six forms appear, and where is the future perfect?'));
out.push(item('3', 'What does the writer recommend to somebody learning?'));
out.push(box('Writer\'s box', [
  '**The forms you actually write — four parts:** **a table: *form · times used · what it was doing · where*** → ⚠ **which forms are in nearly everything** → ⚠ **the form that arrived with a new kind of work** → **what you would tell somebody learning.**',
  '⚠ **Count from real documents and say how many.** ⚠ *Counted from forty-one documents of this year.* **A grammar page with a count behind it is a different document from a grammar page**, and the counting takes an afternoon once.',
  '⚠ **Put *what it was doing* beside the form.** ⚠ *A finished thing the reader must act on.* **A form with its job written beside it can be chosen; a form with only its name cannot.**',
  '⚠ **Notice the form that arrived with the work.** ⚠ *Four uses of the future perfect, all in export programmes, all since March* — **because the export work is the first work where somebody else\'s deadline decides everything.** ⚠ **The form arrived with the job**, which is how grammar is actually acquired at work.',
  '⚠ **Give the three-form advice and mean it.** ⚠ *Carry three and know them exactly, and let the other nine arrive when a sentence you need will not go into any of the three.*',
  '⚠ **And print the rare counts, not just the common ones.** ⚠ *The past perfect four times, *used to* three, *would* three, the future continuous once.* **The small figures are the honest part of the page** — they tell a learner what not to spend a month on.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the forms you actually write* for your own work (**60 words or more**). Use the frame.'));
out.push(p('**THE ______________ FORMS ______________ ACTUALLY WRITES. ______________. ______________. ⚠ Counted from ______________ documents.**   **______________** | ⚠ **in ______________** | ______________ | ______________   **______________** | ⚠ **in ______________** | ⚠ **______________** | ______________   **______________** | in ______________ | ______________ | ______________   ⚠ **______________** | ⚠ **in ______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________ forms, and the first ______________ are in nearly everything.** ⚠ **The others appear ______________ times between them.**   ⚠ **And ______________ is the one worth noticing.** ⚠ ______________ uses, all of them ______________, because ______________. ⚠ **The form arrived with the job.**   ⚠ **What I would tell anybody learning this.** ⚠ **Do not try to carry ______________. Carry ______________ and know them exactly**, and let the others arrive when ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as somebody starting here next month with worse English than mine.** The box says give the three-form advice and mean it. ⚠ **You have listed nine forms with counts — which three should I learn first, and does your page say?**"',
  '⚠ In this unit the reader to name is ⚠ **the person who will be at your level in a year** — a new colleague, a trainee, yourself in Unit 1. ⚠ **Every cycle in Unit 24 is written for that reader**, and a page written for an examiner fails all of them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **which three should I learn first?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A count, from a stated number of documents', ''],
  ['*What it was doing* beside each form', ''],
  ['The rare counts printed as well as the common', ''],
  ['The form that arrived with a new kind of work', ''],
  ['The three-form advice, stated plainly', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the form that arrived with the work. The class says what the work was.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a form you learned because you needed it (**140 to 180 words**). Say what sentence you were trying to write, what you tried first, who told you, and what you have written with it since.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the sentence they could not write actually there?_   ? _what have they written with it since?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the form arrive with a new kind of work? Usually all three — ⚠ **and in two of three the writer had been taught the form years before and had never once used it.**'));
out.push(box('Homework', ['Write your final text. Then count the tenses in five real documents from your own work, and write which three carry nearly everything (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.2 =======================
out.push(pb());
out.push(h2('24.2  The same question, eight ways'));
out.push(p('**Function:** asking one question in any tense   ·   **Grammar:** question formation, consolidated   ·   **Pronunciation:** the auxiliary at the front, unstressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask the person next to you about the marking, in three different tenses. Say what each answer would tell you.'));
out.push(p('**b**  Complete: _______ the cartons marked yet? · _______ you mark them yesterday? · _______ you be marking at two?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about the eight questions?   **A** they are all the same   **B** each one gets a different answer and only one is useful tonight   **C** they are too difficult'));
out.push(p('**b**  Listen again. **1** Which question does he say is the useful one? **2** What does the wrong question get you?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  "Eight questions and one of them is tonight\'s"', [
  ['Lina', 'May I practise? I want to ask about the marking in every tense I know.'],
  ['Abu Yasser', 'Go on.'],
  ['Lina', '*Do you mark at night? Are you marking tonight? Have you marked the Tannous cartons? Did you mark on Tuesday? Had you marked them before the lorry came? Are you going to mark tomorrow? Will you have finished by Friday? Will you be marking at two?*'],
  ['Abu Yasser', '⚠ **Eight, and they are all correct, and seven of them are no use to me tonight.**'],
  ['Lina', 'Which is tonight\'s?'],
  ['Abu Yasser', '⚠ ***Will you have finished by Friday?*** ⚠ **Because the lorry is Friday and the only thing anybody needs from me is whether ninety cartons will exist by then.**'],
  ['Lina', 'And *are you marking tonight*?'],
  ['Abu Yasser', '⚠ **That gets you *yes*, and *yes* tells you nothing about Friday.** ⚠ **A man can be marking every night of the week and still not finish by Friday** — and *yes* is the answer most people take away and then plan against.'],
  ['Lina', 'So the tense chooses the answer.'],
  ['Abu Yasser', '⚠ **The tense chooses the question and the question chooses what you are allowed to be told.** ⚠ *Did you mark on Tuesday?* gets a yes or a no about Tuesday **and nothing about tonight or Friday**, and people ask it because Tuesday is what they remember.'],
  ['Lina', 'How do I know which one to ask?'],
  ['Abu Yasser', '⚠ **Ask yourself what you are going to do with the answer.** ⚠ **If you cannot say what you would do differently, you are asking to be reassured and not to be told** — and the question you want is almost always the one with the deadline in it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**One question, eight tenses**',
  table(['The question', 'What the answer tells you'], [
    ['**Do you mark at night?**', 'the habit — nothing about this week'],
    ['**Are you marking tonight?**', '⚠ **tonight only.** *Yes* tells you nothing about Friday'],
    ['**Have you marked them?**', 'whether the thing exists now'],
    ['**Did you mark on Tuesday?**', 'Tuesday — ⚠ **asked because Tuesday is what the asker remembers**'],
    ['**Had you marked them before the lorry came?**', 'the order of two past things'],
    ['**Are you going to mark tomorrow?**', 'the intention'],
    ['⚠ **Will you have finished by Friday?**', '⚠ **whether ninety cartons will exist by the deadline** — tonight\'s question'],
    ['**Will you be marking at two?**', 'where to find him'],
  ], [2.6, 3.2]),
  '⚠ **Eight questions, all correct, and seven of them are no use tonight.** ⚠ **The tense chooses the question and the question chooses what you are allowed to be told.**',
  '⚠ **The test before asking: what am I going to do with the answer?** ⚠ **If you cannot say what you would do differently, you are asking to be reassured and not to be told.**',
  '⚠ **The question you want is almost always the one with the deadline in it.** ⚠ *Will you have finished by Friday?* — **and the answer to that one can be planned against.**',
  '⚠ **Beware the question that gets a *yes*.** ⚠ *Are you marking tonight?* **gets yes, and a man can be marking every night of the week and still not finish by Friday** — *and yes is the answer most people take away.*',
  '⚠ **And notice why people ask the wrong one: they ask about what they remember.** ⚠ *Did you mark on Tuesday?* **is a question about the asker\'s memory and not about the work.**',
  '**Practise:** Take one thing at your work and ask about it in eight tenses. ⚠ Then mark which one you would act on.',
  '**Useful phrases:**  will you have finished by …?  ·  what will I do with the answer?  ·  yes tells me nothing about Friday  ·  the one with the deadline in it  ·  asking to be reassured  ·  the tense chooses the answer',
  '**Pronunciation – the auxiliary at the front, unstressed.** 🔊 **Track 24.4** Listen: _will you have FINished by FRIday?_ ⚠ **The *will you have* almost swallowed, and the stress on the verb and the deadline.** **Stress the auxiliary and the question sounds like a challenge** — *WILL you have finished* — and the answer gets shorter. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks in eight tenses; B says which is tonight\'s. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '*Do you __________? Are you __________? Have you __________? Did you __________? Had you __________? Are you going to __________? Will you have __________ by __________? Will you be __________ at __________?*'],
  ['B', '⚠ Eight, all correct, and ⚠ **seven of them are no use to me today.**'],
  ['A', 'Which is today\'s?'],
  ['B', '⚠ *__________*, because __________.'],
  ['A', 'And __________?'],
  ['B', '⚠ That gets you *yes*, and ⚠ **yes tells you nothing about __________.**'],
]));
out.push(table(['Role card 1 — the eight about the marking', 'Role card 2 — what will you do with the answer?'], [[
  '⚠ **Tonight\'s question is *will you have finished by Friday?*** — **the lorry is Friday and the only thing anybody needs is whether ninety cartons will exist by then.** ⚠ ***Are you marking tonight?* gets *yes*, and a man can mark every night and still not finish.**',
  'A asks four questions in a row. ⚠ B asks one thing before answering any of them: ⚠ **what are you going to do with the answer?** ⚠ **If A cannot say, the question is for reassurance** — and the useful version is nearly always the one with a deadline in it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the eight questions and mark the one that is today\'s. ⚠ Then say what each of the other seven would have let somebody plan against.'));
out.push(PHRASE_CARD(['will you have finished by …?', 'what will I do with the answer?', 'yes tells me nothing', 'the one with the deadline', 'asking to be reassured', 'the tense chooses the answer']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** thing at your work. Write the question in eight tenses and mark the one you would act on.'));
out.push(table(['The form', 'My question', 'What the answer would let me do'], [['present simple', '', ''], ['present continuous', '', ''], ['present perfect', '', ''], ['past simple', '', ''], ['past perfect', '', ''], ['_going to_', '', ''], ['⚠ **future perfect**', '', ''], ['future continuous', '', '']], [1.5, 2.3, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My eight questions are about _______. The one I would act on is _______, because _______. The one that only gets a *yes* is _______._'));
out.push(p('**Listener task:** count the questions in the room that have a deadline in them. ⚠ Then ask, of any question with no deadline, what the asker would do differently with the answer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _will you have finish_ and _did you have marked_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE QUESTIONS THIS OFFICE ASKED IN ONE WEEK, AND WHAT EACH GOT. 29 August. L. Barakat. ⚠ Nineteen questions. Four had a deadline in them.**',
  table(['The question', 'The answer it got', 'What anybody could do with it'], [
    ['**are you marking tonight?**', 'yes', '⚠ **nothing. It was asked three times by three people.**'],
    ['**have the labels come?**', 'not yet', 'telephone the supplier — ⚠ **and somebody did**'],
    ['**did the Tuesday load go?**', 'yes', 'nothing; it was known'],
    ['⚠ **will you have finished the ninety by Friday?**', '⚠ **no — eighty, because the generator runs from one until four and two nights of it is six hours**', '⚠ **everything. The lorry was moved to Monday on the strength of it.**'],
    ['**is Fadi back?**', 'at four', 'wait until four'],
    ['⚠ **will the list have gone by the 20th?**', '⚠ **it will have gone by the 18th**', '⚠ **Ms Tannous was told the 18th, and she planned against it**'],
  ], [2.2, 2.2, 2.5]),
  '⚠ **Nineteen questions in a week and four had a deadline in them**, and ⚠ **those four produced every decision that was taken.** The other fifteen produced *yes*, *not yet*, *at four* and *I think so*.',
  '⚠ **And one question was asked three times by three different people on the same day.** ⚠ ***Are you marking tonight?*** — **and all three got *yes* and all three went away** satisfied, ⚠ **and not one of them learned that eighty cartons and not ninety would exist on Friday.**',
  '⚠ **The fourth question is the whole week.** ⚠ **It cost nothing to ask, it was answered in nine words, and it moved a lorry** — and the reason nobody had asked it before is that *will you have finished by Friday* sounds like doubting somebody and *are you marking tonight* sounds like taking an interest.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many questions had a deadline, and what did they produce?'));
out.push(item('2', 'What happened with the question asked three times?'));
out.push(item('3', 'Why had nobody asked the fourth question?'));
out.push(box('Writer\'s box', [
  '**The questions and what each got — four parts:** **a table: *the question · the answer it got · what anybody could do with it*** → ⚠ **how many had a deadline, and what those produced** → ⚠ **the question asked three times** → ⚠ **why nobody asked the useful one.**',
  '⚠ **Count the questions and count the deadlines.** ⚠ *Nineteen questions, four with a deadline* — **and those four produced every decision taken.** **The ratio is the page.**',
  '⚠ **Record the answers verbatim, including the useless ones.** ⚠ *Yes · not yet · at four · I think so.* **Four words that produced nothing**, and seeing them written down is what makes the point.',
  '⚠ **Find the question asked more than once.** ⚠ *Asked three times by three people on the same day, and all three went away satisfied* — ⚠ **and not one of them learned the thing that mattered.** **Repetition of a useless question is the clearest sign of an office asking to be reassured.**',
  '⚠ **And say why nobody asked the useful one.** ⚠ ***Will you have finished by Friday* sounds like doubting somebody and *are you marking tonight* sounds like taking an interest.** **The obstacle is social and naming it is the only way past it.**',
  '⚠ **Give the cost and the gain of the good question.** ⚠ *It cost nothing to ask, it was answered in nine words, and it moved a lorry.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the questions and what each got* for a week at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE QUESTIONS ______________ ASKED IN ONE WEEK, AND WHAT EACH GOT. ______________. ______________. ⚠ ______________ questions. ______________ had a deadline in them.**   **______________?** | ______________ | ⚠ **______________**   **______________?** | ______________ | ______________   ⚠ **______________ by ______________?** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________ questions in a week and ______________ had a deadline**, and ⚠ **those ______________ produced ______________.** The others produced ______________.   ⚠ **And one question was asked ______________ times by ______________ people.** ⚠ **______________** — and all of them ______________, ⚠ **and not one learned ______________.**   ⚠ **The useful question cost ______________, was answered in ______________, and ______________.** ⚠ Nobody had asked it because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which of these could anybody act on?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The questions counted, and the deadlines counted', ''],
  ['The answers recorded verbatim, including the useless', ''],
  ['The question asked more than once', ''],
  ['Why nobody asked the useful one', ''],
  ['The cost and the gain of the good question', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the question that got *yes*. The class says what it let anybody plan against.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a question nobody asked (**140 to 180 words**). Say what was asked instead, what the answers were worth, what the unasked question was, and why it was not asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the unasked question have a deadline in it?_   ? _what made it difficult to ask?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the unasked question difficult for a social reason rather than a practical one? Usually all three — ⚠ **and in two of three the reason was that it would have sounded like doubting somebody.**'));
out.push(box('Homework', ['Write your final text. Then ask one question with a deadline in it at your work, and write down the answer and what you did differently because of it (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.3 =======================
out.push(pb());
out.push(h2('24.3  By January I will have written it nine times'));
out.push(p('**Function:** counting a habit forward   ·   **Grammar:** the future perfect, revisited — _by X I will have done it N times_   ·   **Pronunciation:** the figure stressed, not the auxiliary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you intend to do regularly. Say how many times you will have done it by a named date.'));
out.push(p('**b**  Which can be checked? _I am going to write a market note every month. · By January I will have written it nine times._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask Nour to put a number on?   **A** the price   **B** the market note, counted forward   **C** the date list'));
out.push(p('**b**  Listen again. **1** Why does he refuse *every month*? **2** What does the count do that the intention does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  "Say it as a number and we will both know"', [
  ['Nour', 'I am going to write the market note every month.'],
  ['Mr Ayoub', '⚠ **Everybody is going to do something every month.** ⚠ **Say it as a number and a date, and in January we will both know whether it happened.**'],
  ['Nour', '⚠ **By the end of January I will have written it nine times.**'],
  ['Mr Ayoub', '⚠ **Now that is a sentence I can hold you to and you can hold yourself to** — and more to the point, ⚠ **in November you can count and find you are at four, and do something about it.**'],
  ['Nour', '*Every month* cannot be counted until it has failed.'],
  ['Mr Ayoub', '⚠ **It cannot be counted at all. It can only be regretted.** ⚠ **A habit stated as a frequency is invisible until somebody notices it has stopped**, and by then it stopped four months ago.'],
  ['Nour', 'Nine and not twelve?'],
  ['Mr Ayoub', '⚠ **Nine is honest.** Five months to January is five, and you have written three already, so twelve would be a lie and nine is the truth with one spare. ⚠ **A target you have already decided to miss is worse than no target** — *you stop looking at it in the second month.*'],
  ['Nour', 'And where does the count live?'],
  ['Mr Ayoub', '⚠ **On the note itself, at the bottom: *note 4 of 9 to January*.** ⚠ **Then the count does the work and you do not have to remember it** — and anybody who picks up the file knows what was intended as well as what was done.'],
  ['Nour', 'And if I get to January with six?'],
  ['Mr Ayoub', '⚠ **Then you write that down too, and the reason, and it is worth more than the nine would have been.** ⚠ **Six of nine with a reason is a record; nine of nine with no record of the effort is a tidy story.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Counting a habit forward**',
  table(['Form', 'Example'], [
    ['~~every month~~', '⚠ **cannot be counted. It can only be regretted.**'],
    ['⚠ **by X I will have done it N times**', '⚠ **by the end of January I will have written it nine times**'],
    ['**the honest N**', '⚠ **five months plus three already written, so nine and not twelve**'],
    ['⚠ **where the count lives**', '⚠ **on the thing itself: *note 4 of 9 to January***'],
    ['**the mid-point check**', '⚠ **in November you can count, find you are at four, and do something**'],
  ], [2.3, 3.3]),
  '⚠ **A habit stated as a frequency is invisible until somebody notices it has stopped**, and by then it stopped four months ago. ⚠ ***Every month* cannot be counted at all.**',
  '⚠ **A number and a date can be checked at the half way point**, which is the whole value: ⚠ **in November you can count, find you are at four, and do something about it.**',
  '⚠ **Make N honest.** ⚠ **A target you have already decided to miss is worse than no target** — *you stop looking at it in the second month.* **Count the months, add what is done, and leave one spare.**',
  '⚠ **Put the count on the thing itself.** ⚠ ***Note 4 of 9 to January*** — **then the count does the work and you do not have to remember it**, and anybody who picks up the file knows what was intended as well as what was done.',
  '⚠ **And if you arrive short, write the figure and the reason.** ⚠ **Six of nine with a reason is a record; nine of nine with no record of the effort is a tidy story.**',
  '**Practise:** Turn each into a counted future perfect. 1 I will read more 2 we will review the prices regularly 3 I am going to practise writing 4 we will check the gate sheets 5 I will telephone the customers more often',
  '**Useful phrases:**  by January I will have written it nine times  ·  note 4 of 9  ·  nine and not twelve  ·  in November I can count  ·  six of nine with a reason  ·  every month can only be regretted',
  '**Pronunciation – the figure stressed, not the auxiliary.** 🔊 **Track 24.6** Listen: _by the end of January I will have written it NINE times._ ⚠ **Everything before *nine* run together and flat.** **Stress *will have* and it sounds like an argument; stress *nine* and it sounds like a plan.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states an intention; B makes it a count. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I am going to __________ every __________.'],
  ['B', '⚠ Everybody is going to do something every __________. ⚠ **Say it as a number and a date.**'],
  ['A', '⚠ By __________ I will have __________ __________ times.'],
  ['B', '⚠ **Now in __________ you can count, find you are at __________, and do something about it.**'],
  ['A', '__________ or __________?'],
  ['B', '⚠ **Count the months, add what is done, and leave one spare.** ⚠ **A target you have decided to miss is worse than none.**'],
  ['A', 'And where does the count live?'],
  ['B', '⚠ **On the thing itself: *__________ of __________*.**'],
]));
out.push(table(['Role card 1 — nine to January', 'Role card 2 — the honest N'], [[
  '*Every month* becomes ⚠ **by the end of January I will have written it nine times** — five months to January, three already written, one spare. ⚠ **The count goes at the bottom of each note: *note 4 of 9 to January*.** ⚠ **And six of nine with a reason is a record.**',
  'A proposes twelve. ⚠ B\'s job is to count the months aloud with A and to refuse the figure that is already a miss: ⚠ **a target you have decided to miss is worse than no target, because you stop looking at it in the second month.** ⚠ **Then agree the mid-point date on which A will count.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the counted sentence, the arithmetic behind N, and where the count will live. ⚠ Then write the mid-point date.'));
out.push(PHRASE_CARD(['by January I will have written it nine times', 'note 4 of 9', 'nine, not twelve', 'in November I can count', 'six of nine with a reason', 'one spare']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you intend to do. Write each as a counted future perfect, with the arithmetic and the mid-point.'));
out.push(table(['The intention', 'By when', 'How many times', 'The arithmetic, and the mid-point check'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1, 1.1, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _By _______ I will have _______ _______ times. That is _______ months and _______ already done, with _______ spare. I will count on _______._'));
out.push(p('**Listener task:** count the targets in the room that are already a miss. ⚠ Then ask each student where the count will live, and whether it is on the thing itself.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _by January I will write it nine times_ and a target with no mid-point. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT I SAID I WOULD DO IN FEBRUARY, AND WHAT THE COUNT SAYS NOW. 30 August. N. Mansour. ⚠ Six intentions. Two were counted and four were frequencies.**',
  table(['What I said in February', 'As a count?', 'Where it is now', 'Why'], [
    ['**write the market note every month**', '⚠ **no — a frequency**', '⚠ **three written in seven months**', '⚠ **nothing told me in April that I had missed March**'],
    ['**date list to Beirut by the 20th of each month**', '⚠ **yes — it is on the list: *list 5 of 12***', '⚠ **five of five, one of them a day late**', '⚠ **the count is printed on the thing, so missing one is visible on the next one**'],
    ['**first-off on every new job**', '⚠ **yes — a tally in the front of the file**', 'four of four', 'the tally is where the job starts'],
    ['**read one page of English a day**', 'no', 'unknown; I think about half', '⚠ **nothing to count, so nothing to know**'],
    ['**review the gate sheets weekly**', 'no', '⚠ **it stopped in May and nobody noticed until July**', '⚠ **a weekly thing that stops is invisible for about eight weeks**'],
    ['**telephone Ms Tannous before she telephones me**', 'no', 'twice of about six chances', 'no date, no count, and it depends on her'],
  ], [2.2, 1.5, 1.8, 2.3]),
  '⚠ **The two that were counted were done, and three of the four frequencies have failed.** ⚠ **The difference is not willingness and it is not importance** — the market note matters more than the first-off tally — ⚠ **it is that one had a printed number on it and the other did not.**',
  '⚠ **The gate-sheet review is the clearest case.** ⚠ **It stopped in May and nobody noticed until July**, and when I looked for the reason there was none: no decision, no week when it was skipped deliberately. ⚠ **A weekly thing that stops is invisible for about eight weeks**, because every single week it is only one week late.',
  '⚠ **What I am doing about it.** ⚠ **Four counts for the next twelve months, each printed on the thing itself**: *note N of 9 to January*, *list N of 12*, *first-off N*, and ⚠ **gate-sheet review N of 20 to January — written in the gate book itself, where the sheets are**, not in a diary nobody opens.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many intentions were counted, and how did they fare?'));
out.push(item('2', 'What happened to the gate-sheet review, and why was it invisible?'));
out.push(item('3', 'Where will the four new counts be printed?'));
out.push(box('Writer\'s box', [
  '**What I said I would do — four parts:** **a table: *what I said · as a count? · where it is now · why*** → ⚠ **the difference between the counted and the uncounted** → ⚠ **the one that stopped invisibly** → **the counts you are putting in place, and where each will be printed.**',
  '⚠ **Say plainly that the difference is not willingness.** ⚠ *The market note matters more than the first-off tally* — **and the tally was done and the note was not.** **It is the printed number and nothing else**, and a page that moralises instead will change nothing.',
  '⚠ **Give the arithmetic of invisibility.** ⚠ *A weekly thing that stops is invisible for about eight weeks, because every single week it is only one week late.* **That sentence is the whole cycle**, and it is why *weekly* is the most dangerous frequency.',
  '⚠ **Admit the unknowable one.** ⚠ *Read one page a day — unknown; I think about half.* ⚠ **Nothing to count, so nothing to know** — and the honest entry is better than a guess dressed as a figure.',
  '⚠ **Put each count where the work is.** ⚠ *Gate-sheet review N of 20 — written in the gate book itself, where the sheets are, not in a diary nobody opens.* **A count kept away from the work is a second thing to remember.**',
  '⚠ **And count forward with one spare.** *Note N of 9 to January.* ⚠ **The spare is what keeps you looking at it in the second month.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I said I would do, and what the count says* (**60 words or more**). Use the frame.'));
out.push(p('**WHAT I SAID I WOULD DO IN ______________, AND WHAT THE COUNT SAYS NOW. ______________. ______________. ⚠ ______________ intentions. ______________ were counted and ______________ were frequencies.**   **______________** | ⚠ **no — a frequency** | ⚠ **______________** | ⚠ **______________**   **______________** | ⚠ **yes — ______________** | ⚠ **______________** | ⚠ **______________**   **______________** | no | ⚠ **______________** | ⚠ **______________**   ⚠ **The ______________ that were counted were done, and ______________ of the ______________ frequencies have failed.** ⚠ **The difference is not willingness and it is not importance** — ______________ — ⚠ **it is ______________.**   ⚠ **The clearest case is ______________.** ⚠ It stopped in ______________ and nobody noticed until ______________. ⚠ **______________ is invisible for about ______________, because ______________.**   ⚠ **What I am doing about it.** ⚠ **______________ counts for the next twelve months, each printed on the thing itself**: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **where is this number printed?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Each intention marked counted or a frequency', ''],
  ['That the difference is not willingness, said plainly', ''],
  ['The arithmetic of invisibility', ''],
  ['The unknowable one admitted as unknown', ''],
  ['Each new count printed where the work is', ''],
  ['One spare in every N', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the thing that stopped without anybody noticing. The class says how long it was invisible.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you intended to do regularly and stopped (**140 to 180 words**). Say when it stopped, when anybody noticed, why nothing told you, and what the count would have been.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a number and a date?_   ? _how long was the stopping invisible?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the stopping invisible for more than a month? Usually all three — ⚠ **and in two of three nobody can name the week it stopped**, because there was never a week when it was clearly late.'));
out.push(box('Homework', ['Write your final text. Then take one thing you intend to do for the next twelve months, write it as a counted future perfect with one spare, and print the count on the thing itself (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.4 =======================
out.push(pb());
out.push(h2('24.4  What I cannot yet do'));
out.push(p('**Function:** naming your own gap   ·   **Grammar:** _I cannot yet · I can … but not … · I have never had to_   ·   **Pronunciation:** the gap said without apology and without drama'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of one thing in English you cannot yet do at work. Say it in one sentence, with no *unfortunately*.'));
out.push(p('**b**  Which is a gap? _My English is not very good. · I can write a letter but I cannot argue in one. · I need to improve._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour\'s own gap?   **A** vocabulary   **B** she cannot disagree with somebody senior in writing   **C** pronunciation'));
out.push(p('**b**  Listen again. **1** Why is *my English is not very good* useless? **2** What makes a gap usable?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  "I can write it and I cannot argue it"', [
  ['Lina', 'What is left that you cannot do? You write everything here.'],
  ['Nour', '⚠ **I can write a letter that disagrees with a customer and I cannot write one that disagrees with Mr Attar.**'],
  ['Lina', 'That is not English. That is rank.'],
  ['Nour', '⚠ **Half of it is rank and half of it is three forms I do not have.** ⚠ **I can say *we cannot do that*. I cannot say *I may be wrong about this, and if I am, what follows is wrong too* — and mean it as strength.**'],
  ['Lina', 'Why does that matter here?'],
  ['Nour', '⚠ **Because the whole of 23.6 is an opinion with my name on it**, and an opinion I cannot defend upward in writing is an opinion I will stop writing down. ⚠ **It is not a small gap. It is the one that would stop the market note in about four months.**'],
  ['Lina', 'My gap is that I cannot say anything on the telephone that I have not written first.'],
  ['Nour', '⚠ **That is a usable sentence and *my English is not very good* is not.** ⚠ **A gap with a situation in it can be practised; a gap that is a verdict about yourself cannot be practised at all.**'],
  ['Lina', 'So how do I practise mine?'],
  ['Nour', '⚠ **You make the first two minutes of every call unwritten, on purpose, for a month.** ⚠ **Not the whole call — two minutes.** And you write down afterwards what you could not say.'],
  ['Lina', 'And yours?'],
  ['Nour', '⚠ **Mine is an exercise and a person.** ⚠ **The exercise is to write one paragraph a month that begins *I may be wrong about this*; the person is Mr Ayoub, who will read them and tell me which ones he would have ignored.**'],
  ['Lina', 'That is the hardest sentence in this book.'],
  ['Nour', '⚠ **It is the hardest sentence anybody writes about themselves**, and the twenty-three units before it were practice for it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Naming your own gap**',
  table(['Instead of', 'Say'], [
    ['~~my English is not very good~~', '⚠ **a verdict about yourself. It cannot be practised.**'],
    ['~~I need to improve~~', '⚠ **no situation in it, so no exercise follows**'],
    ['⚠ **I can … but I cannot …**', '⚠ **I can write a letter that disagrees with a customer; I cannot write one that disagrees with an auditor**'],
    ['⚠ **I cannot yet …**', 'I cannot yet say anything on the telephone that I have not written first'],
    ['**I have never had to …**', 'I have never had to chair a meeting in English'],
  ], [2.3, 3.5]),
  '⚠ **A gap with a situation in it can be practised; a gap that is a verdict about yourself cannot be practised at all.**',
  '⚠ **Use *I can … but I cannot …* — the two halves together.** **The first half stops it being a confession and the second half locates the work.**',
  '⚠ **Say what the gap would cost.** ⚠ *An opinion I cannot defend upward in writing is an opinion I will stop writing down* — **it is the gap that would stop the market note in about four months.** **A gap with a consequence gets practised; a gap without one gets mentioned once a year.**',
  '⚠ **Then write the exercise and the person.** ⚠ **The exercise: *one paragraph a month that begins I may be wrong about this.*** ⚠ **The person: somebody who will read them and say which ones they would have ignored.**',
  '⚠ **And keep the exercise small and on purpose.** ⚠ *Not the whole call — the first two minutes, unwritten, for a month.* **A gap practised in whole-sized pieces is practised twice.**',
  '**Practise:** Write your own gap as *I can … but I cannot …*, then the exercise, then the person. ⚠ No *unfortunately* and no *very*.',
  '**Useful phrases:**  I can … but I cannot …  ·  I cannot yet …  ·  I have never had to …  ·  what it would cost is  ·  the exercise is  ·  and the person is',
  '**Pronunciation – the gap without apology and without drama.** 🔊 **Track 24.8** Listen: _I can write a letter that disagrees with a customer, and I cannot write one that disagrees with an auditor._ ⚠ **One sentence, level, no pause before *cannot*, and no fall at the end.** **A pause makes it a confession; a flat line makes it a specification.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a verdict; B turns it into a gap with an exercise. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'My English is not very good at __________.'],
  ['B', '⚠ **That cannot be practised.** What can you do, and what can you not?'],
  ['A', '⚠ I can __________ and I cannot __________.'],
  ['B', '⚠ And what would that cost?'],
  ['A', '__________.'],
  ['B', '⚠ **Then the exercise is __________** — ⚠ **and small: not __________ but __________.** And the person?'],
  ['A', '__________, who will __________.'],
]));
out.push(table(['Role card 1 — the two gaps', 'Role card 2 — small and on purpose'], [[
  'Nour: ⚠ **I can write a letter that disagrees with a customer and I cannot write one that disagrees with an auditor.** Cost: ⚠ **the market note stops in about four months.** Exercise: one paragraph a month beginning *I may be wrong about this*. Person: Mr Ayoub. ⚠ **Lina: nothing on the telephone unwritten — the first two minutes, for a month.**',
  'A proposes an exercise that is the whole task: *I will do all my calls unwritten.* ⚠ B\'s job is to cut it to a piece that will survive a bad week: ⚠ **two minutes, one paragraph, one call a day.** ⚠ **A gap practised in whole-sized pieces is practised twice** — and then abandoned.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the gap as *I can … but I cannot …*, the cost, the exercise and the person. ⚠ Then say whether the exercise would survive a bad week.'));
out.push(PHRASE_CARD(['I can … but I cannot …', 'I cannot yet', 'I have never had to', 'what it would cost', 'the exercise is', 'and the person is']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **three** gaps of your own, with the cost, the exercise and the person.'));
out.push(table(['I can … but I cannot …', 'What it would cost', 'The exercise, small', 'The person'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.1, 1.5, 1.7, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I can _______ and I cannot _______. What it would cost is _______. The exercise is _______, and the person is _______._'));
out.push(p('**Listener task:** count the gaps in the room that have a situation in them. ⚠ Then count the exercises that would survive a bad week.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I need to improve my English_ and an exercise with no person attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT I CANNOT YET DO. 31 August. N. Mansour. ⚠ Four gaps, with what each would cost, the exercise, and the person.**',
  table(['I can … but I cannot …', 'What it would cost', 'The exercise', 'The person'], [
    ['⚠ **I can write a letter that disagrees with a customer; I cannot write one that disagrees with an auditor.**', '⚠ **the market note, in about four months. An opinion I cannot defend upward is one I will stop writing.**', '⚠ **one paragraph a month beginning *I may be wrong about this***', '⚠ **Mr Ayoub, who will say which he would have ignored**'],
    ['I can take a complaint on the telephone; I cannot refuse one on the telephone without writing it first.', 'the thing refused in writing a day late is read as a holding reply', 'refuse one small thing a week, on the call, in two sentences', 'Lina, who listens and writes down what I said'],
    ['I can read a contract; I cannot read one fast enough to read it while somebody waits.', '⚠ **I sign nothing in a room, which has cost two afternoons this year**', '⚠ **read one clause of the Tannous terms aloud each morning, timed**', 'nobody — this one is mine alone'],
    ['⚠ **I have never had to chair a meeting in English.**', '⚠ **unknown, and that is the honest answer**', '⚠ **chair the Thursday handover in English once a month**', 'the four people in it'],
  ], [2.6, 2.1, 2.1, 1.5]),
  '⚠ **Four gaps and not one of them is a word I do not know.** ⚠ **Every one is a situation**: upward in writing, refusing on a call, reading at somebody\'s speed, and chairing. **Nothing on this page could be fixed by a vocabulary list.**',
  '⚠ **The third has no person and says so.** ⚠ **Reading speed is practised alone and pretending otherwise would have given me a fourth person to let down.** ⚠ **An exercise with a person is better where a person helps and worse where one does not.**',
  '⚠ **And the fourth cost is *unknown*, which is the honest answer.** ⚠ **I have never chaired a meeting in English, so I do not know what it would cost me not to be able to** — and writing *unknown* is what will make me find out, ⚠ **because the exercise is now once a month and in four months I shall know.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do all four gaps have in common?'));
out.push(item('2', 'Why has the third no person?'));
out.push(item('3', 'Why is one cost written as *unknown*?'));
out.push(box('Writer\'s box', [
  '**What I cannot yet do — four parts:** **a table: *I can … but I cannot … · what it would cost · the exercise · the person*** → ⚠ **what the gaps have in common** → ⚠ **the gap with no person** → ⚠ **the cost that is honestly unknown.**',
  '⚠ **Every gap is a situation and not a word.** ⚠ *Upward in writing, refusing on a call, reading at somebody\'s speed, chairing.* **Nothing on the page should be fixable by a vocabulary list** — and if one is, it is not a gap, it is a word to look up.',
  '⚠ **Write the cost, in your own work, with a figure or a period.** ⚠ *The market note, in about four months* · *two afternoons this year.* **A gap with a consequence gets practised**; one without gets mentioned once a year.',
  '⚠ **Keep the exercise small enough to survive a bad week.** ⚠ *One paragraph a month · one small refusal a week · one clause each morning, timed.* **Not the whole task.**',
  '⚠ **Name the person, and say *nobody* where nobody helps.** ⚠ *Reading speed is practised alone, and pretending otherwise would have given me a fourth person to let down.*',
  '⚠ **And write *unknown* where the cost is unknown.** ⚠ *I have never chaired a meeting, so I do not know what it costs me not to be able to* — **and the exercise is what will find out.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I cannot yet do* (**60 words or more**). Use the frame.'));
out.push(p('**WHAT I CANNOT YET DO. ______________. ______________. ⚠ ______________ gaps, with what each would cost, the exercise, and the person.**   ⚠ **I can ______________; I cannot ______________.** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   I can ______________; I cannot ______________. | ______________ | ______________ | ______________   I can ______________; I cannot ______________. | ⚠ **______________** | ⚠ **______________** | ⚠ **nobody — this one is mine alone**   ⚠ **I have never had to ______________.** | ⚠ **unknown, and that is the honest answer** | ⚠ **______________** | ______________   ⚠ **______________ gaps and not one of them is a word I do not know.** ⚠ **Every one is a situation**: ______________. **Nothing here could be fixed by ______________.**   ⚠ **The ______________ has no person and says so.** ______________.   ⚠ **And one cost is *unknown*, which is the honest answer.** ______________, **and the exercise is what will find out.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person named in one of their exercises** — then ask one question: **what exactly do you want me to do?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every gap a situation, not a word', ''],
  ['A cost with a figure or a period', ''],
  ['An exercise small enough for a bad week', ''],
  ['A person named, or *nobody* where nobody helps', ''],
  ['*Unknown* where the cost is unknown', ''],
  ['No *unfortunately* and no *very*', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their hardest gap. ⚠ **The class says nothing about it at all** — and then says whether the exercise is small enough.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your own hardest gap in full (**140 to 180 words**): what you can do, what you cannot, what it has already cost you, the exercise, the person, and how you will know in six months whether it has closed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the gap a situation rather than a verdict?_   ? _how will they know in six months?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the gap about rank, distance or speed rather than about words? Usually all three — ⚠ **and in none of them would a vocabulary list help at all.**'));
out.push(box('Homework', ['Write your final text. Then say your hardest gap out loud to the person you named in it, and write down what they said (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.5 =======================
out.push(pb());
out.push(h2('24.5  The next twelve months'));
out.push(p('**Function:** separating what is arranged from what you intend and what you hope for   ·   **Grammar:** plans with evidence — _arranged · intended · hoped for_   ·   **Pronunciation:** the three grades of plan said as three'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing about next year that is arranged, one you intend, and one you hope for. Say what the difference is.'));
out.push(p('**b**  Grade each: _the Tannous consignments to next May · writing the market note monthly · taking the examination in the spring._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about the three grades?   **A** they are the same as confirmed, claimed and not known   **B** they are the same three grades from Unit 23 applied to the future   **C** they are new'));
out.push(p('**b**  Listen again. **1** What makes something *arranged*? **2** Why must a hope stay a hope on the page?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  "The same three grades, pointing the other way"', [
  ['Nour', 'The plan for next year has eleven things on it and they are not all the same kind of thing.'],
  ['Mr Ayoub', '⚠ **Then grade them, the way you grade the board position.** ⚠ **It is the same three grades pointing the other way: arranged, intended, hoped for.**'],
  ['Nour', 'What makes something arranged?'],
  ['Mr Ayoub', '⚠ **Somebody else has it in writing and would be surprised if it did not happen.** ⚠ **The Tannous consignments to May are arranged — she has the terms and the date list.** ⚠ **My own intention to visit Beirut is not arranged, because nobody there knows about it.**'],
  ['Nour', 'And intended?'],
  ['Mr Ayoub', '⚠ **You have decided and it is in your own hands.** The market note is intended — ⚠ **nine times by January, and nobody else is required for it.**'],
  ['Nour', 'And the examination in the spring?'],
  ['Mr Ayoub', '⚠ **Hoped for, until there is a date and a fee paid.** ⚠ **And it must stay in that column on the page**, because the day it moves up without anything happening is the day the page becomes a wish list.'],
  ['Nour', 'It feels ungenerous to put my own examination under *hoped for*.'],
  ['Mr Ayoub', '⚠ **It is the kindest thing on the page.** ⚠ **A hope in the arranged column is a failure waiting to be recorded**; a hope in the hoped-for column is ⚠ **a thing with one visible step in front of it** — *find the date and the fee* — **and that step is the whole of what you can do about it this month.**'],
  ['Nour', 'So every hope should carry its next step.'],
  ['Mr Ayoub', '⚠ **Every hope carries one step and one date, and nothing else.** ⚠ **A hope with four steps is a project somebody has not started**, and a hope with none is a sentence in a drawer.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three grades of plan**',
  table(['Grade', 'What it takes', 'Example'], [
    ['⚠ **ARRANGED**', '⚠ **somebody else has it in writing and would be surprised if it did not happen**', 'the Tannous consignments to May'],
    ['⚠ **INTENDED**', '⚠ **you have decided and it is in your own hands**', 'the market note, nine times by January'],
    ['⚠ **HOPED FOR**', 'wanted, and depending on something not yet done', '⚠ **the examination in the spring — until there is a date and a fee paid**'],
    ['⚠ **every hope**', '⚠ **one step and one date, and nothing else**', '*find the date and the fee, by 15 September*'],
    ['⚠ **the danger**', '⚠ **a hope in the arranged column**', 'a failure waiting to be recorded'],
  ], [1.4, 2.8, 2]),
  '⚠ **The same three grades as the market note, pointing the other way.** **Arranged · intended · hoped for** — and ⚠ **nothing moves up without something happening.**',
  '⚠ **Arranged means somebody else has it in writing and would be surprised if it did not happen.** ⚠ *My own intention to visit Beirut is not arranged, because nobody there knows about it.* **A decision in your head is never arranged, however firm.**',
  '⚠ **Intended means you have decided and nobody else is required.** ⚠ **Give it a count** — *nine times by January* — **and it belongs here honestly.**',
  '⚠ **A hope in the hoped-for column is the kindest thing on the page**, because ⚠ **it becomes a thing with one visible step in front of it** — and a hope in the arranged column is *a failure waiting to be recorded.*',
  '⚠ **Every hope carries one step and one date, and nothing else.** ⚠ **A hope with four steps is a project somebody has not started; a hope with none is a sentence in a drawer.**',
  '**Practise:** Grade five things about your next year. ⚠ Then give every hope one step and one date.',
  '**Useful phrases:**  arranged · intended · hoped for  ·  somebody else has it in writing  ·  nobody else is required  ·  until there is a date and a fee  ·  one step and one date  ·  a hope in the arranged column',
  '**Pronunciation – the three grades said as three.** 🔊 **Track 24.10** Listen: _arranged. // intended. // hoped for._ ⚠ **Three separate words with a full stop in each, and the third no quieter than the first two.** **Said quietly, *hoped for* sounds like an admission** — and it is a grade, not an apology. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A lists next year; B grades it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Next year I am going to __________, __________ and __________.'],
  ['B', '⚠ Grade them. Who else has __________ in writing?'],
  ['A', '__________.'],
  ['B', '⚠ Then that one is ______________. And __________ — is anybody else required?'],
  ['A', 'No.'],
  ['B', '⚠ **Then it is intended, and it needs a count.** And __________?'],
  ['A', '⚠ Hoped for, until __________.'],
  ['B', '⚠ **Then one step and one date, and nothing else.**'],
]));
out.push(table(['Role card 1 — eleven things, three grades', 'Role card 2 — the hope with four steps'], [[
  '⚠ **Arranged: the Tannous consignments to May — she has the terms and the date list.** ⚠ **Intended: the market note, nine times by January, nobody else required.** ⚠ **Hoped for: the examination in the spring, until there is a date and a fee paid** — and the step is *find the date and the fee, by 15 September.*',
  'A has a hope with four steps attached. ⚠ B\'s job is to keep the first and strike out the other three: ⚠ **a hope with four steps is a project somebody has not started.** ⚠ **One step and one date** — and then B asks when A will look at the page again.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three grades with their items. ⚠ Then write the one step and one date behind each hope.'));
out.push(PHRASE_CARD(['arranged · intended · hoped for', 'somebody else has it in writing', 'nobody else is required', 'until there is a date and a fee', 'one step and one date', 'a hope with four steps']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **six** things about your next twelve months. Grade each, and give every hope one step and one date.'));
out.push(table(['The thing', 'Grade', 'Who else is involved', 'The one step, and its date'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.9, 0.9, 1.3, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is arranged, because _______ has it in writing. _______ is intended, _______ times by _______. _______ is hoped for, and the one step is _______ by _______._'));
out.push(p('**Listener task:** count the items in the room graded *arranged* where nobody else has anything in writing. ⚠ Then count the hopes with no step at all.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a decision in somebody\'s head graded *arranged*, and a hope with no date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE NEXT TWELVE MONTHS, GRADED. 31 August. N. Mansour. ⚠ Eleven things. Three arranged, four intended, four hoped for.**',
  table(['Grade', 'The thing', 'Who else has it, or the one step'], [
    ['⚠ **ARRANGED**', 'the Tannous consignments to 30 April', '⚠ **she has the agreed terms of 28 April and five date lists**'],
    ['**ARRANGED**', 'the night marking, two men from 1 October', '⚠ **both have written offers; one has given notice to a plastics works**'],
    ['**ARRANGED**', 'Lina confirmed in post from 1 July', 'her letter, and the payroll'],
    ['**INTENDED**', '⚠ **the market note, nine times by January**', 'nobody else required; the count is on each note'],
    ['**INTENDED**', 'a first-off on every new job', 'the tally is in the front of the file'],
    ['**INTENDED**', 'the gate-sheet review, twenty times by January', '⚠ **written in the gate book, where the sheets are**'],
    ['**INTENDED**', '⚠ **one paragraph a month beginning *I may be wrong about this***', 'Mr Ayoub reads them'],
    ['**HOPED FOR**', '⚠ **the examination in the spring**', '⚠ **one step: find the date and the fee, by 15 September**'],
    ['**HOPED FOR**', 'a second export customer', '⚠ **one step: ask Ms Tannous whether she will give our name to anybody, in the January call**'],
    ['**HOPED FOR**', 'the heavy brown question settled', 'one step: two calls, Monday'],
    ['**HOPED FOR**', '⚠ **a visit to Beirut**', '⚠ **one step: say so to Ms Tannous. Nobody there knows I want to come.**'],
  ], [1.3, 2.4, 2.9]),
  '⚠ **Three arranged, four intended, four hoped for — and the proportions are the honest part.** ⚠ **A plan that is all *arranged* is a plan written by somebody who has not asked who else is involved**, and a plan that is all *hoped for* has not been started.',
  '⚠ **The last line is the one I nearly did not write.** ⚠ *A visit to Beirut. One step: say so to Ms Tannous. Nobody there knows I want to come.* ⚠ **It has been in my head since January and it has never left my head**, and the step is one sentence in a telephone call I shall make anyway.',
  '⚠ **And every intended item carries a count and a place.** ⚠ *Nine by January, on each note. Twenty by January, in the gate book. One a month, read by Mr Ayoub.* ⚠ **An intention with no count is a frequency, which is 24.3** — and three of these four failed last year as frequencies.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do the proportions tell you?'));
out.push(item('2', 'Which line was nearly not written, and what is its step?'));
out.push(item('3', 'What does every intended item carry?'));
out.push(box('Writer\'s box', [
  '**The next twelve months — four parts:** **the counts in the heading** → **a table: *grade · the thing · who else has it, or the one step*** → ⚠ **what the proportions tell you** → ⚠ **the line you nearly did not write, and the count on every intention.**',
  '⚠ **Put the counts in the heading.** ⚠ *Eleven things. Three arranged, four intended, four hoped for.* **The proportions are read before the items**, and they are the fastest honest summary of a year.',
  '⚠ **Make the third column do two jobs: who else has it, or the one step.** ⚠ *She has the agreed terms and five date lists* · *one step: find the date and the fee, by 15 September.* **Arranged needs a holder; hoped for needs a step.**',
  '⚠ **Say what the proportions mean.** ⚠ *A plan that is all *arranged* was written by somebody who has not asked who else is involved; a plan that is all *hoped for* has not been started.*',
  '⚠ **Write the line you nearly did not write.** ⚠ *Nobody there knows I want to come.* **A hope that has never left your head has never had its one step taken** — and the step is usually a sentence in a conversation you were going to have anyway.',
  '⚠ **And give every intention a count and a place.** ⚠ *Nine by January, on each note.* **An intention with no count is a frequency** — and three of these four failed last year as frequencies.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the next twelve months, graded* (**60 words or more**). Use the frame.'));
out.push(p('**THE NEXT TWELVE MONTHS, GRADED. ______________. ______________. ⚠ ______________ things. ______________ arranged, ______________ intended, ______________ hoped for.**   ⚠ **ARRANGED** | ______________ | ⚠ **______________ has ______________**   **ARRANGED** | ______________ | ______________   **INTENDED** | ⚠ **______________, ______________ times by ______________** | ______________; the count is ______________   **INTENDED** | ______________ | ⚠ **______________, where ______________**   **HOPED FOR** | ⚠ **______________** | ⚠ **one step: ______________, by ______________**   **HOPED FOR** | ⚠ **______________** | ⚠ **one step: ______________. ______________ knows ______________.**   ⚠ **______________ arranged, ______________ intended, ______________ hoped for — and the proportions are the honest part.** ⚠ **A plan that is all arranged ______________**, and a plan that is all hoped for ______________.   ⚠ **The line I nearly did not write.** ______________.   ⚠ **And every intended item carries a count and a place.** ⚠ **An intention with no count is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **who else has this in writing?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the heading', ''],
  ['A holder for every *arranged* item', ''],
  ['A count and a place for every *intended* item', ''],
  ['One step and one date for every hope', ''],
  ['What the proportions mean', ''],
  ['The line you nearly did not write', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the line they nearly did not write. ⚠ The class says what the one step is, and whether it costs anything.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your next twelve months in full (**140 to 180 words**): the counts in the heading, each item graded with its holder or its one step, what the proportions mean, and the hope you have never said out loud.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every *arranged* item have a holder?_   ? _which hope has never been said out loud, and what is its one step?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there a hope whose one step is a single sentence to one person? Usually all three — ⚠ **and in all three it has been in the writer\'s head for more than six months.**'));
out.push(box('Homework', ['Write your final text. Then take the hope you have never said out loud and take its one step this week. Write down the date and what happened (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.6 =======================
out.push(pb());
out.push(h2('24.6  Closing well, and the letter'));
out.push(p('**Function:** closing a course, and writing to yourself   ·   **Grammar:** the letter to your B2 self   ·   **Pronunciation:** reading your own letter aloud once and then sealing it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you believed about your own English a year ago that is no longer true. Say what changed it.'));
out.push(p('**b**  Which belongs in a letter to yourself? _congratulations · what you were afraid of in August · a list of what you have learned · one thing you want to be told in four months_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say goes in the letter?   **A** what she has learned   **B** what she was afraid of, and the thing she wants to be told in four months   **C** her plans'));
out.push(p('**b**  Listen again. **1** Why not a list of achievements? **2** What is the one thing she wants to be told?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  "Write what you are afraid of, not what you have done"', [
  ['Lina', 'What goes in a letter to yourself? I have written a list of everything I have learned and it reads like a report.'],
  ['Nour', '⚠ **Because it is a report, and in four months you will not need one.** ⚠ **You will know what you learned. What you will have forgotten is what it felt like not to know it.**'],
  ['Lina', 'So what do I write?'],
  ['Nour', '⚠ **Write what you are afraid of this week, in one paragraph, with no softening.** ⚠ **And then one thing you want to be told in four months, by yourself, when you open it.**'],
  ['Lina', 'What are you afraid of?'],
  ['Nour', '⚠ **That the market note stops in about four months** — and the paragraph says exactly that, with the reason, which is that I cannot defend an opinion upward in writing yet. ⚠ **If I open the letter in January and the note has stopped, I shall not be able to pretend I was surprised.**'],
  ['Lina', 'That is a hard thing to leave for yourself.'],
  ['Nour', '⚠ **It is the only useful thing.** A list of achievements read in January is pleasant and changes nothing; ⚠ **a sentence that says *you were afraid of this in August and here you are* changes a week.**'],
  ['Lina', 'And the thing you want to be told?'],
  ['Nour', '⚠ ***Count the notes before you read the rest of this letter.*** ⚠ **An instruction and not a wish**, so that the letter does something in the first ten seconds.'],
  ['Lina', 'Mine would be: count how many calls you began without writing them first.'],
  ['Nour', '⚠ **Then write it as the first line and not the last**, because by the time anybody reaches the end of a letter from themselves they are already arguing with it.'],
  ['Lina', 'And then we seal them.'],
  ['Nour', '⚠ **Seal them, write the date on the outside, and give them to your teacher.** ⚠ **They are opened at B2 Unit 1, which is three or four months away** — and the sealing is the part that makes the honesty possible.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The letter to your B2 self**',
  table(['', 'What goes in it'], [
    ['⚠ **the first line**', '⚠ **an instruction to carry out before reading the rest** — *count the notes first*'],
    ['⚠ **one paragraph**', '⚠ **what you are afraid of this week, with no softening and with the reason**'],
    ['**one gap**', 'the hardest one from 24.4, with its exercise and its person'],
    ['**one count**', 'the counted future perfect from 24.3, so that you can check it'],
    ['~~a list of what you have learned~~', '⚠ **in four months you will know what you learned. You will have forgotten what it felt like not to know it.**'],
  ], [1.6, 4.3]),
  '⚠ **Write what you are afraid of, not what you have done.** ⚠ **A list of achievements read in January is pleasant and changes nothing; a sentence that says *you were afraid of this in August and here you are* changes a week.**',
  '⚠ **Put an instruction in the first line.** ⚠ ***Count the notes before you read the rest of this letter.*** **By the time anybody reaches the end of a letter from themselves they are already arguing with it**, so the instruction goes first.',
  '⚠ **No softening in the fear paragraph.** **No *perhaps*, no *a little*, no *I may be being pessimistic*.** ⚠ **A hedged fear cannot be checked against what happened**, which is the only thing the letter is for.',
  '⚠ **Carry the count forward.** *Nine notes by January.* ⚠ **The letter is where the count is checked**, and that is what makes it a document rather than a sentiment.',
  '⚠ **And seal it, date the outside, and hand it over.** ⚠ **The sealing is the part that makes the honesty possible** — and it is opened at B2 Unit 1, three or four months away.',
  '**Practise:** Write your first line as an instruction, and your fear paragraph with every hedge removed.',
  '**Useful phrases:**  count the notes before you read this  ·  what I am afraid of is  ·  and the reason is  ·  by January I will have  ·  you were afraid of this in August  ·  sealed, and dated on the outside',
  '**Pronunciation – reading your own letter aloud once.** 🔊 **Track 24.12** Listen to a fear paragraph read aloud: ⚠ **level, unhurried, and no fall at the end of the sentence that names the fear.** **Read it aloud once before you seal it, and cut anything you softened while reading.** Repeat the first line and the fear.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a letter of achievements; B finds the letter underneath it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have written a list of everything I have learned and ⚠ **it reads like a report.**'],
  ['B', '⚠ **Because it is one, and in four months you will not need one.** ⚠ **You will know what you learned. What you will have forgotten is __________.**'],
  ['A', 'So what do I write?'],
  ['B', '⚠ **What you are afraid of this week, in one paragraph, with no softening.** And then __________.'],
  ['A', 'What are you afraid of?'],
  ['B', '⚠ **That __________** — and the reason, which is __________.'],
  ['A', 'And the first line?'],
  ['B', '⚠ **An instruction: *__________*.**'],
]));
out.push(table(['Role card 1 — the two letters', 'Role card 2 — cut every hedge'], [[
  '⚠ **Nour\'s fear: that the market note stops in about four months, because she cannot yet defend an opinion upward in writing.** ⚠ **Her first line: *count the notes before you read the rest of this letter.*** ⚠ **Lina\'s: *count how many calls you began without writing them first.***',
  'A reads their fear paragraph aloud. ⚠ B\'s job is to strike out every hedge: **perhaps, a little, I may be being pessimistic, probably, in some ways.** ⚠ **A hedged fear cannot be checked against what happened** — and then B reads the paragraph back without them, **and A hears what they actually meant.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the first line as an instruction and the fear in one sentence. ⚠ Then count the hedges that were cut.'));
out.push(PHRASE_CARD(['count the notes before you read this', 'what I am afraid of is', 'and the reason is', 'by January I will have', 'you were afraid of this in August', 'sealed and dated']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draft the four parts of your letter. Write the first line as an instruction and the fear with no hedges.'));
out.push(table(['', 'What I have written'], [
  ['⚠ **The first line — an instruction**', ''],
  ['⚠ **What I am afraid of, and the reason**', ''],
  ['My hardest gap, with its exercise and person', ''],
  ['My count, to be checked when I open this', ''],
  ['The date on the outside', ''],
], [2.4, 3.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class only your first line:  _______. Then say how many hedges you cut from the fear paragraph.'));
out.push(p('**Listener task:** count the first lines in the room that are instructions rather than wishes. ⚠ Then count the fears that still carry a hedge.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I hope I will have improved_ as a first line, and a fear with _perhaps_ in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO MYSELF, AT B2 UNIT 1. Written 31 August. ⚠ Sealed. To be opened at B2 Unit 1.**',
  '⚠ **Before you read the rest of this, count the market notes in the file and write the number here: ______**',
  '⚠ **What I am afraid of.** That the market note will have stopped. ⚠ **The reason is not time: it is that I cannot yet write a paragraph that disagrees with Mr Attar**, and the note is an opinion with my name on it. ⚠ **If I cannot defend it upward, I shall stop writing it, and I shall tell myself it was because of the export work.** ⚠ **It will not be because of the export work.**',
  '⚠ **My hardest gap, as I wrote it in August.** *I can write a letter that disagrees with a customer; I cannot write one that disagrees with an auditor.* The exercise was one paragraph a month beginning *I may be wrong about this*, and the person was Mr Ayoub. ⚠ **Count those too. There should be four or five by now.**',
  '**My count.** By the end of January I will have written the note nine times. ⚠ **Four of nine when this was written.**',
  '⚠ **One more thing, which is not about English.** In August I had never said out loud that I want to go to Beirut, ⚠ **and the only step was one sentence to Ms Tannous in a telephone call I was going to make anyway.** ⚠ **If the sentence is still unsaid, that is the thing to do this week, and it costs nothing, and it has cost nothing for eight months.**',
  '**N. Mansour, 31 August.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the first line ask the reader to do, and why first?'));
out.push(item('2', 'What excuse does the writer refuse in advance?'));
out.push(item('3', 'What is the one thing in the letter that is not about English?'));
out.push(box('Writer\'s box', [
  '**The letter to your B2 self — four parts:** ⚠ **an instruction in the first line, with a blank to fill in** → ⚠ **what you are afraid of, with the reason and the excuse refused in advance** → **your hardest gap as you wrote it, with its exercise to be counted** → **your count, and one thing that is not about English.**',
  '⚠ **Leave a blank for the reader to write in.** ⚠ *Count the market notes and write the number here: ______* **A letter that makes the reader write before reading is a letter that gets read**, and the number is the whole audit.',
  '⚠ **Refuse the excuse in advance.** ⚠ *I shall tell myself it was because of the export work. It will not be because of the export work.* **You know now which excuse you will use** — and writing it down is the only way to take it away from yourself.',
  '⚠ **Quote your gap in the words you used.** **In four months you will have rewritten it in your head into something more flattering**, and the quotation prevents that.',
  '⚠ **Carry the count and its current state.** *Four of nine when this was written.* ⚠ **The letter is where the count is checked.**',
  '⚠ **And include one thing that is not about English.** ⚠ *It costs nothing, and it has cost nothing for eight months.* **A course is part of a life**, and the sentence that has gone unsaid for eight months is the one the letter should name.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your letter to your B2 self (**60 words or more**). Use the frame.'));
out.push(p('**TO MYSELF, AT B2 UNIT 1. Written ______________. ⚠ Sealed. To be opened at B2 Unit 1.**   ⚠ **Before you read the rest of this, ______________ and write the number here: ______**   ⚠ **What I am afraid of.** That ______________. ⚠ **The reason is not ______________: it is that ______________.** ⚠ **If ______________, I shall ______________, and I shall tell myself it was because of ______________.** ⚠ **It will not be because of ______________.**   ⚠ **My hardest gap, as I wrote it in ______________.** *______________.* The exercise was ______________ and the person was ______________. ⚠ **Count those too. There should be ______________ by now.**   **My count.** By ______________ I will have ______________ ______________ times. ⚠ **______________ of ______________ when this was written.**   ⚠ **One more thing, which is not about English.** ______________. ⚠ **If ______________, that is the thing to do this week.**   **______________, ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books **only if you want to**. Name the reader you are being — **be yourself in four months, in a bad week** — then ask one question: **what are you going to make me do before I read this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An instruction in the first line, with a blank', ''],
  ['The fear, with no hedges', ''],
  ['The excuse refused in advance', ''],
  ['The gap quoted in the words you used', ''],
  ['The count, with its current state', ''],
  ['One thing that is not about English', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('⚠ **Nobody reads their letter aloud.** Two or three students read only their **first line**. The class says whether it is an instruction.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your letter in full (**140 to 180 words**): the instruction with its blank, the fear with its reason and the excuse refused, the gap quoted, the count, and the one thing that is not about English. ⚠ **Then seal it, write the date on the outside, and hand it in.**'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('⚠ **No swapping for this one.** Write your own slip and seal it with the letter:  ★ _the hedge I cut_ ______   ✓ _the excuse I refused_ ______   ? _the sentence I have not said for_ ______ _months_'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Nothing is shared.** The class says only how many letters are sealed and dated, and the teacher writes the number on the envelope that holds them all. ⚠ **They are opened at B2 Unit 1.**'));
out.push(box('Homework', ['Take the one step behind your largest hope — the sentence to one person that has gone unsaid — and take it this week. Then write what happened, date it, and keep it to put beside the letter when it is opened (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 24.7 =======================
out.push(pb());
out.push(h2('24.7  Review & Mediate: what the certificate says, and the first fortnight'));
out.push(p('**Function:** explaining what a course leaves behind   ·   **Review:** the tense map · the question with the deadline · the counted habit · the gap · the three grades of plan · the letter'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the tense map for, and what is the test for the present perfect?',
  '**2** Why is *are you marking tonight?* no use, and which question is?',
  '**3** Why can *every month* only be regretted?',
  '**4** What makes a gap usable rather than a verdict?',
  '**5** What does *arranged* require, and what does every hope carry?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Lina find out about the eleven who did the A2 course?   **A** the best marks still write English   **B** the three who still write are the three whose documents somebody else needs   **C** none of them writes anything'));
out.push(p('**b**  Listen again. **1** What happened to the highest mark of the eleven? **2** What does Nour say the certificate is a statement about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  "Three of eleven, and not the three you would pick"', [
  ['Lina', 'May I tell you something I found out? ⚠ **Eleven people here did the A2 course two years ago. Three of them still write anything in English at all.**'],
  ['Nour', 'Which three?'],
  ['Lina', 'Hala, Fadi and Bassel. ⚠ **And they are not the three with the best marks.** ⚠ **The highest mark of the eleven was Mr Haddad\'s cousin in the second store, and he has written nothing in two years.**'],
  ['Nour', 'What do the three have in common?'],
  ['Lina', '⚠ **Somebody is waiting for a document from each of them.** Hala\'s price labels, Fadi\'s gate sheet, Bassel\'s carton counts. ⚠ **If they stop, somebody notices within a week.**'],
  ['Nour', 'And the other eight?'],
  ['Lina', '⚠ **Nothing they wrote was needed by anybody.** They wrote well in the course and then went back to work where the English was optional, ⚠ **and optional English stops in about a fortnight.**'],
  ['Nour', 'A fortnight.'],
  ['Lina', '⚠ **I asked all eight when they last wrote something.** Six could not remember. ⚠ **Two could, and both said it was within two weeks of the last lesson** — a letter they wrote because they still felt like somebody who writes letters.'],
  ['Nour', 'So the first fortnight decides it.'],
  ['Lina', '⚠ **The first fortnight, and not the marks.** ⚠ **And the certificate says nothing about any of this: it says what somebody could do on one morning in March.**'],
  ['Nour', '⚠ **Which is what a certificate is for, and it is read as something else.** An employer reads it as a statement about a person; ⚠ **it is a statement about a day.** ⚠ **The statement about the person is whether anybody is waiting for a document from them next Tuesday.**'],
  ['Lina', 'Then the last thing in the course should be arranging a reader.'],
  ['Nour', '⚠ **It should be the last thing in every course and it is in none of them.** ⚠ **One document, one reader, one date in the next fortnight** — and that is worth more than everything else on the certificate.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the certificate, the marks, and the first fortnight**',
  table(['', 'What it tells you'], [
    ['**the certificate**', '⚠ **what somebody could do on one morning in March**'],
    ['**the marks**', '⚠ **nothing about what survives.** The highest of eleven has written nothing in two years'],
    ['⚠ **the three who still write**', '⚠ **somebody is waiting for a document from each of them, and would notice within a week**'],
    ['⚠ **the other eight**', '⚠ **nothing they wrote was needed by anybody. Optional English stops in about a fortnight.**'],
    ['⚠ **the last thing a course should do**', '⚠ **one document, one reader, one date in the next fortnight**'],
  ], [2.1, 3.8]),
  '⚠ **A certificate is read as a statement about a person and it is a statement about a day.** ⚠ **The statement about the person is whether anybody is waiting for a document from them next Tuesday.**',
  '⚠ **Three of eleven, and not the three with the best marks.** ⚠ **What the three have in common is a reader who would notice within a week** — the price labels, the gate sheet, the carton counts.',
  '⚠ **Optional English stops in about a fortnight.** ⚠ *Six of the eight could not remember when they last wrote anything; two could, and both said within two weeks of the last lesson* — **a letter written because they still felt like somebody who writes letters.**',
  '⚠ **So the last thing in a course should be arranging a reader, and it is in none of them.** ⚠ **One document, one reader, one date in the next fortnight.**',
  '⚠ **And the reader does not have to want it.** ⚠ **They have to notice.** The gate sheet is read by somebody who would complain if it were blank, which is all that is required — *a reader who would be pleased is not a reader who would notice.*',
  '**Practise:** Name your document, your reader and your date. ⚠ Then say what would happen if you did not produce it.',
  '**Useful phrases:**  a statement about a day  ·  somebody is waiting for a document  ·  they would notice within a week  ·  optional English stops in a fortnight  ·  one document, one reader, one date  ·  a reader who would notice',
  '**Pronunciation – the sentence that names the real test.** 🔊 **Track 24.14** Listen: _the question is not what the certificate says; it is whether anybody is waiting for a document from you next Tuesday._ ⚠ **The second half slower, and *next Tuesday* as two stresses.** **A date in the mouth is harder to forget than a date on a page.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a course they have finished; B finds out what survived and why.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Eleven did the A2 course; ⚠ **three still write, and not the three with the best marks.** ⚠ **The three have a reader who would notice within a week.** ⚠ **The highest mark of the eleven has written nothing in two years**, and six of the eight cannot remember when they last wrote.',
  'Take a course of A\'s. ⚠ B asks two questions: ⚠ **what did you write in the first fortnight afterwards**, and ⚠ **who was waiting for it?** ⚠ **If the answer to the second is nobody, expect the answer to the first to be nothing** — and then ask what document could have had a reader.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write how many survived and what they had in common. ⚠ Then write your own document, reader and date.'));
out.push(PHRASE_CARD(['a statement about a day', 'somebody is waiting for it', 'they would notice in a week', 'optional English stops', 'one document, one reader, one date', 'a reader who would notice']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Arrange one document, one reader and one date each, in the next fortnight.'));
out.push(table(['The document', 'The reader', 'The date', 'What happens if it does not come'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.2, 0.9, 2.2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class your document, your reader and your date. This is the **twelfth** unit of this book, and the thing nobody writes down is this: **a certificate records what somebody could do on one morning, and is read by everybody afterwards as a statement about the person — while what actually decides whether the English survives is whether, in the fortnight after the last lesson, there is a document that somebody else is waiting for and would notice the absence of, which is why the best marks in a class routinely write nothing again and the middling marks whose gate sheet is read every day keep everything they learned.**'));
out.push(p('_My document is _______, my reader is _______, and the date is _______. If it does not come, _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a benchmark · to self-assess · a study plan · a target date · to consolidate · a measurable gain._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 4)', 10));
out.push(p('⚠ **This unit practises Part 4: right, wrong, or doesn\'t say.** Read the extract, then mark each statement **A** right, **B** wrong or **C** doesn\'t say.'));
out.push(box(null, [
  '**Extract from a note to the training file, 31 August.**',
  '_Eleven people here took the A2 course two years ago. Three of them still write in English: Hala Mourad, Fadi Saeed and Bassel Nassif. They are not the three who did best in the final test; the highest mark of the eleven belonged to somebody in the second store who has written nothing since. What the three have in common is that another person is waiting for a document from each of them every week and would notice if it did not arrive — price labels, the gate sheet, the carton counts. Of the other eight, six could not say when they last wrote anything in English. The remaining two both named something within two weeks of the last lesson. On the strength of this, the last session of the B1 course will be spent arranging one document, one reader and one date in the following fortnight for each person. The teacher will keep the list and ask in October._',
]));
[
  '**1**  Three of the eleven still write in English.   **A** right   **B** wrong   **C** doesn\'t say',
  '**2**  The three who still write had the best marks.   **A** right   **B** wrong   **C** doesn\'t say',
  '**3**  The person with the highest mark has left the company.   **A** right   **B** wrong   **C** doesn\'t say',
  '**4**  Six of the eight could not remember when they last wrote anything.   **A** right   **B** wrong   **C** doesn\'t say',
  '**5**  The two who could remember wrote within two weeks of the last lesson.   **A** right   **B** wrong   **C** doesn\'t say',
  '**6**  The B1 course will end with a test.   **A** right   **B** wrong   **C** doesn\'t say',
  '**7**  The teacher will follow the arrangements up in October.   **A** right   **B** wrong   **C** doesn\'t say',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: asking somebody to be the reader of a document you will write in the next fortnight.',
  'The shape: ⚠ **what the document is and what it is for** · **the date you will send it** · ⚠ **what you want them to do with it, in one line** · ⚠ **and that you will send it whether or not they reply.**',
  '⚠ **In eighty words the third part is what makes them a reader instead of a recipient.** ⚠ *Tell me one thing in it you would have asked about* — **one instruction, small enough to be done in two minutes.**',
  '⚠ **And the last clause protects the whole arrangement.** ⚠ *I shall send it on the 14th whether or not you have time to answer.* **A document that waits for permission is not sent**, and a reader who has not replied is still a reader who would notice.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write to the person you have chosen as your reader (**60 to 80 words**). Give ⚠ **what the document is and what it is for**, **the date**, ⚠ **one thing you want them to do with it**, and ⚠ **that you will send it anyway.**'));
out.push(p('______________, ⚠ **I am going to write ______________ and I should like you to be the person who reads it.** It is ______________. ⚠ **I shall send it on ______________.** ⚠ **All I want from you is ______________ — ______________.** ⚠ **And I shall send it on ______________ whether or not ______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the four points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the document is and what it is for', ''],
  ['The date', ''],
  ['⚠ One small thing for the reader to do', ''],
  ['⚠ That you will send it anyway', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your next twelve months in full (**140 to 180 words**): the counts in the heading, each item graded arranged, intended or hoped for with its holder or its one step, ⚠ **your counted habit from 24.3**, and ⚠ **the document, the reader and the date for the next fortnight.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then send the letter asking your reader, and write the date you sent it beside the document, the reader and the date on your own plan (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The reader must act on it. Write:   a) we sent the list on the 20th   b) we have sent the list   c) we were sending the list',
  '2  _By Friday we ___ ninety cartons._   a) will mark   b) will have marked   c) will be marking',
  '3  Which question can be planned against?   a) are you marking tonight?   b) did you mark on Tuesday?   c) will you have finished by Friday?',
  '4  _I am going to write it every month_ is ___.   a) a count   b) a frequency, which can only be regretted   c) an arrangement',
  '5  Which is a usable gap?   a) my English is not very good   b) I need to improve   c) I can write a letter that disagrees with a customer but not with an auditor',
  '6  Your decision, in your own hands, nobody else involved. That is ___.   a) arranged   b) intended   c) hoped for',
  '7  Every hope on a plan carries ___.   a) four steps   b) one step and one date   c) a reason',
  '8  What decides whether the English survives is ___.   a) the certificate   b) the marks   c) whether anybody is waiting for a document',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 24.15** Listen to the exchange. Complete the note.   Number who took the A2 course: ______   Number who still write: ______   What the three have in common: ______   The highest mark of the eleven: ______   What the certificate is a statement about: ______'));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Lina', 'Eleven people here did the A2 course two years ago. Three of them still write anything in English at all: Hala, Fadi and Bassel. And they are not the three with the best marks.'],
  ['Nour', 'Who had the best mark?'],
  ['Lina', 'Mr Haddad\'s cousin in the second store, and he has written nothing in two years.'],
  ['Nour', 'What do the three have in common?'],
  ['Lina', 'Somebody is waiting for a document from each of them every week and would notice within a week if it did not come. The price labels, the gate sheet, the carton counts. Of the other eight, nothing they wrote was needed by anybody, and optional English stops in about a fortnight.'],
  ['Nour', 'And the certificate says nothing about that.'],
  ['Lina', 'It says what somebody could do on one morning in March. An employer reads it as a statement about a person; it is a statement about a day.'],
]));
out.push(p('**C  Writing.** Write three lines of your plan for the next twelve months (**60 words or more**): one arranged item with its holder, one intended item with a count and a place, and one hope with its single step and date.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ choose between two tenses that are both correct, and say what each asks the reader to do',
  '☐ ask the same question in eight tenses and pick the one with the deadline in it',
  '☐ turn a frequency into a counted future perfect with one spare',
  '☐ name my own gap as a situation, with its cost, its exercise and its person',
  '☐ separate what is arranged, what I intend and what I hope for',
  '☐ write a letter to myself that makes me do something before I read it',
  '☐ arrange one document, one reader and one date in the next fortnight',
  '☐ write a tense count, a plan for a year, a gap page and the letter',
], C.lblue, C.navy));

// ---------- END OF BOOK 2, AND END OF B1 ----------
// ⚠ Series convention, from A2 unit24 and B1 Book 1 unit12: the end-of-book
// block runs on from the "I can…" box with no extra pb() and no h1, so the
// closing unit keeps the house figure of 8. The bound volume's page
// arithmetic depends on it.
out.push(sp());
out.push(box('End of Book 2 — what you have done', [
  '**Twelve units, eighty-four cycles, 360 more items of office English, and two written tests\' worth of practice.** In this book you have written a programme page, a forecast board, a post-mortem, a landed-cost comparison, a change note, a commitments register, a counted fault and a claim, a bench page for somebody working alone at night, a two-column negotiation page and the agreed terms, a self-appraisal a stranger could check, a market note, and a plan for a year. ⚠ **Those are the documents of somebody who runs the administration of a company that exports.**',
  '**And four things ran through all twelve units**, which are what Book 2 was actually teaching:',
  '⚠ **1 · Write for the reader who is not in the building.** Ms Tannous cannot telephone the warehouse; the night man cannot ask anybody; the stranger with an hour cannot ask you what you meant. **Every document in this book is tested by somebody who has no access to the writer.**',
  '⚠ **2 · Say what is not known.** Unit 14\'s *what my last forecast was wrong by*, Unit 20\'s *the fault that is in no step*, Unit 22\'s *what I have not counted*, Unit 23\'s third sentence, Unit 24\'s *unknown* in a cost column. **A page that states its own edges can be used; a page without edges can only be believed or doubted.**',
  '⚠ **3 · Put the number where the work is.** The line count on the bench page, the count on the market note, the tally in the front of the file, the *note 4 of 9*. **A control kept away from the work is a second thing to remember, and it will be forgotten.**',
  '⚠ **4 · Ask the person who does the work, and then ask who has never been asked.** Abu Yasser\'s two costs in 16.7, the claimant who cannot send an invoice in 19.7, the originating office in 20.7, the line that settled the negotiation in 21.7, the three lines nobody can fail in 22.7, the answers nobody wrote back in 23.7. ⚠ **Six of the twelve mediations in this book are the same finding: the useful fact is held by somebody nobody has asked.**',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ End of B1 — and the first fortnight', [
  '**Twenty-four units, a hundred and sixty-eight cycles, and 720 items of office English.** ⚠ **At A2 you learned to write the thing down. At B1 you have learned to write it for somebody who cannot ask you a question.**',
  '⚠ **What the certificate will say is what you could do on one morning.** ⚠ **What decides whether any of this survives is 24.7, and it is not the marks: it is whether, in the next fortnight, there is one document that one other person is waiting for and would notice the absence of.** **If you have not arranged that, go back to 24.7 and arrange it before you do anything else, including resting.**',
  '**And before B2.** ⚠ **Your letter is sealed and dated and it is opened at B2 Unit 1.** Between now and then: ⚠ **your counted habit, printed on the thing itself; your one small exercise against your hardest gap; and the one step behind the hope you have never said out loud** — which, if you are like most people who have reached the end of this book, **is one sentence to one person and has cost nothing for eight months.**',
  '⚠ **B2 begins where 23.6 and 21.7 left off**: you will be writing the documents that other people are held to, arguing a position upward in writing, and answering for things decided by people who have left. **Nothing becomes easier. The documents get read by more people, and more of them disagree with you.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
