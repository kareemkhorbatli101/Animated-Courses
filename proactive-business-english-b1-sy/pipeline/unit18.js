// Proactive Business English B1 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a commitments register · to undertake · to decline · to defer · to postpone indefinitely · to put off · to keep on · to avoid · to insist on · to object to · to consent to · to be committed to · to be liable for · to be accountable to · a standing commitment · a one-off commitment · an open item · a closed item · to chase up · to hand back · to take over a commitment · to log a commitment · a rolling list · an outstanding action · a verb that commits you · a verb that does not · to be in a position to · to be minded to · subject to confirmation · a register entry';
const BACK_AT_B1 = 'chase · follow up · take on';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 18  Verb Patterns and the Week in Its Verbs'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**18.1**  use the verbs that take _-ing_, including the ones about not doing things',
  '**18.2**  use the verbs that take an infinitive, and see which of them commit you',
  '**18.3**  tell _stop to check_ from _stop checking_, and the other three pairs',
  '**18.4**  use adjective + preposition: _willing to · responsible for · liable for_',
  '**18.5**  say who asked whom to do what',
  '**18.6**  write one week as eleven commitments, each with its verb',
  '**18.7**  Review & Mediate: nine lines on a wall',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Why a unit about verb patterns is a unit about what you have promised', [
  'Three documents in this book have produced commitments: the **programme** in Unit 13, the **fifth part of the post-mortem** in Unit 15, and the **change notes** in Unit 17. ⚠ **Nobody is holding any of them in one place.**',
  '⚠ **And the grammar is not decoration here.** *I agreed to send it* and *I offered to send it* and *I said I would look into sending it* are three different promises, and the person you said them to remembers one of the three. ⚠ **The verb is the record.** Next week the only thing left of a conversation is the verb somebody wrote down.',
  '**So the unit builds one page: a commitments register.** ⚠ Eleven lines, each with **the verb that was used**, the person it was said to, and the date — ⚠ **and a column for the ones where the verb was *I will look into it*, which commits nobody and is the hardest kind to close.**',
], C.lyellow, C.orange));

// ======================= CYCLE 18.1 =======================
out.push(pb());
out.push(h2('18.1  The call I have been putting off'));
out.push(p('**Function:** talking about what you have avoided   ·   **Grammar:** verb + -ing — _avoid · put off · keep on · consider · risk_   ·   **Pronunciation:** the -ing said without a hard g'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing at work you have been putting off. Say how long, and what the first step would be.'));
out.push(p('**b**  Complete: _I have been putting off _______ (telephone) him. · I keep on _______ (forget) it. · We should avoid _______ (promise) a date._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Nour been putting off?   **A** a letter   **B** telephoning Mr Jaber about the Monday closing   **C** the stocktake'));
out.push(p('**b**  Listen again. **1** How long has she been putting it off? **2** What does Nadia say about the thing you are putting off?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  "How long have you been putting it off?"', [
  ['Nadia', 'Has Mr Jaber been told about the Monday?'],
  ['Nour', 'Fadi was going to telephone him. I think he has.'],
  ['Nadia', 'And if he has not?'],
  ['Nour', 'Then I have been putting off telephoning him myself since about the 25th.'],
  ['Nadia', 'Eleven days. Why?'],
  ['Nour', 'Because he is going to ask why we did not consult him, and I do not have an answer that is better than *nobody thought of it*.'],
  ['Nadia', 'So you are not avoiding the telephone call. ⚠ **You are avoiding one question inside it.**'],
  ['Nour', 'Yes.'],
  ['Nadia', '⚠ **Then the call is four minutes long and the question is one sentence**, and you have spent eleven days on a sentence. What is the sentence?'],
  ['Nour', '*We did not consult you and we should have. The days were changed for two reasons and neither of them was about you.*'],
  ['Nadia', 'And is that so bad to say?'],
  ['Nour', 'It is worse to say than to write.'],
  ['Nadia', '⚠ **Which is why you have been putting off telephoning and not putting off writing.** ⚠ And notice the pattern: *put off* takes the *-ing*, and so do *avoid*, *keep on*, *risk* and *consider*. ⚠ **These are the verbs of not doing things, and they are the verbs you need most on a Thursday afternoon** — because that is when you notice what you have not done.'],
  ['Nour', 'And *I keep on meaning to*?'],
  ['Nadia', '⚠ ***Keep on* plus *-ing* is the honest report of a habit** — *I keep on putting it off* — ⚠ **and *I keep on meaning to* is a sentence that describes nothing at all.** Say which it is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Verb + _-ing_ — the verbs of not doing things**',
  table(['Verb', 'Example'], [
    ['**put off**', 'I have been **putting off telephoning** him.'],
    ['**avoid**', 'We should **avoid promising** a date.'],
    ['**keep on**', 'I **keep on forgetting** it.'],
    ['**consider**', 'We are **considering changing** supplier.'],
    ['**risk**', 'You **risk losing** the slot.'],
    ['also', '**deny** · **admit** · **suggest** · **involve** · **mind** · **finish** · **mention**'],
  ], [1.4, 3.3]),
  '⚠ **These are the verbs of things not done, and they are the ones you need on a Thursday afternoon**, because that is when you notice what you have not done.',
  '⚠ **When you are putting something off, find the sentence inside it.** ⚠ *You are not avoiding the telephone call; you are avoiding one question inside it* — **the call is four minutes and the question is one sentence**, and eleven days have gone on the sentence.',
  '⚠ **Say how long.** *Since about the 25th — eleven days.* A thing you are putting off has a start date and naming it is most of the cure.',
  '⚠ ***Keep on* + -ing is an honest report of a habit.** ⚠ *I keep on meaning to* describes nothing at all — **there is no verb in it that anybody can do.** Say which you mean.',
  '⚠ **Watch *suggest* and *admit*, which learners give an infinitive.** ~~I suggest to change~~ · **I suggest changing**. ~~He admitted to take it~~ · **he admitted taking it.**',
  '**Practise:** Say each with the right form. 1 put off / telephone 2 avoid / promise 3 keep on / forget 4 consider / change 5 risk / lose 6 suggest / write',
  '**Useful phrases:**  I have been putting off …  ·  since about the …  ·  what is the sentence inside it?  ·  I keep on …  ·  we should avoid promising  ·  you risk losing',
  '**Pronunciation – the -ing.** 🔊 **Track 18.2** Listen: _putting off telephoning him_ — /ɪŋ/ with no hard g at the end, and the stress on *putting* and *phone*. ⚠ A hard g turns *telephoning* into three heavy syllables and the sentence loses its shape. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names something they are putting off; B finds the sentence inside it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Has __________ been __________?'],
  ['A', '__________ was going to __________. I think __________.'],
  ['B', 'And if __________ has not?'],
  ['A', 'Then I have been putting off __________ since about the __________.'],
  ['B', '__________ days. Why?'],
  ['A', 'Because __________ is going to ask __________, and I do not have an answer better than __________.'],
  ['B', '⚠ So you are not avoiding the __________. You are avoiding one question inside it. What is the sentence?'],
]));
out.push(table(['Role card 1 — Mr Jaber and the Monday', 'Role card 2 — the thing with no sentence in it'], [[
  'Eleven days of putting off a four-minute call. ⚠ **The sentence inside it:** *we did not consult you and we should have; the days were changed for two reasons and neither of them was about you.* ⚠ It is worse to say than to write, **which is why writing was not being put off.**',
  'A is putting off the fourth-store stocktake. ⚠ **There is no sentence inside this one** — it is not a conversation, it is three hours of counting with two people. ⚠ B\'s job is to find that out and say so: **a thing with no sentence inside it is being put off for time and not for fear, and the repair is a date in a diary, not a form of words.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what is being put off, since when, and the sentence inside it. ⚠ Then say whether it is being put off for fear or for time — the repair is different.'));
out.push(PHRASE_CARD(['I have been putting off …', 'since about the 25th', 'what is the sentence inside it?', 'I keep on …', 'avoid promising a date', 'fear, or time?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('List **five** things you have been putting off. For each: since when, the sentence inside it, and whether it is fear or time.'));
out.push(table(['What I am putting off', 'Since', 'The sentence inside it', 'Fear or time?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 0.8, 2.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I have been putting off _______ since _______. The sentence inside it is _______, and it is _______ and not _______._'));
out.push(p('**Listener task:** count the fear ones and the time ones. ⚠ Then ask how long each fear one is actually going to take — and the answer is almost always under ten minutes.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I keep on to forget_ and _I suggest to change_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list, and answer the questions.'));
out.push(box(null, [
  '**WHAT I HAVE BEEN PUTTING OFF, AND WHY. 7 March. N. Mansour. ⚠ Five things. Four are one sentence each.**',
  table(['What', 'Since', 'The sentence inside it', 'Fear or time', 'How long it will take'], [
    ['telephoning Mr Jaber about the Monday', '⚠ **25 Feb — 11 days**', '⚠ *we did not consult you and we should have*', '**fear**', '**four minutes**'],
    ['telling Lina the Thursday rota is changing', '1 Mar', '*your college afternoon is affected and I am sorry*', 'fear', 'two minutes'],
    ['asking Mr Ayoub about the key board', '22 Feb', '*three sets hang by the door and a trainee found it*', 'fear', 'five minutes'],
    ['writing to the Homs supplier to decline', '10 Feb', '*we are staying with our supplier; thank you for the quotation*', 'fear', '⚠ **three minutes**'],
    ['⚠ **the fourth-store stocktake**', '⚠ **June**', '⚠ **— there is no sentence**', '⚠ **time**', '⚠ **three hours, two people**'],
  ], [2, 1, 2.6, 0.8, 1.4]),
  '⚠ **Four of the five are one sentence and the total is fourteen minutes.** Eleven days, five days, thirteen days and twenty-five days of putting off, for fourteen minutes of talking. ⚠ **And in every one of the four the sentence is an admission** — that we did not consult, that she is losing something, that a trainee found it, that we are saying no.',
  '⚠ **The fifth is different and I nearly wrote it in the same column.** The stocktake has no sentence in it. ⚠ **It is not being avoided, it is unscheduled** — three hours and two people, and it has been outstanding since June because it has never been in anybody\'s week.',
  '⚠ **What that tells me.** ⚠ **I have one problem that looks like one problem and is two.** The four need a quarter of an hour and some courage; **the fifth needs a Tuesday afternoon and somebody\'s name** — and the reason they have sat on the same list since June is that I have been treating *things not done* as a single kind of thing.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the five are one sentence, and how long do they take in total?'));
out.push(item('2', 'What is the fifth one, and why is it different?'));
out.push(item('3', 'What does the writer conclude about her own list?'));
out.push(box('Writer\'s box', [
  '**What I have been putting off — four parts:** **the table: *what · since · the sentence inside it · fear or time · how long it will take*** → ⚠ **the total time of the fear ones** → ⚠ **the one with no sentence in it** → **what the two kinds tell you about the list.**',
  '⚠ **Write the sentence inside it, in the writer\'s own words, in the table.** ⚠ *We did not consult you and we should have.* **Writing the sentence down is most of saying it**, and the page is worth making for that column alone.',
  '⚠ **Add up the fear ones.** ⚠ *Four of the five are one sentence and the total is fourteen minutes.* **The arithmetic is the argument**: fifty-four days of putting off against fourteen minutes of talking.',
  '⚠ **Notice what the sentences have in common.** ⚠ *In every one of the four the sentence is an admission.* A page that finds the pattern is worth more than one that lists the items.',
  '⚠ **Keep the time one in the table and mark it differently.** ⚠ *It is not being avoided, it is unscheduled.* **A thing that needs three hours and two people is not a courage problem and no amount of courage will close it.**',
  '⚠ **And say what the two kinds require.** *A quarter of an hour and some courage* against ⚠ **a Tuesday afternoon and somebody\'s name.** The two repairs are different, which is why the single list never emptied.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own list of things put off (**60 words or more**). Use the frame.'));
out.push(p('**WHAT I HAVE BEEN PUTTING OFF, AND WHY. ______________. ______________. ⚠ ______________ things.**   ______________ | ⚠ **______________ — ______________ days** | ⚠ *______________* | **fear** | **______________**   ______________ | ______________ | *______________* | fear | ______________   ⚠ **______________** | ⚠ **______________** | ⚠ **— there is no sentence** | ⚠ **time** | ⚠ **______________**   ⚠ **______________ of the ______________ are one sentence and the total is ______________.** ______________ days of putting off, for ______________ of talking.   ⚠ **What the sentences have in common.** ______________.   ⚠ **The one with no sentence in it.** ______________ — it is not being avoided, it is ______________.   ⚠ **What that tells me.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person you have not telephoned.** The box says write the sentence inside it, in your own words. Your first row says *explain the situation* — what is the sentence you would actually say to me?"',
  '⚠ In this unit the reader to name is often **the person on the other end of the commitment**, and naming them changes what the writer can get away with: ⚠ **a column that says *explain the situation* survives being read by a colleague and does not survive being read as Mr Jaber.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **what is the sentence, in the words you would say?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *since* date for every row', ''],
  ['The sentence inside it, in the writer\'s own words', ''],
  ['The fear ones added up', ''],
  ['A row that is time and not fear, marked as such', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their sentences. The class says which one it would find hardest to say out loud, and how long it would take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you put off for a long time and then did (**140 to 180 words**). Say how long, what the sentence inside it was, and how long the doing of it actually took.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the -ing form right after every verb?_   ? _how long did the thing take, against how long it was put off?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the doing take less than an hour? Usually all three — ⚠ **and in all three the person was afraid of a sentence and not of the task.**'));
out.push(box('Homework', ['Write your final text. Then take one thing you are putting off, write the sentence inside it in the words you would say, and do it before the next lesson (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.2 =======================
out.push(pb());
out.push(h2('18.2  What I agreed to and what I did not'));
out.push(p('**Function:** reporting what you committed to   ·   **Grammar:** verb + infinitive — _agree to · refuse to · offer to · promise to · undertake to_   ·   **Pronunciation:** the verb stressed, because the verb is the promise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three things you have agreed to this month. Then say one thing you offered to do and one you refused.'));
out.push(p('**b**  Which commits you most, and which least? _I agreed to send it. · I offered to send it. · I said I would look into sending it. · I promised to send it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the disagreement about?   **A** a price   **B** which verb was used, and what it committed   **C** a date'));
out.push(p('**b**  Listen again. **1** What does Bassel remember Nour saying? **2** What does Mr Ayoub say about which of them is right?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  "I did not agree to it; I offered to look at it"', [
  ['Bassel', 'The Beirut labels. You agreed to have them designed by the 10th.'],
  ['Nour', 'I did not agree to it. I offered to look at whether we could.'],
  ['Bassel', 'I have *Nour — labels by the 10th* in my book.'],
  ['Nour', 'And I have *look into labels* in mine.'],
  ['Mr Ayoub', 'Then you are both honest and one of you is going to be wrong on the 10th. ⚠ **Which of you is Ms Tannous relying on?**'],
  ['Bassel', '…Me, because I told her the 10th.'],
  ['Mr Ayoub', '⚠ **Then the answer to *which of you is right* is that it does not matter**, because a third person has acted on the stronger of the two versions, which is what always happens. ⚠ **A commitment is as strong as the strongest verb anybody in the conversation heard.**'],
  ['Nour', 'That is not fair.'],
  ['Mr Ayoub', 'It is not fair and it is what happens. ⚠ **So the repair is at the moment of speaking: if you offer to look into something, say what you are not agreeing to**, in the same breath. *I will look at the labels this week. I am not agreeing to a date until I have.*'],
  ['Nour', 'Two sentences instead of one.'],
  ['Mr Ayoub', '⚠ **Nine words instead of five**, and the second sentence is the one that stops a third person being told a date. ⚠ And learn the verbs properly, because they are a ladder: **I promise to · I undertake to · I agree to · I will · I am willing to · I offer to · I will look into · I am minded to** — ⚠ **and the last three commit you to nothing at all, which is why they must be followed by what you are not agreeing to.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Verb + infinitive — the ladder of commitment**',
  table(['Verb', 'What it commits', 'Example'], [
    ['**I promise to · I undertake to**', '⚠ **everything** — a broken promise', 'I **undertake to** have them by the 10th.'],
    ['**I agree to**', 'the thing, as described', 'I **agreed to** send it on Friday.'],
    ['**I am willing to**', 'the thing, if asked again', 'I **am willing to** go on Thursday.'],
    ['**I offer to**', 'the attempt, not the result', 'I **offered to** look at it.'],
    ['⚠ **I will look into · I am minded to**', '⚠ **nothing at all**', '⚠ **say what you are not agreeing to**'],
  ], [2, 1.7, 2.2]),
  '⚠ **A commitment is as strong as the strongest verb anybody in the conversation heard.** Two honest people can leave a room with *offered to look at it* and *agreed to by the 10th*, ⚠ **and a third person acts on the stronger one, which is what always happens.**',
  '⚠ **So the repair is at the moment of speaking, not afterwards.** ⚠ *I will look at the labels this week. I am not agreeing to a date until I have.* **Nine words instead of five**, and the second sentence is what stops a customer being told a date.',
  '⚠ **The weak verbs are legitimate and they are incomplete.** *I will look into it* is a fine thing to say ⚠ **and it must be followed by what you are not agreeing to**, or it is heard as the next rung up.',
  '⚠ ***Refuse to* and *decline to* are the verbs nobody uses, and saying no in a verb is shorter than saying no in a paragraph.** *I am not going to be able to do that by the 10th* is a refusal pretending to be a difficulty; **I decline** is clear and is not rude.',
  '⚠ **And write the verb down, in your own book, in the words you used.** Next week the only thing left of a conversation is ⚠ **the verb somebody wrote down** — and if two books disagree, the stronger one wins.',
  '**Practise:** Put each on the ladder and then add the *what I am not agreeing to* sentence. 1 look into the labels 2 go on Thursday 3 have it by the 10th 4 ask Mr Ayoub 5 cover the counter',
  '**Useful phrases:**  I agreed to …  ·  I offered to look at it  ·  I am not agreeing to … until …  ·  which of you is she relying on?  ·  the strongest verb anybody heard  ·  I decline',
  '**Pronunciation – the verb carries the promise.** 🔊 **Track 18.4** Listen: _I OFFered to look at it_ · _I aGREED to send it_ — the verb stressed and the rest light. ⚠ Stress the object and the listener keeps their own verb. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A and B have different verbs in their books; a third person has acted. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. You agreed to __________ by the __________.'],
  ['B', 'I did not agree to it. I offered to __________.'],
  ['A', 'I have *__________* in my book.'],
  ['B', 'And I have *__________* in mine.'],
  ['A', '⚠ Then which of us is __________ relying on?'],
  ['B', '…__________, because __________ told __________.'],
  ['A', '⚠ So the verb that counts is the strongest one anybody heard. What should you have said?'],
]));
out.push(table(['Role card 1 — the Beirut labels', 'Role card 2 — the refusal nobody made'], [[
  '*You agreed to have them designed by the 10th* against *I offered to look at whether we could.* ⚠ **Ms Tannous has been told the 10th**, so the strong version is the one in the world. The repair: *I will look at the labels this week; I am not agreeing to a date until I have.*',
  'A asks B to cover the counter on Saturday. ⚠ B does not want to and says *I will see what I can do*, which A writes down as *B — Saturday*. ⚠ **The honest verb was *I decline*, or *I am willing to, if nobody else can and you ask me again on Thursday*** — and both are shorter than the week of ambiguity that follows.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both versions, the verb in each, and who has acted on which. ⚠ Then write the two-sentence repair that would have prevented it.'));
out.push(PHRASE_CARD(['I agreed to …', 'I offered to look at it', 'I am not agreeing to … until …', 'the strongest verb heard', 'I decline', 'what is in your book?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things you said this month. Write the verb you used, the verb they probably heard, and the repair sentence.'));
out.push(table(['What I said', 'My verb', 'The verb they heard', 'The *what I am not agreeing to* sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 0.9, 1.1, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said _______. My verb was _______ and they probably heard _______. The sentence I should have added is _______._'));
out.push(p('**Listener task:** count how many verbs in the room were heard one rung higher than they were said. ⚠ Then ask whether anybody has ever been heard one rung lower — it almost never happens.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I agreed sending it_ and _I offered looking at it_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT LABELS — WHAT I AGREED TO AND WHAT I DID NOT. 8 March. N. Mansour. ⚠ Copied to Bassel, because our books differ.**',
  table(['', 'What I said, in my words', 'The verb', 'What I did not agree to'], [
    ['on 3 March, to Bassel', 'I will look at whether we can get the labels designed', '⚠ **offered to look**', '⚠ **any date**'],
    ['on 3 March, to Bassel', 'the printer may take a week', 'none — information', '—'],
    ['on 4 March, to Ms Tannous', '— ⚠ **I said nothing to her at all**', '—', '—'],
  ], [1.6, 2.6, 1.3, 1.5]),
  '⚠ **What is in Bassel\'s book: *Nour — labels by the 10th*.** He wrote it in good faith and he then told Ms Tannous the 10th, ⚠ **which means the 10th exists** whatever either of our books says.',
  '⚠ **So this note is not an argument about who is right.** It is three sentences of record and one undertaking. ⚠ **The record:** I offered to look and I did not agree to a date. ⚠ **The undertaking:** since Ms Tannous has been given the 10th, **I undertake to have the labels designed by the 10th or to telephone her myself on the 9th** — and that is a stronger verb than anything I said on the 3rd, chosen now, in writing.',
  '⚠ **And what changes from today.** When I offer to look at something I will say what I am not agreeing to, in the same breath. ⚠ **Nine words instead of five.** Bassel has asked for the same from me, which is fair: ⚠ **he would rather hear *I am not agreeing to a date* than write a date that nobody gave him.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer say the 10th exists whatever the books say?'));
out.push(item('2', 'What verb does the writer choose now, and why is it stronger than the original?'));
out.push(item('3', 'What has Bassel asked for, and why does the writer call it fair?'));
out.push(box('Writer\'s box', [
  '**What I agreed to and what I did not — four parts:** **a table: *when and to whom · what I said in my words · the verb · what I did not agree to*** → ⚠ **what is in the other person\'s book, in good faith** → ⚠ **the record and the undertaking, separated** → **what changes from today.**',
  '⚠ **Say *in good faith* and mean it.** ⚠ *He wrote it in good faith and he then told Ms Tannous the 10th.* **A note that implies the other person invented the date will be answered instead of acted on.**',
  '⚠ **Separate the record from the undertaking.** The record is what was said; ⚠ **the undertaking is what you are choosing now**, and it is usually a stronger verb than the original — *I undertake to have them by the 10th or to telephone her myself on the 9th.*',
  '⚠ **Always offer the alternative undertaking.** *…or to telephone her myself on the 9th.* ⚠ **It is the half you can guarantee**, and it is what makes the stronger verb safe to use.',
  '⚠ **Record what you said to the third party, including *nothing*.** ⚠ *I said nothing to her at all* is a line worth a row of its own, because it is the fact that decides who must now telephone.',
  '⚠ **And state the change in practice, with the word count.** *Nine words instead of five.* ⚠ **A change that costs four words gets adopted; one that costs a procedure does not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a *what I agreed to* note about a real disagreement (**60 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT I AGREED TO AND WHAT I DID NOT. ______________. ______________. ⚠ Copied to ______________.**   on ______________, to ______________ | ______________ | ⚠ **______________** | ⚠ **______________**   on ______________, to ______________ | ⚠ **______________** | ______________ | ______________   ⚠ **What is in ______________\'s book:** ______________. ⚠ ______________ in good faith, and ______________, which means ______________.   ⚠ **The record.** ______________. ⚠ **The undertaking.** Since ______________, I undertake to ______________ **or to** ______________.   ⚠ **What changes from today.** When I ______________ I will say ______________, in the same breath. ⚠ ______________ words instead of ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person whose book says something different** — then ask one question: **does this say I invented it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A verb column, with the verb actually used', ''],
  ['*In good faith* about the other person', ''],
  ['The record and the undertaking, separated', ''],
  ['An alternative undertaking you can guarantee', ''],
  ['What changes from today, with its cost in words', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their undertaking. The class says whether the alternative half could fail.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time two people remembered a different verb (**140 to 180 words**). Say what each had in their book, who acted on which, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every verb followed by an infinitive where it should be?_   ? _which verb did the third person act on, and why that one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the third person act on the stronger verb? Usually all three — ⚠ **because a third person needs something to act on and the stronger verb is the only one that offers it.**'));
out.push(box('Homework', ['Write your final text. Then take one thing you are about to offer to look at, and write the second sentence — what you are not agreeing to (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.3 =======================
out.push(pb());
out.push(h2('18.3  Stop to check, or stop checking'));
out.push(p('**Function:** saying exactly which of two things you did   ·   **Grammar:** the four pairs — _stop · remember · forget · try_   ·   **Pronunciation:** the pause that separates _stop_ from its purpose'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say both aloud: _He stopped to check the load._ · _He stopped checking the load._ Which one means he is no longer checking?'));
out.push(p('**b**  Match: _I remembered to lock up_ · _I remember locking up_ — which is about last night, and which about a duty?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which sentence causes the trouble?   **A** *he tried to telephone*   **B** *he stopped checking the labels*   **C** *he forgot to sign*'));
out.push(p('**b**  Listen again. **1** What did the writer mean, and what did the reader understand? **2** What does Mr Attar say the four pairs have in common?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  "Four pairs, and all four are about something somebody stopped doing"', [
  ['Mr Attar', 'Your note on the nine cartons says *at about eleven Abu Yasser stopped checking the labels against the order*.'],
  ['Nour', 'He did. He stopped at about eleven.'],
  ['Mr Attar', 'And had he been checking them before eleven?'],
  ['Nour', '…No. He never checked them against the order, because the line did not ask him to.'],
  ['Mr Attar', '⚠ Then the sentence says he had a practice of checking and abandoned it halfway through the morning, **which is a finding about a man**, and what you mean is *at about eleven he stopped, to check the labels against the order* — or, properly, that nobody checked them at all.'],
  ['Nour', 'One comma and a different word order.'],
  ['Mr Attar', '⚠ **And the difference is whether somebody abandoned a control or never had one.** One of those is a disciplinary matter and the other is a page. ⚠ There are four pairs and they all behave this way. *Stop* · *remember* · *forget* · *try*.'],
  ['Nour', 'Give me *try*.'],
  ['Mr Attar', '⚠ *He tried to telephone the customer* — he attempted it; perhaps no answer. ⚠ *He tried telephoning the customer* — **he telephoned, as an experiment, to see whether it would solve something.** In a report about a delay those are opposite facts: in the first he did not reach them and in the second he did.'],
  ['Nour', 'And *remember* and *forget*?'],
  ['Mr Attar', '⚠ ***I remembered to lock up*** — I did it. ⚠ ***I remember locking up*** — I have a memory of doing it, which in a dispute is a much weaker statement and is the one people make when they are not sure. ⚠ *I forgot to lock up* — it is unlocked. ⚠ *I forget locking up* is not English.'],
  ['Nour', 'So what do the four have in common?'],
  ['Mr Attar', '⚠ **All four pairs are about things somebody did not do**, which is why they turn up in every report about something going wrong. ⚠ **And in all four the *-ing* form is the one that sounds more careful and claims less** — which is why people reach for it exactly when they should not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four pairs**',
  table(['_-ing_', 'Infinitive'], [
    ['**stop checking** — he was checking and no longer does', '**stop to check** — he stopped in order to check'],
    ['**remember locking up** — I have a memory of it', '**remember to lock up** — I did it / do it'],
    ['⚠ **forget locking up** — ⚠ **not English**', '**forget to lock up** — it is unlocked'],
    ['**try telephoning** — he telephoned, as an experiment', '**try to telephone** — he attempted it; perhaps no answer'],
  ], [2.6, 2.6]),
  '⚠ **Each pair separates two opposite facts and a report cannot afford to confuse them.** *Stopped checking* says somebody abandoned a control; ⚠ *stopped, to check* says they paused in order to do one. **One of those is a disciplinary matter and the other is a page.**',
  '⚠ ***Try to* is an attempt that may have failed; *try + -ing* is a thing actually done as an experiment.*** ⚠ In a report about a delay they are opposite: *tried to telephone* means no contact and *tried telephoning* means contact.',
  '⚠ ***I remember locking up* is weaker than *I remembered to lock up*** — it reports a memory and not an act, ⚠ **and it is the sentence people produce when they are not sure.** In a dispute, say which you mean.',
  '⚠ **All four pairs are about things somebody did not do**, which is why they appear in every report about something going wrong.',
  '⚠ **And in all four the *-ing* form sounds more careful and claims less**, ⚠ **so people reach for it exactly when they should not** — when the honest sentence is *nobody checked them at all*.',
  '**Practise:** Say both halves of each pair about your own work, and say which is true. 1 stop / check 2 remember / lock 3 forget / sign 4 try / telephone',
  '**Useful phrases:**  he stopped, to check …  ·  he stopped checking …  ·  I remembered to …  ·  I remember doing it  ·  I tried telephoning  ·  nobody checked them at all',
  '**Pronunciation – the pause that carries the comma.** 🔊 **Track 18.6** Listen: _he stopped // to check the load_ against _he stopped checking the load_. ⚠ The break after *stopped* is the only difference in speech, and it is the whole difference in meaning. Repeat four of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from a report; B asks which of the pair is meant. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your note says *__________ stopped __________*.'],
  ['A', '__________ did.'],
  ['B', 'And had __________ been __________ before?'],
  ['A', '…No. __________ never __________, because __________.'],
  ['B', '⚠ Then the sentence says __________, which is a finding about __________, and what you mean is __________.'],
  ['A', 'One comma and a different word order.'],
  ['B', '⚠ And the difference is whether somebody __________ or __________.'],
]));
out.push(table(['Role card 1 — the labels', 'Role card 2 — tried to, or tried'], [[
  '*At about eleven Abu Yasser stopped checking the labels against the order.* ⚠ He never checked them against the order, because the line did not ask him to. ⚠ **The sentence as written is a finding about a man; the truth is a finding about a page.**',
  'A report says *Fadi tried to telephone the office from the road.* ⚠ Which is it? **He attempted it twice and got no answer** (tried to) — or ⚠ **he telephoned, as a way of solving the problem, and it worked** (tried telephoning). **In the delivery that went to the wrong village the first is true, and the whole claim rests on it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both readings of the sentence and say which is true. ⚠ Then say which of the two is a finding about a person and which about a document.'));
out.push(PHRASE_CARD(['he stopped, to check …', 'he stopped checking …', 'had he been … before?', 'I tried telephoning', 'I tried to telephone', 'nobody checked at all']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** sentences from reports at your work. Say which of the pair is meant and whether the other reading is a finding about a person.'));
out.push(table(['The sentence', 'Which is meant', 'What the other reading says', 'Person or document?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence is _______. I mean _______. The other reading says _______, which is a finding about _______._'));
out.push(p('**Listener task:** count the sentences in the room whose other reading blamed a person. ⚠ Then ask whether any of them had already been read that way by somebody.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I forget locking up_ and _he stopped to check_ where he had been checking before. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**FOUR SENTENCES IN OUR OWN FILE, READ BOTH WAYS. 9 March. N. Mansour. ⚠ Three of the four are wrong as written.**',
  table(['As written', 'What it says', 'What was meant', 'Finding about'], [
    ['Abu Yasser **stopped checking** the labels against the order.', '⚠ **he had a practice and abandoned it**', 'nobody ever checked them — the line did not ask', '⚠ **a man, wrongly → a page**'],
    ['Fadi **tried telephoning** the office from the road.', '⚠ **he got through**', 'he attempted it twice and got no answer', '⚠ **the office, wrongly → nobody**'],
    ['Hala **remembers posting** the receipt.', '⚠ **she has a memory of it**', 'she posted it — ⚠ **the book shows the entry**', '⚠ **her memory, wrongly → the book**'],
    ['The cashier **forgot to initial** the copy.', 'it is not initialled', '⚠ **correct as written**', 'the copy'],
  ], [2.1, 1.8, 2, 1.4]),
  '⚠ **Row one turns a page fault into a man.** It has been in the file since January and Mr Attar read it before anybody noticed, ⚠ **and he was right to ask about it: as written it says a control was abandoned halfway through a morning.**',
  '⚠ **Row two is the one that matters in money.** The wrong-village delivery claim rests on the driver having had no way to resolve the address from the road. ⚠ ***Tried telephoning* says he got through**, which would mean somebody here told him to guess — **and nobody did, because nobody answered.**',
  '⚠ **Row three is weaker than the truth, which is unusual.** *Remembers posting* is what Hala said, and it is a report of a memory; ⚠ **the entry is in the post book in her handwriting with the date** — so the sentence should be *Hala posted the receipt on the 14th; the entry is in the post book.*',
  '**And row four is right.** ⚠ *Forgot to initial* means it is not initialled, which is what happened — and ⚠ ***forgot initialling* does not exist**, so this is the one pair where the wrong version is impossible rather than merely misleading.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row turns a page fault into a fault in a person?'));
out.push(item('2', 'Why does row two matter in money?'));
out.push(item('3', 'Which row is weaker than the truth, and what should it say?'));
out.push(box('Writer\'s box', [
  '**Four sentences read both ways — four parts:** **a table: *as written · what it says · what was meant · finding about*** → ⚠ **the row that turns a page fault into a person** → ⚠ **the row that matters in money** → **the row that is weaker than the truth, and the row that is right.**',
  '⚠ **Read your own file, not a textbook.** Four sentences from documents your company has already sent is worth any amount of exercise, ⚠ **and the hit rate is about three in four.**',
  '⚠ **Mark where the finding lands.** *A man, wrongly → a page.* ⚠ The arrow is the useful notation: **it shows that the correction moves the fault from a person to a document**, which is Unit 15\'s whole method arriving as a grammar point.',
  '⚠ **Identify the row that matters in money and say why.** ⚠ *The claim rests on the driver having had no way to resolve the address from the road* — **and *tried telephoning* says he got through**, which destroys the claim in four words.',
  '⚠ **Keep the row that is weaker than the truth.** ⚠ *Remembers posting* against *posted it on the 14th; the entry is in the post book.* **Learners expect every error to be an over-claim, and the under-claim is commoner in anything about one\'s own carefulness.**',
  '⚠ **And keep one row that is right.** A page on which everything is wrong will be read as a crusade; ⚠ **one correct row makes the other three findings.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take four sentences from your own files and read them both ways (**60 words or more**). Use the frame.'));
out.push(p('**FOUR SENTENCES IN OUR OWN FILE, READ BOTH WAYS. ______________. ______________. ⚠ ______________ of the four are wrong as written.**   ______________ **stopped ______________** | ⚠ **______________** | ______________ | ⚠ **______________ → ______________**   ______________ **tried ______________** | ⚠ **______________** | ______________ | ______________   ______________ **remembers ______________** | ⚠ **______________** | ⚠ **______________** | ______________   ______________ **forgot to ______________** | ______________ | ⚠ **correct as written** | ______________   ⚠ **The row that turns a page fault into a person.** ______________.   ⚠ **The row that matters in money.** ______________.   ⚠ **The row that is weaker than the truth.** ______________, so the sentence should be ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person the sentence is about** — then ask one question: **does this say I abandoned something?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four real sentences, from real documents', ''],
  ['*Finding about*, with the arrow where it moves', ''],
  ['The row that matters in money, named', ''],
  ['A row that is weaker than the truth', ''],
  ['One row that is right', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *stopped* row. The class says what the sentence as written accuses somebody of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence at your work that was read the other way (**140 to 180 words**). Say what it said, what was meant, who read it, and what they did.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the right half of each pair used?_   ? _who read it the other way, and what did they do about it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the misreading land on a person? Usually all three — ⚠ **because the *-ing* form sounds careful, and the careful-sounding version is the one that accuses somebody.**'));
out.push(box('Homework', ['Write your final text. Then find one sentence in a document of yours with *stop*, *try*, *remember* or *forget* in it, read it both ways, and correct it if it is wrong (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.4 =======================
out.push(pb());
out.push(h2('18.4  Willing to, responsible for, liable for'));
out.push(p('**Function:** saying what you are willing to do and what you are answerable for   ·   **Grammar:** adjective + preposition   ·   **Pronunciation:** the preposition weak, the adjective stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you are responsible for, one you are accountable to somebody for, and one you are willing to do that is not your job.'));
out.push(p('**b**  Complete: _willing _______ help · responsible _______ the stock · afraid _______ promising a date · accountable _______ Mr Ayoub · liable _______ the carriage._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What distinction does Nadia insist on?   **A** willing and able   **B** responsible for and liable for   **C** accountable and answerable'));
out.push(p('**b**  Listen again. **1** Who is responsible for the labels, and who is liable? **2** Why does she say the register needs both columns?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  "Responsible for is not the same as liable for"', [
  ['Nour', 'The register says I am responsible for the labels.'],
  ['Nadia', 'And who is liable if they are wrong?'],
  ['Nour', 'Is that not the same question?'],
  ['Nadia', '⚠ **No, and the nine cartons are what the difference looks like.** Abu Yasser was responsible for the marking. ⚠ **The company was liable to Ms Tannous**, and the cost — her agent\'s charge and two days — fell on us and not on him.'],
  ['Nour', 'So responsible for is who does it, and liable for is who pays.'],
  ['Nadia', 'Who answers for it. ⚠ **And the third one is *accountable to*, which is a person and not a thing**: Abu Yasser is accountable to Mr Ayoub, you are accountable to Mr Ayoub, and I am accountable to Mr Ayoub and to the auditor.'],
  ['Nour', 'Why does the register need all three?'],
  ['Nadia', '⚠ Because a register with only *responsible for* is a list of chores, and the thing people want to know in March is **who answers when it goes wrong.** ⚠ **A line that says *Nour — labels — by the 10th* does not say whether Nour is paying for a reprint or explaining to a customer or neither.**'],
  ['Nour', 'And *willing to*?'],
  ['Nadia', '⚠ **That is the fourth and it is the one that is always left out of registers and always matters.** You are willing to cover Baghdad Street on a Tuesday; you are not responsible for it, you are not liable for anything that happens there, ⚠ **and when you stop being willing, nothing in any document changes** — which is why the Tuesday cover has quietly become a commitment that nobody has ever assigned.'],
  ['Nour', 'So I should write *willing to* in the register.'],
  ['Nadia', '⚠ **Write it with a date on which you will be asked again.** *Willing to, reviewed in June.* ⚠ **A willingness with no review date becomes a duty in about four months**, and the person it becomes a duty for is the one who volunteered.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Adjective + preposition — and the four that a register needs**',
  table(['Form', 'What it means', 'Example'], [
    ['**responsible for** + noun/-ing', 'who does it', '**responsible for** marking the cartons'],
    ['**liable for** + noun', '⚠ **who answers and pays**', 'the company was **liable for** the re-marking'],
    ['**accountable to** + person', 'to whom', '**accountable to** Mr Ayoub'],
    ['⚠ **willing to** + verb', '⚠ **doing it without being assigned it**', '**willing to** cover on a Tuesday'],
    ['also', 'afraid **of** · interested **in** · capable **of** · subject **to** · dependent **on**', 'afraid **of promising** a date'],
  ], [2.1, 1.7, 2.1]),
  '⚠ ***Responsible for* is who does it; *liable for* is who answers for it.*** The nine cartons are the difference: **Abu Yasser was responsible for the marking and the company was liable to the customer**, and the cost fell on the company.',
  '⚠ ***Accountable to* takes a person**, and it is the column that tells a reader who will be asked about it in a meeting.',
  '⚠ ***Willing to* is the one always left out of registers and it always matters.** ⚠ *You are willing to cover on a Tuesday; you are not responsible for it and not liable for anything that happens there* — ⚠ **and when you stop being willing, nothing in any document changes.**',
  '⚠ **So a willingness goes in the register with a review date.** ⚠ *Willing to, reviewed in June.* **A willingness with no review date becomes a duty in about four months, and the duty falls on whoever volunteered.**',
  '⚠ **The prepositions are fixed and must be learned as pairs**, because a wrong one changes the claim: ⚠ *responsible **to** the stock* and *liable **to** the carriage* are not slips, they are different statements.',
  '⚠ ***Afraid of* takes -ing** — *afraid of promising a date* — which is the honest sentence behind half the register entries that say *I will look into it*.',
  '**Practise:** For each of your own duties say all four: responsible for, liable for, accountable to, and willing to. ⚠ Two of your duties will turn out to be willingnesses.',
  '**Useful phrases:**  responsible for …  ·  liable for …  ·  accountable to …  ·  willing to …, reviewed in June  ·  who answers when it goes wrong?  ·  afraid of promising a date',
  '**Pronunciation – the weak preposition.** 🔊 **Track 18.8** Listen: _resPONsible fə the stock_ · _LIable fə the carriage_ — the adjective stressed and *for* almost nothing. ⚠ A stressed *for* makes the phrase sound like a contradiction. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a register line; B asks for all four. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The register says I am responsible for __________.'],
  ['B', 'And who is liable if __________?'],
  ['A', 'Is that not the same question?'],
  ['B', '⚠ No. __________ was responsible for __________; __________ was liable to __________.'],
  ['A', 'So responsible for is who does it and liable for is who answers.'],
  ['B', '⚠ And accountable to is a person: __________. And __________ — are you willing to, or responsible for?'],
  ['A', '…⚠ Willing to, and nobody has ever written it down.'],
]));
out.push(table(['Role card 1 — the nine cartons', 'Role card 2 — the Tuesday cover'], [[
  'Abu Yasser: **responsible for** the marking. The company: ⚠ **liable to Ms Tannous** for the re-marking charge and the two days. Abu Yasser: **accountable to** Mr Ayoub. ⚠ **Nobody was willing to anything — it was all assigned**, which is why the register could have carried it.',
  'Nour covers Baghdad Street on Tuesdays. ⚠ **Responsible for: nothing. Liable for: nothing. Accountable to: nobody, for this. Willing to: yes, since June.** ⚠ **Nine months of willingness with no review date — and Hala now plans her Tuesdays around it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write all four for the line. ⚠ Then say which of the four was missing from the register, and how long it has been missing.'));
out.push(PHRASE_CARD(['responsible for', 'liable for', 'accountable to', 'willing to, reviewed in June', 'who answers when it goes wrong?', 'nobody wrote it down']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** of your own duties. Fill all four columns and mark which are really willingnesses.'));
out.push(table(['The duty', 'Responsible for?', 'Liable for?', 'Accountable to?', 'Willing to — since?'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.6, 1.1, 1.1, 1.1, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am responsible for _______. _______ is liable. I am accountable to _______. And _______ is something I am only willing to, since _______._'));
out.push(p('**Listener task:** count the willingnesses in the room with no review date. ⚠ Then ask how long each has run — and whether anybody else now plans their week around it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _responsible of the stock_ and _afraid to promising_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**MY OWN DUTIES, IN FOUR COLUMNS. 10 March. N. Mansour. ⚠ Three of the eleven turn out to be willingnesses.**',
  table(['The duty', 'Responsible for', 'Liable for', 'Accountable to', 'Willing to — since'], [
    ['export documents', '**me**', '⚠ **the company**', 'Mr Ayoub', '—'],
    ['the programme for each consignment', '**me**', 'the company', 'Mr Ayoub', '—'],
    ['the counter rota', '**me**', 'nobody', 'Mr Ayoub', '—'],
    ['⚠ **covering Baghdad Street on Tuesdays** (the second store, open since 8 June)', '⚠ **nobody**', '⚠ **nobody**', '⚠ **nobody**', '⚠ **me, since June**'],
    ['⚠ **the weekly stock figure**', '⚠ **nobody**', 'nobody', 'nobody', '⚠ **me, since 2017**'],
    ['⚠ **answering the trade telephone after four**', '⚠ **nobody**', 'nobody', 'nobody', '⚠ **me, when I am here**'],
  ], [2, 1, 1.1, 1.1, 1.4]),
  '⚠ **The three bottom rows have nobody in the first three columns and me in the fourth**, and all three are things the company now depends on. ⚠ **The weekly stock figure has been a willingness since 2017** — it survived the bank facility that caused it, it is the only weekly stock figure anybody produces, and **it is not in anybody\'s job.**',
  '⚠ **What a willingness does over time.** Hala plans her Tuesdays around my covering Baghdad Street. Nadia uses the weekly stock figure for the month end. ⚠ **Two people now depend on two things that nobody has assigned to anybody** — and if I were away for a month, neither would happen and neither would be anybody\'s fault.',
  '⚠ **What I am asking for.** ⚠ **Not to be relieved of any of the three.** I am asking for them to be **written into the first three columns**, with a review date, so that they are duties and not favours — ⚠ **because a favour cannot be handed over, and a duty can.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do the three bottom rows have in common?'));
out.push(item('2', 'What has happened to the two things other people depend on?'));
out.push(item('3', 'What is the writer asking for, and what is the reason?'));
out.push(box('Writer\'s box', [
  '**My duties in four columns — four parts:** **the table, with *willing to — since*** → ⚠ **the rows with nobody in the first three columns** → ⚠ **what a willingness does over time** → **what you are asking for, and why.**',
  '⚠ **Put the date in the *willing to* column.** ⚠ *Me, since June. Me, since 2017.* **The date is the whole finding**: a willingness of nine months is a habit and one of eight years is a load-bearing wall nobody has drawn.',
  '⚠ **Name who now depends on each willingness.** ⚠ *Hala plans her Tuesdays around it. Nadia uses the weekly figure for the month end.* **A willingness with dependants is not a favour any more**, whatever the document says.',
  '⚠ **Do the absence test.** ⚠ *If I were away for a month, neither would happen and neither would be anybody\'s fault.* **That sentence is what makes a reader act, and it is one sentence.**',
  '⚠ **And ask for the right thing.** ⚠ **Not to be relieved of them** — *I am asking for them to be written into the first three columns, with a review date.* ⚠ **A request to be relieved will be read as a complaint; a request to be recorded cannot be.**',
  '⚠ **End with the reason in one clause.** ⚠ *Because a favour cannot be handed over, and a duty can.* **That is the whole argument and it is nine words.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own duties in four columns (**60 words or more**). Use the frame.'));
out.push(p('**MY OWN DUTIES, IN FOUR COLUMNS. ______________. ______________. ⚠ ______________ of the ______________ turn out to be willingnesses.**   ______________ | **me** | ⚠ **______________** | ______________ | —   ______________ | **me** | ______________ | ______________ | —   ⚠ **______________** | ⚠ **nobody** | ⚠ **nobody** | ⚠ **nobody** | ⚠ **me, since ______________**   ⚠ **______________** | ⚠ **nobody** | nobody | nobody | ⚠ **me, since ______________**   ⚠ **The rows with nobody in the first three columns.** ______________, and ______________.   ⚠ **What a willingness does over time.** ______________ plans ______________ around it. ⚠ If I were away for a month, ______________.   ⚠ **What I am asking for.** ⚠ Not ______________. I am asking for ______________, ⚠ because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person who would have to cover if you were away** — then ask one question: **which of these would simply not happen?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four columns, with the right prepositions', ''],
  ['A date in the *willing to* column', ''],
  ['Who depends on each willingness', ''],
  ['The absence test, in one sentence', ''],
  ['A request to be recorded, not relieved', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their willingnesses and the dates. The class says which is the oldest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a willingness at your work that has become a duty (**140 to 180 words**). Say who started it, when, who depends on it now, and what would happen if they were away.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _are the prepositions right throughout?_   ? _who depends on it, and what happens if the volunteer is away?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had nobody ever written the willingness down? Usually all three — ⚠ **and in all three somebody would be blamed for its not happening, and it would not be the person who assigned it, because nobody did.**'));
out.push(box('Homework', ['Write your final text. Then take one willingness of your own and write it as a register line with a review date (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.5 =======================
out.push(pb());
out.push(h2('18.5  Who asked whom to do what'));
out.push(p('**Function:** reporting an instruction accurately   ·   **Grammar:** verb + object + infinitive — _asked her to · told him to · reminded me to · warned us not to_   ·   **Pronunciation:** the object said clearly, because the object is the record'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three instructions you have given this week in the form *I asked ___ to ___*. Then say one you were given.'));
out.push(p('**b**  Complete: _I asked Lina _______ (telephone) him. · He told me _______ (not sign) it. · She reminded me _______ (date) the quotation. · He warned us _______ (not promise) a day._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What cannot be established?   **A** the date   **B** who asked whom to do the marking   **C** the quantity'));
out.push(p('**b**  Listen again. **1** How many versions of the instruction are there? **2** What does Mr Ayoub say the fix is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  "Three people and no instruction"', [
  ['Mr Ayoub', 'Who asked whom to mark the cartons?'],
  ['Nour', 'I put it in the programme. Line three, Abu Yasser.'],
  ['Mr Ayoub', 'And did you ask him?'],
  ['Nour', 'I gave him the programme.'],
  ['Mr Ayoub', 'Abu Yasser says Lina gave him the programme. Lina says she put it on the bench because you asked her to take it over.'],
  ['Nour', '…I asked Lina to take the programme over. I did not ask her to ask him.'],
  ['Mr Ayoub', '⚠ So we have three people and no instruction. **You asked Lina to carry a piece of paper. Nobody asked Abu Yasser to do anything** — and he did the marking, correctly, from a page that arrived on his bench.'],
  ['Nour', 'He did the work without being asked.'],
  ['Mr Ayoub', '⚠ **Which is why nothing went wrong until the one thing on the page that was wrong.** A man working from a page nobody handed him has nobody to ask a question of.'],
  ['Nour', 'So what should have happened?'],
  ['Mr Ayoub', '⚠ **Somebody should have asked him, in a sentence with his name in it, and written the sentence down.** *I asked Abu Yasser to mark the cartons from the stencils on the 9th.* ⚠ **Eleven words, and there is an instruction in the world.**'],
  ['Nour', 'And carrying the paper?'],
  ['Mr Ayoub', '⚠ *I asked Lina to take the programme to the warehouse* is a different instruction and it was carried out perfectly. ⚠ **The error is that two instructions were needed and one was given** — and the missing one is the one with a verb in it.'],
  ['Nour', 'The verb in mine was *take*.'],
  ['Mr Ayoub', '⚠ **And you cannot get *mark the cartons* out of *take this to the warehouse*, however clearly the page is written.** ⚠ A document is not an instruction. **An instruction has a name in it, a verb, and somebody who said it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Verb + object + infinitive — the shape of an instruction**',
  table(['Form', 'Example'], [
    ['**ask** + object + **to**', 'I **asked Abu Yasser to mark** the cartons on the 9th.'],
    ['**tell** + object + **to**', 'He **told me to sign** after the count.'],
    ['**remind** + object + **to**', 'She **reminded me to date** the quotation.'],
    ['**warn** + object + **not to**', 'He **warned us not to promise** a day.'],
    ['also', '**advise · persuade · instruct · allow · expect · want** + object + **to**'],
  ], [1.9, 3.3]),
  '⚠ **An instruction has three parts: a name, a verb, and somebody who said it.** ⚠ *I asked Abu Yasser to mark the cartons from the stencils on the 9th* — **eleven words, and there is an instruction in the world.**',
  '⚠ **A document is not an instruction.** ⚠ *You cannot get* mark the cartons *out of* take this to the warehouse*, however clearly the page is written.* **A page that arrives on a bench has given nobody anything to ask a question about.**',
  '⚠ **Count the instructions a task needs.** Carrying the paper is one; doing the work is another. ⚠ **The error is almost always that two were needed and one was given**, and the missing one is the one with the real verb in it.',
  '⚠ ***Say* and *tell* behave differently and this is where learners fall.** ⚠ **tell + object** — *he told me to sign*; ⚠ **say** takes no object before *to* — ~~he said me to sign~~, and *he said that I should sign* is the alternative.',
  '⚠ **Negative instructions take *not to* and they are the ones worth writing down.** *He warned us not to promise a day.* ⚠ **A prohibition that was spoken and not written is the one that will be denied.**',
  '**Practise:** Turn each into a full instruction with a name and a verb. 1 the marking 2 the dating of quotations 3 not signing before a count 4 covering a Tuesday 5 not telephoning a customer',
  '**Useful phrases:**  I asked X to …  ·  he told me to …  ·  she reminded me to …  ·  he warned us not to …  ·  who asked whom?  ·  a document is not an instruction',
  '**Pronunciation – the object is the record.** 🔊 **Track 18.10** Listen: _I asked abu YASSer to MARK the cartons_ — the name and the verb both stressed. ⚠ Learners swallow the name and the sentence stops being evidence. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports that something was in a document; B finds out whether anybody was asked. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Who asked whom to __________?'],
  ['A', 'I put it in __________. Line __________, __________.'],
  ['B', 'And did you ask __________?'],
  ['A', 'I gave __________ __________.'],
  ['B', '⚠ __________ says __________ gave it to him. __________ says __________ put it on the bench.'],
  ['A', '…I asked __________ to __________. I did not ask __________ to ask __________.'],
  ['B', '⚠ So we have __________ people and no instruction. What should have been said?'],
]));
out.push(table(['Role card 1 — the marking', 'Role card 2 — the two instructions'], [[
  'Three people, no instruction. ⚠ Nour asked Lina to **take the programme over**; Lina put it on the bench; Abu Yasser did the marking from a page nobody handed him. ⚠ **The sentence that was missing: *I asked Abu Yasser to mark the cartons from the stencils on the 9th.***',
  'Count the instructions a task needs. ⚠ **Carrying the paper is one and doing the work is another**, and the second is the one with the real verb in it. ⚠ B\'s job is to make A say both sentences aloud, **and to notice that the one that was given was carried out perfectly.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the instruction that was given and the one that was not. ⚠ Then say who had nobody to ask a question of, and what that cost.'));
out.push(PHRASE_CARD(['I asked X to …', 'did you ask him?', 'who asked whom?', 'a document is not an instruction', 'two were needed, one was given', 'he warned us not to']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** tasks you have passed on. Write the instruction you actually gave and the one the task needed.'));
out.push(table(['The task', 'The instruction I gave', 'The instruction it needed', 'Given to whom, by whom'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.9, 1.9, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______ to _______. What the task needed was _______ asking _______ to _______. The person with nobody to ask was _______._'));
out.push(p('**Listener task:** count the tasks in the room that travelled by document rather than by instruction. ⚠ Then ask who did the work anyway — and in almost every case somebody did.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he said me to sign_ and _I asked to Lina to telephone_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHO ASKED WHOM — THE NINE CARTONS, THE INSTRUCTIONS. 11 March. N. Mansour.**',
  table(['The task', 'The instruction given', 'By whom, to whom', 'Carried out?'], [
    ['take the programme to the warehouse', '*take this over*', 'me, to Lina', '⚠ **yes, perfectly**'],
    ['⚠ **mark the cartons from the stencils**', '⚠ **none**', '⚠ **nobody, to nobody**', '⚠ **yes — he did it anyway**'],
    ['check the stencils against the order', '⚠ **none — and the line did not ask**', 'nobody', '**no**'],
    ['sign the gate sheet after the count', '*the programme line*', 'nobody, in person', 'yes'],
  ], [2, 1.8, 1.4, 1.3]),
  '⚠ **Of the four tasks, one instruction was given and it was the one about carrying a piece of paper.** It was carried out perfectly. ⚠ **The other three travelled by document.**',
  '⚠ **Three of the four were done anyway**, which is the part that makes this hard to see: a company in which work travels by document and gets done looks like a company that is working. ⚠ **It is working on the goodwill of people doing tasks nobody has asked them to do** — and the one task that was not done is the one that was not on the page either.',
  '⚠ **And the cost is not the work; it is the questions.** Abu Yasser marked the cartons from a page that arrived on his bench. ⚠ **If I had asked him, in a sentence, he would have asked me which code** — because that is what a man does when a person gives him an instruction, and it is not what he does when a page appears.',
  '⚠ **What changes.** Every line of a programme that somebody else performs is now **spoken to that person, by name, and the sentence is written in my own book with the date.** ⚠ *I asked Abu Yasser to mark the cartons from the stencils on the 9th.* **It takes about four seconds a line and there are eight lines.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which was the only instruction given, and was it carried out?'));
out.push(item('2', 'Why does the writer say this is hard to see?'));
out.push(item('3', 'What does the writer say the cost actually is?'));
out.push(box('Writer\'s box', [
  '**Who asked whom — four parts:** **a table: *the task · the instruction given · by whom to whom · carried out?*** → ⚠ **how many instructions were actually given** → ⚠ **why it is hard to see** → **the cost, and what changes.**',
  '⚠ **Keep the *carried out?* column and expect it to say yes.** ⚠ *Three of the four were done anyway* — and that is what makes the fault invisible: **a company where work travels by document and gets done looks like a company that is working.**',
  '⚠ **Name what it is running on.** ⚠ *It is working on the goodwill of people doing tasks nobody has asked them to do.* **One sentence, and it is the finding.**',
  '⚠ **Then say what the real cost is, which is not the work.** ⚠ *The cost is the questions.* **A man given an instruction by a person asks which code; a man given a page does not** — and that single difference produced the nine cartons.',
  '⚠ **And make the change small enough to happen.** ⚠ *About four seconds a line and there are eight lines.* **A change priced in seconds gets done; a change that sounds like a new procedure does not.**',
  '⚠ **Write the instruction in your own book with the date, in the words you used.** It is Unit 18.2\'s rule applied to the instructions you give rather than the ones you make.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *who asked whom* page for something at your work (**60 words or more**). Use the frame.'));
out.push(p('**WHO ASKED WHOM — ______________. ______________. ______________.**   ______________ | *______________* | ______________, to ______________ | ⚠ **yes, perfectly**   ⚠ **______________** | ⚠ **none** | ⚠ **nobody, to nobody** | ⚠ **yes — ______________ did it anyway**   ______________ | ⚠ **none** | nobody | **no**   ⚠ **Of the ______________ tasks, ______________ instruction was given**, and it was ______________.   ⚠ **______________ of the ______________ were done anyway**, which is why this is hard to see: ______________. ⚠ It is working on ______________.   ⚠ **And the cost is not the work; it is ______________.** ______________.   ⚠ **What changes.** ______________. ⚠ It takes about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person who did the work nobody asked for** — then ask one question: **who gave me this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *carried out?* column', ''],
  ['How many instructions were actually given', ''],
  ['What the company is running on, in one sentence', ''],
  ['The cost named as the questions, not the work', ''],
  ['A change priced in seconds', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *instruction given* column. The class counts the blanks and the *nones*.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a task at your work that nobody was asked to do (**140 to 180 words**). Say how it travelled, who did it, and what question did not get asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every instruction have a name and a verb?_   ? _what question would have been asked if a person had given it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the task done anyway? Usually all three — ⚠ **and in all three the thing that was lost was a question, not the work.**'));
out.push(box('Homework', ['Write your final text. Then take one line of a programme or list you have given somebody and say it to them in a sentence with their name in it, and write the sentence in your own book (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.6 =======================
out.push(pb());
out.push(h2('18.6  One week, in its verbs'));
out.push(p('**Function:** writing the commitments register   ·   **Grammar:** the register — eleven commitments, each with the verb that was used   ·   **Pronunciation:** reading a week\'s commitments aloud in one minute'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Count the things you have committed to this week. Then say how many are written down anywhere.'));
out.push(p('**b**  Which belong in a commitments register? _a date you agreed · a thing you offered to look at · a thing somebody asked you to do and you said nothing · a standing duty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the register turn out to contain?   **A** nine entries   **B** eleven, and three of them nobody else knows about   **C** nothing'));
out.push(p('**b**  Listen again. **1** How many entries have a verb that commits her? **2** What does Mr Ayoub say about the entries where she said nothing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  "Eleven, and three of them are only in your head"', [
  ['Mr Ayoub', 'One week, in its verbs. How many?'],
  ['Nour', 'Eleven. I undertook to one, I agreed to four, I offered to look at three, and three are things somebody asked me to do and I said nothing at all.'],
  ['Mr Ayoub', 'Start with the last three, because they are the dangerous ones. Who asked, and what?'],
  ['Nour', 'Hala asked whether I could do the counter on Thursday. Mr Attar asked for the stock figures before the 20th. ⚠ **And Ms Tannous asked, in a letter, whether we could quote for a hundred cartons.**'],
  ['Mr Ayoub', 'And you said nothing to any of the three.'],
  ['Nour', 'I said *I will see*, which is nothing.'],
  ['Mr Ayoub', '⚠ **It is worse than nothing, because all three of them have written it down as a yes.** You know that, because you would have. ⚠ **Silence after a question is heard as consent, and *I will see* is a form of silence with a polite noise in it.**'],
  ['Nour', 'So the register needs a column for what I said.'],
  ['Mr Ayoub', 'It needs the verb, and where there is no verb it needs the words. ⚠ **And it needs one more column that nobody puts in a register: what they think I said.**'],
  ['Nour', 'How would I know what they think?'],
  ['Mr Ayoub', '⚠ **Go one rung up the ladder.** They heard the next verb up from the one you used, every time, because a person who has asked you something needs an answer and takes the strongest one available. ⚠ **So write your verb, write the rung above it, and the second column is what you are going to be held to.**'],
  ['Nour', 'Then of my eleven, how many am I actually held to?'],
  ['Mr Ayoub', '⚠ **All eleven.** One by an undertaking, four by agreement, three by an offer that was heard as an agreement, and three by a silence that was heard as a yes. ⚠ **The register is not a list of what you promised. It is a list of what somebody is expecting**, and that is a longer list — which is why it has to be written on a Thursday and not remembered on a Monday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The commitments register — and the column nobody puts in**',
  table(['Column', 'Example'], [
    ['**what it is**', 'the Beirut labels'],
    ['**to whom, when**', 'Bassel, 3 March'],
    ['**my verb**', '⚠ *offered to look at*'],
    ['⚠ **what they heard — one rung up**', '⚠ *agreed to, by the 10th*'],
    ['**by when, and open or closed**', '10 March · **open**'],
  ], [2, 3]),
  '⚠ **Silence after a question is heard as consent**, and ⚠ ***I will see* is a form of silence with a polite noise in it.** Three entries in the sample week are questions answered with nothing, **and all three askers have written down a yes.**',
  '⚠ **Go one rung up the ladder to fill the fourth column.** ⚠ *They heard the next verb up from the one you used, every time, because a person who has asked you something needs an answer and takes the strongest one available.*',
  '⚠ **The register is not a list of what you promised; it is a list of what somebody is expecting** — and that is a longer list. ⚠ **Which is why it is written on a Thursday and not remembered on a Monday.**',
  '⚠ **Where there is no verb, write the words.** *I said "I will see".* ⚠ **The words are the evidence and the absence of a verb is the finding.**',
  '⚠ **Mark every line open or closed, and close them in writing.** A line is closed when the other person knows it is closed, ⚠ **not when you have done the thing** — which is the commonest reason a register grows.',
  '**Practise:** Write your own week as eleven lines, with the two verb columns. ⚠ Then count how many of the lines you would have remembered without the page.',
  '**Useful phrases:**  one week, in its verbs  ·  my verb was …; they heard …  ·  I said "I will see", which is nothing  ·  what somebody is expecting  ·  open or closed?  ·  closed when they know it is closed',
  '**Pronunciation – the week read aloud in one minute.** 🔊 **Track 18.12** Listen to eleven lines read in about fifty seconds: ⚠ **each line is *what · to whom · my verb · their verb · by when*, said flat.** It is the fastest way to find the lines that are wrong. Repeat the last four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a week\'s commitments; B supplies the rung above for each. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'One week, in its verbs. How many?'],
  ['A', '__________. I undertook to __________, I agreed to __________, I offered to look at __________, and __________ are things somebody asked and I said nothing.'],
  ['B', 'Start with the last ones. Who asked, and what?'],
  ['A', '__________. __________. ⚠ And __________.'],
  ['B', 'And you said nothing to any of them.'],
  ['A', 'I said __________, which is nothing.'],
  ['B', '⚠ It is worse than nothing, because all of them have written it down as __________.'],
]));
out.push(table(['Role card 1 — the eleven', 'Role card 2 — your own week'], [[
  'Eleven: one undertaking, four agreements, three offers to look, ⚠ **three silences.** The silences: Hala and the Thursday counter; Mr Attar and the stock figures before the 20th; ⚠ **Ms Tannous and a quotation for a hundred cartons, in a letter.** All three askers have written a yes.',
  'Use your own week. ⚠ B\'s job is to go **one rung up** on every line and to ask what the asker has written in their own book. ⚠ **Most people find two or three silences and are surprised by the third**, which is usually the one in writing.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the number of entries by kind. ⚠ Then write the three silences and what each asker has probably written down.'));
out.push(PHRASE_CARD(['one week, in its verbs', 'my verb was …; they heard …', '"I will see" is nothing', 'one rung up', 'what somebody is expecting', 'open or closed?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own week as a register. **Eleven** lines if you have them, and mark the silences.'));
out.push(table(['What it is', 'To whom, when', 'My verb', 'What they heard', 'By when · open/closed'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.6, 1.2, 1.1, 1.2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My week has _______ lines: _______ undertakings, _______ agreements, _______ offers and _______ silences. The silence that worries me most is _______, because _______._'));
out.push(p('**Listener task:** count the silences in the room. ⚠ Then ask how many of them were in writing — and a question in writing answered with silence is the worst line in anybody\'s register.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a register with no *to whom* column, and a line marked closed that the other person has not been told about. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the register, and answer the questions.'));
out.push(box(null, [
  '**COMMITMENTS REGISTER — WEEK OF 3 MARCH. N. Mansour. ⚠ Eleven lines. Three are silences and one of those is in writing.**',
  table(['What it is', 'To whom, when', 'My verb', '⚠ What they heard', 'By when · state'], [
    ['the Beirut labels', 'Bassel, 3 Mar', '*offered to look at*', '⚠ **agreed to, by the 10th**', '10 Mar · **open**'],
    ['the Jaber telephone call', 'Nadia, 7 Mar', '*undertook to*', 'undertook to', '8 Mar · **closed**'],
    ['change note for the Ghouta run', 'Fadi, 25 Feb', '*agreed to*', 'agreed to', '25 Feb · closed'],
    ['the key board question', 'Lina, 22 Feb', '*agreed to ask*', 'agreed to **fix**', '—  · ⚠ **open, 17 days**'],
    ['the stencil-object list', 'Lina, 18 Jan', '*agreed to*', 'agreed to', '24 Jan · closed'],
    ['declining the Homs quotation', 'Bassel, 10 Feb', '*agreed to write*', 'agreed to', '—  · ⚠ **open, 29 days**'],
    ['⚠ **the Thursday counter**', '⚠ **Hala, 5 Mar**', '⚠ ***"I will see"***', '⚠ **yes**', '6 Mar · ⚠ **open**'],
    ['⚠ **stock figures before the 20th**', '⚠ **Mr Attar, 20 Jan**', '⚠ ***"I will see"***', '⚠ **yes**', '20 Mar · ⚠ **open**'],
    ['⚠ **a quotation for 100 cartons**', '⚠ **Ms Tannous, 2 Mar — in writing**', '⚠ **nothing at all**', '⚠ **yes**', '—  · ⚠ **open, 9 days**'],
  ], [1.9, 1.5, 1.2, 1.4, 1.3]),
  '⚠ **Four lines are closed and seven are open, and three of the seven have been open longer than a fortnight.** The declining letter to Homs has been open twenty-nine days and takes three minutes; the key board has been open seventeen.',
  '⚠ **The fourth line is the one I had not seen.** I agreed to **ask** Mr Ayoub about the key board. ⚠ **Lina heard *agreed to fix it***, because that is the rung above, and she has not raised it again because she thinks it is in hand. **Nothing is in hand. I have not asked.**',
  '⚠ **And the ninth line is the worst thing on this page.** ⚠ **Ms Tannous asked, in writing, on 2 March, whether we could quote for a hundred cartons. I have not replied.** It is the largest enquiry this company has ever had from outside Syria, ⚠ **it is nine days old, and it is not in anybody\'s programme because I never wrote it down** — and the only reason it is on this page is that I made the page.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many lines are open, and which have been open longest?'));
out.push(item('2', 'What did Lina hear, and what has actually happened?'));
out.push(item('3', 'What is the ninth line, and why is it the worst?'));
out.push(box('Writer\'s box', [
  '**The commitments register — five columns and three findings:** **what it is · to whom and when · my verb · ⚠ what they heard · by when and open or closed** → ⚠ **the count of open lines and how long** → ⚠ **the line where the rung above has become somebody\'s plan** → ⚠ **the silence that is in writing.**',
  '⚠ **Put the age of every open line in days.** ⚠ *Open, twenty-nine days* — and next to a task that takes three minutes it is the most persuasive number on the page.',
  '⚠ **Write the verb in your own words, in quotation marks where there was no verb.** ⚠ *"I will see"* and **nothing at all** are both legitimate entries, and they are the two that produce the findings.',
  '⚠ **The *what they heard* column is one rung up, every time.** ⚠ *I agreed to ask; she heard agreed to fix* — **and she has not raised it again because she thinks it is in hand.** That is how a register finds the commitments nobody is working on.',
  '⚠ **Find the silence that is in writing and put it last, where the page ends.** ⚠ *The largest enquiry this company has ever had from outside Syria, nine days old, and not in anybody\'s programme because I never wrote it down.*',
  '⚠ **And say why it is on the page at all.** ⚠ *The only reason it is on this page is that I made the page.* **That sentence is the argument for doing this every Thursday**, and it is worth more than the eleven lines.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own commitments register for one week (**60 words or more**). Use the frame.'));
out.push(p('**COMMITMENTS REGISTER — WEEK OF ______________. ______________. ⚠ ______________ lines. ______________ are silences.**   ______________ | ______________ | *______________* | ⚠ **______________** | ______________ · **open**   ______________ | ______________ | *______________* | ______________ | ______________ · closed   ⚠ **______________** | ⚠ **______________** | ⚠ ***"______________"*** | ⚠ **yes** | ______________ · ⚠ **open**   ⚠ **______________** | ⚠ **______________ — in writing** | ⚠ **nothing at all** | ⚠ **yes** | — · ⚠ **open, ______________ days**   ⚠ **______________ lines are closed and ______________ are open**, and ______________ have been open longer than ______________.   ⚠ **The line I had not seen.** I ______________; ______________ heard ______________, ⚠ and ______________.   ⚠ **The worst thing on this page.** ______________. ⚠ The only reason it is here is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person in your seventh line.** The box says the *what they heard* column is one rung up from your verb. Yours says the same verb in both — is that right, or is it the rung you would prefer?"',
  '⚠ This is the hardest slip to write in Book 2 and the most useful: ⚠ **a register whose two verb columns are identical on every line has not been honestly made**, and the only person who can see that is somebody reading it as one of the people in it.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is your *what they heard* column ever different from your verb?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Five columns, including *what they heard*', ''],
  ['The age of every open line, in days', ''],
  ['The verb in quotation marks where there was no verb', ''],
  ['A line where the rung above has become somebody\'s plan', ''],
  ['The silence that is in writing, last', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their oldest open line and its age. The class says how long each would take to close.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a commitment of yours that somebody heard one rung up (**140 to 180 words**). Say what you said, what they planned, and when the difference was found.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the verb that was used recorded exactly?_   ? _what did the other person plan on the strength of it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the other person planned something on the rung above? Usually all three — ⚠ **and in all three the difference was found when the plan failed and not before.**'));
out.push(box('Homework', ['Write your final text. Then write this week as a register with both verb columns, and close the oldest open line before the next lesson (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 18.7 =======================
out.push(pb());
out.push(h2('18.7  Review & Mediate: nine lines on a wall'));
out.push(p('**Function:** handing a week\'s commitments to somebody who must act on them   ·   **Review:** verb + -ing · verb + infinitive · the four pairs · adjective + preposition · verb + object + infinitive · the register'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** When you are putting something off, what should you look for inside it?',
  '**2** How strong is a commitment, when two people remember different verbs?',
  '**3** What is the difference between *he stopped checking* and *he stopped, to check*?',
  '**4** What is the difference between *responsible for* and *liable for*, and what is the fourth column a register needs?',
  '**5** What are the three parts of an instruction, and why is a document not one?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub put on the wall?   **A** the whole register   **B** nine lines of it, and he says which two he has left off   **C** a rota'));
out.push(p('**b**  Listen again. **1** Which two lines does he leave off, and why? **2** What does he say about the wall against the book?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  "Nine of your eleven go on the wall"', [
  ['Mr Ayoub', 'Your register. Eleven lines. ⚠ **Nine of them go on the wall by the door and two do not.**'],
  ['Nour', 'Which two?'],
  ['Mr Ayoub', 'The Thursday counter, because it is between you and Hala and she can see you. ⚠ **And the Beirut labels, because that one is Bassel\'s now — he told the customer the 10th, so it is his line and it goes on his.**'],
  ['Nour', 'So a commitment belongs to whoever the customer is relying on.'],
  ['Mr Ayoub', '⚠ **A commitment belongs to whoever somebody outside this building is relying on**, and if that is nobody, it belongs to whoever is nearest to the person waiting. ⚠ **Which is not always the person who said the verb.**'],
  ['Nour', 'And why the wall rather than my book?'],
  ['Mr Ayoub', 'Your book is where a commitment goes to die quietly. ⚠ **A wall has two properties: everybody can see it, and nobody can reorder it.** In a book you turn a page and the oldest line goes to the back. ⚠ **On a wall the twenty-nine-day line is at the top, in your handwriting, and Lina walks past it eleven times a day.**'],
  ['Nour', 'That is uncomfortable.'],
  ['Mr Ayoub', '⚠ **It is meant to be, and it is also the only thing in this unit that works without anybody being disciplined about it.** ⚠ A register in a drawer requires a habit. **A list on a wall requires a wall.**'],
  ['Nour', 'And what about the hundred cartons?'],
  ['Mr Ayoub', '⚠ **That one goes at the top and it is not a commitment at all** — it is a question from a customer that nobody has answered for nine days. ⚠ **Put it in a different colour and put the date on it**, and when it is nine days old on a wall, somebody answers it today. ⚠ **It has been nine days old in a drawer since the 2nd of March and nobody answered it at all.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the register on a wall**',
  table(['The question', 'The answer'], [
    ['Whose is a commitment?', '⚠ **whoever somebody outside the building is relying on** — not always who said the verb'],
    ['And if that is nobody?', 'whoever is nearest the person waiting'],
    ['Why a wall and not a book?', '⚠ **everybody can see it, and nobody can reorder it**'],
    ['⚠ **What goes at the top, in another colour?**', '⚠ **an unanswered question from outside, with its date**'],
  ], [2.2, 3.4]),
  '⚠ **A commitment belongs to whoever somebody outside the building is relying on.** Bassel told the customer the 10th, so the labels are his line — ⚠ **whatever verb either of them used in the room.**',
  '⚠ **A book is where a commitment goes to die quietly**, because you turn a page and the oldest line goes to the back. ⚠ **A wall has two properties: everybody can see it, and nobody can reorder it** — so the twenty-nine-day line stays at the top.',
  '⚠ **It is meant to be uncomfortable and it is also the only part of this unit that works without discipline.** ⚠ *A register in a drawer requires a habit. A list on a wall requires a wall.*',
  '⚠ **An unanswered question from outside goes at the top in a different colour, with its date.** ⚠ *When it is nine days old on a wall, somebody answers it today; it has been nine days old in a drawer since the 2nd and nobody answered it at all.*',
  '⚠ **And some lines must come off the wall.** Anything between two people who sit within sight of each other, and anything that is somebody else\'s line — ⚠ **a wall with everything on it is a wall nobody reads.** Nine of eleven, not eleven of eleven.',
  '**Practise:** Take your own register and decide which lines go on a wall, which stay in a book, and which belong to somebody else. ⚠ Then say what goes at the top in another colour.',
  '**Useful phrases:**  nine of the eleven go on the wall  ·  whose is it?  ·  who outside is relying on it?  ·  a book is where it dies quietly  ·  nobody can reorder a wall  ·  that one goes at the top, in red',
  '**Pronunciation – reading a wall aloud.** 🔊 **Track 18.14** Listen: _nine days // Ms Tannous // a hundred cartons // not answered._ ⚠ Four groups, no verb, no explanation. **A wall line is not a sentence** and reading one aloud should take two seconds. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a register; B decides what goes on the wall, what stays in the book and what belongs to somebody else.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'The eleven lines. ⚠ **Nine go on the wall.** Off: the Thursday counter (between two people in sight of each other) and the Beirut labels (⚠ **Bassel\'s, because he told the customer**). ⚠ **At the top, in red: the hundred-carton question, 2 March, unanswered.**',
  'Take a register of your own. ⚠ B\'s job is to ask, for every line, **who outside the building is relying on it** — and to move any line where the answer is somebody else\'s name. ⚠ **Expect at least one line to belong to a colleague who does not know it is theirs.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write which lines went on the wall, which came off and why. ⚠ Then write the top line in the words that would be on the wall — no verb and no explanation.'));
out.push(PHRASE_CARD(['nine of eleven on the wall', 'who outside is relying on it?', 'a book is where it dies', 'nobody can reorder a wall', 'that goes at the top, in red', 'a wall line is not a sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Sort their register between a wall, a book and somebody else.'));
out.push(table(['The line', 'Wall, book, or somebody else', 'Why'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.6, 2.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what came off your wall and what went to the top. This is the **sixth** unit of this book, and the thing nobody writes down is this: **everybody keeps their commitments in a book, and a book is a device for making the oldest item invisible — you turn a page and the twenty-nine-day line goes to the back, so the lines that are hardest to close are the ones a register is structurally designed to hide, and the only fix is not a better register but a surface nobody can reorder.**'));
out.push(p('_I took _______ off the wall because _______. At the top, in a different colour, is _______, dated _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a commitments register · an open item · an outstanding action · to undertake · to decline · to defer._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 5)', 10));
out.push(p('⚠ **This unit practises Part 5: a longer text with multiple-choice questions.** Read the extract, then answer the six questions.'));
out.push(box(null, [
  '**Extract from a note on the commitments register, 12 March.**',
  '_The register has five columns, and the fourth is the one that is not usually found in a register: what the other person heard. It is filled by taking the verb that was used and moving one rung up a ladder which runs from "I undertake to" at the top, through "I agree to", "I am willing to" and "I offer to", down to "I will look into it" at the bottom. The reason for moving one rung is not that people are careless listeners. It is that a person who has asked a question needs an answer in order to plan, and takes the strongest answer available to them. A silence, or "I will see", is therefore heard as a yes, because a yes is the only thing in it that can be planned against. Of the eleven lines in the week of 3 March, four were closed and seven were open; three of the seven had been open for more than a fortnight, and the longest took three minutes to close. The register was then sorted between a wall and a book. Nine lines went on the wall by the door; one was left in the book because it concerned two people who sit within sight of each other, and one was transferred to a colleague, because he had given the date to the customer. A question from a customer that had not been answered for nine days was placed at the top in a different colour._',
]));
[
  '**1**  The fourth column is filled by ___.   **A** asking the other person   **B** moving the verb used one rung up   **C** writing the date',
  '**2**  People hear a stronger verb because ___.   **A** they are careless   **B** they need something to plan against   **C** they want to be helpful',
  '**3**  "I will see" is heard as a yes because ___.   **A** it is polite   **B** a yes is the only part of it that can be planned against   **C** it contains a verb',
  '**4**  Of the eleven lines, the number open for more than a fortnight was ___.   **A** three   **B** four   **C** seven',
  '**5**  One line stayed in the book because ___.   **A** it was private   **B** the two people concerned sit within sight of each other   **C** it was closed',
  '**6**  The line in a different colour was ___.   **A** the oldest commitment   **B** an unanswered question from a customer   **C** a colleague\'s line',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: answering a question from outside that has been unanswered for nine days.',
  'The shape: ⚠ **the answer, first, in the first line** · **the apology for the delay, in one clause, without a reason** · ⚠ **what happens next, with a date.**',
  '⚠ **Do not explain the nine days.** Every explanation available is about your own week and the reader was not in it. ⚠ ***I am sorry to have taken nine days* is one clause and it is enough**; a paragraph about why is a paragraph about you.',
  '⚠ **And answer the question even if the answer is incomplete.** *We can supply a hundred cartons; the lead time is four weeks and I will confirm the price on Friday* is an answer. ⚠ **Nine days of silence happened because the complete answer was not ready, and the incomplete one would have been worth more on the third of March.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A question from a customer has been unanswered for over a week. Write the reply (**60 to 80 words**). Give ⚠ **the answer first**, **the apology in one clause with no reason**, and ⚠ **what happens next, with a date.**'));
out.push(p('Dear ______________, ⚠ **yes** — ______________. ⚠ I am sorry to have taken ______________ to reply. ______________ is ______________, and ______________ depends on ______________, which I will confirm on ______________. If ______________, ______________. I will telephone on ______________ whether or not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ The answer in the first line', ''],
  ['The apology in one clause, with no reason', ''],
  ['What happens next, with a date', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own commitments register in full (**140 to 180 words**): every line with *what · to whom and when · my verb · ⚠ what they heard · by when and open or closed*, the age of the open ones in days, and ⚠ **the line that goes at the top in another colour.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then put nine lines on a wall where you work, with the oldest at the top, and the unanswered question from outside in a different colour (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  _I have been putting off ___ him._   a) to telephone   b) telephoning   c) telephone',
  '2  _I suggest ___ the line._   a) to change   b) changing   c) change',
  '3  I attempted it and got no answer. Write:   a) I tried telephoning   b) I tried to telephone   c) I was trying telephoning',
  '4  He never checked them at all. Which is wrong to write?   a) he stopped checking them   b) nobody checked them   c) he was not required to check them',
  '5  Who pays when it goes wrong is ___.   a) responsible for   b) liable for   c) accountable to',
  '6  _I am willing to cover on a Tuesday._ In a register this needs ___.   a) a review date   b) a signature   c) nothing',
  '7  _He ___ me to sign after the count._   a) said   b) told   c) asked to',
  '8  Two people remember different verbs. The commitment is as strong as ___.   a) the weaker verb   b) the stronger verb anybody heard   c) the written one',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 18.15** Listen to the exchange. Complete the note.   Lines going on the wall: ______   Line left in the book, and why: ______   Line transferred, and why: ______   What goes at the top, in another colour: ______   The two properties of a wall: ______'));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['Mr Ayoub', 'Eleven lines. Nine of them go on the wall by the door and two do not.'],
  ['Nour', 'Which two?'],
  ['Mr Ayoub', 'The Thursday counter, because it is between you and Hala and she can see you. And the Beirut labels, because Bassel told the customer the 10th, so it is his line.'],
  ['Nour', 'And why the wall rather than my book?'],
  ['Mr Ayoub', 'A wall has two properties: everybody can see it, and nobody can reorder it. In a book you turn a page and the oldest line goes to the back.'],
  ['Nour', 'And the hundred cartons?'],
  ['Mr Ayoub', 'At the top, in a different colour, with the date. It is not a commitment; it is a question from a customer that nobody has answered for nine days.'],
]));
out.push(p('**C  Writing.** Write five lines of a commitments register (**60 words or more**) with all five columns, including *what they heard*, and the age in days of any open line.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ use the -ing verbs, and find the sentence inside something I am putting off',
  '☐ place a verb on the ladder of commitment, and say what I am not agreeing to',
  '☐ tell the four pairs apart, and see which reading blames a person',
  '☐ use *responsible for · liable for · accountable to · willing to*, with a review date',
  '☐ give an instruction with a name, a verb and somebody who said it',
  '☐ write a commitments register with the *what they heard* column',
  '☐ sort a register between a wall, a book and somebody else',
  '☐ write a things-put-off list, a *what I agreed to* note, a four-column duty page and a register',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
