// Proactive English A2 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 22  Messages and Requests'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**22.1**  pass on a request',
  '**22.2**  pass on an instruction',
  '**22.3**  pass on information',
  '**22.4**  leave a message for somebody else',
  '**22.5**  write a short formal request',
  '**22.6**  reply to a request',
  '**22.7**  Review & Mediate: explain a formal email to a colleague',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Mr Fouad is away for two weeks** — his daughter\'s wedding in Aleppo. **Nour is taking every message** at TechCare, and there are more than anybody expected.',
  '**Lina is writing to the supplier in Türkiye on her own** for the first time. Rana is away and Mr Khaled has told her to send it without showing him.',
  '**The message book** at TechCare reception: Omar started it in week one: four messages went missing in the first three days.',
], C.lyellow, C.orange));

// ======================= 22.1 =======================
out.push(pb());
out.push(h2('22.1  He asked me to tell you'));
out.push(p('**Function:** passing on a request   ·   **Grammar:** _ask somebody to_ + verb   ·   **Pronunciation:** weak _to_ in _asked me to_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take out the three messages from your homework. Read **one** aloud exactly as you were given it. Your teacher writes three on the board, in the speaker\'s own words.'));
out.push(board('He asked me to tell you.', 'ask somebody TO + verb'));
out.push(p('**b**  Pass it on. **1** _"Please ring me."_ → She asked me ______.  **2** _"Can you bring the file?"_ → He asked me ______.  **3** _"Don\'t wait for me."_ → She asked me ______.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many messages has Nour taken?   **A** four   **B** seven   **C** eleven'));
out.push(p('**b**  Listen again. **1** What did the customer from Mezzeh ask?   **2** Why did Omar start the message book?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  Eleven messages', [
  ['Omar', 'How many today?'],
  ['Nour', 'Eleven. He has been gone four days.'],
  ['Omar', 'Read me the ones that matter.'],
  ['Nour', 'The customer from Mezzeh asked us to ring her before Thursday — she did not say why and I asked twice. The parts company asked him to confirm the order in writing. And the landlord asked him to ring about the rent, which he said three times.'],
  ['Omar', 'The landlord always says it three times.'],
  ['Nour', 'And one that worries me. A man rang on Tuesday and asked me to tell Mr Fouad that "he knows what it is about".'],
  ['Omar', 'No name?'],
  ['Nour', 'He would not give one. I asked him twice and the second time he said it did not matter.'],
  ['Omar', 'Write it down exactly as he said it, with the time. That is all you can do with a message like that, and it is enough.'],
  ['Nour', 'Is that why you started the book?'],
  ['Omar', 'I started the book because in the first three days four messages went missing and two of them were mine. A message that lives in somebody\'s head is not a message.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – passing on a request: _ask somebody to_**',
  table(['they said', 'you pass it on'], [
    ['_"Please ring me before Thursday."_', '_She **asked me to ring** her before Thursday._'],
    ['_"Can you confirm the order?"_', '_They **asked him to confirm** the order._'],
    ['_"Don\'t wait for me."_', '_She **asked me not to wait** for her._'],
  ], [1.3, 1.6]),
  '**The shape never changes:** _ask_ + **somebody** + **to** + bare verb. The person is **not** optional: ~~She asked to ring her.~~ means something else entirely.',
  '⚠ The negative goes **before _to_**: _She asked me **not to** wait._ ~~She asked me to not wait.~~ ~~She didn\'t ask me to wait.~~ (that is a different meaning)',
  '⚠ ~~She asked me that I ring her.~~ → _She asked me **to ring** her._',
  '**The pronouns change when you pass it on:** _"Ring **me**"_ → _She asked me to ring **her**._ Students lose this every time, and it is what makes a message wrong.',
  '**Practise:** Pass it on.  1 "Please come at four." (he/me)  2 "Can you send the file?" (she/you)  3 "Don\'t tell anybody." (he/us)  4 "Could you ring me tomorrow?" (she/him)  5 "Please don\'t be late." (they/me)',
  '**Useful phrases:** Read me the ones that matter. · He would not give a name. · Write it down exactly as he said it, with the time. · A message that lives in somebody\'s head is not a message.',
  '**Pronunciation.** 🔊 **Track 22.2** _asked me to_ runs together and the _to_ is weak: /ɑːskt mi tə/. The whole phrase is said fast and low, and the **verb after it** carries the stress: _she asked me to **RING** her._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the messages on the card, in the caller\'s own words; B passes each one on with _asked … to_, changing the pronouns. A checks. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________ rang and said: "__________."'],
  ['B', 'So __________ asked __________ to __________.'],
  ['A', 'Yes. And __________ said: "__________."'],
  ['B', '__________ asked __________ not to __________.'],
  ['A', 'And this one has no name.'],
  ['B', 'Then I write it exactly as it was said, with __________.'],
]));
out.push(table(['Card A – the messages', 'Card B – the messages'], [
  ['"Please ring me before Thursday." – the customer from Mezzeh', '"Can you send the April figures?" – the office in Homs'],
  ['"Can you confirm the order in writing?" – the parts company', '"Please don\'t start without me." – Mr Khaled'],
  ['"Don\'t send anything until I ring." – the supplier', '"Could you ask him to bring the key?" – the caretaker'],
  ['"Tell him he knows what it is about." – no name', '"It\'s about the thing from last month." – no name'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the **three** passed-on messages. Check every pronoun.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Use your own three messages from the homework. Give them to your partner in the speaker\'s words; your partner passes each one on. Then your partner gives you theirs.'));
out.push(p('**b**  Then both of you look at the messages you passed on and find the one where something was **lost** — a time, a reason, a name, a tone.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour has taken eleven messages in four days. The customer from Mezzeh asked them to ring her before Thursday and would not say why, and Nour asked twice. The parts company asked Mr Fouad to confirm the order in writing. The landlord asked him to ring about the rent, three times. And one worries her: a man rang on Tuesday and asked her to tell Mr Fouad that he knows what it is about, and would not give a name. Omar told her to write it exactly as it was said, with the time, and that that is all you can do with a message like that and it is enough. He started the message book because four messages went missing in the first week and two of them were his._'));
out.push(p('**Listener task:** write the message from today that lost the most when it was passed on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read a page from the TechCare message book. Answer the questions.'));
out.push(model([
  '**MESSAGE BOOK — week 1, for Mr Fouad**',
  '**Mon 10:15 · Mrs Jamila, Mezzeh (0991 448 207).** Asked us to ring her **before Thursday**. Would not say what about; I asked twice. She was not angry, she was in a hurry. — N.',
  '**Mon 16:40 · Al-Sharq Parts.** Asked you to confirm order 2214 **in writing**. They said a telephone call is not enough this time and they did not explain why. — N.',
  '**Tue 09:05 · no name (man, maybe 50s).** Asked me to tell you that "he knows what it is about". I asked for a name twice. Second time he said it did not matter. Rang from a number that does not answer. — N.',
  '**Tue 11:30 · the landlord.** Asked you to ring about the rent. Said it three times in one minute. — N.',
  '**Wed 08:50 · Mrs Jamila again.** Asked us **not** to ring after six, because of her mother. Still would not say what it is about. — N.',
  '**Note from Omar:** Nour has written every one of these with a time, a name where there is one, and the exact words where there is not. Four messages went missing in week one before this book existed and two of them were mine. Nothing goes in anybody\'s head.',
]));
out.push(item('1', 'What did Mrs Jamila ask on Wednesday?'));
out.push(item('2', 'What did Nour do when the man would not give a name?'));
out.push(item('3', 'Why did Omar start the book?'));
out.push(writers([
  'A message book entry: **day and time** → **who, with a number if there is one** → **what they asked, with _asked … to_** → **what you could not get** → **your initial**.',
  'Write down what you **could not** get, and that you tried: _would not say what about; I asked twice._ A gap that is recorded is useful; a gap that is silent looks like carelessness.',
  'Keep the **exact words** when there is no name: _"he knows what it is about"_. You are not guessing at meaning; you are preserving evidence.',
  '⚠ Record the **tone** when it matters: _she was not angry, she was in a hurry_. That line decides which message the manager answers first.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a page of a message book for somebody who is away (35 words or more).'));
out.push(p('**MESSAGE BOOK — ______________, for ______________**   **______________ · ______________ (______________).** Asked ______________ to ______________. ______________; I asked ______________. — ______________   **______________ · ______________.** Asked ______________ to ______________ **in ______________**. ______________. — ______________   **______________ · no name.** Asked me to tell you that "______________". ______________. — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A heading saying who it is for and which week',
  '_ask_ + **somebody** + **to** + bare verb · the negative **before** _to_',
  'Pronouns changed correctly from the speaker\'s words',
  'A day, a time and an initial on every entry — and what you could not get',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real message book (60 words or more) for a week when **you** were the person taking the messages — at work, at home, for a family member, for a neighbour. Five entries, at least one with no name and at least one negative request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who has been away**. ★ _The entry I would deal with first._  ✓ _One entry where I still have to ring somebody to find out what it is about._  ? _What was the tone of the third one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Swap pages. **Which entry would you be most annoyed to come back to?** It is never the bad news; it is the one that does not say enough.'));
out.push(hw('Write the **message you would least like to have to pass on** (40+ words) — and then write it properly, with a time, the exact words, and what you could not get.'));

// ======================= 22.2 =======================
out.push(pb());
out.push(h2('22.2  He told me not to send it'));
out.push(p('**Function:** passing on an instruction   ·   **Grammar:** _tell somebody (not) to_ + verb   ·   **Pronunciation:** stress on _not_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher gives five quick instructions to individual students. Then: _"What did I tell him to do?"_ The class answers each one.'));
out.push(board('He told me not to send it.', 'tell somebody (NOT) to + verb'));
out.push(p('**b**  _ask_ or _tell_? Which would you use? **1** your manager, about something you must do  **2** a colleague, about a favour  **3** a customer  **4** your younger brother  **5** somebody you have never met'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Mr Khaled told Lina?   **A** to send the letter without showing him   **B** to wait for Rana   **C** not to write to Türkiye at all'));
out.push(p('**b**  Listen again. **1** Why does Lina think he is wrong?   **2** What does he tell her **not** to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  Send it without showing me', [
  ['Lina', 'Rana is away until the eleventh. Shall I wait?'],
  ['Mr Khaled', 'No. Write it and send it.'],
  ['Lina', 'Will you read it first?'],
  ['Mr Khaled', 'No. I am telling you to send it without showing me.'],
  ['Lina', 'Mr Khaled, it is the first letter I have written to them on my own, and if it is wrong it is the company\'s name on it.'],
  ['Mr Khaled', 'I know. And I am asking you to notice that you said "if it is wrong" and not "when". Two years ago you would have said "when".'],
  ['Lina', 'That is not an answer.'],
  ['Mr Khaled', '(laughs) No. Here is the answer. I have read every letter you have written for eleven months and I have changed four words in all of them. I am not a checker; I am a bottleneck, and you are waiting for me when you do not need to.'],
  ['Lina', 'And if I get it wrong?'],
  ['Mr Khaled', 'Then I will tell you, and it will be the first time in eleven months. Two things, though. Do not send it today — write it today and send it tomorrow morning. And do not ask Rana from Latakia. She is on leave; tell her nothing until the eleventh.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _ask_ and _tell_**',
  table(['_ask somebody to_ — a **request**', '_tell somebody to_ — an **instruction**'], [
    ['_She **asked me to** ring her._\n_He **asked us not to** wait._\n(you may say no)',
     '_He **told me to** send it._\n_He **told her not to** ask Rana._\n(you are expected to do it)'],
  ], [1.3, 1.3]),
  '**Both have the same shape:** verb + **somebody** + **(not) to** + bare verb. And both **need the person**: ~~He told to send it.~~',
  '⚠ The difference is **who may refuse**. Use _ask_ for a favour or a customer, _tell_ for an instruction from somebody with the right to give one. Getting it wrong is not a grammar error, it is a social one — _my manager asked me_ and _my manager told me_ describe two different offices.',
  '⚠ ~~He said me to send it.~~ → _He **told** me to send it._  You **tell somebody** something; you **say** something.',
  '⚠ The negative, again, goes **before _to_**: _He told me **not to** send it today._',
  '**Practise:** _ask_ or _tell_, and pass it on.  1 Your manager: "Send it tomorrow." 2 A colleague: "Could you bring the file?" 3 A customer: "Please ring me before six." 4 Your manager: "Don\'t tell anybody yet." 5 A friend: "Don\'t wait for me."',
  '**Useful phrases:** Shall I wait? · That is not an answer. · I am not a checker; I am a bottleneck. · Two things, though. · Tell her nothing until the eleventh.',
  '**Pronunciation.** 🔊 **Track 22.4** In a negative instruction the stress lands on **not**: _He told me **NOT** to send it._ Without that stress the listener hears the opposite, and with a telephone line between you they will. Listen and repeat five negatives.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the instructions on the card as the manager; B repeats each one back as _"So you are telling me to…"_ and asks about one. Then B passes all of them on to a third person. Then swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'So you are telling me to __________.'],
  ['A', 'Yes. And __________.'],
  ['B', 'And not to __________?'],
  ['A', 'Not to __________, no.'],
  ['B', '(to a third person) He told me to __________, and he told me not to __________.'],
]));
out.push(table(['Card A – the instructions', 'Card B – the instructions'], [
  ['Write it today and send it tomorrow morning.', 'Open the shop at eight, not half past.'],
  ['Don\'t show it to me first.', 'Don\'t take cash from anybody before nine.'],
  ['Don\'t ask Rana — she is on leave.', 'Ring me if anybody asks about the delivery.'],
  ['Ring me only if they answer the same day.', 'Don\'t promise anybody anything about Thursday.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **two** positive instructions and the **two** negative ones. Were the negatives clearly negative?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Tell your partner about the last clear instruction somebody gave you — at work, at home, from an office. Who said it, what exactly, and did they _ask_ or _tell_?'));
out.push(p('**b**  Swap. Then each of you say **one** instruction you were given that you did not follow, and what happened.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Khaled told Lina to write to Türkiye and send it without showing him, which is the first letter she has written to them on her own. She said that if it is wrong it is the company\'s name on it, and he pointed out that she said "if" and not "when", and that two years ago she would have said "when". His real reason is that he has read every letter she has written for eleven months and changed four words in all of them, and that he is not a checker, he is a bottleneck. He told her two things not to do: not to send it today — write it today, send it tomorrow — and not to ask Rana anything, because she is on leave until the eleventh._'));
out.push(p('**Listener task:** write the one instruction today that was really about trusting somebody.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the handover note Mr Fouad leaves before he goes away. Answer the questions.'));
out.push(model([
  '**TWO WEEKS — what to do and what not to do** · Fouad, for Nour and Omar',
  'I am away from the 6th to the 20th. My telephone will be on and I will answer twice a day, at about ten and at about seven. Please do not ring between those times unless somebody is hurt.',
  '**Do.** Take every message, with the time and a name. Open the workshop at eight. Ring me at ten if anything is about money over fifty thousand, and at seven for everything else.',
  '**Don\'t.** Do not agree to any new job that takes more than one day. Do not promise anybody a date in the week I come back; I do not know yet what is waiting. And do not let anybody collect a repair without the ticket, including the people we know. **Especially** the people we know.',
  '**One thing I am asking rather than telling.** Omar — would you keep the Saturday clinic going? It is not work and I cannot tell you to do it, and the four people who came last month have told three others.',
  '**If something happens that is not on this paper:** Nour decides, and I will support whatever she decides, including if it is wrong. That sentence is the whole reason this paper is short.',
]));
out.push(item('1', 'When can they ring him?'));
out.push(item('2', 'What must nobody do without a ticket?'));
out.push(item('3', 'What is the one thing he asks rather than tells, and why?'));
out.push(writers([
  'A handover note: **the dates and how to reach you** → **Do** → **Don\'t** → **the one thing you are _asking_** → **who decides when the paper runs out**.',
  'Separate _ask_ from _tell_ **visibly**. Marking one item as a request rather than an instruction tells the reader exactly how much of the rest is non-negotiable.',
  'The negatives need their **reason** or their **exception**: _do not promise a date; I do not know what is waiting_ · _not without the ticket — **especially** the people we know_.',
  '⚠ The last paragraph is what makes a handover work. Naming **who decides** when something unexpected happens, and saying you will support it, is worth more than four more instructions.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a handover note for a time when you will be away (35 words or more).'));
out.push(p('**______________ — what to do and what not to do** · ______________   I am away from ______________ to ______________. ______________.   **Do.** ______________. ______________. ______________.   **Don\'t.** Do not ______________. Do not ______________. And do not ______________, including ______________.   **One thing I am asking rather than telling.** ______________ — would you ______________?   **If something happens that is not on this paper:** ______________ decides, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The dates and how to reach you, in the first two lines',
  '_tell somebody to_ for instructions, _ask somebody to_ for the request · negatives **before** _to_',
  'Every _don\'t_ has a reason or an exception',
  'A last line naming who decides when something is not on the paper',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real handover note (60 words or more) for the next time you are away from something you are responsible for — a job, a shop, a flat, a family. Do, Don\'t, one request, and who decides.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the person left in charge**. ★ _The line that would let me sleep._  ✓ _One instruction I would not know how to follow._  ? _Who decides about the thing you have not thought of?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **"who decides"** lines aloud. **Which one would you want to work for?** Then ask whether anybody has ever been given a note like that.'));
out.push(hw('Write the note **you needed and nobody left you** (40+ words), for a time you were left in charge and were not told enough.'));

// ======================= 22.3 =======================
out.push(pb());
out.push(h2('22.3  She says the order has arrived'));
out.push(p('**Function:** passing on information   ·   **Grammar:** _say (that)_ + present, at A2   ·   **Pronunciation:** weak _that_ /ðət/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  One student whispers a fact to the next; it goes round the room and comes back. Compare the first and the last. What changed?'));
out.push(board('She says the order has arrived.', 'say (that) + what they said'));
out.push(p('**b**  Pass it on with _says_. **1** _"The order has arrived."_  **2** _"I can\'t come on Thursday."_  **3** _"There isn\'t any left."_  **4** _"We sent it on Monday."_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with the message?   **A** it was not written down   **B** three people have passed it on and it has changed   **C** it was in the wrong language'));
out.push(p('**b**  Listen again. **1** What did the supplier actually say?   **2** What does Nour say is the rule?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  What did he actually say?', [
  ['Omar', 'The parts are not coming. The man in the workshop says so.'],
  ['Nour', 'Who told him?'],
  ['Omar', 'Jaber. And Jaber says the driver told him.'],
  ['Nour', 'So that is three people. What did the driver actually say?'],
  ['Omar', '…I don\'t know.'],
  ['Nour', 'Give me the number.'],
  ['Omar', '(later) Well?'],
  ['Nour', 'The driver says the parts are on the lorry. He says the lorry is in Homs. He says he is not coming today because the company has told him to do Hama first, and he says he will be here tomorrow before twelve.'],
  ['Omar', 'That is a completely different message.'],
  ['Nour', 'It is the same message. "Not today" became "not coming" in two steps, and nobody lied. The first person said what they thought it meant and the second person passed on what they thought the first person meant.'],
  ['Omar', 'So what is the rule?'],
  ['Nour', 'Pass on **what they said**, not what you think it means. And if you are the third person, ring the first one.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – passing on information: _say (that)_**',
  table(['they said', 'you pass it on'], [
    ['_"The parts are on the lorry."_', '_He **says (that)** the parts **are** on the lorry._'],
    ['_"I can\'t come today."_', '_He **says (that)** he **can\'t** come today._'],
    ['_"We sent it on Monday."_', '_She **says (that)** they **sent** it on Monday._'],
  ], [1.3, 1.6]),
  '**At A2 we do not change the tense.** _"The parts are on the lorry"_ → _He says the parts **are** on the lorry._ Keep the verb as they said it; change only the **person**.',
  '**_that_ is optional** and usually dropped in speech: _He says (that) he will be here tomorrow._',
  '⚠ ~~He said me that…~~ → _He **told me** that…_ / _He **said** that…_  **say** something · **tell somebody** something.',
  '⚠ ~~He says the parts is on the lorry.~~ — the verb still has to agree.',
  '**_says_ or _said_?** _says_ for what somebody says now or always; _said_ for one occasion in the past. In a message, _says_ is usually right: _he **says** he will be here tomorrow_.',
  '**Practise:** Pass it on with _says_.  1 "The order has arrived." 2 "I can\'t come on Thursday." 3 "There isn\'t any left." 4 "We sent it on Monday." 5 "I don\'t know who rang."',
  '**Useful phrases:** Who told him? · What did he actually say? · That is a completely different message. · nobody lied · Pass on what they said, not what you think it means.',
  '**Pronunciation.** 🔊 **Track 22.6** _that_ inside the sentence is weak — /ðət/ — and often disappears entirely: _He says (that) the parts are on the lorry._ Listen to the version with it and the version without, and say both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has the original words on the card and says them to B. B passes them to C **in their own words**. C passes them back to A. Compare with the card. Then change roles.'));
out.push(dlg(null, [
  ['A', '"__________."'],
  ['B', '(to C) __________ says __________.'],
  ['C', '(to A) So __________ says __________.'],
  ['A', 'That is not what was said. The original was: "__________."'],
  ['C', 'What changed?'],
  ['A', '__________ became __________ in __________ steps.'],
]));
out.push(table(['Card A – the original words', 'Card B – the original words'], [
  ['"I\'m not coming today, I\'ll be there tomorrow before twelve."', '"We haven\'t sent it yet — it goes on Thursday."'],
  ['"The price might go up in May, but nothing is decided."', '"I can do it, but not before the end of the month."'],
  ['"Tell him I rang; he knows what it is about."', '"She said she would ring back, but she didn\'t say when."'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the original and the final version. What was the first word that changed?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of something you have been told **by a third person** — news about work, a family decision, something about a friend. Tell your partner what you were told and who told you. Your partner must ask: _and what did the first person actually say?_'));
out.push(p('**b**  Swap. Then both of you decide which of these you could actually check, and whether you are going to.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar came in saying the parts are not coming, which he had from the man in the workshop, who had it from Jaber, who had it from the driver — three people. Nobody asked what the driver actually said. Nour rang him: he says the parts are on the lorry, the lorry is in Homs, he is not coming today because his company has told him to do Hama first, and he will be here tomorrow before twelve. Omar said that is a completely different message and Nour said it is the same message — "not today" became "not coming" in two steps and nobody lied. Her rule is: pass on what they said, not what you think it means, and if you are the third person, ring the first one._'));
out.push(p('**Listener task:** write the thing you believe that you have never checked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour puts in the message book. Answer the questions.'));
out.push(model([
  '**Wed 14:20 · the delivery — corrected** — N.',
  '**What was going round the workshop by midday:** "the parts are not coming."',
  '**Where it came from:** the driver → Jaber → the man in the workshop → Omar → me. Four steps.',
  '**What the driver actually says**, rung at 14:05 on 0933 771 420:',
  '· He says the parts are on the lorry.',
  '· He says the lorry is in Homs.',
  '· He says he is not coming today because his company has told him to do Hama first.',
  '· He says he will be here tomorrow before twelve, and he says "before twelve" means before twelve.',
  '**What changed on the way:** "not today" became "not coming". Nobody said anything that was untrue. The first person said what they thought it meant; everybody after that passed on the meaning and not the words.',
  '**For the book, from now on:** when a message has been through more than one person, write down **who said it first** and ring them. It took four minutes.',
]));
out.push(item('1', 'How many steps had the message been through?'));
out.push(item('2', 'Why is the driver not coming today?'));
out.push(item('3', 'What is the new rule for the message book?'));
out.push(writers([
  'A correction note: **what was going round** → **where it came from, as a chain** → **what the first person actually says** → **what changed** → **the rule for next time**.',
  'Draw the **chain**: _driver → Jaber → the workshop → Omar → me._ Four arrows explain the error without blaming anybody, which is the only way a correction gets read.',
  'Quote the first person in **separate lines**, each starting _he says_. It is slightly repetitive and that is the point: each line is one fact you can check.',
  '⚠ Say plainly that **nobody lied**. A correction that sounds like an accusation gets argued with; one that explains the mechanism gets adopted.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a correction note about something that changed on its way to you (35 words or more).'));
out.push(p('**______________ · ______________ — corrected** — ______________   **What was going round:** "______________."   **Where it came from:** ______________ → ______________ → ______________. ______________ steps.   **What ______________ actually says:**   · ______________.   · ______________.   · ______________.   **What changed on the way:** "______________" became "______________". Nobody ______________.   **From now on:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A date, a time and your initial',
  '_says (that)_ + the words as they were said · no tense changed · the person changed',
  'The chain written out, with arrows and a number of steps',
  'One line saying nobody lied, and a rule for next time',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full correction (60 words or more) for something you have heard third-hand and could check — at work, in your building, in your family, about this centre. Draw the chain, give the first person\'s words, and say what changed.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **somebody in the middle of the chain**. ★ _I am not blamed and I can still see what I did._  ✓ _One line that does sound like blame._  ? _Did you really ring, or is this what you think they would say?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you actually rang the first person?** Count. Then: of the ones who did, how long did it take? It is almost always under five minutes, and that number is the whole cycle.'));
out.push(hw('Ring or ask the **first person** about something you have only heard third-hand, and write down their words (40+ words) next to the version you were given.'));

// ======================= 22.4 =======================
out.push(pb());
out.push(h2('22.4  Can you tell him that I rang?'));
out.push(p('**Function:** leaving a message for somebody else   ·   **Grammar:** _Can you tell him (that)…?_   ·   **Pronunciation:** spelling and numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Spelling practice, fast. Your teacher spells six names and six numbers; the class writes them. Then two students spell their own family names to each other over an imaginary telephone.'));
out.push(board('Can you tell him that I rang?', 'Can you tell him…? · Could you ask her…?'));
out.push(p('**b**  What do you say when you did not hear? _Sorry, could you repeat the number? · Was that fifteen or fifty? · Could you spell that? · Is that with one L or two?_ Practise each one once.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mrs Jamila want?   **A** to complain   **B** to change an appointment   **C** to collect something early'));
out.push(p('**b**  Listen again. **1** What **four** things does Nour write down?   **2** What does she do about the number?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  Fifteen or fifty', [
  ['Mrs Jamila', 'Is Mr Fouad there?'],
  ['Nour', 'I\'m afraid he\'s away until the twentieth. Can I take a message?'],
  ['Mrs Jamila', 'Yes. Can you tell him that I rang, and that I need the machine before Thursday, not Friday? My daughter is coming on Thursday.'],
  ['Nour', 'Before Thursday. And can I say why? It helps him decide what to do first.'],
  ['Mrs Jamila', 'Because my daughter is coming from Dubai for four days and she has not seen the house in two years, and I would like my kitchen back.'],
  ['Nour', 'That is a very good reason and I am writing it down. Could you give me your number again?'],
  ['Mrs Jamila', 'Oh double nine one, four four eight, two oh seven.'],
  ['Nour', 'Let me read it back. Oh nine nine one, four four eight, two oh seven.'],
  ['Mrs Jamila', 'Yes.'],
  ['Nour', 'And your name — Jamila with a J?'],
  ['Mrs Jamila', 'Jamila Khoury. K-H-O-U-R-Y.'],
  ['Nour', 'Thank you. So: you rang at ten past three, you need it before Thursday because your daughter arrives, and he can ring you on that number any time before six.'],
  ['Mrs Jamila', 'Nobody has ever read it back to me before.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Taking and leaving a message**',
  table(['leaving one', 'taking one'], [
    ['_**Can you tell him that** I rang?_\n_**Could you ask her to** ring me?_\n_**Can you tell him** I need it before Thursday?_',
     '_**Can I take a message?**_\n_**Can I say why?**_\n_**Could you give me** your number?_\n_**Let me read it back.**_'],
  ], [1.3, 1.3]),
  '⚠ _tell him **that** + information_ · _ask him **to** + action_. _Can you tell him that I rang_ · _Can you ask him to ring me_. Mixing them produces ~~tell him to I rang~~.',
  '**The four things every message needs:** **who** · **when they rang** · **what they want** · **how to reach them**. A message without the fourth is not a message.',
  '**Checking, and it is the whole cycle:** _Let me read it back._ · _Was that fifteen or fifty?_ · _Is that with one L or two?_ · _Could you spell that?_',
  '**Numbers on the telephone:** _0_ is **oh** · _55_ is **double five** · _0991_ is **oh double nine one**. The dangerous pairs are **13/30 · 15/50 · 16/60 · 17/70**, and you must ask every time.',
  '**Practise:** What do you say?  1 You did not hear the number. 2 You are not sure of the spelling. 3 You want to know why. 4 You want to be sure you have it right. 5 They have not said when they can be reached.',
  '**Useful phrases:** Can I take a message? · Can I say why? It helps him decide what to do first. · Let me read it back. · Nobody has ever read it back to me before.',
  '**Pronunciation.** 🔊 **Track 22.8** Numbers at speed. Listen and write eight: three telephone numbers, three prices and two of the dangerous pairs. Then check — and notice which ones you got wrong, because they will be the same ones next time.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back** so that you cannot see each other. A leaves the message on the card; B takes it, asks why, checks the number, reads it back, and writes it in a message-book entry. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Is __________ there?'],
  ['B', 'I\'m afraid __________. Can I take a message?'],
  ['A', 'Can you tell him that __________, and that __________?'],
  ['B', '__________. And can I say why?'],
  ['A', 'Because __________.'],
  ['B', 'Could you give me your number?'],
  ['A', '__________.'],
  ['B', 'Let me read it back. __________. And your name — __________?'],
  ['A', '__________.'],
  ['B', 'So: you rang at __________, you need __________, and he can ring you __________.'],
]));
out.push(table(['Card A – your message', 'Card B – your message'], [
  ['Mrs Jamila Khoury · 0991 448 207 · needs the machine before Thursday, daughter arriving from Dubai', 'Mr Samih Aswad · 0955 613 118 · cannot come on Saturday, asks for Monday instead'],
  ['you can be reached any time before six', 'you can be reached only between two and four'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the message from what you hear. Then check it against the card. Did the number survive?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Back to back. Give your partner a **real** message to pass to somebody — with a real name, a real number and a real reason. They take it, check it, and read it back. Then they give you one.'));
out.push(p('**b**  Then look at the two written messages. **Which of the four things is missing from each?**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Jamila rang for Mr Fouad and Nour took the message. She asked Nour to tell him that she rang and that she needs the machine before Thursday rather than Friday. Nour asked why, and said it helps him decide what to do first, and the reason is that her daughter is coming from Dubai for four days and has not seen the house in two years. Nour read the number back, checked the spelling of the name, and then said the whole message back: when she rang, what she needs, why, and when he can reach her. Mrs Jamila said nobody has ever read it back to her before._'));
out.push(p('**Listener task:** write the number you heard in this room and check it with the person who said it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card above the telephone at TechCare. Answer the questions.'));
out.push(model([
  '**TAKING A MESSAGE** — above the telephone. Written by Omar, after a bad fortnight.',
  'Four things, and a message with three of them is not a message.',
  '**1. Who.** The name, and how it is spelled if there is any doubt at all. _Is that Jameela or Jamila?_ takes four seconds and saves a wrong person being rung.',
  '**2. When they rang.** The day and the time. Not "this morning". Ten past three.',
  '**3. What they want** — in **their** words, not yours. If they say "before Thursday", write "before Thursday"; do not write "soon".',
  '**4. How to reach them, and when.** The number, read back, and the hours. "Any time before six" is part of the message.',
  '**And always ask why.** You are not being nosy. The reason is what lets the person coming back decide what to do first, and most people tell you if you say _"can I say why? it helps him decide what to do first."_',
  '**Read it back. Every time.** It takes eleven seconds. I have timed it.',
]));
out.push(item('1', 'What are the four things?'));
out.push(item('2', 'Why should you write the caller\'s own words?'));
out.push(item('3', 'How does the card suggest you ask for a reason?'));
out.push(writers([
  'An instruction card for a task people think they can already do: **the number of things** → **one numbered item each, with the wrong version next to the right one** → **the thing everybody skips** → **the time it takes**.',
  'Show the **wrong version**: _not "this morning" — ten past three_ · _do not write "soon"_. People do not make these mistakes from ignorance, so a rule alone changes nothing.',
  'Give people **the words for the awkward part**: _"can I say why? it helps him decide what to do first."_ Nobody asks why because nobody knows how to ask it without sounding nosy.',
  '⚠ End with the **cost in seconds**: _it takes eleven seconds. I have timed it._ The reason people skip a step is that they imagine it is expensive.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an instruction card for something people think they can already do (35 words or more).'));
out.push(p('**______________** — ______________. Written by ______________, after ______________.   ______________ things, and ______________ is not ______________.   **1. ______________.** ______________. _______________?_ takes ______________ and saves ______________.   **2. ______________.** Not "______________". ______________.   **3. ______________** — in **their** words, not yours.   **4. ______________.** ______________.   **And always ______________.** You are not ______________. Most people ______________ if you say "______________".   **______________. Every time.** It takes ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A title, who wrote it, and why',
  '_Can you tell him that…_ / _Could you ask her to…_ used correctly where they appear',
  'Every rule has the **wrong version** next to the right one',
  'Exact words for the awkward part, and a cost in seconds',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full card (60 words or more) for something you have watched people do badly: taking a message, locking up, handing over a shift, giving directions, explaining a form. Four numbered rules, wrong versions, the awkward part, and the cost in seconds.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s card as **somebody doing this for the first time tomorrow**. ★ _The rule I would have broken._  ✓ _One rule with no wrong version under it._  ? _What do I do if they refuse to say why?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the cards up where the thing actually happens. **Then: whose card is about something that goes wrong in this room every week?**'));
out.push(hw('Write the **message you once took badly** (40+ words) — what you wrote, what was missing, and what it cost.'));

// ======================= 22.5 =======================
out.push(pb());
out.push(h2('22.5  I am writing to ask whether…'));
out.push(p('**Function:** writing a short formal request   ·   **Grammar:** formal opening and closing lines   ·   **Pronunciation:** stress in formal phrases'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three openings and three closings on the board. For each, the class decides: a friend, a colleague, or somebody you have never met? _Hi · Dear Mr Yilmaz · Dear Sir or Madam · See you · Kind regards · Yours faithfully_'));
out.push(board('I am writing to ask whether…', 'Dear… · I am writing to… · Kind regards'));
out.push(p('**b**  Make it formal. **1** _Hi — can you send the prices?_  **2** _Thanks!_  **3** _Let me know._  **4** _Sorry to bother you._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Lina deciding?   **A** whether to write at all   **B** how to begin and end the letter   **C** what price to ask for'));
out.push(p('**b**  Listen again. **1** What does Mr Khaled say about "Dear Sir or Madam"?   **2** What does he say the first sentence should do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  Dear Mr Yilmaz', [
  ['Lina', 'Do I write "Dear Sir or Madam"?'],
  ['Mr Khaled', 'You know his name.'],
  ['Lina', 'I have never met him.'],
  ['Mr Khaled', 'You have written to him eleven times with Rana\'s name at the bottom. Write "Dear Mr Yilmaz". "Dear Sir or Madam" is for when you genuinely do not know who will open it, and it tells the reader you have not looked.'],
  ['Lina', 'And the first line?'],
  ['Mr Khaled', 'The first line says why you are writing, in one sentence, before anything else. "I am writing to ask whether the April prices are confirmed."'],
  ['Lina', 'That feels abrupt.'],
  ['Mr Khaled', 'It is not abrupt, it is useful. He has forty messages this morning. The ones that say what they are in line one get answered, and the ones that take three paragraphs to arrive get read at six o\'clock or never.'],
  ['Lina', 'And the end?'],
  ['Mr Khaled', '"Kind regards" and your name and your job. "Yours faithfully" only with "Dear Sir or Madam", which you are not using.'],
  ['Lina', 'And do I say that Rana is away?'],
  ['Mr Khaled', 'Say it in one clause and do not apologise for it. You are not a substitute, you are the person writing. If you write like somebody standing in for somebody else, he will wait for her.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing a short formal request**',
  table(['opening', 'with'], [
    ['**Dear Mr / Mrs / Ms** + family name', 'when you know the name — use it'],
    ['**Dear Sir or Madam**', 'only when you genuinely do not know'],
  ], [1.2, 1.6]),
  table(['closing', 'with'], [
    ['**Kind regards** · **Best regards**', '_Dear Mr Yilmaz_'],
    ['**Yours sincerely**', '_Dear Mr Yilmaz_ (more formal)'],
    ['**Yours faithfully**', 'only with _Dear Sir or Madam_'],
  ], [1.2, 1.6]),
  '**The first line says why you are writing:**  _I am writing to **ask whether**…_ · _I am writing to **confirm**…_ · _I am writing **about** order 2214._  One sentence, before anything else.',
  '**Useful formal phrases:**  _**Could you possibly** send…?_ · _**I would be grateful if you could**…_ · _**Please could you** confirm…_ · _**I look forward to hearing from you.**_',
  '⚠ ~~I am writing for ask~~ → _writing **to ask**_.  ⚠ ~~I would be grateful if you can~~ → _if you **could**_.  ⚠ ~~Waiting your reply~~ → _I **look forward to hearing from you**._',
  '**Practise:** Make it formal.  1 Hi — can you send the prices? 2 Can you tell me if it\'s ready? 3 Thanks a lot! 4 Write back soon. 5 Sorry to bother you about this again.',
  '**Pronunciation.** 🔊 **Track 22.10** Formal phrases have a fixed stress and sound wrong without it: _I would be **GRATE**ful if you could…_ · _I look **FOR**ward to **HEAR**ing from you._ Listen and repeat each one three times until it is one piece.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the informal message on the card out loud; B says it again formally, line by line — opening, first line, request, closing. Then swap cards.'));
out.push(dlg(null, [
  ['A', '"__________"'],
  ['B', 'Dear __________,'],
  ['B', 'I am writing to __________.'],
  ['B', 'I would be grateful if you could __________.'],
  ['B', 'I look forward to hearing from you.'],
  ['B', 'Kind regards, __________'],
  ['A', 'Which part was hardest?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the informal messages', 'Card B – the informal messages'], [
  ['"Hi — are the April prices confirmed? Need to know by Thursday."', '"Can you send the certificate? I need it for a job."'],
  ['"Sorry to ask again but has the order gone?"', '"Is the class still on Thursday? Nobody has said."'],
  ['"Can we move the delivery to Monday? Nobody\'s here Friday."', '"I can\'t come on the 14th — can I change it?"'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **first line** of each formal version. Does it say why they are writing?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of a formal request you actually have to make — a certificate, a form, an appointment, a price, a reference. Say the whole letter out loud to your partner: opening, first line, the request, the closing.'));
out.push(p('**b**  Swap. Then each of you say which part you would have got wrong, and whether you have ever written _Dear Sir or Madam_ to somebody whose name you knew.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lina asked whether to write "Dear Sir or Madam" and Mr Khaled said she knows his name, and that she has written to him eleven times with Rana\'s name at the bottom. He says "Dear Sir or Madam" is for when you genuinely do not know who will open it, and that otherwise it tells the reader you have not looked. The first line should say why you are writing, in one sentence, before anything else — he says a man with forty messages answers the ones that say what they are in line one. The ending is "Kind regards" with her name and her job, because "Yours faithfully" only goes with "Dear Sir or Madam". And she should say Rana is away in one clause and not apologise for it, because if she writes like somebody standing in, he will wait for Rana._'));
out.push(p('**Listener task:** write the first line of somebody else\'s letter. Does it say why in one sentence?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Lina sends. Answer the questions.'));
out.push(model([
  '**To:** M. Yilmaz, Anadolu Tekstil   **Subject:** Order 2214 — April prices',
  'Dear Mr Yilmaz,',
  'I am writing to ask whether the April prices are now confirmed.',
  'We received the provisional list on 2 March. Our order 2214 is ready to place and we are holding it only for the final figures.',
  'Rana Haddad is on leave until 11 April; I am handling the account until then and I will be your contact for order 2214 from start to finish.',
  'I would be grateful if you could confirm two things:',
  '· whether the figures of 2 March are final, and',
  '· whether the prices are held for thirty days from confirmation, as they were in January.',
  'If the April list is not yet ready, could you tell me the date you expect it? We can hold the order until the 20th without difficulty, and after that I would need to ask you for a provisional figure.',
  'I look forward to hearing from you.',
  'Kind regards,',
  'Lina Haddad · Accounts · Medica Trading · 0991 205 734',
]));
out.push(item('1', 'What does the first line say?'));
out.push(item('2', 'What two things does she ask him to confirm?'));
out.push(item('3', 'What does she say she will need if the list is late?'));
out.push(writers([
  'A short formal request: **_I am writing to…_ in line one** → **the background in two sentences** → **who you are, in one clause** → **the request, as a short list** → **what happens if the answer is no or late** → **the closing**.',
  'Put the request in a **list** when there is more than one thing. Two questions buried in a paragraph get one answer.',
  'Say who you are **without apologising**: _I am handling the account until then and I will be your contact from start to finish._ No _sorry_, no _I am only_, no _instead of_.',
  '⚠ Always include the _**if not**_ paragraph. A request with no alternative forces the reader to either say yes or say nothing, and most people say nothing.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short formal request (35 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________   Dear ______________,   I am writing to ask whether ______________.   We ______________ on ______________. ______________.   ______________; I am ______________ until then.   I would be grateful if you could confirm two things:   · whether ______________, and   · whether ______________.   If ______________, could you tell me ______________?   I look forward to hearing from you.   Kind regards, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A subject line with the reference, and a name in the greeting if you know it',
  '_I am writing to…_ in the **first** line · _Kind regards_ with a name, _Yours faithfully_ only with _Dear Sir or Madam_',
  'The requests as a short list, not buried in a paragraph',
  'A paragraph saying what happens if the answer is no or late',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real formal request (60 words or more) that you actually need to send — to an office, a company, a school, a landlord, an embassy. First line says why, requests as a list, and an _if not_ paragraph.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **somebody with forty messages this morning**. ★ _I knew what this was in four seconds._  ✓ _One request I could answer with "yes" and still not help you._  ? _What do you want me to do if I cannot?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three **first lines** aloud, on their own. **Which ones would get opened first?** The test is whether you can tell what the letter wants without hearing the rest.'));
out.push(hw('Send it, or write the reason you are not going to (40+ words). If you send it, bring the reply to the next lesson.'));

// ======================= 22.6 =======================
out.push(pb());
out.push(h2('22.6  Thank you for your message — I can confirm…'));
out.push(p('**Function:** replying to a request   ·   **Grammar:** thanking, confirming and offering   ·   **Pronunciation:** polite falling intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Three replies on the board: a **yes**, a **no**, and a **not yet**. The class gives the first sentence of each, formally. Which was hardest?'));
out.push(board('Thank you for your message — I can confirm…', 'Thank you… · I can confirm… · I am afraid…'));
out.push(p('**b**  Reply to each. **1** _Can you confirm the prices?_ (yes)  **2** _Can you deliver on Monday?_ (no)  **3** _Is it ready?_ (not yet)  **4** _Can you send it today?_ (yes, but late)'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has arrived?   **A** the April prices   **B** a refusal   **C** a reply that answers one question of two'));
out.push(p('**b**  Listen again. **1** Which question did he not answer?   **2** What does Lina decide to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  He answered one of the two', [
  ['Lina', 'He has replied, in four hours.'],
  ['Omar', 'That is fast.'],
  ['Lina', 'He says the figures of the second of March are final. He says the April list will be sent on Monday. And he thanks me and says he will deal with me directly until Rana is back.'],
  ['Omar', 'So it worked.'],
  ['Lina', 'Half of it worked. I asked him two things. He has answered the first and said nothing at all about the second — whether the prices are held for thirty days.'],
  ['Omar', 'Did he avoid it, or did he miss it?'],
  ['Lina', 'I think he missed it. It was the second thing in a list of two, and the list was at the bottom of the message.'],
  ['Omar', 'So what do you do?'],
  ['Lina', 'I thank him for the first answer, in one line, and then I ask the second question again, on its own, as the only thing in the message. If a question is the only thing in a message it gets answered.'],
  ['Omar', 'And you do not mention that he did not answer it.'],
  ['Lina', 'Why would I? He is not avoiding me. He is a man with forty messages and my second question was in the wrong place.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Replying to a request**',
  table(['you are saying', 'how to start'], [
    ['**yes**', '_Thank you for your message. **I can confirm that**…_'],
    ['**no**', '_Thank you for your message. **I am afraid** we are unable to…_'],
    ['**not yet**', '_**I will let you know** as soon as… / **I expect to** have an answer by…_'],
    ['**partly**', '_I **can** confirm X. **As for** Y, …_'],
  ], [1, 2]),
  '**The three parts of a good reply:** **thank** → **answer, plainly** → **offer the next step**. The third is what most replies leave out.',
  '**Offering the next step:** _**Please let me know if** you need anything further._ · _**I will send** the list on Monday._ · _**Would it help if** I sent a provisional figure?_',
  '⚠ ~~I confirm you that…~~ → _I **can confirm that**…_  ⚠ ~~We are not able of…~~ → _we are **unable to**…_  ⚠ ~~I inform you that~~ is very old-fashioned; use _I can confirm_ or just say it.',
  '⚠ **When somebody answers one question of two**, do not point it out. Thank them for the answer, then ask the other question **on its own**. A question that is the only thing in a message gets answered.',
  '**Practise:** Write the first line.  1 yes 2 no 3 not yet, but by Friday 4 yes to one, not yet to the other 5 you need more information before you can answer',
  '**Useful phrases:** Thank you for your message. · I can confirm that… · I am afraid… · As for… · I will let you know as soon as… · Please let me know if you need anything further.',
  '**Pronunciation.** 🔊 **Track 22.12** A formal reply **falls** at the end of each sentence and is slower than speech: _Thank you for your message._ ↘ _I can confirm that the figures are final._ ↘ Rising at the end makes a statement sound like a question. Listen to both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the request on the card; B replies out loud with all three parts — thank, answer, next step. One of B\'s replies must be a **no** and one a **not yet**. Then swap cards.'));
out.push(dlg(null, [
  ['A', '"__________?"'],
  ['B', 'Thank you for your message. I can confirm that __________.'],
  ['A', 'And "__________?"'],
  ['B', 'I am afraid __________. __________.'],
  ['A', 'And "__________?"'],
  ['B', 'I will let you know as soon as __________. In the meantime, would it help if __________?'],
]));
out.push(table(['Card A – the requests', 'Card B – the requests'], [
  ['Are the April prices confirmed?', 'Is my certificate ready?'],
  ['Can you deliver on Monday?', 'Can I change my class to the morning?'],
  ['Are the prices held for thirty days?', 'Can you send a reference by Thursday?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the **next step** offered in each reply. Which reply would you be happiest to receive?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your partner makes you a real request; you reply with all three parts, and your answer must be **no** or **not yet**. Then swap. The hard part is the no.'));
out.push(p('**b**  Then both of you say the last time somebody answered **one** of your two questions, and what you did about it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Yilmaz replied in four hours. He says the figures of the second of March are final, he says the April list will be sent on Monday, and he thanks Lina and says he will deal with her directly until Rana is back. But he answered one of her two questions and said nothing about the second — whether the prices are held for thirty days. Lina thinks he missed it rather than avoided it, because it was the second item in a list at the bottom. So she is going to thank him for the first answer in one line and then ask the second question again, on its own, as the only thing in the message, because a question that is the only thing in a message gets answered. And she is not going to mention that he did not answer it, because he is not avoiding her — he is a man with forty messages and her question was in the wrong place._'));
out.push(p('**Listener task:** write the question you have asked that nobody has answered. Where was it in the message?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two messages. Answer the questions.'));
out.push(model([
  '**1 · M. Yilmaz to Lina, 14:20**',
  'Dear Ms Haddad,',
  'Thank you for your message. I can confirm that the figures sent on 2 March are final for March. The April list will be sent on Monday 8 April.',
  'I note that Mrs Haddad is on leave. I am glad to deal with you directly and I will copy you on everything concerning order 2214.',
  'Please let me know if you need anything further.',
  'Kind regards, M. Yilmaz',
  '**2 · Lina to M. Yilmaz, 14:35**',
  'Dear Mr Yilmaz,',
  'Thank you — that is very quick and it is exactly what I needed for March.',
  'One question, which I should have asked more clearly: **are the prices held for thirty days from confirmation, as they were in January?**',
  'That is the only thing I need, and the answer decides whether we place order 2214 this week or next.',
  'Kind regards, Lina Haddad',
]));
out.push(item('1', 'What three things does Mr Yilmaz confirm?'));
out.push(item('2', 'How does Lina take responsibility for the missed question?'));
out.push(item('3', 'Why does she say the answer matters?'));
out.push(writers([
  'A follow-up when one question of two is unanswered: **thank them, briefly and warmly** → **one question, in bold, on its own** → **why the answer matters** → **a short closing**.',
  'Take the blame: _which I should have asked more clearly_. It costs nothing, it is probably true, and it removes any possibility of the reader feeling accused.',
  'Say **why the answer matters**: _the answer decides whether we place the order this week or next._ A question with a consequence attached gets answered first.',
  '⚠ Keep it to **one** question. Adding a second one — even a small one — recreates the problem that produced the message.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reply and a follow-up (35 words or more for each).'));
out.push(p('**Reply:** Dear ______________,   Thank you for your message. I can confirm that ______________. ______________.   I note that ______________. ______________.   Please let me know if ______________.   Kind regards, ______________   **Follow-up:** Dear ______________,   Thank you — ______________.   One question, which I should have asked more clearly: **______________?**   That is the only thing I need, and the answer decides ______________.   Kind regards, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both messages have a greeting, a closing and a name',
  '_I can confirm that…_ · _I am afraid…_ · _I will let you know as soon as…_ used correctly',
  'The reply has all three parts: thank, answer, next step',
  'The follow-up has **one** question only, in bold, with its consequence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the real follow-up (60 words or more) to a question of yours that has never been answered. Thank them for whatever they did answer, take the blame for the question being unclear, ask it once, and say what the answer decides.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s follow-up as **the person who did not answer**. ★ _I would answer this today._  ✓ _One place where I can still feel the complaint._  ? _Is this really the only thing you need?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of you have a question that has been unanswered for more than a month?** Count. Then: how many of those were the second question in a list?'));
out.push(hw('Send the follow-up. Write down what happens (40+ words) — including if nothing does.'));

// ======================= 22.7 =======================
out.push(pb());
out.push(h2('22.7  Review & Mediate: What does the email say?'));
out.push(p('**Function:** explaining a formal email to a colleague   ·   **Recycling:** Units 1–22   ·   **Exam practice:** A2 Key Reading Part 5, Writing Part 6, Listening Part 5'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** She asked me that I ring her.  **2** He told to send it.  **3** He said me to wait.  **4** She asked me to not wait.  **5** He says the parts is on the lorry.  **6** Waiting your reply.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the email that arrives at TechCare while Mr Fouad is away.'));
out.push(box(null, [
  '**From:** Procurement, Al-Sharq Parts   **To:** TechCare   **Subject:** Account 4412 — terms from 1 May',
  'Dear Sir or Madam,',
  'I am writing to inform you of changes to the terms of your account from **1 May**.',
  '**1.** Orders under 100,000 SYP will be despatched as at present, within three working days.',
  '**2.** Orders **over** 100,000 SYP will require **confirmation in writing** before despatch. A telephone confirmation will no longer be accepted.',
  '**3.** Payment terms change from **30 days to 21 days** from the date of invoice.',
  '**4.** Accounts with any invoice unpaid after 21 days will be placed on **pro forma** — that is, payment before despatch — until the account is clear.',
  '**5.** These changes apply to all customers and are not negotiable individually.',
  'Should you wish to discuss the above, please contact this office before **25 April**.',
  'Yours faithfully, Procurement Department',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Nour explains the email to Omar. Which of the five points does she say actually matters to them, and what does she say they must do before the 25th?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  Which of these is ours?', [
  ['Omar', 'It is a page of numbers and I have read it twice.'],
  ['Nour', 'Five points, and three of them are not about us. Let me do the three first and then the two that are.'],
  ['Omar', 'Go on.'],
  ['Nour', 'Point one, nothing changes. Point five says the same for everybody and nobody can argue — that is there so that we do not ring and ask for an exception. And point two is about orders over a hundred thousand, which we have placed twice in two years.'],
  ['Omar', 'So what is ours?'],
  ['Nour', 'Point three. They are changing payment from thirty days to twenty-one. That is nine days less, every month, for ever, and it is the whole email.'],
  ['Omar', 'And point four?'],
  ['Nour', 'Point four is what happens if point three catches us. If one invoice is late, we pay before they send anything — and that is the one that would actually stop the workshop.'],
  ['Omar', 'We have been late. Twice last year.'],
  ['Nour', 'Both times in the thirty-day window, and with twenty-one days both of those would have been late. That is why I am telling you and not leaving it for Mr Fouad.'],
  ['Omar', 'What do we have to do before the twenty-fifth?'],
  ['Nour', 'Nothing we can win. But we can ask one question: whether the twenty-one days runs from the invoice date or the delivery date, because for us that is four days and nobody has said. I am writing it today.'],
]));
out.push(sp());
out.push(box('Language box – explaining a formal email', [
  'Say **how many points there are and how many are yours**, before any detail: _five points, and three of them are not about us_.',
  'Deal with the ones that are **not** yours first and briefly, so they stop taking up room.',
  'Name the point that **is** the email: _point three is the whole email_ — nine days less, every month, for ever.',
  'Explain what a point **protects or threatens**: _point five is there so that we do not ring and ask for an exception_ · _point four is what happens if point three catches us_.',
  'Translate the formal phrase: _pro forma — that is, payment before despatch_.',
  'Check it against **your own history**: _we have been late twice; with twenty-one days both would have been late_. That is what turns a notice into a decision.',
  'End with the **one question worth asking** and who will ask it.',
  '**Useful phrases:** Let me do the three first. · Nothing changes. · That is there so that… · that is the whole email · nothing we can win · but we can ask one question',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the emails below and does **not** show it. A explains it to B and C, who must each end by saying which point is theirs and what one question they would ask. Change roles with the other email.'));
out.push(table(['Email A – from a landlord', 'Email B – from a language centre'], [
  ['1. Rents reviewed annually from 1 July.', '1. Fees unchanged for current students.'],
  ['2. Increases will not exceed 15% in any one year.', '2. New students pay a 20,000 registration fee from September.'],
  ['3. Two months\' notice will be given in writing.', '3. Classes with fewer than 8 students may be merged.'],
  ['4. Repairs remain the landlord\'s responsibility except glass.', '4. Certificates issued only to students attending 80% of lessons.'],
  ['5. These terms apply to all tenants from the next renewal.', '5. Any query must be raised before the end of week two.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the point that **is** theirs, the point that is a **threat if the first one catches them**, and the one question.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a **real** formal message with numbered terms — a bank, a landlord, an employer, a phone company, a school. Explain it to your partner so completely that they could act on it. They must ask: _how many points are mine?_, _which one is the whole message?_, _what happens if it catches me?_ and _what would you ask?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Hiba explained the email from the centre about fees. Five points, and only two are hers: her own fees do not change, which is point one, and point four is the one that matters — certificates only for students who attend eighty per cent of lessons. She has missed four of twenty-four, which is inside it, but two more would take her out, and nobody has ever told the class this. Point three, about merging small classes, is not hers but it is the one she would watch, because 4B is eleven and the rule is eight. And point five is the one everybody will fall over: any question has to be raised before the end of week two, and we are in week six. So I decided I would ask whether the eighty per cent counts the lessons that were cancelled by the centre, because three of my four were weeks when the lift was broken and there was no class at all._'));
out.push(p('**Listener task:** did they tell you which points were **not** theirs first? What is the question they are going to ask?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 5)', 7));
out.push(p('Read the text and write **one** word for each gap. Write only one word.'));
out.push(model([
  '**TAKING MESSAGES FOR TWO WEEKS**  · by Nour',
  'Mr Fouad was away for two weeks and I took every message. There were sixty-one. I thought there would be about twenty.',
  'The first thing I learned is that people will tell you **(1)** ______ you ask. Nobody minds being asked why; I say "can I say why? it helps him decide what to do first", and in two weeks only one person refused.',
  'The second thing is the numbers. I read every number back, every time, and I was wrong **(2)** ______ four occasions out of sixty-one — once because I heard fifteen for fifty and three times because I wrote them down in the wrong order.',
  'The third thing is the hardest. A message asked me **(3)** ______ tell Mr Fouad that somebody "knows what it is about", with no name. Omar told me to write it exactly as it was said, with the time, and that this was enough. I did not believe him, but it **(4)** ______ enough: Mr Fouad read it, said a name out loud, and rang the man back.',
  'The last thing is Omar\'s book. Four messages went missing in the first week, **(5)** ______ two of them were his. A message **(6)** ______ lives in somebody\'s head is not a message.',
]));
[
  '**1**  _people will tell you ___ you ask_',
  '**2**  _I was wrong ___ four occasions_',
  '**3**  _A message asked me ___ tell Mr Fouad_',
  '**4**  _I did not believe him, but it ___ enough_',
  '**5**  _Four messages went missing, ___ two of them were his_',
  '**6**  _A message ___ lives in somebody\'s head is not a message_',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a colleague explaining the email (35 words or more). Use the email above.'));
out.push(p('There are ______________ points and ______________ of them are ours.   ______________ is nothing: ______________. ______________ is about orders over ______________, which we ______________. And ______________ just says ______________.   **The one that matters is ______________:** they are changing ______________ from ______________ to ______________. That is ______________ less, every month.   **And ______________ is what happens if it catches us:** ______________.   We can\'t ______________, but we can ask ______________. I\'m writing ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A first line saying how many points there are and how many are yours',
  '_asked / told somebody to_, _says that_, and formal phrases used correctly',
  'At least two linkers (_and · but · because · so_)',
  'All three content points: which points are not yours · which one is the whole message · the one question to ask',
]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'A friend has asked you to pass a message on to somebody at your work or your college.',
  'Write an email to that person.  In your email:  •  say **who asked you and when**  •  say **what they asked you to do**  •  tell them **how to reach your friend**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  She asked me ___ her.   a) to ring   b) that I ring   c) ringing',
  '2  He told ___ send it today.   a) to   b) me to   c) me that',
  '3  She asked me ___ wait.   a) to not   b) not to   c) don\'t',
  '4  He ___ me that the parts are on the lorry.   a) said   b) told   c) asked',
  '5  He ___ the order has arrived.   a) says   b) say   c) tells',
  '6  Can you tell him ___ I rang?   a) to   b) that   c) for',
  '7  I am writing ___ whether the prices are final.   a) for ask   b) to ask   c) asking',
  '8  I look forward ___ from you.   a) to hear   b) hearing   c) to hearing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 5 style – matching).** 🔊 **Track 22.14** Ms Huda says what each person did with a message. Write a letter **A–G**. There are **two** extra letters.'));
out.push(table(['People', 'What they did'], [
  ['1  Nour ___', 'A  rang the first person in the chain and found a different message'],
  ['2  Omar ___', 'B  wrote down the exact words when there was no name'],
  ['3  Lina ___', 'C  started a book so that nothing lived in anybody\'s head'],
  ['4  Mr Khaled ___', 'D  asked the one unanswered question again, on its own'],
  ['5  Mrs Jamila ___', 'E  told somebody to send a letter without showing it to him first'],
  ['', 'F  refused to leave a message at all'],
  ['', 'G  gave a reason without being asked'],
], [1, 2]));
out.push(dlg('Track 22.14  Audio script (read after the check)', [
  ['Ms Huda', 'Before we finish — a fortnight of messages, and what each person did with them. Nour took a message from a man who would not give his name, and rather than guess what he meant she wrote down his exact words with the time, and that turned out to be enough. Omar started the message book, because four messages went missing in the first week and two of them were his; his line is that a message that lives in somebody\'s head is not a message. Lina asked a supplier two questions and got an answer to one, and instead of pointing that out she thanked him and asked the second one again as the only thing in the message, and it was answered in an hour. Mr Khaled told Lina to send that letter without showing it to him first, after eleven months of reading everything she wrote and changing four words in all of it. And Mrs Jamila, when Nour asked her why she needed the machine before Thursday, gave a real reason, which is the thing that decided what got done first.'],
]));
out.push(p('**C  Writing.** Somebody has left a message for a person who is away. Write it in a message book (40+ words): the day and the time, who rang and their number, what they asked, in their words, what you could not find out, and your initial.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ pass on a request with _ask somebody to_',
  '☐ pass on an instruction with _tell somebody (not) to_',
  '☐ put the _not_ before _to_',
  '☐ change the pronouns when I pass a message on',
  '☐ pass on information with _says (that)_, without changing the tense',
  '☐ take a message with all four things in it, and read it back',
  '☐ write a short formal request that says why in the first line',
  '☐ reply with thank, answer, next step — and ask again when one question is missed',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 23 – NEWS AND OUR CITY', [
  'Unit 22 was about passing on what other people said. Unit 23 is about telling people something **new**: _have you heard? … they\'ve opened the library._',
  'Before the next lesson: find **one** piece of news about the place you live — something that has opened, closed, started or changed in the last month. Not from the internet. From a person.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
