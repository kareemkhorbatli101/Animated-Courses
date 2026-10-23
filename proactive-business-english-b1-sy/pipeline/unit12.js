// Proactive Business English B1 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a position paper · the recommendation · the balance of argument · on the one hand · on the other hand · on balance · a concession · to concede · to qualify a view · a dissenting view · consensus · a working majority · to canvass · to sound out · the sense of the meeting · to put it to the vote · to close a decision · to minute a decision · a standing position · a provisional position · to revisit · to reopen · a settled question · an open question · to be persuaded · to hold a view · to change a view · the strongest case against · the weakest point in my own case · where I stand';
const BACK_AT_B1 = 'position · team · quiet';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 12  Opinions, Agreement and the Decision'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  state a view when you are the junior person in the room',
  '**12.2**  agree with the half that is right',
  '**12.3**  concede the point that wins the argument',
  '**12.4**  bring in the person who knows and has not spoken',
  '**12.5**  close a decision, and write it down before the room empties',
  '**12.6**  write the balanced paragraph, and then take a position',
  '**12.7**  Review & Mediate: both sides, and where I stand',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The last unit of Book 1, and the one that decides whether the other eleven are used', [
  'Everything in this book produces something somebody has to decide about: a report, an options paper, a diagnosis, a set of terms. **This unit is about the four minutes at the end, in a room, when the decision is actually taken** — and about the two sentences afterwards that are the only reason anybody will know what was decided.',
  '⚠ **12.4 is the cycle to take seriously.** The person in the room who knows most about the thing being decided is very often the person who has not spoken, and they will not speak unless they are asked by name and asked about the thing they know. **That is not shyness and it is not a management problem: it is that nobody has told them which part of the question is theirs.**',
  '**And 12.3 is the one that will feel wrong.** Conceding the strongest point against you is how an argument gets won at B1 and above, and it feels like losing. ⚠ The reason it works is in the Language box and it is not about generosity: **a concession you make yourself cannot be used against you, and the person who would have made it has nothing left to say.**',
], C.lyellow, C.orange));

// ======================= CYCLE 12.1 =======================
out.push(pb());
out.push(h2('12.1  I would say, I take the view'));
out.push(p('**Function:** stating a view as the junior person   ·   **Grammar:** *I would say · I take the view · my own view is*   ·   **Pronunciation:** a view stated without a rise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a meeting where you had a view and did not give it. What stopped you?'));
out.push(p('**b**  Which would you act on? _I think maybe we should look at the van again. · My own view is that we should repair it, and the reason is the 1.8 million on the hire._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask Nour for?   **A** the figures   **B** her own view, separately from the paper   **C** a decision'));
out.push(p('**b**  Listen again. **1** What does he say about *I think maybe*? **2** What does he say a view needs to be worth hearing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  "What do you think, as opposed to what does the paper say?"', [
  ['Mr Ayoub', 'The paper gives three options. What do you think?'],
  ['Nour', 'I think maybe the repair is probably the best one, if we can afford it.'],
  ['Mr Ayoub', 'Say that again without *think maybe*, *probably* and *if we can afford it*.'],
  ['Nour', '…Repair it.'],
  ['Mr Ayoub', 'That is a view. Now give me the reason and nothing else.'],
  ['Nour', 'My own view is that we should repair it. The hire costs 1.8 million over three months to recover a loss of about 400,000 that has not grown since September, and the repair is 1.9 million once.'],
  ['Mr Ayoub', 'Good. And what was the *if we can afford it* for?'],
  ['Nour', 'In case you said no.'],
  ['Mr Ayoub', '⚠ Which it would not have prevented, and it would have made the view not worth having. **A view with an escape clause on it is a question wearing a statement\'s clothes, and I cannot agree or disagree with a question.**'],
  ['Nour', 'I am the junior person in the room.'],
  ['Mr Ayoub', 'You are, and that is the only reason I asked. The other three have told me what they think for twenty years and I know what they will say before they say it. ⚠ **The junior person in the room is the only one whose view I do not already have, which makes it the most valuable one there — and they are the only one who hedges it into nothing.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Stating a view — and what to take off it**',
  table(['Form', 'Register', 'Example'], [
    ['**My own view is that…**', 'the house form', '**My own view is that** we should repair it.'],
    ['**I would say…**', 'lighter, spoken', '**I would say** repair it.'],
    ['**I take the view that…**', 'formal, written', '**I take the view that** the hire is not worth it.'],
    ['⚠ **+ one reason, with a figure**', 'always', '…1.8 million to recover 400,000.'],
    ['⚠ what to take off', '—', '*I think maybe* · *probably* · *if we can afford it*'],
  ], [1.9, 1.3, 2.4]),
  '⚠ **A view with an escape clause on it is a question wearing a statement\'s clothes**, and nobody can agree or disagree with a question. ⚠ *If we can afford it* protects nothing — it does not prevent a no and it makes the view not worth having.',
  '⚠ **One reason, with a figure, and then stop.** Three reasons dilute; a reason without a number is an opinion about an opinion.',
  '⚠ **The junior person\'s view is the most valuable in the room**, because it is the only one nobody already has. ⚠ And it is the one most often hedged into nothing, which is why this cycle is first.',
  '⚠ **Distinguish the paper from your view.** A paper that gives three options has no view in it; being asked *what do you think* is a different question and should be answered as one.',
  '**Practise:** State a view in the house form with one reason and a figure, and take the hedges off. 1 the van 2 the fourth store room 3 the Ghouta day 4 a price review 5 taking on a second counter assistant',
  '**Useful phrases:**  My own view is that…  ·  I would say…  ·  I take the view that…  ·  and the reason is…  ·  not *I think maybe*',
  '**Pronunciation – a view stated without a rise.** 🔊 **Track 12.2** Listen: _my own view is that we should repair it_ — level, ending flat. ⚠ A rise at the end turns a view into a request for permission to have had it. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a hedged view; B strips it and asks for the reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'The paper gives __________ options. What do you think?'],
  ['A', 'I think maybe __________ is probably the best one, if __________.'],
  ['B', 'Say that again without *think maybe*, *probably* and *if*.'],
  ['A', '…__________.'],
  ['B', 'That is a view. Now the reason and nothing else.'],
  ['A', 'My own view is that __________. __________ costs __________ to recover __________.'],
  ['B', 'And what was the *if* for?'],
  ['A', 'In case you said no.'],
  ['B', '⚠ Which it would not have prevented.'],
]));
out.push(table(['Role card 1 — the fourth store room', 'Role card 2 — the second assistant'], [[
  'Three options: enter it on the system (3 days, 450,000), go back to paper for all four rooms (free), or nothing. A hedges. The view: enter it, because doing nothing is the only option whose cost rises while we think about it.',
  'A believes a second counter assistant is needed and has never said so, because it costs 650,000 a month. ⚠ The view with a figure attached: eleven unreturned calls in October and about 900,000 of trade — the cost of **not** having one is larger than the salary.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the view in the house form, the one reason and the figure. ⚠ Then write the hedge that was removed and say what it was protecting.'));
out.push(PHRASE_CARD(['My own view is that…', 'I would say…', 'I take the view that…', 'and the reason is…', 'not "I think maybe"', 'one reason, with a figure']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things at your work you have a view about. State each in the house form with one reason and a figure.'));
out.push(table(['My own view is that…', 'The one reason', 'The figure', 'The hedge I would have used'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.5, 0.8, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My own view is that _______, and the reason is _______ — _______. The hedge I would have put on it is _______._'));
out.push(p('**Listener task:** count the views in the room with no figure in them. ⚠ Then count the hedges, and notice that the hedge is nearly always longer than the reason.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am thinking that we should to repair it_ and _my own view is to repair it, if it is possible, maybe_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**Mr Ayoub — my own view on the van, as asked. 8 December. One page.**',
  '**My view.** Repair it, at 1.9 million, and not this month but in January.',
  '**The reason, and it is one reason.** The hire costs 1.8 million over three months to recover a loss of about 400,000 that happened once in August and has been flat since September. ⚠ **That is the whole of my argument** and I am not going to add the other three things I could say, because they are all smaller and they would make this one harder to find.',
  '**Why January and not now.** The repair quote holds for sixty days and the Ghouta change starts on the 8th. If we change the run and repair the van in the same fortnight and something goes wrong, we will not know which of the two caused it. ⚠ **One change at a time is worth more to me than a fortnight of van.**',
  '⚠ **The strongest thing against my view.** If the van is off the road in January as well, the 400,000 may not stay flat — it has been flat for three months with two customers at half their orders, and those two may simply leave. **I cannot put a figure on that and it is the one part of this I would want you to weigh against me.**',
  '**What I am not saying.** I am not saying the hire is a bad decision. It buys three months of certainty for 1.8 million, and if you take the view that the two customers are about to go, it is the right thing to do and my figures do not contradict you. ⚠ **We would be disagreeing about one thing only, which is whether those two will wait.**',
  '**And one thing about this note.** You asked me what I thought. ⚠ **The paper I sent on the 4th had three options and no view in it, deliberately, because that was a paper and this is an answer** — and I would rather they stayed two documents.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many reasons does the writer give, and why?'));
out.push(item('2', 'What is the strongest thing against her view, and what does she say about it?'));
out.push(item('3', 'What does she say she and Mr Ayoub would be disagreeing about?'));
out.push(box('Writer\'s box', [
  '**A note stating a view — six parts:** **the view, in one line** → ⚠ **one reason, and the refusal to add more** → the timing, with a reason → ⚠ **the strongest thing against your view** → what you are **not** saying → why this is a separate document from the paper.',
  '**Refuse to add your other arguments, out loud.** *I am not going to add the other three things I could say, because they are all smaller and they would make this one harder to find.*',
  '⚠ **Give the strongest point against yourself and say you cannot price it.** *I cannot put a figure on that and it is the one part of this I would want you to weigh against me.* ⚠ Nobody will weigh it harder than you have, and the paper is then trusted about the part you can price.',
  '⚠ **Name the single thing the disagreement is actually about.** *We would be disagreeing about one thing only, which is whether those two will wait.* ⚠ Most disagreements are about one fact wearing four arguments, and finding it is the whole of the skill.',
  '**Keep the paper and the view as two documents, and say why.** *That was a paper and this is an answer.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note stating your own view on something at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — my own view on ______________, as asked.**   **My view.** ______________.   **The reason, and it is one reason.** ______________. ⚠ That is the whole of my argument and I am not going to add ______________, because ______________.   **Why ______________ and not ______________.** ______________.   ⚠ **The strongest thing against my view.** ______________. **I cannot put a figure on that** and it is the part I would want you to weigh against me.   **What I am not saying.** I am not saying ______________. If you take the view that ______________, it is the right thing to do. ⚠ We would be disagreeing about one thing only, which is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says give the strongest point against yourself. Yours gives three points for and none against — what is the best argument the other way?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what is the single thing you and the writer would be disagreeing about?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The view in one line, with no hedge', ''],
  ['One reason, with a figure, and the refusal to add more', ''],
  ['The strongest thing against, and that it cannot be priced', ''],
  ['The single thing the disagreement is about', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *strongest thing against*. The class says which writer they would trust with a decision.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a view you have held at work for a long time and never stated (**100 to 140 words**). Say what it is, the one reason, the strongest thing against it, and what has stopped you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the one reason_   ✓ _the view stated without a hedge?_   ? _what has stopped them, and is it still true?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ What has stopped people? Rarely the fear of being wrong — usually that nobody has ever asked, and a view nobody asked for has to be volunteered, which is a different and harder act.'));
out.push(box('Homework', ['Write your final text. Then state one view at your work in the house form, with one reason and a figure and the strongest thing against it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.2 =======================
out.push(pb());
out.push(h2('12.2  Up to a point'));
out.push(p('**Function:** agreeing with the half that is right   ·   **Grammar:** *up to a point · I see that, but · that is true of…*   ·   **Pronunciation:** the stress that makes partial agreement real'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something a colleague says that is half right. Which half?'));
out.push(p('**b**  Which answer gets further? _That is not true. · That is true of the counter and not of the warehouse, and the counter is the smaller half._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about the gate count?   **A** that it is wrong   **B** that it is right in the morning and impossible after four   **C** that it should be stopped'));
out.push(p('**b**  Listen again. **1** Which half of his objection does Nour agree with? **2** What does she say about answering the whole of it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  "That is true of the afternoon"', [
  ['Abu Yasser', 'The gate count does not work. I have said so since September.'],
  ['Nour', 'It works between seven and four.'],
  ['Abu Yasser', 'And after four I am on my own with two lorries and I count what I can.'],
  ['Nour', 'Then we agree about the afternoon and we disagree about the morning, and I want to say which is which before anybody repeats the sentence *the gate count does not work*.'],
  ['Abu Yasser', 'Why does that matter?'],
  ['Nour', 'Because Mr Ayoub heard you say it last week and what he heard was that the control has failed. ⚠ If the sentence is *the count is unreliable after four*, that is a staffing decision about two hours a day. **If it is *the count does not work*, it is an argument about whether to keep the control at all, and you would lose that argument and we would both be worse off.**'],
  ['Abu Yasser', 'I would not lose it. The count is my own idea.'],
  ['Nour', 'It is, which is exactly why you should be the one who narrows it. ⚠ **A man arguing that his own control works in the morning is believed; a man arguing that it does not work is believed too, and about the wrong thing.**'],
  ['Abu Yasser', 'So: it works until four and after four it is one man and two lorries.'],
  ['Nour', 'And I agree with the second half completely, and I will say so in front of him, and the figure is about eleven loads a week after four. ⚠ **Agreeing with your afternoon costs me nothing and it is the only way the morning survives.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Partial agreement — agreeing with the half that is right**',
  table(['Form', 'Example'], [
    ['**That is true of…**', '**That is true of** the afternoon.'],
    ['**Up to a point.**', '**Up to a point** — and the point is four o\'clock.'],
    ['**I see that, but…**', '**I see that, but** it holds between seven and four.'],
    ['⚠ **naming both halves**', 'We agree about the afternoon and disagree about the morning.'],
    ['⚠ **the figure on the half you concede**', 'about eleven loads a week after four'],
  ], [2.1, 3.2]),
  '⚠ **Name both halves before anybody repeats the sentence.** *The count does not work* and *the count is unreliable after four* are two different claims: the first is an argument about abolishing a control and the second is a staffing decision about two hours a day.',
  '⚠ **Put a figure on the half you concede.** *About eleven loads a week after four.* ⚠ A concession without a figure sounds like politeness; with a figure it is a finding, and it makes the other half harder to attack.',
  '⚠ **The person best placed to narrow an overstated claim is the person who made it.** *A man arguing that his own control works in the morning is believed.*',
  '⚠ **Agreeing with the right half costs nothing and is often the only way the rest survives.** ⚠ *That is not true* invites a defence of the whole sentence, and then you are arguing about the strongest version of the other side\'s case.',
  '**Practise:** Find the half that is right, agree with it, put a figure on it. 1 the gate count 2 the Friday price list 3 the complaints procedure 4 the two-signature rule 5 the fourteen-day price',
  '**Useful phrases:**  That is true of…  ·  Up to a point — and the point is…  ·  I see that, but…  ·  We agree about … and disagree about …  ·  and the figure is…',
  '**Pronunciation – the stress that makes partial agreement real.** 🔊 **Track 12.4** Listen: _that is **true** of the afternoon_. ⚠ The stress goes on *true* and not on *afternoon*; stressed the other way it sounds like a correction rather than an agreement. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes an overstated claim; B finds the right half and agrees with it, with a figure. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ does not work. I have said so since __________.'],
  ['B', 'It works __________.'],
  ['A', 'And __________ I am __________.'],
  ['B', 'Then we agree about __________ and disagree about __________, and I want to say which is which before anybody repeats *__________ does not work*.'],
  ['A', 'Why does that matter?'],
  ['B', 'Because the first is __________ and the second is __________.'],
  ['A', 'So: __________ and __________.'],
  ['B', '⚠ And I agree with the second half completely, and the figure is __________.'],
]));
out.push(table(['Role card 1 — the complaints procedure', 'Role card 2 — the Friday list'], [[
  '"Nobody uses the complaints book." True of telephone complaints settled the same day — about a dozen a year. Not true of written complaints, all nine of which are in it. ⚠ The narrow claim is a procedure gap; the wide one invites somebody to abolish the book.',
  '"The Friday list is useless." True of the Baghdad Street counter, which gets its copy on the Monday van. Not true of Mezzeh, where it works. ⚠ The narrow claim is a distribution problem worth 20,000 of petrol a week.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both halves and the figure on the conceded one. ⚠ Then write the wide claim and say what it would have invited.'));
out.push(PHRASE_CARD(['That is true of…', 'Up to a point — and the point is…', 'I see that, but…', 'we agree about … and disagree about …', 'and the figure is…', 'name both halves']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** overstated claims you have heard or made. Split each and put a figure on the half that is right.'));
out.push(table(['The claim as made', 'The half that is right, with a figure', 'The half that is not', 'What the wide claim invites'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.7, 1.2, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The claim was _______. It is true of _______ — about _______. It is not true of _______. The wide version invites _______._'));
out.push(p('**Listener task:** count the claims in the room that would have cost somebody a control if nobody had narrowed them. ⚠ Then ask who was best placed to narrow each — it is usually whoever made it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _that is true for the afternoon_ and _I agree up to the point_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE GATE COUNT — what works and what does not. For the Monday meeting, 8 December. Written with Y. Khalil.**',
  '⚠ **This note is written with Abu Yasser and not about him.** He has said since September that the gate count does not work. **He is right about part of it and we have written the parts down separately**, because the sentence as it stands is about to be decided on.',
  '**What works, and the figure.** Between seven and four the load is counted against the order by one man with nothing else to do, and the sheet is signed by name. **Fourteen differences have been found this year and eleven of them were found in that window.** The control works and it is his own idea.',
  '**What does not work, and the figure.** After four there is one man on the gate and the lorries that come in are the ones that were late. **About eleven loads a week leave after four**, and on those he counts what he can. ⚠ **Three of this year\'s fourteen differences were found after four and we do not know how many were not found.**',
  '⚠ **Why the two halves are written separately.** *The gate count does not work* is an argument about whether to keep a control. *The count is unreliable after four* is a staffing decision about two hours a day. **They are not degrees of the same sentence and the first one would be decided against us.**',
  '**What we are asking for.** Not a second man. ⚠ **A rule that a load arriving after four is counted in the morning and not released until it is** — which costs nothing, delays about eleven loads a week by a night, and makes the control true for twenty-four hours instead of nine.',
  '⚠ **And what Abu Yasser wants recorded, in his words.** *If the answer is no, the count after four is me guessing and I would rather that were written down than said.*',
], 'FFFFFF', C.navy));
out.push(item('1', 'What figures are given for each half?'));
out.push(item('2', 'Why are the two halves written separately?'));
out.push(item('3', 'What is being asked for, and what is not?'));
out.push(box('Writer\'s box', [
  '**A note splitting an overstated claim — six parts:** ⚠ **that it is written *with* and not *about*** → **what works, with a figure** → **what does not, with a figure** → ⚠ **why the halves are separate** → what you are asking for → ⚠ **what the other person wants recorded, in their words.**',
  '**Say it is written with them.** *This note is written with Abu Yasser and not about him.* ⚠ A note splitting somebody\'s claim without them is a note correcting them, whatever its contents.',
  '**Put a figure on both halves, including the one against you.** *Three of this year\'s fourteen were found after four and we do not know how many were not found.*',
  '⚠ **Say why the halves cannot be one sentence.** *They are not degrees of the same sentence and the first one would be decided against us.*',
  '⚠ **Quote the other person\'s own sentence at the end, unedited.** *If the answer is no, the count after four is me guessing and I would rather that were written down than said.* ⚠ It is the strongest line in the note and it is not the writer\'s.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note splitting an overstated claim at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what works and what does not. Written with ______________.**   ⚠ **This note is written with ______________ and not about ______________.** They have said since ______________ that ______________. **They are right about part of it.**   **What works, and the figure.** ______________. ______________.   **What does not, and the figure.** ______________. ⚠ ______________, and we do not know ______________.   ⚠ **Why the halves are separate.** *______________* is ______________. *______________* is ______________. They are not degrees of the same sentence.   **What we are asking for.** Not ______________. ⚠ ______________, which costs ______________.   ⚠ **And what ______________ wants recorded, in their words.** *______________.*'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says quote the other person\'s own sentence at the end. Yours summarises their position — what did they actually say?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the person named sign this note?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Written *with*, and said to be', ''],
  ['A figure on both halves, including the one against the writer', ''],
  ['Why the halves cannot be one sentence', ''],
  ['The other person\'s own words at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the quoted sentence at the end. The class says which one carries the most weight.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a true thing at your work that is usually said too widely (**100 to 140 words**). Say the wide version, the narrow version, who says it, and what the wide version has cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the narrow version_   ✓ _partial agreement with a figure on the conceded half?_   ? _who is best placed to narrow it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the wide version already cost something? Usually one or two — and in each the thing lost was a control or a procedure that worked most of the time.'));
out.push(box('Homework', ['Write your final text. Then take one overstated claim at your work to the person who makes it and write the two halves together, with a figure on each (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.3 =======================
out.push(pb());
out.push(h2('12.3  Admittedly, and it is true that'));
out.push(p('**Function:** conceding the strongest point against you   ·   **Grammar:** *admittedly · it is true that · I accept that*   ·   **Pronunciation:** a concession said without reluctance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of an argument you have had at work. What was the strongest point against you?'));
out.push(p('**b**  Which is stronger? _There is no risk in repairing it. · Admittedly the repair may not be the last one this van needs, and nobody can tell me it will be._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia do that changes the conversation?   **A** produces a figure   **B** concedes the strongest point against her own view   **C** leaves'));
out.push(p('**b**  Listen again. **1** What does she concede? **2** What does Mr Ayoub say about the concession?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  "Admittedly, and I will say it before you do"', [
  ['Nadia', 'I think we should repair the van, and admittedly it is nine years old and this may not be the last repair it needs.'],
  ['Mr Ayoub', 'That was going to be my objection.'],
  ['Nadia', 'I know. It is the strongest thing against repairing it and it is true, and I would rather say it than have it said to me.'],
  ['Mr Ayoub', 'Does it not weaken your own case?'],
  ['Nadia', 'It weakens the version of my case that pretends there is no risk, which was never going to survive this room. ⚠ **What is left is a case that has the risk in it and still comes out at repair, and that one you can act on.**'],
  ['Mr Ayoub', 'Go on then.'],
  ['Nadia', 'At nine years old we might get two years and we might get eight months. At 1.9 million, eight months is about 240,000 a month, which is still less than the hire at 600,000. ⚠ **So the worst case for the repair is better than the hire**, and that is the sentence I could not have reached without conceding the age.'],
  ['Mr Ayoub', 'I have nothing to add to that, which is unusual.'],
  ['Nadia', 'You had one thing to add and I used it.'],
  ['Mr Ayoub', '⚠ Which is the whole trick, and it is not a trick. **A concession you make yourself cannot be used against you, and the person who was going to make it has nothing left to say** — and in this case what they had to say turned out to be the thing that proved your point.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Conceding — and why it wins**',
  table(['Form', 'Example'], [
    ['**Admittedly…**', '**Admittedly** it is nine years old.'],
    ['**It is true that…**', '**It is true that** this may not be the last repair.'],
    ['**I accept that…**', '**I accept that** nobody can tell me it will be.'],
    ['⚠ **+ and the case still holds**', '…and at 1.9 million even eight months beats the hire.'],
    ['⚠ **the worst case, costed**', 'eight months is about 240,000 a month against 600,000.'],
  ], [2.1, 3.2]),
  '⚠ **Concede the strongest point against you, and concede it first.** *I would rather say it than have it said to me.* ⚠ **A concession you make yourself cannot be used against you, and the person who was going to make it has nothing left to say.**',
  '⚠ **It does not weaken your case; it weakens the version of your case that pretended there was no risk** — which was never going to survive the room. **What is left has the risk in it and can be acted on.**',
  '⚠ **Then cost the worst case.** *Eight months at 1.9 million is 240,000 a month against a hire at 600,000.* ⚠ **The sentence _the worst case for my option is better than your option_ cannot be reached without the concession**, which is why conceding is not generosity.',
  '⚠ **Concede with no reluctance in the voice.** A concession made grudgingly is heard as a position being surrendered, and the listener presses.',
  '**Practise:** Concede the strongest point against each view and then cost the worst case. 1 repair the van 2 enter the fourth store room 3 the Ghouta change 4 a second counter assistant 5 one dated price list',
  '**Useful phrases:**  Admittedly…  ·  It is true that…  ·  I accept that…  ·  and even on the worst case…  ·  I would rather say it than have it said to me.',
  '**Pronunciation – a concession without reluctance.** 🔊 **Track 12.6** Listen: _**admittedly** it is nine years old_ — level, brisk, no sigh. ⚠ The same words said slowly with a falling tone are a surrender, and the other person will press rather than accept. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a view and concedes the strongest point against it; B tries to press and finds there is nothing left. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I think we should __________, and admittedly __________.'],
  ['B', 'That was going to be my objection.'],
  ['A', 'I know. It is the strongest thing against __________ and it is true.'],
  ['B', 'Does it not weaken your own case?'],
  ['A', 'It weakens the version that pretends __________. ⚠ What is left is __________.'],
  ['B', 'Go on then.'],
  ['A', 'On the worst case, __________ is about __________, which is still less than __________.'],
  ['B', '⚠ I have nothing to add.'],
]));
out.push(table(['Role card 1 — the fourth store room', 'Role card 2 — the second assistant'], [[
  'View: enter it on the system, three days, 450,000. ⚠ Concede: the system has been wrong about that room since June and entering it will not make the shelves match the paper. Worst case costed: even a wrong figure that can be reconciled monthly beats no figure at all.',
  'View: take on a second counter assistant at 650,000 a month. ⚠ Concede: eleven unreturned calls is one month\'s evidence and the four customers may have left for price. Worst case: if only one of the four was lost to the telephone, the salary is covered by that one customer.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the concession and the worst-case figure. ⚠ Then say what the other person had left to argue with.'));
out.push(PHRASE_CARD(['Admittedly…', 'It is true that…', 'I accept that…', 'and even on the worst case…', 'I would rather say it than have it said to me.', 'the worst case still beats it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** views you hold. For each: the strongest point against it, and the worst case costed.'));
out.push(table(['My view', 'The strongest point against it', 'The worst case, costed'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.5, 2.1, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My view is _______. Admittedly _______. And even on the worst case, _______, which is still _______._'));
out.push(p('**Listener task:** count the views where the worst case still wins. ⚠ Then notice that nobody could have said so without conceding first.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _admittedly that the van is old_ and _it is true that is nine years old_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper, and answer the questions.'));
out.push(box(null, [
  '**THE VAN — a recommendation with the case against it first. 8 December.**',
  '⚠ **The three strongest arguments against repairing it, before mine.** **One:** it is nine years old and this may not be the last repair; nobody can promise otherwise and I am not going to. **Two:** 1.9 million is six weeks of counter takings and it goes out in one payment in a month when the second site is still finding its trade. **Three:** we have never had the engine apart and the quote is for what the garage can see.',
  '**My recommendation.** Repair it, in January.',
  '**The case, and it rests on one piece of arithmetic.** The hire is 600,000 a month. The repair is 1.9 million once. ⚠ **If the repair lasts eight months it costs 240,000 a month, which is less than half the hire** — and eight months is the worst figure anybody at the garage would put on it. **On the worst case the repair wins, and that is why the three arguments above do not change the answer.**',
  '**What would change the answer.** If the engine comes apart and the quote doubles. ⚠ **I have asked for the quote to be split — strip and inspect at 240,000, then a decision** — so that the 1.9 million is a decision we take twice and not once.',
  '⚠ **What I cannot cost, and it is the real risk.** Two customers have been at half their orders since August. If they leave in January the 400,000 becomes permanent and the van was the wrong thing to spend 1.9 million on. **I have no way of pricing that and the only person who might is Fadi, who sees them weekly, and I have not asked him. I will before Monday.**',
  '**And what I am not claiming.** That this is obvious. ⚠ **If the figures had come out the other way I would be recommending the hire, and the three arguments at the top of this page would be my case rather than the case against me.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What goes at the top of the paper, and why?'));
out.push(item('2', 'What single piece of arithmetic does the recommendation rest on?'));
out.push(item('3', 'What can the writer not cost, and who might be able to?'));
out.push(box('Writer\'s box', [
  '**A recommendation with the case against it first — six parts:** ⚠ **the three strongest arguments against you** → the recommendation → **the case, resting on one piece of arithmetic** → what would change the answer → ⚠ **what you cannot cost, and who might** → ⚠ **what you are not claiming.**',
  '**Put the case against at the top.** ⚠ A reader who meets your objections before your argument reads the argument as a response to them; a reader who meets them afterwards reads them as a hedge.',
  '**Rest the case on one piece of arithmetic and say so.** *If the repair lasts eight months it costs 240,000 a month, which is less than half the hire.* ⚠ **On the worst case the repair wins** — the sentence the concessions make available.',
  '⚠ **Split an irreversible decision in two if you can.** *Strip and inspect at 240,000, then a decision* — so the 1.9 million is taken twice.',
  '⚠ **Name the risk you cannot price and the person who might be able to.** *The only person who might is Fadi, who sees them weekly, and I have not asked him. I will before Monday.*',
  '⚠ **And say what you are not claiming.** *If the figures had come out the other way I would be recommending the hire.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a recommendation with the case against it first (**50 words or more**). Use the frame.'));
out.push(p('**______________ — a recommendation with the case against it first.**   ⚠ **The strongest arguments against, before mine.** **One:** ______________. **Two:** ______________. **Three:** ______________.   **My recommendation.** ______________.   **The case, and it rests on one piece of arithmetic.** ______________. ⚠ **On the worst case ______________ wins**, and that is why the arguments above do not change the answer.   **What would change the answer.** ______________.   ⚠ **What I cannot cost.** ______________. The only person who might is ______________, and I will ask ______________.   ⚠ **What I am not claiming.** That this is obvious. If the figures had come out the other way ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says put the case against at the top. Yours has it at the end under *risks* — what does a reader do with an objection they meet after the argument?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the worst case still favour the recommendation?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The three strongest arguments against, at the top', ''],
  ['One piece of arithmetic, with the worst case costed', ''],
  ['An irreversible decision split in two if possible', ''],
  ['The risk that cannot be priced, and who might price it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their arguments-against. The class says which paper they would act on — and it is the one whose author argued against themselves hardest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an argument at your work that you lost (**100 to 140 words**). Say what your case was, what the strongest point against it was, whether you conceded it, and what happened.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the strongest point against them_   ✓ _admittedly / it is true that, with the worst case costed?_   ? _would conceding it first have changed the outcome?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the writer not conceded the strongest point? Usually all three — and in at least one, conceding it would have produced an argument the writer could have won.'));
out.push(box('Homework', ['Write your final text. Then take one view you hold, write the strongest argument against it, and cost the worst case (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.4 =======================
out.push(pb());
out.push(h2('12.4  Hala, you have done this'));
out.push(p('**Function:** bringing in the person who knows   ·   **Grammar:** *what do you think? · you have done this · X, you were there*   ·   **Pronunciation:** a name said as an invitation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a meeting where the person who knew most said least. Why?'));
out.push(p('**b**  Which brings somebody in? _Does anybody have anything to add? · Hala, you have priced about sixty of these — what happens at the counter when the list changes mid-week?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala contribute?   **A** nothing   **B** the fact that decides the question   **C** a complaint'));
out.push(p('**b**  Listen again. **1** What had she been waiting to be asked? **2** What does Mr Ayoub say about *does anybody have anything to add*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  "Hala, you have done this"', [
  ['Mr Ayoub', 'So we are agreed: the list changes on the first of the month. Does anybody have anything to add?'],
  ['Nour', 'Hala, you have priced about sixty orders off that list. What happens at the counter on the first?'],
  ['Hala', 'The first is the busiest morning of the month, because the trade customers come when their own month starts.'],
  ['Mr Ayoub', 'Go on.'],
  ['Hala', 'So on the first I am pricing from a list I have had for about twelve hours, with eight people waiting, and the old list is in my hand because the orders in front of me were taken last week on the old prices.'],
  ['Nour', 'Two lists in one hand on the busiest morning.'],
  ['Hala', 'Which is exactly how October happened. ⚠ And the fifth would be the same work on the quietest morning of the month.'],
  ['Mr Ayoub', 'The fifth, then. Why did you not say so twenty minutes ago?'],
  ['Hala', 'Because you asked whether anybody had anything to add, and I did not know whether the counter was part of the question.'],
  ['Mr Ayoub', '⚠ *Does anybody have anything to add* is a question I have asked about four thousand times and I do not believe it has ever produced anything. **It asks people to decide for themselves whether what they know is relevant, and the person who knows least is the most confident about that.**'],
  ['Nour', 'And the question that worked was about sixty orders she has priced.'],
  ['Mr Ayoub', '⚠ **Name the person, name the thing they have done, and ask about that thing.** Three parts, and the first two are what make the third answerable.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Bringing in the person who knows**',
  table(['The three parts', 'Example'], [
    ['**1 · the name**', '**Hala**,'],
    ['**2 · the thing they have done**', 'you have priced about sixty orders off that list —'],
    ['**3 · a question about that thing**', 'what happens at the counter on the first?'],
    ['⚠ what does not work', '*Does anybody have anything to add?*'],
    ['**the follow-up**', 'Go on. · And then? · Say that again.'],
  ], [2.2, 3.1]),
  '⚠ **Name the person, name the thing they have done, and ask about that thing.** The first two parts are what make the third answerable: without them the person has to decide for themselves whether what they know is relevant.',
  '⚠ **_Does anybody have anything to add?_ has never produced anything.** It asks people to judge the relevance of their own knowledge, ⚠ **and the person who knows least is the most confident about that.**',
  '⚠ **The quiet person is not shy.** They do not know which part of the question is theirs — *I did not know whether the counter was part of the question* — and naming the thing they have done tells them.',
  '⚠ **Then say _go on_ and stop talking.** The first answer is a fact; the second is usually the finding.',
  '**Practise:** Bring somebody in with all three parts. 1 a price change 2 a delivery day 3 a stocktake 4 a new form 5 a payment term',
  '**Useful phrases:**  X, you have …  ·  what happens when…?  ·  Go on.  ·  And then?  ·  Say that again.  ·  not *anything to add?*',
  '**Pronunciation – a name said as an invitation.** 🔊 **Track 12.8** Listen: _**Hala** // you have priced about sixty of these // what happens at the counter on the first?_ ⚠ A clear break after the name, so that it is an invitation and not a summons. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A chairs and brings B in with all three parts; B has the fact that decides it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'So we are agreed: __________. Does anybody have anything to add?'],
  ['A', '__________, you have __________. What happens when __________?'],
  ['B', '__________.'],
  ['A', 'Go on.'],
  ['B', 'So __________, with __________.'],
  ['A', '__________ in one __________ on the busiest __________.'],
  ['B', 'Which is exactly how __________ happened. ⚠ And __________ would be the same work on the quietest __________.'],
  ['A', 'Why did you not say so twenty minutes ago?'],
  ['B', 'Because you asked whether anybody had anything to add.'],
]));
out.push(table(['Role card 1 — the stocktake date', 'Role card 2 — the new order form'], [[
  'The meeting has agreed a stocktake on the last Saturday of the month. B works the Saturday counter alone. The fact: the last Saturday is the day the trade customers collect for the month end, and a stocktake that day means the counter is shut on its busiest Saturday.',
  'The meeting has agreed a new order form with a quotation-reference box. B takes telephone orders. The fact: about half of all orders have no quotation at all, so the box will be blank on half the forms — ⚠ and a blank box is read later as a missing reference rather than as no quotation.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts of the question, and the fact that came out. ⚠ Then write the fact that came out of *go on*, which is usually the bigger one.'));
out.push(PHRASE_CARD(['X, you have…', 'what happens when…?', 'Go on.', 'And then?', 'Say that again.', 'not "anything to add?"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** decisions at your work. For each, name the person who knows and write the three-part question.'));
out.push(table(['The decision', 'Who knows', 'The thing they have done', 'The question about that thing'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 0.9, 1.6, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Ask your three-part question to somebody in the class and report what came out.'));
out.push(p('**Listener task:** count how many questions produced something nobody in the room knew. ⚠ Then ask how many of those people would have spoken if asked *anything to add?*'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Hala, what do you think about it?_ which has only one of the three parts, and _does somebody want to say something_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**BEFORE MONDAY\'S MEETING — the four people I am going to ask, and what I am going to ask them. 5 December.**',
  '⚠ **Why this note exists.** Three decisions this year have been taken in a room and corrected within a fortnight by somebody who was in the room and did not speak. **In every case they were asked whether they had anything to add.**',
  table(['Who', 'The thing they have done', 'The question I will ask'], [
    ['Hala Mourad', 'priced about sixty orders off the trade list', 'what happens at the counter on the first of the month, with two lists in your hand?'],
    ['Y. Khalil', 'counted every load out for eleven years', 'what happens at the gate after four, and how many loads is it a week?'],
    ['Fadi Saeed', 'driven the Ghouta route twice a week since 2019', 'which of the two new days is the long run, and why?'],
    ['N. Sayegh', 'reconciled the bank every month since 2016', 'what does a mid-month price change do to the ledger?'],
  ], [1.3, 2.1, 3]),
  '⚠ **What I am not going to say.** *Does anybody have anything to add.* It has been asked at every one of those three meetings and it produced nothing at any of them, ⚠ **because it asks somebody to judge whether what they know is relevant, and the person who knows least is the most confident about that.**',
  '⚠ **And one thing I have realised while writing this.** Every one of the four questions above is about something the person has **done a great many times** — sixty orders, eleven years, two routes a week, every month since 2016. **I cannot write a three-part question for somebody who has not done the thing**, which means the people worth asking are the ones whose names are not on the agenda.',
  '**What I will do with what comes out.** Minute it against their name, in their words, before the room empties. ⚠ **Three of the four things I expect to hear will contradict something on the agenda, and the agenda is mine.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the note exist?'));
out.push(item('2', 'What does the writer realise while writing it?'));
out.push(item('3', 'What does the writer expect, and whose agenda is it?'));
out.push(box('Writer\'s box', [
  '**A note planning who to ask — four parts:** ⚠ **why the note exists, with the count** → a table of **who · the thing they have done · the question** → ⚠ **what you are not going to say** → what you will do with what comes out.',
  '**Give the count that makes the note necessary.** *Three decisions this year taken in a room and corrected within a fortnight by somebody who was in the room and did not speak.*',
  '**Write the question out in full before the meeting.** ⚠ A three-part question cannot be improvised while chairing, because the middle part — the thing they have done — takes thought.',
  '⚠ **Notice who you cannot write a question for.** *I cannot write a three-part question for somebody who has not done the thing, which means the people worth asking are the ones whose names are not on the agenda.*',
  '⚠ **Say that what comes out will contradict your own agenda.** *Three of the four things I expect to hear will contradict something on the agenda, and the agenda is mine.* ⚠ A chair who writes that sentence before the meeting will hear the answers; one who does not will defend the agenda.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note planning who to ask before a real meeting (**50 words or more**). Use the frame.'));
out.push(p('**BEFORE ______________ — the people I am going to ask, and what I am going to ask them.**   ⚠ **Why this note exists.** ______________ decisions have been corrected within ______________ by somebody who was in the room and did not speak.   ______________ | ______________ | ______________?   ______________ | ______________ | ______________?   ______________ | ______________ | ______________?   ⚠ **What I am not going to say.** *Does anybody have anything to add.* It produced nothing, because ______________.   ⚠ **And one thing I have realised.** Every question above is about something the person has done ______________. **I cannot write one for somebody who ______________.**   **What I will do with what comes out.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says write the question out in full. Yours says *ask Hala about the counter* — what are the three parts?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could each of these questions be answered by somebody who has not done the thing?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Why the note exists, with a count', ''],
  ['Three parts in every question, written in full', ''],
  ['*Does anybody have anything to add* ruled out, with the reason', ''],
  ['What will be done with the answers', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one of their questions. The class says whether they could answer it — and if they could, the middle part is not specific enough.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you knew at a meeting and did not say (**100 to 140 words**). Say what it was, what question would have got it out of you, and what happened because nobody asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they knew_   ✓ _the three-part question written out?_   ? _what exactly were they asked instead?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the writer asked *anything to add?* Usually all three. ⚠ And in how many did they not speak because they did not know whether their part was in the question?'));
out.push(box('Homework', ['Write your final text. Then ask one real three-part question to the person who knows, and write down what came out after *go on* (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.5 =======================
out.push(pb());
out.push(h2('12.5  So are we agreed?'));
out.push(p('**Function:** closing a decision   ·   **Grammar:** *so are we agreed? · to confirm · unless I hear otherwise*   ·   **Pronunciation:** a decision read back to the room'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a meeting where everybody left with a different idea of what had been decided. How did that happen?'));
out.push(p('**b**  Which closes a decision? _So we will look at that. · So are we agreed: the fifth of the month, Nadia prints it, from January. Is that everybody?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour do before the room empties?   **A** reads the decision back with four elements   **B** thanks everybody   **C** sets the next meeting'));
out.push(p('**b**  Listen again. **1** What four things does she read back? **2** What does she find when she reads it back?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  "Before anybody stands up"', [
  ['Nour', 'Before anybody stands up. So are we agreed: the list changes on the fifth, not the first; Nadia prints it; from January; and Hala has the old list for the orders taken before the change.'],
  ['Nadia', 'Not the last part.'],
  ['Nour', 'Go on.'],
  ['Nadia', 'If she keeps the old list, two lists exist again and that is October. The orders taken before the change should be priced by me from the dated list in the file, not at the counter.'],
  ['Hala', 'That is better. It is about nine orders a month and I would rather not have them.'],
  ['Nour', 'Then: the fifth, Nadia prints it, from January, and pre-change orders are priced by Nadia from the file copy. Is that everybody?'],
  ['Mr Ayoub', 'Agreed.'],
  ['Nour', 'And I am writing it now, in front of you, because this is the fourth decision this year that I have written up two days later and asked three people what we had agreed.'],
  ['Mr Ayoub', '⚠ Which produced three answers.'],
  ['Nour', 'Three answers and all three honest. ⚠ **Nobody was misremembering on purpose; the decision had four parts and the room had agreed to about three each.**'],
  ['Mr Ayoub', '⚠ And the one you have just found is the fourth part, which nobody would have remembered because **we never actually agreed it — we stopped talking about it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Closing a decision — four elements, read back before anybody stands up**',
  table(['The element', 'Example'], [
    ['**what**', 'the list changes on the fifth, not the first'],
    ['**who**', 'Nadia prints it'],
    ['**from when**', 'from January'],
    ['⚠ **the awkward part**', 'pre-change orders are priced by Nadia from the file copy'],
    ['**the close**', 'Is that everybody?'],
  ], [1.7, 3.6]),
  '⚠ **Read the decision back before anybody stands up**, with all four elements. ⚠ Reading it back is not a courtesy: **it is when you discover that the room agreed to about three parts each.**',
  '⚠ **The fourth element is always the awkward one** — the part that was discussed and not settled. ⚠ *We never actually agreed it; we stopped talking about it* is the commonest way a decision acquires a hole.',
  '⚠ **Write it in front of them.** A decision written up two days later produces honest disagreement, and the only cure is the two minutes before the room empties.',
  '⚠ **End with _is that everybody?_**, which asks for an objection rather than for assent. *Are we agreed?* collects silence; *is that everybody?* collects Nadia.',
  '**Practise:** Close each decision with four elements and read it back. 1 a price list date 2 a delivery day 3 a stocktake 4 a new form 5 a payment term',
  '**Useful phrases:**  Before anybody stands up.  ·  So are we agreed:…  ·  Is that everybody?  ·  I am writing it now, in front of you.  ·  Go on.',
  '**Pronunciation – a decision read back.** 🔊 **Track 12.10** Listen: _the fifth // Nadia prints it // from January // and pre-change orders are priced from the file copy_. ⚠ Four groups with a clear break between each, so that anybody can object to one without objecting to the whole. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a decision back in four elements; B objects to one of them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Before anybody stands up. So are we agreed: __________; __________; from __________; and __________.'],
  ['B', 'Not the last part.'],
  ['A', 'Go on.'],
  ['B', 'If __________, then __________, and that is __________.'],
  ['A', 'Then: __________, __________, from __________, and __________. Is that everybody?'],
  ['B', 'Agreed.'],
  ['A', 'And I am writing it now, in front of you, because ⚠ __________.'],
]));
out.push(table(['Role card 1 — the stocktake', 'Role card 2 — nothing was decided'], [[
  'Four elements: a full recount, Abu Yasser with one man from the counter, the 19th, and the container counted separately. ⚠ B objects to the fourth: the container is unheated and half of it may be unsaleable, so counting it is pointless until somebody has looked.',
  'A reads back a decision the room did not take. ⚠ B has to say so: *we did not agree that — we stopped talking about it.* The honest close is *deferred to the 15th, Nour to circulate the quotes by the 8th*, which is a decision about a decision.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the close for the class – **without the book**.'));
out.push(p('**Listener task:** write the four elements and the objection. ⚠ For role card 2, write the words *we stopped talking about it* and the decision about a decision that replaced it.'));
out.push(PHRASE_CARD(['Before anybody stands up.', 'So are we agreed:…', 'Is that everybody?', 'I am writing it now.', 'Go on.', 'we stopped talking about it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** decisions from your own meetings. Write each in four elements and mark the awkward one.'));
out.push(table(['What', 'Who', 'From when', '⚠ The awkward part'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 0.9, 0.9, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read one decision back to the class in four elements, ending with *is that everybody?*'));
out.push(p('**Listener task:** count the decisions with no fourth element. ⚠ Then ask what happened in each — and in most cases the fourth element was decided later by whoever was first to act.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _are we agree?_ and _so we will look at that_ as a close. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the confirmation, and answer the questions.'));
out.push(box(null, [
  '**DECISION OF 8 DECEMBER — the price list date. Written in the room and read back before anybody left. Circulated the same hour.**',
  '**What.** The trade price list changes on the **fifth** of each month, not the first.',
  '**Who.** Nadia Sayegh prints it, dates it and initials it. One copy.',
  '**From when.** January.',
  '⚠ **The part we had not settled, and have now.** Orders taken **before** a change are priced by Nadia from the dated file copy, **not at the counter**. About nine orders a month. ⚠ **This was discussed for ten minutes in November and never decided**, and it is the part that caused October: Hala had the old list in her hand because the orders in front of her were taken on the old prices.',
  '**Who objected, and to what.** Nadia objected to the version read back first, in which Hala kept the old list — because two lists would exist again. ⚠ **She was right and the decision as circulated is hers and not mine.**',
  '**What is not decided.** What happens to a quotation issued before a change and presented after one. ⚠ **Nobody raised it and I have only thought of it while writing this.** It is on the agenda for the 15th and until then the fourteen-day written price holds, which is my decision and not the meeting\'s.',
  '⚠ **And why this is circulated within the hour.** This is the fourth decision this year I have written up two days later, and the last three times I asked three people what we had agreed **and got three honest answers** — because the decision had four parts and the room had agreed to about three each.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was the part that had not been settled, and when had it been discussed?'));
out.push(item('2', 'Who objected, and what does the writer say about the decision as circulated?'));
out.push(item('3', 'What is not decided, and who has decided it in the meantime?'));
out.push(box('Writer\'s box', [
  '**A confirmation of a decision — six parts:** **what · who · from when** → ⚠ **the part that had not been settled** → **who objected and to what** → ⚠ **what is not decided** → why it is circulated within the hour.',
  '**Head it with when it was written.** *Written in the room and read back before anybody left. Circulated the same hour.*',
  '⚠ **Give the unsettled part its own heading and its history.** *This was discussed for ten minutes in November and never decided, and it is the part that caused October.*',
  '⚠ **Name the objector and give them the decision.** *She was right and the decision as circulated is hers and not mine.* ⚠ It costs nothing and it is the reason the next objection arrives before the room empties rather than two weeks later.',
  '⚠ **List what is still open, including what you have only just thought of**, and say what holds until it is decided and on whose authority. *Which is my decision and not the meeting\'s.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a confirmation of a real decision (**50 words or more**). Use the frame.'));
out.push(p('**DECISION OF ______________ — ______________. Written in the room and read back before anybody left.**   **What.** ______________.   **Who.** ______________.   **From when.** ______________.   ⚠ **The part we had not settled, and have now.** ______________. ⚠ This was discussed ______________ and never decided.   **Who objected, and to what.** ______________ objected to ______________. ⚠ **They were right and the decision as circulated is theirs and not mine.**   **What is not decided.** ______________. ⚠ Nobody raised it and I have only thought of it while writing this. Until ______________, ______________ holds, which is my decision and not the meeting\'s.   ⚠ **And why this is circulated within the hour.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name the objector and give them the decision. Yours says *after discussion it was agreed* — who changed it, and were they right?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could three people read this and give three answers?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What, who and from when', ''],
  ['The part that had not been settled, with its history', ''],
  ['The objector named and credited', ''],
  ['What is still open, and what holds until then', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *what is not decided*. The class says which open question will be decided by whoever acts first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work that everybody remembered differently (**100 to 140 words**). Say what was decided, what each person thought, and which part had never actually been agreed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the part never actually agreed_   ✓ _four elements in the close?_   ? _who acted first, and did that settle it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the unagreed part get settled by whoever acted first? Usually all three — and in none of them was that person wrong to act.'));
out.push(box('Homework', ['Write your final text. Then close one real decision in four elements, read it back before the room empties, and write it down there (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.6 =======================
out.push(pb());
out.push(h2('12.6  On the one hand, on balance'));
out.push(p('**Function:** writing both sides and then taking a position   ·   **Grammar:** *on the one hand · on the other · on balance*   ·   **Pronunciation:** *on balance* said as a conclusion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give both sides of a question at your work in two sentences, then say where you stand in one.'));
out.push(p('**b**  What is wrong with a paper that gives both sides and stops?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about the balanced paper?   **A** it is too long   **B** it gives both sides and no position, which leaves the work undone   **C** it is unbalanced'));
out.push(p('**b**  Listen again. **1** What does he say *on balance* has to do? **2** What does he say about a paper with no position in it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  "And where do you stand?"', [
  ['Mr Attar', 'Your paper on the Ghouta change. On the one hand, on the other hand, and then it ends.'],
  ['Nour', 'It is meant to be balanced.'],
  ['Mr Attar', 'It is beautifully balanced and it has handed the decision back to somebody with less information than you. ⚠ **Balance is how you get to a position; it is not a substitute for having one.**'],
  ['Nour', 'And if I am genuinely undecided?'],
  ['Mr Attar', 'Then write that, and write what would decide it. *I am undecided and the thing that would settle it is whether Fadi can do the Harasta drops before eleven.* **That is a position — it is a position about what the question is.**'],
  ['Nour', 'And *on balance*?'],
  ['Mr Attar', '*On balance* has to be followed by something that was not in either hand. ⚠ If your *on balance* just repeats the stronger side, you have not weighed anything — you have counted.'],
  ['Nour', 'Mine says *on balance the change should go ahead*.'],
  ['Mr Attar', 'Which side was that from?'],
  ['Nour', 'The first one.'],
  ['Mr Attar', 'Then your paper has one side in it and a decoration. ⚠ **What does weighing look like? It looks like this: on balance the change should go ahead, because the Saturday problem is permanent and the Friday problem is one morning a week and can be managed by moving the wrap delivery.** You have taken something from each hand and made a third thing.'],
  ['Nour', 'And the wrap delivery was not in either hand.'],
  ['Mr Attar', '⚠ **It is what weighing produced.** That is how you know you did it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The balanced paragraph — and the position that must follow it**',
  table(['Form', 'Example'], [
    ['**On the one hand…**', '**On the one hand** the Saturday road closure is permanent.'],
    ['**On the other hand…**', '**On the other hand** Friday is the wrap morning.'],
    ['⚠ **On balance…**', '**On balance** the change should go ahead, **because**…'],
    ['⚠ **+ something from each hand**', '…the first is permanent and the second is one morning and movable.'],
    ['⚠ **the honest undecided**', 'I am undecided, and what would settle it is…'],
  ], [2.1, 3.2]),
  '⚠ **Balance is how you get to a position; it is not a substitute for having one.** A paper with two hands and no position has handed the decision to somebody with less information than you had.',
  '⚠ **_On balance_ must be followed by something that was not in either hand.** ⚠ If it repeats the stronger side, you have **counted** rather than weighed — and the paper has one side in it and a decoration.',
  '⚠ **What weighing looks like:** take the permanence of one objection and the manageability of the other and produce a third thing — *the wrap delivery can move*. **That third thing is how you know you weighed.**',
  '⚠ **The honest undecided is a position too**, if it names what would settle it: *the thing that would settle it is whether Fadi can do the Harasta drops before eleven.*',
  '**Practise:** Write both hands and then an *on balance* that takes something from each. 1 the Ghouta change 2 the van 3 the fourth store room 4 a second assistant 5 the fifth of the month',
  '**Useful phrases:**  On the one hand…  ·  On the other hand…  ·  On balance…, because…  ·  I am undecided, and what would settle it is…  ·  which was in neither hand',
  '**Pronunciation – _on balance_ as a conclusion.** 🔊 **Track 12.12** Listen: _on the one hand… // on the other… // **on balance**, the change should go ahead_. ⚠ *On balance* carries a stress and a slight slowing, because it is the only part of the paragraph the reader needs to remember. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives both hands and stops; B asks for the position and tests whether it weighs. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your paper on __________. On the one hand, on the other hand, and then it ends.'],
  ['A', 'It is meant to be balanced.'],
  ['B', '⚠ Balance is how you get to a position. Where do you stand?'],
  ['A', 'On balance, __________.'],
  ['B', 'Which side was that from?'],
  ['A', 'The __________ one.'],
  ['B', 'Then it is one side and a decoration. ⚠ Take something from each hand.'],
  ['A', 'On balance __________, because __________ is __________ and __________ is __________ and can be __________.'],
  ['B', 'And __________ was in neither hand. ⚠ That is how you know you weighed.'],
]));
out.push(table(['Role card 1 — the fourth store room', 'Role card 2 — genuinely undecided'], [[
  'One hand: entering it costs three days and 450,000. Other hand: doing nothing costs a figure that grows. ⚠ The weighing produces a third thing — count it on paper first, in one day, which gives a usable figure now and makes the three days optional.',
  'A is genuinely undecided about a second assistant. ⚠ The honest position: *I am undecided, and what would settle it is whether the four customers who left in October left for the telephone or for price — and Fadi sees two of them weekly.* That is a position about what the question is.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two hands, the *on balance*, and ⚠ **the third thing that was in neither hand.** If there is no third thing, the writer counted.'));
out.push(PHRASE_CARD(['On the one hand…', 'On the other hand…', 'On balance…, because…', 'which was in neither hand', 'I am undecided, and…', 'balance is not a position']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** questions at your work. Write both hands and an *on balance* with a third thing.'));
out.push(table(['On the one hand', 'On the other hand', 'On balance — and the third thing'], [['', '', ''], ['', '', ''], ['', '', '']], [1.9, 1.9, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class both hands and your position, and name the third thing.'));
out.push(p('**Listener task:** count the *on balance* statements that only repeated one hand. ⚠ Then ask what the third thing would have been in each.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _in the one hand_ and _on balance, I think probably both sides are right_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the position paper, and answer the questions.'));
out.push(box(null, [
  '**THE GHOUTA DAY — a position. 8 December. One page, and the position is in the third paragraph.**',
  '**On the one hand.** The Saturday road closure at the market end is permanent, has been for four years, and makes a Saturday run finish after the shops shut. The Saturday counter is one man. **Neither of those can be changed by anybody in this company** and both are reasons to move off Saturday.',
  '**On the other hand.** Friday is the morning Ms Shamsi\'s wrap arrives, and Abu Yasser cannot be at the gate and on the forklift. Friday is also the long run, because the two Harasta drops are shut on Wednesdays. **Both of those are reasons not to move to Friday**, and the second came from Fadi and was in nobody\'s paper until the 6th.',
  '⚠ **On balance, Wednesday and Friday, and the wrap moves to Thursday.** The Saturday objections are **permanent** and the Friday objections are **one morning a week and movable** — and Ms Shamsi has never been asked about the delivery day in four years, because Wednesday is in a standing order nobody looks at. ⚠ **I telephoned her on the 5th and Thursday suits her better.** The wrap delivery was in neither hand; **it is what the weighing produced.**',
  '**What is left, after the weighing.** The Harasta drops on a Friday long run. ⚠ **This is not solved and I am not going to pretend the wrap move solves it.** Fadi says he can do them before eleven if he loads on the Thursday evening, which means somebody loads on a Thursday evening, which is a staffing question and not a route question.',
  '⚠ **And where I would be if the wrap could not move.** Recommending Wednesday and Saturday, with the Saturday counter covered, and arguing for a second man on the Saturday morning. **I want that written down, because the whole of my position rests on one telephone call and if Ms Shamsi changes her mind my recommendation changes with it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer say about the two sets of objections?'));
out.push(item('2', 'What was in neither hand, and how did it get into the paper?'));
out.push(item('3', 'Where would the writer be if the wrap could not move, and why is that written down?'));
out.push(box('Writer\'s box', [
  '**A position paper — five parts:** **on the one hand** → **on the other hand** → ⚠ **on balance, with the third thing** → **what is left after the weighing** → ⚠ **where you would be if the third thing fell through.**',
  '**Characterise each set of objections rather than listing them.** *The Saturday objections are permanent and the Friday objections are one morning a week and movable.* ⚠ That sentence is the weighing; everything else is the working.',
  '⚠ **Name the third thing and say it was in neither hand.** *The wrap delivery was in neither hand; it is what the weighing produced.*',
  '⚠ **Say what is left and refuse to claim it is solved.** *This is not solved and I am not going to pretend the wrap move solves it.* ⚠ A position paper that solves everything has stopped weighing and started selling.',
  '⚠ **State where you would be if your third thing fell through.** *The whole of my position rests on one telephone call and if she changes her mind my recommendation changes with it.* ⚠ It is the sentence that makes a position a position rather than a preference.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a position paper on a real question (**50 words or more**). Use the frame.'));
out.push(p('**______________ — a position.**   **On the one hand.** ______________. **Neither of those can be changed by anybody here.**   **On the other hand.** ______________. ______________, and the second came from ______________.   ⚠ **On balance, ______________.** The first objections are ______________ and the second are ______________ — and ______________ has never been asked about ______________. ⚠ **I ______________ and ______________.** That was in neither hand; **it is what the weighing produced.**   **What is left.** ______________. ⚠ This is not solved and I am not going to pretend ______________ solves it.   ⚠ **And where I would be if ______________ fell through.** ______________. **I want that written down.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name the third thing and say it was in neither hand. Your *on balance* repeats the first hand — what did the weighing produce?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what did the weighing produce that was not already in the paper?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both hands, with each set characterised', ''],
  ['An *on balance* with a third thing, named as such', ''],
  ['What is left, and the refusal to claim it is solved', ''],
  ['Where the writer would be if the third thing fell through', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their third thing. The class says which papers counted and which weighed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a position on a question at your work that has been argued for a long time (**100 to 140 words**). Give both hands, an *on balance* with a third thing, and where you would be if it fell through.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the third thing_   ✓ _on the one hand / on the other / on balance?_   ? _has anybody ever asked the question the third thing answers?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had nobody ever asked the question the third thing answers? Usually all three — which is why the argument had lasted a long time.'));
out.push(box('Homework', ['Write your final text. Then write both hands on one real question and find the third thing by asking somebody one question (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review & Mediate: both sides, and where I stand'));
out.push(p('**Function:** putting a position to somebody who disagrees   ·   **Review:** stating a view · partial agreement · conceding · bringing people in · closing a decision · the balanced paragraph'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is wrong with a view that has *if we can afford it* on the end?',
  '**2** Why agree with the half of a claim that is right?',
  '**3** What does a concession you make yourself do to the person who was going to make it?',
  '**4** What are the three parts of a question that brings somebody in?',
  '**5** What must follow *on balance*?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happens when Nour puts her position to Abu Yasser?   **A** he agrees   **B** he accepts the reasoning and supplies the thing it still lacks   **C** he refuses'));
out.push(p('**b**  Listen again. **1** What does she concede at the start? **2** What does he give her, and why only he could?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  "So where do you stand, and where do I?"', [
  ['Nour', 'I am going to put my position to you before I put it to him, and I will start with the strongest thing against it, which is yours.'],
  ['Abu Yasser', 'Go on.'],
  ['Nour', 'Friday is wrap morning and you cannot be at the gate and on the forklift. That is true, I agree with it completely, and nothing in my paper makes it untrue.'],
  ['Abu Yasser', 'And you are still recommending Friday.'],
  ['Nour', 'I am, because the Saturday objections cannot be changed by anybody here and yours can — the wrap can move to Thursday and Ms Shamsi says Thursday suits her better. ⚠ **So my position is that your objection is the one worth solving, not the one worth losing on.**'],
  ['Abu Yasser', 'Nobody has ever put it to me that way round.'],
  ['Nour', 'Is there anything in it I have got wrong?'],
  ['Abu Yasser', 'One thing, and it is not about Friday. If the wrap comes Thursday, it comes on the day the Mezzeh counter does its own order, so Thursday morning has the wrap and the counter order and the Ghouta load for Friday all in the same four hours.'],
  ['Nour', 'Which is worse than what I have written down.'],
  ['Abu Yasser', 'It is worse on Thursday and better on Friday. ⚠ **And you will not find it in any paper, because the Thursday counter order is a thing I do and nobody has written it down in eleven years.**'],
  ['Nour', 'Then that goes in before Monday, and it goes in with your name on it.'],
  ['Abu Yasser', '⚠ Put it in with the eleven years as well. **A thing nobody has written down for eleven years is the kind of thing a meeting needs to be told it did not know.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – putting a position to somebody who disagrees**',
  table(['To open', 'To hold the position', 'To be completed'], [
    ['I will start with the strongest thing against it, which is yours.', 'Your objection is the one worth solving, not the one worth losing on.', 'Is there anything in it I have got wrong?'],
    ['I agree with it completely.', 'The Saturday objections cannot be changed and yours can.', 'Nobody has written it down in eleven years.'],
  ], [2, 2.1, 2]),
  '⚠ **Put the position to the person who disagrees before you put it to the decider.** And open with **their** objection, conceded completely.',
  '⚠ **Then reframe rather than defeat.** *Your objection is the one worth solving, not the one worth losing on.* ⚠ That sentence changes an opponent into the person whose problem the paper is about — which is both more accurate and more useful.',
  '⚠ **Ask _is there anything in it I have got wrong?_ and stop talking.** What comes back is usually not a defence of their objection but a **new fact**, and it will be something they do that nobody has written down.',
  '⚠ **Then put the new fact in with their name and the number of years.** *A thing nobody has written down for eleven years is the kind of thing a meeting needs to be told it did not know.*',
  '**Practise:** Put a position to somebody who disagrees. Concede theirs, reframe it as the solvable one, ask what you have got wrong, and record what comes back with a name.',
  '**Useful phrases:**  I will start with the strongest thing against it, which is yours.  ·  I agree with it completely.  ·  yours can be changed and theirs cannot  ·  Is there anything I have got wrong?  ·  with your name on it',
  '**Pronunciation – putting a position to somebody who disagrees.** 🔊 **Track 12.14** Listen: _that is true // I agree with it completely // and I am still recommending Friday_. ⚠ Three level statements with no softening between them; the concession is not a preliminary to be hurried past. Repeat the three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A puts a position to B, who disagrees. B supplies a fact nobody has written down. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A recommends the stocktake on the 19th. B objects: it is the week the hotel order ships. ⚠ B\'s undocumented fact: the hotel order is picked from the same racking that has to be emptied for a count, and nobody has ever written down which racking that is.',
  'A recommends one dated price list. B objects: the Baghdad Street counter gets its copy on the Monday van. ⚠ B\'s undocumented fact: Hala carries a copy in her bag on Thursdays, which is why it has worked at all, and nobody has written that down either.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the concession, the reframing sentence, and ⚠ **the fact nobody had written down, with how long.**'));
out.push(PHRASE_CARD(['the strongest thing against it, which is yours', 'I agree completely.', 'yours can be changed', 'Is there anything I have got wrong?', 'with your name on it', 'eleven years and nobody wrote it down']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a position. Put it to **two** people who disagree and collect what each supplies.'));
out.push(table(['Who I put it to', 'Their objection, conceded', 'The reframing', 'The undocumented fact, and how long'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the person who disagreed supplied. This is the **twelfth** unit of this book, and the thing nobody writes down is the one the whole book has been building to: **the facts that decide a question are mostly held by the people who do the work, in the form of things they have done for years and nobody has written down — and they come out when somebody concedes their objection and asks what the paper has got wrong.**'));
out.push(p('_I conceded _______. I said their objection was _______. They told me _______, which nobody has written down in _______ years._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _on balance · a concession · a dissenting view · the sense of the meeting · to revisit · where I stand._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 6)', 10));
out.push(p('⚠ **This unit practises Part 6: multiple-choice cloze.** Read the extract from a position paper and choose **a**, **b** or **c** for each gap.'));
out.push(box(null, [
  '**Extract from a position paper, 8 December.**',
  '**(1) ______** the one hand, the Saturday road closure is permanent and **(2) ______** be changed by anybody here. **(3) ______** the other hand, Friday is the wrap morning, and Mr Khalil **(4) ______** be at the gate and on the forklift at once.',
  '**(5) ______** balance, the change should go ahead. The Saturday objections are permanent and the Friday ones are movable. I **(6) ______** that this may not be the last change the route needs. **(7) ______** is true that the Harasta drops remain unsolved, and I **(8) ______** going to pretend the wrap move solves them.',
], 'FFFFFF', C.navy));
[
  '**1**   a) In   b) On   c) At',
  '**2**   a) cannot   b) can not to   c) is not able',
  '**3**   a) In   b) At   c) On',
  '**4**   a) cannot   b) can not   c) could not to',
  '**5**   a) In   b) On   c) At',
  '**6**   a) accept   b) am accepting   c) accepted',
  '**7**   a) That   b) This   c) It',
  '**8**   a) not   b) am not   c) do not',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: putting your position to somebody who disagrees with it.',
  'The shape: ⚠ **their objection, conceded** · **your position, with the one reason** · ⚠ **a question asking what you have got wrong**.',
  '⚠ **In eighty words the concession goes first.** A letter that reaches the concession in its last line has already been read as a defence.',
  '⚠ And end with the question. The whole purpose of writing to the person who disagrees is what they will send back.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** You have a position and a colleague disagrees with it. Write to them (**60 to 80 words**). ⚠ **Concede their objection first**, give **your position with one reason**, and ⚠ **ask what you have got wrong**.'));
out.push(p('______________, before I put this to ______________ I want to put it to you. The strongest thing against my position is yours: ______________. That is true and I agree with it. I am still recommending ______________, because ______________. Is there anything in it I have got wrong?'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Their objection conceded, first', ''],
  ['The position, with one reason', ''],
  ['A question asking what the writer has got wrong', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a full position paper on a real question (**100 to 140 words**): both hands, an *on balance* with a third thing, the strongest argument against you conceded, what is left unsolved, and where you would be if the third thing fell through.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then put one position to the person who disagrees with it, concede theirs first, and write down what they supply (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  ___ view is that we should repair it.   a) My own   b) I am   c) To me',
  '2  I ___ the view that the hire is not worth it.   a) have   b) take   c) make',
  '3  That is true ___ the afternoon.   a) for   b) about   c) of',
  '4  ___ it is nine years old, and the case still holds.   a) Admittedly   b) Admitted   c) Admitting',
  '5  It is true ___ this may not be the last repair.   a) what   b) which   c) that',
  '6  Hala, you have priced sixty of these — ___ happens at the counter?   a) what   b) that   c) which',
  '7  So are we ___: the fifth, Nadia prints it, from January.   a) agree   b) agreeing   c) agreed',
  '8  ___ balance, the change should go ahead.   a) In   b) On   c) At',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 12.15** Listen to the exchange. Complete the note.   What is conceded: ______   The reframing sentence: ______   The question asked: ______   The undocumented fact: ______   How long nobody had written it down: ______'));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Nour', 'I will start with the strongest thing against my position, which is yours. Friday is wrap morning and you cannot be at the gate and on the forklift. That is true and I agree with it completely.'],
  ['Nour', 'I am still recommending Friday, because the Saturday objections cannot be changed by anybody here and yours can. So my position is that your objection is the one worth solving, not the one worth losing on.'],
  ['Nour', 'Is there anything in it I have got wrong?'],
  ['Abu Yasser', 'One thing. If the wrap comes on Thursday it comes on the day the Mezzeh counter does its own order, so Thursday has the wrap, the counter order and the Friday Ghouta load in four hours.'],
  ['Abu Yasser', 'You will not find it in any paper, because the Thursday counter order is a thing I do and nobody has written it down in eleven years.'],
]));
out.push(p('**C  Writing.** Write a position in full (**50 words or more**): both hands, an *on balance* with a third thing, and the strongest argument against you conceded.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state a view with one reason and a figure, and no escape clause',
  '☐ agree with the half of a claim that is right, and put a figure on it',
  '☐ concede the strongest point against me, and cost the worst case',
  '☐ bring somebody in by name, by what they have done, and about that thing',
  '☐ close a decision in four elements and write it down before the room empties',
  '☐ write both hands and then an *on balance* with a third thing in it',
  '☐ put a position to somebody who disagrees, and collect what they supply',
  '☐ write a view, a split-claim note, a recommendation with the case against it first, and a position paper',
], C.lblue, C.navy));

// ---------- END OF BOOK 1 ----------
// ⚠ Series convention, from A2 unit24: the end-of-book block runs on from the
// "I can…" box with no extra pb() and no h1, so the closing unit keeps the
// house figure of 8. The bound volume's page arithmetic depends on it.
out.push(sp());
out.push(box('End of Book 1 — what you have done', [
  '**Twelve units, eighty-four cycles, 360 items of office English, and four written tests\' worth of practice.** You have written a handover note, a procedure page, an authority matrix, a request for authorisation, an incident report with an evidence paragraph, an options paper, an inspection note, minutes, a correction to a set of terms, and a position paper. ⚠ **Those are not exercises. They are the ten documents a coordinator writes.**',
  '**And four things that run through all twelve units**, which are what Book 1 was actually teaching:',
  '⚠ **1 · A number where a number belongs.** Unit 4 put marks on it, Unit 6 made it a figure and a thing, Unit 7 made it a consequence, Unit 8 made it a measured *would*. **A claim without a number is a claim that cannot be disbelieved, and therefore cannot be believed.**',
  '⚠ **2 · Say where it came from.** Unit 5\'s *from* and *against*, Unit 7\'s *what I saw and what I was told*, Unit 9\'s *the mark it rests on*, Unit 10\'s *one sentence theirs and one ours*. **Every document in this book is readable six months later because it says which part is evidence.**',
  '⚠ **3 · Say what would change your mind.** Unit 9\'s overturning condition, Unit 8\'s do-nothing option, Unit 12\'s *where I would be if the third thing fell through*. **A position that cannot be overturned is a preference.**',
  '⚠ **4 · Ask the person who does the work.** It is in every mediation cycle in the book: Abu Yasser\'s missing clause in 5.7, Fadi\'s telephone number in 7.7, the half-objection in 10.7, the definitions page in 11.7, and the eleven undocumented years in 12.7. **The facts that decide a question are held by people nobody has asked.**',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Before Book 2', [
  '**Book 2 is the export book.** Sham Trading takes an order from a buyer who cannot telephone the warehouse, and every document you have learned to write has to work for somebody who has never seen the building. ⚠ **Nothing in Book 1 becomes easier; the reader gets further away.**',
  '**And you will be the one explaining.** Lina Barakat joins as a trainee in Unit 13, so Book 2 is Book 1 from the other side: you will write the procedure page that somebody else has to follow, and you will be the person who finds out — the way Nour does in 5.7 — that the clause they needed was never in it.',
  '⚠ **One thing to do before Unit 13.** Take the ten documents listed above and find out which of them your own workplace has. **In most workplaces it is two or three** — and the first useful thing you will do with this book is write a fourth.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
