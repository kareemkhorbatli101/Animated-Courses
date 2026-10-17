// Proactive English B1 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, second band.** Name the criterion before you say anything. Write your partner three sentences, each one opening with the criterion it marks against, and then what you found.';

out.push(h1('Unit 21  Negotiating and Compromise'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**21.1**  say what the other side needs, in their words',
  '**21.2**  make an offer with a condition attached',
  '**21.3**  say what you would give up, and in exchange for what',
  '**21.4**  respond to a counter-offer',
  '**21.5**  state the line you will not cross',
  '**21.6**  write the two-column page',
  '**21.7**  Review & Mediate: two people who both compromised',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Unit 19 asked for one thing. Unit 21 is what happens when the other side wants something too** — and almost everything in the unit depends on one distinction: **what somebody wants** is their position, and **what they need** is the thing underneath it. A position has one shape and cannot be met halfway. A need usually has three or four shapes, and one of them may cost you nothing at all.',
  '**21.3 is the hardest cycle in the book so far**, and not because of the grammar. Saying what you would give up is easy; saying **in exchange for what**, in the same sentence, is almost impossible for most people. A concession with no exchange named is not a negotiation — it is a retreat, and it is remembered afterwards as a precedent rather than as a kindness.',
  '**21.5 is the other half of it.** A negotiation without a stated limit is not generous; it is unreadable, because the other side cannot tell when they have reached the end. _Whatever else we agree, I am not able to…_ — one sentence, no threat, and it makes everything before it believable.',
  '**And the peer-review slip is in its second band**, as from Unit 19: name the criterion before you say anything. The criteria for each cycle are printed at the end of each 7P stage.',
  '**Bring one thing you want from somebody who also wants something from you** — at work, at home, from a supplier, from a committee, from a landlord — **and what you think they want, written in their words and not yours.** 21.1 begins with that second column, and it cannot be done without it.',
], C.lyellow, C.orange));

// ======================= 21.1 =======================
out.push(pb());
out.push(h2('21.1  What they want, and what they need'));
out.push(p('**Function:** saying what the other side needs, in their words   ·   **Grammar:** _what they want_ against _what they need_   ·   **Pronunciation:** the contrastive stress on _want_ and _need_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out the **second** column you brought — what you think the other side wants, in their words. Not what you want. Your teacher writes the eleven on the board, and then asks of each: _are those their words, or yours?_'));
out.push(board('What she wants is somebody to lead the report. What she needs is not to be the only one who can.', '_what they want_ · _what they need_'));
out.push(p('**b**  Position or need? **1** _He wants the half-sheet back._  **2** _He needs the workshop to see an urgent job the same hour._  **3** _She wants a second trolley._  **4** _She needs the round not to finish late._  **5** _They want the form submitted by the 20th._  **6** _They need to close the month\'s registrations in one batch._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rasha think her manager wants, and what does she now think the manager needs?   **A** somebody to lead the report; not to be the only person who can do a thing   **B** a second trolley; more staff   **C** the rota reviewed; a quiet ward'));
out.push(p('**b**  Listen again. **1** Why does she say she had been negotiating with the wrong column for a month?   **2** What does Ms Huda say the difference between a want and a need buys you?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  The other column', [
  ['Rasha', 'I have been asked to think about the night practice lead post, and the letter says the ward manager will discuss it with me before the end of the year. I have spent a month making a list of what I want, and this week I made the other list, and the other list has changed everything.'],
  ['Ms Huda', 'Read your first list.'],
  ['Rasha', 'Short. The three-night blocks kept. Somebody else trained on the pump settings. And the trolley question answered by somebody who is not me.'],
  ['Nour', 'And the other list?'],
  ['Rasha', 'What she wants. In her words, as far as I can reconstruct them: somebody to lead the September report next year, somebody to take the Thursday rota meeting, and somebody who will not go over her head to the directorate.'],
  ['Omar', 'Those are three things she wants from you.'],
  ['Rasha', 'They are, and when I wrote them down I thought: I can give her two of the three and the third is impossible. And then I sat with it for two days and I think all three of those are **positions**. What she actually needs is one thing, and it is underneath all three.'],
  ['Jad', 'What is it?'],
  ['Rasha', 'Not to be the only person in that building who can answer a question about nights. She has been the only one for four years. The report, the rota meeting and the directorate are three shapes of the same need, and I had been negotiating against the shapes.'],
  ['Lubna', 'How do you know that is the need?'],
  ['Rasha', 'I do not know it. I think it, and I can be wrong, and the way to find out is to ask her — which is the thing I have never done in nine years, because I have spent nine years assuming that what she says is what she means.'],
  ['Ms Huda', 'Now why this matters, and it is the whole unit. A **position** has one shape. Somebody wants the form by the twentieth, or they want a second trolley, and you can meet it or not meet it and there is nothing in between. A **need** usually has three or four shapes — and one of those shapes may cost you nothing at all. Rasha cannot give her manager four years of not being alone. She can give her a trained second person on nights, in forty minutes, for nothing, which is the first thing on her own list.'],
  ['Rasha', 'The first thing on my list is the second thing on hers, and I have been carrying them as two negotiations.'],
  ['Ms Huda', 'Which is where almost every negotiation in a workplace actually ends, and the people in it never find out.'],
]));
out.push(sp());
out.push(box('Language box – wants and needs', [
  '**Say both, in two sentences, with the stress on the contrast:** _What she **wants** is somebody to lead the report. What she **needs** is not to be the only person who can answer a question about nights._',
  table(['a position', 'the need underneath it'], [
    ['_He wants the half-sheet back._', '_He needs the workshop to see an urgent job the same hour._'],
    ['_She wants a second trolley._', '_She needs the round not to finish late._'],
    ['_They want the form by the 20th._', '_They need to close the month\'s registrations in one batch._'],
    ['_He wants to choose the names._', '_He needs the right people in the room._'],
  ], [2.2, 2.4]),
  '**A position has one shape; a need has three or four.** A position can only be met or refused. A need can be met in several ways, and **one of the ways may cost you nothing** — which is the only reason anybody ever finds an agreement that both sides prefer to the one they came in with.',
  '**Write the other side\'s column in _their_ words, not yours.** The moment you translate it, you have translated it into something you can refuse. _Somebody who will not go over her head to the directorate_ is her sentence; _she is possessive about her ward_ is yours, and it is unusable.',
  '⚠ **And say that you may be wrong, because you are guessing.** _I do not know it. I think it, and the way to find out is to ask her._ A need you have inferred and not checked is a theory, and acting on an unchecked theory about somebody\'s motives is how negotiations become arguments about character.',
  '**The question that finds a need: _why that?_** Asked three times, politely, it turns almost any position into a need — and it is the one question people do not ask, because asking it sounds like a challenge when it is actually the opposite.',
  '**Useful phrases:** I have spent a month making a list of what I want, and this week I made the other list · those are three shapes of the same need · I had been negotiating against the shapes · the first thing on my list is the second thing on hers.',
  '**Practise:** Give the position, then the need underneath it, then one shape of the need that costs you nothing.  1 a supplier  2 a manager  3 a colleague  4 a committee or office  5 somebody at home',
  '**Pronunciation.** 🔊 **Track 21.2** The contrast is carried entirely by stress on the two verbs, and the rest of both sentences runs flat: _what she **WANTS** is… what she **NEEDS** is…_ Said without the contrast, the two sentences sound like a repetition. Listen to six pairs and say which verb is stressed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a position the other side has taken, in their words. B asks _why that?_ three times. A then says the need, and the one shape of it that would cost A nothing. Swap cards.'));
out.push(dlg(null, [
  ['A', 'What they want is __________. Those are their words.'],
  ['B', 'Why that?'],
  ['A', 'Because __________.'],
  ['B', 'And why that?'],
  ['A', 'Because __________. So what they need is __________.'],
  ['B', 'And which shape of that need would cost you nothing?'],
]));
out.push(table(['Card A – the other side', 'Card B – the other side'], [
  ['a manager who wants something from you', 'a supplier who wants earlier orders'],
  ['an office that wants a form by a date', 'a colleague who wants a shift changed'],
  ['a committee that wants a report', 'a landlord or neighbour who wants something'],
  ['somebody at home who wants your time', 'somebody junior who wants your job done differently'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight needs, and mark the ones where a **costless shape** was found. In a first run it is three or four out of eight — which is the finding: in about half of all negotiations there is a way of meeting the other side\'s need that costs the speaker nothing, and it is invisible until somebody has asked _why that?_ three times.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give both your columns. Read the other side\'s in their words and say, honestly, which phrases are theirs and which are your translation. Then name the need you think is underneath, and say that you may be wrong.'));
out.push(p('**b**  Swap. Then each of you find one shape of your partner\'s inferred need that would cost them nothing — and say what single question would tell them whether the need is real.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rasha has been asked to think about the night practice lead post, and the letter says the ward manager will discuss it with her before the end of the year. She has spent a month making a list of what she wants, and this week she made the other list, and the other list has changed everything. Her own is short: the three-night blocks kept, somebody else trained on the pump settings, and the trolley question answered by somebody who is not her. The other list — what the manager wants, in her words as far as Rasha can reconstruct them — is somebody to lead the September report next year, somebody to take the Thursday rota meeting, and somebody who will not go over her head to the directorate. Omar said those are three things she wants from Rasha, and Rasha agreed, and said that when she wrote them down she thought she could give two of the three and the third was impossible — and then she sat with it for two days and now thinks all three are positions. What her manager actually needs is one thing underneath all three: not to be the only person in that building who can answer a question about nights, which she has been for four years. The report, the rota meeting and the directorate are three shapes of the same need, and Rasha had been negotiating against the shapes. Lubna asked how she knows, and she said she does not know it, she thinks it, she can be wrong, and the way to find out is to ask — which she has never done in nine years, because she has spent nine years assuming that what her manager says is what she means. Ms Huda said that is the whole unit: a position has one shape and can only be met or refused, and a need usually has three or four, and one of them may cost you nothing. Rasha cannot give her manager four years of not being alone; she can give her a trained second person on nights, in forty minutes, for nothing — which is the first thing on her own list. Rasha said the first thing on her list is the second thing on her manager\'s, and she has been carrying them as two negotiations._'));
out.push(p('**Listener task:** write one need from this room and the shape of it that costs nothing.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Rasha writes before the meeting, for herself. Answer the questions.'));
out.push(model([
  '**BEFORE THE MEETING · the night practice lead** · R. Barakat · for nobody but me · 14 December',
  '**What I want.** Three things. The three-night blocks kept beyond the trial. One other person on nights trained on the pump settings. And the trolley question answered by somebody who is not me.',
  '**What she wants, in her words.** Somebody to lead the September report next year. Somebody to take the Thursday rota meeting. And — this is the phrase she used in October and I wrote it down the same evening — "somebody who will not go over my head to the directorate".',
  '**What I think she needs, and I may be wrong.** Not to be the only person in that building who can answer a question about nights. She has been the only one since 2022. All three of the things she wants are shapes of that, and I had been treating them as three demands.',
  '**How I could be wrong about it.** She may simply want the report written, because writing it took her three weekends last year. If that is the need, then the answer is still mine to give and it is a smaller answer, and I should rather find that out in the meeting than guess it now.',
  '**The shape that costs me nothing.** A second person on nights trained on the pump settings. That is forty minutes of my own time, unpaid, and it is **the first thing on my own list**. If it is also one shape of her need, then the two of us have been carrying the same item as two separate negotiations for a year.',
  '**The question I shall ask first, and I have never asked it in nine years.** "Which of the three matters most to you, and why that one?"',
  '**And what I shall not do.** I shall not tell her what I think she needs. If I open with my theory about her, the meeting becomes a conversation about her character and I shall lose it in two minutes, and deserve to.',
]));
out.push(item('1', 'Which phrase of the manager\'s does she quote exactly, and when did she write it down?'));
out.push(item('2', 'What alternative need does she allow for, and why does she say she would rather find out than guess?'));
out.push(item('3', 'What will she not do, and what does she say would happen if she did?'));
out.push(writers([
  'A page before a negotiation: **what you want** → **what they want, in their words** → **what you think they need, and that you may be wrong** → **how you could be wrong** → **the shape that costs you nothing** → **the question you will ask first** → **and the thing you will not do**.',
  'Quote at least one of their phrases exactly, with the date you heard it. _"Somebody who will not go over my head to the directorate" — she used that in October and I wrote it down the same evening._ Their words are evidence; your summary of their words is an opinion.',
  'Write the paragraph headed **how I could be wrong**. It is the paragraph nobody writes and the one that prevents the commonest disaster in negotiation, which is arriving with a theory about somebody and defending it.',
  'Name the costless shape in one line, and say whether it is already on your own list. In about half of all cases it is — and in those cases both sides have been carrying one item as two negotiations.',
  '⚠ End with what you will **not** do. _I shall not tell her what I think she needs._ An inferred need, said out loud to the person it is about, turns a negotiation into a conversation about their character, and you will lose it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page before the meeting (60 words or more).'));
out.push(p('**BEFORE THE MEETING · ______________** · ______________   **What I want.** ______________.   **What they want, in their words.** ______________. And — the phrase they used on ______________ — "______________".   **What I think they need, and I may be wrong.** ______________. All ______ of the things they want are shapes of that.   **How I could be wrong about it.** ______________. I should rather find that out in the meeting than guess it now.   **The shape that costs me nothing.** ______________. It is ______________, and it is ______________ on my own list.   **The question I shall ask first.** "______________?"   **And what I shall not do.** ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The other side\'s column in their words, with one phrase quoted and dated',
  '_What they want_ and _what they need_ stated as two different things',
  'A paragraph saying how you could be wrong',
  'The costless shape named, and the thing you will not do',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read how they could be wrong.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (140 words or more) before a real negotiation of your own: both columns, one of their phrases quoted and dated, the need you infer and how you could be wrong, the costless shape, your first question, and the thing you will not do.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **their words and not yours**, **want against need**, **how you could be wrong**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us had a second column before today?** Count. Then the one that matters: how many found that something on their own list is also a shape of the other side\'s need? In about half the room — and in every one of those cases two people have been carrying one item as two separate negotiations, sometimes for years, and neither has ever found out.'));
out.push(hw('Write the page (60+ words) with both columns. Then ask the other side your first question — _why that one?_ — and write down their answer in their words, not in yours.'));

// ======================= 21.2 =======================
out.push(pb());
out.push(h2('21.2  Provided that, and as long as'));
out.push(p('**Function:** making an offer with a condition attached   ·   **Grammar:** _provided that_ · _as long as_ · _on condition that_   ·   **Pronunciation:** the flat tone on the condition'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: an offer you have made that had no condition on it — and then say, out loud, what you wish you had attached to it.'));
out.push(board('I will run the forty minutes for both of them, provided that the letter names a date.', '_provided that_ + a clause'));
out.push(p('**b**  Attach the condition. **1** _I will take the Thursday meeting. (the agenda comes to me on the Tuesday)_  **2** _I will train a second person. (it is in the January rota)_  **3** _We will hold the stock. (the order is confirmed in writing)_  **4** _I will cover the shift. (it is the last time this month)_  **5** _I will write the report. (somebody else collects the figures)_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Umm Kinan offering, and what is her condition?   **A** forty minutes for two colleagues; that the directorate letter names a date   **B** a training afternoon; that she is paid   **C** nothing; she has refused'));
out.push(p('**b**  Listen again. **1** What happened in September when she offered something with no condition on it?   **2** What does Ms Huda say a condition does for the person you are offering to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  The thing I should have attached', [
  ['Umm Kinan', 'In September I offered to show two colleagues how to use the projector. Forty minutes each, in my own room, in my own time. Nobody asked me to and I meant it entirely.'],
  ['Ms Huda', 'And?'],
  ['Umm Kinan', 'And nothing happened, and in October the deputy head thanked me for it in front of eleven people, and in November my offer appeared in a paragraph of the department\'s return to the directorate as evidence that in-house training is taking place.'],
  ['Omar', 'Without the training having taken place.'],
  ['Umm Kinan', 'Without one minute of it having taken place. And I am not angry with anybody, because I made an offer with nothing attached to it, and an offer with nothing attached to it is a sentence somebody else can use.'],
  ['Jad', 'What should have been attached?'],
  ['Umm Kinan', 'A day. That is all. "I will show two colleagues how to use the projector, provided that the forty minutes is in somebody\'s diary before the end of term." Thirteen words, and the paragraph in the return could not have been written.'],
  ['Nour', 'And now?'],
  ['Umm Kinan', 'Now there is a letter, which came because of the twenty-seventh of October meeting, and it names the twentieth of January. So this time the offer has the condition in it: I will run the forty minutes for both of them, **provided that** the January letter is attached to the request, so that the date in it belongs to somebody besides me.'],
  ['Lubna', 'Does a condition not look as though you are being difficult?'],
  ['Umm Kinan', 'That is what I believed for twenty-four years, and I think it is the other way round. Without a condition, the deputy head could not have refused and could not have arranged it either — she had nothing to arrange. The condition is what gives her something to do.'],
  ['Ms Huda', 'Which is the point of the cycle and it is not obvious. A condition is not a defence. **It is the part of the offer the other person can act on.** An unconditional offer is a feeling: it is kind, it is sincere, and there is nothing in it for anybody to do, so nothing is done — and later it is quoted. _Provided that the forty minutes is in a diary_ hands the other person a task they can complete in four seconds, and the offer stops being a feeling and becomes an arrangement.'],
  ['Umm Kinan', 'And it protects them as well. If I am ill in January, the diary entry is still there and somebody else can do it.'],
]));
out.push(sp());
out.push(box('Language box – offers with conditions', [
  '**The three forms, in rising formality:** _**as long as**_ (spoken, friendly) · _**provided that**_ (written, neutral, the workhorse) · _**on condition that**_ (formal, and slightly cold — use it when you mean it to be).',
  table(['you say', 'what the other person can do with it'], [
    ['_I will do it._', 'nothing — it is a feeling'],
    ['_I will do it **as long as** somebody puts it in the diary._', 'put it in the diary'],
    ['_I will do it **provided that** the January letter is attached._', 'attach the letter'],
    ['_I will do it **on condition that** it is minuted._', 'minute it'],
  ], [2.2, 2.4]),
  '⚠ **The verb after all three is present, not future:** ~~provided that the letter will be attached~~ → _provided that the letter **is** attached_. Same rule as _when_ and _if_ in Unit 20.',
  '⚠ **And the condition must be something they can do, not something they must feel or promise.** _Provided that the forty minutes is in somebody\'s diary_ is a condition. _Provided that it is taken seriously_ is a wish, and a wish presented as a condition is read as suspicion (19.6).',
  '**The reason a condition is not unfriendly, and it is counter-intuitive: a condition is the part of the offer the other person can act on.** An unconditional offer is kind and sincere and contains nothing to do — so nothing is done, and later it is quoted in a return to somebody. _The condition is what gives them something to do._',
  '**It also protects them.** _If I am ill in January, the diary entry is still there and somebody else can do it._ A condition turns a personal offer into an arrangement that survives the person who made it.',
  '⚠ **Keep the condition small, singular and checkable.** A day in a diary. A letter attached. A name on a list. One line in a specification. If the condition needs a meeting, it is not a condition, it is a second negotiation.',
  '**Useful phrases:** nobody asked me to and I meant it entirely · an offer with nothing attached to it is a sentence somebody else can use · thirteen words, and the paragraph could not have been written · the condition is what gives her something to do.',
  '**Practise:** Attach one small, checkable condition to each.  1 covering somebody\'s work  2 training somebody  3 writing something  4 attending something  5 lending something',
  '**Pronunciation.** 🔊 **Track 21.4** The condition is said **flat and fast**, with no stress on _provided_ and none on the word that follows it: _I will run the forty minutes ‖ prəvaidəd ðət the letter is attached._ A stressed _provided_ turns the offer into a demand. Listen to six and say which two are stressed wrongly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes an unconditional offer. B says what the other side could **do** with it, which is nothing. A then remakes the offer with one small checkable condition, and B says what they would now do and when. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I will __________.'],
  ['B', 'And what am I supposed to do with that?'],
  ['A', 'I will __________, provided that __________.'],
  ['B', 'Then I shall __________, and I can do it __________.'],
]));
out.push(table(['Card A – the offer', 'Card B – the offer'], [
  ['to train or show somebody something', 'to cover somebody\'s work'],
  ['to write or produce something extra', 'to attend something outside your hours'],
  ['to take on part of somebody else\'s job', 'to lend equipment, space or a person'],
  ['to take a meeting nobody wants', 'to be the contact for something'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight conditions and mark each **doable in under a minute** or not. The ones that are doable in under a minute are the ones that will be met; the others are second negotiations wearing a condition\'s clothes, and they are the reason an offer that looked generous ends in nothing.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name an unconditional offer you have actually made in the last year. Say what happened to it. Then remake it with one small checkable condition.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s condition could be done in under a minute by the person it is addressed to — and if not, make it smaller.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In September Umm Kinan offered to show two colleagues how to use the projector — forty minutes each, in her own room, in her own time. Nobody asked her to and she meant it entirely. And nothing happened; and in October the deputy head thanked her for it in front of eleven people; and in November her offer appeared in a paragraph of the department\'s return to the directorate as evidence that in-house training is taking place — without one minute of it having taken place. She says she is not angry with anybody, because she made an offer with nothing attached to it, and an offer with nothing attached to it is a sentence somebody else can use. Jad asked what should have been attached, and the answer is a day: "I will show two colleagues how to use the projector, provided that the forty minutes is in somebody\'s diary before the end of term." Thirteen words, and the paragraph in the return could not have been written. Now there is a letter, which came out of the twenty-seventh of October meeting, and it names the twentieth of January — so this time the offer has the condition in it: she will run the forty minutes for both of them provided that the January letter is attached to the request, so that the date in it belongs to somebody besides her. Lubna asked whether a condition does not look as though you are being difficult, and Umm Kinan said that is what she believed for twenty-four years and she now thinks it is the other way round: without a condition the deputy head could not have refused and could not have arranged it either, because she had nothing to arrange — the condition is what gives her something to do. Ms Huda said that is the point of the cycle and it is not obvious: a condition is not a defence, it is the part of the offer the other person can act on. An unconditional offer is a feeling — kind, sincere, and with nothing in it for anybody to do, so nothing is done and later it is quoted. And Umm Kinan added that it protects them too: if she is ill in January, the diary entry is still there and somebody else can do it._'));
out.push(p('**Listener task:** write one offer from this room that was used by somebody else, and the condition that would have prevented it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Umm Kinan\'s note to the deputy head. Answer the questions.'));
out.push(model([
  '**TO THE DEPUTY HEAD · the forty minutes** · S. Dibo · 15 December',
  'I offered in September to show two colleagues how to use the projector — forty minutes each, in my room, in my own time. I am making the offer again, and this time with one condition attached to it, for a reason I shall give at the end.',
  '**The offer.** I will take two colleagues, separately, for forty minutes each, in Room 9, in January.',
  '**The condition.** Provided that the two forty-minute slots are entered in the cover diary before the end of this term, with the two names against them.',
  '**Why the condition and not simply the offer.** Because an offer with nothing attached to it gave you nothing to arrange. You could not refuse it and you could not organise it, and in November it appeared in the department\'s return to the directorate as evidence of in-house training that has not yet happened. I am not raising that as a complaint and I do not think anybody did it deliberately: a sentence with no date in it is available to whoever needs a sentence.',
  '**What the condition costs you.** Two lines in the cover diary and two names. I should think under a minute.',
  '**What it does for me, and I may as well say it.** It means that if the forty minutes does not happen, that will be visible, and the visibility is the whole of what I am asking for. I have offered things in that building for twenty-four years and I have never once attached a day to one.',
  '**And what it does for you, which I did not see until this week.** If I am ill in January, the diary entry is still there and somebody else can take them — which an offer in my name alone could never have survived.',
]));
out.push(item('1', 'What exactly is the condition, and how long does she say it would take?'));
out.push(item('2', 'What happened to the September offer, and how does she describe it?'));
out.push(item('3', 'What does she say the condition does for the deputy head?'));
out.push(writers([
  'An offer with a condition: **the offer, in one sentence** → **the condition, in one sentence** → **why the condition and not simply the offer** → **what the condition costs them, in time** → **what it does for you, said plainly** → **and what it does for them**.',
  'Keep the offer and the condition in two separate sentences with headings. A condition folded into the same sentence as the offer is read as a hedge; a condition with its own line is read as a term.',
  'Put the cost to them in units of time. _Two lines in the cover diary and two names. I should think under a minute._ The reader\'s first silent question is _what is this going to cost me_, and answering it in the fourth line removes the only real obstacle.',
  'Say what the condition does for **you** without apologising for it. _The visibility is the whole of what I am asking for._ A condition whose purpose is hidden is read as suspicion; a condition whose purpose is stated is read as a term.',
  '⚠ And describe what happened to the earlier offer without accusing anybody: _a sentence with no date in it is available to whoever needs a sentence._ That is both true and unanswerable, and it is why the note can be acted on rather than defended.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the offer with its condition (60 words or more).'));
out.push(p('**TO ______________** · ______________   I offered in ______________ to ______________. I am making the offer again, with one condition attached.   **The offer.** I will ______________.   **The condition.** Provided that ______________.   **Why the condition and not simply the offer.** Because ______________. I am not raising that as a complaint, and ______________.   **What the condition costs you.** ______________. I should think ______________.   **What it does for me, and I may as well say it.** ______________.   **And what it does for you.** If ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Offer and condition in separate sentences, each on its own line',
  'The present tense after _provided that_ / _as long as_',
  'The condition doable in under a minute, and the cost stated in time',
  'What the condition does for you, said without apology',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their condition does for the other person.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more): the offer, the condition, why a condition at all, what it costs them in time, what it does for you, and what it does for them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the condition doable in under a minute**, **the cost stated in time**, **what the condition does for them**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many unconditional offers has this room made in the last year, and how many of them produced anything?** Count both. The second number is much the smaller, and the reason is not ingratitude: an unconditional offer contains nothing for anybody to do. Then the uncomfortable half — how many were later quoted by somebody as evidence of something?'));
out.push(hw('Write the note (60+ words) and send it. Then take one standing offer you have made that is still unconditional, and attach a day to it in one sentence, in writing, to the person it was made to.'));

// ======================= 21.3 =======================
out.push(pb());
out.push(h2('21.3  I would be prepared to, if you would'));
out.push(p('**Function:** saying what you would give up, and in exchange for what   ·   **Grammar:** _I would be prepared to… if you would…_ · _in exchange for_   ·   **Pronunciation:** the two halves given equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each, and it must have **two halves**: _I would be prepared to ______ if you would ______._ Your teacher writes only the second halves on the board. Several students will not have one.'));
out.push(board('I would be prepared to accept the register at the door if the last forty minutes were not minuted.', 'the concession and its exchange, in one sentence'));
out.push(p('**b**  Add the second half. **1** _I would be prepared to work the Thursday._  **2** _I would give up the half-sheet._  **3** _We could accept the longer delivery._  **4** _I would stop asking about the trolley._  **5** _I would take the report on._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What would Fares give up, and in exchange for what?   **A** the second day in January; the forty unminuted minutes   **B** the register; nothing   **C** the room; a second day'));
out.push(p('**b**  Listen again. **1** What does he say happened the last three times he gave something up without naming an exchange?   **2** What does Ms Huda say a concession with no exchange becomes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  Both halves, in one sentence', [
  ['Fares', 'I have had the answer about the forty minutes and it is a half. They will do the forty minutes unminuted — and they want the second day in January, which I asked for in the letter I threw away, and they want it because the new product training lands in January and they are short of days.'],
  ['Ms Huda', 'So you are being offered the thing you wanted.'],
  ['Fares', 'I am being offered the thing I wanted and asked to take on a day I also wanted, and the two are not connected in their letter at all. Which means that if I say yes to both, in a year the forty minutes will be a thing they gave me and the second day will be a thing I asked for, and both of those will be wrong.'],
  ['Nour', 'Does that matter, if you get both?'],
  ['Fares', 'It matters in the next negotiation, and the next negotiation is in a year, and I have been in this trade for eleven years and every year I have the same conversation from a worse position. The last three times I gave something up, I gave it up and said nothing about an exchange, because naming an exchange felt like bargaining and I thought I was above it.'],
  ['Omar', 'What happened the three times?'],
  ['Fares', 'Each time the thing I gave up became the new starting point and the thing I got became a favour. In 2022 I took on two extra towns and said nothing, and two towns is now what a representative does. Nobody decided that. I conceded it and did not say so.'],
  ['Jad', 'So what is the sentence?'],
  ['Fares', 'One sentence with both halves in it. "I would be prepared to take the second day in January, **in exchange for** the last forty minutes of both days being unminuted and unreported." Not two sentences, not two paragraphs, and not a letter saying yes followed by a letter asking.'],
  ['Lubna', 'Why does it have to be one sentence?'],
  ['Fares', 'Because in a year nobody will have both paragraphs. They will have one. And whichever one they have will be the whole agreement.'],
  ['Ms Huda', 'Which is the cycle, and it is not about money or about being hard. **A concession with no exchange named is not a negotiation; it is a retreat — and it is remembered afterwards as a precedent and not as a kindness.** That is not cynicism about people; it is how documents work. A year later there is a page, and the page says what it says. So put both halves in one sentence, and the sentence is the thing that survives.'],
  ['Fares', 'And the second half is the hard one. I can say what I would give up all day.'],
  ['Ms Huda', 'Everybody can. That is why the second half is the only part of this cycle worth practising.'],
]));
out.push(sp());
out.push(box('Language box – the concession and its exchange', [
  '**One sentence, two halves, and the second half is the one that matters:**',
  table(['the shape', 'example'], [
    ['_I would be prepared to **X** if you would **Y**._', '_…to take the second day, if the forty minutes were unminuted._'],
    ['_I would be prepared to **X** in exchange for **Y**._', '_…to accept the register, in exchange for forty unminuted minutes._'],
    ['_I would **X**, in return for **Y**._', '_I would drop the audit, in return for five words in the specification._'],
    ['_I could **X**, as long as **Y**._', '_I could hold the stock, as long as the order is confirmed in writing._'],
  ], [2.1, 2.5]),
  '⚠ **_Would be prepared to_ + infinitive; _in exchange for_ + a noun or an _-ing_:** ~~in exchange for the minutes are not taken~~ → _in exchange for the forty minutes **being** unminuted_ / _…for **no minutes being taken**_.',
  '⚠ **And after _if you would_, the verb is plain:** ~~if you would to agree~~ → _if you would **agree**_.',
  '**Why one sentence and not two.** In a year nobody will have both paragraphs. They will have one, and whichever one they have will be the whole agreement. A concession in one letter and a request in another is two documents, and documents get separated.',
  '⚠ **A concession with no exchange named is not a negotiation; it is a retreat** — and a retreat is remembered as a **precedent**, not as a kindness. _In 2022 I took on two extra towns and said nothing, and two towns is now what a representative does. Nobody decided that. I conceded it and did not say so._',
  '**The second half is the hard half, and that is the only part worth practising.** Everybody can say what they would give up. Naming what you want for it feels like bargaining, and people who believe themselves above bargaining spend eleven years negotiating from a worse position each time.',
  '**And the exchange does not have to be equal — it has to be _named_.** Five words in a specification against dropping an audit is not an equal trade, and it is a complete sentence, which is all it needs to be.',
  '**Useful phrases:** the two are not connected in their letter at all · the thing I gave up became the new starting point and the thing I got became a favour · nobody decided that; I conceded it and did not say so · in a year nobody will have both paragraphs.',
  '**Practise:** One sentence, both halves, for each.  1 extra work  2 a longer wait  3 a rule you dislike  4 a question you would stop asking  5 something you would stop insisting on',
  '**Pronunciation.** 🔊 **Track 21.6** Both halves take equal weight and the hinge — _if you would_ or _in exchange for_ — runs flat between them: _I would be prePARED to take the second DAY ‖ in exchange for the forty minutes being unMINuted._ Stress the first half only, and the second half sounds like an afterthought. Listen to six and say which half is stressed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names something they would give up. B asks the question of this cycle: _in exchange for what?_ A then says both halves in one sentence. B asks the harder follow-up. Swap cards.'));
out.push(dlg(null, [
  ['A', 'I would be prepared to give up __________.'],
  ['B', 'In exchange for what?'],
  ['A', 'I would be prepared to __________ in exchange for __________.'],
  ['B', 'And what happened the last time you gave something up without saying that?'],
]));
out.push(table(['Card A – what you would give up', 'Card B – what you would give up'], [
  ['extra hours or an extra day', 'a longer delivery or a later date'],
  ['a rule or a form you dislike', 'a question you keep asking'],
  ['part of your own job', 'the right to choose something'],
  ['a figure you have been defending', 'a place, a room or a space'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight exchanges. Then the count that makes the cycle: how many of the eight speakers could name what happened the **last** time they conceded without an exchange? Most of them can, and in almost every case the answer is the same shape — the thing given up became the new starting point and the thing received became a favour.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name the biggest thing you have ever conceded at work without naming an exchange. Say what it became. Then take the thing you are negotiating now and say both halves in one sentence.'));
out.push(p('**b**  Swap. Then each of you test your partner\'s second half: is it a **thing** that can be written in a document, or is it a feeling? If it is a feeling, find the thing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fares has had the answer about the forty minutes and it is a half. They will do the forty minutes unminuted — and they want the second day in January, which he asked for in the letter he threw away, and they want it because the new product training lands in January and they are short of days. Ms Huda said so he is being offered the thing he wanted, and he said he is being offered the thing he wanted and asked to take on a day he also wanted, and the two are not connected in their letter at all — which means that if he says yes to both, in a year the forty minutes will be a thing they gave him and the second day will be a thing he asked for, and both of those will be wrong. Nour asked whether that matters if he gets both, and he said it matters in the next negotiation, and the next negotiation is in a year, and he has been in this trade eleven years and every year he has the same conversation from a worse position. The last three times he gave something up he said nothing about an exchange, because naming an exchange felt like bargaining and he thought he was above it. Omar asked what happened, and each time the thing he gave up became the new starting point and the thing he got became a favour: in 2022 he took on two extra towns and said nothing, and two towns is now what a representative does — nobody decided that, he conceded it and did not say so. So the sentence is one sentence with both halves in it: "I would be prepared to take the second day in January, in exchange for the last forty minutes of both days being unminuted and unreported." Not two sentences, not two paragraphs, and not a letter saying yes followed by a letter asking — because in a year nobody will have both paragraphs, they will have one, and whichever one they have will be the whole agreement. Ms Huda said a concession with no exchange named is not a negotiation, it is a retreat, and it is remembered afterwards as a precedent and not as a kindness. And Fares said the second half is the hard one: he can say what he would give up all day. Ms Huda said everybody can, which is why the second half is the only part of the cycle worth practising._'));
out.push(p('**Listener task:** write one thing from this room that became a precedent because nobody named an exchange.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Fares\'s reply. Answer the questions.'));
out.push(model([
  '**TO THE TRAINING MANAGER · your letter of 12 December** · F. Kayyali · 16 December',
  'Thank you for the answer on the forty minutes. I am writing one sentence of agreement and then the reason it is one sentence.',
  '**The sentence.** I would be prepared to take the second training day in January, in exchange for the last forty minutes of **both** days being held with the door shut, unminuted and unreported, from January onwards.',
  '**Why it is one sentence and not two paragraphs.** Because in a year neither of us will have both paragraphs. We shall each have one. If the two things are agreed separately, then in a year the forty minutes is something you gave me and the second day is something I asked for, and both of those will be untrue and neither of us will be able to show otherwise.',
  '**What I am not doing.** I am not making the second day conditional on anything else, and I am not asking for it to be paid differently. The exchange is the forty minutes and nothing beside it.',
  '**Why I am being this exact, which is about me and not about you.** Three times in eleven years I have given something up and said nothing about an exchange, because naming one felt like bargaining. In 2022 I took on two extra towns that way. Two towns is now simply what a representative does here — nobody decided it, I conceded it and did not say so, and I have negotiated from a worse position every year since.',
  '**What this gives you.** A second day in January, which you need because the new product training lands in the same month, and a representative who will take it without a further conversation.',
  '**And one thing I should say about the two who stopped asking questions.** I do not know whether forty unminuted minutes will bring them back. I think it will and I may be wrong, and I would rather put that in writing now than be asked in March why it has not worked.',
]));
out.push(item('1', 'Why does he insist on one sentence rather than two paragraphs?'));
out.push(item('2', 'What does he say happened in 2022, and what does he say it became?'));
out.push(item('3', 'What does he put in writing about the two representatives, and why now?'));
out.push(writers([
  'A reply that concedes and exchanges: **thank, and say there is one sentence** → **the sentence, with both halves in it** → **why one sentence and not two paragraphs** → **what you are not making conditional** → **why you are being exact, which is about you** → **what this gives them** → **and one thing you may be wrong about**.',
  'Put both halves in one sentence and nothing else in that sentence. Everything you add to it is something that can be detached from it later.',
  'Explain the one-sentence rule in terms of what happens in a year, not in terms of trust. _In a year neither of us will have both paragraphs._ It is true, it is about paper rather than about people, and it cannot be taken as an insult.',
  'Tell the story of your own earlier concession, with the year and what it became. _Two towns is now simply what a representative does here — nobody decided it, I conceded it and did not say so._ It explains the exactness and it is the only part of the letter the reader will remember.',
  '⚠ And end on something you may be wrong about, with a date. _I would rather put that in writing now than be asked in March why it has not worked._ A letter that claims its exchange will certainly work invites exactly that question in March.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-sentence exchange and its reasons (60 words or more).'));
out.push(p('**TO ______________ · your ______________ of ______________** · ______________   Thank you for ______________. I am writing one sentence of agreement and then the reason it is one sentence.   **The sentence.** I would be prepared to ______________, in exchange for ______________.   **Why it is one sentence and not two paragraphs.** Because in a year ______________. If the two things are agreed separately, then ______________.   **What I am not doing.** I am not ______________, and I am not ______________. The exchange is ______________ and nothing beside it.   **Why I am being this exact, which is about me.** ______________. In ______________ I ______________ that way, and ______________ is now simply what ______________.   **What this gives you.** ______________.   **And one thing I may be wrong about.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both halves in one sentence, with nothing else in that sentence',
  'The exchange a **thing**, not a feeling — writable in a document',
  'The one-sentence rule explained in terms of paper, not of trust',
  'Your own earlier concession, with the year and what it became',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their own earlier concession and what it became.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full reply (140 words or more): the one-sentence exchange, why one sentence, what you are not making conditional, your earlier concession with its year, what this gives them, and the thing you may be wrong about.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **both halves in one sentence**, **the exchange being a thing and not a feeling**, **your own earlier concession named**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us could name a concession that became a precedent?** Count, and let the years be said out loud — two years, five, eleven. Then the thing to take away, which is not about character: the people in this room are not weak negotiators. They gave things up without naming an exchange because naming one felt like bargaining, and a year later a page existed and the page said what it said.'));
out.push(hw('Write the reply (60+ words) with both halves in one sentence. Then write a second, private line: the concession of your own that became a precedent, with the year — and what the sentence would have been if you had written it at the time.'));

// ======================= 21.4 =======================
out.push(pb());
out.push(h2('21.4  In that case'));
out.push(p('**Function:** responding to a counter-offer   ·   **Grammar:** _in that case_ · _that would mean_ · _if that is the position_   ·   **Pronunciation:** the pause before _in that case_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each: the last counter-offer you were given, in the other side\'s words. Then say what you said back. Several students will have said _all right_.'));
out.push(board('In that case the proof date moves to the Friday, and that would mean three men on one job for an extra day.', '_in that case_ · _that would mean_'));
out.push(p('**b**  Add the consequence with _that would mean_. **1** _You want it a week later._  **2** _You can only do one of the two._  **3** _It has to go through the registry._  **4** _You need it in writing first._  **5** _You can give us half the quantity._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the registry\'s counter-offer, and what does Bassel work out that it would mean?   **A** registration in January instead of February if he resubmits; that two of his three ministry men lose a week   **B** no registration at all; nothing   **C** a longer wait; more money'));
out.push(p('**b**  Listen again. **1** What does he say he would have answered in March?   **2** What does Ms Huda say _in that case_ does to a counter-offer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  What it would actually mean', [
  ['Bassel', 'The registry has come back, and it is not a refusal and it is not what I asked for either. They say that if I resubmit the form before the end of December with the originating office\'s reference on it, they will process it in the January batch instead of February.'],
  ['Omar', 'That is a month earlier. That is good.'],
  ['Bassel', 'It sounds like a month earlier and I have spent an evening working out what it would actually mean, and this is what I would not have done in March. In March I would have said thank you and resubmitted on the twenty-eighth, because a month earlier is obviously better.'],
  ['Nour', 'And it is not?'],
  ['Bassel', 'The January batch is confirmed in the last week of January. The February batch is confirmed in the second week of February. That is nine working days, not a month — the batches are named after the month they are **submitted** in and not the month they are confirmed in, and nobody told me that, and it is not in the notes.'],
  ['Jad', 'Nine days instead of a month.'],
  ['Bassel', 'Nine days. And resubmitting before the end of December means getting the reference from the originating office in the week of the twenty-second, which is the week three of my fourteen men are on the ministry proof and I am the only person who can go to that office, and it is two hours each way.'],
  ['Lubna', 'So what do you say?'],
  ['Bassel', '"In that case, resubmitting in December would mean a day out of the proof week for nine working days of registration, and I would rather not. I shall resubmit in the first week of January with the reference, for the February batch." And then the sentence that is actually the point: "**Could you tell me** whether a batch is named after the month of submission or the month of confirmation, so that I do not make the same arithmetic mistake in the spring?"'],
  ['Ms Huda', 'And hear what you have done with their offer. _In that case_ takes a counter-offer and makes it a **calculation** instead of a kindness. They offered you a month; you have worked out that it is nine days and said so, and you have declined it without declining them. And the question at the end is 19.3: it turns the thing you had to discover into a thing that will be written down.'],
  ['Bassel', 'And they may be annoyed.'],
  ['Ms Huda', 'They may. And the alternative is a day lost in the proof week for nine days you had valued at thirty — which is the price of saying thank you to an offer you have not costed.'],
]));
out.push(sp());
out.push(box('Language box – responding to a counter-offer', [
  '**Three moves, in this order:** **1** _**In that case**…_ — accept the premise and nothing else. **2** _…**that would mean**…_ — the consequence, costed, in your own units. **3** _…and **I would rather**…_ / _**I shall**…_ — your answer, and then the indirect question that stops it happening again.',
  table(['you say', 'what it does'], [
    ['_All right._', 'accepts an offer you have not costed'],
    ['_**In that case** the date moves to the Friday._', 'accepts the premise and restates it as a fact'],
    ['_**That would mean** three men on one job for an extra day._', 'puts the cost in **your** units, not theirs'],
    ['_**If that is the position**, I would rather…_', 'declines the offer without declining the person'],
  ], [2.2, 2.4]),
  '⚠ **_In that case_ is not agreement.** It means _given what you have just said_ — and it is the most useful two-and-a-half words in a negotiation, because it lets you take the other side\'s premise seriously for one sentence while you do the arithmetic out loud.',
  '⚠ **_That would mean_ + a noun or a clause, not an infinitive:** ~~that would mean to lose a day~~ → _that would mean **losing** a day_ / _that would mean **that we lose** a day_.',
  '**Cost the offer in your own units before you answer it.** A month sounded like a month and was nine working days, because the batches are named after the month of **submission** and not of confirmation. ⚠ **Almost every counter-offer contains one unit that means something different to the two sides** — a month, a day, a batch, a shift, a working week — and the arithmetic takes an evening and is always worth it.',
  '**Decline the offer without declining the person:** _I would rather not_ · _I shall do X instead_ · _if that is the position_. None of those says that the offer was poor or that the offerer was trying anything.',
  '**And finish with the indirect question that prevents a repetition** (19.3): _could you tell me whether a batch is named after the month of submission or the month of confirmation, so that I do not make the same arithmetic mistake in the spring?_ That turns a thing you had to discover into a thing that is written down.',
  '**Useful phrases:** it is not a refusal and it is not what I asked for either · it sounds like a month earlier · nine days, not a month · in March I would have said thank you · the price of saying thank you to an offer you have not costed.',
  '**Practise:** Answer each with _in that case_ + _that would mean_ + your answer.  1 a later date  2 half the quantity  3 one of your two requests  4 a different person doing it  5 the same thing but through a different office',
  '**Pronunciation.** 🔊 **Track 21.8** There is a clear pause **before** _in that case_ and none after it, and the stress goes on the consequence: _‖ in that case that would mean a day out of the **PROOF** week._ Said without the pause it sounds like agreement; said with it, it sounds like arithmetic. Listen to six and say which have the pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a counter-offer. B answers in three moves — _in that case_, _that would mean_ with a cost in their own units, and an answer — and then adds the indirect question. A says whether the cost was in B\'s units or theirs. Swap cards.'));
out.push(dlg(null, [
  ['A', 'We can do it, but __________.'],
  ['B', 'In that case __________.'],
  ['B', 'That would mean __________.'],
  ['B', 'If that is the position, I would rather __________.'],
  ['B', 'And could you tell me __________?'],
]));
out.push(table(['Card A – the counter-offer', 'Card B – the counter-offer'], [
  ['_We can do it a month earlier if you resubmit this month._', '_We can supply half now and half in March._'],
  ['_We can agree one of your two requests._', '_We can do it, but it must go through another office._'],
  ['_We can hold the price if you double the order._', '_We can start in January if you provide the figures._'],
  ['_We can give you the room, but only on Thursdays._', '_We can release the money, but not until April._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight costs, and mark the ones expressed in the **speaker\'s** units — days of a machine, men on a job, late nights, hours of travel — rather than in the other side\'s. In a first run three or four of the eight are still in the other side\'s units, and a cost in the other side\'s units cannot be argued with because it is their arithmetic.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a counter-offer you have had and cost it in your own units, out loud, now. Then find the one unit in it that means something different to the two sides.'));
out.push(p('**b**  Swap. Then each of you give your partner the indirect question that would stop the same arithmetic mistake happening again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The registry has come back to Bassel, and it is not a refusal and it is not what he asked for either: if he resubmits the form before the end of December with the originating office\'s reference on it, they will process it in the January batch instead of February. Omar said that is a month earlier and that is good. Bassel said it sounds like a month earlier, and he has spent an evening working out what it would actually mean — and this is what he would not have done in March, when he would have said thank you and resubmitted on the twenty-eighth. The January batch is confirmed in the last week of January; the February batch is confirmed in the second week of February. That is nine working days, not a month, because the batches are named after the month they are submitted in and not the month they are confirmed in — and nobody told him that, and it is not in the notes. And resubmitting before the end of December means getting the reference from the originating office in the week of the twenty-second, which is the week three of his fourteen men are on the ministry proof and he is the only person who can go to that office, two hours each way. So what he says is: "In that case, resubmitting in December would mean a day out of the proof week for nine working days of registration, and I would rather not. I shall resubmit in the first week of January with the reference, for the February batch." And then the sentence that is the actual point: "Could you tell me whether a batch is named after the month of submission or the month of confirmation, so that I do not make the same arithmetic mistake in the spring?" Ms Huda said that in that case takes a counter-offer and makes it a calculation instead of a kindness: they offered a month, he has worked out that it is nine days and said so, and he has declined it without declining them. Bassel said they may be annoyed, and Ms Huda said they may — and the alternative is a day lost in the proof week for nine days he had valued at thirty, which is the price of saying thank you to an offer you have not costed._'));
out.push(p('**Listener task:** write one unit from this room that meant two different things to the two sides.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Bassel\'s reply to the registry. Answer the questions.'));
out.push(model([
  '**TO THE REGISTRY · your letter of 14 December · supplier registration** · B. Tahhan · 17 December',
  'Thank you for the offer of the January batch. I have costed it and I am going to decline it, and I should like to explain the arithmetic, because the arithmetic is the whole of my answer and none of it is a criticism of your office.',
  '**What I understood the offer to be.** Registration a month earlier if I resubmit, with the reference, before the end of December.',
  '**What it appears to be when I work it out.** The January batch is confirmed in the last week of January and the February batch in the second week of February. That is nine working days, not a month — because a batch is named after the month of submission and not the month of confirmation, which I had not understood until this week.',
  '**What resubmitting in December would mean.** The reference has to be collected from the originating office, which is two hours each way and which only I can do. The available week is that of 22 December, which is the week three of my fourteen people are on a ministry proof with a weekly date. So it would mean a day out of the proof week, for nine working days of registration.',
  '**What I shall do instead.** Resubmit in the first week of January, with the reference, for the February batch. Nothing is required from you.',
  '**The question I should be grateful if you would answer.** Could you tell me whether a batch is named after the month of submission or the month of confirmation? I have assumed the first from your letter and I may have it wrong — and if I have it right, those nine words are not in the guidance notes, and I shall put them on my own copy.',
  '**And one sentence about March.** In March I would have said thank you and resubmitted on the 28th, because a month earlier is obviously better. It is not obviously anything, and I now cost an offer before I accept it. That is the most useful thing I have learnt this year.',
]));
out.push(item('1', 'How does he describe the arithmetic, and what does he say it is not?'));
out.push(item('2', 'What does he say the real difference is, and why does the month-name mislead?'));
out.push(item('3', 'What does he say about March, and what does he now do before accepting an offer?'));
out.push(writers([
  'A reply to a counter-offer: **thank, and say you are declining and will show the arithmetic** → **what you understood the offer to be** → **what it is when you work it out** → **what accepting it would mean, in your own units** → **what you will do instead, and that nothing is required of them** → **the indirect question** → **and one sentence about how you would have answered a year ago**.',
  'Say in the first line that the arithmetic is the whole answer and none of it is a criticism. A declined offer is read as a rebuke unless the letter says otherwise before the figures start.',
  'Put the cost in units the reader can picture and that belong to you. _A day out of the proof week, for nine working days of registration._ Not _inconvenient_, and not _a delay_.',
  'Add _nothing is required from you_ when it is true. It is the sentence that lets a reader put the letter down, and a reader who can put a letter down answers the question at the end of it.',
  '⚠ And end with the sentence about who you used to be. _In March I would have said thank you and resubmitted on the 28th._ It is the only part of the letter that is about you, and it is what stops the arithmetic reading as cleverness.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the reply to a counter-offer (60 words or more).'));
out.push(p('**TO ______________ · your ______________ of ______________** · ______________   Thank you for the offer of ______________. I have costed it and I am going to ______________. The arithmetic is the whole of my answer and none of it is a criticism.   **What I understood the offer to be.** ______________.   **What it appears to be when I work it out.** ______________. That is ______________, not ______________ — because ______________.   **What accepting it would mean.** ______________. So it would mean ______________, for ______________.   **What I shall do instead.** ______________. Nothing is required from you.   **The question I should be grateful if you would answer.** Could you tell me whether ______________? I have assumed ______________ and I may have it wrong.   **And one sentence about ______________.** ______________ I would have ______________, because ______________. It is not obviously anything.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_In that case_ / _that would mean_ used correctly, with a noun or clause after _mean_',
  'The cost in your own units, not theirs',
  '_Nothing is required from you_, where it is true',
  'The indirect question, and the sentence about who you used to be',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the unit that meant two things.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full reply (140 words or more) to a real counter-offer: the offer as you understood it, the offer when costed, what accepting would mean in your own units, what you will do instead, the indirect question, and one sentence about how you would have answered a year ago.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the cost in your own units**, **the offer declined without the person being declined**, **the indirect question**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many counter-offers in this room contained a unit that meant two different things?** Count — a month, a batch, a working week, a shift, a delivery. Almost all of them. Then the sentence to end on: the arithmetic takes an evening, the evening is always worth it, and the commonest reason it is not done is that an offer which sounds generous feels rude to measure.'));
out.push(hw('Write the reply (60+ words) and send the indirect question with it. Then go back to one offer you accepted this year without costing it, and cost it now. Write down what it actually came to.'));

// ======================= 21.5 =======================
out.push(pb());
out.push(h2('21.5  Whatever else we agree'));
out.push(p('**Function:** stating the line you will not cross   ·   **Grammar:** _whatever else_ · _I am not able to_ · _that is the one thing_   ·   **Pronunciation:** the level tone that keeps a limit from being a threat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One sentence each, beginning _Whatever else we agree, I am not able to…_ Your teacher writes nothing down. Then one question round the room: _does the other side know that?_'));
out.push(board('Whatever else we agree, I am not able to release a result on that lot until the temperature is settled.', '_whatever else_ · _I am not able to_'));
out.push(p('**b**  Which is a limit and which is a threat? **1** _I am not able to sign for a check I have not watched._  **2** _If you ask me again I shall go to the directorate._  **3** _That is the one thing I cannot do, and everything else is open._  **4** _I shall have to think about my position._  **5** _I am not able to work a fifth night; the other four are yours._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Yara\'s limit, and what does she say she has learnt about where to put it?   **A** releasing a result on an unresolved lot; at the beginning, not at the end   **B** working late; at the end   **C** signing the release note; nowhere'));
out.push(p('**b**  Listen again. **1** Why does she say a negotiation without a stated limit is unreadable?   **2** What does Ms Huda say makes a limit different from a threat?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  The one thing, said first', [
  ['Yara', 'The agent has answered two of my three questions and the third — which of the two storage temperatures is right — is "under review with the manufacturer". And the ward wants the lot used, because the alternative is sending samples to Damascus and waiting two days.'],
  ['Ms Huda', 'So what is the negotiation?'],
  ['Yara', 'Everything is negotiable except one thing. I can run the lot for the controls. I can run it in parallel with the old lot and report both. I can do the extra forty minutes a day that running two lots costs, and nobody has asked me to and I will. What I am not able to do is release a patient result on a lot whose storage temperature nobody can state.'],
  ['Omar', 'Have you said that?'],
  ['Yara', 'I said it on Tuesday, at the end, after twenty minutes of what I could do. And that was wrong, and I have spent two days seeing why. By the time I got to it, Dr Shaaban had already arranged four of the things I had offered, and the limit arrived as an obstacle to a plan that had been built on my own goodwill.'],
  ['Nour', 'So it should have been first.'],
  ['Yara', 'It should have been the first sentence. "Whatever else we agree, I am not able to release a patient result on this lot until the temperature is settled. Everything else is open, and here are four things I can do." Then he builds the plan round the limit instead of into it.'],
  ['Jad', 'Does saying it first not sound like a refusal?'],
  ['Yara', 'That is what I thought for three years, and it is the opposite. A negotiation with no stated limit is unreadable — he cannot tell where the end is, so he keeps arranging, and every arrangement he makes is one he will have to unmake. I was not being accommodating on Tuesday. I was being unreadable, and it cost him twenty minutes of planning.'],
  ['Ms Huda', 'Now the difference between a limit and a threat, because every student in this room will want to know it. A **limit** is about what **you** can do: _I am not able to release that result._ A **threat** is about what you will do to **them**: _if you insist, I shall go to the directorate._ The first is information and can be planned round. The second is a move, and it ends the negotiation whether or not anybody carries it out.'],
  ['Yara', 'And the limit has to come with the other side of it, in the same breath — _everything else is open, and here are four things I can do_ — or it is heard as a no with decorations.'],
  ['Ms Huda', 'Say it level, say it once, and then go back to what you can do. A limit repeated three times has become a threat without a single word changing.'],
]));
out.push(sp());
out.push(box('Language box – stating a limit', [
  '**The shape, and all three parts are needed:**',
  table(['part', 'how it sounds'], [
    ['**1** the frame', '_**Whatever else we agree**…_'],
    ['**2** the limit, about **you**', '_…I **am not able to** release a patient result on this lot._'],
    ['**3** the other side of it, at once', '_**Everything else is open**, and here are four things I can do._'],
  ], [1.6, 3.2]),
  '**Put it first, not last.** A limit at the end of twenty minutes of what you can do arrives as an obstacle to a plan built on your own goodwill, and the other person has to unmake four arrangements. Put it first and they build the plan **round** it.',
  '⚠ **A limit is about what you can do; a threat is about what you will do to them.** _I am not able to sign that_ is a limit. _If you ask me again I shall go to the directorate_ is a threat. The first is information and can be planned round; the second is a move, and it ends the negotiation whether or not anybody acts on it.',
  '**And _I shall have to think about my position_ is a threat in a grey coat.** So are _I am not sure I can continue like this_ and _that would put me in a very difficult position_. If a sentence makes the other side wonder what you might do, it is a threat; if it tells them what you cannot do, it is a limit.',
  '⚠ **Say it once.** _A limit repeated three times has become a threat without a single word changing._',
  '**A negotiation without a stated limit is not generous — it is unreadable.** The other side cannot tell where the end is, so they keep arranging, and every arrangement is one they will have to unmake. Being unreadable is not a kindness; it cost Dr Shaaban twenty minutes of planning.',
  '**Useful phrases:** everything is negotiable except one thing · nobody has asked me to and I will · it arrived as an obstacle to a plan built on my own goodwill · I was not being accommodating, I was being unreadable · everything else is open, and here are four things I can do.',
  '**Practise:** State the limit in three parts, and keep it about yourself.  1 something you cannot sign  2 something you cannot say you have checked  3 an hour or a day you cannot work  4 a figure you cannot put your name to  5 a person you cannot speak for',
  '**Pronunciation.** 🔊 **Track 21.10** A limit is said on a **level** tone, with no stress on _not_ and no rise at the end: _whatever else we agree, I am not able to release that result._ Stress _not_ and it becomes a refusal; rise at the end and it becomes a question. Listen to four pairs and say which of each pair you would rather hear.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a limit in three parts — frame, limit, the other side of it. B does two things: says whether it is about A or about them, and asks what they could now plan round it. Swap cards.'));
out.push(dlg(null, [
  ['A', 'Whatever else we agree, I am not able to __________.'],
  ['A', 'Everything else is open, and here are __________ things I can do: __________.'],
  ['B', 'Is that about you or about me?'],
  ['B', 'Then I can plan __________ round it.'],
]));
out.push(table(['Card A – the limit', 'Card B – the limit'], [
  ['something you cannot sign or certify', 'an hour, a night or a day you cannot work'],
  ['a figure you cannot put your name to', 'a person you cannot speak for'],
  ['information you cannot pass on', 'a promise you cannot make about somebody else'],
  ['a job you cannot do without equipment', 'a standard you cannot go below'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** mark each of the eight **limit** or **threat**, and then count. In a first run two or three of the eight are threats in grey coats — _I shall have to consider my position_, _I am not sure I can go on like this_ — and the speakers believe them to be limits, because they contain no explicit consequence. The test is simple: does the sentence say what you cannot do, or make them wonder what you might?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  State your own limit in three parts, and then answer the question honestly: does the other side know it, and where in the conversation have you been putting it?'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s limit is about them or about the other side, and what the other side could plan round it if it were said first.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The agent has answered two of Yara\'s three questions and the third — which of the two storage temperatures is right — is "under review with the manufacturer". And the ward wants the lot used, because the alternative is sending samples to Damascus and waiting two days. So everything is negotiable except one thing: she can run the lot for the controls, she can run it in parallel with the old lot and report both, and she can do the extra forty minutes a day that running two lots costs, which nobody has asked her to do and she will. What she is not able to do is release a patient result on a lot whose storage temperature nobody can state. Omar asked whether she had said that, and she said she said it on Tuesday, at the end, after twenty minutes of what she could do — and that was wrong, and she has spent two days seeing why: by the time she got to it, Dr Shaaban had already arranged four of the things she had offered, and the limit arrived as an obstacle to a plan built on her own goodwill. It should have been the first sentence: "Whatever else we agree, I am not able to release a patient result on this lot until the temperature is settled. Everything else is open, and here are four things I can do." Then he builds the plan round the limit instead of into it. Jad asked whether saying it first does not sound like a refusal, and she said that is what she thought for three years and it is the opposite: a negotiation with no stated limit is unreadable, so he keeps arranging and every arrangement is one he will have to unmake — she was not being accommodating on Tuesday, she was being unreadable, and it cost him twenty minutes of planning. Ms Huda gave the difference between a limit and a threat: a limit is about what you can do, a threat is about what you will do to them; the first is information and can be planned round, and the second is a move that ends the negotiation whether or not anybody carries it out. And Yara added that the limit has to come with the other side of it in the same breath, or it is heard as a no with decorations. Ms Huda said: say it level, say it once, and go back to what you can do — because a limit repeated three times has become a threat without a single word changing._'));
out.push(p('**Listener task:** write one threat in a grey coat from this room, and the limit it should have been.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Yara\'s note. Answer the questions.'));
out.push(model([
  '**TO DR SHAABAN · lot 4471, and what I can and cannot do** · Y. Mansour · 18 December',
  '**The one thing first, because on Tuesday I put it last and that was my mistake.** Whatever else we agree, I am not able to release a patient result produced on lot 4471 until the agent has stated which of the two storage temperatures is correct.',
  '**Everything else is open.** There are four things I can do and I am offering all four.',
  '**One.** Run lot 4471 for the daily controls, which uses it, keeps it moving and tells us within a week whether it is behaving differently from the old lot.',
  '**Two.** Run both lots in parallel on every sample for a fortnight and report the old lot\'s figure, with the new lot\'s figure recorded beside it in the worksheet.',
  '**Three.** Do the extra forty minutes a day that running two lots takes. Nobody has asked me to and I am not asking for anything for it.',
  '**Four.** Write to the agent again on 5 January if the temperature question is still under review, and copy it to you.',
  '**Why I have put the limit at the top this time.** On Tuesday I gave you twenty minutes of what I could do and then the one thing I could not, and by then you had arranged four of them. The limit arrived as an obstacle to a plan built on what I had offered. That was not accommodating of me; it was unreadable, and it cost you twenty minutes.',
  '**And I should say what the limit is not.** It is not a view about the agent, who has answered two of three questions in eleven days. It is not about the ward, and I know what two days to Damascus costs. It is one sentence about what my signature can mean, and it is the only sentence in this note that is not negotiable.',
]));
out.push(item('1', 'Where does she put the limit, and what reason does she give for the position?'));
out.push(item('2', 'Which of the four offers is she doing for nothing, and how does she say so?'));
out.push(item('3', 'What three things does she say the limit is **not**?'));
out.push(writers([
  'A note with a limit in it: **the limit first, with a line saying why it is first** → **everything else is open** → **the things you can do, numbered** → **why you have changed the order** → **and what the limit is not**.',
  'Put the limit in the first paragraph and say that you have moved it there. _On Tuesday I put it last and that was my mistake._ The reader\'s question about a limit at the top is _why am I being told this first_, and one clause answers it.',
  'Offer more than one thing and number them. One alternative looks like a condition; four look like a negotiation, and they let the other side choose — which is the only way a limit is experienced as a shape rather than a wall.',
  'Say when something is being done for nothing, and in the same breath say you are not asking for anything for it. Otherwise it becomes a grievance in February (18.2).',
  '⚠ End by saying what the limit is **not** — not a view about a third party, not about their need, not a bargaining position. Those are the three things a limit is always misread as, and three lines prevent all of them.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note with your limit in it (60 words or more).'));
out.push(p('**TO ______________** · ______________   **The one thing first.** Whatever else we agree, I am not able to ______________ until ______________.   **Everything else is open.** There are ______ things I can do and I am offering all ______.   **One.** ______________.   **Two.** ______________.   **Three.** ______________. Nobody has asked me to and I am not asking for anything for it.   **Four.** ______________.   **Why I have put the limit at the top.** ______________. That was not accommodating; it was unreadable, and it cost ______________.   **And what the limit is not.** It is not ______________. It is not ______________. It is one sentence about ______________, and it is the only sentence here that is not negotiable.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The limit in the first paragraph, and about **you** and not about them',
  'No threat in a grey coat anywhere — nothing that makes them wonder what you might do',
  'More than one alternative, numbered',
  'Three things the limit is not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read what their limit is **not**.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (140 words or more): the limit first with its reason for being first, everything else open, your numbered alternatives, why you moved the order, and what the limit is not.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **the limit about you and not about them**, **the alternatives numbered**, **what the limit is not**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of us have a limit the other side does not know about?** Count. Then the sentence to take away, and it will surprise most of the room: an unstated limit is not generosity, it is unreadability — and the other side keeps making arrangements that they will have to unmake, which costs them more than the limit ever would.'));
out.push(hw('Write the note (60+ words) with the limit at the top. Then say the limit out loud to the person it concerns, once, on a level tone, and write down what they arranged differently afterwards.'));

// ======================= 21.6 =======================
out.push(pb());
out.push(h2('21.6  The two-column page'));
out.push(p('**Function:** writing the two-column page   ·   **Grammar:** everything in this unit, on one page   ·   **Pronunciation:** reading two columns aloud without a winner'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, two minutes: say your own four needs and then your partner says them back as **the other side\'s** four needs, from the other side\'s chair. Most people cannot do it for more than two.'));
out.push(board('They need the scaffold up by the 6th. I need the elevations photographed. Those are the same week.', 'two columns · the row where they touch'));
out.push(p('**b**  Sort each into **need**, **can give** or **cannot give**. **1** _access to flat four_  **2** _the scaffold not delayed_  **3** _two days of my own time_  **4** _the survey date moved_  **5** _a photograph of the joint_  **6** _the owner\'s key_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the one row where Lubna\'s two columns touch?   **A** the Sunday before the scaffold goes up   **B** the survey date   **C** the key to flat four'));
out.push(p('**b**  Listen again. **1** What does she say the two-column page did that a list of her own needs had not?   **2** What does Ms Huda say about the row where the columns touch?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  Where the two columns touch', [
  ['Lubna', 'The second building is owned by a family, and the man I deal with is the son. He wants the scaffold up on the sixth of January, because the render has to be done before the rain and the contractor has one week free. And I need the four elevations photographed before the scaffold goes up, which is the whole of what I lost on the first building.'],
  ['Ms Huda', 'And you have made the page.'],
  ['Lubna', 'I made the page on Saturday and it took forty minutes and it has changed what I am asking for completely. Four columns really: what he needs, what I need, what each of us can give, and what each of us cannot.'],
  ['Omar', 'What does he need?'],
  ['Lubna', 'Three things, in his words: the scaffold up on the sixth, the render done before the rain, and — this is the one I would not have thought of — "not to have the family asking me every week what is happening". He said that in November and I wrote it down because it sounded strange.'],
  ['Nour', 'And what do you need?'],
  ['Lubna', 'Four elevations photographed before the scaffold; access to flat four, which is the woman who did not open the door on the first building and who in this building is his aunt; the ceiling heights, which take two days; and the survey in by the twenty-sixth of January.'],
  ['Jad', 'Do any of them collide?'],
  ['Lubna', 'Only one, and that is the whole point of the page. The photographs and the scaffold are the same week, and nothing else on either list touches anything on the other. Three of my four he does not care about at all, and two of his three I can give him for nothing.'],
  ['Lubna', 'So the row where they touch is one morning: Sunday the fifth. If I photograph all four elevations on the Sunday, his scaffold goes up on the Monday and nobody has given anything up. And the two of his that I can give for nothing are the aunt — I shall write her a note with my name on it a week beforehand, which is what I learnt on the first building — and the weekly question: I shall send him four lines every Friday, which costs me ten minutes and is the thing he actually asked for in November and which I heard as a complaint.'],
  ['Ms Huda', 'Now what the page did. A list of your own needs produces a request. **Two columns produce a row.** And the row where the columns touch is almost never what either side has been arguing about — it is one morning, or one line, or one name, and it is invisible until both lists are on the same sheet of paper.'],
  ['Lubna', 'I had been going to ask him to delay the scaffold by a week.'],
]));
out.push(sp());
out.push(box('Language box – the two-column page', [
  '**Four columns, and the fourth is the one people leave out:**',
  table(['', 'yours', 'theirs'], [
    ['**needs**', 'what you must have', 'what they must have, **in their words**'],
    ['**can give**', 'what costs you little or nothing', 'what they can give easily'],
    ['**cannot give**', 'your limit (21.5)', 'their limit, as far as you know'],
    ['**the row where they touch**', 'the one place the two lists collide', 'and the one morning, line or name that settles it'],
  ], [1.3, 2.1, 2.1]),
  '**A list of your own needs produces a request. Two columns produce a row.** That is the whole of the cycle: as long as only one side\'s list is on the paper, every item looks like something to be asked for, and the one item that is actually in conflict is invisible.',
  '**Expect most items not to touch anything.** Three of Lubna\'s four needs were things the owner did not care about at all, and two of his three she could give for nothing. The usual finding is that **one** row collides, and the argument everybody has been having is about something on neither list.',
  '**And the collision is almost always smaller than it looks** — one morning, one line in a document, one name on a list.',
  '⚠ **Write the other side\'s needs in their words** (21.1) — including the one that sounds strange. _"Not to have the family asking me every week what is happening"_ sounded strange, was written down because of it, and turned out to be the need Lubna could meet most cheaply: four lines every Friday, ten minutes a week.',
  '**The strange item is usually the cheap one.** A need that does not fit your idea of what the other side wants is a need you have not translated — and because you have not translated it, you have not yet reduced it to something you would have to refuse.',
  '**Useful phrases:** I made the page on Saturday and it took forty minutes · three of my four he does not care about at all · only one of them collides, and that is the whole point of the page · I heard it as a complaint · I had been going to ask him to delay the scaffold by a week.',
  '**Practise:** Name the row where the two columns touch, and the one morning, line or name that would settle it.  1 at work  2 with a supplier  3 with an office  4 at home  5 with somebody junior to you',
  '**Pronunciation.** 🔊 **Track 21.12** Read the two columns aloud **at the same pace and the same volume**. The moment your own column is read faster or louder, the page has a winner in it and the listener stops believing the other column. Listen to one page read twice and say which reading sounds like a negotiation.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their four columns aloud at one pace. B does the single useful thing: names the row where the columns touch, and then asks what one morning, line or name would settle it. Swap.'));
out.push(dlg(null, [
  ['A', 'They need __________, __________ and __________. I need __________, __________ and __________.'],
  ['A', 'I can give __________ for nothing. They can give __________ easily.'],
  ['B', 'Then the only row that touches is __________.'],
  ['B', 'And what one morning, line or name would settle it?'],
]));
out.push(table(['Card A – the two sides', 'Card B – the two sides'], [
  ['you and a manager', 'you and a supplier'],
  ['you and an office or a committee', 'you and a colleague on another shift'],
  ['you and a customer or a client', 'you and somebody at home'],
  ['you and somebody junior to you', 'you and a landlord, neighbour or contractor'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the eight, write how many rows **collide**. The answer is one, in six or seven cases out of eight. Then say the finding: the number of real conflicts in a negotiation is almost always one, and the number of things being argued about is almost always four or five — and the four or five are items that do not touch anything on the other list.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Build your own four columns aloud, with the other side\'s needs in their words, including any that sound strange. Then name the one row that collides.'));
out.push(p('**b**  Swap. Then each of you find the **strange item** in your partner\'s other column and say what it would cost to meet — and in most cases the answer is almost nothing.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The second building is owned by a family and the man Lubna deals with is the son. He wants the scaffold up on the sixth of January, because the render has to be done before the rain and the contractor has one week free; and she needs the four elevations photographed before the scaffold goes up, which is the whole of what she lost on the first building. She made the page on Saturday, it took forty minutes, and it has changed what she is asking for completely: four columns, really — what he needs, what she needs, what each can give, and what each cannot. What he needs, in his words: the scaffold up on the sixth, the render done before the rain, and — the one she would not have thought of — "not to have the family asking me every week what is happening", which he said in November and which she wrote down because it sounded strange. What she needs: four elevations photographed before the scaffold; access to flat four, which is his aunt; the ceiling heights, which take two days; and the survey in by the twenty-sixth of January. Jad asked whether any of them collide, and only one does, and that is the whole point of the page: the photographs and the scaffold are the same week, and nothing else on either list touches anything on the other. Three of her four he does not care about at all, and two of his three she can give him for nothing. So the row where they touch is one morning — Sunday the fifth: if she photographs all four elevations on the Sunday, his scaffold goes up on the Monday and nobody has given anything up. The two of his she can give for nothing are the aunt, to whom she will write a note with her name on it a week beforehand, and the weekly question, for which she will send him four lines every Friday — ten minutes, and the thing he actually asked for in November and which she heard as a complaint. Ms Huda said a list of your own needs produces a request, and two columns produce a row — and the row where the columns touch is almost never what either side has been arguing about: it is one morning, or one line, or one name, and it is invisible until both lists are on the same sheet. Lubna said she had been going to ask him to delay the scaffold by a week._'));
out.push(p('**Listener task:** write one strange item from this room and what it would cost to meet.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lubna\'s page. Answer the questions.'));
out.push(model([
  '**22 SHARIA BAGHDAD · WHAT EACH OF US NEEDS** · L. Sweidan · for the meeting of 20 December',
  table(['', 'What Mr Rifai needs', 'What I need'], [
    ['**1**', 'The scaffold up on 6 January — the contractor has one week free', 'All four elevations photographed **before** the scaffold goes up'],
    ['**2**', 'The render finished before the rain', 'Access to flat four — two dimensions on the second floor'],
    ['**3**', '"Not to have the family asking me every week what is happening" _(his words, November)_', 'Ceiling heights at two points in every room — two days'],
    ['**4**', '—', 'The survey submitted by 26 January'],
  ], [0.5, 2.3, 2.3]),
  '**What each of us can give easily.** He can give me a Sunday and a note to his aunt. I can give him four lines every Friday — ten minutes a week — and a photograph of the render joint for his own file, which he will need in the spring and has not thought of.',
  '**What neither of us can give.** He cannot move the contractor\'s week; it is not his to move. I cannot submit a survey with an unphotographed elevation in it, which is what I did on the first building and what I shall not do again.',
  '**The one row where the two lists touch.** Row 1. The photographs and the scaffold are the same week, and **nothing else on either list touches anything on the other**. Three of my four are things he does not care about; two of his three cost me nothing.',
  '**What settles row 1, and it is one morning.** I photograph all four elevations on Sunday 5 January. His scaffold goes up on the Monday. Neither of us has given anything up.',
  '**And the item I nearly missed.** His third need sounded strange to me in November and I wrote it down because of that. It is the cheapest thing on this page to meet — four lines on a Friday — and I had been hearing it as a complaint about me rather than as a thing he needed.',
]));
out.push(item('1', 'How many rows collide, and what does she say about the rest?'));
out.push(item('2', 'What can she give him that he has not thought of?'));
out.push(item('3', 'Which item did she nearly miss, and why did she write it down?'));
out.push(writers([
  'A two-column page: **the two columns of needs, side by side, with theirs in their words** → **what each can give easily** → **what neither can give** → **the one row where the lists touch** → **what settles that row** → **and the item you nearly missed**.',
  'Put the two columns physically side by side, not one after the other. A list followed by a list is two requests; two columns on one sheet is a page that can be read across, and the reading across is where the row is found.',
  'Mark the row that collides and say explicitly that nothing else does. _Nothing else on either list touches anything on the other._ That sentence is what turns the page from a comparison into an agreement.',
  'Offer the thing they have not thought of. It is the cheapest item on any such page, and it is always found by reading their column rather than your own.',
  '⚠ And write the paragraph about the item you nearly missed. The need that sounded strange is nearly always the cheapest one to meet, because you have not yet translated it into something you would have to refuse.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two-column page (60 words or more).'));
out.push(p('**______________ · WHAT EACH OF US NEEDS** · ______________   **What they need.** **1** ______________. **2** ______________. **3** "______________" _(their words, ______________)_.   **What I need.** **1** ______________. **2** ______________. **3** ______________.   **What each of us can give easily.** They can give me ______________. I can give them ______________ — and ______________, which they will need ______________ and have not thought of.   **What neither of us can give.** They cannot ______________. I cannot ______________.   **The one row where the lists touch.** Row ______. ______________, and nothing else on either list touches anything on the other.   **What settles it.** ______________. Neither of us has given anything up.   **And the item I nearly missed.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two columns side by side, theirs in their words',
  'A sentence saying that nothing else collides',
  'One thing offered that they have not thought of',
  'The strange item, and what it would cost to meet',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the item they nearly missed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full two-column page (140 words or more) for a real negotiation: both columns of needs with theirs in their words, what each can give, what neither can give, the one row that collides, what settles it, and the item you nearly missed.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: **their column in their words**, **the single colliding row**, **the item nearly missed**.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many rows collide in this room\'s pages, and how many items were being argued about before today?** Count both and put the two numbers side by side. The first is almost always one; the second is almost always four or five. The four or five are items that do not touch anything on the other list, and they are what nearly every negotiation in a workplace is actually spent on.'));
out.push(hw('Write the two-column page (60+ words) and take it to the meeting. Then write one line afterwards: whether the other side agreed that their column was right, and which item of theirs you had got wrong.'));

// ======================= 21.7 =======================
out.push(pb());
out.push(h2('21.7  Review & Mediate: Two people who both compromised'));
out.push(p('**Function:** mediating between two accounts of one agreement   ·   **Recycling:** Units 1–21   ·   **Exam practice:** B1 Preliminary Reading Part 6, Writing Part 1, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Provided that the letter will be attached.  **2** I would be prepared in exchange of the forty minutes.  **3** That would mean to lose a day.  **4** On that case I would rather wait.  **5** What she needs are not to be the only one.  **6** I will hold the stock as long the order is confirmed.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two columns Bassel and the three men on the ministry order wrote separately, on the same evening, in answer to the same question.'));
out.push(box(null, [
  '**THE MINISTRY ORDER · WHAT EACH SIDE BELIEVES IT GAVE** _(written separately, 18 December, in answer to: what have you given up since March?)_',
  table(['What Bassel says he gave', 'What the three men say they gave'], [
    ['Named Abu Rashid in writing to authorise, in June, so that he no longer has to be in the shop at seven', 'A weekly proof date — a Thursday on which none of us can leave early, since September'],
    ['Withdrew, on the Thursday in June, a rule he had made that was stricter than the ministry\'s own', 'Eleven signatures a day each, because nothing leaves the yard unsigned'],
    ['Put condition four back after crossing it out, because it is right about the street', 'Abu Rashid now carries the authorisation, so the other two have to find him before anything moves'],
    ['Took the order on at all, which put three of fourteen people on one job', '— _(and one the three of them did not write down)_'],
  ], [2.3, 2.3]),
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. How many items on each list did the other side already know about, and what is the one thing on neither list?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  Two lists and nothing in common', [
  ['Bassel', 'Lubna\'s page in 21.6 made me do something I have been avoiding since March. I asked the three men on the ministry order to write down what they have given up, and I wrote mine on the same evening without seeing theirs.'],
  ['Ms Huda', 'And?'],
  ['Bassel', 'There is not one item in common. Not one. And both lists are true.'],
  ['Lubna', 'Read them.'],
  ['Bassel', 'Mine is four things, and every one of them is something I **took away**: a rule I had made that was stricter than the ministry\'s, which I withdrew in front of them in June; the authorisation, which I named Abu Rashid for, so I am no longer the man they wait for at seven; condition four, which I put back after crossing it out; and the order itself, which I could have refused.'],
  ['Nour', 'And theirs?'],
  ['Bassel', 'Theirs is four things and every one of them is something they **took on**. A Thursday nobody can leave early. Eleven signatures a day each. And Abu Rashid carrying the authorisation, which I had thought of as a gift to all three of them and which means the other two now have to find him before anything moves.'],
  ['Omar', 'That is the same item on both lists seen from two sides.'],
  ['Bassel', 'It is, and I did not see it until it was on one sheet. I gave away a thing I thought was mine to give, and two of them received an extra man to find. Neither of us is wrong.'],
  ['Ms Huda', 'How many of each other\'s items did you already know about?'],
  ['Bassel', 'I knew about one of their four — the Thursday. They knew about two of mine, and the two they knew about are the two I said out loud in front of them in June. The ones I did not announce, they have no idea about, and it has not occurred to me in nine months that they would not.'],
  ['Jad', 'What is the fourth thing on their list?'],
  ['Bassel', 'They did not write it. Abu Rashid said it when I read the lists out, and it is the only item either side was frightened of. Three of them are on one job, so none of the three has touched the older machine since September — and two of those three are the only people in that shop who know it. Which is the machine the engineer has found a bearing starting in twice this year.'],
  ['Ms Huda', 'And that is the row where the two columns touch, and it was on neither list. Hear why. **A concession is felt by the person who makes it and merely received by the person it is made to** — so each side leaves with four things it gave and no account of what it got. Neither side is dishonest and neither has a bad memory. And a year later, when the next negotiation opens, the two records do not meet at any point, and the argument becomes one about who has been reasonable — which cannot be won by anybody.'],
]));
out.push(sp());
out.push(box('Language box – mediating between two accounts', [
  '**Ask both sides the same question, separately, on the same day, in writing: _what have you given up?_** Separately matters. Asked together, the second answer is built out of the first.',
  '**Expect two lists with nothing in common, and expect both to be true.** The pattern is almost invariable: **your own list is things you took away; theirs is things they took on.** You know what it cost you to give something up; they know only that the thing is now different, which feels like a fact about the world rather than a gift from a person.',
  '**Then count how many of each other\'s items each side already knew about.** It is usually one or two of four, and the ones they knew about are the ones that were **said out loud**. A concession made silently is not received as a concession, however real it was — which is the practical argument for saying what you are giving up at the time (21.3).',
  '**Look for the item on neither list.** There is almost always one, and it is the one both sides were frightened of. Bassel\'s was the older machine: three men on one job since September, two of them the only people who know a machine that has had a bearing found in it twice this year.',
  '**And the item that appears on both lists seen from two sides.** _Abu Rashid now carries the authorisation_ was a gift on one list and an extra man to find on the other. That is not a disagreement about facts; it is the same fact from two chairs, and nobody can see it until the two columns are on one sheet of paper.',
  '**The remedy is one sheet, both columns, read aloud, and it takes twenty minutes.** Most people would rather spend the twenty minutes than have the argument a year later — and almost nobody does it, because at the moment of agreement nobody wants to go back over what it cost.',
  '**Useful phrases:** there is not one item in common, and both lists are true · mine is four things I took away; theirs is four things they took on · I knew about one of their four · the two they knew about are the two I said out loud · it was on neither list.',
  '**Pronunciation.** 🔊 **Track 21.14** Reading two columns aloud as a mediator: **the same pace, the same volume, and a pause of equal length after each item on both sides.** A reader who hurries the other side\'s column has decided the matter and everybody hears it. Listen to one pair of columns read twice and say which reading is the mediator\'s.',
], C.lteal));
out.push(stage('3', 'Practise – and then decide together (Speaking Part 3)', 7));
out.push(p('Work in pairs. A has one of the pairs of lists below and does **not** show it. A reads both columns aloud at one pace, then explains: which item appears on both lists seen from two sides, how many each side knew about, and what is on neither list. B must say which single item should go on a joint sheet first. **Then, in two minutes together**, decide the remedy you would propose. Change roles with the other pair of lists.'));
out.push(table(['Pair A – a ward and its pharmacy', 'Pair B – a shop and its supplier'], [
  ['_Ward: we gave up the second check at the bed._', '_Shop: we gave up asking for part-loads._'],
  ['_Ward: we take the trolley to the pharmacy now._', '_Shop: we pay in fourteen days instead of thirty._'],
  ['_Pharmacy: we gave up the Friday closing at four._', '_Supplier: we hold stock for them that nobody else gets._'],
  ['_Pharmacy: we check every chart twice before issue._', '_Supplier: we deliver on a Tuesday, which is our worst day._'],
  ['_On neither list: who telephones whom at two in the morning._', '_On neither list: who pays when a pallet is short._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write what was on neither list in each case. In both of these it is the thing that happens when something goes wrong at the worst moment — _who telephones whom at two in the morning_, _who pays when a pallet is short_ — which is the same finding as 16.7: the row that decides everything is the one about what happens when the arrangement fails, and it is on nobody\'s list of concessions because neither side has yet had to make it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Use an agreement of your own with somebody you still deal with. Write your column, and write theirs as you believe they would write it. Explain both to your partner **without showing them**: the item that appears on both, how many of theirs you had known about, and what you think is on neither list. Your partner must ask: _did you say it out loud at the time?_, _which item is the same fact from two chairs?_ and _what are you both frightened of?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Lubna\'s page made Bassel do something he has been avoiding since March. He asked the three men on the ministry order to write down what they have given up, and wrote his own on the same evening without seeing theirs. There is not one item in common, and both lists are true. His is four things and every one is something he took away: a rule he had made that was stricter than the ministry\'s, withdrawn in front of them in June; the authorisation, which he named Abu Rashid for, so he is no longer the man they wait for at seven; condition four, which he put back after crossing it out; and the order itself, which he could have refused. Theirs is four things and every one is something they took on: a Thursday nobody can leave early, eleven signatures a day each, and Abu Rashid carrying the authorisation — which Bassel had thought of as a gift to all three and which means the other two now have to find him before anything moves. Omar said that is the same item on both lists seen from two sides, and Bassel said it is, and he did not see it until it was on one sheet: he gave away a thing he thought was his to give, and two of them received an extra man to find, and neither is wrong. He knew about one of their four, the Thursday; they knew about two of his, and the two they knew about are the two he said out loud in front of them in June — the ones he did not announce, they have no idea about, and it had not occurred to him in nine months that they would not. And the fourth thing on their list they did not write: Abu Rashid said it when the lists were read out, and it is the only item either side was frightened of. Three of them are on one job, so none of the three has touched the older machine since September — and two of those three are the only people in that shop who know it, and it is the machine the engineer has found a bearing starting in twice this year. Ms Huda said that is the row where the two columns touch and it was on neither list: a concession is felt by the person who makes it and merely received by the person it is made to, so each side leaves with four things it gave and no account of what it got._'));
out.push(p('**Listener task:** write the item that appeared on both lists from two sides, and the item on neither.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 6)', 7));
out.push(p('Write **one** word in each gap (**1–6**).'));
out.push(box(null, [
  '**WHY BOTH SIDES BELIEVE THEY COMPROMISED**',
  'Ask two people who have just reached an agreement what each of them gave up, and you will usually be given two lists with **(1)** ______ a single item in common. This is not dishonesty, and it is not bad memory either.',
  'A concession is felt by the person who makes it and merely received by the person it is made to. You know exactly what it cost you to give **(2)** ______ a Thursday afternoon. The other side knows only that Thursday afternoons are now available, which feels **(3)** ______ a fact about the week rather than a gift — and nobody thanks anybody for a fact about the week.',
  'So each side leaves with a list of four things it has given away and no account of what it has received. A year later, when the next negotiation opens, the two records do not meet **(4)** ______ any point, and the argument becomes one about which of the two has been reasonable. That argument cannot be won **(5)** ______ anybody.',
  'The remedy is one sheet with both columns on it, written separately on the same day and read aloud, and it takes twenty minutes. Most people would **(6)** ______ spend the twenty minutes than have the argument. Almost nobody does it, because at the moment of agreement neither side wants to go back over what it cost — which is exactly the moment at which both still remember.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the joint sheet for an agreement of your own (60 words or more).'));
out.push(p('**______________ · WHAT EACH SIDE BELIEVES IT GAVE** _(written separately on ______________)_   **What I say I gave.** **1** ______________. **2** ______________. **3** ______________.   **What they say they gave.** **1** ______________. **2** ______________. **3** ______________.   **Items in common:** ______.   **The item that appears on both lists from two sides.** ______________ — which I thought of as ______________ and which they experience as ______________.   **How many we each knew about.** I knew ______ of their ______; they knew ______ of mine, and those are the ones I ______________.   **The item on neither list.** ______________.   **What we are putting on one sheet, and when.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both columns written separately, before either was read',
  'The number of items in common, counted and stated',
  'The item that is the same fact from two chairs',
  'The item on neither list — the thing both sides were frightened of',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 1)', 10));
out.push(box(null, [
  'Read this email from your English friend **Sam** and the notes you have made.',
  '_"I agreed something with a colleague in September and we are both quietly annoyed about it, because each of us thinks we gave up more than the other. Neither of us is being dishonest — I have thought about it hard and I still think it was mostly me. How do we get out of this? Sam"_',
  '**Your notes:**  •  _Tell him why both of them believe it, and that neither is lying_  ·  _Tell him what to put on one sheet of paper, and when to write it_  ·  _Tell him what to do with the column that is not his_  ·  _Tell him the one item to look for, and give him an example_',
  'Write your email to Sam using **all four** notes. Write **140 words or more**.',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I will run the forty minutes ___ the two slots are in the diary.   a) in case   b) unless   c) provided that',
  '2  …provided that the January letter ___ attached to the request.   a) is   b) will be   c) is going to be',
  '3  I would be prepared to take the second day ___ the forty minutes being unminuted.   a) in exchange   b) in exchange for   c) in exchange of',
  '4  Resubmitting in December would mean ___ a day out of the proof week.   a) losing   b) to lose   c) lose',
  '5  ___ that case I would rather resubmit in January.   a) On   b) At   c) In',
  '6  ___ else we agree, I am not able to release that result.   a) However   b) Whatever   c) Whichever',
  '7  What she needs ___ not to be the only person who can answer.   a) are   b) is   c) were',
  '8  I could hold the stock ___ the order is confirmed in writing.   a) as long   b) so long   c) as long as',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 1 style – three options).** 🔊 **Track 21.15** You will hear seven short extracts. For each one, choose **A**, **B** or **C**.'));
[
  '**1**  What does the speaker say the other side **needs**, as against what they want?   **A** not to be the only person who can answer a question   **B** a second trolley   **C** somebody to lead the report',
  '**2**  What condition is attached to the offer?   **A** that she is paid for it   **B** that the two slots are entered in the diary   **C** that it is minuted',
  '**3**  What would the speaker give up, and for what?   **A** nothing at all   **B** a day\'s pay, for a room   **C** a second day, for forty unminuted minutes',
  '**4**  What has the speaker worked out that the offer is actually worth?   **A** nine working days   **B** a month   **C** two days',
  '**5**  What is the speaker not able to do?   **A** work a fifth night   **B** sign the release note   **C** release a patient result on that lot',
  '**6**  Which row do the two lists collide in?   **A** the survey date   **B** one morning before the scaffold goes up   **C** the key to the flat',
  '**7**  What does the speaker say about the two lists?   **A** one is much longer than the other   **B** they have not one item in common   **C** they match almost exactly',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['1  Woman', 'She wants somebody to lead the September report, somebody to take the Thursday rota meeting, and somebody who will not go over her head. Those are three shapes of one thing, and the one thing is that she has been the only person in that building who can answer a question about nights since 2022. I had been negotiating against the shapes.'],
  ['2  Woman', 'I will take two colleagues, separately, for forty minutes each, in Room 9, in January — provided that the two slots are entered in the cover diary before the end of term, with the two names against them. In September I offered the same thing with nothing attached to it, and it ended up in a paragraph of a return to the directorate.'],
  ['3  Man', 'One sentence with both halves in it: I would be prepared to take the second training day in January, in exchange for the last forty minutes of both days being held with the door shut, unminuted and unreported. Not two paragraphs. In a year nobody will have both paragraphs, and whichever one they have will be the whole agreement.'],
  ['4  Man', 'It sounds like a month earlier. The January batch is confirmed in the last week of January and the February batch in the second week of February, so it is nine working days, not a month — because a batch is named after the month it is submitted in and not the month it is confirmed in, and that is not in the notes anywhere.'],
  ['5  Woman', 'Everything else is open. I can run it for the controls, I can run both lots in parallel and report the old one, and I can do the extra forty minutes a day that takes. What I am not able to do is release a patient result on a lot whose storage temperature nobody can state.'],
  ['6  Woman', 'Three of my four are things he does not care about at all, and two of his three cost me nothing. Only one row touches anything, and it is one morning: if I photograph all four elevations on the Sunday, his scaffold goes up on the Monday and neither of us has given anything up.'],
  ['7  Man', 'Four things on mine and four on theirs, written on the same evening without either of us seeing the other, and there is not one item in common. Mine are all things I took away. Theirs are all things they took on. And both lists are true.'],
]));
out.push(p('**C  Writing.** Write the two-column page (140+ words) for a real negotiation of your own: both columns of needs with theirs in their words, what each side can give easily, what neither can give, the one row where the lists touch, what would settle it, and the item you nearly missed.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 21)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell a position from the need underneath it, and write the other side\'s column in their words',
  '☐ attach one small checkable condition to an offer, and say what it does for them',
  '☐ say what I would give up **and in exchange for what**, in one sentence',
  '☐ answer a counter-offer with _in that case_ and a cost in my own units',
  '☐ state a limit about myself, first, once, and on a level tone — and tell it from a threat',
  '☐ build the two-column page and find the one row where the lists touch',
  '☐ find the strange item in the other side\'s column and see that it is the cheap one',
  '☐ ask both sides what they gave up, separately, and read two true lists that have nothing in common',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 22 – INTERVIEWS AND SELF-PRESENTATION', [
  'Unit 21 put two columns on one sheet. **Unit 22** turns the same discipline on yourself: answering a question about your own work so that the answer is checkable, and asking the questions that get somebody else to do the same.',
  '**22.1 brings back the four questions from 1.3** — _How did you end up…? · What is the hardest part? · What would you change? · What do people get wrong about it?_ — and this time **you** answer them, about your own work, at B1 length and with a number in each answer. Find your notes from Unit 1 before you come.',
  '**22.4 is the cycle to prepare for**: answering the question you hope will not be asked. **22.6** writes the one page about yourself that somebody could check — and it is the 18.4 nine lines again, three units on and for a stranger instead of a colleague.',
  '**Bring the four answers, written out**, and bring one question you have been asked about your own work that you answered badly. 22.1 is built on that answer and not on the good ones.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
